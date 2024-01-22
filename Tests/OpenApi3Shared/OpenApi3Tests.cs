using Xunit;
using Xunit.Abstractions;
using Fonlow.OpenApiClientGen.ClientTypes;
using SwagTests;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace OpenApiDirTests
{
	public partial class OpenApi3Tests
	{
		[Fact(Skip = "CursorRequest bad definition?")]
		public void Test_1password_com_events_1_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\1password.com\events\1.2.0\");
		}

		[Fact]
		public void Test_1password_local_connect_1_5_7()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\1password.local\connect\1.5.7\");
		}

		[Fact]
		public void Test_6_dot_authentiqio_appspot_com_6()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\6-dot-authentiqio.appspot.com\6\");
		}

		[Fact]
		public void Test_ably_io_platform_1_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ably.io\platform\1.1.0\");
		}

		[Fact]
		public void Test_ably_net_control_1_0_14()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ably.net\control\1.0.14\");
		}

		[Fact]
		public void Test_ably_net_control_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ably.net\control\v1\");
		}

		[Fact]
		public void Test_abstractapi_com_geolocation_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\abstractapi.com\geolocation\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip = "keyStorePassword@TypeHint as query name")]
		public void Test_adobe_com_aem_3_7_1_pre_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adobe.com\aem\3.7.1-pre.0\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_AccountService_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\AccountService\3\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_AccountService_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\AccountService\4\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_AccountService_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\AccountService\5\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_AccountService_6()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\AccountService\6\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_BalanceControlService_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\BalanceControlService\1\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_BalancePlatformConfigurationNotification_v1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\BalancePlatformConfigurationNotification-v1\1\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_BalancePlatformPaymentNotification_v1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\BalancePlatformPaymentNotification-v1\1\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_BalancePlatformReportNotification_v1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\BalancePlatformReportNotification-v1\1\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_BalancePlatformService_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\BalancePlatformService\1\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_BalancePlatformService_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\BalancePlatformService\2\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_BalancePlatformTransferNotification_v3_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\BalancePlatformTransferNotification-v3\3\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_BinLookupService_40()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\BinLookupService\40\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_BinLookupService_50()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\BinLookupService\50\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_BinLookupService_52()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\BinLookupService\52\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_BinLookupService_53()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\BinLookupService\53\");
		}

		[Fact(Skip ="3.1")]
		public void Test_adyen_com_BinLookupService_54()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\BinLookupService\54\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_37()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService\37\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_40()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService\40\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_41()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService\41\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_46()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService\46\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_49()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService\49\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_50()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService\50\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_51()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService\51\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_52()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService\52\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_53()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService\53\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_64()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService\64\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_65()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService\65\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_66()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService\66\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_67()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService\67\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_68()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService\68\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_69()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService\69\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_70()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService\70\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutService_v71_71()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutService-v71\71\");
		}

		[Fact]
		public void Test_adyen_com_CheckoutUtilityService_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\CheckoutUtilityService\1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_DataProtectionService_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\DataProtectionService\1\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_DisputeService_v30_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\DisputeService-v30\30\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_FundService_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\FundService\3\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_FundService_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\FundService\5\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_FundService_6()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\FundService\6\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_GrantService_v3_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\GrantService-v3\3\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_HopService_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\HopService\1\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_HopService_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\HopService\5\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_HopService_6()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\HopService\6\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_LegalEntityService_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\LegalEntityService\1\");
		}

		[Fact(Skip = "3.1")]

		public void Test_adyen_com_LegalEntityService_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\LegalEntityService\2\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_LegalEntityService_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\LegalEntityService\3\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_ManagementNotificationService_v1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\ManagementNotificationService-v1\1\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_ManagementService_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\ManagementService\1\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_ManagementService_v3_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\ManagementService-v3\3\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_MarketPayNotificationService_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\MarketPayNotificationService\3\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_MarketPayNotificationService_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\MarketPayNotificationService\4\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_MarketPayNotificationService_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\MarketPayNotificationService\5\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_MarketPayNotificationService_6()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\MarketPayNotificationService\6\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_NotificationConfigurationService_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\NotificationConfigurationService\1\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_NotificationConfigurationService_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\NotificationConfigurationService\2\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_NotificationConfigurationService_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\NotificationConfigurationService\3\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_NotificationConfigurationService_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\NotificationConfigurationService\4\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_NotificationConfigurationService_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\NotificationConfigurationService\5\");
		}

		[Fact(Skip ="3.1")]
		public void Test_adyen_com_NotificationConfigurationService_6()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\NotificationConfigurationService\6\");
		}

		[Fact]
		public void Test_adyen_com_PaymentService_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PaymentService\25\");
		}

		[Fact]
		public void Test_adyen_com_PaymentService_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PaymentService\30\");
		}

		[Fact]
		public void Test_adyen_com_PaymentService_40()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PaymentService\40\");
		}

		[Fact]
		public void Test_adyen_com_PaymentService_46()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PaymentService\46\");
		}

		[Fact]
		public void Test_adyen_com_PaymentService_49()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PaymentService\49\");
		}

		[Fact]
		public void Test_adyen_com_PaymentService_50()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PaymentService\50\");
		}

		[Fact]
		public void Test_adyen_com_PaymentService_51()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PaymentService\51\");
		}

		[Fact]
		public void Test_adyen_com_PaymentService_52()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PaymentService\52\");
		}

		[Fact]
		public void Test_adyen_com_PaymentService_64()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PaymentService\64\");
		}

		[Fact]
		public void Test_adyen_com_PaymentService_67()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PaymentService\67\");
		}

		[Fact]
		public void Test_adyen_com_PaymentService_68()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PaymentService\68\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_PayoutService_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PayoutService\30\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_PayoutService_40()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PayoutService\40\");
		}

		[Fact]
		public void Test_adyen_com_PayoutService_46()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PayoutService\46\");
		}

		[Fact]
		public void Test_adyen_com_PayoutService_49()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PayoutService\49\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_PayoutService_50()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PayoutService\50\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_PayoutService_51()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PayoutService\51\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_PayoutService_52()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PayoutService\52\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_PayoutService_64()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PayoutService\64\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_PayoutService_67()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PayoutService\67\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_PayoutService_68()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\PayoutService\68\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_RecurringService_18()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\RecurringService\18\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_RecurringService_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\RecurringService\25\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_RecurringService_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\RecurringService\30\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_RecurringService_40()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\RecurringService\40\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_RecurringService_49()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\RecurringService\49\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_RecurringService_67()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\RecurringService\67\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_RecurringService_68()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\RecurringService\68\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_StoredValueService_46()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\StoredValueService\46\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_TerminalAPI_v1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\TerminalAPI-v1\1\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_TestCardService_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\TestCardService\1\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_TfmAPIService_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\TfmAPIService\1\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_TransferService_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\TransferService\1\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_TransferService_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\TransferService\2\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_TransferService_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\TransferService\3\");
		}

		[Fact(Skip = "3.1")]
		public void Test_adyen_com_TransferService_v4_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\adyen.com\TransferService-v4\4\");
		}

		[Fact]
		public void Test_agco_ats_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\agco-ats.com\v1\");
		}

		[Fact]
		public void Test_airbyte_local_config_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\airbyte.local\config\1.0.0\");
		}

		[Fact]
		public void Test_alertersystem_com_1_7_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\alertersystem.com\1.7.0\");
		}

		[Fact]
		public void Test_amadeus_com_2_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amadeus.com\2.2.0\");
		}

		[Fact]
		public void Test_amadeus_com_amadeus_flight_price_analysis_1_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amadeus.com\amadeus-flight-price-analysis\1.0.1\");
		}

		[Fact]
		public void Test_amadeus_com_amadeus_location_score_1_0_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amadeus.com\amadeus-location-score\1.0.2\");
		}

		[Fact]
		public void Test_amadeus_com_amadeus_travel_recommendations_1_0_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amadeus.com\amadeus-travel-recommendations\1.0.3\");
		}

		[Fact]
		public void Test_amadeus_com_amadeus_trip_parser_3_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amadeus.com\amadeus-trip-parser\3.0.1\");
		}

		[Fact]
		public void Test_amazonaws_com_accessanalyzer_2019_11_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\accessanalyzer\2019-11-01\");
		}

		[Fact]
		public void Test_amazonaws_com_account_2021_02_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\account\2021-02-01\");
		}

		[Fact]
		public void Test_amazonaws_com_acm_2015_12_08()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\acm\2015-12-08\");
		}

		[Fact]
		public void Test_amazonaws_com_acm_pca_2017_08_22()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\acm-pca\2017-08-22\");
		}

		[Fact]
		public void Test_amazonaws_com_alexaforbusiness_2017_11_09()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\alexaforbusiness\2017-11-09\");
		}

		[Fact]
		public void Test_amazonaws_com_amp_2020_08_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\amp\2020-08-01\");
		}

		[Fact]
		public void Test_amazonaws_com_amplify_2017_07_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\amplify\2017-07-25\");
		}

		[Fact]
		public void Test_amazonaws_com_amplifybackend_2020_08_11()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\amplifybackend\2020-08-11\");
		}

		[Fact]
		public void Test_amazonaws_com_amplifyuibuilder_2021_08_11()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\amplifyuibuilder\2021-08-11\");
		}

		[Fact]
		public void Test_amazonaws_com_apigateway_2015_07_09()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\apigateway\2015-07-09\");
		}

		[Fact]
		public void Test_amazonaws_com_apigatewaymanagementapi_2018_11_29()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\apigatewaymanagementapi\2018-11-29\");
		}

		[Fact]
		public void Test_amazonaws_com_apigatewayv2_2018_11_29()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\apigatewayv2\2018-11-29\");
		}

		[Fact]
		public void Test_amazonaws_com_appconfig_2019_10_09()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\appconfig\2019-10-09\");
		}

		[Fact]
		public void Test_amazonaws_com_appconfigdata_2021_11_11()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\appconfigdata\2021-11-11\");
		}

		[Fact]
		public void Test_amazonaws_com_appfabric_2023_05_19()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\appfabric\2023-05-19\");
		}

		[Fact]
		public void Test_amazonaws_com_appflow_2020_08_23()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\appflow\2020-08-23\");
		}

		[Fact]
		public void Test_amazonaws_com_appintegrations_2020_07_29()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\appintegrations\2020-07-29\");
		}

		[Fact]
		public void Test_amazonaws_com_application_autoscaling_2016_02_06()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\application-autoscaling\2016-02-06\");
		}

		[Fact]
		public void Test_amazonaws_com_application_insights_2018_11_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\application-insights\2018-11-25\");
		}

		[Fact]
		public void Test_amazonaws_com_applicationcostprofiler_2020_09_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\applicationcostprofiler\2020-09-10\");
		}

		[Fact]
		public void Test_amazonaws_com_appmesh_2018_10_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\appmesh\2018-10-01\");
		}

		[Fact]
		public void Test_amazonaws_com_appmesh_2019_01_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\appmesh\2019-01-25\");
		}

		[Fact]
		public void Test_amazonaws_com_apprunner_2020_05_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\apprunner\2020-05-15\");
		}

		[Fact]
		public void Test_amazonaws_com_appstream_2016_12_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\appstream\2016-12-01\");
		}

		[Fact]
		public void Test_amazonaws_com_appsync_2017_07_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\appsync\2017-07-25\");
		}

		[Fact]
		public void Test_amazonaws_com_arc_zonal_shift_2022_10_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\arc-zonal-shift\2022-10-30\");
		}

		[Fact]
		public void Test_amazonaws_com_athena_2017_05_18()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\athena\2017-05-18\");
		}

		[Fact]
		public void Test_amazonaws_com_auditmanager_2017_07_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\auditmanager\2017-07-25\");
		}

		[Fact]
		public void Test_amazonaws_com_autoscaling_2011_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\autoscaling\2011-01-01\");
		}

		[Fact]
		public void Test_amazonaws_com_autoscaling_plans_2018_01_06()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\autoscaling-plans\2018-01-06\");
		}

		[Fact]
		public void Test_amazonaws_com_AWSMigrationHub_2017_05_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\AWSMigrationHub\2017-05-31\");
		}

		[Fact]
		public void Test_amazonaws_com_backup_2018_11_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\backup\2018-11-15\");
		}

		[Fact]
		public void Test_amazonaws_com_backup_gateway_2021_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\backup-gateway\2021-01-01\");
		}

		[Fact]
		public void Test_amazonaws_com_backupstorage_2018_04_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\backupstorage\2018-04-10\");
		}

		[Fact]
		public void Test_amazonaws_com_batch_2016_08_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\batch\2016-08-10\");
		}

		[Fact]
		public void Test_amazonaws_com_billingconductor_2021_07_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\billingconductor\2021-07-30\");
		}

		[Fact]
		public void Test_amazonaws_com_braket_2019_09_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\braket\2019-09-01\");
		}

		[Fact]
		public void Test_amazonaws_com_budgets_2016_10_20()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\budgets\2016-10-20\");
		}

		[Fact]
		public void Test_amazonaws_com_ce_2017_10_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\ce\2017-10-25\");
		}

		[Fact]
		public void Test_amazonaws_com_chime_2018_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\chime\2018-05-01\");
		}

		[Fact]
		public void Test_amazonaws_com_chime_sdk_identity_2021_04_20()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\chime-sdk-identity\2021-04-20\");
		}

		[Fact]
		public void Test_amazonaws_com_chime_sdk_media_pipelines_2021_07_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\chime-sdk-media-pipelines\2021-07-15\");
		}

		[Fact]
		public void Test_amazonaws_com_chime_sdk_meetings_2021_07_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\chime-sdk-meetings\2021-07-15\");
		}

		[Fact]
		public void Test_amazonaws_com_chime_sdk_messaging_2021_05_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\chime-sdk-messaging\2021-05-15\");
		}

		[Fact]
		public void Test_amazonaws_com_chime_sdk_voice_2022_08_03()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\chime-sdk-voice\2022-08-03\");
		}

		[Fact]
		public void Test_amazonaws_com_cleanrooms_2022_02_17()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cleanrooms\2022-02-17\");
		}

		[Fact]
		public void Test_amazonaws_com_cloud9_2017_09_23()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloud9\2017-09-23\");
		}

		[Fact]
		public void Test_amazonaws_com_cloudcontrol_2021_09_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloudcontrol\2021-09-30\");
		}

		[Fact]
		public void Test_amazonaws_com_clouddirectory_2016_05_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\clouddirectory\2016-05-10\");
		}

		[Fact]
		public void Test_amazonaws_com_clouddirectory_2017_01_11()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\clouddirectory\2017-01-11\");
		}

		[Fact]
		public void Test_amazonaws_com_cloudformation_2010_05_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloudformation\2010-05-15\");
		}

		[Fact]
		public void Test_amazonaws_com_cloudfront_2016_11_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloudfront\2016-11-25\");
		}

		[Fact]
		public void Test_amazonaws_com_cloudfront_2017_03_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloudfront\2017-03-25\");
		}

		[Fact]
		public void Test_amazonaws_com_cloudfront_2017_10_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloudfront\2017-10-30\");
		}

		[Fact]
		public void Test_amazonaws_com_cloudfront_2018_06_18()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloudfront\2018-06-18\");
		}

		[Fact]
		public void Test_amazonaws_com_cloudfront_2018_11_05()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloudfront\2018-11-05\");
		}

		[Fact]
		public void Test_amazonaws_com_cloudfront_2019_03_26()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloudfront\2019-03-26\");
		}

		[Fact]
		public void Test_amazonaws_com_cloudfront_2020_05_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloudfront\2020-05-31\");
		}

		[Fact]
		public void Test_amazonaws_com_cloudhsm_2014_05_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloudhsm\2014-05-30\");
		}

		[Fact]
		public void Test_amazonaws_com_cloudhsmv2_2017_04_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloudhsmv2\2017-04-28\");
		}

		[Fact]
		public void Test_amazonaws_com_cloudsearch_2011_02_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloudsearch\2011-02-01\");
		}

		[Fact]
		public void Test_amazonaws_com_cloudsearch_2013_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloudsearch\2013-01-01\");
		}

		[Fact]
		public void Test_amazonaws_com_cloudsearchdomain_2013_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloudsearchdomain\2013-01-01\");
		}

		[Fact]
		public void Test_amazonaws_com_cloudtrail_2013_11_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloudtrail\2013-11-01\");
		}

		[Fact]
		public void Test_amazonaws_com_cloudtrail_data_2021_08_11()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cloudtrail-data\2021-08-11\");
		}

		[Fact]
		public void Test_amazonaws_com_codeartifact_2018_09_22()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\codeartifact\2018-09-22\");
		}

		[Fact]
		public void Test_amazonaws_com_codebuild_2016_10_06()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\codebuild\2016-10-06\");
		}

		[Fact]
		public void Test_amazonaws_com_codecatalyst_2022_09_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\codecatalyst\2022-09-28\");
		}

		[Fact]
		public void Test_amazonaws_com_codecommit_2015_04_13()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\codecommit\2015-04-13\");
		}

		[Fact]
		public void Test_amazonaws_com_codedeploy_2014_10_06()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\codedeploy\2014-10-06\");
		}

		[Fact]
		public void Test_amazonaws_com_codeguru_reviewer_2019_09_19()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\codeguru-reviewer\2019-09-19\");
		}

		[Fact]
		public void Test_amazonaws_com_codeguru_security_2018_05_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\codeguru-security\2018-05-10\");
		}

		[Fact]
		public void Test_amazonaws_com_codeguruprofiler_2019_07_18()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\codeguruprofiler\2019-07-18\");
		}

		[Fact]
		public void Test_amazonaws_com_codepipeline_2015_07_09()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\codepipeline\2015-07-09\");
		}

		[Fact]
		public void Test_amazonaws_com_codestar_2017_04_19()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\codestar\2017-04-19\");
		}

		[Fact]
		public void Test_amazonaws_com_codestar_connections_2019_12_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\codestar-connections\2019-12-01\");
		}

		[Fact]
		public void Test_amazonaws_com_codestar_notifications_2019_10_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\codestar-notifications\2019-10-15\");
		}

		[Fact]
		public void Test_amazonaws_com_cognito_identity_2014_06_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cognito-identity\2014-06-30\");
		}

		[Fact]
		public void Test_amazonaws_com_cognito_idp_2016_04_18()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cognito-idp\2016-04-18\");
		}

		[Fact]
		public void Test_amazonaws_com_cognito_sync_2014_06_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cognito-sync\2014-06-30\");
		}

		[Fact]
		public void Test_amazonaws_com_comprehend_2017_11_27()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\comprehend\2017-11-27\");
		}

		[Fact]
		public void Test_amazonaws_com_comprehendmedical_2018_10_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\comprehendmedical\2018-10-30\");
		}

		[Fact]
		public void Test_amazonaws_com_compute_optimizer_2019_11_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\compute-optimizer\2019-11-01\");
		}

		[Fact]
		public void Test_amazonaws_com_config_2014_11_12()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\config\2014-11-12\");
		}

		[Fact]
		public void Test_amazonaws_com_connect_2017_08_08()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\connect\2017-08-08\");
		}

		[Fact]
		public void Test_amazonaws_com_connect_contact_lens_2020_08_21()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\connect-contact-lens\2020-08-21\");
		}

		[Fact]
		public void Test_amazonaws_com_connectcampaigns_2021_01_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\connectcampaigns\2021-01-30\");
		}

		[Fact]
		public void Test_amazonaws_com_connectcases_2022_10_03()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\connectcases\2022-10-03\");
		}

		[Fact]
		public void Test_amazonaws_com_connectparticipant_2018_09_07()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\connectparticipant\2018-09-07\");
		}

		[Fact]
		public void Test_amazonaws_com_controltower_2018_05_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\controltower\2018-05-10\");
		}

		[Fact]
		public void Test_amazonaws_com_cur_2017_01_06()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\cur\2017-01-06\");
		}

		[Fact]
		public void Test_amazonaws_com_customer_profiles_2020_08_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\customer-profiles\2020-08-15\");
		}

		[Fact]
		public void Test_amazonaws_com_databrew_2017_07_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\databrew\2017-07-25\");
		}

		[Fact]
		public void Test_amazonaws_com_dataexchange_2017_07_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\dataexchange\2017-07-25\");
		}

		[Fact]
		public void Test_amazonaws_com_datapipeline_2012_10_29()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\datapipeline\2012-10-29\");
		}

		[Fact]
		public void Test_amazonaws_com_datasync_2018_11_09()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\datasync\2018-11-09\");
		}

		[Fact]
		public void Test_amazonaws_com_dax_2017_04_19()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\dax\2017-04-19\");
		}

		[Fact]
		public void Test_amazonaws_com_detective_2018_10_26()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\detective\2018-10-26\");
		}

		[Fact]
		public void Test_amazonaws_com_devicefarm_2015_06_23()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\devicefarm\2015-06-23\");
		}

		[Fact]
		public void Test_amazonaws_com_devops_guru_2020_12_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\devops-guru\2020-12-01\");
		}

		[Fact]
		public void Test_amazonaws_com_directconnect_2012_10_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\directconnect\2012-10-25\");
		}

		[Fact]
		public void Test_amazonaws_com_discovery_2015_11_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\discovery\2015-11-01\");
		}

		[Fact]
		public void Test_amazonaws_com_dlm_2018_01_12()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\dlm\2018-01-12\");
		}

		[Fact]
		public void Test_amazonaws_com_dms_2016_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\dms\2016-01-01\");
		}

		[Fact]
		public void Test_amazonaws_com_docdb_2014_10_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\docdb\2014-10-31\");
		}

		[Fact]
		public void Test_amazonaws_com_docdb_elastic_2022_11_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\docdb-elastic\2022-11-28\");
		}

		[Fact]
		public void Test_amazonaws_com_drs_2020_02_26()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\drs\2020-02-26\");
		}

		[Fact]
		public void Test_amazonaws_com_ds_2015_04_16()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\ds\2015-04-16\");
		}

		[Fact]
		public void Test_amazonaws_com_dynamodb_2011_12_05()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\dynamodb\2011-12-05\");
		}

		[Fact]
		public void Test_amazonaws_com_dynamodb_2012_08_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\dynamodb\2012-08-10\");
		}

		[Fact]
		public void Test_amazonaws_com_ebs_2019_11_02()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\ebs\2019-11-02\");
		}

		[Fact(Skip ="The API def supports only text/xml response.")]
		public void Test_amazonaws_com_ec2_2016_11_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\ec2\2016-11-15\");
		}

		[Fact]
		public void Test_amazonaws_com_ec2_instance_connect_2018_04_02()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\ec2-instance-connect\2018-04-02\");
		}

		[Fact]
		public void Test_amazonaws_com_ecr_2015_09_21()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\ecr\2015-09-21\");
		}

		[Fact]
		public void Test_amazonaws_com_ecr_public_2020_10_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\ecr-public\2020-10-30\");
		}

		[Fact]
		public void Test_amazonaws_com_ecs_2014_11_13()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\ecs\2014-11-13\");
		}

		[Fact]
		public void Test_amazonaws_com_eks_2017_11_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\eks\2017-11-01\");
		}

		[Fact]
		public void Test_amazonaws_com_elastic_inference_2017_07_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\elastic-inference\2017-07-25\");
		}

		[Fact]
		public void Test_amazonaws_com_elasticache_2015_02_02()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\elasticache\2015-02-02\");
		}

		[Fact]
		public void Test_amazonaws_com_elasticbeanstalk_2010_12_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\elasticbeanstalk\2010-12-01\");
		}

		[Fact]
		public void Test_amazonaws_com_elasticfilesystem_2015_02_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\elasticfilesystem\2015-02-01\");
		}

		[Fact]
		public void Test_amazonaws_com_elasticloadbalancing_2012_06_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\elasticloadbalancing\2012-06-01\");
		}

		[Fact]
		public void Test_amazonaws_com_elasticloadbalancingv2_2015_12_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\elasticloadbalancingv2\2015-12-01\");
		}

		[Fact]
		public void Test_amazonaws_com_elasticmapreduce_2009_03_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\elasticmapreduce\2009-03-31\");
		}

		[Fact]
		public void Test_amazonaws_com_elastictranscoder_2012_09_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\elastictranscoder\2012-09-25\");
		}

		[Fact]
		public void Test_amazonaws_com_email_2010_12_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\email\2010-12-01\");
		}

		[Fact]
		public void Test_amazonaws_com_emr_containers_2020_10_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\emr-containers\2020-10-01\");
		}

		[Fact]
		public void Test_amazonaws_com_emr_serverless_2021_07_13()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\emr-serverless\2021-07-13\");
		}

		[Fact]
		public void Test_amazonaws_com_entitlement_marketplace_2017_01_11()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\entitlement.marketplace\2017-01-11\");
		}

		[Fact]
		public void Test_amazonaws_com_entityresolution_2018_05_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\entityresolution\2018-05-10\");
		}

		[Fact]
		public void Test_amazonaws_com_es_2015_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\es\2015-01-01\");
		}

		[Fact]
		public void Test_amazonaws_com_eventbridge_2015_10_07()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\eventbridge\2015-10-07\");
		}

		[Fact]
		public void Test_amazonaws_com_events_2015_10_07()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\events\2015-10-07\");
		}

		[Fact]
		public void Test_amazonaws_com_evidently_2021_02_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\evidently\2021-02-01\");
		}

		[Fact]
		public void Test_amazonaws_com_finspace_2021_03_12()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\finspace\2021-03-12\");
		}

		[Fact]
		public void Test_amazonaws_com_finspace_data_2020_07_13()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\finspace-data\2020-07-13\");
		}

		[Fact]
		public void Test_amazonaws_com_firehose_2015_08_04()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\firehose\2015-08-04\");
		}

		[Fact]
		public void Test_amazonaws_com_fis_2020_12_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\fis\2020-12-01\");
		}

		[Fact]
		public void Test_amazonaws_com_fms_2018_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\fms\2018-01-01\");
		}

		[Fact]
		public void Test_amazonaws_com_forecast_2018_06_26()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\forecast\2018-06-26\");
		}

		[Fact]
		public void Test_amazonaws_com_forecastquery_2018_06_26()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\forecastquery\2018-06-26\");
		}

		[Fact]
		public void Test_amazonaws_com_frauddetector_2019_11_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\frauddetector\2019-11-15\");
		}

		[Fact]
		public void Test_amazonaws_com_fsx_2018_03_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\fsx\2018-03-01\");
		}

		[Fact]
		public void Test_amazonaws_com_gamelift_2015_10_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\gamelift\2015-10-01\");
		}

		[Fact]
		public void Test_amazonaws_com_gamesparks_2021_08_17()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\gamesparks\2021-08-17\");
		}

		[Fact]
		public void Test_amazonaws_com_glacier_2012_06_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\glacier\2012-06-01\");
		}

		[Fact]
		public void Test_amazonaws_com_globalaccelerator_2018_08_08()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\globalaccelerator\2018-08-08\");
		}

		[Fact]
		public void Test_amazonaws_com_glue_2017_03_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\glue\2017-03-31\");
		}

		[Fact]
		public void Test_amazonaws_com_grafana_2020_08_18()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\grafana\2020-08-18\");
		}

		[Fact]
		public void Test_amazonaws_com_greengrass_2017_06_07()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\greengrass\2017-06-07\");
		}

		[Fact]
		public void Test_amazonaws_com_greengrassv2_2020_11_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\greengrassv2\2020-11-30\");
		}

		[Fact]
		public void Test_amazonaws_com_groundstation_2019_05_23()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\groundstation\2019-05-23\");
		}

		[Fact]
		public void Test_amazonaws_com_guardduty_2017_11_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\guardduty\2017-11-28\");
		}

		[Fact]
		public void Test_amazonaws_com_health_2016_08_04()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\health\2016-08-04\");
		}

		[Fact]
		public void Test_amazonaws_com_healthlake_2017_07_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\healthlake\2017-07-01\");
		}

		[Fact]
		public void Test_amazonaws_com_honeycode_2020_03_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\honeycode\2020-03-01\");
		}

		[Fact]
		public void Test_amazonaws_com_iam_2010_05_08()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iam\2010-05-08\");
		}

		[Fact]
		public void Test_amazonaws_com_identitystore_2020_06_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\identitystore\2020-06-15\");
		}

		[Fact]
		public void Test_amazonaws_com_imagebuilder_2019_12_02()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\imagebuilder\2019-12-02\");
		}

		[Fact]
		public void Test_amazonaws_com_importexport_2010_06_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\importexport\2010-06-01\");
		}

		[Fact]
		public void Test_amazonaws_com_inspector_2016_02_16()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\inspector\2016-02-16\");
		}

		[Fact]
		public void Test_amazonaws_com_inspector2_2020_06_08()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\inspector2\2020-06-08\");
		}

		[Fact]
		public void Test_amazonaws_com_internetmonitor_2021_06_03()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\internetmonitor\2021-06-03\");
		}

		[Fact]
		public void Test_amazonaws_com_iot_2015_05_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iot\2015-05-28\");
		}

		[Fact]
		public void Test_amazonaws_com_iot_data_2015_05_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iot-data\2015-05-28\");
		}

		[Fact]
		public void Test_amazonaws_com_iot_jobs_data_2017_09_29()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iot-jobs-data\2017-09-29\");
		}

		[Fact]
		public void Test_amazonaws_com_iot_roborunner_2018_05_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iot-roborunner\2018-05-10\");
		}

		[Fact]
		public void Test_amazonaws_com_iot1click_devices_2018_05_14()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iot1click-devices\2018-05-14\");
		}

		[Fact]
		public void Test_amazonaws_com_iot1click_projects_2018_05_14()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iot1click-projects\2018-05-14\");
		}

		[Fact]
		public void Test_amazonaws_com_iotanalytics_2017_11_27()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iotanalytics\2017-11-27\");
		}

		[Fact]
		public void Test_amazonaws_com_iotdeviceadvisor_2020_09_18()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iotdeviceadvisor\2020-09-18\");
		}

		[Fact]
		public void Test_amazonaws_com_iotevents_2018_07_27()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iotevents\2018-07-27\");
		}

		[Fact]
		public void Test_amazonaws_com_iotevents_data_2018_10_23()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iotevents-data\2018-10-23\");
		}

		[Fact]
		public void Test_amazonaws_com_iotfleethub_2020_11_03()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iotfleethub\2020-11-03\");
		}

		[Fact]
		public void Test_amazonaws_com_iotfleetwise_2021_06_17()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iotfleetwise\2021-06-17\");
		}

		[Fact]
		public void Test_amazonaws_com_iotsecuretunneling_2018_10_05()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iotsecuretunneling\2018-10-05\");
		}

		[Fact]
		public void Test_amazonaws_com_iotsitewise_2019_12_02()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iotsitewise\2019-12-02\");
		}

		[Fact]
		public void Test_amazonaws_com_iotthingsgraph_2018_09_06()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iotthingsgraph\2018-09-06\");
		}

		[Fact]
		public void Test_amazonaws_com_iottwinmaker_2021_11_29()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iottwinmaker\2021-11-29\");
		}

		[Fact]
		public void Test_amazonaws_com_iotwireless_2020_11_22()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\iotwireless\2020-11-22\");
		}

		[Fact]
		public void Test_amazonaws_com_ivs_2020_07_14()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\ivs\2020-07-14\");
		}

		[Fact]
		public void Test_amazonaws_com_ivs_realtime_2020_07_14()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\ivs-realtime\2020-07-14\");
		}

		[Fact]
		public void Test_amazonaws_com_ivschat_2020_07_14()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\ivschat\2020-07-14\");
		}

		[Fact]
		public void Test_amazonaws_com_kafka_2018_11_14()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\kafka\2018-11-14\");
		}

		[Fact]
		public void Test_amazonaws_com_kafkaconnect_2021_09_14()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\kafkaconnect\2021-09-14\");
		}

		[Fact]
		public void Test_amazonaws_com_kendra_2019_02_03()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\kendra\2019-02-03\");
		}

		[Fact]
		public void Test_amazonaws_com_kendra_ranking_2022_10_19()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\kendra-ranking\2022-10-19\");
		}

		[Fact]
		public void Test_amazonaws_com_keyspaces_2022_02_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\keyspaces\2022-02-10\");
		}

		[Fact]
		public void Test_amazonaws_com_kinesis_2013_12_02()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\kinesis\2013-12-02\");
		}

		[Fact]
		public void Test_amazonaws_com_kinesis_video_archived_media_2017_09_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\kinesis-video-archived-media\2017-09-30\");
		}

		[Fact]
		public void Test_amazonaws_com_kinesis_video_media_2017_09_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\kinesis-video-media\2017-09-30\");
		}

		[Fact]
		public void Test_amazonaws_com_kinesis_video_signaling_2019_12_04()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\kinesis-video-signaling\2019-12-04\");
		}

		[Fact]
		public void Test_amazonaws_com_kinesis_video_webrtc_storage_2018_05_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\kinesis-video-webrtc-storage\2018-05-10\");
		}

		[Fact]
		public void Test_amazonaws_com_kinesisanalytics_2015_08_14()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\kinesisanalytics\2015-08-14\");
		}

		[Fact]
		public void Test_amazonaws_com_kinesisanalyticsv2_2018_05_23()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\kinesisanalyticsv2\2018-05-23\");
		}

		[Fact]
		public void Test_amazonaws_com_kinesisvideo_2017_09_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\kinesisvideo\2017-09-30\");
		}

		[Fact]
		public void Test_amazonaws_com_kms_2014_11_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\kms\2014-11-01\");
		}

		[Fact]
		public void Test_amazonaws_com_lakeformation_2017_03_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\lakeformation\2017-03-31\");
		}

		[Fact]
		public void Test_amazonaws_com_lambda_2014_11_11()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\lambda\2014-11-11\");
		}

		[Fact]
		public void Test_amazonaws_com_lambda_2015_03_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\lambda\2015-03-31\");
		}

		[Fact]
		public void Test_amazonaws_com_lex_models_2017_04_19()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\lex-models\2017-04-19\");
		}

		[Fact]
		public void Test_amazonaws_com_license_manager_2018_08_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\license-manager\2018-08-01\");
		}

		[Fact]
		public void Test_amazonaws_com_license_manager_linux_subscriptions_2018_05_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\license-manager-linux-subscriptions\2018-05-10\");
		}

		[Fact]
		public void Test_amazonaws_com_license_manager_user_subscriptions_2018_05_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\license-manager-user-subscriptions\2018-05-10\");
		}

		[Fact]
		public void Test_amazonaws_com_lightsail_2016_11_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\lightsail\2016-11-28\");
		}

		[Fact]
		public void Test_amazonaws_com_location_2020_11_19()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\location\2020-11-19\");
		}

		[Fact]
		public void Test_amazonaws_com_logs_2014_03_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\logs\2014-03-28\");
		}

		[Fact]
		public void Test_amazonaws_com_lookoutequipment_2020_12_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\lookoutequipment\2020-12-15\");
		}

		[Fact]
		public void Test_amazonaws_com_lookoutmetrics_2017_07_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\lookoutmetrics\2017-07-25\");
		}

		[Fact]
		public void Test_amazonaws_com_lookoutvision_2020_11_20()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\lookoutvision\2020-11-20\");
		}

		[Fact]
		public void Test_amazonaws_com_m2_2021_04_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\m2\2021-04-28\");
		}

		[Fact]
		public void Test_amazonaws_com_machinelearning_2014_12_12()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\machinelearning\2014-12-12\");
		}

		[Fact]
		public void Test_amazonaws_com_macie_2017_12_19()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\macie\2017-12-19\");
		}

		[Fact]
		public void Test_amazonaws_com_macie2_2020_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\macie2\2020-01-01\");
		}

		[Fact]
		public void Test_amazonaws_com_managedblockchain_2018_09_24()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\managedblockchain\2018-09-24\");
		}

		[Fact]
		public void Test_amazonaws_com_managedblockchain_query_2023_05_04()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\managedblockchain-query\2023-05-04\");
		}

		[Fact]
		public void Test_amazonaws_com_marketplace_catalog_2018_09_17()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\marketplace-catalog\2018-09-17\");
		}

		[Fact]
		public void Test_amazonaws_com_marketplacecommerceanalytics_2015_07_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\marketplacecommerceanalytics\2015-07-01\");
		}

		[Fact]
		public void Test_amazonaws_com_mediaconnect_2018_11_14()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\mediaconnect\2018-11-14\");
		}

		[Fact]
		public void Test_amazonaws_com_mediaconvert_2017_08_29()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\mediaconvert\2017-08-29\");
		}

		[Fact]
		public void Test_amazonaws_com_medialive_2017_10_14()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\medialive\2017-10-14\");
		}

		[Fact]
		public void Test_amazonaws_com_mediapackage_2017_10_12()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\mediapackage\2017-10-12\");
		}

		[Fact]
		public void Test_amazonaws_com_mediapackage_vod_2018_11_07()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\mediapackage-vod\2018-11-07\");
		}

		[Fact]
		public void Test_amazonaws_com_mediapackagev2_2022_12_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\mediapackagev2\2022-12-25\");
		}

		[Fact]
		public void Test_amazonaws_com_mediastore_2017_09_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\mediastore\2017-09-01\");
		}

		[Fact]
		public void Test_amazonaws_com_mediastore_data_2017_09_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\mediastore-data\2017-09-01\");
		}

		[Fact]
		public void Test_amazonaws_com_mediatailor_2018_04_23()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\mediatailor\2018-04-23\");
		}

		[Fact]
		public void Test_amazonaws_com_medical_imaging_2023_07_19()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\medical-imaging\2023-07-19\");
		}

		[Fact]
		public void Test_amazonaws_com_memorydb_2021_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\memorydb\2021-01-01\");
		}

		[Fact]
		public void Test_amazonaws_com_meteringmarketplace_2016_01_14()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\meteringmarketplace\2016-01-14\");
		}

		[Fact]
		public void Test_amazonaws_com_mgn_2020_02_26()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\mgn\2020-02-26\");
		}

		[Fact]
		public void Test_amazonaws_com_migration_hub_refactor_spaces_2021_10_26()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\migration-hub-refactor-spaces\2021-10-26\");
		}

		[Fact]
		public void Test_amazonaws_com_migrationhub_config_2019_06_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\migrationhub-config\2019-06-30\");
		}

		[Fact]
		public void Test_amazonaws_com_migrationhuborchestrator_2021_08_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\migrationhuborchestrator\2021-08-28\");
		}

		[Fact]
		public void Test_amazonaws_com_migrationhubstrategy_2020_02_19()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\migrationhubstrategy\2020-02-19\");
		}

		[Fact]
		public void Test_amazonaws_com_mobile_2017_07_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\mobile\2017-07-01\");
		}

		[Fact]
		public void Test_amazonaws_com_mobileanalytics_2014_06_05()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\mobileanalytics\2014-06-05\");
		}

		[Fact]
		public void Test_amazonaws_com_models_lex_v2_2020_08_07()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\models.lex.v2\2020-08-07\");
		}

		[Fact]
		public void Test_amazonaws_com_monitoring_2010_08_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\monitoring\2010-08-01\");
		}

		[Fact]
		public void Test_amazonaws_com_mq_2017_11_27()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\mq\2017-11-27\");
		}

		[Fact]
		public void Test_amazonaws_com_mturk_requester_2017_01_17()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\mturk-requester\2017-01-17\");
		}

		[Fact]
		public void Test_amazonaws_com_mwaa_2020_07_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\mwaa\2020-07-01\");
		}

		[Fact]
		public void Test_amazonaws_com_neptune_2014_10_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\neptune\2014-10-31\");
		}

		[Fact]
		public void Test_amazonaws_com_network_firewall_2020_11_12()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\network-firewall\2020-11-12\");
		}

		[Fact]
		public void Test_amazonaws_com_networkmanager_2019_07_05()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\networkmanager\2019-07-05\");
		}

		[Fact]
		public void Test_amazonaws_com_nimble_2020_08_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\nimble\2020-08-01\");
		}

		[Fact]
		public void Test_amazonaws_com_oam_2022_06_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\oam\2022-06-10\");
		}

		[Fact]
		public void Test_amazonaws_com_omics_2022_11_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\omics\2022-11-28\");
		}

		[Fact]
		public void Test_amazonaws_com_opensearch_2021_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\opensearch\2021-01-01\");
		}

		[Fact]
		public void Test_amazonaws_com_opensearchserverless_2021_11_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\opensearchserverless\2021-11-01\");
		}

		[Fact]
		public void Test_amazonaws_com_opsworks_2013_02_18()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\opsworks\2013-02-18\");
		}

		[Fact]
		public void Test_amazonaws_com_opsworkscm_2016_11_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\opsworkscm\2016-11-01\");
		}

		[Fact]
		public void Test_amazonaws_com_organizations_2016_11_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\organizations\2016-11-28\");
		}

		[Fact]
		public void Test_amazonaws_com_osis_2022_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\osis\2022-01-01\");
		}

		[Fact]
		public void Test_amazonaws_com_outposts_2019_12_03()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\outposts\2019-12-03\");
		}

		[Fact]
		public void Test_amazonaws_com_panorama_2019_07_24()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\panorama\2019-07-24\");
		}

		[Fact]
		public void Test_amazonaws_com_payment_cryptography_2021_09_14()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\payment-cryptography\2021-09-14\");
		}

		[Fact]
		public void Test_amazonaws_com_payment_cryptography_data_2022_02_03()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\payment-cryptography-data\2022-02-03\");
		}

		[Fact]
		public void Test_amazonaws_com_personalize_2018_05_22()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\personalize\2018-05-22\");
		}

		[Fact]
		public void Test_amazonaws_com_personalize_events_2018_03_22()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\personalize-events\2018-03-22\");
		}

		[Fact]
		public void Test_amazonaws_com_personalize_runtime_2018_05_22()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\personalize-runtime\2018-05-22\");
		}

		[Fact]
		public void Test_amazonaws_com_pi_2018_02_27()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\pi\2018-02-27\");
		}

		[Fact]
		public void Test_amazonaws_com_pinpoint_2016_12_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\pinpoint\2016-12-01\");
		}

		[Fact]
		public void Test_amazonaws_com_pinpoint_email_2018_07_26()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\pinpoint-email\2018-07-26\");
		}

		[Fact]
		public void Test_amazonaws_com_pinpoint_sms_voice_v2_2022_03_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\pinpoint-sms-voice-v2\2022-03-31\");
		}

		[Fact]
		public void Test_amazonaws_com_pipes_2015_10_07()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\pipes\2015-10-07\");
		}

		[Fact]
		public void Test_amazonaws_com_polly_2016_06_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\polly\2016-06-10\");
		}

		[Fact]
		public void Test_amazonaws_com_pricing_2017_10_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\pricing\2017-10-15\");
		}

		[Fact]
		public void Test_amazonaws_com_privatenetworks_2021_12_03()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\privatenetworks\2021-12-03\");
		}

		[Fact]
		public void Test_amazonaws_com_proton_2020_07_20()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\proton\2020-07-20\");
		}

		[Fact]
		public void Test_amazonaws_com_qldb_2019_01_02()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\qldb\2019-01-02\");
		}

		[Fact]
		public void Test_amazonaws_com_qldb_session_2019_07_11()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\qldb-session\2019-07-11\");
		}

		[Fact]
		public void Test_amazonaws_com_quicksight_2018_04_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\quicksight\2018-04-01\");
		}

		[Fact]
		public void Test_amazonaws_com_ram_2018_01_04()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\ram\2018-01-04\");
		}

		[Fact]
		public void Test_amazonaws_com_rbin_2021_06_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\rbin\2021-06-15\");
		}

		[Fact]
		public void Test_amazonaws_com_rds_2013_01_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\rds\2013-01-10\");
		}

		[Fact]
		public void Test_amazonaws_com_rds_2013_02_12()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\rds\2013-02-12\");
		}

		[Fact]
		public void Test_amazonaws_com_rds_2013_09_09()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\rds\2013-09-09\");
		}

		[Fact]
		public void Test_amazonaws_com_rds_2014_09_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\rds\2014-09-01\");
		}

		[Fact]
		public void Test_amazonaws_com_rds_2014_10_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\rds\2014-10-31\");
		}

		[Fact]
		public void Test_amazonaws_com_rds_data_2018_08_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\rds-data\2018-08-01\");
		}

		[Fact]
		public void Test_amazonaws_com_redshift_2012_12_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\redshift\2012-12-01\");
		}

		[Fact]
		public void Test_amazonaws_com_redshift_data_2019_12_20()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\redshift-data\2019-12-20\");
		}

		[Fact]
		public void Test_amazonaws_com_redshift_serverless_2021_04_21()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\redshift-serverless\2021-04-21\");
		}

		[Fact]
		public void Test_amazonaws_com_rekognition_2016_06_27()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\rekognition\2016-06-27\");
		}

		[Fact]
		public void Test_amazonaws_com_resiliencehub_2020_04_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\resiliencehub\2020-04-30\");
		}

		[Fact]
		public void Test_amazonaws_com_resource_explorer_2_2022_07_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\resource-explorer\2-2022-07-28\");
		}

		[Fact]
		public void Test_amazonaws_com_resource_groups_2017_11_27()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\resource-groups\2017-11-27\");
		}

		[Fact]
		public void Test_amazonaws_com_resourcegroupstaggingapi_2017_01_26()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\resourcegroupstaggingapi\2017-01-26\");
		}

		[Fact]
		public void Test_amazonaws_com_robomaker_2018_06_29()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\robomaker\2018-06-29\");
		}

		[Fact]
		public void Test_amazonaws_com_rolesanywhere_2018_05_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\rolesanywhere\2018-05-10\");
		}

		[Fact]
		public void Test_amazonaws_com_route53_2013_04_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\route53\2013-04-01\");
		}

		[Fact]
		public void Test_amazonaws_com_route53_recovery_cluster_2019_12_02()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\route53-recovery-cluster\2019-12-02\");
		}

		[Fact]
		public void Test_amazonaws_com_route53_recovery_control_config_2020_11_02()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\route53-recovery-control-config\2020-11-02\");
		}

		[Fact]
		public void Test_amazonaws_com_route53_recovery_readiness_2019_12_02()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\route53-recovery-readiness\2019-12-02\");
		}

		[Fact]
		public void Test_amazonaws_com_route53domains_2014_05_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\route53domains\2014-05-15\");
		}

		[Fact]
		public void Test_amazonaws_com_route53resolver_2018_04_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\route53resolver\2018-04-01\");
		}

		[Fact]
		public void Test_amazonaws_com_rum_2018_05_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\rum\2018-05-10\");
		}

		[Fact]
		public void Test_amazonaws_com_runtime_lex_2016_11_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\runtime.lex\2016-11-28\");
		}

		[Fact]
		public void Test_amazonaws_com_runtime_lex_v2_2020_08_07()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\runtime.lex.v2\2020-08-07\");
		}

		[Fact]
		public void Test_amazonaws_com_runtime_sagemaker_2017_05_13()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\runtime.sagemaker\2017-05-13\");
		}

		[Fact(Skip ="strange definition")]
		public void Test_amazonaws_com_s3_2006_03_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\s3\2006-03-01\");
		}

		/*
		 * - name: uploads
		  in: query
		  required: true
		  schema:
			type: boolean
			enum:
		 */

		[Fact]
		public void Test_amazonaws_com_s3control_2018_08_20()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\s3control\2018-08-20\");
		}

		[Fact]
		public void Test_amazonaws_com_s3outposts_2017_07_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\s3outposts\2017-07-25\");
		}

		[Fact]
		public void Test_amazonaws_com_sagemaker_2017_07_24()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\sagemaker\2017-07-24\");
		}

		[Fact]
		public void Test_amazonaws_com_sagemaker_a2i_runtime_2019_11_07()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\sagemaker-a2i-runtime\2019-11-07\");
		}

		[Fact]
		public void Test_amazonaws_com_sagemaker_edge_2020_09_23()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\sagemaker-edge\2020-09-23\");
		}

		[Fact]
		public void Test_amazonaws_com_sagemaker_featurestore_runtime_2020_07_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\sagemaker-featurestore-runtime\2020-07-01\");
		}

		[Fact]
		public void Test_amazonaws_com_sagemaker_geospatial_2020_05_27()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\sagemaker-geospatial\2020-05-27\");
		}

		[Fact]
		public void Test_amazonaws_com_sagemaker_metrics_2022_09_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\sagemaker-metrics\2022-09-30\");
		}

		[Fact]
		public void Test_amazonaws_com_savingsplans_2019_06_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\savingsplans\2019-06-28\");
		}

		[Fact]
		public void Test_amazonaws_com_scheduler_2021_06_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\scheduler\2021-06-30\");
		}

		[Fact]
		public void Test_amazonaws_com_schemas_2019_12_02()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\schemas\2019-12-02\");
		}

		[Fact]
		public void Test_amazonaws_com_sdb_2009_04_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\sdb\2009-04-15\");
		}

		[Fact]
		public void Test_amazonaws_com_secretsmanager_2017_10_17()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\secretsmanager\2017-10-17\");
		}

		[Fact]
		public void Test_amazonaws_com_securityhub_2018_10_26()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\securityhub\2018-10-26\");
		}

		[Fact]
		public void Test_amazonaws_com_securitylake_2018_05_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\securitylake\2018-05-10\");
		}

		[Fact]
		public void Test_amazonaws_com_serverlessrepo_2017_09_08()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\serverlessrepo\2017-09-08\");
		}

		[Fact]
		public void Test_amazonaws_com_service_quotas_2019_06_24()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\service-quotas\2019-06-24\");
		}

		[Fact]
		public void Test_amazonaws_com_servicecatalog_2015_12_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\servicecatalog\2015-12-10\");
		}

		[Fact]
		public void Test_amazonaws_com_servicecatalog_appregistry_2020_06_24()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\servicecatalog-appregistry\2020-06-24\");
		}

		[Fact]
		public void Test_amazonaws_com_servicediscovery_2017_03_14()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\servicediscovery\2017-03-14\");
		}

		[Fact]
		public void Test_amazonaws_com_sesv2_2019_09_27()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\sesv2\2019-09-27\");
		}

		[Fact]
		public void Test_amazonaws_com_shield_2016_06_02()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\shield\2016-06-02\");
		}

		[Fact]
		public void Test_amazonaws_com_signer_2017_08_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\signer\2017-08-25\");
		}

		[Fact]
		public void Test_amazonaws_com_simspaceweaver_2022_10_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\simspaceweaver\2022-10-28\");
		}

		[Fact]
		public void Test_amazonaws_com_sms_2016_10_24()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\sms\2016-10-24\");
		}

		[Fact]
		public void Test_amazonaws_com_sms_voice_2018_09_05()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\sms-voice\2018-09-05\");
		}

		[Fact]
		public void Test_amazonaws_com_snow_device_management_2021_08_04()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\snow-device-management\2021-08-04\");
		}

		[Fact]
		public void Test_amazonaws_com_snowball_2016_06_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\snowball\2016-06-30\");
		}

		[Fact]
		public void Test_amazonaws_com_sns_2010_03_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\sns\2010-03-31\");
		}

		[Fact]
		public void Test_amazonaws_com_sqs_2012_11_05()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\sqs\2012-11-05\");
		}

		[Fact]
		public void Test_amazonaws_com_ssm_2014_11_06()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\ssm\2014-11-06\");
		}

		[Fact]
		public void Test_amazonaws_com_ssm_contacts_2021_05_03()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\ssm-contacts\2021-05-03\");
		}

		[Fact]
		public void Test_amazonaws_com_ssm_incidents_2018_05_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\ssm-incidents\2018-05-10\");
		}

		[Fact]
		public void Test_amazonaws_com_ssm_sap_2018_05_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\ssm-sap\2018-05-10\");
		}

		[Fact]
		public void Test_amazonaws_com_sso_2019_06_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\sso\2019-06-10\");
		}

		[Fact]
		public void Test_amazonaws_com_sso_admin_2020_07_20()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\sso-admin\2020-07-20\");
		}

		[Fact]
		public void Test_amazonaws_com_sso_oidc_2019_06_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\sso-oidc\2019-06-10\");
		}

		[Fact]
		public void Test_amazonaws_com_states_2016_11_23()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\states\2016-11-23\");
		}

		[Fact]
		public void Test_amazonaws_com_storagegateway_2013_06_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\storagegateway\2013-06-30\");
		}

		[Fact]
		public void Test_amazonaws_com_streams_dynamodb_2012_08_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\streams.dynamodb\2012-08-10\");
		}

		[Fact]
		public void Test_amazonaws_com_sts_2011_06_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\sts\2011-06-15\");
		}

		[Fact]
		public void Test_amazonaws_com_support_2013_04_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\support\2013-04-15\");
		}

		[Fact]
		public void Test_amazonaws_com_support_app_2021_08_20()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\support-app\2021-08-20\");
		}

		[Fact]
		public void Test_amazonaws_com_swf_2012_01_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\swf\2012-01-25\");
		}

		[Fact]
		public void Test_amazonaws_com_synthetics_2017_10_11()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\synthetics\2017-10-11\");
		}

		[Fact]
		public void Test_amazonaws_com_textract_2018_06_27()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\textract\2018-06-27\");
		}

		[Fact]
		public void Test_amazonaws_com_timestream_query_2018_11_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\timestream-query\2018-11-01\");
		}

		[Fact]
		public void Test_amazonaws_com_timestream_write_2018_11_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\timestream-write\2018-11-01\");
		}

		[Fact]
		public void Test_amazonaws_com_tnb_2008_10_21()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\tnb\2008-10-21\");
		}

		[Fact]
		public void Test_amazonaws_com_transcribe_2017_10_26()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\transcribe\2017-10-26\");
		}

		[Fact]
		public void Test_amazonaws_com_transfer_2018_11_05()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\transfer\2018-11-05\");
		}

		[Fact]
		public void Test_amazonaws_com_translate_2017_07_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\translate\2017-07-01\");
		}

		[Fact]
		public void Test_amazonaws_com_verifiedpermissions_2021_12_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\verifiedpermissions\2021-12-01\");
		}

		[Fact]
		public void Test_amazonaws_com_voice_id_2021_09_27()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\voice-id\2021-09-27\");
		}

		[Fact]
		public void Test_amazonaws_com_vpc_lattice_2022_11_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\vpc-lattice\2022-11-30\");
		}

		[Fact]
		public void Test_amazonaws_com_waf_2015_08_24()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\waf\2015-08-24\");
		}

		[Fact]
		public void Test_amazonaws_com_waf_regional_2016_11_28()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\waf-regional\2016-11-28\");
		}

		[Fact]
		public void Test_amazonaws_com_wafv2_2019_07_29()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\wafv2\2019-07-29\");
		}

		[Fact]
		public void Test_amazonaws_com_wellarchitected_2020_03_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\wellarchitected\2020-03-31\");
		}

		[Fact]
		public void Test_amazonaws_com_wisdom_2020_10_19()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\wisdom\2020-10-19\");
		}

		[Fact]
		public void Test_amazonaws_com_workdocs_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\workdocs\2016-05-01\");
		}

		[Fact]
		public void Test_amazonaws_com_worklink_2018_09_25()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\worklink\2018-09-25\");
		}

		[Fact]
		public void Test_amazonaws_com_workmail_2017_10_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\workmail\2017-10-01\");
		}

		[Fact]
		public void Test_amazonaws_com_workmailmessageflow_2019_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\workmailmessageflow\2019-05-01\");
		}

		[Fact]
		public void Test_amazonaws_com_workspaces_2015_04_08()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\workspaces\2015-04-08\");
		}

		[Fact]
		public void Test_amazonaws_com_workspaces_web_2020_07_08()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\workspaces-web\2020-07-08\");
		}

		[Fact]
		public void Test_amazonaws_com_xray_2016_04_12()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amazonaws.com\xray\2016-04-12\");
		}

		[Fact]
		public void Test_amentum_space_atmosphere_1_1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amentum.space\atmosphere\1.1.1\");
		}

		[Fact]
		public void Test_amentum_space_aviation_radiation_1_5_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amentum.space\aviation_radiation\1.5.0\");
		}

		[Fact]
		public void Test_amentum_space_global_magnet_1_3_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amentum.space\global-magnet\1.3.0\");
		}

		[Fact]
		public void Test_amentum_space_gravity_1_1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amentum.space\gravity\1.1.1\");
		}

		[Fact]
		public void Test_amentum_space_space_radiation_1_1_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\amentum.space\space_radiation\1.1.2\");
		}

		[Fact]
		public void Test_anchore_io_0_1_20()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\anchore.io\0.1.20\");
		}

		[Fact]
		public void Test_apache_org_airflow_2_5_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apache.org\airflow\2.5.3\");
		}

		[Fact]
		public void Test_apache_org_qakka_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apache.org\qakka\v1\");
		}

		[Fact(Skip ="MS paster interpret enum the wrong way")] //though probably I can fix it, don't bother for this one. See if ms lib for v3.1 has the problem fix, otherwise, I shouldn't use Cast<>
		public void Test_apacta_com_0_0_42()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apacta.com\0.0.42\");
		}

		/**
		 * name: due_date
		  schema:
			enum:
			  - valid
			  - exceeded
			  - null
			format: string
			type: string
		 */

		[Fact]
		public void Test_api_gov_uk_vehicle_enquiry_1_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\api.gov.uk\vehicle-enquiry\1.1.0\");
		}

		[Fact]
		public void Test_api_video_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\api.video\1\");
		}

		[Fact(Skip ="query start with digit.")] //need a lot works to make it work
		public void Test_api2cart_com_1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\api2cart.com\1.1\");
		}

		[Fact]
		public void Test_api2pdf_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\api2pdf.com\1.0.0\");
		}

		[Fact]
		public void Test_apicurio_local_registry_1_3_2_Final()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apicurio.local\registry\1.3.2.Final\");
		}

		[Fact]
		public void Test_apicurio_local_registry_2_4_x()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apicurio.local\registry\2.4.x\");
		}

		[Fact]
		public void Test_apidapp_com_2019_02_14T164701Z()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apidapp.com\2019-02-14T164701Z\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_apideck_com_accounting_10_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apideck.com\accounting\10.0.0\");
		}

		[Fact]
		public void Test_apideck_com_ats_10_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apideck.com\ats\10.0.0\");
		}

		[Fact]
		public void Test_apideck_com_connector_10_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apideck.com\connector\10.0.0\");
		}

		[Fact]
		public void Test_apideck_com_crm_10_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apideck.com\crm\10.0.0\");
		}

		[Fact]
		public void Test_apideck_com_customer_support_9_5_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apideck.com\customer-support\9.5.0\");
		}

		[Fact]
		public void Test_apideck_com_ecommerce_10_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apideck.com\ecommerce\10.0.0\");
		}

		[Fact]
		public void Test_apideck_com_ecosystem_0_0_6()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apideck.com\ecosystem\0.0.6\");
		}

		[Fact]
		public void Test_apideck_com_file_storage_10_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apideck.com\file-storage\10.0.0\");
		}

		[Fact]
		public void Test_apideck_com_hris_10_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apideck.com\hris\10.0.0\");
		}

		[Fact]
		public void Test_apideck_com_issue_tracking_10_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apideck.com\issue-tracking\10.0.0\");
		}

		[Fact]
		public void Test_apideck_com_lead_10_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apideck.com\lead\10.0.0\");
		}

		[Fact]
		public void Test_apideck_com_pos_10_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apideck.com\pos\10.0.0\");
		}

		[Fact]
		public void Test_apideck_com_proxy_10_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apideck.com\proxy\10.0.0\");
		}

		[Fact]
		public void Test_apideck_com_sms_10_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apideck.com\sms\10.0.0\");
		}

		[Fact]
		public void Test_apideck_com_vault_10_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apideck.com\vault\10.0.0\");
		}

		[Fact]
		public void Test_apideck_com_webhook_10_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apideck.com\webhook\10.0.0\");
		}

		[Fact]
		public void Test_apigee_local_registry_0_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apigee.local\registry\0.0.1\");
		}

		[Fact(Skip ="enum as bool?")]
		public void Test_apigee_net_marketcheck_cars_2_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apigee.net\marketcheck-cars\2.01\");
		}

		[Fact]
		public void Test_apimatic_io_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apimatic.io\1.0\");
		}

		[Fact]
		public void Test_apis_guru_2_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apis.guru\2.2.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_aaharjh_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\aaharjh\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_acko_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\acko\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_agtripura_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\agtripura\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_aharakar_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\aharakar\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_aiimsmangalagiri_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\aiimsmangalagiri\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_aiimspatna_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\aiimspatna\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_aiimsrishikesh_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\aiimsrishikesh\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_aktu_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\aktu\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_apmcservices_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\apmcservices\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_asrb_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\asrb\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_bajajallianz_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\bajajallianz\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_bajajallianzlife_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\bajajallianzlife\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_barti_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\barti\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_bharatpetroleum_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\bharatpetroleum\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_bhartiaxagi_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\bhartiaxagi\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_bhavishya_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\bhavishya\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_biharboard_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\biharboard\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_bput_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\bput\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_bsehr_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\bsehr\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_cbse_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\cbse\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_cgbse_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\cgbse\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_chennaicorp_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\chennaicorp\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_chitkarauniversity_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\chitkarauniversity\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_cholainsurance_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\cholainsurance\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_cisce_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\cisce\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_civilsupplieskerala_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\civilsupplieskerala\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_cpctmp_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\cpctmp\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_csc_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\csc\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_dbraitandaman_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\dbraitandaman\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_dgecerttn_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\dgecerttn\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_dgft_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\dgft\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_dhsekerala_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\dhsekerala\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_ditarunachal_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\ditarunachal\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_ditch_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\ditch\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_dittripura_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\dittripura\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_duexam_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\duexam\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_edistrictandaman_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\edistrictandaman\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_edistricthp_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\edistricthp\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_edistrictkerala_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\edistrictkerala\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_edistrictodisha_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\edistrictodisha\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_edistrictodishasp_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\edistrictodishasp\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_edistrictpb_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\edistrictpb\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_edistrictup_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\edistrictup\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_ehimapurtihp_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\ehimapurtihp\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_enibandhanjh_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\enibandhanjh\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_epfindia_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\epfindia\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_epramanhp_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\epramanhp\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_eservicearunachal_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\eservicearunachal\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_fsdhr_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\fsdhr\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_futuregenerali_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\futuregenerali\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_gadbih_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\gadbih\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_gauhati_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\gauhati\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_gbshse_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\gbshse\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_geetanjaliuniv_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\geetanjaliuniv\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_gmch_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\gmch\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_goawrd_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\goawrd\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_godigit_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\godigit\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_gujaratvidyapith_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\gujaratvidyapith\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_hindustanpetroleum_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\hindustanpetroleum\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_hpayushboard_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\hpayushboard\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_hpbose_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\hpbose\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_hppanchayat_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\hppanchayat\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_hpsbys_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\hpsbys\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_hpsssb_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\hpsssb\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_hptechboard_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\hptechboard\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_hsbte_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\hsbte\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_hsscboardmh_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\hsscboardmh\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_icicilombard_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\icicilombard\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_iciciprulife_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\iciciprulife\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_icsi_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\icsi\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_igrmaharashtra_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\igrmaharashtra\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_insvalsura_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\insvalsura\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_iocl_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\iocl\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_issuer_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\issuer\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_jac_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\jac\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_jeecup_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\jeecup\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_jharsewa_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\jharsewa\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_jnrmand_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\jnrmand\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_juit_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\juit\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_keralapsc_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\keralapsc\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_kiadb_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\kiadb\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_kkhsou_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\kkhsou\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_kotakgeneralinsurance_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\kotakgeneralinsurance\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_kseebkr_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\kseebkr\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_ktech_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\ktech\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_labourbih_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\labourbih\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_landrecordskar_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\landrecordskar\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_lawcollegeandaman_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\lawcollegeandaman\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_legalmetrologyup_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\legalmetrologyup\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_licindia_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\licindia\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_maxlifeinsurance_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\maxlifeinsurance\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_mbose_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\mbose\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_mbse_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\mbse\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_mcimindia_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\mcimindia\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_meark_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\meark\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_mizoramlesde_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\mizoramlesde\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_mizorampolice_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\mizorampolice\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_mpmsu_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\mpmsu\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_mppmc_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\mppmc\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_mriu_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\mriu\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_msde_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\msde\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_municipaladmin_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\municipaladmin\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_nationalinsurance_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\nationalinsurance\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_ncert_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\ncert\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_negd_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\negd\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_neilit_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\neilit\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_newindia_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\newindia\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_niesbud_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\niesbud\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_nios_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\nios\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_nitap_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\nitap\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_nitp_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\nitp\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_npsailu_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\npsailu\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_nsdcindia_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\nsdcindia\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_orientalinsurance_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\orientalinsurance\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_pan_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\pan\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_pareekshabhavanker_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\pareekshabhavanker\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_pblabour_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\pblabour\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_pgimer_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\pgimer\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_phedharyana_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\phedharyana\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_pmjay_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\pmjay\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_pramericalife_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\pramericalife\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_pseb_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\pseb\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_puekar_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\puekar\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_punjabteched_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\punjabteched\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_rajasthandsa_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\rajasthandsa\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_rajasthanrajeduboard_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\rajasthanrajeduboard\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_reliancegeneral_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\reliancegeneral\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_revenueassam_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\revenueassam\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_revenueodisha_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\revenueodisha\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_sainikwelfarepud_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\sainikwelfarepud\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_saralharyana_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\saralharyana\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_sbigeneral_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\sbigeneral\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_scvtup_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\scvtup\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_sebaonline_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\sebaonline\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_statisticsrajasthan_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\statisticsrajasthan\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_swavlambancard_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\swavlambancard\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_tataaia_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\tataaia\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_tataaig_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\tataaig\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_tbse_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\tbse\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transport_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transport\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportan_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportan\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportap_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportap\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportar_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportar\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportas_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportas\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportbr_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportbr\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportcg_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportcg\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportdd_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportdd\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportdh_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportdh\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportdl_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportdl\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportga_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportga\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportgj_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportgj\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transporthp_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transporthp\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transporthr_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transporthr\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportjh_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportjh\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportjk_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportjk\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportka_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportka\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportkl_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportkl\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportld_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportld\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportmh_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportmh\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportml_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportml\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportmn_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportmn\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportmp_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportmp\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportmz_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportmz\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportnl_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportnl\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportod_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportod\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportpb_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportpb\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportpy_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportpy\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportrj_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportrj\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportsk_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportsk\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transporttn_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transporttn\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transporttr_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transporttr\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportts_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportts\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportuk_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportuk\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportup_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportup\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_transportwb_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\transportwb\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_ubseuk_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\ubseuk\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_ucobank_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\ucobank\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_uiic_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\uiic\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_upmsp_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\upmsp\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_vhseker_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\vhseker\3.0.0\");
		}

		[Fact]
		public void Test_apisetu_gov_in_vssut_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apisetu.gov.in\vssut\3.0.0\");
		}

		[Fact]
		public void Test_apispot_io_whois_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apispot.io\whois\2.0\");
		}

		[Fact]
		public void Test_apiz_ebay_com_commerce_identity_v1_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apiz.ebay.com\commerce-identity\v1.1.0\");
		}

		[Fact]
		public void Test_apiz_ebay_com_sell_finances_v1_15_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apiz.ebay.com\sell-finances\v1.15.0\");
		}

		[Fact(Skip ="dynamic object not supported")]
		public void Test_appcenter_ms_v0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\appcenter.ms\v0.1\");
		}

		[Fact]
		public void Test_apple_com_app_store_connect_1_4_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apple.com\app-store-connect\1.4.1\");
		}

		[Fact]
		public void Test_apple_com_sirikit_cloud_media_1_0_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apple.com\sirikit-cloud-media\1.0.2\");
		}

		[Fact]
		public void Test_apptigent_com_2021_1_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\apptigent.com\2021.1.01\");
		}

		[Fact]
		public void Test_appwrite_io_client_0_9_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\appwrite.io\client\0.9.3\");
		}

		[Fact]
		public void Test_appwrite_io_server_0_9_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\appwrite.io\server\0.9.3\");
		}

		[Fact]
		public void Test_archive_org_search_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\archive.org\search\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_archive_org_wayback_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\archive.org\wayback\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_arespass_net_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\arespass.net\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_art19_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\art19.com\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_asana_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\asana.com\1.0\");
		}

		[Fact]
		public void Test_asuarez_dev_searchly_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\asuarez.dev\searchly\1.0\");
		}

		[Fact(Skip ="enum not friendly to C#")] //though I could probably handle this well in TypeScript
		public void Test_atlassian_com_jira_1001_0_0_SNAPSHOT()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\atlassian.com\jira\1001.0.0-SNAPSHOT\");
		}

		/*
		 *     FieldValueClause:
	  description: A clause that asserts the current value of a field. For example, `summary ~ test`.
	  properties:
		field:
		  $ref: "#/components/schemas/JqlQueryField"
		operand:
		  $ref: "#/components/schemas/JqlQueryClauseOperand"
		operator:
		  description: The operator between the field and operand.
		  enum:
			- =
			- "!="
			- ">"
			- <
			- ">="
			- <=
			- in
			- not in
			- "~"
			- ~=
			- is
			- is not
		  type: string
		 */

		[Fact(Skip = "doggy yaml:     resourceId:\r\n     maxLength: 36\r\n      type: string")]
		public void Test_ato_gov_au_0_0_6()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ato.gov.au\0.0.6\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_authentiq_io_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\authentiq.io\1.0\");
		}

		[Fact]
		public void Test_autodealerdata_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\autodealerdata.com\1.0\");
		}

		[Fact]
		public void Test_axesso_de_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\axesso.de\1.0.0\");
		}

		[Fact]
		public void Test_balldontlie_io_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\balldontlie.io\1.0.0\");
		}

		[Fact]
		public void Test_bbc_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\bbc.com\1.0.0\");
		}

		[Fact]
		public void Test_bbci_co_uk_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\bbci.co.uk\1.0\");
		}

		[Fact]
		public void Test_bclaws_ca_bclaws_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\bclaws.ca\bclaws\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact()]
		public void Test_beezup_com_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\beezup.com\2.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_betfair_com_1_0_1423()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\betfair.com\1.0.1423\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_bhagavadgita_io_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\bhagavadgita.io\1.0\");
		}

		[Fact(Skip ="doggy yaml: type integer with default false. doggy")]
		public void Test_biapi_pro_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\biapi.pro\2.0\");
		}

		[Fact]
		public void Test_bigdatacloud_net_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\bigdatacloud.net\1.0.0\");
		}

		[Fact()]
		public void Test_bigoven_com_partner()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\bigoven.com\partner\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_bigredcloud_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\bigredcloud.com\v1\");
		}

		[Fact]
		public void Test_bikewise_org_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\bikewise.org\v2\");
		}

		[Fact(Skip = "dynamic object Article_PatchArticleModel not supported")]
		public void Test_billbee_io_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\billbee.io\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_billingo_hu_3_0_7()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\billingo.hu\3.0.7\");
		}

		[Fact]
		public void Test_bintable_com_1_0_0_oas3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\bintable.com\1.0.0-oas3\");
		}

		[Fact(Skip = "doggy yaml: circular reference to Pipeline_variable2 itself, not properties or items")]
		public void Test_bitbucket_org_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\bitbucket.org\2.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_biztoc_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\biztoc.com\v1\");
		}

		[Fact]
		public void Test_bkk_hu_1_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\bkk.hu\1.0.1\");
		}

		[Fact]
		public void Test_bluemix_net_containers_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\bluemix.net\containers\3.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_botify_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\botify.com\1.0.0\");
		}

		[Fact]
		public void Test_botschaft_local_0_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\botschaft.local\0.1.0\");
		}

		[Fact(Skip ="doggy yaml: bool as enum member")]
		public void Test_box_com_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\box.com\2.0.0\");
		}

		[Fact(Skip = "doggy yaml in /api/customers")]
		public void Test_brainbi_net_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\brainbi.net\1.0.0\");
		}

		[Fact]
		public void Test_braze_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\braze.com\1.0.0\");
		}

		[Fact()]
		public void Test_breadcrumbs_one_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\breadcrumbs.one\v1\");
		}

		[Fact]
		public void Test_brex_io_2021_12()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\brex.io\2021.12\");
		}

		[Fact(Skip ="doggy")]
		public void Test_britbox_co_uk_3_730_300_ref_1_39_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\britbox.co.uk\3.730.300-ref-1-39-0\");
		}

		/**
		 *         averageUserRating:
		  description: |
			The average user rating.
			When based on user ratings from our system this will be out of 10.
		  format: int32
		  minimum: 0
		  type: number
		 */

		[Fact]
		public void Test_bulksms_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\bulksms.com\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact()]
		public void Test_bungie_net_2_18_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\bungie.net\2.18.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_bunq_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\bunq.com\1.0\");
		}

		[Fact]
		public void Test_byautomata_io_1_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\byautomata.io\1.0.1\");
		}

		[Fact()]
		public void Test_c19qrserver_local_1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\c19qrserver.local\1.1\");
		}

		[Fact]
		public void Test_callfire_com_V2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\callfire.com\V2\");
		}

		[Fact]
		public void Test_calorieninjas_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\calorieninjas.com\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_canada_holidays_ca_1_8_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\canada-holidays.ca\1.8.0\");
		}

		[Fact]
		public void Test_carbone_io_1_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\carbone.io\1.2.0\");
		}

		[Fact]
		public void Test_cdcgov_local_prime_data_hub_0_2_0_oas3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\cdcgov.local\prime-data-hub\0.2.0-oas3\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_chain49_com_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\chain49.com\2.0\");
		}

		[Fact]
		public void Test_chaingateway_io_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\chaingateway.io\1.0\");
		}

		[Fact]
		public void Test_chaingateway_io_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\chaingateway.io\1.0.0\");
		}

		[Fact]
		public void Test_change_local_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\change.local\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_chompthis_com_1_0_0_oas3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\chompthis.com\1.0.0-oas3\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_circl_lu_hashlookup_1_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\circl.lu\hashlookup\1.2\");
		}

		[Fact]
		public void Test_circleci_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\circleci.com\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip = "application/x-www-form-urlencoded: not supproted")]
		public void Test_circuitsandbox_net_2_9_235()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\circuitsandbox.net\2.9.235\");
		}

		[Fact]
		public void Test_clever_cloud_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\clever-cloud.com\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_clever_com_1_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\clever.com\1.2.0\");
		}

		[Fact()]
		public void Test_clickmeter_com_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\clickmeter.com\v2\");
		}

		[Fact()]
		public void Test_clicksend_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\clicksend.com\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_clickup_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\clickup.com\1.0.0\");
		}

		[Fact]
		public void Test_climate_com_4_0_11()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\climate.com\4.0.11\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_climatekuul_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\climatekuul.com\1.0\");
		}

		[Fact(Skip = "multipart/form-data not supported")]
		public void Test_cloudmersive_com_ocr_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\cloudmersive.com\ocr\v1\");
		}

		[Fact(Skip ="Doggy")]
		public void Test_cloudrf_com_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\cloudrf.com\2.0.0\");
		}

		/**
		 *           schema:
			enum:
			  - kml
			  - kml
			  - kmzppa
			  - shp
			  - tiff
		 */

		[Fact]
		public void Test_clubhouseapi_com_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\clubhouseapi.com\1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="3.1")]
		public void Test_codat_io_accounting_2_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\codat.io\accounting\2.1.0\");
		}

		[Fact(Skip = "3.1")]
		public void Test_codat_io_assess_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\codat.io\assess\1.0\");
		}

		[Fact(Skip = "3.1")]
		public void Test_codat_io_bank_feeds_2_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\codat.io\bank-feeds\2.1.0\");
		}

		[Fact(Skip = "3.1")]
		public void Test_codat_io_banking_2_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\codat.io\banking\2.1.0\");
		}

		[Fact(Skip = "3.1")]
		public void Test_codat_io_commerce_2_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\codat.io\commerce\2.1.0\");
		}

		[Fact(Skip = "3.1")]
		public void Test_codat_io_sync_for_commerce_1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\codat.io\sync-for-commerce\1.1\");
		}

		[Fact(Skip = "3.1")]
		public void Test_codat_io_sync_for_expenses_prealpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\codat.io\sync-for-expenses\prealpha\");
		}

		[Fact]
		public void Test_codesearch_debian_net_1_4_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\codesearch.debian.net\1.4.0\");
		}

		[Fact()]
		public void Test_collegefootballdata_com_4_4_12()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\collegefootballdata.com\4.4.12\");
		}

		[Fact]
		public void Test_color_pizza_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\color.pizza\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_combell_com_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\combell.com\v2\");
		}

		[Fact]
		public void Test_configcat_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\configcat.com\v1\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_conjur_local_5_3_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\conjur.local\5.3.0\");
		}

		[Fact]
		public void Test_contentgroove_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\contentgroove.com\1.0.0\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_contract_p_fit_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\contract-p.fit\1.0\");
		}

		[Fact]
		public void Test_contribly_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\contribly.com\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_corrently_io_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\corrently.io\2.0.0\");
		}

		[Fact]
		public void Test_covid19_api_com_1_2_6()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\covid19-api.com\1.2.6\");
		}

		[Fact]
		public void Test_cowin_gov_cin_cowincert_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\cowin.gov.cin\cowincert\1.0.0\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_cpy_re_peertube_5_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\cpy.re\peertube\5.1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		/**
		 *                     startAt:
					  description: Timestamp in the video that marks the beginning of the report
					  format: seconds
					  minimum: 0
					  type: integer
		 */

		[Fact()]
		public void Test_credas_co_uk_pi_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\credas.co.uk\pi\v1\");
		}

		[Fact]
		public void Test_crediwatch_com_covid19_1_3_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\crediwatch.com\covid19\1.3.0\");
		}

		[Fact]
		public void Test_crossbrowsertesting_com_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\crossbrowsertesting.com\3.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_currencytick_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\currencytick.com\1.0.0\");
		}

		[Fact]
		public void Test_d7networks_com_1_0_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\d7networks.com\1.0.2\");
		}

		[Fact(Skip = "multipart/form-data not supported")]
		public void Test_daniweb_com_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\daniweb.com\4\");
		}

		[Fact]
		public void Test_dataflowkit_com_1_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\dataflowkit.com\1.3\");
		}

		[Fact]
		public void Test_datasette_local_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\datasette.local\v1\");
		}

		[Fact(Skip = "application/x-www-form-urlencoded not supported")]
		public void Test_datumbox_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\datumbox.com\1.0\");
		}

		[Fact]
		public void Test_departureboard_io_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\departureboard.io\2.0\");
		}

		[Fact]
		public void Test_deutschebahn_com_reisezentren_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\deutschebahn.com\reisezentren\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_dev_to_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\dev.to\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_dev_to_chatgpt_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\dev.to\chatgpt\v1\");
		}

		[Fact]
		public void Test_digitallocker_gov_in_authpartner_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\digitallocker.gov.in\authpartner\1.0.0\");
		}

		[Fact(Skip ="doggy enum def")]
		public void Test_digitalnz_org_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\digitalnz.org\3\");
		}

		[Fact(Skip = "doggy yaml with maximum 18446744073709552000")]
		public void Test_digitalocean_com_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\digitalocean.com\2.0\");
		}

		[Fact(Skip ="3.1")]
		public void Test_discourse_local_latest()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\discourse.local\latest\");
		}

		[Fact]
		public void Test_dnd5eapi_co_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\dnd5eapi.co\0.1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_docker_com_dvp_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\docker.com\dvp\1.0.0\");
		}

		[Fact(Skip ="doggy enum")]
		public void Test_docker_com_engine_1_33()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\docker.com\engine\1.33\");
		}

		[Fact(Skip = "application/scim+json not supported")]
		public void Test_docker_com_hub_beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\docker.com\hub\beta\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="doggy yaml with 2 langCode in function parameters")]
		public void Test_docusign_net_v2_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\docusign.net\v2.1\");
		}

		[Fact]
		public void Test_dodo_ac_1_6_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\dodo.ac\1.6.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_domainsdb_info_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\domainsdb.info\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact()]
		public void Test_doqs_dev_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\doqs.dev\1.0\");
		}

		[Fact]
		public void Test_dracoon_team_4_42_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\dracoon.team\4.42.3\");
		}

		[Fact(Skip = "doggy yaml: LabResult:\r\n      properties:\r\n        abnormal_status")]
		public void Test_drchrono_com_v4__Hunt_Valley_()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\drchrono.com\v4 (Hunt Valley)\");
		}

		[Fact]
		public void Test_e_conomic_com_v20_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\e-conomic.com\v20.0.0\");
		}

		[Fact]
		public void Test_easypdfserver_com_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\easypdfserver.com\1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_ebay_com_buy_deal_v1_3_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\buy-deal\v1.3.0\");
		}

		[Fact]
		public void Test_ebay_com_buy_feed_v1_beta_34_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\buy-feed\v1_beta.34.0\");
		}

		[Fact]
		public void Test_ebay_com_buy_marketing_v1_beta_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\buy-marketing\v1_beta.2.0\");
		}

		[Fact]
		public void Test_ebay_com_commerce_catalog_v1_beta_5_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\commerce-catalog\v1_beta.5.0\");
		}

		[Fact]
		public void Test_ebay_com_commerce_charity_v1_2_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\commerce-charity\v1.2.1\");
		}

		[Fact]
		public void Test_ebay_com_commerce_translation_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\commerce-translation\1\");
		}

		[Fact]
		public void Test_ebay_com_developer_analytics_v1_beta_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\developer-analytics\v1_beta.0.0\");
		}

		[Fact]
		public void Test_ebay_com_sell_account_v1_9_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\sell-account\v1.9.0\");
		}

		[Fact]
		public void Test_ebay_com_sell_analytics_1_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\sell-analytics\1.2.0\");
		}

		[Fact]
		public void Test_ebay_com_sell_compliance_1_4_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\sell-compliance\1.4.1\");
		}

		[Fact]
		public void Test_ebay_com_sell_feed_v1_3_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\sell-feed\v1.3.1\");
		}

		[Fact]
		public void Test_ebay_com_sell_fulfillment_v1_20_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\sell-fulfillment\v1.20.0\");
		}

		[Fact]
		public void Test_ebay_com_sell_listing_v1_beta_3_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\sell-listing\v1_beta.3.0\");
		}

		[Fact]
		public void Test_ebay_com_sell_logistics_v1_beta_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\sell-logistics\v1_beta.0.0\");
		}

		[Fact]
		public void Test_ebay_com_sell_marketing_v1_15_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\sell-marketing\v1.15.0\");
		}

		[Fact]
		public void Test_ebay_com_sell_metadata_v1_6_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\sell-metadata\v1.6.0\");
		}

		[Fact]
		public void Test_ebay_com_sell_negotiation_v1_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\sell-negotiation\v1.1.0\");
		}

		[Fact]
		public void Test_ebay_com_sell_recommendation_1_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ebay.com\sell-recommendation\1.1.0\");
		}

		[Fact]
		public void Test_edrv_io_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\edrv.io\v1\");
		}

		[Fact]
		public void Test_elevenlabs_io_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\elevenlabs.io\1.0\");
		}

		[Fact]
		public void Test_elmah_io_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\elmah.io\v3\");
		}

		[Fact(Skip = "doggy yaml: items:\r\n                      enum:\r\n                        - override: true\r\n                        - DEFAULT")]
		public void Test_enode_io_1_3_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\enode.io\1.3.10\");
		}

		[Fact]
		public void Test_envoice_in_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\envoice.in\v1\");
		}

		[Fact]
		public void Test_eos_local_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\eos.local\1.0.0\");
		}

		[Fact]
		public void Test_esgenterprise_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\esgenterprise.com\1.0.0\");
		}

		[Fact]
		public void Test_etherpad_local_1_2_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\etherpad.local\1.2.15\");
		}

		[Fact]
		public void Test_etmdb_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\etmdb.com\1.0.0\");
		}

		[Fact]
		public void Test_etsi_local_MEC010_2_AppPkgMgmt_2_1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\etsi.local\MEC010-2_AppPkgMgmt\2.1.1\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_exavault_com_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\exavault.com\2.0\");
		}

		[Fact]
		public void Test_exchangerate_api_com_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\exchangerate-api.com\4\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_exlibrisgroup_com_tasklists_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\exlibrisgroup.com\tasklists\1.0\");
		}

		[Fact(Skip ="3.1")]
		public void Test_exoapi_dev_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\exoapi.dev\1.0.0\");
		}

		[Fact]
		public void Test_extendsclass_com_json_storage_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\extendsclass.com\json-storage\0.1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_extpose_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\extpose.com\1.0.0\");
		}

		[Fact]
		public void Test_exude_api_herokuapp_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\exude-api.herokuapp.com\1.0.0\");
		}

		[Fact]
		public void Test_facecheck_id_v1_02()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\facecheck.id\v1.02\");
		}

		[Fact]
		public void Test_fec_gov_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\fec.gov\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact()]
		public void Test_figshare_com_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\figshare.com\2.0.0\");
		}

		[Fact(Skip = "multipart/form-data not supported")]
		public void Test_files_com_0_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\files.com\0.0.1\");
		}

		[Fact]
		public void Test_fire_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\fire.com\1.0\");
		}

		[Fact]
		public void Test_firmalyzer_com_iotvas_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\firmalyzer.com\iotvas\1.0\");
		}

		[Fact]
		public void Test_firstinspires_org_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\firstinspires.org\1.0.0\");
		}

		[Fact]
		public void Test_flat_io_2_13_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\flat.io\2.13.0\");
		}

		[Fact]
		public void Test_flickr_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\flickr.com\1.0.0\");
		}

		[Fact]
		public void Test_formapi_io_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\formapi.io\v1\");
		}

		[Fact]
		public void Test_fraudlabspro_com_fraud_detection_1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\fraudlabspro.com\fraud-detection\1.1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_fraudlabspro_com_sms_verification_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\fraudlabspro.com\sms-verification\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_freetv_app_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\freetv-app.com\v1\");
		}

		[Fact]
		public void Test_fulfillment_com_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\fulfillment.com\2.0\");
		}

		[Fact]
		public void Test_fungenerators_com_barcode_1_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\fungenerators.com\barcode\1.5\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_fungenerators_com_pirate_1_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\fungenerators.com\pirate\1.5\");
		}

		[Fact]
		public void Test_fungenerators_com_random_facts_1_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\fungenerators.com\random-facts\1.5\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_fungenerators_com_riddle_1_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\fungenerators.com\riddle\1.5\");
		}

		[Fact]
		public void Test_fungenerators_com_shakespeare_1_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\fungenerators.com\shakespeare\1.5\");
		}

		[Fact]
		public void Test_fungenerators_com_uuid_1_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\fungenerators.com\uuid\1.5\");
		}

		[Fact]
		public void Test_gambitcomm_local_mimic_21_00()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\gambitcomm.local\mimic\21.00\");
		}

		[Fact(Skip = "multipart/form-data not supported")]
		public void Test_gamesparks_net_game_details_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\gamesparks.net\game-details\v2\");
		}

		[Fact]
		public void Test_geodatasource_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\geodatasource.com\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_geodesystems_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\geodesystems.com\1.0.0\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_gerermesaffaires_com_1_0_6()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\gerermesaffaires.com\1.0.6\");
		}

		[Fact]
		public void Test_getpostman_com_1_20_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\getpostman.com\1.20.0\");
		}

		[Fact]
		public void Test_getthedata_com_bng2latlong_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\getthedata.com\bng2latlong\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_gettyimages_com_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\gettyimages.com\3\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_giphy_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\giphy.com\1.0\");
		}

		[Fact(Skip = "multipart/form-data not supported")]
		public void Test_gitea_io_1_20_0_dev_539_g5e389228f()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\gitea.io\1.20.0+dev-539-g5e389228f\");
		}

		[Fact]
		public void Test_github_com_api_github_com_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\api.github.com\1.1.4\");
		}

		[Fact]
		public void Test_github_com_api_github_com_2022_11_28_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\api.github.com.2022-11-28\1.1.4\");
		}

		[Fact]
		public void Test_github_com_ghec_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\ghec\1.1.4\");
		}

		[Fact]
		public void Test_github_com_ghec_2022_11_28_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\ghec.2022-11-28\1.1.4\");
		}

		[Fact]
		public void Test_github_com_ghes_2_18_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\ghes-2.18\1.1.4\");
		}

		[Fact]
		public void Test_github_com_ghes_2_19_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\ghes-2.19\1.1.4\");
		}

		[Fact]
		public void Test_github_com_ghes_2_20_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\ghes-2.20\1.1.4\");
		}

		[Fact]
		public void Test_github_com_ghes_2_21_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\ghes-2.21\1.1.4\");
		}

		[Fact]
		public void Test_github_com_ghes_2_22_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\ghes-2.22\1.1.4\");
		}

		[Fact]
		public void Test_github_com_ghes_3_0_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\ghes-3.0\1.1.4\");
		}

		[Fact]
		public void Test_github_com_ghes_3_1_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\ghes-3.1\1.1.4\");
		}

		[Fact]
		public void Test_github_com_ghes_3_2_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\ghes-3.2\1.1.4\");
		}

		[Fact]
		public void Test_github_com_ghes_3_3_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\ghes-3.3\1.1.4\");
		}

		[Fact]
		public void Test_github_com_ghes_3_4_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\ghes-3.4\1.1.4\");
		}

		[Fact]
		public void Test_github_com_ghes_3_5_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\ghes-3.5\1.1.4\");
		}

		[Fact]
		public void Test_github_com_ghes_3_6_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\ghes-3.6\1.1.4\");
		}

		[Fact]
		public void Test_github_com_ghes_3_7_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\ghes-3.7\1.1.4\");
		}

		[Fact]
		public void Test_github_com_ghes_3_8_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\ghes-3.8\1.1.4\");
		}

		[Fact]
		public void Test_github_com_github_ae_1_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\github.ae\1.1.4\");
		}

		[Fact]
		public void Test_github_com_v0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\github.com\v0.1\");
		}

		[Fact]
		public void Test_globalwinescore_com_8234aab51481d37a30757d925b7f4221a659427e()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\globalwinescore.com\8234aab51481d37a30757d925b7f4221a659427e\");
		}

		[Fact]
		public void Test_go_upc_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\go-upc.com\1.0.0\");
		}

		[Fact]
		public void Test_goog_io_0_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\goog.io\0.1.0\");
		}

		[Fact]
		public void Test_google_com_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\google.com\v3\");
		}

		[Fact]
		public void Test_google_home_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\google.home\2.0\");
		}

		[Fact]
		public void Test_googleapis_com_abusiveexperiencereport_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\abusiveexperiencereport\v1\");
		}

		[Fact]
		public void Test_googleapis_com_acceleratedmobilepageurl_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\acceleratedmobilepageurl\v1\");
		}

		[Fact]
		public void Test_googleapis_com_accessapproval_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\accessapproval\v1\");
		}

		[Fact]
		public void Test_googleapis_com_accesscontextmanager_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\accesscontextmanager\v1\");
		}

		[Fact]
		public void Test_googleapis_com_accesscontextmanager_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\accesscontextmanager\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_acmedns_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\acmedns\v1\");
		}

		[Fact]
		public void Test_googleapis_com_adexchangebuyer_v1_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\adexchangebuyer\v1.2\");
		}

		[Fact]
		public void Test_googleapis_com_adexchangebuyer_v1_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\adexchangebuyer\v1.3\");
		}

		[Fact]
		public void Test_googleapis_com_adexchangebuyer_v1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\adexchangebuyer\v1.4\");
		}

		[Fact]
		public void Test_googleapis_com_adexchangebuyer2_v2beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\adexchangebuyer2\v2beta1\");
		}

		[Fact]
		public void Test_googleapis_com_adexperiencereport_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\adexperiencereport\v1\");
		}

		[Fact]
		public void Test_googleapis_com_admin_datatransfer_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\admin\datatransfer_v1\");
		}

		[Fact]
		public void Test_googleapis_com_admin_directory_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\admin\directory_v1\");
		}

		[Fact]
		public void Test_googleapis_com_admin_reports_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\admin\reports_v1\");
		}

		[Fact]
		public void Test_googleapis_com_admob_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\admob\v1\");
		}

		[Fact]
		public void Test_googleapis_com_admob_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\admob\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_adsense_v1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\adsense\v1.4\");
		}

		[Fact]
		public void Test_googleapis_com_adsense_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\adsense\v2\");
		}

		[Fact]
		public void Test_googleapis_com_adsensehost_v4_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\adsensehost\v4.1\");
		}

		[Fact]
		public void Test_googleapis_com_advisorynotifications_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\advisorynotifications\v1\");
		}

		[Fact]
		public void Test_googleapis_com_aiplatform_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\aiplatform\v1\");
		}

		[Fact]
		public void Test_googleapis_com_aiplatform_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\aiplatform\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_alertcenter_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\alertcenter\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_alloydb_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\alloydb\v1\");
		}

		[Fact]
		public void Test_googleapis_com_alloydb_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\alloydb\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_alloydb_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\alloydb\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_analytics_v2_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\analytics\v2.4\");
		}

		[Fact]
		public void Test_googleapis_com_analytics_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\analytics\v3\");
		}

		[Fact]
		public void Test_googleapis_com_analyticsadmin_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\analyticsadmin\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_analyticsadmin_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\analyticsadmin\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_analyticsdata_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\analyticsdata\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_analyticshub_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\analyticshub\v1\");
		}

		[Fact]
		public void Test_googleapis_com_analyticshub_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\analyticshub\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_analyticsreporting_v4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\analyticsreporting\v4\");
		}

		[Fact]
		public void Test_googleapis_com_androiddeviceprovisioning_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\androiddeviceprovisioning\v1\");
		}

		[Fact]
		public void Test_googleapis_com_androidenterprise_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\androidenterprise\v1\");
		}

		[Fact]
		public void Test_googleapis_com_androidmanagement_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\androidmanagement\v1\");
		}

		[Fact]
		public void Test_googleapis_com_androidpublisher_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\androidpublisher\v1\");
		}

		[Fact]
		public void Test_googleapis_com_androidpublisher_v1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\androidpublisher\v1.1\");
		}

		[Fact]
		public void Test_googleapis_com_androidpublisher_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\androidpublisher\v2\");
		}

		[Fact]
		public void Test_googleapis_com_androidpublisher_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\androidpublisher\v3\");
		}

		[Fact]
		public void Test_googleapis_com_apigateway_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\apigateway\v1\");
		}

		[Fact]
		public void Test_googleapis_com_apigateway_v1alpha2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\apigateway\v1alpha2\");
		}

		[Fact]
		public void Test_googleapis_com_apigateway_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\apigateway\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_apigee_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\apigee\v1\");
		}

		[Fact]
		public void Test_googleapis_com_apigeeregistry_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\apigeeregistry\v1\");
		}

		[Fact]
		public void Test_googleapis_com_apikeys_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\apikeys\v2\");
		}

		[Fact]
		public void Test_googleapis_com_appengine_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\appengine\v1\");
		}

		[Fact]
		public void Test_googleapis_com_appengine_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\appengine\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_appengine_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\appengine\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_apphub_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\apphub\v1\");
		}

		[Fact]
		public void Test_googleapis_com_apphub_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\apphub\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_appsactivity_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\appsactivity\v1\");
		}

		[Fact]
		public void Test_googleapis_com_area120tables_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\area120tables\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_artifactregistry_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\artifactregistry\v1\");
		}

		[Fact]
		public void Test_googleapis_com_artifactregistry_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\artifactregistry\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_artifactregistry_v1beta2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\artifactregistry\v1beta2\");
		}

		[Fact]
		public void Test_googleapis_com_assuredworkloads_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\assuredworkloads\v1\");
		}

		[Fact]
		public void Test_googleapis_com_assuredworkloads_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\assuredworkloads\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_authorizedbuyersmarketplace_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\authorizedbuyersmarketplace\v1\");
		}

		[Fact]
		public void Test_googleapis_com_automl_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\automl\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_backupdr_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\backupdr\v1\");
		}

		[Fact]
		public void Test_googleapis_com_baremetalsolution_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\baremetalsolution\v1\");
		}

		[Fact]
		public void Test_googleapis_com_baremetalsolution_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\baremetalsolution\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_baremetalsolution_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\baremetalsolution\v2\");
		}

		[Fact]
		public void Test_googleapis_com_batch_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\batch\v1\");
		}

		[Fact]
		public void Test_googleapis_com_beyondcorp_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\beyondcorp\v1\");
		}

		[Fact]
		public void Test_googleapis_com_beyondcorp_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\beyondcorp\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_biglake_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\biglake\v1\");
		}

		[Fact]
		public void Test_googleapis_com_bigquery_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\bigquery\v2\");
		}

		[Fact]
		public void Test_googleapis_com_bigqueryconnection_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\bigqueryconnection\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_bigquerydatapolicy_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\bigquerydatapolicy\v1\");
		}

		[Fact]
		public void Test_googleapis_com_bigquerydatatransfer_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\bigquerydatatransfer\v1\");
		}

		[Fact]
		public void Test_googleapis_com_bigqueryreservation_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\bigqueryreservation\v1\");
		}

		[Fact]
		public void Test_googleapis_com_bigqueryreservation_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\bigqueryreservation\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_bigtableadmin_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\bigtableadmin\v2\");
		}

		[Fact]
		public void Test_googleapis_com_billingbudgets_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\billingbudgets\v1\");
		}

		[Fact]
		public void Test_googleapis_com_billingbudgets_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\billingbudgets\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_binaryauthorization_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\binaryauthorization\v1\");
		}

		[Fact]
		public void Test_googleapis_com_binaryauthorization_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\binaryauthorization\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_blockchainnodeengine_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\blockchainnodeengine\v1\");
		}

		[Fact]
		public void Test_googleapis_com_blogger_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\blogger\v2\");
		}

		[Fact]
		public void Test_googleapis_com_blogger_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\blogger\v3\");
		}

		[Fact]
		public void Test_googleapis_com_books_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\books\v1\");
		}

		[Fact]
		public void Test_googleapis_com_businessprofileperformance_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\businessprofileperformance\v1\");
		}

		[Fact]
		public void Test_googleapis_com_calendar_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\calendar\v3\");
		}

		[Fact]
		public void Test_googleapis_com_certificatemanager_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\certificatemanager\v1\");
		}

		[Fact]
		public void Test_googleapis_com_chat_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\chat\v1\");
		}

		[Fact]
		public void Test_googleapis_com_checks_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\checks\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_chromemanagement_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\chromemanagement\v1\");
		}

		[Fact]
		public void Test_googleapis_com_chromepolicy_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\chromepolicy\v1\");
		}

		[Fact]
		public void Test_googleapis_com_chromeuxreport_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\chromeuxreport\v1\");
		}

		[Fact]
		public void Test_googleapis_com_civicinfo_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\civicinfo\v2\");
		}

		[Fact]
		public void Test_googleapis_com_classroom_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\classroom\v1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudasset_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudasset\v1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudasset_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudasset\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudasset_v1p1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudasset\v1p1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudasset_v1p4beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudasset\v1p4beta1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudasset_v1p5beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudasset\v1p5beta1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudasset_v1p7beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudasset\v1p7beta1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudbilling_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudbilling\v1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudbilling_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudbilling\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_cloudbuild_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudbuild\v1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudbuild_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudbuild\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudbuild_v1alpha2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudbuild\v1alpha2\");
		}

		[Fact]
		public void Test_googleapis_com_cloudbuild_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudbuild\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudbuild_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudbuild\v2\");
		}

		[Fact]
		public void Test_googleapis_com_cloudchannel_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudchannel\v1\");
		}

		[Fact]
		public void Test_googleapis_com_clouddebugger_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\clouddebugger\v2\");
		}

		[Fact]
		public void Test_googleapis_com_clouddeploy_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\clouddeploy\v1\");
		}

		[Fact]
		public void Test_googleapis_com_clouderrorreporting_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\clouderrorreporting\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudfunctions_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudfunctions\v1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudfunctions_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudfunctions\v2\");
		}

		[Fact]
		public void Test_googleapis_com_cloudfunctions_v2alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudfunctions\v2alpha\");
		}

		[Fact]
		public void Test_googleapis_com_cloudfunctions_v2beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudfunctions\v2beta\");
		}

		[Fact]
		public void Test_googleapis_com_cloudidentity_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudidentity\v1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudidentity_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudidentity\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudiot_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudiot\v1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudkms_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudkms\v1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudprivatecatalog_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudprivatecatalog\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudprivatecatalogproducer_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudprivatecatalogproducer\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudprofiler_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudprofiler\v2\");
		}

		[Fact]
		public void Test_googleapis_com_cloudresourcemanager_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudresourcemanager\v1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudresourcemanager_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudresourcemanager\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudresourcemanager_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudresourcemanager\v2\");
		}

		[Fact]
		public void Test_googleapis_com_cloudresourcemanager_v2beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudresourcemanager\v2beta1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudresourcemanager_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudresourcemanager\v3\");
		}

		[Fact]
		public void Test_googleapis_com_cloudscheduler_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudscheduler\v1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudscheduler_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudscheduler\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudsearch_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudsearch\v1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudshell_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudshell\v1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudsupport_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudsupport\v2\");
		}

		[Fact]
		public void Test_googleapis_com_cloudsupport_v2beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudsupport\v2beta\");
		}

		[Fact]
		public void Test_googleapis_com_cloudtasks_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudtasks\v2\");
		}

		[Fact]
		public void Test_googleapis_com_cloudtasks_v2beta2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudtasks\v2beta2\");
		}

		[Fact]
		public void Test_googleapis_com_cloudtasks_v2beta3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudtasks\v2beta3\");
		}

		[Fact]
		public void Test_googleapis_com_cloudtrace_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudtrace\v1\");
		}

		[Fact]
		public void Test_googleapis_com_cloudtrace_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudtrace\v2\");
		}

		[Fact]
		public void Test_googleapis_com_cloudtrace_v2beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\cloudtrace\v2beta1\");
		}

		[Fact]
		public void Test_googleapis_com_commentanalyzer_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\commentanalyzer\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_composer_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\composer\v1\");
		}

		[Fact]
		public void Test_googleapis_com_composer_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\composer\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_compute_alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\compute\alpha\");
		}

		[Fact]
		public void Test_googleapis_com_compute_beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\compute\beta\");
		}

		[Fact]
		public void Test_googleapis_com_compute_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\compute\v1\");
		}

		[Fact]
		public void Test_googleapis_com_connectors_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\connectors\v1\");
		}

		[Fact]
		public void Test_googleapis_com_connectors_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\connectors\v2\");
		}

		[Fact]
		public void Test_googleapis_com_contactcenteraiplatform_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\contactcenteraiplatform\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_contactcenterinsights_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\contactcenterinsights\v1\");
		}

		[Fact]
		public void Test_googleapis_com_container_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\container\v1\");
		}

		[Fact]
		public void Test_googleapis_com_container_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\container\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_containeranalysis_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\containeranalysis\v1\");
		}

		[Fact]
		public void Test_googleapis_com_containeranalysis_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\containeranalysis\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_containeranalysis_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\containeranalysis\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_content_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\content\v2\");
		}

		[Fact]
		public void Test_googleapis_com_content_v2_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\content\v2.1\");
		}

		[Fact]
		public void Test_googleapis_com_contentwarehouse_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\contentwarehouse\v1\");
		}

		[Fact]
		public void Test_googleapis_com_customsearch_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\customsearch\v1\");
		}

		[Fact]
		public void Test_googleapis_com_datacatalog_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\datacatalog\v1\");
		}

		[Fact]
		public void Test_googleapis_com_datacatalog_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\datacatalog\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_dataflow_v1b3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\dataflow\v1b3\");
		}

		[Fact]
		public void Test_googleapis_com_dataform_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\dataform\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_datafusion_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\datafusion\v1\");
		}

		[Fact]
		public void Test_googleapis_com_datafusion_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\datafusion\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_datalabeling_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\datalabeling\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_datalineage_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\datalineage\v1\");
		}

		[Fact]
		public void Test_googleapis_com_datamigration_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\datamigration\v1\");
		}

		[Fact]
		public void Test_googleapis_com_datamigration_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\datamigration\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_datapipelines_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\datapipelines\v1\");
		}

		[Fact]
		public void Test_googleapis_com_dataplex_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\dataplex\v1\");
		}

		[Fact]
		public void Test_googleapis_com_dataproc_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\dataproc\v1\");
		}

		[Fact]
		public void Test_googleapis_com_datastore_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\datastore\v1\");
		}

		[Fact]
		public void Test_googleapis_com_datastore_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\datastore\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_datastore_v1beta3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\datastore\v1beta3\");
		}

		[Fact]
		public void Test_googleapis_com_datastream_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\datastream\v1\");
		}

		[Fact]
		public void Test_googleapis_com_datastream_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\datastream\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_deploymentmanager_alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\deploymentmanager\alpha\");
		}

		[Fact]
		public void Test_googleapis_com_deploymentmanager_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\deploymentmanager\v2\");
		}

		[Fact]
		public void Test_googleapis_com_deploymentmanager_v2beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\deploymentmanager\v2beta\");
		}

		[Fact]
		public void Test_googleapis_com_dfareporting_v3_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\dfareporting\v3.3\");
		}

		[Fact]
		public void Test_googleapis_com_dfareporting_v3_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\dfareporting\v3.4\");
		}

		[Fact]
		public void Test_googleapis_com_dfareporting_v3_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\dfareporting\v3.5\");
		}

		[Fact]
		public void Test_googleapis_com_dfareporting_v4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\dfareporting\v4\");
		}

		[Fact]
		public void Test_googleapis_com_dialogflow_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\dialogflow\v2\");
		}

		[Fact]
		public void Test_googleapis_com_dialogflow_v2beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\dialogflow\v2beta1\");
		}

		[Fact]
		public void Test_googleapis_com_dialogflow_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\dialogflow\v3\");
		}

		[Fact]
		public void Test_googleapis_com_dialogflow_v3beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\dialogflow\v3beta1\");
		}

		[Fact]
		public void Test_googleapis_com_digitalassetlinks_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\digitalassetlinks\v1\");
		}

		[Fact]
		public void Test_googleapis_com_discovery_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\discovery\v1\");
		}

		[Fact]
		public void Test_googleapis_com_discoveryengine_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\discoveryengine\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_discoveryengine_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\discoveryengine\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_displayvideo_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\displayvideo\v1\");
		}

		[Fact]
		public void Test_googleapis_com_displayvideo_v1dev()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\displayvideo\v1dev\");
		}

		[Fact]
		public void Test_googleapis_com_displayvideo_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\displayvideo\v2\");
		}

		[Fact]
		public void Test_googleapis_com_displayvideo_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\displayvideo\v3\");
		}

		[Fact]
		public void Test_googleapis_com_dlp_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\dlp\v2\");
		}

		[Fact]
		public void Test_googleapis_com_dns_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\dns\v1\");
		}

		[Fact]
		public void Test_googleapis_com_dns_v1beta2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\dns\v1beta2\");
		}

		[Fact]
		public void Test_googleapis_com_dns_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\dns\v2\");
		}

		[Fact]
		public void Test_googleapis_com_docs_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\docs\v1\");
		}

		[Fact]
		public void Test_googleapis_com_documentai_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\documentai\v1\");
		}

		[Fact]
		public void Test_googleapis_com_documentai_v1beta2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\documentai\v1beta2\");
		}

		[Fact]
		public void Test_googleapis_com_documentai_v1beta3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\documentai\v1beta3\");
		}

		[Fact]
		public void Test_googleapis_com_domains_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\domains\v1\");
		}

		[Fact]
		public void Test_googleapis_com_domains_v1alpha2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\domains\v1alpha2\");
		}

		[Fact]
		public void Test_googleapis_com_domains_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\domains\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_domainsrdap_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\domainsrdap\v1\");
		}

		[Fact]
		public void Test_googleapis_com_doubleclickbidmanager_v1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\doubleclickbidmanager\v1.1\");
		}

		[Fact]
		public void Test_googleapis_com_doubleclickbidmanager_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\doubleclickbidmanager\v2\");
		}

		[Fact]
		public void Test_googleapis_com_doubleclicksearch_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\doubleclicksearch\v2\");
		}

		[Fact]
		public void Test_googleapis_com_drive_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\drive\v2\");
		}

		[Fact]
		public void Test_googleapis_com_drive_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\drive\v3\");
		}

		[Fact]
		public void Test_googleapis_com_driveactivity_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\driveactivity\v2\");
		}

		[Fact]
		public void Test_googleapis_com_drivelabels_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\drivelabels\v2\");
		}

		[Fact]
		public void Test_googleapis_com_drivelabels_v2beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\drivelabels\v2beta\");
		}

		[Fact]
		public void Test_googleapis_com_essentialcontacts_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\essentialcontacts\v1\");
		}

		[Fact]
		public void Test_googleapis_com_eventarc_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\eventarc\v1\");
		}

		[Fact]
		public void Test_googleapis_com_eventarc_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\eventarc\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_factchecktools_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\factchecktools\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_fcm_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\fcm\v1\");
		}

		[Fact]
		public void Test_googleapis_com_fcmdata_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\fcmdata\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_file_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\file\v1\");
		}

		[Fact]
		public void Test_googleapis_com_file_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\file\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_firebase_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\firebase\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_firebaseappcheck_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\firebaseappcheck\v1\");
		}

		[Fact]
		public void Test_googleapis_com_firebaseappcheck_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\firebaseappcheck\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_firebaseappdistribution_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\firebaseappdistribution\v1\");
		}

		[Fact]
		public void Test_googleapis_com_firebaseappdistribution_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\firebaseappdistribution\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_firebasedatabase_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\firebasedatabase\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_firebasedynamiclinks_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\firebasedynamiclinks\v1\");
		}

		[Fact]
		public void Test_googleapis_com_firebasehosting_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\firebasehosting\v1\");
		}

		[Fact]
		public void Test_googleapis_com_firebasehosting_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\firebasehosting\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_firebaseml_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\firebaseml\v1\");
		}

		[Fact]
		public void Test_googleapis_com_firebaseml_v1beta2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\firebaseml\v1beta2\");
		}

		[Fact]
		public void Test_googleapis_com_firebaserules_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\firebaserules\v1\");
		}

		[Fact]
		public void Test_googleapis_com_firebasestorage_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\firebasestorage\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_firestore_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\firestore\v1\");
		}

		[Fact]
		public void Test_googleapis_com_firestore_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\firestore\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_firestore_v1beta2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\firestore\v1beta2\");
		}

		[Fact]
		public void Test_googleapis_com_fitness_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\fitness\v1\");
		}

		[Fact]
		public void Test_googleapis_com_forms_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\forms\v1\");
		}

		[Fact]
		public void Test_googleapis_com_games_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\games\v1\");
		}

		[Fact]
		public void Test_googleapis_com_gamesConfiguration_v1configuration()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\gamesConfiguration\v1configuration\");
		}

		[Fact]
		public void Test_googleapis_com_gameservices_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\gameservices\v1\");
		}

		[Fact]
		public void Test_googleapis_com_gameservices_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\gameservices\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_gamesManagement_v1management()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\gamesManagement\v1management\");
		}

		[Fact]
		public void Test_googleapis_com_genomics_v2alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\genomics\v2alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_gkebackup_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\gkebackup\v1\");
		}

		[Fact]
		public void Test_googleapis_com_gkehub_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\gkehub\v1\");
		}

		[Fact]
		public void Test_googleapis_com_gkehub_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\gkehub\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_gkehub_v1alpha2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\gkehub\v1alpha2\");
		}

		[Fact]
		public void Test_googleapis_com_gkehub_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\gkehub\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_gkehub_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\gkehub\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_gkehub_v2alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\gkehub\v2alpha\");
		}

		[Fact]
		public void Test_googleapis_com_gkeonprem_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\gkeonprem\v1\");
		}

		[Fact]
		public void Test_googleapis_com_gmail_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\gmail\v1\");
		}

		[Fact]
		public void Test_googleapis_com_gmailpostmastertools_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\gmailpostmastertools\v1\");
		}

		[Fact]
		public void Test_googleapis_com_gmailpostmastertools_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\gmailpostmastertools\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_groupsmigration_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\groupsmigration\v1\");
		}

		[Fact]
		public void Test_googleapis_com_groupssettings_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\groupssettings\v1\");
		}

		[Fact]
		public void Test_googleapis_com_healthcare_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\healthcare\v1\");
		}

		[Fact]
		public void Test_googleapis_com_healthcare_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\healthcare\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_homegraph_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\homegraph\v1\");
		}

		[Fact]
		public void Test_googleapis_com_iam_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\iam\v1\");
		}

		[Fact]
		public void Test_googleapis_com_iam_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\iam\v2\");
		}

		[Fact]
		public void Test_googleapis_com_iam_v2beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\iam\v2beta\");
		}

		[Fact]
		public void Test_googleapis_com_iamcredentials_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\iamcredentials\v1\");
		}

		[Fact]
		public void Test_googleapis_com_iap_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\iap\v1\");
		}

		[Fact]
		public void Test_googleapis_com_iap_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\iap\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_ideahub_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\ideahub\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_ideahub_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\ideahub\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_identitytoolkit_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\identitytoolkit\v2\");
		}

		[Fact]
		public void Test_googleapis_com_identitytoolkit_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\identitytoolkit\v3\");
		}

		[Fact]
		public void Test_googleapis_com_ids_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\ids\v1\");
		}

		[Fact]
		public void Test_googleapis_com_indexing_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\indexing\v3\");
		}

		[Fact]
		public void Test_googleapis_com_integrations_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\integrations\v1\");
		}

		[Fact]
		public void Test_googleapis_com_integrations_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\integrations\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_jobs_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\jobs\v3\");
		}

		[Fact]
		public void Test_googleapis_com_jobs_v3p1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\jobs\v3p1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_jobs_v4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\jobs\v4\");
		}

		[Fact]
		public void Test_googleapis_com_keep_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\keep\v1\");
		}

		[Fact]
		public void Test_googleapis_com_kgsearch_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\kgsearch\v1\");
		}

		[Fact]
		public void Test_googleapis_com_kmsinventory_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\kmsinventory\v1\");
		}

		[Fact]
		public void Test_googleapis_com_language_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\language\v1\");
		}

		[Fact]
		public void Test_googleapis_com_language_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\language\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_language_v1beta2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\language\v1beta2\");
		}

		[Fact]
		public void Test_googleapis_com_language_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\language\v2\");
		}

		[Fact]
		public void Test_googleapis_com_libraryagent_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\libraryagent\v1\");
		}

		[Fact]
		public void Test_googleapis_com_licensing_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\licensing\v1\");
		}

		[Fact]
		public void Test_googleapis_com_lifesciences_v2beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\lifesciences\v2beta\");
		}

		[Fact]
		public void Test_googleapis_com_localservices_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\localservices\v1\");
		}

		[Fact]
		public void Test_googleapis_com_logging_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\logging\v2\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_googleapis_com_looker_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\looker\v1\");
		}

		[Fact]
		public void Test_googleapis_com_managedidentities_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\managedidentities\v1\");
		}

		[Fact]
		public void Test_googleapis_com_managedidentities_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\managedidentities\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_managedidentities_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\managedidentities\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_manufacturers_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\manufacturers\v1\");
		}

		[Fact]
		public void Test_googleapis_com_memcache_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\memcache\v1\");
		}

		[Fact]
		public void Test_googleapis_com_memcache_v1beta2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\memcache\v1beta2\");
		}

		[Fact]
		public void Test_googleapis_com_metastore_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\metastore\v1\");
		}

		[Fact]
		public void Test_googleapis_com_metastore_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\metastore\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_metastore_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\metastore\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_migrationcenter_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\migrationcenter\v1\");
		}

		[Fact]
		public void Test_googleapis_com_migrationcenter_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\migrationcenter\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_mirror_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\mirror\v1\");
		}

		[Fact]
		public void Test_googleapis_com_ml_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\ml\v1\");
		}

		[Fact]
		public void Test_googleapis_com_monitoring_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\monitoring\v1\");
		}

		[Fact]
		public void Test_googleapis_com_monitoring_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\monitoring\v3\");
		}

		[Fact]
		public void Test_googleapis_com_my_business_v4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\my-business\v4\");
		}

		[Fact]
		public void Test_googleapis_com_mybusinessaccountmanagement_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\mybusinessaccountmanagement\v1\");
		}

		[Fact]
		public void Test_googleapis_com_mybusinessbusinesscalls_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\mybusinessbusinesscalls\v1\");
		}

		[Fact]
		public void Test_googleapis_com_mybusinessbusinessinformation_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\mybusinessbusinessinformation\v1\");
		}

		[Fact]
		public void Test_googleapis_com_mybusinesslodging_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\mybusinesslodging\v1\");
		}

		[Fact]
		public void Test_googleapis_com_mybusinessnotifications_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\mybusinessnotifications\v1\");
		}

		[Fact]
		public void Test_googleapis_com_mybusinessplaceactions_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\mybusinessplaceactions\v1\");
		}

		[Fact]
		public void Test_googleapis_com_mybusinessqanda_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\mybusinessqanda\v1\");
		}

		[Fact]
		public void Test_googleapis_com_mybusinessverifications_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\mybusinessverifications\v1\");
		}

		[Fact]
		public void Test_googleapis_com_networkconnectivity_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\networkconnectivity\v1\");
		}

		[Fact]
		public void Test_googleapis_com_networkconnectivity_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\networkconnectivity\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_networkmanagement_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\networkmanagement\v1\");
		}

		[Fact]
		public void Test_googleapis_com_networkmanagement_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\networkmanagement\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_networksecurity_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\networksecurity\v1\");
		}

		[Fact]
		public void Test_googleapis_com_networksecurity_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\networksecurity\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_networkservices_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\networkservices\v1\");
		}

		[Fact]
		public void Test_googleapis_com_networkservices_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\networkservices\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_notebooks_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\notebooks\v1\");
		}

		[Fact]
		public void Test_googleapis_com_notebooks_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\notebooks\v2\");
		}

		[Fact]
		public void Test_googleapis_com_oauth2_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\oauth2\v1\");
		}

		[Fact]
		public void Test_googleapis_com_oauth2_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\oauth2\v2\");
		}

		[Fact]
		public void Test_googleapis_com_ondemandscanning_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\ondemandscanning\v1\");
		}

		[Fact]
		public void Test_googleapis_com_ondemandscanning_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\ondemandscanning\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_orgpolicy_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\orgpolicy\v2\");
		}

		[Fact]
		public void Test_googleapis_com_osconfig_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\osconfig\v1\");
		}

		[Fact]
		public void Test_googleapis_com_osconfig_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\osconfig\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_osconfig_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\osconfig\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_oslogin_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\oslogin\v1\");
		}

		[Fact]
		public void Test_googleapis_com_oslogin_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\oslogin\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_oslogin_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\oslogin\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_pagespeedonline_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\pagespeedonline\v1\");
		}

		[Fact]
		public void Test_googleapis_com_pagespeedonline_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\pagespeedonline\v2\");
		}

		[Fact]
		public void Test_googleapis_com_pagespeedonline_v4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\pagespeedonline\v4\");
		}

		[Fact]
		public void Test_googleapis_com_pagespeedonline_v5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\pagespeedonline\v5\");
		}

		[Fact]
		public void Test_googleapis_com_paymentsresellersubscription_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\paymentsresellersubscription\v1\");
		}

		[Fact]
		public void Test_googleapis_com_people_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\people\v1\");
		}

		[Fact]
		public void Test_googleapis_com_places_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\places\v1\");
		}

		[Fact]
		public void Test_googleapis_com_playablelocations_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\playablelocations\v3\");
		}

		[Fact]
		public void Test_googleapis_com_playcustomapp_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\playcustomapp\v1\");
		}

		[Fact]
		public void Test_googleapis_com_playdeveloperreporting_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\playdeveloperreporting\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_playdeveloperreporting_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\playdeveloperreporting\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_playgrouping_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\playgrouping\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_playintegrity_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\playintegrity\v1\");
		}

		[Fact]
		public void Test_googleapis_com_plus_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\plus\v1\");
		}

		[Fact]
		public void Test_googleapis_com_policyanalyzer_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\policyanalyzer\v1\");
		}

		[Fact]
		public void Test_googleapis_com_policyanalyzer_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\policyanalyzer\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_policysimulator_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\policysimulator\v1\");
		}

		[Fact]
		public void Test_googleapis_com_policysimulator_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\policysimulator\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_policysimulator_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\policysimulator\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_policysimulator_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\policysimulator\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_policytroubleshooter_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\policytroubleshooter\v1\");
		}

		[Fact]
		public void Test_googleapis_com_policytroubleshooter_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\policytroubleshooter\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_poly_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\poly\v1\");
		}

		[Fact]
		public void Test_googleapis_com_privateca_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\privateca\v1\");
		}

		[Fact]
		public void Test_googleapis_com_privateca_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\privateca\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_prod_tt_sasportal_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\prod_tt_sasportal\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_proximitybeacon_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\proximitybeacon\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_publicca_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\publicca\v1\");
		}

		[Fact]
		public void Test_googleapis_com_publicca_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\publicca\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_publicca_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\publicca\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_pubsub_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\pubsub\v1\");
		}

		[Fact]
		public void Test_googleapis_com_pubsub_v1beta1a()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\pubsub\v1beta1a\");
		}

		[Fact]
		public void Test_googleapis_com_pubsub_v1beta2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\pubsub\v1beta2\");
		}

		[Fact]
		public void Test_googleapis_com_pubsublite_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\pubsublite\v1\");
		}

		[Fact]
		public void Test_googleapis_com_rapidmigrationassessment_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\rapidmigrationassessment\v1\");
		}

		[Fact]
		public void Test_googleapis_com_readerrevenuesubscriptionlinking_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\readerrevenuesubscriptionlinking\v1\");
		}

		[Fact]
		public void Test_googleapis_com_realtimebidding_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\realtimebidding\v1\");
		}

		[Fact]
		public void Test_googleapis_com_realtimebidding_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\realtimebidding\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_recaptchaenterprise_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\recaptchaenterprise\v1\");
		}

		[Fact]
		public void Test_googleapis_com_recommendationengine_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\recommendationengine\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_recommender_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\recommender\v1\");
		}

		[Fact]
		public void Test_googleapis_com_recommender_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\recommender\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_redis_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\redis\v1\");
		}

		[Fact]
		public void Test_googleapis_com_redis_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\redis\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_remotebuildexecution_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\remotebuildexecution\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_replicapool_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\replicapool\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_reseller_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\reseller\v1\");
		}

		[Fact]
		public void Test_googleapis_com_resourcesettings_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\resourcesettings\v1\");
		}

		[Fact]
		public void Test_googleapis_com_retail_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\retail\v2\");
		}

		[Fact]
		public void Test_googleapis_com_retail_v2alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\retail\v2alpha\");
		}

		[Fact]
		public void Test_googleapis_com_retail_v2beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\retail\v2beta\");
		}

		[Fact]
		public void Test_googleapis_com_run_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\run\v1\");
		}

		[Fact]
		public void Test_googleapis_com_run_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\run\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_run_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\run\v2\");
		}

		[Fact]
		public void Test_googleapis_com_runtimeconfig_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\runtimeconfig\v1\");
		}

		[Fact]
		public void Test_googleapis_com_runtimeconfig_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\runtimeconfig\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_safebrowsing_v4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\safebrowsing\v4\");
		}

		[Fact]
		public void Test_googleapis_com_safebrowsing_v5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\safebrowsing\v5\");
		}

		[Fact]
		public void Test_googleapis_com_sasportal_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\sasportal\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_script_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\script\v1\");
		}

		[Fact]
		public void Test_googleapis_com_searchads360_v0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\searchads360\v0\");
		}

		[Fact]
		public void Test_googleapis_com_searchconsole_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\searchconsole\v1\");
		}

		[Fact]
		public void Test_googleapis_com_secretmanager_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\secretmanager\v1\");
		}

		[Fact]
		public void Test_googleapis_com_secretmanager_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\secretmanager\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_securitycenter_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\securitycenter\v1\");
		}

		[Fact]
		public void Test_googleapis_com_securitycenter_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\securitycenter\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_securitycenter_v1beta2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\securitycenter\v1beta2\");
		}

		[Fact]
		public void Test_googleapis_com_securitycenter_v1p1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\securitycenter\v1p1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_servicebroker_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\servicebroker\v1\");
		}

		[Fact]
		public void Test_googleapis_com_servicebroker_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\servicebroker\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_servicebroker_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\servicebroker\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_serviceconsumermanagement_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\serviceconsumermanagement\v1\");
		}

		[Fact]
		public void Test_googleapis_com_serviceconsumermanagement_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\serviceconsumermanagement\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_servicecontrol_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\servicecontrol\v1\");
		}

		[Fact]
		public void Test_googleapis_com_servicecontrol_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\servicecontrol\v2\");
		}

		[Fact]
		public void Test_googleapis_com_servicedirectory_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\servicedirectory\v1\");
		}

		[Fact]
		public void Test_googleapis_com_servicedirectory_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\servicedirectory\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_servicemanagement_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\servicemanagement\v1\");
		}

		[Fact]
		public void Test_googleapis_com_servicenetworking_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\servicenetworking\v1\");
		}

		[Fact]
		public void Test_googleapis_com_servicenetworking_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\servicenetworking\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_serviceusage_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\serviceusage\v1\");
		}

		[Fact]
		public void Test_googleapis_com_serviceusage_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\serviceusage\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_sheets_v4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\sheets\v4\");
		}

		[Fact]
		public void Test_googleapis_com_shoppingcontent_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\shoppingcontent\v2\");
		}

		[Fact]
		public void Test_googleapis_com_siteVerification_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\siteVerification\v1\");
		}

		[Fact]
		public void Test_googleapis_com_slides_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\slides\v1\");
		}

		[Fact]
		public void Test_googleapis_com_smartdevicemanagement_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\smartdevicemanagement\v1\");
		}

		[Fact]
		public void Test_googleapis_com_sourcerepo_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\sourcerepo\v1\");
		}

		[Fact]
		public void Test_googleapis_com_spanner_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\spanner\v1\");
		}

		[Fact]
		public void Test_googleapis_com_speech_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\speech\v1\");
		}

		[Fact]
		public void Test_googleapis_com_speech_v1p1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\speech\v1p1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_speech_v2beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\speech\v2beta1\");
		}

		[Fact]
		public void Test_googleapis_com_sql_v1beta4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\sql\v1beta4\");
		}

		[Fact]
		public void Test_googleapis_com_sqladmin_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\sqladmin\v1\");
		}

		[Fact]
		public void Test_googleapis_com_storage_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\storage\v1\");
		}

		[Fact]
		public void Test_googleapis_com_storage_v1beta2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\storage\v1beta2\");
		}

		[Fact]
		public void Test_googleapis_com_storagetransfer_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\storagetransfer\v1\");
		}

		[Fact]
		public void Test_googleapis_com_streetviewpublish_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\streetviewpublish\v1\");
		}

		[Fact]
		public void Test_googleapis_com_sts_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\sts\v1\");
		}

		[Fact]
		public void Test_googleapis_com_sts_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\sts\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_tagmanager_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\tagmanager\v1\");
		}

		[Fact]
		public void Test_googleapis_com_tagmanager_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\tagmanager\v2\");
		}

		[Fact]
		public void Test_googleapis_com_tasks_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\tasks\v1\");
		}

		[Fact]
		public void Test_googleapis_com_testing_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\testing\v1\");
		}

		[Fact]
		public void Test_googleapis_com_texttospeech_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\texttospeech\v1\");
		}

		[Fact]
		public void Test_googleapis_com_texttospeech_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\texttospeech\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_toolresults_v1beta3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\toolresults\v1beta3\");
		}

		[Fact]
		public void Test_googleapis_com_tpu_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\tpu\v1\");
		}

		[Fact]
		public void Test_googleapis_com_tpu_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\tpu\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_tpu_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\tpu\v2\");
		}

		[Fact]
		public void Test_googleapis_com_tpu_v2alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\tpu\v2alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_trafficdirector_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\trafficdirector\v2\");
		}

		[Fact]
		public void Test_googleapis_com_trafficdirector_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\trafficdirector\v3\");
		}

		[Fact]
		public void Test_googleapis_com_transcoder_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\transcoder\v1\");
		}

		[Fact]
		public void Test_googleapis_com_transcoder_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\transcoder\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_translate_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\translate\v2\");
		}

		[Fact]
		public void Test_googleapis_com_translate_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\translate\v3\");
		}

		[Fact]
		public void Test_googleapis_com_translate_v3beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\translate\v3beta1\");
		}

		[Fact]
		public void Test_googleapis_com_travelimpactmodel_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\travelimpactmodel\v1\");
		}

		[Fact]
		public void Test_googleapis_com_vault_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\vault\v1\");
		}

		[Fact]
		public void Test_googleapis_com_vectortile_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\vectortile\v1\");
		}

		[Fact]
		public void Test_googleapis_com_verifiedaccess_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\verifiedaccess\v1\");
		}

		[Fact]
		public void Test_googleapis_com_verifiedaccess_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\verifiedaccess\v2\");
		}

		[Fact]
		public void Test_googleapis_com_versionhistory_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\versionhistory\v1\");
		}

		[Fact]
		public void Test_googleapis_com_videointelligence_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\videointelligence\v1\");
		}

		[Fact]
		public void Test_googleapis_com_videointelligence_v1beta2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\videointelligence\v1beta2\");
		}

		[Fact]
		public void Test_googleapis_com_videointelligence_v1p1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\videointelligence\v1p1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_videointelligence_v1p2beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\videointelligence\v1p2beta1\");
		}

		[Fact]
		public void Test_googleapis_com_videointelligence_v1p3beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\videointelligence\v1p3beta1\");
		}

		[Fact]
		public void Test_googleapis_com_vision_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\vision\v1\");
		}

		[Fact]
		public void Test_googleapis_com_vision_v1p1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\vision\v1p1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_vision_v1p2beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\vision\v1p2beta1\");
		}

		[Fact]
		public void Test_googleapis_com_vmmigration_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\vmmigration\v1\");
		}

		[Fact]
		public void Test_googleapis_com_vmmigration_v1alpha1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\vmmigration\v1alpha1\");
		}

		[Fact]
		public void Test_googleapis_com_vmwareengine_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\vmwareengine\v1\");
		}

		[Fact]
		public void Test_googleapis_com_vpcaccess_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\vpcaccess\v1\");
		}

		[Fact]
		public void Test_googleapis_com_vpcaccess_v1beta1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\vpcaccess\v1beta1\");
		}

		[Fact]
		public void Test_googleapis_com_walletobjects_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\walletobjects\v1\");
		}

		[Fact]
		public void Test_googleapis_com_webfonts_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\webfonts\v1\");
		}

		[Fact]
		public void Test_googleapis_com_webmasters_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\webmasters\v3\");
		}

		[Fact]
		public void Test_googleapis_com_webrisk_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\webrisk\v1\");
		}

		[Fact]
		public void Test_googleapis_com_websecurityscanner_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\websecurityscanner\v1\");
		}

		[Fact]
		public void Test_googleapis_com_websecurityscanner_v1alpha()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\websecurityscanner\v1alpha\");
		}

		[Fact]
		public void Test_googleapis_com_websecurityscanner_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\websecurityscanner\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_workflowexecutions_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\workflowexecutions\v1\");
		}

		[Fact]
		public void Test_googleapis_com_workflowexecutions_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\workflowexecutions\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_workflows_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\workflows\v1\");
		}

		[Fact]
		public void Test_googleapis_com_workflows_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\workflows\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_workloadmanager_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\workloadmanager\v1\");
		}

		[Fact]
		public void Test_googleapis_com_workstations_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\workstations\v1\");
		}

		[Fact]
		public void Test_googleapis_com_workstations_v1beta()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\workstations\v1beta\");
		}

		[Fact]
		public void Test_googleapis_com_youtube_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\youtube\v3\");
		}

		[Fact]
		public void Test_googleapis_com_youtubeAnalytics_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\youtubeAnalytics\v1\");
		}

		[Fact]
		public void Test_googleapis_com_youtubeAnalytics_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\youtubeAnalytics\v2\");
		}

		[Fact]
		public void Test_googleapis_com_youtubereporting_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\googleapis.com\youtubereporting\v1\");
		}

		[Fact]
		public void Test_gov_bc_ca_bcdc_3_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\gov.bc.ca\bcdc\3.0.1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_gov_bc_ca_bcgnws_3_x_x()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\gov.bc.ca\bcgnws\3.x.x\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_gov_bc_ca_geocoder_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\gov.bc.ca\geocoder\2.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_gov_bc_ca_geomark_4_1_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\gov.bc.ca\geomark\4.1.2\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_gov_bc_ca_gwells_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\gov.bc.ca\gwells\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_gov_bc_ca_jobposting_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\gov.bc.ca\jobposting\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_gov_bc_ca_news_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\gov.bc.ca\news\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_gov_bc_ca_open511_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\gov.bc.ca\open511\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_gov_bc_ca_router_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\gov.bc.ca\router\2.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_graphhopper_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\graphhopper.com\1.0.0\");
		}

		[Fact]
		public void Test_greip_io_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\greip.io\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_groundhog_day_com_1_2_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\groundhog-day.com\1.2.1\");
		}

		[Fact(Skip = "doggy yaml: task_duration:\r\n          default: 4 10:55:34.12")]
		public void Test_gsmtasks_com_2_4_13()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\gsmtasks.com\2.4.13\");
		}

		[Fact]
		public void Test_hackathonwatch_com_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\hackathonwatch.com\0.1\");
		}

		[Fact]
		public void Test_healthcare_gov_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\healthcare.gov\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_here_com_positioning_2_1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\here.com\positioning\2.1.1\");
		}

		[Fact(Skip ="defined a component named System. Not sure if I should tolerate it.")]
		public void Test_here_com_tracking_2_1_192()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\here.com\tracking\2.1.192\");
		}

		[Fact]
		public void Test_hetzner_cloud_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\hetzner.cloud\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="generated function name is too long. But overall OK")]
		public void Test_hhs_gov_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\hhs.gov\2\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}
		//    (1621,41): error CS7013: Name 'ResourcesMedia_jsonGetByMaxAndOffsetAndSortAndOrderAndMediaTypesAndNameAndCollectionIdAndNameContainsAndDescriptionContainsAndSourceUrlAndSourceUrlContainsAndCustomThumbnailUrlAndCustomThumbnailUrlContainsAndDateContentAuthoredAndDateContentUpdatedAndDateContentPublishedAndDateContentReviewedAndDateSyndicationCapturedAndDateSyndicationUpdatedAndContentAuthoredSinceDateAndContentAuthoredBeforeDateAndContentAuthoredInRangeAndContentUpdatedSinceDateAndContentUpdatedBeforeDateAndContentUpdatedInRangeAndContentPublishedSinceDateAndContentPublishedBeforeDateAndContentPublishedInRangeAndContentReviewedSinceDateAndContentReviewedBeforeDateAndContentReviewedInRangeAndSyndicationCapturedSinceDateAndSyndicationCapturedBeforeDateAndSyndicationCapturedInRangeAndSyndicationUpdatedSinceDateAndSyndicationUpdatedBeforeDateAndSyndicationUpdatedInRangeAndSyndicationVisibleSinceDateAndSyndicationVisibleBeforeDateAndSyndicationVisibleInRangeAndLanguageIdAndLanguageNameAndLanguageIsoCodeAndHashAndHashContainsAndSourceIdAndSourceNameAndSourceNameContainsAndSourceAcronymAndSourceAcronymContainsAndTagIdsAndRestrictToSetAndCreatedByAsync' exceeds the maximum length allowed in metadata.
		//error CS7013: Name '<ResourcesMedia_jsonGetByMaxAndOffsetAndSortAndOrderAndMediaTypesAndNameAndCollectionIdAndNameContainsAndDescriptionContainsAndSourceUrlAndSourceUrlContainsAndCustomThumbnailUrlAndCustomThumbnailUrlContainsAndDateContentAuthoredAndDateContentUpdatedAndDateContentPublishedAndDateContentReviewedAndDateSyndicationCapturedAndDateSyndicationUpdatedAndContentAuthoredSinceDateAndContentAuthoredBeforeDateAndContentAuthoredInRangeAndContentUpdatedSinceDateAndContentUpdatedBeforeDateAndContentUpdatedInRangeAndContentPublishedSinceDateAndContentPublishedBeforeDateAndContentPublishedInRangeAndContentReviewedSinceDateAndContentReviewedBeforeDateAndContentReviewedInRangeAndSyndicationCapturedSinceDateAndSyndicationCapturedBeforeDateAndSyndicationCapturedInRangeAndSyndicationUpdatedSinceDateAndSyndicationUpdatedBeforeDateAndSyndicationUpdatedInRangeAndSyndicationVisibleSinceDateAndSyndicationVisibleBeforeDateAndSyndicationVisibleInRangeAndLanguageIdAndLanguageNameAndLanguageIsoCodeAndHashAndHashContainsAndSourceIdAndSourceNameAndSourceNameContainsAndSourceAcronymAndSourceAcronymContainsAndTagIdsAndRestrictToSetAndCreatedByAsync>d__10' exceeds the maximum length allowed in metadata.
	


			[Fact]
		public void Test_highwaysengland_co_uk_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\highwaysengland.co.uk\v1\");
		}

		[Fact(Skip = "application/x-www-form-urlencoded not supported")]
		public void Test_httpbin_org_0_9_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\httpbin.org\0.9.2\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_hubapi_com_analytics_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\hubapi.com\analytics\v3\");
		}

		[Fact]
		public void Test_hubapi_com_auth_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\hubapi.com\auth\v1\");
		}

		[Fact]
		public void Test_hubapi_com_automation_v4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\hubapi.com\automation\v4\");
		}

		[Fact]
		public void Test_hubapi_com_business_units_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\hubapi.com\business units\v3\");
		}

		[Fact]
		public void Test_hubapi_com_cms_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\hubapi.com\cms\v3\");
		}

		[Fact]
		public void Test_hubapi_com_communication_preferences_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\hubapi.com\communication-preferences\v3\");
		}

		[Fact]
		public void Test_hubapi_com_conversations_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\hubapi.com\conversations\v3\");
		}

		[Fact]
		public void Test_hubapi_com_crm_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\hubapi.com\crm\v3\");
		}

		[Fact(Skip = "not to support something like in: query\r\n          name: objectProperty.{propname}")]
		public void Test_hubapi_com_events_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\hubapi.com\events\v3\");
		}

		[Fact]
		public void Test_hubapi_com_files_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\hubapi.com\files\v3\");
		}

		[Fact]
		public void Test_hubapi_com_marketing_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\hubapi.com\marketing\v3\");
		}

		[Fact]
		public void Test_hubapi_com_webhooks_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\hubapi.com\webhooks\v3\");
		}

		[Fact]
		public void Test_i_cue_solutions_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\i-cue.solutions\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="doggy yaml and doggy design")]
		public void Test_ibanapi_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ibanapi.com\1.0.0\");
		}

		[Fact(Skip ="doggy yaml. and the url of new version returns 404")]
		public void Test_icons8_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\icons8.com\1.0.0\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_id4i_de_1_0_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\id4i.de\1.0.2\");
		}

		[Fact]
		public void Test_ideaconsult_net_enanomapper_4_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ideaconsult.net\enanomapper\4.0.0\");
		}

		[Fact]
		public void Test_ideaconsult_net_nanoreg_4_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ideaconsult.net\nanoreg\4.0.0\");
		}

		[Fact(Skip ="doggy yaml using bool as enum")]
		public void Test_ideal_postcodes_co_uk_3_7_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ideal-postcodes.co.uk\3.7.0\");
		}

		[Fact(Skip ="doggy yaml, wrong integer def")]
		public void Test_impala_travel_hotels_1_003()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\impala.travel\hotels\1.003\");
		}

		[Fact]
		public void Test_increase_com_0_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\increase.com\0.0.1\");
		}

		[Fact]
		public void Test_influxdata_com_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\influxdata.com\2.0.0\");
		}

		[Fact(Skip = "doggy yaml. GetEventsForSubscriptionById parameters")]
		public void Test_intellifi_nl_2_23_4_0_gb463b49_dirty()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\intellifi.nl\2.23.4+0.gb463b49.dirty\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_interactivebrokers_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interactivebrokers.com\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_convertcurrency_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\convertcurrency\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getaddressmatch_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getaddressmatch\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getareacodefromnumber_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getareacodefromnumber\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getcitymatch_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getcitymatch\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getcitystandard_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getcitystandard\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getcompanymatch_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getcompanymatch\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getcountrymatch_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getcountrymatch\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getcountrystandard_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getcountrystandard\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getcurrencyrate_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getcurrencyrate\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getemailinfo_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getemailinfo\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getfullnamematch_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getfullnamematch\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getfullnameparsedmatch_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getfullnameparsedmatch\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getglobalnumberinfo_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getglobalnumberinfo\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getglobaltime_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getglobaltime\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getstateabbreviation_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getstateabbreviation\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getweathercity_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getweathercity\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getweatherzip_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getweatherzip\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_getzipinfo_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\getzipinfo\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_globalpageload_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\globalpageload\1.0.0\");
		}

		[Fact]
		public void Test_interzoid_com_lookupareacode_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\interzoid.com\lookupareacode\1.0.0\");
		}

		[Fact]
		public void Test_ip2location_com_geolocation_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ip2location.com\geolocation\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_ip2location_io_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ip2location.io\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_ip2proxy_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ip2proxy.com\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_ip2whois_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ip2whois.com\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_ipinfodb_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ipinfodb.com\1.0.0\");
		}

		[Fact]
		public void Test_ipqualityscore_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ipqualityscore.com\1.0.0\");
		}

		[Fact]
		public void Test_iptwist_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\iptwist.com\1.0.0\");
		}

		[Fact]
		public void Test_iqualify_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\iqualify.com\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_isendpro_com_1_1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\isendpro.com\1.1.1\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_ix_api_net_2_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ix-api.net\2.1.0\");
		}

		[Fact]
		public void Test_izettle_com_products_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\izettle.com\products\1.0.0\");
		}

		[Fact]
		public void Test_javatpoint_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\javatpoint.com\v1\");
		}

		[Fact]
		public void Test_jellyfin_local_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\jellyfin.local\v1\");
		}

		[Fact]
		public void Test_journy_io_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\journy.io\1.0.0\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_json2video_com_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\json2video.com\2.0.0\");
		}

		[Fact]
		public void Test_jumpseller_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\jumpseller.com\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		//[Fact]// stack overflow, https://editor.swagger.io/ does not like it either. some symatic errors.
		//public void Test_just_eat_co_uk_1_0_0()
		//{
		//	helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\just-eat.co.uk\1.0.0\");
		//}

		[Fact]
		public void Test_keycloak_local_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\keycloak.local\1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_keyserv_solutions_1_4_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\keyserv.solutions\1.4.5\");
		}

		[Fact]
		public void Test_klarna_com_openai_v0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\klarna.com\openai\v0\");
		}

		[Fact]
		public void Test_klarna_com_payments_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\klarna.com\payments\1.0.0\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_kumpeapps_com_5_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\kumpeapps.com\5.0.0\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_lambdatest_com_1_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\lambdatest.com\1.0.1\");
		}

		[Fact]
		public void Test_letmc_com_customer_v2_customer()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\letmc.com\customer\v2-customer\");
		}

		[Fact]
		public void Test_letmc_com_diary_v3_diary()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\letmc.com\diary\v3-diary\");
		}

		[Fact]
		public void Test_letmc_com_maintenance_v3_maintenance()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\letmc.com\maintenance\v3-maintenance\");
		}

		[Fact]
		public void Test_lgtm_com_v1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\lgtm.com\v1.0\");
		}

		[Fact(Skip = "not supporting application/x-www-form-urlencoded")]
		public void Test_libretranslate_local_1_3_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\libretranslate.local\1.3.10\");
		}

		[Fact]
		public void Test_linode_com_4_151_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\linode.com\4.151.1\");
		}

		[Fact(Skip ="default as enum member name, not good for default")]
		public void Test_linqr_app_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\linqr.app\2.0\");
		}

		[Fact(Skip ="3.1")]
		public void Test_listennotes_com_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\listennotes.com\2.0\");
		}

		[Fact]
		public void Test_ljaero_com_dflight_V_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ljaero.com\dflight\V 1.0.0\");
		}

		[Fact]
		public void Test_logoraisr_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\logoraisr.com\v1\");
		}

		[Fact(Skip ="doggy yaml, with double quote in query. Apparently typo during manually editing without validation")]
		public void Test_loket_nl_V2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\loket.nl\V2\");
		}

		[Fact]
		public void Test_lufthansa_com_partner_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\lufthansa.com\partner\1.0\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_lufthansa_com_public_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\lufthansa.com\public\1.0\");
		}

		[Fact(Skip ="Error_Response generated is not actuaully used since it is for non-200 reponses. No refinement to funky reference.")]
		public void Test_magento_com_2_2_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\magento.com\2.2.10\");
		}

		[Fact]
		public void Test_maif_local_otoroshi_1_5_0_dev()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\maif.local\otoroshi\1.5.0-dev\");
		}

		[Fact]
		public void Test_mailboxvalidator_com_checker_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\mailboxvalidator.com\checker\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_mailboxvalidator_com_disposable_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\mailboxvalidator.com\disposable\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_mailboxvalidator_com_validation_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\mailboxvalidator.com\validation\0.1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_mailchimp_com_3_0_55()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\mailchimp.com\3.0.55\");
		}

		[Fact]
		public void Test_mailscript_com_0_4_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\mailscript.com\0.4.0\");
		}

		[Fact]
		public void Test_mastodon_local_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\mastodon.local\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_math_tools_1_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\math.tools\1.5\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_mbus_local_0_3_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\mbus.local\0.3.5\");
		}

		[Fact]
		public void Test_mcw_edu_1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\mcw.edu\1.1\");
		}

		[Fact]
		public void Test_medium_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\medium.com\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_meilisearch_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\meilisearch.com\1.0.0\");
		}

		[Fact]
		public void Test_meraki_com_0_0_0_streaming()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\meraki.com\0.0.0-streaming\");
		}

		[Fact]
		public void Test_meraki_com_1_32_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\meraki.com\1.32.0\");
		}

		[Fact]
		public void Test_mercure_local_0_3_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\mercure.local\0.3.2\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_mermade_org_uk_openapi_converter_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\mermade.org.uk\openapi-converter\1.0.0\");
		}

		[Fact(Skip ="request content type not supported")]
		public void Test_meshery_local_0_4_27()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\meshery.local\0.4.27\");
		}

		[Fact]
		public void Test_metadapi_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\metadapi.com\1.0\");
		}

		[Fact]
		public void Test_meteosource_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\meteosource.com\v1\");
		}

		[Fact]
		public void Test_microcks_local_1_7_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microcks.local\1.7.0\");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_ComputerVision_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microsoft.com\cognitiveservices-ComputerVision\2.0\");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_ComputerVision_2_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microsoft.com\cognitiveservices-ComputerVision\2.1\");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_Ocr_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microsoft.com\cognitiveservices-Ocr\2.0\");
		}

		[Fact]
		public void Test_microsoft_com_cognitiveservices_Ocr_2_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microsoft.com\cognitiveservices-Ocr\2.1\");
		}

		[Fact(Skip = "multipart/form-data not supported")]
		public void Test_microsoft_com_cognitiveservices_Prediction_1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microsoft.com\cognitiveservices-Prediction\1.1\");
		}

		[Fact(Skip = "multipart/form-data not supported")]
		public void Test_microsoft_com_cognitiveservices_Prediction_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microsoft.com\cognitiveservices-Prediction\2.0\");
		}

		[Fact(Skip = "multipart/form-data not supported")]
		public void Test_microsoft_com_cognitiveservices_Prediction_3_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microsoft.com\cognitiveservices-Prediction\3.0\");
		}

		[Fact(Skip = "multipart/form-data not supported")]
		public void Test_microsoft_com_cognitiveservices_Training_1_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microsoft.com\cognitiveservices-Training\1.2\");
		}

		[Fact(Skip = "multipart/form-data not supported")]
		public void Test_microsoft_com_cognitiveservices_Training_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microsoft.com\cognitiveservices-Training\2.0\");
		}

		[Fact(Skip = "multipart/form-data not supported")]
		public void Test_microsoft_com_cognitiveservices_Training_2_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microsoft.com\cognitiveservices-Training\2.1\");
		}

		[Fact(Skip = "multipart/form-data not supported")]
		public void Test_microsoft_com_cognitiveservices_Training_2_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microsoft.com\cognitiveservices-Training\2.2\");
		}

		[Fact(Skip = "multipart/form-data not supported")]
		public void Test_microsoft_com_cognitiveservices_Training_3_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microsoft.com\cognitiveservices-Training\3.0\");
		}

		[Fact(Skip = "multipart/form-data not supported")]
		public void Test_microsoft_com_cognitiveservices_Training_3_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microsoft.com\cognitiveservices-Training\3.1\");
		}

		[Fact(Skip = "multipart/form-data not supported")]
		public void Test_microsoft_com_cognitiveservices_Training_3_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microsoft.com\cognitiveservices-Training\3.2\");
		}

		[Fact(Skip ="It takes forever.")]
		public void Test_microsoft_com_graph_1_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microsoft.com\graph\1.0.1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="too large 57MB")]
		public void Test_microsoft_com_graph_beta_1_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\microsoft.com\graph-beta\1.0.1\");
		}

		[Fact]
		public void Test_mineskin_org_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\mineskin.org\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip = "doggy yaml:     ip:\r\n      in: query\r\n      name: ip address\r\n      required: false\r\n      schema:\r\n        example: 192.168.1.1\r\n        format: ipv4\r\n        type: string")]
		public void Test_mist_com_0_37_7()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\mist.com\0.37.7\");
		}

		[Fact]
		public void Test_modelpubsub_com_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\modelpubsub.com\0.1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_monarchinitiative_org_1_1_14()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\monarchinitiative.org\1.1.14\");
		}

		[Fact]
		public void Test_motaword_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\motaword.com\1.0\");
		}

		[Fact]
		public void Test_mozilla_com_kinto_1_22()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\mozilla.com\kinto\1.22\");
		}

		[Fact]
		public void Test_mtaa_api_herokuapp_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\mtaa-api.herokuapp.com\1.0\");
		}

		[Fact(Skip = "doggy yaml: format: boolean\r\n          type: boolean")]
		public void Test_mux_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\mux.com\v1\");
		}

		[Fact]
		public void Test_namsor_com_2_0_24()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\namsor.com\2.0.24\");
		}

		[Fact]
		public void Test_nasa_gov_apod_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nasa.gov\apod\1.0.0\");
		}

		[Fact]
		public void Test_nasa_gov_asteroids_neows_3_4_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nasa.gov\asteroids neows\3.4.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_nbg_gr_v3_1_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nbg.gr\v3.1.5\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_ndhm_gov_in_ndhm_cm_0_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ndhm.gov.in\ndhm-cm\0.5\");
		}

		[Fact]
		public void Test_ndhm_gov_in_ndhm_gateway_0_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ndhm.gov.in\ndhm-gateway\0.5\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_ndhm_gov_in_ndhm_healthid_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ndhm.gov.in\ndhm-healthid\1.0\");
		}

		[Fact]
		public void Test_ndhm_gov_in_ndhm_hip_0_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ndhm.gov.in\ndhm-hip\0.5\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_ndhm_gov_in_ndhm_hiu_0_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ndhm.gov.in\ndhm-hiu\0.5\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_nebl_io_1_3_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nebl.io\1.3.0\");
		}

		[Fact]
		public void Test_neowsapp_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\neowsapp.com\1.0\");
		}

		[Fact(Skip ="doggy yaml, with double quote through typo")]
		public void Test_netatmo_net_1_1_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\netatmo.net\1.1.5\");
		}

		[Fact(Skip ="Range attribute does not support decimal. While yaml does not support decimal. This yaml uses a bit hack")]//https://github.com/dotnet/runtime/issues/43749
		public void Test_netbox_dev_3_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\netbox.dev\3.4\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_netboxdemo_com_2_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\netboxdemo.com\2.4\");
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_netboxdemo_com_2_8()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\netboxdemo.com\2.8\");
		}

		[Fact]
		public void Test_netlicensing_io_2_x()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\netlicensing.io\2.x\");
		}

		[Fact]
		public void Test_neutrinoapi_net_3_6_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\neutrinoapi.net\3.6.4\");
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_nexmo_com_account_1_0_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\account\1.0.4\");
		}

		[Fact]
		public void Test_nexmo_com_application_1_0_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\application\1.0.2\");
		}

		[Fact]
		public void Test_nexmo_com_application_v2_2_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\application.v2\2.1.4\");
		}

		[Fact]
		public void Test_nexmo_com_audit_1_0_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\audit\1.0.4\");
		}

		[Fact]
		public void Test_nexmo_com_conversation_2_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\conversation\2.0.1\");
		}

		[Fact]
		public void Test_nexmo_com_conversation_v2_1_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\conversation.v2\1.0.1\");
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_nexmo_com_conversion_1_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\conversion\1.0.1\");
		}

		[Fact]
		public void Test_nexmo_com_dispatch_0_3_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\dispatch\0.3.4\");
		}

		[Fact]
		public void Test_nexmo_com_external_accounts_0_1_5()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\external-accounts\0.1.5\");
		}

		[Fact]
		public void Test_nexmo_com_media_1_0_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\media\1.0.2\");
		}

		[Fact]
		public void Test_nexmo_com_messages_olympus_1_4_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\messages-olympus\1.4.0\");
		}

		[Fact(Skip ="doggy yaml, duplicated property names")]
		public void Test_nexmo_com_number_insight_1_2_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\number-insight\1.2.1\");
		}

		[Fact]
		public void Test_nexmo_com_numbers_1_0_20()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\numbers\1.0.20\");
		}

		[Fact]
		public void Test_nexmo_com_pricing_0_0_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\pricing\0.0.3\");
		}

		[Fact]
		public void Test_nexmo_com_redact_1_0_6()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\redact\1.0.6\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_nexmo_com_reports_2_2_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\reports\2.2.2\");
		}

		[Fact]
		public void Test_nexmo_com_sms_1_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\sms\1.2.0\");
		}

		[Fact]
		public void Test_nexmo_com_subaccounts_1_0_8()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\subaccounts\1.0.8\");
		}

		[Fact]
		public void Test_nexmo_com_verify_1_2_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\verify\1.2.4\");
		}

		[Fact]
		public void Test_nexmo_com_voice_1_3_10()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nexmo.com\voice\1.3.10\");
		}

		[Fact]
		public void Test_nfusionsolutions_biz_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nfusionsolutions.biz\1\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_nic_at_domainfinder_1_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nic.at\domainfinder\1.1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_nlpcloud_io_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nlpcloud.io\1.0.0\");
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_noosh_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\noosh.com\1.0\");
		}

		[Fact]
		public void Test_nordigen_com_2_0__v2_()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nordigen.com\2.0 (v2)\");
		}

		[Fact]
		public void Test_notion_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\notion.com\1.0.0\");
		}

		[Fact]
		public void Test_nowpayments_io_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nowpayments.io\1.0.0\");
		}

		[Fact]
		public void Test_nrel_gov_transportation_incentives_laws_0_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nrel.gov\transportation-incentives-laws\0.1.0\");
		}

		[Fact]
		public void Test_nsidc_org_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nsidc.org\1.0.0\");
		}

		[Fact]
		public void Test_ntropy_network_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ntropy.network\1.0.0\");
		}

		[Fact]
		public void Test_nytimes_com_archive_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nytimes.com\archive\1.0.0\");
		}

		[Fact]
		public void Test_nytimes_com_article_search_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nytimes.com\article_search\1.0.0\");
		}

		[Fact]
		public void Test_nytimes_com_books_api_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nytimes.com\books_api\3.0.0\");
		}

		[Fact]
		public void Test_nytimes_com_community_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nytimes.com\community\3.0.0\");
		}

		[Fact]
		public void Test_nytimes_com_geo_api_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nytimes.com\geo_api\1.0.0\");
		}

		[Fact]
		public void Test_nytimes_com_most_popular_api_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nytimes.com\most_popular_api\2.0.0\");
		}

		[Fact]
		public void Test_nytimes_com_movie_reviews_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nytimes.com\movie_reviews\2.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_nytimes_com_semantic_api_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nytimes.com\semantic_api\2.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_nytimes_com_timeswire_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nytimes.com\timeswire\3.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_nytimes_com_times_tags_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nytimes.com\times_tags\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_nytimes_com_top_stories_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\nytimes.com\top_stories\2.0.0\");
		}

		[Fact]
		public void Test_obono_at_1_4_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\obono.at\1.4.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_oceandrivers_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\oceandrivers.com\1.0\");
		}

		[Fact]
		public void Test_okta_local_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\okta.local\1.0.0\");
		}

		[Fact]
		public void Test_onsched_com_consumer_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\onsched.com\consumer\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_onsched_com_setup_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\onsched.com\setup\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_onsched_com_utility_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\onsched.com\utility\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="doggy yaml. default string without quotes")]
		public void Test_openai_com_1_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\openai.com\1.2.0\");
		}

		[Fact]
		public void Test_openapi_generator_tech_6_5_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\openapi-generator.tech\6.5.0\");
		}

		[Fact]
		public void Test_openaq_local_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\openaq.local\2.0.0\");
		}

		[Fact]
		public void Test_openbanking_org_uk_account_info_openapi_3_1_7()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\openbanking.org.uk\account-info-openapi\3.1.7\");
		}

		[Fact]
		public void Test_openbanking_org_uk_confirmation_funds_openapi_3_1_7()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\openbanking.org.uk\confirmation-funds-openapi\3.1.7\");
		}

		[Fact]
		public void Test_openbanking_org_uk_event_notifications_openapi_3_1_7()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\openbanking.org.uk\event-notifications-openapi\3.1.7\");
		}

		[Fact]
		public void Test_openbanking_org_uk_payment_initiation_openapi_3_1_7()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\openbanking.org.uk\payment-initiation-openapi\3.1.7\");
		}

		[Fact]
		public void Test_openbanking_org_uk_v1_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\openbanking.org.uk\v1.3\");
		}

		[Fact(Skip = "doggy yaml, the options in OneOf of paymentInitiation are all strings. Why not string at the first place?")]
		public void Test_openbankingproject_ch_1_3_8_2020_12_14___Swiss_edition_1_3_8_1_CH()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\openbankingproject.ch\1.3.8_2020-12-14 - Swiss edition 1.3.8.1-CH\");
		}

		[Fact]
		public void Test_openchannel_io_market_2_0_24()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\openchannel.io\market\2.0.24\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_opendatanetwork_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\opendatanetwork.com\1.0.0\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_openfigi_com_1_4_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\openfigi.com\1.4.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_openindex_ai_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\openindex.ai\1.0.0\");
		}

		[Fact]
		public void Test_openlinksw_com_osdb_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\openlinksw.com\osdb\1.0.0\");
		}

		[Fact()]
		public void Test_openpolicy_local_0_28_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\openpolicy.local\0.28.0\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_openstates_org_2021_11_12()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\openstates.org\2021.11.12\");
		}

		[Fact(Skip ="doggy yaml. The naming of api function is after the relative path. However, this one, different queries may result the same function names.")] // same path should be the same API.
		public void Test_opensuse_org_obs_2_10_50()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\opensuse.org\obs\2.10.50\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="doggy yaml. query parameter has space")]
		public void Test_opentargets_io_19_02_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\opentargets.io\19.02.1\");
		}

		[Fact()]
		public void Test_openuv_io_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\openuv.io\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_optimade_local_1_1_0_develop()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\optimade.local\1.1.0~develop\");
		}

		[Fact]
		public void Test_orbit_love_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\orbit.love\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_orthanc_server_com_1_12_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\orthanc-server.com\1.12.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="dynamic object")]
		public void Test_osf_io_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\osf.io\2.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_ote_godaddy_com_abuse_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ote-godaddy.com\abuse\1.0.0\");
		}

		[Fact]
		public void Test_ote_godaddy_com_aftermarket_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ote-godaddy.com\aftermarket\1.0.0\");
		}

		[Fact]
		public void Test_ote_godaddy_com_agreements_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ote-godaddy.com\agreements\1.0.0\");
		}

		[Fact]
		public void Test_ote_godaddy_com_certificates_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ote-godaddy.com\certificates\1.0.0\");
		}

		[Fact]
		public void Test_ote_godaddy_com_countries_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ote-godaddy.com\countries\1.0.0\");
		}

		[Fact(Skip = "doggy:          format: integer-positive\r\n          maximum: 65536\r\n          type: integer")] // And minimum: 0 should give you positive
		public void Test_ote_godaddy_com_domains_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ote-godaddy.com\domains\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_ote_godaddy_com_orders_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ote-godaddy.com\orders\1.0.0\");
		}

		[Fact]
		public void Test_ote_godaddy_com_shoppers_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ote-godaddy.com\shoppers\1.0.0\");
		}

		[Fact]
		public void Test_ote_godaddy_com_subscriptions_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ote-godaddy.com\subscriptions\1.0.0\");
		}

		[Fact]
		public void Test_oxforddictionaries_com_1_11_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\oxforddictionaries.com\1.11.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="doggy yaml, object as enum member")]
		public void Test_pandascore_co_2_23_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\pandascore.co\2.23.1\");
		}

		[Fact]
		public void Test_papinet_io_order_status_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\papinet.io\order_status\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_parliament_uk_bills_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\parliament.uk\bills\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_parliament_uk_erskine_may_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\parliament.uk\erskine-may\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_parliament_uk_lordsvotes_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\parliament.uk\lordsvotes\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_parliament_uk_members_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\parliament.uk\members\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_parliament_uk_now_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\parliament.uk\now\v1\");
		}

		[Fact]
		public void Test_parliament_uk_oralquestions_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\parliament.uk\oralquestions\v1\");
		}

		[Fact]
		public void Test_parliament_uk_search_Live()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\parliament.uk\search\Live\");
		}

		[Fact]
		public void Test_parliament_uk_statutoryinstruments_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\parliament.uk\statutoryinstruments\v1\");
		}

		[Fact]
		public void Test_parliament_uk_treaties_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\parliament.uk\treaties\v1\");
		}

		[Fact]
		public void Test_parliament_uk_writtenquestions_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\parliament.uk\writtenquestions\v1\");
		}

		[Fact]
		public void Test_patientview_org_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\patientview.org\1.0\");
		}

		[Fact]
		public void Test_patrowl_local_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\patrowl.local\1.0.0\");
		}

		[Fact]
		public void Test_pay1_de_link_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\pay1.de\link\v1\");
		}

		[Fact]
		public void Test_paylocity_com_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\paylocity.com\2\");
		}

		[Fact]
		public void Test_paypi_dev_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\paypi.dev\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_payrun_io_23_24_2_136()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\payrun.io\23.24.2.136\");
		}

		[Fact]
		public void Test_pdfblocks_com_1_5_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\pdfblocks.com\1.5.0\");
		}

		[Fact]
		public void Test_pdfbroker_io_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\pdfbroker.io\v1\");
		}

		[Fact]
		public void Test_pdfgeneratorapi_com_3_1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\pdfgeneratorapi.com\3.1.1\");
		}

		[Fact]
		public void Test_peoplefinderspro_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\peoplefinderspro.com\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_peoplegeneratorapi_live_v0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\peoplegeneratorapi.live\v0\");
		}

		[Fact]
		public void Test_personio_de_authentication_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\personio.de\authentication\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_personio_de_personnel_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\personio.de\personnel\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_phantauth_net_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\phantauth.net\1.0.0\");
		}

		[Fact]
		public void Test_pinecone_io_20230406_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\pinecone.io\20230406.1\");
		}

		[Fact(Skip ="3.1")]
		public void Test_placekit_co_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\placekit.co\1.0.0\");
		}

		[Fact]
		public void Test_plaid_com_2020_09_14_1_345_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\plaid.com\2020-09-14_1.345.1\");
		}

		[Fact]
		public void Test_pocketsmith_com_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\pocketsmith.com\2.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_portfoliooptimizer_io_1_0_9()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\portfoliooptimizer.io\1.0.9\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_presalytics_io_converter_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\presalytics.io\converter\0.1\");
		}

		[Fact]
		public void Test_presalytics_io_ooxml_0_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\presalytics.io\ooxml\0.1.0\");
		}

		[Fact]
		public void Test_presalytics_io_story_0_3_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\presalytics.io\story\0.3.1\");
		}

		[Fact]
		public void Test_pressassociation_io_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\pressassociation.io\2.0\");
		}

		[Fact()]
		public void Test_probely_com_1_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\probely.com\1.2.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_proxykingdom_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\proxykingdom.com\v1\");
		}

		[Fact]
		public void Test_prss_org_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\prss.org\2.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_ptv_vic_gov_au_v3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ptv.vic.gov.au\v3\");
		}

		[Fact]
		public void Test_qualtrics_com_0_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\qualtrics.com\0.2\");
		}

		[Fact]
		public void Test_quickchart_io_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\quickchart.io\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_quotes_rest_5_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\quotes.rest\5.1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_randomlovecraft_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\randomlovecraft.com\1.0\");
		}

		[Fact]
		public void Test_randommer_io_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\randommer.io\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_rapidapi_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\rapidapi.com\1.0.0\");
		}

		[Fact]
		public void Test_rapidapi_com_dynamicdocs_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\rapidapi.com\dynamicdocs\1.0\");
		}

		[Fact]
		public void Test_rapidapi_com_ecowetter_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\rapidapi.com\ecowetter\1.0.0\");
		}

		[Fact]
		public void Test_rapidapi_com_football_prediction_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\rapidapi.com\football-prediction\2\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip = "doggy yaml with url: data/insights/{insight_id:}")]
		public void Test_rapidapi_com_idealspot_geodata_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\rapidapi.com\idealspot-geodata\1.0\");
		}

		[Fact]
		public void Test_rapidapi_com_spellcheckpro_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\rapidapi.com\spellcheckpro\1.0.0\");
		}

		[Fact]
		public void Test_rawg_io_v1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\rawg.io\v1.0\");
		}

		[Fact]
		public void Test_readme_io_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\readme.io\2.0.0\");
		}

		[Fact(Skip ="doggy yaml: duplicated enum members")]
		public void Test_rebilly_com_2_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\rebilly.com\2.1\");
		}

		[Fact]
		public void Test_redeal_io_analytics_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\redeal.io\analytics\1.0.0\");
		}

		[Fact]
		public void Test_redhat_com_catalog_inventory_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\redhat.com\catalog_inventory\1.0.0\");
		}

		[Fact]
		public void Test_redhat_local_patchman_engine_v1_15_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\redhat.local\patchman-engine\v1.15.3\");
		}

		[Fact]
		public void Test_reloadly_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\reloadly.com\1.0.0\");
		}

		[Fact]
		public void Test_remove_bg_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\remove.bg\1.0.0\");
		}

		[Fact(Skip ="3.1")]
		public void Test_rentcast_io_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\rentcast.io\1.0\");
		}

		[Fact]
		public void Test_restful4up_local_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\restful4up.local\1.0.0\");
		}

		[Fact]
		public void Test_rev_ai_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\rev.ai\v1\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_reverb_com_3_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\reverb.com\3.0\");
		}

		[Fact]
		public void Test_ritekit_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ritekit.com\1.0.0\");
		}

		[Fact]
		public void Test_rubrikinc_github_io_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\rubrikinc.github.io\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_rudder_example_local_17()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\rudder.example.local\17\");
		}

		[Fact]
		public void Test_rumble_run_2_15_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\rumble.run\2.15.0\");
		}

		[Fact]
		public void Test_sakari_io_1_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sakari.io\1.0.1\");
		}

		[Fact]
		public void Test_salesforce_local_einstein_2_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\salesforce.local\einstein\2.0.1\");
		}

		[Fact(Skip = "non json content")]
		public void Test_salesloft_com_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\salesloft.com\v2\");
		}

		[Fact]
		public void Test_scideas_net_perfectpdf_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\scideas.net\perfectpdf\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip = "doggy yaml, apparently with a typo double quote in property name")]
		public void Test_scideas_net_regression_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\scideas.net\regression\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_seldon_local_engine_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\seldon.local\engine\0.1\");
		}

		[Fact]
		public void Test_seldon_local_wrapper_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\seldon.local\wrapper\0.1\");
		}

		[Fact(Skip ="dynamic object")]
		public void Test_sendgrid_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sendgrid.com\1.0.0\");
		}

		[Fact()]
		public void Test_shipengine_com_1_1_202304191404()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\shipengine.com\1.1.202304191404\");
		}

		[Fact]
		public void Test_shipstation_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\shipstation.com\1.0.0\");
		}

		[Fact]
		public void Test_shop_pro_jp_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\shop-pro.jp\1.0.0\");
		}

		[Fact]
		public void Test_shop_app_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\shop.app\v1\");
		}

		[Fact]
		public void Test_shorten_rest_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\shorten.rest\1.0.0\");
		}

		[Fact]
		public void Test_shotstack_io_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\shotstack.io\v1\");
		}

		[Fact]
		public void Test_shutterstock_com_1_1_32()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\shutterstock.com\1.1.32\");
		}

		[Fact]
		public void Test_signl4_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\signl4.com\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_simplivpn_net_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\simplivpn.net\1.0\");
		}

		[Fact]
		public void Test_sinao_app_1_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sinao.app\1.1.0\");
		}

		[Fact(Skip = "doggy yaml: defs_ok_false:\r\n      enum:\r\n        - false")]
		public void Test_slack_com_1_7_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\slack.com\1.7.0\");
		}

		[Fact]
		public void Test_slack_com_openai_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\slack.com\openai\v1\");
		}

		[Fact]
		public void Test_slmonitor_com_2_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\slmonitor.com\2.1\");
		}

		[Fact]
		public void Test_smart_me_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\smart-me.com\v1\");
		}

		[Fact]
		public void Test_sms77_io_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sms77.io\1.0.0\");
		}

		[Fact()]
		public void Test_snyk_io_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\snyk.io\1.0.0\");
		}

		[Fact]
		public void Test_soundcloud_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\soundcloud.com\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_spacetraders_io_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\spacetraders.io\2.0.0\");
		}

		[Fact]
		public void Test_spinitron_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\spinitron.com\1.0.0\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_spoonacular_com_1_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\spoonacular.com\1.1\");
		}

		[Fact]
		public void Test_sportsdata_io_cbb_v3_scores_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\cbb-v3-scores\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_cbb_v3_stats_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\cbb-v3-stats\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_cfb_v3_scores_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\cfb-v3-scores\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_csgo_v3_scores_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\csgo-v3-scores\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_csgo_v3_stats_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\csgo-v3-stats\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_golf_v2_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\golf-v2\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_lol_v3_projections_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\lol-v3-projections\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_lol_v3_scores_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\lol-v3-scores\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_lol_v3_stats_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\lol-v3-stats\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_mlb_v3_play_by_play_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\mlb-v3-play-by-play\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_mlb_v3_projections_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\mlb-v3-projections\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_mlb_v3_rotoballer_articles_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\mlb-v3-rotoballer-articles\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_mlb_v3_rotoballer_premium_news_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\mlb-v3-rotoballer-premium-news\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_mlb_v3_scores_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\mlb-v3-scores\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_mlb_v3_stats_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\mlb-v3-stats\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nascar_v2_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nascar-v2\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nba_v3_play_by_play_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nba-v3-play-by-play\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nba_v3_projections_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nba-v3-projections\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nba_v3_rotoballer_articles_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nba-v3-rotoballer-articles\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nba_v3_rotoballer_premium_news_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nba-v3-rotoballer-premium-news\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nba_v3_scores_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nba-v3-scores\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nba_v3_stats_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nba-v3-stats\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nfl_v3_play_by_play_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nfl-v3-play-by-play\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nfl_v3_projections_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nfl-v3-projections\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nfl_v3_rotoballer_articles_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nfl-v3-rotoballer-articles\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nfl_v3_rotoballer_premium_news_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nfl-v3-rotoballer-premium-news\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nfl_v3_scores_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nfl-v3-scores\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nfl_v3_stats_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nfl-v3-stats\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nhl_v3_play_by_play_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nhl-v3-play-by-play\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nhl_v3_projections_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nhl-v3-projections\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nhl_v3_scores_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nhl-v3-scores\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_nhl_v3_stats_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\nhl-v3-stats\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_soccer_v3_projections_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\soccer-v3-projections\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_soccer_v3_scores_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\soccer-v3-scores\1.0\");
		}

		[Fact]
		public void Test_sportsdata_io_soccer_v3_stats_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\sportsdata.io\soccer-v3-stats\1.0\");
		}

		[Fact]
		public void Test_spotify_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\spotify.com\1.0.0\");
		}

		[Fact]
		public void Test_spotify_com_sonallux_2023_2_27()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\spotify.com\sonallux\2023.2.27\");
		}

		[Fact]
		public void Test_squareup_com_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\squareup.com\2.0\");
		}

		[Fact]
		public void Test_stackexchange_com_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\stackexchange.com\2.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_staging_ecotaco_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\staging-ecotaco.com\1.0.0\");
		}

		[Fact]
		public void Test_statsocial_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\statsocial.com\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_stellastra_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\stellastra.com\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_stoplight_io_api_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\stoplight.io\api-v1\");
		}

		[Fact]
		public void Test_storecove_com_2_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\storecove.com\2.0.1\");
		}

		[Fact(Skip ="doggy yaml. Maximum is for value range. For array, maxItems and minItems are there, which can be mapped to MaxLengthAttribute in C#")]
		public void Test_stream_io_api_com_v80_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\stream-io-api.com\v80.2.0\");
		}

		[Fact(Skip ="doggy yaml with enum member boolean")]
		public void Test_stripe_com_2022_11_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\stripe.com\2022-11-15\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_superset_apache_local_superset_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\superset.apache.local\superset\v1\");
		}

		[Fact]
		public void Test_surevoip_co_uk_9dcb0dc8()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\surevoip.co.uk\9dcb0dc8\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_svix_com_1_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\svix.com\1.4\");
		}

		[Fact]
		public void Test_symanto_net_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\symanto.net\1.0\");
		}

		[Fact]
		public void Test_tafqit_herokuapp_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\tafqit.herokuapp.com\v1\");
		}

		[Fact]
		public void Test_taxrates_io_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\taxrates.io\1.0.0\");
		}

		[Fact]
		public void Test_tcgdex_net_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\tcgdex.net\2.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="doggy yaml. using emoji as enum members.")] //technically I can support this, however, no fun to support dirty practices.
		public void Test_telegram_org_5_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\telegram.org\5.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_telematicssdk_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\telematicssdk.com\1.0.0\");
		}

		[Fact(Skip = "doggy yaml: enum:\r\n            - '\"Latency\"'")] //overall poor design, members and example mismatched.
		public void Test_telnyx_com_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\telnyx.com\2.0.0\");
		}

		[Fact]
		public void Test_telstra_com_3_x()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\telstra.com\3.x\");
		}

		[Fact]
		public void Test_tfl_gov_uk_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\tfl.gov.uk\v1\");
		}

		[Fact]
		public void Test_thebluealliance_com_3_8_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\thebluealliance.com\3.8.2\");
		}

		[Fact]
		public void Test_theracingapi_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\theracingapi.com\1.0.0\");
		}

		[Fact]
		public void Test_threatjammer_com_1_2_27()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\threatjammer.com\1.2.27\");
		}

		[Fact]
		public void Test_ticketmaster_com_discovery_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ticketmaster.com\discovery\v2\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_ticketmaster_com_publish_v2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\ticketmaster.com\publish\v2\");
		}

		[Fact]
		public void Test_tisane_ai_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\tisane.ai\1.0.0\");
		}

		[Fact]
		public void Test_tl_api_azurewebsites_net_2020_08_10_6_22()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\tl-api.azurewebsites.net\2020-08-10_6-22\");
		}

		[Fact]
		public void Test_tokenjay_app_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\tokenjay.app\1.0.0\");
		}

		[Fact]
		public void Test_tokenmetrics_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\tokenmetrics.com\1.0.0\");
		}

		[Fact]
		public void Test_tomtom_com_maps_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\tomtom.com\maps\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_tomtom_com_routing_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\tomtom.com\routing\1.0.0\");
		}

		[Fact]
		public void Test_tomtom_com_search_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\tomtom.com\search\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_traccar_org_5_6()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\traccar.org\5.6\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_trakt_tv_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\trakt.tv\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_trapstreet_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\trapstreet.com\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_trashnothing_com_1_3()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\trashnothing.com\1.3\");
		}

		[Fact(Skip = "doggy yaml: operationId: deleteTokensByToken")] //the intension is probably to allow either path or query, however, this makes codes generaged not usable cause of duplicated idnetifiers.
		public void Test_trello_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\trello.com\1.0\");
		}

		[Fact]
		public void Test_truanon_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\truanon.com\1.0.0\");
		}

		[Fact]
		public void Test_truesight_local_11_1_00()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\truesight.local\11.1.00\");
		}

		[Fact]
		public void Test_truora_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\truora.com\1.0.0\");
		}

		[Fact]
		public void Test_tsapi_net_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\tsapi.net\v1\");
		}

		[Fact]
		public void Test_tvmaze_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\tvmaze.com\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="doggy yaml. typo? in parameter names")]
		public void Test_twilio_com_api_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\api\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_accounts_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_accounts_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_autopilot_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_autopilot_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_bulkexports_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_bulkexports_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_chat_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_chat_v1\1.52.0\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_twilio_com_twilio_chat_v2_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_chat_v2\1.52.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_twilio_com_twilio_chat_v3_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_chat_v3\1.52.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_twilio_com_twilio_content_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_content_v1\1.52.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_twilio_com_twilio_conversations_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_conversations_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_events_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_events_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_fax_v1_1_29_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_fax_v1\1.29.1\");
		}

		[Fact]
		public void Test_twilio_com_twilio_flex_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_flex_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_flex_v2_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_flex_v2\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_frontline_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_frontline_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_insights_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_insights_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_intelligence_v2_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_intelligence_v2\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_ip_messaging_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_ip_messaging_v1\1.52.0\");
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_twilio_com_twilio_ip_messaging_v2_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_ip_messaging_v2\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_lookups_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_lookups_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_lookups_v2_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_lookups_v2\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_media_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_media_v1\1.52.0\");
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_twilio_com_twilio_messaging_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_messaging_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_microvisor_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_microvisor_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_monitor_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_monitor_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_notify_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_notify_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_numbers_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_numbers_v1\1.52.0\");
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_twilio_com_twilio_numbers_v2_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_numbers_v2\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_oauth_v1_1_51_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_oauth_v1\1.51.1\");
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_twilio_com_twilio_preview_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_preview\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_pricing_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_pricing_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_pricing_v2_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_pricing_v2\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_proxy_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_proxy_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_routes_v2_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_routes_v2\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_serverless_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_serverless_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_studio_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_studio_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_studio_v2_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_studio_v2\1.52.0\");
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_twilio_com_twilio_supersim_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_supersim_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_sync_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_sync_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_taskrouter_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_taskrouter_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_trunking_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_trunking_v1\1.52.0\");
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_twilio_com_twilio_trusthub_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_trusthub_v1\1.52.0\");
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_twilio_com_twilio_verify_v2_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_verify_v2\1.52.0\");
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_twilio_com_twilio_video_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_video_v1\1.52.0\");
		}

		[Fact]
		public void Test_twilio_com_twilio_voice_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_voice_v1\1.52.0\");
		}

		[Fact(Skip = "doggy yaml")]
		public void Test_twilio_com_twilio_wireless_v1_1_52_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twilio.com\twilio_wireless_v1\1.52.0\");
		}

		[Fact]
		public void Test_twinehealth_com_v7_78_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twinehealth.com\v7.78.1\");
		}

		[Fact]
		public void Test_twitter_com_current_2_62()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\twitter.com\current\2.62\");
		}

		[Fact]
		public void Test_unicourt_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\unicourt.com\1.0.0\");
		}

		[Fact]
		public void Test_up_com_au_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\up.com.au\v1\");
		}

		[Fact(Skip ="3.1")]
		public void Test_urlbox_io_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\urlbox.io\v1\");
		}

		[Fact(Skip ="doggy yaml: mojo as enum members")]
		public void Test_useapi_net_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\useapi.net\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_va_gov_benefits_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\va.gov\benefits\1.0.0\");
		}

		[Fact]
		public void Test_va_gov_confirmation_0_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\va.gov\confirmation\0.0.1\");
		}

		[Fact]
		public void Test_va_gov_facilities_0_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\va.gov\facilities\0.0.1\");
		}

		[Fact]
		public void Test_va_gov_forms_0_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\va.gov\forms\0.0.0\");
		}

		[Fact]
		public void Test_vectara_io_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vectara.io\1.0.0\");
		}

		[Fact]
		public void Test_velopayments_com_2_35_57()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\velopayments.com\2.35.57\");
		}

		[Fact(Skip = "3.1")]
		public void Test_vercel_com_0_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vercel.com\0.0.1\");
		}

		[Fact]
		public void Test_versioneye_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\versioneye.com\v1\");
		}

		[Fact]
		public void Test_viator_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\viator.com\1.0.0\");
		}

		[Fact]
		public void Test_vimeo_com_3_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vimeo.com\3.4\");
		}

		[Fact]
		public void Test_visma_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\visma.com\1.0\");
		}

		[Fact]
		public void Test_visma_net_1_0_14_784()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\visma.net\1.0.14.784\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_visma_net_9_66_02_1023()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\visma.net\9.66.02.1023\");
		}

		[Fact]
		public void Test_visualcrossing_com_weather_4_6()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\visualcrossing.com\weather\4.6\");
		}

		[Fact]
		public void Test_visualstudio_com_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\visualstudio.com\v1\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_vmware_local_vrni_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vmware.local\vrni\1.0.0\");
		}

		[Fact]
		public void Test_vocadb_net_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vocadb.net\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_vonage_com_account_1_11_8()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vonage.com\account\1.11.8\");
		}

		[Fact]
		public void Test_vonage_com_extension_1_11_8()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vonage.com\extension\1.11.8\");
		}

		[Fact]
		public void Test_vonage_com_reports_1_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vonage.com\reports\1.0.1\");
		}

		[Fact]
		public void Test_vonage_com_user_1_11_8()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vonage.com\user\1.11.8\");
		}

		[Fact]
		public void Test_vonage_com_vgis_1_0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vonage.com\vgis\1.0.1\");
		}

		[Fact(Skip ="doggy yaml, duplicated paths")]
		public void Test_vtex_local_Catalog_API_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Catalog-API\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_vtex_local_Catalog_API_Seller_Portal_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Catalog-API-Seller-Portal\1.0.0\");
		}

		[Fact]
		public void Test_vtex_local_Checkout_API_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Checkout-API\1.0\");
		}

		[Fact(Skip = "doggy yaml: properties:\r\n                value:\r\n                  default: \"500.0\"\r\n                  format: number\r\n                  type: integer")]
		public void Test_vtex_local_Customer_Credit_API_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Customer-Credit-API\1.0\");
		}

		[Fact]
		public void Test_vtex_local_Giftcard_API_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Giftcard-API\1.0\");
		}

		[Fact]
		public void Test_vtex_local_GiftCard_Hub_API_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\GiftCard-Hub-API\1.0\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_vtex_local_Headless_CMS_API_0_31_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Headless-CMS-API\0.31.2\");
		}

		[Fact]
		public void Test_vtex_local_Intelligent_Search_API_0_1_12()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Intelligent-Search-API\0.1.12\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_vtex_local_License_Manager_API_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\License-Manager-API\1.0\");
		}

		[Fact]
		public void Test_vtex_local_Logistics_API_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Logistics-API\1.0\");
		}

		[Fact]
		public void Test_vtex_local_Marketplace_APIs_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Marketplace-APIs\1.0\");
		}

		[Fact(Skip = "doggy yaml: Length:\r\n          default: 10\r\n          description: Length of the SKU.\r\n          format: decimal\r\n          type: integer")]
		public void Test_vtex_local_Marketplace_APIs__1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Marketplace-APIs-\1.0\");
		}

		[Fact]
		public void Test_vtex_local_Marketplace_Protocol_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Marketplace-Protocol\1.0\");
		}

		[Fact]
		public void Test_vtex_local_Master_Data_API__1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Master-Data-API-\1.0\");
		}

		[Fact]
		public void Test_vtex_local_MasterData_API__1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\MasterData-API-\1.0\");
		}

		[Fact]
		public void Test_vtex_local_Message_Center_API_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Message-Center-API\1.0.0\");
		}

		[Fact(Skip ="doggy yaml with dirty default value and dirty design")]
		public void Test_vtex_local_Orders_API_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Orders-API\1.0\");
		}

		[Fact]
		public void Test_vtex_local_Orders_API__PII_version__1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Orders-API-(PII-version)\1.0\");
		}

		[Fact]
		public void Test_vtex_local_Payments_Gateway_API_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Payments-Gateway-API\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_vtex_local_Policies_System_API_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Policies-System-API\1.0.0\");
		}

		[Fact(Skip ="doggy yaml")]
		public void Test_vtex_local_Price_Simulations_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Price-Simulations\1.0\");
		}

		[Fact]
		public void Test_vtex_local_Pricing_API_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Pricing-API\1.0\");
		}

		[Fact]
		public void Test_vtex_local_Pricing_Hub_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Pricing-Hub\1.0\");
		}

		[Fact]
		public void Test_vtex_local_Profile_System_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Profile-System\1.0\");
		}

		[Fact(Skip = "doggy yaml, dirty api function design, Updates information of a specific coupon and Creates a single new coupon use the same http url signature. the first one should have been Put.")]
		public void Test_vtex_local_Promotions__1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Promotions-\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_vtex_local_Recurrence__v1__1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Recurrence-(v1-\1.0\");
		}

		[Fact]
		public void Test_vtex_local_Reviews_and_Ratings_API_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Reviews-and-Ratings-API\1.0\");
		}

		[Fact]
		public void Test_vtex_local_Search_API_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Search-API\1.0\");
		}

		[Fact]
		public void Test_vtex_local_Session_Manager_API_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Session-Manager-API\1.0\");
		}

		[Fact]
		public void Test_vtex_local_SKU_Bindings_API_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\SKU-Bindings-API\1.0\");
		}

		[Fact]
		public void Test_vtex_local_Subscriptions_API__v2__1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Subscriptions-API-(v2)\1.0\");
		}

		[Fact(Skip ="doggy yaml.")]
		public void Test_vtex_local_Subscriptions_API__v3__1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\Subscriptions-API-(v3)\1.0\");
		}

		[Fact]
		public void Test_vtex_local_VTEX_Do_API_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\VTEX-Do-API\1.0\");
		}

		[Fact]
		public void Test_vtex_local_VTEX_TEMPLATE_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\vtex.local\VTEX_TEMPLATE\1.0.0\");
		}

		[Fact]
		public void Test_walletobjects_googleapis_com_pay_passes_v1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\walletobjects.googleapis.com\pay-passes\v1\");
		}

		[Fact]
		public void Test_walmart_com_inventory_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\walmart.com\inventory\1.0.0\");
		}

		[Fact]
		public void Test_walmart_com_price_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\walmart.com\price\1.0.0\");
		}

		[Fact(Skip ="deal with query and path names the same later.")]
		public void Test_warwick_ac_uk_enterobase_v2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\warwick.ac.uk\enterobase\v2.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_wealthreader_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\wealthreader.com\1.0.0\");
		}

		[Fact]
		public void Test_webflow_com_2023_03_23T154040Z()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\webflow.com\2023-03-23T154040Z\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="3.1")]
		public void Test_webscraping_ai_3_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\webscraping.ai\3.0.0\");
		}

		[Fact]
		public void Test_wellknown_ai_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\wellknown.ai\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_whapi_com_bets_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\whapi.com\bets\2.0.0\");
		}

		[Fact]
		public void Test_whatsapp_local_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\whatsapp.local\1.0\");
		}

		[Fact]
		public void Test_wheretocredit_com_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\wheretocredit.com\1.0\");
		}

		[Fact]
		public void Test_wikipathways_org_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\wikipathways.org\1.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_windows_net_batch_BatchService_2015_12_01_2_2()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\windows.net\batch-BatchService\2015-12-01.2.2\");
		}

		[Fact]
		public void Test_windows_net_batch_BatchService_2016_02_01_3_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\windows.net\batch-BatchService\2016-02-01.3.0\");
		}

		[Fact(Skip ="boolean as enum")]
		public void Test_windows_net_graphrbac_1_6()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\windows.net\graphrbac\1.6\");
		}

		[Fact]
		public void Test_wiremock_org_admin_2_35_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\wiremock.org\admin\2.35.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="3.1")]
		public void Test_wolframalpha_com_v0_1()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\wolframalpha.com\v0.1\");
		}

		[Fact]
		public void Test_wordnik_com_4_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\wordnik.com\4.0\");
		}

		[Fact]
		public void Test_worldtimeapi_org_20210108()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\worldtimeapi.org\20210108\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_wso2apistore_com_transform_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\wso2apistore.com\transform\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact]
		public void Test_wyjyt_geo_calculate_azurewebsites_net_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\wyjyt-geo-calculate.azurewebsites.net\1.0.0\");
		}

		[Fact]
		public void Test_xero_com_xero_identity_2_9_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\xero.com\xero-identity\2.9.4\");
		}

		[Fact]
		public void Test_xero_com_xero_payroll_au_2_9_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\xero.com\xero-payroll-au\2.9.4\");
		}

		[Fact(Skip = "doggy yaml: GetPurchaseOrder StrangeUnicode AttachmentByFileName")]
		public void Test_xero_com_xero_accounting_2_9_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\xero.com\xero_accounting\2.9.4\");
		}

		[Fact]
		public void Test_xero_com_xero_assets_2_9_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\xero.com\xero_assets\2.9.4\");
		}

		[Fact]
		public void Test_xero_com_xero_bankfeeds_2_9_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\xero.com\xero_bankfeeds\2.9.4\");
		}

		[Fact]
		public void Test_xero_com_xero_files_2_9_4()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\xero.com\xero_files\2.9.4\");
		}

		[Fact]
		public void Test_xkcd_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\xkcd.com\1.0.0\", CodeGenSettings.WithActionNameStrategy(ActionNameStrategy.PathMethodQueryParameters));
		}

		[Fact(Skip ="doggy yaml. Unintentionally intended not for code gen")]
		public void Test_xtrf_eu_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\xtrf.eu\2.0\");
		}

		[Fact]
		public void Test_yodlee_com_1_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\yodlee.com\1.1.0\");
		}

		[Fact]
		public void Test_youneedabudget_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\youneedabudget.com\1.0.0\");
		}

		[Fact]
		public void Test_zapier_com_nla_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\zapier.com\nla\1.0.0\");
		}

		[Fact(Skip = "doggy yaml:             created-by:\r\n              type: string\r\n            created_by:\r\n              type: string")]
		public void Test_zeit_co_v2019_01_07()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\zeit.co\v2019-01-07\");
		}

		[Fact]
		public void Test_zeno_fm_0_6_99cfdac()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\zeno.fm\0.6-99cfdac\");
		}

		[Fact]
		public void Test_zenoti_com_1_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\zenoti.com\1.0.0\");
		}

		[Fact(Skip = "doggy yaml. Maximum is for value range. For array, maxItems and minItems are there, which can be mapped to MaxLengthAttribute in C#")]
		public void Test_zoom_us_2_0_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\zoom.us\2.0.0\");
		}

		[Fact(Skip ="doggy yaml, bool as enum")]
		public void Test_zuora_com_2021_08_20()
		{
			helper.GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory20240114\APIs\zuora.com\2021-08-20\");
		}

	}
}