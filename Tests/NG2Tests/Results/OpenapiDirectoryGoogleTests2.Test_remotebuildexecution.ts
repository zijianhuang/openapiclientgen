import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * An `Action` captures all the information about an execution which is required
	 * to reproduce it.
	 * `Action`s are the core component of the [Execution] service. A single
	 * `Action` represents a repeatable action that can be performed by the
	 * execution service. `Action`s can be succinctly identified by the digest of
	 * their wire format encoding and, once an `Action` has been executed, will be
	 * cached in the action cache. Future requests can then use the cached result
	 * rather than needing to run afresh.
	 * When a server completes execution of an
	 * Action, it MAY choose to
	 * cache the result in
	 * the ActionCache unless
	 * `do_not_cache` is `true`. Clients SHOULD expect the server to do so. By
	 * default, future calls to
	 * Execute the same
	 * `Action` will also serve their results from the cache. Clients must take care
	 * to understand the caching behaviour. Ideally, all `Action`s will be
	 * reproducible so that serving a result from cache is always desirable and
	 * correct.
	 */
	export interface BuildBazelRemoteExecutionV2Action {

		/**
		 * A content digest. A digest for a given blob consists of the size of the blob
		 * and its hash. The hash algorithm to use is defined by the server.
		 * The size is considered to be an integral part of the digest and cannot be
		 * separated. That is, even if the `hash` field is correctly specified but
		 * `size_bytes` is not, the server MUST reject the request.
		 * The reason for including the size in the digest is as follows: in a great
		 * many cases, the server needs to know the size of the blob it is about to work
		 * with prior to starting an operation with it, such as flattening Merkle tree
		 * structures or streaming it to a worker. Technically, the server could
		 * implement a separate metadata store, but this results in a significantly more
		 * complicated implementation as opposed to having the client specify the size
		 * up-front (or storing the size along with the digest in every message where
		 * digests are embedded). This does mean that the API leaks some implementation
		 * details of (what we consider to be) a reasonable server implementation, but
		 * we consider this to be a worthwhile tradeoff.
		 * When a `Digest` is used to refer to a proto message, it always refers to the
		 * message in binary encoded form. To ensure consistent hashing, clients and
		 * servers MUST ensure that they serialize messages according to the following
		 * rules, even if there are alternate valid encodings for the same message:
		 * * Fields are serialized in tag order.
		 * * There are no unknown fields.
		 * * There are no duplicate fields.
		 * * Fields are serialized according to the default semantics for their type.
		 * Most protocol buffer implementations will always follow these rules when
		 * serializing, but care should be taken to avoid shortcuts. For instance,
		 * concatenating two messages to merge them may produce duplicate fields.
		 */
		commandDigest?: BuildBazelRemoteExecutionV2Digest;

		/**
		 * If true, then the `Action`'s result cannot be cached, and in-flight
		 * requests for the same `Action` may not be merged.
		 */
		doNotCache?: boolean;

		/**
		 * A content digest. A digest for a given blob consists of the size of the blob
		 * and its hash. The hash algorithm to use is defined by the server.
		 * The size is considered to be an integral part of the digest and cannot be
		 * separated. That is, even if the `hash` field is correctly specified but
		 * `size_bytes` is not, the server MUST reject the request.
		 * The reason for including the size in the digest is as follows: in a great
		 * many cases, the server needs to know the size of the blob it is about to work
		 * with prior to starting an operation with it, such as flattening Merkle tree
		 * structures or streaming it to a worker. Technically, the server could
		 * implement a separate metadata store, but this results in a significantly more
		 * complicated implementation as opposed to having the client specify the size
		 * up-front (or storing the size along with the digest in every message where
		 * digests are embedded). This does mean that the API leaks some implementation
		 * details of (what we consider to be) a reasonable server implementation, but
		 * we consider this to be a worthwhile tradeoff.
		 * When a `Digest` is used to refer to a proto message, it always refers to the
		 * message in binary encoded form. To ensure consistent hashing, clients and
		 * servers MUST ensure that they serialize messages according to the following
		 * rules, even if there are alternate valid encodings for the same message:
		 * * Fields are serialized in tag order.
		 * * There are no unknown fields.
		 * * There are no duplicate fields.
		 * * Fields are serialized according to the default semantics for their type.
		 * Most protocol buffer implementations will always follow these rules when
		 * serializing, but care should be taken to avoid shortcuts. For instance,
		 * concatenating two messages to merge them may produce duplicate fields.
		 */
		inputRootDigest?: BuildBazelRemoteExecutionV2Digest;

		/**
		 * List of required supported NodeProperty
		 * keys. In order to ensure that equivalent `Action`s always hash to the same
		 * value, the supported node properties MUST be lexicographically sorted by name.
		 * Sorting of strings is done by code point, equivalently, by the UTF-8 bytes.
		 * The interpretation of these properties is server-dependent. If a property is
		 * not recognized by the server, the server will return an `INVALID_ARGUMENT`
		 * error.
		 */
		outputNodeProperties?: Array<string>;

		/**
		 * A timeout after which the execution should be killed. If the timeout is
		 * absent, then the client is specifying that the execution should continue
		 * as long as the server will let it. The server SHOULD impose a timeout if
		 * the client does not specify one, however, if the client does specify a
		 * timeout that is longer than the server's maximum timeout, the server MUST
		 * reject the request.
		 * The timeout is a part of the
		 * Action message, and
		 * therefore two `Actions` with different timeouts are different, even if they
		 * are otherwise identical. This is because, if they were not, running an
		 * `Action` with a lower timeout than is required might result in a cache hit
		 * from an execution run with a longer timeout, hiding the fact that the
		 * timeout is too short. By encoding it directly in the `Action`, a lower
		 * timeout will result in a cache miss and the execution timeout will fail
		 * immediately, rather than whenever the cache entry gets evicted.
		 */
		timeout?: string;
	}


	/**
	 * A content digest. A digest for a given blob consists of the size of the blob
	 * and its hash. The hash algorithm to use is defined by the server.
	 * The size is considered to be an integral part of the digest and cannot be
	 * separated. That is, even if the `hash` field is correctly specified but
	 * `size_bytes` is not, the server MUST reject the request.
	 * The reason for including the size in the digest is as follows: in a great
	 * many cases, the server needs to know the size of the blob it is about to work
	 * with prior to starting an operation with it, such as flattening Merkle tree
	 * structures or streaming it to a worker. Technically, the server could
	 * implement a separate metadata store, but this results in a significantly more
	 * complicated implementation as opposed to having the client specify the size
	 * up-front (or storing the size along with the digest in every message where
	 * digests are embedded). This does mean that the API leaks some implementation
	 * details of (what we consider to be) a reasonable server implementation, but
	 * we consider this to be a worthwhile tradeoff.
	 * When a `Digest` is used to refer to a proto message, it always refers to the
	 * message in binary encoded form. To ensure consistent hashing, clients and
	 * servers MUST ensure that they serialize messages according to the following
	 * rules, even if there are alternate valid encodings for the same message:
	 * * Fields are serialized in tag order.
	 * * There are no unknown fields.
	 * * There are no duplicate fields.
	 * * Fields are serialized according to the default semantics for their type.
	 * Most protocol buffer implementations will always follow these rules when
	 * serializing, but care should be taken to avoid shortcuts. For instance,
	 * concatenating two messages to merge them may produce duplicate fields.
	 */
	export interface BuildBazelRemoteExecutionV2Digest {

		/**
		 * The hash. In the case of SHA-256, it will always be a lowercase hex string
		 * exactly 64 characters long.
		 */
		hash?: string;

		/** The size of the blob, in bytes. */
		sizeBytes?: string;
	}


	/**
	 * An ActionResult represents the result of an
	 * Action being run.
	 */
	export interface BuildBazelRemoteExecutionV2ActionResult {

		/** ExecutedActionMetadata contains details about a completed execution. */
		executionMetadata?: BuildBazelRemoteExecutionV2ExecutedActionMetadata;

		/** The exit code of the command. */
		exitCode?: number;

		/**
		 * The output directories of the action. For each output directory requested
		 * in the `output_directories` or `output_paths` field of the Action, if the
		 * corresponding directory existed after the action completed, a single entry
		 * will be present in the output list, which will contain the digest of a
		 * Tree message containing the
		 * directory tree, and the path equal exactly to the corresponding Action
		 * output_directories member.
		 * As an example, suppose the Action had an output directory `a/b/dir` and the
		 * execution produced the following contents in `a/b/dir`: a file named `bar`
		 * and a directory named `foo` with an executable file named `baz`. Then,
		 * output_directory will contain (hashes shortened for readability):
		 * ```json
		 * // OutputDirectory proto:
		 * {
		 * path: "a/b/dir"
		 * tree_digest: {
		 * hash: "4a73bc9d03...",
		 * size: 55
		 * }
		 * }
		 * // Tree proto with hash "4a73bc9d03..." and size 55:
		 * {
		 * root: {
		 * files: [
		 * {
		 * name: "bar",
		 * digest: {
		 * hash: "4a73bc9d03...",
		 * size: 65534
		 * }
		 * }
		 * ],
		 * directories: [
		 * {
		 * name: "foo",
		 * digest: {
		 * hash: "4cf2eda940...",
		 * size: 43
		 * }
		 * }
		 * ]
		 * }
		 * children : {
		 * // (Directory proto with hash "4cf2eda940..." and size 43)
		 * files: [
		 * {
		 * name: "baz",
		 * digest: {
		 * hash: "b2c941073e...",
		 * size: 1294,
		 * },
		 * is_executable: true
		 * }
		 * ]
		 * }
		 * }
		 * ```
		 * If an output of the same name as listed in `output_files` of
		 * the Command was found in `output_directories`, but was not a directory, the
		 * server will return a FAILED_PRECONDITION.
		 */
		outputDirectories?: Array<BuildBazelRemoteExecutionV2OutputDirectory>;

		/**
		 * The output directories of the action that are symbolic links to other
		 * directories. Those may be links to other output directories, or input
		 * directories, or even absolute paths outside of the working directory,
		 * if the server supports
		 * SymlinkAbsolutePathStrategy.ALLOWED.
		 * For each output directory requested in the `output_directories` field of
		 * the Action, if the directory existed after the action completed, a
		 * single entry will be present either in this field, or in the
		 * `output_directories` field, if the directory was not a symbolic link.
		 * If an output of the same name was found, but was a symbolic link to a file
		 * instead of a directory, the server will return a FAILED_PRECONDITION.
		 * If the action does not produce the requested output, then that output
		 * will be omitted from the list. The server is free to arrange the output
		 * list as desired; clients MUST NOT assume that the output list is sorted.
		 * DEPRECATED as of v2.1. Servers that wish to be compatible with v2.0 API
		 * should still populate this field in addition to `output_symlinks`.
		 */
		outputDirectorySymlinks?: Array<BuildBazelRemoteExecutionV2OutputSymlink>;

		/**
		 * The output files of the action that are symbolic links to other files. Those
		 * may be links to other output files, or input files, or even absolute paths
		 * outside of the working directory, if the server supports
		 * SymlinkAbsolutePathStrategy.ALLOWED.
		 * For each output file requested in the `output_files` or `output_paths`
		 * field of the Action, if the corresponding file existed after
		 * the action completed, a single entry will be present either in this field,
		 * or in the `output_files` field, if the file was not a symbolic link.
		 * If an output symbolic link of the same name as listed in `output_files` of
		 * the Command was found, but its target type was not a regular file, the
		 * server will return a FAILED_PRECONDITION.
		 * If the action does not produce the requested output, then that output
		 * will be omitted from the list. The server is free to arrange the output
		 * list as desired; clients MUST NOT assume that the output list is sorted.
		 * DEPRECATED as of v2.1. Servers that wish to be compatible with v2.0 API
		 * should still populate this field in addition to `output_symlinks`.
		 */
		outputFileSymlinks?: Array<BuildBazelRemoteExecutionV2OutputSymlink>;

		/**
		 * The output files of the action. For each output file requested in the
		 * `output_files` or `output_paths` field of the Action, if the corresponding
		 * file existed after the action completed, a single entry will be present
		 * either in this field, or the `output_file_symlinks` field if the file was
		 * a symbolic link to another file (`output_symlinks` field after v2.1).
		 * If an output listed in `output_files` was found, but was a directory rather
		 * than a regular file, the server will return a FAILED_PRECONDITION.
		 * If the action does not produce the requested output, then that output
		 * will be omitted from the list. The server is free to arrange the output
		 * list as desired; clients MUST NOT assume that the output list is sorted.
		 */
		outputFiles?: Array<BuildBazelRemoteExecutionV2OutputFile>;

		/**
		 * New in v2.1: this field will only be populated if the command
		 * `output_paths` field was used, and not the pre v2.1 `output_files` or
		 * `output_directories` fields.
		 * The output paths of the action that are symbolic links to other paths. Those
		 * may be links to other outputs, or inputs, or even absolute paths
		 * outside of the working directory, if the server supports
		 * SymlinkAbsolutePathStrategy.ALLOWED.
		 * A single entry for each output requested in `output_paths`
		 * field of the Action, if the corresponding path existed after
		 * the action completed and was a symbolic link.
		 * If the action does not produce a requested output, then that output
		 * will be omitted from the list. The server is free to arrange the output
		 * list as desired; clients MUST NOT assume that the output list is sorted.
		 */
		outputSymlinks?: Array<BuildBazelRemoteExecutionV2OutputSymlink>;

		/**
		 * A content digest. A digest for a given blob consists of the size of the blob
		 * and its hash. The hash algorithm to use is defined by the server.
		 * The size is considered to be an integral part of the digest and cannot be
		 * separated. That is, even if the `hash` field is correctly specified but
		 * `size_bytes` is not, the server MUST reject the request.
		 * The reason for including the size in the digest is as follows: in a great
		 * many cases, the server needs to know the size of the blob it is about to work
		 * with prior to starting an operation with it, such as flattening Merkle tree
		 * structures or streaming it to a worker. Technically, the server could
		 * implement a separate metadata store, but this results in a significantly more
		 * complicated implementation as opposed to having the client specify the size
		 * up-front (or storing the size along with the digest in every message where
		 * digests are embedded). This does mean that the API leaks some implementation
		 * details of (what we consider to be) a reasonable server implementation, but
		 * we consider this to be a worthwhile tradeoff.
		 * When a `Digest` is used to refer to a proto message, it always refers to the
		 * message in binary encoded form. To ensure consistent hashing, clients and
		 * servers MUST ensure that they serialize messages according to the following
		 * rules, even if there are alternate valid encodings for the same message:
		 * * Fields are serialized in tag order.
		 * * There are no unknown fields.
		 * * There are no duplicate fields.
		 * * Fields are serialized according to the default semantics for their type.
		 * Most protocol buffer implementations will always follow these rules when
		 * serializing, but care should be taken to avoid shortcuts. For instance,
		 * concatenating two messages to merge them may produce duplicate fields.
		 */
		stderrDigest?: BuildBazelRemoteExecutionV2Digest;

		/**
		 * The standard error buffer of the action. The server SHOULD NOT inline
		 * stderr unless requested by the client in the
		 * GetActionResultRequest
		 * message. The server MAY omit inlining, even if requested, and MUST do so if inlining
		 * would cause the response to exceed message size limits.
		 */
		stderrRaw?: string;

		/**
		 * A content digest. A digest for a given blob consists of the size of the blob
		 * and its hash. The hash algorithm to use is defined by the server.
		 * The size is considered to be an integral part of the digest and cannot be
		 * separated. That is, even if the `hash` field is correctly specified but
		 * `size_bytes` is not, the server MUST reject the request.
		 * The reason for including the size in the digest is as follows: in a great
		 * many cases, the server needs to know the size of the blob it is about to work
		 * with prior to starting an operation with it, such as flattening Merkle tree
		 * structures or streaming it to a worker. Technically, the server could
		 * implement a separate metadata store, but this results in a significantly more
		 * complicated implementation as opposed to having the client specify the size
		 * up-front (or storing the size along with the digest in every message where
		 * digests are embedded). This does mean that the API leaks some implementation
		 * details of (what we consider to be) a reasonable server implementation, but
		 * we consider this to be a worthwhile tradeoff.
		 * When a `Digest` is used to refer to a proto message, it always refers to the
		 * message in binary encoded form. To ensure consistent hashing, clients and
		 * servers MUST ensure that they serialize messages according to the following
		 * rules, even if there are alternate valid encodings for the same message:
		 * * Fields are serialized in tag order.
		 * * There are no unknown fields.
		 * * There are no duplicate fields.
		 * * Fields are serialized according to the default semantics for their type.
		 * Most protocol buffer implementations will always follow these rules when
		 * serializing, but care should be taken to avoid shortcuts. For instance,
		 * concatenating two messages to merge them may produce duplicate fields.
		 */
		stdoutDigest?: BuildBazelRemoteExecutionV2Digest;

		/**
		 * The standard output buffer of the action. The server SHOULD NOT inline
		 * stdout unless requested by the client in the
		 * GetActionResultRequest
		 * message. The server MAY omit inlining, even if requested, and MUST do so if inlining
		 * would cause the response to exceed message size limits.
		 */
		stdoutRaw?: string;
	}


	/** ExecutedActionMetadata contains details about a completed execution. */
	export interface BuildBazelRemoteExecutionV2ExecutedActionMetadata {

		/** When the worker completed executing the action command. */
		executionCompletedTimestamp?: string;

		/** When the worker started executing the action command. */
		executionStartTimestamp?: string;

		/** When the worker finished fetching action inputs. */
		inputFetchCompletedTimestamp?: string;

		/** When the worker started fetching action inputs. */
		inputFetchStartTimestamp?: string;

		/** When the worker finished uploading action outputs. */
		outputUploadCompletedTimestamp?: string;

		/** When the worker started uploading action outputs. */
		outputUploadStartTimestamp?: string;

		/** When was the action added to the queue. */
		queuedTimestamp?: string;

		/** The name of the worker which ran the execution. */
		worker?: string;

		/** When the worker completed the action, including all stages. */
		workerCompletedTimestamp?: string;

		/** When the worker received the action. */
		workerStartTimestamp?: string;
	}


	/**
	 * An `OutputDirectory` is the output in an `ActionResult` corresponding to a
	 * directory's full contents rather than a single file.
	 */
	export interface BuildBazelRemoteExecutionV2OutputDirectory {

		/**
		 * The full path of the directory relative to the working directory. The path
		 * separator is a forward slash `/`. Since this is a relative path, it MUST
		 * NOT begin with a leading forward slash. The empty string value is allowed,
		 * and it denotes the entire working directory.
		 */
		path?: string;

		/**
		 * A content digest. A digest for a given blob consists of the size of the blob
		 * and its hash. The hash algorithm to use is defined by the server.
		 * The size is considered to be an integral part of the digest and cannot be
		 * separated. That is, even if the `hash` field is correctly specified but
		 * `size_bytes` is not, the server MUST reject the request.
		 * The reason for including the size in the digest is as follows: in a great
		 * many cases, the server needs to know the size of the blob it is about to work
		 * with prior to starting an operation with it, such as flattening Merkle tree
		 * structures or streaming it to a worker. Technically, the server could
		 * implement a separate metadata store, but this results in a significantly more
		 * complicated implementation as opposed to having the client specify the size
		 * up-front (or storing the size along with the digest in every message where
		 * digests are embedded). This does mean that the API leaks some implementation
		 * details of (what we consider to be) a reasonable server implementation, but
		 * we consider this to be a worthwhile tradeoff.
		 * When a `Digest` is used to refer to a proto message, it always refers to the
		 * message in binary encoded form. To ensure consistent hashing, clients and
		 * servers MUST ensure that they serialize messages according to the following
		 * rules, even if there are alternate valid encodings for the same message:
		 * * Fields are serialized in tag order.
		 * * There are no unknown fields.
		 * * There are no duplicate fields.
		 * * Fields are serialized according to the default semantics for their type.
		 * Most protocol buffer implementations will always follow these rules when
		 * serializing, but care should be taken to avoid shortcuts. For instance,
		 * concatenating two messages to merge them may produce duplicate fields.
		 */
		treeDigest?: BuildBazelRemoteExecutionV2Digest;
	}


	/**
	 * An `OutputSymlink` is similar to a
	 * Symlink, but it is used as an
	 * output in an `ActionResult`.
	 * `OutputSymlink` is binary-compatible with `SymlinkNode`.
	 */
	export interface BuildBazelRemoteExecutionV2OutputSymlink {

		/**
		 * The supported node properties of the OutputSymlink, if requested by the
		 * Action.
		 */
		nodeProperties?: Array<BuildBazelRemoteExecutionV2NodeProperty>;

		/**
		 * The full path of the symlink relative to the working directory, including the
		 * filename. The path separator is a forward slash `/`. Since this is a
		 * relative path, it MUST NOT begin with a leading forward slash.
		 */
		path?: string;

		/**
		 * The target path of the symlink. The path separator is a forward slash `/`.
		 * The target path can be relative to the parent directory of the symlink or
		 * it can be an absolute path starting with `/`. Support for absolute paths
		 * can be checked using the Capabilities
		 * API. The canonical form forbids the substrings `/./` and `//` in the target
		 * path. `..` components are allowed anywhere in the target path.
		 */
		target?: string;
	}


	/**
	 * A single property for FileNodes,
	 * DirectoryNodes, and
	 * SymlinkNodes. The server is
	 * responsible for specifying the property `name`s that it accepts. If
	 * permitted by the server, the same `name` may occur multiple times.
	 */
	export interface BuildBazelRemoteExecutionV2NodeProperty {

		/** The property name. */
		name?: string;

		/** The property value. */
		value?: string;
	}


	/**
	 * An `OutputFile` is similar to a
	 * FileNode, but it is used as an
	 * output in an `ActionResult`. It allows a full file path rather than
	 * only a name.
	 */
	export interface BuildBazelRemoteExecutionV2OutputFile {

		/**
		 * The contents of the file if inlining was requested. The server SHOULD NOT inline
		 * file contents unless requested by the client in the
		 * GetActionResultRequest
		 * message. The server MAY omit inlining, even if requested, and MUST do so if inlining
		 * would cause the response to exceed message size limits.
		 */
		contents?: string;

		/**
		 * A content digest. A digest for a given blob consists of the size of the blob
		 * and its hash. The hash algorithm to use is defined by the server.
		 * The size is considered to be an integral part of the digest and cannot be
		 * separated. That is, even if the `hash` field is correctly specified but
		 * `size_bytes` is not, the server MUST reject the request.
		 * The reason for including the size in the digest is as follows: in a great
		 * many cases, the server needs to know the size of the blob it is about to work
		 * with prior to starting an operation with it, such as flattening Merkle tree
		 * structures or streaming it to a worker. Technically, the server could
		 * implement a separate metadata store, but this results in a significantly more
		 * complicated implementation as opposed to having the client specify the size
		 * up-front (or storing the size along with the digest in every message where
		 * digests are embedded). This does mean that the API leaks some implementation
		 * details of (what we consider to be) a reasonable server implementation, but
		 * we consider this to be a worthwhile tradeoff.
		 * When a `Digest` is used to refer to a proto message, it always refers to the
		 * message in binary encoded form. To ensure consistent hashing, clients and
		 * servers MUST ensure that they serialize messages according to the following
		 * rules, even if there are alternate valid encodings for the same message:
		 * * Fields are serialized in tag order.
		 * * There are no unknown fields.
		 * * There are no duplicate fields.
		 * * Fields are serialized according to the default semantics for their type.
		 * Most protocol buffer implementations will always follow these rules when
		 * serializing, but care should be taken to avoid shortcuts. For instance,
		 * concatenating two messages to merge them may produce duplicate fields.
		 */
		digest?: BuildBazelRemoteExecutionV2Digest;

		/** True if file is executable, false otherwise. */
		isExecutable?: boolean;

		/** The supported node properties of the OutputFile, if requested by the Action. */
		nodeProperties?: Array<BuildBazelRemoteExecutionV2NodeProperty>;

		/**
		 * The full path of the file relative to the working directory, including the
		 * filename. The path separator is a forward slash `/`. Since this is a
		 * relative path, it MUST NOT begin with a leading forward slash.
		 */
		path?: string;
	}


	/**
	 * A `Command` is the actual command executed by a worker running an
	 * Action and specifications of its
	 * environment.
	 * Except as otherwise required, the environment (such as which system
	 * libraries or binaries are available, and what filesystems are mounted where)
	 * is defined by and specific to the implementation of the remote execution API.
	 */
	export interface BuildBazelRemoteExecutionV2Command {

		/**
		 * The arguments to the command. The first argument must be the path to the
		 * executable, which must be either a relative path, in which case it is
		 * evaluated with respect to the input root, or an absolute path.
		 */
		arguments?: Array<string>;

		/**
		 * The environment variables to set when running the program. The worker may
		 * provide its own default environment variables; these defaults can be
		 * overridden using this field. Additional variables can also be specified.
		 * In order to ensure that equivalent
		 * Commands always hash to the same
		 * value, the environment variables MUST be lexicographically sorted by name.
		 * Sorting of strings is done by code point, equivalently, by the UTF-8 bytes.
		 */
		environmentVariables?: Array<BuildBazelRemoteExecutionV2CommandEnvironmentVariable>;

		/**
		 * A list of the output directories that the client expects to retrieve from
		 * the action. Only the listed directories will be returned (an entire
		 * directory structure will be returned as a
		 * Tree message digest, see
		 * OutputDirectory), as
		 * well as files listed in `output_files`. Other files or directories that
		 * may be created during command execution are discarded.
		 * The paths are relative to the working directory of the action execution.
		 * The paths are specified using a single forward slash (`/`) as a path
		 * separator, even if the execution platform natively uses a different
		 * separator. The path MUST NOT include a trailing slash, nor a leading slash,
		 * being a relative path. The special value of empty string is allowed,
		 * although not recommended, and can be used to capture the entire working
		 * directory tree, including inputs.
		 * In order to ensure consistent hashing of the same Action, the output paths
		 * MUST be sorted lexicographically by code point (or, equivalently, by UTF-8
		 * bytes).
		 * An output directory cannot be duplicated or have the same path as any of
		 * the listed output files. An output directory is allowed to be a parent of
		 * another output directory.
		 * Directories leading up to the output directories (but not the output
		 * directories themselves) are created by the worker prior to execution, even
		 * if they are not explicitly part of the input root.
		 * DEPRECATED since 2.1: Use `output_paths` instead.
		 */
		outputDirectories?: Array<string>;

		/**
		 * A list of the output files that the client expects to retrieve from the
		 * action. Only the listed files, as well as directories listed in
		 * `output_directories`, will be returned to the client as output.
		 * Other files or directories that may be created during command execution
		 * are discarded.
		 * The paths are relative to the working directory of the action execution.
		 * The paths are specified using a single forward slash (`/`) as a path
		 * separator, even if the execution platform natively uses a different
		 * separator. The path MUST NOT include a trailing slash, nor a leading slash,
		 * being a relative path.
		 * In order to ensure consistent hashing of the same Action, the output paths
		 * MUST be sorted lexicographically by code point (or, equivalently, by UTF-8
		 * bytes).
		 * An output file cannot be duplicated, be a parent of another output file, or
		 * have the same path as any of the listed output directories.
		 * Directories leading up to the output files are created by the worker prior
		 * to execution, even if they are not explicitly part of the input root.
		 * DEPRECATED since v2.1: Use `output_paths` instead.
		 */
		outputFiles?: Array<string>;

		/**
		 * A list of the output paths that the client expects to retrieve from the
		 * action. Only the listed paths will be returned to the client as output.
		 * The type of the output (file or directory) is not specified, and will be
		 * determined by the server after action execution. If the resulting path is
		 * a file, it will be returned in an
		 * OutputFile) typed field.
		 * If the path is a directory, the entire directory structure will be returned
		 * as a Tree message digest, see
		 * OutputDirectory)
		 * Other files or directories that may be created during command execution
		 * are discarded.
		 * The paths are relative to the working directory of the action execution.
		 * The paths are specified using a single forward slash (`/`) as a path
		 * separator, even if the execution platform natively uses a different
		 * separator. The path MUST NOT include a trailing slash, nor a leading slash,
		 * being a relative path.
		 * In order to ensure consistent hashing of the same Action, the output paths
		 * MUST be deduplicated and sorted lexicographically by code point (or,
		 * equivalently, by UTF-8 bytes).
		 * Directories leading up to the output paths are created by the worker prior
		 * to execution, even if they are not explicitly part of the input root.
		 * New in v2.1: this field supersedes the DEPRECATED `output_files` and
		 * `output_directories` fields. If `output_paths` is used, `output_files` and
		 * `output_directories` will be ignored!
		 */
		outputPaths?: Array<string>;

		/**
		 * A `Platform` is a set of requirements, such as hardware, operating system, or
		 * compiler toolchain, for an
		 * Action's execution
		 * environment. A `Platform` is represented as a series of key-value pairs
		 * representing the properties that are required of the platform.
		 */
		platform?: BuildBazelRemoteExecutionV2Platform;

		/**
		 * The working directory, relative to the input root, for the command to run
		 * in. It must be a directory which exists in the input tree. If it is left
		 * empty, then the action is run in the input root.
		 */
		workingDirectory?: string;
	}


	/**
	 * An `EnvironmentVariable` is one variable to set in the running program's
	 * environment.
	 */
	export interface BuildBazelRemoteExecutionV2CommandEnvironmentVariable {

		/** The variable name. */
		name?: string;

		/** The variable value. */
		value?: string;
	}


	/**
	 * A `Platform` is a set of requirements, such as hardware, operating system, or
	 * compiler toolchain, for an
	 * Action's execution
	 * environment. A `Platform` is represented as a series of key-value pairs
	 * representing the properties that are required of the platform.
	 */
	export interface BuildBazelRemoteExecutionV2Platform {

		/**
		 * The properties that make up this platform. In order to ensure that
		 * equivalent `Platform`s always hash to the same value, the properties MUST
		 * be lexicographically sorted by name, and then by value. Sorting of strings
		 * is done by code point, equivalently, by the UTF-8 bytes.
		 */
		properties?: Array<BuildBazelRemoteExecutionV2PlatformProperty>;
	}


	/**
	 * A single property for the environment. The server is responsible for
	 * specifying the property `name`s that it accepts. If an unknown `name` is
	 * provided in the requirements for an
	 * Action, the server SHOULD
	 * reject the execution request. If permitted by the server, the same `name`
	 * may occur multiple times.
	 * The server is also responsible for specifying the interpretation of
	 * property `value`s. For instance, a property describing how much RAM must be
	 * available may be interpreted as allowing a worker with 16GB to fulfill a
	 * request for 8GB, while a property describing the OS environment on which
	 * the action must be performed may require an exact match with the worker's
	 * OS.
	 * The server MAY use the `value` of one or more properties to determine how
	 * it sets up the execution environment, such as by making specific system
	 * files available to the worker.
	 */
	export interface BuildBazelRemoteExecutionV2PlatformProperty {

		/** The property name. */
		name?: string;

		/** The property value. */
		value?: string;
	}


	/**
	 * A `Directory` represents a directory node in a file tree, containing zero or
	 * more children FileNodes,
	 * DirectoryNodes and
	 * SymlinkNodes.
	 * Each `Node` contains its name in the directory, either the digest of its
	 * content (either a file blob or a `Directory` proto) or a symlink target, as
	 * well as possibly some metadata about the file or directory.
	 * In order to ensure that two equivalent directory trees hash to the same
	 * value, the following restrictions MUST be obeyed when constructing a
	 * a `Directory`:
	 * * Every child in the directory must have a path of exactly one segment.
	 *   Multiple levels of directory hierarchy may not be collapsed.
	 * * Each child in the directory must have a unique path segment (file name).
	 *   Note that while the API itself is case-sensitive, the environment where
	 *   the Action is executed may or may not be case-sensitive. That is, it is
	 *   legal to call the API with a Directory that has both "Foo" and "foo" as
	 *   children, but the Action may be rejected by the remote system upon
	 *   execution.
	 * * The files, directories and symlinks in the directory must each be sorted
	 *   in lexicographical order by path. The path strings must be sorted by code
	 *   point, equivalently, by UTF-8 bytes.
	 * * The NodeProperties of files,
	 *   directories, and symlinks must be sorted in lexicographical order by
	 *   property name.
	 * A `Directory` that obeys the restrictions is said to be in canonical form.
	 * As an example, the following could be used for a file named `bar` and a
	 * directory named `foo` with an executable file named `baz` (hashes shortened
	 * for readability):
	 * ```json
	 * // (Directory proto)
	 * {
	 *   files: [
	 *     {
	 *       name: "bar",
	 *       digest: {
	 *         hash: "4a73bc9d03...",
	 *         size: 65534
	 *       },
	 *       node_properties: [
	 *         {
	 *           "name": "MTime",
	 *           "value": "2017-01-15T01:30:15.01Z"
	 *         }
	 *       ]
	 *     }
	 *   ],
	 *   directories: [
	 *     {
	 *       name: "foo",
	 *       digest: {
	 *         hash: "4cf2eda940...",
	 *         size: 43
	 *       }
	 *     }
	 *   ]
	 * }
	 * // (Directory proto with hash "4cf2eda940..." and size 43)
	 * {
	 *   files: [
	 *     {
	 *       name: "baz",
	 *       digest: {
	 *         hash: "b2c941073e...",
	 *         size: 1294,
	 *       },
	 *       is_executable: true
	 *     }
	 *   ]
	 * }
	 * ```
	 */
	export interface BuildBazelRemoteExecutionV2Directory {

		/** The subdirectories in the directory. */
		directories?: Array<BuildBazelRemoteExecutionV2DirectoryNode>;

		/** The files in the directory. */
		files?: Array<BuildBazelRemoteExecutionV2FileNode>;

		/** The node properties of the Directory. */
		nodeProperties?: Array<BuildBazelRemoteExecutionV2NodeProperty>;

		/** The symlinks in the directory. */
		symlinks?: Array<BuildBazelRemoteExecutionV2SymlinkNode>;
	}


	/**
	 * A `DirectoryNode` represents a child of a
	 * Directory which is itself
	 * a `Directory` and its associated metadata.
	 */
	export interface BuildBazelRemoteExecutionV2DirectoryNode {

		/**
		 * A content digest. A digest for a given blob consists of the size of the blob
		 * and its hash. The hash algorithm to use is defined by the server.
		 * The size is considered to be an integral part of the digest and cannot be
		 * separated. That is, even if the `hash` field is correctly specified but
		 * `size_bytes` is not, the server MUST reject the request.
		 * The reason for including the size in the digest is as follows: in a great
		 * many cases, the server needs to know the size of the blob it is about to work
		 * with prior to starting an operation with it, such as flattening Merkle tree
		 * structures or streaming it to a worker. Technically, the server could
		 * implement a separate metadata store, but this results in a significantly more
		 * complicated implementation as opposed to having the client specify the size
		 * up-front (or storing the size along with the digest in every message where
		 * digests are embedded). This does mean that the API leaks some implementation
		 * details of (what we consider to be) a reasonable server implementation, but
		 * we consider this to be a worthwhile tradeoff.
		 * When a `Digest` is used to refer to a proto message, it always refers to the
		 * message in binary encoded form. To ensure consistent hashing, clients and
		 * servers MUST ensure that they serialize messages according to the following
		 * rules, even if there are alternate valid encodings for the same message:
		 * * Fields are serialized in tag order.
		 * * There are no unknown fields.
		 * * There are no duplicate fields.
		 * * Fields are serialized according to the default semantics for their type.
		 * Most protocol buffer implementations will always follow these rules when
		 * serializing, but care should be taken to avoid shortcuts. For instance,
		 * concatenating two messages to merge them may produce duplicate fields.
		 */
		digest?: BuildBazelRemoteExecutionV2Digest;

		/** The name of the directory. */
		name?: string;
	}


	/** A `FileNode` represents a single file and associated metadata. */
	export interface BuildBazelRemoteExecutionV2FileNode {

		/**
		 * A content digest. A digest for a given blob consists of the size of the blob
		 * and its hash. The hash algorithm to use is defined by the server.
		 * The size is considered to be an integral part of the digest and cannot be
		 * separated. That is, even if the `hash` field is correctly specified but
		 * `size_bytes` is not, the server MUST reject the request.
		 * The reason for including the size in the digest is as follows: in a great
		 * many cases, the server needs to know the size of the blob it is about to work
		 * with prior to starting an operation with it, such as flattening Merkle tree
		 * structures or streaming it to a worker. Technically, the server could
		 * implement a separate metadata store, but this results in a significantly more
		 * complicated implementation as opposed to having the client specify the size
		 * up-front (or storing the size along with the digest in every message where
		 * digests are embedded). This does mean that the API leaks some implementation
		 * details of (what we consider to be) a reasonable server implementation, but
		 * we consider this to be a worthwhile tradeoff.
		 * When a `Digest` is used to refer to a proto message, it always refers to the
		 * message in binary encoded form. To ensure consistent hashing, clients and
		 * servers MUST ensure that they serialize messages according to the following
		 * rules, even if there are alternate valid encodings for the same message:
		 * * Fields are serialized in tag order.
		 * * There are no unknown fields.
		 * * There are no duplicate fields.
		 * * Fields are serialized according to the default semantics for their type.
		 * Most protocol buffer implementations will always follow these rules when
		 * serializing, but care should be taken to avoid shortcuts. For instance,
		 * concatenating two messages to merge them may produce duplicate fields.
		 */
		digest?: BuildBazelRemoteExecutionV2Digest;

		/** True if file is executable, false otherwise. */
		isExecutable?: boolean;

		/** The name of the file. */
		name?: string;

		/** The node properties of the FileNode. */
		nodeProperties?: Array<BuildBazelRemoteExecutionV2NodeProperty>;
	}


	/** A `SymlinkNode` represents a symbolic link. */
	export interface BuildBazelRemoteExecutionV2SymlinkNode {

		/** The name of the symlink. */
		name?: string;

		/** The node properties of the SymlinkNode. */
		nodeProperties?: Array<BuildBazelRemoteExecutionV2NodeProperty>;

		/**
		 * The target path of the symlink. The path separator is a forward slash `/`.
		 * The target path can be relative to the parent directory of the symlink or
		 * it can be an absolute path starting with `/`. Support for absolute paths
		 * can be checked using the Capabilities
		 * API. The canonical form forbids the substrings `/./` and `//` in the target
		 * path. `..` components are allowed anywhere in the target path.
		 */
		target?: string;
	}


	/**
	 * Metadata about an ongoing
	 * execution, which
	 * will be contained in the metadata
	 * field of the
	 * Operation.
	 */
	export interface BuildBazelRemoteExecutionV2ExecuteOperationMetadata {

		/**
		 * A content digest. A digest for a given blob consists of the size of the blob
		 * and its hash. The hash algorithm to use is defined by the server.
		 * The size is considered to be an integral part of the digest and cannot be
		 * separated. That is, even if the `hash` field is correctly specified but
		 * `size_bytes` is not, the server MUST reject the request.
		 * The reason for including the size in the digest is as follows: in a great
		 * many cases, the server needs to know the size of the blob it is about to work
		 * with prior to starting an operation with it, such as flattening Merkle tree
		 * structures or streaming it to a worker. Technically, the server could
		 * implement a separate metadata store, but this results in a significantly more
		 * complicated implementation as opposed to having the client specify the size
		 * up-front (or storing the size along with the digest in every message where
		 * digests are embedded). This does mean that the API leaks some implementation
		 * details of (what we consider to be) a reasonable server implementation, but
		 * we consider this to be a worthwhile tradeoff.
		 * When a `Digest` is used to refer to a proto message, it always refers to the
		 * message in binary encoded form. To ensure consistent hashing, clients and
		 * servers MUST ensure that they serialize messages according to the following
		 * rules, even if there are alternate valid encodings for the same message:
		 * * Fields are serialized in tag order.
		 * * There are no unknown fields.
		 * * There are no duplicate fields.
		 * * Fields are serialized according to the default semantics for their type.
		 * Most protocol buffer implementations will always follow these rules when
		 * serializing, but care should be taken to avoid shortcuts. For instance,
		 * concatenating two messages to merge them may produce duplicate fields.
		 */
		actionDigest?: BuildBazelRemoteExecutionV2Digest;

		/** The current stage of execution. */
		stage?: BuildBazelRemoteExecutionV2ExecuteOperationMetadataStage;

		/**
		 * If set, the client can use this name with
		 * ByteStream.Read to stream the
		 * standard error.
		 */
		stderrStreamName?: string;

		/**
		 * If set, the client can use this name with
		 * ByteStream.Read to stream the
		 * standard output.
		 */
		stdoutStreamName?: string;
	}

	export enum BuildBazelRemoteExecutionV2ExecuteOperationMetadataStage { UNKNOWN = 0, CACHE_CHECK = 1, QUEUED = 2, EXECUTING = 3, COMPLETED = 4 }


	/**
	 * The response message for
	 * Execution.Execute,
	 * which will be contained in the response
	 * field of the
	 * Operation.
	 */
	export interface BuildBazelRemoteExecutionV2ExecuteResponse {

		/** True if the result was served from cache, false if it was executed. */
		cachedResult?: boolean;

		/**
		 * Freeform informational message with details on the execution of the action
		 * that may be displayed to the user upon failure or when requested explicitly.
		 */
		message?: string;

		/**
		 * An ActionResult represents the result of an
		 * Action being run.
		 */
		result?: BuildBazelRemoteExecutionV2ActionResult;

		/**
		 * An optional list of additional log outputs the server wishes to provide. A
		 * server can use this to return execution-specific logs however it wishes.
		 * This is intended primarily to make it easier for users to debug issues that
		 * may be outside of the actual job execution, such as by identifying the
		 * worker executing the action or by providing logs from the worker's setup
		 * phase. The keys SHOULD be human readable so that a client can display them
		 * to a user.
		 */
		serverLogs?: {[id: string]: BuildBazelRemoteExecutionV2LogFile };

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		status?: GoogleRpcStatus;
	}


	/** A `LogFile` is a log stored in the CAS. */
	export interface BuildBazelRemoteExecutionV2LogFile {

		/**
		 * A content digest. A digest for a given blob consists of the size of the blob
		 * and its hash. The hash algorithm to use is defined by the server.
		 * The size is considered to be an integral part of the digest and cannot be
		 * separated. That is, even if the `hash` field is correctly specified but
		 * `size_bytes` is not, the server MUST reject the request.
		 * The reason for including the size in the digest is as follows: in a great
		 * many cases, the server needs to know the size of the blob it is about to work
		 * with prior to starting an operation with it, such as flattening Merkle tree
		 * structures or streaming it to a worker. Technically, the server could
		 * implement a separate metadata store, but this results in a significantly more
		 * complicated implementation as opposed to having the client specify the size
		 * up-front (or storing the size along with the digest in every message where
		 * digests are embedded). This does mean that the API leaks some implementation
		 * details of (what we consider to be) a reasonable server implementation, but
		 * we consider this to be a worthwhile tradeoff.
		 * When a `Digest` is used to refer to a proto message, it always refers to the
		 * message in binary encoded form. To ensure consistent hashing, clients and
		 * servers MUST ensure that they serialize messages according to the following
		 * rules, even if there are alternate valid encodings for the same message:
		 * * Fields are serialized in tag order.
		 * * There are no unknown fields.
		 * * There are no duplicate fields.
		 * * Fields are serialized according to the default semantics for their type.
		 * Most protocol buffer implementations will always follow these rules when
		 * serializing, but care should be taken to avoid shortcuts. For instance,
		 * concatenating two messages to merge them may produce duplicate fields.
		 */
		digest?: BuildBazelRemoteExecutionV2Digest;

		/**
		 * This is a hint as to the purpose of the log, and is set to true if the log
		 * is human-readable text that can be usefully displayed to a user, and false
		 * otherwise. For instance, if a command-line client wishes to print the
		 * server logs to the terminal for a failed action, this allows it to avoid
		 * displaying a binary file.
		 */
		humanReadable?: boolean;
	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface GoogleRpcStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string;
	}


	/**
	 * An optional Metadata to attach to any RPC request to tell the server about an
	 * external context of the request. The server may use this for logging or other
	 * purposes. To use it, the client attaches the header to the call using the
	 * canonical proto serialization:
	 * * name: `build.bazel.remote.execution.v2.requestmetadata-bin`
	 * * contents: the base64 encoded binary `RequestMetadata` message.
	 * Note: the gRPC library serializes binary headers encoded in base 64 by
	 * default (https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md#requests).
	 * Therefore, if the gRPC library is used to pass/retrieve this
	 * metadata, the user may ignore the base64 encoding and assume it is simply
	 * serialized as a binary message.
	 */
	export interface BuildBazelRemoteExecutionV2RequestMetadata {

		/**
		 * An identifier that ties multiple requests to the same action.
		 * For example, multiple requests to the CAS, Action Cache, and Execution
		 * API are used in order to compile foo.cc.
		 */
		actionId?: string;

		/**
		 * An identifier to tie multiple tool invocations together. For example,
		 * runs of foo_test, bar_test and baz_test on a post-submit of a given patch.
		 */
		correlatedInvocationsId?: string;

		/** Details for the tool used to call the API. */
		toolDetails?: BuildBazelRemoteExecutionV2ToolDetails;

		/**
		 * An identifier that ties multiple actions together to a final result.
		 * For example, multiple actions are required to build and run foo_test.
		 */
		toolInvocationId?: string;
	}


	/** Details for the tool used to call the API. */
	export interface BuildBazelRemoteExecutionV2ToolDetails {

		/** Name of the tool, e.g. bazel. */
		toolName?: string;

		/** Version of the tool used for the request, e.g. 5.0.3. */
		toolVersion?: string;
	}


	/**
	 * A `Tree` contains all the
	 * Directory protos in a
	 * single directory Merkle tree, compressed into one message.
	 */
	export interface BuildBazelRemoteExecutionV2Tree {

		/**
		 * All the child directories: the directories referred to by the root and,
		 * recursively, all its children. In order to reconstruct the directory tree,
		 * the client must take the digests of each of the child directories and then
		 * build up a tree starting from the `root`.
		 */
		children?: Array<BuildBazelRemoteExecutionV2Directory>;

		/**
		 * A `Directory` represents a directory node in a file tree, containing zero or
		 * more children FileNodes,
		 * DirectoryNodes and
		 * SymlinkNodes.
		 * Each `Node` contains its name in the directory, either the digest of its
		 * content (either a file blob or a `Directory` proto) or a symlink target, as
		 * well as possibly some metadata about the file or directory.
		 * In order to ensure that two equivalent directory trees hash to the same
		 * value, the following restrictions MUST be obeyed when constructing a
		 * a `Directory`:
		 * * Every child in the directory must have a path of exactly one segment.
		 * Multiple levels of directory hierarchy may not be collapsed.
		 * * Each child in the directory must have a unique path segment (file name).
		 * Note that while the API itself is case-sensitive, the environment where
		 * the Action is executed may or may not be case-sensitive. That is, it is
		 * legal to call the API with a Directory that has both "Foo" and "foo" as
		 * children, but the Action may be rejected by the remote system upon
		 * execution.
		 * * The files, directories and symlinks in the directory must each be sorted
		 * in lexicographical order by path. The path strings must be sorted by code
		 * point, equivalently, by UTF-8 bytes.
		 * * The NodeProperties of files,
		 * directories, and symlinks must be sorted in lexicographical order by
		 * property name.
		 * A `Directory` that obeys the restrictions is said to be in canonical form.
		 * As an example, the following could be used for a file named `bar` and a
		 * directory named `foo` with an executable file named `baz` (hashes shortened
		 * for readability):
		 * ```json
		 * // (Directory proto)
		 * {
		 * files: [
		 * {
		 * name: "bar",
		 * digest: {
		 * hash: "4a73bc9d03...",
		 * size: 65534
		 * },
		 * node_properties: [
		 * {
		 * "name": "MTime",
		 * "value": "2017-01-15T01:30:15.01Z"
		 * }
		 * ]
		 * }
		 * ],
		 * directories: [
		 * {
		 * name: "foo",
		 * digest: {
		 * hash: "4cf2eda940...",
		 * size: 43
		 * }
		 * }
		 * ]
		 * }
		 * // (Directory proto with hash "4cf2eda940..." and size 43)
		 * {
		 * files: [
		 * {
		 * name: "baz",
		 * digest: {
		 * hash: "b2c941073e...",
		 * size: 1294,
		 * },
		 * is_executable: true
		 * }
		 * ]
		 * }
		 * ```
		 */
		root?: BuildBazelRemoteExecutionV2Directory;
	}


	/** Media resource. */
	export interface GoogleBytestreamMedia {

		/** Name of the media resource. */
		resourceName?: string;
	}


	/**
	 * CommandDuration contains the various duration metrics tracked when a bot
	 * performs a command.
	 */
	export interface GoogleDevtoolsRemotebuildbotCommandDurations {

		/**
		 * The time spent preparing the command to be run in a Docker container
		 * (includes pulling the Docker image, if necessary).
		 */
		dockerPrep?: string;

		/** The timestamp when docker preparation begins. */
		dockerPrepStartTime?: string;

		/**
		 * The time spent downloading the input files and constructing the working
		 * directory.
		 */
		download?: string;

		/** The timestamp when downloading the input files begins. */
		downloadStartTime?: string;

		/** The timestamp when execution begins. */
		execStartTime?: string;

		/** The time spent executing the command (i.e., doing useful work). */
		execution?: string;

		/** The timestamp when preparation is done and bot starts downloading files. */
		isoPrepDone?: string;

		/** The time spent completing the command, in total. */
		overall?: string;

		/** The time spent uploading the stdout logs. */
		stdout?: string;

		/** The time spent uploading the output files. */
		upload?: string;

		/** The timestamp when uploading the output files begins. */
		uploadStartTime?: string;
	}


	/**
	 * CommandEvents contains counters for the number of warnings and errors
	 * that occurred during the execution of a command.
	 */
	export interface GoogleDevtoolsRemotebuildbotCommandEvents {

		/**
		 * Indicates whether we are using a cached Docker image (true) or had to pull
		 * the Docker image (false) for this command.
		 */
		dockerCacheHit?: boolean;

		/** The input cache miss ratio. */
		inputCacheMiss?: number;

		/** The number of errors reported. */
		numErrors?: string;

		/** The number of warnings reported. */
		numWarnings?: string;
	}


	/** The internal status of the command result. */
	export interface GoogleDevtoolsRemotebuildbotCommandStatus {

		/** The status code. */
		code?: GoogleDevtoolsRemotebuildbotCommandStatusCode;

		/** The error message. */
		message?: string;
	}

	export enum GoogleDevtoolsRemotebuildbotCommandStatusCode { OK = 0, INVALID_ARGUMENT = 1, DEADLINE_EXCEEDED = 2, NOT_FOUND = 3, PERMISSION_DENIED = 4, INTERNAL = 5, ABORTED = 6, CLEANUP_ERROR = 7, DOWNLOAD_INPUTS_ERROR = 8, UNKNOWN = 9, UPLOAD_OUTPUTS_ERROR = 10, DOCKER_LOGIN_ERROR = 11, DOCKER_IMAGE_PULL_ERROR = 12, DOCKER_IMAGE_EXIST_ERROR = 13, DUPLICATE_INPUTS = 14, DOCKER_IMAGE_PERMISSION_DENIED = 15, DOCKER_IMAGE_NOT_FOUND = 16, WORKING_DIR_NOT_FOUND = 17, WORKING_DIR_NOT_IN_BASE_DIR = 18, DOCKER_UNAVAILABLE = 19, NO_CUDA_CAPABLE_DEVICE = 20, REMOTE_CAS_DOWNLOAD_ERROR = 21, REMOTE_CAS_UPLOAD_ERROR = 22, LOCAL_CASPROXY_NOT_RUNNING = 23, DOCKER_CREATE_CONTAINER_ERROR = 24, DOCKER_INVALID_ULIMIT = 25, DOCKER_UNKNOWN_RUNTIME = 26, DOCKER_UNKNOWN_CAPABILITY = 27, DOCKER_UNKNOWN_ERROR = 28, DOCKER_CREATE_COMPUTE_SYSTEM_ERROR = 29, DOCKER_PREPARELAYER_ERROR = 30, DOCKER_INCOMPATIBLE_OS_ERROR = 31, DOCKER_CREATE_RUNTIME_FILE_NOT_FOUND = 32 }


	/** ResourceUsage is the system resource usage of the host machine. */
	export interface GoogleDevtoolsRemotebuildbotResourceUsage {
		cpuUsedPercent?: number;
		diskUsage?: GoogleDevtoolsRemotebuildbotResourceUsageStat;
		memoryUsage?: GoogleDevtoolsRemotebuildbotResourceUsageStat;
	}

	export interface GoogleDevtoolsRemotebuildbotResourceUsageStat {
		total?: string;
		used?: string;
	}


	/** AcceleratorConfig defines the accelerator cards to attach to the VM. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig {

		/** The number of guest accelerator cards exposed to each VM. */
		acceleratorCount?: string;

		/**
		 * The type of accelerator to attach to each VM, e.g. "nvidia-tesla-k80" for
		 * nVidia Tesla K80.
		 */
		acceleratorType?: string;
	}


	/** The request used for `CreateInstance`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest {

		/**
		 * Instance conceptually encapsulates all Remote Build Execution resources
		 * for remote builds.
		 * An instance consists of storage and compute resources (for example,
		 * `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for
		 * running remote builds.
		 * All Remote Build Execution API calls are scoped to an instance.
		 */
		instance?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance;

		/**
		 * ID of the created instance.
		 * A valid `instance_id` must:
		 * be 6-50 characters long,
		 * contain only lowercase letters, digits, hyphens and underscores,
		 * start with a lowercase letter, and
		 * end with a lowercase letter or a digit.
		 */
		instanceId?: string;

		/**
		 * Resource name of the project containing the instance.
		 * Format: `projects/[PROJECT_ID]`.
		 */
		parent?: string;
	}


	/**
	 * Instance conceptually encapsulates all Remote Build Execution resources
	 * for remote builds.
	 * An instance consists of storage and compute resources (for example,
	 * `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for
	 * running remote builds.
	 * All Remote Build Execution API calls are scoped to an instance.
	 */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance {

		/** The location is a GCP region. Currently only `us-central1` is supported. */
		location?: string;

		/** Output only. Whether stack driver logging is enabled for the instance. */
		loggingEnabled?: boolean;

		/**
		 * Output only. Instance resource name formatted as:
		 * `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
		 * Name should not be populated when creating an instance since it is provided
		 * in the `instance_id` field.
		 */
		name?: string;

		/** Output only. State of the instance. */
		state?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceState;
	}

	export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceState { STATE_UNSPECIFIED = 0, CREATING = 1, RUNNING = 2, INACTIVE = 3 }


	/** The request used for `CreateWorkerPool`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest {

		/**
		 * Resource name of the instance in which to create the new worker pool.
		 * Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
		 */
		parent?: string;

		/**
		 * ID of the created worker pool.
		 * A valid pool ID must:
		 * be 6-50 characters long,
		 * contain only lowercase letters, digits, hyphens and underscores,
		 * start with a lowercase letter, and
		 * end with a lowercase letter or a digit.
		 */
		poolId?: string;

		/** A worker pool resource in the Remote Build Execution API. */
		workerPool?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
	}


	/** A worker pool resource in the Remote Build Execution API. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool {

		/**
		 * WorkerPool resource name formatted as:
		 * `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`.
		 * name should not be populated when creating a worker pool since it is
		 * provided in the `poolId` field.
		 */
		name?: string;

		/** Output only. State of the worker pool. */
		state?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolState;

		/**
		 * Defines the configuration to be used for a creating workers in
		 * the worker pool.
		 */
		workerConfig?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig;

		/**
		 * The desired number of workers in the worker pool. Must be a value between
		 * 0 and 15000.
		 */
		workerCount?: string;
	}

	export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolState { STATE_UNSPECIFIED = 0, CREATING = 1, RUNNING = 2, UPDATING = 3, DELETING = 4, INACTIVE = 5 }


	/**
	 * Defines the configuration to be used for a creating workers in
	 * the worker pool.
	 */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig {

		/** AcceleratorConfig defines the accelerator cards to attach to the VM. */
		accelerator?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig;

		/**
		 * Required. Size of the disk attached to the worker, in GB.
		 * See https://cloud.google.com/compute/docs/disks/
		 */
		diskSizeGb?: string;

		/**
		 * Required. Disk Type to use for the worker.
		 * See [Storage
		 * options](https://cloud.google.com/compute/docs/disks/#introduction).
		 * Currently only `pd-standard` and `pd-ssd` are supported.
		 */
		diskType?: string;

		/**
		 * Labels associated with the workers.
		 * Label keys and values can be no longer than 63 characters, can only contain
		 * lowercase letters, numeric characters, underscores and dashes.
		 * International letters are permitted. Label keys must start with a letter.
		 * Label values are optional.
		 * There can not be more than 64 labels per resource.
		 */
		labels?: {[id: string]: any };

		/**
		 * Required. Machine type of the worker, such as `n1-standard-2`.
		 * See https://cloud.google.com/compute/docs/machine-types for a list of
		 * supported machine types. Note that `f1-micro` and `g1-small` are not yet
		 * supported.
		 */
		machineType?: string;

		/** The maximum number of actions a worker can execute concurrently. */
		maxConcurrentActions?: string;

		/**
		 * Minimum CPU platform to use when creating the worker.
		 * See [CPU Platforms](https://cloud.google.com/compute/docs/cpu-platforms).
		 */
		minCpuPlatform?: string;

		/**
		 * Determines the type of network access granted to workers. Possible values:
		 * - "public": Workers can connect to the public internet.
		 * - "private": Workers can only connect to Google APIs and services.
		 * - "restricted-private": Workers can only connect to Google APIs that are
		 * reachable through `restricted.googleapis.com` (`199.36.153.4/30`).
		 */
		networkAccess?: string;

		/**
		 * Determines whether the worker is reserved (equivalent to a Compute Engine
		 * on-demand VM and therefore won't be preempted).
		 * See [Preemptible VMs](https://cloud.google.com/preemptible-vms/) for more
		 * details.
		 */
		reserved?: boolean;
	}


	/** The request used for `DeleteInstance`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteInstanceRequest {

		/**
		 * Name of the instance to delete.
		 * Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
		 */
		name?: string;
	}


	/** The request used for DeleteWorkerPool. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteWorkerPoolRequest {

		/**
		 * Name of the worker pool to delete.
		 * Format:
		 * `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`.
		 */
		name?: string;
	}


	/** The request used for `GetInstance`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetInstanceRequest {

		/**
		 * Name of the instance to retrieve.
		 * Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
		 */
		name?: string;
	}


	/** The request used for GetWorkerPool. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetWorkerPoolRequest {

		/**
		 * Name of the worker pool to retrieve.
		 * Format:
		 * `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`.
		 */
		name?: string;
	}

	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesRequest {

		/**
		 * Resource name of the project.
		 * Format: `projects/[PROJECT_ID]`.
		 */
		parent?: string;
	}

	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse {

		/** The list of instances in a given project. */
		instances?: Array<GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance>;
	}

	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsRequest {

		/**
		 * Optional. A filter expression that filters resources listed in
		 * the response. The expression must specify the field name, a comparison
		 * operator, and the value that you want to use for filtering. The value
		 * must be a string, a number, or a boolean. String values are
		 * case-insensitive.
		 * The comparison operator must be either `:`, `=`, `!=`, `>`, `>=`, `<=` or
		 * `<`.
		 * The `:` operator can be used with string fields to match substrings.
		 * For non-string fields it is equivalent to the `=` operator.
		 * The `:*` comparison can be used to test  whether a key has been defined.
		 * You can also filter on nested fields.
		 * To filter on multiple expressions, you can separate expression using
		 * `AND` and `OR` operators, using parentheses to specify precedence. If
		 * neither operator is specified, `AND` is assumed.
		 * Examples:
		 * Include only pools with more than 100 reserved workers:
		 * `(worker_count > 100) (worker_config.reserved = true)`
		 * Include only pools with a certain label or machines of the n1-standard
		 * family:
		 * `worker_config.labels.key1 : * OR worker_config.machine_type: n1-standard`
		 */
		filter?: string;

		/**
		 * Resource name of the instance.
		 * Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
		 */
		parent?: string;
	}

	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse {

		/** The list of worker pools in a given instance. */
		workerPools?: Array<GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool>;
	}


	/** The request used for `UpdateInstance`. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateInstanceRequest {

		/**
		 * Instance conceptually encapsulates all Remote Build Execution resources
		 * for remote builds.
		 * An instance consists of storage and compute resources (for example,
		 * `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for
		 * running remote builds.
		 * All Remote Build Execution API calls are scoped to an instance.
		 */
		instance?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance;

		/**
		 * Deprecated, use instance.logging_enabled instead.
		 * Whether to enable Stackdriver logging for this instance.
		 */
		loggingEnabled?: boolean;

		/**
		 * Deprecated, use instance.Name instead.
		 * Name of the instance to update.
		 * Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
		 */
		name?: string;

		/**
		 * The update mask applies to instance. For the `FieldMask` definition, see
		 * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
		 * If an empty update_mask is provided, only the non-default valued field in
		 * the worker pool field will be updated. Note that in order to update a field
		 * to the default value (zero, false, empty string) an explicit update_mask
		 * must be provided.
		 */
		updateMask?: string;
	}


	/** The request used for UpdateWorkerPool. */
	export interface GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest {

		/**
		 * The update mask applies to worker_pool. For the `FieldMask` definition,
		 * see
		 * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
		 * If an empty update_mask is provided, only the non-default valued field in
		 * the worker pool field will be updated. Note that in order to update a field
		 * to the default value (zero, false, empty string) an explicit update_mask
		 * must be provided.
		 */
		updateMask?: string;

		/** A worker pool resource in the Remote Build Execution API. */
		workerPool?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
	}


	/**
	 * AdminTemp is a prelimiary set of administration tasks. It's called "Temp"
	 * because we do not yet know the best way to represent admin tasks; it's
	 * possible that this will be entirely replaced in later versions of this API.
	 * If this message proves to be sufficient, it will be renamed in the alpha or
	 * beta release of this API.
	 * This message (suitably marshalled into a protobuf.Any) can be used as the
	 * inline_assignment field in a lease; the lease assignment field should simply
	 * be `"admin"` in these cases.
	 * This message is heavily based on Swarming administration tasks from the LUCI
	 * project (http://github.com/luci/luci-py/appengine/swarming).
	 */
	export interface GoogleDevtoolsRemoteworkersV1test2AdminTemp {

		/** The argument to the admin action; see `Command` for semantics. */
		arg?: string;

		/** The admin action; see `Command` for legal values. */
		command?: GoogleDevtoolsRemoteworkersV1test2AdminTempCommand;
	}

	export enum GoogleDevtoolsRemoteworkersV1test2AdminTempCommand { UNSPECIFIED = 0, BOT_UPDATE = 1, BOT_RESTART = 2, BOT_TERMINATE = 3, HOST_RESTART = 4 }


	/** Describes a blob of binary content with its digest. */
	export interface GoogleDevtoolsRemoteworkersV1test2Blob {

		/** The contents of the blob. */
		contents?: string;

		/**
		 * The CommandTask and CommandResult messages assume the existence of a service
		 * that can serve blobs of content, identified by a hash and size known as a
		 * "digest." The method by which these blobs may be retrieved is not specified
		 * here, but a model implementation is in the Remote Execution API's
		 * "ContentAddressibleStorage" interface.
		 * In the context of the RWAPI, a Digest will virtually always refer to the
		 * contents of a file or a directory. The latter is represented by the
		 * byte-encoded Directory message.
		 */
		digest?: GoogleDevtoolsRemoteworkersV1test2Digest;
	}


	/**
	 * The CommandTask and CommandResult messages assume the existence of a service
	 * that can serve blobs of content, identified by a hash and size known as a
	 * "digest." The method by which these blobs may be retrieved is not specified
	 * here, but a model implementation is in the Remote Execution API's
	 * "ContentAddressibleStorage" interface.
	 * In the context of the RWAPI, a Digest will virtually always refer to the
	 * contents of a file or a directory. The latter is represented by the
	 * byte-encoded Directory message.
	 */
	export interface GoogleDevtoolsRemoteworkersV1test2Digest {

		/**
		 * A string-encoded hash (eg "1a2b3c", not the byte array [0x1a, 0x2b, 0x3c])
		 * using an implementation-defined hash algorithm (eg SHA-256).
		 */
		hash?: string;

		/**
		 * The size of the contents. While this is not strictly required as part of an
		 * identifier (after all, any given hash will have exactly one canonical
		 * size), it's useful in almost all cases when one might want to send or
		 * retrieve blobs of content and is included here for this reason.
		 */
		sizeBytes?: string;
	}


	/**
	 * DEPRECATED - use CommandResult instead.
	 * Describes the actual outputs from the task.
	 */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandOutputs {

		/**
		 * exit_code is only fully reliable if the status' code is OK. If the task
		 * exceeded its deadline or was cancelled, the process may still produce an
		 * exit code as it is cancelled, and this will be populated, but a successful
		 * (zero) is unlikely to be correct unless the status code is OK.
		 */
		exitCode?: number;

		/**
		 * The CommandTask and CommandResult messages assume the existence of a service
		 * that can serve blobs of content, identified by a hash and size known as a
		 * "digest." The method by which these blobs may be retrieved is not specified
		 * here, but a model implementation is in the Remote Execution API's
		 * "ContentAddressibleStorage" interface.
		 * In the context of the RWAPI, a Digest will virtually always refer to the
		 * contents of a file or a directory. The latter is represented by the
		 * byte-encoded Directory message.
		 */
		outputs?: GoogleDevtoolsRemoteworkersV1test2Digest;
	}


	/**
	 * DEPRECATED - use CommandResult instead.
	 * Can be used as part of CompleteRequest.metadata, or are part of a more
	 * sophisticated message.
	 */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandOverhead {

		/**
		 * The elapsed time between calling Accept and Complete. The server will also
		 * have its own idea of what this should be, but this excludes the overhead of
		 * the RPCs and the bot response time.
		 */
		duration?: string;

		/**
		 * The amount of time *not* spent executing the command (ie
		 * uploading/downloading files).
		 */
		overhead?: string;
	}


	/**
	 * All information about the execution of a command, suitable for providing as
	 * the Bots interface's `Lease.result` field.
	 */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandResult {

		/**
		 * The elapsed time between calling Accept and Complete. The server will also
		 * have its own idea of what this should be, but this excludes the overhead of
		 * the RPCs and the bot response time.
		 */
		duration?: string;

		/**
		 * The exit code of the process. An exit code of "0" should only be trusted if
		 * `status` has a code of OK (otherwise it may simply be unset).
		 */
		exitCode?: number;

		/**
		 * Implementation-dependent metadata about the task. Both servers and bots
		 * may define messages which can be encoded here; bots are free to provide
		 * metadata in multiple formats, and servers are free to choose one or more
		 * of the values to process and ignore others. In particular, it is *not*
		 * considered an error for the bot to provide the server with a field that it
		 * doesn't know about.
		 */
		metadata?: Array<string>;

		/**
		 * The CommandTask and CommandResult messages assume the existence of a service
		 * that can serve blobs of content, identified by a hash and size known as a
		 * "digest." The method by which these blobs may be retrieved is not specified
		 * here, but a model implementation is in the Remote Execution API's
		 * "ContentAddressibleStorage" interface.
		 * In the context of the RWAPI, a Digest will virtually always refer to the
		 * contents of a file or a directory. The latter is represented by the
		 * byte-encoded Directory message.
		 */
		outputs?: GoogleDevtoolsRemoteworkersV1test2Digest;

		/**
		 * The amount of time *not* spent executing the command (ie
		 * uploading/downloading files).
		 */
		overhead?: string;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		status?: GoogleRpcStatus;
	}


	/**
	 * Describes a shell-style task to execute, suitable for providing as the Bots
	 * interface's `Lease.payload` field.
	 */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandTask {

		/** Describes the expected outputs of the command. */
		expectedOutputs?: GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs;

		/** Describes the inputs to a shell-style task. */
		inputs?: GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs;

		/** Describes the timeouts associated with this task. */
		timeouts?: GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts;
	}


	/** Describes the expected outputs of the command. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs {

		/**
		 * A list of expected directories, relative to the execution root. All paths
		 * MUST be delimited by forward slashes.
		 */
		directories?: Array<string>;

		/**
		 * A list of expected files, relative to the execution root. All paths
		 * MUST be delimited by forward slashes.
		 */
		files?: Array<string>;

		/**
		 * The destination to which any stderr should be sent. The method by which
		 * the bot should send the stream contents to that destination is not
		 * defined in this API. As examples, the destination could be a file
		 * referenced in the `files` field in this message, or it could be a URI
		 * that must be written via the ByteStream API.
		 */
		stderrDestination?: string;

		/**
		 * The destination to which any stdout should be sent. The method by which
		 * the bot should send the stream contents to that destination is not
		 * defined in this API. As examples, the destination could be a file
		 * referenced in the `files` field in this message, or it could be a URI
		 * that must be written via the ByteStream API.
		 */
		stdoutDestination?: string;
	}


	/** Describes the inputs to a shell-style task. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs {

		/**
		 * The command itself to run (e.g., argv).
		 * This field should be passed directly to the underlying operating system,
		 * and so it must be sensible to that operating system. For example, on
		 * Windows, the first argument might be "C:\Windows\System32\ping.exe" -
		 * that is, using drive letters and backslashes. A command for a *nix
		 * system, on the other hand, would use forward slashes.
		 * All other fields in the RWAPI must consistently use forward slashes,
		 * since those fields may be interpretted by both the service and the bot.
		 */
		arguments?: Array<string>;

		/** All environment variables required by the task. */
		environmentVariables?: Array<GoogleDevtoolsRemoteworkersV1test2CommandTaskInputsEnvironmentVariable>;

		/**
		 * The input filesystem to be set up prior to the task beginning. The
		 * contents should be a repeated set of FileMetadata messages though other
		 * formats are allowed if better for the implementation (eg, a LUCI-style
		 * .isolated file).
		 * This field is repeated since implementations might want to cache the
		 * metadata, in which case it may be useful to break up portions of the
		 * filesystem that change frequently (eg, specific input files) from those
		 * that don't (eg, standard header files).
		 */
		files?: Array<GoogleDevtoolsRemoteworkersV1test2Digest>;

		/**
		 * Inline contents for blobs expected to be needed by the bot to execute the
		 * task. For example, contents of entries in `files` or blobs that are
		 * indirectly referenced by an entry there.
		 * The bot should check against this list before downloading required task
		 * inputs to reduce the number of communications between itself and the
		 * remote CAS server.
		 */
		inlineBlobs?: Array<GoogleDevtoolsRemoteworkersV1test2Blob>;

		/**
		 * Directory from which a command is executed. It is a relative directory
		 * with respect to the bot's working directory (i.e., "./"). If it is
		 * non-empty, then it must exist under "./". Otherwise, "./" will be used.
		 */
		workingDirectory?: string;
	}


	/** An environment variable required by this task. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandTaskInputsEnvironmentVariable {

		/** The envvar name. */
		name?: string;

		/** The envvar value. */
		value?: string;
	}


	/** Describes the timeouts associated with this task. */
	export interface GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts {

		/**
		 * This specifies the maximum time that the task can run, excluding the
		 * time required to download inputs or upload outputs. That is, the worker
		 * will terminate the task if it runs longer than this.
		 */
		execution?: string;

		/**
		 * This specifies the maximum amount of time the task can be idle - that is,
		 * go without generating some output in either stdout or stderr. If the
		 * process is silent for more than the specified time, the worker will
		 * terminate the task.
		 */
		idle?: string;

		/**
		 * If the execution or IO timeouts are exceeded, the worker will try to
		 * gracefully terminate the task and return any existing logs. However,
		 * tasks may be hard-frozen in which case this process will fail. This
		 * timeout specifies how long to wait for a terminated task to shut down
		 * gracefully (e.g. via SIGTERM) before we bring down the hammer (e.g.
		 * SIGKILL on *nix, CTRL_BREAK_EVENT on Windows).
		 */
		shutdown?: string;
	}


	/**
	 * The contents of a directory. Similar to the equivalent message in the Remote
	 * Execution API.
	 */
	export interface GoogleDevtoolsRemoteworkersV1test2Directory {

		/** Any subdirectories */
		directories?: Array<GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata>;

		/** The files in this directory */
		files?: Array<GoogleDevtoolsRemoteworkersV1test2FileMetadata>;
	}


	/**
	 * The metadata for a directory. Similar to the equivalent message in the Remote
	 * Execution API.
	 */
	export interface GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata {

		/**
		 * The CommandTask and CommandResult messages assume the existence of a service
		 * that can serve blobs of content, identified by a hash and size known as a
		 * "digest." The method by which these blobs may be retrieved is not specified
		 * here, but a model implementation is in the Remote Execution API's
		 * "ContentAddressibleStorage" interface.
		 * In the context of the RWAPI, a Digest will virtually always refer to the
		 * contents of a file or a directory. The latter is represented by the
		 * byte-encoded Directory message.
		 */
		digest?: GoogleDevtoolsRemoteworkersV1test2Digest;

		/** The path of the directory, as in FileMetadata.path. */
		path?: string;
	}


	/**
	 * The metadata for a file. Similar to the equivalent message in the Remote
	 * Execution API.
	 */
	export interface GoogleDevtoolsRemoteworkersV1test2FileMetadata {

		/**
		 * If the file is small enough, its contents may also or alternatively be
		 * listed here.
		 */
		contents?: string;

		/**
		 * The CommandTask and CommandResult messages assume the existence of a service
		 * that can serve blobs of content, identified by a hash and size known as a
		 * "digest." The method by which these blobs may be retrieved is not specified
		 * here, but a model implementation is in the Remote Execution API's
		 * "ContentAddressibleStorage" interface.
		 * In the context of the RWAPI, a Digest will virtually always refer to the
		 * contents of a file or a directory. The latter is represented by the
		 * byte-encoded Directory message.
		 */
		digest?: GoogleDevtoolsRemoteworkersV1test2Digest;

		/** Properties of the file */
		isExecutable?: boolean;

		/**
		 * The path of this file. If this message is part of the
		 * CommandOutputs.outputs fields, the path is relative to the execution root
		 * and must correspond to an entry in CommandTask.outputs.files. If this
		 * message is part of a Directory message, then the path is relative to the
		 * root of that directory. All paths MUST be delimited by forward slashes.
		 */
		path?: string;
	}


	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequest {
	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface GoogleLongrunningOperation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: GoogleRpcStatus;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any };

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string;

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
		response?: {[id: string]: any };
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface GoogleProtobufEmpty {
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Downloads media. Download is supported
		 * on the URI `/v1/media/{+name}?alt=media`.
		 * Get v1/media/{resourceName}
		 * @param {string} resourceName Name of the media that is being downloaded.  See
		 * ReadRequest.resource_name.
		 * @return {void} Successful response
		 */
		Remotebuildexecution_media_download(resourceName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/media/' + (resourceName == null ? '' : encodeURIComponent(resourceName)), { observe: 'response', responseType: 'text' });
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
		Remotebuildexecution_operations_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the latest state of a long-running operation.  Clients can use this
		 * method to poll the operation result at intervals as recommended by the API
		 * service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Remotebuildexecution_projects_operations_get(name: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
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
		Remotebuildexecution_operations_cancel(name: string, requestBody: GoogleLongrunningCancelOperationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

