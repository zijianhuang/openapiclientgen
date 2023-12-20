import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * Files in the workspace to upload to Cloud Storage upon successful
	 * completion of all build steps.
	 */
	export interface ArtifactObjects {

		/**
		 * Cloud Storage bucket and optional object path, in the form
		 * "gs://bucket/path/to/somewhere/". (see [Bucket Name
		 * Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
		 * Files in the workspace matching any path pattern will be uploaded to
		 * Cloud Storage with this location as a prefix.
		 */
		location?: string | null;

		/** Path globs used to match files in the build's workspace. */
		paths?: Array<string>;

		/** Start and end times for a build execution phase. */
		timing?: TimeSpan;
	}

	/**
	 * Files in the workspace to upload to Cloud Storage upon successful
	 * completion of all build steps.
	 */
	export interface ArtifactObjectsFormProperties {

		/**
		 * Cloud Storage bucket and optional object path, in the form
		 * "gs://bucket/path/to/somewhere/". (see [Bucket Name
		 * Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
		 * Files in the workspace matching any path pattern will be uploaded to
		 * Cloud Storage with this location as a prefix.
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateArtifactObjectsFormGroup() {
		return new FormGroup<ArtifactObjectsFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Start and end times for a build execution phase. */
	export interface TimeSpan {

		/** End of time span. */
		endTime?: string | null;

		/** Start of time span. */
		startTime?: string | null;
	}

	/** Start and end times for a build execution phase. */
	export interface TimeSpanFormProperties {

		/** End of time span. */
		endTime: FormControl<string | null | undefined>,

		/** Start of time span. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTimeSpanFormGroup() {
		return new FormGroup<TimeSpanFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An artifact that was uploaded during a build. This
	 * is a single record in the artifact manifest JSON file.
	 */
	export interface ArtifactResult {

		/** The file hash of the artifact. */
		fileHash?: Array<FileHashes>;

		/**
		 * The path of an artifact in a Google Cloud Storage bucket, with the
		 * generation number. For example,
		 * `gs://mybucket/path/to/output.jar#generation`.
		 */
		location?: string | null;
	}

	/**
	 * An artifact that was uploaded during a build. This
	 * is a single record in the artifact manifest JSON file.
	 */
	export interface ArtifactResultFormProperties {

		/**
		 * The path of an artifact in a Google Cloud Storage bucket, with the
		 * generation number. For example,
		 * `gs://mybucket/path/to/output.jar#generation`.
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateArtifactResultFormGroup() {
		return new FormGroup<ArtifactResultFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Container message for hashes of byte content of files, used in
	 * SourceProvenance messages to verify integrity of source input to the build.
	 */
	export interface FileHashes {

		/** Collection of file hashes. */
		fileHash?: Array<Hash>;
	}

	/**
	 * Container message for hashes of byte content of files, used in
	 * SourceProvenance messages to verify integrity of source input to the build.
	 */
	export interface FileHashesFormProperties {
	}
	export function CreateFileHashesFormGroup() {
		return new FormGroup<FileHashesFormProperties>({
		});

	}


	/** Container message for hash values. */
	export interface Hash {

		/** The type of hash that was performed. */
		type?: HashType | null;

		/** The hash value. */
		value?: string | null;
	}

	/** Container message for hash values. */
	export interface HashFormProperties {

		/** The type of hash that was performed. */
		type: FormControl<HashType | null | undefined>,

		/** The hash value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHashFormGroup() {
		return new FormGroup<HashFormProperties>({
			type: new FormControl<HashType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HashType { NONE = 0, SHA256 = 1, MD5 = 2 }


	/**
	 * Artifacts produced by a build that should be uploaded upon
	 * successful completion of all build steps.
	 */
	export interface Artifacts {

		/**
		 * A list of images to be pushed upon the successful completion of all build
		 * steps.
		 * The images will be pushed using the builder service account's credentials.
		 * The digests of the pushed images will be stored in the Build resource's
		 * results field.
		 * If any of the images fail to be pushed, the build is marked FAILURE.
		 */
		images?: Array<string>;

		/**
		 * Files in the workspace to upload to Cloud Storage upon successful
		 * completion of all build steps.
		 */
		objects?: ArtifactObjects;
	}

	/**
	 * Artifacts produced by a build that should be uploaded upon
	 * successful completion of all build steps.
	 */
	export interface ArtifactsFormProperties {
	}
	export function CreateArtifactsFormGroup() {
		return new FormGroup<ArtifactsFormProperties>({
		});

	}


	/**
	 * A build resource in the Cloud Build API.
	 * At a high level, a `Build` describes where to find source code, how to build
	 * it (for example, the builder image to run on the source), and where to store
	 * the built artifacts.
	 * Fields can include the following variables, which will be expanded when the
	 * build is created:
	 * - $PROJECT_ID: the project ID of the build.
	 * - $BUILD_ID: the autogenerated ID of the build.
	 * - $REPO_NAME: the source repository name specified by RepoSource.
	 * - $BRANCH_NAME: the branch name specified by RepoSource.
	 * - $TAG_NAME: the tag name specified by RepoSource.
	 * - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or
	 *   resolved from the specified branch or tag.
	 * - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
	 */
	export interface Build {

		/**
		 * Artifacts produced by a build that should be uploaded upon
		 * successful completion of all build steps.
		 */
		artifacts?: Artifacts;

		/**
		 * Output only. The ID of the `BuildTrigger` that triggered this build, if it
		 * was triggered automatically.
		 */
		buildTriggerId?: string | null;

		/** Output only. Time at which the request to create the build was received. */
		createTime?: string | null;

		/**
		 * Output only. Time at which execution of the build was finished.
		 * The difference between finish_time and start_time is the duration of the
		 * build's execution.
		 */
		finishTime?: string | null;

		/** Output only. Unique identifier of the build. */
		id?: string | null;

		/**
		 * A list of images to be pushed upon the successful completion of all build
		 * steps.
		 * The images are pushed using the builder service account's credentials.
		 * The digests of the pushed images will be stored in the `Build` resource's
		 * results field.
		 * If any of the images fail to be pushed, the build status is marked
		 * `FAILURE`.
		 */
		images?: Array<string>;

		/** Output only. URL to logs for this build in Google Cloud Console. */
		logUrl?: string | null;

		/**
		 * Google Cloud Storage bucket where logs should be written (see
		 * [Bucket Name
		 * Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
		 * Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`.
		 */
		logsBucket?: string | null;

		/** Optional arguments to enable specific features of builds. */
		options?: BuildOptions;

		/** Output only. ID of the project. */
		projectId?: string | null;

		/**
		 * TTL in queue for this build. If provided and the build is enqueued longer
		 * than this value, the build will expire and the build status will be
		 * `EXPIRED`.
		 * The TTL starts ticking from create_time.
		 */
		queueTtl?: string | null;

		/** Artifacts created by the build pipeline. */
		results?: Results;

		/** Secrets to decrypt using Cloud Key Management Service. */
		secrets?: Array<Secret>;

		/** Location of the source in a supported storage service. */
		source?: Source;

		/**
		 * Provenance of the source. Ways to find the original source, or verify that
		 * some source was used for this build.
		 */
		sourceProvenance?: SourceProvenance;

		/** Output only. Time at which execution of the build was started. */
		startTime?: string | null;

		/** Output only. Status of the build. */
		status?: BuildStatus | null;

		/** Output only. Customer-readable message about the current status. */
		statusDetail?: string | null;

		/** Required. The operations to be performed on the workspace. */
		steps?: Array<BuildStep>;

		/** Substitutions data for `Build` resource. */
		substitutions?: {[id: string]: string };

		/** Tags for annotation of a `Build`. These are not docker tags. */
		tags?: Array<string>;

		/**
		 * Amount of time that this build should be allowed to run, to second
		 * granularity. If this amount of time elapses, work on the build will cease
		 * and the build status will be `TIMEOUT`.
		 * Default time is ten minutes.
		 */
		timeout?: string | null;

		/**
		 * Output only. Stores timing information for phases of the build. Valid keys
		 * are:
		 * * BUILD: time to execute all build steps
		 * * PUSH: time to push all specified images.
		 * * FETCHSOURCE: time to fetch source.
		 * If the build does not specify source or images,
		 * these keys will not be included.
		 */
		timing?: {[id: string]: TimeSpan };
	}

	/**
	 * A build resource in the Cloud Build API.
	 * At a high level, a `Build` describes where to find source code, how to build
	 * it (for example, the builder image to run on the source), and where to store
	 * the built artifacts.
	 * Fields can include the following variables, which will be expanded when the
	 * build is created:
	 * - $PROJECT_ID: the project ID of the build.
	 * - $BUILD_ID: the autogenerated ID of the build.
	 * - $REPO_NAME: the source repository name specified by RepoSource.
	 * - $BRANCH_NAME: the branch name specified by RepoSource.
	 * - $TAG_NAME: the tag name specified by RepoSource.
	 * - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or
	 *   resolved from the specified branch or tag.
	 * - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
	 */
	export interface BuildFormProperties {

		/**
		 * Output only. The ID of the `BuildTrigger` that triggered this build, if it
		 * was triggered automatically.
		 */
		buildTriggerId: FormControl<string | null | undefined>,

		/** Output only. Time at which the request to create the build was received. */
		createTime: FormControl<string | null | undefined>,

		/**
		 * Output only. Time at which execution of the build was finished.
		 * The difference between finish_time and start_time is the duration of the
		 * build's execution.
		 */
		finishTime: FormControl<string | null | undefined>,

		/** Output only. Unique identifier of the build. */
		id: FormControl<string | null | undefined>,

		/** Output only. URL to logs for this build in Google Cloud Console. */
		logUrl: FormControl<string | null | undefined>,

		/**
		 * Google Cloud Storage bucket where logs should be written (see
		 * [Bucket Name
		 * Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
		 * Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`.
		 */
		logsBucket: FormControl<string | null | undefined>,

		/** Output only. ID of the project. */
		projectId: FormControl<string | null | undefined>,

		/**
		 * TTL in queue for this build. If provided and the build is enqueued longer
		 * than this value, the build will expire and the build status will be
		 * `EXPIRED`.
		 * The TTL starts ticking from create_time.
		 */
		queueTtl: FormControl<string | null | undefined>,

		/** Output only. Time at which execution of the build was started. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. Status of the build. */
		status: FormControl<BuildStatus | null | undefined>,

		/** Output only. Customer-readable message about the current status. */
		statusDetail: FormControl<string | null | undefined>,

		/** Substitutions data for `Build` resource. */
		substitutions: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Amount of time that this build should be allowed to run, to second
		 * granularity. If this amount of time elapses, work on the build will cease
		 * and the build status will be `TIMEOUT`.
		 * Default time is ten minutes.
		 */
		timeout: FormControl<string | null | undefined>,

		/**
		 * Output only. Stores timing information for phases of the build. Valid keys
		 * are:
		 * * BUILD: time to execute all build steps
		 * * PUSH: time to push all specified images.
		 * * FETCHSOURCE: time to fetch source.
		 * If the build does not specify source or images,
		 * these keys will not be included.
		 */
		timing: FormControl<{[id: string]: TimeSpan } | null | undefined>,
	}
	export function CreateBuildFormGroup() {
		return new FormGroup<BuildFormProperties>({
			buildTriggerId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			finishTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			logUrl: new FormControl<string | null | undefined>(undefined),
			logsBucket: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			queueTtl: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<BuildStatus | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
			substitutions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
			timing: new FormControl<{[id: string]: TimeSpan } | null | undefined>(undefined),
		});

	}


	/** Optional arguments to enable specific features of builds. */
	export interface BuildOptions {

		/**
		 * Requested disk size for the VM that runs the build. Note that this is *NOT*
		 * "disk free"; some of the space will be used by the operating system and
		 * build utilities. Also note that this is the minimum disk size that will be
		 * allocated for the build -- the build may run with a larger disk than
		 * requested. At present, the maximum disk size is 1000GB; builds that request
		 * more than the maximum are rejected with an error.
		 */
		diskSizeGb?: string | null;

		/**
		 * A list of global environment variable definitions that will exist for all
		 * build steps in this build. If a variable is defined in both globally and in
		 * a build step, the variable will use the build step value.
		 * The elements are of the form "KEY=VALUE" for the environment variable "KEY"
		 * being given the value "VALUE".
		 */
		env?: Array<string>;

		/**
		 * Option to define build log streaming behavior to Google Cloud
		 * Storage.
		 */
		logStreamingOption?: BuildOptionsLogStreamingOption | null;

		/**
		 * Option to specify the logging mode, which determines where the logs are
		 * stored.
		 */
		logging?: BuildOptionsLogging | null;

		/** Compute Engine machine type on which to run the build. */
		machineType?: BuildOptionsMachineType | null;

		/** Requested verifiability options. */
		requestedVerifyOption?: BuildOptionsRequestedVerifyOption | null;

		/**
		 * A list of global environment variables, which are encrypted using a Cloud
		 * Key Management Service crypto key. These values must be specified in the
		 * build's `Secret`. These variables will be available to all build steps
		 * in this build.
		 */
		secretEnv?: Array<string>;

		/** Requested hash for SourceProvenance. */
		sourceProvenanceHash?: Array<HashType>;

		/**
		 * Option to specify behavior when there is an error in the substitution
		 * checks.
		 */
		substitutionOption?: BuildOptionsSubstitutionOption | null;

		/**
		 * Global list of volumes to mount for ALL build steps
		 * Each volume is created as an empty volume prior to starting the build
		 * process. Upon completion of the build, volumes and their contents are
		 * discarded. Global volume names and paths cannot conflict with the volumes
		 * defined a build step.
		 * Using a global volume in a build with only one step is not valid as
		 * it is indicative of a build request with an incorrect configuration.
		 */
		volumes?: Array<Volume>;

		/**
		 * Option to specify a `WorkerPool` for the build.
		 * Format: projects/{project}/workerPools/{workerPool}
		 * This field is experimental.
		 */
		workerPool?: string | null;
	}

	/** Optional arguments to enable specific features of builds. */
	export interface BuildOptionsFormProperties {

		/**
		 * Requested disk size for the VM that runs the build. Note that this is *NOT*
		 * "disk free"; some of the space will be used by the operating system and
		 * build utilities. Also note that this is the minimum disk size that will be
		 * allocated for the build -- the build may run with a larger disk than
		 * requested. At present, the maximum disk size is 1000GB; builds that request
		 * more than the maximum are rejected with an error.
		 */
		diskSizeGb: FormControl<string | null | undefined>,

		/**
		 * Option to define build log streaming behavior to Google Cloud
		 * Storage.
		 */
		logStreamingOption: FormControl<BuildOptionsLogStreamingOption | null | undefined>,

		/**
		 * Option to specify the logging mode, which determines where the logs are
		 * stored.
		 */
		logging: FormControl<BuildOptionsLogging | null | undefined>,

		/** Compute Engine machine type on which to run the build. */
		machineType: FormControl<BuildOptionsMachineType | null | undefined>,

		/** Requested verifiability options. */
		requestedVerifyOption: FormControl<BuildOptionsRequestedVerifyOption | null | undefined>,

		/**
		 * Option to specify behavior when there is an error in the substitution
		 * checks.
		 */
		substitutionOption: FormControl<BuildOptionsSubstitutionOption | null | undefined>,

		/**
		 * Option to specify a `WorkerPool` for the build.
		 * Format: projects/{project}/workerPools/{workerPool}
		 * This field is experimental.
		 */
		workerPool: FormControl<string | null | undefined>,
	}
	export function CreateBuildOptionsFormGroup() {
		return new FormGroup<BuildOptionsFormProperties>({
			diskSizeGb: new FormControl<string | null | undefined>(undefined),
			logStreamingOption: new FormControl<BuildOptionsLogStreamingOption | null | undefined>(undefined),
			logging: new FormControl<BuildOptionsLogging | null | undefined>(undefined),
			machineType: new FormControl<BuildOptionsMachineType | null | undefined>(undefined),
			requestedVerifyOption: new FormControl<BuildOptionsRequestedVerifyOption | null | undefined>(undefined),
			substitutionOption: new FormControl<BuildOptionsSubstitutionOption | null | undefined>(undefined),
			workerPool: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuildOptionsLogStreamingOption { STREAM_DEFAULT = 0, STREAM_ON = 1, STREAM_OFF = 2 }

	export enum BuildOptionsLogging { LOGGING_UNSPECIFIED = 0, LEGACY = 1, GCS_ONLY = 2 }

	export enum BuildOptionsMachineType { UNSPECIFIED = 0, N1_HIGHCPU_8 = 1, N1_HIGHCPU_32 = 2 }

	export enum BuildOptionsRequestedVerifyOption { NOT_VERIFIED = 0, VERIFIED = 1 }

	export enum BuildOptionsSubstitutionOption { MUST_MATCH = 0, ALLOW_LOOSE = 1 }


	/**
	 * Volume describes a Docker container volume which is mounted into build steps
	 * in order to persist files across build step execution.
	 */
	export interface Volume {

		/**
		 * Name of the volume to mount.
		 * Volume names must be unique per build step and must be valid names for
		 * Docker volumes. Each named volume must be used by at least two build steps.
		 */
		name?: string | null;

		/**
		 * Path at which to mount the volume.
		 * Paths must be absolute and cannot conflict with other volume paths on the
		 * same build step or with certain reserved volume paths.
		 */
		path?: string | null;
	}

	/**
	 * Volume describes a Docker container volume which is mounted into build steps
	 * in order to persist files across build step execution.
	 */
	export interface VolumeFormProperties {

		/**
		 * Name of the volume to mount.
		 * Volume names must be unique per build step and must be valid names for
		 * Docker volumes. Each named volume must be used by at least two build steps.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Path at which to mount the volume.
		 * Paths must be absolute and cannot conflict with other volume paths on the
		 * same build step or with certain reserved volume paths.
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Artifacts created by the build pipeline. */
	export interface Results {

		/** Path to the artifact manifest. Only populated when artifacts are uploaded. */
		artifactManifest?: string | null;

		/** Start and end times for a build execution phase. */
		artifactTiming?: TimeSpan;

		/**
		 * List of build step digests, in the order corresponding to build step
		 * indices.
		 */
		buildStepImages?: Array<string>;

		/**
		 * List of build step outputs, produced by builder images, in the order
		 * corresponding to build step indices.
		 * [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders)
		 * can produce this output by writing to `$BUILDER_OUTPUT/output`.
		 * Only the first 4KB of data is stored.
		 */
		buildStepOutputs?: Array<string>;

		/** Container images that were built as a part of the build. */
		images?: Array<BuiltImage>;

		/** Number of artifacts uploaded. Only populated when artifacts are uploaded. */
		numArtifacts?: string | null;
	}

	/** Artifacts created by the build pipeline. */
	export interface ResultsFormProperties {

		/** Path to the artifact manifest. Only populated when artifacts are uploaded. */
		artifactManifest: FormControl<string | null | undefined>,

		/** Number of artifacts uploaded. Only populated when artifacts are uploaded. */
		numArtifacts: FormControl<string | null | undefined>,
	}
	export function CreateResultsFormGroup() {
		return new FormGroup<ResultsFormProperties>({
			artifactManifest: new FormControl<string | null | undefined>(undefined),
			numArtifacts: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An image built by the pipeline. */
	export interface BuiltImage {

		/** Docker Registry 2.0 digest. */
		digest?: string | null;

		/**
		 * Name used to push the container image to Google Container Registry, as
		 * presented to `docker push`.
		 */
		name?: string | null;

		/** Start and end times for a build execution phase. */
		pushTiming?: TimeSpan;
	}

	/** An image built by the pipeline. */
	export interface BuiltImageFormProperties {

		/** Docker Registry 2.0 digest. */
		digest: FormControl<string | null | undefined>,

		/**
		 * Name used to push the container image to Google Container Registry, as
		 * presented to `docker push`.
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBuiltImageFormGroup() {
		return new FormGroup<BuiltImageFormProperties>({
			digest: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Pairs a set of secret environment variables containing encrypted
	 * values with the Cloud KMS key to use to decrypt the value.
	 */
	export interface Secret {

		/** Cloud KMS key name to use to decrypt these envs. */
		kmsKeyName?: string | null;

		/**
		 * Map of environment variable name to its encrypted value.
		 * Secret environment variables must be unique across all of a build's
		 * secrets, and must be used by at least one build step. Values can be at most
		 * 64 KB in size. There can be at most 100 secret values across all of a
		 * build's secrets.
		 */
		secretEnv?: {[id: string]: string };
	}

	/**
	 * Pairs a set of secret environment variables containing encrypted
	 * values with the Cloud KMS key to use to decrypt the value.
	 */
	export interface SecretFormProperties {

		/** Cloud KMS key name to use to decrypt these envs. */
		kmsKeyName: FormControl<string | null | undefined>,

		/**
		 * Map of environment variable name to its encrypted value.
		 * Secret environment variables must be unique across all of a build's
		 * secrets, and must be used by at least one build step. Values can be at most
		 * 64 KB in size. There can be at most 100 secret values across all of a
		 * build's secrets.
		 */
		secretEnv: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSecretFormGroup() {
		return new FormGroup<SecretFormProperties>({
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			secretEnv: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Location of the source in a supported storage service. */
	export interface Source {

		/** Location of the source in a Google Cloud Source Repository. */
		repoSource?: RepoSource;

		/** Location of the source in an archive file in Google Cloud Storage. */
		storageSource?: StorageSource;
	}

	/** Location of the source in a supported storage service. */
	export interface SourceFormProperties {
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
		});

	}


	/** Location of the source in a Google Cloud Source Repository. */
	export interface RepoSource {

		/**
		 * Regex matching branches to build.
		 * The syntax of the regular expressions accepted is the syntax accepted by
		 * RE2 and described at https://github.com/google/re2/wiki/Syntax
		 */
		branchName?: string | null;

		/** Explicit commit SHA to build. */
		commitSha?: string | null;

		/**
		 * Directory, relative to the source root, in which to run the build.
		 * This must be a relative path. If a step's `dir` is specified and is an
		 * absolute path, this value is ignored for that step's execution.
		 */
		dir?: string | null;

		/**
		 * Only trigger a build if the revision regex does NOT match the revision
		 * regex.
		 */
		invertRegex?: boolean | null;

		/**
		 * ID of the project that owns the Cloud Source Repository. If omitted, the
		 * project ID requesting the build is assumed.
		 */
		projectId?: string | null;

		/** Required. Name of the Cloud Source Repository. */
		repoName?: string | null;

		/**
		 * Substitutions to use in a triggered build.
		 * Should only be used with RunBuildTrigger
		 */
		substitutions?: {[id: string]: string };

		/**
		 * Regex matching tags to build.
		 * The syntax of the regular expressions accepted is the syntax accepted by
		 * RE2 and described at https://github.com/google/re2/wiki/Syntax
		 */
		tagName?: string | null;
	}

	/** Location of the source in a Google Cloud Source Repository. */
	export interface RepoSourceFormProperties {

		/**
		 * Regex matching branches to build.
		 * The syntax of the regular expressions accepted is the syntax accepted by
		 * RE2 and described at https://github.com/google/re2/wiki/Syntax
		 */
		branchName: FormControl<string | null | undefined>,

		/** Explicit commit SHA to build. */
		commitSha: FormControl<string | null | undefined>,

		/**
		 * Directory, relative to the source root, in which to run the build.
		 * This must be a relative path. If a step's `dir` is specified and is an
		 * absolute path, this value is ignored for that step's execution.
		 */
		dir: FormControl<string | null | undefined>,

		/**
		 * Only trigger a build if the revision regex does NOT match the revision
		 * regex.
		 */
		invertRegex: FormControl<boolean | null | undefined>,

		/**
		 * ID of the project that owns the Cloud Source Repository. If omitted, the
		 * project ID requesting the build is assumed.
		 */
		projectId: FormControl<string | null | undefined>,

		/** Required. Name of the Cloud Source Repository. */
		repoName: FormControl<string | null | undefined>,

		/**
		 * Substitutions to use in a triggered build.
		 * Should only be used with RunBuildTrigger
		 */
		substitutions: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Regex matching tags to build.
		 * The syntax of the regular expressions accepted is the syntax accepted by
		 * RE2 and described at https://github.com/google/re2/wiki/Syntax
		 */
		tagName: FormControl<string | null | undefined>,
	}
	export function CreateRepoSourceFormGroup() {
		return new FormGroup<RepoSourceFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined),
			commitSha: new FormControl<string | null | undefined>(undefined),
			dir: new FormControl<string | null | undefined>(undefined),
			invertRegex: new FormControl<boolean | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			repoName: new FormControl<string | null | undefined>(undefined),
			substitutions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			tagName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location of the source in an archive file in Google Cloud Storage. */
	export interface StorageSource {

		/**
		 * Google Cloud Storage bucket containing the source (see
		 * [Bucket Name
		 * Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
		 */
		bucket?: string | null;

		/**
		 * Google Cloud Storage generation for the object. If the generation is
		 * omitted, the latest generation will be used.
		 */
		generation?: string | null;

		/**
		 * Google Cloud Storage object containing the source.
		 * This object must be a gzipped archive file (`.tar.gz`) containing source to
		 * build.
		 */
		object?: string | null;
	}

	/** Location of the source in an archive file in Google Cloud Storage. */
	export interface StorageSourceFormProperties {

		/**
		 * Google Cloud Storage bucket containing the source (see
		 * [Bucket Name
		 * Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
		 */
		bucket: FormControl<string | null | undefined>,

		/**
		 * Google Cloud Storage generation for the object. If the generation is
		 * omitted, the latest generation will be used.
		 */
		generation: FormControl<string | null | undefined>,

		/**
		 * Google Cloud Storage object containing the source.
		 * This object must be a gzipped archive file (`.tar.gz`) containing source to
		 * build.
		 */
		object: FormControl<string | null | undefined>,
	}
	export function CreateStorageSourceFormGroup() {
		return new FormGroup<StorageSourceFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Provenance of the source. Ways to find the original source, or verify that
	 * some source was used for this build.
	 */
	export interface SourceProvenance {

		/**
		 * Output only. Hash(es) of the build source, which can be used to verify that
		 * the original source integrity was maintained in the build. Note that
		 * `FileHashes` will only be populated if `BuildOptions` has requested a
		 * `SourceProvenanceHash`.
		 * The keys to this map are file paths used as build source and the values
		 * contain the hash values for those files.
		 * If the build source came in a single package such as a gzipped tarfile
		 * (`.tar.gz`), the `FileHash` will be for the single path to that file.
		 */
		fileHashes?: {[id: string]: FileHashes };

		/** Location of the source in a Google Cloud Source Repository. */
		resolvedRepoSource?: RepoSource;

		/** Location of the source in an archive file in Google Cloud Storage. */
		resolvedStorageSource?: StorageSource;
	}

	/**
	 * Provenance of the source. Ways to find the original source, or verify that
	 * some source was used for this build.
	 */
	export interface SourceProvenanceFormProperties {

		/**
		 * Output only. Hash(es) of the build source, which can be used to verify that
		 * the original source integrity was maintained in the build. Note that
		 * `FileHashes` will only be populated if `BuildOptions` has requested a
		 * `SourceProvenanceHash`.
		 * The keys to this map are file paths used as build source and the values
		 * contain the hash values for those files.
		 * If the build source came in a single package such as a gzipped tarfile
		 * (`.tar.gz`), the `FileHash` will be for the single path to that file.
		 */
		fileHashes: FormControl<{[id: string]: FileHashes } | null | undefined>,
	}
	export function CreateSourceProvenanceFormGroup() {
		return new FormGroup<SourceProvenanceFormProperties>({
			fileHashes: new FormControl<{[id: string]: FileHashes } | null | undefined>(undefined),
		});

	}

	export enum BuildStatus { STATUS_UNKNOWN = 0, QUEUED = 1, WORKING = 2, SUCCESS = 3, FAILURE = 4, INTERNAL_ERROR = 5, TIMEOUT = 6, CANCELLED = 7, EXPIRED = 8 }


	/** A step in the build pipeline. */
	export interface BuildStep {

		/**
		 * A list of arguments that will be presented to the step when it is started.
		 * If the image used to run the step's container has an entrypoint, the `args`
		 * are used as arguments to that entrypoint. If the image does not define
		 * an entrypoint, the first element in args is used as the entrypoint,
		 * and the remainder will be used as arguments.
		 */
		args?: Array<string>;

		/**
		 * Working directory to use when running this step's container.
		 * If this value is a relative path, it is relative to the build's working
		 * directory. If this value is absolute, it may be outside the build's working
		 * directory, in which case the contents of the path may not be persisted
		 * across build step executions, unless a `volume` for that path is specified.
		 * If the build specifies a `RepoSource` with `dir` and a step with a `dir`,
		 * which specifies an absolute path, the `RepoSource` `dir` is ignored for
		 * the step's execution.
		 */
		dir?: string | null;

		/**
		 * Entrypoint to be used instead of the build step image's default entrypoint.
		 * If unset, the image's default entrypoint is used.
		 */
		entrypoint?: string | null;

		/**
		 * A list of environment variable definitions to be used when running a step.
		 * The elements are of the form "KEY=VALUE" for the environment variable "KEY"
		 * being given the value "VALUE".
		 */
		env?: Array<string>;

		/**
		 * Unique identifier for this build step, used in `wait_for` to
		 * reference this build step as a dependency.
		 */
		id?: string | null;

		/**
		 * Required. The name of the container image that will run this particular
		 * build step.
		 * If the image is available in the host's Docker daemon's cache, it
		 * will be run directly. If not, the host will attempt to pull the image
		 * first, using the builder service account's credentials if necessary.
		 * The Docker daemon's cache will already have the latest versions of all of
		 * the officially supported build steps
		 * ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)).
		 * The Docker daemon will also have cached many of the layers for some popular
		 * images, like "ubuntu", "debian", but they will be refreshed at the time you
		 * attempt to use them.
		 * If you built an image in a previous build step, it will be stored in the
		 * host's Docker daemon's cache and is available to use as the name for a
		 * later build step.
		 */
		name?: string | null;

		/** Start and end times for a build execution phase. */
		pullTiming?: TimeSpan;

		/**
		 * A list of environment variables which are encrypted using a Cloud Key
		 * Management Service crypto key. These values must be specified in the
		 * build's `Secret`.
		 */
		secretEnv?: Array<string>;

		/**
		 * Output only. Status of the build step. At this time, build step status is
		 * only updated on build completion; step status is not updated in real-time
		 * as the build progresses.
		 */
		status?: BuildStatus | null;

		/**
		 * Time limit for executing this build step. If not defined, the step has no
		 * time limit and will be allowed to continue to run until either it completes
		 * or the build itself times out.
		 */
		timeout?: string | null;

		/** Start and end times for a build execution phase. */
		timing?: TimeSpan;

		/**
		 * List of volumes to mount into the build step.
		 * Each volume is created as an empty volume prior to execution of the
		 * build step. Upon completion of the build, volumes and their contents are
		 * discarded.
		 * Using a named volume in only one step is not valid as it is indicative
		 * of a build request with an incorrect configuration.
		 */
		volumes?: Array<Volume>;

		/**
		 * The ID(s) of the step(s) that this build step depends on.
		 * This build step will not start until all the build steps in `wait_for`
		 * have completed successfully. If `wait_for` is empty, this build step will
		 * start when all previous build steps in the `Build.Steps` list have
		 * completed successfully.
		 */
		waitFor?: Array<string>;
	}

	/** A step in the build pipeline. */
	export interface BuildStepFormProperties {

		/**
		 * Working directory to use when running this step's container.
		 * If this value is a relative path, it is relative to the build's working
		 * directory. If this value is absolute, it may be outside the build's working
		 * directory, in which case the contents of the path may not be persisted
		 * across build step executions, unless a `volume` for that path is specified.
		 * If the build specifies a `RepoSource` with `dir` and a step with a `dir`,
		 * which specifies an absolute path, the `RepoSource` `dir` is ignored for
		 * the step's execution.
		 */
		dir: FormControl<string | null | undefined>,

		/**
		 * Entrypoint to be used instead of the build step image's default entrypoint.
		 * If unset, the image's default entrypoint is used.
		 */
		entrypoint: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for this build step, used in `wait_for` to
		 * reference this build step as a dependency.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Required. The name of the container image that will run this particular
		 * build step.
		 * If the image is available in the host's Docker daemon's cache, it
		 * will be run directly. If not, the host will attempt to pull the image
		 * first, using the builder service account's credentials if necessary.
		 * The Docker daemon's cache will already have the latest versions of all of
		 * the officially supported build steps
		 * ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)).
		 * The Docker daemon will also have cached many of the layers for some popular
		 * images, like "ubuntu", "debian", but they will be refreshed at the time you
		 * attempt to use them.
		 * If you built an image in a previous build step, it will be stored in the
		 * host's Docker daemon's cache and is available to use as the name for a
		 * later build step.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Output only. Status of the build step. At this time, build step status is
		 * only updated on build completion; step status is not updated in real-time
		 * as the build progresses.
		 */
		status: FormControl<BuildStatus | null | undefined>,

		/**
		 * Time limit for executing this build step. If not defined, the step has no
		 * time limit and will be allowed to continue to run until either it completes
		 * or the build itself times out.
		 */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateBuildStepFormGroup() {
		return new FormGroup<BuildStepFormProperties>({
			dir: new FormControl<string | null | undefined>(undefined),
			entrypoint: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<BuildStatus | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for build operations. */
	export interface BuildOperationMetadata {

		/**
		 * A build resource in the Cloud Build API.
		 * At a high level, a `Build` describes where to find source code, how to build
		 * it (for example, the builder image to run on the source), and where to store
		 * the built artifacts.
		 * Fields can include the following variables, which will be expanded when the
		 * build is created:
		 * - $PROJECT_ID: the project ID of the build.
		 * - $BUILD_ID: the autogenerated ID of the build.
		 * - $REPO_NAME: the source repository name specified by RepoSource.
		 * - $BRANCH_NAME: the branch name specified by RepoSource.
		 * - $TAG_NAME: the tag name specified by RepoSource.
		 * - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or
		 * resolved from the specified branch or tag.
		 * - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
		 */
		build?: Build;
	}

	/** Metadata for build operations. */
	export interface BuildOperationMetadataFormProperties {
	}
	export function CreateBuildOperationMetadataFormGroup() {
		return new FormGroup<BuildOperationMetadataFormProperties>({
		});

	}


	/**
	 * Configuration for an automated build in response to source repository
	 * changes.
	 */
	export interface BuildTrigger {

		/**
		 * A build resource in the Cloud Build API.
		 * At a high level, a `Build` describes where to find source code, how to build
		 * it (for example, the builder image to run on the source), and where to store
		 * the built artifacts.
		 * Fields can include the following variables, which will be expanded when the
		 * build is created:
		 * - $PROJECT_ID: the project ID of the build.
		 * - $BUILD_ID: the autogenerated ID of the build.
		 * - $REPO_NAME: the source repository name specified by RepoSource.
		 * - $BRANCH_NAME: the branch name specified by RepoSource.
		 * - $TAG_NAME: the tag name specified by RepoSource.
		 * - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or
		 * resolved from the specified branch or tag.
		 * - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
		 */
		build?: Build;

		/** Output only. Time when the trigger was created. */
		createTime?: string | null;

		/** Human-readable description of this trigger. */
		description?: string | null;

		/** If true, the trigger will never result in a build. */
		disabled?: boolean | null;

		/**
		 * Path, from the source root, to a file whose contents is used for the
		 * template.
		 */
		filename?: string | null;

		/**
		 * GitHubEventsConfig describes the configuration of a trigger that creates a
		 * build whenever a GitHub event is received.
		 * This message is experimental.
		 */
		github?: GitHubEventsConfig;

		/** Output only. Unique identifier of the trigger. */
		id?: string | null;

		/**
		 * ignored_files and included_files are file glob matches using
		 * https://golang.org/pkg/path/filepath/#Match extended with support for "**".
		 * If ignored_files and changed files are both empty, then they are
		 * not used to determine whether or not to trigger a build.
		 * If ignored_files is not empty, then we ignore any files that match
		 * any of the ignored_file globs. If the change has no files that are
		 * outside of the ignored_files globs, then we do not trigger a build.
		 */
		ignoredFiles?: Array<string>;

		/**
		 * If any of the files altered in the commit pass the ignored_files
		 * filter and included_files is empty, then as far as this filter is
		 * concerned, we should trigger the build.
		 * If any of the files altered in the commit pass the ignored_files
		 * filter and included_files is not empty, then we make sure that at
		 * least one of those files matches a included_files glob. If not,
		 * then we do not trigger a build.
		 */
		includedFiles?: Array<string>;

		/**
		 * User-assigned name of the trigger. Must be unique within the project.
		 * Trigger names must meet the following requirements:
		 * + They must contain only alphanumeric characters and dashes.
		 * + They can be 1-64 characters long.
		 * + They must begin and end with an alphanumeric character.
		 */
		name?: string | null;

		/**
		 * Substitutions for Build resource. The keys must match the following
		 * regular expression: `^_[A-Z0-9_]+$`.The keys cannot conflict with the
		 * keys in bindings.
		 */
		substitutions?: {[id: string]: string };

		/** Tags for annotation of a `BuildTrigger` */
		tags?: Array<string>;

		/** Location of the source in a Google Cloud Source Repository. */
		triggerTemplate?: RepoSource;
	}

	/**
	 * Configuration for an automated build in response to source repository
	 * changes.
	 */
	export interface BuildTriggerFormProperties {

		/** Output only. Time when the trigger was created. */
		createTime: FormControl<string | null | undefined>,

		/** Human-readable description of this trigger. */
		description: FormControl<string | null | undefined>,

		/** If true, the trigger will never result in a build. */
		disabled: FormControl<boolean | null | undefined>,

		/**
		 * Path, from the source root, to a file whose contents is used for the
		 * template.
		 */
		filename: FormControl<string | null | undefined>,

		/** Output only. Unique identifier of the trigger. */
		id: FormControl<string | null | undefined>,

		/**
		 * User-assigned name of the trigger. Must be unique within the project.
		 * Trigger names must meet the following requirements:
		 * + They must contain only alphanumeric characters and dashes.
		 * + They can be 1-64 characters long.
		 * + They must begin and end with an alphanumeric character.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Substitutions for Build resource. The keys must match the following
		 * regular expression: `^_[A-Z0-9_]+$`.The keys cannot conflict with the
		 * keys in bindings.
		 */
		substitutions: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateBuildTriggerFormGroup() {
		return new FormGroup<BuildTriggerFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			substitutions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/**
	 * GitHubEventsConfig describes the configuration of a trigger that creates a
	 * build whenever a GitHub event is received.
	 * This message is experimental.
	 */
	export interface GitHubEventsConfig {

		/** The installationID that emits the GitHub event. */
		installationId?: string | null;

		/**
		 * Name of the repository. For example: The name for
		 * https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".
		 */
		name?: string | null;

		/**
		 * Owner of the repository. For example: The owner for
		 * https://github.com/googlecloudplatform/cloud-builders is
		 * "googlecloudplatform".
		 */
		owner?: string | null;

		/**
		 * PullRequestFilter contains filter properties for matching GitHub Pull
		 * Requests.
		 */
		pullRequest?: PullRequestFilter;

		/** Push contains filter properties for matching GitHub git pushes. */
		push?: PushFilter;
	}

	/**
	 * GitHubEventsConfig describes the configuration of a trigger that creates a
	 * build whenever a GitHub event is received.
	 * This message is experimental.
	 */
	export interface GitHubEventsConfigFormProperties {

		/** The installationID that emits the GitHub event. */
		installationId: FormControl<string | null | undefined>,

		/**
		 * Name of the repository. For example: The name for
		 * https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Owner of the repository. For example: The owner for
		 * https://github.com/googlecloudplatform/cloud-builders is
		 * "googlecloudplatform".
		 */
		owner: FormControl<string | null | undefined>,
	}
	export function CreateGitHubEventsConfigFormGroup() {
		return new FormGroup<GitHubEventsConfigFormProperties>({
			installationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * PullRequestFilter contains filter properties for matching GitHub Pull
	 * Requests.
	 */
	export interface PullRequestFilter {

		/**
		 * Regex of branches to match.
		 * The syntax of the regular expressions accepted is the syntax accepted by
		 * RE2 and described at https://github.com/google/re2/wiki/Syntax
		 */
		branch?: string | null;

		/**
		 * Whether to block builds on a "/gcbrun" comment from a repository admin or
		 * collaborator.
		 */
		commentControl?: PullRequestFilterCommentControl | null;

		/** If true, branches that do NOT match the git_ref will trigger a build. */
		invertRegex?: boolean | null;
	}

	/**
	 * PullRequestFilter contains filter properties for matching GitHub Pull
	 * Requests.
	 */
	export interface PullRequestFilterFormProperties {

		/**
		 * Regex of branches to match.
		 * The syntax of the regular expressions accepted is the syntax accepted by
		 * RE2 and described at https://github.com/google/re2/wiki/Syntax
		 */
		branch: FormControl<string | null | undefined>,

		/**
		 * Whether to block builds on a "/gcbrun" comment from a repository admin or
		 * collaborator.
		 */
		commentControl: FormControl<PullRequestFilterCommentControl | null | undefined>,

		/** If true, branches that do NOT match the git_ref will trigger a build. */
		invertRegex: FormControl<boolean | null | undefined>,
	}
	export function CreatePullRequestFilterFormGroup() {
		return new FormGroup<PullRequestFilterFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined),
			commentControl: new FormControl<PullRequestFilterCommentControl | null | undefined>(undefined),
			invertRegex: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PullRequestFilterCommentControl { COMMENTS_DISABLED = 0, COMMENTS_ENABLED = 1 }


	/** Push contains filter properties for matching GitHub git pushes. */
	export interface PushFilter {

		/**
		 * Regexes matching branches to build.
		 * The syntax of the regular expressions accepted is the syntax accepted by
		 * RE2 and described at https://github.com/google/re2/wiki/Syntax
		 */
		branch?: string | null;

		/**
		 * When true, only trigger a build if the revision regex does NOT match the
		 * git_ref regex.
		 */
		invertRegex?: boolean | null;

		/**
		 * Regexes matching tags to build.
		 * The syntax of the regular expressions accepted is the syntax accepted by
		 * RE2 and described at https://github.com/google/re2/wiki/Syntax
		 */
		tag?: string | null;
	}

	/** Push contains filter properties for matching GitHub git pushes. */
	export interface PushFilterFormProperties {

		/**
		 * Regexes matching branches to build.
		 * The syntax of the regular expressions accepted is the syntax accepted by
		 * RE2 and described at https://github.com/google/re2/wiki/Syntax
		 */
		branch: FormControl<string | null | undefined>,

		/**
		 * When true, only trigger a build if the revision regex does NOT match the
		 * git_ref regex.
		 */
		invertRegex: FormControl<boolean | null | undefined>,

		/**
		 * Regexes matching tags to build.
		 * The syntax of the regular expressions accepted is the syntax accepted by
		 * RE2 and described at https://github.com/google/re2/wiki/Syntax
		 */
		tag: FormControl<string | null | undefined>,
	}
	export function CreatePushFilterFormGroup() {
		return new FormGroup<PushFilterFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined),
			invertRegex: new FormControl<boolean | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to cancel an ongoing build. */
	export interface CancelBuildRequest {
	}

	/** Request to cancel an ongoing build. */
	export interface CancelBuildRequestFormProperties {
	}
	export function CreateCancelBuildRequestFormGroup() {
		return new FormGroup<CancelBuildRequestFormProperties>({
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

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
	export interface Empty {
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
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Response containing existing `BuildTriggers`. */
	export interface ListBuildTriggersResponse {

		/** Token to receive the next page of results. */
		nextPageToken?: string | null;

		/** `BuildTriggers` for the project, sorted by `create_time` descending. */
		triggers?: Array<BuildTrigger>;
	}

	/** Response containing existing `BuildTriggers`. */
	export interface ListBuildTriggersResponseFormProperties {

		/** Token to receive the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuildTriggersResponseFormGroup() {
		return new FormGroup<ListBuildTriggersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response including listed builds. */
	export interface ListBuildsResponse {

		/** Builds will be sorted by `create_time`, descending. */
		builds?: Array<Build>;

		/** Token to receive the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response including listed builds. */
	export interface ListBuildsResponseFormProperties {

		/** Token to receive the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuildsResponseFormGroup() {
		return new FormGroup<ListBuildsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

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
		error?: Status;

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
		response?: {[id: string]: any };
	}

	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface OperationFormProperties {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done: FormControl<boolean | null | undefined>,

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name: FormControl<string | null | undefined>,

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
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

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
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}

	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a build to retry. */
	export interface RetryBuildRequest {
	}

	/** Specifies a build to retry. */
	export interface RetryBuildRequestFormProperties {
	}
	export function CreateRetryBuildRequestFormGroup() {
		return new FormGroup<RetryBuildRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists previously requested builds.
		 * Previously requested builds may still be in-progress, or may have finished
		 * successfully or unsuccessfully.
		 * Get v1/projects/{projectId}/builds
		 * @param {string} projectId Required. ID of the project.
		 * @param {string} filter The raw filter text to constrain the results.
		 * @param {number} pageSize Number of results to return in the list.
		 * @param {string} pageToken Token to provide to skip to a particular spot in the list.
		 * @return {void} Successful response
		 */
		Cloudbuild_projects_builds_list(projectId: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/builds&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a build with the specified configuration.
		 * This method returns a long-running `Operation`, which includes the build
		 * ID. Pass the build ID to `GetBuild` to determine the build status (such as
		 * `SUCCESS` or `FAILURE`).
		 * Post v1/projects/{projectId}/builds
		 * @param {string} projectId Required. ID of the project.
		 * @return {void} Successful response
		 */
		Cloudbuild_projects_builds_create(projectId: string, requestBody: Build): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/builds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about a previously requested build.
		 * The `Build` that is returned includes its status (such as `SUCCESS`,
		 * `FAILURE`, or `WORKING`), and timing information.
		 * Get v1/projects/{projectId}/builds/{id}
		 * @param {string} projectId Required. ID of the project.
		 * @param {string} id Required. ID of the build.
		 * @return {void} Successful response
		 */
		Cloudbuild_projects_builds_get(projectId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/builds/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a build in progress.
		 * Post v1/projects/{projectId}/builds/{id}:cancel
		 * @param {string} projectId Required. ID of the project.
		 * @param {string} id Required. ID of the build.
		 * @return {void} Successful response
		 */
		Cloudbuild_projects_builds_cancel(projectId: string, id: string, requestBody: CancelBuildRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/builds/' + (id == null ? '' : encodeURIComponent(id)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new build based on the specified build.
		 * This method creates a new build using the original build request, which may
		 * or may not result in an identical build.
		 * For triggered builds:
		 * * Triggered builds resolve to a precise revision; therefore a retry of a
		 * triggered build will result in a build that uses the same revision.
		 * For non-triggered builds that specify `RepoSource`:
		 * * If the original build built from the tip of a branch, the retried build
		 * will build from the tip of that branch, which may not be the same revision
		 * as the original build.
		 * * If the original build specified a commit sha or revision ID, the retried
		 * build will use the identical source.
		 * For builds that specify `StorageSource`:
		 * * If the original build pulled source from Google Cloud Storage without
		 * specifying the generation of the object, the new build will use the current
		 * object, which may be different from the original build source.
		 * * If the original build pulled source from Cloud Storage and specified the
		 * generation of the object, the new build will attempt to use the same
		 * object, which may or may not be available depending on the bucket's
		 * lifecycle management settings.
		 * Post v1/projects/{projectId}/builds/{id}:retry
		 * @param {string} projectId Required. ID of the project.
		 * @param {string} id Required. Build ID of the original build.
		 * @return {void} Successful response
		 */
		Cloudbuild_projects_builds_retry(projectId: string, id: string, requestBody: RetryBuildRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/builds/' + (id == null ? '' : encodeURIComponent(id)) + ':retry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists existing `BuildTrigger`s.
		 * This API is experimental.
		 * Get v1/projects/{projectId}/triggers
		 * @param {string} projectId Required. ID of the project for which to list BuildTriggers.
		 * @param {number} pageSize Number of results to return in the list.
		 * @param {string} pageToken Token to provide to skip to a particular spot in the list.
		 * @return {void} Successful response
		 */
		Cloudbuild_projects_triggers_list(projectId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/triggers&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new `BuildTrigger`.
		 * This API is experimental.
		 * Post v1/projects/{projectId}/triggers
		 * @param {string} projectId Required. ID of the project for which to configure automatic builds.
		 * @return {void} Successful response
		 */
		Cloudbuild_projects_triggers_create(projectId: string, requestBody: BuildTrigger): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/triggers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a `BuildTrigger` by its project ID and trigger ID.
		 * This API is experimental.
		 * Delete v1/projects/{projectId}/triggers/{triggerId}
		 * @param {string} projectId Required. ID of the project that owns the trigger.
		 * @param {string} triggerId Required. ID of the `BuildTrigger` to delete.
		 * @return {void} Successful response
		 */
		Cloudbuild_projects_triggers_delete(projectId: string, triggerId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/triggers/' + (triggerId == null ? '' : encodeURIComponent(triggerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about a `BuildTrigger`.
		 * This API is experimental.
		 * Get v1/projects/{projectId}/triggers/{triggerId}
		 * @param {string} projectId Required. ID of the project that owns the trigger.
		 * @param {string} triggerId Required. Identifier (`id` or `name`) of the `BuildTrigger` to get.
		 * @return {void} Successful response
		 */
		Cloudbuild_projects_triggers_get(projectId: string, triggerId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/triggers/' + (triggerId == null ? '' : encodeURIComponent(triggerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a `BuildTrigger` by its project ID and trigger ID.
		 * This API is experimental.
		 * Patch v1/projects/{projectId}/triggers/{triggerId}
		 * @param {string} projectId Required. ID of the project that owns the trigger.
		 * @param {string} triggerId Required. ID of the `BuildTrigger` to update.
		 * @return {void} Successful response
		 */
		Cloudbuild_projects_triggers_patch(projectId: string, triggerId: string, requestBody: BuildTrigger): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/triggers/' + (triggerId == null ? '' : encodeURIComponent(triggerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Runs a `BuildTrigger` at a particular source revision.
		 * Post v1/projects/{projectId}/triggers/{triggerId}:run
		 * @param {string} projectId Required. ID of the project.
		 * @param {string} triggerId Required. ID of the trigger.
		 * @return {void} Successful response
		 */
		Cloudbuild_projects_triggers_run(projectId: string, triggerId: string, requestBody: RepoSource): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/triggers/' + (triggerId == null ? '' : encodeURIComponent(triggerId)) + ':run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the latest state of a long-running operation.  Clients can use this
		 * method to poll the operation result at intervals as recommended by the API
		 * service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {void} Successful response
		 */
		Cloudbuild_operations_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
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
		Cloudbuild_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

