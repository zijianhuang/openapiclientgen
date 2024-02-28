import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A Data Lake Analytics catalog access control list (ACL) entry. */
	export interface Acl {

		/** the access control list (ACL) entry type. UserObj and GroupObj denote the owning user and group, respectively. */
		aceType?: AclAceType | null;

		/** the permission type of the access control list (ACL) entry. */
		permission?: AclPermission | null;

		/** the Azure AD object ID of the user or group being specified in the access control list (ACL) entry. */
		principalId?: string | null;
	}

	/** A Data Lake Analytics catalog access control list (ACL) entry. */
	export interface AclFormProperties {

		/** the access control list (ACL) entry type. UserObj and GroupObj denote the owning user and group, respectively. */
		aceType: FormControl<AclAceType | null | undefined>,

		/** the permission type of the access control list (ACL) entry. */
		permission: FormControl<AclPermission | null | undefined>,

		/** the Azure AD object ID of the user or group being specified in the access control list (ACL) entry. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateAclFormGroup() {
		return new FormGroup<AclFormProperties>({
			aceType: new FormControl<AclAceType | null | undefined>(undefined),
			permission: new FormControl<AclPermission | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AclAceType { UserObj = 'UserObj', GroupObj = 'GroupObj', Other = 'Other', User = 'User', Group = 'Group' }

	export enum AclPermission { None = 'None', Use = 'Use', Create = 'Create', Drop = 'Drop', Alter = 'Alter', Write = 'Write', All = 'All' }


	/** The parameters used to create or update an access control list (ACL) entry. */
	export interface AclCreateOrUpdateParameters {

		/**
		 * the access control list (ACL) entry type. UserObj and GroupObj denote the owning user and group, respectively.
		 * Required
		 */
		aceType: AclAceType;

		/**
		 * the permission type of the access control list (ACL) entry.
		 * Required
		 */
		permission: AclPermission;

		/**
		 * the Azure AD object ID of the user or group being specified in the access control list (ACL) entry.
		 * Required
		 */
		principalId: string;
	}

	/** The parameters used to create or update an access control list (ACL) entry. */
	export interface AclCreateOrUpdateParametersFormProperties {

		/**
		 * the access control list (ACL) entry type. UserObj and GroupObj denote the owning user and group, respectively.
		 * Required
		 */
		aceType: FormControl<AclAceType | null | undefined>,

		/**
		 * the permission type of the access control list (ACL) entry.
		 * Required
		 */
		permission: FormControl<AclPermission | null | undefined>,

		/**
		 * the Azure AD object ID of the user or group being specified in the access control list (ACL) entry.
		 * Required
		 */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateAclCreateOrUpdateParametersFormGroup() {
		return new FormGroup<AclCreateOrUpdateParametersFormProperties>({
			aceType: new FormControl<AclAceType | null | undefined>(undefined, [Validators.required]),
			permission: new FormControl<AclPermission | null | undefined>(undefined, [Validators.required]),
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters used to delete an access control list (ACL) entry. */
	export interface AclDeleteParameters {

		/**
		 * the access control list (ACL) entry type. UserObj and GroupObj denote the owning user and group, respectively.
		 * Required
		 */
		aceType: AclAceType;

		/**
		 * the Azure AD object ID of the user or group being specified in the access control list (ACL) entry.
		 * Required
		 */
		principalId: string;
	}

	/** The parameters used to delete an access control list (ACL) entry. */
	export interface AclDeleteParametersFormProperties {

		/**
		 * the access control list (ACL) entry type. UserObj and GroupObj denote the owning user and group, respectively.
		 * Required
		 */
		aceType: FormControl<AclAceType | null | undefined>,

		/**
		 * the Azure AD object ID of the user or group being specified in the access control list (ACL) entry.
		 * Required
		 */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateAclDeleteParametersFormGroup() {
		return new FormGroup<AclDeleteParametersFormProperties>({
			aceType: new FormControl<AclAceType | null | undefined>(undefined, [Validators.required]),
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A Data Lake Analytics catalog access control list (ACL). */
	export interface AclList extends CatalogItemList {

		/** the access control list (ACL). */
		value?: Array<Acl>;
	}

	/** A Data Lake Analytics catalog access control list (ACL). */
	export interface AclListFormProperties extends CatalogItemListFormProperties {
	}
	export function CreateAclListFormGroup() {
		return new FormGroup<AclListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog item. */
	export interface CatalogItem {

		/** the name of the Data Lake Analytics account. */
		computeAccountName?: string | null;

		/** the version of the catalog item. */
		version?: string | null;
	}

	/** A Data Lake Analytics catalog item. */
	export interface CatalogItemFormProperties {

		/** the name of the Data Lake Analytics account. */
		computeAccountName: FormControl<string | null | undefined>,

		/** the version of the catalog item. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateCatalogItemFormGroup() {
		return new FormGroup<CatalogItemFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog item list. */
	export interface CatalogItemList {

		/** the link to the next page of results. */
		nextLink?: string | null;
	}

	/** A Data Lake Analytics catalog item list. */
	export interface CatalogItemListFormProperties {

		/** the link to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCatalogItemListFormGroup() {
		return new FormGroup<CatalogItemListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Lake Analytics catalog credential creation parameters. */
	export interface DataLakeAnalyticsCatalogCredentialCreateParameters {

		/**
		 * the password for the credential and user with access to the data source.
		 * Required
		 */
		password: string;

		/**
		 * the URI identifier for the data source this credential can connect to in the format <hostname>:<port>
		 * Required
		 */
		uri: string;

		/**
		 * the object identifier for the user associated with this credential with access to the data source.
		 * Required
		 */
		userId: string;
	}

	/** Data Lake Analytics catalog credential creation parameters. */
	export interface DataLakeAnalyticsCatalogCredentialCreateParametersFormProperties {

		/**
		 * the password for the credential and user with access to the data source.
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * the URI identifier for the data source this credential can connect to in the format <hostname>:<port>
		 * Required
		 */
		uri: FormControl<string | null | undefined>,

		/**
		 * the object identifier for the user associated with this credential with access to the data source.
		 * Required
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeAnalyticsCatalogCredentialCreateParametersFormGroup() {
		return new FormGroup<DataLakeAnalyticsCatalogCredentialCreateParametersFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Data Lake Analytics catalog credential deletion parameters. */
	export interface DataLakeAnalyticsCatalogCredentialDeleteParameters {

		/** the current password for the credential and user with access to the data source. This is required if the requester is not the account owner. */
		password?: string | null;
	}

	/** Data Lake Analytics catalog credential deletion parameters. */
	export interface DataLakeAnalyticsCatalogCredentialDeleteParametersFormProperties {

		/** the current password for the credential and user with access to the data source. This is required if the requester is not the account owner. */
		password: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeAnalyticsCatalogCredentialDeleteParametersFormGroup() {
		return new FormGroup<DataLakeAnalyticsCatalogCredentialDeleteParametersFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Lake Analytics catalog credential update parameters. */
	export interface DataLakeAnalyticsCatalogCredentialUpdateParameters {

		/** the new password for the credential and user with access to the data source. */
		newPassword?: string | null;

		/** the current password for the credential and user with access to the data source. This is required if the requester is not the account owner. */
		password?: string | null;

		/** the URI identifier for the data source this credential can connect to in the format <hostname>:<port> */
		uri?: string | null;

		/** the object identifier for the user associated with this credential with access to the data source. */
		userId?: string | null;
	}

	/** Data Lake Analytics catalog credential update parameters. */
	export interface DataLakeAnalyticsCatalogCredentialUpdateParametersFormProperties {

		/** the new password for the credential and user with access to the data source. */
		newPassword: FormControl<string | null | undefined>,

		/** the current password for the credential and user with access to the data source. This is required if the requester is not the account owner. */
		password: FormControl<string | null | undefined>,

		/** the URI identifier for the data source this credential can connect to in the format <hostname>:<port> */
		uri: FormControl<string | null | undefined>,

		/** the object identifier for the user associated with this credential with access to the data source. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeAnalyticsCatalogCredentialUpdateParametersFormGroup() {
		return new FormGroup<DataLakeAnalyticsCatalogCredentialUpdateParametersFormProperties>({
			newPassword: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Lake Analytics catalog secret creation and update parameters. This is deprecated and will be removed in the next release. Please use DataLakeAnalyticsCatalogCredentialCreateOrUpdateParameters instead. */
	export interface DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters {

		/**
		 * the password for the secret to pass in
		 * Required
		 */
		password: string;

		/** the URI identifier for the secret in the format <hostname>:<port> */
		uri?: string | null;
	}

	/** Data Lake Analytics catalog secret creation and update parameters. This is deprecated and will be removed in the next release. Please use DataLakeAnalyticsCatalogCredentialCreateOrUpdateParameters instead. */
	export interface DataLakeAnalyticsCatalogSecretCreateOrUpdateParametersFormProperties {

		/**
		 * the password for the secret to pass in
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/** the URI identifier for the secret in the format <hostname>:<port> */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeAnalyticsCatalogSecretCreateOrUpdateParametersFormGroup() {
		return new FormGroup<DataLakeAnalyticsCatalogSecretCreateOrUpdateParametersFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics DDL name item. */
	export interface DdlName {

		/** the name of the table associated with this database and schema. */
		firstPart?: string | null;

		/** the name of the table associated with this database and schema. */
		secondPart?: string | null;

		/** the name of the table associated with this database and schema. */
		server?: string | null;

		/** the name of the table associated with this database and schema. */
		thirdPart?: string | null;
	}

	/** A Data Lake Analytics DDL name item. */
	export interface DdlNameFormProperties {

		/** the name of the table associated with this database and schema. */
		firstPart: FormControl<string | null | undefined>,

		/** the name of the table associated with this database and schema. */
		secondPart: FormControl<string | null | undefined>,

		/** the name of the table associated with this database and schema. */
		server: FormControl<string | null | undefined>,

		/** the name of the table associated with this database and schema. */
		thirdPart: FormControl<string | null | undefined>,
	}
	export function CreateDdlNameFormGroup() {
		return new FormGroup<DdlNameFormProperties>({
			firstPart: new FormControl<string | null | undefined>(undefined),
			secondPart: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
			thirdPart: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog entity identifier object. */
	export interface EntityId {

		/** A Data Lake Analytics DDL name item. */
		name?: DdlName;

		/** the version of the external data source. */
		version?: string | null;
	}

	/** A Data Lake Analytics catalog entity identifier object. */
	export interface EntityIdFormProperties {

		/** the version of the external data source. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateEntityIdFormGroup() {
		return new FormGroup<EntityIdFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog external table item. */
	export interface ExternalTable {

		/** A Data Lake Analytics catalog entity identifier object. */
		dataSource?: EntityId;

		/** the name of the table associated with this database and schema. */
		tableName?: string | null;
	}

	/** A Data Lake Analytics catalog external table item. */
	export interface ExternalTableFormProperties {

		/** the name of the table associated with this database and schema. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateExternalTableFormGroup() {
		return new FormGroup<ExternalTableFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog type field information item. */
	export interface TypeFieldInfo {

		/** the name of the field associated with this type. */
		name?: string | null;

		/** the type of the field. */
		type?: string | null;
	}

	/** A Data Lake Analytics catalog type field information item. */
	export interface TypeFieldInfoFormProperties {

		/** the name of the field associated with this type. */
		name: FormControl<string | null | undefined>,

		/** the type of the field. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTypeFieldInfoFormGroup() {
		return new FormGroup<TypeFieldInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL Assembly. */
	export interface USqlAssembly extends CatalogItem {

		/** the name of the assembly. */
		assemblyName?: string | null;

		/** the name of the CLR. */
		clrName?: string | null;

		/** the name of the database. */
		databaseName?: string | null;

		/** the list of dependencies associated with the assembly */
		dependencies?: Array<USqlAssemblyDependencyInfo>;

		/** the list of files associated with the assembly */
		files?: Array<USqlAssemblyFileInfo>;

		/** the switch indicating if this assembly is user defined or not. */
		isUserDefined?: boolean | null;

		/** the switch indicating if this assembly is visible or not. */
		isVisible?: boolean | null;
	}

	/** A Data Lake Analytics catalog U-SQL Assembly. */
	export interface USqlAssemblyFormProperties extends CatalogItemFormProperties {

		/** the name of the assembly. */
		assemblyName: FormControl<string | null | undefined>,

		/** the name of the CLR. */
		clrName: FormControl<string | null | undefined>,

		/** the name of the database. */
		databaseName: FormControl<string | null | undefined>,

		/** the switch indicating if this assembly is user defined or not. */
		isUserDefined: FormControl<boolean | null | undefined>,

		/** the switch indicating if this assembly is visible or not. */
		isVisible: FormControl<boolean | null | undefined>,
	}
	export function CreateUSqlAssemblyFormGroup() {
		return new FormGroup<USqlAssemblyFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			assemblyName: new FormControl<string | null | undefined>(undefined),
			clrName: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			isUserDefined: new FormControl<boolean | null | undefined>(undefined),
			isVisible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL dependency information item. */
	export interface USqlAssemblyDependencyInfo {

		/** A Data Lake Analytics catalog entity identifier object. */
		entityId?: EntityId;
	}

	/** A Data Lake Analytics catalog U-SQL dependency information item. */
	export interface USqlAssemblyDependencyInfoFormProperties {
	}
	export function CreateUSqlAssemblyDependencyInfoFormGroup() {
		return new FormGroup<USqlAssemblyDependencyInfoFormProperties>({
		});

	}


	/** A Data Lake Analytics catalog U-SQL assembly file information item. */
	export interface USqlAssemblyFileInfo {

		/** The content path to the assembly file. */
		contentPath?: string | null;

		/** The original path to the assembly file. */
		originalPath?: string | null;

		/** the assembly file type. */
		type?: USqlAssemblyFileInfoType | null;
	}

	/** A Data Lake Analytics catalog U-SQL assembly file information item. */
	export interface USqlAssemblyFileInfoFormProperties {

		/** The content path to the assembly file. */
		contentPath: FormControl<string | null | undefined>,

		/** The original path to the assembly file. */
		originalPath: FormControl<string | null | undefined>,

		/** the assembly file type. */
		type: FormControl<USqlAssemblyFileInfoType | null | undefined>,
	}
	export function CreateUSqlAssemblyFileInfoFormGroup() {
		return new FormGroup<USqlAssemblyFileInfoFormProperties>({
			contentPath: new FormControl<string | null | undefined>(undefined),
			originalPath: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<USqlAssemblyFileInfoType | null | undefined>(undefined),
		});

	}

	export enum USqlAssemblyFileInfoType { Assembly = 'Assembly', Resource = 'Resource', Nodeploy = 'Nodeploy' }


	/** A Data Lake Analytics catalog U-SQL assembly CLR item. */
	export interface USqlAssemblyClr extends CatalogItem {

		/** the name of the assembly. */
		assemblyClrName?: string | null;

		/** the name of the CLR. */
		clrName?: string | null;

		/** the name of the database. */
		databaseName?: string | null;
	}

	/** A Data Lake Analytics catalog U-SQL assembly CLR item. */
	export interface USqlAssemblyClrFormProperties extends CatalogItemFormProperties {

		/** the name of the assembly. */
		assemblyClrName: FormControl<string | null | undefined>,

		/** the name of the CLR. */
		clrName: FormControl<string | null | undefined>,

		/** the name of the database. */
		databaseName: FormControl<string | null | undefined>,
	}
	export function CreateUSqlAssemblyClrFormGroup() {
		return new FormGroup<USqlAssemblyClrFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			assemblyClrName: new FormControl<string | null | undefined>(undefined),
			clrName: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL assembly CLR item list. */
	export interface USqlAssemblyList extends CatalogItemList {

		/** the list of assemblies in the database */
		value?: Array<USqlAssemblyClr>;
	}

	/** A Data Lake Analytics catalog U-SQL assembly CLR item list. */
	export interface USqlAssemblyListFormProperties extends CatalogItemListFormProperties {
	}
	export function CreateUSqlAssemblyListFormGroup() {
		return new FormGroup<USqlAssemblyListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL credential item. */
	export interface USqlCredential extends CatalogItem {

		/** the name of the credential. */
		credentialName?: string | null;
	}

	/** A Data Lake Analytics catalog U-SQL credential item. */
	export interface USqlCredentialFormProperties extends CatalogItemFormProperties {

		/** the name of the credential. */
		credentialName: FormControl<string | null | undefined>,
	}
	export function CreateUSqlCredentialFormGroup() {
		return new FormGroup<USqlCredentialFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			credentialName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL credential item list. */
	export interface USqlCredentialList extends CatalogItemList {

		/** the list of credentials in the database */
		value?: Array<USqlCredential>;
	}

	/** A Data Lake Analytics catalog U-SQL credential item list. */
	export interface USqlCredentialListFormProperties extends CatalogItemListFormProperties {
	}
	export function CreateUSqlCredentialListFormGroup() {
		return new FormGroup<USqlCredentialListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL database item. */
	export interface USqlDatabase extends CatalogItem {

		/** the name of the database. */
		databaseName?: string | null;
	}

	/** A Data Lake Analytics catalog U-SQL database item. */
	export interface USqlDatabaseFormProperties extends CatalogItemFormProperties {

		/** the name of the database. */
		databaseName: FormControl<string | null | undefined>,
	}
	export function CreateUSqlDatabaseFormGroup() {
		return new FormGroup<USqlDatabaseFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL database item list. */
	export interface USqlDatabaseList extends CatalogItemList {

		/** the list of databases */
		value?: Array<USqlDatabase>;
	}

	/** A Data Lake Analytics catalog U-SQL database item list. */
	export interface USqlDatabaseListFormProperties extends CatalogItemListFormProperties {
	}
	export function CreateUSqlDatabaseListFormGroup() {
		return new FormGroup<USqlDatabaseListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL directed column item. */
	export interface USqlDirectedColumn {

		/** the switch indicating if the index is descending or not. */
		descending?: boolean | null;

		/** the name of the index in the table. */
		name?: string | null;
	}

	/** A Data Lake Analytics catalog U-SQL directed column item. */
	export interface USqlDirectedColumnFormProperties {

		/** the switch indicating if the index is descending or not. */
		descending: FormControl<boolean | null | undefined>,

		/** the name of the index in the table. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUSqlDirectedColumnFormGroup() {
		return new FormGroup<USqlDirectedColumnFormProperties>({
			descending: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL distribution information object. */
	export interface USqlDistributionInfo {

		/**
		 * the count of indices using this distribution.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/**
		 * the dynamic count of indices using this distribution.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dynamicCount?: number | null;

		/** the list of directed columns in the distribution */
		keys?: Array<USqlDirectedColumn>;

		/**
		 * the type of this distribution.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		type?: number | null;
	}

	/** A Data Lake Analytics catalog U-SQL distribution information object. */
	export interface USqlDistributionInfoFormProperties {

		/**
		 * the count of indices using this distribution.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * the dynamic count of indices using this distribution.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dynamicCount: FormControl<number | null | undefined>,

		/**
		 * the type of this distribution.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		type: FormControl<number | null | undefined>,
	}
	export function CreateUSqlDistributionInfoFormGroup() {
		return new FormGroup<USqlDistributionInfoFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			dynamicCount: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL external datasource item. */
	export interface USqlExternalDataSource extends CatalogItem {

		/** the name of the database. */
		databaseName?: string | null;

		/** the name of the external data source. */
		externalDataSourceName?: string | null;

		/** the name of the provider for the external data source. */
		provider?: string | null;

		/** the name of the provider string for the external data source. */
		providerString?: string | null;

		/** the list of types to push down from the external data source. */
		pushdownTypes?: Array<string>;
	}

	/** A Data Lake Analytics catalog U-SQL external datasource item. */
	export interface USqlExternalDataSourceFormProperties extends CatalogItemFormProperties {

		/** the name of the database. */
		databaseName: FormControl<string | null | undefined>,

		/** the name of the external data source. */
		externalDataSourceName: FormControl<string | null | undefined>,

		/** the name of the provider for the external data source. */
		provider: FormControl<string | null | undefined>,

		/** the name of the provider string for the external data source. */
		providerString: FormControl<string | null | undefined>,
	}
	export function CreateUSqlExternalDataSourceFormGroup() {
		return new FormGroup<USqlExternalDataSourceFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			externalDataSourceName: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			providerString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL external datasource item list. */
	export interface USqlExternalDataSourceList extends CatalogItemList {

		/** the list of external data sources in the database */
		value?: Array<USqlExternalDataSource>;
	}

	/** A Data Lake Analytics catalog U-SQL external datasource item list. */
	export interface USqlExternalDataSourceListFormProperties extends CatalogItemListFormProperties {
	}
	export function CreateUSqlExternalDataSourceListFormGroup() {
		return new FormGroup<USqlExternalDataSourceListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL table index item. */
	export interface USqlIndex {

		/** the list of columns in the index */
		columns?: Array<string>;

		/** A Data Lake Analytics catalog U-SQL distribution information object. */
		distributionInfo?: USqlDistributionInfo;

		/**
		 * the ID of this index within the table.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		indexId?: number | null;

		/** the list of directed columns in the index */
		indexKeys?: Array<USqlDirectedColumn>;

		/** the switch indicating if this index is a columnstore index. */
		isColumnstore?: boolean | null;

		/** the switch indicating if this index is a unique index. */
		isUnique?: boolean | null;

		/** the name of the index in the table. */
		name?: string | null;

		/** partition function ID for the index. */
		partitionFunction?: string | null;

		/** the list of partition keys in the index */
		partitionKeyList?: Array<string>;

		/** the list of full paths to the streams that contain this index in the DataLake account. */
		streamNames?: Array<string>;
	}

	/** A Data Lake Analytics catalog U-SQL table index item. */
	export interface USqlIndexFormProperties {

		/**
		 * the ID of this index within the table.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		indexId: FormControl<number | null | undefined>,

		/** the switch indicating if this index is a columnstore index. */
		isColumnstore: FormControl<boolean | null | undefined>,

		/** the switch indicating if this index is a unique index. */
		isUnique: FormControl<boolean | null | undefined>,

		/** the name of the index in the table. */
		name: FormControl<string | null | undefined>,

		/** partition function ID for the index. */
		partitionFunction: FormControl<string | null | undefined>,
	}
	export function CreateUSqlIndexFormGroup() {
		return new FormGroup<USqlIndexFormProperties>({
			indexId: new FormControl<number | null | undefined>(undefined),
			isColumnstore: new FormControl<boolean | null | undefined>(undefined),
			isUnique: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			partitionFunction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL package item. */
	export interface USqlPackage extends CatalogItem {

		/** the name of the database containing the package. */
		databaseName?: string | null;

		/** the definition of the package. */
		definition?: string | null;

		/** the name of the package. */
		packageName?: string | null;

		/** the name of the schema associated with this package and database. */
		schemaName?: string | null;
	}

	/** A Data Lake Analytics catalog U-SQL package item. */
	export interface USqlPackageFormProperties extends CatalogItemFormProperties {

		/** the name of the database containing the package. */
		databaseName: FormControl<string | null | undefined>,

		/** the definition of the package. */
		definition: FormControl<string | null | undefined>,

		/** the name of the package. */
		packageName: FormControl<string | null | undefined>,

		/** the name of the schema associated with this package and database. */
		schemaName: FormControl<string | null | undefined>,
	}
	export function CreateUSqlPackageFormGroup() {
		return new FormGroup<USqlPackageFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			definition: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL package item list. */
	export interface USqlPackageList extends CatalogItemList {

		/** the list of packages in the database and schema combination */
		value?: Array<USqlPackage>;
	}

	/** A Data Lake Analytics catalog U-SQL package item list. */
	export interface USqlPackageListFormProperties extends CatalogItemListFormProperties {
	}
	export function CreateUSqlPackageListFormGroup() {
		return new FormGroup<USqlPackageListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL procedure item. */
	export interface USqlProcedure extends CatalogItem {

		/** the name of the database. */
		databaseName?: string | null;

		/** the defined query of the procedure. */
		definition?: string | null;

		/** the name of the procedure. */
		procName?: string | null;

		/** the name of the schema associated with this procedure and database. */
		schemaName?: string | null;
	}

	/** A Data Lake Analytics catalog U-SQL procedure item. */
	export interface USqlProcedureFormProperties extends CatalogItemFormProperties {

		/** the name of the database. */
		databaseName: FormControl<string | null | undefined>,

		/** the defined query of the procedure. */
		definition: FormControl<string | null | undefined>,

		/** the name of the procedure. */
		procName: FormControl<string | null | undefined>,

		/** the name of the schema associated with this procedure and database. */
		schemaName: FormControl<string | null | undefined>,
	}
	export function CreateUSqlProcedureFormGroup() {
		return new FormGroup<USqlProcedureFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			definition: new FormControl<string | null | undefined>(undefined),
			procName: new FormControl<string | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL procedure item list. */
	export interface USqlProcedureList extends CatalogItemList {

		/** the list of procedure in the database and schema combination */
		value?: Array<USqlProcedure>;
	}

	/** A Data Lake Analytics catalog U-SQL procedure item list. */
	export interface USqlProcedureListFormProperties extends CatalogItemListFormProperties {
	}
	export function CreateUSqlProcedureListFormGroup() {
		return new FormGroup<USqlProcedureListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL schema item. */
	export interface USqlSchema extends CatalogItem {

		/** the name of the database. */
		databaseName?: string | null;

		/** the name of the schema. */
		schemaName?: string | null;
	}

	/** A Data Lake Analytics catalog U-SQL schema item. */
	export interface USqlSchemaFormProperties extends CatalogItemFormProperties {

		/** the name of the database. */
		databaseName: FormControl<string | null | undefined>,

		/** the name of the schema. */
		schemaName: FormControl<string | null | undefined>,
	}
	export function CreateUSqlSchemaFormGroup() {
		return new FormGroup<USqlSchemaFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL schema item list. */
	export interface USqlSchemaList extends CatalogItemList {

		/** the list of schemas in the database */
		value?: Array<USqlSchema>;
	}

	/** A Data Lake Analytics catalog U-SQL schema item list. */
	export interface USqlSchemaListFormProperties extends CatalogItemListFormProperties {
	}
	export function CreateUSqlSchemaListFormGroup() {
		return new FormGroup<USqlSchemaListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL secret item. */
	export interface USqlSecret extends CatalogItem {

		/** the creation time of the credential object. This is the only information returned about a secret from a GET. */
		creationTime?: Date | null;

		/** the name of the database. */
		databaseName?: string | null;

		/** the password for the secret to pass in */
		password?: string | null;

		/** the name of the secret. */
		secretName?: string | null;

		/** the URI identifier for the secret in the format <hostname>:<port> */
		uri?: string | null;
	}

	/** A Data Lake Analytics catalog U-SQL secret item. */
	export interface USqlSecretFormProperties extends CatalogItemFormProperties {

		/** the creation time of the credential object. This is the only information returned about a secret from a GET. */
		creationTime: FormControl<Date | null | undefined>,

		/** the name of the database. */
		databaseName: FormControl<string | null | undefined>,

		/** the password for the secret to pass in */
		password: FormControl<string | null | undefined>,

		/** the name of the secret. */
		secretName: FormControl<string | null | undefined>,

		/** the URI identifier for the secret in the format <hostname>:<port> */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUSqlSecretFormGroup() {
		return new FormGroup<USqlSecretFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			secretName: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL table item. */
	export interface USqlTable extends CatalogItem {

		/** the list of columns in this table */
		columnList?: Array<USqlTableColumn>;

		/** the name of the database. */
		databaseName?: string | null;

		/** A Data Lake Analytics catalog U-SQL distribution information object. */
		distributionInfo?: USqlDistributionInfo;

		/** A Data Lake Analytics catalog external table item. */
		externalTable?: ExternalTable;

		/** the list of indices in this table */
		indexList?: Array<USqlIndex>;

		/** the list of partition keys in the table */
		partitionKeyList?: Array<string>;

		/** the name of the schema associated with this table and database. */
		schemaName?: string | null;

		/** the name of the table. */
		tableName?: string | null;
	}

	/** A Data Lake Analytics catalog U-SQL table item. */
	export interface USqlTableFormProperties extends CatalogItemFormProperties {

		/** the name of the database. */
		databaseName: FormControl<string | null | undefined>,

		/** the name of the schema associated with this table and database. */
		schemaName: FormControl<string | null | undefined>,

		/** the name of the table. */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateUSqlTableFormGroup() {
		return new FormGroup<USqlTableFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL table column item. */
	export interface USqlTableColumn {

		/** the name of the column in the table. */
		name?: string | null;

		/** the object type of the specified column (such as System.String). */
		type?: string | null;
	}

	/** A Data Lake Analytics catalog U-SQL table column item. */
	export interface USqlTableColumnFormProperties {

		/** the name of the column in the table. */
		name: FormControl<string | null | undefined>,

		/** the object type of the specified column (such as System.String). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUSqlTableColumnFormGroup() {
		return new FormGroup<USqlTableColumnFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL table fragment item. */
	export interface USqlTableFragment {

		/** the creation time of the table fragment. */
		createDate?: Date | null;

		/** the version of the catalog item. */
		fragmentId?: string | null;

		/**
		 * the ordinal of the index which contains the table fragment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		indexId?: number | null;

		/** the parent object Id of the table fragment. The parent could be a table or table partition. */
		parentId?: string | null;

		/**
		 * the number of rows in the table fragment.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		rowCount?: string | null;

		/**
		 * the data size of the table fragment in bytes.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size?: string | null;

		/** the relative path for the table fragment location. */
		streamPath?: string | null;
	}

	/** A Data Lake Analytics catalog U-SQL table fragment item. */
	export interface USqlTableFragmentFormProperties {

		/** the creation time of the table fragment. */
		createDate: FormControl<Date | null | undefined>,

		/** the version of the catalog item. */
		fragmentId: FormControl<string | null | undefined>,

		/**
		 * the ordinal of the index which contains the table fragment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		indexId: FormControl<number | null | undefined>,

		/** the parent object Id of the table fragment. The parent could be a table or table partition. */
		parentId: FormControl<string | null | undefined>,

		/**
		 * the number of rows in the table fragment.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		rowCount: FormControl<string | null | undefined>,

		/**
		 * the data size of the table fragment in bytes.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size: FormControl<string | null | undefined>,

		/** the relative path for the table fragment location. */
		streamPath: FormControl<string | null | undefined>,
	}
	export function CreateUSqlTableFragmentFormGroup() {
		return new FormGroup<USqlTableFragmentFormProperties>({
			createDate: new FormControl<Date | null | undefined>(undefined),
			fragmentId: new FormControl<string | null | undefined>(undefined),
			indexId: new FormControl<number | null | undefined>(undefined),
			parentId: new FormControl<string | null | undefined>(undefined),
			rowCount: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			streamPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL table fragment item list. */
	export interface USqlTableFragmentList extends CatalogItemList {

		/** the list of table fragments in the database, schema and table combination */
		value?: Array<USqlTableFragment>;
	}

	/** A Data Lake Analytics catalog U-SQL table fragment item list. */
	export interface USqlTableFragmentListFormProperties extends CatalogItemListFormProperties {
	}
	export function CreateUSqlTableFragmentListFormGroup() {
		return new FormGroup<USqlTableFragmentListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL table item list. */
	export interface USqlTableList extends CatalogItemList {

		/** the list of tables in the database and schema combination */
		value?: Array<USqlTable>;
	}

	/** A Data Lake Analytics catalog U-SQL table item list. */
	export interface USqlTableListFormProperties extends CatalogItemListFormProperties {
	}
	export function CreateUSqlTableListFormGroup() {
		return new FormGroup<USqlTableListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL table partition item. */
	export interface USqlTablePartition extends CatalogItem {

		/** the creation time of the partition */
		createDate?: Date | null;

		/** the name of the database. */
		databaseName?: string | null;

		/**
		 * the index ID for this partition.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		indexId?: number | null;

		/** the list of labels associated with this partition. */
		label?: Array<string>;

		/** A Data Lake Analytics DDL name item. */
		parentName?: DdlName;

		/** the name of the table partition. */
		partitionName?: string | null;

		/** the name of the schema associated with this table partition and database. */
		schemaName?: string | null;
	}

	/** A Data Lake Analytics catalog U-SQL table partition item. */
	export interface USqlTablePartitionFormProperties extends CatalogItemFormProperties {

		/** the creation time of the partition */
		createDate: FormControl<Date | null | undefined>,

		/** the name of the database. */
		databaseName: FormControl<string | null | undefined>,

		/**
		 * the index ID for this partition.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		indexId: FormControl<number | null | undefined>,

		/** the name of the table partition. */
		partitionName: FormControl<string | null | undefined>,

		/** the name of the schema associated with this table partition and database. */
		schemaName: FormControl<string | null | undefined>,
	}
	export function CreateUSqlTablePartitionFormGroup() {
		return new FormGroup<USqlTablePartitionFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			createDate: new FormControl<Date | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			indexId: new FormControl<number | null | undefined>(undefined),
			partitionName: new FormControl<string | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL table partition item list. */
	export interface USqlTablePartitionList extends CatalogItemList {

		/** the list of table partitions in the database, schema and table combination */
		value?: Array<USqlTablePartition>;
	}

	/** A Data Lake Analytics catalog U-SQL table partition item list. */
	export interface USqlTablePartitionListFormProperties extends CatalogItemListFormProperties {
	}
	export function CreateUSqlTablePartitionListFormGroup() {
		return new FormGroup<USqlTablePartitionListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog table or partition preview rows item. */
	export interface USqlTablePreview {

		/** the rows of the table or partition preview, where each row is an array of string representations the row's values. Note: Byte arrays will appear as base-64 encoded values, SqlMap and SqlArray objects will appear as escaped JSON objects, and DateTime objects will appear as ISO formatted UTC date-times. */
		rows?: Array<string>;

		/** the schema of the table or partition. */
		schema?: Array<USqlTableColumn>;

		/**
		 * the total number of columns in the table or partition.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalColumnCount?: string | null;

		/**
		 * the total number of rows in the table or partition.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalRowCount?: string | null;

		/** true if the amount of data in the response is less than expected due to the preview operation's size limitations. This can occur if the requested rows or row counts are too large. */
		truncated?: boolean | null;
	}

	/** A Data Lake Analytics catalog table or partition preview rows item. */
	export interface USqlTablePreviewFormProperties {

		/**
		 * the total number of columns in the table or partition.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalColumnCount: FormControl<string | null | undefined>,

		/**
		 * the total number of rows in the table or partition.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalRowCount: FormControl<string | null | undefined>,

		/** true if the amount of data in the response is less than expected due to the preview operation's size limitations. This can occur if the requested rows or row counts are too large. */
		truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateUSqlTablePreviewFormGroup() {
		return new FormGroup<USqlTablePreviewFormProperties>({
			totalColumnCount: new FormControl<string | null | undefined>(undefined),
			totalRowCount: new FormControl<string | null | undefined>(undefined),
			truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL table statistics item. */
	export interface USqlTableStatistics extends CatalogItem {

		/** the list of column names associated with these statistics. */
		colNames?: Array<string>;

		/** the creation time of the statistics. */
		createTime?: Date | null;

		/** the name of the database. */
		databaseName?: string | null;

		/** the filter definition for the statistics. */
		filterDefinition?: string | null;

		/** the switch indicating if these statistics have a filter. */
		hasFilter?: boolean | null;

		/** the switch indicating if these statistics are automatically created. */
		isAutoCreated?: boolean | null;

		/** the switch indicating if these statistics are user created. */
		isUserCreated?: boolean | null;

		/** the name of the schema associated with this table and database. */
		schemaName?: string | null;

		/** the path to the statistics data. */
		statDataPath?: string | null;

		/** the name of the table statistics. */
		statisticsName?: string | null;

		/** the name of the table. */
		tableName?: string | null;

		/** the last time the statistics were updated. */
		updateTime?: Date | null;

		/** the name of the user statistics. */
		userStatName?: string | null;
	}

	/** A Data Lake Analytics catalog U-SQL table statistics item. */
	export interface USqlTableStatisticsFormProperties extends CatalogItemFormProperties {

		/** the creation time of the statistics. */
		createTime: FormControl<Date | null | undefined>,

		/** the name of the database. */
		databaseName: FormControl<string | null | undefined>,

		/** the filter definition for the statistics. */
		filterDefinition: FormControl<string | null | undefined>,

		/** the switch indicating if these statistics have a filter. */
		hasFilter: FormControl<boolean | null | undefined>,

		/** the switch indicating if these statistics are automatically created. */
		isAutoCreated: FormControl<boolean | null | undefined>,

		/** the switch indicating if these statistics are user created. */
		isUserCreated: FormControl<boolean | null | undefined>,

		/** the name of the schema associated with this table and database. */
		schemaName: FormControl<string | null | undefined>,

		/** the path to the statistics data. */
		statDataPath: FormControl<string | null | undefined>,

		/** the name of the table statistics. */
		statisticsName: FormControl<string | null | undefined>,

		/** the name of the table. */
		tableName: FormControl<string | null | undefined>,

		/** the last time the statistics were updated. */
		updateTime: FormControl<Date | null | undefined>,

		/** the name of the user statistics. */
		userStatName: FormControl<string | null | undefined>,
	}
	export function CreateUSqlTableStatisticsFormGroup() {
		return new FormGroup<USqlTableStatisticsFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			filterDefinition: new FormControl<string | null | undefined>(undefined),
			hasFilter: new FormControl<boolean | null | undefined>(undefined),
			isAutoCreated: new FormControl<boolean | null | undefined>(undefined),
			isUserCreated: new FormControl<boolean | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined),
			statDataPath: new FormControl<string | null | undefined>(undefined),
			statisticsName: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<Date | null | undefined>(undefined),
			userStatName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL table statistics item list. */
	export interface USqlTableStatisticsList extends CatalogItemList {

		/** the list of table statistics in the database, schema and table combination */
		value?: Array<USqlTableStatistics>;
	}

	/** A Data Lake Analytics catalog U-SQL table statistics item list. */
	export interface USqlTableStatisticsListFormProperties extends CatalogItemListFormProperties {
	}
	export function CreateUSqlTableStatisticsListFormGroup() {
		return new FormGroup<USqlTableStatisticsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL table type item. */
	export interface USqlTableType extends USqlType {

		/** the type field information associated with this table type. */
		columns?: Array<TypeFieldInfo>;
	}

	/** A Data Lake Analytics catalog U-SQL table type item. */
	export interface USqlTableTypeFormProperties extends USqlTypeFormProperties {
	}
	export function CreateUSqlTableTypeFormGroup() {
		return new FormGroup<USqlTableTypeFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			cSharpName: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			fullCSharpName: new FormControl<string | null | undefined>(undefined),
			isAssemblyType: new FormControl<boolean | null | undefined>(undefined),
			isComplexType: new FormControl<boolean | null | undefined>(undefined),
			isNullable: new FormControl<boolean | null | undefined>(undefined),
			isTableType: new FormControl<boolean | null | undefined>(undefined),
			isUserDefined: new FormControl<boolean | null | undefined>(undefined),
			principalId: new FormControl<number | null | undefined>(undefined),
			schemaId: new FormControl<number | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined),
			systemTypeId: new FormControl<number | null | undefined>(undefined),
			typeFamily: new FormControl<string | null | undefined>(undefined),
			typeName: new FormControl<string | null | undefined>(undefined),
			userTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL table type item list. */
	export interface USqlTableTypeList extends CatalogItemList {

		/** the list of table types in the database and schema combination */
		value?: Array<USqlTableType>;
	}

	/** A Data Lake Analytics catalog U-SQL table type item list. */
	export interface USqlTableTypeListFormProperties extends CatalogItemListFormProperties {
	}
	export function CreateUSqlTableTypeListFormGroup() {
		return new FormGroup<USqlTableTypeListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL table valued function item. */
	export interface USqlTableValuedFunction extends CatalogItem {

		/** the name of the database. */
		databaseName?: string | null;

		/** the definition of the table valued function. */
		definition?: string | null;

		/** the name of the schema associated with this database. */
		schemaName?: string | null;

		/** the name of the table valued function. */
		tvfName?: string | null;
	}

	/** A Data Lake Analytics catalog U-SQL table valued function item. */
	export interface USqlTableValuedFunctionFormProperties extends CatalogItemFormProperties {

		/** the name of the database. */
		databaseName: FormControl<string | null | undefined>,

		/** the definition of the table valued function. */
		definition: FormControl<string | null | undefined>,

		/** the name of the schema associated with this database. */
		schemaName: FormControl<string | null | undefined>,

		/** the name of the table valued function. */
		tvfName: FormControl<string | null | undefined>,
	}
	export function CreateUSqlTableValuedFunctionFormGroup() {
		return new FormGroup<USqlTableValuedFunctionFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			definition: new FormControl<string | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined),
			tvfName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL table valued function item list. */
	export interface USqlTableValuedFunctionList extends CatalogItemList {

		/** the list of table valued functions in the database and schema combination */
		value?: Array<USqlTableValuedFunction>;
	}

	/** A Data Lake Analytics catalog U-SQL table valued function item list. */
	export interface USqlTableValuedFunctionListFormProperties extends CatalogItemListFormProperties {
	}
	export function CreateUSqlTableValuedFunctionListFormGroup() {
		return new FormGroup<USqlTableValuedFunctionListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL type item. */
	export interface USqlType extends CatalogItem {

		/** the C# name for this type. */
		cSharpName?: string | null;

		/** the name of the database. */
		databaseName?: string | null;

		/** the fully qualified C# name for this type. */
		fullCSharpName?: string | null;

		/** The switch indicating if this type is an assembly type. */
		isAssemblyType?: boolean | null;

		/** The switch indicating if this type is a complex type. */
		isComplexType?: boolean | null;

		/** The switch indicating if this type is nullable. */
		isNullable?: boolean | null;

		/** The switch indicating if this type is a table type. */
		isTableType?: boolean | null;

		/** The switch indicating if this type is user defined. */
		isUserDefined?: boolean | null;

		/**
		 * the principal ID for this type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		principalId?: number | null;

		/**
		 * the schema ID for this type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		schemaId?: number | null;

		/** the name of the schema associated with this table and database. */
		schemaName?: string | null;

		/**
		 * the system type ID for this type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		systemTypeId?: number | null;

		/** the type family for this type. */
		typeFamily?: string | null;

		/** the name of type for this type. */
		typeName?: string | null;

		/**
		 * the user type ID for this type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userTypeId?: number | null;
	}

	/** A Data Lake Analytics catalog U-SQL type item. */
	export interface USqlTypeFormProperties extends CatalogItemFormProperties {

		/** the C# name for this type. */
		cSharpName: FormControl<string | null | undefined>,

		/** the name of the database. */
		databaseName: FormControl<string | null | undefined>,

		/** the fully qualified C# name for this type. */
		fullCSharpName: FormControl<string | null | undefined>,

		/** The switch indicating if this type is an assembly type. */
		isAssemblyType: FormControl<boolean | null | undefined>,

		/** The switch indicating if this type is a complex type. */
		isComplexType: FormControl<boolean | null | undefined>,

		/** The switch indicating if this type is nullable. */
		isNullable: FormControl<boolean | null | undefined>,

		/** The switch indicating if this type is a table type. */
		isTableType: FormControl<boolean | null | undefined>,

		/** The switch indicating if this type is user defined. */
		isUserDefined: FormControl<boolean | null | undefined>,

		/**
		 * the principal ID for this type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		principalId: FormControl<number | null | undefined>,

		/**
		 * the schema ID for this type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		schemaId: FormControl<number | null | undefined>,

		/** the name of the schema associated with this table and database. */
		schemaName: FormControl<string | null | undefined>,

		/**
		 * the system type ID for this type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		systemTypeId: FormControl<number | null | undefined>,

		/** the type family for this type. */
		typeFamily: FormControl<string | null | undefined>,

		/** the name of type for this type. */
		typeName: FormControl<string | null | undefined>,

		/**
		 * the user type ID for this type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userTypeId: FormControl<number | null | undefined>,
	}
	export function CreateUSqlTypeFormGroup() {
		return new FormGroup<USqlTypeFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			cSharpName: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			fullCSharpName: new FormControl<string | null | undefined>(undefined),
			isAssemblyType: new FormControl<boolean | null | undefined>(undefined),
			isComplexType: new FormControl<boolean | null | undefined>(undefined),
			isNullable: new FormControl<boolean | null | undefined>(undefined),
			isTableType: new FormControl<boolean | null | undefined>(undefined),
			isUserDefined: new FormControl<boolean | null | undefined>(undefined),
			principalId: new FormControl<number | null | undefined>(undefined),
			schemaId: new FormControl<number | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined),
			systemTypeId: new FormControl<number | null | undefined>(undefined),
			typeFamily: new FormControl<string | null | undefined>(undefined),
			typeName: new FormControl<string | null | undefined>(undefined),
			userTypeId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL type item list. */
	export interface USqlTypeList extends CatalogItemList {

		/** the list of types in the database and schema combination */
		value?: Array<USqlType>;
	}

	/** A Data Lake Analytics catalog U-SQL type item list. */
	export interface USqlTypeListFormProperties extends CatalogItemListFormProperties {
	}
	export function CreateUSqlTypeListFormGroup() {
		return new FormGroup<USqlTypeListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL view item. */
	export interface USqlView extends CatalogItem {

		/** the name of the database. */
		databaseName?: string | null;

		/** the defined query of the view. */
		definition?: string | null;

		/** the name of the schema associated with this view and database. */
		schemaName?: string | null;

		/** the name of the view. */
		viewName?: string | null;
	}

	/** A Data Lake Analytics catalog U-SQL view item. */
	export interface USqlViewFormProperties extends CatalogItemFormProperties {

		/** the name of the database. */
		databaseName: FormControl<string | null | undefined>,

		/** the defined query of the view. */
		definition: FormControl<string | null | undefined>,

		/** the name of the schema associated with this view and database. */
		schemaName: FormControl<string | null | undefined>,

		/** the name of the view. */
		viewName: FormControl<string | null | undefined>,
	}
	export function CreateUSqlViewFormGroup() {
		return new FormGroup<USqlViewFormProperties>({
			computeAccountName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			definition: new FormControl<string | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined),
			viewName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics catalog U-SQL view item list. */
	export interface USqlViewList extends CatalogItemList {

		/** the list of view in the database and schema combination */
		value?: Array<USqlView>;
	}

	/** A Data Lake Analytics catalog U-SQL view item list. */
	export interface USqlViewListFormProperties extends CatalogItemListFormProperties {
	}
	export function CreateUSqlViewListFormGroup() {
		return new FormGroup<USqlViewListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves the list of access control list (ACL) entries for the Data Lake Analytics catalog.
		 * Get catalog/usql/acl
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {AclList} Successfully retrieved the list of access control list (ACL) entries for the Data Lake Analytics catalog.
		 */
		Catalog_ListAcls(filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<AclList> {
			return this.http.get<AclList>(this.baseUri + 'catalog/usql/acl?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of databases from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlDatabaseList} Successfully retrieved the list of databases.
		 */
		Catalog_ListDatabases(filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlDatabaseList> {
			return this.http.get<USqlDatabaseList>(this.baseUri + 'catalog/usql/databases?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specified database from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}
		 * @param {string} databaseName The name of the database.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlDatabase} Successfully retrieved the details of the specified database.
		 */
		Catalog_GetDatabase(databaseName: string, api_version: string): Observable<USqlDatabase> {
			return this.http.get<USqlDatabase>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of access control list (ACL) entries for the database from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/acl
		 * @param {string} databaseName The name of the database.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {AclList} Successfully retrieved the list of access control list (ACL) entries for the specified database.
		 */
		Catalog_ListAclsByDatabase(databaseName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<AclList> {
			return this.http.get<AclList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/acl&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of assemblies from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/assemblies
		 * @param {string} databaseName The name of the database containing the assembly.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlAssemblyList} Successfully retrieved the list of assemblies in the specified database.
		 */
		Catalog_ListAssemblies(databaseName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlAssemblyList> {
			return this.http.get<USqlAssemblyList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/assemblies&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specified assembly from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/assemblies/{assemblyName}
		 * @param {string} databaseName The name of the database containing the assembly.
		 * @param {string} assemblyName The name of the assembly.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlAssembly} Successfully retrieved the details of the specified assembly in the specified database.
		 */
		Catalog_GetAssembly(databaseName: string, assemblyName: string, api_version: string): Observable<USqlAssembly> {
			return this.http.get<USqlAssembly>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/assemblies/' + (assemblyName == null ? '' : encodeURIComponent(assemblyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of credentials from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/credentials
		 * @param {string} databaseName The name of the database containing the schema.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlCredentialList} Successfully retrieved the list of credentials in the specified database.
		 */
		Catalog_ListCredentials(databaseName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlCredentialList> {
			return this.http.get<USqlCredentialList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/credentials&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specified credential from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/credentials/{credentialName}
		 * @param {string} databaseName The name of the database containing the schema.
		 * @param {string} credentialName The name of the credential.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlCredential} Successfully retrieved the specified credential (name only) from the specified database.
		 */
		Catalog_GetCredential(databaseName: string, credentialName: string, api_version: string): Observable<USqlCredential> {
			return this.http.get<USqlCredential>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/credentials/' + (credentialName == null ? '' : encodeURIComponent(credentialName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates the specified credential for use with external data sources in the specified database.
		 * Put catalog/usql/databases/{databaseName}/credentials/{credentialName}
		 * @param {string} databaseName The name of the database in which to create the credential. Note: This is NOT an external database name, but the name of an existing U-SQL database that should contain the new credential object.
		 * @param {string} credentialName The name of the credential.
		 * @param {string} api_version Client Api Version.
		 * @param {DataLakeAnalyticsCatalogCredentialCreateParameters} requestBody The parameters required to create the credential (name and password)
		 * @return {void} Successfully created the credential within the specified database.
		 */
		Catalog_CreateCredential(databaseName: string, credentialName: string, api_version: string, requestBody: DataLakeAnalyticsCatalogCredentialCreateParameters): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/credentials/' + (credentialName == null ? '' : encodeURIComponent(credentialName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified credential in the specified database
		 * Post catalog/usql/databases/{databaseName}/credentials/{credentialName}
		 * @param {string} databaseName The name of the database containing the credential.
		 * @param {string} credentialName The name of the credential to delete
		 * @param {boolean} cascade Indicates if the delete should be a cascading delete (which deletes all resources dependent on the credential as well as the credential) or not. If false will fail if there are any resources relying on the credential.
		 * @param {string} api_version Client Api Version.
		 * @param {DataLakeAnalyticsCatalogCredentialDeleteParameters} requestBody The parameters to delete a credential if the current user is not the account owner.
		 * @return {void} Successfully deleted the specified credential from the specified database.
		 */
		Catalog_DeleteCredential(databaseName: string, credentialName: string, cascade: boolean | null | undefined, api_version: string, requestBody: DataLakeAnalyticsCatalogCredentialDeleteParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/credentials/' + (credentialName == null ? '' : encodeURIComponent(credentialName)) + '&cascade=' + cascade + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the specified credential for use with external data sources in the specified database
		 * Patch catalog/usql/databases/{databaseName}/credentials/{credentialName}
		 * @param {string} databaseName The name of the database containing the credential.
		 * @param {string} credentialName The name of the credential.
		 * @param {string} api_version Client Api Version.
		 * @param {DataLakeAnalyticsCatalogCredentialUpdateParameters} requestBody The parameters required to modify the credential (name and password)
		 * @return {void} Successfully updated the specified credential's password in the specified database
		 */
		Catalog_UpdateCredential(databaseName: string, credentialName: string, api_version: string, requestBody: DataLakeAnalyticsCatalogCredentialUpdateParameters): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/credentials/' + (credentialName == null ? '' : encodeURIComponent(credentialName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the list of external data sources from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/externaldatasources
		 * @param {string} databaseName The name of the database containing the external data sources.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlExternalDataSourceList} Successfully retrieved the list of external data sources in the specified database.
		 */
		Catalog_ListExternalDataSources(databaseName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlExternalDataSourceList> {
			return this.http.get<USqlExternalDataSourceList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/externaldatasources&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specified external data source from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/externaldatasources/{externalDataSourceName}
		 * @param {string} databaseName The name of the database containing the external data source.
		 * @param {string} externalDataSourceName The name of the external data source.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlExternalDataSource} Successfully retrieved details of the specified external data source in the specified database.
		 */
		Catalog_GetExternalDataSource(databaseName: string, externalDataSourceName: string, api_version: string): Observable<USqlExternalDataSource> {
			return this.http.get<USqlExternalDataSource>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/externaldatasources/' + (externalDataSourceName == null ? '' : encodeURIComponent(externalDataSourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of schemas from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas
		 * @param {string} databaseName The name of the database containing the schema.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlSchemaList} Successfully retrieved the list of schemas in the specified database.
		 */
		Catalog_ListSchemas(databaseName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlSchemaList> {
			return this.http.get<USqlSchemaList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specified schema from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}
		 * @param {string} databaseName The name of the database containing the schema.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlSchema} Successfully retrieved the details of the specified schema in the specified database.
		 */
		Catalog_GetSchema(databaseName: string, schemaName: string, api_version: string): Observable<USqlSchema> {
			return this.http.get<USqlSchema>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of packages from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/packages
		 * @param {string} databaseName The name of the database containing the packages.
		 * @param {string} schemaName The name of the schema containing the packages.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlPackageList} Successfully retrieved the list of packages in the specified database and schema.
		 */
		Catalog_ListPackages(databaseName: string, schemaName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlPackageList> {
			return this.http.get<USqlPackageList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/packages&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specified package from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/packages/{packageName}
		 * @param {string} databaseName The name of the database containing the package.
		 * @param {string} schemaName The name of the schema containing the package.
		 * @param {string} packageName The name of the package.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlPackage} Successfully retrieved the specified package from the underlying database and schema combination
		 */
		Catalog_GetPackage(databaseName: string, schemaName: string, packageName: string, api_version: string): Observable<USqlPackage> {
			return this.http.get<USqlPackage>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/packages/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of procedures from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/procedures
		 * @param {string} databaseName The name of the database containing the procedures.
		 * @param {string} schemaName The name of the schema containing the procedures.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlProcedureList} Successfully retrieved the list of procedures in the specified database and schema.
		 */
		Catalog_ListProcedures(databaseName: string, schemaName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlProcedureList> {
			return this.http.get<USqlProcedureList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/procedures&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specified procedure from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/procedures/{procedureName}
		 * @param {string} databaseName The name of the database containing the procedure.
		 * @param {string} schemaName The name of the schema containing the procedure.
		 * @param {string} procedureName The name of the procedure.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlProcedure} Successfully retrieved the specified procedure from the underlying database and schema combination.
		 */
		Catalog_GetProcedure(databaseName: string, schemaName: string, procedureName: string, api_version: string): Observable<USqlProcedure> {
			return this.http.get<USqlProcedure>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/procedures/' + (procedureName == null ? '' : encodeURIComponent(procedureName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of all table statistics within the specified schema from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/statistics
		 * @param {string} databaseName The name of the database containing the statistics.
		 * @param {string} schemaName The name of the schema containing the statistics.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTableStatisticsList} Successfully retrieved the list of all table statistics in the specified database and schema.
		 */
		Catalog_ListTableStatisticsByDatabaseAndSchema(databaseName: string, schemaName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlTableStatisticsList> {
			return this.http.get<USqlTableStatisticsList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/statistics&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of tables from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables
		 * @param {string} databaseName The name of the database containing the tables.
		 * @param {string} schemaName The name of the schema containing the tables.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {boolean} basic The basic switch indicates what level of information to return when listing tables. When basic is true, only database_name, schema_name, table_name and version are returned for each table, otherwise all table metadata is returned. By default, it is false. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTableList} Successfully retrieved the list of tables in the specified database and schema.
		 */
		Catalog_ListTables(databaseName: string, schemaName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, basic: boolean | null | undefined, api_version: string): Observable<USqlTableList> {
			return this.http.get<USqlTableList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&basic=' + basic + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specified table from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}
		 * @param {string} databaseName The name of the database containing the table.
		 * @param {string} schemaName The name of the schema containing the table.
		 * @param {string} tableName The name of the table.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTable} Successfully retrieved the specified table from the underlying database and schema combination
		 */
		Catalog_GetTable(databaseName: string, schemaName: string, tableName: string, api_version: string): Observable<USqlTable> {
			return this.http.get<USqlTable>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of table partitions from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/partitions
		 * @param {string} databaseName The name of the database containing the partitions.
		 * @param {string} schemaName The name of the schema containing the partitions.
		 * @param {string} tableName The name of the table containing the partitions.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTablePartitionList} Successfully retrieved the list of table partitions in the specified database, schema, and table.
		 */
		Catalog_ListTablePartitions(databaseName: string, schemaName: string, tableName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlTablePartitionList> {
			return this.http.get<USqlTablePartitionList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/partitions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specified table partition from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/partitions/{partitionName}
		 * @param {string} databaseName The name of the database containing the partition.
		 * @param {string} schemaName The name of the schema containing the partition.
		 * @param {string} tableName The name of the table containing the partition.
		 * @param {string} partitionName The name of the table partition.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTablePartition} Successfully retrieved the details of the specified table partition in the specified database, schema, and table.
		 */
		Catalog_GetTablePartition(databaseName: string, schemaName: string, tableName: string, partitionName: string, api_version: string): Observable<USqlTablePartition> {
			return this.http.get<USqlTablePartition>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/partitions/' + (partitionName == null ? '' : encodeURIComponent(partitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves a preview set of rows in given partition.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/partitions/{partitionName}/previewrows
		 * @param {string} databaseName The name of the database containing the partition.
		 * @param {string} schemaName The name of the schema containing the partition.
		 * @param {string} tableName The name of the table containing the partition.
		 * @param {string} partitionName The name of the table partition.
		 * @param {string} maxRows The maximum number of preview rows to be retrieved.Rows returned may be less than or equal to this number depending on row sizes and number of rows in the partition.
		 * @param {string} maxColumns The maximum number of columns to be retrieved.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTablePreview} Successfully retrieved preview rows for the specified partition.
		 */
		Catalog_PreviewTablePartition(databaseName: string, schemaName: string, tableName: string, partitionName: string, maxRows: string | null | undefined, maxColumns: string | null | undefined, api_version: string): Observable<USqlTablePreview> {
			return this.http.get<USqlTablePreview>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/partitions/' + (partitionName == null ? '' : encodeURIComponent(partitionName)) + '/previewrows&maxRows=' + maxRows + '&maxColumns=' + maxColumns + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves a preview set of rows in given table.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/previewrows
		 * @param {string} databaseName The name of the database containing the table.
		 * @param {string} schemaName The name of the schema containing the table.
		 * @param {string} tableName The name of the table.
		 * @param {string} maxRows The maximum number of preview rows to be retrieved. Rows returned may be less than or equal to this number depending on row sizes and number of rows in the table.
		 * @param {string} maxColumns The maximum number of columns to be retrieved.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTablePreview} Successfully retrieved preview rows for the specified table.
		 */
		Catalog_PreviewTable(databaseName: string, schemaName: string, tableName: string, maxRows: string | null | undefined, maxColumns: string | null | undefined, api_version: string): Observable<USqlTablePreview> {
			return this.http.get<USqlTablePreview>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/previewrows&maxRows=' + maxRows + '&maxColumns=' + maxColumns + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of table statistics from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/statistics
		 * @param {string} databaseName The name of the database containing the statistics.
		 * @param {string} schemaName The name of the schema containing the statistics.
		 * @param {string} tableName The name of the table containing the statistics.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTableStatisticsList} Successfully retrieved the list of table statistics in the specified database and schema.
		 */
		Catalog_ListTableStatistics(databaseName: string, schemaName: string, tableName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlTableStatisticsList> {
			return this.http.get<USqlTableStatisticsList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/statistics&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specified table statistics from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/statistics/{statisticsName}
		 * @param {string} databaseName The name of the database containing the statistics.
		 * @param {string} schemaName The name of the schema containing the statistics.
		 * @param {string} tableName The name of the table containing the statistics.
		 * @param {string} statisticsName The name of the table statistics.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTableStatistics} Successfully retrieved the details of the specified table statistics in the specified database and schema.
		 */
		Catalog_GetTableStatistic(databaseName: string, schemaName: string, tableName: string, statisticsName: string, api_version: string): Observable<USqlTableStatistics> {
			return this.http.get<USqlTableStatistics>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/statistics/' + (statisticsName == null ? '' : encodeURIComponent(statisticsName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of table fragments from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/tablefragments
		 * @param {string} databaseName The name of the database containing the table fragments.
		 * @param {string} schemaName The name of the schema containing the table fragments.
		 * @param {string} tableName The name of the table containing the table fragments.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTableFragmentList} Successfully retrieved the list of table fragments in the specified database and schema.
		 */
		Catalog_ListTableFragments(databaseName: string, schemaName: string, tableName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlTableFragmentList> {
			return this.http.get<USqlTableFragmentList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/tablefragments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of table types from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/tabletypes
		 * @param {string} databaseName The name of the database containing the table types.
		 * @param {string} schemaName The name of the schema containing the table types.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTableTypeList} Successfully retrieved the list of table types in the specified database and schema.
		 */
		Catalog_ListTableTypes(databaseName: string, schemaName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlTableTypeList> {
			return this.http.get<USqlTableTypeList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tabletypes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specified table type from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/tabletypes/{tableTypeName}
		 * @param {string} databaseName The name of the database containing the table type.
		 * @param {string} schemaName The name of the schema containing the table type.
		 * @param {string} tableTypeName The name of the table type to retrieve.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTableType} Successfully retrieved the specified table type from the underlying database and schema combination
		 */
		Catalog_GetTableType(databaseName: string, schemaName: string, tableTypeName: string, api_version: string): Observable<USqlTableType> {
			return this.http.get<USqlTableType>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tabletypes/' + (tableTypeName == null ? '' : encodeURIComponent(tableTypeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of table valued functions from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/tablevaluedfunctions
		 * @param {string} databaseName The name of the database containing the table valued functions.
		 * @param {string} schemaName The name of the schema containing the table valued functions.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTableValuedFunctionList} Successfully retrieved the list of table valued functions in the specified database and schema.
		 */
		Catalog_ListTableValuedFunctions(databaseName: string, schemaName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlTableValuedFunctionList> {
			return this.http.get<USqlTableValuedFunctionList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tablevaluedfunctions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specified table valued function from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/tablevaluedfunctions/{tableValuedFunctionName}
		 * @param {string} databaseName The name of the database containing the table valued function.
		 * @param {string} schemaName The name of the schema containing the table valued function.
		 * @param {string} tableValuedFunctionName The name of the tableValuedFunction.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTableValuedFunction} Successfully retrieved the details of the specified table valued function in the specified database and schema.
		 */
		Catalog_GetTableValuedFunction(databaseName: string, schemaName: string, tableValuedFunctionName: string, api_version: string): Observable<USqlTableValuedFunction> {
			return this.http.get<USqlTableValuedFunction>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tablevaluedfunctions/' + (tableValuedFunctionName == null ? '' : encodeURIComponent(tableValuedFunctionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of types within the specified database and schema from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/types
		 * @param {string} databaseName The name of the database containing the types.
		 * @param {string} schemaName The name of the schema containing the types.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTypeList} Successfully retrieved the list of types in the specified database and schema.
		 */
		Catalog_ListTypes(databaseName: string, schemaName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlTypeList> {
			return this.http.get<USqlTypeList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/types&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of views from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/views
		 * @param {string} databaseName The name of the database containing the views.
		 * @param {string} schemaName The name of the schema containing the views.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlViewList} Successfully retrieved the list of views in the specified database and schema.
		 */
		Catalog_ListViews(databaseName: string, schemaName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlViewList> {
			return this.http.get<USqlViewList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/views&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specified view from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/schemas/{schemaName}/views/{viewName}
		 * @param {string} databaseName The name of the database containing the view.
		 * @param {string} schemaName The name of the schema containing the view.
		 * @param {string} viewName The name of the view.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlView} Successfully retrieved the specified view from the underlying database and schema combination
		 */
		Catalog_GetView(databaseName: string, schemaName: string, viewName: string, api_version: string): Observable<USqlView> {
			return this.http.get<USqlView>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/views/' + (viewName == null ? '' : encodeURIComponent(viewName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes all secrets in the specified database. This is deprecated and will be removed in the next release. In the future, please only drop individual credentials using DeleteCredential
		 * Delete catalog/usql/databases/{databaseName}/secrets
		 * @param {string} databaseName The name of the database containing the secret.
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successfully deleted all secrets from the specified database.
		 */
		Catalog_DeleteAllSecrets(databaseName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/secrets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified secret in the specified database. This is deprecated and will be removed in the next release. Please use GetCredential instead.
		 * Get catalog/usql/databases/{databaseName}/secrets/{secretName}
		 * @param {string} databaseName The name of the database containing the secret.
		 * @param {string} secretName The name of the secret to get
		 * @param {string} api_version Client Api Version.
		 * @return {USqlSecret} Successfully retrieved details of the specified secret in the specified database.
		 */
		Catalog_GetSecret(databaseName: string, secretName: string, api_version: string): Observable<USqlSecret> {
			return this.http.get<USqlSecret>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/secrets/' + (secretName == null ? '' : encodeURIComponent(secretName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates the specified secret for use with external data sources in the specified database. This is deprecated and will be removed in the next release. Please use CreateCredential instead.
		 * Put catalog/usql/databases/{databaseName}/secrets/{secretName}
		 * @param {string} databaseName The name of the database in which to create the secret.
		 * @param {string} secretName The name of the secret.
		 * @param {string} api_version Client Api Version.
		 * @param {DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters} requestBody The parameters required to create the secret (name and password)
		 * @return {void} Successfully created the specified secret in the specified database.
		 */
		Catalog_CreateSecret(databaseName: string, secretName: string, api_version: string, requestBody: DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/secrets/' + (secretName == null ? '' : encodeURIComponent(secretName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified secret in the specified database. This is deprecated and will be removed in the next release. Please use DeleteCredential instead.
		 * Delete catalog/usql/databases/{databaseName}/secrets/{secretName}
		 * @param {string} databaseName The name of the database containing the secret.
		 * @param {string} secretName The name of the secret to delete
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successfully deleted the specified secret from the specified database.
		 */
		Catalog_DeleteSecret(databaseName: string, secretName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/secrets/' + (secretName == null ? '' : encodeURIComponent(secretName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the specified secret for use with external data sources in the specified database. This is deprecated and will be removed in the next release. Please use UpdateCredential instead.
		 * Patch catalog/usql/databases/{databaseName}/secrets/{secretName}
		 * @param {string} databaseName The name of the database containing the secret.
		 * @param {string} secretName The name of the secret.
		 * @param {string} api_version Client Api Version.
		 * @param {DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters} requestBody The parameters required to modify the secret (name and password)
		 * @return {void} Successfully updated the details of the specified secret in the specified database.
		 */
		Catalog_UpdateSecret(databaseName: string, secretName: string, api_version: string, requestBody: DataLakeAnalyticsCatalogSecretCreateOrUpdateParameters): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/secrets/' + (secretName == null ? '' : encodeURIComponent(secretName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the list of all statistics in a database from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/statistics
		 * @param {string} databaseName The name of the database containing the table statistics.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTableStatisticsList} Successfully retrieved the list of all table statistics in the specified database.
		 */
		Catalog_ListTableStatisticsByDatabase(databaseName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlTableStatisticsList> {
			return this.http.get<USqlTableStatisticsList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/statistics&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of all tables in a database from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/tables
		 * @param {string} databaseName The name of the database containing the tables.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {boolean} basic The basic switch indicates what level of information to return when listing tables. When basic is true, only database_name, schema_name, table_name and version are returned for each table, otherwise all table metadata is returned. By default, it is false
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTableList} Successfully retrieved the list of all tables in the specified database.
		 */
		Catalog_ListTablesByDatabase(databaseName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, basic: boolean | null | undefined, api_version: string): Observable<USqlTableList> {
			return this.http.get<USqlTableList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/tables&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&basic=' + basic + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of all table valued functions in a database from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/tablevaluedfunctions
		 * @param {string} databaseName The name of the database containing the table valued functions.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlTableValuedFunctionList} Successfully retrieved the list of all table valued functions in the specified database.
		 */
		Catalog_ListTableValuedFunctionsByDatabase(databaseName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlTableValuedFunctionList> {
			return this.http.get<USqlTableValuedFunctionList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/tablevaluedfunctions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the list of all views in a database from the Data Lake Analytics catalog.
		 * Get catalog/usql/databases/{databaseName}/views
		 * @param {string} databaseName The name of the database containing the views.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {USqlViewList} Successfully retrieved the list of all views in the specified database.
		 */
		Catalog_ListViewsByDatabase(databaseName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<USqlViewList> {
			return this.http.get<USqlViewList>(this.baseUri + 'catalog/usql/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/views&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

