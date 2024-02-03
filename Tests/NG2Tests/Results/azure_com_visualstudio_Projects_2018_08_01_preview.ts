import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/** Defines a code repository. */
	export interface CodeRepository {

		/** Defines the authorization type and its parameters. */
		authorization?: Authorization;

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
		repository: CodeRepositoryLegacy;
	}

	/** Defines the source application, when it resides in a code repository. */
	export interface CodeRepositoryApplicationSourceFormProperties {
	}
	export function CreateCodeRepositoryApplicationSourceFormGroup() {
		return new FormGroup<CodeRepositoryApplicationSourceFormProperties>({
		});

	}


	/** Defines a code repository. */
	export interface CodeRepositoryLegacy {

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
	export interface CodeRepositoryLegacyFormProperties {

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
	export function CreateCodeRepositoryLegacyFormGroup() {
		return new FormGroup<CodeRepositoryLegacyFormProperties>({
			authorizationReference: new FormControl<string | null | undefined>(undefined),
			defaultBranch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			repositoryType: new FormControl<CodeRepositoryRepositoryType | null | undefined>(undefined, [Validators.required]),
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


	/** Defines bootstrap configuration for a CI/CD pipeline. */
	export interface PipelineBootstrapConfiguration {

		/**
		 * Name of the bootstrap configuration.
		 * Required
		 */
		name: string;

		/** Defines a code repository. */
		repository?: CodeRepository;

		/**
		 * Identifier of the pipeline template used for configuring pipeline.
		 * Required
		 */
		templateId: string;

		/** Dictionary of inputs used for configuring pipeline. The keys for inputs are defined by pipeline template. */
		templateParameters?: {[id: string]: string };
	}

	/** Defines bootstrap configuration for a CI/CD pipeline. */
	export interface PipelineBootstrapConfigurationFormProperties {

		/**
		 * Name of the bootstrap configuration.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Identifier of the pipeline template used for configuring pipeline.
		 * Required
		 */
		templateId: FormControl<string | null | undefined>,

		/** Dictionary of inputs used for configuring pipeline. The keys for inputs are defined by pipeline template. */
		templateParameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePipelineBootstrapConfigurationFormGroup() {
		return new FormGroup<PipelineBootstrapConfigurationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Defines a VSTS pipeline template. */
	export interface PipelineTemplateLegacy {

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
	export interface PipelineTemplateLegacyFormProperties {

		/**
		 * Global dictionary of authorization details used by the pipeline, with a friendly name as key. Individual resource in the pipeline can reference to a specific authorization info using the friendly name.
		 * Required
		 */
		authorizationDetails: FormControl<{[id: string]: Authorization } | null | undefined>,
	}
	export function CreatePipelineTemplateLegacyFormGroup() {
		return new FormGroup<PipelineTemplateLegacyFormProperties>({
			authorizationDetails: new FormControl<{[id: string]: Authorization } | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A Visual Studio Team Services project resource. */
	export interface ProjectResource {

		/** Kind of project resource. A bootStrappedProject is a project which has additional bootstrap information to create a CI/CD pipeline in the project. */
		kind?: ProjectResourceKind | null;

		/** Defines the custom properties of project resource. */
		properties?: ProjectResourceProperties;
	}

	/** A Visual Studio Team Services project resource. */
	export interface ProjectResourceFormProperties {

		/** Kind of project resource. A bootStrappedProject is a project which has additional bootstrap information to create a CI/CD pipeline in the project. */
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
		bootstrapPipelineTemplate?: PipelineTemplateLegacy;

		/** Optional UPN of the owner, on-behalf-of whom the project is being created. */
		ownerUpn?: string | null;

		/** Bootstrap configuration for pipelines in Team Project. */
		pipelineBootstrapConfigurations?: Array<PipelineBootstrapConfiguration>;

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

		/** Custom properties of project resource. */
		properties?: ProjectResourceUpdateParametersProperties;

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

	export interface ProjectResourceUpdateParametersProperties {

		/** Bootstrap configurations for pipelines in Team Project. */
		pipelineBootstrapConfigurations?: Array<PipelineBootstrapConfiguration>;
	}
	export interface ProjectResourceUpdateParametersPropertiesFormProperties {
	}
	export function CreateProjectResourceUpdateParametersPropertiesFormGroup() {
		return new FormGroup<ProjectResourceUpdateParametersPropertiesFormProperties>({
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
		 * Projects_ListByAccountResource
		 * Gets all Visual Studio Team Services project resources created in the specified Team Services account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{rootResourceName}/project
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} subscriptionId The Azure subscription identifier.
		 * @param {string} api_version API Version
		 * @param {string} rootResourceName Name of the Team Services account.
		 * @return {ProjectResourceListResult} The operation succeeded. The response contains the details of the Visual Studio Team Services project resources created in the specified Team Services account.
		 */
		Projects_ListByAccountResource(resourceGroupName: string, subscriptionId: string, api_version: string, rootResourceName: string): Observable<ProjectResourceListResult> {
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
		 * Projects_CreateOrUpdate
		 * Creates or updates a Team Services project in the collection with the specified name. 'VersionControlOption' and 'ProcessTemplateId' must be specified in the resource properties. Valid values for VersionControlOption: Git, Tfvc. Valid values for ProcessTemplateId: 6B724908-EF14-45CF-84F8-768B5384DA45, ADCC42AB-9882-485E-A3ED-7678F01F66BC, 27450541-8E31-4150-9947-DC59F998FC01 (these IDs correspond to Scrum, Agile, and CMMI process templates).
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
		Projects_CreateOrUpdate(resourceGroupName: string, subscriptionId: string, api_version: string, rootResourceName: string, resourceName: string, validating: string | null | undefined, requestBody: ProjectResource): Observable<ProjectResource> {
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
	}

}

