import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateWebACLResponse {
	}
	export interface AssociateWebACLResponseFormProperties {
	}
	export function CreateAssociateWebACLResponseFormGroup() {
		return new FormGroup<AssociateWebACLResponseFormProperties>({
		});

	}

	export interface AssociateWebACLRequest {

		/** Required */
		WebACLArn: string;

		/** Required */
		ResourceArn: string;
	}
	export interface AssociateWebACLRequestFormProperties {

		/** Required */
		WebACLArn: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWebACLRequestFormGroup() {
		return new FormGroup<AssociateWebACLRequestFormProperties>({
			WebACLArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WAFInternalErrorException {
	}
	export interface WAFInternalErrorExceptionFormProperties {
	}
	export function CreateWAFInternalErrorExceptionFormGroup() {
		return new FormGroup<WAFInternalErrorExceptionFormProperties>({
		});

	}

	export interface WAFInvalidParameterException {
	}
	export interface WAFInvalidParameterExceptionFormProperties {
	}
	export function CreateWAFInvalidParameterExceptionFormGroup() {
		return new FormGroup<WAFInvalidParameterExceptionFormProperties>({
		});

	}

	export interface WAFNonexistentItemException {
	}
	export interface WAFNonexistentItemExceptionFormProperties {
	}
	export function CreateWAFNonexistentItemExceptionFormGroup() {
		return new FormGroup<WAFNonexistentItemExceptionFormProperties>({
		});

	}

	export interface WAFUnavailableEntityException {
	}
	export interface WAFUnavailableEntityExceptionFormProperties {
	}
	export function CreateWAFUnavailableEntityExceptionFormGroup() {
		return new FormGroup<WAFUnavailableEntityExceptionFormProperties>({
		});

	}

	export interface WAFInvalidOperationException {
	}
	export interface WAFInvalidOperationExceptionFormProperties {
	}
	export function CreateWAFInvalidOperationExceptionFormGroup() {
		return new FormGroup<WAFInvalidOperationExceptionFormProperties>({
		});

	}

	export interface CheckCapacityResponse {
		Capacity?: number | null;
	}
	export interface CheckCapacityResponseFormProperties {
		Capacity: FormControl<number | null | undefined>,
	}
	export function CreateCheckCapacityResponseFormGroup() {
		return new FormGroup<CheckCapacityResponseFormProperties>({
			Capacity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CheckCapacityRequest {

		/** Required */
		Scope: Scope;

		/** Required */
		Rules: Array<Rule>;
	}
	export interface CheckCapacityRequestFormProperties {

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
	}
	export function CreateCheckCapacityRequestFormGroup() {
		return new FormGroup<CheckCapacityRequestFormProperties>({
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Scope { CLOUDFRONT = 0, REGIONAL = 1 }


	/** A single rule, which you can use in a <a>WebACL</a> or <a>RuleGroup</a> to identify web requests that you want to allow, block, or count. Each rule includes one top-level <a>Statement</a> that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.  */
	export interface Rule {

		/** Required */
		Name: string;

		/** Required */
		Priority: number;

		/** Required */
		Statement: Statement;
		Action?: RuleAction;
		OverrideAction?: OverrideAction;
		RuleLabels?: Array<Label>;

		/** Required */
		VisibilityConfig: VisibilityConfig;
		CaptchaConfig?: CaptchaConfig;
		ChallengeConfig?: ChallengeConfig;
	}

	/** A single rule, which you can use in a <a>WebACL</a> or <a>RuleGroup</a> to identify web requests that you want to allow, block, or count. Each rule includes one top-level <a>Statement</a> that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.  */
	export interface RuleFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The processing guidance for a <a>Rule</a>, used by WAF to determine whether a web request matches the rule. </p> <p>For example specifications, see the examples section of <a>CreateWebACL</a>.</p> */
	export interface Statement {
		ByteMatchStatement?: ByteMatchStatement;
		SqliMatchStatement?: SqliMatchStatement;
		XssMatchStatement?: XssMatchStatement;
		SizeConstraintStatement?: SizeConstraintStatement;
		GeoMatchStatement?: GeoMatchStatement;
		RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
		IPSetReferenceStatement?: IPSetReferenceStatement;
		RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement;
		RateBasedStatement?: RateBasedStatement;
		AndStatement?: AndStatement;
		OrStatement?: OrStatement;
		NotStatement?: NotStatement;
		ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
		LabelMatchStatement?: LabelMatchStatement;
		RegexMatchStatement?: RegexMatchStatement;
	}

	/** <p>The processing guidance for a <a>Rule</a>, used by WAF to determine whether a web request matches the rule. </p> <p>For example specifications, see the examples section of <a>CreateWebACL</a>.</p> */
	export interface StatementFormProperties {
	}
	export function CreateStatementFormGroup() {
		return new FormGroup<StatementFormProperties>({
		});

	}


	/** A rule statement that defines a string match search for WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the WAF console and the developer guide, this is called a string match statement. */
	export interface ByteMatchStatement {

		/** Required */
		SearchString: string;

		/** Required */
		FieldToMatch: FieldToMatch;

		/** Required */
		TextTransformations: Array<TextTransformation>;

		/** Required */
		PositionalConstraint: PositionalConstraint;
	}

	/** A rule statement that defines a string match search for WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the WAF console and the developer guide, this is called a string match statement. */
	export interface ByteMatchStatementFormProperties {

		/** Required */
		SearchString: FormControl<string | null | undefined>,

		/** Required */
		PositionalConstraint: FormControl<PositionalConstraint | null | undefined>,
	}
	export function CreateByteMatchStatementFormGroup() {
		return new FormGroup<ByteMatchStatementFormProperties>({
			SearchString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PositionalConstraint: new FormControl<PositionalConstraint | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The part of the web request that you want WAF to inspect. Include the single <code>FieldToMatch</code> type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in <code>FieldToMatch</code> for each rule statement that requires it. To inspect more than one component of the web request, create a separate rule statement for each component.</p> <p>Example JSON for a <code>QueryString</code> field to match: </p> <p> <code> "FieldToMatch": { "QueryString": {} }</code> </p> <p>Example JSON for a <code>Method</code> field to match specification:</p> <p> <code> "FieldToMatch": { "Method": { "Name": "DELETE" } }</code> </p> */
	export interface FieldToMatch {
		SingleHeader?: SingleHeader;
		SingleQueryArgument?: SingleQueryArgument;
		AllQueryArguments?: AllQueryArguments;
		UriPath?: UriPath;
		QueryString?: QueryString;
		Body?: Body;
		Method?: Method;
		JsonBody?: JsonBody;
		Headers?: Headers;
		Cookies?: Cookies;
		HeaderOrder?: HeaderOrder;
	}

	/** <p>The part of the web request that you want WAF to inspect. Include the single <code>FieldToMatch</code> type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in <code>FieldToMatch</code> for each rule statement that requires it. To inspect more than one component of the web request, create a separate rule statement for each component.</p> <p>Example JSON for a <code>QueryString</code> field to match: </p> <p> <code> "FieldToMatch": { "QueryString": {} }</code> </p> <p>Example JSON for a <code>Method</code> field to match specification:</p> <p> <code> "FieldToMatch": { "Method": { "Name": "DELETE" } }</code> </p> */
	export interface FieldToMatchFormProperties {
	}
	export function CreateFieldToMatchFormGroup() {
		return new FormGroup<FieldToMatchFormProperties>({
		});

	}


	/** <p>Inspect one of the headers in the web request, identified by name, for example, <code>User-Agent</code> or <code>Referer</code>. The name isn't case sensitive.</p> <p>You can filter and inspect all headers with the <code>FieldToMatch</code> setting <code>Headers</code>.</p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>Example JSON: <code>"SingleHeader": { "Name": "haystack" }</code> </p> */
	export interface SingleHeader {

		/** Required */
		Name: string;
	}

	/** <p>Inspect one of the headers in the web request, identified by name, for example, <code>User-Agent</code> or <code>Referer</code>. The name isn't case sensitive.</p> <p>You can filter and inspect all headers with the <code>FieldToMatch</code> setting <code>Headers</code>.</p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>Example JSON: <code>"SingleHeader": { "Name": "haystack" }</code> </p> */
	export interface SingleHeaderFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSingleHeaderFormGroup() {
		return new FormGroup<SingleHeaderFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Inspect one query argument in the web request, identified by name, for example <i>UserName</i> or <i>SalesRegion</i>. The name isn't case sensitive. </p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>Example JSON: <code>"SingleQueryArgument": { "Name": "myArgument" }</code> </p> */
	export interface SingleQueryArgument {

		/** Required */
		Name: string;
	}

	/** <p>Inspect one query argument in the web request, identified by name, for example <i>UserName</i> or <i>SalesRegion</i>. The name isn't case sensitive. </p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>Example JSON: <code>"SingleQueryArgument": { "Name": "myArgument" }</code> </p> */
	export interface SingleQueryArgumentFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateSingleQueryArgumentFormGroup() {
		return new FormGroup<SingleQueryArgumentFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Inspect all query arguments of the web request. </p> <p>This is used in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"AllQueryArguments": {}</code> </p> */
	export interface AllQueryArguments {
	}

	/** <p>Inspect all query arguments of the web request. </p> <p>This is used in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"AllQueryArguments": {}</code> </p> */
	export interface AllQueryArgumentsFormProperties {
	}
	export function CreateAllQueryArgumentsFormGroup() {
		return new FormGroup<AllQueryArgumentsFormProperties>({
		});

	}


	/** <p>Inspect the path component of the URI of the web request. This is the part of the web request that identifies a resource. For example, <code>/images/daily-ad.jpg</code>.</p> <p>This is used in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"UriPath": {}</code> </p> */
	export interface UriPath {
	}

	/** <p>Inspect the path component of the URI of the web request. This is the part of the web request that identifies a resource. For example, <code>/images/daily-ad.jpg</code>.</p> <p>This is used in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"UriPath": {}</code> </p> */
	export interface UriPathFormProperties {
	}
	export function CreateUriPathFormGroup() {
		return new FormGroup<UriPathFormProperties>({
		});

	}


	/** <p>Inspect the query string of the web request. This is the part of a URL that appears after a <code>?</code> character, if any.</p> <p>This is used in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"QueryString": {}</code> </p> */
	export interface QueryString {
	}

	/** <p>Inspect the query string of the web request. This is the part of a URL that appears after a <code>?</code> character, if any.</p> <p>This is used in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"QueryString": {}</code> </p> */
	export interface QueryStringFormProperties {
	}
	export function CreateQueryStringFormGroup() {
		return new FormGroup<QueryStringFormProperties>({
		});

	}


	/** <p>Inspect the body of the web request. The body immediately follows the request headers.</p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> */
	export interface Body {
		OversizeHandling?: OversizeHandling;
	}

	/** <p>Inspect the body of the web request. The body immediately follows the request headers.</p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> */
	export interface BodyFormProperties {
		OversizeHandling: FormControl<OversizeHandling | null | undefined>,
	}
	export function CreateBodyFormGroup() {
		return new FormGroup<BodyFormProperties>({
			OversizeHandling: new FormControl<OversizeHandling | null | undefined>(undefined),
		});

	}

	export enum OversizeHandling { CONTINUE = 0, MATCH = 1, NO_MATCH = 2 }


	/** <p>Inspect the HTTP method of the web request. The method indicates the type of operation that the request is asking the origin to perform. </p> <p>This is used in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"Method": {}</code> </p> */
	export interface Method {
	}

	/** <p>Inspect the HTTP method of the web request. The method indicates the type of operation that the request is asking the origin to perform. </p> <p>This is used in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"Method": {}</code> </p> */
	export interface MethodFormProperties {
	}
	export function CreateMethodFormGroup() {
		return new FormGroup<MethodFormProperties>({
		});

	}


	/** <p>Inspect the body of the web request as JSON. The body immediately follows the request headers. </p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>Use the specifications in this object to indicate which parts of the JSON body to inspect using the rule's inspection criteria. WAF inspects only the parts of the JSON that result from the matches that you indicate. </p> <p>Example JSON: <code>"JsonBody": { "MatchPattern": { "All": {} }, "MatchScope": "ALL" }</code> </p> */
	export interface JsonBody {

		/** Required */
		MatchPattern: JsonMatchPattern;

		/** Required */
		MatchScope: JsonMatchScope;
		InvalidFallbackBehavior?: BodyParsingFallbackBehavior;
		OversizeHandling?: OversizeHandling;
	}

	/** <p>Inspect the body of the web request as JSON. The body immediately follows the request headers. </p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>Use the specifications in this object to indicate which parts of the JSON body to inspect using the rule's inspection criteria. WAF inspects only the parts of the JSON that result from the matches that you indicate. </p> <p>Example JSON: <code>"JsonBody": { "MatchPattern": { "All": {} }, "MatchScope": "ALL" }</code> </p> */
	export interface JsonBodyFormProperties {

		/** Required */
		MatchScope: FormControl<JsonMatchScope | null | undefined>,
		InvalidFallbackBehavior: FormControl<BodyParsingFallbackBehavior | null | undefined>,
		OversizeHandling: FormControl<OversizeHandling | null | undefined>,
	}
	export function CreateJsonBodyFormGroup() {
		return new FormGroup<JsonBodyFormProperties>({
			MatchScope: new FormControl<JsonMatchScope | null | undefined>(undefined, [Validators.required]),
			InvalidFallbackBehavior: new FormControl<BodyParsingFallbackBehavior | null | undefined>(undefined),
			OversizeHandling: new FormControl<OversizeHandling | null | undefined>(undefined),
		});

	}


	/** The patterns to look for in the JSON body. WAF inspects the results of these pattern matches against the rule inspection criteria. This is used with the <a>FieldToMatch</a> option <code>JsonBody</code>.  */
	export interface JsonMatchPattern {
		All?: All;
		IncludedPaths?: Array<string>;
	}

	/** The patterns to look for in the JSON body. WAF inspects the results of these pattern matches against the rule inspection criteria. This is used with the <a>FieldToMatch</a> option <code>JsonBody</code>.  */
	export interface JsonMatchPatternFormProperties {
	}
	export function CreateJsonMatchPatternFormGroup() {
		return new FormGroup<JsonMatchPatternFormProperties>({
		});

	}


	/** <p>Inspect all of the elements that WAF has parsed and extracted from the web request component that you've identified in your <a>FieldToMatch</a> specifications. </p> <p>This is used in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"All": {}</code> </p> */
	export interface All {
	}

	/** <p>Inspect all of the elements that WAF has parsed and extracted from the web request component that you've identified in your <a>FieldToMatch</a> specifications. </p> <p>This is used in the <a>FieldToMatch</a> specification for some web request component types. </p> <p>JSON specification: <code>"All": {}</code> </p> */
	export interface AllFormProperties {
	}
	export function CreateAllFormGroup() {
		return new FormGroup<AllFormProperties>({
		});

	}

	export enum JsonMatchScope { ALL = 0, KEY = 1, VALUE = 2 }

	export enum BodyParsingFallbackBehavior { MATCH = 0, NO_MATCH = 1, EVALUATE_AS_STRING = 2 }


	/** <p>Inspect all headers in the web request. You can specify the parts of the headers to inspect and you can narrow the set of headers to inspect by including or excluding specific keys.</p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>If you want to inspect just the value of a single header, use the <code>SingleHeader</code> <code>FieldToMatch</code> setting instead.</p> <p>Example JSON: <code>"Headers": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }</code> </p> */
	export interface Headers {

		/** Required */
		MatchPattern: HeaderMatchPattern;

		/** Required */
		MatchScope: JsonMatchScope;

		/** Required */
		OversizeHandling: OversizeHandling;
	}

	/** <p>Inspect all headers in the web request. You can specify the parts of the headers to inspect and you can narrow the set of headers to inspect by including or excluding specific keys.</p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>If you want to inspect just the value of a single header, use the <code>SingleHeader</code> <code>FieldToMatch</code> setting instead.</p> <p>Example JSON: <code>"Headers": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }</code> </p> */
	export interface HeadersFormProperties {

		/** Required */
		MatchScope: FormControl<JsonMatchScope | null | undefined>,

		/** Required */
		OversizeHandling: FormControl<OversizeHandling | null | undefined>,
	}
	export function CreateHeadersFormGroup() {
		return new FormGroup<HeadersFormProperties>({
			MatchScope: new FormControl<JsonMatchScope | null | undefined>(undefined, [Validators.required]),
			OversizeHandling: new FormControl<OversizeHandling | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The filter to use to identify the subset of headers to inspect in a web request. </p> <p>You must specify exactly one setting: either <code>All</code>, <code>IncludedHeaders</code>, or <code>ExcludedHeaders</code>.</p> <p>Example JSON: <code>"MatchPattern": { "ExcludedHeaders": [ "KeyToExclude1", "KeyToExclude2" ] }</code> </p> */
	export interface HeaderMatchPattern {
		All?: All;
		IncludedHeaders?: Array<string>;
		ExcludedHeaders?: Array<string>;
	}

	/** <p>The filter to use to identify the subset of headers to inspect in a web request. </p> <p>You must specify exactly one setting: either <code>All</code>, <code>IncludedHeaders</code>, or <code>ExcludedHeaders</code>.</p> <p>Example JSON: <code>"MatchPattern": { "ExcludedHeaders": [ "KeyToExclude1", "KeyToExclude2" ] }</code> </p> */
	export interface HeaderMatchPatternFormProperties {
	}
	export function CreateHeaderMatchPatternFormGroup() {
		return new FormGroup<HeaderMatchPatternFormProperties>({
		});

	}


	/** <p>Inspect the cookies in the web request. You can specify the parts of the cookies to inspect and you can narrow the set of cookies to inspect by including or excluding specific keys.</p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>Example JSON: <code>"Cookies": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }</code> </p> */
	export interface Cookies {

		/** Required */
		MatchPattern: CookieMatchPattern;

		/** Required */
		MatchScope: JsonMatchScope;

		/** Required */
		OversizeHandling: OversizeHandling;
	}

	/** <p>Inspect the cookies in the web request. You can specify the parts of the cookies to inspect and you can narrow the set of cookies to inspect by including or excluding specific keys.</p> <p>This is used to indicate the web request component to inspect, in the <a>FieldToMatch</a> specification. </p> <p>Example JSON: <code>"Cookies": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }</code> </p> */
	export interface CookiesFormProperties {

		/** Required */
		MatchScope: FormControl<JsonMatchScope | null | undefined>,

		/** Required */
		OversizeHandling: FormControl<OversizeHandling | null | undefined>,
	}
	export function CreateCookiesFormGroup() {
		return new FormGroup<CookiesFormProperties>({
			MatchScope: new FormControl<JsonMatchScope | null | undefined>(undefined, [Validators.required]),
			OversizeHandling: new FormControl<OversizeHandling | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The filter to use to identify the subset of cookies to inspect in a web request. </p> <p>You must specify exactly one setting: either <code>All</code>, <code>IncludedCookies</code>, or <code>ExcludedCookies</code>.</p> <p>Example JSON: <code>"MatchPattern": { "IncludedCookies": [ "session-id-time", "session-id" ] }</code> </p> */
	export interface CookieMatchPattern {
		All?: All;
		IncludedCookies?: Array<string>;
		ExcludedCookies?: Array<string>;
	}

	/** <p>The filter to use to identify the subset of cookies to inspect in a web request. </p> <p>You must specify exactly one setting: either <code>All</code>, <code>IncludedCookies</code>, or <code>ExcludedCookies</code>.</p> <p>Example JSON: <code>"MatchPattern": { "IncludedCookies": [ "session-id-time", "session-id" ] }</code> </p> */
	export interface CookieMatchPatternFormProperties {
	}
	export function CreateCookieMatchPatternFormGroup() {
		return new FormGroup<CookieMatchPatternFormProperties>({
		});

	}


	/** Inspect a string containing the list of the request's header names, ordered as they appear in the web request that WAF receives for inspection. WAF generates the string and then uses that as the field to match component in its inspection. WAF separates the header names in the string using colons and no added spaces, for example <code>host:user-agent:accept:authorization:referer</code>. */
	export interface HeaderOrder {

		/** Required */
		OversizeHandling: OversizeHandling;
	}

	/** Inspect a string containing the list of the request's header names, ordered as they appear in the web request that WAF receives for inspection. WAF generates the string and then uses that as the field to match component in its inspection. WAF separates the header names in the string using colons and no added spaces, for example <code>host:user-agent:accept:authorization:referer</code>. */
	export interface HeaderOrderFormProperties {

		/** Required */
		OversizeHandling: FormControl<OversizeHandling | null | undefined>,
	}
	export function CreateHeaderOrderFormGroup() {
		return new FormGroup<HeaderOrderFormProperties>({
			OversizeHandling: new FormControl<OversizeHandling | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.  */
	export interface TextTransformation {

		/** Required */
		Priority: number;

		/** Required */
		Type: TextTransformationType;
	}

	/** Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.  */
	export interface TextTransformationFormProperties {

		/** Required */
		Priority: FormControl<number | null | undefined>,

		/** Required */
		Type: FormControl<TextTransformationType | null | undefined>,
	}
	export function CreateTextTransformationFormGroup() {
		return new FormGroup<TextTransformationFormProperties>({
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<TextTransformationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TextTransformationType { NONE = 0, COMPRESS_WHITE_SPACE = 1, HTML_ENTITY_DECODE = 2, LOWERCASE = 3, CMD_LINE = 4, URL_DECODE = 5, BASE64_DECODE = 6, HEX_DECODE = 7, MD5 = 8, REPLACE_COMMENTS = 9, ESCAPE_SEQ_DECODE = 10, SQL_HEX_DECODE = 11, CSS_DECODE = 12, JS_DECODE = 13, NORMALIZE_PATH = 14, NORMALIZE_PATH_WIN = 15, REMOVE_NULLS = 16, REPLACE_NULLS = 17, BASE64_DECODE_EXT = 18, URL_DECODE_UNI = 19, UTF8_TO_UNICODE = 20 }

	export enum PositionalConstraint { EXACTLY = 0, STARTS_WITH = 1, ENDS_WITH = 2, CONTAINS = 3, CONTAINS_WORD = 4 }


	/** A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.  */
	export interface SqliMatchStatement {

		/** Required */
		FieldToMatch: FieldToMatch;

		/** Required */
		TextTransformations: Array<TextTransformation>;
		SensitivityLevel?: SensitivityLevel;
	}

	/** A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.  */
	export interface SqliMatchStatementFormProperties {
		SensitivityLevel: FormControl<SensitivityLevel | null | undefined>,
	}
	export function CreateSqliMatchStatementFormGroup() {
		return new FormGroup<SqliMatchStatementFormProperties>({
			SensitivityLevel: new FormControl<SensitivityLevel | null | undefined>(undefined),
		});

	}

	export enum SensitivityLevel { LOW = 0, HIGH = 1 }


	/** A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.  */
	export interface XssMatchStatement {

		/** Required */
		FieldToMatch: FieldToMatch;

		/** Required */
		TextTransformations: Array<TextTransformation>;
	}

	/** A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.  */
	export interface XssMatchStatementFormProperties {
	}
	export function CreateXssMatchStatementFormGroup() {
		return new FormGroup<XssMatchStatementFormProperties>({
		});

	}


	/** <p>A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (&gt;) or less than (&lt;). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes. </p> <p>If you configure WAF to inspect the request body, WAF inspects only the number of bytes of the body up to the limit for the web ACL. By default, for regional web ACLs, this limit is 8 KB (8,192 kilobytes) and for CloudFront web ACLs, this limit is 16 KB (16,384 kilobytes). For CloudFront web ACLs, you can increase the limit in the web ACL <code>AssociationConfig</code>, for additional fees. If you know that the request body for your web requests should never exceed the inspection limit, you could use a size constraint statement to block requests that have a larger request body size.</p> <p>If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI <code>/logo.jpg</code> is nine characters long.</p> */
	export interface SizeConstraintStatement {

		/** Required */
		FieldToMatch: FieldToMatch;

		/** Required */
		ComparisonOperator: ComparisonOperator;

		/** Required */
		Size: number;

		/** Required */
		TextTransformations: Array<TextTransformation>;
	}

	/** <p>A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (&gt;) or less than (&lt;). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes. </p> <p>If you configure WAF to inspect the request body, WAF inspects only the number of bytes of the body up to the limit for the web ACL. By default, for regional web ACLs, this limit is 8 KB (8,192 kilobytes) and for CloudFront web ACLs, this limit is 16 KB (16,384 kilobytes). For CloudFront web ACLs, you can increase the limit in the web ACL <code>AssociationConfig</code>, for additional fees. If you know that the request body for your web requests should never exceed the inspection limit, you could use a size constraint statement to block requests that have a larger request body size.</p> <p>If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI <code>/logo.jpg</code> is nine characters long.</p> */
	export interface SizeConstraintStatementFormProperties {

		/** Required */
		ComparisonOperator: FormControl<ComparisonOperator | null | undefined>,

		/** Required */
		Size: FormControl<number | null | undefined>,
	}
	export function CreateSizeConstraintStatementFormGroup() {
		return new FormGroup<SizeConstraintStatementFormProperties>({
			ComparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined, [Validators.required]),
			Size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ComparisonOperator { EQ = 0, NE = 1, LE = 2, LT = 3, GE = 4, GT = 5 }


	/** <p>A rule statement that labels web requests by country and region and that matches against web requests based on country code. A geo match rule labels every request that it inspects regardless of whether it finds a match.</p> <ul> <li> <p>To manage requests only by country, you can use this statement by itself and specify the countries that you want to match against in the <code>CountryCodes</code> array. </p> </li> <li> <p>Otherwise, configure your geo match rule with Count action so that it only labels requests. Then, add one or more label match rules to run after the geo match rule and configure them to match against the geographic labels and handle the requests as needed. </p> </li> </ul> <p>WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match <code>ForwardedIPConfig</code>. </p> <p>If you use the web request origin, the label formats are <code>awswaf:clientip:geo:region:&lt;ISO country code&gt;-&lt;ISO region code&gt;</code> and <code>awswaf:clientip:geo:country:&lt;ISO country code&gt;</code>.</p> <p>If you use a forwarded IP address, the label formats are <code>awswaf:forwardedip:geo:region:&lt;ISO country code&gt;-&lt;ISO region code&gt;</code> and <code>awswaf:forwardedip:geo:country:&lt;ISO country code&gt;</code>.</p> <p>For additional details, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html">Geographic match rule statement</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p> */
	export interface GeoMatchStatement {
		CountryCodes?: Array<CountryCode>;
		ForwardedIPConfig?: ForwardedIPConfig;
	}

	/** <p>A rule statement that labels web requests by country and region and that matches against web requests based on country code. A geo match rule labels every request that it inspects regardless of whether it finds a match.</p> <ul> <li> <p>To manage requests only by country, you can use this statement by itself and specify the countries that you want to match against in the <code>CountryCodes</code> array. </p> </li> <li> <p>Otherwise, configure your geo match rule with Count action so that it only labels requests. Then, add one or more label match rules to run after the geo match rule and configure them to match against the geographic labels and handle the requests as needed. </p> </li> </ul> <p>WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match <code>ForwardedIPConfig</code>. </p> <p>If you use the web request origin, the label formats are <code>awswaf:clientip:geo:region:&lt;ISO country code&gt;-&lt;ISO region code&gt;</code> and <code>awswaf:clientip:geo:country:&lt;ISO country code&gt;</code>.</p> <p>If you use a forwarded IP address, the label formats are <code>awswaf:forwardedip:geo:region:&lt;ISO country code&gt;-&lt;ISO region code&gt;</code> and <code>awswaf:forwardedip:geo:country:&lt;ISO country code&gt;</code>.</p> <p>For additional details, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html">Geographic match rule statement</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p> */
	export interface GeoMatchStatementFormProperties {
	}
	export function CreateGeoMatchStatementFormGroup() {
		return new FormGroup<GeoMatchStatementFormProperties>({
		});

	}

	export enum CountryCode { AF = 0, AX = 1, AL = 2, DZ = 3, AS = 4, AD = 5, AO = 6, AI = 7, AQ = 8, AG = 9, AR = 10, AM = 11, AW = 12, AU = 13, AT = 14, AZ = 15, BS = 16, BH = 17, BD = 18, BB = 19, BY = 20, BE = 21, BZ = 22, BJ = 23, BM = 24, BT = 25, BO = 26, BQ = 27, BA = 28, BW = 29, BV = 30, BR = 31, IO = 32, BN = 33, BG = 34, BF = 35, BI = 36, KH = 37, CM = 38, CA = 39, CV = 40, KY = 41, CF = 42, TD = 43, CL = 44, CN = 45, CX = 46, CC = 47, CO = 48, KM = 49, CG = 50, CD = 51, CK = 52, CR = 53, CI = 54, HR = 55, CU = 56, CW = 57, CY = 58, CZ = 59, DK = 60, DJ = 61, DM = 62, DO = 63, EC = 64, EG = 65, SV = 66, GQ = 67, ER = 68, EE = 69, ET = 70, FK = 71, FO = 72, FJ = 73, FI = 74, FR = 75, GF = 76, PF = 77, TF = 78, GA = 79, GM = 80, GE = 81, DE = 82, GH = 83, GI = 84, GR = 85, GL = 86, GD = 87, GP = 88, GU = 89, GT = 90, GG = 91, GN = 92, GW = 93, GY = 94, HT = 95, HM = 96, VA = 97, HN = 98, HK = 99, HU = 100, IS = 101, IN = 102, ID = 103, IR = 104, IQ = 105, IE = 106, IM = 107, IL = 108, IT = 109, JM = 110, JP = 111, JE = 112, JO = 113, KZ = 114, KE = 115, KI = 116, KP = 117, KR = 118, KW = 119, KG = 120, LA = 121, LV = 122, LB = 123, LS = 124, LR = 125, LY = 126, LI = 127, LT = 128, LU = 129, MO = 130, MK = 131, MG = 132, MW = 133, MY = 134, MV = 135, ML = 136, MT = 137, MH = 138, MQ = 139, MR = 140, MU = 141, YT = 142, MX = 143, FM = 144, MD = 145, MC = 146, MN = 147, ME = 148, MS = 149, MA = 150, MZ = 151, MM = 152, NA = 153, NR = 154, NP = 155, NL = 156, NC = 157, NZ = 158, NI = 159, NE = 160, NG = 161, NU = 162, NF = 163, MP = 164, NO = 165, OM = 166, PK = 167, PW = 168, PS = 169, PA = 170, PG = 171, PY = 172, PE = 173, PH = 174, PN = 175, PL = 176, PT = 177, PR = 178, QA = 179, RE = 180, RO = 181, RU = 182, RW = 183, BL = 184, SH = 185, KN = 186, LC = 187, MF = 188, PM = 189, VC = 190, WS = 191, SM = 192, ST = 193, SA = 194, SN = 195, RS = 196, SC = 197, SL = 198, SG = 199, SX = 200, SK = 201, SI = 202, SB = 203, SO = 204, ZA = 205, GS = 206, SS = 207, ES = 208, LK = 209, SD = 210, SR = 211, SJ = 212, SZ = 213, SE = 214, CH = 215, SY = 216, TW = 217, TJ = 218, TZ = 219, TH = 220, TL = 221, TG = 222, TK = 223, TO = 224, TT = 225, TN = 226, TR = 227, TM = 228, TC = 229, TV = 230, UG = 231, UA = 232, AE = 233, GB = 234, US = 235, UM = 236, UY = 237, UZ = 238, VU = 239, VE = 240, VN = 241, VG = 242, VI = 243, WF = 244, EH = 245, YE = 246, ZM = 247, ZW = 248, XK = 249 }


	/** <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p> <note> <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p> </note> <p>This configuration is used for <a>GeoMatchStatement</a> and <a>RateBasedStatement</a>. For <a>IPSetReferenceStatement</a>, use <a>IPSetForwardedIPConfig</a> instead. </p> <p>WAF only evaluates the first IP address found in the specified HTTP header. </p> */
	export interface ForwardedIPConfig {

		/** Required */
		HeaderName: string;

		/** Required */
		FallbackBehavior: FallbackBehavior;
	}

	/** <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p> <note> <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p> </note> <p>This configuration is used for <a>GeoMatchStatement</a> and <a>RateBasedStatement</a>. For <a>IPSetReferenceStatement</a>, use <a>IPSetForwardedIPConfig</a> instead. </p> <p>WAF only evaluates the first IP address found in the specified HTTP header. </p> */
	export interface ForwardedIPConfigFormProperties {

		/** Required */
		HeaderName: FormControl<string | null | undefined>,

		/** Required */
		FallbackBehavior: FormControl<FallbackBehavior | null | undefined>,
	}
	export function CreateForwardedIPConfigFormGroup() {
		return new FormGroup<ForwardedIPConfigFormProperties>({
			HeaderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FallbackBehavior: new FormControl<FallbackBehavior | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FallbackBehavior { MATCH = 0, NO_MATCH = 1 }


	/** <p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p> <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. You can only use a rule group reference statement at the top level inside a web ACL. </p> */
	export interface RuleGroupReferenceStatement {

		/** Required */
		ARN: string;
		ExcludedRules?: Array<ExcludedRule>;
		RuleActionOverrides?: Array<RuleActionOverride>;
	}

	/** <p>A rule statement used to run the rules that are defined in a <a>RuleGroup</a>. To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.</p> <p>You cannot nest a <code>RuleGroupReferenceStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. You can only use a rule group reference statement at the top level inside a web ACL. </p> */
	export interface RuleGroupReferenceStatementFormProperties {

		/** Required */
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupReferenceStatementFormGroup() {
		return new FormGroup<RuleGroupReferenceStatementFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Specifies a single rule in a rule group whose action you want to override to <code>Count</code>. </p> <note> <p>Instead of this option, use <code>RuleActionOverrides</code>. It accepts any valid action setting, including <code>Count</code>.</p> </note> */
	export interface ExcludedRule {

		/** Required */
		Name: string;
	}

	/** <p>Specifies a single rule in a rule group whose action you want to override to <code>Count</code>. </p> <note> <p>Instead of this option, use <code>RuleActionOverrides</code>. It accepts any valid action setting, including <code>Count</code>.</p> </note> */
	export interface ExcludedRuleFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateExcludedRuleFormGroup() {
		return new FormGroup<ExcludedRuleFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Action setting to use in the place of a rule action that is configured inside the rule group. You specify one override for each rule whose action you want to change. </p> <p>You can use overrides for testing, for example you can override all of rule actions to <code>Count</code> and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.</p> */
	export interface RuleActionOverride {

		/** Required */
		Name: string;

		/** Required */
		ActionToUse: RuleAction;
	}

	/** <p>Action setting to use in the place of a rule action that is configured inside the rule group. You specify one override for each rule whose action you want to change. </p> <p>You can use overrides for testing, for example you can override all of rule actions to <code>Count</code> and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.</p> */
	export interface RuleActionOverrideFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRuleActionOverrideFormGroup() {
		return new FormGroup<RuleActionOverrideFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The action that WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting.  */
	export interface RuleAction {
		Block?: BlockAction;
		Allow?: AllowAction;
		Count?: CountAction;
		Captcha?: CaptchaAction;
		Challenge?: ChallengeAction;
	}

	/** The action that WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting.  */
	export interface RuleActionFormProperties {
	}
	export function CreateRuleActionFormGroup() {
		return new FormGroup<RuleActionFormProperties>({
		});

	}


	/** <p>Specifies that WAF should block the request and optionally defines additional custom handling for the response to the web request.</p> <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
	export interface BlockAction {
		CustomResponse?: CustomResponse;
	}

	/** <p>Specifies that WAF should block the request and optionally defines additional custom handling for the response to the web request.</p> <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
	export interface BlockActionFormProperties {
	}
	export function CreateBlockActionFormGroup() {
		return new FormGroup<BlockActionFormProperties>({
		});

	}


	/** <p>A custom response to send to the client. You can define a custom response for rule actions and default web ACL actions that are set to <a>BlockAction</a>. </p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p> */
	export interface CustomResponse {

		/** Required */
		ResponseCode: number;
		CustomResponseBodyKey?: string;
		ResponseHeaders?: Array<CustomHTTPHeader>;
	}

	/** <p>A custom response to send to the client. You can define a custom response for rule actions and default web ACL actions that are set to <a>BlockAction</a>. </p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p> */
	export interface CustomResponseFormProperties {

		/** Required */
		ResponseCode: FormControl<number | null | undefined>,
		CustomResponseBodyKey: FormControl<string | null | undefined>,
	}
	export function CreateCustomResponseFormGroup() {
		return new FormGroup<CustomResponseFormProperties>({
			ResponseCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CustomResponseBodyKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A custom header for custom request and response handling. This is used in <a>CustomResponse</a> and <a>CustomRequestHandling</a>. */
	export interface CustomHTTPHeader {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
	}

	/** A custom header for custom request and response handling. This is used in <a>CustomResponse</a> and <a>CustomRequestHandling</a>. */
	export interface CustomHTTPHeaderFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateCustomHTTPHeaderFormGroup() {
		return new FormGroup<CustomHTTPHeaderFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Specifies that WAF should allow the request and optionally defines additional custom handling for the request.</p> <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
	export interface AllowAction {
		CustomRequestHandling?: CustomRequestHandling;
	}

	/** <p>Specifies that WAF should allow the request and optionally defines additional custom handling for the request.</p> <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
	export interface AllowActionFormProperties {
	}
	export function CreateAllowActionFormGroup() {
		return new FormGroup<AllowActionFormProperties>({
		});

	}


	/** <p>Custom request handling behavior that inserts custom headers into a web request. You can add custom request handling for WAF to use when the rule action doesn't block the request. For example, <code>CaptchaAction</code> for requests with valid t okens, and <code>AllowAction</code>. </p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p> */
	export interface CustomRequestHandling {

		/** Required */
		InsertHeaders: Array<CustomHTTPHeader>;
	}

	/** <p>Custom request handling behavior that inserts custom headers into a web request. You can add custom request handling for WAF to use when the rule action doesn't block the request. For example, <code>CaptchaAction</code> for requests with valid t okens, and <code>AllowAction</code>. </p> <p>For information about customizing web requests and responses, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide</i>. </p> */
	export interface CustomRequestHandlingFormProperties {
	}
	export function CreateCustomRequestHandlingFormGroup() {
		return new FormGroup<CustomRequestHandlingFormProperties>({
		});

	}


	/** <p>Specifies that WAF should count the request. Optionally defines additional custom handling for the request.</p> <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
	export interface CountAction {
		CustomRequestHandling?: CustomRequestHandling;
	}

	/** <p>Specifies that WAF should count the request. Optionally defines additional custom handling for the request.</p> <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> */
	export interface CountActionFormProperties {
	}
	export function CreateCountActionFormGroup() {
		return new FormGroup<CountActionFormProperties>({
		});

	}


	/** <p>Specifies that WAF should run a <code>CAPTCHA</code> check against the request: </p> <ul> <li> <p>If the request includes a valid, unexpired <code>CAPTCHA</code> token, WAF applies any custom request handling and labels that you've configured and then allows the web request inspection to proceed to the next rule, similar to a <code>CountAction</code>. </p> </li> <li> <p>If the request doesn't include a valid, unexpired token, WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.</p> <p>WAF generates a response that it sends back to the client, which includes the following: </p> <ul> <li> <p>The header <code>x-amzn-waf-action</code> with a value of <code>captcha</code>. </p> </li> <li> <p>The HTTP status code <code>405 Method Not Allowed</code>. </p> </li> <li> <p>If the request contains an <code>Accept</code> header with a value of <code>text/html</code>, the response includes a <code>CAPTCHA</code> JavaScript page interstitial. </p> </li> </ul> </li> </ul> <p>You can configure the expiration time in the <code>CaptchaConfig</code> <code>ImmunityTimeProperty</code> setting at the rule and web ACL level. The rule setting overrides the web ACL setting. </p> <p>This action option is available for rules. It isn't available for web ACL default actions. </p> */
	export interface CaptchaAction {
		CustomRequestHandling?: CustomRequestHandling;
	}

	/** <p>Specifies that WAF should run a <code>CAPTCHA</code> check against the request: </p> <ul> <li> <p>If the request includes a valid, unexpired <code>CAPTCHA</code> token, WAF applies any custom request handling and labels that you've configured and then allows the web request inspection to proceed to the next rule, similar to a <code>CountAction</code>. </p> </li> <li> <p>If the request doesn't include a valid, unexpired token, WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.</p> <p>WAF generates a response that it sends back to the client, which includes the following: </p> <ul> <li> <p>The header <code>x-amzn-waf-action</code> with a value of <code>captcha</code>. </p> </li> <li> <p>The HTTP status code <code>405 Method Not Allowed</code>. </p> </li> <li> <p>If the request contains an <code>Accept</code> header with a value of <code>text/html</code>, the response includes a <code>CAPTCHA</code> JavaScript page interstitial. </p> </li> </ul> </li> </ul> <p>You can configure the expiration time in the <code>CaptchaConfig</code> <code>ImmunityTimeProperty</code> setting at the rule and web ACL level. The rule setting overrides the web ACL setting. </p> <p>This action option is available for rules. It isn't available for web ACL default actions. </p> */
	export interface CaptchaActionFormProperties {
	}
	export function CreateCaptchaActionFormGroup() {
		return new FormGroup<CaptchaActionFormProperties>({
		});

	}


	/** <p>Specifies that WAF should run a <code>Challenge</code> check against the request to verify that the request is coming from a legitimate client session: </p> <ul> <li> <p>If the request includes a valid, unexpired challenge token, WAF applies any custom request handling and labels that you've configured and then allows the web request inspection to proceed to the next rule, similar to a <code>CountAction</code>. </p> </li> <li> <p>If the request doesn't include a valid, unexpired challenge token, WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.</p> <p>WAF then generates a challenge response that it sends back to the client, which includes the following: </p> <ul> <li> <p>The header <code>x-amzn-waf-action</code> with a value of <code>challenge</code>. </p> </li> <li> <p>The HTTP status code <code>202 Request Accepted</code>. </p> </li> <li> <p>If the request contains an <code>Accept</code> header with a value of <code>text/html</code>, the response includes a JavaScript page interstitial with a challenge script. </p> </li> </ul> <p>Challenges run silent browser interrogations in the background, and don't generally affect the end user experience. </p> <p>A challenge enforces token acquisition using an interstitial JavaScript challenge that inspects the client session for legitimate behavior. The challenge blocks bots or at least increases the cost of operating sophisticated bots. </p> <p>After the client session successfully responds to the challenge, it receives a new token from WAF, which the challenge script uses to resubmit the original request. </p> </li> </ul> <p>You can configure the expiration time in the <code>ChallengeConfig</code> <code>ImmunityTimeProperty</code> setting at the rule and web ACL level. The rule setting overrides the web ACL setting. </p> <p>This action option is available for rules. It isn't available for web ACL default actions. </p> */
	export interface ChallengeAction {
		CustomRequestHandling?: CustomRequestHandling;
	}

	/** <p>Specifies that WAF should run a <code>Challenge</code> check against the request to verify that the request is coming from a legitimate client session: </p> <ul> <li> <p>If the request includes a valid, unexpired challenge token, WAF applies any custom request handling and labels that you've configured and then allows the web request inspection to proceed to the next rule, similar to a <code>CountAction</code>. </p> </li> <li> <p>If the request doesn't include a valid, unexpired challenge token, WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.</p> <p>WAF then generates a challenge response that it sends back to the client, which includes the following: </p> <ul> <li> <p>The header <code>x-amzn-waf-action</code> with a value of <code>challenge</code>. </p> </li> <li> <p>The HTTP status code <code>202 Request Accepted</code>. </p> </li> <li> <p>If the request contains an <code>Accept</code> header with a value of <code>text/html</code>, the response includes a JavaScript page interstitial with a challenge script. </p> </li> </ul> <p>Challenges run silent browser interrogations in the background, and don't generally affect the end user experience. </p> <p>A challenge enforces token acquisition using an interstitial JavaScript challenge that inspects the client session for legitimate behavior. The challenge blocks bots or at least increases the cost of operating sophisticated bots. </p> <p>After the client session successfully responds to the challenge, it receives a new token from WAF, which the challenge script uses to resubmit the original request. </p> </li> </ul> <p>You can configure the expiration time in the <code>ChallengeConfig</code> <code>ImmunityTimeProperty</code> setting at the rule and web ACL level. The rule setting overrides the web ACL setting. </p> <p>This action option is available for rules. It isn't available for web ACL default actions. </p> */
	export interface ChallengeActionFormProperties {
	}
	export function CreateChallengeActionFormGroup() {
		return new FormGroup<ChallengeActionFormProperties>({
		});

	}


	/** <p>A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an <a>IPSet</a> that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see <a>CreateIPSet</a>.</p> <p>Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p> */
	export interface IPSetReferenceStatement {

		/** Required */
		ARN: string;
		IPSetForwardedIPConfig?: IPSetForwardedIPConfig;
	}

	/** <p>A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an <a>IPSet</a> that specifies the addresses you want to detect, then use the ARN of that set in this statement. To create an IP set, see <a>CreateIPSet</a>.</p> <p>Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p> */
	export interface IPSetReferenceStatementFormProperties {

		/** Required */
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateIPSetReferenceStatementFormGroup() {
		return new FormGroup<IPSetReferenceStatementFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p> <note> <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p> </note> <p>This configuration is used only for <a>IPSetReferenceStatement</a>. For <a>GeoMatchStatement</a> and <a>RateBasedStatement</a>, use <a>ForwardedIPConfig</a> instead. </p> */
	export interface IPSetForwardedIPConfig {

		/** Required */
		HeaderName: string;

		/** Required */
		FallbackBehavior: FallbackBehavior;

		/** Required */
		Position: ForwardedIPPosition;
	}

	/** <p>The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name. </p> <note> <p>If the specified header isn't present in the request, WAF doesn't apply the rule to the web request at all.</p> </note> <p>This configuration is used only for <a>IPSetReferenceStatement</a>. For <a>GeoMatchStatement</a> and <a>RateBasedStatement</a>, use <a>ForwardedIPConfig</a> instead. </p> */
	export interface IPSetForwardedIPConfigFormProperties {

		/** Required */
		HeaderName: FormControl<string | null | undefined>,

		/** Required */
		FallbackBehavior: FormControl<FallbackBehavior | null | undefined>,

		/** Required */
		Position: FormControl<ForwardedIPPosition | null | undefined>,
	}
	export function CreateIPSetForwardedIPConfigFormGroup() {
		return new FormGroup<IPSetForwardedIPConfigFormProperties>({
			HeaderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FallbackBehavior: new FormControl<FallbackBehavior | null | undefined>(undefined, [Validators.required]),
			Position: new FormControl<ForwardedIPPosition | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ForwardedIPPosition { FIRST = 0, LAST = 1, ANY = 2 }


	/** <p>A rule statement used to search web request components for matches with regular expressions. To use this, create a <a>RegexPatternSet</a> that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see <a>CreateRegexPatternSet</a>.</p> <p>Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p> */
	export interface RegexPatternSetReferenceStatement {

		/** Required */
		ARN: string;

		/** Required */
		FieldToMatch: FieldToMatch;

		/** Required */
		TextTransformations: Array<TextTransformation>;
	}

	/** <p>A rule statement used to search web request components for matches with regular expressions. To use this, create a <a>RegexPatternSet</a> that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set. To create a regex pattern set, see <a>CreateRegexPatternSet</a>.</p> <p>Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, WAF automatically updates all rules that reference it.</p> */
	export interface RegexPatternSetReferenceStatementFormProperties {

		/** Required */
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateRegexPatternSetReferenceStatementFormGroup() {
		return new FormGroup<RegexPatternSetReferenceStatementFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A rate-based rule counts incoming requests and rate limits requests when they are coming at too fast a rate. The rule categorizes requests according to your aggregation criteria, collects them into aggregation instances, and counts and rate limits the requests for each instance. </p> <p>You can specify individual aggregation keys, like IP address or HTTP method. You can also specify aggregation key combinations, like IP address and HTTP method, or HTTP method, query argument, and cookie. </p> <p>Each unique set of values for the aggregation keys that you specify is a separate aggregation instance, with the value from each key contributing to the aggregation instance definition. </p> <p>For example, assume the rule evaluates web requests with the following IP address and HTTP method values: </p> <ul> <li> <p>IP address 10.1.1.1, HTTP method POST</p> </li> <li> <p>IP address 10.1.1.1, HTTP method GET</p> </li> <li> <p>IP address 127.0.0.0, HTTP method POST</p> </li> <li> <p>IP address 10.1.1.1, HTTP method GET</p> </li> </ul> <p>The rule would create different aggregation instances according to your aggregation criteria, for example: </p> <ul> <li> <p>If the aggregation criteria is just the IP address, then each individual address is an aggregation instance, and WAF counts requests separately for each. The aggregation instances and request counts for our example would be the following: </p> <ul> <li> <p>IP address 10.1.1.1: count 3</p> </li> <li> <p>IP address 127.0.0.0: count 1</p> </li> </ul> </li> <li> <p>If the aggregation criteria is HTTP method, then each individual HTTP method is an aggregation instance. The aggregation instances and request counts for our example would be the following: </p> <ul> <li> <p>HTTP method POST: count 2</p> </li> <li> <p>HTTP method GET: count 2</p> </li> </ul> </li> <li> <p>If the aggregation criteria is IP address and HTTP method, then each IP address and each HTTP method would contribute to the combined aggregation instance. The aggregation instances and request counts for our example would be the following: </p> <ul> <li> <p>IP address 10.1.1.1, HTTP method POST: count 1</p> </li> <li> <p>IP address 10.1.1.1, HTTP method GET: count 2</p> </li> <li> <p>IP address 127.0.0.0, HTTP method POST: count 1</p> </li> </ul> </li> </ul> <p>For any n-tuple of aggregation keys, each unique combination of values for the keys defines a separate aggregation instance, which WAF counts and rate-limits individually. </p> <p>You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts and rate limits requests that match the nested statement. You can use this nested scope-down statement in conjunction with your aggregation key specifications or you can just count and rate limit all requests that match the scope-down statement, without additional aggregation. When you choose to just manage all requests that match a scope-down statement, the aggregation instance is singular for the rule. </p> <p>You cannot nest a <code>RateBasedStatement</code> inside another statement, for example inside a <code>NotStatement</code> or <code>OrStatement</code>. You can define a <code>RateBasedStatement</code> inside a web ACL and inside a rule group. </p> <p>For additional information about the options, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rate-based-rules.html">Rate limiting web requests using rate-based rules</a> in the <i>WAF Developer Guide</i>. </p> <p>If you only aggregate on the individual IP address or forwarded IP address, you can retrieve the list of IP addresses that WAF is currently rate limiting for a rule through the API call <code>GetRateBasedStatementManagedKeys</code>. This option is not available for other aggregation configurations.</p> <p>WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by WAF. If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by WAF. </p> */
	export interface RateBasedStatement {

		/** Required */
		Limit: number;

		/** Required */
		AggregateKeyType: RateBasedStatementAggregateKeyType;
		ScopeDownStatement?: Statement;
		ForwardedIPConfig?: ForwardedIPConfig;
		CustomKeys?: Array<RateBasedStatementCustomKey>;
	}

	/** <p>A rate-based rule counts incoming requests and rate limits requests when they are coming at too fast a rate. The rule categorizes requests according to your aggregation criteria, collects them into aggregation instances, and counts and rate limits the requests for each instance. </p> <p>You can specify individual aggregation keys, like IP address or HTTP method. You can also specify aggregation key combinations, like IP address and HTTP method, or HTTP method, query argument, and cookie. </p> <p>Each unique set of values for the aggregation keys that you specify is a separate aggregation instance, with the value from each key contributing to the aggregation instance definition. </p> <p>For example, assume the rule evaluates web requests with the following IP address and HTTP method values: </p> <ul> <li> <p>IP address 10.1.1.1, HTTP method POST</p> </li> <li> <p>IP address 10.1.1.1, HTTP method GET</p> </li> <li> <p>IP address 127.0.0.0, HTTP method POST</p> </li> <li> <p>IP address 10.1.1.1, HTTP method GET</p> </li> </ul> <p>The rule would create different aggregation instances according to your aggregation criteria, for example: </p> <ul> <li> <p>If the aggregation criteria is just the IP address, then each individual address is an aggregation instance, and WAF counts requests separately for each. The aggregation instances and request counts for our example would be the following: </p> <ul> <li> <p>IP address 10.1.1.1: count 3</p> </li> <li> <p>IP address 127.0.0.0: count 1</p> </li> </ul> </li> <li> <p>If the aggregation criteria is HTTP method, then each individual HTTP method is an aggregation instance. The aggregation instances and request counts for our example would be the following: </p> <ul> <li> <p>HTTP method POST: count 2</p> </li> <li> <p>HTTP method GET: count 2</p> </li> </ul> </li> <li> <p>If the aggregation criteria is IP address and HTTP method, then each IP address and each HTTP method would contribute to the combined aggregation instance. The aggregation instances and request counts for our example would be the following: </p> <ul> <li> <p>IP address 10.1.1.1, HTTP method POST: count 1</p> </li> <li> <p>IP address 10.1.1.1, HTTP method GET: count 2</p> </li> <li> <p>IP address 127.0.0.0, HTTP method POST: count 1</p> </li> </ul> </li> </ul> <p>For any n-tuple of aggregation keys, each unique combination of values for the keys defines a separate aggregation instance, which WAF counts and rate-limits individually. </p> <p>You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts and rate limits requests that match the nested statement. You can use this nested scope-down statement in conjunction with your aggregation key specifications or you can just count and rate limit all requests that match the scope-down statement, without additional aggregation. When you choose to just manage all requests that match a scope-down statement, the aggregation instance is singular for the rule. </p> <p>You cannot nest a <code>RateBasedStatement</code> inside another statement, for example inside a <code>NotStatement</code> or <code>OrStatement</code>. You can define a <code>RateBasedStatement</code> inside a web ACL and inside a rule group. </p> <p>For additional information about the options, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rate-based-rules.html">Rate limiting web requests using rate-based rules</a> in the <i>WAF Developer Guide</i>. </p> <p>If you only aggregate on the individual IP address or forwarded IP address, you can retrieve the list of IP addresses that WAF is currently rate limiting for a rule through the API call <code>GetRateBasedStatementManagedKeys</code>. This option is not available for other aggregation configurations.</p> <p>WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by WAF. If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by WAF. </p> */
	export interface RateBasedStatementFormProperties {

		/** Required */
		Limit: FormControl<number | null | undefined>,

		/** Required */
		AggregateKeyType: FormControl<RateBasedStatementAggregateKeyType | null | undefined>,
	}
	export function CreateRateBasedStatementFormGroup() {
		return new FormGroup<RateBasedStatementFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			AggregateKeyType: new FormControl<RateBasedStatementAggregateKeyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RateBasedStatementAggregateKeyType { IP = 0, FORWARDED_IP = 1, CUSTOM_KEYS = 2, CONSTANT = 3 }


	/** <p>Specifies a single custom aggregate key for a rate-base rule. </p> <note> <p>Web requests that are missing any of the components specified in the aggregation keys are omitted from the rate-based rule evaluation and handling. </p> </note> */
	export interface RateBasedStatementCustomKey {
		Header?: RateLimitHeader;
		Cookie?: RateLimitCookie;
		QueryArgument?: RateLimitQueryArgument;
		QueryString?: RateLimitQueryString;
		HTTPMethod?: RateLimitHTTPMethod;
		ForwardedIP?: RateLimitForwardedIP;
		IP?: RateLimitIP;
		LabelNamespace?: RateLimitLabelNamespace;
		UriPath?: RateLimitUriPath;
	}

	/** <p>Specifies a single custom aggregate key for a rate-base rule. </p> <note> <p>Web requests that are missing any of the components specified in the aggregation keys are omitted from the rate-based rule evaluation and handling. </p> </note> */
	export interface RateBasedStatementCustomKeyFormProperties {
	}
	export function CreateRateBasedStatementCustomKeyFormGroup() {
		return new FormGroup<RateBasedStatementCustomKeyFormProperties>({
		});

	}


	/** Specifies a header as an aggregate key for a rate-based rule. Each distinct value in the header contributes to the aggregation instance. If you use a single header as your custom key, then each value fully defines an aggregation instance.  */
	export interface RateLimitHeader {

		/** Required */
		Name: string;

		/** Required */
		TextTransformations: Array<TextTransformation>;
	}

	/** Specifies a header as an aggregate key for a rate-based rule. Each distinct value in the header contributes to the aggregation instance. If you use a single header as your custom key, then each value fully defines an aggregation instance.  */
	export interface RateLimitHeaderFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRateLimitHeaderFormGroup() {
		return new FormGroup<RateLimitHeaderFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a cookie as an aggregate key for a rate-based rule. Each distinct value in the cookie contributes to the aggregation instance. If you use a single cookie as your custom key, then each value fully defines an aggregation instance.  */
	export interface RateLimitCookie {

		/** Required */
		Name: string;

		/** Required */
		TextTransformations: Array<TextTransformation>;
	}

	/** Specifies a cookie as an aggregate key for a rate-based rule. Each distinct value in the cookie contributes to the aggregation instance. If you use a single cookie as your custom key, then each value fully defines an aggregation instance.  */
	export interface RateLimitCookieFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRateLimitCookieFormGroup() {
		return new FormGroup<RateLimitCookieFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a query argument in the request as an aggregate key for a rate-based rule. Each distinct value for the named query argument contributes to the aggregation instance. If you use a single query argument as your custom key, then each value fully defines an aggregation instance.  */
	export interface RateLimitQueryArgument {

		/** Required */
		Name: string;

		/** Required */
		TextTransformations: Array<TextTransformation>;
	}

	/** Specifies a query argument in the request as an aggregate key for a rate-based rule. Each distinct value for the named query argument contributes to the aggregation instance. If you use a single query argument as your custom key, then each value fully defines an aggregation instance.  */
	export interface RateLimitQueryArgumentFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRateLimitQueryArgumentFormGroup() {
		return new FormGroup<RateLimitQueryArgumentFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the request's query string as an aggregate key for a rate-based rule. Each distinct string contributes to the aggregation instance. If you use just the query string as your custom key, then each string fully defines an aggregation instance.  */
	export interface RateLimitQueryString {

		/** Required */
		TextTransformations: Array<TextTransformation>;
	}

	/** Specifies the request's query string as an aggregate key for a rate-based rule. Each distinct string contributes to the aggregation instance. If you use just the query string as your custom key, then each string fully defines an aggregation instance.  */
	export interface RateLimitQueryStringFormProperties {
	}
	export function CreateRateLimitQueryStringFormGroup() {
		return new FormGroup<RateLimitQueryStringFormProperties>({
		});

	}


	/** <p>Specifies the request's HTTP method as an aggregate key for a rate-based rule. Each distinct HTTP method contributes to the aggregation instance. If you use just the HTTP method as your custom key, then each method fully defines an aggregation instance. </p> <p>JSON specification: <code>"RateLimitHTTPMethod": {}</code> </p> */
	export interface RateLimitHTTPMethod {
	}

	/** <p>Specifies the request's HTTP method as an aggregate key for a rate-based rule. Each distinct HTTP method contributes to the aggregation instance. If you use just the HTTP method as your custom key, then each method fully defines an aggregation instance. </p> <p>JSON specification: <code>"RateLimitHTTPMethod": {}</code> </p> */
	export interface RateLimitHTTPMethodFormProperties {
	}
	export function CreateRateLimitHTTPMethodFormGroup() {
		return new FormGroup<RateLimitHTTPMethodFormProperties>({
		});

	}


	/** <p>Specifies the first IP address in an HTTP header as an aggregate key for a rate-based rule. Each distinct forwarded IP address contributes to the aggregation instance.</p> <p>This setting is used only in the <code>RateBasedStatementCustomKey</code> specification of a rate-based rule statement. When you specify an IP or forwarded IP in the custom key settings, you must also specify at least one other key to use. You can aggregate on only the forwarded IP address by specifying <code>FORWARDED_IP</code> in your rate-based statement's <code>AggregateKeyType</code>. </p> <p>This data type supports using the forwarded IP address in the web request aggregation for a rate-based rule, in <code>RateBasedStatementCustomKey</code>. The JSON specification for using the forwarded IP address doesn't explicitly use this data type. </p> <p>JSON specification: <code>"ForwardedIP": {}</code> </p> <p>When you use this specification, you must also configure the forwarded IP address in the rate-based statement's <code>ForwardedIPConfig</code>. </p> */
	export interface RateLimitForwardedIP {
	}

	/** <p>Specifies the first IP address in an HTTP header as an aggregate key for a rate-based rule. Each distinct forwarded IP address contributes to the aggregation instance.</p> <p>This setting is used only in the <code>RateBasedStatementCustomKey</code> specification of a rate-based rule statement. When you specify an IP or forwarded IP in the custom key settings, you must also specify at least one other key to use. You can aggregate on only the forwarded IP address by specifying <code>FORWARDED_IP</code> in your rate-based statement's <code>AggregateKeyType</code>. </p> <p>This data type supports using the forwarded IP address in the web request aggregation for a rate-based rule, in <code>RateBasedStatementCustomKey</code>. The JSON specification for using the forwarded IP address doesn't explicitly use this data type. </p> <p>JSON specification: <code>"ForwardedIP": {}</code> </p> <p>When you use this specification, you must also configure the forwarded IP address in the rate-based statement's <code>ForwardedIPConfig</code>. </p> */
	export interface RateLimitForwardedIPFormProperties {
	}
	export function CreateRateLimitForwardedIPFormGroup() {
		return new FormGroup<RateLimitForwardedIPFormProperties>({
		});

	}


	/** <p>Specifies the IP address in the web request as an aggregate key for a rate-based rule. Each distinct IP address contributes to the aggregation instance. </p> <p>This setting is used only in the <code>RateBasedStatementCustomKey</code> specification of a rate-based rule statement. To use this in the custom key settings, you must specify at least one other key to use, along with the IP address. To aggregate on only the IP address, in your rate-based statement's <code>AggregateKeyType</code>, specify <code>IP</code>.</p> <p>JSON specification: <code>"RateLimitIP": {}</code> </p> */
	export interface RateLimitIP {
	}

	/** <p>Specifies the IP address in the web request as an aggregate key for a rate-based rule. Each distinct IP address contributes to the aggregation instance. </p> <p>This setting is used only in the <code>RateBasedStatementCustomKey</code> specification of a rate-based rule statement. To use this in the custom key settings, you must specify at least one other key to use, along with the IP address. To aggregate on only the IP address, in your rate-based statement's <code>AggregateKeyType</code>, specify <code>IP</code>.</p> <p>JSON specification: <code>"RateLimitIP": {}</code> </p> */
	export interface RateLimitIPFormProperties {
	}
	export function CreateRateLimitIPFormGroup() {
		return new FormGroup<RateLimitIPFormProperties>({
		});

	}


	/** <p>Specifies a label namespace to use as an aggregate key for a rate-based rule. Each distinct fully qualified label name that has the specified label namespace contributes to the aggregation instance. If you use just one label namespace as your custom key, then each label name fully defines an aggregation instance. </p> <p>This uses only labels that have been added to the request by rules that are evaluated before this rate-based rule in the web ACL. </p> <p>For information about label namespaces and names, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-label-requirements.html">Label syntax and naming requirements</a> in the <i>WAF Developer Guide</i>.</p> */
	export interface RateLimitLabelNamespace {

		/** Required */
		Namespace: string;
	}

	/** <p>Specifies a label namespace to use as an aggregate key for a rate-based rule. Each distinct fully qualified label name that has the specified label namespace contributes to the aggregation instance. If you use just one label namespace as your custom key, then each label name fully defines an aggregation instance. </p> <p>This uses only labels that have been added to the request by rules that are evaluated before this rate-based rule in the web ACL. </p> <p>For information about label namespaces and names, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-label-requirements.html">Label syntax and naming requirements</a> in the <i>WAF Developer Guide</i>.</p> */
	export interface RateLimitLabelNamespaceFormProperties {

		/** Required */
		Namespace: FormControl<string | null | undefined>,
	}
	export function CreateRateLimitLabelNamespaceFormGroup() {
		return new FormGroup<RateLimitLabelNamespaceFormProperties>({
			Namespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the request's URI path as an aggregate key for a rate-based rule. Each distinct URI path contributes to the aggregation instance. If you use just the URI path as your custom key, then each URI path fully defines an aggregation instance.  */
	export interface RateLimitUriPath {

		/** Required */
		TextTransformations: Array<TextTransformation>;
	}

	/** Specifies the request's URI path as an aggregate key for a rate-based rule. Each distinct URI path contributes to the aggregation instance. If you use just the URI path as your custom key, then each URI path fully defines an aggregation instance.  */
	export interface RateLimitUriPathFormProperties {
	}
	export function CreateRateLimitUriPathFormGroup() {
		return new FormGroup<RateLimitUriPathFormProperties>({
		});

	}


	/** A logical rule statement used to combine other rule statements with AND logic. You provide more than one <a>Statement</a> within the <code>AndStatement</code>.  */
	export interface AndStatement {

		/** Required */
		Statements: Array<Statement>;
	}

	/** A logical rule statement used to combine other rule statements with AND logic. You provide more than one <a>Statement</a> within the <code>AndStatement</code>.  */
	export interface AndStatementFormProperties {
	}
	export function CreateAndStatementFormGroup() {
		return new FormGroup<AndStatementFormProperties>({
		});

	}


	/** A logical rule statement used to combine other rule statements with OR logic. You provide more than one <a>Statement</a> within the <code>OrStatement</code>.  */
	export interface OrStatement {

		/** Required */
		Statements: Array<Statement>;
	}

	/** A logical rule statement used to combine other rule statements with OR logic. You provide more than one <a>Statement</a> within the <code>OrStatement</code>.  */
	export interface OrStatementFormProperties {
	}
	export function CreateOrStatementFormGroup() {
		return new FormGroup<OrStatementFormProperties>({
		});

	}


	/** A logical rule statement used to negate the results of another rule statement. You provide one <a>Statement</a> within the <code>NotStatement</code>. */
	export interface NotStatement {

		/** Required */
		Statement: Statement;
	}

	/** A logical rule statement used to negate the results of another rule statement. You provide one <a>Statement</a> within the <code>NotStatement</code>. */
	export interface NotStatementFormProperties {
	}
	export function CreateNotStatementFormGroup() {
		return new FormGroup<NotStatementFormProperties>({
		});

	}


	/** <p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p> <p>You cannot nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p> <note> <p>You are charged additional fees when you use the WAF Bot Control managed rule group <code>AWSManagedRulesBotControlRuleSet</code>, the WAF Fraud Control account takeover prevention (ATP) managed rule group <code>AWSManagedRulesATPRuleSet</code>, or the WAF Fraud Control account creation fraud prevention (ACFP) managed rule group <code>AWSManagedRulesACFPRuleSet</code>. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note> */
	export interface ManagedRuleGroupStatement {

		/** Required */
		VendorName: string;

		/** Required */
		Name: string;
		Version?: string;
		ExcludedRules?: Array<ExcludedRule>;
		ScopeDownStatement?: Statement;
		ManagedRuleGroupConfigs?: Array<ManagedRuleGroupConfig>;
		RuleActionOverrides?: Array<RuleActionOverride>;
	}

	/** <p>A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names by calling <a>ListAvailableManagedRuleGroups</a>.</p> <p>You cannot nest a <code>ManagedRuleGroupStatement</code>, for example for use inside a <code>NotStatement</code> or <code>OrStatement</code>. It can only be referenced as a top-level statement within a rule.</p> <note> <p>You are charged additional fees when you use the WAF Bot Control managed rule group <code>AWSManagedRulesBotControlRuleSet</code>, the WAF Fraud Control account takeover prevention (ATP) managed rule group <code>AWSManagedRulesATPRuleSet</code>, or the WAF Fraud Control account creation fraud prevention (ACFP) managed rule group <code>AWSManagedRulesACFPRuleSet</code>. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note> */
	export interface ManagedRuleGroupStatementFormProperties {

		/** Required */
		VendorName: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateManagedRuleGroupStatementFormGroup() {
		return new FormGroup<ManagedRuleGroupStatementFormProperties>({
			VendorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Additional information that's used by a managed rule group. Many managed rule groups don't require this.</p> <p>The rule groups used for intelligent threat mitigation require additional configuration: </p> <ul> <li> <p>Use the <code>AWSManagedRulesACFPRuleSet</code> configuration object to configure the account creation fraud prevention managed rule group. The configuration includes the registration and sign-up pages of your application and the locations in the account creation request payload of data, such as the user email and phone number fields. </p> </li> <li> <p>Use the <code>AWSManagedRulesATPRuleSet</code> configuration object to configure the account takeover prevention managed rule group. The configuration includes the sign-in page of your application and the locations in the login request payload of data such as the username and password. </p> </li> <li> <p>Use the <code>AWSManagedRulesBotControlRuleSet</code> configuration object to configure the protection level that you want the Bot Control rule group to use. </p> </li> </ul> <p>For example specifications, see the examples section of <a>CreateWebACL</a>.</p> */
	export interface ManagedRuleGroupConfig {
		LoginPath?: string;
		PayloadType?: PayloadType;
		UsernameField?: UsernameField;
		PasswordField?: PasswordField;
		AWSManagedRulesBotControlRuleSet?: AWSManagedRulesBotControlRuleSet;
		AWSManagedRulesATPRuleSet?: AWSManagedRulesATPRuleSet;
		AWSManagedRulesACFPRuleSet?: AWSManagedRulesACFPRuleSet;
	}

	/** <p>Additional information that's used by a managed rule group. Many managed rule groups don't require this.</p> <p>The rule groups used for intelligent threat mitigation require additional configuration: </p> <ul> <li> <p>Use the <code>AWSManagedRulesACFPRuleSet</code> configuration object to configure the account creation fraud prevention managed rule group. The configuration includes the registration and sign-up pages of your application and the locations in the account creation request payload of data, such as the user email and phone number fields. </p> </li> <li> <p>Use the <code>AWSManagedRulesATPRuleSet</code> configuration object to configure the account takeover prevention managed rule group. The configuration includes the sign-in page of your application and the locations in the login request payload of data such as the username and password. </p> </li> <li> <p>Use the <code>AWSManagedRulesBotControlRuleSet</code> configuration object to configure the protection level that you want the Bot Control rule group to use. </p> </li> </ul> <p>For example specifications, see the examples section of <a>CreateWebACL</a>.</p> */
	export interface ManagedRuleGroupConfigFormProperties {
		LoginPath: FormControl<string | null | undefined>,
		PayloadType: FormControl<PayloadType | null | undefined>,
	}
	export function CreateManagedRuleGroupConfigFormGroup() {
		return new FormGroup<ManagedRuleGroupConfigFormProperties>({
			LoginPath: new FormControl<string | null | undefined>(undefined),
			PayloadType: new FormControl<PayloadType | null | undefined>(undefined),
		});

	}

	export enum PayloadType { JSON = 0, FORM_ENCODED = 1 }


	/** <p>The name of the field in the request payload that contains your customer's username. </p> <p>This data type is used in the <code>RequestInspection</code> and <code>RequestInspectionACFP</code> data types. </p> */
	export interface UsernameField {

		/** Required */
		Identifier: string;
	}

	/** <p>The name of the field in the request payload that contains your customer's username. </p> <p>This data type is used in the <code>RequestInspection</code> and <code>RequestInspectionACFP</code> data types. </p> */
	export interface UsernameFieldFormProperties {

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateUsernameFieldFormGroup() {
		return new FormGroup<UsernameFieldFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The name of the field in the request payload that contains your customer's password. </p> <p>This data type is used in the <code>RequestInspection</code> and <code>RequestInspectionACFP</code> data types. </p> */
	export interface PasswordField {

		/** Required */
		Identifier: string;
	}

	/** <p>The name of the field in the request payload that contains your customer's password. </p> <p>This data type is used in the <code>RequestInspection</code> and <code>RequestInspectionACFP</code> data types. </p> */
	export interface PasswordFieldFormProperties {

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreatePasswordFieldFormGroup() {
		return new FormGroup<PasswordFieldFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details for your use of the Bot Control managed rule group, <code>AWSManagedRulesBotControlRuleSet</code>. This configuration is used in <code>ManagedRuleGroupConfig</code>.  */
	export interface AWSManagedRulesBotControlRuleSet {

		/** Required */
		InspectionLevel: InspectionLevel;
	}

	/** Details for your use of the Bot Control managed rule group, <code>AWSManagedRulesBotControlRuleSet</code>. This configuration is used in <code>ManagedRuleGroupConfig</code>.  */
	export interface AWSManagedRulesBotControlRuleSetFormProperties {

		/** Required */
		InspectionLevel: FormControl<InspectionLevel | null | undefined>,
	}
	export function CreateAWSManagedRulesBotControlRuleSetFormGroup() {
		return new FormGroup<AWSManagedRulesBotControlRuleSetFormProperties>({
			InspectionLevel: new FormControl<InspectionLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InspectionLevel { COMMON = 0, TARGETED = 1 }


	/** Details for your use of the account takeover prevention managed rule group, <code>AWSManagedRulesATPRuleSet</code>. This configuration is used in <code>ManagedRuleGroupConfig</code>.  */
	export interface AWSManagedRulesATPRuleSet {

		/** Required */
		LoginPath: string;
		RequestInspection?: RequestInspection;
		ResponseInspection?: ResponseInspection;
		EnableRegexInPath?: boolean | null;
	}

	/** Details for your use of the account takeover prevention managed rule group, <code>AWSManagedRulesATPRuleSet</code>. This configuration is used in <code>ManagedRuleGroupConfig</code>.  */
	export interface AWSManagedRulesATPRuleSetFormProperties {

		/** Required */
		LoginPath: FormControl<string | null | undefined>,
		EnableRegexInPath: FormControl<boolean | null | undefined>,
	}
	export function CreateAWSManagedRulesATPRuleSetFormGroup() {
		return new FormGroup<AWSManagedRulesATPRuleSetFormProperties>({
			LoginPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnableRegexInPath: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage. </p> <p>This is part of the <code>AWSManagedRulesATPRuleSet</code> configuration in <code>ManagedRuleGroupConfig</code>.</p> <p>In these settings, you specify how your application accepts login attempts by providing the request payload type and the names of the fields within the request body where the username and password are provided. </p> */
	export interface RequestInspection {

		/** Required */
		PayloadType: PayloadType;

		/** Required */
		UsernameField: UsernameField;

		/** Required */
		PasswordField: PasswordField;
	}

	/** <p>The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage. </p> <p>This is part of the <code>AWSManagedRulesATPRuleSet</code> configuration in <code>ManagedRuleGroupConfig</code>.</p> <p>In these settings, you specify how your application accepts login attempts by providing the request payload type and the names of the fields within the request body where the username and password are provided. </p> */
	export interface RequestInspectionFormProperties {

		/** Required */
		PayloadType: FormControl<PayloadType | null | undefined>,
	}
	export function CreateRequestInspectionFormGroup() {
		return new FormGroup<RequestInspectionFormProperties>({
			PayloadType: new FormControl<PayloadType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The criteria for inspecting responses to login requests and account creation requests, used by the ATP and ACFP rule groups to track login and account creation success and failure rates. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note> <p>The rule groups evaluates the responses that your protected resources send back to client login and account creation attempts, keeping count of successful and failed attempts from each IP address and client session. Using this information, the rule group labels and mitigates requests from client sessions and IP addresses with too much suspicious activity in a short amount of time. </p> <p>This is part of the <code>AWSManagedRulesATPRuleSet</code> and <code>AWSManagedRulesACFPRuleSet</code> configurations in <code>ManagedRuleGroupConfig</code>.</p> <p>Enable response inspection by configuring exactly one component of the response to inspect, for example, <code>Header</code> or <code>StatusCode</code>. You can't configure more than one component for inspection. If you don't configure any of the response inspection options, response inspection is disabled. </p> */
	export interface ResponseInspection {
		StatusCode?: ResponseInspectionStatusCode;
		Header?: ResponseInspectionHeader;
		BodyContains?: ResponseInspectionBodyContains;
		Json?: ResponseInspectionJson;
	}

	/** <p>The criteria for inspecting responses to login requests and account creation requests, used by the ATP and ACFP rule groups to track login and account creation success and failure rates. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note> <p>The rule groups evaluates the responses that your protected resources send back to client login and account creation attempts, keeping count of successful and failed attempts from each IP address and client session. Using this information, the rule group labels and mitigates requests from client sessions and IP addresses with too much suspicious activity in a short amount of time. </p> <p>This is part of the <code>AWSManagedRulesATPRuleSet</code> and <code>AWSManagedRulesACFPRuleSet</code> configurations in <code>ManagedRuleGroupConfig</code>.</p> <p>Enable response inspection by configuring exactly one component of the response to inspect, for example, <code>Header</code> or <code>StatusCode</code>. You can't configure more than one component for inspection. If you don't configure any of the response inspection options, response inspection is disabled. </p> */
	export interface ResponseInspectionFormProperties {
	}
	export function CreateResponseInspectionFormGroup() {
		return new FormGroup<ResponseInspectionFormProperties>({
		});

	}


	/** <p>Configures inspection of the response status code. This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code> and <code>AWSManagedRulesACFPRuleSet</code>. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note> */
	export interface ResponseInspectionStatusCode {

		/** Required */
		SuccessCodes: Array<number>;

		/** Required */
		FailureCodes: Array<number>;
	}

	/** <p>Configures inspection of the response status code. This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code> and <code>AWSManagedRulesACFPRuleSet</code>. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note> */
	export interface ResponseInspectionStatusCodeFormProperties {
	}
	export function CreateResponseInspectionStatusCodeFormGroup() {
		return new FormGroup<ResponseInspectionStatusCodeFormProperties>({
		});

	}


	/** <p>Configures inspection of the response header. This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code> and <code>AWSManagedRulesACFPRuleSet</code>. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note> */
	export interface ResponseInspectionHeader {

		/** Required */
		Name: string;

		/** Required */
		SuccessValues: Array<string>;

		/** Required */
		FailureValues: Array<string>;
	}

	/** <p>Configures inspection of the response header. This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code> and <code>AWSManagedRulesACFPRuleSet</code>. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note> */
	export interface ResponseInspectionHeaderFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateResponseInspectionHeaderFormGroup() {
		return new FormGroup<ResponseInspectionHeaderFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Configures inspection of the response body. WAF can inspect the first 65,536 bytes (64 KB) of the response body. This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code> and <code>AWSManagedRulesACFPRuleSet</code>. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note> */
	export interface ResponseInspectionBodyContains {

		/** Required */
		SuccessStrings: Array<string>;

		/** Required */
		FailureStrings: Array<string>;
	}

	/** <p>Configures inspection of the response body. WAF can inspect the first 65,536 bytes (64 KB) of the response body. This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code> and <code>AWSManagedRulesACFPRuleSet</code>. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note> */
	export interface ResponseInspectionBodyContainsFormProperties {
	}
	export function CreateResponseInspectionBodyContainsFormGroup() {
		return new FormGroup<ResponseInspectionBodyContainsFormProperties>({
		});

	}


	/** <p>Configures inspection of the response JSON. WAF can inspect the first 65,536 bytes (64 KB) of the response JSON. This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code> and <code>AWSManagedRulesACFPRuleSet</code>. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note> */
	export interface ResponseInspectionJson {

		/** Required */
		Identifier: string;

		/** Required */
		SuccessValues: Array<string>;

		/** Required */
		FailureValues: Array<string>;
	}

	/** <p>Configures inspection of the response JSON. WAF can inspect the first 65,536 bytes (64 KB) of the response JSON. This is part of the <code>ResponseInspection</code> configuration for <code>AWSManagedRulesATPRuleSet</code> and <code>AWSManagedRulesACFPRuleSet</code>. </p> <note> <p>Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.</p> </note> */
	export interface ResponseInspectionJsonFormProperties {

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateResponseInspectionJsonFormGroup() {
		return new FormGroup<ResponseInspectionJsonFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details for your use of the account creation fraud prevention managed rule group, <code>AWSManagedRulesACFPRuleSet</code>. This configuration is used in <code>ManagedRuleGroupConfig</code>.  */
	export interface AWSManagedRulesACFPRuleSet {

		/** Required */
		CreationPath: string;

		/** Required */
		RegistrationPagePath: string;

		/** Required */
		RequestInspection: RequestInspectionACFP;
		ResponseInspection?: ResponseInspection;
		EnableRegexInPath?: boolean | null;
	}

	/** Details for your use of the account creation fraud prevention managed rule group, <code>AWSManagedRulesACFPRuleSet</code>. This configuration is used in <code>ManagedRuleGroupConfig</code>.  */
	export interface AWSManagedRulesACFPRuleSetFormProperties {

		/** Required */
		CreationPath: FormControl<string | null | undefined>,

		/** Required */
		RegistrationPagePath: FormControl<string | null | undefined>,
		EnableRegexInPath: FormControl<boolean | null | undefined>,
	}
	export function CreateAWSManagedRulesACFPRuleSetFormGroup() {
		return new FormGroup<AWSManagedRulesACFPRuleSetFormProperties>({
			CreationPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RegistrationPagePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnableRegexInPath: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>The criteria for inspecting account creation requests, used by the ACFP rule group to validate and track account creation attempts. </p> <p>This is part of the <code>AWSManagedRulesACFPRuleSet</code> configuration in <code>ManagedRuleGroupConfig</code>.</p> <p>In these settings, you specify how your application accepts account creation attempts by providing the request payload type and the names of the fields within the request body where the username, password, email, and primary address and phone number fields are provided. </p> */
	export interface RequestInspectionACFP {

		/** Required */
		PayloadType: PayloadType;
		UsernameField?: UsernameField;
		PasswordField?: PasswordField;
		EmailField?: EmailField;
		PhoneNumberFields?: Array<PhoneNumberField>;
		AddressFields?: Array<AddressField>;
	}

	/** <p>The criteria for inspecting account creation requests, used by the ACFP rule group to validate and track account creation attempts. </p> <p>This is part of the <code>AWSManagedRulesACFPRuleSet</code> configuration in <code>ManagedRuleGroupConfig</code>.</p> <p>In these settings, you specify how your application accepts account creation attempts by providing the request payload type and the names of the fields within the request body where the username, password, email, and primary address and phone number fields are provided. </p> */
	export interface RequestInspectionACFPFormProperties {

		/** Required */
		PayloadType: FormControl<PayloadType | null | undefined>,
	}
	export function CreateRequestInspectionACFPFormGroup() {
		return new FormGroup<RequestInspectionACFPFormProperties>({
			PayloadType: new FormControl<PayloadType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The name of the field in the request payload that contains your customer's email. </p> <p>This data type is used in the <code>RequestInspectionACFP</code> data type. </p> */
	export interface EmailField {

		/** Required */
		Identifier: string;
	}

	/** <p>The name of the field in the request payload that contains your customer's email. </p> <p>This data type is used in the <code>RequestInspectionACFP</code> data type. </p> */
	export interface EmailFieldFormProperties {

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateEmailFieldFormGroup() {
		return new FormGroup<EmailFieldFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The name of a field in the request payload that contains part or all of your customer's primary phone number. </p> <p>This data type is used in the <code>RequestInspectionACFP</code> data type. </p> */
	export interface PhoneNumberField {

		/** Required */
		Identifier: string;
	}

	/** <p>The name of a field in the request payload that contains part or all of your customer's primary phone number. </p> <p>This data type is used in the <code>RequestInspectionACFP</code> data type. </p> */
	export interface PhoneNumberFieldFormProperties {

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumberFieldFormGroup() {
		return new FormGroup<PhoneNumberFieldFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The name of a field in the request payload that contains part or all of your customer's primary physical address. </p> <p>This data type is used in the <code>RequestInspectionACFP</code> data type. </p> */
	export interface AddressField {

		/** Required */
		Identifier: string;
	}

	/** <p>The name of a field in the request payload that contains part or all of your customer's primary physical address. </p> <p>This data type is used in the <code>RequestInspectionACFP</code> data type. </p> */
	export interface AddressFieldFormProperties {

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateAddressFieldFormGroup() {
		return new FormGroup<AddressFieldFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL. </p> <p>The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, WAF performs the search for labels that were added in the same context as the label match statement. </p> */
	export interface LabelMatchStatement {

		/** Required */
		Scope: LabelMatchScope;

		/** Required */
		Key: string;
	}

	/** <p>A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL. </p> <p>The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, WAF performs the search for labels that were added in the same context as the label match statement. </p> */
	export interface LabelMatchStatementFormProperties {

		/** Required */
		Scope: FormControl<LabelMatchScope | null | undefined>,

		/** Required */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateLabelMatchStatementFormGroup() {
		return new FormGroup<LabelMatchStatementFormProperties>({
			Scope: new FormControl<LabelMatchScope | null | undefined>(undefined, [Validators.required]),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LabelMatchScope { LABEL = 0, NAMESPACE = 1 }


	/** A rule statement used to search web request components for a match against a single regular expression.  */
	export interface RegexMatchStatement {

		/** Required */
		RegexString: string;

		/** Required */
		FieldToMatch: FieldToMatch;

		/** Required */
		TextTransformations: Array<TextTransformation>;
	}

	/** A rule statement used to search web request components for a match against a single regular expression.  */
	export interface RegexMatchStatementFormProperties {

		/** Required */
		RegexString: FormControl<string | null | undefined>,
	}
	export function CreateRegexMatchStatementFormGroup() {
		return new FormGroup<RegexMatchStatementFormProperties>({
			RegexString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The action to use in the place of the action that results from the rule group evaluation. Set the override action to none to leave the result of the rule group alone. Set it to count to override the result to count only. </p> <p>You can only use this for rule statements that reference a rule group, like <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p> <note> <p>This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count matches, do not use this and instead use the rule action override option, with <code>Count</code> action, in your rule group reference statement settings. </p> </note> */
	export interface OverrideAction {
		Count?: CountAction;
		None?: NoneAction;
	}

	/** <p>The action to use in the place of the action that results from the rule group evaluation. Set the override action to none to leave the result of the rule group alone. Set it to count to override the result to count only. </p> <p>You can only use this for rule statements that reference a rule group, like <code>RuleGroupReferenceStatement</code> and <code>ManagedRuleGroupStatement</code>. </p> <note> <p>This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count matches, do not use this and instead use the rule action override option, with <code>Count</code> action, in your rule group reference statement settings. </p> </note> */
	export interface OverrideActionFormProperties {
	}
	export function CreateOverrideActionFormGroup() {
		return new FormGroup<OverrideActionFormProperties>({
		});

	}


	/** <p>Specifies that WAF should do nothing. This is used for the <code>OverrideAction</code> setting on a <a>Rule</a> when the rule uses a rule group reference statement. </p> <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> <p>JSON specification: <code>"None": {}</code> </p> */
	export interface NoneAction {
	}

	/** <p>Specifies that WAF should do nothing. This is used for the <code>OverrideAction</code> setting on a <a>Rule</a> when the rule uses a rule group reference statement. </p> <p>This is used in the context of other settings, for example to specify values for <a>RuleAction</a> and web ACL <a>DefaultAction</a>. </p> <p>JSON specification: <code>"None": {}</code> </p> */
	export interface NoneActionFormProperties {
	}
	export function CreateNoneActionFormGroup() {
		return new FormGroup<NoneActionFormProperties>({
		});

	}


	/** A single label container. This is used as an element of a label array in multiple contexts, for example, in <code>RuleLabels</code> inside a <a>Rule</a> and in <code>Labels</code> inside a <a>SampledHTTPRequest</a>.  */
	export interface Label {

		/** Required */
		Name: string;
	}

	/** A single label container. This is used as an element of a label array in multiple contexts, for example, in <code>RuleLabels</code> inside a <a>Rule</a> and in <code>Labels</code> inside a <a>SampledHTTPRequest</a>.  */
	export interface LabelFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateLabelFormGroup() {
		return new FormGroup<LabelFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines and enables Amazon CloudWatch metrics and web request sample collection.  */
	export interface VisibilityConfig {

		/** Required */
		SampledRequestsEnabled: boolean;

		/** Required */
		CloudWatchMetricsEnabled: boolean;

		/** Required */
		MetricName: string;
	}

	/** Defines and enables Amazon CloudWatch metrics and web request sample collection.  */
	export interface VisibilityConfigFormProperties {

		/** Required */
		SampledRequestsEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		CloudWatchMetricsEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		MetricName: FormControl<string | null | undefined>,
	}
	export function CreateVisibilityConfigFormGroup() {
		return new FormGroup<VisibilityConfigFormProperties>({
			SampledRequestsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			CloudWatchMetricsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies how WAF should handle <code>CAPTCHA</code> evaluations. This is available at the web ACL level and in each rule.  */
	export interface CaptchaConfig {
		ImmunityTimeProperty?: ImmunityTimeProperty;
	}

	/** Specifies how WAF should handle <code>CAPTCHA</code> evaluations. This is available at the web ACL level and in each rule.  */
	export interface CaptchaConfigFormProperties {
	}
	export function CreateCaptchaConfigFormGroup() {
		return new FormGroup<CaptchaConfigFormProperties>({
		});

	}


	/** Used for CAPTCHA and challenge token settings. Determines how long a <code>CAPTCHA</code> or challenge timestamp remains valid after WAF updates it for a successful <code>CAPTCHA</code> or challenge response.  */
	export interface ImmunityTimeProperty {

		/** Required */
		ImmunityTime: number;
	}

	/** Used for CAPTCHA and challenge token settings. Determines how long a <code>CAPTCHA</code> or challenge timestamp remains valid after WAF updates it for a successful <code>CAPTCHA</code> or challenge response.  */
	export interface ImmunityTimePropertyFormProperties {

		/** Required */
		ImmunityTime: FormControl<number | null | undefined>,
	}
	export function CreateImmunityTimePropertyFormGroup() {
		return new FormGroup<ImmunityTimePropertyFormProperties>({
			ImmunityTime: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies how WAF should handle <code>Challenge</code> evaluations. This is available at the web ACL level and in each rule.  */
	export interface ChallengeConfig {
		ImmunityTimeProperty?: ImmunityTimeProperty;
	}

	/** Specifies how WAF should handle <code>Challenge</code> evaluations. This is available at the web ACL level and in each rule.  */
	export interface ChallengeConfigFormProperties {
	}
	export function CreateChallengeConfigFormGroup() {
		return new FormGroup<ChallengeConfigFormProperties>({
		});

	}

	export interface WAFLimitsExceededException {
	}
	export interface WAFLimitsExceededExceptionFormProperties {
	}
	export function CreateWAFLimitsExceededExceptionFormGroup() {
		return new FormGroup<WAFLimitsExceededExceptionFormProperties>({
		});

	}

	export interface WAFInvalidResourceException {
	}
	export interface WAFInvalidResourceExceptionFormProperties {
	}
	export function CreateWAFInvalidResourceExceptionFormGroup() {
		return new FormGroup<WAFInvalidResourceExceptionFormProperties>({
		});

	}

	export interface WAFSubscriptionNotFoundException {
	}
	export interface WAFSubscriptionNotFoundExceptionFormProperties {
	}
	export function CreateWAFSubscriptionNotFoundExceptionFormGroup() {
		return new FormGroup<WAFSubscriptionNotFoundExceptionFormProperties>({
		});

	}

	export interface WAFExpiredManagedRuleGroupVersionException {
	}
	export interface WAFExpiredManagedRuleGroupVersionExceptionFormProperties {
	}
	export function CreateWAFExpiredManagedRuleGroupVersionExceptionFormGroup() {
		return new FormGroup<WAFExpiredManagedRuleGroupVersionExceptionFormProperties>({
		});

	}

	export interface CreateAPIKeyResponse {
		APIKey?: string;
	}
	export interface CreateAPIKeyResponseFormProperties {
		APIKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateAPIKeyResponseFormGroup() {
		return new FormGroup<CreateAPIKeyResponseFormProperties>({
			APIKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAPIKeyRequest {

		/** Required */
		Scope: Scope;

		/** Required */
		TokenDomains: Array<string>;
	}
	export interface CreateAPIKeyRequestFormProperties {

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
	}
	export function CreateCreateAPIKeyRequestFormGroup() {
		return new FormGroup<CreateAPIKeyRequestFormProperties>({
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateIPSetResponse {
		Summary?: IPSetSummary;
	}
	export interface CreateIPSetResponseFormProperties {
	}
	export function CreateCreateIPSetResponseFormGroup() {
		return new FormGroup<CreateIPSetResponseFormProperties>({
		});

	}


	/** High-level information about an <a>IPSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an <code>IPSet</code>, and the ARN, that you provide to the <a>IPSetReferenceStatement</a> to use the address set in a <a>Rule</a>. */
	export interface IPSetSummary {
		Name?: string;
		Id?: string;
		Description?: string;
		LockToken?: string;
		ARN?: string;
	}

	/** High-level information about an <a>IPSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage an <code>IPSet</code>, and the ARN, that you provide to the <a>IPSetReferenceStatement</a> to use the address set in a <a>Rule</a>. */
	export interface IPSetSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LockToken: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateIPSetSummaryFormGroup() {
		return new FormGroup<IPSetSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LockToken: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIPSetRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;
		Description?: string;

		/** Required */
		IPAddressVersion: IPAddressVersion;

		/** Required */
		Addresses: Array<string>;
		Tags?: Array<Tag>;
	}
	export interface CreateIPSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		IPAddressVersion: FormControl<IPAddressVersion | null | undefined>,
	}
	export function CreateCreateIPSetRequestFormGroup() {
		return new FormGroup<CreateIPSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			IPAddressVersion: new FormControl<IPAddressVersion | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IPAddressVersion { IPV4 = 0, IPV6 = 1 }


	/** <p>A tag associated with an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF console. </p> */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** <p>A tag associated with an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF console. </p> */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WAFDuplicateItemException {
	}
	export interface WAFDuplicateItemExceptionFormProperties {
	}
	export function CreateWAFDuplicateItemExceptionFormGroup() {
		return new FormGroup<WAFDuplicateItemExceptionFormProperties>({
		});

	}

	export interface WAFOptimisticLockException {
	}
	export interface WAFOptimisticLockExceptionFormProperties {
	}
	export function CreateWAFOptimisticLockExceptionFormGroup() {
		return new FormGroup<WAFOptimisticLockExceptionFormProperties>({
		});

	}

	export interface WAFTagOperationException {
	}
	export interface WAFTagOperationExceptionFormProperties {
	}
	export function CreateWAFTagOperationExceptionFormGroup() {
		return new FormGroup<WAFTagOperationExceptionFormProperties>({
		});

	}

	export interface WAFTagOperationInternalErrorException {
	}
	export interface WAFTagOperationInternalErrorExceptionFormProperties {
	}
	export function CreateWAFTagOperationInternalErrorExceptionFormGroup() {
		return new FormGroup<WAFTagOperationInternalErrorExceptionFormProperties>({
		});

	}

	export interface CreateRegexPatternSetResponse {
		Summary?: RegexPatternSetSummary;
	}
	export interface CreateRegexPatternSetResponseFormProperties {
	}
	export function CreateCreateRegexPatternSetResponseFormGroup() {
		return new FormGroup<CreateRegexPatternSetResponseFormProperties>({
		});

	}


	/** High-level information about a <a>RegexPatternSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RegexPatternSet</code>, and the ARN, that you provide to the <a>RegexPatternSetReferenceStatement</a> to use the pattern set in a <a>Rule</a>. */
	export interface RegexPatternSetSummary {
		Name?: string;
		Id?: string;
		Description?: string;
		LockToken?: string;
		ARN?: string;
	}

	/** High-level information about a <a>RegexPatternSet</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RegexPatternSet</code>, and the ARN, that you provide to the <a>RegexPatternSetReferenceStatement</a> to use the pattern set in a <a>Rule</a>. */
	export interface RegexPatternSetSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LockToken: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateRegexPatternSetSummaryFormGroup() {
		return new FormGroup<RegexPatternSetSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LockToken: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRegexPatternSetRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;
		Description?: string;

		/** Required */
		RegularExpressionList: Array<Regex>;
		Tags?: Array<Tag>;
	}
	export interface CreateRegexPatternSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateRegexPatternSetRequestFormGroup() {
		return new FormGroup<CreateRegexPatternSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single regular expression. This is used in a <a>RegexPatternSet</a>. */
	export interface Regex {
		RegexString?: string;
	}

	/** A single regular expression. This is used in a <a>RegexPatternSet</a>. */
	export interface RegexFormProperties {
		RegexString: FormControl<string | null | undefined>,
	}
	export function CreateRegexFormGroup() {
		return new FormGroup<RegexFormProperties>({
			RegexString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRuleGroupResponse {
		Summary?: RuleGroupSummary;
	}
	export interface CreateRuleGroupResponseFormProperties {
	}
	export function CreateCreateRuleGroupResponseFormGroup() {
		return new FormGroup<CreateRuleGroupResponseFormProperties>({
		});

	}


	/** High-level information about a <a>RuleGroup</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>. */
	export interface RuleGroupSummary {
		Name?: string;
		Id?: string;
		Description?: string;
		LockToken?: string;
		ARN?: string;
	}

	/** High-level information about a <a>RuleGroup</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>. */
	export interface RuleGroupSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LockToken: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupSummaryFormGroup() {
		return new FormGroup<RuleGroupSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LockToken: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRuleGroupRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;

		/** Required */
		Capacity: number;
		Description?: string;
		Rules?: Array<Rule>;

		/** Required */
		VisibilityConfig: VisibilityConfig;
		Tags?: Array<Tag>;
		CustomResponseBodies?: CustomResponseBodies;
	}
	export interface CreateRuleGroupRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		Capacity: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateRuleGroupRequestFormGroup() {
		return new FormGroup<CreateRuleGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Capacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomResponseBodies {
	}
	export interface CustomResponseBodiesFormProperties {
	}
	export function CreateCustomResponseBodiesFormGroup() {
		return new FormGroup<CustomResponseBodiesFormProperties>({
		});

	}

	export interface CreateWebACLResponse {
		Summary?: WebACLSummary;
	}
	export interface CreateWebACLResponseFormProperties {
	}
	export function CreateCreateWebACLResponseFormGroup() {
		return new FormGroup<CreateWebACLResponseFormProperties>({
		});

	}


	/** High-level information about a <a>WebACL</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>WebACL</code>, and the ARN, that you provide to operations like <a>AssociateWebACL</a>. */
	export interface WebACLSummary {
		Name?: string;
		Id?: string;
		Description?: string;
		LockToken?: string;
		ARN?: string;
	}

	/** High-level information about a <a>WebACL</a>, returned by operations like create and list. This provides information like the ID, that you can use to retrieve and manage a <code>WebACL</code>, and the ARN, that you provide to operations like <a>AssociateWebACL</a>. */
	export interface WebACLSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LockToken: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateWebACLSummaryFormGroup() {
		return new FormGroup<WebACLSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LockToken: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWebACLRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;

		/** Required */
		DefaultAction: DefaultAction;
		Description?: string;
		Rules?: Array<Rule>;

		/** Required */
		VisibilityConfig: VisibilityConfig;
		Tags?: Array<Tag>;
		CustomResponseBodies?: CustomResponseBodies;
		CaptchaConfig?: CaptchaConfig;
		ChallengeConfig?: ChallengeConfig;
		TokenDomains?: Array<string>;
		AssociationConfig?: AssociationConfig;
	}
	export interface CreateWebACLRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebACLRequestFormGroup() {
		return new FormGroup<CreateWebACLRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** In a <a>WebACL</a>, this is the action that you want WAF to perform when a web request doesn't match any of the rules in the <code>WebACL</code>. The default action must be a terminating action. */
	export interface DefaultAction {
		Block?: BlockAction;
		Allow?: AllowAction;
	}

	/** In a <a>WebACL</a>, this is the action that you want WAF to perform when a web request doesn't match any of the rules in the <code>WebACL</code>. The default action must be a terminating action. */
	export interface DefaultActionFormProperties {
	}
	export function CreateDefaultActionFormGroup() {
		return new FormGroup<DefaultActionFormProperties>({
		});

	}


	/** <p>Specifies custom configurations for the associations between the web ACL and protected resources. </p> <p>Use this to customize the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default is 16 KB (16,384 kilobytes). </p> <note> <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note> */
	export interface AssociationConfig {
		RequestBody?: RequestBody;
	}

	/** <p>Specifies custom configurations for the associations between the web ACL and protected resources. </p> <p>Use this to customize the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default is 16 KB (16,384 kilobytes). </p> <note> <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note> */
	export interface AssociationConfigFormProperties {
	}
	export function CreateAssociationConfigFormGroup() {
		return new FormGroup<AssociationConfigFormProperties>({
		});

	}

	export interface RequestBody {
	}
	export interface RequestBodyFormProperties {
	}
	export function CreateRequestBodyFormGroup() {
		return new FormGroup<RequestBodyFormProperties>({
		});

	}

	export interface WAFConfigurationWarningException {
	}
	export interface WAFConfigurationWarningExceptionFormProperties {
	}
	export function CreateWAFConfigurationWarningExceptionFormGroup() {
		return new FormGroup<WAFConfigurationWarningExceptionFormProperties>({
		});

	}

	export interface DeleteFirewallManagerRuleGroupsResponse {
		NextWebACLLockToken?: string;
	}
	export interface DeleteFirewallManagerRuleGroupsResponseFormProperties {
		NextWebACLLockToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFirewallManagerRuleGroupsResponseFormGroup() {
		return new FormGroup<DeleteFirewallManagerRuleGroupsResponseFormProperties>({
			NextWebACLLockToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteFirewallManagerRuleGroupsRequest {

		/** Required */
		WebACLArn: string;

		/** Required */
		WebACLLockToken: string;
	}
	export interface DeleteFirewallManagerRuleGroupsRequestFormProperties {

		/** Required */
		WebACLArn: FormControl<string | null | undefined>,

		/** Required */
		WebACLLockToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFirewallManagerRuleGroupsRequestFormGroup() {
		return new FormGroup<DeleteFirewallManagerRuleGroupsRequestFormProperties>({
			WebACLArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WebACLLockToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteIPSetResponse {
	}
	export interface DeleteIPSetResponseFormProperties {
	}
	export function CreateDeleteIPSetResponseFormGroup() {
		return new FormGroup<DeleteIPSetResponseFormProperties>({
		});

	}

	export interface DeleteIPSetRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;

		/** Required */
		Id: string;

		/** Required */
		LockToken: string;
	}
	export interface DeleteIPSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		LockToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIPSetRequestFormGroup() {
		return new FormGroup<DeleteIPSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LockToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WAFAssociatedItemException {
	}
	export interface WAFAssociatedItemExceptionFormProperties {
	}
	export function CreateWAFAssociatedItemExceptionFormGroup() {
		return new FormGroup<WAFAssociatedItemExceptionFormProperties>({
		});

	}

	export interface DeleteLoggingConfigurationResponse {
	}
	export interface DeleteLoggingConfigurationResponseFormProperties {
	}
	export function CreateDeleteLoggingConfigurationResponseFormGroup() {
		return new FormGroup<DeleteLoggingConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteLoggingConfigurationRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DeleteLoggingConfigurationRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLoggingConfigurationRequestFormGroup() {
		return new FormGroup<DeleteLoggingConfigurationRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePermissionPolicyResponse {
	}
	export interface DeletePermissionPolicyResponseFormProperties {
	}
	export function CreateDeletePermissionPolicyResponseFormGroup() {
		return new FormGroup<DeletePermissionPolicyResponseFormProperties>({
		});

	}

	export interface DeletePermissionPolicyRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DeletePermissionPolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePermissionPolicyRequestFormGroup() {
		return new FormGroup<DeletePermissionPolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRegexPatternSetResponse {
	}
	export interface DeleteRegexPatternSetResponseFormProperties {
	}
	export function CreateDeleteRegexPatternSetResponseFormGroup() {
		return new FormGroup<DeleteRegexPatternSetResponseFormProperties>({
		});

	}

	export interface DeleteRegexPatternSetRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;

		/** Required */
		Id: string;

		/** Required */
		LockToken: string;
	}
	export interface DeleteRegexPatternSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		LockToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRegexPatternSetRequestFormGroup() {
		return new FormGroup<DeleteRegexPatternSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LockToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRuleGroupResponse {
	}
	export interface DeleteRuleGroupResponseFormProperties {
	}
	export function CreateDeleteRuleGroupResponseFormGroup() {
		return new FormGroup<DeleteRuleGroupResponseFormProperties>({
		});

	}

	export interface DeleteRuleGroupRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;

		/** Required */
		Id: string;

		/** Required */
		LockToken: string;
	}
	export interface DeleteRuleGroupRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		LockToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRuleGroupRequestFormGroup() {
		return new FormGroup<DeleteRuleGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LockToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWebACLResponse {
	}
	export interface DeleteWebACLResponseFormProperties {
	}
	export function CreateDeleteWebACLResponseFormGroup() {
		return new FormGroup<DeleteWebACLResponseFormProperties>({
		});

	}

	export interface DeleteWebACLRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;

		/** Required */
		Id: string;

		/** Required */
		LockToken: string;
	}
	export interface DeleteWebACLRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		LockToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWebACLRequestFormGroup() {
		return new FormGroup<DeleteWebACLRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LockToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAllManagedProductsResponse {
		ManagedProducts?: Array<ManagedProductDescriptor>;
	}
	export interface DescribeAllManagedProductsResponseFormProperties {
	}
	export function CreateDescribeAllManagedProductsResponseFormGroup() {
		return new FormGroup<DescribeAllManagedProductsResponseFormProperties>({
		});

	}


	/** The properties of a managed product, such as an Amazon Web Services Managed Rules rule group or an Amazon Web Services Marketplace managed rule group.  */
	export interface ManagedProductDescriptor {
		VendorName?: string;
		ManagedRuleSetName?: string;
		ProductId?: string;
		ProductLink?: string;
		ProductTitle?: string;
		ProductDescription?: string;
		SnsTopicArn?: string;
		IsVersioningSupported?: boolean | null;
		IsAdvancedManagedRuleSet?: boolean | null;
	}

	/** The properties of a managed product, such as an Amazon Web Services Managed Rules rule group or an Amazon Web Services Marketplace managed rule group.  */
	export interface ManagedProductDescriptorFormProperties {
		VendorName: FormControl<string | null | undefined>,
		ManagedRuleSetName: FormControl<string | null | undefined>,
		ProductId: FormControl<string | null | undefined>,
		ProductLink: FormControl<string | null | undefined>,
		ProductTitle: FormControl<string | null | undefined>,
		ProductDescription: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		IsVersioningSupported: FormControl<boolean | null | undefined>,
		IsAdvancedManagedRuleSet: FormControl<boolean | null | undefined>,
	}
	export function CreateManagedProductDescriptorFormGroup() {
		return new FormGroup<ManagedProductDescriptorFormProperties>({
			VendorName: new FormControl<string | null | undefined>(undefined),
			ManagedRuleSetName: new FormControl<string | null | undefined>(undefined),
			ProductId: new FormControl<string | null | undefined>(undefined),
			ProductLink: new FormControl<string | null | undefined>(undefined),
			ProductTitle: new FormControl<string | null | undefined>(undefined),
			ProductDescription: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			IsVersioningSupported: new FormControl<boolean | null | undefined>(undefined),
			IsAdvancedManagedRuleSet: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeAllManagedProductsRequest {

		/** Required */
		Scope: Scope;
	}
	export interface DescribeAllManagedProductsRequestFormProperties {

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
	}
	export function CreateDescribeAllManagedProductsRequestFormGroup() {
		return new FormGroup<DescribeAllManagedProductsRequestFormProperties>({
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeManagedProductsByVendorResponse {
		ManagedProducts?: Array<ManagedProductDescriptor>;
	}
	export interface DescribeManagedProductsByVendorResponseFormProperties {
	}
	export function CreateDescribeManagedProductsByVendorResponseFormGroup() {
		return new FormGroup<DescribeManagedProductsByVendorResponseFormProperties>({
		});

	}

	export interface DescribeManagedProductsByVendorRequest {

		/** Required */
		VendorName: string;

		/** Required */
		Scope: Scope;
	}
	export interface DescribeManagedProductsByVendorRequestFormProperties {

		/** Required */
		VendorName: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
	}
	export function CreateDescribeManagedProductsByVendorRequestFormGroup() {
		return new FormGroup<DescribeManagedProductsByVendorRequestFormProperties>({
			VendorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeManagedRuleGroupResponse {
		VersionName?: string;
		SnsTopicArn?: string;
		Capacity?: number | null;
		Rules?: Array<RuleSummary>;
		LabelNamespace?: string;
		AvailableLabels?: Array<LabelSummary>;
		ConsumedLabels?: Array<LabelSummary>;
	}
	export interface DescribeManagedRuleGroupResponseFormProperties {
		VersionName: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		Capacity: FormControl<number | null | undefined>,
		LabelNamespace: FormControl<string | null | undefined>,
	}
	export function CreateDescribeManagedRuleGroupResponseFormGroup() {
		return new FormGroup<DescribeManagedRuleGroupResponseFormProperties>({
			VersionName: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			Capacity: new FormControl<number | null | undefined>(undefined),
			LabelNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** High-level information about a <a>Rule</a>, returned by operations like <a>DescribeManagedRuleGroup</a>. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>. */
	export interface RuleSummary {
		Name?: string;
		Action?: RuleAction;
	}

	/** High-level information about a <a>Rule</a>, returned by operations like <a>DescribeManagedRuleGroup</a>. This provides information like the ID, that you can use to retrieve and manage a <code>RuleGroup</code>, and the ARN, that you provide to the <a>RuleGroupReferenceStatement</a> to use the rule group in a <a>Rule</a>. */
	export interface RuleSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRuleSummaryFormGroup() {
		return new FormGroup<RuleSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>List of labels used by one or more of the rules of a <a>RuleGroup</a>. This summary object is used for the following rule group lists: </p> <ul> <li> <p> <code>AvailableLabels</code> - Labels that rules add to matching requests. These labels are defined in the <code>RuleLabels</code> for a <a>Rule</a>. </p> </li> <li> <p> <code>ConsumedLabels</code> - Labels that rules match against. These labels are defined in a <code>LabelMatchStatement</code> specification, in the <a>Statement</a> definition of a rule. </p> </li> </ul> */
	export interface LabelSummary {
		Name?: string;
	}

	/** <p>List of labels used by one or more of the rules of a <a>RuleGroup</a>. This summary object is used for the following rule group lists: </p> <ul> <li> <p> <code>AvailableLabels</code> - Labels that rules add to matching requests. These labels are defined in the <code>RuleLabels</code> for a <a>Rule</a>. </p> </li> <li> <p> <code>ConsumedLabels</code> - Labels that rules match against. These labels are defined in a <code>LabelMatchStatement</code> specification, in the <a>Statement</a> definition of a rule. </p> </li> </ul> */
	export interface LabelSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateLabelSummaryFormGroup() {
		return new FormGroup<LabelSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeManagedRuleGroupRequest {

		/** Required */
		VendorName: string;

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;
		VersionName?: string;
	}
	export interface DescribeManagedRuleGroupRequestFormProperties {

		/** Required */
		VendorName: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeManagedRuleGroupRequestFormGroup() {
		return new FormGroup<DescribeManagedRuleGroupRequestFormProperties>({
			VendorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			VersionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateWebACLResponse {
	}
	export interface DisassociateWebACLResponseFormProperties {
	}
	export function CreateDisassociateWebACLResponseFormGroup() {
		return new FormGroup<DisassociateWebACLResponseFormProperties>({
		});

	}

	export interface DisassociateWebACLRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DisassociateWebACLRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateWebACLRequestFormGroup() {
		return new FormGroup<DisassociateWebACLRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GenerateMobileSdkReleaseUrlResponse {
		Url?: string;
	}
	export interface GenerateMobileSdkReleaseUrlResponseFormProperties {
		Url: FormControl<string | null | undefined>,
	}
	export function CreateGenerateMobileSdkReleaseUrlResponseFormGroup() {
		return new FormGroup<GenerateMobileSdkReleaseUrlResponseFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GenerateMobileSdkReleaseUrlRequest {

		/** Required */
		Platform: Platform;

		/** Required */
		ReleaseVersion: string;
	}
	export interface GenerateMobileSdkReleaseUrlRequestFormProperties {

		/** Required */
		Platform: FormControl<Platform | null | undefined>,

		/** Required */
		ReleaseVersion: FormControl<string | null | undefined>,
	}
	export function CreateGenerateMobileSdkReleaseUrlRequestFormGroup() {
		return new FormGroup<GenerateMobileSdkReleaseUrlRequestFormProperties>({
			Platform: new FormControl<Platform | null | undefined>(undefined, [Validators.required]),
			ReleaseVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Platform { IOS = 0, ANDROID = 1 }

	export interface GetDecryptedAPIKeyResponse {
		TokenDomains?: Array<string>;
		CreationTimestamp?: Date;
	}
	export interface GetDecryptedAPIKeyResponseFormProperties {
		CreationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGetDecryptedAPIKeyResponseFormGroup() {
		return new FormGroup<GetDecryptedAPIKeyResponseFormProperties>({
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetDecryptedAPIKeyRequest {

		/** Required */
		Scope: Scope;

		/** Required */
		APIKey: string;
	}
	export interface GetDecryptedAPIKeyRequestFormProperties {

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		APIKey: FormControl<string | null | undefined>,
	}
	export function CreateGetDecryptedAPIKeyRequestFormGroup() {
		return new FormGroup<GetDecryptedAPIKeyRequestFormProperties>({
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			APIKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetIPSetResponse {
		IPSet?: IPSet;
		LockToken?: string;
	}
	export interface GetIPSetResponseFormProperties {
		LockToken: FormControl<string | null | undefined>,
	}
	export function CreateGetIPSetResponseFormGroup() {
		return new FormGroup<GetIPSetResponseFormProperties>({
			LockToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains zero or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for /0. For information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>WAF assigns an ARN to each <code>IPSet</code> that you create. To use an IP set in a rule, you provide the ARN to the <a>Rule</a> statement <a>IPSetReferenceStatement</a>. </p> */
	export interface IPSet {

		/** Required */
		Name: string;

		/** Required */
		Id: string;

		/** Required */
		ARN: string;
		Description?: string;

		/** Required */
		IPAddressVersion: IPAddressVersion;

		/** Required */
		Addresses: Array<string>;
	}

	/** <p>Contains zero or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. WAF supports all IPv4 and IPv6 CIDR ranges except for /0. For information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p> <p>WAF assigns an ARN to each <code>IPSet</code> that you create. To use an IP set in a rule, you provide the ARN to the <a>Rule</a> statement <a>IPSetReferenceStatement</a>. </p> */
	export interface IPSetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ARN: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		IPAddressVersion: FormControl<IPAddressVersion | null | undefined>,
	}
	export function CreateIPSetFormGroup() {
		return new FormGroup<IPSetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			IPAddressVersion: new FormControl<IPAddressVersion | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetIPSetRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;

		/** Required */
		Id: string;
	}
	export interface GetIPSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateGetIPSetRequestFormGroup() {
		return new FormGroup<GetIPSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLoggingConfigurationResponse {
		LoggingConfiguration?: LoggingConfiguration;
	}
	export interface GetLoggingConfigurationResponseFormProperties {
	}
	export function CreateGetLoggingConfigurationResponseFormGroup() {
		return new FormGroup<GetLoggingConfigurationResponseFormProperties>({
		});

	}


	/** <p>Defines an association between logging destinations and a web ACL resource, for logging from WAF. As part of the association, you can specify parts of the standard logging fields to keep out of the logs and you can specify filters so that you log only a subset of the logging records. </p> <note> <p>You can define one logging destination per web ACL.</p> </note> <p>You can access information about the traffic that WAF inspects using the following steps:</p> <ol> <li> <p>Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose. </p> <p>The name that you give the destination must start with <code>aws-waf-logs-</code>. Depending on the type of destination, you might need to configure additional settings or permissions. </p> <p>For configuration requirements and pricing information for each destination type, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic</a> in the <i>WAF Developer Guide</i>.</p> </li> <li> <p>Associate your logging destination to your web ACL using a <code>PutLoggingConfiguration</code> request.</p> </li> </ol> <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, WAF creates an additional role or policy that is required to write logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group. For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role.</p> <p>For additional information about web ACL logging, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic information</a> in the <i>WAF Developer Guide</i>.</p> */
	export interface LoggingConfiguration {

		/** Required */
		ResourceArn: string;

		/** Required */
		LogDestinationConfigs: Array<string>;
		RedactedFields?: Array<FieldToMatch>;
		ManagedByFirewallManager?: boolean | null;
		LoggingFilter?: LoggingFilter;
	}

	/** <p>Defines an association between logging destinations and a web ACL resource, for logging from WAF. As part of the association, you can specify parts of the standard logging fields to keep out of the logs and you can specify filters so that you log only a subset of the logging records. </p> <note> <p>You can define one logging destination per web ACL.</p> </note> <p>You can access information about the traffic that WAF inspects using the following steps:</p> <ol> <li> <p>Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose. </p> <p>The name that you give the destination must start with <code>aws-waf-logs-</code>. Depending on the type of destination, you might need to configure additional settings or permissions. </p> <p>For configuration requirements and pricing information for each destination type, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic</a> in the <i>WAF Developer Guide</i>.</p> </li> <li> <p>Associate your logging destination to your web ACL using a <code>PutLoggingConfiguration</code> request.</p> </li> </ol> <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, WAF creates an additional role or policy that is required to write logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group. For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role.</p> <p>For additional information about web ACL logging, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic information</a> in the <i>WAF Developer Guide</i>.</p> */
	export interface LoggingConfigurationFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		ManagedByFirewallManager: FormControl<boolean | null | undefined>,
	}
	export function CreateLoggingConfigurationFormGroup() {
		return new FormGroup<LoggingConfigurationFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ManagedByFirewallManager: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Filtering that specifies which web requests are kept in the logs and which are dropped, defined for a web ACL's <a>LoggingConfiguration</a>. </p> <p>You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation. </p> */
	export interface LoggingFilter {

		/** Required */
		Filters: Array<Filter>;

		/** Required */
		DefaultBehavior: FilterBehavior;
	}

	/** <p>Filtering that specifies which web requests are kept in the logs and which are dropped, defined for a web ACL's <a>LoggingConfiguration</a>. </p> <p>You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation. </p> */
	export interface LoggingFilterFormProperties {

		/** Required */
		DefaultBehavior: FormControl<FilterBehavior | null | undefined>,
	}
	export function CreateLoggingFilterFormGroup() {
		return new FormGroup<LoggingFilterFormProperties>({
			DefaultBehavior: new FormControl<FilterBehavior | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A single logging filter, used in <a>LoggingFilter</a>.  */
	export interface Filter {

		/** Required */
		Behavior: FilterBehavior;

		/** Required */
		Requirement: FilterRequirement;

		/** Required */
		Conditions: Array<Condition>;
	}

	/** A single logging filter, used in <a>LoggingFilter</a>.  */
	export interface FilterFormProperties {

		/** Required */
		Behavior: FormControl<FilterBehavior | null | undefined>,

		/** Required */
		Requirement: FormControl<FilterRequirement | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Behavior: new FormControl<FilterBehavior | null | undefined>(undefined, [Validators.required]),
			Requirement: new FormControl<FilterRequirement | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FilterBehavior { KEEP = 0, DROP = 1 }

	export enum FilterRequirement { MEETS_ALL = 0, MEETS_ANY = 1 }


	/** A single match condition for a <a>Filter</a>. */
	export interface Condition {
		ActionCondition?: ActionCondition;
		LabelNameCondition?: LabelNameCondition;
	}

	/** A single match condition for a <a>Filter</a>. */
	export interface ConditionFormProperties {
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
		});

	}


	/** A single action condition for a <a>Condition</a> in a logging filter. */
	export interface ActionCondition {

		/** Required */
		Action: ActionValue;
	}

	/** A single action condition for a <a>Condition</a> in a logging filter. */
	export interface ActionConditionFormProperties {

		/** Required */
		Action: FormControl<ActionValue | null | undefined>,
	}
	export function CreateActionConditionFormGroup() {
		return new FormGroup<ActionConditionFormProperties>({
			Action: new FormControl<ActionValue | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ActionValue { ALLOW = 0, BLOCK = 1, COUNT = 2, CAPTCHA = 3, CHALLENGE = 4, EXCLUDED_AS_COUNT = 5 }


	/** A single label name condition for a <a>Condition</a> in a logging filter. */
	export interface LabelNameCondition {

		/** Required */
		LabelName: string;
	}

	/** A single label name condition for a <a>Condition</a> in a logging filter. */
	export interface LabelNameConditionFormProperties {

		/** Required */
		LabelName: FormControl<string | null | undefined>,
	}
	export function CreateLabelNameConditionFormGroup() {
		return new FormGroup<LabelNameConditionFormProperties>({
			LabelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLoggingConfigurationRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface GetLoggingConfigurationRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetLoggingConfigurationRequestFormGroup() {
		return new FormGroup<GetLoggingConfigurationRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetManagedRuleSetResponse {
		ManagedRuleSet?: ManagedRuleSet;
		LockToken?: string;
	}
	export interface GetManagedRuleSetResponseFormProperties {
		LockToken: FormControl<string | null | undefined>,
	}
	export function CreateGetManagedRuleSetResponseFormGroup() {
		return new FormGroup<GetManagedRuleSetResponseFormProperties>({
			LockToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A set of rules that is managed by Amazon Web Services and Amazon Web Services Marketplace sellers to provide versioned managed rule groups for customers of WAF.</p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note> */
	export interface ManagedRuleSet {

		/** Required */
		Name: string;

		/** Required */
		Id: string;

		/** Required */
		ARN: string;
		Description?: string;
		PublishedVersions?: PublishedVersions;
		RecommendedVersion?: string;
		LabelNamespace?: string;
	}

	/** <p>A set of rules that is managed by Amazon Web Services and Amazon Web Services Marketplace sellers to provide versioned managed rule groups for customers of WAF.</p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note> */
	export interface ManagedRuleSetFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ARN: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RecommendedVersion: FormControl<string | null | undefined>,
		LabelNamespace: FormControl<string | null | undefined>,
	}
	export function CreateManagedRuleSetFormGroup() {
		return new FormGroup<ManagedRuleSetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			RecommendedVersion: new FormControl<string | null | undefined>(undefined),
			LabelNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublishedVersions {
	}
	export interface PublishedVersionsFormProperties {
	}
	export function CreatePublishedVersionsFormGroup() {
		return new FormGroup<PublishedVersionsFormProperties>({
		});

	}

	export interface GetManagedRuleSetRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;

		/** Required */
		Id: string;
	}
	export interface GetManagedRuleSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateGetManagedRuleSetRequestFormGroup() {
		return new FormGroup<GetManagedRuleSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMobileSdkReleaseResponse {
		MobileSdkRelease?: MobileSdkRelease;
	}
	export interface GetMobileSdkReleaseResponseFormProperties {
	}
	export function CreateGetMobileSdkReleaseResponseFormGroup() {
		return new FormGroup<GetMobileSdkReleaseResponseFormProperties>({
		});

	}


	/** <p>Information for a release of the mobile SDK, including release notes and tags.</p> <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p> */
	export interface MobileSdkRelease {
		ReleaseVersion?: string;
		Timestamp?: Date;
		ReleaseNotes?: string;
		Tags?: Array<Tag>;
	}

	/** <p>Information for a release of the mobile SDK, including release notes and tags.</p> <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p> */
	export interface MobileSdkReleaseFormProperties {
		ReleaseVersion: FormControl<string | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
		ReleaseNotes: FormControl<string | null | undefined>,
	}
	export function CreateMobileSdkReleaseFormGroup() {
		return new FormGroup<MobileSdkReleaseFormProperties>({
			ReleaseVersion: new FormControl<string | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			ReleaseNotes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMobileSdkReleaseRequest {

		/** Required */
		Platform: Platform;

		/** Required */
		ReleaseVersion: string;
	}
	export interface GetMobileSdkReleaseRequestFormProperties {

		/** Required */
		Platform: FormControl<Platform | null | undefined>,

		/** Required */
		ReleaseVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetMobileSdkReleaseRequestFormGroup() {
		return new FormGroup<GetMobileSdkReleaseRequestFormProperties>({
			Platform: new FormControl<Platform | null | undefined>(undefined, [Validators.required]),
			ReleaseVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPermissionPolicyResponse {
		Policy?: string;
	}
	export interface GetPermissionPolicyResponseFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetPermissionPolicyResponseFormGroup() {
		return new FormGroup<GetPermissionPolicyResponseFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPermissionPolicyRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface GetPermissionPolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetPermissionPolicyRequestFormGroup() {
		return new FormGroup<GetPermissionPolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRateBasedStatementManagedKeysResponse {
		ManagedKeysIPV4?: RateBasedStatementManagedKeysIPSet;
		ManagedKeysIPV6?: RateBasedStatementManagedKeysIPSet;
	}
	export interface GetRateBasedStatementManagedKeysResponseFormProperties {
	}
	export function CreateGetRateBasedStatementManagedKeysResponseFormGroup() {
		return new FormGroup<GetRateBasedStatementManagedKeysResponseFormProperties>({
		});

	}


	/** <p>The set of IP addresses that are currently blocked for a <a>RateBasedStatement</a>. This is only available for rate-based rules that aggregate on just the IP address, with the <code>AggregateKeyType</code> set to <code>IP</code> or <code>FORWARDED_IP</code>.</p> <p>A rate-based rule applies its rule action to requests from IP addresses that are in the rule's managed keys list and that match the rule's scope-down statement. When a rule has no scope-down statement, it applies the action to all requests from the IP addresses that are in the list. The rule applies its rule action to rate limit the matching requests. The action is usually Block but it can be any valid rule action except for Allow. </p> <p>The maximum number of IP addresses that can be rate limited by a single rate-based rule instance is 10,000. If more than 10,000 addresses exceed the rate limit, WAF limits those with the highest rates. </p> */
	export interface RateBasedStatementManagedKeysIPSet {
		IPAddressVersion?: IPAddressVersion;
		Addresses?: Array<string>;
	}

	/** <p>The set of IP addresses that are currently blocked for a <a>RateBasedStatement</a>. This is only available for rate-based rules that aggregate on just the IP address, with the <code>AggregateKeyType</code> set to <code>IP</code> or <code>FORWARDED_IP</code>.</p> <p>A rate-based rule applies its rule action to requests from IP addresses that are in the rule's managed keys list and that match the rule's scope-down statement. When a rule has no scope-down statement, it applies the action to all requests from the IP addresses that are in the list. The rule applies its rule action to rate limit the matching requests. The action is usually Block but it can be any valid rule action except for Allow. </p> <p>The maximum number of IP addresses that can be rate limited by a single rate-based rule instance is 10,000. If more than 10,000 addresses exceed the rate limit, WAF limits those with the highest rates. </p> */
	export interface RateBasedStatementManagedKeysIPSetFormProperties {
		IPAddressVersion: FormControl<IPAddressVersion | null | undefined>,
	}
	export function CreateRateBasedStatementManagedKeysIPSetFormGroup() {
		return new FormGroup<RateBasedStatementManagedKeysIPSetFormProperties>({
			IPAddressVersion: new FormControl<IPAddressVersion | null | undefined>(undefined),
		});

	}

	export interface GetRateBasedStatementManagedKeysRequest {

		/** Required */
		Scope: Scope;

		/** Required */
		WebACLName: string;

		/** Required */
		WebACLId: string;
		RuleGroupRuleName?: string;

		/** Required */
		RuleName: string;
	}
	export interface GetRateBasedStatementManagedKeysRequestFormProperties {

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		WebACLName: FormControl<string | null | undefined>,

		/** Required */
		WebACLId: FormControl<string | null | undefined>,
		RuleGroupRuleName: FormControl<string | null | undefined>,

		/** Required */
		RuleName: FormControl<string | null | undefined>,
	}
	export function CreateGetRateBasedStatementManagedKeysRequestFormGroup() {
		return new FormGroup<GetRateBasedStatementManagedKeysRequestFormProperties>({
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			WebACLName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuleGroupRuleName: new FormControl<string | null | undefined>(undefined),
			RuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WAFUnsupportedAggregateKeyTypeException {
	}
	export interface WAFUnsupportedAggregateKeyTypeExceptionFormProperties {
	}
	export function CreateWAFUnsupportedAggregateKeyTypeExceptionFormGroup() {
		return new FormGroup<WAFUnsupportedAggregateKeyTypeExceptionFormProperties>({
		});

	}

	export interface GetRegexPatternSetResponse {
		RegexPatternSet?: RegexPatternSet;
		LockToken?: string;
	}
	export interface GetRegexPatternSetResponseFormProperties {
		LockToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRegexPatternSetResponseFormGroup() {
		return new FormGroup<GetRegexPatternSetResponseFormProperties>({
			LockToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains one or more regular expressions. </p> <p>WAF assigns an ARN to each <code>RegexPatternSet</code> that you create. To use a set in a rule, you provide the ARN to the <a>Rule</a> statement <a>RegexPatternSetReferenceStatement</a>. </p> */
	export interface RegexPatternSet {
		Name?: string;
		Id?: string;
		ARN?: string;
		Description?: string;
		RegularExpressionList?: Array<Regex>;
	}

	/** <p>Contains one or more regular expressions. </p> <p>WAF assigns an ARN to each <code>RegexPatternSet</code> that you create. To use a set in a rule, you provide the ARN to the <a>Rule</a> statement <a>RegexPatternSetReferenceStatement</a>. </p> */
	export interface RegexPatternSetFormProperties {
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateRegexPatternSetFormGroup() {
		return new FormGroup<RegexPatternSetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRegexPatternSetRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;

		/** Required */
		Id: string;
	}
	export interface GetRegexPatternSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateGetRegexPatternSetRequestFormGroup() {
		return new FormGroup<GetRegexPatternSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRuleGroupResponse {
		RuleGroup?: RuleGroup;
		LockToken?: string;
	}
	export interface GetRuleGroupResponseFormProperties {
		LockToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRuleGroupResponseFormGroup() {
		return new FormGroup<GetRuleGroupResponseFormProperties>({
			LockToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements.  */
	export interface RuleGroup {

		/** Required */
		Name: string;

		/** Required */
		Id: string;

		/** Required */
		Capacity: number;

		/** Required */
		ARN: string;
		Description?: string;
		Rules?: Array<Rule>;

		/** Required */
		VisibilityConfig: VisibilityConfig;
		LabelNamespace?: string;
		CustomResponseBodies?: CustomResponseBodies;
		AvailableLabels?: Array<LabelSummary>;
		ConsumedLabels?: Array<LabelSummary>;
	}

	/**  A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements.  */
	export interface RuleGroupFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Capacity: FormControl<number | null | undefined>,

		/** Required */
		ARN: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LabelNamespace: FormControl<string | null | undefined>,
	}
	export function CreateRuleGroupFormGroup() {
		return new FormGroup<RuleGroupFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Capacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			LabelNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRuleGroupRequest {
		Name?: string;
		Scope?: Scope;
		Id?: string;
		ARN?: string;
	}
	export interface GetRuleGroupRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Scope: FormControl<Scope | null | undefined>,
		Id: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateGetRuleGroupRequestFormGroup() {
		return new FormGroup<GetRuleGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Scope: new FormControl<Scope | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSampledRequestsResponse {
		SampledRequests?: Array<SampledHTTPRequest>;
		PopulationSize?: number | null;
		TimeWindow?: TimeWindow;
	}
	export interface GetSampledRequestsResponseFormProperties {
		PopulationSize: FormControl<number | null | undefined>,
	}
	export function CreateGetSampledRequestsResponseFormGroup() {
		return new FormGroup<GetSampledRequestsResponseFormProperties>({
			PopulationSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a single sampled web request. The response from <a>GetSampledRequests</a> includes a <code>SampledHTTPRequests</code> complex type that appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains an array of <code>SampledHTTPRequest</code> objects. */
	export interface SampledHTTPRequest {

		/** Required */
		Request: HTTPRequest;

		/** Required */
		Weight: number;
		Timestamp?: Date;
		Action?: string;
		RuleNameWithinRuleGroup?: string;
		RequestHeadersInserted?: Array<HTTPHeader>;
		ResponseCodeSent?: number | null;
		Labels?: Array<Label>;
		CaptchaResponse?: CaptchaResponse;
		ChallengeResponse?: ChallengeResponse;
		OverriddenAction?: string;
	}

	/** Represents a single sampled web request. The response from <a>GetSampledRequests</a> includes a <code>SampledHTTPRequests</code> complex type that appears as <code>SampledRequests</code> in the response syntax. <code>SampledHTTPRequests</code> contains an array of <code>SampledHTTPRequest</code> objects. */
	export interface SampledHTTPRequestFormProperties {

		/** Required */
		Weight: FormControl<number | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
		Action: FormControl<string | null | undefined>,
		RuleNameWithinRuleGroup: FormControl<string | null | undefined>,
		ResponseCodeSent: FormControl<number | null | undefined>,
		OverriddenAction: FormControl<string | null | undefined>,
	}
	export function CreateSampledHTTPRequestFormGroup() {
		return new FormGroup<SampledHTTPRequestFormProperties>({
			Weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			Action: new FormControl<string | null | undefined>(undefined),
			RuleNameWithinRuleGroup: new FormControl<string | null | undefined>(undefined),
			ResponseCodeSent: new FormControl<number | null | undefined>(undefined),
			OverriddenAction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Part of the response from <a>GetSampledRequests</a>. This is a complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests.  */
	export interface HTTPRequest {
		ClientIP?: string;
		Country?: string;
		URI?: string;
		Method?: string;
		HTTPVersion?: string;
		Headers?: Array<HTTPHeader>;
	}

	/** Part of the response from <a>GetSampledRequests</a>. This is a complex type that appears as <code>Request</code> in the response syntax. <code>HTTPRequest</code> contains information about one of the web requests.  */
	export interface HTTPRequestFormProperties {
		ClientIP: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		URI: FormControl<string | null | undefined>,
		Method: FormControl<string | null | undefined>,
		HTTPVersion: FormControl<string | null | undefined>,
	}
	export function CreateHTTPRequestFormGroup() {
		return new FormGroup<HTTPRequestFormProperties>({
			ClientIP: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			URI: new FormControl<string | null | undefined>(undefined),
			Method: new FormControl<string | null | undefined>(undefined),
			HTTPVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Part of the response from <a>GetSampledRequests</a>. This is a complex type that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of all of the headers that appear in one of the web requests.  */
	export interface HTTPHeader {
		Name?: string;
		Value?: string;
	}

	/** Part of the response from <a>GetSampledRequests</a>. This is a complex type that appears as <code>Headers</code> in the response syntax. <code>HTTPHeader</code> contains the names and values of all of the headers that appear in one of the web requests.  */
	export interface HTTPHeaderFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateHTTPHeaderFormGroup() {
		return new FormGroup<HTTPHeaderFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result from the inspection of the web request for a valid <code>CAPTCHA</code> token.  */
	export interface CaptchaResponse {
		ResponseCode?: number | null;
		SolveTimestamp?: number | null;
		FailureReason?: FailureReason;
	}

	/** The result from the inspection of the web request for a valid <code>CAPTCHA</code> token.  */
	export interface CaptchaResponseFormProperties {
		ResponseCode: FormControl<number | null | undefined>,
		SolveTimestamp: FormControl<number | null | undefined>,
		FailureReason: FormControl<FailureReason | null | undefined>,
	}
	export function CreateCaptchaResponseFormGroup() {
		return new FormGroup<CaptchaResponseFormProperties>({
			ResponseCode: new FormControl<number | null | undefined>(undefined),
			SolveTimestamp: new FormControl<number | null | undefined>(undefined),
			FailureReason: new FormControl<FailureReason | null | undefined>(undefined),
		});

	}

	export enum FailureReason { TOKEN_MISSING = 0, TOKEN_EXPIRED = 1, TOKEN_INVALID = 2, TOKEN_DOMAIN_MISMATCH = 3 }


	/** The result from the inspection of the web request for a valid challenge token.  */
	export interface ChallengeResponse {
		ResponseCode?: number | null;
		SolveTimestamp?: number | null;
		FailureReason?: FailureReason;
	}

	/** The result from the inspection of the web request for a valid challenge token.  */
	export interface ChallengeResponseFormProperties {
		ResponseCode: FormControl<number | null | undefined>,
		SolveTimestamp: FormControl<number | null | undefined>,
		FailureReason: FormControl<FailureReason | null | undefined>,
	}
	export function CreateChallengeResponseFormGroup() {
		return new FormGroup<ChallengeResponseFormProperties>({
			ResponseCode: new FormControl<number | null | undefined>(undefined),
			SolveTimestamp: new FormControl<number | null | undefined>(undefined),
			FailureReason: new FormControl<FailureReason | null | undefined>(undefined),
		});

	}


	/** <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want WAF to return a sample of web requests.</p> <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which WAF actually returned a sample of web requests. WAF gets the specified number of requests from among the first 5,000 requests that your Amazon Web Services resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that WAF received the 5,000th request.</p> */
	export interface TimeWindow {

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
	}

	/** <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want WAF to return a sample of web requests.</p> <p>You must specify the times in Coordinated Universal Time (UTC) format. UTC format includes the special designator, <code>Z</code>. For example, <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which WAF actually returned a sample of web requests. WAF gets the specified number of requests from among the first 5,000 requests that your Amazon Web Services resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that WAF received the 5,000th request.</p> */
	export interface TimeWindowFormProperties {

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateTimeWindowFormGroup() {
		return new FormGroup<TimeWindowFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSampledRequestsRequest {

		/** Required */
		WebAclArn: string;

		/** Required */
		RuleMetricName: string;

		/** Required */
		Scope: Scope;

		/** Required */
		TimeWindow: TimeWindow;

		/** Required */
		MaxItems: number;
	}
	export interface GetSampledRequestsRequestFormProperties {

		/** Required */
		WebAclArn: FormControl<string | null | undefined>,

		/** Required */
		RuleMetricName: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateGetSampledRequestsRequestFormGroup() {
		return new FormGroup<GetSampledRequestsRequestFormProperties>({
			WebAclArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuleMetricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetWebACLResponse {
		WebACL?: WebACL;
		LockToken?: string;
		ApplicationIntegrationURL?: string;
	}
	export interface GetWebACLResponseFormProperties {
		LockToken: FormControl<string | null | undefined>,
		ApplicationIntegrationURL: FormControl<string | null | undefined>,
	}
	export function CreateGetWebACLResponseFormGroup() {
		return new FormGroup<GetWebACLResponseFormProperties>({
			LockToken: new FormControl<string | null | undefined>(undefined),
			ApplicationIntegrationURL: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  */
	export interface WebACL {

		/** Required */
		Name: string;

		/** Required */
		Id: string;

		/** Required */
		ARN: string;

		/** Required */
		DefaultAction: DefaultAction;
		Description?: string;
		Rules?: Array<Rule>;

		/** Required */
		VisibilityConfig: VisibilityConfig;
		Capacity?: number | null;
		PreProcessFirewallManagerRuleGroups?: Array<FirewallManagerRuleGroup>;
		PostProcessFirewallManagerRuleGroups?: Array<FirewallManagerRuleGroup>;
		ManagedByFirewallManager?: boolean | null;
		LabelNamespace?: string;
		CustomResponseBodies?: CustomResponseBodies;
		CaptchaConfig?: CaptchaConfig;
		ChallengeConfig?: ChallengeConfig;
		TokenDomains?: Array<string>;
		AssociationConfig?: AssociationConfig;
	}

	/**  A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance.  */
	export interface WebACLFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ARN: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Capacity: FormControl<number | null | undefined>,
		ManagedByFirewallManager: FormControl<boolean | null | undefined>,
		LabelNamespace: FormControl<string | null | undefined>,
	}
	export function CreateWebACLFormGroup() {
		return new FormGroup<WebACLFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Capacity: new FormControl<number | null | undefined>(undefined),
			ManagedByFirewallManager: new FormControl<boolean | null | undefined>(undefined),
			LabelNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A rule group that's defined for an Firewall Manager WAF policy. */
	export interface FirewallManagerRuleGroup {

		/** Required */
		Name: string;

		/** Required */
		Priority: number;

		/** Required */
		FirewallManagerStatement: FirewallManagerStatement;

		/** Required */
		OverrideAction: OverrideAction;

		/** Required */
		VisibilityConfig: VisibilityConfig;
	}

	/** A rule group that's defined for an Firewall Manager WAF policy. */
	export interface FirewallManagerRuleGroupFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateFirewallManagerRuleGroupFormGroup() {
		return new FormGroup<FirewallManagerRuleGroupFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The processing guidance for an Firewall Manager rule. This is like a regular rule <a>Statement</a>, but it can only contain a single rule group reference. */
	export interface FirewallManagerStatement {
		ManagedRuleGroupStatement?: ManagedRuleGroupStatement;
		RuleGroupReferenceStatement?: RuleGroupReferenceStatement;
	}

	/** The processing guidance for an Firewall Manager rule. This is like a regular rule <a>Statement</a>, but it can only contain a single rule group reference. */
	export interface FirewallManagerStatementFormProperties {
	}
	export function CreateFirewallManagerStatementFormGroup() {
		return new FormGroup<FirewallManagerStatementFormProperties>({
		});

	}

	export interface GetWebACLRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;

		/** Required */
		Id: string;
	}
	export interface GetWebACLRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateGetWebACLRequestFormGroup() {
		return new FormGroup<GetWebACLRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetWebACLForResourceResponse {
		WebACL?: WebACL;
	}
	export interface GetWebACLForResourceResponseFormProperties {
	}
	export function CreateGetWebACLForResourceResponseFormGroup() {
		return new FormGroup<GetWebACLForResourceResponseFormProperties>({
		});

	}

	export interface GetWebACLForResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface GetWebACLForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetWebACLForResourceRequestFormGroup() {
		return new FormGroup<GetWebACLForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAPIKeysResponse {
		NextMarker?: string;
		APIKeySummaries?: Array<APIKeySummary>;
		ApplicationIntegrationURL?: string;
	}
	export interface ListAPIKeysResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		ApplicationIntegrationURL: FormControl<string | null | undefined>,
	}
	export function CreateListAPIKeysResponseFormGroup() {
		return new FormGroup<ListAPIKeysResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			ApplicationIntegrationURL: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Information for a single API key. </p> <p>API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p> */
	export interface APIKeySummary {
		TokenDomains?: Array<string>;
		APIKey?: string;
		CreationTimestamp?: Date;
		Version?: number | null;
	}

	/** <p>Information for a single API key. </p> <p>API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p> */
	export interface APIKeySummaryFormProperties {
		APIKey: FormControl<string | null | undefined>,
		CreationTimestamp: FormControl<Date | null | undefined>,
		Version: FormControl<number | null | undefined>,
	}
	export function CreateAPIKeySummaryFormGroup() {
		return new FormGroup<APIKeySummaryFormProperties>({
			APIKey: new FormControl<string | null | undefined>(undefined),
			CreationTimestamp: new FormControl<Date | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAPIKeysRequest {

		/** Required */
		Scope: Scope;
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListAPIKeysRequestFormProperties {

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListAPIKeysRequestFormGroup() {
		return new FormGroup<ListAPIKeysRequestFormProperties>({
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAvailableManagedRuleGroupVersionsResponse {
		NextMarker?: string;
		Versions?: Array<ManagedRuleGroupVersion>;
		CurrentDefaultVersion?: string;
	}
	export interface ListAvailableManagedRuleGroupVersionsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		CurrentDefaultVersion: FormControl<string | null | undefined>,
	}
	export function CreateListAvailableManagedRuleGroupVersionsResponseFormGroup() {
		return new FormGroup<ListAvailableManagedRuleGroupVersionsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			CurrentDefaultVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a single version of a managed rule group.  */
	export interface ManagedRuleGroupVersion {
		Name?: string;
		LastUpdateTimestamp?: Date;
	}

	/** Describes a single version of a managed rule group.  */
	export interface ManagedRuleGroupVersionFormProperties {
		Name: FormControl<string | null | undefined>,
		LastUpdateTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateManagedRuleGroupVersionFormGroup() {
		return new FormGroup<ManagedRuleGroupVersionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			LastUpdateTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAvailableManagedRuleGroupVersionsRequest {

		/** Required */
		VendorName: string;

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListAvailableManagedRuleGroupVersionsRequestFormProperties {

		/** Required */
		VendorName: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListAvailableManagedRuleGroupVersionsRequestFormGroup() {
		return new FormGroup<ListAvailableManagedRuleGroupVersionsRequestFormProperties>({
			VendorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAvailableManagedRuleGroupsResponse {
		NextMarker?: string;
		ManagedRuleGroups?: Array<ManagedRuleGroupSummary>;
	}
	export interface ListAvailableManagedRuleGroupsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListAvailableManagedRuleGroupsResponseFormGroup() {
		return new FormGroup<ListAvailableManagedRuleGroupsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** High-level information about a managed rule group, returned by <a>ListAvailableManagedRuleGroups</a>. This provides information like the name and vendor name, that you provide when you add a <a>ManagedRuleGroupStatement</a> to a web ACL. Managed rule groups include Amazon Web Services Managed Rules rule groups and Amazon Web Services Marketplace managed rule groups. To use any Amazon Web Services Marketplace managed rule group, first subscribe to the rule group through Amazon Web Services Marketplace.  */
	export interface ManagedRuleGroupSummary {
		VendorName?: string;
		Name?: string;
		VersioningSupported?: boolean | null;
		Description?: string;
	}

	/** High-level information about a managed rule group, returned by <a>ListAvailableManagedRuleGroups</a>. This provides information like the name and vendor name, that you provide when you add a <a>ManagedRuleGroupStatement</a> to a web ACL. Managed rule groups include Amazon Web Services Managed Rules rule groups and Amazon Web Services Marketplace managed rule groups. To use any Amazon Web Services Marketplace managed rule group, first subscribe to the rule group through Amazon Web Services Marketplace.  */
	export interface ManagedRuleGroupSummaryFormProperties {
		VendorName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VersioningSupported: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateManagedRuleGroupSummaryFormGroup() {
		return new FormGroup<ManagedRuleGroupSummaryFormProperties>({
			VendorName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VersioningSupported: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAvailableManagedRuleGroupsRequest {

		/** Required */
		Scope: Scope;
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListAvailableManagedRuleGroupsRequestFormProperties {

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListAvailableManagedRuleGroupsRequestFormGroup() {
		return new FormGroup<ListAvailableManagedRuleGroupsRequestFormProperties>({
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListIPSetsResponse {
		NextMarker?: string;
		IPSets?: Array<IPSetSummary>;
	}
	export interface ListIPSetsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListIPSetsResponseFormGroup() {
		return new FormGroup<ListIPSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIPSetsRequest {

		/** Required */
		Scope: Scope;
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListIPSetsRequestFormProperties {

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListIPSetsRequestFormGroup() {
		return new FormGroup<ListIPSetsRequestFormProperties>({
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListLoggingConfigurationsResponse {
		LoggingConfigurations?: Array<LoggingConfiguration>;
		NextMarker?: string;
	}
	export interface ListLoggingConfigurationsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListLoggingConfigurationsResponseFormGroup() {
		return new FormGroup<ListLoggingConfigurationsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLoggingConfigurationsRequest {

		/** Required */
		Scope: Scope;
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListLoggingConfigurationsRequestFormProperties {

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListLoggingConfigurationsRequestFormGroup() {
		return new FormGroup<ListLoggingConfigurationsRequestFormProperties>({
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListManagedRuleSetsResponse {
		NextMarker?: string;
		ManagedRuleSets?: Array<ManagedRuleSetSummary>;
	}
	export interface ListManagedRuleSetsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListManagedRuleSetsResponseFormGroup() {
		return new FormGroup<ListManagedRuleSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>High-level information for a managed rule set. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note> */
	export interface ManagedRuleSetSummary {
		Name?: string;
		Id?: string;
		Description?: string;
		LockToken?: string;
		ARN?: string;
		LabelNamespace?: string;
	}

	/** <p>High-level information for a managed rule set. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note> */
	export interface ManagedRuleSetSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LockToken: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
		LabelNamespace: FormControl<string | null | undefined>,
	}
	export function CreateManagedRuleSetSummaryFormGroup() {
		return new FormGroup<ManagedRuleSetSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LockToken: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
			LabelNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListManagedRuleSetsRequest {

		/** Required */
		Scope: Scope;
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListManagedRuleSetsRequestFormProperties {

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListManagedRuleSetsRequestFormGroup() {
		return new FormGroup<ListManagedRuleSetsRequestFormProperties>({
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMobileSdkReleasesResponse {
		ReleaseSummaries?: Array<ReleaseSummary>;
		NextMarker?: string;
	}
	export interface ListMobileSdkReleasesResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListMobileSdkReleasesResponseFormGroup() {
		return new FormGroup<ListMobileSdkReleasesResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** High level information for an SDK release.  */
	export interface ReleaseSummary {
		ReleaseVersion?: string;
		Timestamp?: Date;
	}

	/** High level information for an SDK release.  */
	export interface ReleaseSummaryFormProperties {
		ReleaseVersion: FormControl<string | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateReleaseSummaryFormGroup() {
		return new FormGroup<ReleaseSummaryFormProperties>({
			ReleaseVersion: new FormControl<string | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListMobileSdkReleasesRequest {

		/** Required */
		Platform: Platform;
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListMobileSdkReleasesRequestFormProperties {

		/** Required */
		Platform: FormControl<Platform | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListMobileSdkReleasesRequestFormGroup() {
		return new FormGroup<ListMobileSdkReleasesRequestFormProperties>({
			Platform: new FormControl<Platform | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRegexPatternSetsResponse {
		NextMarker?: string;
		RegexPatternSets?: Array<RegexPatternSetSummary>;
	}
	export interface ListRegexPatternSetsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListRegexPatternSetsResponseFormGroup() {
		return new FormGroup<ListRegexPatternSetsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRegexPatternSetsRequest {

		/** Required */
		Scope: Scope;
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListRegexPatternSetsRequestFormProperties {

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListRegexPatternSetsRequestFormGroup() {
		return new FormGroup<ListRegexPatternSetsRequestFormProperties>({
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResourcesForWebACLResponse {
		ResourceArns?: Array<string>;
	}
	export interface ListResourcesForWebACLResponseFormProperties {
	}
	export function CreateListResourcesForWebACLResponseFormGroup() {
		return new FormGroup<ListResourcesForWebACLResponseFormProperties>({
		});

	}

	export interface ListResourcesForWebACLRequest {

		/** Required */
		WebACLArn: string;
		ResourceType?: ResourceType;
	}
	export interface ListResourcesForWebACLRequestFormProperties {

		/** Required */
		WebACLArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateListResourcesForWebACLRequestFormGroup() {
		return new FormGroup<ListResourcesForWebACLRequestFormProperties>({
			WebACLArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
		});

	}

	export enum ResourceType { APPLICATION_LOAD_BALANCER = 0, API_GATEWAY = 1, APPSYNC = 2, COGNITO_USER_POOL = 3, APP_RUNNER_SERVICE = 4, VERIFIED_ACCESS_INSTANCE = 5 }

	export interface ListRuleGroupsResponse {
		NextMarker?: string;
		RuleGroups?: Array<RuleGroupSummary>;
	}
	export interface ListRuleGroupsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListRuleGroupsResponseFormGroup() {
		return new FormGroup<ListRuleGroupsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRuleGroupsRequest {

		/** Required */
		Scope: Scope;
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListRuleGroupsRequestFormProperties {

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListRuleGroupsRequestFormGroup() {
		return new FormGroup<ListRuleGroupsRequestFormProperties>({
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		NextMarker?: string;
		TagInfoForResource?: TagInfoForResource;
	}
	export interface ListTagsForResourceResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The collection of tagging definitions for an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF console. </p> */
	export interface TagInfoForResource {
		ResourceARN?: string;
		TagList?: Array<Tag>;
	}

	/** <p>The collection of tagging definitions for an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF console. </p> */
	export interface TagInfoForResourceFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagInfoForResourceFormGroup() {
		return new FormGroup<TagInfoForResourceFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {
		NextMarker?: string;
		Limit?: number | null;

		/** Required */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListWebACLsResponse {
		NextMarker?: string;
		WebACLs?: Array<WebACLSummary>;
	}
	export interface ListWebACLsResponseFormProperties {
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListWebACLsResponseFormGroup() {
		return new FormGroup<ListWebACLsResponseFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWebACLsRequest {

		/** Required */
		Scope: Scope;
		NextMarker?: string;
		Limit?: number | null;
	}
	export interface ListWebACLsRequestFormProperties {

		/** Required */
		Scope: FormControl<Scope | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListWebACLsRequestFormGroup() {
		return new FormGroup<ListWebACLsRequestFormProperties>({
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutLoggingConfigurationResponse {
		LoggingConfiguration?: LoggingConfiguration;
	}
	export interface PutLoggingConfigurationResponseFormProperties {
	}
	export function CreatePutLoggingConfigurationResponseFormGroup() {
		return new FormGroup<PutLoggingConfigurationResponseFormProperties>({
		});

	}

	export interface PutLoggingConfigurationRequest {

		/** Required */
		LoggingConfiguration: LoggingConfiguration;
	}
	export interface PutLoggingConfigurationRequestFormProperties {
	}
	export function CreatePutLoggingConfigurationRequestFormGroup() {
		return new FormGroup<PutLoggingConfigurationRequestFormProperties>({
		});

	}

	export interface WAFServiceLinkedRoleErrorException {
	}
	export interface WAFServiceLinkedRoleErrorExceptionFormProperties {
	}
	export function CreateWAFServiceLinkedRoleErrorExceptionFormGroup() {
		return new FormGroup<WAFServiceLinkedRoleErrorExceptionFormProperties>({
		});

	}

	export interface WAFLogDestinationPermissionIssueException {
	}
	export interface WAFLogDestinationPermissionIssueExceptionFormProperties {
	}
	export function CreateWAFLogDestinationPermissionIssueExceptionFormGroup() {
		return new FormGroup<WAFLogDestinationPermissionIssueExceptionFormProperties>({
		});

	}

	export interface PutManagedRuleSetVersionsResponse {
		NextLockToken?: string;
	}
	export interface PutManagedRuleSetVersionsResponseFormProperties {
		NextLockToken: FormControl<string | null | undefined>,
	}
	export function CreatePutManagedRuleSetVersionsResponseFormGroup() {
		return new FormGroup<PutManagedRuleSetVersionsResponseFormProperties>({
			NextLockToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutManagedRuleSetVersionsRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;

		/** Required */
		Id: string;

		/** Required */
		LockToken: string;
		RecommendedVersion?: string;
		VersionsToPublish?: VersionsToPublish;
	}
	export interface PutManagedRuleSetVersionsRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		LockToken: FormControl<string | null | undefined>,
		RecommendedVersion: FormControl<string | null | undefined>,
	}
	export function CreatePutManagedRuleSetVersionsRequestFormGroup() {
		return new FormGroup<PutManagedRuleSetVersionsRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LockToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecommendedVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VersionsToPublish {
	}
	export interface VersionsToPublishFormProperties {
	}
	export function CreateVersionsToPublishFormGroup() {
		return new FormGroup<VersionsToPublishFormProperties>({
		});

	}

	export interface PutPermissionPolicyResponse {
	}
	export interface PutPermissionPolicyResponseFormProperties {
	}
	export function CreatePutPermissionPolicyResponseFormGroup() {
		return new FormGroup<PutPermissionPolicyResponseFormProperties>({
		});

	}

	export interface PutPermissionPolicyRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Policy: string;
	}
	export interface PutPermissionPolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutPermissionPolicyRequestFormGroup() {
		return new FormGroup<PutPermissionPolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WAFInvalidPermissionPolicyException {
	}
	export interface WAFInvalidPermissionPolicyExceptionFormProperties {
	}
	export function CreateWAFInvalidPermissionPolicyExceptionFormGroup() {
		return new FormGroup<WAFInvalidPermissionPolicyExceptionFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateIPSetResponse {
		NextLockToken?: string;
	}
	export interface UpdateIPSetResponseFormProperties {
		NextLockToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIPSetResponseFormGroup() {
		return new FormGroup<UpdateIPSetResponseFormProperties>({
			NextLockToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateIPSetRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;

		/** Required */
		Id: string;
		Description?: string;

		/** Required */
		Addresses: Array<string>;

		/** Required */
		LockToken: string;
	}
	export interface UpdateIPSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		LockToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIPSetRequestFormGroup() {
		return new FormGroup<UpdateIPSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			LockToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateManagedRuleSetVersionExpiryDateResponse {
		ExpiringVersion?: string;
		ExpiryTimestamp?: Date;
		NextLockToken?: string;
	}
	export interface UpdateManagedRuleSetVersionExpiryDateResponseFormProperties {
		ExpiringVersion: FormControl<string | null | undefined>,
		ExpiryTimestamp: FormControl<Date | null | undefined>,
		NextLockToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateManagedRuleSetVersionExpiryDateResponseFormGroup() {
		return new FormGroup<UpdateManagedRuleSetVersionExpiryDateResponseFormProperties>({
			ExpiringVersion: new FormControl<string | null | undefined>(undefined),
			ExpiryTimestamp: new FormControl<Date | null | undefined>(undefined),
			NextLockToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateManagedRuleSetVersionExpiryDateRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;

		/** Required */
		Id: string;

		/** Required */
		LockToken: string;

		/** Required */
		VersionToExpire: string;

		/** Required */
		ExpiryTimestamp: Date;
	}
	export interface UpdateManagedRuleSetVersionExpiryDateRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		LockToken: FormControl<string | null | undefined>,

		/** Required */
		VersionToExpire: FormControl<string | null | undefined>,

		/** Required */
		ExpiryTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateManagedRuleSetVersionExpiryDateRequestFormGroup() {
		return new FormGroup<UpdateManagedRuleSetVersionExpiryDateRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LockToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VersionToExpire: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExpiryTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRegexPatternSetResponse {
		NextLockToken?: string;
	}
	export interface UpdateRegexPatternSetResponseFormProperties {
		NextLockToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRegexPatternSetResponseFormGroup() {
		return new FormGroup<UpdateRegexPatternSetResponseFormProperties>({
			NextLockToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRegexPatternSetRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;

		/** Required */
		Id: string;
		Description?: string;

		/** Required */
		RegularExpressionList: Array<Regex>;

		/** Required */
		LockToken: string;
	}
	export interface UpdateRegexPatternSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		LockToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRegexPatternSetRequestFormGroup() {
		return new FormGroup<UpdateRegexPatternSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			LockToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRuleGroupResponse {
		NextLockToken?: string;
	}
	export interface UpdateRuleGroupResponseFormProperties {
		NextLockToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRuleGroupResponseFormGroup() {
		return new FormGroup<UpdateRuleGroupResponseFormProperties>({
			NextLockToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRuleGroupRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;

		/** Required */
		Id: string;
		Description?: string;
		Rules?: Array<Rule>;

		/** Required */
		VisibilityConfig: VisibilityConfig;

		/** Required */
		LockToken: string;
		CustomResponseBodies?: CustomResponseBodies;
	}
	export interface UpdateRuleGroupRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		LockToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRuleGroupRequestFormGroup() {
		return new FormGroup<UpdateRuleGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			LockToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateWebACLResponse {
		NextLockToken?: string;
	}
	export interface UpdateWebACLResponseFormProperties {
		NextLockToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWebACLResponseFormGroup() {
		return new FormGroup<UpdateWebACLResponseFormProperties>({
			NextLockToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWebACLRequest {

		/** Required */
		Name: string;

		/** Required */
		Scope: Scope;

		/** Required */
		Id: string;

		/** Required */
		DefaultAction: DefaultAction;
		Description?: string;
		Rules?: Array<Rule>;

		/** Required */
		VisibilityConfig: VisibilityConfig;

		/** Required */
		LockToken: string;
		CustomResponseBodies?: CustomResponseBodies;
		CaptchaConfig?: CaptchaConfig;
		ChallengeConfig?: ChallengeConfig;
		TokenDomains?: Array<string>;
		AssociationConfig?: AssociationConfig;
	}
	export interface UpdateWebACLRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Scope: FormControl<Scope | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		LockToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWebACLRequestFormGroup() {
		return new FormGroup<UpdateWebACLRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Scope: new FormControl<Scope | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			LockToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AssociatedResourceType { CLOUDFRONT = 0 }

	export enum MapMatchScope { ALL = 0, KEY = 1, VALUE = 2 }


	/** The response body to use in a custom response to a web request. This is referenced by key from <a>CustomResponse</a> <code>CustomResponseBodyKey</code>. */
	export interface CustomResponseBody {

		/** Required */
		ContentType: ResponseContentType;

		/** Required */
		Content: string;
	}

	/** The response body to use in a custom response to a web request. This is referenced by key from <a>CustomResponse</a> <code>CustomResponseBodyKey</code>. */
	export interface CustomResponseBodyFormProperties {

		/** Required */
		ContentType: FormControl<ResponseContentType | null | undefined>,

		/** Required */
		Content: FormControl<string | null | undefined>,
	}
	export function CreateCustomResponseBodyFormGroup() {
		return new FormGroup<CustomResponseBodyFormProperties>({
			ContentType: new FormControl<ResponseContentType | null | undefined>(undefined, [Validators.required]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResponseContentType { TEXT_PLAIN = 0, TEXT_HTML = 1, APPLICATION_JSON = 2 }


	/** <p>Information for a single version of a managed rule set. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note> */
	export interface ManagedRuleSetVersion {
		AssociatedRuleGroupArn?: string;
		Capacity?: number | null;
		ForecastedLifetime?: number | null;
		PublishTimestamp?: Date;
		LastUpdateTimestamp?: Date;
		ExpiryTimestamp?: Date;
	}

	/** <p>Information for a single version of a managed rule set. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note> */
	export interface ManagedRuleSetVersionFormProperties {
		AssociatedRuleGroupArn: FormControl<string | null | undefined>,
		Capacity: FormControl<number | null | undefined>,
		ForecastedLifetime: FormControl<number | null | undefined>,
		PublishTimestamp: FormControl<Date | null | undefined>,
		LastUpdateTimestamp: FormControl<Date | null | undefined>,
		ExpiryTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateManagedRuleSetVersionFormGroup() {
		return new FormGroup<ManagedRuleSetVersionFormProperties>({
			AssociatedRuleGroupArn: new FormControl<string | null | undefined>(undefined),
			Capacity: new FormControl<number | null | undefined>(undefined),
			ForecastedLifetime: new FormControl<number | null | undefined>(undefined),
			PublishTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdateTimestamp: new FormControl<Date | null | undefined>(undefined),
			ExpiryTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>Customizes the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default size is 16 KB (16,384 kilobytes). </p> <note> <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note> <p>This is used in the <code>AssociationConfig</code> of the web ACL. </p> */
	export interface RequestBodyAssociatedResourceTypeConfig {

		/** Required */
		DefaultSizeInspectionLimit: SizeInspectionLimit;
	}

	/** <p>Customizes the maximum size of the request body that your protected CloudFront distributions forward to WAF for inspection. The default size is 16 KB (16,384 kilobytes). </p> <note> <p>You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see <a href="http://aws.amazon.com/waf/pricing/">WAF Pricing</a>.</p> </note> <p>This is used in the <code>AssociationConfig</code> of the web ACL. </p> */
	export interface RequestBodyAssociatedResourceTypeConfigFormProperties {

		/** Required */
		DefaultSizeInspectionLimit: FormControl<SizeInspectionLimit | null | undefined>,
	}
	export function CreateRequestBodyAssociatedResourceTypeConfigFormGroup() {
		return new FormGroup<RequestBodyAssociatedResourceTypeConfigFormProperties>({
			DefaultSizeInspectionLimit: new FormControl<SizeInspectionLimit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SizeInspectionLimit { KB_16 = 0, KB_32 = 1, KB_48 = 2, KB_64 = 3 }


	/** <p>A version of the named managed rule group, that the rule group's vendor publishes for use by customers. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note> */
	export interface VersionToPublish {
		AssociatedRuleGroupArn?: string;
		ForecastedLifetime?: number | null;
	}

	/** <p>A version of the named managed rule group, that the rule group's vendor publishes for use by customers. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note> */
	export interface VersionToPublishFormProperties {
		AssociatedRuleGroupArn: FormControl<string | null | undefined>,
		ForecastedLifetime: FormControl<number | null | undefined>,
	}
	export function CreateVersionToPublishFormGroup() {
		return new FormGroup<VersionToPublishFormProperties>({
			AssociatedRuleGroupArn: new FormControl<string | null | undefined>(undefined),
			ForecastedLifetime: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates a web ACL with a regional application resource, to protect the resource. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance. </p> <p>For Amazon CloudFront, don't use this call. Instead, use your CloudFront distribution configuration. To associate a web ACL, in the CloudFront call <code>UpdateDistribution</code>, set the web ACL ID to the Amazon Resource Name (ARN) of the web ACL. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a> in the <i>Amazon CloudFront Developer Guide</i>. </p> <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.AssociateWebACL
		 * @return {AssociateWebACLResponse} Success
		 */
		AssociateWebACL(requestBody: AssociateWebACLRequest): Observable<AssociateWebACLResponse> {
			return this.http.post<AssociateWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.AssociateWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the web ACL capacity unit (WCU) requirements for a specified scope and set of rules. You can use this to check the capacity requirements for the rules you want to use in a <a>RuleGroup</a> or <a>WebACL</a>. </p> <p>WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-waf-capacity-units.html">WAF web ACL capacity units (WCU)</a> in the <i>WAF Developer Guide</i>. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.CheckCapacity
		 * @return {CheckCapacityResponse} Success
		 */
		CheckCapacity(requestBody: CheckCapacityRequest): Observable<CheckCapacityResponse> {
			return this.http.post<CheckCapacityResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.CheckCapacity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an API key that contains a set of token domains.</p> <p>API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p> <p>You can use a single key for up to 5 domains. After you generate a key, you can copy it for use in your JavaScript integration. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.CreateAPIKey
		 * @return {CreateAPIKeyResponse} Success
		 */
		CreateAPIKey(requestBody: CreateAPIKeyRequest): Observable<CreateAPIKeyResponse> {
			return this.http.post<CreateAPIKeyResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.CreateAPIKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an <a>IPSet</a>, which you use to identify web requests that originate from specific IP addresses or ranges of IP addresses. For example, if you're receiving a lot of requests from a ranges of IP addresses, you can configure WAF to block them using an IPSet that lists those IP addresses.
		 * Post #X-Amz-Target=AWSWAF_20190729.CreateIPSet
		 * @return {CreateIPSetResponse} Success
		 */
		CreateIPSet(requestBody: CreateIPSetRequest): Observable<CreateIPSetResponse> {
			return this.http.post<CreateIPSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.CreateIPSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a <a>RegexPatternSet</a>, which you reference in a <a>RegexPatternSetReferenceStatement</a>, to have WAF inspect a web request component for the specified patterns.
		 * Post #X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet
		 * @return {CreateRegexPatternSetResponse} Success
		 */
		CreateRegexPatternSet(requestBody: CreateRegexPatternSetRequest): Observable<CreateRegexPatternSetResponse> {
			return this.http.post<CreateRegexPatternSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.CreateRegexPatternSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a <a>RuleGroup</a> per the specifications provided. </p> <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.CreateRuleGroup
		 * @return {CreateRuleGroupResponse} Success
		 */
		CreateRuleGroup(requestBody: CreateRuleGroupRequest): Observable<CreateRuleGroupResponse> {
			return this.http.post<CreateRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.CreateRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a <a>WebACL</a> per the specifications provided.</p> <p> A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.CreateWebACL
		 * @return {CreateWebACLResponse} Success
		 */
		CreateWebACL(requestBody: CreateWebACLRequest): Observable<CreateWebACLResponse> {
			return this.http.post<CreateWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.CreateWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes all rule groups that are managed by Firewall Manager for the specified web ACL. </p> <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified <a>WebACL</a>. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups
		 * @return {DeleteFirewallManagerRuleGroupsResponse} Success
		 */
		DeleteFirewallManagerRuleGroups(requestBody: DeleteFirewallManagerRuleGroupsRequest): Observable<DeleteFirewallManagerRuleGroupsResponse> {
			return this.http.post<DeleteFirewallManagerRuleGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DeleteFirewallManagerRuleGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified <a>IPSet</a>.
		 * Post #X-Amz-Target=AWSWAF_20190729.DeleteIPSet
		 * @return {DeleteIPSetResponse} Success
		 */
		DeleteIPSet(requestBody: DeleteIPSetRequest): Observable<DeleteIPSetResponse> {
			return this.http.post<DeleteIPSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DeleteIPSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the <a>LoggingConfiguration</a> from the specified web ACL.
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
		 * Deletes the specified <a>RegexPatternSet</a>.
		 * Post #X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet
		 * @return {DeleteRegexPatternSetResponse} Success
		 */
		DeleteRegexPatternSet(requestBody: DeleteRegexPatternSetRequest): Observable<DeleteRegexPatternSetResponse> {
			return this.http.post<DeleteRegexPatternSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DeleteRegexPatternSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified <a>RuleGroup</a>.
		 * Post #X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup
		 * @return {DeleteRuleGroupResponse} Success
		 */
		DeleteRuleGroup(requestBody: DeleteRuleGroupRequest): Observable<DeleteRuleGroupResponse> {
			return this.http.post<DeleteRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DeleteRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified <a>WebACL</a>. </p> <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified <a>WebACL</a>. </p> <note> <p>Before deleting any web ACL, first disassociate it from all resources.</p> <ul> <li> <p>To retrieve a list of the resources that are associated with a web ACL, use the following calls:</p> <ul> <li> <p>For regional resources, call <a>ListResourcesForWebACL</a>.</p> </li> <li> <p>For Amazon CloudFront distributions, use the CloudFront call <code>ListDistributionsByWebACLId</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributionsByWebACLId.html">ListDistributionsByWebACLId</a> in the <i>Amazon CloudFront API Reference</i>. </p> </li> </ul> </li> <li> <p>To disassociate a resource from a web ACL, use the following calls:</p> <ul> <li> <p>For regional resources, call <a>DisassociateWebACL</a>.</p> </li> <li> <p>For Amazon CloudFront distributions, provide an empty web ACL ID in the CloudFront call <code>UpdateDistribution</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a> in the <i>Amazon CloudFront API Reference</i>. </p> </li> </ul> </li> </ul> </note>
		 * Post #X-Amz-Target=AWSWAF_20190729.DeleteWebACL
		 * @return {DeleteWebACLResponse} Success
		 */
		DeleteWebACL(requestBody: DeleteWebACLRequest): Observable<DeleteWebACLResponse> {
			return this.http.post<DeleteWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DeleteWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides high-level information for the Amazon Web Services Managed Rules rule groups and Amazon Web Services Marketplace managed rule groups.
		 * Post #X-Amz-Target=AWSWAF_20190729.DescribeAllManagedProducts
		 * @return {DescribeAllManagedProductsResponse} Success
		 */
		DescribeAllManagedProducts(requestBody: DescribeAllManagedProductsRequest): Observable<DescribeAllManagedProductsResponse> {
			return this.http.post<DescribeAllManagedProductsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DescribeAllManagedProducts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides high-level information for the managed rule groups owned by a specific vendor.
		 * Post #X-Amz-Target=AWSWAF_20190729.DescribeManagedProductsByVendor
		 * @return {DescribeManagedProductsByVendorResponse} Success
		 */
		DescribeManagedProductsByVendor(requestBody: DescribeManagedProductsByVendorRequest): Observable<DescribeManagedProductsByVendorResponse> {
			return this.http.post<DescribeManagedProductsByVendorResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DescribeManagedProductsByVendor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides high-level information for a managed rule group, including descriptions of the rules.
		 * Post #X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup
		 * @return {DescribeManagedRuleGroupResponse} Success
		 */
		DescribeManagedRuleGroup(requestBody: DescribeManagedRuleGroupRequest): Observable<DescribeManagedRuleGroupResponse> {
			return this.http.post<DescribeManagedRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DescribeManagedRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociates the specified regional application resource from any existing web ACL association. A resource can have at most one web ACL association. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance. </p> <p>For Amazon CloudFront, don't use this call. Instead, use your CloudFront distribution configuration. To disassociate a web ACL, provide an empty web ACL ID in the CloudFront call <code>UpdateDistribution</code>. For information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a> in the <i>Amazon CloudFront API Reference</i>. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.DisassociateWebACL
		 * @return {DisassociateWebACLResponse} Success
		 */
		DisassociateWebACL(requestBody: DisassociateWebACLRequest): Observable<DisassociateWebACLResponse> {
			return this.http.post<DisassociateWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.DisassociateWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates a presigned download URL for the specified release of the mobile SDK.</p> <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl
		 * @return {GenerateMobileSdkReleaseUrlResponse} Success
		 */
		GenerateMobileSdkReleaseUrl(requestBody: GenerateMobileSdkReleaseUrlRequest): Observable<GenerateMobileSdkReleaseUrlResponse> {
			return this.http.post<GenerateMobileSdkReleaseUrlResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GenerateMobileSdkReleaseUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns your API key in decrypted form. Use this to check the token domains that you have defined for the key. </p> <p>API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey
		 * @return {GetDecryptedAPIKeyResponse} Success
		 */
		GetDecryptedAPIKey(requestBody: GetDecryptedAPIKeyRequest): Observable<GetDecryptedAPIKeyResponse> {
			return this.http.post<GetDecryptedAPIKeyResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetDecryptedAPIKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the specified <a>IPSet</a>.
		 * Post #X-Amz-Target=AWSWAF_20190729.GetIPSet
		 * @return {GetIPSetResponse} Success
		 */
		GetIPSet(requestBody: GetIPSetRequest): Observable<GetIPSetResponse> {
			return this.http.post<GetIPSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetIPSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the <a>LoggingConfiguration</a> for the specified web ACL.
		 * Post #X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration
		 * @return {GetLoggingConfigurationResponse} Success
		 */
		GetLoggingConfiguration(requestBody: GetLoggingConfigurationRequest): Observable<GetLoggingConfigurationResponse> {
			return this.http.post<GetLoggingConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the specified managed rule set. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>
		 * Post #X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet
		 * @return {GetManagedRuleSetResponse} Success
		 */
		GetManagedRuleSet(requestBody: GetManagedRuleSetRequest): Observable<GetManagedRuleSetResponse> {
			return this.http.post<GetManagedRuleSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetManagedRuleSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves information for the specified mobile SDK release, including release notes and tags.</p> <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease
		 * @return {GetMobileSdkReleaseResponse} Success
		 */
		GetMobileSdkRelease(requestBody: GetMobileSdkReleaseRequest): Observable<GetMobileSdkReleaseResponse> {
			return this.http.post<GetMobileSdkReleaseResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetMobileSdkRelease', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Retrieves the IP addresses that are currently blocked by a rate-based rule instance. This is only available for rate-based rules that aggregate solely on the IP address or on the forwarded IP address. </p> <p>The maximum number of addresses that can be blocked for a single rate-based rule instance is 10,000. If more than 10,000 addresses exceed the rate limit, those with the highest rates are blocked.</p> <p>For a rate-based rule that you've defined inside a rule group, provide the name of the rule group reference statement in your request, in addition to the rate-based rule name and the web ACL name. </p> <p>WAF monitors web requests and manages keys independently for each unique combination of web ACL, optional rule group, and rate-based rule. For example, if you define a rate-based rule inside a rule group, and then use the rule group in a web ACL, WAF monitors web requests and manages keys for that web ACL, rule group reference statement, and rate-based rule instance. If you use the same rule group in a second web ACL, WAF monitors web requests and manages keys for this second usage completely independent of your first. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys
		 * @return {GetRateBasedStatementManagedKeysResponse} Success
		 */
		GetRateBasedStatementManagedKeys(requestBody: GetRateBasedStatementManagedKeysRequest): Observable<GetRateBasedStatementManagedKeysResponse> {
			return this.http.post<GetRateBasedStatementManagedKeysResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetRateBasedStatementManagedKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the specified <a>RegexPatternSet</a>.
		 * Post #X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet
		 * @return {GetRegexPatternSetResponse} Success
		 */
		GetRegexPatternSet(requestBody: GetRegexPatternSetRequest): Observable<GetRegexPatternSetResponse> {
			return this.http.post<GetRegexPatternSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetRegexPatternSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the specified <a>RuleGroup</a>.
		 * Post #X-Amz-Target=AWSWAF_20190729.GetRuleGroup
		 * @return {GetRuleGroupResponse} Success
		 */
		GetRuleGroup(requestBody: GetRuleGroupRequest): Observable<GetRuleGroupResponse> {
			return this.http.post<GetRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets detailed information about a specified number of requests--a sample--that WAF randomly selects from among the first 5,000 requests that your Amazon Web Services resource received during a time range that you choose. You can specify a sample size of up to 500 requests, and you can specify any time range in the previous three hours.</p> <p> <code>GetSampledRequests</code> returns a time range, which is usually the time range that you specified. However, if your resource (such as a CloudFront distribution) received 5,000 requests before the specified time range elapsed, <code>GetSampledRequests</code> returns an updated time range. This new time range indicates the actual period during which WAF selected the requests in the sample.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.GetSampledRequests
		 * @return {GetSampledRequestsResponse} Success
		 */
		GetSampledRequests(requestBody: GetSampledRequestsRequest): Observable<GetSampledRequestsResponse> {
			return this.http.post<GetSampledRequestsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetSampledRequests', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the specified <a>WebACL</a>.
		 * Post #X-Amz-Target=AWSWAF_20190729.GetWebACL
		 * @return {GetWebACLResponse} Success
		 */
		GetWebACL(requestBody: GetWebACLRequest): Observable<GetWebACLResponse> {
			return this.http.post<GetWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the <a>WebACL</a> for the specified resource.
		 * Post #X-Amz-Target=AWSWAF_20190729.GetWebACLForResource
		 * @return {GetWebACLForResourceResponse} Success
		 */
		GetWebACLForResource(requestBody: GetWebACLForResourceRequest): Observable<GetWebACLForResourceResponse> {
			return this.http.post<GetWebACLForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.GetWebACLForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a list of the API keys that you've defined for the specified scope. </p> <p>API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.ListAPIKeys
		 * @return {ListAPIKeysResponse} Success
		 */
		ListAPIKeys(requestBody: ListAPIKeysRequest): Observable<ListAPIKeysResponse> {
			return this.http.post<ListAPIKeysResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListAPIKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the available versions for the specified managed rule group.
		 * Post #X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions
		 * @return {ListAvailableManagedRuleGroupVersionsResponse} Success
		 */
		ListAvailableManagedRuleGroupVersions(requestBody: ListAvailableManagedRuleGroupVersionsRequest): Observable<ListAvailableManagedRuleGroupVersionsResponse> {
			return this.http.post<ListAvailableManagedRuleGroupVersionsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroupVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves an array of managed rule groups that are available for you to use. This list includes all Amazon Web Services Managed Rules rule groups and all of the Amazon Web Services Marketplace managed rule groups that you're subscribed to.
		 * Post #X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups
		 * @return {ListAvailableManagedRuleGroupsResponse} Success
		 */
		ListAvailableManagedRuleGroups(requestBody: ListAvailableManagedRuleGroupsRequest): Observable<ListAvailableManagedRuleGroupsResponse> {
			return this.http.post<ListAvailableManagedRuleGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListAvailableManagedRuleGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves an array of <a>IPSetSummary</a> objects for the IP sets that you manage.
		 * Post #X-Amz-Target=AWSWAF_20190729.ListIPSets
		 * @return {ListIPSetsResponse} Success
		 */
		ListIPSets(requestBody: ListIPSetsRequest): Observable<ListIPSetsResponse> {
			return this.http.post<ListIPSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListIPSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves an array of your <a>LoggingConfiguration</a> objects.
		 * Post #X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations
		 * @return {ListLoggingConfigurationsResponse} Success
		 */
		ListLoggingConfigurations(requestBody: ListLoggingConfigurationsRequest): Observable<ListLoggingConfigurationsResponse> {
			return this.http.post<ListLoggingConfigurationsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListLoggingConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the managed rule sets that you own. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>
		 * Post #X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets
		 * @return {ListManagedRuleSetsResponse} Success
		 */
		ListManagedRuleSets(requestBody: ListManagedRuleSetsRequest): Observable<ListManagedRuleSetsResponse> {
			return this.http.post<ListManagedRuleSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListManagedRuleSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a list of the available releases for the mobile SDK and the specified device platform. </p> <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases
		 * @return {ListMobileSdkReleasesResponse} Success
		 */
		ListMobileSdkReleases(requestBody: ListMobileSdkReleasesRequest): Observable<ListMobileSdkReleasesResponse> {
			return this.http.post<ListMobileSdkReleasesResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListMobileSdkReleases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves an array of <a>RegexPatternSetSummary</a> objects for the regex pattern sets that you manage.
		 * Post #X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets
		 * @return {ListRegexPatternSetsResponse} Success
		 */
		ListRegexPatternSets(requestBody: ListRegexPatternSetsRequest): Observable<ListRegexPatternSetsResponse> {
			return this.http.post<ListRegexPatternSetsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListRegexPatternSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves an array of the Amazon Resource Names (ARNs) for the regional resources that are associated with the specified web ACL. If you want the list of Amazon CloudFront resources, use the CloudFront call <code>ListDistributionsByWebACLId</code>.
		 * Post #X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL
		 * @return {ListResourcesForWebACLResponse} Success
		 */
		ListResourcesForWebACL(requestBody: ListResourcesForWebACLRequest): Observable<ListResourcesForWebACLResponse> {
			return this.http.post<ListResourcesForWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListResourcesForWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves an array of <a>RuleGroupSummary</a> objects for the rule groups that you manage.
		 * Post #X-Amz-Target=AWSWAF_20190729.ListRuleGroups
		 * @return {ListRuleGroupsResponse} Success
		 */
		ListRuleGroups(requestBody: ListRuleGroupsRequest): Observable<ListRuleGroupsResponse> {
			return this.http.post<ListRuleGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListRuleGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the <a>TagInfoForResource</a> for the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF console. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves an array of <a>WebACLSummary</a> objects for the web ACLs that you manage.
		 * Post #X-Amz-Target=AWSWAF_20190729.ListWebACLs
		 * @return {ListWebACLsResponse} Success
		 */
		ListWebACLs(requestBody: ListWebACLsRequest): Observable<ListWebACLsResponse> {
			return this.http.post<ListWebACLsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.ListWebACLs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables the specified <a>LoggingConfiguration</a>, to start logging from a web ACL, according to the configuration provided. </p> <note> <p>This operation completely replaces any mutable specifications that you already have for a logging configuration with the ones that you provide to this call. </p> <p>To modify an existing logging configuration, do the following: </p> <ol> <li> <p>Retrieve it by calling <a>GetLoggingConfiguration</a> </p> </li> <li> <p>Update its settings as needed</p> </li> <li> <p>Provide the complete logging configuration specification to this call</p> </li> </ol> </note> <note> <p>You can define one logging destination per web ACL.</p> </note> <p>You can access information about the traffic that WAF inspects using the following steps:</p> <ol> <li> <p>Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose. </p> <p>The name that you give the destination must start with <code>aws-waf-logs-</code>. Depending on the type of destination, you might need to configure additional settings or permissions. </p> <p>For configuration requirements and pricing information for each destination type, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic</a> in the <i>WAF Developer Guide</i>.</p> </li> <li> <p>Associate your logging destination to your web ACL using a <code>PutLoggingConfiguration</code> request.</p> </li> </ol> <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, WAF creates an additional role or policy that is required to write logs to the logging destination. For an Amazon CloudWatch Logs log group, WAF creates a resource policy on the log group. For an Amazon S3 bucket, WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, WAF creates a service-linked role.</p> <p>For additional information about web ACL logging, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging web ACL traffic information</a> in the <i>WAF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration
		 * @return {PutLoggingConfigurationResponse} Success
		 */
		PutLoggingConfiguration(requestBody: PutLoggingConfigurationRequest): Observable<PutLoggingConfigurationResponse> {
			return this.http.post<PutLoggingConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.PutLoggingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Defines the versions of your managed rule set that you are offering to the customers. Customers see your offerings as managed rule groups with versioning.</p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note> <p>Customers retrieve their managed rule group list by calling <a>ListAvailableManagedRuleGroups</a>. The name that you provide here for your managed rule set is the name the customer sees for the corresponding managed rule group. Customers can retrieve the available versions for a managed rule group by calling <a>ListAvailableManagedRuleGroupVersions</a>. You provide a rule group specification for each version. For each managed rule set, you must specify a version that you recommend using. </p> <p>To initiate the expiration of a managed rule group version, use <a>UpdateManagedRuleSetVersionExpiryDate</a>.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions
		 * @return {PutManagedRuleSetVersionsResponse} Success
		 */
		PutManagedRuleSetVersions(requestBody: PutManagedRuleSetVersionsRequest): Observable<PutManagedRuleSetVersionsResponse> {
			return this.http.post<PutManagedRuleSetVersionsResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.PutManagedRuleSetVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches an IAM policy to the specified resource. Use this to share a rule group across accounts.</p> <p>You must be the owner of the rule group to perform this operation.</p> <p>This action is subject to the following restrictions:</p> <ul> <li> <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p> </li> <li> <p>The ARN in the request must be a valid WAF <a>RuleGroup</a> ARN and the rule group must exist in the same Region.</p> </li> <li> <p>The user making the request must be the owner of the rule group.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy
		 * @return {PutPermissionPolicyResponse} Success
		 */
		PutPermissionPolicy(requestBody: PutPermissionPolicyRequest): Observable<PutPermissionPolicyResponse> {
			return this.http.post<PutPermissionPolicyResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.PutPermissionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates tags with the specified Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can't manage or view tags through the WAF console. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates tags from an Amazon Web Services resource. Tags are key:value pairs that you can associate with Amazon Web Services resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each Amazon Web Services resource.
		 * Post #X-Amz-Target=AWSWAF_20190729.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified <a>IPSet</a>. </p> <note> <p>This operation completely replaces the mutable specifications that you already have for the IP set with the ones that you provide to this call. </p> <p>To modify an IP set, do the following: </p> <ol> <li> <p>Retrieve it by calling <a>GetIPSet</a> </p> </li> <li> <p>Update its settings as needed</p> </li> <li> <p>Provide the complete IP set specification to this call</p> </li> </ol> </note> <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.UpdateIPSet
		 * @return {UpdateIPSetResponse} Success
		 */
		UpdateIPSet(requestBody: UpdateIPSetRequest): Observable<UpdateIPSetResponse> {
			return this.http.post<UpdateIPSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.UpdateIPSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the expiration information for your managed rule set. Use this to initiate the expiration of a managed rule group version. After you initiate expiration for a version, WAF excludes it from the response to <a>ListAvailableManagedRuleGroupVersions</a> for the managed rule group. </p> <note> <p>This is intended for use only by vendors of managed rule sets. Vendors are Amazon Web Services and Amazon Web Services Marketplace sellers. </p> <p>Vendors, you can use the managed rule set APIs to provide controlled rollout of your versioned managed rule group offerings for your customers. The APIs are <code>ListManagedRuleSets</code>, <code>GetManagedRuleSet</code>, <code>PutManagedRuleSetVersions</code>, and <code>UpdateManagedRuleSetVersionExpiryDate</code>.</p> </note>
		 * Post #X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate
		 * @return {UpdateManagedRuleSetVersionExpiryDateResponse} Success
		 */
		UpdateManagedRuleSetVersionExpiryDate(requestBody: UpdateManagedRuleSetVersionExpiryDateRequest): Observable<UpdateManagedRuleSetVersionExpiryDateResponse> {
			return this.http.post<UpdateManagedRuleSetVersionExpiryDateResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified <a>RegexPatternSet</a>.</p> <note> <p>This operation completely replaces the mutable specifications that you already have for the regex pattern set with the ones that you provide to this call. </p> <p>To modify a regex pattern set, do the following: </p> <ol> <li> <p>Retrieve it by calling <a>GetRegexPatternSet</a> </p> </li> <li> <p>Update its settings as needed</p> </li> <li> <p>Provide the complete regex pattern set specification to this call</p> </li> </ol> </note> <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>
		 * Post #X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet
		 * @return {UpdateRegexPatternSetResponse} Success
		 */
		UpdateRegexPatternSet(requestBody: UpdateRegexPatternSetRequest): Observable<UpdateRegexPatternSetResponse> {
			return this.http.post<UpdateRegexPatternSetResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.UpdateRegexPatternSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified <a>RuleGroup</a>.</p> <note> <p>This operation completely replaces the mutable specifications that you already have for the rule group with the ones that you provide to this call. </p> <p>To modify a rule group, do the following: </p> <ol> <li> <p>Retrieve it by calling <a>GetRuleGroup</a> </p> </li> <li> <p>Update its settings as needed</p> </li> <li> <p>Provide the complete rule group specification to this call</p> </li> </ol> </note> <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p> <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup
		 * @return {UpdateRuleGroupResponse} Success
		 */
		UpdateRuleGroup(requestBody: UpdateRuleGroupRequest): Observable<UpdateRuleGroupResponse> {
			return this.http.post<UpdateRuleGroupResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.UpdateRuleGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified <a>WebACL</a>. While updating a web ACL, WAF provides continuous coverage to the resources that you have associated with the web ACL. </p> <note> <p>This operation completely replaces the mutable specifications that you already have for the web ACL with the ones that you provide to this call. </p> <p>To modify a web ACL, do the following: </p> <ol> <li> <p>Retrieve it by calling <a>GetWebACL</a> </p> </li> <li> <p>Update its settings as needed</p> </li> <li> <p>Provide the complete web ACL specification to this call</p> </li> </ol> </note> <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p> <p> A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has an action defined (allow, block, or count) for requests that match the statement of the rule. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance. </p>
		 * Post #X-Amz-Target=AWSWAF_20190729.UpdateWebACL
		 * @return {UpdateWebACLResponse} Success
		 */
		UpdateWebACL(requestBody: UpdateWebACLRequest): Observable<UpdateWebACLResponse> {
			return this.http.post<UpdateWebACLResponse>(this.baseUri + '#X-Amz-Target=AWSWAF_20190729.UpdateWebACL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateWebACLX_Amz_Target { 'AWSWAF_20190729.AssociateWebACL' = 0 }

	export enum CheckCapacityX_Amz_Target { 'AWSWAF_20190729.CheckCapacity' = 0 }

	export enum CreateAPIKeyX_Amz_Target { 'AWSWAF_20190729.CreateAPIKey' = 0 }

	export enum CreateIPSetX_Amz_Target { 'AWSWAF_20190729.CreateIPSet' = 0 }

	export enum CreateRegexPatternSetX_Amz_Target { 'AWSWAF_20190729.CreateRegexPatternSet' = 0 }

	export enum CreateRuleGroupX_Amz_Target { 'AWSWAF_20190729.CreateRuleGroup' = 0 }

	export enum CreateWebACLX_Amz_Target { 'AWSWAF_20190729.CreateWebACL' = 0 }

	export enum DeleteFirewallManagerRuleGroupsX_Amz_Target { 'AWSWAF_20190729.DeleteFirewallManagerRuleGroups' = 0 }

	export enum DeleteIPSetX_Amz_Target { 'AWSWAF_20190729.DeleteIPSet' = 0 }

	export enum DeleteLoggingConfigurationX_Amz_Target { 'AWSWAF_20190729.DeleteLoggingConfiguration' = 0 }

	export enum DeletePermissionPolicyX_Amz_Target { 'AWSWAF_20190729.DeletePermissionPolicy' = 0 }

	export enum DeleteRegexPatternSetX_Amz_Target { 'AWSWAF_20190729.DeleteRegexPatternSet' = 0 }

	export enum DeleteRuleGroupX_Amz_Target { 'AWSWAF_20190729.DeleteRuleGroup' = 0 }

	export enum DeleteWebACLX_Amz_Target { 'AWSWAF_20190729.DeleteWebACL' = 0 }

	export enum DescribeAllManagedProductsX_Amz_Target { 'AWSWAF_20190729.DescribeAllManagedProducts' = 0 }

	export enum DescribeManagedProductsByVendorX_Amz_Target { 'AWSWAF_20190729.DescribeManagedProductsByVendor' = 0 }

	export enum DescribeManagedRuleGroupX_Amz_Target { 'AWSWAF_20190729.DescribeManagedRuleGroup' = 0 }

	export enum DisassociateWebACLX_Amz_Target { 'AWSWAF_20190729.DisassociateWebACL' = 0 }

	export enum GenerateMobileSdkReleaseUrlX_Amz_Target { 'AWSWAF_20190729.GenerateMobileSdkReleaseUrl' = 0 }

	export enum GetDecryptedAPIKeyX_Amz_Target { 'AWSWAF_20190729.GetDecryptedAPIKey' = 0 }

	export enum GetIPSetX_Amz_Target { 'AWSWAF_20190729.GetIPSet' = 0 }

	export enum GetLoggingConfigurationX_Amz_Target { 'AWSWAF_20190729.GetLoggingConfiguration' = 0 }

	export enum GetManagedRuleSetX_Amz_Target { 'AWSWAF_20190729.GetManagedRuleSet' = 0 }

	export enum GetMobileSdkReleaseX_Amz_Target { 'AWSWAF_20190729.GetMobileSdkRelease' = 0 }

	export enum GetPermissionPolicyX_Amz_Target { 'AWSWAF_20190729.GetPermissionPolicy' = 0 }

	export enum GetRateBasedStatementManagedKeysX_Amz_Target { 'AWSWAF_20190729.GetRateBasedStatementManagedKeys' = 0 }

	export enum GetRegexPatternSetX_Amz_Target { 'AWSWAF_20190729.GetRegexPatternSet' = 0 }

	export enum GetRuleGroupX_Amz_Target { 'AWSWAF_20190729.GetRuleGroup' = 0 }

	export enum GetSampledRequestsX_Amz_Target { 'AWSWAF_20190729.GetSampledRequests' = 0 }

	export enum GetWebACLX_Amz_Target { 'AWSWAF_20190729.GetWebACL' = 0 }

	export enum GetWebACLForResourceX_Amz_Target { 'AWSWAF_20190729.GetWebACLForResource' = 0 }

	export enum ListAPIKeysX_Amz_Target { 'AWSWAF_20190729.ListAPIKeys' = 0 }

	export enum ListAvailableManagedRuleGroupVersionsX_Amz_Target { 'AWSWAF_20190729.ListAvailableManagedRuleGroupVersions' = 0 }

	export enum ListAvailableManagedRuleGroupsX_Amz_Target { 'AWSWAF_20190729.ListAvailableManagedRuleGroups' = 0 }

	export enum ListIPSetsX_Amz_Target { 'AWSWAF_20190729.ListIPSets' = 0 }

	export enum ListLoggingConfigurationsX_Amz_Target { 'AWSWAF_20190729.ListLoggingConfigurations' = 0 }

	export enum ListManagedRuleSetsX_Amz_Target { 'AWSWAF_20190729.ListManagedRuleSets' = 0 }

	export enum ListMobileSdkReleasesX_Amz_Target { 'AWSWAF_20190729.ListMobileSdkReleases' = 0 }

	export enum ListRegexPatternSetsX_Amz_Target { 'AWSWAF_20190729.ListRegexPatternSets' = 0 }

	export enum ListResourcesForWebACLX_Amz_Target { 'AWSWAF_20190729.ListResourcesForWebACL' = 0 }

	export enum ListRuleGroupsX_Amz_Target { 'AWSWAF_20190729.ListRuleGroups' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AWSWAF_20190729.ListTagsForResource' = 0 }

	export enum ListWebACLsX_Amz_Target { 'AWSWAF_20190729.ListWebACLs' = 0 }

	export enum PutLoggingConfigurationX_Amz_Target { 'AWSWAF_20190729.PutLoggingConfiguration' = 0 }

	export enum PutManagedRuleSetVersionsX_Amz_Target { 'AWSWAF_20190729.PutManagedRuleSetVersions' = 0 }

	export enum PutPermissionPolicyX_Amz_Target { 'AWSWAF_20190729.PutPermissionPolicy' = 0 }

	export enum TagResourceX_Amz_Target { 'AWSWAF_20190729.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AWSWAF_20190729.UntagResource' = 0 }

	export enum UpdateIPSetX_Amz_Target { 'AWSWAF_20190729.UpdateIPSet' = 0 }

	export enum UpdateManagedRuleSetVersionExpiryDateX_Amz_Target { 'AWSWAF_20190729.UpdateManagedRuleSetVersionExpiryDate' = 0 }

	export enum UpdateRegexPatternSetX_Amz_Target { 'AWSWAF_20190729.UpdateRegexPatternSet' = 0 }

	export enum UpdateRuleGroupX_Amz_Target { 'AWSWAF_20190729.UpdateRuleGroup' = 0 }

	export enum UpdateWebACLX_Amz_Target { 'AWSWAF_20190729.UpdateWebACL' = 0 }

}

