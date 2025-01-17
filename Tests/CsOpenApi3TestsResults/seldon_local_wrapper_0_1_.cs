//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	using System;
	using System.Linq;
	using System.Collections.Generic;
	using System.Threading.Tasks;
	using System.Text.Json;
	using System.Text.Json.Serialization;
	using Fonlow.Net.Http;
	
	
	/// <summary>
	/// Can be anything: string, number, array, object, etc.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AnyValue
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DefaultData
	{
		
		[System.Runtime.Serialization.DataMember(Name="names")]
		public string[] Names { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="ndarry")]
		public AnyValue[] Ndarry { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="tensor")]
		public Tensor Tensor { get; set; }
		
		/// <summary>
		/// Protocol buffer representing a tensor.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tftensor")]
		public TensorflowTensorProto Tftensor { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Tensor
	{
		
		[System.Runtime.Serialization.DataMember(Name="shape")]
		public int[] Shape { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="values")]
		public double[] Values { get; set; }
	}
	
	/// <summary>
	/// Protocol buffer representing a tensor.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class TensorflowTensorProto
	{
		
		[System.Runtime.Serialization.DataMember(Name="bool_val")]
		public bool[] Bool_val { get; set; }
		
		/// <summary>
		/// DT_COMPLEX128. dcomplex_val(2*i) and dcomplex_val(2*i+1) are real
		///and imaginary parts of i-th double precision complex.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dcomplex_val")]
		public double[] Dcomplex_val { get; set; }
		
		/// <summary>
		/// DT_DOUBLE.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="double_val")]
		public double[] Double_val { get; set; }
		
		/// <summary>
		/// - DT_INVALID: Not a legal value for DataType.  Used to indicate a DataType field
		///has not been set.
		/// - DT_FLOAT: Data types that all computation devices are expected to be
		///capable to support.
		/// - DT_FLOAT_REF: Do not use!  These are only for parameters.  Every enum above
		///should have a corresponding value below (verified by types_test).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dtype")]
		public System.Nullable<TensorflowTensorProtoDtype> Dtype { get; set; }
		
		/// <summary>
		/// DT_FLOAT.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="float_val")]
		public double[] Float_val { get; set; }
		
		/// <summary>
		/// DT_HALF, DT_BFLOAT16. Note that since protobuf has no int16 type, we'll
		///have some pointless zero padding for each value here.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="half_val")]
		public int[] Half_val { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="int64_val")]
		public string[] Int64_val { get; set; }
		
		/// <summary>
		/// DT_INT32, DT_INT16, DT_INT8, DT_UINT8.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="int_val")]
		public int[] Int_val { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="resource_handle_val")]
		public TensorflowResourceHandleProto[] Resource_handle_val { get; set; }
		
		/// <summary>
		/// DT_COMPLEX64. scomplex_val(2*i) and scomplex_val(2*i+1) are real
		///and imaginary parts of i-th single precision complex.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="scomplex_val")]
		public double[] Scomplex_val { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="string_val")]
		public string[] String_val { get; set; }
		
		/// <summary>
		/// Serialized raw tensor content from either Tensor::AsProtoTensorContent or
		///memcpy in tensorflow::grpc::EncodeTensorToByteBuffer. This representation
		///can be used for all tensor types. The purpose of this representation is to
		///reduce serialization overhead during RPC call by avoiding serialization of
		///many repeated small items.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tensor_content")]
		public string Tensor_content { get; set; }
		
		/// <summary>
		/// Dimensions of a tensor.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tensor_shape")]
		public TensorflowTensorShapeProto Tensor_shape { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="uint32_val")]
		public int[] Uint32_val { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="uint64_val")]
		public string[] Uint64_val { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="variant_val")]
		public TensorflowVariantTensorDataProto[] Variant_val { get; set; }
		
		/// <summary>
		/// Version number.
		///
		///In version 0, if the "repeated xxx" representations contain only one
		///element, that element is repeated to fill the shape.  This makes it easy
		///to represent a constant Tensor with a single value.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="version_number")]
		public System.Nullable<System.Int32> Version_number { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum TensorflowTensorProtoDtype
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INVALID = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_FLOAT = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_DOUBLE = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INT32 = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_UINT8 = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INT16 = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INT8 = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_STRING = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_COMPLEX64 = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INT64 = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_BOOL = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QINT8 = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QUINT8 = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QINT32 = 13,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_BFLOAT16 = 14,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QINT16 = 15,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QUINT16 = 16,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_UINT16 = 17,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_COMPLEX128 = 18,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_HALF = 19,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_RESOURCE = 20,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_VARIANT = 21,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_UINT32 = 22,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_UINT64 = 23,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_FLOAT_REF = 24,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_DOUBLE_REF = 25,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INT32_REF = 26,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_UINT8_REF = 27,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INT16_REF = 28,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INT8_REF = 29,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_STRING_REF = 30,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_COMPLEX64_REF = 31,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INT64_REF = 32,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_BOOL_REF = 33,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QINT8_REF = 34,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QUINT8_REF = 35,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QINT32_REF = 36,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_BFLOAT16_REF = 37,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QINT16_REF = 38,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QUINT16_REF = 39,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_UINT16_REF = 40,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_COMPLEX128_REF = 41,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_HALF_REF = 42,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_RESOURCE_REF = 43,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_VARIANT_REF = 44,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_UINT32_REF = 45,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_UINT64_REF = 46,
	}
	
	/// <summary>
	/// Protocol buffer representing a handle to a tensorflow resource. Handles are
	///not valid across executions, but can be serialized back and forth from within
	///a single run.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class TensorflowResourceHandleProto
	{
		
		/// <summary>
		/// Container in which this resource is placed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="container")]
		public string Container { get; set; }
		
		/// <summary>
		/// Unique name for the device containing the resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="device")]
		public string Device { get; set; }
		
		/// <summary>
		/// Hash code for the type of the resource. Is only valid in the same device
		///and in the same execution.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="hash_code")]
		public string Hash_code { get; set; }
		
		/// <summary>
		/// For debug-only, the name of the type pointed to by this handle, if
		///available.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="maybe_type_name")]
		public string Maybe_type_name { get; set; }
		
		/// <summary>
		/// Unique name of this resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	/// <summary>
	/// Dimensions of a tensor.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class TensorflowTensorShapeProto
	{
		
		/// <summary>
		/// Dimensions of the tensor, such as {"input", 30}, {"output", 40}
		///for a 30 x 40 2D tensor.  If an entry has size -1, this
		///corresponds to a dimension of unknown size. The names are
		///optional.
		///
		///The order of entries in "dim" matters: It indicates the layout of the
		///values in the tensor in-memory representation.
		///
		///The first entry in "dim" is the outermost dimension used to layout the
		///values, the last entry is the innermost dimension.  This matches the
		///in-memory layout of RowMajor Eigen tensors.
		///
		///If "dim.size()" > 0, "unknown_rank" must be false.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dim")]
		public TensorShapeProtoDim[] Dim { get; set; }
		
		/// <summary>
		/// If true, the number of dimensions in the shape is unknown.
		///
		///If true, "dim.size()" must be 0.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="unknown_rank")]
		public string Unknown_rank { get; set; }
	}
	
	/// <summary>
	/// One dimension of the tensor.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class TensorShapeProtoDim
	{
		
		/// <summary>
		/// Optional name of the tensor dimension.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Size of the tensor in that dimension.
		///This value must be >= -1, but values of -1 are reserved for "unknown"
		///shapes (values of -1 mean "unknown" dimension).  Certain wrappers
		///that work with TensorShapeProto may fail at runtime when deserializing
		///a TensorShapeProto containing a dim value of -1.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="size")]
		public string Size { get; set; }
	}
	
	/// <summary>
	/// Protocol buffer representing the serialization format of DT_VARIANT tensors.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class TensorflowVariantTensorDataProto
	{
		
		/// <summary>
		/// Portions of the object that are not Tensors.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="metadata")]
		public string Metadata { get; set; }
		
		/// <summary>
		/// Tensors contained within objects being serialized.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tensors")]
		public TensorflowTensorProto[] Tensors { get; set; }
		
		/// <summary>
		/// Name of the type of objects being serialized.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type_name")]
		public string Type_name { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Feedback
	{
		
		[System.Runtime.Serialization.DataMember(Name="request")]
		public SeldonMessage Request { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="response")]
		public SeldonMessage Response { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="reward")]
		public System.Nullable<System.Single> Reward { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="truth")]
		public SeldonMessage Truth { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SeldonMessage
	{
		
		[System.Runtime.Serialization.DataMember(Name="binData")]
		public string BinData { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="data")]
		public DefaultData Data { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public Meta Meta { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="status")]
		public Status Status { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="strData")]
		public string StrData { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Meta
	{
		
		[System.Runtime.Serialization.DataMember(Name="metrics")]
		public Metric[] Metrics { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="puid")]
		public string Puid { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="requestPath")]
		public System.Collections.Generic.Dictionary<string, string> RequestPath { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="routing")]
		public System.Collections.Generic.Dictionary<string, int> Routing { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public System.Collections.Generic.Dictionary<string, AnyValue> Tags { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Metric
	{
		
		[System.Runtime.Serialization.DataMember(Name="key")]
		public string Key { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="type")]
		public System.Nullable<MetricType> Type { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value")]
		public System.Nullable<System.Single> Value { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum MetricType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		COUNTER = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		GAUGE = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TIMER = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Status
	{
		
		[System.Runtime.Serialization.DataMember(Name="code")]
		public System.Nullable<System.Int32> Code { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="info")]
		public string Info { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="reason")]
		public string Reason { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="status")]
		public System.Nullable<StatusStatus1> Status1 { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum StatusStatus1
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SUCCESS = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FAILURE = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SeldonMessageList
	{
		
		[System.Runtime.Serialization.DataMember(Name="seldonMessages")]
		public SeldonMessage[] SeldonMessages { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum StatusStatusFlag
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SUCCESS = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FAILURE = 1,
	}
	
	/// <summary>
	/// - DT_INVALID: Not a legal value for DataType.  Used to indicate a DataType field
	///has not been set.
	/// - DT_FLOAT: Data types that all computation devices are expected to be
	///capable to support.
	/// - DT_FLOAT_REF: Do not use!  These are only for parameters.  Every enum above
	///should have a corresponding value below (verified by types_test).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum TensorflowDataType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INVALID = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_FLOAT = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_DOUBLE = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INT32 = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_UINT8 = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INT16 = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INT8 = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_STRING = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_COMPLEX64 = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INT64 = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_BOOL = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QINT8 = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QUINT8 = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QINT32 = 13,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_BFLOAT16 = 14,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QINT16 = 15,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QUINT16 = 16,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_UINT16 = 17,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_COMPLEX128 = 18,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_HALF = 19,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_RESOURCE = 20,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_VARIANT = 21,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_UINT32 = 22,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_UINT64 = 23,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_FLOAT_REF = 24,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_DOUBLE_REF = 25,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INT32_REF = 26,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_UINT8_REF = 27,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INT16_REF = 28,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INT8_REF = 29,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_STRING_REF = 30,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_COMPLEX64_REF = 31,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_INT64_REF = 32,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_BOOL_REF = 33,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QINT8_REF = 34,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QUINT8_REF = 35,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QINT32_REF = 36,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_BFLOAT16_REF = 37,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QINT16_REF = 38,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_QUINT16_REF = 39,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_UINT16_REF = 40,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_COMPLEX128_REF = 41,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_HALF_REF = 42,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_RESOURCE_REF = 43,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_VARIANT_REF = 44,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_UINT32_REF = 45,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DT_UINT64_REF = 46,
	}
	
	public partial class Misc
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerOptions jsonSerializerSettings;
		
		public Misc(System.Net.Http.HttpClient httpClient, JsonSerializerOptions jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// Aggregate aggregate
		/// </summary>
		/// <returns>A successful response.</returns>
		public async Task<SeldonMessage> AggregateAsync(SeldonMessageList body, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "aggregate?body=" + body;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SeldonMessage>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// TransformInput4 predict
		/// </summary>
		/// <returns>A successful response.</returns>
		public async Task<SeldonMessage> TransformInput4Async(SeldonMessage json, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "predict?json=" + json;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SeldonMessage>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Route2 route
		/// </summary>
		/// <returns>A successful response.</returns>
		public async Task<SeldonMessage> Route2Async(SeldonMessage json, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "route?json=" + json;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SeldonMessage>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// SendFeedback2 send-feedback
		/// </summary>
		/// <returns>A successful response.</returns>
		public async Task<SeldonMessage> SendFeedback2Async(Feedback json, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "send-feedback?json=" + json;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SeldonMessage>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// TransformInput2 transform-input
		/// </summary>
		/// <returns>A successful response.</returns>
		public async Task<SeldonMessage> TransformInput2Async(SeldonMessage json, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "transform-input?json=" + json;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SeldonMessage>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// TransformOutput2 transform-output
		/// </summary>
		/// <returns>A successful response.</returns>
		public async Task<SeldonMessage> TransformOutput2Async(SeldonMessage json, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "transform-output?json=" + json;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<SeldonMessage>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
}

namespace Fonlow.Net.Http
{
	using System.Net.Http;

	public class WebApiRequestException : HttpRequestException
	{
		public new System.Net.HttpStatusCode StatusCode { get; private set; }

		public string Response { get; private set; }

		public System.Net.Http.Headers.HttpResponseHeaders Headers { get; private set; }

		public System.Net.Http.Headers.MediaTypeHeaderValue ContentType { get; private set; }

		public WebApiRequestException(string message, System.Net.HttpStatusCode statusCode, string response, System.Net.Http.Headers.HttpResponseHeaders headers, System.Net.Http.Headers.MediaTypeHeaderValue contentType) : base(message)
		{
			StatusCode = statusCode;
			Response = response;
			Headers = headers;
			ContentType = contentType;
		}
	}

	public static class ResponseMessageExtensions
	{
		public static void EnsureSuccessStatusCodeEx(this HttpResponseMessage responseMessage)
		{
			if (!responseMessage.IsSuccessStatusCode)
			{
				var responseText = responseMessage.Content.ReadAsStringAsync().Result;
				var contentType = responseMessage.Content.Headers.ContentType;
				throw new WebApiRequestException(responseMessage.ReasonPhrase, responseMessage.StatusCode, responseText, responseMessage.Headers, contentType);
			}
		}
	}
}
