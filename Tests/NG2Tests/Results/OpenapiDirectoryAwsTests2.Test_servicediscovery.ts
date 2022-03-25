import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateHttpNamespaceResponse {
		OperationId?: string;
	}

	export interface CreateHttpNamespaceRequest {
		Name: string;
		CreatorRequestId?: string;
		Description?: string;
		Tags?: Array<Tag>;
	}


	/** A custom key-value pair associated with a resource. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface InvalidInput {
	}

	export interface NamespaceAlreadyExists {
	}

	export interface ResourceLimitExceeded {
	}

	export interface DuplicateRequest {
	}

	export interface TooManyTagsException {
	}

	export interface CreatePrivateDnsNamespaceResponse {
		OperationId?: string;
	}

	export interface CreatePrivateDnsNamespaceRequest {
		Name: string;
		CreatorRequestId?: string;
		Description?: string;
		Vpc: string;
		Tags?: Array<Tag>;
	}

	export interface CreatePublicDnsNamespaceResponse {
		OperationId?: string;
	}

	export interface CreatePublicDnsNamespaceRequest {
		Name: string;
		CreatorRequestId?: string;
		Description?: string;
		Tags?: Array<Tag>;
	}

	export interface CreateServiceResponse {

		/** A complex type that contains information about the specified service. */
		Service?: Service;
	}


	/** A complex type that contains information about the specified service. */
	export interface Service {
		Id?: string;
		Arn?: string;
		Name?: string;
		NamespaceId?: string;
		Description?: string;
		InstanceCount?: number;

		/** A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when you register an instance. */
		DnsConfig?: DnsConfig;

		/** <p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <p> <b>A and AAAA records</b> </p> <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy, Route 53 considers both the A and AAAA records to be unhealthy. </p> <p> <b>CNAME records</b> </p> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> <p> <b>Request interval</b> </p> <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p> <p> <b>Health checking regions</b> </p> <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> <p> <b>Alias records</b> </p> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource. such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> <p> <b>Charges for health checks</b> </p> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> */
		HealthCheckConfig?: HealthCheckConfig;

		/** <p>A complex type that contains information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p> <ul> <li> <p>You can't use a health check that is defined by <code>HealthCheckConfig</code> because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p> </li> <li> <p>You want to use a third-party health checker regardless of where your resources are.</p> </li> </ul> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request. AWS Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent <code>UpdateInstanceCustomHealthStatus</code> request.</p> <p>Here's how custom health checks work:</p> <ol> <li> <p>You create a service and specify a value for <code>FailureThreshold</code>. </p> <p>The failure threshold indicates the number of 30-second intervals you want AWS Cloud Map to wait between the time that your application sends an <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html">UpdateInstanceCustomHealthStatus</a> request and the time that AWS Cloud Map stops routing internet traffic to the corresponding resource.</p> </li> <li> <p>You register an instance.</p> </li> <li> <p>You configure a third-party health checker to monitor the resource that is associated with the new instance. </p> <note> <p>AWS Cloud Map doesn't check the health of the resource directly. </p> </note> </li> <li> <p>The third-party health-checker determines that the resource is unhealthy and notifies your application.</p> </li> <li> <p>Your application submits an <code>UpdateInstanceCustomHealthStatus</code> request.</p> </li> <li> <p>AWS Cloud Map waits for (<code>FailureThreshold</code> x 30) seconds.</p> </li> <li> <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the status back to healthy, AWS Cloud Map stops routing traffic to the resource.</p> </li> </ol> */
		HealthCheckCustomConfig?: HealthCheckCustomConfig;
		CreateDate?: Date;
		CreatorRequestId?: string;
	}


	/** A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when you register an instance. */
	export interface DnsConfig {
		NamespaceId?: string;
		RoutingPolicy?: DnsConfigRoutingPolicy;
		DnsRecords: Array<DnsRecord>;
	}

	export enum DnsConfigRoutingPolicy { MULTIVALUE = 0, WEIGHTED = 1 }


	/** A complex type that contains information about the Route 53 DNS records that you want AWS Cloud Map to create when you register an instance. */
	export interface DnsRecord {
		Type: DnsRecordType;
		TTL: number;
	}

	export enum DnsRecordType { SRV = 0, A = 1, AAAA = 2, CNAME = 3 }


	/** <p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <p> <b>A and AAAA records</b> </p> <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy, Route 53 considers both the A and AAAA records to be unhealthy. </p> <p> <b>CNAME records</b> </p> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> <p> <b>Request interval</b> </p> <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p> <p> <b>Health checking regions</b> </p> <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> <p> <b>Alias records</b> </p> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource. such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> <p> <b>Charges for health checks</b> </p> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> */
	export interface HealthCheckConfig {
		Type: HealthCheckConfigType;
		ResourcePath?: string;
		FailureThreshold?: number;
	}

	export enum HealthCheckConfigType { HTTP = 0, HTTPS = 1, TCP = 2 }


	/** <p>A complex type that contains information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p> <ul> <li> <p>You can't use a health check that is defined by <code>HealthCheckConfig</code> because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p> </li> <li> <p>You want to use a third-party health checker regardless of where your resources are.</p> </li> </ul> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request. AWS Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent <code>UpdateInstanceCustomHealthStatus</code> request.</p> <p>Here's how custom health checks work:</p> <ol> <li> <p>You create a service and specify a value for <code>FailureThreshold</code>. </p> <p>The failure threshold indicates the number of 30-second intervals you want AWS Cloud Map to wait between the time that your application sends an <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html">UpdateInstanceCustomHealthStatus</a> request and the time that AWS Cloud Map stops routing internet traffic to the corresponding resource.</p> </li> <li> <p>You register an instance.</p> </li> <li> <p>You configure a third-party health checker to monitor the resource that is associated with the new instance. </p> <note> <p>AWS Cloud Map doesn't check the health of the resource directly. </p> </note> </li> <li> <p>The third-party health-checker determines that the resource is unhealthy and notifies your application.</p> </li> <li> <p>Your application submits an <code>UpdateInstanceCustomHealthStatus</code> request.</p> </li> <li> <p>AWS Cloud Map waits for (<code>FailureThreshold</code> x 30) seconds.</p> </li> <li> <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the status back to healthy, AWS Cloud Map stops routing traffic to the resource.</p> </li> </ol> */
	export interface HealthCheckCustomConfig {
		FailureThreshold?: number;
	}

	export interface CreateServiceRequest {
		Name: string;
		NamespaceId?: string;
		CreatorRequestId?: string;
		Description?: string;

		/** A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when you register an instance. */
		DnsConfig?: DnsConfig;

		/** <p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <p> <b>A and AAAA records</b> </p> <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy, Route 53 considers both the A and AAAA records to be unhealthy. </p> <p> <b>CNAME records</b> </p> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> <p> <b>Request interval</b> </p> <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p> <p> <b>Health checking regions</b> </p> <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> <p> <b>Alias records</b> </p> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource. such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> <p> <b>Charges for health checks</b> </p> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> */
		HealthCheckConfig?: HealthCheckConfig;

		/** <p>A complex type that contains information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p> <ul> <li> <p>You can't use a health check that is defined by <code>HealthCheckConfig</code> because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p> </li> <li> <p>You want to use a third-party health checker regardless of where your resources are.</p> </li> </ul> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request. AWS Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent <code>UpdateInstanceCustomHealthStatus</code> request.</p> <p>Here's how custom health checks work:</p> <ol> <li> <p>You create a service and specify a value for <code>FailureThreshold</code>. </p> <p>The failure threshold indicates the number of 30-second intervals you want AWS Cloud Map to wait between the time that your application sends an <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html">UpdateInstanceCustomHealthStatus</a> request and the time that AWS Cloud Map stops routing internet traffic to the corresponding resource.</p> </li> <li> <p>You register an instance.</p> </li> <li> <p>You configure a third-party health checker to monitor the resource that is associated with the new instance. </p> <note> <p>AWS Cloud Map doesn't check the health of the resource directly. </p> </note> </li> <li> <p>The third-party health-checker determines that the resource is unhealthy and notifies your application.</p> </li> <li> <p>Your application submits an <code>UpdateInstanceCustomHealthStatus</code> request.</p> </li> <li> <p>AWS Cloud Map waits for (<code>FailureThreshold</code> x 30) seconds.</p> </li> <li> <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the status back to healthy, AWS Cloud Map stops routing traffic to the resource.</p> </li> </ol> */
		HealthCheckCustomConfig?: HealthCheckCustomConfig;
		Tags?: Array<Tag>;
	}

	export interface NamespaceNotFound {
	}

	export interface ServiceAlreadyExists {
	}

	export interface DeleteNamespaceResponse {
		OperationId?: string;
	}

	export interface DeleteNamespaceRequest {
		Id: string;
	}

	export interface ResourceInUse {
	}

	export interface DeleteServiceResponse {
	}

	export interface DeleteServiceRequest {
		Id: string;
	}

	export interface ServiceNotFound {
	}

	export interface DeregisterInstanceResponse {
		OperationId?: string;
	}

	export interface DeregisterInstanceRequest {
		ServiceId: string;
		InstanceId: string;
	}

	export interface InstanceNotFound {
	}

	export interface DiscoverInstancesResponse {
		Instances?: Array<HttpInstanceSummary>;
	}


	/** In a response to a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a> request, <code>HttpInstanceSummary</code> contains information about one instance that matches the values that you specified in the request. */
	export interface HttpInstanceSummary {
		InstanceId?: string;
		NamespaceName?: string;
		ServiceName?: string;
		HealthStatus?: HttpInstanceSummaryHealthStatus;
		Attributes?: Attributes;
	}

	export enum HttpInstanceSummaryHealthStatus { HEALTHY = 0, UNHEALTHY = 1, UNKNOWN = 2 }

	export interface Attributes {
	}

	export interface DiscoverInstancesRequest {
		NamespaceName: string;
		ServiceName: string;
		MaxResults?: number;
		QueryParameters?: Attributes;
		HealthStatus?: DiscoverInstancesRequestHealthStatus;
	}

	export enum DiscoverInstancesRequestHealthStatus { HEALTHY = 0, UNHEALTHY = 1, ALL = 2 }

	export interface RequestLimitExceeded {
	}

	export interface GetInstanceResponse {

		/** A complex type that contains information about an instance that AWS Cloud Map creates when you submit a <code>RegisterInstance</code> request. */
		Instance?: Instance;
	}


	/** A complex type that contains information about an instance that AWS Cloud Map creates when you submit a <code>RegisterInstance</code> request. */
	export interface Instance {
		Id: string;
		CreatorRequestId?: string;
		Attributes?: Attributes;
	}

	export interface GetInstanceRequest {
		ServiceId: string;
		InstanceId: string;
	}

	export interface GetInstancesHealthStatusResponse {
		Status?: InstanceHealthStatusMap;
		NextToken?: string;
	}

	export interface InstanceHealthStatusMap {
	}

	export interface GetInstancesHealthStatusRequest {
		ServiceId: string;
		Instances?: Array<string>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface GetNamespaceResponse {

		/** A complex type that contains information about a specified namespace. */
		Namespace?: Namespace;
	}


	/** A complex type that contains information about a specified namespace. */
	export interface Namespace {
		Id?: string;
		Arn?: string;
		Name?: string;
		Type?: NamespaceType;
		Description?: string;
		ServiceCount?: number;

		/** A complex type that contains information that is specific to the namespace type. */
		Properties?: NamespaceProperties;
		CreateDate?: Date;
		CreatorRequestId?: string;
	}

	export enum NamespaceType { DNS_PUBLIC = 0, DNS_PRIVATE = 1, HTTP = 2 }


	/** A complex type that contains information that is specific to the namespace type. */
	export interface NamespaceProperties {

		/** A complex type that contains the ID for the Route 53 hosted zone that AWS Cloud Map creates when you create a namespace. */
		DnsProperties?: DnsProperties;

		/** A complex type that contains the name of an HTTP namespace. */
		HttpProperties?: HttpProperties;
	}


	/** A complex type that contains the ID for the Route 53 hosted zone that AWS Cloud Map creates when you create a namespace. */
	export interface DnsProperties {
		HostedZoneId?: string;
	}


	/** A complex type that contains the name of an HTTP namespace. */
	export interface HttpProperties {
		HttpName?: string;
	}

	export interface GetNamespaceRequest {
		Id: string;
	}

	export interface GetOperationResponse {

		/** A complex type that contains information about a specified operation. */
		Operation?: Operation;
	}


	/** A complex type that contains information about a specified operation. */
	export interface Operation {
		Id?: string;
		Type?: OperationType;
		Status?: OperationStatus;
		ErrorMessage?: string;
		ErrorCode?: string;
		CreateDate?: Date;
		UpdateDate?: Date;
		Targets?: OperationTargetsMap;
	}

	export enum OperationType { CREATE_NAMESPACE = 0, DELETE_NAMESPACE = 1, UPDATE_SERVICE = 2, REGISTER_INSTANCE = 3, DEREGISTER_INSTANCE = 4 }

	export enum OperationStatus { SUBMITTED = 0, PENDING = 1, SUCCESS = 2, FAIL = 3 }

	export interface OperationTargetsMap {
	}

	export interface GetOperationRequest {
		OperationId: string;
	}

	export interface OperationNotFound {
	}

	export interface GetServiceResponse {

		/** A complex type that contains information about the specified service. */
		Service?: Service;
	}

	export interface GetServiceRequest {
		Id: string;
	}

	export interface ListInstancesResponse {
		Instances?: Array<InstanceSummary>;
		NextToken?: string;
	}


	/** A complex type that contains information about the instances that you registered by using a specified service. */
	export interface InstanceSummary {
		Id?: string;
		Attributes?: Attributes;
	}

	export interface ListInstancesRequest {
		ServiceId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListNamespacesResponse {
		Namespaces?: Array<NamespaceSummary>;
		NextToken?: string;
	}


	/** A complex type that contains information about a namespace. */
	export interface NamespaceSummary {
		Id?: string;
		Arn?: string;
		Name?: string;
		Type?: NamespaceType;
		Description?: string;
		ServiceCount?: number;

		/** A complex type that contains information that is specific to the namespace type. */
		Properties?: NamespaceProperties;
		CreateDate?: Date;
	}

	export interface ListNamespacesRequest {
		NextToken?: string;
		MaxResults?: number;
		Filters?: Array<NamespaceFilter>;
	}


	/** A complex type that identifies the namespaces that you want to list. You can choose to list public or private namespaces. */
	export interface NamespaceFilter {
		Name: NamespaceFilterName;
		Values: Array<string>;
		Condition?: NamespaceFilterCondition;
	}

	export enum NamespaceFilterName { TYPE = 0 }

	export enum NamespaceFilterCondition { EQ = 0, IN = 1, BETWEEN = 2 }

	export interface ListOperationsResponse {
		Operations?: Array<OperationSummary>;
		NextToken?: string;
	}


	/** A complex type that contains information about an operation that matches the criteria that you specified in a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html">ListOperations</a> request. */
	export interface OperationSummary {
		Id?: string;
		Status?: OperationStatus;
	}

	export interface ListOperationsRequest {
		NextToken?: string;
		MaxResults?: number;
		Filters?: Array<OperationFilter>;
	}


	/** A complex type that lets you select the operations that you want to list. */
	export interface OperationFilter {
		Name: OperationFilterName;
		Values: Array<string>;
		Condition?: NamespaceFilterCondition;
	}

	export enum OperationFilterName { NAMESPACE_ID = 0, SERVICE_ID = 1, STATUS = 2, TYPE = 3, UPDATE_DATE = 4 }

	export interface ListServicesResponse {
		Services?: Array<ServiceSummary>;
		NextToken?: string;
	}


	/** A complex type that contains information about a specified service. */
	export interface ServiceSummary {
		Id?: string;
		Arn?: string;
		Name?: string;
		Description?: string;
		InstanceCount?: number;

		/** A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when you register an instance. */
		DnsConfig?: DnsConfig;

		/** <p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <p> <b>A and AAAA records</b> </p> <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy, Route 53 considers both the A and AAAA records to be unhealthy. </p> <p> <b>CNAME records</b> </p> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> <p> <b>Request interval</b> </p> <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p> <p> <b>Health checking regions</b> </p> <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> <p> <b>Alias records</b> </p> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource. such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> <p> <b>Charges for health checks</b> </p> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> */
		HealthCheckConfig?: HealthCheckConfig;

		/** <p>A complex type that contains information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:</p> <ul> <li> <p>You can't use a health check that is defined by <code>HealthCheckConfig</code> because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)</p> </li> <li> <p>You want to use a third-party health checker regardless of where your resources are.</p> </li> </ul> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>To change the status of a custom health check, submit an <code>UpdateInstanceCustomHealthStatus</code> request. AWS Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent <code>UpdateInstanceCustomHealthStatus</code> request.</p> <p>Here's how custom health checks work:</p> <ol> <li> <p>You create a service and specify a value for <code>FailureThreshold</code>. </p> <p>The failure threshold indicates the number of 30-second intervals you want AWS Cloud Map to wait between the time that your application sends an <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html">UpdateInstanceCustomHealthStatus</a> request and the time that AWS Cloud Map stops routing internet traffic to the corresponding resource.</p> </li> <li> <p>You register an instance.</p> </li> <li> <p>You configure a third-party health checker to monitor the resource that is associated with the new instance. </p> <note> <p>AWS Cloud Map doesn't check the health of the resource directly. </p> </note> </li> <li> <p>The third-party health-checker determines that the resource is unhealthy and notifies your application.</p> </li> <li> <p>Your application submits an <code>UpdateInstanceCustomHealthStatus</code> request.</p> </li> <li> <p>AWS Cloud Map waits for (<code>FailureThreshold</code> x 30) seconds.</p> </li> <li> <p>If another <code>UpdateInstanceCustomHealthStatus</code> request doesn't arrive during that time to change the status back to healthy, AWS Cloud Map stops routing traffic to the resource.</p> </li> </ol> */
		HealthCheckCustomConfig?: HealthCheckCustomConfig;
		CreateDate?: Date;
	}

	export interface ListServicesRequest {
		NextToken?: string;
		MaxResults?: number;
		Filters?: Array<ServiceFilter>;
	}


	/** A complex type that lets you specify the namespaces that you want to list services for. */
	export interface ServiceFilter {
		Name: ServiceFilterName;
		Values: Array<string>;
		Condition?: NamespaceFilterCondition;
	}

	export enum ServiceFilterName { NAMESPACE_ID = 0 }

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		ResourceARN: string;
	}

	export interface ResourceNotFoundException {
	}

	export interface RegisterInstanceResponse {
		OperationId?: string;
	}

	export interface RegisterInstanceRequest {
		ServiceId: string;
		InstanceId: string;
		CreatorRequestId?: string;
		Attributes: Attributes;
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

	export interface UpdateInstanceCustomHealthStatusRequest {
		ServiceId: string;
		InstanceId: string;
		Status: UpdateInstanceCustomHealthStatusRequestStatus;
	}

	export enum UpdateInstanceCustomHealthStatusRequestStatus { HEALTHY = 0, UNHEALTHY = 1 }

	export interface CustomHealthNotFound {
	}

	export interface UpdateServiceResponse {
		OperationId?: string;
	}

	export interface UpdateServiceRequest {
		Id: string;

		/**
		 * A complex type that contains changes to an existing service.
		 * Required
		 */
		Service: ServiceChange;
	}


	/** A complex type that contains changes to an existing service. */
	export interface ServiceChange {
		Description?: string;

		/** A complex type that contains information about changes to the Route 53 DNS records that AWS Cloud Map creates when you register an instance. */
		DnsConfig?: DnsConfigChange;

		/** <p> <i>Public DNS and HTTP namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> <p>Note the following about configuring health checks.</p> <p> <b>A and AAAA records</b> </p> <p>If <code>DnsConfig</code> includes configurations for both A and AAAA records, AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint that is specified by the IPv4 address is unhealthy, Route 53 considers both the A and AAAA records to be unhealthy. </p> <p> <b>CNAME records</b> </p> <p>You can't specify settings for <code>HealthCheckConfig</code> when the <code>DNSConfig</code> includes <code>CNAME</code> for the value of <code>Type</code>. If you do, the <code>CreateService</code> request will fail with an <code>InvalidInput</code> error.</p> <p> <b>Request interval</b> </p> <p>A Route 53 health checker in each health-checking region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another, so you'll sometimes see several requests per second followed by a few seconds with no health checks at all.</p> <p> <b>Health checking regions</b> </p> <p>Health checkers perform checks from all Route 53 health-checking regions. For a list of the current regions, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions">Regions</a>.</p> <p> <b>Alias records</b> </p> <p>When you register an instance, if you include the <code>AWS_ALIAS_DNS_NAME</code> attribute, AWS Cloud Map creates a Route 53 alias record. Note the following:</p> <ul> <li> <p>Route 53 automatically sets <code>EvaluateTargetHealth</code> to true for alias records. When <code>EvaluateTargetHealth</code> is true, the alias record inherits the health of the referenced AWS resource. such as an ELB load balancer. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth">EvaluateTargetHealth</a>.</p> </li> <li> <p>If you include <code>HealthCheckConfig</code> and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.</p> </li> </ul> <p> <b>Charges for health checks</b> </p> <p>Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> */
		HealthCheckConfig?: HealthCheckConfig;
	}


	/** A complex type that contains information about changes to the Route 53 DNS records that AWS Cloud Map creates when you register an instance. */
	export interface DnsConfigChange {
		DnsRecords: Array<DnsRecord>;
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
		GetInstancesHealthStatus(MaxResults: string, NextToken: string, requestBody: GetInstancesHealthStatusRequest): Observable<GetInstancesHealthStatusResponse> {
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
		ListInstances(MaxResults: string, NextToken: string, requestBody: ListInstancesRequest): Observable<ListInstancesResponse> {
			return this.http.post<ListInstancesResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists summary information about the namespaces that were created by the current AWS account.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNamespacesResponse} Success
		 */
		ListNamespaces(MaxResults: string, NextToken: string, requestBody: ListNamespacesRequest): Observable<ListNamespacesResponse> {
			return this.http.post<ListNamespacesResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists operations that match the criteria that you specify.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.ListOperations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOperationsResponse} Success
		 */
		ListOperations(MaxResults: string, NextToken: string, requestBody: ListOperationsRequest): Observable<ListOperationsResponse> {
			return this.http.post<ListOperationsResponse>(this.baseUri + '#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists summary information for all the services that are associated with one or more specified namespaces.
		 * Post #X-Amz-Target=Route53AutoNaming_v20170314.ListServices
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListServicesResponse} Success
		 */
		ListServices(MaxResults: string, NextToken: string, requestBody: ListServicesRequest): Observable<ListServicesResponse> {
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

