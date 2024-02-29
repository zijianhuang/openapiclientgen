import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateSlackChannelConfigurationResult {
	}
	export interface CreateSlackChannelConfigurationResultFormProperties {
	}
	export function CreateCreateSlackChannelConfigurationResultFormGroup() {
		return new FormGroup<CreateSlackChannelConfigurationResultFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface DeleteAccountAliasResult {
	}
	export interface DeleteAccountAliasResultFormProperties {
	}
	export function CreateDeleteAccountAliasResultFormGroup() {
		return new FormGroup<DeleteAccountAliasResultFormProperties>({
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

	export interface DeleteSlackChannelConfigurationResult {
	}
	export interface DeleteSlackChannelConfigurationResultFormProperties {
	}
	export function CreateDeleteSlackChannelConfigurationResultFormGroup() {
		return new FormGroup<DeleteSlackChannelConfigurationResultFormProperties>({
		});

	}

	export interface DeleteSlackWorkspaceConfigurationResult {
	}
	export interface DeleteSlackWorkspaceConfigurationResultFormProperties {
	}
	export function CreateDeleteSlackWorkspaceConfigurationResultFormGroup() {
		return new FormGroup<DeleteSlackWorkspaceConfigurationResultFormProperties>({
		});

	}

	export interface GetAccountAliasResult {
		accountAlias?: string;
	}
	export interface GetAccountAliasResultFormProperties {
		accountAlias: FormControl<string | null | undefined>,
	}
	export function CreateGetAccountAliasResultFormGroup() {
		return new FormGroup<GetAccountAliasResultFormProperties>({
			accountAlias: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSlackChannelConfigurationsResult {
		nextToken?: string;

		/** Required */
		slackChannelConfigurations: Array<SlackChannelConfiguration>;
	}
	export interface ListSlackChannelConfigurationsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSlackChannelConfigurationsResultFormGroup() {
		return new FormGroup<ListSlackChannelConfigurationsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for a Slack channel that you added for your Amazon Web Services account. */
	export interface SlackChannelConfiguration {

		/** Required */
		channelId: string;
		channelName?: string;
		channelRoleArn?: string;
		notifyOnAddCorrespondenceToCase?: boolean | null;
		notifyOnCaseSeverity?: NotificationSeverityLevel;
		notifyOnCreateOrReopenCase?: boolean | null;
		notifyOnResolveCase?: boolean | null;

		/** Required */
		teamId: string;
	}

	/** The configuration for a Slack channel that you added for your Amazon Web Services account. */
	export interface SlackChannelConfigurationFormProperties {

		/** Required */
		channelId: FormControl<string | null | undefined>,
		channelName: FormControl<string | null | undefined>,
		channelRoleArn: FormControl<string | null | undefined>,
		notifyOnAddCorrespondenceToCase: FormControl<boolean | null | undefined>,
		notifyOnCaseSeverity: FormControl<NotificationSeverityLevel | null | undefined>,
		notifyOnCreateOrReopenCase: FormControl<boolean | null | undefined>,
		notifyOnResolveCase: FormControl<boolean | null | undefined>,

		/** Required */
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateSlackChannelConfigurationFormGroup() {
		return new FormGroup<SlackChannelConfigurationFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			channelName: new FormControl<string | null | undefined>(undefined),
			channelRoleArn: new FormControl<string | null | undefined>(undefined),
			notifyOnAddCorrespondenceToCase: new FormControl<boolean | null | undefined>(undefined),
			notifyOnCaseSeverity: new FormControl<NotificationSeverityLevel | null | undefined>(undefined),
			notifyOnCreateOrReopenCase: new FormControl<boolean | null | undefined>(undefined),
			notifyOnResolveCase: new FormControl<boolean | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NotificationSeverityLevel { none = 'none', all = 'all', high = 'high' }

	export interface ListSlackWorkspaceConfigurationsResult {
		nextToken?: string;
		slackWorkspaceConfigurations?: Array<SlackWorkspaceConfiguration>;
	}
	export interface ListSlackWorkspaceConfigurationsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSlackWorkspaceConfigurationsResultFormGroup() {
		return new FormGroup<ListSlackWorkspaceConfigurationsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for a Slack workspace that you added to an Amazon Web Services account. */
	export interface SlackWorkspaceConfiguration {
		allowOrganizationMemberAccount?: boolean | null;

		/** Required */
		teamId: string;
		teamName?: string;
	}

	/** The configuration for a Slack workspace that you added to an Amazon Web Services account. */
	export interface SlackWorkspaceConfigurationFormProperties {
		allowOrganizationMemberAccount: FormControl<boolean | null | undefined>,

		/** Required */
		teamId: FormControl<string | null | undefined>,
		teamName: FormControl<string | null | undefined>,
	}
	export function CreateSlackWorkspaceConfigurationFormGroup() {
		return new FormGroup<SlackWorkspaceConfigurationFormProperties>({
			allowOrganizationMemberAccount: new FormControl<boolean | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			teamName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutAccountAliasResult {
	}
	export interface PutAccountAliasResultFormProperties {
	}
	export function CreatePutAccountAliasResultFormGroup() {
		return new FormGroup<PutAccountAliasResultFormProperties>({
		});

	}

	export interface RegisterSlackWorkspaceForOrganizationResult {
		accountType?: AccountType;
		teamId?: string;
		teamName?: string;
	}
	export interface RegisterSlackWorkspaceForOrganizationResultFormProperties {
		accountType: FormControl<AccountType | null | undefined>,
		teamId: FormControl<string | null | undefined>,
		teamName: FormControl<string | null | undefined>,
	}
	export function CreateRegisterSlackWorkspaceForOrganizationResultFormGroup() {
		return new FormGroup<RegisterSlackWorkspaceForOrganizationResultFormProperties>({
			accountType: new FormControl<AccountType | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined),
			teamName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccountType { management = 'management', member = 'member' }

	export interface UpdateSlackChannelConfigurationResult {
		channelId?: string;
		channelName?: string;
		channelRoleArn?: string;
		notifyOnAddCorrespondenceToCase?: boolean | null;
		notifyOnCaseSeverity?: NotificationSeverityLevel;
		notifyOnCreateOrReopenCase?: boolean | null;
		notifyOnResolveCase?: boolean | null;
		teamId?: string;
	}
	export interface UpdateSlackChannelConfigurationResultFormProperties {
		channelId: FormControl<string | null | undefined>,
		channelName: FormControl<string | null | undefined>,
		channelRoleArn: FormControl<string | null | undefined>,
		notifyOnAddCorrespondenceToCase: FormControl<boolean | null | undefined>,
		notifyOnCaseSeverity: FormControl<NotificationSeverityLevel | null | undefined>,
		notifyOnCreateOrReopenCase: FormControl<boolean | null | undefined>,
		notifyOnResolveCase: FormControl<boolean | null | undefined>,
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSlackChannelConfigurationResultFormGroup() {
		return new FormGroup<UpdateSlackChannelConfigurationResultFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			channelName: new FormControl<string | null | undefined>(undefined),
			channelRoleArn: new FormControl<string | null | undefined>(undefined),
			notifyOnAddCorrespondenceToCase: new FormControl<boolean | null | undefined>(undefined),
			notifyOnCaseSeverity: new FormControl<NotificationSeverityLevel | null | undefined>(undefined),
			notifyOnCreateOrReopenCase: new FormControl<boolean | null | undefined>(undefined),
			notifyOnResolveCase: new FormControl<boolean | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSlackChannelConfigurationRequest {

		/** Required */
		channelId: string;
		channelName?: string;

		/** Required */
		channelRoleArn: string;
		notifyOnAddCorrespondenceToCase?: boolean | null;

		/** Required */
		notifyOnCaseSeverity: NotificationSeverityLevel;
		notifyOnCreateOrReopenCase?: boolean | null;
		notifyOnResolveCase?: boolean | null;

		/** Required */
		teamId: string;
	}
	export interface CreateSlackChannelConfigurationRequestFormProperties {

		/** Required */
		channelId: FormControl<string | null | undefined>,
		channelName: FormControl<string | null | undefined>,

		/** Required */
		channelRoleArn: FormControl<string | null | undefined>,
		notifyOnAddCorrespondenceToCase: FormControl<boolean | null | undefined>,

		/** Required */
		notifyOnCaseSeverity: FormControl<NotificationSeverityLevel | null | undefined>,
		notifyOnCreateOrReopenCase: FormControl<boolean | null | undefined>,
		notifyOnResolveCase: FormControl<boolean | null | undefined>,

		/** Required */
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSlackChannelConfigurationRequestFormGroup() {
		return new FormGroup<CreateSlackChannelConfigurationRequestFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			channelName: new FormControl<string | null | undefined>(undefined),
			channelRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notifyOnAddCorrespondenceToCase: new FormControl<boolean | null | undefined>(undefined),
			notifyOnCaseSeverity: new FormControl<NotificationSeverityLevel | null | undefined>(undefined, [Validators.required]),
			notifyOnCreateOrReopenCase: new FormControl<boolean | null | undefined>(undefined),
			notifyOnResolveCase: new FormControl<boolean | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAccountAliasRequest {
	}
	export interface DeleteAccountAliasRequestFormProperties {
	}
	export function CreateDeleteAccountAliasRequestFormGroup() {
		return new FormGroup<DeleteAccountAliasRequestFormProperties>({
		});

	}

	export interface DeleteSlackChannelConfigurationRequest {

		/** Required */
		channelId: string;

		/** Required */
		teamId: string;
	}
	export interface DeleteSlackChannelConfigurationRequestFormProperties {

		/** Required */
		channelId: FormControl<string | null | undefined>,

		/** Required */
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSlackChannelConfigurationRequestFormGroup() {
		return new FormGroup<DeleteSlackChannelConfigurationRequestFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			teamId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSlackWorkspaceConfigurationRequest {

		/** Required */
		teamId: string;
	}
	export interface DeleteSlackWorkspaceConfigurationRequestFormProperties {

		/** Required */
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSlackWorkspaceConfigurationRequestFormGroup() {
		return new FormGroup<DeleteSlackWorkspaceConfigurationRequestFormProperties>({
			teamId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAccountAliasRequest {
	}
	export interface GetAccountAliasRequestFormProperties {
	}
	export function CreateGetAccountAliasRequestFormGroup() {
		return new FormGroup<GetAccountAliasRequestFormProperties>({
		});

	}

	export interface ListSlackChannelConfigurationsRequest {
		nextToken?: string;
	}
	export interface ListSlackChannelConfigurationsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSlackChannelConfigurationsRequestFormGroup() {
		return new FormGroup<ListSlackChannelConfigurationsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSlackWorkspaceConfigurationsRequest {
		nextToken?: string;
	}
	export interface ListSlackWorkspaceConfigurationsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSlackWorkspaceConfigurationsRequestFormGroup() {
		return new FormGroup<ListSlackWorkspaceConfigurationsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutAccountAliasRequest {

		/** Required */
		accountAlias: string;
	}
	export interface PutAccountAliasRequestFormProperties {

		/** Required */
		accountAlias: FormControl<string | null | undefined>,
	}
	export function CreatePutAccountAliasRequestFormGroup() {
		return new FormGroup<PutAccountAliasRequestFormProperties>({
			accountAlias: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterSlackWorkspaceForOrganizationRequest {

		/** Required */
		teamId: string;
	}
	export interface RegisterSlackWorkspaceForOrganizationRequestFormProperties {

		/** Required */
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterSlackWorkspaceForOrganizationRequestFormGroup() {
		return new FormGroup<RegisterSlackWorkspaceForOrganizationRequestFormProperties>({
			teamId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSlackChannelConfigurationRequest {

		/** Required */
		channelId: string;
		channelName?: string;
		channelRoleArn?: string;
		notifyOnAddCorrespondenceToCase?: boolean | null;
		notifyOnCaseSeverity?: NotificationSeverityLevel;
		notifyOnCreateOrReopenCase?: boolean | null;
		notifyOnResolveCase?: boolean | null;

		/** Required */
		teamId: string;
	}
	export interface UpdateSlackChannelConfigurationRequestFormProperties {

		/** Required */
		channelId: FormControl<string | null | undefined>,
		channelName: FormControl<string | null | undefined>,
		channelRoleArn: FormControl<string | null | undefined>,
		notifyOnAddCorrespondenceToCase: FormControl<boolean | null | undefined>,
		notifyOnCaseSeverity: FormControl<NotificationSeverityLevel | null | undefined>,
		notifyOnCreateOrReopenCase: FormControl<boolean | null | undefined>,
		notifyOnResolveCase: FormControl<boolean | null | undefined>,

		/** Required */
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSlackChannelConfigurationRequestFormGroup() {
		return new FormGroup<UpdateSlackChannelConfigurationRequestFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			channelName: new FormControl<string | null | undefined>(undefined),
			channelRoleArn: new FormControl<string | null | undefined>(undefined),
			notifyOnAddCorrespondenceToCase: new FormControl<boolean | null | undefined>(undefined),
			notifyOnCaseSeverity: new FormControl<NotificationSeverityLevel | null | undefined>(undefined),
			notifyOnCreateOrReopenCase: new FormControl<boolean | null | undefined>(undefined),
			notifyOnResolveCase: new FormControl<boolean | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a Slack channel configuration for your Amazon Web Services account.</p> <note> <ul> <li> <p>You can add up to 5 Slack workspaces for your account.</p> </li> <li> <p>You can add up to 20 Slack channels for your account.</p> </li> </ul> </note> <p>A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that you need to manage support cases for your organization. This can reduce the notifications about case updates that you receive in the Slack channel.</p> <note> <p>We recommend that you choose a private Slack channel so that only members in that channel have read and write access to your support cases. Anyone in your Slack channel can create, update, or resolve support cases for your account. Users require an invitation to join private channels. </p> </note>
		 * Post control/create-slack-channel-configuration
		 * @return {CreateSlackChannelConfigurationResult} Success
		 */
		CreateSlackChannelConfiguration(requestBody: CreateSlackChannelConfigurationPostBody): Observable<CreateSlackChannelConfigurationResult> {
			return this.http.post<CreateSlackChannelConfigurationResult>(this.baseUri + 'control/create-slack-channel-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an alias for an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
		 * Post control/delete-account-alias
		 * @return {DeleteAccountAliasResult} Success
		 */
		DeleteAccountAlias(): Observable<DeleteAccountAliasResult> {
			return this.http.post<DeleteAccountAliasResult>(this.baseUri + 'control/delete-account-alias', null, {});
		}

		/**
		 * Deletes a Slack channel configuration from your Amazon Web Services account. This operation doesn't delete your Slack channel.
		 * Post control/delete-slack-channel-configuration
		 * @return {DeleteSlackChannelConfigurationResult} Success
		 */
		DeleteSlackChannelConfiguration(requestBody: DeleteSlackChannelConfigurationPostBody): Observable<DeleteSlackChannelConfigurationResult> {
			return this.http.post<DeleteSlackChannelConfigurationResult>(this.baseUri + 'control/delete-slack-channel-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't delete your Slack workspace.
		 * Post control/delete-slack-workspace-configuration
		 * @return {DeleteSlackWorkspaceConfigurationResult} Success
		 */
		DeleteSlackWorkspaceConfiguration(requestBody: DeleteSlackWorkspaceConfigurationPostBody): Observable<DeleteSlackWorkspaceConfigurationResult> {
			return this.http.post<DeleteSlackWorkspaceConfigurationResult>(this.baseUri + 'control/delete-slack-workspace-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the alias from an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
		 * Post control/get-account-alias
		 * @return {GetAccountAliasResult} Success
		 */
		GetAccountAlias(): Observable<GetAccountAliasResult> {
			return this.http.post<GetAccountAliasResult>(this.baseUri + 'control/get-account-alias', null, {});
		}

		/**
		 * Lists the Slack channel configurations for an Amazon Web Services account.
		 * Post control/list-slack-channel-configurations
		 * @param {string} nextToken Pagination token
		 * @return {ListSlackChannelConfigurationsResult} Success
		 */
		ListSlackChannelConfigurations(nextToken: string | null | undefined, requestBody: ListSlackChannelConfigurationsPostBody): Observable<ListSlackChannelConfigurationsResult> {
			return this.http.post<ListSlackChannelConfigurationsResult>(this.baseUri + 'control/list-slack-channel-configurations?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Slack workspace configurations for an Amazon Web Services account.
		 * Post control/list-slack-workspace-configurations
		 * @param {string} nextToken Pagination token
		 * @return {ListSlackWorkspaceConfigurationsResult} Success
		 */
		ListSlackWorkspaceConfigurations(nextToken: string | null | undefined, requestBody: ListSlackWorkspaceConfigurationsPostBody): Observable<ListSlackWorkspaceConfigurationsResult> {
			return this.http.post<ListSlackWorkspaceConfigurationsResult>(this.baseUri + 'control/list-slack-workspace-configurations?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates an individual alias for each Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.
		 * Post control/put-account-alias
		 * @return {PutAccountAliasResult} Success
		 */
		PutAccountAlias(requestBody: PutAccountAliasPostBody): Observable<PutAccountAliasResult> {
			return this.http.post<PutAccountAliasResult>(this.baseUri + 'control/put-account-alias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be part of an organization in Organizations.</p> <p>If you're the <i>management account</i> and you want to register Slack workspaces for your organization, you must complete the following tasks:</p> <ol> <li> <p>Sign in to the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a> and authorize the Slack workspaces where you want your organization to have access to. See <a href="https://docs.aws.amazon.com/awssupport/latest/user/authorize-slack-workspace.html">Authorize a Slack workspace</a> in the <i>Amazon Web Services Support User Guide</i>.</p> </li> <li> <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API to authorize each Slack workspace for the organization.</p> </li> </ol> <p>After the management account authorizes the Slack workspace, member accounts can call this API to authorize the same Slack workspace for their individual accounts. Member accounts don't need to authorize the Slack workspace manually through the <a href="https://console.aws.amazon.com/support/app">Amazon Web Services Support Center</a>.</p> <p>To use the Amazon Web Services Support App, each account must then complete the following tasks:</p> <ul> <li> <p>Create an Identity and Access Management (IAM) role with the required permission. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a>.</p> </li> <li> <p>Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/add-your-slack-channel.html">Configuring a Slack channel</a>.</p> </li> </ul>
		 * Post control/register-slack-workspace-for-organization
		 * @return {RegisterSlackWorkspaceForOrganizationResult} Success
		 */
		RegisterSlackWorkspaceForOrganization(requestBody: RegisterSlackWorkspaceForOrganizationPostBody): Observable<RegisterSlackWorkspaceForOrganizationResult> {
			return this.http.post<RegisterSlackWorkspaceForOrganizationResult>(this.baseUri + 'control/register-slack-workspace-for-organization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the configuration for a Slack channel, such as case update notifications.
		 * Post control/update-slack-channel-configuration
		 * @return {UpdateSlackChannelConfigurationResult} Success
		 */
		UpdateSlackChannelConfiguration(requestBody: UpdateSlackChannelConfigurationPostBody): Observable<UpdateSlackChannelConfigurationResult> {
			return this.http.post<UpdateSlackChannelConfigurationResult>(this.baseUri + 'control/update-slack-channel-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateSlackChannelConfigurationPostBody {

		/**
		 * The channel ID in Slack. This ID identifies a channel within a Slack workspace.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		channelId: string;

		/**
		 * The name of the Slack channel that you configure for the Amazon Web Services Support App.
		 * Min length: 1
		 * Max length: 256
		 */
		channelName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of an IAM role that you want to use to perform operations on Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a> in the <i>Amazon Web Services Support User Guide</i>.
		 * Required
		 * Min length: 31
		 * Max length: 2048
		 */
		channelRoleArn: string;

		/** Whether you want to get notified when a support case has a new correspondence. */
		notifyOnAddCorrespondenceToCase?: boolean | null;

		/**
		 * <p>The case severity for a support case that you want to receive notifications.</p> <p>If you specify <code>high</code> or <code>all</code>, you must specify <code>true</code> for at least one of the following parameters:</p> <ul> <li> <p> <code>notifyOnAddCorrespondenceToCase</code> </p> </li> <li> <p> <code>notifyOnCreateOrReopenCase</code> </p> </li> <li> <p> <code>notifyOnResolveCase</code> </p> </li> </ul> <p>If you specify <code>none</code>, the following parameters must be null or <code>false</code>:</p> <ul> <li> <p> <code>notifyOnAddCorrespondenceToCase</code> </p> </li> <li> <p> <code>notifyOnCreateOrReopenCase</code> </p> </li> <li> <p> <code>notifyOnResolveCase</code> </p> </li> </ul> <note> <p>If you don't specify these parameters in your request, they default to <code>false</code>.</p> </note>
		 * Required
		 */
		notifyOnCaseSeverity: NotificationSeverityLevel;

		/** Whether you want to get notified when a support case is created or reopened. */
		notifyOnCreateOrReopenCase?: boolean | null;

		/** Whether you want to get notified when a support case is resolved. */
		notifyOnResolveCase?: boolean | null;

		/**
		 * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as <code>T012ABCDEFG</code>.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		teamId: string;
	}
	export interface CreateSlackChannelConfigurationPostBodyFormProperties {

		/**
		 * The channel ID in Slack. This ID identifies a channel within a Slack workspace.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		channelId: FormControl<string | null | undefined>,

		/**
		 * The name of the Slack channel that you configure for the Amazon Web Services Support App.
		 * Min length: 1
		 * Max length: 256
		 */
		channelName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of an IAM role that you want to use to perform operations on Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a> in the <i>Amazon Web Services Support User Guide</i>.
		 * Required
		 * Min length: 31
		 * Max length: 2048
		 */
		channelRoleArn: FormControl<string | null | undefined>,

		/** Whether you want to get notified when a support case has a new correspondence. */
		notifyOnAddCorrespondenceToCase: FormControl<boolean | null | undefined>,

		/**
		 * <p>The case severity for a support case that you want to receive notifications.</p> <p>If you specify <code>high</code> or <code>all</code>, you must specify <code>true</code> for at least one of the following parameters:</p> <ul> <li> <p> <code>notifyOnAddCorrespondenceToCase</code> </p> </li> <li> <p> <code>notifyOnCreateOrReopenCase</code> </p> </li> <li> <p> <code>notifyOnResolveCase</code> </p> </li> </ul> <p>If you specify <code>none</code>, the following parameters must be null or <code>false</code>:</p> <ul> <li> <p> <code>notifyOnAddCorrespondenceToCase</code> </p> </li> <li> <p> <code>notifyOnCreateOrReopenCase</code> </p> </li> <li> <p> <code>notifyOnResolveCase</code> </p> </li> </ul> <note> <p>If you don't specify these parameters in your request, they default to <code>false</code>.</p> </note>
		 * Required
		 */
		notifyOnCaseSeverity: FormControl<NotificationSeverityLevel | null | undefined>,

		/** Whether you want to get notified when a support case is created or reopened. */
		notifyOnCreateOrReopenCase: FormControl<boolean | null | undefined>,

		/** Whether you want to get notified when a support case is resolved. */
		notifyOnResolveCase: FormControl<boolean | null | undefined>,

		/**
		 * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as <code>T012ABCDEFG</code>.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSlackChannelConfigurationPostBodyFormGroup() {
		return new FormGroup<CreateSlackChannelConfigurationPostBodyFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^\S+$')]),
			channelName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^.+$')]),
			channelRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(31), Validators.maxLength(2048), Validators.pattern('^arn:aws:iam::[0-9]{12}:role/(.+)$')]),
			notifyOnAddCorrespondenceToCase: new FormControl<boolean | null | undefined>(undefined),
			notifyOnCaseSeverity: new FormControl<NotificationSeverityLevel | null | undefined>(undefined, [Validators.required]),
			notifyOnCreateOrReopenCase: new FormControl<boolean | null | undefined>(undefined),
			notifyOnResolveCase: new FormControl<boolean | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^\S+$')]),
		});

	}

	export interface DeleteSlackChannelConfigurationPostBody {

		/**
		 * The channel ID in Slack. This ID identifies a channel within a Slack workspace.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		channelId: string;

		/**
		 * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as <code>T012ABCDEFG</code>.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		teamId: string;
	}
	export interface DeleteSlackChannelConfigurationPostBodyFormProperties {

		/**
		 * The channel ID in Slack. This ID identifies a channel within a Slack workspace.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		channelId: FormControl<string | null | undefined>,

		/**
		 * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as <code>T012ABCDEFG</code>.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSlackChannelConfigurationPostBodyFormGroup() {
		return new FormGroup<DeleteSlackChannelConfigurationPostBodyFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^\S+$')]),
			teamId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^\S+$')]),
		});

	}

	export interface DeleteSlackWorkspaceConfigurationPostBody {

		/**
		 * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as <code>T012ABCDEFG</code>.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		teamId: string;
	}
	export interface DeleteSlackWorkspaceConfigurationPostBodyFormProperties {

		/**
		 * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as <code>T012ABCDEFG</code>.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSlackWorkspaceConfigurationPostBodyFormGroup() {
		return new FormGroup<DeleteSlackWorkspaceConfigurationPostBodyFormProperties>({
			teamId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^\S+$')]),
		});

	}

	export interface ListSlackChannelConfigurationsPostBody {

		/**
		 * If the results of a search are large, the API only returns a portion of the results and includes a <code>nextToken</code> pagination token in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When the API returns the last set of results, the response doesn't include a pagination token value.
		 * Min length: 1
		 * Max length: 256
		 */
		nextToken?: string | null;
	}
	export interface ListSlackChannelConfigurationsPostBodyFormProperties {

		/**
		 * If the results of a search are large, the API only returns a portion of the results and includes a <code>nextToken</code> pagination token in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When the API returns the last set of results, the response doesn't include a pagination token value.
		 * Min length: 1
		 * Max length: 256
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSlackChannelConfigurationsPostBodyFormGroup() {
		return new FormGroup<ListSlackChannelConfigurationsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^\S+$')]),
		});

	}

	export interface ListSlackWorkspaceConfigurationsPostBody {

		/**
		 * If the results of a search are large, the API only returns a portion of the results and includes a <code>nextToken</code> pagination token in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When the API returns the last set of results, the response doesn't include a pagination token value.
		 * Min length: 1
		 * Max length: 256
		 */
		nextToken?: string | null;
	}
	export interface ListSlackWorkspaceConfigurationsPostBodyFormProperties {

		/**
		 * If the results of a search are large, the API only returns a portion of the results and includes a <code>nextToken</code> pagination token in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When the API returns the last set of results, the response doesn't include a pagination token value.
		 * Min length: 1
		 * Max length: 256
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSlackWorkspaceConfigurationsPostBodyFormGroup() {
		return new FormGroup<ListSlackWorkspaceConfigurationsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^\S+$')]),
		});

	}

	export interface PutAccountAliasPostBody {

		/**
		 * An alias or short name for an Amazon Web Services account.
		 * Required
		 * Min length: 1
		 * Max length: 30
		 */
		accountAlias: string;
	}
	export interface PutAccountAliasPostBodyFormProperties {

		/**
		 * An alias or short name for an Amazon Web Services account.
		 * Required
		 * Min length: 1
		 * Max length: 30
		 */
		accountAlias: FormControl<string | null | undefined>,
	}
	export function CreatePutAccountAliasPostBodyFormGroup() {
		return new FormGroup<PutAccountAliasPostBodyFormProperties>({
			accountAlias: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(30), Validators.pattern('^[\w\- ]+$')]),
		});

	}

	export interface RegisterSlackWorkspaceForOrganizationPostBody {

		/**
		 * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as <code>T012ABCDEFG</code>. Specify the Slack workspace that you want to use for your organization.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		teamId: string;
	}
	export interface RegisterSlackWorkspaceForOrganizationPostBodyFormProperties {

		/**
		 * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as <code>T012ABCDEFG</code>. Specify the Slack workspace that you want to use for your organization.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterSlackWorkspaceForOrganizationPostBodyFormGroup() {
		return new FormGroup<RegisterSlackWorkspaceForOrganizationPostBodyFormProperties>({
			teamId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^\S+$')]),
		});

	}

	export interface UpdateSlackChannelConfigurationPostBody {

		/**
		 * The channel ID in Slack. This ID identifies a channel within a Slack workspace.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		channelId: string;

		/**
		 * The Slack channel name that you want to update.
		 * Min length: 1
		 * Max length: 256
		 */
		channelName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of an IAM role that you want to use to perform operations on Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a> in the <i>Amazon Web Services Support User Guide</i>.
		 * Min length: 31
		 * Max length: 2048
		 */
		channelRoleArn?: string | null;

		/** Whether you want to get notified when a support case has a new correspondence. */
		notifyOnAddCorrespondenceToCase?: boolean | null;

		/** <p>The case severity for a support case that you want to receive notifications.</p> <p>If you specify <code>high</code> or <code>all</code>, at least one of the following parameters must be <code>true</code>:</p> <ul> <li> <p> <code>notifyOnAddCorrespondenceToCase</code> </p> </li> <li> <p> <code>notifyOnCreateOrReopenCase</code> </p> </li> <li> <p> <code>notifyOnResolveCase</code> </p> </li> </ul> <p>If you specify <code>none</code>, any of the following parameters that you specify in your request must be <code>false</code>:</p> <ul> <li> <p> <code>notifyOnAddCorrespondenceToCase</code> </p> </li> <li> <p> <code>notifyOnCreateOrReopenCase</code> </p> </li> <li> <p> <code>notifyOnResolveCase</code> </p> </li> </ul> <note> <p>If you don't specify these parameters in your request, the Amazon Web Services Support App uses the current values by default.</p> </note> */
		notifyOnCaseSeverity?: NotificationSeverityLevel | null;

		/** Whether you want to get notified when a support case is created or reopened. */
		notifyOnCreateOrReopenCase?: boolean | null;

		/** Whether you want to get notified when a support case is resolved. */
		notifyOnResolveCase?: boolean | null;

		/**
		 * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as <code>T012ABCDEFG</code>.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		teamId: string;
	}
	export interface UpdateSlackChannelConfigurationPostBodyFormProperties {

		/**
		 * The channel ID in Slack. This ID identifies a channel within a Slack workspace.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		channelId: FormControl<string | null | undefined>,

		/**
		 * The Slack channel name that you want to update.
		 * Min length: 1
		 * Max length: 256
		 */
		channelName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of an IAM role that you want to use to perform operations on Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html">Managing access to the Amazon Web Services Support App</a> in the <i>Amazon Web Services Support User Guide</i>.
		 * Min length: 31
		 * Max length: 2048
		 */
		channelRoleArn: FormControl<string | null | undefined>,

		/** Whether you want to get notified when a support case has a new correspondence. */
		notifyOnAddCorrespondenceToCase: FormControl<boolean | null | undefined>,

		/** <p>The case severity for a support case that you want to receive notifications.</p> <p>If you specify <code>high</code> or <code>all</code>, at least one of the following parameters must be <code>true</code>:</p> <ul> <li> <p> <code>notifyOnAddCorrespondenceToCase</code> </p> </li> <li> <p> <code>notifyOnCreateOrReopenCase</code> </p> </li> <li> <p> <code>notifyOnResolveCase</code> </p> </li> </ul> <p>If you specify <code>none</code>, any of the following parameters that you specify in your request must be <code>false</code>:</p> <ul> <li> <p> <code>notifyOnAddCorrespondenceToCase</code> </p> </li> <li> <p> <code>notifyOnCreateOrReopenCase</code> </p> </li> <li> <p> <code>notifyOnResolveCase</code> </p> </li> </ul> <note> <p>If you don't specify these parameters in your request, the Amazon Web Services Support App uses the current values by default.</p> </note> */
		notifyOnCaseSeverity: FormControl<NotificationSeverityLevel | null | undefined>,

		/** Whether you want to get notified when a support case is created or reopened. */
		notifyOnCreateOrReopenCase: FormControl<boolean | null | undefined>,

		/** Whether you want to get notified when a support case is resolved. */
		notifyOnResolveCase: FormControl<boolean | null | undefined>,

		/**
		 * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as <code>T012ABCDEFG</code>.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSlackChannelConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateSlackChannelConfigurationPostBodyFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^\S+$')]),
			channelName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^.+$')]),
			channelRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(31), Validators.maxLength(2048), Validators.pattern('^arn:aws:iam::[0-9]{12}:role/(.+)$')]),
			notifyOnAddCorrespondenceToCase: new FormControl<boolean | null | undefined>(undefined),
			notifyOnCaseSeverity: new FormControl<NotificationSeverityLevel | null | undefined>(undefined),
			notifyOnCreateOrReopenCase: new FormControl<boolean | null | undefined>(undefined),
			notifyOnResolveCase: new FormControl<boolean | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^\S+$')]),
		});

	}

}

