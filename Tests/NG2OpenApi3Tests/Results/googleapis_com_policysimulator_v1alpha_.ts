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


	/** A resource describing a `Replay`, or simulation. */
	export interface GoogleCloudPolicysimulatorV1Replay {

		/** The configuration used for a Replay. */
		config?: GoogleCloudPolicysimulatorV1ReplayConfig;

		/** Output only. The resource name of the `Replay`, which has the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}`, where `{resource-id}` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36` */
		name?: string | null;

		/** Summary statistics about the replayed log entries. */
		resultsSummary?: GoogleCloudPolicysimulatorV1ReplayResultsSummary;

		/** Output only. The current state of the `Replay`. */
		state?: GoogleCloudPolicysimulatorV1ReplayState | null;
	}

	/** A resource describing a `Replay`, or simulation. */
	export interface GoogleCloudPolicysimulatorV1ReplayFormProperties {

		/** Output only. The resource name of the `Replay`, which has the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}`, where `{resource-id}` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36` */
		name: FormControl<string | null | undefined>,

		/** Output only. The current state of the `Replay`. */
		state: FormControl<GoogleCloudPolicysimulatorV1ReplayState | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1ReplayFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1ReplayFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudPolicysimulatorV1ReplayState | null | undefined>(undefined),
		});

	}


	/** The configuration used for a Replay. */
	export interface GoogleCloudPolicysimulatorV1ReplayConfig {

		/** The logs to use as input for the Replay. */
		logSource?: GoogleCloudPolicysimulatorV1ReplayConfigLogSource | null;

		/** A mapping of the resources that you want to simulate policies for and the policies that you want to simulate. Keys are the full resource names for the resources. For example, `//cloudresourcemanager.googleapis.com/projects/my-project`. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. Values are Policy objects representing the policies that you want to simulate. Replays automatically take into account any IAM policies inherited through the resource hierarchy, and any policies set on descendant resources. You do not need to include these policies in the policy overlay. */
		policyOverlay?: {[id: string]: GoogleIamV1Policy };
	}

	/** The configuration used for a Replay. */
	export interface GoogleCloudPolicysimulatorV1ReplayConfigFormProperties {

		/** The logs to use as input for the Replay. */
		logSource: FormControl<GoogleCloudPolicysimulatorV1ReplayConfigLogSource | null | undefined>,

		/** A mapping of the resources that you want to simulate policies for and the policies that you want to simulate. Keys are the full resource names for the resources. For example, `//cloudresourcemanager.googleapis.com/projects/my-project`. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. Values are Policy objects representing the policies that you want to simulate. Replays automatically take into account any IAM policies inherited through the resource hierarchy, and any policies set on descendant resources. You do not need to include these policies in the policy overlay. */
		policyOverlay: FormControl<{[id: string]: GoogleIamV1Policy } | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1ReplayConfigFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1ReplayConfigFormProperties>({
			logSource: new FormControl<GoogleCloudPolicysimulatorV1ReplayConfigLogSource | null | undefined>(undefined),
			policyOverlay: new FormControl<{[id: string]: GoogleIamV1Policy } | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudPolicysimulatorV1ReplayConfigLogSource { LOG_SOURCE_UNSPECIFIED = 0, RECENT_ACCESSES = 1 }


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface GoogleIamV1Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<GoogleIamV1AuditConfig>;

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<GoogleIamV1Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface GoogleIamV1PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreateGoogleIamV1PolicyFormGroup() {
		return new FormGroup<GoogleIamV1PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface GoogleIamV1AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<GoogleIamV1AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface GoogleIamV1AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1AuditConfigFormGroup() {
		return new FormGroup<GoogleIamV1AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface GoogleIamV1AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: GoogleIamV1AuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface GoogleIamV1AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<GoogleIamV1AuditLogConfigLogType | null | undefined>,
	}
	export function CreateGoogleIamV1AuditLogConfigFormGroup() {
		return new FormGroup<GoogleIamV1AuditLogConfigFormProperties>({
			logType: new FormControl<GoogleIamV1AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum GoogleIamV1AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


	/** Associates `members`, or principals, with a `role`. */
	export interface GoogleIamV1Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: GoogleTypeExpr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface GoogleIamV1BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1BindingFormGroup() {
		return new FormGroup<GoogleIamV1BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary statistics about the replayed log entries. */
	export interface GoogleCloudPolicysimulatorV1ReplayResultsSummary {

		/** The number of replayed log entries with a difference between baseline and simulated policies. */
		differenceCount?: number | null;

		/** The number of log entries that could not be replayed. */
		errorCount?: number | null;

		/** The total number of log entries replayed. */
		logCount?: number | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		newestDate?: GoogleTypeDate;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		oldestDate?: GoogleTypeDate;

		/** The number of replayed log entries with no difference between baseline and simulated policies. */
		unchangedCount?: number | null;
	}

	/** Summary statistics about the replayed log entries. */
	export interface GoogleCloudPolicysimulatorV1ReplayResultsSummaryFormProperties {

		/** The number of replayed log entries with a difference between baseline and simulated policies. */
		differenceCount: FormControl<number | null | undefined>,

		/** The number of log entries that could not be replayed. */
		errorCount: FormControl<number | null | undefined>,

		/** The total number of log entries replayed. */
		logCount: FormControl<number | null | undefined>,

		/** The number of replayed log entries with no difference between baseline and simulated policies. */
		unchangedCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1ReplayResultsSummaryFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1ReplayResultsSummaryFormProperties>({
			differenceCount: new FormControl<number | null | undefined>(undefined),
			errorCount: new FormControl<number | null | undefined>(undefined),
			logCount: new FormControl<number | null | undefined>(undefined),
			unchangedCount: new FormControl<number | null | undefined>(undefined),
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

	export enum GoogleCloudPolicysimulatorV1ReplayState { STATE_UNSPECIFIED = 0, PENDING = 1, RUNNING = 2, SUCCEEDED = 3, FAILED = 4 }


	/** Metadata about a Replay operation. */
	export interface GoogleCloudPolicysimulatorV1ReplayOperationMetadata {

		/** Time when the request was received. */
		startTime?: string | null;
	}

	/** Metadata about a Replay operation. */
	export interface GoogleCloudPolicysimulatorV1ReplayOperationMetadataFormProperties {

		/** Time when the request was received. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1ReplayOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1ReplayOperationMetadataFormProperties>({
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary and comparison of the principal's access under the current (baseline) policies and the proposed (simulated) policies for a single access tuple. */
	export interface GoogleCloudPolicysimulatorV1alphaAccessStateDiff {

		/** How the principal's access, specified in the AccessState field, changed between the current (baseline) policies and proposed (simulated) policies. */
		accessChange?: GoogleCloudPolicysimulatorV1alphaAccessStateDiffAccessChange | null;

		/** Details about how a set of policies, listed in ExplainedPolicy, resulted in a certain AccessState when replaying an access tuple. */
		baseline?: GoogleCloudPolicysimulatorV1alphaExplainedAccess;

		/** Details about how a set of policies, listed in ExplainedPolicy, resulted in a certain AccessState when replaying an access tuple. */
		simulated?: GoogleCloudPolicysimulatorV1alphaExplainedAccess;
	}

	/** A summary and comparison of the principal's access under the current (baseline) policies and the proposed (simulated) policies for a single access tuple. */
	export interface GoogleCloudPolicysimulatorV1alphaAccessStateDiffFormProperties {

		/** How the principal's access, specified in the AccessState field, changed between the current (baseline) policies and proposed (simulated) policies. */
		accessChange: FormControl<GoogleCloudPolicysimulatorV1alphaAccessStateDiffAccessChange | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaAccessStateDiffFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaAccessStateDiffFormProperties>({
			accessChange: new FormControl<GoogleCloudPolicysimulatorV1alphaAccessStateDiffAccessChange | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudPolicysimulatorV1alphaAccessStateDiffAccessChange { ACCESS_CHANGE_TYPE_UNSPECIFIED = 0, NO_CHANGE = 1, UNKNOWN_CHANGE = 2, ACCESS_REVOKED = 3, ACCESS_GAINED = 4, ACCESS_MAYBE_REVOKED = 5, ACCESS_MAYBE_GAINED = 6 }


	/** Details about how a set of policies, listed in ExplainedPolicy, resulted in a certain AccessState when replaying an access tuple. */
	export interface GoogleCloudPolicysimulatorV1alphaExplainedAccess {

		/** Whether the principal in the access tuple has permission to access the resource in the access tuple under the given policies. */
		accessState?: GoogleCloudPolicysimulatorV1alphaExplainedAccessAccessState | null;

		/** If the AccessState is `UNKNOWN`, this field contains a list of errors explaining why the result is `UNKNOWN`. If the `AccessState` is `GRANTED` or `NOT_GRANTED`, this field is omitted. */
		errors?: Array<GoogleRpcStatus>;

		/** If the AccessState is `UNKNOWN`, this field contains the policies that led to that result. If the `AccessState` is `GRANTED` or `NOT_GRANTED`, this field is omitted. */
		policies?: Array<GoogleCloudPolicysimulatorV1alphaExplainedPolicy>;
	}

	/** Details about how a set of policies, listed in ExplainedPolicy, resulted in a certain AccessState when replaying an access tuple. */
	export interface GoogleCloudPolicysimulatorV1alphaExplainedAccessFormProperties {

		/** Whether the principal in the access tuple has permission to access the resource in the access tuple under the given policies. */
		accessState: FormControl<GoogleCloudPolicysimulatorV1alphaExplainedAccessAccessState | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaExplainedAccessFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaExplainedAccessFormProperties>({
			accessState: new FormControl<GoogleCloudPolicysimulatorV1alphaExplainedAccessAccessState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudPolicysimulatorV1alphaExplainedAccessAccessState { ACCESS_STATE_UNSPECIFIED = 0, GRANTED = 1, NOT_GRANTED = 2, UNKNOWN_CONDITIONAL = 3, UNKNOWN_INFO_DENIED = 4 }


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about how a specific IAM Policy contributed to the access check. */
	export interface GoogleCloudPolicysimulatorV1alphaExplainedPolicy {

		/** Indicates whether _this policy_ provides the specified permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal actually has the permission for the resource. There might be another policy that overrides this policy. To determine whether the principal actually has the permission, use the `access` field in the TroubleshootIamPolicyResponse. */
		access?: GoogleCloudPolicysimulatorV1alphaExplainedAccessAccessState | null;

		/** Details about how each binding in the policy affects the principal's ability, or inability, to use the permission for the resource. If the user who created the Replay does not have access to the policy, this field is omitted. */
		bindingExplanations?: Array<GoogleCloudPolicysimulatorV1alphaBindingExplanation>;

		/** The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`. If the user who created the Replay does not have access to the policy, this field is omitted. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. */
		fullResourceName?: string | null;

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: GoogleIamV1Policy;

		/** The relevance of this policy to the overall determination in the TroubleshootIamPolicyResponse. If the user who created the Replay does not have access to the policy, this field is omitted. */
		relevance?: GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipRelevance | null;
	}

	/** Details about how a specific IAM Policy contributed to the access check. */
	export interface GoogleCloudPolicysimulatorV1alphaExplainedPolicyFormProperties {

		/** Indicates whether _this policy_ provides the specified permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal actually has the permission for the resource. There might be another policy that overrides this policy. To determine whether the principal actually has the permission, use the `access` field in the TroubleshootIamPolicyResponse. */
		access: FormControl<GoogleCloudPolicysimulatorV1alphaExplainedAccessAccessState | null | undefined>,

		/** The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`. If the user who created the Replay does not have access to the policy, this field is omitted. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. */
		fullResourceName: FormControl<string | null | undefined>,

		/** The relevance of this policy to the overall determination in the TroubleshootIamPolicyResponse. If the user who created the Replay does not have access to the policy, this field is omitted. */
		relevance: FormControl<GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipRelevance | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaExplainedPolicyFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaExplainedPolicyFormProperties>({
			access: new FormControl<GoogleCloudPolicysimulatorV1alphaExplainedAccessAccessState | null | undefined>(undefined),
			fullResourceName: new FormControl<string | null | undefined>(undefined),
			relevance: new FormControl<GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipRelevance | null | undefined>(undefined),
		});

	}


	/** Details about how a binding in a policy affects a principal's ability to use a permission. */
	export interface GoogleCloudPolicysimulatorV1alphaBindingExplanation {

		/** Required. Indicates whether _this binding_ provides the specified permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal actually has the permission for the resource. There might be another binding that overrides this binding. To determine whether the principal actually has the permission, use the `access` field in the TroubleshootIamPolicyResponse. */
		access?: GoogleCloudPolicysimulatorV1alphaExplainedAccessAccessState | null;

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: GoogleTypeExpr;

		/** Indicates whether each principal in the binding includes the principal specified in the request, either directly or indirectly. Each key identifies a principal in the binding, and each value indicates whether the principal in the binding includes the principal in the request. For example, suppose that a binding includes the following principals: * `user:alice@example.com` * `group:product-eng@example.com` The principal in the replayed access tuple is `user:bob@example.com`. This user is a principal of the group `group:product-eng@example.com`. For the first principal in the binding, the key is `user:alice@example.com`, and the `membership` field in the value is set to `MEMBERSHIP_NOT_INCLUDED`. For the second principal in the binding, the key is `group:product-eng@example.com`, and the `membership` field in the value is set to `MEMBERSHIP_INCLUDED`. */
		memberships?: {[id: string]: GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembership };

		/** The relevance of this binding to the overall determination for the entire policy. */
		relevance?: GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipRelevance | null;

		/** The role that this binding grants. For example, `roles/compute.serviceAgent`. For a complete list of predefined IAM roles, as well as the permissions in each role, see https://cloud.google.com/iam/help/roles/reference. */
		role?: string | null;

		/** Indicates whether the role granted by this binding contains the specified permission. */
		rolePermission?: GoogleCloudPolicysimulatorV1alphaBindingExplanationRolePermission | null;

		/** The relevance of the permission's existence, or nonexistence, in the role to the overall determination for the entire policy. */
		rolePermissionRelevance?: GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipRelevance | null;
	}

	/** Details about how a binding in a policy affects a principal's ability to use a permission. */
	export interface GoogleCloudPolicysimulatorV1alphaBindingExplanationFormProperties {

		/** Required. Indicates whether _this binding_ provides the specified permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal actually has the permission for the resource. There might be another binding that overrides this binding. To determine whether the principal actually has the permission, use the `access` field in the TroubleshootIamPolicyResponse. */
		access: FormControl<GoogleCloudPolicysimulatorV1alphaExplainedAccessAccessState | null | undefined>,

		/** Indicates whether each principal in the binding includes the principal specified in the request, either directly or indirectly. Each key identifies a principal in the binding, and each value indicates whether the principal in the binding includes the principal in the request. For example, suppose that a binding includes the following principals: * `user:alice@example.com` * `group:product-eng@example.com` The principal in the replayed access tuple is `user:bob@example.com`. This user is a principal of the group `group:product-eng@example.com`. For the first principal in the binding, the key is `user:alice@example.com`, and the `membership` field in the value is set to `MEMBERSHIP_NOT_INCLUDED`. For the second principal in the binding, the key is `group:product-eng@example.com`, and the `membership` field in the value is set to `MEMBERSHIP_INCLUDED`. */
		memberships: FormControl<{[id: string]: GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembership } | null | undefined>,

		/** The relevance of this binding to the overall determination for the entire policy. */
		relevance: FormControl<GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipRelevance | null | undefined>,

		/** The role that this binding grants. For example, `roles/compute.serviceAgent`. For a complete list of predefined IAM roles, as well as the permissions in each role, see https://cloud.google.com/iam/help/roles/reference. */
		role: FormControl<string | null | undefined>,

		/** Indicates whether the role granted by this binding contains the specified permission. */
		rolePermission: FormControl<GoogleCloudPolicysimulatorV1alphaBindingExplanationRolePermission | null | undefined>,

		/** The relevance of the permission's existence, or nonexistence, in the role to the overall determination for the entire policy. */
		rolePermissionRelevance: FormControl<GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipRelevance | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaBindingExplanationFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaBindingExplanationFormProperties>({
			access: new FormControl<GoogleCloudPolicysimulatorV1alphaExplainedAccessAccessState | null | undefined>(undefined),
			memberships: new FormControl<{[id: string]: GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembership } | null | undefined>(undefined),
			relevance: new FormControl<GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipRelevance | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			rolePermission: new FormControl<GoogleCloudPolicysimulatorV1alphaBindingExplanationRolePermission | null | undefined>(undefined),
			rolePermissionRelevance: new FormControl<GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipRelevance | null | undefined>(undefined),
		});

	}


	/** Details about whether the binding includes the principal. */
	export interface GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembership {

		/** Indicates whether the binding includes the principal. */
		membership?: GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipMembership | null;

		/** The relevance of the principal's status to the overall determination for the binding. */
		relevance?: GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipRelevance | null;
	}

	/** Details about whether the binding includes the principal. */
	export interface GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipFormProperties {

		/** Indicates whether the binding includes the principal. */
		membership: FormControl<GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipMembership | null | undefined>,

		/** The relevance of the principal's status to the overall determination for the binding. */
		relevance: FormControl<GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipRelevance | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipFormProperties>({
			membership: new FormControl<GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipMembership | null | undefined>(undefined),
			relevance: new FormControl<GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipRelevance | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipMembership { MEMBERSHIP_UNSPECIFIED = 0, MEMBERSHIP_INCLUDED = 1, MEMBERSHIP_NOT_INCLUDED = 2, MEMBERSHIP_UNKNOWN_INFO_DENIED = 3, MEMBERSHIP_UNKNOWN_UNSUPPORTED = 4 }

	export enum GoogleCloudPolicysimulatorV1alphaBindingExplanationAnnotatedMembershipRelevance { HEURISTIC_RELEVANCE_UNSPECIFIED = 0, NORMAL = 1, HIGH = 2 }

	export enum GoogleCloudPolicysimulatorV1alphaBindingExplanationRolePermission { ROLE_PERMISSION_UNSPECIFIED = 0, ROLE_PERMISSION_INCLUDED = 1, ROLE_PERMISSION_NOT_INCLUDED = 2, ROLE_PERMISSION_UNKNOWN_INFO_DENIED = 3 }


	/** Information about the principal, resource, and permission to check. */
	export interface GoogleCloudPolicysimulatorV1alphaAccessTuple {

		/** Required. The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. */
		fullResourceName?: string | null;

		/** Required. The IAM permission to check for the specified principal and resource. For a complete list of IAM permissions, see https://cloud.google.com/iam/help/permissions/reference. For a complete list of predefined IAM roles and the permissions in each role, see https://cloud.google.com/iam/help/roles/reference. */
		permission?: string | null;

		/** Required. The principal whose access you want to check, in the form of the email address that represents that principal. For example, `alice@example.com` or `my-service-account@my-project.iam.gserviceaccount.com`. The principal must be a Google Account or a service account. Other types of principals are not supported. */
		principal?: string | null;
	}

	/** Information about the principal, resource, and permission to check. */
	export interface GoogleCloudPolicysimulatorV1alphaAccessTupleFormProperties {

		/** Required. The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. */
		fullResourceName: FormControl<string | null | undefined>,

		/** Required. The IAM permission to check for the specified principal and resource. For a complete list of IAM permissions, see https://cloud.google.com/iam/help/permissions/reference. For a complete list of predefined IAM roles and the permissions in each role, see https://cloud.google.com/iam/help/roles/reference. */
		permission: FormControl<string | null | undefined>,

		/** Required. The principal whose access you want to check, in the form of the email address that represents that principal. For example, `alice@example.com` or `my-service-account@my-project.iam.gserviceaccount.com`. The principal must be a Google Account or a service account. Other types of principals are not supported. */
		principal: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaAccessTupleFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaAccessTupleFormProperties>({
			fullResourceName: new FormControl<string | null | undefined>(undefined),
			permission: new FormControl<string | null | undefined>(undefined),
			principal: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GenerateOrgPolicyViolationsPreviewOperationMetadata is metadata about an OrgPolicyViolationsPreview generations operation. */
	export interface GoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadata {

		/** Time when the request was received. */
		requestTime?: string | null;

		/** Total number of resources that need scanning. Should equal resource_scanned + resources_pending */
		resourcesFound?: number | null;

		/** Number of resources still to scan. */
		resourcesPending?: number | null;

		/** Number of resources already scanned. */
		resourcesScanned?: number | null;

		/** Time when the request started processing, i.e. when the state was set to RUNNING. */
		startTime?: string | null;

		/** The current state of the operation. */
		state?: GoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadataState | null;
	}

	/** GenerateOrgPolicyViolationsPreviewOperationMetadata is metadata about an OrgPolicyViolationsPreview generations operation. */
	export interface GoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadataFormProperties {

		/** Time when the request was received. */
		requestTime: FormControl<string | null | undefined>,

		/** Total number of resources that need scanning. Should equal resource_scanned + resources_pending */
		resourcesFound: FormControl<number | null | undefined>,

		/** Number of resources still to scan. */
		resourcesPending: FormControl<number | null | undefined>,

		/** Number of resources already scanned. */
		resourcesScanned: FormControl<number | null | undefined>,

		/** Time when the request started processing, i.e. when the state was set to RUNNING. */
		startTime: FormControl<string | null | undefined>,

		/** The current state of the operation. */
		state: FormControl<GoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadataState | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadataFormProperties>({
			requestTime: new FormControl<string | null | undefined>(undefined),
			resourcesFound: new FormControl<number | null | undefined>(undefined),
			resourcesPending: new FormControl<number | null | undefined>(undefined),
			resourcesScanned: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadataState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadataState { PREVIEW_STATE_UNSPECIFIED = 0, PREVIEW_PENDING = 1, PREVIEW_RUNNING = 2, PREVIEW_SUCCEEDED = 3, PREVIEW_FAILED = 4 }


	/** ListOrgPolicyViolationsPreviewsResponse is the response message for OrgPolicyViolationsPreviewService.ListOrgPolicyViolationsPreviews. */
	export interface GoogleCloudPolicysimulatorV1alphaListOrgPolicyViolationsPreviewsResponse {

		/** A token that you can use to retrieve the next page of results. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The list of OrgPolicyViolationsPreview */
		orgPolicyViolationsPreviews?: Array<GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreview>;
	}

	/** ListOrgPolicyViolationsPreviewsResponse is the response message for OrgPolicyViolationsPreviewService.ListOrgPolicyViolationsPreviews. */
	export interface GoogleCloudPolicysimulatorV1alphaListOrgPolicyViolationsPreviewsResponseFormProperties {

		/** A token that you can use to retrieve the next page of results. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaListOrgPolicyViolationsPreviewsResponseFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaListOrgPolicyViolationsPreviewsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OrgPolicyViolationsPreview is a resource providing a preview of the violations that will exist if an OrgPolicy change is made. The list of violations are modeled as child resources and retrieved via a ListOrgPolicyViolations API call. There are potentially more OrgPolicyViolations than could fit in an embedded field. Thus, the use of a child resource instead of a field. */
	export interface GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreview {

		/** Output only. Time when this `OrgPolicyViolationsPreview` was created. */
		createTime?: string | null;

		/** Output only. The names of the constraints against which all `OrgPolicyViolations` were evaluated. If `OrgPolicyOverlay` only contains `PolicyOverlay` then it contains the name of the configured custom constraint, applicable to the specified policies. Otherwise it contains the name of the constraint specified in `CustomConstraintOverlay`. Format: `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` */
		customConstraints?: Array<string>;

		/** Output only. The resource name of the `OrgPolicyViolationsPreview`. It has the following format: `organizations/{organization}/locations/{location}/orgPolicyViolationsPreviews/{orgPolicyViolationsPreview}` Example: `organizations/my-example-org/locations/global/orgPolicyViolationsPreviews/506a5f7f` */
		name?: string | null;

		/** The proposed changes to OrgPolicy. */
		overlay?: GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlay;

		/** A summary of the state of all resources scanned for compliance with the changed OrgPolicy. */
		resourceCounts?: GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreviewResourceCounts;

		/** Output only. The state of the `OrgPolicyViolationsPreview`. */
		state?: GoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadataState | null;

		/** Output only. The number of OrgPolicyViolations in this `OrgPolicyViolationsPreview`. This count may differ from `resource_summary.noncompliant_count` because each OrgPolicyViolation is specific to a resource **and** constraint. If there are multiple constraints being evaluated (i.e. multiple policies in the overlay), a single resource may violate multiple constraints. */
		violationsCount?: number | null;
	}

	/** OrgPolicyViolationsPreview is a resource providing a preview of the violations that will exist if an OrgPolicy change is made. The list of violations are modeled as child resources and retrieved via a ListOrgPolicyViolations API call. There are potentially more OrgPolicyViolations than could fit in an embedded field. Thus, the use of a child resource instead of a field. */
	export interface GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreviewFormProperties {

		/** Output only. Time when this `OrgPolicyViolationsPreview` was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The resource name of the `OrgPolicyViolationsPreview`. It has the following format: `organizations/{organization}/locations/{location}/orgPolicyViolationsPreviews/{orgPolicyViolationsPreview}` Example: `organizations/my-example-org/locations/global/orgPolicyViolationsPreviews/506a5f7f` */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the `OrgPolicyViolationsPreview`. */
		state: FormControl<GoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadataState | null | undefined>,

		/** Output only. The number of OrgPolicyViolations in this `OrgPolicyViolationsPreview`. This count may differ from `resource_summary.noncompliant_count` because each OrgPolicyViolation is specific to a resource **and** constraint. If there are multiple constraints being evaluated (i.e. multiple policies in the overlay), a single resource may violate multiple constraints. */
		violationsCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreviewFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreviewFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadataState | null | undefined>(undefined),
			violationsCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The proposed changes to OrgPolicy. */
	export interface GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlay {

		/** The OrgPolicy CustomConstraint changes to preview violations for. Any existing CustomConstraints with the same name will be overridden in the simulation. That is, violations will be determined as if all custom constraints in the overlay were instantiated. Only a single custom_constraint is supported in the overlay at a time. For evaluating multiple constraints, multiple `GenerateOrgPolicyViolationsPreview` requests are made, where each request evaluates a single constraint. */
		customConstraints?: Array<GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayCustomConstraintOverlay>;

		/** The OrgPolicy changes to preview violations for. Any existing OrgPolicies with the same name will be overridden in the simulation. That is, violations will be determined as if all policies in the overlay were created or updated. */
		policies?: Array<GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayPolicyOverlay>;
	}

	/** The proposed changes to OrgPolicy. */
	export interface GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayFormProperties {
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayFormProperties>({
		});

	}


	/** A change to an OrgPolicy custom constraint. */
	export interface GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayCustomConstraintOverlay {

		/** A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can apply policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*. */
		customConstraint?: GoogleCloudOrgpolicyV2CustomConstraint;

		/** Resource the constraint is attached to. Example: "organization/987654" */
		customConstraintParent?: string | null;
	}

	/** A change to an OrgPolicy custom constraint. */
	export interface GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayCustomConstraintOverlayFormProperties {

		/** Resource the constraint is attached to. Example: "organization/987654" */
		customConstraintParent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayCustomConstraintOverlayFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayCustomConstraintOverlayFormProperties>({
			customConstraintParent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A change to an OrgPolicy. */
	export interface GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayPolicyOverlay {

		/** Defines an organization policy which is used to specify constraints for configurations of Google Cloud resources. */
		policy?: GoogleCloudOrgpolicyV2Policy;

		/** The parent of the policy we are attaching to. Example: "projects/123456" */
		policyParent?: string | null;
	}

	/** A change to an OrgPolicy. */
	export interface GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayPolicyOverlayFormProperties {

		/** The parent of the policy we are attaching to. Example: "projects/123456" */
		policyParent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayPolicyOverlayFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaOrgPolicyOverlayPolicyOverlayFormProperties>({
			policyParent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of the state of all resources scanned for compliance with the changed OrgPolicy. */
	export interface GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreviewResourceCounts {

		/** Number of scanned resources with zero violations. */
		compliant?: number | null;

		/** Number of resources that returned an error when scanned. */
		errors?: number | null;

		/** Number of scanned resources with at least one violation. */
		noncompliant?: number | null;

		/** Number of resources checked for compliance. Must equal: unenforced + noncompliant + compliant + error */
		scanned?: number | null;

		/** Number of resources where the constraint was not enforced, i.e. the Policy set `enforced: false` for that resource. */
		unenforced?: number | null;
	}

	/** A summary of the state of all resources scanned for compliance with the changed OrgPolicy. */
	export interface GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreviewResourceCountsFormProperties {

		/** Number of scanned resources with zero violations. */
		compliant: FormControl<number | null | undefined>,

		/** Number of resources that returned an error when scanned. */
		errors: FormControl<number | null | undefined>,

		/** Number of scanned resources with at least one violation. */
		noncompliant: FormControl<number | null | undefined>,

		/** Number of resources checked for compliance. Must equal: unenforced + noncompliant + compliant + error */
		scanned: FormControl<number | null | undefined>,

		/** Number of resources where the constraint was not enforced, i.e. the Policy set `enforced: false` for that resource. */
		unenforced: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreviewResourceCountsFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreviewResourceCountsFormProperties>({
			compliant: new FormControl<number | null | undefined>(undefined),
			errors: new FormControl<number | null | undefined>(undefined),
			noncompliant: new FormControl<number | null | undefined>(undefined),
			scanned: new FormControl<number | null | undefined>(undefined),
			unenforced: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** ListOrgPolicyViolationsResponse is the response message for OrgPolicyViolationsPreviewService.ListOrgPolicyViolations */
	export interface GoogleCloudPolicysimulatorV1alphaListOrgPolicyViolationsResponse {

		/** A token that you can use to retrieve the next page of results. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The list of OrgPolicyViolations */
		orgPolicyViolations?: Array<GoogleCloudPolicysimulatorV1alphaOrgPolicyViolation>;
	}

	/** ListOrgPolicyViolationsResponse is the response message for OrgPolicyViolationsPreviewService.ListOrgPolicyViolations */
	export interface GoogleCloudPolicysimulatorV1alphaListOrgPolicyViolationsResponseFormProperties {

		/** A token that you can use to retrieve the next page of results. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaListOrgPolicyViolationsResponseFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaListOrgPolicyViolationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OrgPolicyViolation is a resource representing a single resource violating a single OrgPolicy constraint. */
	export interface GoogleCloudPolicysimulatorV1alphaOrgPolicyViolation {

		/** A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can apply policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*. */
		customConstraint?: GoogleCloudOrgpolicyV2CustomConstraint;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** The name of the `OrgPolicyViolation`. Example: organizations/my-example-org/locations/global/orgPolicyViolationsPreviews/506a5f7f/orgPolicyViolations/38ce` */
		name?: string | null;

		/** ResourceContext provides the context we know about a resource. It is similar in concept to google.cloud.asset.v1.Resource, but focuses on the information specifically used by Simulator. */
		resource?: GoogleCloudPolicysimulatorV1alphaResourceContext;
	}

	/** OrgPolicyViolation is a resource representing a single resource violating a single OrgPolicy constraint. */
	export interface GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationFormProperties {

		/** The name of the `OrgPolicyViolation`. Example: organizations/my-example-org/locations/global/orgPolicyViolationsPreviews/506a5f7f/orgPolicyViolations/38ce` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaOrgPolicyViolationFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ResourceContext provides the context we know about a resource. It is similar in concept to google.cloud.asset.v1.Resource, but focuses on the information specifically used by Simulator. */
	export interface GoogleCloudPolicysimulatorV1alphaResourceContext {

		/** The ancestry path of the resource in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. If the resource is a project, folder, or organization, the ancestry path starts from the resource itself. Example: `["projects/123456789", "folders/5432", "organizations/1234"]` */
		ancestors?: Array<string>;

		/** The asset type of the resource as defined by CAIS. Example: `compute.googleapis.com/Firewall` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType?: string | null;

		/** The full name of the resource. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		resource?: string | null;
	}

	/** ResourceContext provides the context we know about a resource. It is similar in concept to google.cloud.asset.v1.Resource, but focuses on the information specifically used by Simulator. */
	export interface GoogleCloudPolicysimulatorV1alphaResourceContextFormProperties {

		/** The asset type of the resource as defined by CAIS. Example: `compute.googleapis.com/Firewall` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType: FormControl<string | null | undefined>,

		/** The full name of the resource. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaResourceContextFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaResourceContextFormProperties>({
			assetType: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for Simulator.ListReplayResults. */
	export interface GoogleCloudPolicysimulatorV1alphaListReplayResultsResponse {

		/** A token that you can use to retrieve the next page of ReplayResult objects. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The results of running a Replay. */
		replayResults?: Array<GoogleCloudPolicysimulatorV1alphaReplayResult>;
	}

	/** Response message for Simulator.ListReplayResults. */
	export interface GoogleCloudPolicysimulatorV1alphaListReplayResultsResponseFormProperties {

		/** A token that you can use to retrieve the next page of ReplayResult objects. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaListReplayResultsResponseFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaListReplayResultsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of replaying a single access tuple against a simulated state. */
	export interface GoogleCloudPolicysimulatorV1alphaReplayResult {

		/** Information about the principal, resource, and permission to check. */
		accessTuple?: GoogleCloudPolicysimulatorV1alphaAccessTuple;

		/** The difference between the results of evaluating an access tuple under the current (baseline) policies and under the proposed (simulated) policies. This difference explains how a principal's access could change if the proposed policies were applied. */
		diff?: GoogleCloudPolicysimulatorV1alphaReplayDiff;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		lastSeenDate?: GoogleTypeDate;

		/** The resource name of the `ReplayResult`, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}/results/{replay-result-id}`, where `{resource-id}` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36/results/1234` */
		name?: string | null;

		/** The Replay that the access tuple was included in. */
		parent?: string | null;
	}

	/** The result of replaying a single access tuple against a simulated state. */
	export interface GoogleCloudPolicysimulatorV1alphaReplayResultFormProperties {

		/** The resource name of the `ReplayResult`, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}/results/{replay-result-id}`, where `{resource-id}` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36/results/1234` */
		name: FormControl<string | null | undefined>,

		/** The Replay that the access tuple was included in. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaReplayResultFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaReplayResultFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The difference between the results of evaluating an access tuple under the current (baseline) policies and under the proposed (simulated) policies. This difference explains how a principal's access could change if the proposed policies were applied. */
	export interface GoogleCloudPolicysimulatorV1alphaReplayDiff {

		/** A summary and comparison of the principal's access under the current (baseline) policies and the proposed (simulated) policies for a single access tuple. */
		accessDiff?: GoogleCloudPolicysimulatorV1alphaAccessStateDiff;
	}

	/** The difference between the results of evaluating an access tuple under the current (baseline) policies and under the proposed (simulated) policies. This difference explains how a principal's access could change if the proposed policies were applied. */
	export interface GoogleCloudPolicysimulatorV1alphaReplayDiffFormProperties {
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaReplayDiffFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaReplayDiffFormProperties>({
		});

	}


	/** Response message for Simulator.ListReplays. */
	export interface GoogleCloudPolicysimulatorV1alphaListReplaysResponse {

		/** A token that you can use to retrieve the next page of results. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The list of Replay objects. */
		replays?: Array<GoogleCloudPolicysimulatorV1alphaReplay>;
	}

	/** Response message for Simulator.ListReplays. */
	export interface GoogleCloudPolicysimulatorV1alphaListReplaysResponseFormProperties {

		/** A token that you can use to retrieve the next page of results. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaListReplaysResponseFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaListReplaysResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource describing a `Replay`, or simulation. */
	export interface GoogleCloudPolicysimulatorV1alphaReplay {

		/** The configuration used for a Replay. */
		config?: GoogleCloudPolicysimulatorV1alphaReplayConfig;

		/** Output only. The resource name of the `Replay`, which has the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}`, where `{resource-id}` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36` */
		name?: string | null;

		/** Summary statistics about the replayed log entries. */
		resultsSummary?: GoogleCloudPolicysimulatorV1alphaReplayResultsSummary;

		/** Output only. The current state of the `Replay`. */
		state?: GoogleCloudPolicysimulatorV1ReplayState | null;
	}

	/** A resource describing a `Replay`, or simulation. */
	export interface GoogleCloudPolicysimulatorV1alphaReplayFormProperties {

		/** Output only. The resource name of the `Replay`, which has the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}`, where `{resource-id}` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36` */
		name: FormControl<string | null | undefined>,

		/** Output only. The current state of the `Replay`. */
		state: FormControl<GoogleCloudPolicysimulatorV1ReplayState | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaReplayFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaReplayFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudPolicysimulatorV1ReplayState | null | undefined>(undefined),
		});

	}


	/** The configuration used for a Replay. */
	export interface GoogleCloudPolicysimulatorV1alphaReplayConfig {

		/** The logs to use as input for the Replay. */
		logSource?: GoogleCloudPolicysimulatorV1ReplayConfigLogSource | null;

		/** A mapping of the resources that you want to simulate policies for and the policies that you want to simulate. Keys are the full resource names for the resources. For example, `//cloudresourcemanager.googleapis.com/projects/my-project`. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. Values are Policy objects representing the policies that you want to simulate. Replays automatically take into account any IAM policies inherited through the resource hierarchy, and any policies set on descendant resources. You do not need to include these policies in the policy overlay. */
		policyOverlay?: {[id: string]: GoogleIamV1Policy };
	}

	/** The configuration used for a Replay. */
	export interface GoogleCloudPolicysimulatorV1alphaReplayConfigFormProperties {

		/** The logs to use as input for the Replay. */
		logSource: FormControl<GoogleCloudPolicysimulatorV1ReplayConfigLogSource | null | undefined>,

		/** A mapping of the resources that you want to simulate policies for and the policies that you want to simulate. Keys are the full resource names for the resources. For example, `//cloudresourcemanager.googleapis.com/projects/my-project`. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. Values are Policy objects representing the policies that you want to simulate. Replays automatically take into account any IAM policies inherited through the resource hierarchy, and any policies set on descendant resources. You do not need to include these policies in the policy overlay. */
		policyOverlay: FormControl<{[id: string]: GoogleIamV1Policy } | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaReplayConfigFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaReplayConfigFormProperties>({
			logSource: new FormControl<GoogleCloudPolicysimulatorV1ReplayConfigLogSource | null | undefined>(undefined),
			policyOverlay: new FormControl<{[id: string]: GoogleIamV1Policy } | null | undefined>(undefined),
		});

	}


	/** Summary statistics about the replayed log entries. */
	export interface GoogleCloudPolicysimulatorV1alphaReplayResultsSummary {

		/** The number of replayed log entries with a difference between baseline and simulated policies. */
		differenceCount?: number | null;

		/** The number of log entries that could not be replayed. */
		errorCount?: number | null;

		/** The total number of log entries replayed. */
		logCount?: number | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		newestDate?: GoogleTypeDate;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		oldestDate?: GoogleTypeDate;

		/** The number of replayed log entries with no difference between baseline and simulated policies. */
		unchangedCount?: number | null;
	}

	/** Summary statistics about the replayed log entries. */
	export interface GoogleCloudPolicysimulatorV1alphaReplayResultsSummaryFormProperties {

		/** The number of replayed log entries with a difference between baseline and simulated policies. */
		differenceCount: FormControl<number | null | undefined>,

		/** The number of log entries that could not be replayed. */
		errorCount: FormControl<number | null | undefined>,

		/** The total number of log entries replayed. */
		logCount: FormControl<number | null | undefined>,

		/** The number of replayed log entries with no difference between baseline and simulated policies. */
		unchangedCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1alphaReplayResultsSummaryFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1alphaReplayResultsSummaryFormProperties>({
			differenceCount: new FormControl<number | null | undefined>(undefined),
			errorCount: new FormControl<number | null | undefined>(undefined),
			logCount: new FormControl<number | null | undefined>(undefined),
			unchangedCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** GenerateOrgPolicyViolationsPreviewOperationMetadata is metadata about an OrgPolicyViolationsPreview generations operation. */
	export interface GoogleCloudPolicysimulatorV1betaGenerateOrgPolicyViolationsPreviewOperationMetadata {

		/** Time when the request was received. */
		requestTime?: string | null;

		/** Total number of resources that need scanning. Should equal resource_scanned + resources_pending */
		resourcesFound?: number | null;

		/** Number of resources still to scan. */
		resourcesPending?: number | null;

		/** Number of resources already scanned. */
		resourcesScanned?: number | null;

		/** Time when the request started processing, i.e. when the state was set to RUNNING. */
		startTime?: string | null;

		/** The current state of the operation. */
		state?: GoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadataState | null;
	}

	/** GenerateOrgPolicyViolationsPreviewOperationMetadata is metadata about an OrgPolicyViolationsPreview generations operation. */
	export interface GoogleCloudPolicysimulatorV1betaGenerateOrgPolicyViolationsPreviewOperationMetadataFormProperties {

		/** Time when the request was received. */
		requestTime: FormControl<string | null | undefined>,

		/** Total number of resources that need scanning. Should equal resource_scanned + resources_pending */
		resourcesFound: FormControl<number | null | undefined>,

		/** Number of resources still to scan. */
		resourcesPending: FormControl<number | null | undefined>,

		/** Number of resources already scanned. */
		resourcesScanned: FormControl<number | null | undefined>,

		/** Time when the request started processing, i.e. when the state was set to RUNNING. */
		startTime: FormControl<string | null | undefined>,

		/** The current state of the operation. */
		state: FormControl<GoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadataState | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1betaGenerateOrgPolicyViolationsPreviewOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1betaGenerateOrgPolicyViolationsPreviewOperationMetadataFormProperties>({
			requestTime: new FormControl<string | null | undefined>(undefined),
			resourcesFound: new FormControl<number | null | undefined>(undefined),
			resourcesPending: new FormControl<number | null | undefined>(undefined),
			resourcesScanned: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadataState | null | undefined>(undefined),
		});

	}


	/** The proposed changes to OrgPolicy. */
	export interface GoogleCloudPolicysimulatorV1betaOrgPolicyOverlay {

		/** The OrgPolicy CustomConstraint changes to preview violations for. Any existing CustomConstraints with the same name will be overridden in the simulation. That is, violations will be determined as if all custom constraints in the overlay were instantiated. Only a single custom_constraint is supported in the overlay at a time. For evaluating multiple constraints, multiple `GenerateOrgPolicyViolationsPreview` requests are made, where each request evaluates a single constraint. */
		customConstraints?: Array<GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlay>;

		/** The OrgPolicy changes to preview violations for. Any existing OrgPolicies with the same name will be overridden in the simulation. That is, violations will be determined as if all policies in the overlay were created or updated. */
		policies?: Array<GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayPolicyOverlay>;
	}

	/** The proposed changes to OrgPolicy. */
	export interface GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayFormProperties {
	}
	export function CreateGoogleCloudPolicysimulatorV1betaOrgPolicyOverlayFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayFormProperties>({
		});

	}


	/** A change to an OrgPolicy custom constraint. */
	export interface GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlay {

		/** A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can apply policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*. */
		customConstraint?: GoogleCloudOrgpolicyV2CustomConstraint;

		/** Resource the constraint is attached to. Example: "organization/987654" */
		customConstraintParent?: string | null;
	}

	/** A change to an OrgPolicy custom constraint. */
	export interface GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlayFormProperties {

		/** Resource the constraint is attached to. Example: "organization/987654" */
		customConstraintParent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlayFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayCustomConstraintOverlayFormProperties>({
			customConstraintParent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A change to an OrgPolicy. */
	export interface GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayPolicyOverlay {

		/** Defines an organization policy which is used to specify constraints for configurations of Google Cloud resources. */
		policy?: GoogleCloudOrgpolicyV2Policy;

		/** The parent of the policy we are attaching to. Example: "projects/123456" */
		policyParent?: string | null;
	}

	/** A change to an OrgPolicy. */
	export interface GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayPolicyOverlayFormProperties {

		/** The parent of the policy we are attaching to. Example: "projects/123456" */
		policyParent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1betaOrgPolicyOverlayPolicyOverlayFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1betaOrgPolicyOverlayPolicyOverlayFormProperties>({
			policyParent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OrgPolicyViolationsPreview is a resource providing a preview of the violations that will exist if an OrgPolicy change is made. The list of violations are modeled as child resources and retrieved via a ListOrgPolicyViolations API call. There are potentially more OrgPolicyViolations than could fit in an embedded field. Thus, the use of a child resource instead of a field. */
	export interface GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreview {

		/** Output only. Time when this `OrgPolicyViolationsPreview` was created. */
		createTime?: string | null;

		/** Output only. The names of the constraints against which all `OrgPolicyViolations` were evaluated. If `OrgPolicyOverlay` only contains `PolicyOverlay` then it contains the name of the configured custom constraint, applicable to the specified policies. Otherwise it contains the name of the constraint specified in `CustomConstraintOverlay`. Format: `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` */
		customConstraints?: Array<string>;

		/** Output only. The resource name of the `OrgPolicyViolationsPreview`. It has the following format: `organizations/{organization}/locations/{location}/orgPolicyViolationsPreviews/{orgPolicyViolationsPreview}` Example: `organizations/my-example-org/locations/global/orgPolicyViolationsPreviews/506a5f7f` */
		name?: string | null;

		/** The proposed changes to OrgPolicy. */
		overlay?: GoogleCloudPolicysimulatorV1betaOrgPolicyOverlay;

		/** A summary of the state of all resources scanned for compliance with the changed OrgPolicy. */
		resourceCounts?: GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreviewResourceCounts;

		/** Output only. The state of the `OrgPolicyViolationsPreview`. */
		state?: GoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadataState | null;

		/** Output only. The number of OrgPolicyViolations in this `OrgPolicyViolationsPreview`. This count may differ from `resource_summary.noncompliant_count` because each OrgPolicyViolation is specific to a resource **and** constraint. If there are multiple constraints being evaluated (i.e. multiple policies in the overlay), a single resource may violate multiple constraints. */
		violationsCount?: number | null;
	}

	/** OrgPolicyViolationsPreview is a resource providing a preview of the violations that will exist if an OrgPolicy change is made. The list of violations are modeled as child resources and retrieved via a ListOrgPolicyViolations API call. There are potentially more OrgPolicyViolations than could fit in an embedded field. Thus, the use of a child resource instead of a field. */
	export interface GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreviewFormProperties {

		/** Output only. Time when this `OrgPolicyViolationsPreview` was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The resource name of the `OrgPolicyViolationsPreview`. It has the following format: `organizations/{organization}/locations/{location}/orgPolicyViolationsPreviews/{orgPolicyViolationsPreview}` Example: `organizations/my-example-org/locations/global/orgPolicyViolationsPreviews/506a5f7f` */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the `OrgPolicyViolationsPreview`. */
		state: FormControl<GoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadataState | null | undefined>,

		/** Output only. The number of OrgPolicyViolations in this `OrgPolicyViolationsPreview`. This count may differ from `resource_summary.noncompliant_count` because each OrgPolicyViolation is specific to a resource **and** constraint. If there are multiple constraints being evaluated (i.e. multiple policies in the overlay), a single resource may violate multiple constraints. */
		violationsCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreviewFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreviewFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudPolicysimulatorV1alphaGenerateOrgPolicyViolationsPreviewOperationMetadataState | null | undefined>(undefined),
			violationsCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A summary of the state of all resources scanned for compliance with the changed OrgPolicy. */
	export interface GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreviewResourceCounts {

		/** Number of scanned resources with zero violations. */
		compliant?: number | null;

		/** Number of resources that returned an error when scanned. */
		errors?: number | null;

		/** Number of scanned resources with at least one violation. */
		noncompliant?: number | null;

		/** Number of resources checked for compliance. Must equal: unenforced + noncompliant + compliant + error */
		scanned?: number | null;

		/** Number of resources where the constraint was not enforced, i.e. the Policy set `enforced: false` for that resource. */
		unenforced?: number | null;
	}

	/** A summary of the state of all resources scanned for compliance with the changed OrgPolicy. */
	export interface GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreviewResourceCountsFormProperties {

		/** Number of scanned resources with zero violations. */
		compliant: FormControl<number | null | undefined>,

		/** Number of resources that returned an error when scanned. */
		errors: FormControl<number | null | undefined>,

		/** Number of scanned resources with at least one violation. */
		noncompliant: FormControl<number | null | undefined>,

		/** Number of resources checked for compliance. Must equal: unenforced + noncompliant + compliant + error */
		scanned: FormControl<number | null | undefined>,

		/** Number of resources where the constraint was not enforced, i.e. the Policy set `enforced: false` for that resource. */
		unenforced: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreviewResourceCountsFormGroup() {
		return new FormGroup<GoogleCloudPolicysimulatorV1betaOrgPolicyViolationsPreviewResourceCountsFormProperties>({
			compliant: new FormControl<number | null | undefined>(undefined),
			errors: new FormControl<number | null | undefined>(undefined),
			noncompliant: new FormControl<number | null | undefined>(undefined),
			scanned: new FormControl<number | null | undefined>(undefined),
			unenforced: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunningListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunningOperationFormGroup() {
		return new FormGroup<GoogleLongrunningOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1alpha/{name}
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Policysimulator_projects_locations_replays_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * ListOrgPolicyViolations lists the OrgPolicyViolations that are present in an OrgPolicyViolationsPreview.
		 * Get v1alpha/{parent}/orgPolicyViolations
		 * @param {string} parent Required. The OrgPolicyViolationsPreview to get OrgPolicyViolations from. Format: organizations/{organization}/locations/{location}/orgPolicyViolationsPreviews/{orgPolicyViolationsPreview}
		 * @param {number} pageSize The maximum number of items to return. The service may return fewer than this value. If unspecified, at most 50 items will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters must match the call that provided the page token.
		 * @return {GoogleCloudPolicysimulatorV1alphaListOrgPolicyViolationsResponse} Successful response
		 */
		Policysimulator_organizations_locations_orgPolicyViolationsPreviews_orgPolicyViolations_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudPolicysimulatorV1alphaListOrgPolicyViolationsResponse> {
			return this.http.get<GoogleCloudPolicysimulatorV1alphaListOrgPolicyViolationsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/orgPolicyViolations&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * ListOrgPolicyViolationsPreviews lists each OrgPolicyViolationsPreview in an organization. Each OrgPolicyViolationsPreview is available for at least 7 days.
		 * Get v1alpha/{parent}/orgPolicyViolationsPreviews
		 * @param {string} parent Required. The parent the violations are scoped to. Format: `organizations/{organization}/locations/{location}` Example: `organizations/my-example-org/locations/global`
		 * @param {number} pageSize The maximum number of items to return. The service may return fewer than this value. If unspecified, at most 5 items will be returned. The maximum value is 10; values above 10 will be coerced to 10.
		 * @param {string} pageToken A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters must match the call that provided the page token.
		 * @return {GoogleCloudPolicysimulatorV1alphaListOrgPolicyViolationsPreviewsResponse} Successful response
		 */
		Policysimulator_organizations_locations_orgPolicyViolationsPreviews_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudPolicysimulatorV1alphaListOrgPolicyViolationsPreviewsResponse> {
			return this.http.get<GoogleCloudPolicysimulatorV1alphaListOrgPolicyViolationsPreviewsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/orgPolicyViolationsPreviews&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * GenerateOrgPolicyViolationsPreview generates an OrgPolicyViolationsPreview for the proposed changes in the provided OrgPolicyViolationsPreview.OrgPolicyOverlay. The changes to OrgPolicy are specified by this `OrgPolicyOverlay`. The resources to scan are inferred from these specified changes.
		 * Post v1alpha/{parent}/orgPolicyViolationsPreviews
		 * @param {string} parent Required. The organization under which this OrgPolicyViolationsPreview will be created. Example: `organizations/my-example-org/locations/global`
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Policysimulator_organizations_locations_orgPolicyViolationsPreviews(parent: string, requestBody: GoogleCloudPolicysimulatorV1alphaOrgPolicyViolationsPreview): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/orgPolicyViolationsPreviews', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists each Replay in a project, folder, or organization. Each `Replay` is available for at least 7 days.
		 * Get v1alpha/{parent}/replays
		 * @param {string} parent Required. The parent resource, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global`, where `{resource-id}` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global` Only `Replay` objects that are direct children of the provided parent are listed. In other words, `Replay` objects that are children of a project will not be included when the parent is a folder of that project.
		 * @param {number} pageSize The maximum number of Replay objects to return. Defaults to 50. The maximum value is 1000; values above 1000 are rounded down to 1000.
		 * @param {string} pageToken A page token, received from a previous Simulator.ListReplays call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to Simulator.ListReplays must match the call that provided the page token.
		 * @return {GoogleCloudPolicysimulatorV1alphaListReplaysResponse} Successful response
		 */
		Policysimulator_projects_locations_replays_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudPolicysimulatorV1alphaListReplaysResponse> {
			return this.http.get<GoogleCloudPolicysimulatorV1alphaListReplaysResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/replays&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates and starts a Replay using the given ReplayConfig.
		 * Post v1alpha/{parent}/replays
		 * @param {string} parent Required. The parent resource where this Replay will be created. This resource must be a project, folder, or organization with a location. Example: `projects/my-example-project/locations/global`
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Policysimulator_projects_locations_replays_create(parent: string, requestBody: GoogleCloudPolicysimulatorV1alphaReplay): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/replays', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the results of running a Replay.
		 * Get v1alpha/{parent}/results
		 * @param {string} parent Required. The Replay whose results are listed, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}` Example: `projects/my-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36`
		 * @param {number} pageSize The maximum number of ReplayResult objects to return. Defaults to 5000. The maximum value is 5000; values above 5000 are rounded down to 5000.
		 * @param {string} pageToken A page token, received from a previous Simulator.ListReplayResults call. Provide this token to retrieve the next page of results. When paginating, all other parameters provided to [Simulator.ListReplayResults[] must match the call that provided the page token.
		 * @return {GoogleCloudPolicysimulatorV1alphaListReplayResultsResponse} Successful response
		 */
		Policysimulator_projects_locations_replays_results_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudPolicysimulatorV1alphaListReplayResultsResponse> {
			return this.http.get<GoogleCloudPolicysimulatorV1alphaListReplayResultsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/results&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

