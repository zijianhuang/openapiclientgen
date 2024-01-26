import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateFraudsterResponse {

		/** Contains all the information about a fraudster. */
		Fraudster?: Fraudster;
	}
	export interface AssociateFraudsterResponseFormProperties {
	}
	export function CreateAssociateFraudsterResponseFormGroup() {
		return new FormGroup<AssociateFraudsterResponseFormProperties>({
		});

	}


	/** Contains all the information about a fraudster. */
	export interface Fraudster {
		CreatedAt?: Date;
		DomainId?: string;
		GeneratedFraudsterId?: string;
		WatchlistIds?: Array<string>;
	}

	/** Contains all the information about a fraudster. */
	export interface FraudsterFormProperties {
		CreatedAt: FormControl<Date | null | undefined>,
		DomainId: FormControl<string | null | undefined>,
		GeneratedFraudsterId: FormControl<string | null | undefined>,
	}
	export function CreateFraudsterFormGroup() {
		return new FormGroup<FraudsterFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined),
			GeneratedFraudsterId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateFraudsterRequest {

		/** Required */
		DomainId: string;

		/** Required */
		FraudsterId: string;

		/** Required */
		WatchlistId: string;
	}
	export interface AssociateFraudsterRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,

		/** Required */
		FraudsterId: FormControl<string | null | undefined>,

		/** Required */
		WatchlistId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateFraudsterRequestFormGroup() {
		return new FormGroup<AssociateFraudsterRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FraudsterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WatchlistId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface CreateDomainResponse {
		Domain?: Domain;
	}
	export interface CreateDomainResponseFormProperties {
	}
	export function CreateCreateDomainResponseFormGroup() {
		return new FormGroup<CreateDomainResponseFormProperties>({
		});

	}


	/** Contains all the information about a domain. */
	export interface Domain {
		Arn?: string;
		CreatedAt?: Date;
		Description?: string;
		DomainId?: string;
		DomainStatus?: DomainStatus;
		Name?: string;
		ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
		ServerSideEncryptionUpdateDetails?: ServerSideEncryptionUpdateDetails;
		UpdatedAt?: Date;
		WatchlistDetails?: WatchlistDetails;
	}

	/** Contains all the information about a domain. */
	export interface DomainFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DomainId: FormControl<string | null | undefined>,
		DomainStatus: FormControl<DomainStatus | null | undefined>,
		Name: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined),
			DomainStatus: new FormControl<DomainStatus | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DomainStatus { ACTIVE = 0, PENDING = 1, SUSPENDED = 2 }


	/** The configuration containing information about the customer managed key used for encrypting customer data. */
	export interface ServerSideEncryptionConfiguration {

		/** Required */
		KmsKeyId: string;
	}

	/** The configuration containing information about the customer managed key used for encrypting customer data. */
	export interface ServerSideEncryptionConfigurationFormProperties {

		/** Required */
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateServerSideEncryptionConfigurationFormGroup() {
		return new FormGroup<ServerSideEncryptionConfigurationFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about the most recent server-side encryption configuration update. When the server-side encryption configuration is changed, dependency on the old KMS key is removed through an asynchronous process. When this update is complete, the domain’s data can only be accessed using the new KMS key. */
	export interface ServerSideEncryptionUpdateDetails {
		Message?: string;
		OldKmsKeyId?: string;
		UpdateStatus?: ServerSideEncryptionUpdateStatus;
	}

	/** Details about the most recent server-side encryption configuration update. When the server-side encryption configuration is changed, dependency on the old KMS key is removed through an asynchronous process. When this update is complete, the domain’s data can only be accessed using the new KMS key. */
	export interface ServerSideEncryptionUpdateDetailsFormProperties {
		Message: FormControl<string | null | undefined>,
		OldKmsKeyId: FormControl<string | null | undefined>,
		UpdateStatus: FormControl<ServerSideEncryptionUpdateStatus | null | undefined>,
	}
	export function CreateServerSideEncryptionUpdateDetailsFormGroup() {
		return new FormGroup<ServerSideEncryptionUpdateDetailsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			OldKmsKeyId: new FormControl<string | null | undefined>(undefined),
			UpdateStatus: new FormControl<ServerSideEncryptionUpdateStatus | null | undefined>(undefined),
		});

	}

	export enum ServerSideEncryptionUpdateStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2 }


	/** Details of the watchlists in a domain. */
	export interface WatchlistDetails {

		/** Required */
		DefaultWatchlistId: string;
	}

	/** Details of the watchlists in a domain. */
	export interface WatchlistDetailsFormProperties {

		/** Required */
		DefaultWatchlistId: FormControl<string | null | undefined>,
	}
	export function CreateWatchlistDetailsFormGroup() {
		return new FormGroup<WatchlistDetailsFormProperties>({
			DefaultWatchlistId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDomainRequest {
		ClientToken?: string;
		Description?: string;

		/** Required */
		Name: string;

		/** Required */
		ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
		Tags?: Array<Tag>;
	}
	export interface CreateDomainRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainRequestFormGroup() {
		return new FormGroup<CreateDomainRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWatchlistResponse {
		Watchlist?: Watchlist;
	}
	export interface CreateWatchlistResponseFormProperties {
	}
	export function CreateCreateWatchlistResponseFormGroup() {
		return new FormGroup<CreateWatchlistResponseFormProperties>({
		});

	}


	/** Contains all the information about a watchlist. */
	export interface Watchlist {
		CreatedAt?: Date;
		DefaultWatchlist?: boolean | null;
		Description?: string;
		DomainId?: string;
		Name?: string;
		UpdatedAt?: Date;
		WatchlistId?: string;
	}

	/** Contains all the information about a watchlist. */
	export interface WatchlistFormProperties {
		CreatedAt: FormControl<Date | null | undefined>,
		DefaultWatchlist: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DomainId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		WatchlistId: FormControl<string | null | undefined>,
	}
	export function CreateWatchlistFormGroup() {
		return new FormGroup<WatchlistFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DefaultWatchlist: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			WatchlistId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWatchlistRequest {
		ClientToken?: string;
		Description?: string;

		/** Required */
		DomainId: string;

		/** Required */
		Name: string;
	}
	export interface CreateWatchlistRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		DomainId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateWatchlistRequestFormGroup() {
		return new FormGroup<CreateWatchlistRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDomainRequest {

		/** Required */
		DomainId: string;
	}
	export interface DeleteDomainRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDomainRequestFormGroup() {
		return new FormGroup<DeleteDomainRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteFraudsterRequest {

		/** Required */
		DomainId: string;

		/** Required */
		FraudsterId: string;
	}
	export interface DeleteFraudsterRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,

		/** Required */
		FraudsterId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFraudsterRequestFormGroup() {
		return new FormGroup<DeleteFraudsterRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FraudsterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSpeakerRequest {

		/** Required */
		DomainId: string;

		/** Required */
		SpeakerId: string;
	}
	export interface DeleteSpeakerRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,

		/** Required */
		SpeakerId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSpeakerRequestFormGroup() {
		return new FormGroup<DeleteSpeakerRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SpeakerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWatchlistRequest {

		/** Required */
		DomainId: string;

		/** Required */
		WatchlistId: string;
	}
	export interface DeleteWatchlistRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,

		/** Required */
		WatchlistId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWatchlistRequestFormGroup() {
		return new FormGroup<DeleteWatchlistRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WatchlistId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDomainResponse {
		Domain?: Domain;
	}
	export interface DescribeDomainResponseFormProperties {
	}
	export function CreateDescribeDomainResponseFormGroup() {
		return new FormGroup<DescribeDomainResponseFormProperties>({
		});

	}

	export interface DescribeDomainRequest {

		/** Required */
		DomainId: string;
	}
	export interface DescribeDomainRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDomainRequestFormGroup() {
		return new FormGroup<DescribeDomainRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFraudsterResponse {
		Fraudster?: Fraudster;
	}
	export interface DescribeFraudsterResponseFormProperties {
	}
	export function CreateDescribeFraudsterResponseFormGroup() {
		return new FormGroup<DescribeFraudsterResponseFormProperties>({
		});

	}

	export interface DescribeFraudsterRequest {

		/** Required */
		DomainId: string;

		/** Required */
		FraudsterId: string;
	}
	export interface DescribeFraudsterRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,

		/** Required */
		FraudsterId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFraudsterRequestFormGroup() {
		return new FormGroup<DescribeFraudsterRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FraudsterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFraudsterRegistrationJobResponse {
		Job?: FraudsterRegistrationJob;
	}
	export interface DescribeFraudsterRegistrationJobResponseFormProperties {
	}
	export function CreateDescribeFraudsterRegistrationJobResponseFormGroup() {
		return new FormGroup<DescribeFraudsterRegistrationJobResponseFormProperties>({
		});

	}


	/** Contains all the information about a fraudster registration job. */
	export interface FraudsterRegistrationJob {
		CreatedAt?: Date;
		DataAccessRoleArn?: string;
		DomainId?: string;
		EndedAt?: Date;
		FailureDetails?: FailureDetails;
		InputDataConfig?: InputDataConfig;
		JobId?: string;
		JobName?: string;
		JobProgress?: JobProgress;
		JobStatus?: FraudsterRegistrationJobStatus;
		OutputDataConfig?: OutputDataConfig;
		RegistrationConfig?: RegistrationConfig;
	}

	/** Contains all the information about a fraudster registration job. */
	export interface FraudsterRegistrationJobFormProperties {
		CreatedAt: FormControl<Date | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		DomainId: FormControl<string | null | undefined>,
		EndedAt: FormControl<Date | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<FraudsterRegistrationJobStatus | null | undefined>,
	}
	export function CreateFraudsterRegistrationJobFormGroup() {
		return new FormGroup<FraudsterRegistrationJobFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined),
			EndedAt: new FormControl<Date | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<FraudsterRegistrationJobStatus | null | undefined>(undefined),
		});

	}


	/** Contains error details for a failed batch job. */
	export interface FailureDetails {
		Message?: string;
		StatusCode?: number | null;
	}

	/** Contains error details for a failed batch job. */
	export interface FailureDetailsFormProperties {
		Message: FormControl<string | null | undefined>,
		StatusCode: FormControl<number | null | undefined>,
	}
	export function CreateFailureDetailsFormGroup() {
		return new FormGroup<FailureDetailsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			StatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The configuration containing input file information for a batch job. */
	export interface InputDataConfig {

		/** Required */
		S3Uri: string;
	}

	/** The configuration containing input file information for a batch job. */
	export interface InputDataConfigFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateInputDataConfigFormGroup() {
		return new FormGroup<InputDataConfigFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Indicates the completion progress for a batch job. */
	export interface JobProgress {
		PercentComplete?: number | null;
	}

	/** Indicates the completion progress for a batch job. */
	export interface JobProgressFormProperties {
		PercentComplete: FormControl<number | null | undefined>,
	}
	export function CreateJobProgressFormGroup() {
		return new FormGroup<JobProgressFormProperties>({
			PercentComplete: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FraudsterRegistrationJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, COMPLETED_WITH_ERRORS = 3, FAILED = 4 }


	/** The configuration containing output file information for a batch job. */
	export interface OutputDataConfig {
		KmsKeyId?: string;

		/** Required */
		S3Uri: string;
	}

	/** The configuration containing output file information for a batch job. */
	export interface OutputDataConfigFormProperties {
		KmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateOutputDataConfigFormGroup() {
		return new FormGroup<OutputDataConfigFormProperties>({
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The registration configuration to be used during the batch fraudster registration job. */
	export interface RegistrationConfig {
		DuplicateRegistrationAction?: DuplicateRegistrationAction;
		FraudsterSimilarityThreshold?: number | null;
		WatchlistIds?: Array<string>;
	}

	/** The registration configuration to be used during the batch fraudster registration job. */
	export interface RegistrationConfigFormProperties {
		DuplicateRegistrationAction: FormControl<DuplicateRegistrationAction | null | undefined>,
		FraudsterSimilarityThreshold: FormControl<number | null | undefined>,
	}
	export function CreateRegistrationConfigFormGroup() {
		return new FormGroup<RegistrationConfigFormProperties>({
			DuplicateRegistrationAction: new FormControl<DuplicateRegistrationAction | null | undefined>(undefined),
			FraudsterSimilarityThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DuplicateRegistrationAction { SKIP = 0, REGISTER_AS_NEW = 1 }

	export interface DescribeFraudsterRegistrationJobRequest {

		/** Required */
		DomainId: string;

		/** Required */
		JobId: string;
	}
	export interface DescribeFraudsterRegistrationJobRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFraudsterRegistrationJobRequestFormGroup() {
		return new FormGroup<DescribeFraudsterRegistrationJobRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeSpeakerResponse {
		Speaker?: Speaker;
	}
	export interface DescribeSpeakerResponseFormProperties {
	}
	export function CreateDescribeSpeakerResponseFormGroup() {
		return new FormGroup<DescribeSpeakerResponseFormProperties>({
		});

	}


	/** Contains all the information about a speaker. */
	export interface Speaker {
		CreatedAt?: Date;
		CustomerSpeakerId?: string;
		DomainId?: string;
		GeneratedSpeakerId?: string;
		LastAccessedAt?: Date;
		Status?: SpeakerStatus;
		UpdatedAt?: Date;
	}

	/** Contains all the information about a speaker. */
	export interface SpeakerFormProperties {
		CreatedAt: FormControl<Date | null | undefined>,
		CustomerSpeakerId: FormControl<string | null | undefined>,
		DomainId: FormControl<string | null | undefined>,
		GeneratedSpeakerId: FormControl<string | null | undefined>,
		LastAccessedAt: FormControl<Date | null | undefined>,
		Status: FormControl<SpeakerStatus | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSpeakerFormGroup() {
		return new FormGroup<SpeakerFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			CustomerSpeakerId: new FormControl<string | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined),
			GeneratedSpeakerId: new FormControl<string | null | undefined>(undefined),
			LastAccessedAt: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<SpeakerStatus | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SpeakerStatus { ENROLLED = 0, EXPIRED = 1, OPTED_OUT = 2, PENDING = 3 }

	export interface DescribeSpeakerRequest {

		/** Required */
		DomainId: string;

		/** Required */
		SpeakerId: string;
	}
	export interface DescribeSpeakerRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,

		/** Required */
		SpeakerId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSpeakerRequestFormGroup() {
		return new FormGroup<DescribeSpeakerRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SpeakerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeSpeakerEnrollmentJobResponse {
		Job?: SpeakerEnrollmentJob;
	}
	export interface DescribeSpeakerEnrollmentJobResponseFormProperties {
	}
	export function CreateDescribeSpeakerEnrollmentJobResponseFormGroup() {
		return new FormGroup<DescribeSpeakerEnrollmentJobResponseFormProperties>({
		});

	}


	/** Contains all the information about a speaker enrollment job. */
	export interface SpeakerEnrollmentJob {
		CreatedAt?: Date;
		DataAccessRoleArn?: string;
		DomainId?: string;
		EndedAt?: Date;
		EnrollmentConfig?: EnrollmentConfig;
		FailureDetails?: FailureDetails;
		InputDataConfig?: InputDataConfig;
		JobId?: string;
		JobName?: string;
		JobProgress?: JobProgress;
		JobStatus?: FraudsterRegistrationJobStatus;
		OutputDataConfig?: OutputDataConfig;
	}

	/** Contains all the information about a speaker enrollment job. */
	export interface SpeakerEnrollmentJobFormProperties {
		CreatedAt: FormControl<Date | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		DomainId: FormControl<string | null | undefined>,
		EndedAt: FormControl<Date | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<FraudsterRegistrationJobStatus | null | undefined>,
	}
	export function CreateSpeakerEnrollmentJobFormGroup() {
		return new FormGroup<SpeakerEnrollmentJobFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined),
			EndedAt: new FormControl<Date | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<FraudsterRegistrationJobStatus | null | undefined>(undefined),
		});

	}


	/** Contains configurations defining enrollment behavior for the batch job. */
	export interface EnrollmentConfig {
		ExistingEnrollmentAction?: ExistingEnrollmentAction;
		FraudDetectionConfig?: EnrollmentJobFraudDetectionConfig;
	}

	/** Contains configurations defining enrollment behavior for the batch job. */
	export interface EnrollmentConfigFormProperties {
		ExistingEnrollmentAction: FormControl<ExistingEnrollmentAction | null | undefined>,
	}
	export function CreateEnrollmentConfigFormGroup() {
		return new FormGroup<EnrollmentConfigFormProperties>({
			ExistingEnrollmentAction: new FormControl<ExistingEnrollmentAction | null | undefined>(undefined),
		});

	}

	export enum ExistingEnrollmentAction { SKIP = 0, OVERWRITE = 1 }


	/** The fraud detection configuration to be used during the batch speaker enrollment job. */
	export interface EnrollmentJobFraudDetectionConfig {
		FraudDetectionAction?: FraudDetectionAction;
		RiskThreshold?: number | null;
		WatchlistIds?: Array<string>;
	}

	/** The fraud detection configuration to be used during the batch speaker enrollment job. */
	export interface EnrollmentJobFraudDetectionConfigFormProperties {
		FraudDetectionAction: FormControl<FraudDetectionAction | null | undefined>,
		RiskThreshold: FormControl<number | null | undefined>,
	}
	export function CreateEnrollmentJobFraudDetectionConfigFormGroup() {
		return new FormGroup<EnrollmentJobFraudDetectionConfigFormProperties>({
			FraudDetectionAction: new FormControl<FraudDetectionAction | null | undefined>(undefined),
			RiskThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FraudDetectionAction { IGNORE = 0, FAIL = 1 }

	export interface DescribeSpeakerEnrollmentJobRequest {

		/** Required */
		DomainId: string;

		/** Required */
		JobId: string;
	}
	export interface DescribeSpeakerEnrollmentJobRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSpeakerEnrollmentJobRequestFormGroup() {
		return new FormGroup<DescribeSpeakerEnrollmentJobRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeWatchlistResponse {
		Watchlist?: Watchlist;
	}
	export interface DescribeWatchlistResponseFormProperties {
	}
	export function CreateDescribeWatchlistResponseFormGroup() {
		return new FormGroup<DescribeWatchlistResponseFormProperties>({
		});

	}

	export interface DescribeWatchlistRequest {

		/** Required */
		DomainId: string;

		/** Required */
		WatchlistId: string;
	}
	export interface DescribeWatchlistRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,

		/** Required */
		WatchlistId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWatchlistRequestFormGroup() {
		return new FormGroup<DescribeWatchlistRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WatchlistId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateFraudsterResponse {

		/** Contains all the information about a fraudster. */
		Fraudster?: Fraudster;
	}
	export interface DisassociateFraudsterResponseFormProperties {
	}
	export function CreateDisassociateFraudsterResponseFormGroup() {
		return new FormGroup<DisassociateFraudsterResponseFormProperties>({
		});

	}

	export interface DisassociateFraudsterRequest {

		/** Required */
		DomainId: string;

		/** Required */
		FraudsterId: string;

		/** Required */
		WatchlistId: string;
	}
	export interface DisassociateFraudsterRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,

		/** Required */
		FraudsterId: FormControl<string | null | undefined>,

		/** Required */
		WatchlistId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateFraudsterRequestFormGroup() {
		return new FormGroup<DisassociateFraudsterRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FraudsterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WatchlistId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EvaluateSessionResponse {
		AuthenticationResult?: AuthenticationResult;
		DomainId?: string;
		FraudDetectionResult?: FraudDetectionResult;
		SessionId?: string;
		SessionName?: string;
		StreamingStatus?: StreamingStatus;
	}
	export interface EvaluateSessionResponseFormProperties {
		DomainId: FormControl<string | null | undefined>,
		SessionId: FormControl<string | null | undefined>,
		SessionName: FormControl<string | null | undefined>,
		StreamingStatus: FormControl<StreamingStatus | null | undefined>,
	}
	export function CreateEvaluateSessionResponseFormGroup() {
		return new FormGroup<EvaluateSessionResponseFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined),
			SessionId: new FormControl<string | null | undefined>(undefined),
			SessionName: new FormControl<string | null | undefined>(undefined),
			StreamingStatus: new FormControl<StreamingStatus | null | undefined>(undefined),
		});

	}


	/** The authentication result produced by Voice ID, processed against the current session state and streamed audio of the speaker. */
	export interface AuthenticationResult {
		AudioAggregationEndedAt?: Date;
		AudioAggregationStartedAt?: Date;
		AuthenticationResultId?: string;
		Configuration?: AuthenticationConfiguration;
		CustomerSpeakerId?: string;
		Decision?: AuthenticationDecision;
		GeneratedSpeakerId?: string;
		Score?: number | null;
	}

	/** The authentication result produced by Voice ID, processed against the current session state and streamed audio of the speaker. */
	export interface AuthenticationResultFormProperties {
		AudioAggregationEndedAt: FormControl<Date | null | undefined>,
		AudioAggregationStartedAt: FormControl<Date | null | undefined>,
		AuthenticationResultId: FormControl<string | null | undefined>,
		CustomerSpeakerId: FormControl<string | null | undefined>,
		Decision: FormControl<AuthenticationDecision | null | undefined>,
		GeneratedSpeakerId: FormControl<string | null | undefined>,
		Score: FormControl<number | null | undefined>,
	}
	export function CreateAuthenticationResultFormGroup() {
		return new FormGroup<AuthenticationResultFormProperties>({
			AudioAggregationEndedAt: new FormControl<Date | null | undefined>(undefined),
			AudioAggregationStartedAt: new FormControl<Date | null | undefined>(undefined),
			AuthenticationResultId: new FormControl<string | null | undefined>(undefined),
			CustomerSpeakerId: new FormControl<string | null | undefined>(undefined),
			Decision: new FormControl<AuthenticationDecision | null | undefined>(undefined),
			GeneratedSpeakerId: new FormControl<string | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The configuration used to authenticate a speaker during a session. */
	export interface AuthenticationConfiguration {

		/** Required */
		AcceptanceThreshold: number;
	}

	/** The configuration used to authenticate a speaker during a session. */
	export interface AuthenticationConfigurationFormProperties {

		/** Required */
		AcceptanceThreshold: FormControl<number | null | undefined>,
	}
	export function CreateAuthenticationConfigurationFormGroup() {
		return new FormGroup<AuthenticationConfigurationFormProperties>({
			AcceptanceThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AuthenticationDecision { ACCEPT = 0, REJECT = 1, NOT_ENOUGH_SPEECH = 2, SPEAKER_NOT_ENROLLED = 3, SPEAKER_OPTED_OUT = 4, SPEAKER_ID_NOT_PROVIDED = 5, SPEAKER_EXPIRED = 6 }


	/** The fraud detection result produced by Voice ID, processed against the current session state and streamed audio of the speaker. */
	export interface FraudDetectionResult {
		AudioAggregationEndedAt?: Date;
		AudioAggregationStartedAt?: Date;
		Configuration?: FraudDetectionConfiguration;
		Decision?: FraudDetectionDecision;
		FraudDetectionResultId?: string;
		Reasons?: Array<FraudDetectionReason>;
		RiskDetails?: FraudRiskDetails;
	}

	/** The fraud detection result produced by Voice ID, processed against the current session state and streamed audio of the speaker. */
	export interface FraudDetectionResultFormProperties {
		AudioAggregationEndedAt: FormControl<Date | null | undefined>,
		AudioAggregationStartedAt: FormControl<Date | null | undefined>,
		Decision: FormControl<FraudDetectionDecision | null | undefined>,
		FraudDetectionResultId: FormControl<string | null | undefined>,
	}
	export function CreateFraudDetectionResultFormGroup() {
		return new FormGroup<FraudDetectionResultFormProperties>({
			AudioAggregationEndedAt: new FormControl<Date | null | undefined>(undefined),
			AudioAggregationStartedAt: new FormControl<Date | null | undefined>(undefined),
			Decision: new FormControl<FraudDetectionDecision | null | undefined>(undefined),
			FraudDetectionResultId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration used for performing fraud detection over a speaker during a session. */
	export interface FraudDetectionConfiguration {
		RiskThreshold?: number | null;
		WatchlistId?: string;
	}

	/** The configuration used for performing fraud detection over a speaker during a session. */
	export interface FraudDetectionConfigurationFormProperties {
		RiskThreshold: FormControl<number | null | undefined>,
		WatchlistId: FormControl<string | null | undefined>,
	}
	export function CreateFraudDetectionConfigurationFormGroup() {
		return new FormGroup<FraudDetectionConfigurationFormProperties>({
			RiskThreshold: new FormControl<number | null | undefined>(undefined),
			WatchlistId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FraudDetectionDecision { HIGH_RISK = 0, LOW_RISK = 1, NOT_ENOUGH_SPEECH = 2 }

	export enum FraudDetectionReason { KNOWN_FRAUDSTER = 0, VOICE_SPOOFING = 1 }


	/** Details regarding various fraud risk analyses performed against the current session state and streamed audio of the speaker. */
	export interface FraudRiskDetails {

		/** Required */
		KnownFraudsterRisk: KnownFraudsterRisk;

		/** Required */
		VoiceSpoofingRisk: VoiceSpoofingRisk;
	}

	/** Details regarding various fraud risk analyses performed against the current session state and streamed audio of the speaker. */
	export interface FraudRiskDetailsFormProperties {
	}
	export function CreateFraudRiskDetailsFormGroup() {
		return new FormGroup<FraudRiskDetailsFormProperties>({
		});

	}


	/** Contains details produced as a result of performing known fraudster risk analysis on a speaker. */
	export interface KnownFraudsterRisk {
		GeneratedFraudsterId?: string;

		/** Required */
		RiskScore: number;
	}

	/** Contains details produced as a result of performing known fraudster risk analysis on a speaker. */
	export interface KnownFraudsterRiskFormProperties {
		GeneratedFraudsterId: FormControl<string | null | undefined>,

		/** Required */
		RiskScore: FormControl<number | null | undefined>,
	}
	export function CreateKnownFraudsterRiskFormGroup() {
		return new FormGroup<KnownFraudsterRiskFormProperties>({
			GeneratedFraudsterId: new FormControl<string | null | undefined>(undefined),
			RiskScore: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The details resulting from 'Voice Spoofing Risk' analysis of the speaker. */
	export interface VoiceSpoofingRisk {

		/** Required */
		RiskScore: number;
	}

	/** The details resulting from 'Voice Spoofing Risk' analysis of the speaker. */
	export interface VoiceSpoofingRiskFormProperties {

		/** Required */
		RiskScore: FormControl<number | null | undefined>,
	}
	export function CreateVoiceSpoofingRiskFormGroup() {
		return new FormGroup<VoiceSpoofingRiskFormProperties>({
			RiskScore: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StreamingStatus { PENDING_CONFIGURATION = 0, ONGOING = 1, ENDED = 2 }

	export interface EvaluateSessionRequest {

		/** Required */
		DomainId: string;

		/** Required */
		SessionNameOrId: string;
	}
	export interface EvaluateSessionRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,

		/** Required */
		SessionNameOrId: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateSessionRequestFormGroup() {
		return new FormGroup<EvaluateSessionRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SessionNameOrId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDomainsResponse {
		DomainSummaries?: Array<DomainSummary>;
		NextToken?: string;
	}
	export interface ListDomainsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsResponseFormGroup() {
		return new FormGroup<ListDomainsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of information about a domain. */
	export interface DomainSummary {
		Arn?: string;
		CreatedAt?: Date;
		Description?: string;
		DomainId?: string;
		DomainStatus?: DomainStatus;
		Name?: string;
		ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
		ServerSideEncryptionUpdateDetails?: ServerSideEncryptionUpdateDetails;
		UpdatedAt?: Date;
		WatchlistDetails?: WatchlistDetails;
	}

	/** Contains a summary of information about a domain. */
	export interface DomainSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DomainId: FormControl<string | null | undefined>,
		DomainStatus: FormControl<DomainStatus | null | undefined>,
		Name: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDomainSummaryFormGroup() {
		return new FormGroup<DomainSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined),
			DomainStatus: new FormControl<DomainStatus | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDomainsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListDomainsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsRequestFormGroup() {
		return new FormGroup<ListDomainsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFraudsterRegistrationJobsResponse {
		JobSummaries?: Array<FraudsterRegistrationJobSummary>;
		NextToken?: string;
	}
	export interface ListFraudsterRegistrationJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFraudsterRegistrationJobsResponseFormGroup() {
		return new FormGroup<ListFraudsterRegistrationJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of information about a fraudster registration job. */
	export interface FraudsterRegistrationJobSummary {
		CreatedAt?: Date;
		DomainId?: string;
		EndedAt?: Date;
		FailureDetails?: FailureDetails;
		JobId?: string;
		JobName?: string;
		JobProgress?: JobProgress;
		JobStatus?: FraudsterRegistrationJobStatus;
	}

	/** Contains a summary of information about a fraudster registration job. */
	export interface FraudsterRegistrationJobSummaryFormProperties {
		CreatedAt: FormControl<Date | null | undefined>,
		DomainId: FormControl<string | null | undefined>,
		EndedAt: FormControl<Date | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<FraudsterRegistrationJobStatus | null | undefined>,
	}
	export function CreateFraudsterRegistrationJobSummaryFormGroup() {
		return new FormGroup<FraudsterRegistrationJobSummaryFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined),
			EndedAt: new FormControl<Date | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<FraudsterRegistrationJobStatus | null | undefined>(undefined),
		});

	}

	export interface ListFraudsterRegistrationJobsRequest {

		/** Required */
		DomainId: string;
		JobStatus?: FraudsterRegistrationJobStatus;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListFraudsterRegistrationJobsRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,
		JobStatus: FormControl<FraudsterRegistrationJobStatus | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFraudsterRegistrationJobsRequestFormGroup() {
		return new FormGroup<ListFraudsterRegistrationJobsRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobStatus: new FormControl<FraudsterRegistrationJobStatus | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFraudstersResponse {
		FraudsterSummaries?: Array<FraudsterSummary>;
		NextToken?: string;
	}
	export interface ListFraudstersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFraudstersResponseFormGroup() {
		return new FormGroup<ListFraudstersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of information about a fraudster.  */
	export interface FraudsterSummary {
		CreatedAt?: Date;
		DomainId?: string;
		GeneratedFraudsterId?: string;
		WatchlistIds?: Array<string>;
	}

	/** Contains a summary of information about a fraudster.  */
	export interface FraudsterSummaryFormProperties {
		CreatedAt: FormControl<Date | null | undefined>,
		DomainId: FormControl<string | null | undefined>,
		GeneratedFraudsterId: FormControl<string | null | undefined>,
	}
	export function CreateFraudsterSummaryFormGroup() {
		return new FormGroup<FraudsterSummaryFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined),
			GeneratedFraudsterId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFraudstersRequest {

		/** Required */
		DomainId: string;
		MaxResults?: number | null;
		NextToken?: string;
		WatchlistId?: string;
	}
	export interface ListFraudstersRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		WatchlistId: FormControl<string | null | undefined>,
	}
	export function CreateListFraudstersRequestFormGroup() {
		return new FormGroup<ListFraudstersRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			WatchlistId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSpeakerEnrollmentJobsResponse {
		JobSummaries?: Array<SpeakerEnrollmentJobSummary>;
		NextToken?: string;
	}
	export interface ListSpeakerEnrollmentJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSpeakerEnrollmentJobsResponseFormGroup() {
		return new FormGroup<ListSpeakerEnrollmentJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of information about a speaker enrollment job. */
	export interface SpeakerEnrollmentJobSummary {
		CreatedAt?: Date;
		DomainId?: string;
		EndedAt?: Date;
		FailureDetails?: FailureDetails;
		JobId?: string;
		JobName?: string;
		JobProgress?: JobProgress;
		JobStatus?: FraudsterRegistrationJobStatus;
	}

	/** Contains a summary of information about a speaker enrollment job. */
	export interface SpeakerEnrollmentJobSummaryFormProperties {
		CreatedAt: FormControl<Date | null | undefined>,
		DomainId: FormControl<string | null | undefined>,
		EndedAt: FormControl<Date | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<FraudsterRegistrationJobStatus | null | undefined>,
	}
	export function CreateSpeakerEnrollmentJobSummaryFormGroup() {
		return new FormGroup<SpeakerEnrollmentJobSummaryFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined),
			EndedAt: new FormControl<Date | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<FraudsterRegistrationJobStatus | null | undefined>(undefined),
		});

	}

	export interface ListSpeakerEnrollmentJobsRequest {

		/** Required */
		DomainId: string;
		JobStatus?: FraudsterRegistrationJobStatus;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListSpeakerEnrollmentJobsRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,
		JobStatus: FormControl<FraudsterRegistrationJobStatus | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSpeakerEnrollmentJobsRequestFormGroup() {
		return new FormGroup<ListSpeakerEnrollmentJobsRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobStatus: new FormControl<FraudsterRegistrationJobStatus | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSpeakersResponse {
		NextToken?: string;
		SpeakerSummaries?: Array<SpeakerSummary>;
	}
	export interface ListSpeakersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSpeakersResponseFormGroup() {
		return new FormGroup<ListSpeakersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of information about a speaker. */
	export interface SpeakerSummary {
		CreatedAt?: Date;
		CustomerSpeakerId?: string;
		DomainId?: string;
		GeneratedSpeakerId?: string;
		LastAccessedAt?: Date;
		Status?: SpeakerStatus;
		UpdatedAt?: Date;
	}

	/** Contains a summary of information about a speaker. */
	export interface SpeakerSummaryFormProperties {
		CreatedAt: FormControl<Date | null | undefined>,
		CustomerSpeakerId: FormControl<string | null | undefined>,
		DomainId: FormControl<string | null | undefined>,
		GeneratedSpeakerId: FormControl<string | null | undefined>,
		LastAccessedAt: FormControl<Date | null | undefined>,
		Status: FormControl<SpeakerStatus | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSpeakerSummaryFormGroup() {
		return new FormGroup<SpeakerSummaryFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			CustomerSpeakerId: new FormControl<string | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined),
			GeneratedSpeakerId: new FormControl<string | null | undefined>(undefined),
			LastAccessedAt: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<SpeakerStatus | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListSpeakersRequest {

		/** Required */
		DomainId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListSpeakersRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSpeakersRequestFormGroup() {
		return new FormGroup<ListSpeakersRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListWatchlistsResponse {
		NextToken?: string;
		WatchlistSummaries?: Array<WatchlistSummary>;
	}
	export interface ListWatchlistsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWatchlistsResponseFormGroup() {
		return new FormGroup<ListWatchlistsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of information about a watchlist. */
	export interface WatchlistSummary {
		CreatedAt?: Date;
		DefaultWatchlist?: boolean | null;
		Description?: string;
		DomainId?: string;
		Name?: string;
		UpdatedAt?: Date;
		WatchlistId?: string;
	}

	/** Contains a summary of information about a watchlist. */
	export interface WatchlistSummaryFormProperties {
		CreatedAt: FormControl<Date | null | undefined>,
		DefaultWatchlist: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DomainId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		WatchlistId: FormControl<string | null | undefined>,
	}
	export function CreateWatchlistSummaryFormGroup() {
		return new FormGroup<WatchlistSummaryFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			DefaultWatchlist: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			WatchlistId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWatchlistsRequest {

		/** Required */
		DomainId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListWatchlistsRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWatchlistsRequestFormGroup() {
		return new FormGroup<ListWatchlistsRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OptOutSpeakerResponse {
		Speaker?: Speaker;
	}
	export interface OptOutSpeakerResponseFormProperties {
	}
	export function CreateOptOutSpeakerResponseFormGroup() {
		return new FormGroup<OptOutSpeakerResponseFormProperties>({
		});

	}

	export interface OptOutSpeakerRequest {

		/** Required */
		DomainId: string;

		/** Required */
		SpeakerId: string;
	}
	export interface OptOutSpeakerRequestFormProperties {

		/** Required */
		DomainId: FormControl<string | null | undefined>,

		/** Required */
		SpeakerId: FormControl<string | null | undefined>,
	}
	export function CreateOptOutSpeakerRequestFormGroup() {
		return new FormGroup<OptOutSpeakerRequestFormProperties>({
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SpeakerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartFraudsterRegistrationJobResponse {
		Job?: FraudsterRegistrationJob;
	}
	export interface StartFraudsterRegistrationJobResponseFormProperties {
	}
	export function CreateStartFraudsterRegistrationJobResponseFormGroup() {
		return new FormGroup<StartFraudsterRegistrationJobResponseFormProperties>({
		});

	}

	export interface StartFraudsterRegistrationJobRequest {
		ClientToken?: string;

		/** Required */
		DataAccessRoleArn: string;

		/** Required */
		DomainId: string;

		/** Required */
		InputDataConfig: InputDataConfig;
		JobName?: string;

		/** Required */
		OutputDataConfig: OutputDataConfig;
		RegistrationConfig?: RegistrationConfig;
	}
	export interface StartFraudsterRegistrationJobRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,

		/** Required */
		DomainId: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateStartFraudsterRegistrationJobRequestFormGroup() {
		return new FormGroup<StartFraudsterRegistrationJobRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartSpeakerEnrollmentJobResponse {
		Job?: SpeakerEnrollmentJob;
	}
	export interface StartSpeakerEnrollmentJobResponseFormProperties {
	}
	export function CreateStartSpeakerEnrollmentJobResponseFormGroup() {
		return new FormGroup<StartSpeakerEnrollmentJobResponseFormProperties>({
		});

	}

	export interface StartSpeakerEnrollmentJobRequest {
		ClientToken?: string;

		/** Required */
		DataAccessRoleArn: string;

		/** Required */
		DomainId: string;
		EnrollmentConfig?: EnrollmentConfig;

		/** Required */
		InputDataConfig: InputDataConfig;
		JobName?: string;

		/** Required */
		OutputDataConfig: OutputDataConfig;
	}
	export interface StartSpeakerEnrollmentJobRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,

		/** Required */
		DomainId: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateStartSpeakerEnrollmentJobRequestFormGroup() {
		return new FormGroup<StartSpeakerEnrollmentJobRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
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

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UntagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDomainResponse {
		Domain?: Domain;
	}
	export interface UpdateDomainResponseFormProperties {
	}
	export function CreateUpdateDomainResponseFormGroup() {
		return new FormGroup<UpdateDomainResponseFormProperties>({
		});

	}

	export interface UpdateDomainRequest {
		Description?: string;

		/** Required */
		DomainId: string;

		/** Required */
		Name: string;

		/** Required */
		ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
	}
	export interface UpdateDomainRequestFormProperties {
		Description: FormControl<string | null | undefined>,

		/** Required */
		DomainId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainRequestFormGroup() {
		return new FormGroup<UpdateDomainRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateWatchlistResponse {
		Watchlist?: Watchlist;
	}
	export interface UpdateWatchlistResponseFormProperties {
	}
	export function CreateUpdateWatchlistResponseFormGroup() {
		return new FormGroup<UpdateWatchlistResponseFormProperties>({
		});

	}

	export interface UpdateWatchlistRequest {
		Description?: string;

		/** Required */
		DomainId: string;
		Name?: string;

		/** Required */
		WatchlistId: string;
	}
	export interface UpdateWatchlistRequestFormProperties {
		Description: FormControl<string | null | undefined>,

		/** Required */
		DomainId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Required */
		WatchlistId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWatchlistRequestFormGroup() {
		return new FormGroup<UpdateWatchlistRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			DomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			WatchlistId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SpeakerEnrollmentJobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, COMPLETED_WITH_ERRORS = 3, FAILED = 4 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates the fraudsters with the watchlist specified in the same domain.
		 * Post #X-Amz-Target=VoiceID.AssociateFraudster
		 * @return {AssociateFraudsterResponse} Success
		 */
		AssociateFraudster(requestBody: AssociateFraudsterRequest): Observable<AssociateFraudsterResponse> {
			return this.http.post<AssociateFraudsterResponse>(this.baseUri + '#X-Amz-Target=VoiceID.AssociateFraudster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters, customer audio, and voiceprints. Every domain is created with a default watchlist that fraudsters can be a part of.
		 * Post #X-Amz-Target=VoiceID.CreateDomain
		 * @return {CreateDomainResponse} Success
		 */
		CreateDomain(requestBody: CreateDomainRequest): Observable<CreateDomainResponse> {
			return this.http.post<CreateDomainResponse>(this.baseUri + '#X-Amz-Target=VoiceID.CreateDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a watchlist that fraudsters can be a part of.
		 * Post #X-Amz-Target=VoiceID.CreateWatchlist
		 * @return {CreateWatchlistResponse} Success
		 */
		CreateWatchlist(requestBody: CreateWatchlistRequest): Observable<CreateWatchlistResponse> {
			return this.http.post<CreateWatchlistResponse>(this.baseUri + '#X-Amz-Target=VoiceID.CreateWatchlist', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified domain from Voice ID.
		 * Post #X-Amz-Target=VoiceID.DeleteDomain
		 * @return {void} Success
		 */
		DeleteDomain(requestBody: DeleteDomainRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=VoiceID.DeleteDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.
		 * Post #X-Amz-Target=VoiceID.DeleteFraudster
		 * @return {void} Success
		 */
		DeleteFraudster(requestBody: DeleteFraudsterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=VoiceID.DeleteFraudster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified speaker from Voice ID.
		 * Post #X-Amz-Target=VoiceID.DeleteSpeaker
		 * @return {void} Success
		 */
		DeleteSpeaker(requestBody: DeleteSpeakerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=VoiceID.DeleteSpeaker', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified watchlist from Voice ID. This API throws an exception when there are fraudsters in the watchlist that you are trying to delete. You must delete the fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted.
		 * Post #X-Amz-Target=VoiceID.DeleteWatchlist
		 * @return {void} Success
		 */
		DeleteWatchlist(requestBody: DeleteWatchlistRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=VoiceID.DeleteWatchlist', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the specified domain.
		 * Post #X-Amz-Target=VoiceID.DescribeDomain
		 * @return {DescribeDomainResponse} Success
		 */
		DescribeDomain(requestBody: DescribeDomainRequest): Observable<DescribeDomainResponse> {
			return this.http.post<DescribeDomainResponse>(this.baseUri + '#X-Amz-Target=VoiceID.DescribeDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified fraudster.
		 * Post #X-Amz-Target=VoiceID.DescribeFraudster
		 * @return {DescribeFraudsterResponse} Success
		 */
		DescribeFraudster(requestBody: DescribeFraudsterRequest): Observable<DescribeFraudsterResponse> {
			return this.http.post<DescribeFraudsterResponse>(this.baseUri + '#X-Amz-Target=VoiceID.DescribeFraudster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified fraudster registration job.
		 * Post #X-Amz-Target=VoiceID.DescribeFraudsterRegistrationJob
		 * @return {DescribeFraudsterRegistrationJobResponse} Success
		 */
		DescribeFraudsterRegistrationJob(requestBody: DescribeFraudsterRegistrationJobRequest): Observable<DescribeFraudsterRegistrationJobResponse> {
			return this.http.post<DescribeFraudsterRegistrationJobResponse>(this.baseUri + '#X-Amz-Target=VoiceID.DescribeFraudsterRegistrationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified speaker.
		 * Post #X-Amz-Target=VoiceID.DescribeSpeaker
		 * @return {DescribeSpeakerResponse} Success
		 */
		DescribeSpeaker(requestBody: DescribeSpeakerRequest): Observable<DescribeSpeakerResponse> {
			return this.http.post<DescribeSpeakerResponse>(this.baseUri + '#X-Amz-Target=VoiceID.DescribeSpeaker', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified speaker enrollment job.
		 * Post #X-Amz-Target=VoiceID.DescribeSpeakerEnrollmentJob
		 * @return {DescribeSpeakerEnrollmentJobResponse} Success
		 */
		DescribeSpeakerEnrollmentJob(requestBody: DescribeSpeakerEnrollmentJobRequest): Observable<DescribeSpeakerEnrollmentJobResponse> {
			return this.http.post<DescribeSpeakerEnrollmentJobResponse>(this.baseUri + '#X-Amz-Target=VoiceID.DescribeSpeakerEnrollmentJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified watchlist.
		 * Post #X-Amz-Target=VoiceID.DescribeWatchlist
		 * @return {DescribeWatchlistResponse} Success
		 */
		DescribeWatchlist(requestBody: DescribeWatchlistRequest): Observable<DescribeWatchlistResponse> {
			return this.http.post<DescribeWatchlistResponse>(this.baseUri + '#X-Amz-Target=VoiceID.DescribeWatchlist', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the fraudsters from the watchlist specified. Voice ID always expects a fraudster to be a part of at least one watchlist. If you try to disassociate a fraudster from its only watchlist, a <code>ValidationException</code> is thrown.
		 * Post #X-Amz-Target=VoiceID.DisassociateFraudster
		 * @return {DisassociateFraudsterResponse} Success
		 */
		DisassociateFraudster(requestBody: DisassociateFraudsterRequest): Observable<DisassociateFraudsterResponse> {
			return this.http.post<DisassociateFraudsterResponse>(this.baseUri + '#X-Amz-Target=VoiceID.DisassociateFraudster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Evaluates a specified session based on audio data accumulated during a streaming Amazon Connect Voice ID call.
		 * Post #X-Amz-Target=VoiceID.EvaluateSession
		 * @return {EvaluateSessionResponse} Success
		 */
		EvaluateSession(requestBody: EvaluateSessionRequest): Observable<EvaluateSessionResponse> {
			return this.http.post<EvaluateSessionResponse>(this.baseUri + '#X-Amz-Target=VoiceID.EvaluateSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the domains in the Amazon Web Services account.
		 * Post #X-Amz-Target=VoiceID.ListDomains
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDomainsResponse} Success
		 */
		ListDomains(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDomainsRequest): Observable<ListDomainsResponse> {
			return this.http.post<ListDomainsResponse>(this.baseUri + '#X-Amz-Target=VoiceID.ListDomains?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the fraudster registration jobs in the domain with the given <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all fraudster registration jobs in the given domain.
		 * Post #X-Amz-Target=VoiceID.ListFraudsterRegistrationJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFraudsterRegistrationJobsResponse} Success
		 */
		ListFraudsterRegistrationJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFraudsterRegistrationJobsRequest): Observable<ListFraudsterRegistrationJobsResponse> {
			return this.http.post<ListFraudsterRegistrationJobsResponse>(this.baseUri + '#X-Amz-Target=VoiceID.ListFraudsterRegistrationJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all fraudsters in a specified watchlist or domain.
		 * Post #X-Amz-Target=VoiceID.ListFraudsters
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFraudstersResponse} Success
		 */
		ListFraudsters(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFraudstersRequest): Observable<ListFraudstersResponse> {
			return this.http.post<ListFraudstersResponse>(this.baseUri + '#X-Amz-Target=VoiceID.ListFraudsters?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the speaker enrollment jobs in the domain with the specified <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all jobs with all possible speaker enrollment job statuses.
		 * Post #X-Amz-Target=VoiceID.ListSpeakerEnrollmentJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSpeakerEnrollmentJobsResponse} Success
		 */
		ListSpeakerEnrollmentJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSpeakerEnrollmentJobsRequest): Observable<ListSpeakerEnrollmentJobsResponse> {
			return this.http.post<ListSpeakerEnrollmentJobsResponse>(this.baseUri + '#X-Amz-Target=VoiceID.ListSpeakerEnrollmentJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all speakers in a specified domain.
		 * Post #X-Amz-Target=VoiceID.ListSpeakers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSpeakersResponse} Success
		 */
		ListSpeakers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSpeakersRequest): Observable<ListSpeakersResponse> {
			return this.http.post<ListSpeakersResponse>(this.baseUri + '#X-Amz-Target=VoiceID.ListSpeakers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags associated with a specified Voice ID resource.
		 * Post #X-Amz-Target=VoiceID.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=VoiceID.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all watchlists in a specified domain.
		 * Post #X-Amz-Target=VoiceID.ListWatchlists
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWatchlistsResponse} Success
		 */
		ListWatchlists(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListWatchlistsRequest): Observable<ListWatchlistsResponse> {
			return this.http.post<ListWatchlistsResponse>(this.baseUri + '#X-Amz-Target=VoiceID.ListWatchlists?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or not they already exist in Voice ID. If they don't yet exist, a new speaker is created in an opted out state. If they already exist, their existing status is overridden and they are opted out. Enrollment and evaluation authentication requests are rejected for opted out speakers, and opted out speakers have no voice embeddings stored in Voice ID.
		 * Post #X-Amz-Target=VoiceID.OptOutSpeaker
		 * @return {OptOutSpeakerResponse} Success
		 */
		OptOutSpeaker(requestBody: OptOutSpeakerRequest): Observable<OptOutSpeakerResponse> {
			return this.http.post<OptOutSpeakerResponse>(this.baseUri + '#X-Amz-Target=VoiceID.OptOutSpeaker', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a new batch fraudster registration job using provided details.
		 * Post #X-Amz-Target=VoiceID.StartFraudsterRegistrationJob
		 * @return {StartFraudsterRegistrationJobResponse} Success
		 */
		StartFraudsterRegistrationJob(requestBody: StartFraudsterRegistrationJobRequest): Observable<StartFraudsterRegistrationJobResponse> {
			return this.http.post<StartFraudsterRegistrationJobResponse>(this.baseUri + '#X-Amz-Target=VoiceID.StartFraudsterRegistrationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a new batch speaker enrollment job using specified details.
		 * Post #X-Amz-Target=VoiceID.StartSpeakerEnrollmentJob
		 * @return {StartSpeakerEnrollmentJobResponse} Success
		 */
		StartSpeakerEnrollmentJob(requestBody: StartSpeakerEnrollmentJobRequest): Observable<StartSpeakerEnrollmentJobResponse> {
			return this.http.post<StartSpeakerEnrollmentJobResponse>(this.baseUri + '#X-Amz-Target=VoiceID.StartSpeakerEnrollmentJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tags a Voice ID resource with the provided list of tags.
		 * Post #X-Amz-Target=VoiceID.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=VoiceID.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes specified tags from a specified Amazon Connect Voice ID resource.
		 * Post #X-Amz-Target=VoiceID.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=VoiceID.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified domain. This API has clobber behavior, and clears and replaces all attributes. If an optional field, such as 'Description' is not provided, it is removed from the domain.
		 * Post #X-Amz-Target=VoiceID.UpdateDomain
		 * @return {UpdateDomainResponse} Success
		 */
		UpdateDomain(requestBody: UpdateDomainRequest): Observable<UpdateDomainResponse> {
			return this.http.post<UpdateDomainResponse>(this.baseUri + '#X-Amz-Target=VoiceID.UpdateDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified watchlist. Every domain has a default watchlist which cannot be updated.
		 * Post #X-Amz-Target=VoiceID.UpdateWatchlist
		 * @return {UpdateWatchlistResponse} Success
		 */
		UpdateWatchlist(requestBody: UpdateWatchlistRequest): Observable<UpdateWatchlistResponse> {
			return this.http.post<UpdateWatchlistResponse>(this.baseUri + '#X-Amz-Target=VoiceID.UpdateWatchlist', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateFraudsterX_Amz_Target { 'VoiceID.AssociateFraudster' = 0 }

	export enum CreateDomainX_Amz_Target { 'VoiceID.CreateDomain' = 0 }

	export enum CreateWatchlistX_Amz_Target { 'VoiceID.CreateWatchlist' = 0 }

	export enum DeleteDomainX_Amz_Target { 'VoiceID.DeleteDomain' = 0 }

	export enum DeleteFraudsterX_Amz_Target { 'VoiceID.DeleteFraudster' = 0 }

	export enum DeleteSpeakerX_Amz_Target { 'VoiceID.DeleteSpeaker' = 0 }

	export enum DeleteWatchlistX_Amz_Target { 'VoiceID.DeleteWatchlist' = 0 }

	export enum DescribeDomainX_Amz_Target { 'VoiceID.DescribeDomain' = 0 }

	export enum DescribeFraudsterX_Amz_Target { 'VoiceID.DescribeFraudster' = 0 }

	export enum DescribeFraudsterRegistrationJobX_Amz_Target { 'VoiceID.DescribeFraudsterRegistrationJob' = 0 }

	export enum DescribeSpeakerX_Amz_Target { 'VoiceID.DescribeSpeaker' = 0 }

	export enum DescribeSpeakerEnrollmentJobX_Amz_Target { 'VoiceID.DescribeSpeakerEnrollmentJob' = 0 }

	export enum DescribeWatchlistX_Amz_Target { 'VoiceID.DescribeWatchlist' = 0 }

	export enum DisassociateFraudsterX_Amz_Target { 'VoiceID.DisassociateFraudster' = 0 }

	export enum EvaluateSessionX_Amz_Target { 'VoiceID.EvaluateSession' = 0 }

	export enum ListDomainsX_Amz_Target { 'VoiceID.ListDomains' = 0 }

	export enum ListFraudsterRegistrationJobsX_Amz_Target { 'VoiceID.ListFraudsterRegistrationJobs' = 0 }

	export enum ListFraudstersX_Amz_Target { 'VoiceID.ListFraudsters' = 0 }

	export enum ListSpeakerEnrollmentJobsX_Amz_Target { 'VoiceID.ListSpeakerEnrollmentJobs' = 0 }

	export enum ListSpeakersX_Amz_Target { 'VoiceID.ListSpeakers' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'VoiceID.ListTagsForResource' = 0 }

	export enum ListWatchlistsX_Amz_Target { 'VoiceID.ListWatchlists' = 0 }

	export enum OptOutSpeakerX_Amz_Target { 'VoiceID.OptOutSpeaker' = 0 }

	export enum StartFraudsterRegistrationJobX_Amz_Target { 'VoiceID.StartFraudsterRegistrationJob' = 0 }

	export enum StartSpeakerEnrollmentJobX_Amz_Target { 'VoiceID.StartSpeakerEnrollmentJob' = 0 }

	export enum TagResourceX_Amz_Target { 'VoiceID.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'VoiceID.UntagResource' = 0 }

	export enum UpdateDomainX_Amz_Target { 'VoiceID.UpdateDomain' = 0 }

	export enum UpdateWatchlistX_Amz_Target { 'VoiceID.UpdateWatchlist' = 0 }

}

