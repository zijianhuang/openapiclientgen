import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface GetAlternateContactResponse {
		AlternateContact?: AlternateContact;
	}
	export interface GetAlternateContactResponseFormProperties {
	}
	export function CreateGetAlternateContactResponseFormGroup() {
		return new FormGroup<GetAlternateContactResponseFormProperties>({
		});

	}


	/** A structure that contains the details of an alternate contact associated with an Amazon Web Services account */
	export interface AlternateContact {
		AlternateContactType?: AlternateContactType;
		EmailAddress?: string;
		Name?: string;
		PhoneNumber?: string;
		Title?: string;
	}

	/** A structure that contains the details of an alternate contact associated with an Amazon Web Services account */
	export interface AlternateContactFormProperties {
		AlternateContactType: FormControl<AlternateContactType | null | undefined>,
		EmailAddress: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
	}
	export function CreateAlternateContactFormGroup() {
		return new FormGroup<AlternateContactFormProperties>({
			AlternateContactType: new FormControl<AlternateContactType | null | undefined>(undefined),
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AlternateContactType { BILLING = 0, OPERATIONS = 1, SECURITY = 2 }

	export interface GetContactInformationResponse {
		ContactInformation?: ContactInformation;
	}
	export interface GetContactInformationResponseFormProperties {
	}
	export function CreateGetContactInformationResponseFormGroup() {
		return new FormGroup<GetContactInformationResponseFormProperties>({
		});

	}


	/** Contains the details of the primary contact information associated with an Amazon Web Services account. */
	export interface ContactInformation {

		/** Required */
		AddressLine1: string;
		AddressLine2?: string;
		AddressLine3?: string;

		/** Required */
		City: string;
		CompanyName?: string;

		/** Required */
		CountryCode: string;
		DistrictOrCounty?: string;

		/** Required */
		FullName: string;

		/** Required */
		PhoneNumber: string;

		/** Required */
		PostalCode: string;
		StateOrRegion?: string;
		WebsiteUrl?: string;
	}

	/** Contains the details of the primary contact information associated with an Amazon Web Services account. */
	export interface ContactInformationFormProperties {

		/** Required */
		AddressLine1: FormControl<string | null | undefined>,
		AddressLine2: FormControl<string | null | undefined>,
		AddressLine3: FormControl<string | null | undefined>,

		/** Required */
		City: FormControl<string | null | undefined>,
		CompanyName: FormControl<string | null | undefined>,

		/** Required */
		CountryCode: FormControl<string | null | undefined>,
		DistrictOrCounty: FormControl<string | null | undefined>,

		/** Required */
		FullName: FormControl<string | null | undefined>,

		/** Required */
		PhoneNumber: FormControl<string | null | undefined>,

		/** Required */
		PostalCode: FormControl<string | null | undefined>,
		StateOrRegion: FormControl<string | null | undefined>,
		WebsiteUrl: FormControl<string | null | undefined>,
	}
	export function CreateContactInformationFormGroup() {
		return new FormGroup<ContactInformationFormProperties>({
			AddressLine1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AddressLine2: new FormControl<string | null | undefined>(undefined),
			AddressLine3: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CompanyName: new FormControl<string | null | undefined>(undefined),
			CountryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DistrictOrCounty: new FormControl<string | null | undefined>(undefined),
			FullName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PostalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StateOrRegion: new FormControl<string | null | undefined>(undefined),
			WebsiteUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRegionOptStatusResponse {
		RegionName?: string;
		RegionOptStatus?: RegionOptStatus;
	}
	export interface GetRegionOptStatusResponseFormProperties {
		RegionName: FormControl<string | null | undefined>,
		RegionOptStatus: FormControl<RegionOptStatus | null | undefined>,
	}
	export function CreateGetRegionOptStatusResponseFormGroup() {
		return new FormGroup<GetRegionOptStatusResponseFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined),
			RegionOptStatus: new FormControl<RegionOptStatus | null | undefined>(undefined),
		});

	}

	export enum RegionOptStatus { ENABLED = 0, ENABLING = 1, DISABLING = 2, DISABLED = 3, ENABLED_BY_DEFAULT = 4 }

	export interface ListRegionsResponse {
		NextToken?: string;
		Regions?: Array<Region>;
	}
	export interface ListRegionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRegionsResponseFormGroup() {
		return new FormGroup<ListRegionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is a structure that expresses the Region for a given account, consisting of a name and opt-in status. */
	export interface Region {
		RegionName?: string;
		RegionOptStatus?: RegionOptStatus;
	}

	/** This is a structure that expresses the Region for a given account, consisting of a name and opt-in status. */
	export interface RegionFormProperties {
		RegionName: FormControl<string | null | undefined>,
		RegionOptStatus: FormControl<RegionOptStatus | null | undefined>,
	}
	export function CreateRegionFormGroup() {
		return new FormGroup<RegionFormProperties>({
			RegionName: new FormControl<string | null | undefined>(undefined),
			RegionOptStatus: new FormControl<RegionOptStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteAlternateContactRequest {
		AccountId?: string;

		/** Required */
		AlternateContactType: AlternateContactType;
	}
	export interface DeleteAlternateContactRequestFormProperties {
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		AlternateContactType: FormControl<AlternateContactType | null | undefined>,
	}
	export function CreateDeleteAlternateContactRequestFormGroup() {
		return new FormGroup<DeleteAlternateContactRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			AlternateContactType: new FormControl<AlternateContactType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisableRegionRequest {
		AccountId?: string;

		/** Required */
		RegionName: string;
	}
	export interface DisableRegionRequestFormProperties {
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		RegionName: FormControl<string | null | undefined>,
	}
	export function CreateDisableRegionRequestFormGroup() {
		return new FormGroup<DisableRegionRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnableRegionRequest {
		AccountId?: string;

		/** Required */
		RegionName: string;
	}
	export interface EnableRegionRequestFormProperties {
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		RegionName: FormControl<string | null | undefined>,
	}
	export function CreateEnableRegionRequestFormGroup() {
		return new FormGroup<EnableRegionRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAlternateContactRequest {
		AccountId?: string;

		/** Required */
		AlternateContactType: AlternateContactType;
	}
	export interface GetAlternateContactRequestFormProperties {
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		AlternateContactType: FormControl<AlternateContactType | null | undefined>,
	}
	export function CreateGetAlternateContactRequestFormGroup() {
		return new FormGroup<GetAlternateContactRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			AlternateContactType: new FormControl<AlternateContactType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetContactInformationRequest {
		AccountId?: string;
	}
	export interface GetContactInformationRequestFormProperties {
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateGetContactInformationRequestFormGroup() {
		return new FormGroup<GetContactInformationRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRegionOptStatusRequest {
		AccountId?: string;

		/** Required */
		RegionName: string;
	}
	export interface GetRegionOptStatusRequestFormProperties {
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		RegionName: FormControl<string | null | undefined>,
	}
	export function CreateGetRegionOptStatusRequestFormGroup() {
		return new FormGroup<GetRegionOptStatusRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRegionsRequest {
		AccountId?: string;
		MaxResults?: number | null;
		NextToken?: string;
		RegionOptStatusContains?: Array<RegionOptStatus>;
	}
	export interface ListRegionsRequestFormProperties {
		AccountId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRegionsRequestFormGroup() {
		return new FormGroup<ListRegionsRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutAlternateContactRequest {
		AccountId?: string;

		/** Required */
		AlternateContactType: AlternateContactType;

		/** Required */
		EmailAddress: string;

		/** Required */
		Name: string;

		/** Required */
		PhoneNumber: string;

		/** Required */
		Title: string;
	}
	export interface PutAlternateContactRequestFormProperties {
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		AlternateContactType: FormControl<AlternateContactType | null | undefined>,

		/** Required */
		EmailAddress: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		PhoneNumber: FormControl<string | null | undefined>,

		/** Required */
		Title: FormControl<string | null | undefined>,
	}
	export function CreatePutAlternateContactRequestFormGroup() {
		return new FormGroup<PutAlternateContactRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			AlternateContactType: new FormControl<AlternateContactType | null | undefined>(undefined, [Validators.required]),
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutContactInformationRequest {
		AccountId?: string;

		/** Required */
		ContactInformation: ContactInformation;
	}
	export interface PutContactInformationRequestFormProperties {
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreatePutContactInformationRequestFormGroup() {
		return new FormGroup<PutContactInformationRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Deletes the specified alternate contact from an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>
		 * Post deleteAlternateContact
		 * @return {void} Success
		 */
		DeleteAlternateContact(requestBody: DeleteAlternateContactPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'deleteAlternateContact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables (opts-out) a particular Region for an account.
		 * Post disableRegion
		 * @return {void} Success
		 */
		DisableRegion(requestBody: DisableRegionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'disableRegion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables (opts-in) a particular Region for an account.
		 * Post enableRegion
		 * @return {void} Success
		 */
		EnableRegion(requestBody: EnableRegionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'enableRegion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the specified alternate contact attached to an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>
		 * Post getAlternateContact
		 * @return {GetAlternateContactResponse} Success
		 */
		GetAlternateContact(requestBody: GetAlternateContactPostBody): Observable<GetAlternateContactResponse> {
			return this.http.post<GetAlternateContactResponse>(this.baseUri + 'getAlternateContact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the primary contact information of an Amazon Web Services account.</p> <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update the primary and alternate contact information</a>.</p>
		 * Post getContactInformation
		 * @return {GetContactInformationResponse} Success
		 */
		GetContactInformation(requestBody: GetContactInformationPostBody): Observable<GetContactInformationResponse> {
			return this.http.post<GetContactInformationResponse>(this.baseUri + 'getContactInformation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the opt-in status of a particular Region.
		 * Post getRegionOptStatus
		 * @return {GetRegionOptStatusResponse} Success
		 */
		GetRegionOptStatus(requestBody: GetRegionOptStatusPostBody): Observable<GetRegionOptStatusResponse> {
			return this.http.post<GetRegionOptStatusResponse>(this.baseUri + 'getRegionOptStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the Regions for a given account and their respective opt-in statuses. Optionally, this list can be filtered by the <code>region-opt-status-contains</code> parameter.
		 * Post listRegions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRegionsResponse} Success
		 */
		ListRegions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRegionsPostBody): Observable<ListRegionsResponse> {
			return this.http.post<ListRegionsResponse>(this.baseUri + 'listRegions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the specified alternate contact attached to an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>
		 * Post putAlternateContact
		 * @return {void} Success
		 */
		PutAlternateContact(requestBody: PutAlternateContactPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'putAlternateContact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the primary contact information of an Amazon Web Services account.</p> <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update the primary and alternate contact information</a>.</p>
		 * Post putContactInformation
		 * @return {void} Success
		 */
		PutContactInformation(requestBody: PutContactInformationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'putContactInformation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface DeleteAlternateContactPostBody {

		/** <p>Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation.</p> <p>If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation.</p> <p>To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>; it must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId?: string | null;

		/**
		 * Specifies which of the alternate contacts to delete.
		 * Required
		 */
		AlternateContactType: AlternateContactType;
	}
	export interface DeleteAlternateContactPostBodyFormProperties {

		/** <p>Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation.</p> <p>If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation.</p> <p>To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>; it must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Specifies which of the alternate contacts to delete.
		 * Required
		 */
		AlternateContactType: FormControl<AlternateContactType | null | undefined>,
	}
	export function CreateDeleteAlternateContactPostBodyFormGroup() {
		return new FormGroup<DeleteAlternateContactPostBodyFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{12}$')]),
			AlternateContactType: new FormControl<AlternateContactType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisableRegionPostBody {

		/** <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>. It must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId?: string | null;

		/**
		 * Specifies the Region-code for a given Region name (for example, <code>af-south-1</code>). When you disable a Region, Amazon Web Services performs actions to deactivate that Region in your account, such as destroying IAM resources in the Region. This process takes a few minutes for most accounts, but this can take several hours. You cannot enable the Region until the disabling process is fully completed.
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		RegionName: string;
	}
	export interface DisableRegionPostBodyFormProperties {

		/** <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>. It must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Specifies the Region-code for a given Region name (for example, <code>af-south-1</code>). When you disable a Region, Amazon Web Services performs actions to deactivate that Region in your account, such as destroying IAM resources in the Region. This process takes a few minutes for most accounts, but this can take several hours. You cannot enable the Region until the disabling process is fully completed.
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		RegionName: FormControl<string | null | undefined>,
	}
	export function CreateDisableRegionPostBodyFormGroup() {
		return new FormGroup<DisableRegionPostBodyFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{12}$')]),
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
		});

	}

	export interface EnableRegionPostBody {

		/** <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>. It must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId?: string | null;

		/**
		 * Specifies the Region-code for a given Region name (for example, <code>af-south-1</code>). When you enable a Region, Amazon Web Services performs actions to prepare your account in that Region, such as distributing your IAM resources to the Region. This process takes a few minutes for most accounts, but it can take several hours. You cannot use the Region until this process is complete. Furthermore, you cannot disable the Region until the enabling process is fully completed.
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		RegionName: string;
	}
	export interface EnableRegionPostBodyFormProperties {

		/** <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>. It must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Specifies the Region-code for a given Region name (for example, <code>af-south-1</code>). When you enable a Region, Amazon Web Services performs actions to prepare your account in that Region, such as distributing your IAM resources to the Region. This process takes a few minutes for most accounts, but it can take several hours. You cannot use the Region until this process is complete. Furthermore, you cannot disable the Region until the enabling process is fully completed.
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		RegionName: FormControl<string | null | undefined>,
	}
	export function CreateEnableRegionPostBodyFormGroup() {
		return new FormGroup<EnableRegionPostBodyFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{12}$')]),
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
		});

	}

	export interface GetAlternateContactPostBody {

		/** <p>Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation.</p> <p>If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation.</p> <p>To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>; it must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId?: string | null;

		/**
		 * Specifies which alternate contact you want to retrieve.
		 * Required
		 */
		AlternateContactType: AlternateContactType;
	}
	export interface GetAlternateContactPostBodyFormProperties {

		/** <p>Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation.</p> <p>If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation.</p> <p>To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>; it must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Specifies which alternate contact you want to retrieve.
		 * Required
		 */
		AlternateContactType: FormControl<AlternateContactType | null | undefined>,
	}
	export function CreateGetAlternateContactPostBodyFormGroup() {
		return new FormGroup<GetAlternateContactPostBodyFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{12}$')]),
			AlternateContactType: new FormControl<AlternateContactType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetContactInformationPostBody {

		/** <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>. It must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId?: string | null;
	}
	export interface GetContactInformationPostBodyFormProperties {

		/** <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>. It must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateGetContactInformationPostBodyFormGroup() {
		return new FormGroup<GetContactInformationPostBodyFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{12}$')]),
		});

	}

	export interface GetRegionOptStatusPostBody {

		/** <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>. It must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId?: string | null;

		/**
		 * Specifies the Region-code for a given Region name (for example, <code>af-south-1</code>). This function will return the status of whatever Region you pass into this parameter.
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		RegionName: string;
	}
	export interface GetRegionOptStatusPostBodyFormProperties {

		/** <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>. It must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Specifies the Region-code for a given Region name (for example, <code>af-south-1</code>). This function will return the status of whatever Region you pass into this parameter.
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		RegionName: FormControl<string | null | undefined>,
	}
	export function CreateGetRegionOptStatusPostBodyFormGroup() {
		return new FormGroup<GetRegionOptStatusPostBodyFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{12}$')]),
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
		});

	}

	export interface ListRegionsPostBody {

		/** <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>. It must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId?: string | null;

		/**
		 * The total number of items to return in the command’s output. If the total number of items available is more than the value specified, a <code>NextToken</code> is provided in the command’s output. To resume pagination, provide the <code>NextToken</code> value in the <code>starting-token</code> argument of a subsequent command. Do not use the <code>NextToken</code> response element directly outside of the Amazon Web Services CLI. For usage examples, see <a href="http://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Pagination</a> in the <i>Amazon Web Services Command Line Interface User Guide</i>.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;

		/**
		 * A token used to specify where to start paginating. This is the <code>NextToken</code> from a previously truncated response. For usage examples, see <a href="http://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Pagination</a> in the <i>Amazon Web Services Command Line Interface User Guide</i>.
		 * Max length: 1000
		 * Min length: 0
		 */
		NextToken?: string | null;

		/** A list of Region statuses (Enabling, Enabled, Disabling, Disabled, Enabled_by_default) to use to filter the list of Regions for a given account. For example, passing in a value of ENABLING will only return a list of Regions with a Region status of ENABLING. */
		RegionOptStatusContains?: Array<RegionOptStatus>;
	}
	export interface ListRegionsPostBodyFormProperties {

		/** <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>. It must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * The total number of items to return in the command’s output. If the total number of items available is more than the value specified, a <code>NextToken</code> is provided in the command’s output. To resume pagination, provide the <code>NextToken</code> value in the <code>starting-token</code> argument of a subsequent command. Do not use the <code>NextToken</code> response element directly outside of the Amazon Web Services CLI. For usage examples, see <a href="http://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Pagination</a> in the <i>Amazon Web Services Command Line Interface User Guide</i>.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * A token used to specify where to start paginating. This is the <code>NextToken</code> from a previously truncated response. For usage examples, see <a href="http://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Pagination</a> in the <i>Amazon Web Services Command Line Interface User Guide</i>.
		 * Max length: 1000
		 * Min length: 0
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRegionsPostBodyFormGroup() {
		return new FormGroup<ListRegionsPostBodyFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{12}$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
		});

	}

	export interface PutAlternateContactPostBody {

		/** <p>Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation.</p> <p>If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation.</p> <p>To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>; it must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId?: string | null;

		/**
		 * Specifies which alternate contact you want to create or update.
		 * Required
		 */
		AlternateContactType: AlternateContactType;

		/**
		 * Specifies an email address for the alternate contact.
		 * Required
		 * Max length: 254
		 * Min length: 1
		 */
		EmailAddress: string;

		/**
		 * Specifies a name for the alternate contact.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Specifies a phone number for the alternate contact.
		 * Required
		 * Max length: 25
		 * Min length: 1
		 */
		PhoneNumber: string;

		/**
		 * Specifies a title for the alternate contact.
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		Title: string;
	}
	export interface PutAlternateContactPostBodyFormProperties {

		/** <p>Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation.</p> <p>If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation.</p> <p>To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>; it must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Specifies which alternate contact you want to create or update.
		 * Required
		 */
		AlternateContactType: FormControl<AlternateContactType | null | undefined>,

		/**
		 * Specifies an email address for the alternate contact.
		 * Required
		 * Max length: 254
		 * Min length: 1
		 */
		EmailAddress: FormControl<string | null | undefined>,

		/**
		 * Specifies a name for the alternate contact.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Specifies a phone number for the alternate contact.
		 * Required
		 * Max length: 25
		 * Min length: 1
		 */
		PhoneNumber: FormControl<string | null | undefined>,

		/**
		 * Specifies a title for the alternate contact.
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		Title: FormControl<string | null | undefined>,
	}
	export function CreatePutAlternateContactPostBodyFormGroup() {
		return new FormGroup<PutAlternateContactPostBodyFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{12}$')]),
			AlternateContactType: new FormControl<AlternateContactType | null | undefined>(undefined, [Validators.required]),
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(254), Validators.pattern('^[\s]*[\w+=.#|!&-]+@[\w.-]+\.[\w]+[\s]*$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(25), Validators.pattern('^[\s0-9()+-]+$')]),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
		});

	}

	export interface PutContactInformationPostBody {

		/** <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>. It must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId?: string | null;

		/**
		 * Contains the details of the primary contact information associated with an Amazon Web Services account.
		 * Required
		 */
		ContactInformation: PutContactInformationPostBodyContactInformation;
	}
	export interface PutContactInformationPostBodyFormProperties {

		/** <p>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account">organization's management account</a> or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features enabled</a>, and the organization must have <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-trusted-access.html">trusted access</a> enabled for the Account Management service, and optionally a <a href="https://docs.aws.amazon.com/organizations/latest/userguide/using-orgs-delegated-admin.html">delegated admin</a> account assigned.</p> <note> <p>The management account can't specify its own <code>AccountId</code>. It must call the operation in standalone context by not including the <code>AccountId</code> parameter.</p> </note> <p>To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.</p> */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreatePutContactInformationPostBodyFormGroup() {
		return new FormGroup<PutContactInformationPostBodyFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d{12}$')]),
		});

	}

	export interface PutContactInformationPostBodyContactInformation {
		AddressLine1?: string;
		AddressLine2?: string;
		AddressLine3?: string;
		City?: string;
		CompanyName?: string;
		CountryCode?: string;
		DistrictOrCounty?: string;
		FullName?: string;
		PhoneNumber?: string;
		PostalCode?: string;
		StateOrRegion?: string;
		WebsiteUrl?: string;
	}
	export interface PutContactInformationPostBodyContactInformationFormProperties {
		AddressLine1: FormControl<string | null | undefined>,
		AddressLine2: FormControl<string | null | undefined>,
		AddressLine3: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		CompanyName: FormControl<string | null | undefined>,
		CountryCode: FormControl<string | null | undefined>,
		DistrictOrCounty: FormControl<string | null | undefined>,
		FullName: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
		StateOrRegion: FormControl<string | null | undefined>,
		WebsiteUrl: FormControl<string | null | undefined>,
	}
	export function CreatePutContactInformationPostBodyContactInformationFormGroup() {
		return new FormGroup<PutContactInformationPostBodyContactInformationFormProperties>({
			AddressLine1: new FormControl<string | null | undefined>(undefined),
			AddressLine2: new FormControl<string | null | undefined>(undefined),
			AddressLine3: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			CompanyName: new FormControl<string | null | undefined>(undefined),
			CountryCode: new FormControl<string | null | undefined>(undefined),
			DistrictOrCounty: new FormControl<string | null | undefined>(undefined),
			FullName: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
			StateOrRegion: new FormControl<string | null | undefined>(undefined),
			WebsiteUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

}

