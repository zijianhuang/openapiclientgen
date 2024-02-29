import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddProfilePermissionResponse {
		revisionId?: string;
	}
	export interface AddProfilePermissionResponseFormProperties {
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateAddProfilePermissionResponseFormGroup() {
		return new FormGroup<AddProfilePermissionResponseFormProperties>({
			revisionId: new FormControl<string | null | undefined>(undefined),
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface ServiceLimitExceededException {
	}
	export interface ServiceLimitExceededExceptionFormProperties {
	}
	export function CreateServiceLimitExceededExceptionFormGroup() {
		return new FormGroup<ServiceLimitExceededExceptionFormProperties>({
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

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface InternalServiceErrorException {
	}
	export interface InternalServiceErrorExceptionFormProperties {
	}
	export function CreateInternalServiceErrorExceptionFormGroup() {
		return new FormGroup<InternalServiceErrorExceptionFormProperties>({
		});

	}

	export interface DescribeSigningJobResponse {
		jobId?: string;
		source?: Source;
		signingMaterial?: SigningMaterial;
		platformId?: string;
		platformDisplayName?: string;
		profileName?: string;
		profileVersion?: string;
		overrides?: SigningPlatformOverrides;
		signingParameters?: SigningParameters;
		createdAt?: Date;
		completedAt?: Date;
		signatureExpiresAt?: Date;
		requestedBy?: string;
		status?: SigningStatus;
		statusReason?: string;
		revocationRecord?: SigningJobRevocationRecord;
		signedObject?: SignedObject;
		jobOwner?: string;
		jobInvoker?: string;
	}
	export interface DescribeSigningJobResponseFormProperties {
		jobId: FormControl<string | null | undefined>,
		platformId: FormControl<string | null | undefined>,
		platformDisplayName: FormControl<string | null | undefined>,
		profileName: FormControl<string | null | undefined>,
		profileVersion: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		completedAt: FormControl<Date | null | undefined>,
		signatureExpiresAt: FormControl<Date | null | undefined>,
		requestedBy: FormControl<string | null | undefined>,
		status: FormControl<SigningStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		jobOwner: FormControl<string | null | undefined>,
		jobInvoker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSigningJobResponseFormGroup() {
		return new FormGroup<DescribeSigningJobResponseFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			platformId: new FormControl<string | null | undefined>(undefined),
			platformDisplayName: new FormControl<string | null | undefined>(undefined),
			profileName: new FormControl<string | null | undefined>(undefined),
			profileVersion: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			completedAt: new FormControl<Date | null | undefined>(undefined),
			signatureExpiresAt: new FormControl<Date | null | undefined>(undefined),
			requestedBy: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<SigningStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			jobOwner: new FormControl<string | null | undefined>(undefined),
			jobInvoker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code. */
	export interface Source {
		s3?: S3Source;
	}

	/** An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code. */
	export interface SourceFormProperties {
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
		});

	}


	/** Information about the S3 bucket where you saved your unsigned code. */
	export interface S3Source {

		/** Required */
		bucketName: string;

		/** Required */
		key: string;

		/** Required */
		version: string;
	}

	/** Information about the S3 bucket where you saved your unsigned code. */
	export interface S3SourceFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateS3SourceFormGroup() {
		return new FormGroup<S3SourceFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The ACM certificate that is used to sign your code. */
	export interface SigningMaterial {

		/** Required */
		certificateArn: string;
	}

	/** The ACM certificate that is used to sign your code. */
	export interface SigningMaterialFormProperties {

		/** Required */
		certificateArn: FormControl<string | null | undefined>,
	}
	export function CreateSigningMaterialFormGroup() {
		return new FormGroup<SigningMaterialFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Any overrides that are applied to the signing configuration of a code signing platform. */
	export interface SigningPlatformOverrides {
		signingConfiguration?: SigningConfigurationOverrides;
		signingImageFormat?: ImageFormat;
	}

	/** Any overrides that are applied to the signing configuration of a code signing platform. */
	export interface SigningPlatformOverridesFormProperties {
		signingImageFormat: FormControl<ImageFormat | null | undefined>,
	}
	export function CreateSigningPlatformOverridesFormGroup() {
		return new FormGroup<SigningPlatformOverridesFormProperties>({
			signingImageFormat: new FormControl<ImageFormat | null | undefined>(undefined),
		});

	}


	/** A signing configuration that overrides the default encryption or hash algorithm of a signing job. */
	export interface SigningConfigurationOverrides {
		encryptionAlgorithm?: EncryptionAlgorithm;
		hashAlgorithm?: HashAlgorithm;
	}

	/** A signing configuration that overrides the default encryption or hash algorithm of a signing job. */
	export interface SigningConfigurationOverridesFormProperties {
		encryptionAlgorithm: FormControl<EncryptionAlgorithm | null | undefined>,
		hashAlgorithm: FormControl<HashAlgorithm | null | undefined>,
	}
	export function CreateSigningConfigurationOverridesFormGroup() {
		return new FormGroup<SigningConfigurationOverridesFormProperties>({
			encryptionAlgorithm: new FormControl<EncryptionAlgorithm | null | undefined>(undefined),
			hashAlgorithm: new FormControl<HashAlgorithm | null | undefined>(undefined),
		});

	}

	export enum EncryptionAlgorithm { RSA = 'RSA', ECDSA = 'ECDSA' }

	export enum HashAlgorithm { SHA1 = 'SHA1', SHA256 = 'SHA256' }

	export enum ImageFormat { JSON = 'JSON', JSONEmbedded = 'JSONEmbedded', JSONDetached = 'JSONDetached' }

	export interface SigningParameters {
	}
	export interface SigningParametersFormProperties {
	}
	export function CreateSigningParametersFormGroup() {
		return new FormGroup<SigningParametersFormProperties>({
		});

	}

	export enum SigningStatus { InProgress = 'InProgress', Failed = 'Failed', Succeeded = 'Succeeded' }


	/** Revocation information for a signing job. */
	export interface SigningJobRevocationRecord {
		reason?: string;
		revokedAt?: Date;
		revokedBy?: string;
	}

	/** Revocation information for a signing job. */
	export interface SigningJobRevocationRecordFormProperties {
		reason: FormControl<string | null | undefined>,
		revokedAt: FormControl<Date | null | undefined>,
		revokedBy: FormControl<string | null | undefined>,
	}
	export function CreateSigningJobRevocationRecordFormGroup() {
		return new FormGroup<SigningJobRevocationRecordFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			revokedAt: new FormControl<Date | null | undefined>(undefined),
			revokedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Points to an <code>S3SignedObject</code> object that contains information about your signed code image. */
	export interface SignedObject {
		s3?: S3SignedObject;
	}

	/** Points to an <code>S3SignedObject</code> object that contains information about your signed code image. */
	export interface SignedObjectFormProperties {
	}
	export function CreateSignedObjectFormGroup() {
		return new FormGroup<SignedObjectFormProperties>({
		});

	}


	/** The S3 bucket name and key where code signing saved your signed code image. */
	export interface S3SignedObject {
		bucketName?: string;
		key?: string;
	}

	/** The S3 bucket name and key where code signing saved your signed code image. */
	export interface S3SignedObjectFormProperties {
		bucketName: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
	}
	export function CreateS3SignedObjectFormGroup() {
		return new FormGroup<S3SignedObjectFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRevocationStatusResponse {
		revokedEntities?: Array<string>;
	}
	export interface GetRevocationStatusResponseFormProperties {
	}
	export function CreateGetRevocationStatusResponseFormGroup() {
		return new FormGroup<GetRevocationStatusResponseFormProperties>({
		});

	}

	export interface GetSigningPlatformResponse {
		platformId?: string;
		displayName?: string;
		partner?: string;
		target?: string;
		category?: Category;
		signingConfiguration?: SigningConfiguration;
		signingImageFormat?: SigningImageFormat;
		maxSizeInMB?: number | null;
		revocationSupported?: boolean | null;
	}
	export interface GetSigningPlatformResponseFormProperties {
		platformId: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		partner: FormControl<string | null | undefined>,
		target: FormControl<string | null | undefined>,
		category: FormControl<Category | null | undefined>,
		maxSizeInMB: FormControl<number | null | undefined>,
		revocationSupported: FormControl<boolean | null | undefined>,
	}
	export function CreateGetSigningPlatformResponseFormGroup() {
		return new FormGroup<GetSigningPlatformResponseFormProperties>({
			platformId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			partner: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<Category | null | undefined>(undefined),
			maxSizeInMB: new FormControl<number | null | undefined>(undefined),
			revocationSupported: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum Category { AWSIoT = 'AWSIoT' }


	/** The configuration of a code signing operation. */
	export interface SigningConfiguration {

		/** Required */
		encryptionAlgorithmOptions: EncryptionAlgorithmOptions;

		/** Required */
		hashAlgorithmOptions: HashAlgorithmOptions;
	}

	/** The configuration of a code signing operation. */
	export interface SigningConfigurationFormProperties {
	}
	export function CreateSigningConfigurationFormGroup() {
		return new FormGroup<SigningConfigurationFormProperties>({
		});

	}


	/** The encryption algorithm options that are available to a code signing job. */
	export interface EncryptionAlgorithmOptions {

		/** Required */
		allowedValues: Array<EncryptionAlgorithm>;

		/** Required */
		defaultValue: EncryptionAlgorithm;
	}

	/** The encryption algorithm options that are available to a code signing job. */
	export interface EncryptionAlgorithmOptionsFormProperties {

		/** Required */
		defaultValue: FormControl<EncryptionAlgorithm | null | undefined>,
	}
	export function CreateEncryptionAlgorithmOptionsFormGroup() {
		return new FormGroup<EncryptionAlgorithmOptionsFormProperties>({
			defaultValue: new FormControl<EncryptionAlgorithm | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The hash algorithms that are available to a code signing job. */
	export interface HashAlgorithmOptions {

		/** Required */
		allowedValues: Array<HashAlgorithm>;

		/** Required */
		defaultValue: HashAlgorithm;
	}

	/** The hash algorithms that are available to a code signing job. */
	export interface HashAlgorithmOptionsFormProperties {

		/** Required */
		defaultValue: FormControl<HashAlgorithm | null | undefined>,
	}
	export function CreateHashAlgorithmOptionsFormGroup() {
		return new FormGroup<HashAlgorithmOptionsFormProperties>({
			defaultValue: new FormControl<HashAlgorithm | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The image format of a code signing platform or profile. */
	export interface SigningImageFormat {

		/** Required */
		supportedFormats: Array<ImageFormat>;

		/** Required */
		defaultFormat: ImageFormat;
	}

	/** The image format of a code signing platform or profile. */
	export interface SigningImageFormatFormProperties {

		/** Required */
		defaultFormat: FormControl<ImageFormat | null | undefined>,
	}
	export function CreateSigningImageFormatFormGroup() {
		return new FormGroup<SigningImageFormatFormProperties>({
			defaultFormat: new FormControl<ImageFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSigningProfileResponse {
		profileName?: string;
		profileVersion?: string;
		profileVersionArn?: string;

		/** Revocation information for a signing profile. */
		revocationRecord?: SigningProfileRevocationRecord;
		signingMaterial?: SigningMaterial;
		platformId?: string;
		platformDisplayName?: string;

		/** The validity period for a signing job. */
		signatureValidityPeriod?: SignatureValidityPeriod;
		overrides?: SigningPlatformOverrides;
		signingParameters?: SigningParameters;
		status?: SigningProfileStatus;
		statusReason?: string;
		arn?: string;
		tags?: TagMap;
	}
	export interface GetSigningProfileResponseFormProperties {
		profileName: FormControl<string | null | undefined>,
		profileVersion: FormControl<string | null | undefined>,
		profileVersionArn: FormControl<string | null | undefined>,
		platformId: FormControl<string | null | undefined>,
		platformDisplayName: FormControl<string | null | undefined>,
		status: FormControl<SigningProfileStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetSigningProfileResponseFormGroup() {
		return new FormGroup<GetSigningProfileResponseFormProperties>({
			profileName: new FormControl<string | null | undefined>(undefined),
			profileVersion: new FormControl<string | null | undefined>(undefined),
			profileVersionArn: new FormControl<string | null | undefined>(undefined),
			platformId: new FormControl<string | null | undefined>(undefined),
			platformDisplayName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<SigningProfileStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Revocation information for a signing profile. */
	export interface SigningProfileRevocationRecord {
		revocationEffectiveFrom?: Date;
		revokedAt?: Date;
		revokedBy?: string;
	}

	/** Revocation information for a signing profile. */
	export interface SigningProfileRevocationRecordFormProperties {
		revocationEffectiveFrom: FormControl<Date | null | undefined>,
		revokedAt: FormControl<Date | null | undefined>,
		revokedBy: FormControl<string | null | undefined>,
	}
	export function CreateSigningProfileRevocationRecordFormGroup() {
		return new FormGroup<SigningProfileRevocationRecordFormProperties>({
			revocationEffectiveFrom: new FormControl<Date | null | undefined>(undefined),
			revokedAt: new FormControl<Date | null | undefined>(undefined),
			revokedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The validity period for a signing job. */
	export interface SignatureValidityPeriod {
		value?: number | null;
		type?: ValidityType;
	}

	/** The validity period for a signing job. */
	export interface SignatureValidityPeriodFormProperties {
		value: FormControl<number | null | undefined>,
		type: FormControl<ValidityType | null | undefined>,
	}
	export function CreateSignatureValidityPeriodFormGroup() {
		return new FormGroup<SignatureValidityPeriodFormProperties>({
			value: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<ValidityType | null | undefined>(undefined),
		});

	}

	export enum ValidityType { DAYS = 'DAYS', MONTHS = 'MONTHS', YEARS = 'YEARS' }

	export enum SigningProfileStatus { Active = 'Active', Canceled = 'Canceled', Revoked = 'Revoked' }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface ListProfilePermissionsResponse {
		revisionId?: string;
		policySizeBytes?: number | null;
		permissions?: Array<Permission>;
		nextToken?: string;
	}
	export interface ListProfilePermissionsResponseFormProperties {
		revisionId: FormControl<string | null | undefined>,
		policySizeBytes: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProfilePermissionsResponseFormGroup() {
		return new FormGroup<ListProfilePermissionsResponseFormProperties>({
			revisionId: new FormControl<string | null | undefined>(undefined),
			policySizeBytes: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A cross-account permission for a signing profile. */
	export interface Permission {
		action?: string;
		principal?: string;
		statementId?: string;
		profileVersion?: string;
	}

	/** A cross-account permission for a signing profile. */
	export interface PermissionFormProperties {
		action: FormControl<string | null | undefined>,
		principal: FormControl<string | null | undefined>,
		statementId: FormControl<string | null | undefined>,
		profileVersion: FormControl<string | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			principal: new FormControl<string | null | undefined>(undefined),
			statementId: new FormControl<string | null | undefined>(undefined),
			profileVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSigningJobsResponse {
		jobs?: Array<SigningJob>;
		nextToken?: string;
	}
	export interface ListSigningJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSigningJobsResponseFormGroup() {
		return new FormGroup<ListSigningJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a signing job. */
	export interface SigningJob {
		jobId?: string;
		source?: Source;
		signedObject?: SignedObject;
		signingMaterial?: SigningMaterial;
		createdAt?: Date;
		status?: SigningStatus;
		isRevoked?: boolean | null;
		profileName?: string;
		profileVersion?: string;
		platformId?: string;
		platformDisplayName?: string;
		signatureExpiresAt?: Date;
		jobOwner?: string;
		jobInvoker?: string;
	}

	/** Contains information about a signing job. */
	export interface SigningJobFormProperties {
		jobId: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		status: FormControl<SigningStatus | null | undefined>,
		isRevoked: FormControl<boolean | null | undefined>,
		profileName: FormControl<string | null | undefined>,
		profileVersion: FormControl<string | null | undefined>,
		platformId: FormControl<string | null | undefined>,
		platformDisplayName: FormControl<string | null | undefined>,
		signatureExpiresAt: FormControl<Date | null | undefined>,
		jobOwner: FormControl<string | null | undefined>,
		jobInvoker: FormControl<string | null | undefined>,
	}
	export function CreateSigningJobFormGroup() {
		return new FormGroup<SigningJobFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<SigningStatus | null | undefined>(undefined),
			isRevoked: new FormControl<boolean | null | undefined>(undefined),
			profileName: new FormControl<string | null | undefined>(undefined),
			profileVersion: new FormControl<string | null | undefined>(undefined),
			platformId: new FormControl<string | null | undefined>(undefined),
			platformDisplayName: new FormControl<string | null | undefined>(undefined),
			signatureExpiresAt: new FormControl<Date | null | undefined>(undefined),
			jobOwner: new FormControl<string | null | undefined>(undefined),
			jobInvoker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSigningPlatformsResponse {
		platforms?: Array<SigningPlatform>;
		nextToken?: string;
	}
	export interface ListSigningPlatformsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSigningPlatformsResponseFormGroup() {
		return new FormGroup<ListSigningPlatformsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the signing configurations and parameters that are used to perform a code signing job. */
	export interface SigningPlatform {
		platformId?: string;
		displayName?: string;
		partner?: string;
		target?: string;
		category?: Category;
		signingConfiguration?: SigningConfiguration;

		/** The image format of a code signing platform or profile. */
		signingImageFormat?: SigningImageFormat;
		maxSizeInMB?: number | null;
		revocationSupported?: boolean | null;
	}

	/** Contains information about the signing configurations and parameters that are used to perform a code signing job. */
	export interface SigningPlatformFormProperties {
		platformId: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		partner: FormControl<string | null | undefined>,
		target: FormControl<string | null | undefined>,
		category: FormControl<Category | null | undefined>,
		maxSizeInMB: FormControl<number | null | undefined>,
		revocationSupported: FormControl<boolean | null | undefined>,
	}
	export function CreateSigningPlatformFormGroup() {
		return new FormGroup<SigningPlatformFormProperties>({
			platformId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			partner: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<Category | null | undefined>(undefined),
			maxSizeInMB: new FormControl<number | null | undefined>(undefined),
			revocationSupported: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListSigningProfilesResponse {
		profiles?: Array<SigningProfile>;
		nextToken?: string;
	}
	export interface ListSigningProfilesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSigningProfilesResponseFormGroup() {
		return new FormGroup<ListSigningProfilesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the ACM certificates and code signing configuration parameters that can be used by a given code signing user. */
	export interface SigningProfile {
		profileName?: string;
		profileVersion?: string;
		profileVersionArn?: string;
		signingMaterial?: SigningMaterial;
		signatureValidityPeriod?: SignatureValidityPeriod;
		platformId?: string;
		platformDisplayName?: string;
		signingParameters?: SigningParameters;
		status?: SigningProfileStatus;
		arn?: string;
		tags?: TagMap;
	}

	/** Contains information about the ACM certificates and code signing configuration parameters that can be used by a given code signing user. */
	export interface SigningProfileFormProperties {
		profileName: FormControl<string | null | undefined>,
		profileVersion: FormControl<string | null | undefined>,
		profileVersionArn: FormControl<string | null | undefined>,
		platformId: FormControl<string | null | undefined>,
		platformDisplayName: FormControl<string | null | undefined>,
		status: FormControl<SigningProfileStatus | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateSigningProfileFormGroup() {
		return new FormGroup<SigningProfileFormProperties>({
			profileName: new FormControl<string | null | undefined>(undefined),
			profileVersion: new FormControl<string | null | undefined>(undefined),
			profileVersionArn: new FormControl<string | null | undefined>(undefined),
			platformId: new FormControl<string | null | undefined>(undefined),
			platformDisplayName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<SigningProfileStatus | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface PutSigningProfileResponse {
		arn?: string;
		profileVersion?: string;
		profileVersionArn?: string;
	}
	export interface PutSigningProfileResponseFormProperties {
		arn: FormControl<string | null | undefined>,
		profileVersion: FormControl<string | null | undefined>,
		profileVersionArn: FormControl<string | null | undefined>,
	}
	export function CreatePutSigningProfileResponseFormGroup() {
		return new FormGroup<PutSigningProfileResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			profileVersion: new FormControl<string | null | undefined>(undefined),
			profileVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveProfilePermissionResponse {
		revisionId?: string;
	}
	export interface RemoveProfilePermissionResponseFormProperties {
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveProfilePermissionResponseFormGroup() {
		return new FormGroup<RemoveProfilePermissionResponseFormProperties>({
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SignPayloadResponse {
		jobId?: string;
		jobOwner?: string;
		metadata?: Metadata;
		signature?: string;
	}
	export interface SignPayloadResponseFormProperties {
		jobId: FormControl<string | null | undefined>,
		jobOwner: FormControl<string | null | undefined>,
		signature: FormControl<string | null | undefined>,
	}
	export function CreateSignPayloadResponseFormGroup() {
		return new FormGroup<SignPayloadResponseFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			jobOwner: new FormControl<string | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Metadata {
	}
	export interface MetadataFormProperties {
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
		});

	}

	export interface StartSigningJobResponse {
		jobId?: string;
		jobOwner?: string;
	}
	export interface StartSigningJobResponseFormProperties {
		jobId: FormControl<string | null | undefined>,
		jobOwner: FormControl<string | null | undefined>,
	}
	export function CreateStartSigningJobResponseFormGroup() {
		return new FormGroup<StartSigningJobResponseFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			jobOwner: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The name and prefix of the S3 bucket where code signing saves your signed objects. */
	export interface S3Destination {
		bucketName?: string;
		prefix?: string;
	}

	/** The name and prefix of the S3 bucket where code signing saves your signed objects. */
	export interface S3DestinationFormProperties {
		bucketName: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3DestinationFormGroup() {
		return new FormGroup<S3DestinationFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
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

	export interface AddProfilePermissionRequest {
		profileVersion?: string;

		/** Required */
		action: string;

		/** Required */
		principal: string;
		revisionId?: string;

		/** Required */
		statementId: string;
	}
	export interface AddProfilePermissionRequestFormProperties {
		profileVersion: FormControl<string | null | undefined>,

		/** Required */
		action: FormControl<string | null | undefined>,

		/** Required */
		principal: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,

		/** Required */
		statementId: FormControl<string | null | undefined>,
	}
	export function CreateAddProfilePermissionRequestFormGroup() {
		return new FormGroup<AddProfilePermissionRequestFormProperties>({
			profileVersion: new FormControl<string | null | undefined>(undefined),
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined),
			statementId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelSigningProfileRequest {
	}
	export interface CancelSigningProfileRequestFormProperties {
	}
	export function CreateCancelSigningProfileRequestFormGroup() {
		return new FormGroup<CancelSigningProfileRequestFormProperties>({
		});

	}

	export interface DescribeSigningJobRequest {
	}
	export interface DescribeSigningJobRequestFormProperties {
	}
	export function CreateDescribeSigningJobRequestFormGroup() {
		return new FormGroup<DescribeSigningJobRequestFormProperties>({
		});

	}


	/** Points to an <code>S3Destination</code> object that contains information about your S3 bucket. */
	export interface Destination {
		s3?: S3Destination;
	}

	/** Points to an <code>S3Destination</code> object that contains information about your S3 bucket. */
	export interface DestinationFormProperties {
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
		});

	}

	export interface GetRevocationStatusRequest {
	}
	export interface GetRevocationStatusRequestFormProperties {
	}
	export function CreateGetRevocationStatusRequestFormGroup() {
		return new FormGroup<GetRevocationStatusRequestFormProperties>({
		});

	}

	export interface GetSigningPlatformRequest {
	}
	export interface GetSigningPlatformRequestFormProperties {
	}
	export function CreateGetSigningPlatformRequestFormGroup() {
		return new FormGroup<GetSigningPlatformRequestFormProperties>({
		});

	}

	export interface GetSigningProfileRequest {
	}
	export interface GetSigningProfileRequestFormProperties {
	}
	export function CreateGetSigningProfileRequestFormGroup() {
		return new FormGroup<GetSigningProfileRequestFormProperties>({
		});

	}

	export interface ListProfilePermissionsRequest {
	}
	export interface ListProfilePermissionsRequestFormProperties {
	}
	export function CreateListProfilePermissionsRequestFormGroup() {
		return new FormGroup<ListProfilePermissionsRequestFormProperties>({
		});

	}

	export interface ListSigningJobsRequest {
	}
	export interface ListSigningJobsRequestFormProperties {
	}
	export function CreateListSigningJobsRequestFormGroup() {
		return new FormGroup<ListSigningJobsRequestFormProperties>({
		});

	}

	export interface ListSigningPlatformsRequest {
	}
	export interface ListSigningPlatformsRequestFormProperties {
	}
	export function CreateListSigningPlatformsRequestFormGroup() {
		return new FormGroup<ListSigningPlatformsRequestFormProperties>({
		});

	}

	export interface ListSigningProfilesRequest {
	}
	export interface ListSigningProfilesRequestFormProperties {
	}
	export function CreateListSigningProfilesRequestFormGroup() {
		return new FormGroup<ListSigningProfilesRequestFormProperties>({
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

	export interface PutSigningProfileRequest {
		signingMaterial?: SigningMaterial;
		signatureValidityPeriod?: SignatureValidityPeriod;

		/** Required */
		platformId: string;
		overrides?: SigningPlatformOverrides;
		signingParameters?: SigningParameters;
		tags?: TagMap;
	}
	export interface PutSigningProfileRequestFormProperties {

		/** Required */
		platformId: FormControl<string | null | undefined>,
	}
	export function CreatePutSigningProfileRequestFormGroup() {
		return new FormGroup<PutSigningProfileRequestFormProperties>({
			platformId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveProfilePermissionRequest {
	}
	export interface RemoveProfilePermissionRequestFormProperties {
	}
	export function CreateRemoveProfilePermissionRequestFormGroup() {
		return new FormGroup<RemoveProfilePermissionRequestFormProperties>({
		});

	}

	export interface RevokeSignatureRequest {
		jobOwner?: string;

		/** Required */
		reason: string;
	}
	export interface RevokeSignatureRequestFormProperties {
		jobOwner: FormControl<string | null | undefined>,

		/** Required */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateRevokeSignatureRequestFormGroup() {
		return new FormGroup<RevokeSignatureRequestFormProperties>({
			jobOwner: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RevokeSigningProfileRequest {

		/** Required */
		profileVersion: string;

		/** Required */
		reason: string;

		/** Required */
		effectiveTime: Date;
	}
	export interface RevokeSigningProfileRequestFormProperties {

		/** Required */
		profileVersion: FormControl<string | null | undefined>,

		/** Required */
		reason: FormControl<string | null | undefined>,

		/** Required */
		effectiveTime: FormControl<Date | null | undefined>,
	}
	export function CreateRevokeSigningProfileRequestFormGroup() {
		return new FormGroup<RevokeSigningProfileRequestFormProperties>({
			profileVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			effectiveTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SignPayloadRequest {

		/** Required */
		profileName: string;
		profileOwner?: string;

		/** Required */
		payload: string;

		/** Required */
		payloadFormat: string;
	}
	export interface SignPayloadRequestFormProperties {

		/** Required */
		profileName: FormControl<string | null | undefined>,
		profileOwner: FormControl<string | null | undefined>,

		/** Required */
		payload: FormControl<string | null | undefined>,

		/** Required */
		payloadFormat: FormControl<string | null | undefined>,
	}
	export function CreateSignPayloadRequestFormGroup() {
		return new FormGroup<SignPayloadRequestFormProperties>({
			profileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			profileOwner: new FormControl<string | null | undefined>(undefined),
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payloadFormat: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartSigningJobRequest {

		/** Required */
		source: Source;

		/** Required */
		destination: Destination;

		/** Required */
		profileName: string;

		/** Required */
		clientRequestToken: string;
		profileOwner?: string;
	}
	export interface StartSigningJobRequestFormProperties {

		/** Required */
		profileName: FormControl<string | null | undefined>,

		/** Required */
		clientRequestToken: FormControl<string | null | undefined>,
		profileOwner: FormControl<string | null | undefined>,
	}
	export function CreateStartSigningJobRequestFormGroup() {
		return new FormGroup<StartSigningJobRequestFormProperties>({
			profileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			profileOwner: new FormControl<string | null | undefined>(undefined),
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds cross-account permissions to a signing profile.
		 * Post signing-profiles/{profileName}/permissions
		 * @param {string} profileName The human-readable name of the signing profile.
		 *     Min length: 2    Max length: 64
		 * @return {AddProfilePermissionResponse} Success
		 */
		AddProfilePermission(profileName: string, requestBody: AddProfilePermissionPostBody): Observable<AddProfilePermissionResponse> {
			return this.http.post<AddProfilePermissionResponse>(this.baseUri + 'signing-profiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/permissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the cross-account permissions associated with a signing profile.
		 * Get signing-profiles/{profileName}/permissions
		 * @param {string} profileName Name of the signing profile containing the cross-account permissions.
		 *     Min length: 2    Max length: 64
		 * @param {string} nextToken String for specifying the next set of paginated results.
		 * @return {ListProfilePermissionsResponse} Success
		 */
		ListProfilePermissions(profileName: string, nextToken: string | null | undefined): Observable<ListProfilePermissionsResponse> {
			return this.http.get<ListProfilePermissionsResponse>(this.baseUri + 'signing-profiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/permissions&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Changes the state of an <code>ACTIVE</code> signing profile to <code>CANCELED</code>. A canceled profile is still viewable with the <code>ListSigningProfiles</code> operation, but it cannot perform new signing jobs, and is deleted two years after cancelation.
		 * Delete signing-profiles/{profileName}
		 * @param {string} profileName The name of the signing profile to be canceled.
		 *     Min length: 2    Max length: 64
		 * @return {void} Success
		 */
		CancelSigningProfile(profileName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'signing-profiles/' + (profileName == null ? '' : encodeURIComponent(profileName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information on a specific signing profile.
		 * Get signing-profiles/{profileName}
		 * @param {string} profileName The name of the target signing profile.
		 *     Min length: 2    Max length: 64
		 * @param {string} profileOwner The AWS account ID of the profile owner.
		 *     Min length: 12    Max length: 12
		 * @return {GetSigningProfileResponse} Success
		 */
		GetSigningProfile(profileName: string, profileOwner: string | null | undefined): Observable<GetSigningProfileResponse> {
			return this.http.get<GetSigningProfileResponse>(this.baseUri + 'signing-profiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '&profileOwner=' + (profileOwner == null ? '' : encodeURIComponent(profileOwner)), {});
		}

		/**
		 * Creates a signing profile. A signing profile is a code signing template that can be used to carry out a pre-defined signing job.
		 * Put signing-profiles/{profileName}
		 * @param {string} profileName The name of the signing profile to be created.
		 *     Min length: 2    Max length: 64
		 * @return {PutSigningProfileResponse} Success
		 */
		PutSigningProfile(profileName: string, requestBody: PutSigningProfilePutBody): Observable<PutSigningProfileResponse> {
			return this.http.put<PutSigningProfileResponse>(this.baseUri + 'signing-profiles/' + (profileName == null ? '' : encodeURIComponent(profileName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific code signing job. You specify the job by using the <code>jobId</code> value that is returned by the <a>StartSigningJob</a> operation.
		 * Get signing-jobs/{jobId}
		 * @param {string} jobId The ID of the signing job on input.
		 * @return {DescribeSigningJobResponse} Success
		 */
		DescribeSigningJob(jobId: string): Observable<DescribeSigningJobResponse> {
			return this.http.get<DescribeSigningJobResponse>(this.baseUri + 'signing-jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Retrieves the revocation status of one or more of the signing profile, signing job, and signing certificate.
		 * Get revocations#signatureTimestamp&platformId&profileVersionArn&jobArn&certificateHashes
		 * @param {Date} signatureTimestamp The timestamp of the signature that validates the profile or job.
		 * @param {string} platformId The ID of a signing platform. 
		 * @param {string} profileVersionArn The version of a signing profile.
		 *     Min length: 20    Max length: 2048
		 * @param {string} jobArn The ARN of a signing job.
		 *     Min length: 20    Max length: 2048
		 * @param {Array<string>} certificateHashes <p>A list of composite signed hashes that identify certificates.</p> <p>A certificate identifier consists of a subject certificate TBS hash (signed by the parent CA) combined with a parent CA TBS hash (signed by the parent CA’s CA). Root certificates are defined as their own CA.</p>
		 * @return {GetRevocationStatusResponse} Success
		 */
		GetRevocationStatus(signatureTimestamp: Date, platformId: string, profileVersionArn: string, jobArn: string, certificateHashes: Array<string>): Observable<GetRevocationStatusResponse> {
			return this.http.get<GetRevocationStatusResponse>(this.baseUri + 'revocations#signatureTimestamp&platformId&profileVersionArn&jobArn&certificateHashes?signatureTimestamp=' + signatureTimestamp.toISOString() + '&platformId=' + (platformId == null ? '' : encodeURIComponent(platformId)) + '&profileVersionArn=' + (profileVersionArn == null ? '' : encodeURIComponent(profileVersionArn)) + '&jobArn=' + (jobArn == null ? '' : encodeURIComponent(jobArn)) + '&' + certificateHashes.map(z => `certificateHashes=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns information on a specific signing platform.
		 * Get signing-platforms/{platformId}
		 * @param {string} platformId The ID of the target signing platform.
		 * @return {GetSigningPlatformResponse} Success
		 */
		GetSigningPlatform(platformId: string): Observable<GetSigningPlatformResponse> {
			return this.http.get<GetSigningPlatformResponse>(this.baseUri + 'signing-platforms/' + (platformId == null ? '' : encodeURIComponent(platformId)), {});
		}

		/**
		 * Lists all your signing jobs. You can use the <code>maxResults</code> parameter to limit the number of signing jobs that are returned in the response. If additional jobs remain to be listed, code signing returns a <code>nextToken</code> value. Use this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can continue calling <code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with new values that code signing returns in the <code>nextToken</code> parameter until all of your signing jobs have been returned.
		 * Get signing-jobs
		 * @param {SigningStatus} status A status value with which to filter your results.
		 * @param {string} platformId The ID of microcontroller platform that you specified for the distribution of your code image.
		 * @param {string} requestedBy The IAM principal that requested the signing job.
		 * @param {number} maxResults Specifies the maximum number of items to return in the response. Use this parameter when paginating results. If additional items exist beyond the number you specify, the <code>nextToken</code> element is set in the response. Use the <code>nextToken</code> value in a subsequent request to retrieve additional items. 
		 *     Minimum: 1    Maximum: 25
		 * @param {string} nextToken String for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of <code>nextToken</code> from the response that you just received.
		 * @param {boolean} isRevoked Filters results to return only signing jobs with revoked signatures.
		 * @param {Date} signatureExpiresBefore Filters results to return only signing jobs with signatures expiring before a specified timestamp.
		 * @param {Date} signatureExpiresAfter Filters results to return only signing jobs with signatures expiring after a specified timestamp.
		 * @param {string} jobInvoker Filters results to return only signing jobs initiated by a specified IAM entity.
		 *     Min length: 12    Max length: 12
		 * @return {ListSigningJobsResponse} Success
		 */
		ListSigningJobs(status: SigningStatus | null | undefined, platformId: string | null | undefined, requestedBy: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, isRevoked: boolean | null | undefined, signatureExpiresBefore: Date | null | undefined, signatureExpiresAfter: Date | null | undefined, jobInvoker: string | null | undefined): Observable<ListSigningJobsResponse> {
			return this.http.get<ListSigningJobsResponse>(this.baseUri + 'signing-jobs?status=' + status + '&platformId=' + (platformId == null ? '' : encodeURIComponent(platformId)) + '&requestedBy=' + (requestedBy == null ? '' : encodeURIComponent(requestedBy)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&isRevoked=' + isRevoked + '&signatureExpiresBefore=' + signatureExpiresBefore?.toISOString() + '&signatureExpiresAfter=' + signatureExpiresAfter?.toISOString() + '&jobInvoker=' + (jobInvoker == null ? '' : encodeURIComponent(jobInvoker)), {});
		}

		/**
		 * <p>Initiates a signing job to be performed on the code provided. Signing jobs are viewable by the <code>ListSigningJobs</code> operation for two years after they are performed. Note the following requirements: </p> <ul> <li> <p> You must create an Amazon S3 source bucket. For more information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">Creating a Bucket</a> in the <i>Amazon S3 Getting Started Guide</i>. </p> </li> <li> <p>Your S3 source bucket must be version enabled.</p> </li> <li> <p>You must create an S3 destination bucket. Code signing uses your S3 destination bucket to write your signed code.</p> </li> <li> <p>You specify the name of the source and destination buckets when calling the <code>StartSigningJob</code> operation.</p> </li> <li> <p>You must also specify a request token that identifies your request to code signing.</p> </li> </ul> <p>You can call the <a>DescribeSigningJob</a> and the <a>ListSigningJobs</a> actions after you call <code>StartSigningJob</code>.</p> <p>For a Java example that shows how to use this action, see <a href="https://docs.aws.amazon.com/signer/latest/developerguide/api-startsigningjob.html">StartSigningJob</a>.</p>
		 * Post signing-jobs
		 * @return {StartSigningJobResponse} Success
		 */
		StartSigningJob(requestBody: StartSigningJobPostBody): Observable<StartSigningJobResponse> {
			return this.http.post<StartSigningJobResponse>(this.baseUri + 'signing-jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all signing platforms available in code signing that match the request parameters. If additional jobs remain to be listed, code signing returns a <code>nextToken</code> value. Use this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can continue calling <code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with new values that code signing returns in the <code>nextToken</code> parameter until all of your signing jobs have been returned.
		 * Get signing-platforms
		 * @param {string} category The category type of a signing platform.
		 * @param {string} partner Any partner entities connected to a signing platform.
		 * @param {string} target The validation template that is used by the target signing platform.
		 * @param {number} maxResults The maximum number of results to be returned by this operation.
		 *     Minimum: 1    Maximum: 25
		 * @param {string} nextToken Value for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of <code>nextToken</code> from the response that you just received.
		 * @return {ListSigningPlatformsResponse} Success
		 */
		ListSigningPlatforms(category: string | null | undefined, partner: string | null | undefined, target: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListSigningPlatformsResponse> {
			return this.http.get<ListSigningPlatformsResponse>(this.baseUri + 'signing-platforms?category=' + (category == null ? '' : encodeURIComponent(category)) + '&partner=' + (partner == null ? '' : encodeURIComponent(partner)) + '&target=' + (target == null ? '' : encodeURIComponent(target)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists all available signing profiles in your AWS account. Returns only profiles with an <code>ACTIVE</code> status unless the <code>includeCanceled</code> request field is set to <code>true</code>. If additional jobs remain to be listed, code signing returns a <code>nextToken</code> value. Use this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can continue calling <code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with new values that code signing returns in the <code>nextToken</code> parameter until all of your signing jobs have been returned.
		 * Get signing-profiles
		 * @param {boolean} includeCanceled Designates whether to include profiles with the status of <code>CANCELED</code>.
		 * @param {number} maxResults The maximum number of profiles to be returned.
		 *     Minimum: 1    Maximum: 25
		 * @param {string} nextToken Value for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of <code>nextToken</code> from the response that you just received.
		 * @param {string} platformId Filters results to return only signing jobs initiated for a specified signing platform.
		 * @param {Array<SigningProfileStatus>} statuses Filters results to return only signing jobs with statuses in the specified list.
		 * @return {ListSigningProfilesResponse} Success
		 */
		ListSigningProfiles(includeCanceled: boolean | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, platformId: string | null | undefined, statuses: Array<SigningProfileStatus> | null | undefined): Observable<ListSigningProfilesResponse> {
			return this.http.get<ListSigningProfilesResponse>(this.baseUri + 'signing-profiles?includeCanceled=' + includeCanceled + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&platformId=' + (platformId == null ? '' : encodeURIComponent(platformId)) + '&' + statuses?.map(z => `statuses=${z}`).join('&'), {});
		}

		/**
		 * Returns a list of the tags associated with a signing profile resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the signing profile.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds one or more tags to a signing profile. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a key and an optional value. To specify the signing profile, use its Amazon Resource Name (ARN). To specify the tag, use a key-value pair.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the signing profile.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes cross-account permissions from a signing profile.
		 * Delete signing-profiles/{profileName}/permissions/{statementId}#revisionId
		 * @param {string} profileName A human-readable name for the signing profile with permissions to be removed.
		 *     Min length: 2    Max length: 64
		 * @param {string} revisionId An identifier for the current revision of the signing profile permissions.
		 * @param {string} statementId A unique identifier for the cross-account permissions statement.
		 * @return {RemoveProfilePermissionResponse} Success
		 */
		RemoveProfilePermission(profileName: string, revisionId: string, statementId: string): Observable<RemoveProfilePermissionResponse> {
			return this.http.delete<RemoveProfilePermissionResponse>(this.baseUri + 'signing-profiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/permissions/' + (statementId == null ? '' : encodeURIComponent(statementId)) + '#revisionId&revisionId=' + (revisionId == null ? '' : encodeURIComponent(revisionId)), {});
		}

		/**
		 * Changes the state of a signing job to REVOKED. This indicates that the signature is no longer valid.
		 * Put signing-jobs/{jobId}/revoke
		 * @param {string} jobId ID of the signing job to be revoked.
		 * @return {void} Success
		 */
		RevokeSignature(jobId: string, requestBody: RevokeSignaturePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'signing-jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/revoke', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Changes the state of a signing profile to REVOKED. This indicates that signatures generated using the signing profile after an effective start date are no longer valid.
		 * Put signing-profiles/{profileName}/revoke
		 * @param {string} profileName The name of the signing profile to be revoked.
		 *     Min length: 2    Max length: 64
		 * @return {void} Success
		 */
		RevokeSigningProfile(profileName: string, requestBody: RevokeSigningProfilePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'signing-profiles/' + (profileName == null ? '' : encodeURIComponent(profileName)) + '/revoke', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Signs a binary payload and returns a signature envelope.
		 * Post signing-jobs/with-payload
		 * @return {SignPayloadResponse} Success
		 */
		SignPayload(requestBody: SignPayloadPostBody): Observable<SignPayloadResponse> {
			return this.http.post<SignPayloadResponse>(this.baseUri + 'signing-jobs/with-payload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from a signing profile. To remove the tags, specify a list of tag keys.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the signing profile.
		 * @param {Array<string>} tagKeys A list of tag keys to be removed from the signing profile.
		 *     Minimum items: 1    Maximum items: 200
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface AddProfilePermissionPostBody {

		/**
		 * The version of the signing profile.
		 * Min length: 10
		 * Max length: 10
		 */
		profileVersion?: string | null;

		/**
		 * The AWS Signer action permitted as part of cross-account permissions.
		 * Required
		 */
		action: string;

		/**
		 * The AWS principal receiving cross-account permissions. This may be an IAM role or another AWS account ID.
		 * Required
		 */
		principal: string;

		/** A unique identifier for the current profile revision. */
		revisionId?: string | null;

		/**
		 * A unique identifier for the cross-account permission statement.
		 * Required
		 */
		statementId: string;
	}
	export interface AddProfilePermissionPostBodyFormProperties {

		/**
		 * The version of the signing profile.
		 * Min length: 10
		 * Max length: 10
		 */
		profileVersion: FormControl<string | null | undefined>,

		/**
		 * The AWS Signer action permitted as part of cross-account permissions.
		 * Required
		 */
		action: FormControl<string | null | undefined>,

		/**
		 * The AWS principal receiving cross-account permissions. This may be an IAM role or another AWS account ID.
		 * Required
		 */
		principal: FormControl<string | null | undefined>,

		/** A unique identifier for the current profile revision. */
		revisionId: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for the cross-account permission statement.
		 * Required
		 */
		statementId: FormControl<string | null | undefined>,
	}
	export function CreateAddProfilePermissionPostBodyFormGroup() {
		return new FormGroup<AddProfilePermissionPostBodyFormProperties>({
			profileVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[a-zA-Z0-9]{10}$')]),
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined),
			statementId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutSigningProfilePutBody {

		/** The ACM certificate that is used to sign your code. */
		signingMaterial?: PutSigningProfilePutBodySigningMaterial;

		/** The validity period for a signing job. */
		signatureValidityPeriod?: PutSigningProfilePutBodySignatureValidityPeriod;

		/**
		 * The ID of the signing platform to be created.
		 * Required
		 */
		platformId: string;

		/** Any overrides that are applied to the signing configuration of a code signing platform. */
		overrides?: PutSigningProfilePutBodyOverrides;

		/** Map of key-value pairs for signing. These can include any information that you want to use during signing. */
		signingParameters?: {[id: string]: string };

		/** Tags to be associated with the signing profile that is being created. */
		tags?: {[id: string]: string };
	}
	export interface PutSigningProfilePutBodyFormProperties {

		/**
		 * The ID of the signing platform to be created.
		 * Required
		 */
		platformId: FormControl<string | null | undefined>,

		/** Map of key-value pairs for signing. These can include any information that you want to use during signing. */
		signingParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Tags to be associated with the signing profile that is being created. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePutSigningProfilePutBodyFormGroup() {
		return new FormGroup<PutSigningProfilePutBodyFormProperties>({
			platformId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			signingParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface PutSigningProfilePutBodySigningMaterial {
		certificateArn?: string;
	}
	export interface PutSigningProfilePutBodySigningMaterialFormProperties {
		certificateArn: FormControl<string | null | undefined>,
	}
	export function CreatePutSigningProfilePutBodySigningMaterialFormGroup() {
		return new FormGroup<PutSigningProfilePutBodySigningMaterialFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutSigningProfilePutBodySignatureValidityPeriod {
		value?: number | null;
		type?: ValidityType;
	}
	export interface PutSigningProfilePutBodySignatureValidityPeriodFormProperties {
		value: FormControl<number | null | undefined>,
		type: FormControl<ValidityType | null | undefined>,
	}
	export function CreatePutSigningProfilePutBodySignatureValidityPeriodFormGroup() {
		return new FormGroup<PutSigningProfilePutBodySignatureValidityPeriodFormProperties>({
			value: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<ValidityType | null | undefined>(undefined),
		});

	}

	export interface PutSigningProfilePutBodyOverrides {
		signingConfiguration?: SigningConfigurationOverrides;
		signingImageFormat?: ImageFormat;
	}
	export interface PutSigningProfilePutBodyOverridesFormProperties {
		signingImageFormat: FormControl<ImageFormat | null | undefined>,
	}
	export function CreatePutSigningProfilePutBodyOverridesFormGroup() {
		return new FormGroup<PutSigningProfilePutBodyOverridesFormProperties>({
			signingImageFormat: new FormControl<ImageFormat | null | undefined>(undefined),
		});

	}

	export interface StartSigningJobPostBody {

		/**
		 * An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code.
		 * Required
		 */
		source: StartSigningJobPostBodySource;

		/**
		 * Points to an <code>S3Destination</code> object that contains information about your S3 bucket.
		 * Required
		 */
		destination: StartSigningJobPostBodyDestination;

		/**
		 * The name of the signing profile.
		 * Required
		 * Min length: 2
		 * Max length: 64
		 */
		profileName: string;

		/**
		 * String that identifies the signing request. All calls after the first that use this token return the same response as the first call.
		 * Required
		 */
		clientRequestToken: string;

		/**
		 * The AWS account ID of the signing profile owner.
		 * Min length: 12
		 * Max length: 12
		 */
		profileOwner?: string | null;
	}
	export interface StartSigningJobPostBodyFormProperties {

		/**
		 * The name of the signing profile.
		 * Required
		 * Min length: 2
		 * Max length: 64
		 */
		profileName: FormControl<string | null | undefined>,

		/**
		 * String that identifies the signing request. All calls after the first that use this token return the same response as the first call.
		 * Required
		 */
		clientRequestToken: FormControl<string | null | undefined>,

		/**
		 * The AWS account ID of the signing profile owner.
		 * Min length: 12
		 * Max length: 12
		 */
		profileOwner: FormControl<string | null | undefined>,
	}
	export function CreateStartSigningJobPostBodyFormGroup() {
		return new FormGroup<StartSigningJobPostBodyFormProperties>({
			profileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_]{2,}')]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			profileOwner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[0-9]{12}$')]),
		});

	}

	export interface StartSigningJobPostBodySource {
		s3?: S3Source;
	}
	export interface StartSigningJobPostBodySourceFormProperties {
	}
	export function CreateStartSigningJobPostBodySourceFormGroup() {
		return new FormGroup<StartSigningJobPostBodySourceFormProperties>({
		});

	}

	export interface StartSigningJobPostBodyDestination {
		s3?: S3Destination;
	}
	export interface StartSigningJobPostBodyDestinationFormProperties {
	}
	export function CreateStartSigningJobPostBodyDestinationFormGroup() {
		return new FormGroup<StartSigningJobPostBodyDestinationFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * One or more tags to be associated with the signing profile.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * One or more tags to be associated with the signing profile.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RevokeSignaturePutBody {

		/**
		 * AWS account ID of the job owner.
		 * Min length: 12
		 * Max length: 12
		 */
		jobOwner?: string | null;

		/**
		 * The reason for revoking the signing job.
		 * Required
		 * Min length: 1
		 * Max length: 500
		 */
		reason: string;
	}
	export interface RevokeSignaturePutBodyFormProperties {

		/**
		 * AWS account ID of the job owner.
		 * Min length: 12
		 * Max length: 12
		 */
		jobOwner: FormControl<string | null | undefined>,

		/**
		 * The reason for revoking the signing job.
		 * Required
		 * Min length: 1
		 * Max length: 500
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateRevokeSignaturePutBodyFormGroup() {
		return new FormGroup<RevokeSignaturePutBodyFormProperties>({
			jobOwner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[0-9]{12}$')]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(500)]),
		});

	}

	export interface RevokeSigningProfilePutBody {

		/**
		 * The version of the signing profile to be revoked.
		 * Required
		 * Min length: 10
		 * Max length: 10
		 */
		profileVersion: string;

		/**
		 * The reason for revoking a signing profile.
		 * Required
		 * Min length: 1
		 * Max length: 500
		 */
		reason: string;

		/**
		 * A timestamp for when revocation of a Signing Profile should become effective. Signatures generated using the signing profile after this timestamp are not trusted.
		 * Required
		 */
		effectiveTime: Date;
	}
	export interface RevokeSigningProfilePutBodyFormProperties {

		/**
		 * The version of the signing profile to be revoked.
		 * Required
		 * Min length: 10
		 * Max length: 10
		 */
		profileVersion: FormControl<string | null | undefined>,

		/**
		 * The reason for revoking a signing profile.
		 * Required
		 * Min length: 1
		 * Max length: 500
		 */
		reason: FormControl<string | null | undefined>,

		/**
		 * A timestamp for when revocation of a Signing Profile should become effective. Signatures generated using the signing profile after this timestamp are not trusted.
		 * Required
		 */
		effectiveTime: FormControl<Date | null | undefined>,
	}
	export function CreateRevokeSigningProfilePutBodyFormGroup() {
		return new FormGroup<RevokeSigningProfilePutBodyFormProperties>({
			profileVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[a-zA-Z0-9]{10}$')]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(500)]),
			effectiveTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SignPayloadPostBody {

		/**
		 * The name of the signing profile.
		 * Required
		 * Min length: 2
		 * Max length: 64
		 */
		profileName: string;

		/**
		 * The AWS account ID of the profile owner.
		 * Min length: 12
		 * Max length: 12
		 */
		profileOwner?: string | null;

		/**
		 * Specifies the object digest (hash) to sign.
		 * Required
		 * Min length: 1
		 * Max length: 4096
		 */
		payload: string;

		/**
		 * Payload content type
		 * Required
		 */
		payloadFormat: string;
	}
	export interface SignPayloadPostBodyFormProperties {

		/**
		 * The name of the signing profile.
		 * Required
		 * Min length: 2
		 * Max length: 64
		 */
		profileName: FormControl<string | null | undefined>,

		/**
		 * The AWS account ID of the profile owner.
		 * Min length: 12
		 * Max length: 12
		 */
		profileOwner: FormControl<string | null | undefined>,

		/**
		 * Specifies the object digest (hash) to sign.
		 * Required
		 * Min length: 1
		 * Max length: 4096
		 */
		payload: FormControl<string | null | undefined>,

		/**
		 * Payload content type
		 * Required
		 */
		payloadFormat: FormControl<string | null | undefined>,
	}
	export function CreateSignPayloadPostBodyFormGroup() {
		return new FormGroup<SignPayloadPostBodyFormProperties>({
			profileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_]{2,}')]),
			profileOwner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[0-9]{12}$')]),
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(4096)]),
			payloadFormat: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

