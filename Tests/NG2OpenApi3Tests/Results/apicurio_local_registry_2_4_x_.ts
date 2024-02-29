import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ArtifactContent {

		/**
		 * Raw content of the artifact or a valid (and accessible) URL where the content can be found.
		 * Required
		 */
		content: string;

		/**
		 * Collection of references to other artifacts.
		 * Required
		 */
		references: Array<ArtifactReference>;
	}
	export interface ArtifactContentFormProperties {

		/**
		 * Raw content of the artifact or a valid (and accessible) URL where the content can be found.
		 * Required
		 */
		content: FormControl<string | null | undefined>,
	}
	export function CreateArtifactContentFormGroup() {
		return new FormGroup<ArtifactContentFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A reference to a different artifact. Typically used with artifact types that can have dependencies like Protobuf. */
	export interface ArtifactReference {

		/** Required */
		artifactId: string;

		/** Required */
		groupId: string;

		/** Required */
		name: string;
		version?: string | null;
	}

	/** A reference to a different artifact. Typically used with artifact types that can have dependencies like Protobuf. */
	export interface ArtifactReferenceFormProperties {

		/** Required */
		artifactId: FormControl<string | null | undefined>,

		/** Required */
		groupId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateArtifactReferenceFormGroup() {
		return new FormGroup<ArtifactReferenceFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ArtifactMetaData {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		contentId: string;

		/** Required */
		createdBy: string;

		/** Required */
		createdOn: Date;
		description?: string | null;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		globalId: string;

		/** An ID of a single artifact group. */
		groupId?: string | null;

		/**
		 * The ID of a single artifact.
		 * Required
		 */
		id: string;
		labels?: Array<string>;

		/** Required */
		modifiedBy: string;

		/** Required */
		modifiedOn: Date;
		name?: string | null;

		/** User-defined name-value pairs. Name and value must be strings. */
		properties?: Properties;
		references?: Array<ArtifactReference>;

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
		type: string;

		/** Required */
		version: string;
	}
	export interface ArtifactMetaDataFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		contentId: FormControl<string | null | undefined>,

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdOn: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		globalId: FormControl<string | null | undefined>,

		/** An ID of a single artifact group. */
		groupId: FormControl<string | null | undefined>,

		/**
		 * The ID of a single artifact.
		 * Required
		 */
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
		type: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateArtifactMetaDataFormGroup() {
		return new FormGroup<ArtifactMetaDataFormProperties>({
			contentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			globalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modifiedBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modifiedOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ArtifactMetaDataState | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export enum ArtifactMetaDataState { ENABLED = 'ENABLED', DISABLED = 'DISABLED', DEPRECATED = 'DEPRECATED' }


	/** Describes the ownership of an artifact. */
	export interface ArtifactOwner {
		owner?: string | null;
	}

	/** Describes the ownership of an artifact. */
	export interface ArtifactOwnerFormProperties {
		owner: FormControl<string | null | undefined>,
	}
	export function CreateArtifactOwnerFormGroup() {
		return new FormGroup<ArtifactOwnerFormProperties>({
			owner: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the response received when searching for artifacts. */
	export interface ArtifactSearchResults {

		/**
		 * The artifacts returned in the result set.
		 * Required
		 */
		artifacts: Array<SearchedArtifact>;

		/**
		 * The total number of artifacts that matched the query that produced the result set (may be
		 * more than the number of artifacts in the result set).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
	}

	/** Describes the response received when searching for artifacts. */
	export interface ArtifactSearchResultsFormProperties {

		/**
		 * The total number of artifacts that matched the query that produced the result set (may be
		 * more than the number of artifacts in the result set).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
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

		/** An ID of a single artifact group. */
		groupId?: string | null;

		/**
		 * The ID of a single artifact.
		 * Required
		 */
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
		type: string;
	}

	/** Models a single artifact from the result set returned when searching for artifacts. */
	export interface SearchedArtifactFormProperties {

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdOn: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** An ID of a single artifact group. */
		groupId: FormControl<string | null | undefined>,

		/**
		 * The ID of a single artifact.
		 * Required
		 */
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
		type: FormControl<string | null | undefined>,
	}
	export function CreateSearchedArtifactFormGroup() {
		return new FormGroup<SearchedArtifactFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modifiedBy: new FormControl<string | null | undefined>(undefined),
			modifiedOn: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ArtifactMetaDataState | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Describes the state of an artifact or artifact version.  The following states
	 * are possible:
	 * * ENABLED
	 * * DISABLED
	 * * DEPRECATED
	 */
	export enum ArtifactState { ENABLED = 'ENABLED', DISABLED = 'DISABLED', DEPRECATED = 'DEPRECATED' }

	export interface ArtifactTypeInfo {
		name?: string | null;
	}
	export interface ArtifactTypeInfoFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateArtifactTypeInfoFormGroup() {
		return new FormGroup<ArtifactTypeInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigurationProperty {

		/** Required */
		description: string;

		/** Required */
		label: string;

		/** Required */
		name: string;

		/** Required */
		type: string;

		/** Required */
		value: string;
	}
	export interface ConfigurationPropertyFormProperties {

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		label: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationPropertyFormGroup() {
		return new FormGroup<ConfigurationPropertyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateGroupMetaData {
		description?: string | null;

		/** Required */
		id: string;

		/** User-defined name-value pairs. Name and value must be strings. */
		properties?: Properties;
	}
	export interface CreateGroupMetaDataFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupMetaDataFormGroup() {
		return new FormGroup<CreateGroupMetaDataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Models a download "link".  Useful for browser use-cases. */
	export interface DownloadRef {

		/** Required */
		downloadId: string;
		href?: string | null;
	}

	/** Models a download "link".  Useful for browser use-cases. */
	export interface DownloadRefFormProperties {

		/** Required */
		downloadId: FormControl<string | null | undefined>,
		href: FormControl<string | null | undefined>,
	}
	export function CreateDownloadRefFormGroup() {
		return new FormGroup<DownloadRefFormProperties>({
			downloadId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

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

		/**
		 * The server-side error code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		error_code?: number | null;

		/** The short error message. */
		message?: string | null;

		/** The error name - typically the classname of the exception thrown by the server. */
		name?: string | null;
	}

	/**
	 * All error responses, whether `4xx` or `5xx` will include one of these as the response
	 * body.
	 */
	export interface ErrorFormProperties {

		/** Full details about the error.  This might contain a server stack trace, for example. */
		detail: FormControl<string | null | undefined>,

		/**
		 * The server-side error code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		error_code: FormControl<number | null | undefined>,

		/** The short error message. */
		message: FormControl<string | null | undefined>,

		/** The error name - typically the classname of the exception thrown by the server. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error_code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupMetaData {

		/** Required */
		createdBy: string;

		/** Required */
		createdOn: Date;

		/** Required */
		description: string;

		/**
		 * An ID of a single artifact group.
		 * Required
		 */
		id: string;

		/** Required */
		modifiedBy: string;

		/** Required */
		modifiedOn: Date;

		/**
		 * User-defined name-value pairs. Name and value must be strings.
		 * Required
		 */
		properties: Properties;
	}
	export interface GroupMetaDataFormProperties {

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdOn: FormControl<Date | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/**
		 * An ID of a single artifact group.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Required */
		modifiedBy: FormControl<string | null | undefined>,

		/** Required */
		modifiedOn: FormControl<Date | null | undefined>,
	}
	export function CreateGroupMetaDataFormGroup() {
		return new FormGroup<GroupMetaDataFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modifiedBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modifiedOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the response received when searching for groups. */
	export interface GroupSearchResults {

		/**
		 * The total number of groups that matched the query that produced the result set (may be
		 * more than the number of groups in the result set).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/**
		 * The groups returned in the result set.
		 * Required
		 */
		groups: Array<SearchedGroup>;
	}

	/** Describes the response received when searching for groups. */
	export interface GroupSearchResultsFormProperties {

		/**
		 * The total number of groups that matched the query that produced the result set (may be
		 * more than the number of groups in the result set).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
	}
	export function CreateGroupSearchResultsFormGroup() {
		return new FormGroup<GroupSearchResultsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Models a single group from the result set returned when searching for groups. */
	export interface SearchedGroup {

		/** Required */
		createdBy: string;

		/** Required */
		createdOn: Date;

		/** Required */
		description: string;

		/**
		 * An ID of a single artifact group.
		 * Required
		 */
		id: string;

		/** Required */
		modifiedBy: string;

		/** Required */
		modifiedOn: Date;
	}

	/** Models a single group from the result set returned when searching for groups. */
	export interface SearchedGroupFormProperties {

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdOn: FormControl<Date | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/**
		 * An ID of a single artifact group.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Required */
		modifiedBy: FormControl<string | null | undefined>,

		/** Required */
		modifiedOn: FormControl<Date | null | undefined>,
	}
	export function CreateSearchedGroupFormGroup() {
		return new FormGroup<SearchedGroupFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modifiedBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modifiedOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IfExists { FAIL = 'FAIL', UPDATE = 'UPDATE', RETURN = 'RETURN', RETURN_OR_UPDATE = 'RETURN_OR_UPDATE' }


	/**
	 * List of limitations on used resources, that are applied on the current instance of Registry.
	 * Keys represent the resource type and are suffixed by the corresponding unit.
	 * Values are integers. Only non-negative values are allowed, with the exception of -1, which means that the limit is not applied.
	 */
	export interface Limits {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxArtifactDescriptionLengthChars?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxArtifactLabelsCount?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxArtifactNameLengthChars?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxArtifactPropertiesCount?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxArtifactsCount?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxLabelSizeBytes?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxPropertyKeySizeBytes?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxPropertyValueSizeBytes?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxRequestsPerSecondCount?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxSchemaSizeBytes?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxTotalSchemasCount?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxVersionsPerArtifactCount?: string | null;
	}

	/**
	 * List of limitations on used resources, that are applied on the current instance of Registry.
	 * Keys represent the resource type and are suffixed by the corresponding unit.
	 * Values are integers. Only non-negative values are allowed, with the exception of -1, which means that the limit is not applied.
	 */
	export interface LimitsFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxArtifactDescriptionLengthChars: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxArtifactLabelsCount: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxArtifactNameLengthChars: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxArtifactPropertiesCount: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxArtifactsCount: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxLabelSizeBytes: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxPropertyKeySizeBytes: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxPropertyValueSizeBytes: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxRequestsPerSecondCount: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxSchemaSizeBytes: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxTotalSchemasCount: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		maxVersionsPerArtifactCount: FormControl<string | null | undefined>,
	}
	export function CreateLimitsFormGroup() {
		return new FormGroup<LimitsFormProperties>({
			maxArtifactDescriptionLengthChars: new FormControl<string | null | undefined>(undefined),
			maxArtifactLabelsCount: new FormControl<string | null | undefined>(undefined),
			maxArtifactNameLengthChars: new FormControl<string | null | undefined>(undefined),
			maxArtifactPropertiesCount: new FormControl<string | null | undefined>(undefined),
			maxArtifactsCount: new FormControl<string | null | undefined>(undefined),
			maxLabelSizeBytes: new FormControl<string | null | undefined>(undefined),
			maxPropertyKeySizeBytes: new FormControl<string | null | undefined>(undefined),
			maxPropertyValueSizeBytes: new FormControl<string | null | undefined>(undefined),
			maxRequestsPerSecondCount: new FormControl<string | null | undefined>(undefined),
			maxSchemaSizeBytes: new FormControl<string | null | undefined>(undefined),
			maxTotalSchemasCount: new FormControl<string | null | undefined>(undefined),
			maxVersionsPerArtifactCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LogConfiguration {

		/** Required */
		level: LogConfigurationLevel;
	}
	export interface LogConfigurationFormProperties {

		/** Required */
		level: FormControl<LogConfigurationLevel | null | undefined>,
	}
	export function CreateLogConfigurationFormGroup() {
		return new FormGroup<LogConfigurationFormProperties>({
			level: new FormControl<LogConfigurationLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LogConfigurationLevel { DEBUG = 'DEBUG', TRACE = 'TRACE', WARN = 'WARN', ERROR = 'ERROR', SEVERE = 'SEVERE', WARNING = 'WARNING', INFO = 'INFO', CONFIG = 'CONFIG', FINE = 'FINE', FINER = 'FINER', FINEST = 'FINEST' }

	export enum LogLevel { DEBUG = 'DEBUG', TRACE = 'TRACE', WARN = 'WARN', ERROR = 'ERROR', SEVERE = 'SEVERE', WARNING = 'WARNING', INFO = 'INFO', CONFIG = 'CONFIG', FINE = 'FINE', FINER = 'FINER', FINEST = 'FINEST' }

	export interface NamedLogConfiguration {
	}
	export interface NamedLogConfigurationFormProperties {
	}
	export function CreateNamedLogConfigurationFormGroup() {
		return new FormGroup<NamedLogConfigurationFormProperties>({
		});

	}


	/** The mapping between a user/principal and their role. */
	export interface RoleMapping {

		/** Required */
		principalId: string;

		/** A friendly name for the principal. */
		principalName?: string | null;

		/** Required */
		role: RoleMappingRole;
	}

	/** The mapping between a user/principal and their role. */
	export interface RoleMappingFormProperties {

		/** Required */
		principalId: FormControl<string | null | undefined>,

		/** A friendly name for the principal. */
		principalName: FormControl<string | null | undefined>,

		/** Required */
		role: FormControl<RoleMappingRole | null | undefined>,
	}
	export function CreateRoleMappingFormGroup() {
		return new FormGroup<RoleMappingFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principalName: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<RoleMappingRole | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RoleMappingRole { READ_ONLY = 'READ_ONLY', DEVELOPER = 'DEVELOPER', ADMIN = 'ADMIN' }

	export enum RoleType { READ_ONLY = 'READ_ONLY', DEVELOPER = 'DEVELOPER', ADMIN = 'ADMIN' }

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

	export interface RuleViolationCause {
		context?: string | null;
		description?: string | null;
	}
	export interface RuleViolationCauseFormProperties {
		context: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateRuleViolationCauseFormGroup() {
		return new FormGroup<RuleViolationCauseFormProperties>({
			context: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * All error responses, whether `4xx` or `5xx` will include one of these as the response
	 * body.
	 */
	export interface RuleViolationError {
	}

	/**
	 * All error responses, whether `4xx` or `5xx` will include one of these as the response
	 * body.
	 */
	export interface RuleViolationErrorFormProperties {
	}
	export function CreateRuleViolationErrorFormGroup() {
		return new FormGroup<RuleViolationErrorFormProperties>({
		});

	}


	/** Models a single artifact from the result set returned when searching for artifacts. */
	export interface SearchedVersion {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		contentId: string;

		/** Required */
		createdBy: string;

		/** Required */
		createdOn: Date;
		description?: string | null;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		globalId: string;
		labels?: Array<string>;
		name?: string | null;

		/** User-defined name-value pairs. Name and value must be strings. */
		properties?: Properties;

		/** Required */
		references: Array<ArtifactReference>;

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
		type: string;

		/** Required */
		version: string;
	}

	/** Models a single artifact from the result set returned when searching for artifacts. */
	export interface SearchedVersionFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		contentId: FormControl<string | null | undefined>,

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdOn: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		globalId: FormControl<string | null | undefined>,
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
		type: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateSearchedVersionFormGroup() {
		return new FormGroup<SearchedVersionFormProperties>({
			contentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			globalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ArtifactMetaDataState | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SortBy { name = 'name', createdOn = 'createdOn' }

	export enum SortOrder { asc = 'asc', desc = 'desc' }

	export interface SystemInfo {
		builtOn?: Date | null;
		description?: string | null;
		name?: string | null;
		version?: string | null;
	}
	export interface SystemInfoFormProperties {
		builtOn: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateSystemInfoFormGroup() {
		return new FormGroup<SystemInfoFormProperties>({
			builtOn: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConfigurationProperty {

		/** Required */
		value: string;
	}
	export interface UpdateConfigurationPropertyFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationPropertyFormGroup() {
		return new FormGroup<UpdateConfigurationPropertyFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRole {

		/** Required */
		role: RoleMappingRole;
	}
	export interface UpdateRoleFormProperties {

		/** Required */
		role: FormControl<RoleMappingRole | null | undefined>,
	}
	export function CreateUpdateRoleFormGroup() {
		return new FormGroup<UpdateRoleFormProperties>({
			role: new FormControl<RoleMappingRole | null | undefined>(undefined, [Validators.required]),
		});

	}

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


	/** Information about a single user. */
	export interface UserInfo {
		admin?: boolean | null;
		developer?: boolean | null;
		displayName?: string | null;
		username?: string | null;
		viewer?: boolean | null;
	}

	/** Information about a single user. */
	export interface UserInfoFormProperties {
		admin: FormControl<boolean | null | undefined>,
		developer: FormControl<boolean | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
		viewer: FormControl<boolean | null | undefined>,
	}
	export function CreateUserInfoFormGroup() {
		return new FormGroup<UserInfoFormProperties>({
			admin: new FormControl<boolean | null | undefined>(undefined),
			developer: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			viewer: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface VersionMetaData {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		contentId: string;

		/** Required */
		createdBy: string;

		/** Required */
		createdOn: Date;
		description?: string | null;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		globalId: string;

		/** An ID of a single artifact group. */
		groupId?: string | null;

		/**
		 * The ID of a single artifact.
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
		type: string;

		/** Required */
		version: string;
	}
	export interface VersionMetaDataFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		contentId: FormControl<string | null | undefined>,

		/** Required */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdOn: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		globalId: FormControl<string | null | undefined>,

		/** An ID of a single artifact group. */
		groupId: FormControl<string | null | undefined>,

		/**
		 * The ID of a single artifact.
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
		type: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateVersionMetaDataFormGroup() {
		return new FormGroup<VersionMetaDataFormProperties>({
			contentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			globalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ArtifactMetaDataState | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the response received when searching for artifacts. */
	export interface VersionSearchResults {

		/**
		 * The total number of versions that matched the query (may be more than the number of versions
		 * returned in the result set).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/**
		 * The collection of artifact versions returned in the result set.
		 * Required
		 */
		versions: Array<SearchedVersion>;
	}

	/** Describes the response received when searching for artifacts. */
	export interface VersionSearchResultsFormProperties {

		/**
		 * The total number of versions that matched the query (may be more than the number of versions
		 * returned in the result set).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
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
		 * List artifact types
		 * Gets a list of all the configured artifact types.
		 * This operation can fail for the following reasons:
		 * * A server error occurred (HTTP error `500`)
		 * Get admin/artifactTypes
		 * @return {Array<ArtifactTypeInfo>} The list of available artifact types.
		 */
		ListArtifactTypes(): Observable<Array<ArtifactTypeInfo>> {
			return this.http.get<Array<ArtifactTypeInfo>>(this.baseUri + 'admin/artifactTypes', {});
		}

		/**
		 * List all configuration properties
		 * Returns a list of all configuration properties that have been set.  The list is not paged.
		 * This operation may fail for one of the following reasons:
		 * * A server error occurred (HTTP error `500`)
		 * Get admin/config/properties
		 * @return {Array<ConfigurationProperty>} On a successful response, returns a list of configuration properties.
		 */
		ListConfigProperties(): Observable<Array<ConfigurationProperty>> {
			return this.http.get<Array<ConfigurationProperty>>(this.baseUri + 'admin/config/properties', {});
		}

		/**
		 * Reset a configuration property
		 * Resets the value of a single configuration property.  This will return the property to
		 * its default value (see external documentation for supported properties and their default
		 * values).
		 * This operation may fail for one of the following reasons:
		 * * Property not found or not configured (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Delete admin/config/properties/{propertyName}
		 * @return {void} 
		 */
		ResetConfigProperty(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/config/properties/{propertyName}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get configuration property value
		 * Returns the value of a single configuration property.
		 * This operation may fail for one of the following reasons:
		 * * Property not found or not configured (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get admin/config/properties/{propertyName}
		 * @return {ConfigurationProperty} The configuration property value.
		 */
		GetConfigProperty(): Observable<ConfigurationProperty> {
			return this.http.get<ConfigurationProperty>(this.baseUri + 'admin/config/properties/{propertyName}', {});
		}

		/**
		 * Update a configuration property
		 * Updates the value of a single configuration property.
		 * This operation may fail for one of the following reasons:
		 * * Property not found or not configured (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Put admin/config/properties/{propertyName}
		 * @return {void} 
		 */
		UpdateConfigProperty(requestBody: UpdateConfigurationProperty): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'admin/config/properties/{propertyName}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Export registry data
		 * Exports registry data as a ZIP archive.
		 * Get admin/export
		 * @param {boolean} forBrowser Indicates if the operation is done for a browser.  If true, the response will be a JSON payload with a property called `href`.  This `href` will be a single-use, naked download link suitable for use by a web browser to download the content.
		 * @return {DownloadRef} Response when the export is successful.
		 */
		ExportData(forBrowser: boolean | null | undefined): Observable<DownloadRef> {
			return this.http.get<DownloadRef>(this.baseUri + 'admin/export?forBrowser=' + forBrowser, {});
		}

		/**
		 * List logging configurations
		 * List all of the configured logging levels.  These override the default
		 * logging configuration.
		 * Get admin/loggers
		 * @return {Array<NamedLogConfiguration>} The list of logging configurations.
		 */
		ListLogConfigurations(): Observable<Array<NamedLogConfiguration>> {
			return this.http.get<Array<NamedLogConfiguration>>(this.baseUri + 'admin/loggers', {});
		}

		/**
		 * Removes logger configuration
		 * Removes the configured logger configuration (if any) for the given logger.
		 * Delete admin/loggers/{logger}
		 * @return {NamedLogConfiguration} The default logger configuration (now that the configuration for this logger has been removed, the 
		 * default configuration is applied).
		 */
		RemoveLogConfiguration(): Observable<NamedLogConfiguration> {
			return this.http.delete<NamedLogConfiguration>(this.baseUri + 'admin/loggers/{logger}', {});
		}

		/**
		 * Get a single logger configuration
		 * Returns the configured logger configuration for the provided logger name, if no logger configuration is persisted it will return the current default log configuration in the system.
		 * Get admin/loggers/{logger}
		 * @return {NamedLogConfiguration} The logger configuration for the named logger.
		 */
		GetLogConfiguration(): Observable<NamedLogConfiguration> {
			return this.http.get<NamedLogConfiguration>(this.baseUri + 'admin/loggers/{logger}', {});
		}

		/**
		 * Set a logger's configuration
		 * Configures the logger referenced by the provided logger name with the given configuration.
		 * Put admin/loggers/{logger}
		 * @param {LogConfiguration} requestBody The new logger configuration.
		 * @return {NamedLogConfiguration} The new configuration for the given logger.
		 */
		SetLogConfiguration(requestBody: LogConfiguration): Observable<NamedLogConfiguration> {
			return this.http.put<NamedLogConfiguration>(this.baseUri + 'admin/loggers/{logger}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all role mappings
		 * Gets a list of all role mappings configured in the registry (if any).
		 * This operation can fail for the following reasons:
		 * * A server error occurred (HTTP error `500`)
		 * Get admin/roleMappings
		 * @return {Array<RoleMapping>} A successful response will return the list of role mappings.
		 */
		ListRoleMappings(): Observable<Array<RoleMapping>> {
			return this.http.get<Array<RoleMapping>>(this.baseUri + 'admin/roleMappings', {});
		}

		/**
		 * Create a new role mapping
		 * Creates a new mapping between a user/principal and a role.
		 * This operation can fail for the following reasons:
		 * * A server error occurred (HTTP error `500`)
		 * Post admin/roleMappings
		 * @return {void} 
		 */
		CreateRoleMapping(requestBody: RoleMapping): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'admin/roleMappings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a role mapping
		 * Deletes a single role mapping, effectively denying access to a user/principal.
		 * This operation can fail for the following reasons:
		 * * No role mapping for the principalId exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Delete admin/roleMappings/{principalId}
		 * @return {void} 
		 */
		DeleteRoleMapping(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/roleMappings/{principalId}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a single role mapping
		 * Gets the details of a single role mapping (by `principalId`).
		 * This operation can fail for the following reasons:
		 * * No role mapping for the `principalId` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get admin/roleMappings/{principalId}
		 * @return {RoleMapping} When successful, returns the details of a role mapping.
		 */
		GetRoleMapping(): Observable<RoleMapping> {
			return this.http.get<RoleMapping>(this.baseUri + 'admin/roleMappings/{principalId}', {});
		}

		/**
		 * Update a role mapping
		 * Updates a single role mapping for one user/principal.
		 * This operation can fail for the following reasons:
		 * * No role mapping for the principalId exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Put admin/roleMappings/{principalId}
		 * @return {void} 
		 */
		UpdateRoleMapping(requestBody: UpdateRole): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'admin/roleMappings/{principalId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete all global rules
		 * Deletes all globally configured rules.
		 * This operation can fail for the following reasons:
		 * * A server error occurred (HTTP error `500`)
		 * Delete admin/rules
		 * @return {void} 
		 */
		DeleteAllGlobalRules(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/rules', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List global rules
		 * Gets a list of all the currently configured global rules (if any).
		 * This operation can fail for the following reasons:
		 * * A server error occurred (HTTP error `500`)
		 * Get admin/rules
		 * @return {Array<RuleType>} The list of names of the globally configured rules.
		 */
		ListGlobalRules(): Observable<Array<RuleType>> {
			return this.http.get<Array<RuleType>>(this.baseUri + 'admin/rules', {});
		}

		/**
		 * Create global rule
		 * Adds a rule to the list of globally configured rules.
		 * This operation can fail for the following reasons:
		 * * The rule type is unknown (HTTP error `400`)
		 * * The rule already exists (HTTP error `409`)
		 * * A server error occurred (HTTP error `500`)
		 * Post admin/rules
		 * @return {void} 
		 */
		CreateGlobalRule(requestBody: Rule): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'admin/rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Delete admin/rules/{rule}
		 * @return {void} 
		 */
		DeleteGlobalRule(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'admin/rules/{rule}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get global rule configuration
		 * Returns information about the named globally configured rule.
		 * This operation can fail for the following reasons:
		 * * Invalid rule name/type (HTTP error `400`)
		 * * No rule with name/type `rule` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get admin/rules/{rule}
		 * @return {Rule} The global rule's configuration.
		 */
		GetGlobalRuleConfig(): Observable<Rule> {
			return this.http.get<Rule>(this.baseUri + 'admin/rules/{rule}', {});
		}

		/**
		 * Update global rule configuration
		 * Updates the configuration for a globally configured rule.
		 * This operation can fail for the following reasons:
		 * * Invalid rule name/type (HTTP error `400`)
		 * * No rule with name/type `rule` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Put admin/rules/{rule}
		 * @return {Rule} The global rule's configuration was successfully updated.
		 */
		UpdateGlobalRuleConfig(requestBody: Rule): Observable<Rule> {
			return this.http.put<Rule>(this.baseUri + 'admin/rules/{rule}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List groups
		 * Returns a list of all groups.  This list is paged.
		 * Get groups
		 * @param {number} limit The number of groups to return.  Defaults to 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset The number of groups to skip before starting the result set.  Defaults to 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {SortOrder} order Sort order, ascending (`asc`) or descending (`desc`).
		 * @param {SortBy} orderby The field to sort by.  Can be one of:
		 * * `name`
		 * * `createdOn`
		 * @return {GroupSearchResults} On a successful response, returns a bounded set of groups.
		 */
		ListGroups(limit: number | null | undefined, offset: number | null | undefined, order: SortOrder | null | undefined, orderby: SortBy | null | undefined): Observable<GroupSearchResults> {
			return this.http.get<GroupSearchResults>(this.baseUri + 'groups?limit=' + limit + '&offset=' + offset + '&order=' + order + '&orderby=' + orderby, {});
		}

		/**
		 * Create a new group
		 * Creates a new group.
		 * This operation can fail for the following reasons:
		 * * A server error occurred (HTTP error `500`)
		 * * The group already exist (HTTP error `409`)
		 * Post groups
		 * @return {GroupMetaData} The group has been successfully created.
		 */
		CreateGroup(requestBody: CreateGroupMetaData): Observable<GroupMetaData> {
			return this.http.post<GroupMetaData>(this.baseUri + 'groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a group by the specified ID.
		 * Deletes a group by identifier.
		 * This operation can fail for the following reasons:
		 * * A server error occurred (HTTP error `500`)
		 * * The group does not exist (HTTP error `404`)
		 * Delete groups/{groupId}
		 * @return {void} 
		 */
		DeleteGroupById(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/{groupId}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a group by the specified ID.
		 * Returns a group using the specified id.
		 * This operation can fail for the following reasons:
		 * * No group exists with the specified ID (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get groups/{groupId}
		 * @return {GroupMetaData} The group's metadata.
		 */
		GetGroupById(): Observable<GroupMetaData> {
			return this.http.get<GroupMetaData>(this.baseUri + 'groups/{groupId}', {});
		}

		/**
		 * Delete artifacts in group
		 * Deletes all of the artifacts that exist in a given group.
		 * Delete groups/{groupId}/artifacts
		 * @return {void} 
		 */
		DeleteArtifactsInGroup(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/{groupId}/artifacts', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List artifacts in group
		 * Returns a list of all artifacts in the group.  This list is paged.
		 * Get groups/{groupId}/artifacts
		 * @param {number} limit The number of artifacts to return.  Defaults to 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset The number of artifacts to skip before starting the result set.  Defaults to 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {SortOrder} order Sort order, ascending (`asc`) or descending (`desc`).
		 * @param {SortBy} orderby The field to sort by.  Can be one of:
		 * * `name`
		 * * `createdOn`
		 * @return {ArtifactSearchResults} On a successful response, returns a bounded set of artifacts.
		 */
		ListArtifactsInGroup(limit: number | null | undefined, offset: number | null | undefined, order: SortOrder | null | undefined, orderby: SortBy | null | undefined): Observable<ArtifactSearchResults> {
			return this.http.get<ArtifactSearchResults>(this.baseUri + 'groups/{groupId}/artifacts?limit=' + limit + '&offset=' + offset + '&order=' + order + '&orderby=' + orderby, {});
		}

		/**
		 * Delete artifact
		 * Deletes an artifact completely, resulting in all versions of the artifact also being
		 * deleted.  This may fail for one of the following reasons:
		 * * No artifact with the `artifactId` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Delete groups/{groupId}/artifacts/{artifactId}
		 * @return {void} 
		 */
		DeleteArtifact(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get latest artifact
		 * Returns the latest version of the artifact in its raw form.  The `Content-Type` of the
		 * response depends on the artifact type.  In most cases, this is `application/json`, but
		 * for some types it may be different (for example, `PROTOBUF`).
		 * If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used.
		 * This operation may fail for one of the following reasons:
		 * * No artifact with this `artifactId` exists or all versions are `DISABLED` (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get groups/{groupId}/artifacts/{artifactId}
		 * @param {boolean} dereference Allows the user to specify if the content should be dereferenced when being returned
		 * @return {void} The content of one version of one artifact.
		 */
		GetLatestArtifact(dereference: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}?dereference=' + dereference, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get artifact metadata
		 * Gets the metadata for an artifact in the registry, based on the latest version. If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used. The returned metadata includes
		 * both generated (read-only) and editable metadata (such as name and description).
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists  or all versions are `DISABLED` (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get groups/{groupId}/artifacts/{artifactId}/meta
		 * @return {ArtifactMetaData} The artifact's metadata.
		 */
		GetArtifactMetaData(): Observable<ArtifactMetaData> {
			return this.http.get<ArtifactMetaData>(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/meta', {});
		}

		/**
		 * Update artifact metadata
		 * Updates the editable parts of the artifact's metadata.  Not all metadata fields can
		 * be updated.  For example, `createdOn` and `createdBy` are both read-only properties.
		 * This operation can fail for the following reasons:
		 * * No artifact with the `artifactId` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Put groups/{groupId}/artifacts/{artifactId}/meta
		 * @param {EditableMetaData} requestBody Updated artifact metadata.
		 * @return {void} 
		 */
		UpdateArtifactMetaData(requestBody: EditableMetaData): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/meta', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get artifact owner
		 * Gets the owner of an artifact in the registry.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get groups/{groupId}/artifacts/{artifactId}/owner
		 * @return {ArtifactOwner} The artifact's owner.
		 */
		GetArtifactOwner(): Observable<ArtifactOwner> {
			return this.http.get<ArtifactOwner>(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/owner', {});
		}

		/**
		 * Update artifact owner
		 * Changes the ownership of an artifact.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Put groups/{groupId}/artifacts/{artifactId}/owner
		 * @return {void} 
		 */
		UpdateArtifactOwner(requestBody: ArtifactOwner): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/owner', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete artifact rules
		 * Deletes all of the rules configured for the artifact.  After this is done, the global
		 * rules apply to the artifact again.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Delete groups/{groupId}/artifacts/{artifactId}/rules
		 * @return {void} 
		 */
		DeleteArtifactRules(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/rules', { observe: 'response', responseType: 'text' });
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
		 * Get groups/{groupId}/artifacts/{artifactId}/rules
		 * @return {Array<RuleType>} Returns the names of the rules configured for the artifact.
		 */
		ListArtifactRules(): Observable<Array<RuleType>> {
			return this.http.get<Array<RuleType>>(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/rules', {});
		}

		/**
		 * Create artifact rule
		 * Adds a rule to the list of rules that get applied to the artifact when adding new
		 * versions.  All configured rules must pass to successfully add a new artifact version.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * Rule (named in the request body) is unknown (HTTP error `400`)
		 * * A server error occurred (HTTP error `500`)
		 * Post groups/{groupId}/artifacts/{artifactId}/rules
		 * @return {void} 
		 */
		CreateArtifactRule(requestBody: Rule): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Delete groups/{groupId}/artifacts/{artifactId}/rules/{rule}
		 * @return {void} 
		 */
		DeleteArtifactRule(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/rules/{rule}', { observe: 'response', responseType: 'text' });
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
		 * Get groups/{groupId}/artifacts/{artifactId}/rules/{rule}
		 * @return {Rule} Information about a rule.
		 */
		GetArtifactRuleConfig(): Observable<Rule> {
			return this.http.get<Rule>(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/rules/{rule}', {});
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
		 * Put groups/{groupId}/artifacts/{artifactId}/rules/{rule}
		 * @return {Rule} Rule configuration was updated.
		 */
		UpdateArtifactRuleConfig(requestBody: Rule): Observable<Rule> {
			return this.http.put<Rule>(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/rules/{rule}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update artifact state
		 * Updates the state of the artifact.  For example, you can use this to mark the latest version of an artifact as `DEPRECATED`. The operation changes the state of the latest version of the artifact, even if this version is `DISABLED`. If multiple versions exist, only the most recent is changed.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Put groups/{groupId}/artifacts/{artifactId}/state
		 * @return {void} 
		 */
		UpdateArtifactState(requestBody: UpdateState): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/state', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List artifact versions
		 * Returns a list of all versions of the artifact.  The result set is paged.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get groups/{groupId}/artifacts/{artifactId}/versions
		 * @param {number} offset The number of versions to skip before starting to collect the result set.  Defaults to 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit The number of versions to return.  Defaults to 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {VersionSearchResults} List of all artifact versions.
		 */
		ListArtifactVersions(offset: number | null | undefined, limit: number | null | undefined): Observable<VersionSearchResults> {
			return this.http.get<VersionSearchResults>(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/versions?offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Delete artifact version
		 * Deletes a single version of the artifact. Parameters `groupId`, `artifactId` and the unique `version`
		 * are needed. If this is the only version of the artifact, this operation is the same as
		 * deleting the entire artifact.
		 * This feature is disabled by default and it's discouraged for normal usage. To enable it, set the `registry.rest.artifact.deletion.enabled` property to true. This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * No version with this `version` exists (HTTP error `404`)
		 * * Feature is disabled (HTTP error `405`)
		 * * A server error occurred (HTTP error `500`)
		 * Delete groups/{groupId}/artifacts/{artifactId}/versions/{version}
		 * @return {void} 
		 */
		DeleteArtifactVersion(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/versions/{version}', { observe: 'response', responseType: 'text' });
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
		 * Get groups/{groupId}/artifacts/{artifactId}/versions/{version}
		 * @param {boolean} dereference Allows the user to specify if the content should be dereferenced when being returned
		 * @return {void} The content of one version of one artifact.
		 */
		GetArtifactVersion(dereference: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/versions/{version}?dereference=' + dereference, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete artifact version metadata
		 * Deletes the user-editable metadata properties of the artifact version.  Any properties
		 * that are not user-editable are preserved.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * No version with this `version` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Delete groups/{groupId}/artifacts/{artifactId}/versions/{version}/meta
		 * @return {void} 
		 */
		DeleteArtifactVersionMetaData(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/versions/{version}/meta', { observe: 'response', responseType: 'text' });
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
		 * Get groups/{groupId}/artifacts/{artifactId}/versions/{version}/meta
		 * @return {VersionMetaData} The artifact version's metadata.
		 */
		GetArtifactVersionMetaData(): Observable<VersionMetaData> {
			return this.http.get<VersionMetaData>(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/versions/{version}/meta', {});
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
		 * Put groups/{groupId}/artifacts/{artifactId}/versions/{version}/meta
		 * @return {void} 
		 */
		UpdateArtifactVersionMetaData(requestBody: EditableMetaData): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/versions/{version}/meta', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Get groups/{groupId}/artifacts/{artifactId}/versions/{version}/references
		 * @return {Array<ArtifactReference>} List of all the artifact references for this artifact.
		 */
		GetArtifactVersionReferences(): Observable<Array<ArtifactReference>> {
			return this.http.get<Array<ArtifactReference>>(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/versions/{version}/references', {});
		}

		/**
		 * Update artifact version state
		 * Updates the state of a specific version of an artifact.  For example, you can use
		 * this operation to disable a specific version.
		 * This operation can fail for the following reasons:
		 * * No artifact with this `artifactId` exists (HTTP error `404`)
		 * * No version with this `version` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Put groups/{groupId}/artifacts/{artifactId}/versions/{version}/state
		 * @return {void} 
		 */
		UpdateArtifactVersionState(requestBody: UpdateState): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'groups/{groupId}/artifacts/{artifactId}/versions/{version}/state', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get artifact content by SHA-256 hash
		 * Gets the content for an artifact version in the registry using the
		 * SHA-256 hash of the content.  This content hash may be shared by multiple artifact
		 * versions in the case where the artifact versions have identical content.
		 * This operation may fail for one of the following reasons:
		 * * No content with this `contentHash` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get ids/contentHashes/{contentHash}/
		 * @return {void} The content of one version of one artifact.
		 */
		GetContentByHash(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ids/contentHashes/{contentHash}/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List artifact references by hash
		 * Returns a list containing all the artifact references using the artifact content hash.
		 * This operation may fail for one of the following reasons:
		 * * A server error occurred (HTTP error `500`)
		 * Get ids/contentHashes/{contentHash}/references
		 * @return {Array<ArtifactReference>} A list containing all the references for the artifact with the given content hash.
		 */
		ReferencesByContentHash(): Observable<Array<ArtifactReference>> {
			return this.http.get<Array<ArtifactReference>>(this.baseUri + 'ids/contentHashes/{contentHash}/references', {});
		}

		/**
		 * Get artifact content by ID
		 * Gets the content for an artifact version in the registry using the unique content
		 * identifier for that content.  This content ID may be shared by multiple artifact
		 * versions in the case where the artifact versions are identical.
		 * This operation may fail for one of the following reasons:
		 * * No content with this `contentId` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get ids/contentIds/{contentId}/
		 * @return {void} The content of one version of one artifact.
		 */
		GetContentById(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ids/contentIds/{contentId}/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List artifact references by content ID
		 * Returns a list containing all the artifact references using the artifact content ID.
		 * This operation may fail for one of the following reasons:
		 * * A server error occurred (HTTP error `500`)
		 * Get ids/contentIds/{contentId}/references
		 * @return {Array<ArtifactReference>} A list containing all the references for the artifact with the given content id.
		 */
		ReferencesByContentId(): Observable<Array<ArtifactReference>> {
			return this.http.get<Array<ArtifactReference>>(this.baseUri + 'ids/contentIds/{contentId}/references', {});
		}

		/**
		 * Get artifact by global ID
		 * Gets the content for an artifact version in the registry using its globally unique
		 * identifier.
		 * This operation may fail for one of the following reasons:
		 * * No artifact version with this `globalId` exists (HTTP error `404`)
		 * * A server error occurred (HTTP error `500`)
		 * Get ids/globalIds/{globalId}
		 * @param {boolean} dereference Allows the user to specify if the content should be dereferenced when being returned
		 * @return {void} The content of one version of one artifact.
		 */
		GetContentByGlobalId(dereference: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ids/globalIds/{globalId}?dereference=' + dereference, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List artifact references by global ID
		 * Returns a list containing all the artifact references using the artifact global ID.
		 * This operation may fail for one of the following reasons:
		 * * A server error occurred (HTTP error `500`)
		 * Get ids/globalIds/{globalId}/references
		 * @return {Array<ArtifactReference>} A list containing all the references for the artifact with the given global id.
		 */
		ReferencesByGlobalId(): Observable<Array<ArtifactReference>> {
			return this.http.get<Array<ArtifactReference>>(this.baseUri + 'ids/globalIds/{globalId}/references', {});
		}

		/**
		 * Search for artifacts
		 * Returns a paginated list of all artifacts that match the provided filter criteria.
		 * Get search/artifacts
		 * @param {string} name Filter by artifact name.
		 * @param {number} offset The number of artifacts to skip before starting to collect the result set.  Defaults to 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit The number of artifacts to return.  Defaults to 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {SortOrder} order Sort order, ascending (`asc`) or descending (`desc`).
		 * @param {SortBy} orderby The field to sort by.  Can be one of:
		 * * `name`
		 * * `createdOn`
		 * @param {Array<string>} labels Filter by label.  Include one or more label to only return artifacts containing all of the
		 * specified labels.
		 * @param {Array<string>} properties Filter by one or more name/value property.  Separate each name/value pair using a colon.  For
		 * example `properties=foo:bar` will return only artifacts with a custom property named `foo`
		 * and value `bar`.
		 * @param {string} description Filter by description.
		 * @param {string} group Filter by artifact group.
		 * @param {string} globalId Filter by globalId.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} contentId Filter by contentId.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ArtifactSearchResults} On a successful response, returns a result set of artifacts - one for each artifact
		 * in the registry that matches the criteria.
		 */
		SearchArtifacts(name: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, order: SortOrder | null | undefined, orderby: SortBy | null | undefined, labels: Array<string> | null | undefined, properties: Array<string> | null | undefined, description: string | null | undefined, group: string | null | undefined, globalId: string | null | undefined, contentId: string | null | undefined): Observable<ArtifactSearchResults> {
			return this.http.get<ArtifactSearchResults>(this.baseUri + 'search/artifacts?name=' + (name == null ? '' : encodeURIComponent(name)) + '&offset=' + offset + '&limit=' + limit + '&order=' + order + '&orderby=' + orderby + '&' + labels?.map(z => `labels=${encodeURIComponent(z)}`).join('&') + '&' + properties?.map(z => `properties=${encodeURIComponent(z)}`).join('&') + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&group=' + (group == null ? '' : encodeURIComponent(group)) + '&globalId=' + globalId + '&contentId=' + contentId, {});
		}

		/**
		 * Get system information
		 * This operation retrieves information about the running registry system, such as the version
		 * of the software and when it was built.
		 * Get system/info
		 * @return {SystemInfo} On success, returns the system information.
		 */
		GetSystemInfo(): Observable<SystemInfo> {
			return this.http.get<SystemInfo>(this.baseUri + 'system/info', {});
		}

		/**
		 * Get resource limits information
		 * This operation retrieves the list of limitations on used resources, that are applied on the current instance of Registry.
		 * Get system/limits
		 * @return {Limits} On success, returns resource limits
		 */
		GetResourceLimits(): Observable<Limits> {
			return this.http.get<Limits>(this.baseUri + 'system/limits', {});
		}

		/**
		 * Get current user
		 * Returns information about the currently authenticated user.
		 * Get users/me
		 * @return {UserInfo} Response when the endpoint is successfully invoked.
		 */
		GetCurrentUserInfo(): Observable<UserInfo> {
			return this.http.get<UserInfo>(this.baseUri + 'users/me', {});
		}
	}

	export enum CreateArtifactX_Registry_Hash_Algorithm { SHA256 = 'SHA256', MD5 = 'MD5' }

}

