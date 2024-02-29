import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** ApprovalConfig describes configuration for manual approval of a build. */
	export interface ApprovalConfig {

		/** Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start. */
		approvalRequired?: boolean | null;
	}

	/** ApprovalConfig describes configuration for manual approval of a build. */
	export interface ApprovalConfigFormProperties {

		/** Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start. */
		approvalRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateApprovalConfigFormGroup() {
		return new FormGroup<ApprovalConfigFormProperties>({
			approvalRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** ApprovalResult describes the decision and associated metadata of a manual approval of a build. */
	export interface ApprovalResult {

		/** Output only. The time when the approval decision was made. */
		approvalTime?: string | null;

		/** Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called. */
		approverAccount?: string | null;

		/** Optional. An optional comment for this manual approval result. */
		comment?: string | null;

		/** Required. The decision of this manual approval. */
		decision?: ApprovalResultDecision | null;

		/** Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build. */
		url?: string | null;
	}

	/** ApprovalResult describes the decision and associated metadata of a manual approval of a build. */
	export interface ApprovalResultFormProperties {

		/** Output only. The time when the approval decision was made. */
		approvalTime: FormControl<string | null | undefined>,

		/** Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called. */
		approverAccount: FormControl<string | null | undefined>,

		/** Optional. An optional comment for this manual approval result. */
		comment: FormControl<string | null | undefined>,

		/** Required. The decision of this manual approval. */
		decision: FormControl<ApprovalResultDecision | null | undefined>,

		/** Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateApprovalResultFormGroup() {
		return new FormGroup<ApprovalResultFormProperties>({
			approvalTime: new FormControl<string | null | undefined>(undefined),
			approverAccount: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			decision: new FormControl<ApprovalResultDecision | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApprovalResultDecision { DECISION_UNSPECIFIED = 'DECISION_UNSPECIFIED', APPROVED = 'APPROVED', REJECTED = 'REJECTED' }


	/** Files in the workspace to upload to Cloud Storage upon successful completion of all build steps. */
	export interface ArtifactObjects {

		/** Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix. */
		location?: string | null;

		/** Path globs used to match files in the build's workspace. */
		paths?: Array<string>;

		/** Start and end times for a build execution phase. */
		timing?: TimeSpan;
	}

	/** Files in the workspace to upload to Cloud Storage upon successful completion of all build steps. */
	export interface ArtifactObjectsFormProperties {

		/** Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix. */
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


	/** An artifact that was uploaded during a build. This is a single record in the artifact manifest JSON file. */
	export interface ArtifactResult {

		/** The file hash of the artifact. */
		fileHash?: Array<FileHashes>;

		/** The path of an artifact in a Google Cloud Storage bucket, with the generation number. For example, `gs://mybucket/path/to/output.jar#generation`. */
		location?: string | null;
	}

	/** An artifact that was uploaded during a build. This is a single record in the artifact manifest JSON file. */
	export interface ArtifactResultFormProperties {

		/** The path of an artifact in a Google Cloud Storage bucket, with the generation number. For example, `gs://mybucket/path/to/output.jar#generation`. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateArtifactResultFormGroup() {
		return new FormGroup<ArtifactResultFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build. */
	export interface FileHashes {

		/** Collection of file hashes. */
		fileHash?: Array<Hash>;
	}

	/** Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build. */
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

	export enum HashType { NONE = 'NONE', SHA256 = 'SHA256', MD5 = 'MD5' }


	/** Artifacts produced by a build that should be uploaded upon successful completion of all build steps. */
	export interface Artifacts {

		/** A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE. */
		images?: Array<string>;

		/** A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. Artifacts in the workspace matching specified paths globs will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any artifacts fail to be pushed, the build is marked FAILURE. */
		mavenArtifacts?: Array<MavenArtifact>;

		/** Files in the workspace to upload to Cloud Storage upon successful completion of all build steps. */
		objects?: ArtifactObjects;

		/** A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps. The build service account credentials will be used to perform the upload. If any objects fail to be pushed, the build is marked FAILURE. */
		pythonPackages?: Array<PythonPackage>;
	}

	/** Artifacts produced by a build that should be uploaded upon successful completion of all build steps. */
	export interface ArtifactsFormProperties {
	}
	export function CreateArtifactsFormGroup() {
		return new FormGroup<ArtifactsFormProperties>({
		});

	}


	/** A Maven artifact to upload to Artifact Registry upon successful completion of all build steps. */
	export interface MavenArtifact {

		/** Maven `artifactId` value used when uploading the artifact to Artifact Registry. */
		artifactId?: string | null;

		/** Maven `groupId` value used when uploading the artifact to Artifact Registry. */
		groupId?: string | null;

		/** Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar. */
		path?: string | null;

		/** Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix. */
		repository?: string | null;

		/** Maven `version` value used when uploading the artifact to Artifact Registry. */
		version?: string | null;
	}

	/** A Maven artifact to upload to Artifact Registry upon successful completion of all build steps. */
	export interface MavenArtifactFormProperties {

		/** Maven `artifactId` value used when uploading the artifact to Artifact Registry. */
		artifactId: FormControl<string | null | undefined>,

		/** Maven `groupId` value used when uploading the artifact to Artifact Registry. */
		groupId: FormControl<string | null | undefined>,

		/** Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar. */
		path: FormControl<string | null | undefined>,

		/** Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix. */
		repository: FormControl<string | null | undefined>,

		/** Maven `version` value used when uploading the artifact to Artifact Registry. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateMavenArtifactFormGroup() {
		return new FormGroup<MavenArtifactFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository. */
	export interface PythonPackage {

		/** Path globs used to match files in the build's workspace. For Python/ Twine, this is usually `dist/*`, and sometimes additionally an `.asc` file. */
		paths?: Array<string>;

		/** Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY" Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix. */
		repository?: string | null;
	}

	/** Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository. */
	export interface PythonPackageFormProperties {

		/** Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY" Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix. */
		repository: FormControl<string | null | undefined>,
	}
	export function CreatePythonPackageFormGroup() {
		return new FormGroup<PythonPackageFormProperties>({
			repository: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of BatchCreateBitbucketServerConnectedRepositories RPC method including all successfully connected Bitbucket Server repositories. */
	export interface BatchCreateBitbucketServerConnectedRepositoriesResponse {

		/** The connected Bitbucket Server repositories. */
		bitbucketServerConnectedRepositories?: Array<BitbucketServerConnectedRepository>;
	}

	/** Response of BatchCreateBitbucketServerConnectedRepositories RPC method including all successfully connected Bitbucket Server repositories. */
	export interface BatchCreateBitbucketServerConnectedRepositoriesResponseFormProperties {
	}
	export function CreateBatchCreateBitbucketServerConnectedRepositoriesResponseFormGroup() {
		return new FormGroup<BatchCreateBitbucketServerConnectedRepositoriesResponseFormProperties>({
		});

	}


	/** / BitbucketServerConnectedRepository represents a connected Bitbucket Server / repository. */
	export interface BitbucketServerConnectedRepository {

		/** The name of the `BitbucketServerConfig` that added connected repository. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}` */
		parent?: string | null;

		/** BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server. */
		repo?: BitbucketServerRepositoryId;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: Status;
	}

	/** / BitbucketServerConnectedRepository represents a connected Bitbucket Server / repository. */
	export interface BitbucketServerConnectedRepositoryFormProperties {

		/** The name of the `BitbucketServerConfig` that added connected repository. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}` */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateBitbucketServerConnectedRepositoryFormGroup() {
		return new FormGroup<BitbucketServerConnectedRepositoryFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server. */
	export interface BitbucketServerRepositoryId {

		/** Required. Identifier for the project storing the repository. */
		projectKey?: string | null;

		/** Required. Identifier for the repository. */
		repoSlug?: string | null;

		/**
		 * Output only. The ID of the webhook that was created for receiving events from this repo. We only create and manage a single webhook for each repo.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		webhookId?: number | null;
	}

	/** BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server. */
	export interface BitbucketServerRepositoryIdFormProperties {

		/** Required. Identifier for the project storing the repository. */
		projectKey: FormControl<string | null | undefined>,

		/** Required. Identifier for the repository. */
		repoSlug: FormControl<string | null | undefined>,

		/**
		 * Output only. The ID of the webhook that was created for receiving events from this repo. We only create and manage a single webhook for each repo.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		webhookId: FormControl<number | null | undefined>,
	}
	export function CreateBitbucketServerRepositoryIdFormGroup() {
		return new FormGroup<BitbucketServerRepositoryIdFormProperties>({
			projectKey: new FormControl<string | null | undefined>(undefined),
			repoSlug: new FormControl<string | null | undefined>(undefined),
			webhookId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for `BatchCreateBitbucketServerConnectedRepositories` operation. */
	export interface BatchCreateBitbucketServerConnectedRepositoriesResponseMetadata {

		/** Time the operation was completed. */
		completeTime?: string | null;

		/** The name of the `BitbucketServerConfig` that added connected repositories. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}` */
		config?: string | null;

		/** Time the operation was created. */
		createTime?: string | null;
	}

	/** Metadata for `BatchCreateBitbucketServerConnectedRepositories` operation. */
	export interface BatchCreateBitbucketServerConnectedRepositoriesResponseMetadataFormProperties {

		/** Time the operation was completed. */
		completeTime: FormControl<string | null | undefined>,

		/** The name of the `BitbucketServerConfig` that added connected repositories. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}` */
		config: FormControl<string | null | undefined>,

		/** Time the operation was created. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateBitbucketServerConnectedRepositoriesResponseMetadataFormGroup() {
		return new FormGroup<BatchCreateBitbucketServerConnectedRepositoriesResponseMetadataFormProperties>({
			completeTime: new FormControl<string | null | undefined>(undefined),
			config: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of BatchCreateGitLabConnectedRepositories RPC method. */
	export interface BatchCreateGitLabConnectedRepositoriesResponse {

		/** The GitLab connected repository requests' responses. */
		gitlabConnectedRepositories?: Array<GitLabConnectedRepository>;
	}

	/** Response of BatchCreateGitLabConnectedRepositories RPC method. */
	export interface BatchCreateGitLabConnectedRepositoriesResponseFormProperties {
	}
	export function CreateBatchCreateGitLabConnectedRepositoriesResponseFormGroup() {
		return new FormGroup<BatchCreateGitLabConnectedRepositoriesResponseFormProperties>({
		});

	}


	/** GitLabConnectedRepository represents a GitLab connected repository request response. */
	export interface GitLabConnectedRepository {

		/** The name of the `GitLabConfig` that added connected repository. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}` */
		parent?: string | null;

		/** GitLabRepositoryId identifies a specific repository hosted on GitLab.com or GitLabEnterprise */
		repo?: GitLabRepositoryId;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: Status;
	}

	/** GitLabConnectedRepository represents a GitLab connected repository request response. */
	export interface GitLabConnectedRepositoryFormProperties {

		/** The name of the `GitLabConfig` that added connected repository. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}` */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGitLabConnectedRepositoryFormGroup() {
		return new FormGroup<GitLabConnectedRepositoryFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GitLabRepositoryId identifies a specific repository hosted on GitLab.com or GitLabEnterprise */
	export interface GitLabRepositoryId {

		/** Required. Identifier for the repository. example: "namespace/project-slug", namespace is usually the username or group ID */
		id?: string | null;

		/**
		 * Output only. The ID of the webhook that was created for receiving events from this repo. We only create and manage a single webhook for each repo.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		webhookId?: number | null;
	}

	/** GitLabRepositoryId identifies a specific repository hosted on GitLab.com or GitLabEnterprise */
	export interface GitLabRepositoryIdFormProperties {

		/** Required. Identifier for the repository. example: "namespace/project-slug", namespace is usually the username or group ID */
		id: FormControl<string | null | undefined>,

		/**
		 * Output only. The ID of the webhook that was created for receiving events from this repo. We only create and manage a single webhook for each repo.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		webhookId: FormControl<number | null | undefined>,
	}
	export function CreateGitLabRepositoryIdFormGroup() {
		return new FormGroup<GitLabRepositoryIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			webhookId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metadata for `BatchCreateGitLabConnectedRepositories` operation. */
	export interface BatchCreateGitLabConnectedRepositoriesResponseMetadata {

		/** Time the operation was completed. */
		completeTime?: string | null;

		/** The name of the `GitLabConfig` that added connected repositories. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}` */
		config?: string | null;

		/** Time the operation was created. */
		createTime?: string | null;
	}

	/** Metadata for `BatchCreateGitLabConnectedRepositories` operation. */
	export interface BatchCreateGitLabConnectedRepositoriesResponseMetadataFormProperties {

		/** Time the operation was completed. */
		completeTime: FormControl<string | null | undefined>,

		/** The name of the `GitLabConfig` that added connected repositories. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}` */
		config: FormControl<string | null | undefined>,

		/** Time the operation was created. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateGitLabConnectedRepositoriesResponseMetadataFormGroup() {
		return new FormGroup<BatchCreateGitLabConnectedRepositoriesResponseMetadataFormProperties>({
			completeTime: new FormControl<string | null | undefined>(undefined),
			config: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for response of creating repositories in batch. */
	export interface BatchCreateRepositoriesResponse {

		/** Repository resources created. */
		repositories?: Array<Repository>;
	}

	/** Message for response of creating repositories in batch. */
	export interface BatchCreateRepositoriesResponseFormProperties {
	}
	export function CreateBatchCreateRepositoriesResponseFormGroup() {
		return new FormGroup<BatchCreateRepositoriesResponseFormProperties>({
		});

	}


	/** A repository associated to a parent connection. */
	export interface Repository {

		/** Allows clients to store small amounts of arbitrary data. */
		annotations?: {[id: string]: string };

		/** Output only. Server assigned timestamp for when the connection was created. */
		createTime?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Immutable. Resource name of the repository, in the format `projects/locations/connections/repositories/*`. */
		name?: string | null;

		/** Required. Git Clone HTTPS URI. */
		remoteUri?: string | null;

		/** Output only. Server assigned timestamp for when the connection was updated. */
		updateTime?: string | null;
	}

	/** A repository associated to a parent connection. */
	export interface RepositoryFormProperties {

		/** Allows clients to store small amounts of arbitrary data. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Server assigned timestamp for when the connection was created. */
		createTime: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Immutable. Resource name of the repository, in the format `projects/locations/connections/repositories/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Git Clone HTTPS URI. */
		remoteUri: FormControl<string | null | undefined>,

		/** Output only. Server assigned timestamp for when the connection was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateRepositoryFormGroup() {
		return new FormGroup<RepositoryFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			remoteUri: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A build resource in the Cloud Build API. At a high level, a `Build` describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA. */
	export interface Build {

		/** BuildApproval describes a build's approval configuration, state, and result. */
		approval?: BuildApproval;

		/** Artifacts produced by a build that should be uploaded upon successful completion of all build steps. */
		artifacts?: Artifacts;

		/** Secrets and secret environment variables. */
		availableSecrets?: Secrets;

		/** Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically. */
		buildTriggerId?: string | null;

		/** Output only. Time at which the request to create the build was received. */
		createTime?: string | null;

		/** A fatal problem encountered during the execution of the build. */
		failureInfo?: FailureInfo;

		/** Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution. */
		finishTime?: string | null;

		/** Output only. Unique identifier of the build. */
		id?: string | null;

		/** A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the `Build` resource's results field. If any of the images fail to be pushed, the build status is marked `FAILURE`. */
		images?: Array<string>;

		/** Output only. URL to logs for this build in Google Cloud Console. */
		logUrl?: string | null;

		/** Google Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`. */
		logsBucket?: string | null;

		/** Output only. The 'Build' name with format: `projects/{project}/locations/{location}/builds/{build}`, where {build} is a unique identifier generated by the service. */
		name?: string | null;

		/** Optional arguments to enable specific features of builds. */
		options?: BuildOptions;

		/** Output only. ID of the project. */
		projectId?: string | null;

		/** TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time. */
		queueTtl?: string | null;

		/** Artifacts created by the build pipeline. */
		results?: Results;

		/** Secrets to decrypt using Cloud Key Management Service. Note: Secret Manager is the recommended technique for managing sensitive data with Cloud Build. Use `available_secrets` to configure builds to access secrets from Secret Manager. For instructions, see: https://cloud.google.com/cloud-build/docs/securing-builds/use-secrets */
		secrets?: Array<Secret>;

		/** IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. ACCOUNT can be email address or uniqueId of the service account. */
		serviceAccount?: string | null;

		/** Location of the source in a supported storage service. */
		source?: Source;

		/** Provenance of the source. Ways to find the original source, or verify that some source was used for this build. */
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

		/** Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is ten minutes. */
		timeout?: string | null;

		/** Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps. * PUSH: time to push all artifacts including docker images and non docker artifacts. * FETCHSOURCE: time to fetch source. * SETUPBUILD: time to set up build. If the build does not specify source or images, these keys will not be included. */
		timing?: {[id: string]: TimeSpan };

		/** Output only. Non-fatal problems encountered during the execution of the build. */
		warnings?: Array<Warning>;
	}

	/** A build resource in the Cloud Build API. At a high level, a `Build` describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA. */
	export interface BuildFormProperties {

		/** Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically. */
		buildTriggerId: FormControl<string | null | undefined>,

		/** Output only. Time at which the request to create the build was received. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution. */
		finishTime: FormControl<string | null | undefined>,

		/** Output only. Unique identifier of the build. */
		id: FormControl<string | null | undefined>,

		/** Output only. URL to logs for this build in Google Cloud Console. */
		logUrl: FormControl<string | null | undefined>,

		/** Google Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`. */
		logsBucket: FormControl<string | null | undefined>,

		/** Output only. The 'Build' name with format: `projects/{project}/locations/{location}/builds/{build}`, where {build} is a unique identifier generated by the service. */
		name: FormControl<string | null | undefined>,

		/** Output only. ID of the project. */
		projectId: FormControl<string | null | undefined>,

		/** TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time. */
		queueTtl: FormControl<string | null | undefined>,

		/** IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. ACCOUNT can be email address or uniqueId of the service account. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Output only. Time at which execution of the build was started. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. Status of the build. */
		status: FormControl<BuildStatus | null | undefined>,

		/** Output only. Customer-readable message about the current status. */
		statusDetail: FormControl<string | null | undefined>,

		/** Substitutions data for `Build` resource. */
		substitutions: FormControl<{[id: string]: string } | null | undefined>,

		/** Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is ten minutes. */
		timeout: FormControl<string | null | undefined>,

		/** Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps. * PUSH: time to push all artifacts including docker images and non docker artifacts. * FETCHSOURCE: time to fetch source. * SETUPBUILD: time to set up build. If the build does not specify source or images, these keys will not be included. */
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
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			queueTtl: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<BuildStatus | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
			substitutions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
			timing: new FormControl<{[id: string]: TimeSpan } | null | undefined>(undefined),
		});

	}


	/** BuildApproval describes a build's approval configuration, state, and result. */
	export interface BuildApproval {

		/** ApprovalConfig describes configuration for manual approval of a build. */
		config?: ApprovalConfig;

		/** ApprovalResult describes the decision and associated metadata of a manual approval of a build. */
		result?: ApprovalResult;

		/** Output only. The state of this build's approval. */
		state?: BuildApprovalState | null;
	}

	/** BuildApproval describes a build's approval configuration, state, and result. */
	export interface BuildApprovalFormProperties {

		/** Output only. The state of this build's approval. */
		state: FormControl<BuildApprovalState | null | undefined>,
	}
	export function CreateBuildApprovalFormGroup() {
		return new FormGroup<BuildApprovalFormProperties>({
			state: new FormControl<BuildApprovalState | null | undefined>(undefined),
		});

	}

	export enum BuildApprovalState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', APPROVED = 'APPROVED', REJECTED = 'REJECTED', CANCELLED = 'CANCELLED' }


	/** Secrets and secret environment variables. */
	export interface Secrets {

		/** Secrets encrypted with KMS key and the associated secret environment variable. */
		inline?: Array<InlineSecret>;

		/** Secrets in Secret Manager and associated secret environment variable. */
		secretManager?: Array<SecretManagerSecret>;
	}

	/** Secrets and secret environment variables. */
	export interface SecretsFormProperties {
	}
	export function CreateSecretsFormGroup() {
		return new FormGroup<SecretsFormProperties>({
		});

	}


	/** Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value. */
	export interface InlineSecret {

		/** Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets. */
		envMap?: {[id: string]: string };

		/** Resource name of Cloud KMS crypto key to decrypt the encrypted value. In format: projects/locations/keyRings/cryptoKeys/* */
		kmsKeyName?: string | null;
	}

	/** Pairs a set of secret environment variables mapped to encrypted values with the Cloud KMS key to use to decrypt the value. */
	export interface InlineSecretFormProperties {

		/** Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets. */
		envMap: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource name of Cloud KMS crypto key to decrypt the encrypted value. In format: projects/locations/keyRings/cryptoKeys/* */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateInlineSecretFormGroup() {
		return new FormGroup<InlineSecretFormProperties>({
			envMap: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pairs a secret environment variable with a SecretVersion in Secret Manager. */
	export interface SecretManagerSecret {

		/** Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. */
		env?: string | null;

		/** Resource name of the SecretVersion. In format: projects/secrets/versions/* */
		versionName?: string | null;
	}

	/** Pairs a secret environment variable with a SecretVersion in Secret Manager. */
	export interface SecretManagerSecretFormProperties {

		/** Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. */
		env: FormControl<string | null | undefined>,

		/** Resource name of the SecretVersion. In format: projects/secrets/versions/* */
		versionName: FormControl<string | null | undefined>,
	}
	export function CreateSecretManagerSecretFormGroup() {
		return new FormGroup<SecretManagerSecretFormProperties>({
			env: new FormControl<string | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A fatal problem encountered during the execution of the build. */
	export interface FailureInfo {

		/** Explains the failure issue in more detail using hard-coded text. */
		detail?: string | null;

		/** The name of the failure. */
		type?: FailureInfoType | null;
	}

	/** A fatal problem encountered during the execution of the build. */
	export interface FailureInfoFormProperties {

		/** Explains the failure issue in more detail using hard-coded text. */
		detail: FormControl<string | null | undefined>,

		/** The name of the failure. */
		type: FormControl<FailureInfoType | null | undefined>,
	}
	export function CreateFailureInfoFormGroup() {
		return new FormGroup<FailureInfoFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FailureInfoType | null | undefined>(undefined),
		});

	}

	export enum FailureInfoType { FAILURE_TYPE_UNSPECIFIED = 'FAILURE_TYPE_UNSPECIFIED', PUSH_FAILED = 'PUSH_FAILED', PUSH_IMAGE_NOT_FOUND = 'PUSH_IMAGE_NOT_FOUND', PUSH_NOT_AUTHORIZED = 'PUSH_NOT_AUTHORIZED', LOGGING_FAILURE = 'LOGGING_FAILURE', USER_BUILD_STEP = 'USER_BUILD_STEP', FETCH_SOURCE_FAILED = 'FETCH_SOURCE_FAILED' }


	/** Optional arguments to enable specific features of builds. */
	export interface BuildOptions {

		/** Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 2000GB; builds that request more than the maximum are rejected with an error. */
		diskSizeGb?: string | null;

		/** Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file. */
		dynamicSubstitutions?: boolean | null;

		/** A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
		env?: Array<string>;

		/** Option to define build log streaming behavior to Google Cloud Storage. */
		logStreamingOption?: BuildOptionsLogStreamingOption | null;

		/** Option to specify the logging mode, which determines if and where build logs are stored. */
		logging?: BuildOptionsLogging | null;

		/** Compute Engine machine type on which to run the build. */
		machineType?: BuildOptionsMachineType | null;

		/** Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information. */
		pool?: PoolOption;

		/** Requested verifiability options. */
		requestedVerifyOption?: BuildOptionsRequestedVerifyOption | null;

		/** A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. These variables will be available to all build steps in this build. */
		secretEnv?: Array<string>;

		/** Requested hash for SourceProvenance. */
		sourceProvenanceHash?: Array<HashType>;

		/** Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file. */
		substitutionOption?: BuildOptionsSubstitutionOption | null;

		/** Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration. */
		volumes?: Array<Volume>;

		/** This field deprecated; please use `pool.name` instead. */
		workerPool?: string | null;
	}

	/** Optional arguments to enable specific features of builds. */
	export interface BuildOptionsFormProperties {

		/** Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 2000GB; builds that request more than the maximum are rejected with an error. */
		diskSizeGb: FormControl<string | null | undefined>,

		/** Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file. */
		dynamicSubstitutions: FormControl<boolean | null | undefined>,

		/** Option to define build log streaming behavior to Google Cloud Storage. */
		logStreamingOption: FormControl<BuildOptionsLogStreamingOption | null | undefined>,

		/** Option to specify the logging mode, which determines if and where build logs are stored. */
		logging: FormControl<BuildOptionsLogging | null | undefined>,

		/** Compute Engine machine type on which to run the build. */
		machineType: FormControl<BuildOptionsMachineType | null | undefined>,

		/** Requested verifiability options. */
		requestedVerifyOption: FormControl<BuildOptionsRequestedVerifyOption | null | undefined>,

		/** Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file. */
		substitutionOption: FormControl<BuildOptionsSubstitutionOption | null | undefined>,

		/** This field deprecated; please use `pool.name` instead. */
		workerPool: FormControl<string | null | undefined>,
	}
	export function CreateBuildOptionsFormGroup() {
		return new FormGroup<BuildOptionsFormProperties>({
			diskSizeGb: new FormControl<string | null | undefined>(undefined),
			dynamicSubstitutions: new FormControl<boolean | null | undefined>(undefined),
			logStreamingOption: new FormControl<BuildOptionsLogStreamingOption | null | undefined>(undefined),
			logging: new FormControl<BuildOptionsLogging | null | undefined>(undefined),
			machineType: new FormControl<BuildOptionsMachineType | null | undefined>(undefined),
			requestedVerifyOption: new FormControl<BuildOptionsRequestedVerifyOption | null | undefined>(undefined),
			substitutionOption: new FormControl<BuildOptionsSubstitutionOption | null | undefined>(undefined),
			workerPool: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuildOptionsLogStreamingOption { STREAM_DEFAULT = 'STREAM_DEFAULT', STREAM_ON = 'STREAM_ON', STREAM_OFF = 'STREAM_OFF' }

	export enum BuildOptionsLogging { LOGGING_UNSPECIFIED = 'LOGGING_UNSPECIFIED', LEGACY = 'LEGACY', GCS_ONLY = 'GCS_ONLY', STACKDRIVER_ONLY = 'STACKDRIVER_ONLY', CLOUD_LOGGING_ONLY = 'CLOUD_LOGGING_ONLY', NONE = 'NONE' }

	export enum BuildOptionsMachineType { UNSPECIFIED = 'UNSPECIFIED', N1_HIGHCPU_8 = 'N1_HIGHCPU_8', N1_HIGHCPU_32 = 'N1_HIGHCPU_32', E2_HIGHCPU_8 = 'E2_HIGHCPU_8', E2_HIGHCPU_32 = 'E2_HIGHCPU_32' }


	/** Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information. */
	export interface PoolOption {

		/** The `WorkerPool` resource to execute the build on. You must have `cloudbuild.workerpools.use` on the project hosting the WorkerPool. Format projects/{project}/locations/{location}/workerPools/{workerPoolId} */
		name?: string | null;
	}

	/** Details about how a build should be executed on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information. */
	export interface PoolOptionFormProperties {

		/** The `WorkerPool` resource to execute the build on. You must have `cloudbuild.workerpools.use` on the project hosting the WorkerPool. Format projects/{project}/locations/{location}/workerPools/{workerPoolId} */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePoolOptionFormGroup() {
		return new FormGroup<PoolOptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuildOptionsRequestedVerifyOption { NOT_VERIFIED = 'NOT_VERIFIED', VERIFIED = 'VERIFIED' }

	export enum BuildOptionsSubstitutionOption { MUST_MATCH = 'MUST_MATCH', ALLOW_LOOSE = 'ALLOW_LOOSE' }


	/** Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution. */
	export interface Volume {

		/** Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps. */
		name?: string | null;

		/** Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths. */
		path?: string | null;
	}

	/** Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution. */
	export interface VolumeFormProperties {

		/** Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps. */
		name: FormControl<string | null | undefined>,

		/** Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths. */
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

		/** Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
		artifactManifest?: string | null;

		/** Start and end times for a build execution phase. */
		artifactTiming?: TimeSpan;

		/** List of build step digests, in the order corresponding to build step indices. */
		buildStepImages?: Array<string>;

		/** List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 4KB of data is stored. */
		buildStepOutputs?: Array<string>;

		/** Container images that were built as a part of the build. */
		images?: Array<BuiltImage>;

		/** Maven artifacts uploaded to Artifact Registry at the end of the build. */
		mavenArtifacts?: Array<UploadedMavenArtifact>;

		/** Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
		numArtifacts?: string | null;

		/** Python artifacts uploaded to Artifact Registry at the end of the build. */
		pythonPackages?: Array<UploadedPythonPackage>;
	}

	/** Artifacts created by the build pipeline. */
	export interface ResultsFormProperties {

		/** Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
		artifactManifest: FormControl<string | null | undefined>,

		/** Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
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

		/** Name used to push the container image to Google Container Registry, as presented to `docker push`. */
		name?: string | null;

		/** Start and end times for a build execution phase. */
		pushTiming?: TimeSpan;
	}

	/** An image built by the pipeline. */
	export interface BuiltImageFormProperties {

		/** Docker Registry 2.0 digest. */
		digest: FormControl<string | null | undefined>,

		/** Name used to push the container image to Google Container Registry, as presented to `docker push`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBuiltImageFormGroup() {
		return new FormGroup<BuiltImageFormProperties>({
			digest: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Maven artifact uploaded using the MavenArtifact directive. */
	export interface UploadedMavenArtifact {

		/** Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build. */
		fileHashes?: FileHashes;

		/** Start and end times for a build execution phase. */
		pushTiming?: TimeSpan;

		/** URI of the uploaded artifact. */
		uri?: string | null;
	}

	/** A Maven artifact uploaded using the MavenArtifact directive. */
	export interface UploadedMavenArtifactFormProperties {

		/** URI of the uploaded artifact. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUploadedMavenArtifactFormGroup() {
		return new FormGroup<UploadedMavenArtifactFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Artifact uploaded using the PythonPackage directive. */
	export interface UploadedPythonPackage {

		/** Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build. */
		fileHashes?: FileHashes;

		/** Start and end times for a build execution phase. */
		pushTiming?: TimeSpan;

		/** URI of the uploaded artifact. */
		uri?: string | null;
	}

	/** Artifact uploaded using the PythonPackage directive. */
	export interface UploadedPythonPackageFormProperties {

		/** URI of the uploaded artifact. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUploadedPythonPackageFormGroup() {
		return new FormGroup<UploadedPythonPackageFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value. Note: Use `kmsKeyName` with `available_secrets` instead of using `kmsKeyName` with `secret`. For instructions see: https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-credentials. */
	export interface Secret {

		/** Cloud KMS key name to use to decrypt these envs. */
		kmsKeyName?: string | null;

		/** Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets. */
		secretEnv?: {[id: string]: string };
	}

	/** Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value. Note: Use `kmsKeyName` with `available_secrets` instead of using `kmsKeyName` with `secret`. For instructions see: https://cloud.google.com/cloud-build/docs/securing-builds/use-encrypted-credentials. */
	export interface SecretFormProperties {

		/** Cloud KMS key name to use to decrypt these envs. */
		kmsKeyName: FormControl<string | null | undefined>,

		/** Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets. */
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

		/** Location of the source manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
		storageSourceManifest?: StorageSourceManifest;
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

		/** Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		branchName?: string | null;

		/** Explicit commit SHA to build. */
		commitSha?: string | null;

		/** Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
		dir?: string | null;

		/** Only trigger a build if the revision regex does NOT match the revision regex. */
		invertRegex?: boolean | null;

		/** ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. */
		projectId?: string | null;

		/** Name of the Cloud Source Repository. */
		repoName?: string | null;

		/** Substitutions to use in a triggered build. Should only be used with RunBuildTrigger */
		substitutions?: {[id: string]: string };

		/** Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		tagName?: string | null;
	}

	/** Location of the source in a Google Cloud Source Repository. */
	export interface RepoSourceFormProperties {

		/** Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		branchName: FormControl<string | null | undefined>,

		/** Explicit commit SHA to build. */
		commitSha: FormControl<string | null | undefined>,

		/** Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
		dir: FormControl<string | null | undefined>,

		/** Only trigger a build if the revision regex does NOT match the revision regex. */
		invertRegex: FormControl<boolean | null | undefined>,

		/** ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. */
		projectId: FormControl<string | null | undefined>,

		/** Name of the Cloud Source Repository. */
		repoName: FormControl<string | null | undefined>,

		/** Substitutions to use in a triggered build. Should only be used with RunBuildTrigger */
		substitutions: FormControl<{[id: string]: string } | null | undefined>,

		/** Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
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

		/** Google Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
		bucket?: string | null;

		/** Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
		generation?: string | null;

		/** Google Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build. */
		object?: string | null;
	}

	/** Location of the source in an archive file in Google Cloud Storage. */
	export interface StorageSourceFormProperties {

		/** Google Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
		bucket: FormControl<string | null | undefined>,

		/** Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
		generation: FormControl<string | null | undefined>,

		/** Google Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build. */
		object: FormControl<string | null | undefined>,
	}
	export function CreateStorageSourceFormGroup() {
		return new FormGroup<StorageSourceFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location of the source manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
	export interface StorageSourceManifest {

		/** Google Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
		bucket?: string | null;

		/** Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
		generation?: string | null;

		/** Google Cloud Storage object containing the source manifest. This object must be a JSON file. */
		object?: string | null;
	}

	/** Location of the source manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
	export interface StorageSourceManifestFormProperties {

		/** Google Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
		bucket: FormControl<string | null | undefined>,

		/** Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
		generation: FormControl<string | null | undefined>,

		/** Google Cloud Storage object containing the source manifest. This object must be a JSON file. */
		object: FormControl<string | null | undefined>,
	}
	export function CreateStorageSourceManifestFormGroup() {
		return new FormGroup<StorageSourceManifestFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provenance of the source. Ways to find the original source, or verify that some source was used for this build. */
	export interface SourceProvenance {

		/** Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file. */
		fileHashes?: {[id: string]: FileHashes };

		/** Location of the source in a Google Cloud Source Repository. */
		resolvedRepoSource?: RepoSource;

		/** Location of the source in an archive file in Google Cloud Storage. */
		resolvedStorageSource?: StorageSource;

		/** Location of the source manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
		resolvedStorageSourceManifest?: StorageSourceManifest;
	}

	/** Provenance of the source. Ways to find the original source, or verify that some source was used for this build. */
	export interface SourceProvenanceFormProperties {

		/** Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file. */
		fileHashes: FormControl<{[id: string]: FileHashes } | null | undefined>,
	}
	export function CreateSourceProvenanceFormGroup() {
		return new FormGroup<SourceProvenanceFormProperties>({
			fileHashes: new FormControl<{[id: string]: FileHashes } | null | undefined>(undefined),
		});

	}

	export enum BuildStatus { STATUS_UNKNOWN = 'STATUS_UNKNOWN', PENDING = 'PENDING', QUEUED = 'QUEUED', WORKING = 'WORKING', SUCCESS = 'SUCCESS', FAILURE = 'FAILURE', INTERNAL_ERROR = 'INTERNAL_ERROR', TIMEOUT = 'TIMEOUT', CANCELLED = 'CANCELLED', EXPIRED = 'EXPIRED' }


	/** A step in the build pipeline. */
	export interface BuildStep {

		/** Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence. */
		allowExitCodes?: Array<number>;

		/** Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field. */
		allowFailure?: boolean | null;

		/** A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments. */
		args?: Array<string>;

		/** Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution. */
		dir?: string | null;

		/** Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. */
		entrypoint?: string | null;

		/** A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
		env?: Array<string>;

		/**
		 * Output only. Return code from running the step.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode?: number | null;

		/** Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency. */
		id?: string | null;

		/** Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step. */
		name?: string | null;

		/** Start and end times for a build execution phase. */
		pullTiming?: TimeSpan;

		/** A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args. */
		script?: string | null;

		/** A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. */
		secretEnv?: Array<string>;

		/** Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses. */
		status?: BuildStatus | null;

		/** Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out. */
		timeout?: string | null;

		/** Start and end times for a build execution phase. */
		timing?: TimeSpan;

		/** List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration. */
		volumes?: Array<Volume>;

		/** The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully. */
		waitFor?: Array<string>;
	}

	/** A step in the build pipeline. */
	export interface BuildStepFormProperties {

		/** Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field. */
		allowFailure: FormControl<boolean | null | undefined>,

		/** Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution. */
		dir: FormControl<string | null | undefined>,

		/** Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. */
		entrypoint: FormControl<string | null | undefined>,

		/**
		 * Output only. Return code from running the step.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode: FormControl<number | null | undefined>,

		/** Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency. */
		id: FormControl<string | null | undefined>,

		/** Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step. */
		name: FormControl<string | null | undefined>,

		/** A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args. */
		script: FormControl<string | null | undefined>,

		/** Output only. Status of the build step. At this time, build step status is only updated on build completion; step status is not updated in real-time as the build progresses. */
		status: FormControl<BuildStatus | null | undefined>,

		/** Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateBuildStepFormGroup() {
		return new FormGroup<BuildStepFormProperties>({
			allowFailure: new FormControl<boolean | null | undefined>(undefined),
			dir: new FormControl<string | null | undefined>(undefined),
			entrypoint: new FormControl<string | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<BuildStatus | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A non-fatal problem encountered during the execution of the build. */
	export interface Warning {

		/** The priority for this warning. */
		priority?: WarningPriority | null;

		/** Explanation of the warning generated. */
		text?: string | null;
	}

	/** A non-fatal problem encountered during the execution of the build. */
	export interface WarningFormProperties {

		/** The priority for this warning. */
		priority: FormControl<WarningPriority | null | undefined>,

		/** Explanation of the warning generated. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateWarningFormGroup() {
		return new FormGroup<WarningFormProperties>({
			priority: new FormControl<WarningPriority | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WarningPriority { PRIORITY_UNSPECIFIED = 'PRIORITY_UNSPECIFIED', INFO = 'INFO', WARNING = 'WARNING', ALERT = 'ALERT' }


	/** Metadata for build operations. */
	export interface BuildOperationMetadata {

		/** A build resource in the Cloud Build API. At a high level, a `Build` describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA. */
		build?: Build;
	}

	/** Metadata for build operations. */
	export interface BuildOperationMetadataFormProperties {
	}
	export function CreateBuildOperationMetadataFormGroup() {
		return new FormGroup<BuildOperationMetadataFormProperties>({
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


	/** Metadata for `CreateBitbucketServerConfig` operation. */
	export interface CreateBitbucketServerConfigOperationMetadata {

		/** The resource name of the BitbucketServerConfig to be created. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{id}`. */
		bitbucketServerConfig?: string | null;

		/** Time the operation was completed. */
		completeTime?: string | null;

		/** Time the operation was created. */
		createTime?: string | null;
	}

	/** Metadata for `CreateBitbucketServerConfig` operation. */
	export interface CreateBitbucketServerConfigOperationMetadataFormProperties {

		/** The resource name of the BitbucketServerConfig to be created. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{id}`. */
		bitbucketServerConfig: FormControl<string | null | undefined>,

		/** Time the operation was completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Time the operation was created. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateBitbucketServerConfigOperationMetadataFormGroup() {
		return new FormGroup<CreateBitbucketServerConfigOperationMetadataFormProperties>({
			bitbucketServerConfig: new FormControl<string | null | undefined>(undefined),
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for `CreateGithubEnterpriseConfig` operation. */
	export interface CreateGitHubEnterpriseConfigOperationMetadata {

		/** Time the operation was completed. */
		completeTime?: string | null;

		/** Time the operation was created. */
		createTime?: string | null;

		/** The resource name of the GitHubEnterprise to be created. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`. */
		githubEnterpriseConfig?: string | null;
	}

	/** Metadata for `CreateGithubEnterpriseConfig` operation. */
	export interface CreateGitHubEnterpriseConfigOperationMetadataFormProperties {

		/** Time the operation was completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The resource name of the GitHubEnterprise to be created. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`. */
		githubEnterpriseConfig: FormControl<string | null | undefined>,
	}
	export function CreateCreateGitHubEnterpriseConfigOperationMetadataFormGroup() {
		return new FormGroup<CreateGitHubEnterpriseConfigOperationMetadataFormProperties>({
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			githubEnterpriseConfig: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for `CreateGitLabConfig` operation. */
	export interface CreateGitLabConfigOperationMetadata {

		/** Time the operation was completed. */
		completeTime?: string | null;

		/** Time the operation was created. */
		createTime?: string | null;

		/** The resource name of the GitLabConfig to be created. Format: `projects/{project}/locations/{location}/gitlabConfigs/{id}`. */
		gitlabConfig?: string | null;
	}

	/** Metadata for `CreateGitLabConfig` operation. */
	export interface CreateGitLabConfigOperationMetadataFormProperties {

		/** Time the operation was completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The resource name of the GitLabConfig to be created. Format: `projects/{project}/locations/{location}/gitlabConfigs/{id}`. */
		gitlabConfig: FormControl<string | null | undefined>,
	}
	export function CreateCreateGitLabConfigOperationMetadataFormGroup() {
		return new FormGroup<CreateGitLabConfigOperationMetadataFormProperties>({
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			gitlabConfig: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for the `CreateWorkerPool` operation. */
	export interface CreateWorkerPoolOperationMetadata {

		/** Time the operation was completed. */
		completeTime?: string | null;

		/** Time the operation was created. */
		createTime?: string | null;

		/** The resource name of the `WorkerPool` to create. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`. */
		workerPool?: string | null;
	}

	/** Metadata for the `CreateWorkerPool` operation. */
	export interface CreateWorkerPoolOperationMetadataFormProperties {

		/** Time the operation was completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The resource name of the `WorkerPool` to create. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`. */
		workerPool: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkerPoolOperationMetadataFormGroup() {
		return new FormGroup<CreateWorkerPoolOperationMetadataFormProperties>({
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			workerPool: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for `DeleteBitbucketServerConfig` operation. */
	export interface DeleteBitbucketServerConfigOperationMetadata {

		/** The resource name of the BitbucketServerConfig to be deleted. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{id}`. */
		bitbucketServerConfig?: string | null;

		/** Time the operation was completed. */
		completeTime?: string | null;

		/** Time the operation was created. */
		createTime?: string | null;
	}

	/** Metadata for `DeleteBitbucketServerConfig` operation. */
	export interface DeleteBitbucketServerConfigOperationMetadataFormProperties {

		/** The resource name of the BitbucketServerConfig to be deleted. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{id}`. */
		bitbucketServerConfig: FormControl<string | null | undefined>,

		/** Time the operation was completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Time the operation was created. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBitbucketServerConfigOperationMetadataFormGroup() {
		return new FormGroup<DeleteBitbucketServerConfigOperationMetadataFormProperties>({
			bitbucketServerConfig: new FormControl<string | null | undefined>(undefined),
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for `DeleteGitHubEnterpriseConfig` operation. */
	export interface DeleteGitHubEnterpriseConfigOperationMetadata {

		/** Time the operation was completed. */
		completeTime?: string | null;

		/** Time the operation was created. */
		createTime?: string | null;

		/** The resource name of the GitHubEnterprise to be deleted. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`. */
		githubEnterpriseConfig?: string | null;
	}

	/** Metadata for `DeleteGitHubEnterpriseConfig` operation. */
	export interface DeleteGitHubEnterpriseConfigOperationMetadataFormProperties {

		/** Time the operation was completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The resource name of the GitHubEnterprise to be deleted. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`. */
		githubEnterpriseConfig: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGitHubEnterpriseConfigOperationMetadataFormGroup() {
		return new FormGroup<DeleteGitHubEnterpriseConfigOperationMetadataFormProperties>({
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			githubEnterpriseConfig: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for `DeleteGitLabConfig` operation. */
	export interface DeleteGitLabConfigOperationMetadata {

		/** Time the operation was completed. */
		completeTime?: string | null;

		/** Time the operation was created. */
		createTime?: string | null;

		/** The resource name of the GitLabConfig to be created. Format: `projects/{project}/locations/{location}/gitlabConfigs/{id}`. */
		gitlabConfig?: string | null;
	}

	/** Metadata for `DeleteGitLabConfig` operation. */
	export interface DeleteGitLabConfigOperationMetadataFormProperties {

		/** Time the operation was completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The resource name of the GitLabConfig to be created. Format: `projects/{project}/locations/{location}/gitlabConfigs/{id}`. */
		gitlabConfig: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGitLabConfigOperationMetadataFormGroup() {
		return new FormGroup<DeleteGitLabConfigOperationMetadataFormProperties>({
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			gitlabConfig: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for the `DeleteWorkerPool` operation. */
	export interface DeleteWorkerPoolOperationMetadata {

		/** Time the operation was completed. */
		completeTime?: string | null;

		/** Time the operation was created. */
		createTime?: string | null;

		/** The resource name of the `WorkerPool` being deleted. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`. */
		workerPool?: string | null;
	}

	/** Metadata for the `DeleteWorkerPool` operation. */
	export interface DeleteWorkerPoolOperationMetadataFormProperties {

		/** Time the operation was completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The resource name of the `WorkerPool` being deleted. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`. */
		workerPool: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkerPoolOperationMetadataFormGroup() {
		return new FormGroup<DeleteWorkerPoolOperationMetadataFormProperties>({
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			workerPool: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface GoogleDevtoolsCloudbuildV2OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface GoogleDevtoolsCloudbuildV2OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsCloudbuildV2OperationMetadataFormGroup() {
		return new FormGroup<GoogleDevtoolsCloudbuildV2OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** HTTPDelivery is the delivery configuration for an HTTP notification. */
	export interface HTTPDelivery {

		/** The URI to which JSON-containing HTTP POST requests should be sent. */
		uri?: string | null;
	}

	/** HTTPDelivery is the delivery configuration for an HTTP notification. */
	export interface HTTPDeliveryFormProperties {

		/** The URI to which JSON-containing HTTP POST requests should be sent. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateHTTPDeliveryFormGroup() {
		return new FormGroup<HTTPDeliveryFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing existing `WorkerPools`. */
	export interface ListWorkerPoolsResponse {

		/** `WorkerPools` for the project. */
		workerPools?: Array<WorkerPool>;
	}

	/** Response containing existing `WorkerPools`. */
	export interface ListWorkerPoolsResponseFormProperties {
	}
	export function CreateListWorkerPoolsResponseFormGroup() {
		return new FormGroup<ListWorkerPoolsResponseFormProperties>({
		});

	}


	/** Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool. */
	export interface WorkerPool {

		/** Output only. Time at which the request to create the `WorkerPool` was received. */
		createTime?: string | null;

		/** Output only. Time at which the request to delete the `WorkerPool` was received. */
		deleteTime?: string | null;

		/** User-defined name of the `WorkerPool`. */
		name?: string | null;

		/** The project ID of the GCP project for which the `WorkerPool` is created. */
		projectId?: string | null;

		/** List of regions to create the `WorkerPool`. Regions can't be empty. If Cloud Build adds a new GCP region in the future, the existing `WorkerPool` will not be enabled in the new region automatically; you must add the new region to the `regions` field to enable the `WorkerPool` in that region. */
		regions?: Array<string>;

		/** Output only. The service account used to manage the `WorkerPool`. The service account must have the Compute Instance Admin (Beta) permission at the project level. */
		serviceAccountEmail?: string | null;

		/** Output only. WorkerPool Status. */
		status?: WorkerPoolStatus | null;

		/** Output only. Time at which the request to update the `WorkerPool` was received. */
		updateTime?: string | null;

		/** WorkerConfig defines the configuration to be used for a creating workers in the pool. */
		workerConfig?: WorkerConfig;

		/** Total number of workers to be created across all requested regions. */
		workerCount?: string | null;
	}

	/** Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool. */
	export interface WorkerPoolFormProperties {

		/** Output only. Time at which the request to create the `WorkerPool` was received. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Time at which the request to delete the `WorkerPool` was received. */
		deleteTime: FormControl<string | null | undefined>,

		/** User-defined name of the `WorkerPool`. */
		name: FormControl<string | null | undefined>,

		/** The project ID of the GCP project for which the `WorkerPool` is created. */
		projectId: FormControl<string | null | undefined>,

		/** Output only. The service account used to manage the `WorkerPool`. The service account must have the Compute Instance Admin (Beta) permission at the project level. */
		serviceAccountEmail: FormControl<string | null | undefined>,

		/** Output only. WorkerPool Status. */
		status: FormControl<WorkerPoolStatus | null | undefined>,

		/** Output only. Time at which the request to update the `WorkerPool` was received. */
		updateTime: FormControl<string | null | undefined>,

		/** Total number of workers to be created across all requested regions. */
		workerCount: FormControl<string | null | undefined>,
	}
	export function CreateWorkerPoolFormGroup() {
		return new FormGroup<WorkerPoolFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			serviceAccountEmail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<WorkerPoolStatus | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			workerCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WorkerPoolStatus { STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED', CREATING = 'CREATING', RUNNING = 'RUNNING', DELETING = 'DELETING', DELETED = 'DELETED' }


	/** WorkerConfig defines the configuration to be used for a creating workers in the pool. */
	export interface WorkerConfig {

		/** Size of the disk attached to the worker, in GB. See https://cloud.google.com/compute/docs/disks/ If `0` is specified, Cloud Build will use a standard disk size. `disk_size` is overridden if you specify a different disk size in `build_options`. In this case, a VM with a disk size specified in the `build_options` will be created on demand at build time. For more information see https://cloud.google.com/cloud-build/docs/api/reference/rest/v1/projects.builds#buildoptions */
		diskSizeGb?: string | null;

		/** Machine Type of the worker, such as n1-standard-1. See https://cloud.google.com/compute/docs/machine-types. If left blank, Cloud Build will use a standard unspecified machine to create the worker pool. `machine_type` is overridden if you specify a different machine type in `build_options`. In this case, the VM specified in the `build_options` will be created on demand at build time. For more information see https://cloud.google.com/cloud-build/docs/speeding-up-builds#using_custom_virtual_machine_sizes */
		machineType?: string | null;

		/** Network describes the GCP network used to create workers in. */
		network?: Network;

		/** The tag applied to the worker, and the same tag used by the firewall rule. It is used to identify the Cloud Build workers among other VMs. The default value for tag is `worker`. */
		tag?: string | null;
	}

	/** WorkerConfig defines the configuration to be used for a creating workers in the pool. */
	export interface WorkerConfigFormProperties {

		/** Size of the disk attached to the worker, in GB. See https://cloud.google.com/compute/docs/disks/ If `0` is specified, Cloud Build will use a standard disk size. `disk_size` is overridden if you specify a different disk size in `build_options`. In this case, a VM with a disk size specified in the `build_options` will be created on demand at build time. For more information see https://cloud.google.com/cloud-build/docs/api/reference/rest/v1/projects.builds#buildoptions */
		diskSizeGb: FormControl<string | null | undefined>,

		/** Machine Type of the worker, such as n1-standard-1. See https://cloud.google.com/compute/docs/machine-types. If left blank, Cloud Build will use a standard unspecified machine to create the worker pool. `machine_type` is overridden if you specify a different machine type in `build_options`. In this case, the VM specified in the `build_options` will be created on demand at build time. For more information see https://cloud.google.com/cloud-build/docs/speeding-up-builds#using_custom_virtual_machine_sizes */
		machineType: FormControl<string | null | undefined>,

		/** The tag applied to the worker, and the same tag used by the firewall rule. It is used to identify the Cloud Build workers among other VMs. The default value for tag is `worker`. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateWorkerConfigFormGroup() {
		return new FormGroup<WorkerConfigFormProperties>({
			diskSizeGb: new FormControl<string | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Network describes the GCP network used to create workers in. */
	export interface Network {

		/** Network on which the workers are created. "default" network is used if empty. */
		network?: string | null;

		/** Project id containing the defined network and subnetwork. For a peered VPC, this will be the same as the project_id in which the workers are created. For a shared VPC, this will be the project sharing the network with the project_id project in which workers will be created. For custom workers with no VPC, this will be the same as project_id. */
		projectId?: string | null;

		/** Subnetwork on which the workers are created. "default" subnetwork is used if empty. */
		subnetwork?: string | null;
	}

	/** Network describes the GCP network used to create workers in. */
	export interface NetworkFormProperties {

		/** Network on which the workers are created. "default" network is used if empty. */
		network: FormControl<string | null | undefined>,

		/** Project id containing the defined network and subnetwork. For a peered VPC, this will be the same as the project_id in which the workers are created. For a shared VPC, this will be the project sharing the network with the project_id project in which workers will be created. For custom workers with no VPC, this will be the same as project_id. */
		projectId: FormControl<string | null | undefined>,

		/** Subnetwork on which the workers are created. "default" subnetwork is used if empty. */
		subnetwork: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFormGroup() {
		return new FormGroup<NetworkFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Notification is the container which holds the data that is relevant to this particular notification. */
	export interface Notification {

		/** The filter string to use for notification filtering. Currently, this is assumed to be a CEL program. See https://opensource.google/projects/cel for more. */
		filter?: string | null;

		/** HTTPDelivery is the delivery configuration for an HTTP notification. */
		httpDelivery?: HTTPDelivery;

		/** SlackDelivery is the delivery configuration for delivering Slack messages via webhooks. See Slack webhook documentation at: https://api.slack.com/messaging/webhooks. */
		slackDelivery?: SlackDelivery;

		/** SMTPDelivery is the delivery configuration for an SMTP (email) notification. */
		smtpDelivery?: SMTPDelivery;

		/** Escape hatch for users to supply custom delivery configs. */
		structDelivery?: {[id: string]: any };
	}

	/** Notification is the container which holds the data that is relevant to this particular notification. */
	export interface NotificationFormProperties {

		/** The filter string to use for notification filtering. Currently, this is assumed to be a CEL program. See https://opensource.google/projects/cel for more. */
		filter: FormControl<string | null | undefined>,

		/** Escape hatch for users to supply custom delivery configs. */
		structDelivery: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			structDelivery: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** SlackDelivery is the delivery configuration for delivering Slack messages via webhooks. See Slack webhook documentation at: https://api.slack.com/messaging/webhooks. */
	export interface SlackDelivery {

		/** NotifierSecretRef contains the reference to a secret stored in the corresponding NotifierSpec. */
		webhookUri?: NotifierSecretRef;
	}

	/** SlackDelivery is the delivery configuration for delivering Slack messages via webhooks. See Slack webhook documentation at: https://api.slack.com/messaging/webhooks. */
	export interface SlackDeliveryFormProperties {
	}
	export function CreateSlackDeliveryFormGroup() {
		return new FormGroup<SlackDeliveryFormProperties>({
		});

	}


	/** NotifierSecretRef contains the reference to a secret stored in the corresponding NotifierSpec. */
	export interface NotifierSecretRef {

		/** The value of `secret_ref` should be a `name` that is registered in a `Secret` in the `secrets` list of the `Spec`. */
		secretRef?: string | null;
	}

	/** NotifierSecretRef contains the reference to a secret stored in the corresponding NotifierSpec. */
	export interface NotifierSecretRefFormProperties {

		/** The value of `secret_ref` should be a `name` that is registered in a `Secret` in the `secrets` list of the `Spec`. */
		secretRef: FormControl<string | null | undefined>,
	}
	export function CreateNotifierSecretRefFormGroup() {
		return new FormGroup<NotifierSecretRefFormProperties>({
			secretRef: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SMTPDelivery is the delivery configuration for an SMTP (email) notification. */
	export interface SMTPDelivery {

		/** This is the SMTP account/email that appears in the `From:` of the email. If empty, it is assumed to be sender. */
		fromAddress?: string | null;

		/** NotifierSecretRef contains the reference to a secret stored in the corresponding NotifierSpec. */
		password?: NotifierSecretRef;

		/** The SMTP port of the server. */
		port?: string | null;

		/** This is the list of addresses to which we send the email (i.e. in the `To:` of the email). */
		recipientAddresses?: Array<string>;

		/** This is the SMTP account/email that is used to send the message. */
		senderAddress?: string | null;

		/** The address of the SMTP server. */
		server?: string | null;
	}

	/** SMTPDelivery is the delivery configuration for an SMTP (email) notification. */
	export interface SMTPDeliveryFormProperties {

		/** This is the SMTP account/email that appears in the `From:` of the email. If empty, it is assumed to be sender. */
		fromAddress: FormControl<string | null | undefined>,

		/** The SMTP port of the server. */
		port: FormControl<string | null | undefined>,

		/** This is the SMTP account/email that is used to send the message. */
		senderAddress: FormControl<string | null | undefined>,

		/** The address of the SMTP server. */
		server: FormControl<string | null | undefined>,
	}
	export function CreateSMTPDeliveryFormGroup() {
		return new FormGroup<SMTPDeliveryFormProperties>({
			fromAddress: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			senderAddress: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** NotifierConfig is the top-level configuration message. */
	export interface NotifierConfig {

		/** The API version of this configuration format. */
		apiVersion?: string | null;

		/** The type of notifier to use (e.g. SMTPNotifier). */
		kind?: string | null;

		/** NotifierMetadata contains the data which can be used to reference or describe this notifier. */
		metadata?: NotifierMetadata;

		/** NotifierSpec is the configuration container for notifications. */
		spec?: NotifierSpec;
	}

	/** NotifierConfig is the top-level configuration message. */
	export interface NotifierConfigFormProperties {

		/** The API version of this configuration format. */
		apiVersion: FormControl<string | null | undefined>,

		/** The type of notifier to use (e.g. SMTPNotifier). */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateNotifierConfigFormGroup() {
		return new FormGroup<NotifierConfigFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** NotifierMetadata contains the data which can be used to reference or describe this notifier. */
	export interface NotifierMetadata {

		/** The human-readable and user-given name for the notifier. For example: "repo-merge-email-notifier". */
		name?: string | null;

		/** The string representing the name and version of notifier to deploy. Expected to be of the form of "/:". For example: "gcr.io/my-project/notifiers/smtp:1.2.34". */
		notifier?: string | null;
	}

	/** NotifierMetadata contains the data which can be used to reference or describe this notifier. */
	export interface NotifierMetadataFormProperties {

		/** The human-readable and user-given name for the notifier. For example: "repo-merge-email-notifier". */
		name: FormControl<string | null | undefined>,

		/** The string representing the name and version of notifier to deploy. Expected to be of the form of "/:". For example: "gcr.io/my-project/notifiers/smtp:1.2.34". */
		notifier: FormControl<string | null | undefined>,
	}
	export function CreateNotifierMetadataFormGroup() {
		return new FormGroup<NotifierMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			notifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** NotifierSpec is the configuration container for notifications. */
	export interface NotifierSpec {

		/** Notification is the container which holds the data that is relevant to this particular notification. */
		notification?: Notification;

		/** Configurations for secret resources used by this particular notifier. */
		secrets?: Array<NotifierSecret>;
	}

	/** NotifierSpec is the configuration container for notifications. */
	export interface NotifierSpecFormProperties {
	}
	export function CreateNotifierSpecFormGroup() {
		return new FormGroup<NotifierSpecFormProperties>({
		});

	}


	/** NotifierSecret is the container that maps a secret name (reference) to its Google Cloud Secret Manager resource path. */
	export interface NotifierSecret {

		/** Name is the local name of the secret, such as the verbatim string "my-smtp-password". */
		name?: string | null;

		/** Value is interpreted to be a resource path for fetching the actual (versioned) secret data for this secret. For example, this would be a Google Cloud Secret Manager secret version resource path like: "projects/my-project/secrets/my-secret/versions/latest". */
		value?: string | null;
	}

	/** NotifierSecret is the container that maps a secret name (reference) to its Google Cloud Secret Manager resource path. */
	export interface NotifierSecretFormProperties {

		/** Name is the local name of the secret, such as the verbatim string "my-smtp-password". */
		name: FormControl<string | null | undefined>,

		/** Value is interpreted to be a resource path for fetching the actual (versioned) secret data for this secret. For example, this would be a Google Cloud Secret Manager secret version resource path like: "projects/my-project/secrets/my-secret/versions/latest". */
		value: FormControl<string | null | undefined>,
	}
	export function CreateNotifierSecretFormGroup() {
		return new FormGroup<NotifierSecretFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
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


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested?: boolean | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusDetail?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested: FormControl<boolean | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusDetail: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for `ProcessAppManifestCallback` operation. */
	export interface ProcessAppManifestCallbackOperationMetadata {

		/** Time the operation was completed. */
		completeTime?: string | null;

		/** Time the operation was created. */
		createTime?: string | null;

		/** The resource name of the GitHubEnterprise to be created. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`. */
		githubEnterpriseConfig?: string | null;
	}

	/** Metadata for `ProcessAppManifestCallback` operation. */
	export interface ProcessAppManifestCallbackOperationMetadataFormProperties {

		/** Time the operation was completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The resource name of the GitHubEnterprise to be created. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`. */
		githubEnterpriseConfig: FormControl<string | null | undefined>,
	}
	export function CreateProcessAppManifestCallbackOperationMetadataFormGroup() {
		return new FormGroup<ProcessAppManifestCallbackOperationMetadataFormProperties>({
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			githubEnterpriseConfig: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the custom metadata of the RunWorkflow long-running operation. */
	export interface RunWorkflowCustomOperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. ID of the pipeline run created by RunWorkflow. */
		pipelineRunId?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the custom metadata of the RunWorkflow long-running operation. */
	export interface RunWorkflowCustomOperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. ID of the pipeline run created by RunWorkflow. */
		pipelineRunId: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateRunWorkflowCustomOperationMetadataFormGroup() {
		return new FormGroup<RunWorkflowCustomOperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			pipelineRunId: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for `UpdateBitbucketServerConfig` operation. */
	export interface UpdateBitbucketServerConfigOperationMetadata {

		/** The resource name of the BitbucketServerConfig to be updated. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{id}`. */
		bitbucketServerConfig?: string | null;

		/** Time the operation was completed. */
		completeTime?: string | null;

		/** Time the operation was created. */
		createTime?: string | null;
	}

	/** Metadata for `UpdateBitbucketServerConfig` operation. */
	export interface UpdateBitbucketServerConfigOperationMetadataFormProperties {

		/** The resource name of the BitbucketServerConfig to be updated. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{id}`. */
		bitbucketServerConfig: FormControl<string | null | undefined>,

		/** Time the operation was completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Time the operation was created. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBitbucketServerConfigOperationMetadataFormGroup() {
		return new FormGroup<UpdateBitbucketServerConfigOperationMetadataFormProperties>({
			bitbucketServerConfig: new FormControl<string | null | undefined>(undefined),
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for `UpdateGitHubEnterpriseConfig` operation. */
	export interface UpdateGitHubEnterpriseConfigOperationMetadata {

		/** Time the operation was completed. */
		completeTime?: string | null;

		/** Time the operation was created. */
		createTime?: string | null;

		/** The resource name of the GitHubEnterprise to be updated. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`. */
		githubEnterpriseConfig?: string | null;
	}

	/** Metadata for `UpdateGitHubEnterpriseConfig` operation. */
	export interface UpdateGitHubEnterpriseConfigOperationMetadataFormProperties {

		/** Time the operation was completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The resource name of the GitHubEnterprise to be updated. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`. */
		githubEnterpriseConfig: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGitHubEnterpriseConfigOperationMetadataFormGroup() {
		return new FormGroup<UpdateGitHubEnterpriseConfigOperationMetadataFormProperties>({
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			githubEnterpriseConfig: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for `UpdateGitLabConfig` operation. */
	export interface UpdateGitLabConfigOperationMetadata {

		/** Time the operation was completed. */
		completeTime?: string | null;

		/** Time the operation was created. */
		createTime?: string | null;

		/** The resource name of the GitLabConfig to be created. Format: `projects/{project}/locations/{location}/gitlabConfigs/{id}`. */
		gitlabConfig?: string | null;
	}

	/** Metadata for `UpdateGitLabConfig` operation. */
	export interface UpdateGitLabConfigOperationMetadataFormProperties {

		/** Time the operation was completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The resource name of the GitLabConfig to be created. Format: `projects/{project}/locations/{location}/gitlabConfigs/{id}`. */
		gitlabConfig: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGitLabConfigOperationMetadataFormGroup() {
		return new FormGroup<UpdateGitLabConfigOperationMetadataFormProperties>({
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			gitlabConfig: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for the `UpdateWorkerPool` operation. */
	export interface UpdateWorkerPoolOperationMetadata {

		/** Time the operation was completed. */
		completeTime?: string | null;

		/** Time the operation was created. */
		createTime?: string | null;

		/** The resource name of the `WorkerPool` being updated. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`. */
		workerPool?: string | null;
	}

	/** Metadata for the `UpdateWorkerPool` operation. */
	export interface UpdateWorkerPoolOperationMetadataFormProperties {

		/** Time the operation was completed. */
		completeTime: FormControl<string | null | undefined>,

		/** Time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The resource name of the `WorkerPool` being updated. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`. */
		workerPool: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkerPoolOperationMetadataFormGroup() {
		return new FormGroup<UpdateWorkerPoolOperationMetadataFormProperties>({
			completeTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			workerPool: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a `WorkerPool` by its project ID and WorkerPool name.
		 * Delete v1alpha1/{name}
		 * @param {string} name The field will contain name of the resource requested, for example: "projects/project-1/workerPools/workerpool-name"
		 * @return {Empty} Successful response
		 */
		Cloudbuild_projects_workerPools_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns information about a `WorkerPool`.
		 * Get v1alpha1/{name}
		 * @param {string} name The field will contain name of the resource requested, for example: "projects/project-1/workerPools/workerpool-name"
		 * @return {WorkerPool} Successful response
		 */
		Cloudbuild_projects_workerPools_get(name: string): Observable<WorkerPool> {
			return this.http.get<WorkerPool>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update a `WorkerPool`.
		 * Patch v1alpha1/{name}
		 * @param {string} name The field will contain name of the resource requested, for example: "projects/project-1/workerPools/workerpool-name"
		 * @return {WorkerPool} Successful response
		 */
		Cloudbuild_projects_workerPools_patch(name: string, requestBody: WorkerPool): Observable<WorkerPool> {
			return this.http.patch<WorkerPool>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1alpha1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Cloudbuild_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List project's `WorkerPool`s.
		 * Get v1alpha1/{parent}/workerPools
		 * @param {string} parent ID of the parent project.
		 * @return {ListWorkerPoolsResponse} Successful response
		 */
		Cloudbuild_projects_workerPools_list(parent: string): Observable<ListWorkerPoolsResponse> {
			return this.http.get<ListWorkerPoolsResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workerPools', {});
		}

		/**
		 * Creates a `WorkerPool` to run the builds, and returns the new worker pool.
		 * Post v1alpha1/{parent}/workerPools
		 * @param {string} parent ID of the parent project.
		 * @return {WorkerPool} Successful response
		 */
		Cloudbuild_projects_workerPools_create(parent: string, requestBody: WorkerPool): Observable<WorkerPool> {
			return this.http.post<WorkerPool>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workerPools', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

