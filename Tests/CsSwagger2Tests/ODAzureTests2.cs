using Fonlow.OpenApiClientGen.ClientTypes;
using Xunit;
using Xunit.Abstractions;

namespace SwagTests
{
	public class ODAzureTests2
	{
		readonly CSharpTestHelperForOpenApiDir helper;
		public ODAzureTests2(ITestOutputHelper output)
		{
			helper = new CSharpTestHelperForOpenApiDir(output, "swagger.yaml", Swagger2CodeGenSettings.Default);
		}

		void GenerateFromOpenApiAndBuild(string filePath, ISettings mySettings = null)
		{
			ISettings settings = mySettings ?? Swagger2CodeGenSettings.Default;
			helper.GenerateFromOpenApiAndBuild(filePath, settings);
		}

		[Fact]
		public void Test_azure_com_maintenance_Maintenance_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\maintenance-Maintenance\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_managednetwork_managedNetwork_2019_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\managednetwork-managedNetwork\2019-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_managedservices_2019_09_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\managedservices\2019-09-01");
		}


		[Fact]
		public void Test_azure_com_managementpartner_ManagementPartner_2018_02_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\managementpartner-ManagementPartner\2018-02-01");
		}

		[Fact]
		public void Test_azure_com_maps_maps_management_2020_02_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\maps-maps-management\2020-02-01-preview");
		}

		[Fact]
		public void Test_azure_com_mariadb_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\mariadb\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_mariadb_DataEncryptionKeys_2020_01_01_privatepreview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\mariadb-DataEncryptionKeys\2020-01-01-privatepreview");
		}

		[Fact]
		public void Test_azure_com_mariadb_PerformanceRecommendations_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\mariadb-PerformanceRecommendations\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_mariadb_PrivateEndpointConnections_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\mariadb-PrivateEndpointConnections\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_mariadb_PrivateLinkResources_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\mariadb-PrivateLinkResources\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_mariadb_QueryPerformanceInsights_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\mariadb-QueryPerformanceInsights\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_marketplace_Marketplace_2020_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\marketplace-Marketplace\2020-01-01");
		}

		[Fact]
		public void Test_azure_com_marketplaceordering_Agreements_2015_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\marketplaceordering-Agreements\2015-06-01");
		}


		[Fact]
		public void Test_azure_com_mediaservices_Common_2018_07_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\mediaservices-Common\2018-07-01");
		}

		[Fact]
		public void Test_azure_com_mediaservices_media_2015_10_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\mediaservices-media\2015-10-01");
		}

		[Fact]
		public void Test_azure_com_migrate_2019_10_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\migrate\2019-10-01");
		}


		[Fact]
		public void Test_azure_com_mobileengagement_mobile_engagement_2014_12_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\mobileengagement-mobile-engagement\2014-12-01");
		}

		[Fact]
		public void Test_azure_com_monitor_actionGroups_API_2019_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-actionGroups_API\2019-06-01");
		}

		[Fact]
		public void Test_azure_com_monitor_activityLogAlerts_API_2017_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-activityLogAlerts_API\2017-04-01");
		}

		[Fact]
		public void Test_azure_com_monitor_activityLogs_API_2015_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-activityLogs_API\2015-04-01");
		}

		[Fact]
		public void Test_azure_com_monitor_alertRulesIncidents_API_2016_03_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-alertRulesIncidents_API\2016-03-01");
		}

		[Fact]
		public void Test_azure_com_monitor_alertRules_API_2016_03_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-alertRules_API\2016-03-01");
		}

		[Fact]
		public void Test_azure_com_monitor_autoscale_API_2015_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-autoscale_API\2015-04-01");
		}


		[Fact]
		public void Test_azure_com_monitor_baseline_API_2018_09_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-baseline_API\2018-09-01");
		}


		[Fact]
		public void Test_azure_com_monitor_calculateBaseline_API_2018_09_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-calculateBaseline_API\2018-09-01");
		}

		[Fact]
		public void Test_azure_com_monitor_eventCategories_API_2015_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-eventCategories_API\2015-04-01");
		}

		[Fact]
		public void Test_azure_com_monitor_guestDiagnosticSettingsAssociation_API_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-guestDiagnosticSettingsAssociation_API\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_monitor_guestDiagnosticSettings_API_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-guestDiagnosticSettings_API\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_monitor_logProfiles_API_2016_03_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-logProfiles_API\2016-03-01");
		}

		[Fact]
		public void Test_azure_com_monitor_metricAlert_API_2018_03_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-metricAlert_API\2018-03-01");
		}

		[Fact]
		public void Test_azure_com_monitor_metricBaselines_API_2019_03_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-metricBaselines_API\2019-03-01");
		}

		[Fact]
		public void Test_azure_com_monitor_metricDefinitions_API_2018_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-metricDefinitions_API\2018-01-01");
		}

		[Fact]
		public void Test_azure_com_monitor_metricNamespaces_API_2017_12_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-metricNamespaces_API\2017-12-01-preview");
		}

		[Fact]
		public void Test_azure_com_monitor_metricsCreate_API_2018_09_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-metricsCreate_API\2018-09-01-preview");
		}

		//[Fact]
		//public void Test_azure_com_monitor_metrics_API_2018_01_01() Response has property number/int32 which does not match swagger 2.0 data types.
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-metrics_API\2018-01-01");
		//}

		[Fact]
		public void Test_azure_com_monitor_operations_API_2015_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-operations_API\2015-04-01");
		}

		[Fact]
		public void Test_azure_com_monitor_privateLinkScopes_API_2019_10_17_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-privateLinkScopes_API\2019-10-17-preview");
		}

		[Fact]
		public void Test_azure_com_monitor_scheduledQueryRule_API_2018_04_16()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-scheduledQueryRule_API\2018-04-16");
		}

		[Fact]
		public void Test_azure_com_monitor_serviceDiagnosticsSettings_API_2016_09_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-serviceDiagnosticsSettings_API\2016-09-01");
		}

		[Fact]
		public void Test_azure_com_monitor_subscriptionDiagnosticsSettings_API_2017_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-subscriptionDiagnosticsSettings_API\2017-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_monitor_tenantActivityLogs_API_2015_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-tenantActivityLogs_API\2015-04-01");
		}

		[Fact]
		public void Test_azure_com_monitor_vmInsightsOnboarding_API_2018_11_27_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\monitor-vmInsightsOnboarding_API\2018-11-27-preview");
		}

		[Fact]
		public void Test_azure_com_msi_ManagedIdentity_2018_11_30()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\msi-ManagedIdentity\2018-11-30");
		}

		[Fact]
		public void Test_azure_com_mysql_2017_12_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\mysql\2017-12-01");
		}


		[Fact]
		public void Test_azure_com_mysql_DataEncryptionKeys_2020_01_01_privatepreview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\mysql-DataEncryptionKeys\2020-01-01-privatepreview");
		}

		[Fact]
		public void Test_azure_com_mysql_PerformanceRecommendations_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\mysql-PerformanceRecommendations\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_mysql_PrivateEndpointConnections_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\mysql-PrivateEndpointConnections\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_mysql_PrivateLinkResources_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\mysql-PrivateLinkResources\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_mysql_QueryPerformanceInsights_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\mysql-QueryPerformanceInsights\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_netapp_2019_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\netapp\2019-11-01");
		}

		[Fact]
		public void Test_azure_com_network_2019_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network\2019-11-01");
		}

		[Fact]
		public void Test_azure_com_network_applicationSecurityGroup_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-applicationSecurityGroup\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_network_availableDelegations_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-availableDelegations\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_network_availableServiceAliases_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-availableServiceAliases\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_network_azureFirewall_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-azureFirewall\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_network_azureFirewallFqdnTag_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-azureFirewallFqdnTag\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_network_bastionHost_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-bastionHost\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_network_checkDnsAvailability_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-checkDnsAvailability\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_network_ddosCustomPolicy_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-ddosCustomPolicy\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_network_ddosProtectionPlan_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-ddosProtectionPlan\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_network_endpointService_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-endpointService\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_network_expressRouteCircuit_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-expressRouteCircuit\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_network_expressRouteCrossConnection_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-expressRouteCrossConnection\2019-08-01");
		}

		//=======================


		[Fact]
		public void Test_azure_com_network_expressRouteGateway_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-expressRouteGateway\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_network_expressRoutePort_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-expressRoutePort\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_network_firewallPolicy_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-firewallPolicy\2019-08-01");
		}

		//[Fact]
		//public void Test_azure_com_network_interfaceEndpoint_2019_02_01()InterfaceEndpointProperties has some nested definition to external definitions?
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-interfaceEndpoint\2019-02-01");
		//}

		[Fact]
		public void Test_azure_com_network_ipGroups_2019_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\network-ipGroups\2019-11-01");
		}

		//======================

		[Fact]
		public void Test_azure_com_redis_2019_07_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\redis\2019-07-01");
		}

		[Fact]
		public void Test_azure_com_relay_2017_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\relay\2017-04-01");
		}

		[Fact]
		public void Test_azure_com_reservations_quota_2019_07_19_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\reservations-quota\2019-07-19-preview");
		}

		[Fact]
		public void Test_azure_com_resourcegraph_graphquery_2018_09_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\resourcegraph-graphquery\2018-09-01-preview");
		}

		[Fact]
		public void Test_azure_com_resourcehealth_2017_07_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\resourcehealth\2017-07-01");
		}

		[Fact]
		public void Test_azure_com_resourcehealth_ResourceHealth_2018_07_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\resourcehealth-ResourceHealth\2018-07-01");
		}

		[Fact]
		public void Test_azure_com_resources_2019_10_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\resources\2019-10-01");
		}

		[Fact]
		public void Test_azure_com_resources_deploymentScripts_2019_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\resources-deploymentScripts\2019-10-01-preview");
		}

		[Fact]
		public void Test_azure_com_resources_features_2015_12_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\resources-features\2015-12-01");
		}

		[Fact]
		public void Test_azure_com_resources_links_2016_09_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\resources-links\2016-09-01");
		}

		[Fact]
		public void Test_azure_com_resources_locks_2016_09_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\resources-locks\2016-09-01");
		}

		//======================

		[Fact]
		public void Test_azure_com_resources_managedapplications_2019_07_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\resources-managedapplications\2019-07-01");
		}

		[Fact]
		public void Test_azure_com_resources_management_2017_08_31_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\resources-management\2017-08-31-preview");
		}

		[Fact]
		public void Test_azure_com_resources_policy_2016_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\resources-policy\2016-04-01");
		}

		[Fact]
		public void Test_azure_com_resources_policyAssignments_2019_09_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\resources-policyAssignments\2019-09-01");
		}

		[Fact]
		public void Test_azure_com_resources_policyDefinitions_2019_09_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\resources-policyDefinitions\2019-09-01");
		}
		[Fact]
		public void Test_azure_com_resources_policySetDefinitions_2019_09_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\resources-policySetDefinitions\2019-09-01");
		}

		[Fact]
		public void Test_azure_com_resources_subscriptions_2019_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\resources-subscriptions\2019-11-01");
		}

		[Fact]
		public void Test_azure_com_scheduler_2016_03_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\scheduler\2016-03-01");
		}

		[Fact]
		public void Test_azure_com_search_2019_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\search\2019-10-01-preview");
		}

		[Fact]
		public void Test_azure_com_security_2017_08_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security\2017-08-01-preview");
		}

		[Fact]
		public void Test_azure_com_security_adaptiveNetworkHardenings_2015_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-adaptiveNetworkHardenings\2015-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_security_advancedThreatProtectionSettings_2019_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-advancedThreatProtectionSettings\2019-01-01");
		}

		[Fact]
		public void Test_azure_com_security_alerts_2019_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-alerts\2019-01-01");
		}

		[Fact]
		public void Test_azure_com_security_allowedConnections_2015_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-allowedConnections\2015-06-01-preview");
		}


		[Fact]
		public void Test_azure_com_security_assessmentMetadata_2020_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-assessmentMetadata\2020-01-01");
		}

		[Fact]
		public void Test_azure_com_security_autoProvisioningSettings_2017_08_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-autoProvisioningSettings\2017-08-01-preview");
		}

		[Fact]
		public void Test_azure_com_security_complianceResults_2017_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-complianceResults\2017-08-01");
		}

		[Fact]
		public void Test_azure_com_security_compliances_2017_08_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-compliances\2017-08-01-preview");
		}

		[Fact]
		public void Test_azure_com_security_deviceSecurityGroups_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-deviceSecurityGroups\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_security_discoveredSecuritySolutions_2015_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-discoveredSecuritySolutions\2015-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_security_externalSecuritySolutions_2015_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-externalSecuritySolutions\2015-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_security_informationProtectionPolicies_2017_08_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-informationProtectionPolicies\2017-08-01-preview");
		}

		[Fact]
		public void Test_azure_com_security_iotSecuritySolutionAnalytics_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-iotSecuritySolutionAnalytics\2019-08-01");
		}

		//[Fact]
		//public void Test_azure_com_security_jitNetworkAccessPolicies_2015_06_01_preview() //bad def
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-jitNetworkAccessPolicies\2015-06-01-preview");
		//}

		[Fact]
		public void Test_azure_com_security_locations_2015_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-locations\2015-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_security_operations_2015_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-operations\2015-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_security_pricings_2018_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-pricings\2018-06-01");
		}

		[Fact]
		public void Test_azure_com_security_regulatoryCompliance_2019_01_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-regulatoryCompliance\2019-01-01-preview");
		}

		[Fact]
		public void Test_azure_com_security_securityContacts_2017_08_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-securityContacts\2017-08-01-preview");
		}

		[Fact]
		public void Test_azure_com_security_serverVulnerabilityAssessments_2019_01_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-serverVulnerabilityAssessments\2019-01-01-preview");
		}

		[Fact]
		public void Test_azure_com_security_subAssessments_2019_01_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-subAssessments\2019-01-01-preview");
		}

		[Fact]
		public void Test_azure_com_security_tasks_2015_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-tasks\2015-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_security_topologies_2015_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-topologies\2015-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_security_types_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-types\1.0");
		}

		[Fact]
		public void Test_azure_com_security_workspaceSettings_2017_08_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\security-workspaceSettings\2017-08-01-preview");
		}

		[Fact(Skip ="compiled, however, some API functions not really correct")]
		public void Test_azure_com_securityinsights_SecurityInsights_2020_01_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\securityinsights-SecurityInsights\2020-01-01");
		}

		[Fact]
		public void Test_azure_com_serialconsole_2018_05_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\serialconsole\2018-05-01");
		}

		[Fact]
		public void Test_azure_com_servermanagement_2016_07_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\servermanagement\2016-07-01-preview");
		}

		[Fact]
		public void Test_azure_com_service_map_arm_service_map_2015_11_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\service-map-arm-service-map\2015-11-01-preview");
		}

		[Fact]
		public void Test_azure_com_servicebus_2017_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\servicebus\2017-04-01");
		}

		[Fact]
		public void Test_azure_com_servicebus_servicebus_preview_2018_01_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\servicebus-servicebus-preview\2018-01-01-preview");
		}

		//[Fact]
		//public void Test_azure_com_servicefabric_7_0_0_42()
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\servicefabric\7.0.0.42");
		//}


		[Fact]
		public void Test_azure_com_servicefabric_application_2019_03_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\servicefabric-application\2019-03-01");
		}


		[Fact]
		public void Test_azure_com_servicefabric_cluster_2019_03_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\servicefabric-cluster\2019-03-01");
		}

		[Fact]
		public void Test_azure_com_servicefabric_cluster_2019_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\servicefabric-cluster\2019-03-01-preview");
		}

		//[Fact]
		//public void Test_azure_com_servicefabricmesh_2018_09_01_preview()
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\servicefabricmesh\2018-09-01-preview");
		//}

		[Fact]
		public void Test_azure_com_signalr_2018_10_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\signalr\2018-10-01");
		}

		//[Fact]
		//public void Test_azure_com_softwareplan_2019_12_01()
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\softwareplan\2019-12-01");
		//}

		[Fact]
		public void Test_azure_com_sql_advisors_2015_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-advisors\2015-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_backupLongTermRetentionPolicies_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-backupLongTermRetentionPolicies\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_backupLongTermRetentionVaults_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-backupLongTermRetentionVaults\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_backups_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-backups\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_blobAuditing_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-blobAuditing\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_blobAuditingPolicies_2015_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-blobAuditingPolicies\2015-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_cancelOperations_2017_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-cancelOperations\2017-10-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_cancelPoolOperations_2017_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-cancelPoolOperations\2017-10-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_capabilities_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-capabilities\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_checkNameAvailability_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-checkNameAvailability\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_connectionPolicies_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-connectionPolicies\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_databaseAutomaticTuning_2015_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-databaseAutomaticTuning\2015-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_databases_2019_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-databases\2019-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_DatabaseSchema_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-DatabaseSchema\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_DatabaseSecurityAlertPolicies_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-DatabaseSecurityAlertPolicies\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_databaseVulnerabilityAssessmentBaselines_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-databaseVulnerabilityAssessmentBaselines\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_databaseVulnerabilityAssessments_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-databaseVulnerabilityAssessments\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_databaseVulnerabilityAssessmentScans_2017_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-databaseVulnerabilityAssessmentScans\2017-10-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_dataMasking_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-dataMasking\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_dataWarehouseUserActivities_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-dataWarehouseUserActivities\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_disasterRecoveryConfigurations_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-disasterRecoveryConfigurations\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_elasticPools_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-elasticPools\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_elasticPools_2017_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-elasticPools\2017-10-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_encryptionProtectors_2015_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-encryptionProtectors\2015-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_FailoverDatabases_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-FailoverDatabases\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_FailoverElasticPools_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-FailoverElasticPools\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_failoverGroups_2015_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-failoverGroups\2015-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_firewallRules_2015_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-firewallRules\2015-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_geoBackupPolicies_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-geoBackupPolicies\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_importExport_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-importExport\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_instanceFailoverGroups_2017_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-instanceFailoverGroups\2017-10-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_instancePools_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-instancePools\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_jobs_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-jobs\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_longTermRetention_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-longTermRetention\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_ManagedBackupShortTermRetention_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-ManagedBackupShortTermRetention\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_managedDatabases_2019_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-managedDatabases\2019-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_ManagedDatabaseSchema_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-ManagedDatabaseSchema\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_ManagedDatabaseSecurityAlertPolicies_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-ManagedDatabaseSecurityAlertPolicies\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_managedDatabaseSensitivityLabels_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-managedDatabaseSensitivityLabels\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_managedDatabaseVulnerabilityAssesmentRuleBaselines_2017_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-managedDatabaseVulnerabilityAssesmentRuleBaselines\2017-10-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_managedDatabaseVulnerabilityAssessments_2017_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-managedDatabaseVulnerabilityAssessments\2017-10-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_managedDatabaseVulnerabilityAssessmentScans_2017_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-managedDatabaseVulnerabilityAssessmentScans\2017-10-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_managedInstanceAdministrators_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-managedInstanceAdministrators\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_ManagedInstanceEncryptionProtectors_2017_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-ManagedInstanceEncryptionProtectors\2017-10-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_ManagedInstanceKeys_2017_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-ManagedInstanceKeys\2017-10-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_managedInstanceOperations_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-managedInstanceOperations\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_managedInstances_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-managedInstances\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_ManagedInstanceTdeCertificates_2017_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-ManagedInstanceTdeCertificates\2017-10-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_ManagedInstanceVulnerabilityAssessments_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-ManagedInstanceVulnerabilityAssessments\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_ManagedRestorableDroppedDatabaseBackupShortTermRetenion_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-ManagedRestorableDroppedDatabaseBackupShortTermRetenion\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_ManagedServerSecurityAlertPolicy_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-ManagedServerSecurityAlertPolicy\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_metrics_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-metrics\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_operations_2015_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-operations\2015-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_PrivateEndpointConnections_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-PrivateEndpointConnections\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_PrivateLinkResources_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-PrivateLinkResources\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_queries_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-queries\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_recommendedElasticPools_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-recommendedElasticPools\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_recommendedElasticPoolsDecoupled_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-recommendedElasticPoolsDecoupled\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_recoverableManagedDatabases_2017_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-recoverableManagedDatabases\2017-10-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_renameDatabase_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-renameDatabase\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_replicationLinks_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-replicationLinks\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_restorableDroppedManagedDatabases_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-restorableDroppedManagedDatabases\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_restorePoints_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-restorePoints\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_SensitivityLabels_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-SensitivityLabels\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_serverAutomaticTuning_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-serverAutomaticTuning\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_ServerAzureADAdministrators_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-ServerAzureADAdministrators\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_serverCommunicationLinks_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-serverCommunicationLinks\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_serverDnsAliases_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-serverDnsAliases\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_serverKeys_2015_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-serverKeys\2015-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_serverOperations_2019_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-serverOperations\2019-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_servers_2019_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-servers\2019-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_serverSecurityAlertPolicies_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-serverSecurityAlertPolicies\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_ServerVulnerabilityAssessments_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-ServerVulnerabilityAssessments\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_serviceObjectives_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-serviceObjectives\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_shortTermRetentionPolicies_2017_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-shortTermRetentionPolicies\2017-10-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_sql_core_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-sql.core\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_syncAgents_2015_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-syncAgents\2015-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_syncGroups_2015_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-syncGroups\2015-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_syncMembers_2015_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-syncMembers\2015-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_tableAuditing_2014_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-tableAuditing\2014-04-01");
		}

		[Fact]
		public void Test_azure_com_sql_TdeCertificates_2017_10_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-TdeCertificates\2017-10-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_types_1_0()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-types\1.0");
		}

		[Fact]
		public void Test_azure_com_sql_usages_2018_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-usages\2018-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_virtualclusters_2015_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-virtualclusters\2015-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_virtualNetworkRules_2015_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-virtualNetworkRules\2015-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_WorkloadClassifiers_2019_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-WorkloadClassifiers\2019-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sql_WorkloadGroups_2019_06_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sql-WorkloadGroups\2019-06-01-preview");
		}

		[Fact]
		public void Test_azure_com_sqlvirtualmachine_sqlvm_2017_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\sqlvirtualmachine-sqlvm\2017-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_storage_2019_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\storage\2019-06-01");
		}

		[Fact]
		public void Test_azure_com_storage_blob_2019_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\storage-blob\2019-06-01");
		}

		[Fact]
		public void Test_azure_com_storage_DataLakeStorage_2019_10_31()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\storage-DataLakeStorage\2019-10-31");
		}

		[Fact]
		public void Test_azure_com_storage_file_2019_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\storage-file\2019-06-01");
		}

		[Fact]
		public void Test_azure_com_storage_managementpolicy_2018_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\storage-managementpolicy\2018-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_storagecache_2019_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\storagecache\2019-11-01");
		}

		[Fact]
		public void Test_azure_com_storageimportexport_2016_11_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\storageimportexport\2016-11-01");
		}

		[Fact]
		public void Test_azure_com_storagesync_2019_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\storagesync\2019-06-01");
		}

		[Fact]
		public void Test_azure_com_streamanalytics_functions_2016_03_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\streamanalytics-functions\2016-03-01");
		}

		[Fact]
		public void Test_azure_com_streamanalytics_inputs_2016_03_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\streamanalytics-inputs\2016-03-01");
		}

		[Fact]
		public void Test_azure_com_streamanalytics_outputs_2016_03_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\streamanalytics-outputs\2016-03-01");
		}

		[Fact]
		public void Test_azure_com_streamanalytics_streamingjobs_2016_03_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\streamanalytics-streamingjobs\2016-03-01");
		}

		[Fact]
		public void Test_azure_com_streamanalytics_subscriptions_2016_03_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\streamanalytics-subscriptions\2016-03-01");
		}

		[Fact]
		public void Test_azure_com_streamanalytics_transformations_2016_03_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\streamanalytics-transformations\2016-03-01");
		}

		[Fact]
		public void Test_azure_com_subscription_operations_2018_03_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\subscription-operations\2018-03-01-preview");
		}

		[Fact]
		public void Test_azure_com_subscription_subscriptionDefinitions_2017_11_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\subscription-subscriptionDefinitions\2017-11-01-preview");
		}

		[Fact]
		public void Test_azure_com_support_2019_05_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\support\2019-05-01-preview");
		}

		[Fact]
		public void Test_azure_com_trafficmanager_2018_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\trafficmanager\2018-04-01");
		}

		[Fact]
		public void Test_azure_com_trafficmanager_trafficmanageranalytics_2017_09_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\trafficmanager-trafficmanageranalytics\2017-09-01-preview");
		}

		[Fact]
		public void Test_azure_com_visualstudio_Csm_2017_11_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\visualstudio-Csm\2017-11-01-preview");
		}

		[Fact]
		public void Test_azure_com_visualstudio_PipelineTemplates_2018_08_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\visualstudio-PipelineTemplates\2018-08-01-preview");
		}

		[Fact]
		public void Test_azure_com_visualstudio_Projects_2018_08_01_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\visualstudio-Projects\2018-08-01-preview");
		}

		[Fact]
		public void Test_azure_com_vmwarecloudsimple_2019_04_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\vmwarecloudsimple\2019-04-01");
		}

		[Fact]
		public void Test_azure_com_web_AppServiceCertificateOrders_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-AppServiceCertificateOrders\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_web_AppServiceEnvironments_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-AppServiceEnvironments\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_web_AppServicePlans_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-AppServicePlans\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_web_CertificateRegistrationProvider_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-CertificateRegistrationProvider\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_web_Certificates_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-Certificates\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_web_CommonDefinitions_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-CommonDefinitions\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_web_DeletedWebApps_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-DeletedWebApps\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_web_Diagnostics_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-Diagnostics\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_web_DomainRegistrationProvider_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-DomainRegistrationProvider\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_web_Domains_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-Domains\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_web_Provider_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-Provider\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_web_Recommendations_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-Recommendations\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_web_ResourceHealthMetadata_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-ResourceHealthMetadata\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_web_ResourceProvider_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-ResourceProvider\2019-08-01");
		}

		//[Fact]
		//public void Test_azure_com_web_service_2015_08_01() Generic?
		//{
		//	GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-service\2015-08-01");
		//}



		[Fact]
		public void Test_azure_com_web_TopLevelDomains_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-TopLevelDomains\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_web_WebApps_2019_08_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\web-WebApps\2019-08-01");
		}

		[Fact]
		public void Test_azure_com_windowsesu_2019_09_16_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\windowsesu\2019-09-16-preview");
		}

		[Fact]
		public void Test_azure_com_windowsiot_WindowsIotServices_2019_06_01()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\windowsiot-WindowsIotServices\2019-06-01");
		}

		[Fact]
		public void Test_azure_com_workloadmonitor_Microsoft_WorkloadMonitor_2018_08_31_preview()
		{
			GenerateFromOpenApiAndBuild(@"..\..\..\..\openapi-directory\APIs\azure.com\workloadmonitor-Microsoft.WorkloadMonitor\2018-08-31-preview");
		}

	}
}
