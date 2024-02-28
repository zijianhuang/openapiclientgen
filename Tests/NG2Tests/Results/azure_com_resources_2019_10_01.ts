import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The type of the paths for alias.  */
	export interface AliasPathType {

		/** The API versions. */
		apiVersions?: Array<string>;

		/** The path of an alias. */
		path?: string | null;
	}

	/** The type of the paths for alias.  */
	export interface AliasPathTypeFormProperties {

		/** The path of an alias. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateAliasPathTypeFormGroup() {
		return new FormGroup<AliasPathTypeFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The alias type.  */
	export interface AliasType {

		/** The alias name. */
		name?: string | null;

		/** The paths for an alias. */
		paths?: Array<AliasPathType>;
	}

	/** The alias type.  */
	export interface AliasTypeFormProperties {

		/** The alias name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAliasTypeFormGroup() {
		return new FormGroup<AliasTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deployment dependency information. */
	export interface BasicDependency {

		/** The ID of the dependency. */
		id?: string | null;

		/** The dependency resource name. */
		resourceName?: string | null;

		/** The dependency resource type. */
		resourceType?: string | null;
	}

	/** Deployment dependency information. */
	export interface BasicDependencyFormProperties {

		/** The ID of the dependency. */
		id: FormControl<string | null | undefined>,

		/** The dependency resource name. */
		resourceName: FormControl<string | null | undefined>,

		/** The dependency resource type. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateBasicDependencyFormGroup() {
		return new FormGroup<BasicDependencyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error response for a resource management request. */
	export interface CloudError {

		/** The resource management error response. */
		error?: any;
	}

	/** An error response for a resource management request. */
	export interface CloudErrorFormProperties {

		/** The resource management error response. */
		error: FormControl<any | null | undefined>,
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
			error: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The debug setting. */
	export interface DebugSetting {

		/** Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information you are passing in during deployment. By logging information about the request or response, you could potentially expose sensitive data that is retrieved through the deployment operations. */
		detailLevel?: string | null;
	}

	/** The debug setting. */
	export interface DebugSettingFormProperties {

		/** Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information you are passing in during deployment. By logging information about the request or response, you could potentially expose sensitive data that is retrieved through the deployment operations. */
		detailLevel: FormControl<string | null | undefined>,
	}
	export function CreateDebugSettingFormGroup() {
		return new FormGroup<DebugSettingFormProperties>({
			detailLevel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deployment dependency information. */
	export interface Dependency {

		/** The list of dependencies. */
		dependsOn?: Array<BasicDependency>;

		/** The ID of the dependency. */
		id?: string | null;

		/** The dependency resource name. */
		resourceName?: string | null;

		/** The dependency resource type. */
		resourceType?: string | null;
	}

	/** Deployment dependency information. */
	export interface DependencyFormProperties {

		/** The ID of the dependency. */
		id: FormControl<string | null | undefined>,

		/** The dependency resource name. */
		resourceName: FormControl<string | null | undefined>,

		/** The dependency resource type. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateDependencyFormGroup() {
		return new FormGroup<DependencyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deployment operation parameters. */
	export interface Deployment {

		/** The location to store the deployment data. */
		location?: string | null;

		/**
		 * Deployment properties.
		 * Required
		 */
		properties: DeploymentProperties;
	}

	/** Deployment operation parameters. */
	export interface DeploymentFormProperties {

		/** The location to store the deployment data. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The deployment export result.  */
	export interface DeploymentExportResult {

		/** The template content. */
		template?: string | null;
	}

	/** The deployment export result.  */
	export interface DeploymentExportResultFormProperties {

		/** The template content. */
		template: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentExportResultFormGroup() {
		return new FormGroup<DeploymentExportResultFormProperties>({
			template: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deployment information. */
	export interface DeploymentExtended {

		/** The ID of the deployment. */
		id?: string | null;

		/** the location of the deployment. */
		location?: string | null;

		/** The name of the deployment. */
		name?: string | null;

		/** Deployment properties with additional details. */
		properties?: DeploymentPropertiesExtended;

		/** The type of the deployment. */
		type?: string | null;
	}

	/** Deployment information. */
	export interface DeploymentExtendedFormProperties {

		/** The ID of the deployment. */
		id: FormControl<string | null | undefined>,

		/** the location of the deployment. */
		location: FormControl<string | null | undefined>,

		/** The name of the deployment. */
		name: FormControl<string | null | undefined>,

		/** The type of the deployment. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentExtendedFormGroup() {
		return new FormGroup<DeploymentExtendedFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deployment filter. */
	export interface DeploymentExtendedFilter {

		/** The provisioning state. */
		provisioningState?: string | null;
	}

	/** Deployment filter. */
	export interface DeploymentExtendedFilterFormProperties {

		/** The provisioning state. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentExtendedFilterFormGroup() {
		return new FormGroup<DeploymentExtendedFilterFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of deployments. */
	export interface DeploymentListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** An array of deployments. */
		value?: Array<DeploymentExtended>;
	}

	/** List of deployments. */
	export interface DeploymentListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentListResultFormGroup() {
		return new FormGroup<DeploymentListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deployment operation information. */
	export interface DeploymentOperation {

		/** Full deployment operation ID. */
		id?: string | null;

		/** Deployment operation ID. */
		operationId?: string | null;

		/** Deployment operation properties. */
		properties?: DeploymentOperationProperties;
	}

	/** Deployment operation information. */
	export interface DeploymentOperationFormProperties {

		/** Full deployment operation ID. */
		id: FormControl<string | null | undefined>,

		/** Deployment operation ID. */
		operationId: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentOperationFormGroup() {
		return new FormGroup<DeploymentOperationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deployment operation properties. */
	export interface DeploymentOperationProperties {

		/** The duration of the operation. */
		duration?: string | null;

		/** The state of the provisioning. */
		provisioningState?: string | null;

		/** HTTP message. */
		request?: HttpMessage;

		/** HTTP message. */
		response?: HttpMessage;

		/** Deployment operation service request id. */
		serviceRequestId?: string | null;

		/** Operation status code. */
		statusCode?: string | null;

		/** Operation status message. */
		statusMessage?: string | null;

		/** Target resource. */
		targetResource?: TargetResource;

		/** The date and time of the operation. */
		timestamp?: Date | null;
	}

	/** Deployment operation properties. */
	export interface DeploymentOperationPropertiesFormProperties {

		/** The duration of the operation. */
		duration: FormControl<string | null | undefined>,

		/** The state of the provisioning. */
		provisioningState: FormControl<string | null | undefined>,

		/** Deployment operation service request id. */
		serviceRequestId: FormControl<string | null | undefined>,

		/** Operation status code. */
		statusCode: FormControl<string | null | undefined>,

		/** Operation status message. */
		statusMessage: FormControl<string | null | undefined>,

		/** The date and time of the operation. */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDeploymentOperationPropertiesFormGroup() {
		return new FormGroup<DeploymentOperationPropertiesFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			serviceRequestId: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<string | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** List of deployment operations. */
	export interface DeploymentOperationsListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** An array of deployment operations. */
		value?: Array<DeploymentOperation>;
	}

	/** List of deployment operations. */
	export interface DeploymentOperationsListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentOperationsListResultFormGroup() {
		return new FormGroup<DeploymentOperationsListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deployment properties. */
	export interface DeploymentProperties {

		/** The debug setting. */
		debugSetting?: DebugSetting;

		/**
		 * The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources.
		 * Required
		 */
		mode: DeploymentPropertiesMode;

		/** Deployment on error behavior. */
		onErrorDeployment?: OnErrorDeployment;

		/** Name and value pairs that define the deployment parameters for the template. You use this element when you want to provide the parameter values directly in the request rather than link to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string. */
		parameters?: string | null;

		/** Entity representing the reference to the deployment parameters. */
		parametersLink?: ParametersLink;

		/** The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both. */
		template?: string | null;

		/** Entity representing the reference to the template. */
		templateLink?: TemplateLink;
	}

	/** Deployment properties. */
	export interface DeploymentPropertiesFormProperties {

		/**
		 * The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources.
		 * Required
		 */
		mode: FormControl<DeploymentPropertiesMode | null | undefined>,

		/** Name and value pairs that define the deployment parameters for the template. You use this element when you want to provide the parameter values directly in the request rather than link to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string. */
		parameters: FormControl<string | null | undefined>,

		/** The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both. */
		template: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentPropertiesFormGroup() {
		return new FormGroup<DeploymentPropertiesFormProperties>({
			mode: new FormControl<DeploymentPropertiesMode | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeploymentPropertiesMode { Incremental = 'Incremental', Complete = 'Complete' }


	/** Deployment properties with additional details. */
	export interface DeploymentPropertiesExtended {

		/** The correlation ID of the deployment. */
		correlationId?: string | null;

		/** The debug setting. */
		debugSetting?: DebugSetting;

		/** The list of deployment dependencies. */
		dependencies?: Array<Dependency>;

		/** The duration of the template deployment. */
		duration?: string | null;

		/** The deployment mode. Possible values are Incremental and Complete. */
		mode?: DeploymentPropertiesMode | null;

		/** Deployment on error behavior with additional details. */
		onErrorDeployment?: OnErrorDeploymentExtended;

		/** Key/value pairs that represent deployment output. */
		outputs?: string | null;

		/** Deployment parameters. Use only one of Parameters or ParametersLink. */
		parameters?: string | null;

		/** Entity representing the reference to the deployment parameters. */
		parametersLink?: ParametersLink;

		/** The list of resource providers needed for the deployment. */
		providers?: Array<Provider>;

		/** The state of the provisioning. */
		provisioningState?: string | null;

		/** The template content. Use only one of Template or TemplateLink. */
		template?: string | null;

		/** Entity representing the reference to the template. */
		templateLink?: TemplateLink;

		/** The timestamp of the template deployment. */
		timestamp?: Date | null;
	}

	/** Deployment properties with additional details. */
	export interface DeploymentPropertiesExtendedFormProperties {

		/** The correlation ID of the deployment. */
		correlationId: FormControl<string | null | undefined>,

		/** The duration of the template deployment. */
		duration: FormControl<string | null | undefined>,

		/** The deployment mode. Possible values are Incremental and Complete. */
		mode: FormControl<DeploymentPropertiesMode | null | undefined>,

		/** Key/value pairs that represent deployment output. */
		outputs: FormControl<string | null | undefined>,

		/** Deployment parameters. Use only one of Parameters or ParametersLink. */
		parameters: FormControl<string | null | undefined>,

		/** The state of the provisioning. */
		provisioningState: FormControl<string | null | undefined>,

		/** The template content. Use only one of Template or TemplateLink. */
		template: FormControl<string | null | undefined>,

		/** The timestamp of the template deployment. */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDeploymentPropertiesExtendedFormGroup() {
		return new FormGroup<DeploymentPropertiesExtendedFormProperties>({
			correlationId: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<DeploymentPropertiesMode | null | undefined>(undefined),
			outputs: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Resource provider information. */
	export interface Provider {

		/** The provider ID. */
		id?: string | null;

		/** The namespace of the resource provider. */
		namespace?: string | null;

		/** The registration policy of the resource provider. */
		registrationPolicy?: string | null;

		/** The registration state of the resource provider. */
		registrationState?: string | null;

		/** The collection of provider resource types. */
		resourceTypes?: Array<ProviderResourceType>;
	}

	/** Resource provider information. */
	export interface ProviderFormProperties {

		/** The provider ID. */
		id: FormControl<string | null | undefined>,

		/** The namespace of the resource provider. */
		namespace: FormControl<string | null | undefined>,

		/** The registration policy of the resource provider. */
		registrationPolicy: FormControl<string | null | undefined>,

		/** The registration state of the resource provider. */
		registrationState: FormControl<string | null | undefined>,
	}
	export function CreateProviderFormGroup() {
		return new FormGroup<ProviderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			registrationPolicy: new FormControl<string | null | undefined>(undefined),
			registrationState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource type managed by the resource provider. */
	export interface ProviderResourceType {

		/** The aliases that are supported by this resource type. */
		aliases?: Array<AliasType>;

		/** The API version. */
		apiVersions?: Array<string>;

		/** The additional capabilities offered by this resource type. */
		capabilities?: string | null;

		/** The collection of locations where this resource type can be created. */
		locations?: Array<string>;

		/** The properties. */
		properties?: {[id: string]: string };

		/** The resource type. */
		resourceType?: string | null;
	}

	/** Resource type managed by the resource provider. */
	export interface ProviderResourceTypeFormProperties {

		/** The additional capabilities offered by this resource type. */
		capabilities: FormControl<string | null | undefined>,

		/** The properties. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** The resource type. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateProviderResourceTypeFormGroup() {
		return new FormGroup<ProviderResourceTypeFormProperties>({
			capabilities: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information from validate template deployment response. */
	export interface DeploymentValidateResult {

		/** The resource management error response. */
		error?: any;

		/** Deployment properties with additional details. */
		properties?: DeploymentPropertiesExtended;
	}

	/** Information from validate template deployment response. */
	export interface DeploymentValidateResultFormProperties {

		/** The resource management error response. */
		error: FormControl<any | null | undefined>,
	}
	export function CreateDeploymentValidateResultFormGroup() {
		return new FormGroup<DeploymentValidateResultFormProperties>({
			error: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Deployment What-if operation parameters. */
	export interface DeploymentWhatIf {

		/** The location to store the deployment data. */
		location?: string | null;

		/**
		 * Deployment What-if properties.
		 * Required
		 */
		properties: DeploymentWhatIfProperties;
	}

	/** Deployment What-if operation parameters. */
	export interface DeploymentWhatIfFormProperties {

		/** The location to store the deployment data. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentWhatIfFormGroup() {
		return new FormGroup<DeploymentWhatIfFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deployment What-if properties. */
	export interface DeploymentWhatIfProperties extends DeploymentProperties {

		/** Deployment What-If operation settings. */
		whatIfSettings?: DeploymentWhatIfSettings;
	}

	/** Deployment What-if properties. */
	export interface DeploymentWhatIfPropertiesFormProperties extends DeploymentPropertiesFormProperties {
	}
	export function CreateDeploymentWhatIfPropertiesFormGroup() {
		return new FormGroup<DeploymentWhatIfPropertiesFormProperties>({
			mode: new FormControl<DeploymentPropertiesMode | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deployment What-If operation settings. */
	export interface DeploymentWhatIfSettings {

		/** The format of the What-If results */
		resultFormat?: DeploymentWhatIfSettingsResultFormat | null;
	}

	/** Deployment What-If operation settings. */
	export interface DeploymentWhatIfSettingsFormProperties {

		/** The format of the What-If results */
		resultFormat: FormControl<DeploymentWhatIfSettingsResultFormat | null | undefined>,
	}
	export function CreateDeploymentWhatIfSettingsFormGroup() {
		return new FormGroup<DeploymentWhatIfSettingsFormProperties>({
			resultFormat: new FormControl<DeploymentWhatIfSettingsResultFormat | null | undefined>(undefined),
		});

	}

	export enum DeploymentWhatIfSettingsResultFormat { ResourceIdOnly = 'ResourceIdOnly', FullResourcePayloads = 'FullResourcePayloads' }

	export interface ErrorResponse {
	}
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** Export resource group template request parameters. */
	export interface ExportTemplateRequest {

		/** The export template options. A CSV-formatted list containing zero or more of the following: 'IncludeParameterDefaultValue', 'IncludeComments', 'SkipResourceNameParameterization', 'SkipAllParameterization' */
		options?: string | null;

		/** The IDs of the resources to filter the export by. To export all resources, supply an array with single entry '*'. */
		resources?: Array<string>;
	}

	/** Export resource group template request parameters. */
	export interface ExportTemplateRequestFormProperties {

		/** The export template options. A CSV-formatted list containing zero or more of the following: 'IncludeParameterDefaultValue', 'IncludeComments', 'SkipResourceNameParameterization', 'SkipAllParameterization' */
		options: FormControl<string | null | undefined>,
	}
	export function CreateExportTemplateRequestFormGroup() {
		return new FormGroup<ExportTemplateRequestFormProperties>({
			options: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource information. */
	export interface GenericResource extends Resource {

		/** Identity for the resource. */
		identity?: Identity;

		/** The kind of the resource. */
		kind?: string | null;

		/** ID of the resource that manages this resource. */
		managedBy?: string | null;

		/** Plan for the resource. */
		plan?: Plan;

		/** The resource properties. */
		properties?: string | null;

		/** SKU for the resource. */
		sku?: Sku;
	}

	/** Resource information. */
	export interface GenericResourceFormProperties extends ResourceFormProperties {

		/** The kind of the resource. */
		kind: FormControl<string | null | undefined>,

		/** ID of the resource that manages this resource. */
		managedBy: FormControl<string | null | undefined>,

		/** The resource properties. */
		properties: FormControl<string | null | undefined>,
	}
	export function CreateGenericResourceFormGroup() {
		return new FormGroup<GenericResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-\w\._,\(\)]+$')]),
			managedBy: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource filter. */
	export interface GenericResourceFilter {

		/** The resource type. */
		resourceType?: string | null;

		/** The tag name. */
		tagname?: string | null;

		/** The tag value. */
		tagvalue?: string | null;
	}

	/** Resource filter. */
	export interface GenericResourceFilterFormProperties {

		/** The resource type. */
		resourceType: FormControl<string | null | undefined>,

		/** The tag name. */
		tagname: FormControl<string | null | undefined>,

		/** The tag value. */
		tagvalue: FormControl<string | null | undefined>,
	}
	export function CreateGenericResourceFilterFormGroup() {
		return new FormGroup<GenericResourceFilterFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			tagname: new FormControl<string | null | undefined>(undefined),
			tagvalue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** HTTP message. */
	export interface HttpMessage {

		/** HTTP message content. */
		content?: string | null;
	}

	/** HTTP message. */
	export interface HttpMessageFormProperties {

		/** HTTP message content. */
		content: FormControl<string | null | undefined>,
	}
	export function CreateHttpMessageFormGroup() {
		return new FormGroup<HttpMessageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identity for the resource. */
	export interface Identity {

		/** The principal ID of resource identity. */
		principalId?: string | null;

		/** The tenant ID of resource. */
		tenantId?: string | null;

		/** The identity type. */
		type?: IdentityType | null;

		/** The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities?: {[id: string]: IdentityUserAssignedIdentities };
	}

	/** Identity for the resource. */
	export interface IdentityFormProperties {

		/** The principal ID of resource identity. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant ID of resource. */
		tenantId: FormControl<string | null | undefined>,

		/** The identity type. */
		type: FormControl<IdentityType | null | undefined>,

		/** The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities: FormControl<{[id: string]: IdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: IdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export enum IdentityType { SystemAssigned = 'SystemAssigned', UserAssigned = 'UserAssigned', 'SystemAssigned, UserAssigned' = 'SystemAssigned, UserAssigned', None = 'None' }

	export interface IdentityUserAssignedIdentities {

		/** The client id of user assigned identity. */
		clientId?: string | null;

		/** The principal id of user assigned identity. */
		principalId?: string | null;
	}
	export interface IdentityUserAssignedIdentitiesFormProperties {

		/** The client id of user assigned identity. */
		clientId: FormControl<string | null | undefined>,

		/** The principal id of user assigned identity. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<IdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deployment on error behavior. */
	export interface OnErrorDeployment {

		/** The deployment to be used on error case. */
		deploymentName?: string | null;

		/** The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment. */
		type?: OnErrorDeploymentType | null;
	}

	/** Deployment on error behavior. */
	export interface OnErrorDeploymentFormProperties {

		/** The deployment to be used on error case. */
		deploymentName: FormControl<string | null | undefined>,

		/** The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment. */
		type: FormControl<OnErrorDeploymentType | null | undefined>,
	}
	export function CreateOnErrorDeploymentFormGroup() {
		return new FormGroup<OnErrorDeploymentFormProperties>({
			deploymentName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<OnErrorDeploymentType | null | undefined>(undefined),
		});

	}

	export enum OnErrorDeploymentType { LastSuccessful = 'LastSuccessful', SpecificDeployment = 'SpecificDeployment' }


	/** Deployment on error behavior with additional details. */
	export interface OnErrorDeploymentExtended {

		/** The deployment to be used on error case. */
		deploymentName?: string | null;

		/** The state of the provisioning for the on error deployment. */
		provisioningState?: string | null;

		/** The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment. */
		type?: OnErrorDeploymentType | null;
	}

	/** Deployment on error behavior with additional details. */
	export interface OnErrorDeploymentExtendedFormProperties {

		/** The deployment to be used on error case. */
		deploymentName: FormControl<string | null | undefined>,

		/** The state of the provisioning for the on error deployment. */
		provisioningState: FormControl<string | null | undefined>,

		/** The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment. */
		type: FormControl<OnErrorDeploymentType | null | undefined>,
	}
	export function CreateOnErrorDeploymentExtendedFormGroup() {
		return new FormGroup<OnErrorDeploymentExtendedFormProperties>({
			deploymentName: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<OnErrorDeploymentType | null | undefined>(undefined),
		});

	}


	/** Microsoft.Resources operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** Microsoft.Resources operation */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Microsoft.Resources operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Microsoft.Resources operations. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Microsoft.Resources operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Entity representing the reference to the deployment parameters. */
	export interface ParametersLink {

		/** If included, must match the ContentVersion in the template. */
		contentVersion?: string | null;

		/**
		 * The URI of the parameters file.
		 * Required
		 */
		uri: string;
	}

	/** Entity representing the reference to the deployment parameters. */
	export interface ParametersLinkFormProperties {

		/** If included, must match the ContentVersion in the template. */
		contentVersion: FormControl<string | null | undefined>,

		/**
		 * The URI of the parameters file.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateParametersLinkFormGroup() {
		return new FormGroup<ParametersLinkFormProperties>({
			contentVersion: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Plan for the resource. */
	export interface Plan {

		/** The plan ID. */
		name?: string | null;

		/** The offer ID. */
		product?: string | null;

		/** The promotion code. */
		promotionCode?: string | null;

		/** The publisher ID. */
		publisher?: string | null;

		/** The plan's version. */
		version?: string | null;
	}

	/** Plan for the resource. */
	export interface PlanFormProperties {

		/** The plan ID. */
		name: FormControl<string | null | undefined>,

		/** The offer ID. */
		product: FormControl<string | null | undefined>,

		/** The promotion code. */
		promotionCode: FormControl<string | null | undefined>,

		/** The publisher ID. */
		publisher: FormControl<string | null | undefined>,

		/** The plan's version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePlanFormGroup() {
		return new FormGroup<PlanFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			product: new FormControl<string | null | undefined>(undefined),
			promotionCode: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of resource providers. */
	export interface ProviderListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** An array of resource providers. */
		value?: Array<Provider>;
	}

	/** List of resource providers. */
	export interface ProviderListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateProviderListResultFormGroup() {
		return new FormGroup<ProviderListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specified resource. */
	export interface Resource {

		/** Resource ID */
		id?: string | null;

		/** Resource location */
		location?: string | null;

		/** Resource name */
		name?: string | null;

		/** Resource tags */
		tags?: {[id: string]: string };

		/** Resource type */
		type?: string | null;
	}

	/** Specified resource. */
	export interface ResourceFormProperties {

		/** Resource ID */
		id: FormControl<string | null | undefined>,

		/** Resource location */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type */
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


	/** Resource group information. */
	export interface ResourceGroup {

		/** The ID of the resource group. */
		id?: string | null;

		/**
		 * The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
		 * Required
		 */
		location: string;

		/** The ID of the resource that manages this resource group. */
		managedBy?: string | null;

		/** The name of the resource group. */
		name?: string | null;

		/** The resource group properties. */
		properties?: ResourceGroupProperties;

		/** The tags attached to the resource group. */
		tags?: {[id: string]: string };

		/** The type of the resource group. */
		type?: string | null;
	}

	/** Resource group information. */
	export interface ResourceGroupFormProperties {

		/** The ID of the resource group. */
		id: FormControl<string | null | undefined>,

		/**
		 * The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The ID of the resource that manages this resource group. */
		managedBy: FormControl<string | null | undefined>,

		/** The name of the resource group. */
		name: FormControl<string | null | undefined>,

		/** The tags attached to the resource group. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of the resource group. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceGroupFormGroup() {
		return new FormGroup<ResourceGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			managedBy: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource group export result. */
	export interface ResourceGroupExportResult {

		/** The resource management error response. */
		error?: any;

		/** The template content. */
		template?: string | null;
	}

	/** Resource group export result. */
	export interface ResourceGroupExportResultFormProperties {

		/** The resource management error response. */
		error: FormControl<any | null | undefined>,

		/** The template content. */
		template: FormControl<string | null | undefined>,
	}
	export function CreateResourceGroupExportResultFormGroup() {
		return new FormGroup<ResourceGroupExportResultFormProperties>({
			error: new FormControl<any | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource group filter. */
	export interface ResourceGroupFilter {

		/** The tag name. */
		tagName?: string | null;

		/** The tag value. */
		tagValue?: string | null;
	}

	/** Resource group filter. */
	export interface ResourceGroupFilterFormProperties {

		/** The tag name. */
		tagName: FormControl<string | null | undefined>,

		/** The tag value. */
		tagValue: FormControl<string | null | undefined>,
	}
	export function CreateResourceGroupFilterFormGroup() {
		return new FormGroup<ResourceGroupFilterFormProperties>({
			tagName: new FormControl<string | null | undefined>(undefined),
			tagValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of resource groups. */
	export interface ResourceGroupListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** An array of resource groups. */
		value?: Array<ResourceGroup>;
	}

	/** List of resource groups. */
	export interface ResourceGroupListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceGroupListResultFormGroup() {
		return new FormGroup<ResourceGroupListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource group information. */
	export interface ResourceGroupPatchable {

		/** The ID of the resource that manages this resource group. */
		managedBy?: string | null;

		/** The name of the resource group. */
		name?: string | null;

		/** The resource group properties. */
		properties?: ResourceGroupProperties;

		/** The tags attached to the resource group. */
		tags?: {[id: string]: string };
	}

	/** Resource group information. */
	export interface ResourceGroupPatchableFormProperties {

		/** The ID of the resource that manages this resource group. */
		managedBy: FormControl<string | null | undefined>,

		/** The name of the resource group. */
		name: FormControl<string | null | undefined>,

		/** The tags attached to the resource group. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateResourceGroupPatchableFormGroup() {
		return new FormGroup<ResourceGroupPatchableFormProperties>({
			managedBy: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The resource group properties. */
	export interface ResourceGroupProperties {

		/** The provisioning state. */
		provisioningState?: string | null;
	}

	/** The resource group properties. */
	export interface ResourceGroupPropertiesFormProperties {

		/** The provisioning state. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateResourceGroupPropertiesFormGroup() {
		return new FormGroup<ResourceGroupPropertiesFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of resource groups. */
	export interface ResourceListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** An array of resources. */
		value?: Array<GenericResource>;
	}

	/** List of resource groups. */
	export interface ResourceListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceListResultFormGroup() {
		return new FormGroup<ResourceListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource provider operation's display properties. */
	export interface ResourceProviderOperationDisplayProperties {

		/** Operation description. */
		description?: string | null;

		/** Resource provider operation. */
		operation?: string | null;

		/** Operation provider. */
		provider?: string | null;

		/** Operation description. */
		publisher?: string | null;

		/** Operation resource. */
		resource?: string | null;
	}

	/** Resource provider operation's display properties. */
	export interface ResourceProviderOperationDisplayPropertiesFormProperties {

		/** Operation description. */
		description: FormControl<string | null | undefined>,

		/** Resource provider operation. */
		operation: FormControl<string | null | undefined>,

		/** Operation provider. */
		provider: FormControl<string | null | undefined>,

		/** Operation description. */
		publisher: FormControl<string | null | undefined>,

		/** Operation resource. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateResourceProviderOperationDisplayPropertiesFormGroup() {
		return new FormGroup<ResourceProviderOperationDisplayPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters of move resources. */
	export interface ResourcesMoveInfo {

		/** The IDs of the resources. */
		resources?: Array<string>;

		/** The target resource group. */
		targetResourceGroup?: string | null;
	}

	/** Parameters of move resources. */
	export interface ResourcesMoveInfoFormProperties {

		/** The target resource group. */
		targetResourceGroup: FormControl<string | null | undefined>,
	}
	export function CreateResourcesMoveInfoFormGroup() {
		return new FormGroup<ResourcesMoveInfoFormProperties>({
			targetResourceGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deployment operation parameters. */
	export interface ScopedDeployment {

		/**
		 * The location to store the deployment data.
		 * Required
		 */
		location: string;

		/**
		 * Deployment properties.
		 * Required
		 */
		properties: DeploymentProperties;
	}

	/** Deployment operation parameters. */
	export interface ScopedDeploymentFormProperties {

		/**
		 * The location to store the deployment data.
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateScopedDeploymentFormGroup() {
		return new FormGroup<ScopedDeploymentFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** SKU for the resource. */
	export interface Sku {

		/**
		 * The SKU capacity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity?: number | null;

		/** The SKU family. */
		family?: string | null;

		/** The SKU model. */
		model?: string | null;

		/** The SKU name. */
		name?: string | null;

		/** The SKU size. */
		size?: string | null;

		/** The SKU tier. */
		tier?: string | null;
	}

	/** SKU for the resource. */
	export interface SkuFormProperties {

		/**
		 * The SKU capacity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity: FormControl<number | null | undefined>,

		/** The SKU family. */
		family: FormControl<string | null | undefined>,

		/** The SKU model. */
		model: FormControl<string | null | undefined>,

		/** The SKU name. */
		name: FormControl<string | null | undefined>,

		/** The SKU size. */
		size: FormControl<string | null | undefined>,

		/** The SKU tier. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sub-resource. */
	export interface SubResource {

		/** Resource ID */
		id?: string | null;
	}

	/** Sub-resource. */
	export interface SubResourceFormProperties {

		/** Resource ID */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceFormGroup() {
		return new FormGroup<SubResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tag count. */
	export interface TagCount {

		/** Type of count. */
		type?: string | null;

		/**
		 * Value of count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}

	/** Tag count. */
	export interface TagCountFormProperties {

		/** Type of count. */
		type: FormControl<string | null | undefined>,

		/**
		 * Value of count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateTagCountFormGroup() {
		return new FormGroup<TagCountFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Tag details. */
	export interface TagDetails {

		/** Tag count. */
		count?: TagCount;

		/** The tag name ID. */
		id?: string | null;

		/** The tag name. */
		tagName?: string | null;

		/** The list of tag values. */
		values?: Array<TagValue>;
	}

	/** Tag details. */
	export interface TagDetailsFormProperties {

		/** The tag name ID. */
		id: FormControl<string | null | undefined>,

		/** The tag name. */
		tagName: FormControl<string | null | undefined>,
	}
	export function CreateTagDetailsFormGroup() {
		return new FormGroup<TagDetailsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			tagName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tag information. */
	export interface TagValue {

		/** Tag count. */
		count?: TagCount;

		/** The tag value ID. */
		id?: string | null;

		/** The tag value. */
		tagValue?: string | null;
	}

	/** Tag information. */
	export interface TagValueFormProperties {

		/** The tag value ID. */
		id: FormControl<string | null | undefined>,

		/** The tag value. */
		tagValue: FormControl<string | null | undefined>,
	}
	export function CreateTagValueFormGroup() {
		return new FormGroup<TagValueFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			tagValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A dictionary of name and value pairs. */
	export interface Tags {
		tags?: {[id: string]: string };
	}

	/** A dictionary of name and value pairs. */
	export interface TagsFormProperties {
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** List of subscription tags. */
	export interface TagsListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** An array of tags. */
		value?: Array<TagDetails>;
	}

	/** List of subscription tags. */
	export interface TagsListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTagsListResultFormGroup() {
		return new FormGroup<TagsListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Wrapper resource for tags patch API request only. */
	export interface TagsPatchResource {

		/** The operation type for the patch API. */
		operation?: TagsPatchResourceOperation | null;

		/** A dictionary of name and value pairs. */
		properties?: Tags;
	}

	/** Wrapper resource for tags patch API request only. */
	export interface TagsPatchResourceFormProperties {

		/** The operation type for the patch API. */
		operation: FormControl<TagsPatchResourceOperation | null | undefined>,
	}
	export function CreateTagsPatchResourceFormGroup() {
		return new FormGroup<TagsPatchResourceFormProperties>({
			operation: new FormControl<TagsPatchResourceOperation | null | undefined>(undefined),
		});

	}

	export enum TagsPatchResourceOperation { Replace = 'Replace', Merge = 'Merge', Delete = 'Delete' }


	/** Wrapper resource for tags API requests and responses. */
	export interface TagsResource {

		/** The ID of the tags wrapper resource. */
		id?: string | null;

		/** The name of the tags wrapper resource. */
		name?: string | null;

		/**
		 * A dictionary of name and value pairs.
		 * Required
		 */
		properties: Tags;

		/** The type of the tags wrapper resource. */
		type?: string | null;
	}

	/** Wrapper resource for tags API requests and responses. */
	export interface TagsResourceFormProperties {

		/** The ID of the tags wrapper resource. */
		id: FormControl<string | null | undefined>,

		/** The name of the tags wrapper resource. */
		name: FormControl<string | null | undefined>,

		/** The type of the tags wrapper resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTagsResourceFormGroup() {
		return new FormGroup<TagsResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Target resource. */
	export interface TargetResource {

		/** The ID of the resource. */
		id?: string | null;

		/** The name of the resource. */
		resourceName?: string | null;

		/** The type of the resource. */
		resourceType?: string | null;
	}

	/** Target resource. */
	export interface TargetResourceFormProperties {

		/** The ID of the resource. */
		id: FormControl<string | null | undefined>,

		/** The name of the resource. */
		resourceName: FormControl<string | null | undefined>,

		/** The type of the resource. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateTargetResourceFormGroup() {
		return new FormGroup<TargetResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to calculate template hash. It contains a string of minified template and its hash. */
	export interface TemplateHashResult {

		/** The minified template string. */
		minifiedTemplate?: string | null;

		/** The template hash. */
		templateHash?: string | null;
	}

	/** Result of the request to calculate template hash. It contains a string of minified template and its hash. */
	export interface TemplateHashResultFormProperties {

		/** The minified template string. */
		minifiedTemplate: FormControl<string | null | undefined>,

		/** The template hash. */
		templateHash: FormControl<string | null | undefined>,
	}
	export function CreateTemplateHashResultFormGroup() {
		return new FormGroup<TemplateHashResultFormProperties>({
			minifiedTemplate: new FormControl<string | null | undefined>(undefined),
			templateHash: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Entity representing the reference to the template. */
	export interface TemplateLink {

		/** If included, must match the ContentVersion in the template. */
		contentVersion?: string | null;

		/**
		 * The URI of the template to deploy.
		 * Required
		 */
		uri: string;
	}

	/** Entity representing the reference to the template. */
	export interface TemplateLinkFormProperties {

		/** If included, must match the ContentVersion in the template. */
		contentVersion: FormControl<string | null | undefined>,

		/**
		 * The URI of the template to deploy.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTemplateLinkFormGroup() {
		return new FormGroup<TemplateLinkFormProperties>({
			contentVersion: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a single resource change predicted by What-If operation. */
	export interface WhatIfChange {

		/** The predicted snapshot of the resource after the deployment is executed. */
		after?: string | null;

		/** The snapshot of the resource before the deployment is executed. */
		before?: string | null;

		/**
		 * Type of change that will be made to the resource when the deployment is executed.
		 * Required
		 */
		changeType: WhatIfChangeChangeType;

		/** The predicted changes to resource properties. */
		delta?: Array<WhatIfPropertyChange>;

		/**
		 * Resource ID
		 * Required
		 */
		resourceId: string;
	}

	/** Information about a single resource change predicted by What-If operation. */
	export interface WhatIfChangeFormProperties {

		/** The predicted snapshot of the resource after the deployment is executed. */
		after: FormControl<string | null | undefined>,

		/** The snapshot of the resource before the deployment is executed. */
		before: FormControl<string | null | undefined>,

		/**
		 * Type of change that will be made to the resource when the deployment is executed.
		 * Required
		 */
		changeType: FormControl<WhatIfChangeChangeType | null | undefined>,

		/**
		 * Resource ID
		 * Required
		 */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateWhatIfChangeFormGroup() {
		return new FormGroup<WhatIfChangeFormProperties>({
			after: new FormControl<string | null | undefined>(undefined),
			before: new FormControl<string | null | undefined>(undefined),
			changeType: new FormControl<WhatIfChangeChangeType | null | undefined>(undefined, [Validators.required]),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WhatIfChangeChangeType { Create = 'Create', Delete = 'Delete', Ignore = 'Ignore', Deploy = 'Deploy', NoChange = 'NoChange', Modify = 'Modify' }


	/** The predicted change to the resource property. */
	export interface WhatIfPropertyChange {

		/** The value of the property after the deployment is executed. */
		after?: string | null;

		/** The value of the property before the deployment is executed. */
		before?: string | null;

		/** Nested property changes. */
		children?: Array<WhatIfPropertyChange>;

		/**
		 * The path of the property.
		 * Required
		 */
		path: string;

		/**
		 * The type of property change.
		 * Required
		 */
		propertyChangeType: WhatIfPropertyChangePropertyChangeType;
	}

	/** The predicted change to the resource property. */
	export interface WhatIfPropertyChangeFormProperties {

		/** The value of the property after the deployment is executed. */
		after: FormControl<string | null | undefined>,

		/** The value of the property before the deployment is executed. */
		before: FormControl<string | null | undefined>,

		/**
		 * The path of the property.
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/**
		 * The type of property change.
		 * Required
		 */
		propertyChangeType: FormControl<WhatIfPropertyChangePropertyChangeType | null | undefined>,
	}
	export function CreateWhatIfPropertyChangeFormGroup() {
		return new FormGroup<WhatIfPropertyChangeFormProperties>({
			after: new FormControl<string | null | undefined>(undefined),
			before: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			propertyChangeType: new FormControl<WhatIfPropertyChangePropertyChangeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WhatIfPropertyChangePropertyChangeType { Create = 'Create', Delete = 'Delete', Modify = 'Modify', Array = 'Array' }


	/** Deployment operation properties. */
	export interface WhatIfOperationProperties {

		/** List of resource changes predicted by What-If operation. */
		changes?: Array<WhatIfChange>;
	}

	/** Deployment operation properties. */
	export interface WhatIfOperationPropertiesFormProperties {
	}
	export function CreateWhatIfOperationPropertiesFormGroup() {
		return new FormGroup<WhatIfOperationPropertiesFormProperties>({
		});

	}


	/** Result of the What-If operation. Contains a list of predicted changes and a URL link to get to the next set of results. */
	export interface WhatIfOperationResult {

		/** The resource management error response. */
		error?: any;

		/** Deployment operation properties. */
		properties?: WhatIfOperationProperties;

		/** Status of the What-If operation. */
		status?: string | null;
	}

	/** Result of the What-If operation. Contains a list of predicted changes and a URL link to get to the next set of results. */
	export interface WhatIfOperationResultFormProperties {

		/** The resource management error response. */
		error: FormControl<any | null | undefined>,

		/** Status of the What-If operation. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateWhatIfOperationResultFormGroup() {
		return new FormGroup<WhatIfOperationResultFormProperties>({
			error: new FormControl<any | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all resource providers for the tenant.
		 * Get providers
		 * @param {number} top The number of results to return. If null is passed returns all providers.
		 * @param {string} expand The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {ProviderListResult} OK - Returns an array of resource providers.
		 */
		Providers_ListAtTenantScope(top: number | null | undefined, expand: string | null | undefined, api_version: string): Observable<ProviderListResult> {
			return this.http.get<ProviderListResult>(this.baseUri + 'providers?top=' + top + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all the deployments for a management group.
		 * Get providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/
		 * @param {string} groupId The management group ID.
		 * @param {string} filter The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'.
		 * @param {number} top The number of results to get. If null is passed, returns all deployments.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {DeploymentListResult} OK - Returns an array of deployments.
		 */
		Deployments_ListAtManagementGroupScope(groupId: string, filter: string | null | undefined, top: number | null | undefined, api_version: string): Observable<DeploymentListResult> {
			return this.http.get<DeploymentListResult>(this.baseUri + 'providers/Microsoft.Management/managementGroups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/providers/Microsoft.Resources/deployments/&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a deployment.
		 * Get providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}
		 * @param {string} groupId The management group ID.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {DeploymentExtended} OK - Returns information about the deployment, including provisioning status.
		 */
		Deployments_GetAtManagementGroupScope(groupId: string, deploymentName: string, api_version: string): Observable<DeploymentExtended> {
			return this.http.get<DeploymentExtended>(this.baseUri + 'providers/Microsoft.Management/managementGroups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deploys resources at management group scope.
		 * You can provide the template and parameters directly in the request or link to JSON files.
		 * Put providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}
		 * @param {string} groupId The management group ID.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {ScopedDeployment} requestBody Additional parameters supplied to the operation.
		 * @return {DeploymentExtended} OK - Returns information about the deployment, including provisioning status.
		 */
		Deployments_CreateOrUpdateAtManagementGroupScope(groupId: string, deploymentName: string, api_version: string, requestBody: ScopedDeployment): Observable<DeploymentExtended> {
			return this.http.put<DeploymentExtended>(this.baseUri + 'providers/Microsoft.Management/managementGroups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a deployment from the deployment history.
		 * A template deployment that is currently running cannot be deleted. Deleting a template deployment removes the associated deployment operations. This is an asynchronous operation that returns a status of 202 until the template deployment is successfully deleted. The Location response header contains the URI that is used to obtain the status of the process. While the process is running, a call to the URI in the Location header returns a status of 202. When the process finishes, the URI in the Location header returns a status of 204 on success. If the asynchronous request failed, the URI in the Location header returns an error-level status code.
		 * Delete providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}
		 * @param {string} groupId The management group ID.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} 
		 */
		Deployments_DeleteAtManagementGroupScope(groupId: string, deploymentName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'providers/Microsoft.Management/managementGroups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a currently running template deployment.
		 * You can cancel a deployment only if the provisioningState is Accepted or Running. After the deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment stops the currently running template deployment and leaves the resources partially deployed.
		 * Post providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/cancel
		 * @param {string} groupId The management group ID.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} 
		 */
		Deployments_CancelAtManagementGroupScope(groupId: string, deploymentName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'providers/Microsoft.Management/managementGroups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports the template used for specified deployment.
		 * Post providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate
		 * @param {string} groupId The management group ID.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {DeploymentExportResult} OK - Returns the template.
		 */
		Deployments_ExportTemplateAtManagementGroupScope(groupId: string, deploymentName: string, api_version: string): Observable<DeploymentExportResult> {
			return this.http.post<DeploymentExportResult>(this.baseUri + 'providers/Microsoft.Management/managementGroups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/exportTemplate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets all deployments operations for a deployment.
		 * Get providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations
		 * @param {string} groupId The management group ID.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {number} top The number of results to return.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {DeploymentOperationsListResult} OK - Return an array of deployment operations.
		 */
		DeploymentOperations_ListAtManagementGroupScope(groupId: string, deploymentName: string, top: number | null | undefined, api_version: string): Observable<DeploymentOperationsListResult> {
			return this.http.get<DeploymentOperationsListResult>(this.baseUri + 'providers/Microsoft.Management/managementGroups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/operations&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a deployments operation.
		 * Get providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}
		 * @param {string} groupId The management group ID.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} operationId The ID of the operation to get.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {DeploymentOperation} OK - Returns information about the deployment operation.
		 */
		DeploymentOperations_GetAtManagementGroupScope(groupId: string, deploymentName: string, operationId: string, api_version: string): Observable<DeploymentOperation> {
			return this.http.get<DeploymentOperation>(this.baseUri + 'providers/Microsoft.Management/managementGroups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Validates whether the specified template is syntactically correct and will be accepted by Azure Resource Manager..
		 * Post providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/validate
		 * @param {string} groupId The management group ID.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {ScopedDeployment} requestBody Parameters to validate.
		 * @return {DeploymentValidateResult} OK - Returns the validation result.
		 */
		Deployments_ValidateAtManagementGroupScope(groupId: string, deploymentName: string, api_version: string, requestBody: ScopedDeployment): Observable<DeploymentValidateResult> {
			return this.http.post<DeploymentValidateResult>(this.baseUri + 'providers/Microsoft.Management/managementGroups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/validate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Calculate the hash of the given template.
		 * Post providers/Microsoft.Resources/calculateTemplateHash
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} requestBody The template provided to calculate hash.
		 * @return {TemplateHashResult} OK - Returns the hash.
		 */
		Deployments_CalculateTemplateHash(api_version: string, requestBody: string): Observable<TemplateHashResult> {
			return this.http.post<TemplateHashResult>(this.baseUri + 'providers/Microsoft.Resources/calculateTemplateHash?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the deployments at the tenant scope.
		 * Get providers/Microsoft.Resources/deployments/
		 * @param {string} filter The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'.
		 * @param {number} top The number of results to get. If null is passed, returns all deployments.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {DeploymentListResult} OK - Returns an array of deployments.
		 */
		Deployments_ListAtTenantScope(filter: string | null | undefined, top: number | null | undefined, api_version: string): Observable<DeploymentListResult> {
			return this.http.get<DeploymentListResult>(this.baseUri + 'providers/Microsoft.Resources/deployments/?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a deployment.
		 * Get providers/Microsoft.Resources/deployments/{deploymentName}
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {DeploymentExtended} OK - Returns information about the deployment, including provisioning status.
		 */
		Deployments_GetAtTenantScope(deploymentName: string, api_version: string): Observable<DeploymentExtended> {
			return this.http.get<DeploymentExtended>(this.baseUri + 'providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deploys resources at tenant scope.
		 * You can provide the template and parameters directly in the request or link to JSON files.
		 * Put providers/Microsoft.Resources/deployments/{deploymentName}
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {ScopedDeployment} requestBody Additional parameters supplied to the operation.
		 * @return {DeploymentExtended} OK - Returns information about the deployment, including provisioning status.
		 */
		Deployments_CreateOrUpdateAtTenantScope(deploymentName: string, api_version: string, requestBody: ScopedDeployment): Observable<DeploymentExtended> {
			return this.http.put<DeploymentExtended>(this.baseUri + 'providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a deployment from the deployment history.
		 * A template deployment that is currently running cannot be deleted. Deleting a template deployment removes the associated deployment operations. This is an asynchronous operation that returns a status of 202 until the template deployment is successfully deleted. The Location response header contains the URI that is used to obtain the status of the process. While the process is running, a call to the URI in the Location header returns a status of 202. When the process finishes, the URI in the Location header returns a status of 204 on success. If the asynchronous request failed, the URI in the Location header returns an error-level status code.
		 * Delete providers/Microsoft.Resources/deployments/{deploymentName}
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} 
		 */
		Deployments_DeleteAtTenantScope(deploymentName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a currently running template deployment.
		 * You can cancel a deployment only if the provisioningState is Accepted or Running. After the deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment stops the currently running template deployment and leaves the resources partially deployed.
		 * Post providers/Microsoft.Resources/deployments/{deploymentName}/cancel
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} 
		 */
		Deployments_CancelAtTenantScope(deploymentName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports the template used for specified deployment.
		 * Post providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {DeploymentExportResult} OK - Returns the template.
		 */
		Deployments_ExportTemplateAtTenantScope(deploymentName: string, api_version: string): Observable<DeploymentExportResult> {
			return this.http.post<DeploymentExportResult>(this.baseUri + 'providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/exportTemplate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets all deployments operations for a deployment.
		 * Get providers/Microsoft.Resources/deployments/{deploymentName}/operations
		 * @param {string} deploymentName The name of the deployment.
		 * @param {number} top The number of results to return.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {DeploymentOperationsListResult} OK - Return an array of deployment operations.
		 */
		DeploymentOperations_ListAtTenantScope(deploymentName: string, top: number | null | undefined, api_version: string): Observable<DeploymentOperationsListResult> {
			return this.http.get<DeploymentOperationsListResult>(this.baseUri + 'providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/operations&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a deployments operation.
		 * Get providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} operationId The ID of the operation to get.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {DeploymentOperation} OK - Returns information about the deployment operation.
		 */
		DeploymentOperations_GetAtTenantScope(deploymentName: string, operationId: string, api_version: string): Observable<DeploymentOperation> {
			return this.http.get<DeploymentOperation>(this.baseUri + 'providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Validates whether the specified template is syntactically correct and will be accepted by Azure Resource Manager..
		 * Post providers/Microsoft.Resources/deployments/{deploymentName}/validate
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {ScopedDeployment} requestBody Parameters to validate.
		 * @return {DeploymentValidateResult} OK - Returns the validation result.
		 */
		Deployments_ValidateAtTenantScope(deploymentName: string, api_version: string, requestBody: ScopedDeployment): Observable<DeploymentValidateResult> {
			return this.http.post<DeploymentValidateResult>(this.baseUri + 'providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/validate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the available Microsoft.Resources REST API operations.
		 * Get providers/Microsoft.Resources/operations
		 * @param {string} api_version The API version to use for this operation.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Resources/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified resource provider at the tenant level.
		 * Get providers/{resourceProviderNamespace}
		 * @param {string} expand The $expand query parameter. For example, to include property aliases in response, use $expand=resourceTypes/aliases.
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {Provider} OK - Returns information about the resource provider.
		 */
		Providers_GetAtTenantScope(expand: string | null | undefined, resourceProviderNamespace: string, api_version: string): Observable<Provider> {
			return this.http.get<Provider>(this.baseUri + 'providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all resource providers for a subscription.
		 * Get subscriptions/{subscriptionId}/providers
		 * @param {number} top The number of results to return. If null is passed returns all deployments.
		 * @param {string} expand The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ProviderListResult} OK - Returns an array of resource providers.
		 */
		Providers_List(top: number | null | undefined, expand: string | null | undefined, api_version: string, subscriptionId: string): Observable<ProviderListResult> {
			return this.http.get<ProviderListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers?top=' + top + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all the deployments for a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/
		 * @param {string} filter The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'.
		 * @param {number} top The number of results to get. If null is passed, returns all deployments.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {DeploymentListResult} OK - Returns an array of deployments.
		 */
		Deployments_ListAtSubscriptionScope(filter: string | null | undefined, top: number | null | undefined, api_version: string, subscriptionId: string): Observable<DeploymentListResult> {
			return this.http.get<DeploymentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Resources/deployments/?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a deployment.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {DeploymentExtended} OK - Returns information about the deployment, including provisioning status.
		 */
		Deployments_GetAtSubscriptionScope(deploymentName: string, api_version: string, subscriptionId: string): Observable<DeploymentExtended> {
			return this.http.get<DeploymentExtended>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deploys resources at subscription scope.
		 * You can provide the template and parameters directly in the request or link to JSON files.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {Deployment} requestBody Additional parameters supplied to the operation.
		 * @return {DeploymentExtended} OK - Returns information about the deployment, including provisioning status.
		 */
		Deployments_CreateOrUpdateAtSubscriptionScope(deploymentName: string, api_version: string, subscriptionId: string, requestBody: Deployment): Observable<DeploymentExtended> {
			return this.http.put<DeploymentExtended>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a deployment from the deployment history.
		 * A template deployment that is currently running cannot be deleted. Deleting a template deployment removes the associated deployment operations. This is an asynchronous operation that returns a status of 202 until the template deployment is successfully deleted. The Location response header contains the URI that is used to obtain the status of the process. While the process is running, a call to the URI in the Location header returns a status of 202. When the process finishes, the URI in the Location header returns a status of 204 on success. If the asynchronous request failed, the URI in the Location header returns an error-level status code.
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} 
		 */
		Deployments_DeleteAtSubscriptionScope(deploymentName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a currently running template deployment.
		 * You can cancel a deployment only if the provisioningState is Accepted or Running. After the deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment stops the currently running template deployment and leaves the resources partially deployed.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/cancel
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} 
		 */
		Deployments_CancelAtSubscriptionScope(deploymentName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports the template used for specified deployment.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {DeploymentExportResult} OK - Returns the template.
		 */
		Deployments_ExportTemplateAtSubscriptionScope(deploymentName: string, api_version: string, subscriptionId: string): Observable<DeploymentExportResult> {
			return this.http.post<DeploymentExportResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/exportTemplate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets all deployments operations for a deployment.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations
		 * @param {string} deploymentName The name of the deployment.
		 * @param {number} top The number of results to return.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {DeploymentOperationsListResult} OK - Return an array of deployment operations.
		 */
		DeploymentOperations_ListAtSubscriptionScope(deploymentName: string, top: number | null | undefined, api_version: string, subscriptionId: string): Observable<DeploymentOperationsListResult> {
			return this.http.get<DeploymentOperationsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/operations&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a deployments operation.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} operationId The ID of the operation to get.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {DeploymentOperation} OK - Returns information about the deployment operation.
		 */
		DeploymentOperations_GetAtSubscriptionScope(deploymentName: string, operationId: string, api_version: string, subscriptionId: string): Observable<DeploymentOperation> {
			return this.http.get<DeploymentOperation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Validates whether the specified template is syntactically correct and will be accepted by Azure Resource Manager..
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/validate
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {Deployment} requestBody Parameters to validate.
		 * @return {DeploymentValidateResult} OK - Returns the validation result.
		 */
		Deployments_ValidateAtSubscriptionScope(deploymentName: string, api_version: string, subscriptionId: string, requestBody: Deployment): Observable<DeploymentValidateResult> {
			return this.http.post<DeploymentValidateResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/validate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns changes that will be made by the deployment if executed at the scope of the subscription.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/whatIf
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {DeploymentWhatIf} requestBody Parameters to What If.
		 * @return {WhatIfOperationResult} OK - Returns What-If operation status
		 */
		Deployments_WhatIfAtSubscriptionScope(deploymentName: string, api_version: string, subscriptionId: string, requestBody: DeploymentWhatIf): Observable<WhatIfOperationResult> {
			return this.http.post<WhatIfOperationResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/whatIf&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the specified resource provider.
		 * Get subscriptions/{subscriptionId}/providers/{resourceProviderNamespace}
		 * @param {string} expand The $expand query parameter. For example, to include property aliases in response, use $expand=resourceTypes/aliases.
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {Provider} OK - Returns information about the resource provider.
		 */
		Providers_Get(expand: string | null | undefined, resourceProviderNamespace: string, api_version: string, subscriptionId: string): Observable<Provider> {
			return this.http.get<Provider>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '?expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Registers a subscription with a resource provider.
		 * Post subscriptions/{subscriptionId}/providers/{resourceProviderNamespace}/register
		 * @param {string} resourceProviderNamespace The namespace of the resource provider to register.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {Provider} OK - Returns information about the resource provider.
		 */
		Providers_Register(resourceProviderNamespace: string, api_version: string, subscriptionId: string): Observable<Provider> {
			return this.http.post<Provider>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/register&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Unregisters a subscription from a resource provider.
		 * Post subscriptions/{subscriptionId}/providers/{resourceProviderNamespace}/unregister
		 * @param {string} resourceProviderNamespace The namespace of the resource provider to unregister.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {Provider} OK - Returns information about the resource provider.
		 */
		Providers_Unregister(resourceProviderNamespace: string, api_version: string, subscriptionId: string): Observable<Provider> {
			return this.http.post<Provider>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/unregister&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get all the resources for a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/resources
		 * @param {string} resourceGroupName The resource group with the resources to get.
		 * @param {string} filter The filter to apply on the operation.<br><br>The properties you can use for eq (equals) or ne (not equals) are: location, resourceType, name, resourceGroup, identity, identity/principalId, plan, plan/publisher, plan/product, plan/name, plan/version, and plan/promotionCode.<br><br>For example, to filter by a resource type, use: $filter=resourceType eq 'Microsoft.Network/virtualNetworks'<br><br>You can use substringof(value, property) in the filter. The properties you can use for substring are: name and resourceGroup.<br><br>For example, to get all resources with 'demo' anywhere in the name, use: $filter=substringof('demo', name)<br><br>You can link more than one substringof together by adding and/or operators.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'. When you filter by a tag name and value, the tags for each resource are not returned in the results.<br><br>You can use some properties together when filtering. The combinations you can use are: substringof and/or resourceType, plan and plan/publisher and plan/name, identity and identity/principalId.
		 * @param {string} expand The $expand query parameter. You can expand createdTime and changedTime. For example, to expand both properties, use $expand=changedTime,createdTime
		 * @param {number} top The number of results to return. If null is passed, returns all resources.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ResourceListResult} OK - Returns an array of resources
		 */
		Resources_ListByResourceGroup(resourceGroupName: string, filter: string | null | undefined, expand: string | null | undefined, top: number | null | undefined, api_version: string, subscriptionId: string): Observable<ResourceListResult> {
			return this.http.get<ResourceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/resources&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Moves resources from one resource group to another resource group.
		 * The resources to move must be in the same source resource group. The target resource group may be in a different subscription. When moving resources, both the source group and the target group are locked for the duration of the operation. Write and delete operations are blocked on the groups until the move completes.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{sourceResourceGroupName}/moveResources
		 * @param {string} sourceResourceGroupName The name of the resource group containing the resources to move.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ResourcesMoveInfo} requestBody Parameters for moving resources.
		 * @return {void} 
		 */
		Resources_MoveResources(sourceResourceGroupName: string, api_version: string, subscriptionId: string, requestBody: ResourcesMoveInfo): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (sourceResourceGroupName == null ? '' : encodeURIComponent(sourceResourceGroupName)) + '/moveResources&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Validates whether resources can be moved from one resource group to another resource group.
		 * This operation checks whether the specified resources can be moved to the target. The resources to move must be in the same source resource group. The target resource group may be in a different subscription. If validation succeeds, it returns HTTP response code 204 (no content). If validation fails, it returns HTTP response code 409 (Conflict) with an error message. Retrieve the URL in the Location header value to check the result of the long-running operation.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{sourceResourceGroupName}/validateMoveResources
		 * @param {string} sourceResourceGroupName The name of the resource group containing the resources to validate for move.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ResourcesMoveInfo} requestBody Parameters for moving resources.
		 * @return {void} 
		 */
		Resources_ValidateMoveResources(sourceResourceGroupName: string, api_version: string, subscriptionId: string, requestBody: ResourcesMoveInfo): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (sourceResourceGroupName == null ? '' : encodeURIComponent(sourceResourceGroupName)) + '/validateMoveResources&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the resource groups for a subscription.
		 * Get subscriptions/{subscriptionId}/resourcegroups
		 * @param {string} filter The filter to apply on the operation.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'
		 * @param {number} top The number of results to return. If null is passed, returns all resource groups.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ResourceGroupListResult} OK - Returns an array of resource groups.
		 */
		ResourceGroups_List(filter: string | null | undefined, top: number | null | undefined, api_version: string, subscriptionId: string): Observable<ResourceGroupListResult> {
			return this.http.get<ResourceGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a resource group.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}
		 * @param {string} resourceGroupName The name of the resource group to get. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ResourceGroup} OK - Returns information about the resource group.
		 */
		ResourceGroups_Get(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<ResourceGroup> {
			return this.http.get<ResourceGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a resource group.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}
		 * @param {string} resourceGroupName The name of the resource group to create or update. Can include alphanumeric, underscore, parentheses, hyphen, period (except at end), and Unicode characters that match the allowed characters.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ResourceGroup} requestBody Parameters supplied to the create or update a resource group.
		 * @return {ResourceGroup} OK - Returns information about the new resource group.
		 */
		ResourceGroups_CreateOrUpdate(resourceGroupName: string, api_version: string, subscriptionId: string, requestBody: ResourceGroup): Observable<ResourceGroup> {
			return this.http.put<ResourceGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resource group.
		 * When you delete a resource group, all of its resources are also deleted. Deleting a resource group deletes all of its template deployments and currently stored operations.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}
		 * @param {string} resourceGroupName The name of the resource group to delete. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} OK
		 */
		ResourceGroups_Delete(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a resource group.
		 * Resource groups can be updated through a simple PATCH operation to a group address. The format of the request is the same as that for creating a resource group. If a field is unspecified, the current value is retained.
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}
		 * @param {string} resourceGroupName The name of the resource group to update. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ResourceGroupPatchable} requestBody Parameters supplied to update a resource group.
		 * @return {ResourceGroup} OK - Returns information about the resource group.
		 */
		ResourceGroups_Update(resourceGroupName: string, api_version: string, subscriptionId: string, requestBody: ResourceGroupPatchable): Observable<ResourceGroup> {
			return this.http.patch<ResourceGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all deployments operations for a deployment.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/deployments/{deploymentName}/operations
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {number} top The number of results to return.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {DeploymentOperationsListResult} OK - Return an array of deployment operations.
		 */
		DeploymentOperations_List(resourceGroupName: string, deploymentName: string, top: number | null | undefined, api_version: string, subscriptionId: string): Observable<DeploymentOperationsListResult> {
			return this.http.get<DeploymentOperationsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/operations&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a deployments operation.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/deployments/{deploymentName}/operations/{operationId}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} operationId The ID of the operation to get.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {DeploymentOperation} OK - Returns information about the deployment operation.
		 */
		DeploymentOperations_Get(resourceGroupName: string, deploymentName: string, operationId: string, api_version: string, subscriptionId: string): Observable<DeploymentOperation> {
			return this.http.get<DeploymentOperation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Captures the specified resource group as a template.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/exportTemplate
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {ExportTemplateRequest} requestBody Parameters for exporting the template.
		 * @return {ResourceGroupExportResult} OK - Returns the result of the export.
		 */
		ResourceGroups_ExportTemplate(subscriptionId: string, resourceGroupName: string, api_version: string, requestBody: ExportTemplateRequest): Observable<ResourceGroupExportResult> {
			return this.http.post<ResourceGroupExportResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/exportTemplate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the deployments for a resource group.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/
		 * @param {string} resourceGroupName The name of the resource group with the deployments to get. The name is case insensitive.
		 * @param {string} filter The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'.
		 * @param {number} top The number of results to get. If null is passed, returns all deployments.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {DeploymentListResult} OK - Returns an array of deployments.
		 */
		Deployments_ListByResourceGroup(resourceGroupName: string, filter: string | null | undefined, top: number | null | undefined, api_version: string, subscriptionId: string): Observable<DeploymentListResult> {
			return this.http.get<DeploymentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Resources/deployments/&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a deployment.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {DeploymentExtended} OK - Returns information about the deployment, including provisioning status.
		 */
		Deployments_Get(resourceGroupName: string, deploymentName: string, api_version: string, subscriptionId: string): Observable<DeploymentExtended> {
			return this.http.get<DeploymentExtended>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deploys resources to a resource group.
		 * You can provide the template and parameters directly in the request or link to JSON files.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}
		 * @param {string} resourceGroupName The name of the resource group to deploy the resources to. The name is case insensitive. The resource group must already exist.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {Deployment} requestBody Additional parameters supplied to the operation.
		 * @return {DeploymentExtended} OK - Returns information about the deployment, including provisioning status.
		 */
		Deployments_CreateOrUpdate(resourceGroupName: string, deploymentName: string, api_version: string, subscriptionId: string, requestBody: Deployment): Observable<DeploymentExtended> {
			return this.http.put<DeploymentExtended>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a deployment from the deployment history.
		 * A template deployment that is currently running cannot be deleted. Deleting a template deployment removes the associated deployment operations. Deleting a template deployment does not affect the state of the resource group. This is an asynchronous operation that returns a status of 202 until the template deployment is successfully deleted. The Location response header contains the URI that is used to obtain the status of the process. While the process is running, a call to the URI in the Location header returns a status of 202. When the process finishes, the URI in the Location header returns a status of 204 on success. If the asynchronous request failed, the URI in the Location header returns an error-level status code.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}
		 * @param {string} resourceGroupName The name of the resource group with the deployment to delete. The name is case insensitive.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} 
		 */
		Deployments_Delete(resourceGroupName: string, deploymentName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a currently running template deployment.
		 * You can cancel a deployment only if the provisioningState is Accepted or Running. After the deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment stops the currently running template deployment and leaves the resource group partially deployed.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/cancel
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} 
		 */
		Deployments_Cancel(resourceGroupName: string, deploymentName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports the template used for specified deployment.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {DeploymentExportResult} OK - Returns the template.
		 */
		Deployments_ExportTemplate(resourceGroupName: string, deploymentName: string, api_version: string, subscriptionId: string): Observable<DeploymentExportResult> {
			return this.http.post<DeploymentExportResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/exportTemplate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Validates whether the specified template is syntactically correct and will be accepted by Azure Resource Manager..
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/validate
		 * @param {string} resourceGroupName The name of the resource group the template will be deployed to. The name is case insensitive.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {Deployment} requestBody Parameters to validate.
		 * @return {DeploymentValidateResult} OK - Returns the validation result.
		 */
		Deployments_Validate(resourceGroupName: string, deploymentName: string, api_version: string, subscriptionId: string, requestBody: Deployment): Observable<DeploymentValidateResult> {
			return this.http.post<DeploymentValidateResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/validate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns changes that will be made by the deployment if executed at the scope of the resource group.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/whatIf
		 * @param {string} resourceGroupName The name of the resource group the template will be deployed to. The name is case insensitive.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {DeploymentWhatIf} requestBody Parameters to validate.
		 * @return {WhatIfOperationResult} OK - Returns What-If operation status
		 */
		Deployments_WhatIf(resourceGroupName: string, deploymentName: string, api_version: string, subscriptionId: string, requestBody: DeploymentWhatIf): Observable<WhatIfOperationResult> {
			return this.http.post<WhatIfOperationResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/whatIf&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a resource.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}
		 * @param {string} resourceGroupName The name of the resource group containing the resource to get. The name is case insensitive.
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} parentResourcePath The parent resource identity.
		 * @param {string} resourceType The resource type of the resource.
		 * @param {string} resourceName The name of the resource to get.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {GenericResource} OK - Returns information about the resource.
		 */
		Resources_Get(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, api_version: string, subscriptionId: string): Observable<GenericResource> {
			return this.http.get<GenericResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/' + (parentResourcePath == null ? '' : encodeURIComponent(parentResourcePath)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a resource.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}
		 * @param {string} resourceGroupName The name of the resource group for the resource. The name is case insensitive.
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} parentResourcePath The parent resource identity.
		 * @param {string} resourceType The resource type of the resource to create.
		 * @param {string} resourceName The name of the resource to create.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {GenericResource} requestBody Parameters for creating or updating the resource.
		 * @return {GenericResource} OK - Returns information about the resource.
		 */
		Resources_CreateOrUpdate(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, api_version: string, subscriptionId: string, requestBody: GenericResource): Observable<GenericResource> {
			return this.http.put<GenericResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/' + (parentResourcePath == null ? '' : encodeURIComponent(parentResourcePath)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resource.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource to delete. The name is case insensitive.
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} parentResourcePath The parent resource identity.
		 * @param {string} resourceType The resource type.
		 * @param {string} resourceName The name of the resource to delete.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} OK
		 */
		Resources_Delete(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/' + (parentResourcePath == null ? '' : encodeURIComponent(parentResourcePath)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a resource.
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}
		 * @param {string} resourceGroupName The name of the resource group for the resource. The name is case insensitive.
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} parentResourcePath The parent resource identity.
		 * @param {string} resourceType The resource type of the resource to update.
		 * @param {string} resourceName The name of the resource to update.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {GenericResource} requestBody Parameters for updating the resource.
		 * @return {GenericResource} OK - Returns information about the resource.
		 */
		Resources_Update(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, api_version: string, subscriptionId: string, requestBody: GenericResource): Observable<GenericResource> {
			return this.http.patch<GenericResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/' + (parentResourcePath == null ? '' : encodeURIComponent(parentResourcePath)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the resources in a subscription.
		 * Get subscriptions/{subscriptionId}/resources
		 * @param {string} filter The filter to apply on the operation.<br><br>The properties you can use for eq (equals) or ne (not equals) are: location, resourceType, name, resourceGroup, identity, identity/principalId, plan, plan/publisher, plan/product, plan/name, plan/version, and plan/promotionCode.<br><br>For example, to filter by a resource type, use: $filter=resourceType eq 'Microsoft.Network/virtualNetworks'<br><br>You can use substringof(value, property) in the filter. The properties you can use for substring are: name and resourceGroup.<br><br>For example, to get all resources with 'demo' anywhere in the name, use: $filter=substringof('demo', name)<br><br>You can link more than one substringof together by adding and/or operators.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'. When you filter by a tag name and value, the tags for each resource are not returned in the results.<br><br>You can use some properties together when filtering. The combinations you can use are: substringof and/or resourceType, plan and plan/publisher and plan/name, identity and identity/principalId.
		 * @param {string} expand The $expand query parameter. You can expand createdTime and changedTime. For example, to expand both properties, use $expand=changedTime,createdTime
		 * @param {number} top The number of results to return. If null is passed, returns all resource groups.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ResourceListResult} OK - Returns an array of resources.
		 */
		Resources_List(filter: string | null | undefined, expand: string | null | undefined, top: number | null | undefined, api_version: string, subscriptionId: string): Observable<ResourceListResult> {
			return this.http.get<ResourceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resources?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a summary of tag usage under the subscription.
		 * This operation performs a union of predefined tags, resource tags, resource group tags and subscription tags, and returns a summary of usage for each tag name and value under the given subscription. In case of a large number of tags, this operation may return a previously cached result.
		 * Get subscriptions/{subscriptionId}/tagNames
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {TagsListResult} OK - Returns an array of tag names and values.
		 */
		Tags_List(api_version: string, subscriptionId: string): Observable<TagsListResult> {
			return this.http.get<TagsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tagNames?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a predefined tag name.
		 * This operation allows adding a name to the list of predefined tag names for the given subscription. A tag name can have a maximum of 512 characters and is case-insensitive. Tag names cannot have the following prefixes which are reserved for Azure use: 'microsoft', 'azure', 'windows'.
		 * Put subscriptions/{subscriptionId}/tagNames/{tagName}
		 * @param {string} tagName The name of the tag to create.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {TagDetails} Predefined tag name already exists. Returns information about the predefined tag name.
		 */
		Tags_CreateOrUpdate(tagName: string, api_version: string, subscriptionId: string): Observable<TagDetails> {
			return this.http.put<TagDetails>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tagNames/' + (tagName == null ? '' : encodeURIComponent(tagName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Deletes a predefined tag name.
		 * This operation allows deleting a name from the list of predefined tag names for the given subscription. The name being deleted must not be in use as a tag name for any resource. All predefined values for the given name must have already been deleted.
		 * Delete subscriptions/{subscriptionId}/tagNames/{tagName}
		 * @param {string} tagName The name of the tag.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} Predefined tag name successfully deleted.
		 */
		Tags_Delete(tagName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tagNames/' + (tagName == null ? '' : encodeURIComponent(tagName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a predefined value for a predefined tag name.
		 * This operation allows adding a value to the list of predefined values for an existing predefined tag name. A tag value can have a maximum of 256 characters.
		 * Put subscriptions/{subscriptionId}/tagNames/{tagName}/tagValues/{tagValue}
		 * @param {string} tagName The name of the tag.
		 * @param {string} tagValue The value of the tag to create.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {TagValue} Predefined tag value already exists. Returns information about the predefined tag value.
		 */
		Tags_CreateOrUpdateValue(tagName: string, tagValue: string, api_version: string, subscriptionId: string): Observable<TagValue> {
			return this.http.put<TagValue>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tagNames/' + (tagName == null ? '' : encodeURIComponent(tagName)) + '/tagValues/' + (tagValue == null ? '' : encodeURIComponent(tagValue)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Deletes a predefined tag value for a predefined tag name.
		 * This operation allows deleting a value from the list of predefined values for an existing predefined tag name. The value being deleted must not be in use as a tag value for the given tag name for any resource.
		 * Delete subscriptions/{subscriptionId}/tagNames/{tagName}/tagValues/{tagValue}
		 * @param {string} tagName The name of the tag.
		 * @param {string} tagValue The value of the tag to delete.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} Predefined tag value successfully deleted.
		 */
		Tags_DeleteValue(tagName: string, tagValue: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tagNames/' + (tagName == null ? '' : encodeURIComponent(tagName)) + '/tagValues/' + (tagValue == null ? '' : encodeURIComponent(tagValue)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a resource by ID.
		 * Get {resourceId}
		 * @param {string} resourceId The fully qualified ID of the resource, including the resource name and resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
		 * @param {string} api_version The API version to use for the operation.
		 * @return {GenericResource} OK - Returns information about the resource.
		 */
		Resources_GetById(resourceId: string, api_version: string): Observable<GenericResource> {
			return this.http.get<GenericResource>(this.baseUri + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Create a resource by ID.
		 * Put {resourceId}
		 * @param {string} resourceId The fully qualified ID of the resource, including the resource name and resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
		 * @param {string} api_version The API version to use for the operation.
		 * @param {GenericResource} requestBody Create or update resource parameters.
		 * @return {GenericResource} OK - Returns information about the resource.
		 */
		Resources_CreateOrUpdateById(resourceId: string, api_version: string, requestBody: GenericResource): Observable<GenericResource> {
			return this.http.put<GenericResource>(this.baseUri + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resource by ID.
		 * Delete {resourceId}
		 * @param {string} resourceId The fully qualified ID of the resource, including the resource name and resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
		 * @param {string} api_version The API version to use for the operation.
		 * @return {void} OK
		 */
		Resources_DeleteById(resourceId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a resource by ID.
		 * Patch {resourceId}
		 * @param {string} resourceId The fully qualified ID of the resource, including the resource name and resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
		 * @param {string} api_version The API version to use for the operation.
		 * @param {GenericResource} requestBody Update resource parameters.
		 * @return {GenericResource} OK - Returns information about the resource.
		 */
		Resources_UpdateById(resourceId: string, api_version: string, requestBody: GenericResource): Observable<GenericResource> {
			return this.http.patch<GenericResource>(this.baseUri + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the deployments at the given scope.
		 * Get {scope}/providers/Microsoft.Resources/deployments/
		 * @param {string} scope The resource scope.
		 * @param {string} filter The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'.
		 * @param {number} top The number of results to get. If null is passed, returns all deployments.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {DeploymentListResult} OK - Returns an array of deployments.
		 */
		Deployments_ListAtScope(scope: string, filter: string | null | undefined, top: number | null | undefined, api_version: string): Observable<DeploymentListResult> {
			return this.http.get<DeploymentListResult>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Resources/deployments/&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Gets a deployment.
		 * Get {scope}/providers/Microsoft.Resources/deployments/{deploymentName}
		 * @param {string} scope The resource scope.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {DeploymentExtended} OK - Returns information about the deployment, including provisioning status.
		 */
		Deployments_GetAtScope(scope: string, deploymentName: string, api_version: string): Observable<DeploymentExtended> {
			return this.http.get<DeploymentExtended>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Deploys resources at a given scope.
		 * You can provide the template and parameters directly in the request or link to JSON files.
		 * Put {scope}/providers/Microsoft.Resources/deployments/{deploymentName}
		 * @param {string} scope The resource scope.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {Deployment} requestBody Additional parameters supplied to the operation.
		 * @return {DeploymentExtended} OK - Returns information about the deployment, including provisioning status.
		 */
		Deployments_CreateOrUpdateAtScope(scope: string, deploymentName: string, api_version: string, requestBody: Deployment): Observable<DeploymentExtended> {
			return this.http.put<DeploymentExtended>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a deployment from the deployment history.
		 * A template deployment that is currently running cannot be deleted. Deleting a template deployment removes the associated deployment operations. This is an asynchronous operation that returns a status of 202 until the template deployment is successfully deleted. The Location response header contains the URI that is used to obtain the status of the process. While the process is running, a call to the URI in the Location header returns a status of 202. When the process finishes, the URI in the Location header returns a status of 204 on success. If the asynchronous request failed, the URI in the Location header returns an error-level status code.
		 * Delete {scope}/providers/Microsoft.Resources/deployments/{deploymentName}
		 * @param {string} scope The resource scope.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} 
		 */
		Deployments_DeleteAtScope(scope: string, deploymentName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a currently running template deployment.
		 * You can cancel a deployment only if the provisioningState is Accepted or Running. After the deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment stops the currently running template deployment and leaves the resources partially deployed.
		 * Post {scope}/providers/Microsoft.Resources/deployments/{deploymentName}/cancel
		 * @param {string} scope The resource scope.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} 
		 */
		Deployments_CancelAtScope(scope: string, deploymentName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports the template used for specified deployment.
		 * Post {scope}/providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate
		 * @param {string} scope The resource scope.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {DeploymentExportResult} OK - Returns the template.
		 */
		Deployments_ExportTemplateAtScope(scope: string, deploymentName: string, api_version: string): Observable<DeploymentExportResult> {
			return this.http.post<DeploymentExportResult>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/exportTemplate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', null, {});
		}

		/**
		 * Gets all deployments operations for a deployment.
		 * Get {scope}/providers/Microsoft.Resources/deployments/{deploymentName}/operations
		 * @param {string} scope The resource scope.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {number} top The number of results to return.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {DeploymentOperationsListResult} OK - Return an array of deployment operations.
		 */
		DeploymentOperations_ListAtScope(scope: string, deploymentName: string, top: number | null | undefined, api_version: string): Observable<DeploymentOperationsListResult> {
			return this.http.get<DeploymentOperationsListResult>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/operations&top=' + top + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Gets a deployments operation.
		 * Get {scope}/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}
		 * @param {string} scope The resource scope.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} operationId The ID of the operation to get.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {DeploymentOperation} OK - Returns information about the deployment operation.
		 */
		DeploymentOperations_GetAtScope(scope: string, deploymentName: string, operationId: string, api_version: string): Observable<DeploymentOperation> {
			return this.http.get<DeploymentOperation>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/operations/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Validates whether the specified template is syntactically correct and will be accepted by Azure Resource Manager..
		 * Post {scope}/providers/Microsoft.Resources/deployments/{deploymentName}/validate
		 * @param {string} scope The resource scope.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {Deployment} requestBody Parameters to validate.
		 * @return {DeploymentValidateResult} OK - Returns the validation result.
		 */
		Deployments_ValidateAtScope(scope: string, deploymentName: string, api_version: string, requestBody: Deployment): Observable<DeploymentValidateResult> {
			return this.http.post<DeploymentValidateResult>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/validate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the entire set of tags on a resource or subscription.
		 * Get {scope}/providers/Microsoft.Resources/tags/default
		 * @param {string} scope The resource scope.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {TagsResource} Returns tags from the specified object.
		 */
		Tags_GetAtScope(scope: string, api_version: string): Observable<TagsResource> {
			return this.http.get<TagsResource>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Resources/tags/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Creates or updates the entire set of tags on a resource or subscription.
		 * This operation allows adding or replacing the entire set of tags on the specified resource or subscription. The specified entity can have a maximum of 50 tags.
		 * Put {scope}/providers/Microsoft.Resources/tags/default
		 * @param {string} scope The resource scope.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {TagsResource} Tags updated successfully. Returns tags from the specified object.
		 */
		Tags_CreateOrUpdateAtScope(scope: string, api_version: string, requestBody: TagsResource): Observable<TagsResource> {
			return this.http.put<TagsResource>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Resources/tags/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the entire set of tags on a resource or subscription.
		 * Delete {scope}/providers/Microsoft.Resources/tags/default
		 * @param {string} scope The resource scope.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} Tags successfully deleted.
		 */
		Tags_DeleteAtScope(scope: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Resources/tags/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Selectively updates the set of tags on a resource or subscription.
		 * This operation allows replacing, merging or selectively deleting tags on the specified resource or subscription. The specified entity can have a maximum of 50 tags at the end of the operation. The 'replace' option replaces the entire set of existing tags with a new set. The 'merge' option allows adding tags with new names and updating the values of tags with existing names. The 'delete' option allows selectively deleting tags based on given names or name/value pairs.
		 * Patch {scope}/providers/Microsoft.Resources/tags/default
		 * @param {string} scope The resource scope.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {TagsResource} Tags updated successfully. Returns tags from the specified object.
		 */
		Tags_UpdateAtScope(scope: string, api_version: string, requestBody: TagsPatchResource): Observable<TagsResource> {
			return this.http.patch<TagsResource>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Resources/tags/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

