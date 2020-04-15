using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Concurrent;

namespace MyNamespace
{

    [System.CodeDom.Compiler.GeneratedCode("NSwag", "13.3.0.0 (NJsonSchema v10.1.11.0 (Newtonsoft.Json v12.0.0.0))")]
    [Route("petstore.swagger.io/v2")]
    public partial class Controller : ControllerBase
    {
        public Controller()
        {
        }

        /// <summary>Add a new pet to the store</summary>
        /// <param name="accept_Language">The language you prefer for messages. Supported values are en-AU, en-CA, en-GB, en-US</param>
        /// <param name="cookieParam">Some cookie</param>
        [HttpPost, Route("pet")]
        public async Task<IActionResult> AddPet([FromBody] object body, [FromHeader(Name = "Accept-Language")] string accept_Language, long cookieParam)
        {
            return _implementation.AddPetAsync(body, accept_Language ?? "en-AU", cookieParam);
        }

        /// <summary>Update an existing pet</summary>
        /// <param name="accept_Language">The language you prefer for messages. Supported values are en-AU, en-CA, en-GB, en-US</param>
        /// <param name="cookieParam">Some cookie</param>
        [HttpPut, Route("pet")]
        public async Task<IActionResult> UpdatePet([FromBody] object body, [FromHeader(Name = "Accept-Language")] string accept_Language, long cookieParam)
        {
            return _implementation.UpdatePetAsync(body, accept_Language ?? "en-AU", cookieParam);
        }

        /// <summary>Find pet by ID</summary>
        /// <param name="petId">ID of pet to return</param>
        /// <returns>successful operation</returns>
        [HttpGet, Route("pet/{petId}")]
        public async Task<ActionResult<Pet>> GetPetById(long petId)
        {
            Pet p;
            if (PetData.Instance.Dic.TryGetValue(petId, out p))
            {
                return p;
            }
            else
            {
                return NotFound();
            }
        }

        /// <summary>Updates a pet in the store with form data</summary>
        /// <param name="petId">ID of pet that needs to be updated</param>
        [HttpPost, Route("pet/{petId}")]
        public async Task<IActionResult> UpdatePetWithForm(long petId, Microsoft.AspNetCore.Http.IFormFile body)
        {
            throw new NotImplementedException();
        }

        /// <summary>Deletes a pet</summary>
        /// <param name="petId">Pet id to delete</param>
        [HttpDelete, Route("pet/{petId}")]
        public async Task<IActionResult> DeletePet(long petId)
        {
            if (PetData.Instance.Dic.TryRemove(petId, out _))
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        /// <summary>uploads an image</summary>
        /// <param name="petId">ID of pet to update</param>
        /// <returns>successful operation</returns>
        [HttpPost, Route("pet/{petId}/uploadImage")]
        public async Task<ActionResult<ApiResponse>> UploadFile(long petId, Microsoft.AspNetCore.Http.IFormFile body)
        {
            throw new NotImplementedException();
        }

        /// <summary>Finds Pets by status</summary>
        /// <param name="status">Status values that need to be considered for filter</param>
        /// <returns>successful operation</returns>
        [HttpGet, Route("pet/findByStatus")]
        public async Task<ActionResult<System.Collections.Generic.ICollection<Pet>>> FindPetsByStatus([FromQuery] System.Collections.Generic.IEnumerable<PetStatus> status)
        {
            PetData.Instance.Dic.Values.Where(d=>d.Status== status).to
        }

        /// <summary>Finds Pets by tags</summary>
        /// <param name="tags">Tags to filter by</param>
        /// <returns>successful operation</returns>
        [System.Obsolete]
        [HttpGet, Route("pet/findByTags")]
        public async Task<ActionResult<System.Collections.Generic.ICollection<Pet>>> FindPetsByTags([FromQuery] System.Collections.Generic.IEnumerable<string> tags)
        {
            return _implementation.FindPetsByTagsAsync(tags);
        }

        /// <summary>Returns pet inventories by status</summary>
        /// <returns>successful operation</returns>
        [HttpGet, Route("store/inventory")]
        public async Task<ActionResult<System.Collections.Generic.IDictionary<string, int>>> GetInventory()
        {
            return _implementation.GetInventoryAsync();
        }

        /// <summary>Place an order for a pet</summary>
        /// <param name="body">order placed for purchasing the pet</param>
        /// <returns>successful operation</returns>
        [HttpPost, Route("store/order")]
        public async Task<ActionResult<Order>> PlaceOrder([FromBody] Order body)
        {
            return _implementation.PlaceOrderAsync(body);
        }

        /// <summary>Find purchase order by ID</summary>
        /// <param name="orderId">ID of pet that needs to be fetched</param>
        /// <returns>successful operation</returns>
        [HttpGet, Route("store/order/{orderId}")]
        public async Task<ActionResult<Order>> GetOrderById(long orderId)
        {
            return _implementation.GetOrderByIdAsync(orderId);
        }

        /// <summary>Delete purchase order by ID</summary>
        /// <param name="orderId">ID of the order that needs to be deleted</param>
        [HttpDelete, Route("store/order/{orderId}")]
        public async Task<IActionResult> DeleteOrder(string orderId)
        {
            return _implementation.DeleteOrderAsync(orderId);
        }

        /// <summary>Create user</summary>
        /// <param name="body">Created user object</param>
        /// <returns>successful operation</returns>
        [HttpPost, Route("user")]
        public async Task<IActionResult> CreateUser([FromBody] User body)
        {
            return _implementation.CreateUserAsync(body);
        }

        /// <summary>Get user by user name</summary>
        /// <param name="username">The name that needs to be fetched. Use user1 for testing.</param>
        /// <returns>successful operation</returns>
        [HttpGet, Route("user/{username}")]
        public async Task<ActionResult<User>> GetUserByName(string username)
        {
            return _implementation.GetUserByNameAsync(username);
        }

        /// <summary>Updated user</summary>
        /// <param name="username">name that need to be deleted</param>
        /// <param name="body">Updated user object</param>
        [HttpPut, Route("user/{username}")]
        public async Task<IActionResult> UpdateUser(string username, [FromBody] User body)
        {
            return _implementation.UpdateUserAsync(username, body);
        }

        /// <summary>Delete user</summary>
        /// <param name="username">The name that needs to be deleted</param>
        [HttpDelete, Route("user/{username}")]
        public async Task<IActionResult> DeleteUser(string username)
        {
            return _implementation.DeleteUserAsync(username);
        }

        /// <summary>Creates list of users with given input array</summary>
        /// <returns>successful operation</returns>
        [HttpPost, Route("user/createWithArray")]
        public async Task<IActionResult> CreateUsersWithArrayInput([FromBody] object body)
        {
            return _implementation.CreateUsersWithArrayInputAsync(body);
        }

        /// <summary>Creates list of users with given input array</summary>
        /// <returns>successful operation</returns>
        [HttpPost, Route("user/createWithList")]
        public async Task<IActionResult> CreateUsersWithListInput([FromBody] object body)
        {
            return _implementation.CreateUsersWithListInputAsync(body);
        }

        /// <summary>Logs user into the system</summary>
        /// <param name="username">The user name for login</param>
        /// <param name="password">The password for login in clear text</param>
        /// <returns>successful operation</returns>
        [HttpGet, Route("user/login")]
        public async Task<ActionResult<string>> LoginUser([FromQuery] string username, [FromQuery] string password)
        {
            return _implementation.LoginUserAsync(username, password);
        }

        /// <summary>Logs out current logged in user session</summary>
        /// <returns>successful operation</returns>
        [HttpGet, Route("user/logout")]
        public async Task<IActionResult> LogoutUser()
        {
            return _implementation.LogoutUserAsync();
        }

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
    public partial class ApiResponse
    {
        [Newtonsoft.Json.JsonProperty("code", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public int Code { get; set; }

        [Newtonsoft.Json.JsonProperty("type", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public string Type { get; set; }

        [Newtonsoft.Json.JsonProperty("message", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public string Message { get; set; }

        private System.Collections.Generic.IDictionary<string, object> _additionalProperties = new System.Collections.Generic.Dictionary<string, object>();

        [Newtonsoft.Json.JsonExtensionData]
        public System.Collections.Generic.IDictionary<string, object> AdditionalProperties
        {
            get { return _additionalProperties; }
            set { _additionalProperties = value; }
        }


    }

    /// <summary>A representation of a cat</summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
    public partial class Cat : Pet
    {
        /// <summary>The measured skill for hunting</summary>
        [Newtonsoft.Json.JsonProperty("huntingSkill", Required = Newtonsoft.Json.Required.Always)]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        [Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]
        public CatHuntingSkill HuntingSkill { get; set; } = MyNamespace.CatHuntingSkill.Lazy;

        private System.Collections.Generic.IDictionary<string, object> _additionalProperties = new System.Collections.Generic.Dictionary<string, object>();

        [Newtonsoft.Json.JsonExtensionData]
        public System.Collections.Generic.IDictionary<string, object> AdditionalProperties
        {
            get { return _additionalProperties; }
            set { _additionalProperties = value; }
        }


    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
    public partial class Category
    {
        /// <summary>Category ID</summary>
        [Newtonsoft.Json.JsonProperty("id", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public long Id { get; set; }

        /// <summary>Category name</summary>
        [Newtonsoft.Json.JsonProperty("name", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        [System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength = 1)]
        public string Name { get; set; }

        /// <summary>Test Sub Category</summary>
        [Newtonsoft.Json.JsonProperty("sub", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public Sub Sub { get; set; }

        private System.Collections.Generic.IDictionary<string, object> _additionalProperties = new System.Collections.Generic.Dictionary<string, object>();

        [Newtonsoft.Json.JsonExtensionData]
        public System.Collections.Generic.IDictionary<string, object> AdditionalProperties
        {
            get { return _additionalProperties; }
            set { _additionalProperties = value; }
        }


    }

    /// <summary>A representation of a dog</summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
    public partial class Dog : Pet
    {
        /// <summary>The size of the pack the dog is from</summary>
        [Newtonsoft.Json.JsonProperty("packSize", Required = Newtonsoft.Json.Required.Always)]
        [System.ComponentModel.DataAnnotations.Range(1, int.MaxValue)]
        public int PackSize { get; set; } = 1;

        private System.Collections.Generic.IDictionary<string, object> _additionalProperties = new System.Collections.Generic.Dictionary<string, object>();

        [Newtonsoft.Json.JsonExtensionData]
        public System.Collections.Generic.IDictionary<string, object> AdditionalProperties
        {
            get { return _additionalProperties; }
            set { _additionalProperties = value; }
        }


    }

    /// <summary>A representation of a honey bee</summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
    public partial class HoneyBee : Pet
    {
        /// <summary>Average amount of honey produced per day in ounces</summary>
        [Newtonsoft.Json.JsonProperty("honeyPerDay", Required = Newtonsoft.Json.Required.Always)]
        public double HoneyPerDay { get; set; }

        private System.Collections.Generic.IDictionary<string, object> _additionalProperties = new System.Collections.Generic.Dictionary<string, object>();

        [Newtonsoft.Json.JsonExtensionData]
        public System.Collections.Generic.IDictionary<string, object> AdditionalProperties
        {
            get { return _additionalProperties; }
            set { _additionalProperties = value; }
        }


    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
    public partial class Order
    {
        /// <summary>Order ID</summary>
        [Newtonsoft.Json.JsonProperty("id", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public long Id { get; set; }

        /// <summary>Pet ID</summary>
        [Newtonsoft.Json.JsonProperty("petId", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public long PetId { get; set; }

        [Newtonsoft.Json.JsonProperty("quantity", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        [System.ComponentModel.DataAnnotations.Range(1, int.MaxValue)]
        public int Quantity { get; set; } = 1;

        /// <summary>Estimated ship date</summary>
        [Newtonsoft.Json.JsonProperty("shipDate", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public System.DateTimeOffset ShipDate { get; set; }

        /// <summary>Order Status</summary>
        [Newtonsoft.Json.JsonProperty("status", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        [Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]
        public OrderStatus Status { get; set; }

        /// <summary>Indicates whenever order was completed or not</summary>
        [Newtonsoft.Json.JsonProperty("complete", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public bool Complete { get; set; } = false;

        /// <summary>Unique Request Id</summary>
        [Newtonsoft.Json.JsonProperty("requestId", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public string RequestId { get; set; }

        private System.Collections.Generic.IDictionary<string, object> _additionalProperties = new System.Collections.Generic.Dictionary<string, object>();

        [Newtonsoft.Json.JsonExtensionData]
        public System.Collections.Generic.IDictionary<string, object> AdditionalProperties
        {
            get { return _additionalProperties; }
            set { _additionalProperties = value; }
        }


    }

    [Newtonsoft.Json.JsonConverter(typeof(JsonInheritanceConverter), "petType")]
    [JsonInheritanceAttribute("cat", typeof(Cat))]
    [JsonInheritanceAttribute("dog", typeof(Dog))]
    [JsonInheritanceAttribute("bee", typeof(HoneyBee))]
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
    public partial class Pet
    {
        /// <summary>Pet ID</summary>
        [Newtonsoft.Json.JsonProperty("id", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public long Id { get; set; }

        /// <summary>Categories this pet belongs to</summary>
        [Newtonsoft.Json.JsonProperty("category", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public Category Category { get; set; }

        /// <summary>The name given to a pet</summary>
        [Newtonsoft.Json.JsonProperty("name", Required = Newtonsoft.Json.Required.Always)]
        [System.ComponentModel.DataAnnotations.Required(AllowEmptyStrings = true)]
        public string Name { get; set; }

        /// <summary>The list of URL to a cute photos featuring pet</summary>
        [Newtonsoft.Json.JsonProperty("photoUrls", Required = Newtonsoft.Json.Required.Always)]
        [System.ComponentModel.DataAnnotations.Required]
        [System.ComponentModel.DataAnnotations.MaxLength(20)]
        public System.Collections.Generic.List<string> PhotoUrls { get; set; } = new System.Collections.Generic.List<string>();

        [Newtonsoft.Json.JsonProperty("friend", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public Pet Friend { get; set; }

        /// <summary>Tags attached to the pet</summary>
        [Newtonsoft.Json.JsonProperty("tags", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        [System.ComponentModel.DataAnnotations.MinLength(1)]
        public System.Collections.Generic.List<Tag> Tags { get; set; }

        /// <summary>Pet status in the store</summary>
        [Newtonsoft.Json.JsonProperty("status", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        [Newtonsoft.Json.JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]
        public PetStatus Status { get; set; }

        private System.Collections.Generic.IDictionary<string, object> _additionalProperties = new System.Collections.Generic.Dictionary<string, object>();

        [Newtonsoft.Json.JsonExtensionData]
        public System.Collections.Generic.IDictionary<string, object> AdditionalProperties
        {
            get { return _additionalProperties; }
            set { _additionalProperties = value; }
        }


    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
    public partial class Tag
    {
        /// <summary>Tag ID</summary>
        [Newtonsoft.Json.JsonProperty("id", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public long Id { get; set; }

        /// <summary>Tag name</summary>
        [Newtonsoft.Json.JsonProperty("name", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        [System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength = 1)]
        public string Name { get; set; }

        private System.Collections.Generic.IDictionary<string, object> _additionalProperties = new System.Collections.Generic.Dictionary<string, object>();

        [Newtonsoft.Json.JsonExtensionData]
        public System.Collections.Generic.IDictionary<string, object> AdditionalProperties
        {
            get { return _additionalProperties; }
            set { _additionalProperties = value; }
        }


    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
    public partial class User
    {
        [Newtonsoft.Json.JsonProperty("id", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public long Id { get; set; }

        [Newtonsoft.Json.JsonProperty("pet", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public Pet Pet { get; set; }

        /// <summary>User supplied username</summary>
        [Newtonsoft.Json.JsonProperty("username", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        [System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength = 4)]
        public string Username { get; set; }

        /// <summary>User first name</summary>
        [Newtonsoft.Json.JsonProperty("firstName", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        [System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength = 1)]
        public string FirstName { get; set; }

        /// <summary>User last name</summary>
        [Newtonsoft.Json.JsonProperty("lastName", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        [System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength = 1)]
        public string LastName { get; set; }

        /// <summary>User email address</summary>
        [Newtonsoft.Json.JsonProperty("email", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public string Email { get; set; }

        /// <summary>User password, MUST contain a mix of upper and lower case letters, as well as digits</summary>
        [Newtonsoft.Json.JsonProperty("password", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        [System.ComponentModel.DataAnnotations.StringLength(int.MaxValue, MinimumLength = 8)]
        [System.ComponentModel.DataAnnotations.RegularExpression(@"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/")]
        public string Password { get; set; }

        /// <summary>User phone number in international format</summary>
        [Newtonsoft.Json.JsonProperty("phone", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        [System.ComponentModel.DataAnnotations.RegularExpression(@"/^\+(?:[0-9]-?){6,14}[0-9]$/")]
        public string Phone { get; set; }

        /// <summary>User status</summary>
        [Newtonsoft.Json.JsonProperty("userStatus", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public int UserStatus { get; set; }

        private System.Collections.Generic.IDictionary<string, object> _additionalProperties = new System.Collections.Generic.Dictionary<string, object>();

        [Newtonsoft.Json.JsonExtensionData]
        public System.Collections.Generic.IDictionary<string, object> AdditionalProperties
        {
            get { return _additionalProperties; }
            set { _additionalProperties = value; }
        }


    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
    public enum Anonymous
    {
        [System.Runtime.Serialization.EnumMember(Value = @"available")]
        Available = 0,

        [System.Runtime.Serialization.EnumMember(Value = @"pending")]
        Pending = 1,

        [System.Runtime.Serialization.EnumMember(Value = @"sold")]
        Sold = 2,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
    public enum CatHuntingSkill
    {
        [System.Runtime.Serialization.EnumMember(Value = @"clueless")]
        Clueless = 0,

        [System.Runtime.Serialization.EnumMember(Value = @"lazy")]
        Lazy = 1,

        [System.Runtime.Serialization.EnumMember(Value = @"adventurous")]
        Adventurous = 2,

        [System.Runtime.Serialization.EnumMember(Value = @"aggressive")]
        Aggressive = 3,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
    public partial class Sub
    {
        /// <summary>Dumb Property</summary>
        [Newtonsoft.Json.JsonProperty("prop1", Required = Newtonsoft.Json.Required.DisallowNull, NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore)]
        public string Prop1 { get; set; }

        private System.Collections.Generic.IDictionary<string, object> _additionalProperties = new System.Collections.Generic.Dictionary<string, object>();

        [Newtonsoft.Json.JsonExtensionData]
        public System.Collections.Generic.IDictionary<string, object> AdditionalProperties
        {
            get { return _additionalProperties; }
            set { _additionalProperties = value; }
        }


    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
    public enum OrderStatus
    {
        [System.Runtime.Serialization.EnumMember(Value = @"placed")]
        Placed = 0,

        [System.Runtime.Serialization.EnumMember(Value = @"approved")]
        Approved = 1,

        [System.Runtime.Serialization.EnumMember(Value = @"delivered")]
        Delivered = 2,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
    public enum PetStatus
    {
        [System.Runtime.Serialization.EnumMember(Value = @"available")]
        Available = 0,

        [System.Runtime.Serialization.EnumMember(Value = @"pending")]
        Pending = 1,

        [System.Runtime.Serialization.EnumMember(Value = @"sold")]
        Sold = 2,

    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
    [System.AttributeUsage(System.AttributeTargets.Class, AllowMultiple = true)]
    internal class JsonInheritanceAttribute : System.Attribute
    {
        public JsonInheritanceAttribute(string key, System.Type type)
        {
            Key = key;
            Type = type;
        }

        public string Key { get; }

        public System.Type Type { get; }
    }

    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.11.0 (Newtonsoft.Json v12.0.0.0)")]
    internal class JsonInheritanceConverter : Newtonsoft.Json.JsonConverter
    {
        internal static readonly string DefaultDiscriminatorName = "discriminator";

        private readonly string _discriminator;

        [System.ThreadStatic]
        private static bool _isReading;

        [System.ThreadStatic]
        private static bool _isWriting;

        public JsonInheritanceConverter()
        {
            _discriminator = DefaultDiscriminatorName;
        }

        public JsonInheritanceConverter(string discriminator)
        {
            _discriminator = discriminator;
        }

        public override void WriteJson(Newtonsoft.Json.JsonWriter writer, object value, Newtonsoft.Json.JsonSerializer serializer)
        {
            try
            {
                _isWriting = true;

                var jObject = Newtonsoft.Json.Linq.JObject.FromObject(value, serializer);
                jObject.AddFirst(new Newtonsoft.Json.Linq.JProperty(_discriminator, GetSubtypeDiscriminator(value.GetType())));
                writer.WriteToken(jObject.CreateReader());
            }
            finally
            {
                _isWriting = false;
            }
        }

        public override bool CanWrite
        {
            get
            {
                if (_isWriting)
                {
                    _isWriting = false;
                    return false;
                }
                return true;
            }
        }

        public override bool CanRead
        {
            get
            {
                if (_isReading)
                {
                    _isReading = false;
                    return false;
                }
                return true;
            }
        }

        public override bool CanConvert(System.Type objectType)
        {
            return true;
        }

        public override object ReadJson(Newtonsoft.Json.JsonReader reader, System.Type objectType, object existingValue, Newtonsoft.Json.JsonSerializer serializer)
        {
            var jObject = serializer.Deserialize<Newtonsoft.Json.Linq.JObject>(reader);
            if (jObject == null)
                return null;

            var discriminator = Newtonsoft.Json.Linq.Extensions.Value<string>(jObject.GetValue(_discriminator));
            var subtype = GetObjectSubtype(objectType, discriminator);

            var objectContract = serializer.ContractResolver.ResolveContract(subtype) as Newtonsoft.Json.Serialization.JsonObjectContract;
            if (objectContract == null || System.Linq.Enumerable.All(objectContract.Properties, p => p.PropertyName != _discriminator))
            {
                jObject.Remove(_discriminator);
            }

            try
            {
                _isReading = true;
                return serializer.Deserialize(jObject.CreateReader(), subtype);
            }
            finally
            {
                _isReading = false;
            }
        }

        private System.Type GetObjectSubtype(System.Type objectType, string discriminator)
        {
            foreach (var attribute in System.Reflection.CustomAttributeExtensions.GetCustomAttributes<JsonInheritanceAttribute>(System.Reflection.IntrospectionExtensions.GetTypeInfo(objectType), true))
            {
                if (attribute.Key == discriminator)
                    return attribute.Type;
            }

            return objectType;
        }

        private string GetSubtypeDiscriminator(System.Type objectType)
        {
            foreach (var attribute in System.Reflection.CustomAttributeExtensions.GetCustomAttributes<JsonInheritanceAttribute>(System.Reflection.IntrospectionExtensions.GetTypeInfo(objectType), true))
            {
                if (attribute.Type == objectType)
                    return attribute.Key;
            }

            return objectType.Name;
        }
    }

    [System.CodeDom.Compiler.GeneratedCode("NSwag", "13.3.0.0 (NJsonSchema v10.1.11.0 (Newtonsoft.Json v12.0.0.0))")]
    public partial class FileParameter
    {
        public FileParameter(System.IO.Stream data)
            : this(data, null)
        {
        }

        public FileParameter(System.IO.Stream data, string fileName)
            : this(data, fileName, null)
        {
        }

        public FileParameter(System.IO.Stream data, string fileName, string contentType)
        {
            Data = data;
            FileName = fileName;
            ContentType = contentType;
        }

        public System.IO.Stream Data { get; private set; }

        public string FileName { get; private set; }

        public string ContentType { get; private set; }
    }

    public sealed class PetData
    {
        private static readonly Lazy<PetData> lazy =
            new Lazy<PetData>(() => new PetData());

        public static PetData Instance { get { return lazy.Value; } }

        private PetData()
        {
            Dic = new ConcurrentDictionary<long, Pet>(new KeyValuePair<long, Pet>[] {
                new KeyValuePair<long, Pet>(11, new Pet {Id=11, Name="Nice" }),
                new KeyValuePair<long, Pet>(12, new Pet {Id=12, Name="Narco" }),
                new KeyValuePair<long, Pet>(13, new Pet {Id=13, Name="Bombasto" }),
                new KeyValuePair<long, Pet>(14, new Pet {Id=14, Name="Celeritas" }),
                new KeyValuePair<long, Pet>(15, new Pet {Id=15, Name="Magneta" }),
                new KeyValuePair<long, Pet>(16, new Pet {Id=16, Name="RubberMan" }),
                new KeyValuePair<long, Pet>(17, new Pet {Id=17, Name="Dynama" }),
                new KeyValuePair<long, Pet>(18, new Pet {Id=18, Name="IQ" }),
                new KeyValuePair<long, Pet>(19, new Pet {Id=19, Name="Magma" }),
                new KeyValuePair<long, Pet>(20, new Pet {Id=29, Name="Tornado" }),

                });
        }

        public ConcurrentDictionary<long, Pet> Dic { get; private set; }
    }
}

