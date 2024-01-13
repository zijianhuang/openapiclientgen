import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Defines the action to take on rule match. */
	export enum ActionType { Allow = 0, Block = 1, Log = 2, Redirect = 3 }


	/** Defines the ARM Resource ID for the linked endpoints */
	export interface CdnEndpoint {

		/** ARM Resource ID string. */
		id?: string | null;
	}

	/** Defines the ARM Resource ID for the linked endpoints */
	export interface CdnEndpointFormProperties {

		/** ARM Resource ID string. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCdnEndpointFormGroup() {
		return new FormGroup<CdnEndpointFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CdnWebApplicationFirewallPolicy {
	}
	export interface CdnWebApplicationFirewallPolicyFormProperties {
	}
	export function CreateCdnWebApplicationFirewallPolicyFormGroup() {
		return new FormGroup<CdnWebApplicationFirewallPolicyFormProperties>({
		});

	}


	/** Defines a list of WebApplicationFirewallPolicies for Azure CDN. It contains a list of WebApplicationFirewallPolicy objects and a URL link to get the next set of results. */
	export interface CdnWebApplicationFirewallPolicyList {

		/** URL to get the next set of WebApplicationFirewallPolicy objects if there are any. */
		nextLink?: string | null;

		/** List of Azure CDN WebApplicationFirewallPolicies within a resource group. */
		value?: Array<CdnWebApplicationFirewallPolicy>;
	}

	/** Defines a list of WebApplicationFirewallPolicies for Azure CDN. It contains a list of WebApplicationFirewallPolicy objects and a URL link to get the next set of results. */
	export interface CdnWebApplicationFirewallPolicyListFormProperties {

		/** URL to get the next set of WebApplicationFirewallPolicy objects if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCdnWebApplicationFirewallPolicyListFormGroup() {
		return new FormGroup<CdnWebApplicationFirewallPolicyListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties required to update a CdnWebApplicationFirewallPolicy. */
	export interface CdnWebApplicationFirewallPolicyPatchParameters {

		/** CdnWebApplicationFirewallPolicy tags */
		tags?: {[id: string]: string };
	}

	/** Properties required to update a CdnWebApplicationFirewallPolicy. */
	export interface CdnWebApplicationFirewallPolicyPatchParametersFormProperties {

		/** CdnWebApplicationFirewallPolicy tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCdnWebApplicationFirewallPolicyPatchParametersFormGroup() {
		return new FormGroup<CdnWebApplicationFirewallPolicyPatchParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Defines CDN web application firewall policy properties. */
	export interface CdnWebApplicationFirewallPolicyProperties {

		/** Defines contents of custom rules */
		customRules?: CustomRuleList;

		/** Describes Azure CDN endpoints associated with this Web Application Firewall policy. */
		endpointLinks?: Array<CdnEndpoint>;

		/** Defines the list of managed rule sets for the policy. */
		managedRules?: ManagedRuleSetList;

		/** Defines contents of a web application firewall global configuration */
		policySettings?: PolicySettings;

		/** Provisioning state of the WebApplicationFirewallPolicy. */
		provisioningState?: CdnWebApplicationFirewallPolicyPropertiesProvisioningState | null;

		/** Defines contents of rate limit rules */
		rateLimitRules?: RateLimitRuleList;
		resourceState?: CdnWebApplicationFirewallPolicyPropertiesResourceState | null;
	}

	/** Defines CDN web application firewall policy properties. */
	export interface CdnWebApplicationFirewallPolicyPropertiesFormProperties {

		/** Provisioning state of the WebApplicationFirewallPolicy. */
		provisioningState: FormControl<CdnWebApplicationFirewallPolicyPropertiesProvisioningState | null | undefined>,
		resourceState: FormControl<CdnWebApplicationFirewallPolicyPropertiesResourceState | null | undefined>,
	}
	export function CreateCdnWebApplicationFirewallPolicyPropertiesFormGroup() {
		return new FormGroup<CdnWebApplicationFirewallPolicyPropertiesFormProperties>({
			provisioningState: new FormControl<CdnWebApplicationFirewallPolicyPropertiesProvisioningState | null | undefined>(undefined),
			resourceState: new FormControl<CdnWebApplicationFirewallPolicyPropertiesResourceState | null | undefined>(undefined),
		});

	}

	export enum CdnWebApplicationFirewallPolicyPropertiesProvisioningState { Creating = 0, Succeeded = 1, Failed = 2 }

	export enum CdnWebApplicationFirewallPolicyPropertiesResourceState { Creating = 0, Enabling = 1, Enabled = 2, Disabling = 3, Disabled = 4, Deleting = 5 }


	/** Defines the common attributes for a custom rule that can be included in a waf policy */
	export interface CustomRule {

		/**
		 * Defines the action to take on rule match.
		 * Required
		 */
		action: ActionType;

		/** Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified. */
		enabledState?: CustomRuleEnabledState | null;

		/**
		 * List of match conditions.
		 * Required
		 */
		matchConditions: Array<MatchCondition>;

		/**
		 * Defines the name of the custom rule
		 * Required
		 */
		name: string;

		/**
		 * Defines in what order this rule be evaluated in the overall list of custom rules
		 * Required
		 * Minimum: 0
		 * Maximum: 1000
		 */
		priority: number;
	}

	/** Defines the common attributes for a custom rule that can be included in a waf policy */
	export interface CustomRuleFormProperties {

		/**
		 * Defines the action to take on rule match.
		 * Required
		 */
		action: FormControl<ActionType | null | undefined>,

		/** Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified. */
		enabledState: FormControl<CustomRuleEnabledState | null | undefined>,

		/**
		 * Defines the name of the custom rule
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Defines in what order this rule be evaluated in the overall list of custom rules
		 * Required
		 * Minimum: 0
		 * Maximum: 1000
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateCustomRuleFormGroup() {
		return new FormGroup<CustomRuleFormProperties>({
			action: new FormControl<ActionType | null | undefined>(undefined, [Validators.required]),
			enabledState: new FormControl<CustomRuleEnabledState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1000)]),
		});

	}

	export enum CustomRuleEnabledState { Disabled = 0, Enabled = 1 }


	/** Define match conditions */
	export interface MatchCondition {

		/**
		 * List of possible match values.
		 * Required
		 */
		matchValue: Array<string>;

		/**
		 * Match variable to compare against.
		 * Required
		 */
		matchVariable: MatchConditionMatchVariable;

		/** Describes if the result of this condition should be negated. */
		negateCondition?: boolean | null;

		/**
		 * Describes operator to be matched
		 * Required
		 */
		operator: MatchConditionOperator;

		/** Selector can used to match a specific key for QueryString, RequestUri, RequestHeaders or RequestBody. */
		selector?: string | null;

		/** List of transforms. */
		transforms?: Array<TransformType>;
	}

	/** Define match conditions */
	export interface MatchConditionFormProperties {

		/**
		 * Match variable to compare against.
		 * Required
		 */
		matchVariable: FormControl<MatchConditionMatchVariable | null | undefined>,

		/** Describes if the result of this condition should be negated. */
		negateCondition: FormControl<boolean | null | undefined>,

		/**
		 * Describes operator to be matched
		 * Required
		 */
		operator: FormControl<MatchConditionOperator | null | undefined>,

		/** Selector can used to match a specific key for QueryString, RequestUri, RequestHeaders or RequestBody. */
		selector: FormControl<string | null | undefined>,
	}
	export function CreateMatchConditionFormGroup() {
		return new FormGroup<MatchConditionFormProperties>({
			matchVariable: new FormControl<MatchConditionMatchVariable | null | undefined>(undefined, [Validators.required]),
			negateCondition: new FormControl<boolean | null | undefined>(undefined),
			operator: new FormControl<MatchConditionOperator | null | undefined>(undefined, [Validators.required]),
			selector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MatchConditionMatchVariable { RemoteAddr = 0, Country = 1, RequestMethod = 2, RequestHeader = 3, RequestUri = 4, QueryString = 5, RequestBody = 6, Cookies = 7, PostArgs = 8 }

	export enum MatchConditionOperator { Any = 0, IPMatch = 1, GeoMatch = 2, Equal = 3, Contains = 4, LessThan = 5, GreaterThan = 6, LessThanOrEqual = 7, GreaterThanOrEqual = 8, BeginsWith = 9, EndsWith = 10, RegEx = 11 }


	/** Describes what transforms were applied before matching. */
	export enum TransformType { Lowercase = 0, Uppercase = 1, Trim = 2, UrlDecode = 3, UrlEncode = 4, RemoveNulls = 5 }


	/** Defines contents of custom rules */
	export interface CustomRuleList {

		/** List of rules */
		rules?: Array<CustomRule>;
	}

	/** Defines contents of custom rules */
	export interface CustomRuleListFormProperties {
	}
	export function CreateCustomRuleListFormGroup() {
		return new FormGroup<CustomRuleListFormProperties>({
		});

	}


	/** Describes a managed rule definition. */
	export interface ManagedRuleDefinition {

		/** Describes the functionality of the managed rule. */
		description?: string | null;

		/** Identifier for the managed rule. */
		ruleId?: string | null;
	}

	/** Describes a managed rule definition. */
	export interface ManagedRuleDefinitionFormProperties {

		/** Describes the functionality of the managed rule. */
		description: FormControl<string | null | undefined>,

		/** Identifier for the managed rule. */
		ruleId: FormControl<string | null | undefined>,
	}
	export function CreateManagedRuleDefinitionFormGroup() {
		return new FormGroup<ManagedRuleDefinitionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			ruleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a managed rule group. */
	export interface ManagedRuleGroupDefinition {

		/** Description of the managed rule group. */
		description?: string | null;

		/** Name of the managed rule group. */
		ruleGroupName?: string | null;

		/** List of rules within the managed rule group. */
		rules?: Array<ManagedRuleDefinition>;
	}

	/** Describes a managed rule group. */
	export interface ManagedRuleGroupDefinitionFormProperties {

		/** Description of the managed rule group. */
		description: FormControl<string | null | undefined>,

		/** Name of the managed rule group. */
		ruleGroupName: FormControl<string | null | undefined>,
	}
	export function CreateManagedRuleGroupDefinitionFormGroup() {
		return new FormGroup<ManagedRuleGroupDefinitionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			ruleGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a managed rule group override setting. */
	export interface ManagedRuleGroupOverride {

		/**
		 * Describes the managed rule group within the rule set to override
		 * Required
		 */
		ruleGroupName: string;

		/** List of rules that will be disabled. If none specified, all rules in the group will be disabled. */
		rules?: Array<ManagedRuleOverride>;
	}

	/** Defines a managed rule group override setting. */
	export interface ManagedRuleGroupOverrideFormProperties {

		/**
		 * Describes the managed rule group within the rule set to override
		 * Required
		 */
		ruleGroupName: FormControl<string | null | undefined>,
	}
	export function CreateManagedRuleGroupOverrideFormGroup() {
		return new FormGroup<ManagedRuleGroupOverrideFormProperties>({
			ruleGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a managed rule group override setting. */
	export interface ManagedRuleOverride {

		/** Defines the action to take on rule match. */
		action?: ActionType | null;

		/** Describes if the managed rule is in enabled or disabled state. Defaults to Disabled if not specified. */
		enabledState?: CustomRuleEnabledState | null;

		/**
		 * Identifier for the managed rule.
		 * Required
		 */
		ruleId: string;
	}

	/** Defines a managed rule group override setting. */
	export interface ManagedRuleOverrideFormProperties {

		/** Defines the action to take on rule match. */
		action: FormControl<ActionType | null | undefined>,

		/** Describes if the managed rule is in enabled or disabled state. Defaults to Disabled if not specified. */
		enabledState: FormControl<CustomRuleEnabledState | null | undefined>,

		/**
		 * Identifier for the managed rule.
		 * Required
		 */
		ruleId: FormControl<string | null | undefined>,
	}
	export function CreateManagedRuleOverrideFormGroup() {
		return new FormGroup<ManagedRuleOverrideFormProperties>({
			action: new FormControl<ActionType | null | undefined>(undefined),
			enabledState: new FormControl<CustomRuleEnabledState | null | undefined>(undefined),
			ruleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a managed rule set. */
	export interface ManagedRuleSet {

		/**
		 * Verizon only : If the rule set supports anomaly detection mode, this describes the threshold for blocking requests.
		 * Minimum: 0
		 * Maximum: 20
		 */
		anomalyScore?: number | null;

		/** Defines the rule overrides to apply to the rule set. */
		ruleGroupOverrides?: Array<ManagedRuleGroupOverride>;

		/**
		 * Defines the rule set type to use.
		 * Required
		 */
		ruleSetType: string;

		/**
		 * Defines the version of the rule set to use.
		 * Required
		 */
		ruleSetVersion: string;
	}

	/** Defines a managed rule set. */
	export interface ManagedRuleSetFormProperties {

		/**
		 * Verizon only : If the rule set supports anomaly detection mode, this describes the threshold for blocking requests.
		 * Minimum: 0
		 * Maximum: 20
		 */
		anomalyScore: FormControl<number | null | undefined>,

		/**
		 * Defines the rule set type to use.
		 * Required
		 */
		ruleSetType: FormControl<string | null | undefined>,

		/**
		 * Defines the version of the rule set to use.
		 * Required
		 */
		ruleSetVersion: FormControl<string | null | undefined>,
	}
	export function CreateManagedRuleSetFormGroup() {
		return new FormGroup<ManagedRuleSetFormProperties>({
			anomalyScore: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			ruleSetType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleSetVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ManagedRuleSetDefinition {
	}
	export interface ManagedRuleSetDefinitionFormProperties {
	}
	export function CreateManagedRuleSetDefinitionFormGroup() {
		return new FormGroup<ManagedRuleSetDefinitionFormProperties>({
		});

	}


	/** List of managed rule set definitions available for use in a policy. */
	export interface ManagedRuleSetDefinitionList {

		/** URL to retrieve next set of managed rule set definitions. */
		nextLink?: string | null;

		/** List of managed rule set definitions. */
		value?: Array<ManagedRuleSetDefinition>;
	}

	/** List of managed rule set definitions available for use in a policy. */
	export interface ManagedRuleSetDefinitionListFormProperties {

		/** URL to retrieve next set of managed rule set definitions. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateManagedRuleSetDefinitionListFormGroup() {
		return new FormGroup<ManagedRuleSetDefinitionListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for a managed rule set definition. */
	export interface ManagedRuleSetDefinitionProperties {

		/** Provisioning state of the managed rule set. */
		provisioningState?: string | null;

		/** Rule groups of the managed rule set. */
		ruleGroups?: Array<ManagedRuleGroupDefinition>;

		/** Type of the managed rule set. */
		ruleSetType?: string | null;

		/** Version of the managed rule set type. */
		ruleSetVersion?: string | null;
	}

	/** Properties for a managed rule set definition. */
	export interface ManagedRuleSetDefinitionPropertiesFormProperties {

		/** Provisioning state of the managed rule set. */
		provisioningState: FormControl<string | null | undefined>,

		/** Type of the managed rule set. */
		ruleSetType: FormControl<string | null | undefined>,

		/** Version of the managed rule set type. */
		ruleSetVersion: FormControl<string | null | undefined>,
	}
	export function CreateManagedRuleSetDefinitionPropertiesFormGroup() {
		return new FormGroup<ManagedRuleSetDefinitionPropertiesFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
			ruleSetType: new FormControl<string | null | undefined>(undefined),
			ruleSetVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the list of managed rule sets for the policy. */
	export interface ManagedRuleSetList {

		/** List of rule sets. */
		managedRuleSets?: Array<ManagedRuleSet>;
	}

	/** Defines the list of managed rule sets for the policy. */
	export interface ManagedRuleSetListFormProperties {
	}
	export function CreateManagedRuleSetListFormGroup() {
		return new FormGroup<ManagedRuleSetListFormProperties>({
		});

	}


	/** Defines a rate limiting rule that can be included in a waf policy */
	export interface RateLimitRule {

		/**
		 * Defines rate limit duration. Default is 1 minute.
		 * Required
		 * Minimum: 0
		 * Maximum: 60
		 */
		rateLimitDurationInMinutes: number;

		/**
		 * Defines rate limit threshold.
		 * Required
		 * Minimum: 0
		 */
		rateLimitThreshold: number;
	}

	/** Defines a rate limiting rule that can be included in a waf policy */
	export interface RateLimitRuleFormProperties {

		/**
		 * Defines rate limit duration. Default is 1 minute.
		 * Required
		 * Minimum: 0
		 * Maximum: 60
		 */
		rateLimitDurationInMinutes: FormControl<number | null | undefined>,

		/**
		 * Defines rate limit threshold.
		 * Required
		 * Minimum: 0
		 */
		rateLimitThreshold: FormControl<number | null | undefined>,
	}
	export function CreateRateLimitRuleFormGroup() {
		return new FormGroup<RateLimitRuleFormProperties>({
			rateLimitDurationInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(60)]),
			rateLimitThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}


	/** Defines contents of rate limit rules */
	export interface RateLimitRuleList {

		/** List of rules */
		rules?: Array<RateLimitRule>;
	}

	/** Defines contents of rate limit rules */
	export interface RateLimitRuleListFormProperties {
	}
	export function CreateRateLimitRuleListFormGroup() {
		return new FormGroup<RateLimitRuleListFormProperties>({
		});

	}


	/** Defines contents of a web application firewall global configuration */
	export interface PolicySettings {

		/** If the action type is block, customer can override the response body. The body must be specified in base64 encoding. */
		defaultCustomBlockResponseBody?: string | null;

		/**
		 * If the action type is block, this field defines the default customer overridable http response status code.
		 * Minimum: 200
		 * Maximum: 599
		 */
		defaultCustomBlockResponseStatusCode?: number | null;

		/** If action type is redirect, this field represents the default redirect URL for the client. */
		defaultRedirectUrl?: string | null;

		/** describes if the policy is in enabled state or disabled state */
		enabledState?: CustomRuleEnabledState | null;

		/** Describes if it is in detection mode or prevention mode at policy level. */
		mode?: PolicySettingsMode | null;
	}

	/** Defines contents of a web application firewall global configuration */
	export interface PolicySettingsFormProperties {

		/** If the action type is block, customer can override the response body. The body must be specified in base64 encoding. */
		defaultCustomBlockResponseBody: FormControl<string | null | undefined>,

		/**
		 * If the action type is block, this field defines the default customer overridable http response status code.
		 * Minimum: 200
		 * Maximum: 599
		 */
		defaultCustomBlockResponseStatusCode: FormControl<number | null | undefined>,

		/** If action type is redirect, this field represents the default redirect URL for the client. */
		defaultRedirectUrl: FormControl<string | null | undefined>,

		/** describes if the policy is in enabled state or disabled state */
		enabledState: FormControl<CustomRuleEnabledState | null | undefined>,

		/** Describes if it is in detection mode or prevention mode at policy level. */
		mode: FormControl<PolicySettingsMode | null | undefined>,
	}
	export function CreatePolicySettingsFormGroup() {
		return new FormGroup<PolicySettingsFormProperties>({
			defaultCustomBlockResponseBody: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$')]),
			defaultCustomBlockResponseStatusCode: new FormControl<number | null | undefined>(undefined, [Validators.min(200), Validators.max(599)]),
			defaultRedirectUrl: new FormControl<string | null | undefined>(undefined),
			enabledState: new FormControl<CustomRuleEnabledState | null | undefined>(undefined),
			mode: new FormControl<PolicySettingsMode | null | undefined>(undefined),
		});

	}

	export enum PolicySettingsMode { Prevention = 0, Detection = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all available managed rule sets.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Cdn/CdnWebApplicationFirewallManagedRuleSets
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-02.
		 * @return {ManagedRuleSetDefinitionList} Success. The operation returns a list of all available web application firewall managed rule sets.
		 */
		ManagedRuleSets_List(subscriptionId: string, api_version: string): Observable<ManagedRuleSetDefinitionList> {
			return this.http.get<ManagedRuleSetDefinitionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Cdn/CdnWebApplicationFirewallManagedRuleSets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all of the protection policies within a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/CdnWebApplicationFirewallPolicies
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-02.
		 * @return {CdnWebApplicationFirewallPolicyList} OK. The request has succeeded.
		 */
		Policies_List(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<CdnWebApplicationFirewallPolicyList> {
			return this.http.get<CdnWebApplicationFirewallPolicyList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cdn/CdnWebApplicationFirewallPolicies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve protection policy with specified name within a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/CdnWebApplicationFirewallPolicies/{policyName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} policyName The name of the CdnWebApplicationFirewallPolicy.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-02.
		 * @return {CdnWebApplicationFirewallPolicy} OK. The request has succeeded.
		 */
		Policies_Get(resourceGroupName: string, policyName: string, subscriptionId: string, api_version: string): Observable<CdnWebApplicationFirewallPolicy> {
			return this.http.get<CdnWebApplicationFirewallPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cdn/CdnWebApplicationFirewallPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update policy with specified rule set name within a resource group.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/CdnWebApplicationFirewallPolicies/{policyName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} policyName The name of the CdnWebApplicationFirewallPolicy.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-02.
		 * @param {CdnWebApplicationFirewallPolicy} requestBody Policy to be created.
		 * @return {CdnWebApplicationFirewallPolicy} OK. The request has succeeded.
		 */
		Policies_CreateOrUpdate(resourceGroupName: string, policyName: string, subscriptionId: string, api_version: string, requestBody: CdnWebApplicationFirewallPolicy): Observable<CdnWebApplicationFirewallPolicy> {
			return this.http.put<CdnWebApplicationFirewallPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cdn/CdnWebApplicationFirewallPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes Policy
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/CdnWebApplicationFirewallPolicies/{policyName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} policyName The name of the CdnWebApplicationFirewallPolicy.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-02.
		 * @return {void} Delete successful.
		 */
		Policies_Delete(resourceGroupName: string, policyName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cdn/CdnWebApplicationFirewallPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an existing CdnWebApplicationFirewallPolicy with the specified policy name under the specified subscription and resource group
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/CdnWebApplicationFirewallPolicies/{policyName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} policyName The name of the CdnWebApplicationFirewallPolicy.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-02.
		 * @param {CdnWebApplicationFirewallPolicyPatchParameters} requestBody CdnWebApplicationFirewallPolicy parameters to be patched.
		 * @return {CdnWebApplicationFirewallPolicy} OK. The request has succeeded.
		 */
		Policies_Update(resourceGroupName: string, policyName: string, subscriptionId: string, api_version: string, requestBody: CdnWebApplicationFirewallPolicyPatchParameters): Observable<CdnWebApplicationFirewallPolicy> {
			return this.http.patch<CdnWebApplicationFirewallPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cdn/CdnWebApplicationFirewallPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

