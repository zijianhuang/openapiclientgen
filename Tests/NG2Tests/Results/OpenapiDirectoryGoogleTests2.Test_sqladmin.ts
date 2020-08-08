import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** An entry for an Access Control list. */
	export interface AclEntry {

		/**
		 * The time when this access control entry expires in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		expirationTime?: string;

		/** This is always <code>sql#aclEntry</code>. */
		kind?: string;

		/** Optional. A label to identify this entry. */
		name?: string;

		/** The whitelisted value for the access control list. */
		value?: string;
	}


	/** An Admin API warning message. */
	export interface ApiWarning {

		/** Code to uniquely identify the warning type. */
		code?: ApiWarningCode;

		/** The warning message. */
		message?: string;
	}

	export enum ApiWarningCode { SQL_API_WARNING_CODE_UNSPECIFIED = 0, REGION_UNREACHABLE = 1 }


	/** Database instance backup configuration. */
	export interface BackupConfiguration {

		/**
		 * (MySQL only) Whether binary log is enabled. If backup configuration is
		 * disabled, binarylog must be disabled as well.
		 */
		binaryLogEnabled?: boolean;

		/** Whether this configuration is enabled. */
		enabled?: boolean;

		/** This is always <code>sql#backupConfiguration</code>. */
		kind?: string;

		/** Location of the backup */
		location?: string;

		/** Reserved for future use. */
		pointInTimeRecoveryEnabled?: boolean;

		/** Reserved for future use. */
		replicationLogArchivingEnabled?: boolean;

		/**
		 * Start time for the daily backup configuration in UTC timezone in the 24
		 * hour format - <code>HH:MM</code>.
		 */
		startTime?: string;
	}


	/** A BackupRun resource. */
	export interface BackupRun {

		/** The description of this run, only applicable to on-demand backups. */
		description?: string;

		/** Disk encryption configuration for an instance. */
		diskEncryptionConfiguration?: DiskEncryptionConfiguration;

		/** Disk encryption status for an instance. */
		diskEncryptionStatus?: DiskEncryptionStatus;

		/**
		 * The time the backup operation completed in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		endTime?: string;

		/**
		 * The time the run was enqueued in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		enqueuedTime?: string;

		/** Database instance operation error. */
		error?: OperationError;

		/**
		 * The identifier for this backup run. Unique only for a specific Cloud SQL
		 * instance.
		 */
		id?: string;

		/** Name of the database instance. */
		instance?: string;

		/** This is always <code>sql#backupRun</code>. */
		kind?: string;

		/** Location of the backups. */
		location?: string;

		/** The URI of this resource. */
		selfLink?: string;

		/**
		 * The time the backup operation actually started in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		startTime?: string;

		/** The status of this run. */
		status?: BackupRunStatus;

		/** The type of this run; can be either "AUTOMATED" or "ON_DEMAND". */
		type?: BackupRunType;

		/**
		 * The start time of the backup window during which this the backup was
		 * attempted in <a href="https://tools.ietf.org/html/rfc3339">RFC 3339</a>
		 * format, for example <code>2012-11-15T16:19:00.094Z</code>.
		 */
		windowStartTime?: string;
	}


	/** Disk encryption configuration for an instance. */
	export interface DiskEncryptionConfiguration {

		/** This is always <code>sql#diskEncryptionConfiguration</code>. */
		kind?: string;

		/** Resource name of KMS key for disk encryption */
		kmsKeyName?: string;
	}


	/** Disk encryption status for an instance. */
	export interface DiskEncryptionStatus {

		/** This is always <code>sql#diskEncryptionStatus</code>. */
		kind?: string;

		/** KMS key version used to encrypt the Cloud SQL instance resource */
		kmsKeyVersionName?: string;
	}


	/** Database instance operation error. */
	export interface OperationError {

		/** Identifies the specific error that occurred. */
		code?: string;

		/** This is always <code>sql#operationError</code>. */
		kind?: string;

		/** Additional information about the error encountered. */
		message?: string;
	}

	export enum BackupRunStatus { SQL_BACKUP_RUN_STATUS_UNSPECIFIED = 0, ENQUEUED = 1, OVERDUE = 2, RUNNING = 3, FAILED = 4, SUCCESSFUL = 5, SKIPPED = 6, DELETION_PENDING = 7, DELETION_FAILED = 8, DELETED = 9 }

	export enum BackupRunType { SQL_BACKUP_RUN_TYPE_UNSPECIFIED = 0, AUTOMATED = 1, ON_DEMAND = 2 }


	/** Backup run list results. */
	export interface BackupRunsListResponse {

		/** A list of backup runs in reverse chronological order of the enqueued time. */
		items?: Array<BackupRun>;

		/** This is always <code>sql#backupRunsList</code>. */
		kind?: string;

		/**
		 * The continuation token, used to page through large result sets. Provide
		 * this value in a subsequent request to return the next page of results.
		 */
		nextPageToken?: string;
	}


	/** Binary log coordinates. */
	export interface BinLogCoordinates {

		/** Name of the binary log file for a Cloud SQL instance. */
		binLogFileName?: string;

		/** Position (offset) within the binary log file. */
		binLogPosition?: string;

		/** This is always <code>sql#binLogCoordinates</code>. */
		kind?: string;
	}


	/** Database instance clone context. */
	export interface CloneContext {

		/** Binary log coordinates. */
		binLogCoordinates?: BinLogCoordinates;

		/** Name of the Cloud SQL instance to be created as a clone. */
		destinationInstanceName?: string;

		/** This is always <code>sql#cloneContext</code>. */
		kind?: string;

		/** Reserved for future use. */
		pitrTimestampMs?: string;

		/** Reserved for future use. */
		pointInTime?: string;
	}


	/** Represents a SQL database on the Cloud SQL instance. */
	export interface Database {

		/** The MySQL charset value. */
		charset?: string;

		/** The MySQL collation value. */
		collation?: string;

		/**
		 * This field is deprecated and will be removed from a future version of the
		 * API.
		 */
		etag?: string;

		/** The name of the Cloud SQL instance. This does not include the project ID. */
		instance?: string;

		/** This is always <code>sql#database</code>. */
		kind?: string;

		/**
		 * The name of the database in the Cloud SQL instance. This does not include
		 * the project ID or instance name.
		 */
		name?: string;

		/**
		 * The project ID of the project containing the Cloud SQL database. The Google
		 * apps domain is prefixed if applicable.
		 */
		project?: string;

		/** The URI of this resource. */
		selfLink?: string;

		/** Represents a Sql Server database on the Cloud SQL instance. */
		sqlserverDatabaseDetails?: SqlServerDatabaseDetails;
	}


	/** Represents a Sql Server database on the Cloud SQL instance. */
	export interface SqlServerDatabaseDetails {

		/** The version of SQL Server with which the database is to be made compatible */
		compatibilityLevel?: number;

		/** The recovery model of a SQL Server database */
		recoveryModel?: string;
	}


	/** Database flags for Cloud SQL instances. */
	export interface DatabaseFlags {

		/**
		 * The name of the flag. These flags are passed at instance startup, so
		 * include both server options and system variables for MySQL. Flags should be
		 * specified with underscores, not hyphens. For more information, see <a
		 * href="/sql/docs/mysql/flags">Configuring Database Flags</a> in the Cloud
		 * SQL documentation.
		 */
		name?: string;

		/**
		 * The value of the flag. Booleans should be set to <code>on</code> for true
		 * and <code>off</code> for false. This field must be omitted if the flag
		 * doesn't take a value.
		 */
		value?: string;
	}


	/** A Cloud SQL instance resource. */
	export interface DatabaseInstance {

		/**
		 * <code>FIRST_GEN</code>: First Generation instance. MySQL only. <br
		 * /><code>SECOND_GEN</code>: Second Generation instance or PostgreSQL
		 * instance. <br /><code>EXTERNAL</code>: A database server that is not
		 * managed by Google. <br>This property is read-only; use the
		 * <code>tier</code> property in the <code>settings</code> object to determine
		 * the database type and Second or First Generation.
		 */
		backendType?: DatabaseInstanceBackendType;

		/** Connection name of the Cloud SQL instance used in connection strings. */
		connectionName?: string;

		/**
		 * The current disk usage of the instance in bytes. This property has been
		 * deprecated. Users should use the
		 * "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud
		 * Monitoring API instead. Please see <a
		 * href="https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ">this
		 * announcement</a> for details.
		 */
		currentDiskSize?: string;

		/**
		 * The database engine type and version. The <code>databaseVersion</code>
		 * field can not be changed after instance creation.  MySQL Second Generation
		 * instances: <code>MYSQL_5_7</code> (default) or <code>MYSQL_5_6</code>.
		 * PostgreSQL instances: <code>POSTGRES_9_6</code> (default) or
		 * <code>POSTGRES_11 Beta</code> MySQL First Generation
		 * instances: <code>MYSQL_5_6</code> (default) or <code>MYSQL_5_5</code>
		 */
		databaseVersion?: DatabaseInstanceDatabaseVersion;

		/** Disk encryption configuration for an instance. */
		diskEncryptionConfiguration?: DiskEncryptionConfiguration;

		/** Disk encryption status for an instance. */
		diskEncryptionStatus?: DiskEncryptionStatus;

		/**
		 * This field is deprecated and will be removed from a future version of the
		 * API. Use the <code>settings.settingsVersion</code> field instead.
		 */
		etag?: string;

		/**
		 * The name and status of the failover replica. This property is applicable
		 * only to Second Generation instances.
		 */
		failoverReplica?: DatabaseInstanceFailoverReplica;

		/**
		 * The Compute Engine zone that the instance is currently serving from. This
		 * value could be different from the zone that was specified when the instance
		 * was created if the instance has failed over to its secondary zone.
		 */
		gceZone?: string;

		/**
		 * The instance type. This can be one of the following.
		 * <br><code>CLOUD_SQL_INSTANCE</code>: A Cloud SQL instance that is not
		 * replicating from a master. <br><code>ON_PREMISES_INSTANCE</code>: An
		 * instance running on the
		 * customer's premises. <br><code>READ_REPLICA_INSTANCE</code>: A Cloud SQL
		 * instance configured as a read-replica.
		 */
		instanceType?: DatabaseInstanceInstanceType;

		/** The assigned IP addresses for the instance. */
		ipAddresses?: Array<IpMapping>;

		/**
		 * The IPv6 address assigned to the instance. This property is applicable only
		 * to First Generation instances.
		 */
		ipv6Address?: string;

		/** This is always <code>sql#instance</code>. */
		kind?: string;

		/** The name of the instance which will act as master in the replication setup. */
		masterInstanceName?: string;

		/** The maximum disk size of the instance in bytes. */
		maxDiskSize?: string;

		/** Name of the Cloud SQL instance. This does not include the project ID. */
		name?: string;

		/** On-premises instance configuration. */
		onPremisesConfiguration?: OnPremisesConfiguration;

		/**
		 * The project ID of the project containing the Cloud SQL instance. The Google
		 * apps domain is prefixed if applicable.
		 */
		project?: string;

		/**
		 * The geographical region. Can be <code>us-central</code>
		 * (<code>FIRST_GEN</code> instances only), <code>us-central1</code>
		 * (<code>SECOND_GEN</code> instances only), <code>asia-east1</code> or
		 * <code>europe-west1</code>. Defaults to <code>us-central</code> or
		 * <code>us-central1</code> depending on the instance type (First Generation
		 * or Second Generation). The region can not be changed after instance
		 * creation.
		 */
		region?: string;

		/** Read-replica configuration for connecting to the master. */
		replicaConfiguration?: ReplicaConfiguration;

		/** The replicas of the instance. */
		replicaNames?: Array<string>;

		/** Initial root password. Use only on creation. */
		rootPassword?: string;

		/** Any scheduled maintenancce for this instance. */
		scheduledMaintenance?: SqlScheduledMaintenance;

		/** The URI of this resource. */
		selfLink?: string;

		/** SslCerts Resource */
		serverCaCert?: SslCert;

		/**
		 * The service account email address assigned to the instance. This property
		 * is applicable only to Second Generation instances.
		 */
		serviceAccountEmailAddress?: string;

		/** Database instance settings. */
		settings?: Settings;

		/**
		 * The current serving state of the Cloud SQL instance. This can be one of the
		 * following. <br><code>RUNNABLE</code>: The instance is running, or is ready
		 * to run when accessed. <br><code>SUSPENDED</code>: The instance is not
		 * available, for example due to problems with billing.
		 * <br><code>PENDING_CREATE</code>: The instance is being created.
		 * <br><code>MAINTENANCE</code>: The instance is down for maintenance.
		 * <br><code>FAILED</code>: The instance creation failed.
		 * <br><code>UNKNOWN_STATE</code>: The state of the instance is unknown.
		 */
		state?: DatabaseInstanceState;

		/** If the instance state is SUSPENDED, the reason for the suspension. */
		suspensionReason?: Array<string>;
	}

	export enum DatabaseInstanceBackendType { SQL_BACKEND_TYPE_UNSPECIFIED = 0, FIRST_GEN = 1, SECOND_GEN = 2, EXTERNAL = 3 }

	export enum DatabaseInstanceDatabaseVersion { SQL_DATABASE_VERSION_UNSPECIFIED = 0, MYSQL_5_1 = 1, MYSQL_5_5 = 2, MYSQL_5_6 = 3, MYSQL_5_7 = 4, POSTGRES_9_6 = 5, POSTGRES_11 = 6, SQLSERVER_2017_STANDARD = 7, SQLSERVER_2017_ENTERPRISE = 8, SQLSERVER_2017_EXPRESS = 9, SQLSERVER_2017_WEB = 10, POSTGRES_10 = 11, POSTGRES_12 = 12 }

	export interface DatabaseInstanceFailoverReplica {

		/**
		 * The availability status of the failover replica. A false status indicates
		 * that the failover replica is out of sync. The master can only failover to
		 * the failover replica when the status is true.
		 */
		available?: boolean;

		/**
		 * The name of the failover replica. If specified at instance creation, a
		 * failover replica is created for the instance. The name
		 * doesn't include the project ID. This property is applicable only to
		 * Second Generation instances.
		 */
		name?: string;
	}

	export enum DatabaseInstanceInstanceType { SQL_INSTANCE_TYPE_UNSPECIFIED = 0, CLOUD_SQL_INSTANCE = 1, ON_PREMISES_INSTANCE = 2, READ_REPLICA_INSTANCE = 3 }


	/** Database instance IP Mapping. */
	export interface IpMapping {

		/** The IP address assigned. */
		ipAddress?: string;

		/**
		 * The due time for this IP to be retired in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>. This field is only available when
		 * the IP is scheduled to be retired.
		 */
		timeToRetire?: string;

		/**
		 * The type of this IP address. A <code>PRIMARY</code> address is a public
		 * address that can accept incoming connections. A <code>PRIVATE</code>
		 * address is a private address that can accept incoming connections. An
		 * <code>OUTGOING</code> address is the source address of connections
		 * originating from the instance, if supported.
		 */
		type?: IpMappingType;
	}

	export enum IpMappingType { SQL_IP_ADDRESS_TYPE_UNSPECIFIED = 0, PRIMARY = 1, OUTGOING = 2, PRIVATE = 3, MIGRATED_1ST_GEN = 4 }


	/** On-premises instance configuration. */
	export interface OnPremisesConfiguration {

		/** PEM representation of the trusted CA's x509 certificate. */
		caCertificate?: string;

		/** PEM representation of the slave's x509 certificate. */
		clientCertificate?: string;

		/**
		 * PEM representation of the slave's private key. The corresponsing public key
		 * is encoded in the client's certificate.
		 */
		clientKey?: string;

		/** The dump file to create the Cloud SQL replica. */
		dumpFilePath?: string;

		/** The host and port of the on-premises instance in host:port format */
		hostPort?: string;

		/** This is always <code>sql#onPremisesConfiguration</code>. */
		kind?: string;

		/** The password for connecting to on-premises instance. */
		password?: string;

		/** The username for connecting to on-premises instance. */
		username?: string;
	}


	/** Read-replica configuration for connecting to the master. */
	export interface ReplicaConfiguration {

		/**
		 * Specifies if the replica is the failover target. If the field is set to
		 * <code>true</code> the replica will be designated as a failover replica. In
		 * case the master instance fails, the replica instance will be promoted as
		 * the new master instance.  <p>Only one replica can be specified as failover
		 * target, and the replica has to be in different zone with the master
		 * instance.
		 */
		failoverTarget?: boolean;

		/** This is always <code>sql#replicaConfiguration</code>. */
		kind?: string;

		/** Read-replica configuration specific to MySQL databases. */
		mysqlReplicaConfiguration?: MySqlReplicaConfiguration;
	}


	/** Read-replica configuration specific to MySQL databases. */
	export interface MySqlReplicaConfiguration {

		/** PEM representation of the trusted CA's x509 certificate. */
		caCertificate?: string;

		/** PEM representation of the slave's x509 certificate. */
		clientCertificate?: string;

		/**
		 * PEM representation of the slave's private key. The corresponsing public key
		 * is encoded in the client's certificate.
		 */
		clientKey?: string;

		/** Seconds to wait between connect retries. MySQL's default is 60 seconds. */
		connectRetryInterval?: number;

		/**
		 * Path to a SQL dump file in Google Cloud Storage from which the slave
		 * instance is to be created. The URI is in the form gs:
		 * //bucketName/fileName. Compressed gzip files (.gz) are also supported.
		 * // Dumps should have the binlog co-ordinates from which replication should
		 * // begin. This can be accomplished by setting --master-data to 1 when using
		 * // mysqldump.
		 */
		dumpFilePath?: string;

		/** This is always <code>sql#mysqlReplicaConfiguration</code>. */
		kind?: string;

		/** Interval in milliseconds between replication heartbeats. */
		masterHeartbeatPeriod?: string;

		/** The password for the replication connection. */
		password?: string;

		/** A list of permissible ciphers to use for SSL encryption. */
		sslCipher?: string;

		/** The username for the replication connection. */
		username?: string;

		/**
		 * Whether or not to check the master's Common Name value in the certificate
		 * that it sends during the SSL handshake.
		 */
		verifyServerCertificate?: boolean;
	}


	/** Any scheduled maintenancce for this instance. */
	export interface SqlScheduledMaintenance {
		canDefer?: boolean;

		/** If the scheduled maintenance can be rescheduled. */
		canReschedule?: boolean;

		/** The start time of any upcoming scheduled maintenance for this instance. */
		startTime?: string;
	}


	/** SslCerts Resource */
	export interface SslCert {

		/** PEM representation. */
		cert?: string;

		/** Serial number, as extracted from the certificate. */
		certSerialNumber?: string;

		/** User supplied name.  Constrained to [a-zA-Z.-_ ]+. */
		commonName?: string;

		/**
		 * The time when the certificate was created in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>
		 */
		createTime?: string;

		/**
		 * The time when the certificate expires in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		expirationTime?: string;

		/** Name of the database instance. */
		instance?: string;

		/** This is always <code>sql#sslCert</code>. */
		kind?: string;

		/** The URI of this resource. */
		selfLink?: string;

		/** Sha1 Fingerprint. */
		sha1Fingerprint?: string;
	}


	/** Database instance settings. */
	export interface Settings {

		/**
		 * The activation policy specifies when the instance is activated; it is
		 * applicable only when the instance state is <code>RUNNABLE</code>. Valid
		 * values: <br><code>ALWAYS</code>: The instance is on, and remains so even in
		 * the absence of connection requests. <br><code>NEVER</code>: The instance is
		 * off; it is not activated, even if a connection request arrives.
		 * <br><code>ON_DEMAND</code>: First Generation instances only. The instance
		 * responds to incoming requests, and turns itself off when not in use.
		 * Instances with <code>PER_USE</code> pricing turn off after 15 minutes of
		 * inactivity. Instances with <code>PER_PACKAGE</code> pricing turn off after
		 * 12 hours of inactivity.
		 */
		activationPolicy?: SettingsActivationPolicy;

		/**
		 * The App Engine app IDs that can access this instance. First Generation
		 * instances only.
		 */
		authorizedGaeApplications?: Array<string>;

		/**
		 * Availability type (PostgreSQL and MySQL instances only). Potential values:
		 * <br><code>ZONAL</code>: The instance serves data from only one zone.
		 * Outages in that zone affect data accessibility. <br><code>REGIONAL</code>:
		 * The instance can serve data from more than one zone in a region (it is
		 * highly available). <br>For more information, see <a
		 * href="https://cloud.google.com/sql/docs/postgres/high-availability">Overview
		 * of the High Availability Configuration</a>.
		 */
		availabilityType?: SettingsAvailabilityType;

		/** Database instance backup configuration. */
		backupConfiguration?: BackupConfiguration;

		/**
		 * Configuration specific to read replica instances. Indicates whether
		 * database flags for crash-safe replication are enabled. This property is
		 * only applicable to First Generation instances.
		 */
		crashSafeReplicationEnabled?: boolean;

		/**
		 * The size of data disk, in GB. The data disk size minimum is 10GB. Not used
		 * for First Generation instances.
		 */
		dataDiskSizeGb?: string;

		/**
		 * The type of data disk: <code>PD_SSD</code> (default) or
		 * <code>PD_HDD</code>. Not used for First Generation instances.
		 */
		dataDiskType?: SettingsDataDiskType;

		/** The database flags passed to the instance at startup. */
		databaseFlags?: Array<DatabaseFlags>;

		/**
		 * Configuration specific to read replica instances. Indicates whether
		 * replication is enabled or not.
		 */
		databaseReplicationEnabled?: boolean;

		/** IP Management configuration. */
		ipConfiguration?: IpConfiguration;

		/** This is always <code>sql#settings</code>. */
		kind?: string;

		/**
		 * Preferred location. This specifies where a Cloud SQL instance should
		 * preferably be located, either in a specific Compute Engine zone, or
		 * co-located with an App Engine application. Note that if the preferred
		 * location is not available, the instance will be located as close as possible
		 * within the region. Only one location may be specified.
		 */
		locationPreference?: LocationPreference;

		/**
		 * Maintenance window. This specifies when a v2 Cloud SQL instance should
		 * preferably be restarted for system maintenance purposes.
		 */
		maintenanceWindow?: MaintenanceWindow;

		/**
		 * The pricing plan for this instance. This can be either <code>PER_USE</code>
		 * or <code>PACKAGE</code>. Only <code>PER_USE</code> is supported for Second
		 * Generation instances.
		 */
		pricingPlan?: SettingsPricingPlan;

		/**
		 * The type of replication this instance uses. This can be either
		 * <code>ASYNCHRONOUS</code> or <code>SYNCHRONOUS</code>. This property is
		 * only applicable to First Generation instances.
		 */
		replicationType?: SettingsReplicationType;

		/**
		 * The version of instance settings. This is a required field for update
		 * method to make sure concurrent updates are handled properly. During update,
		 * use the most recent settingsVersion value for this instance and do not try
		 * to update this value.
		 */
		settingsVersion?: string;

		/**
		 * Configuration to increase storage size automatically. The default value is
		 * true. Not used for First Generation instances.
		 */
		storageAutoResize?: boolean;

		/**
		 * The maximum size to which storage capacity can be automatically increased.
		 * The default value is 0, which specifies that there is no limit. Not used
		 * for First Generation instances.
		 */
		storageAutoResizeLimit?: string;

		/**
		 * The tier (or machine type) for this instance, for example
		 * <code>db-n1-standard-1</code> (MySQL instances) or
		 * <code>db-custom-1-3840</code> (PostgreSQL instances). For MySQL instances,
		 * this property determines whether the instance is First or Second
		 * Generation. For more information, see <a
		 * href="/sql/docs/db_path/instance-settings">Instance Settings</a>.
		 */
		tier?: string;

		/**
		 * User-provided labels, represented as a dictionary where each label is a
		 * single key value pair.
		 */
		userLabels?: {[id: string]: any };
	}

	export enum SettingsActivationPolicy { SQL_ACTIVATION_POLICY_UNSPECIFIED = 0, ALWAYS = 1, NEVER = 2, ON_DEMAND = 3 }

	export enum SettingsAvailabilityType { SQL_AVAILABILITY_TYPE_UNSPECIFIED = 0, ZONAL = 1, REGIONAL = 2 }

	export enum SettingsDataDiskType { SQL_DATA_DISK_TYPE_UNSPECIFIED = 0, PD_SSD = 1, PD_HDD = 2, OBSOLETE_LOCAL_SSD = 3 }


	/** IP Management configuration. */
	export interface IpConfiguration {

		/**
		 * The list of external networks that are allowed to connect to the instance
		 * using the IP. In <a
		 * href="http://en.wikipedia.org/wiki/CIDR_notation#CIDR_notation">CIDR
		 * notation</a>, also known as 'slash' notation (e.g.
		 * <code>192.168.100.0/24</code>).
		 */
		authorizedNetworks?: Array<AclEntry>;

		/** Whether the instance should be assigned an IP address or not. */
		ipv4Enabled?: boolean;

		/**
		 * The resource link for the VPC network from which the Cloud SQL instance is
		 * accessible for private IP. For example,
		 * <code>/projects/myProject/global/networks/default</code>. This setting can
		 * be updated, but it cannot be removed after it is set.
		 */
		privateNetwork?: string;

		/** Whether SSL connections over IP should be enforced or not. */
		requireSsl?: boolean;
	}


	/**
	 * Preferred location. This specifies where a Cloud SQL instance should
	 * preferably be located, either in a specific Compute Engine zone, or
	 * co-located with an App Engine application. Note that if the preferred
	 * location is not available, the instance will be located as close as possible
	 * within the region. Only one location may be specified.
	 */
	export interface LocationPreference {

		/**
		 * The AppEngine application to follow, it must be in the same region as the
		 * Cloud SQL instance.
		 */
		followGaeApplication?: string;

		/** This is always <code>sql#locationPreference</code>. */
		kind?: string;

		/**
		 * The preferred Compute Engine zone (e.g. us-central1-a, us-central1-b,
		 * etc.).
		 */
		zone?: string;
	}


	/**
	 * Maintenance window. This specifies when a v2 Cloud SQL instance should
	 * preferably be restarted for system maintenance purposes.
	 */
	export interface MaintenanceWindow {

		/** day of week (1-7), starting on Monday. */
		day?: number;

		/** hour of day - 0 to 23. */
		hour?: number;

		/** This is always <code>sql#maintenanceWindow</code>. */
		kind?: string;

		/**
		 * Maintenance timing setting: <code>canary</code> (Earlier) or
		 * <code>stable</code> (Later). <br /><a
		 * href="/sql/docs/db_path/instance-settings#maintenance-timing-2ndgen">
		 * Learn more</a>.
		 */
		updateTrack?: MaintenanceWindowUpdateTrack;
	}

	export enum MaintenanceWindowUpdateTrack { SQL_UPDATE_TRACK_UNSPECIFIED = 0, canary = 1, stable = 2 }

	export enum SettingsPricingPlan { SQL_PRICING_PLAN_UNSPECIFIED = 0, PACKAGE = 1, PER_USE = 2 }

	export enum SettingsReplicationType { SQL_REPLICATION_TYPE_UNSPECIFIED = 0, SYNCHRONOUS = 1, ASYNCHRONOUS = 2 }

	export enum DatabaseInstanceState { SQL_INSTANCE_STATE_UNSPECIFIED = 0, RUNNABLE = 1, SUSPENDED = 2, PENDING_DELETE = 3, PENDING_CREATE = 4, MAINTENANCE = 5, FAILED = 6 }


	/** Database list response. */
	export interface DatabasesListResponse {

		/** List of database resources in the instance. */
		items?: Array<Database>;

		/** This is always <code>sql#databasesList</code>. */
		kind?: string;
	}


	/** Read-replica configuration for connecting to the on-premises master. */
	export interface DemoteMasterConfiguration {

		/** This is always <code>sql#demoteMasterConfiguration</code>. */
		kind?: string;

		/** Read-replica configuration specific to MySQL databases. */
		mysqlReplicaConfiguration?: DemoteMasterMySqlReplicaConfiguration;
	}


	/** Read-replica configuration specific to MySQL databases. */
	export interface DemoteMasterMySqlReplicaConfiguration {

		/** PEM representation of the trusted CA's x509 certificate. */
		caCertificate?: string;

		/** PEM representation of the slave's x509 certificate. */
		clientCertificate?: string;

		/**
		 * PEM representation of the slave's private key. The corresponsing public key
		 * is encoded in the client's certificate. The format of the slave's private
		 * key can be either PKCS #1 or PKCS #8.
		 */
		clientKey?: string;

		/** This is always <code>sql#demoteMasterMysqlReplicaConfiguration</code>. */
		kind?: string;

		/** The password for the replication connection. */
		password?: string;

		/** The username for the replication connection. */
		username?: string;
	}


	/** Database instance demote master context. */
	export interface DemoteMasterContext {

		/** This is always <code>sql#demoteMasterContext</code>. */
		kind?: string;

		/**
		 * The name of the instance which will act as on-premises master in the
		 * replication setup.
		 */
		masterInstanceName?: string;

		/** Read-replica configuration for connecting to the on-premises master. */
		replicaConfiguration?: DemoteMasterConfiguration;

		/**
		 * Verify GTID consistency for demote operation. Default value:
		 * <code>True</code>. Second Generation instances only.  Setting this flag to
		 * false enables you to bypass GTID consistency check between on-premises
		 * master and Cloud SQL instance during the demotion operation but also
		 * exposes you to the risk of future replication failures. Change the value
		 * only if you know the reason for the GTID divergence and are confident that
		 * doing so will not cause any replication issues.
		 */
		verifyGtidConsistency?: boolean;
	}


	/** Database instance export context. */
	export interface ExportContext {

		/** Options for exporting data as CSV. */
		csvExportOptions?: ExportContextCsvExportOptions;

		/**
		 * Databases to be exported. <br /> <b>MySQL instances:</b> If
		 * <code>fileType</code> is <code>SQL</code> and no database is specified, all
		 * databases are exported, except for the <code>mysql</code> system database.
		 * If <code>fileType</code> is <code>CSV</code>, you can specify one database,
		 * either by using this property or by using the
		 * <code>csvExportOptions.selectQuery</code> property, which takes precedence
		 * over this property. <br /> <b>PostgreSQL instances:</b> You must specify
		 * one database to be exported. If <code>fileType</code> is <code>CSV</code>,
		 * this database must match the one specified in the
		 * <code>csvExportOptions.selectQuery</code> property.
		 */
		databases?: Array<string>;

		/**
		 * The file type for the specified uri. <br><code>SQL</code>: The file
		 * contains SQL statements. <br><code>CSV</code>: The file contains CSV data.
		 */
		fileType?: ExportContextFileType;

		/** This is always <code>sql#exportContext</code>. */
		kind?: string;

		/** Options for exporting data as SQL statements. */
		sqlExportOptions?: ExportContextSqlExportOptions;

		/**
		 * The path to the file in Google Cloud Storage where the export will be
		 * stored. The URI is in the form <code>gs:
		 * //bucketName/fileName</code>. If the file already exists, the requests
		 * // succeeds, but the operation fails. If <code>fileType</code> is
		 * // <code>SQL</code> and the filename ends with .gz, the contents are
		 * // compressed.
		 */
		uri?: string;
	}

	export interface ExportContextCsvExportOptions {

		/** The select query used to extract the data. */
		selectQuery?: string;
	}

	export enum ExportContextFileType { SQL_FILE_TYPE_UNSPECIFIED = 0, SQL = 1, CSV = 2, BAK = 3 }

	export interface ExportContextSqlExportOptions {

		/** Options for exporting from MySQL. */
		mysqlExportOptions?: ExportContextSqlExportOptionsMysqlExportOptions;

		/** Export only schemas. */
		schemaOnly?: boolean;

		/**
		 * Tables to export, or that were exported, from the specified database. If
		 * you specify tables, specify one and only one database. For PostgreSQL
		 * instances, you can specify only one table.
		 */
		tables?: Array<string>;
	}

	export interface ExportContextSqlExportOptionsMysqlExportOptions {

		/**
		 * Option to include SQL statement required to set up replication.
		 * If set to <code>1</code>, the dump file includes
		 * a CHANGE MASTER TO statement with the binary log coordinates.
		 * If set to <code>2</code>, the CHANGE MASTER TO statement is written as
		 * a SQL comment, and has no effect.
		 * All other values are ignored.
		 */
		masterData?: number;
	}


	/** Database instance failover context. */
	export interface FailoverContext {

		/** This is always <code>sql#failoverContext</code>. */
		kind?: string;

		/**
		 * The current settings version of this instance. Request will be rejected if
		 * this version doesn't match the current settings version.
		 */
		settingsVersion?: string;
	}


	/** A flag resource. */
	export interface Flag {

		/**
		 * Use this field if only certain integers are accepted. Can be combined
		 * with min_value and max_value to add additional values.
		 */
		allowedIntValues?: Array<string>;

		/**
		 * For <code>STRING</code> flags, a list of strings that the value can be set
		 * to.
		 */
		allowedStringValues?: Array<string>;

		/**
		 * The database version this flag applies to. Can be <code>MYSQL_5_5</code>,
		 * <code>MYSQL_5_6</code>, or <code>MYSQL_5_7</code>. <code>MYSQL_5_7</code>
		 * is applicable only to Second Generation instances.
		 */
		appliesTo?: Array<DatabaseInstanceDatabaseVersion>;

		/** Whether or not the flag is considered in beta. */
		inBeta?: boolean;

		/** This is always <code>sql#flag</code>. */
		kind?: string;

		/** For <code>INTEGER</code> flags, the maximum allowed value. */
		maxValue?: string;

		/** For <code>INTEGER</code> flags, the minimum allowed value. */
		minValue?: string;

		/**
		 * This is the name of the flag. Flag names always use underscores, not
		 * hyphens, e.g. <code>max_allowed_packet</code>
		 */
		name?: string;

		/**
		 * Indicates whether changing this flag will trigger a database restart. Only
		 * applicable to Second Generation instances.
		 */
		requiresRestart?: boolean;

		/**
		 * The type of the flag. Flags are typed to being <code>BOOLEAN</code>,
		 * <code>STRING</code>, <code>INTEGER</code> or <code>NONE</code>.
		 * <code>NONE</code> is used for flags which do not take a value, such as
		 * <code>skip_grant_tables</code>.
		 */
		type?: FlagType;
	}

	export enum FlagType { SQL_FLAG_TYPE_UNSPECIFIED = 0, BOOLEAN = 1, STRING = 2, INTEGER = 3, NONE = 4, MYSQL_TIMEZONE_OFFSET = 5, FLOAT = 6, REPEATED_STRING = 7 }


	/** Flags list response. */
	export interface FlagsListResponse {

		/** List of flags. */
		items?: Array<Flag>;

		/** This is always <code>sql#flagsList</code>. */
		kind?: string;
	}


	/** Database instance import context. */
	export interface ImportContext {

		/** Import parameters specific to SQL Server .BAK files */
		bakImportOptions?: ImportContextBakImportOptions;

		/** Options for importing data as CSV. */
		csvImportOptions?: ImportContextCsvImportOptions;

		/**
		 * The target database for the import. If <code>fileType</code> is
		 * <code>SQL</code>, this field is required only if the import file does not
		 * specify a database, and is overridden by any database specification in the
		 * import file. If <code>fileType</code> is <code>CSV</code>, one database
		 * must be specified.
		 */
		database?: string;

		/**
		 * The file type for the specified uri. <br><code>SQL</code>: The file
		 * contains SQL statements. <br><code>CSV</code>: The file contains CSV data.
		 */
		fileType?: ExportContextFileType;

		/** The PostgreSQL user for this import operation. PostgreSQL instances only. */
		importUser?: string;

		/** This is always <code>sql#importContext</code>. */
		kind?: string;

		/**
		 * Path to the import file in Cloud Storage, in the form
		 * <code>gs:
		 * //bucketName/fileName</code>. Compressed gzip files (.gz) are supported
		 * // when <code>fileType</code> is <code>SQL</code>. The instance must have
		 * // write permissions to the bucket and read access to the file.
		 */
		uri?: string;
	}

	export interface ImportContextBakImportOptions {
		encryptionOptions?: ImportContextBakImportOptionsEncryptionOptions;
	}

	export interface ImportContextBakImportOptionsEncryptionOptions {

		/**
		 * Path to the Certificate (.cer) in Cloud Storage, in the form
		 * <code>gs://bucketName/fileName</code>. The instance must have
		 * write permissions to the bucket and read access to the file.
		 */
		certPath?: string;

		/** Password that encrypts the private key */
		pvkPassword?: string;

		/**
		 * Path to the Certificate Private Key (.pvk)  in Cloud Storage, in the
		 * form <code>gs://bucketName/fileName</code>. The instance must have
		 * write permissions to the bucket and read access to the file.
		 */
		pvkPath?: string;
	}

	export interface ImportContextCsvImportOptions {

		/**
		 * The columns to which CSV data is imported. If not specified, all columns
		 * of the database table are loaded with CSV data.
		 */
		columns?: Array<string>;

		/** The table to which CSV data is imported. */
		table?: string;
	}


	/** Database instance clone request. */
	export interface InstancesCloneRequest {

		/** Database instance clone context. */
		cloneContext?: CloneContext;
	}


	/** Database demote master request. */
	export interface InstancesDemoteMasterRequest {

		/** Database instance demote master context. */
		demoteMasterContext?: DemoteMasterContext;
	}


	/** Database instance export request. */
	export interface InstancesExportRequest {

		/** Database instance export context. */
		exportContext?: ExportContext;
	}


	/** Instance failover request. */
	export interface InstancesFailoverRequest {

		/** Database instance failover context. */
		failoverContext?: FailoverContext;
	}


	/** Database instance import request. */
	export interface InstancesImportRequest {

		/** Database instance import context. */
		importContext?: ImportContext;
	}


	/** Database instances list response. */
	export interface InstancesListResponse {

		/** List of database instance resources. */
		items?: Array<DatabaseInstance>;

		/** This is always <code>sql#instancesList</code>. */
		kind?: string;

		/**
		 * The continuation token, used to page through large result sets. Provide
		 * this value in a subsequent request to return the next page of results.
		 */
		nextPageToken?: string;

		/** List of warnings that occurred while handling the request. */
		warnings?: Array<ApiWarning>;
	}


	/** Instances ListServerCas response. */
	export interface InstancesListServerCasResponse {
		activeVersion?: string;

		/** List of server CA certificates for the instance. */
		certs?: Array<SslCert>;

		/** This is always <code>sql#instancesListServerCas</code>. */
		kind?: string;
	}


	/** Database instance restore backup request. */
	export interface InstancesRestoreBackupRequest {

		/**
		 * Database instance restore from backup context.
		 * Backup context contains source instance id and project id.
		 */
		restoreBackupContext?: RestoreBackupContext;
	}


	/**
	 * Database instance restore from backup context.
	 * Backup context contains source instance id and project id.
	 */
	export interface RestoreBackupContext {

		/** The ID of the backup run to restore from. */
		backupRunId?: string;

		/** The ID of the instance that the backup was taken from. */
		instanceId?: string;

		/** This is always <code>sql#restoreBackupContext</code>. */
		kind?: string;

		/** The full project ID of the source instance. */
		project?: string;
	}


	/** Rotate Server CA request. */
	export interface InstancesRotateServerCaRequest {

		/** Instance rotate server CA context. */
		rotateServerCaContext?: RotateServerCaContext;
	}


	/** Instance rotate server CA context. */
	export interface RotateServerCaContext {

		/** This is always <code>sql#rotateServerCaContext</code>. */
		kind?: string;

		/**
		 * The fingerprint of the next version to be rotated to. If left unspecified,
		 * will be rotated to the most recently added server CA version.
		 */
		nextVersion?: string;
	}


	/** Instance truncate log request. */
	export interface InstancesTruncateLogRequest {

		/** Database Instance truncate log context. */
		truncateLogContext?: TruncateLogContext;
	}


	/** Database Instance truncate log context. */
	export interface TruncateLogContext {

		/** This is always <code>sql#truncateLogContext</code>. */
		kind?: string;

		/**
		 * The type of log to truncate. Valid values are
		 * <code>MYSQL_GENERAL_TABLE</code> and <code>MYSQL_SLOW_TABLE</code>.
		 */
		logType?: string;
	}


	/**
	 * An Operation resource.&nbsp;For successful operations that return an
	 * Operation resource, only the fields relevant to the operation are populated
	 * in the resource.
	 */
	export interface Operation {

		/**
		 * The time this operation finished in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		endTime?: string;

		/** Database instance operation errors list wrapper. */
		error?: OperationErrors;

		/** Database instance export context. */
		exportContext?: ExportContext;

		/** Database instance import context. */
		importContext?: ImportContext;

		/**
		 * The time this operation was enqueued in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		insertTime?: string;

		/** This is always <code>sql#operation</code>. */
		kind?: string;

		/**
		 * An identifier that uniquely identifies the operation. You can use this
		 * identifier to retrieve the Operations resource that has information about
		 * the operation.
		 */
		name?: string;

		/**
		 * The type of the operation. Valid values are <code>CREATE</code>,
		 * <code>DELETE</code>, <code>UPDATE</code>, <code>RESTART</code>,
		 * <code>IMPORT</code>, <code>EXPORT</code>, <code>BACKUP_VOLUME</code>,
		 * <code>RESTORE_VOLUME</code>, <code>CREATE_USER</code>,
		 * <code>DELETE_USER</code>, <code>CREATE_DATABASE</code>,
		 * <code>DELETE_DATABASE</code> .
		 */
		operationType?: OperationOperationType;

		/** The URI of this resource. */
		selfLink?: string;

		/**
		 * The time this operation actually started in UTC timezone in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for example
		 * <code>2012-11-15T16:19:00.094Z</code>.
		 */
		startTime?: string;

		/**
		 * The status of an operation. Valid values are <code>PENDING</code>,
		 * <code>RUNNING</code>, <code>DONE</code>,
		 * <code>SQL_OPERATION_STATUS_UNSPECIFIED</code>.
		 */
		status?: OperationStatus;

		/** Name of the database instance related to this operation. */
		targetId?: string;
		targetLink?: string;

		/** The project ID of the target instance related to this operation. */
		targetProject?: string;

		/** The email address of the user who initiated this operation. */
		user?: string;
	}


	/** Database instance operation errors list wrapper. */
	export interface OperationErrors {

		/** The list of errors encountered while processing this operation. */
		errors?: Array<OperationError>;

		/** This is always <code>sql#operationErrors</code>. */
		kind?: string;
	}

	export enum OperationOperationType { SQL_OPERATION_TYPE_UNSPECIFIED = 0, IMPORT = 1, EXPORT = 2, CREATE = 3, UPDATE = 4, DELETE = 5, RESTART = 6, BACKUP = 7, SNAPSHOT = 8, BACKUP_VOLUME = 9, DELETE_VOLUME = 10, RESTORE_VOLUME = 11, INJECT_USER = 12, CLONE = 13, STOP_REPLICA = 14, START_REPLICA = 15, PROMOTE_REPLICA = 16, CREATE_REPLICA = 17, CREATE_USER = 18, DELETE_USER = 19, UPDATE_USER = 20, CREATE_DATABASE = 21, DELETE_DATABASE = 22, UPDATE_DATABASE = 23, FAILOVER = 24, DELETE_BACKUP = 25, RECREATE_REPLICA = 26, TRUNCATE_LOG = 27, DEMOTE_MASTER = 28, MAINTENANCE = 29, ENABLE_PRIVATE_IP = 30, DEFER_MAINTENANCE = 31, CREATE_CLONE = 32, RESCHEDULE_MAINTENANCE = 33, START_EXTERNAL_SYNC = 34 }

	export enum OperationStatus { SQL_OPERATION_STATUS_UNSPECIFIED = 0, PENDING = 1, RUNNING = 2, DONE = 3 }


	/** Database instance list operations response. */
	export interface OperationsListResponse {

		/** List of operation resources. */
		items?: Array<Operation>;

		/** This is always <code>sql#operationsList</code>. */
		kind?: string;

		/**
		 * The continuation token, used to page through large result sets. Provide
		 * this value in a subsequent request to return the next page of results.
		 */
		nextPageToken?: string;
	}

	export interface Reschedule {

		/** Required. The type of the reschedule. */
		rescheduleType?: RescheduleRescheduleType;

		/**
		 * Optional. Timestamp when the maintenance shall be rescheduled to if
		 * reschedule_type=SPECIFIC_TIME, in <a
		 * href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> format, for
		 * example <code>2012-11-15T16:19:00.094Z</code>.
		 */
		scheduleTime?: string;
	}

	export enum RescheduleRescheduleType { RESCHEDULE_TYPE_UNSPECIFIED = 0, IMMEDIATE = 1, NEXT_AVAILABLE_WINDOW = 2, SPECIFIC_TIME = 3 }


	/** External master migration setting error. */
	export interface SqlExternalSyncSettingError {

		/** Additional information about the error encountered. */
		detail?: string;

		/** This is always <code>sql#migrationSettingError</code>. */
		kind?: string;

		/** Identifies the specific error that occurred. */
		type?: SqlExternalSyncSettingErrorType;
	}

	export enum SqlExternalSyncSettingErrorType { SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED = 0, CONNECTION_FAILURE = 1, BINLOG_NOT_ENABLED = 2, INCOMPATIBLE_DATABASE_VERSION = 3, REPLICA_ALREADY_SETUP = 4, INSUFFICIENT_PRIVILEGE = 5, UNSUPPORTED_MIGRATION_TYPE = 6, NO_PGLOGICAL_INSTALLED = 7, PGLOGICAL_NODE_ALREADY_EXISTS = 8 }


	/** Reschedule options for maintenance windows. */
	export interface SqlInstancesRescheduleMaintenanceRequestBody {
		reschedule?: Reschedule;
	}


	/** Instance verify external sync settings response. */
	export interface SqlInstancesVerifyExternalSyncSettingsResponse {

		/** List of migration violations. */
		errors?: Array<SqlExternalSyncSettingError>;

		/** This is always <code>sql#migrationSettingErrorList</code>. */
		kind?: string;
	}


	/** Represents a Sql Server user on the Cloud SQL instance. */
	export interface SqlServerUserDetails {

		/** If the user has been disabled */
		disabled?: boolean;

		/** The server roles for this user */
		serverRoles?: Array<string>;
	}


	/** SslCertDetail. */
	export interface SslCertDetail {

		/** SslCerts Resource */
		certInfo?: SslCert;

		/**
		 * The private key for the client cert, in pem format.  Keep private in order
		 * to protect your security.
		 */
		certPrivateKey?: string;
	}


	/** SslCerts create ephemeral certificate request. */
	export interface SslCertsCreateEphemeralRequest {

		/** PEM encoded public key to include in the signed certificate. */
		public_key?: string;
	}


	/** SslCerts insert request. */
	export interface SslCertsInsertRequest {

		/**
		 * User supplied name.  Must be a distinct name from the other certificates
		 * for this instance.
		 */
		commonName?: string;
	}


	/** SslCert insert response. */
	export interface SslCertsInsertResponse {

		/** SslCertDetail. */
		clientCert?: SslCertDetail;

		/** This is always <code>sql#sslCertsInsert</code>. */
		kind?: string;

		/**
		 * An Operation resource.&nbsp;For successful operations that return an
		 * Operation resource, only the fields relevant to the operation are populated
		 * in the resource.
		 */
		operation?: Operation;

		/** SslCerts Resource */
		serverCaCert?: SslCert;
	}


	/** SslCerts list response. */
	export interface SslCertsListResponse {

		/** List of client certificates for the instance. */
		items?: Array<SslCert>;

		/** This is always <code>sql#sslCertsList</code>. */
		kind?: string;
	}


	/** A Google Cloud SQL service tier resource. */
	export interface Tier {

		/** The maximum disk size of this tier in bytes. */
		DiskQuota?: string;

		/** The maximum RAM usage of this tier in bytes. */
		RAM?: string;

		/** This is always <code>sql#tier</code>. */
		kind?: string;

		/** The applicable regions for this tier. */
		region?: Array<string>;

		/**
		 * An identifier for the machine type, for example, db-n1-standard-1. For
		 * related information, see <a href="/sql/pricing">Pricing</a>.
		 */
		tier?: string;
	}


	/** Tiers list response. */
	export interface TiersListResponse {

		/** List of tiers. */
		items?: Array<Tier>;

		/** This is always <code>sql#tiersList</code>. */
		kind?: string;
	}


	/** A Cloud SQL user resource. */
	export interface User {

		/**
		 * This field is deprecated and will be removed from a future version of the
		 * API.
		 */
		etag?: string;

		/**
		 * The host name from which the user can connect. For <code>insert</code>
		 * operations, host defaults to an empty string. For <code>update</code>
		 * operations, host is specified as part of the request URL. The host name
		 * cannot be updated after insertion.
		 */
		host?: string;

		/**
		 * The name of the Cloud SQL instance. This does not include the project ID.
		 * Can be omitted for <code>update</code> since it is already specified on the
		 * URL.
		 */
		instance?: string;

		/** This is always <code>sql#user</code>. */
		kind?: string;

		/**
		 * The name of the user in the Cloud SQL instance. Can be omitted for
		 * <code>update</code> since it is already specified in the URL.
		 */
		name?: string;

		/** The password for the user. */
		password?: string;

		/**
		 * The project ID of the project containing the Cloud SQL database. The Google
		 * apps domain is prefixed if applicable. Can be omitted for
		 * <code>update</code> since it is already specified on the URL.
		 */
		project?: string;

		/** Represents a Sql Server user on the Cloud SQL instance. */
		sqlserverUserDetails?: SqlServerUserDetails;
	}


	/** User list response. */
	export interface UsersListResponse {

		/** List of user resources in the instance. */
		items?: Array<User>;

		/** This is always <code>sql#usersList</code>. */
		kind?: string;

		/**
		 * An identifier that uniquely identifies the operation. You can use this
		 * identifier to retrieve the Operations resource that has information about
		 * the operation.
		 */
		nextPageToken?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all available database flags for Cloud SQL instances.
		 * Get sql/v1beta4/flags
		 * @param {string} databaseVersion Database type and version you want to retrieve flags for. By default, this
		 * method returns flags for all database types and versions.
		 * @return {void} Successful response
		 */
		Sql_flags_list(databaseVersion: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/flags?databaseVersion=' + (databaseVersion == null ? '' : encodeURIComponent(databaseVersion)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists instances under a given project.
		 * Get sql/v1beta4/projects/{project}/instances
		 * @param {string} project Project ID of the project for which to list Cloud SQL instances.
		 * @param {string} filter A filter expression that filters resources listed in the response.
		 * The expression is in the form of field:value. For example,
		 * 'instanceType:CLOUD_SQL_INSTANCE'. Fields can be nested as needed as per
		 * their JSON representation, such as 'settings.userLabels.auto_start:true'.
		 * Multiple filter queries are space-separated. For example.
		 * 'state:RUNNABLE instanceType:CLOUD_SQL_INSTANCE'. By default, each
		 * expression is an AND expression. However, you can include AND and OR
		 * expressions explicitly.
		 * @param {number} maxResults The maximum number of results to return per response.
		 * @param {string} pageToken A previously-returned page token representing part of the larger set of
		 * results to view.
		 * @return {void} Successful response
		 */
		Sql_instances_list(project: string, filter: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new Cloud SQL instance.
		 * Post sql/v1beta4/projects/{project}/instances
		 * @param {string} project Project ID of the project to which the newly created Cloud SQL instances
		 * should belong.
		 * @return {void} Successful response
		 */
		Sql_instances_insert(project: string, requestBody: DatabaseInstance): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Cloud SQL instance.
		 * Delete sql/v1beta4/projects/{project}/instances/{instance}
		 * @param {string} project Project ID of the project that contains the instance to be deleted.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_delete(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a resource containing information about a Cloud SQL instance.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_get(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates settings of a Cloud SQL instance.
		 * This method supports patch semantics.
		 * Patch sql/v1beta4/projects/{project}/instances/{instance}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_patch(project: string, instance: string, requestBody: DatabaseInstance): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates settings of a Cloud SQL instance. Using this operation might cause
		 * your instance to restart.
		 * Put sql/v1beta4/projects/{project}/instances/{instance}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_update(project: string, instance: string, requestBody: DatabaseInstance): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a new trusted Certificate Authority (CA) version for the specified
		 * instance. Required to prepare for a certificate rotation. If a CA version
		 * was previously added but never used in a certificate rotation, this
		 * operation replaces that version. There cannot be more than one CA version
		 * waiting to be rotated in.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/addServerCa
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_addServerCa(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/addServerCa', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all backup runs associated with a given instance and configuration in
		 * the reverse chronological order of the backup initiation time.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}/backupRuns
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {number} maxResults Maximum number of backup runs per response.
		 * @param {string} pageToken A previously-returned page token representing part of the larger set of
		 * results to view.
		 * @return {void} Successful response
		 */
		Sql_backupRuns_list(project: string, instance: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/backupRuns&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new backup run on demand. This method is applicable only to
		 * Second Generation instances.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/backupRuns
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_backupRuns_insert(project: string, instance: string, requestBody: BackupRun): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/backupRuns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the backup taken by a backup run.
		 * Delete sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {string} id The ID of the Backup Run to delete. To find a Backup Run ID, use the <a
		 * href="/sql/docs/db_path/admin-api/rest/v1beta4/backupRuns/list">list</a>
		 * method.
		 * @return {void} Successful response
		 */
		Sql_backupRuns_delete(project: string, instance: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/backupRuns/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a resource containing information about a backup run.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {string} id The ID of this Backup Run.
		 * @return {void} Successful response
		 */
		Sql_backupRuns_get(project: string, instance: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/backupRuns/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a Cloud SQL instance as a clone of the source instance. Using this
		 * operation might cause your instance to restart.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/clone
		 * @param {string} project Project ID of the source as well as the clone Cloud SQL instance.
		 * @param {string} instance The ID of the Cloud SQL instance to be cloned (source). This does not
		 * include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_clone(project: string, instance: string, requestBody: InstancesCloneRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/clone', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates a short-lived X509 certificate containing the provided public key
		 * and signed by a private key specific to the target instance. Users may use
		 * the certificate to authenticate as themselves when connecting to the
		 * database.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/createEphemeral
		 * @param {string} project Project ID of the Cloud SQL project.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_sslCerts_createEphemeral(project: string, instance: string, requestBody: SslCertsCreateEphemeralRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/createEphemeral', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists databases in the specified Cloud SQL instance.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}/databases
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_databases_list(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a resource containing information about a database inside a Cloud
		 * SQL instance.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/databases
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_databases_insert(project: string, instance: string, requestBody: Database): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a database from a Cloud SQL instance.
		 * Delete sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} database Name of the database to be deleted in the instance.
		 * @return {void} Successful response
		 */
		Sql_databases_delete(project: string, instance: string, database: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases/' + (database == null ? '' : encodeURIComponent(database)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a resource containing information about a database inside a Cloud
		 * SQL instance.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} database Name of the database in the instance.
		 * @return {void} Successful response
		 */
		Sql_databases_get(project: string, instance: string, database: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases/' + (database == null ? '' : encodeURIComponent(database)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Partially updates a resource containing information about a database inside
		 * a Cloud SQL instance. This method supports patch semantics.
		 * Patch sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} database Name of the database to be updated in the instance.
		 * @return {void} Successful response
		 */
		Sql_databases_patch(project: string, instance: string, database: string, requestBody: Database): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases/' + (database == null ? '' : encodeURIComponent(database)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a resource containing information about a database inside a Cloud
		 * SQL instance.
		 * Put sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} database Name of the database to be updated in the instance.
		 * @return {void} Successful response
		 */
		Sql_databases_update(project: string, instance: string, database: string, requestBody: Database): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/databases/' + (database == null ? '' : encodeURIComponent(database)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Demotes the stand-alone instance to be a Cloud SQL read replica for an
		 * external database server.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/demoteMaster
		 * @param {string} project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance name.
		 * @return {void} Successful response
		 */
		Sql_instances_demoteMaster(project: string, instance: string, requestBody: InstancesDemoteMasterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/demoteMaster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL
		 * dump or CSV file.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/export
		 * @param {string} project Project ID of the project that contains the instance to be exported.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_export(project: string, instance: string, requestBody: InstancesExportRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Failover the instance to its failover replica instance. Using this
		 * operation might cause your instance to restart.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/failover
		 * @param {string} project ID of the project that contains the read replica.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_failover(project: string, instance: string, requestBody: InstancesFailoverRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/failover', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Imports data into a Cloud SQL instance from a SQL dump  or CSV file in
		 * Cloud Storage.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/import
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_import(project: string, instance: string, requestBody: InstancesImportRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the trusted Certificate Authorities (CAs) for the specified
		 * instance. There can be up to three CAs listed: the CA that was used to sign
		 * the certificate that is currently in use, a CA that has been added but not
		 * yet used to sign a certificate, and a CA used to sign a certificate that
		 * has previously rotated out.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}/listServerCas
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_listServerCas(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/listServerCas', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Promotes the read replica instance to be a stand-alone Cloud SQL instance.
		 * Using this operation might cause your instance to restart.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/promoteReplica
		 * @param {string} project ID of the project that contains the read replica.
		 * @param {string} instance Cloud SQL read replica instance name.
		 * @return {void} Successful response
		 */
		Sql_instances_promoteReplica(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/promoteReplica', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reschedules the maintenance on the given instance.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/rescheduleMaintenance
		 * @param {string} project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_projects_instances_rescheduleMaintenance(project: string, instance: string, requestBody: SqlInstancesRescheduleMaintenanceRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/rescheduleMaintenance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes all client certificates and generates a new server SSL certificate
		 * for the instance.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/resetSslConfig
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_resetSslConfig(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/resetSslConfig', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restarts a Cloud SQL instance.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/restart
		 * @param {string} project Project ID of the project that contains the instance to be restarted.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_restart(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/restart', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restores a backup of a Cloud SQL instance. Using this operation might cause
		 * your instance to restart.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/restoreBackup
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_restoreBackup(project: string, instance: string, requestBody: InstancesRestoreBackupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/restoreBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rotates the server certificate to one signed by the Certificate Authority
		 * (CA) version previously added with the addServerCA method.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCa
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_rotateServerCa(project: string, instance: string, requestBody: InstancesRotateServerCaRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/rotateServerCa', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the current SSL certificates for the instance.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}/sslCerts
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_sslCerts_list(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/sslCerts', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an SSL certificate and returns it along with the private key and
		 * server certificate authority.  The new certificate will not be usable until
		 * the instance is restarted.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/sslCerts
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_sslCerts_insert(project: string, instance: string, requestBody: SslCertsInsertRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/sslCerts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the SSL certificate. For First Generation instances, the
		 * certificate remains valid until the instance is restarted.
		 * Delete sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {string} sha1Fingerprint Sha1 FingerPrint.
		 * @return {void} Successful response
		 */
		Sql_sslCerts_delete(project: string, instance: string, sha1Fingerprint: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/sslCerts/' + (sha1Fingerprint == null ? '' : encodeURIComponent(sha1Fingerprint)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a particular SSL certificate.  Does not include the private key
		 * (required for usage).  The private key must be saved from the response to
		 * initial creation.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {string} sha1Fingerprint Sha1 FingerPrint.
		 * @return {void} Successful response
		 */
		Sql_sslCerts_get(project: string, instance: string, sha1Fingerprint: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/sslCerts/' + (sha1Fingerprint == null ? '' : encodeURIComponent(sha1Fingerprint)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Start External master migration.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/startExternalSync
		 * @param {string} project ID of the project that contains the first generation instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {Sql_projects_instances_startExternalSyncSyncMode} syncMode External sync mode
		 * @return {void} Successful response
		 */
		Sql_projects_instances_startExternalSync(project: string, instance: string, syncMode: Sql_projects_instances_startExternalSyncSyncMode): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/startExternalSync&syncMode=' + syncMode, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts the replication in the read replica instance.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/startReplica
		 * @param {string} project ID of the project that contains the read replica.
		 * @param {string} instance Cloud SQL read replica instance name.
		 * @return {void} Successful response
		 */
		Sql_instances_startReplica(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/startReplica', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops the replication in the read replica instance.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/stopReplica
		 * @param {string} project ID of the project that contains the read replica.
		 * @param {string} instance Cloud SQL read replica instance name.
		 * @return {void} Successful response
		 */
		Sql_instances_stopReplica(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/stopReplica', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Truncate MySQL general and slow query log tables
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/truncateLog
		 * @param {string} project Project ID of the Cloud SQL project.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_instances_truncateLog(project: string, instance: string, requestBody: InstancesTruncateLogRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/truncateLog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a user from a Cloud SQL instance.
		 * Delete sql/v1beta4/projects/{project}/instances/{instance}/users
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} host Host of the user in the instance.
		 * @param {string} name Name of the user in the instance.
		 * @return {void} Successful response
		 */
		Sql_users_delete(project: string, instance: string, host: string, name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/users&host=' + (host == null ? '' : encodeURIComponent(host)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists users in the specified Cloud SQL instance.
		 * Get sql/v1beta4/projects/{project}/instances/{instance}/users
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_users_list(project: string, instance: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/users', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new user in a Cloud SQL instance.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/users
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @return {void} Successful response
		 */
		Sql_users_insert(project: string, instance: string, requestBody: User): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing user in a Cloud SQL instance.
		 * Put sql/v1beta4/projects/{project}/instances/{instance}/users
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Database instance ID. This does not include the project ID.
		 * @param {string} host Optional. Host of the user in the instance.
		 * @param {string} name Name of the user in the instance.
		 * @return {void} Successful response
		 */
		Sql_users_update(project: string, instance: string, host: string, name: string, requestBody: User): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/users&host=' + (host == null ? '' : encodeURIComponent(host)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify External master external sync settings.
		 * Post sql/v1beta4/projects/{project}/instances/{instance}/verifyExternalSyncSettings
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {Sql_projects_instances_startExternalSyncSyncMode} syncMode External sync mode
		 * @param {boolean} verifyConnectionOnly Flag to enable verifying connection only
		 * @return {void} Successful response
		 */
		Sql_projects_instances_verifyExternalSyncSettings(project: string, instance: string, syncMode: Sql_projects_instances_startExternalSyncSyncMode, verifyConnectionOnly: boolean): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/verifyExternalSyncSettings&syncMode=' + syncMode + '&verifyConnectionOnly=' + verifyConnectionOnly, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all instance operations that have been performed on the given Cloud
		 * SQL instance in the reverse chronological order of the start time.
		 * Get sql/v1beta4/projects/{project}/operations
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} instance Cloud SQL instance ID. This does not include the project ID.
		 * @param {number} maxResults Maximum number of operations per response.
		 * @param {string} pageToken A previously-returned page token representing part of the larger set of
		 * results to view.
		 * @return {void} Successful response
		 */
		Sql_operations_list(project: string, instance: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/operations&instance=' + (instance == null ? '' : encodeURIComponent(instance)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves an instance operation that has been performed on an instance.
		 * Get sql/v1beta4/projects/{project}/operations/{operation}
		 * @param {string} project Project ID of the project that contains the instance.
		 * @param {string} operation Instance operation ID.
		 * @return {void} Successful response
		 */
		Sql_operations_get(project: string, operation: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/operations/' + (operation == null ? '' : encodeURIComponent(operation)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all available machine types (tiers) for Cloud SQL, for example,
		 * db-n1-standard-1. For related information, see <a
		 * href="/sql/pricing">Pricing</a>.
		 * Get sql/v1beta4/projects/{project}/tiers
		 * @param {string} project Project ID of the project for which to list tiers.
		 * @return {void} Successful response
		 */
		Sql_tiers_list(project: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sql/v1beta4/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/tiers', { observe: 'response', responseType: 'text' });
		}
	}

	export enum Sql_projects_instances_startExternalSyncSyncMode { EXTERNAL_SYNC_MODE_UNSPECIFIED = 0, ONLINE = 1, OFFLINE = 2 }

}

