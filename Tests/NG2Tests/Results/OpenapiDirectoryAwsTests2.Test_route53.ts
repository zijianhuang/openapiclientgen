import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A complex type that contains the response information for the <code>AssociateVPCWithHostedZone</code> request. */
	export interface AssociateVPCWithHostedZoneResponse {

		/**
		 * A complex type that describes change information about changes made to your hosted zone.
		 * Required
		 */
		ChangeInfo: ChangeInfo;
	}

	/** A complex type that contains the response information for the <code>AssociateVPCWithHostedZone</code> request. */
	export interface AssociateVPCWithHostedZoneResponseFormProperties {
	}
	export function CreateAssociateVPCWithHostedZoneResponseFormGroup() {
		return new FormGroup<AssociateVPCWithHostedZoneResponseFormProperties>({
		});

	}


	/** A complex type that describes change information about changes made to your hosted zone. */
	export interface ChangeInfo {
		Id: string;
		Status: ChangeInfoStatus;
		SubmittedAt: Date;
		Comment?: string | null;
	}

	/** A complex type that describes change information about changes made to your hosted zone. */
	export interface ChangeInfoFormProperties {
		Id: FormControl<string | null | undefined>,
		Status: FormControl<ChangeInfoStatus | null | undefined>,
		SubmittedAt: FormControl<Date | null | undefined>,
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateChangeInfoFormGroup() {
		return new FormGroup<ChangeInfoFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ChangeInfoStatus | null | undefined>(undefined),
			SubmittedAt: new FormControl<Date | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChangeInfoStatus { PENDING = 0, INSYNC = 1 }

	export enum VPCRegion { us_east_1 = 0, us_east_2 = 1, us_west_1 = 2, us_west_2 = 3, eu_west_1 = 4, eu_west_2 = 5, eu_west_3 = 6, eu_central_1 = 7, ap_east_1 = 8, me_south_1 = 9, us_gov_west_1 = 10, us_gov_east_1 = 11, us_iso_east_1 = 12, us_isob_east_1 = 13, ap_southeast_1 = 14, ap_southeast_2 = 15, ap_south_1 = 16, ap_northeast_1 = 17, ap_northeast_2 = 18, ap_northeast_3 = 19, eu_north_1 = 20, sa_east_1 = 21, ca_central_1 = 22, cn_north_1 = 23, af_south_1 = 24, eu_south_1 = 25 }

	export interface NoSuchHostedZone {
	}
	export interface NoSuchHostedZoneFormProperties {
	}
	export function CreateNoSuchHostedZoneFormGroup() {
		return new FormGroup<NoSuchHostedZoneFormProperties>({
		});

	}

	export interface NotAuthorizedException {
	}
	export interface NotAuthorizedExceptionFormProperties {
	}
	export function CreateNotAuthorizedExceptionFormGroup() {
		return new FormGroup<NotAuthorizedExceptionFormProperties>({
		});

	}

	export interface InvalidVPCId {
	}
	export interface InvalidVPCIdFormProperties {
	}
	export function CreateInvalidVPCIdFormGroup() {
		return new FormGroup<InvalidVPCIdFormProperties>({
		});

	}

	export interface InvalidInput {
	}
	export interface InvalidInputFormProperties {
	}
	export function CreateInvalidInputFormGroup() {
		return new FormGroup<InvalidInputFormProperties>({
		});

	}

	export interface PublicZoneVPCAssociation {
	}
	export interface PublicZoneVPCAssociationFormProperties {
	}
	export function CreatePublicZoneVPCAssociationFormGroup() {
		return new FormGroup<PublicZoneVPCAssociationFormProperties>({
		});

	}

	export interface ConflictingDomainExists {
	}
	export interface ConflictingDomainExistsFormProperties {
	}
	export function CreateConflictingDomainExistsFormGroup() {
		return new FormGroup<ConflictingDomainExistsFormProperties>({
		});

	}

	export interface LimitsExceeded {
	}
	export interface LimitsExceededFormProperties {
	}
	export function CreateLimitsExceededFormGroup() {
		return new FormGroup<LimitsExceededFormProperties>({
		});

	}


	/** A complex type containing the response for the request. */
	export interface ChangeResourceRecordSetsResponse {

		/**
		 * A complex type that describes change information about changes made to your hosted zone.
		 * Required
		 */
		ChangeInfo: ChangeInfo;
	}

	/** A complex type containing the response for the request. */
	export interface ChangeResourceRecordSetsResponseFormProperties {
	}
	export function CreateChangeResourceRecordSetsResponseFormGroup() {
		return new FormGroup<ChangeResourceRecordSetsResponseFormProperties>({
		});

	}


	/** The information for each resource record set that you want to change. */
	export interface Change {
		Action: ChangeAction;

		/**
		 * Information about the resource record set to create or delete.
		 * Required
		 */
		ResourceRecordSet: ResourceRecordSet;
	}

	/** The information for each resource record set that you want to change. */
	export interface ChangeFormProperties {
		Action: FormControl<ChangeAction | null | undefined>,
	}
	export function CreateChangeFormGroup() {
		return new FormGroup<ChangeFormProperties>({
			Action: new FormControl<ChangeAction | null | undefined>(undefined),
		});

	}

	export enum ChangeAction { CREATE = 0, DELETE = 1, UPSERT = 2 }


	/** Information about the resource record set to create or delete. */
	export interface ResourceRecordSet {
		Name: string;
		Type: ResourceRecordSetType;
		SetIdentifier?: string | null;
		Weight?: number | null;
		Region?: ResourceRecordSetRegion | null;

		/** A complex type that contains information about a geographic location. */
		GeoLocation?: GeoLocation;
		Failover?: ResourceRecordSetFailover | null;
		MultiValueAnswer?: boolean | null;
		TTL?: number | null;
		ResourceRecords?: Array<ResourceRecord>;

		/** <p> <i>Alias resource record sets only:</i> Information about the AWS resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to.</p> <p>When creating resource record sets for a private hosted zone, note the following:</p> <ul> <li> <p>Creating geolocation alias resource record sets or latency alias resource record sets in a private hosted zone is unsupported.</p> </li> <li> <p>For information about creating failover resource record sets in a private hosted zone, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a>.</p> </li> </ul> */
		AliasTarget?: AliasTarget;
		HealthCheckId?: string | null;
		TrafficPolicyInstanceId?: string | null;
	}

	/** Information about the resource record set to create or delete. */
	export interface ResourceRecordSetFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ResourceRecordSetType | null | undefined>,
		SetIdentifier: FormControl<string | null | undefined>,
		Weight: FormControl<number | null | undefined>,
		Region: FormControl<ResourceRecordSetRegion | null | undefined>,
		Failover: FormControl<ResourceRecordSetFailover | null | undefined>,
		MultiValueAnswer: FormControl<boolean | null | undefined>,
		TTL: FormControl<number | null | undefined>,
		HealthCheckId: FormControl<string | null | undefined>,
		TrafficPolicyInstanceId: FormControl<string | null | undefined>,
	}
	export function CreateResourceRecordSetFormGroup() {
		return new FormGroup<ResourceRecordSetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ResourceRecordSetType | null | undefined>(undefined),
			SetIdentifier: new FormControl<string | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
			Region: new FormControl<ResourceRecordSetRegion | null | undefined>(undefined),
			Failover: new FormControl<ResourceRecordSetFailover | null | undefined>(undefined),
			MultiValueAnswer: new FormControl<boolean | null | undefined>(undefined),
			TTL: new FormControl<number | null | undefined>(undefined),
			HealthCheckId: new FormControl<string | null | undefined>(undefined),
			TrafficPolicyInstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceRecordSetType { SOA = 0, A = 1, TXT = 2, NS = 3, CNAME = 4, MX = 5, NAPTR = 6, PTR = 7, SRV = 8, SPF = 9, AAAA = 10, CAA = 11 }

	export enum ResourceRecordSetRegion { us_east_1 = 0, us_east_2 = 1, us_west_1 = 2, us_west_2 = 3, ca_central_1 = 4, eu_west_1 = 5, eu_west_2 = 6, eu_west_3 = 7, eu_central_1 = 8, ap_southeast_1 = 9, ap_southeast_2 = 10, ap_northeast_1 = 11, ap_northeast_2 = 12, ap_northeast_3 = 13, eu_north_1 = 14, sa_east_1 = 15, cn_north_1 = 16, cn_northwest_1 = 17, ap_east_1 = 18, me_south_1 = 19, ap_south_1 = 20, af_south_1 = 21, eu_south_1 = 22 }


	/** A complex type that contains information about a geographic location. */
	export interface GeoLocation {
		ContinentCode?: string | null;
		CountryCode?: string | null;
		SubdivisionCode?: string | null;
	}

	/** A complex type that contains information about a geographic location. */
	export interface GeoLocationFormProperties {
		ContinentCode: FormControl<string | null | undefined>,
		CountryCode: FormControl<string | null | undefined>,
		SubdivisionCode: FormControl<string | null | undefined>,
	}
	export function CreateGeoLocationFormGroup() {
		return new FormGroup<GeoLocationFormProperties>({
			ContinentCode: new FormControl<string | null | undefined>(undefined),
			CountryCode: new FormControl<string | null | undefined>(undefined),
			SubdivisionCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceRecordSetFailover { PRIMARY = 0, SECONDARY = 1 }


	/** <p>Information specific to the resource record.</p> <note> <p>If you're creating an alias resource record set, omit <code>ResourceRecord</code>.</p> </note> */
	export interface ResourceRecord {
		Value: string;
	}

	/** <p>Information specific to the resource record.</p> <note> <p>If you're creating an alias resource record set, omit <code>ResourceRecord</code>.</p> </note> */
	export interface ResourceRecordFormProperties {
		Value: FormControl<string | null | undefined>,
	}
	export function CreateResourceRecordFormGroup() {
		return new FormGroup<ResourceRecordFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> <i>Alias resource record sets only:</i> Information about the AWS resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to.</p> <p>When creating resource record sets for a private hosted zone, note the following:</p> <ul> <li> <p>Creating geolocation alias resource record sets or latency alias resource record sets in a private hosted zone is unsupported.</p> </li> <li> <p>For information about creating failover resource record sets in a private hosted zone, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a>.</p> </li> </ul> */
	export interface AliasTarget {
		HostedZoneId: string;
		DNSName: string;
		EvaluateTargetHealth: boolean;
	}

	/** <p> <i>Alias resource record sets only:</i> Information about the AWS resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to.</p> <p>When creating resource record sets for a private hosted zone, note the following:</p> <ul> <li> <p>Creating geolocation alias resource record sets or latency alias resource record sets in a private hosted zone is unsupported.</p> </li> <li> <p>For information about creating failover resource record sets in a private hosted zone, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html">Configuring Failover in a Private Hosted Zone</a>.</p> </li> </ul> */
	export interface AliasTargetFormProperties {
		HostedZoneId: FormControl<string | null | undefined>,
		DNSName: FormControl<string | null | undefined>,
		EvaluateTargetHealth: FormControl<boolean | null | undefined>,
	}
	export function CreateAliasTargetFormGroup() {
		return new FormGroup<AliasTargetFormProperties>({
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
			DNSName: new FormControl<string | null | undefined>(undefined),
			EvaluateTargetHealth: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface NoSuchHealthCheck {
	}
	export interface NoSuchHealthCheckFormProperties {
	}
	export function CreateNoSuchHealthCheckFormGroup() {
		return new FormGroup<NoSuchHealthCheckFormProperties>({
		});

	}

	export interface InvalidChangeBatch {
	}
	export interface InvalidChangeBatchFormProperties {
	}
	export function CreateInvalidChangeBatchFormGroup() {
		return new FormGroup<InvalidChangeBatchFormProperties>({
		});

	}

	export interface PriorRequestNotComplete {
	}
	export interface PriorRequestNotCompleteFormProperties {
	}
	export function CreatePriorRequestNotCompleteFormGroup() {
		return new FormGroup<PriorRequestNotCompleteFormProperties>({
		});

	}


	/** Empty response for the request. */
	export interface ChangeTagsForResourceResponse {
	}

	/** Empty response for the request. */
	export interface ChangeTagsForResourceResponseFormProperties {
	}
	export function CreateChangeTagsForResourceResponseFormGroup() {
		return new FormGroup<ChangeTagsForResourceResponseFormProperties>({
		});

	}


	/** A complex type that contains information about a tag that you want to add or edit for the specified health check or hosted zone. */
	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}

	/** A complex type that contains information about a tag that you want to add or edit for the specified health check or hosted zone. */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}


	/** A complex type containing the response information for the new health check. */
	export interface CreateHealthCheckResponse {

		/**
		 * A complex type that contains information about one health check that is associated with the current AWS account.
		 * Required
		 */
		HealthCheck: HealthCheck;
	}

	/** A complex type containing the response information for the new health check. */
	export interface CreateHealthCheckResponseFormProperties {
	}
	export function CreateCreateHealthCheckResponseFormGroup() {
		return new FormGroup<CreateHealthCheckResponseFormProperties>({
		});

	}


	/** A complex type that contains information about one health check that is associated with the current AWS account. */
	export interface HealthCheck {
		Id: string;
		CallerReference: string;

		/** If a health check or hosted zone was created by another service, <code>LinkedService</code> is a complex type that describes the service that created the resource. When a resource is created by another service, you can't edit or delete it using Amazon Route 53. */
		LinkedService?: LinkedService;

		/**
		 * A complex type that contains information about the health check.
		 * Required
		 */
		HealthCheckConfig: HealthCheckConfig;
		HealthCheckVersion: number;

		/** A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check. */
		CloudWatchAlarmConfiguration?: CloudWatchAlarmConfiguration;
	}

	/** A complex type that contains information about one health check that is associated with the current AWS account. */
	export interface HealthCheckFormProperties {
		Id: FormControl<string | null | undefined>,
		CallerReference: FormControl<string | null | undefined>,
		HealthCheckVersion: FormControl<number | null | undefined>,
	}
	export function CreateHealthCheckFormGroup() {
		return new FormGroup<HealthCheckFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			CallerReference: new FormControl<string | null | undefined>(undefined),
			HealthCheckVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** If a health check or hosted zone was created by another service, <code>LinkedService</code> is a complex type that describes the service that created the resource. When a resource is created by another service, you can't edit or delete it using Amazon Route 53.  */
	export interface LinkedService {
		ServicePrincipal?: string | null;
		Description?: string | null;
	}

	/** If a health check or hosted zone was created by another service, <code>LinkedService</code> is a complex type that describes the service that created the resource. When a resource is created by another service, you can't edit or delete it using Amazon Route 53.  */
	export interface LinkedServiceFormProperties {
		ServicePrincipal: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateLinkedServiceFormGroup() {
		return new FormGroup<LinkedServiceFormProperties>({
			ServicePrincipal: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about the health check. */
	export interface HealthCheckConfig {
		IPAddress?: string | null;
		Port?: number | null;
		Type: HealthCheckConfigType;
		ResourcePath?: string | null;
		FullyQualifiedDomainName?: string | null;
		SearchString?: string | null;
		RequestInterval?: number | null;
		FailureThreshold?: number | null;
		MeasureLatency?: boolean | null;
		Inverted?: boolean | null;
		Disabled?: boolean | null;
		HealthThreshold?: number | null;
		ChildHealthChecks?: Array<string>;
		EnableSNI?: boolean | null;
		Regions?: Array<HealthCheckRegion>;

		/** A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy. */
		AlarmIdentifier?: AlarmIdentifier;
		InsufficientDataHealthStatus?: HealthCheckConfigInsufficientDataHealthStatus | null;
	}

	/** A complex type that contains information about the health check. */
	export interface HealthCheckConfigFormProperties {
		IPAddress: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		Type: FormControl<HealthCheckConfigType | null | undefined>,
		ResourcePath: FormControl<string | null | undefined>,
		FullyQualifiedDomainName: FormControl<string | null | undefined>,
		SearchString: FormControl<string | null | undefined>,
		RequestInterval: FormControl<number | null | undefined>,
		FailureThreshold: FormControl<number | null | undefined>,
		MeasureLatency: FormControl<boolean | null | undefined>,
		Inverted: FormControl<boolean | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
		HealthThreshold: FormControl<number | null | undefined>,
		EnableSNI: FormControl<boolean | null | undefined>,
		InsufficientDataHealthStatus: FormControl<HealthCheckConfigInsufficientDataHealthStatus | null | undefined>,
	}
	export function CreateHealthCheckConfigFormGroup() {
		return new FormGroup<HealthCheckConfigFormProperties>({
			IPAddress: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<HealthCheckConfigType | null | undefined>(undefined),
			ResourcePath: new FormControl<string | null | undefined>(undefined),
			FullyQualifiedDomainName: new FormControl<string | null | undefined>(undefined),
			SearchString: new FormControl<string | null | undefined>(undefined),
			RequestInterval: new FormControl<number | null | undefined>(undefined),
			FailureThreshold: new FormControl<number | null | undefined>(undefined),
			MeasureLatency: new FormControl<boolean | null | undefined>(undefined),
			Inverted: new FormControl<boolean | null | undefined>(undefined),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
			HealthThreshold: new FormControl<number | null | undefined>(undefined),
			EnableSNI: new FormControl<boolean | null | undefined>(undefined),
			InsufficientDataHealthStatus: new FormControl<HealthCheckConfigInsufficientDataHealthStatus | null | undefined>(undefined),
		});

	}

	export enum HealthCheckConfigType { HTTP = 0, HTTPS = 1, HTTP_STR_MATCH = 2, HTTPS_STR_MATCH = 3, TCP = 4, CALCULATED = 5, CLOUDWATCH_METRIC = 6 }

	export enum HealthCheckRegion { us_east_1 = 0, us_west_1 = 1, us_west_2 = 2, eu_west_1 = 3, ap_southeast_1 = 4, ap_southeast_2 = 5, ap_northeast_1 = 6, sa_east_1 = 7 }


	/** A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy. */
	export interface AlarmIdentifier {
		Region: AlarmIdentifierRegion;
		Name: string;
	}

	/** A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy. */
	export interface AlarmIdentifierFormProperties {
		Region: FormControl<AlarmIdentifierRegion | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAlarmIdentifierFormGroup() {
		return new FormGroup<AlarmIdentifierFormProperties>({
			Region: new FormControl<AlarmIdentifierRegion | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AlarmIdentifierRegion { us_east_1 = 0, us_east_2 = 1, us_west_1 = 2, us_west_2 = 3, ca_central_1 = 4, eu_central_1 = 5, eu_west_1 = 6, eu_west_2 = 7, eu_west_3 = 8, ap_east_1 = 9, me_south_1 = 10, ap_south_1 = 11, ap_southeast_1 = 12, ap_southeast_2 = 13, ap_northeast_1 = 14, ap_northeast_2 = 15, ap_northeast_3 = 16, eu_north_1 = 17, sa_east_1 = 18, cn_northwest_1 = 19, cn_north_1 = 20, af_south_1 = 21, eu_south_1 = 22, us_gov_west_1 = 23, us_gov_east_1 = 24, us_iso_east_1 = 25, us_isob_east_1 = 26 }

	export enum HealthCheckConfigInsufficientDataHealthStatus { Healthy = 0, Unhealthy = 1, LastKnownStatus = 2 }


	/** A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check. */
	export interface CloudWatchAlarmConfiguration {
		EvaluationPeriods: number;
		Threshold: number;
		ComparisonOperator: CloudWatchAlarmConfigurationComparisonOperator;
		Period: number;
		MetricName: string;
		Namespace: string;
		Statistic: CloudWatchAlarmConfigurationStatistic;
		Dimensions?: Array<Dimension>;
	}

	/** A complex type that contains information about the CloudWatch alarm that Amazon Route 53 is monitoring for this health check. */
	export interface CloudWatchAlarmConfigurationFormProperties {
		EvaluationPeriods: FormControl<number | null | undefined>,
		Threshold: FormControl<number | null | undefined>,
		ComparisonOperator: FormControl<CloudWatchAlarmConfigurationComparisonOperator | null | undefined>,
		Period: FormControl<number | null | undefined>,
		MetricName: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
		Statistic: FormControl<CloudWatchAlarmConfigurationStatistic | null | undefined>,
	}
	export function CreateCloudWatchAlarmConfigurationFormGroup() {
		return new FormGroup<CloudWatchAlarmConfigurationFormProperties>({
			EvaluationPeriods: new FormControl<number | null | undefined>(undefined),
			Threshold: new FormControl<number | null | undefined>(undefined),
			ComparisonOperator: new FormControl<CloudWatchAlarmConfigurationComparisonOperator | null | undefined>(undefined),
			Period: new FormControl<number | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined),
			Namespace: new FormControl<string | null | undefined>(undefined),
			Statistic: new FormControl<CloudWatchAlarmConfigurationStatistic | null | undefined>(undefined),
		});

	}

	export enum CloudWatchAlarmConfigurationComparisonOperator { GreaterThanOrEqualToThreshold = 0, GreaterThanThreshold = 1, LessThanThreshold = 2, LessThanOrEqualToThreshold = 3 }

	export enum CloudWatchAlarmConfigurationStatistic { Average = 0, Sum = 1, SampleCount = 2, Maximum = 3, Minimum = 4 }


	/** For the metric that the CloudWatch alarm is associated with, a complex type that contains information about one dimension. */
	export interface Dimension {
		Name: string;
		Value: string;
	}

	/** For the metric that the CloudWatch alarm is associated with, a complex type that contains information about one dimension. */
	export interface DimensionFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HealthCheckType { HTTP = 0, HTTPS = 1, HTTP_STR_MATCH = 2, HTTPS_STR_MATCH = 3, TCP = 4, CALCULATED = 5, CLOUDWATCH_METRIC = 6 }

	export enum InsufficientDataHealthStatus { Healthy = 0, Unhealthy = 1, LastKnownStatus = 2 }

	export interface TooManyHealthChecks {
	}
	export interface TooManyHealthChecksFormProperties {
	}
	export function CreateTooManyHealthChecksFormGroup() {
		return new FormGroup<TooManyHealthChecksFormProperties>({
		});

	}

	export interface HealthCheckAlreadyExists {
	}
	export interface HealthCheckAlreadyExistsFormProperties {
	}
	export function CreateHealthCheckAlreadyExistsFormGroup() {
		return new FormGroup<HealthCheckAlreadyExistsFormProperties>({
		});

	}


	/** A complex type containing the response information for the hosted zone. */
	export interface CreateHostedZoneResponse {

		/**
		 * A complex type that contains general information about the hosted zone.
		 * Required
		 */
		HostedZone: HostedZone;

		/**
		 * A complex type that describes change information about changes made to your hosted zone.
		 * Required
		 */
		ChangeInfo: ChangeInfo;

		/**
		 * A complex type that lists the name servers in a delegation set, as well as the <code>CallerReference</code> and the <code>ID</code> for the delegation set.
		 * Required
		 */
		DelegationSet: DelegationSet;

		/** (Private hosted zones only) A complex type that contains information about an Amazon VPC. */
		VPC?: VPC;
	}

	/** A complex type containing the response information for the hosted zone. */
	export interface CreateHostedZoneResponseFormProperties {
	}
	export function CreateCreateHostedZoneResponseFormGroup() {
		return new FormGroup<CreateHostedZoneResponseFormProperties>({
		});

	}


	/** A complex type that contains general information about the hosted zone. */
	export interface HostedZone {
		Id: string;
		Name: string;
		CallerReference: string;

		/** A complex type that contains an optional comment about your hosted zone. If you don't want to specify a comment, omit both the <code>HostedZoneConfig</code> and <code>Comment</code> elements. */
		Config?: HostedZoneConfig;
		ResourceRecordSetCount?: number | null;

		/** If a health check or hosted zone was created by another service, <code>LinkedService</code> is a complex type that describes the service that created the resource. When a resource is created by another service, you can't edit or delete it using Amazon Route 53. */
		LinkedService?: LinkedService;
	}

	/** A complex type that contains general information about the hosted zone. */
	export interface HostedZoneFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CallerReference: FormControl<string | null | undefined>,
		ResourceRecordSetCount: FormControl<number | null | undefined>,
	}
	export function CreateHostedZoneFormGroup() {
		return new FormGroup<HostedZoneFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			CallerReference: new FormControl<string | null | undefined>(undefined),
			ResourceRecordSetCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type that contains an optional comment about your hosted zone. If you don't want to specify a comment, omit both the <code>HostedZoneConfig</code> and <code>Comment</code> elements. */
	export interface HostedZoneConfig {
		Comment?: string | null;
		PrivateZone?: boolean | null;
	}

	/** A complex type that contains an optional comment about your hosted zone. If you don't want to specify a comment, omit both the <code>HostedZoneConfig</code> and <code>Comment</code> elements. */
	export interface HostedZoneConfigFormProperties {
		Comment: FormControl<string | null | undefined>,
		PrivateZone: FormControl<boolean | null | undefined>,
	}
	export function CreateHostedZoneConfigFormGroup() {
		return new FormGroup<HostedZoneConfigFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined),
			PrivateZone: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A complex type that lists the name servers in a delegation set, as well as the <code>CallerReference</code> and the <code>ID</code> for the delegation set. */
	export interface DelegationSet {
		Id?: string | null;
		CallerReference?: string | null;
		NameServers: Array<string>;
	}

	/** A complex type that lists the name servers in a delegation set, as well as the <code>CallerReference</code> and the <code>ID</code> for the delegation set. */
	export interface DelegationSetFormProperties {
		Id: FormControl<string | null | undefined>,
		CallerReference: FormControl<string | null | undefined>,
	}
	export function CreateDelegationSetFormGroup() {
		return new FormGroup<DelegationSetFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			CallerReference: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** (Private hosted zones only) A complex type that contains information about an Amazon VPC. */
	export interface VPC {
		VPCRegion?: VPCVPCRegion | null;

		/**
		 * (Private hosted zones only) The ID of an Amazon VPC.
		 * Max length: 1024
		 */
		VPCId?: string | null;
	}

	/** (Private hosted zones only) A complex type that contains information about an Amazon VPC. */
	export interface VPCFormProperties {
		VPCRegion: FormControl<VPCVPCRegion | null | undefined>,

		/**
		 * (Private hosted zones only) The ID of an Amazon VPC.
		 * Max length: 1024
		 */
		VPCId: FormControl<string | null | undefined>,
	}
	export function CreateVPCFormGroup() {
		return new FormGroup<VPCFormProperties>({
			VPCRegion: new FormControl<VPCVPCRegion | null | undefined>(undefined),
			VPCId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VPCVPCRegion { us_east_1 = 0, us_east_2 = 1, us_west_1 = 2, us_west_2 = 3, eu_west_1 = 4, eu_west_2 = 5, eu_west_3 = 6, eu_central_1 = 7, ap_east_1 = 8, me_south_1 = 9, us_gov_west_1 = 10, us_gov_east_1 = 11, us_iso_east_1 = 12, us_isob_east_1 = 13, ap_southeast_1 = 14, ap_southeast_2 = 15, ap_south_1 = 16, ap_northeast_1 = 17, ap_northeast_2 = 18, ap_northeast_3 = 19, eu_north_1 = 20, sa_east_1 = 21, ca_central_1 = 22, cn_north_1 = 23, af_south_1 = 24, eu_south_1 = 25 }

	export interface InvalidDomainName {
	}
	export interface InvalidDomainNameFormProperties {
	}
	export function CreateInvalidDomainNameFormGroup() {
		return new FormGroup<InvalidDomainNameFormProperties>({
		});

	}

	export interface HostedZoneAlreadyExists {
	}
	export interface HostedZoneAlreadyExistsFormProperties {
	}
	export function CreateHostedZoneAlreadyExistsFormGroup() {
		return new FormGroup<HostedZoneAlreadyExistsFormProperties>({
		});

	}

	export interface TooManyHostedZones {
	}
	export interface TooManyHostedZonesFormProperties {
	}
	export function CreateTooManyHostedZonesFormGroup() {
		return new FormGroup<TooManyHostedZonesFormProperties>({
		});

	}

	export interface DelegationSetNotAvailable {
	}
	export interface DelegationSetNotAvailableFormProperties {
	}
	export function CreateDelegationSetNotAvailableFormGroup() {
		return new FormGroup<DelegationSetNotAvailableFormProperties>({
		});

	}

	export interface NoSuchDelegationSet {
	}
	export interface NoSuchDelegationSetFormProperties {
	}
	export function CreateNoSuchDelegationSetFormGroup() {
		return new FormGroup<NoSuchDelegationSetFormProperties>({
		});

	}

	export interface DelegationSetNotReusable {
	}
	export interface DelegationSetNotReusableFormProperties {
	}
	export function CreateDelegationSetNotReusableFormGroup() {
		return new FormGroup<DelegationSetNotReusableFormProperties>({
		});

	}

	export interface CreateQueryLoggingConfigResponse {

		/**
		 * A complex type that contains information about a configuration for DNS query logging.
		 * Required
		 */
		QueryLoggingConfig: QueryLoggingConfig;
	}
	export interface CreateQueryLoggingConfigResponseFormProperties {
	}
	export function CreateCreateQueryLoggingConfigResponseFormGroup() {
		return new FormGroup<CreateQueryLoggingConfigResponseFormProperties>({
		});

	}


	/** A complex type that contains information about a configuration for DNS query logging. */
	export interface QueryLoggingConfig {
		Id: string;
		HostedZoneId: string;
		CloudWatchLogsLogGroupArn: string;
	}

	/** A complex type that contains information about a configuration for DNS query logging. */
	export interface QueryLoggingConfigFormProperties {
		Id: FormControl<string | null | undefined>,
		HostedZoneId: FormControl<string | null | undefined>,
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateQueryLoggingConfigFormGroup() {
		return new FormGroup<QueryLoggingConfigFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConcurrentModification {
	}
	export interface ConcurrentModificationFormProperties {
	}
	export function CreateConcurrentModificationFormGroup() {
		return new FormGroup<ConcurrentModificationFormProperties>({
		});

	}

	export interface NoSuchCloudWatchLogsLogGroup {
	}
	export interface NoSuchCloudWatchLogsLogGroupFormProperties {
	}
	export function CreateNoSuchCloudWatchLogsLogGroupFormGroup() {
		return new FormGroup<NoSuchCloudWatchLogsLogGroupFormProperties>({
		});

	}

	export interface QueryLoggingConfigAlreadyExists {
	}
	export interface QueryLoggingConfigAlreadyExistsFormProperties {
	}
	export function CreateQueryLoggingConfigAlreadyExistsFormGroup() {
		return new FormGroup<QueryLoggingConfigAlreadyExistsFormProperties>({
		});

	}

	export interface InsufficientCloudWatchLogsResourcePolicy {
	}
	export interface InsufficientCloudWatchLogsResourcePolicyFormProperties {
	}
	export function CreateInsufficientCloudWatchLogsResourcePolicyFormGroup() {
		return new FormGroup<InsufficientCloudWatchLogsResourcePolicyFormProperties>({
		});

	}

	export interface CreateReusableDelegationSetResponse {

		/**
		 * A complex type that lists the name servers in a delegation set, as well as the <code>CallerReference</code> and the <code>ID</code> for the delegation set.
		 * Required
		 */
		DelegationSet: DelegationSet;
	}
	export interface CreateReusableDelegationSetResponseFormProperties {
	}
	export function CreateCreateReusableDelegationSetResponseFormGroup() {
		return new FormGroup<CreateReusableDelegationSetResponseFormProperties>({
		});

	}

	export interface DelegationSetAlreadyCreated {
	}
	export interface DelegationSetAlreadyCreatedFormProperties {
	}
	export function CreateDelegationSetAlreadyCreatedFormGroup() {
		return new FormGroup<DelegationSetAlreadyCreatedFormProperties>({
		});

	}

	export interface HostedZoneNotFound {
	}
	export interface HostedZoneNotFoundFormProperties {
	}
	export function CreateHostedZoneNotFoundFormGroup() {
		return new FormGroup<HostedZoneNotFoundFormProperties>({
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

	export interface DelegationSetAlreadyReusable {
	}
	export interface DelegationSetAlreadyReusableFormProperties {
	}
	export function CreateDelegationSetAlreadyReusableFormGroup() {
		return new FormGroup<DelegationSetAlreadyReusableFormProperties>({
		});

	}


	/** A complex type that contains the response information for the <code>CreateTrafficPolicy</code> request. */
	export interface CreateTrafficPolicyResponse {

		/**
		 * A complex type that contains settings for a traffic policy.
		 * Required
		 */
		TrafficPolicy: TrafficPolicy;
	}

	/** A complex type that contains the response information for the <code>CreateTrafficPolicy</code> request. */
	export interface CreateTrafficPolicyResponseFormProperties {
	}
	export function CreateCreateTrafficPolicyResponseFormGroup() {
		return new FormGroup<CreateTrafficPolicyResponseFormProperties>({
		});

	}


	/** A complex type that contains settings for a traffic policy. */
	export interface TrafficPolicy {
		Id: string;
		Version: number;
		Name: string;
		Type: ResourceRecordSetType;
		Document: string;
		Comment?: string | null;
	}

	/** A complex type that contains settings for a traffic policy. */
	export interface TrafficPolicyFormProperties {
		Id: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ResourceRecordSetType | null | undefined>,
		Document: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateTrafficPolicyFormGroup() {
		return new FormGroup<TrafficPolicyFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ResourceRecordSetType | null | undefined>(undefined),
			Document: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TooManyTrafficPolicies {
	}
	export interface TooManyTrafficPoliciesFormProperties {
	}
	export function CreateTooManyTrafficPoliciesFormGroup() {
		return new FormGroup<TooManyTrafficPoliciesFormProperties>({
		});

	}

	export interface TrafficPolicyAlreadyExists {
	}
	export interface TrafficPolicyAlreadyExistsFormProperties {
	}
	export function CreateTrafficPolicyAlreadyExistsFormGroup() {
		return new FormGroup<TrafficPolicyAlreadyExistsFormProperties>({
		});

	}

	export interface InvalidTrafficPolicyDocument {
	}
	export interface InvalidTrafficPolicyDocumentFormProperties {
	}
	export function CreateInvalidTrafficPolicyDocumentFormGroup() {
		return new FormGroup<InvalidTrafficPolicyDocumentFormProperties>({
		});

	}


	/** A complex type that contains the response information for the <code>CreateTrafficPolicyInstance</code> request. */
	export interface CreateTrafficPolicyInstanceResponse {

		/**
		 * A complex type that contains settings for the new traffic policy instance.
		 * Required
		 */
		TrafficPolicyInstance: TrafficPolicyInstance;
	}

	/** A complex type that contains the response information for the <code>CreateTrafficPolicyInstance</code> request. */
	export interface CreateTrafficPolicyInstanceResponseFormProperties {
	}
	export function CreateCreateTrafficPolicyInstanceResponseFormGroup() {
		return new FormGroup<CreateTrafficPolicyInstanceResponseFormProperties>({
		});

	}


	/** A complex type that contains settings for the new traffic policy instance. */
	export interface TrafficPolicyInstance {
		Id: string;
		HostedZoneId: string;
		Name: string;
		TTL: number;
		State: string;
		Message: string;
		TrafficPolicyId: string;
		TrafficPolicyVersion: number;
		TrafficPolicyType: ResourceRecordSetType;
	}

	/** A complex type that contains settings for the new traffic policy instance. */
	export interface TrafficPolicyInstanceFormProperties {
		Id: FormControl<string | null | undefined>,
		HostedZoneId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		TTL: FormControl<number | null | undefined>,
		State: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		TrafficPolicyId: FormControl<string | null | undefined>,
		TrafficPolicyVersion: FormControl<number | null | undefined>,
		TrafficPolicyType: FormControl<ResourceRecordSetType | null | undefined>,
	}
	export function CreateTrafficPolicyInstanceFormGroup() {
		return new FormGroup<TrafficPolicyInstanceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			TTL: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			TrafficPolicyId: new FormControl<string | null | undefined>(undefined),
			TrafficPolicyVersion: new FormControl<number | null | undefined>(undefined),
			TrafficPolicyType: new FormControl<ResourceRecordSetType | null | undefined>(undefined),
		});

	}

	export interface TooManyTrafficPolicyInstances {
	}
	export interface TooManyTrafficPolicyInstancesFormProperties {
	}
	export function CreateTooManyTrafficPolicyInstancesFormGroup() {
		return new FormGroup<TooManyTrafficPolicyInstancesFormProperties>({
		});

	}

	export interface NoSuchTrafficPolicy {
	}
	export interface NoSuchTrafficPolicyFormProperties {
	}
	export function CreateNoSuchTrafficPolicyFormGroup() {
		return new FormGroup<NoSuchTrafficPolicyFormProperties>({
		});

	}

	export interface TrafficPolicyInstanceAlreadyExists {
	}
	export interface TrafficPolicyInstanceAlreadyExistsFormProperties {
	}
	export function CreateTrafficPolicyInstanceAlreadyExistsFormGroup() {
		return new FormGroup<TrafficPolicyInstanceAlreadyExistsFormProperties>({
		});

	}


	/** A complex type that contains the response information for the <code>CreateTrafficPolicyVersion</code> request. */
	export interface CreateTrafficPolicyVersionResponse {

		/**
		 * A complex type that contains settings for a traffic policy.
		 * Required
		 */
		TrafficPolicy: TrafficPolicy;
	}

	/** A complex type that contains the response information for the <code>CreateTrafficPolicyVersion</code> request. */
	export interface CreateTrafficPolicyVersionResponseFormProperties {
	}
	export function CreateCreateTrafficPolicyVersionResponseFormGroup() {
		return new FormGroup<CreateTrafficPolicyVersionResponseFormProperties>({
		});

	}

	export interface TooManyTrafficPolicyVersionsForCurrentPolicy {
	}
	export interface TooManyTrafficPolicyVersionsForCurrentPolicyFormProperties {
	}
	export function CreateTooManyTrafficPolicyVersionsForCurrentPolicyFormGroup() {
		return new FormGroup<TooManyTrafficPolicyVersionsForCurrentPolicyFormProperties>({
		});

	}


	/** A complex type that contains the response information from a <code>CreateVPCAssociationAuthorization</code> request. */
	export interface CreateVPCAssociationAuthorizationResponse {
		HostedZoneId: string;

		/**
		 * (Private hosted zones only) A complex type that contains information about an Amazon VPC.
		 * Required
		 */
		VPC: VPC;
	}

	/** A complex type that contains the response information from a <code>CreateVPCAssociationAuthorization</code> request. */
	export interface CreateVPCAssociationAuthorizationResponseFormProperties {
		HostedZoneId: FormControl<string | null | undefined>,
	}
	export function CreateCreateVPCAssociationAuthorizationResponseFormGroup() {
		return new FormGroup<CreateVPCAssociationAuthorizationResponseFormProperties>({
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TooManyVPCAssociationAuthorizations {
	}
	export interface TooManyVPCAssociationAuthorizationsFormProperties {
	}
	export function CreateTooManyVPCAssociationAuthorizationsFormGroup() {
		return new FormGroup<TooManyVPCAssociationAuthorizationsFormProperties>({
		});

	}


	/** An empty element. */
	export interface DeleteHealthCheckResponse {
	}

	/** An empty element. */
	export interface DeleteHealthCheckResponseFormProperties {
	}
	export function CreateDeleteHealthCheckResponseFormGroup() {
		return new FormGroup<DeleteHealthCheckResponseFormProperties>({
		});

	}

	export interface HealthCheckInUse {
	}
	export interface HealthCheckInUseFormProperties {
	}
	export function CreateHealthCheckInUseFormGroup() {
		return new FormGroup<HealthCheckInUseFormProperties>({
		});

	}


	/** A complex type that contains the response to a <code>DeleteHostedZone</code> request. */
	export interface DeleteHostedZoneResponse {

		/**
		 * A complex type that describes change information about changes made to your hosted zone.
		 * Required
		 */
		ChangeInfo: ChangeInfo;
	}

	/** A complex type that contains the response to a <code>DeleteHostedZone</code> request. */
	export interface DeleteHostedZoneResponseFormProperties {
	}
	export function CreateDeleteHostedZoneResponseFormGroup() {
		return new FormGroup<DeleteHostedZoneResponseFormProperties>({
		});

	}

	export interface HostedZoneNotEmpty {
	}
	export interface HostedZoneNotEmptyFormProperties {
	}
	export function CreateHostedZoneNotEmptyFormGroup() {
		return new FormGroup<HostedZoneNotEmptyFormProperties>({
		});

	}

	export interface DeleteQueryLoggingConfigResponse {
	}
	export interface DeleteQueryLoggingConfigResponseFormProperties {
	}
	export function CreateDeleteQueryLoggingConfigResponseFormGroup() {
		return new FormGroup<DeleteQueryLoggingConfigResponseFormProperties>({
		});

	}

	export interface NoSuchQueryLoggingConfig {
	}
	export interface NoSuchQueryLoggingConfigFormProperties {
	}
	export function CreateNoSuchQueryLoggingConfigFormGroup() {
		return new FormGroup<NoSuchQueryLoggingConfigFormProperties>({
		});

	}


	/** An empty element. */
	export interface DeleteReusableDelegationSetResponse {
	}

	/** An empty element. */
	export interface DeleteReusableDelegationSetResponseFormProperties {
	}
	export function CreateDeleteReusableDelegationSetResponseFormGroup() {
		return new FormGroup<DeleteReusableDelegationSetResponseFormProperties>({
		});

	}

	export interface DelegationSetInUse {
	}
	export interface DelegationSetInUseFormProperties {
	}
	export function CreateDelegationSetInUseFormGroup() {
		return new FormGroup<DelegationSetInUseFormProperties>({
		});

	}


	/** An empty element. */
	export interface DeleteTrafficPolicyResponse {
	}

	/** An empty element. */
	export interface DeleteTrafficPolicyResponseFormProperties {
	}
	export function CreateDeleteTrafficPolicyResponseFormGroup() {
		return new FormGroup<DeleteTrafficPolicyResponseFormProperties>({
		});

	}

	export interface TrafficPolicyInUse {
	}
	export interface TrafficPolicyInUseFormProperties {
	}
	export function CreateTrafficPolicyInUseFormGroup() {
		return new FormGroup<TrafficPolicyInUseFormProperties>({
		});

	}


	/** An empty element. */
	export interface DeleteTrafficPolicyInstanceResponse {
	}

	/** An empty element. */
	export interface DeleteTrafficPolicyInstanceResponseFormProperties {
	}
	export function CreateDeleteTrafficPolicyInstanceResponseFormGroup() {
		return new FormGroup<DeleteTrafficPolicyInstanceResponseFormProperties>({
		});

	}

	export interface NoSuchTrafficPolicyInstance {
	}
	export interface NoSuchTrafficPolicyInstanceFormProperties {
	}
	export function CreateNoSuchTrafficPolicyInstanceFormGroup() {
		return new FormGroup<NoSuchTrafficPolicyInstanceFormProperties>({
		});

	}


	/** Empty response for the request. */
	export interface DeleteVPCAssociationAuthorizationResponse {
	}

	/** Empty response for the request. */
	export interface DeleteVPCAssociationAuthorizationResponseFormProperties {
	}
	export function CreateDeleteVPCAssociationAuthorizationResponseFormGroup() {
		return new FormGroup<DeleteVPCAssociationAuthorizationResponseFormProperties>({
		});

	}

	export interface VPCAssociationAuthorizationNotFound {
	}
	export interface VPCAssociationAuthorizationNotFoundFormProperties {
	}
	export function CreateVPCAssociationAuthorizationNotFoundFormGroup() {
		return new FormGroup<VPCAssociationAuthorizationNotFoundFormProperties>({
		});

	}


	/** A complex type that contains the response information for the disassociate request. */
	export interface DisassociateVPCFromHostedZoneResponse {

		/**
		 * A complex type that describes change information about changes made to your hosted zone.
		 * Required
		 */
		ChangeInfo: ChangeInfo;
	}

	/** A complex type that contains the response information for the disassociate request. */
	export interface DisassociateVPCFromHostedZoneResponseFormProperties {
	}
	export function CreateDisassociateVPCFromHostedZoneResponseFormGroup() {
		return new FormGroup<DisassociateVPCFromHostedZoneResponseFormProperties>({
		});

	}

	export interface VPCAssociationNotFound {
	}
	export interface VPCAssociationNotFoundFormProperties {
	}
	export function CreateVPCAssociationNotFoundFormGroup() {
		return new FormGroup<VPCAssociationNotFoundFormProperties>({
		});

	}

	export interface LastVPCAssociation {
	}
	export interface LastVPCAssociationFormProperties {
	}
	export function CreateLastVPCAssociationFormGroup() {
		return new FormGroup<LastVPCAssociationFormProperties>({
		});

	}


	/** A complex type that contains the requested limit.  */
	export interface GetAccountLimitResponse {

		/**
		 * A complex type that contains the type of limit that you specified in the request and the current value for that limit.
		 * Required
		 */
		Limit: AccountLimit;
		Count: number;
	}

	/** A complex type that contains the requested limit.  */
	export interface GetAccountLimitResponseFormProperties {
		Count: FormControl<number | null | undefined>,
	}
	export function CreateGetAccountLimitResponseFormGroup() {
		return new FormGroup<GetAccountLimitResponseFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the type of limit that you specified in the request and the current value for that limit. */
	export interface AccountLimit {
		Type: AccountLimitType;
		Value: number;
	}

	/** A complex type that contains the type of limit that you specified in the request and the current value for that limit. */
	export interface AccountLimitFormProperties {
		Type: FormControl<AccountLimitType | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreateAccountLimitFormGroup() {
		return new FormGroup<AccountLimitFormProperties>({
			Type: new FormControl<AccountLimitType | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AccountLimitType { MAX_HEALTH_CHECKS_BY_OWNER = 0, MAX_HOSTED_ZONES_BY_OWNER = 1, MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER = 2, MAX_REUSABLE_DELEGATION_SETS_BY_OWNER = 3, MAX_TRAFFIC_POLICIES_BY_OWNER = 4 }


	/** A complex type that contains the <code>ChangeInfo</code> element. */
	export interface GetChangeResponse {

		/**
		 * A complex type that describes change information about changes made to your hosted zone.
		 * Required
		 */
		ChangeInfo: ChangeInfo;
	}

	/** A complex type that contains the <code>ChangeInfo</code> element. */
	export interface GetChangeResponseFormProperties {
	}
	export function CreateGetChangeResponseFormGroup() {
		return new FormGroup<GetChangeResponseFormProperties>({
		});

	}

	export interface NoSuchChange {
	}
	export interface NoSuchChangeFormProperties {
	}
	export function CreateNoSuchChangeFormGroup() {
		return new FormGroup<NoSuchChangeFormProperties>({
		});

	}


	/** A complex type that contains the <code>CheckerIpRanges</code> element. */
	export interface GetCheckerIpRangesResponse {
		CheckerIpRanges: Array<string>;
	}

	/** A complex type that contains the <code>CheckerIpRanges</code> element. */
	export interface GetCheckerIpRangesResponseFormProperties {
	}
	export function CreateGetCheckerIpRangesResponseFormGroup() {
		return new FormGroup<GetCheckerIpRangesResponseFormProperties>({
		});

	}


	/** A complex type that contains the response information for the specified geolocation code. */
	export interface GetGeoLocationResponse {

		/**
		 * A complex type that contains the codes and full continent, country, and subdivision names for the specified <code>geolocation</code> code.
		 * Required
		 */
		GeoLocationDetails: GeoLocationDetails;
	}

	/** A complex type that contains the response information for the specified geolocation code. */
	export interface GetGeoLocationResponseFormProperties {
	}
	export function CreateGetGeoLocationResponseFormGroup() {
		return new FormGroup<GetGeoLocationResponseFormProperties>({
		});

	}


	/** A complex type that contains the codes and full continent, country, and subdivision names for the specified <code>geolocation</code> code. */
	export interface GeoLocationDetails {
		ContinentCode?: string | null;
		ContinentName?: string | null;
		CountryCode?: string | null;
		CountryName?: string | null;
		SubdivisionCode?: string | null;
		SubdivisionName?: string | null;
	}

	/** A complex type that contains the codes and full continent, country, and subdivision names for the specified <code>geolocation</code> code. */
	export interface GeoLocationDetailsFormProperties {
		ContinentCode: FormControl<string | null | undefined>,
		ContinentName: FormControl<string | null | undefined>,
		CountryCode: FormControl<string | null | undefined>,
		CountryName: FormControl<string | null | undefined>,
		SubdivisionCode: FormControl<string | null | undefined>,
		SubdivisionName: FormControl<string | null | undefined>,
	}
	export function CreateGeoLocationDetailsFormGroup() {
		return new FormGroup<GeoLocationDetailsFormProperties>({
			ContinentCode: new FormControl<string | null | undefined>(undefined),
			ContinentName: new FormControl<string | null | undefined>(undefined),
			CountryCode: new FormControl<string | null | undefined>(undefined),
			CountryName: new FormControl<string | null | undefined>(undefined),
			SubdivisionCode: new FormControl<string | null | undefined>(undefined),
			SubdivisionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NoSuchGeoLocation {
	}
	export interface NoSuchGeoLocationFormProperties {
	}
	export function CreateNoSuchGeoLocationFormGroup() {
		return new FormGroup<NoSuchGeoLocationFormProperties>({
		});

	}


	/** A complex type that contains the response to a <code>GetHealthCheck</code> request. */
	export interface GetHealthCheckResponse {

		/**
		 * A complex type that contains information about one health check that is associated with the current AWS account.
		 * Required
		 */
		HealthCheck: HealthCheck;
	}

	/** A complex type that contains the response to a <code>GetHealthCheck</code> request. */
	export interface GetHealthCheckResponseFormProperties {
	}
	export function CreateGetHealthCheckResponseFormGroup() {
		return new FormGroup<GetHealthCheckResponseFormProperties>({
		});

	}

	export interface IncompatibleVersion {
	}
	export interface IncompatibleVersionFormProperties {
	}
	export function CreateIncompatibleVersionFormGroup() {
		return new FormGroup<IncompatibleVersionFormProperties>({
		});

	}


	/** A complex type that contains the response to a <code>GetHealthCheckCount</code> request. */
	export interface GetHealthCheckCountResponse {
		HealthCheckCount: number;
	}

	/** A complex type that contains the response to a <code>GetHealthCheckCount</code> request. */
	export interface GetHealthCheckCountResponseFormProperties {
		HealthCheckCount: FormControl<number | null | undefined>,
	}
	export function CreateGetHealthCheckCountResponseFormGroup() {
		return new FormGroup<GetHealthCheckCountResponseFormProperties>({
			HealthCheckCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the response to a <code>GetHealthCheckLastFailureReason</code> request. */
	export interface GetHealthCheckLastFailureReasonResponse {
		HealthCheckObservations: Array<HealthCheckObservation>;
	}

	/** A complex type that contains the response to a <code>GetHealthCheckLastFailureReason</code> request. */
	export interface GetHealthCheckLastFailureReasonResponseFormProperties {
	}
	export function CreateGetHealthCheckLastFailureReasonResponseFormGroup() {
		return new FormGroup<GetHealthCheckLastFailureReasonResponseFormProperties>({
		});

	}


	/** A complex type that contains the last failure reason as reported by one Amazon Route 53 health checker. */
	export interface HealthCheckObservation {
		Region?: HealthCheckObservationRegion | null;
		IPAddress?: string | null;

		/** A complex type that contains the status that one Amazon Route 53 health checker reports and the time of the health check. */
		StatusReport?: StatusReport;
	}

	/** A complex type that contains the last failure reason as reported by one Amazon Route 53 health checker. */
	export interface HealthCheckObservationFormProperties {
		Region: FormControl<HealthCheckObservationRegion | null | undefined>,
		IPAddress: FormControl<string | null | undefined>,
	}
	export function CreateHealthCheckObservationFormGroup() {
		return new FormGroup<HealthCheckObservationFormProperties>({
			Region: new FormControl<HealthCheckObservationRegion | null | undefined>(undefined),
			IPAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HealthCheckObservationRegion { us_east_1 = 0, us_west_1 = 1, us_west_2 = 2, eu_west_1 = 3, ap_southeast_1 = 4, ap_southeast_2 = 5, ap_northeast_1 = 6, sa_east_1 = 7 }


	/** A complex type that contains the status that one Amazon Route 53 health checker reports and the time of the health check. */
	export interface StatusReport {
		Status?: string | null;
		CheckedTime?: Date | null;
	}

	/** A complex type that contains the status that one Amazon Route 53 health checker reports and the time of the health check. */
	export interface StatusReportFormProperties {
		Status: FormControl<string | null | undefined>,
		CheckedTime: FormControl<Date | null | undefined>,
	}
	export function CreateStatusReportFormGroup() {
		return new FormGroup<StatusReportFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
			CheckedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the response to a <code>GetHealthCheck</code> request. */
	export interface GetHealthCheckStatusResponse {
		HealthCheckObservations: Array<HealthCheckObservation>;
	}

	/** A complex type that contains the response to a <code>GetHealthCheck</code> request. */
	export interface GetHealthCheckStatusResponseFormProperties {
	}
	export function CreateGetHealthCheckStatusResponseFormGroup() {
		return new FormGroup<GetHealthCheckStatusResponseFormProperties>({
		});

	}


	/** A complex type that contain the response to a <code>GetHostedZone</code> request. */
	export interface GetHostedZoneResponse {

		/**
		 * A complex type that contains general information about the hosted zone.
		 * Required
		 */
		HostedZone: HostedZone;

		/** A complex type that lists the name servers in a delegation set, as well as the <code>CallerReference</code> and the <code>ID</code> for the delegation set. */
		DelegationSet?: DelegationSet;

		/**
		 * (Private hosted zones only) A list of <code>VPC</code> elements.
		 * Minimum items: 1
		 */
		VPCs?: Array<VPC>;
	}

	/** A complex type that contain the response to a <code>GetHostedZone</code> request. */
	export interface GetHostedZoneResponseFormProperties {
	}
	export function CreateGetHostedZoneResponseFormGroup() {
		return new FormGroup<GetHostedZoneResponseFormProperties>({
		});

	}


	/** A complex type that contains the response to a <code>GetHostedZoneCount</code> request. */
	export interface GetHostedZoneCountResponse {
		HostedZoneCount: number;
	}

	/** A complex type that contains the response to a <code>GetHostedZoneCount</code> request. */
	export interface GetHostedZoneCountResponseFormProperties {
		HostedZoneCount: FormControl<number | null | undefined>,
	}
	export function CreateGetHostedZoneCountResponseFormGroup() {
		return new FormGroup<GetHostedZoneCountResponseFormProperties>({
			HostedZoneCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the requested limit.  */
	export interface GetHostedZoneLimitResponse {

		/**
		 * A complex type that contains the type of limit that you specified in the request and the current value for that limit.
		 * Required
		 */
		Limit: HostedZoneLimit;
		Count: number;
	}

	/** A complex type that contains the requested limit.  */
	export interface GetHostedZoneLimitResponseFormProperties {
		Count: FormControl<number | null | undefined>,
	}
	export function CreateGetHostedZoneLimitResponseFormGroup() {
		return new FormGroup<GetHostedZoneLimitResponseFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the type of limit that you specified in the request and the current value for that limit. */
	export interface HostedZoneLimit {
		Type: HostedZoneLimitType;
		Value: number;
	}

	/** A complex type that contains the type of limit that you specified in the request and the current value for that limit. */
	export interface HostedZoneLimitFormProperties {
		Type: FormControl<HostedZoneLimitType | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreateHostedZoneLimitFormGroup() {
		return new FormGroup<HostedZoneLimitFormProperties>({
			Type: new FormControl<HostedZoneLimitType | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum HostedZoneLimitType { MAX_RRSETS_BY_ZONE = 0, MAX_VPCS_ASSOCIATED_BY_ZONE = 1 }

	export interface HostedZoneNotPrivate {
	}
	export interface HostedZoneNotPrivateFormProperties {
	}
	export function CreateHostedZoneNotPrivateFormGroup() {
		return new FormGroup<HostedZoneNotPrivateFormProperties>({
		});

	}

	export interface GetQueryLoggingConfigResponse {

		/**
		 * A complex type that contains information about a configuration for DNS query logging.
		 * Required
		 */
		QueryLoggingConfig: QueryLoggingConfig;
	}
	export interface GetQueryLoggingConfigResponseFormProperties {
	}
	export function CreateGetQueryLoggingConfigResponseFormGroup() {
		return new FormGroup<GetQueryLoggingConfigResponseFormProperties>({
		});

	}


	/** A complex type that contains the response to the <code>GetReusableDelegationSet</code> request. */
	export interface GetReusableDelegationSetResponse {

		/**
		 * A complex type that lists the name servers in a delegation set, as well as the <code>CallerReference</code> and the <code>ID</code> for the delegation set.
		 * Required
		 */
		DelegationSet: DelegationSet;
	}

	/** A complex type that contains the response to the <code>GetReusableDelegationSet</code> request. */
	export interface GetReusableDelegationSetResponseFormProperties {
	}
	export function CreateGetReusableDelegationSetResponseFormGroup() {
		return new FormGroup<GetReusableDelegationSetResponseFormProperties>({
		});

	}


	/** A complex type that contains the requested limit.  */
	export interface GetReusableDelegationSetLimitResponse {

		/**
		 * A complex type that contains the type of limit that you specified in the request and the current value for that limit.
		 * Required
		 */
		Limit: ReusableDelegationSetLimit;
		Count: number;
	}

	/** A complex type that contains the requested limit.  */
	export interface GetReusableDelegationSetLimitResponseFormProperties {
		Count: FormControl<number | null | undefined>,
	}
	export function CreateGetReusableDelegationSetLimitResponseFormGroup() {
		return new FormGroup<GetReusableDelegationSetLimitResponseFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the type of limit that you specified in the request and the current value for that limit. */
	export interface ReusableDelegationSetLimit {
		Type: ReusableDelegationSetLimitType;
		Value: number;
	}

	/** A complex type that contains the type of limit that you specified in the request and the current value for that limit. */
	export interface ReusableDelegationSetLimitFormProperties {
		Type: FormControl<ReusableDelegationSetLimitType | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreateReusableDelegationSetLimitFormGroup() {
		return new FormGroup<ReusableDelegationSetLimitFormProperties>({
			Type: new FormControl<ReusableDelegationSetLimitType | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ReusableDelegationSetLimitType { MAX_ZONES_BY_REUSABLE_DELEGATION_SET = 0 }


	/** A complex type that contains the response information for the request. */
	export interface GetTrafficPolicyResponse {

		/**
		 * A complex type that contains settings for a traffic policy.
		 * Required
		 */
		TrafficPolicy: TrafficPolicy;
	}

	/** A complex type that contains the response information for the request. */
	export interface GetTrafficPolicyResponseFormProperties {
	}
	export function CreateGetTrafficPolicyResponseFormGroup() {
		return new FormGroup<GetTrafficPolicyResponseFormProperties>({
		});

	}


	/** A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy. */
	export interface GetTrafficPolicyInstanceResponse {

		/**
		 * A complex type that contains settings for the new traffic policy instance.
		 * Required
		 */
		TrafficPolicyInstance: TrafficPolicyInstance;
	}

	/** A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy. */
	export interface GetTrafficPolicyInstanceResponseFormProperties {
	}
	export function CreateGetTrafficPolicyInstanceResponseFormGroup() {
		return new FormGroup<GetTrafficPolicyInstanceResponseFormProperties>({
		});

	}


	/** A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy. */
	export interface GetTrafficPolicyInstanceCountResponse {
		TrafficPolicyInstanceCount: number;
	}

	/** A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy. */
	export interface GetTrafficPolicyInstanceCountResponseFormProperties {
		TrafficPolicyInstanceCount: FormControl<number | null | undefined>,
	}
	export function CreateGetTrafficPolicyInstanceCountResponseFormGroup() {
		return new FormGroup<GetTrafficPolicyInstanceCountResponseFormProperties>({
			TrafficPolicyInstanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type containing the response information for the request. */
	export interface ListGeoLocationsResponse {
		GeoLocationDetailsList: Array<GeoLocationDetails>;
		IsTruncated: boolean;
		NextContinentCode?: string | null;
		NextCountryCode?: string | null;
		NextSubdivisionCode?: string | null;
		MaxItems: string;
	}

	/** A complex type containing the response information for the request. */
	export interface ListGeoLocationsResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		NextContinentCode: FormControl<string | null | undefined>,
		NextCountryCode: FormControl<string | null | undefined>,
		NextSubdivisionCode: FormControl<string | null | undefined>,
		MaxItems: FormControl<string | null | undefined>,
	}
	export function CreateListGeoLocationsResponseFormGroup() {
		return new FormGroup<ListGeoLocationsResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			NextContinentCode: new FormControl<string | null | undefined>(undefined),
			NextCountryCode: new FormControl<string | null | undefined>(undefined),
			NextSubdivisionCode: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the response to a <code>ListHealthChecks</code> request. */
	export interface ListHealthChecksResponse {
		HealthChecks: Array<HealthCheck>;
		Marker: string;
		IsTruncated: boolean;
		NextMarker?: string | null;
		MaxItems: string;
	}

	/** A complex type that contains the response to a <code>ListHealthChecks</code> request. */
	export interface ListHealthChecksResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
		IsTruncated: FormControl<boolean | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
		MaxItems: FormControl<string | null | undefined>,
	}
	export function CreateListHealthChecksResponseFormGroup() {
		return new FormGroup<ListHealthChecksResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListHostedZonesResponse {
		HostedZones: Array<HostedZone>;
		Marker: string;
		IsTruncated: boolean;
		NextMarker?: string | null;
		MaxItems: string;
	}
	export interface ListHostedZonesResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
		IsTruncated: FormControl<boolean | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
		MaxItems: FormControl<string | null | undefined>,
	}
	export function CreateListHostedZonesResponseFormGroup() {
		return new FormGroup<ListHostedZonesResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the response information for the request. */
	export interface ListHostedZonesByNameResponse {
		HostedZones: Array<HostedZone>;
		DNSName?: string | null;
		HostedZoneId?: string | null;
		IsTruncated: boolean;
		NextDNSName?: string | null;
		NextHostedZoneId?: string | null;
		MaxItems: string;
	}

	/** A complex type that contains the response information for the request. */
	export interface ListHostedZonesByNameResponseFormProperties {
		DNSName: FormControl<string | null | undefined>,
		HostedZoneId: FormControl<string | null | undefined>,
		IsTruncated: FormControl<boolean | null | undefined>,
		NextDNSName: FormControl<string | null | undefined>,
		NextHostedZoneId: FormControl<string | null | undefined>,
		MaxItems: FormControl<string | null | undefined>,
	}
	export function CreateListHostedZonesByNameResponseFormGroup() {
		return new FormGroup<ListHostedZonesByNameResponseFormProperties>({
			DNSName: new FormControl<string | null | undefined>(undefined),
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			NextDNSName: new FormControl<string | null | undefined>(undefined),
			NextHostedZoneId: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListQueryLoggingConfigsResponse {
		QueryLoggingConfigs: Array<QueryLoggingConfig>;
		NextToken?: string | null;
	}
	export interface ListQueryLoggingConfigsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListQueryLoggingConfigsResponseFormGroup() {
		return new FormGroup<ListQueryLoggingConfigsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidPaginationToken {
	}
	export interface InvalidPaginationTokenFormProperties {
	}
	export function CreateInvalidPaginationTokenFormGroup() {
		return new FormGroup<InvalidPaginationTokenFormProperties>({
		});

	}


	/** A complex type that contains list information for the resource record set. */
	export interface ListResourceRecordSetsResponse {
		ResourceRecordSets: Array<ResourceRecordSet>;
		IsTruncated: boolean;
		NextRecordName?: string | null;
		NextRecordType?: ResourceRecordSetType | null;
		NextRecordIdentifier?: string | null;
		MaxItems: string;
	}

	/** A complex type that contains list information for the resource record set. */
	export interface ListResourceRecordSetsResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		NextRecordName: FormControl<string | null | undefined>,
		NextRecordType: FormControl<ResourceRecordSetType | null | undefined>,
		NextRecordIdentifier: FormControl<string | null | undefined>,
		MaxItems: FormControl<string | null | undefined>,
	}
	export function CreateListResourceRecordSetsResponseFormGroup() {
		return new FormGroup<ListResourceRecordSetsResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			NextRecordName: new FormControl<string | null | undefined>(undefined),
			NextRecordType: new FormControl<ResourceRecordSetType | null | undefined>(undefined),
			NextRecordIdentifier: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about the reusable delegation sets that are associated with the current AWS account. */
	export interface ListReusableDelegationSetsResponse {
		DelegationSets: Array<DelegationSet>;
		Marker: string;
		IsTruncated: boolean;
		NextMarker?: string | null;
		MaxItems: string;
	}

	/** A complex type that contains information about the reusable delegation sets that are associated with the current AWS account. */
	export interface ListReusableDelegationSetsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
		IsTruncated: FormControl<boolean | null | undefined>,
		NextMarker: FormControl<string | null | undefined>,
		MaxItems: FormControl<string | null | undefined>,
	}
	export function CreateListReusableDelegationSetsResponseFormGroup() {
		return new FormGroup<ListReusableDelegationSetsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			NextMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about the health checks or hosted zones for which you want to list tags. */
	export interface ListTagsForResourceResponse {

		/**
		 * A complex type containing a resource and its associated tags.
		 * Required
		 */
		ResourceTagSet: ResourceTagSet;
	}

	/** A complex type that contains information about the health checks or hosted zones for which you want to list tags. */
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** A complex type containing a resource and its associated tags. */
	export interface ResourceTagSet {
		ResourceType?: ResourceTagSetResourceType | null;
		ResourceId?: string | null;
		Tags?: Array<Tag>;
	}

	/** A complex type containing a resource and its associated tags. */
	export interface ResourceTagSetFormProperties {
		ResourceType: FormControl<ResourceTagSetResourceType | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateResourceTagSetFormGroup() {
		return new FormGroup<ResourceTagSetFormProperties>({
			ResourceType: new FormControl<ResourceTagSetResourceType | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceTagSetResourceType { healthcheck = 0, hostedzone = 1 }


	/** A complex type containing tags for the specified resources. */
	export interface ListTagsForResourcesResponse {
		ResourceTagSets: Array<ResourceTagSet>;
	}

	/** A complex type containing tags for the specified resources. */
	export interface ListTagsForResourcesResponseFormProperties {
	}
	export function CreateListTagsForResourcesResponseFormGroup() {
		return new FormGroup<ListTagsForResourcesResponseFormProperties>({
		});

	}


	/** A complex type that contains the response information for the request. */
	export interface ListTrafficPoliciesResponse {
		TrafficPolicySummaries: Array<TrafficPolicySummary>;
		IsTruncated: boolean;
		TrafficPolicyIdMarker: string;
		MaxItems: string;
	}

	/** A complex type that contains the response information for the request. */
	export interface ListTrafficPoliciesResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		TrafficPolicyIdMarker: FormControl<string | null | undefined>,
		MaxItems: FormControl<string | null | undefined>,
	}
	export function CreateListTrafficPoliciesResponseFormGroup() {
		return new FormGroup<ListTrafficPoliciesResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			TrafficPolicyIdMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about the latest version of one traffic policy that is associated with the current AWS account. */
	export interface TrafficPolicySummary {
		Id: string;
		Name: string;
		Type: ResourceRecordSetType;
		LatestVersion: number;
		TrafficPolicyCount: number;
	}

	/** A complex type that contains information about the latest version of one traffic policy that is associated with the current AWS account. */
	export interface TrafficPolicySummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ResourceRecordSetType | null | undefined>,
		LatestVersion: FormControl<number | null | undefined>,
		TrafficPolicyCount: FormControl<number | null | undefined>,
	}
	export function CreateTrafficPolicySummaryFormGroup() {
		return new FormGroup<TrafficPolicySummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ResourceRecordSetType | null | undefined>(undefined),
			LatestVersion: new FormControl<number | null | undefined>(undefined),
			TrafficPolicyCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the response information for the request. */
	export interface ListTrafficPolicyInstancesResponse {
		TrafficPolicyInstances: Array<TrafficPolicyInstance>;
		HostedZoneIdMarker?: string | null;
		TrafficPolicyInstanceNameMarker?: string | null;
		TrafficPolicyInstanceTypeMarker?: ResourceRecordSetType | null;
		IsTruncated: boolean;
		MaxItems: string;
	}

	/** A complex type that contains the response information for the request. */
	export interface ListTrafficPolicyInstancesResponseFormProperties {
		HostedZoneIdMarker: FormControl<string | null | undefined>,
		TrafficPolicyInstanceNameMarker: FormControl<string | null | undefined>,
		TrafficPolicyInstanceTypeMarker: FormControl<ResourceRecordSetType | null | undefined>,
		IsTruncated: FormControl<boolean | null | undefined>,
		MaxItems: FormControl<string | null | undefined>,
	}
	export function CreateListTrafficPolicyInstancesResponseFormGroup() {
		return new FormGroup<ListTrafficPolicyInstancesResponseFormProperties>({
			HostedZoneIdMarker: new FormControl<string | null | undefined>(undefined),
			TrafficPolicyInstanceNameMarker: new FormControl<string | null | undefined>(undefined),
			TrafficPolicyInstanceTypeMarker: new FormControl<ResourceRecordSetType | null | undefined>(undefined),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			MaxItems: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the response information for the request. */
	export interface ListTrafficPolicyInstancesByHostedZoneResponse {
		TrafficPolicyInstances: Array<TrafficPolicyInstance>;
		TrafficPolicyInstanceNameMarker?: string | null;
		TrafficPolicyInstanceTypeMarker?: ResourceRecordSetType | null;
		IsTruncated: boolean;
		MaxItems: string;
	}

	/** A complex type that contains the response information for the request. */
	export interface ListTrafficPolicyInstancesByHostedZoneResponseFormProperties {
		TrafficPolicyInstanceNameMarker: FormControl<string | null | undefined>,
		TrafficPolicyInstanceTypeMarker: FormControl<ResourceRecordSetType | null | undefined>,
		IsTruncated: FormControl<boolean | null | undefined>,
		MaxItems: FormControl<string | null | undefined>,
	}
	export function CreateListTrafficPolicyInstancesByHostedZoneResponseFormGroup() {
		return new FormGroup<ListTrafficPolicyInstancesByHostedZoneResponseFormProperties>({
			TrafficPolicyInstanceNameMarker: new FormControl<string | null | undefined>(undefined),
			TrafficPolicyInstanceTypeMarker: new FormControl<ResourceRecordSetType | null | undefined>(undefined),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			MaxItems: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the response information for the request. */
	export interface ListTrafficPolicyInstancesByPolicyResponse {
		TrafficPolicyInstances: Array<TrafficPolicyInstance>;
		HostedZoneIdMarker?: string | null;
		TrafficPolicyInstanceNameMarker?: string | null;
		TrafficPolicyInstanceTypeMarker?: ResourceRecordSetType | null;
		IsTruncated: boolean;
		MaxItems: string;
	}

	/** A complex type that contains the response information for the request. */
	export interface ListTrafficPolicyInstancesByPolicyResponseFormProperties {
		HostedZoneIdMarker: FormControl<string | null | undefined>,
		TrafficPolicyInstanceNameMarker: FormControl<string | null | undefined>,
		TrafficPolicyInstanceTypeMarker: FormControl<ResourceRecordSetType | null | undefined>,
		IsTruncated: FormControl<boolean | null | undefined>,
		MaxItems: FormControl<string | null | undefined>,
	}
	export function CreateListTrafficPolicyInstancesByPolicyResponseFormGroup() {
		return new FormGroup<ListTrafficPolicyInstancesByPolicyResponseFormProperties>({
			HostedZoneIdMarker: new FormControl<string | null | undefined>(undefined),
			TrafficPolicyInstanceNameMarker: new FormControl<string | null | undefined>(undefined),
			TrafficPolicyInstanceTypeMarker: new FormControl<ResourceRecordSetType | null | undefined>(undefined),
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			MaxItems: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the response information for the request. */
	export interface ListTrafficPolicyVersionsResponse {
		TrafficPolicies: Array<TrafficPolicy>;
		IsTruncated: boolean;
		TrafficPolicyVersionMarker: string;
		MaxItems: string;
	}

	/** A complex type that contains the response information for the request. */
	export interface ListTrafficPolicyVersionsResponseFormProperties {
		IsTruncated: FormControl<boolean | null | undefined>,
		TrafficPolicyVersionMarker: FormControl<string | null | undefined>,
		MaxItems: FormControl<string | null | undefined>,
	}
	export function CreateListTrafficPolicyVersionsResponseFormGroup() {
		return new FormGroup<ListTrafficPolicyVersionsResponseFormProperties>({
			IsTruncated: new FormControl<boolean | null | undefined>(undefined),
			TrafficPolicyVersionMarker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the response information for the request. */
	export interface ListVPCAssociationAuthorizationsResponse {
		HostedZoneId: string;
		NextToken?: string | null;

		/**
		 * (Private hosted zones only) A list of <code>VPC</code> elements.
		 * Required
		 * Minimum items: 1
		 */
		VPCs: Array<VPC>;
	}

	/** A complex type that contains the response information for the request. */
	export interface ListVPCAssociationAuthorizationsResponseFormProperties {
		HostedZoneId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVPCAssociationAuthorizationsResponseFormGroup() {
		return new FormGroup<ListVPCAssociationAuthorizationsResponseFormProperties>({
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the response to a <code>TestDNSAnswer</code> request.  */
	export interface TestDNSAnswerResponse {
		Nameserver: string;
		RecordName: string;
		RecordType: ResourceRecordSetType;
		RecordData: Array<string>;
		ResponseCode: string;
		Protocol: string;
	}

	/** A complex type that contains the response to a <code>TestDNSAnswer</code> request.  */
	export interface TestDNSAnswerResponseFormProperties {
		Nameserver: FormControl<string | null | undefined>,
		RecordName: FormControl<string | null | undefined>,
		RecordType: FormControl<ResourceRecordSetType | null | undefined>,
		ResponseCode: FormControl<string | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
	}
	export function CreateTestDNSAnswerResponseFormGroup() {
		return new FormGroup<TestDNSAnswerResponseFormProperties>({
			Nameserver: new FormControl<string | null | undefined>(undefined),
			RecordName: new FormControl<string | null | undefined>(undefined),
			RecordType: new FormControl<ResourceRecordSetType | null | undefined>(undefined),
			ResponseCode: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the response to the <code>UpdateHealthCheck</code> request. */
	export interface UpdateHealthCheckResponse {

		/**
		 * A complex type that contains information about one health check that is associated with the current AWS account.
		 * Required
		 */
		HealthCheck: HealthCheck;
	}

	/** A complex type that contains the response to the <code>UpdateHealthCheck</code> request. */
	export interface UpdateHealthCheckResponseFormProperties {
	}
	export function CreateUpdateHealthCheckResponseFormGroup() {
		return new FormGroup<UpdateHealthCheckResponseFormProperties>({
		});

	}

	export enum CloudWatchRegion { us_east_1 = 0, us_east_2 = 1, us_west_1 = 2, us_west_2 = 3, ca_central_1 = 4, eu_central_1 = 5, eu_west_1 = 6, eu_west_2 = 7, eu_west_3 = 8, ap_east_1 = 9, me_south_1 = 10, ap_south_1 = 11, ap_southeast_1 = 12, ap_southeast_2 = 13, ap_northeast_1 = 14, ap_northeast_2 = 15, ap_northeast_3 = 16, eu_north_1 = 17, sa_east_1 = 18, cn_northwest_1 = 19, cn_north_1 = 20, af_south_1 = 21, eu_south_1 = 22, us_gov_west_1 = 23, us_gov_east_1 = 24, us_iso_east_1 = 25, us_isob_east_1 = 26 }

	export enum ResettableElementName { FullyQualifiedDomainName = 0, Regions = 1, ResourcePath = 2, ChildHealthChecks = 3 }

	export interface HealthCheckVersionMismatch {
	}
	export interface HealthCheckVersionMismatchFormProperties {
	}
	export function CreateHealthCheckVersionMismatchFormGroup() {
		return new FormGroup<HealthCheckVersionMismatchFormProperties>({
		});

	}


	/** A complex type that contains the response to the <code>UpdateHostedZoneComment</code> request. */
	export interface UpdateHostedZoneCommentResponse {

		/**
		 * A complex type that contains general information about the hosted zone.
		 * Required
		 */
		HostedZone: HostedZone;
	}

	/** A complex type that contains the response to the <code>UpdateHostedZoneComment</code> request. */
	export interface UpdateHostedZoneCommentResponseFormProperties {
	}
	export function CreateUpdateHostedZoneCommentResponseFormGroup() {
		return new FormGroup<UpdateHostedZoneCommentResponseFormProperties>({
		});

	}


	/** A complex type that contains the response information for the traffic policy. */
	export interface UpdateTrafficPolicyCommentResponse {

		/**
		 * A complex type that contains settings for a traffic policy.
		 * Required
		 */
		TrafficPolicy: TrafficPolicy;
	}

	/** A complex type that contains the response information for the traffic policy. */
	export interface UpdateTrafficPolicyCommentResponseFormProperties {
	}
	export function CreateUpdateTrafficPolicyCommentResponseFormGroup() {
		return new FormGroup<UpdateTrafficPolicyCommentResponseFormProperties>({
		});

	}


	/** A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy. */
	export interface UpdateTrafficPolicyInstanceResponse {

		/**
		 * A complex type that contains settings for the new traffic policy instance.
		 * Required
		 */
		TrafficPolicyInstance: TrafficPolicyInstance;
	}

	/** A complex type that contains information about the resource record sets that Amazon Route 53 created based on a specified traffic policy. */
	export interface UpdateTrafficPolicyInstanceResponseFormProperties {
	}
	export function CreateUpdateTrafficPolicyInstanceResponseFormGroup() {
		return new FormGroup<UpdateTrafficPolicyInstanceResponseFormProperties>({
		});

	}

	export interface ConflictingTypes {
	}
	export interface ConflictingTypesFormProperties {
	}
	export function CreateConflictingTypesFormGroup() {
		return new FormGroup<ConflictingTypesFormProperties>({
		});

	}


	/** A complex type that contains information about the request to associate a VPC with a private hosted zone. */
	export interface AssociateVPCWithHostedZoneRequest {

		/**
		 * (Private hosted zones only) A complex type that contains information about an Amazon VPC.
		 * Required
		 */
		VPC: VPC;
		Comment?: string | null;
	}

	/** A complex type that contains information about the request to associate a VPC with a private hosted zone. */
	export interface AssociateVPCWithHostedZoneRequestFormProperties {
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateAssociateVPCWithHostedZoneRequestFormGroup() {
		return new FormGroup<AssociateVPCWithHostedZoneRequestFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The information for a change request. */
	export interface ChangeBatch {
		Comment?: string | null;
		Changes: Array<Change>;
	}

	/** The information for a change request. */
	export interface ChangeBatchFormProperties {
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateChangeBatchFormGroup() {
		return new FormGroup<ChangeBatchFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChangeStatus { PENDING = 0, INSYNC = 1 }


	/** A complex type that contains change information for the resource record set. */
	export interface ChangeResourceRecordSetsRequest {

		/**
		 * The information for a change request.
		 * Required
		 */
		ChangeBatch: ChangeBatch;
	}

	/** A complex type that contains change information for the resource record set. */
	export interface ChangeResourceRecordSetsRequestFormProperties {
	}
	export function CreateChangeResourceRecordSetsRequestFormGroup() {
		return new FormGroup<ChangeResourceRecordSetsRequestFormProperties>({
		});

	}

	export enum TagResourceType { healthcheck = 0, hostedzone = 1 }


	/** A complex type that contains information about the tags that you want to add, edit, or delete. */
	export interface ChangeTagsForResourceRequest {
		AddTags?: Array<Tag>;
		RemoveTagKeys?: Array<string>;
	}

	/** A complex type that contains information about the tags that you want to add, edit, or delete. */
	export interface ChangeTagsForResourceRequestFormProperties {
	}
	export function CreateChangeTagsForResourceRequestFormGroup() {
		return new FormGroup<ChangeTagsForResourceRequestFormProperties>({
		});

	}

	export enum ComparisonOperator { GreaterThanOrEqualToThreshold = 0, GreaterThanThreshold = 1, LessThanThreshold = 2, LessThanOrEqualToThreshold = 3 }

	export enum Statistic { Average = 0, Sum = 1, SampleCount = 2, Maximum = 3, Minimum = 4 }


	/** A complex type that contains the health check request information. */
	export interface CreateHealthCheckRequest {
		CallerReference: string;

		/**
		 * A complex type that contains information about the health check.
		 * Required
		 */
		HealthCheckConfig: HealthCheckConfig;
	}

	/** A complex type that contains the health check request information. */
	export interface CreateHealthCheckRequestFormProperties {
		CallerReference: FormControl<string | null | undefined>,
	}
	export function CreateCreateHealthCheckRequestFormGroup() {
		return new FormGroup<CreateHealthCheckRequestFormProperties>({
			CallerReference: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about the request to create a public or private hosted zone. */
	export interface CreateHostedZoneRequest {
		Name: string;

		/** (Private hosted zones only) A complex type that contains information about an Amazon VPC. */
		VPC?: VPC;
		CallerReference: string;

		/** A complex type that contains an optional comment about your hosted zone. If you don't want to specify a comment, omit both the <code>HostedZoneConfig</code> and <code>Comment</code> elements. */
		HostedZoneConfig?: HostedZoneConfig;
		DelegationSetId?: string | null;
	}

	/** A complex type that contains information about the request to create a public or private hosted zone. */
	export interface CreateHostedZoneRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		CallerReference: FormControl<string | null | undefined>,
		DelegationSetId: FormControl<string | null | undefined>,
	}
	export function CreateCreateHostedZoneRequestFormGroup() {
		return new FormGroup<CreateHostedZoneRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CallerReference: new FormControl<string | null | undefined>(undefined),
			DelegationSetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateQueryLoggingConfigRequest {
		HostedZoneId: string;
		CloudWatchLogsLogGroupArn: string;
	}
	export interface CreateQueryLoggingConfigRequestFormProperties {
		HostedZoneId: FormControl<string | null | undefined>,
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateQueryLoggingConfigRequestFormGroup() {
		return new FormGroup<CreateQueryLoggingConfigRequestFormProperties>({
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateReusableDelegationSetRequest {
		CallerReference: string;
		HostedZoneId?: string | null;
	}
	export interface CreateReusableDelegationSetRequestFormProperties {
		CallerReference: FormControl<string | null | undefined>,
		HostedZoneId: FormControl<string | null | undefined>,
	}
	export function CreateCreateReusableDelegationSetRequestFormGroup() {
		return new FormGroup<CreateReusableDelegationSetRequestFormProperties>({
			CallerReference: new FormControl<string | null | undefined>(undefined),
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about the resource record sets that you want to create based on a specified traffic policy. */
	export interface CreateTrafficPolicyInstanceRequest {
		HostedZoneId: string;
		Name: string;
		TTL: number;
		TrafficPolicyId: string;
		TrafficPolicyVersion: number;
	}

	/** A complex type that contains information about the resource record sets that you want to create based on a specified traffic policy. */
	export interface CreateTrafficPolicyInstanceRequestFormProperties {
		HostedZoneId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		TTL: FormControl<number | null | undefined>,
		TrafficPolicyId: FormControl<string | null | undefined>,
		TrafficPolicyVersion: FormControl<number | null | undefined>,
	}
	export function CreateCreateTrafficPolicyInstanceRequestFormGroup() {
		return new FormGroup<CreateTrafficPolicyInstanceRequestFormProperties>({
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			TTL: new FormControl<number | null | undefined>(undefined),
			TrafficPolicyId: new FormControl<string | null | undefined>(undefined),
			TrafficPolicyVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about the traffic policy that you want to create. */
	export interface CreateTrafficPolicyRequest {
		Name: string;
		Document: string;
		Comment?: string | null;
	}

	/** A complex type that contains information about the traffic policy that you want to create. */
	export interface CreateTrafficPolicyRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Document: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrafficPolicyRequestFormGroup() {
		return new FormGroup<CreateTrafficPolicyRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Document: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about the traffic policy that you want to create a new version for. */
	export interface CreateTrafficPolicyVersionRequest {
		Document: string;
		Comment?: string | null;
	}

	/** A complex type that contains information about the traffic policy that you want to create a new version for. */
	export interface CreateTrafficPolicyVersionRequestFormProperties {
		Document: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrafficPolicyVersionRequestFormGroup() {
		return new FormGroup<CreateTrafficPolicyVersionRequestFormProperties>({
			Document: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about the request to authorize associating a VPC with your private hosted zone. Authorization is only required when a private hosted zone and a VPC were created by using different accounts. */
	export interface CreateVPCAssociationAuthorizationRequest {

		/**
		 * (Private hosted zones only) A complex type that contains information about an Amazon VPC.
		 * Required
		 */
		VPC: VPC;
	}

	/** A complex type that contains information about the request to authorize associating a VPC with your private hosted zone. Authorization is only required when a private hosted zone and a VPC were created by using different accounts. */
	export interface CreateVPCAssociationAuthorizationRequestFormProperties {
	}
	export function CreateCreateVPCAssociationAuthorizationRequestFormGroup() {
		return new FormGroup<CreateVPCAssociationAuthorizationRequestFormProperties>({
		});

	}


	/** This action deletes a health check. */
	export interface DeleteHealthCheckRequest {
	}

	/** This action deletes a health check. */
	export interface DeleteHealthCheckRequestFormProperties {
	}
	export function CreateDeleteHealthCheckRequestFormGroup() {
		return new FormGroup<DeleteHealthCheckRequestFormProperties>({
		});

	}


	/** A request to delete a hosted zone. */
	export interface DeleteHostedZoneRequest {
	}

	/** A request to delete a hosted zone. */
	export interface DeleteHostedZoneRequestFormProperties {
	}
	export function CreateDeleteHostedZoneRequestFormGroup() {
		return new FormGroup<DeleteHostedZoneRequestFormProperties>({
		});

	}

	export interface DeleteQueryLoggingConfigRequest {
	}
	export interface DeleteQueryLoggingConfigRequestFormProperties {
	}
	export function CreateDeleteQueryLoggingConfigRequestFormGroup() {
		return new FormGroup<DeleteQueryLoggingConfigRequestFormProperties>({
		});

	}


	/** A request to delete a reusable delegation set. */
	export interface DeleteReusableDelegationSetRequest {
	}

	/** A request to delete a reusable delegation set. */
	export interface DeleteReusableDelegationSetRequestFormProperties {
	}
	export function CreateDeleteReusableDelegationSetRequestFormGroup() {
		return new FormGroup<DeleteReusableDelegationSetRequestFormProperties>({
		});

	}


	/** A request to delete a specified traffic policy instance. */
	export interface DeleteTrafficPolicyInstanceRequest {
	}

	/** A request to delete a specified traffic policy instance. */
	export interface DeleteTrafficPolicyInstanceRequestFormProperties {
	}
	export function CreateDeleteTrafficPolicyInstanceRequestFormGroup() {
		return new FormGroup<DeleteTrafficPolicyInstanceRequestFormProperties>({
		});

	}


	/** A request to delete a specified traffic policy version. */
	export interface DeleteTrafficPolicyRequest {
	}

	/** A request to delete a specified traffic policy version. */
	export interface DeleteTrafficPolicyRequestFormProperties {
	}
	export function CreateDeleteTrafficPolicyRequestFormGroup() {
		return new FormGroup<DeleteTrafficPolicyRequestFormProperties>({
		});

	}


	/** A complex type that contains information about the request to remove authorization to associate a VPC that was created by one AWS account with a hosted zone that was created with a different AWS account.  */
	export interface DeleteVPCAssociationAuthorizationRequest {

		/**
		 * (Private hosted zones only) A complex type that contains information about an Amazon VPC.
		 * Required
		 */
		VPC: VPC;
	}

	/** A complex type that contains information about the request to remove authorization to associate a VPC that was created by one AWS account with a hosted zone that was created with a different AWS account.  */
	export interface DeleteVPCAssociationAuthorizationRequestFormProperties {
	}
	export function CreateDeleteVPCAssociationAuthorizationRequestFormGroup() {
		return new FormGroup<DeleteVPCAssociationAuthorizationRequestFormProperties>({
		});

	}


	/** A complex type that contains information about the VPC that you want to disassociate from a specified private hosted zone. */
	export interface DisassociateVPCFromHostedZoneRequest {

		/**
		 * (Private hosted zones only) A complex type that contains information about an Amazon VPC.
		 * Required
		 */
		VPC: VPC;
		Comment?: string | null;
	}

	/** A complex type that contains information about the VPC that you want to disassociate from a specified private hosted zone. */
	export interface DisassociateVPCFromHostedZoneRequestFormProperties {
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateVPCFromHostedZoneRequestFormGroup() {
		return new FormGroup<DisassociateVPCFromHostedZoneRequestFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about the request to create a hosted zone. */
	export interface GetAccountLimitRequest {
	}

	/** A complex type that contains information about the request to create a hosted zone. */
	export interface GetAccountLimitRequestFormProperties {
	}
	export function CreateGetAccountLimitRequestFormGroup() {
		return new FormGroup<GetAccountLimitRequestFormProperties>({
		});

	}


	/** The input for a GetChange request. */
	export interface GetChangeRequest {
	}

	/** The input for a GetChange request. */
	export interface GetChangeRequestFormProperties {
	}
	export function CreateGetChangeRequestFormGroup() {
		return new FormGroup<GetChangeRequestFormProperties>({
		});

	}


	/** Empty request. */
	export interface GetCheckerIpRangesRequest {
	}

	/** Empty request. */
	export interface GetCheckerIpRangesRequestFormProperties {
	}
	export function CreateGetCheckerIpRangesRequestFormGroup() {
		return new FormGroup<GetCheckerIpRangesRequestFormProperties>({
		});

	}


	/** A request for information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets. */
	export interface GetGeoLocationRequest {
	}

	/** A request for information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets. */
	export interface GetGeoLocationRequestFormProperties {
	}
	export function CreateGetGeoLocationRequestFormGroup() {
		return new FormGroup<GetGeoLocationRequestFormProperties>({
		});

	}


	/** A request for the number of health checks that are associated with the current AWS account. */
	export interface GetHealthCheckCountRequest {
	}

	/** A request for the number of health checks that are associated with the current AWS account. */
	export interface GetHealthCheckCountRequestFormProperties {
	}
	export function CreateGetHealthCheckCountRequestFormGroup() {
		return new FormGroup<GetHealthCheckCountRequestFormProperties>({
		});

	}


	/** A request for the reason that a health check failed most recently. */
	export interface GetHealthCheckLastFailureReasonRequest {
	}

	/** A request for the reason that a health check failed most recently. */
	export interface GetHealthCheckLastFailureReasonRequestFormProperties {
	}
	export function CreateGetHealthCheckLastFailureReasonRequestFormGroup() {
		return new FormGroup<GetHealthCheckLastFailureReasonRequestFormProperties>({
		});

	}


	/** A request to get information about a specified health check.  */
	export interface GetHealthCheckRequest {
	}

	/** A request to get information about a specified health check.  */
	export interface GetHealthCheckRequestFormProperties {
	}
	export function CreateGetHealthCheckRequestFormGroup() {
		return new FormGroup<GetHealthCheckRequestFormProperties>({
		});

	}


	/** A request to get the status for a health check. */
	export interface GetHealthCheckStatusRequest {
	}

	/** A request to get the status for a health check. */
	export interface GetHealthCheckStatusRequestFormProperties {
	}
	export function CreateGetHealthCheckStatusRequestFormGroup() {
		return new FormGroup<GetHealthCheckStatusRequestFormProperties>({
		});

	}


	/** A request to retrieve a count of all the hosted zones that are associated with the current AWS account. */
	export interface GetHostedZoneCountRequest {
	}

	/** A request to retrieve a count of all the hosted zones that are associated with the current AWS account. */
	export interface GetHostedZoneCountRequestFormProperties {
	}
	export function CreateGetHostedZoneCountRequestFormGroup() {
		return new FormGroup<GetHostedZoneCountRequestFormProperties>({
		});

	}


	/** A complex type that contains information about the request to create a hosted zone. */
	export interface GetHostedZoneLimitRequest {
	}

	/** A complex type that contains information about the request to create a hosted zone. */
	export interface GetHostedZoneLimitRequestFormProperties {
	}
	export function CreateGetHostedZoneLimitRequestFormGroup() {
		return new FormGroup<GetHostedZoneLimitRequestFormProperties>({
		});

	}


	/** A request to get information about a specified hosted zone.  */
	export interface GetHostedZoneRequest {
	}

	/** A request to get information about a specified hosted zone.  */
	export interface GetHostedZoneRequestFormProperties {
	}
	export function CreateGetHostedZoneRequestFormGroup() {
		return new FormGroup<GetHostedZoneRequestFormProperties>({
		});

	}

	export interface GetQueryLoggingConfigRequest {
	}
	export interface GetQueryLoggingConfigRequestFormProperties {
	}
	export function CreateGetQueryLoggingConfigRequestFormGroup() {
		return new FormGroup<GetQueryLoggingConfigRequestFormProperties>({
		});

	}


	/** A complex type that contains information about the request to create a hosted zone. */
	export interface GetReusableDelegationSetLimitRequest {
	}

	/** A complex type that contains information about the request to create a hosted zone. */
	export interface GetReusableDelegationSetLimitRequestFormProperties {
	}
	export function CreateGetReusableDelegationSetLimitRequestFormGroup() {
		return new FormGroup<GetReusableDelegationSetLimitRequestFormProperties>({
		});

	}


	/** A request to get information about a specified reusable delegation set. */
	export interface GetReusableDelegationSetRequest {
	}

	/** A request to get information about a specified reusable delegation set. */
	export interface GetReusableDelegationSetRequestFormProperties {
	}
	export function CreateGetReusableDelegationSetRequestFormGroup() {
		return new FormGroup<GetReusableDelegationSetRequestFormProperties>({
		});

	}


	/** Request to get the number of traffic policy instances that are associated with the current AWS account. */
	export interface GetTrafficPolicyInstanceCountRequest {
	}

	/** Request to get the number of traffic policy instances that are associated with the current AWS account. */
	export interface GetTrafficPolicyInstanceCountRequestFormProperties {
	}
	export function CreateGetTrafficPolicyInstanceCountRequestFormGroup() {
		return new FormGroup<GetTrafficPolicyInstanceCountRequestFormProperties>({
		});

	}


	/** Gets information about a specified traffic policy instance. */
	export interface GetTrafficPolicyInstanceRequest {
	}

	/** Gets information about a specified traffic policy instance. */
	export interface GetTrafficPolicyInstanceRequestFormProperties {
	}
	export function CreateGetTrafficPolicyInstanceRequestFormGroup() {
		return new FormGroup<GetTrafficPolicyInstanceRequestFormProperties>({
		});

	}


	/** Gets information about a specific traffic policy version. */
	export interface GetTrafficPolicyRequest {
	}

	/** Gets information about a specific traffic policy version. */
	export interface GetTrafficPolicyRequestFormProperties {
	}
	export function CreateGetTrafficPolicyRequestFormGroup() {
		return new FormGroup<GetTrafficPolicyRequestFormProperties>({
		});

	}


	/** A request to get a list of geographic locations that Amazon Route 53 supports for geolocation resource record sets.  */
	export interface ListGeoLocationsRequest {
	}

	/** A request to get a list of geographic locations that Amazon Route 53 supports for geolocation resource record sets.  */
	export interface ListGeoLocationsRequestFormProperties {
	}
	export function CreateListGeoLocationsRequestFormGroup() {
		return new FormGroup<ListGeoLocationsRequestFormProperties>({
		});

	}


	/** A request to retrieve a list of the health checks that are associated with the current AWS account. */
	export interface ListHealthChecksRequest {
	}

	/** A request to retrieve a list of the health checks that are associated with the current AWS account. */
	export interface ListHealthChecksRequestFormProperties {
	}
	export function CreateListHealthChecksRequestFormGroup() {
		return new FormGroup<ListHealthChecksRequestFormProperties>({
		});

	}


	/** Retrieves a list of the public and private hosted zones that are associated with the current AWS account in ASCII order by domain name.  */
	export interface ListHostedZonesByNameRequest {
	}

	/** Retrieves a list of the public and private hosted zones that are associated with the current AWS account in ASCII order by domain name.  */
	export interface ListHostedZonesByNameRequestFormProperties {
	}
	export function CreateListHostedZonesByNameRequestFormGroup() {
		return new FormGroup<ListHostedZonesByNameRequestFormProperties>({
		});

	}


	/** A request to retrieve a list of the public and private hosted zones that are associated with the current AWS account. */
	export interface ListHostedZonesRequest {
	}

	/** A request to retrieve a list of the public and private hosted zones that are associated with the current AWS account. */
	export interface ListHostedZonesRequestFormProperties {
	}
	export function CreateListHostedZonesRequestFormGroup() {
		return new FormGroup<ListHostedZonesRequestFormProperties>({
		});

	}

	export interface ListQueryLoggingConfigsRequest {
	}
	export interface ListQueryLoggingConfigsRequestFormProperties {
	}
	export function CreateListQueryLoggingConfigsRequestFormGroup() {
		return new FormGroup<ListQueryLoggingConfigsRequestFormProperties>({
		});

	}

	export enum RRType { SOA = 0, A = 1, TXT = 2, NS = 3, CNAME = 4, MX = 5, NAPTR = 6, PTR = 7, SRV = 8, SPF = 9, AAAA = 10, CAA = 11 }


	/** A request for the resource record sets that are associated with a specified hosted zone. */
	export interface ListResourceRecordSetsRequest {
	}

	/** A request for the resource record sets that are associated with a specified hosted zone. */
	export interface ListResourceRecordSetsRequestFormProperties {
	}
	export function CreateListResourceRecordSetsRequestFormGroup() {
		return new FormGroup<ListResourceRecordSetsRequestFormProperties>({
		});

	}


	/** A request to get a list of the reusable delegation sets that are associated with the current AWS account. */
	export interface ListReusableDelegationSetsRequest {
	}

	/** A request to get a list of the reusable delegation sets that are associated with the current AWS account. */
	export interface ListReusableDelegationSetsRequestFormProperties {
	}
	export function CreateListReusableDelegationSetsRequestFormGroup() {
		return new FormGroup<ListReusableDelegationSetsRequestFormProperties>({
		});

	}


	/** A complex type containing information about a request for a list of the tags that are associated with an individual resource. */
	export interface ListTagsForResourceRequest {
	}

	/** A complex type containing information about a request for a list of the tags that are associated with an individual resource. */
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}


	/** A complex type that contains information about the health checks or hosted zones for which you want to list tags. */
	export interface ListTagsForResourcesRequest {
		ResourceIds: Array<string>;
	}

	/** A complex type that contains information about the health checks or hosted zones for which you want to list tags. */
	export interface ListTagsForResourcesRequestFormProperties {
	}
	export function CreateListTagsForResourcesRequestFormGroup() {
		return new FormGroup<ListTagsForResourcesRequestFormProperties>({
		});

	}


	/** A complex type that contains the information about the request to list the traffic policies that are associated with the current AWS account. */
	export interface ListTrafficPoliciesRequest {
	}

	/** A complex type that contains the information about the request to list the traffic policies that are associated with the current AWS account. */
	export interface ListTrafficPoliciesRequestFormProperties {
	}
	export function CreateListTrafficPoliciesRequestFormGroup() {
		return new FormGroup<ListTrafficPoliciesRequestFormProperties>({
		});

	}


	/** A request for the traffic policy instances that you created in a specified hosted zone. */
	export interface ListTrafficPolicyInstancesByHostedZoneRequest {
	}

	/** A request for the traffic policy instances that you created in a specified hosted zone. */
	export interface ListTrafficPolicyInstancesByHostedZoneRequestFormProperties {
	}
	export function CreateListTrafficPolicyInstancesByHostedZoneRequestFormGroup() {
		return new FormGroup<ListTrafficPolicyInstancesByHostedZoneRequestFormProperties>({
		});

	}


	/** A complex type that contains the information about the request to list your traffic policy instances. */
	export interface ListTrafficPolicyInstancesByPolicyRequest {
	}

	/** A complex type that contains the information about the request to list your traffic policy instances. */
	export interface ListTrafficPolicyInstancesByPolicyRequestFormProperties {
	}
	export function CreateListTrafficPolicyInstancesByPolicyRequestFormGroup() {
		return new FormGroup<ListTrafficPolicyInstancesByPolicyRequestFormProperties>({
		});

	}


	/** A request to get information about the traffic policy instances that you created by using the current AWS account. */
	export interface ListTrafficPolicyInstancesRequest {
	}

	/** A request to get information about the traffic policy instances that you created by using the current AWS account. */
	export interface ListTrafficPolicyInstancesRequestFormProperties {
	}
	export function CreateListTrafficPolicyInstancesRequestFormGroup() {
		return new FormGroup<ListTrafficPolicyInstancesRequestFormProperties>({
		});

	}


	/** A complex type that contains the information about the request to list your traffic policies. */
	export interface ListTrafficPolicyVersionsRequest {
	}

	/** A complex type that contains the information about the request to list your traffic policies. */
	export interface ListTrafficPolicyVersionsRequestFormProperties {
	}
	export function CreateListTrafficPolicyVersionsRequestFormGroup() {
		return new FormGroup<ListTrafficPolicyVersionsRequestFormProperties>({
		});

	}


	/** A complex type that contains information about that can be associated with your hosted zone. */
	export interface ListVPCAssociationAuthorizationsRequest {
	}

	/** A complex type that contains information about that can be associated with your hosted zone. */
	export interface ListVPCAssociationAuthorizationsRequestFormProperties {
	}
	export function CreateListVPCAssociationAuthorizationsRequestFormGroup() {
		return new FormGroup<ListVPCAssociationAuthorizationsRequestFormProperties>({
		});

	}


	/** Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask.  */
	export interface TestDNSAnswerRequest {
	}

	/** Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask.  */
	export interface TestDNSAnswerRequestFormProperties {
	}
	export function CreateTestDNSAnswerRequestFormGroup() {
		return new FormGroup<TestDNSAnswerRequestFormProperties>({
		});

	}


	/** A complex type that contains information about a request to update a health check. */
	export interface UpdateHealthCheckRequest {
		HealthCheckVersion?: number | null;
		IPAddress?: string | null;
		Port?: number | null;
		ResourcePath?: string | null;
		FullyQualifiedDomainName?: string | null;
		SearchString?: string | null;
		FailureThreshold?: number | null;
		Inverted?: boolean | null;
		Disabled?: boolean | null;
		HealthThreshold?: number | null;
		ChildHealthChecks?: Array<string>;
		EnableSNI?: boolean | null;
		Regions?: Array<HealthCheckRegion>;

		/** A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy. */
		AlarmIdentifier?: AlarmIdentifier;
		InsufficientDataHealthStatus?: HealthCheckConfigInsufficientDataHealthStatus | null;
		ResetElements?: Array<ResettableElementName>;
	}

	/** A complex type that contains information about a request to update a health check. */
	export interface UpdateHealthCheckRequestFormProperties {
		HealthCheckVersion: FormControl<number | null | undefined>,
		IPAddress: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		ResourcePath: FormControl<string | null | undefined>,
		FullyQualifiedDomainName: FormControl<string | null | undefined>,
		SearchString: FormControl<string | null | undefined>,
		FailureThreshold: FormControl<number | null | undefined>,
		Inverted: FormControl<boolean | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
		HealthThreshold: FormControl<number | null | undefined>,
		EnableSNI: FormControl<boolean | null | undefined>,
		InsufficientDataHealthStatus: FormControl<HealthCheckConfigInsufficientDataHealthStatus | null | undefined>,
	}
	export function CreateUpdateHealthCheckRequestFormGroup() {
		return new FormGroup<UpdateHealthCheckRequestFormProperties>({
			HealthCheckVersion: new FormControl<number | null | undefined>(undefined),
			IPAddress: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			ResourcePath: new FormControl<string | null | undefined>(undefined),
			FullyQualifiedDomainName: new FormControl<string | null | undefined>(undefined),
			SearchString: new FormControl<string | null | undefined>(undefined),
			FailureThreshold: new FormControl<number | null | undefined>(undefined),
			Inverted: new FormControl<boolean | null | undefined>(undefined),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
			HealthThreshold: new FormControl<number | null | undefined>(undefined),
			EnableSNI: new FormControl<boolean | null | undefined>(undefined),
			InsufficientDataHealthStatus: new FormControl<HealthCheckConfigInsufficientDataHealthStatus | null | undefined>(undefined),
		});

	}


	/** A request to update the comment for a hosted zone. */
	export interface UpdateHostedZoneCommentRequest {
		Comment?: string | null;
	}

	/** A request to update the comment for a hosted zone. */
	export interface UpdateHostedZoneCommentRequestFormProperties {
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateUpdateHostedZoneCommentRequestFormGroup() {
		return new FormGroup<UpdateHostedZoneCommentRequestFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about the traffic policy that you want to update the comment for. */
	export interface UpdateTrafficPolicyCommentRequest {
		Comment: string;
	}

	/** A complex type that contains information about the traffic policy that you want to update the comment for. */
	export interface UpdateTrafficPolicyCommentRequestFormProperties {
		Comment: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTrafficPolicyCommentRequestFormGroup() {
		return new FormGroup<UpdateTrafficPolicyCommentRequestFormProperties>({
			Comment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about the resource record sets that you want to update based on a specified traffic policy instance. */
	export interface UpdateTrafficPolicyInstanceRequest {
		TTL: number;
		TrafficPolicyId: string;
		TrafficPolicyVersion: number;
	}

	/** A complex type that contains information about the resource record sets that you want to update based on a specified traffic policy instance. */
	export interface UpdateTrafficPolicyInstanceRequestFormProperties {
		TTL: FormControl<number | null | undefined>,
		TrafficPolicyId: FormControl<string | null | undefined>,
		TrafficPolicyVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateTrafficPolicyInstanceRequestFormGroup() {
		return new FormGroup<UpdateTrafficPolicyInstanceRequestFormProperties>({
			TTL: new FormControl<number | null | undefined>(undefined),
			TrafficPolicyId: new FormControl<string | null | undefined>(undefined),
			TrafficPolicyVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Lists tags for one health check or hosted zone. </p> <p>For information about using tags for cost allocation, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>
		 * Get 2013-04-01/tags/{ResourceType}/{ResourceId}
		 * @param {ResourceTagSetResourceType} ResourceType <p>The type of the resource.</p> <ul> <li> <p>The resource type for health checks is <code>healthcheck</code>.</p> </li> <li> <p>The resource type for hosted zones is <code>hostedzone</code>.</p> </li> </ul>
		 * @param {string} ResourceId The ID of the resource for which you want to retrieve tags.
		 * @return {void} Success
		 */
		ListTagsForResource(ResourceType: ResourceTagSetResourceType, ResourceId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/tags/' + ResourceType + '/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a list of the health checks that are associated with the current AWS account.
		 * Get 2013-04-01/healthcheck
		 * @param {string} marker <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more health checks. To get another group, submit another <code>ListHealthChecks</code> request. </p> <p>For the value of <code>marker</code>, specify the value of <code>NextMarker</code> from the previous response, which is the ID of the first health check that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more health checks to get.</p>
		 * @param {string} maxitems The maximum number of health checks that you want <code>ListHealthChecks</code> to return in response to the current request. Amazon Route 53 returns a maximum of 100 items. If you set <code>MaxItems</code> to a value greater than 100, Route 53 returns only the first 100 health checks. 
		 * @param {string} MaxItems Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {void} Success
		 */
		ListHealthChecks(marker: string | null | undefined, maxitems: string | null | undefined, MaxItems: string | null | undefined, Marker: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/healthcheck?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&maxitems=' + (maxitems == null ? '' : encodeURIComponent(maxitems)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves a list of the public and private hosted zones that are associated with the current AWS account. The response includes a <code>HostedZones</code> child element for each hosted zone.</p> <p>Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of hosted zones, you can use the <code>maxitems</code> parameter to list them in groups of up to 100.</p>
		 * Get 2013-04-01/hostedzone
		 * @param {string} marker <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more hosted zones. To get more hosted zones, submit another <code>ListHostedZones</code> request. </p> <p>For the value of <code>marker</code>, specify the value of <code>NextMarker</code> from the previous response, which is the ID of the first hosted zone that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more hosted zones to get.</p>
		 * @param {string} maxitems (Optional) The maximum number of hosted zones that you want Amazon Route 53 to return. If you have more than <code>maxitems</code> hosted zones, the value of <code>IsTruncated</code> in the response is <code>true</code>, and the value of <code>NextMarker</code> is the hosted zone ID of the first hosted zone that Route 53 will return if you submit another request.
		 * @param {string} delegationsetid If you're using reusable delegation sets and you want to list all of the hosted zones that are associated with a reusable delegation set, specify the ID of that reusable delegation set. 
		 * @param {string} MaxItems Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {void} Success
		 */
		ListHostedZones(marker: string | null | undefined, maxitems: string | null | undefined, delegationsetid: string | null | undefined, MaxItems: string | null | undefined, Marker: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/hostedzone?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&maxitems=' + (maxitems == null ? '' : encodeURIComponent(maxitems)) + '&delegationsetid=' + (delegationsetid == null ? '' : encodeURIComponent(delegationsetid)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the configurations for DNS query logging that are associated with the current AWS account or the configuration that is associated with a specified hosted zone.</p> <p>For more information about DNS query logs, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>. Additional information, including the format of DNS query logs, appears in <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
		 * Get 2013-04-01/queryloggingconfig
		 * @param {string} hostedzoneid <p>(Optional) If you want to list the query logging configuration that is associated with a hosted zone, specify the ID in <code>HostedZoneId</code>. </p> <p>If you don't specify a hosted zone ID, <code>ListQueryLoggingConfigs</code> returns all of the configurations that are associated with the current AWS account.</p>
		 * @param {string} nexttoken <p>(Optional) If the current AWS account has more than <code>MaxResults</code> query logging configurations, use <code>NextToken</code> to get the second and subsequent pages of results.</p> <p>For the first <code>ListQueryLoggingConfigs</code> request, omit this value.</p> <p>For the second and subsequent requests, get the value of <code>NextToken</code> from the previous response and specify that value for <code>NextToken</code> in the request.</p>
		 * @param {string} maxresults <p>(Optional) The maximum number of query logging configurations that you want Amazon Route 53 to return in response to the current request. If the current AWS account has more than <code>MaxResults</code> configurations, use the value of <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListQueryLoggingConfigs.html#API_ListQueryLoggingConfigs_RequestSyntax">NextToken</a> in the response to get the next page of results.</p> <p>If you don't specify a value for <code>MaxResults</code>, Route 53 returns up to 100 configurations.</p>
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {void} Success
		 */
		ListQueryLoggingConfigs(hostedzoneid: string | null | undefined, nexttoken: string | null | undefined, maxresults: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/queryloggingconfig?hostedzoneid=' + (hostedzoneid == null ? '' : encodeURIComponent(hostedzoneid)) + '&nexttoken=' + (nexttoken == null ? '' : encodeURIComponent(nexttoken)) + '&maxresults=' + (maxresults == null ? '' : encodeURIComponent(maxresults)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of the reusable delegation sets that are associated with the current AWS account.
		 * Get 2013-04-01/delegationset
		 * @param {string} marker <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more reusable delegation sets. To get another group, submit another <code>ListReusableDelegationSets</code> request. </p> <p>For the value of <code>marker</code>, specify the value of <code>NextMarker</code> from the previous response, which is the ID of the first reusable delegation set that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more reusable delegation sets to get.</p>
		 * @param {string} maxitems The number of reusable delegation sets that you want Amazon Route 53 to return in the response to this request. If you specify a value greater than 100, Route 53 returns only the first 100 reusable delegation sets.
		 * @return {void} Success
		 */
		ListReusableDelegationSets(marker: string | null | undefined, maxitems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/delegationset?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&maxitems=' + (maxitems == null ? '' : encodeURIComponent(maxitems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of the VPCs that were created by other accounts and that can be associated with a specified hosted zone because you've submitted one or more <code>CreateVPCAssociationAuthorization</code> requests. </p> <p>The response includes a <code>VPCs</code> element with a <code>VPC</code> child element for each VPC that can be associated with the hosted zone.</p>
		 * Get 2013-04-01/hostedzone/{Id}/authorizevpcassociation
		 * @param {string} Id The ID of the hosted zone for which you want a list of VPCs that can be associated with the hosted zone.
		 * @param {string} nexttoken  <i>Optional</i>: If a response includes a <code>NextToken</code> element, there are more VPCs that can be associated with the specified hosted zone. To get the next page of results, submit another request, and include the value of <code>NextToken</code> from the response in the <code>nexttoken</code> parameter in another <code>ListVPCAssociationAuthorizations</code> request.
		 * @param {string} maxresults  <i>Optional</i>: An integer that specifies the maximum number of VPCs that you want Amazon Route 53 to return. If you don't specify a value for <code>MaxResults</code>, Route 53 returns up to 50 VPCs per page.
		 * @return {void} Success
		 */
		ListVPCAssociationAuthorizations(Id: string, nexttoken: string | null | undefined, maxresults: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/hostedzone/' + (Id == null ? '' : encodeURIComponent(Id)) + '/authorizevpcassociation&nexttoken=' + (nexttoken == null ? '' : encodeURIComponent(nexttoken)) + '&maxresults=' + (maxresults == null ? '' : encodeURIComponent(maxresults)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a health check.</p> <important> <p>Amazon Route 53 does not prevent you from deleting a health check even if the health check is associated with one or more resource record sets. If you delete a health check and you don't update the associated resource record sets, the future status of the health check can't be predicted and may change. This will affect the routing of DNS queries for your DNS failover configuration. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html#health-checks-deleting.html">Replacing and Deleting Health Checks</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important> <p>If you're using AWS Cloud Map and you configured Cloud Map to create a Route 53 health check when you register an instance, you can't use the Route 53 <code>DeleteHealthCheck</code> command to delete the health check. The health check is deleted automatically when you deregister the instance; there can be a delay of several hours before the health check is deleted from Route 53. </p>
		 * Delete 2013-04-01/healthcheck/{HealthCheckId}
		 * @param {string} HealthCheckId The ID of the health check that you want to delete.
		 * @return {void} Success
		 */
		DeleteHealthCheck(HealthCheckId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2013-04-01/healthcheck/' + (HealthCheckId == null ? '' : encodeURIComponent(HealthCheckId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a specified health check.
		 * Get 2013-04-01/healthcheck/{HealthCheckId}
		 * @param {string} HealthCheckId The identifier that Amazon Route 53 assigned to the health check when you created it. When you add or update a resource record set, you use this value to specify which health check to use. The value can be up to 64 characters long.
		 * @return {void} Success
		 */
		GetHealthCheck(HealthCheckId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/healthcheck/' + (HealthCheckId == null ? '' : encodeURIComponent(HealthCheckId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a hosted zone.</p> <p>If the hosted zone was created by another service, such as AWS Cloud Map, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DeleteHostedZone.html#delete-public-hosted-zone-created-by-another-service">Deleting Public Hosted Zones That Were Created by Another Service</a> in the <i>Amazon Route 53 Developer Guide</i> for information about how to delete it. (The process is the same for public and private hosted zones that were created by another service.)</p> <p>If you want to keep your domain registration but you want to stop routing internet traffic to your website or web application, we recommend that you delete resource record sets in the hosted zone instead of deleting the hosted zone.</p> <important> <p>If you delete a hosted zone, you can't undelete it. You must create a new hosted zone and update the name servers for your domain registration, which can require up to 48 hours to take effect. (If you delegated responsibility for a subdomain to a hosted zone and you delete the child hosted zone, you must update the name servers in the parent hosted zone.) In addition, if you delete a hosted zone, someone could hijack the domain and route traffic to their own resources using your domain name.</p> </important> <p>If you want to avoid the monthly charge for the hosted zone, you can transfer DNS service for the domain to a free DNS service. When you transfer DNS service, you have to update the name servers for the domain registration. If the domain is registered with Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainNameservers.html">UpdateDomainNameservers</a> for information about how to replace Route 53 name servers with name servers for the new DNS service. If the domain is registered with another registrar, use the method provided by the registrar to update name servers for the domain registration. For more information, perform an internet search on "free DNS service."</p> <p>You can delete a hosted zone only if it contains only the default SOA record and NS resource record sets. If the hosted zone contains other resource record sets, you must delete them before you can delete the hosted zone. If you try to delete a hosted zone that contains other resource record sets, the request fails, and Route 53 returns a <code>HostedZoneNotEmpty</code> error. For information about deleting records from your hosted zone, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html">ChangeResourceRecordSets</a>.</p> <p>To verify that the hosted zone has been deleted, do one of the following:</p> <ul> <li> <p>Use the <code>GetHostedZone</code> action to request information about the hosted zone.</p> </li> <li> <p>Use the <code>ListHostedZones</code> action to get a list of the hosted zones associated with the current AWS account.</p> </li> </ul>
		 * Delete 2013-04-01/hostedzone/{Id}
		 * @param {string} Id The ID of the hosted zone you want to delete.
		 * @return {void} Success
		 */
		DeleteHostedZone(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2013-04-01/hostedzone/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a specified hosted zone including the four name servers assigned to the hosted zone.
		 * Get 2013-04-01/hostedzone/{Id}
		 * @param {string} Id The ID of the hosted zone that you want to get information about.
		 * @return {void} Success
		 */
		GetHostedZone(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/hostedzone/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a configuration for DNS query logging. If you delete a configuration, Amazon Route 53 stops sending query logs to CloudWatch Logs. Route 53 doesn't delete any logs that are already in CloudWatch Logs.</p> <p>For more information about DNS query logs, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a>.</p>
		 * Delete 2013-04-01/queryloggingconfig/{Id}
		 * @param {string} Id The ID of the configuration that you want to delete. 
		 * @return {void} Success
		 */
		DeleteQueryLoggingConfig(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2013-04-01/queryloggingconfig/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about a specified configuration for DNS query logging.</p> <p>For more information about DNS query logs, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a> and <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS Queries</a>.</p>
		 * Get 2013-04-01/queryloggingconfig/{Id}
		 * @param {string} Id The ID of the configuration for DNS query logging that you want to get information about.
		 * @return {void} Success
		 */
		GetQueryLoggingConfig(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/queryloggingconfig/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a reusable delegation set.</p> <important> <p>You can delete a reusable delegation set only if it isn't associated with any hosted zones.</p> </important> <p>To verify that the reusable delegation set is not associated with any hosted zones, submit a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html">GetReusableDelegationSet</a> request and specify the ID of the reusable delegation set that you want to delete.</p>
		 * Delete 2013-04-01/delegationset/{Id}
		 * @param {string} Id The ID of the reusable delegation set that you want to delete.
		 * @return {void} Success
		 */
		DeleteReusableDelegationSet(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2013-04-01/delegationset/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a specified reusable delegation set, including the four name servers that are assigned to the delegation set.
		 * Get 2013-04-01/delegationset/{Id}
		 * @param {string} Id The ID of the reusable delegation set that you want to get a list of name servers for.
		 * @return {void} Success
		 */
		GetReusableDelegationSet(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/delegationset/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a traffic policy.
		 * Delete 2013-04-01/trafficpolicy/{Id}/{Version}
		 * @param {string} Id The ID of the traffic policy that you want to delete.
		 * @param {number} Version The version number of the traffic policy that you want to delete.
		 * @return {void} Success
		 */
		DeleteTrafficPolicy(Id: string, Version: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2013-04-01/trafficpolicy/' + (Id == null ? '' : encodeURIComponent(Id)) + '/' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a specific traffic policy version.
		 * Get 2013-04-01/trafficpolicy/{Id}/{Version}
		 * @param {string} Id The ID of the traffic policy that you want to get information about.
		 * @param {number} Version The version number of the traffic policy that you want to get information about.
		 * @return {void} Success
		 */
		GetTrafficPolicy(Id: string, Version: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/trafficpolicy/' + (Id == null ? '' : encodeURIComponent(Id)) + '/' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a traffic policy instance and all of the resource record sets that Amazon Route 53 created when you created the instance.</p> <note> <p>In the Route 53 console, traffic policy instances are known as policy records.</p> </note>
		 * Delete 2013-04-01/trafficpolicyinstance/{Id}
		 * @param {string} Id <p>The ID of the traffic policy instance that you want to delete. </p> <important> <p>When you delete a traffic policy instance, Amazon Route 53 also deletes all of the resource record sets that were created when you created the traffic policy instance.</p> </important>
		 * @return {void} Success
		 */
		DeleteTrafficPolicyInstance(Id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '2013-04-01/trafficpolicyinstance/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about a specified traffic policy instance.</p> <note> <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p> </note> <note> <p>In the Route 53 console, traffic policy instances are known as policy records.</p> </note>
		 * Get 2013-04-01/trafficpolicyinstance/{Id}
		 * @param {string} Id The ID of the traffic policy instance that you want to get information about.
		 * @return {void} Success
		 */
		GetTrafficPolicyInstance(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/trafficpolicyinstance/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the specified limit for the current account, for example, the maximum number of health checks that you can create using the account.</p> <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-route53">open a case</a>.</p> <note> <p>You can also view account limits in AWS Trusted Advisor. Sign in to the AWS Management Console and open the Trusted Advisor console at <a href="https://console.aws.amazon.com/trustedadvisor">https://console.aws.amazon.com/trustedadvisor/</a>. Then choose <b>Service limits</b> in the navigation pane.</p> </note>
		 * Get 2013-04-01/accountlimit/{Type}
		 * @param {AccountLimitType} Type <p>The limit that you want to get. Valid values include the following:</p> <ul> <li> <p> <b>MAX_HEALTH_CHECKS_BY_OWNER</b>: The maximum number of health checks that you can create using the current account.</p> </li> <li> <p> <b>MAX_HOSTED_ZONES_BY_OWNER</b>: The maximum number of hosted zones that you can create using the current account.</p> </li> <li> <p> <b>MAX_REUSABLE_DELEGATION_SETS_BY_OWNER</b>: The maximum number of reusable delegation sets that you can create using the current account.</p> </li> <li> <p> <b>MAX_TRAFFIC_POLICIES_BY_OWNER</b>: The maximum number of traffic policies that you can create using the current account.</p> </li> <li> <p> <b>MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER</b>: The maximum number of traffic policy instances that you can create using the current account. (Traffic policy instances are referred to as traffic flow policy records in the Amazon Route 53 console.)</p> </li> </ul>
		 * @return {void} Success
		 */
		GetAccountLimit(Type: AccountLimitType): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/accountlimit/' + Type, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the current status of a change batch request. The status is one of the following values:</p> <ul> <li> <p> <code>PENDING</code> indicates that the changes in this request have not propagated to all Amazon Route 53 DNS servers. This is the initial status of all change batch requests.</p> </li> <li> <p> <code>INSYNC</code> indicates that the changes have propagated to all Route 53 DNS servers. </p> </li> </ul>
		 * Get 2013-04-01/change/{Id}
		 * @param {string} Id The ID of the change batch request. The value that you specify here is the value that <code>ChangeResourceRecordSets</code> returned in the <code>Id</code> element when you submitted the request.
		 * @return {void} Success
		 */
		GetChange(Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/change/' + (Id == null ? '' : encodeURIComponent(Id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <important> <p> <code>GetCheckerIpRanges</code> still works, but we recommend that you download ip-ranges.json, which includes IP address ranges for all AWS services. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-ip-addresses.html">IP Address Ranges of Amazon Route 53 Servers</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important>
		 * Get 2013-04-01/checkeripranges
		 * @return {void} Success
		 */
		GetCheckerIpRanges(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/checkeripranges', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about whether a specified geographic location is supported for Amazon Route 53 geolocation resource record sets.</p> <p>Use the following syntax to determine whether a continent is supported for geolocation:</p> <p> <code>GET /2013-04-01/geolocation?continentcode=<i>two-letter abbreviation for a continent</i> </code> </p> <p>Use the following syntax to determine whether a country is supported for geolocation:</p> <p> <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country code</i> </code> </p> <p>Use the following syntax to determine whether a subdivision of a country is supported for geolocation:</p> <p> <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country code</i>&amp;subdivisioncode=<i>subdivision code</i> </code> </p>
		 * Get 2013-04-01/geolocation
		 * @param {string} continentcode <p>For geolocation resource record sets, a two-letter abbreviation that identifies a continent. Amazon Route 53 supports the following continent codes:</p> <ul> <li> <p> <b>AF</b>: Africa</p> </li> <li> <p> <b>AN</b>: Antarctica</p> </li> <li> <p> <b>AS</b>: Asia</p> </li> <li> <p> <b>EU</b>: Europe</p> </li> <li> <p> <b>OC</b>: Oceania</p> </li> <li> <p> <b>NA</b>: North America</p> </li> <li> <p> <b>SA</b>: South America</p> </li> </ul>
		 * @param {string} countrycode Amazon Route 53 uses the two-letter country codes that are specified in <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO standard 3166-1 alpha-2</a>.
		 * @param {string} subdivisioncode <p>For <code>SubdivisionCode</code>, Amazon Route 53 supports only states of the United States. For a list of state abbreviations, see <a href="https://pe.usps.com/text/pub28/28apb.htm">Appendix B: Two–Letter State and Possession Abbreviations</a> on the United States Postal Service website. </p> <p>If you specify <code>subdivisioncode</code>, you must also specify <code>US</code> for <code>CountryCode</code>. </p>
		 * @return {void} Success
		 */
		GetGeoLocation(continentcode: string | null | undefined, countrycode: string | null | undefined, subdivisioncode: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/geolocation?continentcode=' + (continentcode == null ? '' : encodeURIComponent(continentcode)) + '&countrycode=' + (countrycode == null ? '' : encodeURIComponent(countrycode)) + '&subdivisioncode=' + (subdivisioncode == null ? '' : encodeURIComponent(subdivisioncode)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the number of health checks that are associated with the current AWS account.
		 * Get 2013-04-01/healthcheckcount
		 * @return {void} Success
		 */
		GetHealthCheckCount(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/healthcheckcount', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the reason that a specified health check failed most recently.
		 * Get 2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason
		 * @param {string} HealthCheckId <p>The ID for the health check for which you want the last failure reason. When you created the health check, <code>CreateHealthCheck</code> returned the ID in the response, in the <code>HealthCheckId</code> element.</p> <note> <p>If you want to get the last failure reason for a calculated health check, you must use the Amazon Route 53 console or the CloudWatch console. You can't use <code>GetHealthCheckLastFailureReason</code> for a calculated health check.</p> </note>
		 * @return {void} Success
		 */
		GetHealthCheckLastFailureReason(HealthCheckId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/healthcheck/' + (HealthCheckId == null ? '' : encodeURIComponent(HealthCheckId)) + '/lastfailurereason', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets status of a specified health check.
		 * Get 2013-04-01/healthcheck/{HealthCheckId}/status
		 * @param {string} HealthCheckId <p>The ID for the health check that you want the current status for. When you created the health check, <code>CreateHealthCheck</code> returned the ID in the response, in the <code>HealthCheckId</code> element.</p> <note> <p>If you want to check the status of a calculated health check, you must use the Amazon Route 53 console or the CloudWatch console. You can't use <code>GetHealthCheckStatus</code> to get the status of a calculated health check.</p> </note>
		 * @return {void} Success
		 */
		GetHealthCheckStatus(HealthCheckId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/healthcheck/' + (HealthCheckId == null ? '' : encodeURIComponent(HealthCheckId)) + '/status', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the number of hosted zones that are associated with the current AWS account.
		 * Get 2013-04-01/hostedzonecount
		 * @return {void} Success
		 */
		GetHostedZoneCount(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/hostedzonecount', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the specified limit for a specified hosted zone, for example, the maximum number of records that you can create in the hosted zone. </p> <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-route53">open a case</a>.</p>
		 * Get 2013-04-01/hostedzonelimit/{Id}/{Type}
		 * @param {HostedZoneLimitType} Type <p>The limit that you want to get. Valid values include the following:</p> <ul> <li> <p> <b>MAX_RRSETS_BY_ZONE</b>: The maximum number of records that you can create in the specified hosted zone.</p> </li> <li> <p> <b>MAX_VPCS_ASSOCIATED_BY_ZONE</b>: The maximum number of Amazon VPCs that you can associate with the specified private hosted zone.</p> </li> </ul>
		 * @param {string} Id The ID of the hosted zone that you want to get a limit for.
		 * @return {void} Success
		 */
		GetHostedZoneLimit(Type: HostedZoneLimitType, Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/hostedzonelimit/' + (Id == null ? '' : encodeURIComponent(Id)) + '/' + Type, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the maximum number of hosted zones that you can associate with the specified reusable delegation set.</p> <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-route53">open a case</a>.</p>
		 * Get 2013-04-01/reusabledelegationsetlimit/{Id}/{Type}
		 * @param {ReusableDelegationSetLimitType} Type Specify <code>MAX_ZONES_BY_REUSABLE_DELEGATION_SET</code> to get the maximum number of hosted zones that you can associate with the specified reusable delegation set.
		 * @param {string} Id The ID of the delegation set that you want to get the limit for.
		 * @return {void} Success
		 */
		GetReusableDelegationSetLimit(Type: ReusableDelegationSetLimitType, Id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/reusabledelegationsetlimit/' + (Id == null ? '' : encodeURIComponent(Id)) + '/' + Type, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the number of traffic policy instances that are associated with the current AWS account.
		 * Get 2013-04-01/trafficpolicyinstancecount
		 * @return {void} Success
		 */
		GetTrafficPolicyInstanceCount(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/trafficpolicyinstancecount', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves a list of supported geographic locations.</p> <p>Countries are listed first, and continents are listed last. If Amazon Route 53 supports subdivisions for a country (for example, states or provinces), the subdivisions for that country are listed in alphabetical order immediately after the corresponding country.</p> <p>For a list of supported geolocation codes, see the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GeoLocation.html">GeoLocation</a> data type.</p>
		 * Get 2013-04-01/geolocations
		 * @param {string} startcontinentcode <p>The code for the continent with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already returned a page or more of results, if <code>IsTruncated</code> is true, and if <code>NextContinentCode</code> from the previous response has a value, enter that value in <code>startcontinentcode</code> to return the next page of results.</p> <p>Include <code>startcontinentcode</code> only if you want to list continents. Don't include <code>startcontinentcode</code> when you're listing countries or countries with their subdivisions.</p>
		 * @param {string} startcountrycode The code for the country with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already returned a page or more of results, if <code>IsTruncated</code> is <code>true</code>, and if <code>NextCountryCode</code> from the previous response has a value, enter that value in <code>startcountrycode</code> to return the next page of results.
		 * @param {string} startsubdivisioncode <p>The code for the state of the United States with which you want to start listing locations that Amazon Route 53 supports for geolocation. If Route 53 has already returned a page or more of results, if <code>IsTruncated</code> is <code>true</code>, and if <code>NextSubdivisionCode</code> from the previous response has a value, enter that value in <code>startsubdivisioncode</code> to return the next page of results.</p> <p>To list subdivisions (U.S. states), you must include both <code>startcountrycode</code> and <code>startsubdivisioncode</code>.</p>
		 * @param {string} maxitems (Optional) The maximum number of geolocations to be included in the response body for this request. If more than <code>maxitems</code> geolocations remain to be listed, then the value of the <code>IsTruncated</code> element in the response is <code>true</code>.
		 * @return {void} Success
		 */
		ListGeoLocations(startcontinentcode: string | null | undefined, startcountrycode: string | null | undefined, startsubdivisioncode: string | null | undefined, maxitems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/geolocations?startcontinentcode=' + (startcontinentcode == null ? '' : encodeURIComponent(startcontinentcode)) + '&startcountrycode=' + (startcountrycode == null ? '' : encodeURIComponent(startcountrycode)) + '&startsubdivisioncode=' + (startsubdivisioncode == null ? '' : encodeURIComponent(startsubdivisioncode)) + '&maxitems=' + (maxitems == null ? '' : encodeURIComponent(maxitems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves a list of your hosted zones in lexicographic order. The response includes a <code>HostedZones</code> child element for each hosted zone created by the current AWS account. </p> <p> <code>ListHostedZonesByName</code> sorts hosted zones by name with the labels reversed. For example:</p> <p> <code>com.example.www.</code> </p> <p>Note the trailing dot, which can change the sort order in some circumstances.</p> <p>If the domain name includes escape characters or Punycode, <code>ListHostedZonesByName</code> alphabetizes the domain name using the escaped or Punycoded value, which is the format that Amazon Route 53 saves in its database. For example, to create a hosted zone for exämple.com, you specify ex\344mple.com for the domain name. <code>ListHostedZonesByName</code> alphabetizes it as:</p> <p> <code>com.ex\344mple.</code> </p> <p>The labels are reversed and alphabetized using the escaped value. For more information about valid domain name formats, including internationalized domain names, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html">DNS Domain Name Format</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>Route 53 returns up to 100 items in each response. If you have a lot of hosted zones, use the <code>MaxItems</code> parameter to list them in groups of up to 100. The response includes values that help navigate from one group of <code>MaxItems</code> hosted zones to the next:</p> <ul> <li> <p>The <code>DNSName</code> and <code>HostedZoneId</code> elements in the response contain the values, if any, specified for the <code>dnsname</code> and <code>hostedzoneid</code> parameters in the request that produced the current response.</p> </li> <li> <p>The <code>MaxItems</code> element in the response contains the value, if any, that you specified for the <code>maxitems</code> parameter in the request that produced the current response.</p> </li> <li> <p>If the value of <code>IsTruncated</code> in the response is true, there are more hosted zones associated with the current AWS account. </p> <p>If <code>IsTruncated</code> is false, this response includes the last hosted zone that is associated with the current account. The <code>NextDNSName</code> element and <code>NextHostedZoneId</code> elements are omitted from the response.</p> </li> <li> <p>The <code>NextDNSName</code> and <code>NextHostedZoneId</code> elements in the response contain the domain name and the hosted zone ID of the next hosted zone that is associated with the current AWS account. If you want to list more hosted zones, make another call to <code>ListHostedZonesByName</code>, and specify the value of <code>NextDNSName</code> and <code>NextHostedZoneId</code> in the <code>dnsname</code> and <code>hostedzoneid</code> parameters, respectively.</p> </li> </ul>
		 * Get 2013-04-01/hostedzonesbyname
		 * @param {string} dnsname (Optional) For your first request to <code>ListHostedZonesByName</code>, include the <code>dnsname</code> parameter only if you want to specify the name of the first hosted zone in the response. If you don't include the <code>dnsname</code> parameter, Amazon Route 53 returns all of the hosted zones that were created by the current AWS account, in ASCII order. For subsequent requests, include both <code>dnsname</code> and <code>hostedzoneid</code> parameters. For <code>dnsname</code>, specify the value of <code>NextDNSName</code> from the previous response.
		 * @param {string} hostedzoneid <p>(Optional) For your first request to <code>ListHostedZonesByName</code>, do not include the <code>hostedzoneid</code> parameter.</p> <p>If you have more hosted zones than the value of <code>maxitems</code>, <code>ListHostedZonesByName</code> returns only the first <code>maxitems</code> hosted zones. To get the next group of <code>maxitems</code> hosted zones, submit another request to <code>ListHostedZonesByName</code> and include both <code>dnsname</code> and <code>hostedzoneid</code> parameters. For the value of <code>hostedzoneid</code>, specify the value of the <code>NextHostedZoneId</code> element from the previous response.</p>
		 * @param {string} maxitems The maximum number of hosted zones to be included in the response body for this request. If you have more than <code>maxitems</code> hosted zones, then the value of the <code>IsTruncated</code> element in the response is true, and the values of <code>NextDNSName</code> and <code>NextHostedZoneId</code> specify the first hosted zone in the next group of <code>maxitems</code> hosted zones. 
		 * @return {void} Success
		 */
		ListHostedZonesByName(dnsname: string | null | undefined, hostedzoneid: string | null | undefined, maxitems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/hostedzonesbyname?dnsname=' + (dnsname == null ? '' : encodeURIComponent(dnsname)) + '&hostedzoneid=' + (hostedzoneid == null ? '' : encodeURIComponent(hostedzoneid)) + '&maxitems=' + (maxitems == null ? '' : encodeURIComponent(maxitems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the resource record sets in a specified hosted zone.</p> <p> <code>ListResourceRecordSets</code> returns up to 100 resource record sets at a time in ASCII order, beginning at a position specified by the <code>name</code> and <code>type</code> elements.</p> <p> <b>Sort order</b> </p> <p> <code>ListResourceRecordSets</code> sorts results first by DNS name with the labels reversed, for example:</p> <p> <code>com.example.www.</code> </p> <p>Note the trailing dot, which can change the sort order when the record name contains characters that appear before <code>.</code> (decimal 46) in the ASCII table. These characters include the following: <code>! " # $ % &amp; ' ( ) * + , -</code> </p> <p>When multiple records have the same DNS name, <code>ListResourceRecordSets</code> sorts results by the record type.</p> <p> <b>Specifying where to start listing records</b> </p> <p>You can use the name and type elements to specify the resource record set that the list begins with:</p> <dl> <dt>If you do not specify Name or Type</dt> <dd> <p>The results begin with the first resource record set that the hosted zone contains.</p> </dd> <dt>If you specify Name but not Type</dt> <dd> <p>The results begin with the first resource record set in the list whose name is greater than or equal to <code>Name</code>.</p> </dd> <dt>If you specify Type but not Name</dt> <dd> <p>Amazon Route 53 returns the <code>InvalidInput</code> error.</p> </dd> <dt>If you specify both Name and Type</dt> <dd> <p>The results begin with the first resource record set in the list whose name is greater than or equal to <code>Name</code>, and whose type is greater than or equal to <code>Type</code>.</p> </dd> </dl> <p> <b>Resource record sets that are PENDING</b> </p> <p>This action returns the most current version of the records. This includes records that are <code>PENDING</code>, and that are not yet available on all Route 53 DNS servers.</p> <p> <b>Changing resource record sets</b> </p> <p>To ensure that you get an accurate listing of the resource record sets for a hosted zone at a point in time, do not submit a <code>ChangeResourceRecordSets</code> request while you're paging through the results of a <code>ListResourceRecordSets</code> request. If you do, some pages may display results without the latest changes while other pages display results with the latest changes.</p> <p> <b>Displaying the next page of results</b> </p> <p>If a <code>ListResourceRecordSets</code> command returns more than one page of results, the value of <code>IsTruncated</code> is <code>true</code>. To display the next page of results, get the values of <code>NextRecordName</code>, <code>NextRecordType</code>, and <code>NextRecordIdentifier</code> (if any) from the response. Then submit another <code>ListResourceRecordSets</code> request, and specify those values for <code>StartRecordName</code>, <code>StartRecordType</code>, and <code>StartRecordIdentifier</code>.</p>
		 * Get 2013-04-01/hostedzone/{Id}/rrset
		 * @param {string} Id The ID of the hosted zone that contains the resource record sets that you want to list.
		 * @param {string} name The first name in the lexicographic ordering of resource record sets that you want to list. If the specified record name doesn't exist, the results begin with the first resource record set that has a name greater than the value of <code>name</code>.
		 * @param {ResourceRecordSetType} type <p>The type of resource record set to begin the record listing from.</p> <p>Valid values for basic resource record sets: <code>A</code> | <code>AAAA</code> | <code>CAA</code> | <code>CNAME</code> | <code>MX</code> | <code>NAPTR</code> | <code>NS</code> | <code>PTR</code> | <code>SOA</code> | <code>SPF</code> | <code>SRV</code> | <code>TXT</code> </p> <p>Values for weighted, latency, geolocation, and failover resource record sets: <code>A</code> | <code>AAAA</code> | <code>CAA</code> | <code>CNAME</code> | <code>MX</code> | <code>NAPTR</code> | <code>PTR</code> | <code>SPF</code> | <code>SRV</code> | <code>TXT</code> </p> <p>Values for alias resource record sets: </p> <ul> <li> <p> <b>API Gateway custom regional API or edge-optimized API</b>: A</p> </li> <li> <p> <b>CloudFront distribution</b>: A or AAAA</p> </li> <li> <p> <b>Elastic Beanstalk environment that has a regionalized subdomain</b>: A</p> </li> <li> <p> <b>Elastic Load Balancing load balancer</b>: A | AAAA</p> </li> <li> <p> <b>S3 bucket</b>: A</p> </li> <li> <p> <b>VPC interface VPC endpoint</b>: A</p> </li> <li> <p> <b>Another resource record set in this hosted zone:</b> The type of the resource record set that the alias references.</p> </li> </ul> <p>Constraint: Specifying <code>type</code> without specifying <code>name</code> returns an <code>InvalidInput</code> error.</p>
		 * @param {string} identifier  <i>Resource record sets that have a routing policy other than simple:</i> If results were truncated for a given DNS name and type, specify the value of <code>NextRecordIdentifier</code> from the previous response to get the next resource record set that has the current DNS name and type.
		 * @param {string} maxitems (Optional) The maximum number of resource records sets to include in the response body for this request. If the response includes more than <code>maxitems</code> resource record sets, the value of the <code>IsTruncated</code> element in the response is <code>true</code>, and the values of the <code>NextRecordName</code> and <code>NextRecordType</code> elements in the response identify the first resource record set in the next group of <code>maxitems</code> resource record sets.
		 * @param {string} MaxItems Pagination limit
		 * @param {string} StartRecordName Pagination token
		 * @param {string} StartRecordType Pagination token
		 * @param {string} StartRecordIdentifier Pagination token
		 * @return {void} Success
		 */
		ListResourceRecordSets(Id: string, name: string | null | undefined, type: ResourceRecordSetType | null | undefined, identifier: string | null | undefined, maxitems: string | null | undefined, MaxItems: string | null | undefined, StartRecordName: string | null | undefined, StartRecordType: string | null | undefined, StartRecordIdentifier: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/hostedzone/' + (Id == null ? '' : encodeURIComponent(Id)) + '/rrset&name=' + (name == null ? '' : encodeURIComponent(name)) + '&type=' + type + '&identifier=' + (identifier == null ? '' : encodeURIComponent(identifier)) + '&maxitems=' + (maxitems == null ? '' : encodeURIComponent(maxitems)) + '&MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&StartRecordName=' + (StartRecordName == null ? '' : encodeURIComponent(StartRecordName)) + '&StartRecordType=' + (StartRecordType == null ? '' : encodeURIComponent(StartRecordType)) + '&StartRecordIdentifier=' + (StartRecordIdentifier == null ? '' : encodeURIComponent(StartRecordIdentifier)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the latest version for every traffic policy that is associated with the current AWS account. Policies are listed in the order that they were created in.
		 * Get 2013-04-01/trafficpolicies
		 * @param {string} trafficpolicyid <p>(Conditional) For your first request to <code>ListTrafficPolicies</code>, don't include the <code>TrafficPolicyIdMarker</code> parameter.</p> <p>If you have more traffic policies than the value of <code>MaxItems</code>, <code>ListTrafficPolicies</code> returns only the first <code>MaxItems</code> traffic policies. To get the next group of policies, submit another request to <code>ListTrafficPolicies</code>. For the value of <code>TrafficPolicyIdMarker</code>, specify the value of <code>TrafficPolicyIdMarker</code> that was returned in the previous response.</p>
		 * @param {string} maxitems (Optional) The maximum number of traffic policies that you want Amazon Route 53 to return in response to this request. If you have more than <code>MaxItems</code> traffic policies, the value of <code>IsTruncated</code> in the response is <code>true</code>, and the value of <code>TrafficPolicyIdMarker</code> is the ID of the first traffic policy that Route 53 will return if you submit another request.
		 * @return {void} Success
		 */
		ListTrafficPolicies(trafficpolicyid: string | null | undefined, maxitems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/trafficpolicies?trafficpolicyid=' + (trafficpolicyid == null ? '' : encodeURIComponent(trafficpolicyid)) + '&maxitems=' + (maxitems == null ? '' : encodeURIComponent(maxitems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about the traffic policy instances that you created by using the current AWS account.</p> <note> <p>After you submit an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p> </note> <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the <code>MaxItems</code> parameter to list them in groups of up to 100.</p>
		 * Get 2013-04-01/trafficpolicyinstances
		 * @param {string} hostedzoneid <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>HostedZoneId</code>, specify the value of <code>HostedZoneIdMarker</code> from the previous response, which is the hosted zone ID of the first traffic policy instance in the next group of traffic policy instances.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
		 * @param {string} trafficpolicyinstancename <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>trafficpolicyinstancename</code>, specify the value of <code>TrafficPolicyInstanceNameMarker</code> from the previous response, which is the name of the first traffic policy instance in the next group of traffic policy instances.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
		 * @param {ResourceRecordSetType} trafficpolicyinstancetype <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>trafficpolicyinstancetype</code>, specify the value of <code>TrafficPolicyInstanceTypeMarker</code> from the previous response, which is the type of the first traffic policy instance in the next group of traffic policy instances.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
		 * @param {string} maxitems The maximum number of traffic policy instances that you want Amazon Route 53 to return in response to a <code>ListTrafficPolicyInstances</code> request. If you have more than <code>MaxItems</code> traffic policy instances, the value of the <code>IsTruncated</code> element in the response is <code>true</code>, and the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code> represent the first traffic policy instance in the next group of <code>MaxItems</code> traffic policy instances.
		 * @return {void} Success
		 */
		ListTrafficPolicyInstances(hostedzoneid: string | null | undefined, trafficpolicyinstancename: string | null | undefined, trafficpolicyinstancetype: ResourceRecordSetType | null | undefined, maxitems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/trafficpolicyinstances?hostedzoneid=' + (hostedzoneid == null ? '' : encodeURIComponent(hostedzoneid)) + '&trafficpolicyinstancename=' + (trafficpolicyinstancename == null ? '' : encodeURIComponent(trafficpolicyinstancename)) + '&trafficpolicyinstancetype=' + trafficpolicyinstancetype + '&maxitems=' + (maxitems == null ? '' : encodeURIComponent(maxitems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about the traffic policy instances that you created in a specified hosted zone.</p> <note> <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p> </note> <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the <code>MaxItems</code> parameter to list them in groups of up to 100.</p>
		 * Get 2013-04-01/trafficpolicyinstances/hostedzone#id
		 * @param {string} id The ID of the hosted zone that you want to list traffic policy instances for.
		 * @param {string} trafficpolicyinstancename <p>If the value of <code>IsTruncated</code> in the previous response is true, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>trafficpolicyinstancename</code>, specify the value of <code>TrafficPolicyInstanceNameMarker</code> from the previous response, which is the name of the first traffic policy instance in the next group of traffic policy instances.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
		 * @param {ResourceRecordSetType} trafficpolicyinstancetype <p>If the value of <code>IsTruncated</code> in the previous response is true, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstances</code> request. For the value of <code>trafficpolicyinstancetype</code>, specify the value of <code>TrafficPolicyInstanceTypeMarker</code> from the previous response, which is the type of the first traffic policy instance in the next group of traffic policy instances.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
		 * @param {string} maxitems The maximum number of traffic policy instances to be included in the response body for this request. If you have more than <code>MaxItems</code> traffic policy instances, the value of the <code>IsTruncated</code> element in the response is <code>true</code>, and the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code> represent the first traffic policy instance that Amazon Route 53 will return if you submit another request.
		 * @return {void} Success
		 */
		ListTrafficPolicyInstancesByHostedZone(id: string, trafficpolicyinstancename: string | null | undefined, trafficpolicyinstancetype: ResourceRecordSetType | null | undefined, maxitems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/trafficpolicyinstances/hostedzone#id?id=' + (id == null ? '' : encodeURIComponent(id)) + '&trafficpolicyinstancename=' + (trafficpolicyinstancename == null ? '' : encodeURIComponent(trafficpolicyinstancename)) + '&trafficpolicyinstancetype=' + trafficpolicyinstancetype + '&maxitems=' + (maxitems == null ? '' : encodeURIComponent(maxitems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about the traffic policy instances that you created by using a specify traffic policy version.</p> <note> <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the <code>State</code> response element.</p> </note> <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the <code>MaxItems</code> parameter to list them in groups of up to 100.</p>
		 * Get 2013-04-01/trafficpolicyinstances/trafficpolicy#id&version
		 * @param {string} id The ID of the traffic policy for which you want to list traffic policy instances.
		 * @param {number} version The version of the traffic policy for which you want to list traffic policy instances. The version must be associated with the traffic policy that is specified by <code>TrafficPolicyId</code>.
		 * @param {string} hostedzoneid <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstancesByPolicy</code> request. </p> <p>For the value of <code>hostedzoneid</code>, specify the value of <code>HostedZoneIdMarker</code> from the previous response, which is the hosted zone ID of the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
		 * @param {string} trafficpolicyinstancename <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstancesByPolicy</code> request.</p> <p>For the value of <code>trafficpolicyinstancename</code>, specify the value of <code>TrafficPolicyInstanceNameMarker</code> from the previous response, which is the name of the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
		 * @param {ResourceRecordSetType} trafficpolicyinstancetype <p>If the value of <code>IsTruncated</code> in the previous response was <code>true</code>, you have more traffic policy instances. To get more traffic policy instances, submit another <code>ListTrafficPolicyInstancesByPolicy</code> request.</p> <p>For the value of <code>trafficpolicyinstancetype</code>, specify the value of <code>TrafficPolicyInstanceTypeMarker</code> from the previous response, which is the name of the first traffic policy instance that Amazon Route 53 will return if you submit another request.</p> <p>If the value of <code>IsTruncated</code> in the previous response was <code>false</code>, there are no more traffic policy instances to get.</p>
		 * @param {string} maxitems The maximum number of traffic policy instances to be included in the response body for this request. If you have more than <code>MaxItems</code> traffic policy instances, the value of the <code>IsTruncated</code> element in the response is <code>true</code>, and the values of <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code> represent the first traffic policy instance that Amazon Route 53 will return if you submit another request.
		 * @return {void} Success
		 */
		ListTrafficPolicyInstancesByPolicy(id: string, version: number, hostedzoneid: string | null | undefined, trafficpolicyinstancename: string | null | undefined, trafficpolicyinstancetype: ResourceRecordSetType | null | undefined, maxitems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/trafficpolicyinstances/trafficpolicy#id&version?id=' + (id == null ? '' : encodeURIComponent(id)) + '&version=' + version + '&hostedzoneid=' + (hostedzoneid == null ? '' : encodeURIComponent(hostedzoneid)) + '&trafficpolicyinstancename=' + (trafficpolicyinstancename == null ? '' : encodeURIComponent(trafficpolicyinstancename)) + '&trafficpolicyinstancetype=' + trafficpolicyinstancetype + '&maxitems=' + (maxitems == null ? '' : encodeURIComponent(maxitems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about all of the versions for a specified traffic policy.</p> <p>Traffic policy versions are listed in numerical order by <code>VersionNumber</code>.</p>
		 * Get 2013-04-01/trafficpolicies/{Id}/versions
		 * @param {string} Id Specify the value of <code>Id</code> of the traffic policy for which you want to list all versions.
		 * @param {string} trafficpolicyversion <p>For your first request to <code>ListTrafficPolicyVersions</code>, don't include the <code>TrafficPolicyVersionMarker</code> parameter.</p> <p>If you have more traffic policy versions than the value of <code>MaxItems</code>, <code>ListTrafficPolicyVersions</code> returns only the first group of <code>MaxItems</code> versions. To get more traffic policy versions, submit another <code>ListTrafficPolicyVersions</code> request. For the value of <code>TrafficPolicyVersionMarker</code>, specify the value of <code>TrafficPolicyVersionMarker</code> in the previous response.</p>
		 * @param {string} maxitems The maximum number of traffic policy versions that you want Amazon Route 53 to include in the response body for this request. If the specified traffic policy has more than <code>MaxItems</code> versions, the value of <code>IsTruncated</code> in the response is <code>true</code>, and the value of the <code>TrafficPolicyVersionMarker</code> element is the ID of the first version that Route 53 will return if you submit another request.
		 * @return {void} Success
		 */
		ListTrafficPolicyVersions(Id: string, trafficpolicyversion: string | null | undefined, maxitems: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/trafficpolicies/' + (Id == null ? '' : encodeURIComponent(Id)) + '/versions&trafficpolicyversion=' + (trafficpolicyversion == null ? '' : encodeURIComponent(trafficpolicyversion)) + '&maxitems=' + (maxitems == null ? '' : encodeURIComponent(maxitems)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask.
		 * Get 2013-04-01/testdnsanswer#hostedzoneid&recordname&recordtype
		 * @param {string} hostedzoneid The ID of the hosted zone that you want Amazon Route 53 to simulate a query for.
		 * @param {string} recordname The name of the resource record set that you want Amazon Route 53 to simulate a query for.
		 * @param {ResourceRecordSetType} recordtype The type of the resource record set.
		 * @param {string} resolverip If you want to simulate a request from a specific DNS resolver, specify the IP address for that resolver. If you omit this value, <code>TestDnsAnswer</code> uses the IP address of a DNS resolver in the AWS US East (N. Virginia) Region (<code>us-east-1</code>).
		 * @param {string} edns0clientsubnetip If the resolver that you specified for resolverip supports EDNS0, specify the IPv4 or IPv6 address of a client in the applicable location, for example, <code>192.0.2.44</code> or <code>2001:db8:85a3::8a2e:370:7334</code>.
		 * @param {string} edns0clientsubnetmask <p>If you specify an IP address for <code>edns0clientsubnetip</code>, you can optionally specify the number of bits of the IP address that you want the checking tool to include in the DNS query. For example, if you specify <code>192.0.2.44</code> for <code>edns0clientsubnetip</code> and <code>24</code> for <code>edns0clientsubnetmask</code>, the checking tool will simulate a request from 192.0.2.0/24. The default value is 24 bits for IPv4 addresses and 64 bits for IPv6 addresses.</p> <p>The range of valid values depends on whether <code>edns0clientsubnetip</code> is an IPv4 or an IPv6 address:</p> <ul> <li> <p> <b>IPv4</b>: Specify a value between 0 and 32</p> </li> <li> <p> <b>IPv6</b>: Specify a value between 0 and 128</p> </li> </ul>
		 * @return {void} Success
		 */
		TestDNSAnswer(hostedzoneid: string, recordname: string, recordtype: ResourceRecordSetType, resolverip: string | null | undefined, edns0clientsubnetip: string | null | undefined, edns0clientsubnetmask: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '2013-04-01/testdnsanswer#hostedzoneid&recordname&recordtype?hostedzoneid=' + (hostedzoneid == null ? '' : encodeURIComponent(hostedzoneid)) + '&recordname=' + (recordname == null ? '' : encodeURIComponent(recordname)) + '&recordtype=' + recordtype + '&resolverip=' + (resolverip == null ? '' : encodeURIComponent(resolverip)) + '&edns0clientsubnetip=' + (edns0clientsubnetip == null ? '' : encodeURIComponent(edns0clientsubnetip)) + '&edns0clientsubnetmask=' + (edns0clientsubnetmask == null ? '' : encodeURIComponent(edns0clientsubnetmask)), { observe: 'response', responseType: 'text' });
		}
	}

}

