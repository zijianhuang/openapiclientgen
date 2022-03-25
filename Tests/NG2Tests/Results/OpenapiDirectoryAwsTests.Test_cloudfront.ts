import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** The returned result of the corresponding request. */
	export interface CreateCloudFrontOriginAccessIdentityResult {

		/** CloudFront origin access identity. */
		CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
	}


	/** CloudFront origin access identity. */
	export interface CloudFrontOriginAccessIdentity {
		Id: string;
		S3CanonicalUserId: string;

		/** Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource. */
		CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
	}


	/** Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.  */
	export interface CloudFrontOriginAccessIdentityConfig {
		CallerReference: string;
		Comment: string;
	}

	export interface CloudFrontOriginAccessIdentityAlreadyExists {
	}

	export interface MissingBody {
	}

	export interface TooManyCloudFrontOriginAccessIdentities {
	}

	export interface InvalidArgument {
	}

	export interface InconsistentQuantities {
	}


	/** The returned result of the corresponding request. */
	export interface CreateDistributionResult {

		/** A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. */
		Distribution?: Distribution;
	}


	/** A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. */
	export interface Distribution {
		Id: string;
		ARN: string;
		Status: string;
		LastModifiedTime: Date;
		InProgressInvalidationBatches: number;
		DomainName: string;

		/**
		 * <p>A complex type that lists the AWS accounts, if any, that you included in the <code>TrustedSigners</code> complex type for this distribution. These are the accounts that you want to allow to create signed URLs for private content.</p> <p>The <code>Signer</code> complex type lists the AWS account number of the trusted signer or <code>self</code> if the signer is the AWS account that created the distribution. The <code>Signer</code> element also includes the IDs of any active CloudFront key pairs that are associated with the trusted signer's AWS account. If no <code>KeyPairId</code> element appears for a <code>Signer</code>, that signer can't create signed URLs. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
		 * Required
		 */
		ActiveTrustedSigners: ActiveTrustedSigners;

		/**
		 * A distribution configuration.
		 * Required
		 */
		DistributionConfig: DistributionConfig;
		AliasICPRecordals?: Array<AliasICPRecordal>;
	}


	/** <p>A complex type that lists the AWS accounts, if any, that you included in the <code>TrustedSigners</code> complex type for this distribution. These are the accounts that you want to allow to create signed URLs for private content.</p> <p>The <code>Signer</code> complex type lists the AWS account number of the trusted signer or <code>self</code> if the signer is the AWS account that created the distribution. The <code>Signer</code> element also includes the IDs of any active CloudFront key pairs that are associated with the trusted signer's AWS account. If no <code>KeyPairId</code> element appears for a <code>Signer</code>, that signer can't create signed URLs. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface ActiveTrustedSigners {
		Enabled: boolean;
		Quantity: number;
		Items?: Array<Signer>;
	}


	/** A complex type that lists the AWS accounts that were included in the <code>TrustedSigners</code> complex type, as well as their active CloudFront key pair IDs, if any.  */
	export interface Signer {
		AwsAccountNumber?: string;

		/** <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ActiveTrustedSigners.html">ActiveTrustedSigners</a>.</p> */
		KeyPairIds?: KeyPairIds;
	}


	/** <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ActiveTrustedSigners.html">ActiveTrustedSigners</a>.</p> */
	export interface KeyPairIds {
		Quantity: number;
		Items?: Array<string>;
	}


	/** A distribution configuration. */
	export interface DistributionConfig {
		CallerReference: string;

		/** A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution. */
		Aliases?: Aliases;
		DefaultRootObject?: string;

		/**
		 * A complex type that contains information about origins and origin groups for this distribution.
		 * Required
		 */
		Origins: Origins;

		/** A complex data type for the origin groups specified for a distribution. */
		OriginGroups?: OriginGroups;

		/**
		 * A complex type that describes the default cache behavior if you don’t specify a <code>CacheBehavior</code> element or if request URLs don’t match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
		 * Required
		 */
		DefaultCacheBehavior: DefaultCacheBehavior;

		/** A complex type that contains zero or more <code>CacheBehavior</code> elements. */
		CacheBehaviors?: CacheBehaviors;

		/** <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
		CustomErrorResponses?: CustomErrorResponses;
		Comment: string;

		/** A complex type that controls whether access logs are written for the distribution. */
		Logging?: LoggingConfig;
		PriceClass?: DistributionConfigPriceClass;
		Enabled: boolean;

		/** <p>A complex type that determines the distribution’s SSL/TLS configuration for communicating with viewers.</p> <p>If the distribution doesn’t use <code>Aliases</code> (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>—set <code>CloudFrontDefaultCertificate</code> to <code>true</code> and leave all other fields empty.</p> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), use the fields in this type to specify the following settings:</p> <ul> <li> <p>Which viewers the distribution accepts HTTPS connections from: only viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a> (recommended), or all viewers including those that don’t support SNI.</p> <ul> <li> <p>To accept HTTPS connections from only viewers that support SNI, set <code>SSLSupportMethod</code> to <code>sni-only</code>. This is recommended. Most browsers and clients released after 2010 support SNI. </p> </li> <li> <p>To accept HTTPS connections from all viewers, including those that don’t support SNI, set <code>SSLSupportMethod</code> to <code>vip</code>. This is not recommended, and results in additional monthly charges from CloudFront. </p> </li> </ul> </li> <li> <p>The minimum SSL/TLS protocol version that the distribution can use to communicate with viewers. To specify a minimum version, choose a value for <code>MinimumProtocolVersion</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </li> <li> <p>The location of the SSL/TLS certificate, <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">AWS Certificate Manager (ACM)</a> (recommended) or <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">AWS Identity and Access Management (AWS IAM)</a>. You specify the location by setting a value in one of the following fields (not both):</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> </ul> </li> </ul> <p>All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use <code>ViewerProtocolPolicy</code> in the <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use <code>CustomOriginConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html">Using HTTPS with CloudFront</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html"> Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
		ViewerCertificate?: ViewerCertificate;

		/** A complex type that identifies ways in which you want to restrict distribution of your content. */
		Restrictions?: Restrictions;
		WebACLId?: string;
		HttpVersion?: DistributionConfigHttpVersion;
		IsIPV6Enabled?: boolean;
	}


	/** A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.  */
	export interface Aliases {
		Quantity: number;
		Items?: Array<string>;
	}


	/** A complex type that contains information about origins and origin groups for this distribution.  */
	export interface Origins {
		Quantity: number;
		Items: Array<Origin>;
	}


	/** <p>An origin.</p> <p>An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:</p> <ul> <li> <p>Use the <code>S3OriginConfig</code> type to specify an Amazon S3 bucket that is <i> <b>not</b> </i> configured with static website hosting.</p> </li> <li> <p>Use the <code>CustomOriginConfig</code> type to specify various other kinds of content containers or HTTP servers, including:</p> <ul> <li> <p>An Amazon S3 bucket that is configured with static website hosting</p> </li> <li> <p>An Elastic Load Balancing load balancer</p> </li> <li> <p>An AWS Elemental MediaPackage origin</p> </li> <li> <p>An AWS Elemental MediaStore container</p> </li> <li> <p>Any other HTTP server, running on an Amazon EC2 instance or any other kind of host</p> </li> </ul> </li> </ul> <p>For the current maximum number of origins that you can specify per distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions">General Quotas on Web Distributions</a> in the <i>Amazon CloudFront Developer Guide</i> (quotas were formerly referred to as limits).</p> */
	export interface Origin {
		Id: string;
		DomainName: string;
		OriginPath?: string;

		/** A complex type that contains the list of Custom Headers for each origin. */
		CustomHeaders?: CustomHeaders;

		/** A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin or an S3 bucket that is configured as a website endpoint, use the <code>CustomOriginConfig</code> element instead. */
		S3OriginConfig?: S3OriginConfig;

		/** A custom origin. A custom origin is any origin that is <i>not</i> an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> <i>is</i> a custom origin. */
		CustomOriginConfig?: CustomOriginConfig;
		ConnectionAttempts?: number;
		ConnectionTimeout?: number;
	}


	/** A complex type that contains the list of Custom Headers for each origin.  */
	export interface CustomHeaders {
		Quantity: number;
		Items?: Array<OriginCustomHeader>;
	}


	/** A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution.  */
	export interface OriginCustomHeader {
		HeaderName: string;
		HeaderValue: string;
	}


	/** A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin or an S3 bucket that is configured as a website endpoint, use the <code>CustomOriginConfig</code> element instead. */
	export interface S3OriginConfig {
		OriginAccessIdentity: string;
	}


	/** A custom origin. A custom origin is any origin that is <i>not</i> an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> <i>is</i> a custom origin. */
	export interface CustomOriginConfig {
		HTTPPort: number;
		HTTPSPort: number;
		OriginProtocolPolicy: CustomOriginConfigOriginProtocolPolicy;

		/** A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin. */
		OriginSslProtocols?: OriginSslProtocols;
		OriginReadTimeout?: number;
		OriginKeepaliveTimeout?: number;
	}

	export enum CustomOriginConfigOriginProtocolPolicy { http_only = 0, match_viewer = 1, https_only = 2 }


	/** A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.  */
	export interface OriginSslProtocols {
		Quantity: number;
		Items: Array<SslProtocol>;
	}

	export enum SslProtocol { SSLv3 = 0, TLSv1 = 1, TLSv1_1 = 2, TLSv1_2 = 3 }


	/** A complex data type for the origin groups specified for a distribution. */
	export interface OriginGroups {
		Quantity: number;

		/** List of origin groups for a distribution. */
		Items?: Array<OriginGroup>;
	}


	/** An origin group includes two origins (a primary origin and a second origin to failover to) and a failover criteria that you specify. You create an origin group to support origin failover in CloudFront. When you create or update a distribution, you can specifiy the origin group instead of a single origin, and CloudFront will failover from the primary origin to the second origin under the failover conditions that you've chosen. */
	export interface OriginGroup {
		Id: string;

		/**
		 * A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin.
		 * Required
		 */
		FailoverCriteria: OriginGroupFailoverCriteria;

		/**
		 * A complex data type for the origins included in an origin group.
		 * Required
		 */
		Members: OriginGroupMembers;
	}


	/** A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin. */
	export interface OriginGroupFailoverCriteria {

		/**
		 * A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin.
		 * Required
		 */
		StatusCodes: StatusCodes;
	}


	/** A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin. */
	export interface StatusCodes {
		Quantity: number;

		/**
		 * List of status codes for origin failover.
		 * Required
		 * Minimum items: 1
		 */
		Items: Array<number>;
	}


	/** A complex data type for the origins included in an origin group. */
	export interface OriginGroupMembers {
		Quantity: number;

		/**
		 * List of origins in an origin group.
		 * Required
		 * Minimum items: 2
		 * Maximum items: 2
		 */
		Items: Array<OriginGroupMember>;
	}


	/** An origin in an origin group. */
	export interface OriginGroupMember {
		OriginId: string;
	}


	/** A complex type that describes the default cache behavior if you don’t specify a <code>CacheBehavior</code> element or if request URLs don’t match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior. */
	export interface DefaultCacheBehavior {
		TargetOriginId: string;

		/**
		 * A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
		 * Required
		 */
		ForwardedValues: ForwardedValues;

		/**
		 * <p>A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content.</p> <p>If you want to require signed URLs in requests for objects in the target origin that match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and <code>Items</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i> Amazon CloudFront Developer Guide</i>.</p> <p>If you don't want to require signed URLs in requests for objects that match <code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>.</p> <p>To add, change, or remove one or more trusted signers, change <code>Enabled</code> to <code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as applicable, and specify all of the trusted signers that you want to include in the updated distribution.</p> <p>For more information about updating the distribution configuration, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/DistributionConfig.html">DistributionConfig</a> in the <i>Amazon CloudFront API Reference</i>.</p>
		 * Required
		 */
		TrustedSigners: TrustedSigners;
		ViewerProtocolPolicy: DefaultCacheBehaviorViewerProtocolPolicy;
		MinTTL: number;

		/** <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p> */
		AllowedMethods?: AllowedMethods;
		SmoothStreaming?: boolean;
		DefaultTTL?: number;
		MaxTTL?: number;
		Compress?: boolean;

		/** <p>A complex type that specifies a list of Lambda functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with the Lambda function only once.</p> <p>If you don't want to invoke any Lambda functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>. </p> */
		LambdaFunctionAssociations?: LambdaFunctionAssociations;
		FieldLevelEncryptionId?: string;
	}


	/** A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers. */
	export interface ForwardedValues {
		QueryString: boolean;

		/**
		 * A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.
		 * Required
		 */
		Cookies: CookiePreference;

		/** <p>A complex type that specifies the request headers, if any, that you want CloudFront to base caching on for this cache behavior. </p> <p>For the headers that you specify, CloudFront caches separate versions of a specified object based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of either <code>acme</code> or <code>apex</code>, and you configure CloudFront to cache your content based on values in the <code>product</code> header. CloudFront forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. For more information about caching based on header values, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html">How CloudFront Forwards and Caches Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
		Headers?: Headers;

		/** A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior. */
		QueryStringCacheKeys?: QueryStringCacheKeys;
	}


	/** A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface CookiePreference {
		Forward: CookiePreferenceForward;

		/** A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html"> Caching Content Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>. */
		WhitelistedNames?: CookieNames;
	}

	export enum CookiePreferenceForward { none = 0, whitelist = 1, all = 2 }


	/** A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html"> Caching Content Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface CookieNames {
		Quantity: number;
		Items?: Array<string>;
	}


	/** <p>A complex type that specifies the request headers, if any, that you want CloudFront to base caching on for this cache behavior. </p> <p>For the headers that you specify, CloudFront caches separate versions of a specified object based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of either <code>acme</code> or <code>apex</code>, and you configure CloudFront to cache your content based on values in the <code>product</code> header. CloudFront forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. For more information about caching based on header values, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html">How CloudFront Forwards and Caches Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface Headers {
		Quantity: number;
		Items?: Array<string>;
	}


	/** A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior.  */
	export interface QueryStringCacheKeys {
		Quantity: number;
		Items?: Array<string>;
	}


	/** <p>A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content.</p> <p>If you want to require signed URLs in requests for objects in the target origin that match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and <code>Items</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i> Amazon CloudFront Developer Guide</i>.</p> <p>If you don't want to require signed URLs in requests for objects that match <code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>.</p> <p>To add, change, or remove one or more trusted signers, change <code>Enabled</code> to <code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as applicable, and specify all of the trusted signers that you want to include in the updated distribution.</p> <p>For more information about updating the distribution configuration, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/DistributionConfig.html">DistributionConfig</a> in the <i>Amazon CloudFront API Reference</i>.</p> */
	export interface TrustedSigners {
		Enabled: boolean;
		Quantity: number;
		Items?: Array<string>;
	}

	export enum DefaultCacheBehaviorViewerProtocolPolicy { allow_all = 0, https_only = 1, redirect_to_https = 2 }


	/** <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p> */
	export interface AllowedMethods {
		Quantity: number;
		Items: Array<Method>;

		/** <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly. </p> */
		CachedMethods?: CachedMethods;
	}

	export enum Method { GET = 0, HEAD = 1, POST = 2, PUT = 3, PATCH = 4, OPTIONS = 5, DELETE = 6 }


	/** <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly. </p> */
	export interface CachedMethods {
		Quantity: number;
		Items: Array<Method>;
	}


	/** <p>A complex type that specifies a list of Lambda functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with the Lambda function only once.</p> <p>If you don't want to invoke any Lambda functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>. </p> */
	export interface LambdaFunctionAssociations {
		Quantity: number;
		Items?: Array<LambdaFunctionAssociation>;
	}


	/** A complex type that contains a Lambda function association. */
	export interface LambdaFunctionAssociation {
		LambdaFunctionARN: string;
		EventType: LambdaFunctionAssociationEventType;
		IncludeBody?: boolean;
	}

	export enum LambdaFunctionAssociationEventType { viewer_request = 0, viewer_response = 1, origin_request = 2, origin_response = 3 }


	/** A complex type that contains zero or more <code>CacheBehavior</code> elements.  */
	export interface CacheBehaviors {
		Quantity: number;
		Items?: Array<CacheBehavior>;
	}


	/** <p>A complex type that describes how CloudFront processes requests.</p> <p>You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to serve objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.</p> <p>For the current quota (formerly known as limit) on the number of cache behaviors that you can add to a distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you don’t want to specify any cache behaviors, include only an empty <code>CacheBehaviors</code> element. Don’t include an empty <code>CacheBehavior</code> element because this is invalid.</p> <p>To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty <code>CacheBehaviors</code> element.</p> <p>To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.</p> <p>For more information about cache behaviors, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behavior Settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CacheBehavior {
		PathPattern: string;
		TargetOriginId: string;

		/**
		 * A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
		 * Required
		 */
		ForwardedValues: ForwardedValues;

		/**
		 * <p>A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content.</p> <p>If you want to require signed URLs in requests for objects in the target origin that match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and <code>Items</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i> Amazon CloudFront Developer Guide</i>.</p> <p>If you don't want to require signed URLs in requests for objects that match <code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>.</p> <p>To add, change, or remove one or more trusted signers, change <code>Enabled</code> to <code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as applicable, and specify all of the trusted signers that you want to include in the updated distribution.</p> <p>For more information about updating the distribution configuration, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/DistributionConfig.html">DistributionConfig</a> in the <i>Amazon CloudFront API Reference</i>.</p>
		 * Required
		 */
		TrustedSigners: TrustedSigners;
		ViewerProtocolPolicy: CacheBehaviorViewerProtocolPolicy;
		MinTTL: number;

		/** <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p> */
		AllowedMethods?: AllowedMethods;
		SmoothStreaming?: boolean;
		DefaultTTL?: number;
		MaxTTL?: number;
		Compress?: boolean;

		/** <p>A complex type that specifies a list of Lambda functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with the Lambda function only once.</p> <p>If you don't want to invoke any Lambda functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>. </p> */
		LambdaFunctionAssociations?: LambdaFunctionAssociations;
		FieldLevelEncryptionId?: string;
	}

	export enum CacheBehaviorViewerProtocolPolicy { allow_all = 0, https_only = 1, redirect_to_https = 2 }


	/** <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CustomErrorResponses {
		Quantity: number;
		Items?: Array<CustomErrorResponse>;
	}


	/** <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer. </p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CustomErrorResponse {
		ErrorCode: number;
		ResponsePagePath?: string;
		ResponseCode?: string;
		ErrorCachingMinTTL?: number;
	}


	/** A complex type that controls whether access logs are written for the distribution. */
	export interface LoggingConfig {
		Enabled: boolean;
		IncludeCookies: boolean;
		Bucket: string;
		Prefix: string;
	}

	export enum DistributionConfigPriceClass { PriceClass_100 = 0, PriceClass_200 = 1, PriceClass_All = 2 }


	/** <p>A complex type that determines the distribution’s SSL/TLS configuration for communicating with viewers.</p> <p>If the distribution doesn’t use <code>Aliases</code> (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>—set <code>CloudFrontDefaultCertificate</code> to <code>true</code> and leave all other fields empty.</p> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), use the fields in this type to specify the following settings:</p> <ul> <li> <p>Which viewers the distribution accepts HTTPS connections from: only viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a> (recommended), or all viewers including those that don’t support SNI.</p> <ul> <li> <p>To accept HTTPS connections from only viewers that support SNI, set <code>SSLSupportMethod</code> to <code>sni-only</code>. This is recommended. Most browsers and clients released after 2010 support SNI. </p> </li> <li> <p>To accept HTTPS connections from all viewers, including those that don’t support SNI, set <code>SSLSupportMethod</code> to <code>vip</code>. This is not recommended, and results in additional monthly charges from CloudFront. </p> </li> </ul> </li> <li> <p>The minimum SSL/TLS protocol version that the distribution can use to communicate with viewers. To specify a minimum version, choose a value for <code>MinimumProtocolVersion</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </li> <li> <p>The location of the SSL/TLS certificate, <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">AWS Certificate Manager (ACM)</a> (recommended) or <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">AWS Identity and Access Management (AWS IAM)</a>. You specify the location by setting a value in one of the following fields (not both):</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> </ul> </li> </ul> <p>All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use <code>ViewerProtocolPolicy</code> in the <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use <code>CustomOriginConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html">Using HTTPS with CloudFront</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html"> Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface ViewerCertificate {
		CloudFrontDefaultCertificate?: boolean;
		IAMCertificateId?: string;
		ACMCertificateArn?: string;
		SSLSupportMethod?: ViewerCertificateSSLSupportMethod;
		MinimumProtocolVersion?: ViewerCertificateMinimumProtocolVersion;
		Certificate?: string;
		CertificateSource?: ViewerCertificateCertificateSource;
	}

	export enum ViewerCertificateSSLSupportMethod { sni_only = 0, vip = 1 }

	export enum ViewerCertificateMinimumProtocolVersion { SSLv3 = 0, TLSv1 = 1, TLSv1_2016 = 2, TLSv1_1_2016 = 3, TLSv1_2_2018 = 4 }

	export enum ViewerCertificateCertificateSource { cloudfront = 0, iam = 1, acm = 2 }


	/** A complex type that identifies ways in which you want to restrict distribution of your content. */
	export interface Restrictions {

		/**
		 * A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.
		 * Required
		 */
		GeoRestriction: GeoRestriction;
	}


	/** A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.  */
	export interface GeoRestriction {
		RestrictionType: GeoRestrictionRestrictionType;
		Quantity: number;
		Items?: Array<string>;
	}

	export enum GeoRestrictionRestrictionType { blacklist = 0, whitelist = 1, none = 2 }

	export enum DistributionConfigHttpVersion { http1_1 = 0, http2 = 1 }


	/** <p>AWS services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions. The status is returned in the CloudFront response; you can't configure it yourself.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with AWS services in China</i>.</p> */
	export interface AliasICPRecordal {
		CNAME?: string;
		ICPRecordalStatus?: AliasICPRecordalICPRecordalStatus;
	}

	export enum AliasICPRecordalICPRecordalStatus { APPROVED = 0, SUSPENDED = 1, PENDING = 2 }

	export enum PriceClass { PriceClass_100 = 0, PriceClass_200 = 1, PriceClass_All = 2 }

	export enum HttpVersion { http1_1 = 0, http2 = 1 }

	export interface CNAMEAlreadyExists {
	}

	export interface DistributionAlreadyExists {
	}

	export interface InvalidOrigin {
	}

	export interface InvalidOriginAccessIdentity {
	}

	export interface AccessDenied {
	}

	export interface TooManyTrustedSigners {
	}

	export interface TrustedSignerDoesNotExist {
	}

	export interface InvalidViewerCertificate {
	}

	export interface InvalidMinimumProtocolVersion {
	}

	export interface TooManyDistributionCNAMEs {
	}

	export interface TooManyDistributions {
	}

	export interface InvalidDefaultRootObject {
	}

	export interface InvalidRelativePath {
	}

	export interface InvalidErrorCode {
	}

	export interface InvalidResponseCode {
	}

	export interface InvalidRequiredProtocol {
	}

	export interface NoSuchOrigin {
	}

	export interface TooManyOrigins {
	}

	export interface TooManyOriginGroupsPerDistribution {
	}

	export interface TooManyCacheBehaviors {
	}

	export interface TooManyCookieNamesInWhiteList {
	}

	export interface InvalidForwardCookies {
	}

	export interface TooManyHeadersInForwardedValues {
	}

	export interface InvalidHeadersForS3Origin {
	}

	export interface TooManyCertificates {
	}

	export interface InvalidLocationCode {
	}

	export interface InvalidGeoRestrictionParameter {
	}

	export interface InvalidProtocolSettings {
	}

	export interface InvalidTTLOrder {
	}

	export interface InvalidWebACLId {
	}

	export interface TooManyOriginCustomHeaders {
	}

	export interface TooManyQueryStringParameters {
	}

	export interface InvalidQueryStringParameters {
	}

	export interface TooManyDistributionsWithLambdaAssociations {
	}

	export interface TooManyLambdaFunctionAssociations {
	}

	export interface InvalidLambdaFunctionAssociation {
	}

	export interface InvalidOriginReadTimeout {
	}

	export interface InvalidOriginKeepaliveTimeout {
	}

	export interface NoSuchFieldLevelEncryptionConfig {
	}

	export interface IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior {
	}

	export interface TooManyDistributionsAssociatedToFieldLevelEncryptionConfig {
	}


	/** The returned result of the corresponding request.  */
	export interface CreateDistributionWithTagsResult {

		/** A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. */
		Distribution?: Distribution;
	}


	/**  A complex type that contains zero or more <code>Tag</code> elements. */
	export interface Tags {
		Items?: Array<Tag>;
	}


	/**  A complex type that contains <code>Tag</code> key and <code>Tag</code> value. */
	export interface Tag {

		/**
		 * <p> A string that contains <code>Tag</code> key.</p> <p>The string length should be between 1 and 128 characters. Valid characters include <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters <code>_ - . : / = + @</code>.</p>
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$
		 */
		Key: string;
		Value?: string;
	}

	export interface InvalidTagging {
	}

	export interface CreateFieldLevelEncryptionConfigResult {

		/** A complex data type that includes the profile configurations and other options specified for field-level encryption. */
		FieldLevelEncryption?: FieldLevelEncryption;
	}


	/** A complex data type that includes the profile configurations and other options specified for field-level encryption.  */
	export interface FieldLevelEncryption {
		Id: string;
		LastModifiedTime: Date;

		/**
		 * A complex data type that includes the profile configurations specified for field-level encryption.
		 * Required
		 */
		FieldLevelEncryptionConfig: FieldLevelEncryptionConfig;
	}


	/** A complex data type that includes the profile configurations specified for field-level encryption.  */
	export interface FieldLevelEncryptionConfig {
		CallerReference: string;
		Comment?: string;

		/** Configuration for query argument-profile mapping for field-level encryption. */
		QueryArgProfileConfig?: QueryArgProfileConfig;

		/** The configuration for a field-level encryption content type-profile mapping. */
		ContentTypeProfileConfig?: ContentTypeProfileConfig;
	}


	/** Configuration for query argument-profile mapping for field-level encryption. */
	export interface QueryArgProfileConfig {
		ForwardWhenQueryArgProfileIsUnknown: boolean;

		/** Query argument-profile mapping for field-level encryption. */
		QueryArgProfiles?: QueryArgProfiles;
	}


	/** Query argument-profile mapping for field-level encryption. */
	export interface QueryArgProfiles {
		Quantity: number;
		Items?: Array<QueryArgProfile>;
	}


	/** Query argument-profile mapping for field-level encryption. */
	export interface QueryArgProfile {
		QueryArg: string;
		ProfileId: string;
	}


	/** The configuration for a field-level encryption content type-profile mapping.  */
	export interface ContentTypeProfileConfig {
		ForwardWhenContentTypeIsUnknown: boolean;

		/** Field-level encryption content type-profile. */
		ContentTypeProfiles?: ContentTypeProfiles;
	}


	/** Field-level encryption content type-profile.  */
	export interface ContentTypeProfiles {
		Quantity: number;
		Items?: Array<ContentTypeProfile>;
	}


	/** A field-level encryption content type profile.  */
	export interface ContentTypeProfile {
		Format: ContentTypeProfileFormat;
		ProfileId?: string;
		ContentType: string;
	}

	export enum ContentTypeProfileFormat { URLEncoded = 0 }

	export interface NoSuchFieldLevelEncryptionProfile {
	}

	export interface FieldLevelEncryptionConfigAlreadyExists {
	}

	export interface TooManyFieldLevelEncryptionConfigs {
	}

	export interface TooManyFieldLevelEncryptionQueryArgProfiles {
	}

	export interface TooManyFieldLevelEncryptionContentTypeProfiles {
	}

	export interface QueryArgProfileEmpty {
	}

	export interface CreateFieldLevelEncryptionProfileResult {

		/** A complex data type for field-level encryption profiles. */
		FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
	}


	/** A complex data type for field-level encryption profiles. */
	export interface FieldLevelEncryptionProfile {
		Id: string;
		LastModifiedTime: Date;

		/**
		 * A complex data type of profiles for the field-level encryption.
		 * Required
		 */
		FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;
	}


	/** A complex data type of profiles for the field-level encryption. */
	export interface FieldLevelEncryptionProfileConfig {
		Name: string;
		CallerReference: string;
		Comment?: string;

		/**
		 * Complex data type for field-level encryption profiles that includes all of the encryption entities.
		 * Required
		 */
		EncryptionEntities: EncryptionEntities;
	}


	/** Complex data type for field-level encryption profiles that includes all of the encryption entities.  */
	export interface EncryptionEntities {
		Quantity: number;
		Items?: Array<EncryptionEntity>;
	}


	/** Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications.  */
	export interface EncryptionEntity {
		PublicKeyId: string;
		ProviderId: string;

		/**
		 * A complex data type that includes the field patterns to match for field-level encryption.
		 * Required
		 */
		FieldPatterns: FieldPatterns;
	}


	/** A complex data type that includes the field patterns to match for field-level encryption. */
	export interface FieldPatterns {
		Quantity: number;
		Items?: Array<string>;
	}

	export interface NoSuchPublicKey {
	}

	export interface FieldLevelEncryptionProfileAlreadyExists {
	}

	export interface FieldLevelEncryptionProfileSizeExceeded {
	}

	export interface TooManyFieldLevelEncryptionProfiles {
	}

	export interface TooManyFieldLevelEncryptionEncryptionEntities {
	}

	export interface TooManyFieldLevelEncryptionFieldPatterns {
	}


	/** The returned result of the corresponding request. */
	export interface CreateInvalidationResult {

		/** An invalidation. */
		Invalidation?: Invalidation;
	}


	/** An invalidation.  */
	export interface Invalidation {
		Id: string;
		Status: string;
		CreateTime: Date;

		/**
		 * An invalidation batch.
		 * Required
		 */
		InvalidationBatch: InvalidationBatch;
	}


	/** An invalidation batch. */
	export interface InvalidationBatch {

		/**
		 * A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>.
		 * Required
		 */
		Paths: Paths;
		CallerReference: string;
	}


	/** A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>.  */
	export interface Paths {
		Quantity: number;
		Items?: Array<string>;
	}

	export interface NoSuchDistribution {
	}

	export interface BatchTooLarge {
	}

	export interface TooManyInvalidationsInProgress {
	}

	export interface CreatePublicKeyResult {

		/** A complex data type of public keys you add to CloudFront to use with features like field-level encryption. */
		PublicKey?: PublicKey;
	}


	/** A complex data type of public keys you add to CloudFront to use with features like field-level encryption. */
	export interface PublicKey {
		Id: string;
		CreatedTime: Date;

		/**
		 * Information about a public key you add to CloudFront to use with features like field-level encryption.
		 * Required
		 */
		PublicKeyConfig: PublicKeyConfig;
	}


	/** Information about a public key you add to CloudFront to use with features like field-level encryption. */
	export interface PublicKeyConfig {
		CallerReference: string;
		Name: string;
		EncodedKey: string;
		Comment?: string;
	}

	export interface PublicKeyAlreadyExists {
	}

	export interface TooManyPublicKeys {
	}


	/** The returned result of the corresponding request. */
	export interface CreateStreamingDistributionResult {

		/** A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery. */
		StreamingDistribution?: StreamingDistribution;
	}


	/** A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery. */
	export interface StreamingDistribution {
		Id: string;
		ARN: string;
		Status: string;
		LastModifiedTime?: Date;
		DomainName: string;

		/**
		 * <p>A complex type that lists the AWS accounts, if any, that you included in the <code>TrustedSigners</code> complex type for this distribution. These are the accounts that you want to allow to create signed URLs for private content.</p> <p>The <code>Signer</code> complex type lists the AWS account number of the trusted signer or <code>self</code> if the signer is the AWS account that created the distribution. The <code>Signer</code> element also includes the IDs of any active CloudFront key pairs that are associated with the trusted signer's AWS account. If no <code>KeyPairId</code> element appears for a <code>Signer</code>, that signer can't create signed URLs. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
		 * Required
		 */
		ActiveTrustedSigners: ActiveTrustedSigners;

		/**
		 * The RTMP distribution's configuration information.
		 * Required
		 */
		StreamingDistributionConfig: StreamingDistributionConfig;
	}


	/** The RTMP distribution's configuration information. */
	export interface StreamingDistributionConfig {
		CallerReference: string;

		/**
		 * A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.
		 * Required
		 */
		S3Origin: S3Origin;

		/** A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution. */
		Aliases?: Aliases;
		Comment: string;

		/** A complex type that controls whether access logs are written for this streaming distribution. */
		Logging?: StreamingLoggingConfig;

		/**
		 * <p>A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content.</p> <p>If you want to require signed URLs in requests for objects in the target origin that match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and <code>Items</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i> Amazon CloudFront Developer Guide</i>.</p> <p>If you don't want to require signed URLs in requests for objects that match <code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>.</p> <p>To add, change, or remove one or more trusted signers, change <code>Enabled</code> to <code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as applicable, and specify all of the trusted signers that you want to include in the updated distribution.</p> <p>For more information about updating the distribution configuration, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/DistributionConfig.html">DistributionConfig</a> in the <i>Amazon CloudFront API Reference</i>.</p>
		 * Required
		 */
		TrustedSigners: TrustedSigners;
		PriceClass?: DistributionConfigPriceClass;
		Enabled: boolean;
	}


	/** A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution. */
	export interface S3Origin {
		DomainName: string;
		OriginAccessIdentity: string;
	}


	/** A complex type that controls whether access logs are written for this streaming distribution. */
	export interface StreamingLoggingConfig {
		Enabled: boolean;
		Bucket: string;
		Prefix: string;
	}

	export interface StreamingDistributionAlreadyExists {
	}

	export interface TooManyStreamingDistributionCNAMEs {
	}

	export interface TooManyStreamingDistributions {
	}


	/** The returned result of the corresponding request.  */
	export interface CreateStreamingDistributionWithTagsResult {

		/** A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery. */
		StreamingDistribution?: StreamingDistribution;
	}

	export interface InvalidIfMatchVersion {
	}

	export interface NoSuchCloudFrontOriginAccessIdentity {
	}

	export interface PreconditionFailed {
	}

	export interface CloudFrontOriginAccessIdentityInUse {
	}

	export interface DistributionNotDisabled {
	}

	export interface FieldLevelEncryptionConfigInUse {
	}

	export interface FieldLevelEncryptionProfileInUse {
	}

	export interface PublicKeyInUse {
	}

	export interface StreamingDistributionNotDisabled {
	}

	export interface NoSuchStreamingDistribution {
	}


	/** The returned result of the corresponding request. */
	export interface GetCloudFrontOriginAccessIdentityResult {

		/** CloudFront origin access identity. */
		CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
	}


	/** The returned result of the corresponding request. */
	export interface GetCloudFrontOriginAccessIdentityConfigResult {

		/** Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource. */
		CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;
	}


	/** The returned result of the corresponding request. */
	export interface GetDistributionResult {

		/** A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. */
		Distribution?: Distribution;
	}


	/** The returned result of the corresponding request. */
	export interface GetDistributionConfigResult {

		/** A distribution configuration. */
		DistributionConfig?: DistributionConfig;
	}

	export interface GetFieldLevelEncryptionResult {

		/** A complex data type that includes the profile configurations and other options specified for field-level encryption. */
		FieldLevelEncryption?: FieldLevelEncryption;
	}

	export interface GetFieldLevelEncryptionConfigResult {

		/** A complex data type that includes the profile configurations specified for field-level encryption. */
		FieldLevelEncryptionConfig?: FieldLevelEncryptionConfig;
	}

	export interface GetFieldLevelEncryptionProfileResult {

		/** A complex data type for field-level encryption profiles. */
		FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
	}

	export interface GetFieldLevelEncryptionProfileConfigResult {

		/** A complex data type of profiles for the field-level encryption. */
		FieldLevelEncryptionProfileConfig?: FieldLevelEncryptionProfileConfig;
	}


	/** The returned result of the corresponding request. */
	export interface GetInvalidationResult {

		/** An invalidation. */
		Invalidation?: Invalidation;
	}

	export interface NoSuchInvalidation {
	}

	export interface GetPublicKeyResult {

		/** A complex data type of public keys you add to CloudFront to use with features like field-level encryption. */
		PublicKey?: PublicKey;
	}

	export interface GetPublicKeyConfigResult {

		/** Information about a public key you add to CloudFront to use with features like field-level encryption. */
		PublicKeyConfig?: PublicKeyConfig;
	}


	/** The returned result of the corresponding request. */
	export interface GetStreamingDistributionResult {

		/** A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery. */
		StreamingDistribution?: StreamingDistribution;
	}


	/** The returned result of the corresponding request. */
	export interface GetStreamingDistributionConfigResult {

		/** The RTMP distribution's configuration information. */
		StreamingDistributionConfig?: StreamingDistributionConfig;
	}


	/** The returned result of the corresponding request.  */
	export interface ListCloudFrontOriginAccessIdentitiesResult {

		/** Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code> resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code> parameters. */
		CloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList;
	}


	/** Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code> resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code> parameters. */
	export interface CloudFrontOriginAccessIdentityList {
		Marker: string;
		NextMarker?: string;
		MaxItems: number;
		IsTruncated: boolean;
		Quantity: number;
		Items?: Array<CloudFrontOriginAccessIdentitySummary>;
	}


	/** Summary of the information about a CloudFront origin access identity. */
	export interface CloudFrontOriginAccessIdentitySummary {
		Id: string;
		S3CanonicalUserId: string;
		Comment: string;
	}


	/** The returned result of the corresponding request.  */
	export interface ListDistributionsResult {

		/** A distribution list. */
		DistributionList?: DistributionList;
	}


	/** A distribution list. */
	export interface DistributionList {
		Marker: string;
		NextMarker?: string;
		MaxItems: number;
		IsTruncated: boolean;
		Quantity: number;
		Items?: Array<DistributionSummary>;
	}


	/** A summary of the information about a CloudFront distribution. */
	export interface DistributionSummary {
		Id: string;
		ARN: string;
		Status: string;
		LastModifiedTime: Date;
		DomainName: string;

		/**
		 * A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.
		 * Required
		 */
		Aliases: Aliases;

		/**
		 * A complex type that contains information about origins and origin groups for this distribution.
		 * Required
		 */
		Origins: Origins;

		/** A complex data type for the origin groups specified for a distribution. */
		OriginGroups?: OriginGroups;

		/**
		 * A complex type that describes the default cache behavior if you don’t specify a <code>CacheBehavior</code> element or if request URLs don’t match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
		 * Required
		 */
		DefaultCacheBehavior: DefaultCacheBehavior;

		/**
		 * A complex type that contains zero or more <code>CacheBehavior</code> elements.
		 * Required
		 */
		CacheBehaviors: CacheBehaviors;

		/**
		 * <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
		 * Required
		 */
		CustomErrorResponses: CustomErrorResponses;
		Comment: string;
		PriceClass: DistributionConfigPriceClass;
		Enabled: boolean;

		/**
		 * <p>A complex type that determines the distribution’s SSL/TLS configuration for communicating with viewers.</p> <p>If the distribution doesn’t use <code>Aliases</code> (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>—set <code>CloudFrontDefaultCertificate</code> to <code>true</code> and leave all other fields empty.</p> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), use the fields in this type to specify the following settings:</p> <ul> <li> <p>Which viewers the distribution accepts HTTPS connections from: only viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a> (recommended), or all viewers including those that don’t support SNI.</p> <ul> <li> <p>To accept HTTPS connections from only viewers that support SNI, set <code>SSLSupportMethod</code> to <code>sni-only</code>. This is recommended. Most browsers and clients released after 2010 support SNI. </p> </li> <li> <p>To accept HTTPS connections from all viewers, including those that don’t support SNI, set <code>SSLSupportMethod</code> to <code>vip</code>. This is not recommended, and results in additional monthly charges from CloudFront. </p> </li> </ul> </li> <li> <p>The minimum SSL/TLS protocol version that the distribution can use to communicate with viewers. To specify a minimum version, choose a value for <code>MinimumProtocolVersion</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </li> <li> <p>The location of the SSL/TLS certificate, <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">AWS Certificate Manager (ACM)</a> (recommended) or <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">AWS Identity and Access Management (AWS IAM)</a>. You specify the location by setting a value in one of the following fields (not both):</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> </ul> </li> </ul> <p>All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use <code>ViewerProtocolPolicy</code> in the <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use <code>CustomOriginConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html">Using HTTPS with CloudFront</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html"> Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
		 * Required
		 */
		ViewerCertificate: ViewerCertificate;

		/**
		 * A complex type that identifies ways in which you want to restrict distribution of your content.
		 * Required
		 */
		Restrictions: Restrictions;
		WebACLId: string;
		HttpVersion: DistributionSummaryHttpVersion;
		IsIPV6Enabled: boolean;
		AliasICPRecordals?: Array<AliasICPRecordal>;
	}

	export enum DistributionSummaryHttpVersion { http1_1 = 0, http2 = 1 }


	/** The response to a request to list the distributions that are associated with a specified AWS WAF web ACL.  */
	export interface ListDistributionsByWebACLIdResult {

		/** A distribution list. */
		DistributionList?: DistributionList;
	}

	export interface ListFieldLevelEncryptionConfigsResult {

		/** List of field-level encrpytion configurations. */
		FieldLevelEncryptionList?: FieldLevelEncryptionList;
	}


	/** List of field-level encrpytion configurations. */
	export interface FieldLevelEncryptionList {
		NextMarker?: string;
		MaxItems: number;
		Quantity: number;
		Items?: Array<FieldLevelEncryptionSummary>;
	}


	/** A summary of a field-level encryption item. */
	export interface FieldLevelEncryptionSummary {
		Id: string;
		LastModifiedTime: Date;
		Comment?: string;

		/** Configuration for query argument-profile mapping for field-level encryption. */
		QueryArgProfileConfig?: QueryArgProfileConfig;

		/** The configuration for a field-level encryption content type-profile mapping. */
		ContentTypeProfileConfig?: ContentTypeProfileConfig;
	}

	export interface ListFieldLevelEncryptionProfilesResult {

		/** List of field-level encryption profiles. */
		FieldLevelEncryptionProfileList?: FieldLevelEncryptionProfileList;
	}


	/** List of field-level encryption profiles. */
	export interface FieldLevelEncryptionProfileList {
		NextMarker?: string;
		MaxItems: number;
		Quantity: number;
		Items?: Array<FieldLevelEncryptionProfileSummary>;
	}


	/** The field-level encryption profile summary. */
	export interface FieldLevelEncryptionProfileSummary {
		Id: string;
		LastModifiedTime: Date;
		Name: string;

		/**
		 * Complex data type for field-level encryption profiles that includes all of the encryption entities.
		 * Required
		 */
		EncryptionEntities: EncryptionEntities;
		Comment?: string;
	}


	/** The returned result of the corresponding request.  */
	export interface ListInvalidationsResult {

		/** The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>. */
		InvalidationList?: InvalidationList;
	}


	/** The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface InvalidationList {
		Marker: string;
		NextMarker?: string;
		MaxItems: number;
		IsTruncated: boolean;
		Quantity: number;
		Items?: Array<InvalidationSummary>;
	}


	/** A summary of an invalidation request. */
	export interface InvalidationSummary {
		Id: string;
		CreateTime: Date;
		Status: string;
	}

	export interface ListPublicKeysResult {

		/** A list of public keys you've added to CloudFront to use with features like field-level encryption. */
		PublicKeyList?: PublicKeyList;
	}


	/** A list of public keys you've added to CloudFront to use with features like field-level encryption. */
	export interface PublicKeyList {
		NextMarker?: string;
		MaxItems: number;
		Quantity: number;
		Items?: Array<PublicKeySummary>;
	}


	/** A complex data type for public key information.  */
	export interface PublicKeySummary {
		Id: string;
		Name: string;
		CreatedTime: Date;
		EncodedKey: string;
		Comment?: string;
	}


	/** The returned result of the corresponding request.  */
	export interface ListStreamingDistributionsResult {

		/** A streaming distribution list. */
		StreamingDistributionList?: StreamingDistributionList;
	}


	/** A streaming distribution list.  */
	export interface StreamingDistributionList {
		Marker: string;
		NextMarker?: string;
		MaxItems: number;
		IsTruncated: boolean;
		Quantity: number;
		Items?: Array<StreamingDistributionSummary>;
	}


	/**  A summary of the information for a CloudFront streaming distribution. */
	export interface StreamingDistributionSummary {
		Id: string;
		ARN: string;
		Status: string;
		LastModifiedTime: Date;
		DomainName: string;

		/**
		 * A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.
		 * Required
		 */
		S3Origin: S3Origin;

		/**
		 * A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.
		 * Required
		 */
		Aliases: Aliases;

		/**
		 * <p>A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content.</p> <p>If you want to require signed URLs in requests for objects in the target origin that match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and <code>Items</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i> Amazon CloudFront Developer Guide</i>.</p> <p>If you don't want to require signed URLs in requests for objects that match <code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>.</p> <p>To add, change, or remove one or more trusted signers, change <code>Enabled</code> to <code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as applicable, and specify all of the trusted signers that you want to include in the updated distribution.</p> <p>For more information about updating the distribution configuration, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/DistributionConfig.html">DistributionConfig</a> in the <i>Amazon CloudFront API Reference</i>.</p>
		 * Required
		 */
		TrustedSigners: TrustedSigners;
		Comment: string;
		PriceClass: DistributionConfigPriceClass;
		Enabled: boolean;
	}


	/**  The returned result of the corresponding request. */
	export interface ListTagsForResourceResult {

		/**
		 * A complex type that contains zero or more <code>Tag</code> elements.
		 * Required
		 */
		Tags: Tags;
	}

	export interface NoSuchResource {
	}


	/** The returned result of the corresponding request. */
	export interface UpdateCloudFrontOriginAccessIdentityResult {

		/** CloudFront origin access identity. */
		CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
	}

	export interface IllegalUpdate {
	}


	/** The returned result of the corresponding request. */
	export interface UpdateDistributionResult {

		/** A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. */
		Distribution?: Distribution;
	}

	export interface UpdateFieldLevelEncryptionConfigResult {

		/** A complex data type that includes the profile configurations and other options specified for field-level encryption. */
		FieldLevelEncryption?: FieldLevelEncryption;
	}

	export interface UpdateFieldLevelEncryptionProfileResult {

		/** A complex data type for field-level encryption profiles. */
		FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
	}

	export interface UpdatePublicKeyResult {

		/** A complex data type of public keys you add to CloudFront to use with features like field-level encryption. */
		PublicKey?: PublicKey;
	}

	export interface CannotChangeImmutablePublicKeyFields {
	}


	/** The returned result of the corresponding request. */
	export interface UpdateStreamingDistributionResult {

		/** A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery. */
		StreamingDistribution?: StreamingDistribution;
	}

	export enum ICPRecordalStatus { APPROVED = 0, SUSPENDED = 1, PENDING = 2 }

	export enum ViewerProtocolPolicy { allow_all = 0, https_only = 1, redirect_to_https = 2 }

	export enum CertificateSource { cloudfront = 0, iam = 1, acm = 2 }

	export enum Format { URLEncoded = 0 }

	export enum ItemSelection { none = 0, whitelist = 1, all = 2 }


	/** The request to create a new origin access identity (OAI). An origin access identity is a special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all or just some of your Amazon S3 content. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html"> Restricting Access to Amazon S3 Content by Using an Origin Access Identity</a> in the <i>Amazon CloudFront Developer Guide</i>.  */
	export interface CreateCloudFrontOriginAccessIdentityRequest {

		/**
		 * Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.
		 * Required
		 */
		CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
	}


	/** The request to create a new distribution. */
	export interface CreateDistributionRequest {

		/**
		 * A distribution configuration.
		 * Required
		 */
		DistributionConfig: DistributionConfig;
	}


	/** A distribution Configuration and a list of tags to be associated with the distribution. */
	export interface DistributionConfigWithTags {

		/**
		 * A distribution configuration.
		 * Required
		 */
		DistributionConfig: DistributionConfig;

		/**
		 * A complex type that contains zero or more <code>Tag</code> elements.
		 * Required
		 */
		Tags: Tags;
	}


	/** The request to create a new distribution with tags.  */
	export interface CreateDistributionWithTagsRequest {

		/**
		 * A distribution Configuration and a list of tags to be associated with the distribution.
		 * Required
		 */
		DistributionConfigWithTags: DistributionConfigWithTags;
	}

	export interface CreateFieldLevelEncryptionConfigRequest {

		/**
		 * A complex data type that includes the profile configurations specified for field-level encryption.
		 * Required
		 */
		FieldLevelEncryptionConfig: FieldLevelEncryptionConfig;
	}

	export interface CreateFieldLevelEncryptionProfileRequest {

		/**
		 * A complex data type of profiles for the field-level encryption.
		 * Required
		 */
		FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;
	}


	/** The request to create an invalidation. */
	export interface CreateInvalidationRequest {

		/**
		 * An invalidation batch.
		 * Required
		 */
		InvalidationBatch: InvalidationBatch;
	}

	export interface CreatePublicKeyRequest {

		/**
		 * Information about a public key you add to CloudFront to use with features like field-level encryption.
		 * Required
		 */
		PublicKeyConfig: PublicKeyConfig;
	}


	/** The request to create a new streaming distribution. */
	export interface CreateStreamingDistributionRequest {

		/**
		 * The RTMP distribution's configuration information.
		 * Required
		 */
		StreamingDistributionConfig: StreamingDistributionConfig;
	}


	/** A streaming distribution Configuration and a list of tags to be associated with the streaming distribution. */
	export interface StreamingDistributionConfigWithTags {

		/**
		 * The RTMP distribution's configuration information.
		 * Required
		 */
		StreamingDistributionConfig: StreamingDistributionConfig;

		/**
		 * A complex type that contains zero or more <code>Tag</code> elements.
		 * Required
		 */
		Tags: Tags;
	}


	/** The request to create a new streaming distribution with tags. */
	export interface CreateStreamingDistributionWithTagsRequest {

		/**
		 * A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.
		 * Required
		 */
		StreamingDistributionConfigWithTags: StreamingDistributionConfigWithTags;
	}

	export enum OriginProtocolPolicy { http_only = 0, match_viewer = 1, https_only = 2 }


	/** Deletes a origin access identity. */
	export interface DeleteCloudFrontOriginAccessIdentityRequest {
	}


	/** <p>This action deletes a web distribution. To delete a web distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete a web distribution using the CloudFront API:</b> </p> <ol> <li> <p>Disable the web distribution </p> </li> <li> <p>Submit a <code>GET Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution.</p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Distribution</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 6.</p> </li> <li> <p>Review the response to your <code>DELETE Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface DeleteDistributionRequest {
	}

	export interface DeleteFieldLevelEncryptionConfigRequest {
	}

	export interface DeleteFieldLevelEncryptionProfileRequest {
	}

	export interface DeletePublicKeyRequest {
	}


	/** The request to delete a streaming distribution. */
	export interface DeleteStreamingDistributionRequest {
	}

	export enum EventType { viewer_request = 0, viewer_response = 1, origin_request = 2, origin_response = 3 }

	export enum GeoRestrictionType { blacklist = 0, whitelist = 1, none = 2 }


	/** The origin access identity's configuration information. For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CloudFrontOriginAccessIdentityConfig.html">CloudFrontOriginAccessIdentityConfig</a>. */
	export interface GetCloudFrontOriginAccessIdentityConfigRequest {
	}


	/** The request to get an origin access identity's information. */
	export interface GetCloudFrontOriginAccessIdentityRequest {
	}


	/** The request to get a distribution configuration. */
	export interface GetDistributionConfigRequest {
	}


	/** The request to get a distribution's information. */
	export interface GetDistributionRequest {
	}

	export interface GetFieldLevelEncryptionConfigRequest {
	}

	export interface GetFieldLevelEncryptionProfileConfigRequest {
	}

	export interface GetFieldLevelEncryptionProfileRequest {
	}

	export interface GetFieldLevelEncryptionRequest {
	}


	/** The request to get an invalidation's information.  */
	export interface GetInvalidationRequest {
	}

	export interface GetPublicKeyConfigRequest {
	}

	export interface GetPublicKeyRequest {
	}


	/** To request to get a streaming distribution configuration. */
	export interface GetStreamingDistributionConfigRequest {
	}


	/** The request to get a streaming distribution's information. */
	export interface GetStreamingDistributionRequest {
	}


	/** The request to list origin access identities.  */
	export interface ListCloudFrontOriginAccessIdentitiesRequest {
	}


	/** The request to list distributions that are associated with a specified AWS WAF web ACL.  */
	export interface ListDistributionsByWebACLIdRequest {
	}


	/** The request to list your distributions.  */
	export interface ListDistributionsRequest {
	}

	export interface ListFieldLevelEncryptionConfigsRequest {
	}

	export interface ListFieldLevelEncryptionProfilesRequest {
	}


	/** The request to list invalidations.  */
	export interface ListInvalidationsRequest {
	}

	export interface ListPublicKeysRequest {
	}


	/** The request to list your streaming distributions.  */
	export interface ListStreamingDistributionsRequest {
	}


	/**  The request to list tags for a CloudFront resource. */
	export interface ListTagsForResourceRequest {
	}

	export enum MinimumProtocolVersion { SSLv3 = 0, TLSv1 = 1, TLSv1_2016 = 2, TLSv1_1_2016 = 3, TLSv1_2_2018 = 4 }

	export enum SSLSupportMethod { sni_only = 0, vip = 1 }


	/**  A complex type that contains zero or more <code>Tag</code> elements. */
	export interface TagKeys {
		Items?: Array<string>;
	}


	/**  The request to add tags to a CloudFront resource. */
	export interface TagResourceRequest {

		/**
		 * A complex type that contains zero or more <code>Tag</code> elements.
		 * Required
		 */
		Tags: Tags;
	}


	/**  The request to remove tags from a CloudFront resource. */
	export interface UntagResourceRequest {

		/**
		 * A complex type that contains zero or more <code>Tag</code> elements.
		 * Required
		 */
		TagKeys: TagKeys;
	}


	/** The request to update an origin access identity. */
	export interface UpdateCloudFrontOriginAccessIdentityRequest {

		/**
		 * Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.
		 * Required
		 */
		CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfig;
	}


	/** The request to update a distribution. */
	export interface UpdateDistributionRequest {

		/**
		 * A distribution configuration.
		 * Required
		 */
		DistributionConfig: DistributionConfig;
	}

	export interface UpdateFieldLevelEncryptionConfigRequest {

		/**
		 * A complex data type that includes the profile configurations specified for field-level encryption.
		 * Required
		 */
		FieldLevelEncryptionConfig: FieldLevelEncryptionConfig;
	}

	export interface UpdateFieldLevelEncryptionProfileRequest {

		/**
		 * A complex data type of profiles for the field-level encryption.
		 * Required
		 */
		FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;
	}

	export interface UpdatePublicKeyRequest {

		/**
		 * Information about a public key you add to CloudFront to use with features like field-level encryption.
		 * Required
		 */
		PublicKeyConfig: PublicKeyConfig;
	}


	/** The request to update a streaming distribution. */
	export interface UpdateStreamingDistributionRequest {

		/**
		 * The RTMP distribution's configuration information.
		 * Required
		 */
		StreamingDistributionConfig: StreamingDistributionConfig;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists origin access identities.
		 * Get 2019-03-26/origin-access-identity/cloudfront
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last identity on that page).
		 * @param {string} MaxItems The maximum number of origin access identities you want in the response body. 
		 * @return {void} Success
		 */
		ListCloudFrontOriginAccessIdentities2019_03_26(Marker: string, MaxItems: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/origin-access-identity/cloudfront?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List CloudFront distributions.
		 * Get 2019-03-26/distribution
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of distributions. The results include distributions in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last distribution on that page).
		 * @param {string} MaxItems The maximum number of distributions you want in the response body.
		 * @return {void} Success
		 */
		ListDistributions2019_03_26(Marker: string, MaxItems: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/distribution?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all field-level encryption configurations that have been created in CloudFront for this account.
		 * Get 2019-03-26/field-level-encryption
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last configuration on that page). 
		 * @param {string} MaxItems The maximum number of field-level encryption configurations you want in the response body. 
		 * @return {void} Success
		 */
		ListFieldLevelEncryptionConfigs2019_03_26(Marker: string, MaxItems: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/field-level-encryption?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request a list of field-level encryption profiles that have been created in CloudFront for this account.
		 * Get 2019-03-26/field-level-encryption-profile
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of profiles. The results include profiles in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last profile on that page). 
		 * @param {string} MaxItems The maximum number of field-level encryption profiles you want in the response body. 
		 * @return {void} Success
		 */
		ListFieldLevelEncryptionProfiles2019_03_26(Marker: string, MaxItems: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/field-level-encryption-profile?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists invalidation batches.
		 * Get 2019-03-26/distribution/{DistributionId}/invalidation
		 * @param {string} DistributionId The distribution's ID.
		 * @param {string} Marker Use this parameter when paginating results to indicate where to begin in your list of invalidation batches. Because the results are returned in decreasing order from most recent to oldest, the most recent results are on the first page, the second page will contain earlier results, and so on. To get the next page of results, set <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response. This value is the same as the ID of the last invalidation batch on that page. 
		 * @param {string} MaxItems The maximum number of invalidation batches that you want in the response body.
		 * @return {void} Success
		 */
		ListInvalidations2019_03_26(DistributionId: string, Marker: string, MaxItems: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/distribution/' + (DistributionId == null ? '' : encodeURIComponent(DistributionId)) + '/invalidation&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all public keys that have been added to CloudFront for this account.
		 * Get 2019-03-26/public-key
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of public keys. The results include public keys in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last public key on that page). 
		 * @param {string} MaxItems The maximum number of public keys you want in the response body. 
		 * @return {void} Success
		 */
		ListPublicKeys2019_03_26(Marker: string, MaxItems: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/public-key?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List streaming distributions.
		 * Get 2019-03-26/streaming-distribution
		 * @param {string} Marker The value that you provided for the <code>Marker</code> request parameter.
		 * @param {string} MaxItems The value that you provided for the <code>MaxItems</code> request parameter.
		 * @return {void} Success
		 */
		ListStreamingDistributions2019_03_26(Marker: string, MaxItems: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/streaming-distribution?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an origin access identity.
		 * Delete 2019-03-26/origin-access-identity/cloudfront/{Id}
		 * @param {string} Id The origin access identity's ID.
		 * @return {void} 
		 */
		DeleteCloudFrontOriginAccessIdentity2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2019-03-26/origin-access-identity/cloudfront/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the information about an origin access identity.
		 * Get 2019-03-26/origin-access-identity/cloudfront/{Id}
		 * @param {string} Id The identity's ID.
		 * @return {void} Success
		 */
		GetCloudFrontOriginAccessIdentity2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/origin-access-identity/cloudfront/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a distribution.
		 * Delete 2019-03-26/distribution/{Id}
		 * @param {string} Id The distribution ID. 
		 * @return {void} 
		 */
		DeleteDistribution2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2019-03-26/distribution/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the information about a distribution.
		 * Get 2019-03-26/distribution/{Id}
		 * @param {string} Id The distribution's ID. If the ID is empty, an empty distribution configuration is returned.
		 * @return {void} Success
		 */
		GetDistribution2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/distribution/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a field-level encryption configuration.
		 * Delete 2019-03-26/field-level-encryption/{Id}
		 * @param {string} Id The ID of the configuration you want to delete from CloudFront.
		 * @return {void} 
		 */
		DeleteFieldLevelEncryptionConfig2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2019-03-26/field-level-encryption/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the field-level encryption configuration information.
		 * Get 2019-03-26/field-level-encryption/{Id}
		 * @param {string} Id Request the ID for the field-level encryption configuration information.
		 * @return {void} Success
		 */
		GetFieldLevelEncryption2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/field-level-encryption/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a field-level encryption profile.
		 * Delete 2019-03-26/field-level-encryption-profile/{Id}
		 * @param {string} Id Request the ID of the profile you want to delete from CloudFront.
		 * @return {void} 
		 */
		DeleteFieldLevelEncryptionProfile2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2019-03-26/field-level-encryption-profile/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the field-level encryption profile information.
		 * Get 2019-03-26/field-level-encryption-profile/{Id}
		 * @param {string} Id Get the ID for the field-level encryption profile information.
		 * @return {void} Success
		 */
		GetFieldLevelEncryptionProfile2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/field-level-encryption-profile/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a public key you previously added to CloudFront.
		 * Delete 2019-03-26/public-key/{Id}
		 * @param {string} Id The ID of the public key you want to remove from CloudFront.
		 * @return {void} 
		 */
		DeletePublicKey2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2019-03-26/public-key/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the public key information.
		 * Get 2019-03-26/public-key/{Id}
		 * @param {string} Id Request the ID for the public key.
		 * @return {void} Success
		 */
		GetPublicKey2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/public-key/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
		 * Delete 2019-03-26/streaming-distribution/{Id}
		 * @param {string} Id The distribution ID. 
		 * @return {void} 
		 */
		DeleteStreamingDistribution2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2019-03-26/streaming-distribution/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a specified RTMP distribution, including the distribution configuration.
		 * Get 2019-03-26/streaming-distribution/{Id}
		 * @param {string} Id The streaming distribution's ID.
		 * @return {void} Success
		 */
		GetStreamingDistribution2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/streaming-distribution/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the configuration information about an origin access identity.
		 * Get 2019-03-26/origin-access-identity/cloudfront/{Id}/config
		 * @param {string} Id The identity's ID. 
		 * @return {void} Success
		 */
		GetCloudFrontOriginAccessIdentityConfig2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/origin-access-identity/cloudfront/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the configuration information about a distribution.
		 * Get 2019-03-26/distribution/{Id}/config
		 * @param {string} Id The distribution's ID. If the ID is empty, an empty distribution configuration is returned.
		 * @return {void} Success
		 */
		GetDistributionConfig2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/distribution/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the field-level encryption configuration information.
		 * Get 2019-03-26/field-level-encryption/{Id}/config
		 * @param {string} Id Request the ID for the field-level encryption configuration information.
		 * @return {void} Success
		 */
		GetFieldLevelEncryptionConfig2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/field-level-encryption/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the field-level encryption profile configuration information.
		 * Get 2019-03-26/field-level-encryption-profile/{Id}/config
		 * @param {string} Id Get the ID for the field-level encryption profile configuration information.
		 * @return {void} Success
		 */
		GetFieldLevelEncryptionProfileConfig2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/field-level-encryption-profile/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the information about an invalidation.
		 * Get 2019-03-26/distribution/{DistributionId}/invalidation/{Id}
		 * @param {string} DistributionId The distribution's ID.
		 * @param {string} Id The identifier for the invalidation request, for example, <code>IDFDVBD632BHDS5</code>.
		 * @return {void} Success
		 */
		GetInvalidation2019_03_26(DistributionId: string, Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/distribution/' + (DistributionId == null ? '' : encodeURIComponent(DistributionId)) + '/invalidation/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return public key configuration informaation
		 * Get 2019-03-26/public-key/{Id}/config
		 * @param {string} Id Request the ID for the public key configuration.
		 * @return {void} Success
		 */
		GetPublicKeyConfig2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/public-key/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the configuration information about a streaming distribution.
		 * Get 2019-03-26/streaming-distribution/{Id}/config
		 * @param {string} Id The streaming distribution's ID.
		 * @return {void} Success
		 */
		GetStreamingDistributionConfig2019_03_26(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/streaming-distribution/' + (Id == null ? '' : encodeURIComponent(Id)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List the distributions that are associated with a specified AWS WAF web ACL.
		 * Get 2019-03-26/distributionsByWebACLId/{WebACLId}
		 * @param {string} Marker Use <code>Marker</code> and <code>MaxItems</code> to control pagination of results. If you have more than <code>MaxItems</code> distributions that satisfy the request, the response includes a <code>NextMarker</code> element. To get the next page of results, submit another request. For the value of <code>Marker</code>, specify the value of <code>NextMarker</code> from the last response. (For the first request, omit <code>Marker</code>.) 
		 * @param {string} MaxItems The maximum number of distributions that you want CloudFront to return in the response body. The maximum and default values are both 100.
		 * @param {string} WebACLId The ID of the AWS WAF web ACL that you want to list the associated distributions. If you specify "null" for the ID, the request returns a list of the distributions that aren't associated with a web ACL. 
		 * @return {void} Success
		 */
		ListDistributionsByWebACLId2019_03_26(Marker: string, MaxItems: string, WebACLId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/distributionsByWebACLId/' + (WebACLId == null ? '' : encodeURIComponent(WebACLId)) + '?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List tags for a CloudFront resource.
		 * Get 2019-03-26/tagging#Resource
		 * @param {string} Resource  An ARN of a CloudFront resource.
		 * @return {void} Success
		 */
		ListTagsForResource2019_03_26(Resource: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/tagging#Resource?Resource=' + (Resource == null ? '' : encodeURIComponent(Resource)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum TagResource2019_03_26Operation { Tag = 0 }

	export enum UntagResource2019_03_26Operation { Untag = 0 }

}

