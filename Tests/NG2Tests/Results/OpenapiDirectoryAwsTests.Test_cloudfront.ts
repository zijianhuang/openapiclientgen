import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The returned result of the corresponding request. */
	export interface CreateCloudFrontOriginAccessIdentityResult {

		/** CloudFront origin access identity. */
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

		/** Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource. */
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

	export interface CloudFrontOriginAccessIdentityAlreadyExists {
	}
	export interface CloudFrontOriginAccessIdentityAlreadyExistsFormProperties {
	}
	export function CreateCloudFrontOriginAccessIdentityAlreadyExistsFormGroup() {
		return new FormGroup<CloudFrontOriginAccessIdentityAlreadyExistsFormProperties>({
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

	export interface TooManyCloudFrontOriginAccessIdentities {
	}
	export interface TooManyCloudFrontOriginAccessIdentitiesFormProperties {
	}
	export function CreateTooManyCloudFrontOriginAccessIdentitiesFormGroup() {
		return new FormGroup<TooManyCloudFrontOriginAccessIdentitiesFormProperties>({
		});

	}

	export interface InvalidArgument {
	}
	export interface InvalidArgumentFormProperties {
	}
	export function CreateInvalidArgumentFormGroup() {
		return new FormGroup<InvalidArgumentFormProperties>({
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


	/** The returned result of the corresponding request. */
	export interface CreateDistributionResult {

		/** A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. */
		Distribution?: Distribution;
	}

	/** The returned result of the corresponding request. */
	export interface CreateDistributionResultFormProperties {
	}
	export function CreateCreateDistributionResultFormGroup() {
		return new FormGroup<CreateDistributionResultFormProperties>({
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


	/** <p>A complex type that lists the AWS accounts, if any, that you included in the <code>TrustedSigners</code> complex type for this distribution. These are the accounts that you want to allow to create signed URLs for private content.</p> <p>The <code>Signer</code> complex type lists the AWS account number of the trusted signer or <code>self</code> if the signer is the AWS account that created the distribution. The <code>Signer</code> element also includes the IDs of any active CloudFront key pairs that are associated with the trusted signer's AWS account. If no <code>KeyPairId</code> element appears for a <code>Signer</code>, that signer can't create signed URLs. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface ActiveTrustedSigners {

		/** Required */
		Enabled: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<Signer>;
	}

	/** <p>A complex type that lists the AWS accounts, if any, that you included in the <code>TrustedSigners</code> complex type for this distribution. These are the accounts that you want to allow to create signed URLs for private content.</p> <p>The <code>Signer</code> complex type lists the AWS account number of the trusted signer or <code>self</code> if the signer is the AWS account that created the distribution. The <code>Signer</code> element also includes the IDs of any active CloudFront key pairs that are associated with the trusted signer's AWS account. If no <code>KeyPairId</code> element appears for a <code>Signer</code>, that signer can't create signed URLs. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
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


	/** A complex type that lists the AWS accounts that were included in the <code>TrustedSigners</code> complex type, as well as their active CloudFront key pair IDs, if any.  */
	export interface Signer {
		AwsAccountNumber?: string | null;

		/** <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ActiveTrustedSigners.html">ActiveTrustedSigners</a>.</p> */
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


	/** <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ActiveTrustedSigners.html">ActiveTrustedSigners</a>.</p> */
	export interface KeyPairIds {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ActiveTrustedSigners.html">ActiveTrustedSigners</a>.</p> */
	export interface KeyPairIdsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateKeyPairIdsFormGroup() {
		return new FormGroup<KeyPairIdsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A distribution configuration. */
	export interface DistributionConfig {

		/** Required */
		CallerReference: string;

		/** A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution. */
		Aliases?: Aliases;
		DefaultRootObject?: string | null;

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

		/** Required */
		Comment: string;

		/** A complex type that controls whether access logs are written for the distribution. */
		Logging?: LoggingConfig;
		PriceClass?: DistributionConfigPriceClass | null;

		/** Required */
		Enabled: boolean;

		/** <p>A complex type that determines the distribution’s SSL/TLS configuration for communicating with viewers.</p> <p>If the distribution doesn’t use <code>Aliases</code> (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>—set <code>CloudFrontDefaultCertificate</code> to <code>true</code> and leave all other fields empty.</p> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), use the fields in this type to specify the following settings:</p> <ul> <li> <p>Which viewers the distribution accepts HTTPS connections from: only viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a> (recommended), or all viewers including those that don’t support SNI.</p> <ul> <li> <p>To accept HTTPS connections from only viewers that support SNI, set <code>SSLSupportMethod</code> to <code>sni-only</code>. This is recommended. Most browsers and clients released after 2010 support SNI. </p> </li> <li> <p>To accept HTTPS connections from all viewers, including those that don’t support SNI, set <code>SSLSupportMethod</code> to <code>vip</code>. This is not recommended, and results in additional monthly charges from CloudFront. </p> </li> </ul> </li> <li> <p>The minimum SSL/TLS protocol version that the distribution can use to communicate with viewers. To specify a minimum version, choose a value for <code>MinimumProtocolVersion</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </li> <li> <p>The location of the SSL/TLS certificate, <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">AWS Certificate Manager (ACM)</a> (recommended) or <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">AWS Identity and Access Management (AWS IAM)</a>. You specify the location by setting a value in one of the following fields (not both):</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> </ul> </li> </ul> <p>All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use <code>ViewerProtocolPolicy</code> in the <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use <code>CustomOriginConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html">Using HTTPS with CloudFront</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html"> Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
		ViewerCertificate?: ViewerCertificate;

		/** A complex type that identifies ways in which you want to restrict distribution of your content. */
		Restrictions?: Restrictions;
		WebACLId?: string | null;
		HttpVersion?: DistributionConfigHttpVersion | null;
		IsIPV6Enabled?: boolean | null;
	}

	/** A distribution configuration. */
	export interface DistributionConfigFormProperties {

		/** Required */
		CallerReference: FormControl<string | null | undefined>,
		DefaultRootObject: FormControl<string | null | undefined>,

		/** Required */
		Comment: FormControl<string | null | undefined>,
		PriceClass: FormControl<DistributionConfigPriceClass | null | undefined>,

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
		WebACLId: FormControl<string | null | undefined>,
		HttpVersion: FormControl<DistributionConfigHttpVersion | null | undefined>,
		IsIPV6Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDistributionConfigFormGroup() {
		return new FormGroup<DistributionConfigFormProperties>({
			CallerReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultRootObject: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PriceClass: new FormControl<DistributionConfigPriceClass | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			WebACLId: new FormControl<string | null | undefined>(undefined),
			HttpVersion: new FormControl<DistributionConfigHttpVersion | null | undefined>(undefined),
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


	/** A complex type that contains information about origins and origin groups for this distribution.  */
	export interface Origins {

		/** Required */
		Quantity: number;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Items: Array<Origin>;
	}

	/** A complex type that contains information about origins and origin groups for this distribution.  */
	export interface OriginsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateOriginsFormGroup() {
		return new FormGroup<OriginsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>An origin.</p> <p>An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:</p> <ul> <li> <p>Use the <code>S3OriginConfig</code> type to specify an Amazon S3 bucket that is <i> <b>not</b> </i> configured with static website hosting.</p> </li> <li> <p>Use the <code>CustomOriginConfig</code> type to specify various other kinds of content containers or HTTP servers, including:</p> <ul> <li> <p>An Amazon S3 bucket that is configured with static website hosting</p> </li> <li> <p>An Elastic Load Balancing load balancer</p> </li> <li> <p>An AWS Elemental MediaPackage origin</p> </li> <li> <p>An AWS Elemental MediaStore container</p> </li> <li> <p>Any other HTTP server, running on an Amazon EC2 instance or any other kind of host</p> </li> </ul> </li> </ul> <p>For the current maximum number of origins that you can specify per distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions">General Quotas on Web Distributions</a> in the <i>Amazon CloudFront Developer Guide</i> (quotas were formerly referred to as limits).</p> */
	export interface Origin {

		/** Required */
		Id: string;

		/** Required */
		DomainName: string;
		OriginPath?: string | null;

		/** A complex type that contains the list of Custom Headers for each origin. */
		CustomHeaders?: CustomHeaders;

		/** A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin or an S3 bucket that is configured as a website endpoint, use the <code>CustomOriginConfig</code> element instead. */
		S3OriginConfig?: S3OriginConfig;

		/** A custom origin. A custom origin is any origin that is <i>not</i> an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> <i>is</i> a custom origin. */
		CustomOriginConfig?: CustomOriginConfig;
		ConnectionAttempts?: number | null;
		ConnectionTimeout?: number | null;
	}

	/** <p>An origin.</p> <p>An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:</p> <ul> <li> <p>Use the <code>S3OriginConfig</code> type to specify an Amazon S3 bucket that is <i> <b>not</b> </i> configured with static website hosting.</p> </li> <li> <p>Use the <code>CustomOriginConfig</code> type to specify various other kinds of content containers or HTTP servers, including:</p> <ul> <li> <p>An Amazon S3 bucket that is configured with static website hosting</p> </li> <li> <p>An Elastic Load Balancing load balancer</p> </li> <li> <p>An AWS Elemental MediaPackage origin</p> </li> <li> <p>An AWS Elemental MediaStore container</p> </li> <li> <p>Any other HTTP server, running on an Amazon EC2 instance or any other kind of host</p> </li> </ul> </li> </ul> <p>For the current maximum number of origins that you can specify per distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions">General Quotas on Web Distributions</a> in the <i>Amazon CloudFront Developer Guide</i> (quotas were formerly referred to as limits).</p> */
	export interface OriginFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		OriginPath: FormControl<string | null | undefined>,
		ConnectionAttempts: FormControl<number | null | undefined>,
		ConnectionTimeout: FormControl<number | null | undefined>,
	}
	export function CreateOriginFormGroup() {
		return new FormGroup<OriginFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OriginPath: new FormControl<string | null | undefined>(undefined),
			ConnectionAttempts: new FormControl<number | null | undefined>(undefined),
			ConnectionTimeout: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the list of Custom Headers for each origin.  */
	export interface CustomHeaders {

		/** Required */
		Quantity: number;
		Items?: Array<OriginCustomHeader>;
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


	/** A custom origin. A custom origin is any origin that is <i>not</i> an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> <i>is</i> a custom origin. */
	export interface CustomOriginConfig {

		/** Required */
		HTTPPort: number;

		/** Required */
		HTTPSPort: number;

		/** Required */
		OriginProtocolPolicy: CustomOriginConfigOriginProtocolPolicy;

		/** A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin. */
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
		OriginProtocolPolicy: FormControl<CustomOriginConfigOriginProtocolPolicy | null | undefined>,
		OriginReadTimeout: FormControl<number | null | undefined>,
		OriginKeepaliveTimeout: FormControl<number | null | undefined>,
	}
	export function CreateCustomOriginConfigFormGroup() {
		return new FormGroup<CustomOriginConfigFormProperties>({
			HTTPPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			HTTPSPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			OriginProtocolPolicy: new FormControl<CustomOriginConfigOriginProtocolPolicy | null | undefined>(undefined, [Validators.required]),
			OriginReadTimeout: new FormControl<number | null | undefined>(undefined),
			OriginKeepaliveTimeout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CustomOriginConfigOriginProtocolPolicy { http_only = 0, match_viewer = 1, https_only = 2 }


	/** A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin.  */
	export interface OriginSslProtocols {

		/** Required */
		Quantity: number;

		/** Required */
		Items: Array<SslProtocol>;
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

	export enum SslProtocol { SSLv3 = 0, TLSv1 = 1, TLSv1_1 = 2, TLSv1_2 = 3 }


	/** A complex data type for the origin groups specified for a distribution. */
	export interface OriginGroups {

		/** Required */
		Quantity: number;

		/** List of origin groups for a distribution. */
		Items?: Array<OriginGroup>;
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


	/** An origin group includes two origins (a primary origin and a second origin to failover to) and a failover criteria that you specify. You create an origin group to support origin failover in CloudFront. When you create or update a distribution, you can specifiy the origin group instead of a single origin, and CloudFront will failover from the primary origin to the second origin under the failover conditions that you've chosen. */
	export interface OriginGroup {

		/** Required */
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


	/** A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin. */
	export interface OriginGroupFailoverCriteria {

		/**
		 * A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin.
		 * Required
		 */
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

		/**
		 * List of status codes for origin failover.
		 * Required
		 * Minimum items: 1
		 */
		Items: Array<number>;
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

		/**
		 * List of origins in an origin group.
		 * Required
		 * Minimum items: 2
		 * Maximum items: 2
		 */
		Items: Array<OriginGroupMember>;
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


	/** A complex type that describes the default cache behavior if you don’t specify a <code>CacheBehavior</code> element or if request URLs don’t match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior. */
	export interface DefaultCacheBehavior {

		/** Required */
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

		/** Required */
		ViewerProtocolPolicy: DefaultCacheBehaviorViewerProtocolPolicy;

		/** Required */
		MinTTL: number;

		/** <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p> */
		AllowedMethods?: AllowedMethods;
		SmoothStreaming?: boolean | null;
		DefaultTTL?: number | null;
		MaxTTL?: number | null;
		Compress?: boolean | null;

		/** <p>A complex type that specifies a list of Lambda functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with the Lambda function only once.</p> <p>If you don't want to invoke any Lambda functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>. </p> */
		LambdaFunctionAssociations?: LambdaFunctionAssociations;
		FieldLevelEncryptionId?: string | null;
	}

	/** A complex type that describes the default cache behavior if you don’t specify a <code>CacheBehavior</code> element or if request URLs don’t match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior. */
	export interface DefaultCacheBehaviorFormProperties {

		/** Required */
		TargetOriginId: FormControl<string | null | undefined>,

		/** Required */
		ViewerProtocolPolicy: FormControl<DefaultCacheBehaviorViewerProtocolPolicy | null | undefined>,

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
			ViewerProtocolPolicy: new FormControl<DefaultCacheBehaviorViewerProtocolPolicy | null | undefined>(undefined, [Validators.required]),
			MinTTL: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SmoothStreaming: new FormControl<boolean | null | undefined>(undefined),
			DefaultTTL: new FormControl<number | null | undefined>(undefined),
			MaxTTL: new FormControl<number | null | undefined>(undefined),
			Compress: new FormControl<boolean | null | undefined>(undefined),
			FieldLevelEncryptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers. */
	export interface ForwardedValues {

		/** Required */
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

	/** A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers. */
	export interface ForwardedValuesFormProperties {

		/** Required */
		QueryString: FormControl<boolean | null | undefined>,
	}
	export function CreateForwardedValuesFormGroup() {
		return new FormGroup<ForwardedValuesFormProperties>({
			QueryString: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface CookiePreference {

		/** Required */
		Forward: CookiePreferenceForward;

		/** A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html"> Caching Content Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>. */
		WhitelistedNames?: CookieNames;
	}

	/** A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface CookiePreferenceFormProperties {

		/** Required */
		Forward: FormControl<CookiePreferenceForward | null | undefined>,
	}
	export function CreateCookiePreferenceFormGroup() {
		return new FormGroup<CookiePreferenceFormProperties>({
			Forward: new FormControl<CookiePreferenceForward | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CookiePreferenceForward { none = 0, whitelist = 1, all = 2 }


	/** A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html"> Caching Content Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface CookieNames {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html"> Caching Content Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>. */
	export interface CookieNamesFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateCookieNamesFormGroup() {
		return new FormGroup<CookieNamesFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A complex type that specifies the request headers, if any, that you want CloudFront to base caching on for this cache behavior. </p> <p>For the headers that you specify, CloudFront caches separate versions of a specified object based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of either <code>acme</code> or <code>apex</code>, and you configure CloudFront to cache your content based on values in the <code>product</code> header. CloudFront forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. For more information about caching based on header values, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html">How CloudFront Forwards and Caches Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface Headers {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** <p>A complex type that specifies the request headers, if any, that you want CloudFront to base caching on for this cache behavior. </p> <p>For the headers that you specify, CloudFront caches separate versions of a specified object based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of either <code>acme</code> or <code>apex</code>, and you configure CloudFront to cache your content based on values in the <code>product</code> header. CloudFront forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. For more information about caching based on header values, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html">How CloudFront Forwards and Caches Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface HeadersFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateHeadersFormGroup() {
		return new FormGroup<HeadersFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior.  */
	export interface QueryStringCacheKeys {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior.  */
	export interface QueryStringCacheKeysFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateQueryStringCacheKeysFormGroup() {
		return new FormGroup<QueryStringCacheKeysFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content.</p> <p>If you want to require signed URLs in requests for objects in the target origin that match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and <code>Items</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i> Amazon CloudFront Developer Guide</i>.</p> <p>If you don't want to require signed URLs in requests for objects that match <code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>.</p> <p>To add, change, or remove one or more trusted signers, change <code>Enabled</code> to <code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as applicable, and specify all of the trusted signers that you want to include in the updated distribution.</p> <p>For more information about updating the distribution configuration, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/DistributionConfig.html">DistributionConfig</a> in the <i>Amazon CloudFront API Reference</i>.</p> */
	export interface TrustedSigners {

		/** Required */
		Enabled: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** <p>A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content.</p> <p>If you want to require signed URLs in requests for objects in the target origin that match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and <code>Items</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i> Amazon CloudFront Developer Guide</i>.</p> <p>If you don't want to require signed URLs in requests for objects that match <code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>.</p> <p>To add, change, or remove one or more trusted signers, change <code>Enabled</code> to <code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as applicable, and specify all of the trusted signers that you want to include in the updated distribution.</p> <p>For more information about updating the distribution configuration, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/DistributionConfig.html">DistributionConfig</a> in the <i>Amazon CloudFront API Reference</i>.</p> */
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

	export enum DefaultCacheBehaviorViewerProtocolPolicy { allow_all = 0, https_only = 1, redirect_to_https = 2 }


	/** <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p> */
	export interface AllowedMethods {

		/** Required */
		Quantity: number;

		/** Required */
		Items: Array<Method>;

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

	export enum Method { GET = 0, HEAD = 1, POST = 2, PUT = 3, PATCH = 4, OPTIONS = 5, DELETE = 6 }


	/** <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly. </p> */
	export interface CachedMethods {

		/** Required */
		Quantity: number;

		/** Required */
		Items: Array<Method>;
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
		Items?: Array<LambdaFunctionAssociation>;
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


	/** A complex type that contains a Lambda function association. */
	export interface LambdaFunctionAssociation {

		/** Required */
		LambdaFunctionARN: string;

		/** Required */
		EventType: LambdaFunctionAssociationEventType;
		IncludeBody?: boolean | null;
	}

	/** A complex type that contains a Lambda function association. */
	export interface LambdaFunctionAssociationFormProperties {

		/** Required */
		LambdaFunctionARN: FormControl<string | null | undefined>,

		/** Required */
		EventType: FormControl<LambdaFunctionAssociationEventType | null | undefined>,
		IncludeBody: FormControl<boolean | null | undefined>,
	}
	export function CreateLambdaFunctionAssociationFormGroup() {
		return new FormGroup<LambdaFunctionAssociationFormProperties>({
			LambdaFunctionARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventType: new FormControl<LambdaFunctionAssociationEventType | null | undefined>(undefined, [Validators.required]),
			IncludeBody: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum LambdaFunctionAssociationEventType { viewer_request = 0, viewer_response = 1, origin_request = 2, origin_response = 3 }


	/** A complex type that contains zero or more <code>CacheBehavior</code> elements.  */
	export interface CacheBehaviors {

		/** Required */
		Quantity: number;
		Items?: Array<CacheBehavior>;
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


	/** <p>A complex type that describes how CloudFront processes requests.</p> <p>You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to serve objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.</p> <p>For the current quota (formerly known as limit) on the number of cache behaviors that you can add to a distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you don’t want to specify any cache behaviors, include only an empty <code>CacheBehaviors</code> element. Don’t include an empty <code>CacheBehavior</code> element because this is invalid.</p> <p>To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty <code>CacheBehaviors</code> element.</p> <p>To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.</p> <p>For more information about cache behaviors, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behavior Settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CacheBehavior {

		/** Required */
		PathPattern: string;

		/** Required */
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

		/** Required */
		ViewerProtocolPolicy: CacheBehaviorViewerProtocolPolicy;

		/** Required */
		MinTTL: number;

		/** <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p> */
		AllowedMethods?: AllowedMethods;
		SmoothStreaming?: boolean | null;
		DefaultTTL?: number | null;
		MaxTTL?: number | null;
		Compress?: boolean | null;

		/** <p>A complex type that specifies a list of Lambda functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with the Lambda function only once.</p> <p>If you don't want to invoke any Lambda functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>. </p> */
		LambdaFunctionAssociations?: LambdaFunctionAssociations;
		FieldLevelEncryptionId?: string | null;
	}

	/** <p>A complex type that describes how CloudFront processes requests.</p> <p>You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to serve objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.</p> <p>For the current quota (formerly known as limit) on the number of cache behaviors that you can add to a distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you don’t want to specify any cache behaviors, include only an empty <code>CacheBehaviors</code> element. Don’t include an empty <code>CacheBehavior</code> element because this is invalid.</p> <p>To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty <code>CacheBehaviors</code> element.</p> <p>To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.</p> <p>For more information about cache behaviors, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behavior Settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CacheBehaviorFormProperties {

		/** Required */
		PathPattern: FormControl<string | null | undefined>,

		/** Required */
		TargetOriginId: FormControl<string | null | undefined>,

		/** Required */
		ViewerProtocolPolicy: FormControl<CacheBehaviorViewerProtocolPolicy | null | undefined>,

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
			ViewerProtocolPolicy: new FormControl<CacheBehaviorViewerProtocolPolicy | null | undefined>(undefined, [Validators.required]),
			MinTTL: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SmoothStreaming: new FormControl<boolean | null | undefined>(undefined),
			DefaultTTL: new FormControl<number | null | undefined>(undefined),
			MaxTTL: new FormControl<number | null | undefined>(undefined),
			Compress: new FormControl<boolean | null | undefined>(undefined),
			FieldLevelEncryptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CacheBehaviorViewerProtocolPolicy { allow_all = 0, https_only = 1, redirect_to_https = 2 }


	/** <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CustomErrorResponses {

		/** Required */
		Quantity: number;
		Items?: Array<CustomErrorResponse>;
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


	/** <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer. </p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface CustomErrorResponse {

		/** Required */
		ErrorCode: number;
		ResponsePagePath?: string | null;
		ResponseCode?: string | null;
		ErrorCachingMinTTL?: number | null;
	}

	/** <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer. </p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
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

	export enum DistributionConfigPriceClass { PriceClass_100 = 0, PriceClass_200 = 1, PriceClass_All = 2 }


	/** <p>A complex type that determines the distribution’s SSL/TLS configuration for communicating with viewers.</p> <p>If the distribution doesn’t use <code>Aliases</code> (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>—set <code>CloudFrontDefaultCertificate</code> to <code>true</code> and leave all other fields empty.</p> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), use the fields in this type to specify the following settings:</p> <ul> <li> <p>Which viewers the distribution accepts HTTPS connections from: only viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a> (recommended), or all viewers including those that don’t support SNI.</p> <ul> <li> <p>To accept HTTPS connections from only viewers that support SNI, set <code>SSLSupportMethod</code> to <code>sni-only</code>. This is recommended. Most browsers and clients released after 2010 support SNI. </p> </li> <li> <p>To accept HTTPS connections from all viewers, including those that don’t support SNI, set <code>SSLSupportMethod</code> to <code>vip</code>. This is not recommended, and results in additional monthly charges from CloudFront. </p> </li> </ul> </li> <li> <p>The minimum SSL/TLS protocol version that the distribution can use to communicate with viewers. To specify a minimum version, choose a value for <code>MinimumProtocolVersion</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </li> <li> <p>The location of the SSL/TLS certificate, <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">AWS Certificate Manager (ACM)</a> (recommended) or <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">AWS Identity and Access Management (AWS IAM)</a>. You specify the location by setting a value in one of the following fields (not both):</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> </ul> </li> </ul> <p>All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use <code>ViewerProtocolPolicy</code> in the <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use <code>CustomOriginConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html">Using HTTPS with CloudFront</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html"> Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface ViewerCertificate {
		CloudFrontDefaultCertificate?: boolean | null;
		IAMCertificateId?: string | null;
		ACMCertificateArn?: string | null;
		SSLSupportMethod?: ViewerCertificateSSLSupportMethod | null;
		MinimumProtocolVersion?: ViewerCertificateMinimumProtocolVersion | null;
		Certificate?: string | null;
		CertificateSource?: ViewerCertificateCertificateSource | null;
	}

	/** <p>A complex type that determines the distribution’s SSL/TLS configuration for communicating with viewers.</p> <p>If the distribution doesn’t use <code>Aliases</code> (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>—set <code>CloudFrontDefaultCertificate</code> to <code>true</code> and leave all other fields empty.</p> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), use the fields in this type to specify the following settings:</p> <ul> <li> <p>Which viewers the distribution accepts HTTPS connections from: only viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a> (recommended), or all viewers including those that don’t support SNI.</p> <ul> <li> <p>To accept HTTPS connections from only viewers that support SNI, set <code>SSLSupportMethod</code> to <code>sni-only</code>. This is recommended. Most browsers and clients released after 2010 support SNI. </p> </li> <li> <p>To accept HTTPS connections from all viewers, including those that don’t support SNI, set <code>SSLSupportMethod</code> to <code>vip</code>. This is not recommended, and results in additional monthly charges from CloudFront. </p> </li> </ul> </li> <li> <p>The minimum SSL/TLS protocol version that the distribution can use to communicate with viewers. To specify a minimum version, choose a value for <code>MinimumProtocolVersion</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </li> <li> <p>The location of the SSL/TLS certificate, <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">AWS Certificate Manager (ACM)</a> (recommended) or <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">AWS Identity and Access Management (AWS IAM)</a>. You specify the location by setting a value in one of the following fields (not both):</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> </ul> </li> </ul> <p>All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use <code>ViewerProtocolPolicy</code> in the <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use <code>CustomOriginConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html">Using HTTPS with CloudFront</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html"> Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface ViewerCertificateFormProperties {
		CloudFrontDefaultCertificate: FormControl<boolean | null | undefined>,
		IAMCertificateId: FormControl<string | null | undefined>,
		ACMCertificateArn: FormControl<string | null | undefined>,
		SSLSupportMethod: FormControl<ViewerCertificateSSLSupportMethod | null | undefined>,
		MinimumProtocolVersion: FormControl<ViewerCertificateMinimumProtocolVersion | null | undefined>,
		Certificate: FormControl<string | null | undefined>,
		CertificateSource: FormControl<ViewerCertificateCertificateSource | null | undefined>,
	}
	export function CreateViewerCertificateFormGroup() {
		return new FormGroup<ViewerCertificateFormProperties>({
			CloudFrontDefaultCertificate: new FormControl<boolean | null | undefined>(undefined),
			IAMCertificateId: new FormControl<string | null | undefined>(undefined),
			ACMCertificateArn: new FormControl<string | null | undefined>(undefined),
			SSLSupportMethod: new FormControl<ViewerCertificateSSLSupportMethod | null | undefined>(undefined),
			MinimumProtocolVersion: new FormControl<ViewerCertificateMinimumProtocolVersion | null | undefined>(undefined),
			Certificate: new FormControl<string | null | undefined>(undefined),
			CertificateSource: new FormControl<ViewerCertificateCertificateSource | null | undefined>(undefined),
		});

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
		RestrictionType: GeoRestrictionRestrictionType;

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.  */
	export interface GeoRestrictionFormProperties {

		/** Required */
		RestrictionType: FormControl<GeoRestrictionRestrictionType | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateGeoRestrictionFormGroup() {
		return new FormGroup<GeoRestrictionFormProperties>({
			RestrictionType: new FormControl<GeoRestrictionRestrictionType | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GeoRestrictionRestrictionType { blacklist = 0, whitelist = 1, none = 2 }

	export enum DistributionConfigHttpVersion { http1_1 = 0, http2 = 1 }


	/** <p>AWS services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions. The status is returned in the CloudFront response; you can't configure it yourself.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with AWS services in China</i>.</p> */
	export interface AliasICPRecordal {
		CNAME?: string | null;
		ICPRecordalStatus?: AliasICPRecordalICPRecordalStatus | null;
	}

	/** <p>AWS services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions. The status is returned in the CloudFront response; you can't configure it yourself.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with AWS services in China</i>.</p> */
	export interface AliasICPRecordalFormProperties {
		CNAME: FormControl<string | null | undefined>,
		ICPRecordalStatus: FormControl<AliasICPRecordalICPRecordalStatus | null | undefined>,
	}
	export function CreateAliasICPRecordalFormGroup() {
		return new FormGroup<AliasICPRecordalFormProperties>({
			CNAME: new FormControl<string | null | undefined>(undefined),
			ICPRecordalStatus: new FormControl<AliasICPRecordalICPRecordalStatus | null | undefined>(undefined),
		});

	}

	export enum AliasICPRecordalICPRecordalStatus { APPROVED = 0, SUSPENDED = 1, PENDING = 2 }

	export enum PriceClass { PriceClass_100 = 0, PriceClass_200 = 1, PriceClass_All = 2 }

	export enum HttpVersion { http1_1 = 0, http2 = 1 }

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

	export interface AccessDenied {
	}
	export interface AccessDeniedFormProperties {
	}
	export function CreateAccessDeniedFormGroup() {
		return new FormGroup<AccessDeniedFormProperties>({
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

	export interface TooManyDistributionCNAMEs {
	}
	export interface TooManyDistributionCNAMEsFormProperties {
	}
	export function CreateTooManyDistributionCNAMEsFormGroup() {
		return new FormGroup<TooManyDistributionCNAMEsFormProperties>({
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


	/** The returned result of the corresponding request.  */
	export interface CreateDistributionWithTagsResult {

		/** A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. */
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
		Items?: Array<Tag>;
	}

	/**  A complex type that contains zero or more <code>Tag</code> elements. */
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}


	/**  A complex type that contains <code>Tag</code> key and <code>Tag</code> value. */
	export interface Tag {

		/**
		 * <p> A string that contains <code>Tag</code> key.</p> <p>The string length should be between 1 and 128 characters. Valid characters include <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters <code>_ - . : / = + @</code>.</p>
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Value?: string | null;
	}

	/**  A complex type that contains <code>Tag</code> key and <code>Tag</code> value. */
	export interface TagFormProperties {

		/**
		 * <p> A string that contains <code>Tag</code> key.</p> <p>The string length should be between 1 and 128 characters. Valid characters include <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters <code>_ - . : / = + @</code>.</p>
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
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

		/** A complex data type that includes the profile configurations and other options specified for field-level encryption. */
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

		/**
		 * A complex data type that includes the profile configurations specified for field-level encryption.
		 * Required
		 */
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
		Comment?: string | null;

		/** Configuration for query argument-profile mapping for field-level encryption. */
		QueryArgProfileConfig?: QueryArgProfileConfig;

		/** The configuration for a field-level encryption content type-profile mapping. */
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

		/** Query argument-profile mapping for field-level encryption. */
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
		Items?: Array<QueryArgProfile>;
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


	/** The configuration for a field-level encryption content type-profile mapping.  */
	export interface ContentTypeProfileConfig {

		/** Required */
		ForwardWhenContentTypeIsUnknown: boolean;

		/** Field-level encryption content type-profile. */
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
		Items?: Array<ContentTypeProfile>;
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


	/** A field-level encryption content type profile.  */
	export interface ContentTypeProfile {

		/** Required */
		Format: ContentTypeProfileFormat;
		ProfileId?: string | null;

		/** Required */
		ContentType: string;
	}

	/** A field-level encryption content type profile.  */
	export interface ContentTypeProfileFormProperties {

		/** Required */
		Format: FormControl<ContentTypeProfileFormat | null | undefined>,
		ProfileId: FormControl<string | null | undefined>,

		/** Required */
		ContentType: FormControl<string | null | undefined>,
	}
	export function CreateContentTypeProfileFormGroup() {
		return new FormGroup<ContentTypeProfileFormProperties>({
			Format: new FormControl<ContentTypeProfileFormat | null | undefined>(undefined, [Validators.required]),
			ProfileId: new FormControl<string | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContentTypeProfileFormat { URLEncoded = 0 }

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

		/** A complex data type for field-level encryption profiles. */
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

		/**
		 * A complex data type of profiles for the field-level encryption.
		 * Required
		 */
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
		Comment?: string | null;

		/**
		 * Complex data type for field-level encryption profiles that includes all of the encryption entities.
		 * Required
		 */
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
		Items?: Array<EncryptionEntity>;
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


	/** Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications.  */
	export interface EncryptionEntity {

		/** Required */
		PublicKeyId: string;

		/** Required */
		ProviderId: string;

		/**
		 * A complex data type that includes the field patterns to match for field-level encryption.
		 * Required
		 */
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


	/** The returned result of the corresponding request. */
	export interface CreateInvalidationResult {

		/** An invalidation. */
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

		/**
		 * An invalidation batch.
		 * Required
		 */
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

		/**
		 * A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>.
		 * Required
		 */
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


	/** A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>.  */
	export interface Paths {

		/** Required */
		Quantity: number;
		Items?: Array<string>;
	}

	/** A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>.  */
	export interface PathsFormProperties {

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreatePathsFormGroup() {
		return new FormGroup<PathsFormProperties>({
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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

	export interface CreatePublicKeyResult {

		/** A complex data type of public keys you add to CloudFront to use with features like field-level encryption. */
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

		/**
		 * Information about a public key you add to CloudFront to use with features like field-level encryption.
		 * Required
		 */
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
		Comment?: string | null;
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


	/** The returned result of the corresponding request. */
	export interface CreateStreamingDistributionResult {

		/** A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery. */
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
		LastModifiedTime?: Date | null;

		/** Required */
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

		/**
		 * A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.
		 * Required
		 */
		S3Origin: S3Origin;

		/** A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution. */
		Aliases?: Aliases;

		/** Required */
		Comment: string;

		/** A complex type that controls whether access logs are written for this streaming distribution. */
		Logging?: StreamingLoggingConfig;

		/**
		 * <p>A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content.</p> <p>If you want to require signed URLs in requests for objects in the target origin that match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and <code>Items</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i> Amazon CloudFront Developer Guide</i>.</p> <p>If you don't want to require signed URLs in requests for objects that match <code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>.</p> <p>To add, change, or remove one or more trusted signers, change <code>Enabled</code> to <code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as applicable, and specify all of the trusted signers that you want to include in the updated distribution.</p> <p>For more information about updating the distribution configuration, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/DistributionConfig.html">DistributionConfig</a> in the <i>Amazon CloudFront API Reference</i>.</p>
		 * Required
		 */
		TrustedSigners: TrustedSigners;
		PriceClass?: DistributionConfigPriceClass | null;

		/** Required */
		Enabled: boolean;
	}

	/** The RTMP distribution's configuration information. */
	export interface StreamingDistributionConfigFormProperties {

		/** Required */
		CallerReference: FormControl<string | null | undefined>,

		/** Required */
		Comment: FormControl<string | null | undefined>,
		PriceClass: FormControl<DistributionConfigPriceClass | null | undefined>,

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateStreamingDistributionConfigFormGroup() {
		return new FormGroup<StreamingDistributionConfigFormProperties>({
			CallerReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PriceClass: new FormControl<DistributionConfigPriceClass | null | undefined>(undefined),
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


	/** The returned result of the corresponding request.  */
	export interface CreateStreamingDistributionWithTagsResult {

		/** A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery. */
		StreamingDistribution?: StreamingDistribution;
	}

	/** The returned result of the corresponding request.  */
	export interface CreateStreamingDistributionWithTagsResultFormProperties {
	}
	export function CreateCreateStreamingDistributionWithTagsResultFormGroup() {
		return new FormGroup<CreateStreamingDistributionWithTagsResultFormProperties>({
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

	export interface NoSuchCloudFrontOriginAccessIdentity {
	}
	export interface NoSuchCloudFrontOriginAccessIdentityFormProperties {
	}
	export function CreateNoSuchCloudFrontOriginAccessIdentityFormGroup() {
		return new FormGroup<NoSuchCloudFrontOriginAccessIdentityFormProperties>({
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

	export interface PublicKeyInUse {
	}
	export interface PublicKeyInUseFormProperties {
	}
	export function CreatePublicKeyInUseFormGroup() {
		return new FormGroup<PublicKeyInUseFormProperties>({
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


	/** The returned result of the corresponding request. */
	export interface GetCloudFrontOriginAccessIdentityResult {

		/** CloudFront origin access identity. */
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

		/** Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource. */
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

		/** A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. */
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

		/** A distribution configuration. */
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

		/** A complex data type that includes the profile configurations and other options specified for field-level encryption. */
		FieldLevelEncryption?: FieldLevelEncryption;
	}
	export interface GetFieldLevelEncryptionResultFormProperties {
	}
	export function CreateGetFieldLevelEncryptionResultFormGroup() {
		return new FormGroup<GetFieldLevelEncryptionResultFormProperties>({
		});

	}

	export interface GetFieldLevelEncryptionConfigResult {

		/** A complex data type that includes the profile configurations specified for field-level encryption. */
		FieldLevelEncryptionConfig?: FieldLevelEncryptionConfig;
	}
	export interface GetFieldLevelEncryptionConfigResultFormProperties {
	}
	export function CreateGetFieldLevelEncryptionConfigResultFormGroup() {
		return new FormGroup<GetFieldLevelEncryptionConfigResultFormProperties>({
		});

	}

	export interface GetFieldLevelEncryptionProfileResult {

		/** A complex data type for field-level encryption profiles. */
		FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
	}
	export interface GetFieldLevelEncryptionProfileResultFormProperties {
	}
	export function CreateGetFieldLevelEncryptionProfileResultFormGroup() {
		return new FormGroup<GetFieldLevelEncryptionProfileResultFormProperties>({
		});

	}

	export interface GetFieldLevelEncryptionProfileConfigResult {

		/** A complex data type of profiles for the field-level encryption. */
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

		/** An invalidation. */
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

	export interface GetPublicKeyResult {

		/** A complex data type of public keys you add to CloudFront to use with features like field-level encryption. */
		PublicKey?: PublicKey;
	}
	export interface GetPublicKeyResultFormProperties {
	}
	export function CreateGetPublicKeyResultFormGroup() {
		return new FormGroup<GetPublicKeyResultFormProperties>({
		});

	}

	export interface GetPublicKeyConfigResult {

		/** Information about a public key you add to CloudFront to use with features like field-level encryption. */
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

		/** A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery. */
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

		/** The RTMP distribution's configuration information. */
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

		/** Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code> resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code> parameters. */
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
		NextMarker?: string | null;

		/** Required */
		MaxItems: number;

		/** Required */
		IsTruncated: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<CloudFrontOriginAccessIdentitySummary>;
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


	/** The returned result of the corresponding request.  */
	export interface ListDistributionsResult {

		/** A distribution list. */
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
		NextMarker?: string | null;

		/** Required */
		MaxItems: number;

		/** Required */
		IsTruncated: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<DistributionSummary>;
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

		/** Required */
		Comment: string;

		/** Required */
		PriceClass: DistributionConfigPriceClass;

		/** Required */
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

		/** Required */
		WebACLId: string;

		/** Required */
		HttpVersion: DistributionSummaryHttpVersion;

		/** Required */
		IsIPV6Enabled: boolean;
		AliasICPRecordals?: Array<AliasICPRecordal>;
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
		PriceClass: FormControl<DistributionConfigPriceClass | null | undefined>,

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		WebACLId: FormControl<string | null | undefined>,

		/** Required */
		HttpVersion: FormControl<DistributionSummaryHttpVersion | null | undefined>,

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
			PriceClass: new FormControl<DistributionConfigPriceClass | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			WebACLId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HttpVersion: new FormControl<DistributionSummaryHttpVersion | null | undefined>(undefined, [Validators.required]),
			IsIPV6Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DistributionSummaryHttpVersion { http1_1 = 0, http2 = 1 }


	/** The response to a request to list the distributions that are associated with a specified AWS WAF web ACL.  */
	export interface ListDistributionsByWebACLIdResult {

		/** A distribution list. */
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

		/** List of field-level encrpytion configurations. */
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
		NextMarker?: string | null;

		/** Required */
		MaxItems: number;

		/** Required */
		Quantity: number;
		Items?: Array<FieldLevelEncryptionSummary>;
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


	/** A summary of a field-level encryption item. */
	export interface FieldLevelEncryptionSummary {

		/** Required */
		Id: string;

		/** Required */
		LastModifiedTime: Date;
		Comment?: string | null;

		/** Configuration for query argument-profile mapping for field-level encryption. */
		QueryArgProfileConfig?: QueryArgProfileConfig;

		/** The configuration for a field-level encryption content type-profile mapping. */
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

	export interface ListFieldLevelEncryptionProfilesResult {

		/** List of field-level encryption profiles. */
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
		NextMarker?: string | null;

		/** Required */
		MaxItems: number;

		/** Required */
		Quantity: number;
		Items?: Array<FieldLevelEncryptionProfileSummary>;
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


	/** The field-level encryption profile summary. */
	export interface FieldLevelEncryptionProfileSummary {

		/** Required */
		Id: string;

		/** Required */
		LastModifiedTime: Date;

		/** Required */
		Name: string;

		/**
		 * Complex data type for field-level encryption profiles that includes all of the encryption entities.
		 * Required
		 */
		EncryptionEntities: EncryptionEntities;
		Comment?: string | null;
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


	/** The returned result of the corresponding request.  */
	export interface ListInvalidationsResult {

		/** The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>. */
		InvalidationList?: InvalidationList;
	}

	/** The returned result of the corresponding request.  */
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
		NextMarker?: string | null;

		/** Required */
		MaxItems: number;

		/** Required */
		IsTruncated: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<InvalidationSummary>;
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

	export interface ListPublicKeysResult {

		/** A list of public keys you've added to CloudFront to use with features like field-level encryption. */
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
		NextMarker?: string | null;

		/** Required */
		MaxItems: number;

		/** Required */
		Quantity: number;
		Items?: Array<PublicKeySummary>;
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


	/** A complex data type for public key information.  */
	export interface PublicKeySummary {

		/** Required */
		Id: string;

		/** Required */
		Name: string;

		/** Required */
		CreatedTime: Date;

		/** Required */
		EncodedKey: string;
		Comment?: string | null;
	}

	/** A complex data type for public key information.  */
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


	/** The returned result of the corresponding request.  */
	export interface ListStreamingDistributionsResult {

		/** A streaming distribution list. */
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
		NextMarker?: string | null;

		/** Required */
		MaxItems: number;

		/** Required */
		IsTruncated: boolean;

		/** Required */
		Quantity: number;
		Items?: Array<StreamingDistributionSummary>;
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


	/**  A summary of the information for a CloudFront streaming distribution. */
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

		/** Required */
		Comment: string;

		/** Required */
		PriceClass: DistributionConfigPriceClass;

		/** Required */
		Enabled: boolean;
	}

	/**  A summary of the information for a CloudFront streaming distribution. */
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
		PriceClass: FormControl<DistributionConfigPriceClass | null | undefined>,

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
			PriceClass: new FormControl<DistributionConfigPriceClass | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The returned result of the corresponding request. */
	export interface ListTagsForResourceResult {

		/**
		 * A complex type that contains zero or more <code>Tag</code> elements.
		 * Required
		 */
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
	}
	export interface NoSuchResourceFormProperties {
	}
	export function CreateNoSuchResourceFormGroup() {
		return new FormGroup<NoSuchResourceFormProperties>({
		});

	}


	/** The returned result of the corresponding request. */
	export interface UpdateCloudFrontOriginAccessIdentityResult {

		/** CloudFront origin access identity. */
		CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;
	}

	/** The returned result of the corresponding request. */
	export interface UpdateCloudFrontOriginAccessIdentityResultFormProperties {
	}
	export function CreateUpdateCloudFrontOriginAccessIdentityResultFormGroup() {
		return new FormGroup<UpdateCloudFrontOriginAccessIdentityResultFormProperties>({
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


	/** The returned result of the corresponding request. */
	export interface UpdateDistributionResult {

		/** A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. */
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

		/** A complex data type that includes the profile configurations and other options specified for field-level encryption. */
		FieldLevelEncryption?: FieldLevelEncryption;
	}
	export interface UpdateFieldLevelEncryptionConfigResultFormProperties {
	}
	export function CreateUpdateFieldLevelEncryptionConfigResultFormGroup() {
		return new FormGroup<UpdateFieldLevelEncryptionConfigResultFormProperties>({
		});

	}

	export interface UpdateFieldLevelEncryptionProfileResult {

		/** A complex data type for field-level encryption profiles. */
		FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
	}
	export interface UpdateFieldLevelEncryptionProfileResultFormProperties {
	}
	export function CreateUpdateFieldLevelEncryptionProfileResultFormGroup() {
		return new FormGroup<UpdateFieldLevelEncryptionProfileResultFormProperties>({
		});

	}

	export interface UpdatePublicKeyResult {

		/** A complex data type of public keys you add to CloudFront to use with features like field-level encryption. */
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


	/** The returned result of the corresponding request. */
	export interface UpdateStreamingDistributionResult {

		/** A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery. */
		StreamingDistribution?: StreamingDistribution;
	}

	/** The returned result of the corresponding request. */
	export interface UpdateStreamingDistributionResultFormProperties {
	}
	export function CreateUpdateStreamingDistributionResultFormGroup() {
		return new FormGroup<UpdateStreamingDistributionResultFormProperties>({
		});

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

	/** The request to create a new origin access identity (OAI). An origin access identity is a special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all or just some of your Amazon S3 content. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html"> Restricting Access to Amazon S3 Content by Using an Origin Access Identity</a> in the <i>Amazon CloudFront Developer Guide</i>.  */
	export interface CreateCloudFrontOriginAccessIdentityRequestFormProperties {
	}
	export function CreateCreateCloudFrontOriginAccessIdentityRequestFormGroup() {
		return new FormGroup<CreateCloudFrontOriginAccessIdentityRequestFormProperties>({
		});

	}


	/** The request to create a new distribution. */
	export interface CreateDistributionRequest {

		/**
		 * A distribution configuration.
		 * Required
		 */
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

	/** A distribution Configuration and a list of tags to be associated with the distribution. */
	export interface DistributionConfigWithTagsFormProperties {
	}
	export function CreateDistributionConfigWithTagsFormGroup() {
		return new FormGroup<DistributionConfigWithTagsFormProperties>({
		});

	}


	/** The request to create a new distribution with tags.  */
	export interface CreateDistributionWithTagsRequest {

		/**
		 * A distribution Configuration and a list of tags to be associated with the distribution.
		 * Required
		 */
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

		/**
		 * A complex data type that includes the profile configurations specified for field-level encryption.
		 * Required
		 */
		FieldLevelEncryptionConfig: FieldLevelEncryptionConfig;
	}
	export interface CreateFieldLevelEncryptionConfigRequestFormProperties {
	}
	export function CreateCreateFieldLevelEncryptionConfigRequestFormGroup() {
		return new FormGroup<CreateFieldLevelEncryptionConfigRequestFormProperties>({
		});

	}

	export interface CreateFieldLevelEncryptionProfileRequest {

		/**
		 * A complex data type of profiles for the field-level encryption.
		 * Required
		 */
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

		/**
		 * An invalidation batch.
		 * Required
		 */
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

		/**
		 * Information about a public key you add to CloudFront to use with features like field-level encryption.
		 * Required
		 */
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

		/**
		 * The RTMP distribution's configuration information.
		 * Required
		 */
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

	/** A streaming distribution Configuration and a list of tags to be associated with the streaming distribution. */
	export interface StreamingDistributionConfigWithTagsFormProperties {
	}
	export function CreateStreamingDistributionConfigWithTagsFormGroup() {
		return new FormGroup<StreamingDistributionConfigWithTagsFormProperties>({
		});

	}


	/** The request to create a new streaming distribution with tags. */
	export interface CreateStreamingDistributionWithTagsRequest {

		/**
		 * A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.
		 * Required
		 */
		StreamingDistributionConfigWithTags: StreamingDistributionConfigWithTags;
	}

	/** The request to create a new streaming distribution with tags. */
	export interface CreateStreamingDistributionWithTagsRequestFormProperties {
	}
	export function CreateCreateStreamingDistributionWithTagsRequestFormGroup() {
		return new FormGroup<CreateStreamingDistributionWithTagsRequestFormProperties>({
		});

	}

	export enum OriginProtocolPolicy { http_only = 0, match_viewer = 1, https_only = 2 }


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


	/** <p>This action deletes a web distribution. To delete a web distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete a web distribution using the CloudFront API:</b> </p> <ol> <li> <p>Disable the web distribution </p> </li> <li> <p>Submit a <code>GET Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution.</p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Distribution</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 6.</p> </li> <li> <p>Review the response to your <code>DELETE Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
	export interface DeleteDistributionRequest {
	}

	/** <p>This action deletes a web distribution. To delete a web distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete a web distribution using the CloudFront API:</b> </p> <ol> <li> <p>Disable the web distribution </p> </li> <li> <p>Submit a <code>GET Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution.</p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Distribution</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 6.</p> </li> <li> <p>Review the response to your <code>DELETE Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> */
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

	export enum EventType { viewer_request = 0, viewer_response = 1, origin_request = 2, origin_response = 3 }

	export enum GeoRestrictionType { blacklist = 0, whitelist = 1, none = 2 }


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

	export enum MinimumProtocolVersion { SSLv3 = 0, TLSv1 = 1, TLSv1_2016 = 2, TLSv1_1_2016 = 3, TLSv1_2_2018 = 4 }

	export enum SSLSupportMethod { sni_only = 0, vip = 1 }


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

		/**
		 * A complex type that contains zero or more <code>Tag</code> elements.
		 * Required
		 */
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

		/**
		 * A complex type that contains zero or more <code>Tag</code> elements.
		 * Required
		 */
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

		/**
		 * Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.
		 * Required
		 */
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

		/**
		 * A distribution configuration.
		 * Required
		 */
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

		/**
		 * A complex data type that includes the profile configurations specified for field-level encryption.
		 * Required
		 */
		FieldLevelEncryptionConfig: FieldLevelEncryptionConfig;
	}
	export interface UpdateFieldLevelEncryptionConfigRequestFormProperties {
	}
	export function CreateUpdateFieldLevelEncryptionConfigRequestFormGroup() {
		return new FormGroup<UpdateFieldLevelEncryptionConfigRequestFormProperties>({
		});

	}

	export interface UpdateFieldLevelEncryptionProfileRequest {

		/**
		 * A complex data type of profiles for the field-level encryption.
		 * Required
		 */
		FieldLevelEncryptionProfileConfig: FieldLevelEncryptionProfileConfig;
	}
	export interface UpdateFieldLevelEncryptionProfileRequestFormProperties {
	}
	export function CreateUpdateFieldLevelEncryptionProfileRequestFormGroup() {
		return new FormGroup<UpdateFieldLevelEncryptionProfileRequestFormProperties>({
		});

	}

	export interface UpdatePublicKeyRequest {

		/**
		 * Information about a public key you add to CloudFront to use with features like field-level encryption.
		 * Required
		 */
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

		/**
		 * The RTMP distribution's configuration information.
		 * Required
		 */
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
		 * Get 2019-03-26/origin-access-identity/cloudfront
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last identity on that page).
		 * @param {string} MaxItems The maximum number of origin access identities you want in the response body. 
		 * @return {void} Success
		 */
		ListCloudFrontOriginAccessIdentities2019_03_26(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/origin-access-identity/cloudfront?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List CloudFront distributions.
		 * Get 2019-03-26/distribution
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of distributions. The results include distributions in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last distribution on that page).
		 * @param {string} MaxItems The maximum number of distributions you want in the response body.
		 * @return {void} Success
		 */
		ListDistributions2019_03_26(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/distribution?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all field-level encryption configurations that have been created in CloudFront for this account.
		 * Get 2019-03-26/field-level-encryption
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last configuration on that page). 
		 * @param {string} MaxItems The maximum number of field-level encryption configurations you want in the response body. 
		 * @return {void} Success
		 */
		ListFieldLevelEncryptionConfigs2019_03_26(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/field-level-encryption?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request a list of field-level encryption profiles that have been created in CloudFront for this account.
		 * Get 2019-03-26/field-level-encryption-profile
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of profiles. The results include profiles in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last profile on that page). 
		 * @param {string} MaxItems The maximum number of field-level encryption profiles you want in the response body. 
		 * @return {void} Success
		 */
		ListFieldLevelEncryptionProfiles2019_03_26(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
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
		ListInvalidations2019_03_26(DistributionId: string, Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/distribution/' + (DistributionId == null ? '' : encodeURIComponent(DistributionId)) + '/invalidation&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all public keys that have been added to CloudFront for this account.
		 * Get 2019-03-26/public-key
		 * @param {string} Marker Use this when paginating results to indicate where to begin in your list of public keys. The results include public keys in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last public key on that page). 
		 * @param {string} MaxItems The maximum number of public keys you want in the response body. 
		 * @return {void} Success
		 */
		ListPublicKeys2019_03_26(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2019-03-26/public-key?Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List streaming distributions.
		 * Get 2019-03-26/streaming-distribution
		 * @param {string} Marker The value that you provided for the <code>Marker</code> request parameter.
		 * @param {string} MaxItems The value that you provided for the <code>MaxItems</code> request parameter.
		 * @return {void} Success
		 */
		ListStreamingDistributions2019_03_26(Marker: string | null | undefined, MaxItems: string | null | undefined): Observable<HttpResponse<string>> {
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
		ListDistributionsByWebACLId2019_03_26(Marker: string | null | undefined, MaxItems: string | null | undefined, WebACLId: string): Observable<HttpResponse<string>> {
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

