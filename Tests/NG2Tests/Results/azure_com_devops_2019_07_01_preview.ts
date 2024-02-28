import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Authorization info used to access a resource (like code repository). */
	export interface Authorization {

		/**
		 * Type of authorization.
		 * Required
		 */
		authorizationType: AuthorizationAuthorizationType;

		/** Authorization parameters corresponding to the authorization type. */
		parameters?: {[id: string]: string };
	}

	/** Authorization info used to access a resource (like code repository). */
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

	export enum AuthorizationAuthorizationType { personalAccessToken = 'personalAccessToken' }


	/** Configuration used to bootstrap a Pipeline. */
	export interface BootstrapConfiguration {

		/** Repository containing the source code for a pipeline. */
		repository?: CodeRepository;

		/**
		 * Template used to bootstrap the pipeline.
		 * Required
		 */
		template: PipelineTemplate;
	}

	/** Configuration used to bootstrap a Pipeline. */
	export interface BootstrapConfigurationFormProperties {
	}
	export function CreateBootstrapConfigurationFormGroup() {
		return new FormGroup<BootstrapConfigurationFormProperties>({
		});

	}


	/** Repository containing the source code for a pipeline. */
	export interface CodeRepository {

		/** Authorization info used to access a resource (like code repository). */
		authorization?: Authorization;

		/**
		 * Default branch used to configure Continuous Integration (CI) in the pipeline.
		 * Required
		 */
		defaultBranch: string;

		/**
		 * Unique immutable identifier of the code repository.
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

	/** Repository containing the source code for a pipeline. */
	export interface CodeRepositoryFormProperties {

		/**
		 * Default branch used to configure Continuous Integration (CI) in the pipeline.
		 * Required
		 */
		defaultBranch: FormControl<string | null | undefined>,

		/**
		 * Unique immutable identifier of the code repository.
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


	/** Template used to bootstrap the pipeline. */
	export interface PipelineTemplate {

		/**
		 * Unique identifier of the pipeline template.
		 * Required
		 */
		id: string;

		/** Dictionary of input parameters used in the pipeline template. */
		parameters?: {[id: string]: string };
	}

	/** Template used to bootstrap the pipeline. */
	export interface PipelineTemplateFormProperties {

		/**
		 * Unique identifier of the pipeline template.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Dictionary of input parameters used in the pipeline template. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePipelineTemplateFormGroup() {
		return new FormGroup<PipelineTemplateFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** An error response from the Pipelines Resource Provider. */
	export interface CloudError {

		/** An error response from the Pipelines Resource Provider. */
		error?: CloudErrorBody;
	}

	/** An error response from the Pipelines Resource Provider. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** An error response from the Pipelines Resource Provider. */
	export interface CloudErrorBody {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A list of additional details about the error. */
		details?: Array<CloudErrorBody>;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;

		/** The target of the particular error. For example, the name of the property in error or the method where the error occurred. */
		target?: string | null;
	}

	/** An error response from the Pipelines Resource Provider. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. For example, the name of the property in error or the method where the error occurred. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of a pipeline template input parameter. */
	export interface InputDescriptor {

		/** Description of the input parameter. */
		description?: string | null;

		/**
		 * Identifier of the input parameter.
		 * Required
		 */
		id: string;

		/** List of possible values for the input parameter. */
		possibleValues?: Array<InputValue>;

		/**
		 * Data type of the value of the input parameter.
		 * Required
		 */
		type: InputDescriptorType;
	}

	/** Representation of a pipeline template input parameter. */
	export interface InputDescriptorFormProperties {

		/** Description of the input parameter. */
		description: FormControl<string | null | undefined>,

		/**
		 * Identifier of the input parameter.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Data type of the value of the input parameter.
		 * Required
		 */
		type: FormControl<InputDescriptorType | null | undefined>,
	}
	export function CreateInputDescriptorFormGroup() {
		return new FormGroup<InputDescriptorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<InputDescriptorType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Representation of a pipeline template input parameter value. */
	export interface InputValue {

		/** Description of the input parameter value. */
		displayValue?: string | null;

		/** Value of an input parameter. */
		value?: string | null;
	}

	/** Representation of a pipeline template input parameter value. */
	export interface InputValueFormProperties {

		/** Description of the input parameter value. */
		displayValue: FormControl<string | null | undefined>,

		/** Value of an input parameter. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateInputValueFormGroup() {
		return new FormGroup<InputValueFormProperties>({
			displayValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InputDescriptorType { String = 'String', SecureString = 'SecureString', Int = 'Int', Bool = 'Bool', Authorization = 'Authorization' }


	/** Properties of an Operation. */
	export interface Operation {

		/** Display information of an operation. */
		display?: OperationDisplayValue;

		/** Indicates whether the operation applies to data-plane. */
		isDataAction?: string | null;

		/** Name of the operation. */
		name?: string | null;
	}

	/** Properties of an Operation. */
	export interface OperationFormProperties {

		/** Indicates whether the operation applies to data-plane. */
		isDataAction: FormControl<string | null | undefined>,

		/** Name of the operation. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			isDataAction: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Display information of an operation. */
	export interface OperationDisplayValue {

		/** Friendly description of the operation. */
		description?: string | null;

		/** Friendly name of the operation. */
		operation?: string | null;

		/** Friendly name of the resource provider. */
		provider?: string | null;

		/** Friendly name of the resource type the operation applies to. */
		resource?: string | null;
	}

	/** Display information of an operation. */
	export interface OperationDisplayValueFormProperties {

		/** Friendly description of the operation. */
		description: FormControl<string | null | undefined>,

		/** Friendly name of the operation. */
		operation: FormControl<string | null | undefined>,

		/** Friendly name of the resource provider. */
		provider: FormControl<string | null | undefined>,

		/** Friendly name of the resource type the operation applies to. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayValueFormGroup() {
		return new FormGroup<OperationDisplayValueFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of a request to list all operations supported by Microsoft.DevOps resource provider. */
	export interface OperationListResult {

		/** The URL to get the next set of operations, if there are any. */
		nextLink?: string | null;

		/** List of operations supported by Microsoft.DevOps resource provider. */
		value?: Array<Operation>;
	}

	/** Result of a request to list all operations supported by Microsoft.DevOps resource provider. */
	export interface OperationListResultFormProperties {

		/** The URL to get the next set of operations, if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reference to an Azure DevOps Organization. */
	export interface OrganizationReference {

		/** Unique immutable identifier for the Azure DevOps Organization. */
		id?: string | null;

		/**
		 * Name of the Azure DevOps Organization.
		 * Required
		 */
		name: string;
	}

	/** Reference to an Azure DevOps Organization. */
	export interface OrganizationReferenceFormProperties {

		/** Unique immutable identifier for the Azure DevOps Organization. */
		id: FormControl<string | null | undefined>,

		/**
		 * Name of the Azure DevOps Organization.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationReferenceFormGroup() {
		return new FormGroup<OrganizationReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure DevOps Pipeline used to configure Continuous Integration (CI) & Continuous Delivery (CD) for Azure resources. */
	export interface Pipeline {

		/**
		 * Custom properties of a Pipeline.
		 * Required
		 */
		properties: PipelineProperties;
	}

	/** Azure DevOps Pipeline used to configure Continuous Integration (CI) & Continuous Delivery (CD) for Azure resources. */
	export interface PipelineFormProperties {
	}
	export function CreatePipelineFormGroup() {
		return new FormGroup<PipelineFormProperties>({
		});

	}


	/** Custom properties of a Pipeline. */
	export interface PipelineProperties {

		/**
		 * Configuration used to bootstrap a Pipeline.
		 * Required
		 */
		bootstrapConfiguration: BootstrapConfiguration;

		/**
		 * Reference to an Azure DevOps Organization.
		 * Required
		 */
		organization: OrganizationReference;

		/**
		 * Unique identifier of the Azure Pipeline within the Azure DevOps Project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pipelineId?: number | null;

		/**
		 * Reference to an Azure DevOps Project.
		 * Required
		 */
		project: ProjectReference;
	}

	/** Custom properties of a Pipeline. */
	export interface PipelinePropertiesFormProperties {

		/**
		 * Unique identifier of the Azure Pipeline within the Azure DevOps Project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pipelineId: FormControl<number | null | undefined>,
	}
	export function CreatePipelinePropertiesFormGroup() {
		return new FormGroup<PipelinePropertiesFormProperties>({
			pipelineId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Reference to an Azure DevOps Project. */
	export interface ProjectReference {

		/** Unique immutable identifier of the Azure DevOps Project. */
		id?: string | null;

		/**
		 * Name of the Azure DevOps Project.
		 * Required
		 */
		name: string;
	}

	/** Reference to an Azure DevOps Project. */
	export interface ProjectReferenceFormProperties {

		/** Unique immutable identifier of the Azure DevOps Project. */
		id: FormControl<string | null | undefined>,

		/**
		 * Name of the Azure DevOps Project.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateProjectReferenceFormGroup() {
		return new FormGroup<ProjectReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Result of a request to list all Azure Pipelines under a given scope. */
	export interface PipelineListResult {

		/** URL to get the next set of Pipelines, if there are any. */
		nextLink?: string | null;

		/** List of pipelines. */
		value?: Array<Pipeline>;
	}

	/** Result of a request to list all Azure Pipelines under a given scope. */
	export interface PipelineListResultFormProperties {

		/** URL to get the next set of Pipelines, if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePipelineListResultFormGroup() {
		return new FormGroup<PipelineListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of a pipeline template. */
	export interface PipelineTemplateDefinition {

		/** Description of the pipeline enabled by the template. */
		description?: string | null;

		/**
		 * Unique identifier of the pipeline template.
		 * Required
		 */
		id: string;

		/** List of input parameters required by the template to create a pipeline. */
		inputs?: Array<InputDescriptor>;
	}

	/** Definition of a pipeline template. */
	export interface PipelineTemplateDefinitionFormProperties {

		/** Description of the pipeline enabled by the template. */
		description: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the pipeline template.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePipelineTemplateDefinitionFormGroup() {
		return new FormGroup<PipelineTemplateDefinitionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Result of a request to list all pipeline template definitions. */
	export interface PipelineTemplateDefinitionListResult {

		/** The URL to get the next set of pipeline template definitions, if there are any. */
		nextLink?: string | null;

		/** List of pipeline template definitions. */
		value?: Array<PipelineTemplateDefinition>;
	}

	/** Result of a request to list all pipeline template definitions. */
	export interface PipelineTemplateDefinitionListResultFormProperties {

		/** The URL to get the next set of pipeline template definitions, if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePipelineTemplateDefinitionListResultFormGroup() {
		return new FormGroup<PipelineTemplateDefinitionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request payload used to update an existing Azure Pipeline. */
	export interface PipelineUpdateParameters {

		/** Dictionary of key-value pairs to be set as tags on the Azure Pipeline. This will overwrite any existing tags. */
		tags?: {[id: string]: string };
	}

	/** Request payload used to update an existing Azure Pipeline. */
	export interface PipelineUpdateParametersFormProperties {

		/** Dictionary of key-value pairs to be set as tags on the Azure Pipeline. This will overwrite any existing tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePipelineUpdateParametersFormGroup() {
		return new FormGroup<PipelineUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** An Azure Resource Manager (ARM) resource. */
	export interface Resource {

		/** Resource Id */
		id?: string | null;

		/** Resource Location */
		location?: string | null;

		/** Resource Name */
		name?: string | null;

		/** Resource Tags */
		tags?: {[id: string]: string };

		/** Resource Type */
		type?: string | null;
	}

	/** An Azure Resource Manager (ARM) resource. */
	export interface ResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource Location */
		location: FormControl<string | null | undefined>,

		/** Resource Name */
		name: FormControl<string | null | undefined>,

		/** Resource Tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource Type */
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
		 * Lists all the operations supported by Microsoft.DevOps resource provider.
		 * Get providers/Microsoft.DevOps/operations
		 * @param {string} api_version API version to be used with the HTTP request.
		 * @return {OperationListResult} The list of supported operations has been fetched successfully.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.DevOps/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all pipeline templates which can be used to configure an Azure Pipeline.
		 * Get providers/Microsoft.DevOps/pipelineTemplateDefinitions
		 * @param {string} api_version API version to be used with the HTTP request.
		 * @return {PipelineTemplateDefinitionListResult} The pipeline template definitions have been fetched successfully.
		 */
		PipelineTemplateDefinitions_List(api_version: string): Observable<PipelineTemplateDefinitionListResult> {
			return this.http.get<PipelineTemplateDefinitionListResult>(this.baseUri + 'providers/Microsoft.DevOps/pipelineTemplateDefinitions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all Azure Pipelines under the specified subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DevOps/pipelines
		 * @param {string} subscriptionId Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API version to be used with the HTTP request.
		 * @return {PipelineListResult} The Azure Pipelines have been fetched successfully.
		 */
		Pipelines_ListBySubscription(subscriptionId: string, api_version: string): Observable<PipelineListResult> {
			return this.http.get<PipelineListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DevOps/pipelines&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all Azure Pipelines under the specified resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOps/pipelines
		 * @param {string} subscriptionId Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} api_version API version to be used with the HTTP request.
		 * @return {PipelineListResult} The Azure Pipelines have been fetched successfully.
		 */
		Pipelines_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<PipelineListResult> {
			return this.http.get<PipelineListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevOps/pipelines&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an existing Azure Pipeline.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOps/pipelines/{pipelineName}
		 * @param {string} subscriptionId Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} api_version API version to be used with the HTTP request.
		 * @param {string} pipelineName The name of the Azure Pipeline resource in ARM.
		 * @return {Pipeline} The Azure Pipeline has been fetched successfully.
		 */
		Pipelines_Get(subscriptionId: string, resourceGroupName: string, api_version: string, pipelineName: string): Observable<Pipeline> {
			return this.http.get<Pipeline>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevOps/pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an Azure Pipeline.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOps/pipelines/{pipelineName}
		 * @param {string} subscriptionId Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} api_version API version to be used with the HTTP request.
		 * @param {string} pipelineName The name of the Azure Pipeline resource in ARM.
		 * @param {Pipeline} requestBody The request payload to create the Azure Pipeline.
		 * @return {Pipeline} The Azure Pipeline has been configured successfully.
		 */
		Pipelines_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, api_version: string, pipelineName: string, requestBody: Pipeline): Observable<Pipeline> {
			return this.http.put<Pipeline>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevOps/pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Azure Pipeline.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOps/pipelines/{pipelineName}
		 * @param {string} subscriptionId Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} api_version API version to be used with the HTTP request.
		 * @param {string} pipelineName The name of the Azure Pipeline resource.
		 * @return {void} The Azure Pipeline has been deleted successfully.
		 */
		Pipelines_Delete(subscriptionId: string, resourceGroupName: string, api_version: string, pipelineName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevOps/pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the properties of an Azure Pipeline. Currently, only tags can be updated.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevOps/pipelines/{pipelineName}
		 * @param {string} subscriptionId Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} api_version API version to be used with the HTTP request.
		 * @param {string} pipelineName The name of the Azure Pipeline resource.
		 * @param {PipelineUpdateParameters} requestBody The request payload containing the properties to update in the Azure Pipeline.
		 * @return {Pipeline} The Azure Pipeline has been updated successfully.
		 */
		Pipelines_Update(subscriptionId: string, resourceGroupName: string, api_version: string, pipelineName: string, requestBody: PipelineUpdateParameters): Observable<Pipeline> {
			return this.http.patch<Pipeline>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevOps/pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

