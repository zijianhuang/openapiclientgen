import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface InvalidParameterValueException {
	}
	export interface InvalidParameterValueExceptionFormProperties {
	}
	export function CreateInvalidParameterValueExceptionFormGroup() {
		return new FormGroup<InvalidParameterValueExceptionFormProperties>({
		});

	}

	export interface MissingParameterValueException {
	}
	export interface MissingParameterValueExceptionFormProperties {
	}
	export function CreateMissingParameterValueExceptionFormGroup() {
		return new FormGroup<MissingParameterValueExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
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


	/** <p>Contains the Amazon S3 Glacier response to your request.</p> <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a>. For conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a>.</p> */
	export interface ArchiveCreationOutput {
	}

	/** <p>Contains the Amazon S3 Glacier response to your request.</p> <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a>. For conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a>.</p> */
	export interface ArchiveCreationOutputFormProperties {
	}
	export function CreateArchiveCreationOutputFormGroup() {
		return new FormGroup<ArchiveCreationOutputFormProperties>({
		});

	}


	/** Contains the Amazon S3 Glacier response to your request. */
	export interface CreateVaultOutput {
	}

	/** Contains the Amazon S3 Glacier response to your request. */
	export interface CreateVaultOutputFormProperties {
	}
	export function CreateCreateVaultOutputFormGroup() {
		return new FormGroup<CreateVaultOutputFormProperties>({
		});

	}


	/** Contains the description of an Amazon S3 Glacier job. */
	export interface GlacierJobDescription {
		JobId?: string | null;
		JobDescription?: string | null;
		Action?: GlacierJobDescriptionAction | null;
		ArchiveId?: string | null;
		VaultARN?: string | null;
		CreationDate?: string | null;
		Completed?: boolean | null;
		StatusCode?: GlacierJobDescriptionStatusCode | null;
		StatusMessage?: string | null;
		ArchiveSizeInBytes?: number | null;
		InventorySizeInBytes?: number | null;
		SNSTopic?: string | null;
		CompletionDate?: string | null;
		SHA256TreeHash?: string | null;
		ArchiveSHA256TreeHash?: string | null;
		RetrievalByteRange?: string | null;
		Tier?: string | null;

		/** Describes the options for a range inventory retrieval job. */
		InventoryRetrievalParameters?: InventoryRetrievalJobDescription;
		JobOutputPath?: string | null;

		/** Contains information about the parameters used for a select. */
		SelectParameters?: SelectParameters;

		/** Contains information about the location where the select job results are stored. */
		OutputLocation?: OutputLocation;
	}

	/** Contains the description of an Amazon S3 Glacier job. */
	export interface GlacierJobDescriptionFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobDescription: FormControl<string | null | undefined>,
		Action: FormControl<GlacierJobDescriptionAction | null | undefined>,
		ArchiveId: FormControl<string | null | undefined>,
		VaultARN: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		Completed: FormControl<boolean | null | undefined>,
		StatusCode: FormControl<GlacierJobDescriptionStatusCode | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		ArchiveSizeInBytes: FormControl<number | null | undefined>,
		InventorySizeInBytes: FormControl<number | null | undefined>,
		SNSTopic: FormControl<string | null | undefined>,
		CompletionDate: FormControl<string | null | undefined>,
		SHA256TreeHash: FormControl<string | null | undefined>,
		ArchiveSHA256TreeHash: FormControl<string | null | undefined>,
		RetrievalByteRange: FormControl<string | null | undefined>,
		Tier: FormControl<string | null | undefined>,
		JobOutputPath: FormControl<string | null | undefined>,
	}
	export function CreateGlacierJobDescriptionFormGroup() {
		return new FormGroup<GlacierJobDescriptionFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobDescription: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<GlacierJobDescriptionAction | null | undefined>(undefined),
			ArchiveId: new FormControl<string | null | undefined>(undefined),
			VaultARN: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			Completed: new FormControl<boolean | null | undefined>(undefined),
			StatusCode: new FormControl<GlacierJobDescriptionStatusCode | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			ArchiveSizeInBytes: new FormControl<number | null | undefined>(undefined),
			InventorySizeInBytes: new FormControl<number | null | undefined>(undefined),
			SNSTopic: new FormControl<string | null | undefined>(undefined),
			CompletionDate: new FormControl<string | null | undefined>(undefined),
			SHA256TreeHash: new FormControl<string | null | undefined>(undefined),
			ArchiveSHA256TreeHash: new FormControl<string | null | undefined>(undefined),
			RetrievalByteRange: new FormControl<string | null | undefined>(undefined),
			Tier: new FormControl<string | null | undefined>(undefined),
			JobOutputPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GlacierJobDescriptionAction { ArchiveRetrieval = 0, InventoryRetrieval = 1, Select = 2 }

	export enum GlacierJobDescriptionStatusCode { InProgress = 0, Succeeded = 1, Failed = 2 }


	/** Describes the options for a range inventory retrieval job. */
	export interface InventoryRetrievalJobDescription {
		Format?: string | null;
		StartDate?: string | null;
		EndDate?: string | null;
		Limit?: string | null;
		Marker?: string | null;
	}

	/** Describes the options for a range inventory retrieval job. */
	export interface InventoryRetrievalJobDescriptionFormProperties {
		Format: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		Limit: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateInventoryRetrievalJobDescriptionFormGroup() {
		return new FormGroup<InventoryRetrievalJobDescriptionFormProperties>({
			Format: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the parameters used for a select. */
	export interface SelectParameters {

		/** Describes how the archive is serialized. */
		InputSerialization?: InputSerialization;
		ExpressionType?: SelectParametersExpressionType | null;
		Expression?: string | null;

		/** Describes how the select output is serialized. */
		OutputSerialization?: OutputSerialization;
	}

	/** Contains information about the parameters used for a select. */
	export interface SelectParametersFormProperties {
		ExpressionType: FormControl<SelectParametersExpressionType | null | undefined>,
		Expression: FormControl<string | null | undefined>,
	}
	export function CreateSelectParametersFormGroup() {
		return new FormGroup<SelectParametersFormProperties>({
			ExpressionType: new FormControl<SelectParametersExpressionType | null | undefined>(undefined),
			Expression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes how the archive is serialized. */
	export interface InputSerialization {

		/** Contains information about the comma-separated value (CSV) file to select from. */
		csv?: CSVInput;
	}

	/** Describes how the archive is serialized. */
	export interface InputSerializationFormProperties {
	}
	export function CreateInputSerializationFormGroup() {
		return new FormGroup<InputSerializationFormProperties>({
		});

	}


	/** Contains information about the comma-separated value (CSV) file to select from. */
	export interface CSVInput {
		FileHeaderInfo?: CSVInputFileHeaderInfo | null;
		Comments?: string | null;
		QuoteEscapeCharacter?: string | null;
		RecordDelimiter?: string | null;
		FieldDelimiter?: string | null;
		QuoteCharacter?: string | null;
	}

	/** Contains information about the comma-separated value (CSV) file to select from. */
	export interface CSVInputFormProperties {
		FileHeaderInfo: FormControl<CSVInputFileHeaderInfo | null | undefined>,
		Comments: FormControl<string | null | undefined>,
		QuoteEscapeCharacter: FormControl<string | null | undefined>,
		RecordDelimiter: FormControl<string | null | undefined>,
		FieldDelimiter: FormControl<string | null | undefined>,
		QuoteCharacter: FormControl<string | null | undefined>,
	}
	export function CreateCSVInputFormGroup() {
		return new FormGroup<CSVInputFormProperties>({
			FileHeaderInfo: new FormControl<CSVInputFileHeaderInfo | null | undefined>(undefined),
			Comments: new FormControl<string | null | undefined>(undefined),
			QuoteEscapeCharacter: new FormControl<string | null | undefined>(undefined),
			RecordDelimiter: new FormControl<string | null | undefined>(undefined),
			FieldDelimiter: new FormControl<string | null | undefined>(undefined),
			QuoteCharacter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CSVInputFileHeaderInfo { USE = 0, IGNORE = 1, NONE = 2 }

	export enum SelectParametersExpressionType { SQL = 0 }


	/** Describes how the select output is serialized. */
	export interface OutputSerialization {

		/** Contains information about the comma-separated value (CSV) file that the job results are stored in. */
		csv?: CSVOutput;
	}

	/** Describes how the select output is serialized. */
	export interface OutputSerializationFormProperties {
	}
	export function CreateOutputSerializationFormGroup() {
		return new FormGroup<OutputSerializationFormProperties>({
		});

	}


	/** Contains information about the comma-separated value (CSV) file that the job results are stored in. */
	export interface CSVOutput {
		QuoteFields?: CSVOutputQuoteFields | null;
		QuoteEscapeCharacter?: string | null;
		RecordDelimiter?: string | null;
		FieldDelimiter?: string | null;
		QuoteCharacter?: string | null;
	}

	/** Contains information about the comma-separated value (CSV) file that the job results are stored in. */
	export interface CSVOutputFormProperties {
		QuoteFields: FormControl<CSVOutputQuoteFields | null | undefined>,
		QuoteEscapeCharacter: FormControl<string | null | undefined>,
		RecordDelimiter: FormControl<string | null | undefined>,
		FieldDelimiter: FormControl<string | null | undefined>,
		QuoteCharacter: FormControl<string | null | undefined>,
	}
	export function CreateCSVOutputFormGroup() {
		return new FormGroup<CSVOutputFormProperties>({
			QuoteFields: new FormControl<CSVOutputQuoteFields | null | undefined>(undefined),
			QuoteEscapeCharacter: new FormControl<string | null | undefined>(undefined),
			RecordDelimiter: new FormControl<string | null | undefined>(undefined),
			FieldDelimiter: new FormControl<string | null | undefined>(undefined),
			QuoteCharacter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CSVOutputQuoteFields { ALWAYS = 0, ASNEEDED = 1 }


	/** Contains information about the location where the select job results are stored. */
	export interface OutputLocation {

		/** Contains information about the location in Amazon S3 where the select job results are stored. */
		S3?: S3Location;
	}

	/** Contains information about the location where the select job results are stored. */
	export interface OutputLocationFormProperties {
	}
	export function CreateOutputLocationFormGroup() {
		return new FormGroup<OutputLocationFormProperties>({
		});

	}


	/** Contains information about the location in Amazon S3 where the select job results are stored. */
	export interface S3Location {
		BucketName?: string | null;
		Prefix?: string | null;

		/** Contains information about the encryption used to store the job results in Amazon S3. */
		Encryption?: Encryption;
		CannedACL?: S3LocationCannedACL | null;
		AccessControlList?: Array<Grant>;
		Tagging?: Hashmap;
		UserMetadata?: Hashmap;
		StorageClass?: S3LocationStorageClass | null;
	}

	/** Contains information about the location in Amazon S3 where the select job results are stored. */
	export interface S3LocationFormProperties {
		BucketName: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
		CannedACL: FormControl<S3LocationCannedACL | null | undefined>,
		StorageClass: FormControl<S3LocationStorageClass | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			Prefix: new FormControl<string | null | undefined>(undefined),
			CannedACL: new FormControl<S3LocationCannedACL | null | undefined>(undefined),
			StorageClass: new FormControl<S3LocationStorageClass | null | undefined>(undefined),
		});

	}


	/** Contains information about the encryption used to store the job results in Amazon S3.  */
	export interface Encryption {
		EncryptionType?: EncryptionEncryptionType | null;
		KMSKeyId?: string | null;
		KMSContext?: string | null;
	}

	/** Contains information about the encryption used to store the job results in Amazon S3.  */
	export interface EncryptionFormProperties {
		EncryptionType: FormControl<EncryptionEncryptionType | null | undefined>,
		KMSKeyId: FormControl<string | null | undefined>,
		KMSContext: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionFormGroup() {
		return new FormGroup<EncryptionFormProperties>({
			EncryptionType: new FormControl<EncryptionEncryptionType | null | undefined>(undefined),
			KMSKeyId: new FormControl<string | null | undefined>(undefined),
			KMSContext: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EncryptionEncryptionType { awskms = 0, AES256 = 1 }

	export enum S3LocationCannedACL { _private = 0, public_read = 1, public_read_write = 2, aws_exec_read = 3, authenticated_read = 4, bucket_owner_read = 5, bucket_owner_full_control = 6 }


	/** Contains information about a grant. */
	export interface Grant {

		/** Contains information about the grantee. */
		Grantee?: Grantee;
		Permission?: GrantPermission | null;
	}

	/** Contains information about a grant. */
	export interface GrantFormProperties {
		Permission: FormControl<GrantPermission | null | undefined>,
	}
	export function CreateGrantFormGroup() {
		return new FormGroup<GrantFormProperties>({
			Permission: new FormControl<GrantPermission | null | undefined>(undefined),
		});

	}


	/** Contains information about the grantee. */
	export interface Grantee {
		Type: GranteeType;
		DisplayName?: string | null;
		URI?: string | null;
		ID?: string | null;
		EmailAddress?: string | null;
	}

	/** Contains information about the grantee. */
	export interface GranteeFormProperties {
		Type: FormControl<GranteeType | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		URI: FormControl<string | null | undefined>,
		ID: FormControl<string | null | undefined>,
		EmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateGranteeFormGroup() {
		return new FormGroup<GranteeFormProperties>({
			Type: new FormControl<GranteeType | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			URI: new FormControl<string | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			EmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GranteeType { AmazonCustomerByEmail = 0, CanonicalUser = 1, Group = 2 }

	export enum GrantPermission { FULL_CONTROL = 0, WRITE = 1, WRITE_ACP = 2, READ = 3, READ_ACP = 4 }

	export interface Hashmap {
	}
	export interface HashmapFormProperties {
	}
	export function CreateHashmapFormGroup() {
		return new FormGroup<HashmapFormProperties>({
		});

	}

	export enum S3LocationStorageClass { STANDARD = 0, REDUCED_REDUNDANCY = 1, STANDARD_IA = 2 }


	/** Contains the Amazon S3 Glacier response to your request. */
	export interface DescribeVaultOutput {
		VaultARN?: string | null;
		VaultName?: string | null;
		CreationDate?: string | null;
		LastInventoryDate?: string | null;
		NumberOfArchives?: number | null;
		SizeInBytes?: number | null;
	}

	/** Contains the Amazon S3 Glacier response to your request. */
	export interface DescribeVaultOutputFormProperties {
		VaultARN: FormControl<string | null | undefined>,
		VaultName: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		LastInventoryDate: FormControl<string | null | undefined>,
		NumberOfArchives: FormControl<number | null | undefined>,
		SizeInBytes: FormControl<number | null | undefined>,
	}
	export function CreateDescribeVaultOutputFormGroup() {
		return new FormGroup<DescribeVaultOutputFormProperties>({
			VaultARN: new FormControl<string | null | undefined>(undefined),
			VaultName: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			LastInventoryDate: new FormControl<string | null | undefined>(undefined),
			NumberOfArchives: new FormControl<number | null | undefined>(undefined),
			SizeInBytes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains the Amazon S3 Glacier response to the <code>GetDataRetrievalPolicy</code> request. */
	export interface GetDataRetrievalPolicyOutput {

		/** Data retrieval policy. */
		Policy?: DataRetrievalPolicy;
	}

	/** Contains the Amazon S3 Glacier response to the <code>GetDataRetrievalPolicy</code> request. */
	export interface GetDataRetrievalPolicyOutputFormProperties {
	}
	export function CreateGetDataRetrievalPolicyOutputFormGroup() {
		return new FormGroup<GetDataRetrievalPolicyOutputFormProperties>({
		});

	}


	/** Data retrieval policy. */
	export interface DataRetrievalPolicy {
		Rules?: Array<DataRetrievalRule>;
	}

	/** Data retrieval policy. */
	export interface DataRetrievalPolicyFormProperties {
	}
	export function CreateDataRetrievalPolicyFormGroup() {
		return new FormGroup<DataRetrievalPolicyFormProperties>({
		});

	}


	/** Data retrieval policy rule. */
	export interface DataRetrievalRule {
		Strategy?: string | null;
		BytesPerHour?: number | null;
	}

	/** Data retrieval policy rule. */
	export interface DataRetrievalRuleFormProperties {
		Strategy: FormControl<string | null | undefined>,
		BytesPerHour: FormControl<number | null | undefined>,
	}
	export function CreateDataRetrievalRuleFormGroup() {
		return new FormGroup<DataRetrievalRuleFormProperties>({
			Strategy: new FormControl<string | null | undefined>(undefined),
			BytesPerHour: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains the Amazon S3 Glacier response to your request. */
	export interface GetJobOutputOutput {
		body?: string | null;
		status?: number | null;
	}

	/** Contains the Amazon S3 Glacier response to your request. */
	export interface GetJobOutputOutputFormProperties {
		body: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetJobOutputOutputFormGroup() {
		return new FormGroup<GetJobOutputOutputFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Output for GetVaultAccessPolicy. */
	export interface GetVaultAccessPolicyOutput {

		/** Contains the vault access policy. */
		policy?: VaultAccessPolicy;
	}

	/** Output for GetVaultAccessPolicy. */
	export interface GetVaultAccessPolicyOutputFormProperties {
	}
	export function CreateGetVaultAccessPolicyOutputFormGroup() {
		return new FormGroup<GetVaultAccessPolicyOutputFormProperties>({
		});

	}


	/** Contains the vault access policy. */
	export interface VaultAccessPolicy {
		Policy?: string | null;
	}

	/** Contains the vault access policy. */
	export interface VaultAccessPolicyFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateVaultAccessPolicyFormGroup() {
		return new FormGroup<VaultAccessPolicyFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the Amazon S3 Glacier response to your request. */
	export interface GetVaultLockOutput {
		Policy?: string | null;
		State?: string | null;
		ExpirationDate?: string | null;
		CreationDate?: string | null;
	}

	/** Contains the Amazon S3 Glacier response to your request. */
	export interface GetVaultLockOutputFormProperties {
		Policy: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		ExpirationDate: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
	}
	export function CreateGetVaultLockOutputFormGroup() {
		return new FormGroup<GetVaultLockOutputFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			ExpirationDate: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the Amazon S3 Glacier response to your request. */
	export interface GetVaultNotificationsOutput {

		/** Represents a vault's notification configuration. */
		vaultNotificationConfig?: VaultNotificationConfig;
	}

	/** Contains the Amazon S3 Glacier response to your request. */
	export interface GetVaultNotificationsOutputFormProperties {
	}
	export function CreateGetVaultNotificationsOutputFormGroup() {
		return new FormGroup<GetVaultNotificationsOutputFormProperties>({
		});

	}


	/** Represents a vault's notification configuration. */
	export interface VaultNotificationConfig {
		SNSTopic?: string | null;
		Events?: Array<string>;
	}

	/** Represents a vault's notification configuration. */
	export interface VaultNotificationConfigFormProperties {
		SNSTopic: FormControl<string | null | undefined>,
	}
	export function CreateVaultNotificationConfigFormGroup() {
		return new FormGroup<VaultNotificationConfigFormProperties>({
			SNSTopic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the Amazon S3 Glacier response to your request. */
	export interface InitiateJobOutput {
	}

	/** Contains the Amazon S3 Glacier response to your request. */
	export interface InitiateJobOutputFormProperties {
	}
	export function CreateInitiateJobOutputFormGroup() {
		return new FormGroup<InitiateJobOutputFormProperties>({
		});

	}


	/** Provides options for specifying a range inventory retrieval job. */
	export interface InventoryRetrievalJobInput {
		StartDate?: string | null;
		EndDate?: string | null;
		Limit?: string | null;
		Marker?: string | null;
	}

	/** Provides options for specifying a range inventory retrieval job. */
	export interface InventoryRetrievalJobInputFormProperties {
		StartDate: FormControl<string | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		Limit: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateInventoryRetrievalJobInputFormGroup() {
		return new FormGroup<InventoryRetrievalJobInputFormProperties>({
			StartDate: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PolicyEnforcedException {
	}
	export interface PolicyEnforcedExceptionFormProperties {
	}
	export function CreatePolicyEnforcedExceptionFormGroup() {
		return new FormGroup<PolicyEnforcedExceptionFormProperties>({
		});

	}

	export interface InsufficientCapacityException {
	}
	export interface InsufficientCapacityExceptionFormProperties {
	}
	export function CreateInsufficientCapacityExceptionFormGroup() {
		return new FormGroup<InsufficientCapacityExceptionFormProperties>({
		});

	}


	/** The Amazon S3 Glacier response to your request. */
	export interface InitiateMultipartUploadOutput {
	}

	/** The Amazon S3 Glacier response to your request. */
	export interface InitiateMultipartUploadOutputFormProperties {
	}
	export function CreateInitiateMultipartUploadOutputFormGroup() {
		return new FormGroup<InitiateMultipartUploadOutputFormProperties>({
		});

	}


	/** Contains the Amazon S3 Glacier response to your request. */
	export interface InitiateVaultLockOutput {
	}

	/** Contains the Amazon S3 Glacier response to your request. */
	export interface InitiateVaultLockOutputFormProperties {
	}
	export function CreateInitiateVaultLockOutputFormGroup() {
		return new FormGroup<InitiateVaultLockOutputFormProperties>({
		});

	}


	/** Contains the Amazon S3 Glacier response to your request. */
	export interface ListJobsOutput {
		JobList?: Array<GlacierJobDescription>;
		Marker?: string | null;
	}

	/** Contains the Amazon S3 Glacier response to your request. */
	export interface ListJobsOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListJobsOutputFormGroup() {
		return new FormGroup<ListJobsOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the Amazon S3 Glacier response to your request. */
	export interface ListMultipartUploadsOutput {
		UploadsList?: Array<UploadListElement>;
		Marker?: string | null;
	}

	/** Contains the Amazon S3 Glacier response to your request. */
	export interface ListMultipartUploadsOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListMultipartUploadsOutputFormGroup() {
		return new FormGroup<ListMultipartUploadsOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of in-progress multipart uploads for a vault. */
	export interface UploadListElement {
		MultipartUploadId?: string | null;
		VaultARN?: string | null;
		ArchiveDescription?: string | null;
		PartSizeInBytes?: number | null;
		CreationDate?: string | null;
	}

	/** A list of in-progress multipart uploads for a vault. */
	export interface UploadListElementFormProperties {
		MultipartUploadId: FormControl<string | null | undefined>,
		VaultARN: FormControl<string | null | undefined>,
		ArchiveDescription: FormControl<string | null | undefined>,
		PartSizeInBytes: FormControl<number | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
	}
	export function CreateUploadListElementFormGroup() {
		return new FormGroup<UploadListElementFormProperties>({
			MultipartUploadId: new FormControl<string | null | undefined>(undefined),
			VaultARN: new FormControl<string | null | undefined>(undefined),
			ArchiveDescription: new FormControl<string | null | undefined>(undefined),
			PartSizeInBytes: new FormControl<number | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the Amazon S3 Glacier response to your request. */
	export interface ListPartsOutput {
		MultipartUploadId?: string | null;
		VaultARN?: string | null;
		ArchiveDescription?: string | null;
		PartSizeInBytes?: number | null;
		CreationDate?: string | null;
		Parts?: Array<PartListElement>;
		Marker?: string | null;
	}

	/** Contains the Amazon S3 Glacier response to your request. */
	export interface ListPartsOutputFormProperties {
		MultipartUploadId: FormControl<string | null | undefined>,
		VaultARN: FormControl<string | null | undefined>,
		ArchiveDescription: FormControl<string | null | undefined>,
		PartSizeInBytes: FormControl<number | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListPartsOutputFormGroup() {
		return new FormGroup<ListPartsOutputFormProperties>({
			MultipartUploadId: new FormControl<string | null | undefined>(undefined),
			VaultARN: new FormControl<string | null | undefined>(undefined),
			ArchiveDescription: new FormControl<string | null | undefined>(undefined),
			PartSizeInBytes: new FormControl<number | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of the part sizes of the multipart upload. */
	export interface PartListElement {
		RangeInBytes?: string | null;
		SHA256TreeHash?: string | null;
	}

	/** A list of the part sizes of the multipart upload. */
	export interface PartListElementFormProperties {
		RangeInBytes: FormControl<string | null | undefined>,
		SHA256TreeHash: FormControl<string | null | undefined>,
	}
	export function CreatePartListElementFormGroup() {
		return new FormGroup<PartListElementFormProperties>({
			RangeInBytes: new FormControl<string | null | undefined>(undefined),
			SHA256TreeHash: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProvisionedCapacityOutput {
		ProvisionedCapacityList?: Array<ProvisionedCapacityDescription>;
	}
	export interface ListProvisionedCapacityOutputFormProperties {
	}
	export function CreateListProvisionedCapacityOutputFormGroup() {
		return new FormGroup<ListProvisionedCapacityOutputFormProperties>({
		});

	}


	/** The definition for a provisioned capacity unit. */
	export interface ProvisionedCapacityDescription {
		CapacityId?: string | null;
		StartDate?: string | null;
		ExpirationDate?: string | null;
	}

	/** The definition for a provisioned capacity unit. */
	export interface ProvisionedCapacityDescriptionFormProperties {
		CapacityId: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		ExpirationDate: FormControl<string | null | undefined>,
	}
	export function CreateProvisionedCapacityDescriptionFormGroup() {
		return new FormGroup<ProvisionedCapacityDescriptionFormProperties>({
			CapacityId: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<string | null | undefined>(undefined),
			ExpirationDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the Amazon S3 Glacier response to your request. */
	export interface ListTagsForVaultOutput {
		Tags?: TagMap;
	}

	/** Contains the Amazon S3 Glacier response to your request. */
	export interface ListTagsForVaultOutputFormProperties {
	}
	export function CreateListTagsForVaultOutputFormGroup() {
		return new FormGroup<ListTagsForVaultOutputFormProperties>({
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}


	/** Contains the Amazon S3 Glacier response to your request. */
	export interface ListVaultsOutput {
		VaultList?: Array<DescribeVaultOutput>;
		Marker?: string | null;
	}

	/** Contains the Amazon S3 Glacier response to your request. */
	export interface ListVaultsOutputFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateListVaultsOutputFormGroup() {
		return new FormGroup<ListVaultsOutputFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseProvisionedCapacityOutput {
	}
	export interface PurchaseProvisionedCapacityOutputFormProperties {
	}
	export function CreatePurchaseProvisionedCapacityOutputFormGroup() {
		return new FormGroup<PurchaseProvisionedCapacityOutputFormProperties>({
		});

	}

	export interface RequestTimeoutException {
	}
	export interface RequestTimeoutExceptionFormProperties {
	}
	export function CreateRequestTimeoutExceptionFormGroup() {
		return new FormGroup<RequestTimeoutExceptionFormProperties>({
		});

	}


	/** Contains the Amazon S3 Glacier response to your request. */
	export interface UploadMultipartPartOutput {
	}

	/** Contains the Amazon S3 Glacier response to your request. */
	export interface UploadMultipartPartOutputFormProperties {
	}
	export function CreateUploadMultipartPartOutputFormGroup() {
		return new FormGroup<UploadMultipartPartOutputFormProperties>({
		});

	}


	/** <p>Provides options to abort a multipart upload identified by the upload ID.</p> <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart Upload</a>. For conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a>.</p> */
	export interface AbortMultipartUploadInput {
	}

	/** <p>Provides options to abort a multipart upload identified by the upload ID.</p> <p>For information about the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart Upload</a>. For conceptual information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a>.</p> */
	export interface AbortMultipartUploadInputFormProperties {
	}
	export function CreateAbortMultipartUploadInputFormGroup() {
		return new FormGroup<AbortMultipartUploadInputFormProperties>({
		});

	}


	/** The input values for <code>AbortVaultLock</code>. */
	export interface AbortVaultLockInput {
	}

	/** The input values for <code>AbortVaultLock</code>. */
	export interface AbortVaultLockInputFormProperties {
	}
	export function CreateAbortVaultLockInputFormGroup() {
		return new FormGroup<AbortVaultLockInputFormProperties>({
		});

	}

	export enum ActionCode { ArchiveRetrieval = 0, InventoryRetrieval = 1, Select = 2 }


	/** The input values for <code>AddTagsToVault</code>. */
	export interface AddTagsToVaultInput {
		Tags?: TagMap;
	}

	/** The input values for <code>AddTagsToVault</code>. */
	export interface AddTagsToVaultInputFormProperties {
	}
	export function CreateAddTagsToVaultInputFormGroup() {
		return new FormGroup<AddTagsToVaultInputFormProperties>({
		});

	}

	export enum FileHeaderInfo { USE = 0, IGNORE = 1, NONE = 2 }

	export enum QuoteFields { ALWAYS = 0, ASNEEDED = 1 }

	export enum CannedACL { _private = 0, public_read = 1, public_read_write = 2, aws_exec_read = 3, authenticated_read = 4, bucket_owner_read = 5, bucket_owner_full_control = 6 }


	/** Provides options to complete a multipart upload operation. This informs Amazon Glacier that all the archive parts have been uploaded and Amazon S3 Glacier (Glacier) can now assemble the archive from the uploaded parts. After assembling and saving the archive to the vault, Glacier returns the URI path of the newly created archive resource. */
	export interface CompleteMultipartUploadInput {
	}

	/** Provides options to complete a multipart upload operation. This informs Amazon Glacier that all the archive parts have been uploaded and Amazon S3 Glacier (Glacier) can now assemble the archive from the uploaded parts. After assembling and saving the archive to the vault, Glacier returns the URI path of the newly created archive resource. */
	export interface CompleteMultipartUploadInputFormProperties {
	}
	export function CreateCompleteMultipartUploadInputFormGroup() {
		return new FormGroup<CompleteMultipartUploadInputFormProperties>({
		});

	}


	/** The input values for <code>CompleteVaultLock</code>. */
	export interface CompleteVaultLockInput {
	}

	/** The input values for <code>CompleteVaultLock</code>. */
	export interface CompleteVaultLockInputFormProperties {
	}
	export function CreateCompleteVaultLockInputFormGroup() {
		return new FormGroup<CompleteVaultLockInputFormProperties>({
		});

	}


	/** Provides options to create a vault. */
	export interface CreateVaultInput {
	}

	/** Provides options to create a vault. */
	export interface CreateVaultInputFormProperties {
	}
	export function CreateCreateVaultInputFormGroup() {
		return new FormGroup<CreateVaultInputFormProperties>({
		});

	}


	/** Provides options for deleting an archive from an Amazon S3 Glacier vault. */
	export interface DeleteArchiveInput {
	}

	/** Provides options for deleting an archive from an Amazon S3 Glacier vault. */
	export interface DeleteArchiveInputFormProperties {
	}
	export function CreateDeleteArchiveInputFormGroup() {
		return new FormGroup<DeleteArchiveInputFormProperties>({
		});

	}


	/** DeleteVaultAccessPolicy input. */
	export interface DeleteVaultAccessPolicyInput {
	}

	/** DeleteVaultAccessPolicy input. */
	export interface DeleteVaultAccessPolicyInputFormProperties {
	}
	export function CreateDeleteVaultAccessPolicyInputFormGroup() {
		return new FormGroup<DeleteVaultAccessPolicyInputFormProperties>({
		});

	}


	/** Provides options for deleting a vault from Amazon S3 Glacier. */
	export interface DeleteVaultInput {
	}

	/** Provides options for deleting a vault from Amazon S3 Glacier. */
	export interface DeleteVaultInputFormProperties {
	}
	export function CreateDeleteVaultInputFormGroup() {
		return new FormGroup<DeleteVaultInputFormProperties>({
		});

	}


	/** Provides options for deleting a vault notification configuration from an Amazon Glacier vault. */
	export interface DeleteVaultNotificationsInput {
	}

	/** Provides options for deleting a vault notification configuration from an Amazon Glacier vault. */
	export interface DeleteVaultNotificationsInputFormProperties {
	}
	export function CreateDeleteVaultNotificationsInputFormGroup() {
		return new FormGroup<DeleteVaultNotificationsInputFormProperties>({
		});

	}


	/** Provides options for retrieving a job description. */
	export interface DescribeJobInput {
	}

	/** Provides options for retrieving a job description. */
	export interface DescribeJobInputFormProperties {
	}
	export function CreateDescribeJobInputFormGroup() {
		return new FormGroup<DescribeJobInputFormProperties>({
		});

	}


	/** Provides options for retrieving metadata for a specific vault in Amazon Glacier. */
	export interface DescribeVaultInput {
	}

	/** Provides options for retrieving metadata for a specific vault in Amazon Glacier. */
	export interface DescribeVaultInputFormProperties {
	}
	export function CreateDescribeVaultInputFormGroup() {
		return new FormGroup<DescribeVaultInputFormProperties>({
		});

	}

	export enum EncryptionType { awskms = 0, AES256 = 1 }

	export enum ExpressionType { SQL = 0 }


	/** Input for GetDataRetrievalPolicy. */
	export interface GetDataRetrievalPolicyInput {
	}

	/** Input for GetDataRetrievalPolicy. */
	export interface GetDataRetrievalPolicyInputFormProperties {
	}
	export function CreateGetDataRetrievalPolicyInputFormGroup() {
		return new FormGroup<GetDataRetrievalPolicyInputFormProperties>({
		});

	}


	/** Provides options for downloading output of an Amazon S3 Glacier job. */
	export interface GetJobOutputInput {
	}

	/** Provides options for downloading output of an Amazon S3 Glacier job. */
	export interface GetJobOutputInputFormProperties {
	}
	export function CreateGetJobOutputInputFormGroup() {
		return new FormGroup<GetJobOutputInputFormProperties>({
		});

	}


	/** Input for GetVaultAccessPolicy. */
	export interface GetVaultAccessPolicyInput {
	}

	/** Input for GetVaultAccessPolicy. */
	export interface GetVaultAccessPolicyInputFormProperties {
	}
	export function CreateGetVaultAccessPolicyInputFormGroup() {
		return new FormGroup<GetVaultAccessPolicyInputFormProperties>({
		});

	}


	/** The input values for <code>GetVaultLock</code>. */
	export interface GetVaultLockInput {
	}

	/** The input values for <code>GetVaultLock</code>. */
	export interface GetVaultLockInputFormProperties {
	}
	export function CreateGetVaultLockInputFormGroup() {
		return new FormGroup<GetVaultLockInputFormProperties>({
		});

	}


	/** Provides options for retrieving the notification configuration set on an Amazon Glacier vault. */
	export interface GetVaultNotificationsInput {
	}

	/** Provides options for retrieving the notification configuration set on an Amazon Glacier vault. */
	export interface GetVaultNotificationsInputFormProperties {
	}
	export function CreateGetVaultNotificationsInputFormGroup() {
		return new FormGroup<GetVaultNotificationsInputFormProperties>({
		});

	}

	export enum StatusCode { InProgress = 0, Succeeded = 1, Failed = 2 }

	export enum Permission { FULL_CONTROL = 0, WRITE = 1, WRITE_ACP = 2, READ = 3, READ_ACP = 4 }

	export enum Type { AmazonCustomerByEmail = 0, CanonicalUser = 1, Group = 2 }


	/** Provides options for defining a job. */
	export interface JobParameters {
		Format?: string | null;
		Type?: string | null;
		ArchiveId?: string | null;
		Description?: string | null;
		SNSTopic?: string | null;
		RetrievalByteRange?: string | null;
		Tier?: string | null;

		/** Provides options for specifying a range inventory retrieval job. */
		InventoryRetrievalParameters?: InventoryRetrievalJobInput;

		/** Contains information about the parameters used for a select. */
		SelectParameters?: SelectParameters;

		/** Contains information about the location where the select job results are stored. */
		OutputLocation?: OutputLocation;
	}

	/** Provides options for defining a job. */
	export interface JobParametersFormProperties {
		Format: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		ArchiveId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		SNSTopic: FormControl<string | null | undefined>,
		RetrievalByteRange: FormControl<string | null | undefined>,
		Tier: FormControl<string | null | undefined>,
	}
	export function CreateJobParametersFormGroup() {
		return new FormGroup<JobParametersFormProperties>({
			Format: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			ArchiveId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			SNSTopic: new FormControl<string | null | undefined>(undefined),
			RetrievalByteRange: new FormControl<string | null | undefined>(undefined),
			Tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides options for initiating an Amazon S3 Glacier job. */
	export interface InitiateJobInput {

		/** Provides options for defining a job. */
		jobParameters?: JobParameters;
	}

	/** Provides options for initiating an Amazon S3 Glacier job. */
	export interface InitiateJobInputFormProperties {
	}
	export function CreateInitiateJobInputFormGroup() {
		return new FormGroup<InitiateJobInputFormProperties>({
		});

	}


	/** Provides options for initiating a multipart upload to an Amazon S3 Glacier vault. */
	export interface InitiateMultipartUploadInput {
	}

	/** Provides options for initiating a multipart upload to an Amazon S3 Glacier vault. */
	export interface InitiateMultipartUploadInputFormProperties {
	}
	export function CreateInitiateMultipartUploadInputFormGroup() {
		return new FormGroup<InitiateMultipartUploadInputFormProperties>({
		});

	}


	/** Contains the vault lock policy. */
	export interface VaultLockPolicy {
		Policy?: string | null;
	}

	/** Contains the vault lock policy. */
	export interface VaultLockPolicyFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateVaultLockPolicyFormGroup() {
		return new FormGroup<VaultLockPolicyFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input values for <code>InitiateVaultLock</code>. */
	export interface InitiateVaultLockInput {

		/** Contains the vault lock policy. */
		policy?: VaultLockPolicy;
	}

	/** The input values for <code>InitiateVaultLock</code>. */
	export interface InitiateVaultLockInputFormProperties {
	}
	export function CreateInitiateVaultLockInputFormGroup() {
		return new FormGroup<InitiateVaultLockInputFormProperties>({
		});

	}


	/** Provides options for retrieving a job list for an Amazon S3 Glacier vault. */
	export interface ListJobsInput {
	}

	/** Provides options for retrieving a job list for an Amazon S3 Glacier vault. */
	export interface ListJobsInputFormProperties {
	}
	export function CreateListJobsInputFormGroup() {
		return new FormGroup<ListJobsInputFormProperties>({
		});

	}


	/** Provides options for retrieving list of in-progress multipart uploads for an Amazon Glacier vault. */
	export interface ListMultipartUploadsInput {
	}

	/** Provides options for retrieving list of in-progress multipart uploads for an Amazon Glacier vault. */
	export interface ListMultipartUploadsInputFormProperties {
	}
	export function CreateListMultipartUploadsInputFormGroup() {
		return new FormGroup<ListMultipartUploadsInputFormProperties>({
		});

	}


	/** Provides options for retrieving a list of parts of an archive that have been uploaded in a specific multipart upload. */
	export interface ListPartsInput {
	}

	/** Provides options for retrieving a list of parts of an archive that have been uploaded in a specific multipart upload. */
	export interface ListPartsInputFormProperties {
	}
	export function CreateListPartsInputFormGroup() {
		return new FormGroup<ListPartsInputFormProperties>({
		});

	}

	export interface ListProvisionedCapacityInput {
	}
	export interface ListProvisionedCapacityInputFormProperties {
	}
	export function CreateListProvisionedCapacityInputFormGroup() {
		return new FormGroup<ListProvisionedCapacityInputFormProperties>({
		});

	}


	/** The input value for <code>ListTagsForVaultInput</code>. */
	export interface ListTagsForVaultInput {
	}

	/** The input value for <code>ListTagsForVaultInput</code>. */
	export interface ListTagsForVaultInputFormProperties {
	}
	export function CreateListTagsForVaultInputFormGroup() {
		return new FormGroup<ListTagsForVaultInputFormProperties>({
		});

	}


	/** Provides options to retrieve the vault list owned by the calling user's account. The list provides metadata information for each vault. */
	export interface ListVaultsInput {
	}

	/** Provides options to retrieve the vault list owned by the calling user's account. The list provides metadata information for each vault. */
	export interface ListVaultsInputFormProperties {
	}
	export function CreateListVaultsInputFormGroup() {
		return new FormGroup<ListVaultsInputFormProperties>({
		});

	}

	export interface PurchaseProvisionedCapacityInput {
	}
	export interface PurchaseProvisionedCapacityInputFormProperties {
	}
	export function CreatePurchaseProvisionedCapacityInputFormGroup() {
		return new FormGroup<PurchaseProvisionedCapacityInputFormProperties>({
		});

	}


	/** The input value for <code>RemoveTagsFromVaultInput</code>. */
	export interface RemoveTagsFromVaultInput {
		TagKeys?: Array<string>;
	}

	/** The input value for <code>RemoveTagsFromVaultInput</code>. */
	export interface RemoveTagsFromVaultInputFormProperties {
	}
	export function CreateRemoveTagsFromVaultInputFormGroup() {
		return new FormGroup<RemoveTagsFromVaultInputFormProperties>({
		});

	}

	export enum StorageClass { STANDARD = 0, REDUCED_REDUNDANCY = 1, STANDARD_IA = 2 }


	/** SetDataRetrievalPolicy input. */
	export interface SetDataRetrievalPolicyInput {

		/** Data retrieval policy. */
		Policy?: DataRetrievalPolicy;
	}

	/** SetDataRetrievalPolicy input. */
	export interface SetDataRetrievalPolicyInputFormProperties {
	}
	export function CreateSetDataRetrievalPolicyInputFormGroup() {
		return new FormGroup<SetDataRetrievalPolicyInputFormProperties>({
		});

	}


	/** SetVaultAccessPolicy input. */
	export interface SetVaultAccessPolicyInput {

		/** Contains the vault access policy. */
		policy?: VaultAccessPolicy;
	}

	/** SetVaultAccessPolicy input. */
	export interface SetVaultAccessPolicyInputFormProperties {
	}
	export function CreateSetVaultAccessPolicyInputFormGroup() {
		return new FormGroup<SetVaultAccessPolicyInputFormProperties>({
		});

	}


	/** Provides options to configure notifications that will be sent when specific events happen to a vault. */
	export interface SetVaultNotificationsInput {

		/** Represents a vault's notification configuration. */
		vaultNotificationConfig?: VaultNotificationConfig;
	}

	/** Provides options to configure notifications that will be sent when specific events happen to a vault. */
	export interface SetVaultNotificationsInputFormProperties {
	}
	export function CreateSetVaultNotificationsInputFormGroup() {
		return new FormGroup<SetVaultNotificationsInputFormProperties>({
		});

	}


	/** Provides options to add an archive to a vault. */
	export interface UploadArchiveInput {
		body?: string | null;
	}

	/** Provides options to add an archive to a vault. */
	export interface UploadArchiveInputFormProperties {
		body: FormControl<string | null | undefined>,
	}
	export function CreateUploadArchiveInputFormGroup() {
		return new FormGroup<UploadArchiveInputFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides options to upload a part of an archive in a multipart upload operation. */
	export interface UploadMultipartPartInput {
		body?: string | null;
	}

	/** Provides options to upload a part of an archive in a multipart upload operation. */
	export interface UploadMultipartPartInputFormProperties {
		body: FormControl<string | null | undefined>,
	}
	export function CreateUploadMultipartPartInputFormGroup() {
		return new FormGroup<UploadMultipartPartInputFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>This operation aborts a multipart upload identified by the upload ID.</p> <p>After the Abort Multipart Upload request succeeds, you cannot upload any more parts to the multipart upload or complete the multipart upload. Aborting a completed upload fails. However, aborting an already-aborted upload will succeed, for a short time. For more information about uploading a part and completing a multipart upload, see <a>UploadMultipartPart</a> and <a>CompleteMultipartUpload</a>.</p> <p>This operation is idempotent.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart Upload</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
		 * Delete {accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @param {string} uploadId The upload ID of the multipart upload to delete.
		 * @return {void} 
		 */
		AbortMultipartUpload(accountId: string, vaultName: string, uploadId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/multipart-uploads/' + (uploadId == null ? '' : encodeURIComponent(uploadId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>You call this operation to inform Amazon S3 Glacier (Glacier) that all the archive parts have been uploaded and that Glacier can now assemble the archive from the uploaded parts. After assembling and saving the archive to the vault, Glacier returns the URI path of the newly created archive resource. Using the URI path, you can then access the archive. After you upload an archive, you should save the archive ID returned to retrieve the archive at a later point. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see <a>InitiateJob</a>.</p> <p>In the request, you must include the computed SHA256 tree hash of the entire archive you have uploaded. For information about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing Checksums</a>. On the server side, Glacier also constructs the SHA256 tree hash of the assembled archive. If the values match, Glacier saves the archive to the vault; otherwise, it returns an error, and the operation fails. The <a>ListParts</a> operation returns a list of parts uploaded for a specific multipart upload. It includes checksum information for each uploaded part that can be used to debug a bad checksum issue.</p> <p>Additionally, Glacier also checks for any missing content ranges when assembling the archive, if missing content ranges are found, Glacier returns an error and the operation fails.</p> <p>Complete Multipart Upload is an idempotent operation. After your first successful complete multipart upload, if you call the operation again within a short period, the operation will succeed and return the same archive ID. This is useful in the event you experience a network issue that causes an aborted connection or receive a 500 server error, in which case you can repeat your Complete Multipart Upload request and get the same archive ID without creating duplicate archives. Note, however, that after the multipart upload completes, you cannot call the List Parts operation and the multipart upload will not appear in List Multipart Uploads response, even if idempotent complete is possible.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-complete-upload.html">Complete Multipart Upload</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
		 * Post {accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @param {string} uploadId The upload ID of the multipart upload.
		 * @return {void} 
		 */
		CompleteMultipartUpload(accountId: string, vaultName: string, uploadId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/multipart-uploads/' + (uploadId == null ? '' : encodeURIComponent(uploadId)) + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation lists the parts of an archive that have been uploaded in a specific multipart upload. You can make this request at any time during an in-progress multipart upload before you complete the upload (see <a>CompleteMultipartUpload</a>. List Parts returns an error for completed uploads. The list returned in the List Parts response is sorted by part range. </p> <p>The List Parts operation supports pagination. By default, this operation returns up to 50 uploaded parts in the response. You should always check the response for a <code>marker</code> at which to continue the list; if there are no more items the <code>marker</code> is <code>null</code>. To return a list of parts that begins at a specific part, set the <code>marker</code> request parameter to the value you obtained from a previous List Parts request. You can also limit the number of parts returned in the response by specifying the <code>limit</code> parameter in the request. </p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-parts.html">List Parts</a> in the <i>Amazon Glacier Developer Guide</i>.</p>
		 * Get {accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
		 * @param {string} vaultName The name of the vault.
		 * @param {string} uploadId The upload ID of the multipart upload.
		 * @param {string} marker An opaque string used for pagination. This value specifies the part at which the listing of parts should begin. Get the marker value from the response of a previous List Parts response. You need only include the marker if you are continuing the pagination of results started in a previous List Parts request.
		 * @param {string} limit The maximum number of parts to be returned. The default limit is 50. The number of parts returned might be fewer than the specified limit, but the number of returned parts never exceeds the limit.
		 * @return {ListPartsOutput} Success
		 */
		ListParts(accountId: string, vaultName: string, uploadId: string, marker: string | null | undefined, limit: string | null | undefined): Observable<ListPartsOutput> {
			return this.http.get<ListPartsOutput>(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/multipart-uploads/' + (uploadId == null ? '' : encodeURIComponent(uploadId)) + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '', {});
		}

		/**
		 * <p>This operation uploads a part of an archive. You can upload archive parts in any order. You can also upload them in parallel. You can upload up to 10,000 parts for a multipart upload.</p> <p>Amazon Glacier rejects your upload part request if any of the following conditions is true:</p> <ul> <li> <p> <b>SHA256 tree hash does not match</b>To ensure that part data is not corrupted in transmission, you compute a SHA256 tree hash of the part and include it in your request. Upon receiving the part data, Amazon S3 Glacier also computes a SHA256 tree hash. If these hash values don't match, the operation fails. For information about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing Checksums</a>.</p> </li> <li> <p> <b>Part size does not match</b>The size of each part except the last must match the size specified in the corresponding <a>InitiateMultipartUpload</a> request. The size of the last part must be the same size as, or smaller than, the specified size.</p> <note> <p>If you upload a part whose size is smaller than the part size you specified in your initiate multipart upload request and that part is not the last part, then the upload part request will succeed. However, the subsequent Complete Multipart Upload request will fail.</p> </note> </li> <li> <p> <b>Range does not align</b>The byte range value in the request does not align with the part size specified in the corresponding initiate request. For example, if you specify a part size of 4194304 bytes (4 MB), then 0 to 4194303 bytes (4 MB - 1) and 4194304 (4 MB) to 8388607 (8 MB - 1) are valid part ranges. However, if you set a range value of 2 MB to 6 MB, the range does not align with the part size and the upload will fail. </p> </li> </ul> <p>This operation is idempotent. If you upload the same part multiple times, the data included in the most recent request overwrites the previously uploaded data.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-upload-part.html">Upload Part </a> in the <i>Amazon Glacier Developer Guide</i>.</p>
		 * Put {accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
		 * @param {string} vaultName The name of the vault.
		 * @param {string} uploadId The upload ID of the multipart upload.
		 * @return {void} 
		 */
		UploadMultipartPart(accountId: string, vaultName: string, uploadId: string, requestBody: UploadMultipartPartPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/multipart-uploads/' + (uploadId == null ? '' : encodeURIComponent(uploadId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation aborts the vault locking process if the vault lock is not in the <code>Locked</code> state. If the vault lock is in the <code>Locked</code> state when this operation is requested, the operation returns an <code>AccessDeniedException</code> error. Aborting the vault locking process removes the vault lock policy from the specified vault. </p> <p>A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. A vault lock is put into the <code>Locked</code> state by calling <a>CompleteVaultLock</a>. You can get the state of a vault lock by calling <a>GetVaultLock</a>. For more information about the vault locking process, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. For more information about vault lock policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon Glacier Access Control with Vault Lock Policies</a>. </p> <p>This operation is idempotent. You can successfully invoke this operation multiple times, if the vault lock is in the <code>InProgress</code> state or if there is no policy associated with the vault.</p>
		 * Delete {accountId}/vaults/{vaultName}/lock-policy
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @return {void} 
		 */
		AbortVaultLock(accountId: string, vaultName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/lock-policy', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation retrieves the following attributes from the <code>lock-policy</code> subresource set on the specified vault: </p> <ul> <li> <p>The vault lock policy set on the vault.</p> </li> <li> <p>The state of the vault lock, which is either <code>InProgess</code> or <code>Locked</code>.</p> </li> <li> <p>When the lock ID expires. The lock ID is used to complete the vault locking process.</p> </li> <li> <p>When the vault lock was initiated and put into the <code>InProgress</code> state.</p> </li> </ul> <p>A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. A vault lock is put into the <code>Locked</code> state by calling <a>CompleteVaultLock</a>. You can abort the vault locking process by calling <a>AbortVaultLock</a>. For more information about the vault locking process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. </p> <p>If there is no vault lock policy set on the vault, the operation returns a <code>404 Not found</code> error. For more information about vault lock policies, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon Glacier Access Control with Vault Lock Policies</a>. </p>
		 * Get {accountId}/vaults/{vaultName}/lock-policy
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @return {GetVaultLockOutput} Success
		 */
		GetVaultLock(accountId: string, vaultName: string): Observable<GetVaultLockOutput> {
			return this.http.get<GetVaultLockOutput>(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/lock-policy', {});
		}

		/**
		 * <p>This operation initiates the vault locking process by doing the following:</p> <ul> <li> <p>Installing a vault lock policy on the specified vault.</p> </li> <li> <p>Setting the lock state of vault lock to <code>InProgress</code>.</p> </li> <li> <p>Returning a lock ID, which is used to complete the vault locking process.</p> </li> </ul> <p>You can set one vault lock policy for each vault and this policy can be up to 20 KB in size. For more information about vault lock policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon Glacier Access Control with Vault Lock Policies</a>. </p> <p>You must complete the vault locking process within 24 hours after the vault lock enters the <code>InProgress</code> state. After the 24 hour window ends, the lock ID expires, the vault automatically exits the <code>InProgress</code> state, and the vault lock policy is removed from the vault. You call <a>CompleteVaultLock</a> to complete the vault locking process by setting the state of the vault lock to <code>Locked</code>. </p> <p>After a vault lock is in the <code>Locked</code> state, you cannot initiate a new vault lock for the vault.</p> <p>You can abort the vault locking process by calling <a>AbortVaultLock</a>. You can get the state of the vault lock by calling <a>GetVaultLock</a>. For more information about the vault locking process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>.</p> <p>If this operation is called when the vault lock is in the <code>InProgress</code> state, the operation returns an <code>AccessDeniedException</code> error. When the vault lock is in the <code>InProgress</code> state you must call <a>AbortVaultLock</a> before you can initiate a new vault lock policy. </p>
		 * Post {accountId}/vaults/{vaultName}/lock-policy
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @return {void} 
		 */
		InitiateVaultLock(accountId: string, vaultName: string, requestBody: InitiateVaultLockPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/lock-policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation adds the specified tags to a vault. Each tag is composed of a key and a value. Each vault can have up to 10 tags. If your request would cause the tag limit for the vault to be exceeded, the operation throws the <code>LimitExceededException</code> error. If a tag already exists on the vault under a specified key, the existing key value will be overwritten. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>.
		 * Post {accountId}/vaults/{vaultName}/tags#operation=add
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @return {void} 
		 */
		AddTagsToVault(accountId: string, vaultName: string, operation: AddTagsToVaultOperation, requestBody: AddTagsToVaultPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/tags#operation=add&operation=' + operation + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation completes the vault locking process by transitioning the vault lock from the <code>InProgress</code> state to the <code>Locked</code> state, which causes the vault lock policy to become unchangeable. A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. You can obtain the state of the vault lock by calling <a>GetVaultLock</a>. For more information about the vault locking process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. </p> <p>This operation is idempotent. This request is always successful if the vault lock is in the <code>Locked</code> state and the provided lock ID matches the lock ID originally used to lock the vault.</p> <p>If an invalid lock ID is passed in the request when the vault lock is in the <code>Locked</code> state, the operation returns an <code>AccessDeniedException</code> error. If an invalid lock ID is passed in the request when the vault lock is in the <code>InProgress</code> state, the operation throws an <code>InvalidParameter</code> error.</p>
		 * Post {accountId}/vaults/{vaultName}/lock-policy/{lockId}
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @param {string} lockId The <code>lockId</code> value is the lock ID obtained from a <a>InitiateVaultLock</a> request.
		 * @return {void} 
		 */
		CompleteVaultLock(accountId: string, vaultName: string, lockId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/lock-policy/' + (lockId == null ? '' : encodeURIComponent(lockId)) + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation creates a new vault with the specified name. The name of the vault must be unique within a region for an AWS account. You can create up to 1,000 vaults per account. If you need to create more vaults, contact Amazon S3 Glacier.</p> <p>You must use the following guidelines when naming a vault.</p> <ul> <li> <p>Names can be between 1 and 255 characters long.</p> </li> <li> <p>Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), and '.' (period).</p> </li> </ul> <p>This operation is idempotent.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/creating-vaults.html">Creating a Vault in Amazon Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html">Create Vault </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
		 * Put {accountId}/vaults/{vaultName}
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @return {void} 
		 */
		CreateVault(accountId: string, vaultName: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation deletes a vault. Amazon S3 Glacier will delete a vault only if there are no archives in the vault as of the last inventory and there have been no writes to the vault since the last inventory. If either of these conditions is not satisfied, the vault deletion fails (that is, the vault is not removed) and Amazon S3 Glacier returns an error. You can use <a>DescribeVault</a> to return the number of archives in a vault, and you can use <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate a Job (POST jobs)</a> to initiate a new inventory retrieval for a vault. The inventory contains the archive IDs you use to delete archives using <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html">Delete Archive (DELETE archive)</a>.</p> <p>This operation is idempotent.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-vaults.html">Deleting a Vault in Amazon Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-delete.html">Delete Vault </a> in the <i>Amazon S3 Glacier Developer Guide</i>. </p>
		 * Delete {accountId}/vaults/{vaultName}
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @return {void} 
		 */
		DeleteVault(accountId: string, vaultName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation returns information about a vault, including the vault's Amazon Resource Name (ARN), the date the vault was created, the number of archives it contains, and the total size of all the archives in the vault. The number of archives and their total size are as of the last inventory generation. This means that if you add or remove an archive from a vault, and then immediately use Describe Vault, the change in contents will not be immediately reflected. If you want to retrieve the latest inventory of the vault, use <a>InitiateJob</a>. Amazon S3 Glacier generates vault inventories approximately daily. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html">Downloading a Vault Inventory in Amazon S3 Glacier</a>. </p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html">Retrieving Vault Metadata in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get.html">Describe Vault </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
		 * Get {accountId}/vaults/{vaultName}
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
		 * @param {string} vaultName The name of the vault.
		 * @return {DescribeVaultOutput} Success
		 */
		DescribeVault(accountId: string, vaultName: string): Observable<DescribeVaultOutput> {
			return this.http.get<DescribeVaultOutput>(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '', {});
		}

		/**
		 * <p>This operation deletes an archive from a vault. Subsequent requests to initiate a retrieval of this archive will fail. Archive retrievals that are in progress for this archive ID may or may not succeed according to the following scenarios:</p> <ul> <li> <p>If the archive retrieval job is actively preparing the data for download when Amazon S3 Glacier receives the delete archive request, the archival retrieval operation might fail.</p> </li> <li> <p>If the archive retrieval job has successfully prepared the archive for download when Amazon S3 Glacier receives the delete archive request, you will be able to download the output.</p> </li> </ul> <p>This operation is idempotent. Attempting to delete an already-deleted archive does not result in an error.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-an-archive.html">Deleting an Archive in Amazon Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html">Delete Archive</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
		 * Delete {accountId}/vaults/{vaultName}/archives/{archiveId}
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @param {string} archiveId The ID of the archive to delete.
		 * @return {void} 
		 */
		DeleteArchive(accountId: string, vaultName: string, archiveId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/archives/' + (archiveId == null ? '' : encodeURIComponent(archiveId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation deletes the access policy associated with the specified vault. The operation is eventually consistent; that is, it might take some time for Amazon S3 Glacier to completely remove the access policy, and you might still see the effect of the policy for a short time after you send the delete request.</p> <p>This operation is idempotent. You can invoke delete multiple times, even if there is no policy associated with the vault. For more information about vault access policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>. </p>
		 * Delete {accountId}/vaults/{vaultName}/access-policy
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
		 * @param {string} vaultName The name of the vault.
		 * @return {void} 
		 */
		DeleteVaultAccessPolicy(accountId: string, vaultName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/access-policy', { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation retrieves the <code>access-policy</code> subresource set on the vault; for more information on setting this subresource, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html">Set Vault Access Policy (PUT access-policy)</a>. If there is no access policy set on the vault, the operation returns a <code>404 Not found</code> error. For more information about vault access policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>.
		 * Get {accountId}/vaults/{vaultName}/access-policy
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @return {GetVaultAccessPolicyOutput} Success
		 */
		GetVaultAccessPolicy(accountId: string, vaultName: string): Observable<GetVaultAccessPolicyOutput> {
			return this.http.get<GetVaultAccessPolicyOutput>(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/access-policy', {});
		}

		/**
		 * This operation configures an access policy for a vault and will overwrite an existing policy. To configure a vault access policy, send a PUT request to the <code>access-policy</code> subresource of the vault. An access policy is specific to a vault and is also called a vault subresource. You can set one access policy per vault and the policy can be up to 20 KB in size. For more information about vault access policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>.
		 * Put {accountId}/vaults/{vaultName}/access-policy
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @return {void} 
		 */
		SetVaultAccessPolicy(accountId: string, vaultName: string, requestBody: SetVaultAccessPolicyPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/access-policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation deletes the notification configuration set for a vault. The operation is eventually consistent; that is, it might take some time for Amazon S3 Glacier to completely disable the notifications and you might still receive some notifications for a short time after you send the delete request.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-delete.html">Delete Vault Notification Configuration </a> in the Amazon S3 Glacier Developer Guide. </p>
		 * Delete {accountId}/vaults/{vaultName}/notification-configuration
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
		 * @param {string} vaultName The name of the vault.
		 * @return {void} 
		 */
		DeleteVaultNotifications(accountId: string, vaultName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/notification-configuration', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation retrieves the <code>notification-configuration</code> subresource of the specified vault.</p> <p>For information about setting a notification configuration on a vault, see <a>SetVaultNotifications</a>. If a notification configuration for a vault is not set, the operation returns a <code>404 Not Found</code> error. For more information about vault notifications, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault Notifications in Amazon S3 Glacier</a>. </p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-get.html">Get Vault Notification Configuration </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
		 * Get {accountId}/vaults/{vaultName}/notification-configuration
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @return {GetVaultNotificationsOutput} Success
		 */
		GetVaultNotifications(accountId: string, vaultName: string): Observable<GetVaultNotificationsOutput> {
			return this.http.get<GetVaultNotificationsOutput>(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/notification-configuration', {});
		}

		/**
		 * <p>This operation configures notifications that will be sent when specific events happen to a vault. By default, you don't get any notifications.</p> <p>To configure vault notifications, send a PUT request to the <code>notification-configuration</code> subresource of the vault. The request should include a JSON document that provides an Amazon SNS topic and specific events for which you want Amazon S3 Glacier to send notifications to the topic.</p> <p>Amazon SNS topics must grant permission to the vault to be allowed to publish notifications to the topic. You can configure a vault to publish a notification for the following vault events:</p> <ul> <li> <p> <b>ArchiveRetrievalCompleted</b> This event occurs when a job that was initiated for an archive retrieval is completed (<a>InitiateJob</a>). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from <a>DescribeJob</a>. </p> </li> <li> <p> <b>InventoryRetrievalCompleted</b> This event occurs when a job that was initiated for an inventory retrieval is completed (<a>InitiateJob</a>). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from <a>DescribeJob</a>. </p> </li> </ul> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-put.html">Set Vault Notification Configuration </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
		 * Put {accountId}/vaults/{vaultName}/notification-configuration
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @return {void} 
		 */
		SetVaultNotifications(accountId: string, vaultName: string, requestBody: SetVaultNotificationsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/notification-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation returns information about a job you previously initiated, including the job initiation date, the user who initiated the job, the job status code/message and the Amazon SNS topic to notify after Amazon S3 Glacier (Glacier) completes the job. For more information about initiating a job, see <a>InitiateJob</a>. </p> <note> <p>This operation enables you to check the status of your job. However, it is strongly recommended that you set up an Amazon SNS topic and specify it in your initiate job request so that Glacier can notify the topic after it completes the job.</p> </note> <p>A job ID will not expire for at least 24 hours after Glacier completes the job.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For more information about using this operation, see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-describe-job-get.html">Describe Job</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
		 * Get {accountId}/vaults/{vaultName}/jobs/{jobId}
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
		 * @param {string} vaultName The name of the vault.
		 * @param {string} jobId The ID of the job to describe.
		 * @return {GlacierJobDescription} Success
		 */
		DescribeJob(accountId: string, vaultName: string, jobId: string): Observable<GlacierJobDescription> {
			return this.http.get<GlacierJobDescription>(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '', {});
		}

		/**
		 * This operation returns the current data retrieval policy for the account and region specified in the GET request. For more information about data retrieval policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon Glacier Data Retrieval Policies</a>.
		 * Get {accountId}/policies/data-retrieval
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID. 
		 * @return {GetDataRetrievalPolicyOutput} Success
		 */
		GetDataRetrievalPolicy(accountId: string): Observable<GetDataRetrievalPolicyOutput> {
			return this.http.get<GetDataRetrievalPolicyOutput>(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/policies/data-retrieval', {});
		}

		/**
		 * <p>This operation sets and then enacts a data retrieval policy in the region specified in the PUT request. You can set one policy per region for an AWS account. The policy is enacted within a few minutes of a successful PUT operation.</p> <p>The set policy operation does not affect retrieval jobs that were in progress before the policy was enacted. For more information about data retrieval policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon Glacier Data Retrieval Policies</a>. </p>
		 * Put {accountId}/policies/data-retrieval
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
		 * @return {void} 
		 */
		SetDataRetrievalPolicy(accountId: string, requestBody: SetDataRetrievalPolicyPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/policies/data-retrieval', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation downloads the output of the job you initiated using <a>InitiateJob</a>. Depending on the job type you specified when you initiated the job, the output will be either the content of an archive or a vault inventory.</p> <p>You can download all the job output or download a portion of the output by specifying a byte range. In the case of an archive retrieval job, depending on the byte range you specify, Amazon S3 Glacier (Glacier) returns the checksum for the portion of the data. You can compute the checksum on the client and verify that the values match to ensure the portion you downloaded is the correct data.</p> <p>A job ID will not expire for at least 24 hours after Glacier completes the job. That a byte range. For both archive and inventory retrieval jobs, you should verify the downloaded size against the size returned in the headers from the <b>Get Job Output</b> response.</p> <p>For archive retrieval jobs, you should also verify that the size is what you expected. If you download a portion of the output, the expected size is based on the range of bytes you specified. For example, if you specify a range of <code>bytes=0-1048575</code>, you should verify your download size is 1,048,576 bytes. If you download an entire archive, the expected size is the size of the archive when you uploaded it to Amazon S3 Glacier The expected size is also returned in the headers from the <b>Get Job Output</b> response.</p> <p>In the case of an archive retrieval job, depending on the byte range you specify, Glacier returns the checksum for the portion of the data. To ensure the portion you downloaded is the correct data, compute the checksum on the client, verify that the values match, and verify that the size is what you expected.</p> <p>A job ID does not expire for at least 24 hours after Glacier completes the job. That is, you can download the job output within the 24 hours period after Amazon Glacier completes the job.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html">Downloading a Vault Inventory</a>, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/downloading-an-archive.html">Downloading an Archive</a>, and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-job-output-get.html">Get Job Output </a> </p>
		 * Get {accountId}/vaults/{vaultName}/jobs/{jobId}/output
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @param {string} jobId The job ID whose data is downloaded.
		 * @return {GetJobOutputOutput} Success
		 */
		GetJobOutput(accountId: string, vaultName: string, jobId: string): Observable<GetJobOutputOutput> {
			return this.http.get<GetJobOutputOutput>(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/output', {});
		}

		/**
		 * This operation initiates a job of the specified type, which can be a select, an archival retrieval, or a vault retrieval. For more information about using this operation, see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate a Job</a>.
		 * Post {accountId}/vaults/{vaultName}/jobs
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @return {void} 
		 */
		InitiateJob(accountId: string, vaultName: string, requestBody: InitiateJobPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation lists jobs for a vault, including jobs that are in-progress and jobs that have recently finished. The List Job operation returns a list of these jobs sorted by job initiation time.</p> <note> <p>Amazon Glacier retains recently completed jobs for a period before deleting them; however, it eventually removes completed jobs. The output of completed jobs can be retrieved. Retaining completed jobs for a period of time after they have completed enables you to get a job output in the event you miss the job completion notification or your first attempt to download it fails. For example, suppose you start an archive retrieval job to download an archive. After the job completes, you start to download the archive but encounter a network error. In this scenario, you can retry and download the archive while the job exists.</p> </note> <p>The List Jobs operation supports pagination. You should always check the response <code>Marker</code> field. If there are no more jobs to list, the <code>Marker</code> field is set to <code>null</code>. If there are more jobs to list, the <code>Marker</code> field is set to a non-null value, which you can use to continue the pagination of the list. To return a list of jobs that begins at a specific job, set the marker request parameter to the <code>Marker</code> value for that job that you obtained from a previous List Jobs request.</p> <p>You can set a maximum limit for the number of jobs returned in the response by specifying the <code>limit</code> parameter in the request. The default limit is 50. The number of jobs returned might be fewer than the limit, but the number of returned jobs never exceeds the limit.</p> <p>Additionally, you can filter the jobs list returned by specifying the optional <code>statuscode</code> parameter or <code>completed</code> parameter, or both. Using the <code>statuscode</code> parameter, you can specify to return only jobs that match either the <code>InProgress</code>, <code>Succeeded</code>, or <code>Failed</code> status. Using the <code>completed</code> parameter, you can specify to return only jobs that were completed (<code>true</code>) or jobs that were not completed (<code>false</code>).</p> <p>For more information about using this operation, see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-jobs-get.html">List Jobs</a>. </p>
		 * Get {accountId}/vaults/{vaultName}/jobs
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
		 * @param {string} vaultName The name of the vault.
		 * @param {string} limit The maximum number of jobs to be returned. The default limit is 50. The number of jobs returned might be fewer than the specified limit, but the number of returned jobs never exceeds the limit.
		 * @param {string} marker An opaque string used for pagination. This value specifies the job at which the listing of jobs should begin. Get the marker value from a previous List Jobs response. You only need to include the marker if you are continuing the pagination of results started in a previous List Jobs request.
		 * @param {string} statuscode The type of job status to return. You can specify the following values: <code>InProgress</code>, <code>Succeeded</code>, or <code>Failed</code>.
		 * @param {string} completed The state of the jobs to return. You can specify <code>true</code> or <code>false</code>.
		 * @return {ListJobsOutput} Success
		 */
		ListJobs(accountId: string, vaultName: string, limit: string | null | undefined, marker: string | null | undefined, statuscode: string | null | undefined, completed: string | null | undefined): Observable<ListJobsOutput> {
			return this.http.get<ListJobsOutput>(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/jobs&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&statuscode=' + (statuscode == null ? '' : encodeURIComponent(statuscode)) + '&completed=' + (completed == null ? '' : encodeURIComponent(completed)) + '', {});
		}

		/**
		 * <p>This operation initiates a multipart upload. Amazon S3 Glacier creates a multipart upload resource and returns its ID in the response. The multipart upload ID is used in subsequent requests to upload parts of an archive (see <a>UploadMultipartPart</a>).</p> <p>When you initiate a multipart upload, you specify the part size in number of bytes. The part size must be a megabyte (1024 KB) multiplied by a power of 2-for example, 1048576 (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable part size is 1 MB, and the maximum is 4 GB.</p> <p>Every part you upload to this resource (see <a>UploadMultipartPart</a>), except the last one, must have the same size. The last one can be the same size or smaller. For example, suppose you want to upload a 16.2 MB file. If you initiate the multipart upload with a part size of 4 MB, you will upload four parts of 4 MB each and one part of 0.2 MB. </p> <note> <p>You don't need to know the size of the archive when you start a multipart upload because Amazon S3 Glacier does not require you to specify the overall archive size.</p> </note> <p>After you complete the multipart upload, Amazon S3 Glacier (Glacier) removes the multipart upload resource referenced by the ID. Glacier also removes the multipart upload resource if you cancel the multipart upload or it may be removed if there is no activity for a period of 24 hours.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-initiate-upload.html">Initiate Multipart Upload</a> in the <i>Amazon Glacier Developer Guide</i>.</p>
		 * Post {accountId}/vaults/{vaultName}/multipart-uploads
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
		 * @param {string} vaultName The name of the vault.
		 * @return {void} 
		 */
		InitiateMultipartUpload(accountId: string, vaultName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/multipart-uploads', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation lists in-progress multipart uploads for the specified vault. An in-progress multipart upload is a multipart upload that has been initiated by an <a>InitiateMultipartUpload</a> request, but has not yet been completed or aborted. The list returned in the List Multipart Upload response has no guaranteed order. </p> <p>The List Multipart Uploads operation supports pagination. By default, this operation returns up to 50 multipart uploads in the response. You should always check the response for a <code>marker</code> at which to continue the list; if there are no more items the <code>marker</code> is <code>null</code>. To return a list of multipart uploads that begins at a specific upload, set the <code>marker</code> request parameter to the value you obtained from a previous List Multipart Upload request. You can also limit the number of uploads returned in the response by specifying the <code>limit</code> parameter in the request.</p> <p>Note the difference between this operation and listing parts (<a>ListParts</a>). The List Multipart Uploads operation lists all multipart uploads for a vault and does not require a multipart upload ID. The List Parts operation requires a multipart upload ID since parts are associated with a single upload.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html">List Multipart Uploads </a> in the <i>Amazon Glacier Developer Guide</i>.</p>
		 * Get {accountId}/vaults/{vaultName}/multipart-uploads
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
		 * @param {string} vaultName The name of the vault.
		 * @param {string} marker An opaque string used for pagination. This value specifies the upload at which the listing of uploads should begin. Get the marker value from a previous List Uploads response. You need only include the marker if you are continuing the pagination of results started in a previous List Uploads request.
		 * @param {string} limit Specifies the maximum number of uploads returned in the response body. If this value is not specified, the List Uploads operation returns up to 50 uploads.
		 * @return {ListMultipartUploadsOutput} Success
		 */
		ListMultipartUploads(accountId: string, vaultName: string, marker: string | null | undefined, limit: string | null | undefined): Observable<ListMultipartUploadsOutput> {
			return this.http.get<ListMultipartUploadsOutput>(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/multipart-uploads&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '', {});
		}

		/**
		 * This operation lists the provisioned capacity units for the specified AWS account.
		 * Get {accountId}/provisioned-capacity
		 * @param {string} accountId The AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, don't include any hyphens ('-') in the ID. 
		 * @return {ListProvisionedCapacityOutput} Success
		 */
		ListProvisionedCapacity(accountId: string): Observable<ListProvisionedCapacityOutput> {
			return this.http.get<ListProvisionedCapacityOutput>(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/provisioned-capacity', {});
		}

		/**
		 * This operation purchases a provisioned capacity unit for an AWS account.
		 * Post {accountId}/provisioned-capacity
		 * @param {string} accountId The AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, don't include any hyphens ('-') in the ID. 
		 * @return {void} 
		 */
		PurchaseProvisionedCapacity(accountId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/provisioned-capacity', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation lists all the tags attached to a vault. The operation returns an empty map if there are no tags. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>.
		 * Get {accountId}/vaults/{vaultName}/tags
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @return {ListTagsForVaultOutput} Success
		 */
		ListTagsForVault(accountId: string, vaultName: string): Observable<ListTagsForVaultOutput> {
			return this.http.get<ListTagsForVaultOutput>(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/tags', {});
		}

		/**
		 * <p>This operation lists all vaults owned by the calling user's account. The list returned in the response is ASCII-sorted by vault name.</p> <p>By default, this operation returns up to 10 items. If there are more vaults to list, the response <code>marker</code> field contains the vault Amazon Resource Name (ARN) at which to continue the list with a new List Vaults request; otherwise, the <code>marker</code> field is <code>null</code>. To return a list of vaults that begins at a specific vault, set the <code>marker</code> request parameter to the vault ARN you obtained from a previous List Vaults request. You can also limit the number of vaults returned in the response by specifying the <code>limit</code> parameter in the request. </p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html">Retrieving Vault Metadata in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vaults-get.html">List Vaults </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
		 * Get {accountId}/vaults
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} marker A string used for pagination. The marker specifies the vault ARN after which the listing of vaults should begin.
		 * @param {string} limit The maximum number of vaults to be returned. The default limit is 10. The number of vaults returned might be fewer than the specified limit, but the number of returned vaults never exceeds the limit.
		 * @return {ListVaultsOutput} Success
		 */
		ListVaults(accountId: string, marker: string | null | undefined, limit: string | null | undefined): Observable<ListVaultsOutput> {
			return this.http.get<ListVaultsOutput>(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '', {});
		}

		/**
		 * This operation removes one or more tags from the set of tags attached to a vault. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>. This operation is idempotent. The operation will be successful, even if there are no tags attached to the vault.
		 * Post {accountId}/vaults/{vaultName}/tags#operation=remove
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
		 * @param {string} vaultName The name of the vault.
		 * @return {void} 
		 */
		RemoveTagsFromVault(accountId: string, vaultName: string, operation: RemoveTagsFromVaultOperation, requestBody: RemoveTagsFromVaultPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/tags#operation=remove&operation=' + operation + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation adds an archive to a vault. This is a synchronous operation, and for a successful upload, your data is durably persisted. Amazon S3 Glacier returns the archive ID in the <code>x-amz-archive-id</code> header of the response. </p> <p>You must use the archive ID to access your data in Amazon S3 Glacier. After you upload an archive, you should save the archive ID returned so that you can retrieve or delete the archive later. Besides saving the archive ID, you can also index it and give it a friendly name to allow for better searching. You can also use the optional archive description field to specify how the archive is referred to in an external index of archives, such as you might create in Amazon DynamoDB. You can also get the vault inventory to obtain a list of archive IDs in a vault. For more information, see <a>InitiateJob</a>. </p> <p>You must provide a SHA256 tree hash of the data you are uploading. For information about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing Checksums</a>. </p> <p>You can optionally specify an archive description of up to 1,024 printable ASCII characters. You can get the archive description when you either retrieve the archive or get the vault inventory. For more information, see <a>InitiateJob</a>. Amazon Glacier does not interpret the description in any way. An archive description does not need to be unique. You cannot use the description to retrieve or sort the archive list. </p> <p>Archives are immutable. After you upload an archive, you cannot edit the archive or its description.</p> <p>An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using AWS Identity and Access Management (IAM)</a>.</p> <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-an-archive.html">Uploading an Archive in Amazon Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
		 * Post {accountId}/vaults/{vaultName}/archives
		 * @param {string} vaultName The name of the vault.
		 * @param {string} accountId The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID. 
		 * @return {void} 
		 */
		UploadArchive(vaultName: string, accountId: string, requestBody: UploadArchivePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (accountId == null ? '' : encodeURIComponent(accountId)) + '/vaults/' + (vaultName == null ? '' : encodeURIComponent(vaultName)) + '/archives', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface UploadMultipartPartPutBody {

		/** The data to upload. */
		body?: string | null;
	}
	export interface UploadMultipartPartPutBodyFormProperties {

		/** The data to upload. */
		body: FormControl<string | null | undefined>,
	}
	export function CreateUploadMultipartPartPutBodyFormGroup() {
		return new FormGroup<UploadMultipartPartPutBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InitiateVaultLockPostBody {

		/** Contains the vault lock policy. */
		policy?: InitiateVaultLockPostBodyPolicy;
	}
	export interface InitiateVaultLockPostBodyFormProperties {
	}
	export function CreateInitiateVaultLockPostBodyFormGroup() {
		return new FormGroup<InitiateVaultLockPostBodyFormProperties>({
		});

	}

	export interface InitiateVaultLockPostBodyPolicy {
		Policy?: string | null;
	}
	export interface InitiateVaultLockPostBodyPolicyFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateInitiateVaultLockPostBodyPolicyFormGroup() {
		return new FormGroup<InitiateVaultLockPostBodyPolicyFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AddTagsToVaultOperation { add = 0 }

	export interface AddTagsToVaultPostBody {

		/** The tags to add to the vault. Each tag is composed of a key and a value. The value can be an empty string. */
		Tags?: {[id: string]: string };
	}
	export interface AddTagsToVaultPostBodyFormProperties {

		/** The tags to add to the vault. Each tag is composed of a key and a value. The value can be an empty string. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAddTagsToVaultPostBodyFormGroup() {
		return new FormGroup<AddTagsToVaultPostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface SetVaultAccessPolicyPutBody {

		/** Contains the vault access policy. */
		policy?: SetVaultAccessPolicyPutBodyPolicy;
	}
	export interface SetVaultAccessPolicyPutBodyFormProperties {
	}
	export function CreateSetVaultAccessPolicyPutBodyFormGroup() {
		return new FormGroup<SetVaultAccessPolicyPutBodyFormProperties>({
		});

	}

	export interface SetVaultAccessPolicyPutBodyPolicy {
		Policy?: string | null;
	}
	export interface SetVaultAccessPolicyPutBodyPolicyFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateSetVaultAccessPolicyPutBodyPolicyFormGroup() {
		return new FormGroup<SetVaultAccessPolicyPutBodyPolicyFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetVaultNotificationsPutBody {

		/** Represents a vault's notification configuration. */
		vaultNotificationConfig?: SetVaultNotificationsPutBodyVaultNotificationConfig;
	}
	export interface SetVaultNotificationsPutBodyFormProperties {
	}
	export function CreateSetVaultNotificationsPutBodyFormGroup() {
		return new FormGroup<SetVaultNotificationsPutBodyFormProperties>({
		});

	}

	export interface SetVaultNotificationsPutBodyVaultNotificationConfig {
		SNSTopic?: string | null;
		Events?: Array<string>;
	}
	export interface SetVaultNotificationsPutBodyVaultNotificationConfigFormProperties {
		SNSTopic: FormControl<string | null | undefined>,
	}
	export function CreateSetVaultNotificationsPutBodyVaultNotificationConfigFormGroup() {
		return new FormGroup<SetVaultNotificationsPutBodyVaultNotificationConfigFormProperties>({
			SNSTopic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetDataRetrievalPolicyPutBody {

		/** Data retrieval policy. */
		Policy?: SetDataRetrievalPolicyPutBodyPolicy;
	}
	export interface SetDataRetrievalPolicyPutBodyFormProperties {
	}
	export function CreateSetDataRetrievalPolicyPutBodyFormGroup() {
		return new FormGroup<SetDataRetrievalPolicyPutBodyFormProperties>({
		});

	}

	export interface SetDataRetrievalPolicyPutBodyPolicy {
		Rules?: Array<DataRetrievalRule>;
	}
	export interface SetDataRetrievalPolicyPutBodyPolicyFormProperties {
	}
	export function CreateSetDataRetrievalPolicyPutBodyPolicyFormGroup() {
		return new FormGroup<SetDataRetrievalPolicyPutBodyPolicyFormProperties>({
		});

	}

	export interface InitiateJobPostBody {

		/** Provides options for defining a job. */
		jobParameters?: InitiateJobPostBodyJobParameters;
	}
	export interface InitiateJobPostBodyFormProperties {
	}
	export function CreateInitiateJobPostBodyFormGroup() {
		return new FormGroup<InitiateJobPostBodyFormProperties>({
		});

	}

	export interface InitiateJobPostBodyJobParameters {
		Format?: string | null;
		Type?: string | null;
		ArchiveId?: string | null;
		Description?: string | null;
		SNSTopic?: string | null;
		RetrievalByteRange?: string | null;
		Tier?: string | null;

		/** Provides options for specifying a range inventory retrieval job. */
		InventoryRetrievalParameters?: InventoryRetrievalJobInput;

		/** Contains information about the parameters used for a select. */
		SelectParameters?: SelectParameters;

		/** Contains information about the location where the select job results are stored. */
		OutputLocation?: OutputLocation;
	}
	export interface InitiateJobPostBodyJobParametersFormProperties {
		Format: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		ArchiveId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		SNSTopic: FormControl<string | null | undefined>,
		RetrievalByteRange: FormControl<string | null | undefined>,
		Tier: FormControl<string | null | undefined>,
	}
	export function CreateInitiateJobPostBodyJobParametersFormGroup() {
		return new FormGroup<InitiateJobPostBodyJobParametersFormProperties>({
			Format: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			ArchiveId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			SNSTopic: new FormControl<string | null | undefined>(undefined),
			RetrievalByteRange: new FormControl<string | null | undefined>(undefined),
			Tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RemoveTagsFromVaultOperation { remove = 0 }

	export interface RemoveTagsFromVaultPostBody {

		/** A list of tag keys. Each corresponding tag is removed from the vault. */
		TagKeys?: Array<string>;
	}
	export interface RemoveTagsFromVaultPostBodyFormProperties {
	}
	export function CreateRemoveTagsFromVaultPostBodyFormGroup() {
		return new FormGroup<RemoveTagsFromVaultPostBodyFormProperties>({
		});

	}

	export interface UploadArchivePostBody {

		/** The data to upload. */
		body?: string | null;
	}
	export interface UploadArchivePostBodyFormProperties {

		/** The data to upload. */
		body: FormControl<string | null | undefined>,
	}
	export function CreateUploadArchivePostBodyFormGroup() {
		return new FormGroup<UploadArchivePostBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
		});

	}

}

