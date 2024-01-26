import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Custom content configuration for access denied page. IAP allows customers to define a custom URI to use as the error page when access is denied to users. If IAP prevents access to this page, the default IAP error page will be displayed instead. */
	export interface AccessDeniedPageSettings {

		/** The URI to be redirected to when access is denied. */
		accessDeniedPageUri?: string | null;

		/** Whether to generate a troubleshooting URL on access denied events to this application. */
		generateTroubleshootingUri?: boolean | null;

		/** Whether to generate remediation token on access denied events to this application. */
		remediationTokenGenerationEnabled?: boolean | null;
	}

	/** Custom content configuration for access denied page. IAP allows customers to define a custom URI to use as the error page when access is denied to users. If IAP prevents access to this page, the default IAP error page will be displayed instead. */
	export interface AccessDeniedPageSettingsFormProperties {

		/** The URI to be redirected to when access is denied. */
		accessDeniedPageUri: FormControl<string | null | undefined>,

		/** Whether to generate a troubleshooting URL on access denied events to this application. */
		generateTroubleshootingUri: FormControl<boolean | null | undefined>,

		/** Whether to generate remediation token on access denied events to this application. */
		remediationTokenGenerationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAccessDeniedPageSettingsFormGroup() {
		return new FormGroup<AccessDeniedPageSettingsFormProperties>({
			accessDeniedPageUri: new FormControl<string | null | undefined>(undefined),
			generateTroubleshootingUri: new FormControl<boolean | null | undefined>(undefined),
			remediationTokenGenerationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Access related settings for IAP protected apps. */
	export interface AccessSettings {

		/** Configuration for IAP allowed domains. Lets you to restrict access to an app and allow access to only the domains that you list. */
		allowedDomainsSettings?: AllowedDomainsSettings;

		/** Allows customers to configure HTTP request paths that'll allow HTTP OPTIONS call to bypass authentication and authorization. */
		corsSettings?: CorsSettings;

		/** Allows customers to configure tenant_id for GCIP instance per-app. */
		gcipSettings?: GcipSettings;

		/** Configuration for OAuth login&consent flow behavior as well as for OAuth Credentials. */
		oauthSettings?: OAuthSettings;

		/** PolicyDelegationConfig allows google-internal teams to use IAP for apps hosted in a tenant project. Using these settings, the app can delegate permission check to happen against the linked customer project. This is only ever supposed to be used by google internal teams, hence the restriction on the proto. */
		policyDelegationSettings?: PolicyDelegationSettings;

		/** Configuration for IAP reauthentication policies. */
		reauthSettings?: ReauthSettings;
	}

	/** Access related settings for IAP protected apps. */
	export interface AccessSettingsFormProperties {
	}
	export function CreateAccessSettingsFormGroup() {
		return new FormGroup<AccessSettingsFormProperties>({
		});

	}


	/** Configuration for IAP allowed domains. Lets you to restrict access to an app and allow access to only the domains that you list. */
	export interface AllowedDomainsSettings {

		/** List of trusted domains. */
		domains?: Array<string>;

		/** Configuration for customers to opt in for the feature. */
		enable?: boolean | null;
	}

	/** Configuration for IAP allowed domains. Lets you to restrict access to an app and allow access to only the domains that you list. */
	export interface AllowedDomainsSettingsFormProperties {

		/** Configuration for customers to opt in for the feature. */
		enable: FormControl<boolean | null | undefined>,
	}
	export function CreateAllowedDomainsSettingsFormGroup() {
		return new FormGroup<AllowedDomainsSettingsFormProperties>({
			enable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Allows customers to configure HTTP request paths that'll allow HTTP OPTIONS call to bypass authentication and authorization. */
	export interface CorsSettings {

		/** Configuration to allow HTTP OPTIONS calls to skip authorization. If undefined, IAP will not apply any special logic to OPTIONS requests. */
		allowHttpOptions?: boolean | null;
	}

	/** Allows customers to configure HTTP request paths that'll allow HTTP OPTIONS call to bypass authentication and authorization. */
	export interface CorsSettingsFormProperties {

		/** Configuration to allow HTTP OPTIONS calls to skip authorization. If undefined, IAP will not apply any special logic to OPTIONS requests. */
		allowHttpOptions: FormControl<boolean | null | undefined>,
	}
	export function CreateCorsSettingsFormGroup() {
		return new FormGroup<CorsSettingsFormProperties>({
			allowHttpOptions: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Allows customers to configure tenant_id for GCIP instance per-app. */
	export interface GcipSettings {

		/** Login page URI associated with the GCIP tenants. Typically, all resources within the same project share the same login page, though it could be overridden at the sub resource level. */
		loginPageUri?: string | null;

		/** GCIP tenant ids that are linked to the IAP resource. tenant_ids could be a string beginning with a number character to indicate authenticating with GCIP tenant flow, or in the format of _ to indicate authenticating with GCIP agent flow. If agent flow is used, tenant_ids should only contain one single element, while for tenant flow, tenant_ids can contain multiple elements. */
		tenantIds?: Array<string>;
	}

	/** Allows customers to configure tenant_id for GCIP instance per-app. */
	export interface GcipSettingsFormProperties {

		/** Login page URI associated with the GCIP tenants. Typically, all resources within the same project share the same login page, though it could be overridden at the sub resource level. */
		loginPageUri: FormControl<string | null | undefined>,
	}
	export function CreateGcipSettingsFormGroup() {
		return new FormGroup<GcipSettingsFormProperties>({
			loginPageUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for OAuth login&consent flow behavior as well as for OAuth Credentials. */
	export interface OAuthSettings {

		/** Domain hint to send as hd=? parameter in OAuth request flow. Enables redirect to primary IDP by skipping Google's login screen. https://developers.google.com/identity/protocols/OpenIDConnect#hd-param Note: IAP does not verify that the id token's hd claim matches this value since access behavior is managed by IAM policies. */
		loginHint?: string | null;

		/** List of client ids allowed to use IAP programmatically. */
		programmaticClients?: Array<string>;
	}

	/** Configuration for OAuth login&consent flow behavior as well as for OAuth Credentials. */
	export interface OAuthSettingsFormProperties {

		/** Domain hint to send as hd=? parameter in OAuth request flow. Enables redirect to primary IDP by skipping Google's login screen. https://developers.google.com/identity/protocols/OpenIDConnect#hd-param Note: IAP does not verify that the id token's hd claim matches this value since access behavior is managed by IAM policies. */
		loginHint: FormControl<string | null | undefined>,
	}
	export function CreateOAuthSettingsFormGroup() {
		return new FormGroup<OAuthSettingsFormProperties>({
			loginHint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PolicyDelegationConfig allows google-internal teams to use IAP for apps hosted in a tenant project. Using these settings, the app can delegate permission check to happen against the linked customer project. This is only ever supposed to be used by google internal teams, hence the restriction on the proto. */
	export interface PolicyDelegationSettings {

		/** Permission to check in IAM. */
		iamPermission?: string | null;

		/** The DNS name of the service (e.g. "resourcemanager.googleapis.com"). This should be the domain name part of the full resource names (see https://aip.dev/122#full-resource-names), which is usually the same as IamServiceSpec.service of the service where the resource type is defined. */
		iamServiceName?: string | null;

		/** An internal name for an IAM policy, based on the resource to which the policy applies. Not to be confused with a resource's external full resource name. For more information on this distinction, see go/iam-full-resource-names. */
		policyName?: PolicyName;
		resource?: Resource;
	}

	/** PolicyDelegationConfig allows google-internal teams to use IAP for apps hosted in a tenant project. Using these settings, the app can delegate permission check to happen against the linked customer project. This is only ever supposed to be used by google internal teams, hence the restriction on the proto. */
	export interface PolicyDelegationSettingsFormProperties {

		/** Permission to check in IAM. */
		iamPermission: FormControl<string | null | undefined>,

		/** The DNS name of the service (e.g. "resourcemanager.googleapis.com"). This should be the domain name part of the full resource names (see https://aip.dev/122#full-resource-names), which is usually the same as IamServiceSpec.service of the service where the resource type is defined. */
		iamServiceName: FormControl<string | null | undefined>,
	}
	export function CreatePolicyDelegationSettingsFormGroup() {
		return new FormGroup<PolicyDelegationSettingsFormProperties>({
			iamPermission: new FormControl<string | null | undefined>(undefined),
			iamServiceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An internal name for an IAM policy, based on the resource to which the policy applies. Not to be confused with a resource's external full resource name. For more information on this distinction, see go/iam-full-resource-names. */
	export interface PolicyName {

		/** Identifies an instance of the type. ID format varies by type. The ID format is defined in the IAM .service file that defines the type, either in path_mapping or in a comment. */
		id?: string | null;

		/** For Cloud IAM: The location of the Policy. Must be empty or "global" for Policies owned by global IAM. Must name a region from prodspec/cloud-iam-cloudspec for Regional IAM Policies, see go/iam-faq#where-is-iam-currently-deployed. For Local IAM: This field should be set to "local". */
		region?: string | null;

		/** Resource type. Types are defined in IAM's .service files. Valid values for type might be 'gce', 'gcs', 'project', 'account' etc. */
		type?: string | null;
	}

	/** An internal name for an IAM policy, based on the resource to which the policy applies. Not to be confused with a resource's external full resource name. For more information on this distinction, see go/iam-full-resource-names. */
	export interface PolicyNameFormProperties {

		/** Identifies an instance of the type. ID format varies by type. The ID format is defined in the IAM .service file that defines the type, either in path_mapping or in a comment. */
		id: FormControl<string | null | undefined>,

		/** For Cloud IAM: The location of the Policy. Must be empty or "global" for Policies owned by global IAM. Must name a region from prodspec/cloud-iam-cloudspec for Regional IAM Policies, see go/iam-faq#where-is-iam-currently-deployed. For Local IAM: This field should be set to "local". */
		region: FormControl<string | null | undefined>,

		/** Resource type. Types are defined in IAM's .service files. Valid values for type might be 'gce', 'gcs', 'project', 'account' etc. */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePolicyNameFormGroup() {
		return new FormGroup<PolicyNameFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Resource {

		/** The proto or JSON formatted expected next state of the resource, wrapped in a google.protobuf.Any proto, against which the policy rules are evaluated. Services not integrated with custom org policy can omit this field. Services integrated with custom org policy must populate this field for all requests where the API call changes the state of the resource. Custom org policy backend uses these attributes to enforce custom org policies. When a proto is wrapped, it is generally the One Platform API proto. When a JSON string is wrapped, use `google.protobuf.StringValue` for the inner value. For create operations, GCP service is expected to pass resource from customer request as is. For update/patch operations, GCP service is expected to compute the next state with the patch provided by the user. See go/custom-constraints-org-policy-integration-guide for additional details. */
		expectedNextState?: {[id: string]: any };

		/** The service defined labels of the resource on which the conditions will be evaluated. The semantics - including the key names - are vague to IAM. If the effective condition has a reference to a `resource.labels[foo]` construct, IAM consults with this map to retrieve the values associated with `foo` key for Conditions evaluation. If the provided key is not found in the labels map, the condition would evaluate to false. This field is in limited use. If your intended use case is not expected to express resource.labels attribute in IAM Conditions, leave this field empty. Before planning on using this attribute please: * Read go/iam-conditions-labels-comm and ensure your service can meet the data availability and management requirements. * Talk to iam-conditions-eng@ about your use case. */
		labels?: {[id: string]: string };

		/** Name of the resource on which conditions will be evaluated. Must use the Relative Resource Name of the resource, which is the URI path of the resource without the leading "/". Examples are "projects/_/buckets/[BUCKET-ID]" for storage buckets or "projects/[PROJECT-ID]/global/firewalls/[FIREWALL-ID]" for a firewall. This field is required for evaluating conditions with rules on resource names. For a `list` permission check, the resource.name value must be set to the parent resource. If the parent resource is a project, this field should be left unset. */
		name?: string | null;

		/** The name of the service this resource belongs to. It is configured using the official_service_name of the Service as defined in service configurations under //configs/cloud/resourcetypes. For example, the official_service_name of cloud resource manager service is set as 'cloudresourcemanager.googleapis.com' according to //configs/cloud/resourcetypes/google/cloud/resourcemanager/prod.yaml */
		service?: string | null;

		/** The public resource type name of the resource on which conditions will be evaluated. It is configured using the official_name of the ResourceType as defined in service configurations under //configs/cloud/resourcetypes. For example, the official_name for GCP projects is set as 'cloudresourcemanager.googleapis.com/Project' according to //configs/cloud/resourcetypes/google/cloud/resourcemanager/prod.yaml For details see go/iam-conditions-integration-guide. */
		type?: string | null;
	}
	export interface ResourceFormProperties {

		/** The proto or JSON formatted expected next state of the resource, wrapped in a google.protobuf.Any proto, against which the policy rules are evaluated. Services not integrated with custom org policy can omit this field. Services integrated with custom org policy must populate this field for all requests where the API call changes the state of the resource. Custom org policy backend uses these attributes to enforce custom org policies. When a proto is wrapped, it is generally the One Platform API proto. When a JSON string is wrapped, use `google.protobuf.StringValue` for the inner value. For create operations, GCP service is expected to pass resource from customer request as is. For update/patch operations, GCP service is expected to compute the next state with the patch provided by the user. See go/custom-constraints-org-policy-integration-guide for additional details. */
		expectedNextState: FormControl<{[id: string]: any } | null | undefined>,

		/** The service defined labels of the resource on which the conditions will be evaluated. The semantics - including the key names - are vague to IAM. If the effective condition has a reference to a `resource.labels[foo]` construct, IAM consults with this map to retrieve the values associated with `foo` key for Conditions evaluation. If the provided key is not found in the labels map, the condition would evaluate to false. This field is in limited use. If your intended use case is not expected to express resource.labels attribute in IAM Conditions, leave this field empty. Before planning on using this attribute please: * Read go/iam-conditions-labels-comm and ensure your service can meet the data availability and management requirements. * Talk to iam-conditions-eng@ about your use case. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Name of the resource on which conditions will be evaluated. Must use the Relative Resource Name of the resource, which is the URI path of the resource without the leading "/". Examples are "projects/_/buckets/[BUCKET-ID]" for storage buckets or "projects/[PROJECT-ID]/global/firewalls/[FIREWALL-ID]" for a firewall. This field is required for evaluating conditions with rules on resource names. For a `list` permission check, the resource.name value must be set to the parent resource. If the parent resource is a project, this field should be left unset. */
		name: FormControl<string | null | undefined>,

		/** The name of the service this resource belongs to. It is configured using the official_service_name of the Service as defined in service configurations under //configs/cloud/resourcetypes. For example, the official_service_name of cloud resource manager service is set as 'cloudresourcemanager.googleapis.com' according to //configs/cloud/resourcetypes/google/cloud/resourcemanager/prod.yaml */
		service: FormControl<string | null | undefined>,

		/** The public resource type name of the resource on which conditions will be evaluated. It is configured using the official_name of the ResourceType as defined in service configurations under //configs/cloud/resourcetypes. For example, the official_name for GCP projects is set as 'cloudresourcemanager.googleapis.com/Project' according to //configs/cloud/resourcetypes/google/cloud/resourcemanager/prod.yaml For details see go/iam-conditions-integration-guide. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			expectedNextState: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for IAP reauthentication policies. */
	export interface ReauthSettings {

		/** Reauth session lifetime, how long before a user has to reauthenticate again. */
		maxAge?: string | null;

		/** Reauth method requested. */
		method?: ReauthSettingsMethod | null;

		/** How IAP determines the effective policy in cases of hierarchical policies. Policies are merged from higher in the hierarchy to lower in the hierarchy. */
		policyType?: ReauthSettingsPolicyType | null;
	}

	/** Configuration for IAP reauthentication policies. */
	export interface ReauthSettingsFormProperties {

		/** Reauth session lifetime, how long before a user has to reauthenticate again. */
		maxAge: FormControl<string | null | undefined>,

		/** Reauth method requested. */
		method: FormControl<ReauthSettingsMethod | null | undefined>,

		/** How IAP determines the effective policy in cases of hierarchical policies. Policies are merged from higher in the hierarchy to lower in the hierarchy. */
		policyType: FormControl<ReauthSettingsPolicyType | null | undefined>,
	}
	export function CreateReauthSettingsFormGroup() {
		return new FormGroup<ReauthSettingsFormProperties>({
			maxAge: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<ReauthSettingsMethod | null | undefined>(undefined),
			policyType: new FormControl<ReauthSettingsPolicyType | null | undefined>(undefined),
		});

	}

	export enum ReauthSettingsMethod { METHOD_UNSPECIFIED = 0, LOGIN = 1, PASSWORD = 2, SECURE_KEY = 3, ENROLLED_SECOND_FACTORS = 4 }

	export enum ReauthSettingsPolicyType { POLICY_TYPE_UNSPECIFIED = 0, MINIMUM = 1, DEFAULT = 2 }


	/** Wrapper over application specific settings for IAP. */
	export interface ApplicationSettings {

		/** Custom content configuration for access denied page. IAP allows customers to define a custom URI to use as the error page when access is denied to users. If IAP prevents access to this page, the default IAP error page will be displayed instead. */
		accessDeniedPageSettings?: AccessDeniedPageSettings;

		/** Configuration for propagating attributes to applications protected by IAP. */
		attributePropagationSettings?: AttributePropagationSettings;

		/** The Domain value to set for cookies generated by IAP. This value is not validated by the API, but will be ignored at runtime if invalid. */
		cookieDomain?: string | null;

		/** Configuration for RCToken generated for service mesh workloads protected by IAP. RCToken are IAP generated JWTs that can be verified at the application. The RCToken is primarily used for service mesh deployments, and can be scoped to a single mesh by configuring the audience field accordingly. */
		csmSettings?: CsmSettings;
	}

	/** Wrapper over application specific settings for IAP. */
	export interface ApplicationSettingsFormProperties {

		/** The Domain value to set for cookies generated by IAP. This value is not validated by the API, but will be ignored at runtime if invalid. */
		cookieDomain: FormControl<string | null | undefined>,
	}
	export function CreateApplicationSettingsFormGroup() {
		return new FormGroup<ApplicationSettingsFormProperties>({
			cookieDomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for propagating attributes to applications protected by IAP. */
	export interface AttributePropagationSettings {

		/** Whether the provided attribute propagation settings should be evaluated on user requests. If set to true, attributes returned from the expression will be propagated in the set output credentials. */
		enable?: boolean | null;

		/** Raw string CEL expression. Must return a list of attributes. A maximum of 45 attributes can be selected. Expressions can select different attribute types from `attributes`: `attributes.saml_attributes`, `attributes.iap_attributes`. The following functions are supported: - filter `.filter(, )`: Returns a subset of `` where `` is true for every item. - in ` in `: Returns true if `` contains ``. - selectByName `.selectByName()`: Returns the attribute in `` with the given `` name, otherwise returns empty. - emitAs `.emitAs()`: Sets the `` name field to the given `` for propagation in selected output credentials. - strict `.strict()`: Ignores the `x-goog-iap-attr-` prefix for the provided `` when propagating with the `HEADER` output credential, such as request headers. - append `.append()` OR `.append()`: Appends the provided `` or `` to the end of ``. Example expression: `attributes.saml_attributes.filter(x, x.name in ['test']).append(attributes.iap_attributes.selectByName('exact').emitAs('custom').strict())` */
		expression?: string | null;

		/** Which output credentials attributes selected by the CEL expression should be propagated in. All attributes will be fully duplicated in each selected output credential. */
		outputCredentials?: Array<string>;
	}

	/** Configuration for propagating attributes to applications protected by IAP. */
	export interface AttributePropagationSettingsFormProperties {

		/** Whether the provided attribute propagation settings should be evaluated on user requests. If set to true, attributes returned from the expression will be propagated in the set output credentials. */
		enable: FormControl<boolean | null | undefined>,

		/** Raw string CEL expression. Must return a list of attributes. A maximum of 45 attributes can be selected. Expressions can select different attribute types from `attributes`: `attributes.saml_attributes`, `attributes.iap_attributes`. The following functions are supported: - filter `.filter(, )`: Returns a subset of `` where `` is true for every item. - in ` in `: Returns true if `` contains ``. - selectByName `.selectByName()`: Returns the attribute in `` with the given `` name, otherwise returns empty. - emitAs `.emitAs()`: Sets the `` name field to the given `` for propagation in selected output credentials. - strict `.strict()`: Ignores the `x-goog-iap-attr-` prefix for the provided `` when propagating with the `HEADER` output credential, such as request headers. - append `.append()` OR `.append()`: Appends the provided `` or `` to the end of ``. Example expression: `attributes.saml_attributes.filter(x, x.name in ['test']).append(attributes.iap_attributes.selectByName('exact').emitAs('custom').strict())` */
		expression: FormControl<string | null | undefined>,
	}
	export function CreateAttributePropagationSettingsFormGroup() {
		return new FormGroup<AttributePropagationSettingsFormProperties>({
			enable: new FormControl<boolean | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for RCToken generated for service mesh workloads protected by IAP. RCToken are IAP generated JWTs that can be verified at the application. The RCToken is primarily used for service mesh deployments, and can be scoped to a single mesh by configuring the audience field accordingly. */
	export interface CsmSettings {

		/** Audience claim set in the generated RCToken. This value is not validated by IAP. */
		rctokenAud?: string | null;
	}

	/** Configuration for RCToken generated for service mesh workloads protected by IAP. RCToken are IAP generated JWTs that can be verified at the application. The RCToken is primarily used for service mesh deployments, and can be scoped to a single mesh by configuring the audience field accordingly. */
	export interface CsmSettingsFormProperties {

		/** Audience claim set in the generated RCToken. This value is not validated by IAP. */
		rctokenAud: FormControl<string | null | undefined>,
	}
	export function CreateCsmSettingsFormGroup() {
		return new FormGroup<CsmSettingsFormProperties>({
			rctokenAud: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface Expr {

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
	export interface ExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateExprFormGroup() {
		return new FormGroup<ExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OAuth brand data. NOTE: Only contains a portion of the data that describes a brand. */
	export interface Brand {

		/** Application name displayed on OAuth consent screen. */
		applicationTitle?: string | null;

		/** Output only. Identifier of the brand. NOTE: GCP project number achieves the same brand identification purpose as only one brand per project can be created. */
		name?: string | null;

		/** Output only. Whether the brand is only intended for usage inside the G Suite organization only. */
		orgInternalOnly?: boolean | null;

		/** Support email displayed on the OAuth consent screen. */
		supportEmail?: string | null;
	}

	/** OAuth brand data. NOTE: Only contains a portion of the data that describes a brand. */
	export interface BrandFormProperties {

		/** Application name displayed on OAuth consent screen. */
		applicationTitle: FormControl<string | null | undefined>,

		/** Output only. Identifier of the brand. NOTE: GCP project number achieves the same brand identification purpose as only one brand per project can be created. */
		name: FormControl<string | null | undefined>,

		/** Output only. Whether the brand is only intended for usage inside the G Suite organization only. */
		orgInternalOnly: FormControl<boolean | null | undefined>,

		/** Support email displayed on the OAuth consent screen. */
		supportEmail: FormControl<string | null | undefined>,
	}
	export function CreateBrandFormGroup() {
		return new FormGroup<BrandFormProperties>({
			applicationTitle: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgInternalOnly: new FormControl<boolean | null | undefined>(undefined),
			supportEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GetPolicyOptions;
	}

	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequestFormProperties {
	}
	export function CreateGetIamPolicyRequestFormGroup() {
		return new FormGroup<GetIamPolicyRequestFormProperties>({
		});

	}


	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptions {

		/** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		requestedPolicyVersion?: number | null;
	}

	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptionsFormProperties {

		/** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		requestedPolicyVersion: FormControl<number | null | undefined>,
	}
	export function CreateGetPolicyOptionsFormGroup() {
		return new FormGroup<GetPolicyOptionsFormProperties>({
			requestedPolicyVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The IAP configurable settings. */
	export interface IapSettings {

		/** Access related settings for IAP protected apps. */
		accessSettings?: AccessSettings;

		/** Wrapper over application specific settings for IAP. */
		applicationSettings?: ApplicationSettings;

		/** Required. The resource name of the IAP protected resource. */
		name?: string | null;
	}

	/** The IAP configurable settings. */
	export interface IapSettingsFormProperties {

		/** Required. The resource name of the IAP protected resource. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateIapSettingsFormGroup() {
		return new FormGroup<IapSettingsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the data that describes an Identity Aware Proxy owned client. */
	export interface IdentityAwareProxyClient {

		/** Human-friendly name given to the OAuth client. */
		displayName?: string | null;

		/** Output only. Unique identifier of the OAuth client. */
		name?: string | null;

		/** Output only. Client secret of the OAuth client. */
		secret?: string | null;
	}

	/** Contains the data that describes an Identity Aware Proxy owned client. */
	export interface IdentityAwareProxyClientFormProperties {

		/** Human-friendly name given to the OAuth client. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Unique identifier of the OAuth client. */
		name: FormControl<string | null | undefined>,

		/** Output only. Client secret of the OAuth client. */
		secret: FormControl<string | null | undefined>,
	}
	export function CreateIdentityAwareProxyClientFormGroup() {
		return new FormGroup<IdentityAwareProxyClientFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListBrands. */
	export interface ListBrandsResponse {

		/** Brands existing in the project. */
		brands?: Array<Brand>;
	}

	/** Response message for ListBrands. */
	export interface ListBrandsResponseFormProperties {
	}
	export function CreateListBrandsResponseFormGroup() {
		return new FormGroup<ListBrandsResponseFormProperties>({
		});

	}


	/** Response message for ListIdentityAwareProxyClients. */
	export interface ListIdentityAwareProxyClientsResponse {

		/** Clients existing in the brand. */
		identityAwareProxyClients?: Array<IdentityAwareProxyClient>;

		/** A token, which can be send as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListIdentityAwareProxyClients. */
	export interface ListIdentityAwareProxyClientsResponseFormProperties {

		/** A token, which can be send as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityAwareProxyClientsResponseFormGroup() {
		return new FormGroup<ListIdentityAwareProxyClientsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from ListTunnelDestGroups. */
	export interface ListTunnelDestGroupsResponse {

		/** A token that you can send as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** TunnelDestGroup existing in the project. */
		tunnelDestGroups?: Array<TunnelDestGroup>;
	}

	/** The response from ListTunnelDestGroups. */
	export interface ListTunnelDestGroupsResponseFormProperties {

		/** A token that you can send as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTunnelDestGroupsResponseFormGroup() {
		return new FormGroup<ListTunnelDestGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A TunnelDestGroup. */
	export interface TunnelDestGroup {

		/** Unordered list. List of CIDRs that this group applies to. */
		cidrs?: Array<string>;

		/** Unordered list. List of FQDNs that this group applies to. */
		fqdns?: Array<string>;

		/** Required. Immutable. Identifier for the TunnelDestGroup. Must be unique within the project and contain only lower case letters (a-z) and dashes (-). */
		name?: string | null;
	}

	/** A TunnelDestGroup. */
	export interface TunnelDestGroupFormProperties {

		/** Required. Immutable. Identifier for the TunnelDestGroup. Must be unique within the project and contain only lower case letters (a-z) and dashes (-). */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTunnelDestGroupFormGroup() {
		return new FormGroup<TunnelDestGroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request sent to ResetIdentityAwareProxyClientSecret. */
	export interface ResetIdentityAwareProxyClientSecretRequest {
	}

	/** The request sent to ResetIdentityAwareProxyClientSecret. */
	export interface ResetIdentityAwareProxyClientSecretRequestFormProperties {
	}
	export function CreateResetIdentityAwareProxyClientSecretRequestFormGroup() {
		return new FormGroup<ResetIdentityAwareProxyClientSecretRequestFormProperties>({
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequestFormProperties {
	}
	export function CreateTestIamPermissionsRequestFormGroup() {
		return new FormGroup<TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponseFormProperties {
	}
	export function CreateTestIamPermissionsResponseFormGroup() {
		return new FormGroup<TestIamPermissionsResponseFormProperties>({
		});

	}


	/** API requires a return message, but currently all response strings will fit in the status and public message. In the future, this response can hold AST validation info. */
	export interface ValidateIapAttributeExpressionResponse {
	}

	/** API requires a return message, but currently all response strings will fit in the status and public message. In the future, this response can hold AST validation info. */
	export interface ValidateIapAttributeExpressionResponseFormProperties {
	}
	export function CreateValidateIapAttributeExpressionResponseFormGroup() {
		return new FormGroup<ValidateIapAttributeExpressionResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a TunnelDestGroup.
		 * Delete v1/{name}
		 * @param {string} name Required. Name of the TunnelDestGroup to delete. In the following format: `projects/{project_number/id}/iap_tunnel/locations/{location}/destGroups/{dest_group}`.
		 * @return {Empty} Successful response
		 */
		Iap_projects_iap_tunnel_locations_destGroups_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Retrieves an existing TunnelDestGroup.
		 * Get v1/{name}
		 * @param {string} name Required. Name of the TunnelDestGroup to be fetched. In the following format: `projects/{project_number/id}/iap_tunnel/locations/{location}/destGroups/{dest_group}`.
		 * @return {TunnelDestGroup} Successful response
		 */
		Iap_projects_iap_tunnel_locations_destGroups_get(name: string): Observable<TunnelDestGroup> {
			return this.http.get<TunnelDestGroup>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a TunnelDestGroup.
		 * Patch v1/{name}
		 * @param {string} name Required. Immutable. Identifier for the TunnelDestGroup. Must be unique within the project and contain only lower case letters (a-z) and dashes (-).
		 * @param {string} updateMask A field mask that specifies which IAP settings to update. If omitted, then all of the settings are updated. See https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
		 * @return {TunnelDestGroup} Successful response
		 */
		Iap_projects_iap_tunnel_locations_destGroups_patch(name: string, updateMask: string | null | undefined, requestBody: TunnelDestGroup): Observable<TunnelDestGroup> {
			return this.http.patch<TunnelDestGroup>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the IAP settings on a particular IAP protected resource.
		 * Get v1/{name}:iapSettings
		 * @param {string} name Required. The resource name for which to retrieve the settings. Authorization: Requires the `getSettings` permission for the associated resource.
		 * @return {IapSettings} Successful response
		 */
		Iap_getIapSettings(name: string): Observable<IapSettings> {
			return this.http.get<IapSettings>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':iapSettings', {});
		}

		/**
		 * Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.
		 * Patch v1/{name}:iapSettings
		 * @param {string} name Required. The resource name of the IAP protected resource.
		 * @param {string} updateMask The field mask specifying which IAP settings should be updated. If omitted, then all of the settings are updated. See https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. Note: All IAP reauth settings must always be set together, using the field mask: `iapSettings.accessSettings.reauthSettings`.
		 * @return {IapSettings} Successful response
		 */
		Iap_updateIapSettings(name: string, updateMask: string | null | undefined, requestBody: IapSettings): Observable<IapSettings> {
			return this.http.patch<IapSettings>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':iapSettings&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.
		 * Post v1/{name}:resetSecret
		 * @param {string} name Required. Name of the Identity Aware Proxy client to that will have its secret reset. In the following format: projects/{project_number/id}/brands/{brand}/identityAwareProxyClients/{client_id}.
		 * @return {IdentityAwareProxyClient} Successful response
		 */
		Iap_projects_brands_identityAwareProxyClients_resetSecret(name: string, requestBody: ResetIdentityAwareProxyClientSecretRequest): Observable<IdentityAwareProxyClient> {
			return this.http.post<IdentityAwareProxyClient>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':resetSecret', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a given CEL expression conforms to IAP restrictions.
		 * Post v1/{name}:validateAttributeExpression
		 * @param {string} name Required. The resource name of the IAP protected resource.
		 * @param {string} expression Required. User input string expression. Should be of the form 'attributes.saml_attributes.filter(attribute, attribute.name in ['{attribute_name}', '{attribute_name}'])'
		 * @return {ValidateIapAttributeExpressionResponse} Successful response
		 */
		Iap_validateAttributeExpression(name: string, expression: string | null | undefined): Observable<ValidateIapAttributeExpressionResponse> {
			return this.http.post<ValidateIapAttributeExpressionResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':validateAttributeExpression&expression=' + (expression == null ? '' : encodeURIComponent(expression)), null, {});
		}

		/**
		 * Lists the existing brands for the project.
		 * Get v1/{parent}/brands
		 * @param {string} parent Required. GCP Project number/id. In the following format: projects/{project_number/id}.
		 * @return {ListBrandsResponse} Successful response
		 */
		Iap_projects_brands_list(parent: string): Observable<ListBrandsResponse> {
			return this.http.get<ListBrandsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/brands', {});
		}

		/**
		 * Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.
		 * Post v1/{parent}/brands
		 * @param {string} parent Required. GCP Project number/id under which the brand is to be created. In the following format: projects/{project_number/id}.
		 * @return {Brand} Successful response
		 */
		Iap_projects_brands_create(parent: string, requestBody: Brand): Observable<Brand> {
			return this.http.post<Brand>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/brands', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the existing TunnelDestGroups. To group across all locations, use a `-` as the location ID. For example: `/v1/projects/123/iap_tunnel/locations/-/destGroups`
		 * Get v1/{parent}/destGroups
		 * @param {string} parent Required. Google Cloud Project ID and location. In the following format: `projects/{project_number/id}/iap_tunnel/locations/{location}`. A `-` can be used for the location to group across all locations.
		 * @param {number} pageSize The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 100 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListTunnelDestGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTunnelDestGroups` must match the call that provided the page token.
		 * @return {ListTunnelDestGroupsResponse} Successful response
		 */
		Iap_projects_iap_tunnel_locations_destGroups_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTunnelDestGroupsResponse> {
			return this.http.get<ListTunnelDestGroupsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/destGroups&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new TunnelDestGroup.
		 * Post v1/{parent}/destGroups
		 * @param {string} parent Required. Google Cloud Project ID and location. In the following format: `projects/{project_number/id}/iap_tunnel/locations/{location}`.
		 * @param {string} tunnelDestGroupId Required. The ID to use for the TunnelDestGroup, which becomes the final component of the resource name. This value must be 4-63 characters, and valid characters are `[a-z]-`.
		 * @return {TunnelDestGroup} Successful response
		 */
		Iap_projects_iap_tunnel_locations_destGroups_create(parent: string, tunnelDestGroupId: string | null | undefined, requestBody: TunnelDestGroup): Observable<TunnelDestGroup> {
			return this.http.post<TunnelDestGroup>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/destGroups&tunnelDestGroupId=' + (tunnelDestGroupId == null ? '' : encodeURIComponent(tunnelDestGroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the existing clients for the brand.
		 * Get v1/{parent}/identityAwareProxyClients
		 * @param {string} parent Required. Full brand path. In the following format: projects/{project_number/id}/brands/{brand}.
		 * @param {number} pageSize The maximum number of clients to return. The service may return fewer than this value. If unspecified, at most 100 clients will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListIdentityAwareProxyClients` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIdentityAwareProxyClients` must match the call that provided the page token.
		 * @return {ListIdentityAwareProxyClientsResponse} Successful response
		 */
		Iap_projects_brands_identityAwareProxyClients_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListIdentityAwareProxyClientsResponse> {
			return this.http.get<ListIdentityAwareProxyClientsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/identityAwareProxyClients&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.
		 * Post v1/{parent}/identityAwareProxyClients
		 * @param {string} parent Required. Path to create the client in. In the following format: projects/{project_number/id}/brands/{brand}. The project must belong to a G Suite account.
		 * @return {IdentityAwareProxyClient} Successful response
		 */
		Iap_projects_brands_identityAwareProxyClients_create(parent: string, requestBody: IdentityAwareProxyClient): Observable<IdentityAwareProxyClient> {
			return this.http.post<IdentityAwareProxyClient>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/identityAwareProxyClients', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
		 * Post v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Iap_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Iap_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Iap_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

