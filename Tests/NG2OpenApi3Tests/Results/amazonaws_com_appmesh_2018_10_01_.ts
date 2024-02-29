import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateMeshOutput {
		mesh?: MeshData;
	}
	export interface CreateMeshOutputFormProperties {
	}
	export function CreateCreateMeshOutputFormGroup() {
		return new FormGroup<CreateMeshOutputFormProperties>({
		});

	}


	/** An object representing a service mesh returned by a describe operation. */
	export interface MeshData {

		/** Required */
		meshName: string;

		/** Required */
		metadata: ResourceMetadata;
		status?: MeshStatus;
	}

	/** An object representing a service mesh returned by a describe operation. */
	export interface MeshDataFormProperties {

		/** Required */
		meshName: FormControl<string | null | undefined>,
	}
	export function CreateMeshDataFormGroup() {
		return new FormGroup<MeshDataFormProperties>({
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object representing metadata for a resource. */
	export interface ResourceMetadata {
		arn?: string;
		createdAt?: Date;
		lastUpdatedAt?: Date;
		uid?: string;
		version?: number | null;
	}

	/** An object representing metadata for a resource. */
	export interface ResourceMetadataFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		uid: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateResourceMetadataFormGroup() {
		return new FormGroup<ResourceMetadataFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object representing the status of a service mesh. */
	export interface MeshStatus {
		status?: MeshStatusCode;
	}

	/** An object representing the status of a service mesh. */
	export interface MeshStatusFormProperties {
		status: FormControl<MeshStatusCode | null | undefined>,
	}
	export function CreateMeshStatusFormGroup() {
		return new FormGroup<MeshStatusFormProperties>({
			status: new FormControl<MeshStatusCode | null | undefined>(undefined),
		});

	}

	export enum MeshStatusCode { ACTIVE = 'ACTIVE', DELETED = 'DELETED', INACTIVE = 'INACTIVE' }

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

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
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

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
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

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface CreateRouteOutput {
		route?: RouteData;
	}
	export interface CreateRouteOutputFormProperties {
	}
	export function CreateCreateRouteOutputFormGroup() {
		return new FormGroup<CreateRouteOutputFormProperties>({
		});

	}


	/** An object representing a route returned by a describe operation. */
	export interface RouteData {

		/** Required */
		meshName: string;
		metadata?: ResourceMetadata;

		/** Required */
		routeName: string;
		spec?: RouteSpec;
		status?: RouteStatus;

		/** Required */
		virtualRouterName: string;
	}

	/** An object representing a route returned by a describe operation. */
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


	/** An object representing the specification of a route. */
	export interface RouteSpec {
		httpRoute?: HttpRoute;
	}

	/** An object representing the specification of a route. */
	export interface RouteSpecFormProperties {
	}
	export function CreateRouteSpecFormGroup() {
		return new FormGroup<RouteSpecFormProperties>({
		});

	}


	/** An object representing the HTTP routing specification for a route. */
	export interface HttpRoute {
		action?: HttpRouteAction;
		match?: HttpRouteMatch;
	}

	/** An object representing the HTTP routing specification for a route. */
	export interface HttpRouteFormProperties {
	}
	export function CreateHttpRouteFormGroup() {
		return new FormGroup<HttpRouteFormProperties>({
		});

	}


	/**
	 * An object representing the traffic distribution requirements for matched HTTP
	 *          requests.
	 */
	export interface HttpRouteAction {
		weightedTargets?: Array<WeightedTarget>;
	}

	/**
	 * An object representing the traffic distribution requirements for matched HTTP
	 *          requests.
	 */
	export interface HttpRouteActionFormProperties {
	}
	export function CreateHttpRouteActionFormGroup() {
		return new FormGroup<HttpRouteActionFormProperties>({
		});

	}


	/**
	 * An object representing a target and its relative weight. Traffic is distributed across
	 *          targets according to their relative weight. For example, a weighted target with a relative
	 *          weight of 50 receives five times as much traffic as one with a relative weight of
	 *          10.
	 */
	export interface WeightedTarget {
		virtualNode?: string;
		weight?: number | null;
	}

	/**
	 * An object representing a target and its relative weight. Traffic is distributed across
	 *          targets according to their relative weight. For example, a weighted target with a relative
	 *          weight of 50 receives five times as much traffic as one with a relative weight of
	 *          10.
	 */
	export interface WeightedTargetFormProperties {
		virtualNode: FormControl<string | null | undefined>,
		weight: FormControl<number | null | undefined>,
	}
	export function CreateWeightedTargetFormGroup() {
		return new FormGroup<WeightedTargetFormProperties>({
			virtualNode: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * An object representing the requirements for a route to match HTTP requests for a virtual
	 *          router.
	 */
	export interface HttpRouteMatch {
		prefix?: string;
	}

	/**
	 * An object representing the requirements for a route to match HTTP requests for a virtual
	 *          router.
	 */
	export interface HttpRouteMatchFormProperties {
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateHttpRouteMatchFormGroup() {
		return new FormGroup<HttpRouteMatchFormProperties>({
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing the current status of a route. */
	export interface RouteStatus {
		status?: MeshStatusCode;
	}

	/** An object representing the current status of a route. */
	export interface RouteStatusFormProperties {
		status: FormControl<MeshStatusCode | null | undefined>,
	}
	export function CreateRouteStatusFormGroup() {
		return new FormGroup<RouteStatusFormProperties>({
			status: new FormControl<MeshStatusCode | null | undefined>(undefined),
		});

	}

	export interface CreateVirtualNodeOutput {
		virtualNode?: VirtualNodeData;
	}
	export interface CreateVirtualNodeOutputFormProperties {
	}
	export function CreateCreateVirtualNodeOutputFormGroup() {
		return new FormGroup<CreateVirtualNodeOutputFormProperties>({
		});

	}


	/** An object representing a virtual node returned by a describe operation. */
	export interface VirtualNodeData {

		/** Required */
		meshName: string;
		metadata?: ResourceMetadata;
		spec?: VirtualNodeSpec;
		status?: VirtualNodeStatus;

		/** Required */
		virtualNodeName: string;
	}

	/** An object representing a virtual node returned by a describe operation. */
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


	/** An object representing the specification of a virtual node. */
	export interface VirtualNodeSpec {
		backends?: Array<string>;
		listeners?: Array<Listener>;
		serviceDiscovery?: ServiceDiscovery;
	}

	/** An object representing the specification of a virtual node. */
	export interface VirtualNodeSpecFormProperties {
	}
	export function CreateVirtualNodeSpecFormGroup() {
		return new FormGroup<VirtualNodeSpecFormProperties>({
		});

	}


	/** An object representing a listener for a virtual node. */
	export interface Listener {
		healthCheck?: HealthCheckPolicy;
		portMapping?: PortMapping;
	}

	/** An object representing a listener for a virtual node. */
	export interface ListenerFormProperties {
	}
	export function CreateListenerFormGroup() {
		return new FormGroup<ListenerFormProperties>({
		});

	}


	/** An object representing the health check policy for a virtual node's listener. */
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

	/** An object representing the health check policy for a virtual node's listener. */
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

	export enum PortProtocol { http = 'http', tcp = 'tcp' }


	/** An object representing a virtual node listener port mapping. */
	export interface PortMapping {
		port?: number | null;
		protocol?: PortProtocol;
	}

	/** An object representing a virtual node listener port mapping. */
	export interface PortMappingFormProperties {
		port: FormControl<number | null | undefined>,
		protocol: FormControl<PortProtocol | null | undefined>,
	}
	export function CreatePortMappingFormGroup() {
		return new FormGroup<PortMappingFormProperties>({
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<PortProtocol | null | undefined>(undefined),
		});

	}


	/** An object representing the service discovery information for a virtual node. */
	export interface ServiceDiscovery {
		dns?: DnsServiceDiscovery;
	}

	/** An object representing the service discovery information for a virtual node. */
	export interface ServiceDiscoveryFormProperties {
	}
	export function CreateServiceDiscoveryFormGroup() {
		return new FormGroup<ServiceDiscoveryFormProperties>({
		});

	}


	/** The DNS service discovery information for your virtual node. */
	export interface DnsServiceDiscovery {
		serviceName?: string;
	}

	/** The DNS service discovery information for your virtual node. */
	export interface DnsServiceDiscoveryFormProperties {
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateDnsServiceDiscoveryFormGroup() {
		return new FormGroup<DnsServiceDiscoveryFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing the current status of the virtual node. */
	export interface VirtualNodeStatus {
		status?: MeshStatusCode;
	}

	/** An object representing the current status of the virtual node. */
	export interface VirtualNodeStatusFormProperties {
		status: FormControl<MeshStatusCode | null | undefined>,
	}
	export function CreateVirtualNodeStatusFormGroup() {
		return new FormGroup<VirtualNodeStatusFormProperties>({
			status: new FormControl<MeshStatusCode | null | undefined>(undefined),
		});

	}

	export interface CreateVirtualRouterOutput {
		virtualRouter?: VirtualRouterData;
	}
	export interface CreateVirtualRouterOutputFormProperties {
	}
	export function CreateCreateVirtualRouterOutputFormGroup() {
		return new FormGroup<CreateVirtualRouterOutputFormProperties>({
		});

	}


	/** An object representing a virtual router returned by a describe operation. */
	export interface VirtualRouterData {

		/** Required */
		meshName: string;
		metadata?: ResourceMetadata;
		spec?: VirtualRouterSpec;
		status?: VirtualRouterStatus;

		/** Required */
		virtualRouterName: string;
	}

	/** An object representing a virtual router returned by a describe operation. */
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


	/** An object representing the specification of a virtual router. */
	export interface VirtualRouterSpec {
		serviceNames?: Array<string>;
	}

	/** An object representing the specification of a virtual router. */
	export interface VirtualRouterSpecFormProperties {
	}
	export function CreateVirtualRouterSpecFormGroup() {
		return new FormGroup<VirtualRouterSpecFormProperties>({
		});

	}


	/** An object representing the status of a virtual router.  */
	export interface VirtualRouterStatus {
		status?: MeshStatusCode;
	}

	/** An object representing the status of a virtual router.  */
	export interface VirtualRouterStatusFormProperties {
		status: FormControl<MeshStatusCode | null | undefined>,
	}
	export function CreateVirtualRouterStatusFormGroup() {
		return new FormGroup<VirtualRouterStatusFormProperties>({
			status: new FormControl<MeshStatusCode | null | undefined>(undefined),
		});

	}

	export interface DeleteMeshOutput {
		mesh?: MeshData;
	}
	export interface DeleteMeshOutputFormProperties {
	}
	export function CreateDeleteMeshOutputFormGroup() {
		return new FormGroup<DeleteMeshOutputFormProperties>({
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

	export interface DeleteRouteOutput {
		route?: RouteData;
	}
	export interface DeleteRouteOutputFormProperties {
	}
	export function CreateDeleteRouteOutputFormGroup() {
		return new FormGroup<DeleteRouteOutputFormProperties>({
		});

	}

	export interface DeleteVirtualNodeOutput {
		virtualNode?: VirtualNodeData;
	}
	export interface DeleteVirtualNodeOutputFormProperties {
	}
	export function CreateDeleteVirtualNodeOutputFormGroup() {
		return new FormGroup<DeleteVirtualNodeOutputFormProperties>({
		});

	}

	export interface DeleteVirtualRouterOutput {
		virtualRouter?: VirtualRouterData;
	}
	export interface DeleteVirtualRouterOutputFormProperties {
	}
	export function CreateDeleteVirtualRouterOutputFormGroup() {
		return new FormGroup<DeleteVirtualRouterOutputFormProperties>({
		});

	}

	export interface DescribeMeshOutput {
		mesh?: MeshData;
	}
	export interface DescribeMeshOutputFormProperties {
	}
	export function CreateDescribeMeshOutputFormGroup() {
		return new FormGroup<DescribeMeshOutputFormProperties>({
		});

	}

	export interface DescribeRouteOutput {
		route?: RouteData;
	}
	export interface DescribeRouteOutputFormProperties {
	}
	export function CreateDescribeRouteOutputFormGroup() {
		return new FormGroup<DescribeRouteOutputFormProperties>({
		});

	}

	export interface DescribeVirtualNodeOutput {
		virtualNode?: VirtualNodeData;
	}
	export interface DescribeVirtualNodeOutputFormProperties {
	}
	export function CreateDescribeVirtualNodeOutputFormGroup() {
		return new FormGroup<DescribeVirtualNodeOutputFormProperties>({
		});

	}

	export interface DescribeVirtualRouterOutput {
		virtualRouter?: VirtualRouterData;
	}
	export interface DescribeVirtualRouterOutputFormProperties {
	}
	export function CreateDescribeVirtualRouterOutputFormGroup() {
		return new FormGroup<DescribeVirtualRouterOutputFormProperties>({
		});

	}

	export interface ListMeshesOutput {

		/** Required */
		meshes: Array<MeshRef>;
		nextToken?: string;
	}
	export interface ListMeshesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMeshesOutputFormGroup() {
		return new FormGroup<ListMeshesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing a service mesh returned by a list operation. */
	export interface MeshRef {
		arn?: string;
		meshName?: string;
	}

	/** An object representing a service mesh returned by a list operation. */
	export interface MeshRefFormProperties {
		arn: FormControl<string | null | undefined>,
		meshName: FormControl<string | null | undefined>,
	}
	export function CreateMeshRefFormGroup() {
		return new FormGroup<MeshRefFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			meshName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRoutesOutput {
		nextToken?: string;

		/** Required */
		routes: Array<RouteRef>;
	}
	export interface ListRoutesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRoutesOutputFormGroup() {
		return new FormGroup<ListRoutesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing a route returned by a list operation. */
	export interface RouteRef {
		arn?: string;
		meshName?: string;
		routeName?: string;
		virtualRouterName?: string;
	}

	/** An object representing a route returned by a list operation. */
	export interface RouteRefFormProperties {
		arn: FormControl<string | null | undefined>,
		meshName: FormControl<string | null | undefined>,
		routeName: FormControl<string | null | undefined>,
		virtualRouterName: FormControl<string | null | undefined>,
	}
	export function CreateRouteRefFormGroup() {
		return new FormGroup<RouteRefFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			meshName: new FormControl<string | null | undefined>(undefined),
			routeName: new FormControl<string | null | undefined>(undefined),
			virtualRouterName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVirtualNodesOutput {
		nextToken?: string;

		/** Required */
		virtualNodes: Array<VirtualNodeRef>;
	}
	export interface ListVirtualNodesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVirtualNodesOutputFormGroup() {
		return new FormGroup<ListVirtualNodesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing a virtual node returned by a list operation. */
	export interface VirtualNodeRef {
		arn?: string;
		meshName?: string;
		virtualNodeName?: string;
	}

	/** An object representing a virtual node returned by a list operation. */
	export interface VirtualNodeRefFormProperties {
		arn: FormControl<string | null | undefined>,
		meshName: FormControl<string | null | undefined>,
		virtualNodeName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNodeRefFormGroup() {
		return new FormGroup<VirtualNodeRefFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			meshName: new FormControl<string | null | undefined>(undefined),
			virtualNodeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVirtualRoutersOutput {
		nextToken?: string;

		/** Required */
		virtualRouters: Array<VirtualRouterRef>;
	}
	export interface ListVirtualRoutersOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVirtualRoutersOutputFormGroup() {
		return new FormGroup<ListVirtualRoutersOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing a virtual router returned by a list operation. */
	export interface VirtualRouterRef {
		arn?: string;
		meshName?: string;
		virtualRouterName?: string;
	}

	/** An object representing a virtual router returned by a list operation. */
	export interface VirtualRouterRefFormProperties {
		arn: FormControl<string | null | undefined>,
		meshName: FormControl<string | null | undefined>,
		virtualRouterName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualRouterRefFormGroup() {
		return new FormGroup<VirtualRouterRefFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			meshName: new FormControl<string | null | undefined>(undefined),
			virtualRouterName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRouteOutput {
		route?: RouteData;
	}
	export interface UpdateRouteOutputFormProperties {
	}
	export function CreateUpdateRouteOutputFormGroup() {
		return new FormGroup<UpdateRouteOutputFormProperties>({
		});

	}

	export interface UpdateVirtualNodeOutput {
		virtualNode?: VirtualNodeData;
	}
	export interface UpdateVirtualNodeOutputFormProperties {
	}
	export function CreateUpdateVirtualNodeOutputFormGroup() {
		return new FormGroup<UpdateVirtualNodeOutputFormProperties>({
		});

	}

	export interface UpdateVirtualRouterOutput {
		virtualRouter?: VirtualRouterData;
	}
	export interface UpdateVirtualRouterOutputFormProperties {
	}
	export function CreateUpdateVirtualRouterOutputFormGroup() {
		return new FormGroup<UpdateVirtualRouterOutputFormProperties>({
		});

	}

	export interface DeleteVirtualNodeInput {
	}
	export interface DeleteVirtualNodeInputFormProperties {
	}
	export function CreateDeleteVirtualNodeInputFormGroup() {
		return new FormGroup<DeleteVirtualNodeInputFormProperties>({
		});

	}

	export interface DescribeVirtualRouterInput {
	}
	export interface DescribeVirtualRouterInputFormProperties {
	}
	export function CreateDescribeVirtualRouterInputFormGroup() {
		return new FormGroup<DescribeVirtualRouterInputFormProperties>({
		});

	}

	export interface CreateVirtualRouterInput {
		clientToken?: string;

		/** Required */
		spec: VirtualRouterSpec;

		/** Required */
		virtualRouterName: string;
	}
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

	export enum RouteStatusCode { ACTIVE = 'ACTIVE', DELETED = 'DELETED', INACTIVE = 'INACTIVE' }

	export interface ListMeshesInput {
	}
	export interface ListMeshesInputFormProperties {
	}
	export function CreateListMeshesInputFormGroup() {
		return new FormGroup<ListMeshesInputFormProperties>({
		});

	}

	export enum VirtualRouterStatusCode { ACTIVE = 'ACTIVE', DELETED = 'DELETED', INACTIVE = 'INACTIVE' }

	export interface UpdateVirtualNodeInput {
		clientToken?: string;

		/** Required */
		spec: VirtualNodeSpec;
	}
	export interface UpdateVirtualNodeInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVirtualNodeInputFormGroup() {
		return new FormGroup<UpdateVirtualNodeInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRouteInput {
	}
	export interface DeleteRouteInputFormProperties {
	}
	export function CreateDeleteRouteInputFormGroup() {
		return new FormGroup<DeleteRouteInputFormProperties>({
		});

	}

	export interface ListRoutesInput {
	}
	export interface ListRoutesInputFormProperties {
	}
	export function CreateListRoutesInputFormGroup() {
		return new FormGroup<ListRoutesInputFormProperties>({
		});

	}

	export interface DescribeVirtualNodeInput {
	}
	export interface DescribeVirtualNodeInputFormProperties {
	}
	export function CreateDescribeVirtualNodeInputFormGroup() {
		return new FormGroup<DescribeVirtualNodeInputFormProperties>({
		});

	}

	export interface UpdateVirtualRouterInput {
		clientToken?: string;

		/** Required */
		spec: VirtualRouterSpec;
	}
	export interface UpdateVirtualRouterInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVirtualRouterInputFormGroup() {
		return new FormGroup<UpdateVirtualRouterInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRouteInput {
	}
	export interface DescribeRouteInputFormProperties {
	}
	export function CreateDescribeRouteInputFormGroup() {
		return new FormGroup<DescribeRouteInputFormProperties>({
		});

	}

	export interface CreateMeshInput {
		clientToken?: string;

		/** Required */
		meshName: string;
	}
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

	export enum VirtualNodeStatusCode { ACTIVE = 'ACTIVE', DELETED = 'DELETED', INACTIVE = 'INACTIVE' }

	export interface DeleteVirtualRouterInput {
	}
	export interface DeleteVirtualRouterInputFormProperties {
	}
	export function CreateDeleteVirtualRouterInputFormGroup() {
		return new FormGroup<DeleteVirtualRouterInputFormProperties>({
		});

	}

	export interface UpdateRouteInput {
		clientToken?: string;

		/** Required */
		spec: RouteSpec;
	}
	export interface UpdateRouteInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRouteInputFormGroup() {
		return new FormGroup<UpdateRouteInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMeshInput {
	}
	export interface DescribeMeshInputFormProperties {
	}
	export function CreateDescribeMeshInputFormGroup() {
		return new FormGroup<DescribeMeshInputFormProperties>({
		});

	}

	export interface ListVirtualRoutersInput {
	}
	export interface ListVirtualRoutersInputFormProperties {
	}
	export function CreateListVirtualRoutersInputFormGroup() {
		return new FormGroup<ListVirtualRoutersInputFormProperties>({
		});

	}

	export interface CreateVirtualNodeInput {
		clientToken?: string;

		/** Required */
		spec: VirtualNodeSpec;

		/** Required */
		virtualNodeName: string;
	}
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

	export interface DeleteMeshInput {
	}
	export interface DeleteMeshInputFormProperties {
	}
	export function CreateDeleteMeshInputFormGroup() {
		return new FormGroup<DeleteMeshInputFormProperties>({
		});

	}

	export interface CreateRouteInput {
		clientToken?: string;

		/** Required */
		routeName: string;

		/** Required */
		spec: RouteSpec;
	}
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

	export interface ListVirtualNodesInput {
	}
	export interface ListVirtualNodesInputFormProperties {
	}
	export function CreateListVirtualNodesInputFormGroup() {
		return new FormGroup<ListVirtualNodesInputFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a new service mesh. A service mesh is a logical boundary for network traffic
		 * between the services that reside within it.</p>
		 * <p>After you create your service mesh, you can create virtual nodes, virtual routers, and
		 * routes to distribute traffic between the applications in your mesh.</p>
		 * Put meshes
		 * @return {CreateMeshOutput} Success
		 */
		CreateMesh(requestBody: CreateMeshPutBody): Observable<CreateMeshOutput> {
			return this.http.put<CreateMeshOutput>(this.baseUri + 'meshes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing service meshes.
		 * Get meshes
		 * @param {number} limit The maximum number of mesh results returned by <code>ListMeshes</code> in paginated
		 *          output. When this parameter is used, <code>ListMeshes</code> only returns
		 *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
		 *          element. The remaining results of the initial request can be seen by sending another
		 *             <code>ListMeshes</code> request with the returned <code>nextToken</code> value. This
		 *          value can be between 1 and 100. If this parameter is not
		 *          used, then <code>ListMeshes</code> returns up to 100 results and a
		 *             <code>nextToken</code> value if applicable.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken <p>The <code>nextToken</code> value returned from a previous paginated
		 *          <code>ListMeshes</code> request where <code>limit</code> was used and the
		 *          results exceeded the value of that parameter. Pagination continues from the end of the
		 *          previous results that returned the <code>nextToken</code> value.</p>
		 *          <note>
		 *             <p>This token should be treated as an opaque identifier that is only used to
		 *                 retrieve the next items in a list and not for other programmatic purposes.</p>
		 *         </note>
		 * @return {ListMeshesOutput} Success
		 */
		ListMeshes(limit: number | null | undefined, nextToken: string | null | undefined): Observable<ListMeshesOutput> {
			return this.http.get<ListMeshesOutput>(this.baseUri + 'meshes?limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a new route that is associated with a virtual router.</p>
		 * <p>You can use the <code>prefix</code> parameter in your route specification for path-based
		 * routing of requests. For example, if your virtual router service name is
		 * <code>my-service.local</code>, and you want the route to match requests to
		 * <code>my-service.local/metrics</code>, then your prefix should be
		 * <code>/metrics</code>.</p>
		 * <p>If your route matches a request, you can distribute traffic to one or more target
		 * virtual nodes with relative weighting.</p>
		 * Put meshes/{meshName}/virtualRouter/{virtualRouterName}/routes
		 * @param {string} meshName The name of the service mesh in which to create the route.
		 *     Min length: 1    Max length: 255
		 * @param {string} virtualRouterName The name of the virtual router in which to create the route.
		 *     Min length: 1    Max length: 255
		 * @return {CreateRouteOutput} Success
		 */
		CreateRoute(meshName: string, virtualRouterName: string, requestBody: CreateRoutePutBody): Observable<CreateRouteOutput> {
			return this.http.put<CreateRouteOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing routes in a service mesh.
		 * Get meshes/{meshName}/virtualRouter/{virtualRouterName}/routes
		 * @param {number} limit The maximum number of mesh results returned by <code>ListRoutes</code> in paginated
		 *          output. When this parameter is used, <code>ListRoutes</code> only returns
		 *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
		 *          element. The remaining results of the initial request can be seen by sending another
		 *             <code>ListRoutes</code> request with the returned <code>nextToken</code> value. This
		 *          value can be between 1 and 100. If this parameter is not
		 *          used, then <code>ListRoutes</code> returns up to 100 results and a
		 *             <code>nextToken</code> value if applicable.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} meshName The name of the service mesh in which to list routes.
		 *     Min length: 1    Max length: 255
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated
		 *          <code>ListRoutes</code> request where <code>limit</code> was used and the
		 *          results exceeded the value of that parameter. Pagination continues from the end of the
		 *          previous results that returned the <code>nextToken</code> value.
		 * @param {string} virtualRouterName The name of the virtual router in which to list routes.
		 *     Min length: 1    Max length: 255
		 * @return {ListRoutesOutput} Success
		 */
		ListRoutes(limit: number | null | undefined, meshName: string, nextToken: string | null | undefined, virtualRouterName: string): Observable<ListRoutesOutput> {
			return this.http.get<ListRoutesOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes?limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a new virtual node within a service mesh.</p>
		 * <p>A virtual node acts as logical pointer to a particular task group, such as an Amazon ECS
		 * service or a Kubernetes deployment. When you create a virtual node, you must specify the
		 * DNS service discovery name for your task group.</p>
		 * <p>Any inbound traffic that your virtual node expects should be specified as a
		 * <code>listener</code>. Any outbound traffic that your virtual node expects to reach
		 * should be specified as a <code>backend</code>.</p>
		 * <p>The response metadata for your new virtual node contains the <code>arn</code> that is
		 * associated with the virtual node. Set this value (either the full ARN or the truncated
		 * resource name, for example, <code>mesh/default/virtualNode/simpleapp</code>, as the
		 * <code>APPMESH_VIRTUAL_NODE_NAME</code> environment variable for your task group's Envoy
		 * proxy container in your task definition or pod spec. This is then mapped to the
		 * <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p>
		 * <note>
		 * <p>If you require your Envoy stats or tracing to use a different name, you can override
		 * the <code>node.cluster</code> value that is set by
		 * <code>APPMESH_VIRTUAL_NODE_NAME</code> with the
		 * <code>APPMESH_VIRTUAL_NODE_CLUSTER</code> environment variable.</p>
		 * </note>
		 * Put meshes/{meshName}/virtualNodes
		 * @param {string} meshName The name of the service mesh in which to create the virtual node.
		 *     Min length: 1    Max length: 255
		 * @return {CreateVirtualNodeOutput} Success
		 */
		CreateVirtualNode(meshName: string, requestBody: CreateVirtualNodePutBody): Observable<CreateVirtualNodeOutput> {
			return this.http.put<CreateVirtualNodeOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing virtual nodes.
		 * Get meshes/{meshName}/virtualNodes
		 * @param {number} limit The maximum number of mesh results returned by <code>ListVirtualNodes</code> in
		 *          paginated output. When this parameter is used, <code>ListVirtualNodes</code> only returns
		 *          <code>limit</code> results in a single page along with a <code>nextToken</code>
		 *          response element. The remaining results of the initial request can be seen by sending
		 *          another <code>ListVirtualNodes</code> request with the returned <code>nextToken</code>
		 *          value. This value can be between 1 and 100. If this
		 *          parameter is not used, then <code>ListVirtualNodes</code> returns up to
		 *          100 results and a <code>nextToken</code> value if applicable.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} meshName The name of the service mesh in which to list virtual nodes.
		 *     Min length: 1    Max length: 255
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated
		 *          <code>ListVirtualNodes</code> request where <code>limit</code> was used and the
		 *          results exceeded the value of that parameter. Pagination continues from the end of the
		 *          previous results that returned the <code>nextToken</code> value.
		 * @return {ListVirtualNodesOutput} Success
		 */
		ListVirtualNodes(limit: number | null | undefined, meshName: string, nextToken: string | null | undefined): Observable<ListVirtualNodesOutput> {
			return this.http.get<ListVirtualNodesOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes?limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a new virtual router within a service mesh.</p>
		 * <p>Virtual routers handle traffic for one or more service names within your mesh. After you
		 * create your virtual router, create and associate routes for your virtual router that direct
		 * incoming requests to different virtual nodes.</p>
		 * Put meshes/{meshName}/virtualRouters
		 * @param {string} meshName The name of the service mesh in which to create the virtual router.
		 *     Min length: 1    Max length: 255
		 * @return {CreateVirtualRouterOutput} Success
		 */
		CreateVirtualRouter(meshName: string, requestBody: CreateVirtualRouterPutBody): Observable<CreateVirtualRouterOutput> {
			return this.http.put<CreateVirtualRouterOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing virtual routers in a service mesh.
		 * Get meshes/{meshName}/virtualRouters
		 * @param {number} limit The maximum number of mesh results returned by <code>ListVirtualRouters</code> in
		 *          paginated output. When this parameter is used, <code>ListVirtualRouters</code> only returns
		 *          <code>limit</code> results in a single page along with a <code>nextToken</code>
		 *          response element. The remaining results of the initial request can be seen by sending
		 *          another <code>ListVirtualRouters</code> request with the returned <code>nextToken</code>
		 *          value. This value can be between 1 and 100. If this
		 *          parameter is not used, then <code>ListVirtualRouters</code> returns up to
		 *          100 results and a <code>nextToken</code> value if applicable.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} meshName The name of the service mesh in which to list virtual routers.
		 *     Min length: 1    Max length: 255
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated
		 *          <code>ListVirtualRouters</code> request where <code>limit</code> was used and the
		 *          results exceeded the value of that parameter. Pagination continues from the end of the
		 *          previous results that returned the <code>nextToken</code> value.
		 * @return {ListVirtualRoutersOutput} Success
		 */
		ListVirtualRouters(limit: number | null | undefined, meshName: string, nextToken: string | null | undefined): Observable<ListVirtualRoutersOutput> {
			return this.http.get<ListVirtualRoutersOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters?limit=' + limit + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Deletes an existing service mesh.</p>
		 * <p>You must delete all resources (routes, virtual routers, virtual nodes) in the service
		 * mesh before you can delete the mesh itself.</p>
		 * Delete meshes/{meshName}
		 * @param {string} meshName The name of the service mesh to delete.
		 *     Min length: 1    Max length: 255
		 * @return {DeleteMeshOutput} Success
		 */
		DeleteMesh(meshName: string): Observable<DeleteMeshOutput> {
			return this.http.delete<DeleteMeshOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)), {});
		}

		/**
		 * Describes an existing service mesh.
		 * Get meshes/{meshName}
		 * @param {string} meshName The name of the service mesh to describe.
		 *     Min length: 1    Max length: 255
		 * @return {DescribeMeshOutput} Success
		 */
		DescribeMesh(meshName: string): Observable<DescribeMeshOutput> {
			return this.http.get<DescribeMeshOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)), {});
		}

		/**
		 * Deletes an existing route.
		 * Delete meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}
		 * @param {string} meshName The name of the service mesh in which to delete the route.
		 *     Min length: 1    Max length: 255
		 * @param {string} routeName The name of the route to delete.
		 *     Min length: 1    Max length: 255
		 * @param {string} virtualRouterName The name of the virtual router in which to delete the route.
		 *     Min length: 1    Max length: 255
		 * @return {DeleteRouteOutput} Success
		 */
		DeleteRoute(meshName: string, routeName: string, virtualRouterName: string): Observable<DeleteRouteOutput> {
			return this.http.delete<DeleteRouteOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes/' + (routeName == null ? '' : encodeURIComponent(routeName)), {});
		}

		/**
		 * Describes an existing route.
		 * Get meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}
		 * @param {string} meshName The name of the service mesh in which the route resides.
		 *     Min length: 1    Max length: 255
		 * @param {string} routeName The name of the route to describe.
		 *     Min length: 1    Max length: 255
		 * @param {string} virtualRouterName The name of the virtual router with which the route is associated.
		 *     Min length: 1    Max length: 255
		 * @return {DescribeRouteOutput} Success
		 */
		DescribeRoute(meshName: string, routeName: string, virtualRouterName: string): Observable<DescribeRouteOutput> {
			return this.http.get<DescribeRouteOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes/' + (routeName == null ? '' : encodeURIComponent(routeName)), {});
		}

		/**
		 * Updates an existing route for a specified service mesh and virtual router.
		 * Put meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}
		 * @param {string} meshName The name of the service mesh in which the route resides.
		 *     Min length: 1    Max length: 255
		 * @param {string} routeName The name of the route to update.
		 *     Min length: 1    Max length: 255
		 * @param {string} virtualRouterName The name of the virtual router with which the route is associated.
		 *     Min length: 1    Max length: 255
		 * @return {UpdateRouteOutput} Success
		 */
		UpdateRoute(meshName: string, routeName: string, virtualRouterName: string, requestBody: UpdateRoutePutBody): Observable<UpdateRouteOutput> {
			return this.http.put<UpdateRouteOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouter/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)) + '/routes/' + (routeName == null ? '' : encodeURIComponent(routeName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing virtual node.
		 * Delete meshes/{meshName}/virtualNodes/{virtualNodeName}
		 * @param {string} meshName The name of the service mesh in which to delete the virtual node.
		 *     Min length: 1    Max length: 255
		 * @param {string} virtualNodeName The name of the virtual node to delete.
		 *     Min length: 1    Max length: 255
		 * @return {DeleteVirtualNodeOutput} Success
		 */
		DeleteVirtualNode(meshName: string, virtualNodeName: string): Observable<DeleteVirtualNodeOutput> {
			return this.http.delete<DeleteVirtualNodeOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes/' + (virtualNodeName == null ? '' : encodeURIComponent(virtualNodeName)), {});
		}

		/**
		 * Describes an existing virtual node.
		 * Get meshes/{meshName}/virtualNodes/{virtualNodeName}
		 * @param {string} meshName The name of the service mesh in which the virtual node resides.
		 *     Min length: 1    Max length: 255
		 * @param {string} virtualNodeName The name of the virtual node to describe.
		 *     Min length: 1    Max length: 255
		 * @return {DescribeVirtualNodeOutput} Success
		 */
		DescribeVirtualNode(meshName: string, virtualNodeName: string): Observable<DescribeVirtualNodeOutput> {
			return this.http.get<DescribeVirtualNodeOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes/' + (virtualNodeName == null ? '' : encodeURIComponent(virtualNodeName)), {});
		}

		/**
		 * Updates an existing virtual node in a specified service mesh.
		 * Put meshes/{meshName}/virtualNodes/{virtualNodeName}
		 * @param {string} meshName The name of the service mesh in which the virtual node resides.
		 *     Min length: 1    Max length: 255
		 * @param {string} virtualNodeName The name of the virtual node to update.
		 *     Min length: 1    Max length: 255
		 * @return {UpdateVirtualNodeOutput} Success
		 */
		UpdateVirtualNode(meshName: string, virtualNodeName: string, requestBody: UpdateVirtualNodePutBody): Observable<UpdateVirtualNodeOutput> {
			return this.http.put<UpdateVirtualNodeOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualNodes/' + (virtualNodeName == null ? '' : encodeURIComponent(virtualNodeName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing virtual router.</p>
		 * <p>You must delete any routes associated with the virtual router before you can delete the
		 * router itself.</p>
		 * Delete meshes/{meshName}/virtualRouters/{virtualRouterName}
		 * @param {string} meshName The name of the service mesh in which to delete the virtual router.
		 *     Min length: 1    Max length: 255
		 * @param {string} virtualRouterName The name of the virtual router to delete.
		 *     Min length: 1    Max length: 255
		 * @return {DeleteVirtualRouterOutput} Success
		 */
		DeleteVirtualRouter(meshName: string, virtualRouterName: string): Observable<DeleteVirtualRouterOutput> {
			return this.http.delete<DeleteVirtualRouterOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)), {});
		}

		/**
		 * Describes an existing virtual router.
		 * Get meshes/{meshName}/virtualRouters/{virtualRouterName}
		 * @param {string} meshName The name of the service mesh in which the virtual router resides.
		 *     Min length: 1    Max length: 255
		 * @param {string} virtualRouterName The name of the virtual router to describe.
		 *     Min length: 1    Max length: 255
		 * @return {DescribeVirtualRouterOutput} Success
		 */
		DescribeVirtualRouter(meshName: string, virtualRouterName: string): Observable<DescribeVirtualRouterOutput> {
			return this.http.get<DescribeVirtualRouterOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)), {});
		}

		/**
		 * Updates an existing virtual router in a specified service mesh.
		 * Put meshes/{meshName}/virtualRouters/{virtualRouterName}
		 * @param {string} meshName The name of the service mesh in which the virtual router resides.
		 *     Min length: 1    Max length: 255
		 * @param {string} virtualRouterName The name of the virtual router to update.
		 *     Min length: 1    Max length: 255
		 * @return {UpdateVirtualRouterOutput} Success
		 */
		UpdateVirtualRouter(meshName: string, virtualRouterName: string, requestBody: UpdateVirtualRouterPutBody): Observable<UpdateVirtualRouterOutput> {
			return this.http.put<UpdateVirtualRouterOutput>(this.baseUri + 'meshes/' + (meshName == null ? '' : encodeURIComponent(meshName)) + '/virtualRouters/' + (virtualRouterName == null ? '' : encodeURIComponent(virtualRouterName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Min length: 1
		 * Max length: 255
		 */
		meshName: string;
	}
	export interface CreateMeshPutBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The name to use for the service mesh.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		meshName: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeshPutBodyFormGroup() {
		return new FormGroup<CreateMeshPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

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
		 * Min length: 1
		 * Max length: 255
		 */
		routeName: string;

		/**
		 * An object representing the specification of a route.
		 * Required
		 */
		spec: CreateRoutePutBodySpec;
	}
	export interface CreateRoutePutBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The name to use for the route.
		 * Required
		 * Min length: 1
		 * Max length: 255
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
		httpRoute?: HttpRoute;
	}
	export interface CreateRoutePutBodySpecFormProperties {
	}
	export function CreateCreateRoutePutBodySpecFormGroup() {
		return new FormGroup<CreateRoutePutBodySpecFormProperties>({
		});

	}

	export interface CreateVirtualNodePutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string | null;

		/**
		 * An object representing the specification of a virtual node.
		 * Required
		 */
		spec: CreateVirtualNodePutBodySpec;

		/**
		 * The name to use for the virtual node.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		virtualNodeName: string;
	}
	export interface CreateVirtualNodePutBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The name to use for the virtual node.
		 * Required
		 * Min length: 1
		 * Max length: 255
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
		backends?: Array<string>;
		listeners?: Array<Listener>;
		serviceDiscovery?: ServiceDiscovery;
	}
	export interface CreateVirtualNodePutBodySpecFormProperties {
	}
	export function CreateCreateVirtualNodePutBodySpecFormGroup() {
		return new FormGroup<CreateVirtualNodePutBodySpecFormProperties>({
		});

	}

	export interface CreateVirtualRouterPutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string | null;

		/**
		 * An object representing the specification of a virtual router.
		 * Required
		 */
		spec: CreateVirtualRouterPutBodySpec;

		/**
		 * The name to use for the virtual router.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		virtualRouterName: string;
	}
	export interface CreateVirtualRouterPutBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The name to use for the virtual router.
		 * Required
		 * Min length: 1
		 * Max length: 255
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
		serviceNames?: Array<string>;
	}
	export interface CreateVirtualRouterPutBodySpecFormProperties {
	}
	export function CreateCreateVirtualRouterPutBodySpecFormGroup() {
		return new FormGroup<CreateVirtualRouterPutBodySpecFormProperties>({
		});

	}

	export interface UpdateRoutePutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string | null;

		/**
		 * An object representing the specification of a route.
		 * Required
		 */
		spec: UpdateRoutePutBodySpec;
	}
	export interface UpdateRoutePutBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoutePutBodyFormGroup() {
		return new FormGroup<UpdateRoutePutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRoutePutBodySpec {
		httpRoute?: HttpRoute;
	}
	export interface UpdateRoutePutBodySpecFormProperties {
	}
	export function CreateUpdateRoutePutBodySpecFormGroup() {
		return new FormGroup<UpdateRoutePutBodySpecFormProperties>({
		});

	}

	export interface UpdateVirtualNodePutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string | null;

		/**
		 * An object representing the specification of a virtual node.
		 * Required
		 */
		spec: UpdateVirtualNodePutBodySpec;
	}
	export interface UpdateVirtualNodePutBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVirtualNodePutBodyFormGroup() {
		return new FormGroup<UpdateVirtualNodePutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVirtualNodePutBodySpec {
		backends?: Array<string>;
		listeners?: Array<Listener>;
		serviceDiscovery?: ServiceDiscovery;
	}
	export interface UpdateVirtualNodePutBodySpecFormProperties {
	}
	export function CreateUpdateVirtualNodePutBodySpecFormGroup() {
		return new FormGroup<UpdateVirtualNodePutBodySpecFormProperties>({
		});

	}

	export interface UpdateVirtualRouterPutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string | null;

		/**
		 * An object representing the specification of a virtual router.
		 * Required
		 */
		spec: UpdateVirtualRouterPutBodySpec;
	}
	export interface UpdateVirtualRouterPutBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVirtualRouterPutBodyFormGroup() {
		return new FormGroup<UpdateVirtualRouterPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVirtualRouterPutBodySpec {
		serviceNames?: Array<string>;
	}
	export interface UpdateVirtualRouterPutBodySpecFormProperties {
	}
	export function CreateUpdateVirtualRouterPutBodySpecFormGroup() {
		return new FormGroup<UpdateVirtualRouterPutBodySpecFormProperties>({
		});

	}

}

