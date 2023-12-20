using Fonlow.OpenApiClientGen.ClientTypes;

using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	public class ODAzureTests
	{
		readonly CSharpTestHelperForOpenApiDir helper;
		public ODAzureTests(ITestOutputHelper output)
		{
			helper = new CSharpTestHelperForOpenApiDir(output, "swagger.yaml");
		}

		void GenerateFromOpenApiAndBuild(string filePath, Settings mySettings = null)
		{
			Settings settings = mySettings ?? CodeGenSettings.Default;
			helper.GenerateFromOpenApiAndBuild(filePath, settings);
		}

		[Fact]
		public void Test_Addons()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\addons-Addons\2017-05-15");
		}

		[Fact]
		public void Test_advisor()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\advisor\2020-01-01");
		}

		[Fact]
		public void Test_alertsmanagementAlertsManagement()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\alertsmanagement-AlertsManagement\2019-03-01");
		}

		[Fact]
		public void Test_alertsmanagementSmartDetectorAlertRulesApi()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\alertsmanagement-SmartDetectorAlertRulesApi\2019-06-01");
		}

		[Fact]
		public void Test_analysisservices()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\analysisservices\2017-08-01");
		}

		[Fact]
		public void Test_apimanagement()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\apimanagement\2019-01-01", new Settings() { UseSystemTextJson = true });
		}

		[Fact]
		public void Test_appconfiguration()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\appconfiguration\2019-10-01");
		}

		[Fact]
		public void Test_applicationinsightscomponentAnnotations_API()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\applicationinsights-componentAnnotations_API\2015-05-01");
		}

		[Fact]
		public void Test_applicationinsightscomponentFeaturesAndPricing_API()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\applicationinsights-componentFeaturesAndPricing_API\2017-10-01");
		}

		[Fact]
		public void Test_applicationinsightscomponentProactiveDetection_API()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\applicationinsights-componentProactiveDetection_API\2015-05-01");
		}

		//[Fact]
		//public void Test_applicationinsightscomponents_API() it seems invalid. Nswag throws exceptions.
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\applicationinsights-components_API\2015-05-01");
		//}

		[Fact]
		public void Test_appplatform()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\appplatform\2019-05-01-preview");
		}

		[Fact]
		public void Test_attestation()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\attestation\2018-09-01-preview");
		}

		[Fact]
		public void Test_authorization()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\authorization\2015-07-01");
		}

		[Fact]
		public void Test_authorizationauthorizationProviderOperationsCalls()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\authorization-authorization-ProviderOperationsCalls\2018-01-01-preview");
		}

		[Fact]
		public void Test_authorizationauthorizationRoleAssignmentsCalls()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\authorization-authorization-RoleAssignmentsCalls\2018-09-01-preview");
		}

		[Fact]
		public void Test_authorizationauthorizationRoleDefinitionsCalls()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\authorization-authorization-RoleDefinitionsCalls\2018-01-01-preview");
		}

		[Fact]
		public void Test_automationaccount()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-account\2015-10-31");
		}

		[Fact]
		public void Test_automationcertificate()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-certificate\2015-10-31");
		}

		[Fact]
		public void Test_automationconnection()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-connection\2015-10-31");
		}

		[Fact]
		public void Test_automationconnectionType()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-connectionType\2015-10-31");
		}

		[Fact]
		public void Test_automationdefinitions()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-definitions\2018-06-10");
		}

		[Fact]
		public void Test_automationdscCompilationJob()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-dscCompilationJob\2018-01-15");
		}

		[Fact]
		public void Test_automationdscNodeCounts()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-dscNodeCounts\2018-01-15");
		}

		[Fact]
		public void Test_azure_com_automation_hybridRunbookWorkerGroup_2015_10_31()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-hybridRunbookWorkerGroup\2015-10-31");
		}

		[Fact]
		public void Test_azure_com_automation_job_2017_05_15_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-job\2017-05-15-preview");
		}

		[Fact]
		public void Test_azure_com_automation_jobSchedule_2015_10_31()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-jobSchedule\2015-10-31");
		}

		[Fact]
		public void Test_azure_com_automation_linkedWorkspace_2015_10_31()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-linkedWorkspace\2015-10-31");
		}

		[Fact]
		public void Test_azure_com_automation_module_2015_10_31()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-module\2015-10-31");
		}

		[Fact]
		public void Test_azure_com_automation_python2package_2018_06_30()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-python2package\2018-06-30");
		}

		[Fact]
		public void Test_azure_com_automation_runbook_2018_06_30()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-runbook\2018-06-30");
		}

		[Fact]
		public void Test_azure_com_automation_schedule_2015_10_31()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-schedule\2015-10-31");
		}

		[Fact]
		public void Test_azure_com_automation_softwareUpdateConfiguration_2017_05_15_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-softwareUpdateConfiguration\2017-05-15-preview");
		}

		[Fact]
		public void Test_azure_com_automation_softwareUpdateConfigurationMachineRun_2017_05_15_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-softwareUpdateConfigurationMachineRun\2017-05-15-preview");
		}

		[Fact]
		public void Test_azure_com_automation_softwareUpdateConfigurationRun_2017_05_15_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-softwareUpdateConfigurationRun\2017-05-15-preview");
		}

		[Fact]
		public void Test_azure_com_automation_sourceControl_2017_05_15_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-sourceControl\2017-05-15-preview");
		}

		[Fact]
		public void Test_azure_com_automation_sourceControlSyncJob_2017_05_15_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-sourceControlSyncJob\2017-05-15-preview");
		}

		[Fact]
		public void Test_azure_com_automation_sourceControlSyncJobStreams_2017_05_15_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-sourceControlSyncJobStreams\2017-05-15-preview");
		}

		[Fact]
		public void Test_azure_com_automation_variable_2015_10_31()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-variable\2015-10-31");
		}

		[Fact]
		public void Test_azure_com_automation_watcher_2015_10_31()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-watcher\2015-10-31");
		}

		[Fact]
		public void Test_azure_com_automation_webhook_2015_10_31()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\automation-webhook\2015-10-31");
		}

		//[Fact]
		//public void Test_azure_com_azsadmin_AcquiredPlan_2015_11_01() invalid using parameters rather than definitions for components.
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-AcquiredPlan\2015-11-01");
		//}

		[Fact]
		public void Test_azure_com_azsadmin_acquisitions_2019_08_08_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-acquisitions\2019-08-08-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_ActionPlan_2019_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-ActionPlan\2019-01-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_ActionPlanOperation_2019_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-ActionPlanOperation\2019-01-01");
		}


		[Fact]
		public void Test_azure_com_azsadmin_ApplicationOperationResults_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-ApplicationOperationResults\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Backup_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Backup\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Backup_2018_09_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Backup\2018-09-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_blobServices_2015_12_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-blobServices\2015-12-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Commerce_2015_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Commerce\2015-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_CommerceAdmin_2015_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-CommerceAdmin\2015-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Compute_2015_12_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Compute\2015-12-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_ComputeOperationResults_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-ComputeOperationResults\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_DelegatedProvider_2015_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-DelegatedProvider\2015-11-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_DelegatedProviderOffer_2015_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-DelegatedProviderOffer\2015-11-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Deployment_2019_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Deployment\2019-01-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_DiskMigrationJobs_2018_07_30_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-DiskMigrationJobs\2018-07-30-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Disks_2018_07_30_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Disks\2018-07-30-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Drive_2019_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Drive\2019-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_EdgeGateway_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-EdgeGateway\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_EdgeGatewayPool_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-EdgeGatewayPool\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Fabric_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Fabric\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_FabricLocation_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-FabricLocation\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_farms_2015_12_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-farms\2015-12-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_FileContainer_2019_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-FileContainer\2019-01-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_FileShare_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-FileShare\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Gallery_2015_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Gallery\2015-04-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_InfraRole_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-InfraRole\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_InfraRoleInstance_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-InfraRoleInstance\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_InfrastructureInsights_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-InfrastructureInsights\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_KeyVault_2017_02_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-KeyVault\2017-02-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_LoadBalancers_2015_06_15()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-LoadBalancers\2015-06-15");
		}

		[Fact]
		public void Test_azure_com_azsadmin_LogicalNetwork_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-LogicalNetwork\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_LogicalSubnet_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-LogicalSubnet\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_MacAddressPool_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-MacAddressPool\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Manifest_2015_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Manifest\2015-11-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Network_2015_06_15()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Network\2015-06-15");
		}

		[Fact]
		public void Test_azure_com_azsadmin_NetworkOperationResults_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-NetworkOperationResults\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Offer_2015_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Offer\2015-11-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Operations_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Operations\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Product_2016_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Product\2016-01-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_ProductDeployment_2019_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-ProductDeployment\2019-01-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_ProductPackage_2019_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-ProductPackage\2019-01-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_ProductSecret_2019_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-ProductSecret\2019-01-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_PublicIpAddresses_2015_06_15()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-PublicIpAddresses\2015-06-15");
		}

		[Fact]
		public void Test_azure_com_azsadmin_queueServices_2015_12_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-queueServices\2015-12-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Quotas_2018_02_09()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Quotas\2018-02-09");
		}

		[Fact]
		public void Test_azure_com_azsadmin_RegionHealth_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-RegionHealth\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_ResourceHealth_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-ResourceHealth\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_ServiceHealth_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-ServiceHealth\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_shares_2015_12_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-shares\2015-12-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_SlbMuxInstance_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-SlbMuxInstance\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_storage_2015_12_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-storage\2015-12-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_storage_2019_08_08_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-storage\2019-08-08-preview");
		}

		//[Fact]
		//public void Test_azure_com_azsadmin_storageaccounts_2019_08_08_preview() '@odata.nextLink' causes problem.
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-storageaccounts\2019-08-08-preview");
		//}

		[Fact]
		public void Test_azure_com_azsadmin_StorageOperationResults_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-StorageOperationResults\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_StoragePool_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-StoragePool\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_StorageSubSystem_2018_10_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-StorageSubSystem\2018-10-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_StorageSystem_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-StorageSystem\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_tableServices_2015_12_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-tableServices\2015-12-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Update_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Update\2016-05-01");
		}


		//=============================

		[Fact]
		public void Test_azure_com_azsadmin_UpdateLocations_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-UpdateLocations\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_UpdateRuns_2016_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-UpdateRuns\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_VirtualNetworks_2015_06_15()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-VirtualNetworks\2015-06-15");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Volume_2019_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azsadmin-Volume\2019-05-01");
		}

		[Fact]
		public void Test_azure_com_azure_kusto_2019_11_09()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azure-kusto\2019-11-09");
		}

		[Fact]
		public void Test_azure_com_azureactivedirectory_2017_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azureactivedirectory\2017-04-01");
		}

		[Fact]
		public void Test_azure_com_azuredata_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azuredata\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_azurestack_AzureStack_2017_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azurestack-AzureStack\2017-06-01");
		}

		//[Fact]
		//public void Test_azure_com_azurestack_Product_2017_06_01() has Uri as a component. Though I could rename it, but I would not bother this time.
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\azurestack-Product\2017-06-01");
		//}


		[Fact]
		public void Test_azure_com_batch_BatchManagement_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\batch-BatchManagement\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_batch_BatchService_2019_08_01_10_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\batch-BatchService\2019-08-01.10.0");
		}

		//=========================================


		[Fact]
		public void Test_azure_com_batchai_BatchAI_2018_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\batchai-BatchAI\2018-05-01");
		}



		[Fact]
		public void Test_azure_com_blockchain_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\blockchain\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_blueprint_assignmentOperation_2018_11_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\blueprint-assignmentOperation\2018-11-01-preview");
		}

		[Fact]
		public void Test_azure_com_blueprint_blueprintAssignment_2018_11_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\blueprint-blueprintAssignment\2018-11-01-preview");
		}

		[Fact]
		public void Test_azure_com_blueprint_blueprintDefinition_2018_11_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\blueprint-blueprintDefinition\2018-11-01-preview");
		}

		[Fact]
		public void Test_azure_com_botservice_2018_07_12()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\botservice\2018-07-12");
		}

		//[Fact]
		//public void Test_azure_com_cdn_2019_12_31() @odata.type causes problem
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cdn\2019-12-31");
		//}

		[Fact]
		public void Test_azure_com_cdn_cdnwebapplicationfirewall_2019_06_15_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cdn-cdnwebapplicationfirewall\2019-06-15-preview");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_2017_04_18()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cognitiveservices\2017-04-18");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_AnomalyDetector_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cognitiveservices-AnomalyDetector\1.0");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_AnomalyFinder_2_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cognitiveservices-AnomalyFinder\2.0");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_BasicRegions_2017_08_30()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cognitiveservices-BasicRegions\2017-08-30");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_ComputerVision_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cognitiveservices-ComputerVision\1.0");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_ExtendedRegions_2017_08_30()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cognitiveservices-ExtendedRegions\2017-08-30");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_Face_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cognitiveservices-Face\1.0");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_FormRecognizerReceiptOcr_1_0_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cognitiveservices-FormRecognizerReceiptOcr\1.0-preview");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_InkRecognizer_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cognitiveservices-InkRecognizer\1.0");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_LUIS_Runtime_3_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cognitiveservices-LUIS-Runtime\3.0");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_LUIS_Runtime_3_0_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cognitiveservices-LUIS-Runtime\3.0-preview");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_Parameters_2017_08_30()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cognitiveservices-Parameters\2017-08-30");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_Personalizer_v1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cognitiveservices-Personalizer\v1.0");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_TextAnalytics_v3_0_preview_1()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cognitiveservices-TextAnalytics\v3.0-preview.1");
		}

		[Fact]
		public void Test_azure_com_commerce_2015_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\commerce\2015-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_common_types_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\common-types\1.0");
		}

		[Fact]
		public void Test_azure_com_compute_2019_07_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\compute\2019-07-01");
		}

		//[Fact]
		//public void Test_azure_com_compute_containerService_2017_01_31() ContainerServiceMasterProfile has casual enum 1, 3, 5. Good use of enum?
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\compute-containerService\2017-01-31");
		//}

		[Fact]
		public void Test_azure_com_compute_disk_2019_07_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\compute-disk\2019-07-01");
		}

		[Fact]
		public void Test_azure_com_compute_gallery_2019_07_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\compute-gallery\2019-07-01");
		}

		[Fact]
		public void Test_azure_com_compute_runCommands_2019_07_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\compute-runCommands\2019-07-01");
		}

		[Fact]
		public void Test_azure_com_compute_skus_2019_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\compute-skus\2019-04-01");
		}

		[Fact]
		public void Test_azure_com_compute_swagger_2015_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\compute-swagger\2015-11-01");
		}





		//[Fact]
		//public void Test_azure_com_consumption_2019_10_01() ReservationTransactionProperties looks invalid
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\consumption\2019-10-01");
		//}

		[Fact]
		public void Test_azure_com_containerinstance_containerInstance_2018_10_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\containerinstance-containerInstance\2018-10-01");
		}


		[Fact]
		public void Test_azure_com_containerregistry_2019_12_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\containerregistry\2019-12-01-preview");
		}


		[Fact]
		public void Test_azure_com_containerregistry_containerregistry_build_2019_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\containerregistry-containerregistry_build\2019-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_containerregistry_containerregistry_scopemap_2019_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\containerregistry-containerregistry_scopemap\2019-05-01-preview");
		}

		//[Fact]
		//public void Test_azure_com_containerservice_containerService_2017_07_01() //funky use of enum?
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\containerservice-containerService\2017-07-01");
		//}

		[Fact]
		public void Test_azure_com_containerservice_location_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\containerservice-location\2019-08-01");
		}

		//[Fact]
		//public void Test_azure_com_containerservice_managedClusters_2020_01_01() //funky use of enum?
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\containerservice-managedClusters\2020-01-01");
		//}

		[Fact]
		public void Test_azure_com_containerservice_openShiftManagedClusters_2019_09_30_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\containerservice-openShiftManagedClusters\2019-09-30-preview");
		}

		//[Fact]
		//public void Test_azure_com_containerservices_containerService_2017_07_01()//funky use of enum?
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\containerservices-containerService\2017-07-01");
		//}

		[Fact]
		public void Test_azure_com_containerservices_location_2017_09_30()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\containerservices-location\2017-09-30");
		}

		//[Fact]
		//public void Test_azure_com_containerservices_managedClusters_2018_08_01_preview()//funky use of enum?
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\containerservices-managedClusters\2018-08-01-preview");
		//}

		[Fact]
		public void Test_azure_com_containerservices_openShiftManagedClusters_2018_09_30_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\containerservices-openShiftManagedClusters\2018-09-30-preview");
		}

		[Fact]
		public void Test_azure_com_cosmos_db_2019_12_12()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cosmos-db\2019-12-12");
		}

		[Fact]
		public void Test_azure_com_cosmos_db_privateEndpointConnection_2019_08_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cosmos-db-privateEndpointConnection\2019-08-01-preview");
		}

		[Fact]
		public void Test_azure_com_cosmos_db_privateLinkResources_2019_08_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cosmos-db-privateLinkResources\2019-08-01-preview");
		}


		[Fact]
		public void Test_azure_com_cost_management_costmanagement_2019_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\cost-management-costmanagement\2019-11-01");
		}

		[Fact]
		public void Test_azure_com_customer_insights_2017_04_26()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\customer-insights\2017-04-26");
		}

		[Fact]
		public void Test_azure_com_customerlockbox_2018_02_28_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\customerlockbox\2018-02-28-preview");
		}

		[Fact]
		public void Test_azure_com_customproviders_2018_09_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\customproviders\2018-09-01-preview");
		}

		[Fact]
		public void Test_azure_com_databox_2019_09_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\databox\2019-09-01");
		}

		[Fact]
		public void Test_azure_com_databoxedge_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\databoxedge\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_databricks_2018_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\databricks\2018-04-01");
		}

		[Fact]
		public void Test_azure_com_datacatalog_2016_03_30()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\datacatalog\2016-03-30");
		}


		[Fact]
		public void Test_azure_com_datafactory_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\datafactory\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_datafactory_DataFlow_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\datafactory-DataFlow\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_datafactory_Dataset_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\datafactory-Dataset\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_datafactory_IntegrationRuntime_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\datafactory-IntegrationRuntime\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_datafactory_LinkedService_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\datafactory-LinkedService\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_datafactory_Pipeline_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\datafactory-Pipeline\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_datafactory_Trigger_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\datafactory-Trigger\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_datalake_analytics_account_2016_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\datalake-analytics-account\2016-11-01");
		}

		[Fact]
		public void Test_azure_com_datalake_analytics_catalog_2016_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\datalake-analytics-catalog\2016-11-01");
		}

		[Fact]
		public void Test_azure_com_datalake_analytics_job_2017_09_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\datalake-analytics-job\2017-09-01-preview");
		}

		[Fact]
		public void Test_azure_com_datalake_store_account_2016_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\datalake-store-account\2016-11-01");
		}

		[Fact]
		public void Test_azure_com_datalake_store_filesystem_2016_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\datalake-store-filesystem\2016-11-01");
		}

		[Fact]
		public void Test_azure_com_datashare_DataShare_2019_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\datashare-DataShare\2019-11-01");
		}

		[Fact]
		public void Test_azure_com_deploymentmanager_2018_09_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\deploymentmanager\2018-09-01-preview");
		}

		[Fact]
		public void Test_azure_com_deploymentmanager_2019_11_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\deploymentmanager\2019-11-01-preview");
		}

		//[Fact]
		//public void Test_azure_com_deviceprovisioningservices_iotdps_2018_01_22() $ref: '#/definitions/SharedAccessSignatureAuthorizationRule[AccessRightsDescription]'
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\deviceprovisioningservices-iotdps\2018-01-22");
		//}

		[Fact]
		public void Test_azure_com_devops_2019_07_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\devops\2019-07-01-preview");
		}

		[Fact]
		public void Test_azure_com_devspaces_2019_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\devspaces\2019-04-01");
		}

		[Fact]
		public void Test_azure_com_devtestlabs_DTL_2018_09_15()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\devtestlabs-DTL\2018-09-15");
		}

		[Fact]
		public void Test_azure_com_digitaltwins_2020_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\digitaltwins\2020-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_dns_2018_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\dns\2018-05-01");
		}

		[Fact]
		public void Test_azure_com_domainservices_2020_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\domainservices\2020-01-01");
		}

		[Fact]
		public void Test_azure_com_dynamicstelemetry_2019_01_24()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\dynamicstelemetry\2019-01-24");
		}

		[Fact]
		public void Test_azure_com_edgegateway_2019_03_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\edgegateway\2019-03-01");
		}

		[Fact]
		public void Test_azure_com_engagementfabric_EngagementFabric_2018_09_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\engagementfabric-EngagementFabric\2018-09-01-preview");
		}

		[Fact]
		public void Test_azure_com_EnterpriseKnowledgeGraph_EnterpriseKnowledgeGraphSwagger_2018_12_03()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\EnterpriseKnowledgeGraph-EnterpriseKnowledgeGraphSwagger\2018-12-03");
		}




		[Fact]
		public void Test_azure_com_eventgrid_AppConfiguration_2018_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\eventgrid-AppConfiguration\2018-01-01");
		}

		[Fact]
		public void Test_azure_com_eventgrid_ContainerRegistry_2018_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\eventgrid-ContainerRegistry\2018-01-01");
		}

		[Fact]
		public void Test_azure_com_eventgrid_EventGrid_2020_04_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\eventgrid-EventGrid\2020-04-01-preview");
		}

		[Fact]
		public void Test_azure_com_eventgrid_EventHub_2018_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\eventgrid-EventHub\2018-01-01");
		}

		[Fact]
		public void Test_azure_com_eventgrid_IotHub_2018_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\eventgrid-IotHub\2018-01-01");
		}

		[Fact]
		public void Test_azure_com_eventgrid_KeyVault_2018_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\eventgrid-KeyVault\2018-01-01");
		}

		[Fact]
		public void Test_azure_com_eventgrid_MachineLearningServices_2018_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\eventgrid-MachineLearningServices\2018-01-01");
		}

		[Fact]
		public void Test_azure_com_eventgrid_Maps_2018_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\eventgrid-Maps\2018-01-01");
		}

		//[Fact]
		//public void Test_azure_com_eventgrid_MediaServices_2018_01_01() not sure if I should support @odata.type?
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\eventgrid-MediaServices\2018-01-01");
		//}

		[Fact]
		public void Test_azure_com_eventgrid_Resources_2018_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\eventgrid-Resources\2018-01-01");
		}

		[Fact]
		public void Test_azure_com_eventgrid_ServiceBus_2018_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\eventgrid-ServiceBus\2018-01-01");
		}

		[Fact]
		public void Test_azure_com_eventgrid_SignalRService_2018_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\eventgrid-SignalRService\2018-01-01");
		}

		[Fact]
		public void Test_azure_com_eventgrid_Storage_2018_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\eventgrid-Storage\2018-01-01");
		}

		[Fact]
		public void Test_azure_com_eventhub_EventHub_preview_2018_01_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\eventhub-EventHub-preview\2018-01-01-preview");
		}

		//[Fact]
		//public void Test_azure_com_frontdoor_2020_01_01()not sure if I should support @odata.type?
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\frontdoor\2020-01-01");
		//}

		[Fact]
		public void Test_azure_com_frontdoor_network_2020_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\frontdoor-network\2020-01-01");
		}

		[Fact]
		public void Test_azure_com_frontdoor_networkexperiment_2019_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\frontdoor-networkexperiment\2019-11-01");
		}

		[Fact]
		public void Test_azure_com_frontdoor_webapplicationfirewall_2019_10_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\frontdoor-webapplicationfirewall\2019-10-01");
		}


		[Fact]
		public void Test_azure_com_hardwaresecuritymodules_dedicatedhsm_2018_10_31_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\hardwaresecuritymodules-dedicatedhsm\2018-10-31-preview");
		}

		[Fact]
		public void Test_azure_com_hdinsight_applications_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\hdinsight-applications\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_hdinsight_capabilities_2015_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\hdinsight-capabilities\2015-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_hdinsight_cluster_2015_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\hdinsight-cluster\2015-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_hdinsight_cluster_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\hdinsight-cluster\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_hdinsight_configurations_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\hdinsight-configurations\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_hdinsight_extensions_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\hdinsight-extensions\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_hdinsight_job_2018_11_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\hdinsight-job\2018-11-01-preview");
		}

		[Fact]
		public void Test_azure_com_hdinsight_locations_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\hdinsight-locations\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_hdinsight_operations_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\hdinsight-operations\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_hdinsight_scriptActions_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\hdinsight-scriptActions\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_healthcareapis_healthcare_apis_2019_09_16()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\healthcareapis-healthcare-apis\2019-09-16");
		}

		[Fact]
		public void Test_azure_com_hybridcompute_HybridCompute_2019_12_12()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\hybridcompute-HybridCompute\2019-12-12");
		}

		[Fact]
		public void Test_azure_com_hybriddatamanager_hybriddata_2016_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\hybriddatamanager-hybriddata\2016-06-01");
		}

		[Fact]
		public void Test_azure_com_imagebuilder_2019_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\imagebuilder\2019-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_imds_2019_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\imds\2019-11-01");
		}

		[Fact]
		public void Test_azure_com_intune_2015_01_14_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\intune\2015-01-14-preview");
		}

		//===============

		[Fact]
		public void Test_azure_com_iotcentral_2018_09_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\iotcentral\2018-09-01");
		}

		[Fact]
		public void Test_azure_com_iothub_2019_11_04()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\iothub\2019-11-04");
		}

		[Fact]
		public void Test_azure_com_iotspaces_2017_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\iotspaces\2017-10-01-preview");
		}

		//[Fact]
		//public void Test_azure_com_keyvault_2019_09_01() invalid casual enum  resourceType eq 'Microsoft.KeyVault/vaults' in path '/subscriptions/{subscriptionId}/resources'
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\keyvault\2019-09-01");
		//}

		[Fact]
		public void Test_azure_com_keyvault_providers_2019_09_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\keyvault-providers\2019-09-01");
		}

		[Fact]
		public void Test_azure_com_keyvault_secrets_2019_09_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\keyvault-secrets\2019-09-01");
		}

		[Fact]
		public void Test_azure_com_locationbasedservices_2017_01_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\locationbasedservices\2017-01-01-preview");
		}

		[Fact]
		public void Test_azure_com_logic_2019_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\logic\2019-05-01");
		}

		[Fact]
		public void Test_azure_com_machinelearning_commitmentPlans_2016_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\machinelearning-commitmentPlans\2016-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_machinelearning_webservices_2017_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\machinelearning-webservices\2017-01-01");
		}

		[Fact]
		public void Test_azure_com_machinelearning_workspaces_2019_10_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\machinelearning-workspaces\2019-10-01");
		}

		[Fact]
		public void Test_azure_com_machinelearningservices_artifact_2019_09_30()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\machinelearningservices-artifact\2019-09-30");
		}

		[Fact]
		public void Test_azure_com_machinelearningservices_datastore_2019_09_30()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\machinelearningservices-datastore\2019-09-30");
		}

		[Fact]
		public void Test_azure_com_machinelearningservices_execution_2019_09_30()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\machinelearningservices-execution\2019-09-30");
		}

		[Fact]
		public void Test_azure_com_machinelearningservices_hyperdrive_2019_09_30()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\machinelearningservices-hyperdrive\2019-09-30");
		}

		[Fact]
		public void Test_azure_com_machinelearningservices_modelManagement_2019_09_30()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\machinelearningservices-modelManagement\2019-09-30");
		}

		[Fact]
		public void Test_azure_com_machinelearningservices_runHistory_2019_09_30()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\machinelearningservices-runHistory\2019-09-30");
		}



	}
}