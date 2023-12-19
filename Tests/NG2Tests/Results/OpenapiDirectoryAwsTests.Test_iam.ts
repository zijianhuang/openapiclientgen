import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface InvalidInputException {
	}
	export interface InvalidInputExceptionFormProperties {
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
		});

	}

	export interface NoSuchEntityException {
	}
	export interface NoSuchEntityExceptionFormProperties {
	}
	export function CreateNoSuchEntityExceptionFormGroup() {
		return new FormGroup<NoSuchEntityExceptionFormProperties>({
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

	export interface ServiceFailureException {
	}
	export interface ServiceFailureExceptionFormProperties {
	}
	export function CreateServiceFailureExceptionFormGroup() {
		return new FormGroup<ServiceFailureExceptionFormProperties>({
		});

	}

	export interface EntityAlreadyExistsException {
	}
	export interface EntityAlreadyExistsExceptionFormProperties {
	}
	export function CreateEntityAlreadyExistsExceptionFormGroup() {
		return new FormGroup<EntityAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface UnmodifiableEntityException {
	}
	export interface UnmodifiableEntityExceptionFormProperties {
	}
	export function CreateUnmodifiableEntityExceptionFormGroup() {
		return new FormGroup<UnmodifiableEntityExceptionFormProperties>({
		});

	}

	export interface PolicyNotAttachableException {
	}
	export interface PolicyNotAttachableExceptionFormProperties {
	}
	export function CreatePolicyNotAttachableExceptionFormGroup() {
		return new FormGroup<PolicyNotAttachableExceptionFormProperties>({
		});

	}

	export interface InvalidUserTypeException {
	}
	export interface InvalidUserTypeExceptionFormProperties {
	}
	export function CreateInvalidUserTypeExceptionFormGroup() {
		return new FormGroup<InvalidUserTypeExceptionFormProperties>({
		});

	}

	export interface EntityTemporarilyUnmodifiableException {
	}
	export interface EntityTemporarilyUnmodifiableExceptionFormProperties {
	}
	export function CreateEntityTemporarilyUnmodifiableExceptionFormGroup() {
		return new FormGroup<EntityTemporarilyUnmodifiableExceptionFormProperties>({
		});

	}

	export interface PasswordPolicyViolationException {
	}
	export interface PasswordPolicyViolationExceptionFormProperties {
	}
	export function CreatePasswordPolicyViolationExceptionFormGroup() {
		return new FormGroup<PasswordPolicyViolationExceptionFormProperties>({
		});

	}


	/** Contains the response to a successful <a>CreateAccessKey</a> request.  */
	export interface CreateAccessKeyResponse {

		/**
		 * <p>Contains information about an AWS access key.</p> <p> This data type is used as a response element in the <a>CreateAccessKey</a> and <a>ListAccessKeys</a> operations. </p> <note> <p>The <code>SecretAccessKey</code> value is returned only in response to <a>CreateAccessKey</a>. You can get a secret access key only when you first create an access key; you cannot recover the secret access key later. If you lose a secret access key, you must create a new access key.</p> </note>
		 * Required
		 */
		AccessKey: AccessKey;
	}

	/** Contains the response to a successful <a>CreateAccessKey</a> request.  */
	export interface CreateAccessKeyResponseFormProperties {
	}
	export function CreateCreateAccessKeyResponseFormGroup() {
		return new FormGroup<CreateAccessKeyResponseFormProperties>({
		});

	}


	/** <p>Contains information about an AWS access key.</p> <p> This data type is used as a response element in the <a>CreateAccessKey</a> and <a>ListAccessKeys</a> operations. </p> <note> <p>The <code>SecretAccessKey</code> value is returned only in response to <a>CreateAccessKey</a>. You can get a secret access key only when you first create an access key; you cannot recover the secret access key later. If you lose a secret access key, you must create a new access key.</p> </note> */
	export interface AccessKey {
		UserName: string;
		AccessKeyId: string;
		Status: AccessKeyStatus;
		SecretAccessKey: string;
		CreateDate?: Date | null;
	}

	/** <p>Contains information about an AWS access key.</p> <p> This data type is used as a response element in the <a>CreateAccessKey</a> and <a>ListAccessKeys</a> operations. </p> <note> <p>The <code>SecretAccessKey</code> value is returned only in response to <a>CreateAccessKey</a>. You can get a secret access key only when you first create an access key; you cannot recover the secret access key later. If you lose a secret access key, you must create a new access key.</p> </note> */
	export interface AccessKeyFormProperties {
		UserName: FormControl<string | null | undefined>,
		AccessKeyId: FormControl<string | null | undefined>,
		Status: FormControl<AccessKeyStatus | null | undefined>,
		SecretAccessKey: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
	}
	export function CreateAccessKeyFormGroup() {
		return new FormGroup<AccessKeyFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			AccessKeyId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AccessKeyStatus | null | undefined>(undefined),
			SecretAccessKey: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AccessKeyStatus { Active = 0, Inactive = 1 }


	/** Contains the response to a successful <a>CreateGroup</a> request.  */
	export interface CreateGroupResponse {

		/**
		 * <p>Contains information about an IAM group entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateGroup</a> </p> </li> <li> <p> <a>GetGroup</a> </p> </li> <li> <p> <a>ListGroups</a> </p> </li> </ul>
		 * Required
		 */
		Group: Group;
	}

	/** Contains the response to a successful <a>CreateGroup</a> request.  */
	export interface CreateGroupResponseFormProperties {
	}
	export function CreateCreateGroupResponseFormGroup() {
		return new FormGroup<CreateGroupResponseFormProperties>({
		});

	}


	/** <p>Contains information about an IAM group entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateGroup</a> </p> </li> <li> <p> <a>GetGroup</a> </p> </li> <li> <p> <a>ListGroups</a> </p> </li> </ul> */
	export interface Group {
		Path: string;
		GroupName: string;
		GroupId: string;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: string;
		CreateDate: Date;
	}

	/** <p>Contains information about an IAM group entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateGroup</a> </p> </li> <li> <p> <a>GetGroup</a> </p> </li> <li> <p> <a>ListGroups</a> </p> </li> </ul> */
	export interface GroupFormProperties {
		Path: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>CreateInstanceProfile</a> request.  */
	export interface CreateInstanceProfileResponse {

		/**
		 * <p>Contains information about an instance profile.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateInstanceProfile</a> </p> </li> <li> <p> <a>GetInstanceProfile</a> </p> </li> <li> <p> <a>ListInstanceProfiles</a> </p> </li> <li> <p> <a>ListInstanceProfilesForRole</a> </p> </li> </ul>
		 * Required
		 */
		InstanceProfile: InstanceProfile;
	}

	/** Contains the response to a successful <a>CreateInstanceProfile</a> request.  */
	export interface CreateInstanceProfileResponseFormProperties {
	}
	export function CreateCreateInstanceProfileResponseFormGroup() {
		return new FormGroup<CreateInstanceProfileResponseFormProperties>({
		});

	}


	/** <p>Contains information about an instance profile.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateInstanceProfile</a> </p> </li> <li> <p> <a>GetInstanceProfile</a> </p> </li> <li> <p> <a>ListInstanceProfiles</a> </p> </li> <li> <p> <a>ListInstanceProfilesForRole</a> </p> </li> </ul> */
	export interface InstanceProfile {
		Path: string;
		InstanceProfileName: string;
		InstanceProfileId: string;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: string;
		CreateDate: Date;

		/**
		 * <p>Contains a list of IAM roles.</p> <p>This data type is used as a response element in the <a>ListRoles</a> operation.</p>
		 * Required
		 */
		Roles: Array<Role>;
	}

	/** <p>Contains information about an instance profile.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateInstanceProfile</a> </p> </li> <li> <p> <a>GetInstanceProfile</a> </p> </li> <li> <p> <a>ListInstanceProfiles</a> </p> </li> <li> <p> <a>ListInstanceProfilesForRole</a> </p> </li> </ul> */
	export interface InstanceProfileFormProperties {
		Path: FormControl<string | null | undefined>,
		InstanceProfileName: FormControl<string | null | undefined>,
		InstanceProfileId: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
	}
	export function CreateInstanceProfileFormGroup() {
		return new FormGroup<InstanceProfileFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			InstanceProfileName: new FormControl<string | null | undefined>(undefined),
			InstanceProfileId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains information about an IAM role. This structure is returned as a response element in several API operations that interact with roles. */
	export interface Role {
		Path: string;
		RoleName: string;
		RoleId: string;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: string;
		CreateDate: Date;
		AssumeRolePolicyDocument?: string | null;
		Description?: string | null;
		MaxSessionDuration?: number | null;

		/** <p>Contains information about an attached permissions boundary.</p> <p>An attached permissions boundary is a managed policy that has been attached to a user or role to set the permissions boundary.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p> */
		PermissionsBoundary?: AttachedPermissionsBoundary;
		Tags?: Array<Tag>;

		/** <p>Contains information about the last time that an IAM role was used. This includes the date and time and the Region in which the role was last used. Activity is only reported for the trailing 400 days. This period can be shorter if your Region began supporting these features within the last year. The role might have been used more than 400 days ago. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions Where Data Is Tracked</a> in the <i>IAM User Guide</i>.</p> <p>This data type is returned as a response element in the <a>GetRole</a> and <a>GetAccountAuthorizationDetails</a> operations.</p> */
		RoleLastUsed?: RoleLastUsed;
	}

	/** Contains information about an IAM role. This structure is returned as a response element in several API operations that interact with roles. */
	export interface RoleFormProperties {
		Path: FormControl<string | null | undefined>,
		RoleName: FormControl<string | null | undefined>,
		RoleId: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		AssumeRolePolicyDocument: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		MaxSessionDuration: FormControl<number | null | undefined>,
	}
	export function CreateRoleFormGroup() {
		return new FormGroup<RoleFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			RoleName: new FormControl<string | null | undefined>(undefined),
			RoleId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			AssumeRolePolicyDocument: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			MaxSessionDuration: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about an attached permissions boundary.</p> <p>An attached permissions boundary is a managed policy that has been attached to a user or role to set the permissions boundary.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p> */
	export interface AttachedPermissionsBoundary {
		PermissionsBoundaryType?: AttachedPermissionsBoundaryPermissionsBoundaryType | null;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		PermissionsBoundaryArn?: string | null;
	}

	/** <p>Contains information about an attached permissions boundary.</p> <p>An attached permissions boundary is a managed policy that has been attached to a user or role to set the permissions boundary.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p> */
	export interface AttachedPermissionsBoundaryFormProperties {
		PermissionsBoundaryType: FormControl<AttachedPermissionsBoundaryPermissionsBoundaryType | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		PermissionsBoundaryArn: FormControl<string | null | undefined>,
	}
	export function CreateAttachedPermissionsBoundaryFormGroup() {
		return new FormGroup<AttachedPermissionsBoundaryFormProperties>({
			PermissionsBoundaryType: new FormControl<AttachedPermissionsBoundaryPermissionsBoundaryType | null | undefined>(undefined),
			PermissionsBoundaryArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AttachedPermissionsBoundaryPermissionsBoundaryType { PermissionsBoundaryPolicy = 0 }


	/** A structure that represents user-provided metadata that can be associated with a resource such as an IAM user or role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	/** A structure that represents user-provided metadata that can be associated with a resource such as an IAM user or role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>. */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about the last time that an IAM role was used. This includes the date and time and the Region in which the role was last used. Activity is only reported for the trailing 400 days. This period can be shorter if your Region began supporting these features within the last year. The role might have been used more than 400 days ago. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions Where Data Is Tracked</a> in the <i>IAM User Guide</i>.</p> <p>This data type is returned as a response element in the <a>GetRole</a> and <a>GetAccountAuthorizationDetails</a> operations.</p> */
	export interface RoleLastUsed {
		LastUsedDate?: Date | null;
		Region?: string | null;
	}

	/** <p>Contains information about the last time that an IAM role was used. This includes the date and time and the Region in which the role was last used. Activity is only reported for the trailing 400 days. This period can be shorter if your Region began supporting these features within the last year. The role might have been used more than 400 days ago. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions Where Data Is Tracked</a> in the <i>IAM User Guide</i>.</p> <p>This data type is returned as a response element in the <a>GetRole</a> and <a>GetAccountAuthorizationDetails</a> operations.</p> */
	export interface RoleLastUsedFormProperties {
		LastUsedDate: FormControl<Date | null | undefined>,
		Region: FormControl<string | null | undefined>,
	}
	export function CreateRoleLastUsedFormGroup() {
		return new FormGroup<RoleLastUsedFormProperties>({
			LastUsedDate: new FormControl<Date | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>CreateLoginProfile</a> request.  */
	export interface CreateLoginProfileResponse {

		/**
		 * <p>Contains the user name and password create date for a user.</p> <p> This data type is used as a response element in the <a>CreateLoginProfile</a> and <a>GetLoginProfile</a> operations. </p>
		 * Required
		 */
		LoginProfile: LoginProfile;
	}

	/** Contains the response to a successful <a>CreateLoginProfile</a> request.  */
	export interface CreateLoginProfileResponseFormProperties {
	}
	export function CreateCreateLoginProfileResponseFormGroup() {
		return new FormGroup<CreateLoginProfileResponseFormProperties>({
		});

	}


	/** <p>Contains the user name and password create date for a user.</p> <p> This data type is used as a response element in the <a>CreateLoginProfile</a> and <a>GetLoginProfile</a> operations. </p> */
	export interface LoginProfile {
		UserName: string;
		CreateDate: Date;
		PasswordResetRequired?: boolean | null;
	}

	/** <p>Contains the user name and password create date for a user.</p> <p> This data type is used as a response element in the <a>CreateLoginProfile</a> and <a>GetLoginProfile</a> operations. </p> */
	export interface LoginProfileFormProperties {
		UserName: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		PasswordResetRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateLoginProfileFormGroup() {
		return new FormGroup<LoginProfileFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			PasswordResetRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>CreateOpenIDConnectProvider</a> request.  */
	export interface CreateOpenIDConnectProviderResponse {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		OpenIDConnectProviderArn?: string | null;
	}

	/** Contains the response to a successful <a>CreateOpenIDConnectProvider</a> request.  */
	export interface CreateOpenIDConnectProviderResponseFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		OpenIDConnectProviderArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateOpenIDConnectProviderResponseFormGroup() {
		return new FormGroup<CreateOpenIDConnectProviderResponseFormProperties>({
			OpenIDConnectProviderArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>CreatePolicy</a> request.  */
	export interface CreatePolicyResponse {

		/** <p>Contains information about a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicy</a>, <a>GetPolicy</a>, and <a>ListPolicies</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
		Policy?: Policy;
	}

	/** Contains the response to a successful <a>CreatePolicy</a> request.  */
	export interface CreatePolicyResponseFormProperties {
	}
	export function CreateCreatePolicyResponseFormGroup() {
		return new FormGroup<CreatePolicyResponseFormProperties>({
		});

	}


	/** <p>Contains information about a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicy</a>, <a>GetPolicy</a>, and <a>ListPolicies</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
	export interface Policy {
		PolicyName?: string | null;
		PolicyId?: string | null;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn?: string | null;
		Path?: string | null;
		DefaultVersionId?: string | null;
		AttachmentCount?: number | null;
		PermissionsBoundaryUsageCount?: number | null;
		IsAttachable?: boolean | null;
		Description?: string | null;
		CreateDate?: Date | null;
		UpdateDate?: Date | null;
	}

	/** <p>Contains information about a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicy</a>, <a>GetPolicy</a>, and <a>ListPolicies</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
	export interface PolicyFormProperties {
		PolicyName: FormControl<string | null | undefined>,
		PolicyId: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
		DefaultVersionId: FormControl<string | null | undefined>,
		AttachmentCount: FormControl<number | null | undefined>,
		PermissionsBoundaryUsageCount: FormControl<number | null | undefined>,
		IsAttachable: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		UpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
			PolicyId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			DefaultVersionId: new FormControl<string | null | undefined>(undefined),
			AttachmentCount: new FormControl<number | null | undefined>(undefined),
			PermissionsBoundaryUsageCount: new FormControl<number | null | undefined>(undefined),
			IsAttachable: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			UpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface MalformedPolicyDocumentException {
	}
	export interface MalformedPolicyDocumentExceptionFormProperties {
	}
	export function CreateMalformedPolicyDocumentExceptionFormGroup() {
		return new FormGroup<MalformedPolicyDocumentExceptionFormProperties>({
		});

	}


	/** Contains the response to a successful <a>CreatePolicyVersion</a> request.  */
	export interface CreatePolicyVersionResponse {

		/** <p>Contains information about a version of a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicyVersion</a>, <a>GetPolicyVersion</a>, <a>ListPolicyVersions</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
		PolicyVersion?: PolicyVersion;
	}

	/** Contains the response to a successful <a>CreatePolicyVersion</a> request.  */
	export interface CreatePolicyVersionResponseFormProperties {
	}
	export function CreateCreatePolicyVersionResponseFormGroup() {
		return new FormGroup<CreatePolicyVersionResponseFormProperties>({
		});

	}


	/** <p>Contains information about a version of a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicyVersion</a>, <a>GetPolicyVersion</a>, <a>ListPolicyVersions</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
	export interface PolicyVersion {
		Document?: string | null;
		VersionId?: string | null;
		IsDefaultVersion?: boolean | null;
		CreateDate?: Date | null;
	}

	/** <p>Contains information about a version of a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicyVersion</a>, <a>GetPolicyVersion</a>, <a>ListPolicyVersions</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
	export interface PolicyVersionFormProperties {
		Document: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
		IsDefaultVersion: FormControl<boolean | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
	}
	export function CreatePolicyVersionFormGroup() {
		return new FormGroup<PolicyVersionFormProperties>({
			Document: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
			IsDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>CreateRole</a> request.  */
	export interface CreateRoleResponse {

		/**
		 * Contains information about an IAM role. This structure is returned as a response element in several API operations that interact with roles.
		 * Required
		 */
		Role: Role;
	}

	/** Contains the response to a successful <a>CreateRole</a> request.  */
	export interface CreateRoleResponseFormProperties {
	}
	export function CreateCreateRoleResponseFormGroup() {
		return new FormGroup<CreateRoleResponseFormProperties>({
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


	/** Contains the response to a successful <a>CreateSAMLProvider</a> request.  */
	export interface CreateSAMLProviderResponse {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		SAMLProviderArn?: string | null;
	}

	/** Contains the response to a successful <a>CreateSAMLProvider</a> request.  */
	export interface CreateSAMLProviderResponseFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		SAMLProviderArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSAMLProviderResponseFormGroup() {
		return new FormGroup<CreateSAMLProviderResponseFormProperties>({
			SAMLProviderArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateServiceLinkedRoleResponse {

		/** Contains information about an IAM role. This structure is returned as a response element in several API operations that interact with roles. */
		Role?: Role;
	}
	export interface CreateServiceLinkedRoleResponseFormProperties {
	}
	export function CreateCreateServiceLinkedRoleResponseFormGroup() {
		return new FormGroup<CreateServiceLinkedRoleResponseFormProperties>({
		});

	}

	export interface CreateServiceSpecificCredentialResponse {

		/** Contains the details of a service-specific credential. */
		ServiceSpecificCredential?: ServiceSpecificCredential;
	}
	export interface CreateServiceSpecificCredentialResponseFormProperties {
	}
	export function CreateCreateServiceSpecificCredentialResponseFormGroup() {
		return new FormGroup<CreateServiceSpecificCredentialResponseFormProperties>({
		});

	}


	/** Contains the details of a service-specific credential. */
	export interface ServiceSpecificCredential {
		CreateDate: Date;
		ServiceName: string;
		ServiceUserName: string;
		ServicePassword: string;
		ServiceSpecificCredentialId: string;
		UserName: string;
		Status: AccessKeyStatus;
	}

	/** Contains the details of a service-specific credential. */
	export interface ServiceSpecificCredentialFormProperties {
		CreateDate: FormControl<Date | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		ServiceUserName: FormControl<string | null | undefined>,
		ServicePassword: FormControl<string | null | undefined>,
		ServiceSpecificCredentialId: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		Status: FormControl<AccessKeyStatus | null | undefined>,
	}
	export function CreateServiceSpecificCredentialFormGroup() {
		return new FormGroup<ServiceSpecificCredentialFormProperties>({
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			ServiceUserName: new FormControl<string | null | undefined>(undefined),
			ServicePassword: new FormControl<string | null | undefined>(undefined),
			ServiceSpecificCredentialId: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AccessKeyStatus | null | undefined>(undefined),
		});

	}

	export interface ServiceNotSupportedException {
	}
	export interface ServiceNotSupportedExceptionFormProperties {
	}
	export function CreateServiceNotSupportedExceptionFormGroup() {
		return new FormGroup<ServiceNotSupportedExceptionFormProperties>({
		});

	}


	/** Contains the response to a successful <a>CreateUser</a> request.  */
	export interface CreateUserResponse {

		/** <p>Contains information about an IAM user entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateUser</a> </p> </li> <li> <p> <a>GetUser</a> </p> </li> <li> <p> <a>ListUsers</a> </p> </li> </ul> */
		User?: User;
	}

	/** Contains the response to a successful <a>CreateUser</a> request.  */
	export interface CreateUserResponseFormProperties {
	}
	export function CreateCreateUserResponseFormGroup() {
		return new FormGroup<CreateUserResponseFormProperties>({
		});

	}


	/** <p>Contains information about an IAM user entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateUser</a> </p> </li> <li> <p> <a>GetUser</a> </p> </li> <li> <p> <a>ListUsers</a> </p> </li> </ul> */
	export interface User {
		Path: string;
		UserName: string;
		UserId: string;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: string;
		CreateDate: Date;
		PasswordLastUsed?: Date | null;

		/** <p>Contains information about an attached permissions boundary.</p> <p>An attached permissions boundary is a managed policy that has been attached to a user or role to set the permissions boundary.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p> */
		PermissionsBoundary?: AttachedPermissionsBoundary;
		Tags?: Array<Tag>;
	}

	/** <p>Contains information about an IAM user entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateUser</a> </p> </li> <li> <p> <a>GetUser</a> </p> </li> <li> <p> <a>ListUsers</a> </p> </li> </ul> */
	export interface UserFormProperties {
		Path: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		PasswordLastUsed: FormControl<Date | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			PasswordLastUsed: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>CreateVirtualMFADevice</a> request.  */
	export interface CreateVirtualMFADeviceResponse {

		/**
		 * Contains information about a virtual MFA device.
		 * Required
		 */
		VirtualMFADevice: VirtualMFADevice;
	}

	/** Contains the response to a successful <a>CreateVirtualMFADevice</a> request.  */
	export interface CreateVirtualMFADeviceResponseFormProperties {
	}
	export function CreateCreateVirtualMFADeviceResponseFormGroup() {
		return new FormGroup<CreateVirtualMFADeviceResponseFormProperties>({
		});

	}


	/** Contains information about a virtual MFA device. */
	export interface VirtualMFADevice {
		SerialNumber: string;
		Base32StringSeed?: string | null;
		QRCodePNG?: string | null;

		/** <p>Contains information about an IAM user entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateUser</a> </p> </li> <li> <p> <a>GetUser</a> </p> </li> <li> <p> <a>ListUsers</a> </p> </li> </ul> */
		User?: User;
		EnableDate?: Date | null;
	}

	/** Contains information about a virtual MFA device. */
	export interface VirtualMFADeviceFormProperties {
		SerialNumber: FormControl<string | null | undefined>,
		Base32StringSeed: FormControl<string | null | undefined>,
		QRCodePNG: FormControl<string | null | undefined>,
		EnableDate: FormControl<Date | null | undefined>,
	}
	export function CreateVirtualMFADeviceFormGroup() {
		return new FormGroup<VirtualMFADeviceFormProperties>({
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			Base32StringSeed: new FormControl<string | null | undefined>(undefined),
			QRCodePNG: new FormControl<string | null | undefined>(undefined),
			EnableDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeleteConflictException {
	}
	export interface DeleteConflictExceptionFormProperties {
	}
	export function CreateDeleteConflictExceptionFormGroup() {
		return new FormGroup<DeleteConflictExceptionFormProperties>({
		});

	}

	export interface DeleteServiceLinkedRoleResponse {
		DeletionTaskId: string;
	}
	export interface DeleteServiceLinkedRoleResponseFormProperties {
		DeletionTaskId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServiceLinkedRoleResponseFormGroup() {
		return new FormGroup<DeleteServiceLinkedRoleResponseFormProperties>({
			DeletionTaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidAuthenticationCodeException {
	}
	export interface InvalidAuthenticationCodeExceptionFormProperties {
	}
	export function CreateInvalidAuthenticationCodeExceptionFormGroup() {
		return new FormGroup<InvalidAuthenticationCodeExceptionFormProperties>({
		});

	}


	/** Contains the response to a successful <a>GenerateCredentialReport</a> request.  */
	export interface GenerateCredentialReportResponse {
		State?: GenerateCredentialReportResponseState | null;
		Description?: string | null;
	}

	/** Contains the response to a successful <a>GenerateCredentialReport</a> request.  */
	export interface GenerateCredentialReportResponseFormProperties {
		State: FormControl<GenerateCredentialReportResponseState | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateGenerateCredentialReportResponseFormGroup() {
		return new FormGroup<GenerateCredentialReportResponseFormProperties>({
			State: new FormControl<GenerateCredentialReportResponseState | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GenerateCredentialReportResponseState { STARTED = 0, INPROGRESS = 1, COMPLETE = 2 }

	export interface GenerateOrganizationsAccessReportResponse {
		JobId?: string | null;
	}
	export interface GenerateOrganizationsAccessReportResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateGenerateOrganizationsAccessReportResponseFormGroup() {
		return new FormGroup<GenerateOrganizationsAccessReportResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportGenerationLimitExceededException {
	}
	export interface ReportGenerationLimitExceededExceptionFormProperties {
	}
	export function CreateReportGenerationLimitExceededExceptionFormGroup() {
		return new FormGroup<ReportGenerationLimitExceededExceptionFormProperties>({
		});

	}

	export interface GenerateServiceLastAccessedDetailsResponse {
		JobId?: string | null;
	}
	export interface GenerateServiceLastAccessedDetailsResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateGenerateServiceLastAccessedDetailsResponseFormGroup() {
		return new FormGroup<GenerateServiceLastAccessedDetailsResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>GetAccessKeyLastUsed</a> request. It is also returned as a member of the <a>AccessKeyMetaData</a> structure returned by the <a>ListAccessKeys</a> action. */
	export interface GetAccessKeyLastUsedResponse {
		UserName?: string | null;

		/** <p>Contains information about the last time an AWS access key was used since IAM began tracking this information on April 22, 2015.</p> <p>This data type is used as a response element in the <a>GetAccessKeyLastUsed</a> operation.</p> */
		AccessKeyLastUsed?: AccessKeyLastUsed;
	}

	/** Contains the response to a successful <a>GetAccessKeyLastUsed</a> request. It is also returned as a member of the <a>AccessKeyMetaData</a> structure returned by the <a>ListAccessKeys</a> action. */
	export interface GetAccessKeyLastUsedResponseFormProperties {
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateGetAccessKeyLastUsedResponseFormGroup() {
		return new FormGroup<GetAccessKeyLastUsedResponseFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about the last time an AWS access key was used since IAM began tracking this information on April 22, 2015.</p> <p>This data type is used as a response element in the <a>GetAccessKeyLastUsed</a> operation.</p> */
	export interface AccessKeyLastUsed {
		LastUsedDate: Date;
		ServiceName: string;
		Region: string;
	}

	/** <p>Contains information about the last time an AWS access key was used since IAM began tracking this information on April 22, 2015.</p> <p>This data type is used as a response element in the <a>GetAccessKeyLastUsed</a> operation.</p> */
	export interface AccessKeyLastUsedFormProperties {
		LastUsedDate: FormControl<Date | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
	}
	export function CreateAccessKeyLastUsedFormGroup() {
		return new FormGroup<AccessKeyLastUsedFormProperties>({
			LastUsedDate: new FormControl<Date | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>GetAccountAuthorizationDetails</a> request.  */
	export interface GetAccountAuthorizationDetailsResponse {
		UserDetailList?: Array<UserDetail>;
		GroupDetailList?: Array<GroupDetail>;
		RoleDetailList?: Array<RoleDetail>;
		Policies?: Array<ManagedPolicyDetail>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>GetAccountAuthorizationDetails</a> request.  */
	export interface GetAccountAuthorizationDetailsResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateGetAccountAuthorizationDetailsResponseFormGroup() {
		return new FormGroup<GetAccountAuthorizationDetailsResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about an IAM user, including all the user's policies and all the IAM groups the user is in.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p> */
	export interface UserDetail {
		Path?: string | null;
		UserName?: string | null;
		UserId?: string | null;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn?: string | null;
		CreateDate?: Date | null;
		UserPolicyList?: Array<PolicyDetail>;
		GroupList?: Array<string>;
		AttachedManagedPolicies?: Array<AttachedPolicy>;

		/** <p>Contains information about an attached permissions boundary.</p> <p>An attached permissions boundary is a managed policy that has been attached to a user or role to set the permissions boundary.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p> */
		PermissionsBoundary?: AttachedPermissionsBoundary;
		Tags?: Array<Tag>;
	}

	/** <p>Contains information about an IAM user, including all the user's policies and all the IAM groups the user is in.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p> */
	export interface UserDetailFormProperties {
		Path: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
	}
	export function CreateUserDetailFormGroup() {
		return new FormGroup<UserDetailFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about an IAM policy, including the policy document.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p> */
	export interface PolicyDetail {
		PolicyName?: string | null;
		PolicyDocument?: string | null;
	}

	/** <p>Contains information about an IAM policy, including the policy document.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p> */
	export interface PolicyDetailFormProperties {
		PolicyName: FormControl<string | null | undefined>,
		PolicyDocument: FormControl<string | null | undefined>,
	}
	export function CreatePolicyDetailFormGroup() {
		return new FormGroup<PolicyDetailFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
			PolicyDocument: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about an attached policy.</p> <p>An attached policy is a managed policy that has been attached to a user, group, or role. This data type is used as a response element in the <a>ListAttachedGroupPolicies</a>, <a>ListAttachedRolePolicies</a>, <a>ListAttachedUserPolicies</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
	export interface AttachedPolicy {
		PolicyName?: string | null;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn?: string | null;
	}

	/** <p>Contains information about an attached policy.</p> <p>An attached policy is a managed policy that has been attached to a user, group, or role. This data type is used as a response element in the <a>ListAttachedGroupPolicies</a>, <a>ListAttachedRolePolicies</a>, <a>ListAttachedUserPolicies</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
	export interface AttachedPolicyFormProperties {
		PolicyName: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateAttachedPolicyFormGroup() {
		return new FormGroup<AttachedPolicyFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about an IAM group, including all of the group's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p> */
	export interface GroupDetail {
		Path?: string | null;
		GroupName?: string | null;
		GroupId?: string | null;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn?: string | null;
		CreateDate?: Date | null;
		GroupPolicyList?: Array<PolicyDetail>;
		AttachedManagedPolicies?: Array<AttachedPolicy>;
	}

	/** <p>Contains information about an IAM group, including all of the group's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p> */
	export interface GroupDetailFormProperties {
		Path: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
	}
	export function CreateGroupDetailFormGroup() {
		return new FormGroup<GroupDetailFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about an IAM role, including all of the role's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p> */
	export interface RoleDetail {
		Path?: string | null;
		RoleName?: string | null;
		RoleId?: string | null;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn?: string | null;
		CreateDate?: Date | null;
		AssumeRolePolicyDocument?: string | null;

		/** Contains a list of instance profiles. */
		InstanceProfileList?: Array<InstanceProfile>;
		RolePolicyList?: Array<PolicyDetail>;
		AttachedManagedPolicies?: Array<AttachedPolicy>;

		/** <p>Contains information about an attached permissions boundary.</p> <p>An attached permissions boundary is a managed policy that has been attached to a user or role to set the permissions boundary.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p> */
		PermissionsBoundary?: AttachedPermissionsBoundary;
		Tags?: Array<Tag>;

		/** <p>Contains information about the last time that an IAM role was used. This includes the date and time and the Region in which the role was last used. Activity is only reported for the trailing 400 days. This period can be shorter if your Region began supporting these features within the last year. The role might have been used more than 400 days ago. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions Where Data Is Tracked</a> in the <i>IAM User Guide</i>.</p> <p>This data type is returned as a response element in the <a>GetRole</a> and <a>GetAccountAuthorizationDetails</a> operations.</p> */
		RoleLastUsed?: RoleLastUsed;
	}

	/** <p>Contains information about an IAM role, including all of the role's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p> */
	export interface RoleDetailFormProperties {
		Path: FormControl<string | null | undefined>,
		RoleName: FormControl<string | null | undefined>,
		RoleId: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		AssumeRolePolicyDocument: FormControl<string | null | undefined>,
	}
	export function CreateRoleDetailFormGroup() {
		return new FormGroup<RoleDetailFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			RoleName: new FormControl<string | null | undefined>(undefined),
			RoleId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			AssumeRolePolicyDocument: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about a managed policy, including the policy's ARN, versions, and the number of principal entities (users, groups, and roles) that the policy is attached to.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
	export interface ManagedPolicyDetail {
		PolicyName?: string | null;
		PolicyId?: string | null;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn?: string | null;
		Path?: string | null;
		DefaultVersionId?: string | null;
		AttachmentCount?: number | null;
		PermissionsBoundaryUsageCount?: number | null;
		IsAttachable?: boolean | null;
		Description?: string | null;
		CreateDate?: Date | null;
		UpdateDate?: Date | null;
		PolicyVersionList?: Array<PolicyVersion>;
	}

	/** <p>Contains information about a managed policy, including the policy's ARN, versions, and the number of principal entities (users, groups, and roles) that the policy is attached to.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
	export interface ManagedPolicyDetailFormProperties {
		PolicyName: FormControl<string | null | undefined>,
		PolicyId: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
		DefaultVersionId: FormControl<string | null | undefined>,
		AttachmentCount: FormControl<number | null | undefined>,
		PermissionsBoundaryUsageCount: FormControl<number | null | undefined>,
		IsAttachable: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		UpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateManagedPolicyDetailFormGroup() {
		return new FormGroup<ManagedPolicyDetailFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
			PolicyId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			DefaultVersionId: new FormControl<string | null | undefined>(undefined),
			AttachmentCount: new FormControl<number | null | undefined>(undefined),
			PermissionsBoundaryUsageCount: new FormControl<number | null | undefined>(undefined),
			IsAttachable: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			UpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EntityType { User = 0, Role = 1, Group = 2, LocalManagedPolicy = 3, AWSManagedPolicy = 4 }


	/** Contains the response to a successful <a>GetAccountPasswordPolicy</a> request.  */
	export interface GetAccountPasswordPolicyResponse {

		/**
		 * <p>Contains information about the account password policy.</p> <p> This data type is used as a response element in the <a>GetAccountPasswordPolicy</a> operation. </p>
		 * Required
		 */
		PasswordPolicy: PasswordPolicy;
	}

	/** Contains the response to a successful <a>GetAccountPasswordPolicy</a> request.  */
	export interface GetAccountPasswordPolicyResponseFormProperties {
	}
	export function CreateGetAccountPasswordPolicyResponseFormGroup() {
		return new FormGroup<GetAccountPasswordPolicyResponseFormProperties>({
		});

	}


	/** <p>Contains information about the account password policy.</p> <p> This data type is used as a response element in the <a>GetAccountPasswordPolicy</a> operation. </p> */
	export interface PasswordPolicy {
		MinimumPasswordLength?: number | null;
		RequireSymbols?: boolean | null;
		RequireNumbers?: boolean | null;
		RequireUppercaseCharacters?: boolean | null;
		RequireLowercaseCharacters?: boolean | null;
		AllowUsersToChangePassword?: boolean | null;
		ExpirePasswords?: boolean | null;
		MaxPasswordAge?: number | null;
		PasswordReusePrevention?: number | null;
		HardExpiry?: boolean | null;
	}

	/** <p>Contains information about the account password policy.</p> <p> This data type is used as a response element in the <a>GetAccountPasswordPolicy</a> operation. </p> */
	export interface PasswordPolicyFormProperties {
		MinimumPasswordLength: FormControl<number | null | undefined>,
		RequireSymbols: FormControl<boolean | null | undefined>,
		RequireNumbers: FormControl<boolean | null | undefined>,
		RequireUppercaseCharacters: FormControl<boolean | null | undefined>,
		RequireLowercaseCharacters: FormControl<boolean | null | undefined>,
		AllowUsersToChangePassword: FormControl<boolean | null | undefined>,
		ExpirePasswords: FormControl<boolean | null | undefined>,
		MaxPasswordAge: FormControl<number | null | undefined>,
		PasswordReusePrevention: FormControl<number | null | undefined>,
		HardExpiry: FormControl<boolean | null | undefined>,
	}
	export function CreatePasswordPolicyFormGroup() {
		return new FormGroup<PasswordPolicyFormProperties>({
			MinimumPasswordLength: new FormControl<number | null | undefined>(undefined),
			RequireSymbols: new FormControl<boolean | null | undefined>(undefined),
			RequireNumbers: new FormControl<boolean | null | undefined>(undefined),
			RequireUppercaseCharacters: new FormControl<boolean | null | undefined>(undefined),
			RequireLowercaseCharacters: new FormControl<boolean | null | undefined>(undefined),
			AllowUsersToChangePassword: new FormControl<boolean | null | undefined>(undefined),
			ExpirePasswords: new FormControl<boolean | null | undefined>(undefined),
			MaxPasswordAge: new FormControl<number | null | undefined>(undefined),
			PasswordReusePrevention: new FormControl<number | null | undefined>(undefined),
			HardExpiry: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>GetAccountSummary</a> request.  */
	export interface GetAccountSummaryResponse {
		SummaryMap?: SummaryMapType;
	}

	/** Contains the response to a successful <a>GetAccountSummary</a> request.  */
	export interface GetAccountSummaryResponseFormProperties {
	}
	export function CreateGetAccountSummaryResponseFormGroup() {
		return new FormGroup<GetAccountSummaryResponseFormProperties>({
		});

	}

	export interface SummaryMapType {
	}
	export interface SummaryMapTypeFormProperties {
	}
	export function CreateSummaryMapTypeFormGroup() {
		return new FormGroup<SummaryMapTypeFormProperties>({
		});

	}


	/** Contains the response to a successful <a>GetContextKeysForPrincipalPolicy</a> or <a>GetContextKeysForCustomPolicy</a> request.  */
	export interface GetContextKeysForPolicyResponse {
		ContextKeyNames?: Array<string>;
	}

	/** Contains the response to a successful <a>GetContextKeysForPrincipalPolicy</a> or <a>GetContextKeysForCustomPolicy</a> request.  */
	export interface GetContextKeysForPolicyResponseFormProperties {
	}
	export function CreateGetContextKeysForPolicyResponseFormGroup() {
		return new FormGroup<GetContextKeysForPolicyResponseFormProperties>({
		});

	}


	/** Contains the response to a successful <a>GetCredentialReport</a> request.  */
	export interface GetCredentialReportResponse {
		Content?: string | null;
		ReportFormat?: GetCredentialReportResponseReportFormat | null;
		GeneratedTime?: Date | null;
	}

	/** Contains the response to a successful <a>GetCredentialReport</a> request.  */
	export interface GetCredentialReportResponseFormProperties {
		Content: FormControl<string | null | undefined>,
		ReportFormat: FormControl<GetCredentialReportResponseReportFormat | null | undefined>,
		GeneratedTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetCredentialReportResponseFormGroup() {
		return new FormGroup<GetCredentialReportResponseFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined),
			ReportFormat: new FormControl<GetCredentialReportResponseReportFormat | null | undefined>(undefined),
			GeneratedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum GetCredentialReportResponseReportFormat { text_csv = 0 }

	export interface CredentialReportNotPresentException {
	}
	export interface CredentialReportNotPresentExceptionFormProperties {
	}
	export function CreateCredentialReportNotPresentExceptionFormGroup() {
		return new FormGroup<CredentialReportNotPresentExceptionFormProperties>({
		});

	}

	export interface CredentialReportExpiredException {
	}
	export interface CredentialReportExpiredExceptionFormProperties {
	}
	export function CreateCredentialReportExpiredExceptionFormGroup() {
		return new FormGroup<CredentialReportExpiredExceptionFormProperties>({
		});

	}

	export interface CredentialReportNotReadyException {
	}
	export interface CredentialReportNotReadyExceptionFormProperties {
	}
	export function CreateCredentialReportNotReadyExceptionFormGroup() {
		return new FormGroup<CredentialReportNotReadyExceptionFormProperties>({
		});

	}


	/** Contains the response to a successful <a>GetGroup</a> request.  */
	export interface GetGroupResponse {

		/**
		 * <p>Contains information about an IAM group entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateGroup</a> </p> </li> <li> <p> <a>GetGroup</a> </p> </li> <li> <p> <a>ListGroups</a> </p> </li> </ul>
		 * Required
		 */
		Group: Group;

		/**
		 * <p>Contains a list of users.</p> <p>This data type is used as a response element in the <a>GetGroup</a> and <a>ListUsers</a> operations. </p>
		 * Required
		 */
		Users: Array<User>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>GetGroup</a> request.  */
	export interface GetGroupResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupResponseFormGroup() {
		return new FormGroup<GetGroupResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>GetGroupPolicy</a> request.  */
	export interface GetGroupPolicyResponse {
		GroupName: string;
		PolicyName: string;
		PolicyDocument: string;
	}

	/** Contains the response to a successful <a>GetGroupPolicy</a> request.  */
	export interface GetGroupPolicyResponseFormProperties {
		GroupName: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
		PolicyDocument: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupPolicyResponseFormGroup() {
		return new FormGroup<GetGroupPolicyResponseFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
			PolicyDocument: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>GetInstanceProfile</a> request.  */
	export interface GetInstanceProfileResponse {

		/**
		 * <p>Contains information about an instance profile.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateInstanceProfile</a> </p> </li> <li> <p> <a>GetInstanceProfile</a> </p> </li> <li> <p> <a>ListInstanceProfiles</a> </p> </li> <li> <p> <a>ListInstanceProfilesForRole</a> </p> </li> </ul>
		 * Required
		 */
		InstanceProfile: InstanceProfile;
	}

	/** Contains the response to a successful <a>GetInstanceProfile</a> request.  */
	export interface GetInstanceProfileResponseFormProperties {
	}
	export function CreateGetInstanceProfileResponseFormGroup() {
		return new FormGroup<GetInstanceProfileResponseFormProperties>({
		});

	}


	/** Contains the response to a successful <a>GetLoginProfile</a> request.  */
	export interface GetLoginProfileResponse {

		/**
		 * <p>Contains the user name and password create date for a user.</p> <p> This data type is used as a response element in the <a>CreateLoginProfile</a> and <a>GetLoginProfile</a> operations. </p>
		 * Required
		 */
		LoginProfile: LoginProfile;
	}

	/** Contains the response to a successful <a>GetLoginProfile</a> request.  */
	export interface GetLoginProfileResponseFormProperties {
	}
	export function CreateGetLoginProfileResponseFormGroup() {
		return new FormGroup<GetLoginProfileResponseFormProperties>({
		});

	}


	/** Contains the response to a successful <a>GetOpenIDConnectProvider</a> request.  */
	export interface GetOpenIDConnectProviderResponse {

		/**
		 * Contains a URL that specifies the endpoint for an OpenID Connect provider.
		 * Max length: 255
		 * Min length: 1
		 */
		Url?: string | null;
		ClientIDList?: Array<string>;

		/** Contains a list of thumbprints of identity provider server certificates. */
		ThumbprintList?: Array<string>;
		CreateDate?: Date | null;
	}

	/** Contains the response to a successful <a>GetOpenIDConnectProvider</a> request.  */
	export interface GetOpenIDConnectProviderResponseFormProperties {

		/**
		 * Contains a URL that specifies the endpoint for an OpenID Connect provider.
		 * Max length: 255
		 * Min length: 1
		 */
		Url: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetOpenIDConnectProviderResponseFormGroup() {
		return new FormGroup<GetOpenIDConnectProviderResponseFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetOrganizationsAccessReportResponse {
		JobStatus: GetOrganizationsAccessReportResponseJobStatus;
		JobCreationDate: Date;
		JobCompletionDate?: Date | null;
		NumberOfServicesAccessible?: number | null;
		NumberOfServicesNotAccessed?: number | null;
		AccessDetails?: Array<AccessDetail>;
		IsTruncated?: boolean | null;
		Marker?: string | null;

		/** <p>Contains information about the reason that the operation failed.</p> <p>This data type is used as a response element in the <a>GetOrganizationsAccessReport</a>, <a>GetServiceLastAccessedDetails</a>, and <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p> */
		ErrorDetails?: ErrorDetails;
	}
	export interface GetOrganizationsAccessReportResponseFormProperties {
		JobStatus: FormControl<GetOrganizationsAccessReportResponseJobStatus | null | undefined>,
		JobCreationDate: FormControl<Date | null | undefined>,
		JobCompletionDate: FormControl<Date | null | undefined>,
		NumberOfServicesAccessible: FormControl<number | null | undefined>,
		NumberOfServicesNotAccessed: FormControl<number | null | undefined>,
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateGetOrganizationsAccessReportResponseFormGroup() {
		return new FormGroup<GetOrganizationsAccessReportResponseFormProperties>({
			JobStatus: new FormControl<GetOrganizationsAccessReportResponseJobStatus | null | undefined>(undefined),
			JobCreationDate: new FormControl<Date | null | undefined>(undefined),
			JobCompletionDate: new FormControl<Date | null | undefined>(undefined),
			NumberOfServicesAccessible: new FormControl<number | null | undefined>(undefined),
			NumberOfServicesNotAccessed: new FormControl<number | null | undefined>(undefined),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetOrganizationsAccessReportResponseJobStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2 }


	/** <p>An object that contains details about when a principal in the reported AWS Organizations entity last attempted to access an AWS service. A principal can be an IAM user, an IAM role, or the AWS account root user within the reported Organizations entity.</p> <p>This data type is a response element in the <a>GetOrganizationsAccessReport</a> operation.</p> */
	export interface AccessDetail {
		ServiceName: string;
		ServiceNamespace: string;
		Region?: string | null;
		EntityPath?: string | null;
		LastAuthenticatedTime?: Date | null;
		TotalAuthenticatedEntities?: number | null;
	}

	/** <p>An object that contains details about when a principal in the reported AWS Organizations entity last attempted to access an AWS service. A principal can be an IAM user, an IAM role, or the AWS account root user within the reported Organizations entity.</p> <p>This data type is a response element in the <a>GetOrganizationsAccessReport</a> operation.</p> */
	export interface AccessDetailFormProperties {
		ServiceName: FormControl<string | null | undefined>,
		ServiceNamespace: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		EntityPath: FormControl<string | null | undefined>,
		LastAuthenticatedTime: FormControl<Date | null | undefined>,
		TotalAuthenticatedEntities: FormControl<number | null | undefined>,
	}
	export function CreateAccessDetailFormGroup() {
		return new FormGroup<AccessDetailFormProperties>({
			ServiceName: new FormControl<string | null | undefined>(undefined),
			ServiceNamespace: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			EntityPath: new FormControl<string | null | undefined>(undefined),
			LastAuthenticatedTime: new FormControl<Date | null | undefined>(undefined),
			TotalAuthenticatedEntities: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about the reason that the operation failed.</p> <p>This data type is used as a response element in the <a>GetOrganizationsAccessReport</a>, <a>GetServiceLastAccessedDetails</a>, and <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p> */
	export interface ErrorDetails {
		Message: string;
		Code: string;
	}

	/** <p>Contains information about the reason that the operation failed.</p> <p>This data type is used as a response element in the <a>GetOrganizationsAccessReport</a>, <a>GetServiceLastAccessedDetails</a>, and <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p> */
	export interface ErrorDetailsFormProperties {
		Message: FormControl<string | null | undefined>,
		Code: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>GetPolicy</a> request.  */
	export interface GetPolicyResponse {

		/** <p>Contains information about a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicy</a>, <a>GetPolicy</a>, and <a>ListPolicies</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
		Policy?: Policy;
	}

	/** Contains the response to a successful <a>GetPolicy</a> request.  */
	export interface GetPolicyResponseFormProperties {
	}
	export function CreateGetPolicyResponseFormGroup() {
		return new FormGroup<GetPolicyResponseFormProperties>({
		});

	}


	/** Contains the response to a successful <a>GetPolicyVersion</a> request.  */
	export interface GetPolicyVersionResponse {

		/** <p>Contains information about a version of a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicyVersion</a>, <a>GetPolicyVersion</a>, <a>ListPolicyVersions</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
		PolicyVersion?: PolicyVersion;
	}

	/** Contains the response to a successful <a>GetPolicyVersion</a> request.  */
	export interface GetPolicyVersionResponseFormProperties {
	}
	export function CreateGetPolicyVersionResponseFormGroup() {
		return new FormGroup<GetPolicyVersionResponseFormProperties>({
		});

	}


	/** Contains the response to a successful <a>GetRole</a> request.  */
	export interface GetRoleResponse {

		/**
		 * Contains information about an IAM role. This structure is returned as a response element in several API operations that interact with roles.
		 * Required
		 */
		Role: Role;
	}

	/** Contains the response to a successful <a>GetRole</a> request.  */
	export interface GetRoleResponseFormProperties {
	}
	export function CreateGetRoleResponseFormGroup() {
		return new FormGroup<GetRoleResponseFormProperties>({
		});

	}


	/** Contains the response to a successful <a>GetRolePolicy</a> request.  */
	export interface GetRolePolicyResponse {
		RoleName: string;
		PolicyName: string;
		PolicyDocument: string;
	}

	/** Contains the response to a successful <a>GetRolePolicy</a> request.  */
	export interface GetRolePolicyResponseFormProperties {
		RoleName: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
		PolicyDocument: FormControl<string | null | undefined>,
	}
	export function CreateGetRolePolicyResponseFormGroup() {
		return new FormGroup<GetRolePolicyResponseFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
			PolicyDocument: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>GetSAMLProvider</a> request.  */
	export interface GetSAMLProviderResponse {
		SAMLMetadataDocument?: string | null;
		CreateDate?: Date | null;
		ValidUntil?: Date | null;
	}

	/** Contains the response to a successful <a>GetSAMLProvider</a> request.  */
	export interface GetSAMLProviderResponseFormProperties {
		SAMLMetadataDocument: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		ValidUntil: FormControl<Date | null | undefined>,
	}
	export function CreateGetSAMLProviderResponseFormGroup() {
		return new FormGroup<GetSAMLProviderResponseFormProperties>({
			SAMLMetadataDocument: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			ValidUntil: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>GetSSHPublicKey</a> request. */
	export interface GetSSHPublicKeyResponse {

		/** <p>Contains information about an SSH public key.</p> <p>This data type is used as a response element in the <a>GetSSHPublicKey</a> and <a>UploadSSHPublicKey</a> operations. </p> */
		SSHPublicKey?: SSHPublicKey;
	}

	/** Contains the response to a successful <a>GetSSHPublicKey</a> request. */
	export interface GetSSHPublicKeyResponseFormProperties {
	}
	export function CreateGetSSHPublicKeyResponseFormGroup() {
		return new FormGroup<GetSSHPublicKeyResponseFormProperties>({
		});

	}


	/** <p>Contains information about an SSH public key.</p> <p>This data type is used as a response element in the <a>GetSSHPublicKey</a> and <a>UploadSSHPublicKey</a> operations. </p> */
	export interface SSHPublicKey {
		UserName: string;
		SSHPublicKeyId: string;
		Fingerprint: string;
		SSHPublicKeyBody: string;
		Status: AccessKeyStatus;
		UploadDate?: Date | null;
	}

	/** <p>Contains information about an SSH public key.</p> <p>This data type is used as a response element in the <a>GetSSHPublicKey</a> and <a>UploadSSHPublicKey</a> operations. </p> */
	export interface SSHPublicKeyFormProperties {
		UserName: FormControl<string | null | undefined>,
		SSHPublicKeyId: FormControl<string | null | undefined>,
		Fingerprint: FormControl<string | null | undefined>,
		SSHPublicKeyBody: FormControl<string | null | undefined>,
		Status: FormControl<AccessKeyStatus | null | undefined>,
		UploadDate: FormControl<Date | null | undefined>,
	}
	export function CreateSSHPublicKeyFormGroup() {
		return new FormGroup<SSHPublicKeyFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			SSHPublicKeyId: new FormControl<string | null | undefined>(undefined),
			Fingerprint: new FormControl<string | null | undefined>(undefined),
			SSHPublicKeyBody: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AccessKeyStatus | null | undefined>(undefined),
			UploadDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UnrecognizedPublicKeyEncodingException {
	}
	export interface UnrecognizedPublicKeyEncodingExceptionFormProperties {
	}
	export function CreateUnrecognizedPublicKeyEncodingExceptionFormGroup() {
		return new FormGroup<UnrecognizedPublicKeyEncodingExceptionFormProperties>({
		});

	}


	/** Contains the response to a successful <a>GetServerCertificate</a> request.  */
	export interface GetServerCertificateResponse {

		/**
		 * <p>Contains information about a server certificate.</p> <p> This data type is used as a response element in the <a>GetServerCertificate</a> operation. </p>
		 * Required
		 */
		ServerCertificate: ServerCertificate;
	}

	/** Contains the response to a successful <a>GetServerCertificate</a> request.  */
	export interface GetServerCertificateResponseFormProperties {
	}
	export function CreateGetServerCertificateResponseFormGroup() {
		return new FormGroup<GetServerCertificateResponseFormProperties>({
		});

	}


	/** <p>Contains information about a server certificate.</p> <p> This data type is used as a response element in the <a>GetServerCertificate</a> operation. </p> */
	export interface ServerCertificate {

		/**
		 * <p>Contains information about a server certificate without its certificate body, certificate chain, and private key.</p> <p> This data type is used as a response element in the <a>UploadServerCertificate</a> and <a>ListServerCertificates</a> operations. </p>
		 * Required
		 */
		ServerCertificateMetadata: ServerCertificateMetadata;
		CertificateBody: string;
		CertificateChain?: string | null;
	}

	/** <p>Contains information about a server certificate.</p> <p> This data type is used as a response element in the <a>GetServerCertificate</a> operation. </p> */
	export interface ServerCertificateFormProperties {
		CertificateBody: FormControl<string | null | undefined>,
		CertificateChain: FormControl<string | null | undefined>,
	}
	export function CreateServerCertificateFormGroup() {
		return new FormGroup<ServerCertificateFormProperties>({
			CertificateBody: new FormControl<string | null | undefined>(undefined),
			CertificateChain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about a server certificate without its certificate body, certificate chain, and private key.</p> <p> This data type is used as a response element in the <a>UploadServerCertificate</a> and <a>ListServerCertificates</a> operations. </p> */
	export interface ServerCertificateMetadata {
		Path: string;
		ServerCertificateName: string;
		ServerCertificateId: string;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: string;
		UploadDate?: Date | null;
		Expiration?: Date | null;
	}

	/** <p>Contains information about a server certificate without its certificate body, certificate chain, and private key.</p> <p> This data type is used as a response element in the <a>UploadServerCertificate</a> and <a>ListServerCertificates</a> operations. </p> */
	export interface ServerCertificateMetadataFormProperties {
		Path: FormControl<string | null | undefined>,
		ServerCertificateName: FormControl<string | null | undefined>,
		ServerCertificateId: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
		UploadDate: FormControl<Date | null | undefined>,
		Expiration: FormControl<Date | null | undefined>,
	}
	export function CreateServerCertificateMetadataFormGroup() {
		return new FormGroup<ServerCertificateMetadataFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			ServerCertificateName: new FormControl<string | null | undefined>(undefined),
			ServerCertificateId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			UploadDate: new FormControl<Date | null | undefined>(undefined),
			Expiration: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetServiceLastAccessedDetailsResponse {
		JobStatus: GetOrganizationsAccessReportResponseJobStatus;
		JobType?: GetServiceLastAccessedDetailsResponseJobType | null;
		JobCreationDate: Date;
		ServicesLastAccessed: Array<ServiceLastAccessed>;
		JobCompletionDate: Date;
		IsTruncated?: boolean | null;
		Marker?: string | null;

		/** <p>Contains information about the reason that the operation failed.</p> <p>This data type is used as a response element in the <a>GetOrganizationsAccessReport</a>, <a>GetServiceLastAccessedDetails</a>, and <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p> */
		Error?: ErrorDetails;
	}
	export interface GetServiceLastAccessedDetailsResponseFormProperties {
		JobStatus: FormControl<GetOrganizationsAccessReportResponseJobStatus | null | undefined>,
		JobType: FormControl<GetServiceLastAccessedDetailsResponseJobType | null | undefined>,
		JobCreationDate: FormControl<Date | null | undefined>,
		JobCompletionDate: FormControl<Date | null | undefined>,
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceLastAccessedDetailsResponseFormGroup() {
		return new FormGroup<GetServiceLastAccessedDetailsResponseFormProperties>({
			JobStatus: new FormControl<GetOrganizationsAccessReportResponseJobStatus | null | undefined>(undefined),
			JobType: new FormControl<GetServiceLastAccessedDetailsResponseJobType | null | undefined>(undefined),
			JobCreationDate: new FormControl<Date | null | undefined>(undefined),
			JobCompletionDate: new FormControl<Date | null | undefined>(undefined),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetServiceLastAccessedDetailsResponseJobType { SERVICE_LEVEL = 0, ACTION_LEVEL = 1 }


	/** <p>Contains details about the most recent attempt to access the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p> */
	export interface ServiceLastAccessed {
		ServiceName: string;
		LastAuthenticated?: Date | null;
		ServiceNamespace: string;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		LastAuthenticatedEntity?: string | null;
		LastAuthenticatedRegion?: string | null;
		TotalAuthenticatedEntities?: number | null;
		TrackedActionsLastAccessed?: Array<TrackedActionLastAccessed>;
	}

	/** <p>Contains details about the most recent attempt to access the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p> */
	export interface ServiceLastAccessedFormProperties {
		ServiceName: FormControl<string | null | undefined>,
		LastAuthenticated: FormControl<Date | null | undefined>,
		ServiceNamespace: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		LastAuthenticatedEntity: FormControl<string | null | undefined>,
		LastAuthenticatedRegion: FormControl<string | null | undefined>,
		TotalAuthenticatedEntities: FormControl<number | null | undefined>,
	}
	export function CreateServiceLastAccessedFormGroup() {
		return new FormGroup<ServiceLastAccessedFormProperties>({
			ServiceName: new FormControl<string | null | undefined>(undefined),
			LastAuthenticated: new FormControl<Date | null | undefined>(undefined),
			ServiceNamespace: new FormControl<string | null | undefined>(undefined),
			LastAuthenticatedEntity: new FormControl<string | null | undefined>(undefined),
			LastAuthenticatedRegion: new FormControl<string | null | undefined>(undefined),
			TotalAuthenticatedEntities: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Contains details about the most recent attempt to access an action within the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p> */
	export interface TrackedActionLastAccessed {
		ActionName?: string | null;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		LastAccessedEntity?: string | null;
		LastAccessedTime?: Date | null;
		LastAccessedRegion?: string | null;
	}

	/** <p>Contains details about the most recent attempt to access an action within the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p> */
	export interface TrackedActionLastAccessedFormProperties {
		ActionName: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		LastAccessedEntity: FormControl<string | null | undefined>,
		LastAccessedTime: FormControl<Date | null | undefined>,
		LastAccessedRegion: FormControl<string | null | undefined>,
	}
	export function CreateTrackedActionLastAccessedFormGroup() {
		return new FormGroup<TrackedActionLastAccessedFormProperties>({
			ActionName: new FormControl<string | null | undefined>(undefined),
			LastAccessedEntity: new FormControl<string | null | undefined>(undefined),
			LastAccessedTime: new FormControl<Date | null | undefined>(undefined),
			LastAccessedRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetServiceLastAccessedDetailsWithEntitiesResponse {
		JobStatus: GetOrganizationsAccessReportResponseJobStatus;
		JobCreationDate: Date;
		JobCompletionDate: Date;
		EntityDetailsList: Array<EntityDetails>;
		IsTruncated?: boolean | null;
		Marker?: string | null;

		/** <p>Contains information about the reason that the operation failed.</p> <p>This data type is used as a response element in the <a>GetOrganizationsAccessReport</a>, <a>GetServiceLastAccessedDetails</a>, and <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p> */
		Error?: ErrorDetails;
	}
	export interface GetServiceLastAccessedDetailsWithEntitiesResponseFormProperties {
		JobStatus: FormControl<GetOrganizationsAccessReportResponseJobStatus | null | undefined>,
		JobCreationDate: FormControl<Date | null | undefined>,
		JobCompletionDate: FormControl<Date | null | undefined>,
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceLastAccessedDetailsWithEntitiesResponseFormGroup() {
		return new FormGroup<GetServiceLastAccessedDetailsWithEntitiesResponseFormProperties>({
			JobStatus: new FormControl<GetOrganizationsAccessReportResponseJobStatus | null | undefined>(undefined),
			JobCreationDate: new FormControl<Date | null | undefined>(undefined),
			JobCompletionDate: new FormControl<Date | null | undefined>(undefined),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>An object that contains details about when the IAM entities (users or roles) were last used in an attempt to access the specified AWS service.</p> <p>This data type is a response element in the <a>GetServiceLastAccessedDetailsWithEntities</a> operation.</p> */
	export interface EntityDetails {

		/**
		 * <p>Contains details about the specified entity (user or role).</p> <p>This data type is an element of the <a>EntityDetails</a> object.</p>
		 * Required
		 */
		EntityInfo: EntityInfo;
		LastAuthenticated?: Date | null;
	}

	/** <p>An object that contains details about when the IAM entities (users or roles) were last used in an attempt to access the specified AWS service.</p> <p>This data type is a response element in the <a>GetServiceLastAccessedDetailsWithEntities</a> operation.</p> */
	export interface EntityDetailsFormProperties {
		LastAuthenticated: FormControl<Date | null | undefined>,
	}
	export function CreateEntityDetailsFormGroup() {
		return new FormGroup<EntityDetailsFormProperties>({
			LastAuthenticated: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>Contains details about the specified entity (user or role).</p> <p>This data type is an element of the <a>EntityDetails</a> object.</p> */
	export interface EntityInfo {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: string;
		Name: string;
		Type: EntityInfoType;
		Id: string;
		Path?: string | null;
	}

	/** <p>Contains details about the specified entity (user or role).</p> <p>This data type is an element of the <a>EntityDetails</a> object.</p> */
	export interface EntityInfoFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<EntityInfoType | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
	}
	export function CreateEntityInfoFormGroup() {
		return new FormGroup<EntityInfoFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EntityInfoType | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EntityInfoType { USER = 0, ROLE = 1, GROUP = 2 }

	export interface GetServiceLinkedRoleDeletionStatusResponse {
		Status: GetServiceLinkedRoleDeletionStatusResponseStatus;

		/** <p>The reason that the service-linked role deletion failed.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p> */
		Reason?: DeletionTaskFailureReasonType;
	}
	export interface GetServiceLinkedRoleDeletionStatusResponseFormProperties {
		Status: FormControl<GetServiceLinkedRoleDeletionStatusResponseStatus | null | undefined>,
	}
	export function CreateGetServiceLinkedRoleDeletionStatusResponseFormGroup() {
		return new FormGroup<GetServiceLinkedRoleDeletionStatusResponseFormProperties>({
			Status: new FormControl<GetServiceLinkedRoleDeletionStatusResponseStatus | null | undefined>(undefined),
		});

	}

	export enum GetServiceLinkedRoleDeletionStatusResponseStatus { SUCCEEDED = 0, IN_PROGRESS = 1, FAILED = 2, NOT_STARTED = 3 }


	/** <p>The reason that the service-linked role deletion failed.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p> */
	export interface DeletionTaskFailureReasonType {
		Reason?: string | null;
		RoleUsageList?: Array<RoleUsageType>;
	}

	/** <p>The reason that the service-linked role deletion failed.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p> */
	export interface DeletionTaskFailureReasonTypeFormProperties {
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateDeletionTaskFailureReasonTypeFormGroup() {
		return new FormGroup<DeletionTaskFailureReasonTypeFormProperties>({
			Reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>An object that contains details about how a service-linked role is used, if that information is returned by the service.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p> */
	export interface RoleUsageType {
		Region?: string | null;
		Resources?: Array<string>;
	}

	/** <p>An object that contains details about how a service-linked role is used, if that information is returned by the service.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p> */
	export interface RoleUsageTypeFormProperties {
		Region: FormControl<string | null | undefined>,
	}
	export function CreateRoleUsageTypeFormGroup() {
		return new FormGroup<RoleUsageTypeFormProperties>({
			Region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>GetUser</a> request.  */
	export interface GetUserResponse {

		/**
		 * <p>Contains information about an IAM user entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateUser</a> </p> </li> <li> <p> <a>GetUser</a> </p> </li> <li> <p> <a>ListUsers</a> </p> </li> </ul>
		 * Required
		 */
		User: User;
	}

	/** Contains the response to a successful <a>GetUser</a> request.  */
	export interface GetUserResponseFormProperties {
	}
	export function CreateGetUserResponseFormGroup() {
		return new FormGroup<GetUserResponseFormProperties>({
		});

	}


	/** Contains the response to a successful <a>GetUserPolicy</a> request.  */
	export interface GetUserPolicyResponse {
		UserName: string;
		PolicyName: string;
		PolicyDocument: string;
	}

	/** Contains the response to a successful <a>GetUserPolicy</a> request.  */
	export interface GetUserPolicyResponseFormProperties {
		UserName: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
		PolicyDocument: FormControl<string | null | undefined>,
	}
	export function CreateGetUserPolicyResponseFormGroup() {
		return new FormGroup<GetUserPolicyResponseFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
			PolicyDocument: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListAccessKeys</a> request.  */
	export interface ListAccessKeysResponse {

		/**
		 * <p>Contains a list of access key metadata.</p> <p>This data type is used as a response element in the <a>ListAccessKeys</a> operation.</p>
		 * Required
		 */
		AccessKeyMetadata: Array<AccessKeyMetadata>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListAccessKeys</a> request.  */
	export interface ListAccessKeysResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListAccessKeysResponseFormGroup() {
		return new FormGroup<ListAccessKeysResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about an AWS access key, without its secret key.</p> <p>This data type is used as a response element in the <a>ListAccessKeys</a> operation.</p> */
	export interface AccessKeyMetadata {
		UserName?: string | null;
		AccessKeyId?: string | null;
		Status?: AccessKeyStatus | null;
		CreateDate?: Date | null;
	}

	/** <p>Contains information about an AWS access key, without its secret key.</p> <p>This data type is used as a response element in the <a>ListAccessKeys</a> operation.</p> */
	export interface AccessKeyMetadataFormProperties {
		UserName: FormControl<string | null | undefined>,
		AccessKeyId: FormControl<string | null | undefined>,
		Status: FormControl<AccessKeyStatus | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
	}
	export function CreateAccessKeyMetadataFormGroup() {
		return new FormGroup<AccessKeyMetadataFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			AccessKeyId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AccessKeyStatus | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListAccountAliases</a> request.  */
	export interface ListAccountAliasesResponse {
		AccountAliases: Array<string>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListAccountAliases</a> request.  */
	export interface ListAccountAliasesResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListAccountAliasesResponseFormGroup() {
		return new FormGroup<ListAccountAliasesResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListAttachedGroupPolicies</a> request.  */
	export interface ListAttachedGroupPoliciesResponse {
		AttachedPolicies?: Array<AttachedPolicy>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListAttachedGroupPolicies</a> request.  */
	export interface ListAttachedGroupPoliciesResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListAttachedGroupPoliciesResponseFormGroup() {
		return new FormGroup<ListAttachedGroupPoliciesResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListAttachedRolePolicies</a> request.  */
	export interface ListAttachedRolePoliciesResponse {
		AttachedPolicies?: Array<AttachedPolicy>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListAttachedRolePolicies</a> request.  */
	export interface ListAttachedRolePoliciesResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListAttachedRolePoliciesResponseFormGroup() {
		return new FormGroup<ListAttachedRolePoliciesResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListAttachedUserPolicies</a> request.  */
	export interface ListAttachedUserPoliciesResponse {
		AttachedPolicies?: Array<AttachedPolicy>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListAttachedUserPolicies</a> request.  */
	export interface ListAttachedUserPoliciesResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListAttachedUserPoliciesResponseFormGroup() {
		return new FormGroup<ListAttachedUserPoliciesResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListEntitiesForPolicy</a> request.  */
	export interface ListEntitiesForPolicyResponse {
		PolicyGroups?: Array<PolicyGroup>;
		PolicyUsers?: Array<PolicyUser>;
		PolicyRoles?: Array<PolicyRole>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListEntitiesForPolicy</a> request.  */
	export interface ListEntitiesForPolicyResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListEntitiesForPolicyResponseFormGroup() {
		return new FormGroup<ListEntitiesForPolicyResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about a group that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
	export interface PolicyGroup {
		GroupName?: string | null;
		GroupId?: string | null;
	}

	/** <p>Contains information about a group that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
	export interface PolicyGroupFormProperties {
		GroupName: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreatePolicyGroupFormGroup() {
		return new FormGroup<PolicyGroupFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about a user that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
	export interface PolicyUser {
		UserName?: string | null;
		UserId?: string | null;
	}

	/** <p>Contains information about a user that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
	export interface PolicyUserFormProperties {
		UserName: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
	}
	export function CreatePolicyUserFormGroup() {
		return new FormGroup<PolicyUserFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about a role that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
	export interface PolicyRole {
		RoleName?: string | null;
		RoleId?: string | null;
	}

	/** <p>Contains information about a role that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>. </p> */
	export interface PolicyRoleFormProperties {
		RoleName: FormControl<string | null | undefined>,
		RoleId: FormControl<string | null | undefined>,
	}
	export function CreatePolicyRoleFormGroup() {
		return new FormGroup<PolicyRoleFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
			RoleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListGroupPolicies</a> request.  */
	export interface ListGroupPoliciesResponse {

		/**
		 * <p>Contains a list of policy names.</p> <p>This data type is used as a response element in the <a>ListPolicies</a> operation.</p>
		 * Required
		 */
		PolicyNames: Array<string>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListGroupPolicies</a> request.  */
	export interface ListGroupPoliciesResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListGroupPoliciesResponseFormGroup() {
		return new FormGroup<ListGroupPoliciesResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListGroups</a> request.  */
	export interface ListGroupsResponse {

		/**
		 * <p>Contains a list of IAM groups.</p> <p>This data type is used as a response element in the <a>ListGroups</a> operation.</p>
		 * Required
		 */
		Groups: Array<Group>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListGroups</a> request.  */
	export interface ListGroupsResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsResponseFormGroup() {
		return new FormGroup<ListGroupsResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListGroupsForUser</a> request.  */
	export interface ListGroupsForUserResponse {

		/**
		 * <p>Contains a list of IAM groups.</p> <p>This data type is used as a response element in the <a>ListGroups</a> operation.</p>
		 * Required
		 */
		Groups: Array<Group>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListGroupsForUser</a> request.  */
	export interface ListGroupsForUserResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsForUserResponseFormGroup() {
		return new FormGroup<ListGroupsForUserResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListInstanceProfiles</a> request.  */
	export interface ListInstanceProfilesResponse {

		/**
		 * Contains a list of instance profiles.
		 * Required
		 */
		InstanceProfiles: Array<InstanceProfile>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListInstanceProfiles</a> request.  */
	export interface ListInstanceProfilesResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListInstanceProfilesResponseFormGroup() {
		return new FormGroup<ListInstanceProfilesResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListInstanceProfilesForRole</a> request.  */
	export interface ListInstanceProfilesForRoleResponse {

		/**
		 * Contains a list of instance profiles.
		 * Required
		 */
		InstanceProfiles: Array<InstanceProfile>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListInstanceProfilesForRole</a> request.  */
	export interface ListInstanceProfilesForRoleResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListInstanceProfilesForRoleResponseFormGroup() {
		return new FormGroup<ListInstanceProfilesForRoleResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListMFADevices</a> request.  */
	export interface ListMFADevicesResponse {

		/**
		 * <p>Contains a list of MFA devices.</p> <p>This data type is used as a response element in the <a>ListMFADevices</a> and <a>ListVirtualMFADevices</a> operations. </p>
		 * Required
		 */
		MFADevices: Array<MFADevice>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListMFADevices</a> request.  */
	export interface ListMFADevicesResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListMFADevicesResponseFormGroup() {
		return new FormGroup<ListMFADevicesResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about an MFA device.</p> <p>This data type is used as a response element in the <a>ListMFADevices</a> operation.</p> */
	export interface MFADevice {
		UserName: string;
		SerialNumber: string;
		EnableDate: Date;
	}

	/** <p>Contains information about an MFA device.</p> <p>This data type is used as a response element in the <a>ListMFADevices</a> operation.</p> */
	export interface MFADeviceFormProperties {
		UserName: FormControl<string | null | undefined>,
		SerialNumber: FormControl<string | null | undefined>,
		EnableDate: FormControl<Date | null | undefined>,
	}
	export function CreateMFADeviceFormGroup() {
		return new FormGroup<MFADeviceFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			EnableDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListOpenIDConnectProviders</a> request.  */
	export interface ListOpenIDConnectProvidersResponse {

		/** Contains a list of IAM OpenID Connect providers. */
		OpenIDConnectProviderList?: Array<OpenIDConnectProviderListEntry>;
	}

	/** Contains the response to a successful <a>ListOpenIDConnectProviders</a> request.  */
	export interface ListOpenIDConnectProvidersResponseFormProperties {
	}
	export function CreateListOpenIDConnectProvidersResponseFormGroup() {
		return new FormGroup<ListOpenIDConnectProvidersResponseFormProperties>({
		});

	}


	/** Contains the Amazon Resource Name (ARN) for an IAM OpenID Connect provider. */
	export interface OpenIDConnectProviderListEntry {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn?: string | null;
	}

	/** Contains the Amazon Resource Name (ARN) for an IAM OpenID Connect provider. */
	export interface OpenIDConnectProviderListEntryFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateOpenIDConnectProviderListEntryFormGroup() {
		return new FormGroup<OpenIDConnectProviderListEntryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListPolicies</a> request.  */
	export interface ListPoliciesResponse {
		Policies?: Array<Policy>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListPolicies</a> request.  */
	export interface ListPoliciesResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListPoliciesResponseFormGroup() {
		return new FormGroup<ListPoliciesResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPoliciesGrantingServiceAccessResponse {
		PoliciesGrantingServiceAccess: Array<ListPoliciesGrantingServiceAccessEntry>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}
	export interface ListPoliciesGrantingServiceAccessResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListPoliciesGrantingServiceAccessResponseFormGroup() {
		return new FormGroup<ListPoliciesGrantingServiceAccessResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is used as a response element in the <a>ListPoliciesGrantingServiceAccess</a> operation.</p> */
	export interface ListPoliciesGrantingServiceAccessEntry {
		ServiceNamespace?: string | null;
		Policies?: Array<PolicyGrantingServiceAccess>;
	}

	/** <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is used as a response element in the <a>ListPoliciesGrantingServiceAccess</a> operation.</p> */
	export interface ListPoliciesGrantingServiceAccessEntryFormProperties {
		ServiceNamespace: FormControl<string | null | undefined>,
	}
	export function CreateListPoliciesGrantingServiceAccessEntryFormGroup() {
		return new FormGroup<ListPoliciesGrantingServiceAccessEntryFormProperties>({
			ServiceNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is an element of the <a>ListPoliciesGrantingServiceAccessEntry</a> object.</p> */
	export interface PolicyGrantingServiceAccess {
		PolicyName: string;
		PolicyType: PolicyGrantingServiceAccessPolicyType;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn?: string | null;
		EntityType?: EntityInfoType | null;
		EntityName?: string | null;
	}

	/** <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is an element of the <a>ListPoliciesGrantingServiceAccessEntry</a> object.</p> */
	export interface PolicyGrantingServiceAccessFormProperties {
		PolicyName: FormControl<string | null | undefined>,
		PolicyType: FormControl<PolicyGrantingServiceAccessPolicyType | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: FormControl<string | null | undefined>,
		EntityType: FormControl<EntityInfoType | null | undefined>,
		EntityName: FormControl<string | null | undefined>,
	}
	export function CreatePolicyGrantingServiceAccessFormGroup() {
		return new FormGroup<PolicyGrantingServiceAccessFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
			PolicyType: new FormControl<PolicyGrantingServiceAccessPolicyType | null | undefined>(undefined),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
			EntityType: new FormControl<EntityInfoType | null | undefined>(undefined),
			EntityName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PolicyGrantingServiceAccessPolicyType { INLINE = 0, MANAGED = 1 }


	/** Contains the response to a successful <a>ListPolicyVersions</a> request.  */
	export interface ListPolicyVersionsResponse {
		Versions?: Array<PolicyVersion>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListPolicyVersions</a> request.  */
	export interface ListPolicyVersionsResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListPolicyVersionsResponseFormGroup() {
		return new FormGroup<ListPolicyVersionsResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListRolePolicies</a> request.  */
	export interface ListRolePoliciesResponse {

		/**
		 * <p>Contains a list of policy names.</p> <p>This data type is used as a response element in the <a>ListPolicies</a> operation.</p>
		 * Required
		 */
		PolicyNames: Array<string>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListRolePolicies</a> request.  */
	export interface ListRolePoliciesResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListRolePoliciesResponseFormGroup() {
		return new FormGroup<ListRolePoliciesResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRoleTagsResponse {
		Tags: Array<Tag>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}
	export interface ListRoleTagsResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListRoleTagsResponseFormGroup() {
		return new FormGroup<ListRoleTagsResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListRoles</a> request.  */
	export interface ListRolesResponse {

		/**
		 * <p>Contains a list of IAM roles.</p> <p>This data type is used as a response element in the <a>ListRoles</a> operation.</p>
		 * Required
		 */
		Roles: Array<Role>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListRoles</a> request.  */
	export interface ListRolesResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListRolesResponseFormGroup() {
		return new FormGroup<ListRolesResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListSAMLProviders</a> request.  */
	export interface ListSAMLProvidersResponse {
		SAMLProviderList?: Array<SAMLProviderListEntry>;
	}

	/** Contains the response to a successful <a>ListSAMLProviders</a> request.  */
	export interface ListSAMLProvidersResponseFormProperties {
	}
	export function CreateListSAMLProvidersResponseFormGroup() {
		return new FormGroup<ListSAMLProvidersResponseFormProperties>({
		});

	}


	/** Contains the list of SAML providers for this account. */
	export interface SAMLProviderListEntry {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn?: string | null;
		ValidUntil?: Date | null;
		CreateDate?: Date | null;
	}

	/** Contains the list of SAML providers for this account. */
	export interface SAMLProviderListEntryFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
		ValidUntil: FormControl<Date | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
	}
	export function CreateSAMLProviderListEntryFormGroup() {
		return new FormGroup<SAMLProviderListEntryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ValidUntil: new FormControl<Date | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListSSHPublicKeys</a> request. */
	export interface ListSSHPublicKeysResponse {
		SSHPublicKeys?: Array<SSHPublicKeyMetadata>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListSSHPublicKeys</a> request. */
	export interface ListSSHPublicKeysResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListSSHPublicKeysResponseFormGroup() {
		return new FormGroup<ListSSHPublicKeysResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about an SSH public key, without the key's body or fingerprint.</p> <p>This data type is used as a response element in the <a>ListSSHPublicKeys</a> operation.</p> */
	export interface SSHPublicKeyMetadata {
		UserName: string;
		SSHPublicKeyId: string;
		Status: AccessKeyStatus;
		UploadDate: Date;
	}

	/** <p>Contains information about an SSH public key, without the key's body or fingerprint.</p> <p>This data type is used as a response element in the <a>ListSSHPublicKeys</a> operation.</p> */
	export interface SSHPublicKeyMetadataFormProperties {
		UserName: FormControl<string | null | undefined>,
		SSHPublicKeyId: FormControl<string | null | undefined>,
		Status: FormControl<AccessKeyStatus | null | undefined>,
		UploadDate: FormControl<Date | null | undefined>,
	}
	export function CreateSSHPublicKeyMetadataFormGroup() {
		return new FormGroup<SSHPublicKeyMetadataFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			SSHPublicKeyId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AccessKeyStatus | null | undefined>(undefined),
			UploadDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListServerCertificates</a> request.  */
	export interface ListServerCertificatesResponse {
		ServerCertificateMetadataList: Array<ServerCertificateMetadata>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListServerCertificates</a> request.  */
	export interface ListServerCertificatesResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListServerCertificatesResponseFormGroup() {
		return new FormGroup<ListServerCertificatesResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServiceSpecificCredentialsResponse {
		ServiceSpecificCredentials?: Array<ServiceSpecificCredentialMetadata>;
	}
	export interface ListServiceSpecificCredentialsResponseFormProperties {
	}
	export function CreateListServiceSpecificCredentialsResponseFormGroup() {
		return new FormGroup<ListServiceSpecificCredentialsResponseFormProperties>({
		});

	}


	/** Contains additional details about a service-specific credential. */
	export interface ServiceSpecificCredentialMetadata {
		UserName: string;
		Status: AccessKeyStatus;
		ServiceUserName: string;
		CreateDate: Date;
		ServiceSpecificCredentialId: string;
		ServiceName: string;
	}

	/** Contains additional details about a service-specific credential. */
	export interface ServiceSpecificCredentialMetadataFormProperties {
		UserName: FormControl<string | null | undefined>,
		Status: FormControl<AccessKeyStatus | null | undefined>,
		ServiceUserName: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		ServiceSpecificCredentialId: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
	}
	export function CreateServiceSpecificCredentialMetadataFormGroup() {
		return new FormGroup<ServiceSpecificCredentialMetadataFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AccessKeyStatus | null | undefined>(undefined),
			ServiceUserName: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			ServiceSpecificCredentialId: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListSigningCertificates</a> request.  */
	export interface ListSigningCertificatesResponse {

		/**
		 * <p>Contains a list of signing certificates.</p> <p>This data type is used as a response element in the <a>ListSigningCertificates</a> operation.</p>
		 * Required
		 */
		Certificates: Array<SigningCertificate>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListSigningCertificates</a> request.  */
	export interface ListSigningCertificatesResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListSigningCertificatesResponseFormGroup() {
		return new FormGroup<ListSigningCertificatesResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about an X.509 signing certificate.</p> <p>This data type is used as a response element in the <a>UploadSigningCertificate</a> and <a>ListSigningCertificates</a> operations. </p> */
	export interface SigningCertificate {
		UserName: string;
		CertificateId: string;
		CertificateBody: string;
		Status: AccessKeyStatus;
		UploadDate?: Date | null;
	}

	/** <p>Contains information about an X.509 signing certificate.</p> <p>This data type is used as a response element in the <a>UploadSigningCertificate</a> and <a>ListSigningCertificates</a> operations. </p> */
	export interface SigningCertificateFormProperties {
		UserName: FormControl<string | null | undefined>,
		CertificateId: FormControl<string | null | undefined>,
		CertificateBody: FormControl<string | null | undefined>,
		Status: FormControl<AccessKeyStatus | null | undefined>,
		UploadDate: FormControl<Date | null | undefined>,
	}
	export function CreateSigningCertificateFormGroup() {
		return new FormGroup<SigningCertificateFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			CertificateId: new FormControl<string | null | undefined>(undefined),
			CertificateBody: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AccessKeyStatus | null | undefined>(undefined),
			UploadDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListUserPolicies</a> request.  */
	export interface ListUserPoliciesResponse {

		/**
		 * <p>Contains a list of policy names.</p> <p>This data type is used as a response element in the <a>ListPolicies</a> operation.</p>
		 * Required
		 */
		PolicyNames: Array<string>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListUserPolicies</a> request.  */
	export interface ListUserPoliciesResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListUserPoliciesResponseFormGroup() {
		return new FormGroup<ListUserPoliciesResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUserTagsResponse {
		Tags: Array<Tag>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}
	export interface ListUserTagsResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListUserTagsResponseFormGroup() {
		return new FormGroup<ListUserTagsResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListUsers</a> request.  */
	export interface ListUsersResponse {

		/**
		 * <p>Contains a list of users.</p> <p>This data type is used as a response element in the <a>GetGroup</a> and <a>ListUsers</a> operations. </p>
		 * Required
		 */
		Users: Array<User>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListUsers</a> request.  */
	export interface ListUsersResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>ListVirtualMFADevices</a> request.  */
	export interface ListVirtualMFADevicesResponse {
		VirtualMFADevices: Array<VirtualMFADevice>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>ListVirtualMFADevices</a> request.  */
	export interface ListVirtualMFADevicesResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListVirtualMFADevicesResponseFormGroup() {
		return new FormGroup<ListVirtualMFADevicesResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResetServiceSpecificCredentialResponse {

		/** Contains the details of a service-specific credential. */
		ServiceSpecificCredential?: ServiceSpecificCredential;
	}
	export interface ResetServiceSpecificCredentialResponseFormProperties {
	}
	export function CreateResetServiceSpecificCredentialResponseFormGroup() {
		return new FormGroup<ResetServiceSpecificCredentialResponseFormProperties>({
		});

	}


	/** Contains the response to a successful <a>SimulatePrincipalPolicy</a> or <a>SimulateCustomPolicy</a> request. */
	export interface SimulatePolicyResponse {
		EvaluationResults?: Array<EvaluationResult>;
		IsTruncated?: boolean | null;
		Marker?: string | null;
	}

	/** Contains the response to a successful <a>SimulatePrincipalPolicy</a> or <a>SimulateCustomPolicy</a> request. */
	export interface SimulatePolicyResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateSimulatePolicyResponseFormGroup() {
		return new FormGroup<SimulatePolicyResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains the results of a simulation.</p> <p>This data type is used by the return parameter of <code> <a>SimulateCustomPolicy</a> </code> and <code> <a>SimulatePrincipalPolicy</a> </code>.</p> */
	export interface EvaluationResult {
		EvalActionName: string;
		EvalResourceName?: string | null;
		EvalDecision: EvaluationResultEvalDecision;
		MatchedStatements?: Array<Statement>;
		MissingContextValues?: Array<string>;

		/** Contains information about the effect that Organizations has on a policy simulation. */
		OrganizationsDecisionDetail?: OrganizationsDecisionDetail;

		/** Contains information about the effect that a permissions boundary has on a policy simulation when the boundary is applied to an IAM entity. */
		PermissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail;
		EvalDecisionDetails?: EvalDecisionDetailsType;
		ResourceSpecificResults?: Array<ResourceSpecificResult>;
	}

	/** <p>Contains the results of a simulation.</p> <p>This data type is used by the return parameter of <code> <a>SimulateCustomPolicy</a> </code> and <code> <a>SimulatePrincipalPolicy</a> </code>.</p> */
	export interface EvaluationResultFormProperties {
		EvalActionName: FormControl<string | null | undefined>,
		EvalResourceName: FormControl<string | null | undefined>,
		EvalDecision: FormControl<EvaluationResultEvalDecision | null | undefined>,
	}
	export function CreateEvaluationResultFormGroup() {
		return new FormGroup<EvaluationResultFormProperties>({
			EvalActionName: new FormControl<string | null | undefined>(undefined),
			EvalResourceName: new FormControl<string | null | undefined>(undefined),
			EvalDecision: new FormControl<EvaluationResultEvalDecision | null | undefined>(undefined),
		});

	}

	export enum EvaluationResultEvalDecision { allowed = 0, explicitDeny = 1, implicitDeny = 2 }


	/** <p>Contains a reference to a <code>Statement</code> element in a policy document that determines the result of the simulation.</p> <p>This data type is used by the <code>MatchedStatements</code> member of the <code> <a>EvaluationResult</a> </code> type.</p> */
	export interface Statement {
		SourcePolicyId?: string | null;
		SourcePolicyType?: StatementSourcePolicyType | null;

		/** <p>Contains the row and column of a location of a <code>Statement</code> element in a policy document.</p> <p>This data type is used as a member of the <code> <a>Statement</a> </code> type.</p> */
		StartPosition?: Position;

		/** <p>Contains the row and column of a location of a <code>Statement</code> element in a policy document.</p> <p>This data type is used as a member of the <code> <a>Statement</a> </code> type.</p> */
		EndPosition?: Position;
	}

	/** <p>Contains a reference to a <code>Statement</code> element in a policy document that determines the result of the simulation.</p> <p>This data type is used by the <code>MatchedStatements</code> member of the <code> <a>EvaluationResult</a> </code> type.</p> */
	export interface StatementFormProperties {
		SourcePolicyId: FormControl<string | null | undefined>,
		SourcePolicyType: FormControl<StatementSourcePolicyType | null | undefined>,
	}
	export function CreateStatementFormGroup() {
		return new FormGroup<StatementFormProperties>({
			SourcePolicyId: new FormControl<string | null | undefined>(undefined),
			SourcePolicyType: new FormControl<StatementSourcePolicyType | null | undefined>(undefined),
		});

	}

	export enum StatementSourcePolicyType { user = 0, group = 1, role = 2, aws_managed = 3, user_managed = 4, resource = 5, none = 6 }


	/** <p>Contains the row and column of a location of a <code>Statement</code> element in a policy document.</p> <p>This data type is used as a member of the <code> <a>Statement</a> </code> type.</p> */
	export interface Position {
		Line?: number | null;
		Column?: number | null;
	}

	/** <p>Contains the row and column of a location of a <code>Statement</code> element in a policy document.</p> <p>This data type is used as a member of the <code> <a>Statement</a> </code> type.</p> */
	export interface PositionFormProperties {
		Line: FormControl<number | null | undefined>,
		Column: FormControl<number | null | undefined>,
	}
	export function CreatePositionFormGroup() {
		return new FormGroup<PositionFormProperties>({
			Line: new FormControl<number | null | undefined>(undefined),
			Column: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about the effect that Organizations has on a policy simulation. */
	export interface OrganizationsDecisionDetail {
		AllowedByOrganizations?: boolean | null;
	}

	/** Contains information about the effect that Organizations has on a policy simulation. */
	export interface OrganizationsDecisionDetailFormProperties {
		AllowedByOrganizations: FormControl<boolean | null | undefined>,
	}
	export function CreateOrganizationsDecisionDetailFormGroup() {
		return new FormGroup<OrganizationsDecisionDetailFormProperties>({
			AllowedByOrganizations: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about the effect that a permissions boundary has on a policy simulation when the boundary is applied to an IAM entity. */
	export interface PermissionsBoundaryDecisionDetail {
		AllowedByPermissionsBoundary?: boolean | null;
	}

	/** Contains information about the effect that a permissions boundary has on a policy simulation when the boundary is applied to an IAM entity. */
	export interface PermissionsBoundaryDecisionDetailFormProperties {
		AllowedByPermissionsBoundary: FormControl<boolean | null | undefined>,
	}
	export function CreatePermissionsBoundaryDecisionDetailFormGroup() {
		return new FormGroup<PermissionsBoundaryDecisionDetailFormProperties>({
			AllowedByPermissionsBoundary: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EvalDecisionDetailsType {
	}
	export interface EvalDecisionDetailsTypeFormProperties {
	}
	export function CreateEvalDecisionDetailsTypeFormGroup() {
		return new FormGroup<EvalDecisionDetailsTypeFormProperties>({
		});

	}


	/** <p>Contains the result of the simulation of a single API operation call on a single resource.</p> <p>This data type is used by a member of the <a>EvaluationResult</a> data type.</p> */
	export interface ResourceSpecificResult {
		EvalResourceName: string;
		EvalResourceDecision: EvaluationResultEvalDecision;
		MatchedStatements?: Array<Statement>;
		MissingContextValues?: Array<string>;
		EvalDecisionDetails?: EvalDecisionDetailsType;

		/** Contains information about the effect that a permissions boundary has on a policy simulation when the boundary is applied to an IAM entity. */
		PermissionsBoundaryDecisionDetail?: PermissionsBoundaryDecisionDetail;
	}

	/** <p>Contains the result of the simulation of a single API operation call on a single resource.</p> <p>This data type is used by a member of the <a>EvaluationResult</a> data type.</p> */
	export interface ResourceSpecificResultFormProperties {
		EvalResourceName: FormControl<string | null | undefined>,
		EvalResourceDecision: FormControl<EvaluationResultEvalDecision | null | undefined>,
	}
	export function CreateResourceSpecificResultFormGroup() {
		return new FormGroup<ResourceSpecificResultFormProperties>({
			EvalResourceName: new FormControl<string | null | undefined>(undefined),
			EvalResourceDecision: new FormControl<EvaluationResultEvalDecision | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about a condition context key. It includes the name of the key and specifies the value (or values, if the context key supports multiple values) to use in the simulation. This information is used when evaluating the <code>Condition</code> elements of the input policies.</p> <p>This data type is used as an input parameter to <a>SimulateCustomPolicy</a> and <a>SimulatePrincipalPolicy</a>.</p> */
	export interface ContextEntry {
		ContextKeyName?: string | null;
		ContextKeyValues?: Array<string>;
		ContextKeyType?: ContextEntryContextKeyType | null;
	}

	/** <p>Contains information about a condition context key. It includes the name of the key and specifies the value (or values, if the context key supports multiple values) to use in the simulation. This information is used when evaluating the <code>Condition</code> elements of the input policies.</p> <p>This data type is used as an input parameter to <a>SimulateCustomPolicy</a> and <a>SimulatePrincipalPolicy</a>.</p> */
	export interface ContextEntryFormProperties {
		ContextKeyName: FormControl<string | null | undefined>,
		ContextKeyType: FormControl<ContextEntryContextKeyType | null | undefined>,
	}
	export function CreateContextEntryFormGroup() {
		return new FormGroup<ContextEntryFormProperties>({
			ContextKeyName: new FormControl<string | null | undefined>(undefined),
			ContextKeyType: new FormControl<ContextEntryContextKeyType | null | undefined>(undefined),
		});

	}

	export enum ContextEntryContextKeyType { _string = 0, stringList = 1, numeric = 2, numericList = 3, boolean = 4, booleanList = 5, ip = 6, ipList = 7, binary = 8, binaryList = 9, date = 10, dateList = 11 }

	export interface PolicyEvaluationException {
	}
	export interface PolicyEvaluationExceptionFormProperties {
	}
	export function CreatePolicyEvaluationExceptionFormGroup() {
		return new FormGroup<PolicyEvaluationExceptionFormProperties>({
		});

	}

	export interface UpdateRoleResponse {
	}
	export interface UpdateRoleResponseFormProperties {
	}
	export function CreateUpdateRoleResponseFormGroup() {
		return new FormGroup<UpdateRoleResponseFormProperties>({
		});

	}

	export interface UpdateRoleDescriptionResponse {

		/** Contains information about an IAM role. This structure is returned as a response element in several API operations that interact with roles. */
		Role?: Role;
	}
	export interface UpdateRoleDescriptionResponseFormProperties {
	}
	export function CreateUpdateRoleDescriptionResponseFormGroup() {
		return new FormGroup<UpdateRoleDescriptionResponseFormProperties>({
		});

	}


	/** Contains the response to a successful <a>UpdateSAMLProvider</a> request.  */
	export interface UpdateSAMLProviderResponse {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		SAMLProviderArn?: string | null;
	}

	/** Contains the response to a successful <a>UpdateSAMLProvider</a> request.  */
	export interface UpdateSAMLProviderResponseFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		SAMLProviderArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSAMLProviderResponseFormGroup() {
		return new FormGroup<UpdateSAMLProviderResponseFormProperties>({
			SAMLProviderArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>UploadSSHPublicKey</a> request. */
	export interface UploadSSHPublicKeyResponse {

		/** <p>Contains information about an SSH public key.</p> <p>This data type is used as a response element in the <a>GetSSHPublicKey</a> and <a>UploadSSHPublicKey</a> operations. </p> */
		SSHPublicKey?: SSHPublicKey;
	}

	/** Contains the response to a successful <a>UploadSSHPublicKey</a> request. */
	export interface UploadSSHPublicKeyResponseFormProperties {
	}
	export function CreateUploadSSHPublicKeyResponseFormGroup() {
		return new FormGroup<UploadSSHPublicKeyResponseFormProperties>({
		});

	}

	export interface InvalidPublicKeyException {
	}
	export interface InvalidPublicKeyExceptionFormProperties {
	}
	export function CreateInvalidPublicKeyExceptionFormGroup() {
		return new FormGroup<InvalidPublicKeyExceptionFormProperties>({
		});

	}

	export interface DuplicateSSHPublicKeyException {
	}
	export interface DuplicateSSHPublicKeyExceptionFormProperties {
	}
	export function CreateDuplicateSSHPublicKeyExceptionFormGroup() {
		return new FormGroup<DuplicateSSHPublicKeyExceptionFormProperties>({
		});

	}


	/** Contains the response to a successful <a>UploadServerCertificate</a> request.  */
	export interface UploadServerCertificateResponse {

		/** <p>Contains information about a server certificate without its certificate body, certificate chain, and private key.</p> <p> This data type is used as a response element in the <a>UploadServerCertificate</a> and <a>ListServerCertificates</a> operations. </p> */
		ServerCertificateMetadata?: ServerCertificateMetadata;
	}

	/** Contains the response to a successful <a>UploadServerCertificate</a> request.  */
	export interface UploadServerCertificateResponseFormProperties {
	}
	export function CreateUploadServerCertificateResponseFormGroup() {
		return new FormGroup<UploadServerCertificateResponseFormProperties>({
		});

	}

	export interface MalformedCertificateException {
	}
	export interface MalformedCertificateExceptionFormProperties {
	}
	export function CreateMalformedCertificateExceptionFormGroup() {
		return new FormGroup<MalformedCertificateExceptionFormProperties>({
		});

	}

	export interface KeyPairMismatchException {
	}
	export interface KeyPairMismatchExceptionFormProperties {
	}
	export function CreateKeyPairMismatchExceptionFormGroup() {
		return new FormGroup<KeyPairMismatchExceptionFormProperties>({
		});

	}


	/** Contains the response to a successful <a>UploadSigningCertificate</a> request.  */
	export interface UploadSigningCertificateResponse {

		/**
		 * <p>Contains information about an X.509 signing certificate.</p> <p>This data type is used as a response element in the <a>UploadSigningCertificate</a> and <a>ListSigningCertificates</a> operations. </p>
		 * Required
		 */
		Certificate: SigningCertificate;
	}

	/** Contains the response to a successful <a>UploadSigningCertificate</a> request.  */
	export interface UploadSigningCertificateResponseFormProperties {
	}
	export function CreateUploadSigningCertificateResponseFormGroup() {
		return new FormGroup<UploadSigningCertificateResponseFormProperties>({
		});

	}

	export interface InvalidCertificateException {
	}
	export interface InvalidCertificateExceptionFormProperties {
	}
	export function CreateInvalidCertificateExceptionFormGroup() {
		return new FormGroup<InvalidCertificateExceptionFormProperties>({
		});

	}

	export interface DuplicateCertificateException {
	}
	export interface DuplicateCertificateExceptionFormProperties {
	}
	export function CreateDuplicateCertificateExceptionFormGroup() {
		return new FormGroup<DuplicateCertificateExceptionFormProperties>({
		});

	}

	export enum AccessAdvisorUsageGranularityType { SERVICE_LEVEL = 0, ACTION_LEVEL = 1 }

	export enum StatusType { Active = 0, Inactive = 1 }

	export interface AddClientIDToOpenIDConnectProviderRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		OpenIDConnectProviderArn: string;
		ClientID: string;
	}
	export interface AddClientIDToOpenIDConnectProviderRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		OpenIDConnectProviderArn: FormControl<string | null | undefined>,
		ClientID: FormControl<string | null | undefined>,
	}
	export function CreateAddClientIDToOpenIDConnectProviderRequestFormGroup() {
		return new FormGroup<AddClientIDToOpenIDConnectProviderRequestFormProperties>({
			OpenIDConnectProviderArn: new FormControl<string | null | undefined>(undefined),
			ClientID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddRoleToInstanceProfileRequest {
		InstanceProfileName: string;
		RoleName: string;
	}
	export interface AddRoleToInstanceProfileRequestFormProperties {
		InstanceProfileName: FormControl<string | null | undefined>,
		RoleName: FormControl<string | null | undefined>,
	}
	export function CreateAddRoleToInstanceProfileRequestFormGroup() {
		return new FormGroup<AddRoleToInstanceProfileRequestFormProperties>({
			InstanceProfileName: new FormControl<string | null | undefined>(undefined),
			RoleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddUserToGroupRequest {
		GroupName: string;
		UserName: string;
	}
	export interface AddUserToGroupRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateAddUserToGroupRequestFormGroup() {
		return new FormGroup<AddUserToGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachGroupPolicyRequest {
		GroupName: string;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: string;
	}
	export interface AttachGroupPolicyRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateAttachGroupPolicyRequestFormGroup() {
		return new FormGroup<AttachGroupPolicyRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachRolePolicyRequest {
		RoleName: string;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: string;
	}
	export interface AttachRolePolicyRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateAttachRolePolicyRequestFormGroup() {
		return new FormGroup<AttachRolePolicyRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachUserPolicyRequest {
		UserName: string;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: string;
	}
	export interface AttachUserPolicyRequestFormProperties {
		UserName: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateAttachUserPolicyRequestFormGroup() {
		return new FormGroup<AttachUserPolicyRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PermissionsBoundaryAttachmentType { PermissionsBoundaryPolicy = 0 }

	export interface ChangePasswordRequest {
		OldPassword: string;
		NewPassword: string;
	}
	export interface ChangePasswordRequestFormProperties {
		OldPassword: FormControl<string | null | undefined>,
		NewPassword: FormControl<string | null | undefined>,
	}
	export function CreateChangePasswordRequestFormGroup() {
		return new FormGroup<ChangePasswordRequestFormProperties>({
			OldPassword: new FormControl<string | null | undefined>(undefined),
			NewPassword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContextKeyTypeEnum { _string = 0, stringList = 1, numeric = 2, numericList = 3, boolean = 4, booleanList = 5, ip = 6, ipList = 7, binary = 8, binaryList = 9, date = 10, dateList = 11 }

	export interface CreateAccessKeyRequest {
		UserName?: string | null;
	}
	export interface CreateAccessKeyRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessKeyRequestFormGroup() {
		return new FormGroup<CreateAccessKeyRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAccountAliasRequest {
		AccountAlias: string;
	}
	export interface CreateAccountAliasRequestFormProperties {
		AccountAlias: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccountAliasRequestFormGroup() {
		return new FormGroup<CreateAccountAliasRequestFormProperties>({
			AccountAlias: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupRequest {
		Path?: string | null;
		GroupName: string;
	}
	export interface CreateGroupRequestFormProperties {
		Path: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupRequestFormGroup() {
		return new FormGroup<CreateGroupRequestFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateInstanceProfileRequest {
		InstanceProfileName: string;
		Path?: string | null;
	}
	export interface CreateInstanceProfileRequestFormProperties {
		InstanceProfileName: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
	}
	export function CreateCreateInstanceProfileRequestFormGroup() {
		return new FormGroup<CreateInstanceProfileRequestFormProperties>({
			InstanceProfileName: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLoginProfileRequest {
		UserName: string;
		Password: string;
		PasswordResetRequired?: boolean | null;
	}
	export interface CreateLoginProfileRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		PasswordResetRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateLoginProfileRequestFormGroup() {
		return new FormGroup<CreateLoginProfileRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			PasswordResetRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateOpenIDConnectProviderRequest {

		/**
		 * Contains a URL that specifies the endpoint for an OpenID Connect provider.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Url: string;
		ClientIDList?: Array<string>;

		/**
		 * Contains a list of thumbprints of identity provider server certificates.
		 * Required
		 */
		ThumbprintList: Array<string>;
	}
	export interface CreateOpenIDConnectProviderRequestFormProperties {

		/**
		 * Contains a URL that specifies the endpoint for an OpenID Connect provider.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateCreateOpenIDConnectProviderRequestFormGroup() {
		return new FormGroup<CreateOpenIDConnectProviderRequestFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePolicyRequest {
		PolicyName: string;
		Path?: string | null;
		PolicyDocument: string;
		Description?: string | null;
	}
	export interface CreatePolicyRequestFormProperties {
		PolicyName: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
		PolicyDocument: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreatePolicyRequestFormGroup() {
		return new FormGroup<CreatePolicyRequestFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			PolicyDocument: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePolicyVersionRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: string;
		PolicyDocument: string;
		SetAsDefault?: boolean | null;
	}
	export interface CreatePolicyVersionRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: FormControl<string | null | undefined>,
		PolicyDocument: FormControl<string | null | undefined>,
		SetAsDefault: FormControl<boolean | null | undefined>,
	}
	export function CreateCreatePolicyVersionRequestFormGroup() {
		return new FormGroup<CreatePolicyVersionRequestFormProperties>({
			PolicyArn: new FormControl<string | null | undefined>(undefined),
			PolicyDocument: new FormControl<string | null | undefined>(undefined),
			SetAsDefault: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateRoleRequest {
		Path?: string | null;
		RoleName: string;
		AssumeRolePolicyDocument: string;
		Description?: string | null;
		MaxSessionDuration?: number | null;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		PermissionsBoundary?: string | null;
		Tags?: Array<Tag>;
	}
	export interface CreateRoleRequestFormProperties {
		Path: FormControl<string | null | undefined>,
		RoleName: FormControl<string | null | undefined>,
		AssumeRolePolicyDocument: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		MaxSessionDuration: FormControl<number | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		PermissionsBoundary: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoleRequestFormGroup() {
		return new FormGroup<CreateRoleRequestFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			RoleName: new FormControl<string | null | undefined>(undefined),
			AssumeRolePolicyDocument: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			MaxSessionDuration: new FormControl<number | null | undefined>(undefined),
			PermissionsBoundary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSAMLProviderRequest {
		SAMLMetadataDocument: string;
		Name: string;
	}
	export interface CreateSAMLProviderRequestFormProperties {
		SAMLMetadataDocument: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSAMLProviderRequestFormGroup() {
		return new FormGroup<CreateSAMLProviderRequestFormProperties>({
			SAMLMetadataDocument: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateServiceLinkedRoleRequest {
		AWSServiceName: string;
		Description?: string | null;
		CustomSuffix?: string | null;
	}
	export interface CreateServiceLinkedRoleRequestFormProperties {
		AWSServiceName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CustomSuffix: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceLinkedRoleRequestFormGroup() {
		return new FormGroup<CreateServiceLinkedRoleRequestFormProperties>({
			AWSServiceName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CustomSuffix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateServiceSpecificCredentialRequest {
		UserName: string;
		ServiceName: string;
	}
	export interface CreateServiceSpecificCredentialRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceSpecificCredentialRequestFormGroup() {
		return new FormGroup<CreateServiceSpecificCredentialRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserRequest {
		Path?: string | null;
		UserName: string;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		PermissionsBoundary?: string | null;
		Tags?: Array<Tag>;
	}
	export interface CreateUserRequestFormProperties {
		Path: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Max length: 2048
		 * Min length: 20
		 */
		PermissionsBoundary: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
			PermissionsBoundary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVirtualMFADeviceRequest {
		Path?: string | null;
		VirtualMFADeviceName: string;
	}
	export interface CreateVirtualMFADeviceRequestFormProperties {
		Path: FormControl<string | null | undefined>,
		VirtualMFADeviceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateVirtualMFADeviceRequestFormGroup() {
		return new FormGroup<CreateVirtualMFADeviceRequestFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			VirtualMFADeviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeactivateMFADeviceRequest {
		UserName: string;
		SerialNumber: string;
	}
	export interface DeactivateMFADeviceRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		SerialNumber: FormControl<string | null | undefined>,
	}
	export function CreateDeactivateMFADeviceRequestFormGroup() {
		return new FormGroup<DeactivateMFADeviceRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAccessKeyRequest {
		UserName?: string | null;
		AccessKeyId: string;
	}
	export interface DeleteAccessKeyRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		AccessKeyId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAccessKeyRequestFormGroup() {
		return new FormGroup<DeleteAccessKeyRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			AccessKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAccountAliasRequest {
		AccountAlias: string;
	}
	export interface DeleteAccountAliasRequestFormProperties {
		AccountAlias: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAccountAliasRequestFormGroup() {
		return new FormGroup<DeleteAccountAliasRequestFormProperties>({
			AccountAlias: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteGroupPolicyRequest {
		GroupName: string;
		PolicyName: string;
	}
	export interface DeleteGroupPolicyRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGroupPolicyRequestFormGroup() {
		return new FormGroup<DeleteGroupPolicyRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteGroupRequest {
		GroupName: string;
	}
	export interface DeleteGroupRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGroupRequestFormGroup() {
		return new FormGroup<DeleteGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteInstanceProfileRequest {
		InstanceProfileName: string;
	}
	export interface DeleteInstanceProfileRequestFormProperties {
		InstanceProfileName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInstanceProfileRequestFormGroup() {
		return new FormGroup<DeleteInstanceProfileRequestFormProperties>({
			InstanceProfileName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteLoginProfileRequest {
		UserName: string;
	}
	export interface DeleteLoginProfileRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLoginProfileRequestFormGroup() {
		return new FormGroup<DeleteLoginProfileRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteOpenIDConnectProviderRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		OpenIDConnectProviderArn: string;
	}
	export interface DeleteOpenIDConnectProviderRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		OpenIDConnectProviderArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteOpenIDConnectProviderRequestFormGroup() {
		return new FormGroup<DeleteOpenIDConnectProviderRequestFormProperties>({
			OpenIDConnectProviderArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePolicyRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: string;
	}
	export interface DeletePolicyRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePolicyRequestFormGroup() {
		return new FormGroup<DeletePolicyRequestFormProperties>({
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePolicyVersionRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: string;
		VersionId: string;
	}
	export interface DeletePolicyVersionRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePolicyVersionRequestFormGroup() {
		return new FormGroup<DeletePolicyVersionRequestFormProperties>({
			PolicyArn: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRolePermissionsBoundaryRequest {
		RoleName: string;
	}
	export interface DeleteRolePermissionsBoundaryRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRolePermissionsBoundaryRequestFormGroup() {
		return new FormGroup<DeleteRolePermissionsBoundaryRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRolePolicyRequest {
		RoleName: string;
		PolicyName: string;
	}
	export interface DeleteRolePolicyRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRolePolicyRequestFormGroup() {
		return new FormGroup<DeleteRolePolicyRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRoleRequest {
		RoleName: string;
	}
	export interface DeleteRoleRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRoleRequestFormGroup() {
		return new FormGroup<DeleteRoleRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSAMLProviderRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		SAMLProviderArn: string;
	}
	export interface DeleteSAMLProviderRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		SAMLProviderArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSAMLProviderRequestFormGroup() {
		return new FormGroup<DeleteSAMLProviderRequestFormProperties>({
			SAMLProviderArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSSHPublicKeyRequest {
		UserName: string;
		SSHPublicKeyId: string;
	}
	export interface DeleteSSHPublicKeyRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		SSHPublicKeyId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSSHPublicKeyRequestFormGroup() {
		return new FormGroup<DeleteSSHPublicKeyRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			SSHPublicKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteServerCertificateRequest {
		ServerCertificateName: string;
	}
	export interface DeleteServerCertificateRequestFormProperties {
		ServerCertificateName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServerCertificateRequestFormGroup() {
		return new FormGroup<DeleteServerCertificateRequestFormProperties>({
			ServerCertificateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteServiceLinkedRoleRequest {
		RoleName: string;
	}
	export interface DeleteServiceLinkedRoleRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServiceLinkedRoleRequestFormGroup() {
		return new FormGroup<DeleteServiceLinkedRoleRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteServiceSpecificCredentialRequest {
		UserName?: string | null;
		ServiceSpecificCredentialId: string;
	}
	export interface DeleteServiceSpecificCredentialRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		ServiceSpecificCredentialId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServiceSpecificCredentialRequestFormGroup() {
		return new FormGroup<DeleteServiceSpecificCredentialRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			ServiceSpecificCredentialId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSigningCertificateRequest {
		UserName?: string | null;
		CertificateId: string;
	}
	export interface DeleteSigningCertificateRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		CertificateId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSigningCertificateRequestFormGroup() {
		return new FormGroup<DeleteSigningCertificateRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			CertificateId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteUserPermissionsBoundaryRequest {
		UserName: string;
	}
	export interface DeleteUserPermissionsBoundaryRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserPermissionsBoundaryRequestFormGroup() {
		return new FormGroup<DeleteUserPermissionsBoundaryRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteUserPolicyRequest {
		UserName: string;
		PolicyName: string;
	}
	export interface DeleteUserPolicyRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserPolicyRequestFormGroup() {
		return new FormGroup<DeleteUserPolicyRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteUserRequest {
		UserName: string;
	}
	export interface DeleteUserRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserRequestFormGroup() {
		return new FormGroup<DeleteUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteVirtualMFADeviceRequest {
		SerialNumber: string;
	}
	export interface DeleteVirtualMFADeviceRequestFormProperties {
		SerialNumber: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVirtualMFADeviceRequestFormGroup() {
		return new FormGroup<DeleteVirtualMFADeviceRequestFormProperties>({
			SerialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeletionTaskStatusType { SUCCEEDED = 0, IN_PROGRESS = 1, FAILED = 2, NOT_STARTED = 3 }

	export interface DetachGroupPolicyRequest {
		GroupName: string;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: string;
	}
	export interface DetachGroupPolicyRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateDetachGroupPolicyRequestFormGroup() {
		return new FormGroup<DetachGroupPolicyRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetachRolePolicyRequest {
		RoleName: string;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: string;
	}
	export interface DetachRolePolicyRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateDetachRolePolicyRequestFormGroup() {
		return new FormGroup<DetachRolePolicyRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetachUserPolicyRequest {
		UserName: string;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: string;
	}
	export interface DetachUserPolicyRequestFormProperties {
		UserName: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateDetachUserPolicyRequestFormGroup() {
		return new FormGroup<DetachUserPolicyRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnableMFADeviceRequest {
		UserName: string;
		SerialNumber: string;
		AuthenticationCode1: string;
		AuthenticationCode2: string;
	}
	export interface EnableMFADeviceRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		SerialNumber: FormControl<string | null | undefined>,
		AuthenticationCode1: FormControl<string | null | undefined>,
		AuthenticationCode2: FormControl<string | null | undefined>,
	}
	export function CreateEnableMFADeviceRequestFormGroup() {
		return new FormGroup<EnableMFADeviceRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			AuthenticationCode1: new FormControl<string | null | undefined>(undefined),
			AuthenticationCode2: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PolicyOwnerEntityType { USER = 0, ROLE = 1, GROUP = 2 }

	export enum PolicyEvaluationDecisionType { allowed = 0, explicitDeny = 1, implicitDeny = 2 }

	export enum ReportStateType { STARTED = 0, INPROGRESS = 1, COMPLETE = 2 }

	export interface GenerateOrganizationsAccessReportRequest {
		EntityPath: string;
		OrganizationsPolicyId?: string | null;
	}
	export interface GenerateOrganizationsAccessReportRequestFormProperties {
		EntityPath: FormControl<string | null | undefined>,
		OrganizationsPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateGenerateOrganizationsAccessReportRequestFormGroup() {
		return new FormGroup<GenerateOrganizationsAccessReportRequestFormProperties>({
			EntityPath: new FormControl<string | null | undefined>(undefined),
			OrganizationsPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GenerateServiceLastAccessedDetailsRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: string;
		Granularity?: GetServiceLastAccessedDetailsResponseJobType | null;
	}
	export interface GenerateServiceLastAccessedDetailsRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
		Granularity: FormControl<GetServiceLastAccessedDetailsResponseJobType | null | undefined>,
	}
	export function CreateGenerateServiceLastAccessedDetailsRequestFormGroup() {
		return new FormGroup<GenerateServiceLastAccessedDetailsRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Granularity: new FormControl<GetServiceLastAccessedDetailsResponseJobType | null | undefined>(undefined),
		});

	}

	export interface GetAccessKeyLastUsedRequest {
		AccessKeyId: string;
	}
	export interface GetAccessKeyLastUsedRequestFormProperties {
		AccessKeyId: FormControl<string | null | undefined>,
	}
	export function CreateGetAccessKeyLastUsedRequestFormGroup() {
		return new FormGroup<GetAccessKeyLastUsedRequestFormProperties>({
			AccessKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAccountAuthorizationDetailsRequest {
		Filter?: Array<EntityType>;
		MaxItems?: number | null;
		Marker?: string | null;
	}
	export interface GetAccountAuthorizationDetailsRequestFormProperties {
		MaxItems: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateGetAccountAuthorizationDetailsRequestFormGroup() {
		return new FormGroup<GetAccountAuthorizationDetailsRequestFormProperties>({
			MaxItems: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetContextKeysForCustomPolicyRequest {
		PolicyInputList: Array<string>;
	}
	export interface GetContextKeysForCustomPolicyRequestFormProperties {
	}
	export function CreateGetContextKeysForCustomPolicyRequestFormGroup() {
		return new FormGroup<GetContextKeysForCustomPolicyRequestFormProperties>({
		});

	}

	export interface GetContextKeysForPrincipalPolicyRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicySourceArn: string;
		PolicyInputList?: Array<string>;
	}
	export interface GetContextKeysForPrincipalPolicyRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicySourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetContextKeysForPrincipalPolicyRequestFormGroup() {
		return new FormGroup<GetContextKeysForPrincipalPolicyRequestFormProperties>({
			PolicySourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReportFormatType { text_csv = 0 }

	export interface GetGroupPolicyRequest {
		GroupName: string;
		PolicyName: string;
	}
	export interface GetGroupPolicyRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupPolicyRequestFormGroup() {
		return new FormGroup<GetGroupPolicyRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGroupRequest {
		GroupName: string;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface GetGroupRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateGetGroupRequestFormGroup() {
		return new FormGroup<GetGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetInstanceProfileRequest {
		InstanceProfileName: string;
	}
	export interface GetInstanceProfileRequestFormProperties {
		InstanceProfileName: FormControl<string | null | undefined>,
	}
	export function CreateGetInstanceProfileRequestFormGroup() {
		return new FormGroup<GetInstanceProfileRequestFormProperties>({
			InstanceProfileName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLoginProfileRequest {
		UserName: string;
	}
	export interface GetLoginProfileRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateGetLoginProfileRequestFormGroup() {
		return new FormGroup<GetLoginProfileRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOpenIDConnectProviderRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		OpenIDConnectProviderArn: string;
	}
	export interface GetOpenIDConnectProviderRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		OpenIDConnectProviderArn: FormControl<string | null | undefined>,
	}
	export function CreateGetOpenIDConnectProviderRequestFormGroup() {
		return new FormGroup<GetOpenIDConnectProviderRequestFormProperties>({
			OpenIDConnectProviderArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SortKeyType { SERVICE_NAMESPACE_ASCENDING = 0, SERVICE_NAMESPACE_DESCENDING = 1, LAST_AUTHENTICATED_TIME_ASCENDING = 2, LAST_AUTHENTICATED_TIME_DESCENDING = 3 }

	export interface GetOrganizationsAccessReportRequest {
		JobId: string;
		MaxItems?: number | null;
		Marker?: string | null;
		SortKey?: SortKeyType | null;
	}
	export interface GetOrganizationsAccessReportRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		SortKey: FormControl<SortKeyType | null | undefined>,
	}
	export function CreateGetOrganizationsAccessReportRequestFormGroup() {
		return new FormGroup<GetOrganizationsAccessReportRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			SortKey: new FormControl<SortKeyType | null | undefined>(undefined),
		});

	}

	export enum JobStatusType { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2 }

	export interface GetPolicyRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: string;
	}
	export interface GetPolicyRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateGetPolicyRequestFormGroup() {
		return new FormGroup<GetPolicyRequestFormProperties>({
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPolicyVersionRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: string;
		VersionId: string;
	}
	export interface GetPolicyVersionRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateGetPolicyVersionRequestFormGroup() {
		return new FormGroup<GetPolicyVersionRequestFormProperties>({
			PolicyArn: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRolePolicyRequest {
		RoleName: string;
		PolicyName: string;
	}
	export interface GetRolePolicyRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateGetRolePolicyRequestFormGroup() {
		return new FormGroup<GetRolePolicyRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRoleRequest {
		RoleName: string;
	}
	export interface GetRoleRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,
	}
	export function CreateGetRoleRequestFormGroup() {
		return new FormGroup<GetRoleRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSAMLProviderRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		SAMLProviderArn: string;
	}
	export interface GetSAMLProviderRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		SAMLProviderArn: FormControl<string | null | undefined>,
	}
	export function CreateGetSAMLProviderRequestFormGroup() {
		return new FormGroup<GetSAMLProviderRequestFormProperties>({
			SAMLProviderArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EncodingType { SSH = 0, PEM = 1 }

	export interface GetSSHPublicKeyRequest {
		UserName: string;
		SSHPublicKeyId: string;
		Encoding: EncodingType;
	}
	export interface GetSSHPublicKeyRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		SSHPublicKeyId: FormControl<string | null | undefined>,
		Encoding: FormControl<EncodingType | null | undefined>,
	}
	export function CreateGetSSHPublicKeyRequestFormGroup() {
		return new FormGroup<GetSSHPublicKeyRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			SSHPublicKeyId: new FormControl<string | null | undefined>(undefined),
			Encoding: new FormControl<EncodingType | null | undefined>(undefined),
		});

	}

	export interface GetServerCertificateRequest {
		ServerCertificateName: string;
	}
	export interface GetServerCertificateRequestFormProperties {
		ServerCertificateName: FormControl<string | null | undefined>,
	}
	export function CreateGetServerCertificateRequestFormGroup() {
		return new FormGroup<GetServerCertificateRequestFormProperties>({
			ServerCertificateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetServiceLastAccessedDetailsRequest {
		JobId: string;
		MaxItems?: number | null;
		Marker?: string | null;
	}
	export interface GetServiceLastAccessedDetailsRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceLastAccessedDetailsRequestFormGroup() {
		return new FormGroup<GetServiceLastAccessedDetailsRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetServiceLastAccessedDetailsWithEntitiesRequest {
		JobId: string;
		ServiceNamespace: string;
		MaxItems?: number | null;
		Marker?: string | null;
	}
	export interface GetServiceLastAccessedDetailsWithEntitiesRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
		ServiceNamespace: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceLastAccessedDetailsWithEntitiesRequestFormGroup() {
		return new FormGroup<GetServiceLastAccessedDetailsWithEntitiesRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			ServiceNamespace: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetServiceLinkedRoleDeletionStatusRequest {
		DeletionTaskId: string;
	}
	export interface GetServiceLinkedRoleDeletionStatusRequestFormProperties {
		DeletionTaskId: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceLinkedRoleDeletionStatusRequestFormGroup() {
		return new FormGroup<GetServiceLinkedRoleDeletionStatusRequestFormProperties>({
			DeletionTaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUserPolicyRequest {
		UserName: string;
		PolicyName: string;
	}
	export interface GetUserPolicyRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateGetUserPolicyRequestFormGroup() {
		return new FormGroup<GetUserPolicyRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUserRequest {
		UserName?: string | null;
	}
	export interface GetUserRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateGetUserRequestFormGroup() {
		return new FormGroup<GetUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccessKeysRequest {
		UserName?: string | null;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListAccessKeysRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListAccessKeysRequestFormGroup() {
		return new FormGroup<ListAccessKeysRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAccountAliasesRequest {
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListAccountAliasesRequestFormProperties {
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListAccountAliasesRequestFormGroup() {
		return new FormGroup<ListAccountAliasesRequestFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAttachedGroupPoliciesRequest {
		GroupName: string;
		PathPrefix?: string | null;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListAttachedGroupPoliciesRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
		PathPrefix: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListAttachedGroupPoliciesRequestFormGroup() {
		return new FormGroup<ListAttachedGroupPoliciesRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			PathPrefix: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAttachedRolePoliciesRequest {
		RoleName: string;
		PathPrefix?: string | null;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListAttachedRolePoliciesRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,
		PathPrefix: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListAttachedRolePoliciesRequestFormGroup() {
		return new FormGroup<ListAttachedRolePoliciesRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
			PathPrefix: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAttachedUserPoliciesRequest {
		UserName: string;
		PathPrefix?: string | null;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListAttachedUserPoliciesRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		PathPrefix: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListAttachedUserPoliciesRequestFormGroup() {
		return new FormGroup<ListAttachedUserPoliciesRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			PathPrefix: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>The policy usage type that indicates whether the policy is used as a permissions policy or as the permissions boundary for an entity.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p> */
	export enum PolicyUsageType { PermissionsPolicy = 0, PermissionsBoundary = 1 }

	export interface ListEntitiesForPolicyRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: string;
		EntityFilter?: EntityType | null;
		PathPrefix?: string | null;

		/** <p>The policy usage type that indicates whether the policy is used as a permissions policy or as the permissions boundary for an entity.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p> */
		PolicyUsageFilter?: PolicyUsageType | null;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListEntitiesForPolicyRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: FormControl<string | null | undefined>,
		EntityFilter: FormControl<EntityType | null | undefined>,
		PathPrefix: FormControl<string | null | undefined>,

		/** <p>The policy usage type that indicates whether the policy is used as a permissions policy or as the permissions boundary for an entity.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p> */
		PolicyUsageFilter: FormControl<PolicyUsageType | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListEntitiesForPolicyRequestFormGroup() {
		return new FormGroup<ListEntitiesForPolicyRequestFormProperties>({
			PolicyArn: new FormControl<string | null | undefined>(undefined),
			EntityFilter: new FormControl<EntityType | null | undefined>(undefined),
			PathPrefix: new FormControl<string | null | undefined>(undefined),
			PolicyUsageFilter: new FormControl<PolicyUsageType | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListGroupPoliciesRequest {
		GroupName: string;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListGroupPoliciesRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListGroupPoliciesRequestFormGroup() {
		return new FormGroup<ListGroupPoliciesRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListGroupsForUserRequest {
		UserName: string;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListGroupsForUserRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListGroupsForUserRequestFormGroup() {
		return new FormGroup<ListGroupsForUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListGroupsRequest {
		PathPrefix?: string | null;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListGroupsRequestFormProperties {
		PathPrefix: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListGroupsRequestFormGroup() {
		return new FormGroup<ListGroupsRequestFormProperties>({
			PathPrefix: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListInstanceProfilesForRoleRequest {
		RoleName: string;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListInstanceProfilesForRoleRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListInstanceProfilesForRoleRequestFormGroup() {
		return new FormGroup<ListInstanceProfilesForRoleRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListInstanceProfilesRequest {
		PathPrefix?: string | null;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListInstanceProfilesRequestFormProperties {
		PathPrefix: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListInstanceProfilesRequestFormGroup() {
		return new FormGroup<ListInstanceProfilesRequestFormProperties>({
			PathPrefix: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMFADevicesRequest {
		UserName?: string | null;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListMFADevicesRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListMFADevicesRequestFormGroup() {
		return new FormGroup<ListMFADevicesRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListOpenIDConnectProvidersRequest {
	}
	export interface ListOpenIDConnectProvidersRequestFormProperties {
	}
	export function CreateListOpenIDConnectProvidersRequestFormGroup() {
		return new FormGroup<ListOpenIDConnectProvidersRequestFormProperties>({
		});

	}

	export interface ListPoliciesGrantingServiceAccessRequest {
		Marker?: string | null;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: string;
		ServiceNamespaces: Array<string>;
	}
	export interface ListPoliciesGrantingServiceAccessRequestFormProperties {
		Marker: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateListPoliciesGrantingServiceAccessRequestFormGroup() {
		return new FormGroup<ListPoliciesGrantingServiceAccessRequestFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PolicyScopeType { All = 0, AWS = 1, Local = 2 }

	export interface ListPoliciesRequest {
		Scope?: PolicyScopeType | null;
		OnlyAttached?: boolean | null;
		PathPrefix?: string | null;

		/** <p>The policy usage type that indicates whether the policy is used as a permissions policy or as the permissions boundary for an entity.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p> */
		PolicyUsageFilter?: PolicyUsageType | null;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListPoliciesRequestFormProperties {
		Scope: FormControl<PolicyScopeType | null | undefined>,
		OnlyAttached: FormControl<boolean | null | undefined>,
		PathPrefix: FormControl<string | null | undefined>,

		/** <p>The policy usage type that indicates whether the policy is used as a permissions policy or as the permissions boundary for an entity.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p> */
		PolicyUsageFilter: FormControl<PolicyUsageType | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListPoliciesRequestFormGroup() {
		return new FormGroup<ListPoliciesRequestFormProperties>({
			Scope: new FormControl<PolicyScopeType | null | undefined>(undefined),
			OnlyAttached: new FormControl<boolean | null | undefined>(undefined),
			PathPrefix: new FormControl<string | null | undefined>(undefined),
			PolicyUsageFilter: new FormControl<PolicyUsageType | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPolicyVersionsRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: string;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListPolicyVersionsRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListPolicyVersionsRequestFormGroup() {
		return new FormGroup<ListPolicyVersionsRequestFormProperties>({
			PolicyArn: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRolePoliciesRequest {
		RoleName: string;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListRolePoliciesRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListRolePoliciesRequestFormGroup() {
		return new FormGroup<ListRolePoliciesRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRoleTagsRequest {
		RoleName: string;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListRoleTagsRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListRoleTagsRequestFormGroup() {
		return new FormGroup<ListRoleTagsRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRolesRequest {
		PathPrefix?: string | null;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListRolesRequestFormProperties {
		PathPrefix: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListRolesRequestFormGroup() {
		return new FormGroup<ListRolesRequestFormProperties>({
			PathPrefix: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSAMLProvidersRequest {
	}
	export interface ListSAMLProvidersRequestFormProperties {
	}
	export function CreateListSAMLProvidersRequestFormGroup() {
		return new FormGroup<ListSAMLProvidersRequestFormProperties>({
		});

	}

	export interface ListSSHPublicKeysRequest {
		UserName?: string | null;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListSSHPublicKeysRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListSSHPublicKeysRequestFormGroup() {
		return new FormGroup<ListSSHPublicKeysRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListServerCertificatesRequest {
		PathPrefix?: string | null;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListServerCertificatesRequestFormProperties {
		PathPrefix: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListServerCertificatesRequestFormGroup() {
		return new FormGroup<ListServerCertificatesRequestFormProperties>({
			PathPrefix: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListServiceSpecificCredentialsRequest {
		UserName?: string | null;
		ServiceName?: string | null;
	}
	export interface ListServiceSpecificCredentialsRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
	}
	export function CreateListServiceSpecificCredentialsRequestFormGroup() {
		return new FormGroup<ListServiceSpecificCredentialsRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSigningCertificatesRequest {
		UserName?: string | null;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListSigningCertificatesRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListSigningCertificatesRequestFormGroup() {
		return new FormGroup<ListSigningCertificatesRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListUserPoliciesRequest {
		UserName: string;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListUserPoliciesRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListUserPoliciesRequestFormGroup() {
		return new FormGroup<ListUserPoliciesRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListUserTagsRequest {
		UserName: string;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListUserTagsRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListUserTagsRequestFormGroup() {
		return new FormGroup<ListUserTagsRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListUsersRequest {
		PathPrefix?: string | null;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListUsersRequestFormProperties {
		PathPrefix: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListUsersRequestFormGroup() {
		return new FormGroup<ListUsersRequestFormProperties>({
			PathPrefix: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AssignmentStatusType { Assigned = 0, Unassigned = 1, Any = 2 }

	export interface ListVirtualMFADevicesRequest {
		AssignmentStatus?: AssignmentStatusType | null;
		Marker?: string | null;
		MaxItems?: number | null;
	}
	export interface ListVirtualMFADevicesRequestFormProperties {
		AssignmentStatus: FormControl<AssignmentStatusType | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListVirtualMFADevicesRequestFormGroup() {
		return new FormGroup<ListVirtualMFADevicesRequestFormProperties>({
			AssignmentStatus: new FormControl<AssignmentStatusType | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PolicyType { INLINE = 0, MANAGED = 1 }

	export enum PolicySourceType { user = 0, group = 1, role = 2, aws_managed = 3, user_managed = 4, resource = 5, none = 6 }

	export interface PutGroupPolicyRequest {
		GroupName: string;
		PolicyName: string;
		PolicyDocument: string;
	}
	export interface PutGroupPolicyRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
		PolicyDocument: FormControl<string | null | undefined>,
	}
	export function CreatePutGroupPolicyRequestFormGroup() {
		return new FormGroup<PutGroupPolicyRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
			PolicyDocument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutRolePermissionsBoundaryRequest {
		RoleName: string;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PermissionsBoundary: string;
	}
	export interface PutRolePermissionsBoundaryRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PermissionsBoundary: FormControl<string | null | undefined>,
	}
	export function CreatePutRolePermissionsBoundaryRequestFormGroup() {
		return new FormGroup<PutRolePermissionsBoundaryRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
			PermissionsBoundary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutRolePolicyRequest {
		RoleName: string;
		PolicyName: string;
		PolicyDocument: string;
	}
	export interface PutRolePolicyRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
		PolicyDocument: FormControl<string | null | undefined>,
	}
	export function CreatePutRolePolicyRequestFormGroup() {
		return new FormGroup<PutRolePolicyRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
			PolicyDocument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutUserPermissionsBoundaryRequest {
		UserName: string;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PermissionsBoundary: string;
	}
	export interface PutUserPermissionsBoundaryRequestFormProperties {
		UserName: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PermissionsBoundary: FormControl<string | null | undefined>,
	}
	export function CreatePutUserPermissionsBoundaryRequestFormGroup() {
		return new FormGroup<PutUserPermissionsBoundaryRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			PermissionsBoundary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutUserPolicyRequest {
		UserName: string;
		PolicyName: string;
		PolicyDocument: string;
	}
	export interface PutUserPolicyRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
		PolicyDocument: FormControl<string | null | undefined>,
	}
	export function CreatePutUserPolicyRequestFormGroup() {
		return new FormGroup<PutUserPolicyRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
			PolicyDocument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveClientIDFromOpenIDConnectProviderRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		OpenIDConnectProviderArn: string;
		ClientID: string;
	}
	export interface RemoveClientIDFromOpenIDConnectProviderRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		OpenIDConnectProviderArn: FormControl<string | null | undefined>,
		ClientID: FormControl<string | null | undefined>,
	}
	export function CreateRemoveClientIDFromOpenIDConnectProviderRequestFormGroup() {
		return new FormGroup<RemoveClientIDFromOpenIDConnectProviderRequestFormProperties>({
			OpenIDConnectProviderArn: new FormControl<string | null | undefined>(undefined),
			ClientID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveRoleFromInstanceProfileRequest {
		InstanceProfileName: string;
		RoleName: string;
	}
	export interface RemoveRoleFromInstanceProfileRequestFormProperties {
		InstanceProfileName: FormControl<string | null | undefined>,
		RoleName: FormControl<string | null | undefined>,
	}
	export function CreateRemoveRoleFromInstanceProfileRequestFormGroup() {
		return new FormGroup<RemoveRoleFromInstanceProfileRequestFormProperties>({
			InstanceProfileName: new FormControl<string | null | undefined>(undefined),
			RoleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveUserFromGroupRequest {
		GroupName: string;
		UserName: string;
	}
	export interface RemoveUserFromGroupRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateRemoveUserFromGroupRequestFormGroup() {
		return new FormGroup<RemoveUserFromGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResetServiceSpecificCredentialRequest {
		UserName?: string | null;
		ServiceSpecificCredentialId: string;
	}
	export interface ResetServiceSpecificCredentialRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		ServiceSpecificCredentialId: FormControl<string | null | undefined>,
	}
	export function CreateResetServiceSpecificCredentialRequestFormGroup() {
		return new FormGroup<ResetServiceSpecificCredentialRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			ServiceSpecificCredentialId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResyncMFADeviceRequest {
		UserName: string;
		SerialNumber: string;
		AuthenticationCode1: string;
		AuthenticationCode2: string;
	}
	export interface ResyncMFADeviceRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		SerialNumber: FormControl<string | null | undefined>,
		AuthenticationCode1: FormControl<string | null | undefined>,
		AuthenticationCode2: FormControl<string | null | undefined>,
	}
	export function CreateResyncMFADeviceRequestFormGroup() {
		return new FormGroup<ResyncMFADeviceRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			AuthenticationCode1: new FormControl<string | null | undefined>(undefined),
			AuthenticationCode2: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetDefaultPolicyVersionRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: string;
		VersionId: string;
	}
	export interface SetDefaultPolicyVersionRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicyArn: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateSetDefaultPolicyVersionRequestFormGroup() {
		return new FormGroup<SetDefaultPolicyVersionRequestFormProperties>({
			PolicyArn: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GlobalEndpointTokenVersion { v1Token = 0, v2Token = 1 }

	export interface SetSecurityTokenServicePreferencesRequest {
		GlobalEndpointTokenVersion: GlobalEndpointTokenVersion;
	}
	export interface SetSecurityTokenServicePreferencesRequestFormProperties {
		GlobalEndpointTokenVersion: FormControl<GlobalEndpointTokenVersion | null | undefined>,
	}
	export function CreateSetSecurityTokenServicePreferencesRequestFormGroup() {
		return new FormGroup<SetSecurityTokenServicePreferencesRequestFormProperties>({
			GlobalEndpointTokenVersion: new FormControl<GlobalEndpointTokenVersion | null | undefined>(undefined),
		});

	}

	export interface SimulateCustomPolicyRequest {
		PolicyInputList: Array<string>;
		PermissionsBoundaryPolicyInputList?: Array<string>;
		ActionNames: Array<string>;
		ResourceArns?: Array<string>;
		ResourcePolicy?: string | null;
		ResourceOwner?: string | null;
		CallerArn?: string | null;
		ContextEntries?: Array<ContextEntry>;
		ResourceHandlingOption?: string | null;
		MaxItems?: number | null;
		Marker?: string | null;
	}
	export interface SimulateCustomPolicyRequestFormProperties {
		ResourcePolicy: FormControl<string | null | undefined>,
		ResourceOwner: FormControl<string | null | undefined>,
		CallerArn: FormControl<string | null | undefined>,
		ResourceHandlingOption: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateSimulateCustomPolicyRequestFormGroup() {
		return new FormGroup<SimulateCustomPolicyRequestFormProperties>({
			ResourcePolicy: new FormControl<string | null | undefined>(undefined),
			ResourceOwner: new FormControl<string | null | undefined>(undefined),
			CallerArn: new FormControl<string | null | undefined>(undefined),
			ResourceHandlingOption: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SimulatePrincipalPolicyRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicySourceArn: string;
		PolicyInputList?: Array<string>;
		PermissionsBoundaryPolicyInputList?: Array<string>;
		ActionNames: Array<string>;
		ResourceArns?: Array<string>;
		ResourcePolicy?: string | null;
		ResourceOwner?: string | null;
		CallerArn?: string | null;
		ContextEntries?: Array<ContextEntry>;
		ResourceHandlingOption?: string | null;
		MaxItems?: number | null;
		Marker?: string | null;
	}
	export interface SimulatePrincipalPolicyRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PolicySourceArn: FormControl<string | null | undefined>,
		ResourcePolicy: FormControl<string | null | undefined>,
		ResourceOwner: FormControl<string | null | undefined>,
		CallerArn: FormControl<string | null | undefined>,
		ResourceHandlingOption: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateSimulatePrincipalPolicyRequestFormGroup() {
		return new FormGroup<SimulatePrincipalPolicyRequestFormProperties>({
			PolicySourceArn: new FormControl<string | null | undefined>(undefined),
			ResourcePolicy: new FormControl<string | null | undefined>(undefined),
			ResourceOwner: new FormControl<string | null | undefined>(undefined),
			CallerArn: new FormControl<string | null | undefined>(undefined),
			ResourceHandlingOption: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagRoleRequest {
		RoleName: string;
		Tags: Array<Tag>;
	}
	export interface TagRoleRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,
	}
	export function CreateTagRoleRequestFormGroup() {
		return new FormGroup<TagRoleRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagUserRequest {
		UserName: string;
		Tags: Array<Tag>;
	}
	export interface TagUserRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateTagUserRequestFormGroup() {
		return new FormGroup<TagUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagRoleRequest {
		RoleName: string;
		TagKeys: Array<string>;
	}
	export interface UntagRoleRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,
	}
	export function CreateUntagRoleRequestFormGroup() {
		return new FormGroup<UntagRoleRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagUserRequest {
		UserName: string;
		TagKeys: Array<string>;
	}
	export interface UntagUserRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateUntagUserRequestFormGroup() {
		return new FormGroup<UntagUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAccessKeyRequest {
		UserName?: string | null;
		AccessKeyId: string;
		Status: AccessKeyStatus;
	}
	export interface UpdateAccessKeyRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		AccessKeyId: FormControl<string | null | undefined>,
		Status: FormControl<AccessKeyStatus | null | undefined>,
	}
	export function CreateUpdateAccessKeyRequestFormGroup() {
		return new FormGroup<UpdateAccessKeyRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			AccessKeyId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AccessKeyStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateAccountPasswordPolicyRequest {
		MinimumPasswordLength?: number | null;
		RequireSymbols?: boolean | null;
		RequireNumbers?: boolean | null;
		RequireUppercaseCharacters?: boolean | null;
		RequireLowercaseCharacters?: boolean | null;
		AllowUsersToChangePassword?: boolean | null;
		MaxPasswordAge?: number | null;
		PasswordReusePrevention?: number | null;
		HardExpiry?: boolean | null;
	}
	export interface UpdateAccountPasswordPolicyRequestFormProperties {
		MinimumPasswordLength: FormControl<number | null | undefined>,
		RequireSymbols: FormControl<boolean | null | undefined>,
		RequireNumbers: FormControl<boolean | null | undefined>,
		RequireUppercaseCharacters: FormControl<boolean | null | undefined>,
		RequireLowercaseCharacters: FormControl<boolean | null | undefined>,
		AllowUsersToChangePassword: FormControl<boolean | null | undefined>,
		MaxPasswordAge: FormControl<number | null | undefined>,
		PasswordReusePrevention: FormControl<number | null | undefined>,
		HardExpiry: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateAccountPasswordPolicyRequestFormGroup() {
		return new FormGroup<UpdateAccountPasswordPolicyRequestFormProperties>({
			MinimumPasswordLength: new FormControl<number | null | undefined>(undefined),
			RequireSymbols: new FormControl<boolean | null | undefined>(undefined),
			RequireNumbers: new FormControl<boolean | null | undefined>(undefined),
			RequireUppercaseCharacters: new FormControl<boolean | null | undefined>(undefined),
			RequireLowercaseCharacters: new FormControl<boolean | null | undefined>(undefined),
			AllowUsersToChangePassword: new FormControl<boolean | null | undefined>(undefined),
			MaxPasswordAge: new FormControl<number | null | undefined>(undefined),
			PasswordReusePrevention: new FormControl<number | null | undefined>(undefined),
			HardExpiry: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateAssumeRolePolicyRequest {
		RoleName: string;
		PolicyDocument: string;
	}
	export interface UpdateAssumeRolePolicyRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,
		PolicyDocument: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssumeRolePolicyRequestFormGroup() {
		return new FormGroup<UpdateAssumeRolePolicyRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
			PolicyDocument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupRequest {
		GroupName: string;
		NewPath?: string | null;
		NewGroupName?: string | null;
	}
	export interface UpdateGroupRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
		NewPath: FormControl<string | null | undefined>,
		NewGroupName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupRequestFormGroup() {
		return new FormGroup<UpdateGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			NewPath: new FormControl<string | null | undefined>(undefined),
			NewGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLoginProfileRequest {
		UserName: string;
		Password?: string | null;
		PasswordResetRequired?: boolean | null;
	}
	export interface UpdateLoginProfileRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		PasswordResetRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateLoginProfileRequestFormGroup() {
		return new FormGroup<UpdateLoginProfileRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			PasswordResetRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateOpenIDConnectProviderThumbprintRequest {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		OpenIDConnectProviderArn: string;

		/**
		 * Contains a list of thumbprints of identity provider server certificates.
		 * Required
		 */
		ThumbprintList: Array<string>;
	}
	export interface UpdateOpenIDConnectProviderThumbprintRequestFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		OpenIDConnectProviderArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOpenIDConnectProviderThumbprintRequestFormGroup() {
		return new FormGroup<UpdateOpenIDConnectProviderThumbprintRequestFormProperties>({
			OpenIDConnectProviderArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRoleDescriptionRequest {
		RoleName: string;
		Description: string;
	}
	export interface UpdateRoleDescriptionRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoleDescriptionRequestFormGroup() {
		return new FormGroup<UpdateRoleDescriptionRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRoleRequest {
		RoleName: string;
		Description?: string | null;
		MaxSessionDuration?: number | null;
	}
	export interface UpdateRoleRequestFormProperties {
		RoleName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		MaxSessionDuration: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRoleRequestFormGroup() {
		return new FormGroup<UpdateRoleRequestFormProperties>({
			RoleName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			MaxSessionDuration: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateSAMLProviderRequest {
		SAMLMetadataDocument: string;

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		SAMLProviderArn: string;
	}
	export interface UpdateSAMLProviderRequestFormProperties {
		SAMLMetadataDocument: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		SAMLProviderArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSAMLProviderRequestFormGroup() {
		return new FormGroup<UpdateSAMLProviderRequestFormProperties>({
			SAMLMetadataDocument: new FormControl<string | null | undefined>(undefined),
			SAMLProviderArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSSHPublicKeyRequest {
		UserName: string;
		SSHPublicKeyId: string;
		Status: AccessKeyStatus;
	}
	export interface UpdateSSHPublicKeyRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		SSHPublicKeyId: FormControl<string | null | undefined>,
		Status: FormControl<AccessKeyStatus | null | undefined>,
	}
	export function CreateUpdateSSHPublicKeyRequestFormGroup() {
		return new FormGroup<UpdateSSHPublicKeyRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			SSHPublicKeyId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AccessKeyStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateServerCertificateRequest {
		ServerCertificateName: string;
		NewPath?: string | null;
		NewServerCertificateName?: string | null;
	}
	export interface UpdateServerCertificateRequestFormProperties {
		ServerCertificateName: FormControl<string | null | undefined>,
		NewPath: FormControl<string | null | undefined>,
		NewServerCertificateName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServerCertificateRequestFormGroup() {
		return new FormGroup<UpdateServerCertificateRequestFormProperties>({
			ServerCertificateName: new FormControl<string | null | undefined>(undefined),
			NewPath: new FormControl<string | null | undefined>(undefined),
			NewServerCertificateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateServiceSpecificCredentialRequest {
		UserName?: string | null;
		ServiceSpecificCredentialId: string;
		Status: AccessKeyStatus;
	}
	export interface UpdateServiceSpecificCredentialRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		ServiceSpecificCredentialId: FormControl<string | null | undefined>,
		Status: FormControl<AccessKeyStatus | null | undefined>,
	}
	export function CreateUpdateServiceSpecificCredentialRequestFormGroup() {
		return new FormGroup<UpdateServiceSpecificCredentialRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			ServiceSpecificCredentialId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AccessKeyStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateSigningCertificateRequest {
		UserName?: string | null;
		CertificateId: string;
		Status: AccessKeyStatus;
	}
	export interface UpdateSigningCertificateRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		CertificateId: FormControl<string | null | undefined>,
		Status: FormControl<AccessKeyStatus | null | undefined>,
	}
	export function CreateUpdateSigningCertificateRequestFormGroup() {
		return new FormGroup<UpdateSigningCertificateRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			CertificateId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AccessKeyStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateUserRequest {
		UserName: string;
		NewPath?: string | null;
		NewUserName?: string | null;
	}
	export interface UpdateUserRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		NewPath: FormControl<string | null | undefined>,
		NewUserName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserRequestFormGroup() {
		return new FormGroup<UpdateUserRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			NewPath: new FormControl<string | null | undefined>(undefined),
			NewUserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UploadSSHPublicKeyRequest {
		UserName: string;
		SSHPublicKeyBody: string;
	}
	export interface UploadSSHPublicKeyRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		SSHPublicKeyBody: FormControl<string | null | undefined>,
	}
	export function CreateUploadSSHPublicKeyRequestFormGroup() {
		return new FormGroup<UploadSSHPublicKeyRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			SSHPublicKeyBody: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UploadServerCertificateRequest {
		Path?: string | null;
		ServerCertificateName: string;
		CertificateBody: string;
		PrivateKey: string;
		CertificateChain?: string | null;
	}
	export interface UploadServerCertificateRequestFormProperties {
		Path: FormControl<string | null | undefined>,
		ServerCertificateName: FormControl<string | null | undefined>,
		CertificateBody: FormControl<string | null | undefined>,
		PrivateKey: FormControl<string | null | undefined>,
		CertificateChain: FormControl<string | null | undefined>,
	}
	export function CreateUploadServerCertificateRequestFormGroup() {
		return new FormGroup<UploadServerCertificateRequestFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			ServerCertificateName: new FormControl<string | null | undefined>(undefined),
			CertificateBody: new FormControl<string | null | undefined>(undefined),
			PrivateKey: new FormControl<string | null | undefined>(undefined),
			CertificateChain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UploadSigningCertificateRequest {
		UserName?: string | null;
		CertificateBody: string;
	}
	export interface UploadSigningCertificateRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		CertificateBody: FormControl<string | null | undefined>,
	}
	export function CreateUploadSigningCertificateRequestFormGroup() {
		return new FormGroup<UploadSigningCertificateRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			CertificateBody: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SummaryKeyType { Users = 0, UsersQuota = 1, Groups = 2, GroupsQuota = 3, ServerCertificates = 4, ServerCertificatesQuota = 5, UserPolicySizeQuota = 6, GroupPolicySizeQuota = 7, GroupsPerUserQuota = 8, SigningCertificatesPerUserQuota = 9, AccessKeysPerUserQuota = 10, MFADevices = 11, MFADevicesInUse = 12, AccountMFAEnabled = 13, AccountAccessKeysPresent = 14, AccountSigningCertificatesPresent = 15, AttachedPoliciesPerGroupQuota = 16, AttachedPoliciesPerRoleQuota = 17, AttachedPoliciesPerUserQuota = 18, Policies = 19, PoliciesQuota = 20, PolicySizeQuota = 21, PolicyVersionsInUse = 22, PolicyVersionsInUseQuota = 23, VersionsPerPolicyQuota = 24, GlobalEndpointTokenVersion = 25 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds a new client ID (also known as audience) to the list of client IDs already registered for the specified IAM OpenID Connect (OIDC) provider resource.</p> <p>This operation is idempotent; it does not fail or return an error if you add an existing client ID to the provider.</p>
		 * Get #Action=AddClientIDToOpenIDConnectProvider
		 * @param {string} OpenIDConnectProviderArn The Amazon Resource Name (ARN) of the IAM OpenID Connect (OIDC) provider resource to add the client ID to. You can get a list of OIDC provider ARNs by using the <a>ListOpenIDConnectProviders</a> operation.
		 * @param {string} ClientID The client ID (also known as audience) to add to the IAM OpenID Connect provider resource.
		 * @return {void} Success
		 */
		GET_AddClientIDToOpenIDConnectProvider(OpenIDConnectProviderArn: string, ClientID: string, Action: GET_AddClientIDToOpenIDConnectProviderAction, Version: GET_AddClientIDToOpenIDConnectProviderVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddClientIDToOpenIDConnectProvider?OpenIDConnectProviderArn=' + (OpenIDConnectProviderArn == null ? '' : encodeURIComponent(OpenIDConnectProviderArn)) + '&ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this limit cannot be increased. You can remove the existing role and then add a different role to an instance profile. You must then wait for the change to appear across all of AWS because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the instance profile</a>, or you can stop your instance and then restart it.</p> <note> <p>The caller of this API must be granted the <code>PassRole</code> permission on the IAM role by a permissions policy.</p> </note> <p>For more information about roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with Roles</a>. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a>.</p>
		 * Get #Action=AddRoleToInstanceProfile
		 * @param {string} InstanceProfileName <p>The name of the instance profile to update.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} RoleName <p>The name of the role to add.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_AddRoleToInstanceProfile(InstanceProfileName: string, RoleName: string, Action: GET_AddRoleToInstanceProfileAction, Version: GET_AddRoleToInstanceProfileVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddRoleToInstanceProfile?InstanceProfileName=' + (InstanceProfileName == null ? '' : encodeURIComponent(InstanceProfileName)) + '&RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds the specified user to the specified group.
		 * Get #Action=AddUserToGroup
		 * @param {string} GroupName <p>The name of the group to update.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} UserName <p>The name of the user to add.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_AddUserToGroup(GroupName: string, UserName: string, Action: GET_AddUserToGroupAction, Version: GET_AddUserToGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddUserToGroup?GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Attaches the specified managed policy to the specified IAM group.</p> <p>You use this API to attach a managed policy to a group. To embed an inline policy in a group, use <a>PutGroupPolicy</a>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=AttachGroupPolicy
		 * @param {string} GroupName <p>The name (friendly name, not ARN) of the group to attach the policy to.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyArn <p>The Amazon Resource Name (ARN) of the IAM policy you want to attach.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @return {void} Success
		 */
		GET_AttachGroupPolicy(GroupName: string, PolicyArn: string, Action: GET_AttachGroupPolicyAction, Version: GET_AttachGroupPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AttachGroupPolicy?GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&PolicyArn=' + (PolicyArn == null ? '' : encodeURIComponent(PolicyArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Attaches the specified managed policy to the specified IAM role. When you attach a managed policy to a role, the managed policy becomes part of the role's permission (access) policy.</p> <note> <p>You cannot use a managed policy as the role's trust policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p> </note> <p>Use this API to attach a <i>managed</i> policy to a role. To embed an inline policy in a role, use <a>PutRolePolicy</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=AttachRolePolicy
		 * @param {string} RoleName <p>The name (friendly name, not ARN) of the role to attach the policy to.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyArn <p>The Amazon Resource Name (ARN) of the IAM policy you want to attach.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @return {void} Success
		 */
		GET_AttachRolePolicy(RoleName: string, PolicyArn: string, Action: GET_AttachRolePolicyAction, Version: GET_AttachRolePolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AttachRolePolicy?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&PolicyArn=' + (PolicyArn == null ? '' : encodeURIComponent(PolicyArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Attaches the specified managed policy to the specified user.</p> <p>You use this API to attach a <i>managed</i> policy to a user. To embed an inline policy in a user, use <a>PutUserPolicy</a>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=AttachUserPolicy
		 * @param {string} UserName <p>The name (friendly name, not ARN) of the IAM user to attach the policy to.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyArn <p>The Amazon Resource Name (ARN) of the IAM policy you want to attach.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @return {void} Success
		 */
		GET_AttachUserPolicy(UserName: string, PolicyArn: string, Action: GET_AttachUserPolicyAction, Version: GET_AttachUserPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AttachUserPolicy?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&PolicyArn=' + (PolicyArn == null ? '' : encodeURIComponent(PolicyArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Changes the password of the IAM user who is calling this operation. The AWS account root user password is not affected by this operation.</p> <p>To change the password for a different user, see <a>UpdateLoginProfile</a>. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing Passwords</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=ChangePassword
		 * @param {string} OldPassword The IAM user's current password.
		 * @param {string} NewPassword <p>The new password. The new password must conform to the AWS account's password policy, if one exists.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of characters. That string can include almost any printable ASCII character from the space (<code>\u0020</code>) through the end of the ASCII character range (<code>\u00FF</code>). You can also include the tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>) characters. Any of these characters are valid in a password. However, many tools, such as the AWS Management Console, might restrict the ability to type certain characters because they have special meaning within that tool.</p>
		 * @return {void} Success
		 */
		GET_ChangePassword(OldPassword: string, NewPassword: string, Action: GET_ChangePasswordAction, Version: GET_ChangePasswordVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ChangePassword?OldPassword=' + (OldPassword == null ? '' : encodeURIComponent(OldPassword)) + '&NewPassword=' + (NewPassword == null ? '' : encodeURIComponent(NewPassword)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Creates a new AWS secret access key and corresponding AWS access key ID for the specified user. The default status for new keys is <code>Active</code>.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID signing the request. This operation works for access keys under the AWS account. Consequently, you can use this operation to manage AWS account root user credentials. This is true even if the AWS account has no associated users.</p> <p> For information about limits on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p> <important> <p>To ensure the security of your AWS account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can delete the access keys for the associated user and then create new keys.</p> </important>
		 * Get #Action=CreateAccessKey
		 * @param {string} UserName <p>The name of the IAM user that the new key will belong to.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_CreateAccessKey(UserName: string | null | undefined, Action: GET_CreateAccessKeyAction, Version: GET_CreateAccessKeyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateAccessKey?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an alias for your AWS account. For information about using an AWS account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an Alias for Your AWS Account ID</a> in the <i>IAM User Guide</i>.
		 * Get #Action=CreateAccountAlias
		 * @param {string} AccountAlias <p>The account alias to create.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of lowercase letters, digits, and dashes. You cannot start or finish with a dash, nor can you have two dashes in a row.</p>
		 * @return {void} Success
		 */
		GET_CreateAccountAlias(AccountAlias: string, Action: GET_CreateAccountAliasAction, Version: GET_CreateAccountAliasVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateAccountAlias?AccountAlias=' + (AccountAlias == null ? '' : encodeURIComponent(AccountAlias)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new group.</p> <p> For information about the number of groups you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=CreateGroup
		 * @param {string} Path <p> The path to the group. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>.</p> <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {string} GroupName <p>The name of the group to create. Do not include the path in this value.</p> <p>IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both "MyResource" and "myresource".</p>
		 * @return {void} Success
		 */
		GET_CreateGroup(Path: string | null | undefined, GroupName: string, Action: GET_CreateGroupAction, Version: GET_CreateGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateGroup?Path=' + (Path == null ? '' : encodeURIComponent(Path)) + '&GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Creates a new instance profile. For information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a>.</p> <p> For information about the number of instance profiles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=CreateInstanceProfile
		 * @param {string} InstanceProfileName <p>The name of the instance profile to create.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} Path <p> The path to the instance profile. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>.</p> <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @return {void} Success
		 */
		GET_CreateInstanceProfile(InstanceProfileName: string, Path: string | null | undefined, Action: GET_CreateInstanceProfileAction, Version: GET_CreateInstanceProfileVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateInstanceProfile?InstanceProfileName=' + (InstanceProfileName == null ? '' : encodeURIComponent(InstanceProfileName)) + '&Path=' + (Path == null ? '' : encodeURIComponent(Path)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a password for the specified user, giving the user the ability to access AWS services through the AWS Management Console. For more information about managing passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing Passwords</a> in the <i>IAM User Guide</i>.
		 * Get #Action=CreateLoginProfile
		 * @param {string} UserName <p>The name of the IAM user to create a password for. The user must already exist.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} Password <p>The new password for the user.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of characters. That string can include almost any printable ASCII character from the space (<code>\u0020</code>) through the end of the ASCII character range (<code>\u00FF</code>). You can also include the tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>) characters. Any of these characters are valid in a password. However, many tools, such as the AWS Management Console, might restrict the ability to type certain characters because they have special meaning within that tool.</p>
		 * @param {boolean} PasswordResetRequired Specifies whether the user is required to set a new password on next sign-in.
		 * @return {void} Success
		 */
		GET_CreateLoginProfile(UserName: string, Password: string, PasswordResetRequired: boolean | null | undefined, Action: GET_CreateLoginProfileAction, Version: GET_CreateLoginProfileVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateLoginProfile?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Password=' + (Password == null ? '' : encodeURIComponent(Password)) + '&PasswordResetRequired=' + PasswordResetRequired + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an IAM entity to describe an identity provider (IdP) that supports <a href="http://openid.net/connect/">OpenID Connect (OIDC)</a>.</p> <p>The OIDC provider that you create with this operation can be used as a principal in a role's trust policy. Such a policy establishes a trust relationship between AWS and the OIDC provider.</p> <p>When you create the IAM OIDC provider, you specify the following:</p> <ul> <li> <p>The URL of the OIDC identity provider (IdP) to trust</p> </li> <li> <p>A list of client IDs (also known as audiences) that identify the application or applications that are allowed to authenticate using the OIDC provider</p> </li> <li> <p>A list of thumbprints of one or more server certificates that the IdP uses</p> </li> </ul> <p>You get all of this information from the OIDC IdP that you want to use to access AWS.</p> <note> <p>The trust for the OIDC provider is derived from the IAM provider that this operation creates. Therefore, it is best to limit access to the <a>CreateOpenIDConnectProvider</a> operation to highly privileged users.</p> </note>
		 * Get #Action=CreateOpenIDConnectProvider
		 * @param {string} Url <p>The URL of the identity provider. The URL must begin with <code>https://</code> and should correspond to the <code>iss</code> claim in the provider's OpenID Connect ID tokens. Per the OIDC standard, path components are allowed but query parameters are not. Typically the URL consists of only a hostname, like <code>https://server.example.org</code> or <code>https://example.com</code>.</p> <p>You cannot register the same provider multiple times in a single AWS account. If you try to submit a URL that has already been used for an OpenID Connect provider in the AWS account, you will get an error.</p>
		 * @param {Array<string>} ClientIDList <p>A list of client IDs (also known as audiences). When a mobile or web app registers with an OpenID Connect provider, they establish a value that identifies the application. (This is the value that's sent as the <code>client_id</code> parameter on OAuth requests.)</p> <p>You can register multiple client IDs with the same provider. For example, you might have multiple applications that use the same OIDC provider. You cannot register more than 100 client IDs with a single IAM OIDC provider.</p> <p>There is no defined format for a client ID. The <code>CreateOpenIDConnectProviderRequest</code> operation accepts client IDs up to 255 characters long.</p>
		 * @param {Array<string>} ThumbprintList <p>A list of server certificate thumbprints for the OpenID Connect (OIDC) identity provider's server certificates. Typically this list includes only one entry. However, IAM lets you have up to five thumbprints for an OIDC provider. This lets you maintain multiple thumbprints if the identity provider is rotating certificates.</p> <p>The server certificate thumbprint is the hex-encoded SHA-1 hash value of the X.509 certificate used by the domain where the OpenID Connect provider makes its keys available. It is always a 40-character string.</p> <p>You must provide at least one thumbprint when creating an IAM OIDC provider. For example, assume that the OIDC provider is <code>server.example.com</code> and the provider stores its keys at https://keys.server.example.com/openid-connect. In that case, the thumbprint string would be the hex-encoded SHA-1 hash value of the certificate used by https://keys.server.example.com.</p> <p>For more information about obtaining the OIDC provider's thumbprint, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/identity-providers-oidc-obtain-thumbprint.html">Obtaining the Thumbprint for an OpenID Connect Provider</a> in the <i>IAM User Guide</i>.</p>
		 * @return {void} Success
		 */
		GET_CreateOpenIDConnectProvider(Url: string, ClientIDList: Array<string> | null | undefined, ThumbprintList: Array<string>, Action: GET_CreateOpenIDConnectProviderAction, Version: GET_CreateOpenIDConnectProviderVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateOpenIDConnectProvider?Url=' + (Url == null ? '' : encodeURIComponent(Url)) + '&' + ClientIDList?.map(z => `ClientIDList=${encodeURIComponent(z)}`).join('&') + '&' + ThumbprintList.map(z => `ThumbprintList=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new managed policy for your AWS account.</p> <p>This operation creates a policy version with a version identifier of <code>v1</code> and sets v1 as the policy's default version. For more information about policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed Policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policies in general, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=CreatePolicy
		 * @param {string} PolicyName <p>The friendly name of the policy.</p> <p>IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both "MyResource" and "myresource".</p>
		 * @param {string} Path <p>The path for the policy.</p> <p>For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>.</p> <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {string} PolicyDocument <p>The JSON policy document that you want to use as the content for the new policy.</p> <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @param {string} Description <p>A friendly description of the policy.</p> <p>Typically used to store information about the permissions defined in the policy. For example, "Grants access to production DynamoDB tables."</p> <p>The policy description is immutable. After a value is assigned, it cannot be changed.</p>
		 * @return {void} Success
		 */
		GET_CreatePolicy(PolicyName: string, Path: string | null | undefined, PolicyDocument: string, Description: string | null | undefined, Action: GET_CreatePolicyAction, Version: GET_CreatePolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreatePolicy?PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&Path=' + (Path == null ? '' : encodeURIComponent(Path)) + '&PolicyDocument=' + (PolicyDocument == null ? '' : encodeURIComponent(PolicyDocument)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using <a>DeletePolicyVersion</a> before you create a new version.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=CreatePolicyVersion
		 * @param {string} PolicyArn <p>The Amazon Resource Name (ARN) of the IAM policy to which you want to add a new version.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @param {string} PolicyDocument <p>The JSON policy document that you want to use as the content for this new version of the policy.</p> <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @param {boolean} SetAsDefault <p>Specifies whether to set this version as the policy's default version.</p> <p>When this parameter is <code>true</code>, the new policy version becomes the operative version. That is, it becomes the version that is in effect for the IAM users, groups, and roles that the policy is attached to.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed Policies</a> in the <i>IAM User Guide</i>.</p>
		 * @return {void} Success
		 */
		GET_CreatePolicyVersion(PolicyArn: string, PolicyDocument: string, SetAsDefault: boolean | null | undefined, Action: GET_CreatePolicyVersionAction, Version: GET_CreatePolicyVersionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreatePolicyVersion?PolicyArn=' + (PolicyArn == null ? '' : encodeURIComponent(PolicyArn)) + '&PolicyDocument=' + (PolicyDocument == null ? '' : encodeURIComponent(PolicyDocument)) + '&SetAsDefault=' + SetAsDefault + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new role for your AWS account. For more information about roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">IAM Roles</a>. For information about limitations on role names and the number of roles you can create, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.
		 * Get #Action=CreateRole
		 * @param {string} Path <p> The path to the role. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>.</p> <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {string} RoleName <p>The name of the role to create.</p> <p>IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both "MyResource" and "myresource".</p>
		 * @param {string} AssumeRolePolicyDocument <p>The trust relationship policy document that grants an entity permission to assume the role.</p> <p>In IAM, you must provide a JSON policy that has been converted to a string. However, for AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul> <p> Upon success, the response includes the same trust policy in JSON format.</p>
		 * @param {string} Description A description of the role.
		 * @param {number} MaxSessionDuration <p>The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours.</p> <p>Anyone who assumes the role from the AWS CLI or API can use the <code>DurationSeconds</code> API parameter or the <code>duration-seconds</code> CLI parameter to request a longer session. The <code>MaxSessionDuration</code> setting determines the maximum duration that can be requested using the <code>DurationSeconds</code> parameter. If users don't specify a value for the <code>DurationSeconds</code> parameter, their security credentials are valid for one hour by default. This applies when you use the <code>AssumeRole*</code> API operations or the <code>assume-role*</code> CLI operations but does not apply when you use those operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the <i>IAM User Guide</i>.</p>
		 * @param {string} PermissionsBoundary The ARN of the policy that is used to set the permissions boundary for the role.
		 * @param {Array<Tag>} Tags <p>A list of tags that you want to attach to the newly created role. Each tag consists of a key name and an associated value. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p> <note> <p>If any one of the tags is invalid or if you exceed the allowed number of tags per role, then the entire request fails and the role is not created.</p> </note>
		 * @return {void} Success
		 */
		GET_CreateRole(Path: string | null | undefined, RoleName: string, AssumeRolePolicyDocument: string, Description: string | null | undefined, MaxSessionDuration: number | null | undefined, PermissionsBoundary: string | null | undefined, Tags: Array<Tag> | null | undefined, Action: GET_CreateRoleAction, Version: GET_CreateRoleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateRole?Path=' + (Path == null ? '' : encodeURIComponent(Path)) + '&RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&AssumeRolePolicyDocument=' + (AssumeRolePolicyDocument == null ? '' : encodeURIComponent(AssumeRolePolicyDocument)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&MaxSessionDuration=' + MaxSessionDuration + '&PermissionsBoundary=' + (PermissionsBoundary == null ? '' : encodeURIComponent(PermissionsBoundary)) + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an IAM resource that describes an identity provider (IdP) that supports SAML 2.0.</p> <p>The SAML provider resource that you create with this operation can be used as a principal in an IAM role's trust policy. Such a policy can enable federated users who sign in using the SAML IdP to assume the role. You can create an IAM role that supports Web-based single sign-on (SSO) to the AWS Management Console or one that supports API access to AWS.</p> <p>When you create the SAML provider resource, you upload a SAML metadata document that you get from your IdP. That document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that the IdP sends. You must generate the metadata document using the identity management software that is used as your organization's IdP.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note> <p> For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html">Enabling SAML 2.0 Federated Users to Access the AWS Management Console</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based Federation</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=CreateSAMLProvider
		 * @param {string} SAMLMetadataDocument <p>An XML document generated by an identity provider (IdP) that supports SAML 2.0. The document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that are received from the IdP. You must generate the metadata document using the identity management software that is used as your organization's IdP.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based Federation</a> in the <i>IAM User Guide</i> </p>
		 * @param {string} Name <p>The name of the provider to create.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_CreateSAMLProvider(SAMLMetadataDocument: string, Name: string, Action: GET_CreateSAMLProviderAction, Version: GET_CreateSAMLProviderVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateSAMLProvider?SAMLMetadataDocument=' + (SAMLMetadataDocument == null ? '' : encodeURIComponent(SAMLMetadataDocument)) + '&Name=' + (Name == null ? '' : encodeURIComponent(Name)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an IAM role that is linked to a specific AWS service. The service controls the attached policies and when the role can be deleted. This helps ensure that the service is not broken by an unexpectedly changed or deleted role, which could put your AWS resources into an unknown state. Allowing the service to control the role helps improve service stability and proper cleanup when a service and its role are no longer needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using Service-Linked Roles</a> in the <i>IAM User Guide</i>. </p> <p>To attach a policy to this service-linked role, you must make the request using the AWS service that depends on this role.</p>
		 * Get #Action=CreateServiceLinkedRole
		 * @param {string} AWSServiceName <p>The service principal for the AWS service to which this role is attached. You use a string similar to a URL but without the http:// in front. For example: <code>elasticbeanstalk.amazonaws.com</code>. </p> <p>Service principals are unique and case-sensitive. To find the exact service principal for your service-linked role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html">AWS Services That Work with IAM</a> in the <i>IAM User Guide</i>. Look for the services that have <b>Yes </b>in the <b>Service-Linked Role</b> column. Choose the <b>Yes</b> link to view the service-linked role documentation for that service.</p>
		 * @param {string} Description The description of the role.
		 * @param {string} CustomSuffix <p/> <p>A string that you provide, which is combined with the service-provided prefix to form the complete role name. If you make multiple requests for the same service, then you must supply a different <code>CustomSuffix</code> for each request. Otherwise the request fails with a duplicate role name error. For example, you could add <code>-1</code> or <code>-debug</code> to the suffix.</p> <p>Some services do not support the <code>CustomSuffix</code> parameter. If you provide an optional suffix and the operation fails, try the operation again without the suffix.</p>
		 * @return {void} Success
		 */
		GET_CreateServiceLinkedRole(AWSServiceName: string, Description: string | null | undefined, CustomSuffix: string | null | undefined, Action: GET_CreateServiceLinkedRoleAction, Version: GET_CreateServiceLinkedRoleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateServiceLinkedRole?AWSServiceName=' + (AWSServiceName == null ? '' : encodeURIComponent(AWSServiceName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&CustomSuffix=' + (CustomSuffix == null ? '' : encodeURIComponent(CustomSuffix)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Generates a set of credentials consisting of a user name and password that can be used to access the service specified in the request. These credentials are generated by IAM, and can be used only for the specified service. </p> <p>You can have a maximum of two sets of service-specific credentials for each supported service per user.</p> <p>The only supported service at this time is AWS CodeCommit.</p> <p>You can reset the password to a new service-generated value by calling <a>ResetServiceSpecificCredential</a>.</p> <p>For more information about service-specific credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html">Using IAM with AWS CodeCommit: Git Credentials, SSH Keys, and AWS Access Keys</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=CreateServiceSpecificCredential
		 * @param {string} UserName <p>The name of the IAM user that is to be associated with the credentials. The new service-specific credentials have the same permissions as the associated user except that they can be used only to access the specified service.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} ServiceName The name of the AWS service that is to be associated with the credentials. The service you specify here is the only service that can be accessed using these credentials.
		 * @return {void} Success
		 */
		GET_CreateServiceSpecificCredential(UserName: string, ServiceName: string, Action: GET_CreateServiceSpecificCredentialAction, Version: GET_CreateServiceSpecificCredentialVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateServiceSpecificCredential?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&ServiceName=' + (ServiceName == null ? '' : encodeURIComponent(ServiceName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new IAM user for your AWS account.</p> <p> For information about limitations on the number of IAM users you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=CreateUser
		 * @param {string} Path <p> The path for the user name. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>.</p> <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {string} UserName <p>The name of the user to create.</p> <p>IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both "MyResource" and "myresource".</p>
		 * @param {string} PermissionsBoundary The ARN of the policy that is used to set the permissions boundary for the user.
		 * @param {Array<Tag>} Tags <p>A list of tags that you want to attach to the newly created user. Each tag consists of a key name and an associated value. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p> <note> <p>If any one of the tags is invalid or if you exceed the allowed number of tags per user, then the entire request fails and the user is not created.</p> </note>
		 * @return {void} Success
		 */
		GET_CreateUser(Path: string | null | undefined, UserName: string, PermissionsBoundary: string | null | undefined, Tags: Array<Tag> | null | undefined, Action: GET_CreateUserAction, Version: GET_CreateUserVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateUser?Path=' + (Path == null ? '' : encodeURIComponent(Path)) + '&UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&PermissionsBoundary=' + (PermissionsBoundary == null ? '' : encodeURIComponent(PermissionsBoundary)) + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new virtual MFA device for the AWS account. After creating the virtual MFA, use <a>EnableMFADevice</a> to attach the MFA device to an IAM user. For more information about creating and working with virtual MFA devices, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a Virtual MFA Device</a> in the <i>IAM User Guide</i>.</p> <p>For information about limits on the number of MFA devices you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on Entities</a> in the <i>IAM User Guide</i>.</p> <important> <p>The seed information contained in the QR code and the Base32 string should be treated like any other secret access information. In other words, protect the seed information as you would your AWS access keys or your passwords. After you provision your virtual device, you should ensure that the information is destroyed following secure procedures.</p> </important>
		 * Get #Action=CreateVirtualMFADevice
		 * @param {string} Path <p> The path for the virtual MFA device. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>.</p> <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {string} VirtualMFADeviceName <p>The name of the virtual MFA device. Use with path to uniquely identify a virtual MFA device.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_CreateVirtualMFADevice(Path: string | null | undefined, VirtualMFADeviceName: string, Action: GET_CreateVirtualMFADeviceAction, Version: GET_CreateVirtualMFADeviceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateVirtualMFADevice?Path=' + (Path == null ? '' : encodeURIComponent(Path)) + '&VirtualMFADeviceName=' + (VirtualMFADeviceName == null ? '' : encodeURIComponent(VirtualMFADeviceName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deactivates the specified MFA device and removes it from association with the user name for which it was originally enabled.</p> <p>For more information about creating and working with virtual MFA devices, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a Virtual Multi-factor Authentication (MFA) Device</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=DeactivateMFADevice
		 * @param {string} UserName <p>The name of the user whose MFA device you want to deactivate.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} SerialNumber <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@:/-</p>
		 * @return {void} Success
		 */
		GET_DeactivateMFADevice(UserName: string, SerialNumber: string, Action: GET_DeactivateMFADeviceAction, Version: GET_DeactivateMFADeviceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeactivateMFADevice?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&SerialNumber=' + (SerialNumber == null ? '' : encodeURIComponent(SerialNumber)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the access key pair associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID signing the request. This operation works for access keys under the AWS account. Consequently, you can use this operation to manage AWS account root user credentials even if the AWS account has no associated users.</p>
		 * Get #Action=DeleteAccessKey
		 * @param {string} UserName <p>The name of the user whose access key pair you want to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} AccessKeyId <p>The access key ID for the access key ID and secret access key you want to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
		 * @return {void} Success
		 */
		GET_DeleteAccessKey(UserName: string | null | undefined, AccessKeyId: string, Action: GET_DeleteAccessKeyAction, Version: GET_DeleteAccessKeyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteAccessKey?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&AccessKeyId=' + (AccessKeyId == null ? '' : encodeURIComponent(AccessKeyId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified AWS account alias. For information about using an AWS account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an Alias for Your AWS Account ID</a> in the <i>IAM User Guide</i>.
		 * Get #Action=DeleteAccountAlias
		 * @param {string} AccountAlias <p>The name of the account alias to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of lowercase letters, digits, and dashes. You cannot start or finish with a dash, nor can you have two dashes in a row.</p>
		 * @return {void} Success
		 */
		GET_DeleteAccountAlias(AccountAlias: string, Action: GET_DeleteAccountAliasAction, Version: GET_DeleteAccountAliasVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteAccountAlias?AccountAlias=' + (AccountAlias == null ? '' : encodeURIComponent(AccountAlias)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the password policy for the AWS account. There are no parameters.
		 * Get #Action=DeleteAccountPasswordPolicy
		 * @return {void} Success
		 */
		GET_DeleteAccountPasswordPolicy(Action: GET_DeleteAccountPasswordPolicyAction, Version: GET_DeleteAccountPasswordPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteAccountPasswordPolicy?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the password policy for the AWS account. There are no parameters.
		 * Post #Action=DeleteAccountPasswordPolicy
		 * @return {void} Success
		 */
		POST_DeleteAccountPasswordPolicy(Action: GET_DeleteAccountPasswordPolicyAction, Version: POST_DeleteAccountPasswordPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DeleteAccountPasswordPolicy?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified IAM group. The group must not contain any users or have any attached policies.
		 * Get #Action=DeleteGroup
		 * @param {string} GroupName <p>The name of the IAM group to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_DeleteGroup(GroupName: string, Action: GET_DeleteGroupAction, Version: GET_DeleteGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteGroup?GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified inline policy that is embedded in the specified IAM group.</p> <p>A group can also have managed policies attached to it. To detach a managed policy from a group, use <a>DetachGroupPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=DeleteGroupPolicy
		 * @param {string} GroupName <p>The name (friendly name, not ARN) identifying the group that the policy is embedded in.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyName <p>The name identifying the policy document to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_DeleteGroupPolicy(GroupName: string, PolicyName: string, Action: GET_DeleteGroupPolicyAction, Version: GET_DeleteGroupPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteGroupPolicy?GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified instance profile. The instance profile must not have an associated role.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important> <p>For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a>.</p>
		 * Get #Action=DeleteInstanceProfile
		 * @param {string} InstanceProfileName <p>The name of the instance profile to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_DeleteInstanceProfile(InstanceProfileName: string, Action: GET_DeleteInstanceProfileAction, Version: GET_DeleteInstanceProfileVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteInstanceProfile?InstanceProfileName=' + (InstanceProfileName == null ? '' : encodeURIComponent(InstanceProfileName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the password for the specified IAM user, which terminates the user's ability to access AWS services through the AWS Management Console.</p> <important> <p> Deleting a user's password does not prevent a user from accessing AWS through the command line interface or the API. To prevent all user access, you must also either make any access keys inactive or delete them. For more information about making keys inactive or deleting them, see <a>UpdateAccessKey</a> and <a>DeleteAccessKey</a>. </p> </important>
		 * Get #Action=DeleteLoginProfile
		 * @param {string} UserName <p>The name of the user whose password you want to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_DeleteLoginProfile(UserName: string, Action: GET_DeleteLoginProfileAction, Version: GET_DeleteLoginProfileVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteLoginProfile?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p> <p>Deleting an IAM OIDC provider resource does not update any roles that reference the provider as a principal in their trust policies. Any attempt to assume a role that references a deleted provider fails.</p> <p>This operation is idempotent; it does not fail or return an error if you call the operation for a provider that does not exist.</p>
		 * Get #Action=DeleteOpenIDConnectProvider
		 * @param {string} OpenIDConnectProviderArn The Amazon Resource Name (ARN) of the IAM OpenID Connect provider resource object to delete. You can get a list of OpenID Connect provider resource ARNs by using the <a>ListOpenIDConnectProviders</a> operation.
		 * @return {void} Success
		 */
		GET_DeleteOpenIDConnectProvider(OpenIDConnectProviderArn: string, Action: GET_DeleteOpenIDConnectProviderAction, Version: GET_DeleteOpenIDConnectProviderVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteOpenIDConnectProvider?OpenIDConnectProviderArn=' + (OpenIDConnectProviderArn == null ? '' : encodeURIComponent(OpenIDConnectProviderArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified managed policy.</p> <p>Before you can delete a managed policy, you must first detach the policy from all users, groups, and roles that it is attached to. In addition, you must delete all the policy's versions. The following steps describe the process for deleting a managed policy:</p> <ul> <li> <p>Detach the policy from all users, groups, and roles that the policy is attached to, using the <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a> API operations. To list all the users, groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> </li> <li> <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>. To list the policy's versions, use <a>ListPolicyVersions</a>. You cannot use <a>DeletePolicyVersion</a> to delete the version that is marked as the default version. You delete the policy's default version in the next step of the process.</p> </li> <li> <p>Delete the policy (this automatically deletes the policy's default version) using this API.</p> </li> </ul> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=DeletePolicy
		 * @param {string} PolicyArn <p>The Amazon Resource Name (ARN) of the IAM policy you want to delete.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @return {void} Success
		 */
		GET_DeletePolicy(PolicyArn: string, Action: GET_DeletePolicyAction, Version: GET_DeletePolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeletePolicy?PolicyArn=' + (PolicyArn == null ? '' : encodeURIComponent(PolicyArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified version from the specified managed policy.</p> <p>You cannot delete the default version from a policy using this API. To delete the default version from a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p> <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=DeletePolicyVersion
		 * @param {string} PolicyArn <p>The Amazon Resource Name (ARN) of the IAM policy from which you want to delete a version.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @param {string} VersionId <p>The policy version to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consists of the lowercase letter 'v' followed by one or two digits, and optionally followed by a period '.' and a string of letters and digits.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed Policies</a> in the <i>IAM User Guide</i>.</p>
		 * @return {void} Success
		 */
		GET_DeletePolicyVersion(PolicyArn: string, VersionId: string, Action: GET_DeletePolicyVersionAction, Version: GET_DeletePolicyVersionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeletePolicyVersion?PolicyArn=' + (PolicyArn == null ? '' : encodeURIComponent(PolicyArn)) + '&VersionId=' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified role. The role must not have any policies attached. For more information about roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with Roles</a>.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important>
		 * Get #Action=DeleteRole
		 * @param {string} RoleName <p>The name of the role to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_DeleteRole(RoleName: string, Action: GET_DeleteRoleAction, Version: GET_DeleteRoleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteRole?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the permissions boundary for the specified IAM role. </p> <important> <p>Deleting the permissions boundary for a role might increase its permissions. For example, it might allow anyone who assumes the role to perform all the actions granted in its permissions policies. </p> </important>
		 * Get #Action=DeleteRolePermissionsBoundary
		 * @param {string} RoleName The name (friendly name, not ARN) of the IAM role from which you want to remove the permissions boundary.
		 * @return {void} Success
		 */
		GET_DeleteRolePermissionsBoundary(RoleName: string, Action: GET_DeleteRolePermissionsBoundaryAction, Version: GET_DeleteRolePermissionsBoundaryVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteRolePermissionsBoundary?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified inline policy that is embedded in the specified IAM role.</p> <p>A role can also have managed policies attached to it. To detach a managed policy from a role, use <a>DetachRolePolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=DeleteRolePolicy
		 * @param {string} RoleName <p>The name (friendly name, not ARN) identifying the role that the policy is embedded in.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyName <p>The name of the inline policy to delete from the specified IAM role.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_DeleteRolePolicy(RoleName: string, PolicyName: string, Action: GET_DeleteRolePolicyAction, Version: GET_DeleteRolePolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteRolePolicy?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a SAML provider resource in IAM.</p> <p>Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
		 * Get #Action=DeleteSAMLProvider
		 * @param {string} SAMLProviderArn The Amazon Resource Name (ARN) of the SAML provider to delete.
		 * @return {void} Success
		 */
		GET_DeleteSAMLProvider(SAMLProviderArn: string, Action: GET_DeleteSAMLProviderAction, Version: GET_DeleteSAMLProviderVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteSAMLProvider?SAMLProviderArn=' + (SAMLProviderArn == null ? '' : encodeURIComponent(SAMLProviderArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified SSH public key.</p> <p>The SSH public key deleted by this operation is used only for authenticating the associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH Connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
		 * Get #Action=DeleteSSHPublicKey
		 * @param {string} UserName <p>The name of the IAM user associated with the SSH public key.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} SSHPublicKeyId <p>The unique identifier for the SSH public key.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
		 * @return {void} Success
		 */
		GET_DeleteSSHPublicKey(UserName: string, SSHPublicKeyId: string, Action: GET_DeleteSSHPublicKeyAction, Version: GET_DeleteSSHPublicKeyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteSSHPublicKey?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&SSHPublicKeyId=' + (SSHPublicKeyId == null ? '' : encodeURIComponent(SSHPublicKeyId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified server certificate.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with Server Certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of AWS services that can use the server certificates that you manage with IAM.</p> <important> <p> If you are using a server certificate with Elastic Load Balancing, deleting the certificate could have implications for your application. If Elastic Load Balancing doesn't detect the deletion of bound certificates, it may continue to use the certificates. This could cause Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to the certificate from Elastic Load Balancing before using this command to delete the certificate. For more information, go to <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html">DeleteLoadBalancerListeners</a> in the <i>Elastic Load Balancing API Reference</i>.</p> </important>
		 * Get #Action=DeleteServerCertificate
		 * @param {string} ServerCertificateName <p>The name of the server certificate you want to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_DeleteServerCertificate(ServerCertificateName: string, Action: GET_DeleteServerCertificateAction, Version: GET_DeleteServerCertificateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteServerCertificate?ServerCertificateName=' + (ServerCertificateName == null ? '' : encodeURIComponent(ServerCertificateName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Submits a service-linked role deletion request and returns a <code>DeletionTaskId</code>, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the <code>DeletionTaskId</code> of the earlier request is returned.</p> <p>If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> API operation returns the reason for the failure, usually including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the <a href="http://docs.aws.amazon.com/">AWS documentation</a> for your service.</p> <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles Terms and Concepts: AWS Service-Linked Role</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=DeleteServiceLinkedRole
		 * @param {string} RoleName The name of the service-linked role to be deleted.
		 * @return {void} Success
		 */
		GET_DeleteServiceLinkedRole(RoleName: string, Action: GET_DeleteServiceLinkedRoleAction, Version: GET_DeleteServiceLinkedRoleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteServiceLinkedRole?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified service-specific credential.
		 * Get #Action=DeleteServiceSpecificCredential
		 * @param {string} UserName <p>The name of the IAM user associated with the service-specific credential. If this value is not specified, then the operation assumes the user whose credentials are used to call the operation.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} ServiceSpecificCredentialId <p>The unique identifier of the service-specific credential. You can get this value by calling <a>ListServiceSpecificCredentials</a>.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
		 * @return {void} Success
		 */
		GET_DeleteServiceSpecificCredential(UserName: string | null | undefined, ServiceSpecificCredentialId: string, Action: GET_DeleteServiceSpecificCredentialAction, Version: GET_DeleteServiceSpecificCredentialVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteServiceSpecificCredential?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&ServiceSpecificCredentialId=' + (ServiceSpecificCredentialId == null ? '' : encodeURIComponent(ServiceSpecificCredentialId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a signing certificate associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID signing the request. This operation works for access keys under the AWS account. Consequently, you can use this operation to manage AWS account root user credentials even if the AWS account has no associated IAM users.</p>
		 * Get #Action=DeleteSigningCertificate
		 * @param {string} UserName <p>The name of the user the signing certificate belongs to.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} CertificateId <p>The ID of the signing certificate to delete.</p> <p>The format of this parameter, as described by its <a href="http://wikipedia.org/wiki/regex">regex</a> pattern, is a string of characters that can be upper- or lower-cased letters or digits.</p>
		 * @return {void} Success
		 */
		GET_DeleteSigningCertificate(UserName: string | null | undefined, CertificateId: string, Action: GET_DeleteSigningCertificateAction, Version: GET_DeleteSigningCertificateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteSigningCertificate?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&CertificateId=' + (CertificateId == null ? '' : encodeURIComponent(CertificateId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified IAM user. Unlike the AWS Management Console, when you delete a user programmatically, you must delete the items attached to the user manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM User</a>. Before attempting to delete a user, remove the following items:</p> <ul> <li> <p>Password (<a>DeleteLoginProfile</a>)</p> </li> <li> <p>Access keys (<a>DeleteAccessKey</a>)</p> </li> <li> <p>Signing certificate (<a>DeleteSigningCertificate</a>)</p> </li> <li> <p>SSH public key (<a>DeleteSSHPublicKey</a>)</p> </li> <li> <p>Git credentials (<a>DeleteServiceSpecificCredential</a>)</p> </li> <li> <p>Multi-factor authentication (MFA) device (<a>DeactivateMFADevice</a>, <a>DeleteVirtualMFADevice</a>)</p> </li> <li> <p>Inline policies (<a>DeleteUserPolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachUserPolicy</a>)</p> </li> <li> <p>Group memberships (<a>RemoveUserFromGroup</a>)</p> </li> </ul>
		 * Get #Action=DeleteUser
		 * @param {string} UserName <p>The name of the user to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_DeleteUser(UserName: string, Action: GET_DeleteUserAction, Version: GET_DeleteUserVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteUser?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the permissions boundary for the specified IAM user.</p> <important> <p>Deleting the permissions boundary for a user might increase its permissions by allowing the user to perform all the actions granted in its permissions policies. </p> </important>
		 * Get #Action=DeleteUserPermissionsBoundary
		 * @param {string} UserName The name (friendly name, not ARN) of the IAM user from which you want to remove the permissions boundary.
		 * @return {void} Success
		 */
		GET_DeleteUserPermissionsBoundary(UserName: string, Action: GET_DeleteUserPermissionsBoundaryAction, Version: GET_DeleteUserPermissionsBoundaryVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteUserPermissionsBoundary?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified inline policy that is embedded in the specified IAM user.</p> <p>A user can also have managed policies attached to it. To detach a managed policy from a user, use <a>DetachUserPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=DeleteUserPolicy
		 * @param {string} UserName <p>The name (friendly name, not ARN) identifying the user that the policy is embedded in.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyName <p>The name identifying the policy document to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_DeleteUserPolicy(UserName: string, PolicyName: string, Action: GET_DeleteUserPolicyAction, Version: GET_DeleteUserPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteUserPolicy?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a virtual MFA device.</p> <note> <p> You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see <a>DeactivateMFADevice</a>. </p> </note>
		 * Get #Action=DeleteVirtualMFADevice
		 * @param {string} SerialNumber <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the same as the ARN.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@:/-</p>
		 * @return {void} Success
		 */
		GET_DeleteVirtualMFADevice(SerialNumber: string, Action: GET_DeleteVirtualMFADeviceAction, Version: GET_DeleteVirtualMFADeviceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteVirtualMFADevice?SerialNumber=' + (SerialNumber == null ? '' : encodeURIComponent(SerialNumber)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified managed policy from the specified IAM group.</p> <p>A group can also have inline policies embedded with it. To delete an inline policy, use the <a>DeleteGroupPolicy</a> API. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=DetachGroupPolicy
		 * @param {string} GroupName <p>The name (friendly name, not ARN) of the IAM group to detach the policy from.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyArn <p>The Amazon Resource Name (ARN) of the IAM policy you want to detach.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @return {void} Success
		 */
		GET_DetachGroupPolicy(GroupName: string, PolicyArn: string, Action: GET_DetachGroupPolicyAction, Version: GET_DetachGroupPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetachGroupPolicy?GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&PolicyArn=' + (PolicyArn == null ? '' : encodeURIComponent(PolicyArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified managed policy from the specified role.</p> <p>A role can also have inline policies embedded with it. To delete an inline policy, use the <a>DeleteRolePolicy</a> API. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=DetachRolePolicy
		 * @param {string} RoleName <p>The name (friendly name, not ARN) of the IAM role to detach the policy from.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyArn <p>The Amazon Resource Name (ARN) of the IAM policy you want to detach.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @return {void} Success
		 */
		GET_DetachRolePolicy(RoleName: string, PolicyArn: string, Action: GET_DetachRolePolicyAction, Version: GET_DetachRolePolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetachRolePolicy?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&PolicyArn=' + (PolicyArn == null ? '' : encodeURIComponent(PolicyArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified managed policy from the specified user.</p> <p>A user can also have inline policies embedded with it. To delete an inline policy, use the <a>DeleteUserPolicy</a> API. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=DetachUserPolicy
		 * @param {string} UserName <p>The name (friendly name, not ARN) of the IAM user to detach the policy from.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyArn <p>The Amazon Resource Name (ARN) of the IAM policy you want to detach.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @return {void} Success
		 */
		GET_DetachUserPolicy(UserName: string, PolicyArn: string, Action: GET_DetachUserPolicyAction, Version: GET_DetachUserPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetachUserPolicy?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&PolicyArn=' + (PolicyArn == null ? '' : encodeURIComponent(PolicyArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables the specified MFA device and associates it with the specified IAM user. When enabled, the MFA device is required for every subsequent login by the IAM user associated with the device.
		 * Get #Action=EnableMFADevice
		 * @param {string} UserName <p>The name of the IAM user for whom you want to enable the MFA device.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} SerialNumber <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@:/-</p>
		 * @param {string} AuthenticationCode1 <p>An authentication code emitted by the device. </p> <p>The format for this parameter is a string of six digits.</p> <important> <p>Submit your request immediately after generating the authentication codes. If you generate the codes and then wait too long to submit the request, the MFA device successfully associates with the user but the MFA device becomes out of sync. This happens because time-based one-time passwords (TOTP) expire after a short period of time. If this happens, you can <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_sync.html">resync the device</a>.</p> </important>
		 * @param {string} AuthenticationCode2 <p>A subsequent authentication code emitted by the device.</p> <p>The format for this parameter is a string of six digits.</p> <important> <p>Submit your request immediately after generating the authentication codes. If you generate the codes and then wait too long to submit the request, the MFA device successfully associates with the user but the MFA device becomes out of sync. This happens because time-based one-time passwords (TOTP) expire after a short period of time. If this happens, you can <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_sync.html">resync the device</a>.</p> </important>
		 * @return {void} Success
		 */
		GET_EnableMFADevice(UserName: string, SerialNumber: string, AuthenticationCode1: string, AuthenticationCode2: string, Action: GET_EnableMFADeviceAction, Version: GET_EnableMFADeviceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=EnableMFADevice?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&SerialNumber=' + (SerialNumber == null ? '' : encodeURIComponent(SerialNumber)) + '&AuthenticationCode1=' + (AuthenticationCode1 == null ? '' : encodeURIComponent(AuthenticationCode1)) + '&AuthenticationCode2=' + (AuthenticationCode2 == null ? '' : encodeURIComponent(AuthenticationCode2)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates a credential report for the AWS account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting Credential Reports</a> in the <i>IAM User Guide</i>.
		 * Get #Action=GenerateCredentialReport
		 * @return {void} Success
		 */
		GET_GenerateCredentialReport(Action: GET_GenerateCredentialReportAction, Version: GET_GenerateCredentialReportVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GenerateCredentialReport?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates a credential report for the AWS account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting Credential Reports</a> in the <i>IAM User Guide</i>.
		 * Post #Action=GenerateCredentialReport
		 * @return {void} Success
		 */
		POST_GenerateCredentialReport(Action: GET_GenerateCredentialReportAction, Version: POST_GenerateCredentialReportVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=GenerateCredentialReport?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Generates a report for service last accessed data for AWS Organizations. You can generate a report for any entities (organization root, organizational unit, or account) or policies in your organization.</p> <p>To call this operation, you must be signed in using your AWS Organizations master account credentials. You can use your long-term IAM user or root user credentials, or temporary credentials from assuming an IAM role. SCPs must be enabled for your organization root. You must have the required IAM and AWS Organizations permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining Permissions Using Service Last Accessed Data</a> in the <i>IAM User Guide</i>.</p> <p>You can generate a service last accessed data report for entities by specifying only the entity's path. This data includes a list of services that are allowed by any service control policies (SCPs) that apply to the entity.</p> <p>You can generate a service last accessed data report for a policy by specifying an entity's path and an optional AWS Organizations policy ID. This data includes a list of services that are allowed by the specified SCP.</p> <p>For each service in both report types, the data includes the most recent account activity that the policy allows to account principals in the entity or the entity's children. For important information about the data, reporting period, permissions required, troubleshooting, and supported Regions see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing Permissions Using Service Last Accessed Data</a> in the <i>IAM User Guide</i>.</p> <important> <p>The data includes all attempts to access AWS, not just the successful ones. This includes all attempts that were made using the AWS Management Console, the AWS API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that an account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM Events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>This operation returns a <code>JobId</code>. Use this parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation to check the status of the report generation. To check the status of this request, use the <code>JobId</code> parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation and test the <code>JobStatus</code> response parameter. When the job is complete, you can retrieve the report.</p> <p>To generate a service last accessed data report for entities, specify an entity path without specifying the optional AWS Organizations policy ID. The type of entity that you specify determines the data returned in the report.</p> <ul> <li> <p> <b>Root</b> – When you specify the organizations root as the entity, the resulting report lists all of the services allowed by SCPs that are attached to your root. For each service, the report includes data for all accounts in your organization except the master account, because the master account is not limited by SCPs.</p> </li> <li> <p> <b>OU</b> – When you specify an organizational unit (OU) as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the OU and its parents. For each service, the report includes data for all accounts in the OU or its children. This data excludes the master account, because the master account is not limited by SCPs.</p> </li> <li> <p> <b>Master account</b> – When you specify the master account, the resulting report lists all AWS services, because the master account is not limited by SCPs. For each service, the report includes data for only the master account.</p> </li> <li> <p> <b>Account</b> – When you specify another account as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the account and its parents. For each service, the report includes data for only the specified account.</p> </li> </ul> <p>To generate a service last accessed data report for policies, specify an entity path and the optional AWS Organizations policy ID. The type of entity that you specify determines the data returned for each service.</p> <ul> <li> <p> <b>Root</b> – When you specify the root entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in your organization to which the SCP applies. This data excludes the master account, because the master account is not limited by SCPs. If the SCP is not attached to any entities in the organization, then the report will return a list of services with no data.</p> </li> <li> <p> <b>OU</b> – When you specify an OU entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in the OU or its children to which the SCP applies. This means that other accounts outside the OU that are affected by the SCP might not be included in the data. This data excludes the master account, because the master account is not limited by SCPs. If the SCP is not attached to the OU or one of its children, the report will return a list of services with no data.</p> </li> <li> <p> <b>Master account</b> – When you specify the master account, the resulting report lists all AWS services, because the master account is not limited by SCPs. If you specify a policy ID in the CLI or API, the policy is ignored. For each service, the report includes data for only the master account.</p> </li> <li> <p> <b>Account</b> – When you specify another account entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for only the specified account. This means that other accounts in the organization that are affected by the SCP might not be included in the data. If the SCP is not attached to the account, the report will return a list of services with no data.</p> </li> </ul> <note> <p>Service last accessed data does not use other policy types when determining whether a principal could access a service. These other policy types include identity-based policies, resource-based policies, access control lists, IAM permissions boundaries, and STS assume role policies. It only applies SCP logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating Policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing Policy Scope by Viewing User Activity</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=GenerateOrganizationsAccessReport
		 * @param {string} EntityPath The path of the AWS Organizations entity (root, OU, or account). You can build an entity path using the known structure of your organization. For example, assume that your account ID is <code>123456789012</code> and its parent OU ID is <code>ou-rge0-awsabcde</code>. The organization root ID is <code>r-f6g7h8i9j0example</code> and your organization ID is <code>o-a1b2c3d4e5</code>. Your entity path is <code>o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-rge0-awsabcde/123456789012</code>.
		 * @param {string} OrganizationsPolicyId <p>The identifier of the AWS Organizations service control policy (SCP). This parameter is optional.</p> <p>This ID is used to generate information about when an account principal that is limited by the SCP attempted to access an AWS service.</p>
		 * @return {void} Success
		 */
		GET_GenerateOrganizationsAccessReport(EntityPath: string, OrganizationsPolicyId: string | null | undefined, Action: GET_GenerateOrganizationsAccessReportAction, Version: GET_GenerateOrganizationsAccessReportVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GenerateOrganizationsAccessReport?EntityPath=' + (EntityPath == null ? '' : encodeURIComponent(EntityPath)) + '&OrganizationsPolicyId=' + (OrganizationsPolicyId == null ? '' : encodeURIComponent(OrganizationsPolicyId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Generates a report that includes details about when an IAM resource (user, group, role, or policy) was last used in an attempt to access AWS services. Recent activity usually appears within four hours. IAM reports activity for the last 365 days, or less if your Region began supporting this feature within the last year. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions Where Data Is Tracked</a>.</p> <important> <p>The service last accessed data includes all attempts to access an AWS API, not just the successful ones. This includes all attempts that were made using the AWS Management Console, the AWS API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that your account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM Events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>The <code>GenerateServiceLastAccessedDetails</code> operation returns a <code>JobId</code>. Use this parameter in the following operations to retrieve the following details from your report: </p> <ul> <li> <p> <a>GetServiceLastAccessedDetails</a> – Use this operation for users, groups, roles, or policies to list every AWS service that the resource could access using permissions policies. For each service, the response includes information about the most recent access attempt.</p> <p>The <code>JobId</code> returned by <code>GenerateServiceLastAccessedDetail</code> must be used by the same role within a session, or by the same user when used to call <code>GetServiceLastAccessedDetail</code>.</p> </li> <li> <p> <a>GetServiceLastAccessedDetailsWithEntities</a> – Use this operation for groups and policies to list information about the associated entities (users or roles) that attempted to access a specific AWS service. </p> </li> </ul> <p>To check the status of the <code>GenerateServiceLastAccessedDetails</code> request, use the <code>JobId</code> parameter in the same operations and test the <code>JobStatus</code> response parameter.</p> <p>For additional information about the permissions policies that allow an identity (user, group, or role) to access specific services, use the <a>ListPoliciesGrantingServiceAccess</a> operation.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, AWS Organizations policies, IAM permissions boundaries, and AWS STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating Policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing Permissions Using Service Last Accessed Data</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=GenerateServiceLastAccessedDetails
		 * @param {string} Arn The ARN of the IAM resource (user, group, role, or managed policy) used to generate information about when the resource was last used in an attempt to access an AWS service.
		 * @param {GetServiceLastAccessedDetailsResponseJobType} Granularity The level of detail that you want to generate. You can specify whether you want to generate information about the last attempt to access services or actions. If you specify service-level granularity, this operation generates only service data. If you specify action-level granularity, it generates service and action data. If you don't include this optional parameter, the operation generates service data.
		 * @return {void} Success
		 */
		GET_GenerateServiceLastAccessedDetails(Arn: string, Granularity: GetServiceLastAccessedDetailsResponseJobType | null | undefined, Action: GET_GenerateServiceLastAccessedDetailsAction, Version: GET_GenerateServiceLastAccessedDetailsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GenerateServiceLastAccessedDetails?Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&Granularity=' + Granularity + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about when the specified access key was last used. The information includes the date and time of last use, along with the AWS service and Region that were specified in the last request made with that key.
		 * Get #Action=GetAccessKeyLastUsed
		 * @param {string} AccessKeyId <p>The identifier of an access key.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
		 * @return {void} Success
		 */
		GET_GetAccessKeyLastUsed(AccessKeyId: string, Action: GET_GetAccessKeyLastUsedAction, Version: GET_GetAccessKeyLastUsedVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetAccessKeyLastUsed?AccessKeyId=' + (AccessKeyId == null ? '' : encodeURIComponent(AccessKeyId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves information about all IAM users, groups, roles, and policies in your AWS account, including their relationships to one another. Use this API to obtain a snapshot of the configuration of IAM permissions (users, groups, roles, and policies) in your account.</p> <note> <p>Policies returned by this API are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>You can optionally filter the results using the <code>Filter</code> parameter. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
		 * Get #Action=GetAccountAuthorizationDetails
		 * @param {Array<EntityType>} Filter <p>A list of entity types used to filter the results. Only the entities that match the types you specify are included in the output. Use the value <code>LocalManagedPolicy</code> to include customer managed policies.</p> <p>The format for this parameter is a comma-separated (if more than one) list of strings. Each string value in the list must be one of the valid values listed below.</p>
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @return {void} Success
		 */
		GET_GetAccountAuthorizationDetails(Filter: Array<EntityType> | null | undefined, MaxItems: number | null | undefined, Marker: string | null | undefined, Action: GET_GetAccountAuthorizationDetailsAction, Version: GET_GetAccountAuthorizationDetailsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetAccountAuthorizationDetails?' + Filter?.map(z => `Filter=${z}`).join('&') + '&MaxItems=' + MaxItems + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the password policy for the AWS account. For more information about using a password policy, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM Password Policy</a>.
		 * Get #Action=GetAccountPasswordPolicy
		 * @return {void} Success
		 */
		GET_GetAccountPasswordPolicy(Action: GET_GetAccountPasswordPolicyAction, Version: GET_GetAccountPasswordPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetAccountPasswordPolicy?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the password policy for the AWS account. For more information about using a password policy, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM Password Policy</a>.
		 * Post #Action=GetAccountPasswordPolicy
		 * @return {void} Success
		 */
		POST_GetAccountPasswordPolicy(Action: GET_GetAccountPasswordPolicyAction, Version: POST_GetAccountPasswordPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=GetAccountPasswordPolicy?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves information about IAM entity usage and IAM quotas in the AWS account.</p> <p> For information about limitations on IAM entities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=GetAccountSummary
		 * @return {void} Success
		 */
		GET_GetAccountSummary(Action: GET_GetAccountSummaryAction, Version: GET_GetAccountSummaryVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetAccountSummary?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves information about IAM entity usage and IAM quotas in the AWS account.</p> <p> For information about limitations on IAM entities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p>
		 * Post #Action=GetAccountSummary
		 * @return {void} Success
		 */
		POST_GetAccountSummary(Action: GET_GetAccountSummaryAction, Version: POST_GetAccountSummaryVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=GetAccountSummary?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of all of the context keys referenced in the input policies. The policies are supplied as a list of one or more strings. To get the context keys from policies associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>Context keys are variables maintained by AWS and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value specified in an IAM policy. Use <code>GetContextKeysForCustomPolicy</code> to understand what key names and values you must supply when you call <a>SimulateCustomPolicy</a>. Note that all parameters are shown in unencoded form here for clarity but must be URL encoded to be included as a part of a real HTML request.</p>
		 * Get #Action=GetContextKeysForCustomPolicy
		 * @param {Array<string>} PolicyInputList <p>A list of policies for which you want the list of context keys referenced in those policies. Each document is specified as a string containing the complete, valid JSON text of an IAM policy.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_GetContextKeysForCustomPolicy(PolicyInputList: Array<string>, Action: GET_GetContextKeysForCustomPolicyAction, Version: GET_GetContextKeysForCustomPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetContextKeysForCustomPolicy?' + PolicyInputList.map(z => `PolicyInputList=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of all of the context keys referenced in all the IAM policies that are attached to the specified IAM entity. The entity can be an IAM user, group, or role. If you specify a user, then the request also includes all of the policies attached to groups that the user is a member of.</p> <p>You can optionally include a list of one or more additional policies, specified as strings. If you want to include <i>only</i> a list of policies by string, use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p> <b>Note:</b> This API discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by AWS and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>
		 * Get #Action=GetContextKeysForPrincipalPolicy
		 * @param {string} PolicySourceArn <p>The ARN of a user, group, or role whose policies contain the context keys that you want listed. If you specify a user, the list includes context keys that are found in all policies that are attached to the user. The list also includes all groups that the user is a member of. If you pick a group or a role, then it includes only those context keys that are found in policies attached to that entity. Note that all parameters are shown in unencoded form here for clarity, but must be URL encoded to be included as a part of a real HTML request.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @param {Array<string>} PolicyInputList <p>An optional list of additional policies for which you want the list of context keys that are referenced.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_GetContextKeysForPrincipalPolicy(PolicySourceArn: string, PolicyInputList: Array<string> | null | undefined, Action: GET_GetContextKeysForPrincipalPolicyAction, Version: GET_GetContextKeysForPrincipalPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetContextKeysForPrincipalPolicy?PolicySourceArn=' + (PolicySourceArn == null ? '' : encodeURIComponent(PolicySourceArn)) + '&' + PolicyInputList?.map(z => `PolicyInputList=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a credential report for the AWS account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting Credential Reports</a> in the <i>IAM User Guide</i>.
		 * Get #Action=GetCredentialReport
		 * @return {void} Success
		 */
		GET_GetCredentialReport(Action: GET_GetCredentialReportAction, Version: GET_GetCredentialReportVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetCredentialReport?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a credential report for the AWS account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting Credential Reports</a> in the <i>IAM User Guide</i>.
		 * Post #Action=GetCredentialReport
		 * @return {void} Success
		 */
		POST_GetCredentialReport(Action: GET_GetCredentialReportAction, Version: POST_GetCredentialReportVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=GetCredentialReport?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of IAM users that are in the specified IAM group. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.
		 * Get #Action=GetGroup
		 * @param {string} GroupName <p>The name of the group.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_GetGroup(GroupName: string, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_GetGroupAction, Version: GET_GetGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetGroup?GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the specified inline policy document that is embedded in the specified IAM group.</p> <note> <p>Policies returned by this API are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM group can also have managed policies attached to it. To retrieve a managed policy document that is attached to a group, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=GetGroupPolicy
		 * @param {string} GroupName <p>The name of the group the policy is associated with.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyName <p>The name of the policy document to get.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_GetGroupPolicy(GroupName: string, PolicyName: string, Action: GET_GetGroupPolicyAction, Version: GET_GetGroupPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetGroupPolicy?GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the specified instance profile, including the instance profile's path, GUID, ARN, and role. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a> in the <i>IAM User Guide</i>.
		 * Get #Action=GetInstanceProfile
		 * @param {string} InstanceProfileName <p>The name of the instance profile to get information about.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_GetInstanceProfile(InstanceProfileName: string, Action: GET_GetInstanceProfileAction, Version: GET_GetInstanceProfileVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetInstanceProfile?InstanceProfileName=' + (InstanceProfileName == null ? '' : encodeURIComponent(InstanceProfileName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the user name and password-creation date for the specified IAM user. If the user has not been assigned a password, the operation returns a 404 (<code>NoSuchEntity</code>) error.
		 * Get #Action=GetLoginProfile
		 * @param {string} UserName <p>The name of the user whose login profile you want to retrieve.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_GetLoginProfile(UserName: string, Action: GET_GetLoginProfileAction, Version: GET_GetLoginProfileVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetLoginProfile?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about the specified OpenID Connect (OIDC) provider resource object in IAM.
		 * Get #Action=GetOpenIDConnectProvider
		 * @param {string} OpenIDConnectProviderArn <p>The Amazon Resource Name (ARN) of the OIDC provider resource object in IAM to get information for. You can get a list of OIDC provider resource ARNs by using the <a>ListOpenIDConnectProviders</a> operation.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @return {void} Success
		 */
		GET_GetOpenIDConnectProvider(OpenIDConnectProviderArn: string, Action: GET_GetOpenIDConnectProviderAction, Version: GET_GetOpenIDConnectProviderVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetOpenIDConnectProvider?OpenIDConnectProviderArn=' + (OpenIDConnectProviderArn == null ? '' : encodeURIComponent(OpenIDConnectProviderArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the service last accessed data report for AWS Organizations that was previously generated using the <code> <a>GenerateOrganizationsAccessReport</a> </code> operation. This operation retrieves the status of your report job and the report contents.</p> <p>Depending on the parameters that you passed when you generated the report, the data returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p> <p>To call this operation, you must be signed in to the master account in your organization. SCPs must be enabled for your organization root. You must have permissions to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining Permissions Using Service Last Accessed Data</a> in the <i>IAM User Guide</i>.</p> <p>For each service that principals in an account (root users, IAM users, or IAM roles) could access using SCPs, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, it returns the reason that it failed.</p> <p>By default, the list is sorted by service namespace.</p>
		 * Get #Action=GetOrganizationsAccessReport
		 * @param {string} JobId The identifier of the request generated by the <a>GenerateOrganizationsAccessReport</a> operation.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {SortKeyType} SortKey The key that is used to sort the results. If you choose the namespace key, the results are returned in alphabetical order. If you choose the time key, the results are sorted numerically by the date and time.
		 * @return {void} Success
		 */
		GET_GetOrganizationsAccessReport(JobId: string, MaxItems: number | null | undefined, Marker: string | null | undefined, SortKey: SortKeyType | null | undefined, Action: GET_GetOrganizationsAccessReportAction, Version: GET_GetOrganizationsAccessReportVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetOrganizationsAccessReport?JobId=' + (JobId == null ? '' : encodeURIComponent(JobId)) + '&MaxItems=' + MaxItems + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&SortKey=' + SortKey + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves information about the specified managed policy, including the policy's default version and the total number of IAM users, groups, and roles to which the policy is attached. To retrieve the list of the specific users, groups, and roles that the policy is attached to, use the <a>ListEntitiesForPolicy</a> API. This API returns metadata about the policy. To retrieve the actual policy document for a specific version of the policy, use <a>GetPolicyVersion</a>.</p> <p>This API retrieves information about managed policies. To retrieve information about an inline policy that is embedded with an IAM user, group, or role, use the <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a> API.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=GetPolicy
		 * @param {string} PolicyArn <p>The Amazon Resource Name (ARN) of the managed policy that you want information about.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @return {void} Success
		 */
		GET_GetPolicy(PolicyArn: string, Action: GET_GetPolicyAction, Version: GET_GetPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetPolicy?PolicyArn=' + (PolicyArn == null ? '' : encodeURIComponent(PolicyArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves information about the specified version of the specified managed policy, including the policy document.</p> <note> <p>Policies returned by this API are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>To list the available versions for a policy, use <a>ListPolicyVersions</a>.</p> <p>This API retrieves information about managed policies. To retrieve information about an inline policy that is embedded in a user, group, or role, use the <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a> API.</p> <p>For more information about the types of policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=GetPolicyVersion
		 * @param {string} PolicyArn <p>The Amazon Resource Name (ARN) of the managed policy that you want information about.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @param {string} VersionId <p>Identifies the policy version to retrieve.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consists of the lowercase letter 'v' followed by one or two digits, and optionally followed by a period '.' and a string of letters and digits.</p>
		 * @return {void} Success
		 */
		GET_GetPolicyVersion(PolicyArn: string, VersionId: string, Action: GET_GetPolicyVersionAction, Version: GET_GetPolicyVersionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetPolicyVersion?PolicyArn=' + (PolicyArn == null ? '' : encodeURIComponent(PolicyArn)) + '&VersionId=' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves information about the specified role, including the role's path, GUID, ARN, and the role's trust policy that grants permission to assume the role. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with Roles</a>.</p> <note> <p>Policies returned by this API are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note>
		 * Get #Action=GetRole
		 * @param {string} RoleName <p>The name of the IAM role to get information about.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_GetRole(RoleName: string, Action: GET_GetRoleAction, Version: GET_GetRoleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetRole?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the specified inline policy document that is embedded with the specified IAM role.</p> <note> <p>Policies returned by this API are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM role can also have managed policies attached to it. To retrieve a managed policy document that is attached to a role, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using Roles to Delegate Permissions and Federate Identities</a>.</p>
		 * Get #Action=GetRolePolicy
		 * @param {string} RoleName <p>The name of the role associated with the policy.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyName <p>The name of the policy document to get.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_GetRolePolicy(RoleName: string, PolicyName: string, Action: GET_GetRolePolicyAction, Version: GET_GetRolePolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetRolePolicy?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider resource object was created or updated.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
		 * Get #Action=GetSAMLProvider
		 * @param {string} SAMLProviderArn <p>The Amazon Resource Name (ARN) of the SAML provider resource object in IAM to get information about.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @return {void} Success
		 */
		GET_GetSAMLProvider(SAMLProviderArn: string, Action: GET_GetSAMLProviderAction, Version: GET_GetSAMLProviderVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetSAMLProvider?SAMLProviderArn=' + (SAMLProviderArn == null ? '' : encodeURIComponent(SAMLProviderArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the specified SSH public key, including metadata about the key.</p> <p>The SSH public key retrieved by this operation is used only for authenticating the associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH Connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
		 * Get #Action=GetSSHPublicKey
		 * @param {string} UserName <p>The name of the IAM user associated with the SSH public key.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} SSHPublicKeyId <p>The unique identifier for the SSH public key.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
		 * @param {EncodingType} Encoding Specifies the public key encoding format to use in the response. To retrieve the public key in ssh-rsa format, use <code>SSH</code>. To retrieve the public key in PEM format, use <code>PEM</code>.
		 * @return {void} Success
		 */
		GET_GetSSHPublicKey(UserName: string, SSHPublicKeyId: string, Encoding: EncodingType, Action: GET_GetSSHPublicKeyAction, Version: GET_GetSSHPublicKeyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetSSHPublicKey?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&SSHPublicKeyId=' + (SSHPublicKeyId == null ? '' : encodeURIComponent(SSHPublicKeyId)) + '&Encoding=' + Encoding + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves information about the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with Server Certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of AWS services that can use the server certificates that you manage with IAM.</p>
		 * Get #Action=GetServerCertificate
		 * @param {string} ServerCertificateName <p>The name of the server certificate you want to retrieve information about.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_GetServerCertificate(ServerCertificateName: string, Action: GET_GetServerCertificateAction, Version: GET_GetServerCertificateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetServerCertificate?ServerCertificateName=' + (ServerCertificateName == null ? '' : encodeURIComponent(ServerCertificateName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves a service last accessed report that was created using the <code>GenerateServiceLastAccessedDetails</code> operation. You can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetails</code> to retrieve the status of your report job. When the report is complete, you can retrieve the generated report. The report includes a list of AWS services that the resource (user, group, role, or managed policy) can access.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, AWS Organizations policies, IAM permissions boundaries, and AWS STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating Policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For each service that the resource could access using permissions policies, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, the <code>GetServiceLastAccessedDetails</code> operation returns the reason that it failed.</p> <p>The <code>GetServiceLastAccessedDetails</code> operation returns a list of services. This list includes the number of entities that have attempted to access the service and the date and time of the last attempt. It also returns the ARN of the following entity, depending on the resource ARN that you used to generate the report:</p> <ul> <li> <p> <b>User</b> – Returns the user ARN that you used to generate the report</p> </li> <li> <p> <b>Group</b> – Returns the ARN of the group member (user) that last attempted to access the service</p> </li> <li> <p> <b>Role</b> – Returns the role ARN that you used to generate the report</p> </li> <li> <p> <b>Policy</b> – Returns the ARN of the user or role that last used the policy to attempt to access the service</p> </li> </ul> <p>By default, the list is sorted by service namespace.</p> <p>If you specified <code>ACTION_LEVEL</code> granularity when you generated the report, this operation returns service and action last accessed data. This includes the most recent access attempt for each tracked action within a service. Otherwise, this operation returns only service data.</p> <p>For more information about service and action last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing Permissions Using Service Last Accessed Data</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=GetServiceLastAccessedDetails
		 * @param {string} JobId The ID of the request generated by the <a>GenerateServiceLastAccessedDetails</a> operation. The <code>JobId</code> returned by <code>GenerateServiceLastAccessedDetail</code> must be used by the same role within a session, or by the same user when used to call <code>GetServiceLastAccessedDetail</code>.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @return {void} Success
		 */
		GET_GetServiceLastAccessedDetails(JobId: string, MaxItems: number | null | undefined, Marker: string | null | undefined, Action: GET_GetServiceLastAccessedDetailsAction, Version: GET_GetServiceLastAccessedDetailsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetServiceLastAccessedDetails?JobId=' + (JobId == null ? '' : encodeURIComponent(JobId)) + '&MaxItems=' + MaxItems + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>After you generate a group or policy report using the <code>GenerateServiceLastAccessedDetails</code> operation, you can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the status of your report job and a list of entities that could have used group or policy permissions to access the specified service.</p> <ul> <li> <p> <b>Group</b> – For a group report, this operation returns a list of users in the group that could have used the group’s policies in an attempt to access the service.</p> </li> <li> <p> <b>Policy</b> – For a policy report, this operation returns a list of entities (users or roles) that could have used the policy in an attempt to access the service.</p> </li> </ul> <p>You can also use this operation for user or role reports to retrieve details about those entities.</p> <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code> operation returns the reason that it failed.</p> <p>By default, the list of associated entities is sorted by date, with the most recent access listed first.</p>
		 * Get #Action=GetServiceLastAccessedDetailsWithEntities
		 * @param {string} JobId The ID of the request generated by the <code>GenerateServiceLastAccessedDetails</code> operation.
		 * @param {string} ServiceNamespace <p>The service namespace for an AWS service. Provide the service namespace to learn when the IAM entity last attempted to access the specified service.</p> <p>To learn the service namespace for a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions, Resources, and Condition Keys for AWS Services</a> in the <i>IAM User Guide</i>. Choose the name of the service to view details for that service. In the first paragraph, find the service prefix. For example, <code>(service prefix: a4b)</code>. For more information about service namespaces, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @return {void} Success
		 */
		GET_GetServiceLastAccessedDetailsWithEntities(JobId: string, ServiceNamespace: string, MaxItems: number | null | undefined, Marker: string | null | undefined, Action: GET_GetServiceLastAccessedDetailsWithEntitiesAction, Version: GET_GetServiceLastAccessedDetailsWithEntitiesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetServiceLastAccessedDetailsWithEntities?JobId=' + (JobId == null ? '' : encodeURIComponent(JobId)) + '&ServiceNamespace=' + (ServiceNamespace == null ? '' : encodeURIComponent(ServiceNamespace)) + '&MaxItems=' + MaxItems + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the status of your service-linked role deletion. After you use the <a>DeleteServiceLinkedRole</a> API operation to submit a service-linked role for deletion, you can use the <code>DeletionTaskId</code> parameter in <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion. If the deletion fails, this operation returns the reason that it failed, if that information is returned by the service.
		 * Get #Action=GetServiceLinkedRoleDeletionStatus
		 * @param {string} DeletionTaskId The deletion task identifier. This identifier is returned by the <a>DeleteServiceLinkedRole</a> operation in the format <code>task/aws-service-role/&lt;service-principal-name&gt;/&lt;role-name&gt;/&lt;task-uuid&gt;</code>.
		 * @return {void} Success
		 */
		GET_GetServiceLinkedRoleDeletionStatus(DeletionTaskId: string, Action: GET_GetServiceLinkedRoleDeletionStatusAction, Version: GET_GetServiceLinkedRoleDeletionStatusVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetServiceLinkedRoleDeletionStatus?DeletionTaskId=' + (DeletionTaskId == null ? '' : encodeURIComponent(DeletionTaskId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves information about the specified IAM user, including the user's creation date, path, unique ID, and ARN.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID used to sign the request to this API.</p>
		 * Get #Action=GetUser
		 * @param {string} UserName <p>The name of the user to get information about.</p> <p>This parameter is optional. If it is not included, it defaults to the user making the request. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_GetUser(UserName: string | null | undefined, Action: GET_GetUserAction, Version: GET_GetUserVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetUser?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the specified inline policy document that is embedded in the specified IAM user.</p> <note> <p>Policies returned by this API are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM user can also have managed policies attached to it. To retrieve a managed policy document that is attached to a user, use <a>GetPolicy</a> to determine the policy's default version. Then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=GetUserPolicy
		 * @param {string} UserName <p>The name of the user who the policy is associated with.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyName <p>The name of the policy document to get.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_GetUserPolicy(UserName: string, PolicyName: string, Action: GET_GetUserPolicyAction, Version: GET_GetUserPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetUserPolicy?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about the access key IDs associated with the specified IAM user. If there is none, the operation returns an empty list.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the AWS access key ID used to sign the request. This operation works for access keys under the AWS account. Consequently, you can use this operation to manage AWS account root user credentials even if the AWS account has no associated users.</p> <note> <p>To ensure the security of your AWS account, the secret access key is accessible only during key and user creation.</p> </note>
		 * Get #Action=ListAccessKeys
		 * @param {string} UserName <p>The name of the user.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListAccessKeys(UserName: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListAccessKeysAction, Version: GET_ListAccessKeysVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListAccessKeys?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the account alias associated with the AWS account (Note: you can have only one). For information about using an AWS account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an Alias for Your AWS Account ID</a> in the <i>IAM User Guide</i>.
		 * Get #Action=ListAccountAliases
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListAccountAliases(Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListAccountAliasesAction, Version: GET_ListAccountAliasesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListAccountAliases?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all managed policies that are attached to the specified IAM group.</p> <p>An IAM group can also have inline policies embedded with it. To list the inline policies for a group, use the <a>ListGroupPolicies</a> API. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>
		 * Get #Action=ListAttachedGroupPolicies
		 * @param {string} GroupName <p>The name (friendly name, not ARN) of the group to list attached policies for.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PathPrefix <p>The path prefix for filtering the results. This parameter is optional. If it is not included, it defaults to a slash (/), listing all policies.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListAttachedGroupPolicies(GroupName: string, PathPrefix: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListAttachedGroupPoliciesAction, Version: GET_ListAttachedGroupPoliciesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListAttachedGroupPolicies?GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&PathPrefix=' + (PathPrefix == null ? '' : encodeURIComponent(PathPrefix)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all managed policies that are attached to the specified IAM role.</p> <p>An IAM role can also have inline policies embedded with it. To list the inline policies for a role, use the <a>ListRolePolicies</a> API. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified role (or none that match the specified path prefix), the operation returns an empty list.</p>
		 * Get #Action=ListAttachedRolePolicies
		 * @param {string} RoleName <p>The name (friendly name, not ARN) of the role to list attached policies for.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PathPrefix <p>The path prefix for filtering the results. This parameter is optional. If it is not included, it defaults to a slash (/), listing all policies.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListAttachedRolePolicies(RoleName: string, PathPrefix: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListAttachedRolePoliciesAction, Version: GET_ListAttachedRolePoliciesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListAttachedRolePolicies?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&PathPrefix=' + (PathPrefix == null ? '' : encodeURIComponent(PathPrefix)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all managed policies that are attached to the specified IAM user.</p> <p>An IAM user can also have inline policies embedded with it. To list the inline policies for a user, use the <a>ListUserPolicies</a> API. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>
		 * Get #Action=ListAttachedUserPolicies
		 * @param {string} UserName <p>The name (friendly name, not ARN) of the user to list attached policies for.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PathPrefix <p>The path prefix for filtering the results. This parameter is optional. If it is not included, it defaults to a slash (/), listing all policies.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListAttachedUserPolicies(UserName: string, PathPrefix: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListAttachedUserPoliciesAction, Version: GET_ListAttachedUserPoliciesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListAttachedUserPolicies?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&PathPrefix=' + (PathPrefix == null ? '' : encodeURIComponent(PathPrefix)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all IAM users, groups, and roles that the specified managed policy is attached to.</p> <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a particular type of entity (users, groups, or roles). For example, to list only the roles that are attached to the specified policy, set <code>EntityFilter</code> to <code>Role</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
		 * Get #Action=ListEntitiesForPolicy
		 * @param {string} PolicyArn <p>The Amazon Resource Name (ARN) of the IAM policy for which you want the versions.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @param {EntityType} EntityFilter <p>The entity type to use for filtering the results.</p> <p>For example, when <code>EntityFilter</code> is <code>Role</code>, only the roles that are attached to the specified policy are returned. This parameter is optional. If it is not included, all attached entities (users, groups, and roles) are returned. The argument for this parameter must be one of the valid values listed below.</p>
		 * @param {string} PathPrefix <p>The path prefix for filtering the results. This parameter is optional. If it is not included, it defaults to a slash (/), listing all entities.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {PolicyUsageType} PolicyUsageFilter <p>The policy usage method to use for filtering the results.</p> <p>To list only permissions policies, set <code>PolicyUsageFilter</code> to <code>PermissionsPolicy</code>. To list only the policies used to set permissions boundaries, set the value to <code>PermissionsBoundary</code>.</p> <p>This parameter is optional. If it is not included, all policies are returned. </p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListEntitiesForPolicy(PolicyArn: string, EntityFilter: EntityType | null | undefined, PathPrefix: string | null | undefined, PolicyUsageFilter: PolicyUsageType | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListEntitiesForPolicyAction, Version: GET_ListEntitiesForPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListEntitiesForPolicy?PolicyArn=' + (PolicyArn == null ? '' : encodeURIComponent(PolicyArn)) + '&EntityFilter=' + EntityFilter + '&PathPrefix=' + (PathPrefix == null ? '' : encodeURIComponent(PathPrefix)) + '&PolicyUsageFilter=' + PolicyUsageFilter + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the names of the inline policies that are embedded in the specified IAM group.</p> <p>An IAM group can also have managed policies attached to it. To list the managed policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified group, the operation returns an empty list.</p>
		 * Get #Action=ListGroupPolicies
		 * @param {string} GroupName <p>The name of the group to list policies for.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListGroupPolicies(GroupName: string, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListGroupPoliciesAction, Version: GET_ListGroupPoliciesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListGroupPolicies?GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the IAM groups that have the specified path prefix.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
		 * Get #Action=ListGroups
		 * @param {string} PathPrefix <p> The path prefix for filtering the results. For example, the prefix <code>/division_abc/subdivision_xyz/</code> gets all groups whose path starts with <code>/division_abc/subdivision_xyz/</code>.</p> <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing all groups. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListGroups(PathPrefix: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListGroupsAction, Version: GET_ListGroupsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListGroups?PathPrefix=' + (PathPrefix == null ? '' : encodeURIComponent(PathPrefix)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the IAM groups that the specified IAM user belongs to.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
		 * Get #Action=ListGroupsForUser
		 * @param {string} UserName <p>The name of the user to list groups for.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListGroupsForUser(UserName: string, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListGroupsForUserAction, Version: GET_ListGroupsForUserVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListGroupsForUser?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the instance profiles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
		 * Get #Action=ListInstanceProfiles
		 * @param {string} PathPrefix <p> The path prefix for filtering the results. For example, the prefix <code>/application_abc/component_xyz/</code> gets all instance profiles whose path starts with <code>/application_abc/component_xyz/</code>.</p> <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing all instance profiles. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListInstanceProfiles(PathPrefix: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListInstanceProfilesAction, Version: GET_ListInstanceProfilesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListInstanceProfiles?PathPrefix=' + (PathPrefix == null ? '' : encodeURIComponent(PathPrefix)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the instance profiles that have the specified associated IAM role. If there are none, the operation returns an empty list. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
		 * Get #Action=ListInstanceProfilesForRole
		 * @param {string} RoleName <p>The name of the role to list instance profiles for.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListInstanceProfilesForRole(RoleName: string, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListInstanceProfilesForRoleAction, Version: GET_ListInstanceProfilesForRoleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListInstanceProfilesForRole?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the MFA devices for an IAM user. If the request includes a IAM user name, then this operation lists all the MFA devices associated with the specified user. If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID signing the request for this API.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
		 * Get #Action=ListMFADevices
		 * @param {string} UserName <p>The name of the user whose MFA devices you want to list.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListMFADevices(UserName: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListMFADevicesAction, Version: GET_ListMFADevicesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListMFADevices?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about the IAM OpenID Connect (OIDC) provider resource objects defined in the AWS account.
		 * Get #Action=ListOpenIDConnectProviders
		 * @return {void} Success
		 */
		GET_ListOpenIDConnectProviders(Action: GET_ListOpenIDConnectProvidersAction, Version: GET_ListOpenIDConnectProvidersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListOpenIDConnectProviders?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all the managed policies that are available in your AWS account, including your own customer-defined managed policies and all AWS managed policies.</p> <p>You can filter the list of policies that is returned using the optional <code>OnlyAttached</code>, <code>Scope</code>, and <code>PathPrefix</code> parameters. For example, to list only the customer managed policies in your AWS account, set <code>Scope</code> to <code>Local</code>. To list only AWS managed policies, set <code>Scope</code> to <code>AWS</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=ListPolicies
		 * @param {PolicyScopeType} Scope <p>The scope to use for filtering the results.</p> <p>To list only AWS managed policies, set <code>Scope</code> to <code>AWS</code>. To list only the customer managed policies in your AWS account, set <code>Scope</code> to <code>Local</code>.</p> <p>This parameter is optional. If it is not included, or if it is set to <code>All</code>, all policies are returned.</p>
		 * @param {boolean} OnlyAttached <p>A flag to filter the results to only the attached policies.</p> <p>When <code>OnlyAttached</code> is <code>true</code>, the returned list contains only the policies that are attached to an IAM user, group, or role. When <code>OnlyAttached</code> is <code>false</code>, or when the parameter is not included, all policies are returned.</p>
		 * @param {string} PathPrefix The path prefix for filtering the results. This parameter is optional. If it is not included, it defaults to a slash (/), listing all policies. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.
		 * @param {PolicyUsageType} PolicyUsageFilter <p>The policy usage method to use for filtering the results.</p> <p>To list only permissions policies, set <code>PolicyUsageFilter</code> to <code>PermissionsPolicy</code>. To list only the policies used to set permissions boundaries, set the value to <code>PermissionsBoundary</code>.</p> <p>This parameter is optional. If it is not included, all policies are returned. </p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListPolicies(Scope: PolicyScopeType | null | undefined, OnlyAttached: boolean | null | undefined, PathPrefix: string | null | undefined, PolicyUsageFilter: PolicyUsageType | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListPoliciesAction, Version: GET_ListPoliciesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListPolicies?Scope=' + Scope + '&OnlyAttached=' + OnlyAttached + '&PathPrefix=' + (PathPrefix == null ? '' : encodeURIComponent(PathPrefix)) + '&PolicyUsageFilter=' + PolicyUsageFilter + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to access each specified service.</p> <note> <p>This operation does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, AWS Organizations policies, IAM permissions boundaries, and AWS STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating Policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>The list of policies returned by the operation depends on the ARN of the identity that you provide.</p> <ul> <li> <p> <b>User</b> – The list of policies includes the managed and inline policies that are attached to the user directly. The list also includes any additional managed and inline policies that are attached to the group to which the user belongs. </p> </li> <li> <p> <b>Group</b> – The list of policies includes only the managed and inline policies that are attached to the group directly. Policies that are attached to the group’s user are not included.</p> </li> <li> <p> <b>Role</b> – The list of policies includes only the managed and inline policies that are attached to the role.</p> </li> </ul> <p>For each managed policy, this operation returns the ARN and policy name. For each inline policy, it returns the policy name and the entity to which it is attached. Inline policies do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>Policies that are attached to users and roles as permissions boundaries are not returned. To view which managed policy is currently used to set the permissions boundary for a user or role, use the <a>GetUser</a> or <a>GetRole</a> operations.</p>
		 * Get #Action=ListPoliciesGrantingServiceAccess
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {string} Arn The ARN of the IAM identity (user, group, or role) whose policies you want to list.
		 * @param {Array<string>} ServiceNamespaces <p>The service namespace for the AWS services whose policies you want to list.</p> <p>To learn the service namespace for a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions, Resources, and Condition Keys for AWS Services</a> in the <i>IAM User Guide</i>. Choose the name of the service to view details for that service. In the first paragraph, find the service prefix. For example, <code>(service prefix: a4b)</code>. For more information about service namespaces, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @return {void} Success
		 */
		GET_ListPoliciesGrantingServiceAccess(Marker: string | null | undefined, Arn: string, ServiceNamespaces: Array<string>, Action: GET_ListPoliciesGrantingServiceAccessAction, Version: GET_ListPoliciesGrantingServiceAccessVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListPoliciesGrantingServiceAccess?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Arn=' + (Arn == null ? '' : encodeURIComponent(Arn)) + '&' + ServiceNamespaces.map(z => `ServiceNamespaces=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists information about the versions of the specified managed policy, including the version that is currently set as the policy's default version.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=ListPolicyVersions
		 * @param {string} PolicyArn <p>The Amazon Resource Name (ARN) of the IAM policy for which you want the versions.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListPolicyVersions(PolicyArn: string, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListPolicyVersionsAction, Version: GET_ListPolicyVersionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListPolicyVersions?PolicyArn=' + (PolicyArn == null ? '' : encodeURIComponent(PolicyArn)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the names of the inline policies that are embedded in the specified IAM role.</p> <p>An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use <a>ListAttachedRolePolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified role, the operation returns an empty list.</p>
		 * Get #Action=ListRolePolicies
		 * @param {string} RoleName <p>The name of the role to list policies for.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListRolePolicies(RoleName: string, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListRolePoliciesAction, Version: GET_ListRolePoliciesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListRolePolicies?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the tags that are attached to the specified role. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.
		 * Get #Action=ListRoleTags
		 * @param {string} RoleName <p>The name of the IAM role for which you want to see the list of tags.</p> <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>(Optional) Use this only when paginating results to indicate the maximum number of items that you want in the response. If additional items exist beyond the maximum that you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when more results are available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListRoleTags(RoleName: string, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListRoleTagsAction, Version: GET_ListRoleTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListRoleTags?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the IAM roles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with Roles</a>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
		 * Get #Action=ListRoles
		 * @param {string} PathPrefix <p> The path prefix for filtering the results. For example, the prefix <code>/application_abc/component_xyz/</code> gets all roles whose path starts with <code>/application_abc/component_xyz/</code>.</p> <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing all roles. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListRoles(PathPrefix: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListRolesAction, Version: GET_ListRolesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListRoles?PathPrefix=' + (PathPrefix == null ? '' : encodeURIComponent(PathPrefix)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the SAML provider resource objects defined in IAM in the account.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
		 * Get #Action=ListSAMLProviders
		 * @return {void} Success
		 */
		GET_ListSAMLProviders(Action: GET_ListSAMLProvidersAction, Version: GET_ListSAMLProvidersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListSAMLProviders?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about the SSH public keys associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>The SSH public keys returned by this operation are used only for authenticating the IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH Connections</a> in the <i>AWS CodeCommit User Guide</i>.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
		 * Get #Action=ListSSHPublicKeys
		 * @param {string} UserName <p>The name of the IAM user to list SSH public keys for. If none is specified, the <code>UserName</code> field is determined implicitly based on the AWS access key used to sign the request.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListSSHPublicKeys(UserName: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListSSHPublicKeysAction, Version: GET_ListSSHPublicKeysVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListSSHPublicKeys?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the operation returns an empty list.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with Server Certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of AWS services that can use the server certificates that you manage with IAM.</p>
		 * Get #Action=ListServerCertificates
		 * @param {string} PathPrefix <p> The path prefix for filtering the results. For example: <code>/company/servercerts</code> would get all server certificates for which the path starts with <code>/company/servercerts</code>.</p> <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing all server certificates. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListServerCertificates(PathPrefix: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListServerCertificatesAction, Version: GET_ListServerCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListServerCertificates?PathPrefix=' + (PathPrefix == null ? '' : encodeURIComponent(PathPrefix)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about the service-specific credentials associated with the specified IAM user. If none exists, the operation returns an empty list. The service-specific credentials returned by this operation are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an AWS service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set Up service-specific credentials</a> in the AWS CodeCommit User Guide.
		 * Get #Action=ListServiceSpecificCredentials
		 * @param {string} UserName <p>The name of the user whose service-specific credentials you want information about. If this value is not specified, then the operation assumes the user whose credentials are used to call the operation.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} ServiceName Filters the returned results to only those for the specified AWS service. If not specified, then AWS returns service-specific credentials for all services.
		 * @return {void} Success
		 */
		GET_ListServiceSpecificCredentials(UserName: string | null | undefined, ServiceName: string | null | undefined, Action: GET_ListServiceSpecificCredentialsAction, Version: GET_ListServiceSpecificCredentialsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListServiceSpecificCredentials?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&ServiceName=' + (ServiceName == null ? '' : encodeURIComponent(ServiceName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about the signing certificates associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>Although each user is limited to a small number of signing certificates, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the AWS access key ID used to sign the request for this API. This operation works for access keys under the AWS account. Consequently, you can use this operation to manage AWS account root user credentials even if the AWS account has no associated users.</p>
		 * Get #Action=ListSigningCertificates
		 * @param {string} UserName <p>The name of the IAM user whose signing certificates you want to examine.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListSigningCertificates(UserName: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListSigningCertificatesAction, Version: GET_ListSigningCertificatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListSigningCertificates?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the names of the inline policies embedded in the specified IAM user.</p> <p>An IAM user can also have managed policies attached to it. To list the managed policies that are attached to a user, use <a>ListAttachedUserPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified user, the operation returns an empty list.</p>
		 * Get #Action=ListUserPolicies
		 * @param {string} UserName <p>The name of the user to list policies for.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListUserPolicies(UserName: string, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListUserPoliciesAction, Version: GET_ListUserPoliciesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListUserPolicies?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the tags that are attached to the specified user. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.
		 * Get #Action=ListUserTags
		 * @param {string} UserName <p>The name of the IAM user whose tags you want to see.</p> <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>(Optional) Use this only when paginating results to indicate the maximum number of items that you want in the response. If additional items exist beyond the maximum that you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, it defaults to 100. Note that IAM might return fewer results, even when more results are available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListUserTags(UserName: string, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListUserTagsAction, Version: GET_ListUserTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListUserTags?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the IAM users that have the specified path prefix. If no path prefix is specified, the operation returns all users in the AWS account. If there are none, the operation returns an empty list.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
		 * Get #Action=ListUsers
		 * @param {string} PathPrefix <p> The path prefix for filtering the results. For example: <code>/division_abc/subdivision_xyz/</code>, which would get all user names whose path starts with <code>/division_abc/subdivision_xyz/</code>.</p> <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing all user names. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListUsers(PathPrefix: string | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListUsersAction, Version: GET_ListUsersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListUsers?PathPrefix=' + (PathPrefix == null ? '' : encodeURIComponent(PathPrefix)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the virtual MFA devices defined in the AWS account by assignment status. If you do not specify an assignment status, the operation returns a list of all virtual MFA devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or <code>Any</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
		 * Get #Action=ListVirtualMFADevices
		 * @param {AssignmentStatusType} AssignmentStatus  The status (<code>Unassigned</code> or <code>Assigned</code>) of the devices to list. If you do not specify an <code>AssignmentStatus</code>, the operation defaults to <code>Any</code>, which lists both assigned and unassigned virtual MFA devices.,
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @return {void} Success
		 */
		GET_ListVirtualMFADevices(AssignmentStatus: AssignmentStatusType | null | undefined, Marker: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListVirtualMFADevicesAction, Version: GET_ListVirtualMFADevicesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListVirtualMFADevices?AssignmentStatus=' + AssignmentStatus + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds or updates an inline policy document that is embedded in the specified IAM group.</p> <p>A user can also have managed policies attached to it. To attach a managed policy to a group, use <a>AttachGroupPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about limits on the number of inline policies that you can embed in a group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutGroupPolicy</code>. For general information about using the Query API with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the <i>IAM User Guide</i>.</p> </note>
		 * Get #Action=PutGroupPolicy
		 * @param {string} GroupName <p>The name of the group to associate the policy with.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-.</p>
		 * @param {string} PolicyName <p>The name of the policy document.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyDocument <p>The policy document.</p> <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_PutGroupPolicy(GroupName: string, PolicyName: string, PolicyDocument: string, Action: GET_PutGroupPolicyAction, Version: GET_PutGroupPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutGroupPolicy?GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&PolicyDocument=' + (PolicyDocument == null ? '' : encodeURIComponent(PolicyDocument)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds or updates the policy that is specified as the IAM role's permissions boundary. You can use an AWS managed policy or a customer managed policy to set the boundary for a role. Use the boundary to control the maximum permissions that the role can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the role.</p> <p>You cannot set the boundary for a service-linked role. </p> <important> <p>Policies used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON Policy Evaluation Logic</a> in the IAM User Guide. </p> </important>
		 * Get #Action=PutRolePermissionsBoundary
		 * @param {string} RoleName The name (friendly name, not ARN) of the IAM role for which you want to set the permissions boundary.
		 * @param {string} PermissionsBoundary The ARN of the policy that is used to set the permissions boundary for the role.
		 * @return {void} Success
		 */
		GET_PutRolePermissionsBoundary(RoleName: string, PermissionsBoundary: string, Action: GET_PutRolePermissionsBoundaryAction, Version: GET_PutRolePermissionsBoundaryVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutRolePermissionsBoundary?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&PermissionsBoundary=' + (PermissionsBoundary == null ? '' : encodeURIComponent(PermissionsBoundary)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds or updates an inline policy document that is embedded in the specified IAM role.</p> <p>When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using Roles to Delegate Permissions and Federate Identities</a>.</p> <p>A role can also have a managed policy attached to it. To attach a managed policy to a role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about limits on the number of inline policies that you can embed with a role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutRolePolicy</code>. For general information about using the Query API with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the <i>IAM User Guide</i>.</p> </note>
		 * Get #Action=PutRolePolicy
		 * @param {string} RoleName <p>The name of the role to associate the policy with.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyName <p>The name of the policy document.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyDocument <p>The policy document.</p> <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_PutRolePolicy(RoleName: string, PolicyName: string, PolicyDocument: string, Action: GET_PutRolePolicyAction, Version: GET_PutRolePolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutRolePolicy?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&PolicyDocument=' + (PolicyDocument == null ? '' : encodeURIComponent(PolicyDocument)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds or updates the policy that is specified as the IAM user's permissions boundary. You can use an AWS managed policy or a customer managed policy to set the boundary for a user. Use the boundary to control the maximum permissions that the user can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the user.</p> <important> <p>Policies that are used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the user. To learn how the effective permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON Policy Evaluation Logic</a> in the IAM User Guide. </p> </important>
		 * Get #Action=PutUserPermissionsBoundary
		 * @param {string} UserName The name (friendly name, not ARN) of the IAM user for which you want to set the permissions boundary.
		 * @param {string} PermissionsBoundary The ARN of the policy that is used to set the permissions boundary for the user.
		 * @return {void} Success
		 */
		GET_PutUserPermissionsBoundary(UserName: string, PermissionsBoundary: string, Action: GET_PutUserPermissionsBoundaryAction, Version: GET_PutUserPermissionsBoundaryVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutUserPermissionsBoundary?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&PermissionsBoundary=' + (PermissionsBoundary == null ? '' : encodeURIComponent(PermissionsBoundary)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds or updates an inline policy document that is embedded in the specified IAM user.</p> <p>An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use <a>AttachUserPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about limits on the number of inline policies that you can embed in a user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutUserPolicy</code>. For general information about using the Query API with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the <i>IAM User Guide</i>.</p> </note>
		 * Get #Action=PutUserPolicy
		 * @param {string} UserName <p>The name of the user to associate the policy with.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyName <p>The name of the policy document.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyDocument <p>The policy document.</p> <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_PutUserPolicy(UserName: string, PolicyName: string, PolicyDocument: string, Action: GET_PutUserPolicyAction, Version: GET_PutUserPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutUserPolicy?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&PolicyDocument=' + (PolicyDocument == null ? '' : encodeURIComponent(PolicyDocument)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified client ID (also known as audience) from the list of client IDs registered for the specified IAM OpenID Connect (OIDC) provider resource object.</p> <p>This operation is idempotent; it does not fail or return an error if you try to remove a client ID that does not exist.</p>
		 * Get #Action=RemoveClientIDFromOpenIDConnectProvider
		 * @param {string} OpenIDConnectProviderArn <p>The Amazon Resource Name (ARN) of the IAM OIDC provider resource to remove the client ID from. You can get a list of OIDC provider ARNs by using the <a>ListOpenIDConnectProviders</a> operation.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @param {string} ClientID The client ID (also known as audience) to remove from the IAM OIDC provider resource. For more information about client IDs, see <a>CreateOpenIDConnectProvider</a>.
		 * @return {void} Success
		 */
		GET_RemoveClientIDFromOpenIDConnectProvider(OpenIDConnectProviderArn: string, ClientID: string, Action: GET_RemoveClientIDFromOpenIDConnectProviderAction, Version: GET_RemoveClientIDFromOpenIDConnectProviderVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveClientIDFromOpenIDConnectProvider?OpenIDConnectProviderArn=' + (OpenIDConnectProviderArn == null ? '' : encodeURIComponent(OpenIDConnectProviderArn)) + '&ClientID=' + (ClientID == null ? '' : encodeURIComponent(ClientID)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified IAM role from the specified EC2 instance profile.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance.</p> </important> <p> For more information about IAM roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with Roles</a>. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a>.</p>
		 * Get #Action=RemoveRoleFromInstanceProfile
		 * @param {string} InstanceProfileName <p>The name of the instance profile to update.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} RoleName <p>The name of the role to remove.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_RemoveRoleFromInstanceProfile(InstanceProfileName: string, RoleName: string, Action: GET_RemoveRoleFromInstanceProfileAction, Version: GET_RemoveRoleFromInstanceProfileVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveRoleFromInstanceProfile?InstanceProfileName=' + (InstanceProfileName == null ? '' : encodeURIComponent(InstanceProfileName)) + '&RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the specified user from the specified group.
		 * Get #Action=RemoveUserFromGroup
		 * @param {string} GroupName <p>The name of the group to update.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} UserName <p>The name of the user to remove.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_RemoveUserFromGroup(GroupName: string, UserName: string, Action: GET_RemoveUserFromGroupAction, Version: GET_RemoveUserFromGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveUserFromGroup?GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets the password for a service-specific credential. The new password is AWS generated and cryptographically strong. It cannot be configured by the user. Resetting the password immediately invalidates the previous password associated with this user.
		 * Get #Action=ResetServiceSpecificCredential
		 * @param {string} UserName <p>The name of the IAM user associated with the service-specific credential. If this value is not specified, then the operation assumes the user whose credentials are used to call the operation.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} ServiceSpecificCredentialId <p>The unique identifier of the service-specific credential.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
		 * @return {void} Success
		 */
		GET_ResetServiceSpecificCredential(UserName: string | null | undefined, ServiceSpecificCredentialId: string, Action: GET_ResetServiceSpecificCredentialAction, Version: GET_ResetServiceSpecificCredentialVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ResetServiceSpecificCredential?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&ServiceSpecificCredentialId=' + (ServiceSpecificCredentialId == null ? '' : encodeURIComponent(ServiceSpecificCredentialId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Synchronizes the specified MFA device with its IAM resource object on the AWS servers.</p> <p>For more information about creating and working with virtual MFA devices, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a Virtual MFA Device</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=ResyncMFADevice
		 * @param {string} UserName <p>The name of the user whose MFA device you want to resynchronize.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} SerialNumber <p>Serial number that uniquely identifies the MFA device.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} AuthenticationCode1 <p>An authentication code emitted by the device.</p> <p>The format for this parameter is a sequence of six digits.</p>
		 * @param {string} AuthenticationCode2 <p>A subsequent authentication code emitted by the device.</p> <p>The format for this parameter is a sequence of six digits.</p>
		 * @return {void} Success
		 */
		GET_ResyncMFADevice(UserName: string, SerialNumber: string, AuthenticationCode1: string, AuthenticationCode2: string, Action: GET_ResyncMFADeviceAction, Version: GET_ResyncMFADeviceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ResyncMFADevice?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&SerialNumber=' + (SerialNumber == null ? '' : encodeURIComponent(SerialNumber)) + '&AuthenticationCode1=' + (AuthenticationCode1 == null ? '' : encodeURIComponent(AuthenticationCode1)) + '&AuthenticationCode2=' + (AuthenticationCode2 == null ? '' : encodeURIComponent(AuthenticationCode2)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sets the specified version of the specified policy as the policy's default (operative) version.</p> <p>This operation affects all users, groups, and roles that the policy is attached to. To list the users, groups, and roles that the policy is attached to, use the <a>ListEntitiesForPolicy</a> API.</p> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=SetDefaultPolicyVersion
		 * @param {string} PolicyArn <p>The Amazon Resource Name (ARN) of the IAM policy whose default version you want to set.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @param {string} VersionId <p>The version of the policy to set as the default (operative) version.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed Policies</a> in the <i>IAM User Guide</i>.</p>
		 * @return {void} Success
		 */
		GET_SetDefaultPolicyVersion(PolicyArn: string, VersionId: string, Action: GET_SetDefaultPolicyVersionAction, Version: GET_SetDefaultPolicyVersionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetDefaultPolicyVersion?PolicyArn=' + (PolicyArn == null ? '' : encodeURIComponent(PolicyArn)) + '&VersionId=' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sets the specified version of the global endpoint token as the token version used for the AWS account.</p> <p>By default, AWS Security Token Service (STS) is available as a global service, and all STS requests go to a single endpoint at <code>https://sts.amazonaws.com</code>. AWS recommends using Regional STS endpoints to reduce latency, build in redundancy, and increase session token availability. For information about Regional endpoints for STS, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#sts_region">AWS Regions and Endpoints</a> in the <i>AWS General Reference</i>.</p> <p>If you make an STS call to the global endpoint, the resulting session tokens might be valid in some Regions but not others. It depends on the version that is set in this operation. Version 1 tokens are valid only in AWS Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens. For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating STS in an AWS Region</a> in the <i>IAM User Guide</i>.</p> <p>To view the current session token version, see the <code>GlobalEndpointTokenVersion</code> entry in the response of the <a>GetAccountSummary</a> operation.</p>
		 * Get #Action=SetSecurityTokenServicePreferences
		 * @param {GlobalEndpointTokenVersion} GlobalEndpointTokenVersion <p>The version of the global endpoint token. Version 1 tokens are valid only in AWS Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens.</p> <p>For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating STS in an AWS Region</a> in the <i>IAM User Guide</i>.</p>
		 * @return {void} Success
		 */
		GET_SetSecurityTokenServicePreferences(GlobalEndpointTokenVersion: GlobalEndpointTokenVersion, Action: GET_SetSecurityTokenServicePreferencesAction, Version: GET_SetSecurityTokenServicePreferencesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetSecurityTokenServicePreferences?GlobalEndpointTokenVersion=' + GlobalEndpointTokenVersion + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Simulate how a set of IAM policies and optionally a resource-based policy works with a list of API operations and AWS resources to determine the policies' effective permissions. The policies are provided as strings.</p> <p>The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations.</p> <p>If you want to simulate existing policies that are attached to an IAM user, group, or role, use <a>SimulatePrincipalPolicy</a> instead.</p> <p>Context keys are variables that are maintained by AWS and its services and which provide details about the context of an API query request. You can use the <code>Condition</code> element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForCustomPolicy</a>.</p> <p>If the output is long, you can use <code>MaxItems</code> and <code>Marker</code> parameters to paginate the results.</p>
		 * Get #Action=SimulateCustomPolicy
		 * @param {Array<string>} PolicyInputList <p>A list of policy documents to include in the simulation. Each document is specified as a string containing the complete, valid JSON text of an IAM policy. Do not include any resource-based policies in this parameter. Any resource-based policy must be submitted with the <code>ResourcePolicy</code> parameter. The policies cannot be "scope-down" policies, such as you could include in a call to <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetFederationToken.html">GetFederationToken</a> or one of the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_AssumeRole.html">AssumeRole</a> API operations. In other words, do not use policies designed to restrict what a user can do while using the temporary credentials.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @param {Array<string>} PermissionsBoundaryPolicyInputList <p>The IAM permissions boundary policy to simulate. The permissions boundary sets the maximum permissions that an IAM entity can have. You can input only one permissions boundary when you pass a policy to this operation. For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Entities</a> in the <i>IAM User Guide</i>. The policy input is specified as a string that contains the complete, valid JSON text of a permissions boundary policy.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @param {Array<string>} ActionNames A list of names of API operations to evaluate in the simulation. Each operation is evaluated against each resource. Each operation must include the service identifier, such as <code>iam:CreateUser</code>. This operation does not support using wildcards (*) in an action name.
		 * @param {Array<string>} ResourceArns <p>A list of ARNs of AWS resources to include in the simulation. If this parameter is not provided, then the value defaults to <code>*</code> (all resources). Each API in the <code>ActionNames</code> parameter is evaluated for each resource in this list. The simulation determines the access result (allowed or denied) of each combination and reports it in the response.</p> <p>The simulation does not automatically retrieve policies for the specified resources. If you want to include a resource policy in the simulation, then you must include the policy as a string in the <code>ResourcePolicy</code> parameter.</p> <p>If you include a <code>ResourcePolicy</code>, then it must be applicable to all of the resources included in the simulation or you receive an invalid input error.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @param {string} ResourcePolicy <p>A resource-based policy to include in the simulation provided as a string. Each resource in the simulation is treated as if it had this policy attached. You can include only one resource-based policy in a simulation.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @param {string} ResourceOwner <p>An ARN representing the AWS account ID that specifies the owner of any simulated resource that does not identify its owner in the resource ARN. Examples of resource ARNs include an S3 bucket or object. If <code>ResourceOwner</code> is specified, it is also used as the account owner of any <code>ResourcePolicy</code> included in the simulation. If the <code>ResourceOwner</code> parameter is not specified, then the owner of the resources and the resource policy defaults to the account of the identity provided in <code>CallerArn</code>. This parameter is required only if you specify a resource-based policy and account that owns the resource is different from the account that owns the simulated calling user <code>CallerArn</code>.</p> <p>The ARN for an account uses the following syntax: <code>arn:aws:iam::<i>AWS-account-ID</i>:root</code>. For example, to represent the account with the 112233445566 ID, use the following ARN: <code>arn:aws:iam::112233445566-ID:root</code>. </p>
		 * @param {string} CallerArn <p>The ARN of the IAM user that you want to use as the simulated caller of the API operations. <code>CallerArn</code> is required if you include a <code>ResourcePolicy</code> so that the policy's <code>Principal</code> element has a value to use in evaluating the policy.</p> <p>You can specify only the ARN of an IAM user. You cannot specify the ARN of an assumed role, federated user, or a service principal.</p>
		 * @param {Array<ContextEntry>} ContextEntries A list of context keys and corresponding values for the simulation to use. Whenever a context key is evaluated in one of the simulated IAM permissions policies, the corresponding value is supplied.
		 * @param {string} ResourceHandlingOption <p>Specifies the type of simulation to run. Different API operations that support resource-based policies require different combinations of resources. By specifying the type of simulation to run, you enable the policy simulator to enforce the presence of the required resources to ensure reliable simulation results. If your simulation does not match one of the following scenarios, then you can omit this parameter. The following list shows each of the supported scenario values and the resources that you must define to run the simulation.</p> <p>Each of the EC2 scenarios requires that you specify instance, image, and security-group resources. If your scenario includes an EBS volume, then you must specify that volume as a resource. If the EC2 scenario includes VPC, then you must supply the network-interface resource. If it includes an IP subnet, then you must specify the subnet resource. For more information on the EC2 scenario options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html">Supported Platforms</a> in the <i>Amazon EC2 User Guide</i>.</p> <ul> <li> <p> <b>EC2-Classic-InstanceStore</b> </p> <p>instance, image, security-group</p> </li> <li> <p> <b>EC2-Classic-EBS</b> </p> <p>instance, image, security-group, volume</p> </li> <li> <p> <b>EC2-VPC-InstanceStore</b> </p> <p>instance, image, security-group, network-interface</p> </li> <li> <p> <b>EC2-VPC-InstanceStore-Subnet</b> </p> <p>instance, image, security-group, network-interface, subnet</p> </li> <li> <p> <b>EC2-VPC-EBS</b> </p> <p>instance, image, security-group, network-interface, volume</p> </li> <li> <p> <b>EC2-VPC-EBS-Subnet</b> </p> <p>instance, image, security-group, network-interface, subnet, volume</p> </li> </ul>
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @return {void} Success
		 */
		GET_SimulateCustomPolicy(PolicyInputList: Array<string>, PermissionsBoundaryPolicyInputList: Array<string> | null | undefined, ActionNames: Array<string>, ResourceArns: Array<string> | null | undefined, ResourcePolicy: string | null | undefined, ResourceOwner: string | null | undefined, CallerArn: string | null | undefined, ContextEntries: Array<ContextEntry> | null | undefined, ResourceHandlingOption: string | null | undefined, MaxItems: number | null | undefined, Marker: string | null | undefined, Action: GET_SimulateCustomPolicyAction, Version: GET_SimulateCustomPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SimulateCustomPolicy?' + PolicyInputList.map(z => `PolicyInputList=${encodeURIComponent(z)}`).join('&') + '&' + PermissionsBoundaryPolicyInputList?.map(z => `PermissionsBoundaryPolicyInputList=${encodeURIComponent(z)}`).join('&') + '&' + ActionNames.map(z => `ActionNames=${encodeURIComponent(z)}`).join('&') + '&' + ResourceArns?.map(z => `ResourceArns=${encodeURIComponent(z)}`).join('&') + '&ResourcePolicy=' + (ResourcePolicy == null ? '' : encodeURIComponent(ResourcePolicy)) + '&ResourceOwner=' + (ResourceOwner == null ? '' : encodeURIComponent(ResourceOwner)) + '&CallerArn=' + (CallerArn == null ? '' : encodeURIComponent(CallerArn)) + '&' + ContextEntries?.map(z => `ContextEntries=${z}`).join('&') + '&ResourceHandlingOption=' + (ResourceHandlingOption == null ? '' : encodeURIComponent(ResourceHandlingOption)) + '&MaxItems=' + MaxItems + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Simulate how a set of IAM policies attached to an IAM entity works with a list of API operations and AWS resources to determine the policies' effective permissions. The entity can be an IAM user, group, or role. If you specify a user, then the simulation also includes all of the policies that are attached to groups that the user belongs to.</p> <p>You can optionally include a list of one or more additional policies specified as strings to include in the simulation. If you want to simulate only policies specified as strings, use <a>SimulateCustomPolicy</a> instead.</p> <p>You can also optionally include one resource-based policy to be evaluated with each of the resources included in the simulation.</p> <p>The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations.</p> <p> <b>Note:</b> This API discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>SimulateCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by AWS and its services that provide details about the context of an API query request. You can use the <code>Condition</code> element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>If the output is long, you can use the <code>MaxItems</code> and <code>Marker</code> parameters to paginate the results.</p>
		 * Get #Action=SimulatePrincipalPolicy
		 * @param {string} PolicySourceArn <p>The Amazon Resource Name (ARN) of a user, group, or role whose policies you want to include in the simulation. If you specify a user, group, or role, the simulation includes all policies that are associated with that entity. If you specify a user, the simulation also includes all policies that are attached to any groups the user belongs to.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @param {Array<string>} PolicyInputList <p>An optional list of additional policy documents to include in the simulation. Each document is specified as a string containing the complete, valid JSON text of an IAM policy.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @param {Array<string>} PermissionsBoundaryPolicyInputList <p>The IAM permissions boundary policy to simulate. The permissions boundary sets the maximum permissions that the entity can have. You can input only one permissions boundary when you pass a policy to this operation. An IAM entity can only have one permissions boundary in effect at a time. For example, if a permissions boundary is attached to an entity and you pass in a different permissions boundary policy using this parameter, then the new permissions boundary policy is used for the simulation. For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Entities</a> in the <i>IAM User Guide</i>. The policy input is specified as a string containing the complete, valid JSON text of a permissions boundary policy.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @param {Array<string>} ActionNames A list of names of API operations to evaluate in the simulation. Each operation is evaluated for each resource. Each operation must include the service identifier, such as <code>iam:CreateUser</code>.
		 * @param {Array<string>} ResourceArns <p>A list of ARNs of AWS resources to include in the simulation. If this parameter is not provided, then the value defaults to <code>*</code> (all resources). Each API in the <code>ActionNames</code> parameter is evaluated for each resource in this list. The simulation determines the access result (allowed or denied) of each combination and reports it in the response.</p> <p>The simulation does not automatically retrieve policies for the specified resources. If you want to include a resource policy in the simulation, then you must include the policy as a string in the <code>ResourcePolicy</code> parameter.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @param {string} ResourcePolicy <p>A resource-based policy to include in the simulation provided as a string. Each resource in the simulation is treated as if it had this policy attached. You can include only one resource-based policy in a simulation.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @param {string} ResourceOwner An AWS account ID that specifies the owner of any simulated resource that does not identify its owner in the resource ARN. Examples of resource ARNs include an S3 bucket or object. If <code>ResourceOwner</code> is specified, it is also used as the account owner of any <code>ResourcePolicy</code> included in the simulation. If the <code>ResourceOwner</code> parameter is not specified, then the owner of the resources and the resource policy defaults to the account of the identity provided in <code>CallerArn</code>. This parameter is required only if you specify a resource-based policy and account that owns the resource is different from the account that owns the simulated calling user <code>CallerArn</code>.
		 * @param {string} CallerArn <p>The ARN of the IAM user that you want to specify as the simulated caller of the API operations. If you do not specify a <code>CallerArn</code>, it defaults to the ARN of the user that you specify in <code>PolicySourceArn</code>, if you specified a user. If you include both a <code>PolicySourceArn</code> (for example, <code>arn:aws:iam::123456789012:user/David</code>) and a <code>CallerArn</code> (for example, <code>arn:aws:iam::123456789012:user/Bob</code>), the result is that you simulate calling the API operations as Bob, as if Bob had David's policies.</p> <p>You can specify only the ARN of an IAM user. You cannot specify the ARN of an assumed role, federated user, or a service principal.</p> <p> <code>CallerArn</code> is required if you include a <code>ResourcePolicy</code> and the <code>PolicySourceArn</code> is not the ARN for an IAM user. This is required so that the resource-based policy's <code>Principal</code> element has a value to use in evaluating the policy.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @param {Array<ContextEntry>} ContextEntries A list of context keys and corresponding values for the simulation to use. Whenever a context key is evaluated in one of the simulated IAM permissions policies, the corresponding value is supplied.
		 * @param {string} ResourceHandlingOption <p>Specifies the type of simulation to run. Different API operations that support resource-based policies require different combinations of resources. By specifying the type of simulation to run, you enable the policy simulator to enforce the presence of the required resources to ensure reliable simulation results. If your simulation does not match one of the following scenarios, then you can omit this parameter. The following list shows each of the supported scenario values and the resources that you must define to run the simulation.</p> <p>Each of the EC2 scenarios requires that you specify instance, image, and security group resources. If your scenario includes an EBS volume, then you must specify that volume as a resource. If the EC2 scenario includes VPC, then you must supply the network interface resource. If it includes an IP subnet, then you must specify the subnet resource. For more information on the EC2 scenario options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-platforms.html">Supported Platforms</a> in the <i>Amazon EC2 User Guide</i>.</p> <ul> <li> <p> <b>EC2-Classic-InstanceStore</b> </p> <p>instance, image, security group</p> </li> <li> <p> <b>EC2-Classic-EBS</b> </p> <p>instance, image, security group, volume</p> </li> <li> <p> <b>EC2-VPC-InstanceStore</b> </p> <p>instance, image, security group, network interface</p> </li> <li> <p> <b>EC2-VPC-InstanceStore-Subnet</b> </p> <p>instance, image, security group, network interface, subnet</p> </li> <li> <p> <b>EC2-VPC-EBS</b> </p> <p>instance, image, security group, network interface, volume</p> </li> <li> <p> <b>EC2-VPC-EBS-Subnet</b> </p> <p>instance, image, security group, network interface, subnet, volume</p> </li> </ul>
		 * @param {number} MaxItems <p>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p> <p>If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code> contains a value to include in the subsequent call that tells the service where to continue from.</p>
		 * @param {string} Marker Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
		 * @return {void} Success
		 */
		GET_SimulatePrincipalPolicy(PolicySourceArn: string, PolicyInputList: Array<string> | null | undefined, PermissionsBoundaryPolicyInputList: Array<string> | null | undefined, ActionNames: Array<string>, ResourceArns: Array<string> | null | undefined, ResourcePolicy: string | null | undefined, ResourceOwner: string | null | undefined, CallerArn: string | null | undefined, ContextEntries: Array<ContextEntry> | null | undefined, ResourceHandlingOption: string | null | undefined, MaxItems: number | null | undefined, Marker: string | null | undefined, Action: GET_SimulatePrincipalPolicyAction, Version: GET_SimulatePrincipalPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SimulatePrincipalPolicy?PolicySourceArn=' + (PolicySourceArn == null ? '' : encodeURIComponent(PolicySourceArn)) + '&' + PolicyInputList?.map(z => `PolicyInputList=${encodeURIComponent(z)}`).join('&') + '&' + PermissionsBoundaryPolicyInputList?.map(z => `PermissionsBoundaryPolicyInputList=${encodeURIComponent(z)}`).join('&') + '&' + ActionNames.map(z => `ActionNames=${encodeURIComponent(z)}`).join('&') + '&' + ResourceArns?.map(z => `ResourceArns=${encodeURIComponent(z)}`).join('&') + '&ResourcePolicy=' + (ResourcePolicy == null ? '' : encodeURIComponent(ResourcePolicy)) + '&ResourceOwner=' + (ResourceOwner == null ? '' : encodeURIComponent(ResourceOwner)) + '&CallerArn=' + (CallerArn == null ? '' : encodeURIComponent(CallerArn)) + '&' + ContextEntries?.map(z => `ContextEntries=${z}`).join('&') + '&ResourceHandlingOption=' + (ResourceHandlingOption == null ? '' : encodeURIComponent(ResourceHandlingOption)) + '&MaxItems=' + MaxItems + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds one or more tags to an IAM role. The role can be a regular role or a service-linked role. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Reference tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM user or role that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control Access Using IAM Tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which AWS resources.</p> </li> </ul> <note> <ul> <li> <p>Make sure that you have no invalid tags and that you do not exceed the allowed number of tags per role. In either case, the entire request fails and <i>no</i> tags are added to the role.</p> </li> <li> <p>AWS always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=TagRole
		 * @param {string} RoleName <p>The name of the role that you want to add tags to.</p> <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {Array<Tag>} Tags The list of tags that you want to attach to the role. Each tag consists of a key name and an associated value. You can specify this with a JSON string.
		 * @return {void} Success
		 */
		GET_TagRole(RoleName: string, Tags: Array<Tag>, Action: GET_TagRoleAction, Version: GET_TagRoleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=TagRole?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds one or more tags to an IAM user. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Reference tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM requesting user or to a role that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control Access Using IAM Tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which AWS resources.</p> </li> </ul> <note> <ul> <li> <p>Make sure that you have no invalid tags and that you do not exceed the allowed number of tags per role. In either case, the entire request fails and <i>no</i> tags are added to the role.</p> </li> <li> <p>AWS always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=TagUser
		 * @param {string} UserName <p>The name of the user that you want to add tags to.</p> <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-</p>
		 * @param {Array<Tag>} Tags The list of tags that you want to attach to the user. Each tag consists of a key name and an associated value.
		 * @return {void} Success
		 */
		GET_TagUser(UserName: string, Tags: Array<Tag>, Action: GET_TagUserAction, Version: GET_TagUserVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=TagUser?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the specified tags from the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.
		 * Get #Action=UntagRole
		 * @param {string} RoleName <p>The name of the IAM role from which you want to remove tags.</p> <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {Array<string>} TagKeys A list of key names as a simple array of strings. The tags with matching keys are removed from the specified role.
		 * @return {void} Success
		 */
		GET_UntagRole(RoleName: string, TagKeys: Array<string>, Action: GET_UntagRoleAction, Version: GET_UntagRoleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UntagRole?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the specified tags from the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.
		 * Get #Action=UntagUser
		 * @param {string} UserName <p>The name of the IAM user from which you want to remove tags.</p> <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@-</p>
		 * @param {Array<string>} TagKeys A list of key names as a simple array of strings. The tags with matching keys are removed from the specified user.
		 * @return {void} Success
		 */
		GET_UntagUser(UserName: string, TagKeys: Array<string>, Action: GET_UntagUserAction, Version: GET_UntagUserVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UntagUser?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Changes the status of the specified access key from Active to Inactive, or vice versa. This operation can be used to disable a user's key as part of a key rotation workflow.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the AWS access key ID used to sign the request. This operation works for access keys under the AWS account. Consequently, you can use this operation to manage AWS account root user credentials even if the AWS account has no associated users.</p> <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing Keys and Certificates</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=UpdateAccessKey
		 * @param {string} UserName <p>The name of the user whose key you want to update.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} AccessKeyId <p>The access key ID of the secret access key you want to update.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
		 * @param {AccessKeyStatus} Status  The status you want to assign to the secret access key. <code>Active</code> means that the key can be used for API calls to AWS, while <code>Inactive</code> means that the key cannot be used.
		 * @return {void} Success
		 */
		GET_UpdateAccessKey(UserName: string | null | undefined, AccessKeyId: string, Status: AccessKeyStatus, Action: GET_UpdateAccessKeyAction, Version: GET_UpdateAccessKeyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateAccessKey?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&AccessKeyId=' + (AccessKeyId == null ? '' : encodeURIComponent(AccessKeyId)) + '&Status=' + Status + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the password policy settings for the AWS account.</p> <note> <ul> <li> <p>This operation does not support partial updates. No parameters are required, but if you do not specify a parameter, that parameter's value reverts to its default value. See the <b>Request Parameters</b> section for each parameter's default value. Also note that some parameters do not allow the default parameter to be explicitly set. Instead, to invoke the default value, do not include that parameter when you invoke the operation.</p> </li> </ul> </note> <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM Password Policy</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=UpdateAccountPasswordPolicy
		 * @param {number} MinimumPasswordLength <p>The minimum number of characters allowed in an IAM user password.</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>6</code>.</p>
		 * @param {boolean} RequireSymbols <p>Specifies whether IAM user passwords must contain at least one of the following non-alphanumeric characters:</p> <p>! @ # $ % ^ &amp; * ( ) _ + - = [ ] { } | '</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>false</code>. The result is that passwords do not require at least one symbol character.</p>
		 * @param {boolean} RequireNumbers <p>Specifies whether IAM user passwords must contain at least one numeric character (0 to 9).</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>false</code>. The result is that passwords do not require at least one numeric character.</p>
		 * @param {boolean} RequireUppercaseCharacters <p>Specifies whether IAM user passwords must contain at least one uppercase character from the ISO basic Latin alphabet (A to Z).</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>false</code>. The result is that passwords do not require at least one uppercase character.</p>
		 * @param {boolean} RequireLowercaseCharacters <p>Specifies whether IAM user passwords must contain at least one lowercase character from the ISO basic Latin alphabet (a to z).</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>false</code>. The result is that passwords do not require at least one lowercase character.</p>
		 * @param {boolean} AllowUsersToChangePassword <p> Allows all IAM users in your account to use the AWS Management Console to change their own passwords. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/HowToPwdIAMUser.html">Letting IAM Users Change Their Own Passwords</a> in the <i>IAM User Guide</i>.</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>false</code>. The result is that IAM users in the account do not automatically have permissions to change their own password.</p>
		 * @param {number} MaxPasswordAge <p>The number of days that an IAM user password is valid.</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>0</code>. The result is that IAM user passwords never expire.</p>
		 * @param {number} PasswordReusePrevention <p>Specifies the number of previous passwords that IAM users are prevented from reusing.</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>0</code>. The result is that IAM users are not prevented from reusing previous passwords.</p>
		 * @param {boolean} HardExpiry <p>Prevents IAM users from setting a new password after their password has expired. The IAM user cannot be accessed until an administrator resets the password.</p> <p>If you do not specify a value for this parameter, then the operation uses the default value of <code>false</code>. The result is that IAM users can change their passwords after they expire and continue to sign in as the user.</p>
		 * @return {void} Success
		 */
		GET_UpdateAccountPasswordPolicy(MinimumPasswordLength: number | null | undefined, RequireSymbols: boolean | null | undefined, RequireNumbers: boolean | null | undefined, RequireUppercaseCharacters: boolean | null | undefined, RequireLowercaseCharacters: boolean | null | undefined, AllowUsersToChangePassword: boolean | null | undefined, MaxPasswordAge: number | null | undefined, PasswordReusePrevention: number | null | undefined, HardExpiry: boolean | null | undefined, Action: GET_UpdateAccountPasswordPolicyAction, Version: GET_UpdateAccountPasswordPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateAccountPasswordPolicy?MinimumPasswordLength=' + MinimumPasswordLength + '&RequireSymbols=' + RequireSymbols + '&RequireNumbers=' + RequireNumbers + '&RequireUppercaseCharacters=' + RequireUppercaseCharacters + '&RequireLowercaseCharacters=' + RequireLowercaseCharacters + '&AllowUsersToChangePassword=' + AllowUsersToChangePassword + '&MaxPasswordAge=' + MaxPasswordAge + '&PasswordReusePrevention=' + PasswordReusePrevention + '&HardExpiry=' + HardExpiry + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using Roles to Delegate Permissions and Federate Identities</a>.
		 * Get #Action=UpdateAssumeRolePolicy
		 * @param {string} RoleName <p>The name of the role to update with the new policy.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} PolicyDocument <p>The policy that grants an entity permission to assume the role.</p> <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_UpdateAssumeRolePolicy(RoleName: string, PolicyDocument: string, Action: GET_UpdateAssumeRolePolicyAction, Version: GET_UpdateAssumeRolePolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateAssumeRolePolicy?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&PolicyDocument=' + (PolicyDocument == null ? '' : encodeURIComponent(PolicyDocument)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the name and/or the path of the specified IAM group.</p> <important> <p> You should understand the implications of changing a group's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming Users and Groups</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the role group with the old name and the new name. For example, to change the group named <code>Managers</code> to <code>MGRs</code>, the principal must have a policy that allows them to update both groups. If the principal has permission to update the <code>Managers</code> group, but not the <code>MGRs</code> group, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a>. </p> </note>
		 * Get #Action=UpdateGroup
		 * @param {string} GroupName <p>Name of the IAM group to update. If you're changing the name of the group, this is the original name.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} NewPath <p>New path for the IAM group. Only include this if changing the group's path.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {string} NewGroupName <p>New name for the IAM group. Only include this if changing the group's name.</p> <p>IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both "MyResource" and "myresource".</p>
		 * @return {void} Success
		 */
		GET_UpdateGroup(GroupName: string, NewPath: string | null | undefined, NewGroupName: string | null | undefined, Action: GET_UpdateGroupAction, Version: GET_UpdateGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateGroup?GroupName=' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '&NewPath=' + (NewPath == null ? '' : encodeURIComponent(NewPath)) + '&NewGroupName=' + (NewGroupName == null ? '' : encodeURIComponent(NewGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Changes the password for the specified IAM user.</p> <p>IAM users can change their own passwords by calling <a>ChangePassword</a>. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing Passwords</a> in the <i>IAM User Guide</i>.</p>
		 * Get #Action=UpdateLoginProfile
		 * @param {string} UserName <p>The name of the user whose password you want to update.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} Password <p>The new password for the specified IAM user.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul> <p>However, the format can be further restricted by the account administrator by setting a password policy on the AWS account. For more information, see <a>UpdateAccountPasswordPolicy</a>.</p>
		 * @param {boolean} PasswordResetRequired Allows this new password to be used only once by requiring the specified IAM user to set a new password on next sign-in.
		 * @return {void} Success
		 */
		GET_UpdateLoginProfile(UserName: string, Password: string | null | undefined, PasswordResetRequired: boolean | null | undefined, Action: GET_UpdateLoginProfileAction, Version: GET_UpdateLoginProfileVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateLoginProfile?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&Password=' + (Password == null ? '' : encodeURIComponent(Password)) + '&PasswordResetRequired=' + PasswordResetRequired + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Replaces the existing list of server certificate thumbprints associated with an OpenID Connect (OIDC) provider resource object with a new list of thumbprints.</p> <p>The list that you pass with this operation completely replaces the existing list of thumbprints. (The lists are not merged.)</p> <p>Typically, you need to update a thumbprint only when the identity provider's certificate changes, which occurs rarely. However, if the provider's certificate <i>does</i> change, any attempt to assume an IAM role that specifies the OIDC provider as a principal fails until the certificate thumbprint is updated.</p> <note> <p>Trust for the OIDC provider is derived from the provider's certificate and is validated by the thumbprint. Therefore, it is best to limit access to the <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly privileged users.</p> </note>
		 * Get #Action=UpdateOpenIDConnectProviderThumbprint
		 * @param {string} OpenIDConnectProviderArn <p>The Amazon Resource Name (ARN) of the IAM OIDC provider resource object for which you want to update the thumbprint. You can get a list of OIDC provider ARNs by using the <a>ListOpenIDConnectProviders</a> operation.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @param {Array<string>} ThumbprintList A list of certificate thumbprints that are associated with the specified IAM OpenID Connect provider. For more information, see <a>CreateOpenIDConnectProvider</a>. 
		 * @return {void} Success
		 */
		GET_UpdateOpenIDConnectProviderThumbprint(OpenIDConnectProviderArn: string, ThumbprintList: Array<string>, Action: GET_UpdateOpenIDConnectProviderThumbprintAction, Version: GET_UpdateOpenIDConnectProviderThumbprintVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateOpenIDConnectProviderThumbprint?OpenIDConnectProviderArn=' + (OpenIDConnectProviderArn == null ? '' : encodeURIComponent(OpenIDConnectProviderArn)) + '&' + ThumbprintList.map(z => `ThumbprintList=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the description or maximum session duration setting of a role.
		 * Get #Action=UpdateRole
		 * @param {string} RoleName The name of the role that you want to modify.
		 * @param {string} Description The new description that you want to apply to the specified role.
		 * @param {number} MaxSessionDuration <p>The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours.</p> <p>Anyone who assumes the role from the AWS CLI or API can use the <code>DurationSeconds</code> API parameter or the <code>duration-seconds</code> CLI parameter to request a longer session. The <code>MaxSessionDuration</code> setting determines the maximum duration that can be requested using the <code>DurationSeconds</code> parameter. If users don't specify a value for the <code>DurationSeconds</code> parameter, their security credentials are valid for one hour by default. This applies when you use the <code>AssumeRole*</code> API operations or the <code>assume-role*</code> CLI operations but does not apply when you use those operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the <i>IAM User Guide</i>.</p>
		 * @return {void} Success
		 */
		GET_UpdateRole(RoleName: string, Description: string | null | undefined, MaxSessionDuration: number | null | undefined, Action: GET_UpdateRoleAction, Version: GET_UpdateRoleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateRole?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&MaxSessionDuration=' + MaxSessionDuration + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Use <a>UpdateRole</a> instead.</p> <p>Modifies only the description of a role. This operation performs the same function as the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>
		 * Get #Action=UpdateRoleDescription
		 * @param {string} RoleName The name of the role that you want to modify.
		 * @param {string} Description The new description that you want to apply to the specified role.
		 * @return {void} Success
		 */
		GET_UpdateRoleDescription(RoleName: string, Description: string, Action: GET_UpdateRoleDescriptionAction, Version: GET_UpdateRoleDescriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateRoleDescription?RoleName=' + (RoleName == null ? '' : encodeURIComponent(RoleName)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the metadata document for an existing SAML provider resource object.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
		 * Get #Action=UpdateSAMLProvider
		 * @param {string} SAMLMetadataDocument An XML document generated by an identity provider (IdP) that supports SAML 2.0. The document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that are received from the IdP. You must generate the metadata document using the identity management software that is used as your organization's IdP.
		 * @param {string} SAMLProviderArn <p>The Amazon Resource Name (ARN) of the SAML provider to update.</p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
		 * @return {void} Success
		 */
		GET_UpdateSAMLProvider(SAMLMetadataDocument: string, SAMLProviderArn: string, Action: GET_UpdateSAMLProviderAction, Version: GET_UpdateSAMLProviderVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateSAMLProvider?SAMLMetadataDocument=' + (SAMLMetadataDocument == null ? '' : encodeURIComponent(SAMLMetadataDocument)) + '&SAMLProviderArn=' + (SAMLProviderArn == null ? '' : encodeURIComponent(SAMLProviderArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys that are inactive cannot be used for authentication. This operation can be used to disable a user's SSH public key as part of a key rotation work flow.</p> <p>The SSH public key affected by this operation is used only for authenticating the associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH Connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
		 * Get #Action=UpdateSSHPublicKey
		 * @param {string} UserName <p>The name of the IAM user associated with the SSH public key.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} SSHPublicKeyId <p>The unique identifier for the SSH public key.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
		 * @param {AccessKeyStatus} Status The status to assign to the SSH public key. <code>Active</code> means that the key can be used for authentication with an AWS CodeCommit repository. <code>Inactive</code> means that the key cannot be used.
		 * @return {void} Success
		 */
		GET_UpdateSSHPublicKey(UserName: string, SSHPublicKeyId: string, Status: AccessKeyStatus, Action: GET_UpdateSSHPublicKeyAction, Version: GET_UpdateSSHPublicKeyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateSSHPublicKey?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&SSHPublicKeyId=' + (SSHPublicKeyId == null ? '' : encodeURIComponent(SSHPublicKeyId)) + '&Status=' + Status + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the name and/or the path of the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with Server Certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of AWS services that can use the server certificates that you manage with IAM.</p> <important> <p>You should understand the implications of changing a server certificate's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a Server Certificate</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the server certificate with the old name and the new name. For example, to change the certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the principal must have a policy that allows them to update both certificates. If the principal has permission to update the <code>ProductionCert</code> group, but not the <code>ProdCert</code> certificate, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the <i>IAM User Guide</i>.</p> </note>
		 * Get #Action=UpdateServerCertificate
		 * @param {string} ServerCertificateName <p>The name of the server certificate that you want to update.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} NewPath <p>The new path for the server certificate. Include this only if you are updating the server certificate's path.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {string} NewServerCertificateName <p>The new name for the server certificate. Include this only if you are updating the server certificate's name. The name of the certificate cannot contain any spaces.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @return {void} Success
		 */
		GET_UpdateServerCertificate(ServerCertificateName: string, NewPath: string | null | undefined, NewServerCertificateName: string | null | undefined, Action: GET_UpdateServerCertificateAction, Version: GET_UpdateServerCertificateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateServerCertificate?ServerCertificateName=' + (ServerCertificateName == null ? '' : encodeURIComponent(ServerCertificateName)) + '&NewPath=' + (NewPath == null ? '' : encodeURIComponent(NewPath)) + '&NewServerCertificateName=' + (NewServerCertificateName == null ? '' : encodeURIComponent(NewServerCertificateName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the status of a service-specific credential to <code>Active</code> or <code>Inactive</code>. Service-specific credentials that are inactive cannot be used for authentication to the service. This operation can be used to disable a user's service-specific credential as part of a credential rotation work flow.
		 * Get #Action=UpdateServiceSpecificCredential
		 * @param {string} UserName <p>The name of the IAM user associated with the service-specific credential. If you do not specify this value, then the operation assumes the user whose credentials are used to call the operation.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} ServiceSpecificCredentialId <p>The unique identifier of the service-specific credential.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
		 * @param {AccessKeyStatus} Status The status to be assigned to the service-specific credential.
		 * @return {void} Success
		 */
		GET_UpdateServiceSpecificCredential(UserName: string | null | undefined, ServiceSpecificCredentialId: string, Status: AccessKeyStatus, Action: GET_UpdateServiceSpecificCredentialAction, Version: GET_UpdateServiceSpecificCredentialVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateServiceSpecificCredential?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&ServiceSpecificCredentialId=' + (ServiceSpecificCredentialId == null ? '' : encodeURIComponent(ServiceSpecificCredentialId)) + '&Status=' + Status + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Changes the status of the specified user signing certificate from active to disabled, or vice versa. This operation can be used to disable an IAM user's signing certificate as part of a certificate rotation work flow.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the AWS access key ID used to sign the request. This operation works for access keys under the AWS account. Consequently, you can use this operation to manage AWS account root user credentials even if the AWS account has no associated users.</p>
		 * Get #Action=UpdateSigningCertificate
		 * @param {string} UserName <p>The name of the IAM user the signing certificate belongs to.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} CertificateId <p>The ID of the signing certificate you want to update.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can consist of any upper or lowercased letter or digit.</p>
		 * @param {AccessKeyStatus} Status  The status you want to assign to the certificate. <code>Active</code> means that the certificate can be used for API calls to AWS <code>Inactive</code> means that the certificate cannot be used.
		 * @return {void} Success
		 */
		GET_UpdateSigningCertificate(UserName: string | null | undefined, CertificateId: string, Status: AccessKeyStatus, Action: GET_UpdateSigningCertificateAction, Version: GET_UpdateSigningCertificateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateSigningCertificate?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&CertificateId=' + (CertificateId == null ? '' : encodeURIComponent(CertificateId)) + '&Status=' + Status + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the name and/or the path of the specified IAM user.</p> <important> <p> You should understand the implications of changing an IAM user's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming">Renaming an IAM User</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html">Renaming an IAM Group</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p> To change a user name, the requester must have appropriate permissions on both the source object and the target object. For example, to change Bob to Robert, the entity making the request must have permission on Bob and Robert, or must have permission on all (*). For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html">Permissions and Policies</a>. </p> </note>
		 * Get #Action=UpdateUser
		 * @param {string} UserName <p>Name of the user to update. If you're changing the name of the user, this is the original user name.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} NewPath <p>New path for the IAM user. Include this parameter only if you're changing the user's path.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p>
		 * @param {string} NewUserName <p>New name for the user. Include this parameter only if you're changing the user's name.</p> <p>IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both "MyResource" and "myresource".</p>
		 * @return {void} Success
		 */
		GET_UpdateUser(UserName: string, NewPath: string | null | undefined, NewUserName: string | null | undefined, Action: GET_UpdateUserAction, Version: GET_UpdateUserVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateUser?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&NewPath=' + (NewPath == null ? '' : encodeURIComponent(NewPath)) + '&NewUserName=' + (NewUserName == null ? '' : encodeURIComponent(NewUserName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Uploads an SSH public key and associates it with the specified IAM user.</p> <p>The SSH public key uploaded by this operation can be used only for authenticating the associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH Connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
		 * Get #Action=UploadSSHPublicKey
		 * @param {string} UserName <p>The name of the IAM user to associate the SSH public key with.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} SSHPublicKeyBody <p>The SSH public key. The public key must be encoded in ssh-rsa format or PEM format. The minimum bit-length of the public key is 2048 bits. For example, you can generate a 2048-bit key, and the resulting PEM file is 1679 bytes long.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_UploadSSHPublicKey(UserName: string, SSHPublicKeyBody: string, Action: GET_UploadSSHPublicKeyAction, Version: GET_UploadSSHPublicKeyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UploadSSHPublicKey?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&SSHPublicKeyBody=' + (SSHPublicKeyBody == null ? '' : encodeURIComponent(SSHPublicKeyBody)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Uploads a server certificate entity for the AWS account. The server certificate entity includes a public key certificate, a private key, and an optional certificate chain, which should all be PEM-encoded.</p> <p>We recommend that you use <a href="https://docs.aws.amazon.com/acm/">AWS Certificate Manager</a> to provision, manage, and deploy your server certificates. With ACM you can request a certificate, deploy it to AWS resources, and let ACM handle certificate renewals for you. Certificates provided by ACM are free. For more information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate Manager User Guide</a>.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with Server Certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of AWS services that can use the server certificates that you manage with IAM.</p> <p>For information about the number of server certificates you can upload, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html">Limitations on IAM Entities and Objects</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because the body of the public key certificate, private key, and the certificate chain can be large, you should use POST rather than GET when calling <code>UploadServerCertificate</code>. For information about setting up signatures and authorization through the API, go to <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing AWS API Requests</a> in the <i>AWS General Reference</i>. For general information about using the Query API with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/programming.html">Calling the API by Making HTTP Query Requests</a> in the <i>IAM User Guide</i>.</p> </note>
		 * Get #Action=UploadServerCertificate
		 * @param {string} Path <p>The path for the server certificate. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>.</p> <p>This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including most punctuation characters, digits, and upper and lowercased letters.</p> <note> <p> If you are uploading a server certificate specifically for use with Amazon CloudFront distributions, you must specify a path using the <code>path</code> parameter. The path must begin with <code>/cloudfront</code> and must include a trailing slash (for example, <code>/cloudfront/test/</code>).</p> </note>
		 * @param {string} ServerCertificateName <p>The name for the server certificate. Do not include the path in this value. The name of the certificate cannot contain any spaces.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} CertificateBody <p>The contents of the public key certificate in PEM-encoded format.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @param {string} PrivateKey <p>The contents of the private key in PEM-encoded format.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @param {string} CertificateChain <p>The contents of the certificate chain. This is typically a concatenation of the PEM-encoded public key certificates of the chain.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_UploadServerCertificate(Path: string | null | undefined, ServerCertificateName: string, CertificateBody: string, PrivateKey: string, CertificateChain: string | null | undefined, Action: GET_UploadServerCertificateAction, Version: GET_UploadServerCertificateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UploadServerCertificate?Path=' + (Path == null ? '' : encodeURIComponent(Path)) + '&ServerCertificateName=' + (ServerCertificateName == null ? '' : encodeURIComponent(ServerCertificateName)) + '&CertificateBody=' + (CertificateBody == null ? '' : encodeURIComponent(CertificateBody)) + '&PrivateKey=' + (PrivateKey == null ? '' : encodeURIComponent(PrivateKey)) + '&CertificateChain=' + (CertificateChain == null ? '' : encodeURIComponent(CertificateChain)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Uploads an X.509 signing certificate and associates it with the specified IAM user. Some AWS services use X.509 signing certificates to validate requests that are signed with a corresponding private key. When you upload the certificate, its default status is <code>Active</code>.</p> <p>If the <code>UserName</code> is not specified, the IAM user name is determined implicitly based on the AWS access key ID used to sign the request. This operation works for access keys under the AWS account. Consequently, you can use this operation to manage AWS account root user credentials even if the AWS account has no associated users.</p> <note> <p>Because the body of an X.509 certificate can be large, you should use POST rather than GET when calling <code>UploadSigningCertificate</code>. For information about setting up signatures and authorization through the API, go to <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing AWS API Requests</a> in the <i>AWS General Reference</i>. For general information about using the Query API with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the <i>IAM User Guide</i>.</p> </note>
		 * Get #Action=UploadSigningCertificate
		 * @param {string} UserName <p>The name of the user the signing certificate is for.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
		 * @param {string} CertificateBody <p>The contents of the signing certificate.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through <code>\u00FF</code>)</p> </li> <li> <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_UploadSigningCertificate(UserName: string | null | undefined, CertificateBody: string, Action: GET_UploadSigningCertificateAction, Version: GET_UploadSigningCertificateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UploadSigningCertificate?UserName=' + (UserName == null ? '' : encodeURIComponent(UserName)) + '&CertificateBody=' + (CertificateBody == null ? '' : encodeURIComponent(CertificateBody)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AddClientIDToOpenIDConnectProviderAction { AddClientIDToOpenIDConnectProvider = 0 }

	export enum GET_AddClientIDToOpenIDConnectProviderVersion { _2010_05_08 = 0 }

	export enum POST_AddClientIDToOpenIDConnectProviderVersion { _2010_05_08 = 0 }

	export enum GET_AddRoleToInstanceProfileAction { AddRoleToInstanceProfile = 0 }

	export enum GET_AddRoleToInstanceProfileVersion { _2010_05_08 = 0 }

	export enum POST_AddRoleToInstanceProfileVersion { _2010_05_08 = 0 }

	export enum GET_AddUserToGroupAction { AddUserToGroup = 0 }

	export enum GET_AddUserToGroupVersion { _2010_05_08 = 0 }

	export enum POST_AddUserToGroupVersion { _2010_05_08 = 0 }

	export enum GET_AttachGroupPolicyAction { AttachGroupPolicy = 0 }

	export enum GET_AttachGroupPolicyVersion { _2010_05_08 = 0 }

	export enum POST_AttachGroupPolicyVersion { _2010_05_08 = 0 }

	export enum GET_AttachRolePolicyAction { AttachRolePolicy = 0 }

	export enum GET_AttachRolePolicyVersion { _2010_05_08 = 0 }

	export enum POST_AttachRolePolicyVersion { _2010_05_08 = 0 }

	export enum GET_AttachUserPolicyAction { AttachUserPolicy = 0 }

	export enum GET_AttachUserPolicyVersion { _2010_05_08 = 0 }

	export enum POST_AttachUserPolicyVersion { _2010_05_08 = 0 }

	export enum GET_ChangePasswordAction { ChangePassword = 0 }

	export enum GET_ChangePasswordVersion { _2010_05_08 = 0 }

	export enum POST_ChangePasswordVersion { _2010_05_08 = 0 }

	export enum GET_CreateAccessKeyAction { CreateAccessKey = 0 }

	export enum GET_CreateAccessKeyVersion { _2010_05_08 = 0 }

	export enum POST_CreateAccessKeyVersion { _2010_05_08 = 0 }

	export enum GET_CreateAccountAliasAction { CreateAccountAlias = 0 }

	export enum GET_CreateAccountAliasVersion { _2010_05_08 = 0 }

	export enum POST_CreateAccountAliasVersion { _2010_05_08 = 0 }

	export enum GET_CreateGroupAction { CreateGroup = 0 }

	export enum GET_CreateGroupVersion { _2010_05_08 = 0 }

	export enum POST_CreateGroupVersion { _2010_05_08 = 0 }

	export enum GET_CreateInstanceProfileAction { CreateInstanceProfile = 0 }

	export enum GET_CreateInstanceProfileVersion { _2010_05_08 = 0 }

	export enum POST_CreateInstanceProfileVersion { _2010_05_08 = 0 }

	export enum GET_CreateLoginProfileAction { CreateLoginProfile = 0 }

	export enum GET_CreateLoginProfileVersion { _2010_05_08 = 0 }

	export enum POST_CreateLoginProfileVersion { _2010_05_08 = 0 }

	export enum GET_CreateOpenIDConnectProviderAction { CreateOpenIDConnectProvider = 0 }

	export enum GET_CreateOpenIDConnectProviderVersion { _2010_05_08 = 0 }

	export enum POST_CreateOpenIDConnectProviderVersion { _2010_05_08 = 0 }

	export enum GET_CreatePolicyAction { CreatePolicy = 0 }

	export enum GET_CreatePolicyVersion { _2010_05_08 = 0 }

	export enum POST_CreatePolicyVersion { _2010_05_08 = 0 }

	export enum GET_CreatePolicyVersionAction { CreatePolicyVersion = 0 }

	export enum GET_CreatePolicyVersionVersion { _2010_05_08 = 0 }

	export enum POST_CreatePolicyVersionVersion { _2010_05_08 = 0 }

	export enum GET_CreateRoleAction { CreateRole = 0 }

	export enum GET_CreateRoleVersion { _2010_05_08 = 0 }

	export enum POST_CreateRoleVersion { _2010_05_08 = 0 }

	export enum GET_CreateSAMLProviderAction { CreateSAMLProvider = 0 }

	export enum GET_CreateSAMLProviderVersion { _2010_05_08 = 0 }

	export enum POST_CreateSAMLProviderVersion { _2010_05_08 = 0 }

	export enum GET_CreateServiceLinkedRoleAction { CreateServiceLinkedRole = 0 }

	export enum GET_CreateServiceLinkedRoleVersion { _2010_05_08 = 0 }

	export enum POST_CreateServiceLinkedRoleVersion { _2010_05_08 = 0 }

	export enum GET_CreateServiceSpecificCredentialAction { CreateServiceSpecificCredential = 0 }

	export enum GET_CreateServiceSpecificCredentialVersion { _2010_05_08 = 0 }

	export enum POST_CreateServiceSpecificCredentialVersion { _2010_05_08 = 0 }

	export enum GET_CreateUserAction { CreateUser = 0 }

	export enum GET_CreateUserVersion { _2010_05_08 = 0 }

	export enum POST_CreateUserVersion { _2010_05_08 = 0 }

	export enum GET_CreateVirtualMFADeviceAction { CreateVirtualMFADevice = 0 }

	export enum GET_CreateVirtualMFADeviceVersion { _2010_05_08 = 0 }

	export enum POST_CreateVirtualMFADeviceVersion { _2010_05_08 = 0 }

	export enum GET_DeactivateMFADeviceAction { DeactivateMFADevice = 0 }

	export enum GET_DeactivateMFADeviceVersion { _2010_05_08 = 0 }

	export enum POST_DeactivateMFADeviceVersion { _2010_05_08 = 0 }

	export enum GET_DeleteAccessKeyAction { DeleteAccessKey = 0 }

	export enum GET_DeleteAccessKeyVersion { _2010_05_08 = 0 }

	export enum POST_DeleteAccessKeyVersion { _2010_05_08 = 0 }

	export enum GET_DeleteAccountAliasAction { DeleteAccountAlias = 0 }

	export enum GET_DeleteAccountAliasVersion { _2010_05_08 = 0 }

	export enum POST_DeleteAccountAliasVersion { _2010_05_08 = 0 }

	export enum GET_DeleteAccountPasswordPolicyAction { DeleteAccountPasswordPolicy = 0 }

	export enum GET_DeleteAccountPasswordPolicyVersion { _2010_05_08 = 0 }

	export enum POST_DeleteAccountPasswordPolicyVersion { _2010_05_08 = 0 }

	export enum GET_DeleteGroupAction { DeleteGroup = 0 }

	export enum GET_DeleteGroupVersion { _2010_05_08 = 0 }

	export enum POST_DeleteGroupVersion { _2010_05_08 = 0 }

	export enum GET_DeleteGroupPolicyAction { DeleteGroupPolicy = 0 }

	export enum GET_DeleteGroupPolicyVersion { _2010_05_08 = 0 }

	export enum POST_DeleteGroupPolicyVersion { _2010_05_08 = 0 }

	export enum GET_DeleteInstanceProfileAction { DeleteInstanceProfile = 0 }

	export enum GET_DeleteInstanceProfileVersion { _2010_05_08 = 0 }

	export enum POST_DeleteInstanceProfileVersion { _2010_05_08 = 0 }

	export enum GET_DeleteLoginProfileAction { DeleteLoginProfile = 0 }

	export enum GET_DeleteLoginProfileVersion { _2010_05_08 = 0 }

	export enum POST_DeleteLoginProfileVersion { _2010_05_08 = 0 }

	export enum GET_DeleteOpenIDConnectProviderAction { DeleteOpenIDConnectProvider = 0 }

	export enum GET_DeleteOpenIDConnectProviderVersion { _2010_05_08 = 0 }

	export enum POST_DeleteOpenIDConnectProviderVersion { _2010_05_08 = 0 }

	export enum GET_DeletePolicyAction { DeletePolicy = 0 }

	export enum GET_DeletePolicyVersion { _2010_05_08 = 0 }

	export enum POST_DeletePolicyVersion { _2010_05_08 = 0 }

	export enum GET_DeletePolicyVersionAction { DeletePolicyVersion = 0 }

	export enum GET_DeletePolicyVersionVersion { _2010_05_08 = 0 }

	export enum POST_DeletePolicyVersionVersion { _2010_05_08 = 0 }

	export enum GET_DeleteRoleAction { DeleteRole = 0 }

	export enum GET_DeleteRoleVersion { _2010_05_08 = 0 }

	export enum POST_DeleteRoleVersion { _2010_05_08 = 0 }

	export enum GET_DeleteRolePermissionsBoundaryAction { DeleteRolePermissionsBoundary = 0 }

	export enum GET_DeleteRolePermissionsBoundaryVersion { _2010_05_08 = 0 }

	export enum POST_DeleteRolePermissionsBoundaryVersion { _2010_05_08 = 0 }

	export enum GET_DeleteRolePolicyAction { DeleteRolePolicy = 0 }

	export enum GET_DeleteRolePolicyVersion { _2010_05_08 = 0 }

	export enum POST_DeleteRolePolicyVersion { _2010_05_08 = 0 }

	export enum GET_DeleteSAMLProviderAction { DeleteSAMLProvider = 0 }

	export enum GET_DeleteSAMLProviderVersion { _2010_05_08 = 0 }

	export enum POST_DeleteSAMLProviderVersion { _2010_05_08 = 0 }

	export enum GET_DeleteSSHPublicKeyAction { DeleteSSHPublicKey = 0 }

	export enum GET_DeleteSSHPublicKeyVersion { _2010_05_08 = 0 }

	export enum POST_DeleteSSHPublicKeyVersion { _2010_05_08 = 0 }

	export enum GET_DeleteServerCertificateAction { DeleteServerCertificate = 0 }

	export enum GET_DeleteServerCertificateVersion { _2010_05_08 = 0 }

	export enum POST_DeleteServerCertificateVersion { _2010_05_08 = 0 }

	export enum GET_DeleteServiceLinkedRoleAction { DeleteServiceLinkedRole = 0 }

	export enum GET_DeleteServiceLinkedRoleVersion { _2010_05_08 = 0 }

	export enum POST_DeleteServiceLinkedRoleVersion { _2010_05_08 = 0 }

	export enum GET_DeleteServiceSpecificCredentialAction { DeleteServiceSpecificCredential = 0 }

	export enum GET_DeleteServiceSpecificCredentialVersion { _2010_05_08 = 0 }

	export enum POST_DeleteServiceSpecificCredentialVersion { _2010_05_08 = 0 }

	export enum GET_DeleteSigningCertificateAction { DeleteSigningCertificate = 0 }

	export enum GET_DeleteSigningCertificateVersion { _2010_05_08 = 0 }

	export enum POST_DeleteSigningCertificateVersion { _2010_05_08 = 0 }

	export enum GET_DeleteUserAction { DeleteUser = 0 }

	export enum GET_DeleteUserVersion { _2010_05_08 = 0 }

	export enum POST_DeleteUserVersion { _2010_05_08 = 0 }

	export enum GET_DeleteUserPermissionsBoundaryAction { DeleteUserPermissionsBoundary = 0 }

	export enum GET_DeleteUserPermissionsBoundaryVersion { _2010_05_08 = 0 }

	export enum POST_DeleteUserPermissionsBoundaryVersion { _2010_05_08 = 0 }

	export enum GET_DeleteUserPolicyAction { DeleteUserPolicy = 0 }

	export enum GET_DeleteUserPolicyVersion { _2010_05_08 = 0 }

	export enum POST_DeleteUserPolicyVersion { _2010_05_08 = 0 }

	export enum GET_DeleteVirtualMFADeviceAction { DeleteVirtualMFADevice = 0 }

	export enum GET_DeleteVirtualMFADeviceVersion { _2010_05_08 = 0 }

	export enum POST_DeleteVirtualMFADeviceVersion { _2010_05_08 = 0 }

	export enum GET_DetachGroupPolicyAction { DetachGroupPolicy = 0 }

	export enum GET_DetachGroupPolicyVersion { _2010_05_08 = 0 }

	export enum POST_DetachGroupPolicyVersion { _2010_05_08 = 0 }

	export enum GET_DetachRolePolicyAction { DetachRolePolicy = 0 }

	export enum GET_DetachRolePolicyVersion { _2010_05_08 = 0 }

	export enum POST_DetachRolePolicyVersion { _2010_05_08 = 0 }

	export enum GET_DetachUserPolicyAction { DetachUserPolicy = 0 }

	export enum GET_DetachUserPolicyVersion { _2010_05_08 = 0 }

	export enum POST_DetachUserPolicyVersion { _2010_05_08 = 0 }

	export enum GET_EnableMFADeviceAction { EnableMFADevice = 0 }

	export enum GET_EnableMFADeviceVersion { _2010_05_08 = 0 }

	export enum POST_EnableMFADeviceVersion { _2010_05_08 = 0 }

	export enum GET_GenerateCredentialReportAction { GenerateCredentialReport = 0 }

	export enum GET_GenerateCredentialReportVersion { _2010_05_08 = 0 }

	export enum POST_GenerateCredentialReportVersion { _2010_05_08 = 0 }

	export enum GET_GenerateOrganizationsAccessReportAction { GenerateOrganizationsAccessReport = 0 }

	export enum GET_GenerateOrganizationsAccessReportVersion { _2010_05_08 = 0 }

	export enum POST_GenerateOrganizationsAccessReportVersion { _2010_05_08 = 0 }

	export enum GET_GenerateServiceLastAccessedDetailsAction { GenerateServiceLastAccessedDetails = 0 }

	export enum GET_GenerateServiceLastAccessedDetailsVersion { _2010_05_08 = 0 }

	export enum POST_GenerateServiceLastAccessedDetailsVersion { _2010_05_08 = 0 }

	export enum GET_GetAccessKeyLastUsedAction { GetAccessKeyLastUsed = 0 }

	export enum GET_GetAccessKeyLastUsedVersion { _2010_05_08 = 0 }

	export enum POST_GetAccessKeyLastUsedVersion { _2010_05_08 = 0 }

	export enum GET_GetAccountAuthorizationDetailsAction { GetAccountAuthorizationDetails = 0 }

	export enum GET_GetAccountAuthorizationDetailsVersion { _2010_05_08 = 0 }

	export enum POST_GetAccountAuthorizationDetailsVersion { _2010_05_08 = 0 }

	export enum GET_GetAccountPasswordPolicyAction { GetAccountPasswordPolicy = 0 }

	export enum GET_GetAccountPasswordPolicyVersion { _2010_05_08 = 0 }

	export enum POST_GetAccountPasswordPolicyVersion { _2010_05_08 = 0 }

	export enum GET_GetAccountSummaryAction { GetAccountSummary = 0 }

	export enum GET_GetAccountSummaryVersion { _2010_05_08 = 0 }

	export enum POST_GetAccountSummaryVersion { _2010_05_08 = 0 }

	export enum GET_GetContextKeysForCustomPolicyAction { GetContextKeysForCustomPolicy = 0 }

	export enum GET_GetContextKeysForCustomPolicyVersion { _2010_05_08 = 0 }

	export enum POST_GetContextKeysForCustomPolicyVersion { _2010_05_08 = 0 }

	export enum GET_GetContextKeysForPrincipalPolicyAction { GetContextKeysForPrincipalPolicy = 0 }

	export enum GET_GetContextKeysForPrincipalPolicyVersion { _2010_05_08 = 0 }

	export enum POST_GetContextKeysForPrincipalPolicyVersion { _2010_05_08 = 0 }

	export enum GET_GetCredentialReportAction { GetCredentialReport = 0 }

	export enum GET_GetCredentialReportVersion { _2010_05_08 = 0 }

	export enum POST_GetCredentialReportVersion { _2010_05_08 = 0 }

	export enum GET_GetGroupAction { GetGroup = 0 }

	export enum GET_GetGroupVersion { _2010_05_08 = 0 }

	export enum POST_GetGroupVersion { _2010_05_08 = 0 }

	export enum GET_GetGroupPolicyAction { GetGroupPolicy = 0 }

	export enum GET_GetGroupPolicyVersion { _2010_05_08 = 0 }

	export enum POST_GetGroupPolicyVersion { _2010_05_08 = 0 }

	export enum GET_GetInstanceProfileAction { GetInstanceProfile = 0 }

	export enum GET_GetInstanceProfileVersion { _2010_05_08 = 0 }

	export enum POST_GetInstanceProfileVersion { _2010_05_08 = 0 }

	export enum GET_GetLoginProfileAction { GetLoginProfile = 0 }

	export enum GET_GetLoginProfileVersion { _2010_05_08 = 0 }

	export enum POST_GetLoginProfileVersion { _2010_05_08 = 0 }

	export enum GET_GetOpenIDConnectProviderAction { GetOpenIDConnectProvider = 0 }

	export enum GET_GetOpenIDConnectProviderVersion { _2010_05_08 = 0 }

	export enum POST_GetOpenIDConnectProviderVersion { _2010_05_08 = 0 }

	export enum GET_GetOrganizationsAccessReportAction { GetOrganizationsAccessReport = 0 }

	export enum GET_GetOrganizationsAccessReportVersion { _2010_05_08 = 0 }

	export enum POST_GetOrganizationsAccessReportVersion { _2010_05_08 = 0 }

	export enum GET_GetPolicyAction { GetPolicy = 0 }

	export enum GET_GetPolicyVersion { _2010_05_08 = 0 }

	export enum POST_GetPolicyVersion { _2010_05_08 = 0 }

	export enum GET_GetPolicyVersionAction { GetPolicyVersion = 0 }

	export enum GET_GetPolicyVersionVersion { _2010_05_08 = 0 }

	export enum POST_GetPolicyVersionVersion { _2010_05_08 = 0 }

	export enum GET_GetRoleAction { GetRole = 0 }

	export enum GET_GetRoleVersion { _2010_05_08 = 0 }

	export enum POST_GetRoleVersion { _2010_05_08 = 0 }

	export enum GET_GetRolePolicyAction { GetRolePolicy = 0 }

	export enum GET_GetRolePolicyVersion { _2010_05_08 = 0 }

	export enum POST_GetRolePolicyVersion { _2010_05_08 = 0 }

	export enum GET_GetSAMLProviderAction { GetSAMLProvider = 0 }

	export enum GET_GetSAMLProviderVersion { _2010_05_08 = 0 }

	export enum POST_GetSAMLProviderVersion { _2010_05_08 = 0 }

	export enum GET_GetSSHPublicKeyAction { GetSSHPublicKey = 0 }

	export enum GET_GetSSHPublicKeyVersion { _2010_05_08 = 0 }

	export enum POST_GetSSHPublicKeyVersion { _2010_05_08 = 0 }

	export enum GET_GetServerCertificateAction { GetServerCertificate = 0 }

	export enum GET_GetServerCertificateVersion { _2010_05_08 = 0 }

	export enum POST_GetServerCertificateVersion { _2010_05_08 = 0 }

	export enum GET_GetServiceLastAccessedDetailsAction { GetServiceLastAccessedDetails = 0 }

	export enum GET_GetServiceLastAccessedDetailsVersion { _2010_05_08 = 0 }

	export enum POST_GetServiceLastAccessedDetailsVersion { _2010_05_08 = 0 }

	export enum GET_GetServiceLastAccessedDetailsWithEntitiesAction { GetServiceLastAccessedDetailsWithEntities = 0 }

	export enum GET_GetServiceLastAccessedDetailsWithEntitiesVersion { _2010_05_08 = 0 }

	export enum POST_GetServiceLastAccessedDetailsWithEntitiesVersion { _2010_05_08 = 0 }

	export enum GET_GetServiceLinkedRoleDeletionStatusAction { GetServiceLinkedRoleDeletionStatus = 0 }

	export enum GET_GetServiceLinkedRoleDeletionStatusVersion { _2010_05_08 = 0 }

	export enum POST_GetServiceLinkedRoleDeletionStatusVersion { _2010_05_08 = 0 }

	export enum GET_GetUserAction { GetUser = 0 }

	export enum GET_GetUserVersion { _2010_05_08 = 0 }

	export enum POST_GetUserVersion { _2010_05_08 = 0 }

	export enum GET_GetUserPolicyAction { GetUserPolicy = 0 }

	export enum GET_GetUserPolicyVersion { _2010_05_08 = 0 }

	export enum POST_GetUserPolicyVersion { _2010_05_08 = 0 }

	export enum GET_ListAccessKeysAction { ListAccessKeys = 0 }

	export enum GET_ListAccessKeysVersion { _2010_05_08 = 0 }

	export enum POST_ListAccessKeysVersion { _2010_05_08 = 0 }

	export enum GET_ListAccountAliasesAction { ListAccountAliases = 0 }

	export enum GET_ListAccountAliasesVersion { _2010_05_08 = 0 }

	export enum POST_ListAccountAliasesVersion { _2010_05_08 = 0 }

	export enum GET_ListAttachedGroupPoliciesAction { ListAttachedGroupPolicies = 0 }

	export enum GET_ListAttachedGroupPoliciesVersion { _2010_05_08 = 0 }

	export enum POST_ListAttachedGroupPoliciesVersion { _2010_05_08 = 0 }

	export enum GET_ListAttachedRolePoliciesAction { ListAttachedRolePolicies = 0 }

	export enum GET_ListAttachedRolePoliciesVersion { _2010_05_08 = 0 }

	export enum POST_ListAttachedRolePoliciesVersion { _2010_05_08 = 0 }

	export enum GET_ListAttachedUserPoliciesAction { ListAttachedUserPolicies = 0 }

	export enum GET_ListAttachedUserPoliciesVersion { _2010_05_08 = 0 }

	export enum POST_ListAttachedUserPoliciesVersion { _2010_05_08 = 0 }

	export enum GET_ListEntitiesForPolicyAction { ListEntitiesForPolicy = 0 }

	export enum GET_ListEntitiesForPolicyVersion { _2010_05_08 = 0 }

	export enum POST_ListEntitiesForPolicyVersion { _2010_05_08 = 0 }

	export enum GET_ListGroupPoliciesAction { ListGroupPolicies = 0 }

	export enum GET_ListGroupPoliciesVersion { _2010_05_08 = 0 }

	export enum POST_ListGroupPoliciesVersion { _2010_05_08 = 0 }

	export enum GET_ListGroupsAction { ListGroups = 0 }

	export enum GET_ListGroupsVersion { _2010_05_08 = 0 }

	export enum POST_ListGroupsVersion { _2010_05_08 = 0 }

	export enum GET_ListGroupsForUserAction { ListGroupsForUser = 0 }

	export enum GET_ListGroupsForUserVersion { _2010_05_08 = 0 }

	export enum POST_ListGroupsForUserVersion { _2010_05_08 = 0 }

	export enum GET_ListInstanceProfilesAction { ListInstanceProfiles = 0 }

	export enum GET_ListInstanceProfilesVersion { _2010_05_08 = 0 }

	export enum POST_ListInstanceProfilesVersion { _2010_05_08 = 0 }

	export enum GET_ListInstanceProfilesForRoleAction { ListInstanceProfilesForRole = 0 }

	export enum GET_ListInstanceProfilesForRoleVersion { _2010_05_08 = 0 }

	export enum POST_ListInstanceProfilesForRoleVersion { _2010_05_08 = 0 }

	export enum GET_ListMFADevicesAction { ListMFADevices = 0 }

	export enum GET_ListMFADevicesVersion { _2010_05_08 = 0 }

	export enum POST_ListMFADevicesVersion { _2010_05_08 = 0 }

	export enum GET_ListOpenIDConnectProvidersAction { ListOpenIDConnectProviders = 0 }

	export enum GET_ListOpenIDConnectProvidersVersion { _2010_05_08 = 0 }

	export enum POST_ListOpenIDConnectProvidersVersion { _2010_05_08 = 0 }

	export enum GET_ListPoliciesAction { ListPolicies = 0 }

	export enum GET_ListPoliciesVersion { _2010_05_08 = 0 }

	export enum POST_ListPoliciesVersion { _2010_05_08 = 0 }

	export enum GET_ListPoliciesGrantingServiceAccessAction { ListPoliciesGrantingServiceAccess = 0 }

	export enum GET_ListPoliciesGrantingServiceAccessVersion { _2010_05_08 = 0 }

	export enum POST_ListPoliciesGrantingServiceAccessVersion { _2010_05_08 = 0 }

	export enum GET_ListPolicyVersionsAction { ListPolicyVersions = 0 }

	export enum GET_ListPolicyVersionsVersion { _2010_05_08 = 0 }

	export enum POST_ListPolicyVersionsVersion { _2010_05_08 = 0 }

	export enum GET_ListRolePoliciesAction { ListRolePolicies = 0 }

	export enum GET_ListRolePoliciesVersion { _2010_05_08 = 0 }

	export enum POST_ListRolePoliciesVersion { _2010_05_08 = 0 }

	export enum GET_ListRoleTagsAction { ListRoleTags = 0 }

	export enum GET_ListRoleTagsVersion { _2010_05_08 = 0 }

	export enum POST_ListRoleTagsVersion { _2010_05_08 = 0 }

	export enum GET_ListRolesAction { ListRoles = 0 }

	export enum GET_ListRolesVersion { _2010_05_08 = 0 }

	export enum POST_ListRolesVersion { _2010_05_08 = 0 }

	export enum GET_ListSAMLProvidersAction { ListSAMLProviders = 0 }

	export enum GET_ListSAMLProvidersVersion { _2010_05_08 = 0 }

	export enum POST_ListSAMLProvidersVersion { _2010_05_08 = 0 }

	export enum GET_ListSSHPublicKeysAction { ListSSHPublicKeys = 0 }

	export enum GET_ListSSHPublicKeysVersion { _2010_05_08 = 0 }

	export enum POST_ListSSHPublicKeysVersion { _2010_05_08 = 0 }

	export enum GET_ListServerCertificatesAction { ListServerCertificates = 0 }

	export enum GET_ListServerCertificatesVersion { _2010_05_08 = 0 }

	export enum POST_ListServerCertificatesVersion { _2010_05_08 = 0 }

	export enum GET_ListServiceSpecificCredentialsAction { ListServiceSpecificCredentials = 0 }

	export enum GET_ListServiceSpecificCredentialsVersion { _2010_05_08 = 0 }

	export enum POST_ListServiceSpecificCredentialsVersion { _2010_05_08 = 0 }

	export enum GET_ListSigningCertificatesAction { ListSigningCertificates = 0 }

	export enum GET_ListSigningCertificatesVersion { _2010_05_08 = 0 }

	export enum POST_ListSigningCertificatesVersion { _2010_05_08 = 0 }

	export enum GET_ListUserPoliciesAction { ListUserPolicies = 0 }

	export enum GET_ListUserPoliciesVersion { _2010_05_08 = 0 }

	export enum POST_ListUserPoliciesVersion { _2010_05_08 = 0 }

	export enum GET_ListUserTagsAction { ListUserTags = 0 }

	export enum GET_ListUserTagsVersion { _2010_05_08 = 0 }

	export enum POST_ListUserTagsVersion { _2010_05_08 = 0 }

	export enum GET_ListUsersAction { ListUsers = 0 }

	export enum GET_ListUsersVersion { _2010_05_08 = 0 }

	export enum POST_ListUsersVersion { _2010_05_08 = 0 }

	export enum GET_ListVirtualMFADevicesAction { ListVirtualMFADevices = 0 }

	export enum GET_ListVirtualMFADevicesVersion { _2010_05_08 = 0 }

	export enum POST_ListVirtualMFADevicesVersion { _2010_05_08 = 0 }

	export enum GET_PutGroupPolicyAction { PutGroupPolicy = 0 }

	export enum GET_PutGroupPolicyVersion { _2010_05_08 = 0 }

	export enum POST_PutGroupPolicyVersion { _2010_05_08 = 0 }

	export enum GET_PutRolePermissionsBoundaryAction { PutRolePermissionsBoundary = 0 }

	export enum GET_PutRolePermissionsBoundaryVersion { _2010_05_08 = 0 }

	export enum POST_PutRolePermissionsBoundaryVersion { _2010_05_08 = 0 }

	export enum GET_PutRolePolicyAction { PutRolePolicy = 0 }

	export enum GET_PutRolePolicyVersion { _2010_05_08 = 0 }

	export enum POST_PutRolePolicyVersion { _2010_05_08 = 0 }

	export enum GET_PutUserPermissionsBoundaryAction { PutUserPermissionsBoundary = 0 }

	export enum GET_PutUserPermissionsBoundaryVersion { _2010_05_08 = 0 }

	export enum POST_PutUserPermissionsBoundaryVersion { _2010_05_08 = 0 }

	export enum GET_PutUserPolicyAction { PutUserPolicy = 0 }

	export enum GET_PutUserPolicyVersion { _2010_05_08 = 0 }

	export enum POST_PutUserPolicyVersion { _2010_05_08 = 0 }

	export enum GET_RemoveClientIDFromOpenIDConnectProviderAction { RemoveClientIDFromOpenIDConnectProvider = 0 }

	export enum GET_RemoveClientIDFromOpenIDConnectProviderVersion { _2010_05_08 = 0 }

	export enum POST_RemoveClientIDFromOpenIDConnectProviderVersion { _2010_05_08 = 0 }

	export enum GET_RemoveRoleFromInstanceProfileAction { RemoveRoleFromInstanceProfile = 0 }

	export enum GET_RemoveRoleFromInstanceProfileVersion { _2010_05_08 = 0 }

	export enum POST_RemoveRoleFromInstanceProfileVersion { _2010_05_08 = 0 }

	export enum GET_RemoveUserFromGroupAction { RemoveUserFromGroup = 0 }

	export enum GET_RemoveUserFromGroupVersion { _2010_05_08 = 0 }

	export enum POST_RemoveUserFromGroupVersion { _2010_05_08 = 0 }

	export enum GET_ResetServiceSpecificCredentialAction { ResetServiceSpecificCredential = 0 }

	export enum GET_ResetServiceSpecificCredentialVersion { _2010_05_08 = 0 }

	export enum POST_ResetServiceSpecificCredentialVersion { _2010_05_08 = 0 }

	export enum GET_ResyncMFADeviceAction { ResyncMFADevice = 0 }

	export enum GET_ResyncMFADeviceVersion { _2010_05_08 = 0 }

	export enum POST_ResyncMFADeviceVersion { _2010_05_08 = 0 }

	export enum GET_SetDefaultPolicyVersionAction { SetDefaultPolicyVersion = 0 }

	export enum GET_SetDefaultPolicyVersionVersion { _2010_05_08 = 0 }

	export enum POST_SetDefaultPolicyVersionVersion { _2010_05_08 = 0 }

	export enum GET_SetSecurityTokenServicePreferencesAction { SetSecurityTokenServicePreferences = 0 }

	export enum GET_SetSecurityTokenServicePreferencesVersion { _2010_05_08 = 0 }

	export enum POST_SetSecurityTokenServicePreferencesVersion { _2010_05_08 = 0 }

	export enum GET_SimulateCustomPolicyAction { SimulateCustomPolicy = 0 }

	export enum GET_SimulateCustomPolicyVersion { _2010_05_08 = 0 }

	export enum POST_SimulateCustomPolicyVersion { _2010_05_08 = 0 }

	export enum GET_SimulatePrincipalPolicyAction { SimulatePrincipalPolicy = 0 }

	export enum GET_SimulatePrincipalPolicyVersion { _2010_05_08 = 0 }

	export enum POST_SimulatePrincipalPolicyVersion { _2010_05_08 = 0 }

	export enum GET_TagRoleAction { TagRole = 0 }

	export enum GET_TagRoleVersion { _2010_05_08 = 0 }

	export enum POST_TagRoleVersion { _2010_05_08 = 0 }

	export enum GET_TagUserAction { TagUser = 0 }

	export enum GET_TagUserVersion { _2010_05_08 = 0 }

	export enum POST_TagUserVersion { _2010_05_08 = 0 }

	export enum GET_UntagRoleAction { UntagRole = 0 }

	export enum GET_UntagRoleVersion { _2010_05_08 = 0 }

	export enum POST_UntagRoleVersion { _2010_05_08 = 0 }

	export enum GET_UntagUserAction { UntagUser = 0 }

	export enum GET_UntagUserVersion { _2010_05_08 = 0 }

	export enum POST_UntagUserVersion { _2010_05_08 = 0 }

	export enum GET_UpdateAccessKeyAction { UpdateAccessKey = 0 }

	export enum GET_UpdateAccessKeyVersion { _2010_05_08 = 0 }

	export enum POST_UpdateAccessKeyVersion { _2010_05_08 = 0 }

	export enum GET_UpdateAccountPasswordPolicyAction { UpdateAccountPasswordPolicy = 0 }

	export enum GET_UpdateAccountPasswordPolicyVersion { _2010_05_08 = 0 }

	export enum POST_UpdateAccountPasswordPolicyVersion { _2010_05_08 = 0 }

	export enum GET_UpdateAssumeRolePolicyAction { UpdateAssumeRolePolicy = 0 }

	export enum GET_UpdateAssumeRolePolicyVersion { _2010_05_08 = 0 }

	export enum POST_UpdateAssumeRolePolicyVersion { _2010_05_08 = 0 }

	export enum GET_UpdateGroupAction { UpdateGroup = 0 }

	export enum GET_UpdateGroupVersion { _2010_05_08 = 0 }

	export enum POST_UpdateGroupVersion { _2010_05_08 = 0 }

	export enum GET_UpdateLoginProfileAction { UpdateLoginProfile = 0 }

	export enum GET_UpdateLoginProfileVersion { _2010_05_08 = 0 }

	export enum POST_UpdateLoginProfileVersion { _2010_05_08 = 0 }

	export enum GET_UpdateOpenIDConnectProviderThumbprintAction { UpdateOpenIDConnectProviderThumbprint = 0 }

	export enum GET_UpdateOpenIDConnectProviderThumbprintVersion { _2010_05_08 = 0 }

	export enum POST_UpdateOpenIDConnectProviderThumbprintVersion { _2010_05_08 = 0 }

	export enum GET_UpdateRoleAction { UpdateRole = 0 }

	export enum GET_UpdateRoleVersion { _2010_05_08 = 0 }

	export enum POST_UpdateRoleVersion { _2010_05_08 = 0 }

	export enum GET_UpdateRoleDescriptionAction { UpdateRoleDescription = 0 }

	export enum GET_UpdateRoleDescriptionVersion { _2010_05_08 = 0 }

	export enum POST_UpdateRoleDescriptionVersion { _2010_05_08 = 0 }

	export enum GET_UpdateSAMLProviderAction { UpdateSAMLProvider = 0 }

	export enum GET_UpdateSAMLProviderVersion { _2010_05_08 = 0 }

	export enum POST_UpdateSAMLProviderVersion { _2010_05_08 = 0 }

	export enum GET_UpdateSSHPublicKeyAction { UpdateSSHPublicKey = 0 }

	export enum GET_UpdateSSHPublicKeyVersion { _2010_05_08 = 0 }

	export enum POST_UpdateSSHPublicKeyVersion { _2010_05_08 = 0 }

	export enum GET_UpdateServerCertificateAction { UpdateServerCertificate = 0 }

	export enum GET_UpdateServerCertificateVersion { _2010_05_08 = 0 }

	export enum POST_UpdateServerCertificateVersion { _2010_05_08 = 0 }

	export enum GET_UpdateServiceSpecificCredentialAction { UpdateServiceSpecificCredential = 0 }

	export enum GET_UpdateServiceSpecificCredentialVersion { _2010_05_08 = 0 }

	export enum POST_UpdateServiceSpecificCredentialVersion { _2010_05_08 = 0 }

	export enum GET_UpdateSigningCertificateAction { UpdateSigningCertificate = 0 }

	export enum GET_UpdateSigningCertificateVersion { _2010_05_08 = 0 }

	export enum POST_UpdateSigningCertificateVersion { _2010_05_08 = 0 }

	export enum GET_UpdateUserAction { UpdateUser = 0 }

	export enum GET_UpdateUserVersion { _2010_05_08 = 0 }

	export enum POST_UpdateUserVersion { _2010_05_08 = 0 }

	export enum GET_UploadSSHPublicKeyAction { UploadSSHPublicKey = 0 }

	export enum GET_UploadSSHPublicKeyVersion { _2010_05_08 = 0 }

	export enum POST_UploadSSHPublicKeyVersion { _2010_05_08 = 0 }

	export enum GET_UploadServerCertificateAction { UploadServerCertificate = 0 }

	export enum GET_UploadServerCertificateVersion { _2010_05_08 = 0 }

	export enum POST_UploadServerCertificateVersion { _2010_05_08 = 0 }

	export enum GET_UploadSigningCertificateAction { UploadSigningCertificate = 0 }

	export enum GET_UploadSigningCertificateVersion { _2010_05_08 = 0 }

	export enum POST_UploadSigningCertificateVersion { _2010_05_08 = 0 }

}

