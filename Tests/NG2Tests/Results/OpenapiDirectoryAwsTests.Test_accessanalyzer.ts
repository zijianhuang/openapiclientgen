import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** The response to the request to create an analyzer. */
	export interface CreateAnalyzerResponse {
		arn?: string;
	}


	/** An criterion statement in an archive rule. Each archive rule may have multiple criteria. */
	export interface InlineArchiveRule {
		filter: FilterCriteriaMap;
		ruleName: string;
	}

	export interface FilterCriteriaMap {
	}

	export interface ConflictException {
	}

	export interface ValidationException {
	}

	export interface InternalServerException {
	}

	export interface ServiceQuotaExceededException {
	}

	export interface ThrottlingException {
	}

	export interface AccessDeniedException {
	}


	/** The criteria to use in the filter that defines the archive rule. */
	export interface Criterion {
		contains?: Array<string>;
		eq?: Array<string>;
		exists?: boolean;
		neq?: Array<string>;
	}

	export interface ResourceNotFoundException {
	}


	/** The response to the request. */
	export interface GetAnalyzedResourceResponse {

		/** Contains details about the analyzed resource. */
		resource?: AnalyzedResource;
	}


	/** Contains details about the analyzed resource. */
	export interface AnalyzedResource {
		actions?: Array<string>;
		analyzedAt: Date;
		createdAt: Date;
		error?: string;
		isPublic: boolean;
		resourceArn: string;
		resourceOwnerAccount: string;
		resourceType: AnalyzedResourceResourceType;
		sharedVia?: Array<string>;
		status?: AnalyzedResourceStatus;
		updatedAt: Date;
	}

	export enum AnalyzedResourceResourceType { AWSIAMRole = 0, AWSKMSKey = 1, AWSLambdaFunction = 2, AWSLambdaLayerVersion = 3, AWSS3Bucket = 4, AWSSQSQueue = 5 }

	export enum AnalyzedResourceStatus { ACTIVE = 0, ARCHIVED = 1, RESOLVED = 2 }


	/** The response to the request. */
	export interface GetAnalyzerResponse {

		/**
		 * Contains information about the analyzer.
		 * Required
		 */
		analyzer: AnalyzerSummary;
	}


	/** Contains information about the analyzer. */
	export interface AnalyzerSummary {
		arn: string;
		createdAt: Date;
		lastResourceAnalyzed?: string;
		lastResourceAnalyzedAt?: Date;
		name: string;
		status: AnalyzerSummaryStatus;

		/** Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is displayed. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the AWS organization. */
		statusReason?: StatusReason;
		tags?: TagsMap;
		type: AnalyzerSummaryType;
	}

	export enum AnalyzerSummaryStatus { ACTIVE = 0, CREATING = 1, DISABLED = 2, FAILED = 3 }


	/** Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is displayed. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the AWS organization. */
	export interface StatusReason {
		code: StatusReasonCode;
	}

	export enum StatusReasonCode { AWS_SERVICE_ACCESS_DISABLED = 0, DELEGATED_ADMINISTRATOR_DEREGISTERED = 1, ORGANIZATION_DELETED = 2, SERVICE_LINKED_ROLE_CREATION_FAILED = 3 }

	export interface TagsMap {
	}

	export enum AnalyzerSummaryType { ACCOUNT = 0, ORGANIZATION = 1 }


	/** The response to the request. */
	export interface GetArchiveRuleResponse {

		/**
		 * Contains information about an archive rule.
		 * Required
		 */
		archiveRule: ArchiveRuleSummary;
	}


	/** Contains information about an archive rule. */
	export interface ArchiveRuleSummary {
		createdAt: Date;
		filter: FilterCriteriaMap;
		ruleName: string;
		updatedAt: Date;
	}


	/** The response to the request. */
	export interface GetFindingResponse {

		/** Contains information about a finding. */
		finding?: Finding;
	}


	/** Contains information about a finding. */
	export interface Finding {
		action?: Array<string>;
		analyzedAt: Date;
		condition: ConditionKeyMap;
		createdAt: Date;
		error?: string;
		id: string;
		isPublic?: boolean;
		principal?: PrincipalMap;
		resource?: string;
		resourceOwnerAccount: string;
		resourceType: FindingResourceType;
		sources?: Array<FindingSource>;
		status: AnalyzedResourceStatus;
		updatedAt: Date;
	}

	export interface ConditionKeyMap {
	}

	export interface PrincipalMap {
	}

	export enum FindingResourceType { AWSIAMRole = 0, AWSKMSKey = 1, AWSLambdaFunction = 2, AWSLambdaLayerVersion = 3, AWSS3Bucket = 4, AWSSQSQueue = 5 }


	/** The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings. */
	export interface FindingSource {

		/** Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings. */
		detail?: FindingSourceDetail;
		type: FindingSourceType;
	}


	/** Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings. */
	export interface FindingSourceDetail {
		accessPointArn?: string;
	}

	export enum FindingSourceType { BUCKET_ACL = 0, POLICY = 1, S3_ACCESS_POINT = 2 }


	/** The response to the request. */
	export interface ListAnalyzedResourcesResponse {
		analyzedResources: Array<AnalyzedResourceSummary>;
		nextToken?: string;
	}


	/** Contains the ARN of the analyzed resource. */
	export interface AnalyzedResourceSummary {
		resourceArn: string;
		resourceOwnerAccount: string;
		resourceType: AnalyzedResourceSummaryResourceType;
	}

	export enum AnalyzedResourceSummaryResourceType { AWSIAMRole = 0, AWSKMSKey = 1, AWSLambdaFunction = 2, AWSLambdaLayerVersion = 3, AWSS3Bucket = 4, AWSSQSQueue = 5 }


	/** The response to the request. */
	export interface ListAnalyzersResponse {
		analyzers: Array<AnalyzerSummary>;
		nextToken?: string;
	}


	/** The response to the request. */
	export interface ListArchiveRulesResponse {
		archiveRules: Array<ArchiveRuleSummary>;
		nextToken?: string;
	}


	/** The response to the request. */
	export interface ListFindingsResponse {
		findings: Array<FindingSummary>;
		nextToken?: string;
	}


	/** Contains information about a finding. */
	export interface FindingSummary {
		action?: Array<string>;
		analyzedAt: Date;
		condition: ConditionKeyMap;
		createdAt: Date;
		error?: string;
		id: string;
		isPublic?: boolean;
		principal?: PrincipalMap;
		resource?: string;
		resourceOwnerAccount: string;
		resourceType: FindingSummaryResourceType;
		sources?: Array<FindingSource>;
		status: AnalyzedResourceStatus;
		updatedAt: Date;
	}

	export enum FindingSummaryResourceType { AWSIAMRole = 0, AWSKMSKey = 1, AWSLambdaFunction = 2, AWSLambdaLayerVersion = 3, AWSS3Bucket = 4, AWSSQSQueue = 5 }

	export enum OrderBy { ASC = 0, DESC = 1 }


	/** The response to the request. */
	export interface ListTagsForResourceResponse {
		tags?: TagsMap;
	}


	/** The response to the request. */
	export interface TagResourceResponse {
	}


	/** The response to the request. */
	export interface UntagResourceResponse {
	}

	export enum ResourceType { AWSIAMRole = 0, AWSKMSKey = 1, AWSLambdaFunction = 2, AWSLambdaLayerVersion = 3, AWSS3Bucket = 4, AWSSQSQueue = 5 }

	export enum FindingStatus { ACTIVE = 0, ARCHIVED = 1, RESOLVED = 2 }

	export enum AnalyzerStatus { ACTIVE = 0, CREATING = 1, DISABLED = 2, FAILED = 3 }

	export enum Type { ACCOUNT = 0, ORGANIZATION = 1 }


	/** Creates an analyzer. */
	export interface CreateAnalyzerRequest {
		analyzerName: string;
		archiveRules?: Array<InlineArchiveRule>;
		clientToken?: string;
		tags?: TagsMap;
		type: AnalyzerSummaryType;
	}


	/** Creates an archive rule. */
	export interface CreateArchiveRuleRequest {
		clientToken?: string;
		filter: FilterCriteriaMap;
		ruleName: string;
	}


	/** Deletes an analyzer. */
	export interface DeleteAnalyzerRequest {
	}


	/** Deletes an archive rule. */
	export interface DeleteArchiveRuleRequest {
	}

	export enum FindingStatusUpdate { ACTIVE = 0, ARCHIVED = 1 }


	/** Retrieves an analyzed resource. */
	export interface GetAnalyzedResourceRequest {
	}


	/** Retrieves an analyzer. */
	export interface GetAnalyzerRequest {
	}


	/** Retrieves an archive rule. */
	export interface GetArchiveRuleRequest {
	}


	/** Retrieves a finding. */
	export interface GetFindingRequest {
	}


	/** Retrieves a list of resources that have been analyzed. */
	export interface ListAnalyzedResourcesRequest {
		analyzerArn: string;
		maxResults?: number;
		nextToken?: string;
		resourceType?: ListAnalyzedResourcesRequestResourceType;
	}

	export enum ListAnalyzedResourcesRequestResourceType { AWSIAMRole = 0, AWSKMSKey = 1, AWSLambdaFunction = 2, AWSLambdaLayerVersion = 3, AWSS3Bucket = 4, AWSSQSQueue = 5 }


	/** Retrieves a list of analyzers. */
	export interface ListAnalyzersRequest {
	}


	/** Retrieves a list of archive rules created for the specified analyzer. */
	export interface ListArchiveRulesRequest {
	}


	/** The criteria used to sort. */
	export interface SortCriteria {
		attributeName?: string;
		orderBy?: OrderBy;
	}


	/** Retrieves a list of findings generated by the specified analyzer. */
	export interface ListFindingsRequest {
		analyzerArn: string;
		filter?: FilterCriteriaMap;
		maxResults?: number;
		nextToken?: string;

		/** The criteria used to sort. */
		sort?: SortCriteria;
	}


	/** Retrieves a list of tags applied to the specified resource. */
	export interface ListTagsForResourceRequest {
	}

	export enum ReasonCode { AWS_SERVICE_ACCESS_DISABLED = 0, DELEGATED_ADMINISTRATOR_DEREGISTERED = 1, ORGANIZATION_DELETED = 2, SERVICE_LINKED_ROLE_CREATION_FAILED = 3 }


	/** Starts a scan of the policies applied to the specified resource. */
	export interface StartResourceScanRequest {
		analyzerArn: string;
		resourceArn: string;
	}


	/** Adds a tag to the specified resource. */
	export interface TagResourceRequest {
		tags: TagsMap;
	}


	/** Removes a tag from the specified resource. */
	export interface UntagResourceRequest {
	}


	/** Updates the specified archive rule. */
	export interface UpdateArchiveRuleRequest {
		clientToken?: string;
		filter: FilterCriteriaMap;
	}


	/** Updates findings with the new values provided in the request. */
	export interface UpdateFindingsRequest {
		analyzerArn: string;
		clientToken?: string;
		ids?: Array<string>;
		resourceArn?: string;
		status: FindingStatusUpdate;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an analyzer for your account.
		 * Put analyzer
		 * @return {CreateAnalyzerResponse} Success
		 */
		CreateAnalyzer(requestBody: CreateAnalyzerPutBody): Observable<CreateAnalyzerResponse> {
			return this.http.put<CreateAnalyzerResponse>(this.baseUri + 'analyzer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of analyzers.
		 * Get analyzer
		 * @param {number} maxResults The maximum number of results to return in the response.
		 * @param {string} nextToken A token used for pagination of results returned.
		 * @param {AnalyzerSummaryType} type The type of analyzer.
		 * @return {ListAnalyzersResponse} Success
		 */
		ListAnalyzers(maxResults: number, nextToken: string, type: AnalyzerSummaryType): Observable<ListAnalyzersResponse> {
			return this.http.get<ListAnalyzersResponse>(this.baseUri + 'analyzer?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&type=' + type, {});
		}

		/**
		 * Creates an archive rule for the specified analyzer. Archive rules automatically archive findings that meet the criteria you define when you create the rule.
		 * Put analyzer/{analyzerName}/archive-rule
		 * @param {string} analyzerName The name of the created analyzer.
		 * @return {void} Success
		 */
		CreateArchiveRule(analyzerName: string, requestBody: CreateArchiveRulePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of archive rules created for the specified analyzer.
		 * Get analyzer/{analyzerName}/archive-rule
		 * @param {string} analyzerName The name of the analyzer to retrieve rules from.
		 * @param {number} maxResults The maximum number of results to return in the request.
		 * @param {string} nextToken A token used for pagination of results returned.
		 * @return {ListArchiveRulesResponse} Success
		 */
		ListArchiveRules(analyzerName: string, maxResults: number, nextToken: string): Observable<ListArchiveRulesResponse> {
			return this.http.get<ListArchiveRulesResponse>(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Deletes the specified analyzer. When you delete an analyzer, Access Analyzer is disabled for the account in the current or specific Region. All findings that were generated by the analyzer are deleted. You cannot undo this action.
		 * Delete analyzer/{analyzerName}
		 * @param {string} analyzerName The name of the analyzer to delete.
		 * @param {string} clientToken A client token.
		 * @return {void} Success
		 */
		DeleteAnalyzer(analyzerName: string, clientToken: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the specified analyzer.
		 * Get analyzer/{analyzerName}
		 * @param {string} analyzerName The name of the analyzer retrieved.
		 * @return {GetAnalyzerResponse} Success
		 */
		GetAnalyzer(analyzerName: string): Observable<GetAnalyzerResponse> {
			return this.http.get<GetAnalyzerResponse>(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)), {});
		}

		/**
		 * Deletes the specified archive rule.
		 * Delete analyzer/{analyzerName}/archive-rule/{ruleName}
		 * @param {string} analyzerName The name of the analyzer that associated with the archive rule to delete.
		 * @param {string} clientToken A client token.
		 * @param {string} ruleName The name of the rule to delete.
		 * @return {void} Success
		 */
		DeleteArchiveRule(analyzerName: string, clientToken: string, ruleName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about an archive rule.
		 * Get analyzer/{analyzerName}/archive-rule/{ruleName}
		 * @param {string} analyzerName The name of the analyzer to retrieve rules from.
		 * @param {string} ruleName The name of the rule to retrieve.
		 * @return {GetArchiveRuleResponse} Success
		 */
		GetArchiveRule(analyzerName: string, ruleName: string): Observable<GetArchiveRuleResponse> {
			return this.http.get<GetArchiveRuleResponse>(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), {});
		}

		/**
		 * Updates the criteria and values for the specified archive rule.
		 * Put analyzer/{analyzerName}/archive-rule/{ruleName}
		 * @param {string} analyzerName The name of the analyzer to update the archive rules for.
		 * @param {string} ruleName The name of the rule to update.
		 * @return {void} Success
		 */
		UpdateArchiveRule(analyzerName: string, ruleName: string, requestBody: UpdateArchiveRulePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a resource that was analyzed.
		 * Get analyzed-resource#analyzerArn&resourceArn
		 * @param {string} analyzerArn The ARN of the analyzer to retrieve information from.
		 * @param {string} resourceArn The ARN of the resource to retrieve information about.
		 * @return {GetAnalyzedResourceResponse} Success
		 */
		GetAnalyzedResource(analyzerArn: string, resourceArn: string): Observable<GetAnalyzedResourceResponse> {
			return this.http.get<GetAnalyzedResourceResponse>(this.baseUri + 'analyzed-resource#analyzerArn&resourceArn?analyzerArn=' + (analyzerArn == null ? '' : encodeURIComponent(analyzerArn)) + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Retrieves information about the specified finding.
		 * Get finding/{id}#analyzerArn
		 * @param {string} analyzerArn The ARN of the analyzer that generated the finding.
		 * @param {string} id The ID of the finding to retrieve.
		 * @return {GetFindingResponse} Success
		 */
		GetFinding(analyzerArn: string, id: string): Observable<GetFindingResponse> {
			return this.http.get<GetFindingResponse>(this.baseUri + 'finding/' + (id == null ? '' : encodeURIComponent(id)) + '#analyzerArn?analyzerArn=' + (analyzerArn == null ? '' : encodeURIComponent(analyzerArn)), {});
		}

		/**
		 * Retrieves a list of resources of the specified type that have been analyzed by the specified analyzer..
		 * Post analyzed-resource
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAnalyzedResourcesResponse} Success
		 */
		ListAnalyzedResources(maxResults: string, nextToken: string, requestBody: ListAnalyzedResourcesPostBody): Observable<ListAnalyzedResourcesResponse> {
			return this.http.post<ListAnalyzedResourcesResponse>(this.baseUri + 'analyzed-resource?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of findings generated by the specified analyzer.
		 * Post finding
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFindingsResponse} Success
		 */
		ListFindings(maxResults: string, nextToken: string, requestBody: ListFindingsPostBody): Observable<ListFindingsResponse> {
			return this.http.post<ListFindingsResponse>(this.baseUri + 'finding?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the status for the specified findings.
		 * Put finding
		 * @return {void} Success
		 */
		UpdateFindings(requestBody: UpdateFindingsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'finding', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of tags applied to the specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource to retrieve tags from.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds a tag to the specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource to add the tag to.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Immediately starts a scan of the policies applied to the specified resource.
		 * Post resource/scan
		 * @return {void} Success
		 */
		StartResourceScan(requestBody: StartResourceScanPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'resource/scan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a tag from the specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of the resource to remove the tag from.
		 * @param {Array<string>} tagKeys The key for the tag to add.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateAnalyzerPutBody {

		/**
		 * The name of the analyzer to create.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^[A-Za-z][A-Za-z0-9_.-]*$
		 */
		analyzerName: string;

		/** Specifies the archive rules to add for the analyzer. Archive rules automatically archive findings that meet the criteria you define for the rule. */
		archiveRules?: Array<InlineArchiveRule>;

		/** A client token. */
		clientToken?: string;

		/** The tags to apply to the analyzer. */
		tags?: {[id: string]: string };

		/**
		 * The type of analyzer to create. Only ACCOUNT analyzers are supported. You can create only one analyzer per account per Region.
		 * Required
		 */
		type: AnalyzerSummaryType;
	}

	export interface CreateArchiveRulePutBody {

		/** A client token. */
		clientToken?: string;

		/**
		 * The criteria for the rule.
		 * Required
		 */
		filter: {[id: string]: Criterion };

		/**
		 * The name of the rule to create.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^[A-Za-z][A-Za-z0-9_.-]*$
		 */
		ruleName: string;
	}

	export interface UpdateArchiveRulePutBody {

		/** A client token. */
		clientToken?: string;

		/**
		 * A filter to match for the rules to update. Only rules that match the filter are updated.
		 * Required
		 */
		filter: {[id: string]: Criterion };
	}

	export interface ListAnalyzedResourcesPostBody {

		/**
		 * The ARN of the analyzer to retrieve a list of analyzed resources from.
		 * Required
		 * Pattern: ^[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}$
		 */
		analyzerArn: string;

		/** The maximum number of results to return in the response. */
		maxResults?: number;

		/** A token used for pagination of results returned. */
		nextToken?: string;

		/** The type of resource. */
		resourceType?: ListAnalyzedResourcesPostBodyResourceType;
	}

	export enum ListAnalyzedResourcesPostBodyResourceType { AWSIAMRole = 0, AWSKMSKey = 1, AWSLambdaFunction = 2, AWSLambdaLayerVersion = 3, AWSS3Bucket = 4, AWSSQSQueue = 5 }

	export interface ListFindingsPostBody {

		/**
		 * The ARN of the analyzer to retrieve findings from.
		 * Required
		 * Pattern: ^[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}$
		 */
		analyzerArn: string;

		/** A filter to match for the findings to return. */
		filter?: {[id: string]: Criterion };

		/** The maximum number of results to return in the response. */
		maxResults?: number;

		/** A token used for pagination of results returned. */
		nextToken?: string;

		/** The criteria used to sort. */
		sort?: ListFindingsPostBodySort;
	}

	export interface ListFindingsPostBodySort {
		attributeName?: string;
		orderBy?: OrderBy;
	}

	export interface UpdateFindingsPutBody {

		/**
		 * The ARN of the analyzer that generated the findings to update.
		 * Required
		 * Pattern: ^[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}$
		 */
		analyzerArn: string;

		/** A client token. */
		clientToken?: string;

		/** The IDs of the findings to update. */
		ids?: Array<string>;

		/**
		 * The ARN of the resource identified in the finding.
		 * Pattern: arn:[^:]*:[^:]*:[^:]*:[^:]*:.*$
		 */
		resourceArn?: string;

		/**
		 * The state represents the action to take to update the finding Status. Use <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use <code>ACTIVE</code> to change an Archived finding to an Active finding.
		 * Required
		 */
		status: FindingStatusUpdate;
	}

	export interface TagResourcePostBody {

		/**
		 * The tags to add to the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}

	export interface StartResourceScanPostBody {

		/**
		 * The ARN of the analyzer to use to scan the policies applied to the specified resource.
		 * Required
		 * Pattern: ^[^:]*:[^:]*:[^:]*:[^:]*:[^:]*:analyzer/.{1,255}$
		 */
		analyzerArn: string;

		/**
		 * The ARN of the resource to scan.
		 * Required
		 * Pattern: arn:[^:]*:[^:]*:[^:]*:[^:]*:.*$
		 */
		resourceArn: string;
	}

}

