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
	/// Cuentas bancarias. En cuentas europeas, solamente activado cuando el cliente de Wealth Reader cuenta con licencia PSD2
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Accounts
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="balances")]
		public AccountsBalances Balances { get; set; }
		
		/// <summary>
		/// Código IBAN sin espacios
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="currency")]
		public string Currency { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="owners")]
		public Owner Owners { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="transactions")]
		public AccountsTransactions[] AccountsTransactions { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="uuid")]
		public string Uuid { get; set; }
	}
	
	public class AccountsBalances
	{
		
		[System.Runtime.Serialization.DataMember(Name="available")]
		public System.Nullable<System.Double> Available { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="current")]
		public System.Nullable<System.Double> Current { get; set; }
	}
	
	public class AccountsTransactions
	{
		
		[System.Runtime.Serialization.DataMember(Name="amount")]
		public System.Nullable<System.Double> Amount { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="balance")]
		public System.Nullable<System.Double> Balance { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="operation_date")]
		public System.Nullable<System.DateOnly> Operation_date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="uuid")]
		public string Uuid { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value_date")]
		public System.Nullable<System.DateOnly> Value_date { get; set; }
	}
	
	/// <summary>
	/// Tarjetas de crédito, débito y prepago
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Cards
	{
		
		[System.Runtime.Serialization.DataMember(Name="anual_interest")]
		public System.Nullable<System.Double> Anual_interest { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="balances")]
		public CardsBalances Balances { get; set; }
		
		/// <summary>
		/// Numeración con ofuscación PCI compliance
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="currency")]
		public string Currency { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="linked_account")]
		public string Linked_account { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="next_payment_date")]
		public System.Nullable<System.DateOnly> Next_payment_date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="owner")]
		public Owner Owner { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="status")]
		public System.Nullable<CardsStatus> Status { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="subtype")]
		public CardsSubtype Subtype { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="tae")]
		public System.Nullable<System.Double> Tae { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="transactions")]
		public string[] Transactions { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="uuid")]
		public string Uuid { get; set; }
	}
	
	public class CardsBalances
	{
		
		[System.Runtime.Serialization.DataMember(Name="available")]
		public System.Nullable<System.Double> Available { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="disposed")]
		public System.Nullable<System.Double> Disposed { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="limit")]
		public System.Nullable<System.Double> Limit { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum CardsStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		active = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		inactive = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		cancelled = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum CardsSubtype
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		credit = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		debit = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		prepaid = 2,
	}
	
	/// <summary>
	/// Solamente estará informado cuando el valor de code sea 2020 (usuario multicontrato)
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Contracts
	{
		
		/// <summary>
		/// Identificador único del contrato. Valor a indicar para seleccionar el contrato al que se desea acceder
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="contract_id")]
		public string Contract_id { get; set; }
		
		/// <summary>
		/// Descripción que acompaña al contract_id. Normalmente será el nombre de la sociedad o persona titular del contrato
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Entities
	{
		
		/// <summary>
		/// Código BIC. Solamente está indicado cuando la entidad es un banco
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="bic")]
		public string Bic { get; set; }
		
		/// <summary>
		/// El código de la institución
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="inputs")]
		public EntitiesInputs Inputs { get; set; }
		
		/// <summary>
		/// Logotipo
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="logo")]
		public string Logo { get; set; }
		
		/// <summary>
		/// The nombre de la institución
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="statistics")]
		public Statistics Statistics { get; set; }
	}
	
	public class EntitiesInputs
	{
		
		[System.Runtime.Serialization.DataMember(Name="document_type")]
		public EntitiesInputsDocument_type Document_type { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="password")]
		public EntitiesInputsPassword Password { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="second_password")]
		public EntitiesInputsSecond_password Second_password { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="user")]
		public EntitiesInputsUser User { get; set; }
	}
	
	public class EntitiesInputsDocument_type
	{
		
		/// <summary>
		/// Nombre del campo. Al ser el campo 'tipo de documento' un listado de valores desplegables, este string es un listado de valores separados por punto y coma
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Etiqueta dentro del campo que aporta información adicional sobre cómo rellenar la información
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="placeholder")]
		public string Placeholder { get; set; }
		
		/// <summary>
		/// Indica si el campo es requerido
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="required")]
		public System.Nullable<System.Boolean> Required { get; set; }
		
		/// <summary>
		/// Indica el tipo de dato que acepta este campo
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="validation_rule")]
		public string Validation_rule { get; set; }
	}
	
	public class EntitiesInputsPassword
	{
		
		/// <summary>
		/// Nombre del campo
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Etiqueta dentro del campo que aporta información adicional sobre cómo rellenar la información
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="placeholder")]
		public string Placeholder { get; set; }
		
		/// <summary>
		/// Indica si el campo es requerido
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="required")]
		public System.Nullable<System.Boolean> Required { get; set; }
		
		/// <summary>
		/// Indica el tipo de dato que acepta este campo
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="validation_rule")]
		public string Validation_rule { get; set; }
	}
	
	public class EntitiesInputsSecond_password
	{
		
		/// <summary>
		/// Indica el tipo de dato que acepta este campo
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Etiqueta dentro del campo que aporta información adicional sobre cómo rellenar la información
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="placeholder")]
		public string Placeholder { get; set; }
		
		/// <summary>
		/// Indica si el campo es requerido
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="required")]
		public System.Nullable<System.Boolean> Required { get; set; }
		
		/// <summary>
		/// The validation rule for the field
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="validation_rule")]
		public string Validation_rule { get; set; }
	}
	
	public class EntitiesInputsUser
	{
		
		/// <summary>
		/// Nombre del campo
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Etiqueta dentro del campo que aporta información adicional sobre cómo rellenar la información
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="placeholder")]
		public string Placeholder { get; set; }
		
		/// <summary>
		/// Indica si el campo es requerido
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="required")]
		public System.Nullable<System.Boolean> Required { get; set; }
		
		/// <summary>
		/// Indica el tipo de dato que acepta este campo
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="validation_rule")]
		public string Validation_rule { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Statistics
	{
		
		/// <summary>
		/// Guarda siempre este valor, tanto si la conexión es correcta como si no. Es necesario para obtener soporte
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string SESSION { get; set; }
		
		/// <summary>
		/// Duración de la ejecución
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="execution_time")]
		public double Execution_time { get; set; }
		
		/// <summary>
		/// El valor vendrá indicado cuando se haya invocado a la API a través del Widget que proporciona Wealth Reader. Para saber más sobre este tipo de integración, visita: https://docs-es.wealthreader.com/
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="operation_id")]
		public string Operation_id { get; set; }
		
		/// <summary>
		/// El valor vendrá indicado cuando se ha pedido la custodia de credenciales con la opción tokenize=true
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="token")]
		public string Token { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Entity_data
	{
		
		[System.Runtime.Serialization.DataMember(Name="payload")]
		public Entity_dataPayload Payload { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="statistics")]
		public Statistics Statistics { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="success")]
		public bool Success { get; set; }
	}
	
	public class Entity_dataPayload
	{
		
		/// <summary>
		/// Cuentas bancarias. En cuentas europeas, solamente activado cuando el cliente de Wealth Reader cuenta con licencia PSD2
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="accounts")]
		public string[] Accounts { get; set; }
		
		/// <summary>
		/// Tarjetas de crédito, débito y prepago
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="cards")]
		public string[] Cards { get; set; }
		
		/// <summary>
		/// Carteras de acciones, fondos y planes de pensiones
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="portfolios")]
		public string[] Portfolios { get; set; }
		
		/// <summary>
		/// Activos inmobiliarios
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public Properties Properties { get; set; }
		
		/// <summary>
		/// Información relativa a la persona que hace login
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="user_information")]
		public User_information User_information { get; set; }
	}
	
	/// <summary>
	/// Activos inmobiliarios
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Properties
	{
		
		/// <summary>
		/// Referencia catastral
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="currency")]
		public string Currency { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="historic_prices")]
		public PropertiesHistoric_prices[] PropertiesHistoric_prices { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="purpose")]
		public string Purpose { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="trading_price")]
		public double Trading_price { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="trading_year")]
		public double Trading_year { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="uuid")]
		public string Uuid { get; set; }
	}
	
	public class PropertiesHistoric_prices
	{
		
		[System.Runtime.Serialization.DataMember(Name="date")]
		public System.Nullable<System.DateOnly> Date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="price")]
		public System.Nullable<System.Double> Price { get; set; }
	}
	
	/// <summary>
	/// Información relativa a la persona que hace login
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class User_information
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string ID { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="address")]
		public string Address { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="birth_date")]
		public System.Nullable<System.DateOnly> Birth_date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="birth_place")]
		public string Birth_place { get; set; }
		
		/// <summary>
		/// Número de teléfono con el prefijo internacional, sin espacios
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="cell_phone")]
		public string Cell_phone { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="city")]
		public string City { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="country")]
		public string Country { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="email")]
		public string Email { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="gender")]
		public System.Nullable<User_informationGender> Gender { get; set; }
		
		/// <summary>
		/// El valor aquí es muy variable de una entidad a otra: de indicar solamente si es cuenta propia o cuenta ajena a indicar el tipo de profesión
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="job")]
		public string Job { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="marital_status")]
		public System.Nullable<User_informationMarital_status> Marital_status { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="postal_code")]
		public string Postal_code { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum User_informationGender
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		male = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		female = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum User_informationMarital_status
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		single = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		married = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Error
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="error")]
		public Error_detail Error1 { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="statistics")]
		public Statistics Statistics { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="success")]
		public bool Success { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Error_detail
	{
		
		/// <summary>
		/// El código indica la familia del error. Por ejemplo, de 2000 a 2999 indican problemas en el login. Cada código de error debe tratarse de forma diferente. Por ejemplo, si el código indica "Login incorrecto", no se debe reintentar la llamada; si el código indica "entidad en mantenimiento" sí se puede reintentar más tarde. Puedes obtener el listado completo en el método error-codes.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// Solamente estará informado cuando el valor de code sea 2020 (usuario multicontrato)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="contracts")]
		public string[] Contracts { get; set; }
		
		/// <summary>
		/// Texto en el idioma de la entidad. Es seguro mostrárselo al usuario y en muchos casos le ayudará a corregir el error
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Error_codes
	{
		
		/// <summary>
		/// Código de error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public System.Nullable<System.Int32> Code { get; set; }
		
		/// <summary>
		/// Descripción del error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Cómo actuar cuando se obtiene este código de error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="how_to_proceed")]
		public string How_to_proceed { get; set; }
		
		/// <summary>
		/// Posibles causas del error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="possible_reasons")]
		public string Possible_reasons { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Owner
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string ID { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="role")]
		public OwnerRole Role { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum OwnerRole
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		owner = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="co-owner")]
		coMinusowner = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="legal representative")]
		legal_representative = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		administrator = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="attorney-in-fact")]
		attorneyMinusinMinusfact = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		authorised = 5,
	}
	
	/// <summary>
	/// Carteras de acciones, fondos y planes de pensiones
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Portfolios
	{
		
		/// <summary>
		/// El valor será 0 cuando la entidad no lo proporcione
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="annualized_volatility")]
		public double Annualized_volatility { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// Composición de la cartera
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="composition")]
		public string[] Composition { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="contracting_date")]
		public System.DateOnly Contracting_date { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="contributions")]
		public double Contributions { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="currency")]
		public string Currency { get; set; }
		
		/// <summary>
		/// Código IBAN sin espacios. El valor será not-provided cuando la entidad no lo proporcione
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="linked_account")]
		public string Linked_account { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="owners")]
		public Owner Owners { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="subtype")]
		public PortfoliosSubtype Subtype { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="total_value")]
		public double Total_value { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="transactions")]
		public string[] Transactions { get; set; }
		
		/// <summary>
		/// Identificador único asignado por Wealth Reader
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="uuid")]
		public string Uuid { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="weighted_return")]
		public double Weighted_return { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="withholdings")]
		public double Withholdings { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="yield")]
		public double Yield { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum PortfoliosSubtype
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		funds = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		stocks = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="pension-plans")]
		pensionMinusplans = 2,
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
		/// Obtiene el listado de entidades soportadas
		/// Obtiene el listado de entidades soportadas y la información necesaria para dibujar el formulario de login de la entidad.
		/// 
		/// Entity_dataGet entities
		/// </summary>
		/// <returns>listado de entidades</returns>
		public async Task<Entities[]> Entity_dataGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "entities";
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
				return JsonSerializer.Deserialize<Entities[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Listado de códigos de error
		/// Listado de códigos de error. Presta especial atención a que no todos los códigos de error deben recibir el mismo tratamiento por parte de tu aplicación. Ante un error de password incorrecto no debes reintentar la llamada con los mismos parámetros, pero ante un error que te indique que la entidad está en mantenimiento sí puedes reintentarlo. Pide una sesión técnica con nuestro equipo para resolver cualquier duda sobre la gestión de errores.
		/// 
		/// Entity_dataGetByLang error-codes
		/// </summary>
		/// <param name="lang">Idioma de la respuesta</param>
		/// <returns>Códigos de error junto con su descripción, posible motivo y cómo proceder</returns>
		public async Task<Error_codes[]> Entity_dataGetByLangAsync(Entity_dataGetByLangLang lang, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "error-codes?lang=" + lang;
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
				return JsonSerializer.Deserialize<Error_codes[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum Entity_dataGetByLangLang
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		es = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		en = 1,
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