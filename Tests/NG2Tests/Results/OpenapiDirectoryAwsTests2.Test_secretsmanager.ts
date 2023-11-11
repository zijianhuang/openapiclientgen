import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CancelRotateSecretResponse {
		ARN?: string | null;
		Name?: string | null;
		VersionId?: string | null;
	}

	export interface CancelRotateSecretRequest {
		SecretId: string;
	}

	export interface ResourceNotFoundException {
	}

	export interface InvalidParameterException {
	}

	export interface InternalServiceError {
	}

	export interface InvalidRequestException {
	}

	export interface CreateSecretResponse {
		ARN?: string | null;
		Name?: string | null;
		VersionId?: string | null;
	}

	export interface CreateSecretRequest {
		Name: string;
		ClientRequestToken?: string | null;
		Description?: string | null;
		KmsKeyId?: string | null;
		SecretBinary?: string | null;
		SecretString?: string | null;
		Tags?: Array<Tag> | null;
	}


	/** A structure that contains information about a tag. */
	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}

	export interface LimitExceededException {
	}

	export interface EncryptionFailure {
	}

	export interface ResourceExistsException {
	}

	export interface MalformedPolicyDocumentException {
	}

	export interface PreconditionNotMetException {
	}

	export interface DeleteResourcePolicyResponse {
		ARN?: string | null;
		Name?: string | null;
	}

	export interface DeleteResourcePolicyRequest {
		SecretId: string;
	}

	export interface DeleteSecretResponse {
		ARN?: string | null;
		Name?: string | null;
		DeletionDate?: Date | null;
	}

	export interface DeleteSecretRequest {
		SecretId: string;
		RecoveryWindowInDays?: number | null;
		ForceDeleteWithoutRecovery?: boolean | null;
	}

	export interface DescribeSecretResponse {
		ARN?: string | null;
		Name?: string | null;
		Description?: string | null;
		KmsKeyId?: string | null;
		RotationEnabled?: boolean | null;
		RotationLambdaARN?: string | null;

		/** A structure that defines the rotation configuration for the secret. */
		RotationRules?: RotationRulesType | null;
		LastRotatedDate?: Date | null;
		LastChangedDate?: Date | null;
		LastAccessedDate?: Date | null;
		DeletedDate?: Date | null;
		Tags?: Array<Tag> | null;
		VersionIdsToStages?: SecretVersionsToStagesMapType | null;
		OwningService?: string | null;
	}


	/** A structure that defines the rotation configuration for the secret. */
	export interface RotationRulesType {
		AutomaticallyAfterDays?: number | null;
	}

	export interface SecretVersionsToStagesMapType {
	}

	export interface DescribeSecretRequest {
		SecretId: string;
	}

	export interface GetRandomPasswordResponse {
		RandomPassword?: string | null;
	}

	export interface GetRandomPasswordRequest {
		PasswordLength?: number | null;
		ExcludeCharacters?: string | null;
		ExcludeNumbers?: boolean | null;
		ExcludePunctuation?: boolean | null;
		ExcludeUppercase?: boolean | null;
		ExcludeLowercase?: boolean | null;
		IncludeSpace?: boolean | null;
		RequireEachIncludedType?: boolean | null;
	}

	export interface GetResourcePolicyResponse {
		ARN?: string | null;
		Name?: string | null;
		ResourcePolicy?: string | null;
	}

	export interface GetResourcePolicyRequest {
		SecretId: string;
	}

	export interface GetSecretValueResponse {
		ARN?: string | null;
		Name?: string | null;
		VersionId?: string | null;
		SecretBinary?: string | null;
		SecretString?: string | null;
		VersionStages?: Array<string> | null;
		CreatedDate?: Date | null;
	}

	export interface GetSecretValueRequest {
		SecretId: string;
		VersionId?: string | null;
		VersionStage?: string | null;
	}

	export interface DecryptionFailure {
	}

	export interface ListSecretVersionIdsResponse {
		Versions?: Array<SecretVersionsListEntry> | null;
		NextToken?: string | null;
		ARN?: string | null;
		Name?: string | null;
	}


	/** A structure that contains information about one version of a secret. */
	export interface SecretVersionsListEntry {
		VersionId?: string | null;
		VersionStages?: Array<string> | null;
		LastAccessedDate?: Date | null;
		CreatedDate?: Date | null;
	}

	export interface ListSecretVersionIdsRequest {
		SecretId: string;
		MaxResults?: number | null;
		NextToken?: string | null;
		IncludeDeprecated?: boolean | null;
	}

	export interface InvalidNextTokenException {
	}

	export interface ListSecretsResponse {
		SecretList?: Array<SecretListEntry> | null;
		NextToken?: string | null;
	}


	/** A structure that contains the details about a secret. It does not include the encrypted <code>SecretString</code> and <code>SecretBinary</code> values. To get those values, use the <a>GetSecretValue</a> operation. */
	export interface SecretListEntry {
		ARN?: string | null;
		Name?: string | null;
		Description?: string | null;
		KmsKeyId?: string | null;
		RotationEnabled?: boolean | null;
		RotationLambdaARN?: string | null;

		/** A structure that defines the rotation configuration for the secret. */
		RotationRules?: RotationRulesType | null;
		LastRotatedDate?: Date | null;
		LastChangedDate?: Date | null;
		LastAccessedDate?: Date | null;
		DeletedDate?: Date | null;
		Tags?: Array<Tag> | null;
		SecretVersionsToStages?: SecretVersionsToStagesMapType | null;
		OwningService?: string | null;
	}

	export interface ListSecretsRequest {
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface PutResourcePolicyResponse {
		ARN?: string | null;
		Name?: string | null;
	}

	export interface PutResourcePolicyRequest {
		SecretId: string;
		ResourcePolicy: string;
	}

	export interface PutSecretValueResponse {
		ARN?: string | null;
		Name?: string | null;
		VersionId?: string | null;
		VersionStages?: Array<string> | null;
	}

	export interface PutSecretValueRequest {
		SecretId: string;
		ClientRequestToken?: string | null;
		SecretBinary?: string | null;
		SecretString?: string | null;
		VersionStages?: Array<string> | null;
	}

	export interface RestoreSecretResponse {
		ARN?: string | null;
		Name?: string | null;
	}

	export interface RestoreSecretRequest {
		SecretId: string;
	}

	export interface RotateSecretResponse {
		ARN?: string | null;
		Name?: string | null;
		VersionId?: string | null;
	}

	export interface RotateSecretRequest {
		SecretId: string;
		ClientRequestToken?: string | null;
		RotationLambdaARN?: string | null;

		/** A structure that defines the rotation configuration for the secret. */
		RotationRules?: RotationRulesType | null;
	}

	export interface TagResourceRequest {
		SecretId: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		SecretId: string;
		TagKeys: Array<string>;
	}

	export interface UpdateSecretResponse {
		ARN?: string | null;
		Name?: string | null;
		VersionId?: string | null;
	}

	export interface UpdateSecretRequest {
		SecretId: string;
		ClientRequestToken?: string | null;
		Description?: string | null;
		KmsKeyId?: string | null;
		SecretBinary?: string | null;
		SecretString?: string | null;
	}

	export interface UpdateSecretVersionStageResponse {
		ARN?: string | null;
		Name?: string | null;
	}

	export interface UpdateSecretVersionStageRequest {
		SecretId: string;
		VersionStage: string;
		RemoveFromVersionId?: string | null;
		MoveToVersionId?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Disables automatic scheduled rotation and cancels the rotation of a secret if one is currently in progress.</p> <p>To re-enable scheduled rotation, call <a>RotateSecret</a> with <code>AutomaticallyRotateAfterDays</code> set to a value greater than 0. This will immediately rotate your secret and then enable the automatic schedule.</p> <note> <p>If you cancel a rotation that is in progress, it can leave the <code>VersionStage</code> labels in an unexpected state. Depending on what step of the rotation was in progress, you might need to remove the staging label <code>AWSPENDING</code> from the partially created version, specified by the <code>VersionId</code> response value. You should also evaluate the partially rotated new version to see if it should be deleted, which you can do by removing all staging labels from the new version's <code>VersionStage</code> field.</p> </note> <p>To successfully start a rotation, the staging label <code>AWSPENDING</code> must be in one of the following states:</p> <ul> <li> <p>Not be attached to any version at all</p> </li> <li> <p>Attached to the same version as the staging label <code>AWSCURRENT</code> </p> </li> </ul> <p>If the staging label <code>AWSPENDING</code> is attached to a different version than the version with <code>AWSCURRENT</code> then the attempt to rotate fails.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:CancelRotateSecret</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To configure rotation for a secret or to manually trigger a rotation, use <a>RotateSecret</a>.</p> </li> <li> <p>To get the rotation configuration details for a secret, use <a>DescribeSecret</a>.</p> </li> <li> <p>To list all of the currently available secrets, use <a>ListSecrets</a>.</p> </li> <li> <p>To list all of the versions currently associated with a secret, use <a>ListSecretVersionIds</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.CancelRotateSecret
		 * @return {CancelRotateSecretResponse} Success
		 */
		CancelRotateSecret(requestBody: CancelRotateSecretRequest): Observable<CancelRotateSecretResponse> {
			return this.http.post<CancelRotateSecretResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.CancelRotateSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new secret. A secret in Secrets Manager consists of both the protected secret data and the important information needed to manage the secret.</p> <p>Secrets Manager stores the encrypted secret data in one of a collection of "versions" associated with the secret. Each version contains a copy of the encrypted secret data. Each version is associated with one or more "staging labels" that identify where the version is in the rotation cycle. The <code>SecretVersionsToStages</code> field of the secret contains the mapping of staging labels to the active versions of the secret. Versions without a staging label are considered deprecated and are not included in the list.</p> <p>You provide the secret data to be encrypted by putting text in either the <code>SecretString</code> parameter or binary data in the <code>SecretBinary</code> parameter, but not both. If you include <code>SecretString</code> or <code>SecretBinary</code> then Secrets Manager also creates an initial secret version and automatically attaches the staging label <code>AWSCURRENT</code> to the new version.</p> <note> <ul> <li> <p>If you call an operation that needs to encrypt or decrypt the <code>SecretString</code> or <code>SecretBinary</code> for a secret in the same account as the calling user and that secret doesn't specify a AWS KMS encryption key, Secrets Manager uses the account's default AWS managed customer master key (CMK) with the alias <code>aws/secretsmanager</code>. If this key doesn't already exist in your account then Secrets Manager creates it for you automatically. All users and roles in the same AWS account automatically have access to use the default CMK. Note that if an Secrets Manager API call results in AWS having to create the account's AWS-managed CMK, it can result in a one-time significant delay in returning the result.</p> </li> <li> <p>If the secret is in a different AWS account from the credentials calling an API that requires encryption or decryption of the secret value then you must create and use a custom AWS KMS CMK because you can't access the default CMK for the account using credentials from a different AWS account. Store the ARN of the CMK in the secret when you create the secret or when you update it by including it in the <code>KMSKeyId</code>. If you call an API that must encrypt or decrypt <code>SecretString</code> or <code>SecretBinary</code> using credentials from a different account then the AWS KMS key policy must grant cross-account access to that other account's user or role for both the kms:GenerateDataKey and kms:Decrypt operations.</p> </li> </ul> </note> <p> </p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:CreateSecret</p> </li> <li> <p>kms:GenerateDataKey - needed only if you use a customer-managed AWS KMS key to encrypt the secret. You do not need this permission to use the account's default AWS managed CMK for Secrets Manager.</p> </li> <li> <p>kms:Decrypt - needed only if you use a customer-managed AWS KMS key to encrypt the secret. You do not need this permission to use the account's default AWS managed CMK for Secrets Manager.</p> </li> <li> <p>secretsmanager:TagResource - needed only if you include the <code>Tags</code> parameter. </p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To delete a secret, use <a>DeleteSecret</a>.</p> </li> <li> <p>To modify an existing secret, use <a>UpdateSecret</a>.</p> </li> <li> <p>To create a new version of a secret, use <a>PutSecretValue</a>.</p> </li> <li> <p>To retrieve the encrypted secure string and secure binary values, use <a>GetSecretValue</a>.</p> </li> <li> <p>To retrieve all other details for a secret, use <a>DescribeSecret</a>. This does not include the encrypted secure string and secure binary values.</p> </li> <li> <p>To retrieve the list of secret versions associated with the current secret, use <a>DescribeSecret</a> and examine the <code>SecretVersionsToStages</code> response value.</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.CreateSecret
		 * @return {CreateSecretResponse} Success
		 */
		CreateSecret(requestBody: CreateSecretRequest): Observable<CreateSecretResponse> {
			return this.http.post<CreateSecretResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.CreateSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the resource-based permission policy that's attached to the secret.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:DeleteResourcePolicy</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To attach a resource policy to a secret, use <a>PutResourcePolicy</a>.</p> </li> <li> <p>To retrieve the current resource-based policy that's attached to a secret, use <a>GetResourcePolicy</a>.</p> </li> <li> <p>To list all of the currently available secrets, use <a>ListSecrets</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.DeleteResourcePolicy
		 * @return {DeleteResourcePolicyResponse} Success
		 */
		DeleteResourcePolicy(requestBody: DeleteResourcePolicyRequest): Observable<DeleteResourcePolicyResponse> {
			return this.http.post<DeleteResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.DeleteResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an entire secret and all of its versions. You can optionally include a recovery window during which you can restore the secret. If you don't specify a recovery window value, the operation defaults to 30 days. Secrets Manager attaches a <code>DeletionDate</code> stamp to the secret that specifies the end of the recovery window. At the end of the recovery window, Secrets Manager deletes the secret permanently.</p> <p>At any time before recovery window ends, you can use <a>RestoreSecret</a> to remove the <code>DeletionDate</code> and cancel the deletion of the secret.</p> <p>You cannot access the encrypted secret information in any secret that is scheduled for deletion. If you need to access that information, you must cancel the deletion with <a>RestoreSecret</a> and then retrieve the information.</p> <note> <ul> <li> <p>There is no explicit operation to delete a version of a secret. Instead, remove all staging labels from the <code>VersionStage</code> field of a version. That marks the version as deprecated and allows Secrets Manager to delete it as needed. Versions that do not have any staging labels do not show up in <a>ListSecretVersionIds</a> unless you specify <code>IncludeDeprecated</code>.</p> </li> <li> <p>The permanent secret deletion at the end of the waiting period is performed as a background task with low priority. There is no guarantee of a specific time after the recovery window for the actual delete operation to occur.</p> </li> </ul> </note> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:DeleteSecret</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To create a secret, use <a>CreateSecret</a>.</p> </li> <li> <p>To cancel deletion of a version of a secret before the recovery window has expired, use <a>RestoreSecret</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.DeleteSecret
		 * @return {DeleteSecretResponse} Success
		 */
		DeleteSecret(requestBody: DeleteSecretRequest): Observable<DeleteSecretResponse> {
			return this.http.post<DeleteSecretResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.DeleteSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the details of a secret. It does not include the encrypted fields. Only those fields that are populated with a value are returned in the response. </p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:DescribeSecret</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To create a secret, use <a>CreateSecret</a>.</p> </li> <li> <p>To modify a secret, use <a>UpdateSecret</a>.</p> </li> <li> <p>To retrieve the encrypted secret information in a version of the secret, use <a>GetSecretValue</a>.</p> </li> <li> <p>To list all of the secrets in the AWS account, use <a>ListSecrets</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.DescribeSecret
		 * @return {DescribeSecretResponse} Success
		 */
		DescribeSecret(requestBody: DescribeSecretRequest): Observable<DescribeSecretResponse> {
			return this.http.post<DescribeSecretResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.DescribeSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates a random password of the specified complexity. This operation is intended for use in the Lambda rotation function. Per best practice, we recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:GetRandomPassword</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.GetRandomPassword
		 * @return {GetRandomPasswordResponse} Success
		 */
		GetRandomPassword(requestBody: GetRandomPasswordRequest): Observable<GetRandomPasswordResponse> {
			return this.http.post<GetRandomPasswordResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.GetRandomPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the JSON text of the resource-based policy document that's attached to the specified secret. The JSON request string input and response output are shown formatted with white space and line breaks for better readability. Submit your input as a single line JSON string.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:GetResourcePolicy</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To attach a resource policy to a secret, use <a>PutResourcePolicy</a>.</p> </li> <li> <p>To delete the resource-based policy that's attached to a secret, use <a>DeleteResourcePolicy</a>.</p> </li> <li> <p>To list all of the currently available secrets, use <a>ListSecrets</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.GetResourcePolicy
		 * @return {GetResourcePolicyResponse} Success
		 */
		GetResourcePolicy(requestBody: GetResourcePolicyRequest): Observable<GetResourcePolicyResponse> {
			return this.http.post<GetResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.GetResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the contents of the encrypted fields <code>SecretString</code> or <code>SecretBinary</code> from the specified version of a secret, whichever contains content.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:GetSecretValue</p> </li> <li> <p>kms:Decrypt - required only if you use a customer-managed AWS KMS key to encrypt the secret. You do not need this permission to use the account's default AWS managed CMK for Secrets Manager.</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To create a new version of the secret with different encrypted information, use <a>PutSecretValue</a>.</p> </li> <li> <p>To retrieve the non-encrypted details for the secret, use <a>DescribeSecret</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.GetSecretValue
		 * @return {GetSecretValueResponse} Success
		 */
		GetSecretValue(requestBody: GetSecretValueRequest): Observable<GetSecretValueResponse> {
			return this.http.post<GetSecretValueResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.GetSecretValue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all of the versions attached to the specified secret. The output does not include the <code>SecretString</code> or <code>SecretBinary</code> fields. By default, the list includes only versions that have at least one staging label in <code>VersionStage</code> attached.</p> <note> <p>Always check the <code>NextToken</code> response parameter when calling any of the <code>List*</code> operations. These operations can occasionally return an empty or shorter than expected list of results even when there are more results available. When this happens, the <code>NextToken</code> response parameter contains a value to pass to the next call to the same API to request the next part of the list.</p> </note> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:ListSecretVersionIds</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To list the secrets in an account, use <a>ListSecrets</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.ListSecretVersionIds
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSecretVersionIdsResponse} Success
		 */
		ListSecretVersionIds(MaxResults: string, NextToken: string, requestBody: ListSecretVersionIdsRequest): Observable<ListSecretVersionIdsResponse> {
			return this.http.post<ListSecretVersionIdsResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.ListSecretVersionIds?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all of the secrets that are stored by Secrets Manager in the AWS account. To list the versions currently stored for a specific secret, use <a>ListSecretVersionIds</a>. The encrypted fields <code>SecretString</code> and <code>SecretBinary</code> are not included in the output. To get that information, call the <a>GetSecretValue</a> operation.</p> <note> <p>Always check the <code>NextToken</code> response parameter when calling any of the <code>List*</code> operations. These operations can occasionally return an empty or shorter than expected list of results even when there are more results available. When this happens, the <code>NextToken</code> response parameter contains a value to pass to the next call to the same API to request the next part of the list.</p> </note> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:ListSecrets</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To list the versions attached to a secret, use <a>ListSecretVersionIds</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.ListSecrets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSecretsResponse} Success
		 */
		ListSecrets(MaxResults: string, NextToken: string, requestBody: ListSecretsRequest): Observable<ListSecretsResponse> {
			return this.http.post<ListSecretsResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.ListSecrets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches the contents of the specified resource-based permission policy to a secret. A resource-based policy is optional. Alternatively, you can use IAM identity-based policies that specify the secret's Amazon Resource Name (ARN) in the policy statement's <code>Resources</code> element. You can also use a combination of both identity-based and resource-based policies. The affected users and roles receive the permissions that are permitted by all of the relevant policies. For more information, see <a href="http://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html">Using Resource-Based Policies for AWS Secrets Manager</a>. For the complete description of the AWS policy syntax and grammar, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html">IAM JSON Policy Reference</a> in the <i>IAM User Guide</i>.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:PutResourcePolicy</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To retrieve the resource policy that's attached to a secret, use <a>GetResourcePolicy</a>.</p> </li> <li> <p>To delete the resource-based policy that's attached to a secret, use <a>DeleteResourcePolicy</a>.</p> </li> <li> <p>To list all of the currently available secrets, use <a>ListSecrets</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.PutResourcePolicy
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyRequest): Observable<PutResourcePolicyResponse> {
			return this.http.post<PutResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.PutResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stores a new encrypted secret value in the specified secret. To do this, the operation creates a new version and attaches it to the secret. The version can contain a new <code>SecretString</code> value or a new <code>SecretBinary</code> value. You can also specify the staging labels that are initially attached to the new version.</p> <note> <p>The Secrets Manager console uses only the <code>SecretString</code> field. To add binary data to a secret with the <code>SecretBinary</code> field you must use the AWS CLI or one of the AWS SDKs.</p> </note> <ul> <li> <p>If this operation creates the first version for the secret then Secrets Manager automatically attaches the staging label <code>AWSCURRENT</code> to the new version.</p> </li> <li> <p>If another version of this secret already exists, then this operation does not automatically move any staging labels other than those that you explicitly specify in the <code>VersionStages</code> parameter.</p> </li> <li> <p>If this operation moves the staging label <code>AWSCURRENT</code> from another version to this version (because you included it in the <code>StagingLabels</code> parameter) then Secrets Manager also automatically moves the staging label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> </li> <li> <p>This operation is idempotent. If a version with a <code>VersionId</code> with the same value as the <code>ClientRequestToken</code> parameter already exists and you specify the same secret data, the operation succeeds but does nothing. However, if the secret data is different, then the operation fails because you cannot modify an existing version; you can only create new ones.</p> </li> </ul> <note> <ul> <li> <p>If you call an operation that needs to encrypt or decrypt the <code>SecretString</code> or <code>SecretBinary</code> for a secret in the same account as the calling user and that secret doesn't specify a AWS KMS encryption key, Secrets Manager uses the account's default AWS managed customer master key (CMK) with the alias <code>aws/secretsmanager</code>. If this key doesn't already exist in your account then Secrets Manager creates it for you automatically. All users and roles in the same AWS account automatically have access to use the default CMK. Note that if an Secrets Manager API call results in AWS having to create the account's AWS-managed CMK, it can result in a one-time significant delay in returning the result.</p> </li> <li> <p>If the secret is in a different AWS account from the credentials calling an API that requires encryption or decryption of the secret value then you must create and use a custom AWS KMS CMK because you can't access the default CMK for the account using credentials from a different AWS account. Store the ARN of the CMK in the secret when you create the secret or when you update it by including it in the <code>KMSKeyId</code>. If you call an API that must encrypt or decrypt <code>SecretString</code> or <code>SecretBinary</code> using credentials from a different account then the AWS KMS key policy must grant cross-account access to that other account's user or role for both the kms:GenerateDataKey and kms:Decrypt operations.</p> </li> </ul> </note> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:PutSecretValue</p> </li> <li> <p>kms:GenerateDataKey - needed only if you use a customer-managed AWS KMS key to encrypt the secret. You do not need this permission to use the account's default AWS managed CMK for Secrets Manager.</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To retrieve the encrypted value you store in the version of a secret, use <a>GetSecretValue</a>.</p> </li> <li> <p>To create a secret, use <a>CreateSecret</a>.</p> </li> <li> <p>To get the details for a secret, use <a>DescribeSecret</a>.</p> </li> <li> <p>To list the versions attached to a secret, use <a>ListSecretVersionIds</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.PutSecretValue
		 * @return {PutSecretValueResponse} Success
		 */
		PutSecretValue(requestBody: PutSecretValueRequest): Observable<PutSecretValueResponse> {
			return this.http.post<PutSecretValueResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.PutSecretValue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Cancels the scheduled deletion of a secret by removing the <code>DeletedDate</code> time stamp. This makes the secret accessible to query once again.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:RestoreSecret</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To delete a secret, use <a>DeleteSecret</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.RestoreSecret
		 * @return {RestoreSecretResponse} Success
		 */
		RestoreSecret(requestBody: RestoreSecretRequest): Observable<RestoreSecretResponse> {
			return this.http.post<RestoreSecretResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.RestoreSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Configures and starts the asynchronous process of rotating this secret. If you include the configuration parameters, the operation sets those values for the secret and then immediately starts a rotation. If you do not include the configuration parameters, the operation starts a rotation with the values already stored in the secret. After the rotation completes, the protected service and its clients all use the new version of the secret. </p> <p>This required configuration information includes the ARN of an AWS Lambda function and the time between scheduled rotations. The Lambda rotation function creates a new version of the secret and creates or updates the credentials on the protected service to match. After testing the new credentials, the function marks the new secret with the staging label <code>AWSCURRENT</code> so that your clients all immediately begin to use the new version. For more information about rotating secrets and how to configure a Lambda function to rotate the secrets for your protected service, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html">Rotating Secrets in AWS Secrets Manager</a> in the <i>AWS Secrets Manager User Guide</i>.</p> <p>Secrets Manager schedules the next rotation when the previous one is complete. Secrets Manager schedules the date by adding the rotation interval (number of days) to the actual date of the last rotation. The service chooses the hour within that 24-hour date window randomly. The minute is also chosen somewhat randomly, but weighted towards the top of the hour and influenced by a variety of factors that help distribute load.</p> <p>The rotation function must end with the versions of the secret in one of two states:</p> <ul> <li> <p>The <code>AWSPENDING</code> and <code>AWSCURRENT</code> staging labels are attached to the same version of the secret, or</p> </li> <li> <p>The <code>AWSPENDING</code> staging label is not attached to any version of the secret.</p> </li> </ul> <p>If instead the <code>AWSPENDING</code> staging label is present but is not attached to the same version as <code>AWSCURRENT</code> then any later invocation of <code>RotateSecret</code> assumes that a previous rotation request is still in progress and returns an error.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:RotateSecret</p> </li> <li> <p>lambda:InvokeFunction (on the function specified in the secret's metadata)</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To list the secrets in your account, use <a>ListSecrets</a>.</p> </li> <li> <p>To get the details for a version of a secret, use <a>DescribeSecret</a>.</p> </li> <li> <p>To create a new version of a secret, use <a>CreateSecret</a>.</p> </li> <li> <p>To attach staging labels to or remove staging labels from a version of a secret, use <a>UpdateSecretVersionStage</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.RotateSecret
		 * @return {RotateSecretResponse} Success
		 */
		RotateSecret(requestBody: RotateSecretRequest): Observable<RotateSecretResponse> {
			return this.http.post<RotateSecretResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.RotateSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches one or more tags, each consisting of a key name and a value, to the specified secret. Tags are part of the secret's overall metadata, and are not associated with any specific version of the secret. This operation only appends tags to the existing list of tags. To remove tags, you must use <a>UntagResource</a>.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per secret—50</p> </li> <li> <p>Maximum key length—127 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length—255 Unicode characters in UTF-8</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use the <code>aws:</code> prefix in your tag names or values because it is reserved for AWS use. You can't edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.</p> </li> <li> <p>If your tagging schema will be used across multiple services and resources, remember that other services might have restrictions on allowed characters. Generally allowed characters are: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : / @.</p> </li> </ul> <important> <p>If you use tags as part of your security strategy, then adding or removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error.</p> </important> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:TagResource</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To remove one or more tags from the collection attached to a secret, use <a>UntagResource</a>.</p> </li> <li> <p>To view the list of tags attached to a secret, use <a>DescribeSecret</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.TagResource
		 * @return {void} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=secretsmanager.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes one or more tags from the specified secret.</p> <p>This operation is idempotent. If a requested tag is not attached to the secret, no error is returned and the secret metadata is unchanged.</p> <important> <p>If you use tags as part of your security strategy, then removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error.</p> </important> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:UntagResource</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To add one or more tags to the collection attached to a secret, use <a>TagResource</a>.</p> </li> <li> <p>To view the list of tags attached to a secret, use <a>DescribeSecret</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.UntagResource
		 * @return {void} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=secretsmanager.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modifies many of the details of the specified secret. If you include a <code>ClientRequestToken</code> and <i>either</i> <code>SecretString</code> or <code>SecretBinary</code> then it also creates a new version attached to the secret.</p> <p>To modify the rotation configuration of a secret, use <a>RotateSecret</a> instead.</p> <note> <p>The Secrets Manager console uses only the <code>SecretString</code> parameter and therefore limits you to encrypting and storing only a text string. To encrypt and store binary data as part of the version of a secret, you must use either the AWS CLI or one of the AWS SDKs.</p> </note> <ul> <li> <p>If a version with a <code>VersionId</code> with the same value as the <code>ClientRequestToken</code> parameter already exists, the operation results in an error. You cannot modify an existing version, you can only create a new version.</p> </li> <li> <p>If you include <code>SecretString</code> or <code>SecretBinary</code> to create a new secret version, Secrets Manager automatically attaches the staging label <code>AWSCURRENT</code> to the new version. </p> </li> </ul> <note> <ul> <li> <p>If you call an operation that needs to encrypt or decrypt the <code>SecretString</code> or <code>SecretBinary</code> for a secret in the same account as the calling user and that secret doesn't specify a AWS KMS encryption key, Secrets Manager uses the account's default AWS managed customer master key (CMK) with the alias <code>aws/secretsmanager</code>. If this key doesn't already exist in your account then Secrets Manager creates it for you automatically. All users and roles in the same AWS account automatically have access to use the default CMK. Note that if an Secrets Manager API call results in AWS having to create the account's AWS-managed CMK, it can result in a one-time significant delay in returning the result.</p> </li> <li> <p>If the secret is in a different AWS account from the credentials calling an API that requires encryption or decryption of the secret value then you must create and use a custom AWS KMS CMK because you can't access the default CMK for the account using credentials from a different AWS account. Store the ARN of the CMK in the secret when you create the secret or when you update it by including it in the <code>KMSKeyId</code>. If you call an API that must encrypt or decrypt <code>SecretString</code> or <code>SecretBinary</code> using credentials from a different account then the AWS KMS key policy must grant cross-account access to that other account's user or role for both the kms:GenerateDataKey and kms:Decrypt operations.</p> </li> </ul> </note> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:UpdateSecret</p> </li> <li> <p>kms:GenerateDataKey - needed only if you use a custom AWS KMS key to encrypt the secret. You do not need this permission to use the account's AWS managed CMK for Secrets Manager.</p> </li> <li> <p>kms:Decrypt - needed only if you use a custom AWS KMS key to encrypt the secret. You do not need this permission to use the account's AWS managed CMK for Secrets Manager.</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To create a new secret, use <a>CreateSecret</a>.</p> </li> <li> <p>To add only a new version to an existing secret, use <a>PutSecretValue</a>.</p> </li> <li> <p>To get the details for a secret, use <a>DescribeSecret</a>.</p> </li> <li> <p>To list the versions contained in a secret, use <a>ListSecretVersionIds</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.UpdateSecret
		 * @return {UpdateSecretResponse} Success
		 */
		UpdateSecret(requestBody: UpdateSecretRequest): Observable<UpdateSecretResponse> {
			return this.http.post<UpdateSecretResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.UpdateSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the staging labels attached to a version of a secret. Staging labels are used to track a version as it progresses through the secret rotation process. You can attach a staging label to only one version of a secret at a time. If a staging label to be added is already attached to another version, then it is moved--removed from the other version first and then attached to this one. For more information about staging labels, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/terms-concepts.html#term_staging-label">Staging Labels</a> in the <i>AWS Secrets Manager User Guide</i>. </p> <p>The staging labels that you specify in the <code>VersionStage</code> parameter are added to the existing list of staging labels--they don't replace it.</p> <p>You can move the <code>AWSCURRENT</code> staging label to this version by including it in this call.</p> <note> <p>Whenever you move <code>AWSCURRENT</code>, Secrets Manager automatically moves the label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> </note> <p>If this action results in the last label being removed from a version, then the version is considered to be 'deprecated' and can be deleted by Secrets Manager.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p>secretsmanager:UpdateSecretVersionStage</p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p>To get the list of staging labels that are currently associated with a version of a secret, use <code> <a>DescribeSecret</a> </code> and examine the <code>SecretVersionsToStages</code> response value. </p> </li> </ul>
		 * Post #X-Amz-Target=secretsmanager.UpdateSecretVersionStage
		 * @return {UpdateSecretVersionStageResponse} Success
		 */
		UpdateSecretVersionStage(requestBody: UpdateSecretVersionStageRequest): Observable<UpdateSecretVersionStageResponse> {
			return this.http.post<UpdateSecretVersionStageResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.UpdateSecretVersionStage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CancelRotateSecretX_Amz_Target { secretsmanager_CancelRotateSecret = 0 }

	export enum CreateSecretX_Amz_Target { secretsmanager_CreateSecret = 0 }

	export enum DeleteResourcePolicyX_Amz_Target { secretsmanager_DeleteResourcePolicy = 0 }

	export enum DeleteSecretX_Amz_Target { secretsmanager_DeleteSecret = 0 }

	export enum DescribeSecretX_Amz_Target { secretsmanager_DescribeSecret = 0 }

	export enum GetRandomPasswordX_Amz_Target { secretsmanager_GetRandomPassword = 0 }

	export enum GetResourcePolicyX_Amz_Target { secretsmanager_GetResourcePolicy = 0 }

	export enum GetSecretValueX_Amz_Target { secretsmanager_GetSecretValue = 0 }

	export enum ListSecretVersionIdsX_Amz_Target { secretsmanager_ListSecretVersionIds = 0 }

	export enum ListSecretsX_Amz_Target { secretsmanager_ListSecrets = 0 }

	export enum PutResourcePolicyX_Amz_Target { secretsmanager_PutResourcePolicy = 0 }

	export enum PutSecretValueX_Amz_Target { secretsmanager_PutSecretValue = 0 }

	export enum RestoreSecretX_Amz_Target { secretsmanager_RestoreSecret = 0 }

	export enum RotateSecretX_Amz_Target { secretsmanager_RotateSecret = 0 }

	export enum TagResourceX_Amz_Target { secretsmanager_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { secretsmanager_UntagResource = 0 }

	export enum UpdateSecretX_Amz_Target { secretsmanager_UpdateSecret = 0 }

	export enum UpdateSecretVersionStageX_Amz_Target { secretsmanager_UpdateSecretVersionStage = 0 }

}

