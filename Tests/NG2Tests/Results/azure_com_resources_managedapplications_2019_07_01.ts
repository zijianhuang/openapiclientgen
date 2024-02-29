import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Information about managed application. */
	export interface Application extends GenericResource {

		/** Identity for the resource. */
		identity?: Identity;

		/**
		 * The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
		 * Required
		 */
		kind: string;

		/** Plan for the managed application. */
		plan?: Plan;

		/**
		 * The managed application properties.
		 * Required
		 */
		properties: ApplicationProperties;
	}

	/** Information about managed application. */
	export interface ApplicationFormProperties extends GenericResourceFormProperties {

		/**
		 * The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
		 * Required
		 */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			managedBy: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[-\w\._,\(\)]+$')]),
		});

	}


	/** Managed application artifact. */
	export interface ApplicationArtifact {

		/**
		 * The managed application artifact name.
		 * Required
		 */
		name: ApplicationArtifactName;

		/**
		 * The managed application artifact type.
		 * Required
		 */
		type: ApplicationArtifactType;

		/**
		 * The managed application artifact blob uri.
		 * Required
		 */
		uri: string;
	}

	/** Managed application artifact. */
	export interface ApplicationArtifactFormProperties {

		/**
		 * The managed application artifact name.
		 * Required
		 */
		name: FormControl<ApplicationArtifactName | null | undefined>,

		/**
		 * The managed application artifact type.
		 * Required
		 */
		type: FormControl<ApplicationArtifactType | null | undefined>,

		/**
		 * The managed application artifact blob uri.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateApplicationArtifactFormGroup() {
		return new FormGroup<ApplicationArtifactFormProperties>({
			name: new FormControl<ApplicationArtifactName | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ApplicationArtifactType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ApplicationArtifactName { NotSpecified = 'NotSpecified', ViewDefinition = 'ViewDefinition', Authorizations = 'Authorizations', CustomRoleDefinition = 'CustomRoleDefinition' }

	export enum ApplicationArtifactType { NotSpecified = 'NotSpecified', Template = 'Template', Custom = 'Custom' }


	/** The managed application provider authorization. */
	export interface ApplicationAuthorization {

		/**
		 * The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the managed application resources.
		 * Required
		 */
		principalId: string;

		/**
		 * The provider's role definition identifier. This role will define all the permissions that the provider must have on the managed application's container resource group. This role definition cannot have permission to delete the resource group.
		 * Required
		 */
		roleDefinitionId: string;
	}

	/** The managed application provider authorization. */
	export interface ApplicationAuthorizationFormProperties {

		/**
		 * The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the managed application resources.
		 * Required
		 */
		principalId: FormControl<string | null | undefined>,

		/**
		 * The provider's role definition identifier. This role will define all the permissions that the provider must have on the managed application's container resource group. This role definition cannot have permission to delete the resource group.
		 * Required
		 */
		roleDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateApplicationAuthorizationFormGroup() {
		return new FormGroup<ApplicationAuthorizationFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Managed application billing details definition. */
	export interface ApplicationBillingDetailsDefinition {

		/** The managed application resource usage Id. */
		resourceUsageId?: string | null;
	}

	/** Managed application billing details definition. */
	export interface ApplicationBillingDetailsDefinitionFormProperties {

		/** The managed application resource usage Id. */
		resourceUsageId: FormControl<string | null | undefined>,
	}
	export function CreateApplicationBillingDetailsDefinitionFormGroup() {
		return new FormGroup<ApplicationBillingDetailsDefinitionFormProperties>({
			resourceUsageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The application client details to track the entity creating/updating the managed app resource. */
	export interface ApplicationClientDetails {

		/** The client application Id. */
		applicationId?: string | null;

		/** The client Oid. */
		oid?: string | null;

		/** The client Puid */
		puid?: string | null;
	}

	/** The application client details to track the entity creating/updating the managed app resource. */
	export interface ApplicationClientDetailsFormProperties {

		/** The client application Id. */
		applicationId: FormControl<string | null | undefined>,

		/** The client Oid. */
		oid: FormControl<string | null | undefined>,

		/** The client Puid */
		puid: FormControl<string | null | undefined>,
	}
	export function CreateApplicationClientDetailsFormGroup() {
		return new FormGroup<ApplicationClientDetailsFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined),
			oid: new FormControl<string | null | undefined>(undefined),
			puid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about managed application definition. */
	export interface ApplicationDefinition extends GenericResource {

		/**
		 * The managed application definition properties.
		 * Required
		 */
		properties: ApplicationDefinitionProperties;
	}

	/** Information about managed application definition. */
	export interface ApplicationDefinitionFormProperties extends GenericResourceFormProperties {
	}
	export function CreateApplicationDefinitionFormGroup() {
		return new FormGroup<ApplicationDefinitionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			managedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Application definition artifact. */
	export interface ApplicationDefinitionArtifact {

		/**
		 * The managed application artifact name.
		 * Required
		 */
		name: ApplicationDefinitionArtifactName;

		/**
		 * The managed application artifact type.
		 * Required
		 */
		type: ApplicationArtifactType;

		/**
		 * The managed application definition artifact blob uri.
		 * Required
		 */
		uri: string;
	}

	/** Application definition artifact. */
	export interface ApplicationDefinitionArtifactFormProperties {

		/**
		 * The managed application artifact name.
		 * Required
		 */
		name: FormControl<ApplicationDefinitionArtifactName | null | undefined>,

		/**
		 * The managed application artifact type.
		 * Required
		 */
		type: FormControl<ApplicationArtifactType | null | undefined>,

		/**
		 * The managed application definition artifact blob uri.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateApplicationDefinitionArtifactFormGroup() {
		return new FormGroup<ApplicationDefinitionArtifactFormProperties>({
			name: new FormControl<ApplicationDefinitionArtifactName | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ApplicationArtifactType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ApplicationDefinitionArtifactName { NotSpecified = 'NotSpecified', ApplicationResourceTemplate = 'ApplicationResourceTemplate', CreateUiDefinition = 'CreateUiDefinition', MainTemplateParameters = 'MainTemplateParameters' }


	/** List of managed application definitions. */
	export interface ApplicationDefinitionListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** The array of managed application definitions. */
		value?: Array<ApplicationDefinition>;
	}

	/** List of managed application definitions. */
	export interface ApplicationDefinitionListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateApplicationDefinitionListResultFormGroup() {
		return new FormGroup<ApplicationDefinitionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The managed application definition properties. */
	export interface ApplicationDefinitionProperties {

		/** The collection of managed application artifacts. The portal will use the files specified as artifacts to construct the user experience of creating a managed application from a managed application definition. */
		artifacts?: Array<ApplicationDefinitionArtifact>;

		/** The managed application provider authorizations. */
		authorizations?: Array<ApplicationAuthorization>;

		/** The createUiDefinition json for the backing template with Microsoft.Solutions/applications resource. It can be a JObject or well-formed JSON string. */
		createUiDefinition?: string | null;

		/** Managed application deployment policy. */
		deploymentPolicy?: ApplicationDeploymentPolicy;

		/** The managed application definition description. */
		description?: string | null;

		/** The managed application definition display name. */
		displayName?: string | null;

		/** A value indicating whether the package is enabled or not. */
		isEnabled?: boolean | null;

		/**
		 * The managed application lock level.
		 * Required
		 */
		lockLevel: ApplicationDefinitionPropertiesLockLevel;

		/** Managed application locking policy. */
		lockingPolicy?: ApplicationPackageLockingPolicyDefinition;

		/** The inline main template json which has resources to be provisioned. It can be a JObject or well-formed JSON string. */
		mainTemplate?: string | null;

		/** Managed application management policy. */
		managementPolicy?: ApplicationManagementPolicy;

		/** Managed application notification policy. */
		notificationPolicy?: ApplicationNotificationPolicy;

		/** The managed application definition package file Uri. Use this element */
		packageFileUri?: string | null;

		/** The managed application provider policies. */
		policies?: Array<ApplicationPolicy>;
	}

	/** The managed application definition properties. */
	export interface ApplicationDefinitionPropertiesFormProperties {

		/** The createUiDefinition json for the backing template with Microsoft.Solutions/applications resource. It can be a JObject or well-formed JSON string. */
		createUiDefinition: FormControl<string | null | undefined>,

		/** The managed application definition description. */
		description: FormControl<string | null | undefined>,

		/** The managed application definition display name. */
		displayName: FormControl<string | null | undefined>,

		/** A value indicating whether the package is enabled or not. */
		isEnabled: FormControl<boolean | null | undefined>,

		/**
		 * The managed application lock level.
		 * Required
		 */
		lockLevel: FormControl<ApplicationDefinitionPropertiesLockLevel | null | undefined>,

		/** The inline main template json which has resources to be provisioned. It can be a JObject or well-formed JSON string. */
		mainTemplate: FormControl<string | null | undefined>,

		/** The managed application definition package file Uri. Use this element */
		packageFileUri: FormControl<string | null | undefined>,
	}
	export function CreateApplicationDefinitionPropertiesFormGroup() {
		return new FormGroup<ApplicationDefinitionPropertiesFormProperties>({
			createUiDefinition: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
			lockLevel: new FormControl<ApplicationDefinitionPropertiesLockLevel | null | undefined>(undefined, [Validators.required]),
			mainTemplate: new FormControl<string | null | undefined>(undefined),
			packageFileUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationDefinitionPropertiesLockLevel { CanNotDelete = 'CanNotDelete', ReadOnly = 'ReadOnly', None = 'None' }


	/** Managed application policy. */
	export interface ApplicationPolicy {

		/** The policy name */
		name?: string | null;

		/** The policy parameters. */
		parameters?: string | null;

		/** The policy definition Id. */
		policyDefinitionId?: string | null;
	}

	/** Managed application policy. */
	export interface ApplicationPolicyFormProperties {

		/** The policy name */
		name: FormControl<string | null | undefined>,

		/** The policy parameters. */
		parameters: FormControl<string | null | undefined>,

		/** The policy definition Id. */
		policyDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPolicyFormGroup() {
		return new FormGroup<ApplicationPolicyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
			policyDefinitionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Managed application deployment policy. */
	export interface ApplicationDeploymentPolicy {

		/**
		 * The deployment mode.
		 * Required
		 */
		deploymentMode: ApplicationDeploymentPolicyDeploymentMode;
	}

	/** Managed application deployment policy. */
	export interface ApplicationDeploymentPolicyFormProperties {

		/**
		 * The deployment mode.
		 * Required
		 */
		deploymentMode: FormControl<ApplicationDeploymentPolicyDeploymentMode | null | undefined>,
	}
	export function CreateApplicationDeploymentPolicyFormGroup() {
		return new FormGroup<ApplicationDeploymentPolicyFormProperties>({
			deploymentMode: new FormControl<ApplicationDeploymentPolicyDeploymentMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ApplicationDeploymentPolicyDeploymentMode { NotSpecified = 'NotSpecified', Incremental = 'Incremental', Complete = 'Complete' }


	/** Managed application Jit access policy. */
	export interface ApplicationJitAccessPolicy {

		/**
		 * Whether the JIT access is enabled.
		 * Required
		 */
		jitAccessEnabled: boolean;

		/** The Jit approval mode. */
		jitApprovalMode?: ApplicationJitAccessPolicyJitApprovalMode | null;

		/** The JIT approvers */
		jitApprovers?: Array<JitApproverDefinition>;

		/** The maximum duration JIT access is granted. This is an ISO8601 time period value. */
		maximumJitAccessDuration?: string | null;
	}

	/** Managed application Jit access policy. */
	export interface ApplicationJitAccessPolicyFormProperties {

		/**
		 * Whether the JIT access is enabled.
		 * Required
		 */
		jitAccessEnabled: FormControl<boolean | null | undefined>,

		/** The Jit approval mode. */
		jitApprovalMode: FormControl<ApplicationJitAccessPolicyJitApprovalMode | null | undefined>,

		/** The maximum duration JIT access is granted. This is an ISO8601 time period value. */
		maximumJitAccessDuration: FormControl<string | null | undefined>,
	}
	export function CreateApplicationJitAccessPolicyFormGroup() {
		return new FormGroup<ApplicationJitAccessPolicyFormProperties>({
			jitAccessEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			jitApprovalMode: new FormControl<ApplicationJitAccessPolicyJitApprovalMode | null | undefined>(undefined),
			maximumJitAccessDuration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationJitAccessPolicyJitApprovalMode { NotSpecified = 'NotSpecified', AutoApprove = 'AutoApprove', ManualApprove = 'ManualApprove' }


	/** JIT approver definition. */
	export interface JitApproverDefinition {

		/** The approver display name. */
		displayName?: string | null;

		/**
		 * The approver service principal Id.
		 * Required
		 */
		id: string;

		/** The approver type. */
		type?: JitApproverDefinitionType | null;
	}

	/** JIT approver definition. */
	export interface JitApproverDefinitionFormProperties {

		/** The approver display name. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The approver service principal Id.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The approver type. */
		type: FormControl<JitApproverDefinitionType | null | undefined>,
	}
	export function CreateJitApproverDefinitionFormGroup() {
		return new FormGroup<JitApproverDefinitionFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<JitApproverDefinitionType | null | undefined>(undefined),
		});

	}

	export enum JitApproverDefinitionType { user = 'user', group = 'group' }


	/** List of managed applications. */
	export interface ApplicationListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** The array of managed applications. */
		value?: Array<Application>;
	}

	/** List of managed applications. */
	export interface ApplicationListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateApplicationListResultFormGroup() {
		return new FormGroup<ApplicationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The managed application lock level. */
	export enum ApplicationLockLevel { CanNotDelete = 'CanNotDelete', ReadOnly = 'ReadOnly', None = 'None' }


	/** The management mode. */
	export enum ApplicationManagementMode { NotSpecified = 'NotSpecified', Unmanaged = 'Unmanaged', Managed = 'Managed' }


	/** Managed application management policy. */
	export interface ApplicationManagementPolicy {

		/** The management mode. */
		mode?: ApplicationManagementMode | null;
	}

	/** Managed application management policy. */
	export interface ApplicationManagementPolicyFormProperties {

		/** The management mode. */
		mode: FormControl<ApplicationManagementMode | null | undefined>,
	}
	export function CreateApplicationManagementPolicyFormGroup() {
		return new FormGroup<ApplicationManagementPolicyFormProperties>({
			mode: new FormControl<ApplicationManagementMode | null | undefined>(undefined),
		});

	}


	/** Managed application notification endpoint. */
	export interface ApplicationNotificationEndpoint {

		/**
		 * The managed application notification endpoint uri.
		 * Required
		 */
		uri: string;
	}

	/** Managed application notification endpoint. */
	export interface ApplicationNotificationEndpointFormProperties {

		/**
		 * The managed application notification endpoint uri.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateApplicationNotificationEndpointFormGroup() {
		return new FormGroup<ApplicationNotificationEndpointFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Managed application notification policy. */
	export interface ApplicationNotificationPolicy {

		/**
		 * The managed application notification endpoint.
		 * Required
		 */
		notificationEndpoints: Array<ApplicationNotificationEndpoint>;
	}

	/** Managed application notification policy. */
	export interface ApplicationNotificationPolicyFormProperties {
	}
	export function CreateApplicationNotificationPolicyFormGroup() {
		return new FormGroup<ApplicationNotificationPolicyFormProperties>({
		});

	}


	/** The application package contact information. */
	export interface ApplicationPackageContact {

		/** The contact name. */
		contactName?: string | null;

		/**
		 * The contact email.
		 * Required
		 */
		email: string;

		/**
		 * The contact phone number.
		 * Required
		 */
		phone: string;
	}

	/** The application package contact information. */
	export interface ApplicationPackageContactFormProperties {

		/** The contact name. */
		contactName: FormControl<string | null | undefined>,

		/**
		 * The contact email.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * The contact phone number.
		 * Required
		 */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPackageContactFormGroup() {
		return new FormGroup<ApplicationPackageContactFormProperties>({
			contactName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Managed application locking policy. */
	export interface ApplicationPackageLockingPolicyDefinition {

		/** The deny assignment excluded actions. */
		allowedActions?: Array<string>;
	}

	/** Managed application locking policy. */
	export interface ApplicationPackageLockingPolicyDefinitionFormProperties {
	}
	export function CreateApplicationPackageLockingPolicyDefinitionFormGroup() {
		return new FormGroup<ApplicationPackageLockingPolicyDefinitionFormProperties>({
		});

	}


	/** The appliance package support URLs. */
	export interface ApplicationPackageSupportUrls {

		/** The government cloud support URL. */
		governmentCloud?: string | null;

		/** The public azure support URL. */
		publicAzure?: string | null;
	}

	/** The appliance package support URLs. */
	export interface ApplicationPackageSupportUrlsFormProperties {

		/** The government cloud support URL. */
		governmentCloud: FormControl<string | null | undefined>,

		/** The public azure support URL. */
		publicAzure: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPackageSupportUrlsFormGroup() {
		return new FormGroup<ApplicationPackageSupportUrlsFormProperties>({
			governmentCloud: new FormControl<string | null | undefined>(undefined),
			publicAzure: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about managed application. */
	export interface ApplicationPatchable extends GenericResource {

		/** Identity for the resource. */
		identity?: Identity;

		/** The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog. */
		kind?: string | null;

		/** Plan for the managed application. */
		plan?: PlanPatchable;

		/** The managed application properties. */
		properties?: ApplicationPropertiesPatchable;
	}

	/** Information about managed application. */
	export interface ApplicationPatchableFormProperties extends GenericResourceFormProperties {

		/** The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPatchableFormGroup() {
		return new FormGroup<ApplicationPatchableFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			managedBy: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-\w\._,\(\)]+$')]),
		});

	}


	/** The managed application properties. */
	export interface ApplicationProperties {

		/** The fully qualified path of managed application definition Id. */
		applicationDefinitionId?: string | null;

		/** The collection of managed application artifacts. */
		artifacts?: Array<ApplicationArtifact>;

		/** The  read-only authorizations property that is retrieved from the application package. */
		authorizations?: Array<ApplicationAuthorization>;

		/** Managed application billing details definition. */
		billingDetails?: ApplicationBillingDetailsDefinition;

		/** The application client details to track the entity creating/updating the managed app resource. */
		createdBy?: ApplicationClientDetails;

		/** The application package contact information. */
		customerSupport?: ApplicationPackageContact;

		/** Managed application Jit access policy. */
		jitAccessPolicy?: ApplicationJitAccessPolicy;

		/** The managed resource group Id. */
		managedResourceGroupId?: string | null;

		/** The management mode. */
		managementMode?: ApplicationManagementMode | null;

		/** Name and value pairs that define the managed application outputs. */
		outputs?: string | null;

		/** Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string. */
		parameters?: string | null;

		/** Provisioning status of the managed application. */
		provisioningState?: ApplicationPropertiesProvisioningState | null;

		/** The publisher tenant Id. */
		publisherTenantId?: string | null;

		/** The appliance package support URLs. */
		supportUrls?: ApplicationPackageSupportUrls;

		/** The application client details to track the entity creating/updating the managed app resource. */
		updatedBy?: ApplicationClientDetails;
	}

	/** The managed application properties. */
	export interface ApplicationPropertiesFormProperties {

		/** The fully qualified path of managed application definition Id. */
		applicationDefinitionId: FormControl<string | null | undefined>,

		/** The managed resource group Id. */
		managedResourceGroupId: FormControl<string | null | undefined>,

		/** The management mode. */
		managementMode: FormControl<ApplicationManagementMode | null | undefined>,

		/** Name and value pairs that define the managed application outputs. */
		outputs: FormControl<string | null | undefined>,

		/** Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string. */
		parameters: FormControl<string | null | undefined>,

		/** Provisioning status of the managed application. */
		provisioningState: FormControl<ApplicationPropertiesProvisioningState | null | undefined>,

		/** The publisher tenant Id. */
		publisherTenantId: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPropertiesFormGroup() {
		return new FormGroup<ApplicationPropertiesFormProperties>({
			applicationDefinitionId: new FormControl<string | null | undefined>(undefined),
			managedResourceGroupId: new FormControl<string | null | undefined>(undefined),
			managementMode: new FormControl<ApplicationManagementMode | null | undefined>(undefined),
			outputs: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ApplicationPropertiesProvisioningState | null | undefined>(undefined),
			publisherTenantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationPropertiesProvisioningState { NotSpecified = 'NotSpecified', Accepted = 'Accepted', Running = 'Running', Ready = 'Ready', Creating = 'Creating', Created = 'Created', Deleting = 'Deleting', Deleted = 'Deleted', Canceled = 'Canceled', Failed = 'Failed', Succeeded = 'Succeeded', Updating = 'Updating' }


	/** The managed application properties. */
	export interface ApplicationPropertiesPatchable {

		/** The fully qualified path of managed application definition Id. */
		applicationDefinitionId?: string | null;

		/** The managed resource group Id. */
		managedResourceGroupId?: string | null;

		/** Name and value pairs that define the managed application outputs. */
		outputs?: string | null;

		/** Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string. */
		parameters?: string | null;

		/** Provisioning status of the managed application. */
		provisioningState?: ApplicationPropertiesProvisioningState | null;
	}

	/** The managed application properties. */
	export interface ApplicationPropertiesPatchableFormProperties {

		/** The fully qualified path of managed application definition Id. */
		applicationDefinitionId: FormControl<string | null | undefined>,

		/** The managed resource group Id. */
		managedResourceGroupId: FormControl<string | null | undefined>,

		/** Name and value pairs that define the managed application outputs. */
		outputs: FormControl<string | null | undefined>,

		/** Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string. */
		parameters: FormControl<string | null | undefined>,

		/** Provisioning status of the managed application. */
		provisioningState: FormControl<ApplicationPropertiesProvisioningState | null | undefined>,
	}
	export function CreateApplicationPropertiesPatchableFormGroup() {
		return new FormGroup<ApplicationPropertiesPatchableFormProperties>({
			applicationDefinitionId: new FormControl<string | null | undefined>(undefined),
			managedResourceGroupId: new FormControl<string | null | undefined>(undefined),
			outputs: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ApplicationPropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** The deployment mode. */
	export enum DeploymentMode { NotSpecified = 'NotSpecified', Incremental = 'Incremental', Complete = 'Complete' }


	/** Error response indicates managed application is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponse {

		/** Error code. */
		errorCode?: string | null;

		/** Error message indicating why the operation failed. */
		errorMessage?: string | null;

		/** Http status code. */
		httpStatus?: string | null;
	}

	/** Error response indicates managed application is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponseFormProperties {

		/** Error code. */
		errorCode: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		errorMessage: FormControl<string | null | undefined>,

		/** Http status code. */
		httpStatus: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			httpStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource information. */
	export interface GenericResource extends Resource {

		/** ID of the resource that manages this resource. */
		managedBy?: string | null;

		/** SKU for the resource. */
		sku?: Sku;
	}

	/** Resource information. */
	export interface GenericResourceFormProperties extends ResourceFormProperties {

		/** ID of the resource that manages this resource. */
		managedBy: FormControl<string | null | undefined>,
	}
	export function CreateGenericResourceFormGroup() {
		return new FormGroup<GenericResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			managedBy: new FormControl<string | null | undefined>(undefined),
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
	}

	/** Identity for the resource. */
	export interface IdentityFormProperties {

		/** The principal ID of resource identity. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant ID of resource. */
		tenantId: FormControl<string | null | undefined>,

		/** The identity type. */
		type: FormControl<IdentityType | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IdentityType | null | undefined>(undefined),
		});

	}

	export enum IdentityType { SystemAssigned = 'SystemAssigned' }


	/** The Jit approval mode. */
	export enum JitApprovalMode { NotSpecified = 'NotSpecified', AutoApprove = 'AutoApprove', ManualApprove = 'ManualApprove' }


	/** The JIT authorization policies. */
	export interface JitAuthorizationPolicies {

		/**
		 * The the principal id that will be granted JIT access.
		 * Required
		 */
		principalId: string;

		/**
		 * The role definition id that will be granted to the Principal.
		 * Required
		 */
		roleDefinitionId: string;
	}

	/** The JIT authorization policies. */
	export interface JitAuthorizationPoliciesFormProperties {

		/**
		 * The the principal id that will be granted JIT access.
		 * Required
		 */
		principalId: FormControl<string | null | undefined>,

		/**
		 * The role definition id that will be granted to the Principal.
		 * Required
		 */
		roleDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateJitAuthorizationPoliciesFormGroup() {
		return new FormGroup<JitAuthorizationPoliciesFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about JIT request definition. */
	export interface JitRequestDefinition extends Resource {

		/** Information about JIT request properties */
		properties?: JitRequestProperties;
	}

	/** Information about JIT request definition. */
	export interface JitRequestDefinitionFormProperties extends ResourceFormProperties {
	}
	export function CreateJitRequestDefinitionFormGroup() {
		return new FormGroup<JitRequestDefinitionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of JIT requests. */
	export interface JitRequestDefinitionListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** The array of Jit request definition. */
		value?: Array<JitRequestDefinition>;
	}

	/** List of JIT requests. */
	export interface JitRequestDefinitionListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJitRequestDefinitionListResultFormGroup() {
		return new FormGroup<JitRequestDefinitionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about JIT request. */
	export interface JitRequestPatchable {

		/** Jit request tags */
		tags?: {[id: string]: string };
	}

	/** Information about JIT request. */
	export interface JitRequestPatchableFormProperties {

		/** Jit request tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateJitRequestPatchableFormGroup() {
		return new FormGroup<JitRequestPatchableFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Information about JIT request properties */
	export interface JitRequestProperties {

		/**
		 * The parent application id.
		 * Required
		 */
		applicationResourceId: string;

		/** The application client details to track the entity creating/updating the managed app resource. */
		createdBy?: ApplicationClientDetails;

		/**
		 * The JIT authorization policies.
		 * Required
		 */
		jitAuthorizationPolicies: Array<JitAuthorizationPolicies>;

		/** The JIT request state. */
		jitRequestState?: JitRequestPropertiesJitRequestState | null;

		/**
		 * The JIT scheduling policies.
		 * Required
		 */
		jitSchedulingPolicy: JitSchedulingPolicy;

		/** Provisioning status of the managed application. */
		provisioningState?: ApplicationPropertiesProvisioningState | null;

		/** The publisher tenant id. */
		publisherTenantId?: string | null;

		/** The application client details to track the entity creating/updating the managed app resource. */
		updatedBy?: ApplicationClientDetails;
	}

	/** Information about JIT request properties */
	export interface JitRequestPropertiesFormProperties {

		/**
		 * The parent application id.
		 * Required
		 */
		applicationResourceId: FormControl<string | null | undefined>,

		/** The JIT request state. */
		jitRequestState: FormControl<JitRequestPropertiesJitRequestState | null | undefined>,

		/** Provisioning status of the managed application. */
		provisioningState: FormControl<ApplicationPropertiesProvisioningState | null | undefined>,

		/** The publisher tenant id. */
		publisherTenantId: FormControl<string | null | undefined>,
	}
	export function CreateJitRequestPropertiesFormGroup() {
		return new FormGroup<JitRequestPropertiesFormProperties>({
			applicationResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jitRequestState: new FormControl<JitRequestPropertiesJitRequestState | null | undefined>(undefined),
			provisioningState: new FormControl<ApplicationPropertiesProvisioningState | null | undefined>(undefined),
			publisherTenantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JitRequestPropertiesJitRequestState { NotSpecified = 'NotSpecified', Pending = 'Pending', Approved = 'Approved', Denied = 'Denied', Failed = 'Failed', Canceled = 'Canceled', Expired = 'Expired', Timeout = 'Timeout' }


	/** The JIT request state. */
	export enum JitRequestState { NotSpecified = 'NotSpecified', Pending = 'Pending', Approved = 'Approved', Denied = 'Denied', Failed = 'Failed', Canceled = 'Canceled', Expired = 'Expired', Timeout = 'Timeout' }


	/** The JIT scheduling policies. */
	export interface JitSchedulingPolicy {

		/** Required */
		duration: string;

		/**
		 * The start time of the request.
		 * Required
		 */
		startTime: Date;

		/**
		 * The JIT request scheduling type.
		 * Required
		 */
		type: JitSchedulingPolicyType;
	}

	/** The JIT scheduling policies. */
	export interface JitSchedulingPolicyFormProperties {

		/** Required */
		duration: FormControl<string | null | undefined>,

		/**
		 * The start time of the request.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The JIT request scheduling type.
		 * Required
		 */
		type: FormControl<JitSchedulingPolicyType | null | undefined>,
	}
	export function CreateJitSchedulingPolicyFormGroup() {
		return new FormGroup<JitSchedulingPolicyFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<JitSchedulingPolicyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JitSchedulingPolicyType { NotSpecified = 'NotSpecified', Once = 'Once', Recurring = 'Recurring' }


	/** The JIT request scheduling type. */
	export enum JitSchedulingType { NotSpecified = 'NotSpecified', Once = 'Once', Recurring = 'Recurring' }


	/** Microsoft.Solutions operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** Microsoft.Solutions operation */
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


	/** Result of the request to list Microsoft.Solutions operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Microsoft.Solutions operations. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Microsoft.Solutions operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Plan for the managed application. */
	export interface Plan {

		/**
		 * The plan name.
		 * Required
		 */
		name: string;

		/**
		 * The product code.
		 * Required
		 */
		product: string;

		/** The promotion code. */
		promotionCode?: string | null;

		/**
		 * The publisher ID.
		 * Required
		 */
		publisher: string;

		/**
		 * The plan's version.
		 * Required
		 */
		version: string;
	}

	/** Plan for the managed application. */
	export interface PlanFormProperties {

		/**
		 * The plan name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The product code.
		 * Required
		 */
		product: FormControl<string | null | undefined>,

		/** The promotion code. */
		promotionCode: FormControl<string | null | undefined>,

		/**
		 * The publisher ID.
		 * Required
		 */
		publisher: FormControl<string | null | undefined>,

		/**
		 * The plan's version.
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePlanFormGroup() {
		return new FormGroup<PlanFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			promotionCode: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Plan for the managed application. */
	export interface PlanPatchable {

		/** The plan name. */
		name?: string | null;

		/** The product code. */
		product?: string | null;

		/** The promotion code. */
		promotionCode?: string | null;

		/** The publisher ID. */
		publisher?: string | null;

		/** The plan's version. */
		version?: string | null;
	}

	/** Plan for the managed application. */
	export interface PlanPatchableFormProperties {

		/** The plan name. */
		name: FormControl<string | null | undefined>,

		/** The product code. */
		product: FormControl<string | null | undefined>,

		/** The promotion code. */
		promotionCode: FormControl<string | null | undefined>,

		/** The publisher ID. */
		publisher: FormControl<string | null | undefined>,

		/** The plan's version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePlanPatchableFormGroup() {
		return new FormGroup<PlanPatchableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			product: new FormControl<string | null | undefined>(undefined),
			promotionCode: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provisioning status of the managed application. */
	export enum ProvisioningState { NotSpecified = 'NotSpecified', Accepted = 'Accepted', Running = 'Running', Ready = 'Ready', Creating = 'Creating', Created = 'Created', Deleting = 'Deleting', Deleted = 'Deleted', Canceled = 'Canceled', Failed = 'Failed', Succeeded = 'Succeeded', Updating = 'Updating' }


	/** Resource information. */
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

	/** Resource information. */
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

		/**
		 * The SKU name.
		 * Required
		 */
		name: string;

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

		/**
		 * The SKU name.
		 * Required
		 */
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
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Microsoft.Solutions REST API operations.
		 * Get providers/Microsoft.Solutions/operations
		 * @param {string} api_version The API version to use for this operation.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		ListOperations(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Solutions/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the applications within a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Solutions/applications
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ApplicationListResult} OK - Returns an array of applications.
		 */
		Applications_ListBySubscription(api_version: string, subscriptionId: string): Observable<ApplicationListResult> {
			return this.http.get<ApplicationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Solutions/applications?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves all JIT requests within the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Solutions/jitRequests
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {JitRequestDefinitionListResult} OK - Returns an array of JIT requests.
		 */
		JitRequests_ListBySubscription(api_version: string, subscriptionId: string): Observable<JitRequestDefinitionListResult> {
			return this.http.get<JitRequestDefinitionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Solutions/jitRequests?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the managed application definitions in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ApplicationDefinitionListResult} OK - Returns an array of managed application definitions.
		 */
		ApplicationDefinitions_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<ApplicationDefinitionListResult> {
			return this.http.get<ApplicationDefinitionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Solutions/applicationDefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the managed application definition.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} applicationDefinitionName The name of the managed application definition.
		 *     Min length: 3    Max length: 64
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ApplicationDefinition} OK - Returns the managed application definition.
		 */
		ApplicationDefinitions_Get(resourceGroupName: string, applicationDefinitionName: string, api_version: string, subscriptionId: string): Observable<ApplicationDefinition> {
			return this.http.get<ApplicationDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Solutions/applicationDefinitions/' + (applicationDefinitionName == null ? '' : encodeURIComponent(applicationDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new managed application definition.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} applicationDefinitionName The name of the managed application definition.
		 *     Min length: 3    Max length: 64
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ApplicationDefinition} requestBody Parameters supplied to the create or update an managed application definition.
		 * @return {ApplicationDefinition} OK - Returns information about the managed application definition, including provisioning status.
		 */
		ApplicationDefinitions_CreateOrUpdate(resourceGroupName: string, applicationDefinitionName: string, api_version: string, subscriptionId: string, requestBody: ApplicationDefinition): Observable<ApplicationDefinition> {
			return this.http.put<ApplicationDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Solutions/applicationDefinitions/' + (applicationDefinitionName == null ? '' : encodeURIComponent(applicationDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the managed application definition.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} applicationDefinitionName The name of the managed application definition to delete.
		 *     Min length: 3    Max length: 64
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} OK
		 */
		ApplicationDefinitions_Delete(resourceGroupName: string, applicationDefinitionName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Solutions/applicationDefinitions/' + (applicationDefinitionName == null ? '' : encodeURIComponent(applicationDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the applications within a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ApplicationListResult} OK - Returns an array of applications.
		 */
		Applications_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<ApplicationListResult> {
			return this.http.get<ApplicationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Solutions/applications&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the managed application.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} applicationName The name of the managed application.
		 *     Min length: 3    Max length: 64
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {Application} OK - Returns the managed application.
		 */
		Applications_Get(resourceGroupName: string, applicationName: string, api_version: string, subscriptionId: string): Observable<Application> {
			return this.http.get<Application>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Solutions/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new managed application.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} applicationName The name of the managed application.
		 *     Min length: 3    Max length: 64
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {Application} requestBody Parameters supplied to the create or update a managed application.
		 * @return {Application} Created - Returns information about the managed application, including provisioning status.
		 */
		Applications_CreateOrUpdate(resourceGroupName: string, applicationName: string, api_version: string, subscriptionId: string, requestBody: Application): Observable<Application> {
			return this.http.put<Application>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Solutions/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the managed application.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} applicationName The name of the managed application.
		 *     Min length: 3    Max length: 64
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} 
		 */
		Applications_Delete(resourceGroupName: string, applicationName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Solutions/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing managed application. The only value that can be updated via PATCH currently is the tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} applicationName The name of the managed application.
		 *     Min length: 3    Max length: 64
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {Application} requestBody Parameters supplied to update an existing managed application.
		 * @return {Application} Created - Returns information about the managed application, including provisioning status.
		 */
		Applications_Update(resourceGroupName: string, applicationName: string, api_version: string, subscriptionId: string, requestBody: Application): Observable<Application> {
			return this.http.patch<Application>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Solutions/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Refresh Permissions for application.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applications/{applicationName}/refreshPermissions
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} applicationName The name of the managed application.
		 *     Min length: 3    Max length: 64
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} 
		 */
		Applications_RefreshPermissions(resourceGroupName: string, applicationName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Solutions/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '/refreshPermissions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves all JIT requests within the resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {JitRequestDefinitionListResult} OK - Returns an array of JIT requests.
		 */
		JitRequests_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<JitRequestDefinitionListResult> {
			return this.http.get<JitRequestDefinitionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Solutions/jitRequests&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the JIT request.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests/{jitRequestName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} jitRequestName The name of the JIT request.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {JitRequestDefinition} OK - Returns the JIT request
		 */
		JitRequests_Get(resourceGroupName: string, jitRequestName: string, api_version: string, subscriptionId: string): Observable<JitRequestDefinition> {
			return this.http.get<JitRequestDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Solutions/jitRequests/' + (jitRequestName == null ? '' : encodeURIComponent(jitRequestName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the JIT request.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests/{jitRequestName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} jitRequestName The name of the JIT request.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {JitRequestDefinition} requestBody Parameters supplied to the update JIT request.
		 * @return {JitRequestDefinition} Ok - Returns information about existing JIT request.
		 */
		JitRequests_CreateOrUpdate(resourceGroupName: string, jitRequestName: string, api_version: string, subscriptionId: string, requestBody: JitRequestDefinition): Observable<JitRequestDefinition> {
			return this.http.put<JitRequestDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Solutions/jitRequests/' + (jitRequestName == null ? '' : encodeURIComponent(jitRequestName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the JIT request.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests/{jitRequestName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} jitRequestName The name of the JIT request.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} OK
		 */
		JitRequests_Delete(resourceGroupName: string, jitRequestName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Solutions/jitRequests/' + (jitRequestName == null ? '' : encodeURIComponent(jitRequestName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the JIT request.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/jitRequests/{jitRequestName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} jitRequestName The name of the JIT request.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {JitRequestPatchable} requestBody Parameters supplied to the update JIT request.
		 * @return {JitRequestDefinition} Ok - Returns information about the JIT request.
		 */
		JitRequests_Update(resourceGroupName: string, jitRequestName: string, api_version: string, subscriptionId: string, requestBody: JitRequestPatchable): Observable<JitRequestDefinition> {
			return this.http.patch<JitRequestDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Solutions/jitRequests/' + (jitRequestName == null ? '' : encodeURIComponent(jitRequestName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the managed application.
		 * Get {applicationId}
		 * @param {string} applicationId The fully qualified ID of the managed application, including the managed application name and the managed application resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
		 * @param {string} api_version The API version to use for this operation.
		 * @return {Application} OK - Returns the managed application.
		 */
		Applications_GetById(applicationId: string, api_version: string): Observable<Application> {
			return this.http.get<Application>(this.baseUri + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Creates a new managed application.
		 * Put {applicationId}
		 * @param {string} applicationId The fully qualified ID of the managed application, including the managed application name and the managed application resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
		 * @param {string} api_version The API version to use for this operation.
		 * @param {Application} requestBody Parameters supplied to the create or update a managed application.
		 * @return {Application} Created - Returns information about the managed application, including provisioning status.
		 */
		Applications_CreateOrUpdateById(applicationId: string, api_version: string, requestBody: Application): Observable<Application> {
			return this.http.put<Application>(this.baseUri + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the managed application.
		 * Delete {applicationId}
		 * @param {string} applicationId The fully qualified ID of the managed application, including the managed application name and the managed application resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} 
		 */
		Applications_DeleteById(applicationId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing managed application. The only value that can be updated via PATCH currently is the tags.
		 * Patch {applicationId}
		 * @param {string} applicationId The fully qualified ID of the managed application, including the managed application name and the managed application resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
		 * @param {string} api_version The API version to use for this operation.
		 * @param {Application} requestBody Parameters supplied to update an existing managed application.
		 * @return {Application} Created - Returns information about the managed application, including provisioning status.
		 */
		Applications_UpdateById(applicationId: string, api_version: string, requestBody: Application): Observable<Application> {
			return this.http.patch<Application>(this.baseUri + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

