import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Clear changes
		 * Clear the full history stored in the changes log
		 * Delete changes
		 * @return {void} 
		 */
		ChangesDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'changes', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List changes
		 * Whenever Orthanc receives a new DICOM instance, this event is recorded in the so-called _Changes Log_. This enables remote scripts to react to the arrival of new DICOM resources. A typical application is auto-routing, where an external script waits for a new DICOM instance to arrive into Orthanc, then forward this instance to another modality.
		 * Get changes
		 * @param {number} limit Limit the number of results
		 *     Type: double
		 * @param {number} since Show only the resources since the provided index
		 *     Type: double
		 */
		ChangesGetByLimitAndSince(limit: number | null | undefined, since: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'changes?limit=' + limit + '&since=' + since, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Clear exports
		 * Clear the full history stored in the exports log
		 * Delete exports
		 * @return {void} 
		 */
		ExportsDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'exports', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List exports
		 * For medical traceability, Orthanc can be configured to store a log of all the resources that have been exported to remote modalities. In auto-routing scenarios, it is important to prevent this log to grow indefinitely as incoming instances are routed. You can either disable this logging by setting the option `LogExportedResources` to `false` in the configuration file, or periodically clear this log by `DELETE`-ing this URI. This route might be removed in future versions of Orthanc.
		 * Get exports
		 * @param {number} limit Limit the number of results
		 *     Type: double
		 * @param {number} since Show only the resources since the provided index
		 *     Type: double
		 */
		ExportsGetByLimitAndSince(limit: number | null | undefined, since: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'exports?limit=' + limit + '&since=' + since, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List the available instances
		 * List the Orthanc identifiers of all the available DICOM instances
		 * Get instances
		 * @param {string} expand If present, retrieve detailed information about the individual instances
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {number} limit Limit the number of results
		 *     Type: double
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {number} since Show only the resources since the provided index
		 *     Type: double
		 */
		InstancesGetByExpandAndFullAndLimitAndRequestedTagsAndShortAndSince(expand: string | null | undefined, full: boolean | null | undefined, limit: number | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, since: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&full=' + full + '&limit=' + limit + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short + '&since=' + since, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete some instance
		 * Delete the DICOM instance whose Orthanc identifier is provided in the URL
		 * Delete instances/{id}
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @return {void} 
		 */
		Instances_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about some instance
		 * Get detailed information about the DICOM instance whose Orthanc identifier is provided in the URL
		 * Get instances/{id}
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {string} id Orthanc identifier of the instance of interest
		 */
		Instances_idGetByFullAndRequestedTagsAndShort(full: boolean | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '?full=' + full + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Anonymize instance
		 * Download an anonymized version of the DICOM instance whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#anonymization-of-a-single-instance
		 * Post instances/{id}/anonymize
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @return {void} 
		 */
		Instances_idAnonymizePost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/anonymize', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List attachments
		 * Get the list of attachments that are associated with the given instance
		 * Get instances/{id}/attachments
		 * @param {string} full If present, retrieve the attachments list and their numerical ids
		 * @param {string} id Orthanc identifier of the instance of interest
		 */
		Instances_idAttachmentsGetByFull(full: string | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments?full=' + (full == null ? '' : encodeURIComponent(full)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete attachment
		 * Delete an attachment associated with the given DICOM instance. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
		 * Delete instances/{id}/attachments/{name}
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Instances_idAttachments_nameDelete(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List operations on attachments
		 * Get the list of the operations that are available for attachments associated with the given instance
		 * Get instances/{id}/attachments/{name}
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 */
		Instances_idAttachments_nameGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Compress attachment
		 * Change the compression scheme that is used to store an attachment.
		 * Post instances/{id}/attachments/{name}/compress
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Instances_idAttachments_nameCompressPost(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/compress', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get attachment (no decompression)
		 * Get the (binary) content of one attachment associated with the given instance. The attachment will not be decompressed if `StorageCompression` is `true`.
		 * Get instances/{id}/attachments/{name}/compressed-data
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Instances_idAttachments_nameCompressed_dataGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/compressed-data', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get MD5 of attachment on disk
		 * Get the MD5 hash of one attachment associated with the given instance, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
		 * Get instances/{id}/attachments/{name}/compressed-md5
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Instances_idAttachments_nameCompressed_md5Get(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/compressed-md5', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get size of attachment on disk
		 * Get the size of one attachment associated with the given instance, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
		 * Get instances/{id}/attachments/{name}/compressed-size
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Instances_idAttachments_nameCompressed_sizeGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/compressed-size', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get attachment
		 * Get the (binary) content of one attachment associated with the given instance
		 * Get instances/{id}/attachments/{name}/data
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Instances_idAttachments_nameDataGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/data', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get info about the attachment
		 * Get all the information about the attachment associated with the given instance
		 * Get instances/{id}/attachments/{name}/info
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 */
		Instances_idAttachments_nameInfoGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/info', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Is attachment compressed?
		 * Test whether the attachment has been stored as a compressed file on the disk.
		 * Get instances/{id}/attachments/{name}/is-compressed
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Instances_idAttachments_nameIs_compressedGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/is-compressed', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get MD5 of attachment
		 * Get the MD5 hash of one attachment associated with the given instance
		 * Get instances/{id}/attachments/{name}/md5
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Instances_idAttachments_nameMd5Get(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/md5', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get size of attachment
		 * Get the size of one attachment associated with the given instance
		 * Get instances/{id}/attachments/{name}/size
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Instances_idAttachments_nameSizeGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/size', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Uncompress attachment
		 * Change the compression scheme that is used to store an attachment.
		 * Post instances/{id}/attachments/{name}/uncompress
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Instances_idAttachments_nameUncompressPost(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/uncompress', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify attachment
		 * Verify that the attachment is not corrupted, by validating its MD5 hash
		 * Post instances/{id}/attachments/{name}/verify-md5
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 */
		Instances_idAttachments_nameVerify_md5Post(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/verify-md5', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get raw tag
		 * Get the raw content of one DICOM tag in the hierarchy of DICOM dataset
		 * Get instances/{id}/content
		 * @param {string} ___ Path to the DICOM tag. This is the interleaving of one DICOM tag, possibly followed by an index for sequences. Sequences are accessible as, for instance, `/0008-1140/1/0008-1150`
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 * @return {void} 
		 */
		Instances_idContentGetBy___(___: string, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/content?___=' + (___ == null ? '' : encodeURIComponent(___)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Download DICOM
		 * Download one DICOM instance
		 * Get instances/{id}/file
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 * @return {void} 
		 */
		Instances_idFileGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/file', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List available frames
		 * List the frames that are available in the DICOM instance of interest
		 * Get instances/{id}/frames
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 */
		Instances_idFramesGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/frames', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List operations
		 * List the available operations under URI `/instances/{id}/frames/{frame}/`
		 * Get instances/{id}/frames/{frame}
		 */
		Instances_idFrames_frameGet(frame: string, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/frames/' + (frame == null ? '' : encodeURIComponent(frame)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Decode a frame (int16)
		 * Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [-32768,32767] range. Negative values must be interpreted according to two's complement.
		 * Get instances/{id}/frames/{frame}/image-int16
		 * @param {number} quality Quality for JPEG images (between 1 and 100, defaults to 90)
		 *     Type: double
		 * @param {boolean} returnUnsupportedImage Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)
		 * @param {number} frame Index of the frame (starts at `0`)
		 *     Type: double
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 * @return {void} 
		 */
		Instances_idFrames_frameImage_int16GetByQualityAndReturnUnsupportedImage(quality: number | null | undefined, returnUnsupportedImage: boolean | null | undefined, frame: number, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/frames/' + frame + '/image-int16?quality=' + quality + '&returnUnsupportedImage=' + returnUnsupportedImage, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Decode a frame (uint16)
		 * Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [0,65535] range.
		 * Get instances/{id}/frames/{frame}/image-uint16
		 * @param {number} quality Quality for JPEG images (between 1 and 100, defaults to 90)
		 *     Type: double
		 * @param {boolean} returnUnsupportedImage Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)
		 * @param {number} frame Index of the frame (starts at `0`)
		 *     Type: double
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 * @return {void} 
		 */
		Instances_idFrames_frameImage_uint16GetByQualityAndReturnUnsupportedImage(quality: number | null | undefined, returnUnsupportedImage: boolean | null | undefined, frame: number, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/frames/' + frame + '/image-uint16?quality=' + quality + '&returnUnsupportedImage=' + returnUnsupportedImage, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Decode a frame (uint8)
		 * Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [0,255] range.
		 * Get instances/{id}/frames/{frame}/image-uint8
		 * @param {number} quality Quality for JPEG images (between 1 and 100, defaults to 90)
		 *     Type: double
		 * @param {boolean} returnUnsupportedImage Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)
		 * @param {number} frame Index of the frame (starts at `0`)
		 *     Type: double
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 * @return {void} 
		 */
		Instances_idFrames_frameImage_uint8GetByQualityAndReturnUnsupportedImage(quality: number | null | undefined, returnUnsupportedImage: boolean | null | undefined, frame: number, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/frames/' + frame + '/image-uint8?quality=' + quality + '&returnUnsupportedImage=' + returnUnsupportedImage, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Decode frame for Matlab
		 * Decode one frame of interest from the given DICOM instance, and export this frame as a Octave/Matlab matrix to be imported with `eval()`: https://book.orthanc-server.com/faq/matlab.html
		 * Get instances/{id}/frames/{frame}/matlab
		 * @param {number} frame Index of the frame (starts at `0`)
		 *     Type: double
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 * @return {void} 
		 */
		Instances_idFrames_frameMatlabGet(frame: number, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/frames/' + frame + '/matlab', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Decode frame for numpy
		 * Decode one frame of interest from the given DICOM instance, for use with numpy in Python. The numpy array has 3 dimensions: (height, width, color channel).
		 * Get instances/{id}/frames/{frame}/numpy
		 * @param {boolean} compress Compress the file as `.npz`
		 * @param {boolean} rescale On grayscale images, apply the rescaling and return floating-point values
		 * @param {number} frame Index of the frame (starts at `0`)
		 *     Type: double
		 * @param {string} id Orthanc identifier of the DICOM resource of interest
		 * @return {void} 
		 */
		Instances_idFrames_frameNumpyGetByCompressAndRescale(compress: boolean | null | undefined, rescale: boolean | null | undefined, frame: number, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/frames/' + frame + '/numpy?compress=' + compress + '&rescale=' + rescale, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Decode a frame (preview)
		 * Decode one frame of interest from the given DICOM instance. The full dynamic range of grayscale images is rescaled to the [0,255] range.
		 * Get instances/{id}/frames/{frame}/preview
		 * @param {number} quality Quality for JPEG images (between 1 and 100, defaults to 90)
		 *     Type: double
		 * @param {boolean} returnUnsupportedImage Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)
		 * @param {number} frame Index of the frame (starts at `0`)
		 *     Type: double
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 * @return {void} 
		 */
		Instances_idFrames_framePreviewGetByQualityAndReturnUnsupportedImage(quality: number | null | undefined, returnUnsupportedImage: boolean | null | undefined, frame: number, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/frames/' + frame + '/preview?quality=' + quality + '&returnUnsupportedImage=' + returnUnsupportedImage, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Access raw frame
		 * Access the raw content of one individual frame of the DICOM instance of interest, bypassing image decoding. This is notably useful to access the source files in compressed transfer syntaxes.
		 * Get instances/{id}/frames/{frame}/raw
		 * @param {number} frame Index of the frame (starts at `0`)
		 *     Type: double
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @return {void} 
		 */
		Instances_idFrames_frameRawGet(frame: number, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/frames/' + frame + '/raw', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Access raw frame (compressed)
		 * Access the raw content of one individual frame of the DICOM instance of interest, bypassing image decoding. This is notably useful to access the source files in compressed transfer syntaxes. The image is compressed using gzip
		 * Get instances/{id}/frames/{frame}/raw.gz
		 * @param {number} frame Index of the frame (starts at `0`)
		 *     Type: double
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @return {void} 
		 */
		Instances_idFrames_frameRaw_gzGet(frame: number, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/frames/' + frame + '/raw.gz', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Render a frame
		 * Render one frame of interest from the given DICOM instance. This function takes scaling into account (`RescaleSlope` and `RescaleIntercept` tags), as well as the default windowing stored in the DICOM file (`WindowCenter` and `WindowWidth`tags), and can be used to resize the resulting image. Color images are not affected by windowing.
		 * Get instances/{id}/frames/{frame}/rendered
		 * @param {number} height Height of the resized image
		 *     Type: double
		 * @param {number} quality Quality for JPEG images (between 1 and 100, defaults to 90)
		 *     Type: double
		 * @param {boolean} returnUnsupportedImage Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)
		 * @param {boolean} smooth Whether to smooth image on resize
		 * @param {number} width Width of the resized image
		 *     Type: double
		 * @param {number} window_center Windowing center
		 *     Type: double
		 * @param {number} window_width Windowing width
		 *     Type: double
		 * @param {number} frame Index of the frame (starts at `0`)
		 *     Type: double
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 * @return {void} 
		 */
		Instances_idFrames_frameRenderedGetByHeightAndQualityAndReturnUnsupportedImageAndSmoothAndWidthAndWindow_centerAndWindow_width(height: number | null | undefined, quality: number | null | undefined, returnUnsupportedImage: boolean | null | undefined, smooth: boolean | null | undefined, width: number | null | undefined, window_center: number | null | undefined, window_width: number | null | undefined, frame: number, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/frames/' + frame + '/rendered?height=' + height + '&quality=' + quality + '&returnUnsupportedImage=' + returnUnsupportedImage + '&smooth=' + smooth + '&width=' + width + '&window_center=' + window_center + '&window_width=' + window_width, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get DICOM meta-header
		 * Get the DICOM tags in the meta-header of the DICOM instance. By default, the `full` format is used, which combines hexadecimal tags with human-readable description.
		 * Get instances/{id}/header
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {boolean} simplify If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 */
		Instances_idHeaderGetByShortAndSimplify(short: boolean | null | undefined, simplify: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/header?short=' + short + '&simplify=' + simplify, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Decode an image (int16)
		 * Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [-32768,32767] range. Negative values must be interpreted according to two's complement.
		 * Get instances/{id}/image-int16
		 * @param {number} quality Quality for JPEG images (between 1 and 100, defaults to 90)
		 *     Type: double
		 * @param {boolean} returnUnsupportedImage Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 * @return {void} 
		 */
		Instances_idImage_int16GetByQualityAndReturnUnsupportedImage(quality: number | null | undefined, returnUnsupportedImage: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/image-int16?quality=' + quality + '&returnUnsupportedImage=' + returnUnsupportedImage, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Decode an image (uint16)
		 * Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [0,65535] range.
		 * Get instances/{id}/image-uint16
		 * @param {number} quality Quality for JPEG images (between 1 and 100, defaults to 90)
		 *     Type: double
		 * @param {boolean} returnUnsupportedImage Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 * @return {void} 
		 */
		Instances_idImage_uint16GetByQualityAndReturnUnsupportedImage(quality: number | null | undefined, returnUnsupportedImage: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/image-uint16?quality=' + quality + '&returnUnsupportedImage=' + returnUnsupportedImage, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Decode an image (uint8)
		 * Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [0,255] range.
		 * Get instances/{id}/image-uint8
		 * @param {number} quality Quality for JPEG images (between 1 and 100, defaults to 90)
		 *     Type: double
		 * @param {boolean} returnUnsupportedImage Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 * @return {void} 
		 */
		Instances_idImage_uint8GetByQualityAndReturnUnsupportedImage(quality: number | null | undefined, returnUnsupportedImage: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/image-uint8?quality=' + quality + '&returnUnsupportedImage=' + returnUnsupportedImage, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List labels
		 * Get the labels that are associated with the given instance (new in Orthanc 1.12.0)
		 * Get instances/{id}/labels
		 * @param {string} id Orthanc identifier of the instance of interest
		 */
		Instances_idLabelsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/labels', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove label
		 * Remove a label associated with a instance
		 * Delete instances/{id}/labels/{label}
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} label The label to be removed
		 * @return {void} 
		 */
		Instances_idLabels_labelDelete(id: string, label: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/labels/' + (label == null ? '' : encodeURIComponent(label)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Test label
		 * Test whether the instance is associated with the given label
		 * Get instances/{id}/labels/{label}
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} label The label of interest
		 * @return {void} 
		 */
		Instances_idLabels_labelGet(id: string, label: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/labels/' + (label == null ? '' : encodeURIComponent(label)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add label
		 * Associate a label with a instance
		 * Put instances/{id}/labels/{label}
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} label The label to be added
		 * @return {void} 
		 */
		Instances_idLabels_labelPut(id: string, label: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/labels/' + (label == null ? '' : encodeURIComponent(label)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Decode frame for Matlab
		 * Decode the first frame of the given DICOM instance., and export this frame as a Octave/Matlab matrix to be imported with `eval()`: https://book.orthanc-server.com/faq/matlab.html
		 * Get instances/{id}/matlab
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 * @return {void} 
		 */
		Instances_idMatlabGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/matlab', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List metadata
		 * Get the list of metadata that are associated with the given instance
		 * Get instances/{id}/metadata
		 * @param {string} expand If present, also retrieve the value of the individual metadata
		 * @param {string} numeric If present, use the numeric identifier of the metadata instead of its symbolic name
		 * @param {string} id Orthanc identifier of the instance of interest
		 */
		Instances_idMetadataGetByExpandAndNumeric(expand: string | null | undefined, numeric: string | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/metadata?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&numeric=' + (numeric == null ? '' : encodeURIComponent(numeric)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete metadata
		 * Delete some metadata associated with the given DICOM instance. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
		 * Delete instances/{id}/metadata/{name}
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} name The name of the metadata, or its index (cf. `UserMetadata` configuration option)
		 * @return {void} 
		 */
		Instances_idMetadata_nameDelete(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/metadata/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get metadata
		 * Get the value of a metadata that is associated with the given instance
		 * Get instances/{id}/metadata/{name}
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @param {string} name The name of the metadata, or its index (cf. `UserMetadata` configuration option)
		 * @return {void} 
		 */
		Instances_idMetadata_nameGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/metadata/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modify instance
		 * Download a modified version of the DICOM instance whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#modification-of-a-single-instance
		 * Post instances/{id}/modify
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @return {void} 
		 */
		Instances_idModifyPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/modify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get instance module
		 * Get the instance module of the DICOM instance whose Orthanc identifier is provided in the URL
		 * Get instances/{id}/module
		 * @param {Array<string>} ignore_length Also include the DICOM tags that are provided in this list, even if their associated value is long
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {boolean} simplify If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)
		 * @param {string} id Orthanc identifier of the instance of interest
		 */
		Instances_idModuleGetByIgnore_lengthAndShortAndSimplify(ignore_length: Array<string> | null | undefined, short: boolean | null | undefined, simplify: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/module?' + ignore_length?.map(z => `ignore-length=${encodeURIComponent(z)}`).join('&') + '&short=' + short + '&simplify=' + simplify, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Decode instance for numpy
		 * Decode the given DICOM instance, for use with numpy in Python. The numpy array has 4 dimensions: (frame, height, width, color channel).
		 * Get instances/{id}/numpy
		 * @param {boolean} compress Compress the file as `.npz`
		 * @param {boolean} rescale On grayscale images, apply the rescaling and return floating-point values
		 * @param {string} id Orthanc identifier of the DICOM resource of interest
		 * @return {void} 
		 */
		Instances_idNumpyGetByCompressAndRescale(compress: boolean | null | undefined, rescale: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/numpy?compress=' + compress + '&rescale=' + rescale, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get parent patient
		 * Get detailed information about the parent patient of the DICOM instance whose Orthanc identifier is provided in the URL
		 * Get instances/{id}/patient
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {string} id Orthanc identifier of the instance of interest
		 */
		Instances_idPatientGetByFullAndRequestedTagsAndShort(full: boolean | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/patient?full=' + full + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get embedded PDF
		 * Get the PDF file that is embedded in one DICOM instance. If the DICOM instance doesn't contain the `EncapsulatedDocument` tag or if the `MIMETypeOfEncapsulatedDocument` tag doesn't correspond to the PDF type, a `404` HTTP error is raised.
		 * Get instances/{id}/pdf
		 * @param {string} id Orthanc identifier of the instance interest
		 * @return {void} 
		 */
		Instances_idPdfGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/pdf', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Decode an image (preview)
		 * Decode the first frame of the given DICOM instance. The full dynamic range of grayscale images is rescaled to the [0,255] range.
		 * Get instances/{id}/preview
		 * @param {number} quality Quality for JPEG images (between 1 and 100, defaults to 90)
		 *     Type: double
		 * @param {boolean} returnUnsupportedImage Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 * @return {void} 
		 */
		Instances_idPreviewGetByQualityAndReturnUnsupportedImage(quality: number | null | undefined, returnUnsupportedImage: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/preview?quality=' + quality + '&returnUnsupportedImage=' + returnUnsupportedImage, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reconstruct tags & optionally files of instance
		 * Reconstruct the main DICOM tags in DB of the instance whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
		 * Post instances/{id}/reconstruct
		 * @param {string} id Orthanc identifier of the instance of interest
		 * @return {void} 
		 */
		Instances_idReconstructPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/reconstruct', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Render an image
		 * Render the first frame of the given DICOM instance. This function takes scaling into account (`RescaleSlope` and `RescaleIntercept` tags), as well as the default windowing stored in the DICOM file (`WindowCenter` and `WindowWidth`tags), and can be used to resize the resulting image. Color images are not affected by windowing.
		 * Get instances/{id}/rendered
		 * @param {number} height Height of the resized image
		 *     Type: double
		 * @param {number} quality Quality for JPEG images (between 1 and 100, defaults to 90)
		 *     Type: double
		 * @param {boolean} returnUnsupportedImage Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)
		 * @param {boolean} smooth Whether to smooth image on resize
		 * @param {number} width Width of the resized image
		 *     Type: double
		 * @param {number} window_center Windowing center
		 *     Type: double
		 * @param {number} window_width Windowing width
		 *     Type: double
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 * @return {void} 
		 */
		Instances_idRenderedGetByHeightAndQualityAndReturnUnsupportedImageAndSmoothAndWidthAndWindow_centerAndWindow_width(height: number | null | undefined, quality: number | null | undefined, returnUnsupportedImage: boolean | null | undefined, smooth: boolean | null | undefined, width: number | null | undefined, window_center: number | null | undefined, window_width: number | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/rendered?height=' + height + '&quality=' + quality + '&returnUnsupportedImage=' + returnUnsupportedImage + '&smooth=' + smooth + '&width=' + width + '&window_center=' + window_center + '&window_width=' + window_width, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get parent series
		 * Get detailed information about the parent series of the DICOM instance whose Orthanc identifier is provided in the URL
		 * Get instances/{id}/series
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {string} id Orthanc identifier of the instance of interest
		 */
		Instances_idSeriesGetByFullAndRequestedTagsAndShort(full: boolean | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/series?full=' + full + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get human-readable tags
		 * Get the DICOM tags in human-readable format (same as the `/instances/{id}/tags?simplify` route)
		 * Get instances/{id}/simplified-tags
		 * @param {Array<string>} ignore_length Also include the DICOM tags that are provided in this list, even if their associated value is long
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 */
		Instances_idSimplified_tagsGetByIgnore_length(ignore_length: Array<string> | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/simplified-tags?' + ignore_length?.map(z => `ignore-length=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get instance statistics
		 * Get statistics about the given instance
		 * Get instances/{id}/statistics
		 * @param {string} id Orthanc identifier of the instance of interest
		 */
		Instances_idStatisticsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/statistics', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get parent study
		 * Get detailed information about the parent study of the DICOM instance whose Orthanc identifier is provided in the URL
		 * Get instances/{id}/study
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {string} id Orthanc identifier of the instance of interest
		 */
		Instances_idStudyGetByFullAndRequestedTagsAndShort(full: boolean | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/study?full=' + full + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get DICOM tags
		 * Get the DICOM tags in the specified format. By default, the `full` format is used, which combines hexadecimal tags with human-readable description.
		 * Get instances/{id}/tags
		 * @param {Array<string>} ignore_length Also include the DICOM tags that are provided in this list, even if their associated value is long
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {boolean} simplify If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)
		 * @param {string} id Orthanc identifier of the DICOM instance of interest
		 */
		Instances_idTagsGetByIgnore_lengthAndShortAndSimplify(ignore_length: Array<string> | null | undefined, short: boolean | null | undefined, simplify: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'instances/' + (id == null ? '' : encodeURIComponent(id)) + '/tags?' + ignore_length?.map(z => `ignore-length=${encodeURIComponent(z)}`).join('&') + '&short=' + short + '&simplify=' + simplify, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List jobs
		 * List all the available jobs
		 * Get jobs
		 * @param {string} expand If present, retrieve detailed information about the individual jobs
		 */
		JobsGetByExpand(expand: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'jobs?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get job
		 * Retrieve detailed information about the job whose identifier is provided in the URL: https://book.orthanc-server.com/users/advanced-rest.html#jobs
		 * Get jobs/{id}
		 * @param {string} id Identifier of the job of interest
		 */
		Jobs_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'jobs/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel job
		 * Cancel the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
		 * Post jobs/{id}/cancel
		 * @param {string} id Identifier of the job of interest
		 */
		Jobs_idCancelPost(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobs/' + (id == null ? '' : encodeURIComponent(id)) + '/cancel', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Pause job
		 * Pause the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
		 * Post jobs/{id}/pause
		 * @param {string} id Identifier of the job of interest
		 */
		Jobs_idPausePost(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobs/' + (id == null ? '' : encodeURIComponent(id)) + '/pause', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resubmit job
		 * Resubmit the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
		 * Post jobs/{id}/resubmit
		 * @param {string} id Identifier of the job of interest
		 */
		Jobs_idResubmitPost(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobs/' + (id == null ? '' : encodeURIComponent(id)) + '/resubmit', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resume job
		 * Resume the job whose identifier is provided in the URL. Check out the Orthanc Book for more information about the state machine applicable to jobs: https://book.orthanc-server.com/users/advanced-rest.html#jobs
		 * Post jobs/{id}/resume
		 * @param {string} id Identifier of the job of interest
		 */
		Jobs_idResumePost(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobs/' + (id == null ? '' : encodeURIComponent(id)) + '/resume', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get job output
		 * Retrieve some output produced by a job. As of Orthanc 1.8.2, only the jobs that generate a DICOMDIR media or a ZIP archive provide such an output (with `key` equals to `archive`).
		 * Get jobs/{id}/{key}
		 * @param {string} id Identifier of the job of interest
		 * @param {string} key Name of the output of interest
		 * @return {void} 
		 */
		Jobs_id_keyGet(id: string, key: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'jobs/' + (id == null ? '' : encodeURIComponent(id)) + '/' + (key == null ? '' : encodeURIComponent(key)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List DICOM modalities
		 * List all the DICOM modalities that are known to Orthanc. This corresponds either to the content of the `DicomModalities` configuration option, or to the information stored in the database if `DicomModalitiesInDatabase` is `true`.
		 * Get modalities
		 * @param {string} expand If present, retrieve detailed information about the individual DICOM modalities
		 */
		ModalitiesGetByExpand(expand: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'modalities?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete DICOM modality
		 * Delete one DICOM modality. This change is permanent iff. `DicomModalitiesInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
		 * Delete modalities/{id}
		 * @param {string} id Identifier of the DICOM modality of interest
		 * @return {void} 
		 */
		Modalities_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'modalities/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List operations on modality
		 * List the operations that are available for a DICOM modality.
		 * Get modalities/{id}
		 * @param {string} id Identifier of the DICOM modality of interest
		 */
		Modalities_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'modalities/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update DICOM modality
		 * Define a new DICOM modality, or update an existing one. This change is permanent iff. `DicomModalitiesInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
		 * Put modalities/{id}
		 * @param {string} id Identifier of the new/updated DICOM modality
		 * @return {void} 
		 */
		Modalities_idPut(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'modalities/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get modality configuration
		 * Get detailed information about the configuration of some DICOM modality
		 * Get modalities/{id}/configuration
		 * @param {string} id Identifier of the modality of interest
		 */
		Modalities_idConfigurationGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'modalities/' + (id == null ? '' : encodeURIComponent(id)) + '/configuration', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Trigger C-ECHO SCU
		 * Trigger C-ECHO SCU command against the DICOM modality whose identifier is provided in URL: https://book.orthanc-server.com/users/rest.html#performing-c-echo
		 * Post modalities/{id}/echo
		 * @param {string} id Identifier of the modality of interest
		 * @return {void} 
		 */
		Modalities_idEchoPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'modalities/' + (id == null ? '' : encodeURIComponent(id)) + '/echo', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Hierarchical C-FIND SCU
		 * Trigger a sequence of C-FIND SCU commands against the DICOM modality whose identifier is provided in URL, in order to discover a hierarchy of matching patients/studies/series. Deprecated in favor of `/modalities/{id}/query`.
		 * Post modalities/{id}/find
		 * @param {string} id Identifier of the modality of interest
		 */
		Modalities_idFindPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'modalities/' + (id == null ? '' : encodeURIComponent(id)) + '/find', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * C-FIND SCU for instances
		 * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find an instance. Deprecated in favor of `/modalities/{id}/query`.
		 * Post modalities/{id}/find-instance
		 * @param {string} id Identifier of the modality of interest
		 */
		Modalities_idFind_instancePost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'modalities/' + (id == null ? '' : encodeURIComponent(id)) + '/find-instance', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * C-FIND SCU for patients
		 * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a patient. Deprecated in favor of `/modalities/{id}/query`.
		 * Post modalities/{id}/find-patient
		 * @param {string} id Identifier of the modality of interest
		 */
		Modalities_idFind_patientPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'modalities/' + (id == null ? '' : encodeURIComponent(id)) + '/find-patient', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * C-FIND SCU for series
		 * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a series. Deprecated in favor of `/modalities/{id}/query`.
		 * Post modalities/{id}/find-series
		 * @param {string} id Identifier of the modality of interest
		 */
		Modalities_idFind_seriesPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'modalities/' + (id == null ? '' : encodeURIComponent(id)) + '/find-series', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * C-FIND SCU for studies
		 * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL, in order to find a study. Deprecated in favor of `/modalities/{id}/query`.
		 * Post modalities/{id}/find-study
		 * @param {string} id Identifier of the modality of interest
		 */
		Modalities_idFind_studyPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'modalities/' + (id == null ? '' : encodeURIComponent(id)) + '/find-study', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * C-FIND SCU for worklist
		 * Trigger C-FIND SCU command against the remote worklists of the DICOM modality whose identifier is provided in URL
		 * Post modalities/{id}/find-worklist
		 * @param {string} id Identifier of the modality of interest
		 */
		Modalities_idFind_worklistPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'modalities/' + (id == null ? '' : encodeURIComponent(id)) + '/find-worklist', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Trigger C-MOVE SCU
		 * Start a C-MOVE SCU command as a job, in order to drive the execution of a sequence of C-STORE commands by some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-c-move
		 * Post modalities/{id}/move
		 * @param {string} id Identifier of the modality of interest
		 */
		Modalities_idMovePost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'modalities/' + (id == null ? '' : encodeURIComponent(id)) + '/move', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Trigger C-FIND SCU
		 * Trigger C-FIND SCU command against the DICOM modality whose identifier is provided in URL: https://book.orthanc-server.com/users/rest.html#performing-query-retrieve-c-find-and-find-with-rest
		 * Post modalities/{id}/query
		 * @param {string} id Identifier of the modality of interest
		 */
		Modalities_idQueryPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'modalities/' + (id == null ? '' : encodeURIComponent(id)) + '/query', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Trigger storage commitment request
		 * Trigger a storage commitment request to some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/storage-commitment.html#storage-commitment-scu
		 * Post modalities/{id}/storage-commitment
		 * @param {string} id Identifier of the modality of interest
		 */
		Modalities_idStorage_commitmentPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'modalities/' + (id == null ? '' : encodeURIComponent(id)) + '/storage-commitment', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Trigger C-STORE SCU
		 * Start a C-STORE SCU command as a job, in order to send DICOM resources stored locally to some remote DICOM modality whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#rest-store-scu
		 * Post modalities/{id}/store
		 * @param {string} id Identifier of the modality of interest
		 */
		Modalities_idStorePost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'modalities/' + (id == null ? '' : encodeURIComponent(id)) + '/store', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List the available patients
		 * List the Orthanc identifiers of all the available DICOM patients
		 * Get patients
		 * @param {string} expand If present, retrieve detailed information about the individual patients
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {number} limit Limit the number of results
		 *     Type: double
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {number} since Show only the resources since the provided index
		 *     Type: double
		 */
		PatientsGetByExpandAndFullAndLimitAndRequestedTagsAndShortAndSince(expand: string | null | undefined, full: boolean | null | undefined, limit: number | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, since: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&full=' + full + '&limit=' + limit + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short + '&since=' + since, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete some patient
		 * Delete the DICOM patient whose Orthanc identifier is provided in the URL
		 * Delete patients/{id}
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @return {void} 
		 */
		Patients_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about some patient
		 * Get detailed information about the DICOM patient whose Orthanc identifier is provided in the URL
		 * Get patients/{id}
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {string} id Orthanc identifier of the patient of interest
		 */
		Patients_idGetByFullAndRequestedTagsAndShort(full: boolean | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '?full=' + full + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Anonymize patient
		 * Start a job that will anonymize all the DICOM instances within the patient whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new patient, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series
		 * Post patients/{id}/anonymize
		 * @param {string} id Orthanc identifier of the patient of interest
		 */
		Patients_idAnonymizePost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/anonymize', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Create ZIP archive
		 * Synchronously create a ZIP archive containing the DICOM patient whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
		 * Get patients/{id}/archive
		 * @param {string} filename Filename to set in the "Content-Disposition" HTTP header (including file extension)
		 * @param {string} transcode If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @return {void} 
		 */
		Patients_idArchiveGetByFilenameAndTranscode(filename: string | null | undefined, transcode: string | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/archive?filename=' + (filename == null ? '' : encodeURIComponent(filename)) + '&transcode=' + (transcode == null ? '' : encodeURIComponent(transcode)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create ZIP archive
		 * Create a ZIP archive containing the DICOM patient whose Orthanc identifier is provided in the URL
		 * Post patients/{id}/archive
		 * @param {string} id Orthanc identifier of the patient of interest
		 */
		Patients_idArchivePost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/archive', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List attachments
		 * Get the list of attachments that are associated with the given patient
		 * Get patients/{id}/attachments
		 * @param {string} full If present, retrieve the attachments list and their numerical ids
		 * @param {string} id Orthanc identifier of the patient of interest
		 */
		Patients_idAttachmentsGetByFull(full: string | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments?full=' + (full == null ? '' : encodeURIComponent(full)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete attachment
		 * Delete an attachment associated with the given DICOM patient. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
		 * Delete patients/{id}/attachments/{name}
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Patients_idAttachments_nameDelete(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List operations on attachments
		 * Get the list of the operations that are available for attachments associated with the given patient
		 * Get patients/{id}/attachments/{name}
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 */
		Patients_idAttachments_nameGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Compress attachment
		 * Change the compression scheme that is used to store an attachment.
		 * Post patients/{id}/attachments/{name}/compress
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Patients_idAttachments_nameCompressPost(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/compress', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get attachment (no decompression)
		 * Get the (binary) content of one attachment associated with the given patient. The attachment will not be decompressed if `StorageCompression` is `true`.
		 * Get patients/{id}/attachments/{name}/compressed-data
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Patients_idAttachments_nameCompressed_dataGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/compressed-data', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get MD5 of attachment on disk
		 * Get the MD5 hash of one attachment associated with the given patient, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
		 * Get patients/{id}/attachments/{name}/compressed-md5
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Patients_idAttachments_nameCompressed_md5Get(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/compressed-md5', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get size of attachment on disk
		 * Get the size of one attachment associated with the given patient, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
		 * Get patients/{id}/attachments/{name}/compressed-size
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Patients_idAttachments_nameCompressed_sizeGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/compressed-size', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get attachment
		 * Get the (binary) content of one attachment associated with the given patient
		 * Get patients/{id}/attachments/{name}/data
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Patients_idAttachments_nameDataGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/data', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get info about the attachment
		 * Get all the information about the attachment associated with the given patient
		 * Get patients/{id}/attachments/{name}/info
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 */
		Patients_idAttachments_nameInfoGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/info', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Is attachment compressed?
		 * Test whether the attachment has been stored as a compressed file on the disk.
		 * Get patients/{id}/attachments/{name}/is-compressed
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Patients_idAttachments_nameIs_compressedGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/is-compressed', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get MD5 of attachment
		 * Get the MD5 hash of one attachment associated with the given patient
		 * Get patients/{id}/attachments/{name}/md5
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Patients_idAttachments_nameMd5Get(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/md5', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get size of attachment
		 * Get the size of one attachment associated with the given patient
		 * Get patients/{id}/attachments/{name}/size
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Patients_idAttachments_nameSizeGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/size', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Uncompress attachment
		 * Change the compression scheme that is used to store an attachment.
		 * Post patients/{id}/attachments/{name}/uncompress
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Patients_idAttachments_nameUncompressPost(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/uncompress', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify attachment
		 * Verify that the attachment is not corrupted, by validating its MD5 hash
		 * Post patients/{id}/attachments/{name}/verify-md5
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 */
		Patients_idAttachments_nameVerify_md5Post(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/verify-md5', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get child instances
		 * Get detailed information about the child instances of the DICOM patient whose Orthanc identifier is provided in the URL
		 * Get patients/{id}/instances
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {string} id Orthanc identifier of the patient of interest
		 */
		Patients_idInstancesGetByFullAndRequestedTagsAndShort(full: boolean | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/instances?full=' + full + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get tags of instances
		 * Get the tags of all the child instances of the DICOM patient whose Orthanc identifier is provided in the URL
		 * Get patients/{id}/instances-tags
		 * @param {Array<string>} ignore_length Also include the DICOM tags that are provided in this list, even if their associated value is long
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {boolean} simplify If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)
		 * @param {string} id Orthanc identifier of the patient of interest
		 */
		Patients_idInstances_tagsGetByIgnore_lengthAndShortAndSimplify(ignore_length: Array<string> | null | undefined, short: boolean | null | undefined, simplify: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/instances-tags?' + ignore_length?.map(z => `ignore-length=${encodeURIComponent(z)}`).join('&') + '&short=' + short + '&simplify=' + simplify, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List labels
		 * Get the labels that are associated with the given patient (new in Orthanc 1.12.0)
		 * Get patients/{id}/labels
		 * @param {string} id Orthanc identifier of the patient of interest
		 */
		Patients_idLabelsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/labels', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove label
		 * Remove a label associated with a patient
		 * Delete patients/{id}/labels/{label}
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} label The label to be removed
		 * @return {void} 
		 */
		Patients_idLabels_labelDelete(id: string, label: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/labels/' + (label == null ? '' : encodeURIComponent(label)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Test label
		 * Test whether the patient is associated with the given label
		 * Get patients/{id}/labels/{label}
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} label The label of interest
		 * @return {void} 
		 */
		Patients_idLabels_labelGet(id: string, label: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/labels/' + (label == null ? '' : encodeURIComponent(label)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add label
		 * Associate a label with a patient
		 * Put patients/{id}/labels/{label}
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} label The label to be added
		 * @return {void} 
		 */
		Patients_idLabels_labelPut(id: string, label: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/labels/' + (label == null ? '' : encodeURIComponent(label)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create DICOMDIR media
		 * Synchronously create a DICOMDIR media containing the DICOM patient whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
		 * Get patients/{id}/media
		 * @param {string} extended If present, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*
		 * @param {string} filename Filename to set in the "Content-Disposition" HTTP header (including file extension)
		 * @param {string} transcode If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @return {void} 
		 */
		Patients_idMediaGetByExtendedAndFilenameAndTranscode(extended: string | null | undefined, filename: string | null | undefined, transcode: string | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/media?extended=' + (extended == null ? '' : encodeURIComponent(extended)) + '&filename=' + (filename == null ? '' : encodeURIComponent(filename)) + '&transcode=' + (transcode == null ? '' : encodeURIComponent(transcode)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create DICOMDIR media
		 * Create a DICOMDIR media containing the DICOM patient whose Orthanc identifier is provided in the URL
		 * Post patients/{id}/media
		 * @param {string} id Orthanc identifier of the patient of interest
		 */
		Patients_idMediaPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/media', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List metadata
		 * Get the list of metadata that are associated with the given patient
		 * Get patients/{id}/metadata
		 * @param {string} expand If present, also retrieve the value of the individual metadata
		 * @param {string} numeric If present, use the numeric identifier of the metadata instead of its symbolic name
		 * @param {string} id Orthanc identifier of the patient of interest
		 */
		Patients_idMetadataGetByExpandAndNumeric(expand: string | null | undefined, numeric: string | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/metadata?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&numeric=' + (numeric == null ? '' : encodeURIComponent(numeric)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete metadata
		 * Delete some metadata associated with the given DICOM patient. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
		 * Delete patients/{id}/metadata/{name}
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} name The name of the metadata, or its index (cf. `UserMetadata` configuration option)
		 * @return {void} 
		 */
		Patients_idMetadata_nameDelete(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/metadata/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get metadata
		 * Get the value of a metadata that is associated with the given patient
		 * Get patients/{id}/metadata/{name}
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @param {string} name The name of the metadata, or its index (cf. `UserMetadata` configuration option)
		 * @return {void} 
		 */
		Patients_idMetadata_nameGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/metadata/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modify patient
		 * Start a job that will modify all the DICOM instances within the patient whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new patient, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series
		 * Post patients/{id}/modify
		 * @param {string} id Orthanc identifier of the patient of interest
		 */
		Patients_idModifyPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/modify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get patient module
		 * Get the patient module of the DICOM patient whose Orthanc identifier is provided in the URL
		 * Get patients/{id}/module
		 * @param {Array<string>} ignore_length Also include the DICOM tags that are provided in this list, even if their associated value is long
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {boolean} simplify If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)
		 * @param {string} id Orthanc identifier of the patient of interest
		 */
		Patients_idModuleGetByIgnore_lengthAndShortAndSimplify(ignore_length: Array<string> | null | undefined, short: boolean | null | undefined, simplify: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/module?' + ignore_length?.map(z => `ignore-length=${encodeURIComponent(z)}`).join('&') + '&short=' + short + '&simplify=' + simplify, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Is the patient protected against recycling?
		 * Is the patient protected against recycling?
		 * Get patients/{id}/protected
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @return {void} 
		 */
		Patients_idProtectedGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/protected', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Protect one patient against recycling
		 * Check out configuration options `MaximumStorageSize` and `MaximumPatientCount`
		 * Put patients/{id}/protected
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @return {void} 
		 */
		Patients_idProtectedPut(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/protected', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reconstruct tags & optionally files of patient
		 * Reconstruct the main DICOM tags in DB of the patient whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
		 * Post patients/{id}/reconstruct
		 * @param {string} id Orthanc identifier of the patient of interest
		 * @return {void} 
		 */
		Patients_idReconstructPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/reconstruct', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get child series
		 * Get detailed information about the child series of the DICOM patient whose Orthanc identifier is provided in the URL
		 * Get patients/{id}/series
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {string} id Orthanc identifier of the patient of interest
		 */
		Patients_idSeriesGetByFullAndRequestedTagsAndShort(full: boolean | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/series?full=' + full + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get shared tags
		 * Extract the DICOM tags whose value is constant across all the child instances of the DICOM patient whose Orthanc identifier is provided in the URL
		 * Get patients/{id}/shared-tags
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {boolean} simplify If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)
		 * @param {string} id Orthanc identifier of the patient of interest
		 */
		Patients_idShared_tagsGetByShortAndSimplify(short: boolean | null | undefined, simplify: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/shared-tags?short=' + short + '&simplify=' + simplify, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get patient statistics
		 * Get statistics about the given patient
		 * Get patients/{id}/statistics
		 * @param {string} id Orthanc identifier of the patient of interest
		 */
		Patients_idStatisticsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/statistics', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get child studies
		 * Get detailed information about the child studies of the DICOM patient whose Orthanc identifier is provided in the URL
		 * Get patients/{id}/studies
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {string} id Orthanc identifier of the patient of interest
		 */
		Patients_idStudiesGetByFullAndRequestedTagsAndShort(full: boolean | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'patients/' + (id == null ? '' : encodeURIComponent(id)) + '/studies?full=' + full + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Orthanc peers
		 * List all the Orthanc peers that are known to Orthanc. This corresponds either to the content of the `OrthancPeers` configuration option, or to the information stored in the database if `OrthancPeersInDatabase` is `true`.
		 * Get peers
		 * @param {string} expand If present, retrieve detailed information about the individual Orthanc peers
		 */
		PeersGetByExpand(expand: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'peers?expand=' + (expand == null ? '' : encodeURIComponent(expand)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Orthanc peer
		 * Delete one Orthanc peer. This change is permanent iff. `OrthancPeersInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
		 * Delete peers/{id}
		 * @param {string} id Identifier of the Orthanc peer of interest
		 * @return {void} 
		 */
		Peers_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'peers/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List operations on peer
		 * List the operations that are available for an Orthanc peer.
		 * Get peers/{id}
		 * @param {string} id Identifier of the peer of interest
		 */
		Peers_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'peers/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Orthanc peer
		 * Define a new Orthanc peer, or update an existing one. This change is permanent iff. `OrthancPeersInDatabase` is `true`, otherwise it is lost at the next restart of Orthanc.
		 * Put peers/{id}
		 * @param {string} id Identifier of the new/updated Orthanc peer
		 * @return {void} 
		 */
		Peers_idPut(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'peers/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get peer configuration
		 * Get detailed information about the configuration of some Orthanc peer
		 * Get peers/{id}/configuration
		 * @param {string} id Identifier of the peer of interest
		 */
		Peers_idConfigurationGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'peers/' + (id == null ? '' : encodeURIComponent(id)) + '/configuration', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Send to Orthanc peer
		 * Send DICOM resources stored locally to some remote Orthanc peer whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#sending-one-resource
		 * Post peers/{id}/store
		 * @param {string} id Identifier of the modality of interest
		 */
		Peers_idStorePost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'peers/' + (id == null ? '' : encodeURIComponent(id)) + '/store', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get peer system information
		 * Get system information about some Orthanc peer. This corresponds to doing a `GET` request against the `/system` URI of the remote peer. This route can be used to test connectivity.
		 * Get peers/{id}/system
		 * @param {string} id Identifier of the peer of interest
		 */
		Peers_idSystemGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'peers/' + (id == null ? '' : encodeURIComponent(id)) + '/system', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List plugins
		 * List all the installed plugins
		 * Get plugins
		 */
		PluginsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'plugins', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * JavaScript extensions to Orthanc Explorer
		 * Get the JavaScript extensions that are installed by all the plugins using the `OrthancPluginExtendOrthancExplorer()` function of the plugin SDK. This route is for internal use of Orthanc Explorer.
		 * Get plugins/explorer.js
		 * @return {void} 
		 */
		PluginsExplorer_jsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'plugins/explorer.js', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get plugin
		 * Get system information about the plugin whose identifier is provided in the URL
		 * Get plugins/{id}
		 * @param {string} id Identifier of the job of interest
		 */
		Plugins_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'plugins/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List query/retrieve operations
		 * List the identifiers of all the query/retrieve operations on DICOM modalities, as initiated by calls to `/modalities/{id}/query`. The length of this list is bounded by the `QueryRetrieveSize` configuration option of Orthanc. https://book.orthanc-server.com/users/rest.html#performing-query-retrieve-c-find-and-find-with-rest
		 * Get queries
		 */
		QueriesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'queries', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a query
		 * Delete the query/retrieve operation whose identifier is provided in the URL
		 * Delete queries/{id}
		 * @param {string} id Identifier of the query of interest
		 * @return {void} 
		 */
		Queries_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'queries/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List operations on a query
		 * List the available operations for the query/retrieve operation whose identifier is provided in the URL
		 * Get queries/{id}
		 * @param {string} id Identifier of the query of interest
		 */
		Queries_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'queries/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List answers to a query
		 * List the indices of all the available answers resulting from a query/retrieve operation on some DICOM modality, whose identifier is provided in the URL
		 * Get queries/{id}/answers
		 * @param {string} expand If present, retrieve detailed information about the individual answers
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {boolean} simplify If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)
		 * @param {string} id Identifier of the query of interest
		 */
		Queries_idAnswersGetByExpandAndShortAndSimplify(expand: string | null | undefined, short: boolean | null | undefined, simplify: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'queries/' + (id == null ? '' : encodeURIComponent(id)) + '/answers?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&short=' + short + '&simplify=' + simplify, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List operations on an answer
		 * List the available operations on an answer associated with the query/retrieve operation whose identifier is provided in the URL
		 * Get queries/{id}/answers/{index}
		 * @param {string} id Identifier of the query of interest
		 * @param {string} index Index of the answer
		 */
		Queries_idAnswers_indexGet(id: string, index: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'queries/' + (id == null ? '' : encodeURIComponent(id)) + '/answers/' + (index == null ? '' : encodeURIComponent(index)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get one answer
		 * Get the content (DICOM tags) of one answer associated with the query/retrieve operation whose identifier is provided in the URL
		 * Get queries/{id}/answers/{index}/content
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {boolean} simplify If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)
		 * @param {string} id Identifier of the query of interest
		 * @param {string} index Index of the answer
		 */
		Queries_idAnswers_indexContentGetByShortAndSimplify(short: boolean | null | undefined, simplify: boolean | null | undefined, id: string, index: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'queries/' + (id == null ? '' : encodeURIComponent(id)) + '/answers/' + (index == null ? '' : encodeURIComponent(index)) + '/content?short=' + short + '&simplify=' + simplify, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Query the child instances of an answer
		 * Issue a second DICOM C-FIND operation, in order to query the child instances associated with one answer to some query/retrieve operation whose identifiers are provided in the URL
		 * Post queries/{id}/answers/{index}/query-instances
		 * @param {string} id Identifier of the query of interest
		 * @param {string} index Index of the answer
		 */
		Queries_idAnswers_indexQuery_instancesPost(id: string, index: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'queries/' + (id == null ? '' : encodeURIComponent(id)) + '/answers/' + (index == null ? '' : encodeURIComponent(index)) + '/query-instances', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Query the child series of an answer
		 * Issue a second DICOM C-FIND operation, in order to query the child series associated with one answer to some query/retrieve operation whose identifiers are provided in the URL
		 * Post queries/{id}/answers/{index}/query-series
		 * @param {string} id Identifier of the query of interest
		 * @param {string} index Index of the answer
		 */
		Queries_idAnswers_indexQuery_seriesPost(id: string, index: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'queries/' + (id == null ? '' : encodeURIComponent(id)) + '/answers/' + (index == null ? '' : encodeURIComponent(index)) + '/query-series', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Query the child studies of an answer
		 * Issue a second DICOM C-FIND operation, in order to query the child studies associated with one answer to some query/retrieve operation whose identifiers are provided in the URL
		 * Post queries/{id}/answers/{index}/query-studies
		 * @param {string} id Identifier of the query of interest
		 * @param {string} index Index of the answer
		 */
		Queries_idAnswers_indexQuery_studiesPost(id: string, index: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'queries/' + (id == null ? '' : encodeURIComponent(id)) + '/answers/' + (index == null ? '' : encodeURIComponent(index)) + '/query-studies', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve one answer
		 * Start a C-MOVE SCU command as a job, in order to retrieve one answer associated with the query/retrieve operation whose identifiers are provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-retrieve-c-move
		 * Post queries/{id}/answers/{index}/retrieve
		 * @param {string} id Identifier of the query of interest
		 * @param {string} index Index of the answer
		 */
		Queries_idAnswers_indexRetrievePost(id: string, index: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'queries/' + (id == null ? '' : encodeURIComponent(id)) + '/answers/' + (index == null ? '' : encodeURIComponent(index)) + '/retrieve', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get level of original query
		 * Get the query level (value of the `QueryRetrieveLevel` tag) of the query/retrieve operation whose identifier is provided in the URL
		 * Get queries/{id}/level
		 * @param {string} id Identifier of the query of interest
		 * @return {void} 
		 */
		Queries_idLevelGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'queries/' + (id == null ? '' : encodeURIComponent(id)) + '/level', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get modality of original query
		 * Get the identifier of the DICOM modality that was targeted by the query/retrieve operation whose identifier is provided in the URL
		 * Get queries/{id}/modality
		 * @param {string} id Identifier of the query of interest
		 * @return {void} 
		 */
		Queries_idModalityGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'queries/' + (id == null ? '' : encodeURIComponent(id)) + '/modality', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get original query arguments
		 * Get the original DICOM filter associated with the query/retrieve operation whose identifier is provided in the URL
		 * Get queries/{id}/query
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {boolean} simplify If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)
		 * @param {string} id Identifier of the query of interest
		 */
		Queries_idQueryGetByShortAndSimplify(short: boolean | null | undefined, simplify: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'queries/' + (id == null ? '' : encodeURIComponent(id)) + '/query?short=' + short + '&simplify=' + simplify, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve all answers
		 * Start a C-MOVE SCU command as a job, in order to retrieve all the answers associated with the query/retrieve operation whose identifier is provided in the URL: https://book.orthanc-server.com/users/rest.html#performing-retrieve-c-move
		 * Post queries/{id}/retrieve
		 * @param {string} id Identifier of the query of interest
		 */
		Queries_idRetrievePost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'queries/' + (id == null ? '' : encodeURIComponent(id)) + '/retrieve', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List the available series
		 * List the Orthanc identifiers of all the available DICOM series
		 * Get series
		 * @param {string} expand If present, retrieve detailed information about the individual series
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {number} limit Limit the number of results
		 *     Type: double
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {number} since Show only the resources since the provided index
		 *     Type: double
		 */
		SeriesGetByExpandAndFullAndLimitAndRequestedTagsAndShortAndSince(expand: string | null | undefined, full: boolean | null | undefined, limit: number | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, since: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&full=' + full + '&limit=' + limit + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short + '&since=' + since, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete some series
		 * Delete the DICOM series whose Orthanc identifier is provided in the URL
		 * Delete series/{id}
		 * @param {string} id Orthanc identifier of the series of interest
		 * @return {void} 
		 */
		Series_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about some series
		 * Get detailed information about the DICOM series whose Orthanc identifier is provided in the URL
		 * Get series/{id}
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {string} id Orthanc identifier of the series of interest
		 */
		Series_idGetByFullAndRequestedTagsAndShort(full: boolean | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '?full=' + full + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Anonymize series
		 * Start a job that will anonymize all the DICOM instances within the series whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new series, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series
		 * Post series/{id}/anonymize
		 * @param {string} id Orthanc identifier of the series of interest
		 */
		Series_idAnonymizePost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/anonymize', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Create ZIP archive
		 * Synchronously create a ZIP archive containing the DICOM series whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
		 * Get series/{id}/archive
		 * @param {string} filename Filename to set in the "Content-Disposition" HTTP header (including file extension)
		 * @param {string} transcode If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html
		 * @param {string} id Orthanc identifier of the series of interest
		 * @return {void} 
		 */
		Series_idArchiveGetByFilenameAndTranscode(filename: string | null | undefined, transcode: string | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/archive?filename=' + (filename == null ? '' : encodeURIComponent(filename)) + '&transcode=' + (transcode == null ? '' : encodeURIComponent(transcode)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create ZIP archive
		 * Create a ZIP archive containing the DICOM series whose Orthanc identifier is provided in the URL
		 * Post series/{id}/archive
		 * @param {string} id Orthanc identifier of the series of interest
		 */
		Series_idArchivePost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/archive', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List attachments
		 * Get the list of attachments that are associated with the given series
		 * Get series/{id}/attachments
		 * @param {string} full If present, retrieve the attachments list and their numerical ids
		 * @param {string} id Orthanc identifier of the series of interest
		 */
		Series_idAttachmentsGetByFull(full: string | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments?full=' + (full == null ? '' : encodeURIComponent(full)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete attachment
		 * Delete an attachment associated with the given DICOM series. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
		 * Delete series/{id}/attachments/{name}
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Series_idAttachments_nameDelete(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List operations on attachments
		 * Get the list of the operations that are available for attachments associated with the given series
		 * Get series/{id}/attachments/{name}
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 */
		Series_idAttachments_nameGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Compress attachment
		 * Change the compression scheme that is used to store an attachment.
		 * Post series/{id}/attachments/{name}/compress
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Series_idAttachments_nameCompressPost(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/compress', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get attachment (no decompression)
		 * Get the (binary) content of one attachment associated with the given series. The attachment will not be decompressed if `StorageCompression` is `true`.
		 * Get series/{id}/attachments/{name}/compressed-data
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Series_idAttachments_nameCompressed_dataGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/compressed-data', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get MD5 of attachment on disk
		 * Get the MD5 hash of one attachment associated with the given series, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
		 * Get series/{id}/attachments/{name}/compressed-md5
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Series_idAttachments_nameCompressed_md5Get(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/compressed-md5', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get size of attachment on disk
		 * Get the size of one attachment associated with the given series, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
		 * Get series/{id}/attachments/{name}/compressed-size
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Series_idAttachments_nameCompressed_sizeGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/compressed-size', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get attachment
		 * Get the (binary) content of one attachment associated with the given series
		 * Get series/{id}/attachments/{name}/data
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Series_idAttachments_nameDataGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/data', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get info about the attachment
		 * Get all the information about the attachment associated with the given series
		 * Get series/{id}/attachments/{name}/info
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 */
		Series_idAttachments_nameInfoGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/info', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Is attachment compressed?
		 * Test whether the attachment has been stored as a compressed file on the disk.
		 * Get series/{id}/attachments/{name}/is-compressed
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Series_idAttachments_nameIs_compressedGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/is-compressed', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get MD5 of attachment
		 * Get the MD5 hash of one attachment associated with the given series
		 * Get series/{id}/attachments/{name}/md5
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Series_idAttachments_nameMd5Get(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/md5', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get size of attachment
		 * Get the size of one attachment associated with the given series
		 * Get series/{id}/attachments/{name}/size
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Series_idAttachments_nameSizeGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/size', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Uncompress attachment
		 * Change the compression scheme that is used to store an attachment.
		 * Post series/{id}/attachments/{name}/uncompress
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Series_idAttachments_nameUncompressPost(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/uncompress', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify attachment
		 * Verify that the attachment is not corrupted, by validating its MD5 hash
		 * Post series/{id}/attachments/{name}/verify-md5
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 */
		Series_idAttachments_nameVerify_md5Post(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/verify-md5', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get child instances
		 * Get detailed information about the child instances of the DICOM series whose Orthanc identifier is provided in the URL
		 * Get series/{id}/instances
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {string} id Orthanc identifier of the series of interest
		 */
		Series_idInstancesGetByFullAndRequestedTagsAndShort(full: boolean | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/instances?full=' + full + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get tags of instances
		 * Get the tags of all the child instances of the DICOM series whose Orthanc identifier is provided in the URL
		 * Get series/{id}/instances-tags
		 * @param {Array<string>} ignore_length Also include the DICOM tags that are provided in this list, even if their associated value is long
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {boolean} simplify If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)
		 * @param {string} id Orthanc identifier of the series of interest
		 */
		Series_idInstances_tagsGetByIgnore_lengthAndShortAndSimplify(ignore_length: Array<string> | null | undefined, short: boolean | null | undefined, simplify: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/instances-tags?' + ignore_length?.map(z => `ignore-length=${encodeURIComponent(z)}`).join('&') + '&short=' + short + '&simplify=' + simplify, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List labels
		 * Get the labels that are associated with the given series (new in Orthanc 1.12.0)
		 * Get series/{id}/labels
		 * @param {string} id Orthanc identifier of the series of interest
		 */
		Series_idLabelsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/labels', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove label
		 * Remove a label associated with a series
		 * Delete series/{id}/labels/{label}
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} label The label to be removed
		 * @return {void} 
		 */
		Series_idLabels_labelDelete(id: string, label: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/labels/' + (label == null ? '' : encodeURIComponent(label)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Test label
		 * Test whether the series is associated with the given label
		 * Get series/{id}/labels/{label}
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} label The label of interest
		 * @return {void} 
		 */
		Series_idLabels_labelGet(id: string, label: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/labels/' + (label == null ? '' : encodeURIComponent(label)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add label
		 * Associate a label with a series
		 * Put series/{id}/labels/{label}
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} label The label to be added
		 * @return {void} 
		 */
		Series_idLabels_labelPut(id: string, label: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/labels/' + (label == null ? '' : encodeURIComponent(label)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create DICOMDIR media
		 * Synchronously create a DICOMDIR media containing the DICOM series whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
		 * Get series/{id}/media
		 * @param {string} extended If present, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*
		 * @param {string} filename Filename to set in the "Content-Disposition" HTTP header (including file extension)
		 * @param {string} transcode If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html
		 * @param {string} id Orthanc identifier of the series of interest
		 * @return {void} 
		 */
		Series_idMediaGetByExtendedAndFilenameAndTranscode(extended: string | null | undefined, filename: string | null | undefined, transcode: string | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/media?extended=' + (extended == null ? '' : encodeURIComponent(extended)) + '&filename=' + (filename == null ? '' : encodeURIComponent(filename)) + '&transcode=' + (transcode == null ? '' : encodeURIComponent(transcode)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create DICOMDIR media
		 * Create a DICOMDIR media containing the DICOM series whose Orthanc identifier is provided in the URL
		 * Post series/{id}/media
		 * @param {string} id Orthanc identifier of the series of interest
		 */
		Series_idMediaPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/media', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List metadata
		 * Get the list of metadata that are associated with the given series
		 * Get series/{id}/metadata
		 * @param {string} expand If present, also retrieve the value of the individual metadata
		 * @param {string} numeric If present, use the numeric identifier of the metadata instead of its symbolic name
		 * @param {string} id Orthanc identifier of the series of interest
		 */
		Series_idMetadataGetByExpandAndNumeric(expand: string | null | undefined, numeric: string | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/metadata?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&numeric=' + (numeric == null ? '' : encodeURIComponent(numeric)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete metadata
		 * Delete some metadata associated with the given DICOM series. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
		 * Delete series/{id}/metadata/{name}
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} name The name of the metadata, or its index (cf. `UserMetadata` configuration option)
		 * @return {void} 
		 */
		Series_idMetadata_nameDelete(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/metadata/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get metadata
		 * Get the value of a metadata that is associated with the given series
		 * Get series/{id}/metadata/{name}
		 * @param {string} id Orthanc identifier of the series of interest
		 * @param {string} name The name of the metadata, or its index (cf. `UserMetadata` configuration option)
		 * @return {void} 
		 */
		Series_idMetadata_nameGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/metadata/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modify series
		 * Start a job that will modify all the DICOM instances within the series whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new series, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series
		 * Post series/{id}/modify
		 * @param {string} id Orthanc identifier of the series of interest
		 */
		Series_idModifyPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/modify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get series module
		 * Get the series module of the DICOM series whose Orthanc identifier is provided in the URL
		 * Get series/{id}/module
		 * @param {Array<string>} ignore_length Also include the DICOM tags that are provided in this list, even if their associated value is long
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {boolean} simplify If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)
		 * @param {string} id Orthanc identifier of the series of interest
		 */
		Series_idModuleGetByIgnore_lengthAndShortAndSimplify(ignore_length: Array<string> | null | undefined, short: boolean | null | undefined, simplify: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/module?' + ignore_length?.map(z => `ignore-length=${encodeURIComponent(z)}`).join('&') + '&short=' + short + '&simplify=' + simplify, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Decode series for numpy
		 * Decode the given DICOM series, for use with numpy in Python. The numpy array has 4 dimensions: (frame, height, width, color channel).
		 * Get series/{id}/numpy
		 * @param {boolean} compress Compress the file as `.npz`
		 * @param {boolean} rescale On grayscale images, apply the rescaling and return floating-point values
		 * @param {string} id Orthanc identifier of the DICOM resource of interest
		 * @return {void} 
		 */
		Series_idNumpyGetByCompressAndRescale(compress: boolean | null | undefined, rescale: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/numpy?compress=' + compress + '&rescale=' + rescale, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Order the slices
		 * Sort the instances and frames (slices) of the DICOM series whose Orthanc identifier is provided in the URL. This URI is essentially used by the Orthanc Web viewer and by the Osimis Web viewer.
		 * Get series/{id}/ordered-slices
		 * @param {string} id Orthanc identifier of the series of interest
		 */
		Series_idOrdered_slicesGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/ordered-slices', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get parent patient
		 * Get detailed information about the parent patient of the DICOM series whose Orthanc identifier is provided in the URL
		 * Get series/{id}/patient
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {string} id Orthanc identifier of the series of interest
		 */
		Series_idPatientGetByFullAndRequestedTagsAndShort(full: boolean | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/patient?full=' + full + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reconstruct tags & optionally files of series
		 * Reconstruct the main DICOM tags in DB of the series whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
		 * Post series/{id}/reconstruct
		 * @param {string} id Orthanc identifier of the series of interest
		 * @return {void} 
		 */
		Series_idReconstructPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/reconstruct', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get shared tags
		 * Extract the DICOM tags whose value is constant across all the child instances of the DICOM series whose Orthanc identifier is provided in the URL
		 * Get series/{id}/shared-tags
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {boolean} simplify If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)
		 * @param {string} id Orthanc identifier of the series of interest
		 */
		Series_idShared_tagsGetByShortAndSimplify(short: boolean | null | undefined, simplify: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/shared-tags?short=' + short + '&simplify=' + simplify, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get series statistics
		 * Get statistics about the given series
		 * Get series/{id}/statistics
		 * @param {string} id Orthanc identifier of the series of interest
		 */
		Series_idStatisticsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/statistics', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get parent study
		 * Get detailed information about the parent study of the DICOM series whose Orthanc identifier is provided in the URL
		 * Get series/{id}/study
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {string} id Orthanc identifier of the series of interest
		 */
		Series_idStudyGetByFullAndRequestedTagsAndShort(full: boolean | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)) + '/study?full=' + full + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get database statistics
		 * Get statistics related to the database of Orthanc
		 * Get statistics
		 */
		StatisticsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'statistics', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get storage commitment report
		 * Get the storage commitment report whose identifier is provided in the URL: https://book.orthanc-server.com/users/storage-commitment.html#storage-commitment-scu
		 * Get storage-commitment/{id}
		 * @param {string} id Identifier of the storage commitment report
		 */
		Storage_commitment_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'storage-commitment/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove after storage commitment
		 * Remove out of Orthanc, the DICOM instances that have been reported to have been properly received the storage commitment report whose identifier is provided in the URL. This is only possible if the `Status` of the storage commitment report is `Success`. https://book.orthanc-server.com/users/storage-commitment.html#removing-the-instances
		 * Post storage-commitment/{id}/remove
		 * @param {string} id Identifier of the storage commitment report
		 * @return {void} 
		 */
		Storage_commitment_idRemovePost(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'storage-commitment/' + (id == null ? '' : encodeURIComponent(id)) + '/remove', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List the available studies
		 * List the Orthanc identifiers of all the available DICOM studies
		 * Get studies
		 * @param {string} expand If present, retrieve detailed information about the individual studies
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {number} limit Limit the number of results
		 *     Type: double
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {number} since Show only the resources since the provided index
		 *     Type: double
		 */
		StudiesGetByExpandAndFullAndLimitAndRequestedTagsAndShortAndSince(expand: string | null | undefined, full: boolean | null | undefined, limit: number | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, since: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&full=' + full + '&limit=' + limit + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short + '&since=' + since, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete some study
		 * Delete the DICOM study whose Orthanc identifier is provided in the URL
		 * Delete studies/{id}
		 * @param {string} id Orthanc identifier of the study of interest
		 * @return {void} 
		 */
		Studies_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about some study
		 * Get detailed information about the DICOM study whose Orthanc identifier is provided in the URL
		 * Get studies/{id}
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idGetByFullAndRequestedTagsAndShort(full: boolean | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '?full=' + full + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Anonymize study
		 * Start a job that will anonymize all the DICOM instances within the study whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new study, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series
		 * Post studies/{id}/anonymize
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idAnonymizePost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/anonymize', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Create ZIP archive
		 * Synchronously create a ZIP archive containing the DICOM study whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
		 * Get studies/{id}/archive
		 * @param {string} filename Filename to set in the "Content-Disposition" HTTP header (including file extension)
		 * @param {string} transcode If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html
		 * @param {string} id Orthanc identifier of the study of interest
		 * @return {void} 
		 */
		Studies_idArchiveGetByFilenameAndTranscode(filename: string | null | undefined, transcode: string | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/archive?filename=' + (filename == null ? '' : encodeURIComponent(filename)) + '&transcode=' + (transcode == null ? '' : encodeURIComponent(transcode)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create ZIP archive
		 * Create a ZIP archive containing the DICOM study whose Orthanc identifier is provided in the URL
		 * Post studies/{id}/archive
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idArchivePost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/archive', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List attachments
		 * Get the list of attachments that are associated with the given study
		 * Get studies/{id}/attachments
		 * @param {string} full If present, retrieve the attachments list and their numerical ids
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idAttachmentsGetByFull(full: string | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments?full=' + (full == null ? '' : encodeURIComponent(full)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete attachment
		 * Delete an attachment associated with the given DICOM study. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).
		 * Delete studies/{id}/attachments/{name}
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Studies_idAttachments_nameDelete(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List operations on attachments
		 * Get the list of the operations that are available for attachments associated with the given study
		 * Get studies/{id}/attachments/{name}
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 */
		Studies_idAttachments_nameGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Compress attachment
		 * Change the compression scheme that is used to store an attachment.
		 * Post studies/{id}/attachments/{name}/compress
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Studies_idAttachments_nameCompressPost(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/compress', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get attachment (no decompression)
		 * Get the (binary) content of one attachment associated with the given study. The attachment will not be decompressed if `StorageCompression` is `true`.
		 * Get studies/{id}/attachments/{name}/compressed-data
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Studies_idAttachments_nameCompressed_dataGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/compressed-data', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get MD5 of attachment on disk
		 * Get the MD5 hash of one attachment associated with the given study, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.
		 * Get studies/{id}/attachments/{name}/compressed-md5
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Studies_idAttachments_nameCompressed_md5Get(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/compressed-md5', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get size of attachment on disk
		 * Get the size of one attachment associated with the given study, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.
		 * Get studies/{id}/attachments/{name}/compressed-size
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Studies_idAttachments_nameCompressed_sizeGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/compressed-size', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get attachment
		 * Get the (binary) content of one attachment associated with the given study
		 * Get studies/{id}/attachments/{name}/data
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Studies_idAttachments_nameDataGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/data', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get info about the attachment
		 * Get all the information about the attachment associated with the given study
		 * Get studies/{id}/attachments/{name}/info
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 */
		Studies_idAttachments_nameInfoGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/info', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Is attachment compressed?
		 * Test whether the attachment has been stored as a compressed file on the disk.
		 * Get studies/{id}/attachments/{name}/is-compressed
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Studies_idAttachments_nameIs_compressedGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/is-compressed', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get MD5 of attachment
		 * Get the MD5 hash of one attachment associated with the given study
		 * Get studies/{id}/attachments/{name}/md5
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Studies_idAttachments_nameMd5Get(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/md5', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get size of attachment
		 * Get the size of one attachment associated with the given study
		 * Get studies/{id}/attachments/{name}/size
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Studies_idAttachments_nameSizeGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/size', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Uncompress attachment
		 * Change the compression scheme that is used to store an attachment.
		 * Post studies/{id}/attachments/{name}/uncompress
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 * @return {void} 
		 */
		Studies_idAttachments_nameUncompressPost(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/uncompress', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify attachment
		 * Verify that the attachment is not corrupted, by validating its MD5 hash
		 * Post studies/{id}/attachments/{name}/verify-md5
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} name The name of the attachment, or its index (cf. `UserContentType` configuration option)
		 */
		Studies_idAttachments_nameVerify_md5Post(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/attachments/' + (name == null ? '' : encodeURIComponent(name)) + '/verify-md5', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get child instances
		 * Get detailed information about the child instances of the DICOM study whose Orthanc identifier is provided in the URL
		 * Get studies/{id}/instances
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idInstancesGetByFullAndRequestedTagsAndShort(full: boolean | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/instances?full=' + full + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get tags of instances
		 * Get the tags of all the child instances of the DICOM study whose Orthanc identifier is provided in the URL
		 * Get studies/{id}/instances-tags
		 * @param {Array<string>} ignore_length Also include the DICOM tags that are provided in this list, even if their associated value is long
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {boolean} simplify If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idInstances_tagsGetByIgnore_lengthAndShortAndSimplify(ignore_length: Array<string> | null | undefined, short: boolean | null | undefined, simplify: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/instances-tags?' + ignore_length?.map(z => `ignore-length=${encodeURIComponent(z)}`).join('&') + '&short=' + short + '&simplify=' + simplify, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List labels
		 * Get the labels that are associated with the given study (new in Orthanc 1.12.0)
		 * Get studies/{id}/labels
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idLabelsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/labels', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove label
		 * Remove a label associated with a study
		 * Delete studies/{id}/labels/{label}
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} label The label to be removed
		 * @return {void} 
		 */
		Studies_idLabels_labelDelete(id: string, label: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/labels/' + (label == null ? '' : encodeURIComponent(label)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Test label
		 * Test whether the study is associated with the given label
		 * Get studies/{id}/labels/{label}
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} label The label of interest
		 * @return {void} 
		 */
		Studies_idLabels_labelGet(id: string, label: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/labels/' + (label == null ? '' : encodeURIComponent(label)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add label
		 * Associate a label with a study
		 * Put studies/{id}/labels/{label}
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} label The label to be added
		 * @return {void} 
		 */
		Studies_idLabels_labelPut(id: string, label: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/labels/' + (label == null ? '' : encodeURIComponent(label)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create DICOMDIR media
		 * Synchronously create a DICOMDIR media containing the DICOM study whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.
		 * Get studies/{id}/media
		 * @param {string} extended If present, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*
		 * @param {string} filename Filename to set in the "Content-Disposition" HTTP header (including file extension)
		 * @param {string} transcode If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html
		 * @param {string} id Orthanc identifier of the study of interest
		 * @return {void} 
		 */
		Studies_idMediaGetByExtendedAndFilenameAndTranscode(extended: string | null | undefined, filename: string | null | undefined, transcode: string | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/media?extended=' + (extended == null ? '' : encodeURIComponent(extended)) + '&filename=' + (filename == null ? '' : encodeURIComponent(filename)) + '&transcode=' + (transcode == null ? '' : encodeURIComponent(transcode)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create DICOMDIR media
		 * Create a DICOMDIR media containing the DICOM study whose Orthanc identifier is provided in the URL
		 * Post studies/{id}/media
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idMediaPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/media', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Merge study
		 * Start a new job so as to move some DICOM resources into the DICOM study whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#merging
		 * Post studies/{id}/merge
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idMergePost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/merge', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List metadata
		 * Get the list of metadata that are associated with the given study
		 * Get studies/{id}/metadata
		 * @param {string} expand If present, also retrieve the value of the individual metadata
		 * @param {string} numeric If present, use the numeric identifier of the metadata instead of its symbolic name
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idMetadataGetByExpandAndNumeric(expand: string | null | undefined, numeric: string | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/metadata?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&numeric=' + (numeric == null ? '' : encodeURIComponent(numeric)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete metadata
		 * Delete some metadata associated with the given DICOM study. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).
		 * Delete studies/{id}/metadata/{name}
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} name The name of the metadata, or its index (cf. `UserMetadata` configuration option)
		 * @return {void} 
		 */
		Studies_idMetadata_nameDelete(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/metadata/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get metadata
		 * Get the value of a metadata that is associated with the given study
		 * Get studies/{id}/metadata/{name}
		 * @param {string} id Orthanc identifier of the study of interest
		 * @param {string} name The name of the metadata, or its index (cf. `UserMetadata` configuration option)
		 * @return {void} 
		 */
		Studies_idMetadata_nameGet(id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/metadata/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modify study
		 * Start a job that will modify all the DICOM instances within the study whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new study, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series
		 * Post studies/{id}/modify
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idModifyPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/modify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get study module
		 * Get the study module of the DICOM study whose Orthanc identifier is provided in the URL
		 * Get studies/{id}/module
		 * @param {Array<string>} ignore_length Also include the DICOM tags that are provided in this list, even if their associated value is long
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {boolean} simplify If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idModuleGetByIgnore_lengthAndShortAndSimplify(ignore_length: Array<string> | null | undefined, short: boolean | null | undefined, simplify: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/module?' + ignore_length?.map(z => `ignore-length=${encodeURIComponent(z)}`).join('&') + '&short=' + short + '&simplify=' + simplify, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get patient module of study
		 * Get the patient module of the DICOM study whose Orthanc identifier is provided in the URL
		 * Get studies/{id}/module-patient
		 * @param {Array<string>} ignore_length Also include the DICOM tags that are provided in this list, even if their associated value is long
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {boolean} simplify If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idModule_patientGetByIgnore_lengthAndShortAndSimplify(ignore_length: Array<string> | null | undefined, short: boolean | null | undefined, simplify: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/module-patient?' + ignore_length?.map(z => `ignore-length=${encodeURIComponent(z)}`).join('&') + '&short=' + short + '&simplify=' + simplify, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get parent patient
		 * Get detailed information about the parent patient of the DICOM study whose Orthanc identifier is provided in the URL
		 * Get studies/{id}/patient
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idPatientGetByFullAndRequestedTagsAndShort(full: boolean | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/patient?full=' + full + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reconstruct tags & optionally files of study
		 * Reconstruct the main DICOM tags in DB of the study whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.
		 * Post studies/{id}/reconstruct
		 * @param {string} id Orthanc identifier of the study of interest
		 * @return {void} 
		 */
		Studies_idReconstructPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/reconstruct', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get child series
		 * Get detailed information about the child series of the DICOM study whose Orthanc identifier is provided in the URL
		 * Get studies/{id}/series
		 * @param {boolean} full If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)
		 * @param {string} requestedTags If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return 
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idSeriesGetByFullAndRequestedTagsAndShort(full: boolean | null | undefined, requestedTags: string | null | undefined, short: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/series?full=' + full + '&requestedTags=' + (requestedTags == null ? '' : encodeURIComponent(requestedTags)) + '&short=' + short, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get shared tags
		 * Extract the DICOM tags whose value is constant across all the child instances of the DICOM study whose Orthanc identifier is provided in the URL
		 * Get studies/{id}/shared-tags
		 * @param {boolean} short If present, report the DICOM tags in hexadecimal format
		 * @param {boolean} simplify If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idShared_tagsGetByShortAndSimplify(short: boolean | null | undefined, simplify: boolean | null | undefined, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/shared-tags?short=' + short + '&simplify=' + simplify, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Split study
		 * Start a new job so as to split the DICOM study whose Orthanc identifier is provided in the URL, by taking some of its children series or instances out of it and putting them into a brand new study (this new study is created by setting the `StudyInstanceUID` tag to a random identifier): https://book.orthanc-server.com/users/anonymization.html#splitting
		 * Post studies/{id}/split
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idSplitPost(id: string, requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/split', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get study statistics
		 * Get statistics about the given study
		 * Get studies/{id}/statistics
		 * @param {string} id Orthanc identifier of the study of interest
		 */
		Studies_idStatisticsGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'studies/' + (id == null ? '' : encodeURIComponent(id)) + '/statistics', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get system information
		 * Get system information about Orthanc
		 * Get system
		 */
		SystemGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'system', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List operations
		 * List the available operations under URI `/tools/`
		 * Get tools
		 */
		ToolsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get accepted transfer syntaxes
		 * Get the list of UIDs of the DICOM transfer syntaxes that are accepted by Orthanc C-STORE SCP. This corresponds to the configuration options `AcceptedTransferSyntaxes` and `XXXTransferSyntaxAccepted`.
		 * Get tools/accepted-transfer-syntaxes
		 */
		ToolsAccepted_transfer_syntaxesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/accepted-transfer-syntaxes', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Set accepted transfer syntaxes
		 * Set the DICOM transfer syntaxes that accepted by Orthanc C-STORE SCP
		 * Put tools/accepted-transfer-syntaxes
		 */
		ToolsAccepted_transfer_syntaxesPut(requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tools/accepted-transfer-syntaxes', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Anonymize a set of resources
		 * Start a job that will anonymize all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.
		 * Post tools/bulk-anonymize
		 */
		ToolsBulk_anonymizePost(requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tools/bulk-anonymize', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Describe a set of resources
		 * Get the content all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field, in one single call.
		 * Post tools/bulk-content
		 * @return {void} 
		 */
		ToolsBulk_contentPost(requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tools/bulk-content', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a set of resources
		 * Delete all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.
		 * Post tools/bulk-delete
		 * @return {void} 
		 */
		ToolsBulk_deletePost(requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tools/bulk-delete', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Modify a set of resources
		 * Start a job that will modify all the DICOM patients, studies, series or instances whose identifiers are provided in the `Resources` field.
		 * Post tools/bulk-modify
		 */
		ToolsBulk_modifyPost(requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tools/bulk-modify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Create ZIP archive
		 * Create a ZIP archive containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body
		 * Post tools/create-archive
		 */
		ToolsCreate_archivePost(requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tools/create-archive', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Create one DICOM instance
		 * Create one DICOM instance, and store it into Orthanc
		 * Post tools/create-dicom
		 */
		ToolsCreate_dicomPost(requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tools/create-dicom', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Create DICOMDIR media
		 * Create a DICOMDIR media containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body
		 * Post tools/create-media
		 */
		ToolsCreate_mediaPost(requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tools/create-media', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Create DICOMDIR media
		 * Create a DICOMDIR media containing the DICOM resources (patients, studies, series, or instances) whose Orthanc identifiers are provided in the body
		 * Post tools/create-media-extended
		 */
		ToolsCreate_media_extendedPost(requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tools/create-media-extended', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get default encoding
		 * Get the default encoding that is used by Orthanc if parsing a DICOM instance without the `SpecificCharacterEncoding` tag, or during C-FIND. This corresponds to the configuration option `DefaultEncoding`.
		 * Get tools/default-encoding
		 * @return {void} 
		 */
		ToolsDefault_encodingGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/default-encoding', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get DICOM conformance
		 * Get the DICOM conformance statement of Orthanc
		 * Get tools/dicom-conformance
		 * @return {void} 
		 */
		ToolsDicom_conformanceGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/dicom-conformance', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Trigger C-ECHO SCU
		 * Trigger C-ECHO SCU command against a DICOM modality described in the POST body, without having to register the modality in some `/modalities/{id}` (new in Orthanc 1.8.1)
		 * Post tools/dicom-echo
		 * @return {void} 
		 */
		ToolsDicom_echoPost(requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tools/dicom-echo', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Look for local resources
		 * This URI can be used to perform a search on the content of the local Orthanc server, in a way that is similar to querying remote DICOM modalities using C-FIND SCU: https://book.orthanc-server.com/users/rest.html#performing-finds-within-orthanc
		 * Post tools/find
		 */
		ToolsFindPost(requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tools/find', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate an identifier
		 * Generate a random DICOM identifier
		 * Get tools/generate-uid
		 * @param {string} level Type of DICOM resource among: `patient`, `study`, `series` or `instance`
		 * @return {void} 
		 */
		ToolsGenerate_uidGetByLevel(level: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/generate-uid?level=' + (level == null ? '' : encodeURIComponent(level)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Invalidate DICOM-as-JSON summaries
		 * Remove all the attachments of the type "DICOM-as-JSON" that are associated will all the DICOM instances stored in Orthanc. These summaries will be automatically re-created on the next access. This is notably useful after changes to the `Dictionary` configuration option. https://book.orthanc-server.com/faq/orthanc-storage.html#storage-area
		 * Post tools/invalidate-tags
		 * @return {void} 
		 */
		ToolsInvalidate_tagsPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tools/invalidate-tags', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the used labels
		 * List all the labels that are associated with any resource of the Orthanc database
		 * Get tools/labels
		 */
		ToolsLabelsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/labels', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get main log level
		 * Get the main log level of Orthanc
		 * Get tools/log-level
		 * @return {void} 
		 */
		ToolsLog_levelGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/log-level', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get log level for `dicom`
		 * Get the log level of the log category `dicom`
		 * Get tools/log-level-dicom
		 * @return {void} 
		 */
		ToolsLog_level_dicomGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/log-level-dicom', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get log level for `generic`
		 * Get the log level of the log category `generic`
		 * Get tools/log-level-generic
		 * @return {void} 
		 */
		ToolsLog_level_genericGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/log-level-generic', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get log level for `http`
		 * Get the log level of the log category `http`
		 * Get tools/log-level-http
		 * @return {void} 
		 */
		ToolsLog_level_httpGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/log-level-http', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get log level for `jobs`
		 * Get the log level of the log category `jobs`
		 * Get tools/log-level-jobs
		 * @return {void} 
		 */
		ToolsLog_level_jobsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/log-level-jobs', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get log level for `lua`
		 * Get the log level of the log category `lua`
		 * Get tools/log-level-lua
		 * @return {void} 
		 */
		ToolsLog_level_luaGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/log-level-lua', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get log level for `plugins`
		 * Get the log level of the log category `plugins`
		 * Get tools/log-level-plugins
		 * @return {void} 
		 */
		ToolsLog_level_pluginsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/log-level-plugins', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get log level for `sqlite`
		 * Get the log level of the log category `sqlite`
		 * Get tools/log-level-sqlite
		 * @return {void} 
		 */
		ToolsLog_level_sqliteGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/log-level-sqlite', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Are metrics collected?
		 * Returns a Boolean specifying whether Prometheus metrics are collected and exposed at `/tools/metrics-prometheus`
		 * Get tools/metrics
		 * @return {void} 
		 */
		ToolsMetricsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/metrics', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get usage metrics
		 * Get usage metrics of Orthanc in the Prometheus file format (OpenMetrics): https://book.orthanc-server.com/users/advanced-rest.html#instrumentation-with-prometheus
		 * Get tools/metrics-prometheus
		 * @return {void} 
		 */
		ToolsMetrics_prometheusGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/metrics-prometheus', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get UTC time
		 * Get UTC time
		 * Get tools/now
		 * @return {void} 
		 */
		ToolsNowGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/now', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get local time
		 * Get local time
		 * Get tools/now-local
		 * @return {void} 
		 */
		ToolsNow_localGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/now-local', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reconstruct all the index
		 * Reconstruct the index of all the tags of all the DICOM instances that are stored in Orthanc. This is notably useful after the deletion of resources whose children resources have inconsistent values with their sibling resources. Beware that this is a highly time-consuming operation, as all the DICOM instances will be parsed again, and as all the Orthanc index will be regenerated. If you have a large database to process, it is advised to use the Housekeeper plugin to perform this action resource by resource
		 * Post tools/reconstruct
		 * @return {void} 
		 */
		ToolsReconstructPost(requestBody: any, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tools/reconstruct', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Restart Orthanc
		 * Restart Orthanc
		 * Post tools/reset
		 * @return {void} 
		 */
		ToolsResetPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tools/reset', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Shutdown Orthanc
		 * Shutdown Orthanc
		 * Post tools/shutdown
		 * @return {void} 
		 */
		ToolsShutdownPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tools/shutdown', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Is unknown SOP class accepted?
		 * Shall Orthanc C-STORE SCP accept DICOM instances with an unknown SOP class UID?
		 * Get tools/unknown-sop-class-accepted
		 * @return {void} 
		 */
		ToolsUnknown_sop_class_acceptedGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tools/unknown-sop-class-accepted', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

