import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents a blueprint artifact. */
	export interface Artifact {

		/**
		 * Specifies the kind of blueprint artifact.
		 * Required
		 */
		kind: ArtifactKind;
	}

	/** Represents a blueprint artifact. */
	export interface ArtifactFormProperties {

		/**
		 * Specifies the kind of blueprint artifact.
		 * Required
		 */
		kind: FormControl<ArtifactKind | null | undefined>,
	}
	export function CreateArtifactFormGroup() {
		return new FormGroup<ArtifactFormProperties>({
			kind: new FormControl<ArtifactKind | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ArtifactKind { template = 'template', roleAssignment = 'roleAssignment', policyAssignment = 'policyAssignment' }


	/** List of blueprint artifacts. */
	export interface ArtifactList {

		/** Link to the next page of results. */
		nextLink?: string | null;

		/** List of blueprint artifacts. */
		value?: Array<Artifact>;
	}

	/** List of blueprint artifacts. */
	export interface ArtifactListFormProperties {

		/** Link to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateArtifactListFormGroup() {
		return new FormGroup<ArtifactListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common properties shared by different artifacts. */
	export interface ArtifactPropertiesBase {

		/** Artifacts which need to be deployed before the specified artifact. */
		dependsOn?: Array<string>;
	}

	/** Common properties shared by different artifacts. */
	export interface ArtifactPropertiesBaseFormProperties {
	}
	export function CreateArtifactPropertiesBaseFormGroup() {
		return new FormGroup<ArtifactPropertiesBaseFormProperties>({
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


	/** Represents a Blueprint definition. */
	export interface Blueprint {

		/**
		 * Schema for blueprint definition properties.
		 * Required
		 */
		properties: BlueprintProperties;
	}

	/** Represents a Blueprint definition. */
	export interface BlueprintFormProperties {
	}
	export function CreateBlueprintFormGroup() {
		return new FormGroup<BlueprintFormProperties>({
		});

	}


	/** Schema for blueprint definition properties. */
	export interface BlueprintProperties {

		/** Layout view of the blueprint definition for UI reference. */
		layout?: string | null;

		/** Published versions of this blueprint definition. */
		versions?: string | null;
	}

	/** Schema for blueprint definition properties. */
	export interface BlueprintPropertiesFormProperties {

		/** Layout view of the blueprint definition for UI reference. */
		layout: FormControl<string | null | undefined>,

		/** Published versions of this blueprint definition. */
		versions: FormControl<string | null | undefined>,
	}
	export function CreateBlueprintPropertiesFormGroup() {
		return new FormGroup<BlueprintPropertiesFormProperties>({
			layout: new FormControl<string | null | undefined>(undefined),
			versions: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of blueprint definitions. */
	export interface BlueprintList {

		/** Link to the next page of results. */
		nextLink?: string | null;

		/** List of blueprint definitions. */
		value?: Array<Blueprint>;
	}

	/** List of blueprint definitions. */
	export interface BlueprintListFormProperties {

		/** Link to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateBlueprintListFormGroup() {
		return new FormGroup<BlueprintListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
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


	/** The status of the blueprint. This field is readonly. */
	export interface BlueprintStatus {
	}

	/** The status of the blueprint. This field is readonly. */
	export interface BlueprintStatusFormProperties {
	}
	export function CreateBlueprintStatusFormGroup() {
		return new FormGroup<BlueprintStatusFormProperties>({
		});

	}


	/** Represent a parameter with constrains and metadata. */
	export interface ParameterDefinition {

		/** Array of allowed values for this parameter. */
		allowedValues?: Array<string>;

		/** Default Value for this parameter. */
		defaultValue?: any;

		/** User-friendly properties for this parameter. */
		metadata?: ParameterDefinitionMetadata;

		/**
		 * Allowed data types for Resource Manager template parameters.
		 * Required
		 */
		type: ParameterDefinitionType;
	}

	/** Represent a parameter with constrains and metadata. */
	export interface ParameterDefinitionFormProperties {

		/** Default Value for this parameter. */
		defaultValue: FormControl<any | null | undefined>,

		/**
		 * Allowed data types for Resource Manager template parameters.
		 * Required
		 */
		type: FormControl<ParameterDefinitionType | null | undefined>,
	}
	export function CreateParameterDefinitionFormGroup() {
		return new FormGroup<ParameterDefinitionFormProperties>({
			defaultValue: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<ParameterDefinitionType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** User-friendly properties for this parameter. */
	export interface ParameterDefinitionMetadata {

		/**
		 * Description of this parameter/resourceGroup.
		 * Max length: 500
		 */
		description?: string | null;

		/**
		 * DisplayName of this parameter/resourceGroup.
		 * Max length: 256
		 */
		displayName?: string | null;

		/**
		 * StrongType for UI to render rich experience during blueprint assignment. Supported strong types are resourceType, principalId and location.
		 * Max length: 64
		 */
		strongType?: string | null;
	}

	/** User-friendly properties for this parameter. */
	export interface ParameterDefinitionMetadataFormProperties {

		/**
		 * Description of this parameter/resourceGroup.
		 * Max length: 500
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * DisplayName of this parameter/resourceGroup.
		 * Max length: 256
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * StrongType for UI to render rich experience during blueprint assignment. Supported strong types are resourceType, principalId and location.
		 * Max length: 64
		 */
		strongType: FormControl<string | null | undefined>,
	}
	export function CreateParameterDefinitionMetadataFormGroup() {
		return new FormGroup<ParameterDefinitionMetadataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			strongType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
		});

	}

	export enum ParameterDefinitionType { string = 'string', array = 'array', bool = 'bool', int = 'int', object = 'object', secureObject = 'secureObject', secureString = 'secureString' }


	/** A dictionary hold parameter name and its metadata. */
	export interface ParameterDefinitionCollection {
	}

	/** A dictionary hold parameter name and its metadata. */
	export interface ParameterDefinitionCollectionFormProperties {
	}
	export function CreateParameterDefinitionCollectionFormGroup() {
		return new FormGroup<ParameterDefinitionCollectionFormProperties>({
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


	/** Blueprint artifact that applies a Policy assignment. */
	export interface PolicyAssignmentArtifact {

		/**
		 * Properties of a Policy assignment blueprint artifact.
		 * Required
		 */
		properties: PolicyAssignmentArtifactProperties;
	}

	/** Blueprint artifact that applies a Policy assignment. */
	export interface PolicyAssignmentArtifactFormProperties {
	}
	export function CreatePolicyAssignmentArtifactFormGroup() {
		return new FormGroup<PolicyAssignmentArtifactFormProperties>({
		});

	}


	/** Properties of a Policy assignment blueprint artifact. */
	export interface PolicyAssignmentArtifactProperties {

		/**
		 * A dictionary for parameters and their corresponding values.
		 * Required
		 */
		parameters: ParameterValueCollection;

		/**
		 * Azure resource ID of the policy definition.
		 * Required
		 */
		policyDefinitionId: string;

		/** Name of the resource group placeholder to which the policy will be assigned. */
		resourceGroup?: string | null;
	}

	/** Properties of a Policy assignment blueprint artifact. */
	export interface PolicyAssignmentArtifactPropertiesFormProperties {

		/**
		 * Azure resource ID of the policy definition.
		 * Required
		 */
		policyDefinitionId: FormControl<string | null | undefined>,

		/** Name of the resource group placeholder to which the policy will be assigned. */
		resourceGroup: FormControl<string | null | undefined>,
	}
	export function CreatePolicyAssignmentArtifactPropertiesFormGroup() {
		return new FormGroup<PolicyAssignmentArtifactPropertiesFormProperties>({
			policyDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a published blueprint. */
	export interface PublishedBlueprint {

		/**
		 * Schema for published blueprint definition properties.
		 * Required
		 */
		properties: PublishedBlueprintProperties;
	}

	/** Represents a published blueprint. */
	export interface PublishedBlueprintFormProperties {
	}
	export function CreatePublishedBlueprintFormGroup() {
		return new FormGroup<PublishedBlueprintFormProperties>({
		});

	}


	/** Schema for published blueprint definition properties. */
	export interface PublishedBlueprintProperties {

		/** Name of the published blueprint definition. */
		blueprintName?: string | null;

		/**
		 * Version-specific change notes.
		 * Max length: 500
		 */
		changeNotes?: string | null;
	}

	/** Schema for published blueprint definition properties. */
	export interface PublishedBlueprintPropertiesFormProperties {

		/** Name of the published blueprint definition. */
		blueprintName: FormControl<string | null | undefined>,

		/**
		 * Version-specific change notes.
		 * Max length: 500
		 */
		changeNotes: FormControl<string | null | undefined>,
	}
	export function CreatePublishedBlueprintPropertiesFormGroup() {
		return new FormGroup<PublishedBlueprintPropertiesFormProperties>({
			blueprintName: new FormControl<string | null | undefined>(undefined),
			changeNotes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}


	/** List of published blueprint definitions. */
	export interface PublishedBlueprintList {

		/** Link to the next page of results. */
		nextLink?: string | null;

		/** List of published blueprint definitions. */
		value?: Array<PublishedBlueprint>;
	}

	/** List of published blueprint definitions. */
	export interface PublishedBlueprintListFormProperties {

		/** Link to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePublishedBlueprintListFormGroup() {
		return new FormGroup<PublishedBlueprintListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an Azure resource group in a blueprint definition. */
	export interface ResourceGroupDefinition {

		/** Artifacts which need to be deployed before this resource group. */
		dependsOn?: Array<string>;

		/**
		 * Location of this resourceGroup. Leave empty if the resource group location will be specified during the blueprint assignment.
		 * Max length: 90
		 */
		location?: string | null;

		/** User-friendly properties for this parameter. */
		metadata?: ParameterDefinitionMetadata;

		/**
		 * Name of this resourceGroup. Leave empty if the resource group name will be specified during the blueprint assignment.
		 * Min length: 1
		 * Max length: 90
		 */
		name?: string | null;

		/** A dictionary of resource group tag values. */
		tags?: ResourceGroupTagCollection;
	}

	/** Represents an Azure resource group in a blueprint definition. */
	export interface ResourceGroupDefinitionFormProperties {

		/**
		 * Location of this resourceGroup. Leave empty if the resource group location will be specified during the blueprint assignment.
		 * Max length: 90
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * Name of this resourceGroup. Leave empty if the resource group name will be specified during the blueprint assignment.
		 * Min length: 1
		 * Max length: 90
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateResourceGroupDefinitionFormGroup() {
		return new FormGroup<ResourceGroupDefinitionFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(90)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(90)]),
		});

	}


	/** A dictionary of resource group tag values. */
	export interface ResourceGroupTagCollection {
	}

	/** A dictionary of resource group tag values. */
	export interface ResourceGroupTagCollectionFormProperties {
	}
	export function CreateResourceGroupTagCollectionFormGroup() {
		return new FormGroup<ResourceGroupTagCollectionFormProperties>({
		});

	}


	/** A dictionary which maps resource group placeholders to the resource groups which will be created. */
	export interface ResourceGroupDefinitionCollection {
	}

	/** A dictionary which maps resource group placeholders to the resource groups which will be created. */
	export interface ResourceGroupDefinitionCollectionFormProperties {
	}
	export function CreateResourceGroupDefinitionCollectionFormGroup() {
		return new FormGroup<ResourceGroupDefinitionCollectionFormProperties>({
		});

	}


	/** Represents an Azure resource group. */
	export interface ResourceGroupValue {

		/** Location of the resource group. */
		location?: string | null;

		/**
		 * Name of the resource group.
		 * Min length: 1
		 * Max length: 90
		 */
		name?: string | null;
	}

	/** Represents an Azure resource group. */
	export interface ResourceGroupValueFormProperties {

		/** Location of the resource group. */
		location: FormControl<string | null | undefined>,

		/**
		 * Name of the resource group.
		 * Min length: 1
		 * Max length: 90
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateResourceGroupValueFormGroup() {
		return new FormGroup<ResourceGroupValueFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(90)]),
		});

	}


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


	/** Supported operations of this resource provider. */
	export interface ResourceProviderOperation {

		/** Display metadata associated with the operation. */
		display?: any;

		/** Operation name, in format of {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** Supported operations of this resource provider. */
	export interface ResourceProviderOperationFormProperties {

		/** Display metadata associated with the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name, in format of {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateResourceProviderOperationFormGroup() {
		return new FormGroup<ResourceProviderOperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of the request to list operations. */
	export interface ResourceProviderOperationList {

		/** List of operations supported by this resource provider. */
		value?: Array<ResourceProviderOperation>;
	}

	/** Results of the request to list operations. */
	export interface ResourceProviderOperationListFormProperties {
	}
	export function CreateResourceProviderOperationListFormGroup() {
		return new FormGroup<ResourceProviderOperationListFormProperties>({
		});

	}


	/** Blueprint artifact that applies a Role assignment. */
	export interface RoleAssignmentArtifact {

		/**
		 * Properties of a Role assignment blueprint artifact.
		 * Required
		 */
		properties: RoleAssignmentArtifactProperties;
	}

	/** Blueprint artifact that applies a Role assignment. */
	export interface RoleAssignmentArtifactFormProperties {
	}
	export function CreateRoleAssignmentArtifactFormGroup() {
		return new FormGroup<RoleAssignmentArtifactFormProperties>({
		});

	}


	/** Properties of a Role assignment blueprint artifact. */
	export interface RoleAssignmentArtifactProperties {

		/**
		 * Array of user or group identities in Azure Active Directory. The roleDefinition will apply to each identity.
		 * Required
		 */
		principalIds: any;

		/** RoleAssignment will be scope to this resourceGroup. If empty, it scopes to the subscription. */
		resourceGroup?: string | null;

		/**
		 * Azure resource ID of the RoleDefinition.
		 * Required
		 */
		roleDefinitionId: string;
	}

	/** Properties of a Role assignment blueprint artifact. */
	export interface RoleAssignmentArtifactPropertiesFormProperties {

		/**
		 * Array of user or group identities in Azure Active Directory. The roleDefinition will apply to each identity.
		 * Required
		 */
		principalIds: FormControl<any | null | undefined>,

		/** RoleAssignment will be scope to this resourceGroup. If empty, it scopes to the subscription. */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * Azure resource ID of the RoleDefinition.
		 * Required
		 */
		roleDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateRoleAssignmentArtifactPropertiesFormGroup() {
		return new FormGroup<RoleAssignmentArtifactPropertiesFormProperties>({
			principalIds: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			roleDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Shared Schema for both blueprintProperties and publishedBlueprintProperties. */
	export interface SharedBlueprintProperties {

		/** A dictionary hold parameter name and its metadata. */
		parameters?: ParameterDefinitionCollection;

		/** A dictionary which maps resource group placeholders to the resource groups which will be created. */
		resourceGroups?: ResourceGroupDefinitionCollection;

		/** The status of the blueprint. This field is readonly. */
		status?: BlueprintStatus;

		/** The scope where this blueprint definition can be assigned. */
		targetScope?: SharedBlueprintPropertiesTargetScope | null;
	}

	/** Shared Schema for both blueprintProperties and publishedBlueprintProperties. */
	export interface SharedBlueprintPropertiesFormProperties {

		/** The scope where this blueprint definition can be assigned. */
		targetScope: FormControl<SharedBlueprintPropertiesTargetScope | null | undefined>,
	}
	export function CreateSharedBlueprintPropertiesFormGroup() {
		return new FormGroup<SharedBlueprintPropertiesFormProperties>({
			targetScope: new FormControl<SharedBlueprintPropertiesTargetScope | null | undefined>(undefined),
		});

	}

	export enum SharedBlueprintPropertiesTargetScope { subscription = 'subscription', managementGroup = 'managementGroup' }


	/** Blueprint artifact that deploys a Resource Manager template. */
	export interface TemplateArtifact {

		/**
		 * Properties of a Resource Manager template blueprint artifact.
		 * Required
		 */
		properties: TemplateArtifactProperties;
	}

	/** Blueprint artifact that deploys a Resource Manager template. */
	export interface TemplateArtifactFormProperties {
	}
	export function CreateTemplateArtifactFormGroup() {
		return new FormGroup<TemplateArtifactFormProperties>({
		});

	}


	/** Properties of a Resource Manager template blueprint artifact. */
	export interface TemplateArtifactProperties {

		/**
		 * A dictionary for parameters and their corresponding values.
		 * Required
		 */
		parameters: ParameterValueCollection;

		/** If applicable, the name of the resource group placeholder to which the Resource Manager template blueprint artifact will be deployed. */
		resourceGroup?: string | null;

		/**
		 * The Resource Manager template blueprint artifact body.
		 * Required
		 */
		template: string;
	}

	/** Properties of a Resource Manager template blueprint artifact. */
	export interface TemplateArtifactPropertiesFormProperties {

		/** If applicable, the name of the resource group placeholder to which the Resource Manager template blueprint artifact will be deployed. */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * The Resource Manager template blueprint artifact body.
		 * Required
		 */
		template: FormControl<string | null | undefined>,
	}
	export function CreateTemplateArtifactPropertiesFormGroup() {
		return new FormGroup<TemplateArtifactPropertiesFormProperties>({
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List blueprint definitions.
		 * Get {scope}/providers/Microsoft.Blueprint/blueprints
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @return {BlueprintList} OK -- retrieved list of blueprint definitions.
		 */
		Blueprints_List(api_version: string, scope: string): Observable<BlueprintList> {
			return this.http.get<BlueprintList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprints?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Get a blueprint definition.
		 * Get {scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} blueprintName Name of the blueprint definition.
		 * @return {Blueprint} OK -- blueprint definition retrieved.
		 */
		Blueprints_Get(api_version: string, scope: string, blueprintName: string): Observable<Blueprint> {
			return this.http.get<Blueprint>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprints/' + (blueprintName == null ? '' : encodeURIComponent(blueprintName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Create or update a blueprint definition.
		 * Put {scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} blueprintName Name of the blueprint definition.
		 * @param {Blueprint} requestBody Blueprint definition.
		 * @return {void} 
		 */
		Blueprints_CreateOrUpdate(api_version: string, scope: string, blueprintName: string, requestBody: Blueprint): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprints/' + (blueprintName == null ? '' : encodeURIComponent(blueprintName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a blueprint definition.
		 * Delete {scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} blueprintName Name of the blueprint definition.
		 * @return {Blueprint} OK -- blueprint definition deleted.
		 */
		Blueprints_Delete(api_version: string, scope: string, blueprintName: string): Observable<Blueprint> {
			return this.http.delete<Blueprint>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprints/' + (blueprintName == null ? '' : encodeURIComponent(blueprintName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * List artifacts for a given blueprint definition.
		 * Get {scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/artifacts
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} blueprintName Name of the blueprint definition.
		 * @return {ArtifactList} OK -- blueprint artifacts retrieved.
		 */
		Artifacts_List(api_version: string, scope: string, blueprintName: string): Observable<ArtifactList> {
			return this.http.get<ArtifactList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprints/' + (blueprintName == null ? '' : encodeURIComponent(blueprintName)) + '/artifacts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Get a blueprint artifact.
		 * Get {scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/artifacts/{artifactName}
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} blueprintName Name of the blueprint definition.
		 * @param {string} artifactName Name of the blueprint artifact.
		 * @return {Artifact} OK -- blueprint artifact retrieved.
		 */
		Artifacts_Get(api_version: string, scope: string, blueprintName: string, artifactName: string): Observable<Artifact> {
			return this.http.get<Artifact>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprints/' + (blueprintName == null ? '' : encodeURIComponent(blueprintName)) + '/artifacts/' + (artifactName == null ? '' : encodeURIComponent(artifactName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Create or update blueprint artifact.
		 * Put {scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/artifacts/{artifactName}
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} blueprintName Name of the blueprint definition.
		 * @param {string} artifactName Name of the blueprint artifact.
		 * @param {Artifact} requestBody Blueprint artifact to create or update.
		 * @return {void} 
		 */
		Artifacts_CreateOrUpdate(api_version: string, scope: string, blueprintName: string, artifactName: string, requestBody: Artifact): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprints/' + (blueprintName == null ? '' : encodeURIComponent(blueprintName)) + '/artifacts/' + (artifactName == null ? '' : encodeURIComponent(artifactName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a blueprint artifact.
		 * Delete {scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/artifacts/{artifactName}
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} blueprintName Name of the blueprint definition.
		 * @param {string} artifactName Name of the blueprint artifact.
		 * @return {Artifact} OK -- blueprint artifact deleted.
		 */
		Artifacts_Delete(api_version: string, scope: string, blueprintName: string, artifactName: string): Observable<Artifact> {
			return this.http.delete<Artifact>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprints/' + (blueprintName == null ? '' : encodeURIComponent(blueprintName)) + '/artifacts/' + (artifactName == null ? '' : encodeURIComponent(artifactName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * List published versions of given blueprint definition.
		 * Get {scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/versions
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} blueprintName Name of the blueprint definition.
		 * @return {PublishedBlueprintList} OK -- all published versions of blueprint definition retrieved.
		 */
		PublishedBlueprints_List(api_version: string, scope: string, blueprintName: string): Observable<PublishedBlueprintList> {
			return this.http.get<PublishedBlueprintList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprints/' + (blueprintName == null ? '' : encodeURIComponent(blueprintName)) + '/versions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Get a published version of a blueprint definition.
		 * Get {scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/versions/{versionId}
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} blueprintName Name of the blueprint definition.
		 * @param {string} versionId Version of the published blueprint definition.
		 * @return {PublishedBlueprint} OK -- published blueprint definition retrieved.
		 */
		PublishedBlueprints_Get(api_version: string, scope: string, blueprintName: string, versionId: string): Observable<PublishedBlueprint> {
			return this.http.get<PublishedBlueprint>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprints/' + (blueprintName == null ? '' : encodeURIComponent(blueprintName)) + '/versions/' + (versionId == null ? '' : encodeURIComponent(versionId)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Publish a new version of the blueprint definition with the latest artifacts. Published blueprint definitions are immutable.
		 * Put {scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/versions/{versionId}
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} blueprintName Name of the blueprint definition.
		 * @param {string} versionId Version of the published blueprint definition.
		 * @param {PublishedBlueprint} requestBody Published Blueprint to create or update.
		 * @return {void} 
		 */
		PublishedBlueprints_Create(api_version: string, scope: string, blueprintName: string, versionId: string, requestBody: PublishedBlueprint): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprints/' + (blueprintName == null ? '' : encodeURIComponent(blueprintName)) + '/versions/' + (versionId == null ? '' : encodeURIComponent(versionId)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a published version of a blueprint definition.
		 * Delete {scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/versions/{versionId}
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} blueprintName Name of the blueprint definition.
		 * @param {string} versionId Version of the published blueprint definition.
		 * @return {PublishedBlueprint} OK -- published version of blueprint definition deleted.
		 */
		PublishedBlueprints_Delete(api_version: string, scope: string, blueprintName: string, versionId: string): Observable<PublishedBlueprint> {
			return this.http.delete<PublishedBlueprint>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprints/' + (blueprintName == null ? '' : encodeURIComponent(blueprintName)) + '/versions/' + (versionId == null ? '' : encodeURIComponent(versionId)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * List artifacts for a version of a published blueprint definition.
		 * Get {scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/versions/{versionId}/artifacts
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} blueprintName Name of the blueprint definition.
		 * @param {string} versionId Version of the published blueprint definition.
		 * @return {ArtifactList} OK -- artifacts of a version of published blueprint definition retrieved.
		 */
		PublishedArtifacts_List(api_version: string, scope: string, blueprintName: string, versionId: string): Observable<ArtifactList> {
			return this.http.get<ArtifactList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprints/' + (blueprintName == null ? '' : encodeURIComponent(blueprintName)) + '/versions/' + (versionId == null ? '' : encodeURIComponent(versionId)) + '/artifacts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Get an artifact for a published blueprint definition.
		 * Get {scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/versions/{versionId}/artifacts/{artifactName}
		 * @param {string} api_version Client API Version.
		 * @param {string} scope The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
		 * @param {string} blueprintName Name of the blueprint definition.
		 * @param {string} versionId Version of the published blueprint definition.
		 * @param {string} artifactName Name of the blueprint artifact.
		 * @return {Artifact} OK -- artifact of published blueprint definition retrieved.
		 */
		PublishedArtifacts_Get(api_version: string, scope: string, blueprintName: string, versionId: string, artifactName: string): Observable<Artifact> {
			return this.http.get<Artifact>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Blueprint/blueprints/' + (blueprintName == null ? '' : encodeURIComponent(blueprintName)) + '/versions/' + (versionId == null ? '' : encodeURIComponent(versionId)) + '/artifacts/' + (artifactName == null ? '' : encodeURIComponent(artifactName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}
	}

}

