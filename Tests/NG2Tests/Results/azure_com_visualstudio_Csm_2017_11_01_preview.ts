import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The response to an account resource GET request. */
	export interface AccountResource {

		/** Resource properties. */
		properties?: {[id: string]: string };
	}

	/** The response to an account resource GET request. */
	export interface AccountResourceFormProperties {

		/** Resource properties. */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAccountResourceFormGroup() {
		return new FormGroup<AccountResourceFormProperties>({
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The response to an account resource list GET request. */
	export interface AccountResourceListResult {

		/** Array of resource details. */
		value?: Array<AccountResource>;
	}

	/** The response to an account resource list GET request. */
	export interface AccountResourceListResultFormProperties {
	}
	export function CreateAccountResourceListResultFormGroup() {
		return new FormGroup<AccountResourceListResultFormProperties>({
		});

	}


	/** The body of a PUT request to modify a Visual Studio account resource. */
	export interface AccountResourceRequest {

		/** The account name. */
		accountName?: string | null;

		/** The Azure instance location. */
		location?: string | null;

		/** The type of the operation. */
		operationType?: AccountResourceRequestOperationType | null;

		/** The custom properties of the resource. */
		properties?: {[id: string]: string };

		/** The custom tags of the resource. */
		tags?: {[id: string]: string };
	}

	/** The body of a PUT request to modify a Visual Studio account resource. */
	export interface AccountResourceRequestFormProperties {

		/** The account name. */
		accountName: FormControl<string | null | undefined>,

		/** The Azure instance location. */
		location: FormControl<string | null | undefined>,

		/** The type of the operation. */
		operationType: FormControl<AccountResourceRequestOperationType | null | undefined>,

		/** The custom properties of the resource. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** The custom tags of the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAccountResourceRequestFormGroup() {
		return new FormGroup<AccountResourceRequestFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<AccountResourceRequestOperationType | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum AccountResourceRequestOperationType { unknown = 'unknown', create = 'create', update = 'update', link = 'link' }


	/** Defines the source application for a VSTS pipeline. */
	export interface ApplicationSource {

		/** Application specific properties. */
		applicationConfiguration?: {[id: string]: string };

		/**
		 * Type of application.
		 * Required
		 */
		applicationType: ApplicationSourceApplicationType;

		/**
		 * Type of application source.
		 * Required
		 */
		sourceType: ApplicationSourceSourceType;
	}

	/** Defines the source application for a VSTS pipeline. */
	export interface ApplicationSourceFormProperties {

		/** Application specific properties. */
		applicationConfiguration: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Type of application.
		 * Required
		 */
		applicationType: FormControl<ApplicationSourceApplicationType | null | undefined>,

		/**
		 * Type of application source.
		 * Required
		 */
		sourceType: FormControl<ApplicationSourceSourceType | null | undefined>,
	}
	export function CreateApplicationSourceFormGroup() {
		return new FormGroup<ApplicationSourceFormProperties>({
			applicationConfiguration: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			applicationType: new FormControl<ApplicationSourceApplicationType | null | undefined>(undefined, [Validators.required]),
			sourceType: new FormControl<ApplicationSourceSourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ApplicationSourceApplicationType { AspDotNet = 'AspDotNet', AspDotNetCore = 'AspDotNetCore', NodeJs = 'NodeJs' }

	export enum ApplicationSourceSourceType { CodeTemplate = 'CodeTemplate', CodeRepository = 'CodeRepository' }


	/** Defines the target resources for a VSTS pipeline. */
	export interface ApplicationTarget {

		/**
		 * List of target resources.
		 * Required
		 */
		resources: Array<TargetResource>;

		/**
		 * Type of target.
		 * Required
		 */
		targetType: ApplicationTargetTargetType;
	}

	/** Defines the target resources for a VSTS pipeline. */
	export interface ApplicationTargetFormProperties {

		/**
		 * Type of target.
		 * Required
		 */
		targetType: FormControl<ApplicationTargetTargetType | null | undefined>,
	}
	export function CreateApplicationTargetFormGroup() {
		return new FormGroup<ApplicationTargetFormProperties>({
			targetType: new FormControl<ApplicationTargetTargetType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a single resource used as target for a VSTS pipeline. */
	export interface TargetResource {

		/** Reference to the authorization info used to access the target resource. This value is used as a key into the global authorization details dictionary. */
		authorizationReference?: string | null;

		/**
		 * Unique identifier of the target resource.
		 * Required
		 */
		id: string;

		/**
		 * Role of the target resource.
		 * Required
		 */
		role: string;
	}

	/** Defines a single resource used as target for a VSTS pipeline. */
	export interface TargetResourceFormProperties {

		/** Reference to the authorization info used to access the target resource. This value is used as a key into the global authorization details dictionary. */
		authorizationReference: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the target resource.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Role of the target resource.
		 * Required
		 */
		role: FormControl<string | null | undefined>,
	}
	export function CreateTargetResourceFormGroup() {
		return new FormGroup<TargetResourceFormProperties>({
			authorizationReference: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ApplicationTargetTargetType { WindowsAppService = 'WindowsAppService' }


	/** Defines the authorization type and its parameters. */
	export interface Authorization {

		/**
		 * Type of authorization.
		 * Required
		 */
		authorizationType: AuthorizationAuthorizationType;

		/** Authorization parameters corresponding to the authorization type. */
		parameters?: {[id: string]: string };
	}

	/** Defines the authorization type and its parameters. */
	export interface AuthorizationFormProperties {

		/**
		 * Type of authorization.
		 * Required
		 */
		authorizationType: FormControl<AuthorizationAuthorizationType | null | undefined>,

		/** Authorization parameters corresponding to the authorization type. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAuthorizationFormGroup() {
		return new FormGroup<AuthorizationFormProperties>({
			authorizationType: new FormControl<AuthorizationAuthorizationType | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum AuthorizationAuthorizationType { authorizationToken = 'authorizationToken', personalAccessToken = 'personalAccessToken' }


	/** The body of a POST request to check name availability. */
	export interface CheckNameAvailabilityParameter {

		/** The name of the resource to check availability for. */
		resourceName?: string | null;

		/** The type of resource to check availability for. */
		resourceType?: string | null;
	}

	/** The body of a POST request to check name availability. */
	export interface CheckNameAvailabilityParameterFormProperties {

		/** The name of the resource to check availability for. */
		resourceName: FormControl<string | null | undefined>,

		/** The type of resource to check availability for. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateCheckNameAvailabilityParameterFormGroup() {
		return new FormGroup<CheckNameAvailabilityParameterFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to a name availability request. */
	export interface CheckNameAvailabilityResult {

		/** The message describing the detailed reason. */
		message?: string | null;

		/** The value which indicates whether the provided name is available. */
		nameAvailable?: boolean | null;
	}

	/** The response to a name availability request. */
	export interface CheckNameAvailabilityResultFormProperties {

		/** The message describing the detailed reason. */
		message: FormControl<string | null | undefined>,

		/** The value which indicates whether the provided name is available. */
		nameAvailable: FormControl<boolean | null | undefined>,
	}
	export function CreateCheckNameAvailabilityResultFormGroup() {
		return new FormGroup<CheckNameAvailabilityResultFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines a code repository. */
	export interface CodeRepository {

		/** Reference to the authorization info used to access the code repository. This value is used as a key into the global authorization details dictionary. */
		authorizationReference?: string | null;

		/**
		 * Default branch for which continuous integration should be configured in the VSTS pipeline.
		 * Required
		 */
		defaultBranch: string;

		/**
		 * Unique identifier of the code repository.
		 * Required
		 */
		id: string;

		/** Repository-specific properties. */
		properties?: {[id: string]: string };

		/**
		 * Type of code repository.
		 * Required
		 */
		repositoryType: CodeRepositoryRepositoryType;
	}

	/** Defines a code repository. */
	export interface CodeRepositoryFormProperties {

		/** Reference to the authorization info used to access the code repository. This value is used as a key into the global authorization details dictionary. */
		authorizationReference: FormControl<string | null | undefined>,

		/**
		 * Default branch for which continuous integration should be configured in the VSTS pipeline.
		 * Required
		 */
		defaultBranch: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the code repository.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Repository-specific properties. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Type of code repository.
		 * Required
		 */
		repositoryType: FormControl<CodeRepositoryRepositoryType | null | undefined>,
	}
	export function CreateCodeRepositoryFormGroup() {
		return new FormGroup<CodeRepositoryFormProperties>({
			authorizationReference: new FormControl<string | null | undefined>(undefined),
			defaultBranch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			repositoryType: new FormControl<CodeRepositoryRepositoryType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CodeRepositoryRepositoryType { gitHub = 'gitHub', vstsGit = 'vstsGit' }


	/** Defines the source application, when it resides in a code repository. */
	export interface CodeRepositoryApplicationSource {

		/**
		 * Defines a code repository.
		 * Required
		 */
		repository: CodeRepository;
	}

	/** Defines the source application, when it resides in a code repository. */
	export interface CodeRepositoryApplicationSourceFormProperties {
	}
	export function CreateCodeRepositoryApplicationSourceFormGroup() {
		return new FormGroup<CodeRepositoryApplicationSourceFormProperties>({
		});

	}


	/** Defines the source application template. */
	export interface CodeTemplateApplicationSource {
	}

	/** Defines the source application template. */
	export interface CodeTemplateApplicationSourceFormProperties {
	}
	export function CreateCodeTemplateApplicationSourceFormGroup() {
		return new FormGroup<CodeTemplateApplicationSourceFormProperties>({
		});

	}


	/** The response to an extension resource GET request. */
	export interface ExtensionResource {

		/** Plan data for an extension resource. */
		plan?: ExtensionResourcePlan;

		/** Resource properties. */
		properties?: {[id: string]: string };
	}

	/** The response to an extension resource GET request. */
	export interface ExtensionResourceFormProperties {

		/** Resource properties. */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateExtensionResourceFormGroup() {
		return new FormGroup<ExtensionResourceFormProperties>({
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Plan data for an extension resource. */
	export interface ExtensionResourcePlan {

		/** Name of the plan. */
		name?: string | null;

		/** Product name. */
		product?: string | null;

		/** Optional: the promotion code associated with the plan. */
		promotionCode?: string | null;

		/** Name of the extension publisher. */
		publisher?: string | null;

		/** A string that uniquely identifies the plan version. */
		version?: string | null;
	}

	/** Plan data for an extension resource. */
	export interface ExtensionResourcePlanFormProperties {

		/** Name of the plan. */
		name: FormControl<string | null | undefined>,

		/** Product name. */
		product: FormControl<string | null | undefined>,

		/** Optional: the promotion code associated with the plan. */
		promotionCode: FormControl<string | null | undefined>,

		/** Name of the extension publisher. */
		publisher: FormControl<string | null | undefined>,

		/** A string that uniquely identifies the plan version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateExtensionResourcePlanFormGroup() {
		return new FormGroup<ExtensionResourcePlanFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			product: new FormControl<string | null | undefined>(undefined),
			promotionCode: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to an extension resource list GET request. */
	export interface ExtensionResourceListResult {

		/** Array of extension resource details. */
		value?: Array<ExtensionResource>;
	}

	/** The response to an extension resource list GET request. */
	export interface ExtensionResourceListResultFormProperties {
	}
	export function CreateExtensionResourceListResultFormGroup() {
		return new FormGroup<ExtensionResourceListResultFormProperties>({
		});

	}


	/** The body of an extension resource PUT request. */
	export interface ExtensionResourceRequest {

		/** The Azure region of the Visual Studio account associated with this request (i.e 'southcentralus'.) */
		location?: string | null;

		/** Plan data for an extension resource. */
		plan?: ExtensionResourcePlan;

		/** A dictionary of extended properties. This property is currently unused. */
		properties?: {[id: string]: string };

		/** A dictionary of user-defined tags to be stored with the extension resource. */
		tags?: {[id: string]: string };
	}

	/** The body of an extension resource PUT request. */
	export interface ExtensionResourceRequestFormProperties {

		/** The Azure region of the Visual Studio account associated with this request (i.e 'southcentralus'.) */
		location: FormControl<string | null | undefined>,

		/** A dictionary of extended properties. This property is currently unused. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** A dictionary of user-defined tags to be stored with the extension resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateExtensionResourceRequestFormGroup() {
		return new FormGroup<ExtensionResourceRequestFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Properties of an operation supported by the resource provider. */
	export interface Operation {

		/** Properties of an operation supported by the resource provider. */
		display?: OperationProperties;

		/** The name of the resource operation. */
		name?: string | null;
	}

	/** Properties of an operation supported by the resource provider. */
	export interface OperationFormProperties {

		/** The name of the resource operation. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an operation supported by the resource provider. */
	export interface OperationProperties {

		/** The description of the resource operation. */
		description?: string | null;

		/** The operation name. */
		operation?: string | null;

		/** The provider name. */
		provider?: string | null;

		/** The resource name. */
		resource?: string | null;
	}

	/** Properties of an operation supported by the resource provider. */
	export interface OperationPropertiesFormProperties {

		/** The description of the resource operation. */
		description: FormControl<string | null | undefined>,

		/** The operation name. */
		operation: FormControl<string | null | undefined>,

		/** The provider name. */
		provider: FormControl<string | null | undefined>,

		/** The resource name. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationPropertiesFormGroup() {
		return new FormGroup<OperationPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for a list of operations supported by a resource provider. */
	export interface OperationListResult {

		/** A list of operations supported by a resource provider. */
		value?: Array<Operation>;
	}

	/** Container for a list of operations supported by a resource provider. */
	export interface OperationListResultFormProperties {
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
		});

	}


	/** Defines a VSTS pipeline template. */
	export interface PipelineTemplate {

		/**
		 * Defines the source application for a VSTS pipeline.
		 * Required
		 */
		applicationSource: ApplicationSource;

		/**
		 * Defines the target resources for a VSTS pipeline.
		 * Required
		 */
		applicationTarget: ApplicationTarget;

		/**
		 * Global dictionary of authorization details used by the pipeline, with a friendly name as key. Individual resource in the pipeline can reference to a specific authorization info using the friendly name.
		 * Required
		 */
		authorizationDetails: {[id: string]: Authorization };
	}

	/** Defines a VSTS pipeline template. */
	export interface PipelineTemplateFormProperties {

		/**
		 * Global dictionary of authorization details used by the pipeline, with a friendly name as key. Individual resource in the pipeline can reference to a specific authorization info using the friendly name.
		 * Required
		 */
		authorizationDetails: FormControl<{[id: string]: Authorization } | null | undefined>,
	}
	export function CreatePipelineTemplateFormGroup() {
		return new FormGroup<PipelineTemplateFormProperties>({
			authorizationDetails: new FormControl<{[id: string]: Authorization } | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A Visual Studio Team Services project resource. */
	export interface ProjectResource {

		/** Kind of project resource */
		kind?: ProjectResourceKind | null;

		/** Defines the custom properties of project resource. */
		properties?: ProjectResourceProperties;
	}

	/** A Visual Studio Team Services project resource. */
	export interface ProjectResourceFormProperties {

		/** Kind of project resource */
		kind: FormControl<ProjectResourceKind | null | undefined>,
	}
	export function CreateProjectResourceFormGroup() {
		return new FormGroup<ProjectResourceFormProperties>({
			kind: new FormControl<ProjectResourceKind | null | undefined>(undefined),
		});

	}

	export enum ProjectResourceKind { project = 'project', bootstrappedProject = 'bootstrappedProject' }


	/** Defines the custom properties of project resource. */
	export interface ProjectResourceProperties {

		/** Defines a VSTS pipeline template. */
		bootstrapPipelineTemplate?: PipelineTemplate;

		/** Optional UPN of the owner, on-behalf-of whom the project is being created. */
		ownerUpn?: string | null;

		/** Process template to use in the project. */
		processTemplateId?: ProjectResourcePropertiesProcessTemplateId | null;

		/** Unique identifier of the VSTS project. */
		tfsUniqueIdentifier?: string | null;

		/** Version control to use for the default repo created in the project. */
		versionControlOption?: ProjectResourcePropertiesVersionControlOption | null;
	}

	/** Defines the custom properties of project resource. */
	export interface ProjectResourcePropertiesFormProperties {

		/** Optional UPN of the owner, on-behalf-of whom the project is being created. */
		ownerUpn: FormControl<string | null | undefined>,

		/** Process template to use in the project. */
		processTemplateId: FormControl<ProjectResourcePropertiesProcessTemplateId | null | undefined>,

		/** Unique identifier of the VSTS project. */
		tfsUniqueIdentifier: FormControl<string | null | undefined>,

		/** Version control to use for the default repo created in the project. */
		versionControlOption: FormControl<ProjectResourcePropertiesVersionControlOption | null | undefined>,
	}
	export function CreateProjectResourcePropertiesFormGroup() {
		return new FormGroup<ProjectResourcePropertiesFormProperties>({
			ownerUpn: new FormControl<string | null | undefined>(undefined),
			processTemplateId: new FormControl<ProjectResourcePropertiesProcessTemplateId | null | undefined>(undefined),
			tfsUniqueIdentifier: new FormControl<string | null | undefined>(undefined),
			versionControlOption: new FormControl<ProjectResourcePropertiesVersionControlOption | null | undefined>(undefined),
		});

	}

	export enum ProjectResourcePropertiesProcessTemplateId { Scrum = 'Scrum', Agile = 'Agile', Cmmi = 'Cmmi' }

	export enum ProjectResourcePropertiesVersionControlOption { Git = 'Git', Tfvc = 'Tfvc' }


	/** The response to a request to list Team Services project resources in a resource group/account. */
	export interface ProjectResourceListResult {

		/** List of project resource details. */
		value?: Array<ProjectResource>;
	}

	/** The response to a request to list Team Services project resources in a resource group/account. */
	export interface ProjectResourceListResultFormProperties {
	}
	export function CreateProjectResourceListResultFormGroup() {
		return new FormGroup<ProjectResourceListResultFormProperties>({
		});

	}


	/** The parameters to update a project resource. */
	export interface ProjectResourceUpdateParameters {

		/** The custom tags to be set on the resource. */
		tags?: {[id: string]: string };
	}

	/** The parameters to update a project resource. */
	export interface ProjectResourceUpdateParametersFormProperties {

		/** The custom tags to be set on the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateProjectResourceUpdateParametersFormGroup() {
		return new FormGroup<ProjectResourceUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A generic Azure Resource Manager resource. */
	export interface Resource {

		/** Unique identifier of the resource. */
		id?: string | null;

		/** Resource location. */
		location?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource tags. */
		tags?: {[id: string]: string };

		/** Resource type. */
		type?: string | null;
	}

	/** A generic Azure Resource Manager resource. */
	export interface ResourceFormProperties {

		/** Unique identifier of the resource. */
		id: FormControl<string | null | undefined>,

		/** Resource location. */
		location: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Operations_List
		 * Gets the details of all operations possible on the Microsoft.VisualStudio resource provider.
		 * Get providers/microsoft.visualstudio/operations
		 * @return {OperationListResult} The operation succeeded. The response contains the possible operations on the Microsoft.VisualStudio resource provider.
		 */
		Operations_List(): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/microsoft.visualstudio/operations', {});
		}

		/**
		 * Accounts_CheckNameAvailability
		 * Checks if the specified Visual Studio Team Services account name is available. Resource name can be either an account name or an account name and PUID.
		 * Post subscriptions/{subscriptionId}/providers/microsoft.visualstudio/checkNameAvailability
		 * @param {string} subscriptionId The Azure subscription identifier.
		 * @param {string} api_version API Version
		 * @param {CheckNameAvailabilityParameter} requestBody Parameters describing the name to check availability for.
		 * @return {CheckNameAvailabilityResult} The operation succeeded. The response contains the result of the name availability check.
		 */
		Accounts_CheckNameAvailability(subscriptionId: string, api_version: string, requestBody: CheckNameAvailabilityParameter): Observable<CheckNameAvailabilityResult> {
			return this.http.post<CheckNameAvailabilityResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.visualstudio/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Projects_ListByAccountResource
		 * Gets all Visual Studio Team Services project resources created in the specified Team Services account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{rootResourceName}/project
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} subscriptionId The Azure subscription identifier.
		 * @param {string} api_version API Version
		 * @param {string} rootResourceName Name of the Team Services account.
		 * @return {ProjectResourceListResult} The operation succeeded. The response contains the details of the Visual Studio Team Services project resources created in the specified Team Services account.
		 */
		Project_ListByAccountResource(resourceGroupName: string, subscriptionId: string, api_version: string, rootResourceName: string): Observable<ProjectResourceListResult> {
			return this.http.get<ProjectResourceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.visualstudio/account/' + (rootResourceName == null ? '' : encodeURIComponent(rootResourceName)) + '/project&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Projects_Get
		 * Gets the details of a Team Services project resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{rootResourceName}/project/{resourceName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} subscriptionId The Azure subscription identifier.
		 * @param {string} api_version API Version
		 * @param {string} rootResourceName Name of the Team Services account.
		 * @param {string} resourceName Name of the Team Services project.
		 * @return {ProjectResource} The operation succeeded. The response contains the details of the updated team project resource.
		 */
		Projects_Get(resourceGroupName: string, subscriptionId: string, api_version: string, rootResourceName: string, resourceName: string): Observable<ProjectResource> {
			return this.http.get<ProjectResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.visualstudio/account/' + (rootResourceName == null ? '' : encodeURIComponent(rootResourceName)) + '/project/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Projects_Create
		 * Creates a Team Services project in the collection with the specified name. 'VersionControlOption' and 'ProcessTemplateId' must be specified in the resource properties. Valid values for VersionControlOption: Git, Tfvc. Valid values for ProcessTemplateId: 6B724908-EF14-45CF-84F8-768B5384DA45, ADCC42AB-9882-485E-A3ED-7678F01F66BC, 27450541-8E31-4150-9947-DC59F998FC01 (these IDs correspond to Scrum, Agile, and CMMI process templates).
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{rootResourceName}/project/{resourceName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} subscriptionId The Azure subscription identifier.
		 * @param {string} api_version API Version
		 * @param {string} rootResourceName Name of the Team Services account.
		 * @param {string} resourceName Name of the Team Services project.
		 * @param {string} validating This parameter is ignored and should be set to an empty string.
		 * @param {ProjectResource} requestBody The request data.
		 * @return {ProjectResource} The operation succeeded. The response contains the details of the created or updated team project resource.
		 */
		Projects_Create(resourceGroupName: string, subscriptionId: string, api_version: string, rootResourceName: string, resourceName: string, validating: string | null | undefined, requestBody: ProjectResource): Observable<ProjectResource> {
			return this.http.put<ProjectResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.visualstudio/account/' + (rootResourceName == null ? '' : encodeURIComponent(rootResourceName)) + '/project/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&validating=' + (validating == null ? '' : encodeURIComponent(validating)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Projects_Update
		 * Updates the tags of the specified Team Services project.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{rootResourceName}/project/{resourceName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} subscriptionId The Azure subscription identifier.
		 * @param {string} api_version API Version
		 * @param {string} rootResourceName Name of the Team Services account.
		 * @param {string} resourceName Name of the Team Services project.
		 * @param {ProjectResourceUpdateParameters} requestBody The request data.
		 * @return {ProjectResource} The operation succeeded. The response contains the details of the updated team project resource.
		 */
		Projects_Update(resourceGroupName: string, subscriptionId: string, api_version: string, rootResourceName: string, resourceName: string, requestBody: ProjectResourceUpdateParameters): Observable<ProjectResource> {
			return this.http.patch<ProjectResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.visualstudio/account/' + (rootResourceName == null ? '' : encodeURIComponent(rootResourceName)) + '/project/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Accounts_ListByResourceGroup
		 * Gets all Visual Studio Team Services account resources under the resource group linked to the specified Azure subscription.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} subscriptionId The Azure subscription identifier.
		 * @param {string} api_version API Version
		 * @return {AccountResourceListResult} The operation succeeded. The response contains the details of the Visual Studio Team Services account resources linked to the Azure subscription.
		 */
		Accounts_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<AccountResourceListResult> {
			return this.http.get<AccountResourceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.visualstudio/account&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Extensions_ListByAccount
		 * Gets the details of the extension resources created within the resource group.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{accountResourceName}/extension
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} subscriptionId The Azure subscription identifier.
		 * @param {string} api_version API Version
		 * @param {string} accountResourceName The name of the Visual Studio Team Services account resource.
		 * @return {ExtensionResourceListResult} The operation succeeded. The response contains all extension resource details for the specified account.
		 */
		Extensions_ListByAccount(resourceGroupName: string, subscriptionId: string, api_version: string, accountResourceName: string): Observable<ExtensionResourceListResult> {
			return this.http.get<ExtensionResourceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.visualstudio/account/' + (accountResourceName == null ? '' : encodeURIComponent(accountResourceName)) + '/extension&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Extensions_Get
		 * Gets the details of an extension associated with a Visual Studio Team Services account resource.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{accountResourceName}/extension/{extensionResourceName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} subscriptionId The Azure subscription identifier.
		 * @param {string} api_version API Version
		 * @param {string} accountResourceName The name of the Visual Studio Team Services account resource.
		 * @param {string} extensionResourceName The name of the extension.
		 * @return {ExtensionResource} The operation succeeded. The response contains the extension resource details for the specified account.
		 */
		Extensions_Get(resourceGroupName: string, subscriptionId: string, api_version: string, accountResourceName: string, extensionResourceName: string): Observable<ExtensionResource> {
			return this.http.get<ExtensionResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.visualstudio/account/' + (accountResourceName == null ? '' : encodeURIComponent(accountResourceName)) + '/extension/' + (extensionResourceName == null ? '' : encodeURIComponent(extensionResourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Extensions_Create
		 * Registers the extension with a Visual Studio Team Services account.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{accountResourceName}/extension/{extensionResourceName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} subscriptionId The Azure subscription identifier.
		 * @param {string} api_version API Version
		 * @param {string} accountResourceName The name of the Visual Studio Team Services account resource.
		 * @param {string} extensionResourceName The name of the extension.
		 * @param {ExtensionResourceRequest} requestBody An object containing additional information related to the extension request.
		 * @return {ExtensionResource} The operation succeeded. The extension resource was created for the specified account.
		 */
		Extensions_Create(resourceGroupName: string, subscriptionId: string, api_version: string, accountResourceName: string, extensionResourceName: string, requestBody: ExtensionResourceRequest): Observable<ExtensionResource> {
			return this.http.put<ExtensionResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.visualstudio/account/' + (accountResourceName == null ? '' : encodeURIComponent(accountResourceName)) + '/extension/' + (extensionResourceName == null ? '' : encodeURIComponent(extensionResourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Extensions_Delete
		 * Removes an extension resource registration for a Visual Studio Team Services account.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{accountResourceName}/extension/{extensionResourceName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} subscriptionId The Azure subscription identifier.
		 * @param {string} api_version API Version
		 * @param {string} accountResourceName The name of the Visual Studio Team Services account resource.
		 * @param {string} extensionResourceName The name of the extension.
		 * @return {void} The operation succeeded. The extension resource has been deleted for the specified account.
		 */
		Extensions_Delete(resourceGroupName: string, subscriptionId: string, api_version: string, accountResourceName: string, extensionResourceName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.visualstudio/account/' + (accountResourceName == null ? '' : encodeURIComponent(accountResourceName)) + '/extension/' + (extensionResourceName == null ? '' : encodeURIComponent(extensionResourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Extensions_Update
		 * Updates an existing extension registration for the Visual Studio Team Services account.
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{accountResourceName}/extension/{extensionResourceName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} subscriptionId The Azure subscription identifier.
		 * @param {string} api_version API Version
		 * @param {string} accountResourceName The name of the Visual Studio Team Services account resource.
		 * @param {string} extensionResourceName The name of the extension.
		 * @param {ExtensionResourceRequest} requestBody An object containing additional information related to the extension request.
		 * @return {ExtensionResource} The operation succeeded. The extension resource was updated for the specified account.
		 */
		Extensions_Update(resourceGroupName: string, subscriptionId: string, api_version: string, accountResourceName: string, extensionResourceName: string, requestBody: ExtensionResourceRequest): Observable<ExtensionResource> {
			return this.http.patch<ExtensionResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.visualstudio/account/' + (accountResourceName == null ? '' : encodeURIComponent(accountResourceName)) + '/extension/' + (extensionResourceName == null ? '' : encodeURIComponent(extensionResourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Accounts_Get
		 * Gets the Visual Studio Team Services account resource details.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{resourceName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} subscriptionId The Azure subscription identifier.
		 * @param {string} api_version API Version
		 * @param {string} resourceName Name of the resource.
		 * @return {AccountResource} The operation succeeded. The response contains the details of the Visual Studio Team Services account resource.
		 */
		Accounts_Get(resourceGroupName: string, subscriptionId: string, api_version: string, resourceName: string): Observable<AccountResource> {
			return this.http.get<AccountResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.visualstudio/account/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Accounts_CreateOrUpdate
		 * Creates or updates a Visual Studio Team Services account resource.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{resourceName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} subscriptionId The Azure subscription identifier.
		 * @param {string} api_version API Version
		 * @param {string} resourceName Name of the resource.
		 * @param {AccountResourceRequest} requestBody The request data.
		 * @return {AccountResource} The operation succeeded. The Visual Studio Team Services account resource was created or updated.
		 */
		Accounts_CreateOrUpdate(resourceGroupName: string, subscriptionId: string, api_version: string, resourceName: string, requestBody: AccountResourceRequest): Observable<AccountResource> {
			return this.http.put<AccountResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.visualstudio/account/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Accounts_Delete
		 * Deletes a Visual Studio Team Services account resource.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{resourceName}
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} subscriptionId The Azure subscription identifier.
		 * @param {string} api_version API Version
		 * @param {string} resourceName Name of the resource.
		 * @return {void} The operation succeeded. The Visual Studio Team Services account resource was deleted.
		 */
		Accounts_Delete(resourceGroupName: string, subscriptionId: string, api_version: string, resourceName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.visualstudio/account/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

