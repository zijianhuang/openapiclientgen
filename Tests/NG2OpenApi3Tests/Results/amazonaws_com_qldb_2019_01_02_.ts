import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelJournalKinesisStreamResponse {
		StreamId?: string;
	}
	export interface CancelJournalKinesisStreamResponseFormProperties {
		StreamId: FormControl<string | null | undefined>,
	}
	export function CreateCancelJournalKinesisStreamResponseFormGroup() {
		return new FormGroup<CancelJournalKinesisStreamResponseFormProperties>({
			StreamId: new FormControl<string | null | undefined>(undefined),
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ResourcePreconditionNotMetException {
	}
	export interface ResourcePreconditionNotMetExceptionFormProperties {
	}
	export function CreateResourcePreconditionNotMetExceptionFormGroup() {
		return new FormGroup<ResourcePreconditionNotMetExceptionFormProperties>({
		});

	}

	export interface CreateLedgerResponse {
		Name?: string;
		Arn?: string;
		State?: LedgerState;
		CreationDateTime?: Date;
		PermissionsMode?: PermissionsMode;
		DeletionProtection?: boolean | null;
		KmsKeyArn?: string;
	}
	export interface CreateLedgerResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		State: FormControl<LedgerState | null | undefined>,
		CreationDateTime: FormControl<Date | null | undefined>,
		PermissionsMode: FormControl<PermissionsMode | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLedgerResponseFormGroup() {
		return new FormGroup<CreateLedgerResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<LedgerState | null | undefined>(undefined),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
			PermissionsMode: new FormControl<PermissionsMode | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LedgerState { CREATING = 'CREATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING', DELETED = 'DELETED' }

	export enum PermissionsMode { ALLOW_ALL = 'ALLOW_ALL', STANDARD = 'STANDARD' }

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
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

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface DescribeJournalKinesisStreamResponse {
		Stream?: JournalKinesisStreamDescription;
	}
	export interface DescribeJournalKinesisStreamResponseFormProperties {
	}
	export function CreateDescribeJournalKinesisStreamResponseFormGroup() {
		return new FormGroup<DescribeJournalKinesisStreamResponseFormProperties>({
		});

	}


	/** Information about an Amazon QLDB journal stream, including the Amazon Resource Name (ARN), stream name, creation time, current status, and the parameters of the original stream creation request. */
	export interface JournalKinesisStreamDescription {

		/** Required */
		LedgerName: string;
		CreationTime?: Date;
		InclusiveStartTime?: Date;
		ExclusiveEndTime?: Date;

		/** Required */
		RoleArn: string;

		/** Required */
		StreamId: string;
		Arn?: string;

		/** Required */
		Status: StreamStatus;

		/** Required */
		KinesisConfiguration: KinesisConfiguration;
		ErrorCause?: ErrorCause;

		/** Required */
		StreamName: string;
	}

	/** Information about an Amazon QLDB journal stream, including the Amazon Resource Name (ARN), stream name, creation time, current status, and the parameters of the original stream creation request. */
	export interface JournalKinesisStreamDescriptionFormProperties {

		/** Required */
		LedgerName: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		InclusiveStartTime: FormControl<Date | null | undefined>,
		ExclusiveEndTime: FormControl<Date | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		StreamId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<StreamStatus | null | undefined>,
		ErrorCause: FormControl<ErrorCause | null | undefined>,

		/** Required */
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateJournalKinesisStreamDescriptionFormGroup() {
		return new FormGroup<JournalKinesisStreamDescriptionFormProperties>({
			LedgerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			InclusiveStartTime: new FormControl<Date | null | undefined>(undefined),
			ExclusiveEndTime: new FormControl<Date | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<StreamStatus | null | undefined>(undefined, [Validators.required]),
			ErrorCause: new FormControl<ErrorCause | null | undefined>(undefined),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StreamStatus { ACTIVE = 'ACTIVE', COMPLETED = 'COMPLETED', CANCELED = 'CANCELED', FAILED = 'FAILED', IMPAIRED = 'IMPAIRED' }


	/** The configuration settings of the Amazon Kinesis Data Streams destination for an Amazon QLDB journal stream. */
	export interface KinesisConfiguration {

		/** Required */
		StreamArn: string;
		AggregationEnabled?: boolean | null;
	}

	/** The configuration settings of the Amazon Kinesis Data Streams destination for an Amazon QLDB journal stream. */
	export interface KinesisConfigurationFormProperties {

		/** Required */
		StreamArn: FormControl<string | null | undefined>,
		AggregationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateKinesisConfigurationFormGroup() {
		return new FormGroup<KinesisConfigurationFormProperties>({
			StreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AggregationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ErrorCause { KINESIS_STREAM_NOT_FOUND = 'KINESIS_STREAM_NOT_FOUND', IAM_PERMISSION_REVOKED = 'IAM_PERMISSION_REVOKED' }

	export interface DescribeJournalS3ExportResponse {

		/** Required */
		ExportDescription: JournalS3ExportDescription;
	}
	export interface DescribeJournalS3ExportResponseFormProperties {
	}
	export function CreateDescribeJournalS3ExportResponseFormGroup() {
		return new FormGroup<DescribeJournalS3ExportResponseFormProperties>({
		});

	}


	/** Information about a journal export job, including the ledger name, export ID, creation time, current status, and the parameters of the original export creation request. */
	export interface JournalS3ExportDescription {

		/** Required */
		LedgerName: string;

		/** Required */
		ExportId: string;

		/** Required */
		ExportCreationTime: Date;

		/** Required */
		Status: ExportStatus;

		/** Required */
		InclusiveStartTime: Date;

		/** Required */
		ExclusiveEndTime: Date;

		/**
		 * The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal contents.
		 * Required
		 */
		S3ExportConfiguration: S3ExportConfiguration;

		/** Required */
		RoleArn: string;
		OutputFormat?: OutputFormat;
	}

	/** Information about a journal export job, including the ledger name, export ID, creation time, current status, and the parameters of the original export creation request. */
	export interface JournalS3ExportDescriptionFormProperties {

		/** Required */
		LedgerName: FormControl<string | null | undefined>,

		/** Required */
		ExportId: FormControl<string | null | undefined>,

		/** Required */
		ExportCreationTime: FormControl<Date | null | undefined>,

		/** Required */
		Status: FormControl<ExportStatus | null | undefined>,

		/** Required */
		InclusiveStartTime: FormControl<Date | null | undefined>,

		/** Required */
		ExclusiveEndTime: FormControl<Date | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		OutputFormat: FormControl<OutputFormat | null | undefined>,
	}
	export function CreateJournalS3ExportDescriptionFormGroup() {
		return new FormGroup<JournalS3ExportDescriptionFormProperties>({
			LedgerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExportId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExportCreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<ExportStatus | null | undefined>(undefined, [Validators.required]),
			InclusiveStartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ExclusiveEndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputFormat: new FormControl<OutputFormat | null | undefined>(undefined),
		});

	}

	export enum ExportStatus { IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', CANCELLED = 'CANCELLED' }


	/** The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal contents. */
	export interface S3ExportConfiguration {

		/** Required */
		Bucket: string;

		/** Required */
		Prefix: string;

		/** Required */
		EncryptionConfiguration: S3EncryptionConfiguration;
	}

	/** The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal contents. */
	export interface S3ExportConfigurationFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,

		/** Required */
		Prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3ExportConfigurationFormGroup() {
		return new FormGroup<S3ExportConfigurationFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The encryption settings that are used by a journal export job to write data in an Amazon Simple Storage Service (Amazon S3) bucket. */
	export interface S3EncryptionConfiguration {

		/** Required */
		ObjectEncryptionType: S3ObjectEncryptionType;
		KmsKeyArn?: string;
	}

	/** The encryption settings that are used by a journal export job to write data in an Amazon Simple Storage Service (Amazon S3) bucket. */
	export interface S3EncryptionConfigurationFormProperties {

		/** Required */
		ObjectEncryptionType: FormControl<S3ObjectEncryptionType | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateS3EncryptionConfigurationFormGroup() {
		return new FormGroup<S3EncryptionConfigurationFormProperties>({
			ObjectEncryptionType: new FormControl<S3ObjectEncryptionType | null | undefined>(undefined, [Validators.required]),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum S3ObjectEncryptionType { SSE_KMS = 'SSE_KMS', SSE_S3 = 'SSE_S3', NO_ENCRYPTION = 'NO_ENCRYPTION' }

	export enum OutputFormat { ION_BINARY = 'ION_BINARY', ION_TEXT = 'ION_TEXT', JSON = 'JSON' }

	export interface DescribeLedgerResponse {
		Name?: string;
		Arn?: string;
		State?: LedgerState;
		CreationDateTime?: Date;
		PermissionsMode?: PermissionsMode;
		DeletionProtection?: boolean | null;
		EncryptionDescription?: LedgerEncryptionDescription;
	}
	export interface DescribeLedgerResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		State: FormControl<LedgerState | null | undefined>,
		CreationDateTime: FormControl<Date | null | undefined>,
		PermissionsMode: FormControl<PermissionsMode | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeLedgerResponseFormGroup() {
		return new FormGroup<DescribeLedgerResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<LedgerState | null | undefined>(undefined),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
			PermissionsMode: new FormControl<PermissionsMode | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Information about the encryption of data at rest in an Amazon QLDB ledger. This includes the current status, the key in Key Management Service (KMS), and when the key became inaccessible (in the case of an error).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in the <i>Amazon QLDB Developer Guide</i>.</p> */
	export interface LedgerEncryptionDescription {

		/** Required */
		KmsKeyArn: string;

		/** Required */
		EncryptionStatus: EncryptionStatus;
		InaccessibleKmsKeyDateTime?: Date;
	}

	/** <p>Information about the encryption of data at rest in an Amazon QLDB ledger. This includes the current status, the key in Key Management Service (KMS), and when the key became inaccessible (in the case of an error).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in the <i>Amazon QLDB Developer Guide</i>.</p> */
	export interface LedgerEncryptionDescriptionFormProperties {

		/** Required */
		KmsKeyArn: FormControl<string | null | undefined>,

		/** Required */
		EncryptionStatus: FormControl<EncryptionStatus | null | undefined>,
		InaccessibleKmsKeyDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateLedgerEncryptionDescriptionFormGroup() {
		return new FormGroup<LedgerEncryptionDescriptionFormProperties>({
			KmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EncryptionStatus: new FormControl<EncryptionStatus | null | undefined>(undefined, [Validators.required]),
			InaccessibleKmsKeyDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EncryptionStatus { ENABLED = 'ENABLED', UPDATING = 'UPDATING', KMS_KEY_INACCESSIBLE = 'KMS_KEY_INACCESSIBLE' }

	export interface ExportJournalToS3Response {

		/** Required */
		ExportId: string;
	}
	export interface ExportJournalToS3ResponseFormProperties {

		/** Required */
		ExportId: FormControl<string | null | undefined>,
	}
	export function CreateExportJournalToS3ResponseFormGroup() {
		return new FormGroup<ExportJournalToS3ResponseFormProperties>({
			ExportId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBlockResponse {

		/** Required */
		Block: ValueHolder;
		Proof?: ValueHolder;
	}
	export interface GetBlockResponseFormProperties {
	}
	export function CreateGetBlockResponseFormGroup() {
		return new FormGroup<GetBlockResponseFormProperties>({
		});

	}


	/** A structure that can contain a value in multiple encoding formats. */
	export interface ValueHolder {
		IonText?: string;
	}

	/** A structure that can contain a value in multiple encoding formats. */
	export interface ValueHolderFormProperties {
		IonText: FormControl<string | null | undefined>,
	}
	export function CreateValueHolderFormGroup() {
		return new FormGroup<ValueHolderFormProperties>({
			IonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDigestResponse {

		/** Required */
		Digest: string;

		/** Required */
		DigestTipAddress: ValueHolder;
	}
	export interface GetDigestResponseFormProperties {

		/** Required */
		Digest: FormControl<string | null | undefined>,
	}
	export function CreateGetDigestResponseFormGroup() {
		return new FormGroup<GetDigestResponseFormProperties>({
			Digest: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRevisionResponse {
		Proof?: ValueHolder;

		/** Required */
		Revision: ValueHolder;
	}
	export interface GetRevisionResponseFormProperties {
	}
	export function CreateGetRevisionResponseFormGroup() {
		return new FormGroup<GetRevisionResponseFormProperties>({
		});

	}

	export interface ListJournalKinesisStreamsForLedgerResponse {
		Streams?: Array<JournalKinesisStreamDescription>;
		NextToken?: string;
	}
	export interface ListJournalKinesisStreamsForLedgerResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJournalKinesisStreamsForLedgerResponseFormGroup() {
		return new FormGroup<ListJournalKinesisStreamsForLedgerResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListJournalS3ExportsResponse {
		JournalS3Exports?: Array<JournalS3ExportDescription>;
		NextToken?: string;
	}
	export interface ListJournalS3ExportsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJournalS3ExportsResponseFormGroup() {
		return new FormGroup<ListJournalS3ExportsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListJournalS3ExportsForLedgerResponse {
		JournalS3Exports?: Array<JournalS3ExportDescription>;
		NextToken?: string;
	}
	export interface ListJournalS3ExportsForLedgerResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJournalS3ExportsForLedgerResponseFormGroup() {
		return new FormGroup<ListJournalS3ExportsForLedgerResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLedgersResponse {
		Ledgers?: Array<LedgerSummary>;
		NextToken?: string;
	}
	export interface ListLedgersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLedgersResponseFormGroup() {
		return new FormGroup<ListLedgersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a ledger, including its name, state, and when it was created. */
	export interface LedgerSummary {
		Name?: string;
		State?: LedgerState;
		CreationDateTime?: Date;
	}

	/** Information about a ledger, including its name, state, and when it was created. */
	export interface LedgerSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		State: FormControl<LedgerState | null | undefined>,
		CreationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateLedgerSummaryFormGroup() {
		return new FormGroup<LedgerSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<LedgerState | null | undefined>(undefined),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Tags;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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

	export interface StreamJournalToKinesisResponse {
		StreamId?: string;
	}
	export interface StreamJournalToKinesisResponseFormProperties {
		StreamId: FormControl<string | null | undefined>,
	}
	export function CreateStreamJournalToKinesisResponseFormGroup() {
		return new FormGroup<StreamJournalToKinesisResponseFormProperties>({
			StreamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateLedgerResponse {
		Name?: string;
		Arn?: string;
		State?: LedgerState;
		CreationDateTime?: Date;
		DeletionProtection?: boolean | null;
		EncryptionDescription?: LedgerEncryptionDescription;
	}
	export interface UpdateLedgerResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		State: FormControl<LedgerState | null | undefined>,
		CreationDateTime: FormControl<Date | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateLedgerResponseFormGroup() {
		return new FormGroup<UpdateLedgerResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<LedgerState | null | undefined>(undefined),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateLedgerPermissionsModeResponse {
		Name?: string;
		Arn?: string;
		PermissionsMode?: PermissionsMode;
	}
	export interface UpdateLedgerPermissionsModeResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		PermissionsMode: FormControl<PermissionsMode | null | undefined>,
	}
	export function CreateUpdateLedgerPermissionsModeResponseFormGroup() {
		return new FormGroup<UpdateLedgerPermissionsModeResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			PermissionsMode: new FormControl<PermissionsMode | null | undefined>(undefined),
		});

	}

	export interface CancelJournalKinesisStreamRequest {
	}
	export interface CancelJournalKinesisStreamRequestFormProperties {
	}
	export function CreateCancelJournalKinesisStreamRequestFormGroup() {
		return new FormGroup<CancelJournalKinesisStreamRequestFormProperties>({
		});

	}

	export interface CreateLedgerRequest {

		/** Required */
		Name: string;
		Tags?: Tags;

		/** Required */
		PermissionsMode: PermissionsMode;
		DeletionProtection?: boolean | null;
		KmsKey?: string;
	}
	export interface CreateLedgerRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		PermissionsMode: FormControl<PermissionsMode | null | undefined>,
		DeletionProtection: FormControl<boolean | null | undefined>,
		KmsKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateLedgerRequestFormGroup() {
		return new FormGroup<CreateLedgerRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionsMode: new FormControl<PermissionsMode | null | undefined>(undefined, [Validators.required]),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			KmsKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteLedgerRequest {
	}
	export interface DeleteLedgerRequestFormProperties {
	}
	export function CreateDeleteLedgerRequestFormGroup() {
		return new FormGroup<DeleteLedgerRequestFormProperties>({
		});

	}

	export interface DescribeJournalKinesisStreamRequest {
	}
	export interface DescribeJournalKinesisStreamRequestFormProperties {
	}
	export function CreateDescribeJournalKinesisStreamRequestFormGroup() {
		return new FormGroup<DescribeJournalKinesisStreamRequestFormProperties>({
		});

	}

	export interface DescribeJournalS3ExportRequest {
	}
	export interface DescribeJournalS3ExportRequestFormProperties {
	}
	export function CreateDescribeJournalS3ExportRequestFormGroup() {
		return new FormGroup<DescribeJournalS3ExportRequestFormProperties>({
		});

	}

	export interface DescribeLedgerRequest {
	}
	export interface DescribeLedgerRequestFormProperties {
	}
	export function CreateDescribeLedgerRequestFormGroup() {
		return new FormGroup<DescribeLedgerRequestFormProperties>({
		});

	}

	export interface ExportJournalToS3Request {

		/** Required */
		InclusiveStartTime: Date;

		/** Required */
		ExclusiveEndTime: Date;

		/** Required */
		S3ExportConfiguration: S3ExportConfiguration;

		/** Required */
		RoleArn: string;
		OutputFormat?: OutputFormat;
	}
	export interface ExportJournalToS3RequestFormProperties {

		/** Required */
		InclusiveStartTime: FormControl<Date | null | undefined>,

		/** Required */
		ExclusiveEndTime: FormControl<Date | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		OutputFormat: FormControl<OutputFormat | null | undefined>,
	}
	export function CreateExportJournalToS3RequestFormGroup() {
		return new FormGroup<ExportJournalToS3RequestFormProperties>({
			InclusiveStartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ExclusiveEndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputFormat: new FormControl<OutputFormat | null | undefined>(undefined),
		});

	}

	export interface GetBlockRequest {

		/** Required */
		BlockAddress: ValueHolder;
		DigestTipAddress?: ValueHolder;
	}
	export interface GetBlockRequestFormProperties {
	}
	export function CreateGetBlockRequestFormGroup() {
		return new FormGroup<GetBlockRequestFormProperties>({
		});

	}

	export interface GetDigestRequest {
	}
	export interface GetDigestRequestFormProperties {
	}
	export function CreateGetDigestRequestFormGroup() {
		return new FormGroup<GetDigestRequestFormProperties>({
		});

	}

	export interface GetRevisionRequest {

		/** Required */
		BlockAddress: ValueHolder;

		/** Required */
		DocumentId: string;
		DigestTipAddress?: ValueHolder;
	}
	export interface GetRevisionRequestFormProperties {

		/** Required */
		DocumentId: FormControl<string | null | undefined>,
	}
	export function CreateGetRevisionRequestFormGroup() {
		return new FormGroup<GetRevisionRequestFormProperties>({
			DocumentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListJournalKinesisStreamsForLedgerRequest {
	}
	export interface ListJournalKinesisStreamsForLedgerRequestFormProperties {
	}
	export function CreateListJournalKinesisStreamsForLedgerRequestFormGroup() {
		return new FormGroup<ListJournalKinesisStreamsForLedgerRequestFormProperties>({
		});

	}

	export interface ListJournalS3ExportsForLedgerRequest {
	}
	export interface ListJournalS3ExportsForLedgerRequestFormProperties {
	}
	export function CreateListJournalS3ExportsForLedgerRequestFormGroup() {
		return new FormGroup<ListJournalS3ExportsForLedgerRequestFormProperties>({
		});

	}

	export interface ListJournalS3ExportsRequest {
	}
	export interface ListJournalS3ExportsRequestFormProperties {
	}
	export function CreateListJournalS3ExportsRequestFormGroup() {
		return new FormGroup<ListJournalS3ExportsRequestFormProperties>({
		});

	}

	export interface ListLedgersRequest {
	}
	export interface ListLedgersRequestFormProperties {
	}
	export function CreateListLedgersRequestFormGroup() {
		return new FormGroup<ListLedgersRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface StreamJournalToKinesisRequest {

		/** Required */
		RoleArn: string;
		Tags?: Tags;

		/** Required */
		InclusiveStartTime: Date;
		ExclusiveEndTime?: Date;

		/** Required */
		KinesisConfiguration: KinesisConfiguration;

		/** Required */
		StreamName: string;
	}
	export interface StreamJournalToKinesisRequestFormProperties {

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		InclusiveStartTime: FormControl<Date | null | undefined>,
		ExclusiveEndTime: FormControl<Date | null | undefined>,

		/** Required */
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateStreamJournalToKinesisRequestFormGroup() {
		return new FormGroup<StreamJournalToKinesisRequestFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InclusiveStartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ExclusiveEndTime: new FormControl<Date | null | undefined>(undefined),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: Tags;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateLedgerPermissionsModeRequest {

		/** Required */
		PermissionsMode: PermissionsMode;
	}
	export interface UpdateLedgerPermissionsModeRequestFormProperties {

		/** Required */
		PermissionsMode: FormControl<PermissionsMode | null | undefined>,
	}
	export function CreateUpdateLedgerPermissionsModeRequestFormGroup() {
		return new FormGroup<UpdateLedgerPermissionsModeRequestFormProperties>({
			PermissionsMode: new FormControl<PermissionsMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateLedgerRequest {
		DeletionProtection?: boolean | null;
		KmsKey?: string;
	}
	export interface UpdateLedgerRequestFormProperties {
		DeletionProtection: FormControl<boolean | null | undefined>,
		KmsKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLedgerRequestFormGroup() {
		return new FormGroup<UpdateLedgerRequestFormProperties>({
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			KmsKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Ends a given Amazon QLDB journal stream. Before a stream can be canceled, its current status must be <code>ACTIVE</code>.</p> <p>You can't restart a stream after you cancel it. Canceled QLDB stream resources are subject to a 7-day retention period, so they are automatically deleted after this limit expires.</p>
		 * Delete ledgers/{name}/journal-kinesis-streams/{streamId}
		 * @param {string} name The name of the ledger.
		 *     Min length: 1    Max length: 32
		 * @param {string} streamId The UUID (represented in Base62-encoded text) of the QLDB journal stream to be canceled.
		 *     Min length: 22    Max length: 22
		 * @return {CancelJournalKinesisStreamResponse} Success
		 */
		CancelJournalKinesisStream(name: string, streamId: string): Observable<CancelJournalKinesisStreamResponse> {
			return this.http.delete<CancelJournalKinesisStreamResponse>(this.baseUri + 'ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/journal-kinesis-streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), {});
		}

		/**
		 * <p>Returns detailed information about a given Amazon QLDB journal stream. The output includes the Amazon Resource Name (ARN), stream name, current status, creation time, and the parameters of the original stream creation request.</p> <p>This action does not return any expired journal streams. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/streams.create.html#streams.create.states.expiration">Expiration for terminal streams</a> in the <i>Amazon QLDB Developer Guide</i>.</p>
		 * Get ledgers/{name}/journal-kinesis-streams/{streamId}
		 * @param {string} name The name of the ledger.
		 *     Min length: 1    Max length: 32
		 * @param {string} streamId The UUID (represented in Base62-encoded text) of the QLDB journal stream to describe.
		 *     Min length: 22    Max length: 22
		 * @return {DescribeJournalKinesisStreamResponse} Success
		 */
		DescribeJournalKinesisStream(name: string, streamId: string): Observable<DescribeJournalKinesisStreamResponse> {
			return this.http.get<DescribeJournalKinesisStreamResponse>(this.baseUri + 'ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/journal-kinesis-streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), {});
		}

		/**
		 * Creates a new ledger in your Amazon Web Services account in the current Region.
		 * Post ledgers
		 * @return {CreateLedgerResponse} Success
		 */
		CreateLedger(requestBody: CreateLedgerPostBody): Observable<CreateLedgerResponse> {
			return this.http.post<CreateLedgerResponse>(this.baseUri + 'ledgers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all ledgers that are associated with the current Amazon Web Services account and Region.</p> <p>This action returns a maximum of <code>MaxResults</code> items and is paginated so that you can retrieve all the items by calling <code>ListLedgers</code> multiple times.</p>
		 * Get ledgers
		 * @param {number} max_results The maximum number of results to return in a single <code>ListLedgers</code> request. (The actual number of results returned might be fewer.)
		 *     Minimum: 1    Maximum: 100
		 * @param {string} next_token A pagination token, indicating that you want to retrieve the next page of results. If you received a value for <code>NextToken</code> in the response from a previous <code>ListLedgers</code> call, then you should use that value as input here.
		 *     Min length: 4    Max length: 1024
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLedgersResponse} Success
		 */
		ListLedgers(max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListLedgersResponse> {
			return this.http.get<ListLedgersResponse>(this.baseUri + 'ledgers?max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Deletes a ledger and all of its contents. This action is irreversible.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set this parameter to <code>false</code>.</p>
		 * Delete ledgers/{name}
		 * @param {string} name The name of the ledger that you want to delete.
		 *     Min length: 1    Max length: 32
		 * @return {void} Success
		 */
		DeleteLedger(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ledgers/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about a ledger, including its state, permissions mode, encryption at rest settings, and when it was created.
		 * Get ledgers/{name}
		 * @param {string} name The name of the ledger that you want to describe.
		 *     Min length: 1    Max length: 32
		 * @return {DescribeLedgerResponse} Success
		 */
		DescribeLedger(name: string): Observable<DescribeLedgerResponse> {
			return this.http.get<DescribeLedgerResponse>(this.baseUri + 'ledgers/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates properties on a ledger.
		 * Patch ledgers/{name}
		 * @param {string} name The name of the ledger.
		 *     Min length: 1    Max length: 32
		 * @return {UpdateLedgerResponse} Success
		 */
		UpdateLedger(name: string, requestBody: UpdateLedgerPatchBody): Observable<UpdateLedgerResponse> {
			return this.http.patch<UpdateLedgerResponse>(this.baseUri + 'ledgers/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about a journal export job, including the ledger name, export ID, creation time, current status, and the parameters of the original export creation request.</p> <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export job expiration</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>If the export job with the given <code>ExportId</code> doesn't exist, then throws <code>ResourceNotFoundException</code>.</p> <p>If the ledger with the given <code>Name</code> doesn't exist, then throws <code>ResourceNotFoundException</code>.</p>
		 * Get ledgers/{name}/journal-s3-exports/{exportId}
		 * @param {string} name The name of the ledger.
		 *     Min length: 1    Max length: 32
		 * @param {string} exportId The UUID (represented in Base62-encoded text) of the journal export job to describe.
		 *     Min length: 22    Max length: 22
		 * @return {DescribeJournalS3ExportResponse} Success
		 */
		DescribeJournalS3Export(name: string, exportId: string): Observable<DescribeJournalS3ExportResponse> {
			return this.http.get<DescribeJournalS3ExportResponse>(this.baseUri + 'ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/journal-s3-exports/' + (exportId == null ? '' : encodeURIComponent(exportId)), {});
		}

		/**
		 * <p>Exports journal contents within a date and time range from a ledger into a specified Amazon Simple Storage Service (Amazon S3) bucket. A journal export job can write the data objects in either the text or binary representation of Amazon Ion format, or in <i>JSON Lines</i> text format.</p> <p>If the ledger with the given <code>Name</code> doesn't exist, then throws <code>ResourceNotFoundException</code>.</p> <p>If the ledger with the given <code>Name</code> is in <code>CREATING</code> status, then throws <code>ResourcePreconditionNotMetException</code>.</p> <p>You can initiate up to two concurrent journal export requests for each ledger. Beyond this limit, journal export requests throw <code>LimitExceededException</code>.</p>
		 * Post ledgers/{name}/journal-s3-exports
		 * @param {string} name The name of the ledger.
		 *     Min length: 1    Max length: 32
		 * @return {ExportJournalToS3Response} Success
		 */
		ExportJournalToS3(name: string, requestBody: ExportJournalToS3PostBody): Observable<ExportJournalToS3Response> {
			return this.http.post<ExportJournalToS3Response>(this.baseUri + 'ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/journal-s3-exports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all journal export jobs for a specified ledger.</p> <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that you can retrieve all the items by calling <code>ListJournalS3ExportsForLedger</code> multiple times.</p> <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export job expiration</a> in the <i>Amazon QLDB Developer Guide</i>.</p>
		 * Get ledgers/{name}/journal-s3-exports
		 * @param {string} name The name of the ledger.
		 *     Min length: 1    Max length: 32
		 * @param {number} max_results The maximum number of results to return in a single <code>ListJournalS3ExportsForLedger</code> request. (The actual number of results returned might be fewer.)
		 *     Minimum: 1    Maximum: 100
		 * @param {string} next_token A pagination token, indicating that you want to retrieve the next page of results. If you received a value for <code>NextToken</code> in the response from a previous <code>ListJournalS3ExportsForLedger</code> call, then you should use that value as input here.
		 *     Min length: 4    Max length: 1024
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJournalS3ExportsForLedgerResponse} Success
		 */
		ListJournalS3ExportsForLedger(name: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListJournalS3ExportsForLedgerResponse> {
			return this.http.get<ListJournalS3ExportsForLedgerResponse>(this.baseUri + 'ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/journal-s3-exports&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Returns a block object at a specified address in a journal. Also returns a proof of the specified block for verification if <code>DigestTipAddress</code> is provided.</p> <p>For information about the data contents in a block, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/journal-contents.html">Journal contents</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>If the specified ledger doesn't exist or is in <code>DELETING</code> status, then throws <code>ResourceNotFoundException</code>.</p> <p>If the specified ledger is in <code>CREATING</code> status, then throws <code>ResourcePreconditionNotMetException</code>.</p> <p>If no block exists with the specified address, then throws <code>InvalidParameterException</code>.</p>
		 * Post ledgers/{name}/block
		 * @param {string} name The name of the ledger.
		 *     Min length: 1    Max length: 32
		 * @return {GetBlockResponse} Success
		 */
		GetBlock(name: string, requestBody: GetBlockPostBody): Observable<GetBlockResponse> {
			return this.http.post<GetBlockResponse>(this.baseUri + 'ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/block', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the digest of a ledger at the latest committed block in the journal. The response includes a 256-bit hash value and a block address.
		 * Post ledgers/{name}/digest
		 * @param {string} name The name of the ledger.
		 *     Min length: 1    Max length: 32
		 * @return {GetDigestResponse} Success
		 */
		GetDigest(name: string): Observable<GetDigestResponse> {
			return this.http.post<GetDigestResponse>(this.baseUri + 'ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/digest', null, {});
		}

		/**
		 * Returns a revision data object for a specified document ID and block address. Also returns a proof of the specified revision for verification if <code>DigestTipAddress</code> is provided.
		 * Post ledgers/{name}/revision
		 * @param {string} name The name of the ledger.
		 *     Min length: 1    Max length: 32
		 * @return {GetRevisionResponse} Success
		 */
		GetRevision(name: string, requestBody: GetRevisionPostBody): Observable<GetRevisionResponse> {
			return this.http.post<GetRevisionResponse>(this.baseUri + 'ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/revision', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all Amazon QLDB journal streams for a given ledger.</p> <p>This action does not return any expired journal streams. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/streams.create.html#streams.create.states.expiration">Expiration for terminal streams</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>This action returns a maximum of <code>MaxResults</code> items. It is paginated so that you can retrieve all the items by calling <code>ListJournalKinesisStreamsForLedger</code> multiple times.</p>
		 * Get ledgers/{name}/journal-kinesis-streams
		 * @param {string} name The name of the ledger.
		 *     Min length: 1    Max length: 32
		 * @param {number} max_results The maximum number of results to return in a single <code>ListJournalKinesisStreamsForLedger</code> request. (The actual number of results returned might be fewer.)
		 *     Minimum: 1    Maximum: 100
		 * @param {string} next_token A pagination token, indicating that you want to retrieve the next page of results. If you received a value for <code>NextToken</code> in the response from a previous <code>ListJournalKinesisStreamsForLedger</code> call, you should use that value as input here.
		 *     Min length: 4    Max length: 1024
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJournalKinesisStreamsForLedgerResponse} Success
		 */
		ListJournalKinesisStreamsForLedger(name: string, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListJournalKinesisStreamsForLedgerResponse> {
			return this.http.get<ListJournalKinesisStreamsForLedgerResponse>(this.baseUri + 'ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/journal-kinesis-streams&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a journal stream for a given Amazon QLDB ledger. The stream captures every document revision that is committed to the ledger's journal and delivers the data to a specified Amazon Kinesis Data Streams resource.
		 * Post ledgers/{name}/journal-kinesis-streams
		 * @param {string} name The name of the ledger.
		 *     Min length: 1    Max length: 32
		 * @return {StreamJournalToKinesisResponse} Success
		 */
		StreamJournalToKinesis(name: string, requestBody: StreamJournalToKinesisPostBody): Observable<StreamJournalToKinesisResponse> {
			return this.http.post<StreamJournalToKinesisResponse>(this.baseUri + 'ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/journal-kinesis-streams', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all journal export jobs for all ledgers that are associated with the current Amazon Web Services account and Region.</p> <p>This action returns a maximum of <code>MaxResults</code> items, and is paginated so that you can retrieve all the items by calling <code>ListJournalS3Exports</code> multiple times.</p> <p>This action does not return any expired export jobs. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/export-journal.request.html#export-journal.request.expiration">Export job expiration</a> in the <i>Amazon QLDB Developer Guide</i>.</p>
		 * Get journal-s3-exports
		 * @param {number} max_results The maximum number of results to return in a single <code>ListJournalS3Exports</code> request. (The actual number of results returned might be fewer.)
		 *     Minimum: 1    Maximum: 100
		 * @param {string} next_token A pagination token, indicating that you want to retrieve the next page of results. If you received a value for <code>NextToken</code> in the response from a previous <code>ListJournalS3Exports</code> call, then you should use that value as input here.
		 *     Min length: 4    Max length: 1024
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJournalS3ExportsResponse} Success
		 */
		ListJournalS3Exports(max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListJournalS3ExportsResponse> {
			return this.http.get<ListJournalS3ExportsResponse>(this.baseUri + 'journal-s3-exports?max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns all tags for a specified Amazon QLDB resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn <p>The Amazon Resource Name (ARN) for which to list the tags. For example:</p> <p> <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code> </p>
		 *     Min length: 20    Max length: 1600
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Adds one or more tags to a specified Amazon QLDB resource.</p> <p>A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, your request fails and returns an error.</p>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn <p>The Amazon Resource Name (ARN) to which you want to add the tags. For example:</p> <p> <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code> </p>
		 *     Min length: 20    Max length: 1600
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from a specified Amazon QLDB resource. You can specify up to 50 tag keys to remove.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn <p>The Amazon Resource Name (ARN) from which to remove the tags. For example:</p> <p> <code>arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger</code> </p>
		 *     Min length: 20    Max length: 1600
		 * @param {Array<string>} tagKeys The list of tag keys to remove.
		 *     Minimum items: 0    Maximum items: 200
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * <p>Updates the permissions mode of a ledger.</p> <important> <p>Before you switch to the <code>STANDARD</code> permissions mode, you must first create all required IAM policies and table tags to avoid disruption to your users. To learn more, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/ledger-management.basics.html#ledger-mgmt.basics.update-permissions.migrating">Migrating to the standard permissions mode</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </important>
		 * Patch ledgers/{name}/permissions-mode
		 * @param {string} name The name of the ledger.
		 *     Min length: 1    Max length: 32
		 * @return {UpdateLedgerPermissionsModeResponse} Success
		 */
		UpdateLedgerPermissionsMode(name: string, requestBody: UpdateLedgerPermissionsModePatchBody): Observable<UpdateLedgerPermissionsModeResponse> {
			return this.http.patch<UpdateLedgerPermissionsModeResponse>(this.baseUri + 'ledgers/' + (name == null ? '' : encodeURIComponent(name)) + '/permissions-mode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateLedgerPostBody {

		/**
		 * <p>The name of the ledger that you want to create. The name must be unique among all of the ledgers in your Amazon Web Services account in the current Region.</p> <p>Naming constraints for ledger names are defined in <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a> in the <i>Amazon QLDB Developer Guide</i>.</p>
		 * Required
		 * Min length: 1
		 * Max length: 32
		 */
		Name: string;

		/** The key-value pairs to add as tags to the ledger that you want to create. Tag keys are case sensitive. Tag values are case sensitive and can be null. */
		Tags?: {[id: string]: string };

		/**
		 * <p>The permissions mode to assign to the ledger that you want to create. This parameter can have one of the following values:</p> <ul> <li> <p> <code>ALLOW_ALL</code>: A legacy permissions mode that enables access control with API-level granularity for ledgers.</p> <p>This mode allows users who have the <code>SendCommand</code> API permission for this ledger to run all PartiQL commands (hence, <code>ALLOW_ALL</code>) on any tables in the specified ledger. This mode disregards any table-level or command-level IAM permissions policies that you create for the ledger.</p> </li> <li> <p> <code>STANDARD</code>: (<i>Recommended</i>) A permissions mode that enables access control with finer granularity for ledgers, tables, and PartiQL commands.</p> <p>By default, this mode denies all user requests to run any PartiQL commands on any tables in this ledger. To allow PartiQL commands to run, you must create IAM permissions policies for specific table resources and PartiQL actions, in addition to the <code>SendCommand</code> API permission for the ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-standard-mode.html">Getting started with the standard permissions mode</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> </ul> <note> <p>We strongly recommend using the <code>STANDARD</code> permissions mode to maximize the security of your ledger data.</p> </note>
		 * Required
		 */
		PermissionsMode: PermissionsMode;

		/** <p>Specifies whether the ledger is protected from being deleted by any user. If not defined during ledger creation, this feature is enabled (<code>true</code>) by default.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set this parameter to <code>false</code>.</p> */
		DeletionProtection?: boolean | null;

		/**
		 * <p>The key in Key Management Service (KMS) to use for encryption of data at rest in the ledger. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>Use one of the following options to specify this parameter:</p> <ul> <li> <p> <code>AWS_OWNED_KMS_KEY</code>: Use an KMS key that is owned and managed by Amazon Web Services on your behalf.</p> </li> <li> <p> <b>Undefined</b>: By default, use an Amazon Web Services owned KMS key.</p> </li> <li> <p> <b>A valid symmetric customer managed KMS key</b>: Use the specified symmetric encryption KMS key in your account that you create, own, and manage.</p> <p>Amazon QLDB does not support asymmetric keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>.</p> </li> </ul> <p>To specify a customer managed KMS key, you can use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p> <p>For example:</p> <ul> <li> <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Alias name: <code>alias/ExampleAlias</code> </p> </li> <li> <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a> in the <i>Key Management Service Developer Guide</i>.</p>
		 * Max length: 1600
		 */
		KmsKey?: string | null;
	}
	export interface CreateLedgerPostBodyFormProperties {

		/**
		 * <p>The name of the ledger that you want to create. The name must be unique among all of the ledgers in your Amazon Web Services account in the current Region.</p> <p>Naming constraints for ledger names are defined in <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a> in the <i>Amazon QLDB Developer Guide</i>.</p>
		 * Required
		 * Min length: 1
		 * Max length: 32
		 */
		Name: FormControl<string | null | undefined>,

		/** The key-value pairs to add as tags to the ledger that you want to create. Tag keys are case sensitive. Tag values are case sensitive and can be null. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * <p>The permissions mode to assign to the ledger that you want to create. This parameter can have one of the following values:</p> <ul> <li> <p> <code>ALLOW_ALL</code>: A legacy permissions mode that enables access control with API-level granularity for ledgers.</p> <p>This mode allows users who have the <code>SendCommand</code> API permission for this ledger to run all PartiQL commands (hence, <code>ALLOW_ALL</code>) on any tables in the specified ledger. This mode disregards any table-level or command-level IAM permissions policies that you create for the ledger.</p> </li> <li> <p> <code>STANDARD</code>: (<i>Recommended</i>) A permissions mode that enables access control with finer granularity for ledgers, tables, and PartiQL commands.</p> <p>By default, this mode denies all user requests to run any PartiQL commands on any tables in this ledger. To allow PartiQL commands to run, you must create IAM permissions policies for specific table resources and PartiQL actions, in addition to the <code>SendCommand</code> API permission for the ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-standard-mode.html">Getting started with the standard permissions mode</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> </ul> <note> <p>We strongly recommend using the <code>STANDARD</code> permissions mode to maximize the security of your ledger data.</p> </note>
		 * Required
		 */
		PermissionsMode: FormControl<PermissionsMode | null | undefined>,

		/** <p>Specifies whether the ledger is protected from being deleted by any user. If not defined during ledger creation, this feature is enabled (<code>true</code>) by default.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set this parameter to <code>false</code>.</p> */
		DeletionProtection: FormControl<boolean | null | undefined>,

		/**
		 * <p>The key in Key Management Service (KMS) to use for encryption of data at rest in the ledger. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>Use one of the following options to specify this parameter:</p> <ul> <li> <p> <code>AWS_OWNED_KMS_KEY</code>: Use an KMS key that is owned and managed by Amazon Web Services on your behalf.</p> </li> <li> <p> <b>Undefined</b>: By default, use an Amazon Web Services owned KMS key.</p> </li> <li> <p> <b>A valid symmetric customer managed KMS key</b>: Use the specified symmetric encryption KMS key in your account that you create, own, and manage.</p> <p>Amazon QLDB does not support asymmetric keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>.</p> </li> </ul> <p>To specify a customer managed KMS key, you can use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p> <p>For example:</p> <ul> <li> <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Alias name: <code>alias/ExampleAlias</code> </p> </li> <li> <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a> in the <i>Key Management Service Developer Guide</i>.</p>
		 * Max length: 1600
		 */
		KmsKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateLedgerPostBodyFormGroup() {
		return new FormGroup<CreateLedgerPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32), Validators.pattern('(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			PermissionsMode: new FormControl<PermissionsMode | null | undefined>(undefined, [Validators.required]),
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			KmsKey: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600)]),
		});

	}

	export interface UpdateLedgerPatchBody {

		/** <p>Specifies whether the ledger is protected from being deleted by any user. If not defined during ledger creation, this feature is enabled (<code>true</code>) by default.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set this parameter to <code>false</code>.</p> */
		DeletionProtection?: boolean | null;

		/**
		 * <p>The key in Key Management Service (KMS) to use for encryption of data at rest in the ledger. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>Use one of the following options to specify this parameter:</p> <ul> <li> <p> <code>AWS_OWNED_KMS_KEY</code>: Use an KMS key that is owned and managed by Amazon Web Services on your behalf.</p> </li> <li> <p> <b>Undefined</b>: Make no changes to the KMS key of the ledger.</p> </li> <li> <p> <b>A valid symmetric customer managed KMS key</b>: Use the specified symmetric encryption KMS key in your account that you create, own, and manage.</p> <p>Amazon QLDB does not support asymmetric keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>.</p> </li> </ul> <p>To specify a customer managed KMS key, you can use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p> <p>For example:</p> <ul> <li> <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Alias name: <code>alias/ExampleAlias</code> </p> </li> <li> <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a> in the <i>Key Management Service Developer Guide</i>.</p>
		 * Max length: 1600
		 */
		KmsKey?: string | null;
	}
	export interface UpdateLedgerPatchBodyFormProperties {

		/** <p>Specifies whether the ledger is protected from being deleted by any user. If not defined during ledger creation, this feature is enabled (<code>true</code>) by default.</p> <p>If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the <code>UpdateLedger</code> operation to set this parameter to <code>false</code>.</p> */
		DeletionProtection: FormControl<boolean | null | undefined>,

		/**
		 * <p>The key in Key Management Service (KMS) to use for encryption of data at rest in the ledger. For more information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html">Encryption at rest</a> in the <i>Amazon QLDB Developer Guide</i>.</p> <p>Use one of the following options to specify this parameter:</p> <ul> <li> <p> <code>AWS_OWNED_KMS_KEY</code>: Use an KMS key that is owned and managed by Amazon Web Services on your behalf.</p> </li> <li> <p> <b>Undefined</b>: Make no changes to the KMS key of the ledger.</p> </li> <li> <p> <b>A valid symmetric customer managed KMS key</b>: Use the specified symmetric encryption KMS key in your account that you create, own, and manage.</p> <p>Amazon QLDB does not support asymmetric keys. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using symmetric and asymmetric keys</a> in the <i>Key Management Service Developer Guide</i>.</p> </li> </ul> <p>To specify a customer managed KMS key, you can use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with <code>"alias/"</code>. To specify a key in a different Amazon Web Services account, you must use the key ARN or alias ARN.</p> <p>For example:</p> <ul> <li> <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Key ARN: <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code> </p> </li> <li> <p>Alias name: <code>alias/ExampleAlias</code> </p> </li> <li> <p>Alias ARN: <code>arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a> in the <i>Key Management Service Developer Guide</i>.</p>
		 * Max length: 1600
		 */
		KmsKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLedgerPatchBodyFormGroup() {
		return new FormGroup<UpdateLedgerPatchBodyFormProperties>({
			DeletionProtection: new FormControl<boolean | null | undefined>(undefined),
			KmsKey: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600)]),
		});

	}

	export interface ExportJournalToS3PostBody {

		/**
		 * <p>The inclusive start date and time for the range of journal contents to export.</p> <p>The <code>InclusiveStartTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> <p>The <code>InclusiveStartTime</code> must be before <code>ExclusiveEndTime</code>.</p> <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's <code>CreationDateTime</code>, Amazon QLDB defaults it to the ledger's <code>CreationDateTime</code>.</p>
		 * Required
		 */
		InclusiveStartTime: Date;

		/**
		 * <p>The exclusive end date and time for the range of journal contents to export.</p> <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> <p>The <code>ExclusiveEndTime</code> must be less than or equal to the current UTC date and time.</p>
		 * Required
		 */
		ExclusiveEndTime: Date;

		/**
		 * The Amazon Simple Storage Service (Amazon S3) bucket location in which a journal export job writes the journal contents.
		 * Required
		 */
		S3ExportConfiguration: ExportJournalToS3PostBodyS3ExportConfiguration;

		/**
		 * <p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal export job to do the following:</p> <ul> <li> <p>Write objects into your Amazon S3 bucket.</p> </li> <li> <p>(Optional) Use your customer managed key in Key Management Service (KMS) for server-side encryption of your exported data.</p> </li> </ul> <p>To pass a role to QLDB when requesting a journal export, you must have permissions to perform the <code>iam:PassRole</code> action on the IAM role resource. This is required for all journal export requests.</p>
		 * Required
		 * Min length: 20
		 * Max length: 1600
		 */
		RoleArn: string;

		/** <p>The output format of your exported journal data. A journal export job can write the data objects in either the text or binary representation of <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/ion.html">Amazon Ion</a> format, or in <a href="https://jsonlines.org/">JSON Lines</a> text format.</p> <p>Default: <code>ION_TEXT</code> </p> <p>In JSON Lines format, each journal block in an exported data object is a valid JSON object that is delimited by a newline. You can use this format to directly integrate JSON exports with analytics tools such as Amazon Athena and Glue because these services can parse newline-delimited JSON automatically.</p> */
		OutputFormat?: OutputFormat | null;
	}
	export interface ExportJournalToS3PostBodyFormProperties {

		/**
		 * <p>The inclusive start date and time for the range of journal contents to export.</p> <p>The <code>InclusiveStartTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> <p>The <code>InclusiveStartTime</code> must be before <code>ExclusiveEndTime</code>.</p> <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's <code>CreationDateTime</code>, Amazon QLDB defaults it to the ledger's <code>CreationDateTime</code>.</p>
		 * Required
		 */
		InclusiveStartTime: FormControl<Date | null | undefined>,

		/**
		 * <p>The exclusive end date and time for the range of journal contents to export.</p> <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> <p>The <code>ExclusiveEndTime</code> must be less than or equal to the current UTC date and time.</p>
		 * Required
		 */
		ExclusiveEndTime: FormControl<Date | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal export job to do the following:</p> <ul> <li> <p>Write objects into your Amazon S3 bucket.</p> </li> <li> <p>(Optional) Use your customer managed key in Key Management Service (KMS) for server-side encryption of your exported data.</p> </li> </ul> <p>To pass a role to QLDB when requesting a journal export, you must have permissions to perform the <code>iam:PassRole</code> action on the IAM role resource. This is required for all journal export requests.</p>
		 * Required
		 * Min length: 20
		 * Max length: 1600
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** <p>The output format of your exported journal data. A journal export job can write the data objects in either the text or binary representation of <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/ion.html">Amazon Ion</a> format, or in <a href="https://jsonlines.org/">JSON Lines</a> text format.</p> <p>Default: <code>ION_TEXT</code> </p> <p>In JSON Lines format, each journal block in an exported data object is a valid JSON object that is delimited by a newline. You can use this format to directly integrate JSON exports with analytics tools such as Amazon Athena and Glue because these services can parse newline-delimited JSON automatically.</p> */
		OutputFormat: FormControl<OutputFormat | null | undefined>,
	}
	export function CreateExportJournalToS3PostBodyFormGroup() {
		return new FormGroup<ExportJournalToS3PostBodyFormProperties>({
			InclusiveStartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ExclusiveEndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(1600)]),
			OutputFormat: new FormControl<OutputFormat | null | undefined>(undefined),
		});

	}

	export interface ExportJournalToS3PostBodyS3ExportConfiguration {
		Bucket?: string;
		Prefix?: string;
		EncryptionConfiguration?: S3EncryptionConfiguration;
	}
	export interface ExportJournalToS3PostBodyS3ExportConfigurationFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Prefix: FormControl<string | null | undefined>,
	}
	export function CreateExportJournalToS3PostBodyS3ExportConfigurationFormGroup() {
		return new FormGroup<ExportJournalToS3PostBodyS3ExportConfigurationFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBlockPostBody {

		/**
		 * A structure that can contain a value in multiple encoding formats.
		 * Required
		 */
		BlockAddress: GetBlockPostBodyBlockAddress;

		/** A structure that can contain a value in multiple encoding formats. */
		DigestTipAddress?: GetBlockPostBodyDigestTipAddress;
	}
	export interface GetBlockPostBodyFormProperties {
	}
	export function CreateGetBlockPostBodyFormGroup() {
		return new FormGroup<GetBlockPostBodyFormProperties>({
		});

	}

	export interface GetBlockPostBodyBlockAddress {
		IonText?: string;
	}
	export interface GetBlockPostBodyBlockAddressFormProperties {
		IonText: FormControl<string | null | undefined>,
	}
	export function CreateGetBlockPostBodyBlockAddressFormGroup() {
		return new FormGroup<GetBlockPostBodyBlockAddressFormProperties>({
			IonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBlockPostBodyDigestTipAddress {
		IonText?: string;
	}
	export interface GetBlockPostBodyDigestTipAddressFormProperties {
		IonText: FormControl<string | null | undefined>,
	}
	export function CreateGetBlockPostBodyDigestTipAddressFormGroup() {
		return new FormGroup<GetBlockPostBodyDigestTipAddressFormProperties>({
			IonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRevisionPostBody {

		/**
		 * A structure that can contain a value in multiple encoding formats.
		 * Required
		 */
		BlockAddress: GetRevisionPostBodyBlockAddress;

		/**
		 * The UUID (represented in Base62-encoded text) of the document to be verified.
		 * Required
		 * Min length: 22
		 * Max length: 22
		 */
		DocumentId: string;

		/** A structure that can contain a value in multiple encoding formats. */
		DigestTipAddress?: GetRevisionPostBodyDigestTipAddress;
	}
	export interface GetRevisionPostBodyFormProperties {

		/**
		 * The UUID (represented in Base62-encoded text) of the document to be verified.
		 * Required
		 * Min length: 22
		 * Max length: 22
		 */
		DocumentId: FormControl<string | null | undefined>,
	}
	export function CreateGetRevisionPostBodyFormGroup() {
		return new FormGroup<GetRevisionPostBodyFormProperties>({
			DocumentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(22), Validators.maxLength(22), Validators.pattern('^[A-Za-z-0-9]+$')]),
		});

	}

	export interface GetRevisionPostBodyBlockAddress {
		IonText?: string;
	}
	export interface GetRevisionPostBodyBlockAddressFormProperties {
		IonText: FormControl<string | null | undefined>,
	}
	export function CreateGetRevisionPostBodyBlockAddressFormGroup() {
		return new FormGroup<GetRevisionPostBodyBlockAddressFormProperties>({
			IonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRevisionPostBodyDigestTipAddress {
		IonText?: string;
	}
	export interface GetRevisionPostBodyDigestTipAddressFormProperties {
		IonText: FormControl<string | null | undefined>,
	}
	export function CreateGetRevisionPostBodyDigestTipAddressFormGroup() {
		return new FormGroup<GetRevisionPostBodyDigestTipAddressFormProperties>({
			IonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StreamJournalToKinesisPostBody {

		/**
		 * <p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal stream to write data records to a Kinesis Data Streams resource.</p> <p>To pass a role to QLDB when requesting a journal stream, you must have permissions to perform the <code>iam:PassRole</code> action on the IAM role resource. This is required for all journal stream requests.</p>
		 * Required
		 * Min length: 20
		 * Max length: 1600
		 */
		RoleArn: string;

		/** The key-value pairs to add as tags to the stream that you want to create. Tag keys are case sensitive. Tag values are case sensitive and can be null. */
		Tags?: {[id: string]: string };

		/**
		 * <p>The inclusive start date and time from which to start streaming journal data. This parameter must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> <p>The <code>InclusiveStartTime</code> cannot be in the future and must be before <code>ExclusiveEndTime</code>.</p> <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's <code>CreationDateTime</code>, QLDB effectively defaults it to the ledger's <code>CreationDateTime</code>.</p>
		 * Required
		 */
		InclusiveStartTime: Date;

		/** <p>The exclusive date and time that specifies when the stream ends. If you don't define this parameter, the stream runs indefinitely until you cancel it.</p> <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> */
		ExclusiveEndTime?: Date | null;

		/**
		 * The configuration settings of the Amazon Kinesis Data Streams destination for an Amazon QLDB journal stream.
		 * Required
		 */
		KinesisConfiguration: StreamJournalToKinesisPostBodyKinesisConfiguration;

		/**
		 * <p>The name that you want to assign to the QLDB journal stream. User-defined names can help identify and indicate the purpose of a stream.</p> <p>Your stream name must be unique among other <i>active</i> streams for a given ledger. Stream names have the same naming constraints as ledger names, as defined in <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a> in the <i>Amazon QLDB Developer Guide</i>.</p>
		 * Required
		 * Min length: 1
		 * Max length: 32
		 */
		StreamName: string;
	}
	export interface StreamJournalToKinesisPostBodyFormProperties {

		/**
		 * <p>The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal stream to write data records to a Kinesis Data Streams resource.</p> <p>To pass a role to QLDB when requesting a journal stream, you must have permissions to perform the <code>iam:PassRole</code> action on the IAM role resource. This is required for all journal stream requests.</p>
		 * Required
		 * Min length: 20
		 * Max length: 1600
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** The key-value pairs to add as tags to the stream that you want to create. Tag keys are case sensitive. Tag values are case sensitive and can be null. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * <p>The inclusive start date and time from which to start streaming journal data. This parameter must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> <p>The <code>InclusiveStartTime</code> cannot be in the future and must be before <code>ExclusiveEndTime</code>.</p> <p>If you provide an <code>InclusiveStartTime</code> that is before the ledger's <code>CreationDateTime</code>, QLDB effectively defaults it to the ledger's <code>CreationDateTime</code>.</p>
		 * Required
		 */
		InclusiveStartTime: FormControl<Date | null | undefined>,

		/** <p>The exclusive date and time that specifies when the stream ends. If you don't define this parameter, the stream runs indefinitely until you cancel it.</p> <p>The <code>ExclusiveEndTime</code> must be in <code>ISO 8601</code> date and time format and in Universal Coordinated Time (UTC). For example: <code>2019-06-13T21:36:34Z</code>.</p> */
		ExclusiveEndTime: FormControl<Date | null | undefined>,

		/**
		 * <p>The name that you want to assign to the QLDB journal stream. User-defined names can help identify and indicate the purpose of a stream.</p> <p>Your stream name must be unique among other <i>active</i> streams for a given ledger. Stream names have the same naming constraints as ledger names, as defined in <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming">Quotas in Amazon QLDB</a> in the <i>Amazon QLDB Developer Guide</i>.</p>
		 * Required
		 * Min length: 1
		 * Max length: 32
		 */
		StreamName: FormControl<string | null | undefined>,
	}
	export function CreateStreamJournalToKinesisPostBodyFormGroup() {
		return new FormGroup<StreamJournalToKinesisPostBodyFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(1600)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			InclusiveStartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ExclusiveEndTime: new FormControl<Date | null | undefined>(undefined),
			StreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32), Validators.pattern('(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$')]),
		});

	}

	export interface StreamJournalToKinesisPostBodyKinesisConfiguration {
		StreamArn?: string;
		AggregationEnabled?: boolean | null;
	}
	export interface StreamJournalToKinesisPostBodyKinesisConfigurationFormProperties {
		StreamArn: FormControl<string | null | undefined>,
		AggregationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateStreamJournalToKinesisPostBodyKinesisConfigurationFormGroup() {
		return new FormGroup<StreamJournalToKinesisPostBodyKinesisConfigurationFormProperties>({
			StreamArn: new FormControl<string | null | undefined>(undefined),
			AggregationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The key-value pairs to add as tags to the specified QLDB resource. Tag keys are case sensitive. If you specify a key that already exists for the resource, your request fails and returns an error. Tag values are case sensitive and can be null.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The key-value pairs to add as tags to the specified QLDB resource. Tag keys are case sensitive. If you specify a key that already exists for the resource, your request fails and returns an error. Tag values are case sensitive and can be null.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateLedgerPermissionsModePatchBody {

		/**
		 * <p>The permissions mode to assign to the ledger. This parameter can have one of the following values:</p> <ul> <li> <p> <code>ALLOW_ALL</code>: A legacy permissions mode that enables access control with API-level granularity for ledgers.</p> <p>This mode allows users who have the <code>SendCommand</code> API permission for this ledger to run all PartiQL commands (hence, <code>ALLOW_ALL</code>) on any tables in the specified ledger. This mode disregards any table-level or command-level IAM permissions policies that you create for the ledger.</p> </li> <li> <p> <code>STANDARD</code>: (<i>Recommended</i>) A permissions mode that enables access control with finer granularity for ledgers, tables, and PartiQL commands.</p> <p>By default, this mode denies all user requests to run any PartiQL commands on any tables in this ledger. To allow PartiQL commands to run, you must create IAM permissions policies for specific table resources and PartiQL actions, in addition to the <code>SendCommand</code> API permission for the ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-standard-mode.html">Getting started with the standard permissions mode</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> </ul> <note> <p>We strongly recommend using the <code>STANDARD</code> permissions mode to maximize the security of your ledger data.</p> </note>
		 * Required
		 */
		PermissionsMode: PermissionsMode;
	}
	export interface UpdateLedgerPermissionsModePatchBodyFormProperties {

		/**
		 * <p>The permissions mode to assign to the ledger. This parameter can have one of the following values:</p> <ul> <li> <p> <code>ALLOW_ALL</code>: A legacy permissions mode that enables access control with API-level granularity for ledgers.</p> <p>This mode allows users who have the <code>SendCommand</code> API permission for this ledger to run all PartiQL commands (hence, <code>ALLOW_ALL</code>) on any tables in the specified ledger. This mode disregards any table-level or command-level IAM permissions policies that you create for the ledger.</p> </li> <li> <p> <code>STANDARD</code>: (<i>Recommended</i>) A permissions mode that enables access control with finer granularity for ledgers, tables, and PartiQL commands.</p> <p>By default, this mode denies all user requests to run any PartiQL commands on any tables in this ledger. To allow PartiQL commands to run, you must create IAM permissions policies for specific table resources and PartiQL actions, in addition to the <code>SendCommand</code> API permission for the ledger. For information, see <a href="https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-standard-mode.html">Getting started with the standard permissions mode</a> in the <i>Amazon QLDB Developer Guide</i>.</p> </li> </ul> <note> <p>We strongly recommend using the <code>STANDARD</code> permissions mode to maximize the security of your ledger data.</p> </note>
		 * Required
		 */
		PermissionsMode: FormControl<PermissionsMode | null | undefined>,
	}
	export function CreateUpdateLedgerPermissionsModePatchBodyFormGroup() {
		return new FormGroup<UpdateLedgerPermissionsModePatchBodyFormProperties>({
			PermissionsMode: new FormControl<PermissionsMode | null | undefined>(undefined, [Validators.required]),
		});

	}

}

