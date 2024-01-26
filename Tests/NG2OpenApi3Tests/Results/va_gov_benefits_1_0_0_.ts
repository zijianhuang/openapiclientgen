import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DocumentUploadAttributes {

		/**
		 * Unambiguous status code. Only present if status = "error"
		 * * `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.
		 * * `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.
		 * * `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.
		 * * `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.
		 * * `DOC105` - Invalid or unknown id
		 * * `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.
		 * * `DOC107` - Empty payload.
		 * * `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.
		 * * `DOC201` - Upload server error.
		 * * `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.
		 */
		code?: string | null;

		/** Human readable error detail. Only present if status = "error" */
		detail?: string | null;

		/**
		 * The document upload identifier
		 * Required
		 */
		guid: string;

		/** Location to which to PUT document Payload */
		location?: string | null;

		/**
		 * Document upload status.
		 * Required
		 */
		status: DocumentUploadAttributesStatus;

		/** The last time the submission was updated */
		updated_at?: Date | null;

		/** Only populated after submission starts processing */
		uploaded_pdf?: any;
	}
	export interface DocumentUploadAttributesFormProperties {

		/**
		 * Unambiguous status code. Only present if status = "error"
		 * * `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.
		 * * `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.
		 * * `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.
		 * * `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.
		 * * `DOC105` - Invalid or unknown id
		 * * `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.
		 * * `DOC107` - Empty payload.
		 * * `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.
		 * * `DOC201` - Upload server error.
		 * * `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.
		 */
		code: FormControl<string | null | undefined>,

		/** Human readable error detail. Only present if status = "error" */
		detail: FormControl<string | null | undefined>,

		/**
		 * The document upload identifier
		 * Required
		 */
		guid: FormControl<string | null | undefined>,

		/** Location to which to PUT document Payload */
		location: FormControl<string | null | undefined>,

		/**
		 * Document upload status.
		 * Required
		 */
		status: FormControl<DocumentUploadAttributesStatus | null | undefined>,

		/** The last time the submission was updated */
		updated_at: FormControl<Date | null | undefined>,

		/** Only populated after submission starts processing */
		uploaded_pdf: FormControl<any | null | undefined>,
	}
	export function CreateDocumentUploadAttributesFormGroup() {
		return new FormGroup<DocumentUploadAttributesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DocumentUploadAttributesStatus | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			uploaded_pdf: new FormControl<any | null | undefined>(undefined),
		});

	}

	export enum DocumentUploadAttributesStatus { pending = 0, uploaded = 1, received = 2, processing = 3, success = 4, vbms = 5, error = 6 }


	/** Document upload failed */
	export interface DocumentUploadFailure {

		/** Error code */
		Code?: string | null;

		/** Error detail */
		Message?: string | null;
	}

	/** Document upload failed */
	export interface DocumentUploadFailureFormProperties {

		/** Error code */
		Code: FormControl<string | null | undefined>,

		/** Error detail */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDocumentUploadFailureFormGroup() {
		return new FormGroup<DocumentUploadFailureFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifying properties about the document payload being submitted */
	export interface DocumentUploadMetadata {

		/**
		 * Optional parameter (can be missing or empty). The values are:<br><br>
		 * CMP - Compensation requests such as those related to disability, unemployment, and pandemic claims<br><br>
		 * PMC - Pension requests including survivor’s pension<br><br>
		 * INS - Insurance such as life insurance, disability insurance, and other health insurance<br><br>
		 * EDU - Education benefits, programs, and affiliations<br><br>
		 * VRE - Veteran Readiness & Employment such as employment questionnaires, employment discrimination, employment verification<br><br>
		 * BVA - Board of Veteran Appeals<br><br>
		 * FID - Fiduciary / financial appointee, including family member benefits<br><br>
		 * NCA - National Cemetery Administration<br><br>
		 * OTH - Other (this value if used, will be treated as CMP)<br>
		 */
		businessLine?: DocumentUploadMetadataBusinessLine | null;

		/** VBA form number of the document */
		docType?: string | null;

		/**
		 * The Veteran's file number is exactly 9 digits with no alpha characters, hyphens, spaces or punctuation. In most cases, this is the Veteran's SSN but may also be an 8 digit BIRL number. If no file number has been established or if it is unknown, the application should use the Veteran's SSN and the file number will be associated with the submission later in the process. Incorrect file numbers can cause delays.
		 * Required
		 */
		fileNumber: string;

		/**
		 * System, installation, or entity submitting the document
		 * Required
		 */
		source: string;

		/**
		 * Veteran first name. Cannot be missing or empty or longer than 50 characters. Only upper/lower case letters, hyphens(-), spaces and forward-slash(/) allowed.
		 * Required
		 */
		veteranFirstName: string;

		/**
		 * Veteran last name. Cannot be missing or empty or longer than 50 characters. Only upper/lower case letters, hyphens(-), spaces and forward-slash(/) allowed.
		 * Required
		 */
		veteranLastName: string;

		/**
		 * Veteran zip code. Either five digits (XXXXX) or five digits then four digits separated by a hyphen (XXXXX-XXXX). Use '00000' for Veterans with non-US addresses.
		 * Required
		 */
		zipCode: string;
	}

	/** Identifying properties about the document payload being submitted */
	export interface DocumentUploadMetadataFormProperties {

		/**
		 * Optional parameter (can be missing or empty). The values are:<br><br>
		 * CMP - Compensation requests such as those related to disability, unemployment, and pandemic claims<br><br>
		 * PMC - Pension requests including survivor’s pension<br><br>
		 * INS - Insurance such as life insurance, disability insurance, and other health insurance<br><br>
		 * EDU - Education benefits, programs, and affiliations<br><br>
		 * VRE - Veteran Readiness & Employment such as employment questionnaires, employment discrimination, employment verification<br><br>
		 * BVA - Board of Veteran Appeals<br><br>
		 * FID - Fiduciary / financial appointee, including family member benefits<br><br>
		 * NCA - National Cemetery Administration<br><br>
		 * OTH - Other (this value if used, will be treated as CMP)<br>
		 */
		businessLine: FormControl<DocumentUploadMetadataBusinessLine | null | undefined>,

		/** VBA form number of the document */
		docType: FormControl<string | null | undefined>,

		/**
		 * The Veteran's file number is exactly 9 digits with no alpha characters, hyphens, spaces or punctuation. In most cases, this is the Veteran's SSN but may also be an 8 digit BIRL number. If no file number has been established or if it is unknown, the application should use the Veteran's SSN and the file number will be associated with the submission later in the process. Incorrect file numbers can cause delays.
		 * Required
		 */
		fileNumber: FormControl<string | null | undefined>,

		/**
		 * System, installation, or entity submitting the document
		 * Required
		 */
		source: FormControl<string | null | undefined>,

		/**
		 * Veteran first name. Cannot be missing or empty or longer than 50 characters. Only upper/lower case letters, hyphens(-), spaces and forward-slash(/) allowed.
		 * Required
		 */
		veteranFirstName: FormControl<string | null | undefined>,

		/**
		 * Veteran last name. Cannot be missing or empty or longer than 50 characters. Only upper/lower case letters, hyphens(-), spaces and forward-slash(/) allowed.
		 * Required
		 */
		veteranLastName: FormControl<string | null | undefined>,

		/**
		 * Veteran zip code. Either five digits (XXXXX) or five digits then four digits separated by a hyphen (XXXXX-XXXX). Use '00000' for Veterans with non-US addresses.
		 * Required
		 */
		zipCode: FormControl<string | null | undefined>,
	}
	export function CreateDocumentUploadMetadataFormGroup() {
		return new FormGroup<DocumentUploadMetadataFormProperties>({
			businessLine: new FormControl<DocumentUploadMetadataBusinessLine | null | undefined>(undefined),
			docType: new FormControl<string | null | undefined>(undefined),
			fileNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{8,9}$')]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			veteranFirstName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z\-\/\s]{1,50}$')]),
			veteranLastName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z\-\/\s]{1,50}$')]),
			zipCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DocumentUploadMetadataBusinessLine { CMP = 0, PMC = 1, INS = 2, EDU = 3, VRE = 4, BVA = 5, FID = 6, NCA = 7, OTH = 8 }


	/** Status record for a previously initiated document submission. */
	export interface DocumentUploadPath {

		/** Required */
		attributes: DocumentUploadAttributes;

		/**
		 * JSON API identifier
		 * Required
		 */
		id: string;

		/**
		 * JSON API type specification
		 * Required
		 */
		type: string;
	}

	/** Status record for a previously initiated document submission. */
	export interface DocumentUploadPathFormProperties {

		/**
		 * JSON API identifier
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * JSON API type specification
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDocumentUploadPathFormGroup() {
		return new FormGroup<DocumentUploadPathFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Status record for a previously initiated document submission. */
	export interface DocumentUploadStatus {

		/** Required */
		attributes: DocumentUploadStatusAttributes;

		/**
		 * JSON API identifier
		 * Required
		 */
		id: string;

		/**
		 * JSON API type specification
		 * Required
		 */
		type: string;
	}

	/** Status record for a previously initiated document submission. */
	export interface DocumentUploadStatusFormProperties {

		/**
		 * JSON API identifier
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * JSON API type specification
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDocumentUploadStatusFormGroup() {
		return new FormGroup<DocumentUploadStatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DocumentUploadStatusAttributes {

		/**
		 * Unambiguous status code. Only present if status = "error"
		 * * `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.
		 * * `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.
		 * * `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.
		 * * `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.
		 * * `DOC105` - Invalid or unknown id
		 * * `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.
		 * * `DOC107` - Empty payload.
		 * * `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.
		 * * `DOC201` - Upload server error.
		 * * `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.
		 */
		code?: string | null;

		/** Human readable error detail. Only present if status = "error" */
		detail?: string | null;

		/**
		 * The document upload identifier
		 * Required
		 */
		guid: string;

		/** Human readable error description. Only present if status = "error" */
		message?: string | null;

		/**
		 * Document upload status.
		 * Required
		 */
		status: DocumentUploadAttributesStatus;

		/** The last time the submission was updated */
		updated_at?: Date | null;
		uploaded_pdf?: PdfUploadAttributes;
	}
	export interface DocumentUploadStatusAttributesFormProperties {

		/**
		 * Unambiguous status code. Only present if status = "error"
		 * * `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.
		 * * `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.
		 * * `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.
		 * * `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.
		 * * `DOC105` - Invalid or unknown id
		 * * `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.
		 * * `DOC107` - Empty payload.
		 * * `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.
		 * * `DOC201` - Upload server error.
		 * * `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.
		 */
		code: FormControl<string | null | undefined>,

		/** Human readable error detail. Only present if status = "error" */
		detail: FormControl<string | null | undefined>,

		/**
		 * The document upload identifier
		 * Required
		 */
		guid: FormControl<string | null | undefined>,

		/** Human readable error description. Only present if status = "error" */
		message: FormControl<string | null | undefined>,

		/**
		 * Document upload status.
		 * Required
		 */
		status: FormControl<DocumentUploadAttributesStatus | null | undefined>,

		/** The last time the submission was updated */
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateDocumentUploadStatusAttributesFormGroup() {
		return new FormGroup<DocumentUploadStatusAttributesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DocumentUploadAttributesStatus | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DocumentUploadStatusGuidList {

		/**
		 * List of IDs for previous document upload submissions
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		ids: Array<string>;
	}
	export interface DocumentUploadStatusGuidListFormProperties {
	}
	export function CreateDocumentUploadStatusGuidListFormGroup() {
		return new FormGroup<DocumentUploadStatusGuidListFormProperties>({
		});

	}


	/** Record of requested document submission. Includes the location to which the document payload is to be uploaded */
	export interface DocumentUploadSubmission {

		/** Required */
		attributes: DocumentUploadSubmissionAttributes;

		/**
		 * JSON API Identifier
		 * Required
		 */
		id: string;

		/**
		 * JSON API type specification
		 * Required
		 */
		type: string;
	}

	/** Record of requested document submission. Includes the location to which the document payload is to be uploaded */
	export interface DocumentUploadSubmissionFormProperties {

		/**
		 * JSON API Identifier
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * JSON API type specification
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDocumentUploadSubmissionFormGroup() {
		return new FormGroup<DocumentUploadSubmissionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DocumentUploadSubmissionAttributes {
	}
	export interface DocumentUploadSubmissionAttributesFormProperties {
	}
	export function CreateDocumentUploadSubmissionAttributesFormGroup() {
		return new FormGroup<DocumentUploadSubmissionAttributesFormProperties>({
		});

	}


	/** Error returned from the document validation endpoint. */
	export interface DocumentValidationErrorModel {

		/**
		 * Error detail
		 * Possible values:
		 * * Document was not provided
		 * * Document is not a PDF
		 * * Document exceeds the file size limit of 100 MB
		 * * Document exceeds the page size limit of 21 in. x 21 in.
		 * * Document is locked with a user password
		 * * Document is not a valid PDF
		 * Required
		 */
		detail: string;

		/**
		 * HTTP error code
		 * Required
		 */
		status: string;

		/**
		 * Error title
		 * Required
		 */
		title: string;
	}

	/** Error returned from the document validation endpoint. */
	export interface DocumentValidationErrorModelFormProperties {

		/**
		 * Error detail
		 * Possible values:
		 * * Document was not provided
		 * * Document is not a PDF
		 * * Document exceeds the file size limit of 100 MB
		 * * Document exceeds the page size limit of 21 in. x 21 in.
		 * * Document is locked with a user password
		 * * Document is not a valid PDF
		 * Required
		 */
		detail: FormControl<string | null | undefined>,

		/**
		 * HTTP error code
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * Error title
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateDocumentValidationErrorModelFormGroup() {
		return new FormGroup<DocumentValidationErrorModelFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Errors with some details for the given request */
	export interface ErrorModel {

		/**
		 * A more detailed message about why an error occurred
		 * Required
		 */
		detail: string;

		/**
		 * Standard HTTP Status returned with Error
		 * Required
		 */
		status: number;
	}

	/** Errors with some details for the given request */
	export interface ErrorModelFormProperties {

		/**
		 * A more detailed message about why an error occurred
		 * Required
		 */
		detail: FormControl<string | null | undefined>,

		/**
		 * Standard HTTP Status returned with Error
		 * Required
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateErrorModelFormGroup() {
		return new FormGroup<ErrorModelFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PdfDimensionAttributes {

		/**
		 * The document height
		 * Required
		 */
		height: number;

		/**
		 * Indicates if this is an oversized PDF (greater than 21x21)
		 * Required
		 */
		oversized_pdf: boolean;

		/**
		 * The document width
		 * Required
		 */
		width: number;
	}
	export interface PdfDimensionAttributesFormProperties {

		/**
		 * The document height
		 * Required
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Indicates if this is an oversized PDF (greater than 21x21)
		 * Required
		 */
		oversized_pdf: FormControl<boolean | null | undefined>,

		/**
		 * The document width
		 * Required
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePdfDimensionAttributesFormGroup() {
		return new FormGroup<PdfDimensionAttributesFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			oversized_pdf: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PdfUploadAttributes {

		/** Required */
		content: any;

		/**
		 * The total number of documents contained in this upload
		 * Required
		 */
		total_documents: number;

		/**
		 * The total number of pages contained in this upload
		 * Required
		 */
		total_pages: number;
	}
	export interface PdfUploadAttributesFormProperties {

		/** Required */
		content: FormControl<any | null | undefined>,

		/**
		 * The total number of documents contained in this upload
		 * Required
		 */
		total_documents: FormControl<number | null | undefined>,

		/**
		 * The total number of pages contained in this upload
		 * Required
		 */
		total_pages: FormControl<number | null | undefined>,
	}
	export function CreatePdfUploadAttributesFormGroup() {
		return new FormGroup<PdfUploadAttributesFormProperties>({
			content: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			total_documents: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_pages: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Accepts document upload.
		 * Accepts document metadata, document binary, and attachment binaries. Full URL, including
		 * query parameters, provided from POST `/document_uploads`.
		 * ## Example Payload
		 * The following demonstrates a (redacted) multipart payload suitable for submitting to the PUT
		 * endpoint. Most programming languages should have provisions for assembling a multipart
		 * payload like this without having to do so manually.
		 * ```
		 * --17de1ed8f01442b2a2d7a93506314b76
		 * Content-Disposition: form-data; name="metadata"
		 * Content-Type: application/json
		 * {"veteranFirstName": "Jane",
		 * "veteranLastName": "Doe",
		 * "fileNumber": "012345678",
		 * "zipCode": "97202",
		 * "source": "MyVSO",
		 * "docType": "21-22"
		 * "businessLine": "CMP"}
		 * --17de1ed8f01442b2a2d7a93506314b76
		 * Content-Disposition: form-data; name="content"
		 * Content-Type: application/pdf
		 * <Binary PDF contents>
		 * --17de1ed8f01442b2a2d7a93506314b76
		 * Content-Disposition: form-data; name="attachment1"
		 * Content-Type: application/pdf
		 * <Binary PDF attachment contents>
		 * --17de1ed8f01442b2a2d7a93506314b76--
		 * ```
		 * This PUT request would have an overall HTTP Content-Type header:
		 * ```
		 * Content-Type: multipart/form-data; boundary=17de1ed8f01442b2a2d7a93506314b76
		 * ```
		 * Note that the Content-Disposition parameter "name" in each part must be the expected values
		 * "metadata", "content", "attachment1"..."attachmentN". The attachment attributes must be named
		 * exactly as they are listed here (case sensitive), for example: "attachment_1" or "Attachment2"
		 * are invalid.
		 * This is an example curl command:
		 * ```
		 * curl -v -L -X PUT '<Location from \uploads>' -F 'metadata="{\"veteranFirstName\": \"Jane\",\"veteranLastName\": \"Doe\",\"fileNumber\": \"012345678\",\"zipCode\": \"97202\",\"source\": \"MyVSO\",\"docType\": \"21-22\",\"businessLine\": \"CMP\"}";type=application/json' -F 'content=@"content.pdf"' -F 'attachment1=@"file1.pdf"' -F 'attachment2=@"another_file.pdf"'
		 * ```
		 * Put path
		 * @return {void} Document upload staged
		 */
		PutBenefitsDocumentUpload(): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'path', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a location for subsequent document upload PUT request
		 * Post uploads
		 * @return {void} 
		 */
		PostBenefitsDocumentUpload(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'uploads', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a bulk status report for a list of previous uploads
		 * Post uploads/report
		 * @param {DocumentUploadStatusGuidList} requestBody List of GUIDs for which to retrieve current status
		 * @return {GetBenefitsDocumentUploadStatusReportReturn} Upload status report retrieved successfully
		 */
		GetBenefitsDocumentUploadStatusReport(requestBody: DocumentUploadStatusGuidList): Observable<GetBenefitsDocumentUploadStatusReportReturn> {
			return this.http.post<GetBenefitsDocumentUploadStatusReportReturn>(this.baseUri + 'uploads/report', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validate an individual document against system file requirements
		 * Using this endpoint will decrease the likelihood of errors associated with individual documents during
		 * the submission process. Validations performed:
		 * * Document is a valid PDF (Note: `Content-Type` header value must be "application/pdf")
		 * * Document does not have a user password (an owner password is acceptable)
		 * * File size does not exceed 100 MB
		 * * Page size does not exceed 21" x 21"
		 * Each PDF document is sent as a direct file upload. The request body should contain nothing other than the document in
		 * binary format. Binary multipart/form-data encoding is not supported. This endpoint does NOT validate metadata in JSON
		 * format.
		 * This endpoint does NOT initiate the claims intake process or submit data to that process. After using this endpoint,
		 * individual PDF documents can be combined and submitted as a payload using PUT `/path`.
		 * A `200` response confirms that the individual document provided passes the system requirements.
		 * A `422` response indicates one or more problems with the document that should be resolved before submitting it in the
		 * full document submission payload.
		 * Post uploads/validate_document
		 * @return {PostBenefitsDocumentUploadValidateDocumentReturn} Document passed system requirements
		 */
		PostBenefitsDocumentUploadValidateDocument(): Observable<PostBenefitsDocumentUploadValidateDocumentReturn> {
			return this.http.post<PostBenefitsDocumentUploadValidateDocumentReturn>(this.baseUri + 'uploads/validate_document', null, {});
		}

		/**
		 * Get status for a previous benefits document upload
		 * Get uploads/{id}
		 * @param {string} id ID as returned by a previous create upload request
		 * @return {any} Upload status retrieved successfully
		 */
		GetBenefitsDocumentUploadStatus(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'uploads/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Download zip of "what the server sees"
		 * An endpoint that will allow you to see exactly what the server sees. We split apart all submitted docs and metadata and zip the file to make it available to you to help with debugging purposes. Files are deleted after 10 days. Only available in testing environments, not production.
		 * Get uploads/{id}/download
		 * @param {string} id ID as returned by a previous create upload request
		 * @return {void} Zip file with the contents of your payload as parsed by our server
		 */
		GetBenefitsDocumentUploadDownload(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'uploads/' + (id == null ? '' : encodeURIComponent(id)) + '/download', { observe: 'response', responseType: 'text' });
		}
	}

	export interface GetBenefitsDocumentUploadStatusReportReturn {

		/** Required */
		data: Array<DocumentUploadStatus>;
	}
	export interface GetBenefitsDocumentUploadStatusReportReturnFormProperties {
	}
	export function CreateGetBenefitsDocumentUploadStatusReportReturnFormGroup() {
		return new FormGroup<GetBenefitsDocumentUploadStatusReportReturnFormProperties>({
		});

	}

	export interface PostBenefitsDocumentUploadValidateDocumentReturn {
		data?: any;
	}
	export interface PostBenefitsDocumentUploadValidateDocumentReturnFormProperties {
		data: FormControl<any | null | undefined>,
	}
	export function CreatePostBenefitsDocumentUploadValidateDocumentReturnFormGroup() {
		return new FormGroup<PostBenefitsDocumentUploadValidateDocumentReturnFormProperties>({
			data: new FormControl<any | null | undefined>(undefined),
		});

	}

}

