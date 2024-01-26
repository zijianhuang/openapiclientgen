import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Output structure for the CancelJob operation. */
	export interface CancelJobOutput {

		/** Specifies whether (true) or not (false) AWS Import/Export updated your job. */
		Success?: boolean | null;
	}

	/** Output structure for the CancelJob operation. */
	export interface CancelJobOutputFormProperties {

		/** Specifies whether (true) or not (false) AWS Import/Export updated your job. */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateCancelJobOutputFormGroup() {
		return new FormGroup<CancelJobOutputFormProperties>({
			Success: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The JOBID was missing, not found, or not associated with the AWS account. */
	export interface InvalidJobIdException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** The JOBID was missing, not found, or not associated with the AWS account. */
	export interface InvalidJobIdExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidJobIdExceptionFormGroup() {
		return new FormGroup<InvalidJobIdExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates that the specified job has expired out of the system. */
	export interface ExpiredJobIdException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** Indicates that the specified job has expired out of the system. */
	export interface ExpiredJobIdExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateExpiredJobIdExceptionFormGroup() {
		return new FormGroup<ExpiredJobIdExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specified job ID has been canceled and is no longer valid. */
	export interface CanceledJobIdException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** The specified job ID has been canceled and is no longer valid. */
	export interface CanceledJobIdExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateCanceledJobIdExceptionFormGroup() {
		return new FormGroup<CanceledJobIdExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AWS Import/Export cannot cancel the job */
	export interface UnableToCancelJobIdException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** AWS Import/Export cannot cancel the job */
	export interface UnableToCancelJobIdExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateUnableToCancelJobIdExceptionFormGroup() {
		return new FormGroup<UnableToCancelJobIdExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The AWS Access Key ID specified in the request did not match the manifest's accessKeyId value. The manifest and the request authentication must use the same AWS Access Key ID. */
	export interface InvalidAccessKeyIdException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** The AWS Access Key ID specified in the request did not match the manifest's accessKeyId value. The manifest and the request authentication must use the same AWS Access Key ID. */
	export interface InvalidAccessKeyIdExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidAccessKeyIdExceptionFormGroup() {
		return new FormGroup<InvalidAccessKeyIdExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The client tool version is invalid. */
	export interface InvalidVersionException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** The client tool version is invalid. */
	export interface InvalidVersionExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidVersionExceptionFormGroup() {
		return new FormGroup<InvalidVersionExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output structure for the CreateJob operation. */
	export interface CreateJobOutput {

		/** A unique identifier which refers to a particular job. */
		JobId?: string | null;

		/** Specifies whether the job to initiate is an import or export job. */
		JobType?: CreateJobOutputJobType | null;

		/** An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value. */
		Signature?: string | null;

		/** The actual text of the SIGNATURE file to be written to disk. */
		SignatureFileContents?: string | null;

		/** An optional message notifying you of non-fatal issues with the job, such as use of an incompatible Amazon S3 bucket name. */
		WarningMessage?: string | null;

		/** A collection of artifacts. */
		ArtifactList?: Array<Artifact>;
	}

	/** Output structure for the CreateJob operation. */
	export interface CreateJobOutputFormProperties {

		/** A unique identifier which refers to a particular job. */
		JobId: FormControl<string | null | undefined>,

		/** Specifies whether the job to initiate is an import or export job. */
		JobType: FormControl<CreateJobOutputJobType | null | undefined>,

		/** An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value. */
		Signature: FormControl<string | null | undefined>,

		/** The actual text of the SIGNATURE file to be written to disk. */
		SignatureFileContents: FormControl<string | null | undefined>,

		/** An optional message notifying you of non-fatal issues with the job, such as use of an incompatible Amazon S3 bucket name. */
		WarningMessage: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobOutputFormGroup() {
		return new FormGroup<CreateJobOutputFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobType: new FormControl<CreateJobOutputJobType | null | undefined>(undefined),
			Signature: new FormControl<string | null | undefined>(undefined),
			SignatureFileContents: new FormControl<string | null | undefined>(undefined),
			WarningMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateJobOutputJobType { Import = 0, Export = 1 }


	/** A discrete item that contains the description and URL of an artifact (such as a PDF). */
	export interface Artifact {

		/** The associated description for this object. */
		Description?: string | null;

		/** The URL for a given Artifact. */
		URL?: string | null;
	}

	/** A discrete item that contains the description and URL of an artifact (such as a PDF). */
	export interface ArtifactFormProperties {

		/** The associated description for this object. */
		Description: FormControl<string | null | undefined>,

		/** The URL for a given Artifact. */
		URL: FormControl<string | null | undefined>,
	}
	export function CreateArtifactFormGroup() {
		return new FormGroup<ArtifactFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			URL: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One or more required parameters was missing from the request. */
	export interface MissingParameterException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** One or more required parameters was missing from the request. */
	export interface MissingParameterExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateMissingParameterExceptionFormGroup() {
		return new FormGroup<MissingParameterExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One or more parameters had an invalid value. */
	export interface InvalidParameterException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** One or more parameters had an invalid value. */
	export interface InvalidParameterExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The address specified in the manifest is invalid. */
	export interface InvalidAddressException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** The address specified in the manifest is invalid. */
	export interface InvalidAddressExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidAddressExceptionFormGroup() {
		return new FormGroup<InvalidAddressExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One or more manifest fields was invalid. Please correct and resubmit. */
	export interface InvalidManifestFieldException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** One or more manifest fields was invalid. Please correct and resubmit. */
	export interface InvalidManifestFieldExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidManifestFieldExceptionFormGroup() {
		return new FormGroup<InvalidManifestFieldExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One or more required fields were missing from the manifest file. Please correct and resubmit. */
	export interface MissingManifestFieldException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** One or more required fields were missing from the manifest file. Please correct and resubmit. */
	export interface MissingManifestFieldExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateMissingManifestFieldExceptionFormGroup() {
		return new FormGroup<MissingManifestFieldExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specified bucket does not exist. Create the specified bucket or change the manifest's bucket, exportBucket, or logBucket field to a bucket that the account, as specified by the manifest's Access Key ID, has write permissions to. */
	export interface NoSuchBucketException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** The specified bucket does not exist. Create the specified bucket or change the manifest's bucket, exportBucket, or logBucket field to a bucket that the account, as specified by the manifest's Access Key ID, has write permissions to. */
	export interface NoSuchBucketExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateNoSuchBucketExceptionFormGroup() {
		return new FormGroup<NoSuchBucketExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One or more required customs parameters was missing from the manifest. */
	export interface MissingCustomsException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** One or more required customs parameters was missing from the manifest. */
	export interface MissingCustomsExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateMissingCustomsExceptionFormGroup() {
		return new FormGroup<MissingCustomsExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One or more customs parameters was invalid. Please correct and resubmit. */
	export interface InvalidCustomsException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** One or more customs parameters was invalid. Please correct and resubmit. */
	export interface InvalidCustomsExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidCustomsExceptionFormGroup() {
		return new FormGroup<InvalidCustomsExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** File system specified in export manifest is invalid. */
	export interface InvalidFileSystemException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** File system specified in export manifest is invalid. */
	export interface InvalidFileSystemExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidFileSystemExceptionFormGroup() {
		return new FormGroup<InvalidFileSystemExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Your manifest file contained buckets from multiple regions. A job is restricted to buckets from one region. Please correct and resubmit. */
	export interface MultipleRegionsException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** Your manifest file contained buckets from multiple regions. A job is restricted to buckets from one region. Please correct and resubmit. */
	export interface MultipleRegionsExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateMultipleRegionsExceptionFormGroup() {
		return new FormGroup<MultipleRegionsExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The account specified does not have the appropriate bucket permissions. */
	export interface BucketPermissionException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** The account specified does not have the appropriate bucket permissions. */
	export interface BucketPermissionExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateBucketPermissionExceptionFormGroup() {
		return new FormGroup<BucketPermissionExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Your manifest is not well-formed. */
	export interface MalformedManifestException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** Your manifest is not well-formed. */
	export interface MalformedManifestExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateMalformedManifestExceptionFormGroup() {
		return new FormGroup<MalformedManifestExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Each account can create only a certain number of jobs per day. If you need to create more than this, please contact awsimportexport@amazon.com to explain your particular use case. */
	export interface CreateJobQuotaExceededException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** Each account can create only a certain number of jobs per day. If you need to create more than this, please contact awsimportexport@amazon.com to explain your particular use case. */
	export interface CreateJobQuotaExceededExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobQuotaExceededExceptionFormGroup() {
		return new FormGroup<CreateJobQuotaExceededExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetShippingLabelOutput {
		ShippingLabelURL?: string | null;
		Warning?: string | null;
	}
	export interface GetShippingLabelOutputFormProperties {
		ShippingLabelURL: FormControl<string | null | undefined>,
		Warning: FormControl<string | null | undefined>,
	}
	export function CreateGetShippingLabelOutputFormGroup() {
		return new FormGroup<GetShippingLabelOutputFormProperties>({
			ShippingLabelURL: new FormControl<string | null | undefined>(undefined),
			Warning: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output structure for the GetStatus operation. */
	export interface GetStatusOutput {

		/** A unique identifier which refers to a particular job. */
		JobId?: string | null;

		/** Specifies whether the job to initiate is an import or export job. */
		JobType?: CreateJobOutputJobType | null;

		/** A token representing the location of the storage device, such as "AtAWS". */
		LocationCode?: string | null;

		/** A more human readable form of the physical location of the storage device. */
		LocationMessage?: string | null;

		/** A token representing the state of the job, such as "Started". */
		ProgressCode?: string | null;

		/** A more human readable form of the job status. */
		ProgressMessage?: string | null;

		/** Name of the shipping company. This value is included when the LocationCode is "Returned". */
		Carrier?: string | null;

		/** The shipping tracking number assigned by AWS Import/Export to the storage device when it's returned to you. We return this value when the LocationCode is "Returned". */
		TrackingNumber?: string | null;

		/** Amazon S3 bucket for user logs. */
		LogBucket?: string | null;

		/** The key where the user logs were stored. */
		LogKey?: string | null;

		/** Number of errors. We return this value when the ProgressCode is Success or SuccessWithErrors. */
		ErrorCount?: number | null;

		/** An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value. */
		Signature?: string | null;

		/** An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value. */
		SignatureFileContents?: string | null;

		/** The last manifest submitted, which will be used to process the job. */
		CurrentManifest?: string | null;

		/** Timestamp of the CreateJob request in ISO8601 date format. For example "2010-03-28T20:27:35Z". */
		CreationDate?: Date | null;

		/** A collection of artifacts. */
		ArtifactList?: Array<Artifact>;
	}

	/** Output structure for the GetStatus operation. */
	export interface GetStatusOutputFormProperties {

		/** A unique identifier which refers to a particular job. */
		JobId: FormControl<string | null | undefined>,

		/** Specifies whether the job to initiate is an import or export job. */
		JobType: FormControl<CreateJobOutputJobType | null | undefined>,

		/** A token representing the location of the storage device, such as "AtAWS". */
		LocationCode: FormControl<string | null | undefined>,

		/** A more human readable form of the physical location of the storage device. */
		LocationMessage: FormControl<string | null | undefined>,

		/** A token representing the state of the job, such as "Started". */
		ProgressCode: FormControl<string | null | undefined>,

		/** A more human readable form of the job status. */
		ProgressMessage: FormControl<string | null | undefined>,

		/** Name of the shipping company. This value is included when the LocationCode is "Returned". */
		Carrier: FormControl<string | null | undefined>,

		/** The shipping tracking number assigned by AWS Import/Export to the storage device when it's returned to you. We return this value when the LocationCode is "Returned". */
		TrackingNumber: FormControl<string | null | undefined>,

		/** Amazon S3 bucket for user logs. */
		LogBucket: FormControl<string | null | undefined>,

		/** The key where the user logs were stored. */
		LogKey: FormControl<string | null | undefined>,

		/** Number of errors. We return this value when the ProgressCode is Success or SuccessWithErrors. */
		ErrorCount: FormControl<number | null | undefined>,

		/** An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value. */
		Signature: FormControl<string | null | undefined>,

		/** An encrypted code used to authenticate the request and response, for example, "DV+TpDfx1/TdSE9ktyK9k/bDTVI=". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value. */
		SignatureFileContents: FormControl<string | null | undefined>,

		/** The last manifest submitted, which will be used to process the job. */
		CurrentManifest: FormControl<string | null | undefined>,

		/** Timestamp of the CreateJob request in ISO8601 date format. For example "2010-03-28T20:27:35Z". */
		CreationDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetStatusOutputFormGroup() {
		return new FormGroup<GetStatusOutputFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobType: new FormControl<CreateJobOutputJobType | null | undefined>(undefined),
			LocationCode: new FormControl<string | null | undefined>(undefined),
			LocationMessage: new FormControl<string | null | undefined>(undefined),
			ProgressCode: new FormControl<string | null | undefined>(undefined),
			ProgressMessage: new FormControl<string | null | undefined>(undefined),
			Carrier: new FormControl<string | null | undefined>(undefined),
			TrackingNumber: new FormControl<string | null | undefined>(undefined),
			LogBucket: new FormControl<string | null | undefined>(undefined),
			LogKey: new FormControl<string | null | undefined>(undefined),
			ErrorCount: new FormControl<number | null | undefined>(undefined),
			Signature: new FormControl<string | null | undefined>(undefined),
			SignatureFileContents: new FormControl<string | null | undefined>(undefined),
			CurrentManifest: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Output structure for the ListJobs operation. */
	export interface ListJobsOutput {

		/** A list container for Jobs returned by the ListJobs operation. */
		Jobs?: Array<Job>;

		/** Indicates whether the list of jobs was truncated. If true, then call ListJobs again using the last JobId element as the marker. */
		IsTruncated?: boolean | null;
	}

	/** Output structure for the ListJobs operation. */
	export interface ListJobsOutputFormProperties {

		/** Indicates whether the list of jobs was truncated. If true, then call ListJobs again using the last JobId element as the marker. */
		IsTruncated: FormControl<boolean | null | undefined>,
	}
	export function CreateListJobsOutputFormGroup() {
		return new FormGroup<ListJobsOutputFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Representation of a job returned by the ListJobs operation. */
	export interface Job {

		/** A unique identifier which refers to a particular job. */
		JobId?: string | null;

		/** Timestamp of the CreateJob request in ISO8601 date format. For example "2010-03-28T20:27:35Z". */
		CreationDate?: Date | null;

		/** Indicates whether the job was canceled. */
		IsCanceled?: boolean | null;

		/** Specifies whether the job to initiate is an import or export job. */
		JobType?: CreateJobOutputJobType | null;
	}

	/** Representation of a job returned by the ListJobs operation. */
	export interface JobFormProperties {

		/** A unique identifier which refers to a particular job. */
		JobId: FormControl<string | null | undefined>,

		/** Timestamp of the CreateJob request in ISO8601 date format. For example "2010-03-28T20:27:35Z". */
		CreationDate: FormControl<Date | null | undefined>,

		/** Indicates whether the job was canceled. */
		IsCanceled: FormControl<boolean | null | undefined>,

		/** Specifies whether the job to initiate is an import or export job. */
		JobType: FormControl<CreateJobOutputJobType | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			IsCanceled: new FormControl<boolean | null | undefined>(undefined),
			JobType: new FormControl<CreateJobOutputJobType | null | undefined>(undefined),
		});

	}


	/** Output structure for the UpateJob operation. */
	export interface UpdateJobOutput {

		/** Specifies whether (true) or not (false) AWS Import/Export updated your job. */
		Success?: boolean | null;

		/** An optional message notifying you of non-fatal issues with the job, such as use of an incompatible Amazon S3 bucket name. */
		WarningMessage?: string | null;

		/** A collection of artifacts. */
		ArtifactList?: Array<Artifact>;
	}

	/** Output structure for the UpateJob operation. */
	export interface UpdateJobOutputFormProperties {

		/** Specifies whether (true) or not (false) AWS Import/Export updated your job. */
		Success: FormControl<boolean | null | undefined>,

		/** An optional message notifying you of non-fatal issues with the job, such as use of an incompatible Amazon S3 bucket name. */
		WarningMessage: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobOutputFormGroup() {
		return new FormGroup<UpdateJobOutputFormProperties>({
			Success: new FormControl<boolean | null | undefined>(undefined),
			WarningMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AWS Import/Export cannot update the job */
	export interface UnableToUpdateJobIdException {

		/** The human-readable description of a particular error. */
		message?: string | null;
	}

	/** AWS Import/Export cannot update the job */
	export interface UnableToUpdateJobIdExceptionFormProperties {

		/** The human-readable description of a particular error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateUnableToUpdateJobIdExceptionFormGroup() {
		return new FormGroup<UnableToUpdateJobIdExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input structure for the CancelJob operation. */
	export interface CancelJobInput {

		/**
		 * A unique identifier which refers to a particular job.
		 * Required
		 */
		JobId: string;

		/** Specifies the version of the client tool. */
		APIVersion?: string | null;
	}

	/** Input structure for the CancelJob operation. */
	export interface CancelJobInputFormProperties {

		/**
		 * A unique identifier which refers to a particular job.
		 * Required
		 */
		JobId: FormControl<string | null | undefined>,

		/** Specifies the version of the client tool. */
		APIVersion: FormControl<string | null | undefined>,
	}
	export function CreateCancelJobInputFormGroup() {
		return new FormGroup<CancelJobInputFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			APIVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies whether the job to initiate is an import or export job. */
	export enum JobType { Import = 0, Export = 1 }


	/** Input structure for the CreateJob operation. */
	export interface CreateJobInput {

		/**
		 * Specifies whether the job to initiate is an import or export job.
		 * Required
		 */
		JobType: CreateJobOutputJobType;

		/**
		 * The UTF-8 encoded text of the manifest file.
		 * Required
		 */
		Manifest: string;

		/** For internal use only. */
		ManifestAddendum?: string | null;

		/**
		 * Validate the manifest and parameter values in the request but do not actually create a job.
		 * Required
		 */
		ValidateOnly: boolean;

		/** Specifies the version of the client tool. */
		APIVersion?: string | null;
	}

	/** Input structure for the CreateJob operation. */
	export interface CreateJobInputFormProperties {

		/**
		 * Specifies whether the job to initiate is an import or export job.
		 * Required
		 */
		JobType: FormControl<CreateJobOutputJobType | null | undefined>,

		/**
		 * The UTF-8 encoded text of the manifest file.
		 * Required
		 */
		Manifest: FormControl<string | null | undefined>,

		/** For internal use only. */
		ManifestAddendum: FormControl<string | null | undefined>,

		/**
		 * Validate the manifest and parameter values in the request but do not actually create a job.
		 * Required
		 */
		ValidateOnly: FormControl<boolean | null | undefined>,

		/** Specifies the version of the client tool. */
		APIVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobInputFormGroup() {
		return new FormGroup<CreateJobInputFormProperties>({
			JobType: new FormControl<CreateJobOutputJobType | null | undefined>(undefined, [Validators.required]),
			Manifest: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ManifestAddendum: new FormControl<string | null | undefined>(undefined),
			ValidateOnly: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			APIVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetShippingLabelInput {

		/** Required */
		jobIds: Array<string>;

		/** Specifies the name of the person responsible for shipping this package. */
		name?: string | null;

		/** Specifies the name of the company that will ship this package. */
		company?: string | null;

		/** Specifies the phone number of the person responsible for shipping this package. */
		phoneNumber?: string | null;

		/** Specifies the name of your country for the return address. */
		country?: string | null;

		/** Specifies the name of your state or your province for the return address. */
		stateOrProvince?: string | null;

		/** Specifies the name of your city for the return address. */
		city?: string | null;

		/** Specifies the postal code for the return address. */
		postalCode?: string | null;

		/** Specifies the first part of the street address for the return address, for example 1234 Main Street. */
		street1?: string | null;

		/** Specifies the optional second part of the street address for the return address, for example Suite 100. */
		street2?: string | null;

		/** Specifies the optional third part of the street address for the return address, for example c/o Jane Doe. */
		street3?: string | null;

		/** Specifies the version of the client tool. */
		APIVersion?: string | null;
	}
	export interface GetShippingLabelInputFormProperties {

		/** Specifies the name of the person responsible for shipping this package. */
		name: FormControl<string | null | undefined>,

		/** Specifies the name of the company that will ship this package. */
		company: FormControl<string | null | undefined>,

		/** Specifies the phone number of the person responsible for shipping this package. */
		phoneNumber: FormControl<string | null | undefined>,

		/** Specifies the name of your country for the return address. */
		country: FormControl<string | null | undefined>,

		/** Specifies the name of your state or your province for the return address. */
		stateOrProvince: FormControl<string | null | undefined>,

		/** Specifies the name of your city for the return address. */
		city: FormControl<string | null | undefined>,

		/** Specifies the postal code for the return address. */
		postalCode: FormControl<string | null | undefined>,

		/** Specifies the first part of the street address for the return address, for example 1234 Main Street. */
		street1: FormControl<string | null | undefined>,

		/** Specifies the optional second part of the street address for the return address, for example Suite 100. */
		street2: FormControl<string | null | undefined>,

		/** Specifies the optional third part of the street address for the return address, for example c/o Jane Doe. */
		street3: FormControl<string | null | undefined>,

		/** Specifies the version of the client tool. */
		APIVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetShippingLabelInputFormGroup() {
		return new FormGroup<GetShippingLabelInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			company: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			stateOrProvince: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			street1: new FormControl<string | null | undefined>(undefined),
			street2: new FormControl<string | null | undefined>(undefined),
			street3: new FormControl<string | null | undefined>(undefined),
			APIVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input structure for the GetStatus operation. */
	export interface GetStatusInput {

		/**
		 * A unique identifier which refers to a particular job.
		 * Required
		 */
		JobId: string;

		/** Specifies the version of the client tool. */
		APIVersion?: string | null;
	}

	/** Input structure for the GetStatus operation. */
	export interface GetStatusInputFormProperties {

		/**
		 * A unique identifier which refers to a particular job.
		 * Required
		 */
		JobId: FormControl<string | null | undefined>,

		/** Specifies the version of the client tool. */
		APIVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetStatusInputFormGroup() {
		return new FormGroup<GetStatusInputFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			APIVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input structure for the ListJobs operation. */
	export interface ListJobsInput {

		/** Sets the maximum number of jobs returned in the response. If there are additional jobs that were not returned because MaxJobs was exceeded, the response contains &lt;IsTruncated&gt;true&lt;/IsTruncated&gt;. To return the additional jobs, see Marker. */
		MaxJobs?: number | null;

		/** Specifies the JOBID to start after when listing the jobs created with your account. AWS Import/Export lists your jobs in reverse chronological order. See MaxJobs. */
		Marker?: string | null;

		/** Specifies the version of the client tool. */
		APIVersion?: string | null;
	}

	/** Input structure for the ListJobs operation. */
	export interface ListJobsInputFormProperties {

		/** Sets the maximum number of jobs returned in the response. If there are additional jobs that were not returned because MaxJobs was exceeded, the response contains &lt;IsTruncated&gt;true&lt;/IsTruncated&gt;. To return the additional jobs, see Marker. */
		MaxJobs: FormControl<number | null | undefined>,

		/** Specifies the JOBID to start after when listing the jobs created with your account. AWS Import/Export lists your jobs in reverse chronological order. See MaxJobs. */
		Marker: FormControl<string | null | undefined>,

		/** Specifies the version of the client tool. */
		APIVersion: FormControl<string | null | undefined>,
	}
	export function CreateListJobsInputFormGroup() {
		return new FormGroup<ListJobsInputFormProperties>({
			MaxJobs: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			APIVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input structure for the UpateJob operation. */
	export interface UpdateJobInput {

		/**
		 * A unique identifier which refers to a particular job.
		 * Required
		 */
		JobId: string;

		/**
		 * The UTF-8 encoded text of the manifest file.
		 * Required
		 */
		Manifest: string;

		/**
		 * Specifies whether the job to initiate is an import or export job.
		 * Required
		 */
		JobType: CreateJobOutputJobType;

		/**
		 * Validate the manifest and parameter values in the request but do not actually create a job.
		 * Required
		 */
		ValidateOnly: boolean;

		/** Specifies the version of the client tool. */
		APIVersion?: string | null;
	}

	/** Input structure for the UpateJob operation. */
	export interface UpdateJobInputFormProperties {

		/**
		 * A unique identifier which refers to a particular job.
		 * Required
		 */
		JobId: FormControl<string | null | undefined>,

		/**
		 * The UTF-8 encoded text of the manifest file.
		 * Required
		 */
		Manifest: FormControl<string | null | undefined>,

		/**
		 * Specifies whether the job to initiate is an import or export job.
		 * Required
		 */
		JobType: FormControl<CreateJobOutputJobType | null | undefined>,

		/**
		 * Validate the manifest and parameter values in the request but do not actually create a job.
		 * Required
		 */
		ValidateOnly: FormControl<boolean | null | undefined>,

		/** Specifies the version of the client tool. */
		APIVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobInputFormGroup() {
		return new FormGroup<UpdateJobInputFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Manifest: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobType: new FormControl<CreateJobOutputJobType | null | undefined>(undefined, [Validators.required]),
			ValidateOnly: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			APIVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This operation cancels a specified job. Only the job owner can cancel it. The operation fails if the job has already started or is complete.
		 * Get #Operation=CancelJob&Action=CancelJob
		 * @return {void} Success
		 */
		GET_CancelJob(JobId: string, APIVersion: string | null | undefined, Operation: GET_CancelJobOperation, Action: GET_CancelJobOperation, Version: GET_CancelJobVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Operation=CancelJob&Action=CancelJob?JobId=' + (JobId == null ? '' : encodeURIComponent(JobId)) + '&APIVersion=' + (APIVersion == null ? '' : encodeURIComponent(APIVersion)) + '&Operation=' + Operation + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation initiates the process of scheduling an upload or download of your data. You include in the request a manifest that describes the data transfer specifics. The response to the request includes a job ID, which you can use in other operations, a signature that you use to identify your storage device, and the address where you should ship your storage device.
		 * Get #Operation=CreateJob&Action=CreateJob
		 * @return {void} Success
		 */
		GET_CreateJob(JobType: CreateJobOutputJobType, Manifest: string, ManifestAddendum: string | null | undefined, ValidateOnly: boolean, APIVersion: string | null | undefined, Operation: GET_CreateJobOperation, Action: GET_CreateJobOperation, Version: GET_CancelJobVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Operation=CreateJob&Action=CreateJob?JobType=' + JobType + '&Manifest=' + (Manifest == null ? '' : encodeURIComponent(Manifest)) + '&ManifestAddendum=' + (ManifestAddendum == null ? '' : encodeURIComponent(ManifestAddendum)) + '&ValidateOnly=' + ValidateOnly + '&APIVersion=' + (APIVersion == null ? '' : encodeURIComponent(APIVersion)) + '&Operation=' + Operation + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation generates a pre-paid UPS shipping label that you will use to ship your device to AWS for processing.
		 * Get #Operation=GetShippingLabel&Action=GetShippingLabel
		 * @return {void} Success
		 */
		GET_GetShippingLabel(jobIds: Array<string>, name: string | null | undefined, company: string | null | undefined, phoneNumber: string | null | undefined, country: string | null | undefined, stateOrProvince: string | null | undefined, city: string | null | undefined, postalCode: string | null | undefined, street1: string | null | undefined, street2: string | null | undefined, street3: string | null | undefined, APIVersion: string | null | undefined, Operation: GET_GetShippingLabelOperation, Action: GET_GetShippingLabelOperation, Version: GET_CancelJobVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Operation=GetShippingLabel&Action=GetShippingLabel?' + jobIds.map(z => `jobIds=${encodeURIComponent(z)}`).join('&') + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&company=' + (company == null ? '' : encodeURIComponent(company)) + '&phoneNumber=' + (phoneNumber == null ? '' : encodeURIComponent(phoneNumber)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&stateOrProvince=' + (stateOrProvince == null ? '' : encodeURIComponent(stateOrProvince)) + '&city=' + (city == null ? '' : encodeURIComponent(city)) + '&postalCode=' + (postalCode == null ? '' : encodeURIComponent(postalCode)) + '&street1=' + (street1 == null ? '' : encodeURIComponent(street1)) + '&street2=' + (street2 == null ? '' : encodeURIComponent(street2)) + '&street3=' + (street3 == null ? '' : encodeURIComponent(street3)) + '&APIVersion=' + (APIVersion == null ? '' : encodeURIComponent(APIVersion)) + '&Operation=' + Operation + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job. You can only return information about jobs you own.
		 * Get #Operation=GetStatus&Action=GetStatus
		 * @return {void} Success
		 */
		GET_GetStatus(JobId: string, APIVersion: string | null | undefined, Operation: GET_GetStatusOperation, Action: GET_GetStatusOperation, Version: GET_CancelJobVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Operation=GetStatus&Action=GetStatus?JobId=' + (JobId == null ? '' : encodeURIComponent(JobId)) + '&APIVersion=' + (APIVersion == null ? '' : encodeURIComponent(APIVersion)) + '&Operation=' + Operation + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation returns the jobs associated with the requester. AWS Import/Export lists the jobs in reverse chronological order based on the date of creation. For example if Job Test1 was created 2009Dec30 and Test2 was created 2010Feb05, the ListJobs operation would return Test2 followed by Test1.
		 * Get #Operation=ListJobs&Action=ListJobs
		 * @return {void} Success
		 */
		GET_ListJobs(MaxJobs: number | null | undefined, Marker: string | null | undefined, APIVersion: string | null | undefined, Operation: GET_ListJobsOperation, Action: GET_ListJobsOperation, Version: GET_CancelJobVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Operation=ListJobs&Action=ListJobs?MaxJobs=' + MaxJobs + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&APIVersion=' + (APIVersion == null ? '' : encodeURIComponent(APIVersion)) + '&Operation=' + Operation + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * You use this operation to change the parameters specified in the original manifest file by supplying a new manifest file. The manifest file attached to this request replaces the original manifest file. You can only use the operation after a CreateJob request but before the data transfer starts and you can only use it on jobs you own.
		 * Get #Operation=UpdateJob&Action=UpdateJob
		 * @return {void} Success
		 */
		GET_UpdateJob(JobId: string, Manifest: string, JobType: CreateJobOutputJobType, ValidateOnly: boolean, APIVersion: string | null | undefined, Operation: GET_UpdateJobOperation, Action: GET_UpdateJobOperation, Version: GET_CancelJobVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Operation=UpdateJob&Action=UpdateJob?JobId=' + (JobId == null ? '' : encodeURIComponent(JobId)) + '&Manifest=' + (Manifest == null ? '' : encodeURIComponent(Manifest)) + '&JobType=' + JobType + '&ValidateOnly=' + ValidateOnly + '&APIVersion=' + (APIVersion == null ? '' : encodeURIComponent(APIVersion)) + '&Operation=' + Operation + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_CancelJobOperation { CancelJob = 0 }

	export enum GET_CancelJobVersion { '2010-06-01' = 0 }

	export enum GET_CreateJobOperation { CreateJob = 0 }

	export enum GET_GetShippingLabelOperation { GetShippingLabel = 0 }

	export enum GET_GetStatusOperation { GetStatus = 0 }

	export enum GET_ListJobsOperation { ListJobs = 0 }

	export enum GET_UpdateJobOperation { UpdateJob = 0 }

}

