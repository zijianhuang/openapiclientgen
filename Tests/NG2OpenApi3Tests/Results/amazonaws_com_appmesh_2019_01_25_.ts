import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateGatewayRouteOutput {

		/** Required */
		gatewayRoute: GatewayRouteData;
	}
	export interface CreateGatewayRouteOutputFormProperties {
	}
	export function CreateCreateGatewayRouteOutputFormGroup() {
		return new FormGroup<CreateGatewayRouteOutputFormProperties>({
		});

	}


	/** An object that represents a gateway route returned by a describe operation. */
	export interface GatewayRouteData {

		/** Required */
		gatewayRouteName: string;

		/** Required */
		meshName: string;

		/**
		 * An object that represents metadata for a resource.
		 * Required
		 */
		metadata: ResourceMetadata;

		/** Required */
		spec: GatewayRouteSpec;

		/** Required */
		status: GatewayRouteStatus;

		/** Required */
		virtualGatewayName: string;
	}

	/** An object that represents a gateway route returned by a describe operation. */
	export interface GatewayRouteDataFormProperties {

		/** Required */
		gatewayRouteName: FormControl<string | null | undefined>,

		/** Required */
		meshName: FormControl<string | null | undefined>,

		/** Required */
		virtualGatewayName: FormControl<string | null | undefined>,
	}
	export function CreateGatewayRouteDataFormGroup() {
		return new FormGroup<GatewayRouteDataFormProperties>({
			gatewayRouteName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			virtualGatewayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents metadata for a resource. */
	export interface ResourceMetadata {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		lastUpdatedAt: Date;

		/** Required */
		meshOwner: string;

		/** Required */
		resourceOwner: string;

		/** Required */
		uid: string;

		/** Required */
		version: number;
	}

	/** An object that represents metadata for a resource. */
	export interface ResourceMetadataFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/** Required */
		meshOwner: FormControl<string | null | undefined>,

		/** Required */
		resourceOwner: FormControl<string | null | undefined>,

		/** Required */
		uid: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<number | null | undefined>,
	}
	export function CreateResourceMetadataFormGroup() {
		return new FormGroup<ResourceMetadataFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			meshOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a gateway route specification. Specify one gateway route type. */
	export interface GatewayRouteSpec {
		grpcRoute?: GrpcGatewayRoute;
		http2Route?: HttpGatewayRoute;
		httpRoute?: HttpGatewayRoute;
		priority?: number | null;
	}

	/** An object that represents a gateway route specification. Specify one gateway route type. */
	export interface GatewayRouteSpecFormProperties {
		priority: FormControl<number | null | undefined>,
	}
	export function CreateGatewayRouteSpecFormGroup() {
		return new FormGroup<GatewayRouteSpecFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that represents a gRPC gateway route. */
	export interface GrpcGatewayRoute {

		/** Required */
		action: GrpcGatewayRouteAction;

		/** Required */
		match: GrpcGatewayRouteMatch;
	}

	/** An object that represents a gRPC gateway route. */
	export interface GrpcGatewayRouteFormProperties {
	}
	export function CreateGrpcGatewayRouteFormGroup() {
		return new FormGroup<GrpcGatewayRouteFormProperties>({
		});

	}


	/** An object that represents the action to take if a match is determined. */
	export interface GrpcGatewayRouteAction {
		rewrite?: GrpcGatewayRouteRewrite;

		/** Required */
		target: GatewayRouteTarget;
	}

	/** An object that represents the action to take if a match is determined. */
	export interface GrpcGatewayRouteActionFormProperties {
	}
	export function CreateGrpcGatewayRouteActionFormGroup() {
		return new FormGroup<GrpcGatewayRouteActionFormProperties>({
		});

	}


	/** An object that represents the gateway route to rewrite. */
	export interface GrpcGatewayRouteRewrite {
		hostname?: GatewayRouteHostnameRewrite;
	}

	/** An object that represents the gateway route to rewrite. */
	export interface GrpcGatewayRouteRewriteFormProperties {
	}
	export function CreateGrpcGatewayRouteRewriteFormGroup() {
		return new FormGroup<GrpcGatewayRouteRewriteFormProperties>({
		});

	}


	/** An object representing the gateway route host name to rewrite. */
	export interface GatewayRouteHostnameRewrite {
		defaultTargetHostname?: DefaultGatewayRouteRewrite;
	}

	/** An object representing the gateway route host name to rewrite. */
	export interface GatewayRouteHostnameRewriteFormProperties {
		defaultTargetHostname: FormControl<DefaultGatewayRouteRewrite | null | undefined>,
	}
	export function CreateGatewayRouteHostnameRewriteFormGroup() {
		return new FormGroup<GatewayRouteHostnameRewriteFormProperties>({
			defaultTargetHostname: new FormControl<DefaultGatewayRouteRewrite | null | undefined>(undefined),
		});

	}

	export enum DefaultGatewayRouteRewrite { ENABLED = 0, DISABLED = 1 }


	/** An object that represents a gateway route target. */
	export interface GatewayRouteTarget {
		port?: number | null;

		/** Required */
		virtualService: GatewayRouteVirtualService;
	}

	/** An object that represents a gateway route target. */
	export interface GatewayRouteTargetFormProperties {
		port: FormControl<number | null | undefined>,
	}
	export function CreateGatewayRouteTargetFormGroup() {
		return new FormGroup<GatewayRouteTargetFormProperties>({
			port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that represents the virtual service that traffic is routed to. */
	export interface GatewayRouteVirtualService {

		/** Required */
		virtualServiceName: string;
	}

	/** An object that represents the virtual service that traffic is routed to. */
	export interface GatewayRouteVirtualServiceFormProperties {

		/** Required */
		virtualServiceName: FormControl<string | null | undefined>,
	}
	export function CreateGatewayRouteVirtualServiceFormGroup() {
		return new FormGroup<GatewayRouteVirtualServiceFormProperties>({
			virtualServiceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the criteria for determining a request match. */
	export interface GrpcGatewayRouteMatch {
		hostname?: GatewayRouteHostnameMatch;
		metadata?: Array<GrpcGatewayRouteMetadata>;
		port?: number | null;
		serviceName?: string;
	}

	/** An object that represents the criteria for determining a request match. */
	export interface GrpcGatewayRouteMatchFormProperties {
		port: FormControl<number | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateGrpcGatewayRouteMatchFormGroup() {
		return new FormGroup<GrpcGatewayRouteMatchFormProperties>({
			port: new FormControl<number | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing the gateway route host name to match. */
	export interface GatewayRouteHostnameMatch {
		exact?: string;
		suffix?: string;
	}

	/** An object representing the gateway route host name to match. */
	export interface GatewayRouteHostnameMatchFormProperties {
		exact: FormControl<string | null | undefined>,
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateGatewayRouteHostnameMatchFormGroup() {
		return new FormGroup<GatewayRouteHostnameMatchFormProperties>({
			exact: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing the metadata of the gateway route. */
	export interface GrpcGatewayRouteMetadata {
		invert?: boolean | null;
		match?: GrpcMetadataMatchMethod;

		/** Required */
		name: string;
	}

	/** An object representing the metadata of the gateway route. */
	export interface GrpcGatewayRouteMetadataFormProperties {
		invert: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGrpcGatewayRouteMetadataFormGroup() {
		return new FormGroup<GrpcGatewayRouteMetadataFormProperties>({
			invert: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object representing the method header to be matched. */
	export interface GrpcMetadataMatchMethod {
		exact?: string;
		prefix?: string;

		/** An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched. */
		range?: MatchRange;
		regex?: string;
		suffix?: string;
	}

	/** An object representing the method header to be matched. */
	export interface GrpcMetadataMatchMethodFormProperties {
		exact: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
		regex: FormControl<string | null | undefined>,
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateGrpcMetadataMatchMethodFormGroup() {
		return new FormGroup<GrpcMetadataMatchMethodFormProperties>({
			exact: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched. */
	export interface MatchRange {

		/** Required */
		end: number;

		/** Required */
		start: number;
	}

	/** An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched. */
	export interface MatchRangeFormProperties {

		/** Required */
		end: FormControl<number | null | undefined>,

		/** Required */
		start: FormControl<number | null | undefined>,
	}
	export function CreateMatchRangeFormGroup() {
		return new FormGroup<MatchRangeFormProperties>({
			end: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents an HTTP gateway route. */
	export interface HttpGatewayRoute {

		/** Required */
		action: HttpGatewayRouteAction;

		/** Required */
		match: HttpGatewayRouteMatch;
	}

	/** An object that represents an HTTP gateway route. */
	export interface HttpGatewayRouteFormProperties {
	}
	export function CreateHttpGatewayRouteFormGroup() {
		return new FormGroup<HttpGatewayRouteFormProperties>({
		});

	}


	/** An object that represents the action to take if a match is determined. */
	export interface HttpGatewayRouteAction {
		rewrite?: HttpGatewayRouteRewrite;

		/** Required */
		target: GatewayRouteTarget;
	}

	/** An object that represents the action to take if a match is determined. */
	export interface HttpGatewayRouteActionFormProperties {
	}
	export function CreateHttpGatewayRouteActionFormGroup() {
		return new FormGroup<HttpGatewayRouteActionFormProperties>({
		});

	}


	/** An object representing the gateway route to rewrite. */
	export interface HttpGatewayRouteRewrite {
		hostname?: GatewayRouteHostnameRewrite;
		path?: HttpGatewayRoutePathRewrite;
		prefix?: HttpGatewayRoutePrefixRewrite;
	}

	/** An object representing the gateway route to rewrite. */
	export interface HttpGatewayRouteRewriteFormProperties {
	}
	export function CreateHttpGatewayRouteRewriteFormGroup() {
		return new FormGroup<HttpGatewayRouteRewriteFormProperties>({
		});

	}


	/** An object that represents the path to rewrite. */
	export interface HttpGatewayRoutePathRewrite {
		exact?: string;
	}

	/** An object that represents the path to rewrite. */
	export interface HttpGatewayRoutePathRewriteFormProperties {
		exact: FormControl<string | null | undefined>,
	}
	export function CreateHttpGatewayRoutePathRewriteFormGroup() {
		return new FormGroup<HttpGatewayRoutePathRewriteFormProperties>({
			exact: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing the beginning characters of the route to rewrite. */
	export interface HttpGatewayRoutePrefixRewrite {
		defaultPrefix?: DefaultGatewayRouteRewrite;
		value?: string;
	}

	/** An object representing the beginning characters of the route to rewrite. */
	export interface HttpGatewayRoutePrefixRewriteFormProperties {
		defaultPrefix: FormControl<DefaultGatewayRouteRewrite | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateHttpGatewayRoutePrefixRewriteFormGroup() {
		return new FormGroup<HttpGatewayRoutePrefixRewriteFormProperties>({
			defaultPrefix: new FormControl<DefaultGatewayRouteRewrite | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the criteria for determining a request match. */
	export interface HttpGatewayRouteMatch {
		headers?: Array<HttpGatewayRouteHeader>;
		hostname?: GatewayRouteHostnameMatch;
		method?: HttpMethod_;
		path?: HttpPathMatch;
		port?: number | null;
		prefix?: string;
		queryParameters?: Array<HttpQueryParameter>;
	}

	/** An object that represents the criteria for determining a request match. */
	export interface HttpGatewayRouteMatchFormProperties {
		method: FormControl<HttpMethod_ | null | undefined>,
		port: FormControl<number | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateHttpGatewayRouteMatchFormGroup() {
		return new FormGroup<HttpGatewayRouteMatchFormProperties>({
			method: new FormControl<HttpMethod_ | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the HTTP header in the gateway route. */
	export interface HttpGatewayRouteHeader {
		invert?: boolean | null;
		match?: HeaderMatchMethod;

		/** Required */
		name: string;
	}

	/** An object that represents the HTTP header in the gateway route. */
	export interface HttpGatewayRouteHeaderFormProperties {
		invert: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateHttpGatewayRouteHeaderFormGroup() {
		return new FormGroup<HttpGatewayRouteHeaderFormProperties>({
			invert: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the method and value to match with the header value sent in a request. Specify one match method. */
	export interface HeaderMatchMethod {
		exact?: string;
		prefix?: string;
		range?: MatchRange;
		regex?: string;
		suffix?: string;
	}

	/** An object that represents the method and value to match with the header value sent in a request. Specify one match method. */
	export interface HeaderMatchMethodFormProperties {
		exact: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
		regex: FormControl<string | null | undefined>,
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateHeaderMatchMethodFormGroup() {
		return new FormGroup<HeaderMatchMethodFormProperties>({
			exact: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HttpMethod_ { GET = 0, HEAD = 1, POST = 2, PUT = 3, DELETE = 4, CONNECT = 5, OPTIONS = 6, TRACE = 7, PATCH = 8 }


	/** An object representing the path to match in the request. */
	export interface HttpPathMatch {
		exact?: string;
		regex?: string;
	}

	/** An object representing the path to match in the request. */
	export interface HttpPathMatchFormProperties {
		exact: FormControl<string | null | undefined>,
		regex: FormControl<string | null | undefined>,
	}
	export function CreateHttpPathMatchFormGroup() {
		return new FormGroup<HttpPathMatchFormProperties>({
			exact: new FormControl<string | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the query parameter in the request. */
	export interface HttpQueryParameter {
		match?: QueryParameterMatch;

		/** Required */
		name: string;
	}

	/** An object that represents the query parameter in the request. */
	export interface HttpQueryParameterFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateHttpQueryParameterFormGroup() {
		return new FormGroup<HttpQueryParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object representing the query parameter to match. */
	export interface QueryParameterMatch {
		exact?: string;
	}

	/** An object representing the query parameter to match. */
	export interface QueryParameterMatchFormProperties {
		exact: FormControl<string | null | undefined>,
	}
	export function CreateQueryParameterMatchFormGroup() {
		return new FormGroup<QueryParameterMatchFormProperties>({
			exact: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the current status of a gateway route. */
	export interface GatewayRouteStatus {

		/** Required */
		status: GatewayRouteStatusCode;
	}

	/** An object that represents the current status of a gateway route. */
	export interface GatewayRouteStatusFormProperties {

		/** Required */
		status: FormControl<GatewayRouteStatusCode | null | undefined>,
	}
	export function CreateGatewayRouteStatusFormGroup() {
		return new FormGroup<GatewayRouteStatusFormProperties>({
			status: new FormControl<GatewayRouteStatusCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GatewayRouteStatusCode { ACTIVE = 0, INACTIVE = 1, DELETED = 2 }


	/** Optional metadata that you apply to a resource to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
	export interface TagRef {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** Optional metadata that you apply to a resource to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
	export interface TagRefFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagRefFormGroup() {
		return new FormGroup<TagRefFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface InternalServerErrorException {
	}
	export interface InternalServerErrorExceptionFormProperties {
	}
	export function CreateInternalServerErrorExceptionFormGroup() {
		return new FormGroup<InternalServerErrorExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateMeshOutput {

		/** Required */
		mesh: MeshData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateMeshOutputFormProperties {
	}
	export function CreateCreateMeshOutputFormGroup() {
		return new FormGroup<CreateMeshOutputFormProperties>({
		});

	}


	/** An object that represents a service mesh returned by a describe operation. */
	export interface MeshData {

		/** Required */
		meshName: string;

		/** Required */
		metadata: ResourceMetadata;

		/** Required */
		spec: MeshSpec;

		/** Required */
		status: MeshStatus;
	}

	/** An object that represents a service mesh returned by a describe operation. */
	export interface MeshDataFormProperties {

		/** Required */
		meshName: FormControl<string | null | undefined>,
	}
	export function CreateMeshDataFormGroup() {
		return new FormGroup<MeshDataFormProperties>({
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the specification of a service mesh. */
	export interface MeshSpec {
		egressFilter?: EgressFilter;

		/** An object that represents the service discovery information for a service mesh. */
		serviceDiscovery?: MeshServiceDiscovery;
	}

	/** An object that represents the specification of a service mesh. */
	export interface MeshSpecFormProperties {
	}
	export function CreateMeshSpecFormGroup() {
		return new FormGroup<MeshSpecFormProperties>({
		});

	}


	/** An object that represents the egress filter rules for a service mesh. */
	export interface EgressFilter {

		/** Required */
		type: EgressFilterType;
	}

	/** An object that represents the egress filter rules for a service mesh. */
	export interface EgressFilterFormProperties {

		/** Required */
		type: FormControl<EgressFilterType | null | undefined>,
	}
	export function CreateEgressFilterFormGroup() {
		return new FormGroup<EgressFilterFormProperties>({
			type: new FormControl<EgressFilterType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EgressFilterType { ALLOW_ALL = 0, DROP_ALL = 1 }


	/** An object that represents the service discovery information for a service mesh. */
	export interface MeshServiceDiscovery {
		ipPreference?: IpPreference;
	}

	/** An object that represents the service discovery information for a service mesh. */
	export interface MeshServiceDiscoveryFormProperties {
		ipPreference: FormControl<IpPreference | null | undefined>,
	}
	export function CreateMeshServiceDiscoveryFormGroup() {
		return new FormGroup<MeshServiceDiscoveryFormProperties>({
			ipPreference: new FormControl<IpPreference | null | undefined>(undefined),
		});

	}

	export enum IpPreference { IPv6_PREFERRED = 0, IPv4_PREFERRED = 1, IPv4_ONLY = 2, IPv6_ONLY = 3 }


	/** An object that represents the status of a service mesh. */
	export interface MeshStatus {
		status?: GatewayRouteStatusCode;
	}

	/** An object that represents the status of a service mesh. */
	export interface MeshStatusFormProperties {
		status: FormControl<GatewayRouteStatusCode | null | undefined>,
	}
	export function CreateMeshStatusFormGroup() {
		return new FormGroup<MeshStatusFormProperties>({
			status: new FormControl<GatewayRouteStatusCode | null | undefined>(undefined),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateRouteOutput {

		/** Required */
		route: RouteData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateRouteOutputFormProperties {
	}
	export function CreateCreateRouteOutputFormGroup() {
		return new FormGroup<CreateRouteOutputFormProperties>({
		});

	}


	/** An object that represents a route returned by a describe operation. */
	export interface RouteData {

		/** Required */
		meshName: string;

		/** Required */
		metadata: ResourceMetadata;

		/** Required */
		routeName: string;

		/** Required */
		spec: RouteSpec;

		/** Required */
		status: RouteStatus;

		/** Required */
		virtualRouterName: string;
	}

	/** An object that represents a route returned by a describe operation. */
	export interface RouteDataFormProperties {

		/** Required */
		meshName: FormControl<string | null | undefined>,

		/** Required */
		routeName: FormControl<string | null | undefined>,

		/** Required */
		virtualRouterName: FormControl<string | null | undefined>,
	}
	export function CreateRouteDataFormGroup() {
		return new FormGroup<RouteDataFormProperties>({
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			routeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			virtualRouterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a route specification. Specify one route type. */
	export interface RouteSpec {
		grpcRoute?: GrpcRoute;
		http2Route?: HttpRoute;
		httpRoute?: HttpRoute;
		priority?: number | null;
		tcpRoute?: TcpRoute;
	}

	/** An object that represents a route specification. Specify one route type. */
	export interface RouteSpecFormProperties {
		priority: FormControl<number | null | undefined>,
	}
	export function CreateRouteSpecFormGroup() {
		return new FormGroup<RouteSpecFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that represents a gRPC route type. */
	export interface GrpcRoute {

		/** Required */
		action: GrpcRouteAction;

		/** Required */
		match: GrpcRouteMatch;
		retryPolicy?: GrpcRetryPolicy;
		timeout?: GrpcTimeout;
	}

	/** An object that represents a gRPC route type. */
	export interface GrpcRouteFormProperties {
	}
	export function CreateGrpcRouteFormGroup() {
		return new FormGroup<GrpcRouteFormProperties>({
		});

	}


	/** An object that represents the action to take if a match is determined. */
	export interface GrpcRouteAction {

		/** Required */
		weightedTargets: Array<WeightedTarget>;
	}

	/** An object that represents the action to take if a match is determined. */
	export interface GrpcRouteActionFormProperties {
	}
	export function CreateGrpcRouteActionFormGroup() {
		return new FormGroup<GrpcRouteActionFormProperties>({
		});

	}


	/** An object that represents a target and its relative weight. Traffic is distributed across targets according to their relative weight. For example, a weighted target with a relative weight of 50 receives five times as much traffic as one with a relative weight of 10. The total weight for all targets combined must be less than or equal to 100. */
	export interface WeightedTarget {
		port?: number | null;

		/** Required */
		virtualNode: string;

		/** Required */
		weight: number;
	}

	/** An object that represents a target and its relative weight. Traffic is distributed across targets according to their relative weight. For example, a weighted target with a relative weight of 50 receives five times as much traffic as one with a relative weight of 10. The total weight for all targets combined must be less than or equal to 100. */
	export interface WeightedTargetFormProperties {
		port: FormControl<number | null | undefined>,

		/** Required */
		virtualNode: FormControl<string | null | undefined>,

		/** Required */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateWeightedTargetFormGroup() {
		return new FormGroup<WeightedTargetFormProperties>({
			port: new FormControl<number | null | undefined>(undefined),
			virtualNode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the criteria for determining a request match. */
	export interface GrpcRouteMatch {
		metadata?: Array<GrpcRouteMetadata>;
		methodName?: string;
		port?: number | null;
		serviceName?: string;
	}

	/** An object that represents the criteria for determining a request match. */
	export interface GrpcRouteMatchFormProperties {
		methodName: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateGrpcRouteMatchFormGroup() {
		return new FormGroup<GrpcRouteMatchFormProperties>({
			methodName: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the match metadata for the route. */
	export interface GrpcRouteMetadata {
		invert?: boolean | null;
		match?: GrpcRouteMetadataMatchMethod;

		/** Required */
		name: string;
	}

	/** An object that represents the match metadata for the route. */
	export interface GrpcRouteMetadataFormProperties {
		invert: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGrpcRouteMetadataFormGroup() {
		return new FormGroup<GrpcRouteMetadataFormProperties>({
			invert: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the match method. Specify one of the match values. */
	export interface GrpcRouteMetadataMatchMethod {
		exact?: string;
		prefix?: string;
		range?: MatchRange;
		regex?: string;
		suffix?: string;
	}

	/** An object that represents the match method. Specify one of the match values. */
	export interface GrpcRouteMetadataMatchMethodFormProperties {
		exact: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
		regex: FormControl<string | null | undefined>,
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateGrpcRouteMetadataMatchMethodFormGroup() {
		return new FormGroup<GrpcRouteMetadataMatchMethodFormProperties>({
			exact: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>. */
	export interface GrpcRetryPolicy {
		grpcRetryEvents?: Array<GrpcRetryPolicyEvent>;
		httpRetryEvents?: Array<string>;

		/** Required */
		maxRetries: number;

		/** Required */
		perRetryTimeout: Duration;
		tcpRetryEvents?: Array<TcpRetryPolicyEvent>;
	}

	/** An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>. */
	export interface GrpcRetryPolicyFormProperties {

		/** Required */
		maxRetries: FormControl<number | null | undefined>,
	}
	export function CreateGrpcRetryPolicyFormGroup() {
		return new FormGroup<GrpcRetryPolicyFormProperties>({
			maxRetries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GrpcRetryPolicyEvent { cancelled = 0, 'deadline-exceeded' = 1, internal = 2, 'resource-exhausted' = 3, unavailable = 4 }


	/** An object that represents a duration of time. */
	export interface Duration {
		unit?: DurationUnit;
		value?: number | null;
	}

	/** An object that represents a duration of time. */
	export interface DurationFormProperties {
		unit: FormControl<DurationUnit | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateDurationFormGroup() {
		return new FormGroup<DurationFormProperties>({
			unit: new FormControl<DurationUnit | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DurationUnit { s = 0, ms = 1 }

	export enum TcpRetryPolicyEvent { 'connection-error' = 0 }


	/** An object that represents types of timeouts.  */
	export interface GrpcTimeout {
		idle?: Duration;
		perRequest?: Duration;
	}

	/** An object that represents types of timeouts.  */
	export interface GrpcTimeoutFormProperties {
	}
	export function CreateGrpcTimeoutFormGroup() {
		return new FormGroup<GrpcTimeoutFormProperties>({
		});

	}


	/** An object that represents an HTTP or HTTP/2 route type. */
	export interface HttpRoute {

		/** Required */
		action: HttpRouteAction;

		/** Required */
		match: HttpRouteMatch;
		retryPolicy?: HttpRetryPolicy;
		timeout?: HttpTimeout;
	}

	/** An object that represents an HTTP or HTTP/2 route type. */
	export interface HttpRouteFormProperties {
	}
	export function CreateHttpRouteFormGroup() {
		return new FormGroup<HttpRouteFormProperties>({
		});

	}


	/** An object that represents the action to take if a match is determined. */
	export interface HttpRouteAction {

		/** Required */
		weightedTargets: Array<WeightedTarget>;
	}

	/** An object that represents the action to take if a match is determined. */
	export interface HttpRouteActionFormProperties {
	}
	export function CreateHttpRouteActionFormGroup() {
		return new FormGroup<HttpRouteActionFormProperties>({
		});

	}


	/** An object that represents the requirements for a route to match HTTP requests for a virtual router. */
	export interface HttpRouteMatch {
		headers?: Array<HttpRouteHeader>;
		method?: HttpMethod_;
		path?: HttpPathMatch;
		port?: number | null;
		prefix?: string;
		queryParameters?: Array<HttpQueryParameter>;
		scheme?: HttpScheme;
	}

	/** An object that represents the requirements for a route to match HTTP requests for a virtual router. */
	export interface HttpRouteMatchFormProperties {
		method: FormControl<HttpMethod_ | null | undefined>,
		port: FormControl<number | null | undefined>,
		prefix: FormControl<string | null | undefined>,
		scheme: FormControl<HttpScheme | null | undefined>,
	}
	export function CreateHttpRouteMatchFormGroup() {
		return new FormGroup<HttpRouteMatchFormProperties>({
			method: new FormControl<HttpMethod_ | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			scheme: new FormControl<HttpScheme | null | undefined>(undefined),
		});

	}


	/** An object that represents the HTTP header in the request. */
	export interface HttpRouteHeader {
		invert?: boolean | null;
		match?: HeaderMatchMethod;

		/** Required */
		name: string;
	}

	/** An object that represents the HTTP header in the request. */
	export interface HttpRouteHeaderFormProperties {
		invert: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateHttpRouteHeaderFormGroup() {
		return new FormGroup<HttpRouteHeaderFormProperties>({
			invert: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HttpScheme { http = 0, https = 1 }


	/** An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>. */
	export interface HttpRetryPolicy {
		httpRetryEvents?: Array<string>;

		/** Required */
		maxRetries: number;

		/** Required */
		perRetryTimeout: Duration;
		tcpRetryEvents?: Array<TcpRetryPolicyEvent>;
	}

	/** An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>. */
	export interface HttpRetryPolicyFormProperties {

		/** Required */
		maxRetries: FormControl<number | null | undefined>,
	}
	export function CreateHttpRetryPolicyFormGroup() {
		return new FormGroup<HttpRetryPolicyFormProperties>({
			maxRetries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents types of timeouts.  */
	export interface HttpTimeout {
		idle?: Duration;
		perRequest?: Duration;
	}

	/** An object that represents types of timeouts.  */
	export interface HttpTimeoutFormProperties {
	}
	export function CreateHttpTimeoutFormGroup() {
		return new FormGroup<HttpTimeoutFormProperties>({
		});

	}


	/** An object that represents a TCP route type. */
	export interface TcpRoute {

		/** Required */
		action: TcpRouteAction;
		match?: TcpRouteMatch;
		timeout?: TcpTimeout;
	}

	/** An object that represents a TCP route type. */
	export interface TcpRouteFormProperties {
	}
	export function CreateTcpRouteFormGroup() {
		return new FormGroup<TcpRouteFormProperties>({
		});

	}


	/** An object that represents the action to take if a match is determined. */
	export interface TcpRouteAction {

		/** Required */
		weightedTargets: Array<WeightedTarget>;
	}

	/** An object that represents the action to take if a match is determined. */
	export interface TcpRouteActionFormProperties {
	}
	export function CreateTcpRouteActionFormGroup() {
		return new FormGroup<TcpRouteActionFormProperties>({
		});

	}


	/** An object representing the TCP route to match. */
	export interface TcpRouteMatch {
		port?: number | null;
	}

	/** An object representing the TCP route to match. */
	export interface TcpRouteMatchFormProperties {
		port: FormControl<number | null | undefined>,
	}
	export function CreateTcpRouteMatchFormGroup() {
		return new FormGroup<TcpRouteMatchFormProperties>({
			port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that represents types of timeouts.  */
	export interface TcpTimeout {
		idle?: Duration;
	}

	/** An object that represents types of timeouts.  */
	export interface TcpTimeoutFormProperties {
	}
	export function CreateTcpTimeoutFormGroup() {
		return new FormGroup<TcpTimeoutFormProperties>({
		});

	}


	/** An object that represents the current status of a route. */
	export interface RouteStatus {

		/** Required */
		status: GatewayRouteStatusCode;
	}

	/** An object that represents the current status of a route. */
	export interface RouteStatusFormProperties {

		/** Required */
		status: FormControl<GatewayRouteStatusCode | null | undefined>,
	}
	export function CreateRouteStatusFormGroup() {
		return new FormGroup<RouteStatusFormProperties>({
			status: new FormControl<GatewayRouteStatusCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVirtualGatewayOutput {

		/** Required */
		virtualGateway: VirtualGatewayData;
	}
	export interface CreateVirtualGatewayOutputFormProperties {
	}
	export function CreateCreateVirtualGatewayOutputFormGroup() {
		return new FormGroup<CreateVirtualGatewayOutputFormProperties>({
		});

	}


	/** An object that represents a virtual gateway returned by a describe operation. */
	export interface VirtualGatewayData {

		/** Required */
		meshName: string;

		/**
		 * An object that represents metadata for a resource.
		 * Required
		 */
		metadata: ResourceMetadata;

		/** Required */
		spec: VirtualGatewaySpec;

		/** Required */
		status: VirtualGatewayStatus;

		/** Required */
		virtualGatewayName: string;
	}

	/** An object that represents a virtual gateway returned by a describe operation. */
	export interface VirtualGatewayDataFormProperties {

		/** Required */
		meshName: FormControl<string | null | undefined>,

		/** Required */
		virtualGatewayName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualGatewayDataFormGroup() {
		return new FormGroup<VirtualGatewayDataFormProperties>({
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			virtualGatewayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the specification of a service mesh resource. */
	export interface VirtualGatewaySpec {
		backendDefaults?: VirtualGatewayBackendDefaults;

		/** Required */
		listeners: Array<VirtualGatewayListener>;

		/** An object that represents logging information. */
		logging?: VirtualGatewayLogging;
	}

	/** An object that represents the specification of a service mesh resource. */
	export interface VirtualGatewaySpecFormProperties {
	}
	export function CreateVirtualGatewaySpecFormGroup() {
		return new FormGroup<VirtualGatewaySpecFormProperties>({
		});

	}


	/** An object that represents the default properties for a backend. */
	export interface VirtualGatewayBackendDefaults {
		clientPolicy?: VirtualGatewayClientPolicy;
	}

	/** An object that represents the default properties for a backend. */
	export interface VirtualGatewayBackendDefaultsFormProperties {
	}
	export function CreateVirtualGatewayBackendDefaultsFormGroup() {
		return new FormGroup<VirtualGatewayBackendDefaultsFormProperties>({
		});

	}


	/** An object that represents a client policy. */
	export interface VirtualGatewayClientPolicy {
		tls?: VirtualGatewayClientPolicyTls;
	}

	/** An object that represents a client policy. */
	export interface VirtualGatewayClientPolicyFormProperties {
	}
	export function CreateVirtualGatewayClientPolicyFormGroup() {
		return new FormGroup<VirtualGatewayClientPolicyFormProperties>({
		});

	}


	/** An object that represents a Transport Layer Security (TLS) client policy. */
	export interface VirtualGatewayClientPolicyTls {
		certificate?: VirtualGatewayClientTlsCertificate;
		enforce?: boolean | null;
		ports?: Array<number> | null;

		/** Required */
		validation: VirtualGatewayTlsValidationContext;
	}

	/** An object that represents a Transport Layer Security (TLS) client policy. */
	export interface VirtualGatewayClientPolicyTlsFormProperties {
		enforce: FormControl<boolean | null | undefined>,
	}
	export function CreateVirtualGatewayClientPolicyTlsFormGroup() {
		return new FormGroup<VirtualGatewayClientPolicyTlsFormProperties>({
			enforce: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate. */
	export interface VirtualGatewayClientTlsCertificate {
		file?: VirtualGatewayListenerTlsFileCertificate;
		sds?: VirtualGatewayListenerTlsSdsCertificate;
	}

	/** An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate. */
	export interface VirtualGatewayClientTlsCertificateFormProperties {
	}
	export function CreateVirtualGatewayClientTlsCertificateFormGroup() {
		return new FormGroup<VirtualGatewayClientTlsCertificateFormProperties>({
		});

	}


	/** An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>. */
	export interface VirtualGatewayListenerTlsFileCertificate {

		/** Required */
		certificateChain: string;

		/** Required */
		privateKey: string;
	}

	/** An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>. */
	export interface VirtualGatewayListenerTlsFileCertificateFormProperties {

		/** Required */
		certificateChain: FormControl<string | null | undefined>,

		/** Required */
		privateKey: FormControl<string | null | undefined>,
	}
	export function CreateVirtualGatewayListenerTlsFileCertificateFormGroup() {
		return new FormGroup<VirtualGatewayListenerTlsFileCertificateFormProperties>({
			certificateChain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			privateKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the virtual gateway's listener's Secret Discovery Service certificate.The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh<a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info.  */
	export interface VirtualGatewayListenerTlsSdsCertificate {

		/** Required */
		secretName: string;
	}

	/** An object that represents the virtual gateway's listener's Secret Discovery Service certificate.The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh<a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info.  */
	export interface VirtualGatewayListenerTlsSdsCertificateFormProperties {

		/** Required */
		secretName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualGatewayListenerTlsSdsCertificateFormGroup() {
		return new FormGroup<VirtualGatewayListenerTlsSdsCertificateFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a Transport Layer Security (TLS) validation context. */
	export interface VirtualGatewayTlsValidationContext {
		subjectAlternativeNames?: SubjectAlternativeNames;

		/** Required */
		trust: VirtualGatewayTlsValidationContextTrust;
	}

	/** An object that represents a Transport Layer Security (TLS) validation context. */
	export interface VirtualGatewayTlsValidationContextFormProperties {
	}
	export function CreateVirtualGatewayTlsValidationContextFormGroup() {
		return new FormGroup<VirtualGatewayTlsValidationContextFormProperties>({
		});

	}


	/** An object that represents the subject alternative names secured by the certificate. */
	export interface SubjectAlternativeNames {

		/** Required */
		match: SubjectAlternativeNameMatchers;
	}

	/** An object that represents the subject alternative names secured by the certificate. */
	export interface SubjectAlternativeNamesFormProperties {
	}
	export function CreateSubjectAlternativeNamesFormGroup() {
		return new FormGroup<SubjectAlternativeNamesFormProperties>({
		});

	}


	/** An object that represents the methods by which a subject alternative name on a peer Transport Layer Security (TLS) certificate can be matched. */
	export interface SubjectAlternativeNameMatchers {

		/** Required */
		exact: Array<string>;
	}

	/** An object that represents the methods by which a subject alternative name on a peer Transport Layer Security (TLS) certificate can be matched. */
	export interface SubjectAlternativeNameMatchersFormProperties {
	}
	export function CreateSubjectAlternativeNameMatchersFormGroup() {
		return new FormGroup<SubjectAlternativeNameMatchersFormProperties>({
		});

	}


	/** An object that represents a Transport Layer Security (TLS) validation context trust. */
	export interface VirtualGatewayTlsValidationContextTrust {
		acm?: VirtualGatewayTlsValidationContextAcmTrust;
		file?: VirtualGatewayTlsValidationContextFileTrust;
		sds?: VirtualGatewayTlsValidationContextSdsTrust;
	}

	/** An object that represents a Transport Layer Security (TLS) validation context trust. */
	export interface VirtualGatewayTlsValidationContextTrustFormProperties {
	}
	export function CreateVirtualGatewayTlsValidationContextTrustFormGroup() {
		return new FormGroup<VirtualGatewayTlsValidationContextTrustFormProperties>({
		});

	}


	/** An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate. */
	export interface VirtualGatewayTlsValidationContextAcmTrust {

		/** Required */
		certificateAuthorityArns: Array<string>;
	}

	/** An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate. */
	export interface VirtualGatewayTlsValidationContextAcmTrustFormProperties {
	}
	export function CreateVirtualGatewayTlsValidationContextAcmTrustFormGroup() {
		return new FormGroup<VirtualGatewayTlsValidationContextAcmTrustFormProperties>({
		});

	}


	/** An object that represents a Transport Layer Security (TLS) validation context trust for a local file. */
	export interface VirtualGatewayTlsValidationContextFileTrust {

		/** Required */
		certificateChain: string;
	}

	/** An object that represents a Transport Layer Security (TLS) validation context trust for a local file. */
	export interface VirtualGatewayTlsValidationContextFileTrustFormProperties {

		/** Required */
		certificateChain: FormControl<string | null | undefined>,
	}
	export function CreateVirtualGatewayTlsValidationContextFileTrustFormGroup() {
		return new FormGroup<VirtualGatewayTlsValidationContextFileTrustFormProperties>({
			certificateChain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info. */
	export interface VirtualGatewayTlsValidationContextSdsTrust {

		/** Required */
		secretName: string;
	}

	/** An object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info. */
	export interface VirtualGatewayTlsValidationContextSdsTrustFormProperties {

		/** Required */
		secretName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualGatewayTlsValidationContextSdsTrustFormGroup() {
		return new FormGroup<VirtualGatewayTlsValidationContextSdsTrustFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a listener for a virtual gateway. */
	export interface VirtualGatewayListener {
		connectionPool?: VirtualGatewayConnectionPool;
		healthCheck?: VirtualGatewayHealthCheckPolicy;

		/** Required */
		portMapping: VirtualGatewayPortMapping;
		tls?: VirtualGatewayListenerTls;
	}

	/** An object that represents a listener for a virtual gateway. */
	export interface VirtualGatewayListenerFormProperties {
	}
	export function CreateVirtualGatewayListenerFormGroup() {
		return new FormGroup<VirtualGatewayListenerFormProperties>({
		});

	}


	/** <p>An object that represents the type of virtual gateway connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p> */
	export interface VirtualGatewayConnectionPool {
		grpc?: VirtualGatewayGrpcConnectionPool;
		http?: VirtualGatewayHttpConnectionPool;
		http2?: VirtualGatewayHttp2ConnectionPool;
	}

	/** <p>An object that represents the type of virtual gateway connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p> */
	export interface VirtualGatewayConnectionPoolFormProperties {
	}
	export function CreateVirtualGatewayConnectionPoolFormGroup() {
		return new FormGroup<VirtualGatewayConnectionPoolFormProperties>({
		});

	}


	/** An object that represents a type of connection pool. */
	export interface VirtualGatewayGrpcConnectionPool {

		/** Required */
		maxRequests: number;
	}

	/** An object that represents a type of connection pool. */
	export interface VirtualGatewayGrpcConnectionPoolFormProperties {

		/** Required */
		maxRequests: FormControl<number | null | undefined>,
	}
	export function CreateVirtualGatewayGrpcConnectionPoolFormGroup() {
		return new FormGroup<VirtualGatewayGrpcConnectionPoolFormProperties>({
			maxRequests: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a type of connection pool. */
	export interface VirtualGatewayHttpConnectionPool {

		/** Required */
		maxConnections: number;
		maxPendingRequests?: number | null;
	}

	/** An object that represents a type of connection pool. */
	export interface VirtualGatewayHttpConnectionPoolFormProperties {

		/** Required */
		maxConnections: FormControl<number | null | undefined>,
		maxPendingRequests: FormControl<number | null | undefined>,
	}
	export function CreateVirtualGatewayHttpConnectionPoolFormGroup() {
		return new FormGroup<VirtualGatewayHttpConnectionPoolFormProperties>({
			maxConnections: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxPendingRequests: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that represents a type of connection pool. */
	export interface VirtualGatewayHttp2ConnectionPool {

		/** Required */
		maxRequests: number;
	}

	/** An object that represents a type of connection pool. */
	export interface VirtualGatewayHttp2ConnectionPoolFormProperties {

		/** Required */
		maxRequests: FormControl<number | null | undefined>,
	}
	export function CreateVirtualGatewayHttp2ConnectionPoolFormGroup() {
		return new FormGroup<VirtualGatewayHttp2ConnectionPoolFormProperties>({
			maxRequests: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the health check policy for a virtual gateway's listener. */
	export interface VirtualGatewayHealthCheckPolicy {

		/** Required */
		healthyThreshold: number;

		/** Required */
		intervalMillis: number;
		path?: string;
		port?: number | null;

		/** Required */
		protocol: VirtualGatewayPortProtocol;

		/** Required */
		timeoutMillis: number;

		/** Required */
		unhealthyThreshold: number;
	}

	/** An object that represents the health check policy for a virtual gateway's listener. */
	export interface VirtualGatewayHealthCheckPolicyFormProperties {

		/** Required */
		healthyThreshold: FormControl<number | null | undefined>,

		/** Required */
		intervalMillis: FormControl<number | null | undefined>,
		path: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,

		/** Required */
		protocol: FormControl<VirtualGatewayPortProtocol | null | undefined>,

		/** Required */
		timeoutMillis: FormControl<number | null | undefined>,

		/** Required */
		unhealthyThreshold: FormControl<number | null | undefined>,
	}
	export function CreateVirtualGatewayHealthCheckPolicyFormGroup() {
		return new FormGroup<VirtualGatewayHealthCheckPolicyFormProperties>({
			healthyThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			intervalMillis: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<VirtualGatewayPortProtocol | null | undefined>(undefined, [Validators.required]),
			timeoutMillis: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unhealthyThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VirtualGatewayPortProtocol { http = 0, http2 = 1, grpc = 2 }


	/** An object that represents a port mapping. */
	export interface VirtualGatewayPortMapping {

		/** Required */
		port: number;

		/** Required */
		protocol: VirtualGatewayPortProtocol;
	}

	/** An object that represents a port mapping. */
	export interface VirtualGatewayPortMappingFormProperties {

		/** Required */
		port: FormControl<number | null | undefined>,

		/** Required */
		protocol: FormControl<VirtualGatewayPortProtocol | null | undefined>,
	}
	export function CreateVirtualGatewayPortMappingFormGroup() {
		return new FormGroup<VirtualGatewayPortMappingFormProperties>({
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<VirtualGatewayPortProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the Transport Layer Security (TLS) properties for a listener. */
	export interface VirtualGatewayListenerTls {

		/** Required */
		certificate: VirtualGatewayListenerTlsCertificate;

		/** Required */
		mode: VirtualGatewayListenerTlsMode;
		validation?: VirtualGatewayListenerTlsValidationContext;
	}

	/** An object that represents the Transport Layer Security (TLS) properties for a listener. */
	export interface VirtualGatewayListenerTlsFormProperties {

		/** Required */
		mode: FormControl<VirtualGatewayListenerTlsMode | null | undefined>,
	}
	export function CreateVirtualGatewayListenerTlsFormGroup() {
		return new FormGroup<VirtualGatewayListenerTlsFormProperties>({
			mode: new FormControl<VirtualGatewayListenerTlsMode | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a listener's Transport Layer Security (TLS) certificate. */
	export interface VirtualGatewayListenerTlsCertificate {
		acm?: VirtualGatewayListenerTlsAcmCertificate;
		file?: VirtualGatewayListenerTlsFileCertificate;
		sds?: VirtualGatewayListenerTlsSdsCertificate;
	}

	/** An object that represents a listener's Transport Layer Security (TLS) certificate. */
	export interface VirtualGatewayListenerTlsCertificateFormProperties {
	}
	export function CreateVirtualGatewayListenerTlsCertificateFormGroup() {
		return new FormGroup<VirtualGatewayListenerTlsCertificateFormProperties>({
		});

	}


	/** An object that represents an Certificate Manager certificate. */
	export interface VirtualGatewayListenerTlsAcmCertificate {

		/** Required */
		certificateArn: string;
	}

	/** An object that represents an Certificate Manager certificate. */
	export interface VirtualGatewayListenerTlsAcmCertificateFormProperties {

		/** Required */
		certificateArn: FormControl<string | null | undefined>,
	}
	export function CreateVirtualGatewayListenerTlsAcmCertificateFormGroup() {
		return new FormGroup<VirtualGatewayListenerTlsAcmCertificateFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VirtualGatewayListenerTlsMode { STRICT = 0, PERMISSIVE = 1, DISABLED = 2 }


	/** An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context. */
	export interface VirtualGatewayListenerTlsValidationContext {
		subjectAlternativeNames?: SubjectAlternativeNames;

		/** Required */
		trust: VirtualGatewayListenerTlsValidationContextTrust;
	}

	/** An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context. */
	export interface VirtualGatewayListenerTlsValidationContextFormProperties {
	}
	export function CreateVirtualGatewayListenerTlsValidationContextFormGroup() {
		return new FormGroup<VirtualGatewayListenerTlsValidationContextFormProperties>({
		});

	}


	/** An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context trust. */
	export interface VirtualGatewayListenerTlsValidationContextTrust {
		file?: VirtualGatewayTlsValidationContextFileTrust;
		sds?: VirtualGatewayTlsValidationContextSdsTrust;
	}

	/** An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context trust. */
	export interface VirtualGatewayListenerTlsValidationContextTrustFormProperties {
	}
	export function CreateVirtualGatewayListenerTlsValidationContextTrustFormGroup() {
		return new FormGroup<VirtualGatewayListenerTlsValidationContextTrustFormProperties>({
		});

	}


	/** An object that represents logging information. */
	export interface VirtualGatewayLogging {
		accessLog?: VirtualGatewayAccessLog;
	}

	/** An object that represents logging information. */
	export interface VirtualGatewayLoggingFormProperties {
	}
	export function CreateVirtualGatewayLoggingFormGroup() {
		return new FormGroup<VirtualGatewayLoggingFormProperties>({
		});

	}


	/** The access log configuration for a virtual gateway. */
	export interface VirtualGatewayAccessLog {
		file?: VirtualGatewayFileAccessLog;
	}

	/** The access log configuration for a virtual gateway. */
	export interface VirtualGatewayAccessLogFormProperties {
	}
	export function CreateVirtualGatewayAccessLogFormGroup() {
		return new FormGroup<VirtualGatewayAccessLogFormProperties>({
		});

	}


	/** An object that represents an access log file. */
	export interface VirtualGatewayFileAccessLog {
		format?: LoggingFormat;

		/** Required */
		path: string;
	}

	/** An object that represents an access log file. */
	export interface VirtualGatewayFileAccessLogFormProperties {

		/** Required */
		path: FormControl<string | null | undefined>,
	}
	export function CreateVirtualGatewayFileAccessLogFormGroup() {
		return new FormGroup<VirtualGatewayFileAccessLogFormProperties>({
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the format for the logs. */
	export interface LoggingFormat {
		json?: Array<JsonFormatRef>;
		text?: string;
	}

	/** An object that represents the format for the logs. */
	export interface LoggingFormatFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateLoggingFormatFormGroup() {
		return new FormGroup<LoggingFormatFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the key value pairs for the JSON. */
	export interface JsonFormatRef {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** An object that represents the key value pairs for the JSON. */
	export interface JsonFormatRefFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateJsonFormatRefFormGroup() {
		return new FormGroup<JsonFormatRefFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the status of the mesh resource. */
	export interface VirtualGatewayStatus {

		/** Required */
		status: GatewayRouteStatusCode;
	}

	/** An object that represents the status of the mesh resource. */
	export interface VirtualGatewayStatusFormProperties {

		/** Required */
		status: FormControl<GatewayRouteStatusCode | null | undefined>,
	}
	export function CreateVirtualGatewayStatusFormGroup() {
		return new FormGroup<VirtualGatewayStatusFormProperties>({
			status: new FormControl<GatewayRouteStatusCode | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateVirtualNodeOutput {

		/** Required */
		virtualNode: VirtualNodeData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateVirtualNodeOutputFormProperties {
	}
	export function CreateCreateVirtualNodeOutputFormGroup() {
		return new FormGroup<CreateVirtualNodeOutputFormProperties>({
		});

	}


	/** An object that represents a virtual node returned by a describe operation. */
	export interface VirtualNodeData {

		/** Required */
		meshName: string;

		/** Required */
		metadata: ResourceMetadata;

		/** Required */
		spec: VirtualNodeSpec;

		/** Required */
		status: VirtualNodeStatus;

		/** Required */
		virtualNodeName: string;
	}

	/** An object that represents a virtual node returned by a describe operation. */
	export interface VirtualNodeDataFormProperties {

		/** Required */
		meshName: FormControl<string | null | undefined>,

		/** Required */
		virtualNodeName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNodeDataFormGroup() {
		return new FormGroup<VirtualNodeDataFormProperties>({
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			virtualNodeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the specification of a virtual node. */
	export interface VirtualNodeSpec {
		backendDefaults?: BackendDefaults;
		backends?: Array<Backend>;
		listeners?: Array<Listener>;
		logging?: Logging;
		serviceDiscovery?: ServiceDiscovery;
	}

	/** An object that represents the specification of a virtual node. */
	export interface VirtualNodeSpecFormProperties {
	}
	export function CreateVirtualNodeSpecFormGroup() {
		return new FormGroup<VirtualNodeSpecFormProperties>({
		});

	}


	/** An object that represents the default properties for a backend. */
	export interface BackendDefaults {
		clientPolicy?: ClientPolicy;
	}

	/** An object that represents the default properties for a backend. */
	export interface BackendDefaultsFormProperties {
	}
	export function CreateBackendDefaultsFormGroup() {
		return new FormGroup<BackendDefaultsFormProperties>({
		});

	}


	/** An object that represents a client policy. */
	export interface ClientPolicy {
		tls?: ClientPolicyTls;
	}

	/** An object that represents a client policy. */
	export interface ClientPolicyFormProperties {
	}
	export function CreateClientPolicyFormGroup() {
		return new FormGroup<ClientPolicyFormProperties>({
		});

	}


	/** A reference to an object that represents a Transport Layer Security (TLS) client policy. */
	export interface ClientPolicyTls {
		certificate?: ClientTlsCertificate;
		enforce?: boolean | null;
		ports?: Array<number> | null;

		/** Required */
		validation: TlsValidationContext;
	}

	/** A reference to an object that represents a Transport Layer Security (TLS) client policy. */
	export interface ClientPolicyTlsFormProperties {
		enforce: FormControl<boolean | null | undefined>,
	}
	export function CreateClientPolicyTlsFormGroup() {
		return new FormGroup<ClientPolicyTlsFormProperties>({
			enforce: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An object that represents the client's certificate. */
	export interface ClientTlsCertificate {
		file?: ListenerTlsFileCertificate;
		sds?: ListenerTlsSdsCertificate;
	}

	/** An object that represents the client's certificate. */
	export interface ClientTlsCertificateFormProperties {
	}
	export function CreateClientTlsCertificateFormGroup() {
		return new FormGroup<ClientTlsCertificateFormProperties>({
		});

	}


	/** An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>. */
	export interface ListenerTlsFileCertificate {

		/** Required */
		certificateChain: string;

		/** Required */
		privateKey: string;
	}

	/** An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>. */
	export interface ListenerTlsFileCertificateFormProperties {

		/** Required */
		certificateChain: FormControl<string | null | undefined>,

		/** Required */
		privateKey: FormControl<string | null | undefined>,
	}
	export function CreateListenerTlsFileCertificateFormGroup() {
		return new FormGroup<ListenerTlsFileCertificateFormProperties>({
			certificateChain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			privateKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the listener's Secret Discovery Service certificate. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info. */
	export interface ListenerTlsSdsCertificate {

		/** Required */
		secretName: string;
	}

	/** An object that represents the listener's Secret Discovery Service certificate. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info. */
	export interface ListenerTlsSdsCertificateFormProperties {

		/** Required */
		secretName: FormControl<string | null | undefined>,
	}
	export function CreateListenerTlsSdsCertificateFormGroup() {
		return new FormGroup<ListenerTlsSdsCertificateFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents how the proxy will validate its peer during Transport Layer Security (TLS) negotiation. */
	export interface TlsValidationContext {
		subjectAlternativeNames?: SubjectAlternativeNames;

		/** Required */
		trust: TlsValidationContextTrust;
	}

	/** An object that represents how the proxy will validate its peer during Transport Layer Security (TLS) negotiation. */
	export interface TlsValidationContextFormProperties {
	}
	export function CreateTlsValidationContextFormGroup() {
		return new FormGroup<TlsValidationContextFormProperties>({
		});

	}


	/** An object that represents a Transport Layer Security (TLS) validation context trust. */
	export interface TlsValidationContextTrust {
		acm?: TlsValidationContextAcmTrust;
		file?: TlsValidationContextFileTrust;
		sds?: TlsValidationContextSdsTrust;
	}

	/** An object that represents a Transport Layer Security (TLS) validation context trust. */
	export interface TlsValidationContextTrustFormProperties {
	}
	export function CreateTlsValidationContextTrustFormGroup() {
		return new FormGroup<TlsValidationContextTrustFormProperties>({
		});

	}


	/** An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate. */
	export interface TlsValidationContextAcmTrust {

		/** Required */
		certificateAuthorityArns: Array<string>;
	}

	/** An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate. */
	export interface TlsValidationContextAcmTrustFormProperties {
	}
	export function CreateTlsValidationContextAcmTrustFormGroup() {
		return new FormGroup<TlsValidationContextAcmTrustFormProperties>({
		});

	}


	/** An object that represents a Transport Layer Security (TLS) validation context trust for a local file. */
	export interface TlsValidationContextFileTrust {

		/** Required */
		certificateChain: string;
	}

	/** An object that represents a Transport Layer Security (TLS) validation context trust for a local file. */
	export interface TlsValidationContextFileTrustFormProperties {

		/** Required */
		certificateChain: FormControl<string | null | undefined>,
	}
	export function CreateTlsValidationContextFileTrustFormGroup() {
		return new FormGroup<TlsValidationContextFileTrustFormProperties>({
			certificateChain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info. */
	export interface TlsValidationContextSdsTrust {

		/** Required */
		secretName: string;
	}

	/** An object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info. */
	export interface TlsValidationContextSdsTrustFormProperties {

		/** Required */
		secretName: FormControl<string | null | undefined>,
	}
	export function CreateTlsValidationContextSdsTrustFormGroup() {
		return new FormGroup<TlsValidationContextSdsTrustFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the backends that a virtual node is expected to send outbound traffic to. */
	export interface Backend {
		virtualService?: VirtualServiceBackend;
	}

	/** An object that represents the backends that a virtual node is expected to send outbound traffic to. */
	export interface BackendFormProperties {
	}
	export function CreateBackendFormGroup() {
		return new FormGroup<BackendFormProperties>({
		});

	}


	/** An object that represents a virtual service backend for a virtual node. */
	export interface VirtualServiceBackend {
		clientPolicy?: ClientPolicy;

		/** Required */
		virtualServiceName: string;
	}

	/** An object that represents a virtual service backend for a virtual node. */
	export interface VirtualServiceBackendFormProperties {

		/** Required */
		virtualServiceName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualServiceBackendFormGroup() {
		return new FormGroup<VirtualServiceBackendFormProperties>({
			virtualServiceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a listener for a virtual node. */
	export interface Listener {
		connectionPool?: VirtualNodeConnectionPool;
		healthCheck?: HealthCheckPolicy;
		outlierDetection?: OutlierDetection;

		/** Required */
		portMapping: PortMapping;
		timeout?: ListenerTimeout;
		tls?: ListenerTls;
	}

	/** An object that represents a listener for a virtual node. */
	export interface ListenerFormProperties {
	}
	export function CreateListenerFormGroup() {
		return new FormGroup<ListenerFormProperties>({
		});

	}


	/** <p>An object that represents the type of virtual node connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p> <p/> */
	export interface VirtualNodeConnectionPool {
		grpc?: VirtualNodeGrpcConnectionPool;
		http?: VirtualNodeHttpConnectionPool;
		http2?: VirtualNodeHttp2ConnectionPool;
		tcp?: VirtualNodeTcpConnectionPool;
	}

	/** <p>An object that represents the type of virtual node connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p> <p/> */
	export interface VirtualNodeConnectionPoolFormProperties {
	}
	export function CreateVirtualNodeConnectionPoolFormGroup() {
		return new FormGroup<VirtualNodeConnectionPoolFormProperties>({
		});

	}


	/** An object that represents a type of connection pool. */
	export interface VirtualNodeGrpcConnectionPool {

		/** Required */
		maxRequests: number;
	}

	/** An object that represents a type of connection pool. */
	export interface VirtualNodeGrpcConnectionPoolFormProperties {

		/** Required */
		maxRequests: FormControl<number | null | undefined>,
	}
	export function CreateVirtualNodeGrpcConnectionPoolFormGroup() {
		return new FormGroup<VirtualNodeGrpcConnectionPoolFormProperties>({
			maxRequests: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a type of connection pool. */
	export interface VirtualNodeHttpConnectionPool {

		/** Required */
		maxConnections: number;
		maxPendingRequests?: number | null;
	}

	/** An object that represents a type of connection pool. */
	export interface VirtualNodeHttpConnectionPoolFormProperties {

		/** Required */
		maxConnections: FormControl<number | null | undefined>,
		maxPendingRequests: FormControl<number | null | undefined>,
	}
	export function CreateVirtualNodeHttpConnectionPoolFormGroup() {
		return new FormGroup<VirtualNodeHttpConnectionPoolFormProperties>({
			maxConnections: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxPendingRequests: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that represents a type of connection pool. */
	export interface VirtualNodeHttp2ConnectionPool {

		/** Required */
		maxRequests: number;
	}

	/** An object that represents a type of connection pool. */
	export interface VirtualNodeHttp2ConnectionPoolFormProperties {

		/** Required */
		maxRequests: FormControl<number | null | undefined>,
	}
	export function CreateVirtualNodeHttp2ConnectionPoolFormGroup() {
		return new FormGroup<VirtualNodeHttp2ConnectionPoolFormProperties>({
			maxRequests: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a type of connection pool. */
	export interface VirtualNodeTcpConnectionPool {

		/** Required */
		maxConnections: number;
	}

	/** An object that represents a type of connection pool. */
	export interface VirtualNodeTcpConnectionPoolFormProperties {

		/** Required */
		maxConnections: FormControl<number | null | undefined>,
	}
	export function CreateVirtualNodeTcpConnectionPoolFormGroup() {
		return new FormGroup<VirtualNodeTcpConnectionPoolFormProperties>({
			maxConnections: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the health check policy for a virtual node's listener. */
	export interface HealthCheckPolicy {

		/** Required */
		healthyThreshold: number;

		/** Required */
		intervalMillis: number;
		path?: string;
		port?: number | null;

		/** Required */
		protocol: PortProtocol;

		/** Required */
		timeoutMillis: number;

		/** Required */
		unhealthyThreshold: number;
	}

	/** An object that represents the health check policy for a virtual node's listener. */
	export interface HealthCheckPolicyFormProperties {

		/** Required */
		healthyThreshold: FormControl<number | null | undefined>,

		/** Required */
		intervalMillis: FormControl<number | null | undefined>,
		path: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,

		/** Required */
		protocol: FormControl<PortProtocol | null | undefined>,

		/** Required */
		timeoutMillis: FormControl<number | null | undefined>,

		/** Required */
		unhealthyThreshold: FormControl<number | null | undefined>,
	}
	export function CreateHealthCheckPolicyFormGroup() {
		return new FormGroup<HealthCheckPolicyFormProperties>({
			healthyThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			intervalMillis: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<PortProtocol | null | undefined>(undefined, [Validators.required]),
			timeoutMillis: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unhealthyThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PortProtocol { http = 0, tcp = 1, http2 = 2, grpc = 3 }


	/** An object that represents the outlier detection for a virtual node's listener. */
	export interface OutlierDetection {

		/** Required */
		baseEjectionDuration: Duration;

		/** Required */
		interval: Duration;

		/** Required */
		maxEjectionPercent: number;

		/** Required */
		maxServerErrors: number;
	}

	/** An object that represents the outlier detection for a virtual node's listener. */
	export interface OutlierDetectionFormProperties {

		/** Required */
		maxEjectionPercent: FormControl<number | null | undefined>,

		/** Required */
		maxServerErrors: FormControl<number | null | undefined>,
	}
	export function CreateOutlierDetectionFormGroup() {
		return new FormGroup<OutlierDetectionFormProperties>({
			maxEjectionPercent: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxServerErrors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a port mapping. */
	export interface PortMapping {

		/** Required */
		port: number;

		/** Required */
		protocol: PortProtocol;
	}

	/** An object that represents a port mapping. */
	export interface PortMappingFormProperties {

		/** Required */
		port: FormControl<number | null | undefined>,

		/** Required */
		protocol: FormControl<PortProtocol | null | undefined>,
	}
	export function CreatePortMappingFormGroup() {
		return new FormGroup<PortMappingFormProperties>({
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<PortProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents timeouts for different protocols. */
	export interface ListenerTimeout {
		grpc?: GrpcTimeout;
		http?: HttpTimeout;
		http2?: HttpTimeout;
		tcp?: TcpTimeout;
	}

	/** An object that represents timeouts for different protocols. */
	export interface ListenerTimeoutFormProperties {
	}
	export function CreateListenerTimeoutFormGroup() {
		return new FormGroup<ListenerTimeoutFormProperties>({
		});

	}


	/** An object that represents the Transport Layer Security (TLS) properties for a listener. */
	export interface ListenerTls {

		/** Required */
		certificate: ListenerTlsCertificate;

		/** Required */
		mode: VirtualGatewayListenerTlsMode;
		validation?: ListenerTlsValidationContext;
	}

	/** An object that represents the Transport Layer Security (TLS) properties for a listener. */
	export interface ListenerTlsFormProperties {

		/** Required */
		mode: FormControl<VirtualGatewayListenerTlsMode | null | undefined>,
	}
	export function CreateListenerTlsFormGroup() {
		return new FormGroup<ListenerTlsFormProperties>({
			mode: new FormControl<VirtualGatewayListenerTlsMode | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a listener's Transport Layer Security (TLS) certificate. */
	export interface ListenerTlsCertificate {
		acm?: ListenerTlsAcmCertificate;
		file?: ListenerTlsFileCertificate;
		sds?: ListenerTlsSdsCertificate;
	}

	/** An object that represents a listener's Transport Layer Security (TLS) certificate. */
	export interface ListenerTlsCertificateFormProperties {
	}
	export function CreateListenerTlsCertificateFormGroup() {
		return new FormGroup<ListenerTlsCertificateFormProperties>({
		});

	}


	/** An object that represents an Certificate Manager certificate. */
	export interface ListenerTlsAcmCertificate {

		/** Required */
		certificateArn: string;
	}

	/** An object that represents an Certificate Manager certificate. */
	export interface ListenerTlsAcmCertificateFormProperties {

		/** Required */
		certificateArn: FormControl<string | null | undefined>,
	}
	export function CreateListenerTlsAcmCertificateFormGroup() {
		return new FormGroup<ListenerTlsAcmCertificateFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a listener's Transport Layer Security (TLS) validation context. */
	export interface ListenerTlsValidationContext {
		subjectAlternativeNames?: SubjectAlternativeNames;

		/** Required */
		trust: ListenerTlsValidationContextTrust;
	}

	/** An object that represents a listener's Transport Layer Security (TLS) validation context. */
	export interface ListenerTlsValidationContextFormProperties {
	}
	export function CreateListenerTlsValidationContextFormGroup() {
		return new FormGroup<ListenerTlsValidationContextFormProperties>({
		});

	}


	/** An object that represents a listener's Transport Layer Security (TLS) validation context trust. */
	export interface ListenerTlsValidationContextTrust {
		file?: TlsValidationContextFileTrust;
		sds?: TlsValidationContextSdsTrust;
	}

	/** An object that represents a listener's Transport Layer Security (TLS) validation context trust. */
	export interface ListenerTlsValidationContextTrustFormProperties {
	}
	export function CreateListenerTlsValidationContextTrustFormGroup() {
		return new FormGroup<ListenerTlsValidationContextTrustFormProperties>({
		});

	}


	/** An object that represents the logging information for a virtual node. */
	export interface Logging {
		accessLog?: AccessLog;
	}

	/** An object that represents the logging information for a virtual node. */
	export interface LoggingFormProperties {
	}
	export function CreateLoggingFormGroup() {
		return new FormGroup<LoggingFormProperties>({
		});

	}


	/** An object that represents the access logging information for a virtual node. */
	export interface AccessLog {
		file?: FileAccessLog;
	}

	/** An object that represents the access logging information for a virtual node. */
	export interface AccessLogFormProperties {
	}
	export function CreateAccessLogFormGroup() {
		return new FormGroup<AccessLogFormProperties>({
		});

	}


	/** An object that represents an access log file. */
	export interface FileAccessLog {
		format?: LoggingFormat;

		/** Required */
		path: string;
	}

	/** An object that represents an access log file. */
	export interface FileAccessLogFormProperties {

		/** Required */
		path: FormControl<string | null | undefined>,
	}
	export function CreateFileAccessLogFormGroup() {
		return new FormGroup<FileAccessLogFormProperties>({
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the service discovery information for a virtual node. */
	export interface ServiceDiscovery {
		awsCloudMap?: AwsCloudMapServiceDiscovery;
		dns?: DnsServiceDiscovery;
	}

	/** An object that represents the service discovery information for a virtual node. */
	export interface ServiceDiscoveryFormProperties {
	}
	export function CreateServiceDiscoveryFormGroup() {
		return new FormGroup<ServiceDiscoveryFormProperties>({
		});

	}


	/** <p>An object that represents the Cloud Map service discovery information for your virtual node.</p> <note> <p>Cloud Map is not available in the eu-south-1 Region.</p> </note> */
	export interface AwsCloudMapServiceDiscovery {
		attributes?: Array<AwsCloudMapInstanceAttribute>;
		ipPreference?: IpPreference;

		/** Required */
		namespaceName: string;

		/** Required */
		serviceName: string;
	}

	/** <p>An object that represents the Cloud Map service discovery information for your virtual node.</p> <note> <p>Cloud Map is not available in the eu-south-1 Region.</p> </note> */
	export interface AwsCloudMapServiceDiscoveryFormProperties {
		ipPreference: FormControl<IpPreference | null | undefined>,

		/** Required */
		namespaceName: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudMapServiceDiscoveryFormGroup() {
		return new FormGroup<AwsCloudMapServiceDiscoveryFormProperties>({
			ipPreference: new FormControl<IpPreference | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>An object that represents the Cloud Map attribute information for your virtual node.</p> <note> <p>Cloud Map is not available in the eu-south-1 Region.</p> </note> */
	export interface AwsCloudMapInstanceAttribute {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** <p>An object that represents the Cloud Map attribute information for your virtual node.</p> <note> <p>Cloud Map is not available in the eu-south-1 Region.</p> </note> */
	export interface AwsCloudMapInstanceAttributeFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudMapInstanceAttributeFormGroup() {
		return new FormGroup<AwsCloudMapInstanceAttributeFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the DNS service discovery information for your virtual node. */
	export interface DnsServiceDiscovery {

		/** Required */
		hostname: string;
		ipPreference?: IpPreference;
		responseType?: DnsResponseType;
	}

	/** An object that represents the DNS service discovery information for your virtual node. */
	export interface DnsServiceDiscoveryFormProperties {

		/** Required */
		hostname: FormControl<string | null | undefined>,
		ipPreference: FormControl<IpPreference | null | undefined>,
		responseType: FormControl<DnsResponseType | null | undefined>,
	}
	export function CreateDnsServiceDiscoveryFormGroup() {
		return new FormGroup<DnsServiceDiscoveryFormProperties>({
			hostname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ipPreference: new FormControl<IpPreference | null | undefined>(undefined),
			responseType: new FormControl<DnsResponseType | null | undefined>(undefined),
		});

	}

	export enum DnsResponseType { LOADBALANCER = 0, ENDPOINTS = 1 }


	/** An object that represents the current status of the virtual node. */
	export interface VirtualNodeStatus {

		/** Required */
		status: GatewayRouteStatusCode;
	}

	/** An object that represents the current status of the virtual node. */
	export interface VirtualNodeStatusFormProperties {

		/** Required */
		status: FormControl<GatewayRouteStatusCode | null | undefined>,
	}
	export function CreateVirtualNodeStatusFormGroup() {
		return new FormGroup<VirtualNodeStatusFormProperties>({
			status: new FormControl<GatewayRouteStatusCode | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateVirtualRouterOutput {

		/** Required */
		virtualRouter: VirtualRouterData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateVirtualRouterOutputFormProperties {
	}
	export function CreateCreateVirtualRouterOutputFormGroup() {
		return new FormGroup<CreateVirtualRouterOutputFormProperties>({
		});

	}


	/** An object that represents a virtual router returned by a describe operation. */
	export interface VirtualRouterData {

		/** Required */
		meshName: string;

		/** Required */
		metadata: ResourceMetadata;

		/** Required */
		spec: VirtualRouterSpec;

		/** Required */
		status: VirtualRouterStatus;

		/** Required */
		virtualRouterName: string;
	}

	/** An object that represents a virtual router returned by a describe operation. */
	export interface VirtualRouterDataFormProperties {

		/** Required */
		meshName: FormControl<string | null | undefined>,

		/** Required */
		virtualRouterName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualRouterDataFormGroup() {
		return new FormGroup<VirtualRouterDataFormProperties>({
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			virtualRouterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the specification of a virtual router. */
	export interface VirtualRouterSpec {
		listeners?: Array<VirtualRouterListener>;
	}

	/** An object that represents the specification of a virtual router. */
	export interface VirtualRouterSpecFormProperties {
	}
	export function CreateVirtualRouterSpecFormGroup() {
		return new FormGroup<VirtualRouterSpecFormProperties>({
		});

	}


	/** An object that represents a virtual router listener. */
	export interface VirtualRouterListener {

		/**
		 * An object that represents a port mapping.
		 * Required
		 */
		portMapping: PortMapping;
	}

	/** An object that represents a virtual router listener. */
	export interface VirtualRouterListenerFormProperties {
	}
	export function CreateVirtualRouterListenerFormGroup() {
		return new FormGroup<VirtualRouterListenerFormProperties>({
		});

	}


	/** An object that represents the status of a virtual router.  */
	export interface VirtualRouterStatus {

		/** Required */
		status: GatewayRouteStatusCode;
	}

	/** An object that represents the status of a virtual router.  */
	export interface VirtualRouterStatusFormProperties {

		/** Required */
		status: FormControl<GatewayRouteStatusCode | null | undefined>,
	}
	export function CreateVirtualRouterStatusFormGroup() {
		return new FormGroup<VirtualRouterStatusFormProperties>({
			status: new FormControl<GatewayRouteStatusCode | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateVirtualServiceOutput {

		/** Required */
		virtualService: VirtualServiceData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateVirtualServiceOutputFormProperties {
	}
	export function CreateCreateVirtualServiceOutputFormGroup() {
		return new FormGroup<CreateVirtualServiceOutputFormProperties>({
		});

	}


	/** An object that represents a virtual service returned by a describe operation. */
	export interface VirtualServiceData {

		/** Required */
		meshName: string;

		/**
		 * An object that represents metadata for a resource.
		 * Required
		 */
		metadata: ResourceMetadata;

		/** Required */
		spec: VirtualServiceSpec;

		/** Required */
		status: VirtualServiceStatus;

		/** Required */
		virtualServiceName: string;
	}

	/** An object that represents a virtual service returned by a describe operation. */
	export interface VirtualServiceDataFormProperties {

		/** Required */
		meshName: FormControl<string | null | undefined>,

		/** Required */
		virtualServiceName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualServiceDataFormGroup() {
		return new FormGroup<VirtualServiceDataFormProperties>({
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			virtualServiceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the specification of a virtual service. */
	export interface VirtualServiceSpec {
		provider?: VirtualServiceProvider;
	}

	/** An object that represents the specification of a virtual service. */
	export interface VirtualServiceSpecFormProperties {
	}
	export function CreateVirtualServiceSpecFormGroup() {
		return new FormGroup<VirtualServiceSpecFormProperties>({
		});

	}


	/** An object that represents the provider for a virtual service. */
	export interface VirtualServiceProvider {
		virtualNode?: VirtualNodeServiceProvider;
		virtualRouter?: VirtualRouterServiceProvider;
	}

	/** An object that represents the provider for a virtual service. */
	export interface VirtualServiceProviderFormProperties {
	}
	export function CreateVirtualServiceProviderFormGroup() {
		return new FormGroup<VirtualServiceProviderFormProperties>({
		});

	}


	/** An object that represents a virtual node service provider. */
	export interface VirtualNodeServiceProvider {

		/** Required */
		virtualNodeName: string;
	}

	/** An object that represents a virtual node service provider. */
	export interface VirtualNodeServiceProviderFormProperties {

		/** Required */
		virtualNodeName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNodeServiceProviderFormGroup() {
		return new FormGroup<VirtualNodeServiceProviderFormProperties>({
			virtualNodeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a virtual node service provider. */
	export interface VirtualRouterServiceProvider {

		/** Required */
		virtualRouterName: string;
	}

	/** An object that represents a virtual node service provider. */
	export interface VirtualRouterServiceProviderFormProperties {

		/** Required */
		virtualRouterName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualRouterServiceProviderFormGroup() {
		return new FormGroup<VirtualRouterServiceProviderFormProperties>({
			virtualRouterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the status of a virtual service. */
	export interface VirtualServiceStatus {

		/** Required */
		status: GatewayRouteStatusCode;
	}

	/** An object that represents the status of a virtual service. */
	export interface VirtualServiceStatusFormProperties {

		/** Required */
		status: FormControl<GatewayRouteStatusCode | null | undefined>,
	}
	export function CreateVirtualServiceStatusFormGroup() {
		return new FormGroup<VirtualServiceStatusFormProperties>({
			status: new FormControl<GatewayRouteStatusCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteGatewayRouteOutput {

		/** Required */
		gatewayRoute: GatewayRouteData;
	}
	export interface DeleteGatewayRouteOutputFormProperties {
	}
	export function CreateDeleteGatewayRouteOutputFormGroup() {
		return new FormGroup<DeleteGatewayRouteOutputFormProperties>({
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteMeshOutput {

		/** Required */
		mesh: MeshData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteMeshOutputFormProperties {
	}
	export function CreateDeleteMeshOutputFormGroup() {
		return new FormGroup<DeleteMeshOutputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteRouteOutput {

		/** Required */
		route: RouteData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteRouteOutputFormProperties {
	}
	export function CreateDeleteRouteOutputFormGroup() {
		return new FormGroup<DeleteRouteOutputFormProperties>({
		});

	}

	export interface DeleteVirtualGatewayOutput {

		/** Required */
		virtualGateway: VirtualGatewayData;
	}
	export interface DeleteVirtualGatewayOutputFormProperties {
	}
	export function CreateDeleteVirtualGatewayOutputFormGroup() {
		return new FormGroup<DeleteVirtualGatewayOutputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteVirtualNodeOutput {

		/** Required */
		virtualNode: VirtualNodeData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteVirtualNodeOutputFormProperties {
	}
	export function CreateDeleteVirtualNodeOutputFormGroup() {
		return new FormGroup<DeleteVirtualNodeOutputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteVirtualRouterOutput {

		/** Required */
		virtualRouter: VirtualRouterData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteVirtualRouterOutputFormProperties {
	}
	export function CreateDeleteVirtualRouterOutputFormGroup() {
		return new FormGroup<DeleteVirtualRouterOutputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteVirtualServiceOutput {

		/** Required */
		virtualService: VirtualServiceData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteVirtualServiceOutputFormProperties {
	}
	export function CreateDeleteVirtualServiceOutputFormGroup() {
		return new FormGroup<DeleteVirtualServiceOutputFormProperties>({
		});

	}

	export interface DescribeGatewayRouteOutput {

		/** Required */
		gatewayRoute: GatewayRouteData;
	}
	export interface DescribeGatewayRouteOutputFormProperties {
	}
	export function CreateDescribeGatewayRouteOutputFormGroup() {
		return new FormGroup<DescribeGatewayRouteOutputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeMeshOutput {

		/** Required */
		mesh: MeshData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeMeshOutputFormProperties {
	}
	export function CreateDescribeMeshOutputFormGroup() {
		return new FormGroup<DescribeMeshOutputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeRouteOutput {

		/** Required */
		route: RouteData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeRouteOutputFormProperties {
	}
	export function CreateDescribeRouteOutputFormGroup() {
		return new FormGroup<DescribeRouteOutputFormProperties>({
		});

	}

	export interface DescribeVirtualGatewayOutput {

		/** Required */
		virtualGateway: VirtualGatewayData;
	}
	export interface DescribeVirtualGatewayOutputFormProperties {
	}
	export function CreateDescribeVirtualGatewayOutputFormGroup() {
		return new FormGroup<DescribeVirtualGatewayOutputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeVirtualNodeOutput {

		/** Required */
		virtualNode: VirtualNodeData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeVirtualNodeOutputFormProperties {
	}
	export function CreateDescribeVirtualNodeOutputFormGroup() {
		return new FormGroup<DescribeVirtualNodeOutputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeVirtualRouterOutput {

		/** Required */
		virtualRouter: VirtualRouterData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeVirtualRouterOutputFormProperties {
	}
	export function CreateDescribeVirtualRouterOutputFormGroup() {
		return new FormGroup<DescribeVirtualRouterOutputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeVirtualServiceOutput {

		/** Required */
		virtualService: VirtualServiceData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeVirtualServiceOutputFormProperties {
	}
	export function CreateDescribeVirtualServiceOutputFormGroup() {
		return new FormGroup<DescribeVirtualServiceOutputFormProperties>({
		});

	}

	export interface ListGatewayRoutesOutput {

		/** Required */
		gatewayRoutes: Array<GatewayRouteRef>;
		nextToken?: string;
	}
	export interface ListGatewayRoutesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGatewayRoutesOutputFormGroup() {
		return new FormGroup<ListGatewayRoutesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a gateway route returned by a list operation. */
	export interface GatewayRouteRef {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		gatewayRouteName: string;

		/** Required */
		lastUpdatedAt: Date;

		/** Required */
		meshName: string;

		/** Required */
		meshOwner: string;

		/** Required */
		resourceOwner: string;

		/** Required */
		version: number;

		/** Required */
		virtualGatewayName: string;
	}

	/** An object that represents a gateway route returned by a list operation. */
	export interface GatewayRouteRefFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		gatewayRouteName: FormControl<string | null | undefined>,

		/** Required */
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/** Required */
		meshName: FormControl<string | null | undefined>,

		/** Required */
		meshOwner: FormControl<string | null | undefined>,

		/** Required */
		resourceOwner: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<number | null | undefined>,

		/** Required */
		virtualGatewayName: FormControl<string | null | undefined>,
	}
	export function CreateGatewayRouteRefFormGroup() {
		return new FormGroup<GatewayRouteRefFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			gatewayRouteName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			meshOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			virtualGatewayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListMeshesOutput {

		/** Required */
		meshes: Array<MeshRef>;
		nextToken?: string;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListMeshesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMeshesOutputFormGroup() {
		return new FormGroup<ListMeshesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a service mesh returned by a list operation. */
	export interface MeshRef {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		lastUpdatedAt: Date;

		/** Required */
		meshName: string;

		/** Required */
		meshOwner: string;

		/** Required */
		resourceOwner: string;

		/** Required */
		version: number;
	}

	/** An object that represents a service mesh returned by a list operation. */
	export interface MeshRefFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/** Required */
		meshName: FormControl<string | null | undefined>,

		/** Required */
		meshOwner: FormControl<string | null | undefined>,

		/** Required */
		resourceOwner: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<number | null | undefined>,
	}
	export function CreateMeshRefFormGroup() {
		return new FormGroup<MeshRefFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			meshOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListRoutesOutput {
		nextToken?: string;

		/** Required */
		routes: Array<RouteRef>;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListRoutesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRoutesOutputFormGroup() {
		return new FormGroup<ListRoutesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a route returned by a list operation. */
	export interface RouteRef {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		lastUpdatedAt: Date;

		/** Required */
		meshName: string;

		/** Required */
		meshOwner: string;

		/** Required */
		resourceOwner: string;

		/** Required */
		routeName: string;

		/** Required */
		version: number;

		/** Required */
		virtualRouterName: string;
	}

	/** An object that represents a route returned by a list operation. */
	export interface RouteRefFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/** Required */
		meshName: FormControl<string | null | undefined>,

		/** Required */
		meshOwner: FormControl<string | null | undefined>,

		/** Required */
		resourceOwner: FormControl<string | null | undefined>,

		/** Required */
		routeName: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<number | null | undefined>,

		/** Required */
		virtualRouterName: FormControl<string | null | undefined>,
	}
	export function CreateRouteRefFormGroup() {
		return new FormGroup<RouteRefFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			meshOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			routeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			virtualRouterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListTagsForResourceOutput {
		nextToken?: string;

		/** Required */
		tags: Array<TagRef>;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListTagsForResourceOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVirtualGatewaysOutput {
		nextToken?: string;

		/** Required */
		virtualGateways: Array<VirtualGatewayRef>;
	}
	export interface ListVirtualGatewaysOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVirtualGatewaysOutputFormGroup() {
		return new FormGroup<ListVirtualGatewaysOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a virtual gateway returned by a list operation. */
	export interface VirtualGatewayRef {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		lastUpdatedAt: Date;

		/** Required */
		meshName: string;

		/** Required */
		meshOwner: string;

		/** Required */
		resourceOwner: string;

		/** Required */
		version: number;

		/** Required */
		virtualGatewayName: string;
	}

	/** An object that represents a virtual gateway returned by a list operation. */
	export interface VirtualGatewayRefFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/** Required */
		meshName: FormControl<string | null | undefined>,

		/** Required */
		meshOwner: FormControl<string | null | undefined>,

		/** Required */
		resourceOwner: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<number | null | undefined>,

		/** Required */
		virtualGatewayName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualGatewayRefFormGroup() {
		return new FormGroup<VirtualGatewayRefFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			meshOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			virtualGatewayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListVirtualNodesOutput {
		nextToken?: string;

		/** Required */
		virtualNodes: Array<VirtualNodeRef>;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListVirtualNodesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVirtualNodesOutputFormGroup() {
		return new FormGroup<ListVirtualNodesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a virtual node returned by a list operation. */
	export interface VirtualNodeRef {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		lastUpdatedAt: Date;

		/** Required */
		meshName: string;

		/** Required */
		meshOwner: string;

		/** Required */
		resourceOwner: string;

		/** Required */
		version: number;

		/** Required */
		virtualNodeName: string;
	}

	/** An object that represents a virtual node returned by a list operation. */
	export interface VirtualNodeRefFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/** Required */
		meshName: FormControl<string | null | undefined>,

		/** Required */
		meshOwner: FormControl<string | null | undefined>,

		/** Required */
		resourceOwner: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<number | null | undefined>,

		/** Required */
		virtualNodeName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNodeRefFormGroup() {
		return new FormGroup<VirtualNodeRefFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			meshOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			virtualNodeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListVirtualRoutersOutput {
		nextToken?: string;

		/** Required */
		virtualRouters: Array<VirtualRouterRef>;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListVirtualRoutersOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVirtualRoutersOutputFormGroup() {
		return new FormGroup<ListVirtualRoutersOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a virtual router returned by a list operation. */
	export interface VirtualRouterRef {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		lastUpdatedAt: Date;

		/** Required */
		meshName: string;

		/** Required */
		meshOwner: string;

		/** Required */
		resourceOwner: string;

		/** Required */
		version: number;

		/** Required */
		virtualRouterName: string;
	}

	/** An object that represents a virtual router returned by a list operation. */
	export interface VirtualRouterRefFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/** Required */
		meshName: FormControl<string | null | undefined>,

		/** Required */
		meshOwner: FormControl<string | null | undefined>,

		/** Required */
		resourceOwner: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<number | null | undefined>,

		/** Required */
		virtualRouterName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualRouterRefFormGroup() {
		return new FormGroup<VirtualRouterRefFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			meshOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			virtualRouterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListVirtualServicesOutput {
		nextToken?: string;

		/** Required */
		virtualServices: Array<VirtualServiceRef>;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListVirtualServicesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVirtualServicesOutputFormGroup() {
		return new FormGroup<ListVirtualServicesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a virtual service returned by a list operation. */
	export interface VirtualServiceRef {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		lastUpdatedAt: Date;

		/** Required */
		meshName: string;

		/** Required */
		meshOwner: string;

		/** Required */
		resourceOwner: string;

		/** Required */
		version: number;

		/** Required */
		virtualServiceName: string;
	}

	/** An object that represents a virtual service returned by a list operation. */
	export interface VirtualServiceRefFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/** Required */
		meshName: FormControl<string | null | undefined>,

		/** Required */
		meshOwner: FormControl<string | null | undefined>,

		/** Required */
		resourceOwner: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<number | null | undefined>,

		/** Required */
		virtualServiceName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualServiceRefFormGroup() {
		return new FormGroup<VirtualServiceRefFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			meshOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceOwner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			virtualServiceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface TagResourceOutput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
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


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UntagResourceOutput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UpdateGatewayRouteOutput {

		/** Required */
		gatewayRoute: GatewayRouteData;
	}
	export interface UpdateGatewayRouteOutputFormProperties {
	}
	export function CreateUpdateGatewayRouteOutputFormGroup() {
		return new FormGroup<UpdateGatewayRouteOutputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateMeshOutput {

		/**
		 * An object that represents a service mesh returned by a describe operation.
		 * Required
		 */
		mesh: MeshData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateMeshOutputFormProperties {
	}
	export function CreateUpdateMeshOutputFormGroup() {
		return new FormGroup<UpdateMeshOutputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateRouteOutput {

		/** Required */
		route: RouteData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateRouteOutputFormProperties {
	}
	export function CreateUpdateRouteOutputFormGroup() {
		return new FormGroup<UpdateRouteOutputFormProperties>({
		});

	}

	export interface UpdateVirtualGatewayOutput {

		/** Required */
		virtualGateway: VirtualGatewayData;
	}
	export interface UpdateVirtualGatewayOutputFormProperties {
	}
	export function CreateUpdateVirtualGatewayOutputFormGroup() {
		return new FormGroup<UpdateVirtualGatewayOutputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateVirtualNodeOutput {

		/** Required */
		virtualNode: VirtualNodeData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateVirtualNodeOutputFormProperties {
	}
	export function CreateUpdateVirtualNodeOutputFormGroup() {
		return new FormGroup<UpdateVirtualNodeOutputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateVirtualRouterOutput {

		/** Required */
		virtualRouter: VirtualRouterData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateVirtualRouterOutputFormProperties {
	}
	export function CreateUpdateVirtualRouterOutputFormGroup() {
		return new FormGroup<UpdateVirtualRouterOutputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateVirtualServiceOutput {

		/** Required */
		virtualService: VirtualServiceData;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateVirtualServiceOutputFormProperties {
	}
	export function CreateUpdateVirtualServiceOutputFormGroup() {
		return new FormGroup<UpdateVirtualServiceOutputFormProperties>({
		});

	}

	export interface CreateGatewayRouteInput {
		clientToken?: string;

		/** Required */
		gatewayRouteName: string;

		/** Required */
		spec: GatewayRouteSpec;
		tags?: Array<TagRef>;
	}
	export interface CreateGatewayRouteInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		gatewayRouteName: FormControl<string | null | undefined>,
	}
	export function CreateCreateGatewayRouteInputFormGroup() {
		return new FormGroup<CreateGatewayRouteInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			gatewayRouteName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateMeshInput {
		clientToken?: string;

		/** Required */
		meshName: string;
		spec?: MeshSpec;
		tags?: Array<TagRef>;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateMeshInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		meshName: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeshInputFormGroup() {
		return new FormGroup<CreateMeshInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateRouteInput {
		clientToken?: string;

		/** Required */
		routeName: string;

		/** Required */
		spec: RouteSpec;
		tags?: Array<TagRef>;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateRouteInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		routeName: FormControl<string | null | undefined>,
	}
	export function CreateCreateRouteInputFormGroup() {
		return new FormGroup<CreateRouteInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			routeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVirtualGatewayInput {
		clientToken?: string;

		/** Required */
		spec: VirtualGatewaySpec;
		tags?: Array<TagRef>;

		/** Required */
		virtualGatewayName: string;
	}
	export interface CreateVirtualGatewayInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		virtualGatewayName: FormControl<string | null | undefined>,
	}
	export function CreateCreateVirtualGatewayInputFormGroup() {
		return new FormGroup<CreateVirtualGatewayInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			virtualGatewayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateVirtualNodeInput {
		clientToken?: string;

		/** Required */
		spec: VirtualNodeSpec;
		tags?: Array<TagRef>;

		/** Required */
		virtualNodeName: string;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateVirtualNodeInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		virtualNodeName: FormControl<string | null | undefined>,
	}
	export function CreateCreateVirtualNodeInputFormGroup() {
		return new FormGroup<CreateVirtualNodeInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			virtualNodeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateVirtualRouterInput {
		clientToken?: string;

		/** Required */
		spec: VirtualRouterSpec;
		tags?: Array<TagRef>;

		/** Required */
		virtualRouterName: string;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateVirtualRouterInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		virtualRouterName: FormControl<string | null | undefined>,
	}
	export function CreateCreateVirtualRouterInputFormGroup() {
		return new FormGroup<CreateVirtualRouterInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			virtualRouterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateVirtualServiceInput {
		clientToken?: string;

		/** Required */
		spec: VirtualServiceSpec;
		tags?: Array<TagRef>;

		/** Required */
		virtualServiceName: string;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface CreateVirtualServiceInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		virtualServiceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateVirtualServiceInputFormGroup() {
		return new FormGroup<CreateVirtualServiceInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			virtualServiceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteGatewayRouteInput {
	}
	export interface DeleteGatewayRouteInputFormProperties {
	}
	export function CreateDeleteGatewayRouteInputFormGroup() {
		return new FormGroup<DeleteGatewayRouteInputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteMeshInput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteMeshInputFormProperties {
	}
	export function CreateDeleteMeshInputFormGroup() {
		return new FormGroup<DeleteMeshInputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteRouteInput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteRouteInputFormProperties {
	}
	export function CreateDeleteRouteInputFormGroup() {
		return new FormGroup<DeleteRouteInputFormProperties>({
		});

	}

	export interface DeleteVirtualGatewayInput {
	}
	export interface DeleteVirtualGatewayInputFormProperties {
	}
	export function CreateDeleteVirtualGatewayInputFormGroup() {
		return new FormGroup<DeleteVirtualGatewayInputFormProperties>({
		});

	}


	/** Deletes a virtual node input. */
	export interface DeleteVirtualNodeInput {
	}

	/** Deletes a virtual node input. */
	export interface DeleteVirtualNodeInputFormProperties {
	}
	export function CreateDeleteVirtualNodeInputFormGroup() {
		return new FormGroup<DeleteVirtualNodeInputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteVirtualRouterInput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteVirtualRouterInputFormProperties {
	}
	export function CreateDeleteVirtualRouterInputFormGroup() {
		return new FormGroup<DeleteVirtualRouterInputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteVirtualServiceInput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DeleteVirtualServiceInputFormProperties {
	}
	export function CreateDeleteVirtualServiceInputFormGroup() {
		return new FormGroup<DeleteVirtualServiceInputFormProperties>({
		});

	}

	export interface DescribeGatewayRouteInput {
	}
	export interface DescribeGatewayRouteInputFormProperties {
	}
	export function CreateDescribeGatewayRouteInputFormGroup() {
		return new FormGroup<DescribeGatewayRouteInputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeMeshInput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeMeshInputFormProperties {
	}
	export function CreateDescribeMeshInputFormGroup() {
		return new FormGroup<DescribeMeshInputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeRouteInput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeRouteInputFormProperties {
	}
	export function CreateDescribeRouteInputFormGroup() {
		return new FormGroup<DescribeRouteInputFormProperties>({
		});

	}

	export interface DescribeVirtualGatewayInput {
	}
	export interface DescribeVirtualGatewayInputFormProperties {
	}
	export function CreateDescribeVirtualGatewayInputFormGroup() {
		return new FormGroup<DescribeVirtualGatewayInputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeVirtualNodeInput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeVirtualNodeInputFormProperties {
	}
	export function CreateDescribeVirtualNodeInputFormGroup() {
		return new FormGroup<DescribeVirtualNodeInputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeVirtualRouterInput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeVirtualRouterInputFormProperties {
	}
	export function CreateDescribeVirtualRouterInputFormGroup() {
		return new FormGroup<DescribeVirtualRouterInputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeVirtualServiceInput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface DescribeVirtualServiceInputFormProperties {
	}
	export function CreateDescribeVirtualServiceInputFormGroup() {
		return new FormGroup<DescribeVirtualServiceInputFormProperties>({
		});

	}

	export interface ListGatewayRoutesInput {
	}
	export interface ListGatewayRoutesInputFormProperties {
	}
	export function CreateListGatewayRoutesInputFormGroup() {
		return new FormGroup<ListGatewayRoutesInputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListMeshesInput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListMeshesInputFormProperties {
	}
	export function CreateListMeshesInputFormGroup() {
		return new FormGroup<ListMeshesInputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListRoutesInput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListRoutesInputFormProperties {
	}
	export function CreateListRoutesInputFormGroup() {
		return new FormGroup<ListRoutesInputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListTagsForResourceInput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListTagsForResourceInputFormProperties {
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
		});

	}

	export interface ListVirtualGatewaysInput {
	}
	export interface ListVirtualGatewaysInputFormProperties {
	}
	export function CreateListVirtualGatewaysInputFormGroup() {
		return new FormGroup<ListVirtualGatewaysInputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListVirtualNodesInput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListVirtualNodesInputFormProperties {
	}
	export function CreateListVirtualNodesInputFormGroup() {
		return new FormGroup<ListVirtualNodesInputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListVirtualRoutersInput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListVirtualRoutersInputFormProperties {
	}
	export function CreateListVirtualRoutersInputFormGroup() {
		return new FormGroup<ListVirtualRoutersInputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListVirtualServicesInput {
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface ListVirtualServicesInputFormProperties {
	}
	export function CreateListVirtualServicesInputFormGroup() {
		return new FormGroup<ListVirtualServicesInputFormProperties>({
		});

	}

	export enum ListenerTlsMode { STRICT = 0, PERMISSIVE = 1, DISABLED = 2 }

	export enum MeshStatusCode { ACTIVE = 0, INACTIVE = 1, DELETED = 2 }

	export enum RouteStatusCode { ACTIVE = 0, INACTIVE = 1, DELETED = 2 }


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface TagResourceInput {

		/** Required */
		tags: Array<TagRef>;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface TagResourceInputFormProperties {
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UntagResourceInput {

		/** Required */
		tagKeys: Array<string>;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UntagResourceInputFormProperties {
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
		});

	}

	export interface UpdateGatewayRouteInput {
		clientToken?: string;

		/** Required */
		spec: GatewayRouteSpec;
	}
	export interface UpdateGatewayRouteInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayRouteInputFormGroup() {
		return new FormGroup<UpdateGatewayRouteInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateMeshInput {
		clientToken?: string;
		spec?: MeshSpec;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateMeshInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMeshInputFormGroup() {
		return new FormGroup<UpdateMeshInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateRouteInput {
		clientToken?: string;

		/** Required */
		spec: RouteSpec;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateRouteInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRouteInputFormGroup() {
		return new FormGroup<UpdateRouteInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVirtualGatewayInput {
		clientToken?: string;

		/** Required */
		spec: VirtualGatewaySpec;
	}
	export interface UpdateVirtualGatewayInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVirtualGatewayInputFormGroup() {
		return new FormGroup<UpdateVirtualGatewayInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateVirtualNodeInput {
		clientToken?: string;

		/** Required */
		spec: VirtualNodeSpec;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateVirtualNodeInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVirtualNodeInputFormGroup() {
		return new FormGroup<UpdateVirtualNodeInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateVirtualRouterInput {
		clientToken?: string;

		/** Required */
		spec: VirtualRouterSpec;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateVirtualRouterInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVirtualRouterInputFormGroup() {
		return new FormGroup<UpdateVirtualRouterInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateVirtualServiceInput {
		clientToken?: string;

		/** Required */
		spec: VirtualServiceSpec;
	}

	/** <zonbook></zonbook><xhtml></xhtml> */
	export interface UpdateVirtualServiceInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVirtualServiceInputFormGroup() {
		return new FormGroup<UpdateVirtualServiceInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VirtualGatewayStatusCode { ACTIVE = 0, INACTIVE = 1, DELETED = 2 }

	export enum VirtualNodeStatusCode { ACTIVE = 0, INACTIVE = 1, DELETED = 2 }

	export enum VirtualRouterStatusCode { ACTIVE = 0, INACTIVE = 1, DELETED = 2 }

	export enum VirtualServiceStatusCode { ACTIVE = 0, INACTIVE = 1, DELETED = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a gateway route.</p> <p>A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.</p> <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>
		 * Put v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes
		 * @param {string} meshName The name of the service mesh to create the gateway route in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualGatewayName The name of the virtual gateway to associate the gateway route with. If the virtual gateway is in a shared mesh, then you must be the owner of the virtual gateway resource.
		 * @return {CreateGatewayRouteOutput} Success
		 */
		CreateGatewayRoute(meshName: string, meshOwner: string | null | undefined, virtualGatewayName: string, requestBody: CreateGatewayRoutePutBody): Observable<CreateGatewayRouteOutput> {
			return this.http.put<CreateGatewayRouteOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualGateway/' + (virtualGatewayName == null ? '' : encodeURIComponent(virtualGatewayName)) + '/gatewayRoutes&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing gateway routes that are associated to a virtual gateway.
		 * Get v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes
		 * @param {number} limit The maximum number of results returned by <code>ListGatewayRoutes</code> in paginated output. When you use this parameter, <code>ListGatewayRoutes</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListGatewayRoutes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListGatewayRoutes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * @param {string} meshName The name of the service mesh to list gateway routes in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated <code>ListGatewayRoutes</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * @param {string} virtualGatewayName The name of the virtual gateway to list gateway routes in.
		 * @return {ListGatewayRoutesOutput} Success
		 */
		ListGatewayRoutes(limit: number | null | undefined, meshName: string, meshOwner: string | null | undefined, nextToken: string | null | undefined, virtualGatewayName: string): Observable<ListGatewayRoutesOutput> {
			return this.http.get<ListGatewayRoutesOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualGateway/' + (virtualGatewayName == null ? '' : encodeURIComponent(virtualGatewayName)) + '/gatewayRoutes?limit=' + limit + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a service mesh.</p> <p> A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.</p> <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
		 * Put v20190125/meshes
		 * @return {CreateMeshOutput} Success
		 */
		CreateMesh(requestBody: CreateMeshPutBody): Observable<CreateMeshOutput> {
			return this.http.put<CreateMeshOutput>(this.baseUri + 'v20190125/meshes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing service meshes.
		 * Get v20190125/meshes
		 * @param {number} limit The maximum number of results returned by <code>ListMeshes</code> in paginated output. When you use this parameter, <code>ListMeshes</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListMeshes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListMeshes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * @param {string} nextToken <p>The <code>nextToken</code> value returned from a previous paginated <code>ListMeshes</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * @return {ListMeshesOutput} Success
		 */
		ListMeshes(limit: number | null | undefined, nextToken: string | null | undefined): Observable<ListMeshesOutput> {
			return this.http.get<ListMeshesOutput>(this.baseUri + 'v20190125/meshes?limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a route that is associated with a virtual router.</p> <p> You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.</p> <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>
		 * Put v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes
		 * @param {string} meshName The name of the service mesh to create the route in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualRouterName The name of the virtual router in which to create the route. If the virtual router is in a shared mesh, then you must be the owner of the virtual router resource.
		 * @return {CreateRouteOutput} Success
		 */
		CreateRoute(meshName: string, meshOwner: string | null | undefined, virtualRouterName: string, requestBody: CreateRoutePutBody): Observable<CreateRouteOutput> {
			return this.http.put<CreateRouteOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing routes in a service mesh.
		 * Get v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes
		 * @param {number} limit The maximum number of results returned by <code>ListRoutes</code> in paginated output. When you use this parameter, <code>ListRoutes</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListRoutes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListRoutes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * @param {string} meshName The name of the service mesh to list routes in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated <code>ListRoutes</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * @param {string} virtualRouterName The name of the virtual router to list routes in.
		 * @return {ListRoutesOutput} Success
		 */
		ListRoutes(limit: number | null | undefined, meshName: string, meshOwner: string | null | undefined, nextToken: string | null | undefined, virtualRouterName: string): Observable<ListRoutesOutput> {
			return this.http.get<ListRoutesOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes?limit=' + limit + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a virtual gateway.</p> <p>A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.</p> <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>
		 * Put v20190125/meshes/{meshName}/virtualGateways
		 * @param {string} meshName The name of the service mesh to create the virtual gateway in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @return {CreateVirtualGatewayOutput} Success
		 */
		CreateVirtualGateway(meshName: string, meshOwner: string | null | undefined, requestBody: CreateVirtualGatewayPutBody): Observable<CreateVirtualGatewayOutput> {
			return this.http.put<CreateVirtualGatewayOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualGateways&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing virtual gateways in a service mesh.
		 * Get v20190125/meshes/{meshName}/virtualGateways
		 * @param {number} limit The maximum number of results returned by <code>ListVirtualGateways</code> in paginated output. When you use this parameter, <code>ListVirtualGateways</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListVirtualGateways</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListVirtualGateways</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * @param {string} meshName The name of the service mesh to list virtual gateways in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated <code>ListVirtualGateways</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * @return {ListVirtualGatewaysOutput} Success
		 */
		ListVirtualGateways(limit: number | null | undefined, meshName: string, meshOwner: string | null | undefined, nextToken: string | null | undefined): Observable<ListVirtualGatewaysOutput> {
			return this.http.get<ListVirtualGatewaysOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualGateways?limit=' + limit + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a virtual node within a service mesh.</p> <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).</p> <p>You define a <code>listener</code> for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a <code>backend</code>.</p> <p>The response metadata for your new virtual node contains the <code>arn</code> that is associated with the virtual node. Set this value to the full ARN; for example, <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>) as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p> <note> <p>By default, App Mesh uses the name of the resource you specified in <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p> </note> <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy image</a> in the App Mesh User Guide.</p>
		 * Put v20190125/meshes/{meshName}/virtualNodes
		 * @param {string} meshName The name of the service mesh to create the virtual node in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @return {CreateVirtualNodeOutput} Success
		 */
		CreateVirtualNode(meshName: string, meshOwner: string | null | undefined, requestBody: CreateVirtualNodePutBody): Observable<CreateVirtualNodeOutput> {
			return this.http.put<CreateVirtualNodeOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing virtual nodes.
		 * Get v20190125/meshes/{meshName}/virtualNodes
		 * @param {number} limit The maximum number of results returned by <code>ListVirtualNodes</code> in paginated output. When you use this parameter, <code>ListVirtualNodes</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListVirtualNodes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListVirtualNodes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * @param {string} meshName The name of the service mesh to list virtual nodes in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated <code>ListVirtualNodes</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * @return {ListVirtualNodesOutput} Success
		 */
		ListVirtualNodes(limit: number | null | undefined, meshName: string, meshOwner: string | null | undefined, nextToken: string | null | undefined): Observable<ListVirtualNodesOutput> {
			return this.http.get<ListVirtualNodesOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes?limit=' + limit + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a virtual router within a service mesh.</p> <p>Specify a <code>listener</code> for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.</p> <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>
		 * Put v20190125/meshes/{meshName}/virtualRouters
		 * @param {string} meshName The name of the service mesh to create the virtual router in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @return {CreateVirtualRouterOutput} Success
		 */
		CreateVirtualRouter(meshName: string, meshOwner: string | null | undefined, requestBody: CreateVirtualRouterPutBody): Observable<CreateVirtualRouterOutput> {
			return this.http.put<CreateVirtualRouterOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing virtual routers in a service mesh.
		 * Get v20190125/meshes/{meshName}/virtualRouters
		 * @param {number} limit The maximum number of results returned by <code>ListVirtualRouters</code> in paginated output. When you use this parameter, <code>ListVirtualRouters</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListVirtualRouters</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListVirtualRouters</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * @param {string} meshName The name of the service mesh to list virtual routers in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated <code>ListVirtualRouters</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * @return {ListVirtualRoutersOutput} Success
		 */
		ListVirtualRouters(limit: number | null | undefined, meshName: string, meshOwner: string | null | undefined, nextToken: string | null | undefined): Observable<ListVirtualRoutersOutput> {
			return this.http.get<ListVirtualRoutersOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters?limit=' + limit + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a virtual service within a service mesh.</p> <p>A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its <code>virtualServiceName</code>, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.</p> <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
		 * Put v20190125/meshes/{meshName}/virtualServices
		 * @param {string} meshName The name of the service mesh to create the virtual service in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @return {CreateVirtualServiceOutput} Success
		 */
		CreateVirtualService(meshName: string, meshOwner: string | null | undefined, requestBody: CreateVirtualServicePutBody): Observable<CreateVirtualServiceOutput> {
			return this.http.put<CreateVirtualServiceOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualServices&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing virtual services in a service mesh.
		 * Get v20190125/meshes/{meshName}/virtualServices
		 * @param {number} limit The maximum number of results returned by <code>ListVirtualServices</code> in paginated output. When you use this parameter, <code>ListVirtualServices</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListVirtualServices</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListVirtualServices</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * @param {string} meshName The name of the service mesh to list virtual services in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated <code>ListVirtualServices</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * @return {ListVirtualServicesOutput} Success
		 */
		ListVirtualServices(limit: number | null | undefined, meshName: string, meshOwner: string | null | undefined, nextToken: string | null | undefined): Observable<ListVirtualServicesOutput> {
			return this.http.get<ListVirtualServicesOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualServices?limit=' + limit + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Deletes an existing gateway route.
		 * Delete v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}
		 * @param {string} gatewayRouteName The name of the gateway route to delete.
		 * @param {string} meshName The name of the service mesh to delete the gateway route from.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualGatewayName The name of the virtual gateway to delete the route from.
		 * @return {DeleteGatewayRouteOutput} Success
		 */
		DeleteGatewayRoute(gatewayRouteName: string, meshName: string, meshOwner: string | null | undefined, virtualGatewayName: string): Observable<DeleteGatewayRouteOutput> {
			return this.http.delete<DeleteGatewayRouteOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualGateway/' + (virtualGatewayName == null ? '' : encodeURIComponent(virtualGatewayName)) + '/gatewayRoutes/' + (gatewayRouteName == null ? '' : encodeURIComponent(gatewayRouteName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Describes an existing gateway route.
		 * Get v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}
		 * @param {string} gatewayRouteName The name of the gateway route to describe.
		 * @param {string} meshName The name of the service mesh that the gateway route resides in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualGatewayName The name of the virtual gateway that the gateway route is associated with.
		 * @return {DescribeGatewayRouteOutput} Success
		 */
		DescribeGatewayRoute(gatewayRouteName: string, meshName: string, meshOwner: string | null | undefined, virtualGatewayName: string): Observable<DescribeGatewayRouteOutput> {
			return this.http.get<DescribeGatewayRouteOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualGateway/' + (virtualGatewayName == null ? '' : encodeURIComponent(virtualGatewayName)) + '/gatewayRoutes/' + (gatewayRouteName == null ? '' : encodeURIComponent(gatewayRouteName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.
		 * Put v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}
		 * @param {string} gatewayRouteName The name of the gateway route to update.
		 * @param {string} meshName The name of the service mesh that the gateway route resides in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualGatewayName The name of the virtual gateway that the gateway route is associated with.
		 * @return {UpdateGatewayRouteOutput} Success
		 */
		UpdateGatewayRoute(gatewayRouteName: string, meshName: string, meshOwner: string | null | undefined, virtualGatewayName: string, requestBody: UpdateGatewayRoutePutBody): Observable<UpdateGatewayRouteOutput> {
			return this.http.put<UpdateGatewayRouteOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualGateway/' + (virtualGatewayName == null ? '' : encodeURIComponent(virtualGatewayName)) + '/gatewayRoutes/' + (gatewayRouteName == null ? '' : encodeURIComponent(gatewayRouteName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing service mesh.</p> <p>You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</p>
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
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @return {DescribeMeshOutput} Success
		 */
		DescribeMesh(meshName: string, meshOwner: string | null | undefined): Observable<DescribeMeshOutput> {
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
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} routeName The name of the route to delete.
		 * @param {string} virtualRouterName The name of the virtual router to delete the route in.
		 * @return {DeleteRouteOutput} Success
		 */
		DeleteRoute(meshName: string, meshOwner: string | null | undefined, routeName: string, virtualRouterName: string): Observable<DeleteRouteOutput> {
			return this.http.delete<DeleteRouteOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes/' + (routeName == null ? '' : encodeURIComponent(routeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Describes an existing route.
		 * Get v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}
		 * @param {string} meshName The name of the service mesh that the route resides in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} routeName The name of the route to describe.
		 * @param {string} virtualRouterName The name of the virtual router that the route is associated with.
		 * @return {DescribeRouteOutput} Success
		 */
		DescribeRoute(meshName: string, meshOwner: string | null | undefined, routeName: string, virtualRouterName: string): Observable<DescribeRouteOutput> {
			return this.http.get<DescribeRouteOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes/' + (routeName == null ? '' : encodeURIComponent(routeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Updates an existing route for a specified service mesh and virtual router.
		 * Put v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}
		 * @param {string} meshName The name of the service mesh that the route resides in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} routeName The name of the route to update.
		 * @param {string} virtualRouterName The name of the virtual router that the route is associated with.
		 * @return {UpdateRouteOutput} Success
		 */
		UpdateRoute(meshName: string, meshOwner: string | null | undefined, routeName: string, virtualRouterName: string, requestBody: UpdateRoutePutBody): Observable<UpdateRouteOutput> {
			return this.http.put<UpdateRouteOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes/' + (routeName == null ? '' : encodeURIComponent(routeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway routes are associated to it.
		 * Delete v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}
		 * @param {string} meshName The name of the service mesh to delete the virtual gateway from.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualGatewayName The name of the virtual gateway to delete.
		 * @return {DeleteVirtualGatewayOutput} Success
		 */
		DeleteVirtualGateway(meshName: string, meshOwner: string | null | undefined, virtualGatewayName: string): Observable<DeleteVirtualGatewayOutput> {
			return this.http.delete<DeleteVirtualGatewayOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualGateways/' + (virtualGatewayName == null ? '' : encodeURIComponent(virtualGatewayName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Describes an existing virtual gateway.
		 * Get v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}
		 * @param {string} meshName The name of the service mesh that the gateway route resides in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualGatewayName The name of the virtual gateway to describe.
		 * @return {DescribeVirtualGatewayOutput} Success
		 */
		DescribeVirtualGateway(meshName: string, meshOwner: string | null | undefined, virtualGatewayName: string): Observable<DescribeVirtualGatewayOutput> {
			return this.http.get<DescribeVirtualGatewayOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualGateways/' + (virtualGatewayName == null ? '' : encodeURIComponent(virtualGatewayName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Updates an existing virtual gateway in a specified service mesh.
		 * Put v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}
		 * @param {string} meshName The name of the service mesh that the virtual gateway resides in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualGatewayName The name of the virtual gateway to update.
		 * @return {UpdateVirtualGatewayOutput} Success
		 */
		UpdateVirtualGateway(meshName: string, meshOwner: string | null | undefined, virtualGatewayName: string, requestBody: UpdateVirtualGatewayPutBody): Observable<UpdateVirtualGatewayOutput> {
			return this.http.put<UpdateVirtualGatewayOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualGateways/' + (virtualGatewayName == null ? '' : encodeURIComponent(virtualGatewayName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing virtual node.</p> <p>You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</p>
		 * Delete v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}
		 * @param {string} meshName The name of the service mesh to delete the virtual node in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualNodeName The name of the virtual node to delete.
		 * @return {DeleteVirtualNodeOutput} Success
		 */
		DeleteVirtualNode(meshName: string, meshOwner: string | null | undefined, virtualNodeName: string): Observable<DeleteVirtualNodeOutput> {
			return this.http.delete<DeleteVirtualNodeOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes/' + (virtualNodeName == null ? '' : encodeURIComponent(virtualNodeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Describes an existing virtual node.
		 * Get v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}
		 * @param {string} meshName The name of the service mesh that the virtual node resides in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualNodeName The name of the virtual node to describe.
		 * @return {DescribeVirtualNodeOutput} Success
		 */
		DescribeVirtualNode(meshName: string, meshOwner: string | null | undefined, virtualNodeName: string): Observable<DescribeVirtualNodeOutput> {
			return this.http.get<DescribeVirtualNodeOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes/' + (virtualNodeName == null ? '' : encodeURIComponent(virtualNodeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Updates an existing virtual node in a specified service mesh.
		 * Put v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}
		 * @param {string} meshName The name of the service mesh that the virtual node resides in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualNodeName The name of the virtual node to update.
		 * @return {UpdateVirtualNodeOutput} Success
		 */
		UpdateVirtualNode(meshName: string, meshOwner: string | null | undefined, virtualNodeName: string, requestBody: UpdateVirtualNodePutBody): Observable<UpdateVirtualNodeOutput> {
			return this.http.put<UpdateVirtualNodeOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes/' + (virtualNodeName == null ? '' : encodeURIComponent(virtualNodeName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing virtual router.</p> <p>You must delete any routes associated with the virtual router before you can delete the router itself.</p>
		 * Delete v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}
		 * @param {string} meshName The name of the service mesh to delete the virtual router in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualRouterName The name of the virtual router to delete.
		 * @return {DeleteVirtualRouterOutput} Success
		 */
		DeleteVirtualRouter(meshName: string, meshOwner: string | null | undefined, virtualRouterName: string): Observable<DeleteVirtualRouterOutput> {
			return this.http.delete<DeleteVirtualRouterOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Describes an existing virtual router.
		 * Get v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}
		 * @param {string} meshName The name of the service mesh that the virtual router resides in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualRouterName The name of the virtual router to describe.
		 * @return {DescribeVirtualRouterOutput} Success
		 */
		DescribeVirtualRouter(meshName: string, meshOwner: string | null | undefined, virtualRouterName: string): Observable<DescribeVirtualRouterOutput> {
			return this.http.get<DescribeVirtualRouterOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Updates an existing virtual router in a specified service mesh.
		 * Put v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}
		 * @param {string} meshName The name of the service mesh that the virtual router resides in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualRouterName The name of the virtual router to update.
		 * @return {UpdateVirtualRouterOutput} Success
		 */
		UpdateVirtualRouter(meshName: string, meshOwner: string | null | undefined, virtualRouterName: string, requestBody: UpdateVirtualRouterPutBody): Observable<UpdateVirtualRouterOutput> {
			return this.http.put<UpdateVirtualRouterOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing virtual service.
		 * Delete v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}
		 * @param {string} meshName The name of the service mesh to delete the virtual service in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualServiceName The name of the virtual service to delete.
		 * @return {DeleteVirtualServiceOutput} Success
		 */
		DeleteVirtualService(meshName: string, meshOwner: string | null | undefined, virtualServiceName: string): Observable<DeleteVirtualServiceOutput> {
			return this.http.delete<DeleteVirtualServiceOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualServices/' + (virtualServiceName == null ? '' : encodeURIComponent(virtualServiceName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Describes an existing virtual service.
		 * Get v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}
		 * @param {string} meshName The name of the service mesh that the virtual service resides in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualServiceName The name of the virtual service to describe.
		 * @return {DescribeVirtualServiceOutput} Success
		 */
		DescribeVirtualService(meshName: string, meshOwner: string | null | undefined, virtualServiceName: string): Observable<DescribeVirtualServiceOutput> {
			return this.http.get<DescribeVirtualServiceOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualServices/' + (virtualServiceName == null ? '' : encodeURIComponent(virtualServiceName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), {});
		}

		/**
		 * Updates an existing virtual service in a specified service mesh.
		 * Put v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}
		 * @param {string} meshName The name of the service mesh that the virtual service resides in.
		 * @param {string} meshOwner The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
		 * @param {string} virtualServiceName The name of the virtual service to update.
		 * @return {UpdateVirtualServiceOutput} Success
		 */
		UpdateVirtualService(meshName: string, meshOwner: string | null | undefined, virtualServiceName: string, requestBody: UpdateVirtualServicePutBody): Observable<UpdateVirtualServiceOutput> {
			return this.http.put<UpdateVirtualServiceOutput>(this.baseUri + 'v20190125/meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualServices/' + (virtualServiceName == null ? '' : encodeURIComponent(virtualServiceName)) + '&meshOwner=' + (meshOwner == null ? '' : encodeURIComponent(meshOwner)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the tags for an App Mesh resource.
		 * Get v20190125/tags#resourceArn
		 * @param {number} limit The maximum number of tag results returned by <code>ListTagsForResource</code> in paginated output. When this parameter is used, <code>ListTagsForResource</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListTagsForResource</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListTagsForResource</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated <code>ListTagsForResource</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * @param {string} resourceArn The Amazon Resource Name (ARN) that identifies the resource to list the tags for.
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(limit: number | null | undefined, nextToken: string | null | undefined, resourceArn: string): Observable<ListTagsForResourceOutput> {
			return this.http.get<ListTagsForResourceOutput>(this.baseUri + 'v20190125/tags#resourceArn?limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.
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

	export interface CreateGatewayRoutePutBody {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken?: string | null;

		/**
		 * The name to use for the gateway route.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		gatewayRouteName: string;

		/**
		 * An object that represents a gateway route specification. Specify one gateway route type.
		 * Required
		 */
		spec: CreateGatewayRoutePutBodySpec;

		/**
		 * Optional metadata that you can apply to the gateway route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;
	}
	export interface CreateGatewayRoutePutBodyFormProperties {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The name to use for the gateway route.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		gatewayRouteName: FormControl<string | null | undefined>,
	}
	export function CreateCreateGatewayRoutePutBodyFormGroup() {
		return new FormGroup<CreateGatewayRoutePutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			gatewayRouteName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateGatewayRoutePutBodySpec {
		grpcRoute?: GrpcGatewayRoute;
		http2Route?: HttpGatewayRoute;
		httpRoute?: HttpGatewayRoute;
		priority?: number | null;
	}
	export interface CreateGatewayRoutePutBodySpecFormProperties {
		priority: FormControl<number | null | undefined>,
	}
	export function CreateCreateGatewayRoutePutBodySpecFormGroup() {
		return new FormGroup<CreateGatewayRoutePutBodySpecFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateMeshPutBody {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken?: string | null;

		/**
		 * The name to use for the service mesh.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: string;

		/** An object that represents the specification of a service mesh. */
		spec?: CreateMeshPutBodySpec;

		/**
		 * Optional metadata that you can apply to the service mesh to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;
	}
	export interface CreateMeshPutBodyFormProperties {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The name to use for the service mesh.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeshPutBodyFormGroup() {
		return new FormGroup<CreateMeshPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateMeshPutBodySpec {
		egressFilter?: EgressFilter;

		/** An object that represents the service discovery information for a service mesh. */
		serviceDiscovery?: MeshServiceDiscovery;
	}
	export interface CreateMeshPutBodySpecFormProperties {
	}
	export function CreateCreateMeshPutBodySpecFormGroup() {
		return new FormGroup<CreateMeshPutBodySpecFormProperties>({
		});

	}

	export interface CreateRoutePutBody {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
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
		 * Optional metadata that you can apply to the route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;
	}
	export interface CreateRoutePutBodyFormProperties {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The name to use for the route.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		routeName: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoutePutBodyFormGroup() {
		return new FormGroup<CreateRoutePutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			routeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateRoutePutBodySpec {
		grpcRoute?: GrpcRoute;
		http2Route?: HttpRoute;
		httpRoute?: HttpRoute;
		priority?: number | null;
		tcpRoute?: TcpRoute;
	}
	export interface CreateRoutePutBodySpecFormProperties {
		priority: FormControl<number | null | undefined>,
	}
	export function CreateCreateRoutePutBodySpecFormGroup() {
		return new FormGroup<CreateRoutePutBodySpecFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateVirtualGatewayPutBody {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a service mesh resource.
		 * Required
		 */
		spec: CreateVirtualGatewayPutBodySpec;

		/**
		 * Optional metadata that you can apply to the virtual gateway to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;

		/**
		 * The name to use for the virtual gateway.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualGatewayName: string;
	}
	export interface CreateVirtualGatewayPutBodyFormProperties {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The name to use for the virtual gateway.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualGatewayName: FormControl<string | null | undefined>,
	}
	export function CreateCreateVirtualGatewayPutBodyFormGroup() {
		return new FormGroup<CreateVirtualGatewayPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			virtualGatewayName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateVirtualGatewayPutBodySpec {
		backendDefaults?: VirtualGatewayBackendDefaults;
		listeners?: Array<VirtualGatewayListener>;

		/** An object that represents logging information. */
		logging?: VirtualGatewayLogging;
	}
	export interface CreateVirtualGatewayPutBodySpecFormProperties {
	}
	export function CreateCreateVirtualGatewayPutBodySpecFormGroup() {
		return new FormGroup<CreateVirtualGatewayPutBodySpecFormProperties>({
		});

	}

	export interface CreateVirtualNodePutBody {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual node.
		 * Required
		 */
		spec: CreateVirtualNodePutBodySpec;

		/**
		 * Optional metadata that you can apply to the virtual node to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;

		/**
		 * The name to use for the virtual node.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualNodeName: string;
	}
	export interface CreateVirtualNodePutBodyFormProperties {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The name to use for the virtual node.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualNodeName: FormControl<string | null | undefined>,
	}
	export function CreateCreateVirtualNodePutBodyFormGroup() {
		return new FormGroup<CreateVirtualNodePutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			virtualNodeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateVirtualNodePutBodySpec {
		backendDefaults?: BackendDefaults;
		backends?: Array<Backend>;
		listeners?: Array<Listener>;
		logging?: Logging;
		serviceDiscovery?: ServiceDiscovery;
	}
	export interface CreateVirtualNodePutBodySpecFormProperties {
	}
	export function CreateCreateVirtualNodePutBodySpecFormGroup() {
		return new FormGroup<CreateVirtualNodePutBodySpecFormProperties>({
		});

	}

	export interface CreateVirtualRouterPutBody {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual router.
		 * Required
		 */
		spec: CreateVirtualRouterPutBodySpec;

		/**
		 * Optional metadata that you can apply to the virtual router to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;

		/**
		 * The name to use for the virtual router.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualRouterName: string;
	}
	export interface CreateVirtualRouterPutBodyFormProperties {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The name to use for the virtual router.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualRouterName: FormControl<string | null | undefined>,
	}
	export function CreateCreateVirtualRouterPutBodyFormGroup() {
		return new FormGroup<CreateVirtualRouterPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			virtualRouterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CreateVirtualRouterPutBodySpec {
		listeners?: Array<VirtualRouterListener>;
	}
	export interface CreateVirtualRouterPutBodySpecFormProperties {
	}
	export function CreateCreateVirtualRouterPutBodySpecFormGroup() {
		return new FormGroup<CreateVirtualRouterPutBodySpecFormProperties>({
		});

	}

	export interface CreateVirtualServicePutBody {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual service.
		 * Required
		 */
		spec: CreateVirtualServicePutBodySpec;

		/**
		 * Optional metadata that you can apply to the virtual service to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;

		/**
		 * The name to use for the virtual service.
		 * Required
		 */
		virtualServiceName: string;
	}
	export interface CreateVirtualServicePutBodyFormProperties {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The name to use for the virtual service.
		 * Required
		 */
		virtualServiceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateVirtualServicePutBodyFormGroup() {
		return new FormGroup<CreateVirtualServicePutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			virtualServiceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVirtualServicePutBodySpec {
		provider?: VirtualServiceProvider;
	}
	export interface CreateVirtualServicePutBodySpecFormProperties {
	}
	export function CreateCreateVirtualServicePutBodySpecFormGroup() {
		return new FormGroup<CreateVirtualServicePutBodySpecFormProperties>({
		});

	}

	export interface UpdateGatewayRoutePutBody {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken?: string | null;

		/**
		 * An object that represents a gateway route specification. Specify one gateway route type.
		 * Required
		 */
		spec: UpdateGatewayRoutePutBodySpec;
	}
	export interface UpdateGatewayRoutePutBodyFormProperties {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayRoutePutBodyFormGroup() {
		return new FormGroup<UpdateGatewayRoutePutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGatewayRoutePutBodySpec {
		grpcRoute?: GrpcGatewayRoute;
		http2Route?: HttpGatewayRoute;
		httpRoute?: HttpGatewayRoute;
		priority?: number | null;
	}
	export interface UpdateGatewayRoutePutBodySpecFormProperties {
		priority: FormControl<number | null | undefined>,
	}
	export function CreateUpdateGatewayRoutePutBodySpecFormGroup() {
		return new FormGroup<UpdateGatewayRoutePutBodySpecFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateMeshPutBody {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken?: string | null;

		/** An object that represents the specification of a service mesh. */
		spec?: UpdateMeshPutBodySpec;
	}
	export interface UpdateMeshPutBodyFormProperties {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMeshPutBodyFormGroup() {
		return new FormGroup<UpdateMeshPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMeshPutBodySpec {
		egressFilter?: EgressFilter;

		/** An object that represents the service discovery information for a service mesh. */
		serviceDiscovery?: MeshServiceDiscovery;
	}
	export interface UpdateMeshPutBodySpecFormProperties {
	}
	export function CreateUpdateMeshPutBodySpecFormGroup() {
		return new FormGroup<UpdateMeshPutBodySpecFormProperties>({
		});

	}

	export interface UpdateRoutePutBody {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken?: string | null;

		/**
		 * An object that represents a route specification. Specify one route type.
		 * Required
		 */
		spec: UpdateRoutePutBodySpec;
	}
	export interface UpdateRoutePutBodyFormProperties {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoutePutBodyFormGroup() {
		return new FormGroup<UpdateRoutePutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRoutePutBodySpec {
		grpcRoute?: GrpcRoute;
		http2Route?: HttpRoute;
		httpRoute?: HttpRoute;
		priority?: number | null;
		tcpRoute?: TcpRoute;
	}
	export interface UpdateRoutePutBodySpecFormProperties {
		priority: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRoutePutBodySpecFormGroup() {
		return new FormGroup<UpdateRoutePutBodySpecFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateVirtualGatewayPutBody {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a service mesh resource.
		 * Required
		 */
		spec: UpdateVirtualGatewayPutBodySpec;
	}
	export interface UpdateVirtualGatewayPutBodyFormProperties {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVirtualGatewayPutBodyFormGroup() {
		return new FormGroup<UpdateVirtualGatewayPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVirtualGatewayPutBodySpec {
		backendDefaults?: VirtualGatewayBackendDefaults;
		listeners?: Array<VirtualGatewayListener>;

		/** An object that represents logging information. */
		logging?: VirtualGatewayLogging;
	}
	export interface UpdateVirtualGatewayPutBodySpecFormProperties {
	}
	export function CreateUpdateVirtualGatewayPutBodySpecFormGroup() {
		return new FormGroup<UpdateVirtualGatewayPutBodySpecFormProperties>({
		});

	}

	export interface UpdateVirtualNodePutBody {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual node.
		 * Required
		 */
		spec: UpdateVirtualNodePutBodySpec;
	}
	export interface UpdateVirtualNodePutBodyFormProperties {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVirtualNodePutBodyFormGroup() {
		return new FormGroup<UpdateVirtualNodePutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVirtualNodePutBodySpec {
		backendDefaults?: BackendDefaults;
		backends?: Array<Backend>;
		listeners?: Array<Listener>;
		logging?: Logging;
		serviceDiscovery?: ServiceDiscovery;
	}
	export interface UpdateVirtualNodePutBodySpecFormProperties {
	}
	export function CreateUpdateVirtualNodePutBodySpecFormGroup() {
		return new FormGroup<UpdateVirtualNodePutBodySpecFormProperties>({
		});

	}

	export interface UpdateVirtualRouterPutBody {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual router.
		 * Required
		 */
		spec: UpdateVirtualRouterPutBodySpec;
	}
	export interface UpdateVirtualRouterPutBodyFormProperties {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVirtualRouterPutBodyFormGroup() {
		return new FormGroup<UpdateVirtualRouterPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVirtualRouterPutBodySpec {
		listeners?: Array<VirtualRouterListener>;
	}
	export interface UpdateVirtualRouterPutBodySpecFormProperties {
	}
	export function CreateUpdateVirtualRouterPutBodySpecFormGroup() {
		return new FormGroup<UpdateVirtualRouterPutBodySpecFormProperties>({
		});

	}

	export interface UpdateVirtualServicePutBody {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual service.
		 * Required
		 */
		spec: UpdateVirtualServicePutBodySpec;
	}
	export interface UpdateVirtualServicePutBodyFormProperties {

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVirtualServicePutBodyFormGroup() {
		return new FormGroup<UpdateVirtualServicePutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVirtualServicePutBodySpec {
		provider?: VirtualServiceProvider;
	}
	export interface UpdateVirtualServicePutBodySpecFormProperties {
	}
	export function CreateUpdateVirtualServicePutBodySpecFormGroup() {
		return new FormGroup<UpdateVirtualServicePutBodySpecFormProperties>({
		});

	}

	export interface TagResourcePutBody {

		/**
		 * The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags: Array<TagRef>;
	}
	export interface TagResourcePutBodyFormProperties {
	}
	export function CreateTagResourcePutBodyFormGroup() {
		return new FormGroup<TagResourcePutBodyFormProperties>({
		});

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
	export interface UntagResourcePutBodyFormProperties {
	}
	export function CreateUntagResourcePutBodyFormGroup() {
		return new FormGroup<UntagResourcePutBodyFormProperties>({
		});

	}

}

