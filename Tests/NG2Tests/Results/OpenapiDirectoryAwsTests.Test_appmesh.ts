import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateMeshOutput {

		/**
		 * An object that represents a service mesh returned by a describe operation.
		 * Required
		 */
		mesh: MeshData;
	}


	/** An object that represents a service mesh returned by a describe operation. */
	export interface MeshData {
		meshName: string;

		/**
		 * An object that represents metadata for a resource.
		 * Required
		 */
		metadata: ResourceMetadata;

		/**
		 * An object that represents the specification of a service mesh.
		 * Required
		 */
		spec: MeshSpec;

		/**
		 * An object that represents the status of a service mesh.
		 * Required
		 */
		status: MeshStatus;
	}


	/** An object that represents metadata for a resource. */
	export interface ResourceMetadata {
		arn: string;
		createdAt: Date;
		lastUpdatedAt: Date;
		meshOwner: string;
		resourceOwner: string;
		uid: string;
		version: number;
	}


	/** An object that represents the specification of a service mesh. */
	export interface MeshSpec {

		/** An object that represents the egress filter rules for a service mesh. */
		egressFilter?: EgressFilter | null;
	}


	/** An object that represents the egress filter rules for a service mesh. */
	export interface EgressFilter {
		type: EgressFilterType;
	}

	export enum EgressFilterType { ALLOW_ALL = 0, DROP_ALL = 1 }


	/** An object that represents the status of a service mesh. */
	export interface MeshStatus {
		status?: MeshStatusStatus | null;
	}

	export enum MeshStatusStatus { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }


	/**
	 * Optional metadata that you apply to a resource to assist with categorization and
	 *          organization. Each tag consists of a key and an optional value, both of which you define.
	 *          Tag keys can have a maximum character length of 128 characters, and tag values can have
	 *             a maximum length of 256 characters.
	 */
	export interface TagRef {
		key: string;
		value?: string | null;
	}

	export interface BadRequestException {
	}

	export interface ConflictException {
	}

	export interface ForbiddenException {
	}

	export interface InternalServerErrorException {
	}

	export interface LimitExceededException {
	}

	export interface NotFoundException {
	}

	export interface ServiceUnavailableException {
	}

	export interface TooManyRequestsException {
	}

	export interface CreateRouteOutput {

		/**
		 * An object that represents a route returned by a describe operation.
		 * Required
		 */
		route: RouteData;
	}


	/** An object that represents a route returned by a describe operation. */
	export interface RouteData {
		meshName: string;

		/**
		 * An object that represents metadata for a resource.
		 * Required
		 */
		metadata: ResourceMetadata;
		routeName: string;

		/**
		 * An object that represents a route specification. Specify one route type.
		 * Required
		 */
		spec: RouteSpec;

		/**
		 * An object that represents the current status of a route.
		 * Required
		 */
		status: RouteStatus;
		virtualRouterName: string;
	}


	/** An object that represents a route specification. Specify one route type. */
	export interface RouteSpec {

		/** An object that represents a gRPC route type. */
		grpcRoute?: GrpcRoute | null;

		/** An object that represents an HTTP or HTTP/2 route type. */
		http2Route?: HttpRoute | null;

		/** An object that represents an HTTP or HTTP/2 route type. */
		httpRoute?: HttpRoute | null;
		priority?: number | null;

		/** An object that represents a TCP route type. */
		tcpRoute?: TcpRoute | null;
	}


	/** An object that represents a gRPC route type. */
	export interface GrpcRoute {

		/**
		 * An object that represents the action to take if a match is determined.
		 * Required
		 */
		action: GrpcRouteAction;

		/**
		 * An object that represents the criteria for determining a request match.
		 * Required
		 */
		match: GrpcRouteMatch;

		/** An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. */
		retryPolicy?: GrpcRetryPolicy | null;
	}


	/** An object that represents the action to take if a match is determined. */
	export interface GrpcRouteAction {
		weightedTargets: Array<WeightedTarget>;
	}


	/**
	 * An object that represents a target and its relative weight. Traffic is distributed
	 *          across targets according to their relative weight. For example, a weighted target with a
	 *          relative weight of 50 receives five times as much traffic as one with a relative weight of
	 *          10. The total weight for all targets combined must be less than or equal to 100.
	 */
	export interface WeightedTarget {
		virtualNode: string;
		weight: number;
	}


	/** An object that represents the criteria for determining a request match. */
	export interface GrpcRouteMatch {
		metadata?: Array<GrpcRouteMetadata> | null;
		methodName?: string | null;
		serviceName?: string | null;
	}


	/** An object that represents the match metadata for the route. */
	export interface GrpcRouteMetadata {
		invert?: boolean | null;

		/** An object that represents the match method. Specify one of the match values. */
		match?: GrpcRouteMetadataMatchMethod | null;
		name: string;
	}


	/** An object that represents the match method. Specify one of the match values. */
	export interface GrpcRouteMetadataMatchMethod {
		exact?: string | null;
		prefix?: string | null;

		/** An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched. */
		range?: MatchRange | null;
		regex?: string | null;
		suffix?: string | null;
	}


	/** An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched. */
	export interface MatchRange {
		end: number;
		start: number;
	}


	/** An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. */
	export interface GrpcRetryPolicy {
		grpcRetryEvents?: Array<GrpcRetryPolicyEvent> | null;
		httpRetryEvents?: Array<string> | null;
		maxRetries: number;

		/**
		 * An object that represents a duration of time.
		 * Required
		 */
		perRetryTimeout: Duration;
		tcpRetryEvents?: Array<TcpRetryPolicyEvent> | null;
	}

	export enum GrpcRetryPolicyEvent { cancelled = 0, deadline_exceeded = 1, _internal = 2, resource_exhausted = 3, unavailable = 4 }


	/** An object that represents a duration of time. */
	export interface Duration {
		unit?: DurationUnit | null;
		value?: number | null;
	}

	export enum DurationUnit { ms = 0, s = 1 }

	export enum TcpRetryPolicyEvent { connection_error = 0 }


	/** An object that represents an HTTP or HTTP/2 route type. */
	export interface HttpRoute {

		/**
		 * An object that represents the action to take if a match is determined.
		 * Required
		 */
		action: HttpRouteAction;

		/**
		 * An object that represents the requirements for a route to match HTTP requests for a
		 * virtual router.
		 * Required
		 */
		match: HttpRouteMatch;

		/** An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. */
		retryPolicy?: HttpRetryPolicy | null;
	}


	/** An object that represents the action to take if a match is determined. */
	export interface HttpRouteAction {
		weightedTargets: Array<WeightedTarget>;
	}


	/**
	 * An object that represents the requirements for a route to match HTTP requests for a
	 *          virtual router.
	 */
	export interface HttpRouteMatch {
		headers?: Array<HttpRouteHeader> | null;
		method?: HttpRouteMatchMethod | null;
		prefix: string;
		scheme?: HttpRouteMatchScheme | null;
	}


	/** An object that represents the HTTP header in the request. */
	export interface HttpRouteHeader {
		invert?: boolean | null;

		/**
		 * An object that represents the method and value to match with the header value sent in a
		 * request. Specify one match method.
		 */
		match?: HeaderMatchMethod | null;
		name: string;
	}


	/**
	 * An object that represents the method and value to match with the header value sent in a
	 *          request. Specify one match method.
	 */
	export interface HeaderMatchMethod {
		exact?: string | null;
		prefix?: string | null;

		/** An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched. */
		range?: MatchRange | null;
		regex?: string | null;
		suffix?: string | null;
	}

	export enum HttpRouteMatchMethod { CONNECT = 0, DELETE = 1, GET = 2, HEAD = 3, OPTIONS = 4, PATCH = 5, POST = 6, PUT = 7, TRACE = 8 }

	export enum HttpRouteMatchScheme { http = 0, https = 1 }


	/** An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. */
	export interface HttpRetryPolicy {
		httpRetryEvents?: Array<string> | null;
		maxRetries: number;

		/**
		 * An object that represents a duration of time.
		 * Required
		 */
		perRetryTimeout: Duration;
		tcpRetryEvents?: Array<TcpRetryPolicyEvent> | null;
	}


	/** An object that represents a TCP route type. */
	export interface TcpRoute {

		/**
		 * An object that represents the action to take if a match is determined.
		 * Required
		 */
		action: TcpRouteAction;
	}


	/** An object that represents the action to take if a match is determined. */
	export interface TcpRouteAction {
		weightedTargets: Array<WeightedTarget>;
	}


	/** An object that represents the current status of a route. */
	export interface RouteStatus {
		status: MeshStatusStatus;
	}

	export interface CreateVirtualNodeOutput {

		/**
		 * An object that represents a virtual node returned by a describe operation.
		 * Required
		 */
		virtualNode: VirtualNodeData;
	}


	/** An object that represents a virtual node returned by a describe operation. */
	export interface VirtualNodeData {
		meshName: string;

		/**
		 * An object that represents metadata for a resource.
		 * Required
		 */
		metadata: ResourceMetadata;

		/**
		 * An object that represents the specification of a virtual node.
		 * Required
		 */
		spec: VirtualNodeSpec;

		/**
		 * An object that represents the current status of the virtual node.
		 * Required
		 */
		status: VirtualNodeStatus;
		virtualNodeName: string;
	}


	/** An object that represents the specification of a virtual node. */
	export interface VirtualNodeSpec {

		/** An object that represents the default properties for a backend. */
		backendDefaults?: BackendDefaults | null;
		backends?: Array<Backend> | null;
		listeners?: Array<Listener> | null;

		/** An object that represents the logging information for a virtual node. */
		logging?: Logging | null;

		/** An object that represents the service discovery information for a virtual node. */
		serviceDiscovery?: ServiceDiscovery | null;
	}


	/** An object that represents the default properties for a backend. */
	export interface BackendDefaults {

		/** An object that represents a client policy. */
		clientPolicy?: ClientPolicy | null;
	}


	/** An object that represents a client policy. */
	export interface ClientPolicy {

		/** An object that represents a Transport Layer Security (TLS) client policy. */
		tls?: ClientPolicyTls | null;
	}


	/** An object that represents a Transport Layer Security (TLS) client policy. */
	export interface ClientPolicyTls {
		enforce?: boolean | null;
		ports?: Array<number> | null;

		/**
		 * An object that represents a Transport Layer Security (TLS) validation context.
		 * Required
		 */
		validation: TlsValidationContext;
	}


	/** An object that represents a Transport Layer Security (TLS) validation context. */
	export interface TlsValidationContext {

		/**
		 * An object that represents a Transport Layer Security (TLS) validation context trust.
		 * Required
		 */
		trust: TlsValidationContextTrust;
	}


	/** An object that represents a Transport Layer Security (TLS) validation context trust. */
	export interface TlsValidationContextTrust {

		/**
		 * An object that represents a TLS validation context trust for an AWS Certicate Manager (ACM)
		 * certificate.
		 */
		acm?: TlsValidationContextAcmTrust | null;

		/** An object that represents a Transport Layer Security (TLS) validation context trust for a local file. */
		file?: TlsValidationContextFileTrust | null;
	}


	/**
	 * An object that represents a TLS validation context trust for an AWS Certicate Manager (ACM)
	 *          certificate.
	 */
	export interface TlsValidationContextAcmTrust {
		certificateAuthorityArns: Array<string>;
	}


	/** An object that represents a Transport Layer Security (TLS) validation context trust for a local file. */
	export interface TlsValidationContextFileTrust {
		certificateChain: string;
	}


	/**
	 * An object that represents the backends that a virtual node is expected to send outbound
	 *          traffic to. 
	 */
	export interface Backend {

		/** An object that represents a virtual service backend for a virtual node. */
		virtualService?: VirtualServiceBackend | null;
	}


	/** An object that represents a virtual service backend for a virtual node. */
	export interface VirtualServiceBackend {

		/** An object that represents a client policy. */
		clientPolicy?: ClientPolicy | null;
		virtualServiceName: string;
	}


	/** An object that represents a listener for a virtual node. */
	export interface Listener {

		/** An object that represents the health check policy for a virtual node's listener. */
		healthCheck?: HealthCheckPolicy | null;

		/**
		 * An object that represents a port mapping.
		 * Required
		 */
		portMapping: PortMapping;

		/** An object that represents the Transport Layer Security (TLS) properties for a listener. */
		tls?: ListenerTls | null;
	}


	/** An object that represents the health check policy for a virtual node's listener. */
	export interface HealthCheckPolicy {
		healthyThreshold: number;
		intervalMillis: number;
		path?: string | null;
		port?: number | null;
		protocol: HealthCheckPolicyProtocol;
		timeoutMillis: number;
		unhealthyThreshold: number;
	}

	export enum HealthCheckPolicyProtocol { grpc = 0, http = 1, http2 = 2, tcp = 3 }


	/** An object that represents a port mapping. */
	export interface PortMapping {
		port: number;
		protocol: HealthCheckPolicyProtocol;
	}


	/** An object that represents the Transport Layer Security (TLS) properties for a listener. */
	export interface ListenerTls {

		/**
		 * An object that represents a listener's Transport Layer Security (TLS) certificate.
		 * Required
		 */
		certificate: ListenerTlsCertificate;
		mode: ListenerTlsMode;
	}


	/** An object that represents a listener's Transport Layer Security (TLS) certificate. */
	export interface ListenerTlsCertificate {

		/** An object that represents an AWS Certicate Manager (ACM) certificate. */
		acm?: ListenerTlsAcmCertificate | null;

		/**
		 * An object that represents a local file certificate.
		 * The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.
		 */
		file?: ListenerTlsFileCertificate | null;
	}


	/** An object that represents an AWS Certicate Manager (ACM) certificate. */
	export interface ListenerTlsAcmCertificate {
		certificateArn: string;
	}


	/**
	 * An object that represents a local file certificate.
	 *          The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.
	 */
	export interface ListenerTlsFileCertificate {
		certificateChain: string;
		privateKey: string;
	}

	export enum ListenerTlsMode { DISABLED = 0, PERMISSIVE = 1, STRICT = 2 }


	/** An object that represents the logging information for a virtual node. */
	export interface Logging {

		/** An object that represents the access logging information for a virtual node. */
		accessLog?: AccessLog | null;
	}


	/** An object that represents the access logging information for a virtual node. */
	export interface AccessLog {

		/** An object that represents an access log file. */
		file?: FileAccessLog | null;
	}


	/** An object that represents an access log file. */
	export interface FileAccessLog {
		path: string;
	}


	/** An object that represents the service discovery information for a virtual node. */
	export interface ServiceDiscovery {

		/**
		 * An object that represents the AWS Cloud Map service discovery information for your virtual
		 * node.
		 */
		awsCloudMap?: AwsCloudMapServiceDiscovery | null;

		/**
		 * An object that represents the DNS service discovery information for your virtual
		 * node.
		 */
		dns?: DnsServiceDiscovery | null;
	}


	/**
	 * An object that represents the AWS Cloud Map service discovery information for your virtual
	 *          node.
	 */
	export interface AwsCloudMapServiceDiscovery {
		attributes?: Array<AwsCloudMapInstanceAttribute> | null;
		namespaceName: string;
		serviceName: string;
	}


	/**
	 * An object that represents the AWS Cloud Map attribute information for your virtual
	 *          node.
	 */
	export interface AwsCloudMapInstanceAttribute {
		key: string;
		value: string;
	}


	/**
	 * An object that represents the DNS service discovery information for your virtual
	 *          node.
	 */
	export interface DnsServiceDiscovery {
		hostname: string;
	}


	/** An object that represents the current status of the virtual node. */
	export interface VirtualNodeStatus {
		status: MeshStatusStatus;
	}

	export interface CreateVirtualRouterOutput {

		/**
		 * An object that represents a virtual router returned by a describe operation.
		 * Required
		 */
		virtualRouter: VirtualRouterData;
	}


	/** An object that represents a virtual router returned by a describe operation. */
	export interface VirtualRouterData {
		meshName: string;

		/**
		 * An object that represents metadata for a resource.
		 * Required
		 */
		metadata: ResourceMetadata;

		/**
		 * An object that represents the specification of a virtual router.
		 * Required
		 */
		spec: VirtualRouterSpec;

		/**
		 * An object that represents the status of a virtual router.
		 * Required
		 */
		status: VirtualRouterStatus;
		virtualRouterName: string;
	}


	/** An object that represents the specification of a virtual router. */
	export interface VirtualRouterSpec {
		listeners?: Array<VirtualRouterListener> | null;
	}


	/** An object that represents a virtual router listener. */
	export interface VirtualRouterListener {

		/**
		 * An object that represents a port mapping.
		 * Required
		 */
		portMapping: PortMapping;
	}


	/** An object that represents the status of a virtual router.  */
	export interface VirtualRouterStatus {
		status: MeshStatusStatus;
	}

	export interface CreateVirtualServiceOutput {

		/**
		 * An object that represents a virtual service returned by a describe operation.
		 * Required
		 */
		virtualService: VirtualServiceData;
	}


	/** An object that represents a virtual service returned by a describe operation. */
	export interface VirtualServiceData {
		meshName: string;

		/**
		 * An object that represents metadata for a resource.
		 * Required
		 */
		metadata: ResourceMetadata;

		/**
		 * An object that represents the specification of a virtual service.
		 * Required
		 */
		spec: VirtualServiceSpec;

		/**
		 * An object that represents the status of a virtual service.
		 * Required
		 */
		status: VirtualServiceStatus;
		virtualServiceName: string;
	}


	/** An object that represents the specification of a virtual service. */
	export interface VirtualServiceSpec {

		/** An object that represents the provider for a virtual service. */
		provider?: VirtualServiceProvider | null;
	}


	/** An object that represents the provider for a virtual service. */
	export interface VirtualServiceProvider {

		/** An object that represents a virtual node service provider. */
		virtualNode?: VirtualNodeServiceProvider | null;

		/** An object that represents a virtual node service provider. */
		virtualRouter?: VirtualRouterServiceProvider | null;
	}


	/** An object that represents a virtual node service provider. */
	export interface VirtualNodeServiceProvider {
		virtualNodeName: string;
	}


	/** An object that represents a virtual node service provider. */
	export interface VirtualRouterServiceProvider {
		virtualRouterName: string;
	}


	/** An object that represents the status of a virtual service. */
	export interface VirtualServiceStatus {
		status: MeshStatusStatus;
	}

	export interface DeleteMeshOutput {

		/**
		 * An object that represents a service mesh returned by a describe operation.
		 * Required
		 */
		mesh: MeshData;
	}

	export interface ResourceInUseException {
	}

	export interface DeleteRouteOutput {

		/**
		 * An object that represents a route returned by a describe operation.
		 * Required
		 */
		route: RouteData;
	}

	export interface DeleteVirtualNodeOutput {

		/**
		 * An object that represents a virtual node returned by a describe operation.
		 * Required
		 */
		virtualNode: VirtualNodeData;
	}

	export interface DeleteVirtualRouterOutput {

		/**
		 * An object that represents a virtual router returned by a describe operation.
		 * Required
		 */
		virtualRouter: VirtualRouterData;
	}

	export interface DeleteVirtualServiceOutput {

		/**
		 * An object that represents a virtual service returned by a describe operation.
		 * Required
		 */
		virtualService: VirtualServiceData;
	}

	export interface DescribeMeshOutput {

		/**
		 * An object that represents a service mesh returned by a describe operation.
		 * Required
		 */
		mesh: MeshData;
	}

	export interface DescribeRouteOutput {

		/**
		 * An object that represents a route returned by a describe operation.
		 * Required
		 */
		route: RouteData;
	}

	export interface DescribeVirtualNodeOutput {

		/**
		 * An object that represents a virtual node returned by a describe operation.
		 * Required
		 */
		virtualNode: VirtualNodeData;
	}

	export interface DescribeVirtualRouterOutput {

		/**
		 * An object that represents a virtual router returned by a describe operation.
		 * Required
		 */
		virtualRouter: VirtualRouterData;
	}

	export interface DescribeVirtualServiceOutput {

		/**
		 * An object that represents a virtual service returned by a describe operation.
		 * Required
		 */
		virtualService: VirtualServiceData;
	}

	export interface ListMeshesOutput {
		meshes: Array<MeshRef>;
		nextToken?: string | null;
	}


	/** An object that represents a service mesh returned by a list operation. */
	export interface MeshRef {
		arn: string;
		createdAt: Date;
		lastUpdatedAt: Date;
		meshName: string;
		meshOwner: string;
		resourceOwner: string;
		version: number;
	}

	export interface ListRoutesOutput {
		nextToken?: string | null;
		routes: Array<RouteRef>;
	}


	/** An object that represents a route returned by a list operation. */
	export interface RouteRef {
		arn: string;
		createdAt: Date;
		lastUpdatedAt: Date;
		meshName: string;
		meshOwner: string;
		resourceOwner: string;
		routeName: string;
		version: number;
		virtualRouterName: string;
	}

	export interface ListTagsForResourceOutput {
		nextToken?: string | null;
		tags: Array<TagRef>;
	}

	export interface ListVirtualNodesOutput {
		nextToken?: string | null;
		virtualNodes: Array<VirtualNodeRef>;
	}


	/** An object that represents a virtual node returned by a list operation. */
	export interface VirtualNodeRef {
		arn: string;
		createdAt: Date;
		lastUpdatedAt: Date;
		meshName: string;
		meshOwner: string;
		resourceOwner: string;
		version: number;
		virtualNodeName: string;
	}

	export interface ListVirtualRoutersOutput {
		nextToken?: string | null;
		virtualRouters: Array<VirtualRouterRef>;
	}


	/** An object that represents a virtual router returned by a list operation. */
	export interface VirtualRouterRef {
		arn: string;
		createdAt: Date;
		lastUpdatedAt: Date;
		meshName: string;
		meshOwner: string;
		resourceOwner: string;
		version: number;
		virtualRouterName: string;
	}

	export interface ListVirtualServicesOutput {
		nextToken?: string | null;
		virtualServices: Array<VirtualServiceRef>;
	}


	/** An object that represents a virtual service returned by a list operation. */
	export interface VirtualServiceRef {
		arn: string;
		createdAt: Date;
		lastUpdatedAt: Date;
		meshName: string;
		meshOwner: string;
		resourceOwner: string;
		version: number;
		virtualServiceName: string;
	}

	export interface TagResourceOutput {
	}

	export interface TooManyTagsException {
	}

	export interface UntagResourceOutput {
	}

	export interface UpdateMeshOutput {

		/**
		 * An object that represents a service mesh returned by a describe operation.
		 * Required
		 */
		mesh: MeshData;
	}

	export interface UpdateRouteOutput {

		/**
		 * An object that represents a route returned by a describe operation.
		 * Required
		 */
		route: RouteData;
	}

	export interface UpdateVirtualNodeOutput {

		/**
		 * An object that represents a virtual node returned by a describe operation.
		 * Required
		 */
		virtualNode: VirtualNodeData;
	}

	export interface UpdateVirtualRouterOutput {

		/**
		 * An object that represents a virtual router returned by a describe operation.
		 * Required
		 */
		virtualRouter: VirtualRouterData;
	}

	export interface UpdateVirtualServiceOutput {

		/**
		 * An object that represents a virtual service returned by a describe operation.
		 * Required
		 */
		virtualService: VirtualServiceData;
	}

	export enum VirtualRouterStatusCode { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }

	export enum PortProtocol { grpc = 0, http = 1, http2 = 2, tcp = 3 }

	export interface DeleteRouteInput {
	}

	export interface ListMeshesInput {
	}

	export interface UpdateMeshInput {
		clientToken?: string | null;

		/** An object that represents the specification of a service mesh. */
		spec?: MeshSpec | null;
	}

	export interface CreateVirtualRouterInput {
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual router.
		 * Required
		 */
		spec: VirtualRouterSpec;
		tags?: Array<TagRef> | null;
		virtualRouterName: string;
	}

	export enum VirtualServiceStatusCode { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }

	export enum HttpMethod_ { CONNECT = 0, DELETE = 1, GET = 2, HEAD = 3, OPTIONS = 4, PATCH = 5, POST = 6, PUT = 7, TRACE = 8 }

	export interface DeleteVirtualNodeInput {
	}

	export enum RouteStatusCode { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }

	export interface TagResourceInput {
		tags: Array<TagRef>;
	}

	export enum MeshStatusCode { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }

	export interface CreateVirtualNodeInput {
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual node.
		 * Required
		 */
		spec: VirtualNodeSpec;
		tags?: Array<TagRef> | null;
		virtualNodeName: string;
	}

	export interface DeleteVirtualServiceInput {
	}

	export interface UpdateVirtualNodeInput {
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual node.
		 * Required
		 */
		spec: VirtualNodeSpec;
	}

	export interface DeleteMeshInput {
	}

	export interface CreateVirtualServiceInput {
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual service.
		 * Required
		 */
		spec: VirtualServiceSpec;
		tags?: Array<TagRef> | null;
		virtualServiceName: string;
	}

	export interface UpdateVirtualRouterInput {
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual router.
		 * Required
		 */
		spec: VirtualRouterSpec;
	}

	export interface ListTagsForResourceInput {
	}

	export interface DeleteVirtualRouterInput {
	}

	export interface DescribeRouteInput {
	}

	export enum VirtualNodeStatusCode { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }

	export interface UpdateVirtualServiceInput {
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual service.
		 * Required
		 */
		spec: VirtualServiceSpec;
	}

	export interface ListRoutesInput {
	}

	export interface CreateMeshInput {
		clientToken?: string | null;
		meshName: string;

		/** An object that represents the specification of a service mesh. */
		spec?: MeshSpec | null;
		tags?: Array<TagRef> | null;
	}

	export interface DescribeVirtualServiceInput {
	}

	export interface ListVirtualRoutersInput {
	}

	export interface ListVirtualServicesInput {
	}

	export interface ListVirtualNodesInput {
	}

	export enum HttpScheme { http = 0, https = 1 }

	export interface DescribeVirtualNodeInput {
	}

	export interface DescribeVirtualRouterInput {
	}

	export interface CreateRouteInput {
		clientToken?: string | null;
		routeName: string;

		/**
		 * An object that represents a route specification. Specify one route type.
		 * Required
		 */
		spec: RouteSpec;
		tags?: Array<TagRef> | null;
	}

	export interface UpdateRouteInput {
		clientToken?: string | null;

		/**
		 * An object that represents a route specification. Specify one route type.
		 * Required
		 */
		spec: RouteSpec;
	}

	export interface DescribeMeshInput {
	}

	export interface UntagResourceInput {
		tagKeys: Array<string>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a service mesh.</p>
		 * <p> A service mesh is a logical boundary for network traffic between services that are
		 * represented by resources within the mesh. After you create your service mesh, you can
		 * create virtual services, virtual nodes, virtual routers, and routes to distribute traffic
		 * between the applications in your mesh.</p>
		 * <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
		 * Put v20190125/meshes
		 * @return {CreateMeshOutput} Success
		 */
		CreateMesh(requestBody: CreateMeshPutBody): Observable<CreateMeshOutput> {
			return this.http.put<CreateMeshOutput>(this.baseUri + 'v20190125/meshes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing service meshes.
		 * Get v20190125/meshes
		 * @param {number} limit The maximum number of results returned by <code>ListMeshes</code> in paginated output.
		 *          When you use this parameter, <code>ListMeshes</code> returns only <code>limit</code>
		 *          results in a single page along with a <code>nextToken</code> response element. You can see
		 *          the remaining results of the initial request by sending another <code>ListMeshes</code>
		 *          request with the returned <code>nextToken</code> value. This value can be between
		 *          1 and 100. If you don't use this parameter,
		 *             <code>ListMeshes</code> returns up to 100 results and a
		 *             <code>nextToken</code> value if applicable.
		 * @param {string} nextToken <p>The <code>nextToken</code> value returned from a previous paginated
		 *             <code>ListMeshes</code> request where <code>limit</code> was used and the results
		 *          exceeded the value of that parameter. Pagination continues from the end of the previous
		 *          results that returned the <code>nextToken</code> value.</p> 
		 *          <note>
		 *             <p>This token should be treated as an opaque identifier that is used only to
		 *                 retrieve the next items in a list and not for other programmatic purposes.</p>
		 *         </note>
		 * @return {ListMeshesOutput} Success
		 */
		ListMeshes(limit: number, nextToken: string): Observable<ListMeshesOutput> {
			return this.http.get<ListMeshesOutput>(this.baseUri + 'v20190125/meshes?limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a route that is associated with a virtual router.</p>
		 * <p> You can route several different protocols and define a retry policy for a route.
		 * Traffic can be routed to one or more virtual nodes.</p>
		 * <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>
		 * Put v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes
		 * @param {string} meshName The name of the service mesh to create the route in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
		 *                the account that you specify must share the mesh with your account before you can create 
		 *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualRouterName The name of the virtual router in which to create the route. If the virtual router is in
		 *          a shared mesh, then you must be the owner of the virtual router resource.
		 * @return {CreateRouteOutput} Success
		 */
		CreateRoute(meshName: string, meshOwner: string, virtualRouterName: string, requestBody: CreateRoutePutBody): Observable<CreateRouteOutput> {
			return this.http.put<CreateRouteOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing routes in a service mesh.
		 * Get v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes
		 * @param {number} limit The maximum number of results returned by <code>ListRoutes</code> in paginated output.
		 *          When you use this parameter, <code>ListRoutes</code> returns only <code>limit</code>
		 *          results in a single page along with a <code>nextToken</code> response element. You can see
		 *          the remaining results of the initial request by sending another <code>ListRoutes</code>
		 *          request with the returned <code>nextToken</code> value. This value can be between
		 *          1 and 100. If you don't use this parameter,
		 *             <code>ListRoutes</code> returns up to 100 results and a
		 *             <code>nextToken</code> value if applicable.
		 * @param {string} meshName The name of the service mesh to list routes in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated
		 *             <code>ListRoutes</code> request where <code>limit</code> was used and the results
		 *          exceeded the value of that parameter. Pagination continues from the end of the previous
		 *          results that returned the <code>nextToken</code> value.
		 * @param {string} virtualRouterName The name of the virtual router to list routes in.
		 * @return {ListRoutesOutput} Success
		 */
		ListRoutes(limit: number, meshName: string, meshOwner: string, nextToken: string, virtualRouterName: string): Observable<ListRoutesOutput> {
			return this.http.get<ListRoutesOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes?limit=' + limit + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a virtual node within a service mesh.</p>
		 * <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS
		 * service or a Kubernetes deployment. When you create a virtual node, you can specify the
		 * service discovery information for your task group, and whether the proxy running in a task
		 * group will communicate with other proxies using Transport Layer Security (TLS).</p>
		 * <p>You define a <code>listener</code> for any inbound traffic that your virtual node
		 * expects. Any virtual service that your virtual node expects to communicate to is specified
		 * as a <code>backend</code>.</p>
		 * <p>The response metadata for your new virtual node contains the <code>arn</code> that is
		 * associated with the virtual node. Set this value (either the full ARN or the truncated
		 * resource name: for example, <code>mesh/default/virtualNode/simpleapp</code>) as the
		 * <code>APPMESH_VIRTUAL_NODE_NAME</code> environment variable for your task group's Envoy
		 * proxy container in your task definition or pod spec. This is then mapped to the
		 * <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p>
		 * <note>
		 * <p>If you require your Envoy stats or tracing to use a different name, you can override
		 * the <code>node.cluster</code> value that is set by
		 * <code>APPMESH_VIRTUAL_NODE_NAME</code> with the
		 * <code>APPMESH_VIRTUAL_NODE_CLUSTER</code> environment variable.</p>
		 * </note>
		 * <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>.</p>
		 * Put v20190125/meshes/{meshName}/virtualNodes
		 * @param {string} meshName The name of the service mesh to create the virtual node in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
		 *                the account that you specify must share the mesh with your account before you can create 
		 *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @return {CreateVirtualNodeOutput} Success
		 */
		CreateVirtualNode(meshName: string, meshOwner: string, requestBody: CreateVirtualNodePutBody): Observable<CreateVirtualNodeOutput> {
			return this.http.put<CreateVirtualNodeOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing virtual nodes.
		 * Get v20190125/meshes/{meshName}/virtualNodes
		 * @param {number} limit The maximum number of results returned by <code>ListVirtualNodes</code> in paginated
		 *          output. When you use this parameter, <code>ListVirtualNodes</code> returns only
		 *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
		 *          element. You can see the remaining results of the initial request by sending another
		 *             <code>ListVirtualNodes</code> request with the returned <code>nextToken</code> value.
		 *          This value can be between 1 and 100. If you don't use this
		 *          parameter, <code>ListVirtualNodes</code> returns up to 100 results and a
		 *             <code>nextToken</code> value if applicable.
		 * @param {string} meshName The name of the service mesh to list virtual nodes in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated
		 *             <code>ListVirtualNodes</code> request where <code>limit</code> was used and the results
		 *          exceeded the value of that parameter. Pagination continues from the end of the previous
		 *          results that returned the <code>nextToken</code> value.
		 * @return {ListVirtualNodesOutput} Success
		 */
		ListVirtualNodes(limit: number, meshName: string, meshOwner: string, nextToken: string): Observable<ListVirtualNodesOutput> {
			return this.http.get<ListVirtualNodesOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes?limit=' + limit + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a virtual router within a service mesh.</p>
		 * <p>Specify a <code>listener</code> for any inbound traffic that your virtual router
		 * receives. Create a virtual router for each protocol and port that you need to route.
		 * Virtual routers handle traffic for one or more virtual services within your mesh. After you
		 * create your virtual router, create and associate routes for your virtual router that direct
		 * incoming requests to different virtual nodes.</p>
		 * <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>
		 * Put v20190125/meshes/{meshName}/virtualRouters
		 * @param {string} meshName The name of the service mesh to create the virtual router in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
		 *                the account that you specify must share the mesh with your account before you can create 
		 *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @return {CreateVirtualRouterOutput} Success
		 */
		CreateVirtualRouter(meshName: string, meshOwner: string, requestBody: CreateVirtualRouterPutBody): Observable<CreateVirtualRouterOutput> {
			return this.http.put<CreateVirtualRouterOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing virtual routers in a service mesh.
		 * Get v20190125/meshes/{meshName}/virtualRouters
		 * @param {number} limit The maximum number of results returned by <code>ListVirtualRouters</code> in paginated
		 *          output. When you use this parameter, <code>ListVirtualRouters</code> returns only
		 *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
		 *          element. You can see the remaining results of the initial request by sending another
		 *             <code>ListVirtualRouters</code> request with the returned <code>nextToken</code> value.
		 *          This value can be between 1 and 100. If you don't use this
		 *          parameter, <code>ListVirtualRouters</code> returns up to 100 results and
		 *          a <code>nextToken</code> value if applicable.
		 * @param {string} meshName The name of the service mesh to list virtual routers in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated
		 *             <code>ListVirtualRouters</code> request where <code>limit</code> was used and the
		 *          results exceeded the value of that parameter. Pagination continues from the end of the
		 *          previous results that returned the <code>nextToken</code> value.
		 * @return {ListVirtualRoutersOutput} Success
		 */
		ListVirtualRouters(limit: number, meshName: string, meshOwner: string, nextToken: string): Observable<ListVirtualRoutersOutput> {
			return this.http.get<ListVirtualRoutersOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters?limit=' + limit + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a virtual service within a service mesh.</p>
		 * <p>A virtual service is an abstraction of a real service that is provided by a virtual node
		 * directly or indirectly by means of a virtual router. Dependent services call your virtual
		 * service by its <code>virtualServiceName</code>, and those requests are routed to the
		 * virtual node or virtual router that is specified as the provider for the virtual
		 * service.</p>
		 * <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
		 * Put v20190125/meshes/{meshName}/virtualServices
		 * @param {string} meshName The name of the service mesh to create the virtual service in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then
		 *                the account that you specify must share the mesh with your account before you can create 
		 *              the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @return {CreateVirtualServiceOutput} Success
		 */
		CreateVirtualService(meshName: string, meshOwner: string, requestBody: CreateVirtualServicePutBody): Observable<CreateVirtualServiceOutput> {
			return this.http.put<CreateVirtualServiceOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualServices&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing virtual services in a service mesh.
		 * Get v20190125/meshes/{meshName}/virtualServices
		 * @param {number} limit The maximum number of results returned by <code>ListVirtualServices</code> in paginated
		 *          output. When you use this parameter, <code>ListVirtualServices</code> returns only
		 *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
		 *          element. You can see the remaining results of the initial request by sending another
		 *             <code>ListVirtualServices</code> request with the returned <code>nextToken</code> value.
		 *          This value can be between 1 and 100. If you don't use this
		 *          parameter, <code>ListVirtualServices</code> returns up to 100 results and
		 *          a <code>nextToken</code> value if applicable.
		 * @param {string} meshName The name of the service mesh to list virtual services in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated
		 *             <code>ListVirtualServices</code> request where <code>limit</code> was used and the
		 *          results exceeded the value of that parameter. Pagination continues from the end of the
		 *          previous results that returned the <code>nextToken</code> value.
		 * @return {ListVirtualServicesOutput} Success
		 */
		ListVirtualServices(limit: number, meshName: string, meshOwner: string, nextToken: string): Observable<ListVirtualServicesOutput> {
			return this.http.get<ListVirtualServicesOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualServices?limit=' + limit + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Deletes an existing service mesh.</p>
		 * <p>You must delete all resources (virtual services, routes, virtual routers, and virtual
		 * nodes) in the service mesh before you can delete the mesh itself.</p>
		 * Delete v20190125/meshes/{meshName}
		 * @param {string} meshName The name of the service mesh to delete.
		 * @return {DeleteMeshOutput} Success
		 */
		DeleteMesh(meshName: string): Observable<DeleteMeshOutput> {
			return this.http.delete<DeleteMeshOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)), {});
		}

		/**
		 * Describes an existing service mesh.
		 * Get v20190125/meshes/{meshName}
		 * @param {string} meshName The name of the service mesh to describe.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @return {DescribeMeshOutput} Success
		 */
		DescribeMesh(meshName: string, meshOwner: string): Observable<DescribeMeshOutput> {
			return this.http.get<DescribeMeshOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Updates an existing service mesh.
		 * Put v20190125/meshes/{meshName}
		 * @param {string} meshName The name of the service mesh to update.
		 * @return {UpdateMeshOutput} Success
		 */
		UpdateMesh(meshName: string, requestBody: UpdateMeshPutBody): Observable<UpdateMeshOutput> {
			return this.http.put<UpdateMeshOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing route.
		 * Delete v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}
		 * @param {string} meshName The name of the service mesh to delete the route in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} routeName The name of the route to delete.
		 * @param {string} virtualRouterName The name of the virtual router to delete the route in.
		 * @return {DeleteRouteOutput} Success
		 */
		DeleteRoute(meshName: string, meshOwner: string, routeName: string, virtualRouterName: string): Observable<DeleteRouteOutput> {
			return this.http.delete<DeleteRouteOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes/' + (routeName == null ? '' : encodeURIComponent(routeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Describes an existing route.
		 * Get v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}
		 * @param {string} meshName The name of the service mesh that the route resides in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} routeName The name of the route to describe.
		 * @param {string} virtualRouterName The name of the virtual router that the route is associated with.
		 * @return {DescribeRouteOutput} Success
		 */
		DescribeRoute(meshName: string, meshOwner: string, routeName: string, virtualRouterName: string): Observable<DescribeRouteOutput> {
			return this.http.get<DescribeRouteOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes/' + (routeName == null ? '' : encodeURIComponent(routeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Updates an existing route for a specified service mesh and virtual router.
		 * Put v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}
		 * @param {string} meshName The name of the service mesh that the route resides in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} routeName The name of the route to update.
		 * @param {string} virtualRouterName The name of the virtual router that the route is associated with.
		 * @return {UpdateRouteOutput} Success
		 */
		UpdateRoute(meshName: string, meshOwner: string, routeName: string, virtualRouterName: string, requestBody: UpdateRoutePutBody): Observable<UpdateRouteOutput> {
			return this.http.put<UpdateRouteOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes/' + (routeName == null ? '' : encodeURIComponent(routeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing virtual node.</p>
		 * <p>You must delete any virtual services that list a virtual node as a service provider
		 * before you can delete the virtual node itself.</p>
		 * Delete v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}
		 * @param {string} meshName The name of the service mesh to delete the virtual node in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualNodeName The name of the virtual node to delete.
		 * @return {DeleteVirtualNodeOutput} Success
		 */
		DeleteVirtualNode(meshName: string, meshOwner: string, virtualNodeName: string): Observable<DeleteVirtualNodeOutput> {
			return this.http.delete<DeleteVirtualNodeOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes/' + (virtualNodeName == null ? '' : encodeURIComponent(virtualNodeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Describes an existing virtual node.
		 * Get v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}
		 * @param {string} meshName The name of the service mesh that the virtual node resides in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualNodeName The name of the virtual node to describe.
		 * @return {DescribeVirtualNodeOutput} Success
		 */
		DescribeVirtualNode(meshName: string, meshOwner: string, virtualNodeName: string): Observable<DescribeVirtualNodeOutput> {
			return this.http.get<DescribeVirtualNodeOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes/' + (virtualNodeName == null ? '' : encodeURIComponent(virtualNodeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Updates an existing virtual node in a specified service mesh.
		 * Put v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}
		 * @param {string} meshName The name of the service mesh that the virtual node resides in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualNodeName The name of the virtual node to update.
		 * @return {UpdateVirtualNodeOutput} Success
		 */
		UpdateVirtualNode(meshName: string, meshOwner: string, virtualNodeName: string, requestBody: UpdateVirtualNodePutBody): Observable<UpdateVirtualNodeOutput> {
			return this.http.put<UpdateVirtualNodeOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes/' + (virtualNodeName == null ? '' : encodeURIComponent(virtualNodeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing virtual router.</p>
		 * <p>You must delete any routes associated with the virtual router before you can delete the
		 * router itself.</p>
		 * Delete v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}
		 * @param {string} meshName The name of the service mesh to delete the virtual router in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualRouterName The name of the virtual router to delete.
		 * @return {DeleteVirtualRouterOutput} Success
		 */
		DeleteVirtualRouter(meshName: string, meshOwner: string, virtualRouterName: string): Observable<DeleteVirtualRouterOutput> {
			return this.http.delete<DeleteVirtualRouterOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Describes an existing virtual router.
		 * Get v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}
		 * @param {string} meshName The name of the service mesh that the virtual router resides in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualRouterName The name of the virtual router to describe.
		 * @return {DescribeVirtualRouterOutput} Success
		 */
		DescribeVirtualRouter(meshName: string, meshOwner: string, virtualRouterName: string): Observable<DescribeVirtualRouterOutput> {
			return this.http.get<DescribeVirtualRouterOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Updates an existing virtual router in a specified service mesh.
		 * Put v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}
		 * @param {string} meshName The name of the service mesh that the virtual router resides in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualRouterName The name of the virtual router to update.
		 * @return {UpdateVirtualRouterOutput} Success
		 */
		UpdateVirtualRouter(meshName: string, meshOwner: string, virtualRouterName: string, requestBody: UpdateVirtualRouterPutBody): Observable<UpdateVirtualRouterOutput> {
			return this.http.put<UpdateVirtualRouterOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing virtual service.
		 * Delete v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}
		 * @param {string} meshName The name of the service mesh to delete the virtual service in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualServiceName The name of the virtual service to delete.
		 * @return {DeleteVirtualServiceOutput} Success
		 */
		DeleteVirtualService(meshName: string, meshOwner: string, virtualServiceName: string): Observable<DeleteVirtualServiceOutput> {
			return this.http.delete<DeleteVirtualServiceOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualServices/' + (virtualServiceName == null ? '' : encodeURIComponent(virtualServiceName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Describes an existing virtual service.
		 * Get v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}
		 * @param {string} meshName The name of the service mesh that the virtual service resides in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualServiceName The name of the virtual service to describe.
		 * @return {DescribeVirtualServiceOutput} Success
		 */
		DescribeVirtualService(meshName: string, meshOwner: string, virtualServiceName: string): Observable<DescribeVirtualServiceOutput> {
			return this.http.get<DescribeVirtualServiceOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualServices/' + (virtualServiceName == null ? '' : encodeURIComponent(virtualServiceName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Updates an existing virtual service in a specified service mesh.
		 * Put v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}
		 * @param {string} meshName The name of the service mesh that the virtual service resides in.
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} virtualServiceName The name of the virtual service to update.
		 * @return {UpdateVirtualServiceOutput} Success
		 */
		UpdateVirtualService(meshName: string, meshOwner: string, virtualServiceName: string, requestBody: UpdateVirtualServicePutBody): Observable<UpdateVirtualServiceOutput> {
			return this.http.put<UpdateVirtualServiceOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualServices/' + (virtualServiceName == null ? '' : encodeURIComponent(virtualServiceName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the tags for an App Mesh resource.
		 * Get v20190125/tags#resourceArn
		 * @param {number} limit The maximum number of tag results returned by <code>ListTagsForResource</code> in
		 *          paginated output. When this parameter is used, <code>ListTagsForResource</code> returns
		 *          only <code>limit</code> results in a single page along with a <code>nextToken</code>
		 *          response element. You can see the remaining results of the initial request by sending
		 *          another <code>ListTagsForResource</code> request with the returned <code>nextToken</code>
		 *          value. This value can be between 1 and 100. If you don't use
		 *          this parameter, <code>ListTagsForResource</code> returns up to 100
		 *          results and a <code>nextToken</code> value if applicable.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated
		 *             <code>ListTagsForResource</code> request where <code>limit</code> was used and the
		 *          results exceeded the value of that parameter. Pagination continues from the end of the
		 *          previous results that returned the <code>nextToken</code> value.
		 * @param {string} resourceArn The Amazon Resource Name (ARN) that identifies the resource to list the tags for.
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(limit: number, nextToken: string, resourceArn: string): Observable<ListTagsForResourceOutput> {
			return this.http.get<ListTagsForResourceOutput>(this.baseUri + 'v20190125/tags#resourceArn?limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Associates the specified tags to a resource with the specified <code>resourceArn</code>.
		 * If existing tags on a resource aren't specified in the request parameters, they aren't
		 * changed. When a resource is deleted, the tags associated with that resource are also
		 * deleted.
		 * Put v20190125/tag#resourceArn
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource to add tags to.
		 * @return {TagResourceOutput} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePutBody): Observable<TagResourceOutput> {
			return this.http.put<TagResourceOutput>(this.baseUri + 'v20190125/tag#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes specified tags from a resource.
		 * Put v20190125/untag#resourceArn
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource to delete tags from.
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(resourceArn: string, requestBody: UntagResourcePutBody): Observable<UntagResourceOutput> {
			return this.http.put<UntagResourceOutput>(this.baseUri + 'v20190125/untag#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateMeshPutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string | null;

		/**
		 * The name to use for the service mesh.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: string;

		/** An object that represents the specification of a service mesh. */
		spec?: CreateMeshPutBodySpec | null;

		/**
		 * Optional metadata that you can apply to the service mesh to assist with categorization
		 * and organization. Each tag consists of a key and an optional value, both of which you
		 * define. Tag keys can have a maximum character length of 128 characters, and tag values can have
		 * a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef> | null;
	}

	export interface CreateMeshPutBodySpec {

		/** An object that represents the egress filter rules for a service mesh. */
		egressFilter?: EgressFilter | null;
	}

	export interface CreateRoutePutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string | null;

		/**
		 * The name to use for the route.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		routeName: string;

		/**
		 * An object that represents a route specification. Specify one route type.
		 * Required
		 */
		spec: CreateRoutePutBodySpec;

		/**
		 * Optional metadata that you can apply to the route to assist with categorization and
		 * organization. Each tag consists of a key and an optional value, both of which you define.
		 * Tag keys can have a maximum character length of 128 characters, and tag values can have
		 * a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef> | null;
	}

	export interface CreateRoutePutBodySpec {

		/** An object that represents a gRPC route type. */
		grpcRoute?: GrpcRoute | null;

		/** An object that represents an HTTP or HTTP/2 route type. */
		http2Route?: HttpRoute | null;

		/** An object that represents an HTTP or HTTP/2 route type. */
		httpRoute?: HttpRoute | null;
		priority?: number | null;

		/** An object that represents a TCP route type. */
		tcpRoute?: TcpRoute | null;
	}

	export interface CreateVirtualNodePutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual node.
		 * Required
		 */
		spec: CreateVirtualNodePutBodySpec;

		/**
		 * Optional metadata that you can apply to the virtual node to assist with categorization
		 * and organization. Each tag consists of a key and an optional value, both of which you
		 * define. Tag keys can have a maximum character length of 128 characters, and tag values can have
		 * a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef> | null;

		/**
		 * The name to use for the virtual node.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualNodeName: string;
	}

	export interface CreateVirtualNodePutBodySpec {

		/** An object that represents the default properties for a backend. */
		backendDefaults?: BackendDefaults | null;
		backends?: Array<Backend> | null;
		listeners?: Array<Listener> | null;

		/** An object that represents the logging information for a virtual node. */
		logging?: Logging | null;

		/** An object that represents the service discovery information for a virtual node. */
		serviceDiscovery?: ServiceDiscovery | null;
	}

	export interface CreateVirtualRouterPutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual router.
		 * Required
		 */
		spec: CreateVirtualRouterPutBodySpec;

		/**
		 * Optional metadata that you can apply to the virtual router to assist with categorization
		 * and organization. Each tag consists of a key and an optional value, both of which you
		 * define. Tag keys can have a maximum character length of 128 characters, and tag values can have
		 * a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef> | null;

		/**
		 * The name to use for the virtual router.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualRouterName: string;
	}

	export interface CreateVirtualRouterPutBodySpec {
		listeners?: Array<VirtualRouterListener> | null;
	}

	export interface CreateVirtualServicePutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual service.
		 * Required
		 */
		spec: CreateVirtualServicePutBodySpec;

		/**
		 * Optional metadata that you can apply to the virtual service to assist with
		 * categorization and organization. Each tag consists of a key and an optional value, both of
		 * which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have
		 * a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef> | null;

		/**
		 * The name to use for the virtual service.
		 * Required
		 */
		virtualServiceName: string;
	}

	export interface CreateVirtualServicePutBodySpec {

		/** An object that represents the provider for a virtual service. */
		provider?: VirtualServiceProvider | null;
	}

	export interface UpdateMeshPutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string | null;

		/** An object that represents the specification of a service mesh. */
		spec?: UpdateMeshPutBodySpec | null;
	}

	export interface UpdateMeshPutBodySpec {

		/** An object that represents the egress filter rules for a service mesh. */
		egressFilter?: EgressFilter | null;
	}

	export interface UpdateRoutePutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string | null;

		/**
		 * An object that represents a route specification. Specify one route type.
		 * Required
		 */
		spec: UpdateRoutePutBodySpec;
	}

	export interface UpdateRoutePutBodySpec {

		/** An object that represents a gRPC route type. */
		grpcRoute?: GrpcRoute | null;

		/** An object that represents an HTTP or HTTP/2 route type. */
		http2Route?: HttpRoute | null;

		/** An object that represents an HTTP or HTTP/2 route type. */
		httpRoute?: HttpRoute | null;
		priority?: number | null;

		/** An object that represents a TCP route type. */
		tcpRoute?: TcpRoute | null;
	}

	export interface UpdateVirtualNodePutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual node.
		 * Required
		 */
		spec: UpdateVirtualNodePutBodySpec;
	}

	export interface UpdateVirtualNodePutBodySpec {

		/** An object that represents the default properties for a backend. */
		backendDefaults?: BackendDefaults | null;
		backends?: Array<Backend> | null;
		listeners?: Array<Listener> | null;

		/** An object that represents the logging information for a virtual node. */
		logging?: Logging | null;

		/** An object that represents the service discovery information for a virtual node. */
		serviceDiscovery?: ServiceDiscovery | null;
	}

	export interface UpdateVirtualRouterPutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual router.
		 * Required
		 */
		spec: UpdateVirtualRouterPutBodySpec;
	}

	export interface UpdateVirtualRouterPutBodySpec {
		listeners?: Array<VirtualRouterListener> | null;
	}

	export interface UpdateVirtualServicePutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual service.
		 * Required
		 */
		spec: UpdateVirtualServicePutBodySpec;
	}

	export interface UpdateVirtualServicePutBodySpec {

		/** An object that represents the provider for a virtual service. */
		provider?: VirtualServiceProvider | null;
	}

	export interface TagResourcePutBody {

		/**
		 * The tags to add to the resource. A tag is an array of key-value pairs.
		 * Tag keys can have a maximum character length of 128 characters, and tag values can have
		 * a maximum length of 256 characters.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags: Array<TagRef>;
	}

	export interface UntagResourcePutBody {

		/**
		 * The keys of the tags to be removed.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tagKeys: Array<string>;
	}

}

