import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch. */
	export interface GoogleCloudOrgpolicyV2AlternatePolicySpec {

		/** Reference to the launch that will be used while audit logging and to control the launch. Should be set only in the alternate policy. */
		launch?: string | null;

		/** Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources. */
		spec?: GoogleCloudOrgpolicyV2PolicySpec;
	}

	/** Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch. */
	export interface GoogleCloudOrgpolicyV2AlternatePolicySpecFormProperties {

		/** Reference to the launch that will be used while audit logging and to control the launch. Should be set only in the alternate policy. */
		launch: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV2AlternatePolicySpecFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV2AlternatePolicySpecFormProperties>({
			launch: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources. */
	export interface GoogleCloudOrgpolicyV2PolicySpec {

		/** An opaque tag indicating the current version of the policySpec, used for concurrency control. This field is ignored if used in a `CreatePolicy` request. When the policy is returned from either a `GetPolicy` or a `ListPolicies` request, this `etag` indicates the version of the current policySpec to use when executing a read-modify-write loop. When the policy is returned from a `GetEffectivePolicy` request, the `etag` will be unset. */
		etag?: string | null;

		/** Determines the inheritance behavior for this policy. If `inherit_from_parent` is true, policy rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the new root for evaluation. This field can be set only for policies which configure list constraints. */
		inheritFromParent?: boolean | null;

		/** Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific constraint at this resource. This field can be set in policies for either list or boolean constraints. If set, `rules` must be empty and `inherit_from_parent` must be set to false. */
		reset?: boolean | null;

		/** In policies for boolean constraints, the following requirements apply: - There must be one and only one policy rule where condition is unset. - Boolean policy rules with conditions must set `enforced` to the opposite of the policy rule without a condition. - During policy evaluation, policy rules with conditions that are true for a target resource take precedence. */
		rules?: Array<GoogleCloudOrgpolicyV2PolicySpecPolicyRule>;

		/** Output only. The time stamp this was previously updated. This represents the last time a call to `CreatePolicy` or `UpdatePolicy` was made for that policy. */
		updateTime?: string | null;
	}

	/** Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources. */
	export interface GoogleCloudOrgpolicyV2PolicySpecFormProperties {

		/** An opaque tag indicating the current version of the policySpec, used for concurrency control. This field is ignored if used in a `CreatePolicy` request. When the policy is returned from either a `GetPolicy` or a `ListPolicies` request, this `etag` indicates the version of the current policySpec to use when executing a read-modify-write loop. When the policy is returned from a `GetEffectivePolicy` request, the `etag` will be unset. */
		etag: FormControl<string | null | undefined>,

		/** Determines the inheritance behavior for this policy. If `inherit_from_parent` is true, policy rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the new root for evaluation. This field can be set only for policies which configure list constraints. */
		inheritFromParent: FormControl<boolean | null | undefined>,

		/** Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific constraint at this resource. This field can be set in policies for either list or boolean constraints. If set, `rules` must be empty and `inherit_from_parent` must be set to false. */
		reset: FormControl<boolean | null | undefined>,

		/** Output only. The time stamp this was previously updated. This represents the last time a call to `CreatePolicy` or `UpdatePolicy` was made for that policy. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV2PolicySpecFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV2PolicySpecFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			inheritFromParent: new FormControl<boolean | null | undefined>(undefined),
			reset: new FormControl<boolean | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A rule used to express this policy. */
	export interface GoogleCloudOrgpolicyV2PolicySpecPolicyRule {

		/** Setting this to true means that all values are allowed. This field can be set only in policies for list constraints. */
		allowAll?: boolean | null;

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: GoogleTypeExpr;

		/** Setting this to true means that all values are denied. This field can be set only in policies for list constraints. */
		denyAll?: boolean | null;

		/** If `true`, then the policy is enforced. If `false`, then any configuration is acceptable. This field can be set only in policies for boolean constraints. */
		enforce?: boolean | null;

		/** A message that holds specific allowed and denied values. This message can define specific values and subtrees of the Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - `projects/` (for example, `projects/tokyo-rain-123`) - `folders/` (for example, `folders/1234`) - `organizations/` (for example, `organizations/1234`) The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. */
		values?: GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues;
	}

	/** A rule used to express this policy. */
	export interface GoogleCloudOrgpolicyV2PolicySpecPolicyRuleFormProperties {

		/** Setting this to true means that all values are allowed. This field can be set only in policies for list constraints. */
		allowAll: FormControl<boolean | null | undefined>,

		/** Setting this to true means that all values are denied. This field can be set only in policies for list constraints. */
		denyAll: FormControl<boolean | null | undefined>,

		/** If `true`, then the policy is enforced. If `false`, then any configuration is acceptable. This field can be set only in policies for boolean constraints. */
		enforce: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV2PolicySpecPolicyRuleFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV2PolicySpecPolicyRuleFormProperties>({
			allowAll: new FormControl<boolean | null | undefined>(undefined),
			denyAll: new FormControl<boolean | null | undefined>(undefined),
			enforce: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface GoogleTypeExpr {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression?: string | null;

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface GoogleTypeExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeExprFormGroup() {
		return new FormGroup<GoogleTypeExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message that holds specific allowed and denied values. This message can define specific values and subtrees of the Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - `projects/` (for example, `projects/tokyo-rain-123`) - `folders/` (for example, `folders/1234`) - `organizations/` (for example, `organizations/1234`) The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. */
	export interface GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues {

		/** List of values allowed at this resource. */
		allowedValues?: Array<string>;

		/** List of values denied at this resource. */
		deniedValues?: Array<string>;
	}

	/** A message that holds specific allowed and denied values. This message can define specific values and subtrees of the Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - `projects/` (for example, `projects/tokyo-rain-123`) - `folders/` (for example, `folders/1234`) - `organizations/` (for example, `organizations/1234`) The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. */
	export interface GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValuesFormProperties {
	}
	export function CreateGoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValuesFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValuesFormProperties>({
		});

	}


	/** A constraint describes a way to restrict resource's configuration. For example, you could enforce a constraint that controls which Google Cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. Constraints can be configured by the organization policy administrator to fit the needs of the organization by setting a policy that includes constraints at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about `policies`. Constraints have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a policy being defined or inherited for the resource in question. */
	export interface GoogleCloudOrgpolicyV2Constraint {

		/** A constraint that is either enforced or not. For example, a constraint `constraints/compute.disableSerialPortAccess`. If it is enforced on a VM instance, serial port connections will not be opened to that instance. */
		booleanConstraint?: GoogleCloudOrgpolicyV2ConstraintBooleanConstraint;

		/** The evaluation behavior of this constraint in the absence of a policy. */
		constraintDefault?: GoogleCloudOrgpolicyV2ConstraintConstraintDefault | null;

		/** Detailed description of what this constraint controls as well as how and where it is enforced. Mutable. */
		description?: string | null;

		/** The human readable name. Mutable. */
		displayName?: string | null;

		/** A constraint that allows or disallows a list of string values, which are configured by an Organization Policy administrator with a policy. */
		listConstraint?: GoogleCloudOrgpolicyV2ConstraintListConstraint;

		/** Immutable. The resource name of the constraint. Must be in one of the following forms: * `projects/{project_number}/constraints/{constraint_name}` * `folders/{folder_id}/constraints/{constraint_name}` * `organizations/{organization_id}/constraints/{constraint_name}` For example, "/projects/123/constraints/compute.disableSerialPortAccess". */
		name?: string | null;

		/** Shows if dry run is supported for this constraint or not. */
		supportsDryRun?: boolean | null;
	}

	/** A constraint describes a way to restrict resource's configuration. For example, you could enforce a constraint that controls which Google Cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. Constraints can be configured by the organization policy administrator to fit the needs of the organization by setting a policy that includes constraints at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about `policies`. Constraints have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a policy being defined or inherited for the resource in question. */
	export interface GoogleCloudOrgpolicyV2ConstraintFormProperties {

		/** The evaluation behavior of this constraint in the absence of a policy. */
		constraintDefault: FormControl<GoogleCloudOrgpolicyV2ConstraintConstraintDefault | null | undefined>,

		/** Detailed description of what this constraint controls as well as how and where it is enforced. Mutable. */
		description: FormControl<string | null | undefined>,

		/** The human readable name. Mutable. */
		displayName: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the constraint. Must be in one of the following forms: * `projects/{project_number}/constraints/{constraint_name}` * `folders/{folder_id}/constraints/{constraint_name}` * `organizations/{organization_id}/constraints/{constraint_name}` For example, "/projects/123/constraints/compute.disableSerialPortAccess". */
		name: FormControl<string | null | undefined>,

		/** Shows if dry run is supported for this constraint or not. */
		supportsDryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV2ConstraintFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV2ConstraintFormProperties>({
			constraintDefault: new FormControl<GoogleCloudOrgpolicyV2ConstraintConstraintDefault | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			supportsDryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A constraint that is either enforced or not. For example, a constraint `constraints/compute.disableSerialPortAccess`. If it is enforced on a VM instance, serial port connections will not be opened to that instance. */
	export interface GoogleCloudOrgpolicyV2ConstraintBooleanConstraint {
	}

	/** A constraint that is either enforced or not. For example, a constraint `constraints/compute.disableSerialPortAccess`. If it is enforced on a VM instance, serial port connections will not be opened to that instance. */
	export interface GoogleCloudOrgpolicyV2ConstraintBooleanConstraintFormProperties {
	}
	export function CreateGoogleCloudOrgpolicyV2ConstraintBooleanConstraintFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV2ConstraintBooleanConstraintFormProperties>({
		});

	}

	export enum GoogleCloudOrgpolicyV2ConstraintConstraintDefault { CONSTRAINT_DEFAULT_UNSPECIFIED = 0, ALLOW = 1, DENY = 2 }


	/** A constraint that allows or disallows a list of string values, which are configured by an Organization Policy administrator with a policy. */
	export interface GoogleCloudOrgpolicyV2ConstraintListConstraint {

		/** Indicates whether values grouped into categories can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"in:Python"` would match any value in the 'Python' group. */
		supportsIn?: boolean | null;

		/** Indicates whether subtrees of the Resource Manager resource hierarchy can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"under:folders/123"` would match any resource under the 'folders/123' folder. */
		supportsUnder?: boolean | null;
	}

	/** A constraint that allows or disallows a list of string values, which are configured by an Organization Policy administrator with a policy. */
	export interface GoogleCloudOrgpolicyV2ConstraintListConstraintFormProperties {

		/** Indicates whether values grouped into categories can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"in:Python"` would match any value in the 'Python' group. */
		supportsIn: FormControl<boolean | null | undefined>,

		/** Indicates whether subtrees of the Resource Manager resource hierarchy can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"under:folders/123"` would match any resource under the 'folders/123' folder. */
		supportsUnder: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV2ConstraintListConstraintFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV2ConstraintListConstraintFormProperties>({
			supportsIn: new FormControl<boolean | null | undefined>(undefined),
			supportsUnder: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can apply policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*. */
	export interface GoogleCloudOrgpolicyV2CustomConstraint {

		/** Allow or deny type. */
		actionType?: GoogleCloudOrgpolicyV2CustomConstraintActionType | null;

		/** Org policy condition/expression. For example: `resource.instanceName.matches("[production|test]_.*_(\d)+")` or, `resource.management.auto_upgrade == true` The max length of the condition is 1000 characters. */
		condition?: string | null;

		/** Detailed information about this custom policy constraint. The max length of the description is 2000 characters. */
		description?: string | null;

		/** One line display name for the UI. The max length of the display_name is 200 characters. */
		displayName?: string | null;

		/** All the operations being applied for this constraint. */
		methodTypes?: Array<string>;

		/** Immutable. Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` The max length is 70 characters and the minimum length is 1. Note that the prefix `organizations/{organization_id}/customConstraints/` is not counted. */
		name?: string | null;

		/** Immutable. The resource instance type on which this policy applies. Format will be of the form : `/` Example: * `compute.googleapis.com/Instance`. */
		resourceTypes?: Array<string>;

		/** Output only. The last time this custom constraint was updated. This represents the last time that the `CreateCustomConstraint` or `UpdateCustomConstraint` RPC was called */
		updateTime?: string | null;
	}

	/** A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can apply policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*. */
	export interface GoogleCloudOrgpolicyV2CustomConstraintFormProperties {

		/** Allow or deny type. */
		actionType: FormControl<GoogleCloudOrgpolicyV2CustomConstraintActionType | null | undefined>,

		/** Org policy condition/expression. For example: `resource.instanceName.matches("[production|test]_.*_(\d)+")` or, `resource.management.auto_upgrade == true` The max length of the condition is 1000 characters. */
		condition: FormControl<string | null | undefined>,

		/** Detailed information about this custom policy constraint. The max length of the description is 2000 characters. */
		description: FormControl<string | null | undefined>,

		/** One line display name for the UI. The max length of the display_name is 200 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Immutable. Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` The max length is 70 characters and the minimum length is 1. Note that the prefix `organizations/{organization_id}/customConstraints/` is not counted. */
		name: FormControl<string | null | undefined>,

		/** Output only. The last time this custom constraint was updated. This represents the last time that the `CreateCustomConstraint` or `UpdateCustomConstraint` RPC was called */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV2CustomConstraintFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV2CustomConstraintFormProperties>({
			actionType: new FormControl<GoogleCloudOrgpolicyV2CustomConstraintActionType | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudOrgpolicyV2CustomConstraintActionType { ACTION_TYPE_UNSPECIFIED = 0, ALLOW = 1, DENY = 2 }


	/** The response returned from the ListConstraints method. */
	export interface GoogleCloudOrgpolicyV2ListConstraintsResponse {

		/** The collection of constraints that are available on the targeted resource. */
		constraints?: Array<GoogleCloudOrgpolicyV2Constraint>;

		/** Page token used to retrieve the next page. This is currently not used. */
		nextPageToken?: string | null;
	}

	/** The response returned from the ListConstraints method. */
	export interface GoogleCloudOrgpolicyV2ListConstraintsResponseFormProperties {

		/** Page token used to retrieve the next page. This is currently not used. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV2ListConstraintsResponseFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV2ListConstraintsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response returned from the ListCustomConstraints method. It will be empty if no custom constraints are set on the organization resource. */
	export interface GoogleCloudOrgpolicyV2ListCustomConstraintsResponse {

		/** All custom constraints that exist on the organization resource. It will be empty if no custom constraints are set. */
		customConstraints?: Array<GoogleCloudOrgpolicyV2CustomConstraint>;

		/** Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token. */
		nextPageToken?: string | null;
	}

	/** The response returned from the ListCustomConstraints method. It will be empty if no custom constraints are set on the organization resource. */
	export interface GoogleCloudOrgpolicyV2ListCustomConstraintsResponseFormProperties {

		/** Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV2ListCustomConstraintsResponseFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV2ListCustomConstraintsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response returned from the ListPolicies method. It will be empty if no policies are set on the resource. */
	export interface GoogleCloudOrgpolicyV2ListPoliciesResponse {

		/** Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token. */
		nextPageToken?: string | null;

		/** All policies that exist on the resource. It will be empty if no policies are set. */
		policies?: Array<GoogleCloudOrgpolicyV2Policy>;
	}

	/** The response returned from the ListPolicies method. It will be empty if no policies are set on the resource. */
	export interface GoogleCloudOrgpolicyV2ListPoliciesResponseFormProperties {

		/** Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV2ListPoliciesResponseFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV2ListPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines an organization policy which is used to specify constraints for configurations of Google Cloud resources. */
	export interface GoogleCloudOrgpolicyV2Policy {

		/** Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch. */
		alternate?: GoogleCloudOrgpolicyV2AlternatePolicySpec;

		/** Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources. */
		dryRunSpec?: GoogleCloudOrgpolicyV2PolicySpec;

		/** Optional. An opaque tag indicating the current state of the policy, used for concurrency control. This 'etag' is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Immutable. The resource name of the policy. Must be one of the following forms, where `constraint_name` is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, `projects/123/policies/compute.disableSerialPortAccess`. Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number. */
		name?: string | null;

		/** Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources. */
		spec?: GoogleCloudOrgpolicyV2PolicySpec;
	}

	/** Defines an organization policy which is used to specify constraints for configurations of Google Cloud resources. */
	export interface GoogleCloudOrgpolicyV2PolicyFormProperties {

		/** Optional. An opaque tag indicating the current state of the policy, used for concurrency control. This 'etag' is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the policy. Must be one of the following forms, where `constraint_name` is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, `projects/123/policies/compute.disableSerialPortAccess`. Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV2PolicyFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV2PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
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
		 * Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.
		 * Delete v2/{name}
		 * @param {string} name Required. Name of the policy to delete. See the policy entry for naming rules.
		 * @param {string} etag Optional. The current etag of policy. If an etag is provided and does not match the current etag of the policy, deletion will be blocked and an ABORTED error will be returned.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Orgpolicy_projects_policies_delete(name: string, etag: string | null | undefined): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)), {});
		}

		/**
		 * Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.
		 * Get v2/{name}
		 * @param {string} name Required. Resource name of the policy. See Policy for naming requirements.
		 * @return {GoogleCloudOrgpolicyV2Policy} Successful response
		 */
		Orgpolicy_projects_policies_get(name: string): Observable<GoogleCloudOrgpolicyV2Policy> {
			return this.http.get<GoogleCloudOrgpolicyV2Policy>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.
		 * Patch v2/{name}
		 * @param {string} name Immutable. The resource name of the policy. Must be one of the following forms, where `constraint_name` is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, `projects/123/policies/compute.disableSerialPortAccess`. Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
		 * @param {string} updateMask Field mask used to specify the fields to be overwritten in the policy by the set. The fields specified in the update_mask are relative to the policy, not the full request.
		 * @return {GoogleCloudOrgpolicyV2Policy} Successful response
		 */
		Orgpolicy_projects_policies_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleCloudOrgpolicyV2Policy): Observable<GoogleCloudOrgpolicyV2Policy> {
			return this.http.patch<GoogleCloudOrgpolicyV2Policy>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
		 * Get v2/{name}:getEffectivePolicy
		 * @param {string} name Required. The effective policy to compute. See Policy for naming requirements.
		 * @return {GoogleCloudOrgpolicyV2Policy} Successful response
		 */
		Orgpolicy_projects_policies_getEffectivePolicy(name: string): Observable<GoogleCloudOrgpolicyV2Policy> {
			return this.http.get<GoogleCloudOrgpolicyV2Policy>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':getEffectivePolicy', {});
		}

		/**
		 * Lists constraints that could be applied on the specified resource.
		 * Get v2/{parent}/constraints
		 * @param {string} parent Required. The Google Cloud resource that parents the constraint. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
		 * @param {number} pageSize Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
		 * @param {string} pageToken Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
		 * @return {GoogleCloudOrgpolicyV2ListConstraintsResponse} Successful response
		 */
		Orgpolicy_projects_constraints_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudOrgpolicyV2ListConstraintsResponse> {
			return this.http.get<GoogleCloudOrgpolicyV2ListConstraintsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/constraints&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Retrieves all of the custom constraints that exist on a particular organization resource.
		 * Get v2/{parent}/customConstraints
		 * @param {string} parent Required. The target Google Cloud resource that parents the set of custom constraints that will be returned from this call. Must be in one of the following forms: * `organizations/{organization_id}`
		 * @param {number} pageSize Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
		 * @param {string} pageToken Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
		 * @return {GoogleCloudOrgpolicyV2ListCustomConstraintsResponse} Successful response
		 */
		Orgpolicy_organizations_customConstraints_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudOrgpolicyV2ListCustomConstraintsResponse> {
			return this.http.get<GoogleCloudOrgpolicyV2ListCustomConstraintsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customConstraints&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.
		 * Post v2/{parent}/customConstraints
		 * @param {string} parent Required. Must be in the following form: * `organizations/{organization_id}`
		 * @return {GoogleCloudOrgpolicyV2CustomConstraint} Successful response
		 */
		Orgpolicy_organizations_customConstraints_create(parent: string, requestBody: GoogleCloudOrgpolicyV2CustomConstraint): Observable<GoogleCloudOrgpolicyV2CustomConstraint> {
			return this.http.post<GoogleCloudOrgpolicyV2CustomConstraint>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customConstraints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all of the policies that exist on a particular resource.
		 * Get v2/{parent}/policies
		 * @param {string} parent Required. The target Google Cloud resource that parents the set of constraints and policies that will be returned from this call. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
		 * @param {number} pageSize Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.
		 * @param {string} pageToken Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.
		 * @return {GoogleCloudOrgpolicyV2ListPoliciesResponse} Successful response
		 */
		Orgpolicy_projects_policies_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudOrgpolicyV2ListPoliciesResponse> {
			return this.http.get<GoogleCloudOrgpolicyV2ListPoliciesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/policies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.
		 * Post v2/{parent}/policies
		 * @param {string} parent Required. The Google Cloud resource that will parent the new policy. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
		 * @return {GoogleCloudOrgpolicyV2Policy} Successful response
		 */
		Orgpolicy_projects_policies_create(parent: string, requestBody: GoogleCloudOrgpolicyV2Policy): Observable<GoogleCloudOrgpolicyV2Policy> {
			return this.http.post<GoogleCloudOrgpolicyV2Policy>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/policies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

