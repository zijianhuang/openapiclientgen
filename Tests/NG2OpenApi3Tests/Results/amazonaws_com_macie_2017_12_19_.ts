import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateMemberAccountRequest {

		/** Required */
		memberAccountId: string;
	}
	export interface AssociateMemberAccountRequestFormProperties {

		/** Required */
		memberAccountId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateMemberAccountRequestFormGroup() {
		return new FormGroup<AssociateMemberAccountRequestFormProperties>({
			memberAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidInputException {
	}
	export interface InvalidInputExceptionFormProperties {
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface InternalException {
	}
	export interface InternalExceptionFormProperties {
	}
	export function CreateInternalExceptionFormGroup() {
		return new FormGroup<InternalExceptionFormProperties>({
		});

	}

	export interface AssociateS3ResourcesResult {
		failedS3Resources?: Array<FailedS3Resource>;
	}
	export interface AssociateS3ResourcesResultFormProperties {
	}
	export function CreateAssociateS3ResourcesResultFormGroup() {
		return new FormGroup<AssociateS3ResourcesResultFormProperties>({
		});

	}


	/** (Discontinued) Includes details about the failed S3 resources. */
	export interface FailedS3Resource {
		failedItem?: S3Resource;
		errorCode?: string;
		errorMessage?: string;
	}

	/** (Discontinued) Includes details about the failed S3 resources. */
	export interface FailedS3ResourceFormProperties {
		errorCode: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailedS3ResourceFormGroup() {
		return new FormGroup<FailedS3ResourceFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** (Discontinued) Contains information about the S3 resource. This data type is used as a request parameter in the <code>DisassociateS3Resources</code> action and can be used as a response parameter in the <code>AssociateS3Resources</code> and <code>UpdateS3Resources</code> actions.  */
	export interface S3Resource {

		/** Required */
		bucketName: string;
		prefix?: string;
	}

	/** (Discontinued) Contains information about the S3 resource. This data type is used as a request parameter in the <code>DisassociateS3Resources</code> action and can be used as a response parameter in the <code>AssociateS3Resources</code> and <code>UpdateS3Resources</code> actions.  */
	export interface S3ResourceFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3ResourceFormGroup() {
		return new FormGroup<S3ResourceFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateS3ResourcesRequest {
		memberAccountId?: string;

		/** Required */
		s3Resources: Array<S3ResourceClassification>;
	}
	export interface AssociateS3ResourcesRequestFormProperties {
		memberAccountId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateS3ResourcesRequestFormGroup() {
		return new FormGroup<AssociateS3ResourcesRequestFormProperties>({
			memberAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** (Discontinued) The S3 resources that you want to associate with Amazon Macie Classic for monitoring and data classification. This data type is used as a request parameter in the <code>AssociateS3Resources</code> action and a response parameter in the <code>ListS3Resources</code> action.  */
	export interface S3ResourceClassification {

		/** Required */
		bucketName: string;
		prefix?: string;

		/** Required */
		classificationType: ClassificationType;
	}

	/** (Discontinued) The S3 resources that you want to associate with Amazon Macie Classic for monitoring and data classification. This data type is used as a request parameter in the <code>AssociateS3Resources</code> action and a response parameter in the <code>ListS3Resources</code> action.  */
	export interface S3ResourceClassificationFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3ResourceClassificationFormGroup() {
		return new FormGroup<S3ResourceClassificationFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** (Discontinued) The classification type that Amazon Macie Classic applies to the associated S3 resources. */
	export interface ClassificationType {

		/** Required */
		oneTime: S3OneTimeClassificationType;

		/** Required */
		continuous: S3ContinuousClassificationType;
	}

	/** (Discontinued) The classification type that Amazon Macie Classic applies to the associated S3 resources. */
	export interface ClassificationTypeFormProperties {

		/** Required */
		oneTime: FormControl<S3OneTimeClassificationType | null | undefined>,

		/** Required */
		continuous: FormControl<S3ContinuousClassificationType | null | undefined>,
	}
	export function CreateClassificationTypeFormGroup() {
		return new FormGroup<ClassificationTypeFormProperties>({
			oneTime: new FormControl<S3OneTimeClassificationType | null | undefined>(undefined, [Validators.required]),
			continuous: new FormControl<S3ContinuousClassificationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum S3OneTimeClassificationType { FULL = 0, NONE = 1 }

	export enum S3ContinuousClassificationType { FULL = 0 }

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface DisassociateMemberAccountRequest {

		/** Required */
		memberAccountId: string;
	}
	export interface DisassociateMemberAccountRequestFormProperties {

		/** Required */
		memberAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateMemberAccountRequestFormGroup() {
		return new FormGroup<DisassociateMemberAccountRequestFormProperties>({
			memberAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateS3ResourcesResult {
		failedS3Resources?: Array<FailedS3Resource>;
	}
	export interface DisassociateS3ResourcesResultFormProperties {
	}
	export function CreateDisassociateS3ResourcesResultFormGroup() {
		return new FormGroup<DisassociateS3ResourcesResultFormProperties>({
		});

	}

	export interface DisassociateS3ResourcesRequest {
		memberAccountId?: string;

		/** Required */
		associatedS3Resources: Array<S3Resource>;
	}
	export interface DisassociateS3ResourcesRequestFormProperties {
		memberAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateS3ResourcesRequestFormGroup() {
		return new FormGroup<DisassociateS3ResourcesRequestFormProperties>({
			memberAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMemberAccountsResult {
		memberAccounts?: Array<MemberAccount>;
		nextToken?: string;
	}
	export interface ListMemberAccountsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMemberAccountsResultFormGroup() {
		return new FormGroup<ListMemberAccountsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** (Discontinued) Contains information about the Amazon Macie Classic member account. */
	export interface MemberAccount {
		accountId?: string;
	}

	/** (Discontinued) Contains information about the Amazon Macie Classic member account. */
	export interface MemberAccountFormProperties {
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateMemberAccountFormGroup() {
		return new FormGroup<MemberAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMemberAccountsRequest {
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListMemberAccountsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMemberAccountsRequestFormGroup() {
		return new FormGroup<ListMemberAccountsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListS3ResourcesResult {
		s3Resources?: Array<S3ResourceClassification>;
		nextToken?: string;
	}
	export interface ListS3ResourcesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListS3ResourcesResultFormGroup() {
		return new FormGroup<ListS3ResourcesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListS3ResourcesRequest {
		memberAccountId?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListS3ResourcesRequestFormProperties {
		memberAccountId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListS3ResourcesRequestFormGroup() {
		return new FormGroup<ListS3ResourcesRequestFormProperties>({
			memberAccountId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateS3ResourcesResult {
		failedS3Resources?: Array<FailedS3Resource>;
	}
	export interface UpdateS3ResourcesResultFormProperties {
	}
	export function CreateUpdateS3ResourcesResultFormGroup() {
		return new FormGroup<UpdateS3ResourcesResultFormProperties>({
		});

	}

	export interface UpdateS3ResourcesRequest {
		memberAccountId?: string;

		/** Required */
		s3ResourcesUpdate: Array<S3ResourceClassificationUpdate>;
	}
	export interface UpdateS3ResourcesRequestFormProperties {
		memberAccountId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateS3ResourcesRequestFormGroup() {
		return new FormGroup<UpdateS3ResourcesRequestFormProperties>({
			memberAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** (Discontinued) The S3 resources whose classification types you want to update. This data type is used as a request parameter in the <code>UpdateS3Resources</code> action.  */
	export interface S3ResourceClassificationUpdate {

		/** Required */
		bucketName: string;
		prefix?: string;

		/** Required */
		classificationTypeUpdate: ClassificationTypeUpdate;
	}

	/** (Discontinued) The S3 resources whose classification types you want to update. This data type is used as a request parameter in the <code>UpdateS3Resources</code> action.  */
	export interface S3ResourceClassificationUpdateFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3ResourceClassificationUpdateFormGroup() {
		return new FormGroup<S3ResourceClassificationUpdateFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** (Discontinued) The classification type that Amazon Macie Classic applies to the associated S3 resources. At least one of the classification types (<code>oneTime</code> or <code>continuous</code>) must be specified.  */
	export interface ClassificationTypeUpdate {
		oneTime?: S3OneTimeClassificationType;
		continuous?: S3ContinuousClassificationType;
	}

	/** (Discontinued) The classification type that Amazon Macie Classic applies to the associated S3 resources. At least one of the classification types (<code>oneTime</code> or <code>continuous</code>) must be specified.  */
	export interface ClassificationTypeUpdateFormProperties {
		oneTime: FormControl<S3OneTimeClassificationType | null | undefined>,
		continuous: FormControl<S3ContinuousClassificationType | null | undefined>,
	}
	export function CreateClassificationTypeUpdateFormGroup() {
		return new FormGroup<ClassificationTypeUpdateFormProperties>({
			oneTime: new FormControl<S3OneTimeClassificationType | null | undefined>(undefined),
			continuous: new FormControl<S3ContinuousClassificationType | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * (Discontinued) Associates a specified Amazon Web Services account with Amazon Macie Classic as a member account.
		 * Post #X-Amz-Target=MacieService.AssociateMemberAccount
		 * @return {void} Success
		 */
		AssociateMemberAccount(requestBody: AssociateMemberAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=MacieService.AssociateMemberAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * (Discontinued) Associates specified S3 resources with Amazon Macie Classic for monitoring and data classification. If <code>memberAccountId</code> isn't specified, the action associates specified S3 resources with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action associates specified S3 resources with Macie Classic for the specified member account.
		 * Post #X-Amz-Target=MacieService.AssociateS3Resources
		 * @return {AssociateS3ResourcesResult} Success
		 */
		AssociateS3Resources(requestBody: AssociateS3ResourcesRequest): Observable<AssociateS3ResourcesResult> {
			return this.http.post<AssociateS3ResourcesResult>(this.baseUri + '#X-Amz-Target=MacieService.AssociateS3Resources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * (Discontinued) Removes the specified member account from Amazon Macie Classic.
		 * Post #X-Amz-Target=MacieService.DisassociateMemberAccount
		 * @return {void} Success
		 */
		DisassociateMemberAccount(requestBody: DisassociateMemberAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=MacieService.DisassociateMemberAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * (Discontinued) Removes specified S3 resources from being monitored by Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action removes specified S3 resources from Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action removes specified S3 resources from Macie Classic for the specified member account.
		 * Post #X-Amz-Target=MacieService.DisassociateS3Resources
		 * @return {DisassociateS3ResourcesResult} Success
		 */
		DisassociateS3Resources(requestBody: DisassociateS3ResourcesRequest): Observable<DisassociateS3ResourcesResult> {
			return this.http.post<DisassociateS3ResourcesResult>(this.baseUri + '#X-Amz-Target=MacieService.DisassociateS3Resources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * (Discontinued) Lists all Amazon Macie Classic member accounts for the current Macie Classic administrator account.
		 * Post #X-Amz-Target=MacieService.ListMemberAccounts
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListMemberAccountsResult} Success
		 */
		ListMemberAccounts(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListMemberAccountsRequest): Observable<ListMemberAccountsResult> {
			return this.http.post<ListMemberAccountsResult>(this.baseUri + '#X-Amz-Target=MacieService.ListMemberAccounts?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * (Discontinued) Lists all the S3 resources associated with Amazon Macie Classic. If <code>memberAccountId</code> isn't specified, the action lists the S3 resources associated with Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action lists the S3 resources associated with Macie Classic for the specified member account.
		 * Post #X-Amz-Target=MacieService.ListS3Resources
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListS3ResourcesResult} Success
		 */
		ListS3Resources(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListS3ResourcesRequest): Observable<ListS3ResourcesResult> {
			return this.http.post<ListS3ResourcesResult>(this.baseUri + '#X-Amz-Target=MacieService.ListS3Resources?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * (Discontinued) Updates the classification types for the specified S3 resources. If <code>memberAccountId</code> isn't specified, the action updates the classification types of the S3 resources associated with Amazon Macie Classic for the current Macie Classic administrator account. If <code>memberAccountId</code> is specified, the action updates the classification types of the S3 resources associated with Macie Classic for the specified member account.
		 * Post #X-Amz-Target=MacieService.UpdateS3Resources
		 * @return {UpdateS3ResourcesResult} Success
		 */
		UpdateS3Resources(requestBody: UpdateS3ResourcesRequest): Observable<UpdateS3ResourcesResult> {
			return this.http.post<UpdateS3ResourcesResult>(this.baseUri + '#X-Amz-Target=MacieService.UpdateS3Resources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateMemberAccountX_Amz_Target { 'MacieService.AssociateMemberAccount' = 0 }

	export enum AssociateS3ResourcesX_Amz_Target { 'MacieService.AssociateS3Resources' = 0 }

	export enum DisassociateMemberAccountX_Amz_Target { 'MacieService.DisassociateMemberAccount' = 0 }

	export enum DisassociateS3ResourcesX_Amz_Target { 'MacieService.DisassociateS3Resources' = 0 }

	export enum ListMemberAccountsX_Amz_Target { 'MacieService.ListMemberAccounts' = 0 }

	export enum ListS3ResourcesX_Amz_Target { 'MacieService.ListS3Resources' = 0 }

	export enum UpdateS3ResourcesX_Amz_Target { 'MacieService.UpdateS3Resources' = 0 }

}

