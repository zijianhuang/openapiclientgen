import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation. */
	export interface AddAttachmentsToSetResponse {
		attachmentSetId?: string | null;
		expiryTime?: string | null;
	}

	export interface AddAttachmentsToSetRequest {
		attachmentSetId?: string | null;
		attachments: Array<Attachment>;
	}


	/** An attachment to a case communication. The attachment consists of the file name and the content of the file. */
	export interface Attachment {
		fileName?: string | null;
		data?: string | null;
	}

	export interface InternalServerError {
	}

	export interface AttachmentSetIdNotFound {
	}

	export interface AttachmentSetExpired {
	}

	export interface AttachmentSetSizeLimitExceeded {
	}

	export interface AttachmentLimitExceeded {
	}


	/** The result of the <a>AddCommunicationToCase</a> operation. */
	export interface AddCommunicationToCaseResponse {
		result?: boolean | null;
	}


	/** To be written. */
	export interface AddCommunicationToCaseRequest {
		caseId?: string | null;
		communicationBody: string;
		ccEmailAddresses?: Array<string> | null;
		attachmentSetId?: string | null;
	}

	export interface CaseIdNotFound {
	}


	/** The AWS Support case ID returned by a successful completion of the <a>CreateCase</a> operation. */
	export interface CreateCaseResponse {
		caseId?: string | null;
	}

	export interface CreateCaseRequest {
		subject: string;
		serviceCode?: string | null;
		severityCode?: string | null;
		categoryCode?: string | null;
		communicationBody: string;
		ccEmailAddresses?: Array<string> | null;
		language?: string | null;
		issueType?: string | null;
		attachmentSetId?: string | null;
	}

	export interface CaseCreationLimitExceeded {
	}


	/** The content and file name of the attachment returned by the <a>DescribeAttachment</a> operation. */
	export interface DescribeAttachmentResponse {

		/** An attachment to a case communication. The attachment consists of the file name and the content of the file. */
		attachment?: Attachment | null;
	}

	export interface DescribeAttachmentRequest {
		attachmentId: string;
	}

	export interface DescribeAttachmentLimitExceeded {
	}

	export interface AttachmentIdNotFound {
	}


	/** Returns an array of <a>CaseDetails</a> objects and a <code>nextToken</code> that defines a point for pagination in the result set. */
	export interface DescribeCasesResponse {
		cases?: Array<CaseDetails> | null;
		nextToken?: string | null;
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
		recentCommunications?: RecentCaseCommunications | null;
		ccEmailAddresses?: Array<string> | null;
		language?: string | null;
	}


	/** The five most recent communications associated with the case. */
	export interface RecentCaseCommunications {
		communications?: Array<Communication> | null;
		nextToken?: string | null;
	}


	/** A communication associated with an AWS Support case. The communication consists of the case ID, the message body, attachment information, the submitter of the communication, and the date and time of the communication. */
	export interface Communication {
		caseId?: string | null;
		body?: string | null;
		submittedBy?: string | null;
		timeCreated?: string | null;
		attachmentSet?: Array<AttachmentDetails> | null;
	}


	/** The file name and ID of an attachment to a case communication. You can use the ID to retrieve the attachment with the <a>DescribeAttachment</a> operation. */
	export interface AttachmentDetails {
		attachmentId?: string | null;
		fileName?: string | null;
	}

	export interface DescribeCasesRequest {
		caseIdList?: Array<string> | null;
		displayId?: string | null;
		afterTime?: string | null;
		beforeTime?: string | null;
		includeResolvedCases?: boolean | null;
		nextToken?: string | null;
		maxResults?: number | null;
		language?: string | null;
		includeCommunications?: boolean | null;
	}


	/** The communications returned by the <a>DescribeCommunications</a> operation. */
	export interface DescribeCommunicationsResponse {
		communications?: Array<Communication> | null;
		nextToken?: string | null;
	}

	export interface DescribeCommunicationsRequest {
		caseId: string;
		beforeTime?: string | null;
		afterTime?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}


	/** The list of AWS services returned by the <a>DescribeServices</a> operation. */
	export interface DescribeServicesResponse {
		services?: Array<Service> | null;
	}


	/** Information about an AWS service returned by the <a>DescribeServices</a> operation. */
	export interface Service {
		code?: string | null;
		name?: string | null;
		categories?: Array<Category> | null;
	}


	/** A JSON-formatted name/value pair that represents the category name and category code of the problem, selected from the <a>DescribeServices</a> response for each AWS service. */
	export interface Category {
		code?: string | null;
		name?: string | null;
	}

	export interface DescribeServicesRequest {
		serviceCodeList?: Array<string> | null;
		language?: string | null;
	}


	/** The list of severity levels returned by the <a>DescribeSeverityLevels</a> operation. */
	export interface DescribeSeverityLevelsResponse {
		severityLevels?: Array<SeverityLevel> | null;
	}


	/** A code and name pair that represents the severity level of a support case. The available values depend on the support plan for the account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/getting-started.html#choosing-severity">Choosing a Severity</a>. */
	export interface SeverityLevel {
		code?: string | null;
		name?: string | null;
	}

	export interface DescribeSeverityLevelsRequest {
		language?: string | null;
	}


	/** The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation. */
	export interface DescribeTrustedAdvisorCheckRefreshStatusesResponse {
		statuses: Array<TrustedAdvisorCheckRefreshStatus>;
	}


	/** The refresh status of a Trusted Advisor check. */
	export interface TrustedAdvisorCheckRefreshStatus {
		checkId: string;
		status: string;
		millisUntilNextRefreshable: number;
	}


	/** <p/> */
	export interface DescribeTrustedAdvisorCheckRefreshStatusesRequest {
		checkIds: Array<string>;
	}


	/** The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation. */
	export interface DescribeTrustedAdvisorCheckResultResponse {

		/** The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>. */
		result?: TrustedAdvisorCheckResult | null;
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


	/** Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>. */
	export interface TrustedAdvisorResourcesSummary {
		resourcesProcessed: number;
		resourcesFlagged: number;
		resourcesIgnored: number;
		resourcesSuppressed: number;
	}


	/** The container for summary information that relates to the category of the Trusted Advisor check. */
	export interface TrustedAdvisorCategorySpecificSummary {

		/** The estimated cost savings that might be realized if the recommended operations are taken. */
		costOptimizing?: TrustedAdvisorCostOptimizingSummary | null;
	}


	/** The estimated cost savings that might be realized if the recommended operations are taken. */
	export interface TrustedAdvisorCostOptimizingSummary {
		estimatedMonthlySavings: number;
		estimatedPercentMonthlySavings: number;
	}


	/** Contains information about a resource identified by a Trusted Advisor check. */
	export interface TrustedAdvisorResourceDetail {
		status: string;
		region?: string | null;
		resourceId: string;
		isSuppressed?: boolean | null;
		metadata: Array<string>;
	}


	/** <p/> */
	export interface DescribeTrustedAdvisorCheckResultRequest {
		checkId: string;
		language?: string | null;
	}


	/** The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation. */
	export interface DescribeTrustedAdvisorCheckSummariesResponse {
		summaries: Array<TrustedAdvisorCheckSummary>;
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

	export interface DescribeTrustedAdvisorCheckSummariesRequest {
		checkIds: Array<string>;
	}


	/** Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation. */
	export interface DescribeTrustedAdvisorChecksResponse {
		checks: Array<TrustedAdvisorCheckDescription>;
	}


	/** The description and metadata for a Trusted Advisor check. */
	export interface TrustedAdvisorCheckDescription {
		id: string;
		name: string;
		description: string;
		category: string;
		metadata: Array<string>;
	}


	/** <p/> */
	export interface DescribeTrustedAdvisorChecksRequest {
		language: string;
	}


	/** The current refresh status of a Trusted Advisor check. */
	export interface RefreshTrustedAdvisorCheckResponse {

		/**
		 * The refresh status of a Trusted Advisor check.
		 * Required
		 */
		status: TrustedAdvisorCheckRefreshStatus;
	}


	/** <p/> */
	export interface RefreshTrustedAdvisorCheckRequest {
		checkId: string;
	}


	/** The status of the case returned by the <a>ResolveCase</a> operation. */
	export interface ResolveCaseResponse {
		initialCaseStatus?: string | null;
		finalCaseStatus?: string | null;
	}

	export interface ResolveCaseRequest {
		caseId?: string | null;
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

