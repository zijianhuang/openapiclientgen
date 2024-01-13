import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateTeamMemberResult {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		clientRequestToken?: string | null;
	}
	export interface AssociateTeamMemberResultFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTeamMemberResultFormGroup() {
		return new FormGroup<AssociateTeamMemberResultFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[\w:/-]+$')]),
		});

	}

	export interface AssociateTeamMemberRequest {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		projectId: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		clientRequestToken?: string | null;

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: string;

		/** Required */
		projectRole: string;
		remoteAccessAllowed?: boolean | null;
	}
	export interface AssociateTeamMemberRequestFormProperties {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		projectId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: FormControl<string | null | undefined>,

		/** Required */
		projectRole: FormControl<string | null | undefined>,
		remoteAccessAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateAssociateTeamMemberRequestFormGroup() {
		return new FormGroup<AssociateTeamMemberRequestFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-z][a-z0-9-]+$')]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[\w:/-]+$')]),
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(95), Validators.pattern('^arn:aws:iam::\d{12}:user(?:(\u002F)|(\u002F[\u0021-\u007E]+\u002F))[\w+=,.@-]+$')]),
			projectRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(Owner|Viewer|Contributor)$')]),
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

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		id: string;

		/** Required */
		arn: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		clientRequestToken?: string | null;

		/** Min length: 1 */
		projectTemplateId?: string | null;
	}
	export interface CreateProjectResultFormProperties {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/** Min length: 1 */
		projectTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectResultFormGroup() {
		return new FormGroup<CreateProjectResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-z][a-z0-9-]+$')]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[^:\s]*:codestar:[^:\s]+:[0-9]{12}:project\/[a-z]([a-z0-9|-])+$')]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[\w:/-]+$')]),
			projectTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^arn:aws[^:\s]{0,5}:codestar:[^:\s]+::project-template(\/(github|codecommit))?\/[a-z0-9-]+$')]),
		});

	}

	export interface CreateProjectRequest {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		id: string;

		/** Max length: 1024 */
		description?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		clientRequestToken?: string | null;
		sourceCode?: Array<Code>;

		/** The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation. */
		toolchain?: Toolchain;
		tags?: Tags;
	}
	export interface CreateProjectRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		id: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectRequestFormGroup() {
		return new FormGroup<CreateProjectRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S(.*\S)?$')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-z][a-z0-9-]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^$|^\S(.*\S)?$')]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[\w:/-]+$')]),
		});

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

	/** Location and destination information about the source code files provided with the project request. The source code is uploaded to the new project source repository after project creation. */
	export interface CodeFormProperties {
	}
	export function CreateCodeFormGroup() {
		return new FormGroup<CodeFormProperties>({
		});

	}


	/** The location where the source code files provided with the project request are stored. AWS CodeStar retrieves the files during project creation. */
	export interface CodeSource {

		/**
		 * The Amazon S3 location where the source code files provided with the project request are stored.
		 * Required
		 */
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

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		bucketName?: string | null;
		bucketKey?: string | null;
	}

	/** The Amazon S3 location where the source code files provided with the project request are stored. */
	export interface S3LocationFormProperties {

		/**
		 * Max length: 63
		 * Min length: 3
		 */
		bucketName: FormControl<string | null | undefined>,
		bucketKey: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(63)]),
			bucketKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the source code files provided with the project request are placed in the repository. */
	export interface CodeDestination {

		/** Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
		codeCommit?: CodeCommitCodeDestination;

		/** Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
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

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: string;
	}

	/** Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
	export interface CodeCommitCodeDestinationFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCodeCommitCodeDestinationFormGroup() {
		return new FormGroup<CodeCommitCodeDestinationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S[\w.-]*$')]),
		});

	}


	/** Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
	export interface GitHubCodeDestination {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: string;

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		description?: string | null;

		/** Required */
		type: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		owner: string;

		/** Required */
		privateRepository: boolean;

		/** Required */
		issuesEnabled: boolean;

		/**
		 * Required
		 * Min length: 1
		 */
		token: string;
	}

	/** Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the project request will be uploaded after project creation. */
	export interface GitHubCodeDestinationFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		owner: FormControl<string | null | undefined>,

		/** Required */
		privateRepository: FormControl<boolean | null | undefined>,

		/** Required */
		issuesEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		token: FormControl<string | null | undefined>,
	}
	export function CreateGitHubCodeDestinationFormGroup() {
		return new FormGroup<GitHubCodeDestinationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S[\w.-]*$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^\S(.*\S)?$')]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(user|organization|User|Organization)$')]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S(.*\S)?$')]),
			privateRepository: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			issuesEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}


	/** The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation. */
	export interface Toolchain {

		/**
		 * The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation.
		 * Required
		 */
		source: ToolchainSource;

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		roleArn?: string | null;
		stackParameters?: TemplateParameterMap;
	}

	/** The toolchain template file provided with the project request. AWS CodeStar uses the template to provision the toolchain stack in AWS CloudFormation. */
	export interface ToolchainFormProperties {

		/**
		 * Max length: 1224
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateToolchainFormGroup() {
		return new FormGroup<ToolchainFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1224)]),
		});

	}


	/** The Amazon S3 location where the toolchain template file provided with the project request is stored. AWS CodeStar retrieves the file during project creation. */
	export interface ToolchainSource {

		/**
		 * The Amazon S3 location where the source code files provided with the project request are stored.
		 * Required
		 */
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

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: string;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		displayName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		emailAddress?: string | null;

		/** Max length: 16384 */
		sshPublicKey?: string | null;
		createdTimestamp?: Date | null;
		lastModifiedTimestamp?: Date | null;
	}
	export interface CreateUserProfileResultFormProperties {

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		emailAddress: FormControl<string | null | undefined>,

		/** Max length: 16384 */
		sshPublicKey: FormControl<string | null | undefined>,
		createdTimestamp: FormControl<Date | null | undefined>,
		lastModifiedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateCreateUserProfileResultFormGroup() {
		return new FormGroup<CreateUserProfileResultFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(95), Validators.pattern('^arn:aws:iam::\d{12}:user(?:(\u002F)|(\u002F[\u0021-\u007E]+\u002F))[\w+=,.@-]+$')]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^\S(.*\S)?$')]),
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[\w-.+]+@[\w-.+]+$')]),
			sshPublicKey: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384), Validators.pattern('^[\t\r\n\u0020-\u00FF]*$')]),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateUserProfileRequest {

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		displayName: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 3
		 */
		emailAddress: string;

		/** Max length: 16384 */
		sshPublicKey?: string | null;
	}
	export interface CreateUserProfileRequestFormProperties {

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 3
		 */
		emailAddress: FormControl<string | null | undefined>,

		/** Max length: 16384 */
		sshPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserProfileRequestFormGroup() {
		return new FormGroup<CreateUserProfileRequestFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(95), Validators.pattern('^arn:aws:iam::\d{12}:user(?:(\u002F)|(\u002F[\u0021-\u007E]+\u002F))[\w+=,.@-]+$')]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^\S(.*\S)?$')]),
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[\w-.+]+@[\w-.+]+$')]),
			sshPublicKey: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384), Validators.pattern('^[\t\r\n\u0020-\u00FF]*$')]),
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
		stackId?: string | null;
		projectArn?: string | null;
	}
	export interface DeleteProjectResultFormProperties {
		stackId: FormControl<string | null | undefined>,
		projectArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProjectResultFormGroup() {
		return new FormGroup<DeleteProjectResultFormProperties>({
			stackId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:\s]*:cloudformation:[^:\s]+:[0-9]{12}:stack\/[^:\s]+\/[^:\s]+$')]),
			projectArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:\s]*:codestar:[^:\s]+:[0-9]{12}:project\/[a-z]([a-z0-9|-])+$')]),
		});

	}

	export interface DeleteProjectRequest {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		id: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		clientRequestToken?: string | null;
		deleteStack?: boolean | null;
	}
	export interface DeleteProjectRequestFormProperties {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		clientRequestToken: FormControl<string | null | undefined>,
		deleteStack: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteProjectRequestFormGroup() {
		return new FormGroup<DeleteProjectRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-z][a-z0-9-]+$')]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[\w:/-]+$')]),
			deleteStack: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteUserProfileResult {

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: string;
	}
	export interface DeleteUserProfileResultFormProperties {

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserProfileResultFormGroup() {
		return new FormGroup<DeleteUserProfileResultFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(95), Validators.pattern('^arn:aws:iam::\d{12}:user(?:(\u002F)|(\u002F[\u0021-\u007E]+\u002F))[\w+=,.@-]+$')]),
		});

	}

	export interface DeleteUserProfileRequest {

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: string;
	}
	export interface DeleteUserProfileRequestFormProperties {

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserProfileRequestFormGroup() {
		return new FormGroup<DeleteUserProfileRequestFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(95), Validators.pattern('^arn:aws:iam::\d{12}:user(?:(\u002F)|(\u002F[\u0021-\u007E]+\u002F))[\w+=,.@-]+$')]),
		});

	}

	export interface DescribeProjectResult {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * Max length: 15
		 * Min length: 2
		 */
		id?: string | null;
		arn?: string | null;

		/** Max length: 1024 */
		description?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		clientRequestToken?: string | null;
		createdTimeStamp?: Date | null;
		stackId?: string | null;

		/** Min length: 1 */
		projectTemplateId?: string | null;

		/** An indication of whether a project creation or deletion is failed or successful. */
		status?: ProjectStatus;
	}
	export interface DescribeProjectResultFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 15
		 * Min length: 2
		 */
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		clientRequestToken: FormControl<string | null | undefined>,
		createdTimeStamp: FormControl<Date | null | undefined>,
		stackId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		projectTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProjectResultFormGroup() {
		return new FormGroup<DescribeProjectResultFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S(.*\S)?$')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-z][a-z0-9-]+$')]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:\s]*:codestar:[^:\s]+:[0-9]{12}:project\/[a-z]([a-z0-9|-])+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^$|^\S(.*\S)?$')]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[\w:/-]+$')]),
			createdTimeStamp: new FormControl<Date | null | undefined>(undefined),
			stackId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:\s]*:cloudformation:[^:\s]+:[0-9]{12}:stack\/[^:\s]+\/[^:\s]+$')]),
			projectTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('^arn:aws[^:\s]{0,5}:codestar:[^:\s]+::project-template(\/(github|codecommit))?\/[a-z0-9-]+$')]),
		});

	}


	/** An indication of whether a project creation or deletion is failed or successful. */
	export interface ProjectStatus {

		/** Required */
		state: string;

		/** Max length: 1024 */
		reason?: string | null;
	}

	/** An indication of whether a project creation or deletion is failed or successful. */
	export interface ProjectStatusFormProperties {

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateProjectStatusFormGroup() {
		return new FormGroup<ProjectStatusFormProperties>({
			state: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(CreateInProgress|CreateComplete|CreateFailed|DeleteComplete|DeleteFailed|DeleteInProgress|UpdateComplete|UpdateInProgress|UpdateFailed|Unknown)$')]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^$|^\S(.*\S)?$')]),
		});

	}

	export interface DescribeProjectRequest {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		id: string;
	}
	export interface DescribeProjectRequestFormProperties {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProjectRequestFormGroup() {
		return new FormGroup<DescribeProjectRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-z][a-z0-9-]+$')]),
		});

	}

	export interface DescribeUserProfileResult {

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: string;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		displayName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		emailAddress?: string | null;

		/** Max length: 16384 */
		sshPublicKey?: string | null;

		/** Required */
		createdTimestamp: Date;

		/** Required */
		lastModifiedTimestamp: Date;
	}
	export interface DescribeUserProfileResultFormProperties {

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		emailAddress: FormControl<string | null | undefined>,

		/** Max length: 16384 */
		sshPublicKey: FormControl<string | null | undefined>,

		/** Required */
		createdTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		lastModifiedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeUserProfileResultFormGroup() {
		return new FormGroup<DescribeUserProfileResultFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(95), Validators.pattern('^arn:aws:iam::\d{12}:user(?:(\u002F)|(\u002F[\u0021-\u007E]+\u002F))[\w+=,.@-]+$')]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^\S(.*\S)?$')]),
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[\w-.+]+@[\w-.+]+$')]),
			sshPublicKey: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384), Validators.pattern('^[\t\r\n\u0020-\u00FF]*$')]),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeUserProfileRequest {

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: string;
	}
	export interface DescribeUserProfileRequestFormProperties {

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserProfileRequestFormGroup() {
		return new FormGroup<DescribeUserProfileRequestFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(95), Validators.pattern('^arn:aws:iam::\d{12}:user(?:(\u002F)|(\u002F[\u0021-\u007E]+\u002F))[\w+=,.@-]+$')]),
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

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		projectId: string;

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: string;
	}
	export interface DisassociateTeamMemberRequestFormProperties {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		projectId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateTeamMemberRequestFormGroup() {
		return new FormGroup<DisassociateTeamMemberRequestFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-z][a-z0-9-]+$')]),
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(95), Validators.pattern('^arn:aws:iam::\d{12}:user(?:(\u002F)|(\u002F[\u0021-\u007E]+\u002F))[\w+=,.@-]+$')]),
		});

	}

	export interface ListProjectsResult {

		/** Required */
		projects: Array<ProjectSummary>;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListProjectsResultFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsResultFormGroup() {
		return new FormGroup<ListProjectsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^[\w/+=]+$')]),
		});

	}


	/** Information about the metadata for a project. */
	export interface ProjectSummary {

		/**
		 * Max length: 15
		 * Min length: 2
		 */
		projectId?: string | null;
		projectArn?: string | null;
	}

	/** Information about the metadata for a project. */
	export interface ProjectSummaryFormProperties {

		/**
		 * Max length: 15
		 * Min length: 2
		 */
		projectId: FormControl<string | null | undefined>,
		projectArn: FormControl<string | null | undefined>,
	}
	export function CreateProjectSummaryFormGroup() {
		return new FormGroup<ProjectSummaryFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-z][a-z0-9-]+$')]),
			projectArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws[^:\s]*:codestar:[^:\s]+:[0-9]{12}:project\/[a-z]([a-z0-9|-])+$')]),
		});

	}

	export interface ListProjectsRequest {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListProjectsRequestFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListProjectsRequestFormGroup() {
		return new FormGroup<ListProjectsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^[\w/+=]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
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

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListResourcesResultFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesResultFormGroup() {
		return new FormGroup<ListResourcesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^[\w/+=]+$')]),
		});

	}


	/** Information about a resource for a project. */
	export interface Resource {

		/**
		 * Required
		 * Min length: 11
		 */
		id: string;
	}

	/** Information about a resource for a project. */
	export interface ResourceFormProperties {

		/**
		 * Required
		 * Min length: 11
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(11), Validators.pattern('^arn\:aws\:\S.*\:.*')]),
		});

	}

	export interface ListResourcesRequest {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		projectId: string;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListResourcesRequestFormProperties {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		projectId: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourcesRequestFormGroup() {
		return new FormGroup<ListResourcesRequestFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-z][a-z0-9-]+$')]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^[\w/+=]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListTagsForProjectResult {
		tags?: Tags;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListTagsForProjectResultFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForProjectResultFormGroup() {
		return new FormGroup<ListTagsForProjectResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^[\w/+=]+$')]),
		});

	}

	export interface ListTagsForProjectRequest {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		id: string;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListTagsForProjectRequestFormProperties {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForProjectRequestFormGroup() {
		return new FormGroup<ListTagsForProjectRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-z][a-z0-9-]+$')]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^[\w/+=]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListTeamMembersResult {

		/** Required */
		teamMembers: Array<TeamMember>;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListTeamMembersResultFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTeamMembersResultFormGroup() {
		return new FormGroup<ListTeamMembersResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^[\w/+=]+$')]),
		});

	}


	/** Information about a team member in a project. */
	export interface TeamMember {

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: string;

		/** Required */
		projectRole: string;
		remoteAccessAllowed?: boolean | null;
	}

	/** Information about a team member in a project. */
	export interface TeamMemberFormProperties {

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: FormControl<string | null | undefined>,

		/** Required */
		projectRole: FormControl<string | null | undefined>,
		remoteAccessAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateTeamMemberFormGroup() {
		return new FormGroup<TeamMemberFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(95), Validators.pattern('^arn:aws:iam::\d{12}:user(?:(\u002F)|(\u002F[\u0021-\u007E]+\u002F))[\w+=,.@-]+$')]),
			projectRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(Owner|Viewer|Contributor)$')]),
			remoteAccessAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListTeamMembersRequest {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		projectId: string;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListTeamMembersRequestFormProperties {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		projectId: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTeamMembersRequestFormGroup() {
		return new FormGroup<ListTeamMembersRequestFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-z][a-z0-9-]+$')]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^[\w/+=]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListUserProfilesResult {

		/** Required */
		userProfiles: Array<UserProfileSummary>;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListUserProfilesResultFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserProfilesResultFormGroup() {
		return new FormGroup<ListUserProfilesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^[\w/+=]+$')]),
		});

	}


	/** Information about a user's profile in AWS CodeStar. */
	export interface UserProfileSummary {

		/**
		 * Max length: 95
		 * Min length: 32
		 */
		userArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		displayName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		emailAddress?: string | null;

		/** Max length: 16384 */
		sshPublicKey?: string | null;
	}

	/** Information about a user's profile in AWS CodeStar. */
	export interface UserProfileSummaryFormProperties {

		/**
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		emailAddress: FormControl<string | null | undefined>,

		/** Max length: 16384 */
		sshPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateUserProfileSummaryFormGroup() {
		return new FormGroup<UserProfileSummaryFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(95), Validators.pattern('^arn:aws:iam::\d{12}:user(?:(\u002F)|(\u002F[\u0021-\u007E]+\u002F))[\w+=,.@-]+$')]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^\S(.*\S)?$')]),
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[\w-.+]+@[\w-.+]+$')]),
			sshPublicKey: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384), Validators.pattern('^[\t\r\n\u0020-\u00FF]*$')]),
		});

	}

	export interface ListUserProfilesRequest {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface ListUserProfilesRequestFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListUserProfilesRequestFormGroup() {
		return new FormGroup<ListUserProfilesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^[\w/+=]+$')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
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

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		id: string;

		/** Required */
		tags: Tags;
	}
	export interface TagProjectRequestFormProperties {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateTagProjectRequestFormGroup() {
		return new FormGroup<TagProjectRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-z][a-z0-9-]+$')]),
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

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		id: string;

		/** Required */
		tags: Array<string>;
	}
	export interface UntagProjectRequestFormProperties {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUntagProjectRequestFormGroup() {
		return new FormGroup<UntagProjectRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-z][a-z0-9-]+$')]),
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

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		id: string;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 1024 */
		description?: string | null;
	}
	export interface UpdateProjectRequestFormProperties {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectRequestFormGroup() {
		return new FormGroup<UpdateProjectRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-z][a-z0-9-]+$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S(.*\S)?$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^$|^\S(.*\S)?$')]),
		});

	}

	export interface UpdateTeamMemberResult {

		/**
		 * Max length: 95
		 * Min length: 32
		 */
		userArn?: string | null;
		projectRole?: string | null;
		remoteAccessAllowed?: boolean | null;
	}
	export interface UpdateTeamMemberResultFormProperties {

		/**
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: FormControl<string | null | undefined>,
		projectRole: FormControl<string | null | undefined>,
		remoteAccessAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateTeamMemberResultFormGroup() {
		return new FormGroup<UpdateTeamMemberResultFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(95), Validators.pattern('^arn:aws:iam::\d{12}:user(?:(\u002F)|(\u002F[\u0021-\u007E]+\u002F))[\w+=,.@-]+$')]),
			projectRole: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(Owner|Viewer|Contributor)$')]),
			remoteAccessAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateTeamMemberRequest {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		projectId: string;

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: string;
		projectRole?: string | null;
		remoteAccessAllowed?: boolean | null;
	}
	export interface UpdateTeamMemberRequestFormProperties {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 2
		 */
		projectId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: FormControl<string | null | undefined>,
		projectRole: FormControl<string | null | undefined>,
		remoteAccessAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateTeamMemberRequestFormGroup() {
		return new FormGroup<UpdateTeamMemberRequestFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-z][a-z0-9-]+$')]),
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(95), Validators.pattern('^arn:aws:iam::\d{12}:user(?:(\u002F)|(\u002F[\u0021-\u007E]+\u002F))[\w+=,.@-]+$')]),
			projectRole: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(Owner|Viewer|Contributor)$')]),
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

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: string;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		displayName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		emailAddress?: string | null;

		/** Max length: 16384 */
		sshPublicKey?: string | null;
		createdTimestamp?: Date | null;
		lastModifiedTimestamp?: Date | null;
	}
	export interface UpdateUserProfileResultFormProperties {

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		emailAddress: FormControl<string | null | undefined>,

		/** Max length: 16384 */
		sshPublicKey: FormControl<string | null | undefined>,
		createdTimestamp: FormControl<Date | null | undefined>,
		lastModifiedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateUserProfileResultFormGroup() {
		return new FormGroup<UpdateUserProfileResultFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(95), Validators.pattern('^arn:aws:iam::\d{12}:user(?:(\u002F)|(\u002F[\u0021-\u007E]+\u002F))[\w+=,.@-]+$')]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^\S(.*\S)?$')]),
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[\w-.+]+@[\w-.+]+$')]),
			sshPublicKey: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384), Validators.pattern('^[\t\r\n\u0020-\u00FF]*$')]),
			createdTimestamp: new FormControl<Date | null | undefined>(undefined),
			lastModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateUserProfileRequest {

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: string;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		displayName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		emailAddress?: string | null;

		/** Max length: 16384 */
		sshPublicKey?: string | null;
	}
	export interface UpdateUserProfileRequestFormProperties {

		/**
		 * Required
		 * Max length: 95
		 * Min length: 32
		 */
		userArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 3
		 */
		emailAddress: FormControl<string | null | undefined>,

		/** Max length: 16384 */
		sshPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserProfileRequestFormGroup() {
		return new FormGroup<UpdateUserProfileRequestFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(32), Validators.maxLength(95), Validators.pattern('^arn:aws:iam::\d{12}:user(?:(\u002F)|(\u002F[\u0021-\u007E]+\u002F))[\w+=,.@-]+$')]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^\S(.*\S)?$')]),
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(128), Validators.pattern('^[\w-.+]+@[\w-.+]+$')]),
			sshPublicKey: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16384), Validators.pattern('^[\t\r\n\u0020-\u00FF]*$')]),
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

	export enum AssociateTeamMemberX_Amz_Target { 'CodeStar_20170419.AssociateTeamMember' = 0 }

	export enum CreateProjectX_Amz_Target { 'CodeStar_20170419.CreateProject' = 0 }

	export enum CreateUserProfileX_Amz_Target { 'CodeStar_20170419.CreateUserProfile' = 0 }

	export enum DeleteProjectX_Amz_Target { 'CodeStar_20170419.DeleteProject' = 0 }

	export enum DeleteUserProfileX_Amz_Target { 'CodeStar_20170419.DeleteUserProfile' = 0 }

	export enum DescribeProjectX_Amz_Target { 'CodeStar_20170419.DescribeProject' = 0 }

	export enum DescribeUserProfileX_Amz_Target { 'CodeStar_20170419.DescribeUserProfile' = 0 }

	export enum DisassociateTeamMemberX_Amz_Target { 'CodeStar_20170419.DisassociateTeamMember' = 0 }

	export enum ListProjectsX_Amz_Target { 'CodeStar_20170419.ListProjects' = 0 }

	export enum ListResourcesX_Amz_Target { 'CodeStar_20170419.ListResources' = 0 }

	export enum ListTagsForProjectX_Amz_Target { 'CodeStar_20170419.ListTagsForProject' = 0 }

	export enum ListTeamMembersX_Amz_Target { 'CodeStar_20170419.ListTeamMembers' = 0 }

	export enum ListUserProfilesX_Amz_Target { 'CodeStar_20170419.ListUserProfiles' = 0 }

	export enum TagProjectX_Amz_Target { 'CodeStar_20170419.TagProject' = 0 }

	export enum UntagProjectX_Amz_Target { 'CodeStar_20170419.UntagProject' = 0 }

	export enum UpdateProjectX_Amz_Target { 'CodeStar_20170419.UpdateProject' = 0 }

	export enum UpdateTeamMemberX_Amz_Target { 'CodeStar_20170419.UpdateTeamMember' = 0 }

	export enum UpdateUserProfileX_Amz_Target { 'CodeStar_20170419.UpdateUserProfile' = 0 }

}

