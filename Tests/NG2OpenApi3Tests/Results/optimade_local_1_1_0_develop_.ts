import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Enumeration of aggregate values */
	export enum Aggregate { ok = 'ok', test = 'test', staging = 'staging', no = 'no' }


	/**
	 * A description of groups of sites that are statistically correlated.
	 * - **Examples** (for each entry of the assemblies list):
	 *     - `{"sites_in_groups": [[0], [1]], "group_probabilities: [0.3, 0.7]}`: the first site and the second site never occur at the same time in the unit cell.
	 *       Statistically, 30 % of the times the first site is present, while 70 % of the times the second site is present.
	 *     - `{"sites_in_groups": [[1,2], [3]], "group_probabilities: [0.3, 0.7]}`: the second and third site are either present together or not present; they form the first group of atoms for this assembly.
	 *       The second group is formed by the fourth site. Sites of the first group (the second and the third) are never present at the same time as the fourth site.
	 *       30 % of times sites 1 and 2 are present (and site 3 is absent); 70 % of times site 3 is present (and sites 1 and 2 are absent).
	 */
	export interface Assembly {

		/**
		 * Statistical probability of each group. It MUST have the same length as `sites_in_groups`.
		 * It SHOULD sum to one.
		 * See below for examples of how to specify the probability of the occurrence of a vacancy.
		 * The possible reasons for the values not to sum to one are the same as already specified above for the `concentration` of each `species`.
		 * Required
		 */
		group_probabilities: Array<number>;

		/**
		 * Index of the sites (0-based) that belong to each group for each assembly.
		 * - **Examples**:
		 * - `[[1], [2]]`: two groups, one with the second site, one with the third.
		 * - `[[1,2], [3]]`: one group with the second and third site, one with the fourth.
		 * Required
		 */
		sites_in_groups: Array<string>;
	}

	/**
	 * A description of groups of sites that are statistically correlated.
	 * - **Examples** (for each entry of the assemblies list):
	 *     - `{"sites_in_groups": [[0], [1]], "group_probabilities: [0.3, 0.7]}`: the first site and the second site never occur at the same time in the unit cell.
	 *       Statistically, 30 % of the times the first site is present, while 70 % of the times the second site is present.
	 *     - `{"sites_in_groups": [[1,2], [3]], "group_probabilities: [0.3, 0.7]}`: the second and third site are either present together or not present; they form the first group of atoms for this assembly.
	 *       The second group is formed by the fourth site. Sites of the first group (the second and the third) are never present at the same time as the fourth site.
	 *       30 % of times sites 1 and 2 are present (and site 3 is absent); 70 % of times site 3 is present (and sites 1 and 2 are absent).
	 */
	export interface AssemblyFormProperties {
	}
	export function CreateAssemblyFormGroup() {
		return new FormGroup<AssemblyFormProperties>({
		});

	}


	/**
	 * Members of the attributes object ("attributes") represent information about the resource object in which it's defined.
	 * The keys for Attributes MUST NOT be:
	 *     relationships
	 *     links
	 *     id
	 *     type
	 */
	export interface Attributes {
	}

	/**
	 * Members of the attributes object ("attributes") represent information about the resource object in which it's defined.
	 * The keys for Attributes MUST NOT be:
	 *     relationships
	 *     links
	 *     id
	 *     type
	 */
	export interface AttributesFormProperties {
	}
	export function CreateAttributesFormGroup() {
		return new FormGroup<AttributesFormProperties>({
		});

	}


	/** A JSON object containing information about an available API version */
	export interface AvailableApiVersion {

		/**
		 * A string specifying a versioned base URL that MUST adhere to the rules in section Base URL
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		url: string;

		/**
		 * A string containing the full version number of the API served at that versioned base URL.
		 * The version number string MUST NOT be prefixed by, e.g., 'v'.
		 * Examples: `1.0.0`, `1.0.0-rc.2`.
		 * Required
		 */
		version: string;
	}

	/** A JSON object containing information about an available API version */
	export interface AvailableApiVersionFormProperties {

		/**
		 * A string specifying a versioned base URL that MUST adhere to the rules in section Base URL
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * A string containing the full version number of the API served at that versioned base URL.
		 * The version number string MUST NOT be prefixed by, e.g., 'v'.
		 * Examples: `1.0.0`, `1.0.0-rc.2`.
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAvailableApiVersionFormGroup() {
		return new FormGroup<AvailableApiVersionFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('.+/v[0-1](\.[0-9]+)*/?$')]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$')]),
		});

	}


	/** Attributes for Base URL Info endpoint */
	export interface BaseInfoAttributes {

		/**
		 * Presently used full version of the OPTIMADE API.
		 * The version number string MUST NOT be prefixed by, e.g., "v".
		 * Examples: `1.0.0`, `1.0.0-rc.2`.
		 * Required
		 */
		api_version: string;

		/**
		 * A list of dictionaries of available API versions at other base URLs
		 * Required
		 */
		available_api_versions: Array<AvailableApiVersion>;

		/**
		 * List of available endpoints (i.e., the string to be appended to the versioned base URL).
		 * Required
		 */
		available_endpoints: Array<string>;

		/**
		 * Available entry endpoints as a function of output formats.
		 * Required
		 */
		entry_types_by_format: {[id: string]: Array<string> };

		/** List of available output formats. */
		formats?: Array<string>;

		/** If true, this is an index meta-database base URL (see section Index Meta-Database). If this member is not provided, the client MUST assume this is not an index meta-database base URL (i.e., the default is for `is_index` to be `false`). */
		is_index?: boolean | null;
	}

	/** Attributes for Base URL Info endpoint */
	export interface BaseInfoAttributesFormProperties {

		/**
		 * Presently used full version of the OPTIMADE API.
		 * The version number string MUST NOT be prefixed by, e.g., "v".
		 * Examples: `1.0.0`, `1.0.0-rc.2`.
		 * Required
		 */
		api_version: FormControl<string | null | undefined>,

		/**
		 * Available entry endpoints as a function of output formats.
		 * Required
		 */
		entry_types_by_format: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** If true, this is an index meta-database base URL (see section Index Meta-Database). If this member is not provided, the client MUST assume this is not an index meta-database base URL (i.e., the default is for `is_index` to be `false`). */
		is_index: FormControl<boolean | null | undefined>,
	}
	export function CreateBaseInfoAttributesFormGroup() {
		return new FormGroup<BaseInfoAttributesFormProperties>({
			api_version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$')]),
			entry_types_by_format: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined, [Validators.required]),
			is_index: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Resource objects appear in a JSON API document to represent resources. */
	export interface BaseInfoResource {

		/**
		 * Attributes for Base URL Info endpoint
		 * Required
		 */
		attributes: BaseInfoAttributes;

		/** Required */
		id: string;

		/** a links object containing links related to the resource. */
		links?: ResourceLinks;

		/** a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship. */
		meta?: Meta;

		/**
		 * [Relationships object](https://jsonapi.org/format/1.0/#document-resource-object-relationships)
		 * describing relationships between the resource and other JSON API resources.
		 */
		relationships?: Relationships;

		/** Required */
		type: string;
	}

	/** Resource objects appear in a JSON API document to represent resources. */
	export interface BaseInfoResourceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateBaseInfoResourceFormGroup() {
		return new FormGroup<BaseInfoResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^/$')]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^info$')]),
		});

	}


	/** A Resource Links object */
	export interface ResourceLinks {

		/** A link that identifies the resource represented by the resource object. */
		self?: string;
	}

	/** A Resource Links object */
	export interface ResourceLinksFormProperties {

		/** A link that identifies the resource represented by the resource object. */
		self: FormControl<string | null | undefined>,
	}
	export function CreateResourceLinksFormGroup() {
		return new FormGroup<ResourceLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Non-standard meta-information that can not be represented as an attribute or relationship. */
	export interface Meta {
	}

	/** Non-standard meta-information that can not be represented as an attribute or relationship. */
	export interface MetaFormProperties {
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
		});

	}


	/**
	 * Members of the relationships object ("relationships") represent references from the resource object in which it's defined to other resource objects.
	 * Keys MUST NOT be:
	 *     type
	 *     id
	 */
	export interface Relationships {
	}

	/**
	 * Members of the relationships object ("relationships") represent references from the resource object in which it's defined to other resource objects.
	 * Keys MUST NOT be:
	 *     type
	 *     id
	 */
	export interface RelationshipsFormProperties {
	}
	export function CreateRelationshipsFormGroup() {
		return new FormGroup<RelationshipsFormProperties>({
		});

	}


	/** Specific meta field for base relationship resource */
	export interface BaseRelationshipMeta {

		/**
		 * OPTIONAL human-readable description of the relationship
		 * Required
		 */
		description: string;
	}

	/** Specific meta field for base relationship resource */
	export interface BaseRelationshipMetaFormProperties {

		/**
		 * OPTIONAL human-readable description of the relationship
		 * Required
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateBaseRelationshipMetaFormGroup() {
		return new FormGroup<BaseRelationshipMetaFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Minimum requirements to represent a relationship resource */
	export interface BaseRelationshipResource {

		/**
		 * Resource ID
		 * Required
		 */
		id: string;

		/** Relationship meta field. MUST contain 'description' if supplied. */
		meta?: BaseRelationshipMeta;

		/**
		 * Resource type
		 * Required
		 */
		type: string;
	}

	/** Minimum requirements to represent a relationship resource */
	export interface BaseRelationshipResourceFormProperties {

		/**
		 * Resource ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource type
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateBaseRelationshipResourceFormGroup() {
		return new FormGroup<BaseRelationshipResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Optimade Data Types
	 * See the section "Data types" in the OPTIMADE API specification for more information.
	 */
	export enum DataType { string = 'string', integer = 'integer', float = 'float', boolean = 'boolean', timestamp = 'timestamp', list = 'list', dictionary = 'dictionary', unknown = 'unknown' }

	export interface EntryInfoProperty {

		/**
		 * A human-readable description of the entry property
		 * Required
		 */
		description: string;

		/**
		 * Defines whether the entry property can be used for sorting with the "sort" parameter.
		 * If the entry listing endpoint supports sorting, this key MUST be present for sortable properties with value `true`.
		 */
		sortable?: boolean | null;

		/**
		 * The type of the property's value.
		 * This MUST be any of the types defined in the Data types section.
		 * For the purpose of compatibility with future versions of this specification, a client MUST accept values that are not `string` values specifying any of the OPTIMADE Data types, but MUST then also disregard the `type` field.
		 * Note, if the value is a nested type, only the outermost type should be reported.
		 * E.g., for the entry resource `structures`, the `species` property is defined as a list of dictionaries, hence its `type` value would be `list`.
		 */
		type?: DataType;

		/**
		 * The physical unit of the entry property.
		 * This MUST be a valid representation of units according to version 2.1 of [The Unified Code for Units of Measure](https://unitsofmeasure.org/ucum.html).
		 * It is RECOMMENDED that non-standard (non-SI) units are described in the description for the property.
		 */
		unit?: string | null;
	}
	export interface EntryInfoPropertyFormProperties {

		/**
		 * A human-readable description of the entry property
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Defines whether the entry property can be used for sorting with the "sort" parameter.
		 * If the entry listing endpoint supports sorting, this key MUST be present for sortable properties with value `true`.
		 */
		sortable: FormControl<boolean | null | undefined>,

		/**
		 * The type of the property's value.
		 * This MUST be any of the types defined in the Data types section.
		 * For the purpose of compatibility with future versions of this specification, a client MUST accept values that are not `string` values specifying any of the OPTIMADE Data types, but MUST then also disregard the `type` field.
		 * Note, if the value is a nested type, only the outermost type should be reported.
		 * E.g., for the entry resource `structures`, the `species` property is defined as a list of dictionaries, hence its `type` value would be `list`.
		 */
		type: FormControl<DataType | null | undefined>,

		/**
		 * The physical unit of the entry property.
		 * This MUST be a valid representation of units according to version 2.1 of [The Unified Code for Units of Measure](https://unitsofmeasure.org/ucum.html).
		 * It is RECOMMENDED that non-standard (non-SI) units are described in the description for the property.
		 */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateEntryInfoPropertyFormGroup() {
		return new FormGroup<EntryInfoPropertyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sortable: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<DataType | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EntryInfoResource {

		/**
		 * Description of the entry.
		 * Required
		 */
		description: string;

		/**
		 * List of output formats available for this type of entry.
		 * Required
		 */
		formats: Array<string>;

		/**
		 * Dictionary of available output fields for this entry type, where the keys are the values of the `formats` list and the values are the keys of the `properties` dictionary.
		 * Required
		 */
		output_fields_by_format: {[id: string]: Array<string> };

		/**
		 * A dictionary describing queryable properties for this entry type, where each key is a property name.
		 * Required
		 */
		properties: {[id: string]: EntryInfoProperty };
	}
	export interface EntryInfoResourceFormProperties {

		/**
		 * Description of the entry.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Dictionary of available output fields for this entry type, where the keys are the values of the `formats` list and the values are the keys of the `properties` dictionary.
		 * Required
		 */
		output_fields_by_format: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * A dictionary describing queryable properties for this entry type, where each key is a property name.
		 * Required
		 */
		properties: FormControl<{[id: string]: EntryInfoProperty } | null | undefined>,
	}
	export function CreateEntryInfoResourceFormGroup() {
		return new FormGroup<EntryInfoResourceFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			output_fields_by_format: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<{[id: string]: EntryInfoProperty } | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** errors are not allowed */
	export interface EntryInfoResponse {

		/**
		 * OPTIMADE information for an entry endpoint
		 * Required
		 */
		data: EntryInfoResource;

		/** A list of unique errors */
		errors?: Array<Error>;

		/** A list of unique included resources */
		included?: Array<Resource>;

		/** Information about the JSON API used */
		jsonapi?: JsonApi;

		/** Links associated with the primary data or errors */
		links?: ToplevelLinks;

		/**
		 * A meta object containing non-standard information
		 * Required
		 */
		meta: ResponseMeta;
	}

	/** errors are not allowed */
	export interface EntryInfoResponseFormProperties {
	}
	export function CreateEntryInfoResponseFormGroup() {
		return new FormGroup<EntryInfoResponseFormProperties>({
		});

	}


	/** An error response */
	export interface Error {

		/** an application-specific error code, expressed as a string value. */
		code?: string | null;

		/** A human-readable explanation specific to this occurrence of the problem. */
		detail?: string | null;

		/** A unique identifier for this particular occurrence of the problem. */
		id?: string | null;

		/** A links object storing about */
		links?: ErrorLinks;

		/** a meta object containing non-standard meta-information about the error. */
		meta?: Meta;

		/** An object containing references to the source of the error */
		source?: ErrorSource;

		/** the HTTP status code applicable to this problem, expressed as a string value. */
		status?: string | null;

		/** A short, human-readable summary of the problem. It **SHOULD NOT** change from occurrence to occurrence of the problem, except for purposes of localization. */
		title?: string | null;
	}

	/** An error response */
	export interface ErrorFormProperties {

		/** an application-specific error code, expressed as a string value. */
		code: FormControl<string | null | undefined>,

		/** A human-readable explanation specific to this occurrence of the problem. */
		detail: FormControl<string | null | undefined>,

		/** A unique identifier for this particular occurrence of the problem. */
		id: FormControl<string | null | undefined>,

		/** the HTTP status code applicable to this problem, expressed as a string value. */
		status: FormControl<string | null | undefined>,

		/** A short, human-readable summary of the problem. It **SHOULD NOT** change from occurrence to occurrence of the problem, except for purposes of localization. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Links object specific to Error objects */
	export interface ErrorLinks {

		/** A link that leads to further details about this particular occurrence of the problem. */
		about?: string;
	}

	/** A Links object specific to Error objects */
	export interface ErrorLinksFormProperties {

		/** A link that leads to further details about this particular occurrence of the problem. */
		about: FormControl<string | null | undefined>,
	}
	export function CreateErrorLinksFormGroup() {
		return new FormGroup<ErrorLinksFormProperties>({
			about: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** an object containing references to the source of the error */
	export interface ErrorSource {

		/** a string indicating which URI query parameter caused the error. */
		parameter?: string | null;

		/** a JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, or "/data/attributes/title" for a specific attribute]. */
		pointer?: string | null;
	}

	/** an object containing references to the source of the error */
	export interface ErrorSourceFormProperties {

		/** a string indicating which URI query parameter caused the error. */
		parameter: FormControl<string | null | undefined>,

		/** a JSON Pointer [RFC6901] to the associated entity in the request document [e.g. "/data" for a primary data object, or "/data/attributes/title" for a specific attribute]. */
		pointer: FormControl<string | null | undefined>,
	}
	export function CreateErrorSourceFormGroup() {
		return new FormGroup<ErrorSourceFormProperties>({
			parameter: new FormControl<string | null | undefined>(undefined),
			pointer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource objects appear in a JSON API document to represent resources. */
	export interface Resource {

		/** an attributes object representing some of the resource’s data. */
		attributes?: Attributes;

		/**
		 * Resource ID
		 * Required
		 */
		id: string;

		/** a links object containing links related to the resource. */
		links?: ResourceLinks;

		/** a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship. */
		meta?: Meta;

		/**
		 * [Relationships object](https://jsonapi.org/format/1.0/#document-resource-object-relationships)
		 * describing relationships between the resource and other JSON API resources.
		 */
		relationships?: Relationships;

		/**
		 * Resource type
		 * Required
		 */
		type: string;
	}

	/** Resource objects appear in a JSON API document to represent resources. */
	export interface ResourceFormProperties {

		/**
		 * Resource ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource type
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object describing the server's implementation */
	export interface JsonApi {

		/** Non-standard meta information */
		meta?: Meta;

		/** Version of the json API used */
		version?: string | null;
	}

	/** An object describing the server's implementation */
	export interface JsonApiFormProperties {

		/** Version of the json API used */
		version: FormControl<string | null | undefined>,
	}
	export function CreateJsonApiFormGroup() {
		return new FormGroup<JsonApiFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of Links objects, possibly including pagination */
	export interface ToplevelLinks {

		/** The first page of data */
		first?: string;

		/** The last page of data */
		last?: string;

		/** The next page of data */
		next?: string;

		/** The previous page of data */
		prev?: string;

		/** A related resource link */
		related?: string;

		/** A link to itself */
		self?: string;
	}

	/** A set of Links objects, possibly including pagination */
	export interface ToplevelLinksFormProperties {

		/** The first page of data */
		first: FormControl<string | null | undefined>,

		/** The last page of data */
		last: FormControl<string | null | undefined>,

		/** The next page of data */
		next: FormControl<string | null | undefined>,

		/** The previous page of data */
		prev: FormControl<string | null | undefined>,

		/** A related resource link */
		related: FormControl<string | null | undefined>,

		/** A link to itself */
		self: FormControl<string | null | undefined>,
	}
	export function CreateToplevelLinksFormGroup() {
		return new FormGroup<ToplevelLinksFormProperties>({
			first: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
	 * that contains JSON API meta objects of non-standard
	 * meta-information.
	 * OPTIONAL additional information global to the query that is not
	 * specified in this document, MUST start with a
	 * database-provider-specific prefix.
	 */
	export interface ResponseMeta {

		/**
		 * Presently used full version of the OPTIMADE API.
		 * The version number string MUST NOT be prefixed by, e.g., "v".
		 * Examples: `1.0.0`, `1.0.0-rc.2`.
		 * Required
		 */
		api_version: string;

		/** An integer containing the total number of data resource objects available in the database for the endpoint. */
		data_available?: number | null;

		/**
		 * An integer containing the total number of data resource objects returned for the current `filter` query, independent of pagination.
		 * Minimum: 0
		 */
		data_returned?: number | null;

		/** a dictionary describing the server implementation */
		implementation?: Implementation;

		/** a string containing the last ID returned */
		last_id?: string | null;

		/**
		 * `false` if the response contains all data for the request (e.g., a request issued to a single entry endpoint, or a `filter` query at the last page of a paginated response) and `true` if the response is incomplete in the sense that multiple objects match the request, and not all of them have been included in the response (e.g., a query with multiple pages that is not at the last page).
		 * Required
		 */
		more_data_available: boolean;

		/** information on the database provider of the implementation. */
		provider?: Provider;

		/**
		 * Information on the Query that was requested
		 * Required
		 */
		query: ResponseMetaQuery;

		/** response string from the server */
		response_message?: string | null;

		/**
		 * A [JSON API links object](http://jsonapi.org/format/1.0/#document-links) that points to a schema for the response.
		 * If it is a string, or a dictionary containing no `meta` field, the provided URL MUST point at an [OpenAPI](https://swagger.io/specification/) schema.
		 * It is possible that future versions of this specification allows for alternative schema types.
		 * Hence, if the `meta` field of the JSON API links object is provided and contains a field `schema_type` that is not equal to the string `OpenAPI` the client MUST not handle failures to parse the schema or to validate the response against the schema as errors.
		 */
		schema?: string;

		/** A timestamp containing the date and time at which the query was executed. */
		time_stamp?: Date | null;

		/**
		 * A list of warning resource objects representing non-critical errors or warnings.
		 * A warning resource object is defined similarly to a [JSON API error object](http://jsonapi.org/format/1.0/#error-objects), but MUST also include the field `type`, which MUST have the value `"warning"`.
		 * The field `detail` MUST be present and SHOULD contain a non-critical message, e.g., reporting unrecognized search attributes or deprecated features.
		 * The field `status`, representing a HTTP response status code, MUST NOT be present for a warning resource object.
		 * This is an exclusive field for error resource objects.
		 */
		warnings?: Array<Warnings>;
	}

	/**
	 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
	 * that contains JSON API meta objects of non-standard
	 * meta-information.
	 * OPTIONAL additional information global to the query that is not
	 * specified in this document, MUST start with a
	 * database-provider-specific prefix.
	 */
	export interface ResponseMetaFormProperties {

		/**
		 * Presently used full version of the OPTIMADE API.
		 * The version number string MUST NOT be prefixed by, e.g., "v".
		 * Examples: `1.0.0`, `1.0.0-rc.2`.
		 * Required
		 */
		api_version: FormControl<string | null | undefined>,

		/** An integer containing the total number of data resource objects available in the database for the endpoint. */
		data_available: FormControl<number | null | undefined>,

		/**
		 * An integer containing the total number of data resource objects returned for the current `filter` query, independent of pagination.
		 * Minimum: 0
		 */
		data_returned: FormControl<number | null | undefined>,

		/** a string containing the last ID returned */
		last_id: FormControl<string | null | undefined>,

		/**
		 * `false` if the response contains all data for the request (e.g., a request issued to a single entry endpoint, or a `filter` query at the last page of a paginated response) and `true` if the response is incomplete in the sense that multiple objects match the request, and not all of them have been included in the response (e.g., a query with multiple pages that is not at the last page).
		 * Required
		 */
		more_data_available: FormControl<boolean | null | undefined>,

		/** response string from the server */
		response_message: FormControl<string | null | undefined>,

		/**
		 * A [JSON API links object](http://jsonapi.org/format/1.0/#document-links) that points to a schema for the response.
		 * If it is a string, or a dictionary containing no `meta` field, the provided URL MUST point at an [OpenAPI](https://swagger.io/specification/) schema.
		 * It is possible that future versions of this specification allows for alternative schema types.
		 * Hence, if the `meta` field of the JSON API links object is provided and contains a field `schema_type` that is not equal to the string `OpenAPI` the client MUST not handle failures to parse the schema or to validate the response against the schema as errors.
		 */
		schema: FormControl<string | null | undefined>,

		/** A timestamp containing the date and time at which the query was executed. */
		time_stamp: FormControl<Date | null | undefined>,
	}
	export function CreateResponseMetaFormGroup() {
		return new FormGroup<ResponseMetaFormProperties>({
			api_version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$')]),
			data_available: new FormControl<number | null | undefined>(undefined),
			data_returned: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			last_id: new FormControl<string | null | undefined>(undefined),
			more_data_available: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			response_message: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			time_stamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information on the server implementation */
	export interface Implementation {

		/** A [JSON API links object](http://jsonapi.org/format/1.0/#document-links) pointing to the homepage of the implementation. */
		homepage?: string;

		/** A [JSON API links object](http://jsonapi.org/format/1.0/#document-links) pointing to the implementation's issue tracker. */
		issue_tracker?: string;

		/** A dictionary providing details about the maintainer of the implementation. */
		maintainer?: ImplementationMaintainer;

		/** name of the implementation */
		name?: string | null;

		/** A [JSON API links object](http://jsonapi.org/format/1.0/#document-links) pointing to the implementation source, either downloadable archive or version control system. */
		source_url?: string;

		/** version string of the current implementation */
		version?: string | null;
	}

	/** Information on the server implementation */
	export interface ImplementationFormProperties {

		/** A [JSON API links object](http://jsonapi.org/format/1.0/#document-links) pointing to the homepage of the implementation. */
		homepage: FormControl<string | null | undefined>,

		/** A [JSON API links object](http://jsonapi.org/format/1.0/#document-links) pointing to the implementation's issue tracker. */
		issue_tracker: FormControl<string | null | undefined>,

		/** name of the implementation */
		name: FormControl<string | null | undefined>,

		/** A [JSON API links object](http://jsonapi.org/format/1.0/#document-links) pointing to the implementation source, either downloadable archive or version control system. */
		source_url: FormControl<string | null | undefined>,

		/** version string of the current implementation */
		version: FormControl<string | null | undefined>,
	}
	export function CreateImplementationFormGroup() {
		return new FormGroup<ImplementationFormProperties>({
			homepage: new FormControl<string | null | undefined>(undefined),
			issue_tracker: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			source_url: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the maintainer of the implementation */
	export interface ImplementationMaintainer {

		/**
		 * the maintainer's email address
		 * Required
		 */
		email: string;
	}

	/** Details about the maintainer of the implementation */
	export interface ImplementationMaintainerFormProperties {

		/**
		 * the maintainer's email address
		 * Required
		 */
		email: FormControl<string | null | undefined>,
	}
	export function CreateImplementationMaintainerFormGroup() {
		return new FormGroup<ImplementationMaintainerFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information on the database provider of the implementation. */
	export interface Provider {

		/**
		 * a longer description of the database provider
		 * Required
		 */
		description: string;

		/** a [JSON API links object](http://jsonapi.org/format/1.0#document-links) pointing to homepage of the database provider, either directly as a string, or as a link object. */
		homepage?: string;

		/**
		 * a short name for the database provider
		 * Required
		 */
		name: string;

		/**
		 * database-provider-specific prefix as found in section Database-Provider-Specific Namespace Prefixes.
		 * Required
		 */
		prefix: string;
	}

	/** Information on the database provider of the implementation. */
	export interface ProviderFormProperties {

		/**
		 * a longer description of the database provider
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/** a [JSON API links object](http://jsonapi.org/format/1.0#document-links) pointing to homepage of the database provider, either directly as a string, or as a link object. */
		homepage: FormControl<string | null | undefined>,

		/**
		 * a short name for the database provider
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * database-provider-specific prefix as found in section Database-Provider-Specific Namespace Prefixes.
		 * Required
		 */
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateProviderFormGroup() {
		return new FormGroup<ProviderFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			homepage: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-z]([a-z]|[0-9]|_)*$')]),
		});

	}


	/** Information on the query that was requested. */
	export interface ResponseMetaQuery {

		/**
		 * A string with the part of the URL following the versioned or unversioned base URL that serves the API.
		 * Query parameters that have not been used in processing the request MAY be omitted.
		 * In particular, if no query parameters have been involved in processing the request, the query part of the URL MAY be excluded.
		 * Example: `/structures?filter=nelements=2`
		 * Required
		 */
		representation: string;
	}

	/** Information on the query that was requested. */
	export interface ResponseMetaQueryFormProperties {

		/**
		 * A string with the part of the URL following the versioned or unversioned base URL that serves the API.
		 * Query parameters that have not been used in processing the request MAY be omitted.
		 * In particular, if no query parameters have been involved in processing the request, the query part of the URL MAY be excluded.
		 * Example: `/structures?filter=nelements=2`
		 * Required
		 */
		representation: FormControl<string | null | undefined>,
	}
	export function CreateResponseMetaQueryFormGroup() {
		return new FormGroup<ResponseMetaQueryFormProperties>({
			representation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * OPTIMADE-specific warning class based on OPTIMADE-specific JSON API Error.
	 * From the specification:
	 * A warning resource object is defined similarly to a JSON API error object, but MUST also include the field type, which MUST have the value "warning".
	 * The field detail MUST be present and SHOULD contain a non-critical message, e.g., reporting unrecognized search attributes or deprecated features.
	 * Note: Must be named "Warnings", since "Warning" is a built-in Python class.
	 */
	export interface Warnings {

		/** an application-specific error code, expressed as a string value. */
		code?: string | null;

		/**
		 * A human-readable explanation specific to this occurrence of the problem.
		 * Required
		 */
		detail: string;

		/** A unique identifier for this particular occurrence of the problem. */
		id?: string | null;

		/** A links object storing about */
		links?: ErrorLinks;

		/** a meta object containing non-standard meta-information about the error. */
		meta?: Meta;

		/** An object containing references to the source of the error */
		source?: ErrorSource;

		/** A short, human-readable summary of the problem. It **SHOULD NOT** change from occurrence to occurrence of the problem, except for purposes of localization. */
		title?: string | null;

		/**
		 * Warnings must be of type "warning"
		 * Required
		 */
		type: string;
	}

	/**
	 * OPTIMADE-specific warning class based on OPTIMADE-specific JSON API Error.
	 * From the specification:
	 * A warning resource object is defined similarly to a JSON API error object, but MUST also include the field type, which MUST have the value "warning".
	 * The field detail MUST be present and SHOULD contain a non-critical message, e.g., reporting unrecognized search attributes or deprecated features.
	 * Note: Must be named "Warnings", since "Warning" is a built-in Python class.
	 */
	export interface WarningsFormProperties {

		/** an application-specific error code, expressed as a string value. */
		code: FormControl<string | null | undefined>,

		/**
		 * A human-readable explanation specific to this occurrence of the problem.
		 * Required
		 */
		detail: FormControl<string | null | undefined>,

		/** A unique identifier for this particular occurrence of the problem. */
		id: FormControl<string | null | undefined>,

		/** A short, human-readable summary of the problem. It **SHOULD NOT** change from occurrence to occurrence of the problem, except for purposes of localization. */
		title: FormControl<string | null | undefined>,

		/**
		 * Warnings must be of type "warning"
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWarningsFormGroup() {
		return new FormGroup<WarningsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^warning$')]),
		});

	}


	/** This model wraps the JSON API Relationships to include type-specific top level keys. */
	export interface EntryRelationships {

		/** Object containing links to relationships with entries of the `references` type. */
		references?: ReferenceRelationship;

		/** Object containing links to relationships with entries of the `structures` type. */
		structures?: StructureRelationship;
	}

	/** This model wraps the JSON API Relationships to include type-specific top level keys. */
	export interface EntryRelationshipsFormProperties {
	}
	export function CreateEntryRelationshipsFormGroup() {
		return new FormGroup<EntryRelationshipsFormProperties>({
		});

	}


	/** Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource */
	export interface ReferenceRelationship {

		/** Resource linkage */
		data?: BaseRelationshipResource;

		/** a links object containing at least one of the following: self, related */
		links?: RelationshipLinks;

		/** a meta object that contains non-standard meta-information about the relationship. */
		meta?: Meta;
	}

	/** Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource */
	export interface ReferenceRelationshipFormProperties {
	}
	export function CreateReferenceRelationshipFormGroup() {
		return new FormGroup<ReferenceRelationshipFormProperties>({
		});

	}


	/**
	 * A resource object **MAY** contain references to other resource objects ("relationships").
	 * Relationships may be to-one or to-many.
	 * Relationships can be specified by including a member in a resource's links object.
	 */
	export interface RelationshipLinks {

		/** A [related resource link](https://jsonapi.org/format/1.0/#document-resource-object-related-resource-links). */
		related?: string;

		/**
		 * A link for the relationship itself (a 'relationship link').
		 * This link allows the client to directly manipulate the relationship.
		 * When fetched successfully, this link returns the [linkage](https://jsonapi.org/format/1.0/#document-resource-object-linkage) for the related resources as its primary data.
		 * (See [Fetching Relationships](https://jsonapi.org/format/1.0/#fetching-relationships).)
		 */
		self?: string;
	}

	/**
	 * A resource object **MAY** contain references to other resource objects ("relationships").
	 * Relationships may be to-one or to-many.
	 * Relationships can be specified by including a member in a resource's links object.
	 */
	export interface RelationshipLinksFormProperties {

		/** A [related resource link](https://jsonapi.org/format/1.0/#document-resource-object-related-resource-links). */
		related: FormControl<string | null | undefined>,

		/**
		 * A link for the relationship itself (a 'relationship link').
		 * This link allows the client to directly manipulate the relationship.
		 * When fetched successfully, this link returns the [linkage](https://jsonapi.org/format/1.0/#document-resource-object-linkage) for the related resources as its primary data.
		 * (See [Fetching Relationships](https://jsonapi.org/format/1.0/#fetching-relationships).)
		 */
		self: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipLinksFormGroup() {
		return new FormGroup<RelationshipLinksFormProperties>({
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource */
	export interface StructureRelationship {

		/** Resource linkage */
		data?: BaseRelationshipResource;

		/** a links object containing at least one of the following: self, related */
		links?: RelationshipLinks;

		/** a meta object that contains non-standard meta-information about the relationship. */
		meta?: Meta;
	}

	/** Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource */
	export interface StructureRelationshipFormProperties {
	}
	export function CreateStructureRelationshipFormGroup() {
		return new FormGroup<StructureRelationshipFormProperties>({
		});

	}


	/** The base model for an entry resource. */
	export interface EntryResource {

		/**
		 * A dictionary, containing key-value pairs representing the entry's properties, except for `type` and `id`.
		 * Database-provider-specific properties need to include the database-provider-specific prefix (see section on Database-Provider-Specific Namespace Prefixes).
		 * Required
		 */
		attributes: EntryResourceAttributes;

		/**
		 * An entry's ID as defined in section Definition of Terms.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: MUST be supported by all implementations, MUST NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response.
		 * - **Examples**:
		 * - `"db/1234567"`
		 * - `"cod/2000000"`
		 * - `"cod/2000000@1234567"`
		 * - `"nomad/L1234567890"`
		 * - `"42"`
		 * Required
		 */
		id: string;

		/** a links object containing links related to the resource. */
		links?: ResourceLinks;

		/** a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship. */
		meta?: Meta;

		/**
		 * A dictionary containing references to other entries according to the description in section Relationships encoded as [JSON API Relationships](https://jsonapi.org/format/1.0/#document-resource-object-relationships).
		 * The OPTIONAL human-readable description of the relationship MAY be provided in the `description` field inside the `meta` dictionary of the JSON API resource identifier object.
		 */
		relationships?: EntryRelationships;

		/**
		 * The name of the type of an entry.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: MUST be supported by all implementations, MUST NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response.
		 * - MUST be an existing entry type.
		 * - The entry of type `<type>` and ID `<id>` MUST be returned in response to a request for `/<type>/<id>` under the versioned base URL.
		 * - **Example**: `"structures"`
		 * Required
		 */
		type: string;
	}

	/** The base model for an entry resource. */
	export interface EntryResourceFormProperties {

		/**
		 * An entry's ID as defined in section Definition of Terms.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: MUST be supported by all implementations, MUST NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response.
		 * - **Examples**:
		 * - `"db/1234567"`
		 * - `"cod/2000000"`
		 * - `"cod/2000000@1234567"`
		 * - `"nomad/L1234567890"`
		 * - `"42"`
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the type of an entry.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: MUST be supported by all implementations, MUST NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response.
		 * - MUST be an existing entry type.
		 * - The entry of type `<type>` and ID `<id>` MUST be returned in response to a request for `/<type>/<id>` under the versioned base URL.
		 * - **Example**: `"structures"`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEntryResourceFormGroup() {
		return new FormGroup<EntryResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains key-value pairs representing the entry's properties. */
	export interface EntryResourceAttributes {

		/**
		 * The entry's immutable ID (e.g., an UUID). This is important for databases having preferred IDs that point to "the latest version" of a record, but still offer access to older variants. This ID maps to the version-specific record, in case it changes in the future.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Examples**:
		 * - `"8bd3e750-b477-41a0-9b11-3a799f21b44f"`
		 * - `"fjeiwoj,54;@=%<>#32"` (Strings that are not URL-safe are allowed.)
		 */
		immutable_id?: string | null;

		/**
		 * Date and time representing when the entry was last modified.
		 * - **Type**: timestamp.
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response unless the query parameter `response_fields` is present and does not include this property.
		 * - **Example**:
		 * - As part of JSON response format: `"2007-04-05T14:30:20Z"` (i.e., encoded as an [RFC 3339 Internet Date/Time Format](https://tools.ietf.org/html/rfc3339#section-5.6) string.)
		 * Required
		 */
		last_modified: Date;
	}

	/** Contains key-value pairs representing the entry's properties. */
	export interface EntryResourceAttributesFormProperties {

		/**
		 * The entry's immutable ID (e.g., an UUID). This is important for databases having preferred IDs that point to "the latest version" of a record, but still offer access to older variants. This ID maps to the version-specific record, in case it changes in the future.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Examples**:
		 * - `"8bd3e750-b477-41a0-9b11-3a799f21b44f"`
		 * - `"fjeiwoj,54;@=%<>#32"` (Strings that are not URL-safe are allowed.)
		 */
		immutable_id: FormControl<string | null | undefined>,

		/**
		 * Date and time representing when the entry was last modified.
		 * - **Type**: timestamp.
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response unless the query parameter `response_fields` is present and does not include this property.
		 * - **Example**:
		 * - As part of JSON response format: `"2007-04-05T14:30:20Z"` (i.e., encoded as an [RFC 3339 Internet Date/Time Format](https://tools.ietf.org/html/rfc3339#section-5.6) string.)
		 * Required
		 */
		last_modified: FormControl<Date | null | undefined>,
	}
	export function CreateEntryResourceAttributesFormGroup() {
		return new FormGroup<EntryResourceAttributesFormProperties>({
			immutable_id: new FormControl<string | null | undefined>(undefined),
			last_modified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** errors MUST be present and data MUST be skipped */
	export interface ErrorResponse {

		/** Outputted Data */
		data?: Resource;

		/**
		 * A list of OPTIMADE-specific JSON API error objects, where the field detail MUST be present.
		 * Required
		 */
		errors: Array<OptimadeError>;

		/** A list of unique included resources */
		included?: Array<Resource>;

		/** Information about the JSON API used */
		jsonapi?: JsonApi;

		/** Links associated with the primary data or errors */
		links?: ToplevelLinks;

		/**
		 * A meta object containing non-standard information
		 * Required
		 */
		meta: ResponseMeta;
	}

	/** errors MUST be present and data MUST be skipped */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** detail MUST be present */
	export interface OptimadeError {

		/** an application-specific error code, expressed as a string value. */
		code?: string | null;

		/**
		 * A human-readable explanation specific to this occurrence of the problem.
		 * Required
		 */
		detail: string;

		/** A unique identifier for this particular occurrence of the problem. */
		id?: string | null;

		/** A links object storing about */
		links?: ErrorLinks;

		/** a meta object containing non-standard meta-information about the error. */
		meta?: Meta;

		/** An object containing references to the source of the error */
		source?: ErrorSource;

		/** the HTTP status code applicable to this problem, expressed as a string value. */
		status?: string | null;

		/** A short, human-readable summary of the problem. It **SHOULD NOT** change from occurrence to occurrence of the problem, except for purposes of localization. */
		title?: string | null;
	}

	/** detail MUST be present */
	export interface OptimadeErrorFormProperties {

		/** an application-specific error code, expressed as a string value. */
		code: FormControl<string | null | undefined>,

		/**
		 * A human-readable explanation specific to this occurrence of the problem.
		 * Required
		 */
		detail: FormControl<string | null | undefined>,

		/** A unique identifier for this particular occurrence of the problem. */
		id: FormControl<string | null | undefined>,

		/** the HTTP status code applicable to this problem, expressed as a string value. */
		status: FormControl<string | null | undefined>,

		/** A short, human-readable summary of the problem. It **SHOULD NOT** change from occurrence to occurrence of the problem, except for purposes of localization. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateOptimadeErrorFormGroup() {
		return new FormGroup<OptimadeErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** errors are not allowed */
	export interface InfoResponse {

		/**
		 * The implementations /info data
		 * Required
		 */
		data: BaseInfoResource;

		/** A list of unique errors */
		errors?: Array<Error>;

		/** A list of unique included resources */
		included?: Array<Resource>;

		/** Information about the JSON API used */
		jsonapi?: JsonApi;

		/** Links associated with the primary data or errors */
		links?: ToplevelLinks;

		/**
		 * A meta object containing non-standard information
		 * Required
		 */
		meta: ResponseMeta;
	}

	/** errors are not allowed */
	export interface InfoResponseFormProperties {
	}
	export function CreateInfoResponseFormGroup() {
		return new FormGroup<InfoResponseFormProperties>({
		});

	}


	/** A link **MUST** be represented as either: a string containing the link's URL or a link object. */
	export interface Link {

		/**
		 * a string containing the link’s URL.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		href: string;

		/** a meta object containing non-standard meta-information about the link. */
		meta?: Meta;
	}

	/** A link **MUST** be represented as either: a string containing the link's URL or a link object. */
	export interface LinkFormProperties {

		/**
		 * a string containing the link’s URL.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		href: FormControl<string | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
		});

	}


	/** Enumeration of link_type values */
	export enum LinkType { child = 'child', root = 'root', external = 'external', providers = 'providers' }


	/** A Links endpoint resource object */
	export interface LinksResource {

		/**
		 * A dictionary containing key-value pairs representing the Links resource's properties.
		 * Required
		 */
		attributes: LinksResourceAttributes;

		/**
		 * An entry's ID as defined in section Definition of Terms.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: MUST be supported by all implementations, MUST NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response.
		 * - **Examples**:
		 * - `"db/1234567"`
		 * - `"cod/2000000"`
		 * - `"cod/2000000@1234567"`
		 * - `"nomad/L1234567890"`
		 * - `"42"`
		 * Required
		 */
		id: string;

		/** a links object containing links related to the resource. */
		links?: ResourceLinks;

		/** a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship. */
		meta?: Meta;

		/**
		 * A dictionary containing references to other entries according to the description in section Relationships encoded as [JSON API Relationships](https://jsonapi.org/format/1.0/#document-resource-object-relationships).
		 * The OPTIONAL human-readable description of the relationship MAY be provided in the `description` field inside the `meta` dictionary of the JSON API resource identifier object.
		 */
		relationships?: EntryRelationships;

		/**
		 * These objects are described in detail in the section Links Endpoint
		 * Required
		 */
		type: string;
	}

	/** A Links endpoint resource object */
	export interface LinksResourceFormProperties {

		/**
		 * An entry's ID as defined in section Definition of Terms.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: MUST be supported by all implementations, MUST NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response.
		 * - **Examples**:
		 * - `"db/1234567"`
		 * - `"cod/2000000"`
		 * - `"cod/2000000@1234567"`
		 * - `"nomad/L1234567890"`
		 * - `"42"`
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * These objects are described in detail in the section Links Endpoint
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLinksResourceFormGroup() {
		return new FormGroup<LinksResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^links$')]),
		});

	}


	/** Links endpoint resource object attributes */
	export interface LinksResourceAttributes {

		/**
		 * A string indicating whether a client that is following links to aggregate results from different OPTIMADE implementations should follow this link or not.
		 * This flag SHOULD NOT be indicated for links where `link_type` is not `child`.
		 * If not specified, clients MAY assume that the value is `ok`.
		 * If specified, and the value is anything different than `ok`, the client MUST assume that the server is suggesting not to follow the link during aggregation by default (also if the value is not among the known ones, in case a future specification adds new accepted values).
		 * Specific values indicate the reason why the server is providing the suggestion.
		 * A client MAY follow the link anyway if it has reason to do so (e.g., if the client is looking for all test databases, it MAY follow the links marked with `aggregate`=`test`).
		 * If specified, it MUST be one of the values listed in section Link Aggregate Options.
		 */
		aggregate?: Aggregate;

		/**
		 * JSON API links object, pointing to the base URL for this implementation
		 * Required
		 */
		base_url: string;

		/**
		 * Human-readable description for the OPTIMADE API implementation, e.g., for use in clients to show a description to the end-user.
		 * Required
		 */
		description: string;

		/**
		 * JSON API links object, pointing to a homepage URL for this implementation
		 * Required
		 */
		homepage: string;

		/**
		 * The type of the linked relation.
		 * MUST be one of these values: 'child', 'root', 'external', 'providers'.
		 * Required
		 */
		link_type: LinkType;

		/**
		 * Human-readable name for the OPTIMADE API implementation, e.g., for use in clients to show the name to the end-user.
		 * Required
		 */
		name: string;

		/**
		 * An OPTIONAL human-readable string indicating the reason for suggesting not to aggregate results following the link.
		 * It SHOULD NOT be present if `aggregate`=`ok`.
		 */
		no_aggregate_reason?: string | null;
	}

	/** Links endpoint resource object attributes */
	export interface LinksResourceAttributesFormProperties {

		/**
		 * A string indicating whether a client that is following links to aggregate results from different OPTIMADE implementations should follow this link or not.
		 * This flag SHOULD NOT be indicated for links where `link_type` is not `child`.
		 * If not specified, clients MAY assume that the value is `ok`.
		 * If specified, and the value is anything different than `ok`, the client MUST assume that the server is suggesting not to follow the link during aggregation by default (also if the value is not among the known ones, in case a future specification adds new accepted values).
		 * Specific values indicate the reason why the server is providing the suggestion.
		 * A client MAY follow the link anyway if it has reason to do so (e.g., if the client is looking for all test databases, it MAY follow the links marked with `aggregate`=`test`).
		 * If specified, it MUST be one of the values listed in section Link Aggregate Options.
		 */
		aggregate: FormControl<Aggregate | null | undefined>,

		/**
		 * JSON API links object, pointing to the base URL for this implementation
		 * Required
		 */
		base_url: FormControl<string | null | undefined>,

		/**
		 * Human-readable description for the OPTIMADE API implementation, e.g., for use in clients to show a description to the end-user.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * JSON API links object, pointing to a homepage URL for this implementation
		 * Required
		 */
		homepage: FormControl<string | null | undefined>,

		/**
		 * The type of the linked relation.
		 * MUST be one of these values: 'child', 'root', 'external', 'providers'.
		 * Required
		 */
		link_type: FormControl<LinkType | null | undefined>,

		/**
		 * Human-readable name for the OPTIMADE API implementation, e.g., for use in clients to show the name to the end-user.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * An OPTIONAL human-readable string indicating the reason for suggesting not to aggregate results following the link.
		 * It SHOULD NOT be present if `aggregate`=`ok`.
		 */
		no_aggregate_reason: FormControl<string | null | undefined>,
	}
	export function CreateLinksResourceAttributesFormGroup() {
		return new FormGroup<LinksResourceAttributesFormProperties>({
			aggregate: new FormControl<Aggregate | null | undefined>(undefined),
			base_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			homepage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link_type: new FormControl<LinkType | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			no_aggregate_reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** errors are not allowed */
	export interface LinksResponse {

		/**
		 * List of unique OPTIMADE links resource objects
		 * Required
		 */
		data: Array<LinksResource>;

		/** A list of unique errors */
		errors?: Array<Error>;
		included?: Array<EntryResource>;

		/** Information about the JSON API used */
		jsonapi?: JsonApi;

		/** Links associated with the primary data or errors */
		links?: ToplevelLinks;

		/**
		 * A meta object containing non-standard information
		 * Required
		 */
		meta: ResponseMeta;
	}

	/** errors are not allowed */
	export interface LinksResponseFormProperties {
	}
	export function CreateLinksResponseFormGroup() {
		return new FormGroup<LinksResponseFormProperties>({
		});

	}


	/** Integer enumeration of dimension_types values */
	export enum Periodicity { _0 = 0, _1 = 1 }


	/** A person, i.e., an author, editor or other. */
	export interface Person {

		/** First name of the person. */
		firstname?: string | null;

		/** Last name of the person. */
		lastname?: string | null;

		/**
		 * Full name of the person, REQUIRED.
		 * Required
		 */
		name: string;
	}

	/** A person, i.e., an author, editor or other. */
	export interface PersonFormProperties {

		/** First name of the person. */
		firstname: FormControl<string | null | undefined>,

		/** Last name of the person. */
		lastname: FormControl<string | null | undefined>,

		/**
		 * Full name of the person, REQUIRED.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePersonFormGroup() {
		return new FormGroup<PersonFormProperties>({
			firstname: new FormControl<string | null | undefined>(undefined),
			lastname: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * The `references` entries describe bibliographic references.
	 * The following properties are used to provide the bibliographic details:
	 * - **address**, **annote**, **booktitle**, **chapter**, **crossref**, **edition**, **howpublished**, **institution**, **journal**, **key**, **month**, **note**, **number**, **organization**, **pages**, **publisher**, **school**, **series**, **title**, **volume**, **year**: meanings of these properties match the [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf), values are strings;
	 * - **bib_type**: type of the reference, corresponding to **type** property in the BibTeX specification, value is string;
	 * - **authors** and **editors**: lists of *person objects* which are dictionaries with the following keys:
	 *     - **name**: Full name of the person, REQUIRED.
	 *     - **firstname**, **lastname**: Parts of the person's name, OPTIONAL.
	 * - **doi** and **url**: values are strings.
	 * - **Requirements/Conventions**:
	 *     - **Support**: OPTIONAL support in implementations, i.e., any of the properties MAY be `null`.
	 *     - **Query**: Support for queries on any of these properties is OPTIONAL.
	 *         If supported, filters MAY support only a subset of comparison operators.
	 *     - Every references entry MUST contain at least one of the properties.
	 */
	export interface ReferenceResource {

		/**
		 * Model that stores the attributes of a reference.
		 * Many properties match the meaning described in the
		 * [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf).
		 * Required
		 */
		attributes: ReferenceResourceAttributes;

		/**
		 * An entry's ID as defined in section Definition of Terms.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: MUST be supported by all implementations, MUST NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response.
		 * - **Examples**:
		 * - `"db/1234567"`
		 * - `"cod/2000000"`
		 * - `"cod/2000000@1234567"`
		 * - `"nomad/L1234567890"`
		 * - `"42"`
		 * Required
		 */
		id: string;

		/** a links object containing links related to the resource. */
		links?: ResourceLinks;

		/** a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship. */
		meta?: Meta;

		/**
		 * A dictionary containing references to other entries according to the description in section Relationships encoded as [JSON API Relationships](https://jsonapi.org/format/1.0/#document-resource-object-relationships).
		 * The OPTIONAL human-readable description of the relationship MAY be provided in the `description` field inside the `meta` dictionary of the JSON API resource identifier object.
		 */
		relationships?: EntryRelationships;

		/**
		 * The name of the type of an entry.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: MUST be supported by all implementations, MUST NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response.
		 * - MUST be an existing entry type.
		 * - The entry of type <type> and ID <id> MUST be returned in response to a request for `/<type>/<id>` under the versioned base URL.
		 * - **Example**: `"structures"`
		 * Required
		 */
		type: string;
	}

	/**
	 * The `references` entries describe bibliographic references.
	 * The following properties are used to provide the bibliographic details:
	 * - **address**, **annote**, **booktitle**, **chapter**, **crossref**, **edition**, **howpublished**, **institution**, **journal**, **key**, **month**, **note**, **number**, **organization**, **pages**, **publisher**, **school**, **series**, **title**, **volume**, **year**: meanings of these properties match the [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf), values are strings;
	 * - **bib_type**: type of the reference, corresponding to **type** property in the BibTeX specification, value is string;
	 * - **authors** and **editors**: lists of *person objects* which are dictionaries with the following keys:
	 *     - **name**: Full name of the person, REQUIRED.
	 *     - **firstname**, **lastname**: Parts of the person's name, OPTIONAL.
	 * - **doi** and **url**: values are strings.
	 * - **Requirements/Conventions**:
	 *     - **Support**: OPTIONAL support in implementations, i.e., any of the properties MAY be `null`.
	 *     - **Query**: Support for queries on any of these properties is OPTIONAL.
	 *         If supported, filters MAY support only a subset of comparison operators.
	 *     - Every references entry MUST contain at least one of the properties.
	 */
	export interface ReferenceResourceFormProperties {

		/**
		 * An entry's ID as defined in section Definition of Terms.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: MUST be supported by all implementations, MUST NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response.
		 * - **Examples**:
		 * - `"db/1234567"`
		 * - `"cod/2000000"`
		 * - `"cod/2000000@1234567"`
		 * - `"nomad/L1234567890"`
		 * - `"42"`
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the type of an entry.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: MUST be supported by all implementations, MUST NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response.
		 * - MUST be an existing entry type.
		 * - The entry of type <type> and ID <id> MUST be returned in response to a request for `/<type>/<id>` under the versioned base URL.
		 * - **Example**: `"structures"`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateReferenceResourceFormGroup() {
		return new FormGroup<ReferenceResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^references$')]),
		});

	}


	/**
	 * Model that stores the attributes of a reference.
	 * Many properties match the meaning described in the
	 * [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf).
	 */
	export interface ReferenceResourceAttributes {

		/** Meaning of property matches the BiBTeX specification. */
		address?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		annote?: string | null;

		/** List of person objects containing the authors of the reference. */
		authors?: Array<Person>;

		/** Type of the reference, corresponding to the **type** property in the BiBTeX specification. */
		bib_type?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		booktitle?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		chapter?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		crossref?: string | null;

		/** The digital object identifier of the reference. */
		doi?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		edition?: string | null;

		/** List of person objects containing the editors of the reference. */
		editors?: Array<Person>;

		/** Meaning of property matches the BiBTeX specification. */
		howpublished?: string | null;

		/**
		 * The entry's immutable ID (e.g., an UUID). This is important for databases having preferred IDs that point to "the latest version" of a record, but still offer access to older variants. This ID maps to the version-specific record, in case it changes in the future.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Examples**:
		 * - `"8bd3e750-b477-41a0-9b11-3a799f21b44f"`
		 * - `"fjeiwoj,54;@=%<>#32"` (Strings that are not URL-safe are allowed.)
		 */
		immutable_id?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		institution?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		journal?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		key?: string | null;

		/**
		 * Date and time representing when the entry was last modified.
		 * - **Type**: timestamp.
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response unless the query parameter `response_fields` is present and does not include this property.
		 * - **Example**:
		 * - As part of JSON response format: `"2007-04-05T14:30:20Z"` (i.e., encoded as an [RFC 3339 Internet Date/Time Format](https://tools.ietf.org/html/rfc3339#section-5.6) string.)
		 * Required
		 */
		last_modified: Date;

		/** Meaning of property matches the BiBTeX specification. */
		month?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		note?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		number?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		organization?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		pages?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		publisher?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		school?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		series?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		title?: string | null;

		/**
		 * The URL of the reference.
		 * Max length: 65536
		 * Min length: 1
		 */
		url?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		volume?: string | null;

		/** Meaning of property matches the BiBTeX specification. */
		year?: string | null;
	}

	/**
	 * Model that stores the attributes of a reference.
	 * Many properties match the meaning described in the
	 * [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf).
	 */
	export interface ReferenceResourceAttributesFormProperties {

		/** Meaning of property matches the BiBTeX specification. */
		address: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		annote: FormControl<string | null | undefined>,

		/** Type of the reference, corresponding to the **type** property in the BiBTeX specification. */
		bib_type: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		booktitle: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		chapter: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		crossref: FormControl<string | null | undefined>,

		/** The digital object identifier of the reference. */
		doi: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		edition: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		howpublished: FormControl<string | null | undefined>,

		/**
		 * The entry's immutable ID (e.g., an UUID). This is important for databases having preferred IDs that point to "the latest version" of a record, but still offer access to older variants. This ID maps to the version-specific record, in case it changes in the future.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Examples**:
		 * - `"8bd3e750-b477-41a0-9b11-3a799f21b44f"`
		 * - `"fjeiwoj,54;@=%<>#32"` (Strings that are not URL-safe are allowed.)
		 */
		immutable_id: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		institution: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		journal: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		key: FormControl<string | null | undefined>,

		/**
		 * Date and time representing when the entry was last modified.
		 * - **Type**: timestamp.
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response unless the query parameter `response_fields` is present and does not include this property.
		 * - **Example**:
		 * - As part of JSON response format: `"2007-04-05T14:30:20Z"` (i.e., encoded as an [RFC 3339 Internet Date/Time Format](https://tools.ietf.org/html/rfc3339#section-5.6) string.)
		 * Required
		 */
		last_modified: FormControl<Date | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		month: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		note: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		number: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		organization: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		pages: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		publisher: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		school: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		series: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		title: FormControl<string | null | undefined>,

		/**
		 * The URL of the reference.
		 * Max length: 65536
		 * Min length: 1
		 */
		url: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		volume: FormControl<string | null | undefined>,

		/** Meaning of property matches the BiBTeX specification. */
		year: FormControl<string | null | undefined>,
	}
	export function CreateReferenceResourceAttributesFormGroup() {
		return new FormGroup<ReferenceResourceAttributesFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			annote: new FormControl<string | null | undefined>(undefined),
			bib_type: new FormControl<string | null | undefined>(undefined),
			booktitle: new FormControl<string | null | undefined>(undefined),
			chapter: new FormControl<string | null | undefined>(undefined),
			crossref: new FormControl<string | null | undefined>(undefined),
			doi: new FormControl<string | null | undefined>(undefined),
			edition: new FormControl<string | null | undefined>(undefined),
			howpublished: new FormControl<string | null | undefined>(undefined),
			immutable_id: new FormControl<string | null | undefined>(undefined),
			institution: new FormControl<string | null | undefined>(undefined),
			journal: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			last_modified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			month: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			pages: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			school: new FormControl<string | null | undefined>(undefined),
			series: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536)]),
			volume: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** errors are not allowed */
	export interface ReferenceResponseMany {

		/**
		 * List of unique OPTIMADE references entry resource objects
		 * Required
		 */
		data: Array<ReferenceResource>;

		/** A list of unique errors */
		errors?: Array<Error>;
		included?: Array<EntryResource>;

		/** Information about the JSON API used */
		jsonapi?: JsonApi;

		/** Links associated with the primary data or errors */
		links?: ToplevelLinks;

		/**
		 * A meta object containing non-standard information
		 * Required
		 */
		meta: ResponseMeta;
	}

	/** errors are not allowed */
	export interface ReferenceResponseManyFormProperties {
	}
	export function CreateReferenceResponseManyFormGroup() {
		return new FormGroup<ReferenceResponseManyFormProperties>({
		});

	}


	/** errors are not allowed */
	export interface ReferenceResponseOne {

		/**
		 * A single references entry resource
		 * Required
		 */
		data: ReferenceResource;

		/** A list of unique errors */
		errors?: Array<Error>;
		included?: Array<EntryResource>;

		/** Information about the JSON API used */
		jsonapi?: JsonApi;

		/** Links associated with the primary data or errors */
		links?: ToplevelLinks;

		/**
		 * A meta object containing non-standard information
		 * Required
		 */
		meta: ResponseMeta;
	}

	/** errors are not allowed */
	export interface ReferenceResponseOneFormProperties {
	}
	export function CreateReferenceResponseOneFormGroup() {
		return new FormGroup<ReferenceResponseOneFormProperties>({
		});

	}


	/**
	 * A list describing the species of the sites of this structure.
	 * Species can represent pure chemical elements, virtual-crystal atoms representing a
	 * statistical occupation of a given site by multiple chemical elements, and/or a
	 * location to which there are attached atoms, i.e., atoms whose precise location are
	 * unknown beyond that they are attached to that position (frequently used to indicate
	 * hydrogen atoms attached to another element, e.g., a carbon with three attached
	 * hydrogens might represent a methyl group, -CH3).
	 * - **Examples**:
	 *     - `[ {"name": "Ti", "chemical_symbols": ["Ti"], "concentration": [1.0]} ]`: any site with this species is occupied by a Ti atom.
	 *     - `[ {"name": "Ti", "chemical_symbols": ["Ti", "vacancy"], "concentration": [0.9, 0.1]} ]`: any site with this species is occupied by a Ti atom with 90 % probability, and has a vacancy with 10 % probability.
	 *     - `[ {"name": "BaCa", "chemical_symbols": ["vacancy", "Ba", "Ca"], "concentration": [0.05, 0.45, 0.5], "mass": [0.0, 137.327, 40.078]} ]`: any site with this species is occupied by a Ba atom with 45 % probability, a Ca atom with 50 % probability, and by a vacancy with 5 % probability. The mass of this site is (on average) 88.5 a.m.u.
	 *     - `[ {"name": "C12", "chemical_symbols": ["C"], "concentration": [1.0], "mass": [12.0]} ]`: any site with this species is occupied by a carbon isotope with mass 12.
	 *     - `[ {"name": "C13", "chemical_symbols": ["C"], "concentration": [1.0], "mass": [13.0]} ]`: any site with this species is occupied by a carbon isotope with mass 13.
	 *     - `[ {"name": "CH3", "chemical_symbols": ["C"], "concentration": [1.0], "attached": ["H"], "nattached": [3]} ]`: any site with this species is occupied by a methyl group, -CH3, which is represented without specifying precise positions of the hydrogen atoms.
	 */
	export interface Species {

		/** If provided MUST be a list of length 1 or more of strings of chemical symbols for the elements attached to this site, or "X" for a non-chemical element. */
		attached?: Array<string>;

		/**
		 * MUST be a list of strings of all chemical elements composing this species. Each item of the list MUST be one of the following:
		 * - a valid chemical-element name, or
		 * - the special value `"X"` to represent a non-chemical element, or
		 * - the special value `"vacancy"` to represent that this site has a non-zero probability of having a vacancy (the respective probability is indicated in the `concentration` list, see below).
		 * If any one entry in the `species` list has a `chemical_symbols` list that is longer than 1 element, the correct flag MUST be set in the list `structure_features`.
		 * Required
		 */
		chemical_symbols: Array<string>;

		/**
		 * MUST be a list of floats, with same length as `chemical_symbols`. The numbers represent the relative concentration of the corresponding chemical symbol in this species. The numbers SHOULD sum to one. Cases in which the numbers do not sum to one typically fall only in the following two categories:
		 * - Numerical errors when representing float numbers in fixed precision, e.g. for two chemical symbols with concentrations `1/3` and `2/3`, the concentration might look something like `[0.33333333333, 0.66666666666]`. If the client is aware that the sum is not one because of numerical precision, it can renormalize the values so that the sum is exactly one.
		 * - Experimental errors in the data present in the database. In this case, it is the responsibility of the client to decide how to process the data.
		 * Note that concentrations are uncorrelated between different site (even of the same species).
		 * Required
		 */
		concentration: Array<number>;

		/**
		 * If present MUST be a list of floats expressed in a.m.u.
		 * Elements denoting vacancies MUST have masses equal to 0.
		 */
		mass?: Array<number>;

		/**
		 * Gives the name of the species; the **name** value MUST be unique in the `species` list.
		 * Required
		 */
		name: string;

		/** If provided MUST be a list of length 1 or more of integers indicating the number of attached atoms of the kind specified in the value of the :field:`attached` key. */
		nattached?: Array<number>;

		/**
		 * Can be any valid Unicode string, and SHOULD contain (if specified) the name of the species that is used internally in the source database.
		 * Note: With regards to "source database", we refer to the immediate source being queried via the OPTIMADE API implementation.
		 */
		original_name?: string | null;
	}

	/**
	 * A list describing the species of the sites of this structure.
	 * Species can represent pure chemical elements, virtual-crystal atoms representing a
	 * statistical occupation of a given site by multiple chemical elements, and/or a
	 * location to which there are attached atoms, i.e., atoms whose precise location are
	 * unknown beyond that they are attached to that position (frequently used to indicate
	 * hydrogen atoms attached to another element, e.g., a carbon with three attached
	 * hydrogens might represent a methyl group, -CH3).
	 * - **Examples**:
	 *     - `[ {"name": "Ti", "chemical_symbols": ["Ti"], "concentration": [1.0]} ]`: any site with this species is occupied by a Ti atom.
	 *     - `[ {"name": "Ti", "chemical_symbols": ["Ti", "vacancy"], "concentration": [0.9, 0.1]} ]`: any site with this species is occupied by a Ti atom with 90 % probability, and has a vacancy with 10 % probability.
	 *     - `[ {"name": "BaCa", "chemical_symbols": ["vacancy", "Ba", "Ca"], "concentration": [0.05, 0.45, 0.5], "mass": [0.0, 137.327, 40.078]} ]`: any site with this species is occupied by a Ba atom with 45 % probability, a Ca atom with 50 % probability, and by a vacancy with 5 % probability. The mass of this site is (on average) 88.5 a.m.u.
	 *     - `[ {"name": "C12", "chemical_symbols": ["C"], "concentration": [1.0], "mass": [12.0]} ]`: any site with this species is occupied by a carbon isotope with mass 12.
	 *     - `[ {"name": "C13", "chemical_symbols": ["C"], "concentration": [1.0], "mass": [13.0]} ]`: any site with this species is occupied by a carbon isotope with mass 13.
	 *     - `[ {"name": "CH3", "chemical_symbols": ["C"], "concentration": [1.0], "attached": ["H"], "nattached": [3]} ]`: any site with this species is occupied by a methyl group, -CH3, which is represented without specifying precise positions of the hydrogen atoms.
	 */
	export interface SpeciesFormProperties {

		/**
		 * Gives the name of the species; the **name** value MUST be unique in the `species` list.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Can be any valid Unicode string, and SHOULD contain (if specified) the name of the species that is used internally in the source database.
		 * Note: With regards to "source database", we refer to the immediate source being queried via the OPTIMADE API implementation.
		 */
		original_name: FormControl<string | null | undefined>,
	}
	export function CreateSpeciesFormGroup() {
		return new FormGroup<SpeciesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			original_name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enumeration of structure_features values */
	export enum StructureFeatures { disorder = 'disorder', implicit_atoms = 'implicit_atoms', site_attachments = 'site_attachments', assemblies = 'assemblies' }


	/** Representing a structure. */
	export interface StructureResource {

		/**
		 * This class contains the Field for the attributes used to represent a structure, e.g. unit cell, atoms, positions.
		 * Required
		 */
		attributes: StructureResourceAttributes;

		/**
		 * An entry's ID as defined in section Definition of Terms.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: MUST be supported by all implementations, MUST NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response.
		 * - **Examples**:
		 * - `"db/1234567"`
		 * - `"cod/2000000"`
		 * - `"cod/2000000@1234567"`
		 * - `"nomad/L1234567890"`
		 * - `"42"`
		 * Required
		 */
		id: string;

		/** a links object containing links related to the resource. */
		links?: ResourceLinks;

		/** a meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship. */
		meta?: Meta;

		/**
		 * A dictionary containing references to other entries according to the description in section Relationships encoded as [JSON API Relationships](https://jsonapi.org/format/1.0/#document-resource-object-relationships).
		 * The OPTIONAL human-readable description of the relationship MAY be provided in the `description` field inside the `meta` dictionary of the JSON API resource identifier object.
		 */
		relationships?: EntryRelationships;

		/**
		 * The name of the type of an entry.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: MUST be supported by all implementations, MUST NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response.
		 * - MUST be an existing entry type.
		 * - The entry of type `<type>` and ID `<id>` MUST be returned in response to a request for `/<type>/<id>` under the versioned base URL.
		 * - **Examples**:
		 * - `"structures"`
		 * Required
		 */
		type: string;
	}

	/** Representing a structure. */
	export interface StructureResourceFormProperties {

		/**
		 * An entry's ID as defined in section Definition of Terms.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: MUST be supported by all implementations, MUST NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response.
		 * - **Examples**:
		 * - `"db/1234567"`
		 * - `"cod/2000000"`
		 * - `"cod/2000000@1234567"`
		 * - `"nomad/L1234567890"`
		 * - `"42"`
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the type of an entry.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: MUST be supported by all implementations, MUST NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response.
		 * - MUST be an existing entry type.
		 * - The entry of type `<type>` and ID `<id>` MUST be returned in response to a request for `/<type>/<id>` under the versioned base URL.
		 * - **Examples**:
		 * - `"structures"`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateStructureResourceFormGroup() {
		return new FormGroup<StructureResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^structures$')]),
		});

	}


	/** This class contains the Field for the attributes used to represent a structure, e.g. unit cell, atoms, positions. */
	export interface StructureResourceAttributes {

		/**
		 * A description of groups of sites that are statistically correlated.
		 * - **Type**: list of dictionary with keys:
		 * - `sites_in_groups`: list of list of integers (REQUIRED)
		 * - `group_probabilities`: list of floats (REQUIRED)
		 * - **Requirements/Conventions**:
		 * - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.
		 * - **Query**: Support for queries on this property is OPTIONAL.
		 * If supported, filters MAY support only a subset of comparison operators.
		 * - The property SHOULD be `null` for entries that have no partial occupancies.
		 * - If present, the correct flag MUST be set in the list `structure_features`.
		 * - Client implementations MUST check its presence (as its presence changes the interpretation of the structure).
		 * - If present, it MUST be a list of dictionaries, each of which represents an assembly and MUST have the following two keys:
		 * - **sites_in_groups**: Index of the sites (0-based) that belong to each group for each assembly.
		 * Example: `[[1], [2]]`: two groups, one with the second site, one with the third.
		 * Example: `[[1,2], [3]]`: one group with the second and third site, one with the fourth.
		 * - **group_probabilities**: Statistical probability of each group. It MUST have the same length as `sites_in_groups`.
		 * It SHOULD sum to one.
		 * See below for examples of how to specify the probability of the occurrence of a vacancy.
		 * The possible reasons for the values not to sum to one are the same as already specified above for the `concentration` of each `species`.
		 * - If a site is not present in any group, it means that it is present with 100 % probability (as if no assembly was specified).
		 * - A site MUST NOT appear in more than one group.
		 * - **Examples** (for each entry of the assemblies list):
		 * - `{"sites_in_groups": [[0], [1]], "group_probabilities: [0.3, 0.7]}`: the first site and the second site never occur at the same time in the unit cell.
		 * Statistically, 30 % of the times the first site is present, while 70 % of the times the second site is present.
		 * - `{"sites_in_groups": [[1,2], [3]], "group_probabilities: [0.3, 0.7]}`: the second and third site are either present together or not present; they form the first group of atoms for this assembly.
		 * The second group is formed by the fourth site.
		 * Sites of the first group (the second and the third) are never present at the same time as the fourth site.
		 * 30 % of times sites 1 and 2 are present (and site 3 is absent); 70 % of times site 3 is present (and sites 1 and 2 are absent).
		 * - **Notes**:
		 * - Assemblies are essential to represent, for instance, the situation where an atom can statistically occupy two different positions (sites).
		 * - By defining groups, it is possible to represent, e.g., the case where a functional molecule (and not just one atom) is either present or absent (or the case where it it is present in two conformations)
		 * - Considerations on virtual alloys and on vacancies: In the special case of a virtual alloy, these specifications allow two different, equivalent ways of specifying them.
		 * For instance, for a site at the origin with 30 % probability of being occupied by Si, 50 % probability of being occupied by Ge, and 20 % of being a vacancy, the following two representations are possible:
		 * - Using a single species:
		 * ```json
		 * {
		 * "cartesian_site_positions": [[0,0,0]],
		 * "species_at_sites": ["SiGe-vac"],
		 * "species": [
		 * {
		 * "name": "SiGe-vac",
		 * "chemical_symbols": ["Si", "Ge", "vacancy"],
		 * "concentration": [0.3, 0.5, 0.2]
		 * }
		 * ]
		 * // ...
		 * }
		 * ```
		 * - Using multiple species and the assemblies:
		 * ```json
		 * {
		 * "cartesian_site_positions": [ [0,0,0], [0,0,0], [0,0,0] ],
		 * "species_at_sites": ["Si", "Ge", "vac"],
		 * "species": [
		 * { "name": "Si", "chemical_symbols": ["Si"], "concentration": [1.0] },
		 * { "name": "Ge", "chemical_symbols": ["Ge"], "concentration": [1.0] },
		 * { "name": "vac", "chemical_symbols": ["vacancy"], "concentration": [1.0] }
		 * ],
		 * "assemblies": [
		 * {
		 * "sites_in_groups": [ [0], [1], [2] ],
		 * "group_probabilities": [0.3, 0.5, 0.2]
		 * }
		 * ]
		 * // ...
		 * }
		 * ```
		 * - It is up to the database provider to decide which representation to use, typically depending on the internal format in which the structure is stored.
		 * However, given a structure identified by a unique ID, the API implementation MUST always provide the same representation for it.
		 * - The probabilities of occurrence of different assemblies are uncorrelated.
		 * So, for instance in the following case with two assemblies:
		 * ```json
		 * {
		 * "assemblies": [
		 * {
		 * "sites_in_groups": [ [0], [1] ],
		 * "group_probabilities": [0.2, 0.8],
		 * },
		 * {
		 * "sites_in_groups": [ [2], [3] ],
		 * "group_probabilities": [0.3, 0.7]
		 * }
		 * ]
		 * }
		 * ```
		 * Site 0 is present with a probability of 20 % and site 1 with a probability of 80 %. These two sites are correlated (either site 0 or 1 is present). Similarly, site 2 is present with a probability of 30 % and site 3 with a probability of 70 %.
		 * These two sites are correlated (either site 2 or 3 is present).
		 * However, the presence or absence of sites 0 and 1 is not correlated with the presence or absence of sites 2 and 3 (in the specific example, the pair of sites (0, 2) can occur with 0.2*0.3 = 6 % probability; the pair (0, 3) with 0.2*0.7 = 14 % probability; the pair (1, 2) with 0.8*0.3 = 24 % probability; and the pair (1, 3) with 0.8*0.7 = 56 % probability).
		 */
		assemblies?: Array<Assembly>;

		/**
		 * Cartesian positions of each site in the structure.
		 * A site is usually used to describe positions of atoms; what atoms can be encountered at a given site is conveyed by the `species_at_sites` property, and the species themselves are described in the `species` property.
		 * - **Type**: list of list of floats
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: Support for queries on this property is OPTIONAL.
		 * If supported, filters MAY support only a subset of comparison operators.
		 * - It MUST be a list of length equal to the number of sites in the structure, where every element is a list of the three Cartesian coordinates of a site expressed as float values in the unit angstrom (Å).
		 * - An entry MAY have multiple sites at the same Cartesian position (for a relevant use of this, see e.g., the property `assemblies`).
		 * - **Examples**:
		 * - `[[0,0,0],[0,0,2]]` indicates a structure with two sites, one sitting at the origin and one along the (positive) *z*-axis, 2 Å away from the origin.
		 * Required
		 */
		cartesian_site_positions: Array<string>;

		/**
		 * The anonymous formula is the `chemical_formula_reduced`, but where the elements are instead first ordered by their chemical proportion number, and then, in order left to right, replaced by anonymous symbols A, B, C, ..., Z, Aa, Ba, ..., Za, Ab, Bb, ... and so on.
		 * - **Type**: string
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property.
		 * However, support for filters using partial string matching with this property is OPTIONAL (i.e., BEGINS WITH, ENDS WITH, and CONTAINS).
		 * - **Examples**:
		 * - `"A2B"`
		 * - `"A42B42C16D12E10F9G5"`
		 * - **Querying**:
		 * - A filter that matches an exactly given formula is `chemical_formula_anonymous="A2B"`.
		 * Required
		 */
		chemical_formula_anonymous: string;

		/**
		 * The chemical formula for a structure as a string in a form chosen by the API implementation.
		 * - **Type**: string
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - The chemical formula is given as a string consisting of properly capitalized element symbols followed by integers or decimal numbers, balanced parentheses, square, and curly brackets `(`,`)`, `[`,`]`, `{`, `}`, commas, the `+`, `-`, `:` and `=` symbols. The parentheses are allowed to be followed by a number. Spaces are allowed anywhere except within chemical symbols. The order of elements and any groupings indicated by parentheses or brackets are chosen freely by the API implementation.
		 * - The string SHOULD be arithmetically consistent with the element ratios in the `chemical_formula_reduced` property.
		 * - It is RECOMMENDED, but not mandatory, that symbols, parentheses and brackets, if used, are used with the meanings prescribed by [IUPAC's Nomenclature of Organic Chemistry](https://www.qmul.ac.uk/sbcs/iupac/bibliog/blue.html).
		 * - **Examples**:
		 * - `"(H2O)2 Na"`
		 * - `"NaCl"`
		 * - `"CaCO3"`
		 * - `"CCaO3"`
		 * - `"(CH3)3N+ - [CH2]2-OH = Me3N+ - CH2 - CH2OH"`
		 * - **Query examples**:
		 * - Note: the free-form nature of this property is likely to make queries on it across different databases inconsistent.
		 * - A filter that matches an exactly given formula: `chemical_formula_descriptive="(H2O)2 Na"`.
		 * - A filter that does a partial match: `chemical_formula_descriptive CONTAINS "H2O"`.
		 * Required
		 */
		chemical_formula_descriptive: string;

		/**
		 * The chemical formula for a structure in [Hill form](https://dx.doi.org/10.1021/ja02046a005) with element symbols followed by integer chemical proportion numbers. The proportion number MUST be omitted if it is 1.
		 * - **Type**: string
		 * - **Requirements/Conventions**:
		 * - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.
		 * - **Query**: Support for queries on this property is OPTIONAL.
		 * If supported, only a subset of the filter features MAY be supported.
		 * - The overall scale factor of the chemical proportions is chosen such that the resulting values are integers that indicate the most chemically relevant unit of which the system is composed.
		 * For example, if the structure is a repeating unit cell with four hydrogens and four oxygens that represents two hydroperoxide molecules, `chemical_formula_hill` is `"H2O2"` (i.e., not `"HO"`, nor `"H4O4"`).
		 * - If the chemical insight needed to ascribe a Hill formula to the system is not present, the property MUST be handled as unset.
		 * - Element symbols MUST have proper capitalization (e.g., `"Si"`, not `"SI"` for "silicon").
		 * - Elements MUST be placed in [Hill order](https://dx.doi.org/10.1021/ja02046a005), followed by their integer chemical proportion number.
		 * Hill order means: if carbon is present, it is placed first, and if also present, hydrogen is placed second.
		 * After that, all other elements are ordered alphabetically.
		 * If carbon is not present, all elements are ordered alphabetically.
		 * - If the system has sites with partial occupation and the total occupations of each element do not all sum up to integers, then the Hill formula SHOULD be handled as unset.
		 * - No spaces or separators are allowed.
		 * - **Examples**:
		 * - `"H2O2"`
		 * - **Query examples**:
		 * - A filter that matches an exactly given formula is `chemical_formula_hill="H2O2"`.
		 */
		chemical_formula_hill?: string | null;

		/**
		 * The reduced chemical formula for a structure as a string with element symbols and integer chemical proportion numbers.
		 * The proportion number MUST be omitted if it is 1.
		 * - **Type**: string
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property.
		 * However, support for filters using partial string matching with this property is OPTIONAL (i.e., BEGINS WITH, ENDS WITH, and CONTAINS).
		 * Intricate queries on formula components are instead suggested to be formulated using set-type filter operators on the multi valued `elements` and `elements_ratios` properties.
		 * - Element symbols MUST have proper capitalization (e.g., `"Si"`, not `"SI"` for "silicon").
		 * - Elements MUST be placed in alphabetical order, followed by their integer chemical proportion number.
		 * - For structures with no partial occupation, the chemical proportion numbers are the smallest integers for which the chemical proportion is exactly correct.
		 * - For structures with partial occupation, the chemical proportion numbers are integers that within reasonable approximation indicate the correct chemical proportions. The precise details of how to perform the rounding is chosen by the API implementation.
		 * - No spaces or separators are allowed.
		 * - **Examples**:
		 * - `"H2NaO"`
		 * - `"ClNa"`
		 * - `"CCaO3"`
		 * - **Query examples**:
		 * - A filter that matches an exactly given formula is `chemical_formula_reduced="H2NaO"`.
		 * Required
		 */
		chemical_formula_reduced: string;

		/**
		 * List of three integers.
		 * For each of the three directions indicated by the three lattice vectors (see property `lattice_vectors`), this list indicates if the direction is periodic (value `1`) or non-periodic (value `0`).
		 * Note: the elements in this list each refer to the direction of the corresponding entry in `lattice_vectors` and *not* the Cartesian x, y, z directions.
		 * - **Type**: list of integers.
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: Support for queries on this property is OPTIONAL.
		 * - MUST be a list of length 3.
		 * - Each integer element MUST assume only the value 0 or 1.
		 * - **Examples**:
		 * - For a molecule: `[0, 0, 0]`
		 * - For a wire along the direction specified by the third lattice vector: `[0, 0, 1]`
		 * - For a 2D surface/slab, periodic on the plane defined by the first and third lattice vectors: `[1, 0, 1]`
		 * - For a bulk 3D system: `[1, 1, 1]`
		 * Required
		 * Minimum items: 3
		 * Maximum items: 3
		 */
		dimension_types: Array<Periodicity>;

		/**
		 * Symbols of the different elements present in the structure.
		 * - **Type**: list of strings.
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - The strings are the chemical symbols, i.e., either a single uppercase letter or an uppercase letter followed by a number of lowercase letters.
		 * - The order MUST be alphabetical.
		 * - MUST refer to the same elements in the same order, and therefore be of the same length, as `elements_ratios`, if the latter is provided.
		 * - Note: This property SHOULD NOT contain the string "X" to indicate non-chemical elements or "vacancy" to indicate vacancies (in contrast to the field `chemical_symbols` for the `species` property).
		 * - **Examples**:
		 * - `["Si"]`
		 * - `["Al","O","Si"]`
		 * - **Query examples**:
		 * - A filter that matches all records of structures that contain Si, Al **and** O, and possibly other elements: `elements HAS ALL "Si", "Al", "O"`.
		 * - To match structures with exactly these three elements, use `elements HAS ALL "Si", "Al", "O" AND elements LENGTH 3`.
		 * - Note: length queries on this property can be equivalently formulated by filtering on the `nelements`_ property directly.
		 * Required
		 */
		elements: Array<string>;

		/**
		 * Relative proportions of different elements in the structure.
		 * - **Type**: list of floats
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - Composed by the proportions of elements in the structure as a list of floating point numbers.
		 * - The sum of the numbers MUST be 1.0 (within floating point accuracy)
		 * - MUST refer to the same elements in the same order, and therefore be of the same length, as `elements`, if the latter is provided.
		 * - **Examples**:
		 * - `[1.0]`
		 * - `[0.3333333333333333, 0.2222222222222222, 0.4444444444444444]`
		 * - **Query examples**:
		 * - Note: Useful filters can be formulated using the set operator syntax for correlated values.
		 * However, since the values are floating point values, the use of equality comparisons is generally inadvisable.
		 * - OPTIONAL: a filter that matches structures where approximately 1/3 of the atoms in the structure are the element Al is: `elements:elements_ratios HAS ALL "Al":>0.3333, "Al":<0.3334`.
		 * Required
		 */
		elements_ratios: Array<number>;

		/**
		 * The entry's immutable ID (e.g., an UUID). This is important for databases having preferred IDs that point to "the latest version" of a record, but still offer access to older variants. This ID maps to the version-specific record, in case it changes in the future.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Examples**:
		 * - `"8bd3e750-b477-41a0-9b11-3a799f21b44f"`
		 * - `"fjeiwoj,54;@=%<>#32"` (Strings that are not URL-safe are allowed.)
		 */
		immutable_id?: string | null;

		/**
		 * Date and time representing when the entry was last modified.
		 * - **Type**: timestamp.
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response unless the query parameter `response_fields` is present and does not include this property.
		 * - **Example**:
		 * - As part of JSON response format: `"2007-04-05T14:30:20Z"` (i.e., encoded as an [RFC 3339 Internet Date/Time Format](https://tools.ietf.org/html/rfc3339#section-5.6) string.)
		 * Required
		 */
		last_modified: Date;

		/**
		 * The three lattice vectors in Cartesian coordinates, in ångström (Å).
		 * - **Type**: list of list of floats or unknown values.
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: Support for queries on this property is OPTIONAL.
		 * If supported, filters MAY support only a subset of comparison operators.
		 * - MUST be a list of three vectors *a*, *b*, and *c*, where each of the vectors MUST BE a list of the vector's coordinates along the x, y, and z Cartesian coordinates.
		 * (Therefore, the first index runs over the three lattice vectors and the second index runs over the x, y, z Cartesian coordinates).
		 * - For databases that do not define an absolute Cartesian system (e.g., only defining the length and angles between vectors), the first lattice vector SHOULD be set along *x* and the second on the *xy*-plane.
		 * - MUST always contain three vectors of three coordinates each, independently of the elements of property `dimension_types`.
		 * The vectors SHOULD by convention be chosen so the determinant of the `lattice_vectors` matrix is different from zero.
		 * The vectors in the non-periodic directions have no significance beyond fulfilling these requirements.
		 * - The coordinates of the lattice vectors of non-periodic dimensions (i.e., those dimensions for which `dimension_types` is `0`) MAY be given as a list of all `null` values.
		 * If a lattice vector contains the value `null`, all coordinates of that lattice vector MUST be `null`.
		 * - **Examples**:
		 * - `[[4.0,0.0,0.0],[0.0,4.0,0.0],[0.0,1.0,4.0]]` represents a cell, where the first vector is `(4, 0, 0)`, i.e., a vector aligned along the `x` axis of length 4 Å; the second vector is `(0, 4, 0)`; and the third vector is `(0, 1, 4)`.
		 * Required
		 * Minimum items: 3
		 * Maximum items: 3
		 */
		lattice_vectors: Array<string>;

		/**
		 * Number of different elements in the structure as an integer.
		 * - **Type**: integer
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - MUST be equal to the lengths of the list properties `elements` and `elements_ratios`, if they are provided.
		 * - **Examples**:
		 * - `3`
		 * - **Querying**:
		 * - Note: queries on this property can equivalently be formulated using `elements LENGTH`.
		 * - A filter that matches structures that have exactly 4 elements: `nelements=4`.
		 * - A filter that matches structures that have between 2 and 7 elements: `nelements>=2 AND nelements<=7`.
		 * Required
		 */
		nelements: number;

		/**
		 * An integer specifying the number of periodic dimensions in the structure, equivalent to the number of non-zero entries in `dimension_types`.
		 * - **Type**: integer
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - The integer value MUST be between 0 and 3 inclusive and MUST be equal to the sum of the items in the `dimension_types` property.
		 * - This property only reflects the treatment of the lattice vectors provided for the structure, and not any physical interpretation of the dimensionality of its contents.
		 * - **Examples**:
		 * - `2` should be indicated in cases where `dimension_types` is any of `[1, 1, 0]`, `[1, 0, 1]`, `[0, 1, 1]`.
		 * - **Query examples**:
		 * - Match only structures with exactly 3 periodic dimensions: `nperiodic_dimensions=3`
		 * - Match all structures with 2 or fewer periodic dimensions: `nperiodic_dimensions<=2`
		 * Required
		 */
		nperiodic_dimensions: number;

		/**
		 * An integer specifying the length of the `cartesian_site_positions` property.
		 * - **Type**: integer
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Examples**:
		 * - `42`
		 * - **Query examples**:
		 * - Match only structures with exactly 4 sites: `nsites=4`
		 * - Match structures that have between 2 and 7 sites: `nsites>=2 AND nsites<=7`
		 * Required
		 */
		nsites: number;

		/**
		 * A list describing the species of the sites of this structure.
		 * Species can represent pure chemical elements, virtual-crystal atoms representing a statistical occupation of a given site by multiple chemical elements, and/or a location to which there are attached atoms, i.e., atoms whose precise location are unknown beyond that they are attached to that position (frequently used to indicate hydrogen atoms attached to another element, e.g., a carbon with three attached hydrogens might represent a methyl group, -CH3).
		 * - **Type**: list of dictionary with keys:
		 * - `name`: string (REQUIRED)
		 * - `chemical_symbols`: list of strings (REQUIRED)
		 * - `concentration`: list of float (REQUIRED)
		 * - `attached`: list of strings (REQUIRED)
		 * - `nattached`: list of integers (OPTIONAL)
		 * - `mass`: list of floats (OPTIONAL)
		 * - `original_name`: string (OPTIONAL).
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: Support for queries on this property is OPTIONAL.
		 * If supported, filters MAY support only a subset of comparison operators.
		 * - Each list member MUST be a dictionary with the following keys:
		 * - **name**: REQUIRED; gives the name of the species; the **name** value MUST be unique in the `species` list;
		 * - **chemical_symbols**: REQUIRED; MUST be a list of strings of all chemical elements composing this species.
		 * Each item of the list MUST be one of the following:
		 * - a valid chemical-element symbol, or
		 * - the special value `"X"` to represent a non-chemical element, or
		 * - the special value `"vacancy"` to represent that this site has a non-zero probability of having a vacancy (the respective probability is indicated in the `concentration` list, see below).
		 * If any one entry in the `species` list has a `chemical_symbols` list that is longer than 1 element, the correct flag MUST be set in the list `structure_features`.
		 * - **concentration**: REQUIRED; MUST be a list of floats, with same length as `chemical_symbols`.
		 * The numbers represent the relative concentration of the corresponding chemical symbol in this species.
		 * The numbers SHOULD sum to one. Cases in which the numbers do not sum to one typically fall only in the following two categories:
		 * - Numerical errors when representing float numbers in fixed precision, e.g. for two chemical symbols with concentrations `1/3` and `2/3`, the concentration might look something like `[0.33333333333, 0.66666666666]`. If the client is aware that the sum is not one because of numerical precision, it can renormalize the values so that the sum is exactly one.
		 * - Experimental errors in the data present in the database. In this case, it is the responsibility of the client to decide how to process the data.
		 * Note that concentrations are uncorrelated between different sites (even of the same species).
		 * - **attached**: OPTIONAL; if provided MUST be a list of length 1 or more of strings of chemical symbols for the elements attached to this site, or "X" for a non-chemical element.
		 * - **nattached**: OPTIONAL; if provided MUST be a list of length 1 or more of integers indicating the number of attached atoms of the kind specified in the value of the `attached` key.
		 * The implementation MUST include either both or none of the `attached` and `nattached` keys, and if they are provided, they MUST be of the same length.
		 * Furthermore, if they are provided, the `structure_features` property MUST include the string `site_attachments`.
		 * - **mass**: OPTIONAL. If present MUST be a list of floats, with the same length as `chemical_symbols`, providing element masses expressed in a.m.u.
		 * Elements denoting vacancies MUST have masses equal to 0.
		 * - **original_name**: OPTIONAL. Can be any valid Unicode string, and SHOULD contain (if specified) the name of the species that is used internally in the source database.
		 * Note: With regards to "source database", we refer to the immediate source being queried via the OPTIMADE API implementation.
		 * The main use of this field is for source databases that use species names, containing characters that are not allowed (see description of the list property `species_at_sites`).
		 * - For systems that have only species formed by a single chemical symbol, and that have at most one species per chemical symbol, SHOULD use the chemical symbol as species name (e.g., `"Ti"` for titanium, `"O"` for oxygen, etc.)
		 * However, note that this is OPTIONAL, and client implementations MUST NOT assume that the key corresponds to a chemical symbol, nor assume that if the species name is a valid chemical symbol, that it represents a species with that chemical symbol.
		 * This means that a species `{"name": "C", "chemical_symbols": ["Ti"], "concentration": [1.0]}` is valid and represents a titanium species (and *not* a carbon species).
		 * - It is NOT RECOMMENDED that a structure includes species that do not have at least one corresponding site.
		 * - **Examples**:
		 * - `[ {"name": "Ti", "chemical_symbols": ["Ti"], "concentration": [1.0]} ]`: any site with this species is occupied by a Ti atom.
		 * - `[ {"name": "Ti", "chemical_symbols": ["Ti", "vacancy"], "concentration": [0.9, 0.1]} ]`: any site with this species is occupied by a Ti atom with 90 % probability, and has a vacancy with 10 % probability.
		 * - `[ {"name": "BaCa", "chemical_symbols": ["vacancy", "Ba", "Ca"], "concentration": [0.05, 0.45, 0.5], "mass": [0.0, 137.327, 40.078]} ]`: any site with this species is occupied by a Ba atom with 45 % probability, a Ca atom with 50 % probability, and by a vacancy with 5 % probability. The mass of this site is (on average) 88.5 a.m.u.
		 * - `[ {"name": "C12", "chemical_symbols": ["C"], "concentration": [1.0], "mass": [12.0]} ]`: any site with this species is occupied by a carbon isotope with mass 12.
		 * - `[ {"name": "C13", "chemical_symbols": ["C"], "concentration": [1.0], "mass": [13.0]} ]`: any site with this species is occupied by a carbon isotope with mass 13.
		 * - `[ {"name": "CH3", "chemical_symbols": ["C"], "concentration": [1.0], "attached": ["H"], "nattached": [3]} ]`: any site with this species is occupied by a methyl group, -CH3, which is represented without specifying precise positions of the hydrogen atoms.
		 * Required
		 */
		species: Array<Species>;

		/**
		 * Name of the species at each site (where values for sites are specified with the same order of the property `cartesian_site_positions`).
		 * The properties of the species are found in the property `species`.
		 * - **Type**: list of strings.
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: Support for queries on this property is OPTIONAL.
		 * If supported, filters MAY support only a subset of comparison operators.
		 * - MUST have length equal to the number of sites in the structure (first dimension of the list property `cartesian_site_positions`).
		 * - Each species name mentioned in the `species_at_sites` list MUST be described in the list property `species` (i.e. for each value in the `species_at_sites` list there MUST exist exactly one dictionary in the `species` list with the `name` attribute equal to the corresponding `species_at_sites` value).
		 * - Each site MUST be associated only to a single species.
		 * **Note**: However, species can represent mixtures of atoms, and multiple species MAY be defined for the same chemical element.
		 * This latter case is useful when different atoms of the same type need to be grouped or distinguished, for instance in simulation codes to assign different initial spin states.
		 * - **Examples**:
		 * - `["Ti","O2"]` indicates that the first site is hosting a species labeled `"Ti"` and the second a species labeled `"O2"`.
		 * - `["Ac", "Ac", "Ag", "Ir"]` indicating the first two sites contains the `"Ac"` species, while the third and fourth sites contain the `"Ag"` and `"Ir"` species, respectively.
		 * Required
		 */
		species_at_sites: Array<string>;

		/**
		 * A list of strings that flag which special features are used by the structure.
		 * - **Type**: list of strings
		 * - **Requirements/Conventions**:
		 * - **Support**: MUST be supported by all implementations, MUST NOT be `null`.
		 * - **Query**: MUST be a queryable property.
		 * Filters on the list MUST support all mandatory HAS-type queries.
		 * Filter operators for comparisons on the string components MUST support equality, support for other comparison operators are OPTIONAL.
		 * - MUST be an empty list if no special features are used.
		 * - MUST be sorted alphabetically.
		 * - If a special feature listed below is used, the list MUST contain the corresponding string.
		 * - If a special feature listed below is not used, the list MUST NOT contain the corresponding string.
		 * - **List of strings used to indicate special structure features**:
		 * - `disorder`: this flag MUST be present if any one entry in the `species` list has a `chemical_symbols` list that is longer than 1 element.
		 * - `implicit_atoms`: this flag MUST be present if the structure contains atoms that are not assigned to sites via the property `species_at_sites` (e.g., because their positions are unknown).
		 * When this flag is present, the properties related to the chemical formula will likely not match the type and count of atoms represented by the `species_at_sites`, `species` and `assemblies` properties.
		 * - `site_attachments`: this flag MUST be present if any one entry in the `species` list includes `attached` and `nattached`.
		 * - `assemblies`: this flag MUST be present if the property `assemblies` is present.
		 * - **Examples**: A structure having implicit atoms and using assemblies: `["assemblies", "implicit_atoms"]`
		 * Required
		 */
		structure_features: Array<StructureFeatures>;
	}

	/** This class contains the Field for the attributes used to represent a structure, e.g. unit cell, atoms, positions. */
	export interface StructureResourceAttributesFormProperties {

		/**
		 * The anonymous formula is the `chemical_formula_reduced`, but where the elements are instead first ordered by their chemical proportion number, and then, in order left to right, replaced by anonymous symbols A, B, C, ..., Z, Aa, Ba, ..., Za, Ab, Bb, ... and so on.
		 * - **Type**: string
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property.
		 * However, support for filters using partial string matching with this property is OPTIONAL (i.e., BEGINS WITH, ENDS WITH, and CONTAINS).
		 * - **Examples**:
		 * - `"A2B"`
		 * - `"A42B42C16D12E10F9G5"`
		 * - **Querying**:
		 * - A filter that matches an exactly given formula is `chemical_formula_anonymous="A2B"`.
		 * Required
		 */
		chemical_formula_anonymous: FormControl<string | null | undefined>,

		/**
		 * The chemical formula for a structure as a string in a form chosen by the API implementation.
		 * - **Type**: string
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - The chemical formula is given as a string consisting of properly capitalized element symbols followed by integers or decimal numbers, balanced parentheses, square, and curly brackets `(`,`)`, `[`,`]`, `{`, `}`, commas, the `+`, `-`, `:` and `=` symbols. The parentheses are allowed to be followed by a number. Spaces are allowed anywhere except within chemical symbols. The order of elements and any groupings indicated by parentheses or brackets are chosen freely by the API implementation.
		 * - The string SHOULD be arithmetically consistent with the element ratios in the `chemical_formula_reduced` property.
		 * - It is RECOMMENDED, but not mandatory, that symbols, parentheses and brackets, if used, are used with the meanings prescribed by [IUPAC's Nomenclature of Organic Chemistry](https://www.qmul.ac.uk/sbcs/iupac/bibliog/blue.html).
		 * - **Examples**:
		 * - `"(H2O)2 Na"`
		 * - `"NaCl"`
		 * - `"CaCO3"`
		 * - `"CCaO3"`
		 * - `"(CH3)3N+ - [CH2]2-OH = Me3N+ - CH2 - CH2OH"`
		 * - **Query examples**:
		 * - Note: the free-form nature of this property is likely to make queries on it across different databases inconsistent.
		 * - A filter that matches an exactly given formula: `chemical_formula_descriptive="(H2O)2 Na"`.
		 * - A filter that does a partial match: `chemical_formula_descriptive CONTAINS "H2O"`.
		 * Required
		 */
		chemical_formula_descriptive: FormControl<string | null | undefined>,

		/**
		 * The chemical formula for a structure in [Hill form](https://dx.doi.org/10.1021/ja02046a005) with element symbols followed by integer chemical proportion numbers. The proportion number MUST be omitted if it is 1.
		 * - **Type**: string
		 * - **Requirements/Conventions**:
		 * - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.
		 * - **Query**: Support for queries on this property is OPTIONAL.
		 * If supported, only a subset of the filter features MAY be supported.
		 * - The overall scale factor of the chemical proportions is chosen such that the resulting values are integers that indicate the most chemically relevant unit of which the system is composed.
		 * For example, if the structure is a repeating unit cell with four hydrogens and four oxygens that represents two hydroperoxide molecules, `chemical_formula_hill` is `"H2O2"` (i.e., not `"HO"`, nor `"H4O4"`).
		 * - If the chemical insight needed to ascribe a Hill formula to the system is not present, the property MUST be handled as unset.
		 * - Element symbols MUST have proper capitalization (e.g., `"Si"`, not `"SI"` for "silicon").
		 * - Elements MUST be placed in [Hill order](https://dx.doi.org/10.1021/ja02046a005), followed by their integer chemical proportion number.
		 * Hill order means: if carbon is present, it is placed first, and if also present, hydrogen is placed second.
		 * After that, all other elements are ordered alphabetically.
		 * If carbon is not present, all elements are ordered alphabetically.
		 * - If the system has sites with partial occupation and the total occupations of each element do not all sum up to integers, then the Hill formula SHOULD be handled as unset.
		 * - No spaces or separators are allowed.
		 * - **Examples**:
		 * - `"H2O2"`
		 * - **Query examples**:
		 * - A filter that matches an exactly given formula is `chemical_formula_hill="H2O2"`.
		 */
		chemical_formula_hill: FormControl<string | null | undefined>,

		/**
		 * The reduced chemical formula for a structure as a string with element symbols and integer chemical proportion numbers.
		 * The proportion number MUST be omitted if it is 1.
		 * - **Type**: string
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property.
		 * However, support for filters using partial string matching with this property is OPTIONAL (i.e., BEGINS WITH, ENDS WITH, and CONTAINS).
		 * Intricate queries on formula components are instead suggested to be formulated using set-type filter operators on the multi valued `elements` and `elements_ratios` properties.
		 * - Element symbols MUST have proper capitalization (e.g., `"Si"`, not `"SI"` for "silicon").
		 * - Elements MUST be placed in alphabetical order, followed by their integer chemical proportion number.
		 * - For structures with no partial occupation, the chemical proportion numbers are the smallest integers for which the chemical proportion is exactly correct.
		 * - For structures with partial occupation, the chemical proportion numbers are integers that within reasonable approximation indicate the correct chemical proportions. The precise details of how to perform the rounding is chosen by the API implementation.
		 * - No spaces or separators are allowed.
		 * - **Examples**:
		 * - `"H2NaO"`
		 * - `"ClNa"`
		 * - `"CCaO3"`
		 * - **Query examples**:
		 * - A filter that matches an exactly given formula is `chemical_formula_reduced="H2NaO"`.
		 * Required
		 */
		chemical_formula_reduced: FormControl<string | null | undefined>,

		/**
		 * The entry's immutable ID (e.g., an UUID). This is important for databases having preferred IDs that point to "the latest version" of a record, but still offer access to older variants. This ID maps to the version-specific record, in case it changes in the future.
		 * - **Type**: string.
		 * - **Requirements/Conventions**:
		 * - **Support**: OPTIONAL support in implementations, i.e., MAY be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Examples**:
		 * - `"8bd3e750-b477-41a0-9b11-3a799f21b44f"`
		 * - `"fjeiwoj,54;@=%<>#32"` (Strings that are not URL-safe are allowed.)
		 */
		immutable_id: FormControl<string | null | undefined>,

		/**
		 * Date and time representing when the entry was last modified.
		 * - **Type**: timestamp.
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Response**: REQUIRED in the response unless the query parameter `response_fields` is present and does not include this property.
		 * - **Example**:
		 * - As part of JSON response format: `"2007-04-05T14:30:20Z"` (i.e., encoded as an [RFC 3339 Internet Date/Time Format](https://tools.ietf.org/html/rfc3339#section-5.6) string.)
		 * Required
		 */
		last_modified: FormControl<Date | null | undefined>,

		/**
		 * Number of different elements in the structure as an integer.
		 * - **Type**: integer
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - MUST be equal to the lengths of the list properties `elements` and `elements_ratios`, if they are provided.
		 * - **Examples**:
		 * - `3`
		 * - **Querying**:
		 * - Note: queries on this property can equivalently be formulated using `elements LENGTH`.
		 * - A filter that matches structures that have exactly 4 elements: `nelements=4`.
		 * - A filter that matches structures that have between 2 and 7 elements: `nelements>=2 AND nelements<=7`.
		 * Required
		 */
		nelements: FormControl<number | null | undefined>,

		/**
		 * An integer specifying the number of periodic dimensions in the structure, equivalent to the number of non-zero entries in `dimension_types`.
		 * - **Type**: integer
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - The integer value MUST be between 0 and 3 inclusive and MUST be equal to the sum of the items in the `dimension_types` property.
		 * - This property only reflects the treatment of the lattice vectors provided for the structure, and not any physical interpretation of the dimensionality of its contents.
		 * - **Examples**:
		 * - `2` should be indicated in cases where `dimension_types` is any of `[1, 1, 0]`, `[1, 0, 1]`, `[0, 1, 1]`.
		 * - **Query examples**:
		 * - Match only structures with exactly 3 periodic dimensions: `nperiodic_dimensions=3`
		 * - Match all structures with 2 or fewer periodic dimensions: `nperiodic_dimensions<=2`
		 * Required
		 */
		nperiodic_dimensions: FormControl<number | null | undefined>,

		/**
		 * An integer specifying the length of the `cartesian_site_positions` property.
		 * - **Type**: integer
		 * - **Requirements/Conventions**:
		 * - **Support**: SHOULD be supported by all implementations, i.e., SHOULD NOT be `null`.
		 * - **Query**: MUST be a queryable property with support for all mandatory filter features.
		 * - **Examples**:
		 * - `42`
		 * - **Query examples**:
		 * - Match only structures with exactly 4 sites: `nsites=4`
		 * - Match structures that have between 2 and 7 sites: `nsites>=2 AND nsites<=7`
		 * Required
		 */
		nsites: FormControl<number | null | undefined>,
	}
	export function CreateStructureResourceAttributesFormGroup() {
		return new FormGroup<StructureResourceAttributesFormProperties>({
			chemical_formula_anonymous: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^([A-Z][a-z]?\d*)*$')]),
			chemical_formula_descriptive: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			chemical_formula_hill: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([A-Z][a-z]?\d*)*$')]),
			chemical_formula_reduced: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^([A-Z][a-z]?\d*)*$')]),
			immutable_id: new FormControl<string | null | undefined>(undefined),
			last_modified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			nelements: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			nperiodic_dimensions: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			nsites: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** errors are not allowed */
	export interface StructureResponseMany {

		/**
		 * List of unique OPTIMADE structures entry resource objects
		 * Required
		 */
		data: Array<StructureResource>;

		/** A list of unique errors */
		errors?: Array<Error>;
		included?: Array<EntryResource>;

		/** Information about the JSON API used */
		jsonapi?: JsonApi;

		/** Links associated with the primary data or errors */
		links?: ToplevelLinks;

		/**
		 * A meta object containing non-standard information
		 * Required
		 */
		meta: ResponseMeta;
	}

	/** errors are not allowed */
	export interface StructureResponseManyFormProperties {
	}
	export function CreateStructureResponseManyFormGroup() {
		return new FormGroup<StructureResponseManyFormProperties>({
		});

	}


	/** errors are not allowed */
	export interface StructureResponseOne {

		/**
		 * A single structures entry resource
		 * Required
		 */
		data: StructureResource;

		/** A list of unique errors */
		errors?: Array<Error>;
		included?: Array<EntryResource>;

		/** Information about the JSON API used */
		jsonapi?: JsonApi;

		/** Links associated with the primary data or errors */
		links?: ToplevelLinks;

		/**
		 * A meta object containing non-standard information
		 * Required
		 */
		meta: ResponseMeta;
	}

	/** errors are not allowed */
	export interface StructureResponseOneFormProperties {
	}
	export function CreateStructureResponseOneFormGroup() {
		return new FormGroup<StructureResponseOneFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Info
		 * Get info
		 * @return {InfoResponse} Successful Response
		 */
		Get_info_info_get(): Observable<InfoResponse> {
			return this.http.get<InfoResponse>(this.baseUri + 'info', {});
		}

		/**
		 * Get Entry Info
		 * Get info/{entry}
		 * @return {EntryInfoResponse} Successful Response
		 */
		Get_entry_info_info__entry__get(entry: string): Observable<EntryInfoResponse> {
			return this.http.get<EntryInfoResponse>(this.baseUri + 'info/' + (entry == null ? '' : encodeURIComponent(entry)), {});
		}

		/**
		 * Get Links
		 * Get links
		 * @param {string} filter A filter string, in the format described in section API Filtering Format Specification of the specification.
		 * @param {string} response_format The output format requested (see section Response Format).
		 * Defaults to the format string 'json', which specifies the standard output format described in this specification.
		 * Example: `http://example.com/v1/structures?response_format=xml`
		 * @param {string} email_address An email address of the user making the request.
		 * The email SHOULD be that of a person and not an automatic system.
		 * Example: `http://example.com/v1/structures?email_address=user@example.com`
		 * @param {string} response_fields A comma-delimited set of fields to be provided in the output.
		 * If provided, these fields MUST be returned along with the REQUIRED fields.
		 * Other OPTIONAL fields MUST NOT be returned when this parameter is present.
		 * Example: `http://example.com/v1/structures?response_fields=last_modified,nsites`
		 * @param {string} sort If supporting sortable queries, an implementation MUST use the `sort` query parameter with format as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-sorting).
		 * An implementation MAY support multiple sort fields for a single query.
		 * If it does, it again MUST conform to the JSON API 1.0 specification.
		 * If an implementation supports sorting for an entry listing endpoint, then the `/info/<entries>` endpoint MUST include, for each field name `<fieldname>` in its `data.properties.<fieldname>` response value that can be used for sorting, the key `sortable` with value `true`.
		 * If a field name under an entry listing endpoint supporting sorting cannot be used for sorting, the server MUST either leave out the `sortable` key or set it equal to `false` for the specific field name.
		 * The set of field names, with `sortable` equal to `true` are allowed to be used in the "sort fields" list according to its definition in the JSON API 1.0 specification.
		 * The field `sortable` is in addition to each property description and other OPTIONAL fields.
		 * An example is shown in the section Entry Listing Info Endpoints.
		 * @param {number} page_limit Sets a numerical limit on the number of entries returned.
		 * See [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-pagination).
		 * The API implementation MUST return no more than the number specified.
		 * It MAY return fewer.
		 * The database MAY have a maximum limit and not accept larger numbers (in which case an error code -- 403 Forbidden -- MUST be returned).
		 * The default limit value is up to the API implementation to decide.
		 * Example: `http://example.com/optimade/v1/structures?page_limit=100`
		 * @param {number} page_offset RECOMMENDED for use with _offset-based_ pagination: using `page_offset` and `page_limit` is RECOMMENDED.
		 * Example: Skip 50 structures and fetch up to 100: `/structures?page_offset=50&page_limit=100`.
		 * @param {number} page_number RECOMMENDED for use with _page-based_ pagination: using `page_number` and `page_limit` is RECOMMENDED.
		 * It is RECOMMENDED that the first page has number 1, i.e., that `page_number` is 1-based.
		 * Example: Fetch page 2 of up to 50 structures per page: `/structures?page_number=2&page_limit=50`.
		 * @param {number} page_cursor RECOMMENDED for use with _cursor-based_ pagination: using `page_cursor` and `page_limit` is RECOMMENDED.
		 * @param {number} page_above RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.
		 * Example: Fetch up to 100 structures above sort-field value 4000 (in this example, server chooses to fetch results sorted by increasing `id`, so `page_above` value refers to an `id` value): `/structures?page_above=4000&page_limit=100`.
		 * @param {number} page_below RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.
		 * @param {string} include A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).
		 * All related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.
		 * The value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).
		 * If relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.
		 * The **default value** for `include` is `references`.
		 * This means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.
		 * Note, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.
		 * > **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.
		 * @param {string} api_hint If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.
		 * @return {LinksResponse} Successful Response
		 */
		Get_links_links_get(filter: string | null | undefined, response_format: string | null | undefined, email_address: string | null | undefined, response_fields: string | null | undefined, sort: string | null | undefined, page_limit: number | null | undefined, page_offset: number | null | undefined, page_number: number | null | undefined, page_cursor: number | null | undefined, page_above: number | null | undefined, page_below: number | null | undefined, include: string | null | undefined, api_hint: string | null | undefined): Observable<LinksResponse> {
			return this.http.get<LinksResponse>(this.baseUri + 'links?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&response_format=' + (response_format == null ? '' : encodeURIComponent(response_format)) + '&email_address=' + (email_address == null ? '' : encodeURIComponent(email_address)) + '&response_fields=' + (response_fields == null ? '' : encodeURIComponent(response_fields)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&page_limit=' + page_limit + '&page_offset=' + page_offset + '&page_number=' + page_number + '&page_cursor=' + page_cursor + '&page_above=' + page_above + '&page_below=' + page_below + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&api_hint=' + (api_hint == null ? '' : encodeURIComponent(api_hint)), {});
		}

		/**
		 * Get References
		 * Get references
		 * @param {string} filter A filter string, in the format described in section API Filtering Format Specification of the specification.
		 * @param {string} response_format The output format requested (see section Response Format).
		 * Defaults to the format string 'json', which specifies the standard output format described in this specification.
		 * Example: `http://example.com/v1/structures?response_format=xml`
		 * @param {string} email_address An email address of the user making the request.
		 * The email SHOULD be that of a person and not an automatic system.
		 * Example: `http://example.com/v1/structures?email_address=user@example.com`
		 * @param {string} response_fields A comma-delimited set of fields to be provided in the output.
		 * If provided, these fields MUST be returned along with the REQUIRED fields.
		 * Other OPTIONAL fields MUST NOT be returned when this parameter is present.
		 * Example: `http://example.com/v1/structures?response_fields=last_modified,nsites`
		 * @param {string} sort If supporting sortable queries, an implementation MUST use the `sort` query parameter with format as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-sorting).
		 * An implementation MAY support multiple sort fields for a single query.
		 * If it does, it again MUST conform to the JSON API 1.0 specification.
		 * If an implementation supports sorting for an entry listing endpoint, then the `/info/<entries>` endpoint MUST include, for each field name `<fieldname>` in its `data.properties.<fieldname>` response value that can be used for sorting, the key `sortable` with value `true`.
		 * If a field name under an entry listing endpoint supporting sorting cannot be used for sorting, the server MUST either leave out the `sortable` key or set it equal to `false` for the specific field name.
		 * The set of field names, with `sortable` equal to `true` are allowed to be used in the "sort fields" list according to its definition in the JSON API 1.0 specification.
		 * The field `sortable` is in addition to each property description and other OPTIONAL fields.
		 * An example is shown in the section Entry Listing Info Endpoints.
		 * @param {number} page_limit Sets a numerical limit on the number of entries returned.
		 * See [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-pagination).
		 * The API implementation MUST return no more than the number specified.
		 * It MAY return fewer.
		 * The database MAY have a maximum limit and not accept larger numbers (in which case an error code -- 403 Forbidden -- MUST be returned).
		 * The default limit value is up to the API implementation to decide.
		 * Example: `http://example.com/optimade/v1/structures?page_limit=100`
		 * @param {number} page_offset RECOMMENDED for use with _offset-based_ pagination: using `page_offset` and `page_limit` is RECOMMENDED.
		 * Example: Skip 50 structures and fetch up to 100: `/structures?page_offset=50&page_limit=100`.
		 * @param {number} page_number RECOMMENDED for use with _page-based_ pagination: using `page_number` and `page_limit` is RECOMMENDED.
		 * It is RECOMMENDED that the first page has number 1, i.e., that `page_number` is 1-based.
		 * Example: Fetch page 2 of up to 50 structures per page: `/structures?page_number=2&page_limit=50`.
		 * @param {number} page_cursor RECOMMENDED for use with _cursor-based_ pagination: using `page_cursor` and `page_limit` is RECOMMENDED.
		 * @param {number} page_above RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.
		 * Example: Fetch up to 100 structures above sort-field value 4000 (in this example, server chooses to fetch results sorted by increasing `id`, so `page_above` value refers to an `id` value): `/structures?page_above=4000&page_limit=100`.
		 * @param {number} page_below RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.
		 * @param {string} include A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).
		 * All related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.
		 * The value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).
		 * If relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.
		 * The **default value** for `include` is `references`.
		 * This means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.
		 * Note, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.
		 * > **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.
		 * @param {string} api_hint If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.
		 * @return {ReferenceResponseMany} Successful Response
		 */
		Get_references_references_get(filter: string | null | undefined, response_format: string | null | undefined, email_address: string | null | undefined, response_fields: string | null | undefined, sort: string | null | undefined, page_limit: number | null | undefined, page_offset: number | null | undefined, page_number: number | null | undefined, page_cursor: number | null | undefined, page_above: number | null | undefined, page_below: number | null | undefined, include: string | null | undefined, api_hint: string | null | undefined): Observable<ReferenceResponseMany> {
			return this.http.get<ReferenceResponseMany>(this.baseUri + 'references?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&response_format=' + (response_format == null ? '' : encodeURIComponent(response_format)) + '&email_address=' + (email_address == null ? '' : encodeURIComponent(email_address)) + '&response_fields=' + (response_fields == null ? '' : encodeURIComponent(response_fields)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&page_limit=' + page_limit + '&page_offset=' + page_offset + '&page_number=' + page_number + '&page_cursor=' + page_cursor + '&page_above=' + page_above + '&page_below=' + page_below + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&api_hint=' + (api_hint == null ? '' : encodeURIComponent(api_hint)), {});
		}

		/**
		 * Get Single Reference
		 * Get references/{entry_id}
		 * @param {string} response_format The output format requested (see section Response Format).
		 * Defaults to the format string 'json', which specifies the standard output format described in this specification.
		 * Example: `http://example.com/v1/structures?response_format=xml`
		 * @param {string} email_address An email address of the user making the request.
		 * The email SHOULD be that of a person and not an automatic system.
		 * Example: `http://example.com/v1/structures?email_address=user@example.com`
		 * @param {string} response_fields A comma-delimited set of fields to be provided in the output.
		 * If provided, these fields MUST be returned along with the REQUIRED fields.
		 * Other OPTIONAL fields MUST NOT be returned when this parameter is present.
		 * Example: `http://example.com/v1/structures?response_fields=last_modified,nsites`
		 * @param {string} include A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).
		 * All related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.
		 * The value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).
		 * If relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.
		 * The **default value** for `include` is `references`.
		 * This means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.
		 * Note, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.
		 * > **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.
		 * @param {string} api_hint If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.
		 * @return {ReferenceResponseOne} Successful Response
		 */
		Get_single_reference_references__entry_id__get(entry_id: string, response_format: string | null | undefined, email_address: string | null | undefined, response_fields: string | null | undefined, include: string | null | undefined, api_hint: string | null | undefined): Observable<ReferenceResponseOne> {
			return this.http.get<ReferenceResponseOne>(this.baseUri + 'references/' + (entry_id == null ? '' : encodeURIComponent(entry_id)) + '&response_format=' + (response_format == null ? '' : encodeURIComponent(response_format)) + '&email_address=' + (email_address == null ? '' : encodeURIComponent(email_address)) + '&response_fields=' + (response_fields == null ? '' : encodeURIComponent(response_fields)) + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&api_hint=' + (api_hint == null ? '' : encodeURIComponent(api_hint)), {});
		}

		/**
		 * Get Structures
		 * Get structures
		 * @param {string} filter A filter string, in the format described in section API Filtering Format Specification of the specification.
		 * @param {string} response_format The output format requested (see section Response Format).
		 * Defaults to the format string 'json', which specifies the standard output format described in this specification.
		 * Example: `http://example.com/v1/structures?response_format=xml`
		 * @param {string} email_address An email address of the user making the request.
		 * The email SHOULD be that of a person and not an automatic system.
		 * Example: `http://example.com/v1/structures?email_address=user@example.com`
		 * @param {string} response_fields A comma-delimited set of fields to be provided in the output.
		 * If provided, these fields MUST be returned along with the REQUIRED fields.
		 * Other OPTIONAL fields MUST NOT be returned when this parameter is present.
		 * Example: `http://example.com/v1/structures?response_fields=last_modified,nsites`
		 * @param {string} sort If supporting sortable queries, an implementation MUST use the `sort` query parameter with format as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-sorting).
		 * An implementation MAY support multiple sort fields for a single query.
		 * If it does, it again MUST conform to the JSON API 1.0 specification.
		 * If an implementation supports sorting for an entry listing endpoint, then the `/info/<entries>` endpoint MUST include, for each field name `<fieldname>` in its `data.properties.<fieldname>` response value that can be used for sorting, the key `sortable` with value `true`.
		 * If a field name under an entry listing endpoint supporting sorting cannot be used for sorting, the server MUST either leave out the `sortable` key or set it equal to `false` for the specific field name.
		 * The set of field names, with `sortable` equal to `true` are allowed to be used in the "sort fields" list according to its definition in the JSON API 1.0 specification.
		 * The field `sortable` is in addition to each property description and other OPTIONAL fields.
		 * An example is shown in the section Entry Listing Info Endpoints.
		 * @param {number} page_limit Sets a numerical limit on the number of entries returned.
		 * See [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-pagination).
		 * The API implementation MUST return no more than the number specified.
		 * It MAY return fewer.
		 * The database MAY have a maximum limit and not accept larger numbers (in which case an error code -- 403 Forbidden -- MUST be returned).
		 * The default limit value is up to the API implementation to decide.
		 * Example: `http://example.com/optimade/v1/structures?page_limit=100`
		 * @param {number} page_offset RECOMMENDED for use with _offset-based_ pagination: using `page_offset` and `page_limit` is RECOMMENDED.
		 * Example: Skip 50 structures and fetch up to 100: `/structures?page_offset=50&page_limit=100`.
		 * @param {number} page_number RECOMMENDED for use with _page-based_ pagination: using `page_number` and `page_limit` is RECOMMENDED.
		 * It is RECOMMENDED that the first page has number 1, i.e., that `page_number` is 1-based.
		 * Example: Fetch page 2 of up to 50 structures per page: `/structures?page_number=2&page_limit=50`.
		 * @param {number} page_cursor RECOMMENDED for use with _cursor-based_ pagination: using `page_cursor` and `page_limit` is RECOMMENDED.
		 * @param {number} page_above RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.
		 * Example: Fetch up to 100 structures above sort-field value 4000 (in this example, server chooses to fetch results sorted by increasing `id`, so `page_above` value refers to an `id` value): `/structures?page_above=4000&page_limit=100`.
		 * @param {number} page_below RECOMMENDED for use with _value-based_ pagination: using `page_above`/`page_below` and `page_limit` is RECOMMENDED.
		 * @param {string} include A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).
		 * All related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.
		 * The value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).
		 * If relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.
		 * The **default value** for `include` is `references`.
		 * This means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.
		 * Note, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.
		 * > **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.
		 * @param {string} api_hint If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.
		 * @return {StructureResponseMany} Successful Response
		 */
		Get_structures_structures_get(filter: string | null | undefined, response_format: string | null | undefined, email_address: string | null | undefined, response_fields: string | null | undefined, sort: string | null | undefined, page_limit: number | null | undefined, page_offset: number | null | undefined, page_number: number | null | undefined, page_cursor: number | null | undefined, page_above: number | null | undefined, page_below: number | null | undefined, include: string | null | undefined, api_hint: string | null | undefined): Observable<StructureResponseMany> {
			return this.http.get<StructureResponseMany>(this.baseUri + 'structures?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&response_format=' + (response_format == null ? '' : encodeURIComponent(response_format)) + '&email_address=' + (email_address == null ? '' : encodeURIComponent(email_address)) + '&response_fields=' + (response_fields == null ? '' : encodeURIComponent(response_fields)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&page_limit=' + page_limit + '&page_offset=' + page_offset + '&page_number=' + page_number + '&page_cursor=' + page_cursor + '&page_above=' + page_above + '&page_below=' + page_below + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&api_hint=' + (api_hint == null ? '' : encodeURIComponent(api_hint)), {});
		}

		/**
		 * Get Single Structure
		 * Get structures/{entry_id}
		 * @param {string} response_format The output format requested (see section Response Format).
		 * Defaults to the format string 'json', which specifies the standard output format described in this specification.
		 * Example: `http://example.com/v1/structures?response_format=xml`
		 * @param {string} email_address An email address of the user making the request.
		 * The email SHOULD be that of a person and not an automatic system.
		 * Example: `http://example.com/v1/structures?email_address=user@example.com`
		 * @param {string} response_fields A comma-delimited set of fields to be provided in the output.
		 * If provided, these fields MUST be returned along with the REQUIRED fields.
		 * Other OPTIONAL fields MUST NOT be returned when this parameter is present.
		 * Example: `http://example.com/v1/structures?response_fields=last_modified,nsites`
		 * @param {string} include A server MAY implement the JSON API concept of returning [compound documents](https://jsonapi.org/format/1.0/#document-compound-documents) by utilizing the `include` query parameter as specified by [JSON API 1.0](https://jsonapi.org/format/1.0/#fetching-includes).
		 * All related resource objects MUST be returned as part of an array value for the top-level `included` field, see the section JSON Response Schema: Common Fields.
		 * The value of `include` MUST be a comma-separated list of "relationship paths", as defined in the [JSON API](https://jsonapi.org/format/1.0/#fetching-includes).
		 * If relationship paths are not supported, or a server is unable to identify a relationship path a `400 Bad Request` response MUST be made.
		 * The **default value** for `include` is `references`.
		 * This means `references` entries MUST always be included under the top-level field `included` as default, since a server assumes if `include` is not specified by a client in the request, it is still specified as `include=references`.
		 * Note, if a client explicitly specifies `include` and leaves out `references`, `references` resource objects MUST NOT be included under the top-level field `included`, as per the definition of `included`, see section JSON Response Schema: Common Fields.
		 * > **Note**: A query with the parameter `include` set to the empty string means no related resource objects are to be returned under the top-level field `included`.
		 * @param {string} api_hint If the client provides the parameter, the value SHOULD have the format `vMAJOR` or `vMAJOR.MINOR`, where MAJOR is a major version and MINOR is a minor version of the API. For example, if a client appends `api_hint=v1.0` to the query string, the hint provided is for major version 1 and minor version 0.
		 * @return {StructureResponseOne} Successful Response
		 */
		Get_single_structure_structures__entry_id__get(entry_id: string, response_format: string | null | undefined, email_address: string | null | undefined, response_fields: string | null | undefined, include: string | null | undefined, api_hint: string | null | undefined): Observable<StructureResponseOne> {
			return this.http.get<StructureResponseOne>(this.baseUri + 'structures/' + (entry_id == null ? '' : encodeURIComponent(entry_id)) + '&response_format=' + (response_format == null ? '' : encodeURIComponent(response_format)) + '&email_address=' + (email_address == null ? '' : encodeURIComponent(email_address)) + '&response_fields=' + (response_fields == null ? '' : encodeURIComponent(response_fields)) + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&api_hint=' + (api_hint == null ? '' : encodeURIComponent(api_hint)), {});
		}

		/**
		 * Get Versions
		 * Respond with the text/csv representation for the served versions.
		 * Get versions
		 * @return {void} Successful Response
		 */
		Get_versions_versions_get(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'versions', { observe: 'response', responseType: 'text' });
		}
	}

}

