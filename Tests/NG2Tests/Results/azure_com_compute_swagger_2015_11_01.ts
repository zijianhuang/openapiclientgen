import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Deployment dependency information. */
	export interface BasicDependency {

		/** Gets or sets the ID of the dependency. */
		id?: string | null;

		/** Gets or sets the dependency resource name. */
		resourceName?: string | null;

		/** Gets or sets the dependency resource type. */
		resourceType?: string | null;
	}

	/** Deployment dependency information. */
	export interface BasicDependencyFormProperties {

		/** Gets or sets the ID of the dependency. */
		id: FormControl<string | null | undefined>,

		/** Gets or sets the dependency resource name. */
		resourceName: FormControl<string | null | undefined>,

		/** Gets or sets the dependency resource type. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateBasicDependencyFormGroup() {
		return new FormGroup<BasicDependencyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deployment dependency information. */
	export interface Dependency {

		/** Gets the list of dependencies. */
		dependsOn?: Array<BasicDependency>;

		/** Gets or sets the ID of the dependency. */
		id?: string | null;

		/** Gets or sets the dependency resource name. */
		resourceName?: string | null;

		/** Gets or sets the dependency resource type. */
		resourceType?: string | null;
	}

	/** Deployment dependency information. */
	export interface DependencyFormProperties {

		/** Gets or sets the ID of the dependency. */
		id: FormControl<string | null | undefined>,

		/** Gets or sets the dependency resource name. */
		resourceName: FormControl<string | null | undefined>,

		/** Gets or sets the dependency resource type. */
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

		/** Deployment properties. */
		properties?: DeploymentProperties;
	}

	/** Deployment operation parameters. */
	export interface DeploymentFormProperties {
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
		});

	}


	/** Deployment information. */
	export interface DeploymentExtended {

		/** Gets or sets the ID of the deployment. */
		id?: string | null;

		/**
		 * Gets or sets the name of the deployment.
		 * Required
		 */
		name: string;

		/** Deployment properties with additional details. */
		properties?: DeploymentPropertiesExtended;
	}

	/** Deployment information. */
	export interface DeploymentExtendedFormProperties {

		/** Gets or sets the ID of the deployment. */
		id: FormControl<string | null | undefined>,

		/**
		 * Gets or sets the name of the deployment.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentExtendedFormGroup() {
		return new FormGroup<DeploymentExtendedFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeploymentParameters {
		adminPassword?: DeploymentParametersAdminPassword;
		adminUsername?: DeploymentParametersAdminUsername;
		dnsLabelPrefix?: DeploymentParametersDnsLabelPrefix;

		/** Deployment operation parameters. */
		osVersion?: DeploymentParametersOsVersion;
	}
	export interface DeploymentParametersFormProperties {
	}
	export function CreateDeploymentParametersFormGroup() {
		return new FormGroup<DeploymentParametersFormProperties>({
		});

	}

	export interface DeploymentParametersAdminPassword {

		/**
		 * Password for the Virtual Machine.
		 * Required
		 */
		value: string;
	}
	export interface DeploymentParametersAdminPasswordFormProperties {

		/**
		 * Password for the Virtual Machine.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentParametersAdminPasswordFormGroup() {
		return new FormGroup<DeploymentParametersAdminPasswordFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeploymentParametersAdminUsername {

		/**
		 * Username for the Virtual Machine.
		 * Required
		 */
		value: string;
	}
	export interface DeploymentParametersAdminUsernameFormProperties {

		/**
		 * Username for the Virtual Machine.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentParametersAdminUsernameFormGroup() {
		return new FormGroup<DeploymentParametersAdminUsernameFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeploymentParametersDnsLabelPrefix {

		/**
		 * Unique DNS Name for the Public IP used to access the Virtual Machine.
		 * Required
		 */
		value: string;
	}
	export interface DeploymentParametersDnsLabelPrefixFormProperties {

		/**
		 * Unique DNS Name for the Public IP used to access the Virtual Machine.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentParametersDnsLabelPrefixFormGroup() {
		return new FormGroup<DeploymentParametersDnsLabelPrefixFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeploymentParametersOsVersion {

		/**
		 * The OS version for the VM. This will pick a fully patched image of this given OS version.
		 * Required
		 */
		value: DeploymentParametersOsVersionValue;
	}
	export interface DeploymentParametersOsVersionFormProperties {

		/**
		 * The OS version for the VM. This will pick a fully patched image of this given OS version.
		 * Required
		 */
		value: FormControl<DeploymentParametersOsVersionValue | null | undefined>,
	}
	export function CreateDeploymentParametersOsVersionFormGroup() {
		return new FormGroup<DeploymentParametersOsVersionFormProperties>({
			value: new FormControl<DeploymentParametersOsVersionValue | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeploymentParametersOsVersionValue { '12.04.5-LTS' = '12.04.5-LTS', '14.04.2-LTS' = '14.04.2-LTS', _15_10 = '15.10' }


	/** Deployment properties. */
	export interface DeploymentProperties {

		/**
		 * Gets or sets the deployment mode.
		 * Required
		 */
		mode: DeploymentPropertiesMode;
		parameters?: DeploymentParameters;

		/**
		 * Entity representing the reference to the template.
		 * Required
		 */
		templateLink: TemplateLink;
	}

	/** Deployment properties. */
	export interface DeploymentPropertiesFormProperties {

		/**
		 * Gets or sets the deployment mode.
		 * Required
		 */
		mode: FormControl<DeploymentPropertiesMode | null | undefined>,
	}
	export function CreateDeploymentPropertiesFormGroup() {
		return new FormGroup<DeploymentPropertiesFormProperties>({
			mode: new FormControl<DeploymentPropertiesMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeploymentPropertiesMode { Incremental = 'Incremental' }


	/** Deployment properties with additional details. */
	export interface DeploymentPropertiesExtended {

		/** Gets or sets the correlation ID of the deployment. */
		correlationId?: string | null;

		/** Gets the list of deployment dependencies. */
		dependencies?: Array<Dependency>;

		/** Gets or sets the deployment mode. */
		mode?: DeploymentPropertiesExtendedMode | null;

		/** Gets or sets key/value pairs that represent deployment output. */
		outputs?: string | null;

		/** Deployment parameters. Use only one of Parameters or ParametersLink. */
		parameters?: string | null;

		/** Entity representing the reference to the deployment parameters. */
		parametersLink?: ParametersLink;

		/** Gets the list of resource providers needed for the deployment. */
		providers?: Array<Provider>;

		/** Gets or sets the state of the provisioning. */
		provisioningState?: string | null;

		/** Gets or sets the template content. Use only one of Template or TemplateLink. */
		template?: string | null;

		/** Entity representing the reference to the template. */
		templateLink?: TemplateLink;

		/** Gets or sets the timestamp of the template deployment. */
		timestamp?: Date | null;
	}

	/** Deployment properties with additional details. */
	export interface DeploymentPropertiesExtendedFormProperties {

		/** Gets or sets the correlation ID of the deployment. */
		correlationId: FormControl<string | null | undefined>,

		/** Gets or sets the deployment mode. */
		mode: FormControl<DeploymentPropertiesExtendedMode | null | undefined>,

		/** Gets or sets key/value pairs that represent deployment output. */
		outputs: FormControl<string | null | undefined>,

		/** Deployment parameters. Use only one of Parameters or ParametersLink. */
		parameters: FormControl<string | null | undefined>,

		/** Gets or sets the state of the provisioning. */
		provisioningState: FormControl<string | null | undefined>,

		/** Gets or sets the template content. Use only one of Template or TemplateLink. */
		template: FormControl<string | null | undefined>,

		/** Gets or sets the timestamp of the template deployment. */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDeploymentPropertiesExtendedFormGroup() {
		return new FormGroup<DeploymentPropertiesExtendedFormProperties>({
			correlationId: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<DeploymentPropertiesExtendedMode | null | undefined>(undefined),
			outputs: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DeploymentPropertiesExtendedMode { Incremental = 'Incremental', Complete = 'Complete' }


	/** Resource provider information. */
	export interface Provider {

		/** Gets or sets the provider id. */
		id?: string | null;

		/** Gets or sets the namespace of the provider. */
		namespace?: string | null;

		/** Gets or sets the registration state of the provider. */
		registrationState?: string | null;

		/** Gets or sets the collection of provider resource types. */
		resourceTypes?: Array<ProviderResourceType>;
	}

	/** Resource provider information. */
	export interface ProviderFormProperties {

		/** Gets or sets the provider id. */
		id: FormControl<string | null | undefined>,

		/** Gets or sets the namespace of the provider. */
		namespace: FormControl<string | null | undefined>,

		/** Gets or sets the registration state of the provider. */
		registrationState: FormControl<string | null | undefined>,
	}
	export function CreateProviderFormGroup() {
		return new FormGroup<ProviderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			registrationState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource type managed by the resource provider. */
	export interface ProviderResourceType {

		/** Gets or sets the api version. */
		apiVersions?: Array<string>;

		/** Gets or sets the collection of locations where this resource type can be created in. */
		locations?: Array<string>;

		/** Gets or sets the properties. */
		properties?: {[id: string]: string };

		/** Gets or sets the resource type. */
		resourceType?: string | null;
	}

	/** Resource type managed by the resource provider. */
	export interface ProviderResourceTypeFormProperties {

		/** Gets or sets the properties. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** Gets or sets the resource type. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateProviderResourceTypeFormGroup() {
		return new FormGroup<ProviderResourceTypeFormProperties>({
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Entity representing the reference to the deployment parameters. */
	export interface ParametersLink {

		/** If included it must match the ContentVersion in the template. */
		contentVersion?: string | null;

		/**
		 * URI referencing the template.
		 * Required
		 */
		uri: string;
	}

	/** Entity representing the reference to the deployment parameters. */
	export interface ParametersLinkFormProperties {

		/** If included it must match the ContentVersion in the template. */
		contentVersion: FormControl<string | null | undefined>,

		/**
		 * URI referencing the template.
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


	/** Entity representing the reference to the template. */
	export interface TemplateLink {

		/**
		 * URI referencing the template.
		 * Required
		 */
		uri: TemplateLinkUri;
	}

	/** Entity representing the reference to the template. */
	export interface TemplateLinkFormProperties {

		/**
		 * URI referencing the template.
		 * Required
		 */
		uri: FormControl<TemplateLinkUri | null | undefined>,
	}
	export function CreateTemplateLinkFormGroup() {
		return new FormGroup<TemplateLinkFormProperties>({
			uri: new FormControl<TemplateLinkUri | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TemplateLinkUri { 'https://raw.githubusercontent.com/stankovski/azure-rest-api-specs/master/arm-compute/quickstart-templates/vm-simple-linux.json' = 'https://raw.githubusercontent.com/stankovski/azure-rest-api-specs/master/arm-compute/quickstart-templates/vm-simple-linux.json' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a named template deployment using a template.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} deploymentName The name of the deployment.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {Deployment} requestBody Additional parameters supplied to the operation.
		 * @return {DeploymentExtended} 
		 */
		VirtualMachines_QuickCreate(resourceGroupName: string, deploymentName: string, api_version: string, subscriptionId: string, requestBody: Deployment): Observable<DeploymentExtended> {
			return this.http.put<DeploymentExtended>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Resources/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

