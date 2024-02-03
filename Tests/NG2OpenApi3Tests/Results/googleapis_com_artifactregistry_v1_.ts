import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A detailed representation of an Apt artifact. Information in the record is derived from the archive's control file. See https://www.debian.org/doc/debian-policy/ch-controlfields.html */
	export interface AptArtifact {

		/** Output only. Operating system architecture of the artifact. */
		architecture?: string | null;

		/** Output only. Repository component of the artifact. */
		component?: string | null;

		/** Output only. Contents of the artifact's control metadata file. */
		controlFile?: string | null;

		/** Output only. The Artifact Registry resource name of the artifact. */
		name?: string | null;

		/** Output only. The Apt package name of the artifact. */
		packageName?: string | null;

		/** Output only. An artifact is a binary or source package. */
		packageType?: AptArtifactPackageType | null;
	}

	/** A detailed representation of an Apt artifact. Information in the record is derived from the archive's control file. See https://www.debian.org/doc/debian-policy/ch-controlfields.html */
	export interface AptArtifactFormProperties {

		/** Output only. Operating system architecture of the artifact. */
		architecture: FormControl<string | null | undefined>,

		/** Output only. Repository component of the artifact. */
		component: FormControl<string | null | undefined>,

		/** Output only. Contents of the artifact's control metadata file. */
		controlFile: FormControl<string | null | undefined>,

		/** Output only. The Artifact Registry resource name of the artifact. */
		name: FormControl<string | null | undefined>,

		/** Output only. The Apt package name of the artifact. */
		packageName: FormControl<string | null | undefined>,

		/** Output only. An artifact is a binary or source package. */
		packageType: FormControl<AptArtifactPackageType | null | undefined>,
	}
	export function CreateAptArtifactFormGroup() {
		return new FormGroup<AptArtifactFormProperties>({
			architecture: new FormControl<string | null | undefined>(undefined),
			component: new FormControl<string | null | undefined>(undefined),
			controlFile: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			packageType: new FormControl<AptArtifactPackageType | null | undefined>(undefined),
		});

	}

	export enum AptArtifactPackageType { PACKAGE_TYPE_UNSPECIFIED = 'PACKAGE_TYPE_UNSPECIFIED', BINARY = 'BINARY', SOURCE = 'SOURCE' }


	/** Configuration for an Apt remote repository. */
	export interface AptRepository {

		/** Publicly available Apt repositories constructed from a common repository base and a custom repository path. */
		publicRepository?: GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository;
	}

	/** Configuration for an Apt remote repository. */
	export interface AptRepositoryFormProperties {
	}
	export function CreateAptRepositoryFormGroup() {
		return new FormGroup<AptRepositoryFormProperties>({
		});

	}


	/** Publicly available Apt repositories constructed from a common repository base and a custom repository path. */
	export interface GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepository {

		/** A common public repository base for Apt. */
		repositoryBase?: GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepositoryRepositoryBase | null;

		/** A custom field to define a path to a specific repository from the base. */
		repositoryPath?: string | null;
	}

	/** Publicly available Apt repositories constructed from a common repository base and a custom repository path. */
	export interface GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepositoryFormProperties {

		/** A common public repository base for Apt. */
		repositoryBase: FormControl<GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepositoryRepositoryBase | null | undefined>,

		/** A custom field to define a path to a specific repository from the base. */
		repositoryPath: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepositoryFormGroup() {
		return new FormGroup<GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepositoryFormProperties>({
			repositoryBase: new FormControl<GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepositoryRepositoryBase | null | undefined>(undefined),
			repositoryPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigAptRepositoryPublicRepositoryRepositoryBase { REPOSITORY_BASE_UNSPECIFIED = 'REPOSITORY_BASE_UNSPECIFIED', DEBIAN = 'DEBIAN', UBUNTU = 'UBUNTU', DEBIAN_SNAPSHOT = 'DEBIAN_SNAPSHOT' }


	/** The metadata of an LRO from deleting multiple versions. */
	export interface BatchDeleteVersionsMetadata {

		/** The versions the operation failed to delete. */
		failedVersions?: Array<string>;
	}

	/** The metadata of an LRO from deleting multiple versions. */
	export interface BatchDeleteVersionsMetadataFormProperties {
	}
	export function CreateBatchDeleteVersionsMetadataFormGroup() {
		return new FormGroup<BatchDeleteVersionsMetadataFormProperties>({
		});

	}


	/** The request to delete multiple versions across a repository. */
	export interface BatchDeleteVersionsRequest {

		/** Required. The names of the versions to delete. A maximum of 10000 versions can be deleted in a batch. */
		names?: Array<string>;

		/** If true, the request is performed without deleting data, following AIP-163. */
		validateOnly?: boolean | null;
	}

	/** The request to delete multiple versions across a repository. */
	export interface BatchDeleteVersionsRequestFormProperties {

		/** If true, the request is performed without deleting data, following AIP-163. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateBatchDeleteVersionsRequestFormGroup() {
		return new FormGroup<BatchDeleteVersionsRequestFormProperties>({
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface Expr {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression?: string | null;

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface ExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateExprFormGroup() {
		return new FormGroup<ExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Artifact policy configuration for repository cleanup policies. */
	export interface CleanupPolicy {

		/** Policy action. */
		action?: CleanupPolicyAction | null;

		/** CleanupPolicyCondition is a set of conditions attached to a CleanupPolicy. If multiple entries are set, all must be satisfied for the condition to be satisfied. */
		condition?: CleanupPolicyCondition;

		/** The user-provided ID of the cleanup policy. */
		id?: string | null;

		/** CleanupPolicyMostRecentVersions is an alternate condition of a CleanupPolicy for retaining a minimum number of versions. */
		mostRecentVersions?: CleanupPolicyMostRecentVersions;
	}

	/** Artifact policy configuration for repository cleanup policies. */
	export interface CleanupPolicyFormProperties {

		/** Policy action. */
		action: FormControl<CleanupPolicyAction | null | undefined>,

		/** The user-provided ID of the cleanup policy. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCleanupPolicyFormGroup() {
		return new FormGroup<CleanupPolicyFormProperties>({
			action: new FormControl<CleanupPolicyAction | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CleanupPolicyAction { ACTION_UNSPECIFIED = 'ACTION_UNSPECIFIED', DELETE = 'DELETE', KEEP = 'KEEP' }


	/** CleanupPolicyCondition is a set of conditions attached to a CleanupPolicy. If multiple entries are set, all must be satisfied for the condition to be satisfied. */
	export interface CleanupPolicyCondition {

		/** Match versions newer than a duration. */
		newerThan?: string | null;

		/** Match versions older than a duration. */
		olderThan?: string | null;

		/** Match versions by package prefix. Applied on any prefix match. */
		packageNamePrefixes?: Array<string>;

		/** Match versions by tag prefix. Applied on any prefix match. */
		tagPrefixes?: Array<string>;

		/** Match versions by tag status. */
		tagState?: CleanupPolicyConditionTagState | null;

		/** Match versions by version name prefix. Applied on any prefix match. */
		versionNamePrefixes?: Array<string>;
	}

	/** CleanupPolicyCondition is a set of conditions attached to a CleanupPolicy. If multiple entries are set, all must be satisfied for the condition to be satisfied. */
	export interface CleanupPolicyConditionFormProperties {

		/** Match versions newer than a duration. */
		newerThan: FormControl<string | null | undefined>,

		/** Match versions older than a duration. */
		olderThan: FormControl<string | null | undefined>,

		/** Match versions by tag status. */
		tagState: FormControl<CleanupPolicyConditionTagState | null | undefined>,
	}
	export function CreateCleanupPolicyConditionFormGroup() {
		return new FormGroup<CleanupPolicyConditionFormProperties>({
			newerThan: new FormControl<string | null | undefined>(undefined),
			olderThan: new FormControl<string | null | undefined>(undefined),
			tagState: new FormControl<CleanupPolicyConditionTagState | null | undefined>(undefined),
		});

	}

	export enum CleanupPolicyConditionTagState { TAG_STATE_UNSPECIFIED = 'TAG_STATE_UNSPECIFIED', TAGGED = 'TAGGED', UNTAGGED = 'UNTAGGED', ANY = 'ANY' }


	/** CleanupPolicyMostRecentVersions is an alternate condition of a CleanupPolicy for retaining a minimum number of versions. */
	export interface CleanupPolicyMostRecentVersions {

		/** Minimum number of versions to keep. */
		keepCount?: number | null;

		/** List of package name prefixes that will apply this rule. */
		packageNamePrefixes?: Array<string>;
	}

	/** CleanupPolicyMostRecentVersions is an alternate condition of a CleanupPolicy for retaining a minimum number of versions. */
	export interface CleanupPolicyMostRecentVersionsFormProperties {

		/** Minimum number of versions to keep. */
		keepCount: FormControl<number | null | undefined>,
	}
	export function CreateCleanupPolicyMostRecentVersionsFormGroup() {
		return new FormGroup<CleanupPolicyMostRecentVersionsFormProperties>({
			keepCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** DockerImage represents a docker artifact. The following fields are returned as untyped metadata in the Version resource, using camelcase keys (i.e. metadata.imageSizeBytes): * imageSizeBytes * mediaType * buildTime */
	export interface DockerImage {

		/** The time this image was built. This field is returned as the 'metadata.buildTime' field in the Version resource. The build time is returned to the client as an RFC 3339 string, which can be easily used with the JavaScript Date constructor. */
		buildTime?: string | null;

		/** Calculated size of the image. This field is returned as the 'metadata.imageSizeBytes' field in the Version resource. */
		imageSizeBytes?: string | null;

		/** Media type of this image, e.g. "application/vnd.docker.distribution.manifest.v2+json". This field is returned as the 'metadata.mediaType' field in the Version resource. */
		mediaType?: string | null;

		/** Required. registry_location, project_id, repository_name and image id forms a unique image name:`projects//locations//repository//dockerImages/`. For example, "projects/test-project/locations/us-west4/repositories/test-repo/dockerImages/ nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and "nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf" is the image's digest. */
		name?: string | null;

		/** Tags attached to this image. */
		tags?: Array<string>;

		/** Output only. The time when the docker image was last updated. */
		updateTime?: string | null;

		/** Time the image was uploaded. */
		uploadTime?: string | null;

		/** Required. URL to access the image. Example: us-west4-docker.pkg.dev/test-project/test-repo/nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf */
		uri?: string | null;
	}

	/** DockerImage represents a docker artifact. The following fields are returned as untyped metadata in the Version resource, using camelcase keys (i.e. metadata.imageSizeBytes): * imageSizeBytes * mediaType * buildTime */
	export interface DockerImageFormProperties {

		/** The time this image was built. This field is returned as the 'metadata.buildTime' field in the Version resource. The build time is returned to the client as an RFC 3339 string, which can be easily used with the JavaScript Date constructor. */
		buildTime: FormControl<string | null | undefined>,

		/** Calculated size of the image. This field is returned as the 'metadata.imageSizeBytes' field in the Version resource. */
		imageSizeBytes: FormControl<string | null | undefined>,

		/** Media type of this image, e.g. "application/vnd.docker.distribution.manifest.v2+json". This field is returned as the 'metadata.mediaType' field in the Version resource. */
		mediaType: FormControl<string | null | undefined>,

		/** Required. registry_location, project_id, repository_name and image id forms a unique image name:`projects//locations//repository//dockerImages/`. For example, "projects/test-project/locations/us-west4/repositories/test-repo/dockerImages/ nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and "nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf" is the image's digest. */
		name: FormControl<string | null | undefined>,

		/** Output only. The time when the docker image was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Time the image was uploaded. */
		uploadTime: FormControl<string | null | undefined>,

		/** Required. URL to access the image. Example: us-west4-docker.pkg.dev/test-project/test-repo/nginx@sha256:e9954c1fc875017be1c3e36eca16be2d9e9bccc4bf072163515467d6a823c7cf */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateDockerImageFormGroup() {
		return new FormGroup<DockerImageFormProperties>({
			buildTime: new FormControl<string | null | undefined>(undefined),
			imageSizeBytes: new FormControl<string | null | undefined>(undefined),
			mediaType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			uploadTime: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for a Docker remote repository. */
	export interface DockerRepository {

		/** One of the publicly available Docker repositories supported by Artifact Registry. */
		publicRepository?: DockerRepositoryPublicRepository | null;
	}

	/** Configuration for a Docker remote repository. */
	export interface DockerRepositoryFormProperties {

		/** One of the publicly available Docker repositories supported by Artifact Registry. */
		publicRepository: FormControl<DockerRepositoryPublicRepository | null | undefined>,
	}
	export function CreateDockerRepositoryFormGroup() {
		return new FormGroup<DockerRepositoryFormProperties>({
			publicRepository: new FormControl<DockerRepositoryPublicRepository | null | undefined>(undefined),
		});

	}

	export enum DockerRepositoryPublicRepository { PUBLIC_REPOSITORY_UNSPECIFIED = 'PUBLIC_REPOSITORY_UNSPECIFIED', DOCKER_HUB = 'DOCKER_HUB' }


	/** DockerRepositoryConfig is docker related repository details. Provides additional configuration details for repositories of the docker format type. */
	export interface DockerRepositoryConfig {

		/** The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created. */
		immutableTags?: boolean | null;
	}

	/** DockerRepositoryConfig is docker related repository details. Provides additional configuration details for repositories of the docker format type. */
	export interface DockerRepositoryConfigFormProperties {

		/** The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created. */
		immutableTags: FormControl<boolean | null | undefined>,
	}
	export function CreateDockerRepositoryConfigFormGroup() {
		return new FormGroup<DockerRepositoryConfigFormProperties>({
			immutableTags: new FormControl<boolean | null | undefined>(undefined),
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


	/** GoModule represents a Go module. */
	export interface GoModule {

		/** Output only. The time when the Go module is created. */
		createTime?: string | null;

		/** The resource name of a Go module. */
		name?: string | null;

		/** Output only. The time when the Go module is updated. */
		updateTime?: string | null;

		/** The version of the Go module. Must be a valid canonical version as defined in https://go.dev/ref/mod#glos-canonical-version. */
		version?: string | null;
	}

	/** GoModule represents a Go module. */
	export interface GoModuleFormProperties {

		/** Output only. The time when the Go module is created. */
		createTime: FormControl<string | null | undefined>,

		/** The resource name of a Go module. */
		name: FormControl<string | null | undefined>,

		/** Output only. The time when the Go module is updated. */
		updateTime: FormControl<string | null | undefined>,

		/** The version of the Go module. Must be a valid canonical version as defined in https://go.dev/ref/mod#glos-canonical-version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoModuleFormGroup() {
		return new FormGroup<GoModuleFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A detailed representation of a GooGet artifact. */
	export interface GoogetArtifact {

		/** Output only. Operating system architecture of the artifact. */
		architecture?: string | null;

		/** Output only. The Artifact Registry resource name of the artifact. */
		name?: string | null;

		/** Output only. The GooGet package name of the artifact. */
		packageName?: string | null;
	}

	/** A detailed representation of a GooGet artifact. */
	export interface GoogetArtifactFormProperties {

		/** Output only. Operating system architecture of the artifact. */
		architecture: FormControl<string | null | undefined>,

		/** Output only. The Artifact Registry resource name of the artifact. */
		name: FormControl<string | null | undefined>,

		/** Output only. The GooGet package name of the artifact. */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateGoogetArtifactFormGroup() {
		return new FormGroup<GoogetArtifactFormProperties>({
			architecture: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Files store content that is potentially associated with Packages or Versions. */
	export interface GoogleDevtoolsArtifactregistryV1File {

		/** Output only. The time when the File was created. */
		createTime?: string | null;

		/** Output only. The time when the last attempt to refresh the file's data was made. Only set when the repository is remote. */
		fetchTime?: string | null;

		/** The hashes of the file content. */
		hashes?: Array<Hash>;

		/** The name of the file, for example: "projects/p1/locations/us-central1/repositories/repo1/files/a%2Fb%2Fc.txt". If the file ID part contains slashes, they are escaped. */
		name?: string | null;

		/** The name of the Package or Version that owns this file, if any. */
		owner?: string | null;

		/** The size of the File in bytes. */
		sizeBytes?: string | null;

		/** Output only. The time when the File was last updated. */
		updateTime?: string | null;
	}

	/** Files store content that is potentially associated with Packages or Versions. */
	export interface GoogleDevtoolsArtifactregistryV1FileFormProperties {

		/** Output only. The time when the File was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time when the last attempt to refresh the file's data was made. Only set when the repository is remote. */
		fetchTime: FormControl<string | null | undefined>,

		/** The name of the file, for example: "projects/p1/locations/us-central1/repositories/repo1/files/a%2Fb%2Fc.txt". If the file ID part contains slashes, they are escaped. */
		name: FormControl<string | null | undefined>,

		/** The name of the Package or Version that owns this file, if any. */
		owner: FormControl<string | null | undefined>,

		/** The size of the File in bytes. */
		sizeBytes: FormControl<string | null | undefined>,

		/** Output only. The time when the File was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsArtifactregistryV1FileFormGroup() {
		return new FormGroup<GoogleDevtoolsArtifactregistryV1FileFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			fetchTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A hash of file content. */
	export interface Hash {

		/** The algorithm used to compute the hash value. */
		type?: HashType | null;

		/** The hash value. */
		value?: string | null;
	}

	/** A hash of file content. */
	export interface HashFormProperties {

		/** The algorithm used to compute the hash value. */
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

	export enum HashType { HASH_TYPE_UNSPECIFIED = 'HASH_TYPE_UNSPECIFIED', SHA256 = 'SHA256', MD5 = 'MD5' }


	/** Publicly available Yum repositories constructed from a common repository base and a custom repository path. */
	export interface GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository {

		/** A common public repository base for Yum. */
		repositoryBase?: GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepositoryRepositoryBase | null;

		/** A custom field to define a path to a specific repository from the base. */
		repositoryPath?: string | null;
	}

	/** Publicly available Yum repositories constructed from a common repository base and a custom repository path. */
	export interface GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepositoryFormProperties {

		/** A common public repository base for Yum. */
		repositoryBase: FormControl<GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepositoryRepositoryBase | null | undefined>,

		/** A custom field to define a path to a specific repository from the base. */
		repositoryPath: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepositoryFormGroup() {
		return new FormGroup<GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepositoryFormProperties>({
			repositoryBase: new FormControl<GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepositoryRepositoryBase | null | undefined>(undefined),
			repositoryPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepositoryRepositoryBase { REPOSITORY_BASE_UNSPECIFIED = 'REPOSITORY_BASE_UNSPECIFIED', CENTOS = 'CENTOS', CENTOS_DEBUG = 'CENTOS_DEBUG', CENTOS_VAULT = 'CENTOS_VAULT', CENTOS_STREAM = 'CENTOS_STREAM', ROCKY = 'ROCKY', EPEL = 'EPEL' }


	/** Error information explaining why a package was not imported. */
	export interface ImportAptArtifactsErrorInfo {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Google Cloud Storage location where the artifacts currently reside. */
		gcsSource?: ImportAptArtifactsGcsSource;
	}

	/** Error information explaining why a package was not imported. */
	export interface ImportAptArtifactsErrorInfoFormProperties {
	}
	export function CreateImportAptArtifactsErrorInfoFormGroup() {
		return new FormGroup<ImportAptArtifactsErrorInfoFormProperties>({
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
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


	/** Google Cloud Storage location where the artifacts currently reside. */
	export interface ImportAptArtifactsGcsSource {

		/** Cloud Storage paths URI (e.g., gs://my_bucket//my_object). */
		uris?: Array<string>;

		/** Supports URI wildcards for matching multiple objects from a single URI. */
		useWildcards?: boolean | null;
	}

	/** Google Cloud Storage location where the artifacts currently reside. */
	export interface ImportAptArtifactsGcsSourceFormProperties {

		/** Supports URI wildcards for matching multiple objects from a single URI. */
		useWildcards: FormControl<boolean | null | undefined>,
	}
	export function CreateImportAptArtifactsGcsSourceFormGroup() {
		return new FormGroup<ImportAptArtifactsGcsSourceFormProperties>({
			useWildcards: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The operation metadata for importing artifacts. */
	export interface ImportAptArtifactsMetadata {
	}

	/** The operation metadata for importing artifacts. */
	export interface ImportAptArtifactsMetadataFormProperties {
	}
	export function CreateImportAptArtifactsMetadataFormGroup() {
		return new FormGroup<ImportAptArtifactsMetadataFormProperties>({
		});

	}


	/** The request to import new apt artifacts. */
	export interface ImportAptArtifactsRequest {

		/** Google Cloud Storage location where the artifacts currently reside. */
		gcsSource?: ImportAptArtifactsGcsSource;
	}

	/** The request to import new apt artifacts. */
	export interface ImportAptArtifactsRequestFormProperties {
	}
	export function CreateImportAptArtifactsRequestFormGroup() {
		return new FormGroup<ImportAptArtifactsRequestFormProperties>({
		});

	}


	/** The response message from importing APT artifacts. */
	export interface ImportAptArtifactsResponse {

		/** The Apt artifacts imported. */
		aptArtifacts?: Array<AptArtifact>;

		/** Detailed error info for packages that were not imported. */
		errors?: Array<ImportAptArtifactsErrorInfo>;
	}

	/** The response message from importing APT artifacts. */
	export interface ImportAptArtifactsResponseFormProperties {
	}
	export function CreateImportAptArtifactsResponseFormGroup() {
		return new FormGroup<ImportAptArtifactsResponseFormProperties>({
		});

	}


	/** Error information explaining why a package was not imported. */
	export interface ImportGoogetArtifactsErrorInfo {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Google Cloud Storage location where the artifacts currently reside. */
		gcsSource?: ImportGoogetArtifactsGcsSource;
	}

	/** Error information explaining why a package was not imported. */
	export interface ImportGoogetArtifactsErrorInfoFormProperties {
	}
	export function CreateImportGoogetArtifactsErrorInfoFormGroup() {
		return new FormGroup<ImportGoogetArtifactsErrorInfoFormProperties>({
		});

	}


	/** Google Cloud Storage location where the artifacts currently reside. */
	export interface ImportGoogetArtifactsGcsSource {

		/** Cloud Storage paths URI (e.g., `gs://my_bucket/my_object`). */
		uris?: Array<string>;

		/** Supports URI wildcards for matching multiple objects from a single URI. */
		useWildcards?: boolean | null;
	}

	/** Google Cloud Storage location where the artifacts currently reside. */
	export interface ImportGoogetArtifactsGcsSourceFormProperties {

		/** Supports URI wildcards for matching multiple objects from a single URI. */
		useWildcards: FormControl<boolean | null | undefined>,
	}
	export function CreateImportGoogetArtifactsGcsSourceFormGroup() {
		return new FormGroup<ImportGoogetArtifactsGcsSourceFormProperties>({
			useWildcards: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The operation metadata for importing artifacts. */
	export interface ImportGoogetArtifactsMetadata {
	}

	/** The operation metadata for importing artifacts. */
	export interface ImportGoogetArtifactsMetadataFormProperties {
	}
	export function CreateImportGoogetArtifactsMetadataFormGroup() {
		return new FormGroup<ImportGoogetArtifactsMetadataFormProperties>({
		});

	}


	/** The request to import new googet artifacts. */
	export interface ImportGoogetArtifactsRequest {

		/** Google Cloud Storage location where the artifacts currently reside. */
		gcsSource?: ImportGoogetArtifactsGcsSource;
	}

	/** The request to import new googet artifacts. */
	export interface ImportGoogetArtifactsRequestFormProperties {
	}
	export function CreateImportGoogetArtifactsRequestFormGroup() {
		return new FormGroup<ImportGoogetArtifactsRequestFormProperties>({
		});

	}


	/** The response message from importing artifacts. */
	export interface ImportGoogetArtifactsResponse {

		/** Detailed error info for packages that were not imported. */
		errors?: Array<ImportGoogetArtifactsErrorInfo>;

		/** The GooGet artifacts updated. */
		googetArtifacts?: Array<GoogetArtifact>;
	}

	/** The response message from importing artifacts. */
	export interface ImportGoogetArtifactsResponseFormProperties {
	}
	export function CreateImportGoogetArtifactsResponseFormGroup() {
		return new FormGroup<ImportGoogetArtifactsResponseFormProperties>({
		});

	}


	/** Error information explaining why a package was not imported. */
	export interface ImportYumArtifactsErrorInfo {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Google Cloud Storage location where the artifacts currently reside. */
		gcsSource?: ImportYumArtifactsGcsSource;
	}

	/** Error information explaining why a package was not imported. */
	export interface ImportYumArtifactsErrorInfoFormProperties {
	}
	export function CreateImportYumArtifactsErrorInfoFormGroup() {
		return new FormGroup<ImportYumArtifactsErrorInfoFormProperties>({
		});

	}


	/** Google Cloud Storage location where the artifacts currently reside. */
	export interface ImportYumArtifactsGcsSource {

		/** Cloud Storage paths URI (e.g., gs://my_bucket//my_object). */
		uris?: Array<string>;

		/** Supports URI wildcards for matching multiple objects from a single URI. */
		useWildcards?: boolean | null;
	}

	/** Google Cloud Storage location where the artifacts currently reside. */
	export interface ImportYumArtifactsGcsSourceFormProperties {

		/** Supports URI wildcards for matching multiple objects from a single URI. */
		useWildcards: FormControl<boolean | null | undefined>,
	}
	export function CreateImportYumArtifactsGcsSourceFormGroup() {
		return new FormGroup<ImportYumArtifactsGcsSourceFormProperties>({
			useWildcards: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The operation metadata for importing artifacts. */
	export interface ImportYumArtifactsMetadata {
	}

	/** The operation metadata for importing artifacts. */
	export interface ImportYumArtifactsMetadataFormProperties {
	}
	export function CreateImportYumArtifactsMetadataFormGroup() {
		return new FormGroup<ImportYumArtifactsMetadataFormProperties>({
		});

	}


	/** The request to import new yum artifacts. */
	export interface ImportYumArtifactsRequest {

		/** Google Cloud Storage location where the artifacts currently reside. */
		gcsSource?: ImportYumArtifactsGcsSource;
	}

	/** The request to import new yum artifacts. */
	export interface ImportYumArtifactsRequestFormProperties {
	}
	export function CreateImportYumArtifactsRequestFormGroup() {
		return new FormGroup<ImportYumArtifactsRequestFormProperties>({
		});

	}


	/** The response message from importing YUM artifacts. */
	export interface ImportYumArtifactsResponse {

		/** Detailed error info for packages that were not imported. */
		errors?: Array<ImportYumArtifactsErrorInfo>;

		/** The yum artifacts imported. */
		yumArtifacts?: Array<YumArtifact>;
	}

	/** The response message from importing YUM artifacts. */
	export interface ImportYumArtifactsResponseFormProperties {
	}
	export function CreateImportYumArtifactsResponseFormGroup() {
		return new FormGroup<ImportYumArtifactsResponseFormProperties>({
		});

	}


	/** A detailed representation of a Yum artifact. */
	export interface YumArtifact {

		/** Output only. Operating system architecture of the artifact. */
		architecture?: string | null;

		/** Output only. The Artifact Registry resource name of the artifact. */
		name?: string | null;

		/** Output only. The yum package name of the artifact. */
		packageName?: string | null;

		/** Output only. An artifact is a binary or source package. */
		packageType?: AptArtifactPackageType | null;
	}

	/** A detailed representation of a Yum artifact. */
	export interface YumArtifactFormProperties {

		/** Output only. Operating system architecture of the artifact. */
		architecture: FormControl<string | null | undefined>,

		/** Output only. The Artifact Registry resource name of the artifact. */
		name: FormControl<string | null | undefined>,

		/** Output only. The yum package name of the artifact. */
		packageName: FormControl<string | null | undefined>,

		/** Output only. An artifact is a binary or source package. */
		packageType: FormControl<AptArtifactPackageType | null | undefined>,
	}
	export function CreateYumArtifactFormGroup() {
		return new FormGroup<YumArtifactFormProperties>({
			architecture: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			packageType: new FormControl<AptArtifactPackageType | null | undefined>(undefined),
		});

	}


	/** A detailed representation of a KFP artifact. */
	export interface KfpArtifact {

		/** Output only. Resource name of the KFP artifact. Since users don't directly interact with this resource, the name will be derived from the associated version. For example, when version = ".../versions/sha256:abcdef...", the name will be ".../kfpArtifacts/sha256:abcdef...". */
		name?: string | null;

		/** The version associated with the KFP artifact. Must follow the Semantic Versioning standard. */
		version?: string | null;
	}

	/** A detailed representation of a KFP artifact. */
	export interface KfpArtifactFormProperties {

		/** Output only. Resource name of the KFP artifact. Since users don't directly interact with this resource, the name will be derived from the associated version. For example, when version = ".../versions/sha256:abcdef...", the name will be ".../kfpArtifacts/sha256:abcdef...". */
		name: FormControl<string | null | undefined>,

		/** The version associated with the KFP artifact. Must follow the Semantic Versioning standard. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateKfpArtifactFormGroup() {
		return new FormGroup<KfpArtifactFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from listing docker images. */
	export interface ListDockerImagesResponse {

		/** The docker images returned. */
		dockerImages?: Array<DockerImage>;

		/** The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return. */
		nextPageToken?: string | null;
	}

	/** The response from listing docker images. */
	export interface ListDockerImagesResponseFormProperties {

		/** The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDockerImagesResponseFormGroup() {
		return new FormGroup<ListDockerImagesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from listing files. */
	export interface ListFilesResponse {

		/** The files returned. */
		files?: Array<GoogleDevtoolsArtifactregistryV1File>;

		/** The token to retrieve the next page of files, or empty if there are no more files to return. */
		nextPageToken?: string | null;
	}

	/** The response from listing files. */
	export interface ListFilesResponseFormProperties {

		/** The token to retrieve the next page of files, or empty if there are no more files to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFilesResponseFormGroup() {
		return new FormGroup<ListFilesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from listing maven artifacts. */
	export interface ListMavenArtifactsResponse {

		/** The maven artifacts returned. */
		mavenArtifacts?: Array<MavenArtifact>;

		/** The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return. */
		nextPageToken?: string | null;
	}

	/** The response from listing maven artifacts. */
	export interface ListMavenArtifactsResponseFormProperties {

		/** The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMavenArtifactsResponseFormGroup() {
		return new FormGroup<ListMavenArtifactsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MavenArtifact represents a maven artifact. */
	export interface MavenArtifact {

		/** Artifact ID for the artifact. */
		artifactId?: string | null;

		/** Output only. Time the artifact was created. */
		createTime?: string | null;

		/** Group ID for the artifact. Example: com.google.guava */
		groupId?: string | null;

		/** Required. registry_location, project_id, repository_name and maven_artifact forms a unique artifact For example, "projects/test-project/locations/us-west4/repositories/test-repo/mavenArtifacts/ com.google.guava:guava:31.0-jre", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and "com.google.guava:guava:31.0-jre" is the maven artifact. */
		name?: string | null;

		/** Required. URL to access the pom file of the artifact. Example: us-west4-maven.pkg.dev/test-project/test-repo/com/google/guava/guava/31.0/guava-31.0.pom */
		pomUri?: string | null;

		/** Output only. Time the artifact was updated. */
		updateTime?: string | null;

		/** Version of this artifact. */
		version?: string | null;
	}

	/** MavenArtifact represents a maven artifact. */
	export interface MavenArtifactFormProperties {

		/** Artifact ID for the artifact. */
		artifactId: FormControl<string | null | undefined>,

		/** Output only. Time the artifact was created. */
		createTime: FormControl<string | null | undefined>,

		/** Group ID for the artifact. Example: com.google.guava */
		groupId: FormControl<string | null | undefined>,

		/** Required. registry_location, project_id, repository_name and maven_artifact forms a unique artifact For example, "projects/test-project/locations/us-west4/repositories/test-repo/mavenArtifacts/ com.google.guava:guava:31.0-jre", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and "com.google.guava:guava:31.0-jre" is the maven artifact. */
		name: FormControl<string | null | undefined>,

		/** Required. URL to access the pom file of the artifact. Example: us-west4-maven.pkg.dev/test-project/test-repo/com/google/guava/guava/31.0/guava-31.0.pom */
		pomUri: FormControl<string | null | undefined>,

		/** Output only. Time the artifact was updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Version of this artifact. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateMavenArtifactFormGroup() {
		return new FormGroup<MavenArtifactFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pomUri: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from listing npm packages. */
	export interface ListNpmPackagesResponse {

		/** The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return. */
		nextPageToken?: string | null;

		/** The npm packages returned. */
		npmPackages?: Array<NpmPackage>;
	}

	/** The response from listing npm packages. */
	export interface ListNpmPackagesResponseFormProperties {

		/** The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListNpmPackagesResponseFormGroup() {
		return new FormGroup<ListNpmPackagesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** NpmPackage represents an npm artifact. */
	export interface NpmPackage {

		/** Output only. Time the package was created. */
		createTime?: string | null;

		/** Required. registry_location, project_id, repository_name and npm_package forms a unique package For example, "projects/test-project/locations/us-west4/repositories/test-repo/npmPackages/ npm_test:1.0.0", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and npm_test:1.0.0" is the npm package. */
		name?: string | null;

		/** Package for the artifact. */
		packageName?: string | null;

		/** Tags attached to this package. */
		tags?: Array<string>;

		/** Output only. Time the package was updated. */
		updateTime?: string | null;

		/** Version of this package. */
		version?: string | null;
	}

	/** NpmPackage represents an npm artifact. */
	export interface NpmPackageFormProperties {

		/** Output only. Time the package was created. */
		createTime: FormControl<string | null | undefined>,

		/** Required. registry_location, project_id, repository_name and npm_package forms a unique package For example, "projects/test-project/locations/us-west4/repositories/test-repo/npmPackages/ npm_test:1.0.0", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and npm_test:1.0.0" is the npm package. */
		name: FormControl<string | null | undefined>,

		/** Package for the artifact. */
		packageName: FormControl<string | null | undefined>,

		/** Output only. Time the package was updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Version of this package. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateNpmPackageFormGroup() {
		return new FormGroup<NpmPackageFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from listing packages. */
	export interface ListPackagesResponse {

		/** The token to retrieve the next page of packages, or empty if there are no more packages to return. */
		nextPageToken?: string | null;

		/** The packages returned. */
		packages?: Array<Package>;
	}

	/** The response from listing packages. */
	export interface ListPackagesResponseFormProperties {

		/** The token to retrieve the next page of packages, or empty if there are no more packages to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPackagesResponseFormGroup() {
		return new FormGroup<ListPackagesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Packages are named collections of versions. */
	export interface Package {

		/** The time when the package was created. */
		createTime?: string | null;

		/** The display name of the package. */
		displayName?: string | null;

		/** The name of the package, for example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1`. If the package ID part contains slashes, the slashes are escaped. */
		name?: string | null;

		/** The time when the package was last updated. This includes publishing a new version of the package. */
		updateTime?: string | null;
	}

	/** Packages are named collections of versions. */
	export interface PackageFormProperties {

		/** The time when the package was created. */
		createTime: FormControl<string | null | undefined>,

		/** The display name of the package. */
		displayName: FormControl<string | null | undefined>,

		/** The name of the package, for example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1`. If the package ID part contains slashes, the slashes are escaped. */
		name: FormControl<string | null | undefined>,

		/** The time when the package was last updated. This includes publishing a new version of the package. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreatePackageFormGroup() {
		return new FormGroup<PackageFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from listing python packages. */
	export interface ListPythonPackagesResponse {

		/** The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return. */
		nextPageToken?: string | null;

		/** The python packages returned. */
		pythonPackages?: Array<PythonPackage>;
	}

	/** The response from listing python packages. */
	export interface ListPythonPackagesResponseFormProperties {

		/** The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPythonPackagesResponseFormGroup() {
		return new FormGroup<ListPythonPackagesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PythonPackage represents a python artifact. */
	export interface PythonPackage {

		/** Output only. Time the package was created. */
		createTime?: string | null;

		/** Required. registry_location, project_id, repository_name and python_package forms a unique package name:`projects//locations//repository//pythonPackages/`. For example, "projects/test-project/locations/us-west4/repositories/test-repo/pythonPackages/ python_package:1.0.0", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and python_package:1.0.0" is the python package. */
		name?: string | null;

		/** Package for the artifact. */
		packageName?: string | null;

		/** Output only. Time the package was updated. */
		updateTime?: string | null;

		/** Required. URL to access the package. Example: us-west4-python.pkg.dev/test-project/test-repo/python_package/file-name-1.0.0.tar.gz */
		uri?: string | null;

		/** Version of this package. */
		version?: string | null;
	}

	/** PythonPackage represents a python artifact. */
	export interface PythonPackageFormProperties {

		/** Output only. Time the package was created. */
		createTime: FormControl<string | null | undefined>,

		/** Required. registry_location, project_id, repository_name and python_package forms a unique package name:`projects//locations//repository//pythonPackages/`. For example, "projects/test-project/locations/us-west4/repositories/test-repo/pythonPackages/ python_package:1.0.0", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and python_package:1.0.0" is the python package. */
		name: FormControl<string | null | undefined>,

		/** Package for the artifact. */
		packageName: FormControl<string | null | undefined>,

		/** Output only. Time the package was updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Required. URL to access the package. Example: us-west4-python.pkg.dev/test-project/test-repo/python_package/file-name-1.0.0.tar.gz */
		uri: FormControl<string | null | undefined>,

		/** Version of this package. */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePythonPackageFormGroup() {
		return new FormGroup<PythonPackageFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from listing repositories. */
	export interface ListRepositoriesResponse {

		/** The token to retrieve the next page of repositories, or empty if there are no more repositories to return. */
		nextPageToken?: string | null;

		/** The repositories returned. */
		repositories?: Array<Repository>;
	}

	/** The response from listing repositories. */
	export interface ListRepositoriesResponseFormProperties {

		/** The token to retrieve the next page of repositories, or empty if there are no more repositories to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRepositoriesResponseFormGroup() {
		return new FormGroup<ListRepositoriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Repository for storing artifacts with a specific format. */
	export interface Repository {

		/** Optional. Cleanup policies for this repository. Cleanup policies indicate when certain package versions can be automatically deleted. Map keys are policy IDs supplied by users during policy creation. They must unique within a repository and be under 128 characters in length. */
		cleanupPolicies?: {[id: string]: CleanupPolicy };

		/** Optional. If true, the cleanup pipeline is prevented from deleting versions in this repository. */
		cleanupPolicyDryRun?: boolean | null;

		/** Output only. The time when the repository was created. */
		createTime?: string | null;

		/** The user-provided description of the repository. */
		description?: string | null;

		/** DockerRepositoryConfig is docker related repository details. Provides additional configuration details for repositories of the docker format type. */
		dockerConfig?: DockerRepositoryConfig;

		/** Optional. The format of packages that are stored in the repository. */
		format?: RepositoryFormat | null;

		/** The Cloud KMS resource name of the customer managed encryption key that's used to encrypt the contents of the Repository. Has the form: `projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`. This value may not be changed after the Repository has been created. */
		kmsKeyName?: string | null;

		/** Labels with user-defined metadata. This field may contain up to 64 entries. Label keys and values may be no longer than 63 characters. Label keys must begin with a lowercase letter and may only contain lowercase letters, numeric characters, underscores, and dashes. */
		labels?: {[id: string]: string };

		/** MavenRepositoryConfig is maven related repository details. Provides additional configuration details for repositories of the maven format type. */
		mavenConfig?: MavenRepositoryConfig;

		/** Optional. The mode of the repository. */
		mode?: RepositoryMode | null;

		/** The name of the repository, for example: `projects/p1/locations/us-central1/repositories/repo1`. */
		name?: string | null;

		/** Remote repository configuration. */
		remoteRepositoryConfig?: RemoteRepositoryConfig;

		/** Output only. If set, the repository satisfies physical zone separation. */
		satisfiesPzs?: boolean | null;

		/** Output only. The size, in bytes, of all artifact storage in this repository. Repositories that are generally available or in public preview use this to calculate storage costs. */
		sizeBytes?: string | null;

		/** Output only. The time when the repository was last updated. */
		updateTime?: string | null;

		/** Virtual repository configuration. */
		virtualRepositoryConfig?: VirtualRepositoryConfig;
	}

	/** A Repository for storing artifacts with a specific format. */
	export interface RepositoryFormProperties {

		/** Optional. Cleanup policies for this repository. Cleanup policies indicate when certain package versions can be automatically deleted. Map keys are policy IDs supplied by users during policy creation. They must unique within a repository and be under 128 characters in length. */
		cleanupPolicies: FormControl<{[id: string]: CleanupPolicy } | null | undefined>,

		/** Optional. If true, the cleanup pipeline is prevented from deleting versions in this repository. */
		cleanupPolicyDryRun: FormControl<boolean | null | undefined>,

		/** Output only. The time when the repository was created. */
		createTime: FormControl<string | null | undefined>,

		/** The user-provided description of the repository. */
		description: FormControl<string | null | undefined>,

		/** Optional. The format of packages that are stored in the repository. */
		format: FormControl<RepositoryFormat | null | undefined>,

		/** The Cloud KMS resource name of the customer managed encryption key that's used to encrypt the contents of the Repository. Has the form: `projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key`. This value may not be changed after the Repository has been created. */
		kmsKeyName: FormControl<string | null | undefined>,

		/** Labels with user-defined metadata. This field may contain up to 64 entries. Label keys and values may be no longer than 63 characters. Label keys must begin with a lowercase letter and may only contain lowercase letters, numeric characters, underscores, and dashes. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The mode of the repository. */
		mode: FormControl<RepositoryMode | null | undefined>,

		/** The name of the repository, for example: `projects/p1/locations/us-central1/repositories/repo1`. */
		name: FormControl<string | null | undefined>,

		/** Output only. If set, the repository satisfies physical zone separation. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** Output only. The size, in bytes, of all artifact storage in this repository. Repositories that are generally available or in public preview use this to calculate storage costs. */
		sizeBytes: FormControl<string | null | undefined>,

		/** Output only. The time when the repository was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateRepositoryFormGroup() {
		return new FormGroup<RepositoryFormProperties>({
			cleanupPolicies: new FormControl<{[id: string]: CleanupPolicy } | null | undefined>(undefined),
			cleanupPolicyDryRun: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<RepositoryFormat | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			mode: new FormControl<RepositoryMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RepositoryFormat { FORMAT_UNSPECIFIED = 'FORMAT_UNSPECIFIED', DOCKER = 'DOCKER', MAVEN = 'MAVEN', NPM = 'NPM', APT = 'APT', YUM = 'YUM', GOOGET = 'GOOGET', PYTHON = 'PYTHON', KFP = 'KFP', GO = 'GO' }


	/** MavenRepositoryConfig is maven related repository details. Provides additional configuration details for repositories of the maven format type. */
	export interface MavenRepositoryConfig {

		/** The repository with this flag will allow publishing the same snapshot versions. */
		allowSnapshotOverwrites?: boolean | null;

		/** Version policy defines the versions that the registry will accept. */
		versionPolicy?: MavenRepositoryConfigVersionPolicy | null;
	}

	/** MavenRepositoryConfig is maven related repository details. Provides additional configuration details for repositories of the maven format type. */
	export interface MavenRepositoryConfigFormProperties {

		/** The repository with this flag will allow publishing the same snapshot versions. */
		allowSnapshotOverwrites: FormControl<boolean | null | undefined>,

		/** Version policy defines the versions that the registry will accept. */
		versionPolicy: FormControl<MavenRepositoryConfigVersionPolicy | null | undefined>,
	}
	export function CreateMavenRepositoryConfigFormGroup() {
		return new FormGroup<MavenRepositoryConfigFormProperties>({
			allowSnapshotOverwrites: new FormControl<boolean | null | undefined>(undefined),
			versionPolicy: new FormControl<MavenRepositoryConfigVersionPolicy | null | undefined>(undefined),
		});

	}

	export enum MavenRepositoryConfigVersionPolicy { VERSION_POLICY_UNSPECIFIED = 'VERSION_POLICY_UNSPECIFIED', RELEASE = 'RELEASE', SNAPSHOT = 'SNAPSHOT' }

	export enum RepositoryMode { MODE_UNSPECIFIED = 'MODE_UNSPECIFIED', STANDARD_REPOSITORY = 'STANDARD_REPOSITORY', VIRTUAL_REPOSITORY = 'VIRTUAL_REPOSITORY', REMOTE_REPOSITORY = 'REMOTE_REPOSITORY' }


	/** Remote repository configuration. */
	export interface RemoteRepositoryConfig {

		/** Configuration for an Apt remote repository. */
		aptRepository?: AptRepository;

		/** The description of the remote source. */
		description?: string | null;

		/** Configuration for a Docker remote repository. */
		dockerRepository?: DockerRepository;

		/** Configuration for a Maven remote repository. */
		mavenRepository?: MavenRepository;

		/** Configuration for a Npm remote repository. */
		npmRepository?: NpmRepository;

		/** Configuration for a Python remote repository. */
		pythonRepository?: PythonRepository;

		/** The credentials to access the remote repository. */
		upstreamCredentials?: UpstreamCredentials;

		/** Configuration for a Yum remote repository. */
		yumRepository?: YumRepository;
	}

	/** Remote repository configuration. */
	export interface RemoteRepositoryConfigFormProperties {

		/** The description of the remote source. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateRemoteRepositoryConfigFormGroup() {
		return new FormGroup<RemoteRepositoryConfigFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for a Maven remote repository. */
	export interface MavenRepository {

		/** One of the publicly available Maven repositories supported by Artifact Registry. */
		publicRepository?: MavenRepositoryPublicRepository | null;
	}

	/** Configuration for a Maven remote repository. */
	export interface MavenRepositoryFormProperties {

		/** One of the publicly available Maven repositories supported by Artifact Registry. */
		publicRepository: FormControl<MavenRepositoryPublicRepository | null | undefined>,
	}
	export function CreateMavenRepositoryFormGroup() {
		return new FormGroup<MavenRepositoryFormProperties>({
			publicRepository: new FormControl<MavenRepositoryPublicRepository | null | undefined>(undefined),
		});

	}

	export enum MavenRepositoryPublicRepository { PUBLIC_REPOSITORY_UNSPECIFIED = 'PUBLIC_REPOSITORY_UNSPECIFIED', MAVEN_CENTRAL = 'MAVEN_CENTRAL' }


	/** Configuration for a Npm remote repository. */
	export interface NpmRepository {

		/** One of the publicly available Npm repositories supported by Artifact Registry. */
		publicRepository?: NpmRepositoryPublicRepository | null;
	}

	/** Configuration for a Npm remote repository. */
	export interface NpmRepositoryFormProperties {

		/** One of the publicly available Npm repositories supported by Artifact Registry. */
		publicRepository: FormControl<NpmRepositoryPublicRepository | null | undefined>,
	}
	export function CreateNpmRepositoryFormGroup() {
		return new FormGroup<NpmRepositoryFormProperties>({
			publicRepository: new FormControl<NpmRepositoryPublicRepository | null | undefined>(undefined),
		});

	}

	export enum NpmRepositoryPublicRepository { PUBLIC_REPOSITORY_UNSPECIFIED = 'PUBLIC_REPOSITORY_UNSPECIFIED', NPMJS = 'NPMJS' }


	/** Configuration for a Python remote repository. */
	export interface PythonRepository {

		/** One of the publicly available Python repositories supported by Artifact Registry. */
		publicRepository?: PythonRepositoryPublicRepository | null;
	}

	/** Configuration for a Python remote repository. */
	export interface PythonRepositoryFormProperties {

		/** One of the publicly available Python repositories supported by Artifact Registry. */
		publicRepository: FormControl<PythonRepositoryPublicRepository | null | undefined>,
	}
	export function CreatePythonRepositoryFormGroup() {
		return new FormGroup<PythonRepositoryFormProperties>({
			publicRepository: new FormControl<PythonRepositoryPublicRepository | null | undefined>(undefined),
		});

	}

	export enum PythonRepositoryPublicRepository { PUBLIC_REPOSITORY_UNSPECIFIED = 'PUBLIC_REPOSITORY_UNSPECIFIED', PYPI = 'PYPI' }


	/** The credentials to access the remote repository. */
	export interface UpstreamCredentials {

		/** Username and password credentials. */
		usernamePasswordCredentials?: UsernamePasswordCredentials;
	}

	/** The credentials to access the remote repository. */
	export interface UpstreamCredentialsFormProperties {
	}
	export function CreateUpstreamCredentialsFormGroup() {
		return new FormGroup<UpstreamCredentialsFormProperties>({
		});

	}


	/** Username and password credentials. */
	export interface UsernamePasswordCredentials {

		/** The Secret Manager key version that holds the password to access the remote repository. Must be in the format of `projects/{project}/secrets/{secret}/versions/{version}`. */
		passwordSecretVersion?: string | null;

		/** The username to access the remote repository. */
		username?: string | null;
	}

	/** Username and password credentials. */
	export interface UsernamePasswordCredentialsFormProperties {

		/** The Secret Manager key version that holds the password to access the remote repository. Must be in the format of `projects/{project}/secrets/{secret}/versions/{version}`. */
		passwordSecretVersion: FormControl<string | null | undefined>,

		/** The username to access the remote repository. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUsernamePasswordCredentialsFormGroup() {
		return new FormGroup<UsernamePasswordCredentialsFormProperties>({
			passwordSecretVersion: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for a Yum remote repository. */
	export interface YumRepository {

		/** Publicly available Yum repositories constructed from a common repository base and a custom repository path. */
		publicRepository?: GoogleDevtoolsArtifactregistryV1RemoteRepositoryConfigYumRepositoryPublicRepository;
	}

	/** Configuration for a Yum remote repository. */
	export interface YumRepositoryFormProperties {
	}
	export function CreateYumRepositoryFormGroup() {
		return new FormGroup<YumRepositoryFormProperties>({
		});

	}


	/** Virtual repository configuration. */
	export interface VirtualRepositoryConfig {

		/** Policies that configure the upstream artifacts distributed by the Virtual Repository. Upstream policies cannot be set on a standard repository. */
		upstreamPolicies?: Array<UpstreamPolicy>;
	}

	/** Virtual repository configuration. */
	export interface VirtualRepositoryConfigFormProperties {
	}
	export function CreateVirtualRepositoryConfigFormGroup() {
		return new FormGroup<VirtualRepositoryConfigFormProperties>({
		});

	}


	/** Artifact policy configuration for the repository contents. */
	export interface UpstreamPolicy {

		/** The user-provided ID of the upstream policy. */
		id?: string | null;

		/** Entries with a greater priority value take precedence in the pull order. */
		priority?: number | null;

		/** A reference to the repository resource, for example: `projects/p1/locations/us-central1/repositories/repo1`. */
		repository?: string | null;
	}

	/** Artifact policy configuration for the repository contents. */
	export interface UpstreamPolicyFormProperties {

		/** The user-provided ID of the upstream policy. */
		id: FormControl<string | null | undefined>,

		/** Entries with a greater priority value take precedence in the pull order. */
		priority: FormControl<number | null | undefined>,

		/** A reference to the repository resource, for example: `projects/p1/locations/us-central1/repositories/repo1`. */
		repository: FormControl<string | null | undefined>,
	}
	export function CreateUpstreamPolicyFormGroup() {
		return new FormGroup<UpstreamPolicyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from listing tags. */
	export interface ListTagsResponse {

		/** The token to retrieve the next page of tags, or empty if there are no more tags to return. */
		nextPageToken?: string | null;

		/** The tags returned. */
		tags?: Array<Tag>;
	}

	/** The response from listing tags. */
	export interface ListTagsResponseFormProperties {

		/** The token to retrieve the next page of tags, or empty if there are no more tags to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tags point to a version and represent an alternative name that can be used to access the version. */
	export interface Tag {

		/** The name of the tag, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1". If the package part contains slashes, the slashes are escaped. The tag part can only have characters in [a-zA-Z0-9\-._~:@], anything else must be URL encoded. */
		name?: string | null;

		/** The name of the version the tag refers to, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/sha256:5243811" If the package or version ID parts contain slashes, the slashes are escaped. */
		version?: string | null;
	}

	/** Tags point to a version and represent an alternative name that can be used to access the version. */
	export interface TagFormProperties {

		/** The name of the tag, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1". If the package part contains slashes, the slashes are escaped. The tag part can only have characters in [a-zA-Z0-9\-._~:@], anything else must be URL encoded. */
		name: FormControl<string | null | undefined>,

		/** The name of the version the tag refers to, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/sha256:5243811" If the package or version ID parts contain slashes, the slashes are escaped. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from listing versions. */
	export interface ListVersionsResponse {

		/** The token to retrieve the next page of versions, or empty if there are no more versions to return. */
		nextPageToken?: string | null;

		/** The versions returned. */
		versions?: Array<Version>;
	}

	/** The response from listing versions. */
	export interface ListVersionsResponseFormProperties {

		/** The token to retrieve the next page of versions, or empty if there are no more versions to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListVersionsResponseFormGroup() {
		return new FormGroup<ListVersionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The body of a version resource. A version resource represents a collection of components, such as files and other data. This may correspond to a version in many package management schemes. */
	export interface Version {

		/** The time when the version was created. */
		createTime?: string | null;

		/** Optional. Description of the version, as specified in its metadata. */
		description?: string | null;

		/** Output only. Repository-specific Metadata stored against this version. The fields returned are defined by the underlying repository-specific resource. Currently, the resources could be: DockerImage MavenArtifact */
		metadata?: {[id: string]: any };

		/** The name of the version, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/art1". If the package or version ID parts contain slashes, the slashes are escaped. */
		name?: string | null;

		/** Output only. A list of related tags. Will contain up to 100 tags that reference this version. */
		relatedTags?: Array<Tag>;

		/** The time when the version was last updated. */
		updateTime?: string | null;
	}

	/** The body of a version resource. A version resource represents a collection of components, such as files and other data. This may correspond to a version in many package management schemes. */
	export interface VersionFormProperties {

		/** The time when the version was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of the version, as specified in its metadata. */
		description: FormControl<string | null | undefined>,

		/** Output only. Repository-specific Metadata stored against this version. The fields returned are defined by the underlying repository-specific resource. Currently, the resources could be: DockerImage MavenArtifact */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The name of the version, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/art1". If the package or version ID parts contain slashes, the slashes are escaped. */
		name: FormControl<string | null | undefined>,

		/** The time when the version was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateVersionFormGroup() {
		return new FormGroup<VersionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
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


	/** Metadata type for longrunning-operations, currently empty. */
	export interface OperationMetadata {
	}

	/** Metadata type for longrunning-operations, currently empty. */
	export interface OperationMetadataFormProperties {
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Artifact Registry settings that apply to a Project. */
	export interface ProjectSettings {

		/** The redirection state of the legacy repositories in this project. */
		legacyRedirectionState?: ProjectSettingsLegacyRedirectionState | null;

		/** The name of the project's settings. Always of the form: projects/{project-id}/projectSettings In update request: never set In response: always set */
		name?: string | null;
	}

	/** The Artifact Registry settings that apply to a Project. */
	export interface ProjectSettingsFormProperties {

		/** The redirection state of the legacy repositories in this project. */
		legacyRedirectionState: FormControl<ProjectSettingsLegacyRedirectionState | null | undefined>,

		/** The name of the project's settings. Always of the form: projects/{project-id}/projectSettings In update request: never set In response: always set */
		name: FormControl<string | null | undefined>,
	}
	export function CreateProjectSettingsFormGroup() {
		return new FormGroup<ProjectSettingsFormProperties>({
			legacyRedirectionState: new FormControl<ProjectSettingsLegacyRedirectionState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProjectSettingsLegacyRedirectionState { REDIRECTION_STATE_UNSPECIFIED = 'REDIRECTION_STATE_UNSPECIFIED', REDIRECTION_FROM_GCR_IO_DISABLED = 'REDIRECTION_FROM_GCR_IO_DISABLED', REDIRECTION_FROM_GCR_IO_ENABLED = 'REDIRECTION_FROM_GCR_IO_ENABLED', REDIRECTION_FROM_GCR_IO_FINALIZED = 'REDIRECTION_FROM_GCR_IO_FINALIZED' }


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequestFormProperties {
	}
	export function CreateTestIamPermissionsRequestFormGroup() {
		return new FormGroup<TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponseFormProperties {
	}
	export function CreateTestIamPermissionsResponseFormGroup() {
		return new FormGroup<TestIamPermissionsResponseFormProperties>({
		});

	}


	/** The response to upload an artifact. */
	export interface UploadAptArtifactMediaResponse {

		/** This resource represents a long-running operation that is the result of a network API call. */
		operation?: Operation;
	}

	/** The response to upload an artifact. */
	export interface UploadAptArtifactMediaResponseFormProperties {
	}
	export function CreateUploadAptArtifactMediaResponseFormGroup() {
		return new FormGroup<UploadAptArtifactMediaResponseFormProperties>({
		});

	}


	/** The operation metadata for uploading artifacts. */
	export interface UploadAptArtifactMetadata {
	}

	/** The operation metadata for uploading artifacts. */
	export interface UploadAptArtifactMetadataFormProperties {
	}
	export function CreateUploadAptArtifactMetadataFormGroup() {
		return new FormGroup<UploadAptArtifactMetadataFormProperties>({
		});

	}


	/** The request to upload an artifact. */
	export interface UploadAptArtifactRequest {
	}

	/** The request to upload an artifact. */
	export interface UploadAptArtifactRequestFormProperties {
	}
	export function CreateUploadAptArtifactRequestFormGroup() {
		return new FormGroup<UploadAptArtifactRequestFormProperties>({
		});

	}


	/** The response of the completed artifact upload operation. This response is contained in the Operation and available to users. */
	export interface UploadAptArtifactResponse {

		/** The Apt artifacts updated. */
		aptArtifacts?: Array<AptArtifact>;
	}

	/** The response of the completed artifact upload operation. This response is contained in the Operation and available to users. */
	export interface UploadAptArtifactResponseFormProperties {
	}
	export function CreateUploadAptArtifactResponseFormGroup() {
		return new FormGroup<UploadAptArtifactResponseFormProperties>({
		});

	}


	/** The response to upload a Go module. */
	export interface UploadGoModuleMediaResponse {

		/** This resource represents a long-running operation that is the result of a network API call. */
		operation?: Operation;
	}

	/** The response to upload a Go module. */
	export interface UploadGoModuleMediaResponseFormProperties {
	}
	export function CreateUploadGoModuleMediaResponseFormGroup() {
		return new FormGroup<UploadGoModuleMediaResponseFormProperties>({
		});

	}


	/** The operation metadata for uploading go modules. */
	export interface UploadGoModuleMetadata {
	}

	/** The operation metadata for uploading go modules. */
	export interface UploadGoModuleMetadataFormProperties {
	}
	export function CreateUploadGoModuleMetadataFormGroup() {
		return new FormGroup<UploadGoModuleMetadataFormProperties>({
		});

	}


	/** The request to upload a Go module. */
	export interface UploadGoModuleRequest {
	}

	/** The request to upload a Go module. */
	export interface UploadGoModuleRequestFormProperties {
	}
	export function CreateUploadGoModuleRequestFormGroup() {
		return new FormGroup<UploadGoModuleRequestFormProperties>({
		});

	}


	/** The response to upload an artifact. */
	export interface UploadGoogetArtifactMediaResponse {

		/** This resource represents a long-running operation that is the result of a network API call. */
		operation?: Operation;
	}

	/** The response to upload an artifact. */
	export interface UploadGoogetArtifactMediaResponseFormProperties {
	}
	export function CreateUploadGoogetArtifactMediaResponseFormGroup() {
		return new FormGroup<UploadGoogetArtifactMediaResponseFormProperties>({
		});

	}


	/** The operation metadata for uploading artifacts. */
	export interface UploadGoogetArtifactMetadata {
	}

	/** The operation metadata for uploading artifacts. */
	export interface UploadGoogetArtifactMetadataFormProperties {
	}
	export function CreateUploadGoogetArtifactMetadataFormGroup() {
		return new FormGroup<UploadGoogetArtifactMetadataFormProperties>({
		});

	}


	/** The request to upload an artifact. */
	export interface UploadGoogetArtifactRequest {
	}

	/** The request to upload an artifact. */
	export interface UploadGoogetArtifactRequestFormProperties {
	}
	export function CreateUploadGoogetArtifactRequestFormGroup() {
		return new FormGroup<UploadGoogetArtifactRequestFormProperties>({
		});

	}


	/** The response of the completed artifact upload operation. This response is contained in the Operation and available to users. */
	export interface UploadGoogetArtifactResponse {

		/** The GooGet artifacts updated. */
		googetArtifacts?: Array<GoogetArtifact>;
	}

	/** The response of the completed artifact upload operation. This response is contained in the Operation and available to users. */
	export interface UploadGoogetArtifactResponseFormProperties {
	}
	export function CreateUploadGoogetArtifactResponseFormGroup() {
		return new FormGroup<UploadGoogetArtifactResponseFormProperties>({
		});

	}


	/** The response to upload an artifact. */
	export interface UploadKfpArtifactMediaResponse {

		/** This resource represents a long-running operation that is the result of a network API call. */
		operation?: Operation;
	}

	/** The response to upload an artifact. */
	export interface UploadKfpArtifactMediaResponseFormProperties {
	}
	export function CreateUploadKfpArtifactMediaResponseFormGroup() {
		return new FormGroup<UploadKfpArtifactMediaResponseFormProperties>({
		});

	}


	/** The operation metadata for uploading KFP artifacts. */
	export interface UploadKfpArtifactMetadata {
	}

	/** The operation metadata for uploading KFP artifacts. */
	export interface UploadKfpArtifactMetadataFormProperties {
	}
	export function CreateUploadKfpArtifactMetadataFormGroup() {
		return new FormGroup<UploadKfpArtifactMetadataFormProperties>({
		});

	}


	/** The request to upload an artifact. */
	export interface UploadKfpArtifactRequest {

		/** Description of the package version. */
		description?: string | null;

		/** Tags to be created with the version. */
		tags?: Array<string>;
	}

	/** The request to upload an artifact. */
	export interface UploadKfpArtifactRequestFormProperties {

		/** Description of the package version. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUploadKfpArtifactRequestFormGroup() {
		return new FormGroup<UploadKfpArtifactRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to upload an artifact. */
	export interface UploadYumArtifactMediaResponse {

		/** This resource represents a long-running operation that is the result of a network API call. */
		operation?: Operation;
	}

	/** The response to upload an artifact. */
	export interface UploadYumArtifactMediaResponseFormProperties {
	}
	export function CreateUploadYumArtifactMediaResponseFormGroup() {
		return new FormGroup<UploadYumArtifactMediaResponseFormProperties>({
		});

	}


	/** The operation metadata for uploading artifacts. */
	export interface UploadYumArtifactMetadata {
	}

	/** The operation metadata for uploading artifacts. */
	export interface UploadYumArtifactMetadataFormProperties {
	}
	export function CreateUploadYumArtifactMetadataFormGroup() {
		return new FormGroup<UploadYumArtifactMetadataFormProperties>({
		});

	}


	/** The request to upload an artifact. */
	export interface UploadYumArtifactRequest {
	}

	/** The request to upload an artifact. */
	export interface UploadYumArtifactRequestFormProperties {
	}
	export function CreateUploadYumArtifactRequestFormGroup() {
		return new FormGroup<UploadYumArtifactRequestFormProperties>({
		});

	}


	/** The response of the completed artifact upload operation. This response is contained in the Operation and available to users. */
	export interface UploadYumArtifactResponse {

		/** The Yum artifacts updated. */
		yumArtifacts?: Array<YumArtifact>;
	}

	/** The response of the completed artifact upload operation. This response is contained in the Operation and available to users. */
	export interface UploadYumArtifactResponseFormProperties {
	}
	export function CreateUploadYumArtifactResponseFormGroup() {
		return new FormGroup<UploadYumArtifactResponseFormProperties>({
		});

	}


	/** The Artifact Registry VPC SC config that apply to a Project. */
	export interface VPCSCConfig {

		/** The name of the project's VPC SC Config. Always of the form: projects/{projectID}/locations/{location}/vpcscConfig In update request: never set In response: always set */
		name?: string | null;

		/** The project per location VPC SC policy that defines the VPC SC behavior for the Remote Repository (Allow/Deny). */
		vpcscPolicy?: VPCSCConfigVpcscPolicy | null;
	}

	/** The Artifact Registry VPC SC config that apply to a Project. */
	export interface VPCSCConfigFormProperties {

		/** The name of the project's VPC SC Config. Always of the form: projects/{projectID}/locations/{location}/vpcscConfig In update request: never set In response: always set */
		name: FormControl<string | null | undefined>,

		/** The project per location VPC SC policy that defines the VPC SC behavior for the Remote Repository (Allow/Deny). */
		vpcscPolicy: FormControl<VPCSCConfigVpcscPolicy | null | undefined>,
	}
	export function CreateVPCSCConfigFormGroup() {
		return new FormGroup<VPCSCConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			vpcscPolicy: new FormControl<VPCSCConfigVpcscPolicy | null | undefined>(undefined),
		});

	}

	export enum VPCSCConfigVpcscPolicy { VPCSC_POLICY_UNSPECIFIED = 'VPCSC_POLICY_UNSPECIFIED', DENY = 'DENY', ALLOW = 'ALLOW' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
		 * Delete v1/{name}
		 * @param {string} name The name of the version to delete.
		 * @param {boolean} force By default, a version that is tagged may not be deleted. If force=true, the version and any tags pointing to the version are deleted.
		 * @return {Operation} Successful response
		 */
		Artifactregistry_projects_locations_repositories_packages_versions_delete(name: string, force: boolean | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force, {});
		}

		/**
		 * Gets a python package.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the python package.
		 * @param {Artifactregistry_projects_locations_repositories_pythonPackages_getView} view The view that should be returned in the response.
		 * @return {PythonPackage} Successful response
		 */
		Artifactregistry_projects_locations_repositories_pythonPackages_get(name: string, view: Artifactregistry_projects_locations_repositories_pythonPackages_getView | null | undefined): Observable<PythonPackage> {
			return this.http.get<PythonPackage>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Updates a tag.
		 * Patch v1/{name}
		 * @param {string} name The name of the tag, for example: "projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/tags/tag1". If the package part contains slashes, the slashes are escaped. The tag part can only have characters in [a-zA-Z0-9\-._~:@], anything else must be URL encoded.
		 * @param {string} updateMask The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
		 * @return {Tag} Successful response
		 */
		Artifactregistry_projects_locations_repositories_packages_tags_patch(name: string, updateMask: string | null | undefined, requestBody: Tag): Observable<Tag> {
			return this.http.patch<Tag>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Artifactregistry_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
		 * Post v1/{parent}/aptArtifacts:import
		 * @param {string} parent The name of the parent resource where the artifacts will be imported.
		 * @return {Operation} Successful response
		 */
		Artifactregistry_projects_locations_repositories_aptArtifacts_import(parent: string, requestBody: ImportAptArtifactsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/aptArtifacts:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists docker images.
		 * Get v1/{parent}/dockerImages
		 * @param {string} parent Required. The name of the parent resource whose docker images will be listed.
		 * @param {string} orderBy The field to order the results by.
		 * @param {number} pageSize The maximum number of artifacts to return.
		 * @param {string} pageToken The next_page_token value returned from a previous list request, if any.
		 * @return {ListDockerImagesResponse} Successful response
		 */
		Artifactregistry_projects_locations_repositories_dockerImages_list(parent: string, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDockerImagesResponse> {
			return this.http.get<ListDockerImagesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dockerImages&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists files.
		 * Get v1/{parent}/files
		 * @param {string} parent Required. The name of the repository whose files will be listed. For example: "projects/p1/locations/us-central1/repositories/repo1
		 * @param {string} filter An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `owner` An example of using a filter: * `name="projects/p1/locations/us-central1/repositories/repo1/files/a/b/*"` --> Files with an ID starting with "a/b/". * `owner="projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/1.0"` --> Files owned by the version `1.0` in package `pkg1`.
		 * @param {string} orderBy The field to order the results by.
		 * @param {number} pageSize The maximum number of files to return.
		 * @param {string} pageToken The next_page_token value returned from a previous list request, if any.
		 * @return {ListFilesResponse} Successful response
		 */
		Artifactregistry_projects_locations_repositories_files_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListFilesResponse> {
			return this.http.get<ListFilesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/files&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Imports GooGet artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
		 * Post v1/{parent}/googetArtifacts:import
		 * @param {string} parent The name of the parent resource where the artifacts will be imported.
		 * @return {Operation} Successful response
		 */
		Artifactregistry_projects_locations_repositories_googetArtifacts_import(parent: string, requestBody: ImportGoogetArtifactsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/googetArtifacts:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists maven artifacts.
		 * Get v1/{parent}/mavenArtifacts
		 * @param {string} parent Required. The name of the parent resource whose maven artifacts will be listed.
		 * @param {number} pageSize The maximum number of artifacts to return.
		 * @param {string} pageToken The next_page_token value returned from a previous list request, if any.
		 * @return {ListMavenArtifactsResponse} Successful response
		 */
		Artifactregistry_projects_locations_repositories_mavenArtifacts_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListMavenArtifactsResponse> {
			return this.http.get<ListMavenArtifactsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/mavenArtifacts&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists npm packages.
		 * Get v1/{parent}/npmPackages
		 * @param {string} parent Required. The name of the parent resource whose npm packages will be listed.
		 * @param {number} pageSize The maximum number of artifacts to return.
		 * @param {string} pageToken The next_page_token value returned from a previous list request, if any.
		 * @return {ListNpmPackagesResponse} Successful response
		 */
		Artifactregistry_projects_locations_repositories_npmPackages_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNpmPackagesResponse> {
			return this.http.get<ListNpmPackagesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/npmPackages&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists packages.
		 * Get v1/{parent}/packages
		 * @param {string} parent Required. The name of the parent resource whose packages will be listed.
		 * @param {number} pageSize The maximum number of packages to return. Maximum page size is 1,000.
		 * @param {string} pageToken The next_page_token value returned from a previous list request, if any.
		 * @return {ListPackagesResponse} Successful response
		 */
		Artifactregistry_projects_locations_repositories_packages_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPackagesResponse> {
			return this.http.get<ListPackagesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/packages&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists python packages.
		 * Get v1/{parent}/pythonPackages
		 * @param {string} parent Required. The name of the parent resource whose python packages will be listed.
		 * @param {number} pageSize The maximum number of artifacts to return.
		 * @param {string} pageToken The next_page_token value returned from a previous list request, if any.
		 * @return {ListPythonPackagesResponse} Successful response
		 */
		Artifactregistry_projects_locations_repositories_pythonPackages_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPythonPackagesResponse> {
			return this.http.get<ListPythonPackagesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/pythonPackages&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists repositories.
		 * Get v1/{parent}/repositories
		 * @param {string} parent Required. The name of the parent resource whose repositories will be listed.
		 * @param {number} pageSize The maximum number of repositories to return. Maximum page size is 1,000.
		 * @param {string} pageToken The next_page_token value returned from a previous list request, if any.
		 * @return {ListRepositoriesResponse} Successful response
		 */
		Artifactregistry_projects_locations_repositories_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRepositoriesResponse> {
			return this.http.get<ListRepositoriesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/repositories&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
		 * Post v1/{parent}/repositories
		 * @param {string} parent Required. The name of the parent resource where the repository will be created.
		 * @param {string} repositoryId Required. The repository id to use for this repository.
		 * @return {Operation} Successful response
		 */
		Artifactregistry_projects_locations_repositories_create(parent: string, repositoryId: string | null | undefined, requestBody: Repository): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/repositories&repositoryId=' + (repositoryId == null ? '' : encodeURIComponent(repositoryId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists tags.
		 * Get v1/{parent}/tags
		 * @param {string} parent The name of the parent package whose tags will be listed. For example: `projects/p1/locations/us-central1/repositories/repo1/packages/pkg1`.
		 * @param {string} filter An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: * `version` An example of using a filter: * `version="projects/p1/locations/us-central1/repositories/repo1/packages/pkg1/versions/1.0"` --> Tags that are applied to the version `1.0` in package `pkg1`.
		 * @param {number} pageSize The maximum number of tags to return. Maximum page size is 10,000.
		 * @param {string} pageToken The next_page_token value returned from a previous list request, if any.
		 * @return {ListTagsResponse} Successful response
		 */
		Artifactregistry_projects_locations_repositories_packages_tags_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTagsResponse> {
			return this.http.get<ListTagsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tags&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a tag.
		 * Post v1/{parent}/tags
		 * @param {string} parent The name of the parent resource where the tag will be created.
		 * @param {string} tagId The tag id to use for this repository.
		 * @return {Tag} Successful response
		 */
		Artifactregistry_projects_locations_repositories_packages_tags_create(parent: string, tagId: string | null | undefined, requestBody: Tag): Observable<Tag> {
			return this.http.post<Tag>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tags&tagId=' + (tagId == null ? '' : encodeURIComponent(tagId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists versions.
		 * Get v1/{parent}/versions
		 * @param {string} parent The name of the parent resource whose versions will be listed.
		 * @param {string} orderBy Optional. The field to order the results by.
		 * @param {number} pageSize The maximum number of versions to return. Maximum page size is 1,000.
		 * @param {string} pageToken The next_page_token value returned from a previous list request, if any.
		 * @param {Artifactregistry_projects_locations_repositories_pythonPackages_getView} view The view that should be returned in the response.
		 * @return {ListVersionsResponse} Successful response
		 */
		Artifactregistry_projects_locations_repositories_packages_versions_list(parent: string, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Artifactregistry_projects_locations_repositories_pythonPackages_getView | null | undefined): Observable<ListVersionsResponse> {
			return this.http.get<ListVersionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Deletes multiple versions across a repository. The returned operation will complete once the versions have been deleted.
		 * Post v1/{parent}/versions:batchDelete
		 * @param {string} parent The name of the repository holding all requested versions.
		 * @return {Operation} Successful response
		 */
		Artifactregistry_projects_locations_repositories_packages_versions_batchDelete(parent: string, requestBody: BatchDeleteVersionsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions:batchDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports Yum (RPM) artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
		 * Post v1/{parent}/yumArtifacts:import
		 * @param {string} parent The name of the parent resource where the artifacts will be imported.
		 * @return {Operation} Successful response
		 */
		Artifactregistry_projects_locations_repositories_yumArtifacts_import(parent: string, requestBody: ImportYumArtifactsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/yumArtifacts:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the IAM policy for a given resource.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Artifactregistry_projects_locations_repositories_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Updates the IAM policy for a given resource.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Artifactregistry_projects_locations_repositories_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests if the caller has a list of permissions on a resource.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Artifactregistry_projects_locations_repositories_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Artifactregistry_projects_locations_repositories_pythonPackages_getView { VERSION_VIEW_UNSPECIFIED = 'VERSION_VIEW_UNSPECIFIED', BASIC = 'BASIC', FULL = 'FULL' }

}

