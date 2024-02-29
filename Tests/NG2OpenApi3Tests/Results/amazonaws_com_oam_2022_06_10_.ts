import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateLinkOutput {
		Arn?: string;
		Id?: string;
		Label?: string;
		LabelTemplate?: string;
		ResourceTypes?: Array<string>;
		SinkArn?: string;
		Tags?: TagMapOutput;
	}
	export interface CreateLinkOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Label: FormControl<string | null | undefined>,
		LabelTemplate: FormControl<string | null | undefined>,
		SinkArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLinkOutputFormGroup() {
		return new FormGroup<CreateLinkOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Label: new FormControl<string | null | undefined>(undefined),
			LabelTemplate: new FormControl<string | null | undefined>(undefined),
			SinkArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagMapOutput {
	}
	export interface TagMapOutputFormProperties {
	}
	export function CreateTagMapOutputFormGroup() {
		return new FormGroup<TagMapOutputFormProperties>({
		});

	}

	export enum ResourceType { 'AWS::CloudWatch::Metric' = 'AWS::CloudWatch::Metric', 'AWS::Logs::LogGroup' = 'AWS::Logs::LogGroup', 'AWS::XRay::Trace' = 'AWS::XRay::Trace' }

	export interface InternalServiceFault {
	}
	export interface InternalServiceFaultFormProperties {
	}
	export function CreateInternalServiceFaultFormGroup() {
		return new FormGroup<InternalServiceFaultFormProperties>({
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

	export interface MissingRequiredParameterException {
	}
	export interface MissingRequiredParameterExceptionFormProperties {
	}
	export function CreateMissingRequiredParameterExceptionFormGroup() {
		return new FormGroup<MissingRequiredParameterExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface CreateSinkOutput {
		Arn?: string;
		Id?: string;
		Name?: string;
		Tags?: TagMapOutput;
	}
	export interface CreateSinkOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSinkOutputFormGroup() {
		return new FormGroup<CreateSinkOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteLinkOutput {
	}
	export interface DeleteLinkOutputFormProperties {
	}
	export function CreateDeleteLinkOutputFormGroup() {
		return new FormGroup<DeleteLinkOutputFormProperties>({
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

	export interface DeleteSinkOutput {
	}
	export interface DeleteSinkOutputFormProperties {
	}
	export function CreateDeleteSinkOutputFormGroup() {
		return new FormGroup<DeleteSinkOutputFormProperties>({
		});

	}

	export interface GetLinkOutput {
		Arn?: string;
		Id?: string;
		Label?: string;
		LabelTemplate?: string;
		ResourceTypes?: Array<string>;
		SinkArn?: string;
		Tags?: TagMapOutput;
	}
	export interface GetLinkOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Label: FormControl<string | null | undefined>,
		LabelTemplate: FormControl<string | null | undefined>,
		SinkArn: FormControl<string | null | undefined>,
	}
	export function CreateGetLinkOutputFormGroup() {
		return new FormGroup<GetLinkOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Label: new FormControl<string | null | undefined>(undefined),
			LabelTemplate: new FormControl<string | null | undefined>(undefined),
			SinkArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSinkOutput {
		Arn?: string;
		Id?: string;
		Name?: string;
		Tags?: TagMapOutput;
	}
	export interface GetSinkOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetSinkOutputFormGroup() {
		return new FormGroup<GetSinkOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSinkPolicyOutput {
		SinkArn?: string;
		SinkId?: string;
		Policy?: string;
	}
	export interface GetSinkPolicyOutputFormProperties {
		SinkArn: FormControl<string | null | undefined>,
		SinkId: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetSinkPolicyOutputFormGroup() {
		return new FormGroup<GetSinkPolicyOutputFormProperties>({
			SinkArn: new FormControl<string | null | undefined>(undefined),
			SinkId: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAttachedLinksOutput {

		/** Required */
		Items: Array<ListAttachedLinksItem>;
		NextToken?: string;
	}
	export interface ListAttachedLinksOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAttachedLinksOutputFormGroup() {
		return new FormGroup<ListAttachedLinksOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains information about one link attached to this monitoring account sink. */
	export interface ListAttachedLinksItem {
		Label?: string;
		LinkArn?: string;
		ResourceTypes?: Array<string>;
	}

	/** A structure that contains information about one link attached to this monitoring account sink. */
	export interface ListAttachedLinksItemFormProperties {
		Label: FormControl<string | null | undefined>,
		LinkArn: FormControl<string | null | undefined>,
	}
	export function CreateListAttachedLinksItemFormGroup() {
		return new FormGroup<ListAttachedLinksItemFormProperties>({
			Label: new FormControl<string | null | undefined>(undefined),
			LinkArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLinksOutput {

		/** Required */
		Items: Array<ListLinksItem>;
		NextToken?: string;
	}
	export interface ListLinksOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLinksOutputFormGroup() {
		return new FormGroup<ListLinksOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains information about one of this source account's links to a monitoring account. */
	export interface ListLinksItem {
		Arn?: string;
		Id?: string;
		Label?: string;
		ResourceTypes?: Array<string>;
		SinkArn?: string;
	}

	/** A structure that contains information about one of this source account's links to a monitoring account. */
	export interface ListLinksItemFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Label: FormControl<string | null | undefined>,
		SinkArn: FormControl<string | null | undefined>,
	}
	export function CreateListLinksItemFormGroup() {
		return new FormGroup<ListLinksItemFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Label: new FormControl<string | null | undefined>(undefined),
			SinkArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSinksOutput {

		/** Required */
		Items: Array<ListSinksItem>;
		NextToken?: string;
	}
	export interface ListSinksOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSinksOutputFormGroup() {
		return new FormGroup<ListSinksOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains information about one of this monitoring account's sinks. */
	export interface ListSinksItem {
		Arn?: string;
		Id?: string;
		Name?: string;
	}

	/** A structure that contains information about one of this monitoring account's sinks. */
	export interface ListSinksItemFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateListSinksItemFormGroup() {
		return new FormGroup<ListSinksItemFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		Tags?: TagMapOutput;
	}
	export interface ListTagsForResourceOutputFormProperties {
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
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

	export interface PutSinkPolicyOutput {
		SinkArn?: string;
		SinkId?: string;
		Policy?: string;
	}
	export interface PutSinkPolicyOutputFormProperties {
		SinkArn: FormControl<string | null | undefined>,
		SinkId: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutSinkPolicyOutputFormGroup() {
		return new FormGroup<PutSinkPolicyOutputFormProperties>({
			SinkArn: new FormControl<string | null | undefined>(undefined),
			SinkId: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UpdateLinkOutput {
		Arn?: string;
		Id?: string;
		Label?: string;
		LabelTemplate?: string;
		ResourceTypes?: Array<string>;
		SinkArn?: string;
		Tags?: TagMapOutput;
	}
	export interface UpdateLinkOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Label: FormControl<string | null | undefined>,
		LabelTemplate: FormControl<string | null | undefined>,
		SinkArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLinkOutputFormGroup() {
		return new FormGroup<UpdateLinkOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Label: new FormControl<string | null | undefined>(undefined),
			LabelTemplate: new FormControl<string | null | undefined>(undefined),
			SinkArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagMapInput {
	}
	export interface TagMapInputFormProperties {
	}
	export function CreateTagMapInputFormGroup() {
		return new FormGroup<TagMapInputFormProperties>({
		});

	}

	export interface CreateLinkInput {

		/** Required */
		LabelTemplate: string;

		/** Required */
		ResourceTypes: Array<ResourceType>;

		/** Required */
		SinkIdentifier: string;
		Tags?: TagMapInput;
	}
	export interface CreateLinkInputFormProperties {

		/** Required */
		LabelTemplate: FormControl<string | null | undefined>,

		/** Required */
		SinkIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateLinkInputFormGroup() {
		return new FormGroup<CreateLinkInputFormProperties>({
			LabelTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SinkIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSinkInput {

		/** Required */
		Name: string;
		Tags?: TagMapInput;
	}
	export interface CreateSinkInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSinkInputFormGroup() {
		return new FormGroup<CreateSinkInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLinkInput {

		/** Required */
		Identifier: string;
	}
	export interface DeleteLinkInputFormProperties {

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLinkInputFormGroup() {
		return new FormGroup<DeleteLinkInputFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSinkInput {

		/** Required */
		Identifier: string;
	}
	export interface DeleteSinkInputFormProperties {

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSinkInputFormGroup() {
		return new FormGroup<DeleteSinkInputFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLinkInput {

		/** Required */
		Identifier: string;
	}
	export interface GetLinkInputFormProperties {

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateGetLinkInputFormGroup() {
		return new FormGroup<GetLinkInputFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSinkInput {

		/** Required */
		Identifier: string;
	}
	export interface GetSinkInputFormProperties {

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateGetSinkInputFormGroup() {
		return new FormGroup<GetSinkInputFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSinkPolicyInput {

		/** Required */
		SinkIdentifier: string;
	}
	export interface GetSinkPolicyInputFormProperties {

		/** Required */
		SinkIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateGetSinkPolicyInputFormGroup() {
		return new FormGroup<GetSinkPolicyInputFormProperties>({
			SinkIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAttachedLinksInput {
		MaxResults?: number | null;
		NextToken?: string;

		/** Required */
		SinkIdentifier: string;
	}
	export interface ListAttachedLinksInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		SinkIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateListAttachedLinksInputFormGroup() {
		return new FormGroup<ListAttachedLinksInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SinkIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListLinksInput {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListLinksInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLinksInputFormGroup() {
		return new FormGroup<ListLinksInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSinksInput {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListSinksInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSinksInputFormGroup() {
		return new FormGroup<ListSinksInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceInput {
	}
	export interface ListTagsForResourceInputFormProperties {
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
		});

	}

	export interface PutSinkPolicyInput {

		/** Required */
		SinkIdentifier: string;

		/** Required */
		Policy: string;
	}
	export interface PutSinkPolicyInputFormProperties {

		/** Required */
		SinkIdentifier: FormControl<string | null | undefined>,

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutSinkPolicyInputFormGroup() {
		return new FormGroup<PutSinkPolicyInputFormProperties>({
			SinkIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceInput {

		/** Required */
		Tags: TagMapInput;
	}
	export interface TagResourceInputFormProperties {
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
		});

	}

	export interface UntagResourceInput {
	}
	export interface UntagResourceInputFormProperties {
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
		});

	}

	export interface UpdateLinkInput {

		/** Required */
		Identifier: string;

		/** Required */
		ResourceTypes: Array<ResourceType>;
	}
	export interface UpdateLinkInputFormProperties {

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLinkInputFormGroup() {
		return new FormGroup<UpdateLinkInputFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a link between a source account and a sink that you have created in a monitoring account.</p> <p>Before you create a link, you must create a sink in the monitoring account and create a sink policy in that account. The sink policy must permit the source account to link to it. You can grant permission to source accounts by granting permission to an entire organization or to individual accounts.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html">CreateSink</a> and <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p> <p>Each monitoring account can be linked to as many as 100,000 source accounts.</p> <p>Each source account can be linked to as many as five monitoring accounts.</p>
		 * Post CreateLink
		 * @return {CreateLinkOutput} Success
		 */
		CreateLink(requestBody: CreateLinkPostBody): Observable<CreateLinkOutput> {
			return this.http.post<CreateLinkOutput>(this.baseUri + 'CreateLink', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Use this to create a <i>sink</i> in the current account, so that it can be used as a monitoring account in CloudWatch cross-account observability. A sink is a resource that represents an attachment point in a monitoring account. Source accounts can link to the sink to send observability data.</p> <p>After you create a sink, you must create a sink policy that allows source accounts to attach to it. For more information, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html">PutSinkPolicy</a>.</p> <p>Each account can contain one sink. If you delete a sink, you can then create a new one in that account.</p>
		 * Post CreateSink
		 * @return {CreateSinkOutput} Success
		 */
		CreateSink(requestBody: CreateSinkPostBody): Observable<CreateSinkOutput> {
			return this.http.post<CreateSinkOutput>(this.baseUri + 'CreateSink', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a link between a monitoring account sink and a source account. You must run this operation in the source account.
		 * Post DeleteLink
		 * @return {DeleteLinkOutput} Success
		 */
		DeleteLink(requestBody: DeleteLinkPostBody): Observable<DeleteLinkOutput> {
			return this.http.post<DeleteLinkOutput>(this.baseUri + 'DeleteLink', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a sink. You must delete all links to a sink before you can delete that sink.
		 * Post DeleteSink
		 * @return {DeleteSinkOutput} Success
		 */
		DeleteSink(requestBody: DeleteSinkPostBody): Observable<DeleteSinkOutput> {
			return this.http.post<DeleteSinkOutput>(this.baseUri + 'DeleteSink', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns complete information about one link.</p> <p>To use this operation, provide the link ARN. To retrieve a list of link ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>
		 * Post GetLink
		 * @return {GetLinkOutput} Success
		 */
		GetLink(requestBody: GetLinkPostBody): Observable<GetLinkOutput> {
			return this.http.post<GetLinkOutput>(this.baseUri + 'GetLink', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns complete information about one monitoring account sink.</p> <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p>
		 * Post GetSink
		 * @return {GetSinkOutput} Success
		 */
		GetSink(requestBody: GetSinkPostBody): Observable<GetSinkOutput> {
			return this.http.post<GetSinkOutput>(this.baseUri + 'GetSink', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the current sink policy attached to this sink. The sink policy specifies what accounts can attach to this sink as source accounts, and what types of data they can share.
		 * Post GetSinkPolicy
		 * @return {GetSinkPolicyOutput} Success
		 */
		GetSinkPolicy(requestBody: GetSinkPolicyPostBody): Observable<GetSinkPolicyOutput> {
			return this.http.post<GetSinkPolicyOutput>(this.baseUri + 'GetSinkPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of source account links that are linked to this monitoring account sink.</p> <p>To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a>.</p> <p>To find a list of links for one source account, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListLinks.html">ListLinks</a>.</p>
		 * Post ListAttachedLinks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAttachedLinksOutput} Success
		 */
		ListAttachedLinks(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAttachedLinksPostBody): Observable<ListAttachedLinksOutput> {
			return this.http.post<ListAttachedLinksOutput>(this.baseUri + 'ListAttachedLinks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Use this operation in a source account to return a list of links to monitoring account sinks that this source account has.</p> <p>To find a list of links for one monitoring account sink, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListAttachedLinks.html">ListAttachedLinks</a> from within the monitoring account.</p>
		 * Post ListLinks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLinksOutput} Success
		 */
		ListLinks(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLinksPostBody): Observable<ListLinksOutput> {
			return this.http.post<ListLinksOutput>(this.baseUri + 'ListLinks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this operation in a monitoring account to return the list of sinks created in that account.
		 * Post ListSinks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSinksOutput} Success
		 */
		ListSinks(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSinksPostBody): Observable<ListSinksOutput> {
			return this.http.post<ListSinksOutput>(this.baseUri + 'ListSinks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays the tags associated with a resource. Both sinks and links support tagging.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn <p>The ARN of the resource that you want to view tags for.</p> <p>The ARN format of a sink is <code>arn:aws:oam:<i>Region</i>:<i>account-id</i>:sink/<i>sink-id</i> </code> </p> <p>The ARN format of a link is <code>arn:aws:oam:<i>Region</i>:<i>account-id</i>:link/<i>link-id</i> </code> </p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html">CloudWatch Logs resources and operations</a>.</p> <important> <p>Unlike tagging permissions in other Amazon Web Services services, to retrieve the list of tags for links or sinks you must have the <code>oam:RequestTag</code> permission. The <code>aws:ReguestTag</code> permission does not allow you to tag and untag links and sinks.</p> </important>
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceOutput> {
			return this.http.get<ListTagsForResourceOutput>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * <p>Assigns one or more tags (key-value pairs) to the specified resource. Both sinks and links can be tagged. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p> <important> <p>Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the <code>oam:ResourceTag</code> permission. The <code>iam:ResourceTag</code> permission does not allow you to tag and untag links and sinks.</p> </important>
		 * Put tags/{ResourceArn}
		 * @param {string} ResourceArn <p>The ARN of the resource that you're adding tags to.</p> <p>The ARN format of a sink is <code>arn:aws:oam:<i>Region</i>:<i>account-id</i>:sink/<i>sink-id</i> </code> </p> <p>The ARN format of a link is <code>arn:aws:oam:<i>Region</i>:<i>account-id</i>:link/<i>link-id</i> </code> </p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html">CloudWatch Logs resources and operations</a>.</p>
		 * @return {TagResourceOutput} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePutBody): Observable<TagResourceOutput> {
			return this.http.put<TagResourceOutput>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates the resource policy that grants permissions to source accounts to link to the monitoring account sink. When you create a sink policy, you can grant permissions to all accounts in an organization or to individual accounts.</p> <p>You can also use a sink policy to limit the types of data that is shared. The three types that you can allow or deny are:</p> <ul> <li> <p> <b>Metrics</b> - Specify with <code>AWS::CloudWatch::Metric</code> </p> </li> <li> <p> <b>Log groups</b> - Specify with <code>AWS::Logs::LogGroup</code> </p> </li> <li> <p> <b>Traces</b> - Specify with <code>AWS::XRay::Trace</code> </p> </li> </ul> <p>See the examples in this section to see how to specify permitted source accounts and data types.</p>
		 * Post PutSinkPolicy
		 * @return {PutSinkPolicyOutput} Success
		 */
		PutSinkPolicy(requestBody: PutSinkPolicyPostBody): Observable<PutSinkPolicyOutput> {
			return this.http.post<PutSinkPolicyOutput>(this.baseUri + 'PutSinkPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes one or more tags from the specified resource.</p> <important> <p>Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the <code>oam:ResourceTag</code> permission. The <code>iam:TagResource</code> permission does not allow you to tag and untag links and sinks.</p> </important>
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn <p>The ARN of the resource that you're removing tags from.</p> <p>The ARN format of a sink is <code>arn:aws:oam:<i>Region</i>:<i>account-id</i>:sink/<i>sink-id</i> </code> </p> <p>The ARN format of a link is <code>arn:aws:oam:<i>Region</i>:<i>account-id</i>:link/<i>link-id</i> </code> </p> <p>For more information about ARN format, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html">CloudWatch Logs resources and operations</a>.</p>
		 * @param {Array<string>} tagKeys The list of tag keys to remove from the resource.
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<UntagResourceOutput> {
			return this.http.delete<UntagResourceOutput>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * <p>Use this operation to change what types of data are shared from a source account to its linked monitoring account sink. You can't change the sink or change the monitoring account with this operation.</p> <p>To update the list of tags associated with the sink, use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
		 * Post UpdateLink
		 * @return {UpdateLinkOutput} Success
		 */
		UpdateLink(requestBody: UpdateLinkPostBody): Observable<UpdateLinkOutput> {
			return this.http.post<UpdateLinkOutput>(this.baseUri + 'UpdateLink', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateLinkPostBody {

		/**
		 * <p>Specify a friendly human-readable name to use to identify this source account when you are viewing data from it in the monitoring account.</p> <p>You can use a custom label or use the following variables:</p> <ul> <li> <p> <code>$AccountName</code> is the name of the account</p> </li> <li> <p> <code>$AccountEmail</code> is the globally unique email address of the account</p> </li> <li> <p> <code>$AccountEmailNoDomain</code> is the email address of the account without the domain name</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		LabelTemplate: string;

		/**
		 * An array of strings that define which types of data that the source account shares with the monitoring account.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		ResourceTypes: Array<ResourceType>;

		/**
		 * <p>The ARN of the sink to use to create this link. You can use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a> to find the ARNs of sinks.</p> <p>For more information about sinks, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html">CreateSink</a>.</p>
		 * Required
		 */
		SinkIdentifier: string;

		/** <p>Assigns one or more tags (key-value pairs) to the link. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p> */
		Tags?: {[id: string]: string };
	}
	export interface CreateLinkPostBodyFormProperties {

		/**
		 * <p>Specify a friendly human-readable name to use to identify this source account when you are viewing data from it in the monitoring account.</p> <p>You can use a custom label or use the following variables:</p> <ul> <li> <p> <code>$AccountName</code> is the name of the account</p> </li> <li> <p> <code>$AccountEmail</code> is the globally unique email address of the account</p> </li> <li> <p> <code>$AccountEmailNoDomain</code> is the email address of the account without the domain name</p> </li> </ul>
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		LabelTemplate: FormControl<string | null | undefined>,

		/**
		 * <p>The ARN of the sink to use to create this link. You can use <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html">ListSinks</a> to find the ARNs of sinks.</p> <p>For more information about sinks, see <a href="https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html">CreateSink</a>.</p>
		 * Required
		 */
		SinkIdentifier: FormControl<string | null | undefined>,

		/** <p>Assigns one or more tags (key-value pairs) to the link. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateLinkPostBodyFormGroup() {
		return new FormGroup<CreateLinkPostBodyFormProperties>({
			LabelTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			SinkIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_:\.\-\/]{0,2047}')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSinkPostBody {

		/**
		 * A name for the sink.
		 * Required
		 */
		Name: string;

		/** <p>Assigns one or more tags (key-value pairs) to the link. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p> */
		Tags?: {[id: string]: string };
	}
	export interface CreateSinkPostBodyFormProperties {

		/**
		 * A name for the sink.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/** <p>Assigns one or more tags (key-value pairs) to the link. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSinkPostBodyFormGroup() {
		return new FormGroup<CreateSinkPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z0-9_\.\-]{1,255}')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface DeleteLinkPostBody {

		/**
		 * The ARN of the link to delete.
		 * Required
		 */
		Identifier: string;
	}
	export interface DeleteLinkPostBodyFormProperties {

		/**
		 * The ARN of the link to delete.
		 * Required
		 */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLinkPostBodyFormGroup() {
		return new FormGroup<DeleteLinkPostBodyFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_:\.\-\/]{0,2047}')]),
		});

	}

	export interface DeleteSinkPostBody {

		/**
		 * The ARN of the sink to delete.
		 * Required
		 */
		Identifier: string;
	}
	export interface DeleteSinkPostBodyFormProperties {

		/**
		 * The ARN of the sink to delete.
		 * Required
		 */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSinkPostBodyFormGroup() {
		return new FormGroup<DeleteSinkPostBodyFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_:\.\-\/]{0,2047}')]),
		});

	}

	export interface GetLinkPostBody {

		/**
		 * The ARN of the link to retrieve information for.
		 * Required
		 */
		Identifier: string;
	}
	export interface GetLinkPostBodyFormProperties {

		/**
		 * The ARN of the link to retrieve information for.
		 * Required
		 */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateGetLinkPostBodyFormGroup() {
		return new FormGroup<GetLinkPostBodyFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_:\.\-\/]{0,2047}')]),
		});

	}

	export interface GetSinkPostBody {

		/**
		 * The ARN of the sink to retrieve information for.
		 * Required
		 */
		Identifier: string;
	}
	export interface GetSinkPostBodyFormProperties {

		/**
		 * The ARN of the sink to retrieve information for.
		 * Required
		 */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateGetSinkPostBodyFormGroup() {
		return new FormGroup<GetSinkPostBodyFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_:\.\-\/]{0,2047}')]),
		});

	}

	export interface GetSinkPolicyPostBody {

		/**
		 * The ARN of the sink to retrieve the policy of.
		 * Required
		 */
		SinkIdentifier: string;
	}
	export interface GetSinkPolicyPostBodyFormProperties {

		/**
		 * The ARN of the sink to retrieve the policy of.
		 * Required
		 */
		SinkIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateGetSinkPolicyPostBodyFormGroup() {
		return new FormGroup<GetSinkPolicyPostBodyFormProperties>({
			SinkIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_:\.\-\/]{0,2047}')]),
		});

	}

	export interface ListAttachedLinksPostBody {

		/**
		 * Limits the number of returned links to the specified number.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/** The token for the next set of items to return. You received this token from a previous call. */
		NextToken?: string | null;

		/**
		 * The ARN of the sink that you want to retrieve links for.
		 * Required
		 */
		SinkIdentifier: string;
	}
	export interface ListAttachedLinksPostBodyFormProperties {

		/**
		 * Limits the number of returned links to the specified number.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The token for the next set of items to return. You received this token from a previous call. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The ARN of the sink that you want to retrieve links for.
		 * Required
		 */
		SinkIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateListAttachedLinksPostBodyFormGroup() {
		return new FormGroup<ListAttachedLinksPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			SinkIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_:\.\-\/]{0,2047}')]),
		});

	}

	export interface ListLinksPostBody {

		/**
		 * Limits the number of returned links to the specified number.
		 * Minimum: 1
		 * Maximum: 5
		 */
		MaxResults?: number | null;

		/** The token for the next set of items to return. You received this token from a previous call. */
		NextToken?: string | null;
	}
	export interface ListLinksPostBodyFormProperties {

		/**
		 * Limits the number of returned links to the specified number.
		 * Minimum: 1
		 * Maximum: 5
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The token for the next set of items to return. You received this token from a previous call. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLinksPostBodyFormGroup() {
		return new FormGroup<ListLinksPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSinksPostBody {

		/**
		 * Limits the number of returned links to the specified number.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/** The token for the next set of items to return. You received this token from a previous call. */
		NextToken?: string | null;
	}
	export interface ListSinksPostBodyFormProperties {

		/**
		 * Limits the number of returned links to the specified number.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The token for the next set of items to return. You received this token from a previous call. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSinksPostBodyFormGroup() {
		return new FormGroup<ListSinksPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePutBody {

		/**
		 * The list of key-value pairs to associate with the resource.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePutBodyFormProperties {

		/**
		 * The list of key-value pairs to associate with the resource.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePutBodyFormGroup() {
		return new FormGroup<TagResourcePutBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutSinkPolicyPostBody {

		/**
		 * The ARN of the sink to attach this policy to.
		 * Required
		 */
		SinkIdentifier: string;

		/**
		 * <p>The JSON policy to use. If you are updating an existing policy, the entire existing policy is replaced by what you specify here.</p> <p>The policy must be in JSON string format with quotation marks escaped and no newlines.</p> <p>For examples of different types of policies, see the <b>Examples</b> section on this page.</p>
		 * Required
		 */
		Policy: string;
	}
	export interface PutSinkPolicyPostBodyFormProperties {

		/**
		 * The ARN of the sink to attach this policy to.
		 * Required
		 */
		SinkIdentifier: FormControl<string | null | undefined>,

		/**
		 * <p>The JSON policy to use. If you are updating an existing policy, the entire existing policy is replaced by what you specify here.</p> <p>The policy must be in JSON string format with quotation marks escaped and no newlines.</p> <p>For examples of different types of policies, see the <b>Examples</b> section on this page.</p>
		 * Required
		 */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutSinkPolicyPostBodyFormGroup() {
		return new FormGroup<PutSinkPolicyPostBodyFormProperties>({
			SinkIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_:\.\-\/]{0,2047}')]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateLinkPostBody {

		/**
		 * The ARN of the link that you want to update.
		 * Required
		 */
		Identifier: string;

		/**
		 * <p>An array of strings that define which types of data that the source account will send to the monitoring account.</p> <p>Your input here replaces the current set of data types that are shared.</p>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		ResourceTypes: Array<ResourceType>;
	}
	export interface UpdateLinkPostBodyFormProperties {

		/**
		 * The ARN of the link that you want to update.
		 * Required
		 */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLinkPostBodyFormGroup() {
		return new FormGroup<UpdateLinkPostBodyFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_:\.\-\/]{0,2047}')]),
		});

	}

}

