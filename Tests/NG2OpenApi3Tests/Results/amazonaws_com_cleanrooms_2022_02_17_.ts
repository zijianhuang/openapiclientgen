import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchGetCollaborationAnalysisTemplateOutput {

		/** Required */
		collaborationAnalysisTemplates: Array<CollaborationAnalysisTemplate>;

		/** Required */
		errors: Array<BatchGetCollaborationAnalysisTemplateError>;
	}
	export interface BatchGetCollaborationAnalysisTemplateOutputFormProperties {
	}
	export function CreateBatchGetCollaborationAnalysisTemplateOutputFormGroup() {
		return new FormGroup<BatchGetCollaborationAnalysisTemplateOutputFormProperties>({
		});

	}


	/** The analysis template within a collaboration. */
	export interface CollaborationAnalysisTemplate {

		/** Required */
		id: string;

		/** Required */
		arn: string;

		/** Required */
		collaborationId: string;

		/** Required */
		collaborationArn: string;
		description?: string;

		/** Required */
		creatorAccountId: string;

		/** Required */
		name: string;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		schema: AnalysisSchema;

		/** Required */
		format: AnalysisFormat;

		/** Required */
		source: AnalysisSource;
		analysisParameters?: Array<AnalysisParameter>;
	}

	/** The analysis template within a collaboration. */
	export interface CollaborationAnalysisTemplateFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		collaborationId: FormControl<string | null | undefined>,

		/** Required */
		collaborationArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creatorAccountId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		format: FormControl<AnalysisFormat | null | undefined>,
	}
	export function CreateCollaborationAnalysisTemplateFormGroup() {
		return new FormGroup<CollaborationAnalysisTemplateFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			creatorAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<AnalysisFormat | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A relation within an analysis. */
	export interface AnalysisSchema {
		referencedTables?: Array<string>;
	}

	/** A relation within an analysis. */
	export interface AnalysisSchemaFormProperties {
	}
	export function CreateAnalysisSchemaFormGroup() {
		return new FormGroup<AnalysisSchemaFormProperties>({
		});

	}

	export enum AnalysisFormat { SQL = 'SQL' }


	/** The structure that defines the body of the analysis template. */
	export interface AnalysisSource {
		text?: string;
	}

	/** The structure that defines the body of the analysis template. */
	export interface AnalysisSourceFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateAnalysisSourceFormGroup() {
		return new FormGroup<AnalysisSourceFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Optional. The member who can query can provide this placeholder for a literal data value in an analysis template. */
	export interface AnalysisParameter {

		/** Required */
		name: string;

		/** Required */
		type: ParameterType;
		defaultValue?: string;
	}

	/** Optional. The member who can query can provide this placeholder for a literal data value in an analysis template. */
	export interface AnalysisParameterFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ParameterType | null | undefined>,
		defaultValue: FormControl<string | null | undefined>,
	}
	export function CreateAnalysisParameterFormGroup() {
		return new FormGroup<AnalysisParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ParameterType | null | undefined>(undefined, [Validators.required]),
			defaultValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ParameterType { SMALLINT = 'SMALLINT', INTEGER = 'INTEGER', BIGINT = 'BIGINT', DECIMAL = 'DECIMAL', REAL = 'REAL', DOUBLE_PRECISION = 'DOUBLE_PRECISION', BOOLEAN = 'BOOLEAN', CHAR = 'CHAR', VARCHAR = 'VARCHAR', DATE = 'DATE', TIMESTAMP = 'TIMESTAMP', TIMESTAMPTZ = 'TIMESTAMPTZ', TIME = 'TIME', TIMETZ = 'TIMETZ', VARBYTE = 'VARBYTE' }


	/** Details of errors thrown by the call to retrieve multiple analysis templates within a collaboration by their identifiers. */
	export interface BatchGetCollaborationAnalysisTemplateError {

		/** Required */
		arn: string;

		/** Required */
		code: string;

		/** Required */
		message: string;
	}

	/** Details of errors thrown by the call to retrieve multiple analysis templates within a collaboration by their identifiers. */
	export interface BatchGetCollaborationAnalysisTemplateErrorFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetCollaborationAnalysisTemplateErrorFormGroup() {
		return new FormGroup<BatchGetCollaborationAnalysisTemplateErrorFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface BatchGetSchemaOutput {

		/** Required */
		schemas: Array<Schema>;

		/** Required */
		errors: Array<BatchGetSchemaError>;
	}
	export interface BatchGetSchemaOutputFormProperties {
	}
	export function CreateBatchGetSchemaOutputFormGroup() {
		return new FormGroup<BatchGetSchemaOutputFormProperties>({
		});

	}


	/** A schema is a relation within a collaboration. */
	export interface Schema {

		/** Required */
		columns: Array<Column>;

		/** Required */
		partitionKeys: Array<Column>;

		/** Required */
		analysisRuleTypes: Array<AnalysisRuleType>;
		analysisMethod?: AnalysisMethod;

		/** Required */
		creatorAccountId: string;

		/** Required */
		name: string;

		/** Required */
		collaborationId: string;

		/** Required */
		collaborationArn: string;

		/** Required */
		description: string;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		type: SchemaType;
	}

	/** A schema is a relation within a collaboration. */
	export interface SchemaFormProperties {
		analysisMethod: FormControl<AnalysisMethod | null | undefined>,

		/** Required */
		creatorAccountId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		collaborationId: FormControl<string | null | undefined>,

		/** Required */
		collaborationArn: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		type: FormControl<SchemaType | null | undefined>,
	}
	export function CreateSchemaFormGroup() {
		return new FormGroup<SchemaFormProperties>({
			analysisMethod: new FormControl<AnalysisMethod | null | undefined>(undefined),
			creatorAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SchemaType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A column within a schema relation, derived from the underlying Glue table. */
	export interface Column {

		/** Required */
		name: string;

		/** Required */
		type: string;
	}

	/** A column within a schema relation, derived from the underlying Glue table. */
	export interface ColumnFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateColumnFormGroup() {
		return new FormGroup<ColumnFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AnalysisRuleType { AGGREGATION = 'AGGREGATION', LIST = 'LIST', CUSTOM = 'CUSTOM' }

	export enum AnalysisMethod { DIRECT_QUERY = 'DIRECT_QUERY' }

	export enum SchemaType { TABLE = 'TABLE' }


	/** An error describing why a schema could not be fetched. */
	export interface BatchGetSchemaError {

		/** Required */
		name: string;

		/** Required */
		code: string;

		/** Required */
		message: string;
	}

	/** An error describing why a schema could not be fetched. */
	export interface BatchGetSchemaErrorFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetSchemaErrorFormGroup() {
		return new FormGroup<BatchGetSchemaErrorFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAnalysisTemplateOutput {

		/** Required */
		analysisTemplate: AnalysisTemplate;
	}
	export interface CreateAnalysisTemplateOutputFormProperties {
	}
	export function CreateCreateAnalysisTemplateOutputFormGroup() {
		return new FormGroup<CreateAnalysisTemplateOutputFormProperties>({
		});

	}


	/** The analysis template. */
	export interface AnalysisTemplate {

		/** Required */
		id: string;

		/** Required */
		arn: string;

		/** Required */
		collaborationId: string;

		/** Required */
		collaborationArn: string;

		/** Required */
		membershipId: string;

		/** Required */
		membershipArn: string;
		description?: string;

		/** Required */
		name: string;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		schema: AnalysisSchema;

		/** Required */
		format: AnalysisFormat;

		/** Required */
		source: AnalysisSource;
		analysisParameters?: Array<AnalysisParameter>;
	}

	/** The analysis template. */
	export interface AnalysisTemplateFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		collaborationId: FormControl<string | null | undefined>,

		/** Required */
		collaborationArn: FormControl<string | null | undefined>,

		/** Required */
		membershipId: FormControl<string | null | undefined>,

		/** Required */
		membershipArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		format: FormControl<AnalysisFormat | null | undefined>,
	}
	export function CreateAnalysisTemplateFormGroup() {
		return new FormGroup<AnalysisTemplateFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			membershipId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			membershipArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<AnalysisFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateCollaborationOutput {

		/** Required */
		collaboration: Collaboration;
	}
	export interface CreateCollaborationOutputFormProperties {
	}
	export function CreateCreateCollaborationOutputFormGroup() {
		return new FormGroup<CreateCollaborationOutputFormProperties>({
		});

	}


	/** The multi-party data share environment. The collaboration contains metadata about its purpose and participants. */
	export interface Collaboration {

		/** Required */
		id: string;

		/** Required */
		arn: string;

		/** Required */
		name: string;
		description?: string;

		/** Required */
		creatorAccountId: string;

		/** Required */
		creatorDisplayName: string;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		memberStatus: MemberStatus;
		membershipId?: string;
		membershipArn?: string;
		dataEncryptionMetadata?: DataEncryptionMetadata;

		/** Required */
		queryLogStatus: CollaborationQueryLogStatus;
	}

	/** The multi-party data share environment. The collaboration contains metadata about its purpose and participants. */
	export interface CollaborationFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creatorAccountId: FormControl<string | null | undefined>,

		/** Required */
		creatorDisplayName: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		memberStatus: FormControl<MemberStatus | null | undefined>,
		membershipId: FormControl<string | null | undefined>,
		membershipArn: FormControl<string | null | undefined>,

		/** Required */
		queryLogStatus: FormControl<CollaborationQueryLogStatus | null | undefined>,
	}
	export function CreateCollaborationFormGroup() {
		return new FormGroup<CollaborationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			creatorAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creatorDisplayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			memberStatus: new FormControl<MemberStatus | null | undefined>(undefined, [Validators.required]),
			membershipId: new FormControl<string | null | undefined>(undefined),
			membershipArn: new FormControl<string | null | undefined>(undefined),
			queryLogStatus: new FormControl<CollaborationQueryLogStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MemberStatus { INVITED = 'INVITED', ACTIVE = 'ACTIVE', LEFT = 'LEFT', REMOVED = 'REMOVED' }


	/** The settings for client-side encryption for cryptographic computing. */
	export interface DataEncryptionMetadata {

		/** Required */
		allowCleartext: boolean;

		/** Required */
		allowDuplicates: boolean;

		/** Required */
		allowJoinsOnColumnsWithDifferentNames: boolean;

		/** Required */
		preserveNulls: boolean;
	}

	/** The settings for client-side encryption for cryptographic computing. */
	export interface DataEncryptionMetadataFormProperties {

		/** Required */
		allowCleartext: FormControl<boolean | null | undefined>,

		/** Required */
		allowDuplicates: FormControl<boolean | null | undefined>,

		/** Required */
		allowJoinsOnColumnsWithDifferentNames: FormControl<boolean | null | undefined>,

		/** Required */
		preserveNulls: FormControl<boolean | null | undefined>,
	}
	export function CreateDataEncryptionMetadataFormGroup() {
		return new FormGroup<DataEncryptionMetadataFormProperties>({
			allowCleartext: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowDuplicates: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowJoinsOnColumnsWithDifferentNames: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			preserveNulls: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CollaborationQueryLogStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** Basic metadata used to construct a new member. */
	export interface MemberSpecification {

		/** Required */
		accountId: string;

		/** Required */
		memberAbilities: Array<MemberAbility>;

		/** Required */
		displayName: string;
	}

	/** Basic metadata used to construct a new member. */
	export interface MemberSpecificationFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,

		/** Required */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateMemberSpecificationFormGroup() {
		return new FormGroup<MemberSpecificationFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MemberAbility { CAN_QUERY = 'CAN_QUERY', CAN_RECEIVE_RESULTS = 'CAN_RECEIVE_RESULTS' }

	export interface CreateConfiguredTableOutput {

		/** Required */
		configuredTable: ConfiguredTable;
	}
	export interface CreateConfiguredTableOutputFormProperties {
	}
	export function CreateCreateConfiguredTableOutputFormGroup() {
		return new FormGroup<CreateConfiguredTableOutputFormProperties>({
		});

	}


	/** A table that has been configured for use in a collaboration. */
	export interface ConfiguredTable {

		/** Required */
		id: string;

		/** Required */
		arn: string;

		/** Required */
		name: string;
		description?: string;

		/** Required */
		tableReference: TableReference;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		analysisRuleTypes: Array<ConfiguredTableAnalysisRuleType>;

		/** Required */
		analysisMethod: AnalysisMethod;

		/** Required */
		allowedColumns: Array<string>;
	}

	/** A table that has been configured for use in a collaboration. */
	export interface ConfiguredTableFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		analysisMethod: FormControl<AnalysisMethod | null | undefined>,
	}
	export function CreateConfiguredTableFormGroup() {
		return new FormGroup<ConfiguredTableFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			analysisMethod: new FormControl<AnalysisMethod | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A pointer to the dataset that underlies this table. Currently, this can only be an Glue table. */
	export interface TableReference {
		glue?: GlueTableReference;
	}

	/** A pointer to the dataset that underlies this table. Currently, this can only be an Glue table. */
	export interface TableReferenceFormProperties {
	}
	export function CreateTableReferenceFormGroup() {
		return new FormGroup<TableReferenceFormProperties>({
		});

	}


	/** A reference to a table within an Glue data catalog. */
	export interface GlueTableReference {

		/** Required */
		tableName: string;

		/** Required */
		databaseName: string;
	}

	/** A reference to a table within an Glue data catalog. */
	export interface GlueTableReferenceFormProperties {

		/** Required */
		tableName: FormControl<string | null | undefined>,

		/** Required */
		databaseName: FormControl<string | null | undefined>,
	}
	export function CreateGlueTableReferenceFormGroup() {
		return new FormGroup<GlueTableReferenceFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			databaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConfiguredTableAnalysisRuleType { AGGREGATION = 'AGGREGATION', LIST = 'LIST', CUSTOM = 'CUSTOM' }

	export interface CreateConfiguredTableAnalysisRuleOutput {

		/** Required */
		analysisRule: ConfiguredTableAnalysisRule;
	}
	export interface CreateConfiguredTableAnalysisRuleOutputFormProperties {
	}
	export function CreateCreateConfiguredTableAnalysisRuleOutputFormGroup() {
		return new FormGroup<CreateConfiguredTableAnalysisRuleOutputFormProperties>({
		});

	}


	/** A configured table analysis rule, which limits how data for this table can be used. */
	export interface ConfiguredTableAnalysisRule {

		/** Required */
		configuredTableId: string;

		/** Required */
		configuredTableArn: string;

		/** Required */
		policy: ConfiguredTableAnalysisRulePolicy;

		/** Required */
		type: AnalysisRuleType;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;
	}

	/** A configured table analysis rule, which limits how data for this table can be used. */
	export interface ConfiguredTableAnalysisRuleFormProperties {

		/** Required */
		configuredTableId: FormControl<string | null | undefined>,

		/** Required */
		configuredTableArn: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AnalysisRuleType | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateConfiguredTableAnalysisRuleFormGroup() {
		return new FormGroup<ConfiguredTableAnalysisRuleFormProperties>({
			configuredTableId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			configuredTableArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AnalysisRuleType | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Controls on the query specifications that can be run on a configured table. */
	export interface ConfiguredTableAnalysisRulePolicy {
		v1?: ConfiguredTableAnalysisRulePolicyV1;
	}

	/** Controls on the query specifications that can be run on a configured table. */
	export interface ConfiguredTableAnalysisRulePolicyFormProperties {
	}
	export function CreateConfiguredTableAnalysisRulePolicyFormGroup() {
		return new FormGroup<ConfiguredTableAnalysisRulePolicyFormProperties>({
		});

	}


	/** Controls on the query specifications that can be run on a configured table. */
	export interface ConfiguredTableAnalysisRulePolicyV1 {
		list?: AnalysisRuleList;
		aggregation?: AnalysisRuleAggregation;

		/** A type of analysis rule that enables the table owner to approve custom SQL queries on their configured tables. */
		custom?: AnalysisRuleCustom;
	}

	/** Controls on the query specifications that can be run on a configured table. */
	export interface ConfiguredTableAnalysisRulePolicyV1FormProperties {
	}
	export function CreateConfiguredTableAnalysisRulePolicyV1FormGroup() {
		return new FormGroup<ConfiguredTableAnalysisRulePolicyV1FormProperties>({
		});

	}


	/** A type of analysis rule that enables row-level analysis. */
	export interface AnalysisRuleList {

		/** Required */
		joinColumns: Array<string>;
		allowedJoinOperators?: Array<JoinOperator>;

		/** Required */
		listColumns: Array<string>;
	}

	/** A type of analysis rule that enables row-level analysis. */
	export interface AnalysisRuleListFormProperties {
	}
	export function CreateAnalysisRuleListFormGroup() {
		return new FormGroup<AnalysisRuleListFormProperties>({
		});

	}

	export enum JoinOperator { OR = 'OR', AND = 'AND' }


	/** A type of analysis rule that enables query structure and specified queries that produce aggregate statistics. */
	export interface AnalysisRuleAggregation {

		/** Required */
		aggregateColumns: Array<AggregateColumn>;

		/** Required */
		joinColumns: Array<string>;
		joinRequired?: JoinRequiredOption;
		allowedJoinOperators?: Array<JoinOperator>;

		/** Required */
		dimensionColumns: Array<string>;

		/** Required */
		scalarFunctions: Array<ScalarFunctions>;

		/** Required */
		outputConstraints: Array<AggregationConstraint>;
	}

	/** A type of analysis rule that enables query structure and specified queries that produce aggregate statistics. */
	export interface AnalysisRuleAggregationFormProperties {
		joinRequired: FormControl<JoinRequiredOption | null | undefined>,
	}
	export function CreateAnalysisRuleAggregationFormGroup() {
		return new FormGroup<AnalysisRuleAggregationFormProperties>({
			joinRequired: new FormControl<JoinRequiredOption | null | undefined>(undefined),
		});

	}


	/** Column in configured table that can be used in aggregate function in query. */
	export interface AggregateColumn {

		/** Required */
		columnNames: Array<string>;

		/** Required */
		function: AggregateFunctionName;
	}

	/** Column in configured table that can be used in aggregate function in query. */
	export interface AggregateColumnFormProperties {

		/** Required */
		function: FormControl<AggregateFunctionName | null | undefined>,
	}
	export function CreateAggregateColumnFormGroup() {
		return new FormGroup<AggregateColumnFormProperties>({
			function: new FormControl<AggregateFunctionName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AggregateFunctionName { SUM = 'SUM', SUM_DISTINCT = 'SUM_DISTINCT', COUNT = 'COUNT', COUNT_DISTINCT = 'COUNT_DISTINCT', AVG = 'AVG' }

	export enum JoinRequiredOption { QUERY_RUNNER = 'QUERY_RUNNER' }

	export enum ScalarFunctions { TRUNC = 'TRUNC', ABS = 'ABS', CEILING = 'CEILING', FLOOR = 'FLOOR', LN = 'LN', LOG = 'LOG', ROUND = 'ROUND', SQRT = 'SQRT', CAST = 'CAST', LOWER = 'LOWER', RTRIM = 'RTRIM', UPPER = 'UPPER', COALESCE = 'COALESCE' }


	/** Constraint on query output removing output rows that do not meet a minimum number of distinct values of a specified column. */
	export interface AggregationConstraint {

		/** Required */
		columnName: string;

		/** Required */
		minimum: number;

		/** Required */
		type: AggregationType;
	}

	/** Constraint on query output removing output rows that do not meet a minimum number of distinct values of a specified column. */
	export interface AggregationConstraintFormProperties {

		/** Required */
		columnName: FormControl<string | null | undefined>,

		/** Required */
		minimum: FormControl<number | null | undefined>,

		/** Required */
		type: FormControl<AggregationType | null | undefined>,
	}
	export function CreateAggregationConstraintFormGroup() {
		return new FormGroup<AggregationConstraintFormProperties>({
			columnName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			minimum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AggregationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AggregationType { COUNT_DISTINCT = 'COUNT_DISTINCT' }


	/** A type of analysis rule that enables the table owner to approve custom SQL queries on their configured tables. */
	export interface AnalysisRuleCustom {

		/** Required */
		allowedAnalyses: Array<string>;
		allowedAnalysisProviders?: Array<string>;
	}

	/** A type of analysis rule that enables the table owner to approve custom SQL queries on their configured tables. */
	export interface AnalysisRuleCustomFormProperties {
	}
	export function CreateAnalysisRuleCustomFormGroup() {
		return new FormGroup<AnalysisRuleCustomFormProperties>({
		});

	}

	export interface CreateConfiguredTableAssociationOutput {

		/** Required */
		configuredTableAssociation: ConfiguredTableAssociation;
	}
	export interface CreateConfiguredTableAssociationOutputFormProperties {
	}
	export function CreateCreateConfiguredTableAssociationOutputFormGroup() {
		return new FormGroup<CreateConfiguredTableAssociationOutputFormProperties>({
		});

	}


	/** A configured table association links a configured table to a collaboration. */
	export interface ConfiguredTableAssociation {

		/** Required */
		arn: string;

		/** Required */
		id: string;

		/** Required */
		configuredTableId: string;

		/** Required */
		configuredTableArn: string;

		/** Required */
		membershipId: string;

		/** Required */
		membershipArn: string;

		/** Required */
		roleArn: string;

		/** Required */
		name: string;
		description?: string;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;
	}

	/** A configured table association links a configured table to a collaboration. */
	export interface ConfiguredTableAssociationFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		configuredTableId: FormControl<string | null | undefined>,

		/** Required */
		configuredTableArn: FormControl<string | null | undefined>,

		/** Required */
		membershipId: FormControl<string | null | undefined>,

		/** Required */
		membershipArn: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateConfiguredTableAssociationFormGroup() {
		return new FormGroup<ConfiguredTableAssociationFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			configuredTableId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			configuredTableArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			membershipId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			membershipArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMembershipOutput {

		/** Required */
		membership: Membership;
	}
	export interface CreateMembershipOutputFormProperties {
	}
	export function CreateCreateMembershipOutputFormGroup() {
		return new FormGroup<CreateMembershipOutputFormProperties>({
		});

	}


	/** The membership object. */
	export interface Membership {

		/** Required */
		id: string;

		/** Required */
		arn: string;

		/** Required */
		collaborationArn: string;

		/** Required */
		collaborationId: string;

		/** Required */
		collaborationCreatorAccountId: string;

		/** Required */
		collaborationCreatorDisplayName: string;

		/** Required */
		collaborationName: string;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		status: MembershipStatus;

		/** Required */
		memberAbilities: Array<MemberAbility>;

		/** Required */
		queryLogStatus: CollaborationQueryLogStatus;
	}

	/** The membership object. */
	export interface MembershipFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		collaborationArn: FormControl<string | null | undefined>,

		/** Required */
		collaborationId: FormControl<string | null | undefined>,

		/** Required */
		collaborationCreatorAccountId: FormControl<string | null | undefined>,

		/** Required */
		collaborationCreatorDisplayName: FormControl<string | null | undefined>,

		/** Required */
		collaborationName: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<MembershipStatus | null | undefined>,

		/** Required */
		queryLogStatus: FormControl<CollaborationQueryLogStatus | null | undefined>,
	}
	export function CreateMembershipFormGroup() {
		return new FormGroup<MembershipFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationCreatorAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationCreatorDisplayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<MembershipStatus | null | undefined>(undefined, [Validators.required]),
			queryLogStatus: new FormControl<CollaborationQueryLogStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MembershipStatus { ACTIVE = 'ACTIVE', REMOVED = 'REMOVED', COLLABORATION_DELETED = 'COLLABORATION_DELETED' }

	export interface DeleteAnalysisTemplateOutput {
	}
	export interface DeleteAnalysisTemplateOutputFormProperties {
	}
	export function CreateDeleteAnalysisTemplateOutputFormGroup() {
		return new FormGroup<DeleteAnalysisTemplateOutputFormProperties>({
		});

	}

	export interface DeleteCollaborationOutput {
	}
	export interface DeleteCollaborationOutputFormProperties {
	}
	export function CreateDeleteCollaborationOutputFormGroup() {
		return new FormGroup<DeleteCollaborationOutputFormProperties>({
		});

	}


	/** The empty output for a successful deletion. */
	export interface DeleteConfiguredTableOutput {
	}

	/** The empty output for a successful deletion. */
	export interface DeleteConfiguredTableOutputFormProperties {
	}
	export function CreateDeleteConfiguredTableOutputFormGroup() {
		return new FormGroup<DeleteConfiguredTableOutputFormProperties>({
		});

	}


	/** An empty response that indicates a successful delete. */
	export interface DeleteConfiguredTableAnalysisRuleOutput {
	}

	/** An empty response that indicates a successful delete. */
	export interface DeleteConfiguredTableAnalysisRuleOutputFormProperties {
	}
	export function CreateDeleteConfiguredTableAnalysisRuleOutputFormGroup() {
		return new FormGroup<DeleteConfiguredTableAnalysisRuleOutputFormProperties>({
		});

	}

	export interface DeleteConfiguredTableAssociationOutput {
	}
	export interface DeleteConfiguredTableAssociationOutputFormProperties {
	}
	export function CreateDeleteConfiguredTableAssociationOutputFormGroup() {
		return new FormGroup<DeleteConfiguredTableAssociationOutputFormProperties>({
		});

	}

	export interface DeleteMemberOutput {
	}
	export interface DeleteMemberOutputFormProperties {
	}
	export function CreateDeleteMemberOutputFormGroup() {
		return new FormGroup<DeleteMemberOutputFormProperties>({
		});

	}

	export interface DeleteMembershipOutput {
	}
	export interface DeleteMembershipOutputFormProperties {
	}
	export function CreateDeleteMembershipOutputFormGroup() {
		return new FormGroup<DeleteMembershipOutputFormProperties>({
		});

	}

	export interface GetAnalysisTemplateOutput {

		/** Required */
		analysisTemplate: AnalysisTemplate;
	}
	export interface GetAnalysisTemplateOutputFormProperties {
	}
	export function CreateGetAnalysisTemplateOutputFormGroup() {
		return new FormGroup<GetAnalysisTemplateOutputFormProperties>({
		});

	}

	export interface GetCollaborationOutput {

		/** Required */
		collaboration: Collaboration;
	}
	export interface GetCollaborationOutputFormProperties {
	}
	export function CreateGetCollaborationOutputFormGroup() {
		return new FormGroup<GetCollaborationOutputFormProperties>({
		});

	}

	export interface GetCollaborationAnalysisTemplateOutput {

		/** Required */
		collaborationAnalysisTemplate: CollaborationAnalysisTemplate;
	}
	export interface GetCollaborationAnalysisTemplateOutputFormProperties {
	}
	export function CreateGetCollaborationAnalysisTemplateOutputFormGroup() {
		return new FormGroup<GetCollaborationAnalysisTemplateOutputFormProperties>({
		});

	}

	export interface GetConfiguredTableOutput {

		/** Required */
		configuredTable: ConfiguredTable;
	}
	export interface GetConfiguredTableOutputFormProperties {
	}
	export function CreateGetConfiguredTableOutputFormGroup() {
		return new FormGroup<GetConfiguredTableOutputFormProperties>({
		});

	}

	export interface GetConfiguredTableAnalysisRuleOutput {

		/** Required */
		analysisRule: ConfiguredTableAnalysisRule;
	}
	export interface GetConfiguredTableAnalysisRuleOutputFormProperties {
	}
	export function CreateGetConfiguredTableAnalysisRuleOutputFormGroup() {
		return new FormGroup<GetConfiguredTableAnalysisRuleOutputFormProperties>({
		});

	}

	export interface GetConfiguredTableAssociationOutput {

		/** Required */
		configuredTableAssociation: ConfiguredTableAssociation;
	}
	export interface GetConfiguredTableAssociationOutputFormProperties {
	}
	export function CreateGetConfiguredTableAssociationOutputFormGroup() {
		return new FormGroup<GetConfiguredTableAssociationOutputFormProperties>({
		});

	}

	export interface GetMembershipOutput {

		/** Required */
		membership: Membership;
	}
	export interface GetMembershipOutputFormProperties {
	}
	export function CreateGetMembershipOutputFormGroup() {
		return new FormGroup<GetMembershipOutputFormProperties>({
		});

	}

	export interface GetProtectedQueryOutput {

		/** Required */
		protectedQuery: ProtectedQuery;
	}
	export interface GetProtectedQueryOutputFormProperties {
	}
	export function CreateGetProtectedQueryOutputFormGroup() {
		return new FormGroup<GetProtectedQueryOutputFormProperties>({
		});

	}


	/** The parameters for an Clean Rooms protected query. */
	export interface ProtectedQuery {

		/** Required */
		id: string;

		/** Required */
		membershipId: string;

		/** Required */
		membershipArn: string;

		/** Required */
		createTime: Date;

		/** Required */
		sqlParameters: ProtectedQuerySQLParameters;

		/** Required */
		status: ProtectedQueryStatus;

		/** Required */
		resultConfiguration: ProtectedQueryResultConfiguration;
		statistics?: ProtectedQueryStatistics;
		result?: ProtectedQueryResult;
		error?: ProtectedQueryError;
	}

	/** The parameters for an Clean Rooms protected query. */
	export interface ProtectedQueryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		membershipId: FormControl<string | null | undefined>,

		/** Required */
		membershipArn: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<ProtectedQueryStatus | null | undefined>,
	}
	export function CreateProtectedQueryFormGroup() {
		return new FormGroup<ProtectedQueryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			membershipId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			membershipArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ProtectedQueryStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters for the SQL type Protected Query. */
	export interface ProtectedQuerySQLParameters {
		queryString?: string;
		analysisTemplateArn?: string;
		parameters?: ParameterMap;
	}

	/** The parameters for the SQL type Protected Query. */
	export interface ProtectedQuerySQLParametersFormProperties {
		queryString: FormControl<string | null | undefined>,
		analysisTemplateArn: FormControl<string | null | undefined>,
	}
	export function CreateProtectedQuerySQLParametersFormGroup() {
		return new FormGroup<ProtectedQuerySQLParametersFormProperties>({
			queryString: new FormControl<string | null | undefined>(undefined),
			analysisTemplateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ParameterMap {
	}
	export interface ParameterMapFormProperties {
	}
	export function CreateParameterMapFormGroup() {
		return new FormGroup<ParameterMapFormProperties>({
		});

	}

	export enum ProtectedQueryStatus { SUBMITTED = 'SUBMITTED', STARTED = 'STARTED', CANCELLED = 'CANCELLED', CANCELLING = 'CANCELLING', FAILED = 'FAILED', SUCCESS = 'SUCCESS', TIMED_OUT = 'TIMED_OUT' }


	/** Contains configurations for protected query results. */
	export interface ProtectedQueryResultConfiguration {

		/** Required */
		outputConfiguration: ProtectedQueryOutputConfiguration;
	}

	/** Contains configurations for protected query results. */
	export interface ProtectedQueryResultConfigurationFormProperties {
	}
	export function CreateProtectedQueryResultConfigurationFormGroup() {
		return new FormGroup<ProtectedQueryResultConfigurationFormProperties>({
		});

	}


	/** Contains configuration details for protected query output. */
	export interface ProtectedQueryOutputConfiguration {
		s3?: ProtectedQueryS3OutputConfiguration;
	}

	/** Contains configuration details for protected query output. */
	export interface ProtectedQueryOutputConfigurationFormProperties {
	}
	export function CreateProtectedQueryOutputConfigurationFormGroup() {
		return new FormGroup<ProtectedQueryOutputConfigurationFormProperties>({
		});

	}


	/** Contains the configuration to write the query results to S3. */
	export interface ProtectedQueryS3OutputConfiguration {

		/** Required */
		resultFormat: ResultFormat;

		/** Required */
		bucket: string;
		keyPrefix?: string;
	}

	/** Contains the configuration to write the query results to S3. */
	export interface ProtectedQueryS3OutputConfigurationFormProperties {

		/** Required */
		resultFormat: FormControl<ResultFormat | null | undefined>,

		/** Required */
		bucket: FormControl<string | null | undefined>,
		keyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateProtectedQueryS3OutputConfigurationFormGroup() {
		return new FormGroup<ProtectedQueryS3OutputConfigurationFormProperties>({
			resultFormat: new FormControl<ResultFormat | null | undefined>(undefined, [Validators.required]),
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResultFormat { CSV = 'CSV', PARQUET = 'PARQUET' }


	/** Contains statistics about the execution of the protected query. */
	export interface ProtectedQueryStatistics {
		totalDurationInMillis?: number | null;
	}

	/** Contains statistics about the execution of the protected query. */
	export interface ProtectedQueryStatisticsFormProperties {
		totalDurationInMillis: FormControl<number | null | undefined>,
	}
	export function CreateProtectedQueryStatisticsFormGroup() {
		return new FormGroup<ProtectedQueryStatisticsFormProperties>({
			totalDurationInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details about the query results. */
	export interface ProtectedQueryResult {

		/** Required */
		output: ProtectedQueryOutput;
	}

	/** Details about the query results. */
	export interface ProtectedQueryResultFormProperties {
	}
	export function CreateProtectedQueryResultFormGroup() {
		return new FormGroup<ProtectedQueryResultFormProperties>({
		});

	}


	/** Contains details about the protected query output. */
	export interface ProtectedQueryOutput {
		s3?: ProtectedQueryS3Output;
	}

	/** Contains details about the protected query output. */
	export interface ProtectedQueryOutputFormProperties {
	}
	export function CreateProtectedQueryOutputFormGroup() {
		return new FormGroup<ProtectedQueryOutputFormProperties>({
		});

	}


	/** Contains output information for protected queries with an S3 output type. */
	export interface ProtectedQueryS3Output {

		/** Required */
		location: string;
	}

	/** Contains output information for protected queries with an S3 output type. */
	export interface ProtectedQueryS3OutputFormProperties {

		/** Required */
		location: FormControl<string | null | undefined>,
	}
	export function CreateProtectedQueryS3OutputFormGroup() {
		return new FormGroup<ProtectedQueryS3OutputFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details of errors thrown by the protected query. */
	export interface ProtectedQueryError {

		/** Required */
		message: string;

		/** Required */
		code: string;
	}

	/** Details of errors thrown by the protected query. */
	export interface ProtectedQueryErrorFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,
	}
	export function CreateProtectedQueryErrorFormGroup() {
		return new FormGroup<ProtectedQueryErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSchemaOutput {

		/** Required */
		schema: Schema;
	}
	export interface GetSchemaOutputFormProperties {
	}
	export function CreateGetSchemaOutputFormGroup() {
		return new FormGroup<GetSchemaOutputFormProperties>({
		});

	}

	export interface GetSchemaAnalysisRuleOutput {

		/** Required */
		analysisRule: AnalysisRule;
	}
	export interface GetSchemaAnalysisRuleOutputFormProperties {
	}
	export function CreateGetSchemaAnalysisRuleOutputFormGroup() {
		return new FormGroup<GetSchemaAnalysisRuleOutputFormProperties>({
		});

	}


	/** A specification about how data from the configured table can be used in a query. */
	export interface AnalysisRule {

		/** Required */
		collaborationId: string;

		/** Required */
		type: AnalysisRuleType;

		/** Required */
		name: string;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		policy: AnalysisRulePolicy;
	}

	/** A specification about how data from the configured table can be used in a query. */
	export interface AnalysisRuleFormProperties {

		/** Required */
		collaborationId: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AnalysisRuleType | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateAnalysisRuleFormGroup() {
		return new FormGroup<AnalysisRuleFormProperties>({
			collaborationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AnalysisRuleType | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Controls on the query specifications that can be run on configured table. */
	export interface AnalysisRulePolicy {
		v1?: AnalysisRulePolicyV1;
	}

	/** Controls on the query specifications that can be run on configured table. */
	export interface AnalysisRulePolicyFormProperties {
	}
	export function CreateAnalysisRulePolicyFormGroup() {
		return new FormGroup<AnalysisRulePolicyFormProperties>({
		});

	}


	/** Controls on the query specifications that can be run on configured table. */
	export interface AnalysisRulePolicyV1 {
		list?: AnalysisRuleList;
		aggregation?: AnalysisRuleAggregation;
		custom?: AnalysisRuleCustom;
	}

	/** Controls on the query specifications that can be run on configured table. */
	export interface AnalysisRulePolicyV1FormProperties {
	}
	export function CreateAnalysisRulePolicyV1FormGroup() {
		return new FormGroup<AnalysisRulePolicyV1FormProperties>({
		});

	}

	export interface ListAnalysisTemplatesOutput {
		nextToken?: string;

		/** Required */
		analysisTemplateSummaries: Array<AnalysisTemplateSummary>;
	}
	export interface ListAnalysisTemplatesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnalysisTemplatesOutputFormGroup() {
		return new FormGroup<ListAnalysisTemplatesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata of the analysis template. */
	export interface AnalysisTemplateSummary {

		/** Required */
		arn: string;

		/** Required */
		createTime: Date;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		updateTime: Date;

		/** Required */
		membershipArn: string;

		/** Required */
		membershipId: string;

		/** Required */
		collaborationArn: string;

		/** Required */
		collaborationId: string;
		description?: string;
	}

	/** The metadata of the analysis template. */
	export interface AnalysisTemplateSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		membershipArn: FormControl<string | null | undefined>,

		/** Required */
		membershipId: FormControl<string | null | undefined>,

		/** Required */
		collaborationArn: FormControl<string | null | undefined>,

		/** Required */
		collaborationId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateAnalysisTemplateSummaryFormGroup() {
		return new FormGroup<AnalysisTemplateSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			membershipArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			membershipId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCollaborationAnalysisTemplatesOutput {
		nextToken?: string;

		/** Required */
		collaborationAnalysisTemplateSummaries: Array<CollaborationAnalysisTemplateSummary>;
	}
	export interface ListCollaborationAnalysisTemplatesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCollaborationAnalysisTemplatesOutputFormGroup() {
		return new FormGroup<ListCollaborationAnalysisTemplatesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata of the analysis template within a collaboration. */
	export interface CollaborationAnalysisTemplateSummary {

		/** Required */
		arn: string;

		/** Required */
		createTime: Date;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		updateTime: Date;

		/** Required */
		collaborationArn: string;

		/** Required */
		collaborationId: string;

		/** Required */
		creatorAccountId: string;
		description?: string;
	}

	/** The metadata of the analysis template within a collaboration. */
	export interface CollaborationAnalysisTemplateSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		collaborationArn: FormControl<string | null | undefined>,

		/** Required */
		collaborationId: FormControl<string | null | undefined>,

		/** Required */
		creatorAccountId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCollaborationAnalysisTemplateSummaryFormGroup() {
		return new FormGroup<CollaborationAnalysisTemplateSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			collaborationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creatorAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCollaborationsOutput {
		nextToken?: string;

		/** Required */
		collaborationList: Array<CollaborationSummary>;
	}
	export interface ListCollaborationsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCollaborationsOutputFormGroup() {
		return new FormGroup<ListCollaborationsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata of the collaboration. */
	export interface CollaborationSummary {

		/** Required */
		id: string;

		/** Required */
		arn: string;

		/** Required */
		name: string;

		/** Required */
		creatorAccountId: string;

		/** Required */
		creatorDisplayName: string;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		memberStatus: MemberStatus;
		membershipId?: string;
		membershipArn?: string;
	}

	/** The metadata of the collaboration. */
	export interface CollaborationSummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		creatorAccountId: FormControl<string | null | undefined>,

		/** Required */
		creatorDisplayName: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		memberStatus: FormControl<MemberStatus | null | undefined>,
		membershipId: FormControl<string | null | undefined>,
		membershipArn: FormControl<string | null | undefined>,
	}
	export function CreateCollaborationSummaryFormGroup() {
		return new FormGroup<CollaborationSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creatorAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creatorDisplayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			memberStatus: new FormControl<MemberStatus | null | undefined>(undefined, [Validators.required]),
			membershipId: new FormControl<string | null | undefined>(undefined),
			membershipArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConfiguredTableAssociationsOutput {

		/** Required */
		configuredTableAssociationSummaries: Array<ConfiguredTableAssociationSummary>;
		nextToken?: string;
	}
	export interface ListConfiguredTableAssociationsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfiguredTableAssociationsOutputFormGroup() {
		return new FormGroup<ListConfiguredTableAssociationsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configured table association summary for the objects listed by the request. */
	export interface ConfiguredTableAssociationSummary {

		/** Required */
		configuredTableId: string;

		/** Required */
		membershipId: string;

		/** Required */
		membershipArn: string;

		/** Required */
		name: string;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		id: string;

		/** Required */
		arn: string;
	}

	/** The configured table association summary for the objects listed by the request. */
	export interface ConfiguredTableAssociationSummaryFormProperties {

		/** Required */
		configuredTableId: FormControl<string | null | undefined>,

		/** Required */
		membershipId: FormControl<string | null | undefined>,

		/** Required */
		membershipArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateConfiguredTableAssociationSummaryFormGroup() {
		return new FormGroup<ConfiguredTableAssociationSummaryFormProperties>({
			configuredTableId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			membershipId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			membershipArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListConfiguredTablesOutput {

		/** Required */
		configuredTableSummaries: Array<string>;
		nextToken?: string;
	}
	export interface ListConfiguredTablesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfiguredTablesOutputFormGroup() {
		return new FormGroup<ListConfiguredTablesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMembersOutput {
		nextToken?: string;

		/** Required */
		memberSummaries: Array<MemberSummary>;
	}
	export interface ListMembersOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembersOutputFormGroup() {
		return new FormGroup<ListMembersOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The member object listed by the request. */
	export interface MemberSummary {

		/** Required */
		accountId: string;

		/** Required */
		status: MemberStatus;

		/** Required */
		displayName: string;

		/** Required */
		abilities: Array<MemberAbility>;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;
		membershipId?: string;
		membershipArn?: string;
	}

	/** The member object listed by the request. */
	export interface MemberSummaryFormProperties {

		/** Required */
		accountId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<MemberStatus | null | undefined>,

		/** Required */
		displayName: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,
		membershipId: FormControl<string | null | undefined>,
		membershipArn: FormControl<string | null | undefined>,
	}
	export function CreateMemberSummaryFormGroup() {
		return new FormGroup<MemberSummaryFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<MemberStatus | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			membershipId: new FormControl<string | null | undefined>(undefined),
			membershipArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMembershipsOutput {
		nextToken?: string;

		/** Required */
		membershipSummaries: Array<MembershipSummary>;
	}
	export interface ListMembershipsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembershipsOutputFormGroup() {
		return new FormGroup<ListMembershipsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The membership object listed by the request. */
	export interface MembershipSummary {

		/** Required */
		id: string;

		/** Required */
		arn: string;

		/** Required */
		collaborationArn: string;

		/** Required */
		collaborationId: string;

		/** Required */
		collaborationCreatorAccountId: string;

		/** Required */
		collaborationCreatorDisplayName: string;

		/** Required */
		collaborationName: string;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		status: MembershipStatus;

		/** Required */
		memberAbilities: Array<MemberAbility>;
	}

	/** The membership object listed by the request. */
	export interface MembershipSummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		collaborationArn: FormControl<string | null | undefined>,

		/** Required */
		collaborationId: FormControl<string | null | undefined>,

		/** Required */
		collaborationCreatorAccountId: FormControl<string | null | undefined>,

		/** Required */
		collaborationCreatorDisplayName: FormControl<string | null | undefined>,

		/** Required */
		collaborationName: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<MembershipStatus | null | undefined>,
	}
	export function CreateMembershipSummaryFormGroup() {
		return new FormGroup<MembershipSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationCreatorAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationCreatorDisplayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<MembershipStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListProtectedQueriesOutput {
		nextToken?: string;

		/** Required */
		protectedQueries: Array<ProtectedQuerySummary>;
	}
	export interface ListProtectedQueriesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProtectedQueriesOutputFormGroup() {
		return new FormGroup<ListProtectedQueriesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The protected query summary for the objects listed by the request. */
	export interface ProtectedQuerySummary {

		/** Required */
		id: string;

		/** Required */
		membershipId: string;

		/** Required */
		membershipArn: string;

		/** Required */
		createTime: Date;

		/** Required */
		status: ProtectedQueryStatus;
	}

	/** The protected query summary for the objects listed by the request. */
	export interface ProtectedQuerySummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		membershipId: FormControl<string | null | undefined>,

		/** Required */
		membershipArn: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<ProtectedQueryStatus | null | undefined>,
	}
	export function CreateProtectedQuerySummaryFormGroup() {
		return new FormGroup<ProtectedQuerySummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			membershipId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			membershipArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ProtectedQueryStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSchemasOutput {

		/** Required */
		schemaSummaries: Array<SchemaSummary>;
		nextToken?: string;
	}
	export interface ListSchemasOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchemasOutputFormGroup() {
		return new FormGroup<ListSchemasOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The schema summary for the objects listed by the request. */
	export interface SchemaSummary {

		/** Required */
		name: string;

		/** Required */
		type: SchemaType;

		/** Required */
		creatorAccountId: string;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		collaborationId: string;

		/** Required */
		collaborationArn: string;

		/** Required */
		analysisRuleTypes: Array<AnalysisRuleType>;
		analysisMethod?: AnalysisMethod;
	}

	/** The schema summary for the objects listed by the request. */
	export interface SchemaSummaryFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<SchemaType | null | undefined>,

		/** Required */
		creatorAccountId: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		collaborationId: FormControl<string | null | undefined>,

		/** Required */
		collaborationArn: FormControl<string | null | undefined>,
		analysisMethod: FormControl<AnalysisMethod | null | undefined>,
	}
	export function CreateSchemaSummaryFormGroup() {
		return new FormGroup<SchemaSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SchemaType | null | undefined>(undefined, [Validators.required]),
			creatorAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			collaborationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			analysisMethod: new FormControl<AnalysisMethod | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {

		/** Required */
		tags: TagMap;
	}
	export interface ListTagsForResourceOutputFormProperties {
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
		});

	}


	/** Map of tags assigned to a resource */
	export interface TagMap {
	}

	/** Map of tags assigned to a resource */
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface StartProtectedQueryOutput {

		/** Required */
		protectedQuery: ProtectedQuery;
	}
	export interface StartProtectedQueryOutputFormProperties {
	}
	export function CreateStartProtectedQueryOutputFormGroup() {
		return new FormGroup<StartProtectedQueryOutputFormProperties>({
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UpdateAnalysisTemplateOutput {

		/** Required */
		analysisTemplate: AnalysisTemplate;
	}
	export interface UpdateAnalysisTemplateOutputFormProperties {
	}
	export function CreateUpdateAnalysisTemplateOutputFormGroup() {
		return new FormGroup<UpdateAnalysisTemplateOutputFormProperties>({
		});

	}

	export interface UpdateCollaborationOutput {

		/** Required */
		collaboration: Collaboration;
	}
	export interface UpdateCollaborationOutputFormProperties {
	}
	export function CreateUpdateCollaborationOutputFormGroup() {
		return new FormGroup<UpdateCollaborationOutputFormProperties>({
		});

	}

	export interface UpdateConfiguredTableOutput {

		/** Required */
		configuredTable: ConfiguredTable;
	}
	export interface UpdateConfiguredTableOutputFormProperties {
	}
	export function CreateUpdateConfiguredTableOutputFormGroup() {
		return new FormGroup<UpdateConfiguredTableOutputFormProperties>({
		});

	}

	export interface UpdateConfiguredTableAnalysisRuleOutput {

		/** Required */
		analysisRule: ConfiguredTableAnalysisRule;
	}
	export interface UpdateConfiguredTableAnalysisRuleOutputFormProperties {
	}
	export function CreateUpdateConfiguredTableAnalysisRuleOutputFormGroup() {
		return new FormGroup<UpdateConfiguredTableAnalysisRuleOutputFormProperties>({
		});

	}

	export interface UpdateConfiguredTableAssociationOutput {

		/** Required */
		configuredTableAssociation: ConfiguredTableAssociation;
	}
	export interface UpdateConfiguredTableAssociationOutputFormProperties {
	}
	export function CreateUpdateConfiguredTableAssociationOutputFormGroup() {
		return new FormGroup<UpdateConfiguredTableAssociationOutputFormProperties>({
		});

	}

	export interface UpdateMembershipOutput {

		/**
		 * The membership object.
		 * Required
		 */
		membership: Membership;
	}
	export interface UpdateMembershipOutputFormProperties {
	}
	export function CreateUpdateMembershipOutputFormGroup() {
		return new FormGroup<UpdateMembershipOutputFormProperties>({
		});

	}

	export interface UpdateProtectedQueryOutput {

		/** Required */
		protectedQuery: ProtectedQuery;
	}
	export interface UpdateProtectedQueryOutputFormProperties {
	}
	export function CreateUpdateProtectedQueryOutputFormGroup() {
		return new FormGroup<UpdateProtectedQueryOutputFormProperties>({
		});

	}

	export interface BatchGetCollaborationAnalysisTemplateInput {

		/** Required */
		analysisTemplateArns: Array<string>;
	}
	export interface BatchGetCollaborationAnalysisTemplateInputFormProperties {
	}
	export function CreateBatchGetCollaborationAnalysisTemplateInputFormGroup() {
		return new FormGroup<BatchGetCollaborationAnalysisTemplateInputFormProperties>({
		});

	}

	export interface BatchGetSchemaInput {

		/** Required */
		names: Array<string>;
	}
	export interface BatchGetSchemaInputFormProperties {
	}
	export function CreateBatchGetSchemaInputFormGroup() {
		return new FormGroup<BatchGetSchemaInputFormProperties>({
		});

	}


	/** The configured table summary for the objects listed by the request. */
	export interface ConfiguredTableSummary {

		/** Required */
		id: string;

		/** Required */
		arn: string;

		/** Required */
		name: string;

		/** Required */
		createTime: Date;

		/** Required */
		updateTime: Date;

		/** Required */
		analysisRuleTypes: Array<ConfiguredTableAnalysisRuleType>;

		/** Required */
		analysisMethod: AnalysisMethod;
	}

	/** The configured table summary for the objects listed by the request. */
	export interface ConfiguredTableSummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<Date | null | undefined>,

		/** Required */
		updateTime: FormControl<Date | null | undefined>,

		/** Required */
		analysisMethod: FormControl<AnalysisMethod | null | undefined>,
	}
	export function CreateConfiguredTableSummaryFormGroup() {
		return new FormGroup<ConfiguredTableSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			analysisMethod: new FormControl<AnalysisMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAnalysisTemplateInput {
		description?: string;

		/** Required */
		name: string;

		/** Required */
		format: AnalysisFormat;

		/** Required */
		source: AnalysisSource;
		tags?: TagMap;
		analysisParameters?: Array<AnalysisParameter>;
	}
	export interface CreateAnalysisTemplateInputFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		format: FormControl<AnalysisFormat | null | undefined>,
	}
	export function CreateCreateAnalysisTemplateInputFormGroup() {
		return new FormGroup<CreateAnalysisTemplateInputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<AnalysisFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCollaborationInput {

		/** Required */
		members: Array<MemberSpecification>;

		/** Required */
		name: string;

		/** Required */
		description: string;

		/** Required */
		creatorMemberAbilities: Array<MemberAbility>;

		/** Required */
		creatorDisplayName: string;
		dataEncryptionMetadata?: DataEncryptionMetadata;

		/** Required */
		queryLogStatus: CollaborationQueryLogStatus;
		tags?: TagMap;
	}
	export interface CreateCollaborationInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		creatorDisplayName: FormControl<string | null | undefined>,

		/** Required */
		queryLogStatus: FormControl<CollaborationQueryLogStatus | null | undefined>,
	}
	export function CreateCreateCollaborationInputFormGroup() {
		return new FormGroup<CreateCollaborationInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creatorDisplayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			queryLogStatus: new FormControl<CollaborationQueryLogStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateConfiguredTableAnalysisRuleInput {

		/** Required */
		analysisRuleType: AnalysisRuleType;

		/** Required */
		analysisRulePolicy: ConfiguredTableAnalysisRulePolicy;
	}
	export interface CreateConfiguredTableAnalysisRuleInputFormProperties {

		/** Required */
		analysisRuleType: FormControl<AnalysisRuleType | null | undefined>,
	}
	export function CreateCreateConfiguredTableAnalysisRuleInputFormGroup() {
		return new FormGroup<CreateConfiguredTableAnalysisRuleInputFormProperties>({
			analysisRuleType: new FormControl<AnalysisRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateConfiguredTableAssociationInput {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		configuredTableIdentifier: string;

		/** Required */
		roleArn: string;
		tags?: TagMap;
	}
	export interface CreateConfiguredTableAssociationInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		configuredTableIdentifier: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfiguredTableAssociationInputFormGroup() {
		return new FormGroup<CreateConfiguredTableAssociationInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			configuredTableIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateConfiguredTableInput {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		tableReference: TableReference;

		/** Required */
		allowedColumns: Array<string>;

		/** Required */
		analysisMethod: AnalysisMethod;
		tags?: TagMap;
	}
	export interface CreateConfiguredTableInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		analysisMethod: FormControl<AnalysisMethod | null | undefined>,
	}
	export function CreateCreateConfiguredTableInputFormGroup() {
		return new FormGroup<CreateConfiguredTableInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			analysisMethod: new FormControl<AnalysisMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MembershipQueryLogStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export interface CreateMembershipInput {

		/** Required */
		collaborationIdentifier: string;

		/** Required */
		queryLogStatus: CollaborationQueryLogStatus;
		tags?: TagMap;
	}
	export interface CreateMembershipInputFormProperties {

		/** Required */
		collaborationIdentifier: FormControl<string | null | undefined>,

		/** Required */
		queryLogStatus: FormControl<CollaborationQueryLogStatus | null | undefined>,
	}
	export function CreateCreateMembershipInputFormGroup() {
		return new FormGroup<CreateMembershipInputFormProperties>({
			collaborationIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			queryLogStatus: new FormControl<CollaborationQueryLogStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAnalysisTemplateInput {
	}
	export interface DeleteAnalysisTemplateInputFormProperties {
	}
	export function CreateDeleteAnalysisTemplateInputFormGroup() {
		return new FormGroup<DeleteAnalysisTemplateInputFormProperties>({
		});

	}

	export interface DeleteCollaborationInput {
	}
	export interface DeleteCollaborationInputFormProperties {
	}
	export function CreateDeleteCollaborationInputFormGroup() {
		return new FormGroup<DeleteCollaborationInputFormProperties>({
		});

	}

	export interface DeleteConfiguredTableAnalysisRuleInput {
	}
	export interface DeleteConfiguredTableAnalysisRuleInputFormProperties {
	}
	export function CreateDeleteConfiguredTableAnalysisRuleInputFormGroup() {
		return new FormGroup<DeleteConfiguredTableAnalysisRuleInputFormProperties>({
		});

	}

	export interface DeleteConfiguredTableAssociationInput {
	}
	export interface DeleteConfiguredTableAssociationInputFormProperties {
	}
	export function CreateDeleteConfiguredTableAssociationInputFormGroup() {
		return new FormGroup<DeleteConfiguredTableAssociationInputFormProperties>({
		});

	}

	export interface DeleteConfiguredTableInput {
	}
	export interface DeleteConfiguredTableInputFormProperties {
	}
	export function CreateDeleteConfiguredTableInputFormGroup() {
		return new FormGroup<DeleteConfiguredTableInputFormProperties>({
		});

	}

	export interface DeleteMemberInput {
	}
	export interface DeleteMemberInputFormProperties {
	}
	export function CreateDeleteMemberInputFormGroup() {
		return new FormGroup<DeleteMemberInputFormProperties>({
		});

	}

	export interface DeleteMembershipInput {
	}
	export interface DeleteMembershipInputFormProperties {
	}
	export function CreateDeleteMembershipInputFormGroup() {
		return new FormGroup<DeleteMembershipInputFormProperties>({
		});

	}

	export enum FilterableMemberStatus { INVITED = 'INVITED', ACTIVE = 'ACTIVE' }

	export interface GetAnalysisTemplateInput {
	}
	export interface GetAnalysisTemplateInputFormProperties {
	}
	export function CreateGetAnalysisTemplateInputFormGroup() {
		return new FormGroup<GetAnalysisTemplateInputFormProperties>({
		});

	}

	export interface GetCollaborationAnalysisTemplateInput {
	}
	export interface GetCollaborationAnalysisTemplateInputFormProperties {
	}
	export function CreateGetCollaborationAnalysisTemplateInputFormGroup() {
		return new FormGroup<GetCollaborationAnalysisTemplateInputFormProperties>({
		});

	}

	export interface GetCollaborationInput {
	}
	export interface GetCollaborationInputFormProperties {
	}
	export function CreateGetCollaborationInputFormGroup() {
		return new FormGroup<GetCollaborationInputFormProperties>({
		});

	}

	export interface GetConfiguredTableAnalysisRuleInput {
	}
	export interface GetConfiguredTableAnalysisRuleInputFormProperties {
	}
	export function CreateGetConfiguredTableAnalysisRuleInputFormGroup() {
		return new FormGroup<GetConfiguredTableAnalysisRuleInputFormProperties>({
		});

	}

	export interface GetConfiguredTableAssociationInput {
	}
	export interface GetConfiguredTableAssociationInputFormProperties {
	}
	export function CreateGetConfiguredTableAssociationInputFormGroup() {
		return new FormGroup<GetConfiguredTableAssociationInputFormProperties>({
		});

	}

	export interface GetConfiguredTableInput {
	}
	export interface GetConfiguredTableInputFormProperties {
	}
	export function CreateGetConfiguredTableInputFormGroup() {
		return new FormGroup<GetConfiguredTableInputFormProperties>({
		});

	}

	export interface GetMembershipInput {
	}
	export interface GetMembershipInputFormProperties {
	}
	export function CreateGetMembershipInputFormGroup() {
		return new FormGroup<GetMembershipInputFormProperties>({
		});

	}

	export interface GetProtectedQueryInput {
	}
	export interface GetProtectedQueryInputFormProperties {
	}
	export function CreateGetProtectedQueryInputFormGroup() {
		return new FormGroup<GetProtectedQueryInputFormProperties>({
		});

	}

	export interface GetSchemaAnalysisRuleInput {
	}
	export interface GetSchemaAnalysisRuleInputFormProperties {
	}
	export function CreateGetSchemaAnalysisRuleInputFormGroup() {
		return new FormGroup<GetSchemaAnalysisRuleInputFormProperties>({
		});

	}

	export interface GetSchemaInput {
	}
	export interface GetSchemaInputFormProperties {
	}
	export function CreateGetSchemaInputFormGroup() {
		return new FormGroup<GetSchemaInputFormProperties>({
		});

	}

	export interface ListAnalysisTemplatesInput {
	}
	export interface ListAnalysisTemplatesInputFormProperties {
	}
	export function CreateListAnalysisTemplatesInputFormGroup() {
		return new FormGroup<ListAnalysisTemplatesInputFormProperties>({
		});

	}

	export interface ListCollaborationAnalysisTemplatesInput {
	}
	export interface ListCollaborationAnalysisTemplatesInputFormProperties {
	}
	export function CreateListCollaborationAnalysisTemplatesInputFormGroup() {
		return new FormGroup<ListCollaborationAnalysisTemplatesInputFormProperties>({
		});

	}

	export interface ListCollaborationsInput {
	}
	export interface ListCollaborationsInputFormProperties {
	}
	export function CreateListCollaborationsInputFormGroup() {
		return new FormGroup<ListCollaborationsInputFormProperties>({
		});

	}

	export interface ListConfiguredTableAssociationsInput {
	}
	export interface ListConfiguredTableAssociationsInputFormProperties {
	}
	export function CreateListConfiguredTableAssociationsInputFormGroup() {
		return new FormGroup<ListConfiguredTableAssociationsInputFormProperties>({
		});

	}

	export interface ListConfiguredTablesInput {
	}
	export interface ListConfiguredTablesInputFormProperties {
	}
	export function CreateListConfiguredTablesInputFormGroup() {
		return new FormGroup<ListConfiguredTablesInputFormProperties>({
		});

	}

	export interface ListMembersInput {
	}
	export interface ListMembersInputFormProperties {
	}
	export function CreateListMembersInputFormGroup() {
		return new FormGroup<ListMembersInputFormProperties>({
		});

	}

	export interface ListMembershipsInput {
	}
	export interface ListMembershipsInputFormProperties {
	}
	export function CreateListMembershipsInputFormGroup() {
		return new FormGroup<ListMembershipsInputFormProperties>({
		});

	}

	export interface ListProtectedQueriesInput {
	}
	export interface ListProtectedQueriesInputFormProperties {
	}
	export function CreateListProtectedQueriesInputFormGroup() {
		return new FormGroup<ListProtectedQueriesInputFormProperties>({
		});

	}

	export interface ListSchemasInput {
	}
	export interface ListSchemasInputFormProperties {
	}
	export function CreateListSchemasInputFormGroup() {
		return new FormGroup<ListSchemasInputFormProperties>({
		});

	}

	export interface ListTagsForResourceInput {
	}
	export interface ListTagsForResourceInputFormProperties {
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
		});

	}

	export enum ProtectedQueryType { SQL = 'SQL' }

	export interface StartProtectedQueryInput {

		/** Required */
		type: AnalysisFormat;

		/** Required */
		sqlParameters: ProtectedQuerySQLParameters;

		/** Required */
		resultConfiguration: ProtectedQueryResultConfiguration;
	}
	export interface StartProtectedQueryInputFormProperties {

		/** Required */
		type: FormControl<AnalysisFormat | null | undefined>,
	}
	export function CreateStartProtectedQueryInputFormGroup() {
		return new FormGroup<StartProtectedQueryInputFormProperties>({
			type: new FormControl<AnalysisFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceInput {

		/** Required */
		tags: TagMap;
	}
	export interface TagResourceInputFormProperties {
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
		});

	}

	export enum TargetProtectedQueryStatus { CANCELLED = 'CANCELLED' }

	export interface UntagResourceInput {
	}
	export interface UntagResourceInputFormProperties {
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
		});

	}

	export interface UpdateAnalysisTemplateInput {
		description?: string;
	}
	export interface UpdateAnalysisTemplateInputFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAnalysisTemplateInputFormGroup() {
		return new FormGroup<UpdateAnalysisTemplateInputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCollaborationInput {
		name?: string;
		description?: string;
	}
	export interface UpdateCollaborationInputFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCollaborationInputFormGroup() {
		return new FormGroup<UpdateCollaborationInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConfiguredTableAnalysisRuleInput {

		/** Required */
		analysisRulePolicy: ConfiguredTableAnalysisRulePolicy;
	}
	export interface UpdateConfiguredTableAnalysisRuleInputFormProperties {
	}
	export function CreateUpdateConfiguredTableAnalysisRuleInputFormGroup() {
		return new FormGroup<UpdateConfiguredTableAnalysisRuleInputFormProperties>({
		});

	}

	export interface UpdateConfiguredTableAssociationInput {
		description?: string;
		roleArn?: string;
	}
	export interface UpdateConfiguredTableAssociationInputFormProperties {
		description: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfiguredTableAssociationInputFormGroup() {
		return new FormGroup<UpdateConfiguredTableAssociationInputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConfiguredTableInput {
		name?: string;
		description?: string;
	}
	export interface UpdateConfiguredTableInputFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfiguredTableInputFormGroup() {
		return new FormGroup<UpdateConfiguredTableInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMembershipInput {
		queryLogStatus?: CollaborationQueryLogStatus;
	}
	export interface UpdateMembershipInputFormProperties {
		queryLogStatus: FormControl<CollaborationQueryLogStatus | null | undefined>,
	}
	export function CreateUpdateMembershipInputFormGroup() {
		return new FormGroup<UpdateMembershipInputFormProperties>({
			queryLogStatus: new FormControl<CollaborationQueryLogStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateProtectedQueryInput {

		/** Required */
		targetStatus: TargetProtectedQueryStatus;
	}
	export interface UpdateProtectedQueryInputFormProperties {

		/** Required */
		targetStatus: FormControl<TargetProtectedQueryStatus | null | undefined>,
	}
	export function CreateUpdateProtectedQueryInputFormGroup() {
		return new FormGroup<UpdateProtectedQueryInputFormProperties>({
			targetStatus: new FormControl<TargetProtectedQueryStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves multiple analysis templates within a collaboration by their Amazon Resource Names (ARNs).
		 * Post collaborations/{collaborationIdentifier}/batch-analysistemplates
		 * @param {string} collaborationIdentifier A unique identifier for the collaboration that the analysis templates belong to. Currently accepts collaboration ID.
		 *     Min length: 36    Max length: 36
		 * @return {BatchGetCollaborationAnalysisTemplateOutput} Success
		 */
		BatchGetCollaborationAnalysisTemplate(collaborationIdentifier: string, requestBody: BatchGetCollaborationAnalysisTemplatePostBody): Observable<BatchGetCollaborationAnalysisTemplateOutput> {
			return this.http.post<BatchGetCollaborationAnalysisTemplateOutput>(this.baseUri + 'collaborations/' + (collaborationIdentifier == null ? '' : encodeURIComponent(collaborationIdentifier)) + '/batch-analysistemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves multiple schemas by their identifiers.
		 * Post collaborations/{collaborationIdentifier}/batch-schema
		 * @param {string} collaborationIdentifier A unique identifier for the collaboration that the schemas belong to. Currently accepts collaboration ID.
		 *     Min length: 36    Max length: 36
		 * @return {BatchGetSchemaOutput} Success
		 */
		BatchGetSchema(collaborationIdentifier: string, requestBody: BatchGetSchemaPostBody): Observable<BatchGetSchemaOutput> {
			return this.http.post<BatchGetSchemaOutput>(this.baseUri + 'collaborations/' + (collaborationIdentifier == null ? '' : encodeURIComponent(collaborationIdentifier)) + '/batch-schema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new analysis template.
		 * Post memberships/{membershipIdentifier}/analysistemplates
		 * @param {string} membershipIdentifier The identifier for a membership resource.
		 *     Min length: 36    Max length: 36
		 * @return {CreateAnalysisTemplateOutput} Success
		 */
		CreateAnalysisTemplate(membershipIdentifier: string, requestBody: CreateAnalysisTemplatePostBody): Observable<CreateAnalysisTemplateOutput> {
			return this.http.post<CreateAnalysisTemplateOutput>(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)) + '/analysistemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists analysis templates that the caller owns.
		 * Get memberships/{membershipIdentifier}/analysistemplates
		 * @param {string} membershipIdentifier The identifier for a membership resource.
		 *     Min length: 36    Max length: 36
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 *     Min length: 0    Max length: 10240
		 * @param {number} maxResults The maximum size of the results that is returned per call.
		 *     Minimum: 1    Maximum: 100
		 * @return {ListAnalysisTemplatesOutput} Success
		 */
		ListAnalysisTemplates(membershipIdentifier: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAnalysisTemplatesOutput> {
			return this.http.get<ListAnalysisTemplatesOutput>(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)) + '/analysistemplates&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a new collaboration.
		 * Post collaborations
		 * @return {CreateCollaborationOutput} Success
		 */
		CreateCollaboration(requestBody: CreateCollaborationPostBody): Observable<CreateCollaborationOutput> {
			return this.http.post<CreateCollaborationOutput>(this.baseUri + 'collaborations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists collaborations the caller owns, is active in, or has been invited to.
		 * Get collaborations
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 *     Min length: 0    Max length: 10240
		 * @param {number} maxResults The maximum size of the results that is returned per call. Service chooses a default if it has not been set. Service may return a nextToken even if the maximum results has not been met.
		 *     Minimum: 1    Maximum: 100
		 * @param {FilterableMemberStatus} memberStatus The caller's status in a collaboration.
		 * @return {ListCollaborationsOutput} Success
		 */
		ListCollaborations(nextToken: string | null | undefined, maxResults: number | null | undefined, memberStatus: FilterableMemberStatus | null | undefined): Observable<ListCollaborationsOutput> {
			return this.http.get<ListCollaborationsOutput>(this.baseUri + 'collaborations?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&memberStatus=' + memberStatus, {});
		}

		/**
		 * Creates a new configured table resource.
		 * Post configuredTables
		 * @return {CreateConfiguredTableOutput} Success
		 */
		CreateConfiguredTable(requestBody: CreateConfiguredTablePostBody): Observable<CreateConfiguredTableOutput> {
			return this.http.post<CreateConfiguredTableOutput>(this.baseUri + 'configuredTables', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists configured tables.
		 * Get configuredTables
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 *     Min length: 0    Max length: 10240
		 * @param {number} maxResults The maximum size of the results that is returned per call.
		 *     Minimum: 1    Maximum: 100
		 * @return {ListConfiguredTablesOutput} Success
		 */
		ListConfiguredTables(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListConfiguredTablesOutput> {
			return this.http.get<ListConfiguredTablesOutput>(this.baseUri + 'configuredTables?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a new analysis rule for a configured table. Currently, only one analysis rule can be created for a given configured table.
		 * Post configuredTables/{configuredTableIdentifier}/analysisRule
		 * @param {string} configuredTableIdentifier The identifier for the configured table to create the analysis rule for. Currently accepts the configured table ID. 
		 *     Min length: 36    Max length: 36
		 * @return {CreateConfiguredTableAnalysisRuleOutput} Success
		 */
		CreateConfiguredTableAnalysisRule(configuredTableIdentifier: string, requestBody: CreateConfiguredTableAnalysisRulePostBody): Observable<CreateConfiguredTableAnalysisRuleOutput> {
			return this.http.post<CreateConfiguredTableAnalysisRuleOutput>(this.baseUri + 'configuredTables/' + (configuredTableIdentifier == null ? '' : encodeURIComponent(configuredTableIdentifier)) + '/analysisRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a configured table association. A configured table association links a configured table with a collaboration.
		 * Post memberships/{membershipIdentifier}/configuredTableAssociations
		 * @param {string} membershipIdentifier A unique identifier for one of your memberships for a collaboration. The configured table is associated to the collaboration that this membership belongs to. Currently accepts a membership ID.
		 *     Min length: 36    Max length: 36
		 * @return {CreateConfiguredTableAssociationOutput} Success
		 */
		CreateConfiguredTableAssociation(membershipIdentifier: string, requestBody: CreateConfiguredTableAssociationPostBody): Observable<CreateConfiguredTableAssociationOutput> {
			return this.http.post<CreateConfiguredTableAssociationOutput>(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)) + '/configuredTableAssociations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists configured table associations for a membership.
		 * Get memberships/{membershipIdentifier}/configuredTableAssociations
		 * @param {string} membershipIdentifier A unique identifier for the membership to list configured table associations for. Currently accepts the membership ID.
		 *     Min length: 36    Max length: 36
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 *     Min length: 0    Max length: 10240
		 * @param {number} maxResults The maximum size of the results that is returned per call.
		 *     Minimum: 1    Maximum: 100
		 * @return {ListConfiguredTableAssociationsOutput} Success
		 */
		ListConfiguredTableAssociations(membershipIdentifier: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListConfiguredTableAssociationsOutput> {
			return this.http.get<ListConfiguredTableAssociationsOutput>(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)) + '/configuredTableAssociations&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a membership for a specific collaboration identifier and joins the collaboration.
		 * Post memberships
		 * @return {CreateMembershipOutput} Success
		 */
		CreateMembership(requestBody: CreateMembershipPostBody): Observable<CreateMembershipOutput> {
			return this.http.post<CreateMembershipOutput>(this.baseUri + 'memberships', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all memberships resources within the caller's account.
		 * Get memberships
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 *     Min length: 0    Max length: 10240
		 * @param {number} maxResults The maximum size of the results that is returned per call.
		 *     Minimum: 1    Maximum: 100
		 * @param {MembershipStatus} status A filter which will return only memberships in the specified status.
		 * @return {ListMembershipsOutput} Success
		 */
		ListMemberships(nextToken: string | null | undefined, maxResults: number | null | undefined, status: MembershipStatus | null | undefined): Observable<ListMembershipsOutput> {
			return this.http.get<ListMembershipsOutput>(this.baseUri + 'memberships?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&status=' + status, {});
		}

		/**
		 * Deletes an analysis template.
		 * Delete memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}
		 * @param {string} membershipIdentifier The identifier for a membership resource.
		 *     Min length: 36    Max length: 36
		 * @param {string} analysisTemplateIdentifier The identifier for the analysis template resource.
		 *     Min length: 36    Max length: 36
		 * @return {void} 
		 */
		DeleteAnalysisTemplate(membershipIdentifier: string, analysisTemplateIdentifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)) + '/analysistemplates/' + (analysisTemplateIdentifier == null ? '' : encodeURIComponent(analysisTemplateIdentifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves an analysis template.
		 * Get memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}
		 * @param {string} membershipIdentifier The identifier for a membership resource.
		 *     Min length: 36    Max length: 36
		 * @param {string} analysisTemplateIdentifier The identifier for the analysis template resource.
		 *     Min length: 36    Max length: 36
		 * @return {GetAnalysisTemplateOutput} Success
		 */
		GetAnalysisTemplate(membershipIdentifier: string, analysisTemplateIdentifier: string): Observable<GetAnalysisTemplateOutput> {
			return this.http.get<GetAnalysisTemplateOutput>(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)) + '/analysistemplates/' + (analysisTemplateIdentifier == null ? '' : encodeURIComponent(analysisTemplateIdentifier)), {});
		}

		/**
		 * Updates the analysis template metadata.
		 * Patch memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}
		 * @param {string} membershipIdentifier The identifier for a membership resource.
		 *     Min length: 36    Max length: 36
		 * @param {string} analysisTemplateIdentifier The identifier for the analysis template resource.
		 *     Min length: 36    Max length: 36
		 * @return {UpdateAnalysisTemplateOutput} Success
		 */
		UpdateAnalysisTemplate(membershipIdentifier: string, analysisTemplateIdentifier: string, requestBody: UpdateAnalysisTemplatePatchBody): Observable<UpdateAnalysisTemplateOutput> {
			return this.http.patch<UpdateAnalysisTemplateOutput>(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)) + '/analysistemplates/' + (analysisTemplateIdentifier == null ? '' : encodeURIComponent(analysisTemplateIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a collaboration. It can only be called by the collaboration owner.
		 * Delete collaborations/{collaborationIdentifier}
		 * @param {string} collaborationIdentifier The identifier for the collaboration.
		 *     Min length: 36    Max length: 36
		 * @return {void} 
		 */
		DeleteCollaboration(collaborationIdentifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'collaborations/' + (collaborationIdentifier == null ? '' : encodeURIComponent(collaborationIdentifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns metadata about a collaboration.
		 * Get collaborations/{collaborationIdentifier}
		 * @param {string} collaborationIdentifier The identifier for the collaboration.
		 *     Min length: 36    Max length: 36
		 * @return {GetCollaborationOutput} Success
		 */
		GetCollaboration(collaborationIdentifier: string): Observable<GetCollaborationOutput> {
			return this.http.get<GetCollaborationOutput>(this.baseUri + 'collaborations/' + (collaborationIdentifier == null ? '' : encodeURIComponent(collaborationIdentifier)), {});
		}

		/**
		 * Updates collaboration metadata and can only be called by the collaboration owner.
		 * Patch collaborations/{collaborationIdentifier}
		 * @param {string} collaborationIdentifier The identifier for the collaboration.
		 *     Min length: 36    Max length: 36
		 * @return {UpdateCollaborationOutput} Success
		 */
		UpdateCollaboration(collaborationIdentifier: string, requestBody: UpdateCollaborationPatchBody): Observable<UpdateCollaborationOutput> {
			return this.http.patch<UpdateCollaborationOutput>(this.baseUri + 'collaborations/' + (collaborationIdentifier == null ? '' : encodeURIComponent(collaborationIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a configured table.
		 * Delete configuredTables/{configuredTableIdentifier}
		 * @param {string} configuredTableIdentifier The unique ID for the configured table to delete.
		 *     Min length: 36    Max length: 36
		 * @return {void} 
		 */
		DeleteConfiguredTable(configuredTableIdentifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'configuredTables/' + (configuredTableIdentifier == null ? '' : encodeURIComponent(configuredTableIdentifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a configured table.
		 * Get configuredTables/{configuredTableIdentifier}
		 * @param {string} configuredTableIdentifier The unique ID for the configured table to retrieve.
		 *     Min length: 36    Max length: 36
		 * @return {GetConfiguredTableOutput} Success
		 */
		GetConfiguredTable(configuredTableIdentifier: string): Observable<GetConfiguredTableOutput> {
			return this.http.get<GetConfiguredTableOutput>(this.baseUri + 'configuredTables/' + (configuredTableIdentifier == null ? '' : encodeURIComponent(configuredTableIdentifier)), {});
		}

		/**
		 * Updates a configured table.
		 * Patch configuredTables/{configuredTableIdentifier}
		 * @param {string} configuredTableIdentifier The identifier for the configured table to update. Currently accepts the configured table ID.
		 *     Min length: 36    Max length: 36
		 * @return {UpdateConfiguredTableOutput} Success
		 */
		UpdateConfiguredTable(configuredTableIdentifier: string, requestBody: UpdateConfiguredTablePatchBody): Observable<UpdateConfiguredTableOutput> {
			return this.http.patch<UpdateConfiguredTableOutput>(this.baseUri + 'configuredTables/' + (configuredTableIdentifier == null ? '' : encodeURIComponent(configuredTableIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a configured table analysis rule.
		 * Delete configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}
		 * @param {string} configuredTableIdentifier The unique identifier for the configured table that the analysis rule applies to. Currently accepts the configured table ID.
		 *     Min length: 36    Max length: 36
		 * @param {AnalysisRuleType} analysisRuleType The analysis rule type to be deleted. Configured table analysis rules are uniquely identified by their configured table identifier and analysis rule type.
		 * @return {void} 
		 */
		DeleteConfiguredTableAnalysisRule(configuredTableIdentifier: string, analysisRuleType: AnalysisRuleType): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'configuredTables/' + (configuredTableIdentifier == null ? '' : encodeURIComponent(configuredTableIdentifier)) + '/analysisRule/' + analysisRuleType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a configured table analysis rule.
		 * Get configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}
		 * @param {string} configuredTableIdentifier The unique identifier for the configured table to retrieve. Currently accepts the configured table ID.
		 *     Min length: 36    Max length: 36
		 * @param {AnalysisRuleType} analysisRuleType The analysis rule to be retrieved. Configured table analysis rules are uniquely identified by their configured table identifier and analysis rule type.
		 * @return {GetConfiguredTableAnalysisRuleOutput} Success
		 */
		GetConfiguredTableAnalysisRule(configuredTableIdentifier: string, analysisRuleType: AnalysisRuleType): Observable<GetConfiguredTableAnalysisRuleOutput> {
			return this.http.get<GetConfiguredTableAnalysisRuleOutput>(this.baseUri + 'configuredTables/' + (configuredTableIdentifier == null ? '' : encodeURIComponent(configuredTableIdentifier)) + '/analysisRule/' + analysisRuleType, {});
		}

		/**
		 * Updates a configured table analysis rule.
		 * Patch configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}
		 * @param {string} configuredTableIdentifier The unique identifier for the configured table that the analysis rule applies to. Currently accepts the configured table ID.
		 *     Min length: 36    Max length: 36
		 * @param {AnalysisRuleType} analysisRuleType The analysis rule type to be updated. Configured table analysis rules are uniquely identified by their configured table identifier and analysis rule type.
		 * @return {UpdateConfiguredTableAnalysisRuleOutput} Success
		 */
		UpdateConfiguredTableAnalysisRule(configuredTableIdentifier: string, analysisRuleType: AnalysisRuleType, requestBody: UpdateConfiguredTableAnalysisRulePatchBody): Observable<UpdateConfiguredTableAnalysisRuleOutput> {
			return this.http.patch<UpdateConfiguredTableAnalysisRuleOutput>(this.baseUri + 'configuredTables/' + (configuredTableIdentifier == null ? '' : encodeURIComponent(configuredTableIdentifier)) + '/analysisRule/' + analysisRuleType, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a configured table association.
		 * Delete memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}
		 * @param {string} configuredTableAssociationIdentifier The unique ID for the configured table association to be deleted. Currently accepts the configured table ID.
		 *     Min length: 36    Max length: 36
		 * @param {string} membershipIdentifier A unique identifier for the membership that the configured table association belongs to. Currently accepts the membership ID.
		 *     Min length: 36    Max length: 36
		 * @return {void} 
		 */
		DeleteConfiguredTableAssociation(configuredTableAssociationIdentifier: string, membershipIdentifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)) + '/configuredTableAssociations/' + (configuredTableAssociationIdentifier == null ? '' : encodeURIComponent(configuredTableAssociationIdentifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a configured table association.
		 * Get memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}
		 * @param {string} configuredTableAssociationIdentifier The unique ID for the configured table association to retrieve. Currently accepts the configured table ID.
		 *     Min length: 36    Max length: 36
		 * @param {string} membershipIdentifier A unique identifier for the membership that the configured table association belongs to. Currently accepts the membership ID.
		 *     Min length: 36    Max length: 36
		 * @return {GetConfiguredTableAssociationOutput} Success
		 */
		GetConfiguredTableAssociation(configuredTableAssociationIdentifier: string, membershipIdentifier: string): Observable<GetConfiguredTableAssociationOutput> {
			return this.http.get<GetConfiguredTableAssociationOutput>(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)) + '/configuredTableAssociations/' + (configuredTableAssociationIdentifier == null ? '' : encodeURIComponent(configuredTableAssociationIdentifier)), {});
		}

		/**
		 * Updates a configured table association.
		 * Patch memberships/{membershipIdentifier}/configuredTableAssociations/{configuredTableAssociationIdentifier}
		 * @param {string} configuredTableAssociationIdentifier The unique identifier for the configured table association to update. Currently accepts the configured table association ID.
		 *     Min length: 36    Max length: 36
		 * @param {string} membershipIdentifier The unique ID for the membership that the configured table association belongs to.
		 *     Min length: 36    Max length: 36
		 * @return {UpdateConfiguredTableAssociationOutput} Success
		 */
		UpdateConfiguredTableAssociation(configuredTableAssociationIdentifier: string, membershipIdentifier: string, requestBody: UpdateConfiguredTableAssociationPatchBody): Observable<UpdateConfiguredTableAssociationOutput> {
			return this.http.patch<UpdateConfiguredTableAssociationOutput>(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)) + '/configuredTableAssociations/' + (configuredTableAssociationIdentifier == null ? '' : encodeURIComponent(configuredTableAssociationIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified member from a collaboration. The removed member is placed in the Removed status and can't interact with the collaboration. The removed member's data is inaccessible to active members of the collaboration.
		 * Delete collaborations/{collaborationIdentifier}/member/{accountId}
		 * @param {string} collaborationIdentifier The unique identifier for the associated collaboration.
		 *     Min length: 36    Max length: 36
		 * @param {string} accountId The account ID of the member to remove.
		 *     Min length: 12    Max length: 12
		 * @return {void} 
		 */
		DeleteMember(collaborationIdentifier: string, accountId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'collaborations/' + (collaborationIdentifier == null ? '' : encodeURIComponent(collaborationIdentifier)) + '/member/' + (accountId == null ? '' : encodeURIComponent(accountId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a specified membership. All resources under a membership must be deleted.
		 * Delete memberships/{membershipIdentifier}
		 * @param {string} membershipIdentifier The identifier for a membership resource.
		 *     Min length: 36    Max length: 36
		 * @return {void} 
		 */
		DeleteMembership(membershipIdentifier: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a specified membership for an identifier.
		 * Get memberships/{membershipIdentifier}
		 * @param {string} membershipIdentifier The identifier for a membership resource.
		 *     Min length: 36    Max length: 36
		 * @return {GetMembershipOutput} Success
		 */
		GetMembership(membershipIdentifier: string): Observable<GetMembershipOutput> {
			return this.http.get<GetMembershipOutput>(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)), {});
		}

		/**
		 * Updates a membership.
		 * Patch memberships/{membershipIdentifier}
		 * @param {string} membershipIdentifier The unique identifier of the membership.
		 *     Min length: 36    Max length: 36
		 * @return {UpdateMembershipOutput} Success
		 */
		UpdateMembership(membershipIdentifier: string, requestBody: UpdateMembershipPatchBody): Observable<UpdateMembershipOutput> {
			return this.http.patch<UpdateMembershipOutput>(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves an analysis template within a collaboration.
		 * Get collaborations/{collaborationIdentifier}/analysistemplates/{analysisTemplateArn}
		 * @param {string} collaborationIdentifier A unique identifier for the collaboration that the analysis templates belong to. Currently accepts collaboration ID.
		 *     Min length: 36    Max length: 36
		 * @param {string} analysisTemplateArn The Amazon Resource Name (ARN) associated with the analysis template within a collaboration.
		 *     Min length: 0    Max length: 200
		 * @return {GetCollaborationAnalysisTemplateOutput} Success
		 */
		GetCollaborationAnalysisTemplate(collaborationIdentifier: string, analysisTemplateArn: string): Observable<GetCollaborationAnalysisTemplateOutput> {
			return this.http.get<GetCollaborationAnalysisTemplateOutput>(this.baseUri + 'collaborations/' + (collaborationIdentifier == null ? '' : encodeURIComponent(collaborationIdentifier)) + '/analysistemplates/' + (analysisTemplateArn == null ? '' : encodeURIComponent(analysisTemplateArn)), {});
		}

		/**
		 * Returns query processing metadata.
		 * Get memberships/{membershipIdentifier}/protectedQueries/{protectedQueryIdentifier}
		 * @param {string} membershipIdentifier The identifier for a membership in a protected query instance.
		 *     Min length: 36    Max length: 36
		 * @param {string} protectedQueryIdentifier The identifier for a protected query instance.
		 *     Min length: 1    Max length: 36
		 * @return {GetProtectedQueryOutput} Success
		 */
		GetProtectedQuery(membershipIdentifier: string, protectedQueryIdentifier: string): Observable<GetProtectedQueryOutput> {
			return this.http.get<GetProtectedQueryOutput>(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)) + '/protectedQueries/' + (protectedQueryIdentifier == null ? '' : encodeURIComponent(protectedQueryIdentifier)), {});
		}

		/**
		 * Updates the processing of a currently running query.
		 * Patch memberships/{membershipIdentifier}/protectedQueries/{protectedQueryIdentifier}
		 * @param {string} membershipIdentifier The identifier for a member of a protected query instance.
		 *     Min length: 36    Max length: 36
		 * @param {string} protectedQueryIdentifier The identifier for a protected query instance.
		 *     Min length: 1    Max length: 36
		 * @return {UpdateProtectedQueryOutput} Success
		 */
		UpdateProtectedQuery(membershipIdentifier: string, protectedQueryIdentifier: string, requestBody: UpdateProtectedQueryPatchBody): Observable<UpdateProtectedQueryOutput> {
			return this.http.patch<UpdateProtectedQueryOutput>(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)) + '/protectedQueries/' + (protectedQueryIdentifier == null ? '' : encodeURIComponent(protectedQueryIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the schema for a relation within a collaboration.
		 * Get collaborations/{collaborationIdentifier}/schemas/{name}
		 * @param {string} collaborationIdentifier A unique identifier for the collaboration that the schema belongs to. Currently accepts a collaboration ID.
		 *     Min length: 36    Max length: 36
		 * @param {string} name The name of the relation to retrieve the schema for.
		 *     Min length: 0    Max length: 128
		 * @return {GetSchemaOutput} Success
		 */
		GetSchema(collaborationIdentifier: string, name: string): Observable<GetSchemaOutput> {
			return this.http.get<GetSchemaOutput>(this.baseUri + 'collaborations/' + (collaborationIdentifier == null ? '' : encodeURIComponent(collaborationIdentifier)) + '/schemas/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Retrieves a schema analysis rule.
		 * Get collaborations/{collaborationIdentifier}/schemas/{name}/analysisRule/{type}
		 * @param {string} collaborationIdentifier A unique identifier for the collaboration that the schema belongs to. Currently accepts a collaboration ID.
		 *     Min length: 36    Max length: 36
		 * @param {string} name The name of the schema to retrieve the analysis rule for.
		 *     Min length: 0    Max length: 128
		 * @param {AnalysisRuleType} type The type of the schema analysis rule to retrieve. Schema analysis rules are uniquely identified by a combination of the collaboration, the schema name, and their type.
		 * @return {GetSchemaAnalysisRuleOutput} Success
		 */
		GetSchemaAnalysisRule(collaborationIdentifier: string, name: string, type: AnalysisRuleType): Observable<GetSchemaAnalysisRuleOutput> {
			return this.http.get<GetSchemaAnalysisRuleOutput>(this.baseUri + 'collaborations/' + (collaborationIdentifier == null ? '' : encodeURIComponent(collaborationIdentifier)) + '/schemas/' + (name == null ? '' : encodeURIComponent(name)) + '/analysisRule/' + type, {});
		}

		/**
		 * Lists analysis templates within a collaboration.
		 * Get collaborations/{collaborationIdentifier}/analysistemplates
		 * @param {string} collaborationIdentifier A unique identifier for the collaboration that the analysis templates belong to. Currently accepts collaboration ID.
		 *     Min length: 36    Max length: 36
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 *     Min length: 0    Max length: 10240
		 * @param {number} maxResults The maximum size of the results that is returned per call.
		 *     Minimum: 1    Maximum: 100
		 * @return {ListCollaborationAnalysisTemplatesOutput} Success
		 */
		ListCollaborationAnalysisTemplates(collaborationIdentifier: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListCollaborationAnalysisTemplatesOutput> {
			return this.http.get<ListCollaborationAnalysisTemplatesOutput>(this.baseUri + 'collaborations/' + (collaborationIdentifier == null ? '' : encodeURIComponent(collaborationIdentifier)) + '/analysistemplates&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists all members within a collaboration.
		 * Get collaborations/{collaborationIdentifier}/members
		 * @param {string} collaborationIdentifier The identifier of the collaboration in which the members are listed.
		 *     Min length: 36    Max length: 36
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 *     Min length: 0    Max length: 10240
		 * @param {number} maxResults The maximum size of the results that is returned per call.
		 *     Minimum: 1    Maximum: 100
		 * @return {ListMembersOutput} Success
		 */
		ListMembers(collaborationIdentifier: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListMembersOutput> {
			return this.http.get<ListMembersOutput>(this.baseUri + 'collaborations/' + (collaborationIdentifier == null ? '' : encodeURIComponent(collaborationIdentifier)) + '/members&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists protected queries, sorted by the most recent query.
		 * Get memberships/{membershipIdentifier}/protectedQueries
		 * @param {string} membershipIdentifier The identifier for the membership in the collaboration.
		 *     Min length: 36    Max length: 36
		 * @param {ProtectedQueryStatus} status A filter on the status of the protected query.
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 *     Min length: 0    Max length: 10240
		 * @param {number} maxResults The maximum size of the results that is returned per call. Service chooses a default if it has not been set. Service can return a nextToken even if the maximum results has not been met. 
		 *     Minimum: 1    Maximum: 100
		 * @return {ListProtectedQueriesOutput} Success
		 */
		ListProtectedQueries(membershipIdentifier: string, status: ProtectedQueryStatus | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListProtectedQueriesOutput> {
			return this.http.get<ListProtectedQueriesOutput>(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)) + '/protectedQueries&status=' + status + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a protected query that is started by Clean Rooms .
		 * Post memberships/{membershipIdentifier}/protectedQueries
		 * @param {string} membershipIdentifier A unique identifier for the membership to run this query against. Currently accepts a membership ID.
		 *     Min length: 36    Max length: 36
		 * @return {StartProtectedQueryOutput} Success
		 */
		StartProtectedQuery(membershipIdentifier: string, requestBody: StartProtectedQueryPostBody): Observable<StartProtectedQueryOutput> {
			return this.http.post<StartProtectedQueryOutput>(this.baseUri + 'memberships/' + (membershipIdentifier == null ? '' : encodeURIComponent(membershipIdentifier)) + '/protectedQueries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the schemas for relations within a collaboration.
		 * Get collaborations/{collaborationIdentifier}/schemas
		 * @param {string} collaborationIdentifier A unique identifier for the collaboration that the schema belongs to. Currently accepts a collaboration ID.
		 *     Min length: 36    Max length: 36
		 * @param {SchemaType} schemaType If present, filter schemas by schema type. The only valid schema type is currently `TABLE`.
		 * @param {string} nextToken The token value retrieved from a previous call to access the next page of results.
		 *     Min length: 0    Max length: 10240
		 * @param {number} maxResults The maximum size of the results that is returned per call.
		 *     Minimum: 1    Maximum: 100
		 * @return {ListSchemasOutput} Success
		 */
		ListSchemas(collaborationIdentifier: string, schemaType: SchemaType | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListSchemasOutput> {
			return this.http.get<ListSchemasOutput>(this.baseUri + 'collaborations/' + (collaborationIdentifier == null ? '' : encodeURIComponent(collaborationIdentifier)) + '/schemas&schemaType=' + schemaType + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists all of the tags that have been added to a resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) associated with the resource you want to list tags on.
		 *     Min length: 0    Max length: 100
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceOutput> {
			return this.http.get<ListTagsForResourceOutput>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Tags a resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) associated with the resource you want to tag.
		 *     Min length: 0    Max length: 100
		 * @return {TagResourceOutput} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag or list of tags from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from.
		 *     Min length: 0    Max length: 100
		 * @param {Array<string>} tagKeys A list of key names of tags to be removed.
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceOutput> {
			return this.http.delete<UntagResourceOutput>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface BatchGetCollaborationAnalysisTemplatePostBody {

		/**
		 * The Amazon Resource Name (ARN) associated with the analysis template within a collaboration.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		analysisTemplateArns: Array<string>;
	}
	export interface BatchGetCollaborationAnalysisTemplatePostBodyFormProperties {
	}
	export function CreateBatchGetCollaborationAnalysisTemplatePostBodyFormGroup() {
		return new FormGroup<BatchGetCollaborationAnalysisTemplatePostBodyFormProperties>({
		});

	}

	export interface BatchGetSchemaPostBody {

		/**
		 * The names for the schema objects to retrieve.&gt;
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		names: Array<string>;
	}
	export interface BatchGetSchemaPostBodyFormProperties {
	}
	export function CreateBatchGetSchemaPostBodyFormGroup() {
		return new FormGroup<BatchGetSchemaPostBodyFormProperties>({
		});

	}

	export interface CreateAnalysisTemplatePostBody {

		/**
		 * The description of the analysis template.
		 * Min length: 0
		 * Max length: 255
		 */
		description?: string | null;

		/**
		 * The name of the analysis template.
		 * Required
		 * Min length: 0
		 * Max length: 128
		 */
		name: string;

		/**
		 * The format of the analysis template.
		 * Required
		 */
		format: AnalysisFormat;

		/**
		 * The structure that defines the body of the analysis template.
		 * Required
		 */
		source: CreateAnalysisTemplatePostBodySource;

		/** Map of tags assigned to a resource */
		tags?: {[id: string]: string };

		/**
		 * The parameters of the analysis template.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		analysisParameters?: Array<AnalysisParameter>;
	}
	export interface CreateAnalysisTemplatePostBodyFormProperties {

		/**
		 * The description of the analysis template.
		 * Min length: 0
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of the analysis template.
		 * Required
		 * Min length: 0
		 * Max length: 128
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The format of the analysis template.
		 * Required
		 */
		format: FormControl<AnalysisFormat | null | undefined>,

		/** Map of tags assigned to a resource */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAnalysisTemplatePostBodyFormGroup() {
		return new FormGroup<CreateAnalysisTemplatePostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_](([a-zA-Z0-9_ ]+-)*([a-zA-Z0-9_ ]+))?')]),
			format: new FormControl<AnalysisFormat | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateAnalysisTemplatePostBodySource {
		text?: string;
	}
	export interface CreateAnalysisTemplatePostBodySourceFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateCreateAnalysisTemplatePostBodySourceFormGroup() {
		return new FormGroup<CreateAnalysisTemplatePostBodySourceFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCollaborationPostBody {

		/**
		 * A list of initial members, not including the creator. This list is immutable.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 9
		 */
		members: Array<MemberSpecification>;

		/**
		 * The display name for a collaboration.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/**
		 * A description of the collaboration provided by the collaboration owner.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		description: string;

		/**
		 * The abilities granted to the collaboration creator.
		 * Required
		 */
		creatorMemberAbilities: Array<MemberAbility>;

		/**
		 * The display name of the collaboration creator.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		creatorDisplayName: string;

		/** The settings for client-side encryption for cryptographic computing. */
		dataEncryptionMetadata?: CreateCollaborationPostBodyDataEncryptionMetadata;

		/**
		 * An indicator as to whether query logging has been enabled or disabled for the collaboration.
		 * Required
		 */
		queryLogStatus: CollaborationQueryLogStatus;

		/** Map of tags assigned to a resource */
		tags?: {[id: string]: string };
	}
	export interface CreateCollaborationPostBodyFormProperties {

		/**
		 * The display name for a collaboration.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A description of the collaboration provided by the collaboration owner.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The display name of the collaboration creator.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		creatorDisplayName: FormControl<string | null | undefined>,

		/**
		 * An indicator as to whether query logging has been enabled or disabled for the collaboration.
		 * Required
		 */
		queryLogStatus: FormControl<CollaborationQueryLogStatus | null | undefined>,

		/** Map of tags assigned to a resource */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateCollaborationPostBodyFormGroup() {
		return new FormGroup<CreateCollaborationPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*')]),
			creatorDisplayName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*')]),
			queryLogStatus: new FormControl<CollaborationQueryLogStatus | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateCollaborationPostBodyDataEncryptionMetadata {
		allowCleartext?: boolean | null;
		allowDuplicates?: boolean | null;
		allowJoinsOnColumnsWithDifferentNames?: boolean | null;
		preserveNulls?: boolean | null;
	}
	export interface CreateCollaborationPostBodyDataEncryptionMetadataFormProperties {
		allowCleartext: FormControl<boolean | null | undefined>,
		allowDuplicates: FormControl<boolean | null | undefined>,
		allowJoinsOnColumnsWithDifferentNames: FormControl<boolean | null | undefined>,
		preserveNulls: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateCollaborationPostBodyDataEncryptionMetadataFormGroup() {
		return new FormGroup<CreateCollaborationPostBodyDataEncryptionMetadataFormProperties>({
			allowCleartext: new FormControl<boolean | null | undefined>(undefined),
			allowDuplicates: new FormControl<boolean | null | undefined>(undefined),
			allowJoinsOnColumnsWithDifferentNames: new FormControl<boolean | null | undefined>(undefined),
			preserveNulls: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateConfiguredTablePostBody {

		/**
		 * The name of the configured table.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: string;

		/**
		 * A description for the configured table.
		 * Min length: 0
		 * Max length: 255
		 */
		description?: string | null;

		/**
		 * A pointer to the dataset that underlies this table. Currently, this can only be an Glue table.
		 * Required
		 */
		tableReference: CreateConfiguredTablePostBodyTableReference;

		/**
		 * The columns of the underlying table that can be used by collaborations or analysis rules.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		allowedColumns: Array<string>;

		/**
		 * The analysis method for the configured tables. The only valid value is currently `DIRECT_QUERY`.
		 * Required
		 */
		analysisMethod: AnalysisMethod;

		/** Map of tags assigned to a resource */
		tags?: {[id: string]: string };
	}
	export interface CreateConfiguredTablePostBodyFormProperties {

		/**
		 * The name of the configured table.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A description for the configured table.
		 * Min length: 0
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The analysis method for the configured tables. The only valid value is currently `DIRECT_QUERY`.
		 * Required
		 */
		analysisMethod: FormControl<AnalysisMethod | null | undefined>,

		/** Map of tags assigned to a resource */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateConfiguredTablePostBodyFormGroup() {
		return new FormGroup<CreateConfiguredTablePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*')]),
			analysisMethod: new FormControl<AnalysisMethod | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateConfiguredTablePostBodyTableReference {
		glue?: GlueTableReference;
	}
	export interface CreateConfiguredTablePostBodyTableReferenceFormProperties {
	}
	export function CreateCreateConfiguredTablePostBodyTableReferenceFormGroup() {
		return new FormGroup<CreateConfiguredTablePostBodyTableReferenceFormProperties>({
		});

	}

	export interface CreateConfiguredTableAnalysisRulePostBody {

		/**
		 * The type of analysis rule.
		 * Required
		 */
		analysisRuleType: AnalysisRuleType;

		/**
		 * Controls on the query specifications that can be run on a configured table.
		 * Required
		 */
		analysisRulePolicy: CreateConfiguredTableAnalysisRulePostBodyAnalysisRulePolicy;
	}
	export interface CreateConfiguredTableAnalysisRulePostBodyFormProperties {

		/**
		 * The type of analysis rule.
		 * Required
		 */
		analysisRuleType: FormControl<AnalysisRuleType | null | undefined>,
	}
	export function CreateCreateConfiguredTableAnalysisRulePostBodyFormGroup() {
		return new FormGroup<CreateConfiguredTableAnalysisRulePostBodyFormProperties>({
			analysisRuleType: new FormControl<AnalysisRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateConfiguredTableAnalysisRulePostBodyAnalysisRulePolicy {
		v1?: ConfiguredTableAnalysisRulePolicyV1;
	}
	export interface CreateConfiguredTableAnalysisRulePostBodyAnalysisRulePolicyFormProperties {
	}
	export function CreateCreateConfiguredTableAnalysisRulePostBodyAnalysisRulePolicyFormGroup() {
		return new FormGroup<CreateConfiguredTableAnalysisRulePostBodyAnalysisRulePolicyFormProperties>({
		});

	}

	export interface CreateConfiguredTableAssociationPostBody {

		/**
		 * The name of the configured table association. This name is used to query the underlying configured table.
		 * Required
		 * Min length: 0
		 * Max length: 128
		 */
		name: string;

		/**
		 * A description for the configured table association.
		 * Min length: 0
		 * Max length: 255
		 */
		description?: string | null;

		/**
		 * A unique identifier for the configured table to be associated to. Currently accepts a configured table ID.
		 * Required
		 * Min length: 36
		 * Max length: 36
		 */
		configuredTableIdentifier: string;

		/**
		 * The service will assume this role to access catalog metadata and query the table.
		 * Required
		 * Min length: 32
		 * Max length: 512
		 */
		roleArn: string;

		/** Map of tags assigned to a resource */
		tags?: {[id: string]: string };
	}
	export interface CreateConfiguredTableAssociationPostBodyFormProperties {

		/**
		 * The name of the configured table association. This name is used to query the underlying configured table.
		 * Required
		 * Min length: 0
		 * Max length: 128
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A description for the configured table association.
		 * Min length: 0
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for the configured table to be associated to. Currently accepts a configured table ID.
		 * Required
		 * Min length: 36
		 * Max length: 36
		 */
		configuredTableIdentifier: FormControl<string | null | undefined>,

		/**
		 * The service will assume this role to access catalog metadata and query the table.
		 * Required
		 * Min length: 32
		 * Max length: 512
		 */
		roleArn: FormControl<string | null | undefined>,

		/** Map of tags assigned to a resource */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateConfiguredTableAssociationPostBodyFormGroup() {
		return new FormGroup<CreateConfiguredTableAssociationPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_](([a-zA-Z0-9_ ]+-)*([a-zA-Z0-9_ ]+))?')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*')]),
			configuredTableIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('.*[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}.*')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(512), Validators.pattern('arn:aws:iam::[\w]+:role/[\w+=,./@-]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateMembershipPostBody {

		/**
		 * The unique ID for the associated collaboration.
		 * Required
		 * Min length: 36
		 * Max length: 36
		 */
		collaborationIdentifier: string;

		/**
		 * An indicator as to whether query logging has been enabled or disabled for the collaboration.
		 * Required
		 */
		queryLogStatus: CollaborationQueryLogStatus;

		/** Map of tags assigned to a resource */
		tags?: {[id: string]: string };
	}
	export interface CreateMembershipPostBodyFormProperties {

		/**
		 * The unique ID for the associated collaboration.
		 * Required
		 * Min length: 36
		 * Max length: 36
		 */
		collaborationIdentifier: FormControl<string | null | undefined>,

		/**
		 * An indicator as to whether query logging has been enabled or disabled for the collaboration.
		 * Required
		 */
		queryLogStatus: FormControl<CollaborationQueryLogStatus | null | undefined>,

		/** Map of tags assigned to a resource */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateMembershipPostBodyFormGroup() {
		return new FormGroup<CreateMembershipPostBodyFormProperties>({
			collaborationIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('.*[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}.*')]),
			queryLogStatus: new FormControl<CollaborationQueryLogStatus | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateAnalysisTemplatePatchBody {

		/**
		 * A new description for the analysis template.
		 * Min length: 0
		 * Max length: 255
		 */
		description?: string | null;
	}
	export interface UpdateAnalysisTemplatePatchBodyFormProperties {

		/**
		 * A new description for the analysis template.
		 * Min length: 0
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAnalysisTemplatePatchBodyFormGroup() {
		return new FormGroup<UpdateAnalysisTemplatePatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*')]),
		});

	}

	export interface UpdateCollaborationPatchBody {

		/**
		 * A human-readable identifier provided by the collaboration owner. Display names are not unique.
		 * Min length: 1
		 * Max length: 100
		 */
		name?: string | null;

		/**
		 * A description of the collaboration.
		 * Min length: 1
		 * Max length: 255
		 */
		description?: string | null;
	}
	export interface UpdateCollaborationPatchBodyFormProperties {

		/**
		 * A human-readable identifier provided by the collaboration owner. Display names are not unique.
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A description of the collaboration.
		 * Min length: 1
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCollaborationPatchBodyFormGroup() {
		return new FormGroup<UpdateCollaborationPatchBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*')]),
		});

	}

	export interface UpdateConfiguredTablePatchBody {

		/**
		 * A new name for the configured table.
		 * Min length: 1
		 * Max length: 100
		 */
		name?: string | null;

		/**
		 * A new description for the configured table.
		 * Min length: 0
		 * Max length: 255
		 */
		description?: string | null;
	}
	export interface UpdateConfiguredTablePatchBodyFormProperties {

		/**
		 * A new name for the configured table.
		 * Min length: 1
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A new description for the configured table.
		 * Min length: 0
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfiguredTablePatchBodyFormGroup() {
		return new FormGroup<UpdateConfiguredTablePatchBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*')]),
		});

	}

	export interface UpdateConfiguredTableAnalysisRulePatchBody {

		/**
		 * Controls on the query specifications that can be run on a configured table.
		 * Required
		 */
		analysisRulePolicy: UpdateConfiguredTableAnalysisRulePatchBodyAnalysisRulePolicy;
	}
	export interface UpdateConfiguredTableAnalysisRulePatchBodyFormProperties {
	}
	export function CreateUpdateConfiguredTableAnalysisRulePatchBodyFormGroup() {
		return new FormGroup<UpdateConfiguredTableAnalysisRulePatchBodyFormProperties>({
		});

	}

	export interface UpdateConfiguredTableAnalysisRulePatchBodyAnalysisRulePolicy {
		v1?: ConfiguredTableAnalysisRulePolicyV1;
	}
	export interface UpdateConfiguredTableAnalysisRulePatchBodyAnalysisRulePolicyFormProperties {
	}
	export function CreateUpdateConfiguredTableAnalysisRulePatchBodyAnalysisRulePolicyFormGroup() {
		return new FormGroup<UpdateConfiguredTableAnalysisRulePatchBodyAnalysisRulePolicyFormProperties>({
		});

	}

	export interface UpdateConfiguredTableAssociationPatchBody {

		/**
		 * A new description for the configured table association.
		 * Min length: 0
		 * Max length: 255
		 */
		description?: string | null;

		/**
		 * The service will assume this role to access catalog metadata and query the table.
		 * Min length: 32
		 * Max length: 512
		 */
		roleArn?: string | null;
	}
	export interface UpdateConfiguredTableAssociationPatchBodyFormProperties {

		/**
		 * A new description for the configured table association.
		 * Min length: 0
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The service will assume this role to access catalog metadata and query the table.
		 * Min length: 32
		 * Max length: 512
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfiguredTableAssociationPatchBodyFormGroup() {
		return new FormGroup<UpdateConfiguredTableAssociationPatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(512), Validators.pattern('arn:aws:iam::[\w]+:role/[\w+=,./@-]+')]),
		});

	}

	export interface UpdateMembershipPatchBody {

		/** An indicator as to whether query logging has been enabled or disabled for the collaboration. */
		queryLogStatus?: CollaborationQueryLogStatus | null;
	}
	export interface UpdateMembershipPatchBodyFormProperties {

		/** An indicator as to whether query logging has been enabled or disabled for the collaboration. */
		queryLogStatus: FormControl<CollaborationQueryLogStatus | null | undefined>,
	}
	export function CreateUpdateMembershipPatchBodyFormGroup() {
		return new FormGroup<UpdateMembershipPatchBodyFormProperties>({
			queryLogStatus: new FormControl<CollaborationQueryLogStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateProtectedQueryPatchBody {

		/**
		 * The target status of a query. Used to update the execution status of a currently running query.
		 * Required
		 */
		targetStatus: TargetProtectedQueryStatus;
	}
	export interface UpdateProtectedQueryPatchBodyFormProperties {

		/**
		 * The target status of a query. Used to update the execution status of a currently running query.
		 * Required
		 */
		targetStatus: FormControl<TargetProtectedQueryStatus | null | undefined>,
	}
	export function CreateUpdateProtectedQueryPatchBodyFormGroup() {
		return new FormGroup<UpdateProtectedQueryPatchBodyFormProperties>({
			targetStatus: new FormControl<TargetProtectedQueryStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartProtectedQueryPostBody {

		/**
		 * The type of the protected query to be started.
		 * Required
		 */
		type: AnalysisFormat;

		/**
		 * The parameters for the SQL type Protected Query.
		 * Required
		 */
		sqlParameters: StartProtectedQueryPostBodySqlParameters;

		/**
		 * Contains configurations for protected query results.
		 * Required
		 */
		resultConfiguration: StartProtectedQueryPostBodyResultConfiguration;
	}
	export interface StartProtectedQueryPostBodyFormProperties {

		/**
		 * The type of the protected query to be started.
		 * Required
		 */
		type: FormControl<AnalysisFormat | null | undefined>,
	}
	export function CreateStartProtectedQueryPostBodyFormGroup() {
		return new FormGroup<StartProtectedQueryPostBodyFormProperties>({
			type: new FormControl<AnalysisFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartProtectedQueryPostBodySqlParameters {
		queryString?: string;
		analysisTemplateArn?: string;
		parameters?: ParameterMap;
	}
	export interface StartProtectedQueryPostBodySqlParametersFormProperties {
		queryString: FormControl<string | null | undefined>,
		analysisTemplateArn: FormControl<string | null | undefined>,
	}
	export function CreateStartProtectedQueryPostBodySqlParametersFormGroup() {
		return new FormGroup<StartProtectedQueryPostBodySqlParametersFormProperties>({
			queryString: new FormControl<string | null | undefined>(undefined),
			analysisTemplateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartProtectedQueryPostBodyResultConfiguration {
		outputConfiguration?: ProtectedQueryOutputConfiguration;
	}
	export interface StartProtectedQueryPostBodyResultConfigurationFormProperties {
	}
	export function CreateStartProtectedQueryPostBodyResultConfigurationFormGroup() {
		return new FormGroup<StartProtectedQueryPostBodyResultConfigurationFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Map of tags assigned to a resource
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Map of tags assigned to a resource
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

