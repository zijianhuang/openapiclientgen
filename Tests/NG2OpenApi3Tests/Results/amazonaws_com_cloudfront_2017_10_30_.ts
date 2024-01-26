import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/** Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.  */
	export interface CloudFrontOriginAccessIdentityConfig {

		/** Required */
		CallerReference: string;

		/** Required */
		Comment: string;
	}

	/** Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.  */
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


	/** If the <code>CallerReference</code> is a value you already sent in a previous request to create an identity but the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error.  */
	export interface CloudFrontOriginAccessIdentityAlreadyExists {
		Message?: string | null;
	}

	/** If the <code>CallerReference</code> is a value you already sent in a previous request to create an identity but the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error.  */
	export interface CloudFrontOriginAccessIdentityAlreadyExistsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateCloudFrontOriginAccessIdentityAlreadyExistsFormGroup() {
		return new FormGroup<CloudFrontOriginAccessIdentityAlreadyExistsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set. */
	export interface MissingBody {
		Message?: string | null;
	}

	/** This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set. */
	export interface MissingBodyFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateMissingBodyFormGroup() {
		return new FormGroup<MissingBodyFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Processing your request would cause you to exceed the maximum number of origin access identities allowed. */
	export interface TooManyCloudFrontOriginAccessIdentities {
		Message?: string | null;
	}

	/** Processing your request would cause you to exceed the maximum number of origin access identities allowed. */
	export interface TooManyCloudFrontOriginAccessIdentitiesFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyCloudFrontOriginAccessIdentitiesFormGroup() {
		return new FormGroup<TooManyCloudFrontOriginAccessIdentitiesFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The argument is invalid. */
	export interface InvalidArgument {
		Message?: string | null;
	}

	/** The argument is invalid. */
	export interface InvalidArgumentFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidArgumentFormGroup() {
		return new FormGroup<InvalidArgumentFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The value of <code>Quantity</code> and the size of <code>Items</code> don't match. */
	export interface InconsistentQuantities {
		Message?: string | null;
	}

	/** The value of <code>Quantity</code> and the size of <code>Items</code> don't match. */
	export interface InconsistentQuantitiesFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInconsistentQuantitiesFormGroup() {
		return new FormGroup<InconsistentQuantitiesFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
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


	/** The distribution's information. */
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

		/** Required */
		ActiveTrustedSigners: ActiveTrustedSigners;

		/** Required */
		DistributionConfig: DistributionConfig;
	}

	/** The distribution's information. */
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


	/** <p>A complex type that lists the AWS accounts, if any, that you included in the <code>TrustedSigners</code> complex type for this distribution. These are the accounts that you want to allow to create signed URLs for private content.</p> <p>The <code>Signer</code> complex type lists the AWS account number of the trusted signer or <code>self</code> if the signer is the AWS account that created the distribution. The <code>Signer</code> element also includes the IDs of any active CloudFront key pairs that are associated with the trusted signer's AWS account. If no <code>KeyPairId</code> element appears for a <code>Signer</code>, that signer can't create signed URLs. </p> <p>For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface ActiveTrustedSigners {

		/** Required */
		Enabled: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** <p>A complex type that lists the AWS accounts, if any, that you included in the <code>TrustedSigners</code> complex type for this distribution. These are the accounts that you want to allow to create signed URLs for private content.</p> <p>The <code>Signer</code> complex type lists the AWS account number of the trusted signer or <code>self</code> if the signer is the AWS account that created the distribution. The <code>Signer</code> element also includes the IDs of any active CloudFront key pairs that are associated with the trusted signer's AWS account. If no <code>KeyPairId</code> element appears for a <code>Signer</code>, that signer can't create signed URLs. </p> <p>For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
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


	/** A distribution configuration. */
	export interface DistributionConfig {

		/** Required */
		CallerReference: string;
		Aliases?: Aliases;
		DefaultRootObject?: string;

		/** Required */
		Origins: Origins;

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

		/** <p>A complex type that specifies the following:</p> <ul> <li> <p>Whether you want viewers to use HTTP or HTTPS to request your objects.</p> </li> <li> <p>If you want viewers to use HTTPS, whether you're using an alternate domain name such as <code>example.com</code> or the CloudFront domain name for your distribution, such as <code>d111111abcdef8.cloudfront.net</code>.</p> </li> <li> <p>If you're using an alternate domain name, whether AWS Certificate Manager (ACM) provided the certificate, or you purchased a certificate from a third-party certificate authority and imported it into ACM or uploaded it to the IAM certificate store.</p> </li> </ul> <p>You must specify only one of the following values: </p> <ul> <li> <p> <a>ViewerCertificate$ACMCertificateArn</a> </p> </li> <li> <p> <a>ViewerCertificate$IAMCertificateId</a> </p> </li> <li> <p> <a>ViewerCertificate$CloudFrontDefaultCertificate</a> </p> </li> </ul> <p>Don't specify <code>false</code> for <code>CloudFrontDefaultCertificate</code>.</p> <p> <b>If you want viewers to use HTTP instead of HTTPS to request your objects</b>: Specify the following value:</p> <p> <code>&lt;CloudFrontDefaultCertificate&gt;true&lt;CloudFrontDefaultCertificate&gt;</code> </p> <p>In addition, specify <code>allow-all</code> for <code>ViewerProtocolPolicy</code> for all of your cache behaviors.</p> <p> <b>If you want viewers to use HTTPS to request your objects</b>: Choose the type of certificate that you want to use based on whether you're using an alternate domain name for your objects or the CloudFront domain name:</p> <ul> <li> <p> <b>If you're using an alternate domain name, such as example.com</b>: Specify one of the following values, depending on whether ACM provided your certificate or you purchased your certificate from third-party certificate authority:</p> <ul> <li> <p> <code>&lt;ACMCertificateArn&gt;<i>ARN for ACM SSL/TLS certificate</i>&lt;ACMCertificateArn&gt;</code> where <code> <i>ARN for ACM SSL/TLS certificate</i> </code> is the ARN for the ACM SSL/TLS certificate that you want to use for this distribution.</p> </li> <li> <p> <code>&lt;IAMCertificateId&gt;<i>IAM certificate ID</i>&lt;IAMCertificateId&gt;</code> where <code> <i>IAM certificate ID</i> </code> is the ID that IAM returned when you added the certificate to the IAM certificate store.</p> </li> </ul> <p>If you specify <code>ACMCertificateArn</code> or <code>IAMCertificateId</code>, you must also specify a value for <code>SSLSupportMethod</code>.</p> <p>If you choose to use an ACM certificate or a certificate in the IAM certificate store, we recommend that you use only an alternate domain name in your object URLs (<code>https://example.com/logo.jpg</code>). If you use the domain name that is associated with your CloudFront distribution (such as <code>https://d111111abcdef8.cloudfront.net/logo.jpg</code>) and the viewer supports <code>SNI</code>, then CloudFront behaves normally. However, if the browser does not support SNI, the user's experience depends on the value that you choose for <code>SSLSupportMethod</code>:</p> <ul> <li> <p> <code>vip</code>: The viewer displays a warning because there is a mismatch between the CloudFront domain name and the domain name in your SSL/TLS certificate.</p> </li> <li> <p> <code>sni-only</code>: CloudFront drops the connection with the browser without returning the object.</p> </li> </ul> </li> <li> <p> <b>If you're using the CloudFront domain name for your distribution, such as <code>d111111abcdef8.cloudfront.net</code> </b>: Specify the following value:</p> <p> <code>&lt;CloudFrontDefaultCertificate&gt;true&lt;CloudFrontDefaultCertificate&gt; </code> </p> </li> </ul> <p>If you want viewers to use HTTPS, you must also specify one of the following values in your cache behaviors:</p> <ul> <li> <p> <code> &lt;ViewerProtocolPolicy&gt;https-only&lt;ViewerProtocolPolicy&gt;</code> </p> </li> <li> <p> <code>&lt;ViewerProtocolPolicy&gt;redirect-to-https&lt;ViewerProtocolPolicy&gt;</code> </p> </li> </ul> <p>You can also optionally require that CloudFront use HTTPS to communicate with your origin by specifying one of the following values for the applicable origins:</p> <ul> <li> <p> <code>&lt;OriginProtocolPolicy&gt;https-only&lt;OriginProtocolPolicy&gt; </code> </p> </li> <li> <p> <code>&lt;OriginProtocolPolicy&gt;match-viewer&lt;OriginProtocolPolicy&gt; </code> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html#CNAMEsAndHTTPS">Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
		ViewerCertificate?: ViewerCertificate;

		/** A complex type that identifies ways in which you want to restrict distribution of your content. */
		Restrictions?: Restrictions;
		WebACLId?: string;
		HttpVersion?: HttpVersion;
		IsIPV6Enabled?: boolean | null;
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
		});

	}


	/** A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.  */
	export interface Aliases {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.  */
	export interface AliasesFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateAliasesFormGroup() {
		return new FormGroup<AliasesFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that contains information about origins for this distribution.  */
	export interface Origins {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex type that contains information about origins for this distribution.  */
	export interface OriginsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateOriginsFormGroup() {
		return new FormGroup<OriginsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior. */
	export interface DefaultCacheBehavior {

		/** Required */
		TargetOriginId: string;

		/** Required */
		ForwardedValues: ForwardedValues;

		/** Required */
		TrustedSigners: TrustedSigners;

		/** Required */
		ViewerProtocolPolicy: ViewerProtocolPolicy;

		/** Required */
		MinTTL: number;

		/** <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p> */
		AllowedMethods?: AllowedMethods;
		SmoothStreaming?: boolean | null;
		DefaultTTL?: number | null;
		MaxTTL?: number | null;
		Compress?: boolean | null;
		LambdaFunctionAssociations?: LambdaFunctionAssociations;
		FieldLevelEncryptionId?: string | null;
	}

	/** A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior. */
	export interface DefaultCacheBehaviorFormProperties {

		/** Required */
		TargetOriginId: FormControl<string | null | undefined>,

		/** Required */
		ViewerProtocolPolicy: FormControl<ViewerProtocolPolicy | null | undefined>,

		/** Required */
		MinTTL: FormControl<number | null | undefined>,
		SmoothStreaming: FormControl<boolean | null | undefined>,
		DefaultTTL: FormControl<number | null | undefined>,
		MaxTTL: FormControl<number | null | undefined>,
		Compress: FormControl<boolean | null | undefined>,
		FieldLevelEncryptionId: FormControl<string | null | undefined>,
	}
	export function CreateDefaultCacheBehaviorFormGroup() {
		return new FormGroup<DefaultCacheBehaviorFormProperties>({
			TargetOriginId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ViewerProtocolPolicy: new FormControl<ViewerProtocolPolicy | null | undefined>(undefined, [Validators.required]),
			MinTTL: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SmoothStreaming: new FormControl<boolean | null | undefined>(undefined),
			DefaultTTL: new FormControl<number | null | undefined>(undefined),
			MaxTTL: new FormControl<number | null | undefined>(undefined),
			Compress: new FormControl<boolean | null | undefined>(undefined),
			FieldLevelEncryptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that specifies how CloudFront handles query strings and cookies. */
	export interface ForwardedValues {

		/** Required */
		QueryString: boolean;

		/** Required */
		Cookies: CookiePreference;
		Headers?: Headers;
		QueryStringCacheKeys?: QueryStringCacheKeys;
	}

	/** A complex type that specifies how CloudFront handles query strings and cookies. */
	export interface ForwardedValuesFormProperties {

		/** Required */
		QueryString: FormControl<boolean | null | undefined>,
	}
	export function CreateForwardedValuesFormGroup() {
		return new FormGroup<ForwardedValuesFormProperties>({
			QueryString: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">How CloudFront Forwards, Caches, and Logs Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface CookiePreference {

		/** Required */
		Forward: ItemSelection;
		WhitelistedNames?: CookieNames;
	}

	/** A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">How CloudFront Forwards, Caches, and Logs Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface CookiePreferenceFormProperties {

		/** Required */
		Forward: FormControl<ItemSelection | null | undefined>,
	}
	export function CreateCookiePreferenceFormGroup() {
		return new FormGroup<CookiePreferenceFormProperties>({
			Forward: new FormControl<ItemSelection | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ItemSelection { none = 0, whitelist = 1, all = 2 }


	/** A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">How CloudFront Forwards, Caches, and Logs Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface CookieNames {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">How CloudFront Forwards, Caches, and Logs Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface CookieNamesFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateCookieNamesFormGroup() {
		return new FormGroup<CookieNamesFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A complex type that specifies the request headers, if any, that you want CloudFront to base caching on for this cache behavior. </p> <p>For the headers that you specify, CloudFront caches separate versions of a specified object based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of either <code>acme</code> or <code>apex</code>, and you configure CloudFront to cache your content based on values in the <code>product</code> header. CloudFront forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. For more information about caching based on header values, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html">How CloudFront Forwards and Caches Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface Headers {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** <p>A complex type that specifies the request headers, if any, that you want CloudFront to base caching on for this cache behavior. </p> <p>For the headers that you specify, CloudFront caches separate versions of a specified object based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of either <code>acme</code> or <code>apex</code>, and you configure CloudFront to cache your content based on values in the <code>product</code> header. CloudFront forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. For more information about caching based on header values, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html">How CloudFront Forwards and Caches Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface HeadersFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateHeadersFormGroup() {
		return new FormGroup<HeadersFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface QueryStringCacheKeys {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}
	export interface QueryStringCacheKeysFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateQueryStringCacheKeysFormGroup() {
		return new FormGroup<QueryStringCacheKeysFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content.</p> <p>If you want to require signed URLs in requests for objects in the target origin that match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and <code>Items</code>. For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon Amazon CloudFront Developer Guide</i>.</p> <p>If you don't want to require signed URLs in requests for objects that match <code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>.</p> <p>To add, change, or remove one or more trusted signers, change <code>Enabled</code> to <code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as applicable, and specify all of the trusted signers that you want to include in the updated distribution.</p> <p>For more information about updating the distribution configuration, see <a>DistributionConfig</a> .</p> */
	export interface TrustedSigners {

		/** Required */
		Enabled: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** <p>A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content.</p> <p>If you want to require signed URLs in requests for objects in the target origin that match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and <code>Items</code>. For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon Amazon CloudFront Developer Guide</i>.</p> <p>If you don't want to require signed URLs in requests for objects that match <code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>.</p> <p>To add, change, or remove one or more trusted signers, change <code>Enabled</code> to <code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as applicable, and specify all of the trusted signers that you want to include in the updated distribution.</p> <p>For more information about updating the distribution configuration, see <a>DistributionConfig</a> .</p> */
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

	export enum ViewerProtocolPolicy { 'allow-all' = 0, 'https-only' = 1, 'redirect-to-https' = 2 }


	/** <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p> */
	export interface AllowedMethods {

		/** Required */
		Quantity: number;

		/** Required */
		Items: Array<string>;

		/** <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly. </p> */
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


	/** <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly. </p> */
	export interface CachedMethods {

		/** Required */
		Quantity: number;

		/** Required */
		Items: Array<string>;
	}

	/** <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly. </p> */
	export interface CachedMethodsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateCachedMethodsFormGroup() {
		return new FormGroup<CachedMethodsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A complex type that specifies a list of Lambda functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with the Lambda function only once.</p> <p>If you don't want to invoke any Lambda functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>. </p> */
	export interface LambdaFunctionAssociations {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** <p>A complex type that specifies a list of Lambda functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with the Lambda function only once.</p> <p>If you don't want to invoke any Lambda functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>. </p> */
	export interface LambdaFunctionAssociationsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateLambdaFunctionAssociationsFormGroup() {
		return new FormGroup<LambdaFunctionAssociationsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that contains zero or more <code>CacheBehavior</code> elements.  */
	export interface CacheBehaviors {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex type that contains zero or more <code>CacheBehavior</code> elements.  */
	export interface CacheBehaviorsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateCacheBehaviorsFormGroup() {
		return new FormGroup<CacheBehaviorsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CustomErrorResponses {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
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

	export enum PriceClass { PriceClass_100 = 0, PriceClass_200 = 1, PriceClass_All = 2 }


	/** <p>A complex type that specifies the following:</p> <ul> <li> <p>Whether you want viewers to use HTTP or HTTPS to request your objects.</p> </li> <li> <p>If you want viewers to use HTTPS, whether you're using an alternate domain name such as <code>example.com</code> or the CloudFront domain name for your distribution, such as <code>d111111abcdef8.cloudfront.net</code>.</p> </li> <li> <p>If you're using an alternate domain name, whether AWS Certificate Manager (ACM) provided the certificate, or you purchased a certificate from a third-party certificate authority and imported it into ACM or uploaded it to the IAM certificate store.</p> </li> </ul> <p>You must specify only one of the following values: </p> <ul> <li> <p> <a>ViewerCertificate$ACMCertificateArn</a> </p> </li> <li> <p> <a>ViewerCertificate$IAMCertificateId</a> </p> </li> <li> <p> <a>ViewerCertificate$CloudFrontDefaultCertificate</a> </p> </li> </ul> <p>Don't specify <code>false</code> for <code>CloudFrontDefaultCertificate</code>.</p> <p> <b>If you want viewers to use HTTP instead of HTTPS to request your objects</b>: Specify the following value:</p> <p> <code>&lt;CloudFrontDefaultCertificate&gt;true&lt;CloudFrontDefaultCertificate&gt;</code> </p> <p>In addition, specify <code>allow-all</code> for <code>ViewerProtocolPolicy</code> for all of your cache behaviors.</p> <p> <b>If you want viewers to use HTTPS to request your objects</b>: Choose the type of certificate that you want to use based on whether you're using an alternate domain name for your objects or the CloudFront domain name:</p> <ul> <li> <p> <b>If you're using an alternate domain name, such as example.com</b>: Specify one of the following values, depending on whether ACM provided your certificate or you purchased your certificate from third-party certificate authority:</p> <ul> <li> <p> <code>&lt;ACMCertificateArn&gt;<i>ARN for ACM SSL/TLS certificate</i>&lt;ACMCertificateArn&gt;</code> where <code> <i>ARN for ACM SSL/TLS certificate</i> </code> is the ARN for the ACM SSL/TLS certificate that you want to use for this distribution.</p> </li> <li> <p> <code>&lt;IAMCertificateId&gt;<i>IAM certificate ID</i>&lt;IAMCertificateId&gt;</code> where <code> <i>IAM certificate ID</i> </code> is the ID that IAM returned when you added the certificate to the IAM certificate store.</p> </li> </ul> <p>If you specify <code>ACMCertificateArn</code> or <code>IAMCertificateId</code>, you must also specify a value for <code>SSLSupportMethod</code>.</p> <p>If you choose to use an ACM certificate or a certificate in the IAM certificate store, we recommend that you use only an alternate domain name in your object URLs (<code>https://example.com/logo.jpg</code>). If you use the domain name that is associated with your CloudFront distribution (such as <code>https://d111111abcdef8.cloudfront.net/logo.jpg</code>) and the viewer supports <code>SNI</code>, then CloudFront behaves normally. However, if the browser does not support SNI, the user's experience depends on the value that you choose for <code>SSLSupportMethod</code>:</p> <ul> <li> <p> <code>vip</code>: The viewer displays a warning because there is a mismatch between the CloudFront domain name and the domain name in your SSL/TLS certificate.</p> </li> <li> <p> <code>sni-only</code>: CloudFront drops the connection with the browser without returning the object.</p> </li> </ul> </li> <li> <p> <b>If you're using the CloudFront domain name for your distribution, such as <code>d111111abcdef8.cloudfront.net</code> </b>: Specify the following value:</p> <p> <code>&lt;CloudFrontDefaultCertificate&gt;true&lt;CloudFrontDefaultCertificate&gt; </code> </p> </li> </ul> <p>If you want viewers to use HTTPS, you must also specify one of the following values in your cache behaviors:</p> <ul> <li> <p> <code> &lt;ViewerProtocolPolicy&gt;https-only&lt;ViewerProtocolPolicy&gt;</code> </p> </li> <li> <p> <code>&lt;ViewerProtocolPolicy&gt;redirect-to-https&lt;ViewerProtocolPolicy&gt;</code> </p> </li> </ul> <p>You can also optionally require that CloudFront use HTTPS to communicate with your origin by specifying one of the following values for the applicable origins:</p> <ul> <li> <p> <code>&lt;OriginProtocolPolicy&gt;https-only&lt;OriginProtocolPolicy&gt; </code> </p> </li> <li> <p> <code>&lt;OriginProtocolPolicy&gt;match-viewer&lt;OriginProtocolPolicy&gt; </code> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html#CNAMEsAndHTTPS">Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface ViewerCertificate {
		CloudFrontDefaultCertificate?: boolean | null;
		IAMCertificateId?: string;
		ACMCertificateArn?: string;
		SSLSupportMethod?: SSLSupportMethod;
		MinimumProtocolVersion?: MinimumProtocolVersion;
		Certificate?: string;
		CertificateSource?: CertificateSource;
	}

	/** <p>A complex type that specifies the following:</p> <ul> <li> <p>Whether you want viewers to use HTTP or HTTPS to request your objects.</p> </li> <li> <p>If you want viewers to use HTTPS, whether you're using an alternate domain name such as <code>example.com</code> or the CloudFront domain name for your distribution, such as <code>d111111abcdef8.cloudfront.net</code>.</p> </li> <li> <p>If you're using an alternate domain name, whether AWS Certificate Manager (ACM) provided the certificate, or you purchased a certificate from a third-party certificate authority and imported it into ACM or uploaded it to the IAM certificate store.</p> </li> </ul> <p>You must specify only one of the following values: </p> <ul> <li> <p> <a>ViewerCertificate$ACMCertificateArn</a> </p> </li> <li> <p> <a>ViewerCertificate$IAMCertificateId</a> </p> </li> <li> <p> <a>ViewerCertificate$CloudFrontDefaultCertificate</a> </p> </li> </ul> <p>Don't specify <code>false</code> for <code>CloudFrontDefaultCertificate</code>.</p> <p> <b>If you want viewers to use HTTP instead of HTTPS to request your objects</b>: Specify the following value:</p> <p> <code>&lt;CloudFrontDefaultCertificate&gt;true&lt;CloudFrontDefaultCertificate&gt;</code> </p> <p>In addition, specify <code>allow-all</code> for <code>ViewerProtocolPolicy</code> for all of your cache behaviors.</p> <p> <b>If you want viewers to use HTTPS to request your objects</b>: Choose the type of certificate that you want to use based on whether you're using an alternate domain name for your objects or the CloudFront domain name:</p> <ul> <li> <p> <b>If you're using an alternate domain name, such as example.com</b>: Specify one of the following values, depending on whether ACM provided your certificate or you purchased your certificate from third-party certificate authority:</p> <ul> <li> <p> <code>&lt;ACMCertificateArn&gt;<i>ARN for ACM SSL/TLS certificate</i>&lt;ACMCertificateArn&gt;</code> where <code> <i>ARN for ACM SSL/TLS certificate</i> </code> is the ARN for the ACM SSL/TLS certificate that you want to use for this distribution.</p> </li> <li> <p> <code>&lt;IAMCertificateId&gt;<i>IAM certificate ID</i>&lt;IAMCertificateId&gt;</code> where <code> <i>IAM certificate ID</i> </code> is the ID that IAM returned when you added the certificate to the IAM certificate store.</p> </li> </ul> <p>If you specify <code>ACMCertificateArn</code> or <code>IAMCertificateId</code>, you must also specify a value for <code>SSLSupportMethod</code>.</p> <p>If you choose to use an ACM certificate or a certificate in the IAM certificate store, we recommend that you use only an alternate domain name in your object URLs (<code>https://example.com/logo.jpg</code>). If you use the domain name that is associated with your CloudFront distribution (such as <code>https://d111111abcdef8.cloudfront.net/logo.jpg</code>) and the viewer supports <code>SNI</code>, then CloudFront behaves normally. However, if the browser does not support SNI, the user's experience depends on the value that you choose for <code>SSLSupportMethod</code>:</p> <ul> <li> <p> <code>vip</code>: The viewer displays a warning because there is a mismatch between the CloudFront domain name and the domain name in your SSL/TLS certificate.</p> </li> <li> <p> <code>sni-only</code>: CloudFront drops the connection with the browser without returning the object.</p> </li> </ul> </li> <li> <p> <b>If you're using the CloudFront domain name for your distribution, such as <code>d111111abcdef8.cloudfront.net</code> </b>: Specify the following value:</p> <p> <code>&lt;CloudFrontDefaultCertificate&gt;true&lt;CloudFrontDefaultCertificate&gt; </code> </p> </li> </ul> <p>If you want viewers to use HTTPS, you must also specify one of the following values in your cache behaviors:</p> <ul> <li> <p> <code> &lt;ViewerProtocolPolicy&gt;https-only&lt;ViewerProtocolPolicy&gt;</code> </p> </li> <li> <p> <code>&lt;ViewerProtocolPolicy&gt;redirect-to-https&lt;ViewerProtocolPolicy&gt;</code> </p> </li> </ul> <p>You can also optionally require that CloudFront use HTTPS to communicate with your origin by specifying one of the following values for the applicable origins:</p> <ul> <li> <p> <code>&lt;OriginProtocolPolicy&gt;https-only&lt;OriginProtocolPolicy&gt; </code> </p> </li> <li> <p> <code>&lt;OriginProtocolPolicy&gt;match-viewer&lt;OriginProtocolPolicy&gt; </code> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html#CNAMEsAndHTTPS">Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
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

	export enum SSLSupportMethod { 'sni-only' = 0, vip = 1 }

	export enum MinimumProtocolVersion { SSLv3 = 0, TLSv1 = 1, TLSv1_2016 = 2, 'TLSv1.1_2016' = 3, 'TLSv1.2_2018' = 4 }

	export enum CertificateSource { cloudfront = 0, iam = 1, acm = 2 }


	/** A complex type that identifies ways in which you want to restrict distribution of your content. */
	export interface Restrictions {

		/**
		 * A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.
		 * Required
		 */
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

	export enum GeoRestrictionType { blacklist = 0, whitelist = 1, none = 2 }

	export enum HttpVersion { 'http1.1' = 0, http2 = 1 }

	export interface CNAMEAlreadyExists {
		Message?: string | null;
	}
	export interface CNAMEAlreadyExistsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateCNAMEAlreadyExistsFormGroup() {
		return new FormGroup<CNAMEAlreadyExistsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The caller reference you attempted to create the distribution with is associated with another distribution. */
	export interface DistributionAlreadyExists {
		Message?: string | null;
	}

	/** The caller reference you attempted to create the distribution with is associated with another distribution. */
	export interface DistributionAlreadyExistsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDistributionAlreadyExistsFormGroup() {
		return new FormGroup<DistributionAlreadyExistsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket. */
	export interface InvalidOrigin {
		Message?: string | null;
	}

	/** The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket. */
	export interface InvalidOriginFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidOriginFormGroup() {
		return new FormGroup<InvalidOriginFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The origin access identity is not valid or doesn't exist. */
	export interface InvalidOriginAccessIdentity {
		Message?: string | null;
	}

	/** The origin access identity is not valid or doesn't exist. */
	export interface InvalidOriginAccessIdentityFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidOriginAccessIdentityFormGroup() {
		return new FormGroup<InvalidOriginAccessIdentityFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Access denied. */
	export interface AccessDenied {
		Message?: string | null;
	}

	/** Access denied. */
	export interface AccessDeniedFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateAccessDeniedFormGroup() {
		return new FormGroup<AccessDeniedFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Your request contains more trusted signers than are allowed per distribution. */
	export interface TooManyTrustedSigners {
		Message?: string | null;
	}

	/** Your request contains more trusted signers than are allowed per distribution. */
	export interface TooManyTrustedSignersFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyTrustedSignersFormGroup() {
		return new FormGroup<TooManyTrustedSignersFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One or more of your trusted signers don't exist. */
	export interface TrustedSignerDoesNotExist {
		Message?: string | null;
	}

	/** One or more of your trusted signers don't exist. */
	export interface TrustedSignerDoesNotExistFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTrustedSignerDoesNotExistFormGroup() {
		return new FormGroup<TrustedSignerDoesNotExistFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidViewerCertificate {
		Message?: string | null;
	}
	export interface InvalidViewerCertificateFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidViewerCertificateFormGroup() {
		return new FormGroup<InvalidViewerCertificateFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidMinimumProtocolVersion {
		Message?: string | null;
	}
	export interface InvalidMinimumProtocolVersionFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidMinimumProtocolVersionFormGroup() {
		return new FormGroup<InvalidMinimumProtocolVersionFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Your request contains more CNAMEs than are allowed per distribution. */
	export interface TooManyDistributionCNAMEs {
		Message?: string | null;
	}

	/** Your request contains more CNAMEs than are allowed per distribution. */
	export interface TooManyDistributionCNAMEsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyDistributionCNAMEsFormGroup() {
		return new FormGroup<TooManyDistributionCNAMEsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Processing your request would cause you to exceed the maximum number of distributions allowed. */
	export interface TooManyDistributions {
		Message?: string | null;
	}

	/** Processing your request would cause you to exceed the maximum number of distributions allowed. */
	export interface TooManyDistributionsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyDistributionsFormGroup() {
		return new FormGroup<TooManyDistributionsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The default root object file name is too big or contains an invalid character. */
	export interface InvalidDefaultRootObject {
		Message?: string | null;
	}

	/** The default root object file name is too big or contains an invalid character. */
	export interface InvalidDefaultRootObjectFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidDefaultRootObjectFormGroup() {
		return new FormGroup<InvalidDefaultRootObjectFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The relative path is too big, is not URL-encoded, or does not begin with a slash (/). */
	export interface InvalidRelativePath {
		Message?: string | null;
	}

	/** The relative path is too big, is not URL-encoded, or does not begin with a slash (/). */
	export interface InvalidRelativePathFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidRelativePathFormGroup() {
		return new FormGroup<InvalidRelativePathFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidErrorCode {
		Message?: string | null;
	}
	export interface InvalidErrorCodeFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidErrorCodeFormGroup() {
		return new FormGroup<InvalidErrorCodeFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidResponseCode {
		Message?: string | null;
	}
	export interface InvalidResponseCodeFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidResponseCodeFormGroup() {
		return new FormGroup<InvalidResponseCodeFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol in your request, or omit the <code>RequiredProtocols</code> element from your distribution configuration. */
	export interface InvalidRequiredProtocol {
		Message?: string | null;
	}

	/** This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol in your request, or omit the <code>RequiredProtocols</code> element from your distribution configuration. */
	export interface InvalidRequiredProtocolFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidRequiredProtocolFormGroup() {
		return new FormGroup<InvalidRequiredProtocolFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** No origin exists with the specified <code>Origin Id</code>.  */
	export interface NoSuchOrigin {
		Message?: string | null;
	}

	/** No origin exists with the specified <code>Origin Id</code>.  */
	export interface NoSuchOriginFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateNoSuchOriginFormGroup() {
		return new FormGroup<NoSuchOriginFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** You cannot create more origins for the distribution. */
	export interface TooManyOrigins {
		Message?: string | null;
	}

	/** You cannot create more origins for the distribution. */
	export interface TooManyOriginsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyOriginsFormGroup() {
		return new FormGroup<TooManyOriginsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** You cannot create more cache behaviors for the distribution. */
	export interface TooManyCacheBehaviors {
		Message?: string | null;
	}

	/** You cannot create more cache behaviors for the distribution. */
	export interface TooManyCacheBehaviorsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyCacheBehaviorsFormGroup() {
		return new FormGroup<TooManyCacheBehaviorsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Your request contains more cookie names in the whitelist than are allowed per cache behavior. */
	export interface TooManyCookieNamesInWhiteList {
		Message?: string | null;
	}

	/** Your request contains more cookie names in the whitelist than are allowed per cache behavior. */
	export interface TooManyCookieNamesInWhiteListFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyCookieNamesInWhiteListFormGroup() {
		return new FormGroup<TooManyCookieNamesInWhiteListFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Your request contains forward cookies option which doesn't match with the expectation for the <code>whitelisted</code> list of cookie names. Either list of cookie names has been specified when not allowed or list of cookie names is missing when expected. */
	export interface InvalidForwardCookies {
		Message?: string | null;
	}

	/** Your request contains forward cookies option which doesn't match with the expectation for the <code>whitelisted</code> list of cookie names. Either list of cookie names has been specified when not allowed or list of cookie names is missing when expected. */
	export interface InvalidForwardCookiesFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidForwardCookiesFormGroup() {
		return new FormGroup<InvalidForwardCookiesFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TooManyHeadersInForwardedValues {
		Message?: string | null;
	}
	export interface TooManyHeadersInForwardedValuesFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyHeadersInForwardedValuesFormGroup() {
		return new FormGroup<TooManyHeadersInForwardedValuesFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidHeadersForS3Origin {
		Message?: string | null;
	}
	export interface InvalidHeadersForS3OriginFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidHeadersForS3OriginFormGroup() {
		return new FormGroup<InvalidHeadersForS3OriginFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** You cannot create anymore custom SSL/TLS certificates. */
	export interface TooManyCertificates {
		Message?: string | null;
	}

	/** You cannot create anymore custom SSL/TLS certificates. */
	export interface TooManyCertificatesFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyCertificatesFormGroup() {
		return new FormGroup<TooManyCertificatesFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidLocationCode {
		Message?: string | null;
	}
	export interface InvalidLocationCodeFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidLocationCodeFormGroup() {
		return new FormGroup<InvalidLocationCodeFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidGeoRestrictionParameter {
		Message?: string | null;
	}
	export interface InvalidGeoRestrictionParameterFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidGeoRestrictionParameterFormGroup() {
		return new FormGroup<InvalidGeoRestrictionParameterFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** You cannot specify SSLv3 as the minimum protocol version if you only want to support only clients that support Server Name Indication (SNI). */
	export interface InvalidProtocolSettings {
		Message?: string | null;
	}

	/** You cannot specify SSLv3 as the minimum protocol version if you only want to support only clients that support Server Name Indication (SNI). */
	export interface InvalidProtocolSettingsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidProtocolSettingsFormGroup() {
		return new FormGroup<InvalidProtocolSettingsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidTTLOrder {
		Message?: string | null;
	}
	export interface InvalidTTLOrderFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidTTLOrderFormGroup() {
		return new FormGroup<InvalidTTLOrderFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidWebACLId {
		Message?: string | null;
	}
	export interface InvalidWebACLIdFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidWebACLIdFormGroup() {
		return new FormGroup<InvalidWebACLIdFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TooManyOriginCustomHeaders {
		Message?: string | null;
	}
	export interface TooManyOriginCustomHeadersFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyOriginCustomHeadersFormGroup() {
		return new FormGroup<TooManyOriginCustomHeadersFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TooManyQueryStringParameters {
		Message?: string | null;
	}
	export interface TooManyQueryStringParametersFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyQueryStringParametersFormGroup() {
		return new FormGroup<TooManyQueryStringParametersFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidQueryStringParameters {
		Message?: string | null;
	}
	export interface InvalidQueryStringParametersFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidQueryStringParametersFormGroup() {
		return new FormGroup<InvalidQueryStringParametersFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Processing your request would cause the maximum number of distributions with Lambda function associations per owner to be exceeded. */
	export interface TooManyDistributionsWithLambdaAssociations {
		Message?: string | null;
	}

	/** Processing your request would cause the maximum number of distributions with Lambda function associations per owner to be exceeded. */
	export interface TooManyDistributionsWithLambdaAssociationsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyDistributionsWithLambdaAssociationsFormGroup() {
		return new FormGroup<TooManyDistributionsWithLambdaAssociationsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Your request contains more Lambda function associations than are allowed per distribution. */
	export interface TooManyLambdaFunctionAssociations {
		Message?: string | null;
	}

	/** Your request contains more Lambda function associations than are allowed per distribution. */
	export interface TooManyLambdaFunctionAssociationsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyLambdaFunctionAssociationsFormGroup() {
		return new FormGroup<TooManyLambdaFunctionAssociationsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specified Lambda function association is invalid. */
	export interface InvalidLambdaFunctionAssociation {
		Message?: string | null;
	}

	/** The specified Lambda function association is invalid. */
	export interface InvalidLambdaFunctionAssociationFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidLambdaFunctionAssociationFormGroup() {
		return new FormGroup<InvalidLambdaFunctionAssociationFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidOriginReadTimeout {
		Message?: string | null;
	}
	export interface InvalidOriginReadTimeoutFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidOriginReadTimeoutFormGroup() {
		return new FormGroup<InvalidOriginReadTimeoutFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidOriginKeepaliveTimeout {
		Message?: string | null;
	}
	export interface InvalidOriginKeepaliveTimeoutFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidOriginKeepaliveTimeoutFormGroup() {
		return new FormGroup<InvalidOriginKeepaliveTimeoutFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specified configuration for field-level encryption doesn't exist. */
	export interface NoSuchFieldLevelEncryptionConfig {
		Message?: string | null;
	}

	/** The specified configuration for field-level encryption doesn't exist. */
	export interface NoSuchFieldLevelEncryptionConfigFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateNoSuchFieldLevelEncryptionConfigFormGroup() {
		return new FormGroup<NoSuchFieldLevelEncryptionConfigFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specified configuration for field-level encryption can't be associated with the specified cache behavior. */
	export interface IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior {
		Message?: string | null;
	}

	/** The specified configuration for field-level encryption can't be associated with the specified cache behavior. */
	export interface IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateIllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorFormGroup() {
		return new FormGroup<IllegalFieldLevelEncryptionConfigAssociationWithCacheBehaviorFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The maximum number of distributions have been associated with the specified configuration for field-level encryption. */
	export interface TooManyDistributionsAssociatedToFieldLevelEncryptionConfig {
		Message?: string | null;
	}

	/** The maximum number of distributions have been associated with the specified configuration for field-level encryption. */
	export interface TooManyDistributionsAssociatedToFieldLevelEncryptionConfigFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyDistributionsAssociatedToFieldLevelEncryptionConfigFormGroup() {
		return new FormGroup<TooManyDistributionsAssociatedToFieldLevelEncryptionConfigFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The returned result of the corresponding request.  */
	export interface CreateDistributionWithTagsResult {
		Distribution?: Distribution;
	}

	/** The returned result of the corresponding request.  */
	export interface CreateDistributionWithTagsResultFormProperties {
	}
	export function CreateCreateDistributionWithTagsResultFormGroup() {
		return new FormGroup<CreateDistributionWithTagsResultFormProperties>({
		});

	}


	/**  A complex type that contains zero or more <code>Tag</code> elements. */
	export interface Tags {
		Items?: Array<string>;
	}

	/**  A complex type that contains zero or more <code>Tag</code> elements. */
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}

	export interface InvalidTagging {
		Message?: string | null;
	}
	export interface InvalidTaggingFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidTaggingFormGroup() {
		return new FormGroup<InvalidTaggingFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
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


	/** A complex data type that includes the profile configurations and other options specified for field-level encryption.  */
	export interface FieldLevelEncryption {

		/** Required */
		Id: string;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		FieldLevelEncryptionConfig: FieldLevelEncryptionConfig;
	}

	/** A complex data type that includes the profile configurations and other options specified for field-level encryption.  */
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


	/** A complex data type that includes the profile configurations specified for field-level encryption.  */
	export interface FieldLevelEncryptionConfig {

		/** Required */
		CallerReference: string;
		Comment?: string;
		QueryArgProfileConfig?: QueryArgProfileConfig;
		ContentTypeProfileConfig?: ContentTypeProfileConfig;
	}

	/** A complex data type that includes the profile configurations specified for field-level encryption.  */
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


	/** The configuration for a field-level encryption content type-profile mapping.  */
	export interface ContentTypeProfileConfig {

		/** Required */
		ForwardWhenContentTypeIsUnknown: boolean;
		ContentTypeProfiles?: ContentTypeProfiles;
	}

	/** The configuration for a field-level encryption content type-profile mapping.  */
	export interface ContentTypeProfileConfigFormProperties {

		/** Required */
		ForwardWhenContentTypeIsUnknown: FormControl<boolean | null | undefined>,
	}
	export function CreateContentTypeProfileConfigFormGroup() {
		return new FormGroup<ContentTypeProfileConfigFormProperties>({
			ForwardWhenContentTypeIsUnknown: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Field-level encryption content type-profile.  */
	export interface ContentTypeProfiles {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** Field-level encryption content type-profile.  */
	export interface ContentTypeProfilesFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateContentTypeProfilesFormGroup() {
		return new FormGroup<ContentTypeProfilesFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The specified profile for field-level encryption doesn't exist. */
	export interface NoSuchFieldLevelEncryptionProfile {
		Message?: string | null;
	}

	/** The specified profile for field-level encryption doesn't exist. */
	export interface NoSuchFieldLevelEncryptionProfileFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateNoSuchFieldLevelEncryptionProfileFormGroup() {
		return new FormGroup<NoSuchFieldLevelEncryptionProfileFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specified configuration for field-level encryption already exists. */
	export interface FieldLevelEncryptionConfigAlreadyExists {
		Message?: string | null;
	}

	/** The specified configuration for field-level encryption already exists. */
	export interface FieldLevelEncryptionConfigAlreadyExistsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateFieldLevelEncryptionConfigAlreadyExistsFormGroup() {
		return new FormGroup<FieldLevelEncryptionConfigAlreadyExistsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The maximum number of configurations for field-level encryption have been created. */
	export interface TooManyFieldLevelEncryptionConfigs {
		Message?: string | null;
	}

	/** The maximum number of configurations for field-level encryption have been created. */
	export interface TooManyFieldLevelEncryptionConfigsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyFieldLevelEncryptionConfigsFormGroup() {
		return new FormGroup<TooManyFieldLevelEncryptionConfigsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The maximum number of query arg profiles for field-level encryption have been created. */
	export interface TooManyFieldLevelEncryptionQueryArgProfiles {
		Message?: string | null;
	}

	/** The maximum number of query arg profiles for field-level encryption have been created. */
	export interface TooManyFieldLevelEncryptionQueryArgProfilesFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyFieldLevelEncryptionQueryArgProfilesFormGroup() {
		return new FormGroup<TooManyFieldLevelEncryptionQueryArgProfilesFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The maximum number of content type profiles for field-level encryption have been created. */
	export interface TooManyFieldLevelEncryptionContentTypeProfiles {
		Message?: string | null;
	}

	/** The maximum number of content type profiles for field-level encryption have been created. */
	export interface TooManyFieldLevelEncryptionContentTypeProfilesFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyFieldLevelEncryptionContentTypeProfilesFormGroup() {
		return new FormGroup<TooManyFieldLevelEncryptionContentTypeProfilesFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** No profile specified for the field-level encryption query argument. */
	export interface QueryArgProfileEmpty {
		Message?: string | null;
	}

	/** No profile specified for the field-level encryption query argument. */
	export interface QueryArgProfileEmptyFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateQueryArgProfileEmptyFormGroup() {
		return new FormGroup<QueryArgProfileEmptyFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
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


	/** Complex data type for field-level encryption profiles that includes all of the encryption entities.  */
	export interface EncryptionEntities {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** Complex data type for field-level encryption profiles that includes all of the encryption entities.  */
	export interface EncryptionEntitiesFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateEncryptionEntitiesFormGroup() {
		return new FormGroup<EncryptionEntitiesFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The specified public key doesn't exist. */
	export interface NoSuchPublicKey {
		Message?: string | null;
	}

	/** The specified public key doesn't exist. */
	export interface NoSuchPublicKeyFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateNoSuchPublicKeyFormGroup() {
		return new FormGroup<NoSuchPublicKeyFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specified profile for field-level encryption already exists. */
	export interface FieldLevelEncryptionProfileAlreadyExists {
		Message?: string | null;
	}

	/** The specified profile for field-level encryption already exists. */
	export interface FieldLevelEncryptionProfileAlreadyExistsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateFieldLevelEncryptionProfileAlreadyExistsFormGroup() {
		return new FormGroup<FieldLevelEncryptionProfileAlreadyExistsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The maximum size of a profile for field-level encryption was exceeded. */
	export interface FieldLevelEncryptionProfileSizeExceeded {
		Message?: string | null;
	}

	/** The maximum size of a profile for field-level encryption was exceeded. */
	export interface FieldLevelEncryptionProfileSizeExceededFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateFieldLevelEncryptionProfileSizeExceededFormGroup() {
		return new FormGroup<FieldLevelEncryptionProfileSizeExceededFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The maximum number of profiles for field-level encryption have been created. */
	export interface TooManyFieldLevelEncryptionProfiles {
		Message?: string | null;
	}

	/** The maximum number of profiles for field-level encryption have been created. */
	export interface TooManyFieldLevelEncryptionProfilesFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyFieldLevelEncryptionProfilesFormGroup() {
		return new FormGroup<TooManyFieldLevelEncryptionProfilesFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The maximum number of encryption entities for field-level encryption have been created. */
	export interface TooManyFieldLevelEncryptionEncryptionEntities {
		Message?: string | null;
	}

	/** The maximum number of encryption entities for field-level encryption have been created. */
	export interface TooManyFieldLevelEncryptionEncryptionEntitiesFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyFieldLevelEncryptionEncryptionEntitiesFormGroup() {
		return new FormGroup<TooManyFieldLevelEncryptionEncryptionEntitiesFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The maximum number of field patterns for field-level encryption have been created. */
	export interface TooManyFieldLevelEncryptionFieldPatterns {
		Message?: string | null;
	}

	/** The maximum number of field patterns for field-level encryption have been created. */
	export interface TooManyFieldLevelEncryptionFieldPatternsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyFieldLevelEncryptionFieldPatternsFormGroup() {
		return new FormGroup<TooManyFieldLevelEncryptionFieldPatternsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
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


	/** An invalidation.  */
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

	/** An invalidation.  */
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


	/** A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>.  */
	export interface Paths {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>.  */
	export interface PathsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreatePathsFormGroup() {
		return new FormGroup<PathsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The specified distribution does not exist. */
	export interface NoSuchDistribution {
		Message?: string | null;
	}

	/** The specified distribution does not exist. */
	export interface NoSuchDistributionFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateNoSuchDistributionFormGroup() {
		return new FormGroup<NoSuchDistributionFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchTooLarge {
		Message?: string | null;
	}
	export interface BatchTooLargeFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateBatchTooLargeFormGroup() {
		return new FormGroup<BatchTooLargeFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** You have exceeded the maximum number of allowable InProgress invalidation batch requests, or invalidation objects. */
	export interface TooManyInvalidationsInProgress {
		Message?: string | null;
	}

	/** You have exceeded the maximum number of allowable InProgress invalidation batch requests, or invalidation objects. */
	export interface TooManyInvalidationsInProgressFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyInvalidationsInProgressFormGroup() {
		return new FormGroup<TooManyInvalidationsInProgressFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
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


	/** A complex data type of public keys you add to CloudFront to use with features like field-level encryption. */
	export interface PublicKey {

		/** Required */
		Id: string;

		/** Required */
		CreatedTime: Date;

		/** Required */
		PublicKeyConfig: PublicKeyConfig;
	}

	/** A complex data type of public keys you add to CloudFront to use with features like field-level encryption. */
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


	/** Information about a public key you add to CloudFront to use with features like field-level encryption. */
	export interface PublicKeyConfig {

		/** Required */
		CallerReference: string;

		/** Required */
		Name: string;

		/** Required */
		EncodedKey: string;
		Comment?: string;
	}

	/** Information about a public key you add to CloudFront to use with features like field-level encryption. */
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


	/** The specified public key already exists. */
	export interface PublicKeyAlreadyExists {
		Message?: string | null;
	}

	/** The specified public key already exists. */
	export interface PublicKeyAlreadyExistsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreatePublicKeyAlreadyExistsFormGroup() {
		return new FormGroup<PublicKeyAlreadyExistsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The maximum number of public keys for field-level encryption have been created. To create a new public key, delete one of the existing keys. */
	export interface TooManyPublicKeys {
		Message?: string | null;
	}

	/** The maximum number of public keys for field-level encryption have been created. To create a new public key, delete one of the existing keys. */
	export interface TooManyPublicKeysFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyPublicKeysFormGroup() {
		return new FormGroup<TooManyPublicKeysFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
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


	/** A streaming distribution.  */
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

	/** A streaming distribution.  */
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
		Message?: string | null;
	}
	export interface StreamingDistributionAlreadyExistsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateStreamingDistributionAlreadyExistsFormGroup() {
		return new FormGroup<StreamingDistributionAlreadyExistsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TooManyStreamingDistributionCNAMEs {
		Message?: string | null;
	}
	export interface TooManyStreamingDistributionCNAMEsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyStreamingDistributionCNAMEsFormGroup() {
		return new FormGroup<TooManyStreamingDistributionCNAMEsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Processing your request would cause you to exceed the maximum number of streaming distributions allowed. */
	export interface TooManyStreamingDistributions {
		Message?: string | null;
	}

	/** Processing your request would cause you to exceed the maximum number of streaming distributions allowed. */
	export interface TooManyStreamingDistributionsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTooManyStreamingDistributionsFormGroup() {
		return new FormGroup<TooManyStreamingDistributionsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The returned result of the corresponding request.  */
	export interface CreateStreamingDistributionWithTagsResult {
		StreamingDistribution?: StreamingDistribution;
	}

	/** The returned result of the corresponding request.  */
	export interface CreateStreamingDistributionWithTagsResultFormProperties {
	}
	export function CreateCreateStreamingDistributionWithTagsResultFormGroup() {
		return new FormGroup<CreateStreamingDistributionWithTagsResultFormProperties>({
		});

	}


	/** The <code>If-Match</code> version is missing or not valid for the distribution. */
	export interface InvalidIfMatchVersion {
		Message?: string | null;
	}

	/** The <code>If-Match</code> version is missing or not valid for the distribution. */
	export interface InvalidIfMatchVersionFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidIfMatchVersionFormGroup() {
		return new FormGroup<InvalidIfMatchVersionFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specified origin access identity does not exist. */
	export interface NoSuchCloudFrontOriginAccessIdentity {
		Message?: string | null;
	}

	/** The specified origin access identity does not exist. */
	export interface NoSuchCloudFrontOriginAccessIdentityFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateNoSuchCloudFrontOriginAccessIdentityFormGroup() {
		return new FormGroup<NoSuchCloudFrontOriginAccessIdentityFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The precondition given in one or more of the request-header fields evaluated to <code>false</code>.  */
	export interface PreconditionFailed {
		Message?: string | null;
	}

	/** The precondition given in one or more of the request-header fields evaluated to <code>false</code>.  */
	export interface PreconditionFailedFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreatePreconditionFailedFormGroup() {
		return new FormGroup<PreconditionFailedFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CloudFrontOriginAccessIdentityInUse {
		Message?: string | null;
	}
	export interface CloudFrontOriginAccessIdentityInUseFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateCloudFrontOriginAccessIdentityInUseFormGroup() {
		return new FormGroup<CloudFrontOriginAccessIdentityInUseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DistributionNotDisabled {
		Message?: string | null;
	}
	export interface DistributionNotDisabledFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDistributionNotDisabledFormGroup() {
		return new FormGroup<DistributionNotDisabledFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specified configuration for field-level encryption is in use. */
	export interface FieldLevelEncryptionConfigInUse {
		Message?: string | null;
	}

	/** The specified configuration for field-level encryption is in use. */
	export interface FieldLevelEncryptionConfigInUseFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateFieldLevelEncryptionConfigInUseFormGroup() {
		return new FormGroup<FieldLevelEncryptionConfigInUseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specified profile for field-level encryption is in use. */
	export interface FieldLevelEncryptionProfileInUse {
		Message?: string | null;
	}

	/** The specified profile for field-level encryption is in use. */
	export interface FieldLevelEncryptionProfileInUseFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateFieldLevelEncryptionProfileInUseFormGroup() {
		return new FormGroup<FieldLevelEncryptionProfileInUseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specified public key is in use.  */
	export interface PublicKeyInUse {
		Message?: string | null;
	}

	/** The specified public key is in use.  */
	export interface PublicKeyInUseFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreatePublicKeyInUseFormGroup() {
		return new FormGroup<PublicKeyInUseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StreamingDistributionNotDisabled {
		Message?: string | null;
	}
	export interface StreamingDistributionNotDisabledFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateStreamingDistributionNotDisabledFormGroup() {
		return new FormGroup<StreamingDistributionNotDisabledFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specified streaming distribution does not exist. */
	export interface NoSuchStreamingDistribution {
		Message?: string | null;
	}

	/** The specified streaming distribution does not exist. */
	export interface NoSuchStreamingDistributionFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateNoSuchStreamingDistributionFormGroup() {
		return new FormGroup<NoSuchStreamingDistributionFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
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


	/** The specified invalidation does not exist. */
	export interface NoSuchInvalidation {
		Message?: string | null;
	}

	/** The specified invalidation does not exist. */
	export interface NoSuchInvalidationFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateNoSuchInvalidationFormGroup() {
		return new FormGroup<NoSuchInvalidationFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
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


	/** The returned result of the corresponding request.  */
	export interface ListCloudFrontOriginAccessIdentitiesResult {
		CloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList;
	}

	/** The returned result of the corresponding request.  */
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


	/** The returned result of the corresponding request.  */
	export interface ListDistributionsResult {
		DistributionList?: DistributionList;
	}

	/** The returned result of the corresponding request.  */
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


	/** The response to a request to list the distributions that are associated with a specified AWS WAF web ACL.  */
	export interface ListDistributionsByWebACLIdResult {
		DistributionList?: DistributionList;
	}

	/** The response to a request to list the distributions that are associated with a specified AWS WAF web ACL.  */
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


	/** The returned result of the corresponding request.  */
	export interface ListInvalidationsResult {
		InvalidationList?: InvalidationList;
	}

	/** The returned result of the corresponding request.  */
	export interface ListInvalidationsResultFormProperties {
	}
	export function CreateListInvalidationsResultFormGroup() {
		return new FormGroup<ListInvalidationsResultFormProperties>({
		});

	}


	/** The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>. */
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

	/** The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>. */
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

	export interface ListPublicKeysResult {
		PublicKeyList?: PublicKeyList;
	}
	export interface ListPublicKeysResultFormProperties {
	}
	export function CreateListPublicKeysResultFormGroup() {
		return new FormGroup<ListPublicKeysResultFormProperties>({
		});

	}


	/** A list of public keys you've added to CloudFront to use with features like field-level encryption. */
	export interface PublicKeyList {
		NextMarker?: string;

		/** Required */
		MaxItems: number;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A list of public keys you've added to CloudFront to use with features like field-level encryption. */
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


	/** The returned result of the corresponding request.  */
	export interface ListStreamingDistributionsResult {
		StreamingDistributionList?: StreamingDistributionList;
	}

	/** The returned result of the corresponding request.  */
	export interface ListStreamingDistributionsResultFormProperties {
	}
	export function CreateListStreamingDistributionsResultFormGroup() {
		return new FormGroup<ListStreamingDistributionsResultFormProperties>({
		});

	}


	/** A streaming distribution list.  */
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

	/** A streaming distribution list.  */
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


	/**  The returned result of the corresponding request. */
	export interface ListTagsForResourceResult {

		/** Required */
		Tags: Tags;
	}

	/**  The returned result of the corresponding request. */
	export interface ListTagsForResourceResultFormProperties {
	}
	export function CreateListTagsForResourceResultFormGroup() {
		return new FormGroup<ListTagsForResourceResultFormProperties>({
		});

	}

	export interface NoSuchResource {
		Message?: string | null;
	}
	export interface NoSuchResourceFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateNoSuchResourceFormGroup() {
		return new FormGroup<NoSuchResourceFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
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


	/** Origin and <code>CallerReference</code> cannot be updated.  */
	export interface IllegalUpdate {
		Message?: string | null;
	}

	/** Origin and <code>CallerReference</code> cannot be updated.  */
	export interface IllegalUpdateFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateIllegalUpdateFormGroup() {
		return new FormGroup<IllegalUpdateFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdatePublicKeyResult {
		PublicKey?: PublicKey;
	}
	export interface UpdatePublicKeyResultFormProperties {
	}
	export function CreateUpdatePublicKeyResultFormGroup() {
		return new FormGroup<UpdatePublicKeyResultFormProperties>({
		});

	}


	/** You can't change the value of a public key. */
	export interface CannotChangeImmutablePublicKeyFields {
		Message?: string | null;
	}

	/** You can't change the value of a public key. */
	export interface CannotChangeImmutablePublicKeyFieldsFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateCannotChangeImmutablePublicKeyFieldsFormGroup() {
		return new FormGroup<CannotChangeImmutablePublicKeyFieldsFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
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


	/** <p>A complex type that describes how CloudFront processes requests.</p> <p>You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to distribute objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.</p> <p>For the current limit on the number of cache behaviors that you can add to a distribution, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_cloudfront">Amazon CloudFront Limits</a> in the <i>AWS General Reference</i>.</p> <p>If you don't want to specify any cache behaviors, include only an empty <code>CacheBehaviors</code> element. Don't include an empty <code>CacheBehavior</code> element, or CloudFront returns a <code>MalformedXML</code> error.</p> <p>To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty <code>CacheBehaviors</code> element.</p> <p>To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.</p> <p>For more information about cache behaviors, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behaviors</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CacheBehavior {

		/** Required */
		PathPattern: string;

		/** Required */
		TargetOriginId: string;

		/** Required */
		ForwardedValues: ForwardedValues;

		/** Required */
		TrustedSigners: TrustedSigners;

		/** Required */
		ViewerProtocolPolicy: ViewerProtocolPolicy;

		/** Required */
		MinTTL: number;

		/** <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p> */
		AllowedMethods?: AllowedMethods;
		SmoothStreaming?: boolean | null;
		DefaultTTL?: number | null;
		MaxTTL?: number | null;
		Compress?: boolean | null;
		LambdaFunctionAssociations?: LambdaFunctionAssociations;
		FieldLevelEncryptionId?: string | null;
	}

	/** <p>A complex type that describes how CloudFront processes requests.</p> <p>You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to distribute objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.</p> <p>For the current limit on the number of cache behaviors that you can add to a distribution, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_cloudfront">Amazon CloudFront Limits</a> in the <i>AWS General Reference</i>.</p> <p>If you don't want to specify any cache behaviors, include only an empty <code>CacheBehaviors</code> element. Don't include an empty <code>CacheBehavior</code> element, or CloudFront returns a <code>MalformedXML</code> error.</p> <p>To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty <code>CacheBehaviors</code> element.</p> <p>To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.</p> <p>For more information about cache behaviors, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behaviors</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CacheBehaviorFormProperties {

		/** Required */
		PathPattern: FormControl<string | null | undefined>,

		/** Required */
		TargetOriginId: FormControl<string | null | undefined>,

		/** Required */
		ViewerProtocolPolicy: FormControl<ViewerProtocolPolicy | null | undefined>,

		/** Required */
		MinTTL: FormControl<number | null | undefined>,
		SmoothStreaming: FormControl<boolean | null | undefined>,
		DefaultTTL: FormControl<number | null | undefined>,
		MaxTTL: FormControl<number | null | undefined>,
		Compress: FormControl<boolean | null | undefined>,
		FieldLevelEncryptionId: FormControl<string | null | undefined>,
	}
	export function CreateCacheBehaviorFormGroup() {
		return new FormGroup<CacheBehaviorFormProperties>({
			PathPattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetOriginId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ViewerProtocolPolicy: new FormControl<ViewerProtocolPolicy | null | undefined>(undefined, [Validators.required]),
			MinTTL: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SmoothStreaming: new FormControl<boolean | null | undefined>(undefined),
			DefaultTTL: new FormControl<number | null | undefined>(undefined),
			MaxTTL: new FormControl<number | null | undefined>(undefined),
			Compress: new FormControl<boolean | null | undefined>(undefined),
			FieldLevelEncryptionId: new FormControl<string | null | undefined>(undefined),
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

	export enum Format { URLEncoded = 0 }


	/** A field-level encryption content type profile.  */
	export interface ContentTypeProfile {

		/** Required */
		Format: Format;
		ProfileId?: string;

		/** Required */
		ContentType: string;
	}

	/** A field-level encryption content type profile.  */
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


	/** The request to create a new origin access identity. */
	export interface CreateCloudFrontOriginAccessIdentityRequest {

		/** Required */
		CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
	}

	/** The request to create a new origin access identity. */
	export interface CreateCloudFrontOriginAccessIdentityRequestFormProperties {
	}
	export function CreateCreateCloudFrontOriginAccessIdentityRequestFormGroup() {
		return new FormGroup<CreateCloudFrontOriginAccessIdentityRequestFormProperties>({
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


	/** The request to create a new distribution with tags.  */
	export interface CreateDistributionWithTagsRequest {

		/** Required */
		DistributionConfigWithTags: DistributionConfigWithTags;
	}

	/** The request to create a new distribution with tags.  */
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


	/** <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer. </p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CustomErrorResponse {

		/** Required */
		ErrorCode: number;
		ResponsePagePath?: string;
		ResponseCode?: string;
		ErrorCachingMinTTL?: number | null;
	}

	/** <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer. </p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
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


	/** A complex type that contains the list of Custom Headers for each origin.  */
	export interface CustomHeaders {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex type that contains the list of Custom Headers for each origin.  */
	export interface CustomHeadersFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateCustomHeadersFormGroup() {
		return new FormGroup<CustomHeadersFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OriginProtocolPolicy { 'http-only' = 0, 'match-viewer' = 1, 'https-only' = 2 }


	/** A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.  */
	export interface OriginSslProtocols {

		/** Required */
		Quantity: number;

		/** Required */
		Items: Array<string>;
	}

	/** A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.  */
	export interface OriginSslProtocolsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateOriginSslProtocolsFormGroup() {
		return new FormGroup<OriginSslProtocolsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A customer origin. */
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

	/** A customer origin. */
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


	/** <p>This action deletes a web distribution. To delete a web distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete a web distribution using the CloudFront API:</b> </p> <ol> <li> <p>Disable the web distribution </p> </li> <li> <p>Submit a <code>GET Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution.</p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Distribution</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 6.</p> </li> <li> <p>Review the response to your <code>DELETE Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface DeleteDistributionRequest {
	}

	/** <p>This action deletes a web distribution. To delete a web distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete a web distribution using the CloudFront API:</b> </p> <ol> <li> <p>Disable the web distribution </p> </li> <li> <p>Submit a <code>GET Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution.</p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Distribution</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 6.</p> </li> <li> <p>Review the response to your <code>DELETE Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
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

	export interface DeletePublicKeyRequest {
	}
	export interface DeletePublicKeyRequestFormProperties {
	}
	export function CreateDeletePublicKeyRequestFormGroup() {
		return new FormGroup<DeletePublicKeyRequestFormProperties>({
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

		/**
		 * <p>A complex type that specifies the following:</p> <ul> <li> <p>Whether you want viewers to use HTTP or HTTPS to request your objects.</p> </li> <li> <p>If you want viewers to use HTTPS, whether you're using an alternate domain name such as <code>example.com</code> or the CloudFront domain name for your distribution, such as <code>d111111abcdef8.cloudfront.net</code>.</p> </li> <li> <p>If you're using an alternate domain name, whether AWS Certificate Manager (ACM) provided the certificate, or you purchased a certificate from a third-party certificate authority and imported it into ACM or uploaded it to the IAM certificate store.</p> </li> </ul> <p>You must specify only one of the following values: </p> <ul> <li> <p> <a>ViewerCertificate$ACMCertificateArn</a> </p> </li> <li> <p> <a>ViewerCertificate$IAMCertificateId</a> </p> </li> <li> <p> <a>ViewerCertificate$CloudFrontDefaultCertificate</a> </p> </li> </ul> <p>Don't specify <code>false</code> for <code>CloudFrontDefaultCertificate</code>.</p> <p> <b>If you want viewers to use HTTP instead of HTTPS to request your objects</b>: Specify the following value:</p> <p> <code>&lt;CloudFrontDefaultCertificate&gt;true&lt;CloudFrontDefaultCertificate&gt;</code> </p> <p>In addition, specify <code>allow-all</code> for <code>ViewerProtocolPolicy</code> for all of your cache behaviors.</p> <p> <b>If you want viewers to use HTTPS to request your objects</b>: Choose the type of certificate that you want to use based on whether you're using an alternate domain name for your objects or the CloudFront domain name:</p> <ul> <li> <p> <b>If you're using an alternate domain name, such as example.com</b>: Specify one of the following values, depending on whether ACM provided your certificate or you purchased your certificate from third-party certificate authority:</p> <ul> <li> <p> <code>&lt;ACMCertificateArn&gt;<i>ARN for ACM SSL/TLS certificate</i>&lt;ACMCertificateArn&gt;</code> where <code> <i>ARN for ACM SSL/TLS certificate</i> </code> is the ARN for the ACM SSL/TLS certificate that you want to use for this distribution.</p> </li> <li> <p> <code>&lt;IAMCertificateId&gt;<i>IAM certificate ID</i>&lt;IAMCertificateId&gt;</code> where <code> <i>IAM certificate ID</i> </code> is the ID that IAM returned when you added the certificate to the IAM certificate store.</p> </li> </ul> <p>If you specify <code>ACMCertificateArn</code> or <code>IAMCertificateId</code>, you must also specify a value for <code>SSLSupportMethod</code>.</p> <p>If you choose to use an ACM certificate or a certificate in the IAM certificate store, we recommend that you use only an alternate domain name in your object URLs (<code>https://example.com/logo.jpg</code>). If you use the domain name that is associated with your CloudFront distribution (such as <code>https://d111111abcdef8.cloudfront.net/logo.jpg</code>) and the viewer supports <code>SNI</code>, then CloudFront behaves normally. However, if the browser does not support SNI, the user's experience depends on the value that you choose for <code>SSLSupportMethod</code>:</p> <ul> <li> <p> <code>vip</code>: The viewer displays a warning because there is a mismatch between the CloudFront domain name and the domain name in your SSL/TLS certificate.</p> </li> <li> <p> <code>sni-only</code>: CloudFront drops the connection with the browser without returning the object.</p> </li> </ul> </li> <li> <p> <b>If you're using the CloudFront domain name for your distribution, such as <code>d111111abcdef8.cloudfront.net</code> </b>: Specify the following value:</p> <p> <code>&lt;CloudFrontDefaultCertificate&gt;true&lt;CloudFrontDefaultCertificate&gt; </code> </p> </li> </ul> <p>If you want viewers to use HTTPS, you must also specify one of the following values in your cache behaviors:</p> <ul> <li> <p> <code> &lt;ViewerProtocolPolicy&gt;https-only&lt;ViewerProtocolPolicy&gt;</code> </p> </li> <li> <p> <code>&lt;ViewerProtocolPolicy&gt;redirect-to-https&lt;ViewerProtocolPolicy&gt;</code> </p> </li> </ul> <p>You can also optionally require that CloudFront use HTTPS to communicate with your origin by specifying one of the following values for the applicable origins:</p> <ul> <li> <p> <code>&lt;OriginProtocolPolicy&gt;https-only&lt;OriginProtocolPolicy&gt; </code> </p> </li> <li> <p> <code>&lt;OriginProtocolPolicy&gt;match-viewer&lt;OriginProtocolPolicy&gt; </code> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html#CNAMEsAndHTTPS">Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
		 * Required
		 */
		ViewerCertificate: ViewerCertificate;

		/**
		 * A complex type that identifies ways in which you want to restrict distribution of your content.
		 * Required
		 */
		Restrictions: Restrictions;

		/** Required */
		WebACLId: string;

		/** Required */
		HttpVersion: HttpVersion;

		/** Required */
		IsIPV6Enabled: boolean;
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


	/** Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications.  */
	export interface EncryptionEntity {

		/** Required */
		PublicKeyId: string;

		/** Required */
		ProviderId: string;

		/** Required */
		FieldPatterns: FieldPatterns;
	}

	/** Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications.  */
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

	export enum EventType { 'viewer-request' = 0, 'viewer-response' = 1, 'origin-request' = 2, 'origin-response' = 3 }


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


	/** The origin access identity's configuration information. For more information, see <a>CloudFrontOriginAccessIdentityConfigComplexType</a>. */
	export interface GetCloudFrontOriginAccessIdentityConfigRequest {
	}

	/** The origin access identity's configuration information. For more information, see <a>CloudFrontOriginAccessIdentityConfigComplexType</a>. */
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


	/** The request to get an invalidation's information.  */
	export interface GetInvalidationRequest {
	}

	/** The request to get an invalidation's information.  */
	export interface GetInvalidationRequestFormProperties {
	}
	export function CreateGetInvalidationRequestFormGroup() {
		return new FormGroup<GetInvalidationRequestFormProperties>({
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


	/** <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>. </p> <p>For more information, see <a>ActiveTrustedSigners</a>.</p> */
	export interface KeyPairIds {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>. </p> <p>For more information, see <a>ActiveTrustedSigners</a>.</p> */
	export interface KeyPairIdsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateKeyPairIdsFormGroup() {
		return new FormGroup<KeyPairIdsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that contains a Lambda function association. */
	export interface LambdaFunctionAssociation {

		/** Required */
		LambdaFunctionARN: string;

		/** Required */
		EventType: EventType;
	}

	/** A complex type that contains a Lambda function association. */
	export interface LambdaFunctionAssociationFormProperties {

		/** Required */
		LambdaFunctionARN: FormControl<string | null | undefined>,

		/** Required */
		EventType: FormControl<EventType | null | undefined>,
	}
	export function CreateLambdaFunctionAssociationFormGroup() {
		return new FormGroup<LambdaFunctionAssociationFormProperties>({
			LambdaFunctionARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventType: new FormControl<EventType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request to list origin access identities.  */
	export interface ListCloudFrontOriginAccessIdentitiesRequest {
	}

	/** The request to list origin access identities.  */
	export interface ListCloudFrontOriginAccessIdentitiesRequestFormProperties {
	}
	export function CreateListCloudFrontOriginAccessIdentitiesRequestFormGroup() {
		return new FormGroup<ListCloudFrontOriginAccessIdentitiesRequestFormProperties>({
		});

	}


	/** The request to list distributions that are associated with a specified AWS WAF web ACL.  */
	export interface ListDistributionsByWebACLIdRequest {
	}

	/** The request to list distributions that are associated with a specified AWS WAF web ACL.  */
	export interface ListDistributionsByWebACLIdRequestFormProperties {
	}
	export function CreateListDistributionsByWebACLIdRequestFormGroup() {
		return new FormGroup<ListDistributionsByWebACLIdRequestFormProperties>({
		});

	}


	/** The request to list your distributions.  */
	export interface ListDistributionsRequest {
	}

	/** The request to list your distributions.  */
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


	/** The request to list invalidations.  */
	export interface ListInvalidationsRequest {
	}

	/** The request to list invalidations.  */
	export interface ListInvalidationsRequestFormProperties {
	}
	export function CreateListInvalidationsRequestFormGroup() {
		return new FormGroup<ListInvalidationsRequestFormProperties>({
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


	/** The request to list your streaming distributions.  */
	export interface ListStreamingDistributionsRequest {
	}

	/** The request to list your streaming distributions.  */
	export interface ListStreamingDistributionsRequestFormProperties {
	}
	export function CreateListStreamingDistributionsRequestFormGroup() {
		return new FormGroup<ListStreamingDistributionsRequestFormProperties>({
		});

	}


	/**  The request to list tags for a CloudFront resource. */
	export interface ListTagsForResourceRequest {
	}

	/**  The request to list tags for a CloudFront resource. */
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export enum Method { GET = 0, HEAD = 1, POST = 2, PUT = 3, PATCH = 4, OPTIONS = 5, DELETE = 6 }


	/** A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin, use the <code>CustomOriginConfig</code> element instead. */
	export interface S3OriginConfig {

		/** Required */
		OriginAccessIdentity: string;
	}

	/** A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin, use the <code>CustomOriginConfig</code> element instead. */
	export interface S3OriginConfigFormProperties {

		/** Required */
		OriginAccessIdentity: FormControl<string | null | undefined>,
	}
	export function CreateS3OriginConfigFormGroup() {
		return new FormGroup<S3OriginConfigFormProperties>({
			OriginAccessIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A complex type that describes the Amazon S3 bucket or the HTTP server (for example, a web server) from which CloudFront gets your files. You must create at least one origin.</p> <p>For the current limit on the number of origins that you can create for a distribution, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_cloudfront">Amazon CloudFront Limits</a> in the <i>AWS General Reference</i>.</p> */
	export interface Origin {

		/** Required */
		Id: string;

		/** Required */
		DomainName: string;
		OriginPath?: string;
		CustomHeaders?: CustomHeaders;
		S3OriginConfig?: S3OriginConfig;
		CustomOriginConfig?: CustomOriginConfig;
	}

	/** <p>A complex type that describes the Amazon S3 bucket or the HTTP server (for example, a web server) from which CloudFront gets your files. You must create at least one origin.</p> <p>For the current limit on the number of origins that you can create for a distribution, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_cloudfront">Amazon CloudFront Limits</a> in the <i>AWS General Reference</i>.</p> */
	export interface OriginFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		OriginPath: FormControl<string | null | undefined>,
	}
	export function CreateOriginFormGroup() {
		return new FormGroup<OriginFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OriginPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution.  */
	export interface OriginCustomHeader {

		/** Required */
		HeaderName: string;

		/** Required */
		HeaderValue: string;
	}

	/** A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution.  */
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


	/**  Public key information summary.  */
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

	/**  Public key information summary.  */
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


	/** A complex type that lists the AWS accounts that were included in the <code>TrustedSigners</code> complex type, as well as their active CloudFront key pair IDs, if any.  */
	export interface Signer {
		AwsAccountNumber?: string;
		KeyPairIds?: KeyPairIds;
	}

	/** A complex type that lists the AWS accounts that were included in the <code>TrustedSigners</code> complex type, as well as their active CloudFront key pair IDs, if any.  */
	export interface SignerFormProperties {
		AwsAccountNumber: FormControl<string | null | undefined>,
	}
	export function CreateSignerFormGroup() {
		return new FormGroup<SignerFormProperties>({
			AwsAccountNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SslProtocol { SSLv3 = 0, TLSv1 = 1, 'TLSv1.1' = 2, 'TLSv1.2' = 3 }


	/**  A summary of the information for an Amazon CloudFront streaming distribution. */
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

	/**  A summary of the information for an Amazon CloudFront streaming distribution. */
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


	/**  A complex type that contains <code>Tag</code> key and <code>Tag</code> value. */
	export interface Tag {

		/** Required */
		Key: string;
		Value?: string;
	}

	/**  A complex type that contains <code>Tag</code> key and <code>Tag</code> value. */
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


	/**  A complex type that contains zero or more <code>Tag</code> elements. */
	export interface TagKeys {
		Items?: Array<string>;
	}

	/**  A complex type that contains zero or more <code>Tag</code> elements. */
	export interface TagKeysFormProperties {
	}
	export function CreateTagKeysFormGroup() {
		return new FormGroup<TagKeysFormProperties>({
		});

	}


	/**  The request to add tags to a CloudFront resource. */
	export interface TagResourceRequest {

		/** Required */
		Tags: Tags;
	}

	/**  The request to add tags to a CloudFront resource. */
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}


	/**  The request to remove tags from a CloudFront resource. */
	export interface UntagResourceRequest {

		/** Required */
		TagKeys: TagKeys;
	}

	/**  The request to remove tags from a CloudFront resource. */
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
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
		 * Lists origin access identities.
		 * Get 2017-10-30/origin-access-identity/cloudfront
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last identity on that page).
		 * @param {string} MaxItems The maximum number of origin access identities you want in the response body. 
		 * @return {void} Success
		 */
		ListCloudFrontOriginAccessIdentities2017_10_30(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/origin-access-identity/cloudfront?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List distributions.
		 * Get 2017-10-30/distribution
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of distributions. The results include distributions in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last distribution on that page).
		 * @param {string} MaxItems The maximum number of distributions you want in the response body.
		 * @return {void} Success
		 */
		ListDistributions2017_10_30(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/distribution?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all field-level encryption configurations that have been created in CloudFront for this account.
		 * Get 2017-10-30/field-level-encryption
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last configuration on that page). 
		 * @param {string} MaxItems The maximum number of field-level encryption configurations you want in the response body. 
		 * @return {void} Success
		 */
		ListFieldLevelEncryptionConfigs2017_10_30(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/field-level-encryption?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request a list of field-level encryption profiles that have been created in CloudFront for this account.
		 * Get 2017-10-30/field-level-encryption-profile
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of profiles. The results include profiles in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last profile on that page). 
		 * @param {string} MaxItems The maximum number of field-level encryption profiles you want in the response body. 
		 * @return {void} Success
		 */
		ListFieldLevelEncryptionProfiles2017_10_30(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/field-level-encryption-profile?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists invalidation batches.
		 * Get 2017-10-30/distribution/{DistributionId}/invalidation
		 * @param {string} DistributionId The distribution's ID.
		 * @param {string} Marker Use this parameter when paginating results to indicate where to begin in your list of invalidation batches. Because the results are returned in decreasing order from most recent to oldest, the most recent results are on the first page, the second page will contain earlier results, and so on. To get the next page of results, set <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response. This value is the same as the ID of the last invalidation batch on that page. 
		 * @param {string} MaxItems The maximum number of invalidation batches that you want in the response body.
		 * @return {void} Success
		 */
		ListInvalidations2017_10_30(DistributionId: string, Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/distribution/' + (DistributionId == null ? '' : encodeURIComponent(DistributionId)) + '/invalidation&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all public keys that have been added to CloudFront for this account.
		 * Get 2017-10-30/public-key
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of public keys. The results include public keys in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last public key on that page). 
		 * @param {string} MaxItems The maximum number of public keys you want in the response body. 
		 * @return {void} Success
		 */
		ListPublicKeys2017_10_30(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/public-key?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List streaming distributions.
		 * Get 2017-10-30/streaming-distribution
		 * @param {string} Marker The value that you provided for the <code>Marker</code> request parameter.
		 * @param {string} MaxItems The value that you provided for the <code>MaxItems</code> request parameter.
		 * @return {void} Success
		 */
		ListStreamingDistributions2017_10_30(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/streaming-distribution?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an origin access identity.
		 * Delete 2017-10-30/origin-access-identity/cloudfront/{Id}
		 * @param {string} Id The origin access identity's ID.
		 * @return {void} 
		 */
		DeleteCloudFrontOriginAccessIdentity2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2017-10-30/origin-access-identity/cloudfront/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the information about an origin access identity.
		 * Get 2017-10-30/origin-access-identity/cloudfront/{Id}
		 * @param {string} Id The identity's ID.
		 * @return {void} Success
		 */
		GetCloudFrontOriginAccessIdentity2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/origin-access-identity/cloudfront/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a distribution.
		 * Delete 2017-10-30/distribution/{Id}
		 * @param {string} Id The distribution ID. 
		 * @return {void} 
		 */
		DeleteDistribution2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2017-10-30/distribution/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the information about a distribution.
		 * Get 2017-10-30/distribution/{Id}
		 * @param {string} Id The distribution's ID.
		 * @return {void} Success
		 */
		GetDistribution2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/distribution/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a field-level encryption configuration.
		 * Delete 2017-10-30/field-level-encryption/{Id}
		 * @param {string} Id The ID of the configuration you want to delete from CloudFront.
		 * @return {void} 
		 */
		DeleteFieldLevelEncryptionConfig2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2017-10-30/field-level-encryption/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the field-level encryption configuration information.
		 * Get 2017-10-30/field-level-encryption/{Id}
		 * @param {string} Id Request the ID for the field-level encryption configuration information.
		 * @return {void} Success
		 */
		GetFieldLevelEncryption2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/field-level-encryption/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a field-level encryption profile.
		 * Delete 2017-10-30/field-level-encryption-profile/{Id}
		 * @param {string} Id Request the ID of the profile you want to delete from CloudFront.
		 * @return {void} 
		 */
		DeleteFieldLevelEncryptionProfile2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2017-10-30/field-level-encryption-profile/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the field-level encryption profile information.
		 * Get 2017-10-30/field-level-encryption-profile/{Id}
		 * @param {string} Id Get the ID for the field-level encryption profile information.
		 * @return {void} Success
		 */
		GetFieldLevelEncryptionProfile2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/field-level-encryption-profile/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a public key you previously added to CloudFront.
		 * Delete 2017-10-30/public-key/{Id}
		 * @param {string} Id The ID of the public key you want to remove from CloudFront.
		 * @return {void} 
		 */
		DeletePublicKey2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2017-10-30/public-key/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the public key information.
		 * Get 2017-10-30/public-key/{Id}
		 * @param {string} Id Request the ID for the public key.
		 * @return {void} Success
		 */
		GetPublicKey2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/public-key/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
		 * Delete 2017-10-30/streaming-distribution/{Id}
		 * @param {string} Id The distribution ID. 
		 * @return {void} 
		 */
		DeleteStreamingDistribution2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2017-10-30/streaming-distribution/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a specified RTMP distribution, including the distribution configuration.
		 * Get 2017-10-30/streaming-distribution/{Id}
		 * @param {string} Id The streaming distribution's ID.
		 * @return {void} Success
		 */
		GetStreamingDistribution2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/streaming-distribution/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the configuration information about an origin access identity.
		 * Get 2017-10-30/origin-access-identity/cloudfront/{Id}/config
		 * @param {string} Id The identity's ID. 
		 * @return {void} Success
		 */
		GetCloudFrontOriginAccessIdentityConfig2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/origin-access-identity/cloudfront/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the configuration information about a distribution.
		 * Get 2017-10-30/distribution/{Id}/config
		 * @param {string} Id The distribution's ID.
		 * @return {void} Success
		 */
		GetDistributionConfig2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/distribution/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the field-level encryption configuration information.
		 * Get 2017-10-30/field-level-encryption/{Id}/config
		 * @param {string} Id Request the ID for the field-level encryption configuration information.
		 * @return {void} Success
		 */
		GetFieldLevelEncryptionConfig2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/field-level-encryption/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the field-level encryption profile configuration information.
		 * Get 2017-10-30/field-level-encryption-profile/{Id}/config
		 * @param {string} Id Get the ID for the field-level encryption profile configuration information.
		 * @return {void} Success
		 */
		GetFieldLevelEncryptionProfileConfig2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/field-level-encryption-profile/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the information about an invalidation.
		 * Get 2017-10-30/distribution/{DistributionId}/invalidation/{Id}
		 * @param {string} DistributionId The distribution's ID.
		 * @param {string} Id The identifier for the invalidation request, for example, <code>IDFDVBD632BHDS5</code>.
		 * @return {void} Success
		 */
		GetInvalidation2017_10_30(DistributionId: string, Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/distribution/' + (DistributionId == null ? '' : encodeURIComponent(DistributionId)) + '/invalidation/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return public key configuration informaation
		 * Get 2017-10-30/public-key/{Id}/config
		 * @param {string} Id Request the ID for the public key configuration.
		 * @return {void} Success
		 */
		GetPublicKeyConfig2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/public-key/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the configuration information about a streaming distribution.
		 * Get 2017-10-30/streaming-distribution/{Id}/config
		 * @param {string} Id The streaming distribution's ID.
		 * @return {void} Success
		 */
		GetStreamingDistributionConfig2017_10_30(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/streaming-distribution/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List the distributions that are associated with a specified AWS WAF web ACL.
		 * Get 2017-10-30/distributionsByWebACLId/{WebACLId}
		 * @param {string} Marker Use <code>Marker</code> and <code>MaxItems</code> to control pagination of results. If you have more than <code>MaxItems</code> distributions that satisfy the request, the response includes a <code>NextMarker</code> element. To get the next page of results, submit another request. For the value of <code>Marker</code>, specify the value of <code>NextMarker</code> from the last response. (For the first request, omit <code>Marker</code>.) 
		 * @param {string} MaxItems The maximum number of distributions that you want CloudFront to return in the response body. The maximum and default values are both 100.
		 * @param {string} WebACLId The ID of the AWS WAF web ACL that you want to list the associated distributions. If you specify "null" for the ID, the request returns a list of the distributions that aren't associated with a web ACL. 
		 * @return {void} Success
		 */
		ListDistributionsByWebACLId2017_10_30(Marker: string | null | undefined, MaxItems: string | null | undefined, WebACLId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/distributionsByWebACLId/' + (WebACLId == null ? '' : encodeURIComponent(WebACLId)) + '?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List tags for a CloudFront resource.
		 * Get 2017-10-30/tagging#Resource
		 * @param {string} Resource  An ARN of a CloudFront resource.
		 * @return {void} Success
		 */
		ListTagsForResource2017_10_30(Resource: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2017-10-30/tagging#Resource?Resource=' + (Resource == null ? '' : encodeURIComponent(Resource)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum TagResource2017_10_30Operation { Tag = 0 }

	export enum UntagResource2017_10_30Operation { Untag = 0 }

}

