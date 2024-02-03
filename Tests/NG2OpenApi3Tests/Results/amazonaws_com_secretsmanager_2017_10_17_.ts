import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelRotateSecretResponse {
		ARN?: string;
		Name?: string;
		VersionId?: string;
	}
	export interface CancelRotateSecretResponseFormProperties {
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateCancelRotateSecretResponseFormGroup() {
		return new FormGroup<CancelRotateSecretResponseFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CancelRotateSecretRequest {

		/** Required */
		SecretId: string;
	}
	export interface CancelRotateSecretRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,
	}
	export function CreateCancelRotateSecretRequestFormGroup() {
		return new FormGroup<CancelRotateSecretRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface InternalServiceError {
	}
	export interface InternalServiceErrorFormProperties {
	}
	export function CreateInternalServiceErrorFormGroup() {
		return new FormGroup<InternalServiceErrorFormProperties>({
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface CreateSecretResponse {
		ARN?: string;
		Name?: string;
		VersionId?: string;
		ReplicationStatus?: Array<ReplicationStatusType>;
	}
	export interface CreateSecretResponseFormProperties {
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSecretResponseFormGroup() {
		return new FormGroup<CreateSecretResponseFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A replication object consisting of a <code>RegionReplicationStatus</code> object and includes a Region, KMSKeyId, status, and status message. */
	export interface ReplicationStatusType {
		Region?: string;
		KmsKeyId?: string;
		Status?: StatusType;
		StatusMessage?: string;
		LastAccessedDate?: Date;
	}

	/** A replication object consisting of a <code>RegionReplicationStatus</code> object and includes a Region, KMSKeyId, status, and status message. */
	export interface ReplicationStatusTypeFormProperties {
		Region: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		Status: FormControl<StatusType | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		LastAccessedDate: FormControl<Date | null | undefined>,
	}
	export function CreateReplicationStatusTypeFormGroup() {
		return new FormGroup<ReplicationStatusTypeFormProperties>({
			Region: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<StatusType | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			LastAccessedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum StatusType { InSync = 'InSync', Failed = 'Failed', InProgress = 'InProgress' }

	export interface CreateSecretRequest {

		/** Required */
		Name: string;
		ClientRequestToken?: string;
		Description?: string;
		KmsKeyId?: string;
		SecretBinary?: string;
		SecretString?: string;
		Tags?: Array<Tag>;
		AddReplicaRegions?: Array<ReplicaRegionType>;
		ForceOverwriteReplicaSecret?: boolean | null;
	}
	export interface CreateSecretRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		SecretBinary: FormControl<string | null | undefined>,
		SecretString: FormControl<string | null | undefined>,
		ForceOverwriteReplicaSecret: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateSecretRequestFormGroup() {
		return new FormGroup<CreateSecretRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			SecretBinary: new FormControl<string | null | undefined>(undefined),
			SecretString: new FormControl<string | null | undefined>(undefined),
			ForceOverwriteReplicaSecret: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A structure that contains information about a tag. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** A structure that contains information about a tag. */
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


	/** A custom type that specifies a <code>Region</code> and the <code>KmsKeyId</code> for a replica secret. */
	export interface ReplicaRegionType {
		Region?: string;
		KmsKeyId?: string;
	}

	/** A custom type that specifies a <code>Region</code> and the <code>KmsKeyId</code> for a replica secret. */
	export interface ReplicaRegionTypeFormProperties {
		Region: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateReplicaRegionTypeFormGroup() {
		return new FormGroup<ReplicaRegionTypeFormProperties>({
			Region: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
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

	export interface EncryptionFailure {
	}
	export interface EncryptionFailureFormProperties {
	}
	export function CreateEncryptionFailureFormGroup() {
		return new FormGroup<EncryptionFailureFormProperties>({
		});

	}

	export interface ResourceExistsException {
	}
	export interface ResourceExistsExceptionFormProperties {
	}
	export function CreateResourceExistsExceptionFormGroup() {
		return new FormGroup<ResourceExistsExceptionFormProperties>({
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

	export interface PreconditionNotMetException {
	}
	export interface PreconditionNotMetExceptionFormProperties {
	}
	export function CreatePreconditionNotMetExceptionFormGroup() {
		return new FormGroup<PreconditionNotMetExceptionFormProperties>({
		});

	}

	export interface DecryptionFailure {
	}
	export interface DecryptionFailureFormProperties {
	}
	export function CreateDecryptionFailureFormGroup() {
		return new FormGroup<DecryptionFailureFormProperties>({
		});

	}

	export interface DeleteResourcePolicyResponse {
		ARN?: string;
		Name?: string;
	}
	export interface DeleteResourcePolicyResponseFormProperties {
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyResponseFormGroup() {
		return new FormGroup<DeleteResourcePolicyResponseFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteResourcePolicyRequest {

		/** Required */
		SecretId: string;
	}
	export interface DeleteResourcePolicyRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSecretResponse {
		ARN?: string;
		Name?: string;
		DeletionDate?: Date;
	}
	export interface DeleteSecretResponseFormProperties {
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DeletionDate: FormControl<Date | null | undefined>,
	}
	export function CreateDeleteSecretResponseFormGroup() {
		return new FormGroup<DeleteSecretResponseFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			DeletionDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeleteSecretRequest {

		/** Required */
		SecretId: string;
		RecoveryWindowInDays?: number | null;
		ForceDeleteWithoutRecovery?: boolean | null;
	}
	export interface DeleteSecretRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,
		RecoveryWindowInDays: FormControl<number | null | undefined>,
		ForceDeleteWithoutRecovery: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteSecretRequestFormGroup() {
		return new FormGroup<DeleteSecretRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecoveryWindowInDays: new FormControl<number | null | undefined>(undefined),
			ForceDeleteWithoutRecovery: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeSecretResponse {
		ARN?: string;
		Name?: string;
		Description?: string;
		KmsKeyId?: string;
		RotationEnabled?: boolean | null;
		RotationLambdaARN?: string;
		RotationRules?: RotationRulesType;
		LastRotatedDate?: Date;
		LastChangedDate?: Date;
		LastAccessedDate?: Date;
		DeletedDate?: Date;
		NextRotationDate?: Date;
		Tags?: Array<Tag>;
		VersionIdsToStages?: SecretVersionsToStagesMapType;
		OwningService?: string;
		CreatedDate?: Date;
		PrimaryRegion?: string;
		ReplicationStatus?: Array<ReplicationStatusType>;
	}
	export interface DescribeSecretResponseFormProperties {
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		RotationEnabled: FormControl<boolean | null | undefined>,
		RotationLambdaARN: FormControl<string | null | undefined>,
		LastRotatedDate: FormControl<Date | null | undefined>,
		LastChangedDate: FormControl<Date | null | undefined>,
		LastAccessedDate: FormControl<Date | null | undefined>,
		DeletedDate: FormControl<Date | null | undefined>,
		NextRotationDate: FormControl<Date | null | undefined>,
		OwningService: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		PrimaryRegion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSecretResponseFormGroup() {
		return new FormGroup<DescribeSecretResponseFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			RotationEnabled: new FormControl<boolean | null | undefined>(undefined),
			RotationLambdaARN: new FormControl<string | null | undefined>(undefined),
			LastRotatedDate: new FormControl<Date | null | undefined>(undefined),
			LastChangedDate: new FormControl<Date | null | undefined>(undefined),
			LastAccessedDate: new FormControl<Date | null | undefined>(undefined),
			DeletedDate: new FormControl<Date | null | undefined>(undefined),
			NextRotationDate: new FormControl<Date | null | undefined>(undefined),
			OwningService: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			PrimaryRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that defines the rotation configuration for the secret. */
	export interface RotationRulesType {
		AutomaticallyAfterDays?: number | null;
		Duration?: string;
		ScheduleExpression?: string;
	}

	/** A structure that defines the rotation configuration for the secret. */
	export interface RotationRulesTypeFormProperties {
		AutomaticallyAfterDays: FormControl<number | null | undefined>,
		Duration: FormControl<string | null | undefined>,
		ScheduleExpression: FormControl<string | null | undefined>,
	}
	export function CreateRotationRulesTypeFormGroup() {
		return new FormGroup<RotationRulesTypeFormProperties>({
			AutomaticallyAfterDays: new FormControl<number | null | undefined>(undefined),
			Duration: new FormControl<string | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SecretVersionsToStagesMapType {
	}
	export interface SecretVersionsToStagesMapTypeFormProperties {
	}
	export function CreateSecretVersionsToStagesMapTypeFormGroup() {
		return new FormGroup<SecretVersionsToStagesMapTypeFormProperties>({
		});

	}

	export interface DescribeSecretRequest {

		/** Required */
		SecretId: string;
	}
	export interface DescribeSecretRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSecretRequestFormGroup() {
		return new FormGroup<DescribeSecretRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRandomPasswordResponse {
		RandomPassword?: string;
	}
	export interface GetRandomPasswordResponseFormProperties {
		RandomPassword: FormControl<string | null | undefined>,
	}
	export function CreateGetRandomPasswordResponseFormGroup() {
		return new FormGroup<GetRandomPasswordResponseFormProperties>({
			RandomPassword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRandomPasswordRequest {
		PasswordLength?: number | null;
		ExcludeCharacters?: string;
		ExcludeNumbers?: boolean | null;
		ExcludePunctuation?: boolean | null;
		ExcludeUppercase?: boolean | null;
		ExcludeLowercase?: boolean | null;
		IncludeSpace?: boolean | null;
		RequireEachIncludedType?: boolean | null;
	}
	export interface GetRandomPasswordRequestFormProperties {
		PasswordLength: FormControl<number | null | undefined>,
		ExcludeCharacters: FormControl<string | null | undefined>,
		ExcludeNumbers: FormControl<boolean | null | undefined>,
		ExcludePunctuation: FormControl<boolean | null | undefined>,
		ExcludeUppercase: FormControl<boolean | null | undefined>,
		ExcludeLowercase: FormControl<boolean | null | undefined>,
		IncludeSpace: FormControl<boolean | null | undefined>,
		RequireEachIncludedType: FormControl<boolean | null | undefined>,
	}
	export function CreateGetRandomPasswordRequestFormGroup() {
		return new FormGroup<GetRandomPasswordRequestFormProperties>({
			PasswordLength: new FormControl<number | null | undefined>(undefined),
			ExcludeCharacters: new FormControl<string | null | undefined>(undefined),
			ExcludeNumbers: new FormControl<boolean | null | undefined>(undefined),
			ExcludePunctuation: new FormControl<boolean | null | undefined>(undefined),
			ExcludeUppercase: new FormControl<boolean | null | undefined>(undefined),
			ExcludeLowercase: new FormControl<boolean | null | undefined>(undefined),
			IncludeSpace: new FormControl<boolean | null | undefined>(undefined),
			RequireEachIncludedType: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetResourcePolicyResponse {
		ARN?: string;
		Name?: string;
		ResourcePolicy?: string;
	}
	export interface GetResourcePolicyResponseFormProperties {
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ResourcePolicy: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePolicyResponseFormGroup() {
		return new FormGroup<GetResourcePolicyResponseFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ResourcePolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResourcePolicyRequest {

		/** Required */
		SecretId: string;
	}
	export interface GetResourcePolicyRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePolicyRequestFormGroup() {
		return new FormGroup<GetResourcePolicyRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSecretValueResponse {
		ARN?: string;
		Name?: string;
		VersionId?: string;
		SecretBinary?: string;
		SecretString?: string;
		VersionStages?: Array<string>;
		CreatedDate?: Date;
	}
	export interface GetSecretValueResponseFormProperties {
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
		SecretBinary: FormControl<string | null | undefined>,
		SecretString: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetSecretValueResponseFormGroup() {
		return new FormGroup<GetSecretValueResponseFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
			SecretBinary: new FormControl<string | null | undefined>(undefined),
			SecretString: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetSecretValueRequest {

		/** Required */
		SecretId: string;
		VersionId?: string;
		VersionStage?: string;
	}
	export interface GetSecretValueRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
		VersionStage: FormControl<string | null | undefined>,
	}
	export function CreateGetSecretValueRequestFormGroup() {
		return new FormGroup<GetSecretValueRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VersionId: new FormControl<string | null | undefined>(undefined),
			VersionStage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSecretVersionIdsResponse {
		Versions?: Array<SecretVersionsListEntry>;
		NextToken?: string;
		ARN?: string;
		Name?: string;
	}
	export interface ListSecretVersionIdsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateListSecretVersionIdsResponseFormGroup() {
		return new FormGroup<ListSecretVersionIdsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains information about one version of a secret. */
	export interface SecretVersionsListEntry {
		VersionId?: string;
		VersionStages?: Array<string>;
		LastAccessedDate?: Date;
		CreatedDate?: Date;
		KmsKeyIds?: Array<string>;
	}

	/** A structure that contains information about one version of a secret. */
	export interface SecretVersionsListEntryFormProperties {
		VersionId: FormControl<string | null | undefined>,
		LastAccessedDate: FormControl<Date | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateSecretVersionsListEntryFormGroup() {
		return new FormGroup<SecretVersionsListEntryFormProperties>({
			VersionId: new FormControl<string | null | undefined>(undefined),
			LastAccessedDate: new FormControl<Date | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListSecretVersionIdsRequest {

		/** Required */
		SecretId: string;
		MaxResults?: number | null;
		NextToken?: string;
		IncludeDeprecated?: boolean | null;
	}
	export interface ListSecretVersionIdsRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		IncludeDeprecated: FormControl<boolean | null | undefined>,
	}
	export function CreateListSecretVersionIdsRequestFormGroup() {
		return new FormGroup<ListSecretVersionIdsRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			IncludeDeprecated: new FormControl<boolean | null | undefined>(undefined),
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

	export interface ListSecretsResponse {
		SecretList?: Array<SecretListEntry>;
		NextToken?: string;
	}
	export interface ListSecretsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSecretsResponseFormGroup() {
		return new FormGroup<ListSecretsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains the details about a secret. It does not include the encrypted <code>SecretString</code> and <code>SecretBinary</code> values. To get those values, use <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html">GetSecretValue</a> . */
	export interface SecretListEntry {
		ARN?: string;
		Name?: string;
		Description?: string;
		KmsKeyId?: string;
		RotationEnabled?: boolean | null;
		RotationLambdaARN?: string;
		RotationRules?: RotationRulesType;
		LastRotatedDate?: Date;
		LastChangedDate?: Date;
		LastAccessedDate?: Date;
		DeletedDate?: Date;
		NextRotationDate?: Date;
		Tags?: Array<Tag>;
		SecretVersionsToStages?: SecretVersionsToStagesMapType;
		OwningService?: string;
		CreatedDate?: Date;
		PrimaryRegion?: string;
	}

	/** A structure that contains the details about a secret. It does not include the encrypted <code>SecretString</code> and <code>SecretBinary</code> values. To get those values, use <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html">GetSecretValue</a> . */
	export interface SecretListEntryFormProperties {
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		RotationEnabled: FormControl<boolean | null | undefined>,
		RotationLambdaARN: FormControl<string | null | undefined>,
		LastRotatedDate: FormControl<Date | null | undefined>,
		LastChangedDate: FormControl<Date | null | undefined>,
		LastAccessedDate: FormControl<Date | null | undefined>,
		DeletedDate: FormControl<Date | null | undefined>,
		NextRotationDate: FormControl<Date | null | undefined>,
		OwningService: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		PrimaryRegion: FormControl<string | null | undefined>,
	}
	export function CreateSecretListEntryFormGroup() {
		return new FormGroup<SecretListEntryFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			RotationEnabled: new FormControl<boolean | null | undefined>(undefined),
			RotationLambdaARN: new FormControl<string | null | undefined>(undefined),
			LastRotatedDate: new FormControl<Date | null | undefined>(undefined),
			LastChangedDate: new FormControl<Date | null | undefined>(undefined),
			LastAccessedDate: new FormControl<Date | null | undefined>(undefined),
			DeletedDate: new FormControl<Date | null | undefined>(undefined),
			NextRotationDate: new FormControl<Date | null | undefined>(undefined),
			OwningService: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			PrimaryRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSecretsRequest {
		IncludePlannedDeletion?: boolean | null;
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<Filter>;
		SortOrder?: SortOrderType;
	}
	export interface ListSecretsRequestFormProperties {
		IncludePlannedDeletion: FormControl<boolean | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrderType | null | undefined>,
	}
	export function CreateListSecretsRequestFormGroup() {
		return new FormGroup<ListSecretsRequestFormProperties>({
			IncludePlannedDeletion: new FormControl<boolean | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrderType | null | undefined>(undefined),
		});

	}


	/** Allows you to add filters when you use the search function in Secrets Manager. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html">Find secrets in Secrets Manager</a>. */
	export interface Filter {
		Key?: FilterNameStringType;
		Values?: Array<string>;
	}

	/** Allows you to add filters when you use the search function in Secrets Manager. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html">Find secrets in Secrets Manager</a>. */
	export interface FilterFormProperties {
		Key: FormControl<FilterNameStringType | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Key: new FormControl<FilterNameStringType | null | undefined>(undefined),
		});

	}

	export enum FilterNameStringType { description = 'description', name = 'name', 'tag-key' = 'tag-key', 'tag-value' = 'tag-value', 'primary-region' = 'primary-region', 'owning-service' = 'owning-service', all = 'all' }

	export enum SortOrderType { asc = 'asc', desc = 'desc' }

	export interface PutResourcePolicyResponse {
		ARN?: string;
		Name?: string;
	}
	export interface PutResourcePolicyResponseFormProperties {
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyResponseFormGroup() {
		return new FormGroup<PutResourcePolicyResponseFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutResourcePolicyRequest {

		/** Required */
		SecretId: string;

		/** Required */
		ResourcePolicy: string;
		BlockPublicPolicy?: boolean | null;
	}
	export interface PutResourcePolicyRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,

		/** Required */
		ResourcePolicy: FormControl<string | null | undefined>,
		BlockPublicPolicy: FormControl<boolean | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourcePolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BlockPublicPolicy: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PublicPolicyException {
	}
	export interface PublicPolicyExceptionFormProperties {
	}
	export function CreatePublicPolicyExceptionFormGroup() {
		return new FormGroup<PublicPolicyExceptionFormProperties>({
		});

	}

	export interface PutSecretValueResponse {
		ARN?: string;
		Name?: string;
		VersionId?: string;
		VersionStages?: Array<string>;
	}
	export interface PutSecretValueResponseFormProperties {
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreatePutSecretValueResponseFormGroup() {
		return new FormGroup<PutSecretValueResponseFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutSecretValueRequest {

		/** Required */
		SecretId: string;
		ClientRequestToken?: string;
		SecretBinary?: string;
		SecretString?: string;
		VersionStages?: Array<string>;
	}
	export interface PutSecretValueRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		SecretBinary: FormControl<string | null | undefined>,
		SecretString: FormControl<string | null | undefined>,
	}
	export function CreatePutSecretValueRequestFormGroup() {
		return new FormGroup<PutSecretValueRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			SecretBinary: new FormControl<string | null | undefined>(undefined),
			SecretString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveRegionsFromReplicationResponse {
		ARN?: string;
		ReplicationStatus?: Array<ReplicationStatusType>;
	}
	export interface RemoveRegionsFromReplicationResponseFormProperties {
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateRemoveRegionsFromReplicationResponseFormGroup() {
		return new FormGroup<RemoveRegionsFromReplicationResponseFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveRegionsFromReplicationRequest {

		/** Required */
		SecretId: string;

		/** Required */
		RemoveReplicaRegions: Array<string>;
	}
	export interface RemoveRegionsFromReplicationRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveRegionsFromReplicationRequestFormGroup() {
		return new FormGroup<RemoveRegionsFromReplicationRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReplicateSecretToRegionsResponse {
		ARN?: string;
		ReplicationStatus?: Array<ReplicationStatusType>;
	}
	export interface ReplicateSecretToRegionsResponseFormProperties {
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateReplicateSecretToRegionsResponseFormGroup() {
		return new FormGroup<ReplicateSecretToRegionsResponseFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReplicateSecretToRegionsRequest {

		/** Required */
		SecretId: string;

		/** Required */
		AddReplicaRegions: Array<ReplicaRegionType>;
		ForceOverwriteReplicaSecret?: boolean | null;
	}
	export interface ReplicateSecretToRegionsRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,
		ForceOverwriteReplicaSecret: FormControl<boolean | null | undefined>,
	}
	export function CreateReplicateSecretToRegionsRequestFormGroup() {
		return new FormGroup<ReplicateSecretToRegionsRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ForceOverwriteReplicaSecret: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RestoreSecretResponse {
		ARN?: string;
		Name?: string;
	}
	export interface RestoreSecretResponseFormProperties {
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRestoreSecretResponseFormGroup() {
		return new FormGroup<RestoreSecretResponseFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestoreSecretRequest {

		/** Required */
		SecretId: string;
	}
	export interface RestoreSecretRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,
	}
	export function CreateRestoreSecretRequestFormGroup() {
		return new FormGroup<RestoreSecretRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RotateSecretResponse {
		ARN?: string;
		Name?: string;
		VersionId?: string;
	}
	export interface RotateSecretResponseFormProperties {
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateRotateSecretResponseFormGroup() {
		return new FormGroup<RotateSecretResponseFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RotateSecretRequest {

		/** Required */
		SecretId: string;
		ClientRequestToken?: string;
		RotationLambdaARN?: string;
		RotationRules?: RotationRulesType;
		RotateImmediately?: boolean | null;
	}
	export interface RotateSecretRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		RotationLambdaARN: FormControl<string | null | undefined>,
		RotateImmediately: FormControl<boolean | null | undefined>,
	}
	export function CreateRotateSecretRequestFormGroup() {
		return new FormGroup<RotateSecretRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			RotationLambdaARN: new FormControl<string | null | undefined>(undefined),
			RotateImmediately: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StopReplicationToReplicaResponse {
		ARN?: string;
	}
	export interface StopReplicationToReplicaResponseFormProperties {
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateStopReplicationToReplicaResponseFormGroup() {
		return new FormGroup<StopReplicationToReplicaResponseFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopReplicationToReplicaRequest {

		/** Required */
		SecretId: string;
	}
	export interface StopReplicationToReplicaRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,
	}
	export function CreateStopReplicationToReplicaRequestFormGroup() {
		return new FormGroup<StopReplicationToReplicaRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		SecretId: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		SecretId: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSecretResponse {
		ARN?: string;
		Name?: string;
		VersionId?: string;
	}
	export interface UpdateSecretResponseFormProperties {
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSecretResponseFormGroup() {
		return new FormGroup<UpdateSecretResponseFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSecretRequest {

		/** Required */
		SecretId: string;
		ClientRequestToken?: string;
		Description?: string;
		KmsKeyId?: string;
		SecretBinary?: string;
		SecretString?: string;
	}
	export interface UpdateSecretRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		SecretBinary: FormControl<string | null | undefined>,
		SecretString: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSecretRequestFormGroup() {
		return new FormGroup<UpdateSecretRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			SecretBinary: new FormControl<string | null | undefined>(undefined),
			SecretString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSecretVersionStageResponse {
		ARN?: string;
		Name?: string;
	}
	export interface UpdateSecretVersionStageResponseFormProperties {
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSecretVersionStageResponseFormGroup() {
		return new FormGroup<UpdateSecretVersionStageResponseFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSecretVersionStageRequest {

		/** Required */
		SecretId: string;

		/** Required */
		VersionStage: string;
		RemoveFromVersionId?: string;
		MoveToVersionId?: string;
	}
	export interface UpdateSecretVersionStageRequestFormProperties {

		/** Required */
		SecretId: FormControl<string | null | undefined>,

		/** Required */
		VersionStage: FormControl<string | null | undefined>,
		RemoveFromVersionId: FormControl<string | null | undefined>,
		MoveToVersionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSecretVersionStageRequestFormGroup() {
		return new FormGroup<UpdateSecretVersionStageRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VersionStage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RemoveFromVersionId: new FormControl<string | null | undefined>(undefined),
			MoveToVersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ValidateResourcePolicyResponse {
		PolicyValidationPassed?: boolean | null;
		ValidationErrors?: Array<ValidationErrorsEntry>;
	}
	export interface ValidateResourcePolicyResponseFormProperties {
		PolicyValidationPassed: FormControl<boolean | null | undefined>,
	}
	export function CreateValidateResourcePolicyResponseFormGroup() {
		return new FormGroup<ValidateResourcePolicyResponseFormProperties>({
			PolicyValidationPassed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Displays errors that occurred during validation of the resource policy. */
	export interface ValidationErrorsEntry {
		CheckName?: string;
		ErrorMessage?: string;
	}

	/** Displays errors that occurred during validation of the resource policy. */
	export interface ValidationErrorsEntryFormProperties {
		CheckName: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorsEntryFormGroup() {
		return new FormGroup<ValidationErrorsEntryFormProperties>({
			CheckName: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ValidateResourcePolicyRequest {
		SecretId?: string;

		/** Required */
		ResourcePolicy: string;
	}
	export interface ValidateResourcePolicyRequestFormProperties {
		SecretId: FormControl<string | null | undefined>,

		/** Required */
		ResourcePolicy: FormControl<string | null | undefined>,
	}
	export function CreateValidateResourcePolicyRequestFormGroup() {
		return new FormGroup<ValidateResourcePolicyRequestFormProperties>({
			SecretId: new FormControl<string | null | undefined>(undefined),
			ResourcePolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Turns off automatic rotation, and if a rotation is currently in progress, cancels the rotation.</p> <p>If you cancel a rotation in progress, it can leave the <code>VersionStage</code> labels in an unexpected state. You might need to remove the staging label <code>AWSPENDING</code> from the partially created version. You also need to determine whether to roll back to the previous version of the secret by moving the staging label <code>AWSCURRENT</code> to the version that has <code>AWSPENDING</code>. To determine which version has a specific staging label, call <a>ListSecretVersionIds</a>. Then use <a>UpdateSecretVersionStage</a> to change staging labels. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html">How rotation works</a>.</p> <p>To turn on automatic rotation again, call <a>RotateSecret</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:CancelRotateSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.CancelRotateSecret
		 * @return {CancelRotateSecretResponse} Success
		 */
		CancelRotateSecret(requestBody: CancelRotateSecretRequest): Observable<CancelRotateSecretResponse> {
			return this.http.post<CancelRotateSecretResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.CancelRotateSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new secret. A <i>secret</i> can be a password, a set of credentials such as a user name and password, an OAuth token, or other secret information that you store in an encrypted form in Secrets Manager. The secret also includes the connection information to access a database or other service, which Secrets Manager doesn't encrypt. A secret in Secrets Manager consists of both the protected secret data and the important information needed to manage the secret.</p> <p>For secrets that use <i>managed rotation</i>, you need to create the secret through the managing service. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets Manager secrets managed by other Amazon Web Services services</a>. </p> <p>For information about creating a secret in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_create-basic-secret.html">Create a secret</a>.</p> <p>To create a secret, you can provide the secret value to be encrypted in either the <code>SecretString</code> parameter or the <code>SecretBinary</code> parameter, but not both. If you include <code>SecretString</code> or <code>SecretBinary</code> then Secrets Manager creates an initial secret version and automatically attaches the staging label <code>AWSCURRENT</code> to it.</p> <p>For database credentials you want to rotate, for Secrets Manager to be able to rotate the secret, you must make sure the JSON you store in the <code>SecretString</code> matches the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_secret_json_structure.html">JSON structure of a database secret</a>.</p> <p>If you don't specify an KMS encryption key, Secrets Manager uses the Amazon Web Services managed key <code>aws/secretsmanager</code>. If this key doesn't already exist in your account, then Secrets Manager creates it for you automatically. All users and roles in the Amazon Web Services account automatically have access to use <code>aws/secretsmanager</code>. Creating <code>aws/secretsmanager</code> can result in a one-time significant delay in returning the result.</p> <p>If the secret is in a different Amazon Web Services account from the credentials calling the API, then you can't use <code>aws/secretsmanager</code> to encrypt the secret, and you must create and use a customer managed KMS key. </p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:CreateSecret</code>. If you include tags in the secret, you also need <code>secretsmanager:TagResource</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p> <p>To encrypt the secret with a KMS key other than <code>aws/secretsmanager</code>, you need <code>kms:GenerateDataKey</code> and <code>kms:Decrypt</code> permission to the key. </p>
		 * Post #X-Amz-Target=secretsmanager.CreateSecret
		 * @return {CreateSecretResponse} Success
		 */
		CreateSecret(requestBody: CreateSecretRequest): Observable<CreateSecretResponse> {
			return this.http.post<CreateSecretResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.CreateSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the resource-based permission policy attached to the secret. To attach a policy to a secret, use <a>PutResourcePolicy</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:DeleteResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.DeleteResourcePolicy
		 * @return {DeleteResourcePolicyResponse} Success
		 */
		DeleteResourcePolicy(requestBody: DeleteResourcePolicyRequest): Observable<DeleteResourcePolicyResponse> {
			return this.http.post<DeleteResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.DeleteResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a secret and all of its versions. You can specify a recovery window during which you can restore the secret. The minimum recovery window is 7 days. The default recovery window is 30 days. Secrets Manager attaches a <code>DeletionDate</code> stamp to the secret that specifies the end of the recovery window. At the end of the recovery window, Secrets Manager deletes the secret permanently.</p> <p>You can't delete a primary secret that is replicated to other Regions. You must first delete the replicas using <a>RemoveRegionsFromReplication</a>, and then delete the primary secret. When you delete a replica, it is deleted immediately.</p> <p>You can't directly delete a version of a secret. Instead, you remove all staging labels from the version using <a>UpdateSecretVersionStage</a>. This marks the version as deprecated, and then Secrets Manager can automatically delete the version in the background.</p> <p>To determine whether an application still uses a secret, you can create an Amazon CloudWatch alarm to alert you to any attempts to access a secret during the recovery window. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring_cloudwatch_deleted-secrets.html"> Monitor secrets scheduled for deletion</a>.</p> <p>Secrets Manager performs the permanent secret deletion at the end of the waiting period as a background task with low priority. There is no guarantee of a specific time after the recovery window for the permanent delete to occur.</p> <p>At any time before recovery window ends, you can use <a>RestoreSecret</a> to remove the <code>DeletionDate</code> and cancel the deletion of the secret.</p> <p>When a secret is scheduled for deletion, you cannot retrieve the secret value. You must first cancel the deletion with <a>RestoreSecret</a> and then you can retrieve the secret.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:DeleteSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.DeleteSecret
		 * @return {DeleteSecretResponse} Success
		 */
		DeleteSecret(requestBody: DeleteSecretRequest): Observable<DeleteSecretResponse> {
			return this.http.post<DeleteSecretResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.DeleteSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the details of a secret. It does not include the encrypted secret value. Secrets Manager only returns fields that have a value in the response. </p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:DescribeSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.DescribeSecret
		 * @return {DescribeSecretResponse} Success
		 */
		DescribeSecret(requestBody: DescribeSecretRequest): Observable<DescribeSecretResponse> {
			return this.http.post<DescribeSecretResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.DescribeSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates a random password. We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:GetRandomPassword</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.GetRandomPassword
		 * @return {GetRandomPasswordResponse} Success
		 */
		GetRandomPassword(requestBody: GetRandomPasswordRequest): Observable<GetRandomPasswordResponse> {
			return this.http.post<GetRandomPasswordResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.GetRandomPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the JSON text of the resource-based policy document attached to the secret. For more information about permissions policies attached to a secret, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-policies.html">Permissions policies attached to a secret</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:GetResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.GetResourcePolicy
		 * @return {GetResourcePolicyResponse} Success
		 */
		GetResourcePolicy(requestBody: GetResourcePolicyRequest): Observable<GetResourcePolicyResponse> {
			return this.http.post<GetResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.GetResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the contents of the encrypted fields <code>SecretString</code> or <code>SecretBinary</code> from the specified version of a secret, whichever contains content.</p> <p>We recommend that you cache your secret values by using client-side caching. Caching secrets improves speed and reduces your costs. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html">Cache secrets for your applications</a>.</p> <p>To retrieve the previous version of a secret, use <code>VersionStage</code> and specify AWSPREVIOUS. To revert to the previous version of a secret, call <a href="https://docs.aws.amazon.com/cli/latest/reference/secretsmanager/update-secret-version-stage.html">UpdateSecretVersionStage</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:GetSecretValue</code>. If the secret is encrypted using a customer-managed key instead of the Amazon Web Services managed key <code>aws/secretsmanager</code>, then you also need <code>kms:Decrypt</code> permissions for that key. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.GetSecretValue
		 * @return {GetSecretValueResponse} Success
		 */
		GetSecretValue(requestBody: GetSecretValueRequest): Observable<GetSecretValueResponse> {
			return this.http.post<GetSecretValueResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.GetSecretValue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the versions of a secret. Secrets Manager uses staging labels to indicate the different versions of a secret. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/getting-started.html#term_version"> Secrets Manager concepts: Versions</a>.</p> <p>To list the secrets in the account, use <a>ListSecrets</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ListSecretVersionIds</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.ListSecretVersionIds
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSecretVersionIdsResponse} Success
		 */
		ListSecretVersionIds(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSecretVersionIdsRequest): Observable<ListSecretVersionIdsResponse> {
			return this.http.post<ListSecretVersionIdsResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.ListSecretVersionIds?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the secrets that are stored by Secrets Manager in the Amazon Web Services account, not including secrets that are marked for deletion. To see secrets marked for deletion, use the Secrets Manager console.</p> <p>ListSecrets is eventually consistent, however it might not reflect changes from the last five minutes. To get the latest information for a specific secret, use <a>DescribeSecret</a>.</p> <p>To list the versions of a secret, use <a>ListSecretVersionIds</a>.</p> <p>To get the secret value from <code>SecretString</code> or <code>SecretBinary</code>, call <a>GetSecretValue</a>.</p> <p>For information about finding secrets in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html">Find secrets in Secrets Manager</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ListSecrets</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.ListSecrets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSecretsResponse} Success
		 */
		ListSecrets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSecretsRequest): Observable<ListSecretsResponse> {
			return this.http.post<ListSecretsResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.ListSecrets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches a resource-based permission policy to a secret. A resource-based policy is optional. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control for Secrets Manager</a> </p> <p>For information about attaching a policy in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html">Attach a permissions policy to a secret</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:PutResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.PutResourcePolicy
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyRequest): Observable<PutResourcePolicyResponse> {
			return this.http.post<PutResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.PutResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new version with a new encrypted secret value and attaches it to the secret. The version can contain a new <code>SecretString</code> value or a new <code>SecretBinary</code> value. </p> <p>We recommend you avoid calling <code>PutSecretValue</code> at a sustained rate of more than once every 10 minutes. When you update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not remove versions created less than 24 hours ago. If you call <code>PutSecretValue</code> more than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach the quota for secret versions.</p> <p>You can specify the staging labels to attach to the new version in <code>VersionStages</code>. If you don't include <code>VersionStages</code>, then Secrets Manager automatically moves the staging label <code>AWSCURRENT</code> to this version. If this operation creates the first version for the secret, then Secrets Manager automatically attaches the staging label <code>AWSCURRENT</code> to it. If this operation moves the staging label <code>AWSCURRENT</code> from another version to this version, then Secrets Manager also automatically moves the staging label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> <p>This operation is idempotent. If you call this operation with a <code>ClientRequestToken</code> that matches an existing version's VersionId, and you specify the same secret data, the operation succeeds but does nothing. However, if the secret data is different, then the operation fails because you can't modify an existing version; you can only create new ones.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:PutSecretValue</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.PutSecretValue
		 * @return {PutSecretValueResponse} Success
		 */
		PutSecretValue(requestBody: PutSecretValueRequest): Observable<PutSecretValueResponse> {
			return this.http.post<PutSecretValueResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.PutSecretValue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>For a secret that is replicated to other Regions, deletes the secret replicas from the Regions you specify.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:RemoveRegionsFromReplication</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.RemoveRegionsFromReplication
		 * @return {RemoveRegionsFromReplicationResponse} Success
		 */
		RemoveRegionsFromReplication(requestBody: RemoveRegionsFromReplicationRequest): Observable<RemoveRegionsFromReplicationResponse> {
			return this.http.post<RemoveRegionsFromReplicationResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.RemoveRegionsFromReplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Replicates the secret to a new Regions. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/create-manage-multi-region-secrets.html">Multi-Region secrets</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ReplicateSecretToRegions</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.ReplicateSecretToRegions
		 * @return {ReplicateSecretToRegionsResponse} Success
		 */
		ReplicateSecretToRegions(requestBody: ReplicateSecretToRegionsRequest): Observable<ReplicateSecretToRegionsResponse> {
			return this.http.post<ReplicateSecretToRegionsResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.ReplicateSecretToRegions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Cancels the scheduled deletion of a secret by removing the <code>DeletedDate</code> time stamp. You can access a secret again after it has been restored.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:RestoreSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.RestoreSecret
		 * @return {RestoreSecretResponse} Success
		 */
		RestoreSecret(requestBody: RestoreSecretRequest): Observable<RestoreSecretResponse> {
			return this.http.post<RestoreSecretResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.RestoreSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Configures and starts the asynchronous process of rotating the secret. For information about rotation, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html">Rotate secrets</a> in the <i>Secrets Manager User Guide</i>. If you include the configuration parameters, the operation sets the values for the secret and then immediately starts a rotation. If you don't include the configuration parameters, the operation starts a rotation with the values already stored in the secret. </p> <p>When rotation is successful, the <code>AWSPENDING</code> staging label might be attached to the same version as the <code>AWSCURRENT</code> version, or it might not be attached to any version. If the <code>AWSPENDING</code> staging label is present but not attached to the same version as <code>AWSCURRENT</code>, then any later invocation of <code>RotateSecret</code> assumes that a previous rotation request is still in progress and returns an error. When rotation is unsuccessful, the <code>AWSPENDING</code> staging label might be attached to an empty secret version. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/troubleshoot_rotation.html">Troubleshoot rotation</a> in the <i>Secrets Manager User Guide</i>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:RotateSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. You also need <code>lambda:InvokeFunction</code> permissions on the rotation function. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-required-permissions-function.html"> Permissions for rotation</a>.</p>
		 * Post #X-Amz-Target=secretsmanager.RotateSecret
		 * @return {RotateSecretResponse} Success
		 */
		RotateSecret(requestBody: RotateSecretRequest): Observable<RotateSecretResponse> {
			return this.http.post<RotateSecretResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.RotateSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the link between the replica secret and the primary secret and promotes the replica to a primary secret in the replica Region.</p> <p>You must call this operation from the Region in which you want to promote the replica to a primary secret.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:StopReplicationToReplica</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.StopReplicationToReplica
		 * @return {StopReplicationToReplicaResponse} Success
		 */
		StopReplicationToReplica(requestBody: StopReplicationToReplicaRequest): Observable<StopReplicationToReplicaResponse> {
			return this.http.post<StopReplicationToReplicaResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.StopReplicationToReplica', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches tags to a secret. Tags consist of a key name and a value. Tags are part of the secret's metadata. They are not associated with specific versions of the secret. This operation appends tags to the existing list of tags.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per secret: 50</p> </li> <li> <p>Maximum key length: 127 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 255 Unicode characters in UTF-8</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use the <code>aws:</code> prefix in your tag names or values because Amazon Web Services reserves it for Amazon Web Services use. You can't edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.</p> </li> <li> <p>If you use your tagging schema across multiple services and resources, other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : / @.</p> </li> </ul> <important> <p>If you use tags as part of your security strategy, then adding or removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error.</p> </important> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:TagResource</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.TagResource
		 * @return {void} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=secretsmanager.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes specific tags from a secret.</p> <p>This operation is idempotent. If a requested tag is not attached to the secret, no error is returned and the secret metadata is unchanged.</p> <important> <p>If you use tags as part of your security strategy, then removing a tag can change permissions. If successfully completing this operation would result in you losing your permissions for this secret, then the operation is blocked and returns an Access Denied error.</p> </important> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:UntagResource</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.UntagResource
		 * @return {void} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=secretsmanager.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modifies the details of a secret, including metadata and the secret value. To change the secret value, you can also use <a>PutSecretValue</a>.</p> <p>To change the rotation configuration of a secret, use <a>RotateSecret</a> instead.</p> <p>To change a secret so that it is managed by another service, you need to recreate the secret in that service. See <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets Manager secrets managed by other Amazon Web Services services</a>.</p> <p>We recommend you avoid calling <code>UpdateSecret</code> at a sustained rate of more than once every 10 minutes. When you call <code>UpdateSecret</code> to update the secret value, Secrets Manager creates a new version of the secret. Secrets Manager removes outdated versions when there are more than 100, but it does not remove versions created less than 24 hours ago. If you update the secret value more than once every 10 minutes, you create more versions than Secrets Manager removes, and you will reach the quota for secret versions.</p> <p>If you include <code>SecretString</code> or <code>SecretBinary</code> to create a new secret version, Secrets Manager automatically moves the staging label <code>AWSCURRENT</code> to the new version. Then it attaches the label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> <p>If you call this operation with a <code>ClientRequestToken</code> that matches an existing version's <code>VersionId</code>, the operation results in an error. You can't modify an existing version, you can only create a new version. To remove a version, remove all staging labels from it. See <a>UpdateSecretVersionStage</a>.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters except <code>SecretBinary</code> or <code>SecretString</code> because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:UpdateSecret</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. If you use a customer managed key, you must also have <code>kms:GenerateDataKey</code>, <code>kms:Encrypt</code>, and <code>kms:Decrypt</code> permissions on the key. If you change the KMS key and you don't have <code>kms:Encrypt</code> permission to the new key, Secrets Manager does not re-ecrypt existing secret versions with the new key. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/security-encryption.html"> Secret encryption and decryption</a>.</p>
		 * Post #X-Amz-Target=secretsmanager.UpdateSecret
		 * @return {UpdateSecretResponse} Success
		 */
		UpdateSecret(requestBody: UpdateSecretRequest): Observable<UpdateSecretResponse> {
			return this.http.post<UpdateSecretResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.UpdateSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the staging labels attached to a version of a secret. Secrets Manager uses staging labels to track a version as it progresses through the secret rotation process. Each staging label can be attached to only one version at a time. To add a staging label to a version when it is already attached to another version, Secrets Manager first removes it from the other version first and then attaches it to this one. For more information about versions and staging labels, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/getting-started.html#term_version">Concepts: Version</a>. </p> <p>The staging labels that you specify in the <code>VersionStage</code> parameter are added to the existing list of staging labels for the version. </p> <p>You can move the <code>AWSCURRENT</code> staging label to this version by including it in this call.</p> <note> <p>Whenever you move <code>AWSCURRENT</code>, Secrets Manager automatically moves the label <code>AWSPREVIOUS</code> to the version that <code>AWSCURRENT</code> was removed from.</p> </note> <p>If this action results in the last label being removed from a version, then the version is considered to be 'deprecated' and can be deleted by Secrets Manager.</p> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:UpdateSecretVersionStage</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.UpdateSecretVersionStage
		 * @return {UpdateSecretVersionStageResponse} Success
		 */
		UpdateSecretVersionStage(requestBody: UpdateSecretVersionStageRequest): Observable<UpdateSecretVersionStageResponse> {
			return this.http.post<UpdateSecretVersionStageResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.UpdateSecretVersionStage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Validates that a resource policy does not grant a wide range of principals access to your secret. A resource-based policy is optional for secrets.</p> <p>The API performs three checks when validating the policy:</p> <ul> <li> <p>Sends a call to <a href="https://aws.amazon.com/blogs/security/protect-sensitive-data-in-the-cloud-with-automated-reasoning-zelkova/">Zelkova</a>, an automated reasoning engine, to ensure your resource policy does not allow broad access to your secret, for example policies that use a wildcard for the principal.</p> </li> <li> <p>Checks for correct syntax in a policy.</p> </li> <li> <p>Verifies the policy does not lock out a caller.</p> </li> </ul> <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p> <p> <b>Required permissions: </b> <code>secretsmanager:ValidateResourcePolicy</code> and <code>secretsmanager:PutResourcePolicy</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions"> IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication and access control in Secrets Manager</a>. </p>
		 * Post #X-Amz-Target=secretsmanager.ValidateResourcePolicy
		 * @return {ValidateResourcePolicyResponse} Success
		 */
		ValidateResourcePolicy(requestBody: ValidateResourcePolicyRequest): Observable<ValidateResourcePolicyResponse> {
			return this.http.post<ValidateResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=secretsmanager.ValidateResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CancelRotateSecretX_Amz_Target { 'secretsmanager.CancelRotateSecret' = 'secretsmanager.CancelRotateSecret' }

	export enum CreateSecretX_Amz_Target { 'secretsmanager.CreateSecret' = 'secretsmanager.CreateSecret' }

	export enum DeleteResourcePolicyX_Amz_Target { 'secretsmanager.DeleteResourcePolicy' = 'secretsmanager.DeleteResourcePolicy' }

	export enum DeleteSecretX_Amz_Target { 'secretsmanager.DeleteSecret' = 'secretsmanager.DeleteSecret' }

	export enum DescribeSecretX_Amz_Target { 'secretsmanager.DescribeSecret' = 'secretsmanager.DescribeSecret' }

	export enum GetRandomPasswordX_Amz_Target { 'secretsmanager.GetRandomPassword' = 'secretsmanager.GetRandomPassword' }

	export enum GetResourcePolicyX_Amz_Target { 'secretsmanager.GetResourcePolicy' = 'secretsmanager.GetResourcePolicy' }

	export enum GetSecretValueX_Amz_Target { 'secretsmanager.GetSecretValue' = 'secretsmanager.GetSecretValue' }

	export enum ListSecretVersionIdsX_Amz_Target { 'secretsmanager.ListSecretVersionIds' = 'secretsmanager.ListSecretVersionIds' }

	export enum ListSecretsX_Amz_Target { 'secretsmanager.ListSecrets' = 'secretsmanager.ListSecrets' }

	export enum PutResourcePolicyX_Amz_Target { 'secretsmanager.PutResourcePolicy' = 'secretsmanager.PutResourcePolicy' }

	export enum PutSecretValueX_Amz_Target { 'secretsmanager.PutSecretValue' = 'secretsmanager.PutSecretValue' }

	export enum RemoveRegionsFromReplicationX_Amz_Target { 'secretsmanager.RemoveRegionsFromReplication' = 'secretsmanager.RemoveRegionsFromReplication' }

	export enum ReplicateSecretToRegionsX_Amz_Target { 'secretsmanager.ReplicateSecretToRegions' = 'secretsmanager.ReplicateSecretToRegions' }

	export enum RestoreSecretX_Amz_Target { 'secretsmanager.RestoreSecret' = 'secretsmanager.RestoreSecret' }

	export enum RotateSecretX_Amz_Target { 'secretsmanager.RotateSecret' = 'secretsmanager.RotateSecret' }

	export enum StopReplicationToReplicaX_Amz_Target { 'secretsmanager.StopReplicationToReplica' = 'secretsmanager.StopReplicationToReplica' }

	export enum TagResourceX_Amz_Target { 'secretsmanager.TagResource' = 'secretsmanager.TagResource' }

	export enum UntagResourceX_Amz_Target { 'secretsmanager.UntagResource' = 'secretsmanager.UntagResource' }

	export enum UpdateSecretX_Amz_Target { 'secretsmanager.UpdateSecret' = 'secretsmanager.UpdateSecret' }

	export enum UpdateSecretVersionStageX_Amz_Target { 'secretsmanager.UpdateSecretVersionStage' = 'secretsmanager.UpdateSecretVersionStage' }

	export enum ValidateResourcePolicyX_Amz_Target { 'secretsmanager.ValidateResourcePolicy' = 'secretsmanager.ValidateResourcePolicy' }

}

