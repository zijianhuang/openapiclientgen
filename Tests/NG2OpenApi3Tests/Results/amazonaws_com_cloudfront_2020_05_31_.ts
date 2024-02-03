import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface InvalidArgument {
	}
	export interface InvalidArgumentFormProperties {
	}
	export function CreateInvalidArgumentFormGroup() {
		return new FormGroup<InvalidArgumentFormProperties>({
		});

	}

	export interface NoSuchDistribution {
	}
	export interface NoSuchDistributionFormProperties {
	}
	export function CreateNoSuchDistributionFormGroup() {
		return new FormGroup<NoSuchDistributionFormProperties>({
		});

	}

	export interface TooManyDistributionCNAMEs {
	}
	export interface TooManyDistributionCNAMEsFormProperties {
	}
	export function CreateTooManyDistributionCNAMEsFormGroup() {
		return new FormGroup<TooManyDistributionCNAMEsFormProperties>({
		});

	}

	export interface IllegalUpdate {
	}
	export interface IllegalUpdateFormProperties {
	}
	export function CreateIllegalUpdateFormGroup() {
		return new FormGroup<IllegalUpdateFormProperties>({
		});

	}

	export interface AccessDenied {
	}
	export interface AccessDeniedFormProperties {
	}
	export function CreateAccessDeniedFormGroup() {
		return new FormGroup<AccessDeniedFormProperties>({
		});

	}

	export interface CopyDistributionResult {

		/** A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. */
		Distribution?: Distribution;
	}
	export interface CopyDistributionResultFormProperties {
	}
	export function CreateCopyDistributionResultFormGroup() {
		return new FormGroup<CopyDistributionResultFormProperties>({
		});

	}


	/** A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. */
	export interface Distribution {

		/** Required */
		Id: string;

		/** Required */
		ARN: string;

		/** Required */
		Status: string;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		InProgressInvalidationBatches: number;

		/** Required */
		DomainName: string;
		ActiveTrustedSigners?: ActiveTrustedSigners;
		ActiveTrustedKeyGroups?: ActiveTrustedKeyGroups;

		/** Required */
		DistributionConfig: DistributionConfig;
		AliasICPRecordals?: Array<string>;
	}

	/** A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. */
	export interface DistributionFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ARN: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		InProgressInvalidationBatches: FormControl<number | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDistributionFormGroup() {
		return new FormGroup<DistributionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			InProgressInvalidationBatches: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies. */
	export interface ActiveTrustedSigners {

		/** Required */
		Enabled: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies. */
	export interface ActiveTrustedSignersFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateActiveTrustedSignersFormGroup() {
		return new FormGroup<ActiveTrustedSignersFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of key groups, and the public keys in each key group, that CloudFront can use to verify the signatures of signed URLs and signed cookies. */
	export interface ActiveTrustedKeyGroups {

		/** Required */
		Enabled: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of key groups, and the public keys in each key group, that CloudFront can use to verify the signatures of signed URLs and signed cookies. */
	export interface ActiveTrustedKeyGroupsFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateActiveTrustedKeyGroupsFormGroup() {
		return new FormGroup<ActiveTrustedKeyGroupsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A distribution configuration. */
	export interface DistributionConfig {

		/** Required */
		CallerReference: string;
		Aliases?: Aliases;
		DefaultRootObject?: string;

		/** Required */
		Origins: Origins;
		OriginGroups?: OriginGroups;

		/** Required */
		DefaultCacheBehavior: DefaultCacheBehavior;
		CacheBehaviors?: CacheBehaviors;
		CustomErrorResponses?: CustomErrorResponses;

		/** Required */
		Comment: string;
		Logging?: LoggingConfig;
		PriceClass?: PriceClass;

		/** Required */
		Enabled: boolean;
		ViewerCertificate?: ViewerCertificate;
		Restrictions?: Restrictions;
		WebACLId?: string;
		HttpVersion?: HttpVersion;
		IsIPV6Enabled?: boolean | null;
		ContinuousDeploymentPolicyId?: string;
		Staging?: boolean | null;
	}

	/** A distribution configuration. */
	export interface DistributionConfigFormProperties {

		/** Required */
		CallerReference: FormControl<string | null | undefined>,
		DefaultRootObject: FormControl<string | null | undefined>,

		/** Required */
		Comment: FormControl<string | null | undefined>,
		PriceClass: FormControl<PriceClass | null | undefined>,

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		WebACLId: FormControl<string | null | undefined>,
		HttpVersion: FormControl<HttpVersion | null | undefined>,
		IsIPV6Enabled: FormControl<boolean | null | undefined>,
		ContinuousDeploymentPolicyId: FormControl<string | null | undefined>,
		Staging: FormControl<boolean | null | undefined>,
	}
	export function CreateDistributionConfigFormGroup() {
		return new FormGroup<DistributionConfigFormProperties>({
			CallerReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultRootObject: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PriceClass: new FormControl<PriceClass | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			WebACLId: new FormControl<string | null | undefined>(undefined),
			HttpVersion: new FormControl<HttpVersion | null | undefined>(undefined),
			IsIPV6Enabled: new FormControl<boolean | null | undefined>(undefined),
			ContinuousDeploymentPolicyId: new FormControl<string | null | undefined>(undefined),
			Staging: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution. */
	export interface Aliases {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution. */
	export interface AliasesFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateAliasesFormGroup() {
		return new FormGroup<AliasesFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the origins for this distribution. */
	export interface Origins {

		/** Required */
		Quantity: number;

		/** Required */
		Items: Array<string>;
	}

	/** Contains information about the origins for this distribution. */
	export interface OriginsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateOriginsFormGroup() {
		return new FormGroup<OriginsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex data type for the origin groups specified for a distribution. */
	export interface OriginGroups {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex data type for the origin groups specified for a distribution. */
	export interface OriginGroupsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateOriginGroupsFormGroup() {
		return new FormGroup<OriginGroupsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if request URLs don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior. */
	export interface DefaultCacheBehavior {

		/** Required */
		TargetOriginId: string;
		TrustedSigners?: TrustedSigners;
		TrustedKeyGroups?: TrustedKeyGroups;

		/** Required */
		ViewerProtocolPolicy: ViewerProtocolPolicy;

		/** <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p> */
		AllowedMethods?: AllowedMethods;
		SmoothStreaming?: boolean | null;
		Compress?: boolean | null;
		LambdaFunctionAssociations?: LambdaFunctionAssociations;
		FunctionAssociations?: FunctionAssociations;
		FieldLevelEncryptionId?: string;
		RealtimeLogConfigArn?: string;
		CachePolicyId?: string;
		OriginRequestPolicyId?: string;
		ResponseHeadersPolicyId?: string;
		ForwardedValues?: ForwardedValues;
		MinTTL?: number | null;
		DefaultTTL?: number | null;
		MaxTTL?: number | null;
	}

	/** A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if request URLs don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior. */
	export interface DefaultCacheBehaviorFormProperties {

		/** Required */
		TargetOriginId: FormControl<string | null | undefined>,

		/** Required */
		ViewerProtocolPolicy: FormControl<ViewerProtocolPolicy | null | undefined>,
		SmoothStreaming: FormControl<boolean | null | undefined>,
		Compress: FormControl<boolean | null | undefined>,
		FieldLevelEncryptionId: FormControl<string | null | undefined>,
		RealtimeLogConfigArn: FormControl<string | null | undefined>,
		CachePolicyId: FormControl<string | null | undefined>,
		OriginRequestPolicyId: FormControl<string | null | undefined>,
		ResponseHeadersPolicyId: FormControl<string | null | undefined>,
		MinTTL: FormControl<number | null | undefined>,
		DefaultTTL: FormControl<number | null | undefined>,
		MaxTTL: FormControl<number | null | undefined>,
	}
	export function CreateDefaultCacheBehaviorFormGroup() {
		return new FormGroup<DefaultCacheBehaviorFormProperties>({
			TargetOriginId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ViewerProtocolPolicy: new FormControl<ViewerProtocolPolicy | null | undefined>(undefined, [Validators.required]),
			SmoothStreaming: new FormControl<boolean | null | undefined>(undefined),
			Compress: new FormControl<boolean | null | undefined>(undefined),
			FieldLevelEncryptionId: new FormControl<string | null | undefined>(undefined),
			RealtimeLogConfigArn: new FormControl<string | null | undefined>(undefined),
			CachePolicyId: new FormControl<string | null | undefined>(undefined),
			OriginRequestPolicyId: new FormControl<string | null | undefined>(undefined),
			ResponseHeadersPolicyId: new FormControl<string | null | undefined>(undefined),
			MinTTL: new FormControl<number | null | undefined>(undefined),
			DefaultTTL: new FormControl<number | null | undefined>(undefined),
			MaxTTL: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A list of Amazon Web Services accounts whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies. */
	export interface TrustedSigners {

		/** Required */
		Enabled: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of Amazon Web Services accounts whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies. */
	export interface TrustedSignersFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateTrustedSignersFormGroup() {
		return new FormGroup<TrustedSignersFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of key groups whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies. */
	export interface TrustedKeyGroups {

		/** Required */
		Enabled: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of key groups whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies. */
	export interface TrustedKeyGroupsFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateTrustedKeyGroupsFormGroup() {
		return new FormGroup<TrustedKeyGroupsFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ViewerProtocolPolicy { 'allow-all' = 'allow-all', 'https-only' = 'https-only', 'redirect-to-https' = 'redirect-to-https' }


	/** <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p> */
	export interface AllowedMethods {

		/** Required */
		Quantity: number;

		/** Required */
		Items: Array<string>;

		/** <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.</p> */
		CachedMethods?: CachedMethods;
	}

	/** <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p> */
	export interface AllowedMethodsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateAllowedMethodsFormGroup() {
		return new FormGroup<AllowedMethodsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.</p> */
	export interface CachedMethods {

		/** Required */
		Quantity: number;

		/** Required */
		Items: Array<string>;
	}

	/** <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.</p> */
	export interface CachedMethodsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateCachedMethodsFormGroup() {
		return new FormGroup<CachedMethodsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A complex type that specifies a list of Lambda@Edge functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda@Edge functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with only one function.</p> <p>If you don't want to invoke any Lambda@Edge functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>.</p> */
	export interface LambdaFunctionAssociations {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** <p>A complex type that specifies a list of Lambda@Edge functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda@Edge functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with only one function.</p> <p>If you don't want to invoke any Lambda@Edge functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>.</p> */
	export interface LambdaFunctionAssociationsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateLambdaFunctionAssociationsFormGroup() {
		return new FormGroup<LambdaFunctionAssociationsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior. */
	export interface FunctionAssociations {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior. */
	export interface FunctionAssociationsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateFunctionAssociationsFormGroup() {
		return new FormGroup<FunctionAssociationsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p> */
	export interface ForwardedValues {

		/** Required */
		QueryString: boolean;

		/** Required */
		Cookies: CookiePreference;
		Headers?: Headers;
		QueryStringCacheKeys?: QueryStringCacheKeys;
	}

	/** <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p> */
	export interface ForwardedValuesFormProperties {

		/** Required */
		QueryString: FormControl<boolean | null | undefined>,
	}
	export function CreateForwardedValuesFormGroup() {
		return new FormGroup<ForwardedValuesFormProperties>({
			QueryString: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use <code>CookiesConfig</code> in a cache policy. See <code>CachePolicy</code>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use <code>CookiesConfig</code> in an origin request policy. See <code>OriginRequestPolicy</code>.</p> <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CookiePreference {

		/** Required */
		Forward: ItemSelection;
		WhitelistedNames?: CookieNames;
	}

	/** <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use <code>CookiesConfig</code> in a cache policy. See <code>CachePolicy</code>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use <code>CookiesConfig</code> in an origin request policy. See <code>OriginRequestPolicy</code>.</p> <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CookiePreferenceFormProperties {

		/** Required */
		Forward: FormControl<ItemSelection | null | undefined>,
	}
	export function CreateCookiePreferenceFormGroup() {
		return new FormGroup<CookiePreferenceFormProperties>({
			Forward: new FormControl<ItemSelection | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ItemSelection { none = 'none', whitelist = 'whitelist', all = 'all' }


	/** Contains a list of cookie names. */
	export interface CookieNames {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** Contains a list of cookie names. */
	export interface CookieNamesFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateCookieNamesFormGroup() {
		return new FormGroup<CookieNamesFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains a list of HTTP header names. */
	export interface Headers {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** Contains a list of HTTP header names. */
	export interface HeadersFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateHeadersFormGroup() {
		return new FormGroup<HeadersFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include query strings in the cache key, use <code>QueryStringsConfig</code> in a cache policy. See <code>CachePolicy</code>.</p> <p>If you want to send query strings to the origin but not include them in the cache key, use <code>QueryStringsConfig</code> in an origin request policy. See <code>OriginRequestPolicy</code>.</p> <p>A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior.</p> */
	export interface QueryStringCacheKeys {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include query strings in the cache key, use <code>QueryStringsConfig</code> in a cache policy. See <code>CachePolicy</code>.</p> <p>If you want to send query strings to the origin but not include them in the cache key, use <code>QueryStringsConfig</code> in an origin request policy. See <code>OriginRequestPolicy</code>.</p> <p>A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior.</p> */
	export interface QueryStringCacheKeysFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateQueryStringCacheKeysFormGroup() {
		return new FormGroup<QueryStringCacheKeysFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that contains zero or more <code>CacheBehavior</code> elements. */
	export interface CacheBehaviors {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex type that contains zero or more <code>CacheBehavior</code> elements. */
	export interface CacheBehaviorsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateCacheBehaviorsFormGroup() {
		return new FormGroup<CacheBehaviorsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CustomErrorResponses {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CustomErrorResponsesFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateCustomErrorResponsesFormGroup() {
		return new FormGroup<CustomErrorResponsesFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that controls whether access logs are written for the distribution. */
	export interface LoggingConfig {

		/** Required */
		Enabled: boolean;

		/** Required */
		IncludeCookies: boolean;

		/** Required */
		Bucket: string;

		/** Required */
		Prefix: string;
	}

	/** A complex type that controls whether access logs are written for the distribution. */
	export interface LoggingConfigFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		IncludeCookies: FormControl<boolean | null | undefined>,

		/** Required */
		Bucket: FormControl<string | null | undefined>,

		/** Required */
		Prefix: FormControl<string | null | undefined>,
	}
	export function CreateLoggingConfigFormGroup() {
		return new FormGroup<LoggingConfigFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			IncludeCookies: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PriceClass { PriceClass_100 = 'PriceClass_100', PriceClass_200 = 'PriceClass_200', PriceClass_All = 'PriceClass_All' }


	/** <p>A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.</p> <p>If the distribution doesn't use <code>Aliases</code> (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>—set <code>CloudFrontDefaultCertificate</code> to <code>true</code> and leave all other fields empty.</p> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), use the fields in this type to specify the following settings:</p> <ul> <li> <p>Which viewers the distribution accepts HTTPS connections from: only viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a> (recommended), or all viewers including those that don't support SNI.</p> <ul> <li> <p>To accept HTTPS connections from only viewers that support SNI, set <code>SSLSupportMethod</code> to <code>sni-only</code>. This is recommended. Most browsers and clients support SNI. </p> </li> <li> <p>To accept HTTPS connections from all viewers, including those that don't support SNI, set <code>SSLSupportMethod</code> to <code>vip</code>. This is not recommended, and results in additional monthly charges from CloudFront.</p> </li> </ul> </li> <li> <p>The minimum SSL/TLS protocol version that the distribution can use to communicate with viewers. To specify a minimum version, choose a value for <code>MinimumProtocolVersion</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </li> <li> <p>The location of the SSL/TLS certificate, <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">Certificate Manager (ACM)</a> (recommended) or <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Identity and Access Management (IAM)</a>. You specify the location by setting a value in one of the following fields (not both):</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> </ul> </li> </ul> <p>All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use <code>ViewerProtocolPolicy</code> in the <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use <code>CustomOriginConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html">Using HTTPS with CloudFront</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html"> Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface ViewerCertificate {
		CloudFrontDefaultCertificate?: boolean | null;
		IAMCertificateId?: string;
		ACMCertificateArn?: string;
		SSLSupportMethod?: SSLSupportMethod;
		MinimumProtocolVersion?: MinimumProtocolVersion;
		Certificate?: string;
		CertificateSource?: CertificateSource;
	}

	/** <p>A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.</p> <p>If the distribution doesn't use <code>Aliases</code> (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>—set <code>CloudFrontDefaultCertificate</code> to <code>true</code> and leave all other fields empty.</p> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), use the fields in this type to specify the following settings:</p> <ul> <li> <p>Which viewers the distribution accepts HTTPS connections from: only viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a> (recommended), or all viewers including those that don't support SNI.</p> <ul> <li> <p>To accept HTTPS connections from only viewers that support SNI, set <code>SSLSupportMethod</code> to <code>sni-only</code>. This is recommended. Most browsers and clients support SNI. </p> </li> <li> <p>To accept HTTPS connections from all viewers, including those that don't support SNI, set <code>SSLSupportMethod</code> to <code>vip</code>. This is not recommended, and results in additional monthly charges from CloudFront.</p> </li> </ul> </li> <li> <p>The minimum SSL/TLS protocol version that the distribution can use to communicate with viewers. To specify a minimum version, choose a value for <code>MinimumProtocolVersion</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </li> <li> <p>The location of the SSL/TLS certificate, <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">Certificate Manager (ACM)</a> (recommended) or <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Identity and Access Management (IAM)</a>. You specify the location by setting a value in one of the following fields (not both):</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> </ul> </li> </ul> <p>All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use <code>ViewerProtocolPolicy</code> in the <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use <code>CustomOriginConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html">Using HTTPS with CloudFront</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html"> Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface ViewerCertificateFormProperties {
		CloudFrontDefaultCertificate: FormControl<boolean | null | undefined>,
		IAMCertificateId: FormControl<string | null | undefined>,
		ACMCertificateArn: FormControl<string | null | undefined>,
		SSLSupportMethod: FormControl<SSLSupportMethod | null | undefined>,
		MinimumProtocolVersion: FormControl<MinimumProtocolVersion | null | undefined>,
		Certificate: FormControl<string | null | undefined>,
		CertificateSource: FormControl<CertificateSource | null | undefined>,
	}
	export function CreateViewerCertificateFormGroup() {
		return new FormGroup<ViewerCertificateFormProperties>({
			CloudFrontDefaultCertificate: new FormControl<boolean | null | undefined>(undefined),
			IAMCertificateId: new FormControl<string | null | undefined>(undefined),
			ACMCertificateArn: new FormControl<string | null | undefined>(undefined),
			SSLSupportMethod: new FormControl<SSLSupportMethod | null | undefined>(undefined),
			MinimumProtocolVersion: new FormControl<MinimumProtocolVersion | null | undefined>(undefined),
			Certificate: new FormControl<string | null | undefined>(undefined),
			CertificateSource: new FormControl<CertificateSource | null | undefined>(undefined),
		});

	}

	export enum SSLSupportMethod { 'sni-only' = 'sni-only', vip = 'vip', 'static-ip' = 'static-ip' }

	export enum MinimumProtocolVersion { SSLv3 = 'SSLv3', TLSv1 = 'TLSv1', TLSv1_2016 = 'TLSv1_2016', 'TLSv1.1_2016' = 'TLSv1.1_2016', 'TLSv1.2_2018' = 'TLSv1.2_2018', 'TLSv1.2_2019' = 'TLSv1.2_2019', 'TLSv1.2_2021' = 'TLSv1.2_2021' }

	export enum CertificateSource { cloudfront = 'cloudfront', iam = 'iam', acm = 'acm' }


	/** A complex type that identifies ways in which you want to restrict distribution of your content. */
	export interface Restrictions {

		/** Required */
		GeoRestriction: GeoRestriction;
	}

	/** A complex type that identifies ways in which you want to restrict distribution of your content. */
	export interface RestrictionsFormProperties {
	}
	export function CreateRestrictionsFormGroup() {
		return new FormGroup<RestrictionsFormProperties>({
		});

	}


	/** A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.  */
	export interface GeoRestriction {

		/** Required */
		RestrictionType: GeoRestrictionType;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.  */
	export interface GeoRestrictionFormProperties {

		/** Required */
		RestrictionType: FormControl<GeoRestrictionType | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateGeoRestrictionFormGroup() {
		return new FormGroup<GeoRestrictionFormProperties>({
			RestrictionType: new FormControl<GeoRestrictionType | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GeoRestrictionType { blacklist = 'blacklist', whitelist = 'whitelist', none = 'none' }

	export enum HttpVersion { 'http1.1' = 'http1.1', http2 = 'http2', http3 = 'http3', http2and3 = 'http2and3' }

	export interface CNAMEAlreadyExists {
	}
	export interface CNAMEAlreadyExistsFormProperties {
	}
	export function CreateCNAMEAlreadyExistsFormGroup() {
		return new FormGroup<CNAMEAlreadyExistsFormProperties>({
		});

	}

	export interface DistributionAlreadyExists {
	}
	export interface DistributionAlreadyExistsFormProperties {
	}
	export function CreateDistributionAlreadyExistsFormGroup() {
		return new FormGroup<DistributionAlreadyExistsFormProperties>({
		});

	}

	export interface InvalidOrigin {
	}
	export interface InvalidOriginFormProperties {
	}
	export function CreateInvalidOriginFormGroup() {
		return new FormGroup<InvalidOriginFormProperties>({
		});

	}

	export interface InvalidOriginAccessIdentity {
	}
	export interface InvalidOriginAccessIdentityFormProperties {
	}
	export function CreateInvalidOriginAccessIdentityFormGroup() {
		return new FormGroup<InvalidOriginAccessIdentityFormProperties>({
		});

	}

	export interface InvalidOriginAccessControl {
	}
	export interface InvalidOriginAccessControlFormProperties {
	}
	export function CreateInvalidOriginAccessControlFormGroup() {
		return new FormGroup<InvalidOriginAccessControlFormProperties>({
		});

	}

	export interface InvalidIfMatchVersion {
	}
	export interface InvalidIfMatchVersionFormProperties {
	}
	export function CreateInvalidIfMatchVersionFormGroup() {
		return new FormGroup<InvalidIfMatchVersionFormProperties>({
		});

	}

	export interface PreconditionFailed {
	}
	export interface PreconditionFailedFormProperties {
	}
	export function CreatePreconditionFailedFormGroup() {
		return new FormGroup<PreconditionFailedFormProperties>({
		});

	}

	export interface TooManyTrustedSigners {
	}
	export interface TooManyTrustedSignersFormProperties {
	}
	export function CreateTooManyTrustedSignersFormGroup() {
		return new FormGroup<TooManyTrustedSignersFormProperties>({
		});

	}

	export interface TrustedSignerDoesNotExist {
	}
	export interface TrustedSignerDoesNotExistFormProperties {
	}
	export function CreateTrustedSignerDoesNotExistFormGroup() {
		return new FormGroup<TrustedSignerDoesNotExistFormProperties>({
		});

	}

	export interface InvalidViewerCertificate {
	}
	export interface InvalidViewerCertificateFormProperties {
	}
	export function CreateInvalidViewerCertificateFormGroup() {
		return new FormGroup<InvalidViewerCertificateFormProperties>({
		});

	}

	export interface InvalidMinimumProtocolVersion {
	}
	export interface InvalidMinimumProtocolVersionFormProperties {
	}
	export function CreateInvalidMinimumProtocolVersionFormGroup() {
		return new FormGroup<InvalidMinimumProtocolVersionFormProperties>({
		});

	}

	export interface MissingBody {
	}
	export interface MissingBodyFormProperties {
	}
	export function CreateMissingBodyFormGroup() {
		return new FormGroup<MissingBodyFormProperties>({
		});

	}

	export interface TooManyDistributions {
	}
	export interface TooManyDistributionsFormProperties {
	}
	export function CreateTooManyDistributionsFormGroup() {
		return new FormGroup<TooManyDistributionsFormProperties>({
		});

	}

	export interface InvalidDefaultRootObject {
	}
	export interface InvalidDefaultRootObjectFormProperties {
	}
	export function CreateInvalidDefaultRootObjectFormGroup() {
		return new FormGroup<InvalidDefaultRootObjectFormProperties>({
		});

	}

	export interface InvalidRelativePath {
	}
	export interface InvalidRelativePathFormProperties {
	}
	export function CreateInvalidRelativePathFormGroup() {
		return new FormGroup<InvalidRelativePathFormProperties>({
		});

	}

	export interface InvalidErrorCode {
	}
	export interface InvalidErrorCodeFormProperties {
	}
	export function CreateInvalidErrorCodeFormGroup() {
		return new FormGroup<InvalidErrorCodeFormProperties>({
		});

	}

	export interface InvalidResponseCode {
	}
	export interface InvalidResponseCodeFormProperties {
	}
	export function CreateInvalidResponseCodeFormGroup() {
		return new FormGroup<InvalidResponseCodeFormProperties>({
		});

	}

	export interface InvalidRequiredProtocol {
	}
	export interface InvalidRequiredProtocolFormProperties {
	}
	export function CreateInvalidRequiredProtocolFormGroup() {
		return new FormGroup<InvalidRequiredProtocolFormProperties>({
		});

	}

	export interface NoSuchOrigin {
	}
	export interface NoSuchOriginFormProperties {
	}
	export function CreateNoSuchOriginFormGroup() {
		return new FormGroup<NoSuchOriginFormProperties>({
		});

	}

	export interface TooManyOrigins {
	}
	export interface TooManyOriginsFormProperties {
	}
	export function CreateTooManyOriginsFormGroup() {
		return new FormGroup<TooManyOriginsFormProperties>({
		});

	}

	export interface TooManyOriginGroupsPerDistribution {
	}
	export interface TooManyOriginGroupsPerDistributionFormProperties {
	}
	export function CreateTooManyOriginGroupsPerDistributionFormGroup() {
		return new FormGroup<TooManyOriginGroupsPerDistributionFormProperties>({
		});

	}

	export interface TooManyCacheBehaviors {
	}
	export interface TooManyCacheBehaviorsFormProperties {
	}
	export function CreateTooManyCacheBehaviorsFormGroup() {
		return new FormGroup<TooManyCacheBehaviorsFormProperties>({
		});

	}

	export interface TooManyCookieNamesInWhiteList {
	}
	export interface TooManyCookieNamesInWhiteListFormProperties {
	}
	export function CreateTooManyCookieNamesInWhiteListFormGroup() {
		return new FormGroup<TooManyCookieNamesInWhiteListFormProperties>({
		});

	}

	export interface InvalidForwardCookies {
	}
	export interface InvalidForwardCookiesFormProperties {
	}
	export function CreateInvalidForwardCookiesFormGroup() {
		return new FormGroup<InvalidForwardCookiesFormProperties>({
		});

	}

	export interface TooManyHeadersInForwardedValues {
	}
	export interface TooManyHeadersInForwardedValuesFormProperties {
	}
	export function CreateTooManyHeadersInForwardedValuesFormGroup() {
		return new FormGroup<TooManyHeadersInForwardedValuesFormProperties>({
		});

	}

	export interface InvalidHeadersForS3Origin {
	}
	export interface InvalidHeadersForS3OriginFormProperties {
	}
	export function CreateInvalidHeadersForS3OriginFormGroup() {
		return new FormGroup<InvalidHeadersForS3OriginFormProperties>({
		});

	}

	export interface InconsistentQuantities {
	}
	export interface InconsistentQuantitiesFormProperties {
	}
	export function CreateInconsistentQuantitiesFormGroup() {
		return new FormGroup<InconsistentQuantitiesFormProperties>({
		});

	}

	export interface TooManyCertificates {
	}
	export interface TooManyCertificatesFormProperties {
	}
	export function CreateTooManyCertificatesFormGroup() {
		return new FormGroup<TooManyCertificatesFormProperties>({
		});

	}

	export interface InvalidLocationCode {
	}
	export interface InvalidLocationCodeFormProperties {
	}
	export function CreateInvalidLocationCodeFormGroup() {
		return new FormGroup<InvalidLocationCodeFormProperties>({
		});

	}

	export interface InvalidGeoRestrictionParameter {
	}
	export interface InvalidGeoRestrictionParameterFormProperties {
	}
	export function CreateInvalidGeoRestrictionParameterFormGroup() {
		return new FormGroup<InvalidGeoRestrictionParameterFormProperties>({
		});

	}

	export interface InvalidProtocolSettings {
	}
	export interface InvalidProtocolSettingsFormProperties {
	}
	export function CreateInvalidProtocolSettingsFormGroup() {
		return new FormGroup<InvalidProtocolSettingsFormProperties>({
		});

	}

	export interface InvalidTTLOrder {
	}
	export interface InvalidTTLOrderFormProperties {
	}
	export function CreateInvalidTTLOrderFormGroup() {
		return new FormGroup<InvalidTTLOrderFormProperties>({
		});

	}

	export interface InvalidWebACLId {
	}
	export interface InvalidWebACLIdFormProperties {
	}
	export function CreateInvalidWebACLIdFormGroup() {
		return new FormGroup<InvalidWebACLIdFormProperties>({
		});

	}

	export interface TooManyOriginCustomHeaders {
	}
	export interface TooManyOriginCustomHeadersFormProperties {
	}
	export function CreateTooManyOriginCustomHeadersFormGroup() {
		return new FormGroup<TooManyOriginCustomHeadersFormProperties>({
		});

	}

	export interface TooManyQueryStringParameters {
	}
	export interface TooManyQueryStringParametersFormProperties {
	}
	export function CreateTooManyQueryStringParametersFormGroup() {
		return new FormGroup<TooManyQueryStringParametersFormProperties>({
		});

	}

	export interface InvalidQueryStringParameters {
	}
	export interface InvalidQueryStringParametersFormProperties {
	}
	export function CreateInvalidQueryStringParametersFormGroup() {
		return new FormGroup<InvalidQueryStringParametersFormProperties>({
		});

	}

	export interface TooManyDistributionsWithLambdaAssociations {
	}
	export interface TooManyDistributionsWithLambdaAssociationsFormProperties {
	}
	export function CreateTooManyDistributionsWithLambdaAssociationsFormGroup() {
		return new FormGroup<TooManyDistributionsWithLambdaAssociationsFormProperties>({
		});

	}

	export interface TooManyDistributionsWithSingleFunctionARN {
	}
	export interface TooManyDistributionsWithSingleFunctionARNFormProperties {
	}
	export function CreateTooManyDistributionsWithSingleFunctionARNFormGroup() {
		return new FormGroup<TooManyDistributionsWithSingleFunctionARNFormProperties>({
		});

	}

	export interface TooManyLambdaFunctionAssociations {
	}
	export interface TooManyLambdaFunctionAssociationsFormProperties {
	}
	export function CreateTooManyLambdaFunctionAssociationsFormGroup() {
		return new FormGroup<TooManyLambdaFunctionAssociationsFormProperties>({
		});

	}

	export interface InvalidLambdaFunctionAssociation {
	}
	export interface InvalidLambdaFunctionAssociationFormProperties {
	}
	export function CreateInvalidLambdaFunctionAssociationFormGroup() {
		return new FormGroup<InvalidLambdaFunctionAssociationFormProperties>({
		});

	}

	export interface TooManyDistributionsWithFunctionAssociations {
	}
	export interface TooManyDistributionsWithFunctionAssociationsFormProperties {
	}
	export function CreateTooManyDistributionsWithFunctionAssociationsFormGroup() {
		return new FormGroup<TooManyDistributionsWithFunctionAssociationsFormProperties>({
		});

	}

	export interface TooManyFunctionAssociations {
	}
	export interface TooManyFunctionAssociationsFormProperties {
	}
	export function CreateTooManyFunctionAssociationsFormGroup() {
		return new FormGroup<TooManyFunctionAssociationsFormProperties>({
		});

	}

	export interface InvalidFunctionAssociation {
	}
	export interface InvalidFunctionAssociationFormProperties {
	}
	export function CreateInvalidFunctionAssociationFormGroup() {
		return new FormGroup<InvalidFunctionAssociationFormProperties>({
		});

	}

	export interface InvalidOriginReadTimeout {
	}
	export interface InvalidOriginReadTimeoutFormProperties {
	}
	export function CreateInvalidOriginReadTimeoutFormGroup() {
		return new FormGroup<InvalidOriginReadTimeoutFormProperties>({
		});

	}

	export interface InvalidOriginKeepaliveTimeout {
	}
	export interface InvalidOriginKeepaliveTimeoutFormProperties {
	}
	export function CreateInvalidOriginKeepaliveTimeoutFormGroup() {
		return new FormGroup<InvalidOriginKeepaliveTimeoutFormProperties>({
		});

	}

	export interface NoSuchFieldLevelEncryptionConfig {
	}
	export interface NoSuchFieldLevelEncryptionConfigFormProperties {
	}
	export function CreateNoSuchFieldLevelEncryptionConfigFormGroup() {
		return new FormGroup<NoSuchFieldLevelEncryptionConfigFormProperties>({
		});

	}

	export interface IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior {
	}
	export interface IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorFormProperties {
	}
	export function CreateIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorFormGroup() {
		return new FormGroup<IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorFormProperties>({
		});

	}

	export interface TooManyDistributionsAssociatedToFieldLevelEncryptionConfig {
	}
	export interface TooManyDistributionsAssociatedToFieldLevelEncryptionConfigFormProperties {
	}
	export function CreateTooManyDistributionsAssociatedToFieldLevelEncryptionConfigFormGroup() {
		return new FormGroup<TooManyDistributionsAssociatedToFieldLevelEncryptionConfigFormProperties>({
		});

	}

	export interface NoSuchCachePolicy {
	}
	export interface NoSuchCachePolicyFormProperties {
	}
	export function CreateNoSuchCachePolicyFormGroup() {
		return new FormGroup<NoSuchCachePolicyFormProperties>({
		});

	}

	export interface TooManyDistributionsAssociatedToCachePolicy {
	}
	export interface TooManyDistributionsAssociatedToCachePolicyFormProperties {
	}
	export function CreateTooManyDistributionsAssociatedToCachePolicyFormGroup() {
		return new FormGroup<TooManyDistributionsAssociatedToCachePolicyFormProperties>({
		});

	}

	export interface TooManyDistributionsAssociatedToOriginAccessControl {
	}
	export interface TooManyDistributionsAssociatedToOriginAccessControlFormProperties {
	}
	export function CreateTooManyDistributionsAssociatedToOriginAccessControlFormGroup() {
		return new FormGroup<TooManyDistributionsAssociatedToOriginAccessControlFormProperties>({
		});

	}

	export interface NoSuchResponseHeadersPolicy {
	}
	export interface NoSuchResponseHeadersPolicyFormProperties {
	}
	export function CreateNoSuchResponseHeadersPolicyFormGroup() {
		return new FormGroup<NoSuchResponseHeadersPolicyFormProperties>({
		});

	}

	export interface TooManyDistributionsAssociatedToResponseHeadersPolicy {
	}
	export interface TooManyDistributionsAssociatedToResponseHeadersPolicyFormProperties {
	}
	export function CreateTooManyDistributionsAssociatedToResponseHeadersPolicyFormGroup() {
		return new FormGroup<TooManyDistributionsAssociatedToResponseHeadersPolicyFormProperties>({
		});

	}

	export interface NoSuchOriginRequestPolicy {
	}
	export interface NoSuchOriginRequestPolicyFormProperties {
	}
	export function CreateNoSuchOriginRequestPolicyFormGroup() {
		return new FormGroup<NoSuchOriginRequestPolicyFormProperties>({
		});

	}

	export interface TooManyDistributionsAssociatedToOriginRequestPolicy {
	}
	export interface TooManyDistributionsAssociatedToOriginRequestPolicyFormProperties {
	}
	export function CreateTooManyDistributionsAssociatedToOriginRequestPolicyFormGroup() {
		return new FormGroup<TooManyDistributionsAssociatedToOriginRequestPolicyFormProperties>({
		});

	}

	export interface TooManyDistributionsAssociatedToKeyGroup {
	}
	export interface TooManyDistributionsAssociatedToKeyGroupFormProperties {
	}
	export function CreateTooManyDistributionsAssociatedToKeyGroupFormGroup() {
		return new FormGroup<TooManyDistributionsAssociatedToKeyGroupFormProperties>({
		});

	}

	export interface TooManyKeyGroupsAssociatedToDistribution {
	}
	export interface TooManyKeyGroupsAssociatedToDistributionFormProperties {
	}
	export function CreateTooManyKeyGroupsAssociatedToDistributionFormGroup() {
		return new FormGroup<TooManyKeyGroupsAssociatedToDistributionFormProperties>({
		});

	}

	export interface TrustedKeyGroupDoesNotExist {
	}
	export interface TrustedKeyGroupDoesNotExistFormProperties {
	}
	export function CreateTrustedKeyGroupDoesNotExistFormGroup() {
		return new FormGroup<TrustedKeyGroupDoesNotExistFormProperties>({
		});

	}

	export interface NoSuchRealtimeLogConfig {
	}
	export interface NoSuchRealtimeLogConfigFormProperties {
	}
	export function CreateNoSuchRealtimeLogConfigFormGroup() {
		return new FormGroup<NoSuchRealtimeLogConfigFormProperties>({
		});

	}

	export interface RealtimeLogConfigOwnerMismatch {
	}
	export interface RealtimeLogConfigOwnerMismatchFormProperties {
	}
	export function CreateRealtimeLogConfigOwnerMismatchFormGroup() {
		return new FormGroup<RealtimeLogConfigOwnerMismatchFormProperties>({
		});

	}

	export interface CreateCachePolicyResult {
		CachePolicy?: CachePolicy;
	}
	export interface CreateCachePolicyResultFormProperties {
	}
	export function CreateCreateCachePolicyResultFormGroup() {
		return new FormGroup<CreateCachePolicyResultFormProperties>({
		});

	}


	/** <p>A cache policy.</p> <p>When it's attached to a cache behavior, the cache policy determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p> */
	export interface CachePolicy {

		/** Required */
		Id: string;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		CachePolicyConfig: CachePolicyConfig;
	}

	/** <p>A cache policy.</p> <p>When it's attached to a cache behavior, the cache policy determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p> */
	export interface CachePolicyFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateCachePolicyFormGroup() {
		return new FormGroup<CachePolicyFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p> */
	export interface CachePolicyConfig {
		Comment?: string;

		/** Required */
		Name: string;
		DefaultTTL?: number | null;
		MaxTTL?: number | null;

		/** Required */
		MinTTL: number;
		ParametersInCacheKeyAndForwardedToOrigin?: ParametersInCacheKeyAndForwardedToOrigin;
	}

	/** <p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p> */
	export interface CachePolicyConfigFormProperties {
		Comment: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		DefaultTTL: FormControl<number | null | undefined>,
		MaxTTL: FormControl<number | null | undefined>,

		/** Required */
		MinTTL: FormControl<number | null | undefined>,
	}
	export function CreateCachePolicyConfigFormGroup() {
		return new FormGroup<CachePolicyConfigFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultTTL: new FormControl<number | null | undefined>(undefined),
			MaxTTL: new FormControl<number | null | undefined>(undefined),
			MinTTL: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>This object determines the values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p> */
	export interface ParametersInCacheKeyAndForwardedToOrigin {

		/** Required */
		EnableAcceptEncodingGzip: boolean;
		EnableAcceptEncodingBrotli?: boolean | null;

		/** Required */
		HeadersConfig: CachePolicyHeadersConfig;

		/** Required */
		CookiesConfig: CachePolicyCookiesConfig;

		/** Required */
		QueryStringsConfig: CachePolicyQueryStringsConfig;
	}

	/** <p>This object determines the values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p> */
	export interface ParametersInCacheKeyAndForwardedToOriginFormProperties {

		/** Required */
		EnableAcceptEncodingGzip: FormControl<boolean | null | undefined>,
		EnableAcceptEncodingBrotli: FormControl<boolean | null | undefined>,
	}
	export function CreateParametersInCacheKeyAndForwardedToOriginFormGroup() {
		return new FormGroup<ParametersInCacheKeyAndForwardedToOriginFormProperties>({
			EnableAcceptEncodingGzip: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			EnableAcceptEncodingBrotli: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin. */
	export interface CachePolicyHeadersConfig {

		/** Required */
		HeaderBehavior: CachePolicyHeaderBehavior;

		/** Contains a list of HTTP header names. */
		Headers?: Headers;
	}

	/** An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin. */
	export interface CachePolicyHeadersConfigFormProperties {

		/** Required */
		HeaderBehavior: FormControl<CachePolicyHeaderBehavior | null | undefined>,
	}
	export function CreateCachePolicyHeadersConfigFormGroup() {
		return new FormGroup<CachePolicyHeadersConfigFormProperties>({
			HeaderBehavior: new FormControl<CachePolicyHeaderBehavior | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CachePolicyHeaderBehavior { none = 'none', whitelist = 'whitelist' }


	/** An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin. */
	export interface CachePolicyCookiesConfig {

		/** Required */
		CookieBehavior: CachePolicyCookieBehavior;

		/** Contains a list of cookie names. */
		Cookies?: CookieNames;
	}

	/** An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin. */
	export interface CachePolicyCookiesConfigFormProperties {

		/** Required */
		CookieBehavior: FormControl<CachePolicyCookieBehavior | null | undefined>,
	}
	export function CreateCachePolicyCookiesConfigFormGroup() {
		return new FormGroup<CachePolicyCookiesConfigFormProperties>({
			CookieBehavior: new FormControl<CachePolicyCookieBehavior | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CachePolicyCookieBehavior { none = 'none', whitelist = 'whitelist', allExcept = 'allExcept', all = 'all' }


	/** An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin. */
	export interface CachePolicyQueryStringsConfig {

		/** Required */
		QueryStringBehavior: CachePolicyCookieBehavior;
		QueryStrings?: QueryStringNames;
	}

	/** An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin. */
	export interface CachePolicyQueryStringsConfigFormProperties {

		/** Required */
		QueryStringBehavior: FormControl<CachePolicyCookieBehavior | null | undefined>,
	}
	export function CreateCachePolicyQueryStringsConfigFormGroup() {
		return new FormGroup<CachePolicyQueryStringsConfigFormProperties>({
			QueryStringBehavior: new FormControl<CachePolicyCookieBehavior | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains a list of query string names. */
	export interface QueryStringNames {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** Contains a list of query string names. */
	export interface QueryStringNamesFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateQueryStringNamesFormGroup() {
		return new FormGroup<QueryStringNamesFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CachePolicyAlreadyExists {
	}
	export interface CachePolicyAlreadyExistsFormProperties {
	}
	export function CreateCachePolicyAlreadyExistsFormGroup() {
		return new FormGroup<CachePolicyAlreadyExistsFormProperties>({
		});

	}

	export interface TooManyCachePolicies {
	}
	export interface TooManyCachePoliciesFormProperties {
	}
	export function CreateTooManyCachePoliciesFormGroup() {
		return new FormGroup<TooManyCachePoliciesFormProperties>({
		});

	}

	export interface TooManyHeadersInCachePolicy {
	}
	export interface TooManyHeadersInCachePolicyFormProperties {
	}
	export function CreateTooManyHeadersInCachePolicyFormGroup() {
		return new FormGroup<TooManyHeadersInCachePolicyFormProperties>({
		});

	}

	export interface TooManyCookiesInCachePolicy {
	}
	export interface TooManyCookiesInCachePolicyFormProperties {
	}
	export function CreateTooManyCookiesInCachePolicyFormGroup() {
		return new FormGroup<TooManyCookiesInCachePolicyFormProperties>({
		});

	}

	export interface TooManyQueryStringsInCachePolicy {
	}
	export interface TooManyQueryStringsInCachePolicyFormProperties {
	}
	export function CreateTooManyQueryStringsInCachePolicyFormGroup() {
		return new FormGroup<TooManyQueryStringsInCachePolicyFormProperties>({
		});

	}


	/** The returned result of the corresponding request. */
	export interface CreateCloudFrontOriginAccessIdentityResult {
		CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
	}

	/** The returned result of the corresponding request. */
	export interface CreateCloudFrontOriginAccessIdentityResultFormProperties {
	}
	export function CreateCreateCloudFrontOriginAccessIdentityResultFormGroup() {
		return new FormGroup<CreateCloudFrontOriginAccessIdentityResultFormProperties>({
		});

	}


	/** CloudFront origin access identity. */
	export interface CloudFrontOriginAccessIdentity {

		/** Required */
		Id: string;

		/** Required */
		S3CanonicalUserId: string;
		CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
	}

	/** CloudFront origin access identity. */
	export interface CloudFrontOriginAccessIdentityFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		S3CanonicalUserId: FormControl<string | null | undefined>,
	}
	export function CreateCloudFrontOriginAccessIdentityFormGroup() {
		return new FormGroup<CloudFrontOriginAccessIdentityFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3CanonicalUserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource. */
	export interface CloudFrontOriginAccessIdentityConfig {

		/** Required */
		CallerReference: string;

		/** Required */
		Comment: string;
	}

	/** Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource. */
	export interface CloudFrontOriginAccessIdentityConfigFormProperties {

		/** Required */
		CallerReference: FormControl<string | null | undefined>,

		/** Required */
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateCloudFrontOriginAccessIdentityConfigFormGroup() {
		return new FormGroup<CloudFrontOriginAccessIdentityConfigFormProperties>({
			CallerReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CloudFrontOriginAccessIdentityAlreadyExists {
	}
	export interface CloudFrontOriginAccessIdentityAlreadyExistsFormProperties {
	}
	export function CreateCloudFrontOriginAccessIdentityAlreadyExistsFormGroup() {
		return new FormGroup<CloudFrontOriginAccessIdentityAlreadyExistsFormProperties>({
		});

	}

	export interface TooManyCloudFrontOriginAccessIdentities {
	}
	export interface TooManyCloudFrontOriginAccessIdentitiesFormProperties {
	}
	export function CreateTooManyCloudFrontOriginAccessIdentitiesFormGroup() {
		return new FormGroup<TooManyCloudFrontOriginAccessIdentitiesFormProperties>({
		});

	}

	export interface CreateContinuousDeploymentPolicyResult {
		ContinuousDeploymentPolicy?: ContinuousDeploymentPolicy;
	}
	export interface CreateContinuousDeploymentPolicyResultFormProperties {
	}
	export function CreateCreateContinuousDeploymentPolicyResultFormGroup() {
		return new FormGroup<CreateContinuousDeploymentPolicyResultFormProperties>({
		});

	}


	/** A continuous deployment policy. */
	export interface ContinuousDeploymentPolicy {

		/** Required */
		Id: string;

		/** Required */
		LastModifiedTime: Date;

		/**
		 * Contains the configuration for a continuous deployment policy.
		 * Required
		 */
		ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig;
	}

	/** A continuous deployment policy. */
	export interface ContinuousDeploymentPolicyFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateContinuousDeploymentPolicyFormGroup() {
		return new FormGroup<ContinuousDeploymentPolicyFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the configuration for a continuous deployment policy. */
	export interface ContinuousDeploymentPolicyConfig {

		/** Required */
		StagingDistributionDnsNames: StagingDistributionDnsNames;

		/** Required */
		Enabled: boolean;
		TrafficConfig?: TrafficConfig;
	}

	/** Contains the configuration for a continuous deployment policy. */
	export interface ContinuousDeploymentPolicyConfigFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateContinuousDeploymentPolicyConfigFormGroup() {
		return new FormGroup<ContinuousDeploymentPolicyConfigFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The CloudFront domain name of the staging distribution. */
	export interface StagingDistributionDnsNames {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** The CloudFront domain name of the staging distribution. */
	export interface StagingDistributionDnsNamesFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateStagingDistributionDnsNamesFormGroup() {
		return new FormGroup<StagingDistributionDnsNamesFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The traffic configuration of your continuous deployment. */
	export interface TrafficConfig {
		SingleWeightConfig?: ContinuousDeploymentSingleWeightConfig;
		SingleHeaderConfig?: ContinuousDeploymentSingleHeaderConfig;

		/** Required */
		Type: ContinuousDeploymentPolicyType;
	}

	/** The traffic configuration of your continuous deployment. */
	export interface TrafficConfigFormProperties {

		/** Required */
		Type: FormControl<ContinuousDeploymentPolicyType | null | undefined>,
	}
	export function CreateTrafficConfigFormGroup() {
		return new FormGroup<TrafficConfigFormProperties>({
			Type: new FormControl<ContinuousDeploymentPolicyType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the percentage of traffic to send to a staging distribution. */
	export interface ContinuousDeploymentSingleWeightConfig {

		/** Required */
		Weight: number;

		/** Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values. */
		SessionStickinessConfig?: SessionStickinessConfig;
	}

	/** Contains the percentage of traffic to send to a staging distribution. */
	export interface ContinuousDeploymentSingleWeightConfigFormProperties {

		/** Required */
		Weight: FormControl<number | null | undefined>,
	}
	export function CreateContinuousDeploymentSingleWeightConfigFormGroup() {
		return new FormGroup<ContinuousDeploymentSingleWeightConfigFormProperties>({
			Weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values. */
	export interface SessionStickinessConfig {

		/** Required */
		IdleTTL: number;

		/** Required */
		MaximumTTL: number;
	}

	/** Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values. */
	export interface SessionStickinessConfigFormProperties {

		/** Required */
		IdleTTL: FormControl<number | null | undefined>,

		/** Required */
		MaximumTTL: FormControl<number | null | undefined>,
	}
	export function CreateSessionStickinessConfigFormGroup() {
		return new FormGroup<SessionStickinessConfigFormProperties>({
			IdleTTL: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaximumTTL: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This configuration determines which HTTP requests are sent to the staging distribution. If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution. */
	export interface ContinuousDeploymentSingleHeaderConfig {

		/** Required */
		Header: string;

		/** Required */
		Value: string;
	}

	/** This configuration determines which HTTP requests are sent to the staging distribution. If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution. */
	export interface ContinuousDeploymentSingleHeaderConfigFormProperties {

		/** Required */
		Header: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateContinuousDeploymentSingleHeaderConfigFormGroup() {
		return new FormGroup<ContinuousDeploymentSingleHeaderConfigFormProperties>({
			Header: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContinuousDeploymentPolicyType { SingleWeight = 'SingleWeight', SingleHeader = 'SingleHeader' }

	export interface ContinuousDeploymentPolicyAlreadyExists {
	}
	export interface ContinuousDeploymentPolicyAlreadyExistsFormProperties {
	}
	export function CreateContinuousDeploymentPolicyAlreadyExistsFormGroup() {
		return new FormGroup<ContinuousDeploymentPolicyAlreadyExistsFormProperties>({
		});

	}

	export interface TooManyContinuousDeploymentPolicies {
	}
	export interface TooManyContinuousDeploymentPoliciesFormProperties {
	}
	export function CreateTooManyContinuousDeploymentPoliciesFormGroup() {
		return new FormGroup<TooManyContinuousDeploymentPoliciesFormProperties>({
		});

	}

	export interface StagingDistributionInUse {
	}
	export interface StagingDistributionInUseFormProperties {
	}
	export function CreateStagingDistributionInUseFormGroup() {
		return new FormGroup<StagingDistributionInUseFormProperties>({
		});

	}


	/** The returned result of the corresponding request. */
	export interface CreateDistributionResult {
		Distribution?: Distribution;
	}

	/** The returned result of the corresponding request. */
	export interface CreateDistributionResultFormProperties {
	}
	export function CreateCreateDistributionResultFormGroup() {
		return new FormGroup<CreateDistributionResultFormProperties>({
		});

	}

	export interface IllegalOriginAccessConfiguration {
	}
	export interface IllegalOriginAccessConfigurationFormProperties {
	}
	export function CreateIllegalOriginAccessConfigurationFormGroup() {
		return new FormGroup<IllegalOriginAccessConfigurationFormProperties>({
		});

	}

	export interface ContinuousDeploymentPolicyInUse {
	}
	export interface ContinuousDeploymentPolicyInUseFormProperties {
	}
	export function CreateContinuousDeploymentPolicyInUseFormGroup() {
		return new FormGroup<ContinuousDeploymentPolicyInUseFormProperties>({
		});

	}

	export interface NoSuchContinuousDeploymentPolicy {
	}
	export interface NoSuchContinuousDeploymentPolicyFormProperties {
	}
	export function CreateNoSuchContinuousDeploymentPolicyFormGroup() {
		return new FormGroup<NoSuchContinuousDeploymentPolicyFormProperties>({
		});

	}

	export interface InvalidDomainNameForOriginAccessControl {
	}
	export interface InvalidDomainNameForOriginAccessControlFormProperties {
	}
	export function CreateInvalidDomainNameForOriginAccessControlFormGroup() {
		return new FormGroup<InvalidDomainNameForOriginAccessControlFormProperties>({
		});

	}


	/** The returned result of the corresponding request. */
	export interface CreateDistributionWithTagsResult {
		Distribution?: Distribution;
	}

	/** The returned result of the corresponding request. */
	export interface CreateDistributionWithTagsResultFormProperties {
	}
	export function CreateCreateDistributionWithTagsResultFormGroup() {
		return new FormGroup<CreateDistributionWithTagsResultFormProperties>({
		});

	}


	/** A complex type that contains zero or more <code>Tag</code> elements. */
	export interface Tags {
		Items?: Array<string>;
	}

	/** A complex type that contains zero or more <code>Tag</code> elements. */
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}

	export interface InvalidTagging {
	}
	export interface InvalidTaggingFormProperties {
	}
	export function CreateInvalidTaggingFormGroup() {
		return new FormGroup<InvalidTaggingFormProperties>({
		});

	}

	export interface CreateFieldLevelEncryptionConfigResult {
		FieldLevelEncryption?: FieldLevelEncryption;
	}
	export interface CreateFieldLevelEncryptionConfigResultFormProperties {
	}
	export function CreateCreateFieldLevelEncryptionConfigResultFormGroup() {
		return new FormGroup<CreateFieldLevelEncryptionConfigResultFormProperties>({
		});

	}


	/** A complex data type that includes the profile configurations and other options specified for field-level encryption. */
	export interface FieldLevelEncryption {

		/** Required */
		Id: string;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		FieldLevelEncryptionConfig: FieldLevelEncryptionConfig;
	}

	/** A complex data type that includes the profile configurations and other options specified for field-level encryption. */
	export interface FieldLevelEncryptionFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateFieldLevelEncryptionFormGroup() {
		return new FormGroup<FieldLevelEncryptionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex data type that includes the profile configurations specified for field-level encryption. */
	export interface FieldLevelEncryptionConfig {

		/** Required */
		CallerReference: string;
		Comment?: string;
		QueryArgProfileConfig?: QueryArgProfileConfig;
		ContentTypeProfileConfig?: ContentTypeProfileConfig;
	}

	/** A complex data type that includes the profile configurations specified for field-level encryption. */
	export interface FieldLevelEncryptionConfigFormProperties {

		/** Required */
		CallerReference: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateFieldLevelEncryptionConfigFormGroup() {
		return new FormGroup<FieldLevelEncryptionConfigFormProperties>({
			CallerReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for query argument-profile mapping for field-level encryption. */
	export interface QueryArgProfileConfig {

		/** Required */
		ForwardWhenQueryArgProfileIsUnknown: boolean;
		QueryArgProfiles?: QueryArgProfiles;
	}

	/** Configuration for query argument-profile mapping for field-level encryption. */
	export interface QueryArgProfileConfigFormProperties {

		/** Required */
		ForwardWhenQueryArgProfileIsUnknown: FormControl<boolean | null | undefined>,
	}
	export function CreateQueryArgProfileConfigFormGroup() {
		return new FormGroup<QueryArgProfileConfigFormProperties>({
			ForwardWhenQueryArgProfileIsUnknown: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Query argument-profile mapping for field-level encryption. */
	export interface QueryArgProfiles {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** Query argument-profile mapping for field-level encryption. */
	export interface QueryArgProfilesFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateQueryArgProfilesFormGroup() {
		return new FormGroup<QueryArgProfilesFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration for a field-level encryption content type-profile mapping. */
	export interface ContentTypeProfileConfig {

		/** Required */
		ForwardWhenContentTypeIsUnknown: boolean;
		ContentTypeProfiles?: ContentTypeProfiles;
	}

	/** The configuration for a field-level encryption content type-profile mapping. */
	export interface ContentTypeProfileConfigFormProperties {

		/** Required */
		ForwardWhenContentTypeIsUnknown: FormControl<boolean | null | undefined>,
	}
	export function CreateContentTypeProfileConfigFormGroup() {
		return new FormGroup<ContentTypeProfileConfigFormProperties>({
			ForwardWhenContentTypeIsUnknown: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Field-level encryption content type-profile. */
	export interface ContentTypeProfiles {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** Field-level encryption content type-profile. */
	export interface ContentTypeProfilesFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateContentTypeProfilesFormGroup() {
		return new FormGroup<ContentTypeProfilesFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NoSuchFieldLevelEncryptionProfile {
	}
	export interface NoSuchFieldLevelEncryptionProfileFormProperties {
	}
	export function CreateNoSuchFieldLevelEncryptionProfileFormGroup() {
		return new FormGroup<NoSuchFieldLevelEncryptionProfileFormProperties>({
		});

	}

	export interface FieldLevelEncryptionConfigAlreadyExists {
	}
	export interface FieldLevelEncryptionConfigAlreadyExistsFormProperties {
	}
	export function CreateFieldLevelEncryptionConfigAlreadyExistsFormGroup() {
		return new FormGroup<FieldLevelEncryptionConfigAlreadyExistsFormProperties>({
		});

	}

	export interface TooManyFieldLevelEncryptionConfigs {
	}
	export interface TooManyFieldLevelEncryptionConfigsFormProperties {
	}
	export function CreateTooManyFieldLevelEncryptionConfigsFormGroup() {
		return new FormGroup<TooManyFieldLevelEncryptionConfigsFormProperties>({
		});

	}

	export interface TooManyFieldLevelEncryptionQueryArgProfiles {
	}
	export interface TooManyFieldLevelEncryptionQueryArgProfilesFormProperties {
	}
	export function CreateTooManyFieldLevelEncryptionQueryArgProfilesFormGroup() {
		return new FormGroup<TooManyFieldLevelEncryptionQueryArgProfilesFormProperties>({
		});

	}

	export interface TooManyFieldLevelEncryptionContentTypeProfiles {
	}
	export interface TooManyFieldLevelEncryptionContentTypeProfilesFormProperties {
	}
	export function CreateTooManyFieldLevelEncryptionContentTypeProfilesFormGroup() {
		return new FormGroup<TooManyFieldLevelEncryptionContentTypeProfilesFormProperties>({
		});

	}

	export interface QueryArgProfileEmpty {
	}
	export interface QueryArgProfileEmptyFormProperties {
	}
	export function CreateQueryArgProfileEmptyFormGroup() {
		return new FormGroup<QueryArgProfileEmptyFormProperties>({
		});

	}

	export interface CreateFieldLevelEncryptionProfileResult {
		FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
	}
	export interface CreateFieldLevelEncryptionProfileResultFormProperties {
	}
	export function CreateCreateFieldLevelEncryptionProfileResultFormGroup() {
		return new FormGroup<CreateFieldLevelEncryptionProfileResultFormProperties>({
		});

	}


	/** A complex data type for field-level encryption profiles. */
	export interface FieldLevelEncryptionProfile {

		/** Required */
		Id: string;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;
	}

	/** A complex data type for field-level encryption profiles. */
	export interface FieldLevelEncryptionProfileFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateFieldLevelEncryptionProfileFormGroup() {
		return new FormGroup<FieldLevelEncryptionProfileFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex data type of profiles for the field-level encryption. */
	export interface FieldLevelEncryptionProfileConfig {

		/** Required */
		Name: string;

		/** Required */
		CallerReference: string;
		Comment?: string;

		/** Required */
		EncryptionEntities: EncryptionEntities;
	}

	/** A complex data type of profiles for the field-level encryption. */
	export interface FieldLevelEncryptionProfileConfigFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		CallerReference: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateFieldLevelEncryptionProfileConfigFormGroup() {
		return new FormGroup<FieldLevelEncryptionProfileConfigFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CallerReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Complex data type for field-level encryption profiles that includes all of the encryption entities. */
	export interface EncryptionEntities {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** Complex data type for field-level encryption profiles that includes all of the encryption entities. */
	export interface EncryptionEntitiesFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateEncryptionEntitiesFormGroup() {
		return new FormGroup<EncryptionEntitiesFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NoSuchPublicKey {
	}
	export interface NoSuchPublicKeyFormProperties {
	}
	export function CreateNoSuchPublicKeyFormGroup() {
		return new FormGroup<NoSuchPublicKeyFormProperties>({
		});

	}

	export interface FieldLevelEncryptionProfileAlreadyExists {
	}
	export interface FieldLevelEncryptionProfileAlreadyExistsFormProperties {
	}
	export function CreateFieldLevelEncryptionProfileAlreadyExistsFormGroup() {
		return new FormGroup<FieldLevelEncryptionProfileAlreadyExistsFormProperties>({
		});

	}

	export interface FieldLevelEncryptionProfileSizeExceeded {
	}
	export interface FieldLevelEncryptionProfileSizeExceededFormProperties {
	}
	export function CreateFieldLevelEncryptionProfileSizeExceededFormGroup() {
		return new FormGroup<FieldLevelEncryptionProfileSizeExceededFormProperties>({
		});

	}

	export interface TooManyFieldLevelEncryptionProfiles {
	}
	export interface TooManyFieldLevelEncryptionProfilesFormProperties {
	}
	export function CreateTooManyFieldLevelEncryptionProfilesFormGroup() {
		return new FormGroup<TooManyFieldLevelEncryptionProfilesFormProperties>({
		});

	}

	export interface TooManyFieldLevelEncryptionEncryptionEntities {
	}
	export interface TooManyFieldLevelEncryptionEncryptionEntitiesFormProperties {
	}
	export function CreateTooManyFieldLevelEncryptionEncryptionEntitiesFormGroup() {
		return new FormGroup<TooManyFieldLevelEncryptionEncryptionEntitiesFormProperties>({
		});

	}

	export interface TooManyFieldLevelEncryptionFieldPatterns {
	}
	export interface TooManyFieldLevelEncryptionFieldPatternsFormProperties {
	}
	export function CreateTooManyFieldLevelEncryptionFieldPatternsFormGroup() {
		return new FormGroup<TooManyFieldLevelEncryptionFieldPatternsFormProperties>({
		});

	}

	export interface CreateFunctionResult {
		FunctionSummary?: FunctionSummary;
	}
	export interface CreateFunctionResultFormProperties {
	}
	export function CreateCreateFunctionResultFormGroup() {
		return new FormGroup<CreateFunctionResultFormProperties>({
		});

	}


	/** Contains configuration information and metadata about a CloudFront function. */
	export interface FunctionSummary {

		/** Required */
		Name: string;
		Status?: string;

		/** Required */
		FunctionConfig: FunctionConfig;

		/** Required */
		FunctionMetadata: FunctionMetadata;
	}

	/** Contains configuration information and metadata about a CloudFront function. */
	export interface FunctionSummaryFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateFunctionSummaryFormGroup() {
		return new FormGroup<FunctionSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains configuration information about a CloudFront function. */
	export interface FunctionConfig {

		/** Required */
		Comment: string;

		/** Required */
		Runtime: FunctionRuntime;
	}

	/** Contains configuration information about a CloudFront function. */
	export interface FunctionConfigFormProperties {

		/** Required */
		Comment: FormControl<string | null | undefined>,

		/** Required */
		Runtime: FormControl<FunctionRuntime | null | undefined>,
	}
	export function CreateFunctionConfigFormGroup() {
		return new FormGroup<FunctionConfigFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Runtime: new FormControl<FunctionRuntime | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FunctionRuntime { 'cloudfront-js-1.0' = 'cloudfront-js-1.0', 'cloudfront-js-2.0' = 'cloudfront-js-2.0' }


	/** Contains metadata about a CloudFront function. */
	export interface FunctionMetadata {

		/** Required */
		FunctionARN: string;
		Stage?: FunctionStage;
		CreatedTime?: Date;

		/** Required */
		LastModifiedTime: Date;
	}

	/** Contains metadata about a CloudFront function. */
	export interface FunctionMetadataFormProperties {

		/** Required */
		FunctionARN: FormControl<string | null | undefined>,
		Stage: FormControl<FunctionStage | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateFunctionMetadataFormGroup() {
		return new FormGroup<FunctionMetadataFormProperties>({
			FunctionARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Stage: new FormControl<FunctionStage | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FunctionStage { DEVELOPMENT = 'DEVELOPMENT', LIVE = 'LIVE' }

	export interface TooManyFunctions {
	}
	export interface TooManyFunctionsFormProperties {
	}
	export function CreateTooManyFunctionsFormGroup() {
		return new FormGroup<TooManyFunctionsFormProperties>({
		});

	}

	export interface FunctionAlreadyExists {
	}
	export interface FunctionAlreadyExistsFormProperties {
	}
	export function CreateFunctionAlreadyExistsFormGroup() {
		return new FormGroup<FunctionAlreadyExistsFormProperties>({
		});

	}

	export interface FunctionSizeLimitExceeded {
	}
	export interface FunctionSizeLimitExceededFormProperties {
	}
	export function CreateFunctionSizeLimitExceededFormGroup() {
		return new FormGroup<FunctionSizeLimitExceededFormProperties>({
		});

	}

	export interface UnsupportedOperation {
	}
	export interface UnsupportedOperationFormProperties {
	}
	export function CreateUnsupportedOperationFormGroup() {
		return new FormGroup<UnsupportedOperationFormProperties>({
		});

	}


	/** The returned result of the corresponding request. */
	export interface CreateInvalidationResult {
		Invalidation?: Invalidation;
	}

	/** The returned result of the corresponding request. */
	export interface CreateInvalidationResultFormProperties {
	}
	export function CreateCreateInvalidationResultFormGroup() {
		return new FormGroup<CreateInvalidationResultFormProperties>({
		});

	}


	/** An invalidation. */
	export interface Invalidation {

		/** Required */
		Id: string;

		/** Required */
		Status: string;

		/** Required */
		CreateTime: Date;

		/** Required */
		InvalidationBatch: InvalidationBatch;
	}

	/** An invalidation. */
	export interface InvalidationFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<string | null | undefined>,

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,
	}
	export function CreateInvalidationFormGroup() {
		return new FormGroup<InvalidationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An invalidation batch. */
	export interface InvalidationBatch {

		/** Required */
		Paths: Paths;

		/** Required */
		CallerReference: string;
	}

	/** An invalidation batch. */
	export interface InvalidationBatchFormProperties {

		/** Required */
		CallerReference: FormControl<string | null | undefined>,
	}
	export function CreateInvalidationBatchFormGroup() {
		return new FormGroup<InvalidationBatchFormProperties>({
			CallerReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface Paths {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface PathsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreatePathsFormGroup() {
		return new FormGroup<PathsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchTooLarge {
	}
	export interface BatchTooLargeFormProperties {
	}
	export function CreateBatchTooLargeFormGroup() {
		return new FormGroup<BatchTooLargeFormProperties>({
		});

	}

	export interface TooManyInvalidationsInProgress {
	}
	export interface TooManyInvalidationsInProgressFormProperties {
	}
	export function CreateTooManyInvalidationsInProgressFormGroup() {
		return new FormGroup<TooManyInvalidationsInProgressFormProperties>({
		});

	}

	export interface CreateKeyGroupResult {
		KeyGroup?: KeyGroup;
	}
	export interface CreateKeyGroupResultFormProperties {
	}
	export function CreateCreateKeyGroupResultFormGroup() {
		return new FormGroup<CreateKeyGroupResultFormProperties>({
		});

	}


	/** <p>A key group.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p> */
	export interface KeyGroup {

		/** Required */
		Id: string;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		KeyGroupConfig: KeyGroupConfig;
	}

	/** <p>A key group.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p> */
	export interface KeyGroupFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateKeyGroupFormGroup() {
		return new FormGroup<KeyGroupFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p> */
	export interface KeyGroupConfig {

		/** Required */
		Name: string;

		/** Required */
		Items: Array<string>;
		Comment?: string;
	}

	/** <p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p> */
	export interface KeyGroupConfigFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateKeyGroupConfigFormGroup() {
		return new FormGroup<KeyGroupConfigFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface KeyGroupAlreadyExists {
	}
	export interface KeyGroupAlreadyExistsFormProperties {
	}
	export function CreateKeyGroupAlreadyExistsFormGroup() {
		return new FormGroup<KeyGroupAlreadyExistsFormProperties>({
		});

	}

	export interface TooManyKeyGroups {
	}
	export interface TooManyKeyGroupsFormProperties {
	}
	export function CreateTooManyKeyGroupsFormGroup() {
		return new FormGroup<TooManyKeyGroupsFormProperties>({
		});

	}

	export interface TooManyPublicKeysInKeyGroup {
	}
	export interface TooManyPublicKeysInKeyGroupFormProperties {
	}
	export function CreateTooManyPublicKeysInKeyGroupFormGroup() {
		return new FormGroup<TooManyPublicKeysInKeyGroupFormProperties>({
		});

	}

	export interface CreateMonitoringSubscriptionResult {
		MonitoringSubscription?: MonitoringSubscription;
	}
	export interface CreateMonitoringSubscriptionResultFormProperties {
	}
	export function CreateCreateMonitoringSubscriptionResultFormGroup() {
		return new FormGroup<CreateMonitoringSubscriptionResultFormProperties>({
		});

	}


	/** A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution. */
	export interface MonitoringSubscription {
		RealtimeMetricsSubscriptionConfig?: RealtimeMetricsSubscriptionConfig;
	}

	/** A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution. */
	export interface MonitoringSubscriptionFormProperties {
	}
	export function CreateMonitoringSubscriptionFormGroup() {
		return new FormGroup<MonitoringSubscriptionFormProperties>({
		});

	}


	/** A subscription configuration for additional CloudWatch metrics. */
	export interface RealtimeMetricsSubscriptionConfig {

		/** Required */
		RealtimeMetricsSubscriptionStatus: RealtimeMetricsSubscriptionStatus;
	}

	/** A subscription configuration for additional CloudWatch metrics. */
	export interface RealtimeMetricsSubscriptionConfigFormProperties {

		/** Required */
		RealtimeMetricsSubscriptionStatus: FormControl<RealtimeMetricsSubscriptionStatus | null | undefined>,
	}
	export function CreateRealtimeMetricsSubscriptionConfigFormGroup() {
		return new FormGroup<RealtimeMetricsSubscriptionConfigFormProperties>({
			RealtimeMetricsSubscriptionStatus: new FormControl<RealtimeMetricsSubscriptionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RealtimeMetricsSubscriptionStatus { Enabled = 'Enabled', Disabled = 'Disabled' }

	export interface MonitoringSubscriptionAlreadyExists {
	}
	export interface MonitoringSubscriptionAlreadyExistsFormProperties {
	}
	export function CreateMonitoringSubscriptionAlreadyExistsFormGroup() {
		return new FormGroup<MonitoringSubscriptionAlreadyExistsFormProperties>({
		});

	}

	export interface CreateOriginAccessControlResult {
		OriginAccessControl?: OriginAccessControl;
	}
	export interface CreateOriginAccessControlResultFormProperties {
	}
	export function CreateCreateOriginAccessControlResultFormGroup() {
		return new FormGroup<CreateOriginAccessControlResultFormProperties>({
		});

	}


	/** A CloudFront origin access control, including its unique identifier. */
	export interface OriginAccessControl {

		/** Required */
		Id: string;
		OriginAccessControlConfig?: OriginAccessControlConfig;
	}

	/** A CloudFront origin access control, including its unique identifier. */
	export interface OriginAccessControlFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateOriginAccessControlFormGroup() {
		return new FormGroup<OriginAccessControlFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A CloudFront origin access control configuration. */
	export interface OriginAccessControlConfig {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		SigningProtocol: OriginAccessControlSigningProtocols;

		/** Required */
		SigningBehavior: OriginAccessControlSigningBehaviors;

		/** Required */
		OriginAccessControlOriginType: OriginAccessControlOriginTypes;
	}

	/** A CloudFront origin access control configuration. */
	export interface OriginAccessControlConfigFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		SigningProtocol: FormControl<OriginAccessControlSigningProtocols | null | undefined>,

		/** Required */
		SigningBehavior: FormControl<OriginAccessControlSigningBehaviors | null | undefined>,

		/** Required */
		OriginAccessControlOriginType: FormControl<OriginAccessControlOriginTypes | null | undefined>,
	}
	export function CreateOriginAccessControlConfigFormGroup() {
		return new FormGroup<OriginAccessControlConfigFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			SigningProtocol: new FormControl<OriginAccessControlSigningProtocols | null | undefined>(undefined, [Validators.required]),
			SigningBehavior: new FormControl<OriginAccessControlSigningBehaviors | null | undefined>(undefined, [Validators.required]),
			OriginAccessControlOriginType: new FormControl<OriginAccessControlOriginTypes | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OriginAccessControlSigningProtocols { sigv4 = 'sigv4' }

	export enum OriginAccessControlSigningBehaviors { never = 'never', always = 'always', 'no-override' = 'no-override' }

	export enum OriginAccessControlOriginTypes { s3 = 's3', mediastore = 'mediastore' }

	export interface OriginAccessControlAlreadyExists {
	}
	export interface OriginAccessControlAlreadyExistsFormProperties {
	}
	export function CreateOriginAccessControlAlreadyExistsFormGroup() {
		return new FormGroup<OriginAccessControlAlreadyExistsFormProperties>({
		});

	}

	export interface TooManyOriginAccessControls {
	}
	export interface TooManyOriginAccessControlsFormProperties {
	}
	export function CreateTooManyOriginAccessControlsFormGroup() {
		return new FormGroup<TooManyOriginAccessControlsFormProperties>({
		});

	}

	export interface CreateOriginRequestPolicyResult {
		OriginRequestPolicy?: OriginRequestPolicy;
	}
	export interface CreateOriginRequestPolicyResultFormProperties {
	}
	export function CreateCreateOriginRequestPolicyResultFormGroup() {
		return new FormGroup<CreateOriginRequestPolicyResultFormProperties>({
		});

	}


	/** <p>An origin request policy.</p> <p>When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p> */
	export interface OriginRequestPolicy {

		/** Required */
		Id: string;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		OriginRequestPolicyConfig: OriginRequestPolicyConfig;
	}

	/** <p>An origin request policy.</p> <p>When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p> */
	export interface OriginRequestPolicyFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateOriginRequestPolicyFormGroup() {
		return new FormGroup<OriginRequestPolicyFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p> */
	export interface OriginRequestPolicyConfig {
		Comment?: string;

		/** Required */
		Name: string;

		/** Required */
		HeadersConfig: OriginRequestPolicyHeadersConfig;

		/** Required */
		CookiesConfig: OriginRequestPolicyCookiesConfig;

		/** Required */
		QueryStringsConfig: OriginRequestPolicyQueryStringsConfig;
	}

	/** <p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p> */
	export interface OriginRequestPolicyConfigFormProperties {
		Comment: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOriginRequestPolicyConfigFormGroup() {
		return new FormGroup<OriginRequestPolicyConfigFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin. */
	export interface OriginRequestPolicyHeadersConfig {

		/** Required */
		HeaderBehavior: OriginRequestPolicyHeaderBehavior;

		/** Contains a list of HTTP header names. */
		Headers?: Headers;
	}

	/** An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin. */
	export interface OriginRequestPolicyHeadersConfigFormProperties {

		/** Required */
		HeaderBehavior: FormControl<OriginRequestPolicyHeaderBehavior | null | undefined>,
	}
	export function CreateOriginRequestPolicyHeadersConfigFormGroup() {
		return new FormGroup<OriginRequestPolicyHeadersConfigFormProperties>({
			HeaderBehavior: new FormControl<OriginRequestPolicyHeaderBehavior | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OriginRequestPolicyHeaderBehavior { none = 'none', whitelist = 'whitelist', allViewer = 'allViewer', allViewerAndWhitelistCloudFront = 'allViewerAndWhitelistCloudFront', allExcept = 'allExcept' }


	/** An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin. */
	export interface OriginRequestPolicyCookiesConfig {

		/** Required */
		CookieBehavior: OriginRequestPolicyCookieBehavior;

		/** Contains a list of cookie names. */
		Cookies?: CookieNames;
	}

	/** An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin. */
	export interface OriginRequestPolicyCookiesConfigFormProperties {

		/** Required */
		CookieBehavior: FormControl<OriginRequestPolicyCookieBehavior | null | undefined>,
	}
	export function CreateOriginRequestPolicyCookiesConfigFormGroup() {
		return new FormGroup<OriginRequestPolicyCookiesConfigFormProperties>({
			CookieBehavior: new FormControl<OriginRequestPolicyCookieBehavior | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OriginRequestPolicyCookieBehavior { none = 'none', whitelist = 'whitelist', all = 'all', allExcept = 'allExcept' }


	/** An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in requests that CloudFront sends to the origin. */
	export interface OriginRequestPolicyQueryStringsConfig {

		/** Required */
		QueryStringBehavior: OriginRequestPolicyCookieBehavior;
		QueryStrings?: QueryStringNames;
	}

	/** An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in requests that CloudFront sends to the origin. */
	export interface OriginRequestPolicyQueryStringsConfigFormProperties {

		/** Required */
		QueryStringBehavior: FormControl<OriginRequestPolicyCookieBehavior | null | undefined>,
	}
	export function CreateOriginRequestPolicyQueryStringsConfigFormGroup() {
		return new FormGroup<OriginRequestPolicyQueryStringsConfigFormProperties>({
			QueryStringBehavior: new FormControl<OriginRequestPolicyCookieBehavior | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OriginRequestPolicyAlreadyExists {
	}
	export interface OriginRequestPolicyAlreadyExistsFormProperties {
	}
	export function CreateOriginRequestPolicyAlreadyExistsFormGroup() {
		return new FormGroup<OriginRequestPolicyAlreadyExistsFormProperties>({
		});

	}

	export interface TooManyOriginRequestPolicies {
	}
	export interface TooManyOriginRequestPoliciesFormProperties {
	}
	export function CreateTooManyOriginRequestPoliciesFormGroup() {
		return new FormGroup<TooManyOriginRequestPoliciesFormProperties>({
		});

	}

	export interface TooManyHeadersInOriginRequestPolicy {
	}
	export interface TooManyHeadersInOriginRequestPolicyFormProperties {
	}
	export function CreateTooManyHeadersInOriginRequestPolicyFormGroup() {
		return new FormGroup<TooManyHeadersInOriginRequestPolicyFormProperties>({
		});

	}

	export interface TooManyCookiesInOriginRequestPolicy {
	}
	export interface TooManyCookiesInOriginRequestPolicyFormProperties {
	}
	export function CreateTooManyCookiesInOriginRequestPolicyFormGroup() {
		return new FormGroup<TooManyCookiesInOriginRequestPolicyFormProperties>({
		});

	}

	export interface TooManyQueryStringsInOriginRequestPolicy {
	}
	export interface TooManyQueryStringsInOriginRequestPolicyFormProperties {
	}
	export function CreateTooManyQueryStringsInOriginRequestPolicyFormGroup() {
		return new FormGroup<TooManyQueryStringsInOriginRequestPolicyFormProperties>({
		});

	}

	export interface CreatePublicKeyResult {
		PublicKey?: PublicKey;
	}
	export interface CreatePublicKeyResultFormProperties {
	}
	export function CreateCreatePublicKeyResultFormGroup() {
		return new FormGroup<CreatePublicKeyResultFormProperties>({
		});

	}


	/** A public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>. */
	export interface PublicKey {

		/** Required */
		Id: string;

		/** Required */
		CreatedTime: Date;

		/** Required */
		PublicKeyConfig: PublicKeyConfig;
	}

	/** A public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>. */
	export interface PublicKeyFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreatePublicKeyFormGroup() {
		return new FormGroup<PublicKeyFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>. */
	export interface PublicKeyConfig {

		/** Required */
		CallerReference: string;

		/** Required */
		Name: string;

		/** Required */
		EncodedKey: string;
		Comment?: string;
	}

	/** Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>. */
	export interface PublicKeyConfigFormProperties {

		/** Required */
		CallerReference: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		EncodedKey: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
	}
	export function CreatePublicKeyConfigFormGroup() {
		return new FormGroup<PublicKeyConfigFormProperties>({
			CallerReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EncodedKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublicKeyAlreadyExists {
	}
	export interface PublicKeyAlreadyExistsFormProperties {
	}
	export function CreatePublicKeyAlreadyExistsFormGroup() {
		return new FormGroup<PublicKeyAlreadyExistsFormProperties>({
		});

	}

	export interface TooManyPublicKeys {
	}
	export interface TooManyPublicKeysFormProperties {
	}
	export function CreateTooManyPublicKeysFormGroup() {
		return new FormGroup<TooManyPublicKeysFormProperties>({
		});

	}

	export interface CreateRealtimeLogConfigResult {
		RealtimeLogConfig?: RealtimeLogConfig;
	}
	export interface CreateRealtimeLogConfigResultFormProperties {
	}
	export function CreateCreateRealtimeLogConfigResultFormGroup() {
		return new FormGroup<CreateRealtimeLogConfigResultFormProperties>({
		});

	}


	/** A real-time log configuration. */
	export interface RealtimeLogConfig {

		/** Required */
		ARN: string;

		/** Required */
		Name: string;

		/** Required */
		SamplingRate: number;

		/** Required */
		EndPoints: Array<EndPoint>;

		/** Required */
		Fields: Array<string>;
	}

	/** A real-time log configuration. */
	export interface RealtimeLogConfigFormProperties {

		/** Required */
		ARN: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		SamplingRate: FormControl<number | null | undefined>,
	}
	export function CreateRealtimeLogConfigFormGroup() {
		return new FormGroup<RealtimeLogConfigFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SamplingRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration. */
	export interface EndPoint {

		/** Required */
		StreamType: string;
		KinesisStreamConfig?: KinesisStreamConfig;
	}

	/** Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration. */
	export interface EndPointFormProperties {

		/** Required */
		StreamType: FormControl<string | null | undefined>,
	}
	export function CreateEndPointFormGroup() {
		return new FormGroup<EndPointFormProperties>({
			StreamType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the Amazon Kinesis data stream where you are sending real-time log data. */
	export interface KinesisStreamConfig {

		/** Required */
		RoleARN: string;

		/** Required */
		StreamARN: string;
	}

	/** Contains information about the Amazon Kinesis data stream where you are sending real-time log data. */
	export interface KinesisStreamConfigFormProperties {

		/** Required */
		RoleARN: FormControl<string | null | undefined>,

		/** Required */
		StreamARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisStreamConfigFormGroup() {
		return new FormGroup<KinesisStreamConfigFormProperties>({
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreamARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RealtimeLogConfigAlreadyExists {
	}
	export interface RealtimeLogConfigAlreadyExistsFormProperties {
	}
	export function CreateRealtimeLogConfigAlreadyExistsFormGroup() {
		return new FormGroup<RealtimeLogConfigAlreadyExistsFormProperties>({
		});

	}

	export interface TooManyRealtimeLogConfigs {
	}
	export interface TooManyRealtimeLogConfigsFormProperties {
	}
	export function CreateTooManyRealtimeLogConfigsFormGroup() {
		return new FormGroup<TooManyRealtimeLogConfigsFormProperties>({
		});

	}

	export interface CreateResponseHeadersPolicyResult {
		ResponseHeadersPolicy?: ResponseHeadersPolicy;
	}
	export interface CreateResponseHeadersPolicyResultFormProperties {
	}
	export function CreateCreateResponseHeadersPolicyResultFormGroup() {
		return new FormGroup<CreateResponseHeadersPolicyResultFormProperties>({
		});

	}


	/** <p>A response headers policy.</p> <p>A response headers policy contains information about a set of HTTP response headers.</p> <p>After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface ResponseHeadersPolicy {

		/** Required */
		Id: string;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig;
	}

	/** <p>A response headers policy.</p> <p>A response headers policy contains information about a set of HTTP response headers.</p> <p>After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface ResponseHeadersPolicyFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateResponseHeadersPolicyFormGroup() {
		return new FormGroup<ResponseHeadersPolicyFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p> */
	export interface ResponseHeadersPolicyConfig {
		Comment?: string;

		/** Required */
		Name: string;
		CorsConfig?: ResponseHeadersPolicyCorsConfig;
		SecurityHeadersConfig?: ResponseHeadersPolicySecurityHeadersConfig;
		ServerTimingHeadersConfig?: ResponseHeadersPolicyServerTimingHeadersConfig;
		CustomHeadersConfig?: ResponseHeadersPolicyCustomHeadersConfig;
		RemoveHeadersConfig?: ResponseHeadersPolicyRemoveHeadersConfig;
	}

	/** <p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p> */
	export interface ResponseHeadersPolicyConfigFormProperties {
		Comment: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateResponseHeadersPolicyConfigFormGroup() {
		return new FormGroup<ResponseHeadersPolicyConfigFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS). CloudFront adds these headers to HTTP responses that it sends for CORS requests that match a cache behavior associated with this response headers policy.</p> <p>For more information about CORS, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">Cross-Origin Resource Sharing (CORS)</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyCorsConfig {

		/** Required */
		AccessControlAllowOrigins: ResponseHeadersPolicyAccessControlAllowOrigins;

		/** Required */
		AccessControlAllowHeaders: ResponseHeadersPolicyAccessControlAllowHeaders;

		/** Required */
		AccessControlAllowMethods: ResponseHeadersPolicyAccessControlAllowMethods;

		/** Required */
		AccessControlAllowCredentials: boolean;
		AccessControlExposeHeaders?: ResponseHeadersPolicyAccessControlExposeHeaders;
		AccessControlMaxAgeSec?: number | null;

		/** Required */
		OriginOverride: boolean;
	}

	/** <p>A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS). CloudFront adds these headers to HTTP responses that it sends for CORS requests that match a cache behavior associated with this response headers policy.</p> <p>For more information about CORS, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">Cross-Origin Resource Sharing (CORS)</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyCorsConfigFormProperties {

		/** Required */
		AccessControlAllowCredentials: FormControl<boolean | null | undefined>,
		AccessControlMaxAgeSec: FormControl<number | null | undefined>,

		/** Required */
		OriginOverride: FormControl<boolean | null | undefined>,
	}
	export function CreateResponseHeadersPolicyCorsConfigFormGroup() {
		return new FormGroup<ResponseHeadersPolicyCorsConfigFormProperties>({
			AccessControlAllowCredentials: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			AccessControlMaxAgeSec: new FormControl<number | null | undefined>(undefined),
			OriginOverride: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A list of origins (domain names) that CloudFront can use as the value for the <code>Access-Control-Allow-Origin</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Origin</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin">Access-Control-Allow-Origin</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyAccessControlAllowOrigins {

		/** Required */
		Quantity: number;

		/** Required */
		Items: Array<string>;
	}

	/** <p>A list of origins (domain names) that CloudFront can use as the value for the <code>Access-Control-Allow-Origin</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Origin</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin">Access-Control-Allow-Origin</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyAccessControlAllowOriginsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateResponseHeadersPolicyAccessControlAllowOriginsFormGroup() {
		return new FormGroup<ResponseHeadersPolicyAccessControlAllowOriginsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A list of HTTP header names that CloudFront includes as values for the <code>Access-Control-Allow-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers">Access-Control-Allow-Headers</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyAccessControlAllowHeaders {

		/** Required */
		Quantity: number;

		/** Required */
		Items: Array<string>;
	}

	/** <p>A list of HTTP header names that CloudFront includes as values for the <code>Access-Control-Allow-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers">Access-Control-Allow-Headers</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyAccessControlAllowHeadersFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateResponseHeadersPolicyAccessControlAllowHeadersFormGroup() {
		return new FormGroup<ResponseHeadersPolicyAccessControlAllowHeadersFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A list of HTTP methods that CloudFront includes as values for the <code>Access-Control-Allow-Methods</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Methods</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods">Access-Control-Allow-Methods</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyAccessControlAllowMethods {

		/** Required */
		Quantity: number;

		/** Required */
		Items: Array<string>;
	}

	/** <p>A list of HTTP methods that CloudFront includes as values for the <code>Access-Control-Allow-Methods</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Methods</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods">Access-Control-Allow-Methods</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyAccessControlAllowMethodsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateResponseHeadersPolicyAccessControlAllowMethodsFormGroup() {
		return new FormGroup<ResponseHeadersPolicyAccessControlAllowMethodsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A list of HTTP headers that CloudFront includes as values for the <code>Access-Control-Expose-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Expose-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers">Access-Control-Expose-Headers</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyAccessControlExposeHeaders {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** <p>A list of HTTP headers that CloudFront includes as values for the <code>Access-Control-Expose-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Expose-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers">Access-Control-Expose-Headers</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyAccessControlExposeHeadersFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateResponseHeadersPolicyAccessControlExposeHeadersFormGroup() {
		return new FormGroup<ResponseHeadersPolicyAccessControlExposeHeadersFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A configuration for a set of security-related HTTP response headers. CloudFront adds these headers to HTTP responses that it sends for requests that match a cache behavior associated with this response headers policy. */
	export interface ResponseHeadersPolicySecurityHeadersConfig {
		XSSProtection?: ResponseHeadersPolicyXSSProtection;
		FrameOptions?: ResponseHeadersPolicyFrameOptions;
		ReferrerPolicy?: ResponseHeadersPolicyReferrerPolicy;
		ContentSecurityPolicy?: ResponseHeadersPolicyContentSecurityPolicy;
		ContentTypeOptions?: ResponseHeadersPolicyContentTypeOptions;
		StrictTransportSecurity?: ResponseHeadersPolicyStrictTransportSecurity;
	}

	/** A configuration for a set of security-related HTTP response headers. CloudFront adds these headers to HTTP responses that it sends for requests that match a cache behavior associated with this response headers policy. */
	export interface ResponseHeadersPolicySecurityHeadersConfigFormProperties {
	}
	export function CreateResponseHeadersPolicySecurityHeadersConfigFormGroup() {
		return new FormGroup<ResponseHeadersPolicySecurityHeadersConfigFormProperties>({
		});

	}


	/** <p>Determines whether CloudFront includes the <code>X-XSS-Protection</code> HTTP response header and the header's value.</p> <p>For more information about the <code>X-XSS-Protection</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyXSSProtection {

		/** Required */
		Override: boolean;

		/** Required */
		Protection: boolean;
		ModeBlock?: boolean | null;
		ReportUri?: string;
	}

	/** <p>Determines whether CloudFront includes the <code>X-XSS-Protection</code> HTTP response header and the header's value.</p> <p>For more information about the <code>X-XSS-Protection</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyXSSProtectionFormProperties {

		/** Required */
		Override: FormControl<boolean | null | undefined>,

		/** Required */
		Protection: FormControl<boolean | null | undefined>,
		ModeBlock: FormControl<boolean | null | undefined>,
		ReportUri: FormControl<string | null | undefined>,
	}
	export function CreateResponseHeadersPolicyXSSProtectionFormGroup() {
		return new FormGroup<ResponseHeadersPolicyXSSProtectionFormProperties>({
			Override: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Protection: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ModeBlock: new FormControl<boolean | null | undefined>(undefined),
			ReportUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Determines whether CloudFront includes the <code>X-Frame-Options</code> HTTP response header and the header's value.</p> <p>For more information about the <code>X-Frame-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">X-Frame-Options</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyFrameOptions {

		/** Required */
		Override: boolean;

		/** Required */
		FrameOption: FrameOptionsList;
	}

	/** <p>Determines whether CloudFront includes the <code>X-Frame-Options</code> HTTP response header and the header's value.</p> <p>For more information about the <code>X-Frame-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">X-Frame-Options</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyFrameOptionsFormProperties {

		/** Required */
		Override: FormControl<boolean | null | undefined>,

		/** Required */
		FrameOption: FormControl<FrameOptionsList | null | undefined>,
	}
	export function CreateResponseHeadersPolicyFrameOptionsFormGroup() {
		return new FormGroup<ResponseHeadersPolicyFrameOptionsFormProperties>({
			Override: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			FrameOption: new FormControl<FrameOptionsList | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FrameOptionsList { DENY = 'DENY', SAMEORIGIN = 'SAMEORIGIN' }


	/** <p>Determines whether CloudFront includes the <code>Referrer-Policy</code> HTTP response header and the header's value.</p> <p>For more information about the <code>Referrer-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyReferrerPolicy {

		/** Required */
		Override: boolean;

		/** Required */
		ReferrerPolicy: ReferrerPolicyList;
	}

	/** <p>Determines whether CloudFront includes the <code>Referrer-Policy</code> HTTP response header and the header's value.</p> <p>For more information about the <code>Referrer-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyReferrerPolicyFormProperties {

		/** Required */
		Override: FormControl<boolean | null | undefined>,

		/** Required */
		ReferrerPolicy: FormControl<ReferrerPolicyList | null | undefined>,
	}
	export function CreateResponseHeadersPolicyReferrerPolicyFormGroup() {
		return new FormGroup<ResponseHeadersPolicyReferrerPolicyFormProperties>({
			Override: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ReferrerPolicy: new FormControl<ReferrerPolicyList | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReferrerPolicyList { 'no-referrer' = 'no-referrer', 'no-referrer-when-downgrade' = 'no-referrer-when-downgrade', origin = 'origin', 'origin-when-cross-origin' = 'origin-when-cross-origin', 'same-origin' = 'same-origin', 'strict-origin' = 'strict-origin', 'strict-origin-when-cross-origin' = 'strict-origin-when-cross-origin', 'unsafe-url' = 'unsafe-url' }


	/** <p>The policy directives and their values that CloudFront includes as values for the <code>Content-Security-Policy</code> HTTP response header.</p> <p>For more information about the <code>Content-Security-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">Content-Security-Policy</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyContentSecurityPolicy {

		/** Required */
		Override: boolean;

		/** Required */
		ContentSecurityPolicy: string;
	}

	/** <p>The policy directives and their values that CloudFront includes as values for the <code>Content-Security-Policy</code> HTTP response header.</p> <p>For more information about the <code>Content-Security-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">Content-Security-Policy</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyContentSecurityPolicyFormProperties {

		/** Required */
		Override: FormControl<boolean | null | undefined>,

		/** Required */
		ContentSecurityPolicy: FormControl<string | null | undefined>,
	}
	export function CreateResponseHeadersPolicyContentSecurityPolicyFormGroup() {
		return new FormGroup<ResponseHeadersPolicyContentSecurityPolicyFormProperties>({
			Override: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ContentSecurityPolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Determines whether CloudFront includes the <code>X-Content-Type-Options</code> HTTP response header with its value set to <code>nosniff</code>.</p> <p>For more information about the <code>X-Content-Type-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options">X-Content-Type-Options</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyContentTypeOptions {

		/** Required */
		Override: boolean;
	}

	/** <p>Determines whether CloudFront includes the <code>X-Content-Type-Options</code> HTTP response header with its value set to <code>nosniff</code>.</p> <p>For more information about the <code>X-Content-Type-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options">X-Content-Type-Options</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyContentTypeOptionsFormProperties {

		/** Required */
		Override: FormControl<boolean | null | undefined>,
	}
	export function CreateResponseHeadersPolicyContentTypeOptionsFormGroup() {
		return new FormGroup<ResponseHeadersPolicyContentTypeOptionsFormProperties>({
			Override: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Determines whether CloudFront includes the <code>Strict-Transport-Security</code> HTTP response header and the header's value.</p> <p>For more information about the <code>Strict-Transport-Security</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">Strict-Transport-Security</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyStrictTransportSecurity {

		/** Required */
		Override: boolean;
		IncludeSubdomains?: boolean | null;
		Preload?: boolean | null;

		/** Required */
		AccessControlMaxAgeSec: number;
	}

	/** <p>Determines whether CloudFront includes the <code>Strict-Transport-Security</code> HTTP response header and the header's value.</p> <p>For more information about the <code>Strict-Transport-Security</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">Strict-Transport-Security</a> in the MDN Web Docs.</p> */
	export interface ResponseHeadersPolicyStrictTransportSecurityFormProperties {

		/** Required */
		Override: FormControl<boolean | null | undefined>,
		IncludeSubdomains: FormControl<boolean | null | undefined>,
		Preload: FormControl<boolean | null | undefined>,

		/** Required */
		AccessControlMaxAgeSec: FormControl<number | null | undefined>,
	}
	export function CreateResponseHeadersPolicyStrictTransportSecurityFormGroup() {
		return new FormGroup<ResponseHeadersPolicyStrictTransportSecurityFormProperties>({
			Override: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			IncludeSubdomains: new FormControl<boolean | null | undefined>(undefined),
			Preload: new FormControl<boolean | null | undefined>(undefined),
			AccessControlMaxAgeSec: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A configuration for enabling the <code>Server-Timing</code> header in HTTP responses sent from CloudFront. CloudFront adds this header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.</p> <p>You can use the <code>Server-Timing</code> header to view metrics that can help you gain insights about the behavior and performance of CloudFront. For example, you can see which cache layer served a cache hit, or the first byte latency from the origin when there was a cache miss. You can use the metrics in the <code>Server-Timing</code> header to troubleshoot issues or test the efficiency of your CloudFront configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#server-timing-header">Server-Timing header</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface ResponseHeadersPolicyServerTimingHeadersConfig {

		/** Required */
		Enabled: boolean;
		SamplingRate?: number | null;
	}

	/** <p>A configuration for enabling the <code>Server-Timing</code> header in HTTP responses sent from CloudFront. CloudFront adds this header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.</p> <p>You can use the <code>Server-Timing</code> header to view metrics that can help you gain insights about the behavior and performance of CloudFront. For example, you can see which cache layer served a cache hit, or the first byte latency from the origin when there was a cache miss. You can use the metrics in the <code>Server-Timing</code> header to troubleshoot issues or test the efficiency of your CloudFront configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#server-timing-header">Server-Timing header</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface ResponseHeadersPolicyServerTimingHeadersConfigFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		SamplingRate: FormControl<number | null | undefined>,
	}
	export function CreateResponseHeadersPolicyServerTimingHeadersConfigFormGroup() {
		return new FormGroup<ResponseHeadersPolicyServerTimingHeadersConfigFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			SamplingRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A list of HTTP response header names and their values. CloudFront includes these headers in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy. */
	export interface ResponseHeadersPolicyCustomHeadersConfig {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of HTTP response header names and their values. CloudFront includes these headers in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy. */
	export interface ResponseHeadersPolicyCustomHeadersConfigFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateResponseHeadersPolicyCustomHeadersConfigFormGroup() {
		return new FormGroup<ResponseHeadersPolicyCustomHeadersConfigFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of HTTP header names that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to. */
	export interface ResponseHeadersPolicyRemoveHeadersConfig {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of HTTP header names that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to. */
	export interface ResponseHeadersPolicyRemoveHeadersConfigFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateResponseHeadersPolicyRemoveHeadersConfigFormGroup() {
		return new FormGroup<ResponseHeadersPolicyRemoveHeadersConfigFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResponseHeadersPolicyAlreadyExists {
	}
	export interface ResponseHeadersPolicyAlreadyExistsFormProperties {
	}
	export function CreateResponseHeadersPolicyAlreadyExistsFormGroup() {
		return new FormGroup<ResponseHeadersPolicyAlreadyExistsFormProperties>({
		});

	}

	export interface TooManyResponseHeadersPolicies {
	}
	export interface TooManyResponseHeadersPoliciesFormProperties {
	}
	export function CreateTooManyResponseHeadersPoliciesFormGroup() {
		return new FormGroup<TooManyResponseHeadersPoliciesFormProperties>({
		});

	}

	export interface TooManyCustomHeadersInResponseHeadersPolicy {
	}
	export interface TooManyCustomHeadersInResponseHeadersPolicyFormProperties {
	}
	export function CreateTooManyCustomHeadersInResponseHeadersPolicyFormGroup() {
		return new FormGroup<TooManyCustomHeadersInResponseHeadersPolicyFormProperties>({
		});

	}

	export interface TooLongCSPInResponseHeadersPolicy {
	}
	export interface TooLongCSPInResponseHeadersPolicyFormProperties {
	}
	export function CreateTooLongCSPInResponseHeadersPolicyFormGroup() {
		return new FormGroup<TooLongCSPInResponseHeadersPolicyFormProperties>({
		});

	}

	export interface TooManyRemoveHeadersInResponseHeadersPolicy {
	}
	export interface TooManyRemoveHeadersInResponseHeadersPolicyFormProperties {
	}
	export function CreateTooManyRemoveHeadersInResponseHeadersPolicyFormGroup() {
		return new FormGroup<TooManyRemoveHeadersInResponseHeadersPolicyFormProperties>({
		});

	}


	/** The returned result of the corresponding request. */
	export interface CreateStreamingDistributionResult {
		StreamingDistribution?: StreamingDistribution;
	}

	/** The returned result of the corresponding request. */
	export interface CreateStreamingDistributionResultFormProperties {
	}
	export function CreateCreateStreamingDistributionResultFormGroup() {
		return new FormGroup<CreateStreamingDistributionResultFormProperties>({
		});

	}


	/** A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery. */
	export interface StreamingDistribution {

		/** Required */
		Id: string;

		/** Required */
		ARN: string;

		/** Required */
		Status: string;
		LastModifiedTime?: Date;

		/** Required */
		DomainName: string;

		/** Required */
		ActiveTrustedSigners: ActiveTrustedSigners;

		/** Required */
		StreamingDistributionConfig: StreamingDistributionConfig;
	}

	/** A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery. */
	export interface StreamingDistributionFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ARN: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<string | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateStreamingDistributionFormGroup() {
		return new FormGroup<StreamingDistributionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The RTMP distribution's configuration information. */
	export interface StreamingDistributionConfig {

		/** Required */
		CallerReference: string;

		/** Required */
		S3Origin: S3Origin;
		Aliases?: Aliases;

		/** Required */
		Comment: string;
		Logging?: StreamingLoggingConfig;

		/** Required */
		TrustedSigners: TrustedSigners;
		PriceClass?: PriceClass;

		/** Required */
		Enabled: boolean;
	}

	/** The RTMP distribution's configuration information. */
	export interface StreamingDistributionConfigFormProperties {

		/** Required */
		CallerReference: FormControl<string | null | undefined>,

		/** Required */
		Comment: FormControl<string | null | undefined>,
		PriceClass: FormControl<PriceClass | null | undefined>,

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateStreamingDistributionConfigFormGroup() {
		return new FormGroup<StreamingDistributionConfigFormProperties>({
			CallerReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PriceClass: new FormControl<PriceClass | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution. */
	export interface S3Origin {

		/** Required */
		DomainName: string;

		/** Required */
		OriginAccessIdentity: string;
	}

	/** A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution. */
	export interface S3OriginFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		OriginAccessIdentity: FormControl<string | null | undefined>,
	}
	export function CreateS3OriginFormGroup() {
		return new FormGroup<S3OriginFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OriginAccessIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that controls whether access logs are written for this streaming distribution. */
	export interface StreamingLoggingConfig {

		/** Required */
		Enabled: boolean;

		/** Required */
		Bucket: string;

		/** Required */
		Prefix: string;
	}

	/** A complex type that controls whether access logs are written for this streaming distribution. */
	export interface StreamingLoggingConfigFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		Bucket: FormControl<string | null | undefined>,

		/** Required */
		Prefix: FormControl<string | null | undefined>,
	}
	export function CreateStreamingLoggingConfigFormGroup() {
		return new FormGroup<StreamingLoggingConfigFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StreamingDistributionAlreadyExists {
	}
	export interface StreamingDistributionAlreadyExistsFormProperties {
	}
	export function CreateStreamingDistributionAlreadyExistsFormGroup() {
		return new FormGroup<StreamingDistributionAlreadyExistsFormProperties>({
		});

	}

	export interface TooManyStreamingDistributionCNAMEs {
	}
	export interface TooManyStreamingDistributionCNAMEsFormProperties {
	}
	export function CreateTooManyStreamingDistributionCNAMEsFormGroup() {
		return new FormGroup<TooManyStreamingDistributionCNAMEsFormProperties>({
		});

	}

	export interface TooManyStreamingDistributions {
	}
	export interface TooManyStreamingDistributionsFormProperties {
	}
	export function CreateTooManyStreamingDistributionsFormGroup() {
		return new FormGroup<TooManyStreamingDistributionsFormProperties>({
		});

	}


	/** The returned result of the corresponding request. */
	export interface CreateStreamingDistributionWithTagsResult {
		StreamingDistribution?: StreamingDistribution;
	}

	/** The returned result of the corresponding request. */
	export interface CreateStreamingDistributionWithTagsResultFormProperties {
	}
	export function CreateCreateStreamingDistributionWithTagsResultFormGroup() {
		return new FormGroup<CreateStreamingDistributionWithTagsResultFormProperties>({
		});

	}

	export interface IllegalDelete {
	}
	export interface IllegalDeleteFormProperties {
	}
	export function CreateIllegalDeleteFormGroup() {
		return new FormGroup<IllegalDeleteFormProperties>({
		});

	}

	export interface CachePolicyInUse {
	}
	export interface CachePolicyInUseFormProperties {
	}
	export function CreateCachePolicyInUseFormGroup() {
		return new FormGroup<CachePolicyInUseFormProperties>({
		});

	}

	export interface NoSuchCloudFrontOriginAccessIdentity {
	}
	export interface NoSuchCloudFrontOriginAccessIdentityFormProperties {
	}
	export function CreateNoSuchCloudFrontOriginAccessIdentityFormGroup() {
		return new FormGroup<NoSuchCloudFrontOriginAccessIdentityFormProperties>({
		});

	}

	export interface CloudFrontOriginAccessIdentityInUse {
	}
	export interface CloudFrontOriginAccessIdentityInUseFormProperties {
	}
	export function CreateCloudFrontOriginAccessIdentityInUseFormGroup() {
		return new FormGroup<CloudFrontOriginAccessIdentityInUseFormProperties>({
		});

	}

	export interface DistributionNotDisabled {
	}
	export interface DistributionNotDisabledFormProperties {
	}
	export function CreateDistributionNotDisabledFormGroup() {
		return new FormGroup<DistributionNotDisabledFormProperties>({
		});

	}

	export interface FieldLevelEncryptionConfigInUse {
	}
	export interface FieldLevelEncryptionConfigInUseFormProperties {
	}
	export function CreateFieldLevelEncryptionConfigInUseFormGroup() {
		return new FormGroup<FieldLevelEncryptionConfigInUseFormProperties>({
		});

	}

	export interface FieldLevelEncryptionProfileInUse {
	}
	export interface FieldLevelEncryptionProfileInUseFormProperties {
	}
	export function CreateFieldLevelEncryptionProfileInUseFormGroup() {
		return new FormGroup<FieldLevelEncryptionProfileInUseFormProperties>({
		});

	}

	export interface NoSuchFunctionExists {
	}
	export interface NoSuchFunctionExistsFormProperties {
	}
	export function CreateNoSuchFunctionExistsFormGroup() {
		return new FormGroup<NoSuchFunctionExistsFormProperties>({
		});

	}

	export interface FunctionInUse {
	}
	export interface FunctionInUseFormProperties {
	}
	export function CreateFunctionInUseFormGroup() {
		return new FormGroup<FunctionInUseFormProperties>({
		});

	}

	export interface NoSuchResource {
	}
	export interface NoSuchResourceFormProperties {
	}
	export function CreateNoSuchResourceFormGroup() {
		return new FormGroup<NoSuchResourceFormProperties>({
		});

	}

	export interface ResourceInUse {
	}
	export interface ResourceInUseFormProperties {
	}
	export function CreateResourceInUseFormGroup() {
		return new FormGroup<ResourceInUseFormProperties>({
		});

	}

	export interface DeleteMonitoringSubscriptionResult {
	}
	export interface DeleteMonitoringSubscriptionResultFormProperties {
	}
	export function CreateDeleteMonitoringSubscriptionResultFormGroup() {
		return new FormGroup<DeleteMonitoringSubscriptionResultFormProperties>({
		});

	}

	export interface NoSuchMonitoringSubscription {
	}
	export interface NoSuchMonitoringSubscriptionFormProperties {
	}
	export function CreateNoSuchMonitoringSubscriptionFormGroup() {
		return new FormGroup<NoSuchMonitoringSubscriptionFormProperties>({
		});

	}

	export interface NoSuchOriginAccessControl {
	}
	export interface NoSuchOriginAccessControlFormProperties {
	}
	export function CreateNoSuchOriginAccessControlFormGroup() {
		return new FormGroup<NoSuchOriginAccessControlFormProperties>({
		});

	}

	export interface OriginAccessControlInUse {
	}
	export interface OriginAccessControlInUseFormProperties {
	}
	export function CreateOriginAccessControlInUseFormGroup() {
		return new FormGroup<OriginAccessControlInUseFormProperties>({
		});

	}

	export interface OriginRequestPolicyInUse {
	}
	export interface OriginRequestPolicyInUseFormProperties {
	}
	export function CreateOriginRequestPolicyInUseFormGroup() {
		return new FormGroup<OriginRequestPolicyInUseFormProperties>({
		});

	}

	export interface PublicKeyInUse {
	}
	export interface PublicKeyInUseFormProperties {
	}
	export function CreatePublicKeyInUseFormGroup() {
		return new FormGroup<PublicKeyInUseFormProperties>({
		});

	}

	export interface RealtimeLogConfigInUse {
	}
	export interface RealtimeLogConfigInUseFormProperties {
	}
	export function CreateRealtimeLogConfigInUseFormGroup() {
		return new FormGroup<RealtimeLogConfigInUseFormProperties>({
		});

	}

	export interface ResponseHeadersPolicyInUse {
	}
	export interface ResponseHeadersPolicyInUseFormProperties {
	}
	export function CreateResponseHeadersPolicyInUseFormGroup() {
		return new FormGroup<ResponseHeadersPolicyInUseFormProperties>({
		});

	}

	export interface StreamingDistributionNotDisabled {
	}
	export interface StreamingDistributionNotDisabledFormProperties {
	}
	export function CreateStreamingDistributionNotDisabledFormGroup() {
		return new FormGroup<StreamingDistributionNotDisabledFormProperties>({
		});

	}

	export interface NoSuchStreamingDistribution {
	}
	export interface NoSuchStreamingDistributionFormProperties {
	}
	export function CreateNoSuchStreamingDistributionFormGroup() {
		return new FormGroup<NoSuchStreamingDistributionFormProperties>({
		});

	}

	export interface DescribeFunctionResult {
		FunctionSummary?: FunctionSummary;
	}
	export interface DescribeFunctionResultFormProperties {
	}
	export function CreateDescribeFunctionResultFormGroup() {
		return new FormGroup<DescribeFunctionResultFormProperties>({
		});

	}

	export interface GetCachePolicyResult {
		CachePolicy?: CachePolicy;
	}
	export interface GetCachePolicyResultFormProperties {
	}
	export function CreateGetCachePolicyResultFormGroup() {
		return new FormGroup<GetCachePolicyResultFormProperties>({
		});

	}

	export interface GetCachePolicyConfigResult {
		CachePolicyConfig?: CachePolicyConfig;
	}
	export interface GetCachePolicyConfigResultFormProperties {
	}
	export function CreateGetCachePolicyConfigResultFormGroup() {
		return new FormGroup<GetCachePolicyConfigResultFormProperties>({
		});

	}


	/** The returned result of the corresponding request. */
	export interface GetCloudFrontOriginAccessIdentityResult {
		CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
	}

	/** The returned result of the corresponding request. */
	export interface GetCloudFrontOriginAccessIdentityResultFormProperties {
	}
	export function CreateGetCloudFrontOriginAccessIdentityResultFormGroup() {
		return new FormGroup<GetCloudFrontOriginAccessIdentityResultFormProperties>({
		});

	}


	/** The returned result of the corresponding request. */
	export interface GetCloudFrontOriginAccessIdentityConfigResult {
		CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
	}

	/** The returned result of the corresponding request. */
	export interface GetCloudFrontOriginAccessIdentityConfigResultFormProperties {
	}
	export function CreateGetCloudFrontOriginAccessIdentityConfigResultFormGroup() {
		return new FormGroup<GetCloudFrontOriginAccessIdentityConfigResultFormProperties>({
		});

	}

	export interface GetContinuousDeploymentPolicyResult {
		ContinuousDeploymentPolicy?: ContinuousDeploymentPolicy;
	}
	export interface GetContinuousDeploymentPolicyResultFormProperties {
	}
	export function CreateGetContinuousDeploymentPolicyResultFormGroup() {
		return new FormGroup<GetContinuousDeploymentPolicyResultFormProperties>({
		});

	}

	export interface GetContinuousDeploymentPolicyConfigResult {

		/** Contains the configuration for a continuous deployment policy. */
		ContinuousDeploymentPolicyConfig?: ContinuousDeploymentPolicyConfig;
	}
	export interface GetContinuousDeploymentPolicyConfigResultFormProperties {
	}
	export function CreateGetContinuousDeploymentPolicyConfigResultFormGroup() {
		return new FormGroup<GetContinuousDeploymentPolicyConfigResultFormProperties>({
		});

	}


	/** The returned result of the corresponding request. */
	export interface GetDistributionResult {
		Distribution?: Distribution;
	}

	/** The returned result of the corresponding request. */
	export interface GetDistributionResultFormProperties {
	}
	export function CreateGetDistributionResultFormGroup() {
		return new FormGroup<GetDistributionResultFormProperties>({
		});

	}


	/** The returned result of the corresponding request. */
	export interface GetDistributionConfigResult {
		DistributionConfig?: DistributionConfig;
	}

	/** The returned result of the corresponding request. */
	export interface GetDistributionConfigResultFormProperties {
	}
	export function CreateGetDistributionConfigResultFormGroup() {
		return new FormGroup<GetDistributionConfigResultFormProperties>({
		});

	}

	export interface GetFieldLevelEncryptionResult {
		FieldLevelEncryption?: FieldLevelEncryption;
	}
	export interface GetFieldLevelEncryptionResultFormProperties {
	}
	export function CreateGetFieldLevelEncryptionResultFormGroup() {
		return new FormGroup<GetFieldLevelEncryptionResultFormProperties>({
		});

	}

	export interface GetFieldLevelEncryptionConfigResult {
		FieldLevelEncryptionConfig?: FieldLevelEncryptionConfig;
	}
	export interface GetFieldLevelEncryptionConfigResultFormProperties {
	}
	export function CreateGetFieldLevelEncryptionConfigResultFormGroup() {
		return new FormGroup<GetFieldLevelEncryptionConfigResultFormProperties>({
		});

	}

	export interface GetFieldLevelEncryptionProfileResult {
		FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
	}
	export interface GetFieldLevelEncryptionProfileResultFormProperties {
	}
	export function CreateGetFieldLevelEncryptionProfileResultFormGroup() {
		return new FormGroup<GetFieldLevelEncryptionProfileResultFormProperties>({
		});

	}

	export interface GetFieldLevelEncryptionProfileConfigResult {
		FieldLevelEncryptionProfileConfig?: FieldLevelEncryptionProfileConfig;
	}
	export interface GetFieldLevelEncryptionProfileConfigResultFormProperties {
	}
	export function CreateGetFieldLevelEncryptionProfileConfigResultFormGroup() {
		return new FormGroup<GetFieldLevelEncryptionProfileConfigResultFormProperties>({
		});

	}

	export interface GetFunctionResult {
		FunctionCode?: string;
	}
	export interface GetFunctionResultFormProperties {
		FunctionCode: FormControl<string | null | undefined>,
	}
	export function CreateGetFunctionResultFormGroup() {
		return new FormGroup<GetFunctionResultFormProperties>({
			FunctionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The returned result of the corresponding request. */
	export interface GetInvalidationResult {
		Invalidation?: Invalidation;
	}

	/** The returned result of the corresponding request. */
	export interface GetInvalidationResultFormProperties {
	}
	export function CreateGetInvalidationResultFormGroup() {
		return new FormGroup<GetInvalidationResultFormProperties>({
		});

	}

	export interface NoSuchInvalidation {
	}
	export interface NoSuchInvalidationFormProperties {
	}
	export function CreateNoSuchInvalidationFormGroup() {
		return new FormGroup<NoSuchInvalidationFormProperties>({
		});

	}

	export interface GetKeyGroupResult {
		KeyGroup?: KeyGroup;
	}
	export interface GetKeyGroupResultFormProperties {
	}
	export function CreateGetKeyGroupResultFormGroup() {
		return new FormGroup<GetKeyGroupResultFormProperties>({
		});

	}

	export interface GetKeyGroupConfigResult {
		KeyGroupConfig?: KeyGroupConfig;
	}
	export interface GetKeyGroupConfigResultFormProperties {
	}
	export function CreateGetKeyGroupConfigResultFormGroup() {
		return new FormGroup<GetKeyGroupConfigResultFormProperties>({
		});

	}

	export interface GetMonitoringSubscriptionResult {
		MonitoringSubscription?: MonitoringSubscription;
	}
	export interface GetMonitoringSubscriptionResultFormProperties {
	}
	export function CreateGetMonitoringSubscriptionResultFormGroup() {
		return new FormGroup<GetMonitoringSubscriptionResultFormProperties>({
		});

	}

	export interface GetOriginAccessControlResult {
		OriginAccessControl?: OriginAccessControl;
	}
	export interface GetOriginAccessControlResultFormProperties {
	}
	export function CreateGetOriginAccessControlResultFormGroup() {
		return new FormGroup<GetOriginAccessControlResultFormProperties>({
		});

	}

	export interface GetOriginAccessControlConfigResult {
		OriginAccessControlConfig?: OriginAccessControlConfig;
	}
	export interface GetOriginAccessControlConfigResultFormProperties {
	}
	export function CreateGetOriginAccessControlConfigResultFormGroup() {
		return new FormGroup<GetOriginAccessControlConfigResultFormProperties>({
		});

	}

	export interface GetOriginRequestPolicyResult {
		OriginRequestPolicy?: OriginRequestPolicy;
	}
	export interface GetOriginRequestPolicyResultFormProperties {
	}
	export function CreateGetOriginRequestPolicyResultFormGroup() {
		return new FormGroup<GetOriginRequestPolicyResultFormProperties>({
		});

	}

	export interface GetOriginRequestPolicyConfigResult {
		OriginRequestPolicyConfig?: OriginRequestPolicyConfig;
	}
	export interface GetOriginRequestPolicyConfigResultFormProperties {
	}
	export function CreateGetOriginRequestPolicyConfigResultFormGroup() {
		return new FormGroup<GetOriginRequestPolicyConfigResultFormProperties>({
		});

	}

	export interface GetPublicKeyResult {
		PublicKey?: PublicKey;
	}
	export interface GetPublicKeyResultFormProperties {
	}
	export function CreateGetPublicKeyResultFormGroup() {
		return new FormGroup<GetPublicKeyResultFormProperties>({
		});

	}

	export interface GetPublicKeyConfigResult {
		PublicKeyConfig?: PublicKeyConfig;
	}
	export interface GetPublicKeyConfigResultFormProperties {
	}
	export function CreateGetPublicKeyConfigResultFormGroup() {
		return new FormGroup<GetPublicKeyConfigResultFormProperties>({
		});

	}

	export interface GetRealtimeLogConfigResult {
		RealtimeLogConfig?: RealtimeLogConfig;
	}
	export interface GetRealtimeLogConfigResultFormProperties {
	}
	export function CreateGetRealtimeLogConfigResultFormGroup() {
		return new FormGroup<GetRealtimeLogConfigResultFormProperties>({
		});

	}

	export interface GetResponseHeadersPolicyResult {
		ResponseHeadersPolicy?: ResponseHeadersPolicy;
	}
	export interface GetResponseHeadersPolicyResultFormProperties {
	}
	export function CreateGetResponseHeadersPolicyResultFormGroup() {
		return new FormGroup<GetResponseHeadersPolicyResultFormProperties>({
		});

	}

	export interface GetResponseHeadersPolicyConfigResult {
		ResponseHeadersPolicyConfig?: ResponseHeadersPolicyConfig;
	}
	export interface GetResponseHeadersPolicyConfigResultFormProperties {
	}
	export function CreateGetResponseHeadersPolicyConfigResultFormGroup() {
		return new FormGroup<GetResponseHeadersPolicyConfigResultFormProperties>({
		});

	}


	/** The returned result of the corresponding request. */
	export interface GetStreamingDistributionResult {
		StreamingDistribution?: StreamingDistribution;
	}

	/** The returned result of the corresponding request. */
	export interface GetStreamingDistributionResultFormProperties {
	}
	export function CreateGetStreamingDistributionResultFormGroup() {
		return new FormGroup<GetStreamingDistributionResultFormProperties>({
		});

	}


	/** The returned result of the corresponding request. */
	export interface GetStreamingDistributionConfigResult {
		StreamingDistributionConfig?: StreamingDistributionConfig;
	}

	/** The returned result of the corresponding request. */
	export interface GetStreamingDistributionConfigResultFormProperties {
	}
	export function CreateGetStreamingDistributionConfigResultFormGroup() {
		return new FormGroup<GetStreamingDistributionConfigResultFormProperties>({
		});

	}

	export interface ListCachePoliciesResult {
		CachePolicyList?: CachePolicyList;
	}
	export interface ListCachePoliciesResultFormProperties {
	}
	export function CreateListCachePoliciesResultFormGroup() {
		return new FormGroup<ListCachePoliciesResultFormProperties>({
		});

	}


	/** A list of cache policies. */
	export interface CachePolicyList {
		NextMarker?: string;

		/** Required */
		MaxItems: number;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of cache policies. */
	export interface CachePolicyListFormProperties {
		NextMarker: FormControl<string | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateCachePolicyListFormGroup() {
		return new FormGroup<CachePolicyListFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The returned result of the corresponding request. */
	export interface ListCloudFrontOriginAccessIdentitiesResult {
		CloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList;
	}

	/** The returned result of the corresponding request. */
	export interface ListCloudFrontOriginAccessIdentitiesResultFormProperties {
	}
	export function CreateListCloudFrontOriginAccessIdentitiesResultFormGroup() {
		return new FormGroup<ListCloudFrontOriginAccessIdentitiesResultFormProperties>({
		});

	}


	/** Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code> resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code> parameters. */
	export interface CloudFrontOriginAccessIdentityList {

		/** Required */
		Marker: string;
		NextMarker?: string;

		/** Required */
		MaxItems: number;

		/** Required */
		IsTruncated: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code> resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code> parameters. */
	export interface CloudFrontOriginAccessIdentityListFormProperties {

		/** Required */
		Marker: FormControl<string | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,

		/** Required */
		IsTruncated: FormControl<boolean | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateCloudFrontOriginAccessIdentityListFormGroup() {
		return new FormGroup<CloudFrontOriginAccessIdentityListFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListConflictingAliasesResult {
		ConflictingAliasesList?: ConflictingAliasesList;
	}
	export interface ListConflictingAliasesResultFormProperties {
	}
	export function CreateListConflictingAliasesResultFormGroup() {
		return new FormGroup<ListConflictingAliasesResultFormProperties>({
		});

	}


	/** A list of aliases (also called CNAMEs) and the CloudFront distributions and Amazon Web Services accounts that they are associated with. In the list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own. */
	export interface ConflictingAliasesList {
		NextMarker?: string;
		MaxItems?: number | null;
		Quantity?: number | null;
		Items?: Array<string>;
	}

	/** A list of aliases (also called CNAMEs) and the CloudFront distributions and Amazon Web Services accounts that they are associated with. In the list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own. */
	export interface ConflictingAliasesListFormProperties {
		NextMarker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateConflictingAliasesListFormGroup() {
		return new FormGroup<ConflictingAliasesListFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
			Quantity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListContinuousDeploymentPoliciesResult {
		ContinuousDeploymentPolicyList?: ContinuousDeploymentPolicyList;
	}
	export interface ListContinuousDeploymentPoliciesResultFormProperties {
	}
	export function CreateListContinuousDeploymentPoliciesResultFormGroup() {
		return new FormGroup<ListContinuousDeploymentPoliciesResultFormProperties>({
		});

	}


	/** Contains a list of continuous deployment policies. */
	export interface ContinuousDeploymentPolicyList {
		NextMarker?: string;

		/** Required */
		MaxItems: number;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** Contains a list of continuous deployment policies. */
	export interface ContinuousDeploymentPolicyListFormProperties {
		NextMarker: FormControl<string | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateContinuousDeploymentPolicyListFormGroup() {
		return new FormGroup<ContinuousDeploymentPolicyListFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The returned result of the corresponding request. */
	export interface ListDistributionsResult {
		DistributionList?: DistributionList;
	}

	/** The returned result of the corresponding request. */
	export interface ListDistributionsResultFormProperties {
	}
	export function CreateListDistributionsResultFormGroup() {
		return new FormGroup<ListDistributionsResultFormProperties>({
		});

	}


	/** A distribution list. */
	export interface DistributionList {

		/** Required */
		Marker: string;
		NextMarker?: string;

		/** Required */
		MaxItems: number;

		/** Required */
		IsTruncated: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A distribution list. */
	export interface DistributionListFormProperties {

		/** Required */
		Marker: FormControl<string | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,

		/** Required */
		IsTruncated: FormControl<boolean | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateDistributionListFormGroup() {
		return new FormGroup<DistributionListFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDistributionsByCachePolicyIdResult {
		DistributionIdList?: DistributionIdList;
	}
	export interface ListDistributionsByCachePolicyIdResultFormProperties {
	}
	export function CreateListDistributionsByCachePolicyIdResultFormGroup() {
		return new FormGroup<ListDistributionsByCachePolicyIdResultFormProperties>({
		});

	}


	/** A list of distribution IDs. */
	export interface DistributionIdList {

		/** Required */
		Marker: string;
		NextMarker?: string;

		/** Required */
		MaxItems: number;

		/** Required */
		IsTruncated: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of distribution IDs. */
	export interface DistributionIdListFormProperties {

		/** Required */
		Marker: FormControl<string | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,

		/** Required */
		IsTruncated: FormControl<boolean | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateDistributionIdListFormGroup() {
		return new FormGroup<DistributionIdListFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDistributionsByKeyGroupResult {

		/** A list of distribution IDs. */
		DistributionIdList?: DistributionIdList;
	}
	export interface ListDistributionsByKeyGroupResultFormProperties {
	}
	export function CreateListDistributionsByKeyGroupResultFormGroup() {
		return new FormGroup<ListDistributionsByKeyGroupResultFormProperties>({
		});

	}

	export interface ListDistributionsByOriginRequestPolicyIdResult {
		DistributionIdList?: DistributionIdList;
	}
	export interface ListDistributionsByOriginRequestPolicyIdResultFormProperties {
	}
	export function CreateListDistributionsByOriginRequestPolicyIdResultFormGroup() {
		return new FormGroup<ListDistributionsByOriginRequestPolicyIdResultFormProperties>({
		});

	}

	export interface ListDistributionsByRealtimeLogConfigResult {

		/** A distribution list. */
		DistributionList?: DistributionList;
	}
	export interface ListDistributionsByRealtimeLogConfigResultFormProperties {
	}
	export function CreateListDistributionsByRealtimeLogConfigResultFormGroup() {
		return new FormGroup<ListDistributionsByRealtimeLogConfigResultFormProperties>({
		});

	}

	export interface ListDistributionsByResponseHeadersPolicyIdResult {

		/** A list of distribution IDs. */
		DistributionIdList?: DistributionIdList;
	}
	export interface ListDistributionsByResponseHeadersPolicyIdResultFormProperties {
	}
	export function CreateListDistributionsByResponseHeadersPolicyIdResultFormGroup() {
		return new FormGroup<ListDistributionsByResponseHeadersPolicyIdResultFormProperties>({
		});

	}


	/** The response to a request to list the distributions that are associated with a specified WAF web ACL. */
	export interface ListDistributionsByWebACLIdResult {
		DistributionList?: DistributionList;
	}

	/** The response to a request to list the distributions that are associated with a specified WAF web ACL. */
	export interface ListDistributionsByWebACLIdResultFormProperties {
	}
	export function CreateListDistributionsByWebACLIdResultFormGroup() {
		return new FormGroup<ListDistributionsByWebACLIdResultFormProperties>({
		});

	}

	export interface ListFieldLevelEncryptionConfigsResult {
		FieldLevelEncryptionList?: FieldLevelEncryptionList;
	}
	export interface ListFieldLevelEncryptionConfigsResultFormProperties {
	}
	export function CreateListFieldLevelEncryptionConfigsResultFormGroup() {
		return new FormGroup<ListFieldLevelEncryptionConfigsResultFormProperties>({
		});

	}


	/** List of field-level encrpytion configurations. */
	export interface FieldLevelEncryptionList {
		NextMarker?: string;

		/** Required */
		MaxItems: number;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** List of field-level encrpytion configurations. */
	export interface FieldLevelEncryptionListFormProperties {
		NextMarker: FormControl<string | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateFieldLevelEncryptionListFormGroup() {
		return new FormGroup<FieldLevelEncryptionListFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListFieldLevelEncryptionProfilesResult {
		FieldLevelEncryptionProfileList?: FieldLevelEncryptionProfileList;
	}
	export interface ListFieldLevelEncryptionProfilesResultFormProperties {
	}
	export function CreateListFieldLevelEncryptionProfilesResultFormGroup() {
		return new FormGroup<ListFieldLevelEncryptionProfilesResultFormProperties>({
		});

	}


	/** List of field-level encryption profiles. */
	export interface FieldLevelEncryptionProfileList {
		NextMarker?: string;

		/** Required */
		MaxItems: number;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** List of field-level encryption profiles. */
	export interface FieldLevelEncryptionProfileListFormProperties {
		NextMarker: FormControl<string | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateFieldLevelEncryptionProfileListFormGroup() {
		return new FormGroup<FieldLevelEncryptionProfileListFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListFunctionsResult {
		FunctionList?: FunctionList;
	}
	export interface ListFunctionsResultFormProperties {
	}
	export function CreateListFunctionsResultFormGroup() {
		return new FormGroup<ListFunctionsResultFormProperties>({
		});

	}


	/** A list of CloudFront functions. */
	export interface FunctionList {
		NextMarker?: string;

		/** Required */
		MaxItems: number;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of CloudFront functions. */
	export interface FunctionListFormProperties {
		NextMarker: FormControl<string | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateFunctionListFormGroup() {
		return new FormGroup<FunctionListFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The returned result of the corresponding request. */
	export interface ListInvalidationsResult {
		InvalidationList?: InvalidationList;
	}

	/** The returned result of the corresponding request. */
	export interface ListInvalidationsResultFormProperties {
	}
	export function CreateListInvalidationsResultFormGroup() {
		return new FormGroup<ListInvalidationsResultFormProperties>({
		});

	}


	/** The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface InvalidationList {

		/** Required */
		Marker: string;
		NextMarker?: string;

		/** Required */
		MaxItems: number;

		/** Required */
		IsTruncated: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface InvalidationListFormProperties {

		/** Required */
		Marker: FormControl<string | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,

		/** Required */
		IsTruncated: FormControl<boolean | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateInvalidationListFormGroup() {
		return new FormGroup<InvalidationListFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListKeyGroupsResult {
		KeyGroupList?: KeyGroupList;
	}
	export interface ListKeyGroupsResultFormProperties {
	}
	export function CreateListKeyGroupsResultFormGroup() {
		return new FormGroup<ListKeyGroupsResultFormProperties>({
		});

	}


	/** A list of key groups. */
	export interface KeyGroupList {
		NextMarker?: string;

		/** Required */
		MaxItems: number;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of key groups. */
	export interface KeyGroupListFormProperties {
		NextMarker: FormControl<string | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateKeyGroupListFormGroup() {
		return new FormGroup<KeyGroupListFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListOriginAccessControlsResult {
		OriginAccessControlList?: OriginAccessControlList;
	}
	export interface ListOriginAccessControlsResultFormProperties {
	}
	export function CreateListOriginAccessControlsResultFormGroup() {
		return new FormGroup<ListOriginAccessControlsResultFormProperties>({
		});

	}


	/** A list of CloudFront origin access controls. */
	export interface OriginAccessControlList {

		/** Required */
		Marker: string;
		NextMarker?: string;

		/** Required */
		MaxItems: number;

		/** Required */
		IsTruncated: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of CloudFront origin access controls. */
	export interface OriginAccessControlListFormProperties {

		/** Required */
		Marker: FormControl<string | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,

		/** Required */
		IsTruncated: FormControl<boolean | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateOriginAccessControlListFormGroup() {
		return new FormGroup<OriginAccessControlListFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListOriginRequestPoliciesResult {
		OriginRequestPolicyList?: OriginRequestPolicyList;
	}
	export interface ListOriginRequestPoliciesResultFormProperties {
	}
	export function CreateListOriginRequestPoliciesResultFormGroup() {
		return new FormGroup<ListOriginRequestPoliciesResultFormProperties>({
		});

	}


	/** A list of origin request policies. */
	export interface OriginRequestPolicyList {
		NextMarker?: string;

		/** Required */
		MaxItems: number;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of origin request policies. */
	export interface OriginRequestPolicyListFormProperties {
		NextMarker: FormControl<string | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateOriginRequestPolicyListFormGroup() {
		return new FormGroup<OriginRequestPolicyListFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListPublicKeysResult {
		PublicKeyList?: PublicKeyList;
	}
	export interface ListPublicKeysResultFormProperties {
	}
	export function CreateListPublicKeysResultFormGroup() {
		return new FormGroup<ListPublicKeysResultFormProperties>({
		});

	}


	/** A list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>. */
	export interface PublicKeyList {
		NextMarker?: string;

		/** Required */
		MaxItems: number;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>. */
	export interface PublicKeyListFormProperties {
		NextMarker: FormControl<string | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreatePublicKeyListFormGroup() {
		return new FormGroup<PublicKeyListFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRealtimeLogConfigsResult {
		RealtimeLogConfigs?: RealtimeLogConfigs;
	}
	export interface ListRealtimeLogConfigsResultFormProperties {
	}
	export function CreateListRealtimeLogConfigsResultFormGroup() {
		return new FormGroup<ListRealtimeLogConfigsResultFormProperties>({
		});

	}


	/** A list of real-time log configurations. */
	export interface RealtimeLogConfigs {

		/** Required */
		MaxItems: number;
		Items?: Array<RealtimeLogConfig>;

		/** Required */
		IsTruncated: boolean;

		/** Required */
		Marker: string;
		NextMarker?: string;
	}

	/** A list of real-time log configurations. */
	export interface RealtimeLogConfigsFormProperties {

		/** Required */
		MaxItems: FormControl<number | null | undefined>,

		/** Required */
		IsTruncated: FormControl<boolean | null | undefined>,

		/** Required */
		Marker: FormControl<string | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
	}
	export function CreateRealtimeLogConfigsFormGroup() {
		return new FormGroup<RealtimeLogConfigsFormProperties>({
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResponseHeadersPoliciesResult {
		ResponseHeadersPolicyList?: ResponseHeadersPolicyList;
	}
	export interface ListResponseHeadersPoliciesResultFormProperties {
	}
	export function CreateListResponseHeadersPoliciesResultFormGroup() {
		return new FormGroup<ListResponseHeadersPoliciesResultFormProperties>({
		});

	}


	/** A list of response headers policies. */
	export interface ResponseHeadersPolicyList {
		NextMarker?: string;

		/** Required */
		MaxItems: number;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of response headers policies. */
	export interface ResponseHeadersPolicyListFormProperties {
		NextMarker: FormControl<string | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateResponseHeadersPolicyListFormGroup() {
		return new FormGroup<ResponseHeadersPolicyListFormProperties>({
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The returned result of the corresponding request. */
	export interface ListStreamingDistributionsResult {
		StreamingDistributionList?: StreamingDistributionList;
	}

	/** The returned result of the corresponding request. */
	export interface ListStreamingDistributionsResultFormProperties {
	}
	export function CreateListStreamingDistributionsResultFormGroup() {
		return new FormGroup<ListStreamingDistributionsResultFormProperties>({
		});

	}


	/** A streaming distribution list. */
	export interface StreamingDistributionList {

		/** Required */
		Marker: string;
		NextMarker?: string;

		/** Required */
		MaxItems: number;

		/** Required */
		IsTruncated: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A streaming distribution list. */
	export interface StreamingDistributionListFormProperties {

		/** Required */
		Marker: FormControl<string | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,

		/** Required */
		MaxItems: FormControl<number | null | undefined>,

		/** Required */
		IsTruncated: FormControl<boolean | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateStreamingDistributionListFormGroup() {
		return new FormGroup<StreamingDistributionListFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The returned result of the corresponding request. */
	export interface ListTagsForResourceResult {

		/** Required */
		Tags: Tags;
	}

	/** The returned result of the corresponding request. */
	export interface ListTagsForResourceResultFormProperties {
	}
	export function CreateListTagsForResourceResultFormGroup() {
		return new FormGroup<ListTagsForResourceResultFormProperties>({
		});

	}

	export interface PublishFunctionResult {
		FunctionSummary?: FunctionSummary;
	}
	export interface PublishFunctionResultFormProperties {
	}
	export function CreatePublishFunctionResultFormGroup() {
		return new FormGroup<PublishFunctionResultFormProperties>({
		});

	}

	export interface TestFunctionResult {
		TestResult?: TestResult;
	}
	export interface TestFunctionResultFormProperties {
	}
	export function CreateTestFunctionResultFormGroup() {
		return new FormGroup<TestFunctionResultFormProperties>({
		});

	}


	/** Contains the result of testing a CloudFront function with <code>TestFunction</code>. */
	export interface TestResult {
		FunctionSummary?: FunctionSummary;
		ComputeUtilization?: string;
		FunctionExecutionLogs?: Array<string>;
		FunctionErrorMessage?: string;
		FunctionOutput?: string;
	}

	/** Contains the result of testing a CloudFront function with <code>TestFunction</code>. */
	export interface TestResultFormProperties {
		ComputeUtilization: FormControl<string | null | undefined>,
		FunctionErrorMessage: FormControl<string | null | undefined>,
		FunctionOutput: FormControl<string | null | undefined>,
	}
	export function CreateTestResultFormGroup() {
		return new FormGroup<TestResultFormProperties>({
			ComputeUtilization: new FormControl<string | null | undefined>(undefined),
			FunctionErrorMessage: new FormControl<string | null | undefined>(undefined),
			FunctionOutput: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestFunctionFailed {
	}
	export interface TestFunctionFailedFormProperties {
	}
	export function CreateTestFunctionFailedFormGroup() {
		return new FormGroup<TestFunctionFailedFormProperties>({
		});

	}

	export interface UpdateCachePolicyResult {
		CachePolicy?: CachePolicy;
	}
	export interface UpdateCachePolicyResultFormProperties {
	}
	export function CreateUpdateCachePolicyResultFormGroup() {
		return new FormGroup<UpdateCachePolicyResultFormProperties>({
		});

	}


	/** The returned result of the corresponding request. */
	export interface UpdateCloudFrontOriginAccessIdentityResult {
		CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
	}

	/** The returned result of the corresponding request. */
	export interface UpdateCloudFrontOriginAccessIdentityResultFormProperties {
	}
	export function CreateUpdateCloudFrontOriginAccessIdentityResultFormGroup() {
		return new FormGroup<UpdateCloudFrontOriginAccessIdentityResultFormProperties>({
		});

	}

	export interface UpdateContinuousDeploymentPolicyResult {
		ContinuousDeploymentPolicy?: ContinuousDeploymentPolicy;
	}
	export interface UpdateContinuousDeploymentPolicyResultFormProperties {
	}
	export function CreateUpdateContinuousDeploymentPolicyResultFormGroup() {
		return new FormGroup<UpdateContinuousDeploymentPolicyResultFormProperties>({
		});

	}


	/** The returned result of the corresponding request. */
	export interface UpdateDistributionResult {
		Distribution?: Distribution;
	}

	/** The returned result of the corresponding request. */
	export interface UpdateDistributionResultFormProperties {
	}
	export function CreateUpdateDistributionResultFormGroup() {
		return new FormGroup<UpdateDistributionResultFormProperties>({
		});

	}

	export interface UpdateDistributionWithStagingConfigResult {

		/** A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. */
		Distribution?: Distribution;
	}
	export interface UpdateDistributionWithStagingConfigResultFormProperties {
	}
	export function CreateUpdateDistributionWithStagingConfigResultFormGroup() {
		return new FormGroup<UpdateDistributionWithStagingConfigResultFormProperties>({
		});

	}

	export interface UpdateFieldLevelEncryptionConfigResult {
		FieldLevelEncryption?: FieldLevelEncryption;
	}
	export interface UpdateFieldLevelEncryptionConfigResultFormProperties {
	}
	export function CreateUpdateFieldLevelEncryptionConfigResultFormGroup() {
		return new FormGroup<UpdateFieldLevelEncryptionConfigResultFormProperties>({
		});

	}

	export interface UpdateFieldLevelEncryptionProfileResult {
		FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
	}
	export interface UpdateFieldLevelEncryptionProfileResultFormProperties {
	}
	export function CreateUpdateFieldLevelEncryptionProfileResultFormGroup() {
		return new FormGroup<UpdateFieldLevelEncryptionProfileResultFormProperties>({
		});

	}

	export interface UpdateFunctionResult {
		FunctionSummary?: FunctionSummary;
	}
	export interface UpdateFunctionResultFormProperties {
	}
	export function CreateUpdateFunctionResultFormGroup() {
		return new FormGroup<UpdateFunctionResultFormProperties>({
		});

	}

	export interface UpdateKeyGroupResult {
		KeyGroup?: KeyGroup;
	}
	export interface UpdateKeyGroupResultFormProperties {
	}
	export function CreateUpdateKeyGroupResultFormGroup() {
		return new FormGroup<UpdateKeyGroupResultFormProperties>({
		});

	}

	export interface UpdateOriginAccessControlResult {
		OriginAccessControl?: OriginAccessControl;
	}
	export interface UpdateOriginAccessControlResultFormProperties {
	}
	export function CreateUpdateOriginAccessControlResultFormGroup() {
		return new FormGroup<UpdateOriginAccessControlResultFormProperties>({
		});

	}

	export interface UpdateOriginRequestPolicyResult {
		OriginRequestPolicy?: OriginRequestPolicy;
	}
	export interface UpdateOriginRequestPolicyResultFormProperties {
	}
	export function CreateUpdateOriginRequestPolicyResultFormGroup() {
		return new FormGroup<UpdateOriginRequestPolicyResultFormProperties>({
		});

	}

	export interface UpdatePublicKeyResult {
		PublicKey?: PublicKey;
	}
	export interface UpdatePublicKeyResultFormProperties {
	}
	export function CreateUpdatePublicKeyResultFormGroup() {
		return new FormGroup<UpdatePublicKeyResultFormProperties>({
		});

	}

	export interface CannotChangeImmutablePublicKeyFields {
	}
	export interface CannotChangeImmutablePublicKeyFieldsFormProperties {
	}
	export function CreateCannotChangeImmutablePublicKeyFieldsFormGroup() {
		return new FormGroup<CannotChangeImmutablePublicKeyFieldsFormProperties>({
		});

	}

	export interface UpdateRealtimeLogConfigResult {
		RealtimeLogConfig?: RealtimeLogConfig;
	}
	export interface UpdateRealtimeLogConfigResultFormProperties {
	}
	export function CreateUpdateRealtimeLogConfigResultFormGroup() {
		return new FormGroup<UpdateRealtimeLogConfigResultFormProperties>({
		});

	}

	export interface UpdateResponseHeadersPolicyResult {
		ResponseHeadersPolicy?: ResponseHeadersPolicy;
	}
	export interface UpdateResponseHeadersPolicyResultFormProperties {
	}
	export function CreateUpdateResponseHeadersPolicyResultFormGroup() {
		return new FormGroup<UpdateResponseHeadersPolicyResultFormProperties>({
		});

	}


	/** The returned result of the corresponding request. */
	export interface UpdateStreamingDistributionResult {
		StreamingDistribution?: StreamingDistribution;
	}

	/** The returned result of the corresponding request. */
	export interface UpdateStreamingDistributionResultFormProperties {
	}
	export function CreateUpdateStreamingDistributionResultFormGroup() {
		return new FormGroup<UpdateStreamingDistributionResultFormProperties>({
		});

	}

	export enum ResponseHeadersPolicyAccessControlAllowMethodsValues { GET = 'GET', POST = 'POST', OPTIONS = 'OPTIONS', PUT = 'PUT', DELETE = 'DELETE', PATCH = 'PATCH', HEAD = 'HEAD', ALL = 'ALL' }

	export enum ICPRecordalStatus { APPROVED = 'APPROVED', SUSPENDED = 'SUSPENDED', PENDING = 'PENDING' }


	/** <p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions. The status is returned in the CloudFront response; you can't configure it yourself.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services services in China</i>.</p> */
	export interface AliasICPRecordal {
		CNAME?: string;
		ICPRecordalStatus?: ICPRecordalStatus;
	}

	/** <p>Amazon Web Services services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions. The status is returned in the CloudFront response; you can't configure it yourself.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with Amazon Web Services services in China</i>.</p> */
	export interface AliasICPRecordalFormProperties {
		CNAME: FormControl<string | null | undefined>,
		ICPRecordalStatus: FormControl<ICPRecordalStatus | null | undefined>,
	}
	export function CreateAliasICPRecordalFormGroup() {
		return new FormGroup<AliasICPRecordalFormProperties>({
			CNAME: new FormControl<string | null | undefined>(undefined),
			ICPRecordalStatus: new FormControl<ICPRecordalStatus | null | undefined>(undefined),
		});

	}

	export interface AssociateAliasRequest {
	}
	export interface AssociateAliasRequestFormProperties {
	}
	export function CreateAssociateAliasRequestFormGroup() {
		return new FormGroup<AssociateAliasRequestFormProperties>({
		});

	}


	/** <p>A complex type that describes how CloudFront processes requests.</p> <p>You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to serve objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.</p> <p>For the current quota (formerly known as limit) on the number of cache behaviors that you can add to a distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you don't want to specify any cache behaviors, include only an empty <code>CacheBehaviors</code> element. Don't include an empty <code>CacheBehavior</code> element because this is invalid.</p> <p>To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty <code>CacheBehaviors</code> element.</p> <p>To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.</p> <p>For more information about cache behaviors, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behavior Settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CacheBehavior {

		/** Required */
		PathPattern: string;

		/** Required */
		TargetOriginId: string;
		TrustedSigners?: TrustedSigners;
		TrustedKeyGroups?: TrustedKeyGroups;

		/** Required */
		ViewerProtocolPolicy: ViewerProtocolPolicy;

		/** <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p> */
		AllowedMethods?: AllowedMethods;
		SmoothStreaming?: boolean | null;
		Compress?: boolean | null;
		LambdaFunctionAssociations?: LambdaFunctionAssociations;
		FunctionAssociations?: FunctionAssociations;
		FieldLevelEncryptionId?: string;
		RealtimeLogConfigArn?: string;
		CachePolicyId?: string;
		OriginRequestPolicyId?: string;
		ResponseHeadersPolicyId?: string;
		ForwardedValues?: ForwardedValues;
		MinTTL?: number | null;
		DefaultTTL?: number | null;
		MaxTTL?: number | null;
	}

	/** <p>A complex type that describes how CloudFront processes requests.</p> <p>You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to serve objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.</p> <p>For the current quota (formerly known as limit) on the number of cache behaviors that you can add to a distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you don't want to specify any cache behaviors, include only an empty <code>CacheBehaviors</code> element. Don't include an empty <code>CacheBehavior</code> element because this is invalid.</p> <p>To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty <code>CacheBehaviors</code> element.</p> <p>To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.</p> <p>For more information about cache behaviors, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behavior Settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CacheBehaviorFormProperties {

		/** Required */
		PathPattern: FormControl<string | null | undefined>,

		/** Required */
		TargetOriginId: FormControl<string | null | undefined>,

		/** Required */
		ViewerProtocolPolicy: FormControl<ViewerProtocolPolicy | null | undefined>,
		SmoothStreaming: FormControl<boolean | null | undefined>,
		Compress: FormControl<boolean | null | undefined>,
		FieldLevelEncryptionId: FormControl<string | null | undefined>,
		RealtimeLogConfigArn: FormControl<string | null | undefined>,
		CachePolicyId: FormControl<string | null | undefined>,
		OriginRequestPolicyId: FormControl<string | null | undefined>,
		ResponseHeadersPolicyId: FormControl<string | null | undefined>,
		MinTTL: FormControl<number | null | undefined>,
		DefaultTTL: FormControl<number | null | undefined>,
		MaxTTL: FormControl<number | null | undefined>,
	}
	export function CreateCacheBehaviorFormGroup() {
		return new FormGroup<CacheBehaviorFormProperties>({
			PathPattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetOriginId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ViewerProtocolPolicy: new FormControl<ViewerProtocolPolicy | null | undefined>(undefined, [Validators.required]),
			SmoothStreaming: new FormControl<boolean | null | undefined>(undefined),
			Compress: new FormControl<boolean | null | undefined>(undefined),
			FieldLevelEncryptionId: new FormControl<string | null | undefined>(undefined),
			RealtimeLogConfigArn: new FormControl<string | null | undefined>(undefined),
			CachePolicyId: new FormControl<string | null | undefined>(undefined),
			OriginRequestPolicyId: new FormControl<string | null | undefined>(undefined),
			ResponseHeadersPolicyId: new FormControl<string | null | undefined>(undefined),
			MinTTL: new FormControl<number | null | undefined>(undefined),
			DefaultTTL: new FormControl<number | null | undefined>(undefined),
			MaxTTL: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CachePolicyQueryStringBehavior { none = 'none', whitelist = 'whitelist', allExcept = 'allExcept', all = 'all' }

	export enum CachePolicyType { managed = 'managed', custom = 'custom' }


	/** Contains a cache policy. */
	export interface CachePolicySummary {

		/** Required */
		Type: CachePolicyType;

		/** Required */
		CachePolicy: CachePolicy;
	}

	/** Contains a cache policy. */
	export interface CachePolicySummaryFormProperties {

		/** Required */
		Type: FormControl<CachePolicyType | null | undefined>,
	}
	export function CreateCachePolicySummaryFormGroup() {
		return new FormGroup<CachePolicySummaryFormProperties>({
			Type: new FormControl<CachePolicyType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Summary of the information about a CloudFront origin access identity. */
	export interface CloudFrontOriginAccessIdentitySummary {

		/** Required */
		Id: string;

		/** Required */
		S3CanonicalUserId: string;

		/** Required */
		Comment: string;
	}

	/** Summary of the information about a CloudFront origin access identity. */
	export interface CloudFrontOriginAccessIdentitySummaryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		S3CanonicalUserId: FormControl<string | null | undefined>,

		/** Required */
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateCloudFrontOriginAccessIdentitySummaryFormGroup() {
		return new FormGroup<CloudFrontOriginAccessIdentitySummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3CanonicalUserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An alias (also called a CNAME) and the CloudFront distribution and Amazon Web Services account ID that it's associated with. The distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own. */
	export interface ConflictingAlias {
		Alias?: string;
		DistributionId?: string;
		AccountId?: string;
	}

	/** An alias (also called a CNAME) and the CloudFront distribution and Amazon Web Services account ID that it's associated with. The distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own. */
	export interface ConflictingAliasFormProperties {
		Alias: FormControl<string | null | undefined>,
		DistributionId: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateConflictingAliasFormGroup() {
		return new FormGroup<ConflictingAliasFormProperties>({
			Alias: new FormControl<string | null | undefined>(undefined),
			DistributionId: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Format { URLEncoded = 'URLEncoded' }


	/** A field-level encryption content type profile. */
	export interface ContentTypeProfile {

		/** Required */
		Format: Format;
		ProfileId?: string;

		/** Required */
		ContentType: string;
	}

	/** A field-level encryption content type profile. */
	export interface ContentTypeProfileFormProperties {

		/** Required */
		Format: FormControl<Format | null | undefined>,
		ProfileId: FormControl<string | null | undefined>,

		/** Required */
		ContentType: FormControl<string | null | undefined>,
	}
	export function CreateContentTypeProfileFormGroup() {
		return new FormGroup<ContentTypeProfileFormProperties>({
			Format: new FormControl<Format | null | undefined>(undefined, [Validators.required]),
			ProfileId: new FormControl<string | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A summary of the information about your continuous deployment policies. */
	export interface ContinuousDeploymentPolicySummary {

		/** Required */
		ContinuousDeploymentPolicy: ContinuousDeploymentPolicy;
	}

	/** A summary of the information about your continuous deployment policies. */
	export interface ContinuousDeploymentPolicySummaryFormProperties {
	}
	export function CreateContinuousDeploymentPolicySummaryFormGroup() {
		return new FormGroup<ContinuousDeploymentPolicySummaryFormProperties>({
		});

	}

	export interface CopyDistributionRequest {

		/** Required */
		CallerReference: string;
		Enabled?: boolean | null;
	}
	export interface CopyDistributionRequestFormProperties {

		/** Required */
		CallerReference: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCopyDistributionRequestFormGroup() {
		return new FormGroup<CopyDistributionRequestFormProperties>({
			CallerReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateCachePolicyRequest {

		/** Required */
		CachePolicyConfig: CachePolicyConfig;
	}
	export interface CreateCachePolicyRequestFormProperties {
	}
	export function CreateCreateCachePolicyRequestFormGroup() {
		return new FormGroup<CreateCachePolicyRequestFormProperties>({
		});

	}


	/** The request to create a new origin access identity (OAI). An origin access identity is a special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all or just some of your Amazon S3 content. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html"> Restricting Access to Amazon S3 Content by Using an Origin Access Identity</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface CreateCloudFrontOriginAccessIdentityRequest {

		/** Required */
		CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
	}

	/** The request to create a new origin access identity (OAI). An origin access identity is a special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all or just some of your Amazon S3 content. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html"> Restricting Access to Amazon S3 Content by Using an Origin Access Identity</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface CreateCloudFrontOriginAccessIdentityRequestFormProperties {
	}
	export function CreateCreateCloudFrontOriginAccessIdentityRequestFormGroup() {
		return new FormGroup<CreateCloudFrontOriginAccessIdentityRequestFormProperties>({
		});

	}

	export interface CreateContinuousDeploymentPolicyRequest {

		/** Required */
		ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig;
	}
	export interface CreateContinuousDeploymentPolicyRequestFormProperties {
	}
	export function CreateCreateContinuousDeploymentPolicyRequestFormGroup() {
		return new FormGroup<CreateContinuousDeploymentPolicyRequestFormProperties>({
		});

	}


	/** The request to create a new distribution. */
	export interface CreateDistributionRequest {

		/** Required */
		DistributionConfig: DistributionConfig;
	}

	/** The request to create a new distribution. */
	export interface CreateDistributionRequestFormProperties {
	}
	export function CreateCreateDistributionRequestFormGroup() {
		return new FormGroup<CreateDistributionRequestFormProperties>({
		});

	}


	/** A distribution Configuration and a list of tags to be associated with the distribution. */
	export interface DistributionConfigWithTags {

		/** Required */
		DistributionConfig: DistributionConfig;

		/** Required */
		Tags: Tags;
	}

	/** A distribution Configuration and a list of tags to be associated with the distribution. */
	export interface DistributionConfigWithTagsFormProperties {
	}
	export function CreateDistributionConfigWithTagsFormGroup() {
		return new FormGroup<DistributionConfigWithTagsFormProperties>({
		});

	}


	/** The request to create a new distribution with tags. */
	export interface CreateDistributionWithTagsRequest {

		/** Required */
		DistributionConfigWithTags: DistributionConfigWithTags;
	}

	/** The request to create a new distribution with tags. */
	export interface CreateDistributionWithTagsRequestFormProperties {
	}
	export function CreateCreateDistributionWithTagsRequestFormGroup() {
		return new FormGroup<CreateDistributionWithTagsRequestFormProperties>({
		});

	}

	export interface CreateFieldLevelEncryptionConfigRequest {

		/** Required */
		FieldLevelEncryptionConfig: FieldLevelEncryptionConfig;
	}
	export interface CreateFieldLevelEncryptionConfigRequestFormProperties {
	}
	export function CreateCreateFieldLevelEncryptionConfigRequestFormGroup() {
		return new FormGroup<CreateFieldLevelEncryptionConfigRequestFormProperties>({
		});

	}

	export interface CreateFieldLevelEncryptionProfileRequest {

		/** Required */
		FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;
	}
	export interface CreateFieldLevelEncryptionProfileRequestFormProperties {
	}
	export function CreateCreateFieldLevelEncryptionProfileRequestFormGroup() {
		return new FormGroup<CreateFieldLevelEncryptionProfileRequestFormProperties>({
		});

	}

	export interface CreateFunctionRequest {

		/** Required */
		Name: string;

		/** Required */
		FunctionConfig: FunctionConfig;

		/** Required */
		FunctionCode: string;
	}
	export interface CreateFunctionRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		FunctionCode: FormControl<string | null | undefined>,
	}
	export function CreateCreateFunctionRequestFormGroup() {
		return new FormGroup<CreateFunctionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FunctionCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request to create an invalidation. */
	export interface CreateInvalidationRequest {

		/** Required */
		InvalidationBatch: InvalidationBatch;
	}

	/** The request to create an invalidation. */
	export interface CreateInvalidationRequestFormProperties {
	}
	export function CreateCreateInvalidationRequestFormGroup() {
		return new FormGroup<CreateInvalidationRequestFormProperties>({
		});

	}

	export interface CreateKeyGroupRequest {

		/** Required */
		KeyGroupConfig: KeyGroupConfig;
	}
	export interface CreateKeyGroupRequestFormProperties {
	}
	export function CreateCreateKeyGroupRequestFormGroup() {
		return new FormGroup<CreateKeyGroupRequestFormProperties>({
		});

	}

	export interface CreateMonitoringSubscriptionRequest {

		/** Required */
		MonitoringSubscription: MonitoringSubscription;
	}
	export interface CreateMonitoringSubscriptionRequestFormProperties {
	}
	export function CreateCreateMonitoringSubscriptionRequestFormGroup() {
		return new FormGroup<CreateMonitoringSubscriptionRequestFormProperties>({
		});

	}

	export interface CreateOriginAccessControlRequest {

		/** Required */
		OriginAccessControlConfig: OriginAccessControlConfig;
	}
	export interface CreateOriginAccessControlRequestFormProperties {
	}
	export function CreateCreateOriginAccessControlRequestFormGroup() {
		return new FormGroup<CreateOriginAccessControlRequestFormProperties>({
		});

	}

	export interface CreateOriginRequestPolicyRequest {

		/** Required */
		OriginRequestPolicyConfig: OriginRequestPolicyConfig;
	}
	export interface CreateOriginRequestPolicyRequestFormProperties {
	}
	export function CreateCreateOriginRequestPolicyRequestFormGroup() {
		return new FormGroup<CreateOriginRequestPolicyRequestFormProperties>({
		});

	}

	export interface CreatePublicKeyRequest {

		/** Required */
		PublicKeyConfig: PublicKeyConfig;
	}
	export interface CreatePublicKeyRequestFormProperties {
	}
	export function CreateCreatePublicKeyRequestFormGroup() {
		return new FormGroup<CreatePublicKeyRequestFormProperties>({
		});

	}

	export interface CreateRealtimeLogConfigRequest {

		/** Required */
		EndPoints: Array<EndPoint>;

		/** Required */
		Fields: Array<string>;

		/** Required */
		Name: string;

		/** Required */
		SamplingRate: number;
	}
	export interface CreateRealtimeLogConfigRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		SamplingRate: FormControl<number | null | undefined>,
	}
	export function CreateCreateRealtimeLogConfigRequestFormGroup() {
		return new FormGroup<CreateRealtimeLogConfigRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SamplingRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateResponseHeadersPolicyRequest {

		/** Required */
		ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig;
	}
	export interface CreateResponseHeadersPolicyRequestFormProperties {
	}
	export function CreateCreateResponseHeadersPolicyRequestFormGroup() {
		return new FormGroup<CreateResponseHeadersPolicyRequestFormProperties>({
		});

	}


	/** The request to create a new streaming distribution. */
	export interface CreateStreamingDistributionRequest {

		/** Required */
		StreamingDistributionConfig: StreamingDistributionConfig;
	}

	/** The request to create a new streaming distribution. */
	export interface CreateStreamingDistributionRequestFormProperties {
	}
	export function CreateCreateStreamingDistributionRequestFormGroup() {
		return new FormGroup<CreateStreamingDistributionRequestFormProperties>({
		});

	}


	/** A streaming distribution Configuration and a list of tags to be associated with the streaming distribution. */
	export interface StreamingDistributionConfigWithTags {

		/** Required */
		StreamingDistributionConfig: StreamingDistributionConfig;

		/** Required */
		Tags: Tags;
	}

	/** A streaming distribution Configuration and a list of tags to be associated with the streaming distribution. */
	export interface StreamingDistributionConfigWithTagsFormProperties {
	}
	export function CreateStreamingDistributionConfigWithTagsFormGroup() {
		return new FormGroup<StreamingDistributionConfigWithTagsFormProperties>({
		});

	}


	/** The request to create a new streaming distribution with tags. */
	export interface CreateStreamingDistributionWithTagsRequest {

		/** Required */
		StreamingDistributionConfigWithTags: StreamingDistributionConfigWithTags;
	}

	/** The request to create a new streaming distribution with tags. */
	export interface CreateStreamingDistributionWithTagsRequestFormProperties {
	}
	export function CreateCreateStreamingDistributionWithTagsRequestFormGroup() {
		return new FormGroup<CreateStreamingDistributionWithTagsRequestFormProperties>({
		});

	}


	/** <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CustomErrorResponse {

		/** Required */
		ErrorCode: number;
		ResponsePagePath?: string;
		ResponseCode?: string;
		ErrorCachingMinTTL?: number | null;
	}

	/** <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CustomErrorResponseFormProperties {

		/** Required */
		ErrorCode: FormControl<number | null | undefined>,
		ResponsePagePath: FormControl<string | null | undefined>,
		ResponseCode: FormControl<string | null | undefined>,
		ErrorCachingMinTTL: FormControl<number | null | undefined>,
	}
	export function CreateCustomErrorResponseFormGroup() {
		return new FormGroup<CustomErrorResponseFormProperties>({
			ErrorCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ResponsePagePath: new FormControl<string | null | undefined>(undefined),
			ResponseCode: new FormControl<string | null | undefined>(undefined),
			ErrorCachingMinTTL: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the list of Custom Headers for each origin. */
	export interface CustomHeaders {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex type that contains the list of Custom Headers for each origin. */
	export interface CustomHeadersFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateCustomHeadersFormGroup() {
		return new FormGroup<CustomHeadersFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OriginProtocolPolicy { 'http-only' = 'http-only', 'match-viewer' = 'match-viewer', 'https-only' = 'https-only' }


	/** A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin. */
	export interface OriginSslProtocols {

		/** Required */
		Quantity: number;

		/** Required */
		Items: Array<string>;
	}

	/** A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin. */
	export interface OriginSslProtocolsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateOriginSslProtocolsFormGroup() {
		return new FormGroup<OriginSslProtocolsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A custom origin. A custom origin is any origin that is <i>not</i> an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> <i>is</i> a custom origin. */
	export interface CustomOriginConfig {

		/** Required */
		HTTPPort: number;

		/** Required */
		HTTPSPort: number;

		/** Required */
		OriginProtocolPolicy: OriginProtocolPolicy;
		OriginSslProtocols?: OriginSslProtocols;
		OriginReadTimeout?: number | null;
		OriginKeepaliveTimeout?: number | null;
	}

	/** A custom origin. A custom origin is any origin that is <i>not</i> an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> <i>is</i> a custom origin. */
	export interface CustomOriginConfigFormProperties {

		/** Required */
		HTTPPort: FormControl<number | null | undefined>,

		/** Required */
		HTTPSPort: FormControl<number | null | undefined>,

		/** Required */
		OriginProtocolPolicy: FormControl<OriginProtocolPolicy | null | undefined>,
		OriginReadTimeout: FormControl<number | null | undefined>,
		OriginKeepaliveTimeout: FormControl<number | null | undefined>,
	}
	export function CreateCustomOriginConfigFormGroup() {
		return new FormGroup<CustomOriginConfigFormProperties>({
			HTTPPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			HTTPSPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			OriginProtocolPolicy: new FormControl<OriginProtocolPolicy | null | undefined>(undefined, [Validators.required]),
			OriginReadTimeout: new FormControl<number | null | undefined>(undefined),
			OriginKeepaliveTimeout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteCachePolicyRequest {
	}
	export interface DeleteCachePolicyRequestFormProperties {
	}
	export function CreateDeleteCachePolicyRequestFormGroup() {
		return new FormGroup<DeleteCachePolicyRequestFormProperties>({
		});

	}


	/** Deletes a origin access identity. */
	export interface DeleteCloudFrontOriginAccessIdentityRequest {
	}

	/** Deletes a origin access identity. */
	export interface DeleteCloudFrontOriginAccessIdentityRequestFormProperties {
	}
	export function CreateDeleteCloudFrontOriginAccessIdentityRequestFormGroup() {
		return new FormGroup<DeleteCloudFrontOriginAccessIdentityRequestFormProperties>({
		});

	}

	export interface DeleteContinuousDeploymentPolicyRequest {
	}
	export interface DeleteContinuousDeploymentPolicyRequestFormProperties {
	}
	export function CreateDeleteContinuousDeploymentPolicyRequestFormGroup() {
		return new FormGroup<DeleteContinuousDeploymentPolicyRequestFormProperties>({
		});

	}


	/** <p>This action deletes a web distribution. To delete a web distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete a web distribution using the CloudFront API:</b> </p> <ol> <li> <p>Disable the web distribution</p> </li> <li> <p>Submit a <code>GET Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution.</p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Distribution</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 6.</p> </li> <li> <p>Review the response to your <code>DELETE Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface DeleteDistributionRequest {
	}

	/** <p>This action deletes a web distribution. To delete a web distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete a web distribution using the CloudFront API:</b> </p> <ol> <li> <p>Disable the web distribution</p> </li> <li> <p>Submit a <code>GET Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution.</p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Distribution</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 6.</p> </li> <li> <p>Review the response to your <code>DELETE Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface DeleteDistributionRequestFormProperties {
	}
	export function CreateDeleteDistributionRequestFormGroup() {
		return new FormGroup<DeleteDistributionRequestFormProperties>({
		});

	}

	export interface DeleteFieldLevelEncryptionConfigRequest {
	}
	export interface DeleteFieldLevelEncryptionConfigRequestFormProperties {
	}
	export function CreateDeleteFieldLevelEncryptionConfigRequestFormGroup() {
		return new FormGroup<DeleteFieldLevelEncryptionConfigRequestFormProperties>({
		});

	}

	export interface DeleteFieldLevelEncryptionProfileRequest {
	}
	export interface DeleteFieldLevelEncryptionProfileRequestFormProperties {
	}
	export function CreateDeleteFieldLevelEncryptionProfileRequestFormGroup() {
		return new FormGroup<DeleteFieldLevelEncryptionProfileRequestFormProperties>({
		});

	}

	export interface DeleteFunctionRequest {
	}
	export interface DeleteFunctionRequestFormProperties {
	}
	export function CreateDeleteFunctionRequestFormGroup() {
		return new FormGroup<DeleteFunctionRequestFormProperties>({
		});

	}

	export interface DeleteKeyGroupRequest {
	}
	export interface DeleteKeyGroupRequestFormProperties {
	}
	export function CreateDeleteKeyGroupRequestFormGroup() {
		return new FormGroup<DeleteKeyGroupRequestFormProperties>({
		});

	}

	export interface DeleteMonitoringSubscriptionRequest {
	}
	export interface DeleteMonitoringSubscriptionRequestFormProperties {
	}
	export function CreateDeleteMonitoringSubscriptionRequestFormGroup() {
		return new FormGroup<DeleteMonitoringSubscriptionRequestFormProperties>({
		});

	}

	export interface DeleteOriginAccessControlRequest {
	}
	export interface DeleteOriginAccessControlRequestFormProperties {
	}
	export function CreateDeleteOriginAccessControlRequestFormGroup() {
		return new FormGroup<DeleteOriginAccessControlRequestFormProperties>({
		});

	}

	export interface DeleteOriginRequestPolicyRequest {
	}
	export interface DeleteOriginRequestPolicyRequestFormProperties {
	}
	export function CreateDeleteOriginRequestPolicyRequestFormGroup() {
		return new FormGroup<DeleteOriginRequestPolicyRequestFormProperties>({
		});

	}

	export interface DeletePublicKeyRequest {
	}
	export interface DeletePublicKeyRequestFormProperties {
	}
	export function CreateDeletePublicKeyRequestFormGroup() {
		return new FormGroup<DeletePublicKeyRequestFormProperties>({
		});

	}

	export interface DeleteRealtimeLogConfigRequest {
		Name?: string;
		ARN?: string;
	}
	export interface DeleteRealtimeLogConfigRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRealtimeLogConfigRequestFormGroup() {
		return new FormGroup<DeleteRealtimeLogConfigRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteResponseHeadersPolicyRequest {
	}
	export interface DeleteResponseHeadersPolicyRequestFormProperties {
	}
	export function CreateDeleteResponseHeadersPolicyRequestFormGroup() {
		return new FormGroup<DeleteResponseHeadersPolicyRequestFormProperties>({
		});

	}


	/** The request to delete a streaming distribution. */
	export interface DeleteStreamingDistributionRequest {
	}

	/** The request to delete a streaming distribution. */
	export interface DeleteStreamingDistributionRequestFormProperties {
	}
	export function CreateDeleteStreamingDistributionRequestFormGroup() {
		return new FormGroup<DeleteStreamingDistributionRequestFormProperties>({
		});

	}

	export interface DescribeFunctionRequest {
	}
	export interface DescribeFunctionRequestFormProperties {
	}
	export function CreateDescribeFunctionRequestFormGroup() {
		return new FormGroup<DescribeFunctionRequestFormProperties>({
		});

	}


	/** A summary of the information about a CloudFront distribution. */
	export interface DistributionSummary {

		/** Required */
		Id: string;

		/** Required */
		ARN: string;

		/** Required */
		Status: string;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		DomainName: string;

		/** Required */
		Aliases: Aliases;

		/** Required */
		Origins: Origins;
		OriginGroups?: OriginGroups;

		/** Required */
		DefaultCacheBehavior: DefaultCacheBehavior;

		/** Required */
		CacheBehaviors: CacheBehaviors;

		/** Required */
		CustomErrorResponses: CustomErrorResponses;

		/** Required */
		Comment: string;

		/** Required */
		PriceClass: PriceClass;

		/** Required */
		Enabled: boolean;

		/** Required */
		ViewerCertificate: ViewerCertificate;

		/** Required */
		Restrictions: Restrictions;

		/** Required */
		WebACLId: string;

		/** Required */
		HttpVersion: HttpVersion;

		/** Required */
		IsIPV6Enabled: boolean;
		AliasICPRecordals?: Array<string>;

		/** Required */
		Staging: boolean;
	}

	/** A summary of the information about a CloudFront distribution. */
	export interface DistributionSummaryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ARN: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		Comment: FormControl<string | null | undefined>,

		/** Required */
		PriceClass: FormControl<PriceClass | null | undefined>,

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		WebACLId: FormControl<string | null | undefined>,

		/** Required */
		HttpVersion: FormControl<HttpVersion | null | undefined>,

		/** Required */
		IsIPV6Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		Staging: FormControl<boolean | null | undefined>,
	}
	export function CreateDistributionSummaryFormGroup() {
		return new FormGroup<DistributionSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PriceClass: new FormControl<PriceClass | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HttpVersion: new FormControl<HttpVersion | null | undefined>(undefined, [Validators.required]),
			IsIPV6Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Staging: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex data type that includes the field patterns to match for field-level encryption. */
	export interface FieldPatterns {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex data type that includes the field patterns to match for field-level encryption. */
	export interface FieldPatternsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateFieldPatternsFormGroup() {
		return new FormGroup<FieldPatternsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications. */
	export interface EncryptionEntity {

		/** Required */
		PublicKeyId: string;

		/** Required */
		ProviderId: string;

		/** Required */
		FieldPatterns: FieldPatterns;
	}

	/** Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications. */
	export interface EncryptionEntityFormProperties {

		/** Required */
		PublicKeyId: FormControl<string | null | undefined>,

		/** Required */
		ProviderId: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionEntityFormGroup() {
		return new FormGroup<EncryptionEntityFormProperties>({
			PublicKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProviderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EventType { 'viewer-request' = 'viewer-request', 'viewer-response' = 'viewer-response', 'origin-request' = 'origin-request', 'origin-response' = 'origin-response' }


	/** The field-level encryption profile summary. */
	export interface FieldLevelEncryptionProfileSummary {

		/** Required */
		Id: string;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		Name: string;

		/** Required */
		EncryptionEntities: EncryptionEntities;
		Comment?: string;
	}

	/** The field-level encryption profile summary. */
	export interface FieldLevelEncryptionProfileSummaryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateFieldLevelEncryptionProfileSummaryFormGroup() {
		return new FormGroup<FieldLevelEncryptionProfileSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of a field-level encryption item. */
	export interface FieldLevelEncryptionSummary {

		/** Required */
		Id: string;

		/** Required */
		LastModifiedTime: Date;
		Comment?: string;
		QueryArgProfileConfig?: QueryArgProfileConfig;
		ContentTypeProfileConfig?: ContentTypeProfileConfig;
	}

	/** A summary of a field-level encryption item. */
	export interface FieldLevelEncryptionSummaryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateFieldLevelEncryptionSummaryFormGroup() {
		return new FormGroup<FieldLevelEncryptionSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A CloudFront function that is associated with a cache behavior in a CloudFront distribution. */
	export interface FunctionAssociation {

		/** Required */
		FunctionARN: string;

		/** Required */
		EventType: EventType;
	}

	/** A CloudFront function that is associated with a cache behavior in a CloudFront distribution. */
	export interface FunctionAssociationFormProperties {

		/** Required */
		FunctionARN: FormControl<string | null | undefined>,

		/** Required */
		EventType: FormControl<EventType | null | undefined>,
	}
	export function CreateFunctionAssociationFormGroup() {
		return new FormGroup<FunctionAssociationFormProperties>({
			FunctionARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventType: new FormControl<EventType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCachePolicyConfigRequest {
	}
	export interface GetCachePolicyConfigRequestFormProperties {
	}
	export function CreateGetCachePolicyConfigRequestFormGroup() {
		return new FormGroup<GetCachePolicyConfigRequestFormProperties>({
		});

	}

	export interface GetCachePolicyRequest {
	}
	export interface GetCachePolicyRequestFormProperties {
	}
	export function CreateGetCachePolicyRequestFormGroup() {
		return new FormGroup<GetCachePolicyRequestFormProperties>({
		});

	}


	/** The origin access identity's configuration information. For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CloudFrontOriginAccessIdentityConfig.html">CloudFrontOriginAccessIdentityConfig</a>. */
	export interface GetCloudFrontOriginAccessIdentityConfigRequest {
	}

	/** The origin access identity's configuration information. For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CloudFrontOriginAccessIdentityConfig.html">CloudFrontOriginAccessIdentityConfig</a>. */
	export interface GetCloudFrontOriginAccessIdentityConfigRequestFormProperties {
	}
	export function CreateGetCloudFrontOriginAccessIdentityConfigRequestFormGroup() {
		return new FormGroup<GetCloudFrontOriginAccessIdentityConfigRequestFormProperties>({
		});

	}


	/** The request to get an origin access identity's information. */
	export interface GetCloudFrontOriginAccessIdentityRequest {
	}

	/** The request to get an origin access identity's information. */
	export interface GetCloudFrontOriginAccessIdentityRequestFormProperties {
	}
	export function CreateGetCloudFrontOriginAccessIdentityRequestFormGroup() {
		return new FormGroup<GetCloudFrontOriginAccessIdentityRequestFormProperties>({
		});

	}

	export interface GetContinuousDeploymentPolicyConfigRequest {
	}
	export interface GetContinuousDeploymentPolicyConfigRequestFormProperties {
	}
	export function CreateGetContinuousDeploymentPolicyConfigRequestFormGroup() {
		return new FormGroup<GetContinuousDeploymentPolicyConfigRequestFormProperties>({
		});

	}

	export interface GetContinuousDeploymentPolicyRequest {
	}
	export interface GetContinuousDeploymentPolicyRequestFormProperties {
	}
	export function CreateGetContinuousDeploymentPolicyRequestFormGroup() {
		return new FormGroup<GetContinuousDeploymentPolicyRequestFormProperties>({
		});

	}


	/** The request to get a distribution configuration. */
	export interface GetDistributionConfigRequest {
	}

	/** The request to get a distribution configuration. */
	export interface GetDistributionConfigRequestFormProperties {
	}
	export function CreateGetDistributionConfigRequestFormGroup() {
		return new FormGroup<GetDistributionConfigRequestFormProperties>({
		});

	}


	/** The request to get a distribution's information. */
	export interface GetDistributionRequest {
	}

	/** The request to get a distribution's information. */
	export interface GetDistributionRequestFormProperties {
	}
	export function CreateGetDistributionRequestFormGroup() {
		return new FormGroup<GetDistributionRequestFormProperties>({
		});

	}

	export interface GetFieldLevelEncryptionConfigRequest {
	}
	export interface GetFieldLevelEncryptionConfigRequestFormProperties {
	}
	export function CreateGetFieldLevelEncryptionConfigRequestFormGroup() {
		return new FormGroup<GetFieldLevelEncryptionConfigRequestFormProperties>({
		});

	}

	export interface GetFieldLevelEncryptionProfileConfigRequest {
	}
	export interface GetFieldLevelEncryptionProfileConfigRequestFormProperties {
	}
	export function CreateGetFieldLevelEncryptionProfileConfigRequestFormGroup() {
		return new FormGroup<GetFieldLevelEncryptionProfileConfigRequestFormProperties>({
		});

	}

	export interface GetFieldLevelEncryptionProfileRequest {
	}
	export interface GetFieldLevelEncryptionProfileRequestFormProperties {
	}
	export function CreateGetFieldLevelEncryptionProfileRequestFormGroup() {
		return new FormGroup<GetFieldLevelEncryptionProfileRequestFormProperties>({
		});

	}

	export interface GetFieldLevelEncryptionRequest {
	}
	export interface GetFieldLevelEncryptionRequestFormProperties {
	}
	export function CreateGetFieldLevelEncryptionRequestFormGroup() {
		return new FormGroup<GetFieldLevelEncryptionRequestFormProperties>({
		});

	}

	export interface GetFunctionRequest {
	}
	export interface GetFunctionRequestFormProperties {
	}
	export function CreateGetFunctionRequestFormGroup() {
		return new FormGroup<GetFunctionRequestFormProperties>({
		});

	}


	/** The request to get an invalidation's information. */
	export interface GetInvalidationRequest {
	}

	/** The request to get an invalidation's information. */
	export interface GetInvalidationRequestFormProperties {
	}
	export function CreateGetInvalidationRequestFormGroup() {
		return new FormGroup<GetInvalidationRequestFormProperties>({
		});

	}

	export interface GetKeyGroupConfigRequest {
	}
	export interface GetKeyGroupConfigRequestFormProperties {
	}
	export function CreateGetKeyGroupConfigRequestFormGroup() {
		return new FormGroup<GetKeyGroupConfigRequestFormProperties>({
		});

	}

	export interface GetKeyGroupRequest {
	}
	export interface GetKeyGroupRequestFormProperties {
	}
	export function CreateGetKeyGroupRequestFormGroup() {
		return new FormGroup<GetKeyGroupRequestFormProperties>({
		});

	}

	export interface GetMonitoringSubscriptionRequest {
	}
	export interface GetMonitoringSubscriptionRequestFormProperties {
	}
	export function CreateGetMonitoringSubscriptionRequestFormGroup() {
		return new FormGroup<GetMonitoringSubscriptionRequestFormProperties>({
		});

	}

	export interface GetOriginAccessControlConfigRequest {
	}
	export interface GetOriginAccessControlConfigRequestFormProperties {
	}
	export function CreateGetOriginAccessControlConfigRequestFormGroup() {
		return new FormGroup<GetOriginAccessControlConfigRequestFormProperties>({
		});

	}

	export interface GetOriginAccessControlRequest {
	}
	export interface GetOriginAccessControlRequestFormProperties {
	}
	export function CreateGetOriginAccessControlRequestFormGroup() {
		return new FormGroup<GetOriginAccessControlRequestFormProperties>({
		});

	}

	export interface GetOriginRequestPolicyConfigRequest {
	}
	export interface GetOriginRequestPolicyConfigRequestFormProperties {
	}
	export function CreateGetOriginRequestPolicyConfigRequestFormGroup() {
		return new FormGroup<GetOriginRequestPolicyConfigRequestFormProperties>({
		});

	}

	export interface GetOriginRequestPolicyRequest {
	}
	export interface GetOriginRequestPolicyRequestFormProperties {
	}
	export function CreateGetOriginRequestPolicyRequestFormGroup() {
		return new FormGroup<GetOriginRequestPolicyRequestFormProperties>({
		});

	}

	export interface GetPublicKeyConfigRequest {
	}
	export interface GetPublicKeyConfigRequestFormProperties {
	}
	export function CreateGetPublicKeyConfigRequestFormGroup() {
		return new FormGroup<GetPublicKeyConfigRequestFormProperties>({
		});

	}

	export interface GetPublicKeyRequest {
	}
	export interface GetPublicKeyRequestFormProperties {
	}
	export function CreateGetPublicKeyRequestFormGroup() {
		return new FormGroup<GetPublicKeyRequestFormProperties>({
		});

	}

	export interface GetRealtimeLogConfigRequest {
		Name?: string;
		ARN?: string;
	}
	export interface GetRealtimeLogConfigRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateGetRealtimeLogConfigRequestFormGroup() {
		return new FormGroup<GetRealtimeLogConfigRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResponseHeadersPolicyConfigRequest {
	}
	export interface GetResponseHeadersPolicyConfigRequestFormProperties {
	}
	export function CreateGetResponseHeadersPolicyConfigRequestFormGroup() {
		return new FormGroup<GetResponseHeadersPolicyConfigRequestFormProperties>({
		});

	}

	export interface GetResponseHeadersPolicyRequest {
	}
	export interface GetResponseHeadersPolicyRequestFormProperties {
	}
	export function CreateGetResponseHeadersPolicyRequestFormGroup() {
		return new FormGroup<GetResponseHeadersPolicyRequestFormProperties>({
		});

	}


	/** To request to get a streaming distribution configuration. */
	export interface GetStreamingDistributionConfigRequest {
	}

	/** To request to get a streaming distribution configuration. */
	export interface GetStreamingDistributionConfigRequestFormProperties {
	}
	export function CreateGetStreamingDistributionConfigRequestFormGroup() {
		return new FormGroup<GetStreamingDistributionConfigRequestFormProperties>({
		});

	}


	/** The request to get a streaming distribution's information. */
	export interface GetStreamingDistributionRequest {
	}

	/** The request to get a streaming distribution's information. */
	export interface GetStreamingDistributionRequestFormProperties {
	}
	export function CreateGetStreamingDistributionRequestFormGroup() {
		return new FormGroup<GetStreamingDistributionRequestFormProperties>({
		});

	}


	/** A summary of an invalidation request. */
	export interface InvalidationSummary {

		/** Required */
		Id: string;

		/** Required */
		CreateTime: Date;

		/** Required */
		Status: string;
	}

	/** A summary of an invalidation request. */
	export interface InvalidationSummaryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,

		/** Required */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateInvalidationSummaryFormGroup() {
		return new FormGroup<InvalidationSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of CloudFront key pair identifiers. */
	export interface KeyPairIds {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of CloudFront key pair identifiers. */
	export interface KeyPairIdsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateKeyPairIdsFormGroup() {
		return new FormGroup<KeyPairIdsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of identifiers for the public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies. */
	export interface KGKeyPairIds {
		KeyGroupId?: string;

		/** A list of CloudFront key pair identifiers. */
		KeyPairIds?: KeyPairIds;
	}

	/** A list of identifiers for the public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies. */
	export interface KGKeyPairIdsFormProperties {
		KeyGroupId: FormControl<string | null | undefined>,
	}
	export function CreateKGKeyPairIdsFormGroup() {
		return new FormGroup<KGKeyPairIdsFormProperties>({
			KeyGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a key group. */
	export interface KeyGroupSummary {

		/** Required */
		KeyGroup: KeyGroup;
	}

	/** Contains information about a key group. */
	export interface KeyGroupSummaryFormProperties {
	}
	export function CreateKeyGroupSummaryFormGroup() {
		return new FormGroup<KeyGroupSummaryFormProperties>({
		});

	}


	/** A complex type that contains a Lambda@Edge function association. */
	export interface LambdaFunctionAssociation {

		/** Required */
		LambdaFunctionARN: string;

		/** Required */
		EventType: EventType;
		IncludeBody?: boolean | null;
	}

	/** A complex type that contains a Lambda@Edge function association. */
	export interface LambdaFunctionAssociationFormProperties {

		/** Required */
		LambdaFunctionARN: FormControl<string | null | undefined>,

		/** Required */
		EventType: FormControl<EventType | null | undefined>,
		IncludeBody: FormControl<boolean | null | undefined>,
	}
	export function CreateLambdaFunctionAssociationFormGroup() {
		return new FormGroup<LambdaFunctionAssociationFormProperties>({
			LambdaFunctionARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventType: new FormControl<EventType | null | undefined>(undefined, [Validators.required]),
			IncludeBody: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListCachePoliciesRequest {
	}
	export interface ListCachePoliciesRequestFormProperties {
	}
	export function CreateListCachePoliciesRequestFormGroup() {
		return new FormGroup<ListCachePoliciesRequestFormProperties>({
		});

	}


	/** The request to list origin access identities. */
	export interface ListCloudFrontOriginAccessIdentitiesRequest {
	}

	/** The request to list origin access identities. */
	export interface ListCloudFrontOriginAccessIdentitiesRequestFormProperties {
	}
	export function CreateListCloudFrontOriginAccessIdentitiesRequestFormGroup() {
		return new FormGroup<ListCloudFrontOriginAccessIdentitiesRequestFormProperties>({
		});

	}

	export interface ListConflictingAliasesRequest {
	}
	export interface ListConflictingAliasesRequestFormProperties {
	}
	export function CreateListConflictingAliasesRequestFormGroup() {
		return new FormGroup<ListConflictingAliasesRequestFormProperties>({
		});

	}

	export interface ListContinuousDeploymentPoliciesRequest {
	}
	export interface ListContinuousDeploymentPoliciesRequestFormProperties {
	}
	export function CreateListContinuousDeploymentPoliciesRequestFormGroup() {
		return new FormGroup<ListContinuousDeploymentPoliciesRequestFormProperties>({
		});

	}

	export interface ListDistributionsByCachePolicyIdRequest {
	}
	export interface ListDistributionsByCachePolicyIdRequestFormProperties {
	}
	export function CreateListDistributionsByCachePolicyIdRequestFormGroup() {
		return new FormGroup<ListDistributionsByCachePolicyIdRequestFormProperties>({
		});

	}

	export interface ListDistributionsByKeyGroupRequest {
	}
	export interface ListDistributionsByKeyGroupRequestFormProperties {
	}
	export function CreateListDistributionsByKeyGroupRequestFormGroup() {
		return new FormGroup<ListDistributionsByKeyGroupRequestFormProperties>({
		});

	}

	export interface ListDistributionsByOriginRequestPolicyIdRequest {
	}
	export interface ListDistributionsByOriginRequestPolicyIdRequestFormProperties {
	}
	export function CreateListDistributionsByOriginRequestPolicyIdRequestFormGroup() {
		return new FormGroup<ListDistributionsByOriginRequestPolicyIdRequestFormProperties>({
		});

	}

	export interface ListDistributionsByRealtimeLogConfigRequest {
		Marker?: string;
		MaxItems?: string;
		RealtimeLogConfigName?: string;
		RealtimeLogConfigArn?: string;
	}
	export interface ListDistributionsByRealtimeLogConfigRequestFormProperties {
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<string | null | undefined>,
		RealtimeLogConfigName: FormControl<string | null | undefined>,
		RealtimeLogConfigArn: FormControl<string | null | undefined>,
	}
	export function CreateListDistributionsByRealtimeLogConfigRequestFormGroup() {
		return new FormGroup<ListDistributionsByRealtimeLogConfigRequestFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<string | null | undefined>(undefined),
			RealtimeLogConfigName: new FormControl<string | null | undefined>(undefined),
			RealtimeLogConfigArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDistributionsByResponseHeadersPolicyIdRequest {
	}
	export interface ListDistributionsByResponseHeadersPolicyIdRequestFormProperties {
	}
	export function CreateListDistributionsByResponseHeadersPolicyIdRequestFormGroup() {
		return new FormGroup<ListDistributionsByResponseHeadersPolicyIdRequestFormProperties>({
		});

	}


	/** The request to list distributions that are associated with a specified WAF web ACL. */
	export interface ListDistributionsByWebACLIdRequest {
	}

	/** The request to list distributions that are associated with a specified WAF web ACL. */
	export interface ListDistributionsByWebACLIdRequestFormProperties {
	}
	export function CreateListDistributionsByWebACLIdRequestFormGroup() {
		return new FormGroup<ListDistributionsByWebACLIdRequestFormProperties>({
		});

	}


	/** The request to list your distributions. */
	export interface ListDistributionsRequest {
	}

	/** The request to list your distributions. */
	export interface ListDistributionsRequestFormProperties {
	}
	export function CreateListDistributionsRequestFormGroup() {
		return new FormGroup<ListDistributionsRequestFormProperties>({
		});

	}

	export interface ListFieldLevelEncryptionConfigsRequest {
	}
	export interface ListFieldLevelEncryptionConfigsRequestFormProperties {
	}
	export function CreateListFieldLevelEncryptionConfigsRequestFormGroup() {
		return new FormGroup<ListFieldLevelEncryptionConfigsRequestFormProperties>({
		});

	}

	export interface ListFieldLevelEncryptionProfilesRequest {
	}
	export interface ListFieldLevelEncryptionProfilesRequestFormProperties {
	}
	export function CreateListFieldLevelEncryptionProfilesRequestFormGroup() {
		return new FormGroup<ListFieldLevelEncryptionProfilesRequestFormProperties>({
		});

	}

	export interface ListFunctionsRequest {
	}
	export interface ListFunctionsRequestFormProperties {
	}
	export function CreateListFunctionsRequestFormGroup() {
		return new FormGroup<ListFunctionsRequestFormProperties>({
		});

	}


	/** The request to list invalidations. */
	export interface ListInvalidationsRequest {
	}

	/** The request to list invalidations. */
	export interface ListInvalidationsRequestFormProperties {
	}
	export function CreateListInvalidationsRequestFormGroup() {
		return new FormGroup<ListInvalidationsRequestFormProperties>({
		});

	}

	export interface ListKeyGroupsRequest {
	}
	export interface ListKeyGroupsRequestFormProperties {
	}
	export function CreateListKeyGroupsRequestFormGroup() {
		return new FormGroup<ListKeyGroupsRequestFormProperties>({
		});

	}

	export interface ListOriginAccessControlsRequest {
	}
	export interface ListOriginAccessControlsRequestFormProperties {
	}
	export function CreateListOriginAccessControlsRequestFormGroup() {
		return new FormGroup<ListOriginAccessControlsRequestFormProperties>({
		});

	}

	export enum OriginRequestPolicyType { managed = 'managed', custom = 'custom' }

	export interface ListOriginRequestPoliciesRequest {
	}
	export interface ListOriginRequestPoliciesRequestFormProperties {
	}
	export function CreateListOriginRequestPoliciesRequestFormGroup() {
		return new FormGroup<ListOriginRequestPoliciesRequestFormProperties>({
		});

	}

	export interface ListPublicKeysRequest {
	}
	export interface ListPublicKeysRequestFormProperties {
	}
	export function CreateListPublicKeysRequestFormGroup() {
		return new FormGroup<ListPublicKeysRequestFormProperties>({
		});

	}

	export interface ListRealtimeLogConfigsRequest {
	}
	export interface ListRealtimeLogConfigsRequestFormProperties {
	}
	export function CreateListRealtimeLogConfigsRequestFormGroup() {
		return new FormGroup<ListRealtimeLogConfigsRequestFormProperties>({
		});

	}

	export enum ResponseHeadersPolicyType { managed = 'managed', custom = 'custom' }

	export interface ListResponseHeadersPoliciesRequest {
	}
	export interface ListResponseHeadersPoliciesRequestFormProperties {
	}
	export function CreateListResponseHeadersPoliciesRequestFormGroup() {
		return new FormGroup<ListResponseHeadersPoliciesRequestFormProperties>({
		});

	}


	/** The request to list your streaming distributions. */
	export interface ListStreamingDistributionsRequest {
	}

	/** The request to list your streaming distributions. */
	export interface ListStreamingDistributionsRequestFormProperties {
	}
	export function CreateListStreamingDistributionsRequestFormGroup() {
		return new FormGroup<ListStreamingDistributionsRequestFormProperties>({
		});

	}


	/** The request to list tags for a CloudFront resource. */
	export interface ListTagsForResourceRequest {
	}

	/** The request to list tags for a CloudFront resource. */
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export enum Method { GET = 'GET', HEAD = 'HEAD', POST = 'POST', PUT = 'PUT', PATCH = 'PATCH', OPTIONS = 'OPTIONS', DELETE = 'DELETE' }


	/** A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin or an S3 bucket that is configured as a website endpoint, use the <code>CustomOriginConfig</code> element instead. */
	export interface S3OriginConfig {

		/** Required */
		OriginAccessIdentity: string;
	}

	/** A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin or an S3 bucket that is configured as a website endpoint, use the <code>CustomOriginConfig</code> element instead. */
	export interface S3OriginConfigFormProperties {

		/** Required */
		OriginAccessIdentity: FormControl<string | null | undefined>,
	}
	export function CreateS3OriginConfigFormGroup() {
		return new FormGroup<S3OriginConfigFormProperties>({
			OriginAccessIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>CloudFront Origin Shield.</p> <p>Using Origin Shield can help reduce the load on your origin. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html">Using Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface OriginShield {

		/** Required */
		Enabled: boolean;
		OriginShieldRegion?: string;
	}

	/** <p>CloudFront Origin Shield.</p> <p>Using Origin Shield can help reduce the load on your origin. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html">Using Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface OriginShieldFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		OriginShieldRegion: FormControl<string | null | undefined>,
	}
	export function CreateOriginShieldFormGroup() {
		return new FormGroup<OriginShieldFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			OriginShieldRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>An origin.</p> <p>An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:</p> <ul> <li> <p>Use <code>S3OriginConfig</code> to specify an Amazon S3 bucket that is not configured with static website hosting.</p> </li> <li> <p>Use <code>CustomOriginConfig</code> to specify all other kinds of origins, including:</p> <ul> <li> <p>An Amazon S3 bucket that is configured with static website hosting</p> </li> <li> <p>An Elastic Load Balancing load balancer</p> </li> <li> <p>An AWS Elemental MediaPackage endpoint</p> </li> <li> <p>An AWS Elemental MediaStore container</p> </li> <li> <p>Any other HTTP server, running on an Amazon EC2 instance or any other kind of host</p> </li> </ul> </li> </ul> <p>For the current maximum number of origins that you can specify per distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions">General Quotas on Web Distributions</a> in the <i>Amazon CloudFront Developer Guide</i> (quotas were formerly referred to as limits).</p> */
	export interface Origin {

		/** Required */
		Id: string;

		/** Required */
		DomainName: string;
		OriginPath?: string;
		CustomHeaders?: CustomHeaders;
		S3OriginConfig?: S3OriginConfig;
		CustomOriginConfig?: CustomOriginConfig;
		ConnectionAttempts?: number | null;
		ConnectionTimeout?: number | null;
		OriginShield?: OriginShield;
		OriginAccessControlId?: string;
	}

	/** <p>An origin.</p> <p>An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:</p> <ul> <li> <p>Use <code>S3OriginConfig</code> to specify an Amazon S3 bucket that is not configured with static website hosting.</p> </li> <li> <p>Use <code>CustomOriginConfig</code> to specify all other kinds of origins, including:</p> <ul> <li> <p>An Amazon S3 bucket that is configured with static website hosting</p> </li> <li> <p>An Elastic Load Balancing load balancer</p> </li> <li> <p>An AWS Elemental MediaPackage endpoint</p> </li> <li> <p>An AWS Elemental MediaStore container</p> </li> <li> <p>Any other HTTP server, running on an Amazon EC2 instance or any other kind of host</p> </li> </ul> </li> </ul> <p>For the current maximum number of origins that you can specify per distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions">General Quotas on Web Distributions</a> in the <i>Amazon CloudFront Developer Guide</i> (quotas were formerly referred to as limits).</p> */
	export interface OriginFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		OriginPath: FormControl<string | null | undefined>,
		ConnectionAttempts: FormControl<number | null | undefined>,
		ConnectionTimeout: FormControl<number | null | undefined>,
		OriginAccessControlId: FormControl<string | null | undefined>,
	}
	export function CreateOriginFormGroup() {
		return new FormGroup<OriginFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OriginPath: new FormControl<string | null | undefined>(undefined),
			ConnectionAttempts: new FormControl<number | null | undefined>(undefined),
			ConnectionTimeout: new FormControl<number | null | undefined>(undefined),
			OriginAccessControlId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A CloudFront origin access control. */
	export interface OriginAccessControlSummary {

		/** Required */
		Id: string;

		/** Required */
		Description: string;

		/** Required */
		Name: string;

		/** Required */
		SigningProtocol: OriginAccessControlSigningProtocols;

		/** Required */
		SigningBehavior: OriginAccessControlSigningBehaviors;

		/** Required */
		OriginAccessControlOriginType: OriginAccessControlOriginTypes;
	}

	/** A CloudFront origin access control. */
	export interface OriginAccessControlSummaryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		SigningProtocol: FormControl<OriginAccessControlSigningProtocols | null | undefined>,

		/** Required */
		SigningBehavior: FormControl<OriginAccessControlSigningBehaviors | null | undefined>,

		/** Required */
		OriginAccessControlOriginType: FormControl<OriginAccessControlOriginTypes | null | undefined>,
	}
	export function CreateOriginAccessControlSummaryFormGroup() {
		return new FormGroup<OriginAccessControlSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SigningProtocol: new FormControl<OriginAccessControlSigningProtocols | null | undefined>(undefined, [Validators.required]),
			SigningBehavior: new FormControl<OriginAccessControlSigningBehaviors | null | undefined>(undefined, [Validators.required]),
			OriginAccessControlOriginType: new FormControl<OriginAccessControlOriginTypes | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution. */
	export interface OriginCustomHeader {

		/** Required */
		HeaderName: string;

		/** Required */
		HeaderValue: string;
	}

	/** A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution. */
	export interface OriginCustomHeaderFormProperties {

		/** Required */
		HeaderName: FormControl<string | null | undefined>,

		/** Required */
		HeaderValue: FormControl<string | null | undefined>,
	}
	export function CreateOriginCustomHeaderFormGroup() {
		return new FormGroup<OriginCustomHeaderFormProperties>({
			HeaderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HeaderValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin. */
	export interface OriginGroupFailoverCriteria {

		/** Required */
		StatusCodes: StatusCodes;
	}

	/** A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin. */
	export interface OriginGroupFailoverCriteriaFormProperties {
	}
	export function CreateOriginGroupFailoverCriteriaFormGroup() {
		return new FormGroup<OriginGroupFailoverCriteriaFormProperties>({
		});

	}


	/** A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin. */
	export interface StatusCodes {

		/** Required */
		Quantity: number;

		/** Required */
		Items: Array<string>;
	}

	/** A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin. */
	export interface StatusCodesFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateStatusCodesFormGroup() {
		return new FormGroup<StatusCodesFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex data type for the origins included in an origin group. */
	export interface OriginGroupMembers {

		/** Required */
		Quantity: number;

		/** Required */
		Items: Array<string>;
	}

	/** A complex data type for the origins included in an origin group. */
	export interface OriginGroupMembersFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateOriginGroupMembersFormGroup() {
		return new FormGroup<OriginGroupMembersFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An origin group includes two origins (a primary origin and a second origin to failover to) and a failover criteria that you specify. You create an origin group to support origin failover in CloudFront. When you create or update a distribution, you can specifiy the origin group instead of a single origin, and CloudFront will failover from the primary origin to the second origin under the failover conditions that you've chosen. */
	export interface OriginGroup {

		/** Required */
		Id: string;

		/** Required */
		FailoverCriteria: OriginGroupFailoverCriteria;

		/** Required */
		Members: OriginGroupMembers;
	}

	/** An origin group includes two origins (a primary origin and a second origin to failover to) and a failover criteria that you specify. You create an origin group to support origin failover in CloudFront. When you create or update a distribution, you can specifiy the origin group instead of a single origin, and CloudFront will failover from the primary origin to the second origin under the failover conditions that you've chosen. */
	export interface OriginGroupFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateOriginGroupFormGroup() {
		return new FormGroup<OriginGroupFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An origin in an origin group. */
	export interface OriginGroupMember {

		/** Required */
		OriginId: string;
	}

	/** An origin in an origin group. */
	export interface OriginGroupMemberFormProperties {

		/** Required */
		OriginId: FormControl<string | null | undefined>,
	}
	export function CreateOriginGroupMemberFormGroup() {
		return new FormGroup<OriginGroupMemberFormProperties>({
			OriginId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OriginRequestPolicyQueryStringBehavior { none = 'none', whitelist = 'whitelist', all = 'all', allExcept = 'allExcept' }


	/** Contains an origin request policy. */
	export interface OriginRequestPolicySummary {

		/** Required */
		Type: CachePolicyType;

		/** Required */
		OriginRequestPolicy: OriginRequestPolicy;
	}

	/** Contains an origin request policy. */
	export interface OriginRequestPolicySummaryFormProperties {

		/** Required */
		Type: FormControl<CachePolicyType | null | undefined>,
	}
	export function CreateOriginRequestPolicySummaryFormGroup() {
		return new FormGroup<OriginRequestPolicySummaryFormProperties>({
			Type: new FormControl<CachePolicyType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about a public key. */
	export interface PublicKeySummary {

		/** Required */
		Id: string;

		/** Required */
		Name: string;

		/** Required */
		CreatedTime: Date;

		/** Required */
		EncodedKey: string;
		Comment?: string;
	}

	/** Contains information about a public key. */
	export interface PublicKeySummaryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,

		/** Required */
		EncodedKey: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
	}
	export function CreatePublicKeySummaryFormGroup() {
		return new FormGroup<PublicKeySummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EncodedKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublishFunctionRequest {
	}
	export interface PublishFunctionRequestFormProperties {
	}
	export function CreatePublishFunctionRequestFormGroup() {
		return new FormGroup<PublishFunctionRequestFormProperties>({
		});

	}


	/** Query argument-profile mapping for field-level encryption. */
	export interface QueryArgProfile {

		/** Required */
		QueryArg: string;

		/** Required */
		ProfileId: string;
	}

	/** Query argument-profile mapping for field-level encryption. */
	export interface QueryArgProfileFormProperties {

		/** Required */
		QueryArg: FormControl<string | null | undefined>,

		/** Required */
		ProfileId: FormControl<string | null | undefined>,
	}
	export function CreateQueryArgProfileFormGroup() {
		return new FormGroup<QueryArgProfileFormProperties>({
			QueryArg: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An HTTP response header name and its value. CloudFront includes this header in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy. */
	export interface ResponseHeadersPolicyCustomHeader {

		/** Required */
		Header: string;

		/** Required */
		Value: string;

		/** Required */
		Override: boolean;
	}

	/** An HTTP response header name and its value. CloudFront includes this header in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy. */
	export interface ResponseHeadersPolicyCustomHeaderFormProperties {

		/** Required */
		Header: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,

		/** Required */
		Override: FormControl<boolean | null | undefined>,
	}
	export function CreateResponseHeadersPolicyCustomHeaderFormGroup() {
		return new FormGroup<ResponseHeadersPolicyCustomHeaderFormProperties>({
			Header: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Override: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The name of an HTTP header that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to. */
	export interface ResponseHeadersPolicyRemoveHeader {

		/** Required */
		Header: string;
	}

	/** The name of an HTTP header that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to. */
	export interface ResponseHeadersPolicyRemoveHeaderFormProperties {

		/** Required */
		Header: FormControl<string | null | undefined>,
	}
	export function CreateResponseHeadersPolicyRemoveHeaderFormGroup() {
		return new FormGroup<ResponseHeadersPolicyRemoveHeaderFormProperties>({
			Header: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains a response headers policy. */
	export interface ResponseHeadersPolicySummary {

		/** Required */
		Type: CachePolicyType;

		/** Required */
		ResponseHeadersPolicy: ResponseHeadersPolicy;
	}

	/** Contains a response headers policy. */
	export interface ResponseHeadersPolicySummaryFormProperties {

		/** Required */
		Type: FormControl<CachePolicyType | null | undefined>,
	}
	export function CreateResponseHeadersPolicySummaryFormGroup() {
		return new FormGroup<ResponseHeadersPolicySummaryFormProperties>({
			Type: new FormControl<CachePolicyType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies. */
	export interface Signer {
		AwsAccountNumber?: string;
		KeyPairIds?: KeyPairIds;
	}

	/** A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies. */
	export interface SignerFormProperties {
		AwsAccountNumber: FormControl<string | null | undefined>,
	}
	export function CreateSignerFormGroup() {
		return new FormGroup<SignerFormProperties>({
			AwsAccountNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SslProtocol { SSLv3 = 'SSLv3', TLSv1 = 'TLSv1', 'TLSv1.1' = 'TLSv1.1', 'TLSv1.2' = 'TLSv1.2' }


	/** A summary of the information for a CloudFront streaming distribution. */
	export interface StreamingDistributionSummary {

		/** Required */
		Id: string;

		/** Required */
		ARN: string;

		/** Required */
		Status: string;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		DomainName: string;

		/** Required */
		S3Origin: S3Origin;

		/** Required */
		Aliases: Aliases;

		/** Required */
		TrustedSigners: TrustedSigners;

		/** Required */
		Comment: string;

		/** Required */
		PriceClass: PriceClass;

		/** Required */
		Enabled: boolean;
	}

	/** A summary of the information for a CloudFront streaming distribution. */
	export interface StreamingDistributionSummaryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ARN: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedTime: FormControl<Date | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		Comment: FormControl<string | null | undefined>,

		/** Required */
		PriceClass: FormControl<PriceClass | null | undefined>,

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateStreamingDistributionSummaryFormGroup() {
		return new FormGroup<StreamingDistributionSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PriceClass: new FormControl<PriceClass | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that contains <code>Tag</code> key and <code>Tag</code> value. */
	export interface Tag {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** A complex type that contains <code>Tag</code> key and <code>Tag</code> value. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains zero or more <code>Tag</code> elements. */
	export interface TagKeys {
		Items?: Array<string>;
	}

	/** A complex type that contains zero or more <code>Tag</code> elements. */
	export interface TagKeysFormProperties {
	}
	export function CreateTagKeysFormGroup() {
		return new FormGroup<TagKeysFormProperties>({
		});

	}


	/** The request to add tags to a CloudFront resource. */
	export interface TagResourceRequest {

		/** Required */
		Tags: Tags;
	}

	/** The request to add tags to a CloudFront resource. */
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface TestFunctionRequest {
		Stage?: FunctionStage;

		/** Required */
		EventObject: string;
	}
	export interface TestFunctionRequestFormProperties {
		Stage: FormControl<FunctionStage | null | undefined>,

		/** Required */
		EventObject: FormControl<string | null | undefined>,
	}
	export function CreateTestFunctionRequestFormGroup() {
		return new FormGroup<TestFunctionRequestFormProperties>({
			Stage: new FormControl<FunctionStage | null | undefined>(undefined),
			EventObject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request to remove tags from a CloudFront resource. */
	export interface UntagResourceRequest {

		/** Required */
		TagKeys: TagKeys;
	}

	/** The request to remove tags from a CloudFront resource. */
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateCachePolicyRequest {

		/** Required */
		CachePolicyConfig: CachePolicyConfig;
	}
	export interface UpdateCachePolicyRequestFormProperties {
	}
	export function CreateUpdateCachePolicyRequestFormGroup() {
		return new FormGroup<UpdateCachePolicyRequestFormProperties>({
		});

	}


	/** The request to update an origin access identity. */
	export interface UpdateCloudFrontOriginAccessIdentityRequest {

		/** Required */
		CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
	}

	/** The request to update an origin access identity. */
	export interface UpdateCloudFrontOriginAccessIdentityRequestFormProperties {
	}
	export function CreateUpdateCloudFrontOriginAccessIdentityRequestFormGroup() {
		return new FormGroup<UpdateCloudFrontOriginAccessIdentityRequestFormProperties>({
		});

	}

	export interface UpdateContinuousDeploymentPolicyRequest {

		/** Required */
		ContinuousDeploymentPolicyConfig: ContinuousDeploymentPolicyConfig;
	}
	export interface UpdateContinuousDeploymentPolicyRequestFormProperties {
	}
	export function CreateUpdateContinuousDeploymentPolicyRequestFormGroup() {
		return new FormGroup<UpdateContinuousDeploymentPolicyRequestFormProperties>({
		});

	}


	/** The request to update a distribution. */
	export interface UpdateDistributionRequest {

		/** Required */
		DistributionConfig: DistributionConfig;
	}

	/** The request to update a distribution. */
	export interface UpdateDistributionRequestFormProperties {
	}
	export function CreateUpdateDistributionRequestFormGroup() {
		return new FormGroup<UpdateDistributionRequestFormProperties>({
		});

	}

	export interface UpdateDistributionWithStagingConfigRequest {
	}
	export interface UpdateDistributionWithStagingConfigRequestFormProperties {
	}
	export function CreateUpdateDistributionWithStagingConfigRequestFormGroup() {
		return new FormGroup<UpdateDistributionWithStagingConfigRequestFormProperties>({
		});

	}

	export interface UpdateFieldLevelEncryptionConfigRequest {

		/** Required */
		FieldLevelEncryptionConfig: FieldLevelEncryptionConfig;
	}
	export interface UpdateFieldLevelEncryptionConfigRequestFormProperties {
	}
	export function CreateUpdateFieldLevelEncryptionConfigRequestFormGroup() {
		return new FormGroup<UpdateFieldLevelEncryptionConfigRequestFormProperties>({
		});

	}

	export interface UpdateFieldLevelEncryptionProfileRequest {

		/** Required */
		FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;
	}
	export interface UpdateFieldLevelEncryptionProfileRequestFormProperties {
	}
	export function CreateUpdateFieldLevelEncryptionProfileRequestFormGroup() {
		return new FormGroup<UpdateFieldLevelEncryptionProfileRequestFormProperties>({
		});

	}

	export interface UpdateFunctionRequest {

		/** Required */
		FunctionConfig: FunctionConfig;

		/** Required */
		FunctionCode: string;
	}
	export interface UpdateFunctionRequestFormProperties {

		/** Required */
		FunctionCode: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionRequestFormGroup() {
		return new FormGroup<UpdateFunctionRequestFormProperties>({
			FunctionCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateKeyGroupRequest {

		/** Required */
		KeyGroupConfig: KeyGroupConfig;
	}
	export interface UpdateKeyGroupRequestFormProperties {
	}
	export function CreateUpdateKeyGroupRequestFormGroup() {
		return new FormGroup<UpdateKeyGroupRequestFormProperties>({
		});

	}

	export interface UpdateOriginAccessControlRequest {

		/** Required */
		OriginAccessControlConfig: OriginAccessControlConfig;
	}
	export interface UpdateOriginAccessControlRequestFormProperties {
	}
	export function CreateUpdateOriginAccessControlRequestFormGroup() {
		return new FormGroup<UpdateOriginAccessControlRequestFormProperties>({
		});

	}

	export interface UpdateOriginRequestPolicyRequest {

		/** Required */
		OriginRequestPolicyConfig: OriginRequestPolicyConfig;
	}
	export interface UpdateOriginRequestPolicyRequestFormProperties {
	}
	export function CreateUpdateOriginRequestPolicyRequestFormGroup() {
		return new FormGroup<UpdateOriginRequestPolicyRequestFormProperties>({
		});

	}

	export interface UpdatePublicKeyRequest {

		/** Required */
		PublicKeyConfig: PublicKeyConfig;
	}
	export interface UpdatePublicKeyRequestFormProperties {
	}
	export function CreateUpdatePublicKeyRequestFormGroup() {
		return new FormGroup<UpdatePublicKeyRequestFormProperties>({
		});

	}

	export interface UpdateRealtimeLogConfigRequest {
		EndPoints?: Array<EndPoint>;
		Fields?: Array<string>;
		Name?: string;
		ARN?: string;
		SamplingRate?: number | null;
	}
	export interface UpdateRealtimeLogConfigRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		ARN: FormControl<string | null | undefined>,
		SamplingRate: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRealtimeLogConfigRequestFormGroup() {
		return new FormGroup<UpdateRealtimeLogConfigRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
			SamplingRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateResponseHeadersPolicyRequest {

		/** Required */
		ResponseHeadersPolicyConfig: ResponseHeadersPolicyConfig;
	}
	export interface UpdateResponseHeadersPolicyRequestFormProperties {
	}
	export function CreateUpdateResponseHeadersPolicyRequestFormGroup() {
		return new FormGroup<UpdateResponseHeadersPolicyRequestFormProperties>({
		});

	}


	/** The request to update a streaming distribution. */
	export interface UpdateStreamingDistributionRequest {

		/** Required */
		StreamingDistributionConfig: StreamingDistributionConfig;
	}

	/** The request to update a streaming distribution. */
	export interface UpdateStreamingDistributionRequestFormProperties {
	}
	export function CreateUpdateStreamingDistributionRequestFormGroup() {
		return new FormGroup<UpdateStreamingDistributionRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates an alias (also known as a CNAME or an alternate domain name) with a CloudFront distribution.</p> <p>With this operation you can move an alias that's already in use on a CloudFront distribution to a different distribution in one step. This prevents the downtime that could occur if you first remove the alias from one distribution and then separately add the alias to another distribution.</p> <p>To use this operation to associate an alias with a distribution, you provide the alias and the ID of the target distribution for the alias. For more information, including how to set up the target distribution, prerequisites that you must complete, and other restrictions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
		 * Put 2020-05-31/distribution/{TargetDistributionId}/associate-alias#Alias
		 * @param {string} TargetDistributionId The ID of the distribution that you're associating the alias with.
		 * @param {string} Alias The alias (also known as a CNAME) to add to the target distribution.
		 * @return {void} Success
		 */
		AssociateAlias2020_05_31(TargetDistributionId: string, Alias: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '2020-05-31/distribution/' + (TargetDistributionId == null ? '' : encodeURIComponent(TargetDistributionId)) + '/associate-alias#Alias&Alias=' + (Alias == null ? '' : encodeURIComponent(Alias)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of cache policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
		 * Get 2020-05-31/cache-policy
		 * @param {CachePolicyType} Type <p>A filter to return only the specified kinds of cache policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Returns only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Returns only the custom policies created in your Amazon Web Services account.</p> </li> </ul>
		 * @param {string} Marker Use this field when paginating results to indicate where to begin in your list of cache policies. The response includes cache policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
		 * @param {string} MaxItems The maximum number of cache policies that you want in the response.
		 * @return {void} Success
		 */
		ListCachePolicies2020_05_31(Type: CachePolicyType | null | undefined, Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/cache-policy?Type=' + Type + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists origin access identities.
		 * Get 2020-05-31/origin-access-identity/cloudfront
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last identity on that page).
		 * @param {string} MaxItems The maximum number of origin access identities you want in the response body.
		 * @return {void} Success
		 */
		ListCloudFrontOriginAccessIdentities2020_05_31(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/origin-access-identity/cloudfront?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of the continuous deployment policies in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
		 * Get 2020-05-31/continuous-deployment-policy
		 * @param {string} Marker Use this field when paginating results to indicate where to begin in your list of continuous deployment policies. The response includes policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
		 * @param {string} MaxItems The maximum number of continuous deployment policies that you want returned in the response.
		 * @return {void} Success
		 */
		ListContinuousDeploymentPolicies2020_05_31(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/continuous-deployment-policy?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List CloudFront distributions.
		 * Get 2020-05-31/distribution
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of distributions. The results include distributions in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last distribution on that page).
		 * @param {string} MaxItems The maximum number of distributions you want in the response body.
		 * @return {void} Success
		 */
		ListDistributions2020_05_31(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/distribution?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all field-level encryption configurations that have been created in CloudFront for this account.
		 * Get 2020-05-31/field-level-encryption
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last configuration on that page).
		 * @param {string} MaxItems The maximum number of field-level encryption configurations you want in the response body.
		 * @return {void} Success
		 */
		ListFieldLevelEncryptionConfigs2020_05_31(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/field-level-encryption?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request a list of field-level encryption profiles that have been created in CloudFront for this account.
		 * Get 2020-05-31/field-level-encryption-profile
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of profiles. The results include profiles in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last profile on that page).
		 * @param {string} MaxItems The maximum number of field-level encryption profiles you want in the response body. 
		 * @return {void} Success
		 */
		ListFieldLevelEncryptionProfiles2020_05_31(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/field-level-encryption-profile?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of all CloudFront functions in your Amazon Web Services account.</p> <p>You can optionally apply a filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
		 * Get 2020-05-31/function
		 * @param {string} Marker Use this field when paginating results to indicate where to begin in your list of functions. The response includes functions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
		 * @param {string} MaxItems The maximum number of functions that you want in the response.
		 * @param {FunctionStage} Stage An optional filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
		 * @return {void} Success
		 */
		ListFunctions2020_05_31(Marker: string | null | undefined, MaxItems: string | null | undefined, Stage: FunctionStage | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/function?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&Stage=' + Stage, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists invalidation batches.
		 * Get 2020-05-31/distribution/{DistributionId}/invalidation
		 * @param {string} DistributionId The distribution's ID.
		 * @param {string} Marker Use this parameter when paginating results to indicate where to begin in your list of invalidation batches. Because the results are returned in decreasing order from most recent to oldest, the most recent results are on the first page, the second page will contain earlier results, and so on. To get the next page of results, set <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response. This value is the same as the ID of the last invalidation batch on that page.
		 * @param {string} MaxItems The maximum number of invalidation batches that you want in the response body.
		 * @return {void} Success
		 */
		ListInvalidations2020_05_31(DistributionId: string, Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/distribution/' + (DistributionId == null ? '' : encodeURIComponent(DistributionId)) + '/invalidation&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of key groups.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
		 * Get 2020-05-31/key-group
		 * @param {string} Marker Use this field when paginating results to indicate where to begin in your list of key groups. The response includes key groups in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
		 * @param {string} MaxItems The maximum number of key groups that you want in the response.
		 * @return {void} Success
		 */
		ListKeyGroups2020_05_31(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/key-group?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables additional CloudWatch metrics for the specified CloudFront distribution.
		 * Delete 2020-05-31/distributions/{DistributionId}/monitoring-subscription/
		 * @param {string} DistributionId The ID of the distribution that you are disabling metrics for.
		 * @return {void} Success
		 */
		DeleteMonitoringSubscription2020_05_31(DistributionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-05-31/distributions/' + (DistributionId == null ? '' : encodeURIComponent(DistributionId)) + '/monitoring-subscription/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about whether additional CloudWatch metrics are enabled for the specified CloudFront distribution.
		 * Get 2020-05-31/distributions/{DistributionId}/monitoring-subscription/
		 * @param {string} DistributionId The ID of the distribution that you are getting metrics information for.
		 * @return {void} Success
		 */
		GetMonitoringSubscription2020_05_31(DistributionId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/distributions/' + (DistributionId == null ? '' : encodeURIComponent(DistributionId)) + '/monitoring-subscription/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the list of CloudFront origin access controls in this Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send another request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the next request.</p>
		 * Get 2020-05-31/origin-access-control
		 * @param {string} Marker Use this field when paginating results to indicate where to begin in your list of origin access controls. The response includes the items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
		 * @param {string} MaxItems The maximum number of origin access controls that you want in the response.
		 * @return {void} Success
		 */
		ListOriginAccessControls2020_05_31(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/origin-access-control?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of origin request policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
		 * Get 2020-05-31/origin-request-policy
		 * @param {CachePolicyType} Type <p>A filter to return only the specified kinds of origin request policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Returns only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Returns only the custom policies created in your Amazon Web Services account.</p> </li> </ul>
		 * @param {string} Marker Use this field when paginating results to indicate where to begin in your list of origin request policies. The response includes origin request policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
		 * @param {string} MaxItems The maximum number of origin request policies that you want in the response.
		 * @return {void} Success
		 */
		ListOriginRequestPolicies2020_05_31(Type: CachePolicyType | null | undefined, Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/origin-request-policy?Type=' + Type + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all public keys that have been added to CloudFront for this account.
		 * Get 2020-05-31/public-key
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of public keys. The results include public keys in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last public key on that page).
		 * @param {string} MaxItems The maximum number of public keys you want in the response body.
		 * @return {void} Success
		 */
		ListPublicKeys2020_05_31(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/public-key?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of real-time log configurations.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
		 * Get 2020-05-31/realtime-log-config
		 * @param {string} MaxItems The maximum number of real-time log configurations that you want in the response.
		 * @param {string} Marker Use this field when paginating results to indicate where to begin in your list of real-time log configurations. The response includes real-time log configurations in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
		 * @return {void} Success
		 */
		ListRealtimeLogConfigs2020_05_31(MaxItems: string | null | undefined, Marker: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/realtime-log-config?MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of response headers policies.</p> <p>You can optionally apply a filter to get only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
		 * Get 2020-05-31/response-headers-policy
		 * @param {CachePolicyType} Type <p>A filter to get only the specified kind of response headers policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Gets only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Gets only the custom policies created in your Amazon Web Services account.</p> </li> </ul>
		 * @param {string} Marker Use this field when paginating results to indicate where to begin in your list of response headers policies. The response includes response headers policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
		 * @param {string} MaxItems The maximum number of response headers policies that you want to get in the response.
		 * @return {void} Success
		 */
		ListResponseHeadersPolicies2020_05_31(Type: CachePolicyType | null | undefined, Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/response-headers-policy?Type=' + Type + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List streaming distributions.
		 * Get 2020-05-31/streaming-distribution
		 * @param {string} Marker The value that you provided for the <code>Marker</code> request parameter.
		 * @param {string} MaxItems The value that you provided for the <code>MaxItems</code> request parameter.
		 * @return {void} Success
		 */
		ListStreamingDistributions2020_05_31(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/streaming-distribution?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a cache policy.</p> <p>You cannot delete a cache policy if it's attached to a cache behavior. First update your distributions to remove the cache policy from all cache behaviors, then delete the cache policy.</p> <p>To delete a cache policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListCachePolicies</code> or <code>GetCachePolicy</code>.</p>
		 * Delete 2020-05-31/cache-policy/{Id}
		 * @param {string} Id The unique identifier for the cache policy that you are deleting. To get the identifier, you can use <code>ListCachePolicies</code>.
		 * @return {void} 
		 */
		DeleteCachePolicy2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-05-31/cache-policy/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a cache policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get a cache policy, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>
		 * Get 2020-05-31/cache-policy/{Id}
		 * @param {string} Id The unique identifier for the cache policy. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.
		 * @return {void} Success
		 */
		GetCachePolicy2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/cache-policy/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an origin access identity.
		 * Delete 2020-05-31/origin-access-identity/cloudfront/{Id}
		 * @param {string} Id The origin access identity's ID.
		 * @return {void} 
		 */
		DeleteCloudFrontOriginAccessIdentity2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-05-31/origin-access-identity/cloudfront/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the information about an origin access identity.
		 * Get 2020-05-31/origin-access-identity/cloudfront/{Id}
		 * @param {string} Id The identity's ID.
		 * @return {void} Success
		 */
		GetCloudFrontOriginAccessIdentity2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/origin-access-identity/cloudfront/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a continuous deployment policy.</p> <p>You cannot delete a continuous deployment policy that's attached to a primary distribution. First update your distribution to remove the continuous deployment policy, then you can delete the policy.</p>
		 * Delete 2020-05-31/continuous-deployment-policy/{Id}
		 * @param {string} Id The identifier of the continuous deployment policy that you are deleting.
		 * @return {void} 
		 */
		DeleteContinuousDeploymentPolicy2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-05-31/continuous-deployment-policy/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a continuous deployment policy, including metadata (the policy's identifier and the date and time when the policy was last modified).
		 * Get 2020-05-31/continuous-deployment-policy/{Id}
		 * @param {string} Id The identifier of the continuous deployment policy that you are getting.
		 * @return {void} Success
		 */
		GetContinuousDeploymentPolicy2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/continuous-deployment-policy/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a distribution.
		 * Delete 2020-05-31/distribution/{Id}
		 * @param {string} Id The distribution ID.
		 * @return {void} 
		 */
		DeleteDistribution2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-05-31/distribution/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the information about a distribution.
		 * Get 2020-05-31/distribution/{Id}
		 * @param {string} Id The distribution's ID. If the ID is empty, an empty distribution configuration is returned.
		 * @return {void} Success
		 */
		GetDistribution2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/distribution/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a field-level encryption configuration.
		 * Delete 2020-05-31/field-level-encryption/{Id}
		 * @param {string} Id The ID of the configuration you want to delete from CloudFront.
		 * @return {void} 
		 */
		DeleteFieldLevelEncryptionConfig2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-05-31/field-level-encryption/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the field-level encryption configuration information.
		 * Get 2020-05-31/field-level-encryption/{Id}
		 * @param {string} Id Request the ID for the field-level encryption configuration information.
		 * @return {void} Success
		 */
		GetFieldLevelEncryption2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/field-level-encryption/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a field-level encryption profile.
		 * Delete 2020-05-31/field-level-encryption-profile/{Id}
		 * @param {string} Id Request the ID of the profile you want to delete from CloudFront.
		 * @return {void} 
		 */
		DeleteFieldLevelEncryptionProfile2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-05-31/field-level-encryption-profile/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the field-level encryption profile information.
		 * Get 2020-05-31/field-level-encryption-profile/{Id}
		 * @param {string} Id Get the ID for the field-level encryption profile information.
		 * @return {void} Success
		 */
		GetFieldLevelEncryptionProfile2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/field-level-encryption-profile/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a CloudFront function.</p> <p>You cannot delete a function if it's associated with a cache behavior. First, update your distributions to remove the function association from all cache behaviors, then delete the function.</p> <p>To delete a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
		 * Delete 2020-05-31/function/{Name}#If-Match
		 * @param {string} Name The name of the function that you are deleting.
		 * @return {void} 
		 */
		DeleteFunction2020_05_31(Name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-05-31/function/' + (Name == null ? '' : encodeURIComponent(Name)) + '#If-Match', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a key group.</p> <p>You cannot delete a key group that is referenced in a cache behavior. First update your distributions to remove the key group from all cache behaviors, then delete the key group.</p> <p>To delete a key group, you must provide the key group's identifier and version. To get these values, use <code>ListKeyGroups</code> followed by <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p>
		 * Delete 2020-05-31/key-group/{Id}
		 * @param {string} Id The identifier of the key group that you are deleting. To get the identifier, use <code>ListKeyGroups</code>.
		 * @return {void} 
		 */
		DeleteKeyGroup2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-05-31/key-group/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a key group, including the date and time when the key group was last modified.</p> <p>To get a key group, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>
		 * Get 2020-05-31/key-group/{Id}
		 * @param {string} Id The identifier of the key group that you are getting. To get the identifier, use <code>ListKeyGroups</code>.
		 * @return {void} Success
		 */
		GetKeyGroup2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/key-group/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a CloudFront origin access control.</p> <p>You cannot delete an origin access control if it's in use. First, update all distributions to remove the origin access control from all origins, then delete the origin access control.</p>
		 * Delete 2020-05-31/origin-access-control/{Id}
		 * @param {string} Id The unique identifier of the origin access control that you are deleting.
		 * @return {void} 
		 */
		DeleteOriginAccessControl2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-05-31/origin-access-control/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a CloudFront origin access control, including its unique identifier.
		 * Get 2020-05-31/origin-access-control/{Id}
		 * @param {string} Id The unique identifier of the origin access control.
		 * @return {void} Success
		 */
		GetOriginAccessControl2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/origin-access-control/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes an origin request policy.</p> <p>You cannot delete an origin request policy if it's attached to any cache behaviors. First update your distributions to remove the origin request policy from all cache behaviors, then delete the origin request policy.</p> <p>To delete an origin request policy, you must provide the policy's identifier and version. To get the identifier, you can use <code>ListOriginRequestPolicies</code> or <code>GetOriginRequestPolicy</code>.</p>
		 * Delete 2020-05-31/origin-request-policy/{Id}
		 * @param {string} Id The unique identifier for the origin request policy that you are deleting. To get the identifier, you can use <code>ListOriginRequestPolicies</code>.
		 * @return {void} 
		 */
		DeleteOriginRequestPolicy2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-05-31/origin-request-policy/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets an origin request policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get an origin request policy, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>
		 * Get 2020-05-31/origin-request-policy/{Id}
		 * @param {string} Id The unique identifier for the origin request policy. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.
		 * @return {void} Success
		 */
		GetOriginRequestPolicy2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/origin-request-policy/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a public key you previously added to CloudFront.
		 * Delete 2020-05-31/public-key/{Id}
		 * @param {string} Id The ID of the public key you want to remove from CloudFront.
		 * @return {void} 
		 */
		DeletePublicKey2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-05-31/public-key/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a public key.
		 * Get 2020-05-31/public-key/{Id}
		 * @param {string} Id The identifier of the public key you are getting.
		 * @return {void} Success
		 */
		GetPublicKey2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/public-key/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a response headers policy.</p> <p>You cannot delete a response headers policy if it's attached to a cache behavior. First update your distributions to remove the response headers policy from all cache behaviors, then delete the response headers policy.</p> <p>To delete a response headers policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListResponseHeadersPolicies</code> or <code>GetResponseHeadersPolicy</code>.</p>
		 * Delete 2020-05-31/response-headers-policy/{Id}
		 * @param {string} Id <p>The identifier for the response headers policy that you are deleting.</p> <p>To get the identifier, you can use <code>ListResponseHeadersPolicies</code>.</p>
		 * @return {void} 
		 */
		DeleteResponseHeadersPolicy2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-05-31/response-headers-policy/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a response headers policy, including metadata (the policy's identifier and the date and time when the policy was last modified).</p> <p>To get a response headers policy, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
		 * Get 2020-05-31/response-headers-policy/{Id}
		 * @param {string} Id <p>The identifier for the response headers policy.</p> <p>If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
		 * @return {void} Success
		 */
		GetResponseHeadersPolicy2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/response-headers-policy/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
		 * Delete 2020-05-31/streaming-distribution/{Id}
		 * @param {string} Id The distribution ID.
		 * @return {void} 
		 */
		DeleteStreamingDistribution2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2020-05-31/streaming-distribution/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a specified RTMP distribution, including the distribution configuration.
		 * Get 2020-05-31/streaming-distribution/{Id}
		 * @param {string} Id The streaming distribution's ID.
		 * @return {void} Success
		 */
		GetStreamingDistribution2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/streaming-distribution/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets configuration information and metadata about a CloudFront function, but not the function's code. To get a function's code, use <code>GetFunction</code>.</p> <p>To get configuration information and metadata about a function, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>
		 * Get 2020-05-31/function/{Name}/describe
		 * @param {string} Name The name of the function that you are getting information about.
		 * @param {FunctionStage} Stage The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
		 * @return {void} Success
		 */
		DescribeFunction2020_05_31(Name: string, Stage: FunctionStage | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/function/' + (Name == null ? '' : encodeURIComponent(Name)) + '/describe&Stage=' + Stage, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a cache policy configuration.</p> <p>To get a cache policy configuration, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>
		 * Get 2020-05-31/cache-policy/{Id}/config
		 * @param {string} Id The unique identifier for the cache policy. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.
		 * @return {void} Success
		 */
		GetCachePolicyConfig2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/cache-policy/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the configuration information about an origin access identity.
		 * Get 2020-05-31/origin-access-identity/cloudfront/{Id}/config
		 * @param {string} Id The identity's ID.
		 * @return {void} Success
		 */
		GetCloudFrontOriginAccessIdentityConfig2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/origin-access-identity/cloudfront/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets configuration information about a continuous deployment policy.
		 * Get 2020-05-31/continuous-deployment-policy/{Id}/config
		 * @param {string} Id The identifier of the continuous deployment policy whose configuration you are getting.
		 * @return {void} Success
		 */
		GetContinuousDeploymentPolicyConfig2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/continuous-deployment-policy/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the configuration information about a distribution.
		 * Get 2020-05-31/distribution/{Id}/config
		 * @param {string} Id The distribution's ID. If the ID is empty, an empty distribution configuration is returned.
		 * @return {void} Success
		 */
		GetDistributionConfig2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/distribution/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the field-level encryption configuration information.
		 * Get 2020-05-31/field-level-encryption/{Id}/config
		 * @param {string} Id Request the ID for the field-level encryption configuration information.
		 * @return {void} Success
		 */
		GetFieldLevelEncryptionConfig2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/field-level-encryption/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the field-level encryption profile configuration information.
		 * Get 2020-05-31/field-level-encryption-profile/{Id}/config
		 * @param {string} Id Get the ID for the field-level encryption profile configuration information.
		 * @return {void} Success
		 */
		GetFieldLevelEncryptionProfileConfig2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/field-level-encryption-profile/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the code of a CloudFront function. To get configuration information and metadata about a function, use <code>DescribeFunction</code>.</p> <p>To get a function's code, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>
		 * Get 2020-05-31/function/{Name}
		 * @param {string} Name The name of the function whose code you are getting.
		 * @param {FunctionStage} Stage The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
		 * @return {void} Success
		 */
		GetFunction2020_05_31(Name: string, Stage: FunctionStage | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/function/' + (Name == null ? '' : encodeURIComponent(Name)) + '&Stage=' + Stage, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the information about an invalidation.
		 * Get 2020-05-31/distribution/{DistributionId}/invalidation/{Id}
		 * @param {string} DistributionId The distribution's ID.
		 * @param {string} Id The identifier for the invalidation request, for example, <code>IDFDVBD632BHDS5</code>.
		 * @return {void} Success
		 */
		GetInvalidation2020_05_31(DistributionId: string, Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/distribution/' + (DistributionId == null ? '' : encodeURIComponent(DistributionId)) + '/invalidation/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a key group configuration.</p> <p>To get a key group configuration, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>
		 * Get 2020-05-31/key-group/{Id}/config
		 * @param {string} Id The identifier of the key group whose configuration you are getting. To get the identifier, use <code>ListKeyGroups</code>.
		 * @return {void} Success
		 */
		GetKeyGroupConfig2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/key-group/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a CloudFront origin access control configuration.
		 * Get 2020-05-31/origin-access-control/{Id}/config
		 * @param {string} Id The unique identifier of the origin access control.
		 * @return {void} Success
		 */
		GetOriginAccessControlConfig2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/origin-access-control/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets an origin request policy configuration.</p> <p>To get an origin request policy configuration, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>
		 * Get 2020-05-31/origin-request-policy/{Id}/config
		 * @param {string} Id The unique identifier for the origin request policy. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.
		 * @return {void} Success
		 */
		GetOriginRequestPolicyConfig2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/origin-request-policy/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a public key configuration.
		 * Get 2020-05-31/public-key/{Id}/config
		 * @param {string} Id The identifier of the public key whose configuration you are getting.
		 * @return {void} Success
		 */
		GetPublicKeyConfig2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/public-key/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a response headers policy configuration.</p> <p>To get a response headers policy configuration, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
		 * Get 2020-05-31/response-headers-policy/{Id}/config
		 * @param {string} Id <p>The identifier for the response headers policy.</p> <p>If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
		 * @return {void} Success
		 */
		GetResponseHeadersPolicyConfig2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/response-headers-policy/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the configuration information about a streaming distribution.
		 * Get 2020-05-31/streaming-distribution/{Id}/config
		 * @param {string} Id The streaming distribution's ID.
		 * @return {void} Success
		 */
		GetStreamingDistributionConfig2020_05_31(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/streaming-distribution/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of aliases (also called CNAMEs or alternate domain names) that conflict or overlap with the provided alias, and the associated CloudFront distributions and Amazon Web Services accounts for each conflicting alias. In the returned list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own.</p> <p>Use this operation to find aliases that are in use in CloudFront that conflict or overlap with the provided alias. For example, if you provide <code>www.example.com</code> as input, the returned list can include <code>www.example.com</code> and the overlapping wildcard alternate domain name (<code>*.example.com</code>), if they exist. If you provide <code>*.example.com</code> as input, the returned list can include <code>*.example.com</code> and any alternate domain names covered by that wildcard (for example, <code>www.example.com</code>, <code>test.example.com</code>, <code>dev.example.com</code>, and so on), if they exist.</p> <p>To list conflicting aliases, you provide the alias to search and the ID of a distribution in your account that has an attached SSL/TLS certificate that includes the provided alias. For more information, including how to set up the distribution and certificate, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
		 * Get 2020-05-31/conflicting-alias#DistributionId&Alias
		 * @param {string} DistributionId The ID of a distribution in your account that has an attached SSL/TLS certificate that includes the provided alias.
		 * @param {string} Alias The alias (also called a CNAME) to search for conflicting aliases.
		 * @param {string} Marker Use this field when paginating results to indicate where to begin in the list of conflicting aliases. The response includes conflicting aliases in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
		 * @param {number} MaxItems The maximum number of conflicting aliases that you want in the response.
		 * @return {void} Success
		 */
		ListConflictingAliases2020_05_31(DistributionId: string, Alias: string, Marker: string | null | undefined, MaxItems: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/conflicting-alias#DistributionId&Alias?DistributionId=' + (DistributionId == null ? '' : encodeURIComponent(DistributionId)) + '&Alias=' + (Alias == null ? '' : encodeURIComponent(Alias)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + MaxItems, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
		 * Get 2020-05-31/distributionsByCachePolicyId/{CachePolicyId}
		 * @param {string} Marker Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
		 * @param {string} MaxItems The maximum number of distribution IDs that you want in the response.
		 * @param {string} CachePolicyId The ID of the cache policy whose associated distribution IDs you want to list.
		 * @return {void} Success
		 */
		ListDistributionsByCachePolicyId2020_05_31(Marker: string | null | undefined, MaxItems: string | null | undefined, CachePolicyId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/distributionsByCachePolicyId/' + (CachePolicyId == null ? '' : encodeURIComponent(CachePolicyId)) + '?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that references the specified key group.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
		 * Get 2020-05-31/distributionsByKeyGroupId/{KeyGroupId}
		 * @param {string} Marker Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
		 * @param {string} MaxItems The maximum number of distribution IDs that you want in the response.
		 * @param {string} KeyGroupId The ID of the key group whose associated distribution IDs you are listing.
		 * @return {void} Success
		 */
		ListDistributionsByKeyGroup2020_05_31(Marker: string | null | undefined, MaxItems: string | null | undefined, KeyGroupId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/distributionsByKeyGroupId/' + (KeyGroupId == null ? '' : encodeURIComponent(KeyGroupId)) + '?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
		 * Get 2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}
		 * @param {string} Marker Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
		 * @param {string} MaxItems The maximum number of distribution IDs that you want in the response.
		 * @param {string} OriginRequestPolicyId The ID of the origin request policy whose associated distribution IDs you want to list.
		 * @return {void} Success
		 */
		ListDistributionsByOriginRequestPolicyId2020_05_31(Marker: string | null | undefined, MaxItems: string | null | undefined, OriginRequestPolicyId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/distributionsByOriginRequestPolicyId/' + (OriginRequestPolicyId == null ? '' : encodeURIComponent(OriginRequestPolicyId)) + '?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified response headers policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
		 * Get 2020-05-31/distributionsByResponseHeadersPolicyId/{ResponseHeadersPolicyId}
		 * @param {string} Marker Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
		 * @param {string} MaxItems The maximum number of distribution IDs that you want to get in the response.
		 * @param {string} ResponseHeadersPolicyId The ID of the response headers policy whose associated distribution IDs you want to list.
		 * @return {void} Success
		 */
		ListDistributionsByResponseHeadersPolicyId2020_05_31(Marker: string | null | undefined, MaxItems: string | null | undefined, ResponseHeadersPolicyId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/distributionsByResponseHeadersPolicyId/' + (ResponseHeadersPolicyId == null ? '' : encodeURIComponent(ResponseHeadersPolicyId)) + '?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List the distributions that are associated with a specified WAF web ACL.
		 * Get 2020-05-31/distributionsByWebACLId/{WebACLId}
		 * @param {string} Marker Use <code>Marker</code> and <code>MaxItems</code> to control pagination of results. If you have more than <code>MaxItems</code> distributions that satisfy the request, the response includes a <code>NextMarker</code> element. To get the next page of results, submit another request. For the value of <code>Marker</code>, specify the value of <code>NextMarker</code> from the last response. (For the first request, omit <code>Marker</code>.)
		 * @param {string} MaxItems The maximum number of distributions that you want CloudFront to return in the response body. The maximum and default values are both 100.
		 * @param {string} WebACLId The ID of the WAF web ACL that you want to list the associated distributions. If you specify "null" for the ID, the request returns a list of the distributions that aren't associated with a web ACL.
		 * @return {void} Success
		 */
		ListDistributionsByWebACLId2020_05_31(Marker: string | null | undefined, MaxItems: string | null | undefined, WebACLId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/distributionsByWebACLId/' + (WebACLId == null ? '' : encodeURIComponent(WebACLId)) + '?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List tags for a CloudFront resource.
		 * Get 2020-05-31/tagging#Resource
		 * @param {string} Resource An ARN of a CloudFront resource.
		 * @return {void} Success
		 */
		ListTagsForResource2020_05_31(Resource: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2020-05-31/tagging#Resource?Resource=' + (Resource == null ? '' : encodeURIComponent(Resource)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Publishes a CloudFront function by copying the function code from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. This automatically updates all cache behaviors that are using this function to use the newly published copy in the <code>LIVE</code> stage.</p> <p>When a function is published to the <code>LIVE</code> stage, you can attach the function to a distribution's cache behavior, using the function's Amazon Resource Name (ARN).</p> <p>To publish a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
		 * Post 2020-05-31/function/{Name}/publish#If-Match
		 * @param {string} Name The name of the function that you are publishing.
		 * @return {void} Success
		 */
		PublishFunction2020_05_31(Name: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2020-05-31/function/' + (Name == null ? '' : encodeURIComponent(Name)) + '/publish#If-Match', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Copies the staging distribution's configuration to its corresponding primary distribution. The primary distribution retains its <code>Aliases</code> (also known as alternate domain names or CNAMEs) and <code>ContinuousDeploymentPolicyId</code> value, but otherwise its configuration is overwritten to match the staging distribution.</p> <p>You can use this operation in a continuous deployment workflow after you have tested configuration changes on the staging distribution. After using a continuous deployment policy to move a portion of your domain name's traffic to the staging distribution and verifying that it works as intended, you can use this operation to copy the staging distribution's configuration to the primary distribution. This action will disable the continuous deployment policy and move your domain's traffic back to the primary distribution.</p> <p>This API operation requires the following IAM permissions:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html">GetDistribution</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a> </p> </li> </ul>
		 * Put 2020-05-31/distribution/{Id}/promote-staging-config
		 * @param {string} Id The identifier of the primary distribution to which you are copying a staging distribution's configuration.
		 * @param {string} StagingDistributionId The identifier of the staging distribution whose configuration you are copying to the primary distribution.
		 * @return {void} Success
		 */
		UpdateDistributionWithStagingConfig2020_05_31(Id: string, StagingDistributionId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '2020-05-31/distribution/' + (Id == null ? '' : encodeURIComponent(Id)) + '/promote-staging-config&StagingDistributionId=' + (StagingDistributionId == null ? '' : encodeURIComponent(StagingDistributionId)), null, { observe: 'response', responseType: 'text' });
		}
	}

	export enum TagResource2020_05_31Operation { Tag = 'Tag' }

	export enum UntagResource2020_05_31Operation { Untag = 'Untag' }

}

