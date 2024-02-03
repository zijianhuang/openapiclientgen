import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateTeamMemberResult {
		clientRequestToken?: string;
	}
	export interface AssociateTeamMemberResultFormProperties {
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTeamMemberResultFormGroup() {
		return new FormGroup<AssociateTeamMemberResultFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateTeamMemberRequest {

		/** Required */
		projectId: string;
		clientRequestToken?: string;

		/** Required */
		userArn: string;

		/** Required */
		projectRole: string;
		remoteAccessAllowed?: boolean | null;
	}
	export interface AssociateTeamMemberRequestFormProperties {

		/** Required */
		projectId: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		userArn: FormControl<string | null | undefined>,

		/** Required */
		projectRole: FormControl<string | null | undefined>,
		remoteAccessAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateAssociateTeamMemberRequestFormGroup() {
		return new FormGroup<AssociateTeamMemberRequestFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			remoteAccessAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface ProjectNotFoundException {
	}
	export interface ProjectNotFoundExceptionFormProperties {
	}
	export function CreateProjectNotFoundExceptionFormGroup() {
		return new FormGroup<ProjectNotFoundExceptionFormProperties>({
		});

	}

	export interface TeamMemberAlreadyAssociatedException {
	}
	export interface TeamMemberAlreadyAssociatedExceptionFormProperties {
	}
	export function CreateTeamMemberAlreadyAssociatedExceptionFormGroup() {
		return new FormGroup<TeamMemberAlreadyAssociatedExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface InvalidServiceRoleException {
	}
	export interface InvalidServiceRoleExceptionFormProperties {
	}
	export function CreateInvalidServiceRoleExceptionFormGroup() {
		return new FormGroup<InvalidServiceRoleExceptionFormProperties>({
		});

	}

	export interface ProjectConfigurationException {
	}
	export interface ProjectConfigurationExceptionFormProperties {
	}
	export function CreateProjectConfigurationExceptionFormGroup() {
		return new FormGroup<ProjectConfigurationExceptionFormProperties>({
		});

	}

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}

	export interface CreateProjectResult {

		/** Required */
		id: string;

		/** Required */
		arn: string;
		clientRequestToken?: string;
		projectTemplateId?: string;
	}
	export interface CreateProjectResultFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		projectTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectResultFormGroup() {
		return new FormGroup<CreateProjectResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			projectTemplateId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProjectRequest {

		/** Required */
		name: string;

		/** Required */
		id: string;
		description?: string;
		clientRequestToken?: string;
		sourceCode?: Array<Code>;
		toolchain?: Toolchain;
		tags?: Tags;
	}
	export interface CreateProjectRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectRequestFormGroup() {
		return new FormGroup<CreateProjectRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location and destination information about the source code files provided with the project request. The source code is uploaded to the new project source repository after project creation. */
	export interface Code {

		/** Required */
		source: CodeSource;

		/** Required */
		destination: CodeDestination;
	}

	/** Location and destination information about the source code files provided with the project request. The source code is uploaded to the new project source repository after project creation. */
	export interface CodeFormProperties {
	}
	export function CreateCodeFormGroup() {
		return new FormGroup<CodeFormProperties>({
		});

	}


	/** The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation. */
	export interface CodeSource {

		/** Required */
		s3: S3Location;
	}

	/** The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation. */
	export interface CodeSourceFormProperties {
	}
	export function CreateCodeSourceFormGroup() {
		return new FormGroup<CodeSourceFormProperties>({
		});

	}


	/** The Amazon S3 location where the source code files provided with the project request are stored. */
	export interface S3Location {
		bucketName?: string;
		bucketKey?: string;
	}

	/** The Amazon S3 location where the source code files provided with the project request are stored. */
	export interface S3LocationFormProperties {
		bucketName: FormControl<string | null | undefined>,
		bucketKey: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			bucketKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository. */
	export interface CodeDestination {
		codeCommit?: CodeCommitCodeDestination;
		gitHub?: GitHubCodeDestination;
	}

	/** The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository. */
	export interface CodeDestinationFormProperties {
	}
	export function CreateCodeDestinationFormGroup() {
		return new FormGroup<CodeDestinationFormProperties>({
		});

	}


	/** Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
	export interface CodeCommitCodeDestination {

		/** Required */
		name: string;
	}

	/** Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
	export interface CodeCommitCodeDestinationFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCodeCommitCodeDestinationFormGroup() {
		return new FormGroup<CodeCommitCodeDestinationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
	export interface GitHubCodeDestination {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		type: string;

		/** Required */
		owner: string;

		/** Required */
		privateRepository: boolean;

		/** Required */
		issuesEnabled: boolean;

		/** Required */
		token: string;
	}

	/** Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
	export interface GitHubCodeDestinationFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/** Required */
		privateRepository: FormControl<boolean | null | undefined>,

		/** Required */
		issuesEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,
	}
	export function CreateGitHubCodeDestinationFormGroup() {
		return new FormGroup<GitHubCodeDestinationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			privateRepository: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			issuesEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation. */
	export interface Toolchain {

		/** Required */
		source: ToolchainSource;
		roleArn?: string;
		stackParameters?: TemplateParameterMap;
	}

	/** The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation. */
	export interface ToolchainFormProperties {
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateToolchainFormGroup() {
		return new FormGroup<ToolchainFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation. */
	export interface ToolchainSource {

		/** Required */
		s3: S3Location;
	}

	/** The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation. */
	export interface ToolchainSourceFormProperties {
	}
	export function CreateToolchainSourceFormGroup() {
		return new FormGroup<ToolchainSourceFormProperties>({
		});

	}

	export interface TemplateParameterMap {
	}
	export interface TemplateParameterMapFormProperties {
	}
	export function CreateTemplateParameterMapFormGroup() {
		return new FormGroup<TemplateParameterMapFormProperties>({
		});

	}

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}

	export interface ProjectAlreadyExistsException {
	}
	export interface ProjectAlreadyExistsExceptionFormProperties {
	}
	export function CreateProjectAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ProjectAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface ProjectCreationFailedException {
	}
	export interface ProjectCreationFailedExceptionFormProperties {
	}
	export function CreateProjectCreationFailedExceptionFormGroup() {
		return new FormGroup<ProjectCreationFailedExceptionFormProperties>({
		});

	}

	export interface CreateUserProfileResult {

		/** Required */
		userArn: string;
		displayName?: string;
		emailAddress?: string;
		sshPublicKey?: string;
		createdTimestamp?: Date;
		lastModifiedTimestamp?: Date;
	}
	export interface CreateUserProfileResultFormProperties {

		/** Required */
		userArn: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		emailAddress: FormControl<string | null | undefined>,
		sshPublicKey: FormControl<string | null | undefined>,
		createdTimestamp: FormControl<Date | null | undefined>,
		lastModifiedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateCreateUserProfileResultFormGroup() {
		return new FormGroup<CreateUserProfileResultFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			sshPublicKey: new FormControl<string | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateUserProfileRequest {

		/** Required */
		userArn: string;

		/** Required */
		displayName: string;

		/** Required */
		emailAddress: string;
		sshPublicKey?: string;
	}
	export interface CreateUserProfileRequestFormProperties {

		/** Required */
		userArn: FormControl<string | null | undefined>,

		/** Required */
		displayName: FormControl<string | null | undefined>,

		/** Required */
		emailAddress: FormControl<string | null | undefined>,
		sshPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserProfileRequestFormGroup() {
		return new FormGroup<CreateUserProfileRequestFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sshPublicKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserProfileAlreadyExistsException {
	}
	export interface UserProfileAlreadyExistsExceptionFormProperties {
	}
	export function CreateUserProfileAlreadyExistsExceptionFormGroup() {
		return new FormGroup<UserProfileAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface DeleteProjectResult {
		stackId?: string;
		projectArn?: string;
	}
	export interface DeleteProjectResultFormProperties {
		stackId: FormControl<string | null | undefined>,
		projectArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProjectResultFormGroup() {
		return new FormGroup<DeleteProjectResultFormProperties>({
			stackId: new FormControl<string | null | undefined>(undefined),
			projectArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteProjectRequest {

		/** Required */
		id: string;
		clientRequestToken?: string;
		deleteStack?: boolean | null;
	}
	export interface DeleteProjectRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		deleteStack: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteProjectRequestFormGroup() {
		return new FormGroup<DeleteProjectRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			deleteStack: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteUserProfileResult {

		/** Required */
		userArn: string;
	}
	export interface DeleteUserProfileResultFormProperties {

		/** Required */
		userArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserProfileResultFormGroup() {
		return new FormGroup<DeleteUserProfileResultFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteUserProfileRequest {

		/** Required */
		userArn: string;
	}
	export interface DeleteUserProfileRequestFormProperties {

		/** Required */
		userArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserProfileRequestFormGroup() {
		return new FormGroup<DeleteUserProfileRequestFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeProjectResult {
		name?: string;
		id?: string;
		arn?: string;
		description?: string;
		clientRequestToken?: string;
		createdTimeStamp?: Date;
		stackId?: string;
		projectTemplateId?: string;
		status?: ProjectStatus;
	}
	export interface DescribeProjectResultFormProperties {
		name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		createdTimeStamp: FormControl<Date | null | undefined>,
		stackId: FormControl<string | null | undefined>,
		projectTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProjectResultFormGroup() {
		return new FormGroup<DescribeProjectResultFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			createdTimeStamp: new FormControl<Date | null | undefined>(undefined),
			stackId: new FormControl<string | null | undefined>(undefined),
			projectTemplateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An indication of whether a project creation or deletion is failed or successful. */
	export interface ProjectStatus {

		/** Required */
		state: string;
		reason?: string;
	}

	/** An indication of whether a project creation or deletion is failed or successful. */
	export interface ProjectStatusFormProperties {

		/** Required */
		state: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateProjectStatusFormGroup() {
		return new FormGroup<ProjectStatusFormProperties>({
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeProjectRequest {

		/** Required */
		id: string;
	}
	export interface DescribeProjectRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProjectRequestFormGroup() {
		return new FormGroup<DescribeProjectRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeUserProfileResult {

		/** Required */
		userArn: string;
		displayName?: string;
		emailAddress?: string;
		sshPublicKey?: string;

		/** Required */
		createdTimestamp: Date;

		/** Required */
		lastModifiedTimestamp: Date;
	}
	export interface DescribeUserProfileResultFormProperties {

		/** Required */
		userArn: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		emailAddress: FormControl<string | null | undefined>,
		sshPublicKey: FormControl<string | null | undefined>,

		/** Required */
		createdTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		lastModifiedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeUserProfileResultFormGroup() {
		return new FormGroup<DescribeUserProfileResultFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			sshPublicKey: new FormControl<string | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeUserProfileRequest {

		/** Required */
		userArn: string;
	}
	export interface DescribeUserProfileRequestFormProperties {

		/** Required */
		userArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserProfileRequestFormGroup() {
		return new FormGroup<DescribeUserProfileRequestFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserProfileNotFoundException {
	}
	export interface UserProfileNotFoundExceptionFormProperties {
	}
	export function CreateUserProfileNotFoundExceptionFormGroup() {
		return new FormGroup<UserProfileNotFoundExceptionFormProperties>({
		});

	}

	export interface DisassociateTeamMemberResult {
	}
	export interface DisassociateTeamMemberResultFormProperties {
	}
	export function CreateDisassociateTeamMemberResultFormGroup() {
		return new FormGroup<DisassociateTeamMemberResultFormProperties>({
		});

	}

	export interface DisassociateTeamMemberRequest {

		/** Required */
		projectId: string;

		/** Required */
		userArn: string;
	}
	export interface DisassociateTeamMemberRequestFormProperties {

		/** Required */
		projectId: FormControl<string | null | undefined>,

		/** Required */
		userArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateTeamMemberRequestFormGroup() {
		return new FormGroup<DisassociateTeamMemberRequestFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListProjectsResult {

		/** Required */
		projects: Array<ProjectSummary>;
		nextToken?: string;
	}
	export interface ListProjectsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsResultFormGroup() {
		return new FormGroup<ListProjectsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the metadata for a project. */
	export interface ProjectSummary {
		projectId?: string;
		projectArn?: string;
	}

	/** Information about the metadata for a project. */
	export interface ProjectSummaryFormProperties {
		projectId: FormControl<string | null | undefined>,
		projectArn: FormControl<string | null | undefined>,
	}
	export function CreateProjectSummaryFormGroup() {
		return new FormGroup<ProjectSummaryFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
			projectArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProjectsRequest {
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListProjectsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListProjectsRequestFormGroup() {
		return new FormGroup<ListProjectsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface ListResourcesResult {
		resources?: Array<Resource>;
		nextToken?: string;
	}
	export interface ListResourcesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesResultFormGroup() {
		return new FormGroup<ListResourcesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a resource for a project. */
	export interface Resource {

		/** Required */
		id: string;
	}

	/** Information about a resource for a project. */
	export interface ResourceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListResourcesRequest {

		/** Required */
		projectId: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListResourcesRequestFormProperties {

		/** Required */
		projectId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourcesRequestFormGroup() {
		return new FormGroup<ListResourcesRequestFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForProjectResult {
		tags?: Tags;
		nextToken?: string;
	}
	export interface ListTagsForProjectResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForProjectResultFormGroup() {
		return new FormGroup<ListTagsForProjectResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForProjectRequest {

		/** Required */
		id: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListTagsForProjectRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForProjectRequestFormGroup() {
		return new FormGroup<ListTagsForProjectRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTeamMembersResult {

		/** Required */
		teamMembers: Array<TeamMember>;
		nextToken?: string;
	}
	export interface ListTeamMembersResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTeamMembersResultFormGroup() {
		return new FormGroup<ListTeamMembersResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a team member in a project. */
	export interface TeamMember {

		/** Required */
		userArn: string;

		/** Required */
		projectRole: string;
		remoteAccessAllowed?: boolean | null;
	}

	/** Information about a team member in a project. */
	export interface TeamMemberFormProperties {

		/** Required */
		userArn: FormControl<string | null | undefined>,

		/** Required */
		projectRole: FormControl<string | null | undefined>,
		remoteAccessAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateTeamMemberFormGroup() {
		return new FormGroup<TeamMemberFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			remoteAccessAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListTeamMembersRequest {

		/** Required */
		projectId: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListTeamMembersRequestFormProperties {

		/** Required */
		projectId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTeamMembersRequestFormGroup() {
		return new FormGroup<ListTeamMembersRequestFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListUserProfilesResult {

		/** Required */
		userProfiles: Array<UserProfileSummary>;
		nextToken?: string;
	}
	export interface ListUserProfilesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserProfilesResultFormGroup() {
		return new FormGroup<ListUserProfilesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a user's profile in AWS CodeStar. */
	export interface UserProfileSummary {
		userArn?: string;
		displayName?: string;
		emailAddress?: string;
		sshPublicKey?: string;
	}

	/** Information about a user's profile in AWS CodeStar. */
	export interface UserProfileSummaryFormProperties {
		userArn: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		emailAddress: FormControl<string | null | undefined>,
		sshPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateUserProfileSummaryFormGroup() {
		return new FormGroup<UserProfileSummaryFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			sshPublicKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUserProfilesRequest {
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListUserProfilesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListUserProfilesRequestFormGroup() {
		return new FormGroup<ListUserProfilesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagProjectResult {
		tags?: Tags;
	}
	export interface TagProjectResultFormProperties {
	}
	export function CreateTagProjectResultFormGroup() {
		return new FormGroup<TagProjectResultFormProperties>({
		});

	}

	export interface TagProjectRequest {

		/** Required */
		id: string;

		/** Required */
		tags: Tags;
	}
	export interface TagProjectRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateTagProjectRequestFormGroup() {
		return new FormGroup<TagProjectRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagProjectResult {
	}
	export interface UntagProjectResultFormProperties {
	}
	export function CreateUntagProjectResultFormGroup() {
		return new FormGroup<UntagProjectResultFormProperties>({
		});

	}

	export interface UntagProjectRequest {

		/** Required */
		id: string;

		/** Required */
		tags: Array<string>;
	}
	export interface UntagProjectRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUntagProjectRequestFormGroup() {
		return new FormGroup<UntagProjectRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateProjectResult {
	}
	export interface UpdateProjectResultFormProperties {
	}
	export function CreateUpdateProjectResultFormGroup() {
		return new FormGroup<UpdateProjectResultFormProperties>({
		});

	}

	export interface UpdateProjectRequest {

		/** Required */
		id: string;
		name?: string;
		description?: string;
	}
	export interface UpdateProjectRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectRequestFormGroup() {
		return new FormGroup<UpdateProjectRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTeamMemberResult {
		userArn?: string;
		projectRole?: string;
		remoteAccessAllowed?: boolean | null;
	}
	export interface UpdateTeamMemberResultFormProperties {
		userArn: FormControl<string | null | undefined>,
		projectRole: FormControl<string | null | undefined>,
		remoteAccessAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateTeamMemberResultFormGroup() {
		return new FormGroup<UpdateTeamMemberResultFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined),
			projectRole: new FormControl<string | null | undefined>(undefined),
			remoteAccessAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateTeamMemberRequest {

		/** Required */
		projectId: string;

		/** Required */
		userArn: string;
		projectRole?: string;
		remoteAccessAllowed?: boolean | null;
	}
	export interface UpdateTeamMemberRequestFormProperties {

		/** Required */
		projectId: FormControl<string | null | undefined>,

		/** Required */
		userArn: FormControl<string | null | undefined>,
		projectRole: FormControl<string | null | undefined>,
		remoteAccessAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateTeamMemberRequestFormGroup() {
		return new FormGroup<UpdateTeamMemberRequestFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectRole: new FormControl<string | null | undefined>(undefined),
			remoteAccessAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TeamMemberNotFoundException {
	}
	export interface TeamMemberNotFoundExceptionFormProperties {
	}
	export function CreateTeamMemberNotFoundExceptionFormGroup() {
		return new FormGroup<TeamMemberNotFoundExceptionFormProperties>({
		});

	}

	export interface UpdateUserProfileResult {

		/** Required */
		userArn: string;
		displayName?: string;
		emailAddress?: string;
		sshPublicKey?: string;
		createdTimestamp?: Date;
		lastModifiedTimestamp?: Date;
	}
	export interface UpdateUserProfileResultFormProperties {

		/** Required */
		userArn: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		emailAddress: FormControl<string | null | undefined>,
		sshPublicKey: FormControl<string | null | undefined>,
		createdTimestamp: FormControl<Date | null | undefined>,
		lastModifiedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateUserProfileResultFormGroup() {
		return new FormGroup<UpdateUserProfileResultFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			sshPublicKey: new FormControl<string | null | undefined>(undefined),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateUserProfileRequest {

		/** Required */
		userArn: string;
		displayName?: string;
		emailAddress?: string;
		sshPublicKey?: string;
	}
	export interface UpdateUserProfileRequestFormProperties {

		/** Required */
		userArn: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		emailAddress: FormControl<string | null | undefined>,
		sshPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserProfileRequestFormGroup() {
		return new FormGroup<UpdateUserProfileRequestFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			sshPublicKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds an IAM user to the team for an AWS CodeStar project.
		 * Post #X-Amz-Target=CodeStar_20170419.AssociateTeamMember
		 * @return {AssociateTeamMemberResult} Success
		 */
		AssociateTeamMember(requestBody: AssociateTeamMemberRequest): Observable<AssociateTeamMemberResult> {
			return this.http.post<AssociateTeamMemberResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.AssociateTeamMember', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a project, including project resources. This action creates a project based on a submitted project request. A set of source code files and a toolchain template file can be included with the project request. If these are not provided, an empty project is created.
		 * Post #X-Amz-Target=CodeStar_20170419.CreateProject
		 * @return {CreateProjectResult} Success
		 */
		CreateProject(requestBody: CreateProjectRequest): Observable<CreateProjectResult> {
			return this.http.post<CreateProjectResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.CreateProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.
		 * Post #X-Amz-Target=CodeStar_20170419.CreateUserProfile
		 * @return {CreateUserProfileResult} Success
		 */
		CreateUserProfile(requestBody: CreateUserProfileRequest): Observable<CreateUserProfileResult> {
			return this.http.post<CreateUserProfileResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.CreateUserProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.
		 * Post #X-Amz-Target=CodeStar_20170419.DeleteProject
		 * @return {DeleteProjectResult} Success
		 */
		DeleteProject(requestBody: DeleteProjectRequest): Observable<DeleteProjectResult> {
			return this.http.post<DeleteProjectResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.DeleteProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.
		 * Post #X-Amz-Target=CodeStar_20170419.DeleteUserProfile
		 * @return {DeleteUserProfileResult} Success
		 */
		DeleteUserProfile(requestBody: DeleteUserProfileRequest): Observable<DeleteUserProfileResult> {
			return this.http.post<DeleteUserProfileResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.DeleteUserProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a project and its resources.
		 * Post #X-Amz-Target=CodeStar_20170419.DescribeProject
		 * @return {DescribeProjectResult} Success
		 */
		DescribeProject(requestBody: DescribeProjectRequest): Observable<DescribeProjectResult> {
			return this.http.post<DescribeProjectResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.DescribeProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a user in AWS CodeStar and the user attributes across all projects.
		 * Post #X-Amz-Target=CodeStar_20170419.DescribeUserProfile
		 * @return {DescribeUserProfileResult} Success
		 */
		DescribeUserProfile(requestBody: DescribeUserProfileRequest): Observable<DescribeUserProfileResult> {
			return this.http.post<DescribeUserProfileResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.DescribeUserProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.
		 * Post #X-Amz-Target=CodeStar_20170419.DisassociateTeamMember
		 * @return {DisassociateTeamMemberResult} Success
		 */
		DisassociateTeamMember(requestBody: DisassociateTeamMemberRequest): Observable<DisassociateTeamMemberResult> {
			return this.http.post<DisassociateTeamMemberResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all projects in AWS CodeStar associated with your AWS account.
		 * Post #X-Amz-Target=CodeStar_20170419.ListProjects
		 * @return {ListProjectsResult} Success
		 */
		ListProjects(requestBody: ListProjectsRequest): Observable<ListProjectsResult> {
			return this.http.post<ListProjectsResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.ListProjects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists resources associated with a project in AWS CodeStar.
		 * Post #X-Amz-Target=CodeStar_20170419.ListResources
		 * @return {ListResourcesResult} Success
		 */
		ListResources(requestBody: ListResourcesRequest): Observable<ListResourcesResult> {
			return this.http.post<ListResourcesResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.ListResources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the tags for a project.
		 * Post #X-Amz-Target=CodeStar_20170419.ListTagsForProject
		 * @return {ListTagsForProjectResult} Success
		 */
		ListTagsForProject(requestBody: ListTagsForProjectRequest): Observable<ListTagsForProjectResult> {
			return this.http.post<ListTagsForProjectResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.ListTagsForProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all team members associated with a project.
		 * Post #X-Amz-Target=CodeStar_20170419.ListTeamMembers
		 * @return {ListTeamMembersResult} Success
		 */
		ListTeamMembers(requestBody: ListTeamMembersRequest): Observable<ListTeamMembersResult> {
			return this.http.post<ListTeamMembersResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.ListTeamMembers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the user profiles configured for your AWS account in AWS CodeStar.
		 * Post #X-Amz-Target=CodeStar_20170419.ListUserProfiles
		 * @return {ListUserProfilesResult} Success
		 */
		ListUserProfiles(requestBody: ListUserProfilesRequest): Observable<ListUserProfilesResult> {
			return this.http.post<ListUserProfilesResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.ListUserProfiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds tags to a project.
		 * Post #X-Amz-Target=CodeStar_20170419.TagProject
		 * @return {TagProjectResult} Success
		 */
		TagProject(requestBody: TagProjectRequest): Observable<TagProjectResult> {
			return this.http.post<TagProjectResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.TagProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a project.
		 * Post #X-Amz-Target=CodeStar_20170419.UntagProject
		 * @return {UntagProjectResult} Success
		 */
		UntagProject(requestBody: UntagProjectRequest): Observable<UntagProjectResult> {
			return this.http.post<UntagProjectResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.UntagProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a project in AWS CodeStar.
		 * Post #X-Amz-Target=CodeStar_20170419.UpdateProject
		 * @return {UpdateProjectResult} Success
		 */
		UpdateProject(requestBody: UpdateProjectRequest): Observable<UpdateProjectResult> {
			return this.http.post<UpdateProjectResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.UpdateProject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.
		 * Post #X-Amz-Target=CodeStar_20170419.UpdateTeamMember
		 * @return {UpdateTeamMemberResult} Success
		 */
		UpdateTeamMember(requestBody: UpdateTeamMemberRequest): Observable<UpdateTeamMemberResult> {
			return this.http.post<UpdateTeamMemberResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.UpdateTeamMember', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.
		 * Post #X-Amz-Target=CodeStar_20170419.UpdateUserProfile
		 * @return {UpdateUserProfileResult} Success
		 */
		UpdateUserProfile(requestBody: UpdateUserProfileRequest): Observable<UpdateUserProfileResult> {
			return this.http.post<UpdateUserProfileResult>(this.baseUri + '#X-Amz-Target=CodeStar_20170419.UpdateUserProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateTeamMemberX_Amz_Target { 'CodeStar_20170419.AssociateTeamMember' = 'CodeStar_20170419.AssociateTeamMember' }

	export enum CreateProjectX_Amz_Target { 'CodeStar_20170419.CreateProject' = 'CodeStar_20170419.CreateProject' }

	export enum CreateUserProfileX_Amz_Target { 'CodeStar_20170419.CreateUserProfile' = 'CodeStar_20170419.CreateUserProfile' }

	export enum DeleteProjectX_Amz_Target { 'CodeStar_20170419.DeleteProject' = 'CodeStar_20170419.DeleteProject' }

	export enum DeleteUserProfileX_Amz_Target { 'CodeStar_20170419.DeleteUserProfile' = 'CodeStar_20170419.DeleteUserProfile' }

	export enum DescribeProjectX_Amz_Target { 'CodeStar_20170419.DescribeProject' = 'CodeStar_20170419.DescribeProject' }

	export enum DescribeUserProfileX_Amz_Target { 'CodeStar_20170419.DescribeUserProfile' = 'CodeStar_20170419.DescribeUserProfile' }

	export enum DisassociateTeamMemberX_Amz_Target { 'CodeStar_20170419.DisassociateTeamMember' = 'CodeStar_20170419.DisassociateTeamMember' }

	export enum ListProjectsX_Amz_Target { 'CodeStar_20170419.ListProjects' = 'CodeStar_20170419.ListProjects' }

	export enum ListResourcesX_Amz_Target { 'CodeStar_20170419.ListResources' = 'CodeStar_20170419.ListResources' }

	export enum ListTagsForProjectX_Amz_Target { 'CodeStar_20170419.ListTagsForProject' = 'CodeStar_20170419.ListTagsForProject' }

	export enum ListTeamMembersX_Amz_Target { 'CodeStar_20170419.ListTeamMembers' = 'CodeStar_20170419.ListTeamMembers' }

	export enum ListUserProfilesX_Amz_Target { 'CodeStar_20170419.ListUserProfiles' = 'CodeStar_20170419.ListUserProfiles' }

	export enum TagProjectX_Amz_Target { 'CodeStar_20170419.TagProject' = 'CodeStar_20170419.TagProject' }

	export enum UntagProjectX_Amz_Target { 'CodeStar_20170419.UntagProject' = 'CodeStar_20170419.UntagProject' }

	export enum UpdateProjectX_Amz_Target { 'CodeStar_20170419.UpdateProject' = 'CodeStar_20170419.UpdateProject' }

	export enum UpdateTeamMemberX_Amz_Target { 'CodeStar_20170419.UpdateTeamMember' = 'CodeStar_20170419.UpdateTeamMember' }

	export enum UpdateUserProfileX_Amz_Target { 'CodeStar_20170419.UpdateUserProfile' = 'CodeStar_20170419.UpdateUserProfile' }

}

