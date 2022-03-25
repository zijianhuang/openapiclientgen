import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AssociateWebACLResponse {
	}

	export interface AssociateWebACLRequest {
		WebACLArn: string;
		ResourceArn: string;
	}

	export interface WAFInternalErrorException {
	}

	export interface WAFInvalidParameterException {
	}

	export interface WAFNonexistentItemException {
	}

	export interface WAFUnavailableEntityException {
	}

	export interface WAFInvalidOperationException {
	}

	export interface CheckCapacityResponse {
		Capacity?: number;
	}

	export interface CheckCapacityRequest {
		Scope: CheckCapacityRequestScope;
		Rules: Array<Rule>;
	}

	export enum CheckCapacityRequestScope { CLOUDFRONT = 0, REGIONAL = 1 }


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A single rule, which you can use in a <a>WebACL</a> or <a>RuleGroup</a> to identify web requests that you want to allow, block, or count. Each rule includes one top-level <a>Statement</a> that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them. </p> */
	export interface Rule {
		Name: string;
		Priority: number;

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The processing guidance for a <a>Rule</a>, used by AWS WAF to determine whether a web request matches the rule. </p>
		 * Required
		 */
		Statement: Statement;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The action that AWS WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting. </p> */
		Action?: RuleAction;

		/** <p>The override action to apply to the rules in a rule group. Used only for rule statements that reference a rule group, like <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p> <p>Set the override action to none to leave the rule actions in effect. Set it to count to only count matches, regardless of the rule action settings. </p> <p>In a <a>Rule</a>, you must specify either this <code>OverrideAction</code> setting or the rule <code>Action</code> setting, but not both:</p> <ul> <li> <p>If the rule statement references a rule group, use this override action setting and not the action setting. </p> </li> <li> <p>If the rule statement does not reference a rule group, use the rule action setting and not this rule override action setting. </p> </li> </ul> */
		OverrideAction?: OverrideAction;

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Defines and enables Amazon CloudWatch metrics and web request sample collection. </p>
		 * Required
		 */
		VisibilityConfig: VisibilityConfig;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The processing guidance for a <a>Rule</a>, used by AWS WAF to determine whether a web request matches the rule. </p> */
	export interface Statement {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement that defines a string match search for AWS WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is refered to as a string match statement.</p> */
		ByteMatchStatement?: ByteMatchStatement;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Attackers sometimes insert malicious SQL code into web requests in an effort to extract data from your database. To allow or block web requests that appear to contain malicious SQL code, create one or more SQL injection match conditions. An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want AWS WAF to inspect. Later in the process, when you create a web ACL, you specify whether to allow or block requests that appear to contain malicious SQL code.</p> */
		SqliMatchStatement?: SqliMatchStatement;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement that defines a cross-site scripting (XSS) match search for AWS WAF to apply to web requests. XSS attacks are those where the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers. The XSS match statement provides the location in requests that you want AWS WAF to search and text transformations to use on the search area before AWS WAF searches for character sequences that are likely to be malicious strings. </p> */
		XssMatchStatement?: XssMatchStatement;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (&gt;) or less than (&lt;). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes. </p> <p>If you configure AWS WAF to inspect the request body, AWS WAF inspects only the first 8192 bytes (8 KB). If the request body for your web requests never exceeds 8192 bytes, you can create a size constraint condition and block requests that have a request body greater than 8192 bytes.</p> <p>If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI <code>/logo.jpg</code> is nine characters long.</p> */
		SizeConstraintStatement?: SizeConstraintStatement;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to identify web requests based on country of origin. </p> */
		GeoMatchStatement?: GeoMatchStatement;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p> <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p> */
		RuleGroupReferenceStatement?: RuleGroupReferenceStatement;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an <a>IPSet</a> that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see <a>CreateIPSet</a>.</p> <p>Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.</p> */
		IPSetReferenceStatement?: IPSetReferenceStatement;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to search web request components for matches with regular expressions. To use this, create a <a>RegexPatternSet</a> that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see <a>CreateRegexPatternSet</a>.</p> <p>Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.</p> */
		RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rate-based rule tracks the rate of requests for each originating IP address, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any 5-minute time span. You can use this to put a temporary block on requests from an IP address that is sending excessive requests.</p> <p>When the rule action triggers, AWS WAF blocks additional requests from the IP address until the request rate falls below the limit.</p> <p>You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts requests that match the nested statement. For example, based on recent requests that you have seen from an attacker, you might create a rate-based rule with a nested AND rule statement that contains the following nested statements:</p> <ul> <li> <p>An IP match statement with an IP set that specified the address 192.0.2.44.</p> </li> <li> <p>A string match statement that searches in the User-Agent header for the string BadBot.</p> </li> </ul> <p>In this rate-based rule, you also define a rate limit. For this example, the rate limit is 1,000. Requests that meet both of the conditions in the statements are counted. If the count exceeds 1,000 requests per five minutes, the rule action triggers. Requests that do not meet both conditions are not counted towards the rate limit and are not affected by this rule.</p> <p>You cannot nest a <code>RateBasedStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p> */
		RateBasedStatement?: RateBasedStatement;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A logical rule statement used to combine other rule statements with AND logic. You provide more than one <a>Statement</a> within the <code>AndStatement</code>. </p> */
		AndStatement?: AndStatement;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A logical rule statement used to combine other rule statements with OR logic. You provide more than one <a>Statement</a> within the <code>OrStatement</code>. </p> */
		OrStatement?: OrStatement;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A logical rule statement used to negate the results of another rule statement. You provide one <a>Statement</a> within the <code>NotStatement</code>.</p> */
		NotStatement?: NotStatement;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p> <p>You can't nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p> */
		ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement that defines a string match search for AWS WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is refered to as a string match statement.</p> */
	export interface ByteMatchStatement {
		SearchString: string;

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The part of a web request that you want AWS WAF to inspect. Include the single <code>FieldToMatch</code> type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in <code>FieldToMatch</code> for each rule statement that requires it. To inspect more than one component of a web request, create a separate rule statement for each component.</p>
		 * Required
		 */
		FieldToMatch: FieldToMatch;
		TextTransformations: Array<TextTransformation>;
		PositionalConstraint: ByteMatchStatementPositionalConstraint;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The part of a web request that you want AWS WAF to inspect. Include the single <code>FieldToMatch</code> type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in <code>FieldToMatch</code> for each rule statement that requires it. To inspect more than one component of a web request, create a separate rule statement for each component.</p> */
	export interface FieldToMatch {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>One of the headers in a web request, identified by name, for example, <code>User-Agent</code> or <code>Referer</code>. This setting isn't case sensitive.</p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p> */
		SingleHeader?: SingleHeader;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>One query argument in a web request, identified by name, for example <i>UserName</i> or <i>SalesRegion</i>. The name can be up to 30 characters long and isn't case sensitive. </p> */
		SingleQueryArgument?: SingleQueryArgument;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>All query arguments of a web request. </p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p> */
		AllQueryArguments?: AllQueryArguments;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The path component of the URI of a web request. This is the part of a web request that identifies a resource, for example, <code>/images/daily-ad.jpg</code>.</p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p> */
		UriPath?: UriPath;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The query string of a web request. This is the part of a URL that appears after a <code>?</code> character, if any.</p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p> */
		QueryString?: QueryString;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The body of a web request. This immediately follows the request headers.</p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p> */
		Body?: Body;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The HTTP method of a web request. The method indicates the type of operation that the request is asking the origin to perform. </p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p> */
		Method?: Method;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>One of the headers in a web request, identified by name, for example, <code>User-Agent</code> or <code>Referer</code>. This setting isn't case sensitive.</p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p> */
	export interface SingleHeader {
		Name: string;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>One query argument in a web request, identified by name, for example <i>UserName</i> or <i>SalesRegion</i>. The name can be up to 30 characters long and isn't case sensitive. </p> */
	export interface SingleQueryArgument {
		Name: string;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>All query arguments of a web request. </p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p> */
	export interface AllQueryArguments {
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The path component of the URI of a web request. This is the part of a web request that identifies a resource, for example, <code>/images/daily-ad.jpg</code>.</p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p> */
	export interface UriPath {
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The query string of a web request. This is the part of a URL that appears after a <code>?</code> character, if any.</p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p> */
	export interface QueryString {
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The body of a web request. This immediately follows the request headers.</p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p> */
	export interface Body {
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The HTTP method of a web request. The method indicates the type of operation that the request is asking the origin to perform. </p> <p>This is used only to indicate the web request component for AWS WAF to inspect, in the <a>FieldToMatch</a> specification. </p> */
	export interface Method {
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. </p> */
	export interface TextTransformation {
		Priority: number;
		Type: TextTransformationType;
	}

	export enum TextTransformationType { NONE = 0, COMPRESS_WHITE_SPACE = 1, HTML_ENTITY_DECODE = 2, LOWERCASE = 3, CMD_LINE = 4, URL_DECODE = 5 }

	export enum ByteMatchStatementPositionalConstraint { EXACTLY = 0, STARTS_WITH = 1, ENDS_WITH = 2, CONTAINS = 3, CONTAINS_WORD = 4 }


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Attackers sometimes insert malicious SQL code into web requests in an effort to extract data from your database. To allow or block web requests that appear to contain malicious SQL code, create one or more SQL injection match conditions. An SQL injection match condition identifies the part of web requests, such as the URI or the query string, that you want AWS WAF to inspect. Later in the process, when you create a web ACL, you specify whether to allow or block requests that appear to contain malicious SQL code.</p> */
	export interface SqliMatchStatement {

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The part of a web request that you want AWS WAF to inspect. Include the single <code>FieldToMatch</code> type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in <code>FieldToMatch</code> for each rule statement that requires it. To inspect more than one component of a web request, create a separate rule statement for each component.</p>
		 * Required
		 */
		FieldToMatch: FieldToMatch;
		TextTransformations: Array<TextTransformation>;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement that defines a cross-site scripting (XSS) match search for AWS WAF to apply to web requests. XSS attacks are those where the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers. The XSS match statement provides the location in requests that you want AWS WAF to search and text transformations to use on the search area before AWS WAF searches for character sequences that are likely to be malicious strings. </p> */
	export interface XssMatchStatement {

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The part of a web request that you want AWS WAF to inspect. Include the single <code>FieldToMatch</code> type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in <code>FieldToMatch</code> for each rule statement that requires it. To inspect more than one component of a web request, create a separate rule statement for each component.</p>
		 * Required
		 */
		FieldToMatch: FieldToMatch;
		TextTransformations: Array<TextTransformation>;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (&gt;) or less than (&lt;). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes. </p> <p>If you configure AWS WAF to inspect the request body, AWS WAF inspects only the first 8192 bytes (8 KB). If the request body for your web requests never exceeds 8192 bytes, you can create a size constraint condition and block requests that have a request body greater than 8192 bytes.</p> <p>If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI <code>/logo.jpg</code> is nine characters long.</p> */
	export interface SizeConstraintStatement {

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The part of a web request that you want AWS WAF to inspect. Include the single <code>FieldToMatch</code> type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in <code>FieldToMatch</code> for each rule statement that requires it. To inspect more than one component of a web request, create a separate rule statement for each component.</p>
		 * Required
		 */
		FieldToMatch: FieldToMatch;
		ComparisonOperator: SizeConstraintStatementComparisonOperator;
		Size: number;
		TextTransformations: Array<TextTransformation>;
	}

	export enum SizeConstraintStatementComparisonOperator { EQ = 0, NE = 1, LE = 2, LT = 3, GE = 4, GT = 5 }


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to identify web requests based on country of origin. </p> */
	export interface GeoMatchStatement {
		CountryCodes?: Array<CountryCode>;
	}

	export enum CountryCode { AF = 0, AX = 1, AL = 2, DZ = 3, AS = 4, AD = 5, AO = 6, AI = 7, AQ = 8, AG = 9, AR = 10, AM = 11, AW = 12, AU = 13, AT = 14, AZ = 15, BS = 16, BH = 17, BD = 18, BB = 19, BY = 20, BE = 21, BZ = 22, BJ = 23, BM = 24, BT = 25, BO = 26, BQ = 27, BA = 28, BW = 29, BV = 30, BR = 31, IO = 32, BN = 33, BG = 34, BF = 35, BI = 36, KH = 37, CM = 38, CA = 39, CV = 40, KY = 41, CF = 42, TD = 43, CL = 44, CN = 45, CX = 46, CC = 47, CO = 48, KM = 49, CG = 50, CD = 51, CK = 52, CR = 53, CI = 54, HR = 55, CU = 56, CW = 57, CY = 58, CZ = 59, DK = 60, DJ = 61, DM = 62, DO = 63, EC = 64, EG = 65, SV = 66, GQ = 67, ER = 68, EE = 69, ET = 70, FK = 71, FO = 72, FJ = 73, FI = 74, FR = 75, GF = 76, PF = 77, TF = 78, GA = 79, GM = 80, GE = 81, DE = 82, GH = 83, GI = 84, GR = 85, GL = 86, GD = 87, GP = 88, GU = 89, GT = 90, GG = 91, GN = 92, GW = 93, GY = 94, HT = 95, HM = 96, VA = 97, HN = 98, HK = 99, HU = 100, IS = 101, IN = 102, ID = 103, IR = 104, IQ = 105, IE = 106, IM = 107, IL = 108, IT = 109, JM = 110, JP = 111, JE = 112, JO = 113, KZ = 114, KE = 115, KI = 116, KP = 117, KR = 118, KW = 119, KG = 120, LA = 121, LV = 122, LB = 123, LS = 124, LR = 125, LY = 126, LI = 127, LT = 128, LU = 129, MO = 130, MK = 131, MG = 132, MW = 133, MY = 134, MV = 135, ML = 136, MT = 137, MH = 138, MQ = 139, MR = 140, MU = 141, YT = 142, MX = 143, FM = 144, MD = 145, MC = 146, MN = 147, ME = 148, MS = 149, MA = 150, MZ = 151, MM = 152, NA = 153, NR = 154, NP = 155, NL = 156, NC = 157, NZ = 158, NI = 159, NE = 160, NG = 161, NU = 162, NF = 163, MP = 164, NO = 165, OM = 166, PK = 167, PW = 168, PS = 169, PA = 170, PG = 171, PY = 172, PE = 173, PH = 174, PN = 175, PL = 176, PT = 177, PR = 178, QA = 179, RE = 180, RO = 181, RU = 182, RW = 183, BL = 184, SH = 185, KN = 186, LC = 187, MF = 188, PM = 189, VC = 190, WS = 191, SM = 192, ST = 193, SA = 194, SN = 195, RS = 196, SC = 197, SL = 198, SG = 199, SX = 200, SK = 201, SI = 202, SB = 203, SO = 204, ZA = 205, GS = 206, SS = 207, ES = 208, LK = 209, SD = 210, SR = 211, SJ = 212, SZ = 213, SE = 214, CH = 215, SY = 216, TW = 217, TJ = 218, TZ = 219, TH = 220, TL = 221, TG = 222, TK = 223, TO = 224, TT = 225, TN = 226, TR = 227, TM = 228, TC = 229, TV = 230, UG = 231, UA = 232, AE = 233, GB = 234, US = 235, UM = 236, UY = 237, UZ = 238, VU = 239, VE = 240, VN = 241, VG = 242, VI = 243, WF = 244, EH = 245, YE = 246, ZM = 247, ZW = 248 }


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p> <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p> */
	export interface RuleGroupReferenceStatement {
		ARN: string;
		ExcludedRules?: Array<ExcludedRule>;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies a single rule to exclude from the rule group. Excluding a rule overrides its action setting for the rule group in the web ACL, setting it to <code>COUNT</code>. This effectively excludes the rule from acting on web requests. </p> */
	export interface ExcludedRule {
		Name: string;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an <a>IPSet</a> that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see <a>CreateIPSet</a>.</p> <p>Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.</p> */
	export interface IPSetReferenceStatement {
		ARN: string;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to search web request components for matches with regular expressions. To use this, create a <a>RegexPatternSet</a> that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see <a>CreateRegexPatternSet</a>.</p> <p>Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.</p> */
	export interface RegexPatternSetReferenceStatement {
		ARN: string;

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The part of a web request that you want AWS WAF to inspect. Include the single <code>FieldToMatch</code> type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in <code>FieldToMatch</code> for each rule statement that requires it. To inspect more than one component of a web request, create a separate rule statement for each component.</p>
		 * Required
		 */
		FieldToMatch: FieldToMatch;
		TextTransformations: Array<TextTransformation>;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rate-based rule tracks the rate of requests for each originating IP address, and triggers the rule action when the rate exceeds a limit that you specify on the number of requests in any 5-minute time span. You can use this to put a temporary block on requests from an IP address that is sending excessive requests.</p> <p>When the rule action triggers, AWS WAF blocks additional requests from the IP address until the request rate falls below the limit.</p> <p>You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts requests that match the nested statement. For example, based on recent requests that you have seen from an attacker, you might create a rate-based rule with a nested AND rule statement that contains the following nested statements:</p> <ul> <li> <p>An IP match statement with an IP set that specified the address 192.0.2.44.</p> </li> <li> <p>A string match statement that searches in the User-Agent header for the string BadBot.</p> </li> </ul> <p>In this rate-based rule, you also define a rate limit. For this example, the rate limit is 1,000. Requests that meet both of the conditions in the statements are counted. If the count exceeds 1,000 requests per five minutes, the rule action triggers. Requests that do not meet both conditions are not counted towards the rate limit and are not affected by this rule.</p> <p>You cannot nest a <code>RateBasedStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p> */
	export interface RateBasedStatement {
		Limit: number;
		AggregateKeyType: RateBasedStatementAggregateKeyType;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The processing guidance for a <a>Rule</a>, used by AWS WAF to determine whether a web request matches the rule. </p> */
		ScopeDownStatement?: Statement;
	}

	export enum RateBasedStatementAggregateKeyType { IP = 0 }


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A logical rule statement used to combine other rule statements with AND logic. You provide more than one <a>Statement</a> within the <code>AndStatement</code>. </p> */
	export interface AndStatement {
		Statements: Array<Statement>;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A logical rule statement used to combine other rule statements with OR logic. You provide more than one <a>Statement</a> within the <code>OrStatement</code>. </p> */
	export interface OrStatement {
		Statements: Array<Statement>;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A logical rule statement used to negate the results of another rule statement. You provide one <a>Statement</a> within the <code>NotStatement</code>.</p> */
	export interface NotStatement {

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The processing guidance for a <a>Rule</a>, used by AWS WAF to determine whether a web request matches the rule. </p>
		 * Required
		 */
		Statement: Statement;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p> <p>You can't nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p> */
	export interface ManagedRuleGroupStatement {
		VendorName: string;
		Name: string;
		ExcludedRules?: Array<ExcludedRule>;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The action that AWS WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting. </p> */
	export interface RuleAction {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies that AWS WAF should block requests.</p> <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
		Block?: BlockAction;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies that AWS WAF should allow requests.</p> <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
		Allow?: AllowAction;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies that AWS WAF should count requests.</p> <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
		Count?: CountAction;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies that AWS WAF should block requests.</p> <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
	export interface BlockAction {
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies that AWS WAF should allow requests.</p> <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
	export interface AllowAction {
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies that AWS WAF should count requests.</p> <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
	export interface CountAction {
	}


	/** <p>The override action to apply to the rules in a rule group. Used only for rule statements that reference a rule group, like <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p> <p>Set the override action to none to leave the rule actions in effect. Set it to count to only count matches, regardless of the rule action settings. </p> <p>In a <a>Rule</a>, you must specify either this <code>OverrideAction</code> setting or the rule <code>Action</code> setting, but not both:</p> <ul> <li> <p>If the rule statement references a rule group, use this override action setting and not the action setting. </p> </li> <li> <p>If the rule statement does not reference a rule group, use the rule action setting and not this rule override action setting. </p> </li> </ul> */
	export interface OverrideAction {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies that AWS WAF should count requests.</p> <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
		Count?: CountAction;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies that AWS WAF should do nothing. This is generally used to try out a rule without performing any actions. You set the <code>OverrideAction</code> on the <a>Rule</a>. </p> <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
		None?: NoneAction;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies that AWS WAF should do nothing. This is generally used to try out a rule without performing any actions. You set the <code>OverrideAction</code> on the <a>Rule</a>. </p> <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
	export interface NoneAction {
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Defines and enables Amazon CloudWatch metrics and web request sample collection. </p> */
	export interface VisibilityConfig {
		SampledRequestsEnabled: boolean;
		CloudWatchMetricsEnabled: boolean;
		MetricName: string;
	}

	export interface WAFLimitsExceededException {
	}

	export interface WAFInvalidResourceException {
	}

	export interface WAFSubscriptionNotFoundException {
	}

	export interface CreateIPSetResponse {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>High-level information about an <a>IPSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an <code>IPSet</code>, and the ARN, that you provide to the <a>IPSetReferenceStatement</a> to use the address set in a <a>Rule</a>.</p> */
		Summary?: IPSetSummary;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>High-level information about an <a>IPSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an <code>IPSet</code>, and the ARN, that you provide to the <a>IPSetReferenceStatement</a> to use the address set in a <a>Rule</a>.</p> */
	export interface IPSetSummary {
		Name?: string;
		Id?: string;
		Description?: string;
		LockToken?: string;
		ARN?: string;
	}

	export interface CreateIPSetRequest {
		Name: string;
		Scope: CheckCapacityRequestScope;
		Description?: string;
		IPAddressVersion: CreateIPSetRequestIPAddressVersion;
		Addresses: Array<string>;
		Tags?: Array<Tag>;
	}

	export enum CreateIPSetRequestIPAddressVersion { IPV4 = 0, IPV6 = 1 }


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A collection of key:value pairs associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource. </p> */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface WAFDuplicateItemException {
	}

	export interface WAFOptimisticLockException {
	}

	export interface WAFTagOperationException {
	}

	export interface WAFTagOperationInternalErrorException {
	}

	export interface CreateRegexPatternSetResponse {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>High-level information about a <a>RegexPatternSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RegexPatternSet</code>, and the ARN, that you provide to the <a>RegexPatternSetReferenceStatement</a> to use the pattern set in a <a>Rule</a>.</p> */
		Summary?: RegexPatternSetSummary;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>High-level information about a <a>RegexPatternSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RegexPatternSet</code>, and the ARN, that you provide to the <a>RegexPatternSetReferenceStatement</a> to use the pattern set in a <a>Rule</a>.</p> */
	export interface RegexPatternSetSummary {
		Name?: string;
		Id?: string;
		Description?: string;
		LockToken?: string;
		ARN?: string;
	}

	export interface CreateRegexPatternSetRequest {
		Name: string;
		Scope: CheckCapacityRequestScope;
		Description?: string;
		RegularExpressionList: Array<Regex>;
		Tags?: Array<Tag>;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A single regular expression. This is used in a <a>RegexPatternSet</a>.</p> */
	export interface Regex {
		RegexString?: string;
	}

	export interface CreateRuleGroupResponse {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>High-level information about a <a>RuleGroup</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.</p> */
		Summary?: RuleGroupSummary;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>High-level information about a <a>RuleGroup</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.</p> */
	export interface RuleGroupSummary {
		Name?: string;
		Id?: string;
		Description?: string;
		LockToken?: string;
		ARN?: string;
	}

	export interface CreateRuleGroupRequest {
		Name: string;
		Scope: CheckCapacityRequestScope;
		Capacity: number;
		Description?: string;
		Rules?: Array<Rule>;

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Defines and enables Amazon CloudWatch metrics and web request sample collection. </p>
		 * Required
		 */
		VisibilityConfig: VisibilityConfig;
		Tags?: Array<Tag>;
	}

	export interface CreateWebACLResponse {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>High-level information about a <a>WebACL</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>WebACL</code>, and the ARN, that you provide to operations like <a>AssociateWebACL</a>.</p> */
		Summary?: WebACLSummary;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>High-level information about a <a>WebACL</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>WebACL</code>, and the ARN, that you provide to operations like <a>AssociateWebACL</a>.</p> */
	export interface WebACLSummary {
		Name?: string;
		Id?: string;
		Description?: string;
		LockToken?: string;
		ARN?: string;
	}

	export interface CreateWebACLRequest {
		Name: string;
		Scope: CheckCapacityRequestScope;

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>In a <a>WebACL</a>, this is the action that you want AWS WAF to perform when a web request doesn't match any of the rules in the <code>WebACL</code>. The default action must be a terminating action, so count is not allowed.</p>
		 * Required
		 */
		DefaultAction: DefaultAction;
		Description?: string;
		Rules?: Array<Rule>;

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Defines and enables Amazon CloudWatch metrics and web request sample collection. </p>
		 * Required
		 */
		VisibilityConfig: VisibilityConfig;
		Tags?: Array<Tag>;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>In a <a>WebACL</a>, this is the action that you want AWS WAF to perform when a web request doesn't match any of the rules in the <code>WebACL</code>. The default action must be a terminating action, so count is not allowed.</p> */
	export interface DefaultAction {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies that AWS WAF should block requests.</p> <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
		Block?: BlockAction;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Specifies that AWS WAF should allow requests.</p> <p>This is used only in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
		Allow?: AllowAction;
	}

	export interface DeleteFirewallManagerRuleGroupsResponse {
		NextWebACLLockToken?: string;
	}

	export interface DeleteFirewallManagerRuleGroupsRequest {
		WebACLArn: string;
		WebACLLockToken: string;
	}

	export interface DeleteIPSetResponse {
	}

	export interface DeleteIPSetRequest {
		Name: string;
		Scope: CheckCapacityRequestScope;
		Id: string;
		LockToken: string;
	}

	export interface WAFAssociatedItemException {
	}

	export interface DeleteLoggingConfigurationResponse {
	}

	export interface DeleteLoggingConfigurationRequest {
		ResourceArn: string;
	}

	export interface DeletePermissionPolicyResponse {
	}

	export interface DeletePermissionPolicyRequest {
		ResourceArn: string;
	}

	export interface DeleteRegexPatternSetResponse {
	}

	export interface DeleteRegexPatternSetRequest {
		Name: string;
		Scope: CheckCapacityRequestScope;
		Id: string;
		LockToken: string;
	}

	export interface DeleteRuleGroupResponse {
	}

	export interface DeleteRuleGroupRequest {
		Name: string;
		Scope: CheckCapacityRequestScope;
		Id: string;
		LockToken: string;
	}

	export interface DeleteWebACLResponse {
	}

	export interface DeleteWebACLRequest {
		Name: string;
		Scope: CheckCapacityRequestScope;
		Id: string;
		LockToken: string;
	}

	export interface DescribeManagedRuleGroupResponse {
		Capacity?: number;
		Rules?: Array<RuleSummary>;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>High-level information about a <a>Rule</a>, returned by operations like <a>DescribeManagedRuleGroup</a>. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>.</p> */
	export interface RuleSummary {
		Name?: string;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The action that AWS WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting. </p> */
		Action?: RuleAction;
	}

	export interface DescribeManagedRuleGroupRequest {
		VendorName: string;
		Name: string;
		Scope: CheckCapacityRequestScope;
	}

	export interface DisassociateWebACLResponse {
	}

	export interface DisassociateWebACLRequest {
		ResourceArn: string;
	}

	export interface GetIPSetResponse {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports any CIDR range. For information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>AWS WAF assigns an ARN to each <code>IPSet</code> that you create. To use an IP set in a rule, you provide the ARN to the <a>Rule</a> statement <a>IPSetReferenceStatement</a>. </p> */
		IPSet?: IPSet;
		LockToken?: string;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports any CIDR range. For information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>AWS WAF assigns an ARN to each <code>IPSet</code> that you create. To use an IP set in a rule, you provide the ARN to the <a>Rule</a> statement <a>IPSetReferenceStatement</a>. </p> */
	export interface IPSet {
		Name: string;
		Id: string;
		ARN: string;
		Description?: string;
		IPAddressVersion: CreateIPSetRequestIPAddressVersion;
		Addresses: Array<string>;
	}

	export interface GetIPSetRequest {
		Name: string;
		Scope: CheckCapacityRequestScope;
		Id: string;
	}

	export interface GetLoggingConfigurationResponse {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Defines an association between Amazon Kinesis Data Firehose destinations and a web ACL resource, for logging from AWS WAF. As part of the association, you can specify parts of the standard logging fields to keep out of the logs. </p> */
		LoggingConfiguration?: LoggingConfiguration;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Defines an association between Amazon Kinesis Data Firehose destinations and a web ACL resource, for logging from AWS WAF. As part of the association, you can specify parts of the standard logging fields to keep out of the logs. </p> */
	export interface LoggingConfiguration {
		ResourceArn: string;
		LogDestinationConfigs: Array<string>;
		RedactedFields?: Array<FieldToMatch>;
	}

	export interface GetLoggingConfigurationRequest {
		ResourceArn: string;
	}

	export interface GetPermissionPolicyResponse {
		Policy?: string;
	}

	export interface GetPermissionPolicyRequest {
		ResourceArn: string;
	}

	export interface GetRateBasedStatementManagedKeysResponse {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The set of IP addresses that are currently blocked for a rate-based statement.</p> */
		ManagedKeysIPV4?: RateBasedStatementManagedKeysIPSet;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The set of IP addresses that are currently blocked for a rate-based statement.</p> */
		ManagedKeysIPV6?: RateBasedStatementManagedKeysIPSet;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The set of IP addresses that are currently blocked for a rate-based statement.</p> */
	export interface RateBasedStatementManagedKeysIPSet {
		IPAddressVersion?: CreateIPSetRequestIPAddressVersion;
		Addresses?: Array<string>;
	}

	export interface GetRateBasedStatementManagedKeysRequest {
		Scope: CheckCapacityRequestScope;
		WebACLName: string;
		WebACLId: string;
		RuleName: string;
	}

	export interface GetRegexPatternSetResponse {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Contains one or more regular expressions. </p> <p>AWS WAF assigns an ARN to each <code>RegexPatternSet</code> that you create. To use a set in a rule, you provide the ARN to the <a>Rule</a> statement <a>RegexPatternSetReferenceStatement</a>. </p> */
		RegexPatternSet?: RegexPatternSet;
		LockToken?: string;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Contains one or more regular expressions. </p> <p>AWS WAF assigns an ARN to each <code>RegexPatternSet</code> that you create. To use a set in a rule, you provide the ARN to the <a>Rule</a> statement <a>RegexPatternSetReferenceStatement</a>. </p> */
	export interface RegexPatternSet {
		Name?: string;
		Id?: string;
		ARN?: string;
		Description?: string;
		RegularExpressionList?: Array<Regex>;
	}

	export interface GetRegexPatternSetRequest {
		Name: string;
		Scope: CheckCapacityRequestScope;
		Id: string;
	}

	export interface GetRuleGroupResponse {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p> */
		RuleGroup?: RuleGroup;
		LockToken?: string;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p> */
	export interface RuleGroup {
		Name: string;
		Id: string;
		Capacity: number;
		ARN: string;
		Description?: string;
		Rules?: Array<Rule>;

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Defines and enables Amazon CloudWatch metrics and web request sample collection. </p>
		 * Required
		 */
		VisibilityConfig: VisibilityConfig;
	}

	export interface GetRuleGroupRequest {
		Name: string;
		Scope: CheckCapacityRequestScope;
		Id: string;
	}

	export interface GetSampledRequestsResponse {
		SampledRequests?: Array<SampledHTTPRequest>;
		PopulationSize?: number;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want AWS WAF to return a sample of web requests.</p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that AWS WAF received the 5,000th request. </p> */
		TimeWindow?: TimeWindow;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Represents a single sampled web request. The response from <a>GetSampledRequests</a> includes a <code>SampledHTTPRequests</code> complex type that appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains an array of <code>SampledHTTPRequest</code> objects.</p> */
	export interface SampledHTTPRequest {

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Part of the response from <a>GetSampledRequests</a>. This is a complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests. </p>
		 * Required
		 */
		Request: HTTPRequest;
		Weight: number;
		Timestamp?: Date;
		Action?: string;
		RuleNameWithinRuleGroup?: string;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Part of the response from <a>GetSampledRequests</a>. This is a complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests. </p> */
	export interface HTTPRequest {
		ClientIP?: string;
		Country?: string;
		URI?: string;
		Method?: string;
		HTTPVersion?: string;
		Headers?: Array<HTTPHeader>;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Part of the response from <a>GetSampledRequests</a>. This is a complex type that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of all of the headers that appear in one of the web requests. </p> */
	export interface HTTPHeader {
		Name?: string;
		Value?: string;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want AWS WAF to return a sample of web requests.</p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that AWS WAF received the 5,000th request. </p> */
	export interface TimeWindow {
		StartTime: Date;
		EndTime: Date;
	}

	export interface GetSampledRequestsRequest {
		WebAclArn: string;
		RuleMetricName: string;
		Scope: CheckCapacityRequestScope;

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want AWS WAF to return a sample of web requests.</p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that AWS WAF received the 5,000th request. </p>
		 * Required
		 */
		TimeWindow: TimeWindow;
		MaxItems: number;
	}

	export interface GetWebACLResponse {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p> A Web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the Web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a Web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a Web ACL with one or more AWS resources to protect. The resources can be Amazon CloudFront, an Amazon API Gateway API, or an Application Load Balancer. </p> */
		WebACL?: WebACL;
		LockToken?: string;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p> A Web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the Web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a Web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a Web ACL with one or more AWS resources to protect. The resources can be Amazon CloudFront, an Amazon API Gateway API, or an Application Load Balancer. </p> */
	export interface WebACL {
		Name: string;
		Id: string;
		ARN: string;

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>In a <a>WebACL</a>, this is the action that you want AWS WAF to perform when a web request doesn't match any of the rules in the <code>WebACL</code>. The default action must be a terminating action, so count is not allowed.</p>
		 * Required
		 */
		DefaultAction: DefaultAction;
		Description?: string;
		Rules?: Array<Rule>;

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Defines and enables Amazon CloudWatch metrics and web request sample collection. </p>
		 * Required
		 */
		VisibilityConfig: VisibilityConfig;
		Capacity?: number;
		PreProcessFirewallManagerRuleGroups?: Array<FirewallManagerRuleGroup>;
		PostProcessFirewallManagerRuleGroups?: Array<FirewallManagerRuleGroup>;
		ManagedByFirewallManager?: boolean;
	}


	/** A rule group that's defined for an AWS Firewall Manager WAF policy. */
	export interface FirewallManagerRuleGroup {
		Name: string;
		Priority: number;

		/**
		 * The processing guidance for an AWS Firewall Manager rule. This is like a regular rule <a>Statement</a>, but it can only contain a rule group reference.
		 * Required
		 */
		FirewallManagerStatement: FirewallManagerStatement;

		/**
		 * <p>The override action to apply to the rules in a rule group. Used only for rule statements that reference a rule group, like <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p> <p>Set the override action to none to leave the rule actions in effect. Set it to count to only count matches, regardless of the rule action settings. </p> <p>In a <a>Rule</a>, you must specify either this <code>OverrideAction</code> setting or the rule <code>Action</code> setting, but not both:</p> <ul> <li> <p>If the rule statement references a rule group, use this override action setting and not the action setting. </p> </li> <li> <p>If the rule statement does not reference a rule group, use the rule action setting and not this rule override action setting. </p> </li> </ul>
		 * Required
		 */
		OverrideAction: OverrideAction;

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Defines and enables Amazon CloudWatch metrics and web request sample collection. </p>
		 * Required
		 */
		VisibilityConfig: VisibilityConfig;
	}


	/** The processing guidance for an AWS Firewall Manager rule. This is like a regular rule <a>Statement</a>, but it can only contain a rule group reference. */
	export interface FirewallManagerStatement {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p> <p>You can't nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p> */
		ManagedRuleGroupStatement?: ManagedRuleGroupStatement;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p> <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p> */
		RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
	}

	export interface GetWebACLRequest {
		Name: string;
		Scope: CheckCapacityRequestScope;
		Id: string;
	}

	export interface GetWebACLForResourceResponse {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p> A Web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the Web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a Web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a Web ACL with one or more AWS resources to protect. The resources can be Amazon CloudFront, an Amazon API Gateway API, or an Application Load Balancer. </p> */
		WebACL?: WebACL;
	}

	export interface GetWebACLForResourceRequest {
		ResourceArn: string;
	}

	export interface ListAvailableManagedRuleGroupsResponse {
		NextMarker?: string;
		ManagedRuleGroups?: Array<ManagedRuleGroupSummary>;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>High-level information about a managed rule group, returned by <a>ListAvailableManagedRuleGroups</a>. This provides information like the name and vendor name, that you provide when you add a <a>ManagedRuleGroupStatement</a> to a web ACL. Managed rule groups include AWS Managed Rules rule groups, which are free of charge to AWS WAF customers, and AWS Marketplace managed rule groups, which you can subscribe to through AWS Marketplace. </p> */
	export interface ManagedRuleGroupSummary {
		VendorName?: string;
		Name?: string;
		Description?: string;
	}

	export interface ListAvailableManagedRuleGroupsRequest {
		Scope: CheckCapacityRequestScope;
		NextMarker?: string;
		Limit?: number;
	}

	export interface ListIPSetsResponse {
		NextMarker?: string;
		IPSets?: Array<IPSetSummary>;
	}

	export interface ListIPSetsRequest {
		Scope: CheckCapacityRequestScope;
		NextMarker?: string;
		Limit?: number;
	}

	export interface ListLoggingConfigurationsResponse {
		LoggingConfigurations?: Array<LoggingConfiguration>;
		NextMarker?: string;
	}

	export interface ListLoggingConfigurationsRequest {
		Scope?: CheckCapacityRequestScope;
		NextMarker?: string;
		Limit?: number;
	}

	export interface ListRegexPatternSetsResponse {
		NextMarker?: string;
		RegexPatternSets?: Array<RegexPatternSetSummary>;
	}

	export interface ListRegexPatternSetsRequest {
		Scope: CheckCapacityRequestScope;
		NextMarker?: string;
		Limit?: number;
	}

	export interface ListResourcesForWebACLResponse {
		ResourceArns?: Array<string>;
	}

	export interface ListResourcesForWebACLRequest {
		WebACLArn: string;
		ResourceType?: ListResourcesForWebACLRequestResourceType;
	}

	export enum ListResourcesForWebACLRequestResourceType { APPLICATION_LOAD_BALANCER = 0, API_GATEWAY = 1 }

	export interface ListRuleGroupsResponse {
		NextMarker?: string;
		RuleGroups?: Array<RuleGroupSummary>;
	}

	export interface ListRuleGroupsRequest {
		Scope: CheckCapacityRequestScope;
		NextMarker?: string;
		Limit?: number;
	}

	export interface ListTagsForResourceResponse {
		NextMarker?: string;

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The collection of tagging definitions for an AWS resource. </p> */
		TagInfoForResource?: TagInfoForResource;
	}


	/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>The collection of tagging definitions for an AWS resource. </p> */
	export interface TagInfoForResource {
		ResourceARN?: string;
		TagList?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		NextMarker?: string;
		Limit?: number;
		ResourceARN: string;
	}

	export interface ListWebACLsResponse {
		NextMarker?: string;
		WebACLs?: Array<WebACLSummary>;
	}

	export interface ListWebACLsRequest {
		Scope: CheckCapacityRequestScope;
		NextMarker?: string;
		Limit?: number;
	}

	export interface PutLoggingConfigurationResponse {

		/** <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Defines an association between Amazon Kinesis Data Firehose destinations and a web ACL resource, for logging from AWS WAF. As part of the association, you can specify parts of the standard logging fields to keep out of the logs. </p> */
		LoggingConfiguration?: LoggingConfiguration;
	}

	export interface PutLoggingConfigurationRequest {

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Defines an association between Amazon Kinesis Data Firehose destinations and a web ACL resource, for logging from AWS WAF. As part of the association, you can specify parts of the standard logging fields to keep out of the logs. </p>
		 * Required
		 */
		LoggingConfiguration: LoggingConfiguration;
	}

	export interface WAFServiceLinkedRoleErrorException {
	}

	export interface PutPermissionPolicyResponse {
	}

	export interface PutPermissionPolicyRequest {
		ResourceArn: string;
		Policy: string;
	}

	export interface WAFInvalidPermissionPolicyException {
	}

	export interface TagResourceResponse {
	}

	export interface TagResourceRequest {
		ResourceARN: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceResponse {
	}

	export interface UntagResourceRequest {
		ResourceARN: string;
		TagKeys: Array<string>;
	}

	export interface UpdateIPSetResponse {
		NextLockToken?: string;
	}

	export interface UpdateIPSetRequest {
		Name: string;
		Scope: CheckCapacityRequestScope;
		Id: string;
		Description?: string;
		Addresses: Array<string>;
		LockToken: string;
	}

	export interface UpdateRegexPatternSetResponse {
		NextLockToken?: string;
	}

	export interface UpdateRegexPatternSetRequest {
		Name: string;
		Scope: CheckCapacityRequestScope;
		Id: string;
		Description?: string;
		RegularExpressionList: Array<Regex>;
		LockToken: string;
	}

	export interface UpdateRuleGroupResponse {
		NextLockToken?: string;
	}

	export interface UpdateRuleGroupRequest {
		Name: string;
		Scope: CheckCapacityRequestScope;
		Id: string;
		Description?: string;
		Rules?: Array<Rule>;

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Defines and enables Amazon CloudWatch metrics and web request sample collection. </p>
		 * Required
		 */
		VisibilityConfig: VisibilityConfig;
		LockToken: string;
	}

	export interface UpdateWebACLResponse {
		NextLockToken?: string;
	}

	export interface UpdateWebACLRequest {
		Name: string;
		Scope: CheckCapacityRequestScope;
		Id: string;

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>In a <a>WebACL</a>, this is the action that you want AWS WAF to perform when a web request doesn't match any of the rules in the <code>WebACL</code>. The default action must be a terminating action, so count is not allowed.</p>
		 * Required
		 */
		DefaultAction: DefaultAction;
		Description?: string;
		Rules?: Array<Rule>;

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Defines and enables Amazon CloudWatch metrics and web request sample collection. </p>
		 * Required
		 */
		VisibilityConfig: VisibilityConfig;
		LockToken: string;
	}

	export enum PositionalConstraint { EXACTLY = 0, STARTS_WITH = 1, ENDS_WITH = 2, CONTAINS = 3, CONTAINS_WORD = 4 }

	export enum Scope { CLOUDFRONT = 0, REGIONAL = 1 }

	export enum ComparisonOperator { EQ = 0, NE = 1, LE = 2, LT = 3, GE = 4, GT = 5 }

	export enum IPAddressVersion { IPV4 = 0, IPV6 = 1 }

	export enum ResourceType { APPLICATION_LOAD_BALANCER = 0, API_GATEWAY = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Associates a Web ACL with a regional application resource, to protect the resource. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage. </p> <p>For AWS CloudFront, don't use this call. Instead, use your CloudFront distribution configuration. To associate a Web ACL, in the CloudFront call <code>UpdateDistribution</code>, set the web ACL ID to the Amazon Resource Name (ARN) of the Web ACL. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.AssociateWebACL
		 * @return {AssociateWebACLResponse} Success
		 */
		AssociateWebACL(requestBody: AssociateWebACLRequest): Observable<AssociateWebACLResponse> {
			return this.http.post<AssociateWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.AssociateWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Returns the web ACL capacity unit (WCU) requirements for a specified scope and set of rules. You can use this to check the capacity requirements for the rules you want to use in a <a>RuleGroup</a> or <a>WebACL</a>. </p> <p>AWS WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. AWS WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. The WCU limit for web ACLs is 1,500. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.CheckCapacity
		 * @return {CheckCapacityResponse} Success
		 */
		CheckCapacity(requestBody: CheckCapacityRequest): Observable<CheckCapacityResponse> {
			return this.http.post<CheckCapacityResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.CheckCapacity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Creates an <a>IPSet</a>, which you use to identify web requests that originate from specific IP addresses or ranges of IP addresses. For example, if you're receiving a lot of requests from a ranges of IP addresses, you can configure AWS WAF to block them using an IPSet that lists those IP addresses. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.CreateIPSet
		 * @return {CreateIPSetResponse} Success
		 */
		CreateIPSet(requestBody: CreateIPSetRequest): Observable<CreateIPSetResponse> {
			return this.http.post<CreateIPSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.CreateIPSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Creates a <a>RegexPatternSet</a>, which you reference in a <a>RegexPatternSetReferenceStatement</a>, to have AWS WAF inspect a web request component for the specified patterns.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet
		 * @return {CreateRegexPatternSetResponse} Success
		 */
		CreateRegexPatternSet(requestBody: CreateRegexPatternSetRequest): Observable<CreateRegexPatternSetResponse> {
			return this.http.post<CreateRegexPatternSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Creates a <a>RuleGroup</a> per the specifications provided. </p> <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.CreateRuleGroup
		 * @return {CreateRuleGroupResponse} Success
		 */
		CreateRuleGroup(requestBody: CreateRuleGroupRequest): Observable<CreateRuleGroupResponse> {
			return this.http.post<CreateRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Creates a <a>WebACL</a> per the specifications provided.</p> <p> A Web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the Web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a Web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a Web ACL with one or more AWS resources to protect. The resources can be Amazon CloudFront, an Amazon API Gateway API, or an Application Load Balancer. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.CreateWebACL
		 * @return {CreateWebACLResponse} Success
		 */
		CreateWebACL(requestBody: CreateWebACLRequest): Observable<CreateWebACLResponse> {
			return this.http.post<CreateWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.CreateWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes all rule groups that are managed by AWS Firewall Manager for the specified web ACL. </p> <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified <a>WebACL</a>. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups
		 * @return {DeleteFirewallManagerRuleGroupsResponse} Success
		 */
		DeleteFirewallManagerRuleGroups(requestBody: DeleteFirewallManagerRuleGroupsRequest): Observable<DeleteFirewallManagerRuleGroupsResponse> {
			return this.http.post<DeleteFirewallManagerRuleGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Deletes the specified <a>IPSet</a>. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.DeleteIPSet
		 * @return {DeleteIPSetResponse} Success
		 */
		DeleteIPSet(requestBody: DeleteIPSetRequest): Observable<DeleteIPSetResponse> {
			return this.http.post<DeleteIPSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DeleteIPSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Deletes the <a>LoggingConfiguration</a> from the specified web ACL.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration
		 * @return {DeleteLoggingConfigurationResponse} Success
		 */
		DeleteLoggingConfiguration(requestBody: DeleteLoggingConfigurationRequest): Observable<DeleteLoggingConfigurationResponse> {
			return this.http.post<DeleteLoggingConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DeleteLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Permanently deletes an IAM policy from the specified rule group.</p> <p>You must be the owner of the rule group to perform this operation.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy
		 * @return {DeletePermissionPolicyResponse} Success
		 */
		DeletePermissionPolicy(requestBody: DeletePermissionPolicyRequest): Observable<DeletePermissionPolicyResponse> {
			return this.http.post<DeletePermissionPolicyResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DeletePermissionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Deletes the specified <a>RegexPatternSet</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet
		 * @return {DeleteRegexPatternSetResponse} Success
		 */
		DeleteRegexPatternSet(requestBody: DeleteRegexPatternSetRequest): Observable<DeleteRegexPatternSetResponse> {
			return this.http.post<DeleteRegexPatternSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Deletes the specified <a>RuleGroup</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup
		 * @return {DeleteRuleGroupResponse} Success
		 */
		DeleteRuleGroup(requestBody: DeleteRuleGroupRequest): Observable<DeleteRuleGroupResponse> {
			return this.http.post<DeleteRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Deletes the specified <a>WebACL</a>.</p> <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified <a>WebACL</a>. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.DeleteWebACL
		 * @return {DeleteWebACLResponse} Success
		 */
		DeleteWebACL(requestBody: DeleteWebACLRequest): Observable<DeleteWebACLResponse> {
			return this.http.post<DeleteWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DeleteWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Provides high-level information for a managed rule group, including descriptions of the rules. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup
		 * @return {DescribeManagedRuleGroupResponse} Success
		 */
		DescribeManagedRuleGroup(requestBody: DescribeManagedRuleGroupRequest): Observable<DescribeManagedRuleGroupResponse> {
			return this.http.post<DescribeManagedRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Disassociates a Web ACL from a regional application resource. A regional application can be an Application Load Balancer (ALB) or an API Gateway stage. </p> <p>For AWS CloudFront, don't use this call. Instead, use your CloudFront distribution configuration. To disassociate a Web ACL, provide an empty web ACL ID in the CloudFront call <code>UpdateDistribution</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.DisassociateWebACL
		 * @return {DisassociateWebACLResponse} Success
		 */
		DisassociateWebACL(requestBody: DisassociateWebACLRequest): Observable<DisassociateWebACLResponse> {
			return this.http.post<DisassociateWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Retrieves the specified <a>IPSet</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.GetIPSet
		 * @return {GetIPSetResponse} Success
		 */
		GetIPSet(requestBody: GetIPSetRequest): Observable<GetIPSetResponse> {
			return this.http.post<GetIPSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetIPSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Returns the <a>LoggingConfiguration</a> for the specified web ACL.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration
		 * @return {GetLoggingConfigurationResponse} Success
		 */
		GetLoggingConfiguration(requestBody: GetLoggingConfigurationRequest): Observable<GetLoggingConfigurationResponse> {
			return this.http.post<GetLoggingConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the IAM policy that is attached to the specified rule group.</p> <p>You must be the owner of the rule group to perform this operation.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy
		 * @return {GetPermissionPolicyResponse} Success
		 */
		GetPermissionPolicy(requestBody: GetPermissionPolicyRequest): Observable<GetPermissionPolicyResponse> {
			return this.http.post<GetPermissionPolicyResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetPermissionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Retrieves the keys that are currently blocked by a rate-based rule. The maximum number of managed keys that can be blocked for a single rate-based rule is 10,000. If more than 10,000 addresses exceed the rate limit, those with the highest rates are blocked.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys
		 * @return {GetRateBasedStatementManagedKeysResponse} Success
		 */
		GetRateBasedStatementManagedKeys(requestBody: GetRateBasedStatementManagedKeysRequest): Observable<GetRateBasedStatementManagedKeysResponse> {
			return this.http.post<GetRateBasedStatementManagedKeysResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Retrieves the specified <a>RegexPatternSet</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet
		 * @return {GetRegexPatternSetResponse} Success
		 */
		GetRegexPatternSet(requestBody: GetRegexPatternSetRequest): Observable<GetRegexPatternSetResponse> {
			return this.http.post<GetRegexPatternSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Retrieves the specified <a>RuleGroup</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.GetRuleGroup
		 * @return {GetRuleGroupResponse} Success
		 */
		GetRuleGroup(requestBody: GetRuleGroupRequest): Observable<GetRuleGroupResponse> {
			return this.http.post<GetRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Gets detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p> <p> <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource (such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code> returns an updated time range. This new time range indicates the actual period during which AWS WAF selected the requests in the sample.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.GetSampledRequests
		 * @return {GetSampledRequestsResponse} Success
		 */
		GetSampledRequests(requestBody: GetSampledRequestsRequest): Observable<GetSampledRequestsResponse> {
			return this.http.post<GetSampledRequestsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetSampledRequests', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Retrieves the specified <a>WebACL</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.GetWebACL
		 * @return {GetWebACLResponse} Success
		 */
		GetWebACL(requestBody: GetWebACLRequest): Observable<GetWebACLResponse> {
			return this.http.post<GetWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Retrieves the <a>WebACL</a> for the specified resource. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.GetWebACLForResource
		 * @return {GetWebACLForResourceResponse} Success
		 */
		GetWebACLForResource(requestBody: GetWebACLForResourceRequest): Observable<GetWebACLForResourceResponse> {
			return this.http.post<GetWebACLForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Retrieves an array of managed rule groups that are available for you to use. This list includes all AWS Managed Rules rule groups and the AWS Marketplace managed rule groups that you're subscribed to.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups
		 * @return {ListAvailableManagedRuleGroupsResponse} Success
		 */
		ListAvailableManagedRuleGroups(requestBody: ListAvailableManagedRuleGroupsRequest): Observable<ListAvailableManagedRuleGroupsResponse> {
			return this.http.post<ListAvailableManagedRuleGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Retrieves an array of <a>IPSetSummary</a> objects for the IP sets that you manage.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.ListIPSets
		 * @return {ListIPSetsResponse} Success
		 */
		ListIPSets(requestBody: ListIPSetsRequest): Observable<ListIPSetsResponse> {
			return this.http.post<ListIPSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListIPSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Retrieves an array of your <a>LoggingConfiguration</a> objects.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations
		 * @return {ListLoggingConfigurationsResponse} Success
		 */
		ListLoggingConfigurations(requestBody: ListLoggingConfigurationsRequest): Observable<ListLoggingConfigurationsResponse> {
			return this.http.post<ListLoggingConfigurationsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Retrieves an array of <a>RegexPatternSetSummary</a> objects for the regex pattern sets that you manage.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets
		 * @return {ListRegexPatternSetsResponse} Success
		 */
		ListRegexPatternSets(requestBody: ListRegexPatternSetsRequest): Observable<ListRegexPatternSetsResponse> {
			return this.http.post<ListRegexPatternSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Retrieves an array of the Amazon Resource Names (ARNs) for the regional resources that are associated with the specified web ACL. If you want the list of AWS CloudFront resources, use the AWS CloudFront call <code>ListDistributionsByWebACLId</code>. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL
		 * @return {ListResourcesForWebACLResponse} Success
		 */
		ListResourcesForWebACL(requestBody: ListResourcesForWebACLRequest): Observable<ListResourcesForWebACLResponse> {
			return this.http.post<ListResourcesForWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Retrieves an array of <a>RuleGroupSummary</a> objects for the rule groups that you manage. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.ListRuleGroups
		 * @return {ListRuleGroupsResponse} Success
		 */
		ListRuleGroups(requestBody: ListRuleGroupsRequest): Observable<ListRuleGroupsResponse> {
			return this.http.post<ListRuleGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListRuleGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Retrieves the <a>TagInfoForResource</a> for the specified resource. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Retrieves an array of <a>WebACLSummary</a> objects for the web ACLs that you manage.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.ListWebACLs
		 * @return {ListWebACLsResponse} Success
		 */
		ListWebACLs(requestBody: ListWebACLsRequest): Observable<ListWebACLsResponse> {
			return this.http.post<ListWebACLsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListWebACLs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Enables the specified <a>LoggingConfiguration</a>, to start logging from a web ACL, according to the configuration provided.</p> <p>You can access information about all traffic that AWS WAF inspects using the following steps:</p> <ol> <li> <p>Create an Amazon Kinesis Data Firehose. </p> <p>Create the data firehose with a PUT source and in the Region that you are operating. If you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia). </p> <note> <p>Do not create the data firehose using a <code>Kinesis stream</code> as your source.</p> </note> </li> <li> <p>Associate that firehose to your web ACL using a <code>PutLoggingConfiguration</code> request.</p> </li> </ol> <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, AWS WAF will create a service linked role with the necessary permissions to write logs to the Amazon Kinesis Data Firehose. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging Web ACL Traffic Information</a> in the <i>AWS WAF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration
		 * @return {PutLoggingConfigurationResponse} Success
		 */
		PutLoggingConfiguration(requestBody: PutLoggingConfigurationRequest): Observable<PutLoggingConfigurationResponse> {
			return this.http.post<PutLoggingConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches an IAM policy to the specified resource. Use this to share a rule group across accounts.</p> <p>You must be the owner of the rule group to perform this operation.</p> <p>This action is subject to the following restrictions:</p> <ul> <li> <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p> </li> <li> <p>The ARN in the request must be a valid WAF <a>RuleGroup</a> ARN and the rule group must exist in the same region.</p> </li> <li> <p>The user making the request must be the owner of the rule group.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy
		 * @return {PutPermissionPolicyResponse} Success
		 */
		PutPermissionPolicy(requestBody: PutPermissionPolicyRequest): Observable<PutPermissionPolicyResponse> {
			return this.http.post<PutPermissionPolicyResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Associates tags with the specified AWS resource. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each AWS resource.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Disassociates tags from an AWS resource. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each AWS resource.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Updates the specified <a>IPSet</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.UpdateIPSet
		 * @return {UpdateIPSetResponse} Success
		 */
		UpdateIPSet(requestBody: UpdateIPSetRequest): Observable<UpdateIPSetResponse> {
			return this.http.post<UpdateIPSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.UpdateIPSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Updates the specified <a>RegexPatternSet</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet
		 * @return {UpdateRegexPatternSetResponse} Success
		 */
		UpdateRegexPatternSet(requestBody: UpdateRegexPatternSetRequest): Observable<UpdateRegexPatternSetResponse> {
			return this.http.post<UpdateRegexPatternSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Updates the specified <a>RuleGroup</a>.</p> <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup
		 * @return {UpdateRuleGroupResponse} Success
		 */
		UpdateRuleGroup(requestBody: UpdateRuleGroupRequest): Observable<UpdateRuleGroupResponse> {
			return this.http.post<UpdateRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This is the latest version of <b>AWS WAF</b>, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. </p> </note> <p>Updates the specified <a>WebACL</a>.</p> <p> A Web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the Web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a Web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a Web ACL with one or more AWS resources to protect. The resources can be Amazon CloudFront, an Amazon API Gateway API, or an Application Load Balancer. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.UpdateWebACL
		 * @return {UpdateWebACLResponse} Success
		 */
		UpdateWebACL(requestBody: UpdateWebACLRequest): Observable<UpdateWebACLResponse> {
			return this.http.post<UpdateWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.UpdateWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateWebACLX_Amz_Target { AWSWAF_20190729_AssociateWebACL = 0 }

	export enum CheckCapacityX_Amz_Target { AWSWAF_20190729_CheckCapacity = 0 }

	export enum CreateIPSetX_Amz_Target { AWSWAF_20190729_CreateIPSet = 0 }

	export enum CreateRegexPatternSetX_Amz_Target { AWSWAF_20190729_CreateRegexPatternSet = 0 }

	export enum CreateRuleGroupX_Amz_Target { AWSWAF_20190729_CreateRuleGroup = 0 }

	export enum CreateWebACLX_Amz_Target { AWSWAF_20190729_CreateWebACL = 0 }

	export enum DeleteFirewallManagerRuleGroupsX_Amz_Target { AWSWAF_20190729_DeleteFirewallManagerRuleGroups = 0 }

	export enum DeleteIPSetX_Amz_Target { AWSWAF_20190729_DeleteIPSet = 0 }

	export enum DeleteLoggingConfigurationX_Amz_Target { AWSWAF_20190729_DeleteLoggingConfiguration = 0 }

	export enum DeletePermissionPolicyX_Amz_Target { AWSWAF_20190729_DeletePermissionPolicy = 0 }

	export enum DeleteRegexPatternSetX_Amz_Target { AWSWAF_20190729_DeleteRegexPatternSet = 0 }

	export enum DeleteRuleGroupX_Amz_Target { AWSWAF_20190729_DeleteRuleGroup = 0 }

	export enum DeleteWebACLX_Amz_Target { AWSWAF_20190729_DeleteWebACL = 0 }

	export enum DescribeManagedRuleGroupX_Amz_Target { AWSWAF_20190729_DescribeManagedRuleGroup = 0 }

	export enum DisassociateWebACLX_Amz_Target { AWSWAF_20190729_DisassociateWebACL = 0 }

	export enum GetIPSetX_Amz_Target { AWSWAF_20190729_GetIPSet = 0 }

	export enum GetLoggingConfigurationX_Amz_Target { AWSWAF_20190729_GetLoggingConfiguration = 0 }

	export enum GetPermissionPolicyX_Amz_Target { AWSWAF_20190729_GetPermissionPolicy = 0 }

	export enum GetRateBasedStatementManagedKeysX_Amz_Target { AWSWAF_20190729_GetRateBasedStatementManagedKeys = 0 }

	export enum GetRegexPatternSetX_Amz_Target { AWSWAF_20190729_GetRegexPatternSet = 0 }

	export enum GetRuleGroupX_Amz_Target { AWSWAF_20190729_GetRuleGroup = 0 }

	export enum GetSampledRequestsX_Amz_Target { AWSWAF_20190729_GetSampledRequests = 0 }

	export enum GetWebACLX_Amz_Target { AWSWAF_20190729_GetWebACL = 0 }

	export enum GetWebACLForResourceX_Amz_Target { AWSWAF_20190729_GetWebACLForResource = 0 }

	export enum ListAvailableManagedRuleGroupsX_Amz_Target { AWSWAF_20190729_ListAvailableManagedRuleGroups = 0 }

	export enum ListIPSetsX_Amz_Target { AWSWAF_20190729_ListIPSets = 0 }

	export enum ListLoggingConfigurationsX_Amz_Target { AWSWAF_20190729_ListLoggingConfigurations = 0 }

	export enum ListRegexPatternSetsX_Amz_Target { AWSWAF_20190729_ListRegexPatternSets = 0 }

	export enum ListResourcesForWebACLX_Amz_Target { AWSWAF_20190729_ListResourcesForWebACL = 0 }

	export enum ListRuleGroupsX_Amz_Target { AWSWAF_20190729_ListRuleGroups = 0 }

	export enum ListTagsForResourceX_Amz_Target { AWSWAF_20190729_ListTagsForResource = 0 }

	export enum ListWebACLsX_Amz_Target { AWSWAF_20190729_ListWebACLs = 0 }

	export enum PutLoggingConfigurationX_Amz_Target { AWSWAF_20190729_PutLoggingConfiguration = 0 }

	export enum PutPermissionPolicyX_Amz_Target { AWSWAF_20190729_PutPermissionPolicy = 0 }

	export enum TagResourceX_Amz_Target { AWSWAF_20190729_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { AWSWAF_20190729_UntagResource = 0 }

	export enum UpdateIPSetX_Amz_Target { AWSWAF_20190729_UpdateIPSet = 0 }

	export enum UpdateRegexPatternSetX_Amz_Target { AWSWAF_20190729_UpdateRegexPatternSet = 0 }

	export enum UpdateRuleGroupX_Amz_Target { AWSWAF_20190729_UpdateRuleGroup = 0 }

	export enum UpdateWebACLX_Amz_Target { AWSWAF_20190729_UpdateWebACL = 0 }

}

