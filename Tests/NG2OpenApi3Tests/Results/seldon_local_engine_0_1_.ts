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

		/** Maximum items: 2097152 */
		names?: Array<string>;

		/** Maximum items: 2097152 */
		ndarray?: Array<AnyValue>;
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

		/** Maximum items: 2097152 */
		shape?: Array<number>;

		/** Maximum items: 2097152 */
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

		/** Maximum items: 2097152 */
		bool_val?: Array<boolean>;

		/**
		 * DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real and imaginary parts of i-th double precision complex.
		 * Maximum items: 2097152
		 */
		dcomplex_val?: Array<number>;

		/**
		 * DT_DOUBLE.
		 * Maximum items: 2097152
		 */
		double_val?: Array<number>;

		/**
		 * - DT_INVALID: Not a legal value for DataType.  Used to indicate a DataType field has not been set. - DT_FLOAT: Data types that all computation devices are expected to be capable to support. - DT_FLOAT_REF: Do not use!  These are only for parameters.  Every enum above should have a corresponding value below (verified by types_test).
		 * Max length: 2097152
		 */
		dtype?: TensorflowTensorProtoDtype | null;

		/**
		 * DT_FLOAT.
		 * Maximum items: 2097152
		 */
		float_val?: Array<number>;

		/**
		 * DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll have some pointless zero padding for each value here.
		 * Maximum items: 2097152
		 */
		half_val?: Array<number>;

		/** Maximum items: 2097152 */
		int64_val?: Array<string>;

		/**
		 * DT_INT32, DT_INT16, DT_INT8, DT_UINT8.
		 * Maximum items: 2097152
		 */
		int_val?: Array<number>;

		/** Maximum items: 2097152 */
		resource_handle_val?: Array<TensorflowResourceHandleProto>;

		/**
		 * DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real and imaginary parts of i-th single precision complex.
		 * Maximum items: 2097152
		 */
		scomplex_val?: Array<number>;

		/** Maximum items: 2097152 */
		string_val?: Array<string>;

		/** Serialized raw tensor content from either Tensor::AsProtoTensorContent or memcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation can be used for all tensor types. The purpose of this representation is to reduce serialization overhead during RPC call by avoiding serialization of many repeated small items. */
		tensor_content?: string | null;

		/** Dimensions of a tensor. */
		tensor_shape?: TensorflowTensorShapeProto;

		/** Maximum items: 2097152 */
		uint32_val?: Array<number>;

		/** Maximum items: 2097152 */
		uint64_val?: Array<string>;

		/** Maximum items: 2097152 */
		variant_val?: Array<TensorflowVariantTensorDataProto>;

		/**
		 * Version number.
		 * In version 0, if the "repeated xxx" representations contain only one element, that element is repeated to fill the shape.  This makes it easy to represent a constant Tensor with a single value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version_number?: number | null;
	}

	/** Protocol buffer representing a tensor. */
	export interface TensorflowTensorProtoFormProperties {

		/**
		 * - DT_INVALID: Not a legal value for DataType.  Used to indicate a DataType field has not been set. - DT_FLOAT: Data types that all computation devices are expected to be capable to support. - DT_FLOAT_REF: Do not use!  These are only for parameters.  Every enum above should have a corresponding value below (verified by types_test).
		 * Max length: 2097152
		 */
		dtype: FormControl<TensorflowTensorProtoDtype | null | undefined>,

		/** Serialized raw tensor content from either Tensor::AsProtoTensorContent or memcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation can be used for all tensor types. The purpose of this representation is to reduce serialization overhead during RPC call by avoiding serialization of many repeated small items. */
		tensor_content: FormControl<string | null | undefined>,

		/**
		 * Version number.
		 * In version 0, if the "repeated xxx" representations contain only one element, that element is repeated to fill the shape.  This makes it easy to represent a constant Tensor with a single value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version_number: FormControl<number | null | undefined>,
	}
	export function CreateTensorflowTensorProtoFormGroup() {
		return new FormGroup<TensorflowTensorProtoFormProperties>({
			dtype: new FormControl<TensorflowTensorProtoDtype | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
			tensor_content: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.* maxLength: 2097152')]),
			version_number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TensorflowTensorProtoDtype { DT_INVALID = 'DT_INVALID', DT_FLOAT = 'DT_FLOAT', DT_DOUBLE = 'DT_DOUBLE', DT_INT32 = 'DT_INT32', DT_UINT8 = 'DT_UINT8', DT_INT16 = 'DT_INT16', DT_INT8 = 'DT_INT8', DT_STRING = 'DT_STRING', DT_COMPLEX64 = 'DT_COMPLEX64', DT_INT64 = 'DT_INT64', DT_BOOL = 'DT_BOOL', DT_QINT8 = 'DT_QINT8', DT_QUINT8 = 'DT_QUINT8', DT_QINT32 = 'DT_QINT32', DT_BFLOAT16 = 'DT_BFLOAT16', DT_QINT16 = 'DT_QINT16', DT_QUINT16 = 'DT_QUINT16', DT_UINT16 = 'DT_UINT16', DT_COMPLEX128 = 'DT_COMPLEX128', DT_HALF = 'DT_HALF', DT_RESOURCE = 'DT_RESOURCE', DT_VARIANT = 'DT_VARIANT', DT_UINT32 = 'DT_UINT32', DT_UINT64 = 'DT_UINT64', DT_FLOAT_REF = 'DT_FLOAT_REF', DT_DOUBLE_REF = 'DT_DOUBLE_REF', DT_INT32_REF = 'DT_INT32_REF', DT_UINT8_REF = 'DT_UINT8_REF', DT_INT16_REF = 'DT_INT16_REF', DT_INT8_REF = 'DT_INT8_REF', DT_STRING_REF = 'DT_STRING_REF', DT_COMPLEX64_REF = 'DT_COMPLEX64_REF', DT_INT64_REF = 'DT_INT64_REF', DT_BOOL_REF = 'DT_BOOL_REF', DT_QINT8_REF = 'DT_QINT8_REF', DT_QUINT8_REF = 'DT_QUINT8_REF', DT_QINT32_REF = 'DT_QINT32_REF', DT_BFLOAT16_REF = 'DT_BFLOAT16_REF', DT_QINT16_REF = 'DT_QINT16_REF', DT_QUINT16_REF = 'DT_QUINT16_REF', DT_UINT16_REF = 'DT_UINT16_REF', DT_COMPLEX128_REF = 'DT_COMPLEX128_REF', DT_HALF_REF = 'DT_HALF_REF', DT_RESOURCE_REF = 'DT_RESOURCE_REF', DT_VARIANT_REF = 'DT_VARIANT_REF', DT_UINT32_REF = 'DT_UINT32_REF', DT_UINT64_REF = 'DT_UINT64_REF' }


	/** Protocol buffer representing a handle to a tensorflow resource. Handles are not valid across executions, but can be serialized back and forth from within a single run. */
	export interface TensorflowResourceHandleProto {

		/**
		 * Container in which this resource is placed.
		 * Max length: 2097152
		 */
		container?: string | null;

		/**
		 * Unique name for the device containing the resource.
		 * Max length: 2097152
		 */
		device?: string | null;

		/**
		 * Hash code for the type of the resource. Is only valid in the same device and in the same execution.
		 * Max length: 2097152
		 */
		hash_code?: string | null;

		/**
		 * For debug-only, the name of the type pointed to by this handle, if available.
		 * Max length: 2097152
		 */
		maybe_type_name?: string | null;

		/**
		 * Unique name of this resource.
		 * Max length: 2097152
		 */
		name?: string | null;
	}

	/** Protocol buffer representing a handle to a tensorflow resource. Handles are not valid across executions, but can be serialized back and forth from within a single run. */
	export interface TensorflowResourceHandleProtoFormProperties {

		/**
		 * Container in which this resource is placed.
		 * Max length: 2097152
		 */
		container: FormControl<string | null | undefined>,

		/**
		 * Unique name for the device containing the resource.
		 * Max length: 2097152
		 */
		device: FormControl<string | null | undefined>,

		/**
		 * Hash code for the type of the resource. Is only valid in the same device and in the same execution.
		 * Max length: 2097152
		 */
		hash_code: FormControl<string | null | undefined>,

		/**
		 * For debug-only, the name of the type pointed to by this handle, if available.
		 * Max length: 2097152
		 */
		maybe_type_name: FormControl<string | null | undefined>,

		/**
		 * Unique name of this resource.
		 * Max length: 2097152
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTensorflowResourceHandleProtoFormGroup() {
		return new FormGroup<TensorflowResourceHandleProtoFormProperties>({
			container: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
			device: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
			hash_code: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
			maybe_type_name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
		});

	}


	/** Dimensions of a tensor. */
	export interface TensorflowTensorShapeProto {

		/**
		 * Dimensions of the tensor, such as {"input", 30}, {"output", 40} for a 30 x 40 2D tensor.  If an entry has size -1, this corresponds to a dimension of unknown size. The names are optional.
		 * The order of entries in "dim" matters: It indicates the layout of the values in the tensor in-memory representation.
		 * The first entry in "dim" is the outermost dimension used to layout the values, the last entry is the innermost dimension.  This matches the in-memory layout of RowMajor Eigen tensors.
		 * If "dim.size()" > 0, "unknown_rank" must be false.
		 * Maximum items: 2097152
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

		/**
		 * Optional name of the tensor dimension.
		 * Max length: 2097152
		 */
		name?: string | null;

		/**
		 * Size of the tensor in that dimension. This value must be >= -1, but values of -1 are reserved for "unknown" shapes (values of -1 mean "unknown" dimension).  Certain wrappers that work with TensorShapeProto may fail at runtime when deserializing a TensorShapeProto containing a dim value of -1.
		 * Max length: 2097152
		 */
		size?: string | null;
	}

	/** One dimension of the tensor. */
	export interface TensorShapeProtoDimFormProperties {

		/**
		 * Optional name of the tensor dimension.
		 * Max length: 2097152
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Size of the tensor in that dimension. This value must be >= -1, but values of -1 are reserved for "unknown" shapes (values of -1 mean "unknown" dimension).  Certain wrappers that work with TensorShapeProto may fail at runtime when deserializing a TensorShapeProto containing a dim value of -1.
		 * Max length: 2097152
		 */
		size: FormControl<string | null | undefined>,
	}
	export function CreateTensorShapeProtoDimFormGroup() {
		return new FormGroup<TensorShapeProtoDimFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
			size: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
		});

	}


	/** Protocol buffer representing the serialization format of DT_VARIANT tensors. */
	export interface TensorflowVariantTensorDataProto {

		/**
		 * Portions of the object that are not Tensors.
		 * Max length: 2097152
		 */
		metadata?: string | null;

		/**
		 * Tensors contained within objects being serialized.
		 * Maximum items: 2097152
		 */
		tensors?: Array<TensorflowTensorProto>;

		/**
		 * Name of the type of objects being serialized.
		 * Max length: 2097152
		 */
		type_name?: string | null;
	}

	/** Protocol buffer representing the serialization format of DT_VARIANT tensors. */
	export interface TensorflowVariantTensorDataProtoFormProperties {

		/**
		 * Portions of the object that are not Tensors.
		 * Max length: 2097152
		 */
		metadata: FormControl<string | null | undefined>,

		/**
		 * Name of the type of objects being serialized.
		 * Max length: 2097152
		 */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateTensorflowVariantTensorDataProtoFormGroup() {
		return new FormGroup<TensorflowVariantTensorDataProtoFormProperties>({
			metadata: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
			type_name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
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

		/** Max length: 2097152 */
		binData?: string | null;
		data?: DefaultData;
		meta?: Meta;
		status?: Status;

		/** Max length: 2097152 */
		strData?: string | null;
	}
	export interface SeldonMessageFormProperties {

		/** Max length: 2097152 */
		binData: FormControl<string | null | undefined>,

		/** Max length: 2097152 */
		strData: FormControl<string | null | undefined>,
	}
	export function CreateSeldonMessageFormGroup() {
		return new FormGroup<SeldonMessageFormProperties>({
			binData: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
			strData: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
		});

	}

	export interface Meta {

		/** Maximum items: 2097152 */
		metrics?: Array<Metric>;

		/** Max length: 2097152 */
		puid?: string | null;
		requestPath?: {[id: string]: string };
		routing?: {[id: string]: number };
		tags?: {[id: string]: AnyValue };
	}
	export interface MetaFormProperties {

		/** Max length: 2097152 */
		puid: FormControl<string | null | undefined>,
		requestPath: FormControl<{[id: string]: string } | null | undefined>,
		routing: FormControl<{[id: string]: number } | null | undefined>,
		tags: FormControl<{[id: string]: AnyValue } | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			puid: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
			requestPath: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			routing: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: AnyValue } | null | undefined>(undefined),
		});

	}

	export interface Metric {

		/** Max length: 2097152 */
		key?: string | null;

		/** Max length: 2097152 */
		type?: MetricType | null;

		/** Type: float */
		value?: number | null;
	}
	export interface MetricFormProperties {

		/** Max length: 2097152 */
		key: FormControl<string | null | undefined>,

		/** Max length: 2097152 */
		type: FormControl<MetricType | null | undefined>,

		/** Type: float */
		value: FormControl<number | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
			type: new FormControl<MetricType | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MetricType { COUNTER = 'COUNTER', GAUGE = 'GAUGE', TIMER = 'TIMER' }

	export interface Status {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;

		/** Max length: 2097152 */
		info?: string | null;

		/** Max length: 2097152 */
		reason?: string | null;

		/** Max length: 2097152 */
		status?: StatusStatus | null;
	}
	export interface StatusFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,

		/** Max length: 2097152 */
		info: FormControl<string | null | undefined>,

		/** Max length: 2097152 */
		reason: FormControl<string | null | undefined>,

		/** Max length: 2097152 */
		status: FormControl<StatusStatus | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			info: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
			status: new FormControl<StatusStatus | null | undefined>(undefined, [Validators.maxLength(2097152), Validators.pattern('^.{1,2097152}')]),
		});

	}

	export enum StatusStatus { SUCCESS = 'SUCCESS', FAILURE = 'FAILURE' }

	export interface SeldonMessageList {

		/** Maximum items: 2097152 */
		seldonMessages?: Array<SeldonMessage>;
	}
	export interface SeldonMessageListFormProperties {
	}
	export function CreateSeldonMessageListFormGroup() {
		return new FormGroup<SeldonMessageListFormProperties>({
		});

	}

	export enum StatusStatusFlag { SUCCESS = 'SUCCESS', FAILURE = 'FAILURE' }


	/** - DT_INVALID: Not a legal value for DataType.  Used to indicate a DataType field has not been set. - DT_FLOAT: Data types that all computation devices are expected to be capable to support. - DT_FLOAT_REF: Do not use!  These are only for parameters.  Every enum above should have a corresponding value below (verified by types_test). */
	export enum TensorflowDataType { DT_INVALID = 'DT_INVALID', DT_FLOAT = 'DT_FLOAT', DT_DOUBLE = 'DT_DOUBLE', DT_INT32 = 'DT_INT32', DT_UINT8 = 'DT_UINT8', DT_INT16 = 'DT_INT16', DT_INT8 = 'DT_INT8', DT_STRING = 'DT_STRING', DT_COMPLEX64 = 'DT_COMPLEX64', DT_INT64 = 'DT_INT64', DT_BOOL = 'DT_BOOL', DT_QINT8 = 'DT_QINT8', DT_QUINT8 = 'DT_QUINT8', DT_QINT32 = 'DT_QINT32', DT_BFLOAT16 = 'DT_BFLOAT16', DT_QINT16 = 'DT_QINT16', DT_QUINT16 = 'DT_QUINT16', DT_UINT16 = 'DT_UINT16', DT_COMPLEX128 = 'DT_COMPLEX128', DT_HALF = 'DT_HALF', DT_RESOURCE = 'DT_RESOURCE', DT_VARIANT = 'DT_VARIANT', DT_UINT32 = 'DT_UINT32', DT_UINT64 = 'DT_UINT64', DT_FLOAT_REF = 'DT_FLOAT_REF', DT_DOUBLE_REF = 'DT_DOUBLE_REF', DT_INT32_REF = 'DT_INT32_REF', DT_UINT8_REF = 'DT_UINT8_REF', DT_INT16_REF = 'DT_INT16_REF', DT_INT8_REF = 'DT_INT8_REF', DT_STRING_REF = 'DT_STRING_REF', DT_COMPLEX64_REF = 'DT_COMPLEX64_REF', DT_INT64_REF = 'DT_INT64_REF', DT_BOOL_REF = 'DT_BOOL_REF', DT_QINT8_REF = 'DT_QINT8_REF', DT_QUINT8_REF = 'DT_QUINT8_REF', DT_QINT32_REF = 'DT_QINT32_REF', DT_BFLOAT16_REF = 'DT_BFLOAT16_REF', DT_QINT16_REF = 'DT_QINT16_REF', DT_QUINT16_REF = 'DT_QUINT16_REF', DT_UINT16_REF = 'DT_UINT16_REF', DT_COMPLEX128_REF = 'DT_COMPLEX128_REF', DT_HALF_REF = 'DT_HALF_REF', DT_RESOURCE_REF = 'DT_RESOURCE_REF', DT_VARIANT_REF = 'DT_VARIANT_REF', DT_UINT32_REF = 'DT_UINT32_REF', DT_UINT64_REF = 'DT_UINT64_REF' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Post seldon/{namespace}/{deployment}/api/v1.0/feedback
		 * @param {string} namespace Max length: 2097152
		 * @param {string} deployment Max length: 2097152
		 * @return {SeldonMessage} A successful response.
		 */
		SendFeedback(namespace: string, deployment: string, requestBody: Feedback): Observable<SeldonMessage> {
			return this.http.post<SeldonMessage>(this.baseUri + 'seldon/' + (namespace == null ? '' : encodeURIComponent(namespace)) + '/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '/api/v1.0/feedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post seldon/{namespace}/{deployment}/api/v1.0/predictions
		 * @param {string} namespace Max length: 2097152
		 * @param {string} deployment Max length: 2097152
		 * @return {SeldonMessage} A successful response.
		 */
		Predict(namespace: string, deployment: string, requestBody: SeldonMessage): Observable<SeldonMessage> {
			return this.http.post<SeldonMessage>(this.baseUri + 'seldon/' + (namespace == null ? '' : encodeURIComponent(namespace)) + '/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '/api/v1.0/predictions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

