import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Defines the action to take on rule match. */
	export enum ActionType { Allow = 'Allow', Block = 'Block', Log = 'Log', Redirect = 'Redirect' }


	/** Defines contents of a web application rule */
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
		 * Describes the name of the rule.
		 * Max length: 128
		 */
		name?: string | null;

		/**
		 * Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: number;

		/**
		 * Time window for resetting the rate limit count. Default is 1 minute.
		 * Minimum: 0
		 * Maximum: 5
		 */
		rateLimitDurationInMinutes?: number | null;

		/**
		 * Number of allowed requests per client within the time window.
		 * Minimum: 0
		 */
		rateLimitThreshold?: number | null;

		/**
		 * Describes type of rule.
		 * Required
		 */
		ruleType: CustomRuleRuleType;
	}

	/** Defines contents of a web application rule */
	export interface CustomRuleFormProperties {

		/**
		 * Defines the action to take on rule match.
		 * Required
		 */
		action: FormControl<ActionType | null | undefined>,

		/** Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified. */
		enabledState: FormControl<CustomRuleEnabledState | null | undefined>,

		/**
		 * Describes the name of the rule.
		 * Max length: 128
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,

		/**
		 * Time window for resetting the rate limit count. Default is 1 minute.
		 * Minimum: 0
		 * Maximum: 5
		 */
		rateLimitDurationInMinutes: FormControl<number | null | undefined>,

		/**
		 * Number of allowed requests per client within the time window.
		 * Minimum: 0
		 */
		rateLimitThreshold: FormControl<number | null | undefined>,

		/**
		 * Describes type of rule.
		 * Required
		 */
		ruleType: FormControl<CustomRuleRuleType | null | undefined>,
	}
	export function CreateCustomRuleFormGroup() {
		return new FormGroup<CustomRuleFormProperties>({
			action: new FormControl<ActionType | null | undefined>(undefined, [Validators.required]),
			enabledState: new FormControl<CustomRuleEnabledState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rateLimitDurationInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(5)]),
			rateLimitThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			ruleType: new FormControl<CustomRuleRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CustomRuleEnabledState { Disabled = 'Disabled', Enabled = 'Enabled' }


	/** Define a match condition. */
	export interface MatchCondition {

		/**
		 * List of possible match values.
		 * Required
		 */
		matchValue: Array<string>;

		/**
		 * Request variable to compare with.
		 * Required
		 */
		matchVariable: MatchConditionMatchVariable;

		/** Describes if the result of this condition should be negated. */
		negateCondition?: boolean | null;

		/**
		 * Comparison type to use for matching with the variable value.
		 * Required
		 */
		operator: MatchConditionOperator;

		/** Match against a specific key from the QueryString, PostArgs, RequestHeader or Cookies variables. Default is null. */
		selector?: string | null;

		/** List of transforms. */
		transforms?: Array<TransformType>;
	}

	/** Define a match condition. */
	export interface MatchConditionFormProperties {

		/**
		 * Request variable to compare with.
		 * Required
		 */
		matchVariable: FormControl<MatchConditionMatchVariable | null | undefined>,

		/** Describes if the result of this condition should be negated. */
		negateCondition: FormControl<boolean | null | undefined>,

		/**
		 * Comparison type to use for matching with the variable value.
		 * Required
		 */
		operator: FormControl<MatchConditionOperator | null | undefined>,

		/** Match against a specific key from the QueryString, PostArgs, RequestHeader or Cookies variables. Default is null. */
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

	export enum MatchConditionMatchVariable { RemoteAddr = 'RemoteAddr', RequestMethod = 'RequestMethod', QueryString = 'QueryString', PostArgs = 'PostArgs', RequestUri = 'RequestUri', RequestHeader = 'RequestHeader', RequestBody = 'RequestBody', Cookies = 'Cookies', SocketAddr = 'SocketAddr' }

	export enum MatchConditionOperator { Any = 'Any', IPMatch = 'IPMatch', GeoMatch = 'GeoMatch', Equal = 'Equal', Contains = 'Contains', LessThan = 'LessThan', GreaterThan = 'GreaterThan', LessThanOrEqual = 'LessThanOrEqual', GreaterThanOrEqual = 'GreaterThanOrEqual', BeginsWith = 'BeginsWith', EndsWith = 'EndsWith', RegEx = 'RegEx' }


	/** Describes what transforms applied before matching. */
	export enum TransformType { Lowercase = 'Lowercase', Uppercase = 'Uppercase', Trim = 'Trim', UrlDecode = 'UrlDecode', UrlEncode = 'UrlEncode', RemoveNulls = 'RemoveNulls' }

	export enum CustomRuleRuleType { MatchRule = 'MatchRule', RateLimitRule = 'RateLimitRule' }


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


	/** Error response indicates Front Door service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponse {

		/** Error code. */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Error response indicates Front Door service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponseFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the Resource ID for a Frontend Endpoint. */
	export interface FrontendEndpointLink {

		/** Resource ID. */
		id?: string | null;
	}

	/** Defines the Resource ID for a Frontend Endpoint. */
	export interface FrontendEndpointLinkFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateFrontendEndpointLinkFormGroup() {
		return new FormGroup<FrontendEndpointLinkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a managed rule definition. */
	export interface ManagedRuleDefinition {

		/** Defines the action to take on rule match. */
		defaultAction?: ActionType | null;

		/** Describes if the managed rule is in enabled or disabled state. */
		defaultState?: CustomRuleEnabledState | null;

		/** Describes the functionality of the managed rule. */
		description?: string | null;

		/** Identifier for the managed rule. */
		ruleId?: string | null;
	}

	/** Describes a managed rule definition. */
	export interface ManagedRuleDefinitionFormProperties {

		/** Defines the action to take on rule match. */
		defaultAction: FormControl<ActionType | null | undefined>,

		/** Describes if the managed rule is in enabled or disabled state. */
		defaultState: FormControl<CustomRuleEnabledState | null | undefined>,

		/** Describes the functionality of the managed rule. */
		description: FormControl<string | null | undefined>,

		/** Identifier for the managed rule. */
		ruleId: FormControl<string | null | undefined>,
	}
	export function CreateManagedRuleDefinitionFormGroup() {
		return new FormGroup<ManagedRuleDefinitionFormProperties>({
			defaultAction: new FormControl<ActionType | null | undefined>(undefined),
			defaultState: new FormControl<CustomRuleEnabledState | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ruleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes if the managed rule is in enabled or disabled state. */
	export enum ManagedRuleEnabledState { Disabled = 'Disabled', Enabled = 'Enabled' }


	/** Exclude variables from managed rule evaluation. */
	export interface ManagedRuleExclusion {

		/**
		 * The variable type to be excluded.
		 * Required
		 */
		matchVariable: ManagedRuleExclusionMatchVariable;

		/**
		 * Selector value for which elements in the collection this exclusion applies to.
		 * Required
		 */
		selector: string;

		/**
		 * Comparison operator to apply to the selector when specifying which elements in the collection this exclusion applies to.
		 * Required
		 */
		selectorMatchOperator: ManagedRuleExclusionSelectorMatchOperator;
	}

	/** Exclude variables from managed rule evaluation. */
	export interface ManagedRuleExclusionFormProperties {

		/**
		 * The variable type to be excluded.
		 * Required
		 */
		matchVariable: FormControl<ManagedRuleExclusionMatchVariable | null | undefined>,

		/**
		 * Selector value for which elements in the collection this exclusion applies to.
		 * Required
		 */
		selector: FormControl<string | null | undefined>,

		/**
		 * Comparison operator to apply to the selector when specifying which elements in the collection this exclusion applies to.
		 * Required
		 */
		selectorMatchOperator: FormControl<ManagedRuleExclusionSelectorMatchOperator | null | undefined>,
	}
	export function CreateManagedRuleExclusionFormGroup() {
		return new FormGroup<ManagedRuleExclusionFormProperties>({
			matchVariable: new FormControl<ManagedRuleExclusionMatchVariable | null | undefined>(undefined, [Validators.required]),
			selector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			selectorMatchOperator: new FormControl<ManagedRuleExclusionSelectorMatchOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ManagedRuleExclusionMatchVariable { RequestHeaderNames = 'RequestHeaderNames', RequestCookieNames = 'RequestCookieNames', QueryStringArgNames = 'QueryStringArgNames', RequestBodyPostArgNames = 'RequestBodyPostArgNames' }

	export enum ManagedRuleExclusionSelectorMatchOperator { Equals = 'Equals', Contains = 'Contains', StartsWith = 'StartsWith', EndsWith = 'EndsWith', EqualsAny = 'EqualsAny' }


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

		/** Describes the exclusions that are applied to all rules in the group. */
		exclusions?: Array<ManagedRuleExclusion>;

		/**
		 * Describes the managed rule group to override.
		 * Required
		 */
		ruleGroupName: string;

		/** List of rules that will be disabled. If none specified, all rules in the group will be disabled. */
		rules?: Array<ManagedRuleOverride>;
	}

	/** Defines a managed rule group override setting. */
	export interface ManagedRuleGroupOverrideFormProperties {

		/**
		 * Describes the managed rule group to override.
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

		/** Describes if the managed rule is in enabled or disabled state. */
		enabledState?: CustomRuleEnabledState | null;

		/** Describes the exclusions that are applied to this specific rule. */
		exclusions?: Array<ManagedRuleExclusion>;

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

		/** Describes if the managed rule is in enabled or disabled state. */
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

		/** Describes the exclusions that are applied to all rules in the set. */
		exclusions?: Array<ManagedRuleExclusion>;

		/** Defines the rule group overrides to apply to the rule set. */
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


	/** Defines top-level WebApplicationFirewallPolicy configuration settings. */
	export interface PolicySettings {

		/** If the action type is block, customer can override the response body. The body must be specified in base64 encoding. */
		customBlockResponseBody?: string | null;

		/**
		 * If the action type is block, customer can override the response status code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		customBlockResponseStatusCode?: number | null;

		/** Describes if the policy is in enabled or disabled state. Defaults to Enabled if not specified. */
		enabledState?: CustomRuleEnabledState | null;

		/** Describes if it is in detection mode or prevention mode at policy level. */
		mode?: PolicySettingsMode | null;

		/** If action type is redirect, this field represents redirect URL for the client. */
		redirectUrl?: string | null;
	}

	/** Defines top-level WebApplicationFirewallPolicy configuration settings. */
	export interface PolicySettingsFormProperties {

		/** If the action type is block, customer can override the response body. The body must be specified in base64 encoding. */
		customBlockResponseBody: FormControl<string | null | undefined>,

		/**
		 * If the action type is block, customer can override the response status code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		customBlockResponseStatusCode: FormControl<number | null | undefined>,

		/** Describes if the policy is in enabled or disabled state. Defaults to Enabled if not specified. */
		enabledState: FormControl<CustomRuleEnabledState | null | undefined>,

		/** Describes if it is in detection mode or prevention mode at policy level. */
		mode: FormControl<PolicySettingsMode | null | undefined>,

		/** If action type is redirect, this field represents redirect URL for the client. */
		redirectUrl: FormControl<string | null | undefined>,
	}
	export function CreatePolicySettingsFormGroup() {
		return new FormGroup<PolicySettingsFormProperties>({
			customBlockResponseBody: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$')]),
			customBlockResponseStatusCode: new FormControl<number | null | undefined>(undefined),
			enabledState: new FormControl<CustomRuleEnabledState | null | undefined>(undefined),
			mode: new FormControl<PolicySettingsMode | null | undefined>(undefined),
			redirectUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PolicySettingsMode { Prevention = 'Prevention', Detection = 'Detection' }

	export interface WebApplicationFirewallPolicy {
	}
	export interface WebApplicationFirewallPolicyFormProperties {
	}
	export function CreateWebApplicationFirewallPolicyFormGroup() {
		return new FormGroup<WebApplicationFirewallPolicyFormProperties>({
		});

	}


	/** Defines a list of WebApplicationFirewallPolicies. It contains a list of WebApplicationFirewallPolicy objects and a URL link to get the next set of results. */
	export interface WebApplicationFirewallPolicyList {

		/** URL to get the next set of WebApplicationFirewallPolicy objects if there are any. */
		nextLink?: string | null;

		/** List of WebApplicationFirewallPolicies within a resource group. */
		value?: Array<WebApplicationFirewallPolicy>;
	}

	/** Defines a list of WebApplicationFirewallPolicies. It contains a list of WebApplicationFirewallPolicy objects and a URL link to get the next set of results. */
	export interface WebApplicationFirewallPolicyListFormProperties {

		/** URL to get the next set of WebApplicationFirewallPolicy objects if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWebApplicationFirewallPolicyListFormGroup() {
		return new FormGroup<WebApplicationFirewallPolicyListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines web application firewall policy properties. */
	export interface WebApplicationFirewallPolicyProperties {

		/** Defines contents of custom rules */
		customRules?: CustomRuleList;

		/** Describes Frontend Endpoints associated with this Web Application Firewall policy. */
		frontendEndpointLinks?: Array<FrontendEndpointLink>;

		/** Defines the list of managed rule sets for the policy. */
		managedRules?: ManagedRuleSetList;

		/** Defines top-level WebApplicationFirewallPolicy configuration settings. */
		policySettings?: PolicySettings;

		/** Provisioning state of the policy. */
		provisioningState?: string | null;
		resourceState?: WebApplicationFirewallPolicyPropertiesResourceState | null;
	}

	/** Defines web application firewall policy properties. */
	export interface WebApplicationFirewallPolicyPropertiesFormProperties {

		/** Provisioning state of the policy. */
		provisioningState: FormControl<string | null | undefined>,
		resourceState: FormControl<WebApplicationFirewallPolicyPropertiesResourceState | null | undefined>,
	}
	export function CreateWebApplicationFirewallPolicyPropertiesFormGroup() {
		return new FormGroup<WebApplicationFirewallPolicyPropertiesFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
			resourceState: new FormControl<WebApplicationFirewallPolicyPropertiesResourceState | null | undefined>(undefined),
		});

	}

	export enum WebApplicationFirewallPolicyPropertiesResourceState { Creating = 'Creating', Enabling = 'Enabling', Enabled = 'Enabled', Disabling = 'Disabling', Disabled = 'Disabled', Deleting = 'Deleting' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all available managed rule sets.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/FrontDoorWebApplicationFirewallManagedRuleSets
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @return {ManagedRuleSetDefinitionList} Success. The operation returns a list of all available web application firewall managed rule sets.
		 */
		ManagedRuleSets_List(subscriptionId: string, api_version: string): Observable<ManagedRuleSetDefinitionList> {
			return this.http.get<ManagedRuleSetDefinitionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/FrontDoorWebApplicationFirewallManagedRuleSets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all of the protection policies within a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/FrontDoorWebApplicationFirewallPolicies
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 80
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @return {WebApplicationFirewallPolicyList} OK. The request has succeeded.
		 */
		Policies_List(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<WebApplicationFirewallPolicyList> {
			return this.http.get<WebApplicationFirewallPolicyList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/FrontDoorWebApplicationFirewallPolicies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve protection policy with specified name within a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/FrontDoorWebApplicationFirewallPolicies/{policyName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 80
		 * @param {string} policyName The name of the Web Application Firewall Policy.
		 *     Max length: 128
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @return {WebApplicationFirewallPolicy} OK. The request has succeeded.
		 */
		Policies_Get(resourceGroupName: string, policyName: string, subscriptionId: string, api_version: string): Observable<WebApplicationFirewallPolicy> {
			return this.http.get<WebApplicationFirewallPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/FrontDoorWebApplicationFirewallPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update policy with specified rule set name within a resource group.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/FrontDoorWebApplicationFirewallPolicies/{policyName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 80
		 * @param {string} policyName The name of the Web Application Firewall Policy.
		 *     Max length: 128
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {WebApplicationFirewallPolicy} requestBody Policy to be created.
		 * @return {WebApplicationFirewallPolicy} OK. The request has succeeded.
		 */
		Policies_CreateOrUpdate(resourceGroupName: string, policyName: string, subscriptionId: string, api_version: string, requestBody: WebApplicationFirewallPolicy): Observable<WebApplicationFirewallPolicy> {
			return this.http.put<WebApplicationFirewallPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/FrontDoorWebApplicationFirewallPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes Policy
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/FrontDoorWebApplicationFirewallPolicies/{policyName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 *     Min length: 1    Max length: 80
		 * @param {string} policyName The name of the Web Application Firewall Policy.
		 *     Max length: 128
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @return {void} Delete successful.
		 */
		Policies_Delete(resourceGroupName: string, policyName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/FrontDoorWebApplicationFirewallPolicies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

