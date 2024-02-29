import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Can be anything: string, number, array, object, etc. */
	export interface AnyValue {
	}

	/** Can be anything: string, number, array, object, etc. */
	export interface AnyValueFormProperties {
	}
	export function CreateAnyValueFormGroup() {
		return new FormGroup<AnyValueFormProperties>({
		});

	}

	export interface DefaultData {
		names?: Array<string>;
		ndarry?: Array<AnyValue>;
		tensor?: Tensor;

		/** Protocol buffer representing a tensor. */
		tftensor?: TensorflowTensorProto;
	}
	export interface DefaultDataFormProperties {
	}
	export function CreateDefaultDataFormGroup() {
		return new FormGroup<DefaultDataFormProperties>({
		});

	}

	export interface Tensor {
		shape?: Array<number>;
		values?: Array<number>;
	}
	export interface TensorFormProperties {
	}
	export function CreateTensorFormGroup() {
		return new FormGroup<TensorFormProperties>({
		});

	}


	/** Protocol buffer representing a tensor. */
	export interface TensorflowTensorProto {
		bool_val?: Array<boolean>;

		/**
		 * DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real
		 * and imaginary parts of i-th double precision complex.
		 */
		dcomplex_val?: Array<number>;

		/** DT_DOUBLE. */
		double_val?: Array<number>;

		/**
		 * - DT_INVALID: Not a legal value for DataType.  Used to indicate a DataType field
		 * has not been set.
		 * - DT_FLOAT: Data types that all computation devices are expected to be
		 * capable to support.
		 * - DT_FLOAT_REF: Do not use!  These are only for parameters.  Every enum above
		 * should have a corresponding value below (verified by types_test).
		 */
		dtype?: TensorflowTensorProtoDtype | null;

		/** DT_FLOAT. */
		float_val?: Array<number>;

		/**
		 * DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll
		 * have some pointless zero padding for each value here.
		 */
		half_val?: Array<number>;
		int64_val?: Array<string>;

		/** DT_INT32, DT_INT16, DT_INT8, DT_UINT8. */
		int_val?: Array<number>;
		resource_handle_val?: Array<TensorflowResourceHandleProto>;

		/**
		 * DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real
		 * and imaginary parts of i-th single precision complex.
		 */
		scomplex_val?: Array<number>;
		string_val?: Array<string>;

		/**
		 * Serialized raw tensor content from either Tensor::AsProtoTensorContent or
		 * memcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation
		 * can be used for all tensor types. The purpose of this representation is to
		 * reduce serialization overhead during RPC call by avoiding serialization of
		 * many repeated small items.
		 */
		tensor_content?: string | null;

		/** Dimensions of a tensor. */
		tensor_shape?: TensorflowTensorShapeProto;
		uint32_val?: Array<number>;
		uint64_val?: Array<string>;
		variant_val?: Array<TensorflowVariantTensorDataProto>;

		/**
		 * Version number.
		 * In version 0, if the "repeated xxx" representations contain only one
		 * element, that element is repeated to fill the shape.  This makes it easy
		 * to represent a constant Tensor with a single value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version_number?: number | null;
	}

	/** Protocol buffer representing a tensor. */
	export interface TensorflowTensorProtoFormProperties {

		/**
		 * - DT_INVALID: Not a legal value for DataType.  Used to indicate a DataType field
		 * has not been set.
		 * - DT_FLOAT: Data types that all computation devices are expected to be
		 * capable to support.
		 * - DT_FLOAT_REF: Do not use!  These are only for parameters.  Every enum above
		 * should have a corresponding value below (verified by types_test).
		 */
		dtype: FormControl<TensorflowTensorProtoDtype | null | undefined>,

		/**
		 * Serialized raw tensor content from either Tensor::AsProtoTensorContent or
		 * memcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation
		 * can be used for all tensor types. The purpose of this representation is to
		 * reduce serialization overhead during RPC call by avoiding serialization of
		 * many repeated small items.
		 */
		tensor_content: FormControl<string | null | undefined>,

		/**
		 * Version number.
		 * In version 0, if the "repeated xxx" representations contain only one
		 * element, that element is repeated to fill the shape.  This makes it easy
		 * to represent a constant Tensor with a single value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version_number: FormControl<number | null | undefined>,
	}
	export function CreateTensorflowTensorProtoFormGroup() {
		return new FormGroup<TensorflowTensorProtoFormProperties>({
			dtype: new FormControl<TensorflowTensorProtoDtype | null | undefined>(undefined),
			tensor_content: new FormControl<string | null | undefined>(undefined),
			version_number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TensorflowTensorProtoDtype { DT_INVALID = 'DT_INVALID', DT_FLOAT = 'DT_FLOAT', DT_DOUBLE = 'DT_DOUBLE', DT_INT32 = 'DT_INT32', DT_UINT8 = 'DT_UINT8', DT_INT16 = 'DT_INT16', DT_INT8 = 'DT_INT8', DT_STRING = 'DT_STRING', DT_COMPLEX64 = 'DT_COMPLEX64', DT_INT64 = 'DT_INT64', DT_BOOL = 'DT_BOOL', DT_QINT8 = 'DT_QINT8', DT_QUINT8 = 'DT_QUINT8', DT_QINT32 = 'DT_QINT32', DT_BFLOAT16 = 'DT_BFLOAT16', DT_QINT16 = 'DT_QINT16', DT_QUINT16 = 'DT_QUINT16', DT_UINT16 = 'DT_UINT16', DT_COMPLEX128 = 'DT_COMPLEX128', DT_HALF = 'DT_HALF', DT_RESOURCE = 'DT_RESOURCE', DT_VARIANT = 'DT_VARIANT', DT_UINT32 = 'DT_UINT32', DT_UINT64 = 'DT_UINT64', DT_FLOAT_REF = 'DT_FLOAT_REF', DT_DOUBLE_REF = 'DT_DOUBLE_REF', DT_INT32_REF = 'DT_INT32_REF', DT_UINT8_REF = 'DT_UINT8_REF', DT_INT16_REF = 'DT_INT16_REF', DT_INT8_REF = 'DT_INT8_REF', DT_STRING_REF = 'DT_STRING_REF', DT_COMPLEX64_REF = 'DT_COMPLEX64_REF', DT_INT64_REF = 'DT_INT64_REF', DT_BOOL_REF = 'DT_BOOL_REF', DT_QINT8_REF = 'DT_QINT8_REF', DT_QUINT8_REF = 'DT_QUINT8_REF', DT_QINT32_REF = 'DT_QINT32_REF', DT_BFLOAT16_REF = 'DT_BFLOAT16_REF', DT_QINT16_REF = 'DT_QINT16_REF', DT_QUINT16_REF = 'DT_QUINT16_REF', DT_UINT16_REF = 'DT_UINT16_REF', DT_COMPLEX128_REF = 'DT_COMPLEX128_REF', DT_HALF_REF = 'DT_HALF_REF', DT_RESOURCE_REF = 'DT_RESOURCE_REF', DT_VARIANT_REF = 'DT_VARIANT_REF', DT_UINT32_REF = 'DT_UINT32_REF', DT_UINT64_REF = 'DT_UINT64_REF' }


	/**
	 * Protocol buffer representing a handle to a tensorflow resource. Handles are
	 * not valid across executions, but can be serialized back and forth from within
	 * a single run.
	 */
	export interface TensorflowResourceHandleProto {

		/** Container in which this resource is placed. */
		container?: string | null;

		/** Unique name for the device containing the resource. */
		device?: string | null;

		/**
		 * Hash code for the type of the resource. Is only valid in the same device
		 * and in the same execution.
		 */
		hash_code?: string | null;

		/**
		 * For debug-only, the name of the type pointed to by this handle, if
		 * available.
		 */
		maybe_type_name?: string | null;

		/** Unique name of this resource. */
		name?: string | null;
	}

	/**
	 * Protocol buffer representing a handle to a tensorflow resource. Handles are
	 * not valid across executions, but can be serialized back and forth from within
	 * a single run.
	 */
	export interface TensorflowResourceHandleProtoFormProperties {

		/** Container in which this resource is placed. */
		container: FormControl<string | null | undefined>,

		/** Unique name for the device containing the resource. */
		device: FormControl<string | null | undefined>,

		/**
		 * Hash code for the type of the resource. Is only valid in the same device
		 * and in the same execution.
		 */
		hash_code: FormControl<string | null | undefined>,

		/**
		 * For debug-only, the name of the type pointed to by this handle, if
		 * available.
		 */
		maybe_type_name: FormControl<string | null | undefined>,

		/** Unique name of this resource. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTensorflowResourceHandleProtoFormGroup() {
		return new FormGroup<TensorflowResourceHandleProtoFormProperties>({
			container: new FormControl<string | null | undefined>(undefined),
			device: new FormControl<string | null | undefined>(undefined),
			hash_code: new FormControl<string | null | undefined>(undefined),
			maybe_type_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dimensions of a tensor. */
	export interface TensorflowTensorShapeProto {

		/**
		 * Dimensions of the tensor, such as {"input", 30}, {"output", 40}
		 * for a 30 x 40 2D tensor.  If an entry has size -1, this
		 * corresponds to a dimension of unknown size. The names are
		 * optional.
		 * The order of entries in "dim" matters: It indicates the layout of the
		 * values in the tensor in-memory representation.
		 * The first entry in "dim" is the outermost dimension used to layout the
		 * values, the last entry is the innermost dimension.  This matches the
		 * in-memory layout of RowMajor Eigen tensors.
		 * If "dim.size()" > 0, "unknown_rank" must be false.
		 */
		dim?: Array<TensorShapeProtoDim>;

		/**
		 * If true, the number of dimensions in the shape is unknown.
		 * If true, "dim.size()" must be 0.
		 */
		unknown_rank?: string | null;
	}

	/** Dimensions of a tensor. */
	export interface TensorflowTensorShapeProtoFormProperties {

		/**
		 * If true, the number of dimensions in the shape is unknown.
		 * If true, "dim.size()" must be 0.
		 */
		unknown_rank: FormControl<string | null | undefined>,
	}
	export function CreateTensorflowTensorShapeProtoFormGroup() {
		return new FormGroup<TensorflowTensorShapeProtoFormProperties>({
			unknown_rank: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One dimension of the tensor. */
	export interface TensorShapeProtoDim {

		/** Optional name of the tensor dimension. */
		name?: string | null;

		/**
		 * Size of the tensor in that dimension.
		 * This value must be >= -1, but values of -1 are reserved for "unknown"
		 * shapes (values of -1 mean "unknown" dimension).  Certain wrappers
		 * that work with TensorShapeProto may fail at runtime when deserializing
		 * a TensorShapeProto containing a dim value of -1.
		 */
		size?: string | null;
	}

	/** One dimension of the tensor. */
	export interface TensorShapeProtoDimFormProperties {

		/** Optional name of the tensor dimension. */
		name: FormControl<string | null | undefined>,

		/**
		 * Size of the tensor in that dimension.
		 * This value must be >= -1, but values of -1 are reserved for "unknown"
		 * shapes (values of -1 mean "unknown" dimension).  Certain wrappers
		 * that work with TensorShapeProto may fail at runtime when deserializing
		 * a TensorShapeProto containing a dim value of -1.
		 */
		size: FormControl<string | null | undefined>,
	}
	export function CreateTensorShapeProtoDimFormGroup() {
		return new FormGroup<TensorShapeProtoDimFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Protocol buffer representing the serialization format of DT_VARIANT tensors. */
	export interface TensorflowVariantTensorDataProto {

		/** Portions of the object that are not Tensors. */
		metadata?: string | null;

		/** Tensors contained within objects being serialized. */
		tensors?: Array<TensorflowTensorProto>;

		/** Name of the type of objects being serialized. */
		type_name?: string | null;
	}

	/** Protocol buffer representing the serialization format of DT_VARIANT tensors. */
	export interface TensorflowVariantTensorDataProtoFormProperties {

		/** Portions of the object that are not Tensors. */
		metadata: FormControl<string | null | undefined>,

		/** Name of the type of objects being serialized. */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateTensorflowVariantTensorDataProtoFormGroup() {
		return new FormGroup<TensorflowVariantTensorDataProtoFormProperties>({
			metadata: new FormControl<string | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Feedback {
		request?: SeldonMessage;
		response?: SeldonMessage;

		/** Type: float */
		reward?: number | null;
		truth?: SeldonMessage;
	}
	export interface FeedbackFormProperties {

		/** Type: float */
		reward: FormControl<number | null | undefined>,
	}
	export function CreateFeedbackFormGroup() {
		return new FormGroup<FeedbackFormProperties>({
			reward: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SeldonMessage {
		binData?: string | null;
		data?: DefaultData;
		meta?: Meta;
		status?: Status;
		strData?: string | null;
	}
	export interface SeldonMessageFormProperties {
		binData: FormControl<string | null | undefined>,
		strData: FormControl<string | null | undefined>,
	}
	export function CreateSeldonMessageFormGroup() {
		return new FormGroup<SeldonMessageFormProperties>({
			binData: new FormControl<string | null | undefined>(undefined),
			strData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Meta {
		metrics?: Array<Metric>;
		puid?: string | null;
		requestPath?: {[id: string]: string };
		routing?: {[id: string]: number };
		tags?: {[id: string]: AnyValue };
	}
	export interface MetaFormProperties {
		puid: FormControl<string | null | undefined>,
		requestPath: FormControl<{[id: string]: string } | null | undefined>,
		routing: FormControl<{[id: string]: number } | null | undefined>,
		tags: FormControl<{[id: string]: AnyValue } | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			puid: new FormControl<string | null | undefined>(undefined),
			requestPath: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			routing: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: AnyValue } | null | undefined>(undefined),
		});

	}

	export interface Metric {
		key?: string | null;
		type?: MetricType | null;

		/** Type: float */
		value?: number | null;
	}
	export interface MetricFormProperties {
		key: FormControl<string | null | undefined>,
		type: FormControl<MetricType | null | undefined>,

		/** Type: float */
		value: FormControl<number | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<MetricType | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MetricType { COUNTER = 'COUNTER', GAUGE = 'GAUGE', TIMER = 'TIMER' }

	export interface Status {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		info?: string | null;
		reason?: string | null;
		status?: StatusStatus | null;
	}
	export interface StatusFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		info: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		status: FormControl<StatusStatus | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			info: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<StatusStatus | null | undefined>(undefined),
		});

	}

	export enum StatusStatus { SUCCESS = 'SUCCESS', FAILURE = 'FAILURE' }

	export interface SeldonMessageList {
		seldonMessages?: Array<SeldonMessage>;
	}
	export interface SeldonMessageListFormProperties {
	}
	export function CreateSeldonMessageListFormGroup() {
		return new FormGroup<SeldonMessageListFormProperties>({
		});

	}

	export enum StatusStatusFlag { SUCCESS = 'SUCCESS', FAILURE = 'FAILURE' }


	/**
	 * - DT_INVALID: Not a legal value for DataType.  Used to indicate a DataType field
	 * has not been set.
	 *  - DT_FLOAT: Data types that all computation devices are expected to be
	 * capable to support.
	 *  - DT_FLOAT_REF: Do not use!  These are only for parameters.  Every enum above
	 * should have a corresponding value below (verified by types_test).
	 */
	export enum TensorflowDataType { DT_INVALID = 'DT_INVALID', DT_FLOAT = 'DT_FLOAT', DT_DOUBLE = 'DT_DOUBLE', DT_INT32 = 'DT_INT32', DT_UINT8 = 'DT_UINT8', DT_INT16 = 'DT_INT16', DT_INT8 = 'DT_INT8', DT_STRING = 'DT_STRING', DT_COMPLEX64 = 'DT_COMPLEX64', DT_INT64 = 'DT_INT64', DT_BOOL = 'DT_BOOL', DT_QINT8 = 'DT_QINT8', DT_QUINT8 = 'DT_QUINT8', DT_QINT32 = 'DT_QINT32', DT_BFLOAT16 = 'DT_BFLOAT16', DT_QINT16 = 'DT_QINT16', DT_QUINT16 = 'DT_QUINT16', DT_UINT16 = 'DT_UINT16', DT_COMPLEX128 = 'DT_COMPLEX128', DT_HALF = 'DT_HALF', DT_RESOURCE = 'DT_RESOURCE', DT_VARIANT = 'DT_VARIANT', DT_UINT32 = 'DT_UINT32', DT_UINT64 = 'DT_UINT64', DT_FLOAT_REF = 'DT_FLOAT_REF', DT_DOUBLE_REF = 'DT_DOUBLE_REF', DT_INT32_REF = 'DT_INT32_REF', DT_UINT8_REF = 'DT_UINT8_REF', DT_INT16_REF = 'DT_INT16_REF', DT_INT8_REF = 'DT_INT8_REF', DT_STRING_REF = 'DT_STRING_REF', DT_COMPLEX64_REF = 'DT_COMPLEX64_REF', DT_INT64_REF = 'DT_INT64_REF', DT_BOOL_REF = 'DT_BOOL_REF', DT_QINT8_REF = 'DT_QINT8_REF', DT_QUINT8_REF = 'DT_QUINT8_REF', DT_QINT32_REF = 'DT_QINT32_REF', DT_BFLOAT16_REF = 'DT_BFLOAT16_REF', DT_QINT16_REF = 'DT_QINT16_REF', DT_QUINT16_REF = 'DT_QUINT16_REF', DT_UINT16_REF = 'DT_UINT16_REF', DT_COMPLEX128_REF = 'DT_COMPLEX128_REF', DT_HALF_REF = 'DT_HALF_REF', DT_RESOURCE_REF = 'DT_RESOURCE_REF', DT_VARIANT_REF = 'DT_VARIANT_REF', DT_UINT32_REF = 'DT_UINT32_REF', DT_UINT64_REF = 'DT_UINT64_REF' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get aggregate
		 * @return {SeldonMessage} A successful response.
		 */
		Aggregate(body: SeldonMessageList): Observable<SeldonMessage> {
			return this.http.get<SeldonMessage>(this.baseUri + 'aggregate?body=' + body, {});
		}

		/**
		 * Get predict
		 * @return {SeldonMessage} A successful response.
		 */
		TransformInput4(json: SeldonMessage): Observable<SeldonMessage> {
			return this.http.get<SeldonMessage>(this.baseUri + 'predict?json=' + json, {});
		}

		/**
		 * Get route
		 * @return {SeldonMessage} A successful response.
		 */
		Route2(json: SeldonMessage): Observable<SeldonMessage> {
			return this.http.get<SeldonMessage>(this.baseUri + 'route?json=' + json, {});
		}

		/**
		 * Get send-feedback
		 * @return {SeldonMessage} A successful response.
		 */
		SendFeedback2(json: Feedback): Observable<SeldonMessage> {
			return this.http.get<SeldonMessage>(this.baseUri + 'send-feedback?json=' + json, {});
		}

		/**
		 * Get transform-input
		 * @return {SeldonMessage} A successful response.
		 */
		TransformInput2(json: SeldonMessage): Observable<SeldonMessage> {
			return this.http.get<SeldonMessage>(this.baseUri + 'transform-input?json=' + json, {});
		}

		/**
		 * Get transform-output
		 * @return {SeldonMessage} A successful response.
		 */
		TransformOutput2(json: SeldonMessage): Observable<SeldonMessage> {
			return this.http.get<SeldonMessage>(this.baseUri + 'transform-output?json=' + json, {});
		}
	}

}

