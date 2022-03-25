import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface ResourceNotFoundException {
	}

	export interface AccessDeniedException {
	}

	export interface ThrottlingException {
	}

	export interface InternalServiceErrorException {
	}

	export interface DescribeSigningJobResponse {
		jobId?: string;

		/** An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code. */
		source?: Source;

		/** The ACM certificate that is used to sign your code. */
		signingMaterial?: SigningMaterial;
		platformId?: string;
		profileName?: string;

		/** Any overrides that are applied to the signing configuration of a code signing platform. */
		overrides?: SigningPlatformOverrides;
		signingParameters?: SigningParameters;
		createdAt?: Date;
		completedAt?: Date;
		requestedBy?: string;
		status?: DescribeSigningJobResponseStatus;
		statusReason?: string;

		/** Points to an <code>S3SignedObject</code> object that contains information about your signed code image. */
		signedObject?: SignedObject;
	}


	/** An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code. */
	export interface Source {

		/** Information about the S3 bucket where you saved your unsigned code. */
		s3?: S3Source;
	}


	/** Information about the S3 bucket where you saved your unsigned code. */
	export interface S3Source {
		bucketName: string;
		key: string;
		version: string;
	}


	/** The ACM certificate that is used to sign your code. */
	export interface SigningMaterial {
		certificateArn: string;
	}


	/** Any overrides that are applied to the signing configuration of a code signing platform. */
	export interface SigningPlatformOverrides {

		/** A signing configuration that overrides the default encryption or hash algorithm of a signing job. */
		signingConfiguration?: SigningConfigurationOverrides;
		signingImageFormat?: SigningPlatformOverridesSigningImageFormat;
	}


	/** A signing configuration that overrides the default encryption or hash algorithm of a signing job. */
	export interface SigningConfigurationOverrides {
		encryptionAlgorithm?: SigningConfigurationOverridesEncryptionAlgorithm;
		hashAlgorithm?: SigningConfigurationOverridesHashAlgorithm;
	}

	export enum SigningConfigurationOverridesEncryptionAlgorithm { RSA = 0, ECDSA = 1 }

	export enum SigningConfigurationOverridesHashAlgorithm { SHA1 = 0, SHA256 = 1 }

	export enum SigningPlatformOverridesSigningImageFormat { JSON = 0, JSONEmbedded = 1, JSONDetached = 2 }

	export interface SigningParameters {
	}

	export enum DescribeSigningJobResponseStatus { InProgress = 0, Failed = 1, Succeeded = 2 }


	/** Points to an <code>S3SignedObject</code> object that contains information about your signed code image. */
	export interface SignedObject {

		/** The S3 bucket name and key where code signing saved your signed code image. */
		s3?: S3SignedObject;
	}


	/** The S3 bucket name and key where code signing saved your signed code image. */
	export interface S3SignedObject {
		bucketName?: string;
		key?: string;
	}

	export interface GetSigningPlatformResponse {
		platformId?: string;
		displayName?: string;
		partner?: string;
		target?: string;
		category?: GetSigningPlatformResponseCategory;

		/** The configuration of a code signing operation. */
		signingConfiguration?: SigningConfiguration;

		/** The image format of a code signing platform or profile. */
		signingImageFormat?: SigningImageFormat;
		maxSizeInMB?: number;
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


	/** The encryption algorithm options that are available to a code signing job. */
	export interface EncryptionAlgorithmOptions {
		allowedValues: Array<EncryptionAlgorithm>;
		defaultValue: SigningConfigurationOverridesEncryptionAlgorithm;
	}

	export enum EncryptionAlgorithm { RSA = 0, ECDSA = 1 }


	/** The hash algorithms that are available to a code signing job. */
	export interface HashAlgorithmOptions {
		allowedValues: Array<HashAlgorithm>;
		defaultValue: SigningConfigurationOverridesHashAlgorithm;
	}

	export enum HashAlgorithm { SHA1 = 0, SHA256 = 1 }


	/** The image format of a code signing platform or profile. */
	export interface SigningImageFormat {
		supportedFormats: Array<ImageFormat>;
		defaultFormat: SigningPlatformOverridesSigningImageFormat;
	}

	export enum ImageFormat { JSON = 0, JSONEmbedded = 1, JSONDetached = 2 }

	export interface GetSigningProfileResponse {
		profileName?: string;

		/** The ACM certificate that is used to sign your code. */
		signingMaterial?: SigningMaterial;
		platformId?: string;

		/** Any overrides that are applied to the signing configuration of a code signing platform. */
		overrides?: SigningPlatformOverrides;
		signingParameters?: SigningParameters;
		status?: GetSigningProfileResponseStatus;
		arn?: string;
		tags?: TagMap;
	}

	export enum GetSigningProfileResponseStatus { Active = 0, Canceled = 1 }

	export interface TagMap {
	}

	export interface ListSigningJobsResponse {
		jobs?: Array<SigningJob>;
		nextToken?: string;
	}


	/** Contains information about a signing job. */
	export interface SigningJob {
		jobId?: string;

		/** An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code. */
		source?: Source;

		/** Points to an <code>S3SignedObject</code> object that contains information about your signed code image. */
		signedObject?: SignedObject;

		/** The ACM certificate that is used to sign your code. */
		signingMaterial?: SigningMaterial;
		createdAt?: Date;
		status?: DescribeSigningJobResponseStatus;
	}

	export interface ValidationException {
	}

	export interface ListSigningPlatformsResponse {
		platforms?: Array<SigningPlatform>;
		nextToken?: string;
	}


	/** Contains information about the signing configurations and parameters that are used to perform a code signing job. */
	export interface SigningPlatform {
		platformId?: string;
		displayName?: string;
		partner?: string;
		target?: string;
		category?: GetSigningPlatformResponseCategory;

		/** The configuration of a code signing operation. */
		signingConfiguration?: SigningConfiguration;

		/** The image format of a code signing platform or profile. */
		signingImageFormat?: SigningImageFormat;
		maxSizeInMB?: number;
	}

	export interface ListSigningProfilesResponse {
		profiles?: Array<SigningProfile>;
		nextToken?: string;
	}


	/** Contains information about the ACM certificates and code signing configuration parameters that can be used by a given code signing user. */
	export interface SigningProfile {
		profileName?: string;

		/** The ACM certificate that is used to sign your code. */
		signingMaterial?: SigningMaterial;
		platformId?: string;
		signingParameters?: SigningParameters;
		status?: GetSigningProfileResponseStatus;
		arn?: string;
		tags?: TagMap;
	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}

	export interface BadRequestException {
	}

	export interface NotFoundException {
	}

	export interface PutSigningProfileResponse {
		arn?: string;
	}

	export interface StartSigningJobResponse {
		jobId?: string;
	}


	/** The name and prefix of the S3 bucket where code signing saves your signed objects. */
	export interface S3Destination {
		bucketName?: string;
		prefix?: string;
	}

	export interface TagResourceResponse {
	}

	export interface UntagResourceResponse {
	}

	export interface CancelSigningProfileRequest {
	}

	export enum Category { AWSIoT = 0 }

	export interface DescribeSigningJobRequest {
	}

	export enum SigningStatus { InProgress = 0, Failed = 1, Succeeded = 2 }


	/** Points to an <code>S3Destination</code> object that contains information about your S3 bucket. */
	export interface Destination {

		/** The name and prefix of the S3 bucket where code signing saves your signed objects. */
		s3?: S3Destination;
	}

	export interface GetSigningPlatformRequest {
	}

	export interface GetSigningProfileRequest {
	}

	export enum SigningProfileStatus { Active = 0, Canceled = 1 }

	export interface ListSigningJobsRequest {
	}

	export interface ListSigningPlatformsRequest {
	}

	export interface ListSigningProfilesRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface PutSigningProfileRequest {

		/**
		 * The ACM certificate that is used to sign your code.
		 * Required
		 */
		signingMaterial: SigningMaterial;
		platformId: string;

		/** Any overrides that are applied to the signing configuration of a code signing platform. */
		overrides?: SigningPlatformOverrides;
		signingParameters?: SigningParameters;
		tags?: TagMap;
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
		profileName?: string;
		clientRequestToken: string;
	}

	export interface TagResourceRequest {
		tags: TagMap;
	}

	export interface UntagResourceRequest {
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
		ListSigningJobs(status: DescribeSigningJobResponseStatus, platformId: string, requestedBy: string, maxResults: number, nextToken: string): Observable<ListSigningJobsResponse> {
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
		ListSigningPlatforms(category: string, partner: string, target: string, maxResults: number, nextToken: string): Observable<ListSigningPlatformsResponse> {
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
		ListSigningProfiles(includeCanceled: boolean, maxResults: number, nextToken: string): Observable<ListSigningProfilesResponse> {
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

	export interface PutSigningProfilePutBodySigningMaterial {
		certificateArn?: string;
	}

	export interface PutSigningProfilePutBodyOverrides {

		/** A signing configuration that overrides the default encryption or hash algorithm of a signing job. */
		signingConfiguration?: SigningConfigurationOverrides;
		signingImageFormat?: SigningPlatformOverridesSigningImageFormat;
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
		profileName?: string;

		/**
		 * String that identifies the signing request. All calls after the first that use this token return the same response as the first call.
		 * Required
		 */
		clientRequestToken: string;
	}

	export interface StartSigningJobPostBodySource {

		/** Information about the S3 bucket where you saved your unsigned code. */
		s3?: S3Source;
	}

	export interface StartSigningJobPostBodyDestination {

		/** The name and prefix of the S3 bucket where code signing saves your signed objects. */
		s3?: S3Destination;
	}

	export interface TagResourcePostBody {

		/**
		 * One or more tags to be associated with the signing profile.
		 * Required
		 */
		tags: {[id: string]: string };
	}

}

