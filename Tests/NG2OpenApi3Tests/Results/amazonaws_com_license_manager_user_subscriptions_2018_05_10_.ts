import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateUserResponse {

		/** Required */
		InstanceUserSummary: InstanceUserSummary;
	}
	export interface AssociateUserResponseFormProperties {
	}
	export function CreateAssociateUserResponseFormGroup() {
		return new FormGroup<AssociateUserResponseFormProperties>({
		});

	}


	/** Describes users of an EC2 instance providing user-based subscriptions. */
	export interface InstanceUserSummary {
		AssociationDate?: string;
		DisassociationDate?: string;
		Domain?: string;

		/** Required */
		IdentityProvider: IdentityProvider;

		/** Required */
		InstanceId: string;

		/** Required */
		Status: string;
		StatusMessage?: string;

		/** Required */
		Username: string;
	}

	/** Describes users of an EC2 instance providing user-based subscriptions. */
	export interface InstanceUserSummaryFormProperties {
		AssociationDate: FormControl<string | null | undefined>,
		DisassociationDate: FormControl<string | null | undefined>,
		Domain: FormControl<string | null | undefined>,

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateInstanceUserSummaryFormGroup() {
		return new FormGroup<InstanceUserSummaryFormProperties>({
			AssociationDate: new FormControl<string | null | undefined>(undefined),
			DisassociationDate: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about an identity provider. */
	export interface IdentityProvider {
		ActiveDirectoryIdentityProvider?: ActiveDirectoryIdentityProvider;
	}

	/** Details about an identity provider. */
	export interface IdentityProviderFormProperties {
	}
	export function CreateIdentityProviderFormGroup() {
		return new FormGroup<IdentityProviderFormProperties>({
		});

	}


	/** Details about an Active Directory identity provider. */
	export interface ActiveDirectoryIdentityProvider {
		DirectoryId?: string;
	}

	/** Details about an Active Directory identity provider. */
	export interface ActiveDirectoryIdentityProviderFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateActiveDirectoryIdentityProviderFormGroup() {
		return new FormGroup<ActiveDirectoryIdentityProviderFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface DeregisterIdentityProviderResponse {

		/** Required */
		IdentityProviderSummary: IdentityProviderSummary;
	}
	export interface DeregisterIdentityProviderResponseFormProperties {
	}
	export function CreateDeregisterIdentityProviderResponseFormGroup() {
		return new FormGroup<DeregisterIdentityProviderResponseFormProperties>({
		});

	}


	/** Describes an identity provider. */
	export interface IdentityProviderSummary {
		FailureMessage?: string;

		/** Required */
		IdentityProvider: IdentityProvider;

		/** Required */
		Product: string;

		/** Required */
		Settings: Settings;

		/** Required */
		Status: string;
	}

	/** Describes an identity provider. */
	export interface IdentityProviderSummaryFormProperties {
		FailureMessage: FormControl<string | null | undefined>,

		/** Required */
		Product: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateIdentityProviderSummaryFormGroup() {
		return new FormGroup<IdentityProviderSummaryFormProperties>({
			FailureMessage: new FormControl<string | null | undefined>(undefined),
			Product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints, and the security group ID that is associated with the VPC endpoints. The security group should permit inbound TCP port 1688 communication from resources in the VPC. */
	export interface Settings {

		/** Required */
		SecurityGroupId: string;

		/** Required */
		Subnets: Array<string>;
	}

	/** The registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints, and the security group ID that is associated with the VPC endpoints. The security group should permit inbound TCP port 1688 communication from resources in the VPC. */
	export interface SettingsFormProperties {

		/** Required */
		SecurityGroupId: FormControl<string | null | undefined>,
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
			SecurityGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateUserResponse {

		/** Required */
		InstanceUserSummary: InstanceUserSummary;
	}
	export interface DisassociateUserResponseFormProperties {
	}
	export function CreateDisassociateUserResponseFormGroup() {
		return new FormGroup<DisassociateUserResponseFormProperties>({
		});

	}

	export interface ListIdentityProvidersResponse {

		/** Required */
		IdentityProviderSummaries: Array<IdentityProviderSummary>;
		NextToken?: string;
	}
	export interface ListIdentityProvidersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityProvidersResponseFormGroup() {
		return new FormGroup<ListIdentityProvidersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInstancesResponse {
		InstanceSummaries?: Array<InstanceSummary>;
		NextToken?: string;
	}
	export interface ListInstancesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstancesResponseFormGroup() {
		return new FormGroup<ListInstancesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an EC2 instance providing user-based subscriptions. */
	export interface InstanceSummary {

		/** Required */
		InstanceId: string;
		LastStatusCheckDate?: string;

		/** Required */
		Products: Array<string>;

		/** Required */
		Status: string;
		StatusMessage?: string;
	}

	/** Describes an EC2 instance providing user-based subscriptions. */
	export interface InstanceSummaryFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		LastStatusCheckDate: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateInstanceSummaryFormGroup() {
		return new FormGroup<InstanceSummaryFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastStatusCheckDate: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter name and value pair that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. */
	export interface Filter {
		Attribute?: string;
		Operation?: string;
		Value?: string;
	}

	/** A filter name and value pair that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. */
	export interface FilterFormProperties {
		Attribute: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Attribute: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProductSubscriptionsResponse {
		NextToken?: string;
		ProductUserSummaries?: Array<ProductUserSummary>;
	}
	export interface ListProductSubscriptionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProductSubscriptionsResponseFormGroup() {
		return new FormGroup<ListProductSubscriptionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the user-based subscription products for a user. */
	export interface ProductUserSummary {
		Domain?: string;

		/** Required */
		IdentityProvider: IdentityProvider;

		/** Required */
		Product: string;

		/** Required */
		Status: string;
		StatusMessage?: string;
		SubscriptionEndDate?: string;
		SubscriptionStartDate?: string;

		/** Required */
		Username: string;
	}

	/** The summary of the user-based subscription products for a user. */
	export interface ProductUserSummaryFormProperties {
		Domain: FormControl<string | null | undefined>,

		/** Required */
		Product: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		SubscriptionEndDate: FormControl<string | null | undefined>,
		SubscriptionStartDate: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateProductUserSummaryFormGroup() {
		return new FormGroup<ProductUserSummaryFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			Product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			SubscriptionEndDate: new FormControl<string | null | undefined>(undefined),
			SubscriptionStartDate: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListUserAssociationsResponse {
		InstanceUserSummaries?: Array<InstanceUserSummary>;
		NextToken?: string;
	}
	export interface ListUserAssociationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserAssociationsResponseFormGroup() {
		return new FormGroup<ListUserAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterIdentityProviderResponse {

		/** Required */
		IdentityProviderSummary: IdentityProviderSummary;
	}
	export interface RegisterIdentityProviderResponseFormProperties {
	}
	export function CreateRegisterIdentityProviderResponseFormGroup() {
		return new FormGroup<RegisterIdentityProviderResponseFormProperties>({
		});

	}

	export interface StartProductSubscriptionResponse {

		/** Required */
		ProductUserSummary: ProductUserSummary;
	}
	export interface StartProductSubscriptionResponseFormProperties {
	}
	export function CreateStartProductSubscriptionResponseFormGroup() {
		return new FormGroup<StartProductSubscriptionResponseFormProperties>({
		});

	}

	export interface StopProductSubscriptionResponse {

		/** Required */
		ProductUserSummary: ProductUserSummary;
	}
	export interface StopProductSubscriptionResponseFormProperties {
	}
	export function CreateStopProductSubscriptionResponseFormGroup() {
		return new FormGroup<StopProductSubscriptionResponseFormProperties>({
		});

	}

	export interface UpdateIdentityProviderSettingsResponse {

		/**
		 * Describes an identity provider.
		 * Required
		 */
		IdentityProviderSummary: IdentityProviderSummary;
	}
	export interface UpdateIdentityProviderSettingsResponseFormProperties {
	}
	export function CreateUpdateIdentityProviderSettingsResponseFormGroup() {
		return new FormGroup<UpdateIdentityProviderSettingsResponseFormProperties>({
		});

	}

	export interface AssociateUserRequest {
		Domain?: string;

		/** Required */
		IdentityProvider: IdentityProvider;

		/** Required */
		InstanceId: string;

		/** Required */
		Username: string;
	}
	export interface AssociateUserRequestFormProperties {
		Domain: FormControl<string | null | undefined>,

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAssociateUserRequestFormGroup() {
		return new FormGroup<AssociateUserRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterIdentityProviderRequest {

		/** Required */
		IdentityProvider: IdentityProvider;

		/** Required */
		Product: string;
	}
	export interface DeregisterIdentityProviderRequestFormProperties {

		/** Required */
		Product: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterIdentityProviderRequestFormGroup() {
		return new FormGroup<DeregisterIdentityProviderRequestFormProperties>({
			Product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateUserRequest {
		Domain?: string;

		/** Required */
		IdentityProvider: IdentityProvider;

		/** Required */
		InstanceId: string;

		/** Required */
		Username: string;
	}
	export interface DisassociateUserRequestFormProperties {
		Domain: FormControl<string | null | undefined>,

		/** Required */
		InstanceId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateUserRequestFormGroup() {
		return new FormGroup<DisassociateUserRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListIdentityProvidersRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListIdentityProvidersRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityProvidersRequestFormGroup() {
		return new FormGroup<ListIdentityProvidersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInstancesRequest {
		Filters?: Array<Filter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListInstancesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstancesRequestFormGroup() {
		return new FormGroup<ListInstancesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProductSubscriptionsRequest {
		Filters?: Array<Filter>;

		/** Required */
		IdentityProvider: IdentityProvider;
		MaxResults?: number | null;
		NextToken?: string;

		/** Required */
		Product: string;
	}
	export interface ListProductSubscriptionsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		Product: FormControl<string | null | undefined>,
	}
	export function CreateListProductSubscriptionsRequestFormGroup() {
		return new FormGroup<ListProductSubscriptionsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListUserAssociationsRequest {
		Filters?: Array<Filter>;

		/** Required */
		IdentityProvider: IdentityProvider;

		/** Required */
		InstanceId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListUserAssociationsRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserAssociationsRequestFormGroup() {
		return new FormGroup<ListUserAssociationsRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterIdentityProviderRequest {

		/** Required */
		IdentityProvider: IdentityProvider;

		/** Required */
		Product: string;
		Settings?: Settings;
	}
	export interface RegisterIdentityProviderRequestFormProperties {

		/** Required */
		Product: FormControl<string | null | undefined>,
	}
	export function CreateRegisterIdentityProviderRequestFormGroup() {
		return new FormGroup<RegisterIdentityProviderRequestFormProperties>({
			Product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartProductSubscriptionRequest {
		Domain?: string;

		/** Required */
		IdentityProvider: IdentityProvider;

		/** Required */
		Product: string;

		/** Required */
		Username: string;
	}
	export interface StartProductSubscriptionRequestFormProperties {
		Domain: FormControl<string | null | undefined>,

		/** Required */
		Product: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateStartProductSubscriptionRequestFormGroup() {
		return new FormGroup<StartProductSubscriptionRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			Product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopProductSubscriptionRequest {
		Domain?: string;

		/** Required */
		IdentityProvider: IdentityProvider;

		/** Required */
		Product: string;

		/** Required */
		Username: string;
	}
	export interface StopProductSubscriptionRequestFormProperties {
		Domain: FormControl<string | null | undefined>,

		/** Required */
		Product: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateStopProductSubscriptionRequestFormGroup() {
		return new FormGroup<StopProductSubscriptionRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			Product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Updates the registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints. */
	export interface UpdateSettings {

		/** Required */
		AddSubnets: Array<string>;

		/** Required */
		RemoveSubnets: Array<string>;
		SecurityGroupId?: string;
	}

	/** Updates the registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints. */
	export interface UpdateSettingsFormProperties {
		SecurityGroupId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSettingsFormGroup() {
		return new FormGroup<UpdateSettingsFormProperties>({
			SecurityGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateIdentityProviderSettingsRequest {

		/**
		 * Details about an identity provider.
		 * Required
		 */
		IdentityProvider: IdentityProvider;

		/** Required */
		Product: string;

		/** Required */
		UpdateSettings: UpdateSettings;
	}
	export interface UpdateIdentityProviderSettingsRequestFormProperties {

		/** Required */
		Product: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIdentityProviderSettingsRequestFormGroup() {
		return new FormGroup<UpdateIdentityProviderSettingsRequestFormProperties>({
			Product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates the user to an EC2 instance to utilize user-based subscriptions.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
		 * Post user/AssociateUser
		 * @return {AssociateUserResponse} Success
		 */
		AssociateUser(requestBody: AssociateUserPostBody): Observable<AssociateUserResponse> {
			return this.http.post<AssociateUserResponse>(this.baseUri + 'user/AssociateUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deregisters the identity provider from providing user-based subscriptions.
		 * Post identity-provider/DeregisterIdentityProvider
		 * @return {DeregisterIdentityProviderResponse} Success
		 */
		DeregisterIdentityProvider(requestBody: DeregisterIdentityProviderPostBody): Observable<DeregisterIdentityProviderResponse> {
			return this.http.post<DeregisterIdentityProviderResponse>(this.baseUri + 'identity-provider/DeregisterIdentityProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the user from an EC2 instance providing user-based subscriptions.
		 * Post user/DisassociateUser
		 * @return {DisassociateUserResponse} Success
		 */
		DisassociateUser(requestBody: DisassociateUserPostBody): Observable<DisassociateUserResponse> {
			return this.http.post<DisassociateUserResponse>(this.baseUri + 'user/DisassociateUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the identity providers for user-based subscriptions.
		 * Post identity-provider/ListIdentityProviders
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIdentityProvidersResponse} Success
		 */
		ListIdentityProviders(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListIdentityProvidersPostBody): Observable<ListIdentityProvidersResponse> {
			return this.http.post<ListIdentityProvidersResponse>(this.baseUri + 'identity-provider/ListIdentityProviders?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the EC2 instances providing user-based subscriptions.
		 * Post instance/ListInstances
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInstancesResponse} Success
		 */
		ListInstances(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListInstancesPostBody): Observable<ListInstancesResponse> {
			return this.http.post<ListInstancesResponse>(this.baseUri + 'instance/ListInstances?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the user-based subscription products available from an identity provider.
		 * Post user/ListProductSubscriptions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProductSubscriptionsResponse} Success
		 */
		ListProductSubscriptions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListProductSubscriptionsPostBody): Observable<ListProductSubscriptionsResponse> {
			return this.http.post<ListProductSubscriptionsResponse>(this.baseUri + 'user/ListProductSubscriptions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists user associations for an identity provider.
		 * Post user/ListUserAssociations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUserAssociationsResponse} Success
		 */
		ListUserAssociations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListUserAssociationsPostBody): Observable<ListUserAssociationsResponse> {
			return this.http.post<ListUserAssociationsResponse>(this.baseUri + 'user/ListUserAssociations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers an identity provider for user-based subscriptions.
		 * Post identity-provider/RegisterIdentityProvider
		 * @return {RegisterIdentityProviderResponse} Success
		 */
		RegisterIdentityProvider(requestBody: RegisterIdentityProviderPostBody): Observable<RegisterIdentityProviderResponse> {
			return this.http.post<RegisterIdentityProviderResponse>(this.baseUri + 'identity-provider/RegisterIdentityProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a product subscription for a user with the specified identity provider.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
		 * Post user/StartProductSubscription
		 * @return {StartProductSubscriptionResponse} Success
		 */
		StartProductSubscription(requestBody: StartProductSubscriptionPostBody): Observable<StartProductSubscriptionResponse> {
			return this.http.post<StartProductSubscriptionResponse>(this.baseUri + 'user/StartProductSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a product subscription for a user with the specified identity provider.
		 * Post user/StopProductSubscription
		 * @return {StopProductSubscriptionResponse} Success
		 */
		StopProductSubscription(requestBody: StopProductSubscriptionPostBody): Observable<StopProductSubscriptionResponse> {
			return this.http.post<StopProductSubscriptionResponse>(this.baseUri + 'user/StopProductSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates additional product configuration settings for the registered identity provider.
		 * Post identity-provider/UpdateIdentityProviderSettings
		 * @return {UpdateIdentityProviderSettingsResponse} Success
		 */
		UpdateIdentityProviderSettings(requestBody: UpdateIdentityProviderSettingsPostBody): Observable<UpdateIdentityProviderSettingsResponse> {
			return this.http.post<UpdateIdentityProviderSettingsResponse>(this.baseUri + 'identity-provider/UpdateIdentityProviderSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AssociateUserPostBody {

		/** The domain name of the user. */
		Domain?: string | null;

		/**
		 * Details about an identity provider.
		 * Required
		 */
		IdentityProvider: AssociateUserPostBodyIdentityProvider;

		/**
		 * The ID of the EC2 instance, which provides user-based subscriptions.
		 * Required
		 */
		InstanceId: string;

		/**
		 * The user name from the identity provider for the user.
		 * Required
		 */
		Username: string;
	}
	export interface AssociateUserPostBodyFormProperties {

		/** The domain name of the user. */
		Domain: FormControl<string | null | undefined>,

		/**
		 * The ID of the EC2 instance, which provides user-based subscriptions.
		 * Required
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The user name from the identity provider for the user.
		 * Required
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateAssociateUserPostBodyFormGroup() {
		return new FormGroup<AssociateUserPostBodyFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateUserPostBodyIdentityProvider {
		ActiveDirectoryIdentityProvider?: ActiveDirectoryIdentityProvider;
	}
	export interface AssociateUserPostBodyIdentityProviderFormProperties {
	}
	export function CreateAssociateUserPostBodyIdentityProviderFormGroup() {
		return new FormGroup<AssociateUserPostBodyIdentityProviderFormProperties>({
		});

	}

	export interface DeregisterIdentityProviderPostBody {

		/**
		 * Details about an identity provider.
		 * Required
		 */
		IdentityProvider: DeregisterIdentityProviderPostBodyIdentityProvider;

		/**
		 * The name of the user-based subscription product.
		 * Required
		 */
		Product: string;
	}
	export interface DeregisterIdentityProviderPostBodyFormProperties {

		/**
		 * The name of the user-based subscription product.
		 * Required
		 */
		Product: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterIdentityProviderPostBodyFormGroup() {
		return new FormGroup<DeregisterIdentityProviderPostBodyFormProperties>({
			Product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterIdentityProviderPostBodyIdentityProvider {
		ActiveDirectoryIdentityProvider?: ActiveDirectoryIdentityProvider;
	}
	export interface DeregisterIdentityProviderPostBodyIdentityProviderFormProperties {
	}
	export function CreateDeregisterIdentityProviderPostBodyIdentityProviderFormGroup() {
		return new FormGroup<DeregisterIdentityProviderPostBodyIdentityProviderFormProperties>({
		});

	}

	export interface DisassociateUserPostBody {

		/** The domain name of the user. */
		Domain?: string | null;

		/**
		 * Details about an identity provider.
		 * Required
		 */
		IdentityProvider: DisassociateUserPostBodyIdentityProvider;

		/**
		 * The ID of the EC2 instance, which provides user-based subscriptions.
		 * Required
		 */
		InstanceId: string;

		/**
		 * The user name from the identity provider for the user.
		 * Required
		 */
		Username: string;
	}
	export interface DisassociateUserPostBodyFormProperties {

		/** The domain name of the user. */
		Domain: FormControl<string | null | undefined>,

		/**
		 * The ID of the EC2 instance, which provides user-based subscriptions.
		 * Required
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * The user name from the identity provider for the user.
		 * Required
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateUserPostBodyFormGroup() {
		return new FormGroup<DisassociateUserPostBodyFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateUserPostBodyIdentityProvider {
		ActiveDirectoryIdentityProvider?: ActiveDirectoryIdentityProvider;
	}
	export interface DisassociateUserPostBodyIdentityProviderFormProperties {
	}
	export function CreateDisassociateUserPostBodyIdentityProviderFormGroup() {
		return new FormGroup<DisassociateUserPostBodyIdentityProviderFormProperties>({
		});

	}

	export interface ListIdentityProvidersPostBody {

		/** Maximum number of results to return in a single call. */
		MaxResults?: number | null;

		/** Token for the next set of results. */
		NextToken?: string | null;
	}
	export interface ListIdentityProvidersPostBodyFormProperties {

		/** Maximum number of results to return in a single call. */
		MaxResults: FormControl<number | null | undefined>,

		/** Token for the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityProvidersPostBodyFormGroup() {
		return new FormGroup<ListIdentityProvidersPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInstancesPostBody {

		/** An array of structures that you can use to filter the results to those that match one or more sets of key-value pairs that you specify. */
		Filters?: Array<Filter>;

		/** Maximum number of results to return in a single call. */
		MaxResults?: number | null;

		/** Token for the next set of results. */
		NextToken?: string | null;
	}
	export interface ListInstancesPostBodyFormProperties {

		/** Maximum number of results to return in a single call. */
		MaxResults: FormControl<number | null | undefined>,

		/** Token for the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstancesPostBodyFormGroup() {
		return new FormGroup<ListInstancesPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProductSubscriptionsPostBody {

		/** An array of structures that you can use to filter the results to those that match one or more sets of key-value pairs that you specify. */
		Filters?: Array<Filter>;

		/**
		 * Details about an identity provider.
		 * Required
		 */
		IdentityProvider: ListProductSubscriptionsPostBodyIdentityProvider;

		/** Maximum number of results to return in a single call. */
		MaxResults?: number | null;

		/** Token for the next set of results. */
		NextToken?: string | null;

		/**
		 * The name of the user-based subscription product.
		 * Required
		 */
		Product: string;
	}
	export interface ListProductSubscriptionsPostBodyFormProperties {

		/** Maximum number of results to return in a single call. */
		MaxResults: FormControl<number | null | undefined>,

		/** Token for the next set of results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The name of the user-based subscription product.
		 * Required
		 */
		Product: FormControl<string | null | undefined>,
	}
	export function CreateListProductSubscriptionsPostBodyFormGroup() {
		return new FormGroup<ListProductSubscriptionsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListProductSubscriptionsPostBodyIdentityProvider {
		ActiveDirectoryIdentityProvider?: ActiveDirectoryIdentityProvider;
	}
	export interface ListProductSubscriptionsPostBodyIdentityProviderFormProperties {
	}
	export function CreateListProductSubscriptionsPostBodyIdentityProviderFormGroup() {
		return new FormGroup<ListProductSubscriptionsPostBodyIdentityProviderFormProperties>({
		});

	}

	export interface ListUserAssociationsPostBody {

		/** An array of structures that you can use to filter the results to those that match one or more sets of key-value pairs that you specify. */
		Filters?: Array<Filter>;

		/**
		 * Details about an identity provider.
		 * Required
		 */
		IdentityProvider: ListUserAssociationsPostBodyIdentityProvider;

		/**
		 * The ID of the EC2 instance, which provides user-based subscriptions.
		 * Required
		 */
		InstanceId: string;

		/** Maximum number of results to return in a single call. */
		MaxResults?: number | null;

		/** Token for the next set of results. */
		NextToken?: string | null;
	}
	export interface ListUserAssociationsPostBodyFormProperties {

		/**
		 * The ID of the EC2 instance, which provides user-based subscriptions.
		 * Required
		 */
		InstanceId: FormControl<string | null | undefined>,

		/** Maximum number of results to return in a single call. */
		MaxResults: FormControl<number | null | undefined>,

		/** Token for the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserAssociationsPostBodyFormGroup() {
		return new FormGroup<ListUserAssociationsPostBodyFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUserAssociationsPostBodyIdentityProvider {
		ActiveDirectoryIdentityProvider?: ActiveDirectoryIdentityProvider;
	}
	export interface ListUserAssociationsPostBodyIdentityProviderFormProperties {
	}
	export function CreateListUserAssociationsPostBodyIdentityProviderFormGroup() {
		return new FormGroup<ListUserAssociationsPostBodyIdentityProviderFormProperties>({
		});

	}

	export interface RegisterIdentityProviderPostBody {

		/**
		 * Details about an identity provider.
		 * Required
		 */
		IdentityProvider: RegisterIdentityProviderPostBodyIdentityProvider;

		/**
		 * The name of the user-based subscription product.
		 * Required
		 */
		Product: string;

		/** The registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints, and the security group ID that is associated with the VPC endpoints. The security group should permit inbound TCP port 1688 communication from resources in the VPC. */
		Settings?: RegisterIdentityProviderPostBodySettings;
	}
	export interface RegisterIdentityProviderPostBodyFormProperties {

		/**
		 * The name of the user-based subscription product.
		 * Required
		 */
		Product: FormControl<string | null | undefined>,
	}
	export function CreateRegisterIdentityProviderPostBodyFormGroup() {
		return new FormGroup<RegisterIdentityProviderPostBodyFormProperties>({
			Product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterIdentityProviderPostBodyIdentityProvider {
		ActiveDirectoryIdentityProvider?: ActiveDirectoryIdentityProvider;
	}
	export interface RegisterIdentityProviderPostBodyIdentityProviderFormProperties {
	}
	export function CreateRegisterIdentityProviderPostBodyIdentityProviderFormGroup() {
		return new FormGroup<RegisterIdentityProviderPostBodyIdentityProviderFormProperties>({
		});

	}

	export interface RegisterIdentityProviderPostBodySettings {
		SecurityGroupId?: string;
		Subnets?: Array<string>;
	}
	export interface RegisterIdentityProviderPostBodySettingsFormProperties {
		SecurityGroupId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterIdentityProviderPostBodySettingsFormGroup() {
		return new FormGroup<RegisterIdentityProviderPostBodySettingsFormProperties>({
			SecurityGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartProductSubscriptionPostBody {

		/** The domain name of the user. */
		Domain?: string | null;

		/**
		 * Details about an identity provider.
		 * Required
		 */
		IdentityProvider: StartProductSubscriptionPostBodyIdentityProvider;

		/**
		 * The name of the user-based subscription product.
		 * Required
		 */
		Product: string;

		/**
		 * The user name from the identity provider of the user.
		 * Required
		 */
		Username: string;
	}
	export interface StartProductSubscriptionPostBodyFormProperties {

		/** The domain name of the user. */
		Domain: FormControl<string | null | undefined>,

		/**
		 * The name of the user-based subscription product.
		 * Required
		 */
		Product: FormControl<string | null | undefined>,

		/**
		 * The user name from the identity provider of the user.
		 * Required
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateStartProductSubscriptionPostBodyFormGroup() {
		return new FormGroup<StartProductSubscriptionPostBodyFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			Product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartProductSubscriptionPostBodyIdentityProvider {
		ActiveDirectoryIdentityProvider?: ActiveDirectoryIdentityProvider;
	}
	export interface StartProductSubscriptionPostBodyIdentityProviderFormProperties {
	}
	export function CreateStartProductSubscriptionPostBodyIdentityProviderFormGroup() {
		return new FormGroup<StartProductSubscriptionPostBodyIdentityProviderFormProperties>({
		});

	}

	export interface StopProductSubscriptionPostBody {

		/** The domain name of the user. */
		Domain?: string | null;

		/**
		 * Details about an identity provider.
		 * Required
		 */
		IdentityProvider: StopProductSubscriptionPostBodyIdentityProvider;

		/**
		 * The name of the user-based subscription product.
		 * Required
		 */
		Product: string;

		/**
		 * The user name from the identity provider for the user.
		 * Required
		 */
		Username: string;
	}
	export interface StopProductSubscriptionPostBodyFormProperties {

		/** The domain name of the user. */
		Domain: FormControl<string | null | undefined>,

		/**
		 * The name of the user-based subscription product.
		 * Required
		 */
		Product: FormControl<string | null | undefined>,

		/**
		 * The user name from the identity provider for the user.
		 * Required
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateStopProductSubscriptionPostBodyFormGroup() {
		return new FormGroup<StopProductSubscriptionPostBodyFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			Product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopProductSubscriptionPostBodyIdentityProvider {
		ActiveDirectoryIdentityProvider?: ActiveDirectoryIdentityProvider;
	}
	export interface StopProductSubscriptionPostBodyIdentityProviderFormProperties {
	}
	export function CreateStopProductSubscriptionPostBodyIdentityProviderFormGroup() {
		return new FormGroup<StopProductSubscriptionPostBodyIdentityProviderFormProperties>({
		});

	}

	export interface UpdateIdentityProviderSettingsPostBody {

		/**
		 * Details about an identity provider.
		 * Required
		 */
		IdentityProvider: UpdateIdentityProviderSettingsPostBodyIdentityProvider;

		/**
		 * The name of the user-based subscription product.
		 * Required
		 */
		Product: string;

		/**
		 * Updates the registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints.
		 * Required
		 */
		UpdateSettings: UpdateIdentityProviderSettingsPostBodyUpdateSettings;
	}
	export interface UpdateIdentityProviderSettingsPostBodyFormProperties {

		/**
		 * The name of the user-based subscription product.
		 * Required
		 */
		Product: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIdentityProviderSettingsPostBodyFormGroup() {
		return new FormGroup<UpdateIdentityProviderSettingsPostBodyFormProperties>({
			Product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateIdentityProviderSettingsPostBodyIdentityProvider {
		ActiveDirectoryIdentityProvider?: ActiveDirectoryIdentityProvider;
	}
	export interface UpdateIdentityProviderSettingsPostBodyIdentityProviderFormProperties {
	}
	export function CreateUpdateIdentityProviderSettingsPostBodyIdentityProviderFormGroup() {
		return new FormGroup<UpdateIdentityProviderSettingsPostBodyIdentityProviderFormProperties>({
		});

	}

	export interface UpdateIdentityProviderSettingsPostBodyUpdateSettings {
		AddSubnets?: Array<string>;
		RemoveSubnets?: Array<string>;
		SecurityGroupId?: string;
	}
	export interface UpdateIdentityProviderSettingsPostBodyUpdateSettingsFormProperties {
		SecurityGroupId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIdentityProviderSettingsPostBodyUpdateSettingsFormGroup() {
		return new FormGroup<UpdateIdentityProviderSettingsPostBodyUpdateSettingsFormProperties>({
			SecurityGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

}

