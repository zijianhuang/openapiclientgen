import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation. */
	export interface AddAttachmentsToSetResponse {
		attachmentSetId?: string | null;
		expiryTime?: string | null;
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
		attachmentSetId?: string | null;
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
		fileName?: string | null;
		data?: string | null;
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


	/** To be written. */
	export interface AddCommunicationToCaseRequest {
		caseId?: string | null;
		communicationBody: string;
		ccEmailAddresses?: Array<string>;
		attachmentSetId?: string | null;
	}

	/** To be written. */
	export interface AddCommunicationToCaseRequestFormProperties {
		caseId: FormControl<string | null | undefined>,
		communicationBody: FormControl<string | null | undefined>,
		attachmentSetId: FormControl<string | null | undefined>,
	}
	export function CreateAddCommunicationToCaseRequestFormGroup() {
		return new FormGroup<AddCommunicationToCaseRequestFormProperties>({
			caseId: new FormControl<string | null | undefined>(undefined),
			communicationBody: new FormControl<string | null | undefined>(undefined),
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


	/** The AWS Support case ID returned by a successful completion of the <a>CreateCase</a> operation. */
	export interface CreateCaseResponse {
		caseId?: string | null;
	}

	/** The AWS Support case ID returned by a successful completion of the <a>CreateCase</a> operation. */
	export interface CreateCaseResponseFormProperties {
		caseId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCaseResponseFormGroup() {
		return new FormGroup<CreateCaseResponseFormProperties>({
			caseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCaseRequest {
		subject: string;
		serviceCode?: string | null;
		severityCode?: string | null;
		categoryCode?: string | null;
		communicationBody: string;
		ccEmailAddresses?: Array<string>;
		language?: string | null;
		issueType?: string | null;
		attachmentSetId?: string | null;
	}
	export interface CreateCaseRequestFormProperties {
		subject: FormControl<string | null | undefined>,
		serviceCode: FormControl<string | null | undefined>,
		severityCode: FormControl<string | null | undefined>,
		categoryCode: FormControl<string | null | undefined>,
		communicationBody: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		issueType: FormControl<string | null | undefined>,
		attachmentSetId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCaseRequestFormGroup() {
		return new FormGroup<CreateCaseRequestFormProperties>({
			subject: new FormControl<string | null | undefined>(undefined),
			serviceCode: new FormControl<string | null | undefined>(undefined),
			severityCode: new FormControl<string | null | undefined>(undefined),
			categoryCode: new FormControl<string | null | undefined>(undefined),
			communicationBody: new FormControl<string | null | undefined>(undefined),
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

		/** An attachment to a case communication. The attachment consists of the file name and the content of the file. */
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
		attachmentId: string;
	}
	export interface DescribeAttachmentRequestFormProperties {
		attachmentId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAttachmentRequestFormGroup() {
		return new FormGroup<DescribeAttachmentRequestFormProperties>({
			attachmentId: new FormControl<string | null | undefined>(undefined),
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


	/** Returns an array of <a>CaseDetails</a> objects and a <code>nextToken</code> that defines a point for pagination in the result set. */
	export interface DescribeCasesResponse {
		cases?: Array<CaseDetails>;
		nextToken?: string | null;
	}

	/** Returns an array of <a>CaseDetails</a> objects and a <code>nextToken</code> that defines a point for pagination in the result set. */
	export interface DescribeCasesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCasesResponseFormGroup() {
		return new FormGroup<DescribeCasesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A JSON-formatted object that contains the metadata for a support case. It is contained the response from a <a>DescribeCases</a> request. <b>CaseDetails</b> contains the following fields:</p> <ul> <li> <p> <b>caseId.</b> The AWS Support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>.</p> </li> <li> <p> <b>categoryCode.</b> The category of problem for the AWS Support case. Corresponds to the CategoryCode values returned by a call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>displayId.</b> The identifier for the case on pages in the AWS Support Center.</p> </li> <li> <p> <b>language.</b> The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.</p> </li> <li> <p> <b>recentCommunications.</b> One or more <a>Communication</a> objects. Fields of these objects are <code>attachments</code>, <code>body</code>, <code>caseId</code>, <code>submittedBy</code>, and <code>timeCreated</code>.</p> </li> <li> <p> <b>nextToken.</b> A resumption point for pagination.</p> </li> <li> <p> <b>serviceCode.</b> The identifier for the AWS service that corresponds to the service code defined in the call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>severityCode.</b> The severity code assigned to the case. Contains one of the values returned by the call to <a>DescribeSeverityLevels</a>. The possible values are: <code>low</code>, <code>normal</code>, <code>high</code>, <code>urgent</code>, and <code>critical</code>.</p> </li> <li> <p> <b>status.</b> The status of the case in the AWS Support Center. Valid values:</p> <ul> <li> <p> <code>opened</code> </p> </li> <li> <p> <code>pending-customer-action</code> </p> </li> <li> <p> <code>reopened</code> </p> </li> <li> <p> <code>resolved</code> </p> </li> <li> <p> <code>unassigned</code> </p> </li> <li> <p> <code>work-in-progress</code> </p> </li> </ul> </li> <li> <p> <b>subject.</b> The subject line of the case.</p> </li> <li> <p> <b>submittedBy.</b> The email address of the account that submitted the case.</p> </li> <li> <p> <b>timeCreated.</b> The time the case was created, in ISO-8601 format.</p> </li> </ul> */
	export interface CaseDetails {
		caseId?: string | null;
		displayId?: string | null;
		subject?: string | null;
		status?: string | null;
		serviceCode?: string | null;
		categoryCode?: string | null;
		severityCode?: string | null;
		submittedBy?: string | null;
		timeCreated?: string | null;

		/** The five most recent communications associated with the case. */
		recentCommunications?: RecentCaseCommunications;
		ccEmailAddresses?: Array<string>;
		language?: string | null;
	}

	/** <p>A JSON-formatted object that contains the metadata for a support case. It is contained the response from a <a>DescribeCases</a> request. <b>CaseDetails</b> contains the following fields:</p> <ul> <li> <p> <b>caseId.</b> The AWS Support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i>.</p> </li> <li> <p> <b>categoryCode.</b> The category of problem for the AWS Support case. Corresponds to the CategoryCode values returned by a call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>displayId.</b> The identifier for the case on pages in the AWS Support Center.</p> </li> <li> <p> <b>language.</b> The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.</p> </li> <li> <p> <b>recentCommunications.</b> One or more <a>Communication</a> objects. Fields of these objects are <code>attachments</code>, <code>body</code>, <code>caseId</code>, <code>submittedBy</code>, and <code>timeCreated</code>.</p> </li> <li> <p> <b>nextToken.</b> A resumption point for pagination.</p> </li> <li> <p> <b>serviceCode.</b> The identifier for the AWS service that corresponds to the service code defined in the call to <a>DescribeServices</a>.</p> </li> <li> <p> <b>severityCode.</b> The severity code assigned to the case. Contains one of the values returned by the call to <a>DescribeSeverityLevels</a>. The possible values are: <code>low</code>, <code>normal</code>, <code>high</code>, <code>urgent</code>, and <code>critical</code>.</p> </li> <li> <p> <b>status.</b> The status of the case in the AWS Support Center. Valid values:</p> <ul> <li> <p> <code>opened</code> </p> </li> <li> <p> <code>pending-customer-action</code> </p> </li> <li> <p> <code>reopened</code> </p> </li> <li> <p> <code>resolved</code> </p> </li> <li> <p> <code>unassigned</code> </p> </li> <li> <p> <code>work-in-progress</code> </p> </li> </ul> </li> <li> <p> <b>subject.</b> The subject line of the case.</p> </li> <li> <p> <b>submittedBy.</b> The email address of the account that submitted the case.</p> </li> <li> <p> <b>timeCreated.</b> The time the case was created, in ISO-8601 format.</p> </li> </ul> */
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
		nextToken?: string | null;
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


	/** A communication associated with an AWS Support case. The communication consists of the case ID, the message body, attachment information, the submitter of the communication, and the date and time of the communication. */
	export interface Communication {
		caseId?: string | null;
		body?: string | null;
		submittedBy?: string | null;
		timeCreated?: string | null;
		attachmentSet?: Array<AttachmentDetails>;
	}

	/** A communication associated with an AWS Support case. The communication consists of the case ID, the message body, attachment information, the submitter of the communication, and the date and time of the communication. */
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
		attachmentId?: string | null;
		fileName?: string | null;
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
		displayId?: string | null;
		afterTime?: string | null;
		beforeTime?: string | null;
		includeResolvedCases?: boolean | null;
		nextToken?: string | null;
		maxResults?: number | null;
		language?: string | null;
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
		nextToken?: string | null;
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
		caseId: string;
		beforeTime?: string | null;
		afterTime?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface DescribeCommunicationsRequestFormProperties {
		caseId: FormControl<string | null | undefined>,
		beforeTime: FormControl<string | null | undefined>,
		afterTime: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeCommunicationsRequestFormGroup() {
		return new FormGroup<DescribeCommunicationsRequestFormProperties>({
			caseId: new FormControl<string | null | undefined>(undefined),
			beforeTime: new FormControl<string | null | undefined>(undefined),
			afterTime: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The list of AWS services returned by the <a>DescribeServices</a> operation. */
	export interface DescribeServicesResponse {
		services?: Array<Service>;
	}

	/** The list of AWS services returned by the <a>DescribeServices</a> operation. */
	export interface DescribeServicesResponseFormProperties {
	}
	export function CreateDescribeServicesResponseFormGroup() {
		return new FormGroup<DescribeServicesResponseFormProperties>({
		});

	}


	/** Information about an AWS service returned by the <a>DescribeServices</a> operation. */
	export interface Service {
		code?: string | null;
		name?: string | null;
		categories?: Array<Category>;
	}

	/** Information about an AWS service returned by the <a>DescribeServices</a> operation. */
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


	/** A JSON-formatted name/value pair that represents the category name and category code of the problem, selected from the <a>DescribeServices</a> response for each AWS service. */
	export interface Category {
		code?: string | null;
		name?: string | null;
	}

	/** A JSON-formatted name/value pair that represents the category name and category code of the problem, selected from the <a>DescribeServices</a> response for each AWS service. */
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
		language?: string | null;
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


	/** A code and name pair that represents the severity level of a support case. The available values depend on the support plan for the account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html#choosing-severity">Choosing a Severity</a>. */
	export interface SeverityLevel {
		code?: string | null;
		name?: string | null;
	}

	/** A code and name pair that represents the severity level of a support case. The available values depend on the support plan for the account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html#choosing-severity">Choosing a Severity</a>. */
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
		language?: string | null;
	}
	export interface DescribeSeverityLevelsRequestFormProperties {
		language: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSeverityLevelsRequestFormGroup() {
		return new FormGroup<DescribeSeverityLevelsRequestFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation. */
	export interface DescribeTrustedAdvisorCheckRefreshStatusesResponse {
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
		checkId: string;
		status: string;
		millisUntilNextRefreshable: number;
	}

	/** The refresh status of a Trusted Advisor check. */
	export interface TrustedAdvisorCheckRefreshStatusFormProperties {
		checkId: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		millisUntilNextRefreshable: FormControl<number | null | undefined>,
	}
	export function CreateTrustedAdvisorCheckRefreshStatusFormGroup() {
		return new FormGroup<TrustedAdvisorCheckRefreshStatusFormProperties>({
			checkId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			millisUntilNextRefreshable: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeTrustedAdvisorCheckRefreshStatusesRequest {
		checkIds: Array<string>;
	}

	/** <p/> */
	export interface DescribeTrustedAdvisorCheckRefreshStatusesRequestFormProperties {
	}
	export function CreateDescribeTrustedAdvisorCheckRefreshStatusesRequestFormGroup() {
		return new FormGroup<DescribeTrustedAdvisorCheckRefreshStatusesRequestFormProperties>({
		});

	}


	/** The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation. */
	export interface DescribeTrustedAdvisorCheckResultResponse {

		/** The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>. */
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
		checkId: string;
		timestamp: string;
		status: string;

		/**
		 * Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.
		 * Required
		 */
		resourcesSummary: TrustedAdvisorResourcesSummary;

		/**
		 * The container for summary information that relates to the category of the Trusted Advisor check.
		 * Required
		 */
		categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
		flaggedResources: Array<TrustedAdvisorResourceDetail>;
	}

	/** The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>. */
	export interface TrustedAdvisorCheckResultFormProperties {
		checkId: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateTrustedAdvisorCheckResultFormGroup() {
		return new FormGroup<TrustedAdvisorCheckResultFormProperties>({
			checkId: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>. */
	export interface TrustedAdvisorResourcesSummary {
		resourcesProcessed: number;
		resourcesFlagged: number;
		resourcesIgnored: number;
		resourcesSuppressed: number;
	}

	/** Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>. */
	export interface TrustedAdvisorResourcesSummaryFormProperties {
		resourcesProcessed: FormControl<number | null | undefined>,
		resourcesFlagged: FormControl<number | null | undefined>,
		resourcesIgnored: FormControl<number | null | undefined>,
		resourcesSuppressed: FormControl<number | null | undefined>,
	}
	export function CreateTrustedAdvisorResourcesSummaryFormGroup() {
		return new FormGroup<TrustedAdvisorResourcesSummaryFormProperties>({
			resourcesProcessed: new FormControl<number | null | undefined>(undefined),
			resourcesFlagged: new FormControl<number | null | undefined>(undefined),
			resourcesIgnored: new FormControl<number | null | undefined>(undefined),
			resourcesSuppressed: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The container for summary information that relates to the category of the Trusted Advisor check. */
	export interface TrustedAdvisorCategorySpecificSummary {

		/** The estimated cost savings that might be realized if the recommended operations are taken. */
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
		estimatedMonthlySavings: number;
		estimatedPercentMonthlySavings: number;
	}

	/** The estimated cost savings that might be realized if the recommended operations are taken. */
	export interface TrustedAdvisorCostOptimizingSummaryFormProperties {
		estimatedMonthlySavings: FormControl<number | null | undefined>,
		estimatedPercentMonthlySavings: FormControl<number | null | undefined>,
	}
	export function CreateTrustedAdvisorCostOptimizingSummaryFormGroup() {
		return new FormGroup<TrustedAdvisorCostOptimizingSummaryFormProperties>({
			estimatedMonthlySavings: new FormControl<number | null | undefined>(undefined),
			estimatedPercentMonthlySavings: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about a resource identified by a Trusted Advisor check. */
	export interface TrustedAdvisorResourceDetail {
		status: string;
		region?: string | null;
		resourceId: string;
		isSuppressed?: boolean | null;
		metadata: Array<string>;
	}

	/** Contains information about a resource identified by a Trusted Advisor check. */
	export interface TrustedAdvisorResourceDetailFormProperties {
		status: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		isSuppressed: FormControl<boolean | null | undefined>,
	}
	export function CreateTrustedAdvisorResourceDetailFormGroup() {
		return new FormGroup<TrustedAdvisorResourceDetailFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			isSuppressed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeTrustedAdvisorCheckResultRequest {
		checkId: string;
		language?: string | null;
	}

	/** <p/> */
	export interface DescribeTrustedAdvisorCheckResultRequestFormProperties {
		checkId: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTrustedAdvisorCheckResultRequestFormGroup() {
		return new FormGroup<DescribeTrustedAdvisorCheckResultRequestFormProperties>({
			checkId: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation. */
	export interface DescribeTrustedAdvisorCheckSummariesResponse {
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
		checkId: string;
		timestamp: string;
		status: string;
		hasFlaggedResources?: boolean | null;

		/**
		 * Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.
		 * Required
		 */
		resourcesSummary: TrustedAdvisorResourcesSummary;

		/**
		 * The container for summary information that relates to the category of the Trusted Advisor check.
		 * Required
		 */
		categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
	}

	/** A summary of a Trusted Advisor check result, including the alert status, last refresh, and number of resources examined. */
	export interface TrustedAdvisorCheckSummaryFormProperties {
		checkId: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		hasFlaggedResources: FormControl<boolean | null | undefined>,
	}
	export function CreateTrustedAdvisorCheckSummaryFormGroup() {
		return new FormGroup<TrustedAdvisorCheckSummaryFormProperties>({
			checkId: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			hasFlaggedResources: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeTrustedAdvisorCheckSummariesRequest {
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
		id: string;
		name: string;
		description: string;
		category: string;
		metadata: Array<string>;
	}

	/** The description and metadata for a Trusted Advisor check. */
	export interface TrustedAdvisorCheckDescriptionFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		category: FormControl<string | null | undefined>,
	}
	export function CreateTrustedAdvisorCheckDescriptionFormGroup() {
		return new FormGroup<TrustedAdvisorCheckDescriptionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeTrustedAdvisorChecksRequest {
		language: string;
	}

	/** <p/> */
	export interface DescribeTrustedAdvisorChecksRequestFormProperties {
		language: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTrustedAdvisorChecksRequestFormGroup() {
		return new FormGroup<DescribeTrustedAdvisorChecksRequestFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The current refresh status of a Trusted Advisor check. */
	export interface RefreshTrustedAdvisorCheckResponse {

		/**
		 * The refresh status of a Trusted Advisor check.
		 * Required
		 */
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
		checkId: string;
	}

	/** <p/> */
	export interface RefreshTrustedAdvisorCheckRequestFormProperties {
		checkId: FormControl<string | null | undefined>,
	}
	export function CreateRefreshTrustedAdvisorCheckRequestFormGroup() {
		return new FormGroup<RefreshTrustedAdvisorCheckRequestFormProperties>({
			checkId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of the case returned by the <a>ResolveCase</a> operation. */
	export interface ResolveCaseResponse {
		initialCaseStatus?: string | null;
		finalCaseStatus?: string | null;
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
		caseId?: string | null;
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
		 * <p>Adds one or more attachments to an attachment set. </p> <p>An attachment set is a temporary container for attachments that you add to a case or case communication. The set is available for 1 hour after it's created. The <code>expiryTime</code> returned in the response is when the set expires. </p>
		 * Post #X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet
		 * @return {AddAttachmentsToSetResponse} Success
		 */
		AddAttachmentsToSet(requestBody: AddAttachmentsToSetRequest): Observable<AddAttachmentsToSetResponse> {
			return this.http.post<AddAttachmentsToSetResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.AddAttachmentsToSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds additional customer communication to an AWS Support case. You use the <code>caseId</code> value to identify the case to add communication to. You can list a set of email addresses to copy on the communication using the <code>ccEmailAddresses</code> value. The <code>communicationBody</code> value contains the text of the communication.</p> <p>The response indicates the success or failure of the request.</p> <p>This operation implements a subset of the features of the AWS Support Center.</p>
		 * Post #X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase
		 * @return {AddCommunicationToCaseResponse} Success
		 */
		AddCommunicationToCase(requestBody: AddCommunicationToCaseRequest): Observable<AddCommunicationToCaseResponse> {
			return this.http.post<AddCommunicationToCaseResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.AddCommunicationToCase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a case in the AWS Support Center. This operation is similar to how you create a case in the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p> <p>The AWS Support API doesn't support requesting service limit increases. You can submit a service limit increase in the following ways: </p> <ul> <li> <p>Submit a request from the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p> </li> <li> <p>Use the Service Quotas <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html">RequestServiceQuotaIncrease</a> operation.</p> </li> </ul> <p>A successful <a>CreateCase</a> request returns an AWS Support case number. You can use the <a>DescribeCases</a> operation and specify the case number to get existing AWS Support cases. After you create a case, you can use the <a>AddCommunicationToCase</a> operation to add additional communication or attachments to an existing case.</p> <note> <ul> <li> <p>The <code>caseId</code> is separate from the <code>displayId</code> that appears in the <a href="https://console.aws.amazon.com/support">Support Center</a>. You can use the <a>DescribeCases</a> operation to get the <code>displayId</code>.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSSupport_20130415.CreateCase
		 * @return {CreateCaseResponse} Success
		 */
		CreateCase(requestBody: CreateCaseRequest): Observable<CreateCaseResponse> {
			return this.http.post<CreateCaseResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.CreateCase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the attachment that has the specified ID. Attachments can include screenshots, error logs, or other files that describe your issue. Attachment IDs are generated by the case management system when you add an attachment to a case or case communication. Attachment IDs are returned in the <a>AttachmentDetails</a> objects that are returned by the <a>DescribeCommunications</a> operation.
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeAttachment
		 * @return {DescribeAttachmentResponse} Success
		 */
		DescribeAttachment(requestBody: DescribeAttachmentRequest): Observable<DescribeAttachmentResponse> {
			return this.http.post<DescribeAttachmentResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeAttachment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of cases that you specify by passing one or more case IDs. In addition, you can filter the cases by date by setting values for the <code>afterTime</code> and <code>beforeTime</code> request parameters. You can set values for the <code>includeResolvedCases</code> and <code>includeCommunications</code> request parameters to control how much information is returned.</p> <p>Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request for data might cause an error.</p> <p>The response returns the following in JSON format:</p> <ul> <li> <p>One or more <a>CaseDetails</a> data types.</p> </li> <li> <p>One or more <code>nextToken</code> values, which specify where to paginate the returned records represented by the <code>CaseDetails</code> objects.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeCases
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeCasesResponse} Success
		 */
		DescribeCases(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeCasesRequest): Observable<DescribeCasesResponse> {
			return this.http.post<DescribeCasesResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeCases?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns communications (and attachments) for one or more support cases. You can use the <code>afterTime</code> and <code>beforeTime</code> parameters to filter by date. You can use the <code>caseId</code> parameter to restrict the results to a particular case.</p> <p>Case data is available for 12 months after creation. If a case was created more than 12 months ago, a request for data might cause an error.</p> <p>You can use the <code>maxResults</code> and <code>nextToken</code> parameters to control the pagination of the result set. Set <code>maxResults</code> to the number of cases you want displayed on each page, and use <code>nextToken</code> to specify the resumption of pagination.</p>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeCommunications
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeCommunicationsResponse} Success
		 */
		DescribeCommunications(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeCommunicationsRequest): Observable<DescribeCommunicationsResponse> {
			return this.http.post<DescribeCommunicationsResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeCommunications?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the current list of AWS services and a list of service categories that applies to each one. You then use service names and categories in your <a>CreateCase</a> requests. Each AWS service has its own set of categories.</p> <p>The service codes and category codes correspond to the values that are displayed in the <b>Service</b> and <b>Category</b> drop-down lists on the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page. The values in those fields, however, do not necessarily match the service codes and categories returned by the <code>DescribeServices</code> request. Always use the service codes and categories obtained programmatically. This practice ensures that you always have the most recent set of service and category codes.</p>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeServices
		 * @return {DescribeServicesResponse} Success
		 */
		DescribeServices(requestBody: DescribeServicesRequest): Observable<DescribeServicesResponse> {
			return this.http.post<DescribeServicesResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeServices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of severity levels that you can assign to an AWS Support case. The severity level for a case is also a field in the <a>CaseDetails</a> data type included in any <a>CreateCase</a> request.
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels
		 * @return {DescribeSeverityLevelsResponse} Success
		 */
		DescribeSeverityLevels(requestBody: DescribeSeverityLevelsRequest): Observable<DescribeSeverityLevelsResponse> {
			return this.http.post<DescribeSeverityLevelsResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeSeverityLevels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the refresh status of the Trusted Advisor checks that have the specified check IDs. Check IDs can be obtained by calling <a>DescribeTrustedAdvisorChecks</a>.</p> <note> <p>Some checks are refreshed automatically, and their refresh statuses cannot be retrieved by using this operation. Use of the <code>DescribeTrustedAdvisorCheckRefreshStatuses</code> operation for these checks causes an <code>InvalidParameterValue</code> error.</p> </note>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses
		 * @return {DescribeTrustedAdvisorCheckRefreshStatusesResponse} Success
		 */
		DescribeTrustedAdvisorCheckRefreshStatuses(requestBody: DescribeTrustedAdvisorCheckRefreshStatusesRequest): Observable<DescribeTrustedAdvisorCheckRefreshStatusesResponse> {
			return this.http.post<DescribeTrustedAdvisorCheckRefreshStatusesResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the results of the Trusted Advisor check that has the specified check ID. Check IDs can be obtained by calling <a>DescribeTrustedAdvisorChecks</a>.</p> <p>The response contains a <a>TrustedAdvisorCheckResult</a> object, which contains these three objects:</p> <ul> <li> <p> <a>TrustedAdvisorCategorySpecificSummary</a> </p> </li> <li> <p> <a>TrustedAdvisorResourceDetail</a> </p> </li> <li> <p> <a>TrustedAdvisorResourcesSummary</a> </p> </li> </ul> <p>In addition, the response contains these fields:</p> <ul> <li> <p> <b>status.</b> The alert status of the check: "ok" (green), "warning" (yellow), "error" (red), or "not_available".</p> </li> <li> <p> <b>timestamp.</b> The time of the last refresh of the check.</p> </li> <li> <p> <b>checkId.</b> The unique identifier for the check.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult
		 * @return {DescribeTrustedAdvisorCheckResultResponse} Success
		 */
		DescribeTrustedAdvisorCheckResult(requestBody: DescribeTrustedAdvisorCheckResultRequest): Observable<DescribeTrustedAdvisorCheckResultResponse> {
			return this.http.post<DescribeTrustedAdvisorCheckResultResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckResult', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the summaries of the results of the Trusted Advisor checks that have the specified check IDs. Check IDs can be obtained by calling <a>DescribeTrustedAdvisorChecks</a>.</p> <p>The response contains an array of <a>TrustedAdvisorCheckSummary</a> objects.</p>
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries
		 * @return {DescribeTrustedAdvisorCheckSummariesResponse} Success
		 */
		DescribeTrustedAdvisorCheckSummaries(requestBody: DescribeTrustedAdvisorCheckSummariesRequest): Observable<DescribeTrustedAdvisorCheckSummariesResponse> {
			return this.http.post<DescribeTrustedAdvisorCheckSummariesResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all available Trusted Advisor checks, including name, ID, category, description, and metadata. You must specify a language code; English ("en") and Japanese ("ja") are currently supported. The response contains a <a>TrustedAdvisorCheckDescription</a> for each check. The region must be set to us-east-1.
		 * Post #X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks
		 * @return {DescribeTrustedAdvisorChecksResponse} Success
		 */
		DescribeTrustedAdvisorChecks(requestBody: DescribeTrustedAdvisorChecksRequest): Observable<DescribeTrustedAdvisorChecksResponse> {
			return this.http.post<DescribeTrustedAdvisorChecksResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.DescribeTrustedAdvisorChecks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Requests a refresh of the Trusted Advisor check that has the specified check ID. Check IDs can be obtained by calling <a>DescribeTrustedAdvisorChecks</a>.</p> <note> <p>Some checks are refreshed automatically, and they cannot be refreshed by using this operation. Use of the <code>RefreshTrustedAdvisorCheck</code> operation for these checks causes an <code>InvalidParameterValue</code> error.</p> </note> <p>The response contains a <a>TrustedAdvisorCheckRefreshStatus</a> object, which contains these fields:</p> <ul> <li> <p> <b>status.</b> The refresh status of the check: </p> <ul> <li> <p> <code>none:</code> The check is not refreshed or the non-success status exceeds the timeout</p> </li> <li> <p> <code>enqueued:</code> The check refresh requests has entered the refresh queue</p> </li> <li> <p> <code>processing:</code> The check refresh request is picked up by the rule processing engine</p> </li> <li> <p> <code>success:</code> The check is successfully refreshed</p> </li> <li> <p> <code>abandoned:</code> The check refresh has failed</p> </li> </ul> </li> <li> <p> <b>millisUntilNextRefreshable.</b> The amount of time, in milliseconds, until the check is eligible for refresh.</p> </li> <li> <p> <b>checkId.</b> The unique identifier for the check.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck
		 * @return {RefreshTrustedAdvisorCheckResponse} Success
		 */
		RefreshTrustedAdvisorCheck(requestBody: RefreshTrustedAdvisorCheckRequest): Observable<RefreshTrustedAdvisorCheckResponse> {
			return this.http.post<RefreshTrustedAdvisorCheckResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.RefreshTrustedAdvisorCheck', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Takes a <code>caseId</code> and returns the initial state of the case along with the state of the case after the call to <a>ResolveCase</a> completed.
		 * Post #X-Amz-Target=AWSSupport_20130415.ResolveCase
		 * @return {ResolveCaseResponse} Success
		 */
		ResolveCase(requestBody: ResolveCaseRequest): Observable<ResolveCaseResponse> {
			return this.http.post<ResolveCaseResponse>(this.baseUri + '#X-Amz-Target=AWSSupport_20130415.ResolveCase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddAttachmentsToSetX_Amz_Target { AWSSupport_20130415_AddAttachmentsToSet = 0 }

	export enum AddCommunicationToCaseX_Amz_Target { AWSSupport_20130415_AddCommunicationToCase = 0 }

	export enum CreateCaseX_Amz_Target { AWSSupport_20130415_CreateCase = 0 }

	export enum DescribeAttachmentX_Amz_Target { AWSSupport_20130415_DescribeAttachment = 0 }

	export enum DescribeCasesX_Amz_Target { AWSSupport_20130415_DescribeCases = 0 }

	export enum DescribeCommunicationsX_Amz_Target { AWSSupport_20130415_DescribeCommunications = 0 }

	export enum DescribeServicesX_Amz_Target { AWSSupport_20130415_DescribeServices = 0 }

	export enum DescribeSeverityLevelsX_Amz_Target { AWSSupport_20130415_DescribeSeverityLevels = 0 }

	export enum DescribeTrustedAdvisorCheckRefreshStatusesX_Amz_Target { AWSSupport_20130415_DescribeTrustedAdvisorCheckRefreshStatuses = 0 }

	export enum DescribeTrustedAdvisorCheckResultX_Amz_Target { AWSSupport_20130415_DescribeTrustedAdvisorCheckResult = 0 }

	export enum DescribeTrustedAdvisorCheckSummariesX_Amz_Target { AWSSupport_20130415_DescribeTrustedAdvisorCheckSummaries = 0 }

	export enum DescribeTrustedAdvisorChecksX_Amz_Target { AWSSupport_20130415_DescribeTrustedAdvisorChecks = 0 }

	export enum RefreshTrustedAdvisorCheckX_Amz_Target { AWSSupport_20130415_RefreshTrustedAdvisorCheck = 0 }

	export enum ResolveCaseX_Amz_Target { AWSSupport_20130415_ResolveCase = 0 }

}

