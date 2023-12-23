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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface InternalServiceErrorException {
	}
	export interface InternalServiceErrorExceptionFormProperties {
	}
	export function CreateInternalServiceErrorExceptionFormGroup() {
		return new FormGroup<InternalServiceErrorExceptionFormProperties>({
		});

	}

	export interface DescribeSigningJobResponse {
		jobId?: string | null;

		/** An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code. */
		source?: Source;

		/** The ACM certificate that is used to sign your code. */
		signingMaterial?: SigningMaterial;
		platformId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 2
		 * Pattern: ^[a-zA-Z0-9_]{2,}
		 */
		profileName?: string | null;

		/** Any overrides that are applied to the signing configuration of a code signing platform. */
		overrides?: SigningPlatformOverrides;
		signingParameters?: SigningParameters;
		createdAt?: Date | null;
		completedAt?: Date | null;
		requestedBy?: string | null;
		status?: DescribeSigningJobResponseStatus | null;
		statusReason?: string | null;

		/** Points to an <code>S3SignedObject</code> object that contains information about your signed code image. */
		signedObject?: SignedObject;
	}
	export interface DescribeSigningJobResponseFormProperties {
		jobId: FormControl<string | null | undefined>,
		platformId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 2
		 * Pattern: ^[a-zA-Z0-9_]{2,}
		 */
		profileName: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		completedAt: FormControl<Date | null | undefined>,
		requestedBy: FormControl<string | null | undefined>,
		status: FormControl<DescribeSigningJobResponseStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSigningJobResponseFormGroup() {
		return new FormGroup<DescribeSigningJobResponseFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			platformId: new FormControl<string | null | undefined>(undefined),
			profileName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(2)]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			completedAt: new FormControl<Date | null | undefined>(undefined),
			requestedBy: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DescribeSigningJobResponseStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code. */
	export interface Source {

		/** Information about the S3 bucket where you saved your unsigned code. */
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

		/** A signing configuration that overrides the default encryption or hash algorithm of a signing job. */
		signingConfiguration?: SigningConfigurationOverrides;
		signingImageFormat?: SigningPlatformOverridesSigningImageFormat | null;
	}

	/** Any overrides that are applied to the signing configuration of a code signing platform. */
	export interface SigningPlatformOverridesFormProperties {
		signingImageFormat: FormControl<SigningPlatformOverridesSigningImageFormat | null | undefined>,
	}
	export function CreateSigningPlatformOverridesFormGroup() {
		return new FormGroup<SigningPlatformOverridesFormProperties>({
			signingImageFormat: new FormControl<SigningPlatformOverridesSigningImageFormat | null | undefined>(undefined),
		});

	}


	/** A signing configuration that overrides the default encryption or hash algorithm of a signing job. */
	export interface SigningConfigurationOverrides {
		encryptionAlgorithm?: SigningConfigurationOverridesEncryptionAlgorithm | null;
		hashAlgorithm?: SigningConfigurationOverridesHashAlgorithm | null;
	}

	/** A signing configuration that overrides the default encryption or hash algorithm of a signing job. */
	export interface SigningConfigurationOverridesFormProperties {
		encryptionAlgorithm: FormControl<SigningConfigurationOverridesEncryptionAlgorithm | null | undefined>,
		hashAlgorithm: FormControl<SigningConfigurationOverridesHashAlgorithm | null | undefined>,
	}
	export function CreateSigningConfigurationOverridesFormGroup() {
		return new FormGroup<SigningConfigurationOverridesFormProperties>({
			encryptionAlgorithm: new FormControl<SigningConfigurationOverridesEncryptionAlgorithm | null | undefined>(undefined),
			hashAlgorithm: new FormControl<SigningConfigurationOverridesHashAlgorithm | null | undefined>(undefined),
		});

	}

	export enum SigningConfigurationOverridesEncryptionAlgorithm { RSA = 0, ECDSA = 1 }

	export enum SigningConfigurationOverridesHashAlgorithm { SHA1 = 0, SHA256 = 1 }

	export enum SigningPlatformOverridesSigningImageFormat { JSON = 0, JSONEmbedded = 1, JSONDetached = 2 }

	export interface SigningParameters {
	}
	export interface SigningParametersFormProperties {
	}
	export function CreateSigningParametersFormGroup() {
		return new FormGroup<SigningParametersFormProperties>({
		});

	}

	export enum DescribeSigningJobResponseStatus { InProgress = 0, Failed = 1, Succeeded = 2 }


	/** Points to an <code>S3SignedObject</code> object that contains information about your signed code image. */
	export interface SignedObject {

		/** The S3 bucket name and key where code signing saved your signed code image. */
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
		bucketName?: string | null;
		key?: string | null;
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

	export interface GetSigningPlatformResponse {
		platformId?: string | null;
		displayName?: string | null;
		partner?: string | null;
		target?: string | null;
		category?: GetSigningPlatformResponseCategory | null;

		/** The configuration of a code signing operation. */
		signingConfiguration?: SigningConfiguration;

		/** The image format of a code signing platform or profile. */
		signingImageFormat?: SigningImageFormat;
		maxSizeInMB?: number | null;
	}
	export interface GetSigningPlatformResponseFormProperties {
		platformId: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		partner: FormControl<string | null | undefined>,
		target: FormControl<string | null | undefined>,
		category: FormControl<GetSigningPlatformResponseCategory | null | undefined>,
		maxSizeInMB: FormControl<number | null | undefined>,
	}
	export function CreateGetSigningPlatformResponseFormGroup() {
		return new FormGroup<GetSigningPlatformResponseFormProperties>({
			platformId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			partner: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<GetSigningPlatformResponseCategory | null | undefined>(undefined),
			maxSizeInMB: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GetSigningPlatformResponseCategory { AWSIoT = 0 }


	/** The configuration of a code signing operation. */
	export interface SigningConfiguration {

		/**
		 * The encryption algorithm options that are available to a code signing job.
		 * Required
		 */
		encryptionAlgorithmOptions: EncryptionAlgorithmOptions;

		/**
		 * The hash algorithms that are available to a code signing job.
		 * Required
		 */
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
		defaultValue: SigningConfigurationOverridesEncryptionAlgorithm;
	}

	/** The encryption algorithm options that are available to a code signing job. */
	export interface EncryptionAlgorithmOptionsFormProperties {

		/** Required */
		defaultValue: FormControl<SigningConfigurationOverridesEncryptionAlgorithm | null | undefined>,
	}
	export function CreateEncryptionAlgorithmOptionsFormGroup() {
		return new FormGroup<EncryptionAlgorithmOptionsFormProperties>({
			defaultValue: new FormControl<SigningConfigurationOverridesEncryptionAlgorithm | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EncryptionAlgorithm { RSA = 0, ECDSA = 1 }


	/** The hash algorithms that are available to a code signing job. */
	export interface HashAlgorithmOptions {

		/** Required */
		allowedValues: Array<HashAlgorithm>;

		/** Required */
		defaultValue: SigningConfigurationOverridesHashAlgorithm;
	}

	/** The hash algorithms that are available to a code signing job. */
	export interface HashAlgorithmOptionsFormProperties {

		/** Required */
		defaultValue: FormControl<SigningConfigurationOverridesHashAlgorithm | null | undefined>,
	}
	export function CreateHashAlgorithmOptionsFormGroup() {
		return new FormGroup<HashAlgorithmOptionsFormProperties>({
			defaultValue: new FormControl<SigningConfigurationOverridesHashAlgorithm | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HashAlgorithm { SHA1 = 0, SHA256 = 1 }


	/** The image format of a code signing platform or profile. */
	export interface SigningImageFormat {

		/** Required */
		supportedFormats: Array<ImageFormat>;

		/** Required */
		defaultFormat: SigningPlatformOverridesSigningImageFormat;
	}

	/** The image format of a code signing platform or profile. */
	export interface SigningImageFormatFormProperties {

		/** Required */
		defaultFormat: FormControl<SigningPlatformOverridesSigningImageFormat | null | undefined>,
	}
	export function CreateSigningImageFormatFormGroup() {
		return new FormGroup<SigningImageFormatFormProperties>({
			defaultFormat: new FormControl<SigningPlatformOverridesSigningImageFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ImageFormat { JSON = 0, JSONEmbedded = 1, JSONDetached = 2 }

	export interface GetSigningProfileResponse {

		/**
		 * Max length: 64
		 * Min length: 2
		 * Pattern: ^[a-zA-Z0-9_]{2,}
		 */
		profileName?: string | null;

		/** The ACM certificate that is used to sign your code. */
		signingMaterial?: SigningMaterial;
		platformId?: string | null;

		/** Any overrides that are applied to the signing configuration of a code signing platform. */
		overrides?: SigningPlatformOverrides;
		signingParameters?: SigningParameters;
		status?: GetSigningProfileResponseStatus | null;
		arn?: string | null;
		tags?: TagMap;
	}
	export interface GetSigningProfileResponseFormProperties {

		/**
		 * Max length: 64
		 * Min length: 2
		 * Pattern: ^[a-zA-Z0-9_]{2,}
		 */
		profileName: FormControl<string | null | undefined>,
		platformId: FormControl<string | null | undefined>,
		status: FormControl<GetSigningProfileResponseStatus | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetSigningProfileResponseFormGroup() {
		return new FormGroup<GetSigningProfileResponseFormProperties>({
			profileName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(2)]),
			platformId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetSigningProfileResponseStatus | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetSigningProfileResponseStatus { Active = 0, Canceled = 1 }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface ListSigningJobsResponse {
		jobs?: Array<SigningJob>;
		nextToken?: string | null;
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
		jobId?: string | null;

		/** An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code. */
		source?: Source;

		/** Points to an <code>S3SignedObject</code> object that contains information about your signed code image. */
		signedObject?: SignedObject;

		/** The ACM certificate that is used to sign your code. */
		signingMaterial?: SigningMaterial;
		createdAt?: Date | null;
		status?: DescribeSigningJobResponseStatus | null;
	}

	/** Contains information about a signing job. */
	export interface SigningJobFormProperties {
		jobId: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		status: FormControl<DescribeSigningJobResponseStatus | null | undefined>,
	}
	export function CreateSigningJobFormGroup() {
		return new FormGroup<SigningJobFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<DescribeSigningJobResponseStatus | null | undefined>(undefined),
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

	export interface ListSigningPlatformsResponse {
		platforms?: Array<SigningPlatform>;
		nextToken?: string | null;
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
		platformId?: string | null;
		displayName?: string | null;
		partner?: string | null;
		target?: string | null;
		category?: GetSigningPlatformResponseCategory | null;

		/** The configuration of a code signing operation. */
		signingConfiguration?: SigningConfiguration;

		/** The image format of a code signing platform or profile. */
		signingImageFormat?: SigningImageFormat;
		maxSizeInMB?: number | null;
	}

	/** Contains information about the signing configurations and parameters that are used to perform a code signing job. */
	export interface SigningPlatformFormProperties {
		platformId: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		partner: FormControl<string | null | undefined>,
		target: FormControl<string | null | undefined>,
		category: FormControl<GetSigningPlatformResponseCategory | null | undefined>,
		maxSizeInMB: FormControl<number | null | undefined>,
	}
	export function CreateSigningPlatformFormGroup() {
		return new FormGroup<SigningPlatformFormProperties>({
			platformId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			partner: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<GetSigningPlatformResponseCategory | null | undefined>(undefined),
			maxSizeInMB: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSigningProfilesResponse {
		profiles?: Array<SigningProfile>;
		nextToken?: string | null;
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

		/**
		 * Max length: 64
		 * Min length: 2
		 * Pattern: ^[a-zA-Z0-9_]{2,}
		 */
		profileName?: string | null;

		/** The ACM certificate that is used to sign your code. */
		signingMaterial?: SigningMaterial;
		platformId?: string | null;
		signingParameters?: SigningParameters;
		status?: GetSigningProfileResponseStatus | null;
		arn?: string | null;
		tags?: TagMap;
	}

	/** Contains information about the ACM certificates and code signing configuration parameters that can be used by a given code signing user. */
	export interface SigningProfileFormProperties {

		/**
		 * Max length: 64
		 * Min length: 2
		 * Pattern: ^[a-zA-Z0-9_]{2,}
		 */
		profileName: FormControl<string | null | undefined>,
		platformId: FormControl<string | null | undefined>,
		status: FormControl<GetSigningProfileResponseStatus | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateSigningProfileFormGroup() {
		return new FormGroup<SigningProfileFormProperties>({
			profileName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(2)]),
			platformId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetSigningProfileResponseStatus | null | undefined>(undefined),
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
		arn?: string | null;
	}
	export interface PutSigningProfileResponseFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreatePutSigningProfileResponseFormGroup() {
		return new FormGroup<PutSigningProfileResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartSigningJobResponse {
		jobId?: string | null;
	}
	export interface StartSigningJobResponseFormProperties {
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateStartSigningJobResponseFormGroup() {
		return new FormGroup<StartSigningJobResponseFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The name and prefix of the S3 bucket where code signing saves your signed objects. */
	export interface S3Destination {
		bucketName?: string | null;
		prefix?: string | null;
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

	export interface CancelSigningProfileRequest {
	}
	export interface CancelSigningProfileRequestFormProperties {
	}
	export function CreateCancelSigningProfileRequestFormGroup() {
		return new FormGroup<CancelSigningProfileRequestFormProperties>({
		});

	}

	export enum Category { AWSIoT = 0 }

	export interface DescribeSigningJobRequest {
	}
	export interface DescribeSigningJobRequestFormProperties {
	}
	export function CreateDescribeSigningJobRequestFormGroup() {
		return new FormGroup<DescribeSigningJobRequestFormProperties>({
		});

	}

	export enum SigningStatus { InProgress = 0, Failed = 1, Succeeded = 2 }


	/** Points to an <code>S3Destination</code> object that contains information about your S3 bucket. */
	export interface Destination {

		/** The name and prefix of the S3 bucket where code signing saves your signed objects. */
		s3?: S3Destination;
	}

	/** Points to an <code>S3Destination</code> object that contains information about your S3 bucket. */
	export interface DestinationFormProperties {
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
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

	export enum SigningProfileStatus { Active = 0, Canceled = 1 }

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

		/**
		 * The ACM certificate that is used to sign your code.
		 * Required
		 */
		signingMaterial: SigningMaterial;

		/** Required */
		platformId: string;

		/** Any overrides that are applied to the signing configuration of a code signing platform. */
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

	export interface StartSigningJobRequest {

		/**
		 * An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code.
		 * Required
		 */
		source: Source;

		/**
		 * Points to an <code>S3Destination</code> object that contains information about your S3 bucket.
		 * Required
		 */
		destination: Destination;

		/**
		 * Max length: 64
		 * Min length: 2
		 * Pattern: ^[a-zA-Z0-9_]{2,}
		 */
		profileName?: string | null;

		/** Required */
		clientRequestToken: string;
	}
	export interface StartSigningJobRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 2
		 * Pattern: ^[a-zA-Z0-9_]{2,}
		 */
		profileName: FormControl<string | null | undefined>,

		/** Required */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartSigningJobRequestFormGroup() {
		return new FormGroup<StartSigningJobRequestFormProperties>({
			profileName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(2)]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		 * Changes the state of an <code>ACTIVE</code> signing profile to <code>CANCELED</code>. A canceled profile is still viewable with the <code>ListSigningProfiles</code> operation, but it cannot perform new signing jobs, and is deleted two years after cancelation.
		 * Delete signing-profiles/{profileName}
		 * @param {string} profileName The name of the signing profile to be canceled.
		 * @return {void} Success
		 */
		CancelSigningProfile(profileName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'signing-profiles/' + (profileName == null ? '' : encodeURIComponent(profileName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information on a specific signing profile.
		 * Get signing-profiles/{profileName}
		 * @param {string} profileName The name of the target signing profile.
		 * @return {GetSigningProfileResponse} Success
		 */
		GetSigningProfile(profileName: string): Observable<GetSigningProfileResponse> {
			return this.http.get<GetSigningProfileResponse>(this.baseUri + 'signing-profiles/' + (profileName == null ? '' : encodeURIComponent(profileName)), {});
		}

		/**
		 * Creates a signing profile. A signing profile is a code signing template that can be used to carry out a pre-defined signing job. For more information, see <a href="http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html">http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html</a>
		 * Put signing-profiles/{profileName}
		 * @param {string} profileName The name of the signing profile to be created.
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
		 * @param {DescribeSigningJobResponseStatus} status A status value with which to filter your results.
		 * @param {string} platformId The ID of microcontroller platform that you specified for the distribution of your code image.
		 * @param {string} requestedBy The IAM principal that requested the signing job.
		 * @param {number} maxResults Specifies the maximum number of items to return in the response. Use this parameter when paginating results. If additional items exist beyond the number you specify, the <code>nextToken</code> element is set in the response. Use the <code>nextToken</code> value in a subsequent request to retrieve additional items. 
		 * @param {string} nextToken String for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of <code>nextToken</code> from the response that you just received.
		 * @return {ListSigningJobsResponse} Success
		 */
		ListSigningJobs(status: DescribeSigningJobResponseStatus | null | undefined, platformId: string | null | undefined, requestedBy: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListSigningJobsResponse> {
			return this.http.get<ListSigningJobsResponse>(this.baseUri + 'signing-jobs?status=' + status + '&platformId=' + (platformId == null ? '' : encodeURIComponent(platformId)) + '&requestedBy=' + (requestedBy == null ? '' : encodeURIComponent(requestedBy)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Initiates a signing job to be performed on the code provided. Signing jobs are viewable by the <code>ListSigningJobs</code> operation for two years after they are performed. Note the following requirements: </p> <ul> <li> <p> You must create an Amazon S3 source bucket. For more information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">Create a Bucket</a> in the <i>Amazon S3 Getting Started Guide</i>. </p> </li> <li> <p>Your S3 source bucket must be version enabled.</p> </li> <li> <p>You must create an S3 destination bucket. Code signing uses your S3 destination bucket to write your signed code.</p> </li> <li> <p>You specify the name of the source and destination buckets when calling the <code>StartSigningJob</code> operation.</p> </li> <li> <p>You must also specify a request token that identifies your request to code signing.</p> </li> </ul> <p>You can call the <a>DescribeSigningJob</a> and the <a>ListSigningJobs</a> actions after you call <code>StartSigningJob</code>.</p> <p>For a Java example that shows how to use this action, see <a href="http://docs.aws.amazon.com/acm/latest/userguide/">http://docs.aws.amazon.com/acm/latest/userguide/</a> </p>
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
		 * @param {string} nextToken Value for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of <code>nextToken</code> from the response that you just received.
		 * @return {ListSigningProfilesResponse} Success
		 */
		ListSigningProfiles(includeCanceled: boolean | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListSigningProfilesResponse> {
			return this.http.get<ListSigningProfilesResponse>(this.baseUri + 'signing-profiles?includeCanceled=' + includeCanceled + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
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
		 * Removes one or more tags from a signing profile. To remove the tags, specify a list of tag keys.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the signing profile.
		 * @param {Array<string>} tagKeys A list of tag keys to be removed from the signing profile.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface PutSigningProfilePutBody {

		/**
		 * The ACM certificate that is used to sign your code.
		 * Required
		 */
		signingMaterial: PutSigningProfilePutBodySigningMaterial;

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
		certificateArn?: string | null;
	}
	export interface PutSigningProfilePutBodySigningMaterialFormProperties {
		certificateArn: FormControl<string | null | undefined>,
	}
	export function CreatePutSigningProfilePutBodySigningMaterialFormGroup() {
		return new FormGroup<PutSigningProfilePutBodySigningMaterialFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutSigningProfilePutBodyOverrides {

		/** A signing configuration that overrides the default encryption or hash algorithm of a signing job. */
		signingConfiguration?: SigningConfigurationOverrides;
		signingImageFormat?: SigningPlatformOverridesSigningImageFormat | null;
	}
	export interface PutSigningProfilePutBodyOverridesFormProperties {
		signingImageFormat: FormControl<SigningPlatformOverridesSigningImageFormat | null | undefined>,
	}
	export function CreatePutSigningProfilePutBodyOverridesFormGroup() {
		return new FormGroup<PutSigningProfilePutBodyOverridesFormProperties>({
			signingImageFormat: new FormControl<SigningPlatformOverridesSigningImageFormat | null | undefined>(undefined),
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
		 * Max length: 64
		 * Min length: 2
		 * Pattern: ^[a-zA-Z0-9_]{2,}
		 */
		profileName?: string | null;

		/**
		 * String that identifies the signing request. All calls after the first that use this token return the same response as the first call.
		 * Required
		 */
		clientRequestToken: string;
	}
	export interface StartSigningJobPostBodyFormProperties {

		/**
		 * The name of the signing profile.
		 * Max length: 64
		 * Min length: 2
		 * Pattern: ^[a-zA-Z0-9_]{2,}
		 */
		profileName: FormControl<string | null | undefined>,

		/**
		 * String that identifies the signing request. All calls after the first that use this token return the same response as the first call.
		 * Required
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartSigningJobPostBodyFormGroup() {
		return new FormGroup<StartSigningJobPostBodyFormProperties>({
			profileName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(2)]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartSigningJobPostBodySource {

		/** Information about the S3 bucket where you saved your unsigned code. */
		s3?: S3Source;
	}
	export interface StartSigningJobPostBodySourceFormProperties {
	}
	export function CreateStartSigningJobPostBodySourceFormGroup() {
		return new FormGroup<StartSigningJobPostBodySourceFormProperties>({
		});

	}

	export interface StartSigningJobPostBodyDestination {

		/** The name and prefix of the S3 bucket where code signing saves your signed objects. */
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

}

