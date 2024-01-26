import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Additional key names that will be used to identify the target of the policy value. */
	export interface GoogleChromePolicyVersionsV1AdditionalTargetKeyName {

		/** Key name. */
		key?: string | null;

		/** Key description. */
		keyDescription?: string | null;
	}

	/** Additional key names that will be used to identify the target of the policy value. */
	export interface GoogleChromePolicyVersionsV1AdditionalTargetKeyNameFormProperties {

		/** Key name. */
		key: FormControl<string | null | undefined>,

		/** Key description. */
		keyDescription: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1AdditionalTargetKeyNameFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1AdditionalTargetKeyNameFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			keyDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for specifying that multiple policy values will be deleted. */
	export interface GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest {

		/** List of policies that will be deleted as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to a group resource. 3. All `policyTargetKey` values must have the same `app_id` key name in the `additionalTargetKeys`. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair. */
		requests?: Array<GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest>;
	}

	/** Request message for specifying that multiple policy values will be deleted. */
	export interface GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequestFormProperties {
	}
	export function CreateGoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequestFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequestFormProperties>({
		});

	}


	/** Request parameters for deleting the policy value of a specific group target. */
	export interface GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest {

		/** The fully qualified name of the policy schema that is being inherited. */
		policySchema?: string | null;

		/** The key used to identify the target on which the policy will be applied. */
		policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
	}

	/** Request parameters for deleting the policy value of a specific group target. */
	export interface GoogleChromePolicyVersionsV1DeleteGroupPolicyRequestFormProperties {

		/** The fully qualified name of the policy schema that is being inherited. */
		policySchema: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1DeleteGroupPolicyRequestFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1DeleteGroupPolicyRequestFormProperties>({
			policySchema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The key used to identify the target on which the policy will be applied. */
	export interface GoogleChromePolicyVersionsV1PolicyTargetKey {

		/** Map containing the additional target key name and value pairs used to further identify the target of the policy. */
		additionalTargetKeys?: {[id: string]: string };

		/** The target resource on which this policy is applied. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}") * Group ("groups/{group_id}") */
		targetResource?: string | null;
	}

	/** The key used to identify the target on which the policy will be applied. */
	export interface GoogleChromePolicyVersionsV1PolicyTargetKeyFormProperties {

		/** Map containing the additional target key name and value pairs used to further identify the target of the policy. */
		additionalTargetKeys: FormControl<{[id: string]: string } | null | undefined>,

		/** The target resource on which this policy is applied. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}") * Group ("groups/{group_id}") */
		targetResource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1PolicyTargetKeyFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1PolicyTargetKeyFormProperties>({
			additionalTargetKeys: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			targetResource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for specifying that multiple policy values inherit their value from their parents. */
	export interface GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest {

		/** List of policies that have to inherit their values as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to an org unit resource. 3. All `policyTargetKey` values must have the same key names in the ` additionalTargetKeys`. This also means if one of the targets has an empty `additionalTargetKeys` map, all of the targets must have an empty `additionalTargetKeys` map. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair. */
		requests?: Array<GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest>;
	}

	/** Request message for specifying that multiple policy values inherit their value from their parents. */
	export interface GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequestFormProperties {
	}
	export function CreateGoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequestFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequestFormProperties>({
		});

	}


	/** Request parameters for inheriting policy value of a specific org unit target from the policy value of its parent org unit. */
	export interface GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest {

		/** The fully qualified name of the policy schema that is being inherited. */
		policySchema?: string | null;

		/** The key used to identify the target on which the policy will be applied. */
		policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
	}

	/** Request parameters for inheriting policy value of a specific org unit target from the policy value of its parent org unit. */
	export interface GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequestFormProperties {

		/** The fully qualified name of the policy schema that is being inherited. */
		policySchema: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequestFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequestFormProperties>({
			policySchema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for modifying multiple policy values for a specific group-based target. */
	export interface GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest {

		/** List of policies to modify as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to a group resource. 3. All `policyTargetKey` values must have the same `app_id` key name in the `additionalTargetKeys`. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair. */
		requests?: Array<GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest>;
	}

	/** Request message for modifying multiple policy values for a specific group-based target. */
	export interface GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequestFormProperties {
	}
	export function CreateGoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequestFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequestFormProperties>({
		});

	}


	/** Request parameters for modifying a policy value for a specific group target. */
	export interface GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest {

		/** The key used to identify the target on which the policy will be applied. */
		policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;

		/** A particular value for a policy managed by the service. */
		policyValue?: GoogleChromePolicyVersionsV1PolicyValue;

		/** Required. Policy fields to update. Only fields in this mask will be updated; other fields in `policy_value` will be ignored (even if they have values). If a field is in this list it must have a value in 'policy_value'. */
		updateMask?: string | null;
	}

	/** Request parameters for modifying a policy value for a specific group target. */
	export interface GoogleChromePolicyVersionsV1ModifyGroupPolicyRequestFormProperties {

		/** Required. Policy fields to update. Only fields in this mask will be updated; other fields in `policy_value` will be ignored (even if they have values). If a field is in this list it must have a value in 'policy_value'. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1ModifyGroupPolicyRequestFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1ModifyGroupPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A particular value for a policy managed by the service. */
	export interface GoogleChromePolicyVersionsV1PolicyValue {

		/** The fully qualified name of the policy schema associated with this policy. */
		policySchema?: string | null;

		/** The value of the policy that is compatible with the schema that it is associated with. */
		value?: {[id: string]: any };
	}

	/** A particular value for a policy managed by the service. */
	export interface GoogleChromePolicyVersionsV1PolicyValueFormProperties {

		/** The fully qualified name of the policy schema associated with this policy. */
		policySchema: FormControl<string | null | undefined>,

		/** The value of the policy that is compatible with the schema that it is associated with. */
		value: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1PolicyValueFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1PolicyValueFormProperties>({
			policySchema: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Request message for modifying multiple policy values for a specific target. */
	export interface GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest {

		/** List of policies to modify as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to an org unit resource. 3. All `policyTargetKey` values must have the same key names in the ` additionalTargetKeys`. This also means if one of the targets has an empty `additionalTargetKeys` map, all of the targets must have an empty `additionalTargetKeys` map. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair. */
		requests?: Array<GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest>;
	}

	/** Request message for modifying multiple policy values for a specific target. */
	export interface GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequestFormProperties {
	}
	export function CreateGoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequestFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequestFormProperties>({
		});

	}


	/** Request parameters for modifying a policy value for a specific org unit target. */
	export interface GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest {

		/** The key used to identify the target on which the policy will be applied. */
		policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;

		/** A particular value for a policy managed by the service. */
		policyValue?: GoogleChromePolicyVersionsV1PolicyValue;

		/** Required. Policy fields to update. Only fields in this mask will be updated; other fields in `policy_value` will be ignored (even if they have values). If a field is in this list it must have a value in 'policy_value'. */
		updateMask?: string | null;
	}

	/** Request parameters for modifying a policy value for a specific org unit target. */
	export interface GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequestFormProperties {

		/** Required. Policy fields to update. Only fields in this mask will be updated; other fields in `policy_value` will be ignored (even if they have values). If a field is in this list it must have a value in 'policy_value'. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequestFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error information for removing of a specific certificate on a specific target. A reference to a certificate. */
	export interface GoogleChromePolicyVersionsV1CertificateReference {

		/** Output only. The name of the referencing network. */
		network?: string | null;

		/** Output only. The obfuscated id of the org unit the referencing network is in. */
		orgUnitId?: string | null;
	}

	/** Error information for removing of a specific certificate on a specific target. A reference to a certificate. */
	export interface GoogleChromePolicyVersionsV1CertificateReferenceFormProperties {

		/** Output only. The name of the referencing network. */
		network: FormControl<string | null | undefined>,

		/** Output only. The obfuscated id of the org unit the referencing network is in. */
		orgUnitId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1CertificateReferenceFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1CertificateReferenceFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
			orgUnitId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request object for creating a certificate. */
	export interface GoogleChromePolicyVersionsV1DefineCertificateRequest {

		/** Optional. The optional name of the certificate. If not specified, the certificate issuer will be used as the name. */
		ceritificateName?: string | null;

		/** Required. The raw contents of the .PEM, .CRT, or .CER file. */
		certificate?: string | null;

		/** Optional. Certificate settings within the chrome.networks.certificates namespace. */
		settings?: Array<GoogleChromePolicyVersionsV1NetworkSetting>;

		/** Required. The target resource on which this certificate is applied. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}") */
		targetResource?: string | null;
	}

	/** Request object for creating a certificate. */
	export interface GoogleChromePolicyVersionsV1DefineCertificateRequestFormProperties {

		/** Optional. The optional name of the certificate. If not specified, the certificate issuer will be used as the name. */
		ceritificateName: FormControl<string | null | undefined>,

		/** Required. The raw contents of the .PEM, .CRT, or .CER file. */
		certificate: FormControl<string | null | undefined>,

		/** Required. The target resource on which this certificate is applied. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}") */
		targetResource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1DefineCertificateRequestFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1DefineCertificateRequestFormProperties>({
			ceritificateName: new FormControl<string | null | undefined>(undefined),
			certificate: new FormControl<string | null | undefined>(undefined),
			targetResource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A network setting contains network configurations. */
	export interface GoogleChromePolicyVersionsV1NetworkSetting {

		/** The fully qualified name of the network setting. */
		policySchema?: string | null;

		/** The value of the network setting. */
		value?: {[id: string]: any };
	}

	/** A network setting contains network configurations. */
	export interface GoogleChromePolicyVersionsV1NetworkSettingFormProperties {

		/** The fully qualified name of the network setting. */
		policySchema: FormControl<string | null | undefined>,

		/** The value of the network setting. */
		value: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1NetworkSettingFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1NetworkSettingFormProperties>({
			policySchema: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Response object for creating a certificate. */
	export interface GoogleChromePolicyVersionsV1DefineCertificateResponse {

		/** The guid of the certificate created by the action. */
		networkId?: string | null;

		/** the affiliated settings of the certificate (NOT IMPLEMENTED) */
		settings?: Array<GoogleChromePolicyVersionsV1NetworkSetting>;

		/** the resource at which the certificate is defined. */
		targetResource?: string | null;
	}

	/** Response object for creating a certificate. */
	export interface GoogleChromePolicyVersionsV1DefineCertificateResponseFormProperties {

		/** The guid of the certificate created by the action. */
		networkId: FormControl<string | null | undefined>,

		/** the resource at which the certificate is defined. */
		targetResource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1DefineCertificateResponseFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1DefineCertificateResponseFormProperties>({
			networkId: new FormControl<string | null | undefined>(undefined),
			targetResource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request object for creating a new network. */
	export interface GoogleChromePolicyVersionsV1DefineNetworkRequest {

		/** Required. Name of the new created network. */
		name?: string | null;

		/** Required. Detailed network settings. */
		settings?: Array<GoogleChromePolicyVersionsV1NetworkSetting>;

		/** Required. The target resource on which this new network will be defined. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}") */
		targetResource?: string | null;
	}

	/** Request object for creating a new network. */
	export interface GoogleChromePolicyVersionsV1DefineNetworkRequestFormProperties {

		/** Required. Name of the new created network. */
		name: FormControl<string | null | undefined>,

		/** Required. The target resource on which this new network will be defined. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}") */
		targetResource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1DefineNetworkRequestFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1DefineNetworkRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			targetResource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response object for creating a network. */
	export interface GoogleChromePolicyVersionsV1DefineNetworkResponse {

		/** Network ID of the new created network. */
		networkId?: string | null;

		/** Detailed network settings of the new created network */
		settings?: Array<GoogleChromePolicyVersionsV1NetworkSetting>;

		/** The target resource on which this new network will be defined. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}") */
		targetResource?: string | null;
	}

	/** Response object for creating a network. */
	export interface GoogleChromePolicyVersionsV1DefineNetworkResponseFormProperties {

		/** Network ID of the new created network. */
		networkId: FormControl<string | null | undefined>,

		/** The target resource on which this new network will be defined. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}") */
		targetResource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1DefineNetworkResponseFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1DefineNetworkResponseFormProperties>({
			networkId: new FormControl<string | null | undefined>(undefined),
			targetResource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about any range constraints. */
	export interface GoogleChromePolicyVersionsV1FieldConstraints {

		/** A constraint on upper and/or lower bounds, with at least one being set. */
		numericRangeConstraint?: GoogleChromePolicyVersionsV1NumericRangeConstraint;

		/** Constraints on the uploaded file of a file policy. */
		uploadedFileConstraints?: GoogleChromePolicyVersionsV1UploadedFileConstraints;
	}

	/** Information about any range constraints. */
	export interface GoogleChromePolicyVersionsV1FieldConstraintsFormProperties {
	}
	export function CreateGoogleChromePolicyVersionsV1FieldConstraintsFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1FieldConstraintsFormProperties>({
		});

	}


	/** A constraint on upper and/or lower bounds, with at least one being set. */
	export interface GoogleChromePolicyVersionsV1NumericRangeConstraint {

		/** Maximum value. */
		maximum?: string | null;

		/** Minimum value. */
		minimum?: string | null;
	}

	/** A constraint on upper and/or lower bounds, with at least one being set. */
	export interface GoogleChromePolicyVersionsV1NumericRangeConstraintFormProperties {

		/** Maximum value. */
		maximum: FormControl<string | null | undefined>,

		/** Minimum value. */
		minimum: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1NumericRangeConstraintFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1NumericRangeConstraintFormProperties>({
			maximum: new FormControl<string | null | undefined>(undefined),
			minimum: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Constraints on the uploaded file of a file policy. */
	export interface GoogleChromePolicyVersionsV1UploadedFileConstraints {

		/** The size limit of uploaded files for a setting, in bytes. */
		sizeLimitBytes?: string | null;

		/** File types that can be uploaded for a setting. */
		supportedContentTypes?: Array<string>;
	}

	/** Constraints on the uploaded file of a file policy. */
	export interface GoogleChromePolicyVersionsV1UploadedFileConstraintsFormProperties {

		/** The size limit of uploaded files for a setting, in bytes. */
		sizeLimitBytes: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1UploadedFileConstraintsFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1UploadedFileConstraintsFormProperties>({
			sizeLimitBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for listing the group priority ordering of an app. */
	export interface GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest {

		/** The namespace of the policy type for the request. */
		policyNamespace?: string | null;

		/** The schema name of the policy for the request. */
		policySchema?: string | null;

		/** The key used to identify the target on which the policy will be applied. */
		policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
	}

	/** Request message for listing the group priority ordering of an app. */
	export interface GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequestFormProperties {

		/** The namespace of the policy type for the request. */
		policyNamespace: FormControl<string | null | undefined>,

		/** The schema name of the policy for the request. */
		policySchema: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequestFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequestFormProperties>({
			policyNamespace: new FormControl<string | null | undefined>(undefined),
			policySchema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing the group priority ordering of an app. */
	export interface GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse {

		/** Output only. The group IDs, in priority ordering. */
		groupIds?: Array<string>;

		/** Output only. The namespace of the policy type of the group IDs. */
		policyNamespace?: string | null;

		/** Output only. The schema name of the policy for the group IDs. */
		policySchema?: string | null;

		/** The key used to identify the target on which the policy will be applied. */
		policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
	}

	/** Response message for listing the group priority ordering of an app. */
	export interface GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponseFormProperties {

		/** Output only. The namespace of the policy type of the group IDs. */
		policyNamespace: FormControl<string | null | undefined>,

		/** Output only. The schema name of the policy for the group IDs. */
		policySchema: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponseFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponseFormProperties>({
			policyNamespace: new FormControl<string | null | undefined>(undefined),
			policySchema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing policy schemas that match a filter. */
	export interface GoogleChromePolicyVersionsV1ListPolicySchemasResponse {

		/** The page token used to get the next page of policy schemas. */
		nextPageToken?: string | null;

		/** The list of policy schemas that match the query. */
		policySchemas?: Array<GoogleChromePolicyVersionsV1PolicySchema>;
	}

	/** Response message for listing policy schemas that match a filter. */
	export interface GoogleChromePolicyVersionsV1ListPolicySchemasResponseFormProperties {

		/** The page token used to get the next page of policy schemas. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1ListPolicySchemasResponseFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1ListPolicySchemasResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource representing a policy schema. */
	export interface GoogleChromePolicyVersionsV1PolicySchema {

		/** Output only. Specific access restrictions related to this policy. */
		accessRestrictions?: Array<string>;

		/** Output only. Additional key names that will be used to identify the target of the policy value. When specifying a `policyTargetKey`, each of the additional keys specified here will have to be included in the `additionalTargetKeys` map. */
		additionalTargetKeyNames?: Array<GoogleChromePolicyVersionsV1AdditionalTargetKeyName>;

		/** Title of the category in which a setting belongs. */
		categoryTitle?: string | null;

		/** Describes a complete .proto file. */
		definition?: Proto2FileDescriptorProto;

		/** Output only. Detailed description of each field that is part of the schema. Fields are suggested to be displayed by the ordering in this list, not by field number. */
		fieldDescriptions?: Array<GoogleChromePolicyVersionsV1PolicySchemaFieldDescription>;

		/** Format: name=customers/{customer}/policySchemas/{schema_namespace} */
		name?: string | null;

		/** Output only. Special notice messages related to setting certain values in certain fields in the schema. */
		notices?: Array<GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription>;

		/** Lifecycle information. */
		policyApiLifecycle?: GoogleChromePolicyVersionsV1PolicyApiLifecycle;

		/** Output only. Description about the policy schema for user consumption. */
		policyDescription?: string | null;

		/** Output only. The fully qualified name of the policy schema. This value is used to fill the field `policy_schema` in PolicyValue when calling BatchInheritOrgUnitPolicies BatchModifyOrgUnitPolicies BatchModifyGroupPolicies or BatchDeleteGroupPolicies. */
		schemaName?: string | null;

		/** Output only. URI to related support article for this schema. */
		supportUri?: string | null;

		/** Output only. List indicates that the policy will only apply to devices/users on these platforms. */
		supportedPlatforms?: Array<string>;

		/** Output only. Information about applicable target resources for the policy. */
		validTargetResources?: Array<string>;
	}

	/** Resource representing a policy schema. */
	export interface GoogleChromePolicyVersionsV1PolicySchemaFormProperties {

		/** Title of the category in which a setting belongs. */
		categoryTitle: FormControl<string | null | undefined>,

		/** Format: name=customers/{customer}/policySchemas/{schema_namespace} */
		name: FormControl<string | null | undefined>,

		/** Output only. Description about the policy schema for user consumption. */
		policyDescription: FormControl<string | null | undefined>,

		/** Output only. The fully qualified name of the policy schema. This value is used to fill the field `policy_schema` in PolicyValue when calling BatchInheritOrgUnitPolicies BatchModifyOrgUnitPolicies BatchModifyGroupPolicies or BatchDeleteGroupPolicies. */
		schemaName: FormControl<string | null | undefined>,

		/** Output only. URI to related support article for this schema. */
		supportUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1PolicySchemaFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1PolicySchemaFormProperties>({
			categoryTitle: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			policyDescription: new FormControl<string | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined),
			supportUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a complete .proto file. */
	export interface Proto2FileDescriptorProto {

		/** BEGIN GOOGLE-INTERNAL TODO(b/297898292) Deprecate and remove this field in favor of enums. END GOOGLE-INTERNAL */
		editionDeprecated?: string | null;
		enumType?: Array<Proto2EnumDescriptorProto>;

		/** All top-level definitions in this file. */
		messageType?: Array<Proto2DescriptorProto>;

		/** file name, relative to root of source tree */
		name?: string | null;

		/** e.g. "foo", "foo.bar", etc. */
		package?: string | null;

		/** The syntax of the proto file. The supported values are "proto2", "proto3", and "editions". If `edition` is present, this value must be "editions". */
		syntax?: string | null;
	}

	/** Describes a complete .proto file. */
	export interface Proto2FileDescriptorProtoFormProperties {

		/** BEGIN GOOGLE-INTERNAL TODO(b/297898292) Deprecate and remove this field in favor of enums. END GOOGLE-INTERNAL */
		editionDeprecated: FormControl<string | null | undefined>,

		/** file name, relative to root of source tree */
		name: FormControl<string | null | undefined>,

		/** e.g. "foo", "foo.bar", etc. */
		package: FormControl<string | null | undefined>,

		/** The syntax of the proto file. The supported values are "proto2", "proto3", and "editions". If `edition` is present, this value must be "editions". */
		syntax: FormControl<string | null | undefined>,
	}
	export function CreateProto2FileDescriptorProtoFormGroup() {
		return new FormGroup<Proto2FileDescriptorProtoFormProperties>({
			editionDeprecated: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			package: new FormControl<string | null | undefined>(undefined),
			syntax: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an enum type. */
	export interface Proto2EnumDescriptorProto {
		name?: string | null;
		value?: Array<Proto2EnumValueDescriptorProto>;
	}

	/** Describes an enum type. */
	export interface Proto2EnumDescriptorProtoFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateProto2EnumDescriptorProtoFormGroup() {
		return new FormGroup<Proto2EnumDescriptorProtoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a value within an enum. */
	export interface Proto2EnumValueDescriptorProto {
		name?: string | null;
		number?: number | null;
	}

	/** Describes a value within an enum. */
	export interface Proto2EnumValueDescriptorProtoFormProperties {
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateProto2EnumValueDescriptorProtoFormGroup() {
		return new FormGroup<Proto2EnumValueDescriptorProtoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a message type. */
	export interface Proto2DescriptorProto {
		enumType?: Array<Proto2EnumDescriptorProto>;
		field?: Array<Proto2FieldDescriptorProto>;
		name?: string | null;
		nestedType?: Array<Proto2DescriptorProto>;
		oneofDecl?: Array<Proto2OneofDescriptorProto>;
	}

	/** Describes a message type. */
	export interface Proto2DescriptorProtoFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateProto2DescriptorProtoFormGroup() {
		return new FormGroup<Proto2DescriptorProtoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a field within a message. */
	export interface Proto2FieldDescriptorProto {

		/** For numeric types, contains the original text representation of the value. For booleans, "true" or "false". For strings, contains the default text contents (not escaped in any way). For bytes, contains the C escaped value. All bytes >= 128 are escaped. */
		defaultValue?: string | null;

		/** JSON name of this field. The value is set by protocol compiler. If the user has set a "json_name" option on this field, that option's value will be used. Otherwise, it's deduced from the field's name by converting it to camelCase. */
		jsonName?: string | null;
		label?: Proto2FieldDescriptorProtoLabel | null;
		name?: string | null;
		number?: number | null;

		/** If set, gives the index of a oneof in the containing type's oneof_decl list. This field is a member of that oneof. */
		oneofIndex?: number | null;

		/** If true, this is a proto3 "optional". When a proto3 field is optional, it tracks presence regardless of field type. When proto3_optional is true, this field must belong to a oneof to signal to old proto3 clients that presence is tracked for this field. This oneof is known as a "synthetic" oneof, and this field must be its sole member (each proto3 optional field gets its own synthetic oneof). Synthetic oneofs exist in the descriptor only, and do not generate any API. Synthetic oneofs must be ordered after all "real" oneofs. For message fields, proto3_optional doesn't create any semantic change, since non-repeated message fields always track presence. However it still indicates the semantic detail of whether the user wrote "optional" or not. This can be useful for round-tripping the .proto file. For consistency we give message fields a synthetic oneof also, even though it is not required to track presence. This is especially important because the parser can't tell if a field is a message or an enum, so it must always create a synthetic oneof. Proto2 optional fields do not set this flag, because they already indicate optional with `LABEL_OPTIONAL`. */
		proto3Optional?: boolean | null;

		/** If type_name is set, this need not be set. If both this and type_name are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP. */
		type?: Proto2FieldDescriptorProtoType | null;

		/** For message and enum types, this is the name of the type. If the name starts with a '.', it is fully-qualified. Otherwise, C++-like scoping rules are used to find the type (i.e. first the nested types within this message are searched, then within the parent, on up to the root namespace). */
		typeName?: string | null;
	}

	/** Describes a field within a message. */
	export interface Proto2FieldDescriptorProtoFormProperties {

		/** For numeric types, contains the original text representation of the value. For booleans, "true" or "false". For strings, contains the default text contents (not escaped in any way). For bytes, contains the C escaped value. All bytes >= 128 are escaped. */
		defaultValue: FormControl<string | null | undefined>,

		/** JSON name of this field. The value is set by protocol compiler. If the user has set a "json_name" option on this field, that option's value will be used. Otherwise, it's deduced from the field's name by converting it to camelCase. */
		jsonName: FormControl<string | null | undefined>,
		label: FormControl<Proto2FieldDescriptorProtoLabel | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,

		/** If set, gives the index of a oneof in the containing type's oneof_decl list. This field is a member of that oneof. */
		oneofIndex: FormControl<number | null | undefined>,

		/** If true, this is a proto3 "optional". When a proto3 field is optional, it tracks presence regardless of field type. When proto3_optional is true, this field must belong to a oneof to signal to old proto3 clients that presence is tracked for this field. This oneof is known as a "synthetic" oneof, and this field must be its sole member (each proto3 optional field gets its own synthetic oneof). Synthetic oneofs exist in the descriptor only, and do not generate any API. Synthetic oneofs must be ordered after all "real" oneofs. For message fields, proto3_optional doesn't create any semantic change, since non-repeated message fields always track presence. However it still indicates the semantic detail of whether the user wrote "optional" or not. This can be useful for round-tripping the .proto file. For consistency we give message fields a synthetic oneof also, even though it is not required to track presence. This is especially important because the parser can't tell if a field is a message or an enum, so it must always create a synthetic oneof. Proto2 optional fields do not set this flag, because they already indicate optional with `LABEL_OPTIONAL`. */
		proto3Optional: FormControl<boolean | null | undefined>,

		/** If type_name is set, this need not be set. If both this and type_name are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP. */
		type: FormControl<Proto2FieldDescriptorProtoType | null | undefined>,

		/** For message and enum types, this is the name of the type. If the name starts with a '.', it is fully-qualified. Otherwise, C++-like scoping rules are used to find the type (i.e. first the nested types within this message are searched, then within the parent, on up to the root namespace). */
		typeName: FormControl<string | null | undefined>,
	}
	export function CreateProto2FieldDescriptorProtoFormGroup() {
		return new FormGroup<Proto2FieldDescriptorProtoFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			jsonName: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<Proto2FieldDescriptorProtoLabel | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			oneofIndex: new FormControl<number | null | undefined>(undefined),
			proto3Optional: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<Proto2FieldDescriptorProtoType | null | undefined>(undefined),
			typeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Proto2FieldDescriptorProtoLabel { LABEL_OPTIONAL = 0, LABEL_REPEATED = 1, LABEL_REQUIRED = 2 }

	export enum Proto2FieldDescriptorProtoType { TYPE_DOUBLE = 0, TYPE_FLOAT = 1, TYPE_INT64 = 2, TYPE_UINT64 = 3, TYPE_INT32 = 4, TYPE_FIXED64 = 5, TYPE_FIXED32 = 6, TYPE_BOOL = 7, TYPE_STRING = 8, TYPE_GROUP = 9, TYPE_MESSAGE = 10, TYPE_BYTES = 11, TYPE_UINT32 = 12, TYPE_ENUM = 13, TYPE_SFIXED32 = 14, TYPE_SFIXED64 = 15, TYPE_SINT32 = 16, TYPE_SINT64 = 17 }


	/** Describes a oneof. */
	export interface Proto2OneofDescriptorProto {
		name?: string | null;
	}

	/** Describes a oneof. */
	export interface Proto2OneofDescriptorProtoFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateProto2OneofDescriptorProtoFormGroup() {
		return new FormGroup<Proto2OneofDescriptorProtoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides detailed information for a particular field that is part of a PolicySchema. */
	export interface GoogleChromePolicyVersionsV1PolicySchemaFieldDescription {

		/** Output only. Client default if the policy is unset. */
		defaultValue?: any;

		/** Deprecated. Use name and field_description instead. The description for the field. */
		description?: string | null;

		/** Output only. The name of the field for associated with this description. */
		field?: string | null;

		/** Information about any range constraints. */
		fieldConstraints?: GoogleChromePolicyVersionsV1FieldConstraints;

		/** Output only. Provides a list of fields and values. At least one of the fields must have the corresponding value in order for this field to be allowed to be set. */
		fieldDependencies?: Array<GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies>;

		/** Output only. The description of the field. */
		fieldDescription?: string | null;

		/** Output only. Any input constraints associated on the values for the field. */
		inputConstraint?: string | null;

		/** Output only. If the field has a set of known values, this field will provide a description for these values. */
		knownValueDescriptions?: Array<GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription>;

		/** Output only. The name of the field. */
		name?: string | null;

		/** Output only. Provides the description of the fields nested in this field, if the field is a message type that defines multiple fields. Fields are suggested to be displayed by the ordering in this list, not by field number. */
		nestedFieldDescriptions?: Array<GoogleChromePolicyVersionsV1PolicySchemaFieldDescription>;

		/** Output only. Provides a list of fields that are required to be set if this field has a certain value. */
		requiredItems?: Array<GoogleChromePolicyVersionsV1PolicySchemaRequiredItems>;
	}

	/** Provides detailed information for a particular field that is part of a PolicySchema. */
	export interface GoogleChromePolicyVersionsV1PolicySchemaFieldDescriptionFormProperties {

		/** Output only. Client default if the policy is unset. */
		defaultValue: FormControl<any | null | undefined>,

		/** Deprecated. Use name and field_description instead. The description for the field. */
		description: FormControl<string | null | undefined>,

		/** Output only. The name of the field for associated with this description. */
		field: FormControl<string | null | undefined>,

		/** Output only. The description of the field. */
		fieldDescription: FormControl<string | null | undefined>,

		/** Output only. Any input constraints associated on the values for the field. */
		inputConstraint: FormControl<string | null | undefined>,

		/** Output only. The name of the field. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1PolicySchemaFieldDescriptionFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1PolicySchemaFieldDescriptionFormProperties>({
			defaultValue: new FormControl<any | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			fieldDescription: new FormControl<string | null | undefined>(undefined),
			inputConstraint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The field and the value it must have for another field to be allowed to be set. */
	export interface GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies {

		/** The source field which this field depends on. */
		sourceField?: string | null;

		/** The value which the source field must have for this field to be allowed to be set. */
		sourceFieldValue?: string | null;
	}

	/** The field and the value it must have for another field to be allowed to be set. */
	export interface GoogleChromePolicyVersionsV1PolicySchemaFieldDependenciesFormProperties {

		/** The source field which this field depends on. */
		sourceField: FormControl<string | null | undefined>,

		/** The value which the source field must have for this field to be allowed to be set. */
		sourceFieldValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1PolicySchemaFieldDependenciesFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1PolicySchemaFieldDependenciesFormProperties>({
			sourceField: new FormControl<string | null | undefined>(undefined),
			sourceFieldValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides detailed information about a known value that is allowed for a particular field in a PolicySchema. */
	export interface GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription {

		/** Output only. Additional description for this value. */
		description?: string | null;

		/** Output only. Field conditions required for this value to be valid. */
		fieldDependencies?: Array<GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies>;

		/** Output only. The string represenstation of the value that can be set for the field. */
		value?: string | null;
	}

	/** Provides detailed information about a known value that is allowed for a particular field in a PolicySchema. */
	export interface GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescriptionFormProperties {

		/** Output only. Additional description for this value. */
		description: FormControl<string | null | undefined>,

		/** Output only. The string represenstation of the value that can be set for the field. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescriptionFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescriptionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The fields that will become required based on the value of this field. */
	export interface GoogleChromePolicyVersionsV1PolicySchemaRequiredItems {

		/** The value(s) of the field that provoke required field enforcement. An empty field_conditions implies that any value assigned to this field will provoke required field enforcement. */
		fieldConditions?: Array<string>;

		/** The fields that are required as a consequence of the field conditions. */
		requiredFields?: Array<string>;
	}

	/** The fields that will become required based on the value of this field. */
	export interface GoogleChromePolicyVersionsV1PolicySchemaRequiredItemsFormProperties {
	}
	export function CreateGoogleChromePolicyVersionsV1PolicySchemaRequiredItemsFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1PolicySchemaRequiredItemsFormProperties>({
		});

	}


	/** Provides special notice messages related to a particular value in a field that is part of a PolicySchema. */
	export interface GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription {

		/** Output only. Whether the user needs to acknowledge the notice message before the value can be set. */
		acknowledgementRequired?: boolean | null;

		/** Output only. The field name associated with the notice. */
		field?: string | null;

		/** Output only. The notice message associate with the value of the field. */
		noticeMessage?: string | null;

		/** Output only. The value of the field that has a notice. When setting the field to this value, the user may be required to acknowledge the notice message in order for the value to be set. */
		noticeValue?: string | null;
	}

	/** Provides special notice messages related to a particular value in a field that is part of a PolicySchema. */
	export interface GoogleChromePolicyVersionsV1PolicySchemaNoticeDescriptionFormProperties {

		/** Output only. Whether the user needs to acknowledge the notice message before the value can be set. */
		acknowledgementRequired: FormControl<boolean | null | undefined>,

		/** Output only. The field name associated with the notice. */
		field: FormControl<string | null | undefined>,

		/** Output only. The notice message associate with the value of the field. */
		noticeMessage: FormControl<string | null | undefined>,

		/** Output only. The value of the field that has a notice. When setting the field to this value, the user may be required to acknowledge the notice message in order for the value to be set. */
		noticeValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1PolicySchemaNoticeDescriptionFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1PolicySchemaNoticeDescriptionFormProperties>({
			acknowledgementRequired: new FormControl<boolean | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			noticeMessage: new FormControl<string | null | undefined>(undefined),
			noticeValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lifecycle information. */
	export interface GoogleChromePolicyVersionsV1PolicyApiLifecycle {

		/** In the event that this policy was deprecated in favor of another policy, the fully qualified namespace(s) of the new policies as they will show in PolicyAPI. Could only be set if policy_api_lifecycle_stage is API_DEPRECATED. */
		deprecatedInFavorOf?: Array<string>;

		/** Description about current life cycle. */
		description?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		endSupport?: GoogleTypeDate;

		/** Indicates current life cycle stage of the policy API. */
		policyApiLifecycleStage?: GoogleChromePolicyVersionsV1PolicyApiLifecyclePolicyApiLifecycleStage | null;

		/** Corresponding to deprecated_in_favor_of, the fully qualified namespace(s) of the old policies that will be deprecated because of introduction of this policy. This field should not be manually set but will be set and exposed through PolicyAPI automatically. */
		scheduledToDeprecatePolicies?: Array<string>;
	}

	/** Lifecycle information. */
	export interface GoogleChromePolicyVersionsV1PolicyApiLifecycleFormProperties {

		/** Description about current life cycle. */
		description: FormControl<string | null | undefined>,

		/** Indicates current life cycle stage of the policy API. */
		policyApiLifecycleStage: FormControl<GoogleChromePolicyVersionsV1PolicyApiLifecyclePolicyApiLifecycleStage | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1PolicyApiLifecycleFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1PolicyApiLifecycleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			policyApiLifecycleStage: new FormControl<GoogleChromePolicyVersionsV1PolicyApiLifecyclePolicyApiLifecycleStage | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDate {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeDateFormGroup() {
		return new FormGroup<GoogleTypeDateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleChromePolicyVersionsV1PolicyApiLifecyclePolicyApiLifecycleStage { API_UNSPECIFIED = 0, API_PREVIEW = 1, API_DEVELOPMENT = 2, API_CURRENT = 3, API_DEPRECATED = 4 }


	/** Error information for a modification request of a specific policy on a specific target. */
	export interface GoogleChromePolicyVersionsV1PolicyModificationError {

		/** Output only. The non-field errors related to the modification. */
		errors?: Array<string>;

		/** Output only. The error messages related to the modification. */
		fieldErrors?: Array<GoogleChromePolicyVersionsV1PolicyModificationFieldError>;

		/** Output only. The specific policy schema modification that had an error. */
		policySchema?: string | null;

		/** The key used to identify the target on which the policy will be applied. */
		policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
	}

	/** Error information for a modification request of a specific policy on a specific target. */
	export interface GoogleChromePolicyVersionsV1PolicyModificationErrorFormProperties {

		/** Output only. The specific policy schema modification that had an error. */
		policySchema: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1PolicyModificationErrorFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1PolicyModificationErrorFormProperties>({
			policySchema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error information for a modification request of a specific field on a specific policy. */
	export interface GoogleChromePolicyVersionsV1PolicyModificationFieldError {

		/** Output only. The error message related to the field. */
		error?: string | null;

		/** Output only. The name of the field with the error. */
		field?: string | null;
	}

	/** Error information for a modification request of a specific field on a specific policy. */
	export interface GoogleChromePolicyVersionsV1PolicyModificationFieldErrorFormProperties {

		/** Output only. The error message related to the field. */
		error: FormControl<string | null | undefined>,

		/** Output only. The name of the field with the error. */
		field: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1PolicyModificationFieldErrorFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1PolicyModificationFieldErrorFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the errors encountered during a policy modification request. This message will be returned as part of the details of a google.rpc.Status returned to the user when there is an error in their request. */
	export interface GoogleChromePolicyVersionsV1PolicyModificationErrorDetails {

		/** Output only. List of specific policy modifications errors that may have occurred during a modifying request. */
		modificationErrors?: Array<GoogleChromePolicyVersionsV1PolicyModificationError>;
	}

	/** Details of the errors encountered during a policy modification request. This message will be returned as part of the details of a google.rpc.Status returned to the user when there is an error in their request. */
	export interface GoogleChromePolicyVersionsV1PolicyModificationErrorDetailsFormProperties {
	}
	export function CreateGoogleChromePolicyVersionsV1PolicyModificationErrorDetailsFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1PolicyModificationErrorDetailsFormProperties>({
		});

	}


	/** Details of the errors encountered during a remove certificate request. This message will be returned as part of the details of a google.rpc.Status returned to the user when there is an error in their request. */
	export interface GoogleChromePolicyVersionsV1RemoveCertificateErrorDetails {

		/** Output only. If the certificate was not removed, a list of references to the certificate that prevented it from being removed. Only unreferenced certificates can be removed. */
		certificateReferences?: Array<GoogleChromePolicyVersionsV1CertificateReference>;
	}

	/** Details of the errors encountered during a remove certificate request. This message will be returned as part of the details of a google.rpc.Status returned to the user when there is an error in their request. */
	export interface GoogleChromePolicyVersionsV1RemoveCertificateErrorDetailsFormProperties {
	}
	export function CreateGoogleChromePolicyVersionsV1RemoveCertificateErrorDetailsFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1RemoveCertificateErrorDetailsFormProperties>({
		});

	}


	/** Request object for removing a certificate. */
	export interface GoogleChromePolicyVersionsV1RemoveCertificateRequest {

		/** Required. The GUID of the certificate to remove. */
		networkId?: string | null;

		/** Required. The target resource on which this certificate will be removed. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}") */
		targetResource?: string | null;
	}

	/** Request object for removing a certificate. */
	export interface GoogleChromePolicyVersionsV1RemoveCertificateRequestFormProperties {

		/** Required. The GUID of the certificate to remove. */
		networkId: FormControl<string | null | undefined>,

		/** Required. The target resource on which this certificate will be removed. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}") */
		targetResource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1RemoveCertificateRequestFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1RemoveCertificateRequestFormProperties>({
			networkId: new FormControl<string | null | undefined>(undefined),
			targetResource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response object for removing a certificate. */
	export interface GoogleChromePolicyVersionsV1RemoveCertificateResponse {
	}

	/** Response object for removing a certificate. */
	export interface GoogleChromePolicyVersionsV1RemoveCertificateResponseFormProperties {
	}
	export function CreateGoogleChromePolicyVersionsV1RemoveCertificateResponseFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1RemoveCertificateResponseFormProperties>({
		});

	}


	/** Request object for removing a network */
	export interface GoogleChromePolicyVersionsV1RemoveNetworkRequest {

		/** Required. The GUID of the network to remove. */
		networkId?: string | null;

		/** Required. The target resource on which this network will be removed. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}") */
		targetResource?: string | null;
	}

	/** Request object for removing a network */
	export interface GoogleChromePolicyVersionsV1RemoveNetworkRequestFormProperties {

		/** Required. The GUID of the network to remove. */
		networkId: FormControl<string | null | undefined>,

		/** Required. The target resource on which this network will be removed. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}") */
		targetResource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1RemoveNetworkRequestFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1RemoveNetworkRequestFormProperties>({
			networkId: new FormControl<string | null | undefined>(undefined),
			targetResource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response object for removing a network. */
	export interface GoogleChromePolicyVersionsV1RemoveNetworkResponse {
	}

	/** Response object for removing a network. */
	export interface GoogleChromePolicyVersionsV1RemoveNetworkResponseFormProperties {
	}
	export function CreateGoogleChromePolicyVersionsV1RemoveNetworkResponseFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1RemoveNetworkResponseFormProperties>({
		});

	}


	/** Request message for getting the resolved policy value for a specific target. */
	export interface GoogleChromePolicyVersionsV1ResolveRequest {

		/** The maximum number of policies to return, defaults to 100 and has a maximum of 1000. */
		pageSize?: number | null;

		/** The page token used to retrieve a specific page of the request. */
		pageToken?: string | null;

		/** Required. The schema filter to apply to the resolve request. Specify a schema name to view a particular schema, for example: chrome.users.ShowLogoutButton Wildcards are supported, but only in the leaf portion of the schema name. Wildcards cannot be used in namespace directly. Please read https://developers.google.com/chrome/policy/guides/policy-schemas for details on schema namespaces. For example: Valid: "chrome.users.*", "chrome.users.apps.*", "chrome.printers.*" Invalid: "*", "*.users", "chrome.*", "chrome.*.apps.*" */
		policySchemaFilter?: string | null;

		/** The key used to identify the target on which the policy will be applied. */
		policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
	}

	/** Request message for getting the resolved policy value for a specific target. */
	export interface GoogleChromePolicyVersionsV1ResolveRequestFormProperties {

		/** The maximum number of policies to return, defaults to 100 and has a maximum of 1000. */
		pageSize: FormControl<number | null | undefined>,

		/** The page token used to retrieve a specific page of the request. */
		pageToken: FormControl<string | null | undefined>,

		/** Required. The schema filter to apply to the resolve request. Specify a schema name to view a particular schema, for example: chrome.users.ShowLogoutButton Wildcards are supported, but only in the leaf portion of the schema name. Wildcards cannot be used in namespace directly. Please read https://developers.google.com/chrome/policy/guides/policy-schemas for details on schema namespaces. For example: Valid: "chrome.users.*", "chrome.users.apps.*", "chrome.printers.*" Invalid: "*", "*.users", "chrome.*", "chrome.*.apps.*" */
		policySchemaFilter: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1ResolveRequestFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1ResolveRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			policySchemaFilter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for getting the resolved policy value for a specific target. */
	export interface GoogleChromePolicyVersionsV1ResolveResponse {

		/** The page token used to get the next set of resolved policies found by the request. */
		nextPageToken?: string | null;

		/** The list of resolved policies found by the resolve request. */
		resolvedPolicies?: Array<GoogleChromePolicyVersionsV1ResolvedPolicy>;
	}

	/** Response message for getting the resolved policy value for a specific target. */
	export interface GoogleChromePolicyVersionsV1ResolveResponseFormProperties {

		/** The page token used to get the next set of resolved policies found by the request. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1ResolveResponseFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1ResolveResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resolved value of a policy for a given target. */
	export interface GoogleChromePolicyVersionsV1ResolvedPolicy {

		/** The key used to identify the target on which the policy will be applied. */
		addedSourceKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;

		/** The key used to identify the target on which the policy will be applied. */
		sourceKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;

		/** The key used to identify the target on which the policy will be applied. */
		targetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;

		/** A particular value for a policy managed by the service. */
		value?: GoogleChromePolicyVersionsV1PolicyValue;
	}

	/** The resolved value of a policy for a given target. */
	export interface GoogleChromePolicyVersionsV1ResolvedPolicyFormProperties {
	}
	export function CreateGoogleChromePolicyVersionsV1ResolvedPolicyFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1ResolvedPolicyFormProperties>({
		});

	}


	/** Request message for updating the group priority ordering of an app. */
	export interface GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest {

		/** Required. The group IDs, in desired priority ordering. */
		groupIds?: Array<string>;

		/** The namespace of the policy type for the request. */
		policyNamespace?: string | null;

		/** The schema name of the policy for the request. */
		policySchema?: string | null;

		/** The key used to identify the target on which the policy will be applied. */
		policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
	}

	/** Request message for updating the group priority ordering of an app. */
	export interface GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequestFormProperties {

		/** The namespace of the policy type for the request. */
		policyNamespace: FormControl<string | null | undefined>,

		/** The schema name of the policy for the request. */
		policySchema: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequestFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequestFormProperties>({
			policyNamespace: new FormControl<string | null | undefined>(undefined),
			policySchema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for uploading a file for a policy. */
	export interface GoogleChromePolicyVersionsV1UploadPolicyFileRequest {

		/** Required. The fully qualified policy schema and field name this file is uploaded for. This information will be used to validate the content type of the file. */
		policyField?: string | null;
	}

	/** Request message for uploading a file for a policy. */
	export interface GoogleChromePolicyVersionsV1UploadPolicyFileRequestFormProperties {

		/** Required. The fully qualified policy schema and field name this file is uploaded for. This information will be used to validate the content type of the file. */
		policyField: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1UploadPolicyFileRequestFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1UploadPolicyFileRequestFormProperties>({
			policyField: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for downloading an uploaded file. */
	export interface GoogleChromePolicyVersionsV1UploadPolicyFileResponse {

		/** The uri for end user to download the file. */
		downloadUri?: string | null;
	}

	/** Response message for downloading an uploaded file. */
	export interface GoogleChromePolicyVersionsV1UploadPolicyFileResponseFormProperties {

		/** The uri for end user to download the file. */
		downloadUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChromePolicyVersionsV1UploadPolicyFileResponseFormGroup() {
		return new FormGroup<GoogleChromePolicyVersionsV1UploadPolicyFileResponseFormProperties>({
			downloadUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
		 * Post v1/{customer}/policies/groups:batchDelete
		 * @param {string} customer ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Chromepolicy_customers_policies_groups_batchDelete(customer: string, requestBody: GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/policies/groups:batchDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
		 * Post v1/{customer}/policies/groups:batchModify
		 * @param {string} customer ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Chromepolicy_customers_policies_groups_batchModify(customer: string, requestBody: GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/policies/groups:batchModify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
		 * Post v1/{customer}/policies/groups:listGroupPriorityOrdering
		 * @param {string} customer Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
		 * @return {GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse} Successful response
		 */
		Chromepolicy_customers_policies_groups_listGroupPriorityOrdering(customer: string, requestBody: GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest): Observable<GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse> {
			return this.http.post<GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/policies/groups:listGroupPriorityOrdering', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
		 * Post v1/{customer}/policies/groups:updateGroupPriorityOrdering
		 * @param {string} customer Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Chromepolicy_customers_policies_groups_updateGroupPriorityOrdering(customer: string, requestBody: GoogleChromePolicyVersionsV1UpdateGroupPriorityOrderingRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/policies/groups:updateGroupPriorityOrdering', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a certificate at a specified OU for a customer.
		 * Post v1/{customer}/policies/networks:defineCertificate
		 * @param {string} customer Required. The customer for which the certificate will apply.
		 * @return {GoogleChromePolicyVersionsV1DefineCertificateResponse} Successful response
		 */
		Chromepolicy_customers_policies_networks_defineCertificate(customer: string, requestBody: GoogleChromePolicyVersionsV1DefineCertificateRequest): Observable<GoogleChromePolicyVersionsV1DefineCertificateResponse> {
			return this.http.post<GoogleChromePolicyVersionsV1DefineCertificateResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/policies/networks:defineCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Define a new network.
		 * Post v1/{customer}/policies/networks:defineNetwork
		 * @param {string} customer Required. The customer who will own this new network.
		 * @return {GoogleChromePolicyVersionsV1DefineNetworkResponse} Successful response
		 */
		Chromepolicy_customers_policies_networks_defineNetwork(customer: string, requestBody: GoogleChromePolicyVersionsV1DefineNetworkRequest): Observable<GoogleChromePolicyVersionsV1DefineNetworkResponse> {
			return this.http.post<GoogleChromePolicyVersionsV1DefineNetworkResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/policies/networks:defineNetwork', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove an existing certificate by guid.
		 * Post v1/{customer}/policies/networks:removeCertificate
		 * @param {string} customer Required. The customer whose certificate will be removed.
		 * @return {GoogleChromePolicyVersionsV1RemoveCertificateResponse} Successful response
		 */
		Chromepolicy_customers_policies_networks_removeCertificate(customer: string, requestBody: GoogleChromePolicyVersionsV1RemoveCertificateRequest): Observable<GoogleChromePolicyVersionsV1RemoveCertificateResponse> {
			return this.http.post<GoogleChromePolicyVersionsV1RemoveCertificateResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/policies/networks:removeCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove an existing network by guid.
		 * Post v1/{customer}/policies/networks:removeNetwork
		 * @param {string} customer Required. The customer whose network will be removed.
		 * @return {GoogleChromePolicyVersionsV1RemoveNetworkResponse} Successful response
		 */
		Chromepolicy_customers_policies_networks_removeNetwork(customer: string, requestBody: GoogleChromePolicyVersionsV1RemoveNetworkRequest): Observable<GoogleChromePolicyVersionsV1RemoveNetworkResponse> {
			return this.http.post<GoogleChromePolicyVersionsV1RemoveNetworkResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/policies/networks:removeNetwork', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
		 * Post v1/{customer}/policies/orgunits:batchInherit
		 * @param {string} customer ID of the G Suite account or literal "my_customer" for the customer associated to the request.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Chromepolicy_customers_policies_orgunits_batchInherit(customer: string, requestBody: GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/policies/orgunits:batchInherit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
		 * Post v1/{customer}/policies/orgunits:batchModify
		 * @param {string} customer ID of the G Suite account or literal "my_customer" for the customer associated to the request.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Chromepolicy_customers_policies_orgunits_batchModify(customer: string, requestBody: GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/policies/orgunits:batchModify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the resolved policy values for a list of policies that match a search query.
		 * Post v1/{customer}/policies:resolve
		 * @param {string} customer ID of the G Suite account or literal "my_customer" for the customer associated to the request.
		 * @return {GoogleChromePolicyVersionsV1ResolveResponse} Successful response
		 */
		Chromepolicy_customers_policies_resolve(customer: string, requestBody: GoogleChromePolicyVersionsV1ResolveRequest): Observable<GoogleChromePolicyVersionsV1ResolveResponse> {
			return this.http.post<GoogleChromePolicyVersionsV1ResolveResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + '/policies:resolve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a specific policy schema for a customer by its resource name.
		 * Get v1/{name}
		 * @param {string} name Required. The policy schema resource name to query.
		 * @return {GoogleChromePolicyVersionsV1PolicySchema} Successful response
		 */
		Chromepolicy_customers_policySchemas_get(name: string): Observable<GoogleChromePolicyVersionsV1PolicySchema> {
			return this.http.get<GoogleChromePolicyVersionsV1PolicySchema>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets a list of policy schemas that match a specified filter value for a given customer.
		 * Get v1/{parent}/policySchemas
		 * @param {string} parent Required. The customer for which the listing request will apply.
		 * @param {string} filter The schema filter used to find a particular schema based on fields like its resource name, description and `additionalTargetKeyNames`.
		 * @param {number} pageSize The maximum number of policy schemas to return, defaults to 100 and has a maximum of 1000.
		 * @param {string} pageToken The page token used to retrieve a specific page of the listing request.
		 * @return {GoogleChromePolicyVersionsV1ListPolicySchemasResponse} Successful response
		 */
		Chromepolicy_customers_policySchemas_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleChromePolicyVersionsV1ListPolicySchemasResponse> {
			return this.http.get<GoogleChromePolicyVersionsV1ListPolicySchemasResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/policySchemas&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

