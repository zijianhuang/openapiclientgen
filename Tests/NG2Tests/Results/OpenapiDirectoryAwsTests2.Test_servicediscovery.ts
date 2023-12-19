import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateHttpNamespaceResponse {
		OperationId?: string | null;
	}
	export interface CreateHttpNamespaceResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateCreateHttpNamespaceResponseFormGroup() {
		return new FormGroup<CreateHttpNamespaceResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateHttpNamespaceRequest {
		Name: string;
		CreatorRequestId?: string | null;
		Description?: string | null;
		Tags?: Array<Tag>;
	}
	export interface CreateHttpNamespaceRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateHttpNamespaceRequestFormGroup() {
		return new FormGroup<CreateHttpNamespaceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A custom key-value pair associated with a resource. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	/** A custom key-value pair associated with a resource. */
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

	export interface InvalidInput {
	}
	export interface InvalidInputFormProperties {
	}
	export function CreateInvalidInputFormGroup() {
		return new FormGroup<InvalidInputFormProperties>({
		});

	}

	export interface NamespaceAlreadyExists {
	}
	export interface NamespaceAlreadyExistsFormProperties {
	}
	export function CreateNamespaceAlreadyExistsFormGroup() {
		return new FormGroup<NamespaceAlreadyExistsFormProperties>({
		});

	}

	export interface ResourceLimitExceeded {
	}
	export interface ResourceLimitExceededFormProperties {
	}
	export function CreateResourceLimitExceededFormGroup() {
		return new FormGroup<ResourceLimitExceededFormProperties>({
		});

	}

	export interface DuplicateRequest {
	}
	export interface DuplicateRequestFormProperties {
	}
	export function CreateDuplicateRequestFormGroup() {
		return new FormGroup<DuplicateRequestFormProperties>({
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface CreatePrivateDnsNamespaceResponse {
		OperationId?: string | null;
	}
	export interface CreatePrivateDnsNamespaceResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePrivateDnsNamespaceResponseFormGroup() {
		return new FormGroup<CreatePrivateDnsNamespaceResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePrivateDnsNamespaceRequest {
		Name: string;
		CreatorRequestId?: string | null;
		Description?: string | null;
		Vpc: string;
		Tags?: Array<Tag>;
	}
	export interface CreatePrivateDnsNamespaceRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Vpc: FormControl<string | null | undefined>,
	}
	export function CreateCreatePrivateDnsNamespaceRequestFormGroup() {
		return new FormGroup<CreatePrivateDnsNamespaceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Vpc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePublicDnsNamespaceResponse {
		OperationId?: string | null;
	}
	export interface CreatePublicDnsNamespaceResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePublicDnsNamespaceResponseFormGroup() {
		return new FormGroup<CreatePublicDnsNamespaceResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePublicDnsNamespaceRequest {
		Name: string;
		CreatorRequestId?: string | null;
		Description?: string | null;
		Tags?: Array<Tag>;
	}
	export interface CreatePublicDnsNamespaceRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreatePublicDnsNamespaceRequestFormGroup() {
		return new FormGroup<CreatePublicDnsNamespaceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateServiceResponse {

		/** A complex type that contains information about the specified service. */
		Service?: Service;
	}
	export interface CreateServiceResponseFormProperties {
	}
	export function CreateCreateServiceResponseFormGroup() {
		return new FormGroup<CreateServiceResponseFormProperties>({
		});

	}


	/** A complex type that contains information about the specified service. */
	export interface Service {
		Id?: string | null;
		Arn?: string | null;
		Name?: string | null;
		NamespaceId?: string | null;
		Description?: string | null;
		InstanceCount?: number | null;

		/** A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when you register an instance. */
		DnsConfig?: DnsConfig;

		/** <p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <p> <b>A and AAAA records</b> </p> <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy, Route 53 considers both the A and AAAA records to be unhealthy. </p> <p> <b>CNAME records</b> </p> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> <p> <b>Request interval</b> </p> <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p> <p> <b>Health checking regions</b> </p> <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> <p> <b>Alias records</b> </p> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource. such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> <p> <b>Charges for health checks</b> </p> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> */
		HealthCheckConfig?: HealthCheckConfig;

		/** <p>A complex type that contains information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p> <ul> <li> <p>You can't use a health check that is defined by <code>HealthCheckConfig</code> because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p> </li> <li> <p>You want to use a third-party health checker regardless of where your resources are.</p> </li> </ul> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request. AWS Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent <code>UpdateInstanceCustomHealthStatus</code> request.</p> <p>Here's how custom health checks work:</p> <ol> <li> <p>You create a service and specify a value for <code>FailureThreshold</code>. </p> <p>The failure threshold indicates the number of 30-second intervals you want AWS Cloud Map to wait between the time that your application sends an <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html">UpdateInstanceCustomHealthStatus</a> request and the time that AWS Cloud Map stops routing internet traffic to the corresponding resource.</p> </li> <li> <p>You register an instance.</p> </li> <li> <p>You configure a third-party health checker to monitor the resource that is associated with the new instance. </p> <note> <p>AWS Cloud Map doesn't check the health of the resource directly. </p> </note> </li> <li> <p>The third-party health-checker determines that the resource is unhealthy and notifies your application.</p> </li> <li> <p>Your application submits an <code>UpdateInstanceCustomHealthStatus</code> request.</p> </li> <li> <p>AWS Cloud Map waits for (<code>FailureThreshold</code> x 30) seconds.</p> </li> <li> <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the status back to healthy, AWS Cloud Map stops routing traffic to the resource.</p> </li> </ol> */
		HealthCheckCustomConfig?: HealthCheckCustomConfig;
		CreateDate?: Date | null;
		CreatorRequestId?: string | null;
	}

	/** A complex type that contains information about the specified service. */
	export interface ServiceFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		NamespaceId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			NamespaceId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when you register an instance. */
	export interface DnsConfig {
		NamespaceId?: string | null;
		RoutingPolicy?: DnsConfigRoutingPolicy | null;
		DnsRecords: Array<DnsRecord>;
	}

	/** A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when you register an instance. */
	export interface DnsConfigFormProperties {
		NamespaceId: FormControl<string | null | undefined>,
		RoutingPolicy: FormControl<DnsConfigRoutingPolicy | null | undefined>,
	}
	export function CreateDnsConfigFormGroup() {
		return new FormGroup<DnsConfigFormProperties>({
			NamespaceId: new FormControl<string | null | undefined>(undefined),
			RoutingPolicy: new FormControl<DnsConfigRoutingPolicy | null | undefined>(undefined),
		});

	}

	export enum DnsConfigRoutingPolicy { MULTIVALUE = 0, WEIGHTED = 1 }


	/** A complex type that contains information about the Route 53 DNS records that you want AWS Cloud Map to create when you register an instance. */
	export interface DnsRecord {
		Type: DnsRecordType;
		TTL: number;
	}

	/** A complex type that contains information about the Route 53 DNS records that you want AWS Cloud Map to create when you register an instance. */
	export interface DnsRecordFormProperties {
		Type: FormControl<DnsRecordType | null | undefined>,
		TTL: FormControl<number | null | undefined>,
	}
	export function CreateDnsRecordFormGroup() {
		return new FormGroup<DnsRecordFormProperties>({
			Type: new FormControl<DnsRecordType | null | undefined>(undefined),
			TTL: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DnsRecordType { SRV = 0, A = 1, AAAA = 2, CNAME = 3 }


	/** <p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <p> <b>A and AAAA records</b> </p> <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy, Route 53 considers both the A and AAAA records to be unhealthy. </p> <p> <b>CNAME records</b> </p> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> <p> <b>Request interval</b> </p> <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p> <p> <b>Health checking regions</b> </p> <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> <p> <b>Alias records</b> </p> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource. such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> <p> <b>Charges for health checks</b> </p> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> */
	export interface HealthCheckConfig {
		Type: HealthCheckConfigType;
		ResourcePath?: string | null;
		FailureThreshold?: number | null;
	}

	/** <p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <p> <b>A and AAAA records</b> </p> <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy, Route 53 considers both the A and AAAA records to be unhealthy. </p> <p> <b>CNAME records</b> </p> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> <p> <b>Request interval</b> </p> <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p> <p> <b>Health checking regions</b> </p> <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> <p> <b>Alias records</b> </p> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource. such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> <p> <b>Charges for health checks</b> </p> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> */
	export interface HealthCheckConfigFormProperties {
		Type: FormControl<HealthCheckConfigType | null | undefined>,
		ResourcePath: FormControl<string | null | undefined>,
		FailureThreshold: FormControl<number | null | undefined>,
	}
	export function CreateHealthCheckConfigFormGroup() {
		return new FormGroup<HealthCheckConfigFormProperties>({
			Type: new FormControl<HealthCheckConfigType | null | undefined>(undefined),
			ResourcePath: new FormControl<string | null | undefined>(undefined),
			FailureThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum HealthCheckConfigType { HTTP = 0, HTTPS = 1, TCP = 2 }


	/** <p>A complex type that contains information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p> <ul> <li> <p>You can't use a health check that is defined by <code>HealthCheckConfig</code> because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p> </li> <li> <p>You want to use a third-party health checker regardless of where your resources are.</p> </li> </ul> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request. AWS Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent <code>UpdateInstanceCustomHealthStatus</code> request.</p> <p>Here's how custom health checks work:</p> <ol> <li> <p>You create a service and specify a value for <code>FailureThreshold</code>. </p> <p>The failure threshold indicates the number of 30-second intervals you want AWS Cloud Map to wait between the time that your application sends an <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html">UpdateInstanceCustomHealthStatus</a> request and the time that AWS Cloud Map stops routing internet traffic to the corresponding resource.</p> </li> <li> <p>You register an instance.</p> </li> <li> <p>You configure a third-party health checker to monitor the resource that is associated with the new instance. </p> <note> <p>AWS Cloud Map doesn't check the health of the resource directly. </p> </note> </li> <li> <p>The third-party health-checker determines that the resource is unhealthy and notifies your application.</p> </li> <li> <p>Your application submits an <code>UpdateInstanceCustomHealthStatus</code> request.</p> </li> <li> <p>AWS Cloud Map waits for (<code>FailureThreshold</code> x 30) seconds.</p> </li> <li> <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the status back to healthy, AWS Cloud Map stops routing traffic to the resource.</p> </li> </ol> */
	export interface HealthCheckCustomConfig {
		FailureThreshold?: number | null;
	}

	/** <p>A complex type that contains information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p> <ul> <li> <p>You can't use a health check that is defined by <code>HealthCheckConfig</code> because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p> </li> <li> <p>You want to use a third-party health checker regardless of where your resources are.</p> </li> </ul> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request. AWS Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent <code>UpdateInstanceCustomHealthStatus</code> request.</p> <p>Here's how custom health checks work:</p> <ol> <li> <p>You create a service and specify a value for <code>FailureThreshold</code>. </p> <p>The failure threshold indicates the number of 30-second intervals you want AWS Cloud Map to wait between the time that your application sends an <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html">UpdateInstanceCustomHealthStatus</a> request and the time that AWS Cloud Map stops routing internet traffic to the corresponding resource.</p> </li> <li> <p>You register an instance.</p> </li> <li> <p>You configure a third-party health checker to monitor the resource that is associated with the new instance. </p> <note> <p>AWS Cloud Map doesn't check the health of the resource directly. </p> </note> </li> <li> <p>The third-party health-checker determines that the resource is unhealthy and notifies your application.</p> </li> <li> <p>Your application submits an <code>UpdateInstanceCustomHealthStatus</code> request.</p> </li> <li> <p>AWS Cloud Map waits for (<code>FailureThreshold</code> x 30) seconds.</p> </li> <li> <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the status back to healthy, AWS Cloud Map stops routing traffic to the resource.</p> </li> </ol> */
	export interface HealthCheckCustomConfigFormProperties {
		FailureThreshold: FormControl<number | null | undefined>,
	}
	export function CreateHealthCheckCustomConfigFormGroup() {
		return new FormGroup<HealthCheckCustomConfigFormProperties>({
			FailureThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateServiceRequest {
		Name: string;
		NamespaceId?: string | null;
		CreatorRequestId?: string | null;
		Description?: string | null;

		/** A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when you register an instance. */
		DnsConfig?: DnsConfig;

		/** <p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <p> <b>A and AAAA records</b> </p> <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy, Route 53 considers both the A and AAAA records to be unhealthy. </p> <p> <b>CNAME records</b> </p> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> <p> <b>Request interval</b> </p> <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p> <p> <b>Health checking regions</b> </p> <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> <p> <b>Alias records</b> </p> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource. such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> <p> <b>Charges for health checks</b> </p> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> */
		HealthCheckConfig?: HealthCheckConfig;

		/** <p>A complex type that contains information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p> <ul> <li> <p>You can't use a health check that is defined by <code>HealthCheckConfig</code> because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p> </li> <li> <p>You want to use a third-party health checker regardless of where your resources are.</p> </li> </ul> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request. AWS Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent <code>UpdateInstanceCustomHealthStatus</code> request.</p> <p>Here's how custom health checks work:</p> <ol> <li> <p>You create a service and specify a value for <code>FailureThreshold</code>. </p> <p>The failure threshold indicates the number of 30-second intervals you want AWS Cloud Map to wait between the time that your application sends an <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html">UpdateInstanceCustomHealthStatus</a> request and the time that AWS Cloud Map stops routing internet traffic to the corresponding resource.</p> </li> <li> <p>You register an instance.</p> </li> <li> <p>You configure a third-party health checker to monitor the resource that is associated with the new instance. </p> <note> <p>AWS Cloud Map doesn't check the health of the resource directly. </p> </note> </li> <li> <p>The third-party health-checker determines that the resource is unhealthy and notifies your application.</p> </li> <li> <p>Your application submits an <code>UpdateInstanceCustomHealthStatus</code> request.</p> </li> <li> <p>AWS Cloud Map waits for (<code>FailureThreshold</code> x 30) seconds.</p> </li> <li> <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the status back to healthy, AWS Cloud Map stops routing traffic to the resource.</p> </li> </ol> */
		HealthCheckCustomConfig?: HealthCheckCustomConfig;
		Tags?: Array<Tag>;
	}
	export interface CreateServiceRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		NamespaceId: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceRequestFormGroup() {
		return new FormGroup<CreateServiceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			NamespaceId: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NamespaceNotFound {
	}
	export interface NamespaceNotFoundFormProperties {
	}
	export function CreateNamespaceNotFoundFormGroup() {
		return new FormGroup<NamespaceNotFoundFormProperties>({
		});

	}

	export interface ServiceAlreadyExists {
	}
	export interface ServiceAlreadyExistsFormProperties {
	}
	export function CreateServiceAlreadyExistsFormGroup() {
		return new FormGroup<ServiceAlreadyExistsFormProperties>({
		});

	}

	export interface DeleteNamespaceResponse {
		OperationId?: string | null;
	}
	export interface DeleteNamespaceResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNamespaceResponseFormGroup() {
		return new FormGroup<DeleteNamespaceResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteNamespaceRequest {
		Id: string;
	}
	export interface DeleteNamespaceRequestFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNamespaceRequestFormGroup() {
		return new FormGroup<DeleteNamespaceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
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

	export interface DeleteServiceResponse {
	}
	export interface DeleteServiceResponseFormProperties {
	}
	export function CreateDeleteServiceResponseFormGroup() {
		return new FormGroup<DeleteServiceResponseFormProperties>({
		});

	}

	export interface DeleteServiceRequest {
		Id: string;
	}
	export interface DeleteServiceRequestFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServiceRequestFormGroup() {
		return new FormGroup<DeleteServiceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceNotFound {
	}
	export interface ServiceNotFoundFormProperties {
	}
	export function CreateServiceNotFoundFormGroup() {
		return new FormGroup<ServiceNotFoundFormProperties>({
		});

	}

	export interface DeregisterInstanceResponse {
		OperationId?: string | null;
	}
	export interface DeregisterInstanceResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterInstanceResponseFormGroup() {
		return new FormGroup<DeregisterInstanceResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeregisterInstanceRequest {
		ServiceId: string;
		InstanceId: string;
	}
	export interface DeregisterInstanceRequestFormProperties {
		ServiceId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterInstanceRequestFormGroup() {
		return new FormGroup<DeregisterInstanceRequestFormProperties>({
			ServiceId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InstanceNotFound {
	}
	export interface InstanceNotFoundFormProperties {
	}
	export function CreateInstanceNotFoundFormGroup() {
		return new FormGroup<InstanceNotFoundFormProperties>({
		});

	}

	export interface DiscoverInstancesResponse {
		Instances?: Array<HttpInstanceSummary>;
	}
	export interface DiscoverInstancesResponseFormProperties {
	}
	export function CreateDiscoverInstancesResponseFormGroup() {
		return new FormGroup<DiscoverInstancesResponseFormProperties>({
		});

	}


	/** In a response to a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a> request, <code>HttpInstanceSummary</code> contains information about one instance that matches the values that you specified in the request. */
	export interface HttpInstanceSummary {
		InstanceId?: string | null;
		NamespaceName?: string | null;
		ServiceName?: string | null;
		HealthStatus?: HttpInstanceSummaryHealthStatus | null;
		Attributes?: Attributes;
	}

	/** In a response to a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a> request, <code>HttpInstanceSummary</code> contains information about one instance that matches the values that you specified in the request. */
	export interface HttpInstanceSummaryFormProperties {
		InstanceId: FormControl<string | null | undefined>,
		NamespaceName: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		HealthStatus: FormControl<HttpInstanceSummaryHealthStatus | null | undefined>,
	}
	export function CreateHttpInstanceSummaryFormGroup() {
		return new FormGroup<HttpInstanceSummaryFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
			NamespaceName: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			HealthStatus: new FormControl<HttpInstanceSummaryHealthStatus | null | undefined>(undefined),
		});

	}

	export enum HttpInstanceSummaryHealthStatus { HEALTHY = 0, UNHEALTHY = 1, UNKNOWN = 2 }

	export interface Attributes {
	}
	export interface AttributesFormProperties {
	}
	export function CreateAttributesFormGroup() {
		return new FormGroup<AttributesFormProperties>({
		});

	}

	export interface DiscoverInstancesRequest {
		NamespaceName: string;
		ServiceName: string;
		MaxResults?: number | null;
		QueryParameters?: Attributes;
		HealthStatus?: DiscoverInstancesRequestHealthStatus | null;
	}
	export interface DiscoverInstancesRequestFormProperties {
		NamespaceName: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		HealthStatus: FormControl<DiscoverInstancesRequestHealthStatus | null | undefined>,
	}
	export function CreateDiscoverInstancesRequestFormGroup() {
		return new FormGroup<DiscoverInstancesRequestFormProperties>({
			NamespaceName: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			HealthStatus: new FormControl<DiscoverInstancesRequestHealthStatus | null | undefined>(undefined),
		});

	}

	export enum DiscoverInstancesRequestHealthStatus { HEALTHY = 0, UNHEALTHY = 1, ALL = 2 }

	export interface RequestLimitExceeded {
	}
	export interface RequestLimitExceededFormProperties {
	}
	export function CreateRequestLimitExceededFormGroup() {
		return new FormGroup<RequestLimitExceededFormProperties>({
		});

	}

	export interface GetInstanceResponse {

		/** A complex type that contains information about an instance that AWS Cloud Map creates when you submit a <code>RegisterInstance</code> request. */
		Instance?: Instance;
	}
	export interface GetInstanceResponseFormProperties {
	}
	export function CreateGetInstanceResponseFormGroup() {
		return new FormGroup<GetInstanceResponseFormProperties>({
		});

	}


	/** A complex type that contains information about an instance that AWS Cloud Map creates when you submit a <code>RegisterInstance</code> request. */
	export interface Instance {
		Id: string;
		CreatorRequestId?: string | null;
		Attributes?: Attributes;
	}

	/** A complex type that contains information about an instance that AWS Cloud Map creates when you submit a <code>RegisterInstance</code> request. */
	export interface InstanceFormProperties {
		Id: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInstanceRequest {
		ServiceId: string;
		InstanceId: string;
	}
	export interface GetInstanceRequestFormProperties {
		ServiceId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateGetInstanceRequestFormGroup() {
		return new FormGroup<GetInstanceRequestFormProperties>({
			ServiceId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInstancesHealthStatusResponse {
		Status?: InstanceHealthStatusMap;
		NextToken?: string | null;
	}
	export interface GetInstancesHealthStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInstancesHealthStatusResponseFormGroup() {
		return new FormGroup<GetInstancesHealthStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InstanceHealthStatusMap {
	}
	export interface InstanceHealthStatusMapFormProperties {
	}
	export function CreateInstanceHealthStatusMapFormGroup() {
		return new FormGroup<InstanceHealthStatusMapFormProperties>({
		});

	}

	export interface GetInstancesHealthStatusRequest {
		ServiceId: string;
		Instances?: Array<string>;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface GetInstancesHealthStatusRequestFormProperties {
		ServiceId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInstancesHealthStatusRequestFormGroup() {
		return new FormGroup<GetInstancesHealthStatusRequestFormProperties>({
			ServiceId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetNamespaceResponse {

		/** A complex type that contains information about a specified namespace. */
		Namespace?: Namespace;
	}
	export interface GetNamespaceResponseFormProperties {
	}
	export function CreateGetNamespaceResponseFormGroup() {
		return new FormGroup<GetNamespaceResponseFormProperties>({
		});

	}


	/** A complex type that contains information about a specified namespace. */
	export interface Namespace {
		Id?: string | null;
		Arn?: string | null;
		Name?: string | null;
		Type?: NamespaceType | null;
		Description?: string | null;
		ServiceCount?: number | null;

		/** A complex type that contains information that is specific to the namespace type. */
		Properties?: NamespaceProperties;
		CreateDate?: Date | null;
		CreatorRequestId?: string | null;
	}

	/** A complex type that contains information about a specified namespace. */
	export interface NamespaceFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<NamespaceType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ServiceCount: FormControl<number | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
	}
	export function CreateNamespaceFormGroup() {
		return new FormGroup<NamespaceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<NamespaceType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ServiceCount: new FormControl<number | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NamespaceType { DNS_PUBLIC = 0, DNS_PRIVATE = 1, HTTP = 2 }


	/** A complex type that contains information that is specific to the namespace type. */
	export interface NamespaceProperties {

		/** A complex type that contains the ID for the Route 53 hosted zone that AWS Cloud Map creates when you create a namespace. */
		DnsProperties?: DnsProperties;

		/** A complex type that contains the name of an HTTP namespace. */
		HttpProperties?: HttpProperties;
	}

	/** A complex type that contains information that is specific to the namespace type. */
	export interface NamespacePropertiesFormProperties {
	}
	export function CreateNamespacePropertiesFormGroup() {
		return new FormGroup<NamespacePropertiesFormProperties>({
		});

	}


	/** A complex type that contains the ID for the Route 53 hosted zone that AWS Cloud Map creates when you create a namespace. */
	export interface DnsProperties {
		HostedZoneId?: string | null;
	}

	/** A complex type that contains the ID for the Route 53 hosted zone that AWS Cloud Map creates when you create a namespace. */
	export interface DnsPropertiesFormProperties {
		HostedZoneId: FormControl<string | null | undefined>,
	}
	export function CreateDnsPropertiesFormGroup() {
		return new FormGroup<DnsPropertiesFormProperties>({
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains the name of an HTTP namespace. */
	export interface HttpProperties {
		HttpName?: string | null;
	}

	/** A complex type that contains the name of an HTTP namespace. */
	export interface HttpPropertiesFormProperties {
		HttpName: FormControl<string | null | undefined>,
	}
	export function CreateHttpPropertiesFormGroup() {
		return new FormGroup<HttpPropertiesFormProperties>({
			HttpName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetNamespaceRequest {
		Id: string;
	}
	export interface GetNamespaceRequestFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateGetNamespaceRequestFormGroup() {
		return new FormGroup<GetNamespaceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOperationResponse {

		/** A complex type that contains information about a specified operation. */
		Operation?: Operation;
	}
	export interface GetOperationResponseFormProperties {
	}
	export function CreateGetOperationResponseFormGroup() {
		return new FormGroup<GetOperationResponseFormProperties>({
		});

	}


	/** A complex type that contains information about a specified operation. */
	export interface Operation {
		Id?: string | null;
		Type?: OperationType | null;
		Status?: OperationStatus | null;
		ErrorMessage?: string | null;
		ErrorCode?: string | null;
		CreateDate?: Date | null;
		UpdateDate?: Date | null;
		Targets?: OperationTargetsMap;
	}

	/** A complex type that contains information about a specified operation. */
	export interface OperationFormProperties {
		Id: FormControl<string | null | undefined>,
		Type: FormControl<OperationType | null | undefined>,
		Status: FormControl<OperationStatus | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		UpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<OperationType | null | undefined>(undefined),
			Status: new FormControl<OperationStatus | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			UpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OperationType { CREATE_NAMESPACE = 0, DELETE_NAMESPACE = 1, UPDATE_SERVICE = 2, REGISTER_INSTANCE = 3, DEREGISTER_INSTANCE = 4 }

	export enum OperationStatus { SUBMITTED = 0, PENDING = 1, SUCCESS = 2, FAIL = 3 }

	export interface OperationTargetsMap {
	}
	export interface OperationTargetsMapFormProperties {
	}
	export function CreateOperationTargetsMapFormGroup() {
		return new FormGroup<OperationTargetsMapFormProperties>({
		});

	}

	export interface GetOperationRequest {
		OperationId: string;
	}
	export interface GetOperationRequestFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateGetOperationRequestFormGroup() {
		return new FormGroup<GetOperationRequestFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OperationNotFound {
	}
	export interface OperationNotFoundFormProperties {
	}
	export function CreateOperationNotFoundFormGroup() {
		return new FormGroup<OperationNotFoundFormProperties>({
		});

	}

	export interface GetServiceResponse {

		/** A complex type that contains information about the specified service. */
		Service?: Service;
	}
	export interface GetServiceResponseFormProperties {
	}
	export function CreateGetServiceResponseFormGroup() {
		return new FormGroup<GetServiceResponseFormProperties>({
		});

	}

	export interface GetServiceRequest {
		Id: string;
	}
	export interface GetServiceRequestFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceRequestFormGroup() {
		return new FormGroup<GetServiceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInstancesResponse {
		Instances?: Array<InstanceSummary>;
		NextToken?: string | null;
	}
	export interface ListInstancesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstancesResponseFormGroup() {
		return new FormGroup<ListInstancesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about the instances that you registered by using a specified service. */
	export interface InstanceSummary {
		Id?: string | null;
		Attributes?: Attributes;
	}

	/** A complex type that contains information about the instances that you registered by using a specified service. */
	export interface InstanceSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateInstanceSummaryFormGroup() {
		return new FormGroup<InstanceSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInstancesRequest {
		ServiceId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListInstancesRequestFormProperties {
		ServiceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListInstancesRequestFormGroup() {
		return new FormGroup<ListInstancesRequestFormProperties>({
			ServiceId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListNamespacesResponse {
		Namespaces?: Array<NamespaceSummary>;
		NextToken?: string | null;
	}
	export interface ListNamespacesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNamespacesResponseFormGroup() {
		return new FormGroup<ListNamespacesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about a namespace. */
	export interface NamespaceSummary {
		Id?: string | null;
		Arn?: string | null;
		Name?: string | null;
		Type?: NamespaceType | null;
		Description?: string | null;
		ServiceCount?: number | null;

		/** A complex type that contains information that is specific to the namespace type. */
		Properties?: NamespaceProperties;
		CreateDate?: Date | null;
	}

	/** A complex type that contains information about a namespace. */
	export interface NamespaceSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<NamespaceType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ServiceCount: FormControl<number | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
	}
	export function CreateNamespaceSummaryFormGroup() {
		return new FormGroup<NamespaceSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<NamespaceType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ServiceCount: new FormControl<number | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListNamespacesRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
		Filters?: Array<NamespaceFilter>;
	}
	export interface ListNamespacesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListNamespacesRequestFormGroup() {
		return new FormGroup<ListNamespacesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type that identifies the namespaces that you want to list. You can choose to list public or private namespaces. */
	export interface NamespaceFilter {
		Name: NamespaceFilterName;
		Values: Array<string>;
		Condition?: NamespaceFilterCondition | null;
	}

	/** A complex type that identifies the namespaces that you want to list. You can choose to list public or private namespaces. */
	export interface NamespaceFilterFormProperties {
		Name: FormControl<NamespaceFilterName | null | undefined>,
		Condition: FormControl<NamespaceFilterCondition | null | undefined>,
	}
	export function CreateNamespaceFilterFormGroup() {
		return new FormGroup<NamespaceFilterFormProperties>({
			Name: new FormControl<NamespaceFilterName | null | undefined>(undefined),
			Condition: new FormControl<NamespaceFilterCondition | null | undefined>(undefined),
		});

	}

	export enum NamespaceFilterName { TYPE = 0 }

	export enum NamespaceFilterCondition { EQ = 0, IN = 1, BETWEEN = 2 }

	export interface ListOperationsResponse {
		Operations?: Array<OperationSummary>;
		NextToken?: string | null;
	}
	export interface ListOperationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about an operation that matches the criteria that you specified in a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a> request. */
	export interface OperationSummary {
		Id?: string | null;
		Status?: OperationStatus | null;
	}

	/** A complex type that contains information about an operation that matches the criteria that you specified in a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a> request. */
	export interface OperationSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Status: FormControl<OperationStatus | null | undefined>,
	}
	export function CreateOperationSummaryFormGroup() {
		return new FormGroup<OperationSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<OperationStatus | null | undefined>(undefined),
		});

	}

	export interface ListOperationsRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
		Filters?: Array<OperationFilter>;
	}
	export interface ListOperationsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListOperationsRequestFormGroup() {
		return new FormGroup<ListOperationsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type that lets you select the operations that you want to list. */
	export interface OperationFilter {
		Name: OperationFilterName;
		Values: Array<string>;
		Condition?: NamespaceFilterCondition | null;
	}

	/** A complex type that lets you select the operations that you want to list. */
	export interface OperationFilterFormProperties {
		Name: FormControl<OperationFilterName | null | undefined>,
		Condition: FormControl<NamespaceFilterCondition | null | undefined>,
	}
	export function CreateOperationFilterFormGroup() {
		return new FormGroup<OperationFilterFormProperties>({
			Name: new FormControl<OperationFilterName | null | undefined>(undefined),
			Condition: new FormControl<NamespaceFilterCondition | null | undefined>(undefined),
		});

	}

	export enum OperationFilterName { NAMESPACE_ID = 0, SERVICE_ID = 1, STATUS = 2, TYPE = 3, UPDATE_DATE = 4 }

	export interface ListServicesResponse {
		Services?: Array<ServiceSummary>;
		NextToken?: string | null;
	}
	export interface ListServicesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicesResponseFormGroup() {
		return new FormGroup<ListServicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about a specified service. */
	export interface ServiceSummary {
		Id?: string | null;
		Arn?: string | null;
		Name?: string | null;
		Description?: string | null;
		InstanceCount?: number | null;

		/** A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when you register an instance. */
		DnsConfig?: DnsConfig;

		/** <p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <p> <b>A and AAAA records</b> </p> <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy, Route 53 considers both the A and AAAA records to be unhealthy. </p> <p> <b>CNAME records</b> </p> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> <p> <b>Request interval</b> </p> <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p> <p> <b>Health checking regions</b> </p> <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> <p> <b>Alias records</b> </p> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource. such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> <p> <b>Charges for health checks</b> </p> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> */
		HealthCheckConfig?: HealthCheckConfig;

		/** <p>A complex type that contains information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p> <ul> <li> <p>You can't use a health check that is defined by <code>HealthCheckConfig</code> because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p> </li> <li> <p>You want to use a third-party health checker regardless of where your resources are.</p> </li> </ul> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request. AWS Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent <code>UpdateInstanceCustomHealthStatus</code> request.</p> <p>Here's how custom health checks work:</p> <ol> <li> <p>You create a service and specify a value for <code>FailureThreshold</code>. </p> <p>The failure threshold indicates the number of 30-second intervals you want AWS Cloud Map to wait between the time that your application sends an <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html">UpdateInstanceCustomHealthStatus</a> request and the time that AWS Cloud Map stops routing internet traffic to the corresponding resource.</p> </li> <li> <p>You register an instance.</p> </li> <li> <p>You configure a third-party health checker to monitor the resource that is associated with the new instance. </p> <note> <p>AWS Cloud Map doesn't check the health of the resource directly. </p> </note> </li> <li> <p>The third-party health-checker determines that the resource is unhealthy and notifies your application.</p> </li> <li> <p>Your application submits an <code>UpdateInstanceCustomHealthStatus</code> request.</p> </li> <li> <p>AWS Cloud Map waits for (<code>FailureThreshold</code> x 30) seconds.</p> </li> <li> <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the status back to healthy, AWS Cloud Map stops routing traffic to the resource.</p> </li> </ol> */
		HealthCheckCustomConfig?: HealthCheckCustomConfig;
		CreateDate?: Date | null;
	}

	/** A complex type that contains information about a specified service. */
	export interface ServiceSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		InstanceCount: FormControl<number | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
	}
	export function CreateServiceSummaryFormGroup() {
		return new FormGroup<ServiceSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListServicesRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
		Filters?: Array<ServiceFilter>;
	}
	export interface ListServicesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListServicesRequestFormGroup() {
		return new FormGroup<ListServicesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A complex type that lets you specify the namespaces that you want to list services for. */
	export interface ServiceFilter {
		Name: ServiceFilterName;
		Values: Array<string>;
		Condition?: NamespaceFilterCondition | null;
	}

	/** A complex type that lets you specify the namespaces that you want to list services for. */
	export interface ServiceFilterFormProperties {
		Name: FormControl<ServiceFilterName | null | undefined>,
		Condition: FormControl<NamespaceFilterCondition | null | undefined>,
	}
	export function CreateServiceFilterFormGroup() {
		return new FormGroup<ServiceFilterFormProperties>({
			Name: new FormControl<ServiceFilterName | null | undefined>(undefined),
			Condition: new FormControl<NamespaceFilterCondition | null | undefined>(undefined),
		});

	}

	export enum ServiceFilterName { NAMESPACE_ID = 0 }

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface RegisterInstanceResponse {
		OperationId?: string | null;
	}
	export interface RegisterInstanceResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterInstanceResponseFormGroup() {
		return new FormGroup<RegisterInstanceResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterInstanceRequest {
		ServiceId: string;
		InstanceId: string;
		CreatorRequestId?: string | null;
		Attributes: Attributes;
	}
	export interface RegisterInstanceRequestFormProperties {
		ServiceId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		CreatorRequestId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterInstanceRequestFormGroup() {
		return new FormGroup<RegisterInstanceRequestFormProperties>({
			ServiceId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			CreatorRequestId: new FormControl<string | null | undefined>(undefined),
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
		ResourceARN: string;
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
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
		ResourceARN: string;
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateInstanceCustomHealthStatusRequest {
		ServiceId: string;
		InstanceId: string;
		Status: UpdateInstanceCustomHealthStatusRequestStatus;
	}
	export interface UpdateInstanceCustomHealthStatusRequestFormProperties {
		ServiceId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		Status: FormControl<UpdateInstanceCustomHealthStatusRequestStatus | null | undefined>,
	}
	export function CreateUpdateInstanceCustomHealthStatusRequestFormGroup() {
		return new FormGroup<UpdateInstanceCustomHealthStatusRequestFormProperties>({
			ServiceId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<UpdateInstanceCustomHealthStatusRequestStatus | null | undefined>(undefined),
		});

	}

	export enum UpdateInstanceCustomHealthStatusRequestStatus { HEALTHY = 0, UNHEALTHY = 1 }

	export interface CustomHealthNotFound {
	}
	export interface CustomHealthNotFoundFormProperties {
	}
	export function CreateCustomHealthNotFoundFormGroup() {
		return new FormGroup<CustomHealthNotFoundFormProperties>({
		});

	}

	export interface UpdateServiceResponse {
		OperationId?: string | null;
	}
	export interface UpdateServiceResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceResponseFormGroup() {
		return new FormGroup<UpdateServiceResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateServiceRequest {
		Id: string;

		/**
		 * A complex type that contains changes to an existing service.
		 * Required
		 */
		Service: ServiceChange;
	}
	export interface UpdateServiceRequestFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServiceRequestFormGroup() {
		return new FormGroup<UpdateServiceRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains changes to an existing service. */
	export interface ServiceChange {
		Description?: string | null;

		/** A complex type that contains information about changes to the Route 53 DNS records that AWS Cloud Map creates when you register an instance. */
		DnsConfig?: DnsConfigChange;

		/** <p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <p> <b>A and AAAA records</b> </p> <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy, Route 53 considers both the A and AAAA records to be unhealthy. </p> <p> <b>CNAME records</b> </p> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> <p> <b>Request interval</b> </p> <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p> <p> <b>Health checking regions</b> </p> <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> <p> <b>Alias records</b> </p> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource. such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> <p> <b>Charges for health checks</b> </p> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> */
		HealthCheckConfig?: HealthCheckConfig;
	}

	/** A complex type that contains changes to an existing service. */
	export interface ServiceChangeFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateServiceChangeFormGroup() {
		return new FormGroup<ServiceChangeFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that contains information about changes to the Route 53 DNS records that AWS Cloud Map creates when you register an instance. */
	export interface DnsConfigChange {
		DnsRecords: Array<DnsRecord>;
	}

	/** A complex type that contains information about changes to the Route 53 DNS records that AWS Cloud Map creates when you register an instance. */
	export interface DnsConfigChangeFormProperties {
	}
	export function CreateDnsConfigChangeFormGroup() {
		return new FormGroup<DnsConfigChangeFormProperties>({
		});

	}

	export enum CustomHealthStatus { HEALTHY = 0, UNHEALTHY = 1 }

	export enum HealthStatusFilter { HEALTHY = 0, UNHEALTHY = 1, ALL = 2 }

	export enum RoutingPolicy { MULTIVALUE = 0, WEIGHTED = 1 }

	export enum RecordType { SRV = 0, A = 1, AAAA = 2, CNAME = 3 }

	export enum FilterCondition { EQ = 0, IN = 1, BETWEEN = 2 }

	export enum HealthCheckType { HTTP = 0, HTTPS = 1, TCP = 2 }

	export enum HealthStatus { HEALTHY = 0, UNHEALTHY = 1, UNKNOWN = 2 }

	export enum OperationTargetType { NAMESPACE = 0, SERVICE = 1, INSTANCE = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an HTTP namespace. Service instances that you register using an HTTP namespace can be discovered using a <code>DiscoverInstances</code> request but can't be discovered using DNS. </p> <p>For the current limit on the number of namespaces that you can create using the same AWS account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the <i>AWS Cloud Map Developer Guide</i>.</p>
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace
		 * @return {CreateHttpNamespaceResponse} Success
		 */
		CreateHttpNamespace(requestBody: CreateHttpNamespaceRequest): Observable<CreateHttpNamespaceResponse> {
			return this.http.post<CreateHttpNamespaceResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a private namespace based on DNS, which will be visible only inside a specified Amazon VPC. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service will be <code>backend.example.com</code>. For the current limit on the number of namespaces that you can create using the same AWS account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the <i>AWS Cloud Map Developer Guide</i>.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace
		 * @return {CreatePrivateDnsNamespaceResponse} Success
		 */
		CreatePrivateDnsNamespace(requestBody: CreatePrivateDnsNamespaceRequest): Observable<CreatePrivateDnsNamespaceResponse> {
			return this.http.post<CreatePrivateDnsNamespaceResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a public namespace based on DNS, which will be visible on the internet. The namespace defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your service <code>backend</code>, the resulting DNS name for the service will be <code>backend.example.com</code>. For the current limit on the number of namespaces that you can create using the same AWS account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the <i>AWS Cloud Map Developer Guide</i>.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace
		 * @return {CreatePublicDnsNamespaceResponse} Success
		 */
		CreatePublicDnsNamespace(requestBody: CreatePublicDnsNamespaceRequest): Observable<CreatePublicDnsNamespaceResponse> {
			return this.http.post<CreatePublicDnsNamespaceResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a service, which defines the configuration for the following entities:</p> <ul> <li> <p>For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53:</p> <ul> <li> <p>A</p> </li> <li> <p>AAAA</p> </li> <li> <p>A and AAAA</p> </li> <li> <p>SRV</p> </li> <li> <p>CNAME</p> </li> </ul> </li> <li> <p>Optionally, a health check</p> </li> </ul> <p>After you create the service, you can submit a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html">RegisterInstance</a> request, and AWS Cloud Map uses the values in the configuration to create the specified entities.</p> <p>For the current limit on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the <i>AWS Cloud Map Developer Guide</i>.</p>
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.CreateService
		 * @return {CreateServiceResponse} Success
		 */
		CreateService(requestBody: CreateServiceRequest): Observable<CreateServiceResponse> {
			return this.http.post<CreateServiceResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.CreateService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a namespace from the current account. If the namespace still contains one or more services, the request fails.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace
		 * @return {DeleteNamespaceResponse} Success
		 */
		DeleteNamespace(requestBody: DeleteNamespaceRequest): Observable<DeleteNamespaceResponse> {
			return this.http.post<DeleteNamespaceResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified service. If the service still contains one or more registered instances, the request fails.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.DeleteService
		 * @return {DeleteServiceResponse} Success
		 */
		DeleteService(requestBody: DeleteServiceRequest): Observable<DeleteServiceResponse> {
			return this.http.post<DeleteServiceResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the Amazon Route 53 DNS records and health check, if any, that AWS Cloud Map created for the specified instance.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance
		 * @return {DeregisterInstanceResponse} Success
		 */
		DeregisterInstance(requestBody: DeregisterInstanceRequest): Observable<DeregisterInstanceResponse> {
			return this.http.post<DeregisterInstanceResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Discovers registered instances for a specified namespace and service. You can use <code>DiscoverInstances</code> to discover instances for any type of namespace. For public and private DNS namespaces, you can also use DNS queries to discover instances.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances
		 * @return {DiscoverInstancesResponse} Success
		 */
		DiscoverInstances(requestBody: DiscoverInstancesRequest): Observable<DiscoverInstancesResponse> {
			return this.http.post<DiscoverInstancesResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a specified instance.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.GetInstance
		 * @return {GetInstanceResponse} Success
		 */
		GetInstance(requestBody: GetInstanceRequest): Observable<GetInstanceResponse> {
			return this.http.post<GetInstanceResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or more instances that are associated with a specified service.</p> <note> <p>There is a brief delay between when you register an instance and when the health status for the instance is available. </p> </note>
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetInstancesHealthStatusResponse} Success
		 */
		GetInstancesHealthStatus(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetInstancesHealthStatusRequest): Observable<GetInstancesHealthStatusResponse> {
			return this.http.post<GetInstancesHealthStatusResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a namespace.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace
		 * @return {GetNamespaceResponse} Success
		 */
		GetNamespace(requestBody: GetNamespaceRequest): Observable<GetNamespaceResponse> {
			return this.http.post<GetNamespaceResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about any operation that returns an operation ID in the response, such as a <code>CreateService</code> request.</p> <note> <p>To get a list of operations that match specified criteria, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a>.</p> </note>
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.GetOperation
		 * @return {GetOperationResponse} Success
		 */
		GetOperation(requestBody: GetOperationRequest): Observable<GetOperationResponse> {
			return this.http.post<GetOperationResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the settings for a specified service.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.GetService
		 * @return {GetServiceResponse} Success
		 */
		GetService(requestBody: GetServiceRequest): Observable<GetServiceResponse> {
			return this.http.post<GetServiceResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.GetService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists summary information about the instances that you registered by using a specified service.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.ListInstances
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInstancesResponse} Success
		 */
		ListInstances(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListInstancesRequest): Observable<ListInstancesResponse> {
			return this.http.post<ListInstancesResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists summary information about the namespaces that were created by the current AWS account.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNamespacesResponse} Success
		 */
		ListNamespaces(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListNamespacesRequest): Observable<ListNamespacesResponse> {
			return this.http.post<ListNamespacesResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists operations that match the criteria that you specify.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.ListOperations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOperationsResponse} Success
		 */
		ListOperations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListOperationsRequest): Observable<ListOperationsResponse> {
			return this.http.post<ListOperationsResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists summary information for all the services that are associated with one or more specified namespaces.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.ListServices
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListServicesResponse} Success
		 */
		ListServices(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListServicesRequest): Observable<ListServicesResponse> {
			return this.http.post<ListServicesResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.ListServices?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists tags for the specified resource.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates one or more records and, optionally, creates a health check based on the settings in a specified service. When you submit a <code>RegisterInstance</code> request, the following occurs:</p> <ul> <li> <p>For each DNS record that you define in the service that is specified by <code>ServiceId</code>, a record is created or updated in the hosted zone that is associated with the corresponding namespace.</p> </li> <li> <p>If the service includes <code>HealthCheckConfig</code>, a health check is created based on the settings in the health check configuration.</p> </li> <li> <p>The health check, if any, is associated with each of the new or updated records.</p> </li> </ul> <important> <p>One <code>RegisterInstance</code> request must complete before you can submit another request and specify the same service ID and instance ID.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html">CreateService</a>.</p> <p>When AWS Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value:</p> <ul> <li> <p> <b>If the health check is healthy</b>: returns all the records</p> </li> <li> <p> <b>If the health check is unhealthy</b>: returns the applicable value for the last healthy instance</p> </li> <li> <p> <b>If you didn't specify a health check configuration</b>: returns all the records</p> </li> </ul> <p>For the current limit on the number of instances that you can register using the same namespace and using the same service, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the <i>AWS Cloud Map Developer Guide</i>.</p>
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance
		 * @return {RegisterInstanceResponse} Success
		 */
		RegisterInstance(requestBody: RegisterInstanceRequest): Observable<RegisterInstanceResponse> {
			return this.http.post<RegisterInstanceResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds one or more tags to the specified resource.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from the specified resource.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Submits a request to change the health status of a custom health check to healthy or unhealthy.</p> <p>You can use <code>UpdateInstanceCustomHealthStatus</code> to change the status only for custom health checks, which you define using <code>HealthCheckCustomConfig</code> when you create a service. You can't use it to change the status for Route 53 health checks, which you define using <code>HealthCheckConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_HealthCheckCustomConfig.html">HealthCheckCustomConfig</a>.</p>
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus
		 * @return {void} Success
		 */
		UpdateInstanceCustomHealthStatus(requestBody: UpdateInstanceCustomHealthStatusRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Submits a request to perform the following operations:</p> <ul> <li> <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p> </li> <li> <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p> <note> <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code> configuration.</p> </note> </li> </ul> <p>For public and private DNS namespaces, note the following:</p> <ul> <li> <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code> configurations from an <code>UpdateService</code> request, the configurations are deleted from the service.</p> </li> <li> <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an <code>UpdateService</code> request, the configuration is not deleted from the service.</p> </li> </ul> <p>When you update settings for a service, AWS Cloud Map also updates the corresponding settings in all the records and health checks that were created by using the specified service.</p>
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.UpdateService
		 * @return {UpdateServiceResponse} Success
		 */
		UpdateService(requestBody: UpdateServiceRequest): Observable<UpdateServiceResponse> {
			return this.http.post<UpdateServiceResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateHttpNamespaceX_Amz_Target { Route53AutoNaming_v20170314_CreateHttpNamespace = 0 }

	export enum CreatePrivateDnsNamespaceX_Amz_Target { Route53AutoNaming_v20170314_CreatePrivateDnsNamespace = 0 }

	export enum CreatePublicDnsNamespaceX_Amz_Target { Route53AutoNaming_v20170314_CreatePublicDnsNamespace = 0 }

	export enum CreateServiceX_Amz_Target { Route53AutoNaming_v20170314_CreateService = 0 }

	export enum DeleteNamespaceX_Amz_Target { Route53AutoNaming_v20170314_DeleteNamespace = 0 }

	export enum DeleteServiceX_Amz_Target { Route53AutoNaming_v20170314_DeleteService = 0 }

	export enum DeregisterInstanceX_Amz_Target { Route53AutoNaming_v20170314_DeregisterInstance = 0 }

	export enum DiscoverInstancesX_Amz_Target { Route53AutoNaming_v20170314_DiscoverInstances = 0 }

	export enum GetInstanceX_Amz_Target { Route53AutoNaming_v20170314_GetInstance = 0 }

	export enum GetInstancesHealthStatusX_Amz_Target { Route53AutoNaming_v20170314_GetInstancesHealthStatus = 0 }

	export enum GetNamespaceX_Amz_Target { Route53AutoNaming_v20170314_GetNamespace = 0 }

	export enum GetOperationX_Amz_Target { Route53AutoNaming_v20170314_GetOperation = 0 }

	export enum GetServiceX_Amz_Target { Route53AutoNaming_v20170314_GetService = 0 }

	export enum ListInstancesX_Amz_Target { Route53AutoNaming_v20170314_ListInstances = 0 }

	export enum ListNamespacesX_Amz_Target { Route53AutoNaming_v20170314_ListNamespaces = 0 }

	export enum ListOperationsX_Amz_Target { Route53AutoNaming_v20170314_ListOperations = 0 }

	export enum ListServicesX_Amz_Target { Route53AutoNaming_v20170314_ListServices = 0 }

	export enum ListTagsForResourceX_Amz_Target { Route53AutoNaming_v20170314_ListTagsForResource = 0 }

	export enum RegisterInstanceX_Amz_Target { Route53AutoNaming_v20170314_RegisterInstance = 0 }

	export enum TagResourceX_Amz_Target { Route53AutoNaming_v20170314_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { Route53AutoNaming_v20170314_UntagResource = 0 }

	export enum UpdateInstanceCustomHealthStatusX_Amz_Target { Route53AutoNaming_v20170314_UpdateInstanceCustomHealthStatus = 0 }

	export enum UpdateServiceX_Amz_Target { Route53AutoNaming_v20170314_UpdateService = 0 }

}

