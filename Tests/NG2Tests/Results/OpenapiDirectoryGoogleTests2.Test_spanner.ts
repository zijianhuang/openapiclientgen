import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** A backup of a Cloud Spanner database. */
	export interface Backup {

		/**
		 * Output only. The backup will contain an externally consistent
		 * copy of the database at the timestamp specified by
		 * `create_time`. `create_time` is approximately the time the
		 * CreateBackup request is received.
		 */
		createTime?: string | null;

		/**
		 * Required for the CreateBackup operation.
		 * Name of the database from which this backup was
		 * created. This needs to be in the same instance as the backup.
		 * Values are of the form
		 * `projects/<project>/instances/<instance>/databases/<database>`.
		 */
		database?: string | null;

		/**
		 * Required for the CreateBackup
		 * operation. The expiration time of the backup, with microseconds
		 * granularity that must be at least 6 hours and at most 366 days
		 * from the time the CreateBackup request is processed. Once the `expire_time`
		 * has passed, the backup is eligible to be automatically deleted by Cloud
		 * Spanner to free the resources used by the backup.
		 */
		expireTime?: string | null;

		/**
		 * Output only for the CreateBackup operation.
		 * Required for the UpdateBackup operation.
		 * A globally unique identifier for the backup which cannot be
		 * changed. Values are of the form
		 * `projects/<project>/instances/<instance>/backups/a-z*[a-z0-9]`
		 * The final segment of the name must be between 2 and 60 characters
		 * in length.
		 * The backup is stored in the location(s) specified in the instance
		 * configuration of the instance containing the backup, identified
		 * by the prefix of the backup name of the form
		 * `projects/<project>/instances/<instance>`.
		 */
		name?: string | null;

		/**
		 * Output only. The names of the restored databases that reference the backup.
		 * The database names are of
		 * the form `projects/<project>/instances/<instance>/databases/<database>`.
		 * Referencing databases may exist in different instances. The existence of
		 * any referencing database prevents the backup from being deleted. When a
		 * restored database from the backup enters the `READY` state, the reference
		 * to the backup is removed.
		 */
		referencingDatabases?: Array<string> | null;

		/** Output only. Size of the backup in bytes. */
		sizeBytes?: string | null;

		/** Output only. The current state of the backup. */
		state?: BackupState | null;
	}

	export enum BackupState { STATE_UNSPECIFIED = 0, CREATING = 1, READY = 2 }


	/** Information about a backup. */
	export interface BackupInfo {

		/** Name of the backup. */
		backup?: string | null;

		/**
		 * The backup contains an externally consistent copy of `source_database` at
		 * the timestamp specified by `create_time`.
		 */
		createTime?: string | null;

		/** Name of the database the backup was created from. */
		sourceDatabase?: string | null;
	}


	/** The request for BatchCreateSessions. */
	export interface BatchCreateSessionsRequest {

		/**
		 * Required. The number of sessions to be created in this batch call.
		 * The API may return fewer than the requested number of sessions. If a
		 * specific number of sessions are desired, the client can make additional
		 * calls to BatchCreateSessions (adjusting
		 * session_count as necessary).
		 */
		sessionCount?: number | null;

		/** A session in the Cloud Spanner API. */
		sessionTemplate?: Session | null;
	}


	/** A session in the Cloud Spanner API. */
	export interface Session {

		/**
		 * Output only. The approximate timestamp when the session is last used. It is
		 * typically earlier than the actual last use time.
		 */
		approximateLastUseTime?: string | null;

		/** Output only. The timestamp when the session is created. */
		createTime?: string | null;

		/**
		 * The labels for the session.
		 * * Label keys must be between 1 and 63 characters long and must conform to
		 * the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`.
		 * * Label values must be between 0 and 63 characters long and must conform
		 * to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.
		 * * No more than 64 labels can be associated with a given session.
		 * See https://goo.gl/xmQnxf for more information on and examples of labels.
		 */
		labels?: {[id: string]: string } | null;

		/**
		 * The name of the session. This is always system-assigned; values provided
		 * when creating a session are ignored.
		 */
		name?: string | null;
	}


	/** The response for BatchCreateSessions. */
	export interface BatchCreateSessionsResponse {

		/** The freshly created sessions. */
		session?: Array<Session> | null;
	}


	/** The request for BeginTransaction. */
	export interface BeginTransactionRequest {

		/**
		 * # Transactions
		 * Each session can have at most one active transaction at a time. After the
		 * active transaction is completed, the session can immediately be
		 * re-used for the next transaction. It is not necessary to create a
		 * new session for each transaction.
		 * # Transaction Modes
		 * Cloud Spanner supports three transaction modes:
		 * 1. Locking read-write. This type of transaction is the only way
		 * to write data into Cloud Spanner. These transactions rely on
		 * pessimistic locking and, if necessary, two-phase commit.
		 * Locking read-write transactions may abort, requiring the
		 * application to retry.
		 * 2. Snapshot read-only. This transaction type provides guaranteed
		 * consistency across several reads, but does not allow
		 * writes. Snapshot read-only transactions can be configured to
		 * read at timestamps in the past. Snapshot read-only
		 * transactions do not need to be committed.
		 * 3. Partitioned DML. This type of transaction is used to execute
		 * a single Partitioned DML statement. Partitioned DML partitions
		 * the key space and runs the DML statement over each partition
		 * in parallel using separate, internal transactions that commit
		 * independently. Partitioned DML transactions do not need to be
		 * committed.
		 * For transactions that only read, snapshot read-only transactions
		 * provide simpler semantics and are almost always faster. In
		 * particular, read-only transactions do not take locks, so they do
		 * not conflict with read-write transactions. As a consequence of not
		 * taking locks, they also do not abort, so retry loops are not needed.
		 * Transactions may only read/write data in a single database. They
		 * may, however, read/write data in different tables within that
		 * database.
		 * ## Locking Read-Write Transactions
		 * Locking transactions may be used to atomically read-modify-write
		 * data anywhere in a database. This type of transaction is externally
		 * consistent.
		 * Clients should attempt to minimize the amount of time a transaction
		 * is active. Faster transactions commit with higher probability
		 * and cause less contention. Cloud Spanner attempts to keep read locks
		 * active as long as the transaction continues to do reads, and the
		 * transaction has not been terminated by
		 * Commit or
		 * Rollback.  Long periods of
		 * inactivity at the client may cause Cloud Spanner to release a
		 * transaction's locks and abort it.
		 * Conceptually, a read-write transaction consists of zero or more
		 * reads or SQL statements followed by
		 * Commit. At any time before
		 * Commit, the client can send a
		 * Rollback request to abort the
		 * transaction.
		 * ### Semantics
		 * Cloud Spanner can commit the transaction if all read locks it acquired
		 * are still valid at commit time, and it is able to acquire write
		 * locks for all writes. Cloud Spanner can abort the transaction for any
		 * reason. If a commit attempt returns `ABORTED`, Cloud Spanner guarantees
		 * that the transaction has not modified any user data in Cloud Spanner.
		 * Unless the transaction commits, Cloud Spanner makes no guarantees about
		 * how long the transaction's locks were held for. It is an error to
		 * use Cloud Spanner locks for any sort of mutual exclusion other than
		 * between Cloud Spanner transactions themselves.
		 * ### Retrying Aborted Transactions
		 * When a transaction aborts, the application can choose to retry the
		 * whole transaction again. To maximize the chances of successfully
		 * committing the retry, the client should execute the retry in the
		 * same session as the original attempt. The original session's lock
		 * priority increases with each consecutive abort, meaning that each
		 * attempt has a slightly better chance of success than the previous.
		 * Under some circumstances (e.g., many transactions attempting to
		 * modify the same row(s)), a transaction can abort many times in a
		 * short period before successfully committing. Thus, it is not a good
		 * idea to cap the number of retries a transaction can attempt;
		 * instead, it is better to limit the total amount of wall time spent
		 * retrying.
		 * ### Idle Transactions
		 * A transaction is considered idle if it has no outstanding reads or
		 * SQL queries and has not started a read or SQL query within the last 10
		 * seconds. Idle transactions can be aborted by Cloud Spanner so that they
		 * don't hold on to locks indefinitely. In that case, the commit will
		 * fail with error `ABORTED`.
		 * If this behavior is undesirable, periodically executing a simple
		 * SQL query in the transaction (e.g., `SELECT 1`) prevents the
		 * transaction from becoming idle.
		 * ## Snapshot Read-Only Transactions
		 * Snapshot read-only transactions provides a simpler method than
		 * locking read-write transactions for doing several consistent
		 * reads. However, this type of transaction does not support writes.
		 * Snapshot transactions do not take locks. Instead, they work by
		 * choosing a Cloud Spanner timestamp, then executing all reads at that
		 * timestamp. Since they do not acquire locks, they do not block
		 * concurrent read-write transactions.
		 * Unlike locking read-write transactions, snapshot read-only
		 * transactions never abort. They can fail if the chosen read
		 * timestamp is garbage collected; however, the default garbage
		 * collection policy is generous enough that most applications do not
		 * need to worry about this in practice.
		 * Snapshot read-only transactions do not need to call
		 * Commit or
		 * Rollback (and in fact are not
		 * permitted to do so).
		 * To execute a snapshot transaction, the client specifies a timestamp
		 * bound, which tells Cloud Spanner how to choose a read timestamp.
		 * The types of timestamp bound are:
		 * - Strong (the default).
		 * - Bounded staleness.
		 * - Exact staleness.
		 * If the Cloud Spanner database to be read is geographically distributed,
		 * stale read-only transactions can execute more quickly than strong
		 * or read-write transaction, because they are able to execute far
		 * from the leader replica.
		 * Each type of timestamp bound is discussed in detail below.
		 * ### Strong
		 * Strong reads are guaranteed to see the effects of all transactions
		 * that have committed before the start of the read. Furthermore, all
		 * rows yielded by a single read are consistent with each other -- if
		 * any part of the read observes a transaction, all parts of the read
		 * see the transaction.
		 * Strong reads are not repeatable: two consecutive strong read-only
		 * transactions might return inconsistent results if there are
		 * concurrent writes. If consistency across reads is required, the
		 * reads should be executed within a transaction or at an exact read
		 * timestamp.
		 * See TransactionOptions.ReadOnly.strong.
		 * ### Exact Staleness
		 * These timestamp bounds execute reads at a user-specified
		 * timestamp. Reads at a timestamp are guaranteed to see a consistent
		 * prefix of the global transaction history: they observe
		 * modifications done by all transactions with a commit timestamp <=
		 * the read timestamp, and observe none of the modifications done by
		 * transactions with a larger commit timestamp. They will block until
		 * all conflicting transactions that may be assigned commit timestamps
		 * <= the read timestamp have finished.
		 * The timestamp can either be expressed as an absolute Cloud Spanner commit
		 * timestamp or a staleness relative to the current time.
		 * These modes do not require a "negotiation phase" to pick a
		 * timestamp. As a result, they execute slightly faster than the
		 * equivalent boundedly stale concurrency modes. On the other hand,
		 * boundedly stale reads usually return fresher results.
		 * See TransactionOptions.ReadOnly.read_timestamp and
		 * TransactionOptions.ReadOnly.exact_staleness.
		 * ### Bounded Staleness
		 * Bounded staleness modes allow Cloud Spanner to pick the read timestamp,
		 * subject to a user-provided staleness bound. Cloud Spanner chooses the
		 * newest timestamp within the staleness bound that allows execution
		 * of the reads at the closest available replica without blocking.
		 * All rows yielded are consistent with each other -- if any part of
		 * the read observes a transaction, all parts of the read see the
		 * transaction. Boundedly stale reads are not repeatable: two stale
		 * reads, even if they use the same staleness bound, can execute at
		 * different timestamps and thus return inconsistent results.
		 * Boundedly stale reads execute in two phases: the first phase
		 * negotiates a timestamp among all replicas needed to serve the
		 * read. In the second phase, reads are executed at the negotiated
		 * timestamp.
		 * As a result of the two phase execution, bounded staleness reads are
		 * usually a little slower than comparable exact staleness
		 * reads. However, they are typically able to return fresher
		 * results, and are more likely to execute at the closest replica.
		 * Because the timestamp negotiation requires up-front knowledge of
		 * which rows will be read, it can only be used with single-use
		 * read-only transactions.
		 * See TransactionOptions.ReadOnly.max_staleness and
		 * TransactionOptions.ReadOnly.min_read_timestamp.
		 * ### Old Read Timestamps and Garbage Collection
		 * Cloud Spanner continuously garbage collects deleted and overwritten data
		 * in the background to reclaim storage space. This process is known
		 * as "version GC". By default, version GC reclaims versions after they
		 * are one hour old. Because of this, Cloud Spanner cannot perform reads
		 * at read timestamps more than one hour in the past. This
		 * restriction also applies to in-progress reads and/or SQL queries whose
		 * timestamp become too old while executing. Reads and SQL queries with
		 * too-old read timestamps fail with the error `FAILED_PRECONDITION`.
		 * ## Partitioned DML Transactions
		 * Partitioned DML transactions are used to execute DML statements with a
		 * different execution strategy that provides different, and often better,
		 * scalability properties for large, table-wide operations than DML in a
		 * ReadWrite transaction. Smaller scoped statements, such as an OLTP workload,
		 * should prefer using ReadWrite transactions.
		 * Partitioned DML partitions the keyspace and runs the DML statement on each
		 * partition in separate, internal transactions. These transactions commit
		 * automatically when complete, and run independently from one another.
		 * To reduce lock contention, this execution strategy only acquires read locks
		 * on rows that match the WHERE clause of the statement. Additionally, the
		 * smaller per-partition transactions hold locks for less time.
		 * That said, Partitioned DML is not a drop-in replacement for standard DML used
		 * in ReadWrite transactions.
		 * - The DML statement must be fully-partitionable. Specifically, the statement
		 * must be expressible as the union of many statements which each access only
		 * a single row of the table.
		 * - The statement is not applied atomically to all rows of the table. Rather,
		 * the statement is applied atomically to partitions of the table, in
		 * independent transactions. Secondary index rows are updated atomically
		 * with the base table rows.
		 * - Partitioned DML does not guarantee exactly-once execution semantics
		 * against a partition. The statement will be applied at least once to each
		 * partition. It is strongly recommended that the DML statement should be
		 * idempotent to avoid unexpected results. For instance, it is potentially
		 * dangerous to run a statement such as
		 * `UPDATE table SET column = column + 1` as it could be run multiple times
		 * against some rows.
		 * - The partitions are committed automatically - there is no support for
		 * Commit or Rollback. If the call returns an error, or if the client issuing
		 * the ExecuteSql call dies, it is possible that some rows had the statement
		 * executed on them successfully. It is also possible that statement was
		 * never executed against other rows.
		 * - Partitioned DML transactions may only contain the execution of a single
		 * DML statement via ExecuteSql or ExecuteStreamingSql.
		 * - If any error is encountered during the execution of the partitioned DML
		 * operation (for instance, a UNIQUE INDEX violation, division by zero, or a
		 * value that cannot be stored due to schema constraints), then the
		 * operation is stopped at that point and an error is returned. It is
		 * possible that at this point, some partitions have been committed (or even
		 * committed multiple times), and other partitions have not been run at all.
		 * Given the above, Partitioned DML is good fit for large, database-wide,
		 * operations that are idempotent, such as deleting old rows from a very large
		 * table.
		 */
		options?: TransactionOptions | null;
	}


	/**
	 * # Transactions
	 * Each session can have at most one active transaction at a time. After the
	 * active transaction is completed, the session can immediately be
	 * re-used for the next transaction. It is not necessary to create a
	 * new session for each transaction.
	 * # Transaction Modes
	 * Cloud Spanner supports three transaction modes:
	 *   1. Locking read-write. This type of transaction is the only way
	 *      to write data into Cloud Spanner. These transactions rely on
	 *      pessimistic locking and, if necessary, two-phase commit.
	 *      Locking read-write transactions may abort, requiring the
	 *      application to retry.
	 *   2. Snapshot read-only. This transaction type provides guaranteed
	 *      consistency across several reads, but does not allow
	 *      writes. Snapshot read-only transactions can be configured to
	 *      read at timestamps in the past. Snapshot read-only
	 *      transactions do not need to be committed.
	 *   3. Partitioned DML. This type of transaction is used to execute
	 *      a single Partitioned DML statement. Partitioned DML partitions
	 *      the key space and runs the DML statement over each partition
	 *      in parallel using separate, internal transactions that commit
	 *      independently. Partitioned DML transactions do not need to be
	 *      committed.
	 * For transactions that only read, snapshot read-only transactions
	 * provide simpler semantics and are almost always faster. In
	 * particular, read-only transactions do not take locks, so they do
	 * not conflict with read-write transactions. As a consequence of not
	 * taking locks, they also do not abort, so retry loops are not needed.
	 * Transactions may only read/write data in a single database. They
	 * may, however, read/write data in different tables within that
	 * database.
	 * ## Locking Read-Write Transactions
	 * Locking transactions may be used to atomically read-modify-write
	 * data anywhere in a database. This type of transaction is externally
	 * consistent.
	 * Clients should attempt to minimize the amount of time a transaction
	 * is active. Faster transactions commit with higher probability
	 * and cause less contention. Cloud Spanner attempts to keep read locks
	 * active as long as the transaction continues to do reads, and the
	 * transaction has not been terminated by
	 * Commit or
	 * Rollback.  Long periods of
	 * inactivity at the client may cause Cloud Spanner to release a
	 * transaction's locks and abort it.
	 * Conceptually, a read-write transaction consists of zero or more
	 * reads or SQL statements followed by
	 * Commit. At any time before
	 * Commit, the client can send a
	 * Rollback request to abort the
	 * transaction.
	 * ### Semantics
	 * Cloud Spanner can commit the transaction if all read locks it acquired
	 * are still valid at commit time, and it is able to acquire write
	 * locks for all writes. Cloud Spanner can abort the transaction for any
	 * reason. If a commit attempt returns `ABORTED`, Cloud Spanner guarantees
	 * that the transaction has not modified any user data in Cloud Spanner.
	 * Unless the transaction commits, Cloud Spanner makes no guarantees about
	 * how long the transaction's locks were held for. It is an error to
	 * use Cloud Spanner locks for any sort of mutual exclusion other than
	 * between Cloud Spanner transactions themselves.
	 * ### Retrying Aborted Transactions
	 * When a transaction aborts, the application can choose to retry the
	 * whole transaction again. To maximize the chances of successfully
	 * committing the retry, the client should execute the retry in the
	 * same session as the original attempt. The original session's lock
	 * priority increases with each consecutive abort, meaning that each
	 * attempt has a slightly better chance of success than the previous.
	 * Under some circumstances (e.g., many transactions attempting to
	 * modify the same row(s)), a transaction can abort many times in a
	 * short period before successfully committing. Thus, it is not a good
	 * idea to cap the number of retries a transaction can attempt;
	 * instead, it is better to limit the total amount of wall time spent
	 * retrying.
	 * ### Idle Transactions
	 * A transaction is considered idle if it has no outstanding reads or
	 * SQL queries and has not started a read or SQL query within the last 10
	 * seconds. Idle transactions can be aborted by Cloud Spanner so that they
	 * don't hold on to locks indefinitely. In that case, the commit will
	 * fail with error `ABORTED`.
	 * If this behavior is undesirable, periodically executing a simple
	 * SQL query in the transaction (e.g., `SELECT 1`) prevents the
	 * transaction from becoming idle.
	 * ## Snapshot Read-Only Transactions
	 * Snapshot read-only transactions provides a simpler method than
	 * locking read-write transactions for doing several consistent
	 * reads. However, this type of transaction does not support writes.
	 * Snapshot transactions do not take locks. Instead, they work by
	 * choosing a Cloud Spanner timestamp, then executing all reads at that
	 * timestamp. Since they do not acquire locks, they do not block
	 * concurrent read-write transactions.
	 * Unlike locking read-write transactions, snapshot read-only
	 * transactions never abort. They can fail if the chosen read
	 * timestamp is garbage collected; however, the default garbage
	 * collection policy is generous enough that most applications do not
	 * need to worry about this in practice.
	 * Snapshot read-only transactions do not need to call
	 * Commit or
	 * Rollback (and in fact are not
	 * permitted to do so).
	 * To execute a snapshot transaction, the client specifies a timestamp
	 * bound, which tells Cloud Spanner how to choose a read timestamp.
	 * The types of timestamp bound are:
	 *   - Strong (the default).
	 *   - Bounded staleness.
	 *   - Exact staleness.
	 * If the Cloud Spanner database to be read is geographically distributed,
	 * stale read-only transactions can execute more quickly than strong
	 * or read-write transaction, because they are able to execute far
	 * from the leader replica.
	 * Each type of timestamp bound is discussed in detail below.
	 * ### Strong
	 * Strong reads are guaranteed to see the effects of all transactions
	 * that have committed before the start of the read. Furthermore, all
	 * rows yielded by a single read are consistent with each other -- if
	 * any part of the read observes a transaction, all parts of the read
	 * see the transaction.
	 * Strong reads are not repeatable: two consecutive strong read-only
	 * transactions might return inconsistent results if there are
	 * concurrent writes. If consistency across reads is required, the
	 * reads should be executed within a transaction or at an exact read
	 * timestamp.
	 * See TransactionOptions.ReadOnly.strong.
	 * ### Exact Staleness
	 * These timestamp bounds execute reads at a user-specified
	 * timestamp. Reads at a timestamp are guaranteed to see a consistent
	 * prefix of the global transaction history: they observe
	 * modifications done by all transactions with a commit timestamp <=
	 * the read timestamp, and observe none of the modifications done by
	 * transactions with a larger commit timestamp. They will block until
	 * all conflicting transactions that may be assigned commit timestamps
	 * <= the read timestamp have finished.
	 * The timestamp can either be expressed as an absolute Cloud Spanner commit
	 * timestamp or a staleness relative to the current time.
	 * These modes do not require a "negotiation phase" to pick a
	 * timestamp. As a result, they execute slightly faster than the
	 * equivalent boundedly stale concurrency modes. On the other hand,
	 * boundedly stale reads usually return fresher results.
	 * See TransactionOptions.ReadOnly.read_timestamp and
	 * TransactionOptions.ReadOnly.exact_staleness.
	 * ### Bounded Staleness
	 * Bounded staleness modes allow Cloud Spanner to pick the read timestamp,
	 * subject to a user-provided staleness bound. Cloud Spanner chooses the
	 * newest timestamp within the staleness bound that allows execution
	 * of the reads at the closest available replica without blocking.
	 * All rows yielded are consistent with each other -- if any part of
	 * the read observes a transaction, all parts of the read see the
	 * transaction. Boundedly stale reads are not repeatable: two stale
	 * reads, even if they use the same staleness bound, can execute at
	 * different timestamps and thus return inconsistent results.
	 * Boundedly stale reads execute in two phases: the first phase
	 * negotiates a timestamp among all replicas needed to serve the
	 * read. In the second phase, reads are executed at the negotiated
	 * timestamp.
	 * As a result of the two phase execution, bounded staleness reads are
	 * usually a little slower than comparable exact staleness
	 * reads. However, they are typically able to return fresher
	 * results, and are more likely to execute at the closest replica.
	 * Because the timestamp negotiation requires up-front knowledge of
	 * which rows will be read, it can only be used with single-use
	 * read-only transactions.
	 * See TransactionOptions.ReadOnly.max_staleness and
	 * TransactionOptions.ReadOnly.min_read_timestamp.
	 * ### Old Read Timestamps and Garbage Collection
	 * Cloud Spanner continuously garbage collects deleted and overwritten data
	 * in the background to reclaim storage space. This process is known
	 * as "version GC". By default, version GC reclaims versions after they
	 * are one hour old. Because of this, Cloud Spanner cannot perform reads
	 * at read timestamps more than one hour in the past. This
	 * restriction also applies to in-progress reads and/or SQL queries whose
	 * timestamp become too old while executing. Reads and SQL queries with
	 * too-old read timestamps fail with the error `FAILED_PRECONDITION`.
	 * ## Partitioned DML Transactions
	 * Partitioned DML transactions are used to execute DML statements with a
	 * different execution strategy that provides different, and often better,
	 * scalability properties for large, table-wide operations than DML in a
	 * ReadWrite transaction. Smaller scoped statements, such as an OLTP workload,
	 * should prefer using ReadWrite transactions.
	 * Partitioned DML partitions the keyspace and runs the DML statement on each
	 * partition in separate, internal transactions. These transactions commit
	 * automatically when complete, and run independently from one another.
	 * To reduce lock contention, this execution strategy only acquires read locks
	 * on rows that match the WHERE clause of the statement. Additionally, the
	 * smaller per-partition transactions hold locks for less time.
	 * That said, Partitioned DML is not a drop-in replacement for standard DML used
	 * in ReadWrite transactions.
	 *  - The DML statement must be fully-partitionable. Specifically, the statement
	 *    must be expressible as the union of many statements which each access only
	 *    a single row of the table.
	 *  - The statement is not applied atomically to all rows of the table. Rather,
	 *    the statement is applied atomically to partitions of the table, in
	 *    independent transactions. Secondary index rows are updated atomically
	 *    with the base table rows.
	 *  - Partitioned DML does not guarantee exactly-once execution semantics
	 *    against a partition. The statement will be applied at least once to each
	 *    partition. It is strongly recommended that the DML statement should be
	 *    idempotent to avoid unexpected results. For instance, it is potentially
	 *    dangerous to run a statement such as
	 *    `UPDATE table SET column = column + 1` as it could be run multiple times
	 *    against some rows.
	 *  - The partitions are committed automatically - there is no support for
	 *    Commit or Rollback. If the call returns an error, or if the client issuing
	 *    the ExecuteSql call dies, it is possible that some rows had the statement
	 *    executed on them successfully. It is also possible that statement was
	 *    never executed against other rows.
	 *  - Partitioned DML transactions may only contain the execution of a single
	 *    DML statement via ExecuteSql or ExecuteStreamingSql.
	 *  - If any error is encountered during the execution of the partitioned DML
	 *    operation (for instance, a UNIQUE INDEX violation, division by zero, or a
	 *    value that cannot be stored due to schema constraints), then the
	 *    operation is stopped at that point and an error is returned. It is
	 *    possible that at this point, some partitions have been committed (or even
	 *    committed multiple times), and other partitions have not been run at all.
	 * Given the above, Partitioned DML is good fit for large, database-wide,
	 * operations that are idempotent, such as deleting old rows from a very large
	 * table.
	 */
	export interface TransactionOptions {

		/** Message type to initiate a Partitioned DML transaction. */
		partitionedDml?: PartitionedDml | null;

		/** Message type to initiate a read-only transaction. */
		readOnly?: ReadOnly | null;

		/**
		 * Message type to initiate a read-write transaction. Currently this
		 * transaction type has no options.
		 */
		readWrite?: ReadWrite | null;
	}


	/** Message type to initiate a Partitioned DML transaction. */
	export interface PartitionedDml {
	}


	/** Message type to initiate a read-only transaction. */
	export interface ReadOnly {

		/**
		 * Executes all reads at a timestamp that is `exact_staleness`
		 * old. The timestamp is chosen soon after the read is started.
		 * Guarantees that all writes that have committed more than the
		 * specified number of seconds ago are visible. Because Cloud Spanner
		 * chooses the exact timestamp, this mode works even if the client's
		 * local clock is substantially skewed from Cloud Spanner commit
		 * timestamps.
		 * Useful for reading at nearby replicas without the distributed
		 * timestamp negotiation overhead of `max_staleness`.
		 */
		exactStaleness?: string | null;

		/**
		 * Read data at a timestamp >= `NOW - max_staleness`
		 * seconds. Guarantees that all writes that have committed more
		 * than the specified number of seconds ago are visible. Because
		 * Cloud Spanner chooses the exact timestamp, this mode works even if
		 * the client's local clock is substantially skewed from Cloud Spanner
		 * commit timestamps.
		 * Useful for reading the freshest data available at a nearby
		 * replica, while bounding the possible staleness if the local
		 * replica has fallen behind.
		 * Note that this option can only be used in single-use
		 * transactions.
		 */
		maxStaleness?: string | null;

		/**
		 * Executes all reads at a timestamp >= `min_read_timestamp`.
		 * This is useful for requesting fresher data than some previous
		 * read, or data that is fresh enough to observe the effects of some
		 * previously committed transaction whose timestamp is known.
		 * Note that this option can only be used in single-use transactions.
		 * A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds.
		 * Example: `"2014-10-02T15:01:23.045123456Z"`.
		 */
		minReadTimestamp?: string | null;

		/**
		 * Executes all reads at the given timestamp. Unlike other modes,
		 * reads at a specific timestamp are repeatable; the same read at
		 * the same timestamp always returns the same data. If the
		 * timestamp is in the future, the read will block until the
		 * specified timestamp, modulo the read's deadline.
		 * Useful for large scale consistent reads such as mapreduces, or
		 * for coordinating many reads against a consistent snapshot of the
		 * data.
		 * A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds.
		 * Example: `"2014-10-02T15:01:23.045123456Z"`.
		 */
		readTimestamp?: string | null;

		/**
		 * If true, the Cloud Spanner-selected read timestamp is included in
		 * the Transaction message that describes the transaction.
		 */
		returnReadTimestamp?: boolean | null;

		/**
		 * Read at a timestamp where all previously committed transactions
		 * are visible.
		 */
		strong?: boolean | null;
	}


	/**
	 * Message type to initiate a read-write transaction. Currently this
	 * transaction type has no options.
	 */
	export interface ReadWrite {
	}


	/** Associates `members` with a `role`. */
	export interface Binding {

		/**
		 * Represents a textual expression in the Common Expression Language (CEL)
		 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
		 * are documented at https://github.com/google/cel-spec.
		 * Example (Comparison):
		 * title: "Summary size limit"
		 * description: "Determines if a summary is less than 100 chars"
		 * expression: "document.summary.size() < 100"
		 * Example (Equality):
		 * title: "Requestor is owner"
		 * description: "Determines if requestor is the document owner"
		 * expression: "document.owner == request.auth.claims.email"
		 * Example (Logic):
		 * title: "Public documents"
		 * description: "Determine whether the document should be publicly visible"
		 * expression: "document.type != 'private' && document.type != 'internal'"
		 * Example (Data Manipulation):
		 * title: "Notification string"
		 * description: "Create a notification string with a timestamp."
		 * expression: "'New message received at ' + string(document.create_time)"
		 * The exact variables and functions that may be referenced within an expression
		 * are determined by the service that evaluates it. See the service
		 * documentation for additional information.
		 */
		condition?: Expr | null;

		/**
		 * Specifies the identities requesting access for a Cloud Platform resource.
		 * `members` can have the following values:
		 * * `allUsers`: A special identifier that represents anyone who is
		 * on the internet; with or without a Google account.
		 * * `allAuthenticatedUsers`: A special identifier that represents anyone
		 * who is authenticated with a Google account or a service account.
		 * * `user:{emailid}`: An email address that represents a specific Google
		 * account. For example, `alice@example.com` .
		 * * `serviceAccount:{emailid}`: An email address that represents a service
		 * account. For example, `my-other-app@appspot.gserviceaccount.com`.
		 * * `group:{emailid}`: An email address that represents a Google group.
		 * For example, `admins@example.com`.
		 * * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique
		 * identifier) representing a user that has been recently deleted. For
		 * example, `alice@example.com?uid=123456789012345678901`. If the user is
		 * recovered, this value reverts to `user:{emailid}` and the recovered user
		 * retains the role in the binding.
		 * * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus
		 * unique identifier) representing a service account that has been recently
		 * deleted. For example,
		 * `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.
		 * If the service account is undeleted, this value reverts to
		 * `serviceAccount:{emailid}` and the undeleted service account retains the
		 * role in the binding.
		 * * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique
		 * identifier) representing a Google group that has been recently
		 * deleted. For example, `admins@example.com?uid=123456789012345678901`. If
		 * the group is recovered, this value reverts to `group:{emailid}` and the
		 * recovered group retains the role in the binding.
		 * * `domain:{domain}`: The G Suite domain (primary) that represents all the
		 * users of that domain. For example, `google.com` or `example.com`.
		 */
		members?: Array<string> | null;

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 */
		role?: string | null;
	}


	/**
	 * Represents a textual expression in the Common Expression Language (CEL)
	 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
	 * are documented at https://github.com/google/cel-spec.
	 * Example (Comparison):
	 *     title: "Summary size limit"
	 *     description: "Determines if a summary is less than 100 chars"
	 *     expression: "document.summary.size() < 100"
	 * Example (Equality):
	 *     title: "Requestor is owner"
	 *     description: "Determines if requestor is the document owner"
	 *     expression: "document.owner == request.auth.claims.email"
	 * Example (Logic):
	 *     title: "Public documents"
	 *     description: "Determine whether the document should be publicly visible"
	 *     expression: "document.type != 'private' && document.type != 'internal'"
	 * Example (Data Manipulation):
	 *     title: "Notification string"
	 *     description: "Create a notification string with a timestamp."
	 *     expression: "'New message received at ' + string(document.create_time)"
	 * The exact variables and functions that may be referenced within an expression
	 * are determined by the service that evaluates it. See the service
	 * documentation for additional information.
	 */
	export interface Expr {

		/**
		 * Optional. Description of the expression. This is a longer text which
		 * describes the expression, e.g. when hovered over it in a UI.
		 */
		description?: string | null;

		/**
		 * Textual representation of an expression in Common Expression Language
		 * syntax.
		 */
		expression?: string | null;

		/**
		 * Optional. String indicating the location of the expression for error
		 * reporting, e.g. a file name and a position in the file.
		 */
		location?: string | null;

		/**
		 * Optional. Title for the expression, i.e. a short string describing
		 * its purpose. This can be used e.g. in UIs which allow to enter the
		 * expression.
		 */
		title?: string | null;
	}


	/**
	 * Metadata associated with a parent-child relationship appearing in a
	 * PlanNode.
	 */
	export interface ChildLink {

		/** The node to which the link points. */
		childIndex?: number | null;

		/**
		 * The type of the link. For example, in Hash Joins this could be used to
		 * distinguish between the build child and the probe child, or in the case
		 * of the child being an output variable, to represent the tag associated
		 * with the output variable.
		 */
		type?: string | null;

		/**
		 * Only present if the child node is SCALAR and corresponds
		 * to an output variable of the parent node. The field carries the name of
		 * the output variable.
		 * For example, a `TableScan` operator that reads rows from a table will
		 * have child links to the `SCALAR` nodes representing the output variables
		 * created for each column that is read by the operator. The corresponding
		 * `variable` fields will be set to the variable names assigned to the
		 * columns.
		 */
		variable?: string | null;
	}


	/** The request for Commit. */
	export interface CommitRequest {

		/**
		 * The mutations to be executed when this transaction commits. All
		 * mutations are applied atomically, in the order they appear in
		 * this list.
		 */
		mutations?: Array<Mutation> | null;

		/**
		 * # Transactions
		 * Each session can have at most one active transaction at a time. After the
		 * active transaction is completed, the session can immediately be
		 * re-used for the next transaction. It is not necessary to create a
		 * new session for each transaction.
		 * # Transaction Modes
		 * Cloud Spanner supports three transaction modes:
		 * 1. Locking read-write. This type of transaction is the only way
		 * to write data into Cloud Spanner. These transactions rely on
		 * pessimistic locking and, if necessary, two-phase commit.
		 * Locking read-write transactions may abort, requiring the
		 * application to retry.
		 * 2. Snapshot read-only. This transaction type provides guaranteed
		 * consistency across several reads, but does not allow
		 * writes. Snapshot read-only transactions can be configured to
		 * read at timestamps in the past. Snapshot read-only
		 * transactions do not need to be committed.
		 * 3. Partitioned DML. This type of transaction is used to execute
		 * a single Partitioned DML statement. Partitioned DML partitions
		 * the key space and runs the DML statement over each partition
		 * in parallel using separate, internal transactions that commit
		 * independently. Partitioned DML transactions do not need to be
		 * committed.
		 * For transactions that only read, snapshot read-only transactions
		 * provide simpler semantics and are almost always faster. In
		 * particular, read-only transactions do not take locks, so they do
		 * not conflict with read-write transactions. As a consequence of not
		 * taking locks, they also do not abort, so retry loops are not needed.
		 * Transactions may only read/write data in a single database. They
		 * may, however, read/write data in different tables within that
		 * database.
		 * ## Locking Read-Write Transactions
		 * Locking transactions may be used to atomically read-modify-write
		 * data anywhere in a database. This type of transaction is externally
		 * consistent.
		 * Clients should attempt to minimize the amount of time a transaction
		 * is active. Faster transactions commit with higher probability
		 * and cause less contention. Cloud Spanner attempts to keep read locks
		 * active as long as the transaction continues to do reads, and the
		 * transaction has not been terminated by
		 * Commit or
		 * Rollback.  Long periods of
		 * inactivity at the client may cause Cloud Spanner to release a
		 * transaction's locks and abort it.
		 * Conceptually, a read-write transaction consists of zero or more
		 * reads or SQL statements followed by
		 * Commit. At any time before
		 * Commit, the client can send a
		 * Rollback request to abort the
		 * transaction.
		 * ### Semantics
		 * Cloud Spanner can commit the transaction if all read locks it acquired
		 * are still valid at commit time, and it is able to acquire write
		 * locks for all writes. Cloud Spanner can abort the transaction for any
		 * reason. If a commit attempt returns `ABORTED`, Cloud Spanner guarantees
		 * that the transaction has not modified any user data in Cloud Spanner.
		 * Unless the transaction commits, Cloud Spanner makes no guarantees about
		 * how long the transaction's locks were held for. It is an error to
		 * use Cloud Spanner locks for any sort of mutual exclusion other than
		 * between Cloud Spanner transactions themselves.
		 * ### Retrying Aborted Transactions
		 * When a transaction aborts, the application can choose to retry the
		 * whole transaction again. To maximize the chances of successfully
		 * committing the retry, the client should execute the retry in the
		 * same session as the original attempt. The original session's lock
		 * priority increases with each consecutive abort, meaning that each
		 * attempt has a slightly better chance of success than the previous.
		 * Under some circumstances (e.g., many transactions attempting to
		 * modify the same row(s)), a transaction can abort many times in a
		 * short period before successfully committing. Thus, it is not a good
		 * idea to cap the number of retries a transaction can attempt;
		 * instead, it is better to limit the total amount of wall time spent
		 * retrying.
		 * ### Idle Transactions
		 * A transaction is considered idle if it has no outstanding reads or
		 * SQL queries and has not started a read or SQL query within the last 10
		 * seconds. Idle transactions can be aborted by Cloud Spanner so that they
		 * don't hold on to locks indefinitely. In that case, the commit will
		 * fail with error `ABORTED`.
		 * If this behavior is undesirable, periodically executing a simple
		 * SQL query in the transaction (e.g., `SELECT 1`) prevents the
		 * transaction from becoming idle.
		 * ## Snapshot Read-Only Transactions
		 * Snapshot read-only transactions provides a simpler method than
		 * locking read-write transactions for doing several consistent
		 * reads. However, this type of transaction does not support writes.
		 * Snapshot transactions do not take locks. Instead, they work by
		 * choosing a Cloud Spanner timestamp, then executing all reads at that
		 * timestamp. Since they do not acquire locks, they do not block
		 * concurrent read-write transactions.
		 * Unlike locking read-write transactions, snapshot read-only
		 * transactions never abort. They can fail if the chosen read
		 * timestamp is garbage collected; however, the default garbage
		 * collection policy is generous enough that most applications do not
		 * need to worry about this in practice.
		 * Snapshot read-only transactions do not need to call
		 * Commit or
		 * Rollback (and in fact are not
		 * permitted to do so).
		 * To execute a snapshot transaction, the client specifies a timestamp
		 * bound, which tells Cloud Spanner how to choose a read timestamp.
		 * The types of timestamp bound are:
		 * - Strong (the default).
		 * - Bounded staleness.
		 * - Exact staleness.
		 * If the Cloud Spanner database to be read is geographically distributed,
		 * stale read-only transactions can execute more quickly than strong
		 * or read-write transaction, because they are able to execute far
		 * from the leader replica.
		 * Each type of timestamp bound is discussed in detail below.
		 * ### Strong
		 * Strong reads are guaranteed to see the effects of all transactions
		 * that have committed before the start of the read. Furthermore, all
		 * rows yielded by a single read are consistent with each other -- if
		 * any part of the read observes a transaction, all parts of the read
		 * see the transaction.
		 * Strong reads are not repeatable: two consecutive strong read-only
		 * transactions might return inconsistent results if there are
		 * concurrent writes. If consistency across reads is required, the
		 * reads should be executed within a transaction or at an exact read
		 * timestamp.
		 * See TransactionOptions.ReadOnly.strong.
		 * ### Exact Staleness
		 * These timestamp bounds execute reads at a user-specified
		 * timestamp. Reads at a timestamp are guaranteed to see a consistent
		 * prefix of the global transaction history: they observe
		 * modifications done by all transactions with a commit timestamp <=
		 * the read timestamp, and observe none of the modifications done by
		 * transactions with a larger commit timestamp. They will block until
		 * all conflicting transactions that may be assigned commit timestamps
		 * <= the read timestamp have finished.
		 * The timestamp can either be expressed as an absolute Cloud Spanner commit
		 * timestamp or a staleness relative to the current time.
		 * These modes do not require a "negotiation phase" to pick a
		 * timestamp. As a result, they execute slightly faster than the
		 * equivalent boundedly stale concurrency modes. On the other hand,
		 * boundedly stale reads usually return fresher results.
		 * See TransactionOptions.ReadOnly.read_timestamp and
		 * TransactionOptions.ReadOnly.exact_staleness.
		 * ### Bounded Staleness
		 * Bounded staleness modes allow Cloud Spanner to pick the read timestamp,
		 * subject to a user-provided staleness bound. Cloud Spanner chooses the
		 * newest timestamp within the staleness bound that allows execution
		 * of the reads at the closest available replica without blocking.
		 * All rows yielded are consistent with each other -- if any part of
		 * the read observes a transaction, all parts of the read see the
		 * transaction. Boundedly stale reads are not repeatable: two stale
		 * reads, even if they use the same staleness bound, can execute at
		 * different timestamps and thus return inconsistent results.
		 * Boundedly stale reads execute in two phases: the first phase
		 * negotiates a timestamp among all replicas needed to serve the
		 * read. In the second phase, reads are executed at the negotiated
		 * timestamp.
		 * As a result of the two phase execution, bounded staleness reads are
		 * usually a little slower than comparable exact staleness
		 * reads. However, they are typically able to return fresher
		 * results, and are more likely to execute at the closest replica.
		 * Because the timestamp negotiation requires up-front knowledge of
		 * which rows will be read, it can only be used with single-use
		 * read-only transactions.
		 * See TransactionOptions.ReadOnly.max_staleness and
		 * TransactionOptions.ReadOnly.min_read_timestamp.
		 * ### Old Read Timestamps and Garbage Collection
		 * Cloud Spanner continuously garbage collects deleted and overwritten data
		 * in the background to reclaim storage space. This process is known
		 * as "version GC". By default, version GC reclaims versions after they
		 * are one hour old. Because of this, Cloud Spanner cannot perform reads
		 * at read timestamps more than one hour in the past. This
		 * restriction also applies to in-progress reads and/or SQL queries whose
		 * timestamp become too old while executing. Reads and SQL queries with
		 * too-old read timestamps fail with the error `FAILED_PRECONDITION`.
		 * ## Partitioned DML Transactions
		 * Partitioned DML transactions are used to execute DML statements with a
		 * different execution strategy that provides different, and often better,
		 * scalability properties for large, table-wide operations than DML in a
		 * ReadWrite transaction. Smaller scoped statements, such as an OLTP workload,
		 * should prefer using ReadWrite transactions.
		 * Partitioned DML partitions the keyspace and runs the DML statement on each
		 * partition in separate, internal transactions. These transactions commit
		 * automatically when complete, and run independently from one another.
		 * To reduce lock contention, this execution strategy only acquires read locks
		 * on rows that match the WHERE clause of the statement. Additionally, the
		 * smaller per-partition transactions hold locks for less time.
		 * That said, Partitioned DML is not a drop-in replacement for standard DML used
		 * in ReadWrite transactions.
		 * - The DML statement must be fully-partitionable. Specifically, the statement
		 * must be expressible as the union of many statements which each access only
		 * a single row of the table.
		 * - The statement is not applied atomically to all rows of the table. Rather,
		 * the statement is applied atomically to partitions of the table, in
		 * independent transactions. Secondary index rows are updated atomically
		 * with the base table rows.
		 * - Partitioned DML does not guarantee exactly-once execution semantics
		 * against a partition. The statement will be applied at least once to each
		 * partition. It is strongly recommended that the DML statement should be
		 * idempotent to avoid unexpected results. For instance, it is potentially
		 * dangerous to run a statement such as
		 * `UPDATE table SET column = column + 1` as it could be run multiple times
		 * against some rows.
		 * - The partitions are committed automatically - there is no support for
		 * Commit or Rollback. If the call returns an error, or if the client issuing
		 * the ExecuteSql call dies, it is possible that some rows had the statement
		 * executed on them successfully. It is also possible that statement was
		 * never executed against other rows.
		 * - Partitioned DML transactions may only contain the execution of a single
		 * DML statement via ExecuteSql or ExecuteStreamingSql.
		 * - If any error is encountered during the execution of the partitioned DML
		 * operation (for instance, a UNIQUE INDEX violation, division by zero, or a
		 * value that cannot be stored due to schema constraints), then the
		 * operation is stopped at that point and an error is returned. It is
		 * possible that at this point, some partitions have been committed (or even
		 * committed multiple times), and other partitions have not been run at all.
		 * Given the above, Partitioned DML is good fit for large, database-wide,
		 * operations that are idempotent, such as deleting old rows from a very large
		 * table.
		 */
		singleUseTransaction?: TransactionOptions | null;

		/** Commit a previously-started transaction. */
		transactionId?: string | null;
	}


	/**
	 * A modification to one or more Cloud Spanner rows.  Mutations can be
	 * applied to a Cloud Spanner database by sending them in a
	 * Commit call.
	 */
	export interface Mutation {

		/** Arguments to delete operations. */
		delete?: Delete | null;

		/**
		 * Arguments to insert, update, insert_or_update, and
		 * replace operations.
		 */
		insert?: Write | null;

		/**
		 * Arguments to insert, update, insert_or_update, and
		 * replace operations.
		 */
		insertOrUpdate?: Write | null;

		/**
		 * Arguments to insert, update, insert_or_update, and
		 * replace operations.
		 */
		replace?: Write | null;

		/**
		 * Arguments to insert, update, insert_or_update, and
		 * replace operations.
		 */
		update?: Write | null;
	}


	/** Arguments to delete operations. */
	export interface Delete {

		/**
		 * `KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All
		 * the keys are expected to be in the same table or index. The keys need
		 * not be sorted in any particular way.
		 * If the same key is specified multiple times in the set (for example
		 * if two ranges, two keys, or a key and a range overlap), Cloud Spanner
		 * behaves as if the key were only specified once.
		 */
		keySet?: KeySet | null;

		/** Required. The table whose rows will be deleted. */
		table?: string | null;
	}


	/**
	 * `KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All
	 * the keys are expected to be in the same table or index. The keys need
	 * not be sorted in any particular way.
	 * If the same key is specified multiple times in the set (for example
	 * if two ranges, two keys, or a key and a range overlap), Cloud Spanner
	 * behaves as if the key were only specified once.
	 */
	export interface KeySet {

		/**
		 * For convenience `all` can be set to `true` to indicate that this
		 * `KeySet` matches all keys in the table or index. Note that any keys
		 * specified in `keys` or `ranges` are only yielded once.
		 */
		all?: boolean | null;

		/**
		 * A list of specific keys. Entries in `keys` should have exactly as
		 * many elements as there are columns in the primary or index key
		 * with which this `KeySet` is used.  Individual key values are
		 * encoded as described here.
		 */
		keys?: Array<string> | null;

		/**
		 * A list of key ranges. See KeyRange for more information about
		 * key range specifications.
		 */
		ranges?: Array<KeyRange> | null;
	}


	/**
	 * KeyRange represents a range of rows in a table or index.
	 * A range has a start key and an end key. These keys can be open or
	 * closed, indicating if the range includes rows with that key.
	 * Keys are represented by lists, where the ith value in the list
	 * corresponds to the ith component of the table or index primary key.
	 * Individual values are encoded as described
	 * here.
	 * For example, consider the following table definition:
	 *     CREATE TABLE UserEvents (
	 *       UserName STRING(MAX),
	 *       EventDate STRING(10)
	 *     ) PRIMARY KEY(UserName, EventDate);
	 * The following keys name rows in this table:
	 *     "Bob", "2014-09-23"
	 * Since the `UserEvents` table's `PRIMARY KEY` clause names two
	 * columns, each `UserEvents` key has two elements; the first is the
	 * `UserName`, and the second is the `EventDate`.
	 * Key ranges with multiple components are interpreted
	 * lexicographically by component using the table or index key's declared
	 * sort order. For example, the following range returns all events for
	 * user `"Bob"` that occurred in the year 2015:
	 *     "start_closed": ["Bob", "2015-01-01"]
	 *     "end_closed": ["Bob", "2015-12-31"]
	 * Start and end keys can omit trailing key components. This affects the
	 * inclusion and exclusion of rows that exactly match the provided key
	 * components: if the key is closed, then rows that exactly match the
	 * provided components are included; if the key is open, then rows
	 * that exactly match are not included.
	 * For example, the following range includes all events for `"Bob"` that
	 * occurred during and after the year 2000:
	 *     "start_closed": ["Bob", "2000-01-01"]
	 *     "end_closed": ["Bob"]
	 * The next example retrieves all events for `"Bob"`:
	 *     "start_closed": ["Bob"]
	 *     "end_closed": ["Bob"]
	 * To retrieve events before the year 2000:
	 *     "start_closed": ["Bob"]
	 *     "end_open": ["Bob", "2000-01-01"]
	 * The following range includes all rows in the table:
	 *     "start_closed": []
	 *     "end_closed": []
	 * This range returns all users whose `UserName` begins with any
	 * character from A to C:
	 *     "start_closed": ["A"]
	 *     "end_open": ["D"]
	 * This range returns all users whose `UserName` begins with B:
	 *     "start_closed": ["B"]
	 *     "end_open": ["C"]
	 * Key ranges honor column sort order. For example, suppose a table is
	 * defined as follows:
	 *     CREATE TABLE DescendingSortedTable {
	 *       Key INT64,
	 *       ...
	 *     ) PRIMARY KEY(Key DESC);
	 * The following range retrieves all rows with key values between 1
	 * and 100 inclusive:
	 *     "start_closed": ["100"]
	 *     "end_closed": ["1"]
	 * Note that 100 is passed as the start, and 1 is passed as the end,
	 * because `Key` is a descending column in the schema.
	 */
	export interface KeyRange {

		/**
		 * If the end is closed, then the range includes all rows whose
		 * first `len(end_closed)` key columns exactly match `end_closed`.
		 */
		endClosed?: Array<string> | null;

		/**
		 * If the end is open, then the range excludes rows whose first
		 * `len(end_open)` key columns exactly match `end_open`.
		 */
		endOpen?: Array<string> | null;

		/**
		 * If the start is closed, then the range includes all rows whose
		 * first `len(start_closed)` key columns exactly match `start_closed`.
		 */
		startClosed?: Array<string> | null;

		/**
		 * If the start is open, then the range excludes rows whose first
		 * `len(start_open)` key columns exactly match `start_open`.
		 */
		startOpen?: Array<string> | null;
	}


	/**
	 * Arguments to insert, update, insert_or_update, and
	 * replace operations.
	 */
	export interface Write {

		/**
		 * The names of the columns in table to be written.
		 * The list of columns must contain enough columns to allow
		 * Cloud Spanner to derive values for all primary key columns in the
		 * row(s) to be modified.
		 */
		columns?: Array<string> | null;

		/** Required. The table whose rows will be written. */
		table?: string | null;

		/**
		 * The values to be written. `values` can contain more than one
		 * list of values. If it does, then multiple rows are written, one
		 * for each entry in `values`. Each list in `values` must have
		 * exactly as many entries as there are entries in columns
		 * above. Sending multiple lists is equivalent to sending multiple
		 * `Mutation`s, each containing one `values` entry and repeating
		 * table and columns. Individual values in each list are
		 * encoded as described here.
		 */
		values?: Array<string> | null;
	}


	/** The response for Commit. */
	export interface CommitResponse {

		/** The Cloud Spanner timestamp at which the transaction committed. */
		commitTimestamp?: string | null;
	}


	/**
	 * Metadata type for the operation returned by
	 * CreateBackup.
	 */
	export interface CreateBackupMetadata {

		/**
		 * The time at which cancellation of this operation was received.
		 * Operations.CancelOperation
		 * starts asynchronous cancellation on a long-running operation. The server
		 * makes a best effort to cancel the operation, but success is not guaranteed.
		 * Clients can use
		 * Operations.GetOperation or
		 * other methods to check whether the cancellation succeeded or whether the
		 * operation completed despite cancellation. On successful cancellation,
		 * the operation is not deleted; instead, it becomes an operation with
		 * an Operation.error value with a google.rpc.Status.code of 1,
		 * corresponding to `Code.CANCELLED`.
		 */
		cancelTime?: string | null;

		/** The name of the database the backup is created from. */
		database?: string | null;

		/** The name of the backup being created. */
		name?: string | null;

		/**
		 * Encapsulates progress related information for a Cloud Spanner long
		 * running operation.
		 */
		progress?: OperationProgress | null;
	}


	/**
	 * Encapsulates progress related information for a Cloud Spanner long
	 * running operation.
	 */
	export interface OperationProgress {

		/**
		 * If set, the time at which this operation failed or was completed
		 * successfully.
		 */
		endTime?: string | null;

		/**
		 * Percent completion of the operation.
		 * Values are between 0 and 100 inclusive.
		 */
		progressPercent?: number | null;

		/** Time the request was received. */
		startTime?: string | null;
	}


	/**
	 * Metadata type for the operation returned by
	 * CreateDatabase.
	 */
	export interface CreateDatabaseMetadata {

		/** The database being created. */
		database?: string | null;
	}


	/** The request for CreateDatabase. */
	export interface CreateDatabaseRequest {

		/**
		 * Required. A `CREATE DATABASE` statement, which specifies the ID of the
		 * new database.  The database ID must conform to the regular expression
		 * `a-z*[a-z0-9]` and be between 2 and 30 characters in length.
		 * If the database ID is a reserved word or if it contains a hyphen, the
		 * database ID must be enclosed in backticks (`` ` ``).
		 */
		createStatement?: string | null;

		/**
		 * Optional. A list of DDL statements to run inside the newly created
		 * database. Statements can create tables, indexes, etc. These
		 * statements execute atomically with the creation of the database:
		 * if there is an error in any statement, the database is not created.
		 */
		extraStatements?: Array<string> | null;
	}


	/**
	 * Metadata type for the operation returned by
	 * CreateInstance.
	 */
	export interface CreateInstanceMetadata {

		/**
		 * The time at which this operation was cancelled. If set, this operation is
		 * in the process of undoing itself (which is guaranteed to succeed) and
		 * cannot be cancelled again.
		 */
		cancelTime?: string | null;

		/** The time at which this operation failed or was completed successfully. */
		endTime?: string | null;

		/** An isolated set of Cloud Spanner resources on which databases can be hosted. */
		instance?: Instance | null;

		/**
		 * The time at which the
		 * CreateInstance request was
		 * received.
		 */
		startTime?: string | null;
	}


	/** An isolated set of Cloud Spanner resources on which databases can be hosted. */
	export interface Instance {

		/**
		 * Required. The name of the instance's configuration. Values are of the form
		 * `projects/<project>/instanceConfigs/<configuration>`. See
		 * also InstanceConfig and
		 * ListInstanceConfigs.
		 */
		config?: string | null;

		/**
		 * Required. The descriptive name for this instance as it appears in UIs.
		 * Must be unique per project and between 4 and 30 characters in length.
		 */
		displayName?: string | null;

		/** Deprecated. This field is not populated. */
		endpointUris?: Array<string> | null;

		/**
		 * Cloud Labels are a flexible and lightweight mechanism for organizing cloud
		 * resources into groups that reflect a customer's organizational needs and
		 * deployment strategies. Cloud Labels can be used to filter collections of
		 * resources. They can be used to control how resource metrics are aggregated.
		 * And they can be used as arguments to policy management rules (e.g. route,
		 * firewall, load balancing, etc.).
		 * * Label keys must be between 1 and 63 characters long and must conform to
		 * the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`.
		 * * Label values must be between 0 and 63 characters long and must conform
		 * to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.
		 * * No more than 64 labels can be associated with a given resource.
		 * See https://goo.gl/xmQnxf for more information on and examples of labels.
		 * If you plan to use labels in your own code, please note that additional
		 * characters may be allowed in the future. And so you are advised to use an
		 * internal label representation, such as JSON, which doesn't rely upon
		 * specific characters being disallowed.  For example, representing labels
		 * as the string:  name + "_" + value  would prove problematic if we were to
		 * allow "_" in a future release.
		 */
		labels?: {[id: string]: string } | null;

		/**
		 * Required. A unique identifier for the instance, which cannot be changed
		 * after the instance is created. Values are of the form
		 * `projects/<project>/instances/a-z*[a-z0-9]`. The final
		 * segment of the name must be between 2 and 64 characters in length.
		 */
		name?: string | null;

		/**
		 * The number of nodes allocated to this instance. This
		 * may be zero in API responses for instances that are not yet in state
		 * `READY`.
		 * See [the
		 * documentation](https://cloud.google.com/spanner/docs/instances#node_count)
		 * for more information about nodes.
		 */
		nodeCount?: number | null;

		/**
		 * Output only. The current instance state. For
		 * CreateInstance, the state must be
		 * either omitted or set to `CREATING`. For
		 * UpdateInstance, the state must be
		 * either omitted or set to `READY`.
		 */
		state?: BackupState | null;
	}


	/** The request for CreateInstance. */
	export interface CreateInstanceRequest {

		/** An isolated set of Cloud Spanner resources on which databases can be hosted. */
		instance?: Instance | null;

		/**
		 * Required. The ID of the instance to create.  Valid identifiers are of the
		 * form `a-z*[a-z0-9]` and must be between 2 and 64 characters in
		 * length.
		 */
		instanceId?: string | null;
	}


	/** The request for CreateSession. */
	export interface CreateSessionRequest {

		/** A session in the Cloud Spanner API. */
		session?: Session | null;
	}


	/** A Cloud Spanner database. */
	export interface Database {

		/** Output only. If exists, the time at which the database creation started. */
		createTime?: string | null;

		/**
		 * Required. The name of the database. Values are of the form
		 * `projects/<project>/instances/<instance>/databases/<database>`,
		 * where `<database>` is as specified in the `CREATE DATABASE`
		 * statement. This name can be passed to other API methods to
		 * identify the database.
		 */
		name?: string | null;

		/** Information about the database restore. */
		restoreInfo?: RestoreInfo | null;

		/** Output only. The current database state. */
		state?: DatabaseState | null;
	}


	/** Information about the database restore. */
	export interface RestoreInfo {

		/** Information about a backup. */
		backupInfo?: BackupInfo | null;

		/** The type of the restore source. */
		sourceType?: RestoreInfoSourceType | null;
	}

	export enum RestoreInfoSourceType { TYPE_UNSPECIFIED = 0, BACKUP = 1 }

	export enum DatabaseState { STATE_UNSPECIFIED = 0, CREATING = 1, READY = 2, READY_OPTIMIZING = 3 }


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/** The request for ExecuteBatchDml. */
	export interface ExecuteBatchDmlRequest {

		/**
		 * Required. A per-transaction sequence number used to identify this request. This field
		 * makes each request idempotent such that if the request is received multiple
		 * times, at most one will succeed.
		 * The sequence number must be monotonically increasing within the
		 * transaction. If a request arrives for the first time with an out-of-order
		 * sequence number, the transaction may be aborted. Replays of previously
		 * handled requests will yield the same response as the first execution.
		 */
		seqno?: string | null;

		/**
		 * Required. The list of statements to execute in this batch. Statements are executed
		 * serially, such that the effects of statement `i` are visible to statement
		 * `i+1`. Each statement must be a DML statement. Execution stops at the
		 * first failed statement; the remaining statements are not executed.
		 * Callers must provide at least one statement.
		 */
		statements?: Array<Statement> | null;

		/**
		 * This message is used to select the transaction in which a
		 * Read or
		 * ExecuteSql call runs.
		 * See TransactionOptions for more information about transactions.
		 */
		transaction?: TransactionSelector | null;
	}


	/** A single DML statement. */
	export interface Statement {

		/**
		 * It is not always possible for Cloud Spanner to infer the right SQL type
		 * from a JSON value.  For example, values of type `BYTES` and values
		 * of type `STRING` both appear in params as JSON strings.
		 * In these cases, `param_types` can be used to specify the exact
		 * SQL type for some or all of the SQL statement parameters. See the
		 * definition of Type for more information
		 * about SQL types.
		 */
		paramTypes?: {[id: string]: Type } | null;

		/**
		 * Parameter names and values that bind to placeholders in the DML string.
		 * A parameter placeholder consists of the `@` character followed by the
		 * parameter name (for example, `@firstName`). Parameter names can contain
		 * letters, numbers, and underscores.
		 * Parameters can appear anywhere that a literal value is expected.  The
		 * same parameter name can be used more than once, for example:
		 * `"WHERE id > @msg_id AND id < @msg_id + 100"`
		 * It is an error to execute a SQL statement with unbound parameters.
		 */
		params?: {[id: string]: any } | null;

		/** Required. The DML string. */
		sql?: string | null;
	}


	/**
	 * `Type` indicates the type of a Cloud Spanner value, as might be stored in a
	 * table cell or returned from an SQL query.
	 */
	export interface Type {

		/**
		 * `Type` indicates the type of a Cloud Spanner value, as might be stored in a
		 * table cell or returned from an SQL query.
		 */
		arrayElementType?: Type | null;

		/** Required. The TypeCode for this type. */
		code?: TypeCode | null;

		/** `StructType` defines the fields of a STRUCT type. */
		structType?: StructType | null;
	}

	export enum TypeCode { TYPE_CODE_UNSPECIFIED = 0, BOOL = 1, INT64 = 2, FLOAT64 = 3, TIMESTAMP = 4, DATE = 5, STRING = 6, BYTES = 7, ARRAY = 8, STRUCT = 9 }


	/** `StructType` defines the fields of a STRUCT type. */
	export interface StructType {

		/**
		 * The list of fields that make up this struct. Order is
		 * significant, because values of this struct type are represented as
		 * lists, where the order of field values matches the order of
		 * fields in the StructType. In turn, the order of fields
		 * matches the order of columns in a read request, or the order of
		 * fields in the `SELECT` clause of a query.
		 */
		fields?: Array<Field> | null;
	}


	/** Message representing a single field of a struct. */
	export interface Field {

		/**
		 * The name of the field. For reads, this is the column name. For
		 * SQL queries, it is the column alias (e.g., `"Word"` in the
		 * query `"SELECT 'hello' AS Word"`), or the column name (e.g.,
		 * `"ColName"` in the query `"SELECT ColName FROM Table"`). Some
		 * columns might have an empty name (e.g., !"SELECT
		 * UPPER(ColName)"`). Note that a query result can contain
		 * multiple fields with the same name.
		 */
		name?: string | null;

		/**
		 * `Type` indicates the type of a Cloud Spanner value, as might be stored in a
		 * table cell or returned from an SQL query.
		 */
		type?: Type | null;
	}


	/**
	 * This message is used to select the transaction in which a
	 * Read or
	 * ExecuteSql call runs.
	 * See TransactionOptions for more information about transactions.
	 */
	export interface TransactionSelector {

		/**
		 * # Transactions
		 * Each session can have at most one active transaction at a time. After the
		 * active transaction is completed, the session can immediately be
		 * re-used for the next transaction. It is not necessary to create a
		 * new session for each transaction.
		 * # Transaction Modes
		 * Cloud Spanner supports three transaction modes:
		 * 1. Locking read-write. This type of transaction is the only way
		 * to write data into Cloud Spanner. These transactions rely on
		 * pessimistic locking and, if necessary, two-phase commit.
		 * Locking read-write transactions may abort, requiring the
		 * application to retry.
		 * 2. Snapshot read-only. This transaction type provides guaranteed
		 * consistency across several reads, but does not allow
		 * writes. Snapshot read-only transactions can be configured to
		 * read at timestamps in the past. Snapshot read-only
		 * transactions do not need to be committed.
		 * 3. Partitioned DML. This type of transaction is used to execute
		 * a single Partitioned DML statement. Partitioned DML partitions
		 * the key space and runs the DML statement over each partition
		 * in parallel using separate, internal transactions that commit
		 * independently. Partitioned DML transactions do not need to be
		 * committed.
		 * For transactions that only read, snapshot read-only transactions
		 * provide simpler semantics and are almost always faster. In
		 * particular, read-only transactions do not take locks, so they do
		 * not conflict with read-write transactions. As a consequence of not
		 * taking locks, they also do not abort, so retry loops are not needed.
		 * Transactions may only read/write data in a single database. They
		 * may, however, read/write data in different tables within that
		 * database.
		 * ## Locking Read-Write Transactions
		 * Locking transactions may be used to atomically read-modify-write
		 * data anywhere in a database. This type of transaction is externally
		 * consistent.
		 * Clients should attempt to minimize the amount of time a transaction
		 * is active. Faster transactions commit with higher probability
		 * and cause less contention. Cloud Spanner attempts to keep read locks
		 * active as long as the transaction continues to do reads, and the
		 * transaction has not been terminated by
		 * Commit or
		 * Rollback.  Long periods of
		 * inactivity at the client may cause Cloud Spanner to release a
		 * transaction's locks and abort it.
		 * Conceptually, a read-write transaction consists of zero or more
		 * reads or SQL statements followed by
		 * Commit. At any time before
		 * Commit, the client can send a
		 * Rollback request to abort the
		 * transaction.
		 * ### Semantics
		 * Cloud Spanner can commit the transaction if all read locks it acquired
		 * are still valid at commit time, and it is able to acquire write
		 * locks for all writes. Cloud Spanner can abort the transaction for any
		 * reason. If a commit attempt returns `ABORTED`, Cloud Spanner guarantees
		 * that the transaction has not modified any user data in Cloud Spanner.
		 * Unless the transaction commits, Cloud Spanner makes no guarantees about
		 * how long the transaction's locks were held for. It is an error to
		 * use Cloud Spanner locks for any sort of mutual exclusion other than
		 * between Cloud Spanner transactions themselves.
		 * ### Retrying Aborted Transactions
		 * When a transaction aborts, the application can choose to retry the
		 * whole transaction again. To maximize the chances of successfully
		 * committing the retry, the client should execute the retry in the
		 * same session as the original attempt. The original session's lock
		 * priority increases with each consecutive abort, meaning that each
		 * attempt has a slightly better chance of success than the previous.
		 * Under some circumstances (e.g., many transactions attempting to
		 * modify the same row(s)), a transaction can abort many times in a
		 * short period before successfully committing. Thus, it is not a good
		 * idea to cap the number of retries a transaction can attempt;
		 * instead, it is better to limit the total amount of wall time spent
		 * retrying.
		 * ### Idle Transactions
		 * A transaction is considered idle if it has no outstanding reads or
		 * SQL queries and has not started a read or SQL query within the last 10
		 * seconds. Idle transactions can be aborted by Cloud Spanner so that they
		 * don't hold on to locks indefinitely. In that case, the commit will
		 * fail with error `ABORTED`.
		 * If this behavior is undesirable, periodically executing a simple
		 * SQL query in the transaction (e.g., `SELECT 1`) prevents the
		 * transaction from becoming idle.
		 * ## Snapshot Read-Only Transactions
		 * Snapshot read-only transactions provides a simpler method than
		 * locking read-write transactions for doing several consistent
		 * reads. However, this type of transaction does not support writes.
		 * Snapshot transactions do not take locks. Instead, they work by
		 * choosing a Cloud Spanner timestamp, then executing all reads at that
		 * timestamp. Since they do not acquire locks, they do not block
		 * concurrent read-write transactions.
		 * Unlike locking read-write transactions, snapshot read-only
		 * transactions never abort. They can fail if the chosen read
		 * timestamp is garbage collected; however, the default garbage
		 * collection policy is generous enough that most applications do not
		 * need to worry about this in practice.
		 * Snapshot read-only transactions do not need to call
		 * Commit or
		 * Rollback (and in fact are not
		 * permitted to do so).
		 * To execute a snapshot transaction, the client specifies a timestamp
		 * bound, which tells Cloud Spanner how to choose a read timestamp.
		 * The types of timestamp bound are:
		 * - Strong (the default).
		 * - Bounded staleness.
		 * - Exact staleness.
		 * If the Cloud Spanner database to be read is geographically distributed,
		 * stale read-only transactions can execute more quickly than strong
		 * or read-write transaction, because they are able to execute far
		 * from the leader replica.
		 * Each type of timestamp bound is discussed in detail below.
		 * ### Strong
		 * Strong reads are guaranteed to see the effects of all transactions
		 * that have committed before the start of the read. Furthermore, all
		 * rows yielded by a single read are consistent with each other -- if
		 * any part of the read observes a transaction, all parts of the read
		 * see the transaction.
		 * Strong reads are not repeatable: two consecutive strong read-only
		 * transactions might return inconsistent results if there are
		 * concurrent writes. If consistency across reads is required, the
		 * reads should be executed within a transaction or at an exact read
		 * timestamp.
		 * See TransactionOptions.ReadOnly.strong.
		 * ### Exact Staleness
		 * These timestamp bounds execute reads at a user-specified
		 * timestamp. Reads at a timestamp are guaranteed to see a consistent
		 * prefix of the global transaction history: they observe
		 * modifications done by all transactions with a commit timestamp <=
		 * the read timestamp, and observe none of the modifications done by
		 * transactions with a larger commit timestamp. They will block until
		 * all conflicting transactions that may be assigned commit timestamps
		 * <= the read timestamp have finished.
		 * The timestamp can either be expressed as an absolute Cloud Spanner commit
		 * timestamp or a staleness relative to the current time.
		 * These modes do not require a "negotiation phase" to pick a
		 * timestamp. As a result, they execute slightly faster than the
		 * equivalent boundedly stale concurrency modes. On the other hand,
		 * boundedly stale reads usually return fresher results.
		 * See TransactionOptions.ReadOnly.read_timestamp and
		 * TransactionOptions.ReadOnly.exact_staleness.
		 * ### Bounded Staleness
		 * Bounded staleness modes allow Cloud Spanner to pick the read timestamp,
		 * subject to a user-provided staleness bound. Cloud Spanner chooses the
		 * newest timestamp within the staleness bound that allows execution
		 * of the reads at the closest available replica without blocking.
		 * All rows yielded are consistent with each other -- if any part of
		 * the read observes a transaction, all parts of the read see the
		 * transaction. Boundedly stale reads are not repeatable: two stale
		 * reads, even if they use the same staleness bound, can execute at
		 * different timestamps and thus return inconsistent results.
		 * Boundedly stale reads execute in two phases: the first phase
		 * negotiates a timestamp among all replicas needed to serve the
		 * read. In the second phase, reads are executed at the negotiated
		 * timestamp.
		 * As a result of the two phase execution, bounded staleness reads are
		 * usually a little slower than comparable exact staleness
		 * reads. However, they are typically able to return fresher
		 * results, and are more likely to execute at the closest replica.
		 * Because the timestamp negotiation requires up-front knowledge of
		 * which rows will be read, it can only be used with single-use
		 * read-only transactions.
		 * See TransactionOptions.ReadOnly.max_staleness and
		 * TransactionOptions.ReadOnly.min_read_timestamp.
		 * ### Old Read Timestamps and Garbage Collection
		 * Cloud Spanner continuously garbage collects deleted and overwritten data
		 * in the background to reclaim storage space. This process is known
		 * as "version GC". By default, version GC reclaims versions after they
		 * are one hour old. Because of this, Cloud Spanner cannot perform reads
		 * at read timestamps more than one hour in the past. This
		 * restriction also applies to in-progress reads and/or SQL queries whose
		 * timestamp become too old while executing. Reads and SQL queries with
		 * too-old read timestamps fail with the error `FAILED_PRECONDITION`.
		 * ## Partitioned DML Transactions
		 * Partitioned DML transactions are used to execute DML statements with a
		 * different execution strategy that provides different, and often better,
		 * scalability properties for large, table-wide operations than DML in a
		 * ReadWrite transaction. Smaller scoped statements, such as an OLTP workload,
		 * should prefer using ReadWrite transactions.
		 * Partitioned DML partitions the keyspace and runs the DML statement on each
		 * partition in separate, internal transactions. These transactions commit
		 * automatically when complete, and run independently from one another.
		 * To reduce lock contention, this execution strategy only acquires read locks
		 * on rows that match the WHERE clause of the statement. Additionally, the
		 * smaller per-partition transactions hold locks for less time.
		 * That said, Partitioned DML is not a drop-in replacement for standard DML used
		 * in ReadWrite transactions.
		 * - The DML statement must be fully-partitionable. Specifically, the statement
		 * must be expressible as the union of many statements which each access only
		 * a single row of the table.
		 * - The statement is not applied atomically to all rows of the table. Rather,
		 * the statement is applied atomically to partitions of the table, in
		 * independent transactions. Secondary index rows are updated atomically
		 * with the base table rows.
		 * - Partitioned DML does not guarantee exactly-once execution semantics
		 * against a partition. The statement will be applied at least once to each
		 * partition. It is strongly recommended that the DML statement should be
		 * idempotent to avoid unexpected results. For instance, it is potentially
		 * dangerous to run a statement such as
		 * `UPDATE table SET column = column + 1` as it could be run multiple times
		 * against some rows.
		 * - The partitions are committed automatically - there is no support for
		 * Commit or Rollback. If the call returns an error, or if the client issuing
		 * the ExecuteSql call dies, it is possible that some rows had the statement
		 * executed on them successfully. It is also possible that statement was
		 * never executed against other rows.
		 * - Partitioned DML transactions may only contain the execution of a single
		 * DML statement via ExecuteSql or ExecuteStreamingSql.
		 * - If any error is encountered during the execution of the partitioned DML
		 * operation (for instance, a UNIQUE INDEX violation, division by zero, or a
		 * value that cannot be stored due to schema constraints), then the
		 * operation is stopped at that point and an error is returned. It is
		 * possible that at this point, some partitions have been committed (or even
		 * committed multiple times), and other partitions have not been run at all.
		 * Given the above, Partitioned DML is good fit for large, database-wide,
		 * operations that are idempotent, such as deleting old rows from a very large
		 * table.
		 */
		begin?: TransactionOptions | null;

		/** Execute the read or SQL query in a previously-started transaction. */
		id?: string | null;

		/**
		 * # Transactions
		 * Each session can have at most one active transaction at a time. After the
		 * active transaction is completed, the session can immediately be
		 * re-used for the next transaction. It is not necessary to create a
		 * new session for each transaction.
		 * # Transaction Modes
		 * Cloud Spanner supports three transaction modes:
		 * 1. Locking read-write. This type of transaction is the only way
		 * to write data into Cloud Spanner. These transactions rely on
		 * pessimistic locking and, if necessary, two-phase commit.
		 * Locking read-write transactions may abort, requiring the
		 * application to retry.
		 * 2. Snapshot read-only. This transaction type provides guaranteed
		 * consistency across several reads, but does not allow
		 * writes. Snapshot read-only transactions can be configured to
		 * read at timestamps in the past. Snapshot read-only
		 * transactions do not need to be committed.
		 * 3. Partitioned DML. This type of transaction is used to execute
		 * a single Partitioned DML statement. Partitioned DML partitions
		 * the key space and runs the DML statement over each partition
		 * in parallel using separate, internal transactions that commit
		 * independently. Partitioned DML transactions do not need to be
		 * committed.
		 * For transactions that only read, snapshot read-only transactions
		 * provide simpler semantics and are almost always faster. In
		 * particular, read-only transactions do not take locks, so they do
		 * not conflict with read-write transactions. As a consequence of not
		 * taking locks, they also do not abort, so retry loops are not needed.
		 * Transactions may only read/write data in a single database. They
		 * may, however, read/write data in different tables within that
		 * database.
		 * ## Locking Read-Write Transactions
		 * Locking transactions may be used to atomically read-modify-write
		 * data anywhere in a database. This type of transaction is externally
		 * consistent.
		 * Clients should attempt to minimize the amount of time a transaction
		 * is active. Faster transactions commit with higher probability
		 * and cause less contention. Cloud Spanner attempts to keep read locks
		 * active as long as the transaction continues to do reads, and the
		 * transaction has not been terminated by
		 * Commit or
		 * Rollback.  Long periods of
		 * inactivity at the client may cause Cloud Spanner to release a
		 * transaction's locks and abort it.
		 * Conceptually, a read-write transaction consists of zero or more
		 * reads or SQL statements followed by
		 * Commit. At any time before
		 * Commit, the client can send a
		 * Rollback request to abort the
		 * transaction.
		 * ### Semantics
		 * Cloud Spanner can commit the transaction if all read locks it acquired
		 * are still valid at commit time, and it is able to acquire write
		 * locks for all writes. Cloud Spanner can abort the transaction for any
		 * reason. If a commit attempt returns `ABORTED`, Cloud Spanner guarantees
		 * that the transaction has not modified any user data in Cloud Spanner.
		 * Unless the transaction commits, Cloud Spanner makes no guarantees about
		 * how long the transaction's locks were held for. It is an error to
		 * use Cloud Spanner locks for any sort of mutual exclusion other than
		 * between Cloud Spanner transactions themselves.
		 * ### Retrying Aborted Transactions
		 * When a transaction aborts, the application can choose to retry the
		 * whole transaction again. To maximize the chances of successfully
		 * committing the retry, the client should execute the retry in the
		 * same session as the original attempt. The original session's lock
		 * priority increases with each consecutive abort, meaning that each
		 * attempt has a slightly better chance of success than the previous.
		 * Under some circumstances (e.g., many transactions attempting to
		 * modify the same row(s)), a transaction can abort many times in a
		 * short period before successfully committing. Thus, it is not a good
		 * idea to cap the number of retries a transaction can attempt;
		 * instead, it is better to limit the total amount of wall time spent
		 * retrying.
		 * ### Idle Transactions
		 * A transaction is considered idle if it has no outstanding reads or
		 * SQL queries and has not started a read or SQL query within the last 10
		 * seconds. Idle transactions can be aborted by Cloud Spanner so that they
		 * don't hold on to locks indefinitely. In that case, the commit will
		 * fail with error `ABORTED`.
		 * If this behavior is undesirable, periodically executing a simple
		 * SQL query in the transaction (e.g., `SELECT 1`) prevents the
		 * transaction from becoming idle.
		 * ## Snapshot Read-Only Transactions
		 * Snapshot read-only transactions provides a simpler method than
		 * locking read-write transactions for doing several consistent
		 * reads. However, this type of transaction does not support writes.
		 * Snapshot transactions do not take locks. Instead, they work by
		 * choosing a Cloud Spanner timestamp, then executing all reads at that
		 * timestamp. Since they do not acquire locks, they do not block
		 * concurrent read-write transactions.
		 * Unlike locking read-write transactions, snapshot read-only
		 * transactions never abort. They can fail if the chosen read
		 * timestamp is garbage collected; however, the default garbage
		 * collection policy is generous enough that most applications do not
		 * need to worry about this in practice.
		 * Snapshot read-only transactions do not need to call
		 * Commit or
		 * Rollback (and in fact are not
		 * permitted to do so).
		 * To execute a snapshot transaction, the client specifies a timestamp
		 * bound, which tells Cloud Spanner how to choose a read timestamp.
		 * The types of timestamp bound are:
		 * - Strong (the default).
		 * - Bounded staleness.
		 * - Exact staleness.
		 * If the Cloud Spanner database to be read is geographically distributed,
		 * stale read-only transactions can execute more quickly than strong
		 * or read-write transaction, because they are able to execute far
		 * from the leader replica.
		 * Each type of timestamp bound is discussed in detail below.
		 * ### Strong
		 * Strong reads are guaranteed to see the effects of all transactions
		 * that have committed before the start of the read. Furthermore, all
		 * rows yielded by a single read are consistent with each other -- if
		 * any part of the read observes a transaction, all parts of the read
		 * see the transaction.
		 * Strong reads are not repeatable: two consecutive strong read-only
		 * transactions might return inconsistent results if there are
		 * concurrent writes. If consistency across reads is required, the
		 * reads should be executed within a transaction or at an exact read
		 * timestamp.
		 * See TransactionOptions.ReadOnly.strong.
		 * ### Exact Staleness
		 * These timestamp bounds execute reads at a user-specified
		 * timestamp. Reads at a timestamp are guaranteed to see a consistent
		 * prefix of the global transaction history: they observe
		 * modifications done by all transactions with a commit timestamp <=
		 * the read timestamp, and observe none of the modifications done by
		 * transactions with a larger commit timestamp. They will block until
		 * all conflicting transactions that may be assigned commit timestamps
		 * <= the read timestamp have finished.
		 * The timestamp can either be expressed as an absolute Cloud Spanner commit
		 * timestamp or a staleness relative to the current time.
		 * These modes do not require a "negotiation phase" to pick a
		 * timestamp. As a result, they execute slightly faster than the
		 * equivalent boundedly stale concurrency modes. On the other hand,
		 * boundedly stale reads usually return fresher results.
		 * See TransactionOptions.ReadOnly.read_timestamp and
		 * TransactionOptions.ReadOnly.exact_staleness.
		 * ### Bounded Staleness
		 * Bounded staleness modes allow Cloud Spanner to pick the read timestamp,
		 * subject to a user-provided staleness bound. Cloud Spanner chooses the
		 * newest timestamp within the staleness bound that allows execution
		 * of the reads at the closest available replica without blocking.
		 * All rows yielded are consistent with each other -- if any part of
		 * the read observes a transaction, all parts of the read see the
		 * transaction. Boundedly stale reads are not repeatable: two stale
		 * reads, even if they use the same staleness bound, can execute at
		 * different timestamps and thus return inconsistent results.
		 * Boundedly stale reads execute in two phases: the first phase
		 * negotiates a timestamp among all replicas needed to serve the
		 * read. In the second phase, reads are executed at the negotiated
		 * timestamp.
		 * As a result of the two phase execution, bounded staleness reads are
		 * usually a little slower than comparable exact staleness
		 * reads. However, they are typically able to return fresher
		 * results, and are more likely to execute at the closest replica.
		 * Because the timestamp negotiation requires up-front knowledge of
		 * which rows will be read, it can only be used with single-use
		 * read-only transactions.
		 * See TransactionOptions.ReadOnly.max_staleness and
		 * TransactionOptions.ReadOnly.min_read_timestamp.
		 * ### Old Read Timestamps and Garbage Collection
		 * Cloud Spanner continuously garbage collects deleted and overwritten data
		 * in the background to reclaim storage space. This process is known
		 * as "version GC". By default, version GC reclaims versions after they
		 * are one hour old. Because of this, Cloud Spanner cannot perform reads
		 * at read timestamps more than one hour in the past. This
		 * restriction also applies to in-progress reads and/or SQL queries whose
		 * timestamp become too old while executing. Reads and SQL queries with
		 * too-old read timestamps fail with the error `FAILED_PRECONDITION`.
		 * ## Partitioned DML Transactions
		 * Partitioned DML transactions are used to execute DML statements with a
		 * different execution strategy that provides different, and often better,
		 * scalability properties for large, table-wide operations than DML in a
		 * ReadWrite transaction. Smaller scoped statements, such as an OLTP workload,
		 * should prefer using ReadWrite transactions.
		 * Partitioned DML partitions the keyspace and runs the DML statement on each
		 * partition in separate, internal transactions. These transactions commit
		 * automatically when complete, and run independently from one another.
		 * To reduce lock contention, this execution strategy only acquires read locks
		 * on rows that match the WHERE clause of the statement. Additionally, the
		 * smaller per-partition transactions hold locks for less time.
		 * That said, Partitioned DML is not a drop-in replacement for standard DML used
		 * in ReadWrite transactions.
		 * - The DML statement must be fully-partitionable. Specifically, the statement
		 * must be expressible as the union of many statements which each access only
		 * a single row of the table.
		 * - The statement is not applied atomically to all rows of the table. Rather,
		 * the statement is applied atomically to partitions of the table, in
		 * independent transactions. Secondary index rows are updated atomically
		 * with the base table rows.
		 * - Partitioned DML does not guarantee exactly-once execution semantics
		 * against a partition. The statement will be applied at least once to each
		 * partition. It is strongly recommended that the DML statement should be
		 * idempotent to avoid unexpected results. For instance, it is potentially
		 * dangerous to run a statement such as
		 * `UPDATE table SET column = column + 1` as it could be run multiple times
		 * against some rows.
		 * - The partitions are committed automatically - there is no support for
		 * Commit or Rollback. If the call returns an error, or if the client issuing
		 * the ExecuteSql call dies, it is possible that some rows had the statement
		 * executed on them successfully. It is also possible that statement was
		 * never executed against other rows.
		 * - Partitioned DML transactions may only contain the execution of a single
		 * DML statement via ExecuteSql or ExecuteStreamingSql.
		 * - If any error is encountered during the execution of the partitioned DML
		 * operation (for instance, a UNIQUE INDEX violation, division by zero, or a
		 * value that cannot be stored due to schema constraints), then the
		 * operation is stopped at that point and an error is returned. It is
		 * possible that at this point, some partitions have been committed (or even
		 * committed multiple times), and other partitions have not been run at all.
		 * Given the above, Partitioned DML is good fit for large, database-wide,
		 * operations that are idempotent, such as deleting old rows from a very large
		 * table.
		 */
		singleUse?: TransactionOptions | null;
	}


	/**
	 * The response for ExecuteBatchDml. Contains a list
	 * of ResultSet messages, one for each DML statement that has successfully
	 * executed, in the same order as the statements in the request. If a statement
	 * fails, the status in the response body identifies the cause of the failure.
	 * To check for DML statements that failed, use the following approach:
	 * 1. Check the status in the response message. The google.rpc.Code enum
	 *    value `OK` indicates that all statements were executed successfully.
	 * 2. If the status was not `OK`, check the number of result sets in the
	 *    response. If the response contains `N` ResultSet messages, then
	 *    statement `N+1` in the request failed.
	 * Example 1:
	 * * Request: 5 DML statements, all executed successfully.
	 * * Response: 5 ResultSet messages, with the status `OK`.
	 * Example 2:
	 * * Request: 5 DML statements. The third statement has a syntax error.
	 * * Response: 2 ResultSet messages, and a syntax error (`INVALID_ARGUMENT`)
	 *   status. The number of ResultSet messages indicates that the third
	 *   statement failed, and the fourth and fifth statements were not executed.
	 */
	export interface ExecuteBatchDmlResponse {

		/**
		 * One ResultSet for each statement in the request that ran successfully,
		 * in the same order as the statements in the request. Each ResultSet does
		 * not contain any rows. The ResultSetStats in each ResultSet contain
		 * the number of rows modified by the statement.
		 * Only the first ResultSet in the response contains valid
		 * ResultSetMetadata.
		 */
		resultSets?: Array<ResultSet> | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		status?: Status | null;
	}


	/**
	 * Results from Read or
	 * ExecuteSql.
	 */
	export interface ResultSet {

		/** Metadata about a ResultSet or PartialResultSet. */
		metadata?: ResultSetMetadata | null;

		/**
		 * Each element in `rows` is a row whose format is defined by
		 * metadata.row_type. The ith element
		 * in each row matches the ith field in
		 * metadata.row_type. Elements are
		 * encoded based on type as described
		 * here.
		 */
		rows?: Array<string> | null;

		/** Additional statistics about a ResultSet or PartialResultSet. */
		stats?: ResultSetStats | null;
	}


	/** Metadata about a ResultSet or PartialResultSet. */
	export interface ResultSetMetadata {

		/** `StructType` defines the fields of a STRUCT type. */
		rowType?: StructType | null;

		/** A transaction. */
		transaction?: Transaction | null;
	}


	/** A transaction. */
	export interface Transaction {

		/**
		 * `id` may be used to identify the transaction in subsequent
		 * Read,
		 * ExecuteSql,
		 * Commit, or
		 * Rollback calls.
		 * Single-use read-only transactions do not have IDs, because
		 * single-use transactions do not support multiple requests.
		 */
		id?: string | null;

		/**
		 * For snapshot read-only transactions, the read timestamp chosen
		 * for the transaction. Not returned by default: see
		 * TransactionOptions.ReadOnly.return_read_timestamp.
		 * A timestamp in RFC3339 UTC \"Zulu\" format, accurate to nanoseconds.
		 * Example: `"2014-10-02T15:01:23.045123456Z"`.
		 */
		readTimestamp?: string | null;
	}


	/** Additional statistics about a ResultSet or PartialResultSet. */
	export interface ResultSetStats {

		/** Contains an ordered list of nodes appearing in the query plan. */
		queryPlan?: QueryPlan | null;

		/**
		 * Aggregated statistics from the execution of the query. Only present when
		 * the query is profiled. For example, a query could return the statistics as
		 * follows:
		 * {
		 * "rows_returned": "3",
		 * "elapsed_time": "1.22 secs",
		 * "cpu_time": "1.19 secs"
		 * }
		 */
		queryStats?: {[id: string]: any } | null;

		/** Standard DML returns an exact count of rows that were modified. */
		rowCountExact?: string | null;

		/**
		 * Partitioned DML does not offer exactly-once semantics, so it
		 * returns a lower bound of the rows modified.
		 */
		rowCountLowerBound?: string | null;
	}


	/** Contains an ordered list of nodes appearing in the query plan. */
	export interface QueryPlan {

		/**
		 * The nodes in the query plan. Plan nodes are returned in pre-order starting
		 * with the plan root. Each PlanNode's `id` corresponds to its index in
		 * `plan_nodes`.
		 */
		planNodes?: Array<PlanNode> | null;
	}


	/** Node information for nodes appearing in a QueryPlan.plan_nodes. */
	export interface PlanNode {

		/** List of child node `index`es and their relationship to this parent. */
		childLinks?: Array<ChildLink> | null;

		/** The display name for the node. */
		displayName?: string | null;

		/**
		 * The execution statistics associated with the node, contained in a group of
		 * key-value pairs. Only present if the plan was returned as a result of a
		 * profile query. For example, number of executions, number of rows/time per
		 * execution etc.
		 */
		executionStats?: {[id: string]: any } | null;

		/** The `PlanNode`'s index in node list. */
		index?: number | null;

		/**
		 * Used to determine the type of node. May be needed for visualizing
		 * different kinds of nodes differently. For example, If the node is a
		 * SCALAR node, it will have a condensed representation
		 * which can be used to directly embed a description of the node in its
		 * parent.
		 */
		kind?: PlanNodeKind | null;

		/**
		 * Attributes relevant to the node contained in a group of key-value pairs.
		 * For example, a Parameter Reference node could have the following
		 * information in its metadata:
		 * {
		 * "parameter_reference": "param1",
		 * "parameter_type": "array"
		 * }
		 */
		metadata?: {[id: string]: any } | null;

		/**
		 * Condensed representation of a node and its subtree. Only present for
		 * `SCALAR` PlanNode(s).
		 */
		shortRepresentation?: ShortRepresentation | null;
	}

	export enum PlanNodeKind { KIND_UNSPECIFIED = 0, RELATIONAL = 1, SCALAR = 2 }


	/**
	 * Condensed representation of a node and its subtree. Only present for
	 * `SCALAR` PlanNode(s).
	 */
	export interface ShortRepresentation {

		/** A string representation of the expression subtree rooted at this node. */
		description?: string | null;

		/**
		 * A mapping of (subquery variable name) -> (subquery node id) for cases
		 * where the `description` string of this node references a `SCALAR`
		 * subquery contained in the expression subtree rooted at this node. The
		 * referenced `SCALAR` subquery may not necessarily be a direct child of
		 * this node.
		 */
		subqueries?: {[id: string]: number } | null;
	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string> | null;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}


	/**
	 * The request for ExecuteSql and
	 * ExecuteStreamingSql.
	 */
	export interface ExecuteSqlRequest {

		/**
		 * It is not always possible for Cloud Spanner to infer the right SQL type
		 * from a JSON value.  For example, values of type `BYTES` and values
		 * of type `STRING` both appear in params as JSON strings.
		 * In these cases, `param_types` can be used to specify the exact
		 * SQL type for some or all of the SQL statement parameters. See the
		 * definition of Type for more information
		 * about SQL types.
		 */
		paramTypes?: {[id: string]: Type } | null;

		/**
		 * Parameter names and values that bind to placeholders in the SQL string.
		 * A parameter placeholder consists of the `@` character followed by the
		 * parameter name (for example, `@firstName`). Parameter names can contain
		 * letters, numbers, and underscores.
		 * Parameters can appear anywhere that a literal value is expected.  The same
		 * parameter name can be used more than once, for example:
		 * `"WHERE id > @msg_id AND id < @msg_id + 100"`
		 * It is an error to execute a SQL statement with unbound parameters.
		 */
		params?: {[id: string]: any } | null;

		/**
		 * If present, results will be restricted to the specified partition
		 * previously created using PartitionQuery().  There must be an exact
		 * match for the values of fields common to this message and the
		 * PartitionQueryRequest message used to create this partition_token.
		 */
		partitionToken?: string | null;

		/**
		 * Used to control the amount of debugging information returned in
		 * ResultSetStats. If partition_token is set, query_mode can only
		 * be set to QueryMode.NORMAL.
		 */
		queryMode?: ExecuteSqlRequestQueryMode | null;

		/** Query optimizer configuration. */
		queryOptions?: QueryOptions | null;

		/**
		 * If this request is resuming a previously interrupted SQL statement
		 * execution, `resume_token` should be copied from the last
		 * PartialResultSet yielded before the interruption. Doing this
		 * enables the new SQL statement execution to resume where the last one left
		 * off. The rest of the request parameters must exactly match the
		 * request that yielded this token.
		 */
		resumeToken?: string | null;

		/**
		 * A per-transaction sequence number used to identify this request. This field
		 * makes each request idempotent such that if the request is received multiple
		 * times, at most one will succeed.
		 * The sequence number must be monotonically increasing within the
		 * transaction. If a request arrives for the first time with an out-of-order
		 * sequence number, the transaction may be aborted. Replays of previously
		 * handled requests will yield the same response as the first execution.
		 * Required for DML statements. Ignored for queries.
		 */
		seqno?: string | null;

		/** Required. The SQL string. */
		sql?: string | null;

		/**
		 * This message is used to select the transaction in which a
		 * Read or
		 * ExecuteSql call runs.
		 * See TransactionOptions for more information about transactions.
		 */
		transaction?: TransactionSelector | null;
	}

	export enum ExecuteSqlRequestQueryMode { NORMAL = 0, PLAN = 1, PROFILE = 2 }


	/** Query optimizer configuration. */
	export interface QueryOptions {

		/**
		 * An option to control the selection of optimizer version.
		 * This parameter allows individual queries to pick different query
		 * optimizer versions.
		 * Specifying "latest" as a value instructs Cloud Spanner to use the
		 * latest supported query optimizer version. If not specified, Cloud Spanner
		 * uses optimizer version set at the database level options. Any other
		 * positive integer (from the list of supported optimizer versions)
		 * overrides the default optimizer version for query execution.
		 * The list of supported optimizer versions can be queried from
		 * SPANNER_SYS.SUPPORTED_OPTIMIZER_VERSIONS. Executing a SQL statement
		 * with an invalid optimizer version will fail with a syntax error
		 * (`INVALID_ARGUMENT`) status.
		 * The `optimizer_version` statement hint has precedence over this setting.
		 */
		optimizerVersion?: string | null;
	}


	/** The response for GetDatabaseDdl. */
	export interface GetDatabaseDdlResponse {

		/**
		 * A list of formatted DDL statements defining the schema of the database
		 * specified in the request.
		 */
		statements?: Array<string> | null;
	}


	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GetPolicyOptions | null;
	}


	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptions {

		/**
		 * Optional. The policy format version to be returned.
		 * Valid values are 0, 1, and 3. Requests specifying an invalid value will be
		 * rejected.
		 * Requests for policies with any conditional bindings must specify version 3.
		 * Policies without any conditional bindings may specify any valid value or
		 * leave the field unset.
		 */
		requestedPolicyVersion?: number | null;
	}


	/**
	 * A possible configuration for a Cloud Spanner instance. Configurations
	 * define the geographic placement of nodes and their replication.
	 */
	export interface InstanceConfig {

		/** The name of this instance configuration as it appears in UIs. */
		displayName?: string | null;

		/**
		 * A unique identifier for the instance configuration.  Values
		 * are of the form
		 * `projects/<project>/instanceConfigs/a-z*`
		 */
		name?: string | null;

		/**
		 * The geographic placement of nodes in this instance configuration and their
		 * replication properties.
		 */
		replicas?: Array<ReplicaInfo> | null;
	}

	export interface ReplicaInfo {

		/**
		 * If true, this location is designated as the default leader location where
		 * leader replicas are placed. See the [region types
		 * documentation](https://cloud.google.com/spanner/docs/instances#region_types)
		 * for more details.
		 */
		defaultLeaderLocation?: boolean | null;

		/** The location of the serving resources, e.g. "us-central1". */
		location?: string | null;

		/** The type of replica. */
		type?: ReplicaInfoType | null;
	}

	export enum ReplicaInfoType { TYPE_UNSPECIFIED = 0, READ_WRITE = 1, READ_ONLY = 2, WITNESS = 3 }


	/**
	 * The response for
	 * ListBackupOperations.
	 */
	export interface ListBackupOperationsResponse {

		/**
		 * `next_page_token` can be sent in a subsequent
		 * ListBackupOperations
		 * call to fetch more of the matching metadata.
		 */
		nextPageToken?: string | null;

		/**
		 * The list of matching backup long-running
		 * operations. Each operation's name will be
		 * prefixed by the backup's name and the operation's
		 * metadata will be of type
		 * CreateBackupMetadata. Operations returned include those that are
		 * pending or have completed/failed/canceled within the last 7 days.
		 * Operations returned are ordered by
		 * `operation.metadata.value.progress.start_time` in descending order starting
		 * from the most recently started operation.
		 */
		operations?: Array<Operation> | null;
	}


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status | null;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any } | null;

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string | null;

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
		response?: {[id: string]: any } | null;
	}


	/** The response for ListBackups. */
	export interface ListBackupsResponse {

		/**
		 * The list of matching backups. Backups returned are ordered by `create_time`
		 * in descending order, starting from the most recent `create_time`.
		 */
		backups?: Array<Backup> | null;

		/**
		 * `next_page_token` can be sent in a subsequent
		 * ListBackups call to fetch more
		 * of the matching backups.
		 */
		nextPageToken?: string | null;
	}


	/**
	 * The response for
	 * ListDatabaseOperations.
	 */
	export interface ListDatabaseOperationsResponse {

		/**
		 * `next_page_token` can be sent in a subsequent
		 * ListDatabaseOperations
		 * call to fetch more of the matching metadata.
		 */
		nextPageToken?: string | null;

		/**
		 * The list of matching database long-running
		 * operations. Each operation's name will be
		 * prefixed by the database's name. The operation's
		 * metadata field type
		 * `metadata.type_url` describes the type of the metadata.
		 */
		operations?: Array<Operation> | null;
	}


	/** The response for ListDatabases. */
	export interface ListDatabasesResponse {

		/** Databases that matched the request. */
		databases?: Array<Database> | null;

		/**
		 * `next_page_token` can be sent in a subsequent
		 * ListDatabases call to fetch more
		 * of the matching databases.
		 */
		nextPageToken?: string | null;
	}


	/** The response for ListInstanceConfigs. */
	export interface ListInstanceConfigsResponse {

		/** The list of requested instance configurations. */
		instanceConfigs?: Array<InstanceConfig> | null;

		/**
		 * `next_page_token` can be sent in a subsequent
		 * ListInstanceConfigs call to
		 * fetch more of the matching instance configurations.
		 */
		nextPageToken?: string | null;
	}


	/** The response for ListInstances. */
	export interface ListInstancesResponse {

		/** The list of requested instances. */
		instances?: Array<Instance> | null;

		/**
		 * `next_page_token` can be sent in a subsequent
		 * ListInstances call to fetch more
		 * of the matching instances.
		 */
		nextPageToken?: string | null;
	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation> | null;
	}


	/** The response for ListSessions. */
	export interface ListSessionsResponse {

		/**
		 * `next_page_token` can be sent in a subsequent
		 * ListSessions call to fetch more of the matching
		 * sessions.
		 */
		nextPageToken?: string | null;

		/** The list of requested sessions. */
		sessions?: Array<Session> | null;
	}


	/**
	 * Metadata type for the long-running operation used to track the progress
	 * of optimizations performed on a newly restored database. This long-running
	 * operation is automatically created by the system after the successful
	 * completion of a database restore, and cannot be cancelled.
	 */
	export interface OptimizeRestoredDatabaseMetadata {

		/** Name of the restored database being optimized. */
		name?: string | null;

		/**
		 * Encapsulates progress related information for a Cloud Spanner long
		 * running operation.
		 */
		progress?: OperationProgress | null;
	}


	/**
	 * Partial results from a streaming read or SQL query. Streaming reads and
	 * SQL queries better tolerate large result sets, large rows, and large
	 * values, but are a little trickier to consume.
	 */
	export interface PartialResultSet {

		/**
		 * If true, then the final value in values is chunked, and must
		 * be combined with more values from subsequent `PartialResultSet`s
		 * to obtain a complete field value.
		 */
		chunkedValue?: boolean | null;

		/** Metadata about a ResultSet or PartialResultSet. */
		metadata?: ResultSetMetadata | null;

		/**
		 * Streaming calls might be interrupted for a variety of reasons, such
		 * as TCP connection loss. If this occurs, the stream of results can
		 * be resumed by re-sending the original request and including
		 * `resume_token`. Note that executing any other transaction in the
		 * same session invalidates the token.
		 */
		resumeToken?: string | null;

		/** Additional statistics about a ResultSet or PartialResultSet. */
		stats?: ResultSetStats | null;

		/**
		 * A streamed result set consists of a stream of values, which might
		 * be split into many `PartialResultSet` messages to accommodate
		 * large rows and/or large values. Every N complete values defines a
		 * row, where N is equal to the number of entries in
		 * metadata.row_type.fields.
		 * Most values are encoded based on type as described
		 * here.
		 * It is possible that the last value in values is "chunked",
		 * meaning that the rest of the value is sent in subsequent
		 * `PartialResultSet`(s). This is denoted by the chunked_value
		 * field. Two or more chunked values can be merged to form a
		 * complete value as follows:
		 * * `bool/number/null`: cannot be chunked
		 * * `string`: concatenate the strings
		 * * `list`: concatenate the lists. If the last element in a list is a
		 * `string`, `list`, or `object`, merge it with the first element in
		 * the next list by applying these rules recursively.
		 * * `object`: concatenate the (field name, field value) pairs. If a
		 * field name is duplicated, then apply these rules recursively
		 * to merge the field values.
		 * Some examples of merging:
		 * # Strings are concatenated.
		 * "foo", "bar" => "foobar"
		 * # Lists of non-strings are concatenated.
		 * [2, 3], [4] => [2, 3, 4]
		 * # Lists are concatenated, but the last and first elements are merged
		 * # because they are strings.
		 * ["a", "b"], ["c", "d"] => ["a", "bc", "d"]
		 * # Lists are concatenated, but the last and first elements are merged
		 * # because they are lists. Recursively, the last and first elements
		 * # of the inner lists are merged because they are strings.
		 * ["a", ["b", "c"]], [["d"], "e"] => ["a", ["b", "cd"], "e"]
		 * # Non-overlapping object fields are combined.
		 * {"a": "1"}, {"b": "2"} => {"a": "1", "b": 2"}
		 * # Overlapping object fields are merged.
		 * {"a": "1"}, {"a": "2"} => {"a": "12"}
		 * # Examples of merging objects containing lists of strings.
		 * {"a": ["1"]}, {"a": ["2"]} => {"a": ["12"]}
		 * For a more complete example, suppose a streaming SQL query is
		 * yielding a result set whose rows contain a single string
		 * field. The following `PartialResultSet`s might be yielded:
		 * {
		 * "metadata": { ... }
		 * "values": ["Hello", "W"]
		 * "chunked_value": true
		 * "resume_token": "Af65..."
		 * }
		 * {
		 * "values": ["orl"]
		 * "chunked_value": true
		 * "resume_token": "Bqp2..."
		 * }
		 * {
		 * "values": ["d"]
		 * "resume_token": "Zx1B..."
		 * }
		 * This sequence of `PartialResultSet`s encodes two rows, one
		 * containing the field value `"Hello"`, and a second containing the
		 * field value `"World" = "W" + "orl" + "d"`.
		 */
		values?: Array<string> | null;
	}


	/**
	 * Information returned for each partition returned in a
	 * PartitionResponse.
	 */
	export interface Partition {

		/**
		 * This token can be passed to Read, StreamingRead, ExecuteSql, or
		 * ExecuteStreamingSql requests to restrict the results to those identified by
		 * this partition token.
		 */
		partitionToken?: string | null;
	}


	/**
	 * Options for a PartitionQueryRequest and
	 * PartitionReadRequest.
	 */
	export interface PartitionOptions {

		/**
		 * **Note:** This hint is currently ignored by PartitionQuery and
		 * PartitionRead requests.
		 * The desired maximum number of partitions to return.  For example, this may
		 * be set to the number of workers available.  The default for this option
		 * is currently 10,000. The maximum value is currently 200,000.  This is only
		 * a hint.  The actual number of partitions returned may be smaller or larger
		 * than this maximum count request.
		 */
		maxPartitions?: string | null;

		/**
		 * **Note:** This hint is currently ignored by PartitionQuery and
		 * PartitionRead requests.
		 * The desired data size for each partition generated.  The default for this
		 * option is currently 1 GiB.  This is only a hint. The actual size of each
		 * partition may be smaller or larger than this size request.
		 */
		partitionSizeBytes?: string | null;
	}


	/** The request for PartitionQuery */
	export interface PartitionQueryRequest {

		/**
		 * It is not always possible for Cloud Spanner to infer the right SQL type
		 * from a JSON value.  For example, values of type `BYTES` and values
		 * of type `STRING` both appear in params as JSON strings.
		 * In these cases, `param_types` can be used to specify the exact
		 * SQL type for some or all of the SQL query parameters. See the
		 * definition of Type for more information
		 * about SQL types.
		 */
		paramTypes?: {[id: string]: Type } | null;

		/**
		 * Parameter names and values that bind to placeholders in the SQL string.
		 * A parameter placeholder consists of the `@` character followed by the
		 * parameter name (for example, `@firstName`). Parameter names can contain
		 * letters, numbers, and underscores.
		 * Parameters can appear anywhere that a literal value is expected.  The same
		 * parameter name can be used more than once, for example:
		 * `"WHERE id > @msg_id AND id < @msg_id + 100"`
		 * It is an error to execute a SQL statement with unbound parameters.
		 */
		params?: {[id: string]: any } | null;

		/**
		 * Options for a PartitionQueryRequest and
		 * PartitionReadRequest.
		 */
		partitionOptions?: PartitionOptions | null;

		/**
		 * Required. The query request to generate partitions for. The request will fail if
		 * the query is not root partitionable. The query plan of a root
		 * partitionable query has a single distributed union operator. A distributed
		 * union operator conceptually divides one or more tables into multiple
		 * splits, remotely evaluates a subquery independently on each split, and
		 * then unions all results.
		 * This must not contain DML commands, such as INSERT, UPDATE, or
		 * DELETE. Use ExecuteStreamingSql with a
		 * PartitionedDml transaction for large, partition-friendly DML operations.
		 */
		sql?: string | null;

		/**
		 * This message is used to select the transaction in which a
		 * Read or
		 * ExecuteSql call runs.
		 * See TransactionOptions for more information about transactions.
		 */
		transaction?: TransactionSelector | null;
	}


	/** The request for PartitionRead */
	export interface PartitionReadRequest {

		/**
		 * The columns of table to be returned for each row matching
		 * this request.
		 */
		columns?: Array<string> | null;

		/**
		 * If non-empty, the name of an index on table. This index is
		 * used instead of the table primary key when interpreting key_set
		 * and sorting result rows. See key_set for further information.
		 */
		index?: string | null;

		/**
		 * `KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All
		 * the keys are expected to be in the same table or index. The keys need
		 * not be sorted in any particular way.
		 * If the same key is specified multiple times in the set (for example
		 * if two ranges, two keys, or a key and a range overlap), Cloud Spanner
		 * behaves as if the key were only specified once.
		 */
		keySet?: KeySet | null;

		/**
		 * Options for a PartitionQueryRequest and
		 * PartitionReadRequest.
		 */
		partitionOptions?: PartitionOptions | null;

		/** Required. The name of the table in the database to be read. */
		table?: string | null;

		/**
		 * This message is used to select the transaction in which a
		 * Read or
		 * ExecuteSql call runs.
		 * See TransactionOptions for more information about transactions.
		 */
		transaction?: TransactionSelector | null;
	}


	/**
	 * The response for PartitionQuery
	 * or PartitionRead
	 */
	export interface PartitionResponse {

		/** Partitions created by this request. */
		partitions?: Array<Partition> | null;

		/** A transaction. */
		transaction?: Transaction | null;
	}


	/**
	 * An Identity and Access Management (IAM) policy, which specifies access
	 * controls for Google Cloud resources.
	 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
	 * `members` to a single `role`. Members can be user accounts, service accounts,
	 * Google groups, and domains (such as G Suite). A `role` is a named list of
	 * permissions; each `role` can be an IAM predefined role or a user-created
	 * custom role.
	 * Optionally, a `binding` can specify a `condition`, which is a logical
	 * expression that allows access to a resource only if the expression evaluates
	 * to `true`. A condition can add constraints based on attributes of the
	 * request, the resource, or both.
	 * **JSON example:**
	 *     {
	 *       "bindings": [
	 *         {
	 *           "role": "roles/resourcemanager.organizationAdmin",
	 *           "members": [
	 *             "user:mike@example.com",
	 *             "group:admins@example.com",
	 *             "domain:google.com",
	 *             "serviceAccount:my-project-id@appspot.gserviceaccount.com"
	 *           ]
	 *         },
	 *         {
	 *           "role": "roles/resourcemanager.organizationViewer",
	 *           "members": ["user:eve@example.com"],
	 *           "condition": {
	 *             "title": "expirable access",
	 *             "description": "Does not grant access after Sep 2020",
	 *             "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
	 *           }
	 *         }
	 *       ],
	 *       "etag": "BwWWja0YfJA=",
	 *       "version": 3
	 *     }
	 * **YAML example:**
	 *     bindings:
	 *     - members:
	 *       - user:mike@example.com
	 *       - group:admins@example.com
	 *       - domain:google.com
	 *       - serviceAccount:my-project-id@appspot.gserviceaccount.com
	 *       role: roles/resourcemanager.organizationAdmin
	 *     - members:
	 *       - user:eve@example.com
	 *       role: roles/resourcemanager.organizationViewer
	 *       condition:
	 *         title: expirable access
	 *         description: Does not grant access after Sep 2020
	 *         expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
	 *     - etag: BwWWja0YfJA=
	 *     - version: 3
	 * For a description of IAM and its features, see the
	 * [IAM documentation](https://cloud.google.com/iam/docs/).
	 */
	export interface Policy {

		/**
		 * Associates a list of `members` to a `role`. Optionally, may specify a
		 * `condition` that determines how and when the `bindings` are applied. Each
		 * of the `bindings` must contain at least one member.
		 */
		bindings?: Array<Binding> | null;

		/**
		 * `etag` is used for optimistic concurrency control as a way to help
		 * prevent simultaneous updates of a policy from overwriting each other.
		 * It is strongly suggested that systems make use of the `etag` in the
		 * read-modify-write cycle to perform policy updates in order to avoid race
		 * conditions: An `etag` is returned in the response to `getIamPolicy`, and
		 * systems are expected to put that etag in the request to `setIamPolicy` to
		 * ensure that their change will be applied to the same version of the policy.
		 * **Important:** If you use IAM Conditions, you must include the `etag` field
		 * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
		 * you to overwrite a version `3` policy with a version `1` policy, and all of
		 * the conditions in the version `3` policy are lost.
		 */
		etag?: string | null;

		/**
		 * Specifies the format of the policy.
		 * Valid values are `0`, `1`, and `3`. Requests that specify an invalid value
		 * are rejected.
		 * Any operation that affects conditional role bindings must specify version
		 * `3`. This requirement applies to the following operations:
		 * * Getting a policy that includes a conditional role binding
		 * * Adding a conditional role binding to a policy
		 * * Changing a conditional role binding in a policy
		 * * Removing any role binding, with or without a condition, from a policy
		 * that includes conditions
		 * **Important:** If you use IAM Conditions, you must include the `etag` field
		 * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
		 * you to overwrite a version `3` policy with a version `1` policy, and all of
		 * the conditions in the version `3` policy are lost.
		 * If a policy does not include any conditions, operations on that policy may
		 * specify any valid version or leave the field unset.
		 */
		version?: number | null;
	}


	/**
	 * The request for Read and
	 * StreamingRead.
	 */
	export interface ReadRequest {

		/**
		 * Required. The columns of table to be returned for each row matching
		 * this request.
		 */
		columns?: Array<string> | null;

		/**
		 * If non-empty, the name of an index on table. This index is
		 * used instead of the table primary key when interpreting key_set
		 * and sorting result rows. See key_set for further information.
		 */
		index?: string | null;

		/**
		 * `KeySet` defines a collection of Cloud Spanner keys and/or key ranges. All
		 * the keys are expected to be in the same table or index. The keys need
		 * not be sorted in any particular way.
		 * If the same key is specified multiple times in the set (for example
		 * if two ranges, two keys, or a key and a range overlap), Cloud Spanner
		 * behaves as if the key were only specified once.
		 */
		keySet?: KeySet | null;

		/**
		 * If greater than zero, only the first `limit` rows are yielded. If `limit`
		 * is zero, the default is no limit. A limit cannot be specified if
		 * `partition_token` is set.
		 */
		limit?: string | null;

		/**
		 * If present, results will be restricted to the specified partition
		 * previously created using PartitionRead().    There must be an exact
		 * match for the values of fields common to this message and the
		 * PartitionReadRequest message used to create this partition_token.
		 */
		partitionToken?: string | null;

		/**
		 * If this request is resuming a previously interrupted read,
		 * `resume_token` should be copied from the last
		 * PartialResultSet yielded before the interruption. Doing this
		 * enables the new read to resume where the last read left off. The
		 * rest of the request parameters must exactly match the request
		 * that yielded this token.
		 */
		resumeToken?: string | null;

		/** Required. The name of the table in the database to be read. */
		table?: string | null;

		/**
		 * This message is used to select the transaction in which a
		 * Read or
		 * ExecuteSql call runs.
		 * See TransactionOptions for more information about transactions.
		 */
		transaction?: TransactionSelector | null;
	}


	/**
	 * Metadata type for the long-running operation returned by
	 * RestoreDatabase.
	 */
	export interface RestoreDatabaseMetadata {

		/** Information about a backup. */
		backupInfo?: BackupInfo | null;

		/**
		 * The time at which cancellation of this operation was received.
		 * Operations.CancelOperation
		 * starts asynchronous cancellation on a long-running operation. The server
		 * makes a best effort to cancel the operation, but success is not guaranteed.
		 * Clients can use
		 * Operations.GetOperation or
		 * other methods to check whether the cancellation succeeded or whether the
		 * operation completed despite cancellation. On successful cancellation,
		 * the operation is not deleted; instead, it becomes an operation with
		 * an Operation.error value with a
		 * google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 */
		cancelTime?: string | null;

		/** Name of the database being created and restored to. */
		name?: string | null;

		/**
		 * If exists, the name of the long-running operation that will be used to
		 * track the post-restore optimization process to optimize the performance of
		 * the restored database, and remove the dependency on the restore source.
		 * The name is of the form
		 * `projects/<project>/instances/<instance>/databases/<database>/operations/<operation>`
		 * where the <database> is the name of database being created and restored to.
		 * The metadata type of the  long-running operation is
		 * OptimizeRestoredDatabaseMetadata. This long-running operation will be
		 * automatically created by the system after the RestoreDatabase long-running
		 * operation completes successfully. This operation will not be created if the
		 * restore was not successful.
		 */
		optimizeDatabaseOperationName?: string | null;

		/**
		 * Encapsulates progress related information for a Cloud Spanner long
		 * running operation.
		 */
		progress?: OperationProgress | null;

		/** The type of the restore source. */
		sourceType?: RestoreInfoSourceType | null;
	}


	/**
	 * The request for
	 * RestoreDatabase.
	 */
	export interface RestoreDatabaseRequest {

		/**
		 * Name of the backup from which to restore.  Values are of the form
		 * `projects/<project>/instances/<instance>/backups/<backup>`.
		 */
		backup?: string | null;

		/**
		 * Required. The id of the database to create and restore to. This
		 * database must not already exist. The `database_id` appended to
		 * `parent` forms the full database name of the form
		 * `projects/<project>/instances/<instance>/databases/<database_id>`.
		 */
		databaseId?: string | null;
	}


	/** The request for Rollback. */
	export interface RollbackRequest {

		/** Required. The transaction to roll back. */
		transactionId?: string | null;
	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/**
		 * An Identity and Access Management (IAM) policy, which specifies access
		 * controls for Google Cloud resources.
		 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
		 * `members` to a single `role`. Members can be user accounts, service accounts,
		 * Google groups, and domains (such as G Suite). A `role` is a named list of
		 * permissions; each `role` can be an IAM predefined role or a user-created
		 * custom role.
		 * Optionally, a `binding` can specify a `condition`, which is a logical
		 * expression that allows access to a resource only if the expression evaluates
		 * to `true`. A condition can add constraints based on attributes of the
		 * request, the resource, or both.
		 * **JSON example:**
		 * {
		 * "bindings": [
		 * {
		 * "role": "roles/resourcemanager.organizationAdmin",
		 * "members": [
		 * "user:mike@example.com",
		 * "group:admins@example.com",
		 * "domain:google.com",
		 * "serviceAccount:my-project-id@appspot.gserviceaccount.com"
		 * ]
		 * },
		 * {
		 * "role": "roles/resourcemanager.organizationViewer",
		 * "members": ["user:eve@example.com"],
		 * "condition": {
		 * "title": "expirable access",
		 * "description": "Does not grant access after Sep 2020",
		 * "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
		 * }
		 * }
		 * ],
		 * "etag": "BwWWja0YfJA=",
		 * "version": 3
		 * }
		 * **YAML example:**
		 * bindings:
		 * - members:
		 * - user:mike@example.com
		 * - group:admins@example.com
		 * - domain:google.com
		 * - serviceAccount:my-project-id@appspot.gserviceaccount.com
		 * role: roles/resourcemanager.organizationAdmin
		 * - members:
		 * - user:eve@example.com
		 * role: roles/resourcemanager.organizationViewer
		 * condition:
		 * title: expirable access
		 * description: Does not grant access after Sep 2020
		 * expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
		 * - etag: BwWWja0YfJA=
		 * - version: 3
		 * For a description of IAM and its features, see the
		 * [IAM documentation](https://cloud.google.com/iam/docs/).
		 */
		policy?: Policy | null;
	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/**
		 * REQUIRED: The set of permissions to check for 'resource'.
		 * Permissions with wildcards (such as '*', 'spanner.*', 'spanner.instances.*') are not allowed.
		 */
		permissions?: Array<string> | null;
	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/**
		 * A subset of `TestPermissionsRequest.permissions` that the caller is
		 * allowed.
		 */
		permissions?: Array<string> | null;
	}


	/**
	 * Metadata type for the operation returned by
	 * UpdateDatabaseDdl.
	 */
	export interface UpdateDatabaseDdlMetadata {

		/**
		 * Reports the commit timestamps of all statements that have
		 * succeeded so far, where `commit_timestamps[i]` is the commit
		 * timestamp for the statement `statements[i]`.
		 */
		commitTimestamps?: Array<string> | null;

		/** The database being modified. */
		database?: string | null;

		/**
		 * For an update this list contains all the statements. For an
		 * individual statement, this list contains only that statement.
		 */
		statements?: Array<string> | null;
	}


	/**
	 * Enqueues the given DDL statements to be applied, in order but not
	 * necessarily all at once, to the database schema at some point (or
	 * points) in the future. The server checks that the statements
	 * are executable (syntactically valid, name tables that exist, etc.)
	 * before enqueueing them, but they may still fail upon
	 * later execution (e.g., if a statement from another batch of
	 * statements is applied first and it conflicts in some way, or if
	 * there is some data-related problem like a `NULL` value in a column to
	 * which `NOT NULL` would be added). If a statement fails, all
	 * subsequent statements in the batch are automatically cancelled.
	 * Each batch of statements is assigned a name which can be used with
	 * the Operations API to monitor
	 * progress. See the
	 * operation_id field for more
	 * details.
	 */
	export interface UpdateDatabaseDdlRequest {

		/**
		 * If empty, the new update request is assigned an
		 * automatically-generated operation ID. Otherwise, `operation_id`
		 * is used to construct the name of the resulting
		 * Operation.
		 * Specifying an explicit operation ID simplifies determining
		 * whether the statements were executed in the event that the
		 * UpdateDatabaseDdl call is replayed,
		 * or the return value is otherwise lost: the database and
		 * `operation_id` fields can be combined to form the
		 * name of the resulting
		 * longrunning.Operation: `<database>/operations/<operation_id>`.
		 * `operation_id` should be unique within the database, and must be
		 * a valid identifier: `a-z*`. Note that
		 * automatically-generated operation IDs always begin with an
		 * underscore. If the named operation already exists,
		 * UpdateDatabaseDdl returns
		 * `ALREADY_EXISTS`.
		 */
		operationId?: string | null;

		/** Required. DDL statements to be applied to the database. */
		statements?: Array<string> | null;
	}


	/**
	 * Metadata type for the operation returned by
	 * UpdateInstance.
	 */
	export interface UpdateInstanceMetadata {

		/**
		 * The time at which this operation was cancelled. If set, this operation is
		 * in the process of undoing itself (which is guaranteed to succeed) and
		 * cannot be cancelled again.
		 */
		cancelTime?: string | null;

		/** The time at which this operation failed or was completed successfully. */
		endTime?: string | null;

		/** An isolated set of Cloud Spanner resources on which databases can be hosted. */
		instance?: Instance | null;

		/**
		 * The time at which UpdateInstance
		 * request was received.
		 */
		startTime?: string | null;
	}


	/** The request for UpdateInstance. */
	export interface UpdateInstanceRequest {

		/**
		 * Required. A mask specifying which fields in Instance should be updated.
		 * The field mask must always be specified; this prevents any future fields in
		 * Instance from being erased accidentally by clients that do not know
		 * about them.
		 */
		fieldMask?: string | null;

		/** An isolated set of Cloud Spanner resources on which databases can be hosted. */
		instance?: Instance | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Drops (aka deletes) a Cloud Spanner database.
		 * Completed backups for the database will be retained according to their
		 * `expire_time`.
		 * Delete v1/{database}
		 * @param {string} database Required. The database to be dropped.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_dropDatabase(database: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the schema of a Cloud Spanner database as a list of formatted
		 * DDL statements. This method does not show pending schema updates, those may
		 * be queried using the Operations API.
		 * Get v1/{database}/ddl
		 * @param {string} database Required. The database whose schema we wish to get.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_getDdl(database: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/ddl', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the schema of a Cloud Spanner database by
		 * creating/altering/dropping tables, columns, indexes, etc. The returned
		 * long-running operation will have a name of
		 * the format `<database_name>/operations/<operation_id>` and can be used to
		 * track execution of the schema change(s). The
		 * metadata field type is
		 * UpdateDatabaseDdlMetadata.  The operation has no response.
		 * Patch v1/{database}/ddl
		 * @param {string} database Required. The database to update.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_updateDdl(database: string, requestBody: UpdateDatabaseDdlRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/ddl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all sessions in a given database.
		 * Get v1/{database}/sessions
		 * @param {string} database Required. The database in which to list sessions.
		 * @param {string} filter An expression for filtering the results of the request. Filter rules are
		 * case insensitive. The fields eligible for filtering are:
		 *   * `labels.key` where key is the name of a label
		 * Some examples of using filters are:
		 *   * `labels.env:*` --> The session has the label "env".
		 *   * `labels.env:dev` --> The session has the label "env" and the value of
		 *                        the label contains the string "dev".
		 * @param {number} pageSize Number of sessions to be returned in the response. If 0 or less, defaults
		 * to the server's maximum allowed page size.
		 * @param {string} pageToken If non-empty, `page_token` should contain a
		 * next_page_token from a previous
		 * ListSessionsResponse.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_sessions_list(database: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/sessions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new session. A session can be used to perform
		 * transactions that read and/or modify data in a Cloud Spanner database.
		 * Sessions are meant to be reused for many consecutive
		 * transactions.
		 * Sessions can only execute one transaction at a time. To execute
		 * multiple concurrent read-write/write-only transactions, create
		 * multiple sessions. Note that standalone reads and queries use a
		 * transaction internally, and count toward the one transaction
		 * limit.
		 * Active sessions use additional server resources, so it is a good idea to
		 * delete idle and unneeded sessions.
		 * Aside from explicit deletes, Cloud Spanner may delete sessions for which no
		 * operations are sent for more than an hour. If a session is deleted,
		 * requests to it return `NOT_FOUND`.
		 * Idle sessions can be kept alive by sending a trivial SQL query
		 * periodically, e.g., `"SELECT 1"`.
		 * Post v1/{database}/sessions
		 * @param {string} database Required. The database in which the new session is created.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_sessions_create(database: string, requestBody: CreateSessionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/sessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates multiple new sessions.
		 * This API can be used to initialize a session cache on the clients.
		 * See https://goo.gl/TgSFN2 for best practices on session cache management.
		 * Post v1/{database}/sessions:batchCreate
		 * @param {string} database Required. The database in which the new sessions are created.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_sessions_batchCreate(database: string, requestBody: BatchCreateSessionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/sessions:batchCreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is
		 * no longer interested in the operation result. It does not cancel the
		 * operation. If the server doesn't support this method, it returns
		 * `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_backups_operations_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a particular instance configuration.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the requested instance configuration. Values are of
		 * the form `projects/<project>/instanceConfigs/<config>`.
		 * @param {string} fieldMask If field_mask is present, specifies the subset of Instance fields that
		 * should be returned.
		 * If absent, all Instance fields are returned.
		 * @return {void} Successful response
		 */
		Spanner_projects_instanceConfigs_get(name: string, fieldMask: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&fieldMask=' + (fieldMask == null ? '' : encodeURIComponent(fieldMask)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a pending or completed Backup.
		 * Patch v1/{name}
		 * @param {string} name Output only for the CreateBackup operation.
		 * Required for the UpdateBackup operation.
		 * A globally unique identifier for the backup which cannot be
		 * changed. Values are of the form
		 * `projects/<project>/instances/<instance>/backups/a-z*[a-z0-9]`
		 * The final segment of the name must be between 2 and 60 characters
		 * in length.
		 * The backup is stored in the location(s) specified in the instance
		 * configuration of the instance containing the backup, identified
		 * by the prefix of the backup name of the form
		 * `projects/<project>/instances/<instance>`.
		 * @param {string} updateMask Required. A mask specifying which fields (e.g. `expire_time`) in the
		 * Backup resource should be updated. This mask is relative to the Backup
		 * resource, not to the request message. The field mask must always be
		 * specified; this prevents any future fields from being erased accidentally
		 * by clients that do not know about them.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_backups_patch(name: string, updateMask: string | null | undefined, requestBody: Backup): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation.  The server
		 * makes a best effort to cancel the operation, but success is not
		 * guaranteed.  If the server doesn't support this method, it returns
		 * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
		 * Operations.GetOperation or
		 * other methods to check whether the cancellation succeeded or whether the
		 * operation completed despite cancellation. On successful cancellation,
		 * the operation is not deleted; instead, it becomes an operation with
		 * an Operation.error value with a google.rpc.Status.code of 1,
		 * corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_backups_operations_cancel(name: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the backup long-running operations in
		 * the given instance. A backup operation has a name of the form
		 * `projects/<project>/instances/<instance>/backups/<backup>/operations/<operation>`.
		 * The long-running operation
		 * metadata field type
		 * `metadata.type_url` describes the type of the metadata. Operations returned
		 * include those that have completed/failed/canceled within the last 7 days,
		 * and pending operations. Operations returned are ordered by
		 * `operation.metadata.value.progress.start_time` in descending order starting
		 * from the most recently started operation.
		 * Get v1/{parent}/backupOperations
		 * @param {string} parent Required. The instance of the backup operations. Values are of
		 * the form `projects/<project>/instances/<instance>`.
		 * @param {string} filter An expression that filters the list of returned backup operations.
		 * A filter expression consists of a field name, a
		 * comparison operator, and a value for filtering.
		 * The value must be a string, a number, or a boolean. The comparison operator
		 * must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`.
		 * Colon `:` is the contains operator. Filter rules are not case sensitive.
		 * The following fields in the operation
		 * are eligible for filtering:
		 *   * `name` - The name of the long-running operation
		 *   * `done` - False if the operation is in progress, else true.
		 *   * `metadata.@type` - the type of metadata. For example, the type string
		 *      for CreateBackupMetadata is
		 *      `type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata`.
		 *   * `metadata.<field_name>` - any field in metadata.value.
		 *   * `error` - Error associated with the long-running operation.
		 *   * `response.@type` - the type of response.
		 *   * `response.<field_name>` - any field in response.value.
		 * You can combine multiple expressions by enclosing each expression in
		 * parentheses. By default, expressions are combined with AND logic, but
		 * you can specify AND, OR, and NOT logic explicitly.
		 * Here are a few examples:
		 *   * `done:true` - The operation is complete.
		 *   * `metadata.database:prod` - The database the backup was taken from has
		 *      a name containing the string "prod".
		 *   * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.CreateBackupMetadata) AND` <br/>
		 *     `(metadata.name:howl) AND` <br/>
		 *     `(metadata.progress.start_time < \"2018-03-28T14:50:00Z\") AND` <br/>
		 *     `(error:*)` - Returns operations where:
		 *     * The operation's metadata type is CreateBackupMetadata.
		 *     * The backup name contains the string "howl".
		 *     * The operation started before 2018-03-28T14:50:00Z.
		 *     * The operation resulted in an error.
		 * @param {number} pageSize Number of operations to be returned in the response. If 0 or
		 * less, defaults to the server's maximum allowed page size.
		 * @param {string} pageToken If non-empty, `page_token` should contain a
		 * next_page_token
		 * from a previous ListBackupOperationsResponse to the
		 * same `parent` and with the same `filter`.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_backupOperations_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backupOperations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists completed and pending backups.
		 * Backups returned are ordered by `create_time` in descending order,
		 * starting from the most recent `create_time`.
		 * Get v1/{parent}/backups
		 * @param {string} parent Required. The instance to list backups from.  Values are of the
		 * form `projects/<project>/instances/<instance>`.
		 * @param {string} filter An expression that filters the list of returned backups.
		 * A filter expression consists of a field name, a comparison operator, and a
		 * value for filtering.
		 * The value must be a string, a number, or a boolean. The comparison operator
		 * must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`.
		 * Colon `:` is the contains operator. Filter rules are not case sensitive.
		 * The following fields in the Backup are eligible for filtering:
		 *   * `name`
		 *   * `database`
		 *   * `state`
		 *   * `create_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ)
		 *   * `expire_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ)
		 *   * `size_bytes`
		 * You can combine multiple expressions by enclosing each expression in
		 * parentheses. By default, expressions are combined with AND logic, but
		 * you can specify AND, OR, and NOT logic explicitly.
		 * Here are a few examples:
		 *   * `name:Howl` - The backup's name contains the string "howl".
		 *   * `database:prod`
		 *          - The database's name contains the string "prod".
		 *   * `state:CREATING` - The backup is pending creation.
		 *   * `state:READY` - The backup is fully created and ready for use.
		 *   * `(name:howl) AND (create_time < \"2018-03-28T14:50:00Z\")`
		 *          - The backup name contains the string "howl" and `create_time`
		 *              of the backup is before 2018-03-28T14:50:00Z.
		 *   * `expire_time < \"2018-03-28T14:50:00Z\"`
		 *          - The backup `expire_time` is before 2018-03-28T14:50:00Z.
		 *   * `size_bytes > 10000000000` - The backup's size is greater than 10GB
		 * @param {number} pageSize Number of backups to be returned in the response. If 0 or
		 * less, defaults to the server's maximum allowed page size.
		 * @param {string} pageToken If non-empty, `page_token` should contain a
		 * next_page_token from a
		 * previous ListBackupsResponse to the same `parent` and with the same
		 * `filter`.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_backups_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts creating a new Cloud Spanner Backup.
		 * The returned backup long-running operation
		 * will have a name of the format
		 * `projects/<project>/instances/<instance>/backups/<backup>/operations/<operation_id>`
		 * and can be used to track creation of the backup. The
		 * metadata field type is
		 * CreateBackupMetadata. The
		 * response field type is
		 * Backup, if successful. Cancelling the returned operation will stop the
		 * creation and delete the backup.
		 * There can be only one pending backup creation per database. Backup creation
		 * of different databases can run concurrently.
		 * Post v1/{parent}/backups
		 * @param {string} parent Required. The name of the instance in which the backup will be
		 * created. This must be the same instance that contains the database the
		 * backup will be created from. The backup will be stored in the
		 * location(s) specified in the instance configuration of this
		 * instance. Values are of the form
		 * `projects/<project>/instances/<instance>`.
		 * @param {string} backupId Required. The id of the backup to be created. The `backup_id` appended to
		 * `parent` forms the full backup name of the form
		 * `projects/<project>/instances/<instance>/backups/<backup_id>`.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_backups_create(parent: string, backupId: string | null | undefined, requestBody: Backup): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups&backupId=' + (backupId == null ? '' : encodeURIComponent(backupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists database longrunning-operations.
		 * A database operation has a name of the form
		 * `projects/<project>/instances/<instance>/databases/<database>/operations/<operation>`.
		 * The long-running operation
		 * metadata field type
		 * `metadata.type_url` describes the type of the metadata. Operations returned
		 * include those that have completed/failed/canceled within the last 7 days,
		 * and pending operations.
		 * Get v1/{parent}/databaseOperations
		 * @param {string} parent Required. The instance of the database operations.
		 * Values are of the form `projects/<project>/instances/<instance>`.
		 * @param {string} filter An expression that filters the list of returned operations.
		 * A filter expression consists of a field name, a
		 * comparison operator, and a value for filtering.
		 * The value must be a string, a number, or a boolean. The comparison operator
		 * must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`.
		 * Colon `:` is the contains operator. Filter rules are not case sensitive.
		 * The following fields in the Operation
		 * are eligible for filtering:
		 *   * `name` - The name of the long-running operation
		 *   * `done` - False if the operation is in progress, else true.
		 *   * `metadata.@type` - the type of metadata. For example, the type string
		 *      for RestoreDatabaseMetadata is
		 *      `type.googleapis.com/google.spanner.admin.database.v1.RestoreDatabaseMetadata`.
		 *   * `metadata.<field_name>` - any field in metadata.value.
		 *   * `error` - Error associated with the long-running operation.
		 *   * `response.@type` - the type of response.
		 *   * `response.<field_name>` - any field in response.value.
		 * You can combine multiple expressions by enclosing each expression in
		 * parentheses. By default, expressions are combined with AND logic. However,
		 * you can specify AND, OR, and NOT logic explicitly.
		 * Here are a few examples:
		 *   * `done:true` - The operation is complete.
		 *   * `(metadata.@type=type.googleapis.com/google.spanner.admin.database.v1.RestoreDatabaseMetadata) AND` <br/>
		 *     `(metadata.source_type:BACKUP) AND` <br/>
		 *     `(metadata.backup_info.backup:backup_howl) AND` <br/>
		 *     `(metadata.name:restored_howl) AND` <br/>
		 *     `(metadata.progress.start_time < \"2018-03-28T14:50:00Z\") AND` <br/>
		 *     `(error:*)` - Return operations where:
		 *     * The operation's metadata type is RestoreDatabaseMetadata.
		 *     * The database is restored from a backup.
		 *     * The backup name contains "backup_howl".
		 *     * The restored database's name contains "restored_howl".
		 *     * The operation started before 2018-03-28T14:50:00Z.
		 *     * The operation resulted in an error.
		 * @param {number} pageSize Number of operations to be returned in the response. If 0 or
		 * less, defaults to the server's maximum allowed page size.
		 * @param {string} pageToken If non-empty, `page_token` should contain a
		 * next_page_token
		 * from a previous ListDatabaseOperationsResponse to the
		 * same `parent` and with the same `filter`.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databaseOperations_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/databaseOperations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists Cloud Spanner databases.
		 * Get v1/{parent}/databases
		 * @param {string} parent Required. The instance whose databases should be listed.
		 * Values are of the form `projects/<project>/instances/<instance>`.
		 * @param {number} pageSize Number of databases to be returned in the response. If 0 or less,
		 * defaults to the server's maximum allowed page size.
		 * @param {string} pageToken If non-empty, `page_token` should contain a
		 * next_page_token from a
		 * previous ListDatabasesResponse.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/databases&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new Cloud Spanner database and starts to prepare it for serving.
		 * The returned long-running operation will
		 * have a name of the format `<database_name>/operations/<operation_id>` and
		 * can be used to track preparation of the database. The
		 * metadata field type is
		 * CreateDatabaseMetadata. The
		 * response field type is
		 * Database, if successful.
		 * Post v1/{parent}/databases
		 * @param {string} parent Required. The name of the instance that will serve the new database.
		 * Values are of the form `projects/<project>/instances/<instance>`.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_create(parent: string, requestBody: CreateDatabaseRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/databases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new database by restoring from a completed backup. The new
		 * database must be in the same project and in an instance with the same
		 * instance configuration as the instance containing
		 * the backup. The returned database long-running
		 * operation has a name of the format
		 * `projects/<project>/instances/<instance>/databases/<database>/operations/<operation_id>`,
		 * and can be used to track the progress of the operation, and to cancel it.
		 * The metadata field type is
		 * RestoreDatabaseMetadata.
		 * The response type
		 * is Database, if
		 * successful. Cancelling the returned operation will stop the restore and
		 * delete the database.
		 * There can be only one database being restored into an instance at a time.
		 * Once the restore operation completes, a new restore operation can be
		 * initiated, without waiting for the optimize operation associated with the
		 * first restore to complete.
		 * Post v1/{parent}/databases:restore
		 * @param {string} parent Required. The name of the instance in which to create the
		 * restored database. This instance must be in the same project and
		 * have the same instance configuration as the instance containing
		 * the source backup. Values are of the form
		 * `projects/<project>/instances/<instance>`.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_restore(parent: string, requestBody: RestoreDatabaseRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/databases:restore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the supported instance configurations for a given project.
		 * Get v1/{parent}/instanceConfigs
		 * @param {string} parent Required. The name of the project for which a list of supported instance
		 * configurations is requested. Values are of the form
		 * `projects/<project>`.
		 * @param {number} pageSize Number of instance configurations to be returned in the response. If 0 or
		 * less, defaults to the server's maximum allowed page size.
		 * @param {string} pageToken If non-empty, `page_token` should contain a
		 * next_page_token
		 * from a previous ListInstanceConfigsResponse.
		 * @return {void} Successful response
		 */
		Spanner_projects_instanceConfigs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instanceConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all instances in the given project.
		 * Get v1/{parent}/instances
		 * @param {string} parent Required. The name of the project for which a list of instances is
		 * requested. Values are of the form `projects/<project>`.
		 * @param {string} filter An expression for filtering the results of the request. Filter rules are
		 * case insensitive. The fields eligible for filtering are:
		 *   * `name`
		 *   * `display_name`
		 *   * `labels.key` where key is the name of a label
		 * Some examples of using filters are:
		 *   * `name:*` --> The instance has a name.
		 *   * `name:Howl` --> The instance's name contains the string "howl".
		 *   * `name:HOWL` --> Equivalent to above.
		 *   * `NAME:howl` --> Equivalent to above.
		 *   * `labels.env:*` --> The instance has the label "env".
		 *   * `labels.env:dev` --> The instance has the label "env" and the value of
		 *                        the label contains the string "dev".
		 *   * `name:howl labels.env:dev` --> The instance's name contains "howl" and
		 *                                  it has the label "env" with its value
		 *                                  containing "dev".
		 * @param {number} pageSize Number of instances to be returned in the response. If 0 or less, defaults
		 * to the server's maximum allowed page size.
		 * @param {string} pageToken If non-empty, `page_token` should contain a
		 * next_page_token from a
		 * previous ListInstancesResponse.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an instance and begins preparing it to begin serving. The
		 * returned long-running operation
		 * can be used to track the progress of preparing the new
		 * instance. The instance name is assigned by the caller. If the
		 * named instance already exists, `CreateInstance` returns
		 * `ALREADY_EXISTS`.
		 * Immediately upon completion of this request:
		 * * The instance is readable via the API, with all requested attributes
		 * but no allocated resources. Its state is `CREATING`.
		 * Until completion of the returned operation:
		 * * Cancelling the operation renders the instance immediately unreadable
		 * via the API.
		 * * The instance can be deleted.
		 * * All other attempts to modify the instance are rejected.
		 * Upon completion of the returned operation:
		 * * Billing for all successfully-allocated resources begins (some types
		 * may have lower than the requested levels).
		 * * Databases can be created in the instance.
		 * * The instance's allocated resource levels are readable via the API.
		 * * The instance's state becomes `READY`.
		 * The returned long-running operation will
		 * have a name of the format `<instance_name>/operations/<operation_id>` and
		 * can be used to track creation of the instance.  The
		 * metadata field type is
		 * CreateInstanceMetadata.
		 * The response field type is
		 * Instance, if successful.
		 * Post v1/{parent}/instances
		 * @param {string} parent Required. The name of the project in which to create the instance. Values
		 * are of the form `projects/<project>`.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_create(parent: string, requestBody: CreateInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the access control policy for a database or backup resource.
		 * Returns an empty policy if a database or backup exists but does not have a
		 * policy set.
		 * Authorization requires `spanner.databases.getIamPolicy` permission on
		 * resource.
		 * For backups, authorization requires `spanner.backups.getIamPolicy`
		 * permission on resource.
		 * Post v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_backups_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the access control policy on a database or backup resource.
		 * Replaces any existing policy.
		 * Authorization requires `spanner.databases.setIamPolicy`
		 * permission on resource.
		 * For backups, authorization requires `spanner.backups.setIamPolicy`
		 * permission on resource.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for databases resources.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_backups_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns permissions that the caller has on the specified database or backup
		 * resource.
		 * Attempting this RPC on a non-existent Cloud Spanner database will
		 * result in a NOT_FOUND error if the user has
		 * `spanner.databases.list` permission on the containing Cloud
		 * Spanner instance. Otherwise returns an empty set of permissions.
		 * Calling this method on a backup that does not exist will
		 * result in a NOT_FOUND error if the user has
		 * `spanner.backups.list` permission on the containing instance.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_backups_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Begins a new transaction. This step can often be skipped:
		 * Read, ExecuteSql and
		 * Commit can begin a new transaction as a
		 * side-effect.
		 * Post v1/{session}:beginTransaction
		 * @param {string} session Required. The session in which the transaction runs.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_sessions_beginTransaction(session: string, requestBody: BeginTransactionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':beginTransaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Commits a transaction. The request includes the mutations to be
		 * applied to rows in the database.
		 * `Commit` might return an `ABORTED` error. This can occur at any time;
		 * commonly, the cause is conflicts with concurrent
		 * transactions. However, it can also happen for a variety of other
		 * reasons. If `Commit` returns `ABORTED`, the caller should re-attempt
		 * the transaction from the beginning, re-using the same session.
		 * Post v1/{session}:commit
		 * @param {string} session Required. The session in which the transaction to be committed is running.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_sessions_commit(session: string, requestBody: CommitRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':commit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Executes a batch of SQL DML statements. This method allows many statements
		 * to be run with lower latency than submitting them sequentially with
		 * ExecuteSql.
		 * Statements are executed in sequential order. A request can succeed even if
		 * a statement fails. The ExecuteBatchDmlResponse.status field in the
		 * response provides information about the statement that failed. Clients must
		 * inspect this field to determine whether an error occurred.
		 * Execution stops after the first failed statement; the remaining statements
		 * are not executed.
		 * Post v1/{session}:executeBatchDml
		 * @param {string} session Required. The session in which the DML statements should be performed.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_sessions_executeBatchDml(session: string, requestBody: ExecuteBatchDmlRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':executeBatchDml', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Executes an SQL statement, returning all results in a single reply. This
		 * method cannot be used to return a result set larger than 10 MiB;
		 * if the query yields more data than that, the query fails with
		 * a `FAILED_PRECONDITION` error.
		 * Operations inside read-write transactions might return `ABORTED`. If
		 * this occurs, the application should restart the transaction from
		 * the beginning. See Transaction for more details.
		 * Larger result sets can be fetched in streaming fashion by calling
		 * ExecuteStreamingSql instead.
		 * Post v1/{session}:executeSql
		 * @param {string} session Required. The session in which the SQL query should be performed.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_sessions_executeSql(session: string, requestBody: ExecuteSqlRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':executeSql', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Like ExecuteSql, except returns the result
		 * set as a stream. Unlike ExecuteSql, there
		 * is no limit on the size of the returned result set. However, no
		 * individual row in the result set can exceed 100 MiB, and no
		 * column value can exceed 10 MiB.
		 * Post v1/{session}:executeStreamingSql
		 * @param {string} session Required. The session in which the SQL query should be performed.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_sessions_executeStreamingSql(session: string, requestBody: ExecuteSqlRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':executeStreamingSql', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a set of partition tokens that can be used to execute a query
		 * operation in parallel.  Each of the returned partition tokens can be used
		 * by ExecuteStreamingSql to specify a subset
		 * of the query result to read.  The same session and read-only transaction
		 * must be used by the PartitionQueryRequest used to create the
		 * partition tokens and the ExecuteSqlRequests that use the partition tokens.
		 * Partition tokens become invalid when the session used to create them
		 * is deleted, is idle for too long, begins a new transaction, or becomes too
		 * old.  When any of these happen, it is not possible to resume the query, and
		 * the whole operation must be restarted from the beginning.
		 * Post v1/{session}:partitionQuery
		 * @param {string} session Required. The session used to create the partitions.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_sessions_partitionQuery(session: string, requestBody: PartitionQueryRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':partitionQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a set of partition tokens that can be used to execute a read
		 * operation in parallel.  Each of the returned partition tokens can be used
		 * by StreamingRead to specify a subset of the read
		 * result to read.  The same session and read-only transaction must be used by
		 * the PartitionReadRequest used to create the partition tokens and the
		 * ReadRequests that use the partition tokens.  There are no ordering
		 * guarantees on rows returned among the returned partition tokens, or even
		 * within each individual StreamingRead call issued with a partition_token.
		 * Partition tokens become invalid when the session used to create them
		 * is deleted, is idle for too long, begins a new transaction, or becomes too
		 * old.  When any of these happen, it is not possible to resume the read, and
		 * the whole operation must be restarted from the beginning.
		 * Post v1/{session}:partitionRead
		 * @param {string} session Required. The session used to create the partitions.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_sessions_partitionRead(session: string, requestBody: PartitionReadRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':partitionRead', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reads rows from the database using key lookups and scans, as a
		 * simple key/value style alternative to
		 * ExecuteSql.  This method cannot be used to
		 * return a result set larger than 10 MiB; if the read matches more
		 * data than that, the read fails with a `FAILED_PRECONDITION`
		 * error.
		 * Reads inside read-write transactions might return `ABORTED`. If
		 * this occurs, the application should restart the transaction from
		 * the beginning. See Transaction for more details.
		 * Larger result sets can be yielded in streaming fashion by calling
		 * StreamingRead instead.
		 * Post v1/{session}:read
		 * @param {string} session Required. The session in which the read should be performed.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_sessions_read(session: string, requestBody: ReadRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':read', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rolls back a transaction, releasing any locks it holds. It is a good
		 * idea to call this for any transaction that includes one or more
		 * Read or ExecuteSql requests and
		 * ultimately decides not to commit.
		 * `Rollback` returns `OK` if it successfully aborts the transaction, the
		 * transaction was already aborted, or the transaction is not
		 * found. `Rollback` never returns `ABORTED`.
		 * Post v1/{session}:rollback
		 * @param {string} session Required. The session in which the transaction to roll back is running.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_sessions_rollback(session: string, requestBody: RollbackRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':rollback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Like Read, except returns the result set as a
		 * stream. Unlike Read, there is no limit on the
		 * size of the returned result set. However, no individual row in
		 * the result set can exceed 100 MiB, and no column value can exceed
		 * 10 MiB.
		 * Post v1/{session}:streamingRead
		 * @param {string} session Required. The session in which the read should be performed.
		 * @return {void} Successful response
		 */
		Spanner_projects_instances_databases_sessions_streamingRead(session: string, requestBody: ReadRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (session == null ? '' : encodeURIComponent(session)) + ':streamingRead', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

