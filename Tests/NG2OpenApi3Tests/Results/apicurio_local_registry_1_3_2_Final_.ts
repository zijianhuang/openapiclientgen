import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ArtifactMetaData {

		/** Required */
		createdBy: string;

		/** Required */
		createdOn: Date;
		description?: string | null;

		/** Required */
		globalId: number;

		/** Required */
		id: string;
		labels?: Array<string>;

		/** Required */
		modifiedBy: string;

		/** Required */
		modifiedOn: Date;
		name?: string | null;

		/** User-defined name-value pairs. Name and value must be strings. */
		properties?: Properties;

		/**
		 * Describes the state of an artifact or artifact version.  The following states
		 * are possible:
		 * * ENABLED
		 * * DISABLED
		 * * DEPRECATED
		 * Required
		 */
		state: ArtifactMetaDataState;

		/** Required */
		type: ArtifactMetaDataType;

		/** Required */
		version: number;
	}
	export interface ArtifactMetaDataFormProperties {

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdOn: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		globalId: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		modifiedBy: FormControl<string | null | undefined>,

		/** Required */
		modifiedOn: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,

		/**
		 * Describes the state of an artifact or artifact version.  The following states
		 * are possible:
		 * * ENABLED
		 * * DISABLED
		 * * DEPRECATED
		 * Required
		 */
		state: FormControl<ArtifactMetaDataState | null | undefined>,

		/** Required */
		type: FormControl<ArtifactMetaDataType | null | undefined>,

		/** Required */
		version: FormControl<number | null | undefined>,
	}
	export function CreateArtifactMetaDataFormGroup() {
		return new FormGroup<ArtifactMetaDataFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			globalId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modifiedBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modifiedOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ArtifactMetaDataState | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ArtifactMetaDataType | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** User-defined name-value pairs. Name and value must be strings. */
	export interface Properties {
	}

	/** User-defined name-value pairs. Name and value must be strings. */
	export interface PropertiesFormProperties {
	}
	export function CreatePropertiesFormGroup() {
		return new FormGroup<PropertiesFormProperties>({
		});

	}

	export enum ArtifactMetaDataState { ENABLED = 'ENABLED', DISABLED = 'DISABLED', DEPRECATED = 'DEPRECATED', DELETED = 'DELETED' }

	export enum ArtifactMetaDataType { AVRO = 'AVRO', PROTOBUF = 'PROTOBUF', PROTOBUF_FD = 'PROTOBUF_FD', JSON = 'JSON', OPENAPI = 'OPENAPI', ASYNCAPI = 'ASYNCAPI', GRAPHQL = 'GRAPHQL', KCONNECT = 'KCONNECT', WSDL = 'WSDL', XSD = 'XSD', XML = 'XML' }


	/** Describes the response received when searching for artifacts. */
	export interface ArtifactSearchResults {

		/**
		 * The artifacts that matched the search criteria.
		 * Required
		 */
		artifacts: Array<SearchedArtifact>;

		/**
		 * The total number of artifacts that matched the search criteria.
		 * Required
		 */
		count: number;
	}

	/** Describes the response received when searching for artifacts. */
	export interface ArtifactSearchResultsFormProperties {

		/**
		 * The total number of artifacts that matched the search criteria.
		 * Required
		 */
		count: FormControl<number | null | undefined>,
	}
	export function CreateArtifactSearchResultsFormGroup() {
		return new FormGroup<ArtifactSearchResultsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Models a single artifact from the result set returned when searching for artifacts. */
	export interface SearchedArtifact {

		/** Required */
		createdBy: string;

		/** Required */
		createdOn: Date;
		description?: string | null;

		/** Required */
		id: string;
		labels?: Array<string>;
		modifiedBy?: string | null;
		modifiedOn?: Date | null;
		name?: string | null;

		/**
		 * Describes the state of an artifact or artifact version.  The following states
		 * are possible:
		 * * ENABLED
		 * * DISABLED
		 * * DEPRECATED
		 * Required
		 */
		state: ArtifactMetaDataState;

		/** Required */
		type: ArtifactMetaDataType;
	}

	/** Models a single artifact from the result set returned when searching for artifacts. */
	export interface SearchedArtifactFormProperties {

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdOn: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		modifiedBy: FormControl<string | null | undefined>,
		modifiedOn: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,

		/**
		 * Describes the state of an artifact or artifact version.  The following states
		 * are possible:
		 * * ENABLED
		 * * DISABLED
		 * * DEPRECATED
		 * Required
		 */
		state: FormControl<ArtifactMetaDataState | null | undefined>,

		/** Required */
		type: FormControl<ArtifactMetaDataType | null | undefined>,
	}
	export function CreateSearchedArtifactFormGroup() {
		return new FormGroup<SearchedArtifactFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modifiedBy: new FormControl<string | null | undefined>(undefined),
			modifiedOn: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ArtifactMetaDataState | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ArtifactMetaDataType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Describes the state of an artifact or artifact version.  The following states
	 * are possible:
	 * * ENABLED
	 * * DISABLED
	 * * DEPRECATED
	 */
	export enum ArtifactState { ENABLED = 'ENABLED', DISABLED = 'DISABLED', DEPRECATED = 'DEPRECATED', DELETED = 'DELETED' }

	export enum ArtifactType { AVRO = 'AVRO', PROTOBUF = 'PROTOBUF', PROTOBUF_FD = 'PROTOBUF_FD', JSON = 'JSON', OPENAPI = 'OPENAPI', ASYNCAPI = 'ASYNCAPI', GRAPHQL = 'GRAPHQL', KCONNECT = 'KCONNECT', WSDL = 'WSDL', XSD = 'XSD', XML = 'XML' }

	export interface EditableMetaData {
		description?: string | null;
		labels?: Array<string>;
		name?: string | null;

		/** User-defined name-value pairs. Name and value must be strings. */
		properties?: Properties;
	}
	export interface EditableMetaDataFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateEditableMetaDataFormGroup() {
		return new FormGroup<EditableMetaDataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * All error responses, whether `4xx` or `5xx` will include one of these as the response
	 * body.
	 */
	export interface Error {

		/** Full details about the error.  This might contain a server stack trace, for example. */
		detail?: string | null;

		/** The server-side error code. */
		error_code?: number | null;

		/** The short error message. */
		message?: string | null;
	}

	/**
	 * All error responses, whether `4xx` or `5xx` will include one of these as the response
	 * body.
	 */
	export interface ErrorFormProperties {

		/** Full details about the error.  This might contain a server stack trace, for example. */
		detail: FormControl<string | null | undefined>,

		/** The server-side error code. */
		error_code: FormControl<number | null | undefined>,

		/** The short error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error_code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Rule {

		/** Required */
		config: string;
		type?: RuleType | null;
	}
	export interface RuleFormProperties {

		/** Required */
		config: FormControl<string | null | undefined>,
		type: FormControl<RuleType | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			config: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<RuleType | null | undefined>(undefined),
		});

	}

	export enum RuleType { VALIDITY = 'VALIDITY', COMPATIBILITY = 'COMPATIBILITY' }

	export enum SearchOver { everything = 'everything', name = 'name', description = 'description', labels = 'labels' }


	/** Models a single artifact from the result set returned when searching for artifacts. */
	export interface SearchedVersion {

		/** Required */
		createdBy: string;

		/** Required */
		createdOn: Date;
		description?: string | null;

		/** Required */
		globalId: number;
		labels?: Array<string>;
		name?: string | null;

		/**
		 * Describes the state of an artifact or artifact version.  The following states
		 * are possible:
		 * * ENABLED
		 * * DISABLED
		 * * DEPRECATED
		 * Required
		 */
		state: ArtifactMetaDataState;

		/** Required */
		type: ArtifactMetaDataType;

		/** Required */
		version: number;
	}

	/** Models a single artifact from the result set returned when searching for artifacts. */
	export interface SearchedVersionFormProperties {

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdOn: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		globalId: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,

		/**
		 * Describes the state of an artifact or artifact version.  The following states
		 * are possible:
		 * * ENABLED
		 * * DISABLED
		 * * DEPRECATED
		 * Required
		 */
		state: FormControl<ArtifactMetaDataState | null | undefined>,

		/** Required */
		type: FormControl<ArtifactMetaDataType | null | undefined>,

		/** Required */
		version: FormControl<number | null | undefined>,
	}
	export function CreateSearchedVersionFormGroup() {
		return new FormGroup<SearchedVersionFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			globalId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ArtifactMetaDataState | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ArtifactMetaDataType | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SortOrder { asc = 'asc', desc = 'desc' }

	export interface UpdateState {

		/**
		 * Describes the state of an artifact or artifact version.  The following states
		 * are possible:
		 * * ENABLED
		 * * DISABLED
		 * * DEPRECATED
		 * Required
		 */
		state: ArtifactMetaDataState;
	}
	export interface UpdateStateFormProperties {

		/**
		 * Describes the state of an artifact or artifact version.  The following states
		 * are possible:
		 * * ENABLED
		 * * DISABLED
		 * * DEPRECATED
		 * Required
		 */
		state: FormControl<ArtifactMetaDataState | null | undefined>,
	}
	export function CreateUpdateStateFormGroup() {
		return new FormGroup<UpdateStateFormProperties>({
			state: new FormControl<ArtifactMetaDataState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VersionMetaData {

		/** Required */
		createdBy: string;

		/** Required */
		createdOn: Date;
		description?: string | null;

		/** Required */
		globalId: number;

		/**
		 * The artifact id.
		 * Required
		 */
		id: string;
		labels?: Array<string>;
		name?: string | null;

		/** User-defined name-value pairs. Name and value must be strings. */
		properties?: Properties;

		/**
		 * Describes the state of an artifact or artifact version.  The following states
		 * are possible:
		 * * ENABLED
		 * * DISABLED
		 * * DEPRECATED
		 */
		state?: ArtifactMetaDataState | null;

		/** Required */
		type: ArtifactMetaDataType;

		/** Required */
		version: number;
	}
	export interface VersionMetaDataFormProperties {

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdOn: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		globalId: FormControl<number | null | undefined>,

		/**
		 * The artifact id.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/**
		 * Describes the state of an artifact or artifact version.  The following states
		 * are possible:
		 * * ENABLED
		 * * DISABLED
		 * * DEPRECATED
		 */
		state: FormControl<ArtifactMetaDataState | null | undefined>,

		/** Required */
		type: FormControl<ArtifactMetaDataType | null | undefined>,

		/** Required */
		version: FormControl<number | null | undefined>,
	}
	export function CreateVersionMetaDataFormGroup() {
		return new FormGroup<VersionMetaDataFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			globalId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ArtifactMetaDataState | null | undefined>(undefined),
			type: new FormControl<ArtifactMetaDataType | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the response received when searching for artifacts. */
	export interface VersionSearchResults {

		/**
		 * The total number of artifacts that matched the search criteria.
		 * Required
		 */
		count: number;

		/** Required */
		versions: Array<SearchedVersion>;
	}

	/** Describes the response received when searching for artifacts. */
	export interface VersionSearchResultsFormProperties {

		/**
		 * The total number of artifacts that matched the search criteria.
		 * Required
		 */
		count: FormControl<number | null | undefined>,
	}
	export function CreateVersionSearchResultsFormGroup() {
		return new FormGroup<VersionSearchResultsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all artifact IDs
		 * Returns a list of IDs of all artifacts in the registry as a flat list.  Typically the
		 * server is configured to limit the number of artifact IDs returned when a large number
		 * of artifacts exist. In this case, the result of this call may be non-deterministic. The
		 * default limit is typically 1000 artifacts.
		 * Get artifacts
		 * @return {Array<string>} On a successful response, returns an array of artifact IDs - one for each artifact
		 * in the registry.
		 */
		ListArtifacts(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'artifacts', {});
		}

		/**
		 * Delete artifact
		 * Deletes an artifact completely, resulting in all versions of the artifact also being
		 * deleted.  This may fail for one of the following reasons:
		 * * No artifact with the `artifactId` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Delete artifacts/{artifactId}
		 * @return {void} 
		 */
		DeleteArtifact(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'artifacts/{artifactId}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get latest artifact
		 * Returns the latest version of the artifact in its raw form.  The `Content-Type` of the response depends on the artifact type.  In most cases, this is `application/json`, but for some types it may be different (for example, `PROTOBUF`). If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used.
		 * This operation may fail for one of the following reasons:
		 * * No artifact with this `artifactId` exists or all versions are `DISABLED` (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get artifacts/{artifactId}
		 * @return {void} The most recent version of the artifact.
		 */
		GetLatestArtifact(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'artifacts/{artifactId}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get artifact metadata
		 * Gets the metadata for an artifact in the registry, based on the latest version. If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used. The returned metadata includes both generated (read-only) and editable metadata (such as name and description).
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists or all versions are `DISABLED` (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get artifacts/{artifactId}/meta
		 * @return {ArtifactMetaData} The artifact's metadata.
		 */
		GetArtifactMetaData(): Observable<ArtifactMetaData> {
			return this.http.get<ArtifactMetaData>(this.baseUri + 'artifacts/{artifactId}/meta', {});
		}

		/**
		 * Get artifact metadata by content
		 * Gets the metadata for an artifact that matches the raw content.  Searches the registry
		 * for a version of the given artifact matching the content provided in the body of the
		 * POST.
		 * This operation can fail for the following reasons:
		 * * Provided content (request body) was empty (HTTP error `400`)
		 * * No artifact with the `artifactId` exists (HTTP error `404`)
		 * * No artifact version matching the provided content exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Post artifacts/{artifactId}/meta
		 * @return {ArtifactMetaData} The metadata of the artifact version matching the provided content.
		 */
		GetArtifactMetaDataByContent(): Observable<ArtifactMetaData> {
			return this.http.post<ArtifactMetaData>(this.baseUri + 'artifacts/{artifactId}/meta', null, {});
		}

		/**
		 * Delete artifact rules
		 * Deletes all of the rules configured for the artifact.  After this is done, the global
		 * rules apply to the artifact again.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Delete artifacts/{artifactId}/rules
		 * @return {void} 
		 */
		DeleteArtifactRules(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'artifacts/{artifactId}/rules', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List artifact rules
		 * Returns a list of all rules configured for the artifact.  The set of rules determines
		 * how the content of an artifact can evolve over time.  If no rules are configured for
		 * an artifact, the set of globally configured rules are used.  If no global rules
		 * are defined, there are no restrictions on content evolution.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get artifacts/{artifactId}/rules
		 * @return {Array<RuleType>} Returns the names of the rules configured for the artifact.
		 */
		ListArtifactRules(): Observable<Array<RuleType>> {
			return this.http.get<Array<RuleType>>(this.baseUri + 'artifacts/{artifactId}/rules', {});
		}

		/**
		 * Create artifact rule
		 * Adds a rule to the list of rules that get applied to the artifact when adding new
		 * versions.  All configured rules must pass to successfully add a new artifact version.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * Rule (named in the request body) is unknown (HTTP error `400`)
		 * * A server error occurred (HTTP error `500`)
		 * Post artifacts/{artifactId}/rules
		 * @return {void} 
		 */
		CreateArtifactRule(requestBody: Rule): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'artifacts/{artifactId}/rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete artifact rule
		 * Deletes a rule from the artifact.  This results in the rule no longer applying for
		 * this artifact.  If this is the only rule configured for the artifact, this is the
		 * same as deleting **all** rules, and the globally configured rules now apply to
		 * this artifact.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * No rule with this name/type is configured for this artifact (HTTP error `404`)
		 * * Invalid rule type (HTTP error `400`)
		 * * A server error occurred (HTTP error `500`)
		 * Delete artifacts/{artifactId}/rules/{rule}
		 * @return {void} 
		 */
		DeleteArtifactRule(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'artifacts/{artifactId}/rules/{rule}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get artifact rule configuration
		 * Returns information about a single rule configured for an artifact.  This is useful
		 * when you want to know what the current configuration settings are for a specific rule.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * No rule with this name/type is configured for this artifact (HTTP error `404`)
		 * * Invalid rule type (HTTP error `400`)
		 * * A server error occurred (HTTP error `500`)
		 * Get artifacts/{artifactId}/rules/{rule}
		 * @return {Rule} Information about a rule.
		 */
		GetArtifactRuleConfig(): Observable<Rule> {
			return this.http.get<Rule>(this.baseUri + 'artifacts/{artifactId}/rules/{rule}', {});
		}

		/**
		 * Update artifact rule configuration
		 * Updates the configuration of a single rule for the artifact.  The configuration data
		 * is specific to each rule type, so the configuration of the `COMPATIBILITY` rule
		 * is in a different format from the configuration of the `VALIDITY` rule.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * No rule with this name/type is configured for this artifact (HTTP error `404`)
		 * * Invalid rule type (HTTP error `400`)
		 * * A server error occurred (HTTP error `500`)
		 * Put artifacts/{artifactId}/rules/{rule}
		 * @return {Rule} Rule configuration was updated.
		 */
		UpdateArtifactRuleConfig(requestBody: Rule): Observable<Rule> {
			return this.http.put<Rule>(this.baseUri + 'artifacts/{artifactId}/rules/{rule}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update artifact state
		 * Updates the state of the artifact. For example, you can use this to mark the latest version of an artifact as `DEPRECATED`. The operation changes the state of the latest version of the artifact, even if this version is `DISABLED`. If multiple versions exist, only the most recent is changed.
		 * The following state changes are supported:
		 * * Enabled -> Disabled
		 * * Enabled -> Deprecated
		 * * Enabled -> Deleted
		 * * Disabled -> Enabled
		 * * Disabled -> Deleted
		 * * Disabled -> Deprecated
		 * * Deprecated -> Deleted
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * Artifact cannot transition to the given state (HTTP error `400`)
		 * * A server error occurred (HTTP error `500`)
		 * Put artifacts/{artifactId}/state
		 * @return {void} 
		 */
		UpdateArtifactState(requestBody: UpdateState): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'artifacts/{artifactId}/state', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List artifact versions
		 * Returns a list of all version numbers for the artifact.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get artifacts/{artifactId}/versions
		 * @return {Array<number>} List of all artifact versions (just the version IDs).
		 */
		ListArtifactVersions(): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'artifacts/{artifactId}/versions', {});
		}

		/**
		 * Get artifact version
		 * Retrieves a single version of the artifact content.  Both the `artifactId` and the
		 * unique `version` number must be provided.  The `Content-Type` of the response depends
		 * on the artifact type.  In most cases, this is `application/json`, but for some types
		 * it may be different (for example, `PROTOBUF`).
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * No version with this `version` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get artifacts/{artifactId}/versions/{version}
		 * @return {void} The content of the artifact version.
		 */
		GetArtifactVersion(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'artifacts/{artifactId}/versions/{version}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete artifact version metadata
		 * Deletes the user-editable metadata properties of the artifact version.  Any properties
		 * that are not user-editable are preserved.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * No version with this `version` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Delete artifacts/{artifactId}/versions/{version}/meta
		 * @return {void} 
		 */
		DeleteArtifactVersionMetaData(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'artifacts/{artifactId}/versions/{version}/meta', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get artifact version metadata
		 * Retrieves the metadata for a single version of the artifact.  The version metadata is
		 * a subset of the artifact metadata and only includes the metadata that is specific to
		 * the version (for example, this doesn't include `modifiedOn`).
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * No version with this `version` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get artifacts/{artifactId}/versions/{version}/meta
		 * @return {VersionMetaData} The artifact version's metadata.
		 */
		GetArtifactVersionMetaData(): Observable<VersionMetaData> {
			return this.http.get<VersionMetaData>(this.baseUri + 'artifacts/{artifactId}/versions/{version}/meta', {});
		}

		/**
		 * Update artifact version metadata
		 * Updates the user-editable portion of the artifact version's metadata.  Only some of
		 * the metadata fields are editable by the user.  For example, `description` is editable,
		 * but `createdOn` is not.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * No version with this `version` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Put artifacts/{artifactId}/versions/{version}/meta
		 * @return {void} 
		 */
		UpdateArtifactVersionMetaData(requestBody: EditableMetaData): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'artifacts/{artifactId}/versions/{version}/meta', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update artifact version state
		 * Updates the state of a specific version of an artifact.  For example, you can use
		 * this operation to disable a specific version.
		 * The following state changes are supported:
		 * * Enabled -> Disabled
		 * * Enabled -> Deprecated
		 * * Enabled -> Deleted
		 * * Disabled -> Enabled
		 * * Disabled -> Deleted
		 * * Disabled -> Deprecated
		 * * Deprecated -> Deleted
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * No version with this `version` exists (HTTP error `404`)
		 * * Artifact version cannot transition to the given state (HTTP error `400`)
		 * * A server error occurred (HTTP error `500`)
		 * Put artifacts/{artifactId}/versions/{version}/state
		 * @return {void} 
		 */
		UpdateArtifactVersionState(requestBody: UpdateState): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'artifacts/{artifactId}/versions/{version}/state', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get artifact by global ID
		 * Gets the content for an artifact version in the registry using its globally unique
		 * identifier.
		 * This operation may fail for one of the following reasons:
		 * * No artifact version with this `globalId` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get ids/{globalId}
		 * @return {void} The content of the artifact version.
		 */
		GetArtifactByGlobalId(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ids/{globalId}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get global artifact metadata
		 * Gets the metadata for an artifact version in the registry using its globally unique
		 * identifier.  The returned metadata includes both generated (read-only) and editable
		 * metadata (such as name and description).
		 * This operation may fail for one of the following reasons:
		 * * No artifact version with this `globalId` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get ids/{globalId}/meta
		 * @return {ArtifactMetaData} The artifact's metadata.
		 */
		GetArtifactMetaDataByGlobalId(): Observable<ArtifactMetaData> {
			return this.http.get<ArtifactMetaData>(this.baseUri + 'ids/{globalId}/meta', {});
		}

		/**
		 * Delete all global rules
		 * Deletes all globally configured rules.
		 * This operation can fail for the following reasons:
		 * * A server error occurred (HTTP error `500`)
		 * Delete rules
		 * @return {void} 
		 */
		DeleteAllGlobalRules(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'rules', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List global rules
		 * Gets a list of all the currently configured global rules (if any).
		 * This operation can fail for the following reasons:
		 * * A server error occurred (HTTP error `500`)
		 * Get rules
		 * @return {Array<RuleType>} The list of names of the globally configured rules.
		 */
		ListGlobalRules(): Observable<Array<RuleType>> {
			return this.http.get<Array<RuleType>>(this.baseUri + 'rules', {});
		}

		/**
		 * Create global rule
		 * Adds a rule to the list of globally configured rules.
		 * This operation can fail for the following reasons:
		 * * The rule type is unknown (HTTP error `400`)
		 * * The rule already exists (HTTP error `409`)
		 * * A server error occurred (HTTP error `500`)
		 * Post rules
		 * @return {void} 
		 */
		CreateGlobalRule(requestBody: Rule): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete global rule
		 * Deletes a single global rule.  If this is the only rule configured, this is the same
		 * as deleting **all** rules.
		 * This operation can fail for the following reasons:
		 * * Invalid rule name/type (HTTP error `400`)
		 * * No rule with name/type `rule` exists (HTTP error `404`)
		 * * Rule cannot be deleted (HTTP error `409`)
		 * * A server error occurred (HTTP error `500`)
		 * Delete rules/{rule}
		 * @return {void} 
		 */
		DeleteGlobalRule(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'rules/{rule}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get global rule configuration
		 * Returns information about the named globally configured rule.
		 * This operation can fail for the following reasons:
		 * * Invalid rule name/type (HTTP error `400`)
		 * * No rule with name/type `rule` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get rules/{rule}
		 * @return {Rule} The global rule's configuration.
		 */
		GetGlobalRuleConfig(): Observable<Rule> {
			return this.http.get<Rule>(this.baseUri + 'rules/{rule}', {});
		}

		/**
		 * Update global rule configuration
		 * Updates the configuration for a globally configured rule.
		 * This operation can fail for the following reasons:
		 * * Invalid rule name/type (HTTP error `400`)
		 * * No rule with name/type `rule` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Put rules/{rule}
		 * @return {Rule} The global rule's configuration was successfully updated.
		 */
		UpdateGlobalRuleConfig(requestBody: Rule): Observable<Rule> {
			return this.http.put<Rule>(this.baseUri + 'rules/{rule}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search for artifacts
		 * Returns a paginated list of all artifacts that match the provided search criteria.
		 * Get search/artifacts
		 * @param {string} search The text to search.
		 * @param {number} offset The number of artifacts to skip before starting to collect the result set.
		 * @param {number} limit The number of artifacts to return.
		 * @param {SearchOver} over What fields to search.
		 * @param {SortOrder} order Sort order, ascending or descending.
		 * @return {ArtifactSearchResults} On a successful response, returns a result set of artifacts - one for each artifact
		 * in the registry that matches the criteria.
		 */
		SearchArtifacts(search: string | null | undefined, offset: number, limit: number, over: SearchOver | null | undefined, order: SortOrder | null | undefined): Observable<ArtifactSearchResults> {
			return this.http.get<ArtifactSearchResults>(this.baseUri + 'search/artifacts?search=' + (search == null ? '' : encodeURIComponent(search)) + '&offset=' + offset + '&limit=' + limit + '&over=' + over + '&order=' + order, {});
		}

		/**
		 * Search artifact versions
		 * Searches for versions of a specific artifact.  This is typically used to get a listing
		 * of all versions of an artifact (for example, in a user interface).
		 * Get search/artifacts/{artifactId}/versions
		 * @param {number} offset The number of versions to skip before starting to collect the result set.
		 * @param {number} limit The number of versions to return.
		 * @return {VersionSearchResults} On a successful response, returns a result set of versions - one for each version
		 * of the artifact.
		 */
		SearchVersions(offset: number, limit: number): Observable<VersionSearchResults> {
			return this.http.get<VersionSearchResults>(this.baseUri + 'search/artifacts/{artifactId}/versions?offset=' + offset + '&limit=' + limit, {});
		}
	}

	export enum CreateArtifactIfExists { FAIL = 'FAIL', UPDATE = 'UPDATE', RETURN = 'RETURN', RETURN_OR_UPDATE = 'RETURN_OR_UPDATE' }

}

