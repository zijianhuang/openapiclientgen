import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The AssignmentPrincipal */
	export interface AssignmentPrincipal {

		/**
		 * The principal id being assigned to.
		 * Required
		 */
		principalId: string;

		/** Other metadata for the principal. */
		principalMetadata?: {[id: string]: string };

		/**
		 * The Type of the principal ID.
		 * Required
		 */
		principalType: string;
	}

	/** The AssignmentPrincipal */
	export interface AssignmentPrincipalFormProperties {

		/**
		 * The principal id being assigned to.
		 * Required
		 */
		principalId: FormControl<string | null | undefined>,

		/** Other metadata for the principal. */
		principalMetadata: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The Type of the principal ID.
		 * Required
		 */
		principalType: FormControl<string | null | undefined>,
	}
	export function CreateAssignmentPrincipalFormGroup() {
		return new FormGroup<AssignmentPrincipalFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principalMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			principalType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The authorization policy. */
	export interface AuthorizationPolicy {

		/**
		 * The permissions associated with the policy.
		 * Required
		 */
		permissions: Array<PermissionTypes>;

		/** Name of the policy. */
		policyName?: string | null;

		/** Primary key associated with the policy. */
		primaryKey?: string | null;

		/** Secondary key associated with the policy. */
		secondaryKey?: string | null;
	}

	/** The authorization policy. */
	export interface AuthorizationPolicyFormProperties {

		/** Name of the policy. */
		policyName: FormControl<string | null | undefined>,

		/** Primary key associated with the policy. */
		primaryKey: FormControl<string | null | undefined>,

		/** Secondary key associated with the policy. */
		secondaryKey: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationPolicyFormGroup() {
		return new FormGroup<AuthorizationPolicyFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined),
			primaryKey: new FormControl<string | null | undefined>(undefined),
			secondaryKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Supported permission types. */
	export enum PermissionTypes { Read = 0, Write = 1, Manage = 2 }


	/** The response of list authorization policy operation. */
	export interface AuthorizationPolicyListResult {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<AuthorizationPolicyResourceFormat>;
	}

	/** The response of list authorization policy operation. */
	export interface AuthorizationPolicyListResultFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationPolicyListResultFormGroup() {
		return new FormGroup<AuthorizationPolicyListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The authorization policy resource format. */
	export interface AuthorizationPolicyResourceFormat extends ProxyResource {

		/** The authorization policy. */
		properties?: AuthorizationPolicy;
	}

	/** The authorization policy resource format. */
	export interface AuthorizationPolicyResourceFormatFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateAuthorizationPolicyResourceFormatFormGroup() {
		return new FormGroup<AuthorizationPolicyResourceFormatFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Azure Blob connector properties. */
	export interface AzureBlobConnectorProperties {

		/**
		 * The connection KeyVault URL.
		 * Required
		 */
		connectionKeyVaultUrl: string;
	}

	/** The Azure Blob connector properties. */
	export interface AzureBlobConnectorPropertiesFormProperties {

		/**
		 * The connection KeyVault URL.
		 * Required
		 */
		connectionKeyVaultUrl: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobConnectorPropertiesFormGroup() {
		return new FormGroup<AzureBlobConnectorPropertiesFormProperties>({
			connectionKeyVaultUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Definition of canonical profile. */
	export interface CanonicalProfileDefinition {

		/** Canonical profile ID. */
		canonicalProfileId?: number | null;

		/** Properties of the canonical profile. */
		CanonicalProfileDefinitionProperties?: Array<CanonicalProfileDefinitionProperties>;
	}

	/** Definition of canonical profile. */
	export interface CanonicalProfileDefinitionFormProperties {

		/** Canonical profile ID. */
		canonicalProfileId: FormControl<number | null | undefined>,
	}
	export function CreateCanonicalProfileDefinitionFormGroup() {
		return new FormGroup<CanonicalProfileDefinitionFormProperties>({
			canonicalProfileId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CanonicalProfileDefinitionProperties {

		/** Profile name. */
		profileName?: string | null;

		/** Property name of profile. */
		profilePropertyName?: string | null;

		/** The rank. */
		rank?: number | null;

		/** Type of canonical property value. */
		type?: CanonicalProfileDefinitionPropertiesType | null;

		/** Value of the canonical property. */
		value?: string | null;
	}
	export interface CanonicalProfileDefinitionPropertiesFormProperties {

		/** Profile name. */
		profileName: FormControl<string | null | undefined>,

		/** Property name of profile. */
		profilePropertyName: FormControl<string | null | undefined>,

		/** The rank. */
		rank: FormControl<number | null | undefined>,

		/** Type of canonical property value. */
		type: FormControl<CanonicalProfileDefinitionPropertiesType | null | undefined>,

		/** Value of the canonical property. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCanonicalProfileDefinitionPropertiesFormGroup() {
		return new FormGroup<CanonicalProfileDefinitionPropertiesFormProperties>({
			profileName: new FormControl<string | null | undefined>(undefined),
			profilePropertyName: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<CanonicalProfileDefinitionPropertiesType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CanonicalProfileDefinitionPropertiesType { Numeric = 0, Categorical = 1, DerivedCategorical = 2, DerivedNumeric = 3 }


	/** Properties of connector. */
	export interface Connector {

		/** ID of the connector. */
		connectorId?: number | null;

		/** Name of the connector. */
		connectorName?: string | null;

		/**
		 * The connector properties.
		 * Required
		 */
		connectorProperties: {[id: string]: any };

		/**
		 * Type of connector.
		 * Required
		 */
		connectorType: ConnectorConnectorType;

		/** The created time. */
		created?: Date | null;

		/** Description of the connector. */
		description?: string | null;

		/** Display name of the connector. */
		displayName?: string | null;

		/** If this is an internal connector. */
		isInternal?: boolean | null;

		/** The last modified time. */
		lastModified?: Date | null;

		/** State of connector. */
		state?: ConnectorState | null;

		/** The hub name. */
		tenantId?: string | null;
	}

	/** Properties of connector. */
	export interface ConnectorFormProperties {

		/** ID of the connector. */
		connectorId: FormControl<number | null | undefined>,

		/** Name of the connector. */
		connectorName: FormControl<string | null | undefined>,

		/**
		 * The connector properties.
		 * Required
		 */
		connectorProperties: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Type of connector.
		 * Required
		 */
		connectorType: FormControl<ConnectorConnectorType | null | undefined>,

		/** The created time. */
		created: FormControl<Date | null | undefined>,

		/** Description of the connector. */
		description: FormControl<string | null | undefined>,

		/** Display name of the connector. */
		displayName: FormControl<string | null | undefined>,

		/** If this is an internal connector. */
		isInternal: FormControl<boolean | null | undefined>,

		/** The last modified time. */
		lastModified: FormControl<Date | null | undefined>,

		/** State of connector. */
		state: FormControl<ConnectorState | null | undefined>,

		/** The hub name. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateConnectorFormGroup() {
		return new FormGroup<ConnectorFormProperties>({
			connectorId: new FormControl<number | null | undefined>(undefined),
			connectorName: new FormControl<string | null | undefined>(undefined),
			connectorProperties: new FormControl<{[id: string]: any } | null | undefined>(undefined, [Validators.required]),
			connectorType: new FormControl<ConnectorConnectorType | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<ConnectorState | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectorConnectorType { None = 0, CRM = 1, AzureBlob = 2, Salesforce = 3, ExchangeOnline = 4, Outbound = 5 }

	export enum ConnectorState { Creating = 0, Created = 1, Ready = 2, Expiring = 3, Deleting = 4, Failed = 5 }


	/** The response of list connector operation. */
	export interface ConnectorListResult {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<ConnectorResourceFormat>;
	}

	/** The response of list connector operation. */
	export interface ConnectorListResultFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateConnectorListResultFormGroup() {
		return new FormGroup<ConnectorListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The connector resource format. */
	export interface ConnectorResourceFormat extends ProxyResource {

		/** Properties of connector. */
		properties?: Connector;
	}

	/** The connector resource format. */
	export interface ConnectorResourceFormatFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateConnectorResourceFormatFormGroup() {
		return new FormGroup<ConnectorResourceFormatFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The connector mapping definition. */
	export interface ConnectorMapping {

		/** The connector mapping name */
		connectorMappingName?: string | null;

		/** The connector name. */
		connectorName?: string | null;

		/** Type of connector. */
		connectorType?: ConnectorConnectorType | null;

		/** The created time. */
		created?: Date | null;

		/** The DataFormat ID. */
		dataFormatId?: string | null;

		/** The description of the connector mapping. */
		description?: string | null;

		/** Display name for the connector mapping. */
		displayName?: string | null;

		/**
		 * Defines which entity type the file should map to.
		 * Required
		 */
		entityType: ConnectorMappingEntityType;

		/**
		 * The mapping entity name.
		 * Required
		 */
		entityTypeName: string;

		/** The last modified time. */
		lastModified?: Date | null;

		/**
		 * The connector mapping properties.
		 * Required
		 */
		mappingProperties: ConnectorMappingProperties;

		/** The next run time based on customer's settings. */
		nextRunTime?: Date | null;

		/** The RunId. */
		runId?: string | null;

		/** State of connector mapping. */
		state?: ConnectorMappingState | null;

		/** The hub name. */
		tenantId?: string | null;
	}

	/** The connector mapping definition. */
	export interface ConnectorMappingFormProperties {

		/** The connector mapping name */
		connectorMappingName: FormControl<string | null | undefined>,

		/** The connector name. */
		connectorName: FormControl<string | null | undefined>,

		/** Type of connector. */
		connectorType: FormControl<ConnectorConnectorType | null | undefined>,

		/** The created time. */
		created: FormControl<Date | null | undefined>,

		/** The DataFormat ID. */
		dataFormatId: FormControl<string | null | undefined>,

		/** The description of the connector mapping. */
		description: FormControl<string | null | undefined>,

		/** Display name for the connector mapping. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Defines which entity type the file should map to.
		 * Required
		 */
		entityType: FormControl<ConnectorMappingEntityType | null | undefined>,

		/**
		 * The mapping entity name.
		 * Required
		 */
		entityTypeName: FormControl<string | null | undefined>,

		/** The last modified time. */
		lastModified: FormControl<Date | null | undefined>,

		/** The next run time based on customer's settings. */
		nextRunTime: FormControl<Date | null | undefined>,

		/** The RunId. */
		runId: FormControl<string | null | undefined>,

		/** State of connector mapping. */
		state: FormControl<ConnectorMappingState | null | undefined>,

		/** The hub name. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateConnectorMappingFormGroup() {
		return new FormGroup<ConnectorMappingFormProperties>({
			connectorMappingName: new FormControl<string | null | undefined>(undefined),
			connectorName: new FormControl<string | null | undefined>(undefined),
			connectorType: new FormControl<ConnectorConnectorType | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			dataFormatId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<ConnectorMappingEntityType | null | undefined>(undefined, [Validators.required]),
			entityTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			nextRunTime: new FormControl<Date | null | undefined>(undefined),
			runId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ConnectorMappingState | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectorMappingEntityType { None = 0, Profile = 1, Interaction = 2, Relationship = 3 }

	export enum ConnectorMappingState { Creating = 0, Created = 1, Failed = 2, Ready = 3, Running = 4, Stopped = 5, Expiring = 6 }


	/** Connector mapping property availability. */
	export interface ConnectorMappingAvailability {

		/** The frequency to update. */
		frequency?: ConnectorMappingAvailabilityFrequency | null;

		/**
		 * The interval of the given frequency to use.
		 * Required
		 */
		interval: number;
	}

	/** Connector mapping property availability. */
	export interface ConnectorMappingAvailabilityFormProperties {

		/** The frequency to update. */
		frequency: FormControl<ConnectorMappingAvailabilityFrequency | null | undefined>,

		/**
		 * The interval of the given frequency to use.
		 * Required
		 */
		interval: FormControl<number | null | undefined>,
	}
	export function CreateConnectorMappingAvailabilityFormGroup() {
		return new FormGroup<ConnectorMappingAvailabilityFormProperties>({
			frequency: new FormControl<ConnectorMappingAvailabilityFrequency | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConnectorMappingAvailabilityFrequency { Minute = 0, Hour = 1, Day = 2, Week = 3, Month = 4 }


	/** The complete operation. */
	export interface ConnectorMappingCompleteOperation {

		/** The type of completion operation. */
		completionOperationType?: ConnectorMappingCompleteOperationCompletionOperationType | null;

		/** The destination folder where files will be moved to once the import is done. */
		destinationFolder?: string | null;
	}

	/** The complete operation. */
	export interface ConnectorMappingCompleteOperationFormProperties {

		/** The type of completion operation. */
		completionOperationType: FormControl<ConnectorMappingCompleteOperationCompletionOperationType | null | undefined>,

		/** The destination folder where files will be moved to once the import is done. */
		destinationFolder: FormControl<string | null | undefined>,
	}
	export function CreateConnectorMappingCompleteOperationFormGroup() {
		return new FormGroup<ConnectorMappingCompleteOperationFormProperties>({
			completionOperationType: new FormControl<ConnectorMappingCompleteOperationCompletionOperationType | null | undefined>(undefined),
			destinationFolder: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectorMappingCompleteOperationCompletionOperationType { DoNothing = 0, DeleteFile = 1, MoveFile = 2 }


	/** The error management. */
	export interface ConnectorMappingErrorManagement {

		/** The error limit allowed while importing data. */
		errorLimit?: number | null;

		/**
		 * The type of error management to use for the mapping.
		 * Required
		 */
		errorManagementType: ConnectorMappingErrorManagementErrorManagementType;
	}

	/** The error management. */
	export interface ConnectorMappingErrorManagementFormProperties {

		/** The error limit allowed while importing data. */
		errorLimit: FormControl<number | null | undefined>,

		/**
		 * The type of error management to use for the mapping.
		 * Required
		 */
		errorManagementType: FormControl<ConnectorMappingErrorManagementErrorManagementType | null | undefined>,
	}
	export function CreateConnectorMappingErrorManagementFormGroup() {
		return new FormGroup<ConnectorMappingErrorManagementFormProperties>({
			errorLimit: new FormControl<number | null | undefined>(undefined),
			errorManagementType: new FormControl<ConnectorMappingErrorManagementErrorManagementType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConnectorMappingErrorManagementErrorManagementType { RejectAndContinue = 0, StopImport = 1, RejectUntilLimit = 2 }


	/** Connector mapping property format. */
	export interface ConnectorMappingFormat {

		/** The oData language. */
		acceptLanguage?: string | null;

		/** Character separating array elements. */
		arraySeparator?: string | null;

		/** The character that signifies a break between columns. */
		columnDelimiter?: string | null;

		/**
		 * The type mapping format.
		 * Required
		 */
		formatType: ConnectorMappingFormatFormatType;

		/** Quote character, used to indicate enquoted fields. */
		quoteCharacter?: string | null;

		/** Escape character for quotes, can be the same as the quoteCharacter. */
		quoteEscapeCharacter?: string | null;
	}

	/** Connector mapping property format. */
	export interface ConnectorMappingFormatFormProperties {

		/** The oData language. */
		acceptLanguage: FormControl<string | null | undefined>,

		/** Character separating array elements. */
		arraySeparator: FormControl<string | null | undefined>,

		/** The character that signifies a break between columns. */
		columnDelimiter: FormControl<string | null | undefined>,

		/**
		 * The type mapping format.
		 * Required
		 */
		formatType: FormControl<ConnectorMappingFormatFormatType | null | undefined>,

		/** Quote character, used to indicate enquoted fields. */
		quoteCharacter: FormControl<string | null | undefined>,

		/** Escape character for quotes, can be the same as the quoteCharacter. */
		quoteEscapeCharacter: FormControl<string | null | undefined>,
	}
	export function CreateConnectorMappingFormatFormGroup() {
		return new FormGroup<ConnectorMappingFormatFormProperties>({
			acceptLanguage: new FormControl<string | null | undefined>(undefined),
			arraySeparator: new FormControl<string | null | undefined>(undefined),
			columnDelimiter: new FormControl<string | null | undefined>(undefined),
			formatType: new FormControl<ConnectorMappingFormatFormatType | null | undefined>(undefined, [Validators.required]),
			quoteCharacter: new FormControl<string | null | undefined>(undefined),
			quoteEscapeCharacter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectorMappingFormatFormatType { TextFormat = 0 }


	/** The response of list connector mapping operation. */
	export interface ConnectorMappingListResult {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<ConnectorMappingResourceFormat>;
	}

	/** The response of list connector mapping operation. */
	export interface ConnectorMappingListResultFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateConnectorMappingListResultFormGroup() {
		return new FormGroup<ConnectorMappingListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The connector mapping resource format. */
	export interface ConnectorMappingResourceFormat extends ProxyResource {

		/** The connector mapping definition. */
		properties?: ConnectorMapping;
	}

	/** The connector mapping resource format. */
	export interface ConnectorMappingResourceFormatFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateConnectorMappingResourceFormatFormGroup() {
		return new FormGroup<ConnectorMappingResourceFormatFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The connector mapping properties. */
	export interface ConnectorMappingProperties {

		/**
		 * Connector mapping property availability.
		 * Required
		 */
		availability: ConnectorMappingAvailability;

		/**
		 * The complete operation.
		 * Required
		 */
		completeOperation: ConnectorMappingCompleteOperation;

		/**
		 * The error management.
		 * Required
		 */
		errorManagement: ConnectorMappingErrorManagement;

		/** The file filter for the mapping. */
		fileFilter?: string | null;

		/** The folder path for the mapping. */
		folderPath?: string | null;

		/**
		 * Connector mapping property format.
		 * Required
		 */
		format: ConnectorMappingFormat;

		/** If the file contains a header or not. */
		hasHeader?: boolean | null;

		/**
		 * Ingestion mapping information at property level.
		 * Required
		 */
		structure: Array<ConnectorMappingStructure>;
	}

	/** The connector mapping properties. */
	export interface ConnectorMappingPropertiesFormProperties {

		/** The file filter for the mapping. */
		fileFilter: FormControl<string | null | undefined>,

		/** The folder path for the mapping. */
		folderPath: FormControl<string | null | undefined>,

		/** If the file contains a header or not. */
		hasHeader: FormControl<boolean | null | undefined>,
	}
	export function CreateConnectorMappingPropertiesFormGroup() {
		return new FormGroup<ConnectorMappingPropertiesFormProperties>({
			fileFilter: new FormControl<string | null | undefined>(undefined),
			folderPath: new FormControl<string | null | undefined>(undefined),
			hasHeader: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Connector mapping property structure. */
	export interface ConnectorMappingStructure {

		/**
		 * The column name of the import file.
		 * Required
		 */
		columnName: string;

		/** Custom format specifier for input parsing. */
		customFormatSpecifier?: string | null;

		/** Indicates if the column is encrypted. */
		isEncrypted?: boolean | null;

		/**
		 * The property name of the mapping entity.
		 * Required
		 */
		propertyName: string;
	}

	/** Connector mapping property structure. */
	export interface ConnectorMappingStructureFormProperties {

		/**
		 * The column name of the import file.
		 * Required
		 */
		columnName: FormControl<string | null | undefined>,

		/** Custom format specifier for input parsing. */
		customFormatSpecifier: FormControl<string | null | undefined>,

		/** Indicates if the column is encrypted. */
		isEncrypted: FormControl<boolean | null | undefined>,

		/**
		 * The property name of the mapping entity.
		 * Required
		 */
		propertyName: FormControl<string | null | undefined>,
	}
	export function CreateConnectorMappingStructureFormGroup() {
		return new FormGroup<ConnectorMappingStructureFormProperties>({
			columnName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			customFormatSpecifier: new FormControl<string | null | undefined>(undefined),
			isEncrypted: new FormControl<boolean | null | undefined>(undefined),
			propertyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Type of connector. */
	export enum ConnectorType { None = 0, CRM = 1, AzureBlob = 2, Salesforce = 3, ExchangeOnline = 4, Outbound = 5 }


	/** The CRM connector entities. */
	export interface CrmConnectorEntities {

		/** The display name. */
		displayName?: string | null;

		/** Indicating whether this is profile. */
		isProfile?: boolean | null;

		/**
		 * The logical name.
		 * Required
		 */
		logicalName: string;
	}

	/** The CRM connector entities. */
	export interface CrmConnectorEntitiesFormProperties {

		/** The display name. */
		displayName: FormControl<string | null | undefined>,

		/** Indicating whether this is profile. */
		isProfile: FormControl<boolean | null | undefined>,

		/**
		 * The logical name.
		 * Required
		 */
		logicalName: FormControl<string | null | undefined>,
	}
	export function CreateCrmConnectorEntitiesFormGroup() {
		return new FormGroup<CrmConnectorEntitiesFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			isProfile: new FormControl<boolean | null | undefined>(undefined),
			logicalName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The CRM connector properties. */
	export interface CrmConnectorProperties {

		/** The access token. */
		accessToken?: string | null;

		/** The connection string. */
		connectionString?: string | null;

		/**
		 * The entities like account, contact, opportunity.
		 * Required
		 */
		entities: Array<CrmConnectorEntities>;

		/**
		 * The organization ID.
		 * Required
		 */
		organizationId: string;

		/**
		 * The organization URL.
		 * Required
		 */
		organizationUrl: string;
	}

	/** The CRM connector properties. */
	export interface CrmConnectorPropertiesFormProperties {

		/** The access token. */
		accessToken: FormControl<string | null | undefined>,

		/** The connection string. */
		connectionString: FormControl<string | null | undefined>,

		/**
		 * The organization ID.
		 * Required
		 */
		organizationId: FormControl<string | null | undefined>,

		/**
		 * The organization URL.
		 * Required
		 */
		organizationUrl: FormControl<string | null | undefined>,
	}
	export function CreateCrmConnectorPropertiesFormGroup() {
		return new FormGroup<CrmConnectorPropertiesFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			connectionString: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			organizationUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Data Source is a way for us to know the source of instances. A single type can have data coming in from multiple places. In activities we use this to determine precedence rules. */
	export interface DataSource {

		/** The data source reference id. */
		dataSourceReferenceId?: string | null;

		/** The data source type. */
		dataSourceType?: DataSourceDataSourceType | null;

		/** The data source ID. */
		id?: number | null;

		/** The data source name */
		name?: string | null;

		/** The data source status. */
		status?: DataSourceStatus | null;
	}

	/** Data Source is a way for us to know the source of instances. A single type can have data coming in from multiple places. In activities we use this to determine precedence rules. */
	export interface DataSourceFormProperties {

		/** The data source reference id. */
		dataSourceReferenceId: FormControl<string | null | undefined>,

		/** The data source type. */
		dataSourceType: FormControl<DataSourceDataSourceType | null | undefined>,

		/** The data source ID. */
		id: FormControl<number | null | undefined>,

		/** The data source name */
		name: FormControl<string | null | undefined>,

		/** The data source status. */
		status: FormControl<DataSourceStatus | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			dataSourceReferenceId: new FormControl<string | null | undefined>(undefined),
			dataSourceType: new FormControl<DataSourceDataSourceType | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DataSourceStatus | null | undefined>(undefined),
		});

	}

	export enum DataSourceDataSourceType { Connector = 0, LinkInteraction = 1, SystemDefault = 2 }

	export enum DataSourceStatus { None = 0, Active = 1, Deleted = 2 }


	/** The data source precedence is a way to know the precedence of each data source. */
	export interface DataSourcePrecedence {

		/** Data Source is a way for us to know the source of instances. A single type can have data coming in from multiple places. In activities we use this to determine precedence rules. */
		dataSource?: DataSource;

		/** the precedence value. */
		precedence?: number | null;
	}

	/** The data source precedence is a way to know the precedence of each data source. */
	export interface DataSourcePrecedenceFormProperties {

		/** the precedence value. */
		precedence: FormControl<number | null | undefined>,
	}
	export function CreateDataSourcePrecedenceFormGroup() {
		return new FormGroup<DataSourcePrecedenceFormProperties>({
			precedence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The enriching KPI definition. */
	export interface EnrichingKpi {
	}

	/** The enriching KPI definition. */
	export interface EnrichingKpiFormProperties {
	}
	export function CreateEnrichingKpiFormGroup() {
		return new FormGroup<EnrichingKpiFormProperties>({
		});

	}


	/** Describes an entity. */
	export interface EntityTypeDefinition extends MetadataDefinitionBase {

		/** The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object. */
		apiEntitySetName?: string | null;

		/** Type of entity. */
		entityType?: ConnectorMappingEntityType | null;

		/** The properties of the Profile. */
		fields?: Array<PropertyDefinition>;

		/** The instance count. */
		instancesCount?: number | null;

		/** The last changed time for the type definition. */
		lastChangedUtc?: Date | null;

		/** Provisioning state. */
		provisioningState?: EntityTypeDefinitionProvisioningState | null;

		/** The schema org link. This helps ACI identify and suggest semantic models. */
		schemaItemTypeLink?: string | null;

		/** The hub name. */
		tenantId?: string | null;

		/** The timestamp property name. Represents the time when the interaction or profile update happened. */
		timestampFieldName?: string | null;

		/** The name of the entity. */
		typeName?: string | null;
	}

	/** Describes an entity. */
	export interface EntityTypeDefinitionFormProperties extends MetadataDefinitionBaseFormProperties {

		/** The api entity set name. This becomes the odata entity set name for the entity Type being referred in this object. */
		apiEntitySetName: FormControl<string | null | undefined>,

		/** Type of entity. */
		entityType: FormControl<ConnectorMappingEntityType | null | undefined>,

		/** The instance count. */
		instancesCount: FormControl<number | null | undefined>,

		/** The last changed time for the type definition. */
		lastChangedUtc: FormControl<Date | null | undefined>,

		/** Provisioning state. */
		provisioningState: FormControl<EntityTypeDefinitionProvisioningState | null | undefined>,

		/** The schema org link. This helps ACI identify and suggest semantic models. */
		schemaItemTypeLink: FormControl<string | null | undefined>,

		/** The hub name. */
		tenantId: FormControl<string | null | undefined>,

		/** The timestamp property name. Represents the time when the interaction or profile update happened. */
		timestampFieldName: FormControl<string | null | undefined>,

		/** The name of the entity. */
		typeName: FormControl<string | null | undefined>,
	}
	export function CreateEntityTypeDefinitionFormGroup() {
		return new FormGroup<EntityTypeDefinitionFormProperties>({
			attributes: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			description: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayName: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			largeImage: new FormControl<string | null | undefined>(undefined),
			localizedAttributes: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			mediumImage: new FormControl<string | null | undefined>(undefined),
			smallImage: new FormControl<string | null | undefined>(undefined),
			apiEntitySetName: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<ConnectorMappingEntityType | null | undefined>(undefined),
			instancesCount: new FormControl<number | null | undefined>(undefined),
			lastChangedUtc: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<EntityTypeDefinitionProvisioningState | null | undefined>(undefined),
			schemaItemTypeLink: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			timestampFieldName: new FormControl<string | null | undefined>(undefined),
			typeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Property definition. */
	export interface PropertyDefinition {

		/** Array value separator for properties with isArray set. */
		arrayValueSeparator?: string | null;

		/** This is specific to interactions modeled as activities. Data sources are used to determine where data is stored and also in precedence rules. */
		dataSourcePrecedenceRules?: Array<DataSourcePrecedence>;

		/** Describes valid values for an enum property. */
		enumValidValues?: Array<ProfileEnumValidValuesFormat>;

		/**
		 * Name of the property.
		 * Required
		 */
		fieldName: string;

		/**
		 * Type of the property.
		 * Required
		 */
		fieldType: string;

		/** Indicates if the property is actually an array of the fieldType above on the data api. */
		isArray?: boolean | null;

		/** Whether property is available in graph or not. */
		isAvailableInGraph?: boolean | null;

		/** Indicates if the property is an enum. */
		isEnum?: boolean | null;

		/** Indicates if the property is an flag enum. */
		isFlagEnum?: boolean | null;

		/** Whether the property is an Image. */
		isImage?: boolean | null;

		/** Whether the property is a localized string. */
		isLocalizedString?: boolean | null;

		/** Whether the property is a name or a part of name. */
		isName?: boolean | null;

		/** Whether property value is required on instances, IsRequired field only for Interaction. Profile Instance will not check for required field. */
		isRequired?: boolean | null;

		/** Max length of string. Used only if type is string. */
		maxLength?: number | null;

		/** The ID associated with the property. */
		propertyId?: string | null;

		/** URL encoded schema.org item prop link for the property. */
		schemaItemPropLink?: string | null;
	}

	/** Property definition. */
	export interface PropertyDefinitionFormProperties {

		/** Array value separator for properties with isArray set. */
		arrayValueSeparator: FormControl<string | null | undefined>,

		/**
		 * Name of the property.
		 * Required
		 */
		fieldName: FormControl<string | null | undefined>,

		/**
		 * Type of the property.
		 * Required
		 */
		fieldType: FormControl<string | null | undefined>,

		/** Indicates if the property is actually an array of the fieldType above on the data api. */
		isArray: FormControl<boolean | null | undefined>,

		/** Whether property is available in graph or not. */
		isAvailableInGraph: FormControl<boolean | null | undefined>,

		/** Indicates if the property is an enum. */
		isEnum: FormControl<boolean | null | undefined>,

		/** Indicates if the property is an flag enum. */
		isFlagEnum: FormControl<boolean | null | undefined>,

		/** Whether the property is an Image. */
		isImage: FormControl<boolean | null | undefined>,

		/** Whether the property is a localized string. */
		isLocalizedString: FormControl<boolean | null | undefined>,

		/** Whether the property is a name or a part of name. */
		isName: FormControl<boolean | null | undefined>,

		/** Whether property value is required on instances, IsRequired field only for Interaction. Profile Instance will not check for required field. */
		isRequired: FormControl<boolean | null | undefined>,

		/** Max length of string. Used only if type is string. */
		maxLength: FormControl<number | null | undefined>,

		/** The ID associated with the property. */
		propertyId: FormControl<string | null | undefined>,

		/** URL encoded schema.org item prop link for the property. */
		schemaItemPropLink: FormControl<string | null | undefined>,
	}
	export function CreatePropertyDefinitionFormGroup() {
		return new FormGroup<PropertyDefinitionFormProperties>({
			arrayValueSeparator: new FormControl<string | null | undefined>(undefined),
			fieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fieldType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isArray: new FormControl<boolean | null | undefined>(undefined),
			isAvailableInGraph: new FormControl<boolean | null | undefined>(undefined),
			isEnum: new FormControl<boolean | null | undefined>(undefined),
			isFlagEnum: new FormControl<boolean | null | undefined>(undefined),
			isImage: new FormControl<boolean | null | undefined>(undefined),
			isLocalizedString: new FormControl<boolean | null | undefined>(undefined),
			isName: new FormControl<boolean | null | undefined>(undefined),
			isRequired: new FormControl<boolean | null | undefined>(undefined),
			maxLength: new FormControl<number | null | undefined>(undefined),
			propertyId: new FormControl<string | null | undefined>(undefined),
			schemaItemPropLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Valid enum values in case of an enum property. */
	export interface ProfileEnumValidValuesFormat {

		/** Localized names of the enum member. */
		localizedValueNames?: {[id: string]: string };

		/** The integer value of the enum member. */
		value?: number | null;
	}

	/** Valid enum values in case of an enum property. */
	export interface ProfileEnumValidValuesFormatFormProperties {

		/** Localized names of the enum member. */
		localizedValueNames: FormControl<{[id: string]: string } | null | undefined>,

		/** The integer value of the enum member. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProfileEnumValidValuesFormatFormGroup() {
		return new FormGroup<ProfileEnumValidValuesFormatFormProperties>({
			localizedValueNames: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EntityTypeDefinitionProvisioningState { Provisioning = 0, Succeeded = 1, Expiring = 2, Deleting = 3, HumanIntervention = 4, Failed = 5 }


	/** Input type for getting image upload url. */
	export interface GetImageUploadUrlInput {

		/** Type of entity. Can be Profile or Interaction. */
		entityType?: string | null;

		/** Name of the entity type. */
		entityTypeName?: string | null;

		/** Relative path of the image. */
		relativePath?: string | null;
	}

	/** Input type for getting image upload url. */
	export interface GetImageUploadUrlInputFormProperties {

		/** Type of entity. Can be Profile or Interaction. */
		entityType: FormControl<string | null | undefined>,

		/** Name of the entity type. */
		entityTypeName: FormControl<string | null | undefined>,

		/** Relative path of the image. */
		relativePath: FormControl<string | null | undefined>,
	}
	export function CreateGetImageUploadUrlInputFormGroup() {
		return new FormGroup<GetImageUploadUrlInputFormProperties>({
			entityType: new FormControl<string | null | undefined>(undefined),
			entityTypeName: new FormControl<string | null | undefined>(undefined),
			relativePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Hub resource. */
	export interface Hub extends Resource {

		/** Properties of hub. */
		properties?: HubPropertiesFormat;
	}

	/** Hub resource. */
	export interface HubFormProperties extends ResourceFormProperties {
	}
	export function CreateHubFormGroup() {
		return new FormGroup<HubFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Hub billing info. */
	export interface HubBillingInfoFormat {

		/**
		 * The maximum number of units can be used.  One unit is 10,000 Profiles and 100,000 Interactions.
		 * Minimum: 1
		 * Maximum: 10
		 */
		maxUnits?: number | null;

		/**
		 * The minimum number of units will be billed. One unit is 10,000 Profiles and 100,000 Interactions.
		 * Minimum: 1
		 * Maximum: 10
		 */
		minUnits?: number | null;

		/** The sku name. */
		skuName?: string | null;
	}

	/** Hub billing info. */
	export interface HubBillingInfoFormatFormProperties {

		/**
		 * The maximum number of units can be used.  One unit is 10,000 Profiles and 100,000 Interactions.
		 * Minimum: 1
		 * Maximum: 10
		 */
		maxUnits: FormControl<number | null | undefined>,

		/**
		 * The minimum number of units will be billed. One unit is 10,000 Profiles and 100,000 Interactions.
		 * Minimum: 1
		 * Maximum: 10
		 */
		minUnits: FormControl<number | null | undefined>,

		/** The sku name. */
		skuName: FormControl<string | null | undefined>,
	}
	export function CreateHubBillingInfoFormatFormGroup() {
		return new FormGroup<HubBillingInfoFormatFormProperties>({
			maxUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			minUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			skuName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of list hub operation. */
	export interface HubListResult {

		/** Link for next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<Hub>;
	}

	/** Response of list hub operation. */
	export interface HubListResultFormProperties {

		/** Link for next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateHubListResultFormGroup() {
		return new FormGroup<HubListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of hub. */
	export interface HubPropertiesFormat {

		/** API endpoint URL of the hub. */
		apiEndpoint?: string | null;

		/** Hub billing info. */
		hubBillingInfo?: HubBillingInfoFormat;

		/** Provisioning state of the hub. */
		provisioningState?: string | null;

		/** The bit flags for enabled hub features. Bit 0 is set to 1 indicates graph is enabled, or disabled if set to 0. Bit 1 is set to 1 indicates the hub is disabled, or enabled if set to 0. */
		tenantFeatures?: number | null;

		/** Web endpoint URL of the hub. */
		webEndpoint?: string | null;
	}

	/** Properties of hub. */
	export interface HubPropertiesFormatFormProperties {

		/** API endpoint URL of the hub. */
		apiEndpoint: FormControl<string | null | undefined>,

		/** Provisioning state of the hub. */
		provisioningState: FormControl<string | null | undefined>,

		/** The bit flags for enabled hub features. Bit 0 is set to 1 indicates graph is enabled, or disabled if set to 0. Bit 1 is set to 1 indicates the hub is disabled, or enabled if set to 0. */
		tenantFeatures: FormControl<number | null | undefined>,

		/** Web endpoint URL of the hub. */
		webEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateHubPropertiesFormatFormGroup() {
		return new FormGroup<HubPropertiesFormatFormProperties>({
			apiEndpoint: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			tenantFeatures: new FormControl<number | null | undefined>(undefined),
			webEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The image definition. */
	export interface ImageDefinition {

		/** Content URL for the image blob. */
		contentUrl?: string | null;

		/** Whether image exists already. */
		imageExists?: boolean | null;

		/** Relative path of the image. */
		relativePath?: string | null;
	}

	/** The image definition. */
	export interface ImageDefinitionFormProperties {

		/** Content URL for the image blob. */
		contentUrl: FormControl<string | null | undefined>,

		/** Whether image exists already. */
		imageExists: FormControl<boolean | null | undefined>,

		/** Relative path of the image. */
		relativePath: FormControl<string | null | undefined>,
	}
	export function CreateImageDefinitionFormGroup() {
		return new FormGroup<ImageDefinitionFormProperties>({
			contentUrl: new FormControl<string | null | undefined>(undefined),
			imageExists: new FormControl<boolean | null | undefined>(undefined),
			relativePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of list interaction operation. */
	export interface InteractionListResult {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<InteractionResourceFormat>;
	}

	/** The response of list interaction operation. */
	export interface InteractionListResultFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateInteractionListResultFormGroup() {
		return new FormGroup<InteractionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The interaction resource format. */
	export interface InteractionResourceFormat extends ProxyResource {

		/** The Interaction Type Definition */
		properties?: InteractionTypeDefinition;
	}

	/** The interaction resource format. */
	export interface InteractionResourceFormatFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateInteractionResourceFormatFormGroup() {
		return new FormGroup<InteractionResourceFormatFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Interaction Type Definition */
	export interface InteractionTypeDefinition extends EntityTypeDefinition {

		/** This is specific to interactions modeled as activities. Data sources are used to determine where data is stored and also in precedence rules. */
		dataSourcePrecedenceRules?: Array<DataSourcePrecedence>;

		/** Data Source is a way for us to know the source of instances. A single type can have data coming in from multiple places. In activities we use this to determine precedence rules. */
		defaultDataSource?: DataSource;

		/** The id property names. Properties which uniquely identify an interaction instance. */
		idPropertyNames?: Array<string>;

		/** An interaction can be tagged as an activity only during create. This enables the interaction to be editable and can enable merging of properties from multiple data sources based on precedence, which is defined at a link level. */
		isActivity?: boolean | null;

		/** Profiles that participated in the interaction. */
		participantProfiles?: Array<Participant>;

		/** The primary participant property name for an interaction ,This is used to logically represent the agent of the interaction, Specify the participant name here from ParticipantName. */
		primaryParticipantProfilePropertyName?: string | null;
	}

	/** The Interaction Type Definition */
	export interface InteractionTypeDefinitionFormProperties extends EntityTypeDefinitionFormProperties {

		/** An interaction can be tagged as an activity only during create. This enables the interaction to be editable and can enable merging of properties from multiple data sources based on precedence, which is defined at a link level. */
		isActivity: FormControl<boolean | null | undefined>,

		/** The primary participant property name for an interaction ,This is used to logically represent the agent of the interaction, Specify the participant name here from ParticipantName. */
		primaryParticipantProfilePropertyName: FormControl<string | null | undefined>,
	}
	export function CreateInteractionTypeDefinitionFormGroup() {
		return new FormGroup<InteractionTypeDefinitionFormProperties>({
			attributes: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			description: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayName: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			largeImage: new FormControl<string | null | undefined>(undefined),
			localizedAttributes: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			mediumImage: new FormControl<string | null | undefined>(undefined),
			smallImage: new FormControl<string | null | undefined>(undefined),
			apiEntitySetName: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<ConnectorMappingEntityType | null | undefined>(undefined),
			instancesCount: new FormControl<number | null | undefined>(undefined),
			lastChangedUtc: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<EntityTypeDefinitionProvisioningState | null | undefined>(undefined),
			schemaItemTypeLink: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			timestampFieldName: new FormControl<string | null | undefined>(undefined),
			typeName: new FormControl<string | null | undefined>(undefined),
			isActivity: new FormControl<boolean | null | undefined>(undefined),
			primaryParticipantProfilePropertyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a profile type participating in an interaction. */
	export interface Participant {

		/** Localized descriptions. */
		description?: {[id: string]: string };

		/** Localized display name. */
		displayName?: {[id: string]: string };

		/**
		 * Participant name.
		 * Required
		 */
		participantName: string;

		/**
		 * The property references.
		 * Required
		 */
		participantPropertyReferences: Array<ParticipantPropertyReference>;

		/**
		 * Profile type name.
		 * Required
		 */
		profileTypeName: string;

		/** The role that the participant is playing in the interaction. */
		role?: string | null;
	}

	/** Describes a profile type participating in an interaction. */
	export interface ParticipantFormProperties {

		/** Localized descriptions. */
		description: FormControl<{[id: string]: string } | null | undefined>,

		/** Localized display name. */
		displayName: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Participant name.
		 * Required
		 */
		participantName: FormControl<string | null | undefined>,

		/**
		 * Profile type name.
		 * Required
		 */
		profileTypeName: FormControl<string | null | undefined>,

		/** The role that the participant is playing in the interaction. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateParticipantFormGroup() {
		return new FormGroup<ParticipantFormProperties>({
			description: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayName: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			participantName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			profileTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The participant property reference. */
	export interface ParticipantPropertyReference {

		/**
		 * The source property that maps to the target property.
		 * Required
		 */
		sourcePropertyName: string;

		/**
		 * The target property that maps to the source property.
		 * Required
		 */
		targetPropertyName: string;
	}

	/** The participant property reference. */
	export interface ParticipantPropertyReferenceFormProperties {

		/**
		 * The source property that maps to the target property.
		 * Required
		 */
		sourcePropertyName: FormControl<string | null | undefined>,

		/**
		 * The target property that maps to the source property.
		 * Required
		 */
		targetPropertyName: FormControl<string | null | undefined>,
	}
	export function CreateParticipantPropertyReferenceFormGroup() {
		return new FormGroup<ParticipantPropertyReferenceFormProperties>({
			sourcePropertyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetPropertyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The KPI alias. */
	export interface KpiAlias {

		/**
		 * KPI alias name.
		 * Required
		 */
		aliasName: string;

		/**
		 * The expression.
		 * Required
		 */
		expression: string;
	}

	/** The KPI alias. */
	export interface KpiAliasFormProperties {

		/**
		 * KPI alias name.
		 * Required
		 */
		aliasName: FormControl<string | null | undefined>,

		/**
		 * The expression.
		 * Required
		 */
		expression: FormControl<string | null | undefined>,
	}
	export function CreateKpiAliasFormGroup() {
		return new FormGroup<KpiAliasFormProperties>({
			aliasName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the KPI Threshold limits. */
	export interface KpiDefinition {

		/** The aliases. */
		aliases?: Array<KpiAlias>;

		/**
		 * The calculation window.
		 * Required
		 */
		calculationWindow: KpiDefinitionCalculationWindow;

		/** Name of calculation window field. */
		calculationWindowFieldName?: string | null;

		/** Localized description for the KPI. */
		description?: {[id: string]: string };

		/** Localized display name for the KPI. */
		displayName?: {[id: string]: string };

		/**
		 * The mapping entity type.
		 * Required
		 */
		entityType: ConnectorMappingEntityType;

		/**
		 * The mapping entity name.
		 * Required
		 */
		entityTypeName: string;

		/**
		 * The computation expression for the KPI.
		 * Required
		 */
		expression: string;

		/** The KPI extracts. */
		extracts?: Array<KpiExtract>;

		/** The filter expression for the KPI. */
		filter?: string | null;

		/**
		 * The computation function for the KPI.
		 * Required
		 */
		function: KpiDefinitionFunction;

		/** the group by properties for the KPI. */
		groupBy?: Array<string>;

		/** The KPI GroupByMetadata. */
		groupByMetadata?: Array<KpiGroupByMetadata>;

		/** The KPI name. */
		kpiName?: string | null;

		/** The participant profiles. */
		participantProfilesMetadata?: Array<KpiParticipantProfilesMetadata>;

		/** Provisioning state. */
		provisioningState?: EntityTypeDefinitionProvisioningState | null;

		/** The hub name. */
		tenantId?: string | null;

		/** Defines the KPI Threshold limits. */
		thresHolds?: KpiThresholds;

		/** The unit of measurement for the KPI. */
		unit?: string | null;
	}

	/** Defines the KPI Threshold limits. */
	export interface KpiDefinitionFormProperties {

		/**
		 * The calculation window.
		 * Required
		 */
		calculationWindow: FormControl<KpiDefinitionCalculationWindow | null | undefined>,

		/** Name of calculation window field. */
		calculationWindowFieldName: FormControl<string | null | undefined>,

		/** Localized description for the KPI. */
		description: FormControl<{[id: string]: string } | null | undefined>,

		/** Localized display name for the KPI. */
		displayName: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The mapping entity type.
		 * Required
		 */
		entityType: FormControl<ConnectorMappingEntityType | null | undefined>,

		/**
		 * The mapping entity name.
		 * Required
		 */
		entityTypeName: FormControl<string | null | undefined>,

		/**
		 * The computation expression for the KPI.
		 * Required
		 */
		expression: FormControl<string | null | undefined>,

		/** The filter expression for the KPI. */
		filter: FormControl<string | null | undefined>,

		/**
		 * The computation function for the KPI.
		 * Required
		 */
		function: FormControl<KpiDefinitionFunction | null | undefined>,

		/** The KPI name. */
		kpiName: FormControl<string | null | undefined>,

		/** Provisioning state. */
		provisioningState: FormControl<EntityTypeDefinitionProvisioningState | null | undefined>,

		/** The hub name. */
		tenantId: FormControl<string | null | undefined>,

		/** The unit of measurement for the KPI. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateKpiDefinitionFormGroup() {
		return new FormGroup<KpiDefinitionFormProperties>({
			calculationWindow: new FormControl<KpiDefinitionCalculationWindow | null | undefined>(undefined, [Validators.required]),
			calculationWindowFieldName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayName: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			entityType: new FormControl<ConnectorMappingEntityType | null | undefined>(undefined, [Validators.required]),
			entityTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filter: new FormControl<string | null | undefined>(undefined),
			function: new FormControl<KpiDefinitionFunction | null | undefined>(undefined, [Validators.required]),
			kpiName: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<EntityTypeDefinitionProvisioningState | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum KpiDefinitionCalculationWindow { Lifetime = 0, Hour = 1, Day = 2, Week = 3, Month = 4 }


	/** The KPI extract. */
	export interface KpiExtract {

		/**
		 * The expression.
		 * Required
		 */
		expression: string;

		/**
		 * KPI extract name.
		 * Required
		 */
		extractName: string;
	}

	/** The KPI extract. */
	export interface KpiExtractFormProperties {

		/**
		 * The expression.
		 * Required
		 */
		expression: FormControl<string | null | undefined>,

		/**
		 * KPI extract name.
		 * Required
		 */
		extractName: FormControl<string | null | undefined>,
	}
	export function CreateKpiExtractFormGroup() {
		return new FormGroup<KpiExtractFormProperties>({
			expression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			extractName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum KpiDefinitionFunction { Sum = 0, Avg = 1, Min = 2, Max = 3, Last = 4, Count = 5, None = 6, CountDistinct = 7 }


	/** The KPI GroupBy field metadata. */
	export interface KpiGroupByMetadata {

		/** The display name. */
		displayName?: {[id: string]: string };

		/** The name of the field. */
		fieldName?: string | null;

		/** The type of the field. */
		fieldType?: string | null;
	}

	/** The KPI GroupBy field metadata. */
	export interface KpiGroupByMetadataFormProperties {

		/** The display name. */
		displayName: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of the field. */
		fieldName: FormControl<string | null | undefined>,

		/** The type of the field. */
		fieldType: FormControl<string | null | undefined>,
	}
	export function CreateKpiGroupByMetadataFormGroup() {
		return new FormGroup<KpiGroupByMetadataFormProperties>({
			displayName: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			fieldName: new FormControl<string | null | undefined>(undefined),
			fieldType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The KPI participant profile metadata. */
	export interface KpiParticipantProfilesMetadata {

		/**
		 * Name of the type.
		 * Required
		 */
		typeName: string;
	}

	/** The KPI participant profile metadata. */
	export interface KpiParticipantProfilesMetadataFormProperties {

		/**
		 * Name of the type.
		 * Required
		 */
		typeName: FormControl<string | null | undefined>,
	}
	export function CreateKpiParticipantProfilesMetadataFormGroup() {
		return new FormGroup<KpiParticipantProfilesMetadataFormProperties>({
			typeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response of list KPI operation. */
	export interface KpiListResult {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<KpiResourceFormat>;
	}

	/** The response of list KPI operation. */
	export interface KpiListResultFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateKpiListResultFormGroup() {
		return new FormGroup<KpiListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The KPI resource format. */
	export interface KpiResourceFormat extends ProxyResource {

		/** Defines the KPI Threshold limits. */
		properties?: KpiDefinition;
	}

	/** The KPI resource format. */
	export interface KpiResourceFormatFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateKpiResourceFormatFormGroup() {
		return new FormGroup<KpiResourceFormatFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the KPI Threshold limits. */
	export interface KpiThresholds {

		/**
		 * Whether or not the KPI is an increasing KPI.
		 * Required
		 */
		increasingKpi: boolean;

		/**
		 * The lower threshold limit.
		 * Required
		 */
		lowerLimit: number;

		/**
		 * The upper threshold limit.
		 * Required
		 */
		upperLimit: number;
	}

	/** Defines the KPI Threshold limits. */
	export interface KpiThresholdsFormProperties {

		/**
		 * Whether or not the KPI is an increasing KPI.
		 * Required
		 */
		increasingKpi: FormControl<boolean | null | undefined>,

		/**
		 * The lower threshold limit.
		 * Required
		 */
		lowerLimit: FormControl<number | null | undefined>,

		/**
		 * The upper threshold limit.
		 * Required
		 */
		upperLimit: FormControl<number | null | undefined>,
	}
	export function CreateKpiThresholdsFormGroup() {
		return new FormGroup<KpiThresholdsFormProperties>({
			increasingKpi: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lowerLimit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			upperLimit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The definition of Link. */
	export interface LinkDefinition {

		/** Localized descriptions for the Link. */
		description?: {[id: string]: string };

		/** Localized display name for the Link. */
		displayName?: {[id: string]: string };

		/** The link name. */
		linkName?: string | null;

		/** The set of properties mappings between the source and target Types. */
		mappings?: Array<TypePropertiesMapping>;

		/** Determines whether this link is supposed to create or delete instances if Link is NOT Reference Only. */
		operationType?: LinkDefinitionOperationType | null;

		/**
		 * The properties that represent the participating profile.
		 * Required
		 */
		participantPropertyReferences: Array<ParticipantPropertyReference>;

		/** Provisioning state. */
		provisioningState?: EntityTypeDefinitionProvisioningState | null;

		/** Indicating whether the link is reference only link. This flag is ignored if the Mappings are defined. If the mappings are not defined and it is set to true, links processing will not create or update profiles. */
		referenceOnly?: boolean | null;

		/**
		 * Type of source entity.
		 * Required
		 */
		sourceEntityType: ConnectorMappingEntityType;

		/**
		 * Name of the source Entity Type.
		 * Required
		 */
		sourceEntityTypeName: string;

		/**
		 * Type of target entity.
		 * Required
		 */
		targetEntityType: ConnectorMappingEntityType;

		/**
		 * Name of the target Entity Type.
		 * Required
		 */
		targetEntityTypeName: string;

		/** The hub name. */
		tenantId?: string | null;
	}

	/** The definition of Link. */
	export interface LinkDefinitionFormProperties {

		/** Localized descriptions for the Link. */
		description: FormControl<{[id: string]: string } | null | undefined>,

		/** Localized display name for the Link. */
		displayName: FormControl<{[id: string]: string } | null | undefined>,

		/** The link name. */
		linkName: FormControl<string | null | undefined>,

		/** Determines whether this link is supposed to create or delete instances if Link is NOT Reference Only. */
		operationType: FormControl<LinkDefinitionOperationType | null | undefined>,

		/** Provisioning state. */
		provisioningState: FormControl<EntityTypeDefinitionProvisioningState | null | undefined>,

		/** Indicating whether the link is reference only link. This flag is ignored if the Mappings are defined. If the mappings are not defined and it is set to true, links processing will not create or update profiles. */
		referenceOnly: FormControl<boolean | null | undefined>,

		/**
		 * Type of source entity.
		 * Required
		 */
		sourceEntityType: FormControl<ConnectorMappingEntityType | null | undefined>,

		/**
		 * Name of the source Entity Type.
		 * Required
		 */
		sourceEntityTypeName: FormControl<string | null | undefined>,

		/**
		 * Type of target entity.
		 * Required
		 */
		targetEntityType: FormControl<ConnectorMappingEntityType | null | undefined>,

		/**
		 * Name of the target Entity Type.
		 * Required
		 */
		targetEntityTypeName: FormControl<string | null | undefined>,

		/** The hub name. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateLinkDefinitionFormGroup() {
		return new FormGroup<LinkDefinitionFormProperties>({
			description: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayName: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			linkName: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<LinkDefinitionOperationType | null | undefined>(undefined),
			provisioningState: new FormControl<EntityTypeDefinitionProvisioningState | null | undefined>(undefined),
			referenceOnly: new FormControl<boolean | null | undefined>(undefined),
			sourceEntityType: new FormControl<ConnectorMappingEntityType | null | undefined>(undefined, [Validators.required]),
			sourceEntityTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetEntityType: new FormControl<ConnectorMappingEntityType | null | undefined>(undefined, [Validators.required]),
			targetEntityTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for a Link's property mapping. */
	export interface TypePropertiesMapping {

		/** Link type. */
		linkType?: TypePropertiesMappingLinkType | null;

		/**
		 * Property name on the source Entity Type.
		 * Required
		 */
		sourcePropertyName: string;

		/**
		 * Property name on the target Entity Type.
		 * Required
		 */
		targetPropertyName: string;
	}

	/** Metadata for a Link's property mapping. */
	export interface TypePropertiesMappingFormProperties {

		/** Link type. */
		linkType: FormControl<TypePropertiesMappingLinkType | null | undefined>,

		/**
		 * Property name on the source Entity Type.
		 * Required
		 */
		sourcePropertyName: FormControl<string | null | undefined>,

		/**
		 * Property name on the target Entity Type.
		 * Required
		 */
		targetPropertyName: FormControl<string | null | undefined>,
	}
	export function CreateTypePropertiesMappingFormGroup() {
		return new FormGroup<TypePropertiesMappingFormProperties>({
			linkType: new FormControl<TypePropertiesMappingLinkType | null | undefined>(undefined),
			sourcePropertyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetPropertyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TypePropertiesMappingLinkType { UpdateAlways = 0, CopyIfNull = 1 }

	export enum LinkDefinitionOperationType { Upsert = 0, Delete = 1 }


	/** The response of list link operation. */
	export interface LinkListResult {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<LinkResourceFormat>;
	}

	/** The response of list link operation. */
	export interface LinkListResultFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateLinkListResultFormGroup() {
		return new FormGroup<LinkListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The link resource format. */
	export interface LinkResourceFormat extends ProxyResource {

		/** The definition of Link. */
		properties?: LinkDefinition;
	}

	/** The link resource format. */
	export interface LinkResourceFormatFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateLinkResourceFormatFormGroup() {
		return new FormGroup<LinkResourceFormatFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Metadata definition base. */
	export interface MetadataDefinitionBase {

		/** The attributes for the Type. */
		attributes?: {[id: string]: Array<string> };

		/** Localized descriptions for the property. */
		description?: {[id: string]: string };

		/** Localized display names for the property. */
		displayName?: {[id: string]: string };

		/** Large Image associated with the Property or EntityType. */
		largeImage?: string | null;

		/** Any custom localized attributes for the Type. */
		localizedAttributes?: {[id: string]: any };

		/** Medium Image associated with the Property or EntityType. */
		mediumImage?: string | null;

		/** Small Image associated with the Property or EntityType. */
		smallImage?: string | null;
	}

	/** The Metadata definition base. */
	export interface MetadataDefinitionBaseFormProperties {

		/** The attributes for the Type. */
		attributes: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** Localized descriptions for the property. */
		description: FormControl<{[id: string]: string } | null | undefined>,

		/** Localized display names for the property. */
		displayName: FormControl<{[id: string]: string } | null | undefined>,

		/** Large Image associated with the Property or EntityType. */
		largeImage: FormControl<string | null | undefined>,

		/** Any custom localized attributes for the Type. */
		localizedAttributes: FormControl<{[id: string]: any } | null | undefined>,

		/** Medium Image associated with the Property or EntityType. */
		mediumImage: FormControl<string | null | undefined>,

		/** Small Image associated with the Property or EntityType. */
		smallImage: FormControl<string | null | undefined>,
	}
	export function CreateMetadataDefinitionBaseFormGroup() {
		return new FormGroup<MetadataDefinitionBaseFormProperties>({
			attributes: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			description: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayName: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			largeImage: new FormControl<string | null | undefined>(undefined),
			localizedAttributes: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			mediumImage: new FormControl<string | null | undefined>(undefined),
			smallImage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Customer Insights REST API operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** A Customer Insights REST API operation */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Customer Insights operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Customer Insights operations supported by the Microsoft.CustomerInsights resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Customer Insights operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The participant profile property reference. */
	export interface ParticipantProfilePropertyReference {

		/**
		 * The source interaction property that maps to the target profile property.
		 * Required
		 */
		interactionPropertyName: string;

		/**
		 * The target profile property that maps to the source interaction property.
		 * Required
		 */
		profilePropertyName: string;
	}

	/** The participant profile property reference. */
	export interface ParticipantProfilePropertyReferenceFormProperties {

		/**
		 * The source interaction property that maps to the target profile property.
		 * Required
		 */
		interactionPropertyName: FormControl<string | null | undefined>,

		/**
		 * The target profile property that maps to the source interaction property.
		 * Required
		 */
		profilePropertyName: FormControl<string | null | undefined>,
	}
	export function CreateParticipantProfilePropertyReferenceFormGroup() {
		return new FormGroup<ParticipantProfilePropertyReferenceFormProperties>({
			interactionPropertyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			profilePropertyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The prediction definition. */
	export interface Prediction {

		/**
		 * Whether do auto analyze.
		 * Required
		 */
		autoAnalyze: boolean;

		/** Description of the prediction. */
		description?: {[id: string]: string };

		/** Display name of the prediction. */
		displayName?: {[id: string]: string };

		/** The prediction grades. */
		PredictionGrades?: Array<PredictionGrades>;

		/** Interaction types involved in the prediction. */
		involvedInteractionTypes?: Array<string>;

		/** KPI types involved in the prediction. */
		involvedKpiTypes?: Array<string>;

		/** Relationships involved in the prediction. */
		involvedRelationships?: Array<string>;

		/**
		 * Definition of the link mapping of prediction.
		 * Required
		 */
		mappings: PredictionMappings;

		/**
		 * Negative outcome expression.
		 * Required
		 */
		negativeOutcomeExpression: string;

		/**
		 * Positive outcome expression.
		 * Required
		 */
		positiveOutcomeExpression: string;

		/** Name of the prediction. */
		predictionName?: string | null;

		/**
		 * Primary profile type.
		 * Required
		 */
		primaryProfileType: string;

		/** Provisioning state. */
		provisioningState?: EntityTypeDefinitionProvisioningState | null;

		/**
		 * Scope expression.
		 * Required
		 */
		scopeExpression: string;

		/**
		 * Score label.
		 * Required
		 */
		scoreLabel: string;

		/** System generated entities. */
		systemGeneratedEntities?: any;

		/** The hub name. */
		tenantId?: string | null;
	}

	/** The prediction definition. */
	export interface PredictionFormProperties {

		/**
		 * Whether do auto analyze.
		 * Required
		 */
		autoAnalyze: FormControl<boolean | null | undefined>,

		/** Description of the prediction. */
		description: FormControl<{[id: string]: string } | null | undefined>,

		/** Display name of the prediction. */
		displayName: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Negative outcome expression.
		 * Required
		 */
		negativeOutcomeExpression: FormControl<string | null | undefined>,

		/**
		 * Positive outcome expression.
		 * Required
		 */
		positiveOutcomeExpression: FormControl<string | null | undefined>,

		/** Name of the prediction. */
		predictionName: FormControl<string | null | undefined>,

		/**
		 * Primary profile type.
		 * Required
		 */
		primaryProfileType: FormControl<string | null | undefined>,

		/** Provisioning state. */
		provisioningState: FormControl<EntityTypeDefinitionProvisioningState | null | undefined>,

		/**
		 * Scope expression.
		 * Required
		 */
		scopeExpression: FormControl<string | null | undefined>,

		/**
		 * Score label.
		 * Required
		 */
		scoreLabel: FormControl<string | null | undefined>,

		/** System generated entities. */
		systemGeneratedEntities: FormControl<any | null | undefined>,

		/** The hub name. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreatePredictionFormGroup() {
		return new FormGroup<PredictionFormProperties>({
			autoAnalyze: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayName: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			negativeOutcomeExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			positiveOutcomeExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			predictionName: new FormControl<string | null | undefined>(undefined),
			primaryProfileType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<EntityTypeDefinitionProvisioningState | null | undefined>(undefined),
			scopeExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scoreLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			systemGeneratedEntities: new FormControl<any | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PredictionGrades {

		/** Name of the grade. */
		gradeName?: string | null;

		/** Maximum score threshold. */
		maxScoreThreshold?: number | null;

		/** Minimum score threshold. */
		minScoreThreshold?: number | null;
	}
	export interface PredictionGradesFormProperties {

		/** Name of the grade. */
		gradeName: FormControl<string | null | undefined>,

		/** Maximum score threshold. */
		maxScoreThreshold: FormControl<number | null | undefined>,

		/** Minimum score threshold. */
		minScoreThreshold: FormControl<number | null | undefined>,
	}
	export function CreatePredictionGradesFormGroup() {
		return new FormGroup<PredictionGradesFormProperties>({
			gradeName: new FormControl<string | null | undefined>(undefined),
			maxScoreThreshold: new FormControl<number | null | undefined>(undefined),
			minScoreThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PredictionMappings {

		/**
		 * The grade of the link mapping.
		 * Required
		 */
		grade: string;

		/**
		 * The reason of the link mapping.
		 * Required
		 */
		reason: string;

		/**
		 * The score of the link mapping.
		 * Required
		 */
		score: string;
	}
	export interface PredictionMappingsFormProperties {

		/**
		 * The grade of the link mapping.
		 * Required
		 */
		grade: FormControl<string | null | undefined>,

		/**
		 * The reason of the link mapping.
		 * Required
		 */
		reason: FormControl<string | null | undefined>,

		/**
		 * The score of the link mapping.
		 * Required
		 */
		score: FormControl<string | null | undefined>,
	}
	export function CreatePredictionMappingsFormGroup() {
		return new FormGroup<PredictionMappingsFormProperties>({
			grade: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			score: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The definition of the prediction distribution. */
	export interface PredictionDistributionDefinition {

		/** Distributions of the prediction. */
		PredictionDistributionDefinitionDistributions?: Array<PredictionDistributionDefinitionDistributions>;

		/** Total negatives in the distribution. */
		totalNegatives?: number | null;

		/** Total positive in the distribution. */
		totalPositives?: number | null;
	}

	/** The definition of the prediction distribution. */
	export interface PredictionDistributionDefinitionFormProperties {

		/** Total negatives in the distribution. */
		totalNegatives: FormControl<number | null | undefined>,

		/** Total positive in the distribution. */
		totalPositives: FormControl<number | null | undefined>,
	}
	export function CreatePredictionDistributionDefinitionFormGroup() {
		return new FormGroup<PredictionDistributionDefinitionFormProperties>({
			totalNegatives: new FormControl<number | null | undefined>(undefined),
			totalPositives: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PredictionDistributionDefinitionDistributions {

		/** Number of negatives. */
		negatives?: number | null;

		/** Number of negatives above threshold. */
		negativesAboveThreshold?: number | null;

		/** Number of positives. */
		positives?: number | null;

		/** Number of positives above threshold. */
		positivesAboveThreshold?: number | null;

		/** Score threshold. */
		scoreThreshold?: number | null;
	}
	export interface PredictionDistributionDefinitionDistributionsFormProperties {

		/** Number of negatives. */
		negatives: FormControl<number | null | undefined>,

		/** Number of negatives above threshold. */
		negativesAboveThreshold: FormControl<number | null | undefined>,

		/** Number of positives. */
		positives: FormControl<number | null | undefined>,

		/** Number of positives above threshold. */
		positivesAboveThreshold: FormControl<number | null | undefined>,

		/** Score threshold. */
		scoreThreshold: FormControl<number | null | undefined>,
	}
	export function CreatePredictionDistributionDefinitionDistributionsFormGroup() {
		return new FormGroup<PredictionDistributionDefinitionDistributionsFormProperties>({
			negatives: new FormControl<number | null | undefined>(undefined),
			negativesAboveThreshold: new FormControl<number | null | undefined>(undefined),
			positives: new FormControl<number | null | undefined>(undefined),
			positivesAboveThreshold: new FormControl<number | null | undefined>(undefined),
			scoreThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response of list predictions operation. */
	export interface PredictionListResult {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<PredictionResourceFormat>;
	}

	/** The response of list predictions operation. */
	export interface PredictionListResultFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePredictionListResultFormGroup() {
		return new FormGroup<PredictionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The prediction resource format. */
	export interface PredictionResourceFormat extends ProxyResource {

		/** The prediction definition. */
		properties?: Prediction;
	}

	/** The prediction resource format. */
	export interface PredictionResourceFormatFormProperties extends ProxyResourceFormProperties {
	}
	export function CreatePredictionResourceFormatFormGroup() {
		return new FormGroup<PredictionResourceFormatFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The prediction model status. */
	export interface PredictionModelStatus {

		/** The model status message. */
		message?: string | null;

		/** Version of the model. */
		modelVersion?: string | null;

		/** The prediction GUID ID. */
		predictionGuidId?: string | null;

		/** The prediction name. */
		predictionName?: string | null;

		/** The signals used. */
		signalsUsed?: number | null;

		/**
		 * Prediction model life cycle.  When prediction is in PendingModelConfirmation status, it is allowed to update the status to PendingFeaturing or Active through API.
		 * Required
		 */
		status: PredictionModelStatusStatus;

		/** The hub name. */
		tenantId?: string | null;

		/** Count of the test set. */
		testSetCount?: number | null;

		/** The training accuracy. */
		trainingAccuracy?: string | null;

		/** Count of the training set. */
		trainingSetCount?: number | null;

		/** Count of the validation set. */
		validationSetCount?: number | null;
	}

	/** The prediction model status. */
	export interface PredictionModelStatusFormProperties {

		/** The model status message. */
		message: FormControl<string | null | undefined>,

		/** Version of the model. */
		modelVersion: FormControl<string | null | undefined>,

		/** The prediction GUID ID. */
		predictionGuidId: FormControl<string | null | undefined>,

		/** The prediction name. */
		predictionName: FormControl<string | null | undefined>,

		/** The signals used. */
		signalsUsed: FormControl<number | null | undefined>,

		/**
		 * Prediction model life cycle.  When prediction is in PendingModelConfirmation status, it is allowed to update the status to PendingFeaturing or Active through API.
		 * Required
		 */
		status: FormControl<PredictionModelStatusStatus | null | undefined>,

		/** The hub name. */
		tenantId: FormControl<string | null | undefined>,

		/** Count of the test set. */
		testSetCount: FormControl<number | null | undefined>,

		/** The training accuracy. */
		trainingAccuracy: FormControl<string | null | undefined>,

		/** Count of the training set. */
		trainingSetCount: FormControl<number | null | undefined>,

		/** Count of the validation set. */
		validationSetCount: FormControl<number | null | undefined>,
	}
	export function CreatePredictionModelStatusFormGroup() {
		return new FormGroup<PredictionModelStatusFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			modelVersion: new FormControl<string | null | undefined>(undefined),
			predictionGuidId: new FormControl<string | null | undefined>(undefined),
			predictionName: new FormControl<string | null | undefined>(undefined),
			signalsUsed: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<PredictionModelStatusStatus | null | undefined>(undefined, [Validators.required]),
			tenantId: new FormControl<string | null | undefined>(undefined),
			testSetCount: new FormControl<number | null | undefined>(undefined),
			trainingAccuracy: new FormControl<string | null | undefined>(undefined),
			trainingSetCount: new FormControl<number | null | undefined>(undefined),
			validationSetCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PredictionModelStatusStatus { New = 0, Provisioning = 1, ProvisioningFailed = 2, PendingDiscovering = 3, Discovering = 4, PendingFeaturing = 5, Featuring = 6, FeaturingFailed = 7, PendingTraining = 8, Training = 9, TrainingFailed = 10, Evaluating = 11, EvaluatingFailed = 12, PendingModelConfirmation = 13, Active = 14, Deleted = 15, HumanIntervention = 16, Failed = 17 }


	/** The training results of the prediction. */
	export interface PredictionTrainingResults {

		/** Canonical profiles. */
		canonicalProfiles?: Array<CanonicalProfileDefinition>;

		/** The definition of the prediction distribution. */
		predictionDistribution?: PredictionDistributionDefinition;

		/** Instance count of the primary profile. */
		primaryProfileInstanceCount?: number | null;

		/** Score name. */
		scoreName?: string | null;

		/** The hub name. */
		tenantId?: string | null;
	}

	/** The training results of the prediction. */
	export interface PredictionTrainingResultsFormProperties {

		/** Instance count of the primary profile. */
		primaryProfileInstanceCount: FormControl<number | null | undefined>,

		/** Score name. */
		scoreName: FormControl<string | null | undefined>,

		/** The hub name. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreatePredictionTrainingResultsFormGroup() {
		return new FormGroup<PredictionTrainingResultsFormProperties>({
			primaryProfileInstanceCount: new FormControl<number | null | undefined>(undefined),
			scoreName: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of list profile operation. */
	export interface ProfileListResult {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<ProfileResourceFormat>;
	}

	/** The response of list profile operation. */
	export interface ProfileListResultFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateProfileListResultFormGroup() {
		return new FormGroup<ProfileListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The profile resource format. */
	export interface ProfileResourceFormat extends ProxyResource {

		/** The profile type definition. */
		properties?: ProfileTypeDefinition;
	}

	/** The profile resource format. */
	export interface ProfileResourceFormatFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateProfileResourceFormatFormGroup() {
		return new FormGroup<ProfileResourceFormatFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The profile type definition. */
	export interface ProfileTypeDefinition extends EntityTypeDefinition {

		/** The strong IDs. */
		strongIds?: Array<StrongId>;
	}

	/** The profile type definition. */
	export interface ProfileTypeDefinitionFormProperties extends EntityTypeDefinitionFormProperties {
	}
	export function CreateProfileTypeDefinitionFormGroup() {
		return new FormGroup<ProfileTypeDefinitionFormProperties>({
			attributes: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			description: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayName: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			largeImage: new FormControl<string | null | undefined>(undefined),
			localizedAttributes: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			mediumImage: new FormControl<string | null | undefined>(undefined),
			smallImage: new FormControl<string | null | undefined>(undefined),
			apiEntitySetName: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<ConnectorMappingEntityType | null | undefined>(undefined),
			instancesCount: new FormControl<number | null | undefined>(undefined),
			lastChangedUtc: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<EntityTypeDefinitionProvisioningState | null | undefined>(undefined),
			schemaItemTypeLink: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			timestampFieldName: new FormControl<string | null | undefined>(undefined),
			typeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Property/Properties which represent a unique ID. */
	export interface StrongId {

		/** Localized descriptions. */
		description?: {[id: string]: string };

		/** Localized display name. */
		displayName?: {[id: string]: string };

		/**
		 * The properties which make up the unique ID.
		 * Required
		 */
		keyPropertyNames: Array<string>;

		/**
		 * The Name identifying the strong ID.
		 * Required
		 */
		strongIdName: string;
	}

	/** Property/Properties which represent a unique ID. */
	export interface StrongIdFormProperties {

		/** Localized descriptions. */
		description: FormControl<{[id: string]: string } | null | undefined>,

		/** Localized display name. */
		displayName: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The Name identifying the strong ID.
		 * Required
		 */
		strongIdName: FormControl<string | null | undefined>,
	}
	export function CreateStrongIdFormGroup() {
		return new FormGroup<StrongIdFormProperties>({
			description: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayName: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			strongIdName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provisioning state. */
	export enum ProvisioningState { Provisioning = 0, Succeeded = 1, Expiring = 2, Deleting = 3, HumanIntervention = 4, Failed = 5 }


	/** Common properties of proxy resource. */
	export interface ProxyResource {

		/** Resource ID. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** Common properties of proxy resource. */
	export interface ProxyResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of Relationship. */
	export interface RelationshipDefinition {

		/** The Relationship Cardinality. */
		cardinality?: RelationshipDefinitionCardinality | null;

		/** Localized descriptions for the Relationship. */
		description?: {[id: string]: string };

		/** Localized display name for the Relationship. */
		displayName?: {[id: string]: string };

		/** The expiry date time in UTC. */
		expiryDateTimeUtc?: Date | null;

		/** The properties of the Relationship. */
		fields?: Array<PropertyDefinition>;

		/** Optional property to be used to map fields in profile to their strong ids in related profile. */
		lookupMappings?: Array<RelationshipTypeMapping>;

		/**
		 * Profile type.
		 * Required
		 */
		profileType: string;

		/** Provisioning state. */
		provisioningState?: EntityTypeDefinitionProvisioningState | null;

		/**
		 * Related profile being referenced.
		 * Required
		 */
		relatedProfileType: string;

		/** The relationship guid id. */
		relationshipGuidId?: string | null;

		/** The Relationship name. */
		relationshipName?: string | null;

		/** The hub name. */
		tenantId?: string | null;
	}

	/** The definition of Relationship. */
	export interface RelationshipDefinitionFormProperties {

		/** The Relationship Cardinality. */
		cardinality: FormControl<RelationshipDefinitionCardinality | null | undefined>,

		/** Localized descriptions for the Relationship. */
		description: FormControl<{[id: string]: string } | null | undefined>,

		/** Localized display name for the Relationship. */
		displayName: FormControl<{[id: string]: string } | null | undefined>,

		/** The expiry date time in UTC. */
		expiryDateTimeUtc: FormControl<Date | null | undefined>,

		/**
		 * Profile type.
		 * Required
		 */
		profileType: FormControl<string | null | undefined>,

		/** Provisioning state. */
		provisioningState: FormControl<EntityTypeDefinitionProvisioningState | null | undefined>,

		/**
		 * Related profile being referenced.
		 * Required
		 */
		relatedProfileType: FormControl<string | null | undefined>,

		/** The relationship guid id. */
		relationshipGuidId: FormControl<string | null | undefined>,

		/** The Relationship name. */
		relationshipName: FormControl<string | null | undefined>,

		/** The hub name. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipDefinitionFormGroup() {
		return new FormGroup<RelationshipDefinitionFormProperties>({
			cardinality: new FormControl<RelationshipDefinitionCardinality | null | undefined>(undefined),
			description: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayName: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			expiryDateTimeUtc: new FormControl<Date | null | undefined>(undefined),
			profileType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<EntityTypeDefinitionProvisioningState | null | undefined>(undefined),
			relatedProfileType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relationshipGuidId: new FormControl<string | null | undefined>(undefined),
			relationshipName: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RelationshipDefinitionCardinality { OneToOne = 0, OneToMany = 1, ManyToMany = 2 }


	/** Maps fields in Profile to their corresponding StrongIds in Related Profile. */
	export interface RelationshipTypeMapping {

		/**
		 * Maps a profile property with the StrongId of related profile. This is an array to support StrongIds that are composite key as well.
		 * Required
		 */
		fieldMappings: Array<RelationshipTypeFieldMapping>;
	}

	/** Maps fields in Profile to their corresponding StrongIds in Related Profile. */
	export interface RelationshipTypeMappingFormProperties {
	}
	export function CreateRelationshipTypeMappingFormGroup() {
		return new FormGroup<RelationshipTypeMappingFormProperties>({
		});

	}


	/** Map a field of profile to its corresponding StrongId in Related Profile. */
	export interface RelationshipTypeFieldMapping {

		/**
		 * Specifies the fieldName in profile.
		 * Required
		 */
		profileFieldName: string;

		/**
		 * Specifies the KeyProperty (from StrongId) of the related profile.
		 * Required
		 */
		relatedProfileKeyProperty: string;
	}

	/** Map a field of profile to its corresponding StrongId in Related Profile. */
	export interface RelationshipTypeFieldMappingFormProperties {

		/**
		 * Specifies the fieldName in profile.
		 * Required
		 */
		profileFieldName: FormControl<string | null | undefined>,

		/**
		 * Specifies the KeyProperty (from StrongId) of the related profile.
		 * Required
		 */
		relatedProfileKeyProperty: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipTypeFieldMappingFormGroup() {
		return new FormGroup<RelationshipTypeFieldMappingFormProperties>({
			profileFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relatedProfileKeyProperty: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The definition of relationship link. */
	export interface RelationshipLinkDefinition {

		/** Localized descriptions for the Relationship Link. */
		description?: {[id: string]: string };

		/** Localized display name for the Relationship Link. */
		displayName?: {[id: string]: string };

		/**
		 * The InteractionType associated with the Relationship Link.
		 * Required
		 */
		interactionType: string;

		/** The name of the Relationship Link. */
		linkName?: string | null;

		/** The mappings between Interaction and Relationship fields. */
		mappings?: Array<RelationshipLinkFieldMapping>;

		/**
		 * The property references for the Profile of the Relationship.
		 * Required
		 */
		profilePropertyReferences: Array<ParticipantProfilePropertyReference>;

		/** Provisioning state. */
		provisioningState?: EntityTypeDefinitionProvisioningState | null;

		/**
		 * The property references for the Related Profile of the Relationship.
		 * Required
		 */
		relatedProfilePropertyReferences: Array<ParticipantProfilePropertyReference>;

		/** The relationship guid id. */
		relationshipGuidId?: string | null;

		/**
		 * The Relationship associated with the Link.
		 * Required
		 */
		relationshipName: string;

		/** The hub name. */
		tenantId?: string | null;
	}

	/** The definition of relationship link. */
	export interface RelationshipLinkDefinitionFormProperties {

		/** Localized descriptions for the Relationship Link. */
		description: FormControl<{[id: string]: string } | null | undefined>,

		/** Localized display name for the Relationship Link. */
		displayName: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The InteractionType associated with the Relationship Link.
		 * Required
		 */
		interactionType: FormControl<string | null | undefined>,

		/** The name of the Relationship Link. */
		linkName: FormControl<string | null | undefined>,

		/** Provisioning state. */
		provisioningState: FormControl<EntityTypeDefinitionProvisioningState | null | undefined>,

		/** The relationship guid id. */
		relationshipGuidId: FormControl<string | null | undefined>,

		/**
		 * The Relationship associated with the Link.
		 * Required
		 */
		relationshipName: FormControl<string | null | undefined>,

		/** The hub name. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipLinkDefinitionFormGroup() {
		return new FormGroup<RelationshipLinkDefinitionFormProperties>({
			description: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayName: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			interactionType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkName: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<EntityTypeDefinitionProvisioningState | null | undefined>(undefined),
			relationshipGuidId: new FormControl<string | null | undefined>(undefined),
			relationshipName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The fields mapping for Relationships. */
	export interface RelationshipLinkFieldMapping {

		/**
		 * The field name on the Interaction Type.
		 * Required
		 */
		interactionFieldName: string;

		/** Link type. */
		linkType?: TypePropertiesMappingLinkType | null;

		/**
		 * The field name on the Relationship metadata.
		 * Required
		 */
		relationshipFieldName: string;
	}

	/** The fields mapping for Relationships. */
	export interface RelationshipLinkFieldMappingFormProperties {

		/**
		 * The field name on the Interaction Type.
		 * Required
		 */
		interactionFieldName: FormControl<string | null | undefined>,

		/** Link type. */
		linkType: FormControl<TypePropertiesMappingLinkType | null | undefined>,

		/**
		 * The field name on the Relationship metadata.
		 * Required
		 */
		relationshipFieldName: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipLinkFieldMappingFormGroup() {
		return new FormGroup<RelationshipLinkFieldMappingFormProperties>({
			interactionFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkType: new FormControl<TypePropertiesMappingLinkType | null | undefined>(undefined),
			relationshipFieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response of list relationship link operation. */
	export interface RelationshipLinkListResult {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<RelationshipLinkResourceFormat>;
	}

	/** The response of list relationship link operation. */
	export interface RelationshipLinkListResultFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipLinkListResultFormGroup() {
		return new FormGroup<RelationshipLinkListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The relationship link resource format. */
	export interface RelationshipLinkResourceFormat extends ProxyResource {

		/** The definition of relationship link. */
		properties?: RelationshipLinkDefinition;
	}

	/** The relationship link resource format. */
	export interface RelationshipLinkResourceFormatFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateRelationshipLinkResourceFormatFormGroup() {
		return new FormGroup<RelationshipLinkResourceFormatFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of list relationship operation. */
	export interface RelationshipListResult {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<RelationshipResourceFormat>;
	}

	/** The response of list relationship operation. */
	export interface RelationshipListResultFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipListResultFormGroup() {
		return new FormGroup<RelationshipListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The relationship resource format. */
	export interface RelationshipResourceFormat extends ProxyResource {

		/** The definition of Relationship. */
		properties?: RelationshipDefinition;
	}

	/** The relationship resource format. */
	export interface RelationshipResourceFormatFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateRelationshipResourceFormatFormGroup() {
		return new FormGroup<RelationshipResourceFormatFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of suggested relationship for the type. */
	export interface RelationshipsLookup {

		/** The name of existing Relationship. */
		existingRelationshipName?: string | null;

		/** The relationship profile. */
		profileName?: string | null;

		/** The property references for the profile type. */
		profilePropertyReferences?: Array<ParticipantProfilePropertyReference>;

		/** The related profile. */
		relatedProfileName?: string | null;

		/** The property references for the related profile type. */
		relatedProfilePropertyReferences?: Array<ParticipantProfilePropertyReference>;
	}

	/** The definition of suggested relationship for the type. */
	export interface RelationshipsLookupFormProperties {

		/** The name of existing Relationship. */
		existingRelationshipName: FormControl<string | null | undefined>,

		/** The relationship profile. */
		profileName: FormControl<string | null | undefined>,

		/** The related profile. */
		relatedProfileName: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipsLookupFormGroup() {
		return new FormGroup<RelationshipsLookupFormProperties>({
			existingRelationshipName: new FormControl<string | null | undefined>(undefined),
			profileName: new FormControl<string | null | undefined>(undefined),
			relatedProfileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common properties of Azure resource. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource location. */
		location?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource tags. */
		tags?: {[id: string]: string };

		/** Resource type. */
		type?: string | null;
	}

	/** Common properties of Azure resource. */
	export interface ResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource location. */
		location: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource set description. */
	export interface ResourceSetDescription {

		/** The elements included in the set. */
		elements?: Array<string>;

		/** The elements that are not included in the set, in case elements contains '*' indicating 'all'. */
		exceptions?: Array<string>;
	}

	/** The resource set description. */
	export interface ResourceSetDescriptionFormProperties {
	}
	export function CreateResourceSetDescriptionFormGroup() {
		return new FormGroup<ResourceSetDescriptionFormProperties>({
		});

	}


	/** The Role definition. */
	export interface Role {

		/** The description of the role. */
		description?: string | null;

		/** The role name. */
		roleName?: string | null;
	}

	/** The Role definition. */
	export interface RoleFormProperties {

		/** The description of the role. */
		description: FormControl<string | null | undefined>,

		/** The role name. */
		roleName: FormControl<string | null | undefined>,
	}
	export function CreateRoleFormGroup() {
		return new FormGroup<RoleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			roleName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Role Assignment definition. */
	export interface RoleAssignment {

		/** The name of the metadata object. */
		assignmentName?: string | null;

		/** The resource set description. */
		conflationPolicies?: ResourceSetDescription;

		/** The resource set description. */
		connectors?: ResourceSetDescription;

		/** Localized description for the metadata. */
		description?: {[id: string]: string };

		/** Localized display names for the metadata. */
		displayName?: {[id: string]: string };

		/** The resource set description. */
		interactions?: ResourceSetDescription;

		/** The resource set description. */
		kpis?: ResourceSetDescription;

		/** The resource set description. */
		links?: ResourceSetDescription;

		/**
		 * The principals being assigned to.
		 * Required
		 */
		principals: Array<AssignmentPrincipal>;

		/** The resource set description. */
		profiles?: ResourceSetDescription;

		/** Provisioning state. */
		provisioningState?: EntityTypeDefinitionProvisioningState | null;

		/** The resource set description. */
		relationshipLinks?: ResourceSetDescription;

		/** The resource set description. */
		relationships?: ResourceSetDescription;

		/**
		 * Type of roles.
		 * Required
		 */
		role: RoleAssignmentRole;

		/** The resource set description. */
		roleAssignments?: ResourceSetDescription;

		/** The resource set description. */
		sasPolicies?: ResourceSetDescription;

		/** The resource set description. */
		segments?: ResourceSetDescription;

		/** The hub name. */
		tenantId?: string | null;

		/** The resource set description. */
		views?: ResourceSetDescription;

		/** The resource set description. */
		widgetTypes?: ResourceSetDescription;
	}

	/** The Role Assignment definition. */
	export interface RoleAssignmentFormProperties {

		/** The name of the metadata object. */
		assignmentName: FormControl<string | null | undefined>,

		/** Localized description for the metadata. */
		description: FormControl<{[id: string]: string } | null | undefined>,

		/** Localized display names for the metadata. */
		displayName: FormControl<{[id: string]: string } | null | undefined>,

		/** Provisioning state. */
		provisioningState: FormControl<EntityTypeDefinitionProvisioningState | null | undefined>,

		/**
		 * Type of roles.
		 * Required
		 */
		role: FormControl<RoleAssignmentRole | null | undefined>,

		/** The hub name. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateRoleAssignmentFormGroup() {
		return new FormGroup<RoleAssignmentFormProperties>({
			assignmentName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayName: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			provisioningState: new FormControl<EntityTypeDefinitionProvisioningState | null | undefined>(undefined),
			role: new FormControl<RoleAssignmentRole | null | undefined>(undefined, [Validators.required]),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RoleAssignmentRole { Admin = 0, Reader = 1, ManageAdmin = 2, ManageReader = 3, DataAdmin = 4, DataReader = 5 }


	/** The response of list role assignment operation. */
	export interface RoleAssignmentListResult {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<RoleAssignmentResourceFormat>;
	}

	/** The response of list role assignment operation. */
	export interface RoleAssignmentListResultFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRoleAssignmentListResultFormGroup() {
		return new FormGroup<RoleAssignmentListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Role Assignment resource format. */
	export interface RoleAssignmentResourceFormat extends ProxyResource {

		/** The Role Assignment definition. */
		properties?: RoleAssignment;
	}

	/** The Role Assignment resource format. */
	export interface RoleAssignmentResourceFormatFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateRoleAssignmentResourceFormatFormGroup() {
		return new FormGroup<RoleAssignmentResourceFormatFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of list role assignment operation. */
	export interface RoleListResult {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<RoleResourceFormat>;
	}

	/** The response of list role assignment operation. */
	export interface RoleListResultFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRoleListResultFormGroup() {
		return new FormGroup<RoleListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The role resource format. */
	export interface RoleResourceFormat extends ProxyResource {

		/** The Role definition. */
		properties?: Role;
	}

	/** The role resource format. */
	export interface RoleResourceFormatFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateRoleResourceFormatFormGroup() {
		return new FormGroup<RoleResourceFormatFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Salesforce connector properties. */
	export interface SalesforceConnectorProperties {

		/**
		 * The Salesforce tables.
		 * Required
		 */
		salesforcetables: Array<SalesforceTable>;

		/**
		 * Salesforce discover setting.
		 * Required
		 */
		usersetting: SalesforceDiscoverSetting;
	}

	/** The Salesforce connector properties. */
	export interface SalesforceConnectorPropertiesFormProperties {
	}
	export function CreateSalesforceConnectorPropertiesFormGroup() {
		return new FormGroup<SalesforceConnectorPropertiesFormProperties>({
		});

	}


	/** Salesforce table. */
	export interface SalesforceTable {

		/** Indicating whether this instance is profile. */
		isProfile?: string | null;

		/**
		 * The table category.
		 * Required
		 */
		tableCategory: string;

		/**
		 * The name of the table.
		 * Required
		 */
		tableName: string;

		/** The table remarks. */
		tableRemarks?: string | null;

		/**
		 * The table schema.
		 * Required
		 */
		tableSchema: string;
	}

	/** Salesforce table. */
	export interface SalesforceTableFormProperties {

		/** Indicating whether this instance is profile. */
		isProfile: FormControl<string | null | undefined>,

		/**
		 * The table category.
		 * Required
		 */
		tableCategory: FormControl<string | null | undefined>,

		/**
		 * The name of the table.
		 * Required
		 */
		tableName: FormControl<string | null | undefined>,

		/** The table remarks. */
		tableRemarks: FormControl<string | null | undefined>,

		/**
		 * The table schema.
		 * Required
		 */
		tableSchema: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceTableFormGroup() {
		return new FormGroup<SalesforceTableFormProperties>({
			isProfile: new FormControl<string | null | undefined>(undefined),
			tableCategory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tableRemarks: new FormControl<string | null | undefined>(undefined),
			tableSchema: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Salesforce discover setting. */
	export interface SalesforceDiscoverSetting {

		/**
		 * The salesforce connection string secret URL.
		 * Required
		 */
		salesforceConnectionStringSecretUrl: string;
	}

	/** Salesforce discover setting. */
	export interface SalesforceDiscoverSettingFormProperties {

		/**
		 * The salesforce connection string secret URL.
		 * Required
		 */
		salesforceConnectionStringSecretUrl: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceDiscoverSettingFormGroup() {
		return new FormGroup<SalesforceDiscoverSettingFormProperties>({
			salesforceConnectionStringSecretUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response of suggest relationship links operation. */
	export interface SuggestRelationshipLinksResponse {

		/** The interaction name. */
		interactionName?: string | null;

		/** Suggested relationships for the type. */
		suggestedRelationships?: Array<RelationshipsLookup>;
	}

	/** The response of suggest relationship links operation. */
	export interface SuggestRelationshipLinksResponseFormProperties {

		/** The interaction name. */
		interactionName: FormControl<string | null | undefined>,
	}
	export function CreateSuggestRelationshipLinksResponseFormGroup() {
		return new FormGroup<SuggestRelationshipLinksResponseFormProperties>({
			interactionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The view in Customer 360 web application. */
	export interface View {

		/** Date time when view was last modified. */
		changed?: Date | null;

		/** Date time when view was created. */
		created?: Date | null;

		/**
		 * View definition.
		 * Required
		 */
		definition: string;

		/** Localized display name for the view. */
		displayName?: {[id: string]: string };

		/** the hub name. */
		tenantId?: string | null;

		/** the user ID. */
		userId?: string | null;

		/** Name of the view. */
		viewName?: string | null;
	}

	/** The view in Customer 360 web application. */
	export interface ViewFormProperties {

		/** Date time when view was last modified. */
		changed: FormControl<Date | null | undefined>,

		/** Date time when view was created. */
		created: FormControl<Date | null | undefined>,

		/**
		 * View definition.
		 * Required
		 */
		definition: FormControl<string | null | undefined>,

		/** Localized display name for the view. */
		displayName: FormControl<{[id: string]: string } | null | undefined>,

		/** the hub name. */
		tenantId: FormControl<string | null | undefined>,

		/** the user ID. */
		userId: FormControl<string | null | undefined>,

		/** Name of the view. */
		viewName: FormControl<string | null | undefined>,
	}
	export function CreateViewFormGroup() {
		return new FormGroup<ViewFormProperties>({
			changed: new FormControl<Date | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			definition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			viewName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of list view operation. */
	export interface ViewListResult {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<ViewResourceFormat>;
	}

	/** The response of list view operation. */
	export interface ViewListResultFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateViewListResultFormGroup() {
		return new FormGroup<ViewListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The view resource format. */
	export interface ViewResourceFormat extends ProxyResource {

		/** The view in Customer 360 web application. */
		properties?: View;
	}

	/** The view resource format. */
	export interface ViewResourceFormatFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateViewResourceFormatFormGroup() {
		return new FormGroup<ViewResourceFormatFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of WidgetType. */
	export interface WidgetType {

		/** Date time when widget type was last modified. */
		changed?: Date | null;

		/** Date time when widget type was created. */
		created?: Date | null;

		/**
		 * Definition for widget type.
		 * Required
		 */
		definition: string;

		/** Description for widget type. */
		description?: string | null;

		/** Localized display name for the widget type. */
		displayName?: {[id: string]: string };

		/** The image URL. */
		imageUrl?: string | null;

		/** The hub name. */
		tenantId?: string | null;

		/** Name of the widget type. */
		widgetTypeName?: string | null;

		/** The widget version. */
		widgetVersion?: string | null;
	}

	/** Definition of WidgetType. */
	export interface WidgetTypeFormProperties {

		/** Date time when widget type was last modified. */
		changed: FormControl<Date | null | undefined>,

		/** Date time when widget type was created. */
		created: FormControl<Date | null | undefined>,

		/**
		 * Definition for widget type.
		 * Required
		 */
		definition: FormControl<string | null | undefined>,

		/** Description for widget type. */
		description: FormControl<string | null | undefined>,

		/** Localized display name for the widget type. */
		displayName: FormControl<{[id: string]: string } | null | undefined>,

		/** The image URL. */
		imageUrl: FormControl<string | null | undefined>,

		/** The hub name. */
		tenantId: FormControl<string | null | undefined>,

		/** Name of the widget type. */
		widgetTypeName: FormControl<string | null | undefined>,

		/** The widget version. */
		widgetVersion: FormControl<string | null | undefined>,
	}
	export function CreateWidgetTypeFormGroup() {
		return new FormGroup<WidgetTypeFormProperties>({
			changed: new FormControl<Date | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			definition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			widgetTypeName: new FormControl<string | null | undefined>(undefined),
			widgetVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of list widget type operation. */
	export interface WidgetTypeListResult {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** Results of the list operation. */
		value?: Array<WidgetTypeResourceFormat>;
	}

	/** The response of list widget type operation. */
	export interface WidgetTypeListResultFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWidgetTypeListResultFormGroup() {
		return new FormGroup<WidgetTypeListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The WidgetTypeResourceFormat */
	export interface WidgetTypeResourceFormat extends ProxyResource {

		/** Definition of WidgetType. */
		properties?: WidgetType;
	}

	/** The WidgetTypeResourceFormat */
	export interface WidgetTypeResourceFormatFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateWidgetTypeResourceFormatFormGroup() {
		return new FormGroup<WidgetTypeResourceFormatFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Customer Insights REST API operations.
		 * Get providers/Microsoft.CustomerInsights/operations
		 * @param {string} api_version Client Api Version.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.CustomerInsights/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all hubs in the specified subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.CustomerInsights/hubs
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {HubListResult} OK. Successfully get all the hubs in the subscription.
		 */
		Hubs_List(api_version: string, subscriptionId: string): Observable<HubListResult> {
			return this.http.get<HubListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.CustomerInsights/hubs?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the hubs in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {HubListResult} OK. Successfully get all the hubs in the resource group.
		 */
		Hubs_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<HubListResult> {
			return this.http.get<HubListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {Hub} OK. Successfully get the hub.
		 */
		Hubs_Get(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string): Observable<Hub> {
			return this.http.get<Hub>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a hub, or updates an existing hub.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the Hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {Hub} requestBody Parameters supplied to the CreateOrUpdate Hub operation.
		 * @return {Hub} OK. An existing hub is updated.
		 */
		Hubs_CreateOrUpdate(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string, requestBody: Hub): Observable<Hub> {
			return this.http.put<Hub>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified hub.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK. The hub is deleted.
		 */
		Hubs_Delete(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Hub.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the Hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {Hub} requestBody Parameters supplied to the Update Hub operation.
		 * @return {Hub} OK. The hub is updated.
		 */
		Hubs_Update(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string, requestBody: Hub): Observable<Hub> {
			return this.http.patch<Hub>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all the authorization policies in a specified hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AuthorizationPolicyListResult} OK. Successfully get all the authorization policies in the hub.
		 */
		AuthorizationPolicies_ListByHub(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string): Observable<AuthorizationPolicyListResult> {
			return this.http.get<AuthorizationPolicyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/authorizationPolicies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an authorization policy in the hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} authorizationPolicyName The name of the policy.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AuthorizationPolicyResourceFormat} OK. Successfully get the authorization policy.
		 */
		AuthorizationPolicies_Get(resourceGroupName: string, hubName: string, authorizationPolicyName: string, api_version: string, subscriptionId: string): Observable<AuthorizationPolicyResourceFormat> {
			return this.http.get<AuthorizationPolicyResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/authorizationPolicies/' + (authorizationPolicyName == null ? '' : encodeURIComponent(authorizationPolicyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates an authorization policy or updates an existing authorization policy.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} authorizationPolicyName The name of the policy.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {AuthorizationPolicyResourceFormat} requestBody Parameters supplied to the CreateOrUpdate authorization policy operation.
		 * @return {AuthorizationPolicyResourceFormat} OK. Successfully update an existing authorization policy.
		 */
		AuthorizationPolicies_CreateOrUpdate(resourceGroupName: string, hubName: string, authorizationPolicyName: string, api_version: string, subscriptionId: string, requestBody: AuthorizationPolicyResourceFormat): Observable<AuthorizationPolicyResourceFormat> {
			return this.http.put<AuthorizationPolicyResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/authorizationPolicies/' + (authorizationPolicyName == null ? '' : encodeURIComponent(authorizationPolicyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Regenerates the primary policy key of the specified authorization policy.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}/regeneratePrimaryKey
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} authorizationPolicyName The name of the policy.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AuthorizationPolicy} OK. The primary key of the authorization policy is regenerated.
		 */
		AuthorizationPolicies_RegeneratePrimaryKey(resourceGroupName: string, hubName: string, authorizationPolicyName: string, api_version: string, subscriptionId: string): Observable<AuthorizationPolicy> {
			return this.http.post<AuthorizationPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/authorizationPolicies/' + (authorizationPolicyName == null ? '' : encodeURIComponent(authorizationPolicyName)) + '/regeneratePrimaryKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerates the secondary policy key of the specified authorization policy.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}/regenerateSecondaryKey
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} authorizationPolicyName The name of the policy.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AuthorizationPolicy} OK. The secondary key of the authorization policy is regenerated.
		 */
		AuthorizationPolicies_RegenerateSecondaryKey(resourceGroupName: string, hubName: string, authorizationPolicyName: string, api_version: string, subscriptionId: string): Observable<AuthorizationPolicy> {
			return this.http.post<AuthorizationPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/authorizationPolicies/' + (authorizationPolicyName == null ? '' : encodeURIComponent(authorizationPolicyName)) + '/regenerateSecondaryKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets all the connectors in the specified hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/connectors
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ConnectorListResult} OK. Successfully get all the connectors in the hub.
		 */
		Connectors_ListByHub(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string): Observable<ConnectorListResult> {
			return this.http.get<ConnectorListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/connectors&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a connector in the hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/connectors/{connectorName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} connectorName The name of the connector.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ConnectorResourceFormat} OK. Successfully get the connector.
		 */
		Connectors_Get(resourceGroupName: string, hubName: string, connectorName: string, api_version: string, subscriptionId: string): Observable<ConnectorResourceFormat> {
			return this.http.get<ConnectorResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/connectors/' + (connectorName == null ? '' : encodeURIComponent(connectorName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a connector or updates an existing connector in the hub.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/connectors/{connectorName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} connectorName The name of the connector.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ConnectorResourceFormat} requestBody Parameters supplied to the CreateOrUpdate Connector operation.
		 * @return {ConnectorResourceFormat} OK. Successfully created the connector.
		 */
		Connectors_CreateOrUpdate(resourceGroupName: string, hubName: string, connectorName: string, api_version: string, subscriptionId: string, requestBody: ConnectorResourceFormat): Observable<ConnectorResourceFormat> {
			return this.http.put<ConnectorResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/connectors/' + (connectorName == null ? '' : encodeURIComponent(connectorName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a connector in the hub.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/connectors/{connectorName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} connectorName The name of the connector.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK. The connector is deleted.
		 */
		Connectors_Delete(resourceGroupName: string, hubName: string, connectorName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/connectors/' + (connectorName == null ? '' : encodeURIComponent(connectorName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the connector mappings in the specified connector.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/connectors/{connectorName}/mappings
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} connectorName The name of the connector.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ConnectorMappingListResult} OK. Successfully get all the connector mappings in the connector.
		 */
		ConnectorMappings_ListByConnector(resourceGroupName: string, hubName: string, connectorName: string, api_version: string, subscriptionId: string): Observable<ConnectorMappingListResult> {
			return this.http.get<ConnectorMappingListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/connectors/' + (connectorName == null ? '' : encodeURIComponent(connectorName)) + '/mappings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a connector mapping in the connector.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/connectors/{connectorName}/mappings/{mappingName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} connectorName The name of the connector.
		 * @param {string} mappingName The name of the connector mapping.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ConnectorMappingResourceFormat} OK. Successfully get the connector mapping.
		 */
		ConnectorMappings_Get(resourceGroupName: string, hubName: string, connectorName: string, mappingName: string, api_version: string, subscriptionId: string): Observable<ConnectorMappingResourceFormat> {
			return this.http.get<ConnectorMappingResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/connectors/' + (connectorName == null ? '' : encodeURIComponent(connectorName)) + '/mappings/' + (mappingName == null ? '' : encodeURIComponent(mappingName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a connector mapping or updates an existing connector mapping in the connector.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/connectors/{connectorName}/mappings/{mappingName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} connectorName The name of the connector.
		 * @param {string} mappingName The name of the connector mapping.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ConnectorMappingResourceFormat} requestBody Parameters supplied to the CreateOrUpdate Connector Mapping operation.
		 * @return {ConnectorMappingResourceFormat} OK. Successfully created the connector mapping.
		 */
		ConnectorMappings_CreateOrUpdate(resourceGroupName: string, hubName: string, connectorName: string, mappingName: string, api_version: string, subscriptionId: string, requestBody: ConnectorMappingResourceFormat): Observable<ConnectorMappingResourceFormat> {
			return this.http.put<ConnectorMappingResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/connectors/' + (connectorName == null ? '' : encodeURIComponent(connectorName)) + '/mappings/' + (mappingName == null ? '' : encodeURIComponent(mappingName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a connector mapping in the connector.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/connectors/{connectorName}/mappings/{mappingName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} connectorName The name of the connector.
		 * @param {string} mappingName The name of the connector mapping.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK. The connector mapping is deleted.
		 */
		ConnectorMappings_Delete(resourceGroupName: string, hubName: string, connectorName: string, mappingName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/connectors/' + (connectorName == null ? '' : encodeURIComponent(connectorName)) + '/mappings/' + (mappingName == null ? '' : encodeURIComponent(mappingName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets data image upload URL.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/images/getDataImageUploadUrl
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {GetImageUploadUrlInput} requestBody Parameters supplied to the GetUploadUrlForData operation.
		 * @return {ImageDefinition} OK. Successfully get the image upload URL for data.
		 */
		Images_GetUploadUrlForData(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string, requestBody: GetImageUploadUrlInput): Observable<ImageDefinition> {
			return this.http.post<ImageDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/images/getDataImageUploadUrl&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets entity type (profile or interaction) image upload URL.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/images/getEntityTypeImageUploadUrl
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {GetImageUploadUrlInput} requestBody Parameters supplied to the GetUploadUrlForEntityType operation.
		 * @return {ImageDefinition} OK. Successfully get the image upload URL for entity type.
		 */
		Images_GetUploadUrlForEntityType(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string, requestBody: GetImageUploadUrlInput): Observable<ImageDefinition> {
			return this.http.post<ImageDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/images/getEntityTypeImageUploadUrl&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all interactions in the hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} locale_code Locale of interaction to retrieve, default is en-us.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {InteractionListResult} OK. Successfully get all the interactions in the hub.
		 */
		Interactions_ListByHub(resourceGroupName: string, hubName: string, locale_code: string | null | undefined, api_version: string, subscriptionId: string): Observable<InteractionListResult> {
			return this.http.get<InteractionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/interactions&locale_code=' + (locale_code == null ? '' : encodeURIComponent(locale_code)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified interaction.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions/{interactionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} interactionName The name of the interaction.
		 * @param {string} locale_code Locale of interaction to retrieve, default is en-us.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {InteractionResourceFormat} OK. Successfully get the interaction.
		 */
		Interactions_Get(resourceGroupName: string, hubName: string, interactionName: string, locale_code: string | null | undefined, api_version: string, subscriptionId: string): Observable<InteractionResourceFormat> {
			return this.http.get<InteractionResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/interactions/' + (interactionName == null ? '' : encodeURIComponent(interactionName)) + '&locale_code=' + (locale_code == null ? '' : encodeURIComponent(locale_code)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates an interaction or updates an existing interaction within a hub.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions/{interactionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} interactionName The name of the interaction.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {InteractionResourceFormat} requestBody Parameters supplied to the CreateOrUpdate Interaction operation.
		 * @return {InteractionResourceFormat} OK. Successfully created the interaction.
		 */
		Interactions_CreateOrUpdate(resourceGroupName: string, hubName: string, interactionName: string, api_version: string, subscriptionId: string, requestBody: InteractionResourceFormat): Observable<InteractionResourceFormat> {
			return this.http.put<InteractionResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/interactions/' + (interactionName == null ? '' : encodeURIComponent(interactionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Suggests relationships to create relationship links.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/interactions/{interactionName}/suggestRelationshipLinks
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} interactionName The name of the interaction.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SuggestRelationshipLinksResponse} OK. Successfully get suggested Relationship Links.
		 */
		Interactions_SuggestRelationshipLinks(resourceGroupName: string, hubName: string, interactionName: string, api_version: string, subscriptionId: string): Observable<SuggestRelationshipLinksResponse> {
			return this.http.post<SuggestRelationshipLinksResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/interactions/' + (interactionName == null ? '' : encodeURIComponent(interactionName)) + '/suggestRelationshipLinks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets all the KPIs in the specified hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/kpi
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {KpiListResult} OK. Successfully get all the KPIs in the hub.
		 */
		Kpi_ListByHub(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string): Observable<KpiListResult> {
			return this.http.get<KpiListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/kpi&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a KPI in the hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/kpi/{kpiName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} kpiName The name of the KPI.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {KpiResourceFormat} OK. Successfully get the KPI.
		 */
		Kpi_Get(resourceGroupName: string, hubName: string, kpiName: string, api_version: string, subscriptionId: string): Observable<KpiResourceFormat> {
			return this.http.get<KpiResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/kpi/' + (kpiName == null ? '' : encodeURIComponent(kpiName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a KPI or updates an existing KPI in the hub.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/kpi/{kpiName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} kpiName The name of the KPI.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {KpiResourceFormat} requestBody Parameters supplied to the create/update KPI operation.
		 * @return {KpiResourceFormat} OK. Successfully created the KPI.
		 */
		Kpi_CreateOrUpdate(resourceGroupName: string, hubName: string, kpiName: string, api_version: string, subscriptionId: string, requestBody: KpiResourceFormat): Observable<KpiResourceFormat> {
			return this.http.put<KpiResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/kpi/' + (kpiName == null ? '' : encodeURIComponent(kpiName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a KPI in the hub.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/kpi/{kpiName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} kpiName The name of the KPI.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK. The KPI is deleted.
		 */
		Kpi_Delete(resourceGroupName: string, hubName: string, kpiName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/kpi/' + (kpiName == null ? '' : encodeURIComponent(kpiName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reprocesses the Kpi values of the specified KPI.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/kpi/{kpiName}/reprocess
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} kpiName The name of the KPI.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} 
		 */
		Kpi_Reprocess(resourceGroupName: string, hubName: string, kpiName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/kpi/' + (kpiName == null ? '' : encodeURIComponent(kpiName)) + '/reprocess&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the links in the specified hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/links
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {LinkListResult} OK. Successfully get all the links in the hub.
		 */
		Links_ListByHub(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string): Observable<LinkListResult> {
			return this.http.get<LinkListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/links&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a link in the hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/links/{linkName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} linkName The name of the link.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {LinkResourceFormat} OK. Successfully get the link.
		 */
		Links_Get(resourceGroupName: string, hubName: string, linkName: string, api_version: string, subscriptionId: string): Observable<LinkResourceFormat> {
			return this.http.get<LinkResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/links/' + (linkName == null ? '' : encodeURIComponent(linkName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a link or updates an existing link in the hub.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/links/{linkName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} linkName The name of the link.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {LinkResourceFormat} requestBody Parameters supplied to the CreateOrUpdate Link operation.
		 * @return {LinkResourceFormat} OK. Successfully created the link.
		 */
		Links_CreateOrUpdate(resourceGroupName: string, hubName: string, linkName: string, api_version: string, subscriptionId: string, requestBody: LinkResourceFormat): Observable<LinkResourceFormat> {
			return this.http.put<LinkResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/links/' + (linkName == null ? '' : encodeURIComponent(linkName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a link in the hub.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/links/{linkName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} linkName The name of the link.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK. The link is deleted.
		 */
		Links_Delete(resourceGroupName: string, hubName: string, linkName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/links/' + (linkName == null ? '' : encodeURIComponent(linkName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the predictions in the specified hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/predictions
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {PredictionListResult} OK. Successfully get all the predictions in the hub.
		 */
		Predictions_ListByHub(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string): Observable<PredictionListResult> {
			return this.http.get<PredictionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/predictions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a Prediction in the hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/predictions/{predictionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} predictionName The name of the Prediction.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {PredictionResourceFormat} OK. Successfully get the Prediction.
		 */
		Predictions_Get(resourceGroupName: string, hubName: string, predictionName: string, api_version: string, subscriptionId: string): Observable<PredictionResourceFormat> {
			return this.http.get<PredictionResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/predictions/' + (predictionName == null ? '' : encodeURIComponent(predictionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a Prediction or updates an existing Prediction in the hub.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/predictions/{predictionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} predictionName The name of the Prediction.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {PredictionResourceFormat} requestBody Parameters supplied to the create/update Prediction operation.
		 * @return {PredictionResourceFormat} OK. Successfully created the Prediction.
		 */
		Predictions_CreateOrUpdate(resourceGroupName: string, hubName: string, predictionName: string, api_version: string, subscriptionId: string, requestBody: PredictionResourceFormat): Observable<PredictionResourceFormat> {
			return this.http.put<PredictionResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/predictions/' + (predictionName == null ? '' : encodeURIComponent(predictionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Prediction in the hub.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/predictions/{predictionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} predictionName The name of the Prediction.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK. The Prediction is deleted.
		 */
		Predictions_Delete(resourceGroupName: string, hubName: string, predictionName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/predictions/' + (predictionName == null ? '' : encodeURIComponent(predictionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets model status of the prediction.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/predictions/{predictionName}/getModelStatus
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} predictionName The name of the Prediction.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {PredictionModelStatus} OK. Successfully get the model status.
		 */
		Predictions_GetModelStatus(resourceGroupName: string, hubName: string, predictionName: string, api_version: string, subscriptionId: string): Observable<PredictionModelStatus> {
			return this.http.post<PredictionModelStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/predictions/' + (predictionName == null ? '' : encodeURIComponent(predictionName)) + '/getModelStatus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets training results.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/predictions/{predictionName}/getTrainingResults
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} predictionName The name of the Prediction.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {PredictionTrainingResults} OK. Successfully get the training results.
		 */
		Predictions_GetTrainingResults(resourceGroupName: string, hubName: string, predictionName: string, api_version: string, subscriptionId: string): Observable<PredictionTrainingResults> {
			return this.http.post<PredictionTrainingResults>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/predictions/' + (predictionName == null ? '' : encodeURIComponent(predictionName)) + '/getTrainingResults&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Creates or updates the model status of prediction.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/predictions/{predictionName}/modelStatus
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} predictionName The name of the Prediction.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {PredictionModelStatus} requestBody Parameters supplied to the create/update prediction model status operation.
		 * @return {void} OK. Successfully created or updated the prediction model status.
		 */
		Predictions_ModelStatus(resourceGroupName: string, hubName: string, predictionName: string, api_version: string, subscriptionId: string, requestBody: PredictionModelStatus): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/predictions/' + (predictionName == null ? '' : encodeURIComponent(predictionName)) + '/modelStatus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all profile in the hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} locale_code Locale of profile to retrieve, default is en-us.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ProfileListResult} OK. Successfully get all the profiles in the hub.
		 */
		Profiles_ListByHub(resourceGroupName: string, hubName: string, locale_code: string | null | undefined, api_version: string, subscriptionId: string): Observable<ProfileListResult> {
			return this.http.get<ProfileListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/profiles&locale_code=' + (locale_code == null ? '' : encodeURIComponent(locale_code)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified profile.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles/{profileName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} profileName The name of the profile.
		 * @param {string} locale_code Locale of profile to retrieve, default is en-us.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ProfileResourceFormat} OK. Successfully get the profile.
		 */
		Profiles_Get(resourceGroupName: string, hubName: string, profileName: string, locale_code: string | null | undefined, api_version: string, subscriptionId: string): Observable<ProfileResourceFormat> {
			return this.http.get<ProfileResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/profiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '&locale_code=' + (locale_code == null ? '' : encodeURIComponent(locale_code)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a profile within a Hub, or updates an existing profile.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles/{profileName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} profileName The name of the profile.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ProfileResourceFormat} requestBody Parameters supplied to the create/delete Profile type operation
		 * @return {ProfileResourceFormat} OK. Successfully created the profile.
		 */
		Profiles_CreateOrUpdate(resourceGroupName: string, hubName: string, profileName: string, api_version: string, subscriptionId: string, requestBody: ProfileResourceFormat): Observable<ProfileResourceFormat> {
			return this.http.put<ProfileResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/profiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a profile within a hub
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles/{profileName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} profileName The name of the profile.
		 * @param {string} locale_code Locale of profile to retrieve, default is en-us.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK. The profile is deleted.
		 */
		Profiles_Delete(resourceGroupName: string, hubName: string, profileName: string, locale_code: string | null | undefined, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/profiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '&locale_code=' + (locale_code == null ? '' : encodeURIComponent(locale_code)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the KPIs that enrich the profile Type identified by the supplied name. Enrichment happens through participants of the Interaction on an Interaction KPI and through Relationships for Profile KPIs.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles/{profileName}/getEnrichingKpis
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} profileName The name of the profile.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {Array<KpiDefinition>} OK. Successfully get the enriching KPIs.
		 */
		Profiles_GetEnrichingKpis(resourceGroupName: string, hubName: string, profileName: string, api_version: string, subscriptionId: string): Observable<Array<KpiDefinition>> {
			return this.http.post<Array<KpiDefinition>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/profiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/getEnrichingKpis&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets all relationship links in the hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationshipLinks
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RelationshipLinkListResult} OK. Successfully get all the relationship links in the hub.
		 */
		RelationshipLinks_ListByHub(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string): Observable<RelationshipLinkListResult> {
			return this.http.get<RelationshipLinkListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/relationshipLinks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified relationship Link.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationshipLinks/{relationshipLinkName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} relationshipLinkName The name of the relationship link.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RelationshipLinkResourceFormat} OK. Successfully get the relationship link.
		 */
		RelationshipLinks_Get(resourceGroupName: string, hubName: string, relationshipLinkName: string, api_version: string, subscriptionId: string): Observable<RelationshipLinkResourceFormat> {
			return this.http.get<RelationshipLinkResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/relationshipLinks/' + (relationshipLinkName == null ? '' : encodeURIComponent(relationshipLinkName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a relationship link or updates an existing relationship link within a hub.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationshipLinks/{relationshipLinkName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} relationshipLinkName The name of the relationship link.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RelationshipLinkResourceFormat} requestBody Parameters supplied to the CreateOrUpdate relationship link operation.
		 * @return {RelationshipLinkResourceFormat} OK. Successfully created the relationship link.
		 */
		RelationshipLinks_CreateOrUpdate(resourceGroupName: string, hubName: string, relationshipLinkName: string, api_version: string, subscriptionId: string, requestBody: RelationshipLinkResourceFormat): Observable<RelationshipLinkResourceFormat> {
			return this.http.put<RelationshipLinkResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/relationshipLinks/' + (relationshipLinkName == null ? '' : encodeURIComponent(relationshipLinkName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a relationship link within a hub.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationshipLinks/{relationshipLinkName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} relationshipLinkName The name of the relationship.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK. The relationship link is deleted.
		 */
		RelationshipLinks_Delete(resourceGroupName: string, hubName: string, relationshipLinkName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/relationshipLinks/' + (relationshipLinkName == null ? '' : encodeURIComponent(relationshipLinkName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all relationships in the hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationships
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RelationshipListResult} OK. Successfully get all the relationships in the hub.
		 */
		Relationships_ListByHub(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string): Observable<RelationshipListResult> {
			return this.http.get<RelationshipListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/relationships&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified relationship.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationships/{relationshipName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} relationshipName The name of the relationship.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RelationshipResourceFormat} OK. Successfully get the relationship.
		 */
		Relationships_Get(resourceGroupName: string, hubName: string, relationshipName: string, api_version: string, subscriptionId: string): Observable<RelationshipResourceFormat> {
			return this.http.get<RelationshipResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/relationships/' + (relationshipName == null ? '' : encodeURIComponent(relationshipName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a relationship or updates an existing relationship within a hub.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationships/{relationshipName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} relationshipName The name of the Relationship.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RelationshipResourceFormat} requestBody Parameters supplied to the CreateOrUpdate Relationship operation.
		 * @return {RelationshipResourceFormat} OK. Successfully created the relationship.
		 */
		Relationships_CreateOrUpdate(resourceGroupName: string, hubName: string, relationshipName: string, api_version: string, subscriptionId: string, requestBody: RelationshipResourceFormat): Observable<RelationshipResourceFormat> {
			return this.http.put<RelationshipResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/relationships/' + (relationshipName == null ? '' : encodeURIComponent(relationshipName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a relationship within a hub.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/relationships/{relationshipName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} relationshipName The name of the relationship.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK. The relationship is deleted.
		 */
		Relationships_Delete(resourceGroupName: string, hubName: string, relationshipName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/relationships/' + (relationshipName == null ? '' : encodeURIComponent(relationshipName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the role assignments for the specified hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/roleAssignments
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RoleAssignmentListResult} OK. Successfully get all the role assignment in the hub.
		 */
		RoleAssignments_ListByHub(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string): Observable<RoleAssignmentListResult> {
			return this.http.get<RoleAssignmentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/roleAssignments&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the role assignment in the hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/roleAssignments/{assignmentName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} assignmentName The name of the role assignment.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RoleAssignmentResourceFormat} OK. Successfully get the role assignment.
		 */
		RoleAssignments_Get(resourceGroupName: string, hubName: string, assignmentName: string, api_version: string, subscriptionId: string): Observable<RoleAssignmentResourceFormat> {
			return this.http.get<RoleAssignmentResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/roleAssignments/' + (assignmentName == null ? '' : encodeURIComponent(assignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a role assignment in the hub.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/roleAssignments/{assignmentName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} assignmentName The assignment name
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RoleAssignmentResourceFormat} requestBody Parameters supplied to the CreateOrUpdate RoleAssignment operation.
		 * @return {RoleAssignmentResourceFormat} OK. Successfully created the role assignment.
		 */
		RoleAssignments_CreateOrUpdate(resourceGroupName: string, hubName: string, assignmentName: string, api_version: string, subscriptionId: string, requestBody: RoleAssignmentResourceFormat): Observable<RoleAssignmentResourceFormat> {
			return this.http.put<RoleAssignmentResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/roleAssignments/' + (assignmentName == null ? '' : encodeURIComponent(assignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the role assignment in the hub.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/roleAssignments/{assignmentName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} assignmentName The name of the role assignment.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} OK. The role assignment is deleted.
		 */
		RoleAssignments_Delete(resourceGroupName: string, hubName: string, assignmentName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/roleAssignments/' + (assignmentName == null ? '' : encodeURIComponent(assignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the roles for the hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/roles
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RoleListResult} OK. Successfully get all the roles in the hub.
		 */
		Roles_ListByHub(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string): Observable<RoleListResult> {
			return this.http.get<RoleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/roles&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all available views for given user in the specified hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/views
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} userId The user ID. Use * to retrieve hub level views.
		 * @return {ViewListResult} OK. Successfully get all the views in the hub for the given user.
		 */
		Views_ListByHub(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string, userId: string): Observable<ViewListResult> {
			return this.http.get<ViewListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/views&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Gets a view in the hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/views/{viewName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} viewName The name of the view.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} userId The user ID. Use * to retrieve hub level view.
		 * @return {ViewResourceFormat} OK. Successfully get the view.
		 */
		Views_Get(resourceGroupName: string, hubName: string, viewName: string, api_version: string, subscriptionId: string, userId: string): Observable<ViewResourceFormat> {
			return this.http.get<ViewResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/views/' + (viewName == null ? '' : encodeURIComponent(viewName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Creates a view or updates an existing view in the hub.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/views/{viewName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} viewName The name of the view.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ViewResourceFormat} requestBody Parameters supplied to the CreateOrUpdate View operation.
		 * @return {ViewResourceFormat} OK. Successfully created the view.
		 */
		Views_CreateOrUpdate(resourceGroupName: string, hubName: string, viewName: string, api_version: string, subscriptionId: string, requestBody: ViewResourceFormat): Observable<ViewResourceFormat> {
			return this.http.put<ViewResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/views/' + (viewName == null ? '' : encodeURIComponent(viewName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a view in the specified hub.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/views/{viewName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} viewName The name of the view.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} userId The user ID. Use * to retrieve hub level view.
		 * @return {void} OK. The view is deleted.
		 */
		Views_Delete(resourceGroupName: string, hubName: string, viewName: string, api_version: string, subscriptionId: string, userId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/views/' + (viewName == null ? '' : encodeURIComponent(viewName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all available widget types in the specified hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/widgetTypes
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {WidgetTypeListResult} OK. Successfully get all the widget types in the hub.
		 */
		WidgetTypes_ListByHub(resourceGroupName: string, hubName: string, api_version: string, subscriptionId: string): Observable<WidgetTypeListResult> {
			return this.http.get<WidgetTypeListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/widgetTypes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a widget type in the specified hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/widgetTypes/{widgetTypeName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} hubName The name of the hub.
		 * @param {string} widgetTypeName The name of the widget type.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {WidgetTypeResourceFormat} OK. Successfully get the widget type.
		 */
		WidgetTypes_Get(resourceGroupName: string, hubName: string, widgetTypeName: string, api_version: string, subscriptionId: string): Observable<WidgetTypeResourceFormat> {
			return this.http.get<WidgetTypeResourceFormat>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomerInsights/hubs/' + (hubName == null ? '' : encodeURIComponent(hubName)) + '/widgetTypes/' + (widgetTypeName == null ? '' : encodeURIComponent(widgetTypeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

