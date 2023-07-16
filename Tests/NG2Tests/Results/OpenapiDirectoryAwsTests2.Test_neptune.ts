import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface DBClusterNotFoundFault {
	}

	export interface DBClusterRoleAlreadyExistsFault {
	}

	export interface InvalidDBClusterStateFault {
	}

	export interface DBClusterRoleQuotaExceededFault {
	}

	export interface AddSourceIdentifierToSubscriptionResult {

		/** Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action. */
		EventSubscription?: EventSubscription;
	}


	/** Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action. */
	export interface EventSubscription {
		CustomerAwsId?: string;
		CustSubscriptionId?: string;
		SnsTopicArn?: string;
		Status?: string;
		SubscriptionCreationTime?: string;
		SourceType?: string;
		SourceIdsList?: Array<string>;
		EventCategoriesList?: Array<string>;
		Enabled?: boolean;
		EventSubscriptionArn?: string;
	}

	export interface SubscriptionNotFoundFault {
	}

	export interface SourceNotFoundFault {
	}


	/** Metadata assigned to an Amazon Neptune resource consisting of a key-value pair. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	export interface DBInstanceNotFoundFault {
	}

	export interface DBSnapshotNotFoundFault {
	}

	export interface ApplyPendingMaintenanceActionResult {

		/** Describes the pending maintenance actions for a resource. */
		ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
	}


	/** Describes the pending maintenance actions for a resource. */
	export interface ResourcePendingMaintenanceActions {
		ResourceIdentifier?: string;
		PendingMaintenanceActionDetails?: Array<PendingMaintenanceAction>;
	}


	/** Provides information about a pending maintenance action for a resource. */
	export interface PendingMaintenanceAction {
		Action?: string;
		AutoAppliedAfterDate?: Date;
		ForcedApplyDate?: Date;
		OptInStatus?: string;
		CurrentApplyDate?: Date;
		Description?: string;
	}

	export interface ResourceNotFoundFault {
	}

	export interface CopyDBClusterParameterGroupResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p> */
		DBClusterParameterGroup?: DBClusterParameterGroup;
	}


	/** <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p> */
	export interface DBClusterParameterGroup {
		DBClusterParameterGroupName?: string;
		DBParameterGroupFamily?: string;
		Description?: string;
		DBClusterParameterGroupArn?: string;
	}

	export interface DBParameterGroupNotFoundFault {
	}

	export interface DBParameterGroupQuotaExceededFault {
	}

	export interface DBParameterGroupAlreadyExistsFault {
	}

	export interface CopyDBClusterSnapshotResult {

		/** <p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p> */
		DBClusterSnapshot?: DBClusterSnapshot;
	}


	/** <p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p> */
	export interface DBClusterSnapshot {
		AvailabilityZones?: Array<string>;
		DBClusterSnapshotIdentifier?: string;
		DBClusterIdentifier?: string;
		SnapshotCreateTime?: Date;
		Engine?: string;
		AllocatedStorage?: number;
		Status?: string;
		Port?: number;
		VpcId?: string;
		ClusterCreateTime?: Date;
		MasterUsername?: string;
		EngineVersion?: string;
		LicenseModel?: string;
		SnapshotType?: string;
		PercentProgress?: number;
		StorageEncrypted?: boolean;
		KmsKeyId?: string;
		DBClusterSnapshotArn?: string;
		SourceDBClusterSnapshotArn?: string;
		IAMDatabaseAuthenticationEnabled?: boolean;
	}

	export interface DBClusterSnapshotAlreadyExistsFault {
	}

	export interface DBClusterSnapshotNotFoundFault {
	}

	export interface InvalidDBClusterSnapshotStateFault {
	}

	export interface SnapshotQuotaExceededFault {
	}

	export interface KMSKeyNotAccessibleFault {
	}

	export interface CopyDBParameterGroupResult {

		/** <p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p> */
		DBParameterGroup?: DBParameterGroup;
	}


	/** <p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p> */
	export interface DBParameterGroup {
		DBParameterGroupName?: string;
		DBParameterGroupFamily?: string;
		Description?: string;
		DBParameterGroupArn?: string;
	}

	export interface CreateDBClusterResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
		DBCluster?: DBCluster;
	}


	/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
	export interface DBCluster {
		AllocatedStorage?: number;
		AvailabilityZones?: Array<string>;
		BackupRetentionPeriod?: number;
		CharacterSetName?: string;
		DatabaseName?: string;
		DBClusterIdentifier?: string;
		DBClusterParameterGroup?: string;
		DBSubnetGroup?: string;
		Status?: string;
		PercentProgress?: string;
		EarliestRestorableTime?: Date;
		Endpoint?: string;
		ReaderEndpoint?: string;
		MultiAZ?: boolean;
		Engine?: string;
		EngineVersion?: string;
		LatestRestorableTime?: Date;
		Port?: number;
		MasterUsername?: string;
		DBClusterOptionGroupMemberships?: Array<DBClusterOptionGroupStatus>;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;
		ReplicationSourceIdentifier?: string;
		ReadReplicaIdentifiers?: Array<string>;
		DBClusterMembers?: Array<DBClusterMember>;
		VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
		HostedZoneId?: string;
		StorageEncrypted?: boolean;
		KmsKeyId?: string;
		DbClusterResourceId?: string;
		DBClusterArn?: string;
		AssociatedRoles?: Array<DBClusterRole>;
		IAMDatabaseAuthenticationEnabled?: boolean;
		CloneGroupId?: string;
		ClusterCreateTime?: Date;
		EnabledCloudwatchLogsExports?: Array<string>;
		DeletionProtection?: boolean;
	}


	/** Contains status information for a DB cluster option group. */
	export interface DBClusterOptionGroupStatus {
		DBClusterOptionGroupName?: string;
		Status?: string;
	}


	/** Contains information about an instance that is part of a DB cluster. */
	export interface DBClusterMember {
		DBInstanceIdentifier?: string;
		IsClusterWriter?: boolean;
		DBClusterParameterGroupStatus?: string;
		PromotionTier?: number;
	}


	/** This data type is used as a response element for queries on VPC security group membership. */
	export interface VpcSecurityGroupMembership {
		VpcSecurityGroupId?: string;
		Status?: string;
	}


	/** Describes an AWS Identity and Access Management (IAM) role that is associated with a DB cluster. */
	export interface DBClusterRole {
		RoleArn?: string;
		Status?: string;
	}

	export interface DBClusterAlreadyExistsFault {
	}

	export interface InsufficientStorageClusterCapacityFault {
	}

	export interface DBClusterQuotaExceededFault {
	}

	export interface StorageQuotaExceededFault {
	}

	export interface DBSubnetGroupNotFoundFault {
	}

	export interface InvalidVPCNetworkStateFault {
	}

	export interface InvalidDBSubnetGroupStateFault {
	}

	export interface InvalidSubnet {
	}

	export interface InvalidDBInstanceStateFault {
	}

	export interface DBClusterParameterGroupNotFoundFault {
	}

	export interface DBSubnetGroupDoesNotCoverEnoughAZs {
	}

	export interface CreateDBClusterParameterGroupResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p> */
		DBClusterParameterGroup?: DBClusterParameterGroup;
	}

	export interface CreateDBClusterSnapshotResult {

		/** <p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p> */
		DBClusterSnapshot?: DBClusterSnapshot;
	}

	export interface CreateDBInstanceResult {

		/** <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p> */
		DBInstance?: DBInstance;
	}


	/** <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p> */
	export interface DBInstance {
		DBInstanceIdentifier?: string;
		DBInstanceClass?: string;
		Engine?: string;
		DBInstanceStatus?: string;
		MasterUsername?: string;
		DBName?: string;

		/** Specifies a connection endpoint. */
		Endpoint?: Endpoint;
		AllocatedStorage?: number;
		InstanceCreateTime?: Date;
		PreferredBackupWindow?: string;
		BackupRetentionPeriod?: number;
		DBSecurityGroups?: Array<DBSecurityGroupMembership>;
		VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
		DBParameterGroups?: Array<DBParameterGroupStatus>;
		AvailabilityZone?: string;

		/** <p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p> */
		DBSubnetGroup?: DBSubnetGroup;
		PreferredMaintenanceWindow?: string;

		/** This data type is used as a response element in the <a>ModifyDBInstance</a> action. */
		PendingModifiedValues?: PendingModifiedValues;
		LatestRestorableTime?: Date;
		MultiAZ?: boolean;
		EngineVersion?: string;
		AutoMinorVersionUpgrade?: boolean;
		ReadReplicaSourceDBInstanceIdentifier?: string;
		ReadReplicaDBInstanceIdentifiers?: Array<string>;
		ReadReplicaDBClusterIdentifiers?: Array<string>;
		LicenseModel?: string;
		Iops?: number;
		OptionGroupMemberships?: Array<OptionGroupMembership>;
		CharacterSetName?: string;
		SecondaryAvailabilityZone?: string;
		PubliclyAccessible?: boolean;
		StatusInfos?: Array<DBInstanceStatusInfo>;
		StorageType?: string;
		TdeCredentialArn?: string;
		DbInstancePort?: number;
		DBClusterIdentifier?: string;
		StorageEncrypted?: boolean;
		KmsKeyId?: string;
		DbiResourceId?: string;
		CACertificateIdentifier?: string;
		DomainMemberships?: Array<DomainMembership>;
		CopyTagsToSnapshot?: boolean;
		MonitoringInterval?: number;
		EnhancedMonitoringResourceArn?: string;
		MonitoringRoleArn?: string;
		PromotionTier?: number;
		DBInstanceArn?: string;
		Timezone?: string;
		IAMDatabaseAuthenticationEnabled?: boolean;
		PerformanceInsightsEnabled?: boolean;
		PerformanceInsightsKMSKeyId?: string;
		EnabledCloudwatchLogsExports?: Array<string>;
		DeletionProtection?: boolean;
	}


	/** Specifies a connection endpoint. */
	export interface Endpoint {
		Address?: string;
		Port?: number;
		HostedZoneId?: string;
	}


	/** Specifies membership in a designated DB security group. */
	export interface DBSecurityGroupMembership {
		DBSecurityGroupName?: string;
		Status?: string;
	}


	/** <p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <a>CreateDBInstance</a> </p> </li> <li> <p> <a>DeleteDBInstance</a> </p> </li> <li> <p> <a>ModifyDBInstance</a> </p> </li> <li> <p> <a>RebootDBInstance</a> </p> </li> </ul> */
	export interface DBParameterGroupStatus {
		DBParameterGroupName?: string;
		ParameterApplyStatus?: string;
	}


	/** <p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p> */
	export interface DBSubnetGroup {
		DBSubnetGroupName?: string;
		DBSubnetGroupDescription?: string;
		VpcId?: string;
		SubnetGroupStatus?: string;
		Subnets?: Array<Subnet>;
		DBSubnetGroupArn?: string;
	}


	/** <p>Specifies a subnet.</p> <p> This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p> */
	export interface Subnet {
		SubnetIdentifier?: string;

		/** Specifies an Availability Zone. */
		SubnetAvailabilityZone?: AvailabilityZone;
		SubnetStatus?: string;
	}


	/** Specifies an Availability Zone. */
	export interface AvailabilityZone {
		Name?: string;
	}


	/**  This data type is used as a response element in the <a>ModifyDBInstance</a> action. */
	export interface PendingModifiedValues {
		DBInstanceClass?: string;
		AllocatedStorage?: number;
		MasterUserPassword?: string;
		Port?: number;
		BackupRetentionPeriod?: number;
		MultiAZ?: boolean;
		EngineVersion?: string;
		LicenseModel?: string;
		Iops?: number;
		DBInstanceIdentifier?: string;
		StorageType?: string;
		CACertificateIdentifier?: string;
		DBSubnetGroupName?: string;

		/** A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated. */
		PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;
	}


	/** A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated. */
	export interface PendingCloudwatchLogsExports {
		LogTypesToEnable?: Array<string>;
		LogTypesToDisable?: Array<string>;
	}


	/** Provides information on the option groups the DB instance is a member of. */
	export interface OptionGroupMembership {
		OptionGroupName?: string;
		Status?: string;
	}


	/** Provides a list of status information for a DB instance. */
	export interface DBInstanceStatusInfo {
		StatusType?: string;
		Normal?: boolean;
		Status?: string;
		Message?: string;
	}


	/** An Active Directory Domain membership record associated with a DB instance. */
	export interface DomainMembership {
		Domain?: string;
		Status?: string;
		FQDN?: string;
		IAMRoleName?: string;
	}

	export interface DBInstanceAlreadyExistsFault {
	}

	export interface InsufficientDBInstanceCapacityFault {
	}

	export interface DBSecurityGroupNotFoundFault {
	}

	export interface InstanceQuotaExceededFault {
	}

	export interface ProvisionedIopsNotAvailableInAZFault {
	}

	export interface OptionGroupNotFoundFault {
	}

	export interface StorageTypeNotSupportedFault {
	}

	export interface AuthorizationNotFoundFault {
	}

	export interface DomainNotFoundFault {
	}

	export interface CreateDBParameterGroupResult {

		/** <p>Contains the details of an Amazon Neptune DB parameter group.</p> <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p> */
		DBParameterGroup?: DBParameterGroup;
	}

	export interface CreateDBSubnetGroupResult {

		/** <p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p> */
		DBSubnetGroup?: DBSubnetGroup;
	}

	export interface DBSubnetGroupAlreadyExistsFault {
	}

	export interface DBSubnetGroupQuotaExceededFault {
	}

	export interface DBSubnetQuotaExceededFault {
	}

	export interface CreateEventSubscriptionResult {

		/** Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action. */
		EventSubscription?: EventSubscription;
	}

	export interface EventSubscriptionQuotaExceededFault {
	}

	export interface SubscriptionAlreadyExistFault {
	}

	export interface SNSInvalidTopicFault {
	}

	export interface SNSNoAuthorizationFault {
	}

	export interface SNSTopicArnNotFoundFault {
	}

	export interface SubscriptionCategoryNotFoundFault {
	}

	export interface DeleteDBClusterResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
		DBCluster?: DBCluster;
	}

	export interface InvalidDBParameterGroupStateFault {
	}

	export interface DeleteDBClusterSnapshotResult {

		/** <p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p> */
		DBClusterSnapshot?: DBClusterSnapshot;
	}

	export interface DeleteDBInstanceResult {

		/** <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p> */
		DBInstance?: DBInstance;
	}

	export interface DBSnapshotAlreadyExistsFault {
	}

	export interface InvalidDBSubnetStateFault {
	}

	export interface DeleteEventSubscriptionResult {

		/** Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action. */
		EventSubscription?: EventSubscription;
	}

	export interface InvalidEventSubscriptionStateFault {
	}

	export interface DBClusterParameterGroupsMessage {
		Marker?: string;
		DBClusterParameterGroups?: Array<DBClusterParameterGroup>;
	}


	/** This type is not currently supported. */
	export interface Filter {
		Name: string;
		Values: Array<string>;
	}

	export interface DBClusterParameterGroupDetails {
		Parameters?: Array<Parameter>;
		Marker?: string;
	}


	/** Specifies a parameter. */
	export interface Parameter {
		ParameterName?: string;
		ParameterValue?: string;
		Description?: string;
		Source?: string;
		ApplyType?: string;
		DataType?: string;
		AllowedValues?: string;
		IsModifiable?: boolean;
		MinimumEngineVersion?: string;
		ApplyMethod?: ParameterApplyMethod;
	}

	export enum ParameterApplyMethod { immediate = 0, pending_reboot = 1 }

	export interface DescribeDBClusterSnapshotAttributesResult {

		/** <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p> */
		DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
	}


	/** <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p> */
	export interface DBClusterSnapshotAttributesResult {
		DBClusterSnapshotIdentifier?: string;
		DBClusterSnapshotAttributes?: Array<DBClusterSnapshotAttribute>;
	}


	/** <p>Contains the name and values of a manual DB cluster snapshot attribute.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p> */
	export interface DBClusterSnapshotAttribute {
		AttributeName?: string;
		AttributeValues?: Array<string>;
	}

	export interface DBClusterSnapshotMessage {
		Marker?: string;
		DBClusterSnapshots?: Array<DBClusterSnapshot>;
	}

	export interface DBClusterMessage {
		Marker?: string;
		DBClusters?: Array<DBCluster>;
	}

	export interface DBEngineVersionMessage {
		Marker?: string;
		DBEngineVersions?: Array<DBEngineVersion>;
	}


	/**  This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>. */
	export interface DBEngineVersion {
		Engine?: string;
		EngineVersion?: string;
		DBParameterGroupFamily?: string;
		DBEngineDescription?: string;
		DBEngineVersionDescription?: string;

		/** Specifies a character set. */
		DefaultCharacterSet?: CharacterSet;
		SupportedCharacterSets?: Array<CharacterSet>;
		ValidUpgradeTarget?: Array<UpgradeTarget>;
		SupportedTimezones?: Array<Timezone>;
		ExportableLogTypes?: Array<string>;
		SupportsLogExportsToCloudwatchLogs?: boolean;
		SupportsReadReplica?: boolean;
	}


	/** Specifies a character set. */
	export interface CharacterSet {
		CharacterSetName?: string;
		CharacterSetDescription?: string;
	}


	/** The version of the database engine that a DB instance can be upgraded to. */
	export interface UpgradeTarget {
		Engine?: string;
		EngineVersion?: string;
		Description?: string;
		AutoUpgrade?: boolean;
		IsMajorVersionUpgrade?: boolean;
	}


	/** A time zone associated with a <a>DBInstance</a>. */
	export interface Timezone {
		TimezoneName?: string;
	}

	export interface DBInstanceMessage {
		Marker?: string;
		DBInstances?: Array<DBInstance>;
	}

	export interface DBParameterGroupsMessage {
		Marker?: string;
		DBParameterGroups?: Array<DBParameterGroup>;
	}

	export interface DBParameterGroupDetails {
		Parameters?: Array<Parameter>;
		Marker?: string;
	}

	export interface DBSubnetGroupMessage {
		Marker?: string;
		DBSubnetGroups?: Array<DBSubnetGroup>;
	}

	export interface DescribeEngineDefaultClusterParametersResult {

		/** Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action. */
		EngineDefaults?: EngineDefaults;
	}


	/**  Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action. */
	export interface EngineDefaults {
		DBParameterGroupFamily?: string;
		Marker?: string;
		Parameters?: Array<Parameter>;
	}

	export interface DescribeEngineDefaultParametersResult {

		/** Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action. */
		EngineDefaults?: EngineDefaults;
	}

	export interface EventCategoriesMessage {
		EventCategoriesMapList?: Array<EventCategoriesMap>;
	}


	/** Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action. */
	export interface EventCategoriesMap {
		SourceType?: string;
		EventCategories?: Array<string>;
	}

	export interface EventSubscriptionsMessage {
		Marker?: string;
		EventSubscriptionsList?: Array<EventSubscription>;
	}

	export interface EventsMessage {
		Marker?: string;
		Events?: Array<Event>;
	}


	/**  This data type is used as a response element in the <a>DescribeEvents</a> action. */
	export interface Event {
		SourceIdentifier?: string;
		SourceType?: EventSourceType;
		Message?: string;
		EventCategories?: Array<string>;
		Date?: Date;
		SourceArn?: string;
	}

	export enum EventSourceType { db_instance = 0, db_parameter_group = 1, db_security_group = 2, db_snapshot = 3, db_cluster = 4, db_cluster_snapshot = 5 }

	export interface OrderableDBInstanceOptionsMessage {
		OrderableDBInstanceOptions?: Array<OrderableDBInstanceOption>;
		Marker?: string;
	}


	/** <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action.</p> */
	export interface OrderableDBInstanceOption {
		Engine?: string;
		EngineVersion?: string;
		DBInstanceClass?: string;
		LicenseModel?: string;
		AvailabilityZones?: Array<AvailabilityZone>;
		MultiAZCapable?: boolean;
		ReadReplicaCapable?: boolean;
		Vpc?: boolean;
		SupportsStorageEncryption?: boolean;
		StorageType?: string;
		SupportsIops?: boolean;
		SupportsEnhancedMonitoring?: boolean;
		SupportsIAMDatabaseAuthentication?: boolean;
		SupportsPerformanceInsights?: boolean;
		MinStorageSize?: number;
		MaxStorageSize?: number;
		MinIopsPerDbInstance?: number;
		MaxIopsPerDbInstance?: number;
		MinIopsPerGib?: number;
		MaxIopsPerGib?: number;
	}

	export interface PendingMaintenanceActionsMessage {
		PendingMaintenanceActions?: Array<ResourcePendingMaintenanceActions>;
		Marker?: string;
	}

	export interface DescribeValidDBInstanceModificationsResult {

		/** Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. You can use this information when you call <a>ModifyDBInstance</a>. */
		ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage;
	}


	/** Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. You can use this information when you call <a>ModifyDBInstance</a>.  */
	export interface ValidDBInstanceModificationsMessage {
		Storage?: Array<ValidStorageOptions>;
	}


	/** <p>Information about valid modifications that you can make to your DB instance.</p> <p>Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action.</p> */
	export interface ValidStorageOptions {
		StorageType?: string;
		StorageSize?: Array<Range>;
		ProvisionedIops?: Array<Range>;
		IopsToStorageRatio?: Array<DoubleRange>;
	}


	/** A range of integer values. */
	export interface Range {
		From?: number;
		To?: number;
		Step?: number;
	}


	/** A range of double values. */
	export interface DoubleRange {
		From?: number;
		To?: number;
	}

	export interface FailoverDBClusterResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
		DBCluster?: DBCluster;
	}

	export interface TagListMessage {
		TagList?: Array<Tag>;
	}

	export interface ModifyDBClusterResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
		DBCluster?: DBCluster;
	}

	export interface InvalidDBSecurityGroupStateFault {
	}

	export interface DBClusterParameterGroupNameMessage {
		DBClusterParameterGroupName?: string;
	}

	export interface ModifyDBClusterSnapshotAttributeResult {

		/** <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p> <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to copy or restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p> */
		DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
	}

	export interface SharedSnapshotQuotaExceededFault {
	}

	export interface ModifyDBInstanceResult {

		/** <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p> */
		DBInstance?: DBInstance;
	}

	export interface DBUpgradeDependencyFailureFault {
	}

	export interface CertificateNotFoundFault {
	}

	export interface DBParameterGroupNameMessage {
		DBParameterGroupName?: string;
	}

	export interface ModifyDBSubnetGroupResult {

		/** <p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p> */
		DBSubnetGroup?: DBSubnetGroup;
	}

	export interface SubnetAlreadyInUse {
	}

	export interface ModifyEventSubscriptionResult {

		/** Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action. */
		EventSubscription?: EventSubscription;
	}

	export interface PromoteReadReplicaDBClusterResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
		DBCluster?: DBCluster;
	}

	export interface RebootDBInstanceResult {

		/** <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p> */
		DBInstance?: DBInstance;
	}

	export interface DBClusterRoleNotFoundFault {
	}

	export interface RemoveSourceIdentifierFromSubscriptionResult {

		/** Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action. */
		EventSubscription?: EventSubscription;
	}

	export interface RestoreDBClusterFromSnapshotResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
		DBCluster?: DBCluster;
	}

	export interface InsufficientDBClusterCapacityFault {
	}

	export interface InvalidDBSnapshotStateFault {
	}

	export interface InvalidRestoreFault {
	}

	export interface RestoreDBClusterToPointInTimeResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
		DBCluster?: DBCluster;
	}

	export interface StartDBClusterResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
		DBCluster?: DBCluster;
	}

	export interface StopDBClusterResult {

		/** <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p> */
		DBCluster?: DBCluster;
	}

	export interface AddRoleToDBClusterMessage {
		DBClusterIdentifier: string;
		RoleArn: string;
	}

	export interface AddSourceIdentifierToSubscriptionMessage {
		SubscriptionName: string;
		SourceIdentifier: string;
	}

	export interface AddTagsToResourceMessage {
		ResourceName: string;
		Tags: Array<Tag>;
	}

	export enum ApplyMethod { immediate = 0, pending_reboot = 1 }

	export interface ApplyPendingMaintenanceActionMessage {
		ResourceIdentifier: string;
		ApplyAction: string;
		OptInType: string;
	}


	/** <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs.</p> */
	export interface CloudwatchLogsExportConfiguration {
		EnableLogTypes?: Array<string>;
		DisableLogTypes?: Array<string>;
	}

	export interface CopyDBClusterParameterGroupMessage {
		SourceDBClusterParameterGroupIdentifier: string;
		TargetDBClusterParameterGroupIdentifier: string;
		TargetDBClusterParameterGroupDescription: string;
		Tags?: Array<Tag>;
	}

	export interface CopyDBClusterSnapshotMessage {
		SourceDBClusterSnapshotIdentifier: string;
		TargetDBClusterSnapshotIdentifier: string;
		KmsKeyId?: string;
		PreSignedUrl?: string;
		CopyTags?: boolean;
		Tags?: Array<Tag>;
	}

	export interface CopyDBParameterGroupMessage {
		SourceDBParameterGroupIdentifier: string;
		TargetDBParameterGroupIdentifier: string;
		TargetDBParameterGroupDescription: string;
		Tags?: Array<Tag>;
	}

	export interface CreateDBClusterMessage {
		AvailabilityZones?: Array<string>;
		BackupRetentionPeriod?: number;
		CharacterSetName?: string;
		DatabaseName?: string;
		DBClusterIdentifier: string;
		DBClusterParameterGroupName?: string;
		VpcSecurityGroupIds?: Array<string>;
		DBSubnetGroupName?: string;
		Engine: string;
		EngineVersion?: string;
		Port?: number;
		MasterUsername?: string;
		MasterUserPassword?: string;
		OptionGroupName?: string;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;
		ReplicationSourceIdentifier?: string;
		Tags?: Array<Tag>;
		StorageEncrypted?: boolean;
		KmsKeyId?: string;
		PreSignedUrl?: string;
		EnableIAMDatabaseAuthentication?: boolean;
		EnableCloudwatchLogsExports?: Array<string>;
		DeletionProtection?: boolean;
	}

	export interface CreateDBClusterParameterGroupMessage {
		DBClusterParameterGroupName: string;
		DBParameterGroupFamily: string;
		Description: string;
		Tags?: Array<Tag>;
	}

	export interface CreateDBClusterSnapshotMessage {
		DBClusterSnapshotIdentifier: string;
		DBClusterIdentifier: string;
		Tags?: Array<Tag>;
	}

	export interface CreateDBInstanceMessage {
		DBName?: string;
		DBInstanceIdentifier: string;
		AllocatedStorage?: number;
		DBInstanceClass: string;
		Engine: string;
		MasterUsername?: string;
		MasterUserPassword?: string;
		DBSecurityGroups?: Array<string>;
		VpcSecurityGroupIds?: Array<string>;
		AvailabilityZone?: string;
		DBSubnetGroupName?: string;
		PreferredMaintenanceWindow?: string;
		DBParameterGroupName?: string;
		BackupRetentionPeriod?: number;
		PreferredBackupWindow?: string;
		Port?: number;
		MultiAZ?: boolean;
		EngineVersion?: string;
		AutoMinorVersionUpgrade?: boolean;
		LicenseModel?: string;
		Iops?: number;
		OptionGroupName?: string;
		CharacterSetName?: string;
		PubliclyAccessible?: boolean;
		Tags?: Array<Tag>;
		DBClusterIdentifier?: string;
		StorageType?: string;
		TdeCredentialArn?: string;
		TdeCredentialPassword?: string;
		StorageEncrypted?: boolean;
		KmsKeyId?: string;
		Domain?: string;
		CopyTagsToSnapshot?: boolean;
		MonitoringInterval?: number;
		MonitoringRoleArn?: string;
		DomainIAMRoleName?: string;
		PromotionTier?: number;
		Timezone?: string;
		EnableIAMDatabaseAuthentication?: boolean;
		EnablePerformanceInsights?: boolean;
		PerformanceInsightsKMSKeyId?: string;
		EnableCloudwatchLogsExports?: Array<string>;
		DeletionProtection?: boolean;
	}

	export interface CreateDBParameterGroupMessage {
		DBParameterGroupName: string;
		DBParameterGroupFamily: string;
		Description: string;
		Tags?: Array<Tag>;
	}

	export interface CreateDBSubnetGroupMessage {
		DBSubnetGroupName: string;
		DBSubnetGroupDescription: string;
		SubnetIds: Array<string>;
		Tags?: Array<Tag>;
	}

	export interface CreateEventSubscriptionMessage {
		SubscriptionName: string;
		SnsTopicArn: string;
		SourceType?: string;
		EventCategories?: Array<string>;
		SourceIds?: Array<string>;
		Enabled?: boolean;
		Tags?: Array<Tag>;
	}

	export interface DeleteDBClusterMessage {
		DBClusterIdentifier: string;
		SkipFinalSnapshot?: boolean;
		FinalDBSnapshotIdentifier?: string;
	}

	export interface DeleteDBClusterParameterGroupMessage {
		DBClusterParameterGroupName: string;
	}

	export interface DeleteDBClusterSnapshotMessage {
		DBClusterSnapshotIdentifier: string;
	}

	export interface DeleteDBInstanceMessage {
		DBInstanceIdentifier: string;
		SkipFinalSnapshot?: boolean;
		FinalDBSnapshotIdentifier?: string;
	}

	export interface DeleteDBParameterGroupMessage {
		DBParameterGroupName: string;
	}

	export interface DeleteDBSubnetGroupMessage {
		DBSubnetGroupName: string;
	}

	export interface DeleteEventSubscriptionMessage {
		SubscriptionName: string;
	}

	export interface DescribeDBClusterParameterGroupsMessage {
		DBClusterParameterGroupName?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export interface DescribeDBClusterParametersMessage {
		DBClusterParameterGroupName: string;
		Source?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export interface DescribeDBClusterSnapshotAttributesMessage {
		DBClusterSnapshotIdentifier: string;
	}

	export interface DescribeDBClusterSnapshotsMessage {
		DBClusterIdentifier?: string;
		DBClusterSnapshotIdentifier?: string;
		SnapshotType?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
		IncludeShared?: boolean;
		IncludePublic?: boolean;
	}

	export interface DescribeDBClustersMessage {
		DBClusterIdentifier?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export interface DescribeDBEngineVersionsMessage {
		Engine?: string;
		EngineVersion?: string;
		DBParameterGroupFamily?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
		DefaultOnly?: boolean;
		ListSupportedCharacterSets?: boolean;
		ListSupportedTimezones?: boolean;
	}

	export interface DescribeDBInstancesMessage {
		DBInstanceIdentifier?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export interface DescribeDBParameterGroupsMessage {
		DBParameterGroupName?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export interface DescribeDBParametersMessage {
		DBParameterGroupName: string;
		Source?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export interface DescribeDBSubnetGroupsMessage {
		DBSubnetGroupName?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export interface DescribeEngineDefaultClusterParametersMessage {
		DBParameterGroupFamily: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export interface DescribeEngineDefaultParametersMessage {
		DBParameterGroupFamily: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export interface DescribeEventCategoriesMessage {
		SourceType?: string;
		Filters?: Array<Filter>;
	}

	export interface DescribeEventSubscriptionsMessage {
		SubscriptionName?: string;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export enum SourceType { db_instance = 0, db_parameter_group = 1, db_security_group = 2, db_snapshot = 3, db_cluster = 4, db_cluster_snapshot = 5 }

	export interface DescribeEventsMessage {
		SourceIdentifier?: string;
		SourceType?: DescribeEventsMessageSourceType;
		StartTime?: Date;
		EndTime?: Date;
		Duration?: number;
		EventCategories?: Array<string>;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export enum DescribeEventsMessageSourceType { db_instance = 0, db_parameter_group = 1, db_security_group = 2, db_snapshot = 3, db_cluster = 4, db_cluster_snapshot = 5 }

	export interface DescribeOrderableDBInstanceOptionsMessage {
		Engine: string;
		EngineVersion?: string;
		DBInstanceClass?: string;
		LicenseModel?: string;
		Vpc?: boolean;
		Filters?: Array<Filter>;
		MaxRecords?: number;
		Marker?: string;
	}

	export interface DescribePendingMaintenanceActionsMessage {
		ResourceIdentifier?: string;
		Filters?: Array<Filter>;
		Marker?: string;
		MaxRecords?: number;
	}

	export interface DescribeValidDBInstanceModificationsMessage {
		DBInstanceIdentifier: string;
	}

	export interface FailoverDBClusterMessage {
		DBClusterIdentifier?: string;
		TargetDBInstanceIdentifier?: string;
	}

	export interface ListTagsForResourceMessage {
		ResourceName: string;
		Filters?: Array<Filter>;
	}

	export interface ModifyDBClusterMessage {
		DBClusterIdentifier: string;
		NewDBClusterIdentifier?: string;
		ApplyImmediately?: boolean;
		BackupRetentionPeriod?: number;
		DBClusterParameterGroupName?: string;
		VpcSecurityGroupIds?: Array<string>;
		Port?: number;
		MasterUserPassword?: string;
		OptionGroupName?: string;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;
		EnableIAMDatabaseAuthentication?: boolean;

		/** <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs.</p> */
		CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
		EngineVersion?: string;
		DeletionProtection?: boolean;
	}

	export interface ModifyDBClusterParameterGroupMessage {
		DBClusterParameterGroupName: string;
		Parameters: Array<Parameter>;
	}

	export interface ModifyDBClusterSnapshotAttributeMessage {
		DBClusterSnapshotIdentifier: string;
		AttributeName: string;
		ValuesToAdd?: Array<string>;
		ValuesToRemove?: Array<string>;
	}

	export interface ModifyDBInstanceMessage {
		DBInstanceIdentifier: string;
		AllocatedStorage?: number;
		DBInstanceClass?: string;
		DBSubnetGroupName?: string;
		DBSecurityGroups?: Array<string>;
		VpcSecurityGroupIds?: Array<string>;
		ApplyImmediately?: boolean;
		MasterUserPassword?: string;
		DBParameterGroupName?: string;
		BackupRetentionPeriod?: number;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;
		MultiAZ?: boolean;
		EngineVersion?: string;
		AllowMajorVersionUpgrade?: boolean;
		AutoMinorVersionUpgrade?: boolean;
		LicenseModel?: string;
		Iops?: number;
		OptionGroupName?: string;
		NewDBInstanceIdentifier?: string;
		StorageType?: string;
		TdeCredentialArn?: string;
		TdeCredentialPassword?: string;
		CACertificateIdentifier?: string;
		Domain?: string;
		CopyTagsToSnapshot?: boolean;
		MonitoringInterval?: number;
		DBPortNumber?: number;
		PubliclyAccessible?: boolean;
		MonitoringRoleArn?: string;
		DomainIAMRoleName?: string;
		PromotionTier?: number;
		EnableIAMDatabaseAuthentication?: boolean;
		EnablePerformanceInsights?: boolean;
		PerformanceInsightsKMSKeyId?: string;

		/** <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.</p> <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported (or not exported) to CloudWatch Logs.</p> */
		CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;
		DeletionProtection?: boolean;
	}

	export interface ModifyDBParameterGroupMessage {
		DBParameterGroupName: string;
		Parameters: Array<Parameter>;
	}

	export interface ModifyDBSubnetGroupMessage {
		DBSubnetGroupName: string;
		DBSubnetGroupDescription?: string;
		SubnetIds: Array<string>;
	}

	export interface ModifyEventSubscriptionMessage {
		SubscriptionName: string;
		SnsTopicArn?: string;
		SourceType?: string;
		EventCategories?: Array<string>;
		Enabled?: boolean;
	}

	export interface PromoteReadReplicaDBClusterMessage {
		DBClusterIdentifier: string;
	}

	export interface RebootDBInstanceMessage {
		DBInstanceIdentifier: string;
		ForceFailover?: boolean;
	}

	export interface RemoveRoleFromDBClusterMessage {
		DBClusterIdentifier: string;
		RoleArn: string;
	}

	export interface RemoveSourceIdentifierFromSubscriptionMessage {
		SubscriptionName: string;
		SourceIdentifier: string;
	}

	export interface RemoveTagsFromResourceMessage {
		ResourceName: string;
		TagKeys: Array<string>;
	}

	export interface ResetDBClusterParameterGroupMessage {
		DBClusterParameterGroupName: string;
		ResetAllParameters?: boolean;
		Parameters?: Array<Parameter>;
	}

	export interface ResetDBParameterGroupMessage {
		DBParameterGroupName: string;
		ResetAllParameters?: boolean;
		Parameters?: Array<Parameter>;
	}

	export interface RestoreDBClusterFromSnapshotMessage {
		AvailabilityZones?: Array<string>;
		DBClusterIdentifier: string;
		SnapshotIdentifier: string;
		Engine: string;
		EngineVersion?: string;
		Port?: number;
		DBSubnetGroupName?: string;
		DatabaseName?: string;
		OptionGroupName?: string;
		VpcSecurityGroupIds?: Array<string>;
		Tags?: Array<Tag>;
		KmsKeyId?: string;
		EnableIAMDatabaseAuthentication?: boolean;
		EnableCloudwatchLogsExports?: Array<string>;
		DBClusterParameterGroupName?: string;
		DeletionProtection?: boolean;
	}

	export interface RestoreDBClusterToPointInTimeMessage {
		DBClusterIdentifier: string;
		RestoreType?: string;
		SourceDBClusterIdentifier: string;
		RestoreToTime?: Date;
		UseLatestRestorableTime?: boolean;
		Port?: number;
		DBSubnetGroupName?: string;
		OptionGroupName?: string;
		VpcSecurityGroupIds?: Array<string>;
		Tags?: Array<Tag>;
		KmsKeyId?: string;
		EnableIAMDatabaseAuthentication?: boolean;
		EnableCloudwatchLogsExports?: Array<string>;
		DBClusterParameterGroupName?: string;
		DeletionProtection?: boolean;
	}

	export interface StartDBClusterMessage {
		DBClusterIdentifier: string;
	}

	export interface StopDBClusterMessage {
		DBClusterIdentifier: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates an Identity and Access Management (IAM) role from an Neptune DB cluster.
		 * Get #Action=AddRoleToDBCluster
		 * @param {string} DBClusterIdentifier The name of the DB cluster to associate the IAM role with.
		 * @param {string} RoleArn The Amazon Resource Name (ARN) of the IAM role to associate with the Neptune DB cluster, for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.
		 * @return {void} Success
		 */
		GET_AddRoleToDBCluster(DBClusterIdentifier: string, RoleArn: string, Action: GET_AddRoleToDBClusterAction, Version: GET_AddRoleToDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddRoleToDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&RoleArn=' + (RoleArn == null ? '' : encodeURIComponent(RoleArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a source identifier to an existing event notification subscription.
		 * Get #Action=AddSourceIdentifierToSubscription
		 * @param {string} SubscriptionName The name of the event notification subscription you want to add a source identifier to.
		 * @param {string} SourceIdentifier <p>The identifier of the event source to be added.</p> <p>Constraints:</p> <ul> <li> <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_AddSourceIdentifierToSubscription(SubscriptionName: string, SourceIdentifier: string, Action: GET_AddSourceIdentifierToSubscriptionAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddSourceIdentifierToSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost allocation reporting to track cost associated with Amazon Neptune resources, or used in a Condition statement in an IAM policy for Amazon Neptune.
		 * Get #Action=AddTagsToResource
		 * @param {string} ResourceName The Amazon Neptune resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.
		 * @param {Array<Tag>} Tags The tags to be assigned to the Amazon Neptune resource.
		 * @return {void} Success
		 */
		GET_AddTagsToResource(ResourceName: string, Tags: Array<Tag>, Action: GET_AddTagsToResourceAction, Version: GET_AddTagsToResourceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddTagsToResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Applies a pending maintenance action to a resource (for example, to a DB instance).
		 * Get #Action=ApplyPendingMaintenanceAction
		 * @param {string} ResourceIdentifier The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies to. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.
		 * @param {string} ApplyAction <p>The pending maintenance action to apply to this resource.</p> <p>Valid values: <code>system-update</code>, <code>db-upgrade</code> </p>
		 * @param {string} OptInType <p>A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in request of type <code>immediate</code> can't be undone.</p> <p>Valid values:</p> <ul> <li> <p> <code>immediate</code> - Apply the maintenance action immediately.</p> </li> <li> <p> <code>next-maintenance</code> - Apply the maintenance action during the next maintenance window for the resource.</p> </li> <li> <p> <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code> opt-in requests.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_ApplyPendingMaintenanceAction(ResourceIdentifier: string, ApplyAction: string, OptInType: string, Action: GET_ApplyPendingMaintenanceActionAction, Version: GET_ApplyPendingMaintenanceActionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ApplyPendingMaintenanceAction?ResourceIdentifier=' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '&ApplyAction=' + (ApplyAction == null ? '' : encodeURIComponent(ApplyAction)) + '&OptInType=' + (OptInType == null ? '' : encodeURIComponent(OptInType)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Copies the specified DB cluster parameter group.
		 * Get #Action=CopyDBClusterParameterGroup
		 * @param {string} SourceDBClusterParameterGroupIdentifier <p>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid DB cluster parameter group.</p> </li> <li> <p>If the source DB cluster parameter group is in the same AWS Region as the copy, specify a valid DB parameter group identifier, for example <code>my-db-cluster-param-group</code>, or a valid ARN.</p> </li> <li> <p>If the source DB parameter group is in a different AWS Region than the copy, specify a valid DB cluster parameter group ARN, for example <code>arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1</code>.</p> </li> </ul>
		 * @param {string} TargetDBClusterParameterGroupIdentifier <p>The identifier for the copied DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster-param-group1</code> </p>
		 * @param {string} TargetDBClusterParameterGroupDescription A description for the copied DB cluster parameter group.
		 * @param {Array<Tag>} Tags The tags to be assigned to the copied DB cluster parameter group.
		 * @return {void} Success
		 */
		GET_CopyDBClusterParameterGroup(SourceDBClusterParameterGroupIdentifier: string, TargetDBClusterParameterGroupIdentifier: string, TargetDBClusterParameterGroupDescription: string, Tags: Array<Tag>, Action: GET_CopyDBClusterParameterGroupAction, Version: GET_CopyDBClusterParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CopyDBClusterParameterGroup?SourceDBClusterParameterGroupIdentifier=' + (SourceDBClusterParameterGroupIdentifier == null ? '' : encodeURIComponent(SourceDBClusterParameterGroupIdentifier)) + '&TargetDBClusterParameterGroupIdentifier=' + (TargetDBClusterParameterGroupIdentifier == null ? '' : encodeURIComponent(TargetDBClusterParameterGroupIdentifier)) + '&TargetDBClusterParameterGroupDescription=' + (TargetDBClusterParameterGroupDescription == null ? '' : encodeURIComponent(TargetDBClusterParameterGroupDescription)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Copies a snapshot of a DB cluster.</p> <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p>
		 * Get #Action=CopyDBClusterSnapshot
		 * @param {string} SourceDBClusterSnapshotIdentifier <p>The identifier of the DB cluster snapshot to copy. This parameter is not case-sensitive.</p> <p>You can't copy from one AWS Region to another.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid system snapshot in the "available" state.</p> </li> <li> <p>Specify a valid DB snapshot identifier.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot1</code> </p>
		 * @param {string} TargetDBClusterSnapshotIdentifier <p>The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster-snapshot2</code> </p>
		 * @param {string} KmsKeyId <p>The AWS AWS KMS key ID for an encrypted DB cluster snapshot. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p> <p>If you copy an encrypted DB cluster snapshot from your AWS account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot.</p> <p>If you copy an encrypted DB cluster snapshot that is shared from another AWS account, then you must specify a value for <code>KmsKeyId</code>.</p> <p> KMS encryption keys are specific to the AWS Region that they are created in, and you can't use encryption keys from one AWS Region in another AWS Region.</p> <p>You cannot encrypt an unencrypted DB cluster snapshot when you copy it. If you try to copy an unencrypted DB cluster snapshot and specify a value for the KmsKeyId parameter, an error is returned.</p>
		 * @param {string} PreSignedUrl Not currently supported.
		 * @param {boolean} CopyTags True to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot, and otherwise false. The default is false.
		 * @param {Array<Tag>} Tags The tags to assign to the new DB cluster snapshot copy.
		 * @return {void} Success
		 */
		GET_CopyDBClusterSnapshot(SourceDBClusterSnapshotIdentifier: string, TargetDBClusterSnapshotIdentifier: string, KmsKeyId: string, PreSignedUrl: string, CopyTags: boolean, Tags: Array<Tag>, Action: GET_CopyDBClusterSnapshotAction, Version: GET_CopyDBClusterSnapshotVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CopyDBClusterSnapshot?SourceDBClusterSnapshotIdentifier=' + (SourceDBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(SourceDBClusterSnapshotIdentifier)) + '&TargetDBClusterSnapshotIdentifier=' + (TargetDBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(TargetDBClusterSnapshotIdentifier)) + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&PreSignedUrl=' + (PreSignedUrl == null ? '' : encodeURIComponent(PreSignedUrl)) + '&CopyTags=' + CopyTags + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Copies the specified DB parameter group.
		 * Get #Action=CopyDBParameterGroup
		 * @param {string} SourceDBParameterGroupIdentifier <p>The identifier or ARN for the source DB parameter group. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must specify a valid DB parameter group.</p> </li> <li> <p>Must specify a valid DB parameter group identifier, for example <code>my-db-param-group</code>, or a valid ARN.</p> </li> </ul>
		 * @param {string} TargetDBParameterGroupIdentifier <p>The identifier for the copied DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Cannot be null, empty, or blank.</p> </li> <li> <p>Must contain from 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-db-parameter-group</code> </p>
		 * @param {string} TargetDBParameterGroupDescription A description for the copied DB parameter group.
		 * @param {Array<Tag>} Tags The tags to be assigned to the copied DB parameter group.
		 * @return {void} Success
		 */
		GET_CopyDBParameterGroup(SourceDBParameterGroupIdentifier: string, TargetDBParameterGroupIdentifier: string, TargetDBParameterGroupDescription: string, Tags: Array<Tag>, Action: GET_CopyDBParameterGroupAction, Version: GET_CopyDBParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CopyDBParameterGroup?SourceDBParameterGroupIdentifier=' + (SourceDBParameterGroupIdentifier == null ? '' : encodeURIComponent(SourceDBParameterGroupIdentifier)) + '&TargetDBParameterGroupIdentifier=' + (TargetDBParameterGroupIdentifier == null ? '' : encodeURIComponent(TargetDBParameterGroupIdentifier)) + '&TargetDBParameterGroupDescription=' + (TargetDBParameterGroupDescription == null ? '' : encodeURIComponent(TargetDBParameterGroupDescription)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new Amazon Neptune DB cluster.</p> <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create the DB cluster as a Read Replica of another DB cluster or Amazon Neptune DB instance.</p> <p>Note that when you create a new cluster using <code>CreateDBCluster</code> directly, deletion protection is disabled by default (when you create a new production cluster in the console, deletion protection is enabled by default). You can only delete a DB cluster if its <code>DeletionProtection</code> field is set to <code>false</code>.</p>
		 * Get #Action=CreateDBCluster
		 * @param {Array<string>} AvailabilityZones A list of EC2 Availability Zones that instances in the DB cluster can be created in.
		 * @param {number} BackupRetentionPeriod <p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>
		 * @param {string} CharacterSetName  <i>(Not supported by Neptune)</i> 
		 * @param {string} DatabaseName The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon Neptune will not create a database in the DB cluster you are creating.
		 * @param {string} DBClusterIdentifier <p>The DB cluster identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>
		 * @param {string} DBClusterParameterGroupName <p> The name of the DB cluster parameter group to associate with this DB cluster. If this argument is omitted, the default is used.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
		 * @param {Array<string>} VpcSecurityGroupIds A list of EC2 VPC security groups to associate with this DB cluster.
		 * @param {string} DBSubnetGroupName <p>A DB subnet group to associate with this DB cluster.</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} Engine <p>The name of the database engine to be used for this DB cluster.</p> <p>Valid Values: <code>neptune</code> </p>
		 * @param {string} EngineVersion <p>The version number of the database engine to use. Currently, setting this parameter has no effect.</p> <p>Example: <code>1.0.1</code> </p>
		 * @param {number} Port <p>The port number on which the instances in the DB cluster accept connections.</p> <p> Default: <code>8182</code> </p>
		 * @param {string} MasterUsername <p>The name of the master user for the DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 16 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot be a reserved word for the chosen database engine.</p> </li> </ul>
		 * @param {string} MasterUserPassword <p>The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p> <p>Constraints: Must contain from 8 to 41 characters.</p>
		 * @param {string} OptionGroupName  <i>(Not supported by Neptune)</i> 
		 * @param {string} PreferredBackupWindow <p>The daily time range during which automated backups are created if automated backups are enabled using the <code>BackupRetentionPeriod</code> parameter.</p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html"> Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i> </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {string} ReplicationSourceIdentifier The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.
		 * @param {Array<Tag>} Tags The tags to assign to the new DB cluster.
		 * @param {boolean} StorageEncrypted Specifies whether the DB cluster is encrypted.
		 * @param {string} KmsKeyId <p>The AWS KMS key identifier for an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If an encryption key is not specified in <code>KmsKeyId</code>:</p> <ul> <li> <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted source, then Amazon Neptune will use the encryption key used to encrypt the source. Otherwise, Amazon Neptune will use your default encryption key.</p> </li> <li> <p>If the <code>StorageEncrypted</code> parameter is true and <code>ReplicationSourceIdentifier</code> is not specified, then Amazon Neptune will use your default encryption key.</p> </li> </ul> <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p> <p>If you create a Read Replica of an encrypted DB cluster in another AWS Region, you must set <code>KmsKeyId</code> to a KMS key ID that is valid in the destination AWS Region. This key is used to encrypt the Read Replica in that AWS Region.</p>
		 * @param {string} PreSignedUrl This parameter is not currently supported.
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>
		 * @param {Array<string>} EnableCloudwatchLogsExports The list of log types that need to be enabled for exporting to CloudWatch Logs.
		 * @param {boolean} DeletionProtection A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is enabled.
		 * @return {void} Success
		 */
		GET_CreateDBCluster(AvailabilityZones: Array<string>, BackupRetentionPeriod: number, CharacterSetName: string, DatabaseName: string, DBClusterIdentifier: string, DBClusterParameterGroupName: string, VpcSecurityGroupIds: Array<string>, DBSubnetGroupName: string, Engine: string, EngineVersion: string, Port: number, MasterUsername: string, MasterUserPassword: string, OptionGroupName: string, PreferredBackupWindow: string, PreferredMaintenanceWindow: string, ReplicationSourceIdentifier: string, Tags: Array<Tag>, StorageEncrypted: boolean, KmsKeyId: string, PreSignedUrl: string, EnableIAMDatabaseAuthentication: boolean, EnableCloudwatchLogsExports: Array<string>, DeletionProtection: boolean, Action: GET_CreateDBClusterAction, Version: GET_CreateDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBCluster?' + AvailabilityZones.map(z => `AvailabilityZones=${encodeURIComponent(z)}`).join('&') + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&CharacterSetName=' + (CharacterSetName == null ? '' : encodeURIComponent(CharacterSetName)) + '&DatabaseName=' + (DatabaseName == null ? '' : encodeURIComponent(DatabaseName)) + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&Port=' + Port + '&MasterUsername=' + (MasterUsername == null ? '' : encodeURIComponent(MasterUsername)) + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&ReplicationSourceIdentifier=' + (ReplicationSourceIdentifier == null ? '' : encodeURIComponent(ReplicationSourceIdentifier)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&StorageEncrypted=' + StorageEncrypted + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&PreSignedUrl=' + (PreSignedUrl == null ? '' : encodeURIComponent(PreSignedUrl)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&' + EnableCloudwatchLogsExports.map(z => `EnableCloudwatchLogsExports=${encodeURIComponent(z)}`).join('&') + '&DeletionProtection=' + DeletionProtection + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new DB cluster parameter group.</p> <p>Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.</p> <p> A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using <a>ModifyDBClusterParameterGroup</a>. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using <a>ModifyDBCluster</a>. When you associate a new DB cluster parameter group with a running DB cluster, you need to reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.</p> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon Neptune console</a> or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>
		 * Get #Action=CreateDBClusterParameterGroup
		 * @param {string} DBClusterParameterGroupName <p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DBClusterParameterGroup.</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>
		 * @param {string} DBParameterGroupFamily The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.
		 * @param {string} Description The description for the DB cluster parameter group.
		 * @param {Array<Tag>} Tags The tags to be assigned to the new DB cluster parameter group.
		 * @return {void} Success
		 */
		GET_CreateDBClusterParameterGroup(DBClusterParameterGroupName: string, DBParameterGroupFamily: string, Description: string, Tags: Array<Tag>, Action: GET_CreateDBClusterParameterGroupAction, Version: GET_CreateDBClusterParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBClusterParameterGroup?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a snapshot of a DB cluster.
		 * Get #Action=CreateDBClusterSnapshot
		 * @param {string} DBClusterSnapshotIdentifier <p>The identifier of the DB cluster snapshot. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>my-cluster1-snapshot1</code> </p>
		 * @param {string} DBClusterIdentifier <p>The identifier of the DB cluster to create a snapshot for. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul> <p>Example: <code>my-cluster1</code> </p>
		 * @param {Array<Tag>} Tags The tags to be assigned to the DB cluster snapshot.
		 * @return {void} Success
		 */
		GET_CreateDBClusterSnapshot(DBClusterSnapshotIdentifier: string, DBClusterIdentifier: string, Tags: Array<Tag>, Action: GET_CreateDBClusterSnapshotAction, Version: GET_CreateDBClusterSnapshotVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBClusterSnapshot?DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new DB instance.
		 * Get #Action=CreateDBInstance
		 * @param {string} DBName Not supported.
		 * @param {string} DBInstanceIdentifier <p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>
		 * @param {number} AllocatedStorage <p>The amount of storage (in gibibytes) to allocate for the DB instance.</p> <p>Type: Integer</p> <p>Not applicable. Neptune cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in a Neptune cluster volume.</p>
		 * @param {string} DBInstanceClass The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions.
		 * @param {string} Engine <p>The name of the database engine to be used for this instance.</p> <p>Valid Values: <code>neptune</code> </p>
		 * @param {string} MasterUsername The name for the master user. Not used.
		 * @param {string} MasterUserPassword <p>The password for the master user. The password can include any printable ASCII character except "/", """, or "@".</p> <p> Not used.</p>
		 * @param {Array<string>} DBSecurityGroups <p>A list of DB security groups to associate with this DB instance.</p> <p>Default: The default DB security group for the database engine.</p>
		 * @param {Array<string>} VpcSecurityGroupIds <p>A list of EC2 VPC security groups to associate with this DB instance.</p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
		 * @param {string} AvailabilityZone <p> The EC2 Availability Zone that the DB instance is created in</p> <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.</p> <p> Example: <code>us-east-1d</code> </p> <p> Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is set to <code>true</code>. The specified Availability Zone must be in the same AWS Region as the current endpoint.</p>
		 * @param {string} DBSubnetGroupName <p>A DB subnet group to associate with this DB instance.</p> <p>If there is no DB subnet group, then it is a non-VPC DB instance.</p>
		 * @param {string} PreferredMaintenanceWindow <p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week.</p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group to associate with this DB instance. If this argument is omitted, the default DBParameterGroup for the specified engine is used.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
		 * @param {number} BackupRetentionPeriod <p>The number of days for which automated backups are retained.</p> <p>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 0 to 35</p> </li> <li> <p>Cannot be set to 0 if the DB instance is a source to Read Replicas</p> </li> </ul>
		 * @param {string} PreferredBackupWindow <p> The daily time range during which automated backups are created.</p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p>
		 * @param {number} Port <p>The port number on which the database accepts connections.</p> <p>Not applicable. The port is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p> Default: <code>8182</code> </p> <p>Type: Integer</p>
		 * @param {boolean} MultiAZ Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the MultiAZ parameter is set to true.
		 * @param {string} EngineVersion The version number of the database engine to use. Currently, setting this parameter has no effect.
		 * @param {boolean} AutoMinorVersionUpgrade <p>Indicates that minor engine upgrades are applied automatically to the DB instance during the maintenance window.</p> <p>Default: <code>true</code> </p>
		 * @param {string} LicenseModel <p>License model information for this DB instance.</p> <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>
		 * @param {number} Iops The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.
		 * @param {string} OptionGroupName  <i>(Not supported by Neptune)</i> 
		 * @param {string} CharacterSetName  <i>(Not supported by Neptune)</i> 
		 * @param {boolean} PubliclyAccessible This flag should no longer be used.
		 * @param {Array<Tag>} Tags The tags to assign to the new instance.
		 * @param {string} DBClusterIdentifier <p>The identifier of the DB cluster that the instance will belong to.</p> <p>For information on creating a DB cluster, see <a>CreateDBCluster</a>.</p> <p>Type: String</p>
		 * @param {string} StorageType <p>Specifies the storage type to be associated with the DB instance.</p> <p>Not applicable. Storage is managed by the DB Cluster.</p>
		 * @param {string} TdeCredentialArn The ARN from the key store with which to associate the instance for TDE encryption.
		 * @param {string} TdeCredentialPassword The password for the given ARN from the key store in order to access the device.
		 * @param {boolean} StorageEncrypted <p>Specifies whether the DB instance is encrypted.</p> <p>Not applicable. The encryption for DB instances is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>Default: false</p>
		 * @param {string} KmsKeyId <p>The AWS KMS key identifier for an encrypted DB instance.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same AWS account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KM encryption key.</p> <p>Not applicable. The KMS key identifier is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p> <p>If the <code>StorageEncrypted</code> parameter is true, and you do not specify a value for the <code>KmsKeyId</code> parameter, then Amazon Neptune will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
		 * @param {string} Domain Specify the Active Directory Domain to create the instance in.
		 * @param {boolean} CopyTagsToSnapshot True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.
		 * @param {number} MonitoringInterval <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>
		 * @param {string} MonitoringRoleArn <p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>
		 * @param {string} DomainIAMRoleName Specify the name of the IAM role to be used when making API calls to the Directory Service.
		 * @param {number} PromotionTier <p>A value that specifies the order in which an Read Replica is promoted to the primary instance after a failure of the existing primary instance. </p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>
		 * @param {string} Timezone The time zone of the DB instance.
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>True to enable AWS Identity and Access Management (IAM) authentication for Neptune.</p> <p>Default: <code>false</code> </p>
		 * @param {boolean} EnablePerformanceInsights  <i>(Not supported by Neptune)</i> 
		 * @param {string} PerformanceInsightsKMSKeyId  <i>(Not supported by Neptune)</i> 
		 * @param {Array<string>} EnableCloudwatchLogsExports The list of log types that need to be enabled for exporting to CloudWatch Logs.
		 * @param {boolean} DeletionProtection <p>A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting a DB Instance</a>.</p> <p>DB instances in a DB cluster can be deleted even when deletion protection is enabled in their parent DB cluster.</p>
		 * @return {void} Success
		 */
		GET_CreateDBInstance(DBName: string, DBInstanceIdentifier: string, AllocatedStorage: number, DBInstanceClass: string, Engine: string, MasterUsername: string, MasterUserPassword: string, DBSecurityGroups: Array<string>, VpcSecurityGroupIds: Array<string>, AvailabilityZone: string, DBSubnetGroupName: string, PreferredMaintenanceWindow: string, DBParameterGroupName: string, BackupRetentionPeriod: number, PreferredBackupWindow: string, Port: number, MultiAZ: boolean, EngineVersion: string, AutoMinorVersionUpgrade: boolean, LicenseModel: string, Iops: number, OptionGroupName: string, CharacterSetName: string, PubliclyAccessible: boolean, Tags: Array<Tag>, DBClusterIdentifier: string, StorageType: string, TdeCredentialArn: string, TdeCredentialPassword: string, StorageEncrypted: boolean, KmsKeyId: string, Domain: string, CopyTagsToSnapshot: boolean, MonitoringInterval: number, MonitoringRoleArn: string, DomainIAMRoleName: string, PromotionTier: number, Timezone: string, EnableIAMDatabaseAuthentication: boolean, EnablePerformanceInsights: boolean, PerformanceInsightsKMSKeyId: string, EnableCloudwatchLogsExports: Array<string>, DeletionProtection: boolean, Action: GET_CreateDBInstanceAction, Version: GET_CreateDBInstanceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBInstance?DBName=' + (DBName == null ? '' : encodeURIComponent(DBName)) + '&DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&AllocatedStorage=' + AllocatedStorage + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&MasterUsername=' + (MasterUsername == null ? '' : encodeURIComponent(MasterUsername)) + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&' + DBSecurityGroups.map(z => `DBSecurityGroups=${encodeURIComponent(z)}`).join('&') + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&AvailabilityZone=' + (AvailabilityZone == null ? '' : encodeURIComponent(AvailabilityZone)) + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&Port=' + Port + '&MultiAZ=' + MultiAZ + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&Iops=' + Iops + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&CharacterSetName=' + (CharacterSetName == null ? '' : encodeURIComponent(CharacterSetName)) + '&PubliclyAccessible=' + PubliclyAccessible + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&StorageType=' + (StorageType == null ? '' : encodeURIComponent(StorageType)) + '&TdeCredentialArn=' + (TdeCredentialArn == null ? '' : encodeURIComponent(TdeCredentialArn)) + '&TdeCredentialPassword=' + (TdeCredentialPassword == null ? '' : encodeURIComponent(TdeCredentialPassword)) + '&StorageEncrypted=' + StorageEncrypted + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&Domain=' + (Domain == null ? '' : encodeURIComponent(Domain)) + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&MonitoringInterval=' + MonitoringInterval + '&MonitoringRoleArn=' + (MonitoringRoleArn == null ? '' : encodeURIComponent(MonitoringRoleArn)) + '&DomainIAMRoleName=' + (DomainIAMRoleName == null ? '' : encodeURIComponent(DomainIAMRoleName)) + '&PromotionTier=' + PromotionTier + '&Timezone=' + (Timezone == null ? '' : encodeURIComponent(Timezone)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&EnablePerformanceInsights=' + EnablePerformanceInsights + '&PerformanceInsightsKMSKeyId=' + (PerformanceInsightsKMSKeyId == null ? '' : encodeURIComponent(PerformanceInsightsKMSKeyId)) + '&' + EnableCloudwatchLogsExports.map(z => `EnableCloudwatchLogsExports=${encodeURIComponent(z)}`).join('&') + '&DeletionProtection=' + DeletionProtection + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new DB parameter group.</p> <p>A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using <i>ModifyDBParameterGroup</i>. Once you've created a DB parameter group, you need to associate it with your DB instance using <i>ModifyDBInstance</i>. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.</p> <important> <p>After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
		 * Get #Action=CreateDBParameterGroup
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <note> <p>This value is stored as a lowercase string.</p> </note>
		 * @param {string} DBParameterGroupFamily The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.
		 * @param {string} Description The description for the DB parameter group.
		 * @param {Array<Tag>} Tags The tags to be assigned to the new DB parameter group.
		 * @return {void} Success
		 */
		GET_CreateDBParameterGroup(DBParameterGroupName: string, DBParameterGroupFamily: string, Description: string, Tags: Array<Tag>, Action: GET_CreateDBParameterGroupAction, Version: GET_CreateDBParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBParameterGroup?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the AWS Region.
		 * Get #Action=CreateDBSubnetGroup
		 * @param {string} DBSubnetGroupName <p>The name for the DB subnet group. This value is stored as a lowercase string.</p> <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} DBSubnetGroupDescription The description for the DB subnet group.
		 * @param {Array<string>} SubnetIds The EC2 Subnet IDs for the DB subnet group.
		 * @param {Array<Tag>} Tags The tags to be assigned to the new DB subnet group.
		 * @return {void} Success
		 */
		GET_CreateDBSubnetGroup(DBSubnetGroupName: string, DBSubnetGroupDescription: string, SubnetIds: Array<string>, Tags: Array<Tag>, Action: GET_CreateDBSubnetGroupAction, Version: GET_CreateDBSubnetGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBSubnetGroup?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&DBSubnetGroupDescription=' + (DBSubnetGroupDescription == null ? '' : encodeURIComponent(DBSubnetGroupDescription)) + '&' + SubnetIds.map(z => `SubnetIds=${encodeURIComponent(z)}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.</p> <p>You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.</p> <p>If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account.</p>
		 * Get #Action=CreateEventSubscription
		 * @param {string} SubscriptionName <p>The name of the subscription.</p> <p>Constraints: The name must be less than 255 characters.</p>
		 * @param {string} SnsTopicArn The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
		 * @param {string} SourceType <p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.</p> <p>Valid values: <code>db-instance</code> | <code>db-cluster</code> | <code>db-parameter-group</code> | <code>db-security-group</code> | <code>db-snapshot</code> | <code>db-cluster-snapshot</code> </p>
		 * @param {Array<string>} EventCategories  A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the <b>DescribeEventCategories</b> action.
		 * @param {Array<string>} SourceIds <p>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p> <p>Constraints:</p> <ul> <li> <p>If SourceIds are supplied, SourceType must also be provided.</p> </li> <li> <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> </ul>
		 * @param {boolean} Enabled  A Boolean value; set to <b>true</b> to activate the subscription, set to <b>false</b> to create the subscription but not active it.
		 * @param {Array<Tag>} Tags The tags to be applied to the new event subscription.
		 * @return {void} Success
		 */
		GET_CreateEventSubscription(SubscriptionName: string, SnsTopicArn: string, SourceType: string, EventCategories: Array<string>, SourceIds: Array<string>, Enabled: boolean, Tags: Array<Tag>, Action: GET_CreateEventSubscriptionAction, Version: GET_CreateEventSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SnsTopicArn=' + (SnsTopicArn == null ? '' : encodeURIComponent(SnsTopicArn)) + '&SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + EventCategories.map(z => `EventCategories=${encodeURIComponent(z)}`).join('&') + '&' + SourceIds.map(z => `SourceIds=${encodeURIComponent(z)}`).join('&') + '&Enabled=' + Enabled + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified DB cluster are not deleted.</p> <p>Note that the DB Cluster cannot be deleted if deletion protection is enabled. To delete it, you must first set its <code>DeletionProtection</code> field to <code>False</code>.</p>
		 * Get #Action=DeleteDBCluster
		 * @param {string} DBClusterIdentifier <p>The DB cluster identifier for the DB cluster to be deleted. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match an existing DBClusterIdentifier.</p> </li> </ul>
		 * @param {boolean} SkipFinalSnapshot <p> Determines whether a final DB cluster snapshot is created before the DB cluster is deleted. If <code>true</code> is specified, no DB cluster snapshot is created. If <code>false</code> is specified, a DB cluster snapshot is created before the DB cluster is deleted.</p> <note> <p>You must specify a <code>FinalDBSnapshotIdentifier</code> parameter if <code>SkipFinalSnapshot</code> is <code>false</code>.</p> </note> <p>Default: <code>false</code> </p>
		 * @param {string} FinalDBSnapshotIdentifier <p> The DB cluster snapshot identifier of the new DB cluster snapshot created when <code>SkipFinalSnapshot</code> is set to <code>false</code>.</p> <note> <p> Specifying this parameter and also setting the <code>SkipFinalShapshot</code> parameter to true results in an error.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteDBCluster(DBClusterIdentifier: string, SkipFinalSnapshot: boolean, FinalDBSnapshotIdentifier: string, Action: GET_DeleteDBClusterAction, Version: GET_DeleteDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&SkipFinalSnapshot=' + SkipFinalSnapshot + '&FinalDBSnapshotIdentifier=' + (FinalDBSnapshotIdentifier == null ? '' : encodeURIComponent(FinalDBSnapshotIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters.
		 * Get #Action=DeleteDBClusterParameterGroup
		 * @param {string} DBClusterParameterGroupName <p>The name of the DB cluster parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing DB cluster parameter group.</p> </li> <li> <p>You can't delete a default DB cluster parameter group.</p> </li> <li> <p>Cannot be associated with any DB clusters.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteDBClusterParameterGroup(DBClusterParameterGroupName: string, Action: GET_DeleteDBClusterParameterGroupAction, Version: GET_DeleteDBClusterParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBClusterParameterGroup?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a DB cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The DB cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
		 * Get #Action=DeleteDBClusterSnapshot
		 * @param {string} DBClusterSnapshotIdentifier <p>The identifier of the DB cluster snapshot to delete.</p> <p>Constraints: Must be the name of an existing DB cluster snapshot in the <code>available</code> state.</p>
		 * @return {void} Success
		 */
		GET_DeleteDBClusterSnapshot(DBClusterSnapshotIdentifier: string, Action: GET_DeleteDBClusterSnapshotAction, Version: GET_DeleteDBClusterSnapshotVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBClusterSnapshot?DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete a DB instance, all automated backups for that instance are deleted and can't be recovered. Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not deleted.</p> <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is <code>deleting</code> until the DB snapshot is created. The API action <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action can't be canceled or reverted once submitted.</p> <p>Note that when a DB instance is in a failure state and has a status of <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>, you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to <code>true</code>.</p> <p>You can't delete a DB instance if it is the only instance in the DB cluster, or if it has deletion protection enabled.</p>
		 * Get #Action=DeleteDBInstance
		 * @param {string} DBInstanceIdentifier <p>The DB instance identifier for the DB instance to be deleted. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DB instance.</p> </li> </ul>
		 * @param {boolean} SkipFinalSnapshot <p> Determines whether a final DB snapshot is created before the DB instance is deleted. If <code>true</code> is specified, no DBSnapshot is created. If <code>false</code> is specified, a DB snapshot is created before the DB instance is deleted.</p> <p>Note that when a DB instance is in a failure state and has a status of 'failed', 'incompatible-restore', or 'incompatible-network', it can only be deleted when the SkipFinalSnapshot parameter is set to "true".</p> <p>Specify <code>true</code> when deleting a Read Replica.</p> <note> <p>The FinalDBSnapshotIdentifier parameter must be specified if SkipFinalSnapshot is <code>false</code>.</p> </note> <p>Default: <code>false</code> </p>
		 * @param {string} FinalDBSnapshotIdentifier <p> The DBSnapshotIdentifier of the new DBSnapshot created when SkipFinalSnapshot is set to <code>false</code>.</p> <note> <p>Specifying this parameter and also setting the SkipFinalShapshot parameter to true results in an error.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters or numbers.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> <li> <p>Cannot be specified when deleting a Read Replica.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteDBInstance(DBInstanceIdentifier: string, SkipFinalSnapshot: boolean, FinalDBSnapshotIdentifier: string, Action: GET_DeleteDBInstanceAction, Version: GET_DeleteDBInstanceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&SkipFinalSnapshot=' + SkipFinalSnapshot + '&FinalDBSnapshotIdentifier=' + (FinalDBSnapshotIdentifier == null ? '' : encodeURIComponent(FinalDBSnapshotIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.
		 * Get #Action=DeleteDBParameterGroup
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must be the name of an existing DB parameter group</p> </li> <li> <p>You can't delete a default DB parameter group</p> </li> <li> <p>Cannot be associated with any DB instances</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_DeleteDBParameterGroup(DBParameterGroupName: string, Action: GET_DeleteDBParameterGroupAction, Version: GET_DeleteDBParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBParameterGroup?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a DB subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
		 * Get #Action=DeleteDBSubnetGroup
		 * @param {string} DBSubnetGroupName <p>The name of the database subnet group to delete.</p> <note> <p>You can't delete the default subnet group.</p> </note> <p>Constraints:</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @return {void} Success
		 */
		GET_DeleteDBSubnetGroup(DBSubnetGroupName: string, Action: GET_DeleteDBSubnetGroupAction, Version: GET_DeleteDBSubnetGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBSubnetGroup?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an event notification subscription.
		 * Get #Action=DeleteEventSubscription
		 * @param {string} SubscriptionName The name of the event notification subscription you want to delete.
		 * @return {void} Success
		 */
		GET_DeleteEventSubscription(SubscriptionName: string, Action: GET_DeleteEventSubscriptionAction, Version: GET_DeleteEventSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list will contain only the description of the specified DB cluster parameter group.
		 * Get #Action=DescribeDBClusterParameterGroups
		 * @param {string} DBClusterParameterGroupName <p>The name of a specific DB cluster parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
		 * @param {Array<Filter>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBClusterParameterGroups(DBClusterParameterGroupName: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: GET_DescribeDBClusterParameterGroupsAction, Version: GET_DescribeDBClusterParameterGroupsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBClusterParameterGroups?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the detailed parameter list for a particular DB cluster parameter group.
		 * Get #Action=DescribeDBClusterParameters
		 * @param {string} DBClusterParameterGroupName <p>The name of a specific DB cluster parameter group to return parameter details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
		 * @param {string} Source  A value that indicates to return only parameters for a specific source. Parameter sources can be <code>engine</code>, <code>service</code>, or <code>customer</code>.
		 * @param {Array<Filter>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeDBClusterParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @return {void} Success
		 */
		GET_DescribeDBClusterParameters(DBClusterParameterGroupName: string, Source: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: GET_DescribeDBClusterParametersAction, Version: GET_DescribeDBClusterParametersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBClusterParameters?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&Source=' + (Source == null ? '' : encodeURIComponent(Source)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When sharing snapshots with other AWS accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the AWS accounts that are authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be copied or restored by all AWS accounts.</p> <p>To add or remove access for an AWS account to copy or restore a manual DB cluster snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
		 * Get #Action=DescribeDBClusterSnapshotAttributes
		 * @param {string} DBClusterSnapshotIdentifier The identifier for the DB cluster snapshot to describe the attributes for.
		 * @return {void} Success
		 */
		GET_DescribeDBClusterSnapshotAttributes(DBClusterSnapshotIdentifier: string, Action: GET_DescribeDBClusterSnapshotAttributesAction, Version: GET_DescribeDBClusterSnapshotAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBClusterSnapshotAttributes?DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about DB cluster snapshots. This API action supports pagination.
		 * Get #Action=DescribeDBClusterSnapshots
		 * @param {string} DBClusterIdentifier <p>The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter can't be used in conjunction with the <code>DBClusterSnapshotIdentifier</code> parameter. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBCluster.</p> </li> </ul>
		 * @param {string} DBClusterSnapshotIdentifier <p>A specific DB cluster snapshot identifier to describe. This parameter can't be used in conjunction with the <code>DBClusterIdentifier</code> parameter. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBClusterSnapshot.</p> </li> <li> <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p> </li> </ul>
		 * @param {string} SnapshotType <p>The type of DB cluster snapshots to be returned. You can specify one of the following values:</p> <ul> <li> <p> <code>automated</code> - Return all DB cluster snapshots that have been automatically taken by Amazon Neptune for my AWS account.</p> </li> <li> <p> <code>manual</code> - Return all DB cluster snapshots that have been taken by my AWS account.</p> </li> <li> <p> <code>shared</code> - Return all manual DB cluster snapshots that have been shared to my AWS account.</p> </li> <li> <p> <code>public</code> - Return all DB cluster snapshots that have been marked as public.</p> </li> </ul> <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual DB cluster snapshots are returned. You can include shared DB cluster snapshots with these results by setting the <code>IncludeShared</code> parameter to <code>true</code>. You can include public DB cluster snapshots with these results by setting the <code>IncludePublic</code> parameter to <code>true</code>.</p> <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to <code>public</code>.</p>
		 * @param {Array<Filter>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous <code>DescribeDBClusterSnapshots</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. 
		 * @param {boolean} IncludeShared <p>True to include shared manual DB cluster snapshots from other AWS accounts that this AWS account has been given permission to copy or restore, and otherwise false. The default is <code>false</code>.</p> <p>You can give an AWS account permission to restore a manual DB cluster snapshot from another AWS account by the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
		 * @param {boolean} IncludePublic <p>True to include manual DB cluster snapshots that are public and can be copied or restored by any AWS account, and otherwise false. The default is <code>false</code>. The default is false.</p> <p>You can share a manual DB cluster snapshot as public by using the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
		 * @return {void} Success
		 */
		GET_DescribeDBClusterSnapshots(DBClusterIdentifier: string, DBClusterSnapshotIdentifier: string, SnapshotType: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, IncludeShared: boolean, IncludePublic: boolean, Action: GET_DescribeDBClusterSnapshotsAction, Version: GET_DescribeDBClusterSnapshotsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBClusterSnapshots?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&SnapshotType=' + (SnapshotType == null ? '' : encodeURIComponent(SnapshotType)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&IncludeShared=' + IncludeShared + '&IncludePublic=' + IncludePublic + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about provisioned DB clusters, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS clusters and Amazon DocDB clusters.</p> </note>
		 * Get #Action=DescribeDBClusters
		 * @param {string} DBClusterIdentifier <p>The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match an existing DBClusterIdentifier.</p> </li> </ul>
		 * @param {Array<Filter>} Filters <p>A filter that specifies one or more DB clusters to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>engine</code> - Accepts an engine name (such as <code>neptune</code>), and restricts the results list to DB clusters created by that engine.</p> </li> </ul> <p>For example, to invoke this API from the AWS CLI and filter so that only Neptune DB clusters are returned, you could use the following command:</p>
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous <a>DescribeDBClusters</a> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBClusters(DBClusterIdentifier: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: GET_DescribeDBClustersAction, Version: GET_DescribeDBClustersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBClusters?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the available DB engines.
		 * Get #Action=DescribeDBEngineVersions
		 * @param {string} Engine The database engine to return.
		 * @param {string} EngineVersion <p>The database engine version to return.</p> <p>Example: <code>5.1.49</code> </p>
		 * @param {string} DBParameterGroupFamily <p>The name of a specific DB parameter group family to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match an existing DBParameterGroupFamily.</p> </li> </ul>
		 * @param {Array<Filter>} Filters Not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is included in the response so that the following results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @param {boolean} DefaultOnly Indicates that only the default version of the specified engine or engine and major version combination is returned.
		 * @param {boolean} ListSupportedCharacterSets If this parameter is specified and the requested engine supports the <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported character sets for each engine version.
		 * @param {boolean} ListSupportedTimezones If this parameter is specified and the requested engine supports the <code>TimeZone</code> parameter for <code>CreateDBInstance</code>, the response includes a list of supported time zones for each engine version.
		 * @return {void} Success
		 */
		GET_DescribeDBEngineVersions(Engine: string, EngineVersion: string, DBParameterGroupFamily: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, DefaultOnly: boolean, ListSupportedCharacterSets: boolean, ListSupportedTimezones: boolean, Action: GET_DescribeDBEngineVersionsAction, Version: GET_DescribeDBEngineVersionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBEngineVersions?Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&DefaultOnly=' + DefaultOnly + '&ListSupportedCharacterSets=' + ListSupportedCharacterSets + '&ListSupportedTimezones=' + ListSupportedTimezones + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about provisioned instances, and supports pagination.</p> <note> <p>This operation can also return information for Amazon RDS instances and Amazon DocDB instances.</p> </note>
		 * Get #Action=DescribeDBInstances
		 * @param {string} DBInstanceIdentifier <p>The user-supplied instance identifier. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the identifier of an existing DBInstance.</p> </li> </ul>
		 * @param {Array<Filter>} Filters <p>A filter that specifies one or more DB instances to describe.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include information about the DB instances associated with the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>engine</code> - Accepts an engine name (such as <code>neptune</code>), and restricts the results list to DB instances created by that engine.</p> </li> </ul> <p>For example, to invoke this API from the AWS CLI and filter so that only Neptune DB instances are returned, you could use the following command:</p>
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeDBInstances</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBInstances(DBInstanceIdentifier: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: GET_DescribeDBInstancesAction, Version: GET_DescribeDBInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBInstances?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of <code>DBParameterGroup</code> descriptions. If a <code>DBParameterGroupName</code> is specified, the list will contain only the description of the specified DB parameter group.
		 * Get #Action=DescribeDBParameterGroups
		 * @param {string} DBParameterGroupName <p>The name of a specific DB parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
		 * @param {Array<Filter>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous <code>DescribeDBParameterGroups</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBParameterGroups(DBParameterGroupName: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: GET_DescribeDBParameterGroupsAction, Version: GET_DescribeDBParameterGroupsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBParameterGroups?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the detailed parameter list for a particular DB parameter group.
		 * Get #Action=DescribeDBParameters
		 * @param {string} DBParameterGroupName <p>The name of a specific DB parameter group to return details for.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBParameterGroup.</p> </li> </ul>
		 * @param {string} Source <p>The parameter types to return.</p> <p>Default: All parameter types returned</p> <p>Valid Values: <code>user | system | engine-default</code> </p>
		 * @param {Array<Filter>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p>The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker An optional pagination token provided by a previous <code>DescribeDBParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBParameters(DBParameterGroupName: string, Source: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: GET_DescribeDBParametersAction, Version: GET_DescribeDBParametersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBParameters?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&Source=' + (Source == null ? '' : encodeURIComponent(Source)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</p> <p>For an overview of CIDR ranges, go to the <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
		 * Get #Action=DescribeDBSubnetGroups
		 * @param {string} DBSubnetGroupName The name of the DB subnet group to return details for.
		 * @param {Array<Filter>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous DescribeDBSubnetGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeDBSubnetGroups(DBSubnetGroupName: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: GET_DescribeDBSubnetGroupsAction, Version: GET_DescribeDBSubnetGroupsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBSubnetGroups?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the default engine and system parameter information for the cluster database engine.
		 * Get #Action=DescribeEngineDefaultClusterParameters
		 * @param {string} DBParameterGroupFamily The name of the DB cluster parameter group family to return engine parameter information for.
		 * @param {Array<Filter>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeEngineDefaultClusterParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeEngineDefaultClusterParameters(DBParameterGroupFamily: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: GET_DescribeEngineDefaultClusterParametersAction, Version: GET_DescribeEngineDefaultClusterParametersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEngineDefaultClusterParameters?DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the default engine and system parameter information for the specified database engine.
		 * Get #Action=DescribeEngineDefaultParameters
		 * @param {string} DBParameterGroupFamily The name of the DB parameter group family.
		 * @param {Array<Filter>} Filters Not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribeEngineDefaultParameters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeEngineDefaultParameters(DBParameterGroupFamily: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: GET_DescribeEngineDefaultParametersAction, Version: GET_DescribeEngineDefaultParametersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEngineDefaultParameters?DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Displays a list of categories for all event source types, or, if specified, for a specified source type.
		 * Get #Action=DescribeEventCategories
		 * @param {string} SourceType <p>The type of source that is generating the events.</p> <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>
		 * @param {Array<Filter>} Filters This parameter is not currently supported.
		 * @return {void} Success
		 */
		GET_DescribeEventCategories(SourceType: string, Filters: Array<Filter>, Action: GET_DescribeEventCategoriesAction, Version: GET_DescribeEventCategoriesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEventCategories?SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.</p> <p>If you specify a SubscriptionName, lists the description for that subscription.</p>
		 * Get #Action=DescribeEventSubscriptions
		 * @param {string} SubscriptionName The name of the event notification subscription you want to describe.
		 * @param {Array<Filter>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .
		 * @return {void} Success
		 */
		GET_DescribeEventSubscriptions(SubscriptionName: string, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: GET_DescribeEventSubscriptionsAction, Version: GET_DescribeEventSubscriptionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEventSubscriptions?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter groups for the past 14 days. Events specific to a particular DB instance, DB security group, database snapshot, or DB parameter group can be obtained by providing the name as a parameter. By default, the past hour of events are returned.
		 * Get #Action=DescribeEvents
		 * @param {string} SourceIdentifier <p>The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.</p> <p>Constraints:</p> <ul> <li> <p>If SourceIdentifier is supplied, SourceType must also be provided.</p> </li> <li> <p>If the source type is <code>DBInstance</code>, then a <code>DBInstanceIdentifier</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBSecurityGroup</code>, a <code>DBSecurityGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBParameterGroup</code>, a <code>DBParameterGroupName</code> must be supplied.</p> </li> <li> <p>If the source type is <code>DBSnapshot</code>, a <code>DBSnapshotIdentifier</code> must be supplied.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul>
		 * @param {GET_DescribeEventsSourceType} SourceType The event source to retrieve events for. If no value is specified, all events are returned.
		 * @param {Date} StartTime <p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: 2009-07-08T18:00Z</p>
		 * @param {Date} EndTime <p> The end of the time interval for which to retrieve events, specified in ISO 8601 format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a> </p> <p>Example: 2009-07-08T18:00Z</p>
		 * @param {number} Duration <p>The number of minutes to retrieve events for.</p> <p>Default: 60</p>
		 * @param {Array<string>} EventCategories A list of event categories that trigger notifications for a event notification subscription.
		 * @param {Array<Filter>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous DescribeEvents request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
		 * @return {void} Success
		 */
		GET_DescribeEvents(SourceIdentifier: string, SourceType: GET_DescribeEventsSourceType, StartTime: Date, EndTime: Date, Duration: number, EventCategories: Array<string>, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: GET_DescribeEventsAction, Version: GET_DescribeEventsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEvents?SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&SourceType=' + SourceType + '&StartTime=' + StartTime.toISOString() + '&EndTime=' + EndTime.toISOString() + '&Duration=' + Duration + '&' + EventCategories.map(z => `EventCategories=${encodeURIComponent(z)}`).join('&') + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of orderable DB instance options for the specified engine.
		 * Get #Action=DescribeOrderableDBInstanceOptions
		 * @param {string} Engine The name of the engine to retrieve DB instance options for.
		 * @param {string} EngineVersion The engine version filter value. Specify this parameter to show only the available offerings matching the specified engine version.
		 * @param {string} DBInstanceClass The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.
		 * @param {string} LicenseModel The license model filter value. Specify this parameter to show only the available offerings matching the specified license model.
		 * @param {boolean} Vpc The VPC filter value. Specify this parameter to show only the available VPC or non-VPC offerings.
		 * @param {Array<Filter>} Filters This parameter is not currently supported.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @param {string} Marker  An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .
		 * @return {void} Success
		 */
		GET_DescribeOrderableDBInstanceOptions(Engine: string, EngineVersion: string, DBInstanceClass: string, LicenseModel: string, Vpc: boolean, Filters: Array<Filter>, MaxRecords: number, Marker: string, Action: GET_DescribeOrderableDBInstanceOptionsAction, Version: GET_DescribeOrderableDBInstanceOptionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeOrderableDBInstanceOptions?Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&Vpc=' + Vpc + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.
		 * Get #Action=DescribePendingMaintenanceActions
		 * @param {string} ResourceIdentifier The ARN of a resource to return pending maintenance actions for.
		 * @param {Array<Filter>} Filters <p>A filter that specifies one or more resources to return pending maintenance actions for.</p> <p>Supported filters:</p> <ul> <li> <p> <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon Resource Names (ARNs). The results list will only include pending maintenance actions for the DB clusters identified by these ARNs.</p> </li> <li> <p> <code>db-instance-id</code> - Accepts DB instance identifiers and DB instance ARNs. The results list will only include pending maintenance actions for the DB instances identified by these ARNs.</p> </li> </ul>
		 * @param {string} Marker  An optional pagination token provided by a previous <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the response includes only records beyond the marker, up to a number of records specified by <code>MaxRecords</code>.
		 * @param {number} MaxRecords <p> The maximum number of records to include in the response. If more records exist than the specified <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.</p> <p>Default: 100</p> <p>Constraints: Minimum 20, maximum 100.</p>
		 * @return {void} Success
		 */
		GET_DescribePendingMaintenanceActions(ResourceIdentifier: string, Filters: Array<Filter>, Marker: string, MaxRecords: number, Action: GET_DescribePendingMaintenanceActionsAction, Version: GET_DescribePendingMaintenanceActionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribePendingMaintenanceActions?ResourceIdentifier=' + (ResourceIdentifier == null ? '' : encodeURIComponent(ResourceIdentifier)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * You can call <a>DescribeValidDBInstanceModifications</a> to learn what modifications you can make to your DB instance. You can use this information when you call <a>ModifyDBInstance</a>.
		 * Get #Action=DescribeValidDBInstanceModifications
		 * @param {string} DBInstanceIdentifier The customer identifier or the ARN of your DB instance.
		 * @return {void} Success
		 */
		GET_DescribeValidDBInstanceModifications(DBInstanceIdentifier: string, Action: GET_DescribeValidDBInstanceModificationsAction, Version: GET_DescribeValidDBInstanceModificationsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeValidDBInstanceModifications?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Forces a failover for a DB cluster.</p> <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the DB cluster to be the primary instance (the cluster writer).</p> <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing. Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing connections that use those endpoint addresses when the failover is complete.</p>
		 * Get #Action=FailoverDBCluster
		 * @param {string} DBClusterIdentifier <p>A DB cluster identifier to force a failover for. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>
		 * @param {string} TargetDBInstanceIdentifier <p>The name of the instance to promote to the primary instance.</p> <p>You must specify the instance identifier for an Read Replica in the DB cluster. For example, <code>mydbcluster-replica1</code>.</p>
		 * @return {void} Success
		 */
		GET_FailoverDBCluster(DBClusterIdentifier: string, TargetDBInstanceIdentifier: string, Action: GET_FailoverDBClusterAction, Version: GET_FailoverDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=FailoverDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&TargetDBInstanceIdentifier=' + (TargetDBInstanceIdentifier == null ? '' : encodeURIComponent(TargetDBInstanceIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all tags on an Amazon Neptune resource.
		 * Get #Action=ListTagsForResource
		 * @param {string} ResourceName The Amazon Neptune resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.
		 * @param {Array<Filter>} Filters This parameter is not currently supported.
		 * @return {void} Success
		 */
		GET_ListTagsForResource(ResourceName: string, Filters: Array<Filter>, Action: GET_ListTagsForResourceAction, Version: GET_ListTagsForResourceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTagsForResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + Filters.map(z => `Filters=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modify a setting for a DB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
		 * Get #Action=ModifyDBCluster
		 * @param {string} DBClusterIdentifier <p>The DB cluster identifier for the cluster being modified. This parameter is not case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>
		 * @param {string} NewDBClusterIdentifier <p>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>The first character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>
		 * @param {boolean} ApplyImmediately <p>A value that specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB cluster. If this parameter is set to <code>false</code>, changes to the DB cluster are applied during the next maintenance window.</p> <p>The <code>ApplyImmediately</code> parameter only affects the <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values. If you set the <code>ApplyImmediately</code> parameter value to false, then changes to the <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p>Default: <code>false</code> </p>
		 * @param {number} BackupRetentionPeriod <p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>
		 * @param {string} DBClusterParameterGroupName The name of the DB cluster parameter group to use for the DB cluster.
		 * @param {Array<string>} VpcSecurityGroupIds A list of VPC security groups that the DB cluster will belong to.
		 * @param {number} Port <p>The port number on which the DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>
		 * @param {string} MasterUserPassword <p>The new password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p> <p>Constraints: Must contain from 8 to 41 characters.</p>
		 * @param {string} OptionGroupName  <i>(Not supported by Neptune)</i> 
		 * @param {string} PreferredBackupWindow <p>The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter.</p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week.</p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>
		 * @param {GET_ModifyDBClusterCloudwatchLogsExportConfiguration} CloudwatchLogsExportConfiguration The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster.
		 * @param {string} EngineVersion <p>The version number of the database engine. Currently, setting this parameter has no effect. To upgrade your database engine to the most recent release, use the <a>ApplyPendingMaintenanceAction</a> API.</p> <p>For a list of valid engine versions, see <a>CreateDBInstance</a>, or call <a>DescribeDBEngineVersions</a>.</p>
		 * @param {boolean} DeletionProtection A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
		 * @return {void} Success
		 */
		GET_ModifyDBCluster(DBClusterIdentifier: string, NewDBClusterIdentifier: string, ApplyImmediately: boolean, BackupRetentionPeriod: number, DBClusterParameterGroupName: string, VpcSecurityGroupIds: Array<string>, Port: number, MasterUserPassword: string, OptionGroupName: string, PreferredBackupWindow: string, PreferredMaintenanceWindow: string, EnableIAMDatabaseAuthentication: boolean, CloudwatchLogsExportConfiguration: GET_ModifyDBClusterCloudwatchLogsExportConfiguration, EngineVersion: string, DeletionProtection: boolean, Action: GET_ModifyDBClusterAction, Version: GET_ModifyDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&NewDBClusterIdentifier=' + (NewDBClusterIdentifier == null ? '' : encodeURIComponent(NewDBClusterIdentifier)) + '&ApplyImmediately=' + ApplyImmediately + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&Port=' + Port + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&CloudwatchLogsExportConfiguration=' + CloudwatchLogsExportConfiguration + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&DeletionProtection=' + DeletionProtection + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB cluster associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter group has been created or modified.</p> </important>
		 * Get #Action=ModifyDBClusterParameterGroup
		 * @param {string} DBClusterParameterGroupName The name of the DB cluster parameter group to modify.
		 * @param {Array<Parameter>} Parameters A list of parameters in the DB cluster parameter group to modify.
		 * @return {void} Success
		 */
		GET_ModifyDBClusterParameterGroup(DBClusterParameterGroupName: string, Parameters: Array<Parameter>, Action: GET_ModifyDBClusterParameterGroupAction, Version: GET_ModifyDBClusterParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBClusterParameterGroup?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p> <p>To share a manual DB cluster snapshot with other AWS accounts, specify <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the AWS accounts that are authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot public, which means that it can be copied or restored by all AWS accounts. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all AWS accounts. If a manual DB cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized AWS account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p> <p>To view which AWS accounts have access to copy or restore a manual DB cluster snapshot, or whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
		 * Get #Action=ModifyDBClusterSnapshotAttribute
		 * @param {string} DBClusterSnapshotIdentifier The identifier for the DB cluster snapshot to modify the attributes for.
		 * @param {string} AttributeName <p>The name of the DB cluster snapshot attribute to modify.</p> <p>To manage authorization for other AWS accounts to copy or restore a manual DB cluster snapshot, set this value to <code>restore</code>.</p>
		 * @param {Array<string>} ValuesToAdd <p>A list of DB cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p> <p>To authorize other AWS accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more AWS account IDs, or <code>all</code> to make the manual DB cluster snapshot restorable by any AWS account. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all AWS accounts.</p>
		 * @param {Array<string>} ValuesToRemove <p>A list of DB cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p> <p>To remove authorization for other AWS accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more AWS account identifiers, or <code>all</code> to remove authorization for any AWS account to copy or restore the DB cluster snapshot. If you specify <code>all</code>, an AWS account whose account ID is explicitly added to the <code>restore</code> attribute can still copy or restore a manual DB cluster snapshot.</p>
		 * @return {void} Success
		 */
		GET_ModifyDBClusterSnapshotAttribute(DBClusterSnapshotIdentifier: string, AttributeName: string, ValuesToAdd: Array<string>, ValuesToRemove: Array<string>, Action: GET_ModifyDBClusterSnapshotAttributeAction, Version: GET_ModifyDBClusterSnapshotAttributeVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBClusterSnapshotAttribute?DBClusterSnapshotIdentifier=' + (DBClusterSnapshotIdentifier == null ? '' : encodeURIComponent(DBClusterSnapshotIdentifier)) + '&AttributeName=' + (AttributeName == null ? '' : encodeURIComponent(AttributeName)) + '&' + ValuesToAdd.map(z => `ValuesToAdd=${encodeURIComponent(z)}`).join('&') + '&' + ValuesToRemove.map(z => `ValuesToRemove=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies settings for a DB instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. To learn what modifications you can make to your DB instance, call <a>DescribeValidDBInstanceModifications</a> before you call <a>ModifyDBInstance</a>.
		 * Get #Action=ModifyDBInstance
		 * @param {string} DBInstanceIdentifier <p>The DB instance identifier. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>
		 * @param {number} AllocatedStorage <p>The new amount of storage (in gibibytes) to allocate for the DB instance.</p> <p>Not applicable. Storage is managed by the DB Cluster.</p>
		 * @param {string} DBInstanceClass <p>The new compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions.</p> <p>If you modify the DB instance class, an outage occurs during the change. The change is applied during the next maintenance window, unless <code>ApplyImmediately</code> is specified as <code>true</code> for this request.</p> <p>Default: Uses existing setting</p>
		 * @param {string} DBSubnetGroupName <p>The new DB subnet group for the DB instance. You can use this parameter to move your DB instance to a different VPC.</p> <p>Changing the subnet group causes an outage during the change. The change is applied during the next maintenance window, unless you specify <code>true</code> for the <code>ApplyImmediately</code> parameter.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetGroup</code> </p>
		 * @param {Array<string>} DBSecurityGroups <p>A list of DB security groups to authorize on this DB instance. Changing this setting doesn't result in an outage and the change is asynchronously applied as soon as possible.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match existing DBSecurityGroups.</p> </li> </ul>
		 * @param {Array<string>} VpcSecurityGroupIds <p>A list of EC2 VPC security groups to authorize on this DB instance. This change is asynchronously applied as soon as possible.</p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match existing VpcSecurityGroupIds.</p> </li> </ul>
		 * @param {boolean} ApplyImmediately <p>Specifies whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB instance.</p> <p> If this parameter is set to <code>false</code>, changes to the DB instance are applied during the next maintenance window. Some parameter changes can cause an outage and are applied on the next call to <a>RebootDBInstance</a>, or the next failure reboot.</p> <p>Default: <code>false</code> </p>
		 * @param {string} MasterUserPassword Not applicable.
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group to apply to the DB instance. Changing this setting doesn't result in an outage. The parameter group name itself is changed immediately, but the actual parameter changes are not applied until you reboot the instance without failover. The db instance will NOT be rebooted automatically and the parameter changes will NOT be applied during the next maintenance window.</p> <p>Default: Uses existing setting</p> <p>Constraints: The DB parameter group must be in the same DB parameter group family as this DB instance.</p>
		 * @param {number} BackupRetentionPeriod <p>Not applicable. The retention period for automated backups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Default: Uses existing setting</p>
		 * @param {string} PreferredBackupWindow <p> The daily time range during which automated backups are created if automated backups are enabled.</p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the format hh24:mi-hh24:mi</p> </li> <li> <p>Must be in Universal Time Coordinated (UTC)</p> </li> <li> <p>Must not conflict with the preferred maintenance window</p> </li> <li> <p>Must be at least 30 minutes</p> </li> </ul>
		 * @param {string} PreferredMaintenanceWindow <p>The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter doesn't result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If there are pending actions that cause a reboot, and the maintenance window is changed to include the current time, then changing this parameter will cause a reboot of the DB instance. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied.</p> <p>Default: Uses existing setting</p> <p>Format: ddd:hh24:mi-ddd:hh24:mi</p> <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p> <p>Constraints: Must be at least 30 minutes</p>
		 * @param {boolean} MultiAZ Specifies if the DB instance is a Multi-AZ deployment. Changing this parameter doesn't result in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request.
		 * @param {string} EngineVersion The version number of the database engine to upgrade to. Currently, setting this parameter has no effect. To upgrade your database engine to the most recent release, use the <a>ApplyPendingMaintenanceAction</a> API.
		 * @param {boolean} AllowMajorVersionUpgrade Indicates that major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
		 * @param {boolean} AutoMinorVersionUpgrade  Indicates that minor version upgrades are applied automatically to the DB instance during the maintenance window. Changing this parameter doesn't result in an outage except in the following case and the change is asynchronously applied as soon as possible. An outage will result if this parameter is set to <code>true</code> during the maintenance window, and a newer minor version is available, and Neptune has enabled auto patching for that engine version.
		 * @param {string} LicenseModel Not supported.
		 * @param {number} Iops <p>The new Provisioned IOPS (I/O operations per second) value for the instance.</p> <p>Changing this setting doesn't result in an outage and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request.</p> <p>Default: Uses existing setting</p>
		 * @param {string} OptionGroupName  <i>(Not supported by Neptune)</i> 
		 * @param {string} NewDBInstanceIdentifier <p> The new DB instance identifier for the DB instance when renaming a DB instance. When you change the DB instance identifier, an instance reboot will occur immediately if you set <code>Apply Immediately</code> to true, or will occur during the next maintenance window if <code>Apply Immediately</code> to false. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>
		 * @param {string} StorageType Not supported.
		 * @param {string} TdeCredentialArn The ARN from the key store with which to associate the instance for TDE encryption.
		 * @param {string} TdeCredentialPassword The password for the given ARN from the key store in order to access the device.
		 * @param {string} CACertificateIdentifier Indicates the certificate that needs to be associated with the instance.
		 * @param {string} Domain Not supported.
		 * @param {boolean} CopyTagsToSnapshot True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise false. The default is false.
		 * @param {number} MonitoringInterval <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>
		 * @param {number} DBPortNumber <p>The port number on which the database accepts connections.</p> <p>The value of the <code>DBPortNumber</code> parameter must not match any of the port values specified for options in the option group for the DB instance.</p> <p>Your database will restart when you change the <code>DBPortNumber</code> value regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p> Default: <code>8182</code> </p>
		 * @param {boolean} PubliclyAccessible This flag should no longer be used.
		 * @param {string} MonitoringRoleArn <p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>
		 * @param {string} DomainIAMRoleName Not supported
		 * @param {number} PromotionTier <p>A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance.</p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>You can enable IAM database authentication for the following database engines</p> <p>Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster. For more information, see <a>ModifyDBCluster</a>.</p> <p>Default: <code>false</code> </p>
		 * @param {boolean} EnablePerformanceInsights  <i>(Not supported by Neptune)</i> 
		 * @param {string} PerformanceInsightsKMSKeyId  <i>(Not supported by Neptune)</i> 
		 * @param {GET_ModifyDBInstanceCloudwatchLogsExportConfiguration} CloudwatchLogsExportConfiguration The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance or DB cluster.
		 * @param {boolean} DeletionProtection A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/manage-console-instances-delete.html">Deleting a DB Instance</a>.
		 * @return {void} Success
		 */
		GET_ModifyDBInstance(DBInstanceIdentifier: string, AllocatedStorage: number, DBInstanceClass: string, DBSubnetGroupName: string, DBSecurityGroups: Array<string>, VpcSecurityGroupIds: Array<string>, ApplyImmediately: boolean, MasterUserPassword: string, DBParameterGroupName: string, BackupRetentionPeriod: number, PreferredBackupWindow: string, PreferredMaintenanceWindow: string, MultiAZ: boolean, EngineVersion: string, AllowMajorVersionUpgrade: boolean, AutoMinorVersionUpgrade: boolean, LicenseModel: string, Iops: number, OptionGroupName: string, NewDBInstanceIdentifier: string, StorageType: string, TdeCredentialArn: string, TdeCredentialPassword: string, CACertificateIdentifier: string, Domain: string, CopyTagsToSnapshot: boolean, MonitoringInterval: number, DBPortNumber: number, PubliclyAccessible: boolean, MonitoringRoleArn: string, DomainIAMRoleName: string, PromotionTier: number, EnableIAMDatabaseAuthentication: boolean, EnablePerformanceInsights: boolean, PerformanceInsightsKMSKeyId: string, CloudwatchLogsExportConfiguration: GET_ModifyDBInstanceCloudwatchLogsExportConfiguration, DeletionProtection: boolean, Action: GET_ModifyDBInstanceAction, Version: GET_ModifyDBInstanceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&AllocatedStorage=' + AllocatedStorage + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&' + DBSecurityGroups.map(z => `DBSecurityGroups=${encodeURIComponent(z)}`).join('&') + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&ApplyImmediately=' + ApplyImmediately + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&MultiAZ=' + MultiAZ + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&AllowMajorVersionUpgrade=' + AllowMajorVersionUpgrade + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&Iops=' + Iops + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&NewDBInstanceIdentifier=' + (NewDBInstanceIdentifier == null ? '' : encodeURIComponent(NewDBInstanceIdentifier)) + '&StorageType=' + (StorageType == null ? '' : encodeURIComponent(StorageType)) + '&TdeCredentialArn=' + (TdeCredentialArn == null ? '' : encodeURIComponent(TdeCredentialArn)) + '&TdeCredentialPassword=' + (TdeCredentialPassword == null ? '' : encodeURIComponent(TdeCredentialPassword)) + '&CACertificateIdentifier=' + (CACertificateIdentifier == null ? '' : encodeURIComponent(CACertificateIdentifier)) + '&Domain=' + (Domain == null ? '' : encodeURIComponent(Domain)) + '&CopyTagsToSnapshot=' + CopyTagsToSnapshot + '&MonitoringInterval=' + MonitoringInterval + '&DBPortNumber=' + DBPortNumber + '&PubliclyAccessible=' + PubliclyAccessible + '&MonitoringRoleArn=' + (MonitoringRoleArn == null ? '' : encodeURIComponent(MonitoringRoleArn)) + '&DomainIAMRoleName=' + (DomainIAMRoleName == null ? '' : encodeURIComponent(DomainIAMRoleName)) + '&PromotionTier=' + PromotionTier + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&EnablePerformanceInsights=' + EnablePerformanceInsights + '&PerformanceInsightsKMSKeyId=' + (PerformanceInsightsKMSKeyId == null ? '' : encodeURIComponent(PerformanceInsightsKMSKeyId)) + '&CloudwatchLogsExportConfiguration=' + CloudwatchLogsExportConfiguration + '&DeletionProtection=' + DeletionProtection + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect.</p> </note> <important> <p>After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the <code>character_set_database</code> parameter. You can use the <i>Parameter Groups</i> option of the Amazon Neptune console or the <i>DescribeDBParameters</i> command to verify that your DB parameter group has been created or modified.</p> </important>
		 * Get #Action=ModifyDBParameterGroup
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBParameterGroup.</p> </li> </ul>
		 * @param {Array<Parameter>} Parameters <p>An array of parameter names, values, and the apply method for the parameter update. At least one parameter name, value, and apply method must be supplied; subsequent arguments are optional. A maximum of 20 parameters can be modified in a single request.</p> <p>Valid Values (for the application method): <code>immediate | pending-reboot</code> </p> <note> <p>You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters, and changes are applied when you reboot the DB instance without failover.</p> </note>
		 * @return {void} Success
		 */
		GET_ModifyDBParameterGroup(DBParameterGroupName: string, Parameters: Array<Parameter>, Action: GET_ModifyDBParameterGroupAction, Version: GET_ModifyDBParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBParameterGroup?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in at least two AZs in the AWS Region.
		 * Get #Action=ModifyDBSubnetGroup
		 * @param {string} DBSubnetGroupName <p>The name for the DB subnet group. This value is stored as a lowercase string. You can't modify the default subnet group.</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} DBSubnetGroupDescription The description for the DB subnet group.
		 * @param {Array<string>} SubnetIds The EC2 subnet IDs for the DB subnet group.
		 * @return {void} Success
		 */
		GET_ModifyDBSubnetGroup(DBSubnetGroupName: string, DBSubnetGroupDescription: string, SubnetIds: Array<string>, Action: GET_ModifyDBSubnetGroupAction, Version: GET_ModifyDBSubnetGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBSubnetGroup?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&DBSubnetGroupDescription=' + (DBSubnetGroupDescription == null ? '' : encodeURIComponent(DBSubnetGroupDescription)) + '&' + SubnetIds.map(z => `SubnetIds=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the <a>AddSourceIdentifierToSubscription</a> and <a>RemoveSourceIdentifierFromSubscription</a> calls.</p> <p>You can see a list of the event categories for a given SourceType by using the <b>DescribeEventCategories</b> action.</p>
		 * Get #Action=ModifyEventSubscription
		 * @param {string} SubscriptionName The name of the event notification subscription.
		 * @param {string} SnsTopicArn The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
		 * @param {string} SourceType <p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.</p> <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>
		 * @param {Array<string>} EventCategories  A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the <b>DescribeEventCategories</b> action.
		 * @param {boolean} Enabled  A Boolean value; set to <b>true</b> to activate the subscription.
		 * @return {void} Success
		 */
		GET_ModifyEventSubscription(SubscriptionName: string, SnsTopicArn: string, SourceType: string, EventCategories: Array<string>, Enabled: boolean, Action: GET_ModifyEventSubscriptionAction, Version: GET_ModifyEventSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SnsTopicArn=' + (SnsTopicArn == null ? '' : encodeURIComponent(SnsTopicArn)) + '&SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + EventCategories.map(z => `EventCategories=${encodeURIComponent(z)}`).join('&') + '&Enabled=' + Enabled + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Not supported.
		 * Get #Action=PromoteReadReplicaDBCluster
		 * @param {string} DBClusterIdentifier Not supported.
		 * @return {void} Success
		 */
		GET_PromoteReadReplicaDBCluster(DBClusterIdentifier: string, Action: GET_PromoteReadReplicaDBClusterAction, Version: GET_PromoteReadReplicaDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PromoteReadReplicaDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>You might need to reboot your DB instance, usually for maintenance reasons. For example, if you make certain modifications, or if you change the DB parameter group associated with the DB instance, you must reboot the instance for the changes to take effect.</p> <p>Rebooting a DB instance restarts the database engine service. Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.</p>
		 * Get #Action=RebootDBInstance
		 * @param {string} DBInstanceIdentifier <p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>
		 * @param {boolean} ForceFailover <p> When <code>true</code>, the reboot is conducted through a MultiAZ failover.</p> <p>Constraint: You can't specify <code>true</code> if the instance is not configured for MultiAZ.</p>
		 * @return {void} Success
		 */
		GET_RebootDBInstance(DBInstanceIdentifier: string, ForceFailover: boolean, Action: GET_RebootDBInstanceAction, Version: GET_RebootDBInstanceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RebootDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&ForceFailover=' + ForceFailover + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociates an Identity and Access Management (IAM) role from a DB cluster.
		 * Get #Action=RemoveRoleFromDBCluster
		 * @param {string} DBClusterIdentifier The name of the DB cluster to disassociate the IAM role from.
		 * @param {string} RoleArn The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB cluster, for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.
		 * @return {void} Success
		 */
		GET_RemoveRoleFromDBCluster(DBClusterIdentifier: string, RoleArn: string, Action: GET_RemoveRoleFromDBClusterAction, Version: GET_RemoveRoleFromDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveRoleFromDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&RoleArn=' + (RoleArn == null ? '' : encodeURIComponent(RoleArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a source identifier from an existing event notification subscription.
		 * Get #Action=RemoveSourceIdentifierFromSubscription
		 * @param {string} SubscriptionName The name of the event notification subscription you want to remove a source identifier from.
		 * @param {string} SourceIdentifier  The source identifier to be removed from the subscription, such as the <b>DB instance identifier</b> for a DB instance or the name of a security group.
		 * @return {void} Success
		 */
		GET_RemoveSourceIdentifierFromSubscription(SubscriptionName: string, SourceIdentifier: string, Action: GET_RemoveSourceIdentifierFromSubscriptionAction, Version: GET_RemoveSourceIdentifierFromSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveSourceIdentifierFromSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes metadata tags from an Amazon Neptune resource.
		 * Get #Action=RemoveTagsFromResource
		 * @param {string} ResourceName The Amazon Neptune resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.
		 * @param {Array<string>} TagKeys The tag key (name) of the tag to be removed.
		 * @return {void} Success
		 */
		GET_RemoveTagsFromResource(ResourceName: string, TagKeys: Array<string>, Action: GET_RemoveTagsFromResourceAction, Version: GET_RemoveTagsFromResourceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveTagsFromResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters.</p> <p> When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <a>RebootDBInstance</a> request. You must call <a>RebootDBInstance</a> for every DB instance in your DB cluster that you want the updated static parameter to apply to.</p>
		 * Get #Action=ResetDBClusterParameterGroup
		 * @param {string} DBClusterParameterGroupName The name of the DB cluster parameter group to reset.
		 * @param {boolean} ResetAllParameters A value that is set to <code>true</code> to reset all parameters in the DB cluster parameter group to their default values, and <code>false</code> otherwise. You can't use this parameter if there is a list of parameter names specified for the <code>Parameters</code> parameter.
		 * @param {Array<Parameter>} Parameters A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is set to <code>true</code>.
		 * @return {void} Success
		 */
		GET_ResetDBClusterParameterGroup(DBClusterParameterGroupName: string, ResetAllParameters: boolean, Parameters: Array<Parameter>, Action: GET_ResetDBClusterParameterGroupAction, Version: GET_ResetDBClusterParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ResetDBClusterParameterGroup?DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&ResetAllParameters=' + ResetAllParameters + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance restart or <code>RebootDBInstance</code> request.
		 * Get #Action=ResetDBParameterGroup
		 * @param {string} DBParameterGroupName <p>The name of the DB parameter group.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DBParameterGroup.</p> </li> </ul>
		 * @param {boolean} ResetAllParameters <p>Specifies whether (<code>true</code>) or not (<code>false</code>) to reset all parameters in the DB parameter group to default values.</p> <p>Default: <code>true</code> </p>
		 * @param {Array<Parameter>} Parameters <p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. To reset specific parameters, provide a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p> <p>Valid Values (for Apply method): <code>pending-reboot</code> </p>
		 * @return {void} Success
		 */
		GET_ResetDBParameterGroup(DBParameterGroupName: string, ResetAllParameters: boolean, Parameters: Array<Parameter>, Action: GET_ResetDBParameterGroupAction, Version: GET_ResetDBParameterGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ResetDBParameterGroup?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&ResetAllParameters=' + ResetAllParameters + '&' + Parameters.map(z => `Parameters=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.</p>
		 * Get #Action=RestoreDBClusterFromSnapshot
		 * @param {Array<string>} AvailabilityZones Provides the list of EC2 Availability Zones that instances in the restored DB cluster can be created in.
		 * @param {string} DBClusterIdentifier <p>The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-snapshot-id</code> </p>
		 * @param {string} SnapshotIdentifier <p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p> <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing Snapshot.</p> </li> </ul>
		 * @param {string} Engine <p>The database engine to use for the new DB cluster.</p> <p>Default: The same as source</p> <p>Constraint: Must be compatible with the engine of the source</p>
		 * @param {string} EngineVersion The version of the database engine to use for the new DB cluster.
		 * @param {number} Port <p>The port number on which the new DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>
		 * @param {string} DBSubnetGroupName <p>The name of the DB subnet group to use for the new DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} DatabaseName Not supported.
		 * @param {string} OptionGroupName  <i>(Not supported by Neptune)</i> 
		 * @param {Array<string>} VpcSecurityGroupIds A list of VPC security groups that the new DB cluster will belong to.
		 * @param {Array<Tag>} Tags The tags to be assigned to the restored DB cluster.
		 * @param {string} KmsKeyId <p>The AWS KMS key identifier to use when restoring an encrypted DB cluster from a DB snapshot or DB cluster snapshot.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following will occur:</p> <ul> <li> <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the DB snapshot or DB cluster snapshot.</p> </li> <li> <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul>
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>
		 * @param {Array<string>} EnableCloudwatchLogsExports The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs.
		 * @param {string} DBClusterParameterGroupName <p>The name of the DB cluster parameter group to associate with the new DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
		 * @param {boolean} DeletionProtection A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. 
		 * @return {void} Success
		 */
		GET_RestoreDBClusterFromSnapshot(AvailabilityZones: Array<string>, DBClusterIdentifier: string, SnapshotIdentifier: string, Engine: string, EngineVersion: string, Port: number, DBSubnetGroupName: string, DatabaseName: string, OptionGroupName: string, VpcSecurityGroupIds: Array<string>, Tags: Array<Tag>, KmsKeyId: string, EnableIAMDatabaseAuthentication: boolean, EnableCloudwatchLogsExports: Array<string>, DBClusterParameterGroupName: string, DeletionProtection: boolean, Action: GET_RestoreDBClusterFromSnapshotAction, Version: GET_RestoreDBClusterFromSnapshotVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RestoreDBClusterFromSnapshot?' + AvailabilityZones.map(z => `AvailabilityZones=${encodeURIComponent(z)}`).join('&') + '&DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&SnapshotIdentifier=' + (SnapshotIdentifier == null ? '' : encodeURIComponent(SnapshotIdentifier)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&Port=' + Port + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&DatabaseName=' + (DatabaseName == null ? '' : encodeURIComponent(DatabaseName)) + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&' + EnableCloudwatchLogsExports.map(z => `EnableCloudwatchLogsExports=${encodeURIComponent(z)}`).join('&') + '&DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&DeletionProtection=' + DeletionProtection + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target DB cluster is created from the source DB cluster with the same configuration as the original DB cluster, except that the new DB cluster is created with the default DB security group.</p> <note> <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You must invoke the <a>CreateDBInstance</a> action to create DB instances for the restored DB cluster, specifying the identifier of the restored DB cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after the <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is available.</p> </note>
		 * Get #Action=RestoreDBClusterToPointInTime
		 * @param {string} DBClusterIdentifier <p>The name of the new DB cluster to be created.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
		 * @param {string} RestoreType <p>The type of restore to be performed. You can specify one of the following values:</p> <ul> <li> <p> <code>full-copy</code> - The new DB cluster is restored as a full copy of the source DB cluster.</p> </li> <li> <p> <code>copy-on-write</code> - The new DB cluster is restored as a clone of the source DB cluster.</p> </li> </ul> <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is restored as a full copy of the source DB cluster.</p>
		 * @param {string} SourceDBClusterIdentifier <p>The identifier of the source DB cluster from which to restore.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBCluster.</p> </li> </ul>
		 * @param {Date} RestoreToTime <p>The date and time to restore the DB cluster to.</p> <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p> <p>Constraints:</p> <ul> <li> <p>Must be before the latest restorable time for the DB instance</p> </li> <li> <p>Must be specified if <code>UseLatestRestorableTime</code> parameter is not provided</p> </li> <li> <p>Cannot be specified if <code>UseLatestRestorableTime</code> parameter is true</p> </li> <li> <p>Cannot be specified if <code>RestoreType</code> parameter is <code>copy-on-write</code> </p> </li> </ul> <p>Example: <code>2015-03-07T23:45:00Z</code> </p>
		 * @param {boolean} UseLatestRestorableTime <p>A value that is set to <code>true</code> to restore the DB cluster to the latest restorable backup time, and <code>false</code> otherwise.</p> <p>Default: <code>false</code> </p> <p>Constraints: Cannot be specified if <code>RestoreToTime</code> parameter is provided.</p>
		 * @param {number} Port <p>The port number on which the new DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>
		 * @param {string} DBSubnetGroupName <p>The DB subnet group name to use for the new DB cluster.</p> <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p> <p>Example: <code>mySubnetgroup</code> </p>
		 * @param {string} OptionGroupName  <i>(Not supported by Neptune)</i> 
		 * @param {Array<string>} VpcSecurityGroupIds A list of VPC security groups that the new DB cluster belongs to.
		 * @param {Array<Tag>} Tags The tags to be applied to the restored DB cluster.
		 * @param {string} KmsKeyId <p>The AWS KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p> <p>You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different than the KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key identified by the <code>KmsKeyId</code> parameter.</p> <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following will occur:</p> <ul> <li> <p>If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster.</p> </li> <li> <p>If the DB cluster is not encrypted, then the restored DB cluster is not encrypted.</p> </li> </ul> <p>If <code>DBClusterIdentifier</code> refers to a DB cluster that is not encrypted, then the restore request is rejected.</p>
		 * @param {boolean} EnableIAMDatabaseAuthentication <p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts, and otherwise false.</p> <p>Default: <code>false</code> </p>
		 * @param {Array<string>} EnableCloudwatchLogsExports The list of logs that the restored DB cluster is to export to CloudWatch Logs.
		 * @param {string} DBClusterParameterGroupName <p>The name of the DB cluster parameter group to associate with the new DB cluster.</p> <p>Constraints:</p> <ul> <li> <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p> </li> </ul>
		 * @param {boolean} DeletionProtection A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. 
		 * @return {void} Success
		 */
		GET_RestoreDBClusterToPointInTime(DBClusterIdentifier: string, RestoreType: string, SourceDBClusterIdentifier: string, RestoreToTime: Date, UseLatestRestorableTime: boolean, Port: number, DBSubnetGroupName: string, OptionGroupName: string, VpcSecurityGroupIds: Array<string>, Tags: Array<Tag>, KmsKeyId: string, EnableIAMDatabaseAuthentication: boolean, EnableCloudwatchLogsExports: Array<string>, DBClusterParameterGroupName: string, DeletionProtection: boolean, Action: GET_RestoreDBClusterToPointInTimeAction, Version: GET_RestoreDBClusterToPointInTimeVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RestoreDBClusterToPointInTime?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&RestoreType=' + (RestoreType == null ? '' : encodeURIComponent(RestoreType)) + '&SourceDBClusterIdentifier=' + (SourceDBClusterIdentifier == null ? '' : encodeURIComponent(SourceDBClusterIdentifier)) + '&RestoreToTime=' + RestoreToTime.toISOString() + '&UseLatestRestorableTime=' + UseLatestRestorableTime + '&Port=' + Port + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&' + VpcSecurityGroupIds.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&KmsKeyId=' + (KmsKeyId == null ? '' : encodeURIComponent(KmsKeyId)) + '&EnableIAMDatabaseAuthentication=' + EnableIAMDatabaseAuthentication + '&' + EnableCloudwatchLogsExports.map(z => `EnableCloudwatchLogsExports=${encodeURIComponent(z)}`).join('&') + '&DBClusterParameterGroupName=' + (DBClusterParameterGroupName == null ? '' : encodeURIComponent(DBClusterParameterGroupName)) + '&DeletionProtection=' + DeletionProtection + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts an Amazon Neptune DB cluster that was stopped using the AWS console, the AWS CLI stop-db-cluster command, or the StopDBCluster API.
		 * Get #Action=StartDBCluster
		 * @param {string} DBClusterIdentifier The DB cluster identifier of the Neptune DB cluster to be started. This parameter is stored as a lowercase string.
		 * @return {void} Success
		 */
		GET_StartDBCluster(DBClusterIdentifier: string, Action: GET_StartDBClusterAction, Version: GET_StartDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=StartDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune retains the DB cluster's metadata, including its endpoints and DB parameter groups.</p> <p>Neptune also retains the transaction logs so you can do a point-in-time restore if necessary.</p>
		 * Get #Action=StopDBCluster
		 * @param {string} DBClusterIdentifier The DB cluster identifier of the Neptune DB cluster to be stopped. This parameter is stored as a lowercase string.
		 * @return {void} Success
		 */
		GET_StopDBCluster(DBClusterIdentifier: string, Action: GET_StopDBClusterAction, Version: GET_StopDBClusterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=StopDBCluster?DBClusterIdentifier=' + (DBClusterIdentifier == null ? '' : encodeURIComponent(DBClusterIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AddRoleToDBClusterAction { AddRoleToDBCluster = 0 }

	export enum GET_AddRoleToDBClusterVersion { _2014_10_31 = 0 }

	export enum POST_AddRoleToDBClusterVersion { _2014_10_31 = 0 }

	export enum GET_AddSourceIdentifierToSubscriptionAction { AddSourceIdentifierToSubscription = 0 }

	export enum GET_AddSourceIdentifierToSubscriptionVersion { _2014_10_31 = 0 }

	export enum POST_AddSourceIdentifierToSubscriptionVersion { _2014_10_31 = 0 }

	export enum GET_AddTagsToResourceAction { AddTagsToResource = 0 }

	export enum GET_AddTagsToResourceVersion { _2014_10_31 = 0 }

	export enum POST_AddTagsToResourceVersion { _2014_10_31 = 0 }

	export enum GET_ApplyPendingMaintenanceActionAction { ApplyPendingMaintenanceAction = 0 }

	export enum GET_ApplyPendingMaintenanceActionVersion { _2014_10_31 = 0 }

	export enum POST_ApplyPendingMaintenanceActionVersion { _2014_10_31 = 0 }

	export enum GET_CopyDBClusterParameterGroupAction { CopyDBClusterParameterGroup = 0 }

	export enum GET_CopyDBClusterParameterGroupVersion { _2014_10_31 = 0 }

	export enum POST_CopyDBClusterParameterGroupVersion { _2014_10_31 = 0 }

	export enum GET_CopyDBClusterSnapshotAction { CopyDBClusterSnapshot = 0 }

	export enum GET_CopyDBClusterSnapshotVersion { _2014_10_31 = 0 }

	export enum POST_CopyDBClusterSnapshotVersion { _2014_10_31 = 0 }

	export enum GET_CopyDBParameterGroupAction { CopyDBParameterGroup = 0 }

	export enum GET_CopyDBParameterGroupVersion { _2014_10_31 = 0 }

	export enum POST_CopyDBParameterGroupVersion { _2014_10_31 = 0 }

	export enum GET_CreateDBClusterAction { CreateDBCluster = 0 }

	export enum GET_CreateDBClusterVersion { _2014_10_31 = 0 }

	export enum POST_CreateDBClusterVersion { _2014_10_31 = 0 }

	export enum GET_CreateDBClusterParameterGroupAction { CreateDBClusterParameterGroup = 0 }

	export enum GET_CreateDBClusterParameterGroupVersion { _2014_10_31 = 0 }

	export enum POST_CreateDBClusterParameterGroupVersion { _2014_10_31 = 0 }

	export enum GET_CreateDBClusterSnapshotAction { CreateDBClusterSnapshot = 0 }

	export enum GET_CreateDBClusterSnapshotVersion { _2014_10_31 = 0 }

	export enum POST_CreateDBClusterSnapshotVersion { _2014_10_31 = 0 }

	export enum GET_CreateDBInstanceAction { CreateDBInstance = 0 }

	export enum GET_CreateDBInstanceVersion { _2014_10_31 = 0 }

	export enum POST_CreateDBInstanceVersion { _2014_10_31 = 0 }

	export enum GET_CreateDBParameterGroupAction { CreateDBParameterGroup = 0 }

	export enum GET_CreateDBParameterGroupVersion { _2014_10_31 = 0 }

	export enum POST_CreateDBParameterGroupVersion { _2014_10_31 = 0 }

	export enum GET_CreateDBSubnetGroupAction { CreateDBSubnetGroup = 0 }

	export enum GET_CreateDBSubnetGroupVersion { _2014_10_31 = 0 }

	export enum POST_CreateDBSubnetGroupVersion { _2014_10_31 = 0 }

	export enum GET_CreateEventSubscriptionAction { CreateEventSubscription = 0 }

	export enum GET_CreateEventSubscriptionVersion { _2014_10_31 = 0 }

	export enum POST_CreateEventSubscriptionVersion { _2014_10_31 = 0 }

	export enum GET_DeleteDBClusterAction { DeleteDBCluster = 0 }

	export enum GET_DeleteDBClusterVersion { _2014_10_31 = 0 }

	export enum POST_DeleteDBClusterVersion { _2014_10_31 = 0 }

	export enum GET_DeleteDBClusterParameterGroupAction { DeleteDBClusterParameterGroup = 0 }

	export enum GET_DeleteDBClusterParameterGroupVersion { _2014_10_31 = 0 }

	export enum POST_DeleteDBClusterParameterGroupVersion { _2014_10_31 = 0 }

	export enum GET_DeleteDBClusterSnapshotAction { DeleteDBClusterSnapshot = 0 }

	export enum GET_DeleteDBClusterSnapshotVersion { _2014_10_31 = 0 }

	export enum POST_DeleteDBClusterSnapshotVersion { _2014_10_31 = 0 }

	export enum GET_DeleteDBInstanceAction { DeleteDBInstance = 0 }

	export enum GET_DeleteDBInstanceVersion { _2014_10_31 = 0 }

	export enum POST_DeleteDBInstanceVersion { _2014_10_31 = 0 }

	export enum GET_DeleteDBParameterGroupAction { DeleteDBParameterGroup = 0 }

	export enum GET_DeleteDBParameterGroupVersion { _2014_10_31 = 0 }

	export enum POST_DeleteDBParameterGroupVersion { _2014_10_31 = 0 }

	export enum GET_DeleteDBSubnetGroupAction { DeleteDBSubnetGroup = 0 }

	export enum GET_DeleteDBSubnetGroupVersion { _2014_10_31 = 0 }

	export enum POST_DeleteDBSubnetGroupVersion { _2014_10_31 = 0 }

	export enum GET_DeleteEventSubscriptionAction { DeleteEventSubscription = 0 }

	export enum GET_DeleteEventSubscriptionVersion { _2014_10_31 = 0 }

	export enum POST_DeleteEventSubscriptionVersion { _2014_10_31 = 0 }

	export enum GET_DescribeDBClusterParameterGroupsAction { DescribeDBClusterParameterGroups = 0 }

	export enum GET_DescribeDBClusterParameterGroupsVersion { _2014_10_31 = 0 }

	export enum POST_DescribeDBClusterParameterGroupsVersion { _2014_10_31 = 0 }

	export enum GET_DescribeDBClusterParametersAction { DescribeDBClusterParameters = 0 }

	export enum GET_DescribeDBClusterParametersVersion { _2014_10_31 = 0 }

	export enum POST_DescribeDBClusterParametersVersion { _2014_10_31 = 0 }

	export enum GET_DescribeDBClusterSnapshotAttributesAction { DescribeDBClusterSnapshotAttributes = 0 }

	export enum GET_DescribeDBClusterSnapshotAttributesVersion { _2014_10_31 = 0 }

	export enum POST_DescribeDBClusterSnapshotAttributesVersion { _2014_10_31 = 0 }

	export enum GET_DescribeDBClusterSnapshotsAction { DescribeDBClusterSnapshots = 0 }

	export enum GET_DescribeDBClusterSnapshotsVersion { _2014_10_31 = 0 }

	export enum POST_DescribeDBClusterSnapshotsVersion { _2014_10_31 = 0 }

	export enum GET_DescribeDBClustersAction { DescribeDBClusters = 0 }

	export enum GET_DescribeDBClustersVersion { _2014_10_31 = 0 }

	export enum POST_DescribeDBClustersVersion { _2014_10_31 = 0 }

	export enum GET_DescribeDBEngineVersionsAction { DescribeDBEngineVersions = 0 }

	export enum GET_DescribeDBEngineVersionsVersion { _2014_10_31 = 0 }

	export enum POST_DescribeDBEngineVersionsVersion { _2014_10_31 = 0 }

	export enum GET_DescribeDBInstancesAction { DescribeDBInstances = 0 }

	export enum GET_DescribeDBInstancesVersion { _2014_10_31 = 0 }

	export enum POST_DescribeDBInstancesVersion { _2014_10_31 = 0 }

	export enum GET_DescribeDBParameterGroupsAction { DescribeDBParameterGroups = 0 }

	export enum GET_DescribeDBParameterGroupsVersion { _2014_10_31 = 0 }

	export enum POST_DescribeDBParameterGroupsVersion { _2014_10_31 = 0 }

	export enum GET_DescribeDBParametersAction { DescribeDBParameters = 0 }

	export enum GET_DescribeDBParametersVersion { _2014_10_31 = 0 }

	export enum POST_DescribeDBParametersVersion { _2014_10_31 = 0 }

	export enum GET_DescribeDBSubnetGroupsAction { DescribeDBSubnetGroups = 0 }

	export enum GET_DescribeDBSubnetGroupsVersion { _2014_10_31 = 0 }

	export enum POST_DescribeDBSubnetGroupsVersion { _2014_10_31 = 0 }

	export enum GET_DescribeEngineDefaultClusterParametersAction { DescribeEngineDefaultClusterParameters = 0 }

	export enum GET_DescribeEngineDefaultClusterParametersVersion { _2014_10_31 = 0 }

	export enum POST_DescribeEngineDefaultClusterParametersVersion { _2014_10_31 = 0 }

	export enum GET_DescribeEngineDefaultParametersAction { DescribeEngineDefaultParameters = 0 }

	export enum GET_DescribeEngineDefaultParametersVersion { _2014_10_31 = 0 }

	export enum POST_DescribeEngineDefaultParametersVersion { _2014_10_31 = 0 }

	export enum GET_DescribeEventCategoriesAction { DescribeEventCategories = 0 }

	export enum GET_DescribeEventCategoriesVersion { _2014_10_31 = 0 }

	export enum POST_DescribeEventCategoriesVersion { _2014_10_31 = 0 }

	export enum GET_DescribeEventSubscriptionsAction { DescribeEventSubscriptions = 0 }

	export enum GET_DescribeEventSubscriptionsVersion { _2014_10_31 = 0 }

	export enum POST_DescribeEventSubscriptionsVersion { _2014_10_31 = 0 }

	export enum GET_DescribeEventsSourceType { db_instance = 0, db_parameter_group = 1, db_security_group = 2, db_snapshot = 3, db_cluster = 4, db_cluster_snapshot = 5 }

	export enum GET_DescribeEventsAction { DescribeEvents = 0 }

	export enum GET_DescribeEventsVersion { _2014_10_31 = 0 }

	export enum POST_DescribeEventsVersion { _2014_10_31 = 0 }

	export enum GET_DescribeOrderableDBInstanceOptionsAction { DescribeOrderableDBInstanceOptions = 0 }

	export enum GET_DescribeOrderableDBInstanceOptionsVersion { _2014_10_31 = 0 }

	export enum POST_DescribeOrderableDBInstanceOptionsVersion { _2014_10_31 = 0 }

	export enum GET_DescribePendingMaintenanceActionsAction { DescribePendingMaintenanceActions = 0 }

	export enum GET_DescribePendingMaintenanceActionsVersion { _2014_10_31 = 0 }

	export enum POST_DescribePendingMaintenanceActionsVersion { _2014_10_31 = 0 }

	export enum GET_DescribeValidDBInstanceModificationsAction { DescribeValidDBInstanceModifications = 0 }

	export enum GET_DescribeValidDBInstanceModificationsVersion { _2014_10_31 = 0 }

	export enum POST_DescribeValidDBInstanceModificationsVersion { _2014_10_31 = 0 }

	export enum GET_FailoverDBClusterAction { FailoverDBCluster = 0 }

	export enum GET_FailoverDBClusterVersion { _2014_10_31 = 0 }

	export enum POST_FailoverDBClusterVersion { _2014_10_31 = 0 }

	export enum GET_ListTagsForResourceAction { ListTagsForResource = 0 }

	export enum GET_ListTagsForResourceVersion { _2014_10_31 = 0 }

	export enum POST_ListTagsForResourceVersion { _2014_10_31 = 0 }

	export interface GET_ModifyDBClusterCloudwatchLogsExportConfiguration {
		EnableLogTypes?: Array<string>;
		DisableLogTypes?: Array<string>;
	}

	export enum GET_ModifyDBClusterAction { ModifyDBCluster = 0 }

	export enum GET_ModifyDBClusterVersion { _2014_10_31 = 0 }

	export enum POST_ModifyDBClusterVersion { _2014_10_31 = 0 }

	export enum GET_ModifyDBClusterParameterGroupAction { ModifyDBClusterParameterGroup = 0 }

	export enum GET_ModifyDBClusterParameterGroupVersion { _2014_10_31 = 0 }

	export enum POST_ModifyDBClusterParameterGroupVersion { _2014_10_31 = 0 }

	export enum GET_ModifyDBClusterSnapshotAttributeAction { ModifyDBClusterSnapshotAttribute = 0 }

	export enum GET_ModifyDBClusterSnapshotAttributeVersion { _2014_10_31 = 0 }

	export enum POST_ModifyDBClusterSnapshotAttributeVersion { _2014_10_31 = 0 }

	export interface GET_ModifyDBInstanceCloudwatchLogsExportConfiguration {
		EnableLogTypes?: Array<string>;
		DisableLogTypes?: Array<string>;
	}

	export enum GET_ModifyDBInstanceAction { ModifyDBInstance = 0 }

	export enum GET_ModifyDBInstanceVersion { _2014_10_31 = 0 }

	export enum POST_ModifyDBInstanceVersion { _2014_10_31 = 0 }

	export enum GET_ModifyDBParameterGroupAction { ModifyDBParameterGroup = 0 }

	export enum GET_ModifyDBParameterGroupVersion { _2014_10_31 = 0 }

	export enum POST_ModifyDBParameterGroupVersion { _2014_10_31 = 0 }

	export enum GET_ModifyDBSubnetGroupAction { ModifyDBSubnetGroup = 0 }

	export enum GET_ModifyDBSubnetGroupVersion { _2014_10_31 = 0 }

	export enum POST_ModifyDBSubnetGroupVersion { _2014_10_31 = 0 }

	export enum GET_ModifyEventSubscriptionAction { ModifyEventSubscription = 0 }

	export enum GET_ModifyEventSubscriptionVersion { _2014_10_31 = 0 }

	export enum POST_ModifyEventSubscriptionVersion { _2014_10_31 = 0 }

	export enum GET_PromoteReadReplicaDBClusterAction { PromoteReadReplicaDBCluster = 0 }

	export enum GET_PromoteReadReplicaDBClusterVersion { _2014_10_31 = 0 }

	export enum POST_PromoteReadReplicaDBClusterVersion { _2014_10_31 = 0 }

	export enum GET_RebootDBInstanceAction { RebootDBInstance = 0 }

	export enum GET_RebootDBInstanceVersion { _2014_10_31 = 0 }

	export enum POST_RebootDBInstanceVersion { _2014_10_31 = 0 }

	export enum GET_RemoveRoleFromDBClusterAction { RemoveRoleFromDBCluster = 0 }

	export enum GET_RemoveRoleFromDBClusterVersion { _2014_10_31 = 0 }

	export enum POST_RemoveRoleFromDBClusterVersion { _2014_10_31 = 0 }

	export enum GET_RemoveSourceIdentifierFromSubscriptionAction { RemoveSourceIdentifierFromSubscription = 0 }

	export enum GET_RemoveSourceIdentifierFromSubscriptionVersion { _2014_10_31 = 0 }

	export enum POST_RemoveSourceIdentifierFromSubscriptionVersion { _2014_10_31 = 0 }

	export enum GET_RemoveTagsFromResourceAction { RemoveTagsFromResource = 0 }

	export enum GET_RemoveTagsFromResourceVersion { _2014_10_31 = 0 }

	export enum POST_RemoveTagsFromResourceVersion { _2014_10_31 = 0 }

	export enum GET_ResetDBClusterParameterGroupAction { ResetDBClusterParameterGroup = 0 }

	export enum GET_ResetDBClusterParameterGroupVersion { _2014_10_31 = 0 }

	export enum POST_ResetDBClusterParameterGroupVersion { _2014_10_31 = 0 }

	export enum GET_ResetDBParameterGroupAction { ResetDBParameterGroup = 0 }

	export enum GET_ResetDBParameterGroupVersion { _2014_10_31 = 0 }

	export enum POST_ResetDBParameterGroupVersion { _2014_10_31 = 0 }

	export enum GET_RestoreDBClusterFromSnapshotAction { RestoreDBClusterFromSnapshot = 0 }

	export enum GET_RestoreDBClusterFromSnapshotVersion { _2014_10_31 = 0 }

	export enum POST_RestoreDBClusterFromSnapshotVersion { _2014_10_31 = 0 }

	export enum GET_RestoreDBClusterToPointInTimeAction { RestoreDBClusterToPointInTime = 0 }

	export enum GET_RestoreDBClusterToPointInTimeVersion { _2014_10_31 = 0 }

	export enum POST_RestoreDBClusterToPointInTimeVersion { _2014_10_31 = 0 }

	export enum GET_StartDBClusterAction { StartDBCluster = 0 }

	export enum GET_StartDBClusterVersion { _2014_10_31 = 0 }

	export enum POST_StartDBClusterVersion { _2014_10_31 = 0 }

	export enum GET_StopDBClusterAction { StopDBCluster = 0 }

	export enum GET_StopDBClusterVersion { _2014_10_31 = 0 }

	export enum POST_StopDBClusterVersion { _2014_10_31 = 0 }

}

