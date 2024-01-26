import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CopyImageSetResponse {

		/** Required */
		datastoreId: string;

		/** Required */
		sourceImageSetProperties: CopySourceImageSetProperties;

		/** Required */
		destinationImageSetProperties: CopyDestinationImageSetProperties;
	}
	export interface CopyImageSetResponseFormProperties {

		/** Required */
		datastoreId: FormControl<string | null | undefined>,
	}
	export function CreateCopyImageSetResponseFormGroup() {
		return new FormGroup<CopyImageSetResponseFormProperties>({
			datastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Copy source image set properties. */
	export interface CopySourceImageSetProperties {

		/** Required */
		imageSetId: string;

		/** Required */
		latestVersionId: string;
		imageSetState?: ImageSetState;
		imageSetWorkflowStatus?: ImageSetWorkflowStatus;
		createdAt?: Date;
		updatedAt?: Date;
		imageSetArn?: string;
	}

	/** Copy source image set properties. */
	export interface CopySourceImageSetPropertiesFormProperties {

		/** Required */
		imageSetId: FormControl<string | null | undefined>,

		/** Required */
		latestVersionId: FormControl<string | null | undefined>,
		imageSetState: FormControl<ImageSetState | null | undefined>,
		imageSetWorkflowStatus: FormControl<ImageSetWorkflowStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		imageSetArn: FormControl<string | null | undefined>,
	}
	export function CreateCopySourceImageSetPropertiesFormGroup() {
		return new FormGroup<CopySourceImageSetPropertiesFormProperties>({
			imageSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			latestVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageSetState: new FormControl<ImageSetState | null | undefined>(undefined),
			imageSetWorkflowStatus: new FormControl<ImageSetWorkflowStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			imageSetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageSetState { ACTIVE = 0, LOCKED = 1, DELETED = 2 }

	export enum ImageSetWorkflowStatus { CREATED = 0, COPIED = 1, COPYING = 2, COPYING_WITH_READ_ONLY_ACCESS = 3, COPY_FAILED = 4, UPDATING = 5, UPDATED = 6, UPDATE_FAILED = 7, DELETING = 8, DELETED = 9 }


	/** Copy the image set properties of the destination image set. */
	export interface CopyDestinationImageSetProperties {

		/** Required */
		imageSetId: string;

		/** Required */
		latestVersionId: string;
		imageSetState?: ImageSetState;
		imageSetWorkflowStatus?: ImageSetWorkflowStatus;
		createdAt?: Date;
		updatedAt?: Date;
		imageSetArn?: string;
	}

	/** Copy the image set properties of the destination image set. */
	export interface CopyDestinationImageSetPropertiesFormProperties {

		/** Required */
		imageSetId: FormControl<string | null | undefined>,

		/** Required */
		latestVersionId: FormControl<string | null | undefined>,
		imageSetState: FormControl<ImageSetState | null | undefined>,
		imageSetWorkflowStatus: FormControl<ImageSetWorkflowStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		imageSetArn: FormControl<string | null | undefined>,
	}
	export function CreateCopyDestinationImageSetPropertiesFormGroup() {
		return new FormGroup<CopyDestinationImageSetPropertiesFormProperties>({
			imageSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			latestVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageSetState: new FormControl<ImageSetState | null | undefined>(undefined),
			imageSetWorkflowStatus: new FormControl<ImageSetWorkflowStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			imageSetArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Copy source image set information. */
	export interface CopySourceImageSetInformation {

		/** Required */
		latestVersionId: string;
	}

	/** Copy source image set information. */
	export interface CopySourceImageSetInformationFormProperties {

		/** Required */
		latestVersionId: FormControl<string | null | undefined>,
	}
	export function CreateCopySourceImageSetInformationFormGroup() {
		return new FormGroup<CopySourceImageSetInformationFormProperties>({
			latestVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Copy the destination image set. */
	export interface CopyDestinationImageSet {

		/** Required */
		imageSetId: string;

		/** Required */
		latestVersionId: string;
	}

	/** Copy the destination image set. */
	export interface CopyDestinationImageSetFormProperties {

		/** Required */
		imageSetId: FormControl<string | null | undefined>,

		/** Required */
		latestVersionId: FormControl<string | null | undefined>,
	}
	export function CreateCopyDestinationImageSetFormGroup() {
		return new FormGroup<CopyDestinationImageSetFormProperties>({
			imageSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			latestVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface CreateDatastoreResponse {

		/** Required */
		datastoreId: string;

		/** Required */
		datastoreStatus: DatastoreStatus;
	}
	export interface CreateDatastoreResponseFormProperties {

		/** Required */
		datastoreId: FormControl<string | null | undefined>,

		/** Required */
		datastoreStatus: FormControl<DatastoreStatus | null | undefined>,
	}
	export function CreateCreateDatastoreResponseFormGroup() {
		return new FormGroup<CreateDatastoreResponseFormProperties>({
			datastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datastoreStatus: new FormControl<DatastoreStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DatastoreStatus { CREATING = 0, CREATE_FAILED = 1, ACTIVE = 2, DELETING = 3, DELETED = 4 }

	export interface DeleteDatastoreResponse {

		/** Required */
		datastoreId: string;

		/** Required */
		datastoreStatus: DatastoreStatus;
	}
	export interface DeleteDatastoreResponseFormProperties {

		/** Required */
		datastoreId: FormControl<string | null | undefined>,

		/** Required */
		datastoreStatus: FormControl<DatastoreStatus | null | undefined>,
	}
	export function CreateDeleteDatastoreResponseFormGroup() {
		return new FormGroup<DeleteDatastoreResponseFormProperties>({
			datastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datastoreStatus: new FormControl<DatastoreStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteImageSetResponse {

		/** Required */
		datastoreId: string;

		/** Required */
		imageSetId: string;

		/** Required */
		imageSetState: ImageSetState;

		/** Required */
		imageSetWorkflowStatus: ImageSetWorkflowStatus;
	}
	export interface DeleteImageSetResponseFormProperties {

		/** Required */
		datastoreId: FormControl<string | null | undefined>,

		/** Required */
		imageSetId: FormControl<string | null | undefined>,

		/** Required */
		imageSetState: FormControl<ImageSetState | null | undefined>,

		/** Required */
		imageSetWorkflowStatus: FormControl<ImageSetWorkflowStatus | null | undefined>,
	}
	export function CreateDeleteImageSetResponseFormGroup() {
		return new FormGroup<DeleteImageSetResponseFormProperties>({
			datastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageSetState: new FormControl<ImageSetState | null | undefined>(undefined, [Validators.required]),
			imageSetWorkflowStatus: new FormControl<ImageSetWorkflowStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDICOMImportJobResponse {

		/** Required */
		jobProperties: DICOMImportJobProperties;
	}
	export interface GetDICOMImportJobResponseFormProperties {
	}
	export function CreateGetDICOMImportJobResponseFormGroup() {
		return new FormGroup<GetDICOMImportJobResponseFormProperties>({
		});

	}


	/** Properties of the import job. */
	export interface DICOMImportJobProperties {

		/** Required */
		jobId: string;

		/** Required */
		jobName: string;

		/** Required */
		jobStatus: JobStatus;

		/** Required */
		datastoreId: string;

		/** Required */
		dataAccessRoleArn: string;
		endedAt?: Date;
		submittedAt?: Date;

		/** Required */
		inputS3Uri: string;

		/** Required */
		outputS3Uri: string;
		message?: string;
	}

	/** Properties of the import job. */
	export interface DICOMImportJobPropertiesFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		jobName: FormControl<string | null | undefined>,

		/** Required */
		jobStatus: FormControl<JobStatus | null | undefined>,

		/** Required */
		datastoreId: FormControl<string | null | undefined>,

		/** Required */
		dataAccessRoleArn: FormControl<string | null | undefined>,
		endedAt: FormControl<Date | null | undefined>,
		submittedAt: FormControl<Date | null | undefined>,

		/** Required */
		inputS3Uri: FormControl<string | null | undefined>,

		/** Required */
		outputS3Uri: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateDICOMImportJobPropertiesFormGroup() {
		return new FormGroup<DICOMImportJobPropertiesFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobStatus: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			datastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endedAt: new FormControl<Date | null | undefined>(undefined),
			submittedAt: new FormControl<Date | null | undefined>(undefined),
			inputS3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outputS3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3 }

	export interface GetDatastoreResponse {

		/** Required */
		datastoreProperties: DatastoreProperties;
	}
	export interface GetDatastoreResponseFormProperties {
	}
	export function CreateGetDatastoreResponseFormGroup() {
		return new FormGroup<GetDatastoreResponseFormProperties>({
		});

	}


	/** The properties associated with the data store. */
	export interface DatastoreProperties {

		/** Required */
		datastoreId: string;

		/** Required */
		datastoreName: string;

		/** Required */
		datastoreStatus: DatastoreStatus;
		kmsKeyArn?: string;
		datastoreArn?: string;
		createdAt?: Date;
		updatedAt?: Date;
	}

	/** The properties associated with the data store. */
	export interface DatastorePropertiesFormProperties {

		/** Required */
		datastoreId: FormControl<string | null | undefined>,

		/** Required */
		datastoreName: FormControl<string | null | undefined>,

		/** Required */
		datastoreStatus: FormControl<DatastoreStatus | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
		datastoreArn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDatastorePropertiesFormGroup() {
		return new FormGroup<DatastorePropertiesFormProperties>({
			datastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datastoreName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datastoreStatus: new FormControl<DatastoreStatus | null | undefined>(undefined, [Validators.required]),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
			datastoreArn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetImageFrameResponse {

		/** Required */
		imageFrameBlob: string;
	}
	export interface GetImageFrameResponseFormProperties {

		/** Required */
		imageFrameBlob: FormControl<string | null | undefined>,
	}
	export function CreateGetImageFrameResponseFormGroup() {
		return new FormGroup<GetImageFrameResponseFormProperties>({
			imageFrameBlob: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetImageSetResponse {

		/** Required */
		datastoreId: string;

		/** Required */
		imageSetId: string;

		/** Required */
		versionId: string;

		/** Required */
		imageSetState: ImageSetState;
		imageSetWorkflowStatus?: ImageSetWorkflowStatus;
		createdAt?: Date;
		updatedAt?: Date;
		deletedAt?: Date;
		message?: string;
		imageSetArn?: string;
	}
	export interface GetImageSetResponseFormProperties {

		/** Required */
		datastoreId: FormControl<string | null | undefined>,

		/** Required */
		imageSetId: FormControl<string | null | undefined>,

		/** Required */
		versionId: FormControl<string | null | undefined>,

		/** Required */
		imageSetState: FormControl<ImageSetState | null | undefined>,
		imageSetWorkflowStatus: FormControl<ImageSetWorkflowStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		deletedAt: FormControl<Date | null | undefined>,
		message: FormControl<string | null | undefined>,
		imageSetArn: FormControl<string | null | undefined>,
	}
	export function CreateGetImageSetResponseFormGroup() {
		return new FormGroup<GetImageSetResponseFormProperties>({
			datastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			versionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageSetState: new FormControl<ImageSetState | null | undefined>(undefined, [Validators.required]),
			imageSetWorkflowStatus: new FormControl<ImageSetWorkflowStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			deletedAt: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			imageSetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetImageSetMetadataResponse {

		/** Required */
		imageSetMetadataBlob: string;
	}
	export interface GetImageSetMetadataResponseFormProperties {

		/** Required */
		imageSetMetadataBlob: FormControl<string | null | undefined>,
	}
	export function CreateGetImageSetMetadataResponseFormGroup() {
		return new FormGroup<GetImageSetMetadataResponseFormProperties>({
			imageSetMetadataBlob: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDICOMImportJobsResponse {

		/** Required */
		jobSummaries: Array<DICOMImportJobSummary>;
		nextToken?: string;
	}
	export interface ListDICOMImportJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDICOMImportJobsResponseFormGroup() {
		return new FormGroup<ListDICOMImportJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of import job. */
	export interface DICOMImportJobSummary {

		/** Required */
		jobId: string;

		/** Required */
		jobName: string;

		/** Required */
		jobStatus: JobStatus;

		/** Required */
		datastoreId: string;
		dataAccessRoleArn?: string;
		endedAt?: Date;
		submittedAt?: Date;
		message?: string;
	}

	/** Summary of import job. */
	export interface DICOMImportJobSummaryFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		jobName: FormControl<string | null | undefined>,

		/** Required */
		jobStatus: FormControl<JobStatus | null | undefined>,

		/** Required */
		datastoreId: FormControl<string | null | undefined>,
		dataAccessRoleArn: FormControl<string | null | undefined>,
		endedAt: FormControl<Date | null | undefined>,
		submittedAt: FormControl<Date | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateDICOMImportJobSummaryFormGroup() {
		return new FormGroup<DICOMImportJobSummaryFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobStatus: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			datastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			endedAt: new FormControl<Date | null | undefined>(undefined),
			submittedAt: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDatastoresResponse {
		datastoreSummaries?: Array<DatastoreSummary>;
		nextToken?: string;
	}
	export interface ListDatastoresResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatastoresResponseFormGroup() {
		return new FormGroup<ListDatastoresResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of summaries of data stores. */
	export interface DatastoreSummary {

		/** Required */
		datastoreId: string;

		/** Required */
		datastoreName: string;

		/** Required */
		datastoreStatus: DatastoreStatus;
		datastoreArn?: string;
		createdAt?: Date;
		updatedAt?: Date;
	}

	/** List of summaries of data stores. */
	export interface DatastoreSummaryFormProperties {

		/** Required */
		datastoreId: FormControl<string | null | undefined>,

		/** Required */
		datastoreName: FormControl<string | null | undefined>,

		/** Required */
		datastoreStatus: FormControl<DatastoreStatus | null | undefined>,
		datastoreArn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDatastoreSummaryFormGroup() {
		return new FormGroup<DatastoreSummaryFormProperties>({
			datastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datastoreName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datastoreStatus: new FormControl<DatastoreStatus | null | undefined>(undefined, [Validators.required]),
			datastoreArn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListImageSetVersionsResponse {

		/** Required */
		imageSetPropertiesList: Array<ImageSetProperties>;
		nextToken?: string;
	}
	export interface ListImageSetVersionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImageSetVersionsResponseFormGroup() {
		return new FormGroup<ListImageSetVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The image set properties. */
	export interface ImageSetProperties {

		/** Required */
		imageSetId: string;

		/** Required */
		versionId: string;

		/** Required */
		imageSetState: ImageSetState;
		ImageSetWorkflowStatus?: ImageSetWorkflowStatus;
		createdAt?: Date;
		updatedAt?: Date;
		deletedAt?: Date;
		message?: string;
	}

	/** The image set properties. */
	export interface ImageSetPropertiesFormProperties {

		/** Required */
		imageSetId: FormControl<string | null | undefined>,

		/** Required */
		versionId: FormControl<string | null | undefined>,

		/** Required */
		imageSetState: FormControl<ImageSetState | null | undefined>,
		ImageSetWorkflowStatus: FormControl<ImageSetWorkflowStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		deletedAt: FormControl<Date | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateImageSetPropertiesFormGroup() {
		return new FormGroup<ImageSetPropertiesFormProperties>({
			imageSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			versionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageSetState: new FormControl<ImageSetState | null | undefined>(undefined, [Validators.required]),
			ImageSetWorkflowStatus: new FormControl<ImageSetWorkflowStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			deletedAt: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {

		/** Required */
		tags: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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

	export interface SearchImageSetsResponse {

		/** Required */
		imageSetsMetadataSummaries: Array<ImageSetsMetadataSummary>;
		nextToken?: string;
	}
	export interface SearchImageSetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchImageSetsResponseFormGroup() {
		return new FormGroup<SearchImageSetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the image set metadata. */
	export interface ImageSetsMetadataSummary {

		/** Required */
		imageSetId: string;
		version?: number | null;
		createdAt?: Date;
		updatedAt?: Date;
		DICOMTags?: DICOMTags;
	}

	/** Summary of the image set metadata. */
	export interface ImageSetsMetadataSummaryFormProperties {

		/** Required */
		imageSetId: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateImageSetsMetadataSummaryFormGroup() {
		return new FormGroup<ImageSetsMetadataSummaryFormProperties>({
			imageSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The DICOM attributes returned as a part of a response. Each image set has these properties as part of a search result. */
	export interface DICOMTags {
		DICOMPatientId?: string;
		DICOMPatientName?: string;
		DICOMPatientBirthDate?: string;
		DICOMPatientSex?: string;
		DICOMStudyInstanceUID?: string;
		DICOMStudyId?: string;
		DICOMStudyDescription?: string;
		DICOMNumberOfStudyRelatedSeries?: number | null;
		DICOMNumberOfStudyRelatedInstances?: number | null;
		DICOMAccessionNumber?: string;
		DICOMStudyDate?: string;
		DICOMStudyTime?: string;
	}

	/** The DICOM attributes returned as a part of a response. Each image set has these properties as part of a search result. */
	export interface DICOMTagsFormProperties {
		DICOMPatientId: FormControl<string | null | undefined>,
		DICOMPatientName: FormControl<string | null | undefined>,
		DICOMPatientBirthDate: FormControl<string | null | undefined>,
		DICOMPatientSex: FormControl<string | null | undefined>,
		DICOMStudyInstanceUID: FormControl<string | null | undefined>,
		DICOMStudyId: FormControl<string | null | undefined>,
		DICOMStudyDescription: FormControl<string | null | undefined>,
		DICOMNumberOfStudyRelatedSeries: FormControl<number | null | undefined>,
		DICOMNumberOfStudyRelatedInstances: FormControl<number | null | undefined>,
		DICOMAccessionNumber: FormControl<string | null | undefined>,
		DICOMStudyDate: FormControl<string | null | undefined>,
		DICOMStudyTime: FormControl<string | null | undefined>,
	}
	export function CreateDICOMTagsFormGroup() {
		return new FormGroup<DICOMTagsFormProperties>({
			DICOMPatientId: new FormControl<string | null | undefined>(undefined),
			DICOMPatientName: new FormControl<string | null | undefined>(undefined),
			DICOMPatientBirthDate: new FormControl<string | null | undefined>(undefined),
			DICOMPatientSex: new FormControl<string | null | undefined>(undefined),
			DICOMStudyInstanceUID: new FormControl<string | null | undefined>(undefined),
			DICOMStudyId: new FormControl<string | null | undefined>(undefined),
			DICOMStudyDescription: new FormControl<string | null | undefined>(undefined),
			DICOMNumberOfStudyRelatedSeries: new FormControl<number | null | undefined>(undefined),
			DICOMNumberOfStudyRelatedInstances: new FormControl<number | null | undefined>(undefined),
			DICOMAccessionNumber: new FormControl<string | null | undefined>(undefined),
			DICOMStudyDate: new FormControl<string | null | undefined>(undefined),
			DICOMStudyTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The search filter. */
	export interface SearchFilter {

		/** Required */
		values: Array<SearchByAttributeValue>;

		/** Required */
		operator: Operator;
	}

	/** The search filter. */
	export interface SearchFilterFormProperties {

		/** Required */
		operator: FormControl<Operator | null | undefined>,
	}
	export function CreateSearchFilterFormGroup() {
		return new FormGroup<SearchFilterFormProperties>({
			operator: new FormControl<Operator | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The search input attribute value. */
	export interface SearchByAttributeValue {
		DICOMPatientId?: string;
		DICOMAccessionNumber?: string;
		DICOMStudyId?: string;
		DICOMStudyInstanceUID?: string;
		createdAt?: Date;
		DICOMStudyDateAndTime?: DICOMStudyDateAndTime;
	}

	/** The search input attribute value. */
	export interface SearchByAttributeValueFormProperties {
		DICOMPatientId: FormControl<string | null | undefined>,
		DICOMAccessionNumber: FormControl<string | null | undefined>,
		DICOMStudyId: FormControl<string | null | undefined>,
		DICOMStudyInstanceUID: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateSearchByAttributeValueFormGroup() {
		return new FormGroup<SearchByAttributeValueFormProperties>({
			DICOMPatientId: new FormControl<string | null | undefined>(undefined),
			DICOMAccessionNumber: new FormControl<string | null | undefined>(undefined),
			DICOMStudyId: new FormControl<string | null | undefined>(undefined),
			DICOMStudyInstanceUID: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The aggregated structure to store DICOM study date and study time for search capabilities. */
	export interface DICOMStudyDateAndTime {

		/** Required */
		DICOMStudyDate: string;
		DICOMStudyTime?: string;
	}

	/** The aggregated structure to store DICOM study date and study time for search capabilities. */
	export interface DICOMStudyDateAndTimeFormProperties {

		/** Required */
		DICOMStudyDate: FormControl<string | null | undefined>,
		DICOMStudyTime: FormControl<string | null | undefined>,
	}
	export function CreateDICOMStudyDateAndTimeFormGroup() {
		return new FormGroup<DICOMStudyDateAndTimeFormProperties>({
			DICOMStudyDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DICOMStudyTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Operator { EQUAL = 0, BETWEEN = 1 }

	export interface StartDICOMImportJobResponse {

		/** Required */
		datastoreId: string;

		/** Required */
		jobId: string;

		/** Required */
		jobStatus: JobStatus;

		/** Required */
		submittedAt: Date;
	}
	export interface StartDICOMImportJobResponseFormProperties {

		/** Required */
		datastoreId: FormControl<string | null | undefined>,

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		jobStatus: FormControl<JobStatus | null | undefined>,

		/** Required */
		submittedAt: FormControl<Date | null | undefined>,
	}
	export function CreateStartDICOMImportJobResponseFormGroup() {
		return new FormGroup<StartDICOMImportJobResponseFormProperties>({
			datastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobStatus: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			submittedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateImageSetMetadataResponse {

		/** Required */
		datastoreId: string;

		/** Required */
		imageSetId: string;

		/** Required */
		latestVersionId: string;

		/** Required */
		imageSetState: ImageSetState;
		imageSetWorkflowStatus?: ImageSetWorkflowStatus;
		createdAt?: Date;
		updatedAt?: Date;
		message?: string;
	}
	export interface UpdateImageSetMetadataResponseFormProperties {

		/** Required */
		datastoreId: FormControl<string | null | undefined>,

		/** Required */
		imageSetId: FormControl<string | null | undefined>,

		/** Required */
		latestVersionId: FormControl<string | null | undefined>,

		/** Required */
		imageSetState: FormControl<ImageSetState | null | undefined>,
		imageSetWorkflowStatus: FormControl<ImageSetWorkflowStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateUpdateImageSetMetadataResponseFormGroup() {
		return new FormGroup<UpdateImageSetMetadataResponseFormProperties>({
			datastoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			latestVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageSetState: new FormControl<ImageSetState | null | undefined>(undefined, [Validators.required]),
			imageSetWorkflowStatus: new FormControl<ImageSetWorkflowStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The object containing <code>removableAttributes</code> and <code>updatableAttributes</code>. */
	export interface DICOMUpdates {
		removableAttributes?: string;
		updatableAttributes?: string;
	}

	/** The object containing <code>removableAttributes</code> and <code>updatableAttributes</code>. */
	export interface DICOMUpdatesFormProperties {
		removableAttributes: FormControl<string | null | undefined>,
		updatableAttributes: FormControl<string | null | undefined>,
	}
	export function CreateDICOMUpdatesFormGroup() {
		return new FormGroup<DICOMUpdatesFormProperties>({
			removableAttributes: new FormControl<string | null | undefined>(undefined),
			updatableAttributes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Copy image set information. */
	export interface CopyImageSetInformation {

		/** Required */
		sourceImageSet: CopySourceImageSetInformation;
		destinationImageSet?: CopyDestinationImageSet;
	}

	/** Copy image set information. */
	export interface CopyImageSetInformationFormProperties {
	}
	export function CreateCopyImageSetInformationFormGroup() {
		return new FormGroup<CopyImageSetInformationFormProperties>({
		});

	}

	export interface CopyImageSetRequest {

		/** Required */
		copyImageSetInformation: CopyImageSetInformation;
	}
	export interface CopyImageSetRequestFormProperties {
	}
	export function CreateCopyImageSetRequestFormGroup() {
		return new FormGroup<CopyImageSetRequestFormProperties>({
		});

	}

	export interface CreateDatastoreRequest {
		datastoreName?: string;

		/** Required */
		clientToken: string;
		tags?: TagMap;
		kmsKeyArn?: string;
	}
	export interface CreateDatastoreRequestFormProperties {
		datastoreName: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatastoreRequestFormGroup() {
		return new FormGroup<CreateDatastoreRequestFormProperties>({
			datastoreName: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDatastoreRequest {
	}
	export interface DeleteDatastoreRequestFormProperties {
	}
	export function CreateDeleteDatastoreRequestFormGroup() {
		return new FormGroup<DeleteDatastoreRequestFormProperties>({
		});

	}

	export interface DeleteImageSetRequest {
	}
	export interface DeleteImageSetRequestFormProperties {
	}
	export function CreateDeleteImageSetRequestFormGroup() {
		return new FormGroup<DeleteImageSetRequestFormProperties>({
		});

	}

	export interface GetDICOMImportJobRequest {
	}
	export interface GetDICOMImportJobRequestFormProperties {
	}
	export function CreateGetDICOMImportJobRequestFormGroup() {
		return new FormGroup<GetDICOMImportJobRequestFormProperties>({
		});

	}

	export interface GetDatastoreRequest {
	}
	export interface GetDatastoreRequestFormProperties {
	}
	export function CreateGetDatastoreRequestFormGroup() {
		return new FormGroup<GetDatastoreRequestFormProperties>({
		});

	}


	/** Information about the image frame (pixel data) identifier. */
	export interface ImageFrameInformation {

		/** Required */
		imageFrameId: string;
	}

	/** Information about the image frame (pixel data) identifier. */
	export interface ImageFrameInformationFormProperties {

		/** Required */
		imageFrameId: FormControl<string | null | undefined>,
	}
	export function CreateImageFrameInformationFormGroup() {
		return new FormGroup<ImageFrameInformationFormProperties>({
			imageFrameId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetImageFrameRequest {

		/** Required */
		imageFrameInformation: ImageFrameInformation;
	}
	export interface GetImageFrameRequestFormProperties {
	}
	export function CreateGetImageFrameRequestFormGroup() {
		return new FormGroup<GetImageFrameRequestFormProperties>({
		});

	}

	export interface GetImageSetMetadataRequest {
	}
	export interface GetImageSetMetadataRequestFormProperties {
	}
	export function CreateGetImageSetMetadataRequestFormGroup() {
		return new FormGroup<GetImageSetMetadataRequestFormProperties>({
		});

	}

	export interface GetImageSetRequest {
	}
	export interface GetImageSetRequestFormProperties {
	}
	export function CreateGetImageSetRequestFormGroup() {
		return new FormGroup<GetImageSetRequestFormProperties>({
		});

	}

	export interface ListDICOMImportJobsRequest {
	}
	export interface ListDICOMImportJobsRequestFormProperties {
	}
	export function CreateListDICOMImportJobsRequestFormGroup() {
		return new FormGroup<ListDICOMImportJobsRequestFormProperties>({
		});

	}

	export interface ListDatastoresRequest {
	}
	export interface ListDatastoresRequestFormProperties {
	}
	export function CreateListDatastoresRequestFormGroup() {
		return new FormGroup<ListDatastoresRequestFormProperties>({
		});

	}

	export interface ListImageSetVersionsRequest {
	}
	export interface ListImageSetVersionsRequestFormProperties {
	}
	export function CreateListImageSetVersionsRequestFormGroup() {
		return new FormGroup<ListImageSetVersionsRequestFormProperties>({
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


	/** Contains DICOMUpdates. */
	export interface MetadataUpdates {
		DICOMUpdates?: DICOMUpdates;
	}

	/** Contains DICOMUpdates. */
	export interface MetadataUpdatesFormProperties {
	}
	export function CreateMetadataUpdatesFormGroup() {
		return new FormGroup<MetadataUpdatesFormProperties>({
		});

	}


	/** The search criteria. */
	export interface SearchCriteria {
		filters?: Array<SearchFilter>;
	}

	/** The search criteria. */
	export interface SearchCriteriaFormProperties {
	}
	export function CreateSearchCriteriaFormGroup() {
		return new FormGroup<SearchCriteriaFormProperties>({
		});

	}

	export interface SearchImageSetsRequest {
		searchCriteria?: SearchCriteria;
	}
	export interface SearchImageSetsRequestFormProperties {
	}
	export function CreateSearchImageSetsRequestFormGroup() {
		return new FormGroup<SearchImageSetsRequestFormProperties>({
		});

	}

	export interface StartDICOMImportJobRequest {
		jobName?: string;

		/** Required */
		dataAccessRoleArn: string;

		/** Required */
		clientToken: string;

		/** Required */
		inputS3Uri: string;

		/** Required */
		outputS3Uri: string;
	}
	export interface StartDICOMImportJobRequestFormProperties {
		jobName: FormControl<string | null | undefined>,

		/** Required */
		dataAccessRoleArn: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		inputS3Uri: FormControl<string | null | undefined>,

		/** Required */
		outputS3Uri: FormControl<string | null | undefined>,
	}
	export function CreateStartDICOMImportJobRequestFormGroup() {
		return new FormGroup<StartDICOMImportJobRequestFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined),
			dataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inputS3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outputS3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
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

	export interface UpdateImageSetMetadataRequest {

		/** Required */
		updateImageSetMetadataUpdates: MetadataUpdates;
	}
	export interface UpdateImageSetMetadataRequestFormProperties {
	}
	export function CreateUpdateImageSetMetadataRequestFormGroup() {
		return new FormGroup<UpdateImageSetMetadataRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Copy an image set.
		 * Post datastore/{datastoreId}/imageSet/{sourceImageSetId}/copyImageSet
		 * @param {string} datastoreId The data store identifier.
		 * @param {string} sourceImageSetId The source image set identifier.
		 * @return {CopyImageSetResponse} Success
		 */
		CopyImageSet(datastoreId: string, sourceImageSetId: string, requestBody: CopyImageSetPostBody): Observable<CopyImageSetResponse> {
			return this.http.post<CopyImageSetResponse>(this.baseUri + 'datastore/' + (datastoreId == null ? '' : encodeURIComponent(datastoreId)) + '/imageSet/' + (sourceImageSetId == null ? '' : encodeURIComponent(sourceImageSetId)) + '/copyImageSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a data store.
		 * Post datastore
		 * @return {CreateDatastoreResponse} Success
		 */
		CreateDatastore(requestBody: CreateDatastorePostBody): Observable<CreateDatastoreResponse> {
			return this.http.post<CreateDatastoreResponse>(this.baseUri + 'datastore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List data stores created by this AWS account.
		 * Get datastore
		 * @param {DatastoreStatus} datastoreStatus The data store status.
		 * @param {string} nextToken The pagination token used to request the list of data stores on the next page.
		 * @param {number} maxResults Valid Range: Minimum value of 1. Maximum value of 50.
		 * @return {ListDatastoresResponse} Success
		 */
		ListDatastores(datastoreStatus: DatastoreStatus | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDatastoresResponse> {
			return this.http.get<ListDatastoresResponse>(this.baseUri + 'datastore?datastoreStatus=' + datastoreStatus + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Delete a data store.</p> <note> <p>Before a data store can be deleted, you must first delete all image sets within it.</p> </note>
		 * Delete datastore/{datastoreId}
		 * @param {string} datastoreId The data store identifier.
		 * @return {DeleteDatastoreResponse} Success
		 */
		DeleteDatastore(datastoreId: string): Observable<DeleteDatastoreResponse> {
			return this.http.delete<DeleteDatastoreResponse>(this.baseUri + 'datastore/' + (datastoreId == null ? '' : encodeURIComponent(datastoreId)), {});
		}

		/**
		 * Get data store properties.
		 * Get datastore/{datastoreId}
		 * @param {string} datastoreId The data store identifier.
		 * @return {GetDatastoreResponse} Success
		 */
		GetDatastore(datastoreId: string): Observable<GetDatastoreResponse> {
			return this.http.get<GetDatastoreResponse>(this.baseUri + 'datastore/' + (datastoreId == null ? '' : encodeURIComponent(datastoreId)), {});
		}

		/**
		 * Delete an image set.
		 * Post datastore/{datastoreId}/imageSet/{imageSetId}/deleteImageSet
		 * @param {string} datastoreId The data store identifier.
		 * @param {string} imageSetId The image set identifier.
		 * @return {DeleteImageSetResponse} Success
		 */
		DeleteImageSet(datastoreId: string, imageSetId: string): Observable<DeleteImageSetResponse> {
			return this.http.post<DeleteImageSetResponse>(this.baseUri + 'datastore/' + (datastoreId == null ? '' : encodeURIComponent(datastoreId)) + '/imageSet/' + (imageSetId == null ? '' : encodeURIComponent(imageSetId)) + '/deleteImageSet', null, {});
		}

		/**
		 * Get the import job properties to learn more about the job or job progress.
		 * Get getDICOMImportJob/datastore/{datastoreId}/job/{jobId}
		 * @param {string} datastoreId The data store identifier.
		 * @param {string} jobId The import job identifier.
		 * @return {GetDICOMImportJobResponse} Success
		 */
		GetDICOMImportJob(datastoreId: string, jobId: string): Observable<GetDICOMImportJobResponse> {
			return this.http.get<GetDICOMImportJobResponse>(this.baseUri + 'getDICOMImportJob/datastore/' + (datastoreId == null ? '' : encodeURIComponent(datastoreId)) + '/job/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Get an image frame (pixel data) for an image set.
		 * Post datastore/{datastoreId}/imageSet/{imageSetId}/getImageFrame
		 * @param {string} datastoreId The data store identifier.
		 * @param {string} imageSetId The image set identifier.
		 * @return {GetImageFrameResponse} Success
		 */
		GetImageFrame(datastoreId: string, imageSetId: string, requestBody: GetImageFramePostBody): Observable<GetImageFrameResponse> {
			return this.http.post<GetImageFrameResponse>(this.baseUri + 'datastore/' + (datastoreId == null ? '' : encodeURIComponent(datastoreId)) + '/imageSet/' + (imageSetId == null ? '' : encodeURIComponent(imageSetId)) + '/getImageFrame', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get image set properties.
		 * Post datastore/{datastoreId}/imageSet/{imageSetId}/getImageSet
		 * @param {string} datastoreId The data store identifier.
		 * @param {string} imageSetId The image set identifier.
		 * @param {string} version The image set version identifier.
		 * @return {GetImageSetResponse} Success
		 */
		GetImageSet(datastoreId: string, imageSetId: string, version: string | null | undefined): Observable<GetImageSetResponse> {
			return this.http.post<GetImageSetResponse>(this.baseUri + 'datastore/' + (datastoreId == null ? '' : encodeURIComponent(datastoreId)) + '/imageSet/' + (imageSetId == null ? '' : encodeURIComponent(imageSetId)) + '/getImageSet&version=' + (version == null ? '' : encodeURIComponent(version)), null, {});
		}

		/**
		 * Get metadata attributes for an image set.
		 * Post datastore/{datastoreId}/imageSet/{imageSetId}/getImageSetMetadata
		 * @param {string} datastoreId The data store identifier.
		 * @param {string} imageSetId The image set identifier.
		 * @param {string} version The image set version identifier.
		 * @return {GetImageSetMetadataResponse} Success
		 */
		GetImageSetMetadata(datastoreId: string, imageSetId: string, version: string | null | undefined): Observable<GetImageSetMetadataResponse> {
			return this.http.post<GetImageSetMetadataResponse>(this.baseUri + 'datastore/' + (datastoreId == null ? '' : encodeURIComponent(datastoreId)) + '/imageSet/' + (imageSetId == null ? '' : encodeURIComponent(imageSetId)) + '/getImageSetMetadata&version=' + (version == null ? '' : encodeURIComponent(version)), null, {});
		}

		/**
		 * List import jobs created by this AWS account for a specific data store.
		 * Get listDICOMImportJobs/datastore/{datastoreId}
		 * @param {string} datastoreId The data store identifier.
		 * @param {JobStatus} jobStatus The filters for listing import jobs based on status.
		 * @param {string} nextToken The pagination token used to request the list of import jobs on the next page.
		 * @param {number} maxResults The max results count. The upper bound is determined by load testing.
		 * @return {ListDICOMImportJobsResponse} Success
		 */
		ListDICOMImportJobs(datastoreId: string, jobStatus: JobStatus | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDICOMImportJobsResponse> {
			return this.http.get<ListDICOMImportJobsResponse>(this.baseUri + 'listDICOMImportJobs/datastore/' + (datastoreId == null ? '' : encodeURIComponent(datastoreId)) + '&jobStatus=' + jobStatus + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * List image set versions.
		 * Post datastore/{datastoreId}/imageSet/{imageSetId}/listImageSetVersions
		 * @param {string} datastoreId The data store identifier.
		 * @param {string} imageSetId The image set identifier.
		 * @param {string} nextToken The pagination token used to request the list of image set versions on the next page.
		 * @param {number} maxResults The max results count.
		 * @return {ListImageSetVersionsResponse} Success
		 */
		ListImageSetVersions(datastoreId: string, imageSetId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListImageSetVersionsResponse> {
			return this.http.post<ListImageSetVersionsResponse>(this.baseUri + 'datastore/' + (datastoreId == null ? '' : encodeURIComponent(datastoreId)) + '/imageSet/' + (imageSetId == null ? '' : encodeURIComponent(imageSetId)) + '/listImageSetVersions&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, null, {});
		}

		/**
		 * Lists all tags associated with a medical imaging resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the medical imaging resource to list tags for.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds a user-specifed key and value tag to a medical imaging resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the medical imaging resource that tags are being added to.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search image sets based on defined input attributes.
		 * Post datastore/{datastoreId}/searchImageSets
		 * @param {string} datastoreId The identifier of the data store where the image sets reside.
		 * @param {number} maxResults The maximum number of results that can be returned in a search.
		 * @param {string} nextToken The token used for pagination of results returned in the response. Use the token returned from the previous request to continue results where the previous request ended.
		 * @return {SearchImageSetsResponse} Success
		 */
		SearchImageSets(datastoreId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, requestBody: SearchImageSetsPostBody): Observable<SearchImageSetsResponse> {
			return this.http.post<SearchImageSetsResponse>(this.baseUri + 'datastore/' + (datastoreId == null ? '' : encodeURIComponent(datastoreId)) + '/searchImageSets&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Start importing bulk data into an <code>ACTIVE</code> data store. The import job imports DICOM P10 files found in the S3 prefix specified by the <code>inputS3Uri</code> parameter. The import job stores processing results in the file specified by the <code>outputS3Uri</code> parameter.
		 * Post startDICOMImportJob/datastore/{datastoreId}
		 * @param {string} datastoreId The data store identifier.
		 * @return {StartDICOMImportJobResponse} Success
		 */
		StartDICOMImportJob(datastoreId: string, requestBody: StartDICOMImportJobPostBody): Observable<StartDICOMImportJobResponse> {
			return this.http.post<StartDICOMImportJobResponse>(this.baseUri + 'startDICOMImportJob/datastore/' + (datastoreId == null ? '' : encodeURIComponent(datastoreId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a medical imaging resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the medical imaging resource that tags are being removed from.
		 * @param {Array<string>} tagKeys The keys for the tags to be removed from the medical imaging resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Update image set metadata attributes.
		 * Post datastore/{datastoreId}/imageSet/{imageSetId}/updateImageSetMetadata#latestVersion
		 * @param {string} datastoreId The data store identifier.
		 * @param {string} imageSetId The image set identifier.
		 * @param {string} latestVersion The latest image set version identifier.
		 * @return {UpdateImageSetMetadataResponse} Success
		 */
		UpdateImageSetMetadata(datastoreId: string, imageSetId: string, latestVersion: string, requestBody: UpdateImageSetMetadataPostBody): Observable<UpdateImageSetMetadataResponse> {
			return this.http.post<UpdateImageSetMetadataResponse>(this.baseUri + 'datastore/' + (datastoreId == null ? '' : encodeURIComponent(datastoreId)) + '/imageSet/' + (imageSetId == null ? '' : encodeURIComponent(imageSetId)) + '/updateImageSetMetadata#latestVersion&latestVersion=' + (latestVersion == null ? '' : encodeURIComponent(latestVersion)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CopyImageSetPostBody {

		/**
		 * Copy image set information.
		 * Required
		 */
		copyImageSetInformation: CopyImageSetPostBodyCopyImageSetInformation;
	}
	export interface CopyImageSetPostBodyFormProperties {
	}
	export function CreateCopyImageSetPostBodyFormGroup() {
		return new FormGroup<CopyImageSetPostBodyFormProperties>({
		});

	}

	export interface CopyImageSetPostBodyCopyImageSetInformation {
		sourceImageSet?: CopySourceImageSetInformation;
		destinationImageSet?: CopyDestinationImageSet;
	}
	export interface CopyImageSetPostBodyCopyImageSetInformationFormProperties {
	}
	export function CreateCopyImageSetPostBodyCopyImageSetInformationFormGroup() {
		return new FormGroup<CopyImageSetPostBodyCopyImageSetInformationFormProperties>({
		});

	}

	export interface CreateDatastorePostBody {

		/**
		 * The data store name.
		 * Max length: 256
		 * Min length: 1
		 */
		datastoreName?: string | null;

		/**
		 * A unique identifier for API idempotency.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: string;

		/** The tags provided when creating a data store. */
		tags?: {[id: string]: string };

		/**
		 * ARN referencing a KMS key or KMS key alias.
		 * Max length: 512
		 * Min length: 1
		 */
		kmsKeyArn?: string | null;
	}
	export interface CreateDatastorePostBodyFormProperties {

		/**
		 * The data store name.
		 * Max length: 256
		 * Min length: 1
		 */
		datastoreName: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for API idempotency.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** The tags provided when creating a data store. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * ARN referencing a KMS key or KMS key alias.
		 * Max length: 512
		 * Min length: 1
		 */
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatastorePostBodyFormGroup() {
		return new FormGroup<CreateDatastorePostBodyFormProperties>({
			datastoreName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[A-Za-z0-9._/#-]+')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[A-Za-z0-9._-]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('arn:aws[a-zA-Z-]{0,16}:kms:[a-z]{2}(-[a-z]{1,16}){1,3}-\d{1}:\d{12}:((key/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12})|(alias/[a-zA-Z0-9:/_-]{1,256}))')]),
		});

	}

	export interface GetImageFramePostBody {

		/**
		 * Information about the image frame (pixel data) identifier.
		 * Required
		 */
		imageFrameInformation: GetImageFramePostBodyImageFrameInformation;
	}
	export interface GetImageFramePostBodyFormProperties {
	}
	export function CreateGetImageFramePostBodyFormGroup() {
		return new FormGroup<GetImageFramePostBodyFormProperties>({
		});

	}

	export interface GetImageFramePostBodyImageFrameInformation {
		imageFrameId?: string;
	}
	export interface GetImageFramePostBodyImageFrameInformationFormProperties {
		imageFrameId: FormControl<string | null | undefined>,
	}
	export function CreateGetImageFramePostBodyImageFrameInformationFormGroup() {
		return new FormGroup<GetImageFramePostBodyImageFrameInformationFormProperties>({
			imageFrameId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The user-specified key and value tag pairs added to a medical imaging resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The user-specified key and value tag pairs added to a medical imaging resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchImageSetsPostBody {

		/** The search criteria. */
		searchCriteria?: SearchImageSetsPostBodySearchCriteria;
	}
	export interface SearchImageSetsPostBodyFormProperties {
	}
	export function CreateSearchImageSetsPostBodyFormGroup() {
		return new FormGroup<SearchImageSetsPostBodyFormProperties>({
		});

	}

	export interface SearchImageSetsPostBodySearchCriteria {
		filters?: Array<SearchFilter>;
	}
	export interface SearchImageSetsPostBodySearchCriteriaFormProperties {
	}
	export function CreateSearchImageSetsPostBodySearchCriteriaFormGroup() {
		return new FormGroup<SearchImageSetsPostBodySearchCriteriaFormProperties>({
		});

	}

	export interface StartDICOMImportJobPostBody {

		/**
		 * The import job name.
		 * Max length: 64
		 * Min length: 1
		 */
		jobName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the IAM role that grants permission to access medical imaging resources.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		dataAccessRoleArn: string;

		/**
		 * A unique identifier for API idempotency.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: string;

		/**
		 * The input prefix path for the S3 bucket that contains the DICOM files to be imported.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		inputS3Uri: string;

		/**
		 * The output prefix of the S3 bucket to upload the results of the DICOM import job.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		outputS3Uri: string;
	}
	export interface StartDICOMImportJobPostBodyFormProperties {

		/**
		 * The import job name.
		 * Max length: 64
		 * Min length: 1
		 */
		jobName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the IAM role that grants permission to access medical imaging resources.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		dataAccessRoleArn: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for API idempotency.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The input prefix path for the S3 bucket that contains the DICOM files to be imported.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		inputS3Uri: FormControl<string | null | undefined>,

		/**
		 * The output prefix of the S3 bucket to upload the results of the DICOM import job.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		outputS3Uri: FormControl<string | null | undefined>,
	}
	export function CreateStartDICOMImportJobPostBodyFormGroup() {
		return new FormGroup<StartDICOMImportJobPostBodyFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[A-Za-z0-9._/#-]+')]),
			dataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:aws(-[^:]+)?:iam::[0-9]{12}:role/.+')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[A-Za-z0-9._-]+')]),
			inputS3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?')]),
			outputS3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?')]),
		});

	}

	export interface UpdateImageSetMetadataPostBody {

		/**
		 * Contains DICOMUpdates.
		 * Required
		 */
		updateImageSetMetadataUpdates: UpdateImageSetMetadataPostBodyUpdateImageSetMetadataUpdates;
	}
	export interface UpdateImageSetMetadataPostBodyFormProperties {
	}
	export function CreateUpdateImageSetMetadataPostBodyFormGroup() {
		return new FormGroup<UpdateImageSetMetadataPostBodyFormProperties>({
		});

	}

	export interface UpdateImageSetMetadataPostBodyUpdateImageSetMetadataUpdates {
		DICOMUpdates?: DICOMUpdates;
	}
	export interface UpdateImageSetMetadataPostBodyUpdateImageSetMetadataUpdatesFormProperties {
	}
	export function CreateUpdateImageSetMetadataPostBodyUpdateImageSetMetadataUpdatesFormGroup() {
		return new FormGroup<UpdateImageSetMetadataPostBodyUpdateImageSetMetadataUpdatesFormProperties>({
		});

	}

}

