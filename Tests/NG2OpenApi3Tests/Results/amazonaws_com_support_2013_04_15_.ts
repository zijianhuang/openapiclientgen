import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation. */
	export interface AddAttachmentsToSetResponse {
		attachmentSetId?: string;
		expiryTime?: string;
	}

	/** The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation. */
	export interface AddAttachmentsToSetResponseFormProperties {
		attachmentSetId: FormControl<string | null | undefined>,
		expiryTime: FormControl<string | null | undefined>,
	}
	export function CreateAddAttachmentsToSetResponseFormGroup() {
		return new FormGroup<AddAttachmentsToSetResponseFormProperties>({
			attachmentSetId: new FormControl<string | null | undefined>(undefined),
			expiryTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddAttachmentsToSetRequest {
		attachmentSetId?: string;

		/** Required */
		attachments: Array<Attachment>;
	}
	export interface AddAttachmentsToSetRequestFormProperties {
		attachmentSetId: FormControl<string | null | undefined>,
	}
	export function CreateAddAttachmentsToSetRequestFormGroup() {
		return new FormGroup<AddAttachmentsToSetRequestFormProperties>({
			attachmentSetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An attachment to a case communication. The attachment consists of the file name and the content of the file. */
	export interface Attachment {
		fileName?: string;
		data?: string;
	}

	/** An attachment to a case communication. The attachment consists of the file name and the content of the file. */
	export interface AttachmentFormProperties {
		fileName: FormControl<string | null | undefined>,
		data: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InternalServerError {
	}
	export interface InternalServerErrorFormProperties {
	}
	export function CreateInternalServerErrorFormGroup() {
		return new FormGroup<InternalServerErrorFormProperties>({
		});

	}

	export interface AttachmentSetIdNotFound {
	}
	export interface AttachmentSetIdNotFoundFormProperties {
	}
	export function CreateAttachmentSetIdNotFoundFormGroup() {
		return new FormGroup<AttachmentSetIdNotFoundFormProperties>({
		});

	}

	export interface AttachmentSetExpired {
	}
	export interface AttachmentSetExpiredFormProperties {
	}
	export function CreateAttachmentSetExpiredFormGroup() {
		return new FormGroup<AttachmentSetExpiredFormProperties>({
		});

	}

	export interface AttachmentSetSizeLimitExceeded {
	}
	export interface AttachmentSetSizeLimitExceededFormProperties {
	}
	export function CreateAttachmentSetSizeLimitExceededFormGroup() {
		return new FormGroup<AttachmentSetSizeLimitExceededFormProperties>({
		});

	}

	export interface AttachmentLimitExceeded {
	}
	export interface AttachmentLimitExceededFormProperties {
	}
	export function CreateAttachmentLimitExceededFormGroup() {
		return new FormGroup<AttachmentLimitExceededFormProperties>({
		});

	}


	/** The result of the <a>AddCommunicationToCase</a> operation. */
	export interface AddCommunicationToCaseResponse {
		result?: boolean | null;
	}

	/** The result of the <a>AddCommunicationToCase</a> operation. */
	export interface AddCommunicationToCaseResponseFormProperties {
		result: FormControl<boolean | null | undefined>,
	}
	export function CreateAddCommunicationToCaseResponseFormGroup() {
		return new FormGroup<AddCommunicationToCaseResponseFormProperties>({
			result: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AddCommunicationToCaseRequest {
		caseId?: string;

		/** Required */
		communicationBody: string;
		ccEmailAddresses?: Array<string>;
		attachmentSetId?: string;
	}
	export interface AddCommunicationToCaseRequestFormProperties {
		caseId: FormControl<string | null | undefined>,

		/** Required */
		communicationBody: FormControl<string | null | undefined>,
		attachmentSetId: FormControl<string | null | undefined>,
	}
	export function CreateAddCommunicationToCaseRequestFormGroup() {
		return new FormGroup<AddCommunicationToCaseRequestFormProperties>({
			caseId: new FormControl<string | null | undefined>(undefined),
			communicationBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			attachmentSetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CaseIdNotFound {
	}
	export interface CaseIdNotFoundFormProperties {
	}
	export function CreateCaseIdNotFoundFormGroup() {
		return new FormGroup<CaseIdNotFoundFormProperties>({
		});

	}


	/** The support case ID returned by a successful completion of the <a>CreateCase</a> operation. */
	export interface CreateCaseResponse {
		caseId?: string;
	}

	/** The support case ID returned by a successful completion of the <a>CreateCase</a> operation. */
	export interface CreateCaseResponseFormProperties {
		caseId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCaseResponseFormGroup() {
		return new FormGroup<CreateCaseResponseFormProperties>({
			caseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCaseRequest {

		/** Required */
		subject: string;
		serviceCode?: string;
		severityCode?: string;
		categoryCode?: string;

		/** Required */
		communicationBody: string;
		ccEmailAddresses?: Array<string>;
		language?: string;
		issueType?: string;
		attachmentSetId?: string;
	}
	export interface CreateCaseRequestFormProperties {

		/** Required */
		subject: FormControl<string | null | undefined>,
		serviceCode: FormControl<string | null | undefined>,
		severityCode: FormControl<string | null | undefined>,
		categoryCode: FormControl<string | null | undefined>,

		/** Required */
		communicationBody: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		issueType: FormControl<string | null | undefined>,
		attachmentSetId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCaseRequestFormGroup() {
		return new FormGroup<CreateCaseRequestFormProperties>({
			subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceCode: new FormControl<string | null | undefined>(undefined),
			severityCode: new FormControl<string | null | undefined>(undefined),
			categoryCode: new FormControl<string | null | undefined>(undefined),
			communicationBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined),
			issueType: new FormControl<string | null | undefined>(undefined),
			attachmentSetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CaseCreationLimitExceeded {
	}
	export interface CaseCreationLimitExceededFormProperties {
	}
	export function CreateCaseCreationLimitExceededFormGroup() {
		return new FormGroup<CaseCreationLimitExceededFormProperties>({
		});

	}


	/** The content and file name of the attachment returned by the <a>DescribeAttachment</a> operation. */
	export interface DescribeAttachmentResponse {
		attachment?: Attachment;
	}

	/** The content and file name of the attachment returned by the <a>DescribeAttachment</a> operation. */
	export interface DescribeAttachmentResponseFormProperties {
	}
	export function CreateDescribeAttachmentResponseFormGroup() {
		return new FormGroup<DescribeAttachmentResponseFormProperties>({
		});

	}

	export interface DescribeAttachmentRequest {

		/** Required */
		attachmentId: string;
	}
	export interface DescribeAttachmentRequestFormProperties {

		/** Required */
		attachmentId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAttachmentRequestFormGroup() {
		return new FormGroup<DescribeAttachmentRequestFormProperties>({
			attachmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAttachmentLimitExceeded {
	}
	export interface DescribeAttachmentLimitExceededFormProperties {
	}
	export function CreateDescribeAttachmentLimitExceededFormGroup() {
		return new FormGroup<DescribeAttachmentLimitExceededFormProperties>({
		});

	}

	export interface AttachmentIdNotFound {
	}
	export interface AttachmentIdNotFoundFormProperties {
	}
	export function CreateAttachmentIdNotFoundFormGroup() {
		return new FormGroup<AttachmentIdNotFoundFormProperties>({
		});

	}


	/** Returns an array of <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> objects and a <code>nextToken</code> that defines a point for pagination in the result set. */
	export interface DescribeCasesResponse {
		cases?: Array<CaseDetails>;
		nextToken?: string;
	}

	/** Returns an array of <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> objects and a <code>nextToken</code> that defines a point for pagination in the result set. */
	export interface DescribeCasesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCasesResponseFormGroup() {
		return new FormGroup<DescribeCasesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A JSON-formatted object that contains the metadata for a support case. It is contained in the response from a <a>DescribeCases</a> request. <b>CaseDetails</b> contains the following fields:</p> <ul> <li> <p> <b>caseId</b> - The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>.</p> </li> <li> <p> <b>categoryCode</b> - The category of problem for the support case. Corresponds to the <code>CategoryCode</code> values returned by a call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>displayId</b> - The identifier for the case on pages in the Amazon Web Services Support Center.</p> </li> <li> <p> <b>language</b> - The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") and Korean (“ko”). You must specify the ISO 639-1 code for the <code>language</code> parameter if you want support in that language.</p> </li> <li> <p> <b>nextToken</b> - A resumption point for pagination.</p> </li> <li> <p> <b>recentCommunications</b> - One or more <a>Communication</a> objects. Fields of these objects are <code>attachments</code>, <code>body</code>, <code>caseId</code>, <code>submittedBy</code>, and <code>timeCreated</code>.</p> </li> <li> <p> <b>serviceCode</b> - The identifier for the Amazon Web Services service that corresponds to the service code defined in the call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>severityCode</b> - The severity code assigned to the case. Contains one of the values returned by the call to <a>DescribeSeverityLevels</a>. The possible values are: <code>low</code>, <code>normal</code>, <code>high</code>, <code>urgent</code>, and <code>critical</code>.</p> </li> <li> <p> <b>status</b> - The status of the case in the Amazon Web Services Support Center. Valid values:</p> <ul> <li> <p> <code>opened</code> </p> </li> <li> <p> <code>pending-customer-action</code> </p> </li> <li> <p> <code>reopened</code> </p> </li> <li> <p> <code>resolved</code> </p> </li> <li> <p> <code>unassigned</code> </p> </li> <li> <p> <code>work-in-progress</code> </p> </li> </ul> </li> <li> <p> <b>subject</b> - The subject line of the case.</p> </li> <li> <p> <b>submittedBy</b> - The email address of the account that submitted the case.</p> </li> <li> <p> <b>timeCreated</b> - The time the case was created, in ISO-8601 format.</p> </li> </ul> */
	export interface CaseDetails {
		caseId?: string;
		displayId?: string;
		subject?: string;
		status?: string;
		serviceCode?: string;
		categoryCode?: string;
		severityCode?: string;
		submittedBy?: string;
		timeCreated?: string;
		recentCommunications?: RecentCaseCommunications;
		ccEmailAddresses?: Array<string>;
		language?: string;
	}

	/** <p>A JSON-formatted object that contains the metadata for a support case. It is contained in the response from a <a>DescribeCases</a> request. <b>CaseDetails</b> contains the following fields:</p> <ul> <li> <p> <b>caseId</b> - The support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>.</p> </li> <li> <p> <b>categoryCode</b> - The category of problem for the support case. Corresponds to the <code>CategoryCode</code> values returned by a call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>displayId</b> - The identifier for the case on pages in the Amazon Web Services Support Center.</p> </li> <li> <p> <b>language</b> - The language in which Amazon Web Services Support handles the case. Amazon Web Services Support currently supports Chinese (“zh”), English ("en"), Japanese ("ja") and Korean (“ko”). You must specify the ISO 639-1 code for the <code>language</code> parameter if you want support in that language.</p> </li> <li> <p> <b>nextToken</b> - A resumption point for pagination.</p> </li> <li> <p> <b>recentCommunications</b> - One or more <a>Communication</a> objects. Fields of these objects are <code>attachments</code>, <code>body</code>, <code>caseId</code>, <code>submittedBy</code>, and <code>timeCreated</code>.</p> </li> <li> <p> <b>serviceCode</b> - The identifier for the Amazon Web Services service that corresponds to the service code defined in the call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>severityCode</b> - The severity code assigned to the case. Contains one of the values returned by the call to <a>DescribeSeverityLevels</a>. The possible values are: <code>low</code>, <code>normal</code>, <code>high</code>, <code>urgent</code>, and <code>critical</code>.</p> </li> <li> <p> <b>status</b> - The status of the case in the Amazon Web Services Support Center. Valid values:</p> <ul> <li> <p> <code>opened</code> </p> </li> <li> <p> <code>pending-customer-action</code> </p> </li> <li> <p> <code>reopened</code> </p> </li> <li> <p> <code>resolved</code> </p> </li> <li> <p> <code>unassigned</code> </p> </li> <li> <p> <code>work-in-progress</code> </p> </li> </ul> </li> <li> <p> <b>subject</b> - The subject line of the case.</p> </li> <li> <p> <b>submittedBy</b> - The email address of the account that submitted the case.</p> </li> <li> <p> <b>timeCreated</b> - The time the case was created, in ISO-8601 format.</p> </li> </ul> */
	export interface CaseDetailsFormProperties {
		caseId: FormControl<string | null | undefined>,
		displayId: FormControl<string | null | undefined>,
		subject: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		serviceCode: FormControl<string | null | undefined>,
		categoryCode: FormControl<string | null | undefined>,
		severityCode: FormControl<string | null | undefined>,
		submittedBy: FormControl<string | null | undefined>,
		timeCreated: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
	}
	export function CreateCaseDetailsFormGroup() {
		return new FormGroup<CaseDetailsFormProperties>({
			caseId: new FormControl<string | null | undefined>(undefined),
			displayId: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			serviceCode: new FormControl<string | null | undefined>(undefined),
			categoryCode: new FormControl<string | null | undefined>(undefined),
			severityCode: new FormControl<string | null | undefined>(undefined),
			submittedBy: new FormControl<string | null | undefined>(undefined),
			timeCreated: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The five most recent communications associated with the case. */
	export interface RecentCaseCommunications {
		communications?: Array<Communication>;
		nextToken?: string;
	}

	/** The five most recent communications associated with the case. */
	export interface RecentCaseCommunicationsFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateRecentCaseCommunicationsFormGroup() {
		return new FormGroup<RecentCaseCommunicationsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A communication associated with a support case. The communication consists of the case ID, the message body, attachment information, the submitter of the communication, and the date and time of the communication. */
	export interface Communication {
		caseId?: string;
		body?: string;
		submittedBy?: string;
		timeCreated?: string;
		attachmentSet?: Array<AttachmentDetails>;
	}

	/** A communication associated with a support case. The communication consists of the case ID, the message body, attachment information, the submitter of the communication, and the date and time of the communication. */
	export interface CommunicationFormProperties {
		caseId: FormControl<string | null | undefined>,
		body: FormControl<string | null | undefined>,
		submittedBy: FormControl<string | null | undefined>,
		timeCreated: FormControl<string | null | undefined>,
	}
	export function CreateCommunicationFormGroup() {
		return new FormGroup<CommunicationFormProperties>({
			caseId: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			submittedBy: new FormControl<string | null | undefined>(undefined),
			timeCreated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The file name and ID of an attachment to a case communication. You can use the ID to retrieve the attachment with the <a>DescribeAttachment</a> operation. */
	export interface AttachmentDetails {
		attachmentId?: string;
		fileName?: string;
	}

	/** The file name and ID of an attachment to a case communication. You can use the ID to retrieve the attachment with the <a>DescribeAttachment</a> operation. */
	export interface AttachmentDetailsFormProperties {
		attachmentId: FormControl<string | null | undefined>,
		fileName: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentDetailsFormGroup() {
		return new FormGroup<AttachmentDetailsFormProperties>({
			attachmentId: new FormControl<string | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCasesRequest {
		caseIdList?: Array<string>;
		displayId?: string;
		afterTime?: string;
		beforeTime?: string;
		includeResolvedCases?: boolean | null;
		nextToken?: string;
		maxResults?: number | null;
		language?: string;
		includeCommunications?: boolean | null;
	}
	export interface DescribeCasesRequestFormProperties {
		displayId: FormControl<string | null | undefined>,
		afterTime: FormControl<string | null | undefined>,
		beforeTime: FormControl<string | null | undefined>,
		includeResolvedCases: FormControl<boolean | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		language: FormControl<string | null | undefined>,
		includeCommunications: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeCasesRequestFormGroup() {
		return new FormGroup<DescribeCasesRequestFormProperties>({
			displayId: new FormControl<string | null | undefined>(undefined),
			afterTime: new FormControl<string | null | undefined>(undefined),
			beforeTime: new FormControl<string | null | undefined>(undefined),
			includeResolvedCases: new FormControl<boolean | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			includeCommunications: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The communications returned by the <a>DescribeCommunications</a> operation. */
	export interface DescribeCommunicationsResponse {
		communications?: Array<Communication>;
		nextToken?: string;
	}

	/** The communications returned by the <a>DescribeCommunications</a> operation. */
	export interface DescribeCommunicationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCommunicationsResponseFormGroup() {
		return new FormGroup<DescribeCommunicationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCommunicationsRequest {

		/** Required */
		caseId: string;
		beforeTime?: string;
		afterTime?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface DescribeCommunicationsRequestFormProperties {

		/** Required */
		caseId: FormControl<string | null | undefined>,
		beforeTime: FormControl<string | null | undefined>,
		afterTime: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeCommunicationsRequestFormGroup() {
		return new FormGroup<DescribeCommunicationsRequestFormProperties>({
			caseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			beforeTime: new FormControl<string | null | undefined>(undefined),
			afterTime: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeCreateCaseOptionsResponse {
		languageAvailability?: string;
		communicationTypes?: Array<CommunicationTypeOptions>;
	}
	export interface DescribeCreateCaseOptionsResponseFormProperties {
		languageAvailability: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCreateCaseOptionsResponseFormGroup() {
		return new FormGroup<DescribeCreateCaseOptionsResponseFormProperties>({
			languageAvailability: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A JSON-formatted object that contains the CommunicationTypeOptions for creating a case for a certain communication channel. It is contained in the response from a <a>DescribeCreateCaseOptions</a> request. <b>CommunicationTypeOptions</b> contains the following fields:</p> <ul> <li> <p> <b>datesWithoutSupport</b> - A JSON-formatted list containing date and time ranges for periods without support in UTC time. Date and time format is RFC 3339 : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'. </p> </li> <li> <p> <b>supportedHours</b> - A JSON-formatted list containing time ranges when support are available. Time format is RFC 3339 : 'HH:mm:ss.SSS'. </p> </li> <li> <p> <b>type</b> - A string value indicating the communication type that the aforementioned rules apply to. At the moment the type value can assume one of 3 values at the moment <code>chat</code>, <code>web</code> and <code>call</code>. </p> </li> </ul> */
	export interface CommunicationTypeOptions {
		type?: string;
		supportedHours?: Array<SupportedHour>;
		datesWithoutSupport?: Array<DateInterval>;
	}

	/** <p>A JSON-formatted object that contains the CommunicationTypeOptions for creating a case for a certain communication channel. It is contained in the response from a <a>DescribeCreateCaseOptions</a> request. <b>CommunicationTypeOptions</b> contains the following fields:</p> <ul> <li> <p> <b>datesWithoutSupport</b> - A JSON-formatted list containing date and time ranges for periods without support in UTC time. Date and time format is RFC 3339 : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'. </p> </li> <li> <p> <b>supportedHours</b> - A JSON-formatted list containing time ranges when support are available. Time format is RFC 3339 : 'HH:mm:ss.SSS'. </p> </li> <li> <p> <b>type</b> - A string value indicating the communication type that the aforementioned rules apply to. At the moment the type value can assume one of 3 values at the moment <code>chat</code>, <code>web</code> and <code>call</code>. </p> </li> </ul> */
	export interface CommunicationTypeOptionsFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateCommunicationTypeOptionsFormGroup() {
		return new FormGroup<CommunicationTypeOptionsFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Time range object with <code>startTime</code> and <code>endTime</code> range in RFC 3339 format. <code>'HH:mm:ss.SSS'</code>. */
	export interface SupportedHour {
		startTime?: string;
		endTime?: string;
	}

	/** Time range object with <code>startTime</code> and <code>endTime</code> range in RFC 3339 format. <code>'HH:mm:ss.SSS'</code>. */
	export interface SupportedHourFormProperties {
		startTime: FormControl<string | null | undefined>,
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateSupportedHourFormGroup() {
		return new FormGroup<SupportedHourFormProperties>({
			startTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Date and time (UTC) format in RFC 3339 : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'. */
	export interface DateInterval {
		startDateTime?: string;
		endDateTime?: string;
	}

	/** Date and time (UTC) format in RFC 3339 : 'yyyy-MM-dd'T'HH:mm:ss.SSSZZ'. */
	export interface DateIntervalFormProperties {
		startDateTime: FormControl<string | null | undefined>,
		endDateTime: FormControl<string | null | undefined>,
	}
	export function CreateDateIntervalFormGroup() {
		return new FormGroup<DateIntervalFormProperties>({
			startDateTime: new FormControl<string | null | undefined>(undefined),
			endDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCreateCaseOptionsRequest {

		/** Required */
		issueType: string;

		/** Required */
		serviceCode: string;

		/** Required */
		language: string;

		/** Required */
		categoryCode: string;
	}
	export interface DescribeCreateCaseOptionsRequestFormProperties {

		/** Required */
		issueType: FormControl<string | null | undefined>,

		/** Required */
		serviceCode: FormControl<string | null | undefined>,

		/** Required */
		language: FormControl<string | null | undefined>,

		/** Required */
		categoryCode: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCreateCaseOptionsRequestFormGroup() {
		return new FormGroup<DescribeCreateCaseOptionsRequestFormProperties>({
			issueType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			categoryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/** The list of Amazon Web Services services returned by the <a>DescribeServices</a> operation. */
	export interface DescribeServicesResponse {
		services?: Array<Service>;
	}

	/** The list of Amazon Web Services services returned by the <a>DescribeServices</a> operation. */
	export interface DescribeServicesResponseFormProperties {
	}
	export function CreateDescribeServicesResponseFormGroup() {
		return new FormGroup<DescribeServicesResponseFormProperties>({
		});

	}


	/** Information about an Amazon Web Services service returned by the <a>DescribeServices</a> operation. */
	export interface Service {
		code?: string;
		name?: string;
		categories?: Array<Category>;
	}

	/** Information about an Amazon Web Services service returned by the <a>DescribeServices</a> operation. */
	export interface ServiceFormProperties {
		code: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A JSON-formatted name/value pair that represents the category name and category code of the problem, selected from the <a>DescribeServices</a> response for each Amazon Web Services service. */
	export interface Category {
		code?: string;
		name?: string;
	}

	/** A JSON-formatted name/value pair that represents the category name and category code of the problem, selected from the <a>DescribeServices</a> response for each Amazon Web Services service. */
	export interface CategoryFormProperties {
		code: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeServicesRequest {
		serviceCodeList?: Array<string>;
		language?: string;
	}
	export interface DescribeServicesRequestFormProperties {
		language: FormControl<string | null | undefined>,
	}
	export function CreateDescribeServicesRequestFormGroup() {
		return new FormGroup<DescribeServicesRequestFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of severity levels returned by the <a>DescribeSeverityLevels</a> operation. */
	export interface DescribeSeverityLevelsResponse {
		severityLevels?: Array<SeverityLevel>;
	}

	/** The list of severity levels returned by the <a>DescribeSeverityLevels</a> operation. */
	export interface DescribeSeverityLevelsResponseFormProperties {
	}
	export function CreateDescribeSeverityLevelsResponseFormGroup() {
		return new FormGroup<DescribeSeverityLevelsResponseFormProperties>({
		});

	}


	/** A code and name pair that represents the severity level of a support case. The available values depend on the support plan for the account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/case-management.html#choosing-severity">Choosing a severity</a> in the <i>Amazon Web Services Support User Guide</i>. */
	export interface SeverityLevel {
		code?: string;
		name?: string;
	}

	/** A code and name pair that represents the severity level of a support case. The available values depend on the support plan for the account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/case-management.html#choosing-severity">Choosing a severity</a> in the <i>Amazon Web Services Support User Guide</i>. */
	export interface SeverityLevelFormProperties {
		code: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateSeverityLevelFormGroup() {
		return new FormGroup<SeverityLevelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSeverityLevelsRequest {
		language?: string;
	}
	export interface DescribeSeverityLevelsRequestFormProperties {
		language: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSeverityLevelsRequestFormGroup() {
		return new FormGroup<DescribeSeverityLevelsRequestFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSupportedLanguagesResponse {
		supportedLanguages?: Array<SupportedLanguage>;
	}
	export interface DescribeSupportedLanguagesResponseFormProperties {
	}
	export function CreateDescribeSupportedLanguagesResponseFormGroup() {
		return new FormGroup<DescribeSupportedLanguagesResponseFormProperties>({
		});

	}


	/**  A JSON-formatted object that contains the available ISO 639-1 language <code>code</code>, <code>language</code> name and langauge <code>display</code> value. The language code is what should be used in the <a>CreateCase</a> call.  */
	export interface SupportedLanguage {
		code?: string;
		language?: string;
		display?: string;
	}

	/**  A JSON-formatted object that contains the available ISO 639-1 language <code>code</code>, <code>language</code> name and langauge <code>display</code> value. The language code is what should be used in the <a>CreateCase</a> call.  */
	export interface SupportedLanguageFormProperties {
		code: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		display: FormControl<string | null | undefined>,
	}
	export function CreateSupportedLanguageFormGroup() {
		return new FormGroup<SupportedLanguageFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			display: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSupportedLanguagesRequest {

		/** Required */
		issueType: string;

		/** Required */
		serviceCode: string;

		/** Required */
		categoryCode: string;
	}
	export interface DescribeSupportedLanguagesRequestFormProperties {

		/** Required */
		issueType: FormControl<string | null | undefined>,

		/** Required */
		serviceCode: FormControl<string | null | undefined>,

		/** Required */
		categoryCode: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSupportedLanguagesRequestFormGroup() {
		return new FormGroup<DescribeSupportedLanguagesRequestFormProperties>({
			issueType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			categoryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation. */
	export interface DescribeTrustedAdvisorCheckRefreshStatusesResponse {

		/** Required */
		statuses: Array<TrustedAdvisorCheckRefreshStatus>;
	}

	/** The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation. */
	export interface DescribeTrustedAdvisorCheckRefreshStatusesResponseFormProperties {
	}
	export function CreateDescribeTrustedAdvisorCheckRefreshStatusesResponseFormGroup() {
		return new FormGroup<DescribeTrustedAdvisorCheckRefreshStatusesResponseFormProperties>({
		});

	}


	/** The refresh status of a Trusted Advisor check. */
	export interface TrustedAdvisorCheckRefreshStatus {

		/** Required */
		checkId: string;

		/** Required */
		status: string;

		/** Required */
		millisUntilNextRefreshable: number;
	}

	/** The refresh status of a Trusted Advisor check. */
	export interface TrustedAdvisorCheckRefreshStatusFormProperties {

		/** Required */
		checkId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,

		/** Required */
		millisUntilNextRefreshable: FormControl<number | null | undefined>,
	}
	export function CreateTrustedAdvisorCheckRefreshStatusFormGroup() {
		return new FormGroup<TrustedAdvisorCheckRefreshStatusFormProperties>({
			checkId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			millisUntilNextRefreshable: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeTrustedAdvisorCheckRefreshStatusesRequest {

		/** Required */
		checkIds: Array<string>;
	}
	export interface DescribeTrustedAdvisorCheckRefreshStatusesRequestFormProperties {
	}
	export function CreateDescribeTrustedAdvisorCheckRefreshStatusesRequestFormGroup() {
		return new FormGroup<DescribeTrustedAdvisorCheckRefreshStatusesRequestFormProperties>({
		});

	}


	/** The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation. */
	export interface DescribeTrustedAdvisorCheckResultResponse {
		result?: TrustedAdvisorCheckResult;
	}

	/** The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation. */
	export interface DescribeTrustedAdvisorCheckResultResponseFormProperties {
	}
	export function CreateDescribeTrustedAdvisorCheckResultResponseFormGroup() {
		return new FormGroup<DescribeTrustedAdvisorCheckResultResponseFormProperties>({
		});

	}


	/** The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>. */
	export interface TrustedAdvisorCheckResult {

		/** Required */
		checkId: string;

		/** Required */
		timestamp: string;

		/** Required */
		status: string;

		/**
		 * Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.
		 * Required
		 */
		resourcesSummary: TrustedAdvisorResourcesSummary;

		/** Required */
		categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;

		/** Required */
		flaggedResources: Array<TrustedAdvisorResourceDetail>;
	}

	/** The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>. */
	export interface TrustedAdvisorCheckResultFormProperties {

		/** Required */
		checkId: FormControl<string | null | undefined>,

		/** Required */
		timestamp: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateTrustedAdvisorCheckResultFormGroup() {
		return new FormGroup<TrustedAdvisorCheckResultFormProperties>({
			checkId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>. */
	export interface TrustedAdvisorResourcesSummary {

		/** Required */
		resourcesProcessed: number;

		/** Required */
		resourcesFlagged: number;

		/** Required */
		resourcesIgnored: number;

		/** Required */
		resourcesSuppressed: number;
	}

	/** Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>. */
	export interface TrustedAdvisorResourcesSummaryFormProperties {

		/** Required */
		resourcesProcessed: FormControl<number | null | undefined>,

		/** Required */
		resourcesFlagged: FormControl<number | null | undefined>,

		/** Required */
		resourcesIgnored: FormControl<number | null | undefined>,

		/** Required */
		resourcesSuppressed: FormControl<number | null | undefined>,
	}
	export function CreateTrustedAdvisorResourcesSummaryFormGroup() {
		return new FormGroup<TrustedAdvisorResourcesSummaryFormProperties>({
			resourcesProcessed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			resourcesFlagged: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			resourcesIgnored: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			resourcesSuppressed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The container for summary information that relates to the category of the Trusted Advisor check. */
	export interface TrustedAdvisorCategorySpecificSummary {
		costOptimizing?: TrustedAdvisorCostOptimizingSummary;
	}

	/** The container for summary information that relates to the category of the Trusted Advisor check. */
	export interface TrustedAdvisorCategorySpecificSummaryFormProperties {
	}
	export function CreateTrustedAdvisorCategorySpecificSummaryFormGroup() {
		return new FormGroup<TrustedAdvisorCategorySpecificSummaryFormProperties>({
		});

	}


	/** The estimated cost savings that might be realized if the recommended operations are taken. */
	export interface TrustedAdvisorCostOptimizingSummary {

		/** Required */
		estimatedMonthlySavings: number;

		/** Required */
		estimatedPercentMonthlySavings: number;
	}

	/** The estimated cost savings that might be realized if the recommended operations are taken. */
	export interface TrustedAdvisorCostOptimizingSummaryFormProperties {

		/** Required */
		estimatedMonthlySavings: FormControl<number | null | undefined>,

		/** Required */
		estimatedPercentMonthlySavings: FormControl<number | null | undefined>,
	}
	export function CreateTrustedAdvisorCostOptimizingSummaryFormGroup() {
		return new FormGroup<TrustedAdvisorCostOptimizingSummaryFormProperties>({
			estimatedMonthlySavings: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			estimatedPercentMonthlySavings: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about a resource identified by a Trusted Advisor check. */
	export interface TrustedAdvisorResourceDetail {

		/** Required */
		status: string;
		region?: string;

		/** Required */
		resourceId: string;
		isSuppressed?: boolean | null;

		/** Required */
		metadata: Array<string>;
	}

	/** Contains information about a resource identified by a Trusted Advisor check. */
	export interface TrustedAdvisorResourceDetailFormProperties {

		/** Required */
		status: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,

		/** Required */
		resourceId: FormControl<string | null | undefined>,
		isSuppressed: FormControl<boolean | null | undefined>,
	}
	export function CreateTrustedAdvisorResourceDetailFormGroup() {
		return new FormGroup<TrustedAdvisorResourceDetailFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isSuppressed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeTrustedAdvisorCheckResultRequest {

		/** Required */
		checkId: string;
		language?: string;
	}

	/** <p/> */
	export interface DescribeTrustedAdvisorCheckResultRequestFormProperties {

		/** Required */
		checkId: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTrustedAdvisorCheckResultRequestFormGroup() {
		return new FormGroup<DescribeTrustedAdvisorCheckResultRequestFormProperties>({
			checkId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation. */
	export interface DescribeTrustedAdvisorCheckSummariesResponse {

		/** Required */
		summaries: Array<TrustedAdvisorCheckSummary>;
	}

	/** The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation. */
	export interface DescribeTrustedAdvisorCheckSummariesResponseFormProperties {
	}
	export function CreateDescribeTrustedAdvisorCheckSummariesResponseFormGroup() {
		return new FormGroup<DescribeTrustedAdvisorCheckSummariesResponseFormProperties>({
		});

	}


	/** A summary of a Trusted Advisor check result, including the alert status, last refresh, and number of resources examined. */
	export interface TrustedAdvisorCheckSummary {

		/** Required */
		checkId: string;

		/** Required */
		timestamp: string;

		/** Required */
		status: string;
		hasFlaggedResources?: boolean | null;

		/**
		 * Details about Amazon Web Services resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.
		 * Required
		 */
		resourcesSummary: TrustedAdvisorResourcesSummary;

		/** Required */
		categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
	}

	/** A summary of a Trusted Advisor check result, including the alert status, last refresh, and number of resources examined. */
	export interface TrustedAdvisorCheckSummaryFormProperties {

		/** Required */
		checkId: FormControl<string | null | undefined>,

		/** Required */
		timestamp: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
		hasFlaggedResources: FormControl<boolean | null | undefined>,
	}
	export function CreateTrustedAdvisorCheckSummaryFormGroup() {
		return new FormGroup<TrustedAdvisorCheckSummaryFormProperties>({
			checkId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hasFlaggedResources: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeTrustedAdvisorCheckSummariesRequest {

		/** Required */
		checkIds: Array<string>;
	}
	export interface DescribeTrustedAdvisorCheckSummariesRequestFormProperties {
	}
	export function CreateDescribeTrustedAdvisorCheckSummariesRequestFormGroup() {
		return new FormGroup<DescribeTrustedAdvisorCheckSummariesRequestFormProperties>({
		});

	}


	/** Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation. */
	export interface DescribeTrustedAdvisorChecksResponse {

		/** Required */
		checks: Array<TrustedAdvisorCheckDescription>;
	}

	/** Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation. */
	export interface DescribeTrustedAdvisorChecksResponseFormProperties {
	}
	export function CreateDescribeTrustedAdvisorChecksResponseFormGroup() {
		return new FormGroup<DescribeTrustedAdvisorChecksResponseFormProperties>({
		});

	}


	/** The description and metadata for a Trusted Advisor check. */
	export interface TrustedAdvisorCheckDescription {

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		description: string;

		/** Required */
		category: string;

		/** Required */
		metadata: Array<string>;
	}

	/** The description and metadata for a Trusted Advisor check. */
	export interface TrustedAdvisorCheckDescriptionFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		category: FormControl<string | null | undefined>,
	}
	export function CreateTrustedAdvisorCheckDescriptionFormGroup() {
		return new FormGroup<TrustedAdvisorCheckDescriptionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeTrustedAdvisorChecksRequest {

		/** Required */
		language: string;
	}
	export interface DescribeTrustedAdvisorChecksRequestFormProperties {

		/** Required */
		language: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTrustedAdvisorChecksRequestFormGroup() {
		return new FormGroup<DescribeTrustedAdvisorChecksRequestFormProperties>({
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The current refresh status of a Trusted Advisor check. */
	export interface RefreshTrustedAdvisorCheckResponse {

		/** Required */
		status: TrustedAdvisorCheckRefreshStatus;
	}

	/** The current refresh status of a Trusted Advisor check. */
	export interface RefreshTrustedAdvisorCheckResponseFormProperties {
	}
	export function CreateRefreshTrustedAdvisorCheckResponseFormGroup() {
		return new FormGroup<RefreshTrustedAdvisorCheckResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface RefreshTrustedAdvisorCheckRequest {

		/** Required */
		checkId: string;
	}

	/** <p/> */
	export interface RefreshTrustedAdvisorCheckRequestFormProperties {

		/** Required */
		checkId: FormControl<string | null | undefined>,
	}
	export function CreateRefreshTrustedAdvisorCheckRequestFormGroup() {
		return new FormGroup<RefreshTrustedAdvisorCheckRequestFormProperties>({
			checkId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The status of the case returned by the <a>ResolveCase</a> operation. */
	export interface ResolveCaseResponse {
		initialCaseStatus?: string;
		finalCaseStatus?: string;
	}

	/** The status of the case returned by the <a>ResolveCase</a> operation. */
	export interface ResolveCaseResponseFormProperties {
		initialCaseStatus: FormControl<string | null | undefined>,
		finalCaseStatus: FormControl<string | null | undefined>,
	}
	export function CreateResolveCaseResponseFormGroup() {
		return new FormGroup<ResolveCaseResponseFormProperties>({
			initialCaseStatus: new FormControl<string | null | undefined>(undefined),
			finalCaseStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResolveCaseRequest {
		caseId?: string;
	}
	export interface ResolveCaseRequestFormProperties {
		caseId: FormControl<string | null | undefined>,
	}
	export function CreateResolveCaseRequestFormGroup() {
		return new FormGroup<ResolveCaseRequestFormProperties>({
			caseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds one or more attachments to an attachment set. </p> <p>An attachment set is a temporary container for attachments that you add to a case or case communication. The set is available for 1 hour after it's created. The <code>expiryTime</code> returned in the response is when the set expires. </p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet
		 * @return {AddAttachmentsToSetResponse} Success
		 */
		AddAttachmentsToSet(requestBody: AddAttachmentsToSetRequest): Observable<AddAttachmentsToSetResponse> {
			return this.http.post<AddAttachmentsToSetResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds additional customer communication to an Amazon Web Services Support case. Use the <code>caseId</code> parameter to identify the case to which to add communication. You can list a set of email addresses to copy on the communication by using the <code>ccEmailAddresses</code> parameter. The <code>communicationBody</code> value contains the text of the communication.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase
		 * @return {AddCommunicationToCaseResponse} Success
		 */
		AddCommunicationToCase(requestBody: AddCommunicationToCaseRequest): Observable<AddCommunicationToCaseResponse> {
			return this.http.post<AddCommunicationToCaseResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a case in the Amazon Web Services Support Center. This operation is similar to how you create a case in the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p> <p>The Amazon Web Services Support API doesn't support requesting service limit increases. You can submit a service limit increase in the following ways: </p> <ul> <li> <p>Submit a request from the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p> </li> <li> <p>Use the Service Quotas <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html">RequestServiceQuotaIncrease</a> operation.</p> </li> </ul> <p>A successful <code>CreateCase</code> request returns an Amazon Web Services Support case number. You can use the <a>DescribeCases</a> operation and specify the case number to get existing Amazon Web Services Support cases. After you create a case, use the <a>AddCommunicationToCase</a> operation to add additional communication or attachments to an existing case.</p> <p>The <code>caseId</code> is separate from the <code>displayId</code> that appears in the <a href="https://console.aws.amazon.com/support">Amazon Web Services Support Center</a>. Use the <a>DescribeCases</a> operation to get the <code>displayId</code>.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSSupport_20130415.CreateCase
		 * @return {CreateCaseResponse} Success
		 */
		CreateCase(requestBody: CreateCaseRequest): Observable<CreateCaseResponse> {
			return this.http.post<CreateCaseResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.CreateCase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the attachment that has the specified ID. Attachments can include screenshots, error logs, or other files that describe your issue. Attachment IDs are generated by the case management system when you add an attachment to a case or case communication. Attachment IDs are returned in the <a>AttachmentDetails</a> objects that are returned by the <a>DescribeCommunications</a> operation.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeAttachment
		 * @return {DescribeAttachmentResponse} Success
		 */
		DescribeAttachment(requestBody: DescribeAttachmentRequest): Observable<DescribeAttachmentResponse> {
			return this.http.post<DescribeAttachmentResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeAttachment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of cases that you specify by passing one or more case IDs. You can use the <code>afterTime</code> and <code>beforeTime</code> parameters to filter the cases by date. You can set values for the <code>includeResolvedCases</code> and <code>includeCommunications</code> parameters to specify how much information to return.</p> <p>The response returns the following in JSON format:</p> <ul> <li> <p>One or more <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> data types.</p> </li> <li> <p>One or more <code>nextToken</code> values, which specify where to paginate the returned records represented by the <code>CaseDetails</code> objects.</p> </li> </ul> <p>Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request might return an error.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeCases
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeCasesResponse} Success
		 */
		DescribeCases(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeCasesRequest): Observable<DescribeCasesResponse> {
			return this.http.post<DescribeCasesResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeCases?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns communications and attachments for one or more support cases. Use the <code>afterTime</code> and <code>beforeTime</code> parameters to filter by date. You can use the <code>caseId</code> parameter to restrict the results to a specific case.</p> <p>Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request for data might cause an error.</p> <p>You can use the <code>maxResults</code> and <code>nextToken</code> parameters to control the pagination of the results. Set <code>maxResults</code> to the number of cases that you want to display on each page, and use <code>nextToken</code> to specify the resumption of pagination.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeCommunications
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeCommunicationsResponse} Success
		 */
		DescribeCommunications(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeCommunicationsRequest): Observable<DescribeCommunicationsResponse> {
			return this.http.post<DescribeCommunicationsResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeCommunications?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of CreateCaseOption types along with the corresponding supported hours and language availability. You can specify the <code>language</code> <code>categoryCode</code>, <code>issueType</code> and <code>serviceCode</code> used to retrieve the CreateCaseOptions.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeCreateCaseOptions
		 * @return {DescribeCreateCaseOptionsResponse} Success
		 */
		DescribeCreateCaseOptions(requestBody: DescribeCreateCaseOptionsRequest): Observable<DescribeCreateCaseOptionsResponse> {
			return this.http.post<DescribeCreateCaseOptionsResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeCreateCaseOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the current list of Amazon Web Services services and a list of service categories for each service. You then use service names and categories in your <a>CreateCase</a> requests. Each Amazon Web Services service has its own set of categories.</p> <p>The service codes and category codes correspond to the values that appear in the <b>Service</b> and <b>Category</b> lists on the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page. The values in those fields don't necessarily match the service codes and categories returned by the <code>DescribeServices</code> operation. Always use the service codes and categories that the <code>DescribeServices</code> operation returns, so that you have the most recent set of service and category codes.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeServices
		 * @return {DescribeServicesResponse} Success
		 */
		DescribeServices(requestBody: DescribeServicesRequest): Observable<DescribeServicesResponse> {
			return this.http.post<DescribeServicesResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeServices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the list of severity levels that you can assign to a support case. The severity level for a case is also a field in the <a>CaseDetails</a> data type that you include for a <a>CreateCase</a> request.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels
		 * @return {DescribeSeverityLevelsResponse} Success
		 */
		DescribeSeverityLevels(requestBody: DescribeSeverityLevelsRequest): Observable<DescribeSeverityLevelsResponse> {
			return this.http.post<DescribeSeverityLevelsResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of supported languages for a specified <code>categoryCode</code>, <code>issueType</code> and <code>serviceCode</code>. The returned supported languages will include a ISO 639-1 code for the <code>language</code>, and the language display name.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeSupportedLanguages
		 * @return {DescribeSupportedLanguagesResponse} Success
		 */
		DescribeSupportedLanguages(requestBody: DescribeSupportedLanguagesRequest): Observable<DescribeSupportedLanguagesResponse> {
			return this.http.post<DescribeSupportedLanguagesResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeSupportedLanguages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the refresh status of the Trusted Advisor checks that have the specified check IDs. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>Some checks are refreshed automatically, and you can't return their refresh statuses by using the <code>DescribeTrustedAdvisorCheckRefreshStatuses</code> operation. If you call this operation for these checks, you might see an <code>InvalidParameterValue</code> error.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses
		 * @return {DescribeTrustedAdvisorCheckRefreshStatusesResponse} Success
		 */
		DescribeTrustedAdvisorCheckRefreshStatuses(requestBody: DescribeTrustedAdvisorCheckRefreshStatusesRequest): Observable<DescribeTrustedAdvisorCheckRefreshStatusesResponse> {
			return this.http.post<DescribeTrustedAdvisorCheckRefreshStatusesResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the results of the Trusted Advisor check that has the specified check ID. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>The response contains a <a>TrustedAdvisorCheckResult</a> object, which contains these three objects:</p> <ul> <li> <p> <a>TrustedAdvisorCategorySpecificSummary</a> </p> </li> <li> <p> <a>TrustedAdvisorResourceDetail</a> </p> </li> <li> <p> <a>TrustedAdvisorResourcesSummary</a> </p> </li> </ul> <p>In addition, the response contains these fields:</p> <ul> <li> <p> <b>status</b> - The alert status of the check can be <code>ok</code> (green), <code>warning</code> (yellow), <code>error</code> (red), or <code>not_available</code>.</p> </li> <li> <p> <b>timestamp</b> - The time of the last refresh of the check.</p> </li> <li> <p> <b>checkId</b> - The unique identifier for the check.</p> </li> </ul> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult
		 * @return {DescribeTrustedAdvisorCheckResultResponse} Success
		 */
		DescribeTrustedAdvisorCheckResult(requestBody: DescribeTrustedAdvisorCheckResultRequest): Observable<DescribeTrustedAdvisorCheckResultResponse> {
			return this.http.post<DescribeTrustedAdvisorCheckResultResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the results for the Trusted Advisor check summaries for the check IDs that you specified. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>The response contains an array of <a>TrustedAdvisorCheckSummary</a> objects.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries
		 * @return {DescribeTrustedAdvisorCheckSummariesResponse} Success
		 */
		DescribeTrustedAdvisorCheckSummaries(requestBody: DescribeTrustedAdvisorCheckSummariesRequest): Observable<DescribeTrustedAdvisorCheckSummariesResponse> {
			return this.http.post<DescribeTrustedAdvisorCheckSummariesResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about all available Trusted Advisor checks, including the name, ID, category, description, and metadata. You must specify a language code.</p> <p>The response contains a <a>TrustedAdvisorCheckDescription</a> object for each check. You must set the Amazon Web Services Region to us-east-1.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> <li> <p>The names and descriptions for Trusted Advisor checks are subject to change. We recommend that you specify the check ID in your code to uniquely identify a check.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks
		 * @return {DescribeTrustedAdvisorChecksResponse} Success
		 */
		DescribeTrustedAdvisorChecks(requestBody: DescribeTrustedAdvisorChecksRequest): Observable<DescribeTrustedAdvisorChecksResponse> {
			return this.http.post<DescribeTrustedAdvisorChecksResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Refreshes the Trusted Advisor check that you specify using the check ID. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p> <p>Some checks are refreshed automatically. If you call the <code>RefreshTrustedAdvisorCheck</code> operation to refresh them, you might see the <code>InvalidParameterValue</code> error.</p> <p>The response contains a <a>TrustedAdvisorCheckRefreshStatus</a> object.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note> <p>To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
		 * Post #X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck
		 * @return {RefreshTrustedAdvisorCheckResponse} Success
		 */
		RefreshTrustedAdvisorCheck(requestBody: RefreshTrustedAdvisorCheckRequest): Observable<RefreshTrustedAdvisorCheckResponse> {
			return this.http.post<RefreshTrustedAdvisorCheckResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Resolves a support case. This operation takes a <code>caseId</code> and returns the initial and final state of the case.</p> <note> <ul> <li> <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p> </li> <li> <p>If you call the Amazon Web Services Support API from an account that doesn't have a Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error message appears. For information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSSupport_20130415.ResolveCase
		 * @return {ResolveCaseResponse} Success
		 */
		ResolveCase(requestBody: ResolveCaseRequest): Observable<ResolveCaseResponse> {
			return this.http.post<ResolveCaseResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.ResolveCase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddAttachmentsToSetX_Amz_Target { 'AWSSupport_20130415.AddAttachmentsToSet' = 'AWSSupport_20130415.AddAttachmentsToSet' }

	export enum AddCommunicationToCaseX_Amz_Target { 'AWSSupport_20130415.AddCommunicationToCase' = 'AWSSupport_20130415.AddCommunicationToCase' }

	export enum CreateCaseX_Amz_Target { 'AWSSupport_20130415.CreateCase' = 'AWSSupport_20130415.CreateCase' }

	export enum DescribeAttachmentX_Amz_Target { 'AWSSupport_20130415.DescribeAttachment' = 'AWSSupport_20130415.DescribeAttachment' }

	export enum DescribeCasesX_Amz_Target { 'AWSSupport_20130415.DescribeCases' = 'AWSSupport_20130415.DescribeCases' }

	export enum DescribeCommunicationsX_Amz_Target { 'AWSSupport_20130415.DescribeCommunications' = 'AWSSupport_20130415.DescribeCommunications' }

	export enum DescribeCreateCaseOptionsX_Amz_Target { 'AWSSupport_20130415.DescribeCreateCaseOptions' = 'AWSSupport_20130415.DescribeCreateCaseOptions' }

	export enum DescribeServicesX_Amz_Target { 'AWSSupport_20130415.DescribeServices' = 'AWSSupport_20130415.DescribeServices' }

	export enum DescribeSeverityLevelsX_Amz_Target { 'AWSSupport_20130415.DescribeSeverityLevels' = 'AWSSupport_20130415.DescribeSeverityLevels' }

	export enum DescribeSupportedLanguagesX_Amz_Target { 'AWSSupport_20130415.DescribeSupportedLanguages' = 'AWSSupport_20130415.DescribeSupportedLanguages' }

	export enum DescribeTrustedAdvisorCheckRefreshStatusesX_Amz_Target { 'AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses' = 'AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses' }

	export enum DescribeTrustedAdvisorCheckResultX_Amz_Target { 'AWSSupport_20130415.DescribeTrustedAdvisorCheckResult' = 'AWSSupport_20130415.DescribeTrustedAdvisorCheckResult' }

	export enum DescribeTrustedAdvisorCheckSummariesX_Amz_Target { 'AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries' = 'AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries' }

	export enum DescribeTrustedAdvisorChecksX_Amz_Target { 'AWSSupport_20130415.DescribeTrustedAdvisorChecks' = 'AWSSupport_20130415.DescribeTrustedAdvisorChecks' }

	export enum RefreshTrustedAdvisorCheckX_Amz_Target { 'AWSSupport_20130415.RefreshTrustedAdvisorCheck' = 'AWSSupport_20130415.RefreshTrustedAdvisorCheck' }

	export enum ResolveCaseX_Amz_Target { 'AWSSupport_20130415.ResolveCase' = 'AWSSupport_20130415.ResolveCase' }

}

