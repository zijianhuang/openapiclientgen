import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Information to read/write to blobstore2. */
	export interface GdataBlobstore2Info {

		/** The blob generation id. */
		blobGeneration?: string | null;

		/** The blob id, e.g., /blobstore/prod/playground/scotty */
		blobId?: string | null;

		/** Read handle passed from Bigstore -> Scotty for a GCS download. This is a signed, serialized blobstore2.ReadHandle proto which must never be set outside of Bigstore, and is not applicable to non-GCS media downloads. */
		downloadReadHandle?: string | null;

		/** The blob read token. Needed to read blobs that have not been replicated. Might not be available until the final call. */
		readToken?: string | null;

		/** Metadata passed from Blobstore -> Scotty for a new GCS upload. This is a signed, serialized blobstore2.BlobMetadataContainer proto which must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads. */
		uploadMetadataContainer?: string | null;
	}

	/** Information to read/write to blobstore2. */
	export interface GdataBlobstore2InfoFormProperties {

		/** The blob generation id. */
		blobGeneration: FormControl<string | null | undefined>,

		/** The blob id, e.g., /blobstore/prod/playground/scotty */
		blobId: FormControl<string | null | undefined>,

		/** Read handle passed from Bigstore -> Scotty for a GCS download. This is a signed, serialized blobstore2.ReadHandle proto which must never be set outside of Bigstore, and is not applicable to non-GCS media downloads. */
		downloadReadHandle: FormControl<string | null | undefined>,

		/** The blob read token. Needed to read blobs that have not been replicated. Might not be available until the final call. */
		readToken: FormControl<string | null | undefined>,

		/** Metadata passed from Blobstore -> Scotty for a new GCS upload. This is a signed, serialized blobstore2.BlobMetadataContainer proto which must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads. */
		uploadMetadataContainer: FormControl<string | null | undefined>,
	}
	export function CreateGdataBlobstore2InfoFormGroup() {
		return new FormGroup<GdataBlobstore2InfoFormProperties>({
			blobGeneration: new FormControl<string | null | undefined>(undefined),
			blobId: new FormControl<string | null | undefined>(undefined),
			downloadReadHandle: new FormControl<string | null | undefined>(undefined),
			readToken: new FormControl<string | null | undefined>(undefined),
			uploadMetadataContainer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites. */
	export interface GdataCompositeMedia {

		/** Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef. */
		blobRef?: string | null;

		/** Information to read/write to blobstore2. */
		blobstore2Info?: GdataBlobstore2Info;

		/** A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field. */
		cosmoBinaryReference?: string | null;

		/**
		 * crc32.c hash for the payload.
		 * Type: uint, 0 to 4,294,967,295
		 */
		crc32cHash?: number | null;

		/** Media data, set if reference_type is INLINE */
		inline?: string | null;

		/** Size of the data, in bytes */
		length?: string | null;

		/** MD5 hash for the payload. */
		md5Hash?: string | null;

		/** This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues with JavaScript support; see http://b/8801763. */
		objectId?: GdataObjectId;

		/** Path to the data, set if reference_type is PATH */
		path?: string | null;

		/** Describes what the field reference contains. */
		referenceType?: GdataCompositeMediaReferenceType | null;

		/** SHA-1 hash for the payload. */
		sha1Hash?: string | null;
	}

	/** A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites. */
	export interface GdataCompositeMediaFormProperties {

		/** Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef. */
		blobRef: FormControl<string | null | undefined>,

		/** A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field. */
		cosmoBinaryReference: FormControl<string | null | undefined>,

		/**
		 * crc32.c hash for the payload.
		 * Type: uint, 0 to 4,294,967,295
		 */
		crc32cHash: FormControl<number | null | undefined>,

		/** Media data, set if reference_type is INLINE */
		inline: FormControl<string | null | undefined>,

		/** Size of the data, in bytes */
		length: FormControl<string | null | undefined>,

		/** MD5 hash for the payload. */
		md5Hash: FormControl<string | null | undefined>,

		/** Path to the data, set if reference_type is PATH */
		path: FormControl<string | null | undefined>,

		/** Describes what the field reference contains. */
		referenceType: FormControl<GdataCompositeMediaReferenceType | null | undefined>,

		/** SHA-1 hash for the payload. */
		sha1Hash: FormControl<string | null | undefined>,
	}
	export function CreateGdataCompositeMediaFormGroup() {
		return new FormGroup<GdataCompositeMediaFormProperties>({
			blobRef: new FormControl<string | null | undefined>(undefined),
			cosmoBinaryReference: new FormControl<string | null | undefined>(undefined),
			crc32cHash: new FormControl<number | null | undefined>(undefined),
			inline: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<string | null | undefined>(undefined),
			md5Hash: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			referenceType: new FormControl<GdataCompositeMediaReferenceType | null | undefined>(undefined),
			sha1Hash: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues with JavaScript support; see http://b/8801763. */
	export interface GdataObjectId {

		/** The name of the bucket to which this object belongs. */
		bucketName?: string | null;

		/** Generation of the object. Generations are monotonically increasing across writes, allowing them to be be compared to determine which generation is newer. If this is omitted in a request, then you are requesting the live object. See http://go/bigstore-versions */
		generation?: string | null;

		/** The name of the object. */
		objectName?: string | null;
	}

	/** This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues with JavaScript support; see http://b/8801763. */
	export interface GdataObjectIdFormProperties {

		/** The name of the bucket to which this object belongs. */
		bucketName: FormControl<string | null | undefined>,

		/** Generation of the object. Generations are monotonically increasing across writes, allowing them to be be compared to determine which generation is newer. If this is omitted in a request, then you are requesting the live object. See http://go/bigstore-versions */
		generation: FormControl<string | null | undefined>,

		/** The name of the object. */
		objectName: FormControl<string | null | undefined>,
	}
	export function CreateGdataObjectIdFormGroup() {
		return new FormGroup<GdataObjectIdFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GdataCompositeMediaReferenceType { PATH = 'PATH', BLOB_REF = 'BLOB_REF', INLINE = 'INLINE', BIGSTORE_REF = 'BIGSTORE_REF', COSMO_BINARY_REFERENCE = 'COSMO_BINARY_REFERENCE' }


	/** Detailed Content-Type information from Scotty. The Content-Type of the media will typically be filled in by the header or Scotty's best_guess, but this extended information provides the backend with more information so that it can make a better decision if needed. This is only used on media upload requests from Scotty. */
	export interface GdataContentTypeInfo {

		/** Scotty's best guess of what the content type of the file is. */
		bestGuess?: string | null;

		/** The content type of the file derived by looking at specific bytes (i.e. "magic bytes") of the actual file. */
		fromBytes?: string | null;

		/** The content type of the file derived from the file extension of the original file name used by the client. */
		fromFileName?: string | null;

		/** The content type of the file as specified in the request headers, multipart headers, or RUPIO start request. */
		fromHeader?: string | null;

		/** The content type of the file derived from the file extension of the URL path. The URL path is assumed to represent a file name (which is typically only true for agents that are providing a REST API). */
		fromUrlPath?: string | null;
	}

	/** Detailed Content-Type information from Scotty. The Content-Type of the media will typically be filled in by the header or Scotty's best_guess, but this extended information provides the backend with more information so that it can make a better decision if needed. This is only used on media upload requests from Scotty. */
	export interface GdataContentTypeInfoFormProperties {

		/** Scotty's best guess of what the content type of the file is. */
		bestGuess: FormControl<string | null | undefined>,

		/** The content type of the file derived by looking at specific bytes (i.e. "magic bytes") of the actual file. */
		fromBytes: FormControl<string | null | undefined>,

		/** The content type of the file derived from the file extension of the original file name used by the client. */
		fromFileName: FormControl<string | null | undefined>,

		/** The content type of the file as specified in the request headers, multipart headers, or RUPIO start request. */
		fromHeader: FormControl<string | null | undefined>,

		/** The content type of the file derived from the file extension of the URL path. The URL path is assumed to represent a file name (which is typically only true for agents that are providing a REST API). */
		fromUrlPath: FormControl<string | null | undefined>,
	}
	export function CreateGdataContentTypeInfoFormGroup() {
		return new FormGroup<GdataContentTypeInfoFormProperties>({
			bestGuess: new FormControl<string | null | undefined>(undefined),
			fromBytes: new FormControl<string | null | undefined>(undefined),
			fromFileName: new FormControl<string | null | undefined>(undefined),
			fromHeader: new FormControl<string | null | undefined>(undefined),
			fromUrlPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Backend response for a Diff get checksums response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface GdataDiffChecksumsResponse {

		/** A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites. */
		checksumsLocation?: GdataCompositeMedia;

		/** The chunk size of checksums. Must be a multiple of 256KB. */
		chunkSizeBytes?: string | null;

		/** A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites. */
		objectLocation?: GdataCompositeMedia;

		/** The total size of the server object. */
		objectSizeBytes?: string | null;

		/** The object version of the object the checksums are being returned for. */
		objectVersion?: string | null;
	}

	/** Backend response for a Diff get checksums response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface GdataDiffChecksumsResponseFormProperties {

		/** The chunk size of checksums. Must be a multiple of 256KB. */
		chunkSizeBytes: FormControl<string | null | undefined>,

		/** The total size of the server object. */
		objectSizeBytes: FormControl<string | null | undefined>,

		/** The object version of the object the checksums are being returned for. */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateGdataDiffChecksumsResponseFormGroup() {
		return new FormGroup<GdataDiffChecksumsResponseFormProperties>({
			chunkSizeBytes: new FormControl<string | null | undefined>(undefined),
			objectSizeBytes: new FormControl<string | null | undefined>(undefined),
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Backend response for a Diff download response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface GdataDiffDownloadResponse {

		/** A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites. */
		objectLocation?: GdataCompositeMedia;
	}

	/** Backend response for a Diff download response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface GdataDiffDownloadResponseFormProperties {
	}
	export function CreateGdataDiffDownloadResponseFormGroup() {
		return new FormGroup<GdataDiffDownloadResponseFormProperties>({
		});

	}


	/** A Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface GdataDiffUploadRequest {

		/** A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites. */
		checksumsInfo?: GdataCompositeMedia;

		/** A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites. */
		objectInfo?: GdataCompositeMedia;

		/** The object version of the object that is the base version the incoming diff script will be applied to. This field will always be filled in. */
		objectVersion?: string | null;
	}

	/** A Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface GdataDiffUploadRequestFormProperties {

		/** The object version of the object that is the base version the incoming diff script will be applied to. This field will always be filled in. */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateGdataDiffUploadRequestFormGroup() {
		return new FormGroup<GdataDiffUploadRequestFormProperties>({
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Backend response for a Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface GdataDiffUploadResponse {

		/** The object version of the object at the server. Must be included in the end notification response. The version in the end notification response must correspond to the new version of the object that is now stored at the server, after the upload. */
		objectVersion?: string | null;

		/** A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites. */
		originalObject?: GdataCompositeMedia;
	}

	/** Backend response for a Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface GdataDiffUploadResponseFormProperties {

		/** The object version of the object at the server. Must be included in the end notification response. The version in the end notification response must correspond to the new version of the object that is now stored at the server, after the upload. */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateGdataDiffUploadResponseFormGroup() {
		return new FormGroup<GdataDiffUploadResponseFormProperties>({
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Backend response for a Diff get version response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface GdataDiffVersionResponse {

		/** The total size of the server object. */
		objectSizeBytes?: string | null;

		/** The version of the object stored at the server. */
		objectVersion?: string | null;
	}

	/** Backend response for a Diff get version response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
	export interface GdataDiffVersionResponseFormProperties {

		/** The total size of the server object. */
		objectSizeBytes: FormControl<string | null | undefined>,

		/** The version of the object stored at the server. */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateGdataDiffVersionResponseFormGroup() {
		return new FormGroup<GdataDiffVersionResponseFormProperties>({
			objectSizeBytes: new FormControl<string | null | undefined>(undefined),
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters specific to media downloads. */
	export interface GdataDownloadParameters {

		/** A boolean to be returned in the response to Scotty. Allows/disallows gzip encoding of the payload content when the server thinks it's advantageous (hence, does not guarantee compression) which allows Scotty to GZip the response to the client. */
		allowGzipCompression?: boolean | null;

		/** Determining whether or not Apiary should skip the inclusion of any Content-Range header on its response to Scotty. */
		ignoreRange?: boolean | null;
	}

	/** Parameters specific to media downloads. */
	export interface GdataDownloadParametersFormProperties {

		/** A boolean to be returned in the response to Scotty. Allows/disallows gzip encoding of the payload content when the server thinks it's advantageous (hence, does not guarantee compression) which allows Scotty to GZip the response to the client. */
		allowGzipCompression: FormControl<boolean | null | undefined>,

		/** Determining whether or not Apiary should skip the inclusion of any Content-Range header on its response to Scotty. */
		ignoreRange: FormControl<boolean | null | undefined>,
	}
	export function CreateGdataDownloadParametersFormGroup() {
		return new FormGroup<GdataDownloadParametersFormProperties>({
			allowGzipCompression: new FormControl<boolean | null | undefined>(undefined),
			ignoreRange: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A reference to data stored on the filesystem, on GFS or in blobstore. */
	export interface GdataMedia {

		/** Deprecated, use one of explicit hash type fields instead. Algorithm used for calculating the hash. As of 2011/01/21, "MD5" is the only possible value for this field. New values may be added at any time. */
		algorithm?: string | null;

		/** Use object_id instead. */
		bigstoreObjectRef?: string | null;

		/** Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef. */
		blobRef?: string | null;

		/** Information to read/write to blobstore2. */
		blobstore2Info?: GdataBlobstore2Info;

		/** A composite media composed of one or more media objects, set if reference_type is COMPOSITE_MEDIA. The media length field must be set to the sum of the lengths of all composite media objects. Note: All composite media must have length specified. */
		compositeMedia?: Array<GdataCompositeMedia>;

		/** MIME type of the data */
		contentType?: string | null;

		/** Detailed Content-Type information from Scotty. The Content-Type of the media will typically be filled in by the header or Scotty's best_guess, but this extended information provides the backend with more information so that it can make a better decision if needed. This is only used on media upload requests from Scotty. */
		contentTypeInfo?: GdataContentTypeInfo;

		/** A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field. */
		cosmoBinaryReference?: string | null;

		/**
		 * For Scotty Uploads: Scotty-provided hashes for uploads For Scotty Downloads: (WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM.) A Hash provided by the agent to be used to verify the data being downloaded. Currently only supported for inline payloads. Further, only crc32c_hash is currently supported.
		 * Type: uint, 0 to 4,294,967,295
		 */
		crc32cHash?: number | null;

		/** Backend response for a Diff get checksums response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
		diffChecksumsResponse?: GdataDiffChecksumsResponse;

		/** Backend response for a Diff download response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
		diffDownloadResponse?: GdataDiffDownloadResponse;

		/** A Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
		diffUploadRequest?: GdataDiffUploadRequest;

		/** Backend response for a Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
		diffUploadResponse?: GdataDiffUploadResponse;

		/** Backend response for a Diff get version response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol. */
		diffVersionResponse?: GdataDiffVersionResponse;

		/** Parameters specific to media downloads. */
		downloadParameters?: GdataDownloadParameters;

		/** Original file name */
		filename?: string | null;

		/** Deprecated, use one of explicit hash type fields instead. These two hash related fields will only be populated on Scotty based media uploads and will contain the content of the hash group in the NotificationRequest: http://cs/#google3/uploader/service/proto/upload_listener.proto&q=class:Hash Hex encoded hash value of the uploaded media. */
		hash?: string | null;

		/** For Scotty uploads only. If a user sends a hash code and the backend has requested that Scotty verify the upload against the client hash, Scotty will perform the check on behalf of the backend and will reject it if the hashes don't match. This is set to true if Scotty performed this verification. */
		hashVerified?: boolean | null;

		/** Media data, set if reference_type is INLINE */
		inline?: string | null;

		/** |is_potential_retry| is set false only when Scotty is certain that it has not sent the request before. When a client resumes an upload, this field must be set true in agent calls, because Scotty cannot be certain that it has never sent the request before due to potential failure in the session state persistence. */
		isPotentialRetry?: boolean | null;

		/** Size of the data, in bytes */
		length?: string | null;

		/** Scotty-provided MD5 hash for an upload. */
		md5Hash?: string | null;

		/** Media id to forward to the operation GetMedia. Can be set if reference_type is GET_MEDIA. */
		mediaId?: string | null;

		/** This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues with JavaScript support; see http://b/8801763. */
		objectId?: GdataObjectId;

		/** Path to the data, set if reference_type is PATH */
		path?: string | null;

		/** Describes what the field reference contains. */
		referenceType?: GdataMediaReferenceType | null;

		/** Scotty-provided SHA1 hash for an upload. */
		sha1Hash?: string | null;

		/** Scotty-provided SHA256 hash for an upload. */
		sha256Hash?: string | null;

		/** Time at which the media data was last updated, in milliseconds since UNIX epoch */
		timestamp?: string | null;

		/** A unique fingerprint/version id for the media data */
		token?: string | null;
	}

	/** A reference to data stored on the filesystem, on GFS or in blobstore. */
	export interface GdataMediaFormProperties {

		/** Deprecated, use one of explicit hash type fields instead. Algorithm used for calculating the hash. As of 2011/01/21, "MD5" is the only possible value for this field. New values may be added at any time. */
		algorithm: FormControl<string | null | undefined>,

		/** Use object_id instead. */
		bigstoreObjectRef: FormControl<string | null | undefined>,

		/** Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef. */
		blobRef: FormControl<string | null | undefined>,

		/** MIME type of the data */
		contentType: FormControl<string | null | undefined>,

		/** A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field. */
		cosmoBinaryReference: FormControl<string | null | undefined>,

		/**
		 * For Scotty Uploads: Scotty-provided hashes for uploads For Scotty Downloads: (WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM.) A Hash provided by the agent to be used to verify the data being downloaded. Currently only supported for inline payloads. Further, only crc32c_hash is currently supported.
		 * Type: uint, 0 to 4,294,967,295
		 */
		crc32cHash: FormControl<number | null | undefined>,

		/** Original file name */
		filename: FormControl<string | null | undefined>,

		/** Deprecated, use one of explicit hash type fields instead. These two hash related fields will only be populated on Scotty based media uploads and will contain the content of the hash group in the NotificationRequest: http://cs/#google3/uploader/service/proto/upload_listener.proto&q=class:Hash Hex encoded hash value of the uploaded media. */
		hash: FormControl<string | null | undefined>,

		/** For Scotty uploads only. If a user sends a hash code and the backend has requested that Scotty verify the upload against the client hash, Scotty will perform the check on behalf of the backend and will reject it if the hashes don't match. This is set to true if Scotty performed this verification. */
		hashVerified: FormControl<boolean | null | undefined>,

		/** Media data, set if reference_type is INLINE */
		inline: FormControl<string | null | undefined>,

		/** |is_potential_retry| is set false only when Scotty is certain that it has not sent the request before. When a client resumes an upload, this field must be set true in agent calls, because Scotty cannot be certain that it has never sent the request before due to potential failure in the session state persistence. */
		isPotentialRetry: FormControl<boolean | null | undefined>,

		/** Size of the data, in bytes */
		length: FormControl<string | null | undefined>,

		/** Scotty-provided MD5 hash for an upload. */
		md5Hash: FormControl<string | null | undefined>,

		/** Media id to forward to the operation GetMedia. Can be set if reference_type is GET_MEDIA. */
		mediaId: FormControl<string | null | undefined>,

		/** Path to the data, set if reference_type is PATH */
		path: FormControl<string | null | undefined>,

		/** Describes what the field reference contains. */
		referenceType: FormControl<GdataMediaReferenceType | null | undefined>,

		/** Scotty-provided SHA1 hash for an upload. */
		sha1Hash: FormControl<string | null | undefined>,

		/** Scotty-provided SHA256 hash for an upload. */
		sha256Hash: FormControl<string | null | undefined>,

		/** Time at which the media data was last updated, in milliseconds since UNIX epoch */
		timestamp: FormControl<string | null | undefined>,

		/** A unique fingerprint/version id for the media data */
		token: FormControl<string | null | undefined>,
	}
	export function CreateGdataMediaFormGroup() {
		return new FormGroup<GdataMediaFormProperties>({
			algorithm: new FormControl<string | null | undefined>(undefined),
			bigstoreObjectRef: new FormControl<string | null | undefined>(undefined),
			blobRef: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			cosmoBinaryReference: new FormControl<string | null | undefined>(undefined),
			crc32cHash: new FormControl<number | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			hashVerified: new FormControl<boolean | null | undefined>(undefined),
			inline: new FormControl<string | null | undefined>(undefined),
			isPotentialRetry: new FormControl<boolean | null | undefined>(undefined),
			length: new FormControl<string | null | undefined>(undefined),
			md5Hash: new FormControl<string | null | undefined>(undefined),
			mediaId: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			referenceType: new FormControl<GdataMediaReferenceType | null | undefined>(undefined),
			sha1Hash: new FormControl<string | null | undefined>(undefined),
			sha256Hash: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GdataMediaReferenceType { PATH = 'PATH', BLOB_REF = 'BLOB_REF', INLINE = 'INLINE', GET_MEDIA = 'GET_MEDIA', COMPOSITE_MEDIA = 'COMPOSITE_MEDIA', BIGSTORE_REF = 'BIGSTORE_REF', DIFF_VERSION_RESPONSE = 'DIFF_VERSION_RESPONSE', DIFF_CHECKSUMS_RESPONSE = 'DIFF_CHECKSUMS_RESPONSE', DIFF_DOWNLOAD_RESPONSE = 'DIFF_DOWNLOAD_RESPONSE', DIFF_UPLOAD_REQUEST = 'DIFF_UPLOAD_REQUEST', DIFF_UPLOAD_RESPONSE = 'DIFF_UPLOAD_RESPONSE', COSMO_BINARY_REFERENCE = 'COSMO_BINARY_REFERENCE', ARBITRARY_BYTES = 'ARBITRARY_BYTES' }


	/** Android App Bundle (AAB) information for a Firebase app. */
	export interface GoogleFirebaseAppdistroV1AabInfo {

		/** App bundle integration state. Only valid for android apps. */
		integrationState?: GoogleFirebaseAppdistroV1AabInfoIntegrationState | null;

		/** The name of the `AabInfo` resource. Format: `projects/{project_number}/apps/{app}/aabInfo` */
		name?: string | null;

		/** App bundle test certificate */
		testCertificate?: GoogleFirebaseAppdistroV1TestCertificate;
	}

	/** Android App Bundle (AAB) information for a Firebase app. */
	export interface GoogleFirebaseAppdistroV1AabInfoFormProperties {

		/** App bundle integration state. Only valid for android apps. */
		integrationState: FormControl<GoogleFirebaseAppdistroV1AabInfoIntegrationState | null | undefined>,

		/** The name of the `AabInfo` resource. Format: `projects/{project_number}/apps/{app}/aabInfo` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1AabInfoFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1AabInfoFormProperties>({
			integrationState: new FormControl<GoogleFirebaseAppdistroV1AabInfoIntegrationState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleFirebaseAppdistroV1AabInfoIntegrationState { AAB_INTEGRATION_STATE_UNSPECIFIED = 'AAB_INTEGRATION_STATE_UNSPECIFIED', INTEGRATED = 'INTEGRATED', PLAY_ACCOUNT_NOT_LINKED = 'PLAY_ACCOUNT_NOT_LINKED', NO_APP_WITH_GIVEN_BUNDLE_ID_IN_PLAY_ACCOUNT = 'NO_APP_WITH_GIVEN_BUNDLE_ID_IN_PLAY_ACCOUNT', APP_NOT_PUBLISHED = 'APP_NOT_PUBLISHED', AAB_STATE_UNAVAILABLE = 'AAB_STATE_UNAVAILABLE', PLAY_IAS_TERMS_NOT_ACCEPTED = 'PLAY_IAS_TERMS_NOT_ACCEPTED' }


	/** App bundle test certificate */
	export interface GoogleFirebaseAppdistroV1TestCertificate {

		/** Hex string of MD5 hash of the test certificate used to resign the AAB */
		hashMd5?: string | null;

		/** Hex string of SHA1 hash of the test certificate used to resign the AAB */
		hashSha1?: string | null;

		/** Hex string of SHA256 hash of the test certificate used to resign the AAB */
		hashSha256?: string | null;
	}

	/** App bundle test certificate */
	export interface GoogleFirebaseAppdistroV1TestCertificateFormProperties {

		/** Hex string of MD5 hash of the test certificate used to resign the AAB */
		hashMd5: FormControl<string | null | undefined>,

		/** Hex string of SHA1 hash of the test certificate used to resign the AAB */
		hashSha1: FormControl<string | null | undefined>,

		/** Hex string of SHA256 hash of the test certificate used to resign the AAB */
		hashSha256: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1TestCertificateFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1TestCertificateFormProperties>({
			hashMd5: new FormControl<string | null | undefined>(undefined),
			hashSha1: new FormControl<string | null | undefined>(undefined),
			hashSha256: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Request message for batch adding testers */
	export interface GoogleFirebaseAppdistroV1BatchAddTestersRequest {

		/** Required. The email addresses of the tester resources to create. A maximum of 999 and a minimum of 1 tester can be created in a batch. */
		emails?: Array<string>;
	}

	/** The Request message for batch adding testers */
	export interface GoogleFirebaseAppdistroV1BatchAddTestersRequestFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1BatchAddTestersRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1BatchAddTestersRequestFormProperties>({
		});

	}


	/** The Response message for `BatchAddTesters`. */
	export interface GoogleFirebaseAppdistroV1BatchAddTestersResponse {

		/** The testers which are created and/or already exist */
		testers?: Array<GoogleFirebaseAppdistroV1Tester>;
	}

	/** The Response message for `BatchAddTesters`. */
	export interface GoogleFirebaseAppdistroV1BatchAddTestersResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1BatchAddTestersResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1BatchAddTestersResponseFormProperties>({
		});

	}


	/** A person that can be invited to test apps in a Firebase project. */
	export interface GoogleFirebaseAppdistroV1Tester {

		/** The name of the tester associated with the Google account used to accept the tester invitation. */
		displayName?: string | null;

		/** The resource names of the groups this tester belongs to. */
		groups?: Array<string>;

		/** Output only. The time the tester was last active. This is the most recent time the tester installed one of the apps. If they've never installed one or if the release no longer exists, this is the time the tester was added to the project. */
		lastActivityTime?: string | null;

		/** The name of the tester resource. Format: `projects/{project_number}/testers/{email_address}` */
		name?: string | null;
	}

	/** A person that can be invited to test apps in a Firebase project. */
	export interface GoogleFirebaseAppdistroV1TesterFormProperties {

		/** The name of the tester associated with the Google account used to accept the tester invitation. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The time the tester was last active. This is the most recent time the tester installed one of the apps. If they've never installed one or if the release no longer exists, this is the time the tester was added to the project. */
		lastActivityTime: FormControl<string | null | undefined>,

		/** The name of the tester resource. Format: `projects/{project_number}/testers/{email_address}` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1TesterFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1TesterFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			lastActivityTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for `BatchDeleteReleases`. */
	export interface GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest {

		/** Required. The names of the release resources to delete. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}` A maximum of 100 releases can be deleted per request. */
		names?: Array<string>;
	}

	/** The request message for `BatchDeleteReleases`. */
	export interface GoogleFirebaseAppdistroV1BatchDeleteReleasesRequestFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1BatchDeleteReleasesRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1BatchDeleteReleasesRequestFormProperties>({
		});

	}


	/** The request message for `BatchJoinGroup` */
	export interface GoogleFirebaseAppdistroV1BatchJoinGroupRequest {

		/** Indicates whether to create tester resources based on `emails` if they don't exist yet. */
		createMissingTesters?: boolean | null;

		/** Required. The emails of the testers to be added to the group. A maximum of 999 and a minimum of 1 tester can be created in a batch. */
		emails?: Array<string>;
	}

	/** The request message for `BatchJoinGroup` */
	export interface GoogleFirebaseAppdistroV1BatchJoinGroupRequestFormProperties {

		/** Indicates whether to create tester resources based on `emails` if they don't exist yet. */
		createMissingTesters: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1BatchJoinGroupRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1BatchJoinGroupRequestFormProperties>({
			createMissingTesters: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for `BatchLeaveGroup` */
	export interface GoogleFirebaseAppdistroV1BatchLeaveGroupRequest {

		/** Required. The email addresses of the testers to be removed from the group. A maximum of 999 and a minimum of 1 testers can be removed in a batch. */
		emails?: Array<string>;
	}

	/** Request message for `BatchLeaveGroup` */
	export interface GoogleFirebaseAppdistroV1BatchLeaveGroupRequestFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1BatchLeaveGroupRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1BatchLeaveGroupRequestFormProperties>({
		});

	}


	/** The request message for `BatchRemoveTesters`. */
	export interface GoogleFirebaseAppdistroV1BatchRemoveTestersRequest {

		/** Required. The email addresses of the tester resources to removed. A maximum of 999 and a minimum of 1 testers can be deleted in a batch. */
		emails?: Array<string>;
	}

	/** The request message for `BatchRemoveTesters`. */
	export interface GoogleFirebaseAppdistroV1BatchRemoveTestersRequestFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1BatchRemoveTestersRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1BatchRemoveTestersRequestFormProperties>({
		});

	}


	/** The response message for `BatchRemoveTesters` */
	export interface GoogleFirebaseAppdistroV1BatchRemoveTestersResponse {

		/** List of deleted tester emails */
		emails?: Array<string>;
	}

	/** The response message for `BatchRemoveTesters` */
	export interface GoogleFirebaseAppdistroV1BatchRemoveTestersResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1BatchRemoveTestersResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1BatchRemoveTestersResponseFormProperties>({
		});

	}


	/** The request message for `DistributeRelease`. */
	export interface GoogleFirebaseAppdistroV1DistributeReleaseRequest {

		/** A list of group aliases (IDs) to be given access to this release. A combined maximum of 999 `testerEmails` and `groupAliases` can be specified in a single request. */
		groupAliases?: Array<string>;

		/** A list of tester email addresses to be given access to this release. A combined maximum of 999 `testerEmails` and `groupAliases` can be specified in a single request. */
		testerEmails?: Array<string>;
	}

	/** The request message for `DistributeRelease`. */
	export interface GoogleFirebaseAppdistroV1DistributeReleaseRequestFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1DistributeReleaseRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1DistributeReleaseRequestFormProperties>({
		});

	}


	/** The response message for `DistributeRelease`. */
	export interface GoogleFirebaseAppdistroV1DistributeReleaseResponse {
	}

	/** The response message for `DistributeRelease`. */
	export interface GoogleFirebaseAppdistroV1DistributeReleaseResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1DistributeReleaseResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1DistributeReleaseResponseFormProperties>({
		});

	}


	/** A feedback report submitted by a tester for a release. */
	export interface GoogleFirebaseAppdistroV1FeedbackReport {

		/** Output only. The time when the feedback report was created. */
		createTime?: string | null;

		/** Output only. A link to the Firebase console displaying the feedback report. */
		firebaseConsoleUri?: string | null;

		/** The name of the feedback report resource. Format: `projects/{project_number}/apps/{app}/releases/{release}/feedbackReports/{feedback_report}` */
		name?: string | null;

		/** Output only. A signed link (which expires in one hour) that lets you directly download the screenshot. */
		screenshotUri?: string | null;

		/** Output only. The resource name of the tester who submitted the feedback report. */
		tester?: string | null;

		/** Output only. The text of the feedback report. */
		text?: string | null;
	}

	/** A feedback report submitted by a tester for a release. */
	export interface GoogleFirebaseAppdistroV1FeedbackReportFormProperties {

		/** Output only. The time when the feedback report was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. A link to the Firebase console displaying the feedback report. */
		firebaseConsoleUri: FormControl<string | null | undefined>,

		/** The name of the feedback report resource. Format: `projects/{project_number}/apps/{app}/releases/{release}/feedbackReports/{feedback_report}` */
		name: FormControl<string | null | undefined>,

		/** Output only. A signed link (which expires in one hour) that lets you directly download the screenshot. */
		screenshotUri: FormControl<string | null | undefined>,

		/** Output only. The resource name of the tester who submitted the feedback report. */
		tester: FormControl<string | null | undefined>,

		/** Output only. The text of the feedback report. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1FeedbackReportFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1FeedbackReportFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			firebaseConsoleUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			screenshotUri: new FormControl<string | null | undefined>(undefined),
			tester: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A group which can contain testers. A group can be invited to test apps in a Firebase project. */
	export interface GoogleFirebaseAppdistroV1Group {

		/** Required. The display name of the group. */
		displayName?: string | null;

		/**
		 * Output only. The number of invite links for this group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		inviteLinkCount?: number | null;

		/** The name of the group resource. Format: `projects/{project_number}/groups/{group_alias}` */
		name?: string | null;

		/**
		 * Output only. The number of releases this group is permitted to access.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		releaseCount?: number | null;

		/**
		 * Output only. The number of testers who are members of this group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		testerCount?: number | null;
	}

	/** A group which can contain testers. A group can be invited to test apps in a Firebase project. */
	export interface GoogleFirebaseAppdistroV1GroupFormProperties {

		/** Required. The display name of the group. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Output only. The number of invite links for this group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		inviteLinkCount: FormControl<number | null | undefined>,

		/** The name of the group resource. Format: `projects/{project_number}/groups/{group_alias}` */
		name: FormControl<string | null | undefined>,

		/**
		 * Output only. The number of releases this group is permitted to access.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		releaseCount: FormControl<number | null | undefined>,

		/**
		 * Output only. The number of testers who are members of this group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		testerCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1GroupFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1GroupFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			inviteLinkCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			releaseCount: new FormControl<number | null | undefined>(undefined),
			testerCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response message for `ListFeedbackReports`. */
	export interface GoogleFirebaseAppdistroV1ListFeedbackReportsResponse {

		/** The feedback reports */
		feedbackReports?: Array<GoogleFirebaseAppdistroV1FeedbackReport>;

		/** A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** The response message for `ListFeedbackReports`. */
	export interface GoogleFirebaseAppdistroV1ListFeedbackReportsResponseFormProperties {

		/** A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1ListFeedbackReportsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1ListFeedbackReportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for `ListGroups`. */
	export interface GoogleFirebaseAppdistroV1ListGroupsResponse {

		/** The groups listed. */
		groups?: Array<GoogleFirebaseAppdistroV1Group>;

		/** A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** The response message for `ListGroups`. */
	export interface GoogleFirebaseAppdistroV1ListGroupsResponseFormProperties {

		/** A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1ListGroupsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1ListGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for `ListReleases`. */
	export interface GoogleFirebaseAppdistroV1ListReleasesResponse {

		/** A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The releases */
		releases?: Array<GoogleFirebaseAppdistroV1Release>;
	}

	/** The response message for `ListReleases`. */
	export interface GoogleFirebaseAppdistroV1ListReleasesResponseFormProperties {

		/** A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1ListReleasesResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1ListReleasesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A release of a Firebase app. */
	export interface GoogleFirebaseAppdistroV1Release {

		/** Output only. A signed link (which expires in one hour) to directly download the app binary (IPA/APK/AAB) file. */
		binaryDownloadUri?: string | null;

		/** Output only. Build version of the release. For an Android release, the build version is the `versionCode`. For an iOS release, the build version is the `CFBundleVersion`. */
		buildVersion?: string | null;

		/** Output only. The time the release was created. */
		createTime?: string | null;

		/** Output only. Display version of the release. For an Android release, the display version is the `versionName`. For an iOS release, the display version is the `CFBundleShortVersionString`. */
		displayVersion?: string | null;

		/** Output only. A link to the Firebase console displaying a single release. */
		firebaseConsoleUri?: string | null;

		/** The name of the release resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}` */
		name?: string | null;

		/** Notes that belong to a release. */
		releaseNotes?: GoogleFirebaseAppdistroV1ReleaseNotes;

		/** Output only. A link to the release in the tester web clip or Android app that lets testers (which were granted access to the app) view release notes and install the app onto their devices. */
		testingUri?: string | null;
	}

	/** A release of a Firebase app. */
	export interface GoogleFirebaseAppdistroV1ReleaseFormProperties {

		/** Output only. A signed link (which expires in one hour) to directly download the app binary (IPA/APK/AAB) file. */
		binaryDownloadUri: FormControl<string | null | undefined>,

		/** Output only. Build version of the release. For an Android release, the build version is the `versionCode`. For an iOS release, the build version is the `CFBundleVersion`. */
		buildVersion: FormControl<string | null | undefined>,

		/** Output only. The time the release was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Display version of the release. For an Android release, the display version is the `versionName`. For an iOS release, the display version is the `CFBundleShortVersionString`. */
		displayVersion: FormControl<string | null | undefined>,

		/** Output only. A link to the Firebase console displaying a single release. */
		firebaseConsoleUri: FormControl<string | null | undefined>,

		/** The name of the release resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}` */
		name: FormControl<string | null | undefined>,

		/** Output only. A link to the release in the tester web clip or Android app that lets testers (which were granted access to the app) view release notes and install the app onto their devices. */
		testingUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1ReleaseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1ReleaseFormProperties>({
			binaryDownloadUri: new FormControl<string | null | undefined>(undefined),
			buildVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			displayVersion: new FormControl<string | null | undefined>(undefined),
			firebaseConsoleUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			testingUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Notes that belong to a release. */
	export interface GoogleFirebaseAppdistroV1ReleaseNotes {

		/** The text of the release notes. */
		text?: string | null;
	}

	/** Notes that belong to a release. */
	export interface GoogleFirebaseAppdistroV1ReleaseNotesFormProperties {

		/** The text of the release notes. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1ReleaseNotesFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1ReleaseNotesFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for `ListTesters`. */
	export interface GoogleFirebaseAppdistroV1ListTestersResponse {

		/** A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The testers listed. */
		testers?: Array<GoogleFirebaseAppdistroV1Tester>;
	}

	/** The response message for `ListTesters`. */
	export interface GoogleFirebaseAppdistroV1ListTestersResponseFormProperties {

		/** A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1ListTestersResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1ListTestersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation metadata for `UploadRelease`. */
	export interface GoogleFirebaseAppdistroV1UploadReleaseMetadata {
	}

	/** Operation metadata for `UploadRelease`. */
	export interface GoogleFirebaseAppdistroV1UploadReleaseMetadataFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1UploadReleaseMetadataFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1UploadReleaseMetadataFormProperties>({
		});

	}


	/** Request message for `UploadRelease`. */
	export interface GoogleFirebaseAppdistroV1UploadReleaseRequest {

		/** A reference to data stored on the filesystem, on GFS or in blobstore. */
		blob?: GdataMedia;
	}

	/** Request message for `UploadRelease`. */
	export interface GoogleFirebaseAppdistroV1UploadReleaseRequestFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1UploadReleaseRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1UploadReleaseRequestFormProperties>({
		});

	}


	/** Response message for `UploadRelease`. */
	export interface GoogleFirebaseAppdistroV1UploadReleaseResponse {

		/** A release of a Firebase app. */
		release?: GoogleFirebaseAppdistroV1Release;

		/** Result of upload release. */
		result?: GoogleFirebaseAppdistroV1UploadReleaseResponseResult | null;
	}

	/** Response message for `UploadRelease`. */
	export interface GoogleFirebaseAppdistroV1UploadReleaseResponseFormProperties {

		/** Result of upload release. */
		result: FormControl<GoogleFirebaseAppdistroV1UploadReleaseResponseResult | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1UploadReleaseResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1UploadReleaseResponseFormProperties>({
			result: new FormControl<GoogleFirebaseAppdistroV1UploadReleaseResponseResult | null | undefined>(undefined),
		});

	}

	export enum GoogleFirebaseAppdistroV1UploadReleaseResponseResult { UPLOAD_RELEASE_RESULT_UNSPECIFIED = 'UPLOAD_RELEASE_RESULT_UNSPECIFIED', RELEASE_CREATED = 'RELEASE_CREATED', RELEASE_UPDATED = 'RELEASE_UPDATED', RELEASE_UNMODIFIED = 'RELEASE_UNMODIFIED' }


	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequestFormProperties {
	}
	export function CreateGoogleLongrunningCancelOperationRequestFormGroup() {
		return new FormGroup<GoogleLongrunningCancelOperationRequestFormProperties>({
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunningListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunningOperationFormGroup() {
		return new FormGroup<GoogleLongrunningOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Operations.WaitOperation. */
	export interface GoogleLongrunningWaitOperationRequest {

		/** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
		timeout?: string | null;
	}

	/** The request message for Operations.WaitOperation. */
	export interface GoogleLongrunningWaitOperationRequestFormProperties {

		/** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningWaitOperationRequestFormGroup() {
		return new FormGroup<GoogleLongrunningWaitOperationRequestFormProperties>({
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Batch adds members to a group. The testers will gain access to all releases that the groups have access to.
		 * Post v1/{group}:batchJoin
		 * @param {string} group Required. The name of the group resource to which testers are added. Format: `projects/{project_number}/groups/{group_alias}`
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Firebaseappdistribution_projects_groups_batchJoin(group: string, requestBody: GoogleFirebaseAppdistroV1BatchJoinGroupRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (group == null ? '' : encodeURIComponent(group)) + ':batchJoin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batch removed members from a group. The testers will lose access to all releases that the groups have access to.
		 * Post v1/{group}:batchLeave
		 * @param {string} group Required. The name of the group resource from which testers are removed. Format: `projects/{project_number}/groups/{group_alias}`
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Firebaseappdistribution_projects_groups_batchLeave(group: string, requestBody: GoogleFirebaseAppdistroV1BatchLeaveGroupRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (group == null ? '' : encodeURIComponent(group)) + ':batchLeave', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a group.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the group resource. Format: `projects/{project_number}/groups/{group_alias}`
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Firebaseappdistribution_projects_groups_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Get a group.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the group resource to retrieve. Format: `projects/{project_number}/groups/{group_alias}`
		 * @return {GoogleFirebaseAppdistroV1Group} Successful response
		 */
		Firebaseappdistribution_projects_groups_get(name: string): Observable<GoogleFirebaseAppdistroV1Group> {
			return this.http.get<GoogleFirebaseAppdistroV1Group>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update a tester. If the testers joins a group they gain access to all releases that the group has access to.
		 * Patch v1/{name}
		 * @param {string} name The name of the tester resource. Format: `projects/{project_number}/testers/{email_address}`
		 * @param {string} updateMask The list of fields to update.
		 * @return {GoogleFirebaseAppdistroV1Tester} Successful response
		 */
		Firebaseappdistribution_projects_testers_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleFirebaseAppdistroV1Tester): Observable<GoogleFirebaseAppdistroV1Tester> {
			return this.http.patch<GoogleFirebaseAppdistroV1Tester>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Firebaseappdistribution_projects_apps_releases_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Firebaseappdistribution_projects_apps_releases_operations_cancel(name: string, requestBody: GoogleLongrunningCancelOperationRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.
		 * Post v1/{name}:distribute
		 * @param {string} name Required. The name of the release resource to distribute. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}`
		 * @return {GoogleFirebaseAppdistroV1DistributeReleaseResponse} Successful response
		 */
		Firebaseappdistribution_projects_apps_releases_distribute(name: string, requestBody: GoogleFirebaseAppdistroV1DistributeReleaseRequest): Observable<GoogleFirebaseAppdistroV1DistributeReleaseResponse> {
			return this.http.post<GoogleFirebaseAppdistroV1DistributeReleaseResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':distribute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
		 * Post v1/{name}:wait
		 * @param {string} name The name of the operation resource to wait on.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Firebaseappdistribution_projects_apps_releases_operations_wait(name: string, requestBody: GoogleLongrunningWaitOperationRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':wait', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists feedback reports. By default, sorts by `createTime` in descending order.
		 * Get v1/{parent}/feedbackReports
		 * @param {string} parent Required. The name of the release resource, which is the parent of the feedback report resources. Format: `projects/{project_number}/apps/{app}/releases/{release}`
		 * @param {number} pageSize The maximum number of feedback reports to return. The service may return fewer than this value. The valid range is [1-100]; If unspecified (0), at most 25 feedback reports are returned. Values above 100 are coerced to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListFeedbackReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFeedbackReports` must match the call that provided the page token.
		 * @return {GoogleFirebaseAppdistroV1ListFeedbackReportsResponse} Successful response
		 */
		Firebaseappdistribution_projects_apps_releases_feedbackReports_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleFirebaseAppdistroV1ListFeedbackReportsResponse> {
			return this.http.get<GoogleFirebaseAppdistroV1ListFeedbackReportsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/feedbackReports&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List groups.
		 * Get v1/{parent}/groups
		 * @param {string} parent Required. The name of the project resource, which is the parent of the group resources. Format: `projects/{project_number}`
		 * @param {number} pageSize Optional. The maximum number of groups to return. The service may return fewer than this value. The valid range is [1-1000]; If unspecified (0), at most 25 groups are returned. Values above 1000 are coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A page token, received from a previous `ListGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGroups` must match the call that provided the page token.
		 * @return {GoogleFirebaseAppdistroV1ListGroupsResponse} Successful response
		 */
		Firebaseappdistribution_projects_groups_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleFirebaseAppdistroV1ListGroupsResponse> {
			return this.http.get<GoogleFirebaseAppdistroV1ListGroupsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/groups&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a group.
		 * Post v1/{parent}/groups
		 * @param {string} parent Required. The name of the project resource, which is the parent of the group resource. Format: `projects/{project_number}`
		 * @param {string} groupId Optional. The "alias" to use for the group, which will become the final component of the group's resource name. This value must be unique per project. The field is named `groupId` to comply with AIP guidance for user-specified IDs. This value should be 4-63 characters, and valid characters are `/a-z-/`. If not set, it will be generated based on the display name.
		 * @return {GoogleFirebaseAppdistroV1Group} Successful response
		 */
		Firebaseappdistribution_projects_groups_create(parent: string, groupId: string | null | undefined, requestBody: GoogleFirebaseAppdistroV1Group): Observable<GoogleFirebaseAppdistroV1Group> {
			return this.http.post<GoogleFirebaseAppdistroV1Group>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/groups&groupId=' + (groupId == null ? '' : encodeURIComponent(groupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists releases. By default, sorts by `createTime` in descending order.
		 * Get v1/{parent}/releases
		 * @param {string} parent Required. The name of the app resource, which is the parent of the release resources. Format: `projects/{project_number}/apps/{app_id}`
		 * @param {string} filter The expression to filter releases listed in the response. To learn more about filtering, refer to [Google's AIP-160 standard](http://aip.dev/160). Supported fields: - `releaseNotes.text` supports `=` (can contain a wildcard character (`*`) at the beginning or end of the string) - `createTime` supports `<`, `<=`, `>` and `>=`, and expects an RFC-3339 formatted string Examples: - `createTime <= "2021-09-08T00:00:00+04:00"` - `releaseNotes.text="fixes" AND createTime >= "2021-09-08T00:00:00.0Z"` - `releaseNotes.text="*v1.0.0-rc*"`
		 * @param {string} orderBy The fields used to order releases. Supported fields: - `createTime` To specify descending order for a field, append a "desc" suffix, for example, `createTime desc`. If this parameter is not set, releases are ordered by `createTime` in descending order.
		 * @param {number} pageSize The maximum number of releases to return. The service may return fewer than this value. The valid range is [1-100]; If unspecified (0), at most 25 releases are returned. Values above 100 are coerced to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReleases` must match the call that provided the page token.
		 * @return {GoogleFirebaseAppdistroV1ListReleasesResponse} Successful response
		 */
		Firebaseappdistribution_projects_apps_releases_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleFirebaseAppdistroV1ListReleasesResponse> {
			return this.http.get<GoogleFirebaseAppdistroV1ListReleasesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/releases&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Deletes releases. A maximum of 100 releases can be deleted per request.
		 * Post v1/{parent}/releases:batchDelete
		 * @param {string} parent Required. The name of the app resource, which is the parent of the release resources. Format: `projects/{project_number}/apps/{app_id}`
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Firebaseappdistribution_projects_apps_releases_batchDelete(parent: string, requestBody: GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/releases:batchDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists testers and their resource ids.
		 * Get v1/{parent}/testers
		 * @param {string} parent Required. The name of the project resource, which is the parent of the tester resources. Format: `projects/{project_number}`
		 * @param {string} filter Optional. The expression to filter testers listed in the response. To learn more about filtering, refer to [Google's AIP-160 standard](http://aip.dev/160). Supported fields: - `name` - `displayName` - `groups` Example: - `name = "projects/-/testers/*@example.com"` - `displayName = "Joe Sixpack"` - `groups = "projects/groups/qa-team"`
		 * @param {number} pageSize Optional. The maximum number of testers to return. The service may return fewer than this value. The valid range is [1-1000]; If unspecified (0), at most 10 testers are returned. Values above 1000 are coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A page token, received from a previous `ListTesters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTesters` must match the call that provided the page token.
		 * @return {GoogleFirebaseAppdistroV1ListTestersResponse} Successful response
		 */
		Firebaseappdistribution_projects_testers_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleFirebaseAppdistroV1ListTestersResponse> {
			return this.http.get<GoogleFirebaseAppdistroV1ListTestersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/testers&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.
		 * Post v1/{project}/testers:batchAdd
		 * @param {string} project Required. The name of the project resource. Format: `projects/{project_number}`
		 * @return {GoogleFirebaseAppdistroV1BatchAddTestersResponse} Successful response
		 */
		Firebaseappdistribution_projects_testers_batchAdd(project: string, requestBody: GoogleFirebaseAppdistroV1BatchAddTestersRequest): Observable<GoogleFirebaseAppdistroV1BatchAddTestersResponse> {
			return this.http.post<GoogleFirebaseAppdistroV1BatchAddTestersResponse>(this.baseUri + 'v1/' + (project == null ? '' : encodeURIComponent(project)) + '/testers:batchAdd', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.
		 * Post v1/{project}/testers:batchRemove
		 * @param {string} project Required. The name of the project resource. Format: `projects/{project_number}`
		 * @return {GoogleFirebaseAppdistroV1BatchRemoveTestersResponse} Successful response
		 */
		Firebaseappdistribution_projects_testers_batchRemove(project: string, requestBody: GoogleFirebaseAppdistroV1BatchRemoveTestersRequest): Observable<GoogleFirebaseAppdistroV1BatchRemoveTestersResponse> {
			return this.http.post<GoogleFirebaseAppdistroV1BatchRemoveTestersResponse>(this.baseUri + 'v1/' + (project == null ? '' : encodeURIComponent(project)) + '/testers:batchRemove', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

