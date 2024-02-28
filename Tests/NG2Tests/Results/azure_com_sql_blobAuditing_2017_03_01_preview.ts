import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A database blob auditing policy. */
	export interface DatabaseBlobAuditingPolicy {

		/** Resource kind. */
		kind?: string | null;

		/** Properties of a database blob auditing policy. */
		properties?: DatabaseBlobAuditingPolicyProperties;
	}

	/** A database blob auditing policy. */
	export interface DatabaseBlobAuditingPolicyFormProperties {

		/** Resource kind. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseBlobAuditingPolicyFormGroup() {
		return new FormGroup<DatabaseBlobAuditingPolicyFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a database blob auditing policy. */
	export interface DatabaseBlobAuditingPolicyProperties {

		/**
		 * Specifies the Actions-Groups and Actions to audit.
		 * The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:
		 * BATCH_COMPLETED_GROUP,
		 * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,
		 * FAILED_DATABASE_AUTHENTICATION_GROUP.
		 * This above combination is also the set that is configured by default when enabling auditing from the Azure portal.
		 * The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):
		 * APPLICATION_ROLE_CHANGE_PASSWORD_GROUP
		 * BACKUP_RESTORE_GROUP
		 * DATABASE_LOGOUT_GROUP
		 * DATABASE_OBJECT_CHANGE_GROUP
		 * DATABASE_OBJECT_OWNERSHIP_CHANGE_GROUP
		 * DATABASE_OBJECT_PERMISSION_CHANGE_GROUP
		 * DATABASE_OPERATION_GROUP
		 * DATABASE_PERMISSION_CHANGE_GROUP
		 * DATABASE_PRINCIPAL_CHANGE_GROUP
		 * DATABASE_PRINCIPAL_IMPERSONATION_GROUP
		 * DATABASE_ROLE_MEMBER_CHANGE_GROUP
		 * FAILED_DATABASE_AUTHENTICATION_GROUP
		 * SCHEMA_OBJECT_ACCESS_GROUP
		 * SCHEMA_OBJECT_CHANGE_GROUP
		 * SCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUP
		 * SCHEMA_OBJECT_PERMISSION_CHANGE_GROUP
		 * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP
		 * USER_CHANGE_PASSWORD_GROUP
		 * BATCH_STARTED_GROUP
		 * BATCH_COMPLETED_GROUP
		 * These are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.
		 * For more information, see [Database-Level Audit Action Groups](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-action-groups).
		 * For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:
		 * SELECT
		 * UPDATE
		 * INSERT
		 * DELETE
		 * EXECUTE
		 * RECEIVE
		 * REFERENCES
		 * The general form for defining an action to be audited is:
		 * {action} ON {object} BY {principal}
		 * Note that <object> in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.
		 * For example:
		 * SELECT on dbo.myTable by public
		 * SELECT on DATABASE::myDatabase by public
		 * SELECT on SCHEMA::mySchema by public
		 * For more information, see [Database-Level Audit Actions](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-actions)
		 */
		auditActionsAndGroups?: Array<string>;

		/**
		 * Specifies whether audit events are sent to Azure Monitor.
		 * In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.
		 * When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.
		 * Note that for server level audit you should use the 'master' database as {databaseName}.
		 * Diagnostic Settings URI format:
		 * PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview
		 * For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
		 * or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
		 */
		isAzureMonitorTargetEnabled?: boolean | null;

		/** Specifies whether storageAccountAccessKey value is the storage's secondary key. */
		isStorageSecondaryKeyInUse?: boolean | null;

		/**
		 * Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
		 * The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		queueDelayMs?: number | null;

		/**
		 * Specifies the number of days to keep in the audit logs in the storage account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionDays?: number | null;

		/**
		 * Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
		 * Required
		 */
		state: DatabaseBlobAuditingPolicyPropertiesState;

		/** Specifies the identifier key of the auditing storage account. If state is Enabled and storageEndpoint is specified, storageAccountAccessKey is required. */
		storageAccountAccessKey?: string | null;

		/** Specifies the blob storage subscription Id. */
		storageAccountSubscriptionId?: string | null;

		/** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. */
		storageEndpoint?: string | null;
	}

	/** Properties of a database blob auditing policy. */
	export interface DatabaseBlobAuditingPolicyPropertiesFormProperties {

		/**
		 * Specifies whether audit events are sent to Azure Monitor.
		 * In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.
		 * When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.
		 * Note that for server level audit you should use the 'master' database as {databaseName}.
		 * Diagnostic Settings URI format:
		 * PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview
		 * For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
		 * or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
		 */
		isAzureMonitorTargetEnabled: FormControl<boolean | null | undefined>,

		/** Specifies whether storageAccountAccessKey value is the storage's secondary key. */
		isStorageSecondaryKeyInUse: FormControl<boolean | null | undefined>,

		/**
		 * Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
		 * The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		queueDelayMs: FormControl<number | null | undefined>,

		/**
		 * Specifies the number of days to keep in the audit logs in the storage account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionDays: FormControl<number | null | undefined>,

		/**
		 * Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
		 * Required
		 */
		state: FormControl<DatabaseBlobAuditingPolicyPropertiesState | null | undefined>,

		/** Specifies the identifier key of the auditing storage account. If state is Enabled and storageEndpoint is specified, storageAccountAccessKey is required. */
		storageAccountAccessKey: FormControl<string | null | undefined>,

		/** Specifies the blob storage subscription Id. */
		storageAccountSubscriptionId: FormControl<string | null | undefined>,

		/** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. */
		storageEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseBlobAuditingPolicyPropertiesFormGroup() {
		return new FormGroup<DatabaseBlobAuditingPolicyPropertiesFormProperties>({
			isAzureMonitorTargetEnabled: new FormControl<boolean | null | undefined>(undefined),
			isStorageSecondaryKeyInUse: new FormControl<boolean | null | undefined>(undefined),
			queueDelayMs: new FormControl<number | null | undefined>(undefined),
			retentionDays: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<DatabaseBlobAuditingPolicyPropertiesState | null | undefined>(undefined, [Validators.required]),
			storageAccountAccessKey: new FormControl<string | null | undefined>(undefined),
			storageAccountSubscriptionId: new FormControl<string | null | undefined>(undefined),
			storageEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatabaseBlobAuditingPolicyPropertiesState { Enabled = 'Enabled', Disabled = 'Disabled' }


	/** A list of database auditing settings. */
	export interface DatabaseBlobAuditingPolicyListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<DatabaseBlobAuditingPolicy>;
	}

	/** A list of database auditing settings. */
	export interface DatabaseBlobAuditingPolicyListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseBlobAuditingPolicyListResultFormGroup() {
		return new FormGroup<DatabaseBlobAuditingPolicyListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An extended database blob auditing policy. */
	export interface ExtendedDatabaseBlobAuditingPolicy {

		/** Properties of an extended database blob auditing policy. */
		properties?: ExtendedDatabaseBlobAuditingPolicyProperties;
	}

	/** An extended database blob auditing policy. */
	export interface ExtendedDatabaseBlobAuditingPolicyFormProperties {
	}
	export function CreateExtendedDatabaseBlobAuditingPolicyFormGroup() {
		return new FormGroup<ExtendedDatabaseBlobAuditingPolicyFormProperties>({
		});

	}


	/** Properties of an extended database blob auditing policy. */
	export interface ExtendedDatabaseBlobAuditingPolicyProperties {

		/**
		 * Specifies the Actions-Groups and Actions to audit.
		 * The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:
		 * BATCH_COMPLETED_GROUP,
		 * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,
		 * FAILED_DATABASE_AUTHENTICATION_GROUP.
		 * This above combination is also the set that is configured by default when enabling auditing from the Azure portal.
		 * The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):
		 * APPLICATION_ROLE_CHANGE_PASSWORD_GROUP
		 * BACKUP_RESTORE_GROUP
		 * DATABASE_LOGOUT_GROUP
		 * DATABASE_OBJECT_CHANGE_GROUP
		 * DATABASE_OBJECT_OWNERSHIP_CHANGE_GROUP
		 * DATABASE_OBJECT_PERMISSION_CHANGE_GROUP
		 * DATABASE_OPERATION_GROUP
		 * DATABASE_PERMISSION_CHANGE_GROUP
		 * DATABASE_PRINCIPAL_CHANGE_GROUP
		 * DATABASE_PRINCIPAL_IMPERSONATION_GROUP
		 * DATABASE_ROLE_MEMBER_CHANGE_GROUP
		 * FAILED_DATABASE_AUTHENTICATION_GROUP
		 * SCHEMA_OBJECT_ACCESS_GROUP
		 * SCHEMA_OBJECT_CHANGE_GROUP
		 * SCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUP
		 * SCHEMA_OBJECT_PERMISSION_CHANGE_GROUP
		 * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP
		 * USER_CHANGE_PASSWORD_GROUP
		 * BATCH_STARTED_GROUP
		 * BATCH_COMPLETED_GROUP
		 * These are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.
		 * For more information, see [Database-Level Audit Action Groups](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-action-groups).
		 * For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:
		 * SELECT
		 * UPDATE
		 * INSERT
		 * DELETE
		 * EXECUTE
		 * RECEIVE
		 * REFERENCES
		 * The general form for defining an action to be audited is:
		 * {action} ON {object} BY {principal}
		 * Note that <object> in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.
		 * For example:
		 * SELECT on dbo.myTable by public
		 * SELECT on DATABASE::myDatabase by public
		 * SELECT on SCHEMA::mySchema by public
		 * For more information, see [Database-Level Audit Actions](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-actions)
		 */
		auditActionsAndGroups?: Array<string>;

		/**
		 * Specifies whether audit events are sent to Azure Monitor.
		 * In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.
		 * When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.
		 * Note that for server level audit you should use the 'master' database as {databaseName}.
		 * Diagnostic Settings URI format:
		 * PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview
		 * For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
		 * or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
		 */
		isAzureMonitorTargetEnabled?: boolean | null;

		/** Specifies whether storageAccountAccessKey value is the storage's secondary key. */
		isStorageSecondaryKeyInUse?: boolean | null;

		/** Specifies condition of where clause when creating an audit. */
		predicateExpression?: string | null;

		/**
		 * Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
		 * The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		queueDelayMs?: number | null;

		/**
		 * Specifies the number of days to keep in the audit logs in the storage account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionDays?: number | null;

		/**
		 * Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
		 * Required
		 */
		state: DatabaseBlobAuditingPolicyPropertiesState;

		/** Specifies the identifier key of the auditing storage account. If state is Enabled and storageEndpoint is specified, storageAccountAccessKey is required. */
		storageAccountAccessKey?: string | null;

		/** Specifies the blob storage subscription Id. */
		storageAccountSubscriptionId?: string | null;

		/** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. */
		storageEndpoint?: string | null;
	}

	/** Properties of an extended database blob auditing policy. */
	export interface ExtendedDatabaseBlobAuditingPolicyPropertiesFormProperties {

		/**
		 * Specifies whether audit events are sent to Azure Monitor.
		 * In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.
		 * When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.
		 * Note that for server level audit you should use the 'master' database as {databaseName}.
		 * Diagnostic Settings URI format:
		 * PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview
		 * For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
		 * or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
		 */
		isAzureMonitorTargetEnabled: FormControl<boolean | null | undefined>,

		/** Specifies whether storageAccountAccessKey value is the storage's secondary key. */
		isStorageSecondaryKeyInUse: FormControl<boolean | null | undefined>,

		/** Specifies condition of where clause when creating an audit. */
		predicateExpression: FormControl<string | null | undefined>,

		/**
		 * Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
		 * The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		queueDelayMs: FormControl<number | null | undefined>,

		/**
		 * Specifies the number of days to keep in the audit logs in the storage account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionDays: FormControl<number | null | undefined>,

		/**
		 * Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
		 * Required
		 */
		state: FormControl<DatabaseBlobAuditingPolicyPropertiesState | null | undefined>,

		/** Specifies the identifier key of the auditing storage account. If state is Enabled and storageEndpoint is specified, storageAccountAccessKey is required. */
		storageAccountAccessKey: FormControl<string | null | undefined>,

		/** Specifies the blob storage subscription Id. */
		storageAccountSubscriptionId: FormControl<string | null | undefined>,

		/** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. */
		storageEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateExtendedDatabaseBlobAuditingPolicyPropertiesFormGroup() {
		return new FormGroup<ExtendedDatabaseBlobAuditingPolicyPropertiesFormProperties>({
			isAzureMonitorTargetEnabled: new FormControl<boolean | null | undefined>(undefined),
			isStorageSecondaryKeyInUse: new FormControl<boolean | null | undefined>(undefined),
			predicateExpression: new FormControl<string | null | undefined>(undefined),
			queueDelayMs: new FormControl<number | null | undefined>(undefined),
			retentionDays: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<DatabaseBlobAuditingPolicyPropertiesState | null | undefined>(undefined, [Validators.required]),
			storageAccountAccessKey: new FormControl<string | null | undefined>(undefined),
			storageAccountSubscriptionId: new FormControl<string | null | undefined>(undefined),
			storageEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An extended server blob auditing policy. */
	export interface ExtendedServerBlobAuditingPolicy {

		/** Properties of an extended server blob auditing policy. */
		properties?: ExtendedServerBlobAuditingPolicyProperties;
	}

	/** An extended server blob auditing policy. */
	export interface ExtendedServerBlobAuditingPolicyFormProperties {
	}
	export function CreateExtendedServerBlobAuditingPolicyFormGroup() {
		return new FormGroup<ExtendedServerBlobAuditingPolicyFormProperties>({
		});

	}


	/** Properties of an extended server blob auditing policy. */
	export interface ExtendedServerBlobAuditingPolicyProperties {

		/**
		 * Specifies the Actions-Groups and Actions to audit.
		 * The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:
		 * BATCH_COMPLETED_GROUP,
		 * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,
		 * FAILED_DATABASE_AUTHENTICATION_GROUP.
		 * This above combination is also the set that is configured by default when enabling auditing from the Azure portal.
		 * The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):
		 * APPLICATION_ROLE_CHANGE_PASSWORD_GROUP
		 * BACKUP_RESTORE_GROUP
		 * DATABASE_LOGOUT_GROUP
		 * DATABASE_OBJECT_CHANGE_GROUP
		 * DATABASE_OBJECT_OWNERSHIP_CHANGE_GROUP
		 * DATABASE_OBJECT_PERMISSION_CHANGE_GROUP
		 * DATABASE_OPERATION_GROUP
		 * DATABASE_PERMISSION_CHANGE_GROUP
		 * DATABASE_PRINCIPAL_CHANGE_GROUP
		 * DATABASE_PRINCIPAL_IMPERSONATION_GROUP
		 * DATABASE_ROLE_MEMBER_CHANGE_GROUP
		 * FAILED_DATABASE_AUTHENTICATION_GROUP
		 * SCHEMA_OBJECT_ACCESS_GROUP
		 * SCHEMA_OBJECT_CHANGE_GROUP
		 * SCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUP
		 * SCHEMA_OBJECT_PERMISSION_CHANGE_GROUP
		 * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP
		 * USER_CHANGE_PASSWORD_GROUP
		 * BATCH_STARTED_GROUP
		 * BATCH_COMPLETED_GROUP
		 * These are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.
		 * For more information, see [Database-Level Audit Action Groups](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-action-groups).
		 * For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:
		 * SELECT
		 * UPDATE
		 * INSERT
		 * DELETE
		 * EXECUTE
		 * RECEIVE
		 * REFERENCES
		 * The general form for defining an action to be audited is:
		 * {action} ON {object} BY {principal}
		 * Note that <object> in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.
		 * For example:
		 * SELECT on dbo.myTable by public
		 * SELECT on DATABASE::myDatabase by public
		 * SELECT on SCHEMA::mySchema by public
		 * For more information, see [Database-Level Audit Actions](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-actions)
		 */
		auditActionsAndGroups?: Array<string>;

		/**
		 * Specifies whether audit events are sent to Azure Monitor.
		 * In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.
		 * When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.
		 * Note that for server level audit you should use the 'master' database as {databaseName}.
		 * Diagnostic Settings URI format:
		 * PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview
		 * For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
		 * or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
		 */
		isAzureMonitorTargetEnabled?: boolean | null;

		/** Specifies whether storageAccountAccessKey value is the storage's secondary key. */
		isStorageSecondaryKeyInUse?: boolean | null;

		/** Specifies condition of where clause when creating an audit. */
		predicateExpression?: string | null;

		/**
		 * Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
		 * The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		queueDelayMs?: number | null;

		/**
		 * Specifies the number of days to keep in the audit logs in the storage account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionDays?: number | null;

		/**
		 * Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
		 * Required
		 */
		state: DatabaseBlobAuditingPolicyPropertiesState;

		/** Specifies the identifier key of the auditing storage account. If state is Enabled and storageEndpoint is specified, storageAccountAccessKey is required. */
		storageAccountAccessKey?: string | null;

		/** Specifies the blob storage subscription Id. */
		storageAccountSubscriptionId?: string | null;

		/** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. */
		storageEndpoint?: string | null;
	}

	/** Properties of an extended server blob auditing policy. */
	export interface ExtendedServerBlobAuditingPolicyPropertiesFormProperties {

		/**
		 * Specifies whether audit events are sent to Azure Monitor.
		 * In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.
		 * When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.
		 * Note that for server level audit you should use the 'master' database as {databaseName}.
		 * Diagnostic Settings URI format:
		 * PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview
		 * For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
		 * or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
		 */
		isAzureMonitorTargetEnabled: FormControl<boolean | null | undefined>,

		/** Specifies whether storageAccountAccessKey value is the storage's secondary key. */
		isStorageSecondaryKeyInUse: FormControl<boolean | null | undefined>,

		/** Specifies condition of where clause when creating an audit. */
		predicateExpression: FormControl<string | null | undefined>,

		/**
		 * Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
		 * The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		queueDelayMs: FormControl<number | null | undefined>,

		/**
		 * Specifies the number of days to keep in the audit logs in the storage account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionDays: FormControl<number | null | undefined>,

		/**
		 * Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
		 * Required
		 */
		state: FormControl<DatabaseBlobAuditingPolicyPropertiesState | null | undefined>,

		/** Specifies the identifier key of the auditing storage account. If state is Enabled and storageEndpoint is specified, storageAccountAccessKey is required. */
		storageAccountAccessKey: FormControl<string | null | undefined>,

		/** Specifies the blob storage subscription Id. */
		storageAccountSubscriptionId: FormControl<string | null | undefined>,

		/** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. */
		storageEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateExtendedServerBlobAuditingPolicyPropertiesFormGroup() {
		return new FormGroup<ExtendedServerBlobAuditingPolicyPropertiesFormProperties>({
			isAzureMonitorTargetEnabled: new FormControl<boolean | null | undefined>(undefined),
			isStorageSecondaryKeyInUse: new FormControl<boolean | null | undefined>(undefined),
			predicateExpression: new FormControl<string | null | undefined>(undefined),
			queueDelayMs: new FormControl<number | null | undefined>(undefined),
			retentionDays: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<DatabaseBlobAuditingPolicyPropertiesState | null | undefined>(undefined, [Validators.required]),
			storageAccountAccessKey: new FormControl<string | null | undefined>(undefined),
			storageAccountSubscriptionId: new FormControl<string | null | undefined>(undefined),
			storageEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A server blob auditing policy. */
	export interface ServerBlobAuditingPolicy {

		/** Properties of a server blob auditing policy. */
		properties?: ServerBlobAuditingPolicyProperties;
	}

	/** A server blob auditing policy. */
	export interface ServerBlobAuditingPolicyFormProperties {
	}
	export function CreateServerBlobAuditingPolicyFormGroup() {
		return new FormGroup<ServerBlobAuditingPolicyFormProperties>({
		});

	}


	/** Properties of a server blob auditing policy. */
	export interface ServerBlobAuditingPolicyProperties {

		/**
		 * Specifies the Actions-Groups and Actions to audit.
		 * The recommended set of action groups to use is the following combination - this will audit all the queries and stored procedures executed against the database, as well as successful and failed logins:
		 * BATCH_COMPLETED_GROUP,
		 * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP,
		 * FAILED_DATABASE_AUTHENTICATION_GROUP.
		 * This above combination is also the set that is configured by default when enabling auditing from the Azure portal.
		 * The supported action groups to audit are (note: choose only specific groups that cover your auditing needs. Using unnecessary groups could lead to very large quantities of audit records):
		 * APPLICATION_ROLE_CHANGE_PASSWORD_GROUP
		 * BACKUP_RESTORE_GROUP
		 * DATABASE_LOGOUT_GROUP
		 * DATABASE_OBJECT_CHANGE_GROUP
		 * DATABASE_OBJECT_OWNERSHIP_CHANGE_GROUP
		 * DATABASE_OBJECT_PERMISSION_CHANGE_GROUP
		 * DATABASE_OPERATION_GROUP
		 * DATABASE_PERMISSION_CHANGE_GROUP
		 * DATABASE_PRINCIPAL_CHANGE_GROUP
		 * DATABASE_PRINCIPAL_IMPERSONATION_GROUP
		 * DATABASE_ROLE_MEMBER_CHANGE_GROUP
		 * FAILED_DATABASE_AUTHENTICATION_GROUP
		 * SCHEMA_OBJECT_ACCESS_GROUP
		 * SCHEMA_OBJECT_CHANGE_GROUP
		 * SCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUP
		 * SCHEMA_OBJECT_PERMISSION_CHANGE_GROUP
		 * SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP
		 * USER_CHANGE_PASSWORD_GROUP
		 * BATCH_STARTED_GROUP
		 * BATCH_COMPLETED_GROUP
		 * These are groups that cover all sql statements and stored procedures executed against the database, and should not be used in combination with other groups as this will result in duplicate audit logs.
		 * For more information, see [Database-Level Audit Action Groups](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-action-groups).
		 * For Database auditing policy, specific Actions can also be specified (note that Actions cannot be specified for Server auditing policy). The supported actions to audit are:
		 * SELECT
		 * UPDATE
		 * INSERT
		 * DELETE
		 * EXECUTE
		 * RECEIVE
		 * REFERENCES
		 * The general form for defining an action to be audited is:
		 * {action} ON {object} BY {principal}
		 * Note that <object> in the above format can refer to an object like a table, view, or stored procedure, or an entire database or schema. For the latter cases, the forms DATABASE::{db_name} and SCHEMA::{schema_name} are used, respectively.
		 * For example:
		 * SELECT on dbo.myTable by public
		 * SELECT on DATABASE::myDatabase by public
		 * SELECT on SCHEMA::mySchema by public
		 * For more information, see [Database-Level Audit Actions](https://docs.microsoft.com/en-us/sql/relational-databases/security/auditing/sql-server-audit-action-groups-and-actions#database-level-audit-actions)
		 */
		auditActionsAndGroups?: Array<string>;

		/**
		 * Specifies whether audit events are sent to Azure Monitor.
		 * In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.
		 * When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.
		 * Note that for server level audit you should use the 'master' database as {databaseName}.
		 * Diagnostic Settings URI format:
		 * PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview
		 * For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
		 * or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
		 */
		isAzureMonitorTargetEnabled?: boolean | null;

		/** Specifies whether storageAccountAccessKey value is the storage's secondary key. */
		isStorageSecondaryKeyInUse?: boolean | null;

		/**
		 * Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
		 * The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		queueDelayMs?: number | null;

		/**
		 * Specifies the number of days to keep in the audit logs in the storage account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionDays?: number | null;

		/**
		 * Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
		 * Required
		 */
		state: DatabaseBlobAuditingPolicyPropertiesState;

		/** Specifies the identifier key of the auditing storage account. If state is Enabled and storageEndpoint is specified, storageAccountAccessKey is required. */
		storageAccountAccessKey?: string | null;

		/** Specifies the blob storage subscription Id. */
		storageAccountSubscriptionId?: string | null;

		/** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. */
		storageEndpoint?: string | null;
	}

	/** Properties of a server blob auditing policy. */
	export interface ServerBlobAuditingPolicyPropertiesFormProperties {

		/**
		 * Specifies whether audit events are sent to Azure Monitor.
		 * In order to send the events to Azure Monitor, specify 'state' as 'Enabled' and 'isAzureMonitorTargetEnabled' as true.
		 * When using REST API to configure auditing, Diagnostic Settings with 'SQLSecurityAuditEvents' diagnostic logs category on the database should be also created.
		 * Note that for server level audit you should use the 'master' database as {databaseName}.
		 * Diagnostic Settings URI format:
		 * PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/providers/microsoft.insights/diagnosticSettings/{settingsName}?api-version=2017-05-01-preview
		 * For more information, see [Diagnostic Settings REST API](https://go.microsoft.com/fwlink/?linkid=2033207)
		 * or [Diagnostic Settings PowerShell](https://go.microsoft.com/fwlink/?linkid=2033043)
		 */
		isAzureMonitorTargetEnabled: FormControl<boolean | null | undefined>,

		/** Specifies whether storageAccountAccessKey value is the storage's secondary key. */
		isStorageSecondaryKeyInUse: FormControl<boolean | null | undefined>,

		/**
		 * Specifies the amount of time in milliseconds that can elapse before audit actions are forced to be processed.
		 * The default minimum value is 1000 (1 second). The maximum is 2,147,483,647.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		queueDelayMs: FormControl<number | null | undefined>,

		/**
		 * Specifies the number of days to keep in the audit logs in the storage account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionDays: FormControl<number | null | undefined>,

		/**
		 * Specifies the state of the policy. If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled are required.
		 * Required
		 */
		state: FormControl<DatabaseBlobAuditingPolicyPropertiesState | null | undefined>,

		/** Specifies the identifier key of the auditing storage account. If state is Enabled and storageEndpoint is specified, storageAccountAccessKey is required. */
		storageAccountAccessKey: FormControl<string | null | undefined>,

		/** Specifies the blob storage subscription Id. */
		storageAccountSubscriptionId: FormControl<string | null | undefined>,

		/** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint or isAzureMonitorTargetEnabled is required. */
		storageEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateServerBlobAuditingPolicyPropertiesFormGroup() {
		return new FormGroup<ServerBlobAuditingPolicyPropertiesFormProperties>({
			isAzureMonitorTargetEnabled: new FormControl<boolean | null | undefined>(undefined),
			isStorageSecondaryKeyInUse: new FormControl<boolean | null | undefined>(undefined),
			queueDelayMs: new FormControl<number | null | undefined>(undefined),
			retentionDays: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<DatabaseBlobAuditingPolicyPropertiesState | null | undefined>(undefined, [Validators.required]),
			storageAccountAccessKey: new FormControl<string | null | undefined>(undefined),
			storageAccountSubscriptionId: new FormControl<string | null | undefined>(undefined),
			storageEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of server auditing settings. */
	export interface ServerBlobAuditingPolicyListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ServerBlobAuditingPolicy>;
	}

	/** A list of server auditing settings. */
	export interface ServerBlobAuditingPolicyListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateServerBlobAuditingPolicyListResultFormGroup() {
		return new FormGroup<ServerBlobAuditingPolicyListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists auditing settings of a server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/auditingSettings
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ServerBlobAuditingPolicyListResult} Successfully retrieved server auditing settings.
		 */
		ServerBlobAuditingPolicies_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<ServerBlobAuditingPolicyListResult> {
			return this.http.get<ServerBlobAuditingPolicyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/auditingSettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a server's blob auditing policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/auditingSettings/{blobAuditingPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {ServerBlobAuditingPolicies_GetBlobAuditingPolicyName} blobAuditingPolicyName The name of the blob auditing policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ServerBlobAuditingPolicy} Successfully retrieved the server blob auditing policy.
		 */
		ServerBlobAuditingPolicies_Get(resourceGroupName: string, serverName: string, blobAuditingPolicyName: ServerBlobAuditingPolicies_GetBlobAuditingPolicyName, subscriptionId: string, api_version: string): Observable<ServerBlobAuditingPolicy> {
			return this.http.get<ServerBlobAuditingPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/auditingSettings/' + blobAuditingPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a server's blob auditing policy.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/auditingSettings/{blobAuditingPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {ServerBlobAuditingPolicies_GetBlobAuditingPolicyName} blobAuditingPolicyName The name of the blob auditing policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ServerBlobAuditingPolicy} requestBody Properties of blob auditing policy
		 * @return {ServerBlobAuditingPolicy} Successfully updated the auditing settings.
		 */
		ServerBlobAuditingPolicies_CreateOrUpdate(resourceGroupName: string, serverName: string, blobAuditingPolicyName: ServerBlobAuditingPolicies_GetBlobAuditingPolicyName, subscriptionId: string, api_version: string, requestBody: ServerBlobAuditingPolicy): Observable<ServerBlobAuditingPolicy> {
			return this.http.put<ServerBlobAuditingPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/auditingSettings/' + blobAuditingPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists auditing settings of a database.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingSettings
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseBlobAuditingPolicyListResult} Successfully retrieved database auditing settings.
		 */
		DatabaseBlobAuditingPolicies_ListByDatabase(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<DatabaseBlobAuditingPolicyListResult> {
			return this.http.get<DatabaseBlobAuditingPolicyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/auditingSettings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a database's blob auditing policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingSettings/{blobAuditingPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {ServerBlobAuditingPolicies_GetBlobAuditingPolicyName} blobAuditingPolicyName The name of the blob auditing policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseBlobAuditingPolicy} Successfully retrieved the database blob auditing policy.
		 */
		DatabaseBlobAuditingPolicies_Get(resourceGroupName: string, serverName: string, databaseName: string, blobAuditingPolicyName: ServerBlobAuditingPolicies_GetBlobAuditingPolicyName, subscriptionId: string, api_version: string): Observable<DatabaseBlobAuditingPolicy> {
			return this.http.get<DatabaseBlobAuditingPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/auditingSettings/' + blobAuditingPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a database's blob auditing policy.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingSettings/{blobAuditingPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {ServerBlobAuditingPolicies_GetBlobAuditingPolicyName} blobAuditingPolicyName The name of the blob auditing policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {DatabaseBlobAuditingPolicy} requestBody The database blob auditing policy.
		 * @return {DatabaseBlobAuditingPolicy} Successfully set the database blob auditing policy.
		 */
		DatabaseBlobAuditingPolicies_CreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, blobAuditingPolicyName: ServerBlobAuditingPolicies_GetBlobAuditingPolicyName, subscriptionId: string, api_version: string, requestBody: DatabaseBlobAuditingPolicy): Observable<DatabaseBlobAuditingPolicy> {
			return this.http.put<DatabaseBlobAuditingPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/auditingSettings/' + blobAuditingPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets an extended database's blob auditing policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/extendedAuditingSettings/{blobAuditingPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {ServerBlobAuditingPolicies_GetBlobAuditingPolicyName} blobAuditingPolicyName The name of the blob auditing policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ExtendedDatabaseBlobAuditingPolicy} Successfully retrieved the extended database blob auditing policy.
		 */
		ExtendedDatabaseBlobAuditingPolicies_Get(resourceGroupName: string, serverName: string, databaseName: string, blobAuditingPolicyName: ServerBlobAuditingPolicies_GetBlobAuditingPolicyName, subscriptionId: string, api_version: string): Observable<ExtendedDatabaseBlobAuditingPolicy> {
			return this.http.get<ExtendedDatabaseBlobAuditingPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/extendedAuditingSettings/' + blobAuditingPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an extended database's blob auditing policy.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/extendedAuditingSettings/{blobAuditingPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {ServerBlobAuditingPolicies_GetBlobAuditingPolicyName} blobAuditingPolicyName The name of the blob auditing policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ExtendedDatabaseBlobAuditingPolicy} requestBody The extended database blob auditing policy.
		 * @return {ExtendedDatabaseBlobAuditingPolicy} Successfully set the extended database blob auditing policy.
		 */
		ExtendedDatabaseBlobAuditingPolicies_CreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, blobAuditingPolicyName: ServerBlobAuditingPolicies_GetBlobAuditingPolicyName, subscriptionId: string, api_version: string, requestBody: ExtendedDatabaseBlobAuditingPolicy): Observable<ExtendedDatabaseBlobAuditingPolicy> {
			return this.http.put<ExtendedDatabaseBlobAuditingPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/extendedAuditingSettings/' + blobAuditingPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets an extended server's blob auditing policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/extendedAuditingSettings/{blobAuditingPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {ServerBlobAuditingPolicies_GetBlobAuditingPolicyName} blobAuditingPolicyName The name of the blob auditing policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ExtendedServerBlobAuditingPolicy} Successfully retrieved the extended server blob auditing policy.
		 */
		ExtendedServerBlobAuditingPolicies_Get(resourceGroupName: string, serverName: string, blobAuditingPolicyName: ServerBlobAuditingPolicies_GetBlobAuditingPolicyName, subscriptionId: string, api_version: string): Observable<ExtendedServerBlobAuditingPolicy> {
			return this.http.get<ExtendedServerBlobAuditingPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/extendedAuditingSettings/' + blobAuditingPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an extended server's blob auditing policy.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/extendedAuditingSettings/{blobAuditingPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {ServerBlobAuditingPolicies_GetBlobAuditingPolicyName} blobAuditingPolicyName The name of the blob auditing policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ExtendedServerBlobAuditingPolicy} requestBody Properties of extended blob auditing policy
		 * @return {ExtendedServerBlobAuditingPolicy} Successfully updated the extended auditing settings.
		 */
		ExtendedServerBlobAuditingPolicies_CreateOrUpdate(resourceGroupName: string, serverName: string, blobAuditingPolicyName: ServerBlobAuditingPolicies_GetBlobAuditingPolicyName, subscriptionId: string, api_version: string, requestBody: ExtendedServerBlobAuditingPolicy): Observable<ExtendedServerBlobAuditingPolicy> {
			return this.http.put<ExtendedServerBlobAuditingPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/extendedAuditingSettings/' + blobAuditingPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum ServerBlobAuditingPolicies_GetBlobAuditingPolicyName { default = 'default' }

}

