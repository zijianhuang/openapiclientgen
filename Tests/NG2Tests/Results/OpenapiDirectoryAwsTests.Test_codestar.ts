import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AssociateTeamMemberResult {
		clientRequestToken?: string;
	}

	export interface AssociateTeamMemberRequest {
		projectId: string;
		clientRequestToken?: string;
		userArn: string;
		projectRole: string;
		remoteAccessAllowed?: boolean;
	}

	export interface LimitExceededException {
	}

	export interface ProjectNotFoundException {
	}

	export interface TeamMemberAlreadyAssociatedException {
	}

	export interface ValidationException {
	}

	export interface InvalidServiceRoleException {
	}

	export interface ProjectConfigurationException {
	}

	export interface ConcurrentModificationException {
	}

	export interface CreateProjectResult {
		id: string;
		arn: string;
		clientRequestToken?: string;
		projectTemplateId?: string;
	}

	export interface CreateProjectRequest {
		name: string;
		id: string;
		description?: string;
		clientRequestToken?: string;
		sourceCode?: Array<Code>;

		/** The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation. */
		toolchain?: Toolchain;
		tags?: Tags;
	}


	/** Location and destination information about the source code files provided with the project request. The source code is uploaded to the new project source repository after project creation. */
	export interface Code {

		/**
		 * The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation.
		 * Required
		 */
		source: CodeSource;

		/**
		 * The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository.
		 * Required
		 */
		destination: CodeDestination;
	}


	/** The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation. */
	export interface CodeSource {

		/**
		 * The Amazon S3 location where the source code files provided with the project request are stored.
		 * Required
		 */
		s3: S3Location;
	}


	/** The Amazon S3 location where the source code files provided with the project request are stored. */
	export interface S3Location {
		bucketName?: string;
		bucketKey?: string;
	}


	/** The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository. */
	export interface CodeDestination {

		/** Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
		codeCommit?: CodeCommitCodeDestination;

		/** Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
		gitHub?: GitHubCodeDestination;
	}


	/** Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
	export interface CodeCommitCodeDestination {
		name: string;
	}


	/** Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
	export interface GitHubCodeDestination {
		name: string;
		description?: string;
		type: string;
		owner: string;
		privateRepository: boolean;
		issuesEnabled: boolean;
		token: string;
	}


	/** The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation. */
	export interface Toolchain {

		/**
		 * The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation.
		 * Required
		 */
		source: ToolchainSource;
		roleArn?: string;
		stackParameters?: TemplateParameterMap;
	}


	/** The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation. */
	export interface ToolchainSource {

		/**
		 * The Amazon S3 location where the source code files provided with the project request are stored.
		 * Required
		 */
		s3: S3Location;
	}

	export interface TemplateParameterMap {
	}

	export interface Tags {
	}

	export interface ProjectAlreadyExistsException {
	}

	export interface ProjectCreationFailedException {
	}

	export interface CreateUserProfileResult {
		userArn: string;
		displayName?: string;
		emailAddress?: string;
		sshPublicKey?: string;
		createdTimestamp?: Date;
		lastModifiedTimestamp?: Date;
	}

	export interface CreateUserProfileRequest {
		userArn: string;
		displayName: string;
		emailAddress: string;
		sshPublicKey?: string;
	}

	export interface UserProfileAlreadyExistsException {
	}

	export interface DeleteProjectResult {
		stackId?: string;
		projectArn?: string;
	}

	export interface DeleteProjectRequest {
		id: string;
		clientRequestToken?: string;
		deleteStack?: boolean;
	}

	export interface DeleteUserProfileResult {
		userArn: string;
	}

	export interface DeleteUserProfileRequest {
		userArn: string;
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

		/** An indication of whether a project creation or deletion is failed or successful. */
		status?: ProjectStatus;
	}


	/** An indication of whether a project creation or deletion is failed or successful. */
	export interface ProjectStatus {
		state: string;
		reason?: string;
	}

	export interface DescribeProjectRequest {
		id: string;
	}

	export interface DescribeUserProfileResult {
		userArn: string;
		displayName?: string;
		emailAddress?: string;
		sshPublicKey?: string;
		createdTimestamp: Date;
		lastModifiedTimestamp: Date;
	}

	export interface DescribeUserProfileRequest {
		userArn: string;
	}

	export interface UserProfileNotFoundException {
	}

	export interface DisassociateTeamMemberResult {
	}

	export interface DisassociateTeamMemberRequest {
		projectId: string;
		userArn: string;
	}

	export interface ListProjectsResult {
		projects: Array<ProjectSummary>;
		nextToken?: string;
	}


	/** Information about the metadata for a project. */
	export interface ProjectSummary {
		projectId?: string;
		projectArn?: string;
	}

	export interface ListProjectsRequest {
		nextToken?: string;
		maxResults?: number;
	}

	export interface InvalidNextTokenException {
	}

	export interface ListResourcesResult {
		resources?: Array<Resource>;
		nextToken?: string;
	}


	/** Information about a resource for a project. */
	export interface Resource {
		id: string;
	}

	export interface ListResourcesRequest {
		projectId: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListTagsForProjectResult {
		tags?: Tags;
		nextToken?: string;
	}

	export interface ListTagsForProjectRequest {
		id: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListTeamMembersResult {
		teamMembers: Array<TeamMember>;
		nextToken?: string;
	}


	/** Information about a team member in a project. */
	export interface TeamMember {
		userArn: string;
		projectRole: string;
		remoteAccessAllowed?: boolean;
	}

	export interface ListTeamMembersRequest {
		projectId: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface ListUserProfilesResult {
		userProfiles: Array<UserProfileSummary>;
		nextToken?: string;
	}


	/** Information about a user's profile in AWS CodeStar. */
	export interface UserProfileSummary {
		userArn?: string;
		displayName?: string;
		emailAddress?: string;
		sshPublicKey?: string;
	}

	export interface ListUserProfilesRequest {
		nextToken?: string;
		maxResults?: number;
	}

	export interface TagProjectResult {
		tags?: Tags;
	}

	export interface TagProjectRequest {
		id: string;
		tags: Tags;
	}

	export interface UntagProjectResult {
	}

	export interface UntagProjectRequest {
		id: string;
		tags: Array<string>;
	}

	export interface UpdateProjectResult {
	}

	export interface UpdateProjectRequest {
		id: string;
		name?: string;
		description?: string;
	}

	export interface UpdateTeamMemberResult {
		userArn?: string;
		projectRole?: string;
		remoteAccessAllowed?: boolean;
	}

	export interface UpdateTeamMemberRequest {
		projectId: string;
		userArn: string;
		projectRole?: string;
		remoteAccessAllowed?: boolean;
	}

	export interface TeamMemberNotFoundException {
	}

	export interface UpdateUserProfileResult {
		userArn: string;
		displayName?: string;
		emailAddress?: string;
		sshPublicKey?: string;
		createdTimestamp?: Date;
		lastModifiedTimestamp?: Date;
	}

	export interface UpdateUserProfileRequest {
		userArn: string;
		displayName?: string;
		emailAddress?: string;
		sshPublicKey?: string;
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

	export enum AssociateTeamMemberX_Amz_Target { CodeStar_20170419_AssociateTeamMember = 0 }

	export enum CreateProjectX_Amz_Target { CodeStar_20170419_CreateProject = 0 }

	export enum CreateUserProfileX_Amz_Target { CodeStar_20170419_CreateUserProfile = 0 }

	export enum DeleteProjectX_Amz_Target { CodeStar_20170419_DeleteProject = 0 }

	export enum DeleteUserProfileX_Amz_Target { CodeStar_20170419_DeleteUserProfile = 0 }

	export enum DescribeProjectX_Amz_Target { CodeStar_20170419_DescribeProject = 0 }

	export enum DescribeUserProfileX_Amz_Target { CodeStar_20170419_DescribeUserProfile = 0 }

	export enum DisassociateTeamMemberX_Amz_Target { CodeStar_20170419_DisassociateTeamMember = 0 }

	export enum ListProjectsX_Amz_Target { CodeStar_20170419_ListProjects = 0 }

	export enum ListResourcesX_Amz_Target { CodeStar_20170419_ListResources = 0 }

	export enum ListTagsForProjectX_Amz_Target { CodeStar_20170419_ListTagsForProject = 0 }

	export enum ListTeamMembersX_Amz_Target { CodeStar_20170419_ListTeamMembers = 0 }

	export enum ListUserProfilesX_Amz_Target { CodeStar_20170419_ListUserProfiles = 0 }

	export enum TagProjectX_Amz_Target { CodeStar_20170419_TagProject = 0 }

	export enum UntagProjectX_Amz_Target { CodeStar_20170419_UntagProject = 0 }

	export enum UpdateProjectX_Amz_Target { CodeStar_20170419_UpdateProject = 0 }

	export enum UpdateTeamMemberX_Amz_Target { CodeStar_20170419_UpdateTeamMember = 0 }

	export enum UpdateUserProfileX_Amz_Target { CodeStar_20170419_UpdateUserProfile = 0 }

}

