import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents a blueprint assignment. */
	export interface Assignment {

		/**
		 * Managed identity generic object.
		 * Required
		 */
		identity: ManagedServiceIdentity;

		/**
		 * Detailed properties for a blueprint assignment.
		 * Required
		 */
		properties: AssignmentProperties;
	}

	/** Represents a blueprint assignment. */
	export interface AssignmentFormProperties {
	}
	export function CreateAssignmentFormGroup() {
		return new FormGroup<AssignmentFormProperties>({
		});

	}


	/** Managed identity generic object. */
	export interface ManagedServiceIdentity {

		/** Azure Active Directory principal ID associated with this Identity. */
		principalId?: string | null;

		/** ID of the Azure Active Directory. */
		tenantId?: string | null;

		/**
		 * Type of the managed identity.
		 * Required
		 */
		type: ManagedServiceIdentityType;

		/** The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity. */
		userAssignedIdentities?: {[id: string]: UserAssignedIdentity };
	}

	/** Managed identity generic object. */
	export interface ManagedServiceIdentityFormProperties {

		/** Azure Active Directory principal ID associated with this Identity. */
		principalId: FormControl<string | null | undefined>,

		/** ID of the Azure Active Directory. */
		tenantId: FormControl<string | null | undefined>,

		/**
		 * Type of the managed identity.
		 * Required
		 */
		type: FormControl<ManagedServiceIdentityType | null | undefined>,

		/** The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity. */
		userAssignedIdentities: FormControl<{[id: string]: UserAssignedIdentity } | null | undefined>,
	}
	export function CreateManagedServiceIdentityFormGroup() {
		return new FormGroup<ManagedServiceIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ManagedServiceIdentityType | null | undefined>(undefined, [Validators.required]),
			userAssignedIdentities: new FormControl<{[id: string]: UserAssignedIdentity } | null | undefined>(undefined),
		});

	}

	export enum ManagedServiceIdentityType { None = 'None', SystemAssigned = 'SystemAssigned', UserAssigned = 'UserAssigned' }


	/** User-assigned managed identity. */
	export interface UserAssignedIdentity {

		/** Client App Id associated with this identity. */
		clientId?: string | null;

		/** Azure Active Directory principal ID associated with this Identity. */
		principalId?: string | null;
	}

	/** User-assigned managed identity. */
	export interface UserAssignedIdentityFormProperties {

		/** Client App Id associated with this identity. */
		clientId: FormControl<string | null | undefined>,

		/** Azure Active Directory principal ID associated with this Identity. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateUserAssignedIdentityFormGroup() {
		return new FormGroup<UserAssignedIdentityFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed properties for a blueprint assignment. */
	export interface AssignmentProperties {

		/** ID of the published version of a blueprint definition. */
		blueprintId?: string | null;

		/** Defines how resources deployed by a blueprint assignment are locked. */
		locks?: AssignmentLockSettings;

		/**
		 * A dictionary for parameters and their corresponding values.
		 * Required
		 */
		parameters: ParameterValueCollection;

		/** State of the blueprint assignment. */
		provisioningState?: AssignmentPropertiesProvisioningState | null;

		/**
		 * A dictionary which maps resource group placeholders to the resource groups which will be created.
		 * Required
		 */
		resourceGroups: ResourceGroupValueCollection;

		/** The status of a blueprint assignment. This field is readonly. */
		status?: AssignmentStatus;
	}

	/** Detailed properties for a blueprint assignment. */
	export interface AssignmentPropertiesFormProperties {

		/** ID of the published version of a blueprint definition. */
		blueprintId: FormControl<string | null | undefined>,

		/** State of the blueprint assignment. */
		provisioningState: FormControl<AssignmentPropertiesProvisioningState | null | undefined>,
	}
	export function CreateAssignmentPropertiesFormGroup() {
		return new FormGroup<AssignmentPropertiesFormProperties>({
			blueprintId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<AssignmentPropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** Defines how resources deployed by a blueprint assignment are locked. */
	export interface AssignmentLockSettings {

		/** List of AAD principals excluded from blueprint locks. Up to 5 principals are permitted. */
		excludedPrincipals?: Array<string>;

		/** Lock mode. */
		mode?: AssignmentLockSettingsMode | null;
	}

	/** Defines how resources deployed by a blueprint assignment are locked. */
	export interface AssignmentLockSettingsFormProperties {

		/** Lock mode. */
		mode: FormControl<AssignmentLockSettingsMode | null | undefined>,
	}
	export function CreateAssignmentLockSettingsFormGroup() {
		return new FormGroup<AssignmentLockSettingsFormProperties>({
			mode: new FormControl<AssignmentLockSettingsMode | null | undefined>(undefined),
		});

	}

	export enum AssignmentLockSettingsMode { None = 'None', AllResourcesReadOnly = 'AllResourcesReadOnly', AllResourcesDoNotDelete = 'AllResourcesDoNotDelete' }


	/** A dictionary for parameters and their corresponding values. */
	export interface ParameterValueCollection {
	}

	/** A dictionary for parameters and their corresponding values. */
	export interface ParameterValueCollectionFormProperties {
	}
	export function CreateParameterValueCollectionFormGroup() {
		return new FormGroup<ParameterValueCollectionFormProperties>({
		});

	}

	export enum AssignmentPropertiesProvisioningState { creating = 'creating', validating = 'validating', waiting = 'waiting', deploying = 'deploying', cancelling = 'cancelling', locking = 'locking', succeeded = 'succeeded', failed = 'failed', canceled = 'canceled', deleting = 'deleting' }


	/** A dictionary which maps resource group placeholders to the resource groups which will be created. */
	export interface ResourceGroupValueCollection {
	}

	/** A dictionary which maps resource group placeholders to the resource groups which will be created. */
	export interface ResourceGroupValueCollectionFormProperties {
	}
	export function CreateResourceGroupValueCollectionFormGroup() {
		return new FormGroup<ResourceGroupValueCollectionFormProperties>({
		});

	}


	/** The status of a blueprint assignment. This field is readonly. */
	export interface AssignmentStatus {

		/** List of resources that were created by the blueprint assignment. */
		managedResources?: Array<string>;
	}

	/** The status of a blueprint assignment. This field is readonly. */
	export interface AssignmentStatusFormProperties {
	}
	export function CreateAssignmentStatusFormGroup() {
		return new FormGroup<AssignmentStatusFormProperties>({
		});

	}


	/** List of blueprint assignments */
	export interface AssignmentList {

		/** Link to the next page of results. */
		nextLink?: string | null;

		/** List of blueprint assignments. */
		value?: Array<Assignment>;
	}

	/** List of blueprint assignments */
	export interface AssignmentListFormProperties {

		/** Link to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAssignmentListFormGroup() {
		return new FormGroup<AssignmentListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
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


	/** Shared properties between all blueprint resources. */
	export interface BlueprintResourcePropertiesBase {

		/**
		 * Multi-line explain this resource.
		 * Max length: 500
		 */
		description?: string | null;

		/**
		 * One-liner string explain this resource.
		 * Max length: 256
		 */
		displayName?: string | null;
	}

	/** Shared properties between all blueprint resources. */
	export interface BlueprintResourcePropertiesBaseFormProperties {

		/**
		 * Multi-line explain this resource.
		 * Max length: 500
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * One-liner string explain this resource.
		 * Max length: 256
		 */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateBlueprintResourcePropertiesBaseFormGroup() {
		return new FormGroup<BlueprintResourcePropertiesBaseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}


	/** Shared status properties between all blueprint resources. */
	export interface BlueprintResourceStatusBase {

		/** Last modified time of this blueprint definition. */
		lastModified?: Date | null;

		/** Creation time of this blueprint definition. */
		timeCreated?: Date | null;
	}

	/** Shared status properties between all blueprint resources. */
	export interface BlueprintResourceStatusBaseFormProperties {

		/** Last modified time of this blueprint definition. */
		lastModified: FormControl<Date | null | undefined>,

		/** Creation time of this blueprint definition. */
		timeCreated: FormControl<Date | null | undefined>,
	}
	export function CreateBlueprintResourceStatusBaseFormGroup() {
		return new FormGroup<BlueprintResourceStatusBaseFormProperties>({
			lastModified: new FormControl<Date | null | undefined>(undefined),
			timeCreated: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Value for the specified parameter. Can be either 'value' or 'reference' but not both. */
	export interface ParameterValue {

		/** Reference to a Key Vault secret. */
		reference?: SecretValueReference;

		/** Parameter value as value type. */
		value?: any;
	}

	/** Value for the specified parameter. Can be either 'value' or 'reference' but not both. */
	export interface ParameterValueFormProperties {

		/** Parameter value as value type. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateParameterValueFormGroup() {
		return new FormGroup<ParameterValueFormProperties>({
			value: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Reference to a Key Vault secret. */
	export interface SecretValueReference {

		/**
		 * Specifies the link to a Key Vault.
		 * Required
		 */
		keyVault: KeyVaultReference;

		/**
		 * Name of the secret.
		 * Required
		 */
		secretName: string;

		/** The version of the secret to use. If left blank, the latest version of the secret is used. */
		secretVersion?: string | null;
	}

	/** Reference to a Key Vault secret. */
	export interface SecretValueReferenceFormProperties {

		/**
		 * Name of the secret.
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret to use. If left blank, the latest version of the secret is used. */
		secretVersion: FormControl<string | null | undefined>,
	}
	export function CreateSecretValueReferenceFormGroup() {
		return new FormGroup<SecretValueReferenceFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the link to a Key Vault. */
	export interface KeyVaultReference {

		/**
		 * Azure resource ID of the Key Vault.
		 * Required
		 */
		id: string;
	}

	/** Specifies the link to a Key Vault. */
	export interface KeyVaultReferenceFormProperties {

		/**
		 * Azure resource ID of the Key Vault.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultReferenceFormGroup() {
		return new FormGroup<KeyVaultReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents an Azure resource group. */
	export interface ResourceGroupValue {

		/** Location of the resource group. */
		location?: string | null;

		/**
		 * Name of the resource group.
		 * Max length: 90
		 * Min length: 1
		 */
		name?: string | null;
	}

	/** Represents an Azure resource group. */
	export interface ResourceGroupValueFormProperties {

		/** Location of the resource group. */
		location: FormControl<string | null | undefined>,

		/**
		 * Name of the resource group.
		 * Max length: 90
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateResourceGroupValueFormGroup() {
		return new FormGroup<ResourceGroupValueFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(90)]),
		});

	}


	/** Common properties for all Azure tracked resources. */
	export interface TrackedResource {

		/**
		 * The location of this blueprint assignment.
		 * Required
		 */
		location: string;
	}

	/** Common properties for all Azure tracked resources. */
	export interface TrackedResourceFormProperties {

		/**
		 * The location of this blueprint assignment.
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Response schema for querying the Azure Blueprints service principal in the tenant. */
	export interface WhoIsBlueprintContract {

		/** AAD object Id of the Azure Blueprints service principal in the tenant. */
		objectId?: string | null;
	}

	/** Response schema for querying the Azure Blueprints service principal in the tenant. */
	export interface WhoIsBlueprintContractFormProperties {

		/** AAD object Id of the Azure Blueprints service principal in the tenant. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateWhoIsBlueprintContractFormGroup() {
		return new FormGroup<WhoIsBlueprintContractFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List blueprint assignments within a subscription.
		 * Get {scope}/providers/Microsoft.Blueprint/blueprintAssignments
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @return {AssignmentList} OK -- all blueprint assignments retrieved.
		 */
		Assignments_List(api_version: string, scope: string): Observable<AssignmentList> {
			return this.http.get<AssignmentList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprintAssignments?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Get a blueprint assignment.
		 * Get {scope}/providers/Microsoft.Blueprint/blueprintAssignments/{assignmentName}
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} assignmentName Name of the blueprint assignment.
		 * @return {Assignment} OK -- blueprint assignment retrieved.
		 */
		Assignments_Get(api_version: string, scope: string, assignmentName: string): Observable<Assignment> {
			return this.http.get<Assignment>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprintAssignments/' + (assignmentName == null ? '' : encodeURIComponent(assignmentName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Create or update a blueprint assignment.
		 * Put {scope}/providers/Microsoft.Blueprint/blueprintAssignments/{assignmentName}
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} assignmentName Name of the blueprint assignment.
		 * @param {Assignment} requestBody Blueprint assignment object to save.
		 * @return {void} 
		 */
		Assignments_CreateOrUpdate(api_version: string, scope: string, assignmentName: string, requestBody: Assignment): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprintAssignments/' + (assignmentName == null ? '' : encodeURIComponent(assignmentName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a blueprint assignment.
		 * Delete {scope}/providers/Microsoft.Blueprint/blueprintAssignments/{assignmentName}
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} assignmentName Name of the blueprint assignment.
		 * @return {void} 
		 */
		Assignments_Delete(api_version: string, scope: string, assignmentName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprintAssignments/' + (assignmentName == null ? '' : encodeURIComponent(assignmentName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Blueprints service SPN objectId
		 * Post {scope}/providers/Microsoft.Blueprint/blueprintAssignments/{assignmentName}/WhoIsBlueprint
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} assignmentName Name of the blueprint assignment.
		 * @return {WhoIsBlueprintContract} Blueprints service SPN objectId
		 */
		Assignments_WhoIsBlueprint(api_version: string, scope: string, assignmentName: string): Observable<WhoIsBlueprintContract> {
			return this.http.post<WhoIsBlueprintContract>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprintAssignments/' + (assignmentName == null ? '' : encodeURIComponent(assignmentName)) + '/WhoIsBlueprint?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', null, {});
		}
	}

}

