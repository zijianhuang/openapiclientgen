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


	/** Request to approve or reject a pending build. */
	export interface ApproveBuildRequest {

		/** ApprovalResult describes the decision and associated metadata of a manual approval of a build. */
		approvalResult?: ApprovalResult;
	}

	/** Request to approve or reject a pending build. */
	export interface ApproveBuildRequestFormProperties {
	}
	export function CreateApproveBuildRequestFormGroup() {
		return new FormGroup<ApproveBuildRequestFormProperties>({
		});

	}


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

		/** The path of an artifact in a Cloud Storage bucket, with the generation number. For example, `gs://mybucket/path/to/output.jar#generation`. */
		location?: string | null;
	}

	/** An artifact that was uploaded during a build. This is a single record in the artifact manifest JSON file. */
	export interface ArtifactResultFormProperties {

		/** The path of an artifact in a Cloud Storage bucket, with the generation number. For example, `gs://mybucket/path/to/output.jar#generation`. */
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

	export enum HashType { NONE = 'NONE', SHA256 = 'SHA256', MD5 = 'MD5', SHA512 = 'SHA512' }


	/** Artifacts produced by a build that should be uploaded upon successful completion of all build steps. */
	export interface Artifacts {

		/** A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE. */
		images?: Array<string>;

		/** A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. Artifacts in the workspace matching specified paths globs will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any artifacts fail to be pushed, the build is marked FAILURE. */
		mavenArtifacts?: Array<MavenArtifact>;

		/** A list of npm packages to be uploaded to Artifact Registry upon successful completion of all build steps. Npm packages in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any packages fail to be pushed, the build is marked FAILURE. */
		npmPackages?: Array<NpmPackage>;

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


	/** Npm package to upload to Artifact Registry upon successful completion of all build steps. */
	export interface NpmPackage {

		/** Path to the package.json. e.g. workspace/path/to/package */
		packagePath?: string | null;

		/** Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY" Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix. */
		repository?: string | null;
	}

	/** Npm package to upload to Artifact Registry upon successful completion of all build steps. */
	export interface NpmPackageFormProperties {

		/** Path to the package.json. e.g. workspace/path/to/package */
		packagePath: FormControl<string | null | undefined>,

		/** Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY" Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix. */
		repository: FormControl<string | null | undefined>,
	}
	export function CreateNpmPackageFormGroup() {
		return new FormGroup<NpmPackageFormProperties>({
			packagePath: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
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


	/** RPC request object accepted by BatchCreateBitbucketServerConnectedRepositories RPC method. */
	export interface BatchCreateBitbucketServerConnectedRepositoriesRequest {

		/** Required. Requests to connect Bitbucket Server repositories. */
		requests?: Array<CreateBitbucketServerConnectedRepositoryRequest>;
	}

	/** RPC request object accepted by BatchCreateBitbucketServerConnectedRepositories RPC method. */
	export interface BatchCreateBitbucketServerConnectedRepositoriesRequestFormProperties {
	}
	export function CreateBatchCreateBitbucketServerConnectedRepositoriesRequestFormGroup() {
		return new FormGroup<BatchCreateBitbucketServerConnectedRepositoriesRequestFormProperties>({
		});

	}


	/** Request to connect a repository from a connected Bitbucket Server host. */
	export interface CreateBitbucketServerConnectedRepositoryRequest {

		/** / BitbucketServerConnectedRepository represents a connected Bitbucket Server / repository. */
		bitbucketServerConnectedRepository?: BitbucketServerConnectedRepository;

		/** Required. The name of the `BitbucketServerConfig` that added connected repository. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}` */
		parent?: string | null;
	}

	/** Request to connect a repository from a connected Bitbucket Server host. */
	export interface CreateBitbucketServerConnectedRepositoryRequestFormProperties {

		/** Required. The name of the `BitbucketServerConfig` that added connected repository. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}` */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateCreateBitbucketServerConnectedRepositoryRequestFormGroup() {
		return new FormGroup<CreateBitbucketServerConnectedRepositoryRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
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


	/** RPC request object accepted by BatchCreateGitLabConnectedRepositories RPC method. */
	export interface BatchCreateGitLabConnectedRepositoriesRequest {

		/** Required. Requests to connect GitLab repositories. */
		requests?: Array<CreateGitLabConnectedRepositoryRequest>;
	}

	/** RPC request object accepted by BatchCreateGitLabConnectedRepositories RPC method. */
	export interface BatchCreateGitLabConnectedRepositoriesRequestFormProperties {
	}
	export function CreateBatchCreateGitLabConnectedRepositoriesRequestFormGroup() {
		return new FormGroup<BatchCreateGitLabConnectedRepositoriesRequestFormProperties>({
		});

	}


	/** Request to connect a repository from a connected GitLab host. */
	export interface CreateGitLabConnectedRepositoryRequest {

		/** GitLabConnectedRepository represents a GitLab connected repository request response. */
		gitlabConnectedRepository?: GitLabConnectedRepository;

		/** Required. The name of the `GitLabConfig` that adds connected repository. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}` */
		parent?: string | null;
	}

	/** Request to connect a repository from a connected GitLab host. */
	export interface CreateGitLabConnectedRepositoryRequestFormProperties {

		/** Required. The name of the `GitLabConfig` that adds connected repository. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}` */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateCreateGitLabConnectedRepositoryRequestFormGroup() {
		return new FormGroup<CreateGitLabConnectedRepositoryRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
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


	/** BitbucketServerConfig represents the configuration for a Bitbucket Server. */
	export interface BitbucketServerConfig {

		/** Required. Immutable. API Key that will be attached to webhook. Once this field has been set, it cannot be changed. If you need to change it, please create another BitbucketServerConfig. */
		apiKey?: string | null;

		/** Output only. Connected Bitbucket Server repositories for this config. */
		connectedRepositories?: Array<BitbucketServerRepositoryId>;

		/** Time when the config was created. */
		createTime?: string | null;

		/** Required. Immutable. The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed. If you need to change it, please create another BitbucketServerConfig. */
		hostUri?: string | null;

		/** The resource name for the config. */
		name?: string | null;

		/** Optional. The network to be used when reaching out to the Bitbucket Server instance. The VPC network must be enabled for private service connection. This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty, no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format `projects/{project}/global/networks/{network}`, where {project} is a project number or id and {network} is the name of a VPC network in the project. */
		peeredNetwork?: string | null;

		/** Immutable. IP range within the peered network. This is specified in CIDR notation with a slash and the subnet prefix size. You can optionally specify an IP address before the subnet prefix value. e.g. `192.168.0.0/29` would specify an IP range starting at 192.168.0.0 with a 29 bit prefix size. `/16` would specify a prefix size of 16 bits, with an automatically determined IP within the peered VPC. If unspecified, a value of `/24` will be used. The field only has an effect if peered_network is set. */
		peeredNetworkIpRange?: string | null;

		/** BitbucketServerSecrets represents the secrets in Secret Manager for a Bitbucket Server. */
		secrets?: BitbucketServerSecrets;

		/** Optional. SSL certificate to use for requests to Bitbucket Server. The format should be PEM format but the extension can be one of .pem, .cer, or .crt. */
		sslCa?: string | null;

		/** Username of the account Cloud Build will use on Bitbucket Server. */
		username?: string | null;

		/** Output only. UUID included in webhook requests. The UUID is used to look up the corresponding config. */
		webhookKey?: string | null;
	}

	/** BitbucketServerConfig represents the configuration for a Bitbucket Server. */
	export interface BitbucketServerConfigFormProperties {

		/** Required. Immutable. API Key that will be attached to webhook. Once this field has been set, it cannot be changed. If you need to change it, please create another BitbucketServerConfig. */
		apiKey: FormControl<string | null | undefined>,

		/** Time when the config was created. */
		createTime: FormControl<string | null | undefined>,

		/** Required. Immutable. The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed. If you need to change it, please create another BitbucketServerConfig. */
		hostUri: FormControl<string | null | undefined>,

		/** The resource name for the config. */
		name: FormControl<string | null | undefined>,

		/** Optional. The network to be used when reaching out to the Bitbucket Server instance. The VPC network must be enabled for private service connection. This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty, no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format `projects/{project}/global/networks/{network}`, where {project} is a project number or id and {network} is the name of a VPC network in the project. */
		peeredNetwork: FormControl<string | null | undefined>,

		/** Immutable. IP range within the peered network. This is specified in CIDR notation with a slash and the subnet prefix size. You can optionally specify an IP address before the subnet prefix value. e.g. `192.168.0.0/29` would specify an IP range starting at 192.168.0.0 with a 29 bit prefix size. `/16` would specify a prefix size of 16 bits, with an automatically determined IP within the peered VPC. If unspecified, a value of `/24` will be used. The field only has an effect if peered_network is set. */
		peeredNetworkIpRange: FormControl<string | null | undefined>,

		/** Optional. SSL certificate to use for requests to Bitbucket Server. The format should be PEM format but the extension can be one of .pem, .cer, or .crt. */
		sslCa: FormControl<string | null | undefined>,

		/** Username of the account Cloud Build will use on Bitbucket Server. */
		username: FormControl<string | null | undefined>,

		/** Output only. UUID included in webhook requests. The UUID is used to look up the corresponding config. */
		webhookKey: FormControl<string | null | undefined>,
	}
	export function CreateBitbucketServerConfigFormGroup() {
		return new FormGroup<BitbucketServerConfigFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			hostUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			peeredNetwork: new FormControl<string | null | undefined>(undefined),
			peeredNetworkIpRange: new FormControl<string | null | undefined>(undefined),
			sslCa: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			webhookKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BitbucketServerSecrets represents the secrets in Secret Manager for a Bitbucket Server. */
	export interface BitbucketServerSecrets {

		/** Required. The resource name for the admin access token's secret version. */
		adminAccessTokenVersionName?: string | null;

		/** Required. The resource name for the read access token's secret version. */
		readAccessTokenVersionName?: string | null;

		/** Required. Immutable. The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed. If you need to change it, please create another BitbucketServerConfig. */
		webhookSecretVersionName?: string | null;
	}

	/** BitbucketServerSecrets represents the secrets in Secret Manager for a Bitbucket Server. */
	export interface BitbucketServerSecretsFormProperties {

		/** Required. The resource name for the admin access token's secret version. */
		adminAccessTokenVersionName: FormControl<string | null | undefined>,

		/** Required. The resource name for the read access token's secret version. */
		readAccessTokenVersionName: FormControl<string | null | undefined>,

		/** Required. Immutable. The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed. If you need to change it, please create another BitbucketServerConfig. */
		webhookSecretVersionName: FormControl<string | null | undefined>,
	}
	export function CreateBitbucketServerSecretsFormGroup() {
		return new FormGroup<BitbucketServerSecretsFormProperties>({
			adminAccessTokenVersionName: new FormControl<string | null | undefined>(undefined),
			readAccessTokenVersionName: new FormControl<string | null | undefined>(undefined),
			webhookSecretVersionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BitbucketServerRepository represents a repository hosted on a Bitbucket Server. */
	export interface BitbucketServerRepository {

		/** Link to the browse repo page on the Bitbucket Server instance. */
		browseUri?: string | null;

		/** Description of the repository. */
		description?: string | null;

		/** Display name of the repository. */
		displayName?: string | null;

		/** The resource name of the repository. */
		name?: string | null;

		/** BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server. */
		repoId?: BitbucketServerRepositoryId;
	}

	/** BitbucketServerRepository represents a repository hosted on a Bitbucket Server. */
	export interface BitbucketServerRepositoryFormProperties {

		/** Link to the browse repo page on the Bitbucket Server instance. */
		browseUri: FormControl<string | null | undefined>,

		/** Description of the repository. */
		description: FormControl<string | null | undefined>,

		/** Display name of the repository. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the repository. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBitbucketServerRepositoryFormGroup() {
		return new FormGroup<BitbucketServerRepositoryFormProperties>({
			browseUri: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received. */
	export interface BitbucketServerTriggerConfig {

		/** BitbucketServerConfig represents the configuration for a Bitbucket Server. */
		bitbucketServerConfig?: BitbucketServerConfig;

		/** Required. The Bitbucket server config resource that this trigger config maps to. */
		bitbucketServerConfigResource?: string | null;

		/** Required. Key of the project that the repo is in. For example: The key for https://mybitbucket.server/projects/TEST/repos/test-repo is "TEST". */
		projectKey?: string | null;

		/** PullRequestFilter contains filter properties for matching GitHub Pull Requests. */
		pullRequest?: PullRequestFilter;

		/** Push contains filter properties for matching GitHub git pushes. */
		push?: PushFilter;

		/** Required. Slug of the repository. A repository slug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL. For example, if the repository name is 'test repo', in the URL it would become 'test-repo' as in https://mybitbucket.server/projects/TEST/repos/test-repo. */
		repoSlug?: string | null;
	}

	/** BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received. */
	export interface BitbucketServerTriggerConfigFormProperties {

		/** Required. The Bitbucket server config resource that this trigger config maps to. */
		bitbucketServerConfigResource: FormControl<string | null | undefined>,

		/** Required. Key of the project that the repo is in. For example: The key for https://mybitbucket.server/projects/TEST/repos/test-repo is "TEST". */
		projectKey: FormControl<string | null | undefined>,

		/** Required. Slug of the repository. A repository slug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL. For example, if the repository name is 'test repo', in the URL it would become 'test-repo' as in https://mybitbucket.server/projects/TEST/repos/test-repo. */
		repoSlug: FormControl<string | null | undefined>,
	}
	export function CreateBitbucketServerTriggerConfigFormGroup() {
		return new FormGroup<BitbucketServerTriggerConfigFormProperties>({
			bitbucketServerConfigResource: new FormControl<string | null | undefined>(undefined),
			projectKey: new FormControl<string | null | undefined>(undefined),
			repoSlug: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PullRequestFilter contains filter properties for matching GitHub Pull Requests. */
	export interface PullRequestFilter {

		/** Regex of branches to match. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		branch?: string | null;

		/** Configure builds to run whether a repository owner or collaborator need to comment `/gcbrun`. */
		commentControl?: PullRequestFilterCommentControl | null;

		/** If true, branches that do NOT match the git_ref will trigger a build. */
		invertRegex?: boolean | null;
	}

	/** PullRequestFilter contains filter properties for matching GitHub Pull Requests. */
	export interface PullRequestFilterFormProperties {

		/** Regex of branches to match. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		branch: FormControl<string | null | undefined>,

		/** Configure builds to run whether a repository owner or collaborator need to comment `/gcbrun`. */
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

	export enum PullRequestFilterCommentControl { COMMENTS_DISABLED = 'COMMENTS_DISABLED', COMMENTS_ENABLED = 'COMMENTS_ENABLED', COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY = 'COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY' }


	/** Push contains filter properties for matching GitHub git pushes. */
	export interface PushFilter {

		/** Regexes matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		branch?: string | null;

		/** When true, only trigger a build if the revision regex does NOT match the git_ref regex. */
		invertRegex?: boolean | null;

		/** Regexes matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		tag?: string | null;
	}

	/** Push contains filter properties for matching GitHub git pushes. */
	export interface PushFilterFormProperties {

		/** Regexes matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		branch: FormControl<string | null | undefined>,

		/** When true, only trigger a build if the revision regex does NOT match the git_ref regex. */
		invertRegex: FormControl<boolean | null | undefined>,

		/** Regexes matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		tag: FormControl<string | null | undefined>,
	}
	export function CreatePushFilterFormGroup() {
		return new FormGroup<PushFilterFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined),
			invertRegex: new FormControl<boolean | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
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

		/** Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`. */
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

		/** Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is 60 minutes. */
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

		/** Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`. */
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

		/** Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is 60 minutes. */
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

		/** Option to include built-in and custom substitutions as env variables for all build steps. */
		automapSubstitutions?: boolean | null;

		/** Optional. Option to specify how default logs buckets are setup. */
		defaultLogsBucketBehavior?: BuildOptionsDefaultLogsBucketBehavior | null;

		/** Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 2000GB; builds that request more than the maximum are rejected with an error. */
		diskSizeGb?: string | null;

		/** Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file. */
		dynamicSubstitutions?: boolean | null;

		/** A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
		env?: Array<string>;

		/** Option to define build log streaming behavior to Cloud Storage. */
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

		/** Option to include built-in and custom substitutions as env variables for all build steps. */
		automapSubstitutions: FormControl<boolean | null | undefined>,

		/** Optional. Option to specify how default logs buckets are setup. */
		defaultLogsBucketBehavior: FormControl<BuildOptionsDefaultLogsBucketBehavior | null | undefined>,

		/** Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 2000GB; builds that request more than the maximum are rejected with an error. */
		diskSizeGb: FormControl<string | null | undefined>,

		/** Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file. */
		dynamicSubstitutions: FormControl<boolean | null | undefined>,

		/** Option to define build log streaming behavior to Cloud Storage. */
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
			automapSubstitutions: new FormControl<boolean | null | undefined>(undefined),
			defaultLogsBucketBehavior: new FormControl<BuildOptionsDefaultLogsBucketBehavior | null | undefined>(undefined),
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

	export enum BuildOptionsDefaultLogsBucketBehavior { DEFAULT_LOGS_BUCKET_BEHAVIOR_UNSPECIFIED = 'DEFAULT_LOGS_BUCKET_BEHAVIOR_UNSPECIFIED', REGIONAL_USER_OWNED_BUCKET = 'REGIONAL_USER_OWNED_BUCKET' }

	export enum BuildOptionsLogStreamingOption { STREAM_DEFAULT = 'STREAM_DEFAULT', STREAM_ON = 'STREAM_ON', STREAM_OFF = 'STREAM_OFF' }

	export enum BuildOptionsLogging { LOGGING_UNSPECIFIED = 'LOGGING_UNSPECIFIED', LEGACY = 'LEGACY', GCS_ONLY = 'GCS_ONLY', STACKDRIVER_ONLY = 'STACKDRIVER_ONLY', CLOUD_LOGGING_ONLY = 'CLOUD_LOGGING_ONLY', NONE = 'NONE' }

	export enum BuildOptionsMachineType { UNSPECIFIED = 'UNSPECIFIED', N1_HIGHCPU_8 = 'N1_HIGHCPU_8', N1_HIGHCPU_32 = 'N1_HIGHCPU_32', E2_HIGHCPU_8 = 'E2_HIGHCPU_8', E2_HIGHCPU_32 = 'E2_HIGHCPU_32', E2_MEDIUM = 'E2_MEDIUM' }


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

		/** List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 50KB of data is stored. */
		buildStepOutputs?: Array<string>;

		/** Container images that were built as a part of the build. */
		images?: Array<BuiltImage>;

		/** Maven artifacts uploaded to Artifact Registry at the end of the build. */
		mavenArtifacts?: Array<UploadedMavenArtifact>;

		/** Npm packages uploaded to Artifact Registry at the end of the build. */
		npmPackages?: Array<UploadedNpmPackage>;

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


	/** An npm package uploaded to Artifact Registry using the NpmPackage directive. */
	export interface UploadedNpmPackage {

		/** Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build. */
		fileHashes?: FileHashes;

		/** Start and end times for a build execution phase. */
		pushTiming?: TimeSpan;

		/** URI of the uploaded npm package. */
		uri?: string | null;
	}

	/** An npm package uploaded to Artifact Registry using the NpmPackage directive. */
	export interface UploadedNpmPackageFormProperties {

		/** URI of the uploaded npm package. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUploadedNpmPackageFormGroup() {
		return new FormGroup<UploadedNpmPackageFormProperties>({
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

		/** Location of the source in a 2nd-gen Google Cloud Build repository resource. */
		connectedRepository?: ConnectedRepository;

		/** Location of the source in any accessible Git repository. */
		gitSource?: GitSource;

		/** Location of the source in a Google Cloud Source Repository. */
		repoSource?: RepoSource;

		/** Location of the source in an archive file in Cloud Storage. */
		storageSource?: StorageSource;

		/** Location of the source manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
		storageSourceManifest?: StorageSourceManifest;
	}

	/** Location of the source in a supported storage service. */
	export interface SourceFormProperties {
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
		});

	}


	/** Location of the source in a 2nd-gen Google Cloud Build repository resource. */
	export interface ConnectedRepository {

		/** Directory, relative to the source root, in which to run the build. */
		dir?: string | null;

		/** Required. Name of the Google Cloud Build repository, formatted as `projects/locations/connections/repositories/*`. */
		repository?: string | null;

		/** The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. */
		revision?: string | null;
	}

	/** Location of the source in a 2nd-gen Google Cloud Build repository resource. */
	export interface ConnectedRepositoryFormProperties {

		/** Directory, relative to the source root, in which to run the build. */
		dir: FormControl<string | null | undefined>,

		/** Required. Name of the Google Cloud Build repository, formatted as `projects/locations/connections/repositories/*`. */
		repository: FormControl<string | null | undefined>,

		/** The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. */
		revision: FormControl<string | null | undefined>,
	}
	export function CreateConnectedRepositoryFormGroup() {
		return new FormGroup<ConnectedRepositoryFormProperties>({
			dir: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location of the source in any accessible Git repository. */
	export interface GitSource {

		/** Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
		dir?: string | null;

		/** The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. Cloud Build uses `git fetch` to fetch the revision from the Git repository; therefore make sure that the string you provide for `revision` is parsable by the command. For information on string values accepted by `git fetch`, see https://git-scm.com/docs/gitrevisions#_specifying_revisions. For information on `git fetch`, see https://git-scm.com/docs/git-fetch. */
		revision?: string | null;

		/** Location of the Git repo to build. This will be used as a `git remote`, see https://git-scm.com/docs/git-remote. */
		url?: string | null;
	}

	/** Location of the source in any accessible Git repository. */
	export interface GitSourceFormProperties {

		/** Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
		dir: FormControl<string | null | undefined>,

		/** The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. Cloud Build uses `git fetch` to fetch the revision from the Git repository; therefore make sure that the string you provide for `revision` is parsable by the command. For information on string values accepted by `git fetch`, see https://git-scm.com/docs/gitrevisions#_specifying_revisions. For information on `git fetch`, see https://git-scm.com/docs/git-fetch. */
		revision: FormControl<string | null | undefined>,

		/** Location of the Git repo to build. This will be used as a `git remote`, see https://git-scm.com/docs/git-remote. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGitSourceFormGroup() {
		return new FormGroup<GitSourceFormProperties>({
			dir: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
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


	/** Location of the source in an archive file in Cloud Storage. */
	export interface StorageSource {

		/** Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
		bucket?: string | null;

		/** Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
		generation?: string | null;

		/** Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build. */
		object?: string | null;

		/** Optional. Option to specify the tool to fetch the source file for the build. */
		sourceFetcher?: StorageSourceSourceFetcher | null;
	}

	/** Location of the source in an archive file in Cloud Storage. */
	export interface StorageSourceFormProperties {

		/** Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
		bucket: FormControl<string | null | undefined>,

		/** Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
		generation: FormControl<string | null | undefined>,

		/** Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build. */
		object: FormControl<string | null | undefined>,

		/** Optional. Option to specify the tool to fetch the source file for the build. */
		sourceFetcher: FormControl<StorageSourceSourceFetcher | null | undefined>,
	}
	export function CreateStorageSourceFormGroup() {
		return new FormGroup<StorageSourceFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			sourceFetcher: new FormControl<StorageSourceSourceFetcher | null | undefined>(undefined),
		});

	}

	export enum StorageSourceSourceFetcher { SOURCE_FETCHER_UNSPECIFIED = 'SOURCE_FETCHER_UNSPECIFIED', GSUTIL = 'GSUTIL', GCS_FETCHER = 'GCS_FETCHER' }


	/** Location of the source manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
	export interface StorageSourceManifest {

		/** Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
		bucket?: string | null;

		/** Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
		generation?: string | null;

		/** Cloud Storage object containing the source manifest. This object must be a JSON file. */
		object?: string | null;
	}

	/** Location of the source manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
	export interface StorageSourceManifestFormProperties {

		/** Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
		bucket: FormControl<string | null | undefined>,

		/** Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
		generation: FormControl<string | null | undefined>,

		/** Cloud Storage object containing the source manifest. This object must be a JSON file. */
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

		/** Location of the source in a 2nd-gen Google Cloud Build repository resource. */
		resolvedConnectedRepository?: ConnectedRepository;

		/** Location of the source in any accessible Git repository. */
		resolvedGitSource?: GitSource;

		/** Location of the source in a Google Cloud Source Repository. */
		resolvedRepoSource?: RepoSource;

		/** Location of the source in an archive file in Cloud Storage. */
		resolvedStorageSource?: StorageSource;

		/** Location of the source manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
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

		/** Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption. */
		automapSubstitutions?: boolean | null;

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

		/** Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption. */
		automapSubstitutions: FormControl<boolean | null | undefined>,

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
			automapSubstitutions: new FormControl<boolean | null | undefined>(undefined),
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


	/** Configuration for an automated build in response to source repository changes. */
	export interface BuildTrigger {

		/** ApprovalConfig describes configuration for manual approval of a build. */
		approvalConfig?: ApprovalConfig;

		/** Autodetect build configuration. The following precedence is used (case insensitive): 1. cloudbuild.yaml 2. cloudbuild.yml 3. cloudbuild.json 4. Dockerfile Currently only available for GitHub App Triggers. */
		autodetect?: boolean | null;

		/** BitbucketServerTriggerConfig describes the configuration of a trigger that creates a build whenever a Bitbucket Server event is received. */
		bitbucketServerTriggerConfig?: BitbucketServerTriggerConfig;

		/** A build resource in the Cloud Build API. At a high level, a `Build` describes where to find source code, how to build it (for example, the builder image to run on the source), and where to store the built artifacts. Fields can include the following variables, which will be expanded when the build is created: - $PROJECT_ID: the project ID of the build. - $PROJECT_NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD_ID: the autogenerated ID of the build. - $REPO_NAME: the source repository name specified by RepoSource. - $BRANCH_NAME: the branch name specified by RepoSource. - $TAG_NAME: the tag name specified by RepoSource. - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA. */
		build?: Build;

		/** Output only. Time when the trigger was created. */
		createTime?: string | null;

		/** Human-readable description of this trigger. */
		description?: string | null;

		/** If true, the trigger will never automatically execute a build. */
		disabled?: boolean | null;

		/** EventType allows the user to explicitly set the type of event to which this BuildTrigger should respond. This field will be validated against the rest of the configuration if it is set. */
		eventType?: BuildTriggerEventType | null;

		/** Path, from the source root, to the build configuration file (i.e. cloudbuild.yaml). */
		filename?: string | null;

		/** A Common Expression Language string. */
		filter?: string | null;

		/** GitFileSource describes a file within a (possibly remote) code repository. */
		gitFileSource?: GitFileSource;

		/** GitHubEventsConfig describes the configuration of a trigger that creates a build whenever a GitHub event is received. */
		github?: GitHubEventsConfig;

		/** GitLabEventsConfig describes the configuration of a trigger that creates a build whenever a GitLab event is received. */
		gitlabEnterpriseEventsConfig?: GitLabEventsConfig;

		/** Output only. Unique identifier of the trigger. */
		id?: string | null;

		/** ignored_files and included_files are file glob matches using https://golang.org/pkg/path/filepath/#Match extended with support for "**". If ignored_files and changed files are both empty, then they are not used to determine whether or not to trigger a build. If ignored_files is not empty, then we ignore any files that match any of the ignored_file globs. If the change has no files that are outside of the ignored_files globs, then we do not trigger a build. */
		ignoredFiles?: Array<string>;

		/** If set to INCLUDE_BUILD_LOGS_WITH_STATUS, log url will be shown on GitHub page when build status is final. Setting this field to INCLUDE_BUILD_LOGS_WITH_STATUS for non GitHub triggers results in INVALID_ARGUMENT error. */
		includeBuildLogs?: BuildTriggerIncludeBuildLogs | null;

		/** If any of the files altered in the commit pass the ignored_files filter and included_files is empty, then as far as this filter is concerned, we should trigger the build. If any of the files altered in the commit pass the ignored_files filter and included_files is not empty, then we make sure that at least one of those files matches a included_files glob. If not, then we do not trigger a build. */
		includedFiles?: Array<string>;

		/** User-assigned name of the trigger. Must be unique within the project. Trigger names must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character. */
		name?: string | null;

		/** PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published. */
		pubsubConfig?: PubsubConfig;

		/** The configuration of a trigger that creates a build whenever an event from Repo API is received. */
		repositoryEventConfig?: RepositoryEventConfig;

		/** The `Trigger` name with format: `projects/{project}/locations/{location}/triggers/{trigger}`, where {trigger} is a unique identifier generated by the service. */
		resourceName?: string | null;

		/** The service account used for all user-controlled operations including UpdateBuildTrigger, RunBuildTrigger, CreateBuild, and CancelBuild. If no service account is set, then the standard Cloud Build service account ([PROJECT_NUM]@system.gserviceaccount.com) will be used instead. Format: `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}` */
		serviceAccount?: string | null;

		/** GitRepoSource describes a repo and ref of a code repository. */
		sourceToBuild?: GitRepoSource;

		/** Substitutions for Build resource. The keys must match the following regular expression: `^_[A-Z0-9_]+$`. */
		substitutions?: {[id: string]: string };

		/** Tags for annotation of a `BuildTrigger` */
		tags?: Array<string>;

		/** Location of the source in a Google Cloud Source Repository. */
		triggerTemplate?: RepoSource;

		/** WebhookConfig describes the configuration of a trigger that creates a build whenever a webhook is sent to a trigger's webhook URL. */
		webhookConfig?: WebhookConfig;
	}

	/** Configuration for an automated build in response to source repository changes. */
	export interface BuildTriggerFormProperties {

		/** Autodetect build configuration. The following precedence is used (case insensitive): 1. cloudbuild.yaml 2. cloudbuild.yml 3. cloudbuild.json 4. Dockerfile Currently only available for GitHub App Triggers. */
		autodetect: FormControl<boolean | null | undefined>,

		/** Output only. Time when the trigger was created. */
		createTime: FormControl<string | null | undefined>,

		/** Human-readable description of this trigger. */
		description: FormControl<string | null | undefined>,

		/** If true, the trigger will never automatically execute a build. */
		disabled: FormControl<boolean | null | undefined>,

		/** EventType allows the user to explicitly set the type of event to which this BuildTrigger should respond. This field will be validated against the rest of the configuration if it is set. */
		eventType: FormControl<BuildTriggerEventType | null | undefined>,

		/** Path, from the source root, to the build configuration file (i.e. cloudbuild.yaml). */
		filename: FormControl<string | null | undefined>,

		/** A Common Expression Language string. */
		filter: FormControl<string | null | undefined>,

		/** Output only. Unique identifier of the trigger. */
		id: FormControl<string | null | undefined>,

		/** If set to INCLUDE_BUILD_LOGS_WITH_STATUS, log url will be shown on GitHub page when build status is final. Setting this field to INCLUDE_BUILD_LOGS_WITH_STATUS for non GitHub triggers results in INVALID_ARGUMENT error. */
		includeBuildLogs: FormControl<BuildTriggerIncludeBuildLogs | null | undefined>,

		/** User-assigned name of the trigger. Must be unique within the project. Trigger names must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character. */
		name: FormControl<string | null | undefined>,

		/** The `Trigger` name with format: `projects/{project}/locations/{location}/triggers/{trigger}`, where {trigger} is a unique identifier generated by the service. */
		resourceName: FormControl<string | null | undefined>,

		/** The service account used for all user-controlled operations including UpdateBuildTrigger, RunBuildTrigger, CreateBuild, and CancelBuild. If no service account is set, then the standard Cloud Build service account ([PROJECT_NUM]@system.gserviceaccount.com) will be used instead. Format: `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}` */
		serviceAccount: FormControl<string | null | undefined>,

		/** Substitutions for Build resource. The keys must match the following regular expression: `^_[A-Z0-9_]+$`. */
		substitutions: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateBuildTriggerFormGroup() {
		return new FormGroup<BuildTriggerFormProperties>({
			autodetect: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			eventType: new FormControl<BuildTriggerEventType | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			includeBuildLogs: new FormControl<BuildTriggerIncludeBuildLogs | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			substitutions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum BuildTriggerEventType { EVENT_TYPE_UNSPECIFIED = 'EVENT_TYPE_UNSPECIFIED', REPO = 'REPO', WEBHOOK = 'WEBHOOK', PUBSUB = 'PUBSUB', MANUAL = 'MANUAL' }


	/** GitFileSource describes a file within a (possibly remote) code repository. */
	export interface GitFileSource {

		/** The full resource name of the bitbucket server config. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{id}`. */
		bitbucketServerConfig?: string | null;

		/** The full resource name of the github enterprise config. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`. `projects/{project}/githubEnterpriseConfigs/{id}`. */
		githubEnterpriseConfig?: string | null;

		/** The path of the file, with the repo root as the root of the path. */
		path?: string | null;

		/** See RepoType above. */
		repoType?: GitFileSourceRepoType | null;

		/** The fully qualified resource name of the Repos API repository. Either URI or repository can be specified. If unspecified, the repo from which the trigger invocation originated is assumed to be the repo from which to read the specified path. */
		repository?: string | null;

		/** The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the filename (optional). This field respects the same syntax/resolution as described here: https://git-scm.com/docs/gitrevisions If unspecified, the revision from which the trigger invocation originated is assumed to be the revision from which to read the specified path. */
		revision?: string | null;

		/** The URI of the repo. Either uri or repository can be specified. If unspecified, the repo from which the trigger invocation originated is assumed to be the repo from which to read the specified path. */
		uri?: string | null;
	}

	/** GitFileSource describes a file within a (possibly remote) code repository. */
	export interface GitFileSourceFormProperties {

		/** The full resource name of the bitbucket server config. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{id}`. */
		bitbucketServerConfig: FormControl<string | null | undefined>,

		/** The full resource name of the github enterprise config. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`. `projects/{project}/githubEnterpriseConfigs/{id}`. */
		githubEnterpriseConfig: FormControl<string | null | undefined>,

		/** The path of the file, with the repo root as the root of the path. */
		path: FormControl<string | null | undefined>,

		/** See RepoType above. */
		repoType: FormControl<GitFileSourceRepoType | null | undefined>,

		/** The fully qualified resource name of the Repos API repository. Either URI or repository can be specified. If unspecified, the repo from which the trigger invocation originated is assumed to be the repo from which to read the specified path. */
		repository: FormControl<string | null | undefined>,

		/** The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the filename (optional). This field respects the same syntax/resolution as described here: https://git-scm.com/docs/gitrevisions If unspecified, the revision from which the trigger invocation originated is assumed to be the revision from which to read the specified path. */
		revision: FormControl<string | null | undefined>,

		/** The URI of the repo. Either uri or repository can be specified. If unspecified, the repo from which the trigger invocation originated is assumed to be the repo from which to read the specified path. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGitFileSourceFormGroup() {
		return new FormGroup<GitFileSourceFormProperties>({
			bitbucketServerConfig: new FormControl<string | null | undefined>(undefined),
			githubEnterpriseConfig: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			repoType: new FormControl<GitFileSourceRepoType | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GitFileSourceRepoType { UNKNOWN = 'UNKNOWN', CLOUD_SOURCE_REPOSITORIES = 'CLOUD_SOURCE_REPOSITORIES', GITHUB = 'GITHUB', BITBUCKET_SERVER = 'BITBUCKET_SERVER', GITLAB = 'GITLAB', BITBUCKET_CLOUD = 'BITBUCKET_CLOUD' }


	/** GitHubEventsConfig describes the configuration of a trigger that creates a build whenever a GitHub event is received. */
	export interface GitHubEventsConfig {

		/** Optional. The resource name of the github enterprise config that should be applied to this installation. For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}" */
		enterpriseConfigResourceName?: string | null;

		/** The installationID that emits the GitHub event. */
		installationId?: string | null;

		/** Name of the repository. For example: The name for https://github.com/googlecloudplatform/cloud-builders is "cloud-builders". */
		name?: string | null;

		/** Owner of the repository. For example: The owner for https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform". */
		owner?: string | null;

		/** PullRequestFilter contains filter properties for matching GitHub Pull Requests. */
		pullRequest?: PullRequestFilter;

		/** Push contains filter properties for matching GitHub git pushes. */
		push?: PushFilter;
	}

	/** GitHubEventsConfig describes the configuration of a trigger that creates a build whenever a GitHub event is received. */
	export interface GitHubEventsConfigFormProperties {

		/** Optional. The resource name of the github enterprise config that should be applied to this installation. For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}" */
		enterpriseConfigResourceName: FormControl<string | null | undefined>,

		/** The installationID that emits the GitHub event. */
		installationId: FormControl<string | null | undefined>,

		/** Name of the repository. For example: The name for https://github.com/googlecloudplatform/cloud-builders is "cloud-builders". */
		name: FormControl<string | null | undefined>,

		/** Owner of the repository. For example: The owner for https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform". */
		owner: FormControl<string | null | undefined>,
	}
	export function CreateGitHubEventsConfigFormGroup() {
		return new FormGroup<GitHubEventsConfigFormProperties>({
			enterpriseConfigResourceName: new FormControl<string | null | undefined>(undefined),
			installationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GitLabEventsConfig describes the configuration of a trigger that creates a build whenever a GitLab event is received. */
	export interface GitLabEventsConfig {

		/** GitLabConfig represents the configuration for a GitLab integration. */
		gitlabConfig?: GitLabConfig;

		/** The GitLab config resource that this trigger config maps to. */
		gitlabConfigResource?: string | null;

		/** Namespace of the GitLab project. */
		projectNamespace?: string | null;

		/** PullRequestFilter contains filter properties for matching GitHub Pull Requests. */
		pullRequest?: PullRequestFilter;

		/** Push contains filter properties for matching GitHub git pushes. */
		push?: PushFilter;
	}

	/** GitLabEventsConfig describes the configuration of a trigger that creates a build whenever a GitLab event is received. */
	export interface GitLabEventsConfigFormProperties {

		/** The GitLab config resource that this trigger config maps to. */
		gitlabConfigResource: FormControl<string | null | undefined>,

		/** Namespace of the GitLab project. */
		projectNamespace: FormControl<string | null | undefined>,
	}
	export function CreateGitLabEventsConfigFormGroup() {
		return new FormGroup<GitLabEventsConfigFormProperties>({
			gitlabConfigResource: new FormControl<string | null | undefined>(undefined),
			projectNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GitLabConfig represents the configuration for a GitLab integration. */
	export interface GitLabConfig {

		/** Connected GitLab.com or GitLabEnterprise repositories for this config. */
		connectedRepositories?: Array<GitLabRepositoryId>;

		/** Output only. Time when the config was created. */
		createTime?: string | null;

		/** GitLabEnterpriseConfig represents the configuration for a GitLabEnterprise integration. */
		enterpriseConfig?: GitLabEnterpriseConfig;

		/** The resource name for the config. */
		name?: string | null;

		/** GitLabSecrets represents the secrets in Secret Manager for a GitLab integration. */
		secrets?: GitLabSecrets;

		/** Username of the GitLab.com or GitLab Enterprise account Cloud Build will use. */
		username?: string | null;

		/** Output only. UUID included in webhook requests. The UUID is used to look up the corresponding config. */
		webhookKey?: string | null;
	}

	/** GitLabConfig represents the configuration for a GitLab integration. */
	export interface GitLabConfigFormProperties {

		/** Output only. Time when the config was created. */
		createTime: FormControl<string | null | undefined>,

		/** The resource name for the config. */
		name: FormControl<string | null | undefined>,

		/** Username of the GitLab.com or GitLab Enterprise account Cloud Build will use. */
		username: FormControl<string | null | undefined>,

		/** Output only. UUID included in webhook requests. The UUID is used to look up the corresponding config. */
		webhookKey: FormControl<string | null | undefined>,
	}
	export function CreateGitLabConfigFormGroup() {
		return new FormGroup<GitLabConfigFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			webhookKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GitLabEnterpriseConfig represents the configuration for a GitLabEnterprise integration. */
	export interface GitLabEnterpriseConfig {

		/** Immutable. The URI of the GitlabEnterprise host. */
		hostUri?: string | null;

		/** ServiceDirectoryConfig represents Service Directory configuration for a SCM host connection. */
		serviceDirectoryConfig?: ServiceDirectoryConfig;

		/** The SSL certificate to use in requests to GitLab Enterprise instances. */
		sslCa?: string | null;
	}

	/** GitLabEnterpriseConfig represents the configuration for a GitLabEnterprise integration. */
	export interface GitLabEnterpriseConfigFormProperties {

		/** Immutable. The URI of the GitlabEnterprise host. */
		hostUri: FormControl<string | null | undefined>,

		/** The SSL certificate to use in requests to GitLab Enterprise instances. */
		sslCa: FormControl<string | null | undefined>,
	}
	export function CreateGitLabEnterpriseConfigFormGroup() {
		return new FormGroup<GitLabEnterpriseConfigFormProperties>({
			hostUri: new FormControl<string | null | undefined>(undefined),
			sslCa: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ServiceDirectoryConfig represents Service Directory configuration for a SCM host connection. */
	export interface ServiceDirectoryConfig {

		/** The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. */
		service?: string | null;
	}

	/** ServiceDirectoryConfig represents Service Directory configuration for a SCM host connection. */
	export interface ServiceDirectoryConfigFormProperties {

		/** The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateServiceDirectoryConfigFormGroup() {
		return new FormGroup<ServiceDirectoryConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GitLabSecrets represents the secrets in Secret Manager for a GitLab integration. */
	export interface GitLabSecrets {

		/** Required. The resource name for the api access token’s secret version */
		apiAccessTokenVersion?: string | null;

		/** Required. Immutable. API Key that will be attached to webhook requests from GitLab to Cloud Build. */
		apiKeyVersion?: string | null;

		/** Required. The resource name for the read access token’s secret version */
		readAccessTokenVersion?: string | null;

		/** Required. Immutable. The resource name for the webhook secret’s secret version. Once this field has been set, it cannot be changed. If you need to change it, please create another GitLabConfig. */
		webhookSecretVersion?: string | null;
	}

	/** GitLabSecrets represents the secrets in Secret Manager for a GitLab integration. */
	export interface GitLabSecretsFormProperties {

		/** Required. The resource name for the api access token’s secret version */
		apiAccessTokenVersion: FormControl<string | null | undefined>,

		/** Required. Immutable. API Key that will be attached to webhook requests from GitLab to Cloud Build. */
		apiKeyVersion: FormControl<string | null | undefined>,

		/** Required. The resource name for the read access token’s secret version */
		readAccessTokenVersion: FormControl<string | null | undefined>,

		/** Required. Immutable. The resource name for the webhook secret’s secret version. Once this field has been set, it cannot be changed. If you need to change it, please create another GitLabConfig. */
		webhookSecretVersion: FormControl<string | null | undefined>,
	}
	export function CreateGitLabSecretsFormGroup() {
		return new FormGroup<GitLabSecretsFormProperties>({
			apiAccessTokenVersion: new FormControl<string | null | undefined>(undefined),
			apiKeyVersion: new FormControl<string | null | undefined>(undefined),
			readAccessTokenVersion: new FormControl<string | null | undefined>(undefined),
			webhookSecretVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuildTriggerIncludeBuildLogs { INCLUDE_BUILD_LOGS_UNSPECIFIED = 'INCLUDE_BUILD_LOGS_UNSPECIFIED', INCLUDE_BUILD_LOGS_WITH_STATUS = 'INCLUDE_BUILD_LOGS_WITH_STATUS' }


	/** PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published. */
	export interface PubsubConfig {

		/** Service account that will make the push request. */
		serviceAccountEmail?: string | null;

		/** Potential issues with the underlying Pub/Sub subscription configuration. Only populated on get requests. */
		state?: PubsubConfigState | null;

		/** Output only. Name of the subscription. Format is `projects/{project}/subscriptions/{subscription}`. */
		subscription?: string | null;

		/** The name of the topic from which this subscription is receiving messages. Format is `projects/{project}/topics/{topic}`. */
		topic?: string | null;
	}

	/** PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published. */
	export interface PubsubConfigFormProperties {

		/** Service account that will make the push request. */
		serviceAccountEmail: FormControl<string | null | undefined>,

		/** Potential issues with the underlying Pub/Sub subscription configuration. Only populated on get requests. */
		state: FormControl<PubsubConfigState | null | undefined>,

		/** Output only. Name of the subscription. Format is `projects/{project}/subscriptions/{subscription}`. */
		subscription: FormControl<string | null | undefined>,

		/** The name of the topic from which this subscription is receiving messages. Format is `projects/{project}/topics/{topic}`. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreatePubsubConfigFormGroup() {
		return new FormGroup<PubsubConfigFormProperties>({
			serviceAccountEmail: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<PubsubConfigState | null | undefined>(undefined),
			subscription: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PubsubConfigState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', OK = 'OK', SUBSCRIPTION_DELETED = 'SUBSCRIPTION_DELETED', TOPIC_DELETED = 'TOPIC_DELETED', SUBSCRIPTION_MISCONFIGURED = 'SUBSCRIPTION_MISCONFIGURED' }


	/** The configuration of a trigger that creates a build whenever an event from Repo API is received. */
	export interface RepositoryEventConfig {

		/** PullRequestFilter contains filter properties for matching GitHub Pull Requests. */
		pullRequest?: PullRequestFilter;

		/** Push contains filter properties for matching GitHub git pushes. */
		push?: PushFilter;

		/** The resource name of the Repo API resource. */
		repository?: string | null;

		/** Output only. The type of the SCM vendor the repository points to. */
		repositoryType?: RepositoryEventConfigRepositoryType | null;
	}

	/** The configuration of a trigger that creates a build whenever an event from Repo API is received. */
	export interface RepositoryEventConfigFormProperties {

		/** The resource name of the Repo API resource. */
		repository: FormControl<string | null | undefined>,

		/** Output only. The type of the SCM vendor the repository points to. */
		repositoryType: FormControl<RepositoryEventConfigRepositoryType | null | undefined>,
	}
	export function CreateRepositoryEventConfigFormGroup() {
		return new FormGroup<RepositoryEventConfigFormProperties>({
			repository: new FormControl<string | null | undefined>(undefined),
			repositoryType: new FormControl<RepositoryEventConfigRepositoryType | null | undefined>(undefined),
		});

	}

	export enum RepositoryEventConfigRepositoryType { REPOSITORY_TYPE_UNSPECIFIED = 'REPOSITORY_TYPE_UNSPECIFIED', GITHUB = 'GITHUB', GITHUB_ENTERPRISE = 'GITHUB_ENTERPRISE', GITLAB_ENTERPRISE = 'GITLAB_ENTERPRISE', BITBUCKET_DATA_CENTER = 'BITBUCKET_DATA_CENTER', BITBUCKET_CLOUD = 'BITBUCKET_CLOUD' }


	/** GitRepoSource describes a repo and ref of a code repository. */
	export interface GitRepoSource {

		/** The full resource name of the bitbucket server config. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{id}`. */
		bitbucketServerConfig?: string | null;

		/** The full resource name of the github enterprise config. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`. `projects/{project}/githubEnterpriseConfigs/{id}`. */
		githubEnterpriseConfig?: string | null;

		/** The branch or tag to use. Must start with "refs/" (required). */
		ref?: string | null;

		/** See RepoType below. */
		repoType?: GitFileSourceRepoType | null;

		/** The connected repository resource name, in the format `projects/locations/connections/repositories/*`. Either `uri` or `repository` can be specified and is required. */
		repository?: string | null;

		/** The URI of the repo (e.g. https://github.com/user/repo.git). Either `uri` or `repository` can be specified and is required. */
		uri?: string | null;
	}

	/** GitRepoSource describes a repo and ref of a code repository. */
	export interface GitRepoSourceFormProperties {

		/** The full resource name of the bitbucket server config. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{id}`. */
		bitbucketServerConfig: FormControl<string | null | undefined>,

		/** The full resource name of the github enterprise config. Format: `projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}`. `projects/{project}/githubEnterpriseConfigs/{id}`. */
		githubEnterpriseConfig: FormControl<string | null | undefined>,

		/** The branch or tag to use. Must start with "refs/" (required). */
		ref: FormControl<string | null | undefined>,

		/** See RepoType below. */
		repoType: FormControl<GitFileSourceRepoType | null | undefined>,

		/** The connected repository resource name, in the format `projects/locations/connections/repositories/*`. Either `uri` or `repository` can be specified and is required. */
		repository: FormControl<string | null | undefined>,

		/** The URI of the repo (e.g. https://github.com/user/repo.git). Either `uri` or `repository` can be specified and is required. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGitRepoSourceFormGroup() {
		return new FormGroup<GitRepoSourceFormProperties>({
			bitbucketServerConfig: new FormControl<string | null | undefined>(undefined),
			githubEnterpriseConfig: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			repoType: new FormControl<GitFileSourceRepoType | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WebhookConfig describes the configuration of a trigger that creates a build whenever a webhook is sent to a trigger's webhook URL. */
	export interface WebhookConfig {

		/** Required. Resource name for the secret required as a URL parameter. */
		secret?: string | null;

		/** Potential issues with the underlying Pub/Sub subscription configuration. Only populated on get requests. */
		state?: WebhookConfigState | null;
	}

	/** WebhookConfig describes the configuration of a trigger that creates a build whenever a webhook is sent to a trigger's webhook URL. */
	export interface WebhookConfigFormProperties {

		/** Required. Resource name for the secret required as a URL parameter. */
		secret: FormControl<string | null | undefined>,

		/** Potential issues with the underlying Pub/Sub subscription configuration. Only populated on get requests. */
		state: FormControl<WebhookConfigState | null | undefined>,
	}
	export function CreateWebhookConfigFormGroup() {
		return new FormGroup<WebhookConfigFormProperties>({
			secret: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<WebhookConfigState | null | undefined>(undefined),
		});

	}

	export enum WebhookConfigState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', OK = 'OK', SECRET_DELETED = 'SECRET_DELETED' }


	/** Request to cancel an ongoing build. */
	export interface CancelBuildRequest {

		/** Required. ID of the build. */
		id?: string | null;

		/** The name of the `Build` to cancel. Format: `projects/{project}/locations/{location}/builds/{build}` */
		name?: string | null;

		/** Required. ID of the project. */
		projectId?: string | null;
	}

	/** Request to cancel an ongoing build. */
	export interface CancelBuildRequestFormProperties {

		/** Required. ID of the build. */
		id: FormControl<string | null | undefined>,

		/** The name of the `Build` to cancel. Format: `projects/{project}/locations/{location}/builds/{build}` */
		name: FormControl<string | null | undefined>,

		/** Required. ID of the project. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateCancelBuildRequestFormGroup() {
		return new FormGroup<CancelBuildRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
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


	/** GitHubEnterpriseConfig represents a configuration for a GitHub Enterprise server. */
	export interface GitHubEnterpriseConfig {

		/** Required. The GitHub app id of the Cloud Build app on the GitHub Enterprise server. */
		appId?: string | null;

		/** Output only. Time when the installation was associated with the project. */
		createTime?: string | null;

		/** Name to display for this config. */
		displayName?: string | null;

		/** The URL of the github enterprise host the configuration is for. */
		hostUrl?: string | null;

		/** Optional. The full resource name for the GitHubEnterpriseConfig For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}" */
		name?: string | null;

		/** Optional. The network to be used when reaching out to the GitHub Enterprise server. The VPC network must be enabled for private service connection. This should be set if the GitHub Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, no network peering will occur and calls to the GitHub Enterprise server will be made over the public internet. Must be in the format `projects/{project}/global/networks/{network}`, where {project} is a project number or id and {network} is the name of a VPC network in the project. */
		peeredNetwork?: string | null;

		/** GitHubEnterpriseSecrets represents the names of all necessary secrets in Secret Manager for a GitHub Enterprise server. Format is: projects//secrets/. */
		secrets?: GitHubEnterpriseSecrets;

		/** Optional. SSL certificate to use for requests to GitHub Enterprise. */
		sslCa?: string | null;

		/** The key that should be attached to webhook calls to the ReceiveWebhook endpoint. */
		webhookKey?: string | null;
	}

	/** GitHubEnterpriseConfig represents a configuration for a GitHub Enterprise server. */
	export interface GitHubEnterpriseConfigFormProperties {

		/** Required. The GitHub app id of the Cloud Build app on the GitHub Enterprise server. */
		appId: FormControl<string | null | undefined>,

		/** Output only. Time when the installation was associated with the project. */
		createTime: FormControl<string | null | undefined>,

		/** Name to display for this config. */
		displayName: FormControl<string | null | undefined>,

		/** The URL of the github enterprise host the configuration is for. */
		hostUrl: FormControl<string | null | undefined>,

		/** Optional. The full resource name for the GitHubEnterpriseConfig For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}" */
		name: FormControl<string | null | undefined>,

		/** Optional. The network to be used when reaching out to the GitHub Enterprise server. The VPC network must be enabled for private service connection. This should be set if the GitHub Enterprise server is hosted on-premises and not reachable by public internet. If this field is left empty, no network peering will occur and calls to the GitHub Enterprise server will be made over the public internet. Must be in the format `projects/{project}/global/networks/{network}`, where {project} is a project number or id and {network} is the name of a VPC network in the project. */
		peeredNetwork: FormControl<string | null | undefined>,

		/** Optional. SSL certificate to use for requests to GitHub Enterprise. */
		sslCa: FormControl<string | null | undefined>,

		/** The key that should be attached to webhook calls to the ReceiveWebhook endpoint. */
		webhookKey: FormControl<string | null | undefined>,
	}
	export function CreateGitHubEnterpriseConfigFormGroup() {
		return new FormGroup<GitHubEnterpriseConfigFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			hostUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			peeredNetwork: new FormControl<string | null | undefined>(undefined),
			sslCa: new FormControl<string | null | undefined>(undefined),
			webhookKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GitHubEnterpriseSecrets represents the names of all necessary secrets in Secret Manager for a GitHub Enterprise server. Format is: projects//secrets/. */
	export interface GitHubEnterpriseSecrets {

		/** The resource name for the OAuth client ID secret in Secret Manager. */
		oauthClientIdName?: string | null;

		/** The resource name for the OAuth client ID secret version in Secret Manager. */
		oauthClientIdVersionName?: string | null;

		/** The resource name for the OAuth secret in Secret Manager. */
		oauthSecretName?: string | null;

		/** The resource name for the OAuth secret secret version in Secret Manager. */
		oauthSecretVersionName?: string | null;

		/** The resource name for the private key secret. */
		privateKeyName?: string | null;

		/** The resource name for the private key secret version. */
		privateKeyVersionName?: string | null;

		/** The resource name for the webhook secret in Secret Manager. */
		webhookSecretName?: string | null;

		/** The resource name for the webhook secret secret version in Secret Manager. */
		webhookSecretVersionName?: string | null;
	}

	/** GitHubEnterpriseSecrets represents the names of all necessary secrets in Secret Manager for a GitHub Enterprise server. Format is: projects//secrets/. */
	export interface GitHubEnterpriseSecretsFormProperties {

		/** The resource name for the OAuth client ID secret in Secret Manager. */
		oauthClientIdName: FormControl<string | null | undefined>,

		/** The resource name for the OAuth client ID secret version in Secret Manager. */
		oauthClientIdVersionName: FormControl<string | null | undefined>,

		/** The resource name for the OAuth secret in Secret Manager. */
		oauthSecretName: FormControl<string | null | undefined>,

		/** The resource name for the OAuth secret secret version in Secret Manager. */
		oauthSecretVersionName: FormControl<string | null | undefined>,

		/** The resource name for the private key secret. */
		privateKeyName: FormControl<string | null | undefined>,

		/** The resource name for the private key secret version. */
		privateKeyVersionName: FormControl<string | null | undefined>,

		/** The resource name for the webhook secret in Secret Manager. */
		webhookSecretName: FormControl<string | null | undefined>,

		/** The resource name for the webhook secret secret version in Secret Manager. */
		webhookSecretVersionName: FormControl<string | null | undefined>,
	}
	export function CreateGitHubEnterpriseSecretsFormGroup() {
		return new FormGroup<GitHubEnterpriseSecretsFormProperties>({
			oauthClientIdName: new FormControl<string | null | undefined>(undefined),
			oauthClientIdVersionName: new FormControl<string | null | undefined>(undefined),
			oauthSecretName: new FormControl<string | null | undefined>(undefined),
			oauthSecretVersionName: new FormControl<string | null | undefined>(undefined),
			privateKeyName: new FormControl<string | null | undefined>(undefined),
			privateKeyVersionName: new FormControl<string | null | undefined>(undefined),
			webhookSecretName: new FormControl<string | null | undefined>(undefined),
			webhookSecretVersionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Proto Representing a GitLabRepository */
	export interface GitLabRepository {

		/** Link to the browse repo page on the GitLab instance */
		browseUri?: string | null;

		/** Description of the repository */
		description?: string | null;

		/** Display name of the repository */
		displayName?: string | null;

		/** The resource name of the repository */
		name?: string | null;

		/** GitLabRepositoryId identifies a specific repository hosted on GitLab.com or GitLabEnterprise */
		repositoryId?: GitLabRepositoryId;
	}

	/** Proto Representing a GitLabRepository */
	export interface GitLabRepositoryFormProperties {

		/** Link to the browse repo page on the GitLab instance */
		browseUri: FormControl<string | null | undefined>,

		/** Description of the repository */
		description: FormControl<string | null | undefined>,

		/** Display name of the repository */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the repository */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGitLabRepositoryFormGroup() {
		return new FormGroup<GitLabRepositoryFormProperties>({
			browseUri: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface HttpBody {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType?: string | null;

		/** The HTTP request/response body as raw binary. */
		data?: string | null;

		/** Application specific response metadata. Must be set in the first response for streaming APIs. */
		extensions?: Array<string>;
	}

	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface HttpBodyFormProperties {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType: FormControl<string | null | undefined>,

		/** The HTTP request/response body as raw binary. */
		data: FormControl<string | null | undefined>,
	}
	export function CreateHttpBodyFormGroup() {
		return new FormGroup<HttpBodyFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RPC response object returned by ListBitbucketServerConfigs RPC method. */
	export interface ListBitbucketServerConfigsResponse {

		/** A list of BitbucketServerConfigs */
		bitbucketServerConfigs?: Array<BitbucketServerConfig>;

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** RPC response object returned by ListBitbucketServerConfigs RPC method. */
	export interface ListBitbucketServerConfigsResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBitbucketServerConfigsResponseFormGroup() {
		return new FormGroup<ListBitbucketServerConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RPC response object returned by the ListBitbucketServerRepositories RPC method. */
	export interface ListBitbucketServerRepositoriesResponse {

		/** List of Bitbucket Server repositories. */
		bitbucketServerRepositories?: Array<BitbucketServerRepository>;

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** RPC response object returned by the ListBitbucketServerRepositories RPC method. */
	export interface ListBitbucketServerRepositoriesResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBitbucketServerRepositoriesResponseFormGroup() {
		return new FormGroup<ListBitbucketServerRepositoriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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

		/** Token to receive the next page of results. This will be absent if the end of the response list has been reached. */
		nextPageToken?: string | null;
	}

	/** Response including listed builds. */
	export interface ListBuildsResponseFormProperties {

		/** Token to receive the next page of results. This will be absent if the end of the response list has been reached. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuildsResponseFormGroup() {
		return new FormGroup<ListBuildsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RPC response object returned by ListGitLabConfigs RPC method. */
	export interface ListGitLabConfigsResponse {

		/** A list of GitLabConfigs */
		gitlabConfigs?: Array<GitLabConfig>;

		/** A token that can be sent as `page_token` to retrieve the next page If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** RPC response object returned by ListGitLabConfigs RPC method. */
	export interface ListGitLabConfigsResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGitLabConfigsResponseFormGroup() {
		return new FormGroup<ListGitLabConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RPC response object returned by the ListGitLabRepositories RPC method. */
	export interface ListGitLabRepositoriesResponse {

		/** List of GitLab repositories */
		gitlabRepositories?: Array<GitLabRepository>;

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** RPC response object returned by the ListGitLabRepositories RPC method. */
	export interface ListGitLabRepositoriesResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGitLabRepositoriesResponseFormGroup() {
		return new FormGroup<ListGitLabRepositoriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RPC response object returned by ListGithubEnterpriseConfigs RPC method. */
	export interface ListGithubEnterpriseConfigsResponse {

		/** A list of GitHubEnterpriseConfigs */
		configs?: Array<GitHubEnterpriseConfig>;
	}

	/** RPC response object returned by ListGithubEnterpriseConfigs RPC method. */
	export interface ListGithubEnterpriseConfigsResponseFormProperties {
	}
	export function CreateListGithubEnterpriseConfigsResponseFormGroup() {
		return new FormGroup<ListGithubEnterpriseConfigsResponseFormProperties>({
		});

	}


	/** Response containing existing `WorkerPools`. */
	export interface ListWorkerPoolsResponse {

		/** Continuation token used to page through large result sets. Provide this value in a subsequent ListWorkerPoolsRequest to return the next page of results. */
		nextPageToken?: string | null;

		/** `WorkerPools` for the specified project. */
		workerPools?: Array<WorkerPool>;
	}

	/** Response containing existing `WorkerPools`. */
	export interface ListWorkerPoolsResponseFormProperties {

		/** Continuation token used to page through large result sets. Provide this value in a subsequent ListWorkerPoolsRequest to return the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkerPoolsResponseFormGroup() {
		return new FormGroup<ListWorkerPoolsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for a `WorkerPool`. Cloud Build owns and maintains a pool of workers for general use and have no access to a project's private network. By default, builds submitted to Cloud Build will use a worker from this pool. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Private `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of private pools, see [Private pools overview](https://cloud.google.com/build/docs/private-pools/private-pools-overview). */
	export interface WorkerPool {

		/** User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations. */
		annotations?: {[id: string]: string };

		/** Output only. Time at which the request to create the `WorkerPool` was received. */
		createTime?: string | null;

		/** Output only. Time at which the request to delete the `WorkerPool` was received. */
		deleteTime?: string | null;

		/** A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters. */
		displayName?: string | null;

		/** Output only. Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Output only. The resource name of the `WorkerPool`, with format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. The value of `{worker_pool}` is provided by `worker_pool_id` in `CreateWorkerPool` request and the value of `{location}` is determined by the endpoint accessed. */
		name?: string | null;

		/** Configuration for a V1 `PrivatePool`. */
		privatePoolV1Config?: PrivatePoolV1Config;

		/** Output only. `WorkerPool` state. */
		state?: WorkerPoolState | null;

		/** Output only. A unique identifier for the `WorkerPool`. */
		uid?: string | null;

		/** Output only. Time at which the request to update the `WorkerPool` was received. */
		updateTime?: string | null;
	}

	/** Configuration for a `WorkerPool`. Cloud Build owns and maintains a pool of workers for general use and have no access to a project's private network. By default, builds submitted to Cloud Build will use a worker from this pool. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Private `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of private pools, see [Private pools overview](https://cloud.google.com/build/docs/private-pools/private-pools-overview). */
	export interface WorkerPoolFormProperties {

		/** User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size limitations. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Time at which the request to create the `WorkerPool` was received. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Time at which the request to delete the `WorkerPool` was received. */
		deleteTime: FormControl<string | null | undefined>,

		/** A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The resource name of the `WorkerPool`, with format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. The value of `{worker_pool}` is provided by `worker_pool_id` in `CreateWorkerPool` request and the value of `{location}` is determined by the endpoint accessed. */
		name: FormControl<string | null | undefined>,

		/** Output only. `WorkerPool` state. */
		state: FormControl<WorkerPoolState | null | undefined>,

		/** Output only. A unique identifier for the `WorkerPool`. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Time at which the request to update the `WorkerPool` was received. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateWorkerPoolFormGroup() {
		return new FormGroup<WorkerPoolFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<WorkerPoolState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for a V1 `PrivatePool`. */
	export interface PrivatePoolV1Config {

		/** Defines the network configuration for the pool. */
		networkConfig?: NetworkConfig;

		/** Defines the configuration to be used for creating workers in the pool. */
		workerConfig?: WorkerConfig;
	}

	/** Configuration for a V1 `PrivatePool`. */
	export interface PrivatePoolV1ConfigFormProperties {
	}
	export function CreatePrivatePoolV1ConfigFormGroup() {
		return new FormGroup<PrivatePoolV1ConfigFormProperties>({
		});

	}


	/** Defines the network configuration for the pool. */
	export interface NetworkConfig {

		/** Option to configure network egress for the workers. */
		egressOption?: NetworkConfigEgressOption | null;

		/** Required. Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to `WorkerPool.project_id` on the service producer network. Must be in the format `projects/{project}/global/networks/{network}`, where `{project}` is a project number, such as `12345`, and `{network}` is the name of a VPC network in the project. See [Understanding network configuration options](https://cloud.google.com/build/docs/private-pools/set-up-private-pool-environment) */
		peeredNetwork?: string | null;

		/** Immutable. Subnet IP range within the peered network. This is specified in CIDR notation with a slash and the subnet prefix size. You can optionally specify an IP address before the subnet prefix value. e.g. `192.168.0.0/29` would specify an IP range starting at 192.168.0.0 with a prefix size of 29 bits. `/16` would specify a prefix size of 16 bits, with an automatically determined IP within the peered VPC. If unspecified, a value of `/24` will be used. */
		peeredNetworkIpRange?: string | null;
	}

	/** Defines the network configuration for the pool. */
	export interface NetworkConfigFormProperties {

		/** Option to configure network egress for the workers. */
		egressOption: FormControl<NetworkConfigEgressOption | null | undefined>,

		/** Required. Immutable. The network definition that the workers are peered to. If this section is left empty, the workers will be peered to `WorkerPool.project_id` on the service producer network. Must be in the format `projects/{project}/global/networks/{network}`, where `{project}` is a project number, such as `12345`, and `{network}` is the name of a VPC network in the project. See [Understanding network configuration options](https://cloud.google.com/build/docs/private-pools/set-up-private-pool-environment) */
		peeredNetwork: FormControl<string | null | undefined>,

		/** Immutable. Subnet IP range within the peered network. This is specified in CIDR notation with a slash and the subnet prefix size. You can optionally specify an IP address before the subnet prefix value. e.g. `192.168.0.0/29` would specify an IP range starting at 192.168.0.0 with a prefix size of 29 bits. `/16` would specify a prefix size of 16 bits, with an automatically determined IP within the peered VPC. If unspecified, a value of `/24` will be used. */
		peeredNetworkIpRange: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConfigFormGroup() {
		return new FormGroup<NetworkConfigFormProperties>({
			egressOption: new FormControl<NetworkConfigEgressOption | null | undefined>(undefined),
			peeredNetwork: new FormControl<string | null | undefined>(undefined),
			peeredNetworkIpRange: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetworkConfigEgressOption { EGRESS_OPTION_UNSPECIFIED = 'EGRESS_OPTION_UNSPECIFIED', NO_PUBLIC_EGRESS = 'NO_PUBLIC_EGRESS', PUBLIC_EGRESS = 'PUBLIC_EGRESS' }


	/** Defines the configuration to be used for creating workers in the pool. */
	export interface WorkerConfig {

		/** Size of the disk attached to the worker, in GB. See [Worker pool config file](https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema). Specify a value of up to 2000. If `0` is specified, Cloud Build will use a standard disk size. */
		diskSizeGb?: string | null;

		/** Machine type of a worker, such as `e2-medium`. See [Worker pool config file](https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema). If left blank, Cloud Build will use a sensible default. */
		machineType?: string | null;
	}

	/** Defines the configuration to be used for creating workers in the pool. */
	export interface WorkerConfigFormProperties {

		/** Size of the disk attached to the worker, in GB. See [Worker pool config file](https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema). Specify a value of up to 2000. If `0` is specified, Cloud Build will use a standard disk size. */
		diskSizeGb: FormControl<string | null | undefined>,

		/** Machine type of a worker, such as `e2-medium`. See [Worker pool config file](https://cloud.google.com/build/docs/private-pools/worker-pool-config-file-schema). If left blank, Cloud Build will use a sensible default. */
		machineType: FormControl<string | null | undefined>,
	}
	export function CreateWorkerConfigFormGroup() {
		return new FormGroup<WorkerConfigFormProperties>({
			diskSizeGb: new FormControl<string | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WorkerPoolState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', RUNNING = 'RUNNING', DELETING = 'DELETING', DELETED = 'DELETED', UPDATING = 'UPDATING' }


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

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
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

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
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


	/** ReceiveTriggerWebhookResponse [Experimental] is the response object for the ReceiveTriggerWebhook method. */
	export interface ReceiveTriggerWebhookResponse {
	}

	/** ReceiveTriggerWebhookResponse [Experimental] is the response object for the ReceiveTriggerWebhook method. */
	export interface ReceiveTriggerWebhookResponseFormProperties {
	}
	export function CreateReceiveTriggerWebhookResponseFormGroup() {
		return new FormGroup<ReceiveTriggerWebhookResponseFormProperties>({
		});

	}


	/** RPC request object accepted by RemoveBitbucketServerConnectedRepository RPC method. */
	export interface RemoveBitbucketServerConnectedRepositoryRequest {

		/** BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server. */
		connectedRepository?: BitbucketServerRepositoryId;
	}

	/** RPC request object accepted by RemoveBitbucketServerConnectedRepository RPC method. */
	export interface RemoveBitbucketServerConnectedRepositoryRequestFormProperties {
	}
	export function CreateRemoveBitbucketServerConnectedRepositoryRequestFormGroup() {
		return new FormGroup<RemoveBitbucketServerConnectedRepositoryRequestFormProperties>({
		});

	}


	/** RPC request object accepted by RemoveGitLabConnectedRepository RPC method. */
	export interface RemoveGitLabConnectedRepositoryRequest {

		/** GitLabRepositoryId identifies a specific repository hosted on GitLab.com or GitLabEnterprise */
		connectedRepository?: GitLabRepositoryId;
	}

	/** RPC request object accepted by RemoveGitLabConnectedRepository RPC method. */
	export interface RemoveGitLabConnectedRepositoryRequestFormProperties {
	}
	export function CreateRemoveGitLabConnectedRepositoryRequestFormGroup() {
		return new FormGroup<RemoveGitLabConnectedRepositoryRequestFormProperties>({
		});

	}


	/** Specifies a build to retry. */
	export interface RetryBuildRequest {

		/** Required. Build ID of the original build. */
		id?: string | null;

		/** The name of the `Build` to retry. Format: `projects/{project}/locations/{location}/builds/{build}` */
		name?: string | null;

		/** Required. ID of the project. */
		projectId?: string | null;
	}

	/** Specifies a build to retry. */
	export interface RetryBuildRequestFormProperties {

		/** Required. Build ID of the original build. */
		id: FormControl<string | null | undefined>,

		/** The name of the `Build` to retry. Format: `projects/{project}/locations/{location}/builds/{build}` */
		name: FormControl<string | null | undefined>,

		/** Required. ID of the project. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateRetryBuildRequestFormGroup() {
		return new FormGroup<RetryBuildRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a build trigger to run and the source to use. */
	export interface RunBuildTriggerRequest {

		/** Required. ID of the project. */
		projectId?: string | null;

		/** Location of the source in a Google Cloud Source Repository. */
		source?: RepoSource;

		/** Required. ID of the trigger. */
		triggerId?: string | null;
	}

	/** Specifies a build trigger to run and the source to use. */
	export interface RunBuildTriggerRequestFormProperties {

		/** Required. ID of the project. */
		projectId: FormControl<string | null | undefined>,

		/** Required. ID of the trigger. */
		triggerId: FormControl<string | null | undefined>,
	}
	export function CreateRunBuildTriggerRequestFormGroup() {
		return new FormGroup<RunBuildTriggerRequestFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
			triggerId: new FormControl<string | null | undefined>(undefined),
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
		 * ReceiveGitHubDotComWebhook is called when the API receives a github.com webhook.
		 * Post v1/githubDotComWebhook:receive
		 * @param {string} webhookKey For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation.
		 * @return {Empty} Successful response
		 */
		Cloudbuild_githubDotComWebhook_receive(webhookKey: string | null | undefined, requestBody: HttpBody): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/githubDotComWebhook:receive?webhookKey=' + (webhookKey == null ? '' : encodeURIComponent(webhookKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
		 * Get v1/projects/{projectId}/builds
		 * @param {string} projectId Required. ID of the project.
		 * @param {string} filter The raw filter text to constrain the results.
		 * @param {number} pageSize Number of results to return in the list.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The page token for the next page of Builds. If unspecified, the first page of results is returned. If the token is rejected for any reason, INVALID_ARGUMENT will be thrown. In this case, the token should be discarded, and pagination should be restarted from the first page of results. See https://google.aip.dev/158 for more.
		 * @param {string} parent The parent of the collection of `Builds`. Format: `projects/{project}/locations/{location}`
		 * @return {ListBuildsResponse} Successful response
		 */
		Cloudbuild_projects_builds_list(projectId: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined): Observable<ListBuildsResponse> {
			return this.http.get<ListBuildsResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/builds&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
		 * Post v1/projects/{projectId}/builds
		 * @param {string} projectId Required. ID of the project.
		 * @param {string} parent The parent resource where this build will be created. Format: `projects/{project}/locations/{location}`
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_builds_create(projectId: string, parent: string | null | undefined, requestBody: Build): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/builds&parent=' + (parent == null ? '' : encodeURIComponent(parent)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.
		 * Get v1/projects/{projectId}/builds/{id}
		 * @param {string} projectId Required. ID of the project.
		 * @param {string} id Required. ID of the build.
		 * @param {string} name The name of the `Build` to retrieve. Format: `projects/{project}/locations/{location}/builds/{build}`
		 * @return {Build} Successful response
		 */
		Cloudbuild_projects_builds_get(projectId: string, id: string, name: string | null | undefined): Observable<Build> {
			return this.http.get<Build>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/builds/' + (id == null ? '' : encodeURIComponent(id)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Cancels a build in progress.
		 * Post v1/projects/{projectId}/builds/{id}:cancel
		 * @param {string} projectId Required. ID of the project.
		 * @param {string} id Required. ID of the build.
		 * @return {Build} Successful response
		 */
		Cloudbuild_projects_builds_cancel(projectId: string, id: string, requestBody: CancelBuildRequest): Observable<Build> {
			return this.http.post<Build>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/builds/' + (id == null ? '' : encodeURIComponent(id)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
		 * Post v1/projects/{projectId}/builds/{id}:retry
		 * @param {string} projectId Required. ID of the project.
		 * @param {string} id Required. Build ID of the original build.
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_builds_retry(projectId: string, id: string, requestBody: RetryBuildRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/builds/' + (id == null ? '' : encodeURIComponent(id)) + ':retry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists existing `BuildTrigger`s.
		 * Get v1/projects/{projectId}/triggers
		 * @param {string} projectId Required. ID of the project for which to list BuildTriggers.
		 * @param {number} pageSize Number of results to return in the list.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Token to provide to skip to a particular spot in the list.
		 * @param {string} parent The parent of the collection of `Triggers`. Format: `projects/{project}/locations/{location}`
		 * @return {ListBuildTriggersResponse} Successful response
		 */
		Cloudbuild_projects_triggers_list(projectId: string, pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined): Observable<ListBuildTriggersResponse> {
			return this.http.get<ListBuildTriggersResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/triggers&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * Creates a new `BuildTrigger`.
		 * Post v1/projects/{projectId}/triggers
		 * @param {string} projectId Required. ID of the project for which to configure automatic builds.
		 * @param {string} parent The parent resource where this trigger will be created. Format: `projects/{project}/locations/{location}`
		 * @return {BuildTrigger} Successful response
		 */
		Cloudbuild_projects_triggers_create(projectId: string, parent: string | null | undefined, requestBody: BuildTrigger): Observable<BuildTrigger> {
			return this.http.post<BuildTrigger>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/triggers&parent=' + (parent == null ? '' : encodeURIComponent(parent)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a `BuildTrigger` by its project ID and trigger ID.
		 * Delete v1/projects/{projectId}/triggers/{triggerId}
		 * @param {string} projectId Required. ID of the project that owns the trigger.
		 * @param {string} triggerId Required. ID of the `BuildTrigger` to delete.
		 * @param {string} name The name of the `Trigger` to delete. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
		 * @return {Empty} Successful response
		 */
		Cloudbuild_projects_triggers_delete(projectId: string, triggerId: string, name: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/triggers/' + (triggerId == null ? '' : encodeURIComponent(triggerId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns information about a `BuildTrigger`.
		 * Get v1/projects/{projectId}/triggers/{triggerId}
		 * @param {string} projectId Required. ID of the project that owns the trigger.
		 * @param {string} triggerId Required. Identifier (`id` or `name`) of the `BuildTrigger` to get.
		 * @param {string} name The name of the `Trigger` to retrieve. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
		 * @return {BuildTrigger} Successful response
		 */
		Cloudbuild_projects_triggers_get(projectId: string, triggerId: string, name: string | null | undefined): Observable<BuildTrigger> {
			return this.http.get<BuildTrigger>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/triggers/' + (triggerId == null ? '' : encodeURIComponent(triggerId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a `BuildTrigger` by its project ID and trigger ID.
		 * Patch v1/projects/{projectId}/triggers/{triggerId}
		 * @param {string} projectId Required. ID of the project that owns the trigger.
		 * @param {string} triggerId Required. ID of the `BuildTrigger` to update.
		 * @param {string} updateMask Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
		 * @return {BuildTrigger} Successful response
		 */
		Cloudbuild_projects_triggers_patch(projectId: string, triggerId: string, updateMask: string | null | undefined, requestBody: BuildTrigger): Observable<BuildTrigger> {
			return this.http.patch<BuildTrigger>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/triggers/' + (triggerId == null ? '' : encodeURIComponent(triggerId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path (ex. v1/projects/{projectId}/locations/{region}/triggers/{triggerId}:run). The POST request that does not include the location endpoint in the path can only be used when running global triggers.
		 * Post v1/projects/{projectId}/triggers/{triggerId}:run
		 * @param {string} projectId Required. ID of the project.
		 * @param {string} triggerId Required. ID of the trigger.
		 * @param {string} name The name of the `Trigger` to run. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_triggers_run(projectId: string, triggerId: string, name: string | null | undefined, requestBody: RepoSource): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/triggers/' + (triggerId == null ? '' : encodeURIComponent(triggerId)) + ':run&name=' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
		 * Post v1/projects/{projectId}/triggers/{trigger}:webhook
		 * @param {string} projectId Project in which the specified trigger lives
		 * @param {string} trigger Name of the trigger to run the payload against
		 * @param {string} name The name of the `ReceiveTriggerWebhook` to retrieve. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
		 * @param {string} secret Secret token used for authorization if an OAuth token isn't provided.
		 * @return {ReceiveTriggerWebhookResponse} Successful response
		 */
		Cloudbuild_projects_triggers_webhook(projectId: string, trigger: string, name: string | null | undefined, secret: string | null | undefined, requestBody: HttpBody): Observable<ReceiveTriggerWebhookResponse> {
			return this.http.post<ReceiveTriggerWebhookResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/triggers/' + (trigger == null ? '' : encodeURIComponent(trigger)) + ':webhook&name=' + (name == null ? '' : encodeURIComponent(name)) + '&secret=' + (secret == null ? '' : encodeURIComponent(secret)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ReceiveWebhook is called when the API receives a GitHub webhook.
		 * Post v1/webhook
		 * @param {string} webhookKey For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation.
		 * @return {Empty} Successful response
		 */
		Cloudbuild_webhook(webhookKey: string | null | undefined, requestBody: HttpBody): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/webhook?webhookKey=' + (webhookKey == null ? '' : encodeURIComponent(webhookKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove a Bitbucket Server repository from a given BitbucketServerConfig's connected repositories. This API is experimental.
		 * Post v1/{config}:removeBitbucketServerConnectedRepository
		 * @param {string} config Required. The name of the `BitbucketServerConfig` to remove a connected repository. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}`
		 * @return {Empty} Successful response
		 */
		Cloudbuild_projects_locations_bitbucketServerConfigs_removeBitbucketServerConnectedRepository(config: string, requestBody: RemoveBitbucketServerConnectedRepositoryRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (config == null ? '' : encodeURIComponent(config)) + ':removeBitbucketServerConnectedRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove a GitLab repository from a given GitLabConfig's connected repositories. This API is experimental.
		 * Post v1/{config}:removeGitLabConnectedRepository
		 * @param {string} config Required. The name of the `GitLabConfig` to remove a connected repository. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}`
		 * @return {Empty} Successful response
		 */
		Cloudbuild_projects_locations_gitLabConfigs_removeGitLabConnectedRepository(config: string, requestBody: RemoveGitLabConnectedRepositoryRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (config == null ? '' : encodeURIComponent(config)) + ':removeGitLabConnectedRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ReceiveRegionalWebhook is called when the API receives a regional GitHub webhook.
		 * Post v1/{location}/regionalWebhook
		 * @param {string} location Required. The location where the webhook should be sent.
		 * @param {string} webhookKey For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation.
		 * @return {Empty} Successful response
		 */
		Cloudbuild_locations_regionalWebhook(location: string, webhookKey: string | null | undefined, requestBody: HttpBody): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (location == null ? '' : encodeURIComponent(location)) + '/regionalWebhook&webhookKey=' + (webhookKey == null ? '' : encodeURIComponent(webhookKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a `WorkerPool`.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the `WorkerPool` to delete. Format: `projects/{project}/locations/{location}/workerPools/{workerPool}`.
		 * @param {boolean} allowMissing If set to true, and the `WorkerPool` is not found, the request will succeed but no action will be taken on the server.
		 * @param {string} etag Optional. If provided, it must match the server's etag on the workerpool for the request to be processed.
		 * @param {boolean} validateOnly If set, validate the request and preview the response, but do not actually post it.
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_workerPools_delete(name: string, allowMissing: boolean | null | undefined, etag: string | null | undefined, validateOnly: boolean | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)) + '&validateOnly=' + validateOnly, {});
		}

		/**
		 * Returns details of a `WorkerPool`.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the `WorkerPool` to retrieve. Format: `projects/{project}/locations/{location}/workerPools/{workerPool}`.
		 * @param {string} projectId Required. ID of the project that owns the trigger.
		 * @param {string} triggerId Required. Identifier (`id` or `name`) of the `BuildTrigger` to get.
		 * @return {WorkerPool} Successful response
		 */
		Cloudbuild_projects_locations_workerPools_get(name: string, projectId: string | null | undefined, triggerId: string | null | undefined): Observable<WorkerPool> {
			return this.http.get<WorkerPool>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&triggerId=' + (triggerId == null ? '' : encodeURIComponent(triggerId)), {});
		}

		/**
		 * Updates a `WorkerPool`.
		 * Patch v1/{name}
		 * @param {string} name Output only. The resource name of the `WorkerPool`, with format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. The value of `{worker_pool}` is provided by `worker_pool_id` in `CreateWorkerPool` request and the value of `{location}` is determined by the endpoint accessed.
		 * @param {string} updateMask A mask specifying which fields in `worker_pool` to update.
		 * @param {boolean} validateOnly If set, validate the request and preview the response, but do not actually post it.
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_workerPools_patch(name: string, updateMask: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: WorkerPool): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Approves or rejects a pending build. If approved, the returned LRO will be analogous to the LRO returned from a CreateBuild call. If rejected, the returned LRO will be immediately done.
		 * Post v1/{name}:approve
		 * @param {string} name Required. Name of the target build. For example: "projects/{$project_id}/builds/{$build_id}"
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_builds_approve(name: string, requestBody: ApproveBuildRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':approve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Cloudbuild_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
		 * Post v1/{name}:retry
		 * @param {string} name The name of the `Build` to retry. Format: `projects/{project}/locations/{location}/builds/{build}`
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_builds_retry(name: string, requestBody: RetryBuildRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':retry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path (ex. v1/projects/{projectId}/locations/{region}/triggers/{triggerId}:run). The POST request that does not include the location endpoint in the path can only be used when running global triggers.
		 * Post v1/{name}:run
		 * @param {string} name The name of the `Trigger` to run. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_triggers_run(name: string, requestBody: RunBuildTriggerRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
		 * Post v1/{name}:webhook
		 * @param {string} name The name of the `ReceiveTriggerWebhook` to retrieve. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
		 * @param {string} projectId Project in which the specified trigger lives
		 * @param {string} secret Secret token used for authorization if an OAuth token isn't provided.
		 * @param {string} trigger Name of the trigger to run the payload against
		 * @return {ReceiveTriggerWebhookResponse} Successful response
		 */
		Cloudbuild_projects_locations_triggers_webhook(name: string, projectId: string | null | undefined, secret: string | null | undefined, trigger: string | null | undefined, requestBody: HttpBody): Observable<ReceiveTriggerWebhookResponse> {
			return this.http.post<ReceiveTriggerWebhookResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':webhook&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&secret=' + (secret == null ? '' : encodeURIComponent(secret)) + '&trigger=' + (trigger == null ? '' : encodeURIComponent(trigger)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all `BitbucketServerConfigs` for a given project. This API is experimental.
		 * Get v1/{parent}/bitbucketServerConfigs
		 * @param {string} parent Required. Name of the parent resource.
		 * @param {number} pageSize The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 50 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListBitbucketServerConfigsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBitbucketServerConfigsRequest` must match the call that provided the page token.
		 * @return {ListBitbucketServerConfigsResponse} Successful response
		 */
		Cloudbuild_projects_locations_bitbucketServerConfigs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBitbucketServerConfigsResponse> {
			return this.http.get<ListBitbucketServerConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bitbucketServerConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new `BitbucketServerConfig`. This API is experimental.
		 * Post v1/{parent}/bitbucketServerConfigs
		 * @param {string} parent Required. Name of the parent resource.
		 * @param {string} bitbucketServerConfigId Optional. The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name. bitbucket_server_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character.
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_bitbucketServerConfigs_create(parent: string, bitbucketServerConfigId: string | null | undefined, requestBody: BitbucketServerConfig): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bitbucketServerConfigs&bitbucketServerConfigId=' + (bitbucketServerConfigId == null ? '' : encodeURIComponent(bitbucketServerConfigId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
		 * Get v1/{parent}/builds
		 * @param {string} parent The parent of the collection of `Builds`. Format: `projects/{project}/locations/{location}`
		 * @param {string} filter The raw filter text to constrain the results.
		 * @param {number} pageSize Number of results to return in the list.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The page token for the next page of Builds. If unspecified, the first page of results is returned. If the token is rejected for any reason, INVALID_ARGUMENT will be thrown. In this case, the token should be discarded, and pagination should be restarted from the first page of results. See https://google.aip.dev/158 for more.
		 * @param {string} projectId Required. ID of the project.
		 * @return {ListBuildsResponse} Successful response
		 */
		Cloudbuild_projects_locations_builds_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, projectId: string | null | undefined): Observable<ListBuildsResponse> {
			return this.http.get<ListBuildsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/builds&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), {});
		}

		/**
		 * Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
		 * Post v1/{parent}/builds
		 * @param {string} parent The parent resource where this build will be created. Format: `projects/{project}/locations/{location}`
		 * @param {string} projectId Required. ID of the project.
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_builds_create(parent: string, projectId: string | null | undefined, requestBody: Build): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/builds&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batch connecting GitLab repositories to Cloud Build. This API is experimental.
		 * Post v1/{parent}/connectedRepositories:batchCreate
		 * @param {string} parent The name of the `GitLabConfig` that adds connected repositories. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}`
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_gitLabConfigs_connectedRepositories_batchCreate(parent: string, requestBody: BatchCreateGitLabConnectedRepositoriesRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connectedRepositories:batchCreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all `GitLabConfigs` for a given project. This API is experimental
		 * Get v1/{parent}/gitLabConfigs
		 * @param {string} parent Required. Name of the parent resource
		 * @param {number} pageSize The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 50 configs will be returned. The maximum value is 1000;, values above 1000 will be coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous ‘ListGitlabConfigsRequest’ call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ‘ListGitlabConfigsRequest’ must match the call that provided the page token.
		 * @return {ListGitLabConfigsResponse} Successful response
		 */
		Cloudbuild_projects_locations_gitLabConfigs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListGitLabConfigsResponse> {
			return this.http.get<ListGitLabConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/gitLabConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new `GitLabConfig`. This API is experimental
		 * Post v1/{parent}/gitLabConfigs
		 * @param {string} parent Required. Name of the parent resource.
		 * @param {string} gitlabConfigId Optional. The ID to use for the GitLabConfig, which will become the final component of the GitLabConfig’s resource name. gitlab_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_gitLabConfigs_create(parent: string, gitlabConfigId: string | null | undefined, requestBody: GitLabConfig): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/gitLabConfigs&gitlabConfigId=' + (gitlabConfigId == null ? '' : encodeURIComponent(gitlabConfigId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all GitHubEnterpriseConfigs for a given project.
		 * Get v1/{parent}/githubEnterpriseConfigs
		 * @param {string} parent Name of the parent project. For example: projects/{$project_number} or projects/{$project_id}
		 * @param {string} projectId ID of the project
		 * @return {ListGithubEnterpriseConfigsResponse} Successful response
		 */
		Cloudbuild_projects_locations_githubEnterpriseConfigs_list(parent: string, projectId: string | null | undefined): Observable<ListGithubEnterpriseConfigsResponse> {
			return this.http.get<ListGithubEnterpriseConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/githubEnterpriseConfigs&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), {});
		}

		/**
		 * Create an association between a GCP project and a GitHub Enterprise server.
		 * Post v1/{parent}/githubEnterpriseConfigs
		 * @param {string} parent Name of the parent project. For example: projects/{$project_number} or projects/{$project_id}
		 * @param {string} gheConfigId Optional. The ID to use for the GithubEnterpriseConfig, which will become the final component of the GithubEnterpriseConfig's resource name. ghe_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character
		 * @param {string} projectId ID of the project.
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_githubEnterpriseConfigs_create(parent: string, gheConfigId: string | null | undefined, projectId: string | null | undefined, requestBody: GitHubEnterpriseConfig): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/githubEnterpriseConfigs&gheConfigId=' + (gheConfigId == null ? '' : encodeURIComponent(gheConfigId)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all repositories for a given `GitLabConfig`. This API is experimental
		 * Get v1/{parent}/repos
		 * @param {string} parent Required. Name of the parent resource.
		 * @param {number} pageSize The maximum number of repositories to return. The service may return fewer than this value.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous ListGitLabRepositoriesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGitLabRepositoriesRequest` must match the call that provided the page token.
		 * @return {ListGitLabRepositoriesResponse} Successful response
		 */
		Cloudbuild_projects_locations_gitLabConfigs_repos_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListGitLabRepositoriesResponse> {
			return this.http.get<ListGitLabRepositoriesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/repos&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists existing `BuildTrigger`s.
		 * Get v1/{parent}/triggers
		 * @param {string} parent The parent of the collection of `Triggers`. Format: `projects/{project}/locations/{location}`
		 * @param {number} pageSize Number of results to return in the list.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Token to provide to skip to a particular spot in the list.
		 * @param {string} projectId Required. ID of the project for which to list BuildTriggers.
		 * @return {ListBuildTriggersResponse} Successful response
		 */
		Cloudbuild_projects_locations_triggers_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, projectId: string | null | undefined): Observable<ListBuildTriggersResponse> {
			return this.http.get<ListBuildTriggersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/triggers&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), {});
		}

		/**
		 * Creates a new `BuildTrigger`.
		 * Post v1/{parent}/triggers
		 * @param {string} parent The parent resource where this trigger will be created. Format: `projects/{project}/locations/{location}`
		 * @param {string} projectId Required. ID of the project for which to configure automatic builds.
		 * @return {BuildTrigger} Successful response
		 */
		Cloudbuild_projects_locations_triggers_create(parent: string, projectId: string | null | undefined, requestBody: BuildTrigger): Observable<BuildTrigger> {
			return this.http.post<BuildTrigger>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/triggers&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists `WorkerPool`s.
		 * Get v1/{parent}/workerPools
		 * @param {string} parent Required. The parent of the collection of `WorkerPools`. Format: `projects/{project}/locations/{location}`.
		 * @param {number} pageSize The maximum number of `WorkerPool`s to return. The service may return fewer than this value. If omitted, the server will use a sensible default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListWorkerPools` call. Provide this to retrieve the subsequent page.
		 * @return {ListWorkerPoolsResponse} Successful response
		 */
		Cloudbuild_projects_locations_workerPools_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListWorkerPoolsResponse> {
			return this.http.get<ListWorkerPoolsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workerPools&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a `WorkerPool`.
		 * Post v1/{parent}/workerPools
		 * @param {string} parent Required. The parent resource where this worker pool will be created. Format: `projects/{project}/locations/{location}`.
		 * @param {boolean} validateOnly If set, validate the request and preview the response, but do not actually post it.
		 * @param {string} workerPoolId Required. Immutable. The ID to use for the `WorkerPool`, which will become the final component of the resource name. This value should be 1-63 characters, and valid characters are /a-z-/.
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_workerPools_create(parent: string, validateOnly: boolean | null | undefined, workerPoolId: string | null | undefined, requestBody: WorkerPool): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workerPools&validateOnly=' + validateOnly + '&workerPoolId=' + (workerPoolId == null ? '' : encodeURIComponent(workerPoolId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a `BuildTrigger` by its project ID and trigger ID.
		 * Patch v1/{resourceName}
		 * @param {string} resourceName The `Trigger` name with format: `projects/{project}/locations/{location}/triggers/{trigger}`, where {trigger} is a unique identifier generated by the service.
		 * @param {string} projectId Required. ID of the project that owns the trigger.
		 * @param {string} triggerId Required. ID of the `BuildTrigger` to update.
		 * @param {string} updateMask Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
		 * @return {BuildTrigger} Successful response
		 */
		Cloudbuild_projects_locations_triggers_patch(resourceName: string, projectId: string | null | undefined, triggerId: string | null | undefined, updateMask: string | null | undefined, requestBody: BuildTrigger): Observable<BuildTrigger> {
			return this.http.patch<BuildTrigger>(this.baseUri + 'v1/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&triggerId=' + (triggerId == null ? '' : encodeURIComponent(triggerId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

