import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Object model for the Azure CLI script. */
	export interface AzureCliScript {

		/**
		 * Properties of the Azure CLI script object.
		 * Required
		 */
		properties: AzureCliScriptProperties;
	}

	/** Object model for the Azure CLI script. */
	export interface AzureCliScriptFormProperties {
	}
	export function CreateAzureCliScriptFormGroup() {
		return new FormGroup<AzureCliScriptFormProperties>({
		});

	}


	/** Properties of the Azure CLI script object. */
	export interface AzureCliScriptProperties {

		/**
		 * Azure CLI module version to be used.
		 * Required
		 */
		azCliVersion: string;
	}

	/** Properties of the Azure CLI script object. */
	export interface AzureCliScriptPropertiesFormProperties {

		/**
		 * Azure CLI module version to be used.
		 * Required
		 */
		azCliVersion: FormControl<string | null | undefined>,
	}
	export function CreateAzureCliScriptPropertiesFormGroup() {
		return new FormGroup<AzureCliScriptPropertiesFormProperties>({
			azCliVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Object model for the Azure PowerShell script. */
	export interface AzurePowerShellScript {

		/**
		 * Properties of the Azure PowerShell script object.
		 * Required
		 */
		properties: AzurePowerShellScriptProperties;
	}

	/** Object model for the Azure PowerShell script. */
	export interface AzurePowerShellScriptFormProperties {
	}
	export function CreateAzurePowerShellScriptFormGroup() {
		return new FormGroup<AzurePowerShellScriptFormProperties>({
		});

	}


	/** Properties of the Azure PowerShell script object. */
	export interface AzurePowerShellScriptProperties {

		/**
		 * Azure PowerShell module version to be used.
		 * Required
		 */
		azPowerShellVersion: string;
	}

	/** Properties of the Azure PowerShell script object. */
	export interface AzurePowerShellScriptPropertiesFormProperties {

		/**
		 * Azure PowerShell module version to be used.
		 * Required
		 */
		azPowerShellVersion: FormControl<string | null | undefined>,
	}
	export function CreateAzurePowerShellScriptPropertiesFormGroup() {
		return new FormGroup<AzurePowerShellScriptPropertiesFormProperties>({
			azPowerShellVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Common properties for all Azure resources. */
	export interface AzureResourceBase {

		/** String Id used to locate any resource on Azure. */
		id?: string | null;

		/** Name of this resource. */
		name?: string | null;

		/** Type of this resource. */
		type?: string | null;
	}

	/** Common properties for all Azure resources. */
	export interface AzureResourceBaseFormProperties {

		/** String Id used to locate any resource on Azure. */
		id: FormControl<string | null | undefined>,

		/** Name of this resource. */
		name: FormControl<string | null | undefined>,

		/** Type of this resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAzureResourceBaseFormGroup() {
		return new FormGroup<AzureResourceBaseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of the error. */
	export interface DefaultErrorResponse {

		/** One of a server-defined set of error codes. */
		code?: string | null;

		/** Detailed errors. */
		details?: Array<DefaultErrorResponse>;

		/** A human-readable representation of the error. */
		message?: string | null;

		/** The target of the particular error. */
		target?: string | null;
	}

	/** The details of the error. */
	export interface DefaultErrorResponseFormProperties {

		/** One of a server-defined set of error codes. */
		code: FormControl<string | null | undefined>,

		/** A human-readable representation of the error. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateDefaultErrorResponseFormGroup() {
		return new FormGroup<DefaultErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deployment script object. */
	export interface DeploymentScript {

		/**
		 * Managed identity generic object.
		 * Required
		 */
		identity: ManagedServiceIdentity;

		/**
		 * Type of the script.
		 * Required
		 */
		kind: DeploymentScriptKind;

		/**
		 * The location of the ACI and the storage account for the deployment script.
		 * Required
		 */
		location: string;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** Deployment script object. */
	export interface DeploymentScriptFormProperties {

		/**
		 * Type of the script.
		 * Required
		 */
		kind: FormControl<DeploymentScriptKind | null | undefined>,

		/**
		 * The location of the ACI and the storage account for the deployment script.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDeploymentScriptFormGroup() {
		return new FormGroup<DeploymentScriptFormProperties>({
			kind: new FormControl<DeploymentScriptKind | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Managed identity generic object. */
	export interface ManagedServiceIdentity {

		/** Type of the managed identity. */
		type?: ManagedServiceIdentityType | null;

		/** The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity. */
		userAssignedIdentities?: {[id: string]: UserAssignedIdentity };
	}

	/** Managed identity generic object. */
	export interface ManagedServiceIdentityFormProperties {

		/** Type of the managed identity. */
		type: FormControl<ManagedServiceIdentityType | null | undefined>,

		/** The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity. */
		userAssignedIdentities: FormControl<{[id: string]: UserAssignedIdentity } | null | undefined>,
	}
	export function CreateManagedServiceIdentityFormGroup() {
		return new FormGroup<ManagedServiceIdentityFormProperties>({
			type: new FormControl<ManagedServiceIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: UserAssignedIdentity } | null | undefined>(undefined),
		});

	}

	export enum ManagedServiceIdentityType { UserAssigned = 0 }


	/** User-assigned managed identity. */
	export interface UserAssignedIdentity {

		/** Client App Id associated with this identity. */
		clientId?: string | null;

		/** Azure Active Directory principal ID associated with this identity. */
		principalId?: string | null;
	}

	/** User-assigned managed identity. */
	export interface UserAssignedIdentityFormProperties {

		/** Client App Id associated with this identity. */
		clientId: FormControl<string | null | undefined>,

		/** Azure Active Directory principal ID associated with this identity. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateUserAssignedIdentityFormGroup() {
		return new FormGroup<UserAssignedIdentityFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeploymentScriptKind { AzurePowerShell = 0, AzureCLI = 1 }


	/** List of deployment scripts. */
	export interface DeploymentScriptListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** An array of deployment scripts. */
		value?: Array<DeploymentScript>;
	}

	/** List of deployment scripts. */
	export interface DeploymentScriptListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentScriptListResultFormGroup() {
		return new FormGroup<DeploymentScriptListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common properties for the deployment script. */
	export interface DeploymentScriptPropertiesBase {

		/** The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'. */
		cleanupPreference?: DeploymentScriptPropertiesBaseCleanupPreference | null;

		/** List of script outputs. */
		outputs?: {[id: string]: any };

		/** State of the script execution. This only appears in the response. */
		provisioningState?: DeploymentScriptPropertiesBaseProvisioningState | null;

		/** Generic object modeling results of script execution. */
		status?: ScriptStatus;
	}

	/** Common properties for the deployment script. */
	export interface DeploymentScriptPropertiesBaseFormProperties {

		/** The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'. */
		cleanupPreference: FormControl<DeploymentScriptPropertiesBaseCleanupPreference | null | undefined>,

		/** List of script outputs. */
		outputs: FormControl<{[id: string]: any } | null | undefined>,

		/** State of the script execution. This only appears in the response. */
		provisioningState: FormControl<DeploymentScriptPropertiesBaseProvisioningState | null | undefined>,
	}
	export function CreateDeploymentScriptPropertiesBaseFormGroup() {
		return new FormGroup<DeploymentScriptPropertiesBaseFormProperties>({
			cleanupPreference: new FormControl<DeploymentScriptPropertiesBaseCleanupPreference | null | undefined>(undefined),
			outputs: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			provisioningState: new FormControl<DeploymentScriptPropertiesBaseProvisioningState | null | undefined>(undefined),
		});

	}

	export enum DeploymentScriptPropertiesBaseCleanupPreference { Always = 0, OnSuccess = 1, OnExpiration = 2 }

	export enum DeploymentScriptPropertiesBaseProvisioningState { Creating = 0, ProvisioningResources = 1, Running = 2, Succeeded = 3, Failed = 4, Canceled = 5 }


	/** Generic object modeling results of script execution. */
	export interface ScriptStatus {

		/** ACI resource Id. */
		containerInstanceId?: string | null;

		/** End time of the script execution. */
		endTime?: Date | null;

		/** The details of the error. */
		error?: DefaultErrorResponse;

		/** Time the deployment script resource will expire. */
		expirationTime?: Date | null;

		/** Start time of the script execution. */
		startTime?: Date | null;

		/** Storage account resource Id. */
		storageAccountId?: string | null;
	}

	/** Generic object modeling results of script execution. */
	export interface ScriptStatusFormProperties {

		/** ACI resource Id. */
		containerInstanceId: FormControl<string | null | undefined>,

		/** End time of the script execution. */
		endTime: FormControl<Date | null | undefined>,

		/** Time the deployment script resource will expire. */
		expirationTime: FormControl<Date | null | undefined>,

		/** Start time of the script execution. */
		startTime: FormControl<Date | null | undefined>,

		/** Storage account resource Id. */
		storageAccountId: FormControl<string | null | undefined>,
	}
	export function CreateScriptStatusFormGroup() {
		return new FormGroup<ScriptStatusFormProperties>({
			containerInstanceId: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			expirationTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			storageAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deployment script parameters to be updated.  */
	export interface DeploymentScriptUpdateParameter {

		/** Resource tags to be updated. */
		tags?: {[id: string]: string };
	}

	/** Deployment script parameters to be updated.  */
	export interface DeploymentScriptUpdateParameterFormProperties {

		/** Resource tags to be updated. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDeploymentScriptUpdateParameterFormGroup() {
		return new FormGroup<DeploymentScriptUpdateParameterFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The environment variable to pass to the script in the container instance. */
	export interface EnvironmentVariable {

		/**
		 * The name of the environment variable.
		 * Required
		 */
		name: string;

		/** The value of the secure environment variable. */
		secureValue?: string | null;

		/** The value of the environment variable. */
		value?: string | null;
	}

	/** The environment variable to pass to the script in the container instance. */
	export interface EnvironmentVariableFormProperties {

		/**
		 * The name of the environment variable.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The value of the secure environment variable. */
		secureValue: FormControl<string | null | undefined>,

		/** The value of the environment variable. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentVariableFormGroup() {
		return new FormGroup<EnvironmentVariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secureValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Script log properties. */
	export interface LogProperties {

		/** Script execution logs in text format. */
		log?: string | null;
	}

	/** Script log properties. */
	export interface LogPropertiesFormProperties {

		/** Script execution logs in text format. */
		log: FormControl<string | null | undefined>,
	}
	export function CreateLogPropertiesFormGroup() {
		return new FormGroup<LogPropertiesFormProperties>({
			log: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common configuration settings for both Azure PowerShell and Azure CLI scripts. */
	export interface ScriptConfigurationBase {

		/** Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' */
		arguments?: string | null;

		/** The environment variables to pass over to the script. */
		environmentVariables?: Array<EnvironmentVariable>;

		/** Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID. */
		forceUpdateTag?: string | null;

		/** Uri for the script. This is the entry point for the external script. */
		primaryScriptUri?: string | null;

		/**
		 * Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P7D means one week).
		 * Required
		 */
		retentionInterval: string;

		/**
		 * Script body.
		 * Max length: 32000
		 */
		scriptContent?: string | null;

		/** Supporting files for the external script. */
		supportingScriptUris?: Array<string>;

		/** Maximum allowed script execution time specified in ISO 8601 format. Default value is PT1H */
		timeout?: string | null;
	}

	/** Common configuration settings for both Azure PowerShell and Azure CLI scripts. */
	export interface ScriptConfigurationBaseFormProperties {

		/** Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' */
		arguments: FormControl<string | null | undefined>,

		/** Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID. */
		forceUpdateTag: FormControl<string | null | undefined>,

		/** Uri for the script. This is the entry point for the external script. */
		primaryScriptUri: FormControl<string | null | undefined>,

		/**
		 * Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P7D means one week).
		 * Required
		 */
		retentionInterval: FormControl<string | null | undefined>,

		/**
		 * Script body.
		 * Max length: 32000
		 */
		scriptContent: FormControl<string | null | undefined>,

		/** Maximum allowed script execution time specified in ISO 8601 format. Default value is PT1H */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateScriptConfigurationBaseFormGroup() {
		return new FormGroup<ScriptConfigurationBaseFormProperties>({
			arguments: new FormControl<string | null | undefined>(undefined),
			forceUpdateTag: new FormControl<string | null | undefined>(undefined),
			primaryScriptUri: new FormControl<string | null | undefined>(undefined),
			retentionInterval: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scriptContent: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32000)]),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Script execution log object. */
	export interface ScriptLog {

		/** Script log properties. */
		properties?: LogProperties;
	}

	/** Script execution log object. */
	export interface ScriptLogFormProperties {
	}
	export function CreateScriptLogFormGroup() {
		return new FormGroup<ScriptLogFormProperties>({
		});

	}


	/** Deployment script execution logs. */
	export interface ScriptLogsList {

		/** Deployment scripts logs. */
		value?: Array<ScriptLog>;
	}

	/** Deployment script execution logs. */
	export interface ScriptLogsListFormProperties {
	}
	export function CreateScriptLogsListFormGroup() {
		return new FormGroup<ScriptLogsListFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all deployment scripts for a given subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Resources/deploymentScripts
		 * @param {string} subscriptionId Subscription Id which forms part of the URI for every service call.
		 * @param {string} api_version Client Api version.
		 * @return {DeploymentScriptListResult} OK -- Returns a list of deployment scripts.
		 */
		DeploymentScripts_ListBySubscription(subscriptionId: string, api_version: string): Observable<DeploymentScriptListResult> {
			return this.http.get<DeploymentScriptListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Resources/deploymentScripts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists deployments scripts.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts
		 * @param {string} subscriptionId Subscription Id which forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version Client Api version.
		 * @return {DeploymentScriptListResult} OK -- Returns a list of deployment scripts.
		 */
		DeploymentScripts_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<DeploymentScriptListResult> {
			return this.http.get<DeploymentScriptListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Resources/deploymentScripts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a deployment script with a given name.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}
		 * @param {string} subscriptionId Subscription Id which forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} scriptName Name of the deployment script.
		 * @param {string} api_version Client Api version.
		 * @return {DeploymentScript} OK -- Returns information about the deployment script.
		 */
		DeploymentScripts_Get(subscriptionId: string, resourceGroupName: string, scriptName: string, api_version: string): Observable<DeploymentScript> {
			return this.http.get<DeploymentScript>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Resources/deploymentScripts/' + (scriptName == null ? '' : encodeURIComponent(scriptName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a deployment script.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}
		 * @param {string} subscriptionId Subscription Id which forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} scriptName Name of the deployment script.
		 * @param {string} api_version Client Api version.
		 * @param {DeploymentScript} requestBody Deployment script supplied to the operation.
		 * @return {DeploymentScript} OK -- Deployment script is updated.
		 */
		DeploymentScripts_Create(subscriptionId: string, resourceGroupName: string, scriptName: string, api_version: string, requestBody: DeploymentScript): Observable<DeploymentScript> {
			return this.http.put<DeploymentScript>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Resources/deploymentScripts/' + (scriptName == null ? '' : encodeURIComponent(scriptName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a deployment script. When operation completes, status code 200 returned without content.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}
		 * @param {string} subscriptionId Subscription Id which forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} scriptName Name of the deployment script.
		 * @param {string} api_version Client Api version.
		 * @return {void} OK -- Deployment script deleted.
		 */
		DeploymentScripts_Delete(subscriptionId: string, resourceGroupName: string, scriptName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Resources/deploymentScripts/' + (scriptName == null ? '' : encodeURIComponent(scriptName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates deployment script tags with specified values.
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}
		 * @param {string} subscriptionId Subscription Id which forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} scriptName Name of the deployment script.
		 * @param {string} api_version Client Api version.
		 * @param {DeploymentScriptUpdateParameter} requestBody Deployment script resource with the tags to be updated.
		 * @return {DeploymentScript} OK -- Deployment script tags are updated.
		 */
		DeploymentScripts_Update(subscriptionId: string, resourceGroupName: string, scriptName: string, api_version: string, requestBody: DeploymentScriptUpdateParameter): Observable<DeploymentScript> {
			return this.http.patch<DeploymentScript>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Resources/deploymentScripts/' + (scriptName == null ? '' : encodeURIComponent(scriptName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets deployment script logs for a given deployment script name.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}/logs
		 * @param {string} subscriptionId Subscription Id which forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} scriptName Name of the deployment script.
		 * @param {string} api_version Client Api version.
		 * @return {ScriptLogsList} OK -- Returns deployment script logs if available.
		 */
		DeploymentScripts_GetLogs(subscriptionId: string, resourceGroupName: string, scriptName: string, api_version: string): Observable<ScriptLogsList> {
			return this.http.get<ScriptLogsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Resources/deploymentScripts/' + (scriptName == null ? '' : encodeURIComponent(scriptName)) + '/logs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets deployment script logs for a given deployment script name.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}/logs/default
		 * @param {string} subscriptionId Subscription Id which forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} scriptName Name of the deployment script.
		 * @param {string} api_version Client Api version.
		 * @return {ScriptLog} OK -- Returns deployment script logs if available.
		 */
		DeploymentScripts_GetLogsDefault(subscriptionId: string, resourceGroupName: string, scriptName: string, api_version: string): Observable<ScriptLog> {
			return this.http.get<ScriptLog>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Resources/deploymentScripts/' + (scriptName == null ? '' : encodeURIComponent(scriptName)) + '/logs/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

