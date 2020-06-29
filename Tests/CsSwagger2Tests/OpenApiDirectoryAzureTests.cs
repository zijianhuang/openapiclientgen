using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	public class OpenapiDirectoryAzureTests
	{
		readonly CSharpTestHelper helper;
		public OpenapiDirectoryAzureTests(ITestOutputHelper output)
		{
			helper = new CSharpTestHelper(output);
		}

		[Fact]
		public void Test_Addons()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\addons-Addons\2017-05-15");
		}

		[Fact]
		public void Test_advisor()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\advisor\2020-01-01");
		}

		[Fact]
		public void Test_alertsmanagementAlertsManagement()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\alertsmanagement-AlertsManagement\2019-03-01");
		}

		[Fact]
		public void Test_alertsmanagementSmartDetectorAlertRulesApi()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\alertsmanagement-SmartDetectorAlertRulesApi\2019-06-01");
		}

		[Fact]
		public void Test_analysisservices()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\analysisservices\2017-08-01");
		}

		[Fact]
		public void Test_apimanagement()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\apimanagement\2019-01-01");
		}

		[Fact]
		public void Test_appconfiguration()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\appconfiguration\2019-10-01");
		}

		[Fact]
		public void Test_applicationinsightscomponentAnnotations_API()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\applicationinsights-componentAnnotations_API\2015-05-01");
		}

		[Fact]
		public void Test_applicationinsightscomponentFeaturesAndPricing_API()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\applicationinsights-componentFeaturesAndPricing_API\2017-10-01");
		}

		[Fact]
		public void Test_applicationinsightscomponentProactiveDetection_API()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\applicationinsights-componentProactiveDetection_API\2015-05-01");
		}

		//[Fact]
		//public void Test_applicationinsightscomponents_API() it seems invalid. Nswag throws exceptions.
		//{
		//	helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\applicationinsights-components_API\2015-05-01");
		//}

		[Fact]
		public void Test_appplatform()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\appplatform\2019-05-01-preview");
		}

		[Fact]
		public void Test_attestation()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\attestation\2018-09-01-preview");
		}

		[Fact]
		public void Test_authorization()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\authorization\2015-07-01");
		}

		[Fact]
		public void Test_authorizationauthorizationProviderOperationsCalls()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\authorization-authorization-ProviderOperationsCalls\2018-01-01-preview");
		}

		[Fact]
		public void Test_authorizationauthorizationRoleAssignmentsCalls()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\authorization-authorization-RoleAssignmentsCalls\2018-09-01-preview");
		}

		[Fact]
		public void Test_authorizationauthorizationRoleDefinitionsCalls()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\authorization-authorization-RoleDefinitionsCalls\2018-01-01-preview");
		}

		[Fact]
		public void Test_automationaccount()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-account\2015-10-31");
		}

		[Fact]
		public void Test_automationcertificate()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-certificate\2015-10-31");
		}

		[Fact]
		public void Test_automationconnection()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-connection\2015-10-31");
		}

		[Fact]
		public void Test_automationconnectionType()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-connectionType\2015-10-31");
		}

		[Fact]
		public void Test_automationdefinitions()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-definitions\2018-06-10");
		}

		[Fact]
		public void Test_automationdscCompilationJob()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-dscCompilationJob\2018-01-15");
		}

		[Fact]
		public void Test_automationdscNodeCounts()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-dscNodeCounts\2018-01-15");
		}

		[Fact]
		public void Test_azure_com_automation_hybridRunbookWorkerGroup_2015_10_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-hybridRunbookWorkerGroup\2015-10-31");
		}

		[Fact]
		public void Test_azure_com_automation_job_2017_05_15_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-job\2017-05-15-preview");
		}

		[Fact]
		public void Test_azure_com_automation_jobSchedule_2015_10_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-jobSchedule\2015-10-31");
		}

		[Fact]
		public void Test_azure_com_automation_linkedWorkspace_2015_10_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-linkedWorkspace\2015-10-31");
		}

		[Fact]
		public void Test_azure_com_automation_module_2015_10_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-module\2015-10-31");
		}

		[Fact]
		public void Test_azure_com_automation_python2package_2018_06_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-python2package\2018-06-30");
		}

		[Fact]
		public void Test_azure_com_automation_runbook_2018_06_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-runbook\2018-06-30");
		}

		[Fact]
		public void Test_azure_com_automation_schedule_2015_10_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-schedule\2015-10-31");
		}

		[Fact]
		public void Test_azure_com_automation_softwareUpdateConfiguration_2017_05_15_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-softwareUpdateConfiguration\2017-05-15-preview");
		}

		[Fact]
		public void Test_azure_com_automation_softwareUpdateConfigurationMachineRun_2017_05_15_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-softwareUpdateConfigurationMachineRun\2017-05-15-preview");
		}

		[Fact]
		public void Test_azure_com_automation_softwareUpdateConfigurationRun_2017_05_15_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-softwareUpdateConfigurationRun\2017-05-15-preview");
		}

		[Fact]
		public void Test_azure_com_automation_sourceControl_2017_05_15_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-sourceControl\2017-05-15-preview");
		}

		[Fact]
		public void Test_azure_com_automation_sourceControlSyncJob_2017_05_15_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-sourceControlSyncJob\2017-05-15-preview");
		}

		[Fact]
		public void Test_azure_com_automation_sourceControlSyncJobStreams_2017_05_15_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-sourceControlSyncJobStreams\2017-05-15-preview");
		}

		[Fact]
		public void Test_azure_com_automation_variable_2015_10_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-variable\2015-10-31");
		}

		[Fact]
		public void Test_azure_com_automation_watcher_2015_10_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-watcher\2015-10-31");
		}

		[Fact]
		public void Test_azure_com_automation_webhook_2015_10_31()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\automation-webhook\2015-10-31");
		}

		//[Fact]
		//public void Test_azure_com_azsadmin_AcquiredPlan_2015_11_01() invalid using parameters rather than definitions for components.
		//{
		//	helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-AcquiredPlan\2015-11-01");
		//}

		[Fact]
		public void Test_azure_com_azsadmin_acquisitions_2019_08_08_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-acquisitions\2019-08-08-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_ActionPlan_2019_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-ActionPlan\2019-01-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_ActionPlanOperation_2019_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-ActionPlanOperation\2019-01-01");
		}


		[Fact]
		public void Test_azure_com_azsadmin_ApplicationOperationResults_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-ApplicationOperationResults\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Backup_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Backup\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Backup_2018_09_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Backup\2018-09-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_blobServices_2015_12_01_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-blobServices\2015-12-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Commerce_2015_06_01_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Commerce\2015-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_CommerceAdmin_2015_06_01_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-CommerceAdmin\2015-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Compute_2015_12_01_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Compute\2015-12-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_ComputeOperationResults_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-ComputeOperationResults\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_DelegatedProvider_2015_11_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-DelegatedProvider\2015-11-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_DelegatedProviderOffer_2015_11_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-DelegatedProviderOffer\2015-11-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Deployment_2019_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Deployment\2019-01-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_DiskMigrationJobs_2018_07_30_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-DiskMigrationJobs\2018-07-30-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Disks_2018_07_30_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Disks\2018-07-30-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Drive_2019_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Drive\2019-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_EdgeGateway_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-EdgeGateway\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_EdgeGatewayPool_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-EdgeGatewayPool\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Fabric_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Fabric\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_FabricLocation_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-FabricLocation\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_farms_2015_12_01_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-farms\2015-12-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_FileContainer_2019_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-FileContainer\2019-01-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_FileShare_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-FileShare\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Gallery_2015_04_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Gallery\2015-04-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_InfraRole_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-InfraRole\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_InfraRoleInstance_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-InfraRoleInstance\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_InfrastructureInsights_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-InfrastructureInsights\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_KeyVault_2017_02_01_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-KeyVault\2017-02-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_LoadBalancers_2015_06_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-LoadBalancers\2015-06-15");
		}

		[Fact]
		public void Test_azure_com_azsadmin_LogicalNetwork_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-LogicalNetwork\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_LogicalSubnet_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-LogicalSubnet\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_MacAddressPool_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-MacAddressPool\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Manifest_2015_11_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Manifest\2015-11-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Network_2015_06_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Network\2015-06-15");
		}

		[Fact]
		public void Test_azure_com_azsadmin_NetworkOperationResults_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-NetworkOperationResults\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Offer_2015_11_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Offer\2015-11-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Operations_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Operations\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Product_2016_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Product\2016-01-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_ProductDeployment_2019_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-ProductDeployment\2019-01-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_ProductPackage_2019_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-ProductPackage\2019-01-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_ProductSecret_2019_01_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-ProductSecret\2019-01-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_PublicIpAddresses_2015_06_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-PublicIpAddresses\2015-06-15");
		}

		[Fact]
		public void Test_azure_com_azsadmin_queueServices_2015_12_01_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-queueServices\2015-12-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Quotas_2018_02_09()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Quotas\2018-02-09");
		}

		[Fact]
		public void Test_azure_com_azsadmin_RegionHealth_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-RegionHealth\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_ResourceHealth_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-ResourceHealth\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_ServiceHealth_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-ServiceHealth\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_shares_2015_12_01_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-shares\2015-12-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_SlbMuxInstance_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-SlbMuxInstance\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_storage_2015_12_01_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-storage\2015-12-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_storage_2019_08_08_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-storage\2019-08-08-preview");
		}

		//[Fact]
		//public void Test_azure_com_azsadmin_storageaccounts_2019_08_08_preview() '@odata.nextLink' causes problem.
		//{
		//	helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-storageaccounts\2019-08-08-preview");
		//}

		[Fact]
		public void Test_azure_com_azsadmin_StorageOperationResults_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-StorageOperationResults\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_StoragePool_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-StoragePool\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_StorageSubSystem_2018_10_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-StorageSubSystem\2018-10-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_StorageSystem_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-StorageSystem\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_tableServices_2015_12_01_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-tableServices\2015-12-01-preview");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Update_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Update\2016-05-01");
		}


		//=============================

		[Fact]
		public void Test_azure_com_azsadmin_UpdateLocations_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-UpdateLocations\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_UpdateRuns_2016_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-UpdateRuns\2016-05-01");
		}

		[Fact]
		public void Test_azure_com_azsadmin_VirtualNetworks_2015_06_15()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-VirtualNetworks\2015-06-15");
		}

		[Fact]
		public void Test_azure_com_azsadmin_Volume_2019_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azsadmin-Volume\2019-05-01");
		}

		[Fact]
		public void Test_azure_com_azure_kusto_2019_11_09()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azure-kusto\2019-11-09");
		}

		[Fact]
		public void Test_azure_com_azureactivedirectory_2017_04_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azureactivedirectory\2017-04-01");
		}

		[Fact]
		public void Test_azure_com_azuredata_2017_03_01_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azuredata\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_azurestack_AzureStack_2017_06_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azurestack-AzureStack\2017-06-01");
		}

		//[Fact]
		//public void Test_azure_com_azurestack_Product_2017_06_01() has Uri as a component. Though I could rename it, but I would not bother this time.
		//{
		//	helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\azurestack-Product\2017-06-01");
		//}


		[Fact]
		public void Test_azure_com_batch_BatchManagement_2019_08_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\batch-BatchManagement\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_batch_BatchService_2019_08_01_10_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\batch-BatchService\2019-08-01.10.0");
		}

		//=========================================


		[Fact]
		public void Test_azure_com_batchai_BatchAI_2018_05_01()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\batchai-BatchAI\2018-05-01");
		}



		[Fact]
		public void Test_azure_com_blockchain_2018_06_01_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\blockchain\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_blueprint_assignmentOperation_2018_11_01_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\blueprint-assignmentOperation\2018-11-01-preview");
		}

		[Fact]
		public void Test_azure_com_blueprint_blueprintAssignment_2018_11_01_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\blueprint-blueprintAssignment\2018-11-01-preview");
		}

		[Fact]
		public void Test_azure_com_blueprint_blueprintDefinition_2018_11_01_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\blueprint-blueprintDefinition\2018-11-01-preview");
		}

		[Fact]
		public void Test_azure_com_botservice_2018_07_12()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\botservice\2018-07-12");
		}

		//[Fact]
		//public void Test_azure_com_cdn_2019_12_31() @odata.type causes problem
		//{
		//	helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\cdn\2019-12-31");
		//}

		[Fact]
		public void Test_azure_com_cdn_cdnwebapplicationfirewall_2019_06_15_preview()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\cdn-cdnwebapplicationfirewall\2019-06-15-preview");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_2017_04_18()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\cognitiveservices\2017-04-18");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_AnomalyDetector_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\cognitiveservices-AnomalyDetector\1.0");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_AnomalyFinder_2_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\cognitiveservices-AnomalyFinder\2.0");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_BasicRegions_2017_08_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\cognitiveservices-BasicRegions\2017-08-30");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_ComputerVision_1_0()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\cognitiveservices-ComputerVision\1.0");
		}

		[Fact]
		public void Test_azure_com_cognitiveservices_ExtendedRegions_2017_08_30()
		{
			helper.GenerateFromOpenApiAndBuild(@"C:\VSProjects\Study\openapi-directory\APIs\azure.com\cognitiveservices-ExtendedRegions\2017-08-30");
		}

	}
}