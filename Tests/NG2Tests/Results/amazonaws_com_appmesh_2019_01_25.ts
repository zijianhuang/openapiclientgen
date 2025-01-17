import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateMeshOutput {

		/**
		 * An object that represents a service mesh returned by a describe operation.
		 * Required
		 */
		mesh: MeshData;
	}
	export interface CreateMeshOutputFormProperties {
	}
	export function CreateCreateMeshOutputFormGroup() {
		return new FormGroup<CreateMeshOutputFormProperties>({
		});

	}


	/** An object that represents a service mesh returned by a describe operation. */
	export interface MeshData {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
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

	/** An object that represents a service mesh returned by a describe operation. */
	export interface MeshDataFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: FormControl<string | null | undefined>,
	}
	export function CreateMeshDataFormGroup() {
		return new FormGroup<MeshDataFormProperties>({
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
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

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		meshOwner: string;

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
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

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		meshOwner: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
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
			meshOwner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
			resourceOwner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
			uid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the specification of a service mesh. */
	export interface MeshSpec {

		/** An object that represents the egress filter rules for a service mesh. */
		egressFilter?: EgressFilter;
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


	/** An object that represents the status of a service mesh. */
	export interface MeshStatus {
		status?: MeshStatusStatus | null;
	}

	/** An object that represents the status of a service mesh. */
	export interface MeshStatusFormProperties {
		status: FormControl<MeshStatusStatus | null | undefined>,
	}
	export function CreateMeshStatusFormGroup() {
		return new FormGroup<MeshStatusFormProperties>({
			status: new FormControl<MeshStatusStatus | null | undefined>(undefined),
		});

	}

	export enum MeshStatusStatus { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }


	/**
	 * Optional metadata that you apply to a resource to assist with categorization and
	 *          organization. Each tag consists of a key and an optional value, both of which you define.
	 *          Tag keys can have a maximum character length of 128 characters, and tag values can have
	 *             a maximum length of 256 characters.
	 */
	export interface TagRef {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		key: string;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		value?: string | null;
	}

	/**
	 * Optional metadata that you apply to a resource to assist with categorization and
	 *          organization. Each tag consists of a key and an optional value, both of which you define.
	 *          Tag keys can have a maximum character length of 128 characters, and tag values can have
	 *             a maximum length of 256 characters.
	 */
	export interface TagRefFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagRefFormGroup() {
		return new FormGroup<TagRefFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
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

		/**
		 * An object that represents a route returned by a describe operation.
		 * Required
		 */
		route: RouteData;
	}
	export interface CreateRouteOutputFormProperties {
	}
	export function CreateCreateRouteOutputFormGroup() {
		return new FormGroup<CreateRouteOutputFormProperties>({
		});

	}


	/** An object that represents a route returned by a describe operation. */
	export interface RouteData {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: string;

		/**
		 * An object that represents metadata for a resource.
		 * Required
		 */
		metadata: ResourceMetadata;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualRouterName: string;
	}

	/** An object that represents a route returned by a describe operation. */
	export interface RouteDataFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		routeName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualRouterName: FormControl<string | null | undefined>,
	}
	export function CreateRouteDataFormGroup() {
		return new FormGroup<RouteDataFormProperties>({
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			routeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			virtualRouterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** An object that represents a route specification. Specify one route type. */
	export interface RouteSpec {

		/** An object that represents a gRPC route type. */
		grpcRoute?: GrpcRoute;

		/** An object that represents an HTTP or HTTP/2 route type. */
		http2Route?: HttpRoute;

		/** An object that represents an HTTP or HTTP/2 route type. */
		httpRoute?: HttpRoute;

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		priority?: number | null;

		/** An object that represents a TCP route type. */
		tcpRoute?: TcpRoute;
	}

	/** An object that represents a route specification. Specify one route type. */
	export interface RouteSpecFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateRouteSpecFormGroup() {
		return new FormGroup<RouteSpecFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
		});

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
		retryPolicy?: GrpcRetryPolicy;
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

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		weightedTargets: Array<WeightedTarget>;
	}

	/** An object that represents the action to take if a match is determined. */
	export interface GrpcRouteActionFormProperties {
	}
	export function CreateGrpcRouteActionFormGroup() {
		return new FormGroup<GrpcRouteActionFormProperties>({
		});

	}


	/**
	 * An object that represents a target and its relative weight. Traffic is distributed
	 *          across targets according to their relative weight. For example, a weighted target with a
	 *          relative weight of 50 receives five times as much traffic as one with a relative weight of
	 *          10. The total weight for all targets combined must be less than or equal to 100.
	 */
	export interface WeightedTarget {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualNode: string;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		weight: number;
	}

	/**
	 * An object that represents a target and its relative weight. Traffic is distributed
	 *          across targets according to their relative weight. For example, a weighted target with a
	 *          relative weight of 50 receives five times as much traffic as one with a relative weight of
	 *          10. The total weight for all targets combined must be less than or equal to 100.
	 */
	export interface WeightedTargetFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualNode: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 100
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateWeightedTargetFormGroup() {
		return new FormGroup<WeightedTargetFormProperties>({
			virtualNode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(100)]),
		});

	}


	/** An object that represents the criteria for determining a request match. */
	export interface GrpcRouteMatch {

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		metadata?: Array<GrpcRouteMetadata>;

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		methodName?: string | null;
		serviceName?: string | null;
	}

	/** An object that represents the criteria for determining a request match. */
	export interface GrpcRouteMatchFormProperties {

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		methodName: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateGrpcRouteMatchFormGroup() {
		return new FormGroup<GrpcRouteMatchFormProperties>({
			methodName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the match metadata for the route. */
	export interface GrpcRouteMetadata {
		invert?: boolean | null;

		/** An object that represents the match method. Specify one of the match values. */
		match?: GrpcRouteMetadataMatchMethod;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		name: string;
	}

	/** An object that represents the match metadata for the route. */
	export interface GrpcRouteMetadataFormProperties {
		invert: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGrpcRouteMetadataFormGroup() {
		return new FormGroup<GrpcRouteMetadataFormProperties>({
			invert: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
		});

	}


	/** An object that represents the match method. Specify one of the match values. */
	export interface GrpcRouteMetadataMatchMethod {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		exact?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		prefix?: string | null;

		/** An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched. */
		range?: MatchRange;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		regex?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		suffix?: string | null;
	}

	/** An object that represents the match method. Specify one of the match values. */
	export interface GrpcRouteMetadataMatchMethodFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		exact: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		prefix: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		regex: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateGrpcRouteMetadataMatchMethodFormGroup() {
		return new FormGroup<GrpcRouteMetadataMatchMethodFormProperties>({
			exact: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			prefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			regex: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			suffix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
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


	/** An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. */
	export interface GrpcRetryPolicy {

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		grpcRetryEvents?: Array<GrpcRetryPolicyEvent>;

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		httpRetryEvents?: Array<string>;

		/**
		 * Required
		 * Minimum: 0
		 */
		maxRetries: number;

		/**
		 * An object that represents a duration of time.
		 * Required
		 */
		perRetryTimeout: Duration;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		tcpRetryEvents?: Array<TcpRetryPolicyEvent>;
	}

	/** An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. */
	export interface GrpcRetryPolicyFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		maxRetries: FormControl<number | null | undefined>,
	}
	export function CreateGrpcRetryPolicyFormGroup() {
		return new FormGroup<GrpcRetryPolicyFormProperties>({
			maxRetries: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export enum GrpcRetryPolicyEvent { cancelled = 0, 'deadline-exceeded' = 1, internal = 2, 'resource-exhausted' = 3, unavailable = 4 }


	/** An object that represents a duration of time. */
	export interface Duration {
		unit?: DurationUnit | null;

		/** Minimum: 0 */
		value?: number | null;
	}

	/** An object that represents a duration of time. */
	export interface DurationFormProperties {
		unit: FormControl<DurationUnit | null | undefined>,

		/** Minimum: 0 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateDurationFormGroup() {
		return new FormGroup<DurationFormProperties>({
			unit: new FormControl<DurationUnit | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export enum DurationUnit { ms = 0, s = 1 }

	export enum TcpRetryPolicyEvent { 'connection-error' = 0 }


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
		retryPolicy?: HttpRetryPolicy;
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

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		weightedTargets: Array<WeightedTarget>;
	}

	/** An object that represents the action to take if a match is determined. */
	export interface HttpRouteActionFormProperties {
	}
	export function CreateHttpRouteActionFormGroup() {
		return new FormGroup<HttpRouteActionFormProperties>({
		});

	}


	/**
	 * An object that represents the requirements for a route to match HTTP requests for a
	 *          virtual router.
	 */
	export interface HttpRouteMatch {

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		headers?: Array<HttpRouteHeader>;
		method?: HttpRouteMatchMethod | null;

		/** Required */
		prefix: string;
		scheme?: HttpRouteMatchScheme | null;
	}

	/**
	 * An object that represents the requirements for a route to match HTTP requests for a
	 *          virtual router.
	 */
	export interface HttpRouteMatchFormProperties {
		method: FormControl<HttpRouteMatchMethod | null | undefined>,

		/** Required */
		prefix: FormControl<string | null | undefined>,
		scheme: FormControl<HttpRouteMatchScheme | null | undefined>,
	}
	export function CreateHttpRouteMatchFormGroup() {
		return new FormGroup<HttpRouteMatchFormProperties>({
			method: new FormControl<HttpRouteMatchMethod | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scheme: new FormControl<HttpRouteMatchScheme | null | undefined>(undefined),
		});

	}


	/** An object that represents the HTTP header in the request. */
	export interface HttpRouteHeader {
		invert?: boolean | null;

		/**
		 * An object that represents the method and value to match with the header value sent in a
		 * request. Specify one match method.
		 */
		match?: HeaderMatchMethod;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		name: string;
	}

	/** An object that represents the HTTP header in the request. */
	export interface HttpRouteHeaderFormProperties {
		invert: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateHttpRouteHeaderFormGroup() {
		return new FormGroup<HttpRouteHeaderFormProperties>({
			invert: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
		});

	}


	/**
	 * An object that represents the method and value to match with the header value sent in a
	 *          request. Specify one match method.
	 */
	export interface HeaderMatchMethod {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		exact?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		prefix?: string | null;

		/** An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched. */
		range?: MatchRange;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		regex?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		suffix?: string | null;
	}

	/**
	 * An object that represents the method and value to match with the header value sent in a
	 *          request. Specify one match method.
	 */
	export interface HeaderMatchMethodFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		exact: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		prefix: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		regex: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateHeaderMatchMethodFormGroup() {
		return new FormGroup<HeaderMatchMethodFormProperties>({
			exact: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			prefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			regex: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			suffix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export enum HttpRouteMatchMethod { CONNECT = 0, DELETE = 1, GET = 2, HEAD = 3, OPTIONS = 4, PATCH = 5, POST = 6, PUT = 7, TRACE = 8 }

	export enum HttpRouteMatchScheme { http = 0, https = 1 }


	/** An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. */
	export interface HttpRetryPolicy {

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		httpRetryEvents?: Array<string>;

		/**
		 * Required
		 * Minimum: 0
		 */
		maxRetries: number;

		/**
		 * An object that represents a duration of time.
		 * Required
		 */
		perRetryTimeout: Duration;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		tcpRetryEvents?: Array<TcpRetryPolicyEvent>;
	}

	/** An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. */
	export interface HttpRetryPolicyFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		maxRetries: FormControl<number | null | undefined>,
	}
	export function CreateHttpRetryPolicyFormGroup() {
		return new FormGroup<HttpRetryPolicyFormProperties>({
			maxRetries: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}


	/** An object that represents a TCP route type. */
	export interface TcpRoute {

		/**
		 * An object that represents the action to take if a match is determined.
		 * Required
		 */
		action: TcpRouteAction;
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

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		weightedTargets: Array<WeightedTarget>;
	}

	/** An object that represents the action to take if a match is determined. */
	export interface TcpRouteActionFormProperties {
	}
	export function CreateTcpRouteActionFormGroup() {
		return new FormGroup<TcpRouteActionFormProperties>({
		});

	}


	/** An object that represents the current status of a route. */
	export interface RouteStatus {

		/** Required */
		status: MeshStatusStatus;
	}

	/** An object that represents the current status of a route. */
	export interface RouteStatusFormProperties {

		/** Required */
		status: FormControl<MeshStatusStatus | null | undefined>,
	}
	export function CreateRouteStatusFormGroup() {
		return new FormGroup<RouteStatusFormProperties>({
			status: new FormControl<MeshStatusStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVirtualNodeOutput {

		/**
		 * An object that represents a virtual node returned by a describe operation.
		 * Required
		 */
		virtualNode: VirtualNodeData;
	}
	export interface CreateVirtualNodeOutputFormProperties {
	}
	export function CreateCreateVirtualNodeOutputFormGroup() {
		return new FormGroup<CreateVirtualNodeOutputFormProperties>({
		});

	}


	/** An object that represents a virtual node returned by a describe operation. */
	export interface VirtualNodeData {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualNodeName: string;
	}

	/** An object that represents a virtual node returned by a describe operation. */
	export interface VirtualNodeDataFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualNodeName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNodeDataFormGroup() {
		return new FormGroup<VirtualNodeDataFormProperties>({
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			virtualNodeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** An object that represents the specification of a virtual node. */
	export interface VirtualNodeSpec {

		/** An object that represents the default properties for a backend. */
		backendDefaults?: BackendDefaults;
		backends?: Array<Backend>;

		/**
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		listeners?: Array<Listener>;

		/** An object that represents the logging information for a virtual node. */
		logging?: Logging;

		/** An object that represents the service discovery information for a virtual node. */
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

		/** An object that represents a client policy. */
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

		/** An object that represents a Transport Layer Security (TLS) client policy. */
		tls?: ClientPolicyTls;
	}

	/** An object that represents a client policy. */
	export interface ClientPolicyFormProperties {
	}
	export function CreateClientPolicyFormGroup() {
		return new FormGroup<ClientPolicyFormProperties>({
		});

	}


	/** An object that represents a Transport Layer Security (TLS) client policy. */
	export interface ClientPolicyTls {
		enforce?: boolean | null;
		ports?: Array<number>;

		/**
		 * An object that represents a Transport Layer Security (TLS) validation context.
		 * Required
		 */
		validation: TlsValidationContext;
	}

	/** An object that represents a Transport Layer Security (TLS) client policy. */
	export interface ClientPolicyTlsFormProperties {
		enforce: FormControl<boolean | null | undefined>,
	}
	export function CreateClientPolicyTlsFormGroup() {
		return new FormGroup<ClientPolicyTlsFormProperties>({
			enforce: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An object that represents a Transport Layer Security (TLS) validation context. */
	export interface TlsValidationContext {

		/**
		 * An object that represents a Transport Layer Security (TLS) validation context trust.
		 * Required
		 */
		trust: TlsValidationContextTrust;
	}

	/** An object that represents a Transport Layer Security (TLS) validation context. */
	export interface TlsValidationContextFormProperties {
	}
	export function CreateTlsValidationContextFormGroup() {
		return new FormGroup<TlsValidationContextFormProperties>({
		});

	}


	/** An object that represents a Transport Layer Security (TLS) validation context trust. */
	export interface TlsValidationContextTrust {

		/**
		 * An object that represents a TLS validation context trust for an AWS Certicate Manager (ACM)
		 * certificate.
		 */
		acm?: TlsValidationContextAcmTrust;

		/** An object that represents a Transport Layer Security (TLS) validation context trust for a local file. */
		file?: TlsValidationContextFileTrust;
	}

	/** An object that represents a Transport Layer Security (TLS) validation context trust. */
	export interface TlsValidationContextTrustFormProperties {
	}
	export function CreateTlsValidationContextTrustFormGroup() {
		return new FormGroup<TlsValidationContextTrustFormProperties>({
		});

	}


	/**
	 * An object that represents a TLS validation context trust for an AWS Certicate Manager (ACM)
	 *          certificate.
	 */
	export interface TlsValidationContextAcmTrust {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 3
		 */
		certificateAuthorityArns: Array<string>;
	}

	/**
	 * An object that represents a TLS validation context trust for an AWS Certicate Manager (ACM)
	 *          certificate.
	 */
	export interface TlsValidationContextAcmTrustFormProperties {
	}
	export function CreateTlsValidationContextAcmTrustFormGroup() {
		return new FormGroup<TlsValidationContextAcmTrustFormProperties>({
		});

	}


	/** An object that represents a Transport Layer Security (TLS) validation context trust for a local file. */
	export interface TlsValidationContextFileTrust {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		certificateChain: string;
	}

	/** An object that represents a Transport Layer Security (TLS) validation context trust for a local file. */
	export interface TlsValidationContextFileTrustFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		certificateChain: FormControl<string | null | undefined>,
	}
	export function CreateTlsValidationContextFileTrustFormGroup() {
		return new FormGroup<TlsValidationContextFileTrustFormProperties>({
			certificateChain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/**
	 * An object that represents the backends that a virtual node is expected to send outbound
	 *          traffic to. 
	 */
	export interface Backend {

		/** An object that represents a virtual service backend for a virtual node. */
		virtualService?: VirtualServiceBackend;
	}

	/**
	 * An object that represents the backends that a virtual node is expected to send outbound
	 *          traffic to. 
	 */
	export interface BackendFormProperties {
	}
	export function CreateBackendFormGroup() {
		return new FormGroup<BackendFormProperties>({
		});

	}


	/** An object that represents a virtual service backend for a virtual node. */
	export interface VirtualServiceBackend {

		/** An object that represents a client policy. */
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

		/** An object that represents the health check policy for a virtual node's listener. */
		healthCheck?: HealthCheckPolicy;

		/**
		 * An object that represents a port mapping.
		 * Required
		 */
		portMapping: PortMapping;

		/** An object that represents the Transport Layer Security (TLS) properties for a listener. */
		tls?: ListenerTls;
	}

	/** An object that represents a listener for a virtual node. */
	export interface ListenerFormProperties {
	}
	export function CreateListenerFormGroup() {
		return new FormGroup<ListenerFormProperties>({
		});

	}


	/** An object that represents the health check policy for a virtual node's listener. */
	export interface HealthCheckPolicy {

		/**
		 * Required
		 * Minimum: 2
		 * Maximum: 10
		 */
		healthyThreshold: number;

		/**
		 * Required
		 * Minimum: 5000
		 * Maximum: 300000
		 */
		intervalMillis: number;
		path?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 65535
		 */
		port?: number | null;

		/** Required */
		protocol: HealthCheckPolicyProtocol;

		/**
		 * Required
		 * Minimum: 2000
		 * Maximum: 60000
		 */
		timeoutMillis: number;

		/**
		 * Required
		 * Minimum: 2
		 * Maximum: 10
		 */
		unhealthyThreshold: number;
	}

	/** An object that represents the health check policy for a virtual node's listener. */
	export interface HealthCheckPolicyFormProperties {

		/**
		 * Required
		 * Minimum: 2
		 * Maximum: 10
		 */
		healthyThreshold: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 5000
		 * Maximum: 300000
		 */
		intervalMillis: FormControl<number | null | undefined>,
		path: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 65535
		 */
		port: FormControl<number | null | undefined>,

		/** Required */
		protocol: FormControl<HealthCheckPolicyProtocol | null | undefined>,

		/**
		 * Required
		 * Minimum: 2000
		 * Maximum: 60000
		 */
		timeoutMillis: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 2
		 * Maximum: 10
		 */
		unhealthyThreshold: FormControl<number | null | undefined>,
	}
	export function CreateHealthCheckPolicyFormGroup() {
		return new FormGroup<HealthCheckPolicyFormProperties>({
			healthyThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2), Validators.max(10)]),
			intervalMillis: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(5000), Validators.max(300000)]),
			path: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(65535)]),
			protocol: new FormControl<HealthCheckPolicyProtocol | null | undefined>(undefined, [Validators.required]),
			timeoutMillis: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2000), Validators.max(60000)]),
			unhealthyThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2), Validators.max(10)]),
		});

	}

	export enum HealthCheckPolicyProtocol { grpc = 0, http = 1, http2 = 2, tcp = 3 }


	/** An object that represents a port mapping. */
	export interface PortMapping {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		port: number;

		/** Required */
		protocol: HealthCheckPolicyProtocol;
	}

	/** An object that represents a port mapping. */
	export interface PortMappingFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		port: FormControl<number | null | undefined>,

		/** Required */
		protocol: FormControl<HealthCheckPolicyProtocol | null | undefined>,
	}
	export function CreatePortMappingFormGroup() {
		return new FormGroup<PortMappingFormProperties>({
			port: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(65535)]),
			protocol: new FormControl<HealthCheckPolicyProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the Transport Layer Security (TLS) properties for a listener. */
	export interface ListenerTls {

		/**
		 * An object that represents a listener's Transport Layer Security (TLS) certificate.
		 * Required
		 */
		certificate: ListenerTlsCertificate;

		/** Required */
		mode: ListenerTlsMode;
	}

	/** An object that represents the Transport Layer Security (TLS) properties for a listener. */
	export interface ListenerTlsFormProperties {

		/** Required */
		mode: FormControl<ListenerTlsMode | null | undefined>,
	}
	export function CreateListenerTlsFormGroup() {
		return new FormGroup<ListenerTlsFormProperties>({
			mode: new FormControl<ListenerTlsMode | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents a listener's Transport Layer Security (TLS) certificate. */
	export interface ListenerTlsCertificate {

		/** An object that represents an AWS Certicate Manager (ACM) certificate. */
		acm?: ListenerTlsAcmCertificate;

		/**
		 * An object that represents a local file certificate.
		 * The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.
		 */
		file?: ListenerTlsFileCertificate;
	}

	/** An object that represents a listener's Transport Layer Security (TLS) certificate. */
	export interface ListenerTlsCertificateFormProperties {
	}
	export function CreateListenerTlsCertificateFormGroup() {
		return new FormGroup<ListenerTlsCertificateFormProperties>({
		});

	}


	/** An object that represents an AWS Certicate Manager (ACM) certificate. */
	export interface ListenerTlsAcmCertificate {

		/** Required */
		certificateArn: string;
	}

	/** An object that represents an AWS Certicate Manager (ACM) certificate. */
	export interface ListenerTlsAcmCertificateFormProperties {

		/** Required */
		certificateArn: FormControl<string | null | undefined>,
	}
	export function CreateListenerTlsAcmCertificateFormGroup() {
		return new FormGroup<ListenerTlsAcmCertificateFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * An object that represents a local file certificate.
	 *          The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.
	 */
	export interface ListenerTlsFileCertificate {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		certificateChain: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		privateKey: string;
	}

	/**
	 * An object that represents a local file certificate.
	 *          The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.
	 */
	export interface ListenerTlsFileCertificateFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		certificateChain: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		privateKey: FormControl<string | null | undefined>,
	}
	export function CreateListenerTlsFileCertificateFormGroup() {
		return new FormGroup<ListenerTlsFileCertificateFormProperties>({
			certificateChain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			privateKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export enum ListenerTlsMode { DISABLED = 0, PERMISSIVE = 1, STRICT = 2 }


	/** An object that represents the logging information for a virtual node. */
	export interface Logging {

		/** An object that represents the access logging information for a virtual node. */
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

		/** An object that represents an access log file. */
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		path: string;
	}

	/** An object that represents an access log file. */
	export interface FileAccessLogFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateFileAccessLogFormGroup() {
		return new FormGroup<FileAccessLogFormProperties>({
			path: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** An object that represents the service discovery information for a virtual node. */
	export interface ServiceDiscovery {

		/**
		 * An object that represents the AWS Cloud Map service discovery information for your virtual
		 * node.
		 */
		awsCloudMap?: AwsCloudMapServiceDiscovery;

		/**
		 * An object that represents the DNS service discovery information for your virtual
		 * node.
		 */
		dns?: DnsServiceDiscovery;
	}

	/** An object that represents the service discovery information for a virtual node. */
	export interface ServiceDiscoveryFormProperties {
	}
	export function CreateServiceDiscoveryFormGroup() {
		return new FormGroup<ServiceDiscoveryFormProperties>({
		});

	}


	/**
	 * An object that represents the AWS Cloud Map service discovery information for your virtual
	 *          node.
	 */
	export interface AwsCloudMapServiceDiscovery {
		attributes?: Array<AwsCloudMapInstanceAttribute>;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		namespaceName: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		serviceName: string;
	}

	/**
	 * An object that represents the AWS Cloud Map service discovery information for your virtual
	 *          node.
	 */
	export interface AwsCloudMapServiceDiscoveryFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		namespaceName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudMapServiceDiscoveryFormGroup() {
		return new FormGroup<AwsCloudMapServiceDiscoveryFormProperties>({
			namespaceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('((?=^.{1,127}$)^([a-zA-Z0-9_][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9_]|[a-zA-Z0-9])(.([a-zA-Z0-9_][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9_]|[a-zA-Z0-9]))*$)|(^.$)')]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('((?=^.{1,127}$)^([a-zA-Z0-9_][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9_]|[a-zA-Z0-9])(.([a-zA-Z0-9_][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9_]|[a-zA-Z0-9]))*$)|(^.$)')]),
		});

	}


	/**
	 * An object that represents the AWS Cloud Map attribute information for your virtual
	 *          node.
	 */
	export interface AwsCloudMapInstanceAttribute {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		key: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		value: string;
	}

	/**
	 * An object that represents the AWS Cloud Map attribute information for your virtual
	 *          node.
	 */
	export interface AwsCloudMapInstanceAttributeFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAwsCloudMapInstanceAttributeFormGroup() {
		return new FormGroup<AwsCloudMapInstanceAttributeFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9!-~]+$')]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^([a-zA-Z0-9!-~][ ta-zA-Z0-9!-~]*){0,1}[a-zA-Z0-9!-~]{0,1}$')]),
		});

	}


	/**
	 * An object that represents the DNS service discovery information for your virtual
	 *          node.
	 */
	export interface DnsServiceDiscovery {

		/** Required */
		hostname: string;
	}

	/**
	 * An object that represents the DNS service discovery information for your virtual
	 *          node.
	 */
	export interface DnsServiceDiscoveryFormProperties {

		/** Required */
		hostname: FormControl<string | null | undefined>,
	}
	export function CreateDnsServiceDiscoveryFormGroup() {
		return new FormGroup<DnsServiceDiscoveryFormProperties>({
			hostname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the current status of the virtual node. */
	export interface VirtualNodeStatus {

		/** Required */
		status: MeshStatusStatus;
	}

	/** An object that represents the current status of the virtual node. */
	export interface VirtualNodeStatusFormProperties {

		/** Required */
		status: FormControl<MeshStatusStatus | null | undefined>,
	}
	export function CreateVirtualNodeStatusFormGroup() {
		return new FormGroup<VirtualNodeStatusFormProperties>({
			status: new FormControl<MeshStatusStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVirtualRouterOutput {

		/**
		 * An object that represents a virtual router returned by a describe operation.
		 * Required
		 */
		virtualRouter: VirtualRouterData;
	}
	export interface CreateVirtualRouterOutputFormProperties {
	}
	export function CreateCreateVirtualRouterOutputFormGroup() {
		return new FormGroup<CreateVirtualRouterOutputFormProperties>({
		});

	}


	/** An object that represents a virtual router returned by a describe operation. */
	export interface VirtualRouterData {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualRouterName: string;
	}

	/** An object that represents a virtual router returned by a describe operation. */
	export interface VirtualRouterDataFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualRouterName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualRouterDataFormGroup() {
		return new FormGroup<VirtualRouterDataFormProperties>({
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			virtualRouterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** An object that represents the specification of a virtual router. */
	export interface VirtualRouterSpec {

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
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
		status: MeshStatusStatus;
	}

	/** An object that represents the status of a virtual router.  */
	export interface VirtualRouterStatusFormProperties {

		/** Required */
		status: FormControl<MeshStatusStatus | null | undefined>,
	}
	export function CreateVirtualRouterStatusFormGroup() {
		return new FormGroup<VirtualRouterStatusFormProperties>({
			status: new FormControl<MeshStatusStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVirtualServiceOutput {

		/**
		 * An object that represents a virtual service returned by a describe operation.
		 * Required
		 */
		virtualService: VirtualServiceData;
	}
	export interface CreateVirtualServiceOutputFormProperties {
	}
	export function CreateCreateVirtualServiceOutputFormGroup() {
		return new FormGroup<CreateVirtualServiceOutputFormProperties>({
		});

	}


	/** An object that represents a virtual service returned by a describe operation. */
	export interface VirtualServiceData {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
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

		/** Required */
		virtualServiceName: string;
	}

	/** An object that represents a virtual service returned by a describe operation. */
	export interface VirtualServiceDataFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: FormControl<string | null | undefined>,

		/** Required */
		virtualServiceName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualServiceDataFormGroup() {
		return new FormGroup<VirtualServiceDataFormProperties>({
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			virtualServiceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that represents the specification of a virtual service. */
	export interface VirtualServiceSpec {

		/** An object that represents the provider for a virtual service. */
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

		/** An object that represents a virtual node service provider. */
		virtualNode?: VirtualNodeServiceProvider;

		/** An object that represents a virtual node service provider. */
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualNodeName: string;
	}

	/** An object that represents a virtual node service provider. */
	export interface VirtualNodeServiceProviderFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualNodeName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNodeServiceProviderFormGroup() {
		return new FormGroup<VirtualNodeServiceProviderFormProperties>({
			virtualNodeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** An object that represents a virtual node service provider. */
	export interface VirtualRouterServiceProvider {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualRouterName: string;
	}

	/** An object that represents a virtual node service provider. */
	export interface VirtualRouterServiceProviderFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualRouterName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualRouterServiceProviderFormGroup() {
		return new FormGroup<VirtualRouterServiceProviderFormProperties>({
			virtualRouterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}


	/** An object that represents the status of a virtual service. */
	export interface VirtualServiceStatus {

		/** Required */
		status: MeshStatusStatus;
	}

	/** An object that represents the status of a virtual service. */
	export interface VirtualServiceStatusFormProperties {

		/** Required */
		status: FormControl<MeshStatusStatus | null | undefined>,
	}
	export function CreateVirtualServiceStatusFormGroup() {
		return new FormGroup<VirtualServiceStatusFormProperties>({
			status: new FormControl<MeshStatusStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMeshOutput {

		/**
		 * An object that represents a service mesh returned by a describe operation.
		 * Required
		 */
		mesh: MeshData;
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

		/**
		 * An object that represents a route returned by a describe operation.
		 * Required
		 */
		route: RouteData;
	}
	export interface DeleteRouteOutputFormProperties {
	}
	export function CreateDeleteRouteOutputFormGroup() {
		return new FormGroup<DeleteRouteOutputFormProperties>({
		});

	}

	export interface DeleteVirtualNodeOutput {

		/**
		 * An object that represents a virtual node returned by a describe operation.
		 * Required
		 */
		virtualNode: VirtualNodeData;
	}
	export interface DeleteVirtualNodeOutputFormProperties {
	}
	export function CreateDeleteVirtualNodeOutputFormGroup() {
		return new FormGroup<DeleteVirtualNodeOutputFormProperties>({
		});

	}

	export interface DeleteVirtualRouterOutput {

		/**
		 * An object that represents a virtual router returned by a describe operation.
		 * Required
		 */
		virtualRouter: VirtualRouterData;
	}
	export interface DeleteVirtualRouterOutputFormProperties {
	}
	export function CreateDeleteVirtualRouterOutputFormGroup() {
		return new FormGroup<DeleteVirtualRouterOutputFormProperties>({
		});

	}

	export interface DeleteVirtualServiceOutput {

		/**
		 * An object that represents a virtual service returned by a describe operation.
		 * Required
		 */
		virtualService: VirtualServiceData;
	}
	export interface DeleteVirtualServiceOutputFormProperties {
	}
	export function CreateDeleteVirtualServiceOutputFormGroup() {
		return new FormGroup<DeleteVirtualServiceOutputFormProperties>({
		});

	}

	export interface DescribeMeshOutput {

		/**
		 * An object that represents a service mesh returned by a describe operation.
		 * Required
		 */
		mesh: MeshData;
	}
	export interface DescribeMeshOutputFormProperties {
	}
	export function CreateDescribeMeshOutputFormGroup() {
		return new FormGroup<DescribeMeshOutputFormProperties>({
		});

	}

	export interface DescribeRouteOutput {

		/**
		 * An object that represents a route returned by a describe operation.
		 * Required
		 */
		route: RouteData;
	}
	export interface DescribeRouteOutputFormProperties {
	}
	export function CreateDescribeRouteOutputFormGroup() {
		return new FormGroup<DescribeRouteOutputFormProperties>({
		});

	}

	export interface DescribeVirtualNodeOutput {

		/**
		 * An object that represents a virtual node returned by a describe operation.
		 * Required
		 */
		virtualNode: VirtualNodeData;
	}
	export interface DescribeVirtualNodeOutputFormProperties {
	}
	export function CreateDescribeVirtualNodeOutputFormGroup() {
		return new FormGroup<DescribeVirtualNodeOutputFormProperties>({
		});

	}

	export interface DescribeVirtualRouterOutput {

		/**
		 * An object that represents a virtual router returned by a describe operation.
		 * Required
		 */
		virtualRouter: VirtualRouterData;
	}
	export interface DescribeVirtualRouterOutputFormProperties {
	}
	export function CreateDescribeVirtualRouterOutputFormGroup() {
		return new FormGroup<DescribeVirtualRouterOutputFormProperties>({
		});

	}

	export interface DescribeVirtualServiceOutput {

		/**
		 * An object that represents a virtual service returned by a describe operation.
		 * Required
		 */
		virtualService: VirtualServiceData;
	}
	export interface DescribeVirtualServiceOutputFormProperties {
	}
	export function CreateDescribeVirtualServiceOutputFormGroup() {
		return new FormGroup<DescribeVirtualServiceOutputFormProperties>({
		});

	}

	export interface ListMeshesOutput {

		/** Required */
		meshes: Array<MeshRef>;
		nextToken?: string | null;
	}
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: string;

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		meshOwner: string;

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		meshOwner: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		resourceOwner: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<number | null | undefined>,
	}
	export function CreateMeshRefFormGroup() {
		return new FormGroup<MeshRefFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			meshOwner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
			resourceOwner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRoutesOutput {
		nextToken?: string | null;

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


	/** An object that represents a route returned by a list operation. */
	export interface RouteRef {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		lastUpdatedAt: Date;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: string;

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		meshOwner: string;

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		resourceOwner: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		routeName: string;

		/** Required */
		version: number;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		meshOwner: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		resourceOwner: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		routeName: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualRouterName: FormControl<string | null | undefined>,
	}
	export function CreateRouteRefFormGroup() {
		return new FormGroup<RouteRefFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			meshOwner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
			resourceOwner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
			routeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			virtualRouterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface ListTagsForResourceOutput {
		nextToken?: string | null;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags: Array<TagRef>;
	}
	export interface ListTagsForResourceOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVirtualNodesOutput {
		nextToken?: string | null;

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


	/** An object that represents a virtual node returned by a list operation. */
	export interface VirtualNodeRef {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		lastUpdatedAt: Date;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: string;

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		meshOwner: string;

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		resourceOwner: string;

		/** Required */
		version: number;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		meshOwner: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		resourceOwner: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualNodeName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNodeRefFormGroup() {
		return new FormGroup<VirtualNodeRefFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			meshOwner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
			resourceOwner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			virtualNodeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface ListVirtualRoutersOutput {
		nextToken?: string | null;

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


	/** An object that represents a virtual router returned by a list operation. */
	export interface VirtualRouterRef {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;

		/** Required */
		lastUpdatedAt: Date;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: string;

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		meshOwner: string;

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		resourceOwner: string;

		/** Required */
		version: number;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		meshOwner: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		resourceOwner: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualRouterName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualRouterRefFormGroup() {
		return new FormGroup<VirtualRouterRefFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			meshOwner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
			resourceOwner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			virtualRouterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface ListVirtualServicesOutput {
		nextToken?: string | null;

		/** Required */
		virtualServices: Array<VirtualServiceRef>;
	}
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: string;

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		meshOwner: string;

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		meshOwner: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
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
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			meshOwner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
			resourceOwner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			virtualServiceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceOutput {
	}
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

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UpdateMeshOutput {

		/**
		 * An object that represents a service mesh returned by a describe operation.
		 * Required
		 */
		mesh: MeshData;
	}
	export interface UpdateMeshOutputFormProperties {
	}
	export function CreateUpdateMeshOutputFormGroup() {
		return new FormGroup<UpdateMeshOutputFormProperties>({
		});

	}

	export interface UpdateRouteOutput {

		/**
		 * An object that represents a route returned by a describe operation.
		 * Required
		 */
		route: RouteData;
	}
	export interface UpdateRouteOutputFormProperties {
	}
	export function CreateUpdateRouteOutputFormGroup() {
		return new FormGroup<UpdateRouteOutputFormProperties>({
		});

	}

	export interface UpdateVirtualNodeOutput {

		/**
		 * An object that represents a virtual node returned by a describe operation.
		 * Required
		 */
		virtualNode: VirtualNodeData;
	}
	export interface UpdateVirtualNodeOutputFormProperties {
	}
	export function CreateUpdateVirtualNodeOutputFormGroup() {
		return new FormGroup<UpdateVirtualNodeOutputFormProperties>({
		});

	}

	export interface UpdateVirtualRouterOutput {

		/**
		 * An object that represents a virtual router returned by a describe operation.
		 * Required
		 */
		virtualRouter: VirtualRouterData;
	}
	export interface UpdateVirtualRouterOutputFormProperties {
	}
	export function CreateUpdateVirtualRouterOutputFormGroup() {
		return new FormGroup<UpdateVirtualRouterOutputFormProperties>({
		});

	}

	export interface UpdateVirtualServiceOutput {

		/**
		 * An object that represents a virtual service returned by a describe operation.
		 * Required
		 */
		virtualService: VirtualServiceData;
	}
	export interface UpdateVirtualServiceOutputFormProperties {
	}
	export function CreateUpdateVirtualServiceOutputFormGroup() {
		return new FormGroup<UpdateVirtualServiceOutputFormProperties>({
		});

	}

	export enum VirtualRouterStatusCode { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }

	export enum PortProtocol { grpc = 0, http = 1, http2 = 2, tcp = 3 }

	export interface DeleteRouteInput {
	}
	export interface DeleteRouteInputFormProperties {
	}
	export function CreateDeleteRouteInputFormGroup() {
		return new FormGroup<DeleteRouteInputFormProperties>({
		});

	}

	export interface ListMeshesInput {
	}
	export interface ListMeshesInputFormProperties {
	}
	export function CreateListMeshesInputFormGroup() {
		return new FormGroup<ListMeshesInputFormProperties>({
		});

	}

	export interface UpdateMeshInput {
		clientToken?: string | null;

		/** An object that represents the specification of a service mesh. */
		spec?: MeshSpec;
	}
	export interface UpdateMeshInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMeshInputFormGroup() {
		return new FormGroup<UpdateMeshInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVirtualRouterInput {
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual router.
		 * Required
		 */
		spec: VirtualRouterSpec;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualRouterName: string;
	}
	export interface CreateVirtualRouterInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualRouterName: FormControl<string | null | undefined>,
	}
	export function CreateCreateVirtualRouterInputFormGroup() {
		return new FormGroup<CreateVirtualRouterInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			virtualRouterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export enum VirtualServiceStatusCode { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }

	export enum HttpMethod_ { CONNECT = 0, DELETE = 1, GET = 2, HEAD = 3, OPTIONS = 4, PATCH = 5, POST = 6, PUT = 7, TRACE = 8 }

	export interface DeleteVirtualNodeInput {
	}
	export interface DeleteVirtualNodeInputFormProperties {
	}
	export function CreateDeleteVirtualNodeInputFormGroup() {
		return new FormGroup<DeleteVirtualNodeInputFormProperties>({
		});

	}

	export enum RouteStatusCode { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }

	export interface TagResourceInput {

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags: Array<TagRef>;
	}
	export interface TagResourceInputFormProperties {
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
		});

	}

	export enum MeshStatusCode { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }

	export interface CreateVirtualNodeInput {
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual node.
		 * Required
		 */
		spec: VirtualNodeSpec;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualNodeName: string;
	}
	export interface CreateVirtualNodeInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		virtualNodeName: FormControl<string | null | undefined>,
	}
	export function CreateCreateVirtualNodeInputFormGroup() {
		return new FormGroup<CreateVirtualNodeInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			virtualNodeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteVirtualServiceInput {
	}
	export interface DeleteVirtualServiceInputFormProperties {
	}
	export function CreateDeleteVirtualServiceInputFormGroup() {
		return new FormGroup<DeleteVirtualServiceInputFormProperties>({
		});

	}

	export interface UpdateVirtualNodeInput {
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual node.
		 * Required
		 */
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

	export interface DeleteMeshInput {
	}
	export interface DeleteMeshInputFormProperties {
	}
	export function CreateDeleteMeshInputFormGroup() {
		return new FormGroup<DeleteMeshInputFormProperties>({
		});

	}

	export interface CreateVirtualServiceInput {
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual service.
		 * Required
		 */
		spec: VirtualServiceSpec;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;

		/** Required */
		virtualServiceName: string;
	}
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

	export interface UpdateVirtualRouterInput {
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual router.
		 * Required
		 */
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

	export interface ListTagsForResourceInput {
	}
	export interface ListTagsForResourceInputFormProperties {
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
		});

	}

	export interface DeleteVirtualRouterInput {
	}
	export interface DeleteVirtualRouterInputFormProperties {
	}
	export function CreateDeleteVirtualRouterInputFormGroup() {
		return new FormGroup<DeleteVirtualRouterInputFormProperties>({
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

	export enum VirtualNodeStatusCode { ACTIVE = 0, DELETED = 1, INACTIVE = 2 }

	export interface UpdateVirtualServiceInput {
		clientToken?: string | null;

		/**
		 * An object that represents the specification of a virtual service.
		 * Required
		 */
		spec: VirtualServiceSpec;
	}
	export interface UpdateVirtualServiceInputFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVirtualServiceInputFormGroup() {
		return new FormGroup<UpdateVirtualServiceInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateMeshInput {
		clientToken?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: string;

		/** An object that represents the specification of a service mesh. */
		spec?: MeshSpec;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;
	}
	export interface CreateMeshInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		meshName: FormControl<string | null | undefined>,
	}
	export function CreateCreateMeshInputFormGroup() {
		return new FormGroup<CreateMeshInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			meshName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DescribeVirtualServiceInput {
	}
	export interface DescribeVirtualServiceInputFormProperties {
	}
	export function CreateDescribeVirtualServiceInputFormGroup() {
		return new FormGroup<DescribeVirtualServiceInputFormProperties>({
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

	export interface ListVirtualServicesInput {
	}
	export interface ListVirtualServicesInputFormProperties {
	}
	export function CreateListVirtualServicesInputFormGroup() {
		return new FormGroup<ListVirtualServicesInputFormProperties>({
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

	export enum HttpScheme { http = 0, https = 1 }

	export interface DescribeVirtualNodeInput {
	}
	export interface DescribeVirtualNodeInputFormProperties {
	}
	export function CreateDescribeVirtualNodeInputFormGroup() {
		return new FormGroup<DescribeVirtualNodeInputFormProperties>({
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

	export interface CreateRouteInput {
		clientToken?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		routeName: string;

		/**
		 * An object that represents a route specification. Specify one route type.
		 * Required
		 */
		spec: RouteSpec;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;
	}
	export interface CreateRouteInputFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		routeName: FormControl<string | null | undefined>,
	}
	export function CreateCreateRouteInputFormGroup() {
		return new FormGroup<CreateRouteInputFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			routeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface UpdateRouteInput {
		clientToken?: string | null;

		/**
		 * An object that represents a route specification. Specify one route type.
		 * Required
		 */
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

	export interface UntagResourceInput {

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
		});

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
		ListMeshes(limit: number | null | undefined, nextToken: string | null | undefined): Observable<ListMeshesOutput> {
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
		CreateRoute(meshName: string, meshOwner: string | null | undefined, virtualRouterName: string, requestBody: CreateRoutePutBody): Observable<CreateRouteOutput> {
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
		ListRoutes(limit: number | null | undefined, meshName: string, meshOwner: string | null | undefined, nextToken: string | null | undefined, virtualRouterName: string): Observable<ListRoutesOutput> {
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
		CreateVirtualNode(meshName: string, meshOwner: string | null | undefined, requestBody: CreateVirtualNodePutBody): Observable<CreateVirtualNodeOutput> {
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
		ListVirtualNodes(limit: number | null | undefined, meshName: string, meshOwner: string | null | undefined, nextToken: string | null | undefined): Observable<ListVirtualNodesOutput> {
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
		CreateVirtualRouter(meshName: string, meshOwner: string | null | undefined, requestBody: CreateVirtualRouterPutBody): Observable<CreateVirtualRouterOutput> {
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
		ListVirtualRouters(limit: number | null | undefined, meshName: string, meshOwner: string | null | undefined, nextToken: string | null | undefined): Observable<ListVirtualRoutersOutput> {
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
		CreateVirtualService(meshName: string, meshOwner: string | null | undefined, requestBody: CreateVirtualServicePutBody): Observable<CreateVirtualServiceOutput> {
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
		ListVirtualServices(limit: number | null | undefined, meshName: string, meshOwner: string | null | undefined, nextToken: string | null | undefined): Observable<ListVirtualServicesOutput> {
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
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
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
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
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
		 * @param {string} meshOwner The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's
		 *                the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with Shared Meshes</a>.
		 * @param {string} routeName The name of the route to update.
		 * @param {string} virtualRouterName The name of the virtual router that the route is associated with.
		 * @return {UpdateRouteOutput} Success
		 */
		UpdateRoute(meshName: string, meshOwner: string | null | undefined, routeName: string, virtualRouterName: string, requestBody: UpdateRoutePutBody): Observable<UpdateRouteOutput> {
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
		DeleteVirtualNode(meshName: string, meshOwner: string | null | undefined, virtualNodeName: string): Observable<DeleteVirtualNodeOutput> {
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
		DescribeVirtualNode(meshName: string, meshOwner: string | null | undefined, virtualNodeName: string): Observable<DescribeVirtualNodeOutput> {
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
		UpdateVirtualNode(meshName: string, meshOwner: string | null | undefined, virtualNodeName: string, requestBody: UpdateVirtualNodePutBody): Observable<UpdateVirtualNodeOutput> {
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
		DeleteVirtualRouter(meshName: string, meshOwner: string | null | undefined, virtualRouterName: string): Observable<DeleteVirtualRouterOutput> {
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
		DescribeVirtualRouter(meshName: string, meshOwner: string | null | undefined, virtualRouterName: string): Observable<DescribeVirtualRouterOutput> {
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
		UpdateVirtualRouter(meshName: string, meshOwner: string | null | undefined, virtualRouterName: string, requestBody: UpdateVirtualRouterPutBody): Observable<UpdateVirtualRouterOutput> {
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
		DeleteVirtualService(meshName: string, meshOwner: string | null | undefined, virtualServiceName: string): Observable<DeleteVirtualServiceOutput> {
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
		DescribeVirtualService(meshName: string, meshOwner: string | null | undefined, virtualServiceName: string): Observable<DescribeVirtualServiceOutput> {
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
		UpdateVirtualService(meshName: string, meshOwner: string | null | undefined, virtualServiceName: string, requestBody: UpdateVirtualServicePutBody): Observable<UpdateVirtualServiceOutput> {
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
		ListTagsForResource(limit: number | null | undefined, nextToken: string | null | undefined, resourceArn: string): Observable<ListTagsForResourceOutput> {
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
		spec?: CreateMeshPutBodySpec;

		/**
		 * Optional metadata that you can apply to the service mesh to assist with categorization
		 * and organization. Each tag consists of a key and an optional value, both of which you
		 * define. Tag keys can have a maximum character length of 128 characters, and tag values can have
		 * a maximum length of 256 characters.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<TagRef>;
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

		/** An object that represents the egress filter rules for a service mesh. */
		egressFilter?: EgressFilter;
	}
	export interface CreateMeshPutBodySpecFormProperties {
	}
	export function CreateCreateMeshPutBodySpecFormGroup() {
		return new FormGroup<CreateMeshPutBodySpecFormProperties>({
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
		tags?: Array<TagRef>;
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

		/** An object that represents a gRPC route type. */
		grpcRoute?: GrpcRoute;

		/** An object that represents an HTTP or HTTP/2 route type. */
		http2Route?: HttpRoute;

		/** An object that represents an HTTP or HTTP/2 route type. */
		httpRoute?: HttpRoute;

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		priority?: number | null;

		/** An object that represents a TCP route type. */
		tcpRoute?: TcpRoute;
	}
	export interface CreateRoutePutBodySpecFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateCreateRoutePutBodySpecFormGroup() {
		return new FormGroup<CreateRoutePutBodySpecFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
		});

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

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
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

		/** An object that represents the default properties for a backend. */
		backendDefaults?: BackendDefaults;
		backends?: Array<Backend>;

		/**
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		listeners?: Array<Listener>;

		/** An object that represents the logging information for a virtual node. */
		logging?: Logging;

		/** An object that represents the service discovery information for a virtual node. */
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

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
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

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		listeners?: Array<VirtualRouterListener>;
	}
	export interface CreateVirtualRouterPutBodySpecFormProperties {
	}
	export function CreateCreateVirtualRouterPutBodySpecFormGroup() {
		return new FormGroup<CreateVirtualRouterPutBodySpecFormProperties>({
		});

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
		tags?: Array<TagRef>;

		/**
		 * The name to use for the virtual service.
		 * Required
		 */
		virtualServiceName: string;
	}
	export interface CreateVirtualServicePutBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
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

		/** An object that represents the provider for a virtual service. */
		provider?: VirtualServiceProvider;
	}
	export interface CreateVirtualServicePutBodySpecFormProperties {
	}
	export function CreateCreateVirtualServicePutBodySpecFormGroup() {
		return new FormGroup<CreateVirtualServicePutBodySpecFormProperties>({
		});

	}

	export interface UpdateMeshPutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken?: string | null;

		/** An object that represents the specification of a service mesh. */
		spec?: UpdateMeshPutBodySpec;
	}
	export interface UpdateMeshPutBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMeshPutBodyFormGroup() {
		return new FormGroup<UpdateMeshPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMeshPutBodySpec {

		/** An object that represents the egress filter rules for a service mesh. */
		egressFilter?: EgressFilter;
	}
	export interface UpdateMeshPutBodySpecFormProperties {
	}
	export function CreateUpdateMeshPutBodySpecFormGroup() {
		return new FormGroup<UpdateMeshPutBodySpecFormProperties>({
		});

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

		/** An object that represents a gRPC route type. */
		grpcRoute?: GrpcRoute;

		/** An object that represents an HTTP or HTTP/2 route type. */
		http2Route?: HttpRoute;

		/** An object that represents an HTTP or HTTP/2 route type. */
		httpRoute?: HttpRoute;

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		priority?: number | null;

		/** An object that represents a TCP route type. */
		tcpRoute?: TcpRoute;
	}
	export interface UpdateRoutePutBodySpecFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRoutePutBodySpecFormGroup() {
		return new FormGroup<UpdateRoutePutBodySpecFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
		});

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

		/** An object that represents the default properties for a backend. */
		backendDefaults?: BackendDefaults;
		backends?: Array<Backend>;

		/**
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		listeners?: Array<Listener>;

		/** An object that represents the logging information for a virtual node. */
		logging?: Logging;

		/** An object that represents the service discovery information for a virtual node. */
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
		 * An object that represents the specification of a virtual router.
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

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		listeners?: Array<VirtualRouterListener>;
	}
	export interface UpdateVirtualRouterPutBodySpecFormProperties {
	}
	export function CreateUpdateVirtualRouterPutBodySpecFormGroup() {
		return new FormGroup<UpdateVirtualRouterPutBodySpecFormProperties>({
		});

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
	export interface UpdateVirtualServicePutBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
		 * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVirtualServicePutBodyFormGroup() {
		return new FormGroup<UpdateVirtualServicePutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVirtualServicePutBodySpec {

		/** An object that represents the provider for a virtual service. */
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
		 * The tags to add to the resource. A tag is an array of key-value pairs.
		 * Tag keys can have a maximum character length of 128 characters, and tag values can have
		 * a maximum length of 256 characters.
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

