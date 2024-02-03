import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchGetAggregateResourceConfigResponse {
		BaseConfigurationItems?: Array<BaseConfigurationItem>;
		UnprocessedResourceIdentifiers?: Array<AggregateResourceIdentifier>;
	}
	export interface BatchGetAggregateResourceConfigResponseFormProperties {
	}
	export function CreateBatchGetAggregateResourceConfigResponseFormGroup() {
		return new FormGroup<BatchGetAggregateResourceConfigResponseFormProperties>({
		});

	}


	/** The detailed configuration of a specified resource. */
	export interface BaseConfigurationItem {
		version?: string;
		accountId?: string;
		configurationItemCaptureTime?: Date;
		configurationItemStatus?: ConfigurationItemStatus;
		configurationStateId?: string;
		arn?: string;
		resourceType?: ResourceType;
		resourceId?: string;
		resourceName?: string;
		awsRegion?: string;
		availabilityZone?: string;
		resourceCreationTime?: Date;
		configuration?: string;
		supplementaryConfiguration?: SupplementaryConfiguration;
	}

	/** The detailed configuration of a specified resource. */
	export interface BaseConfigurationItemFormProperties {
		version: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
		configurationItemCaptureTime: FormControl<Date | null | undefined>,
		configurationItemStatus: FormControl<ConfigurationItemStatus | null | undefined>,
		configurationStateId: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
		availabilityZone: FormControl<string | null | undefined>,
		resourceCreationTime: FormControl<Date | null | undefined>,
		configuration: FormControl<string | null | undefined>,
	}
	export function CreateBaseConfigurationItemFormGroup() {
		return new FormGroup<BaseConfigurationItemFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
			configurationItemCaptureTime: new FormControl<Date | null | undefined>(undefined),
			configurationItemStatus: new FormControl<ConfigurationItemStatus | null | undefined>(undefined),
			configurationStateId: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
			availabilityZone: new FormControl<string | null | undefined>(undefined),
			resourceCreationTime: new FormControl<Date | null | undefined>(undefined),
			configuration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConfigurationItemStatus { OK = 'OK', ResourceDiscovered = 'ResourceDiscovered', ResourceNotRecorded = 'ResourceNotRecorded', ResourceDeleted = 'ResourceDeleted', ResourceDeletedNotRecorded = 'ResourceDeletedNotRecorded' }

	export enum ResourceType { 'AWS::EC2::CustomerGateway' = 'AWS::EC2::CustomerGateway', 'AWS::EC2::EIP' = 'AWS::EC2::EIP', 'AWS::EC2::Host' = 'AWS::EC2::Host', 'AWS::EC2::Instance' = 'AWS::EC2::Instance', 'AWS::EC2::InternetGateway' = 'AWS::EC2::InternetGateway', 'AWS::EC2::NetworkAcl' = 'AWS::EC2::NetworkAcl', 'AWS::EC2::NetworkInterface' = 'AWS::EC2::NetworkInterface', 'AWS::EC2::RouteTable' = 'AWS::EC2::RouteTable', 'AWS::EC2::SecurityGroup' = 'AWS::EC2::SecurityGroup', 'AWS::EC2::Subnet' = 'AWS::EC2::Subnet', 'AWS::CloudTrail::Trail' = 'AWS::CloudTrail::Trail', 'AWS::EC2::Volume' = 'AWS::EC2::Volume', 'AWS::EC2::VPC' = 'AWS::EC2::VPC', 'AWS::EC2::VPNConnection' = 'AWS::EC2::VPNConnection', 'AWS::EC2::VPNGateway' = 'AWS::EC2::VPNGateway', 'AWS::EC2::RegisteredHAInstance' = 'AWS::EC2::RegisteredHAInstance', 'AWS::EC2::NatGateway' = 'AWS::EC2::NatGateway', 'AWS::EC2::EgressOnlyInternetGateway' = 'AWS::EC2::EgressOnlyInternetGateway', 'AWS::EC2::VPCEndpoint' = 'AWS::EC2::VPCEndpoint', 'AWS::EC2::VPCEndpointService' = 'AWS::EC2::VPCEndpointService', 'AWS::EC2::FlowLog' = 'AWS::EC2::FlowLog', 'AWS::EC2::VPCPeeringConnection' = 'AWS::EC2::VPCPeeringConnection', 'AWS::Elasticsearch::Domain' = 'AWS::Elasticsearch::Domain', 'AWS::IAM::Group' = 'AWS::IAM::Group', 'AWS::IAM::Policy' = 'AWS::IAM::Policy', 'AWS::IAM::Role' = 'AWS::IAM::Role', 'AWS::IAM::User' = 'AWS::IAM::User', 'AWS::ElasticLoadBalancingV2::LoadBalancer' = 'AWS::ElasticLoadBalancingV2::LoadBalancer', 'AWS::ACM::Certificate' = 'AWS::ACM::Certificate', 'AWS::RDS::DBInstance' = 'AWS::RDS::DBInstance', 'AWS::RDS::DBSubnetGroup' = 'AWS::RDS::DBSubnetGroup', 'AWS::RDS::DBSecurityGroup' = 'AWS::RDS::DBSecurityGroup', 'AWS::RDS::DBSnapshot' = 'AWS::RDS::DBSnapshot', 'AWS::RDS::DBCluster' = 'AWS::RDS::DBCluster', 'AWS::RDS::DBClusterSnapshot' = 'AWS::RDS::DBClusterSnapshot', 'AWS::RDS::EventSubscription' = 'AWS::RDS::EventSubscription', 'AWS::S3::Bucket' = 'AWS::S3::Bucket', 'AWS::S3::AccountPublicAccessBlock' = 'AWS::S3::AccountPublicAccessBlock', 'AWS::Redshift::Cluster' = 'AWS::Redshift::Cluster', 'AWS::Redshift::ClusterSnapshot' = 'AWS::Redshift::ClusterSnapshot', 'AWS::Redshift::ClusterParameterGroup' = 'AWS::Redshift::ClusterParameterGroup', 'AWS::Redshift::ClusterSecurityGroup' = 'AWS::Redshift::ClusterSecurityGroup', 'AWS::Redshift::ClusterSubnetGroup' = 'AWS::Redshift::ClusterSubnetGroup', 'AWS::Redshift::EventSubscription' = 'AWS::Redshift::EventSubscription', 'AWS::SSM::ManagedInstanceInventory' = 'AWS::SSM::ManagedInstanceInventory', 'AWS::CloudWatch::Alarm' = 'AWS::CloudWatch::Alarm', 'AWS::CloudFormation::Stack' = 'AWS::CloudFormation::Stack', 'AWS::ElasticLoadBalancing::LoadBalancer' = 'AWS::ElasticLoadBalancing::LoadBalancer', 'AWS::AutoScaling::AutoScalingGroup' = 'AWS::AutoScaling::AutoScalingGroup', 'AWS::AutoScaling::LaunchConfiguration' = 'AWS::AutoScaling::LaunchConfiguration', 'AWS::AutoScaling::ScalingPolicy' = 'AWS::AutoScaling::ScalingPolicy', 'AWS::AutoScaling::ScheduledAction' = 'AWS::AutoScaling::ScheduledAction', 'AWS::DynamoDB::Table' = 'AWS::DynamoDB::Table', 'AWS::CodeBuild::Project' = 'AWS::CodeBuild::Project', 'AWS::WAF::RateBasedRule' = 'AWS::WAF::RateBasedRule', 'AWS::WAF::Rule' = 'AWS::WAF::Rule', 'AWS::WAF::RuleGroup' = 'AWS::WAF::RuleGroup', 'AWS::WAF::WebACL' = 'AWS::WAF::WebACL', 'AWS::WAFRegional::RateBasedRule' = 'AWS::WAFRegional::RateBasedRule', 'AWS::WAFRegional::Rule' = 'AWS::WAFRegional::Rule', 'AWS::WAFRegional::RuleGroup' = 'AWS::WAFRegional::RuleGroup', 'AWS::WAFRegional::WebACL' = 'AWS::WAFRegional::WebACL', 'AWS::CloudFront::Distribution' = 'AWS::CloudFront::Distribution', 'AWS::CloudFront::StreamingDistribution' = 'AWS::CloudFront::StreamingDistribution', 'AWS::Lambda::Function' = 'AWS::Lambda::Function', 'AWS::NetworkFirewall::Firewall' = 'AWS::NetworkFirewall::Firewall', 'AWS::NetworkFirewall::FirewallPolicy' = 'AWS::NetworkFirewall::FirewallPolicy', 'AWS::NetworkFirewall::RuleGroup' = 'AWS::NetworkFirewall::RuleGroup', 'AWS::ElasticBeanstalk::Application' = 'AWS::ElasticBeanstalk::Application', 'AWS::ElasticBeanstalk::ApplicationVersion' = 'AWS::ElasticBeanstalk::ApplicationVersion', 'AWS::ElasticBeanstalk::Environment' = 'AWS::ElasticBeanstalk::Environment', 'AWS::WAFv2::WebACL' = 'AWS::WAFv2::WebACL', 'AWS::WAFv2::RuleGroup' = 'AWS::WAFv2::RuleGroup', 'AWS::WAFv2::IPSet' = 'AWS::WAFv2::IPSet', 'AWS::WAFv2::RegexPatternSet' = 'AWS::WAFv2::RegexPatternSet', 'AWS::WAFv2::ManagedRuleSet' = 'AWS::WAFv2::ManagedRuleSet', 'AWS::XRay::EncryptionConfig' = 'AWS::XRay::EncryptionConfig', 'AWS::SSM::AssociationCompliance' = 'AWS::SSM::AssociationCompliance', 'AWS::SSM::PatchCompliance' = 'AWS::SSM::PatchCompliance', 'AWS::Shield::Protection' = 'AWS::Shield::Protection', 'AWS::ShieldRegional::Protection' = 'AWS::ShieldRegional::Protection', 'AWS::Config::ConformancePackCompliance' = 'AWS::Config::ConformancePackCompliance', 'AWS::Config::ResourceCompliance' = 'AWS::Config::ResourceCompliance', 'AWS::ApiGateway::Stage' = 'AWS::ApiGateway::Stage', 'AWS::ApiGateway::RestApi' = 'AWS::ApiGateway::RestApi', 'AWS::ApiGatewayV2::Stage' = 'AWS::ApiGatewayV2::Stage', 'AWS::ApiGatewayV2::Api' = 'AWS::ApiGatewayV2::Api', 'AWS::CodePipeline::Pipeline' = 'AWS::CodePipeline::Pipeline', 'AWS::ServiceCatalog::CloudFormationProvisionedProduct' = 'AWS::ServiceCatalog::CloudFormationProvisionedProduct', 'AWS::ServiceCatalog::CloudFormationProduct' = 'AWS::ServiceCatalog::CloudFormationProduct', 'AWS::ServiceCatalog::Portfolio' = 'AWS::ServiceCatalog::Portfolio', 'AWS::SQS::Queue' = 'AWS::SQS::Queue', 'AWS::KMS::Key' = 'AWS::KMS::Key', 'AWS::QLDB::Ledger' = 'AWS::QLDB::Ledger', 'AWS::SecretsManager::Secret' = 'AWS::SecretsManager::Secret', 'AWS::SNS::Topic' = 'AWS::SNS::Topic', 'AWS::SSM::FileData' = 'AWS::SSM::FileData', 'AWS::Backup::BackupPlan' = 'AWS::Backup::BackupPlan', 'AWS::Backup::BackupSelection' = 'AWS::Backup::BackupSelection', 'AWS::Backup::BackupVault' = 'AWS::Backup::BackupVault', 'AWS::Backup::RecoveryPoint' = 'AWS::Backup::RecoveryPoint', 'AWS::ECR::Repository' = 'AWS::ECR::Repository', 'AWS::ECS::Cluster' = 'AWS::ECS::Cluster', 'AWS::ECS::Service' = 'AWS::ECS::Service', 'AWS::ECS::TaskDefinition' = 'AWS::ECS::TaskDefinition', 'AWS::EFS::AccessPoint' = 'AWS::EFS::AccessPoint', 'AWS::EFS::FileSystem' = 'AWS::EFS::FileSystem', 'AWS::EKS::Cluster' = 'AWS::EKS::Cluster', 'AWS::OpenSearch::Domain' = 'AWS::OpenSearch::Domain', 'AWS::EC2::TransitGateway' = 'AWS::EC2::TransitGateway', 'AWS::Kinesis::Stream' = 'AWS::Kinesis::Stream', 'AWS::Kinesis::StreamConsumer' = 'AWS::Kinesis::StreamConsumer', 'AWS::CodeDeploy::Application' = 'AWS::CodeDeploy::Application', 'AWS::CodeDeploy::DeploymentConfig' = 'AWS::CodeDeploy::DeploymentConfig', 'AWS::CodeDeploy::DeploymentGroup' = 'AWS::CodeDeploy::DeploymentGroup', 'AWS::EC2::LaunchTemplate' = 'AWS::EC2::LaunchTemplate', 'AWS::ECR::PublicRepository' = 'AWS::ECR::PublicRepository', 'AWS::GuardDuty::Detector' = 'AWS::GuardDuty::Detector', 'AWS::EMR::SecurityConfiguration' = 'AWS::EMR::SecurityConfiguration', 'AWS::SageMaker::CodeRepository' = 'AWS::SageMaker::CodeRepository', 'AWS::Route53Resolver::ResolverEndpoint' = 'AWS::Route53Resolver::ResolverEndpoint', 'AWS::Route53Resolver::ResolverRule' = 'AWS::Route53Resolver::ResolverRule', 'AWS::Route53Resolver::ResolverRuleAssociation' = 'AWS::Route53Resolver::ResolverRuleAssociation', 'AWS::DMS::ReplicationSubnetGroup' = 'AWS::DMS::ReplicationSubnetGroup', 'AWS::DMS::EventSubscription' = 'AWS::DMS::EventSubscription', 'AWS::MSK::Cluster' = 'AWS::MSK::Cluster', 'AWS::StepFunctions::Activity' = 'AWS::StepFunctions::Activity', 'AWS::WorkSpaces::Workspace' = 'AWS::WorkSpaces::Workspace', 'AWS::WorkSpaces::ConnectionAlias' = 'AWS::WorkSpaces::ConnectionAlias', 'AWS::SageMaker::Model' = 'AWS::SageMaker::Model', 'AWS::ElasticLoadBalancingV2::Listener' = 'AWS::ElasticLoadBalancingV2::Listener', 'AWS::StepFunctions::StateMachine' = 'AWS::StepFunctions::StateMachine', 'AWS::Batch::JobQueue' = 'AWS::Batch::JobQueue', 'AWS::Batch::ComputeEnvironment' = 'AWS::Batch::ComputeEnvironment', 'AWS::AccessAnalyzer::Analyzer' = 'AWS::AccessAnalyzer::Analyzer', 'AWS::Athena::WorkGroup' = 'AWS::Athena::WorkGroup', 'AWS::Athena::DataCatalog' = 'AWS::Athena::DataCatalog', 'AWS::Detective::Graph' = 'AWS::Detective::Graph', 'AWS::GlobalAccelerator::Accelerator' = 'AWS::GlobalAccelerator::Accelerator', 'AWS::GlobalAccelerator::EndpointGroup' = 'AWS::GlobalAccelerator::EndpointGroup', 'AWS::GlobalAccelerator::Listener' = 'AWS::GlobalAccelerator::Listener', 'AWS::EC2::TransitGatewayAttachment' = 'AWS::EC2::TransitGatewayAttachment', 'AWS::EC2::TransitGatewayRouteTable' = 'AWS::EC2::TransitGatewayRouteTable', 'AWS::DMS::Certificate' = 'AWS::DMS::Certificate', 'AWS::AppConfig::Application' = 'AWS::AppConfig::Application', 'AWS::AppSync::GraphQLApi' = 'AWS::AppSync::GraphQLApi', 'AWS::DataSync::LocationSMB' = 'AWS::DataSync::LocationSMB', 'AWS::DataSync::LocationFSxLustre' = 'AWS::DataSync::LocationFSxLustre', 'AWS::DataSync::LocationS3' = 'AWS::DataSync::LocationS3', 'AWS::DataSync::LocationEFS' = 'AWS::DataSync::LocationEFS', 'AWS::DataSync::Task' = 'AWS::DataSync::Task', 'AWS::DataSync::LocationNFS' = 'AWS::DataSync::LocationNFS', 'AWS::EC2::NetworkInsightsAccessScopeAnalysis' = 'AWS::EC2::NetworkInsightsAccessScopeAnalysis', 'AWS::EKS::FargateProfile' = 'AWS::EKS::FargateProfile', 'AWS::Glue::Job' = 'AWS::Glue::Job', 'AWS::GuardDuty::ThreatIntelSet' = 'AWS::GuardDuty::ThreatIntelSet', 'AWS::GuardDuty::IPSet' = 'AWS::GuardDuty::IPSet', 'AWS::SageMaker::Workteam' = 'AWS::SageMaker::Workteam', 'AWS::SageMaker::NotebookInstanceLifecycleConfig' = 'AWS::SageMaker::NotebookInstanceLifecycleConfig', 'AWS::ServiceDiscovery::Service' = 'AWS::ServiceDiscovery::Service', 'AWS::ServiceDiscovery::PublicDnsNamespace' = 'AWS::ServiceDiscovery::PublicDnsNamespace', 'AWS::SES::ContactList' = 'AWS::SES::ContactList', 'AWS::SES::ConfigurationSet' = 'AWS::SES::ConfigurationSet', 'AWS::Route53::HostedZone' = 'AWS::Route53::HostedZone', 'AWS::IoTEvents::Input' = 'AWS::IoTEvents::Input', 'AWS::IoTEvents::DetectorModel' = 'AWS::IoTEvents::DetectorModel', 'AWS::IoTEvents::AlarmModel' = 'AWS::IoTEvents::AlarmModel', 'AWS::ServiceDiscovery::HttpNamespace' = 'AWS::ServiceDiscovery::HttpNamespace', 'AWS::Events::EventBus' = 'AWS::Events::EventBus', 'AWS::ImageBuilder::ContainerRecipe' = 'AWS::ImageBuilder::ContainerRecipe', 'AWS::ImageBuilder::DistributionConfiguration' = 'AWS::ImageBuilder::DistributionConfiguration', 'AWS::ImageBuilder::InfrastructureConfiguration' = 'AWS::ImageBuilder::InfrastructureConfiguration', 'AWS::DataSync::LocationObjectStorage' = 'AWS::DataSync::LocationObjectStorage', 'AWS::DataSync::LocationHDFS' = 'AWS::DataSync::LocationHDFS', 'AWS::Glue::Classifier' = 'AWS::Glue::Classifier', 'AWS::Route53RecoveryReadiness::Cell' = 'AWS::Route53RecoveryReadiness::Cell', 'AWS::Route53RecoveryReadiness::ReadinessCheck' = 'AWS::Route53RecoveryReadiness::ReadinessCheck', 'AWS::ECR::RegistryPolicy' = 'AWS::ECR::RegistryPolicy', 'AWS::Backup::ReportPlan' = 'AWS::Backup::ReportPlan', 'AWS::Lightsail::Certificate' = 'AWS::Lightsail::Certificate', 'AWS::RUM::AppMonitor' = 'AWS::RUM::AppMonitor', 'AWS::Events::Endpoint' = 'AWS::Events::Endpoint', 'AWS::SES::ReceiptRuleSet' = 'AWS::SES::ReceiptRuleSet', 'AWS::Events::Archive' = 'AWS::Events::Archive', 'AWS::Events::ApiDestination' = 'AWS::Events::ApiDestination', 'AWS::Lightsail::Disk' = 'AWS::Lightsail::Disk', 'AWS::FIS::ExperimentTemplate' = 'AWS::FIS::ExperimentTemplate', 'AWS::DataSync::LocationFSxWindows' = 'AWS::DataSync::LocationFSxWindows', 'AWS::SES::ReceiptFilter' = 'AWS::SES::ReceiptFilter', 'AWS::GuardDuty::Filter' = 'AWS::GuardDuty::Filter', 'AWS::SES::Template' = 'AWS::SES::Template', 'AWS::AmazonMQ::Broker' = 'AWS::AmazonMQ::Broker', 'AWS::AppConfig::Environment' = 'AWS::AppConfig::Environment', 'AWS::AppConfig::ConfigurationProfile' = 'AWS::AppConfig::ConfigurationProfile', 'AWS::Cloud9::EnvironmentEC2' = 'AWS::Cloud9::EnvironmentEC2', 'AWS::EventSchemas::Registry' = 'AWS::EventSchemas::Registry', 'AWS::EventSchemas::RegistryPolicy' = 'AWS::EventSchemas::RegistryPolicy', 'AWS::EventSchemas::Discoverer' = 'AWS::EventSchemas::Discoverer', 'AWS::FraudDetector::Label' = 'AWS::FraudDetector::Label', 'AWS::FraudDetector::EntityType' = 'AWS::FraudDetector::EntityType', 'AWS::FraudDetector::Variable' = 'AWS::FraudDetector::Variable', 'AWS::FraudDetector::Outcome' = 'AWS::FraudDetector::Outcome', 'AWS::IoT::Authorizer' = 'AWS::IoT::Authorizer', 'AWS::IoT::SecurityProfile' = 'AWS::IoT::SecurityProfile', 'AWS::IoT::RoleAlias' = 'AWS::IoT::RoleAlias', 'AWS::IoT::Dimension' = 'AWS::IoT::Dimension', 'AWS::IoTAnalytics::Datastore' = 'AWS::IoTAnalytics::Datastore', 'AWS::Lightsail::Bucket' = 'AWS::Lightsail::Bucket', 'AWS::Lightsail::StaticIp' = 'AWS::Lightsail::StaticIp', 'AWS::MediaPackage::PackagingGroup' = 'AWS::MediaPackage::PackagingGroup', 'AWS::Route53RecoveryReadiness::RecoveryGroup' = 'AWS::Route53RecoveryReadiness::RecoveryGroup', 'AWS::ResilienceHub::ResiliencyPolicy' = 'AWS::ResilienceHub::ResiliencyPolicy', 'AWS::Transfer::Workflow' = 'AWS::Transfer::Workflow', 'AWS::EKS::IdentityProviderConfig' = 'AWS::EKS::IdentityProviderConfig', 'AWS::EKS::Addon' = 'AWS::EKS::Addon', 'AWS::Glue::MLTransform' = 'AWS::Glue::MLTransform', 'AWS::IoT::Policy' = 'AWS::IoT::Policy', 'AWS::IoT::MitigationAction' = 'AWS::IoT::MitigationAction', 'AWS::IoTTwinMaker::Workspace' = 'AWS::IoTTwinMaker::Workspace', 'AWS::IoTTwinMaker::Entity' = 'AWS::IoTTwinMaker::Entity', 'AWS::IoTAnalytics::Dataset' = 'AWS::IoTAnalytics::Dataset', 'AWS::IoTAnalytics::Pipeline' = 'AWS::IoTAnalytics::Pipeline', 'AWS::IoTAnalytics::Channel' = 'AWS::IoTAnalytics::Channel', 'AWS::IoTSiteWise::Dashboard' = 'AWS::IoTSiteWise::Dashboard', 'AWS::IoTSiteWise::Project' = 'AWS::IoTSiteWise::Project', 'AWS::IoTSiteWise::Portal' = 'AWS::IoTSiteWise::Portal', 'AWS::IoTSiteWise::AssetModel' = 'AWS::IoTSiteWise::AssetModel', 'AWS::IVS::Channel' = 'AWS::IVS::Channel', 'AWS::IVS::RecordingConfiguration' = 'AWS::IVS::RecordingConfiguration', 'AWS::IVS::PlaybackKeyPair' = 'AWS::IVS::PlaybackKeyPair', 'AWS::KinesisAnalyticsV2::Application' = 'AWS::KinesisAnalyticsV2::Application', 'AWS::RDS::GlobalCluster' = 'AWS::RDS::GlobalCluster', 'AWS::S3::MultiRegionAccessPoint' = 'AWS::S3::MultiRegionAccessPoint', 'AWS::DeviceFarm::TestGridProject' = 'AWS::DeviceFarm::TestGridProject', 'AWS::Budgets::BudgetsAction' = 'AWS::Budgets::BudgetsAction', 'AWS::Lex::Bot' = 'AWS::Lex::Bot', 'AWS::CodeGuruReviewer::RepositoryAssociation' = 'AWS::CodeGuruReviewer::RepositoryAssociation', 'AWS::IoT::CustomMetric' = 'AWS::IoT::CustomMetric', 'AWS::Route53Resolver::FirewallDomainList' = 'AWS::Route53Resolver::FirewallDomainList', 'AWS::RoboMaker::RobotApplicationVersion' = 'AWS::RoboMaker::RobotApplicationVersion', 'AWS::EC2::TrafficMirrorSession' = 'AWS::EC2::TrafficMirrorSession', 'AWS::IoTSiteWise::Gateway' = 'AWS::IoTSiteWise::Gateway', 'AWS::Lex::BotAlias' = 'AWS::Lex::BotAlias', 'AWS::LookoutMetrics::Alert' = 'AWS::LookoutMetrics::Alert', 'AWS::IoT::AccountAuditConfiguration' = 'AWS::IoT::AccountAuditConfiguration', 'AWS::EC2::TrafficMirrorTarget' = 'AWS::EC2::TrafficMirrorTarget', 'AWS::S3::StorageLens' = 'AWS::S3::StorageLens', 'AWS::IoT::ScheduledAudit' = 'AWS::IoT::ScheduledAudit', 'AWS::Events::Connection' = 'AWS::Events::Connection', 'AWS::EventSchemas::Schema' = 'AWS::EventSchemas::Schema', 'AWS::MediaPackage::PackagingConfiguration' = 'AWS::MediaPackage::PackagingConfiguration', 'AWS::KinesisVideo::SignalingChannel' = 'AWS::KinesisVideo::SignalingChannel', 'AWS::AppStream::DirectoryConfig' = 'AWS::AppStream::DirectoryConfig', 'AWS::LookoutVision::Project' = 'AWS::LookoutVision::Project', 'AWS::Route53RecoveryControl::Cluster' = 'AWS::Route53RecoveryControl::Cluster', 'AWS::Route53RecoveryControl::SafetyRule' = 'AWS::Route53RecoveryControl::SafetyRule', 'AWS::Route53RecoveryControl::ControlPanel' = 'AWS::Route53RecoveryControl::ControlPanel', 'AWS::Route53RecoveryControl::RoutingControl' = 'AWS::Route53RecoveryControl::RoutingControl', 'AWS::Route53RecoveryReadiness::ResourceSet' = 'AWS::Route53RecoveryReadiness::ResourceSet', 'AWS::RoboMaker::SimulationApplication' = 'AWS::RoboMaker::SimulationApplication', 'AWS::RoboMaker::RobotApplication' = 'AWS::RoboMaker::RobotApplication', 'AWS::HealthLake::FHIRDatastore' = 'AWS::HealthLake::FHIRDatastore', 'AWS::Pinpoint::Segment' = 'AWS::Pinpoint::Segment', 'AWS::Pinpoint::ApplicationSettings' = 'AWS::Pinpoint::ApplicationSettings', 'AWS::Events::Rule' = 'AWS::Events::Rule', 'AWS::EC2::DHCPOptions' = 'AWS::EC2::DHCPOptions', 'AWS::EC2::NetworkInsightsPath' = 'AWS::EC2::NetworkInsightsPath', 'AWS::EC2::TrafficMirrorFilter' = 'AWS::EC2::TrafficMirrorFilter', 'AWS::EC2::IPAM' = 'AWS::EC2::IPAM', 'AWS::IoTTwinMaker::Scene' = 'AWS::IoTTwinMaker::Scene', 'AWS::NetworkManager::TransitGatewayRegistration' = 'AWS::NetworkManager::TransitGatewayRegistration', 'AWS::CustomerProfiles::Domain' = 'AWS::CustomerProfiles::Domain', 'AWS::AutoScaling::WarmPool' = 'AWS::AutoScaling::WarmPool', 'AWS::Connect::PhoneNumber' = 'AWS::Connect::PhoneNumber', 'AWS::AppConfig::DeploymentStrategy' = 'AWS::AppConfig::DeploymentStrategy', 'AWS::AppFlow::Flow' = 'AWS::AppFlow::Flow', 'AWS::AuditManager::Assessment' = 'AWS::AuditManager::Assessment', 'AWS::CloudWatch::MetricStream' = 'AWS::CloudWatch::MetricStream', 'AWS::DeviceFarm::InstanceProfile' = 'AWS::DeviceFarm::InstanceProfile', 'AWS::DeviceFarm::Project' = 'AWS::DeviceFarm::Project', 'AWS::EC2::EC2Fleet' = 'AWS::EC2::EC2Fleet', 'AWS::EC2::SubnetRouteTableAssociation' = 'AWS::EC2::SubnetRouteTableAssociation', 'AWS::ECR::PullThroughCacheRule' = 'AWS::ECR::PullThroughCacheRule', 'AWS::GroundStation::Config' = 'AWS::GroundStation::Config', 'AWS::ImageBuilder::ImagePipeline' = 'AWS::ImageBuilder::ImagePipeline', 'AWS::IoT::FleetMetric' = 'AWS::IoT::FleetMetric', 'AWS::IoTWireless::ServiceProfile' = 'AWS::IoTWireless::ServiceProfile', 'AWS::NetworkManager::Device' = 'AWS::NetworkManager::Device', 'AWS::NetworkManager::GlobalNetwork' = 'AWS::NetworkManager::GlobalNetwork', 'AWS::NetworkManager::Link' = 'AWS::NetworkManager::Link', 'AWS::NetworkManager::Site' = 'AWS::NetworkManager::Site', 'AWS::Panorama::Package' = 'AWS::Panorama::Package', 'AWS::Pinpoint::App' = 'AWS::Pinpoint::App', 'AWS::Redshift::ScheduledAction' = 'AWS::Redshift::ScheduledAction', 'AWS::Route53Resolver::FirewallRuleGroupAssociation' = 'AWS::Route53Resolver::FirewallRuleGroupAssociation', 'AWS::SageMaker::AppImageConfig' = 'AWS::SageMaker::AppImageConfig', 'AWS::SageMaker::Image' = 'AWS::SageMaker::Image', 'AWS::ECS::TaskSet' = 'AWS::ECS::TaskSet', 'AWS::Cassandra::Keyspace' = 'AWS::Cassandra::Keyspace', 'AWS::Signer::SigningProfile' = 'AWS::Signer::SigningProfile', 'AWS::Amplify::App' = 'AWS::Amplify::App', 'AWS::AppMesh::VirtualNode' = 'AWS::AppMesh::VirtualNode', 'AWS::AppMesh::VirtualService' = 'AWS::AppMesh::VirtualService', 'AWS::AppRunner::VpcConnector' = 'AWS::AppRunner::VpcConnector', 'AWS::AppStream::Application' = 'AWS::AppStream::Application', 'AWS::CodeArtifact::Repository' = 'AWS::CodeArtifact::Repository', 'AWS::EC2::PrefixList' = 'AWS::EC2::PrefixList', 'AWS::EC2::SpotFleet' = 'AWS::EC2::SpotFleet', 'AWS::Evidently::Project' = 'AWS::Evidently::Project', 'AWS::Forecast::Dataset' = 'AWS::Forecast::Dataset', 'AWS::IAM::SAMLProvider' = 'AWS::IAM::SAMLProvider', 'AWS::IAM::ServerCertificate' = 'AWS::IAM::ServerCertificate', 'AWS::Pinpoint::Campaign' = 'AWS::Pinpoint::Campaign', 'AWS::Pinpoint::InAppTemplate' = 'AWS::Pinpoint::InAppTemplate', 'AWS::SageMaker::Domain' = 'AWS::SageMaker::Domain', 'AWS::Transfer::Agreement' = 'AWS::Transfer::Agreement', 'AWS::Transfer::Connector' = 'AWS::Transfer::Connector', 'AWS::KinesisFirehose::DeliveryStream' = 'AWS::KinesisFirehose::DeliveryStream' }

	export interface SupplementaryConfiguration {
	}
	export interface SupplementaryConfigurationFormProperties {
	}
	export function CreateSupplementaryConfigurationFormGroup() {
		return new FormGroup<SupplementaryConfigurationFormProperties>({
		});

	}


	/** The details that identify a resource that is collected by Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region. */
	export interface AggregateResourceIdentifier {

		/** Required */
		SourceAccountId: string;

		/** Required */
		SourceRegion: string;

		/** Required */
		ResourceId: string;

		/** Required */
		ResourceType: ResourceType;
		ResourceName?: string;
	}

	/** The details that identify a resource that is collected by Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region. */
	export interface AggregateResourceIdentifierFormProperties {

		/** Required */
		SourceAccountId: FormControl<string | null | undefined>,

		/** Required */
		SourceRegion: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<ResourceType | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateAggregateResourceIdentifierFormGroup() {
		return new FormGroup<AggregateResourceIdentifierFormProperties>({
			SourceAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetAggregateResourceConfigRequest {

		/** Required */
		ConfigurationAggregatorName: string;

		/** Required */
		ResourceIdentifiers: Array<AggregateResourceIdentifier>;
	}
	export interface BatchGetAggregateResourceConfigRequestFormProperties {

		/** Required */
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetAggregateResourceConfigRequestFormGroup() {
		return new FormGroup<BatchGetAggregateResourceConfigRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface NoSuchConfigurationAggregatorException {
	}
	export interface NoSuchConfigurationAggregatorExceptionFormProperties {
	}
	export function CreateNoSuchConfigurationAggregatorExceptionFormGroup() {
		return new FormGroup<NoSuchConfigurationAggregatorExceptionFormProperties>({
		});

	}

	export interface BatchGetResourceConfigResponse {
		baseConfigurationItems?: Array<BaseConfigurationItem>;
		unprocessedResourceKeys?: Array<ResourceKey>;
	}
	export interface BatchGetResourceConfigResponseFormProperties {
	}
	export function CreateBatchGetResourceConfigResponseFormGroup() {
		return new FormGroup<BatchGetResourceConfigResponseFormProperties>({
		});

	}


	/** The details that identify a resource within Config, including the resource type and resource ID. */
	export interface ResourceKey {

		/** Required */
		resourceType: ResourceType;

		/** Required */
		resourceId: string;
	}

	/** The details that identify a resource within Config, including the resource type and resource ID. */
	export interface ResourceKeyFormProperties {

		/** Required */
		resourceType: FormControl<ResourceType | null | undefined>,

		/** Required */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateResourceKeyFormGroup() {
		return new FormGroup<ResourceKeyFormProperties>({
			resourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchGetResourceConfigRequest {

		/** Required */
		resourceKeys: Array<ResourceKey>;
	}
	export interface BatchGetResourceConfigRequestFormProperties {
	}
	export function CreateBatchGetResourceConfigRequestFormGroup() {
		return new FormGroup<BatchGetResourceConfigRequestFormProperties>({
		});

	}

	export interface NoAvailableConfigurationRecorderException {
	}
	export interface NoAvailableConfigurationRecorderExceptionFormProperties {
	}
	export function CreateNoAvailableConfigurationRecorderExceptionFormGroup() {
		return new FormGroup<NoAvailableConfigurationRecorderExceptionFormProperties>({
		});

	}

	export interface DeleteAggregationAuthorizationRequest {

		/** Required */
		AuthorizedAccountId: string;

		/** Required */
		AuthorizedAwsRegion: string;
	}
	export interface DeleteAggregationAuthorizationRequestFormProperties {

		/** Required */
		AuthorizedAccountId: FormControl<string | null | undefined>,

		/** Required */
		AuthorizedAwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAggregationAuthorizationRequestFormGroup() {
		return new FormGroup<DeleteAggregationAuthorizationRequestFormProperties>({
			AuthorizedAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthorizedAwsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidParameterValueException {
	}
	export interface InvalidParameterValueExceptionFormProperties {
	}
	export function CreateInvalidParameterValueExceptionFormGroup() {
		return new FormGroup<InvalidParameterValueExceptionFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteConfigRuleRequest {

		/** Required */
		ConfigRuleName: string;
	}

	/** <p/> */
	export interface DeleteConfigRuleRequestFormProperties {

		/** Required */
		ConfigRuleName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConfigRuleRequestFormGroup() {
		return new FormGroup<DeleteConfigRuleRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NoSuchConfigRuleException {
	}
	export interface NoSuchConfigRuleExceptionFormProperties {
	}
	export function CreateNoSuchConfigRuleExceptionFormGroup() {
		return new FormGroup<NoSuchConfigRuleExceptionFormProperties>({
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

	export interface DeleteConfigurationAggregatorRequest {

		/** Required */
		ConfigurationAggregatorName: string;
	}
	export interface DeleteConfigurationAggregatorRequestFormProperties {

		/** Required */
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConfigurationAggregatorRequestFormGroup() {
		return new FormGroup<DeleteConfigurationAggregatorRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request object for the <code>DeleteConfigurationRecorder</code> action. */
	export interface DeleteConfigurationRecorderRequest {

		/** Required */
		ConfigurationRecorderName: string;
	}

	/** The request object for the <code>DeleteConfigurationRecorder</code> action. */
	export interface DeleteConfigurationRecorderRequestFormProperties {

		/** Required */
		ConfigurationRecorderName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConfigurationRecorderRequestFormGroup() {
		return new FormGroup<DeleteConfigurationRecorderRequestFormProperties>({
			ConfigurationRecorderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NoSuchConfigurationRecorderException {
	}
	export interface NoSuchConfigurationRecorderExceptionFormProperties {
	}
	export function CreateNoSuchConfigurationRecorderExceptionFormGroup() {
		return new FormGroup<NoSuchConfigurationRecorderExceptionFormProperties>({
		});

	}

	export interface DeleteConformancePackRequest {

		/** Required */
		ConformancePackName: string;
	}
	export interface DeleteConformancePackRequestFormProperties {

		/** Required */
		ConformancePackName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConformancePackRequestFormGroup() {
		return new FormGroup<DeleteConformancePackRequestFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NoSuchConformancePackException {
	}
	export interface NoSuchConformancePackExceptionFormProperties {
	}
	export function CreateNoSuchConformancePackExceptionFormGroup() {
		return new FormGroup<NoSuchConformancePackExceptionFormProperties>({
		});

	}


	/** The input for the <a>DeleteDeliveryChannel</a> action. The action accepts the following data, in JSON format.  */
	export interface DeleteDeliveryChannelRequest {

		/** Required */
		DeliveryChannelName: string;
	}

	/** The input for the <a>DeleteDeliveryChannel</a> action. The action accepts the following data, in JSON format.  */
	export interface DeleteDeliveryChannelRequestFormProperties {

		/** Required */
		DeliveryChannelName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDeliveryChannelRequestFormGroup() {
		return new FormGroup<DeleteDeliveryChannelRequestFormProperties>({
			DeliveryChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NoSuchDeliveryChannelException {
	}
	export interface NoSuchDeliveryChannelExceptionFormProperties {
	}
	export function CreateNoSuchDeliveryChannelExceptionFormGroup() {
		return new FormGroup<NoSuchDeliveryChannelExceptionFormProperties>({
		});

	}

	export interface LastDeliveryChannelDeleteFailedException {
	}
	export interface LastDeliveryChannelDeleteFailedExceptionFormProperties {
	}
	export function CreateLastDeliveryChannelDeleteFailedExceptionFormGroup() {
		return new FormGroup<LastDeliveryChannelDeleteFailedExceptionFormProperties>({
		});

	}


	/** The output when you delete the evaluation results for the specified Config rule. */
	export interface DeleteEvaluationResultsResponse {
	}

	/** The output when you delete the evaluation results for the specified Config rule. */
	export interface DeleteEvaluationResultsResponseFormProperties {
	}
	export function CreateDeleteEvaluationResultsResponseFormGroup() {
		return new FormGroup<DeleteEvaluationResultsResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteEvaluationResultsRequest {

		/** Required */
		ConfigRuleName: string;
	}

	/** <p/> */
	export interface DeleteEvaluationResultsRequestFormProperties {

		/** Required */
		ConfigRuleName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEvaluationResultsRequestFormGroup() {
		return new FormGroup<DeleteEvaluationResultsRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteOrganizationConfigRuleRequest {

		/** Required */
		OrganizationConfigRuleName: string;
	}
	export interface DeleteOrganizationConfigRuleRequestFormProperties {

		/** Required */
		OrganizationConfigRuleName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteOrganizationConfigRuleRequestFormGroup() {
		return new FormGroup<DeleteOrganizationConfigRuleRequestFormProperties>({
			OrganizationConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NoSuchOrganizationConfigRuleException {
	}
	export interface NoSuchOrganizationConfigRuleExceptionFormProperties {
	}
	export function CreateNoSuchOrganizationConfigRuleExceptionFormGroup() {
		return new FormGroup<NoSuchOrganizationConfigRuleExceptionFormProperties>({
		});

	}

	export interface OrganizationAccessDeniedException {
	}
	export interface OrganizationAccessDeniedExceptionFormProperties {
	}
	export function CreateOrganizationAccessDeniedExceptionFormGroup() {
		return new FormGroup<OrganizationAccessDeniedExceptionFormProperties>({
		});

	}

	export interface DeleteOrganizationConformancePackRequest {

		/** Required */
		OrganizationConformancePackName: string;
	}
	export interface DeleteOrganizationConformancePackRequestFormProperties {

		/** Required */
		OrganizationConformancePackName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteOrganizationConformancePackRequestFormGroup() {
		return new FormGroup<DeleteOrganizationConformancePackRequestFormProperties>({
			OrganizationConformancePackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NoSuchOrganizationConformancePackException {
	}
	export interface NoSuchOrganizationConformancePackExceptionFormProperties {
	}
	export function CreateNoSuchOrganizationConformancePackExceptionFormGroup() {
		return new FormGroup<NoSuchOrganizationConformancePackExceptionFormProperties>({
		});

	}

	export interface DeletePendingAggregationRequestRequest {

		/** Required */
		RequesterAccountId: string;

		/** Required */
		RequesterAwsRegion: string;
	}
	export interface DeletePendingAggregationRequestRequestFormProperties {

		/** Required */
		RequesterAccountId: FormControl<string | null | undefined>,

		/** Required */
		RequesterAwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateDeletePendingAggregationRequestRequestFormGroup() {
		return new FormGroup<DeletePendingAggregationRequestRequestFormProperties>({
			RequesterAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RequesterAwsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRemediationConfigurationResponse {
	}
	export interface DeleteRemediationConfigurationResponseFormProperties {
	}
	export function CreateDeleteRemediationConfigurationResponseFormGroup() {
		return new FormGroup<DeleteRemediationConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteRemediationConfigurationRequest {

		/** Required */
		ConfigRuleName: string;
		ResourceType?: string;
	}
	export interface DeleteRemediationConfigurationRequestFormProperties {

		/** Required */
		ConfigRuleName: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRemediationConfigurationRequestFormGroup() {
		return new FormGroup<DeleteRemediationConfigurationRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NoSuchRemediationConfigurationException {
	}
	export interface NoSuchRemediationConfigurationExceptionFormProperties {
	}
	export function CreateNoSuchRemediationConfigurationExceptionFormGroup() {
		return new FormGroup<NoSuchRemediationConfigurationExceptionFormProperties>({
		});

	}

	export interface RemediationInProgressException {
	}
	export interface RemediationInProgressExceptionFormProperties {
	}
	export function CreateRemediationInProgressExceptionFormGroup() {
		return new FormGroup<RemediationInProgressExceptionFormProperties>({
		});

	}

	export interface InsufficientPermissionsException {
	}
	export interface InsufficientPermissionsExceptionFormProperties {
	}
	export function CreateInsufficientPermissionsExceptionFormGroup() {
		return new FormGroup<InsufficientPermissionsExceptionFormProperties>({
		});

	}

	export interface DeleteRemediationExceptionsResponse {
		FailedBatches?: Array<FailedDeleteRemediationExceptionsBatch>;
	}
	export interface DeleteRemediationExceptionsResponseFormProperties {
	}
	export function CreateDeleteRemediationExceptionsResponseFormGroup() {
		return new FormGroup<DeleteRemediationExceptionsResponseFormProperties>({
		});

	}


	/** List of each of the failed delete remediation exceptions with specific reasons. */
	export interface FailedDeleteRemediationExceptionsBatch {
		FailureMessage?: string;
		FailedItems?: Array<RemediationExceptionResourceKey>;
	}

	/** List of each of the failed delete remediation exceptions with specific reasons. */
	export interface FailedDeleteRemediationExceptionsBatchFormProperties {
		FailureMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailedDeleteRemediationExceptionsBatchFormGroup() {
		return new FormGroup<FailedDeleteRemediationExceptionsBatchFormProperties>({
			FailureMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details that identify a resource within Config, including the resource type and resource ID.  */
	export interface RemediationExceptionResourceKey {
		ResourceType?: string;
		ResourceId?: string;
	}

	/** The details that identify a resource within Config, including the resource type and resource ID.  */
	export interface RemediationExceptionResourceKeyFormProperties {
		ResourceType: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateRemediationExceptionResourceKeyFormGroup() {
		return new FormGroup<RemediationExceptionResourceKeyFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRemediationExceptionsRequest {

		/** Required */
		ConfigRuleName: string;

		/** Required */
		ResourceKeys: Array<RemediationExceptionResourceKey>;
	}
	export interface DeleteRemediationExceptionsRequestFormProperties {

		/** Required */
		ConfigRuleName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRemediationExceptionsRequestFormGroup() {
		return new FormGroup<DeleteRemediationExceptionsRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NoSuchRemediationExceptionException {
	}
	export interface NoSuchRemediationExceptionExceptionFormProperties {
	}
	export function CreateNoSuchRemediationExceptionExceptionFormGroup() {
		return new FormGroup<NoSuchRemediationExceptionExceptionFormProperties>({
		});

	}

	export interface DeleteResourceConfigRequest {

		/** Required */
		ResourceType: string;

		/** Required */
		ResourceId: string;
	}
	export interface DeleteResourceConfigRequestFormProperties {

		/** Required */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourceConfigRequestFormGroup() {
		return new FormGroup<DeleteResourceConfigRequestFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NoRunningConfigurationRecorderException {
	}
	export interface NoRunningConfigurationRecorderExceptionFormProperties {
	}
	export function CreateNoRunningConfigurationRecorderExceptionFormGroup() {
		return new FormGroup<NoRunningConfigurationRecorderExceptionFormProperties>({
		});

	}

	export interface DeleteRetentionConfigurationRequest {

		/** Required */
		RetentionConfigurationName: string;
	}
	export interface DeleteRetentionConfigurationRequestFormProperties {

		/** Required */
		RetentionConfigurationName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRetentionConfigurationRequestFormGroup() {
		return new FormGroup<DeleteRetentionConfigurationRequestFormProperties>({
			RetentionConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NoSuchRetentionConfigurationException {
	}
	export interface NoSuchRetentionConfigurationExceptionFormProperties {
	}
	export function CreateNoSuchRetentionConfigurationExceptionFormGroup() {
		return new FormGroup<NoSuchRetentionConfigurationExceptionFormProperties>({
		});

	}

	export interface DeleteStoredQueryResponse {
	}
	export interface DeleteStoredQueryResponseFormProperties {
	}
	export function CreateDeleteStoredQueryResponseFormGroup() {
		return new FormGroup<DeleteStoredQueryResponseFormProperties>({
		});

	}

	export interface DeleteStoredQueryRequest {

		/** Required */
		QueryName: string;
	}
	export interface DeleteStoredQueryRequestFormProperties {

		/** Required */
		QueryName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStoredQueryRequestFormGroup() {
		return new FormGroup<DeleteStoredQueryRequestFormProperties>({
			QueryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}


	/** The output for the <a>DeliverConfigSnapshot</a> action, in JSON format. */
	export interface DeliverConfigSnapshotResponse {
		configSnapshotId?: string;
	}

	/** The output for the <a>DeliverConfigSnapshot</a> action, in JSON format. */
	export interface DeliverConfigSnapshotResponseFormProperties {
		configSnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateDeliverConfigSnapshotResponseFormGroup() {
		return new FormGroup<DeliverConfigSnapshotResponseFormProperties>({
			configSnapshotId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the <a>DeliverConfigSnapshot</a> action. */
	export interface DeliverConfigSnapshotRequest {

		/** Required */
		deliveryChannelName: string;
	}

	/** The input for the <a>DeliverConfigSnapshot</a> action. */
	export interface DeliverConfigSnapshotRequestFormProperties {

		/** Required */
		deliveryChannelName: FormControl<string | null | undefined>,
	}
	export function CreateDeliverConfigSnapshotRequestFormGroup() {
		return new FormGroup<DeliverConfigSnapshotRequestFormProperties>({
			deliveryChannelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAggregateComplianceByConfigRulesResponse {
		AggregateComplianceByConfigRules?: Array<AggregateComplianceByConfigRule>;
		NextToken?: string;
	}
	export interface DescribeAggregateComplianceByConfigRulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAggregateComplianceByConfigRulesResponseFormGroup() {
		return new FormGroup<DescribeAggregateComplianceByConfigRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Indicates whether an Config rule is compliant based on account ID, region, compliance, and rule name.</p> <p>A rule is compliant if all of the resources that the rule evaluated comply with it. It is noncompliant if any of these resources do not comply.</p> */
	export interface AggregateComplianceByConfigRule {
		ConfigRuleName?: string;
		Compliance?: Compliance;
		AccountId?: string;
		AwsRegion?: string;
	}

	/** <p>Indicates whether an Config rule is compliant based on account ID, region, compliance, and rule name.</p> <p>A rule is compliant if all of the resources that the rule evaluated comply with it. It is noncompliant if any of these resources do not comply.</p> */
	export interface AggregateComplianceByConfigRuleFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateAggregateComplianceByConfigRuleFormGroup() {
		return new FormGroup<AggregateComplianceByConfigRuleFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates whether an Amazon Web Services resource or Config rule is compliant and provides the number of contributors that affect the compliance. */
	export interface Compliance {
		ComplianceType?: ComplianceType;
		ComplianceContributorCount?: ComplianceContributorCount;
	}

	/** Indicates whether an Amazon Web Services resource or Config rule is compliant and provides the number of contributors that affect the compliance. */
	export interface ComplianceFormProperties {
		ComplianceType: FormControl<ComplianceType | null | undefined>,
	}
	export function CreateComplianceFormGroup() {
		return new FormGroup<ComplianceFormProperties>({
			ComplianceType: new FormControl<ComplianceType | null | undefined>(undefined),
		});

	}

	export enum ComplianceType { COMPLIANT = 'COMPLIANT', NON_COMPLIANT = 'NON_COMPLIANT', NOT_APPLICABLE = 'NOT_APPLICABLE', INSUFFICIENT_DATA = 'INSUFFICIENT_DATA' }


	/** The number of Amazon Web Services resources or Config rules responsible for the current compliance of the item, up to a maximum number. */
	export interface ComplianceContributorCount {
		CappedCount?: number | null;
		CapExceeded?: boolean | null;
	}

	/** The number of Amazon Web Services resources or Config rules responsible for the current compliance of the item, up to a maximum number. */
	export interface ComplianceContributorCountFormProperties {
		CappedCount: FormControl<number | null | undefined>,
		CapExceeded: FormControl<boolean | null | undefined>,
	}
	export function CreateComplianceContributorCountFormGroup() {
		return new FormGroup<ComplianceContributorCountFormProperties>({
			CappedCount: new FormControl<number | null | undefined>(undefined),
			CapExceeded: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeAggregateComplianceByConfigRulesRequest {

		/** Required */
		ConfigurationAggregatorName: string;
		Filters?: ConfigRuleComplianceFilters;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeAggregateComplianceByConfigRulesRequestFormProperties {

		/** Required */
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAggregateComplianceByConfigRulesRequestFormGroup() {
		return new FormGroup<DescribeAggregateComplianceByConfigRulesRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters the compliance results based on account ID, region, compliance type, and rule name. */
	export interface ConfigRuleComplianceFilters {
		ConfigRuleName?: string;
		ComplianceType?: ComplianceType;
		AccountId?: string;
		AwsRegion?: string;
	}

	/** Filters the compliance results based on account ID, region, compliance type, and rule name. */
	export interface ConfigRuleComplianceFiltersFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		ComplianceType: FormControl<ComplianceType | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateConfigRuleComplianceFiltersFormGroup() {
		return new FormGroup<ConfigRuleComplianceFiltersFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			ComplianceType: new FormControl<ComplianceType | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidLimitException {
	}
	export interface InvalidLimitExceptionFormProperties {
	}
	export function CreateInvalidLimitExceptionFormGroup() {
		return new FormGroup<InvalidLimitExceptionFormProperties>({
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface DescribeAggregateComplianceByConformancePacksResponse {
		AggregateComplianceByConformancePacks?: Array<AggregateComplianceByConformancePack>;
		NextToken?: string;
	}
	export interface DescribeAggregateComplianceByConformancePacksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAggregateComplianceByConformancePacksResponseFormGroup() {
		return new FormGroup<DescribeAggregateComplianceByConformancePacksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides aggregate compliance of the conformance pack. Indicates whether a conformance pack is compliant based on the name of the conformance pack, account ID, and region.</p> <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant. The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data. If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p> */
	export interface AggregateComplianceByConformancePack {
		ConformancePackName?: string;
		Compliance?: AggregateConformancePackCompliance;
		AccountId?: string;
		AwsRegion?: string;
	}

	/** <p>Provides aggregate compliance of the conformance pack. Indicates whether a conformance pack is compliant based on the name of the conformance pack, account ID, and region.</p> <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant. The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data. If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p> */
	export interface AggregateComplianceByConformancePackFormProperties {
		ConformancePackName: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateAggregateComplianceByConformancePackFormGroup() {
		return new FormGroup<AggregateComplianceByConformancePackFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides the number of compliant and noncompliant rules within a conformance pack. Also provides the compliance status of the conformance pack and the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p> <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant. The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data. If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p> */
	export interface AggregateConformancePackCompliance {
		ComplianceType?: ConformancePackComplianceType;
		CompliantRuleCount?: number | null;
		NonCompliantRuleCount?: number | null;
		TotalRuleCount?: number | null;
	}

	/** <p>Provides the number of compliant and noncompliant rules within a conformance pack. Also provides the compliance status of the conformance pack and the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p> <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant. The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data. If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p> */
	export interface AggregateConformancePackComplianceFormProperties {
		ComplianceType: FormControl<ConformancePackComplianceType | null | undefined>,
		CompliantRuleCount: FormControl<number | null | undefined>,
		NonCompliantRuleCount: FormControl<number | null | undefined>,
		TotalRuleCount: FormControl<number | null | undefined>,
	}
	export function CreateAggregateConformancePackComplianceFormGroup() {
		return new FormGroup<AggregateConformancePackComplianceFormProperties>({
			ComplianceType: new FormControl<ConformancePackComplianceType | null | undefined>(undefined),
			CompliantRuleCount: new FormControl<number | null | undefined>(undefined),
			NonCompliantRuleCount: new FormControl<number | null | undefined>(undefined),
			TotalRuleCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ConformancePackComplianceType { COMPLIANT = 'COMPLIANT', NON_COMPLIANT = 'NON_COMPLIANT', INSUFFICIENT_DATA = 'INSUFFICIENT_DATA' }

	export interface DescribeAggregateComplianceByConformancePacksRequest {

		/** Required */
		ConfigurationAggregatorName: string;
		Filters?: AggregateConformancePackComplianceFilters;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeAggregateComplianceByConformancePacksRequestFormProperties {

		/** Required */
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAggregateComplianceByConformancePacksRequestFormGroup() {
		return new FormGroup<DescribeAggregateComplianceByConformancePacksRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters the conformance packs based on an account ID, region, compliance type, and the name of the conformance pack. */
	export interface AggregateConformancePackComplianceFilters {
		ConformancePackName?: string;
		ComplianceType?: ConformancePackComplianceType;
		AccountId?: string;
		AwsRegion?: string;
	}

	/** Filters the conformance packs based on an account ID, region, compliance type, and the name of the conformance pack. */
	export interface AggregateConformancePackComplianceFiltersFormProperties {
		ConformancePackName: FormControl<string | null | undefined>,
		ComplianceType: FormControl<ConformancePackComplianceType | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateAggregateConformancePackComplianceFiltersFormGroup() {
		return new FormGroup<AggregateConformancePackComplianceFiltersFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined),
			ComplianceType: new FormControl<ConformancePackComplianceType | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAggregationAuthorizationsResponse {
		AggregationAuthorizations?: Array<AggregationAuthorization>;
		NextToken?: string;
	}
	export interface DescribeAggregationAuthorizationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAggregationAuthorizationsResponseFormGroup() {
		return new FormGroup<DescribeAggregationAuthorizationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the authorizations granted to aggregator accounts and regions. */
	export interface AggregationAuthorization {
		AggregationAuthorizationArn?: string;
		AuthorizedAccountId?: string;
		AuthorizedAwsRegion?: string;
		CreationTime?: Date;
	}

	/** An object that represents the authorizations granted to aggregator accounts and regions. */
	export interface AggregationAuthorizationFormProperties {
		AggregationAuthorizationArn: FormControl<string | null | undefined>,
		AuthorizedAccountId: FormControl<string | null | undefined>,
		AuthorizedAwsRegion: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateAggregationAuthorizationFormGroup() {
		return new FormGroup<AggregationAuthorizationFormProperties>({
			AggregationAuthorizationArn: new FormControl<string | null | undefined>(undefined),
			AuthorizedAccountId: new FormControl<string | null | undefined>(undefined),
			AuthorizedAwsRegion: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeAggregationAuthorizationsRequest {
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeAggregationAuthorizationsRequestFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAggregationAuthorizationsRequestFormGroup() {
		return new FormGroup<DescribeAggregationAuthorizationsRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeComplianceByConfigRuleResponse {
		ComplianceByConfigRules?: Array<ComplianceByConfigRule>;
		NextToken?: string;
	}

	/** <p/> */
	export interface DescribeComplianceByConfigRuleResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComplianceByConfigRuleResponseFormGroup() {
		return new FormGroup<DescribeComplianceByConfigRuleResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates whether an Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it. A rule is noncompliant if any of these resources do not comply. */
	export interface ComplianceByConfigRule {
		ConfigRuleName?: string;
		Compliance?: Compliance;
	}

	/** Indicates whether an Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it. A rule is noncompliant if any of these resources do not comply. */
	export interface ComplianceByConfigRuleFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
	}
	export function CreateComplianceByConfigRuleFormGroup() {
		return new FormGroup<ComplianceByConfigRuleFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeComplianceByConfigRuleRequest {
		ConfigRuleNames?: Array<string>;
		ComplianceTypes?: Array<ComplianceType>;
		NextToken?: string;
	}

	/** <p/> */
	export interface DescribeComplianceByConfigRuleRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComplianceByConfigRuleRequestFormGroup() {
		return new FormGroup<DescribeComplianceByConfigRuleRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeComplianceByResourceResponse {
		ComplianceByResources?: Array<ComplianceByResource>;
		NextToken?: string;
	}

	/** <p/> */
	export interface DescribeComplianceByResourceResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComplianceByResourceResponseFormGroup() {
		return new FormGroup<DescribeComplianceByResourceResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates whether an Amazon Web Services resource that is evaluated according to one or more Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules. */
	export interface ComplianceByResource {
		ResourceType?: string;
		ResourceId?: string;
		Compliance?: Compliance;
	}

	/** Indicates whether an Amazon Web Services resource that is evaluated according to one or more Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules. */
	export interface ComplianceByResourceFormProperties {
		ResourceType: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateComplianceByResourceFormGroup() {
		return new FormGroup<ComplianceByResourceFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeComplianceByResourceRequest {
		ResourceType?: string;
		ResourceId?: string;
		ComplianceTypes?: Array<ComplianceType>;
		Limit?: number | null;
		NextToken?: string;
	}

	/** <p/> */
	export interface DescribeComplianceByResourceRequestFormProperties {
		ResourceType: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComplianceByResourceRequestFormGroup() {
		return new FormGroup<DescribeComplianceByResourceRequestFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeConfigRuleEvaluationStatusResponse {
		ConfigRulesEvaluationStatus?: Array<ConfigRuleEvaluationStatus>;
		NextToken?: string;
	}

	/** <p/> */
	export interface DescribeConfigRuleEvaluationStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConfigRuleEvaluationStatusResponseFormGroup() {
		return new FormGroup<DescribeConfigRuleEvaluationStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Status information for your Config Managed rules and Config Custom Policy rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about Config Custom Lambda rules.</p> */
	export interface ConfigRuleEvaluationStatus {
		ConfigRuleName?: string;
		ConfigRuleArn?: string;
		ConfigRuleId?: string;
		LastSuccessfulInvocationTime?: Date;
		LastFailedInvocationTime?: Date;
		LastSuccessfulEvaluationTime?: Date;
		LastFailedEvaluationTime?: Date;
		FirstActivatedTime?: Date;
		LastDeactivatedTime?: Date;
		LastErrorCode?: string;
		LastErrorMessage?: string;
		FirstEvaluationStarted?: boolean | null;
		LastDebugLogDeliveryStatus?: string;
		LastDebugLogDeliveryStatusReason?: string;
		LastDebugLogDeliveryTime?: Date;
	}

	/** <p>Status information for your Config Managed rules and Config Custom Policy rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about Config Custom Lambda rules.</p> */
	export interface ConfigRuleEvaluationStatusFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		ConfigRuleArn: FormControl<string | null | undefined>,
		ConfigRuleId: FormControl<string | null | undefined>,
		LastSuccessfulInvocationTime: FormControl<Date | null | undefined>,
		LastFailedInvocationTime: FormControl<Date | null | undefined>,
		LastSuccessfulEvaluationTime: FormControl<Date | null | undefined>,
		LastFailedEvaluationTime: FormControl<Date | null | undefined>,
		FirstActivatedTime: FormControl<Date | null | undefined>,
		LastDeactivatedTime: FormControl<Date | null | undefined>,
		LastErrorCode: FormControl<string | null | undefined>,
		LastErrorMessage: FormControl<string | null | undefined>,
		FirstEvaluationStarted: FormControl<boolean | null | undefined>,
		LastDebugLogDeliveryStatus: FormControl<string | null | undefined>,
		LastDebugLogDeliveryStatusReason: FormControl<string | null | undefined>,
		LastDebugLogDeliveryTime: FormControl<Date | null | undefined>,
	}
	export function CreateConfigRuleEvaluationStatusFormGroup() {
		return new FormGroup<ConfigRuleEvaluationStatusFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			ConfigRuleArn: new FormControl<string | null | undefined>(undefined),
			ConfigRuleId: new FormControl<string | null | undefined>(undefined),
			LastSuccessfulInvocationTime: new FormControl<Date | null | undefined>(undefined),
			LastFailedInvocationTime: new FormControl<Date | null | undefined>(undefined),
			LastSuccessfulEvaluationTime: new FormControl<Date | null | undefined>(undefined),
			LastFailedEvaluationTime: new FormControl<Date | null | undefined>(undefined),
			FirstActivatedTime: new FormControl<Date | null | undefined>(undefined),
			LastDeactivatedTime: new FormControl<Date | null | undefined>(undefined),
			LastErrorCode: new FormControl<string | null | undefined>(undefined),
			LastErrorMessage: new FormControl<string | null | undefined>(undefined),
			FirstEvaluationStarted: new FormControl<boolean | null | undefined>(undefined),
			LastDebugLogDeliveryStatus: new FormControl<string | null | undefined>(undefined),
			LastDebugLogDeliveryStatusReason: new FormControl<string | null | undefined>(undefined),
			LastDebugLogDeliveryTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeConfigRuleEvaluationStatusRequest {
		ConfigRuleNames?: Array<string>;
		NextToken?: string;
		Limit?: number | null;
	}

	/** <p/> */
	export interface DescribeConfigRuleEvaluationStatusRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeConfigRuleEvaluationStatusRequestFormGroup() {
		return new FormGroup<DescribeConfigRuleEvaluationStatusRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface DescribeConfigRulesResponse {
		ConfigRules?: Array<ConfigRule>;
		NextToken?: string;
	}

	/** <p/> */
	export interface DescribeConfigRulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConfigRulesResponseFormGroup() {
		return new FormGroup<DescribeConfigRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Config rules evaluate the configuration settings of your Amazon Web Services resources. A rule can run when Config detects a configuration change to an Amazon Web Services resource or at a periodic frequency that you choose (for example, every 24 hours). There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>For more information about developing and using Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Resource with Config Rules</a> in the <i>Config Developer Guide</i>.</p> <note> <p>You can use the Amazon Web Services CLI and Amazon Web Services SDKs if you want to create a rule that triggers evaluations for your resources when Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note> */
	export interface ConfigRule {
		ConfigRuleName?: string;
		ConfigRuleArn?: string;
		ConfigRuleId?: string;
		Description?: string;
		Scope?: Scope;

		/** Required */
		Source: Source;
		InputParameters?: string;
		MaximumExecutionFrequency?: MaximumExecutionFrequency;
		ConfigRuleState?: ConfigRuleState;
		CreatedBy?: string;
		EvaluationModes?: Array<EvaluationModeConfiguration>;
	}

	/** <p>Config rules evaluate the configuration settings of your Amazon Web Services resources. A rule can run when Config detects a configuration change to an Amazon Web Services resource or at a periodic frequency that you choose (for example, every 24 hours). There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>For more information about developing and using Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Resource with Config Rules</a> in the <i>Config Developer Guide</i>.</p> <note> <p>You can use the Amazon Web Services CLI and Amazon Web Services SDKs if you want to create a rule that triggers evaluations for your resources when Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note> */
	export interface ConfigRuleFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		ConfigRuleArn: FormControl<string | null | undefined>,
		ConfigRuleId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		InputParameters: FormControl<string | null | undefined>,
		MaximumExecutionFrequency: FormControl<MaximumExecutionFrequency | null | undefined>,
		ConfigRuleState: FormControl<ConfigRuleState | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
	}
	export function CreateConfigRuleFormGroup() {
		return new FormGroup<ConfigRuleFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			ConfigRuleArn: new FormControl<string | null | undefined>(undefined),
			ConfigRuleId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			InputParameters: new FormControl<string | null | undefined>(undefined),
			MaximumExecutionFrequency: new FormControl<MaximumExecutionFrequency | null | undefined>(undefined),
			ConfigRuleState: new FormControl<ConfigRuleState | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines which resources trigger an evaluation for an Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration. */
	export interface Scope {
		ComplianceResourceTypes?: Array<string>;
		TagKey?: string;
		TagValue?: string;
		ComplianceResourceId?: string;
	}

	/** Defines which resources trigger an evaluation for an Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration. */
	export interface ScopeFormProperties {
		TagKey: FormControl<string | null | undefined>,
		TagValue: FormControl<string | null | undefined>,
		ComplianceResourceId: FormControl<string | null | undefined>,
	}
	export function CreateScopeFormGroup() {
		return new FormGroup<ScopeFormProperties>({
			TagKey: new FormControl<string | null | undefined>(undefined),
			TagValue: new FormControl<string | null | undefined>(undefined),
			ComplianceResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the CustomPolicyDetails, the rule owner (<code>Amazon Web Services</code> for managed rules, <code>CUSTOM_POLICY</code> for Custom Policy rules, and <code>CUSTOM_LAMBDA</code> for Custom Lambda rules), the rule identifier, and the events that cause the evaluation of your Amazon Web Services resources. */
	export interface Source {

		/** Required */
		Owner: Owner;
		SourceIdentifier?: string;
		SourceDetails?: Array<SourceDetail>;
		CustomPolicyDetails?: CustomPolicyDetails;
	}

	/** Provides the CustomPolicyDetails, the rule owner (<code>Amazon Web Services</code> for managed rules, <code>CUSTOM_POLICY</code> for Custom Policy rules, and <code>CUSTOM_LAMBDA</code> for Custom Lambda rules), the rule identifier, and the events that cause the evaluation of your Amazon Web Services resources. */
	export interface SourceFormProperties {

		/** Required */
		Owner: FormControl<Owner | null | undefined>,
		SourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			Owner: new FormControl<Owner | null | undefined>(undefined, [Validators.required]),
			SourceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Owner { CUSTOM_LAMBDA = 'CUSTOM_LAMBDA', AWS = 'AWS', CUSTOM_POLICY = 'CUSTOM_POLICY' }


	/** Provides the source and the message types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic. You can specify the parameter values for <code>SourceDetail</code> only for custom rules.  */
	export interface SourceDetail {
		EventSource?: EventSource;
		MessageType?: MessageType;
		MaximumExecutionFrequency?: MaximumExecutionFrequency;
	}

	/** Provides the source and the message types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic. You can specify the parameter values for <code>SourceDetail</code> only for custom rules.  */
	export interface SourceDetailFormProperties {
		EventSource: FormControl<EventSource | null | undefined>,
		MessageType: FormControl<MessageType | null | undefined>,
		MaximumExecutionFrequency: FormControl<MaximumExecutionFrequency | null | undefined>,
	}
	export function CreateSourceDetailFormGroup() {
		return new FormGroup<SourceDetailFormProperties>({
			EventSource: new FormControl<EventSource | null | undefined>(undefined),
			MessageType: new FormControl<MessageType | null | undefined>(undefined),
			MaximumExecutionFrequency: new FormControl<MaximumExecutionFrequency | null | undefined>(undefined),
		});

	}

	export enum EventSource { 'aws.config' = 'aws.config' }

	export enum MessageType { ConfigurationItemChangeNotification = 'ConfigurationItemChangeNotification', ConfigurationSnapshotDeliveryCompleted = 'ConfigurationSnapshotDeliveryCompleted', ScheduledNotification = 'ScheduledNotification', OversizedConfigurationItemChangeNotification = 'OversizedConfigurationItemChangeNotification' }

	export enum MaximumExecutionFrequency { One_Hour = 'One_Hour', Three_Hours = 'Three_Hours', Six_Hours = 'Six_Hours', Twelve_Hours = 'Twelve_Hours', TwentyFour_Hours = 'TwentyFour_Hours' }


	/** Provides the runtime system, policy definition, and whether debug logging enabled. You can specify the following CustomPolicyDetails parameter values only for Config Custom Policy rules. */
	export interface CustomPolicyDetails {

		/** Required */
		PolicyRuntime: string;

		/** Required */
		PolicyText: string;
		EnableDebugLogDelivery?: boolean | null;
	}

	/** Provides the runtime system, policy definition, and whether debug logging enabled. You can specify the following CustomPolicyDetails parameter values only for Config Custom Policy rules. */
	export interface CustomPolicyDetailsFormProperties {

		/** Required */
		PolicyRuntime: FormControl<string | null | undefined>,

		/** Required */
		PolicyText: FormControl<string | null | undefined>,
		EnableDebugLogDelivery: FormControl<boolean | null | undefined>,
	}
	export function CreateCustomPolicyDetailsFormGroup() {
		return new FormGroup<CustomPolicyDetailsFormProperties>({
			PolicyRuntime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnableDebugLogDelivery: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ConfigRuleState { ACTIVE = 'ACTIVE', DELETING = 'DELETING', DELETING_RESULTS = 'DELETING_RESULTS', EVALUATING = 'EVALUATING' }


	/** The configuration object for Config rule evaluation mode. The Supported valid values are Detective or Proactive. */
	export interface EvaluationModeConfiguration {
		Mode?: EvaluationMode;
	}

	/** The configuration object for Config rule evaluation mode. The Supported valid values are Detective or Proactive. */
	export interface EvaluationModeConfigurationFormProperties {
		Mode: FormControl<EvaluationMode | null | undefined>,
	}
	export function CreateEvaluationModeConfigurationFormGroup() {
		return new FormGroup<EvaluationModeConfigurationFormProperties>({
			Mode: new FormControl<EvaluationMode | null | undefined>(undefined),
		});

	}

	export enum EvaluationMode { DETECTIVE = 'DETECTIVE', PROACTIVE = 'PROACTIVE' }


	/** <p/> */
	export interface DescribeConfigRulesRequest {
		ConfigRuleNames?: Array<string>;
		NextToken?: string;
		Filters?: DescribeConfigRulesFilters;
	}

	/** <p/> */
	export interface DescribeConfigRulesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConfigRulesRequestFormGroup() {
		return new FormGroup<DescribeConfigRulesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns a filtered list of Detective or Proactive Config rules. By default, if the filter is not defined, this API returns an unfiltered list. For more information on Detective or Proactive Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html"> <b>Evaluation Mode</b> </a> in the <i>Config Developer Guide</i>. */
	export interface DescribeConfigRulesFilters {
		EvaluationMode?: EvaluationMode;
	}

	/** Returns a filtered list of Detective or Proactive Config rules. By default, if the filter is not defined, this API returns an unfiltered list. For more information on Detective or Proactive Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html"> <b>Evaluation Mode</b> </a> in the <i>Config Developer Guide</i>. */
	export interface DescribeConfigRulesFiltersFormProperties {
		EvaluationMode: FormControl<EvaluationMode | null | undefined>,
	}
	export function CreateDescribeConfigRulesFiltersFormGroup() {
		return new FormGroup<DescribeConfigRulesFiltersFormProperties>({
			EvaluationMode: new FormControl<EvaluationMode | null | undefined>(undefined),
		});

	}

	export interface DescribeConfigurationAggregatorSourcesStatusResponse {
		AggregatedSourceStatusList?: Array<AggregatedSourceStatus>;
		NextToken?: string;
	}
	export interface DescribeConfigurationAggregatorSourcesStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConfigurationAggregatorSourcesStatusResponseFormGroup() {
		return new FormGroup<DescribeConfigurationAggregatorSourcesStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The current sync status between the source and the aggregator account. */
	export interface AggregatedSourceStatus {
		SourceId?: string;
		SourceType?: AggregatedSourceType;
		AwsRegion?: string;
		LastUpdateStatus?: AggregatedSourceStatusType;
		LastUpdateTime?: Date;
		LastErrorCode?: string;
		LastErrorMessage?: string;
	}

	/** The current sync status between the source and the aggregator account. */
	export interface AggregatedSourceStatusFormProperties {
		SourceId: FormControl<string | null | undefined>,
		SourceType: FormControl<AggregatedSourceType | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
		LastUpdateStatus: FormControl<AggregatedSourceStatusType | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
		LastErrorCode: FormControl<string | null | undefined>,
		LastErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateAggregatedSourceStatusFormGroup() {
		return new FormGroup<AggregatedSourceStatusFormProperties>({
			SourceId: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<AggregatedSourceType | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
			LastUpdateStatus: new FormControl<AggregatedSourceStatusType | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			LastErrorCode: new FormControl<string | null | undefined>(undefined),
			LastErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AggregatedSourceType { ACCOUNT = 'ACCOUNT', ORGANIZATION = 'ORGANIZATION' }

	export enum AggregatedSourceStatusType { FAILED = 'FAILED', SUCCEEDED = 'SUCCEEDED', OUTDATED = 'OUTDATED' }

	export interface DescribeConfigurationAggregatorSourcesStatusRequest {

		/** Required */
		ConfigurationAggregatorName: string;
		UpdateStatus?: Array<AggregatedSourceStatusType>;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface DescribeConfigurationAggregatorSourcesStatusRequestFormProperties {

		/** Required */
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeConfigurationAggregatorSourcesStatusRequestFormGroup() {
		return new FormGroup<DescribeConfigurationAggregatorSourcesStatusRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeConfigurationAggregatorsResponse {
		ConfigurationAggregators?: Array<ConfigurationAggregator>;
		NextToken?: string;
	}
	export interface DescribeConfigurationAggregatorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConfigurationAggregatorsResponseFormGroup() {
		return new FormGroup<DescribeConfigurationAggregatorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator.  */
	export interface ConfigurationAggregator {
		ConfigurationAggregatorName?: string;
		ConfigurationAggregatorArn?: string;
		AccountAggregationSources?: Array<AccountAggregationSource>;
		OrganizationAggregationSource?: OrganizationAggregationSource;
		CreationTime?: Date;
		LastUpdatedTime?: Date;
		CreatedBy?: string;
	}

	/** The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator.  */
	export interface ConfigurationAggregatorFormProperties {
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
		ConfigurationAggregatorArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationAggregatorFormGroup() {
		return new FormGroup<ConfigurationAggregatorFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined),
			ConfigurationAggregatorArn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of accounts and regions. */
	export interface AccountAggregationSource {

		/** Required */
		AccountIds: Array<string>;
		AllAwsRegions?: boolean | null;
		AwsRegions?: Array<string>;
	}

	/** A collection of accounts and regions. */
	export interface AccountAggregationSourceFormProperties {
		AllAwsRegions: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountAggregationSourceFormGroup() {
		return new FormGroup<AccountAggregationSourceFormProperties>({
			AllAwsRegions: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** This object contains regions to set up the aggregator and an IAM role to retrieve organization details. */
	export interface OrganizationAggregationSource {

		/** Required */
		RoleArn: string;
		AwsRegions?: Array<string>;
		AllAwsRegions?: boolean | null;
	}

	/** This object contains regions to set up the aggregator and an IAM role to retrieve organization details. */
	export interface OrganizationAggregationSourceFormProperties {

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		AllAwsRegions: FormControl<boolean | null | undefined>,
	}
	export function CreateOrganizationAggregationSourceFormGroup() {
		return new FormGroup<OrganizationAggregationSourceFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllAwsRegions: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeConfigurationAggregatorsRequest {
		ConfigurationAggregatorNames?: Array<string>;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface DescribeConfigurationAggregatorsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeConfigurationAggregatorsRequestFormGroup() {
		return new FormGroup<DescribeConfigurationAggregatorsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON format. */
	export interface DescribeConfigurationRecorderStatusResponse {
		ConfigurationRecordersStatus?: Array<ConfigurationRecorderStatus>;
	}

	/** The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON format. */
	export interface DescribeConfigurationRecorderStatusResponseFormProperties {
	}
	export function CreateDescribeConfigurationRecorderStatusResponseFormGroup() {
		return new FormGroup<DescribeConfigurationRecorderStatusResponseFormProperties>({
		});

	}


	/** <p>The current status of the configuration recorder.</p> <note> <p>For a detailed status of recording events over time, add your Config events to CloudWatch metrics and use CloudWatch metrics.</p> </note> */
	export interface ConfigurationRecorderStatus {
		name?: string;
		lastStartTime?: Date;
		lastStopTime?: Date;
		recording?: boolean | null;
		lastStatus?: RecorderStatus;
		lastErrorCode?: string;
		lastErrorMessage?: string;
		lastStatusChangeTime?: Date;
	}

	/** <p>The current status of the configuration recorder.</p> <note> <p>For a detailed status of recording events over time, add your Config events to CloudWatch metrics and use CloudWatch metrics.</p> </note> */
	export interface ConfigurationRecorderStatusFormProperties {
		name: FormControl<string | null | undefined>,
		lastStartTime: FormControl<Date | null | undefined>,
		lastStopTime: FormControl<Date | null | undefined>,
		recording: FormControl<boolean | null | undefined>,
		lastStatus: FormControl<RecorderStatus | null | undefined>,
		lastErrorCode: FormControl<string | null | undefined>,
		lastErrorMessage: FormControl<string | null | undefined>,
		lastStatusChangeTime: FormControl<Date | null | undefined>,
	}
	export function CreateConfigurationRecorderStatusFormGroup() {
		return new FormGroup<ConfigurationRecorderStatusFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			lastStartTime: new FormControl<Date | null | undefined>(undefined),
			lastStopTime: new FormControl<Date | null | undefined>(undefined),
			recording: new FormControl<boolean | null | undefined>(undefined),
			lastStatus: new FormControl<RecorderStatus | null | undefined>(undefined),
			lastErrorCode: new FormControl<string | null | undefined>(undefined),
			lastErrorMessage: new FormControl<string | null | undefined>(undefined),
			lastStatusChangeTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RecorderStatus { Pending = 'Pending', Success = 'Success', Failure = 'Failure' }


	/** The input for the <a>DescribeConfigurationRecorderStatus</a> action. */
	export interface DescribeConfigurationRecorderStatusRequest {
		ConfigurationRecorderNames?: Array<string>;
	}

	/** The input for the <a>DescribeConfigurationRecorderStatus</a> action. */
	export interface DescribeConfigurationRecorderStatusRequestFormProperties {
	}
	export function CreateDescribeConfigurationRecorderStatusRequestFormGroup() {
		return new FormGroup<DescribeConfigurationRecorderStatusRequestFormProperties>({
		});

	}


	/** The output for the <a>DescribeConfigurationRecorders</a> action. */
	export interface DescribeConfigurationRecordersResponse {
		ConfigurationRecorders?: Array<ConfigurationRecorder>;
	}

	/** The output for the <a>DescribeConfigurationRecorders</a> action. */
	export interface DescribeConfigurationRecordersResponseFormProperties {
	}
	export function CreateDescribeConfigurationRecordersResponseFormGroup() {
		return new FormGroup<DescribeConfigurationRecordersResponseFormProperties>({
		});

	}


	/** Records configuration changes to specified resource types. For more information about the configuration recorder, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/stop-start-recorder.html"> <b>Managing the Configuration Recorder</b> </a> in the <i>Config Developer Guide</i>. */
	export interface ConfigurationRecorder {
		name?: string;
		roleARN?: string;
		recordingGroup?: RecordingGroup;
	}

	/** Records configuration changes to specified resource types. For more information about the configuration recorder, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/stop-start-recorder.html"> <b>Managing the Configuration Recorder</b> </a> in the <i>Config Developer Guide</i>. */
	export interface ConfigurationRecorderFormProperties {
		name: FormControl<string | null | undefined>,
		roleARN: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationRecorderFormGroup() {
		return new FormGroup<ConfigurationRecorderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			roleARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Specifies which resource types Config records for configuration changes. In the recording group, you specify whether you want to record all supported resource types or to include or exclude specific types of resources.</p> <p>By default, Config records configuration changes for all supported types of <i>Regional resources</i> that Config discovers in the Amazon Web Services Region in which it is running. Regional resources are tied to a Region and can be used only in that Region. Examples of Regional resources are Amazon EC2 instances and Amazon EBS volumes.</p> <p>You can also have Config record supported types of <i>global resources</i>. Global resources are not tied to a specific Region and can be used in all Regions. The global resource types that Config supports include IAM users, groups, roles, and customer managed policies.</p> <important> <p>Global resource types onboarded to Config recording after February 2022 will be recorded only in the service's home Region for the commercial partition and Amazon Web Services GovCloud (US-West) for the Amazon Web Services GovCloud (US) partition. You can view the Configuration Items for these new global resource types only in their home Region and Amazon Web Services GovCloud (US-West).</p> </important> <p>If you don't want Config to record all resources, you can specify which types of resources Config records with the <code>resourceTypes</code> parameter.</p> <p>For a list of supported resource types, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Resource Types</a> in the <i>Config developer guide</i>.</p> <p>For more information and a table of the Home Regions for Global Resource Types Onboarded after February 2022, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html">Selecting Which Resources Config Records</a> in the <i>Config developer guide</i>.</p> */
	export interface RecordingGroup {
		allSupported?: boolean | null;
		includeGlobalResourceTypes?: boolean | null;
		resourceTypes?: Array<ResourceType>;
		exclusionByResourceTypes?: ExclusionByResourceTypes;
		recordingStrategy?: RecordingStrategy;
	}

	/** <p>Specifies which resource types Config records for configuration changes. In the recording group, you specify whether you want to record all supported resource types or to include or exclude specific types of resources.</p> <p>By default, Config records configuration changes for all supported types of <i>Regional resources</i> that Config discovers in the Amazon Web Services Region in which it is running. Regional resources are tied to a Region and can be used only in that Region. Examples of Regional resources are Amazon EC2 instances and Amazon EBS volumes.</p> <p>You can also have Config record supported types of <i>global resources</i>. Global resources are not tied to a specific Region and can be used in all Regions. The global resource types that Config supports include IAM users, groups, roles, and customer managed policies.</p> <important> <p>Global resource types onboarded to Config recording after February 2022 will be recorded only in the service's home Region for the commercial partition and Amazon Web Services GovCloud (US-West) for the Amazon Web Services GovCloud (US) partition. You can view the Configuration Items for these new global resource types only in their home Region and Amazon Web Services GovCloud (US-West).</p> </important> <p>If you don't want Config to record all resources, you can specify which types of resources Config records with the <code>resourceTypes</code> parameter.</p> <p>For a list of supported resource types, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Resource Types</a> in the <i>Config developer guide</i>.</p> <p>For more information and a table of the Home Regions for Global Resource Types Onboarded after February 2022, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html">Selecting Which Resources Config Records</a> in the <i>Config developer guide</i>.</p> */
	export interface RecordingGroupFormProperties {
		allSupported: FormControl<boolean | null | undefined>,
		includeGlobalResourceTypes: FormControl<boolean | null | undefined>,
	}
	export function CreateRecordingGroupFormGroup() {
		return new FormGroup<RecordingGroupFormProperties>({
			allSupported: new FormControl<boolean | null | undefined>(undefined),
			includeGlobalResourceTypes: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies whether the configuration recorder excludes resource types from being recorded. Use the <code>resourceTypes</code> field to enter a comma-separated list of resource types to exclude as exemptions. */
	export interface ExclusionByResourceTypes {
		resourceTypes?: Array<ResourceType>;
	}

	/** Specifies whether the configuration recorder excludes resource types from being recorded. Use the <code>resourceTypes</code> field to enter a comma-separated list of resource types to exclude as exemptions. */
	export interface ExclusionByResourceTypesFormProperties {
	}
	export function CreateExclusionByResourceTypesFormGroup() {
		return new FormGroup<ExclusionByResourceTypesFormProperties>({
		});

	}


	/** Specifies the recording strategy of the configuration recorder. */
	export interface RecordingStrategy {
		useOnly?: RecordingStrategyType;
	}

	/** Specifies the recording strategy of the configuration recorder. */
	export interface RecordingStrategyFormProperties {
		useOnly: FormControl<RecordingStrategyType | null | undefined>,
	}
	export function CreateRecordingStrategyFormGroup() {
		return new FormGroup<RecordingStrategyFormProperties>({
			useOnly: new FormControl<RecordingStrategyType | null | undefined>(undefined),
		});

	}

	export enum RecordingStrategyType { ALL_SUPPORTED_RESOURCE_TYPES = 'ALL_SUPPORTED_RESOURCE_TYPES', INCLUSION_BY_RESOURCE_TYPES = 'INCLUSION_BY_RESOURCE_TYPES', EXCLUSION_BY_RESOURCE_TYPES = 'EXCLUSION_BY_RESOURCE_TYPES' }


	/** The input for the <a>DescribeConfigurationRecorders</a> action. */
	export interface DescribeConfigurationRecordersRequest {
		ConfigurationRecorderNames?: Array<string>;
	}

	/** The input for the <a>DescribeConfigurationRecorders</a> action. */
	export interface DescribeConfigurationRecordersRequestFormProperties {
	}
	export function CreateDescribeConfigurationRecordersRequestFormGroup() {
		return new FormGroup<DescribeConfigurationRecordersRequestFormProperties>({
		});

	}

	export interface DescribeConformancePackComplianceResponse {

		/** Required */
		ConformancePackName: string;

		/** Required */
		ConformancePackRuleComplianceList: Array<ConformancePackRuleCompliance>;
		NextToken?: string;
	}
	export interface DescribeConformancePackComplianceResponseFormProperties {

		/** Required */
		ConformancePackName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConformancePackComplianceResponseFormGroup() {
		return new FormGroup<DescribeConformancePackComplianceResponseFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Compliance information of one or more Config rules within a conformance pack. You can filter using Config rule names and compliance types. */
	export interface ConformancePackRuleCompliance {
		ConfigRuleName?: string;
		ComplianceType?: ConformancePackComplianceType;
		Controls?: Array<string>;
	}

	/** Compliance information of one or more Config rules within a conformance pack. You can filter using Config rule names and compliance types. */
	export interface ConformancePackRuleComplianceFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		ComplianceType: FormControl<ConformancePackComplianceType | null | undefined>,
	}
	export function CreateConformancePackRuleComplianceFormGroup() {
		return new FormGroup<ConformancePackRuleComplianceFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			ComplianceType: new FormControl<ConformancePackComplianceType | null | undefined>(undefined),
		});

	}

	export interface DescribeConformancePackComplianceRequest {

		/** Required */
		ConformancePackName: string;
		Filters?: ConformancePackComplianceFilters;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeConformancePackComplianceRequestFormProperties {

		/** Required */
		ConformancePackName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConformancePackComplianceRequestFormGroup() {
		return new FormGroup<DescribeConformancePackComplianceRequestFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters the conformance pack by compliance types and Config rule names. */
	export interface ConformancePackComplianceFilters {
		ConfigRuleNames?: Array<string>;
		ComplianceType?: ConformancePackComplianceType;
	}

	/** Filters the conformance pack by compliance types and Config rule names. */
	export interface ConformancePackComplianceFiltersFormProperties {
		ComplianceType: FormControl<ConformancePackComplianceType | null | undefined>,
	}
	export function CreateConformancePackComplianceFiltersFormGroup() {
		return new FormGroup<ConformancePackComplianceFiltersFormProperties>({
			ComplianceType: new FormControl<ConformancePackComplianceType | null | undefined>(undefined),
		});

	}

	export interface NoSuchConfigRuleInConformancePackException {
	}
	export interface NoSuchConfigRuleInConformancePackExceptionFormProperties {
	}
	export function CreateNoSuchConfigRuleInConformancePackExceptionFormGroup() {
		return new FormGroup<NoSuchConfigRuleInConformancePackExceptionFormProperties>({
		});

	}

	export interface DescribeConformancePackStatusResponse {
		ConformancePackStatusDetails?: Array<ConformancePackStatusDetail>;
		NextToken?: string;
	}
	export interface DescribeConformancePackStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConformancePackStatusResponseFormGroup() {
		return new FormGroup<DescribeConformancePackStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status details of a conformance pack. */
	export interface ConformancePackStatusDetail {

		/** Required */
		ConformancePackName: string;

		/** Required */
		ConformancePackId: string;

		/** Required */
		ConformancePackArn: string;

		/** Required */
		ConformancePackState: ConformancePackState;

		/** Required */
		StackArn: string;
		ConformancePackStatusReason?: string;

		/** Required */
		LastUpdateRequestedTime: Date;
		LastUpdateCompletedTime?: Date;
	}

	/** Status details of a conformance pack. */
	export interface ConformancePackStatusDetailFormProperties {

		/** Required */
		ConformancePackName: FormControl<string | null | undefined>,

		/** Required */
		ConformancePackId: FormControl<string | null | undefined>,

		/** Required */
		ConformancePackArn: FormControl<string | null | undefined>,

		/** Required */
		ConformancePackState: FormControl<ConformancePackState | null | undefined>,

		/** Required */
		StackArn: FormControl<string | null | undefined>,
		ConformancePackStatusReason: FormControl<string | null | undefined>,

		/** Required */
		LastUpdateRequestedTime: FormControl<Date | null | undefined>,
		LastUpdateCompletedTime: FormControl<Date | null | undefined>,
	}
	export function CreateConformancePackStatusDetailFormGroup() {
		return new FormGroup<ConformancePackStatusDetailFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConformancePackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConformancePackArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConformancePackState: new FormControl<ConformancePackState | null | undefined>(undefined, [Validators.required]),
			StackArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConformancePackStatusReason: new FormControl<string | null | undefined>(undefined),
			LastUpdateRequestedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			LastUpdateCompletedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ConformancePackState { CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', CREATE_COMPLETE = 'CREATE_COMPLETE', CREATE_FAILED = 'CREATE_FAILED', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', DELETE_FAILED = 'DELETE_FAILED' }

	export interface DescribeConformancePackStatusRequest {
		ConformancePackNames?: Array<string>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeConformancePackStatusRequestFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConformancePackStatusRequestFormGroup() {
		return new FormGroup<DescribeConformancePackStatusRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConformancePacksResponse {
		ConformancePackDetails?: Array<ConformancePackDetail>;
		NextToken?: string;
	}
	export interface DescribeConformancePacksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConformancePacksResponseFormGroup() {
		return new FormGroup<DescribeConformancePacksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns details of a conformance pack. A conformance pack is a collection of Config rules and remediation actions that can be easily deployed in an account and a region. */
	export interface ConformancePackDetail {

		/** Required */
		ConformancePackName: string;

		/** Required */
		ConformancePackArn: string;

		/** Required */
		ConformancePackId: string;
		DeliveryS3Bucket?: string;
		DeliveryS3KeyPrefix?: string;
		ConformancePackInputParameters?: Array<ConformancePackInputParameter>;
		LastUpdateRequestedTime?: Date;
		CreatedBy?: string;
		TemplateSSMDocumentDetails?: TemplateSSMDocumentDetails;
	}

	/** Returns details of a conformance pack. A conformance pack is a collection of Config rules and remediation actions that can be easily deployed in an account and a region. */
	export interface ConformancePackDetailFormProperties {

		/** Required */
		ConformancePackName: FormControl<string | null | undefined>,

		/** Required */
		ConformancePackArn: FormControl<string | null | undefined>,

		/** Required */
		ConformancePackId: FormControl<string | null | undefined>,
		DeliveryS3Bucket: FormControl<string | null | undefined>,
		DeliveryS3KeyPrefix: FormControl<string | null | undefined>,
		LastUpdateRequestedTime: FormControl<Date | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
	}
	export function CreateConformancePackDetailFormGroup() {
		return new FormGroup<ConformancePackDetailFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConformancePackArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConformancePackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeliveryS3Bucket: new FormControl<string | null | undefined>(undefined),
			DeliveryS3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			LastUpdateRequestedTime: new FormControl<Date | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input parameters in the form of key-value pairs for the conformance pack, both of which you define. Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters. */
	export interface ConformancePackInputParameter {

		/** Required */
		ParameterName: string;

		/** Required */
		ParameterValue: string;
	}

	/** Input parameters in the form of key-value pairs for the conformance pack, both of which you define. Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters. */
	export interface ConformancePackInputParameterFormProperties {

		/** Required */
		ParameterName: FormControl<string | null | undefined>,

		/** Required */
		ParameterValue: FormControl<string | null | undefined>,
	}
	export function CreateConformancePackInputParameterFormGroup() {
		return new FormGroup<ConformancePackInputParameterFormProperties>({
			ParameterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParameterValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>This API allows you to create a conformance pack template with an Amazon Web Services Systems Manager document (SSM document). To deploy a conformance pack using an SSM document, first create an SSM document with conformance pack content, and then provide the <code>DocumentName</code> in the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html">PutConformancePack API</a>. You can also provide the <code>DocumentVersion</code>.</p> <p>The <code>TemplateSSMDocumentDetails</code> object contains the name of the SSM document and the version of the SSM document.</p> */
	export interface TemplateSSMDocumentDetails {

		/** Required */
		DocumentName: string;
		DocumentVersion?: string;
	}

	/** <p>This API allows you to create a conformance pack template with an Amazon Web Services Systems Manager document (SSM document). To deploy a conformance pack using an SSM document, first create an SSM document with conformance pack content, and then provide the <code>DocumentName</code> in the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html">PutConformancePack API</a>. You can also provide the <code>DocumentVersion</code>.</p> <p>The <code>TemplateSSMDocumentDetails</code> object contains the name of the SSM document and the version of the SSM document.</p> */
	export interface TemplateSSMDocumentDetailsFormProperties {

		/** Required */
		DocumentName: FormControl<string | null | undefined>,
		DocumentVersion: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSSMDocumentDetailsFormGroup() {
		return new FormGroup<TemplateSSMDocumentDetailsFormProperties>({
			DocumentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DocumentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConformancePacksRequest {
		ConformancePackNames?: Array<string>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeConformancePacksRequestFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConformancePacksRequestFormGroup() {
		return new FormGroup<DescribeConformancePacksRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output for the <a>DescribeDeliveryChannelStatus</a> action. */
	export interface DescribeDeliveryChannelStatusResponse {
		DeliveryChannelsStatus?: Array<DeliveryChannelStatus>;
	}

	/** The output for the <a>DescribeDeliveryChannelStatus</a> action. */
	export interface DescribeDeliveryChannelStatusResponseFormProperties {
	}
	export function CreateDescribeDeliveryChannelStatusResponseFormGroup() {
		return new FormGroup<DescribeDeliveryChannelStatusResponseFormProperties>({
		});

	}


	/** <p>The status of a specified delivery channel.</p> <p>Valid values: <code>Success</code> | <code>Failure</code> </p> */
	export interface DeliveryChannelStatus {
		name?: string;
		configSnapshotDeliveryInfo?: ConfigExportDeliveryInfo;
		configHistoryDeliveryInfo?: ConfigExportDeliveryInfo;
		configStreamDeliveryInfo?: ConfigStreamDeliveryInfo;
	}

	/** <p>The status of a specified delivery channel.</p> <p>Valid values: <code>Success</code> | <code>Failure</code> </p> */
	export interface DeliveryChannelStatusFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryChannelStatusFormGroup() {
		return new FormGroup<DeliveryChannelStatusFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic. */
	export interface ConfigExportDeliveryInfo {
		lastStatus?: DeliveryStatus;
		lastErrorCode?: string;
		lastErrorMessage?: string;
		lastAttemptTime?: Date;
		lastSuccessfulTime?: Date;
		nextDeliveryTime?: Date;
	}

	/** Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic. */
	export interface ConfigExportDeliveryInfoFormProperties {
		lastStatus: FormControl<DeliveryStatus | null | undefined>,
		lastErrorCode: FormControl<string | null | undefined>,
		lastErrorMessage: FormControl<string | null | undefined>,
		lastAttemptTime: FormControl<Date | null | undefined>,
		lastSuccessfulTime: FormControl<Date | null | undefined>,
		nextDeliveryTime: FormControl<Date | null | undefined>,
	}
	export function CreateConfigExportDeliveryInfoFormGroup() {
		return new FormGroup<ConfigExportDeliveryInfoFormProperties>({
			lastStatus: new FormControl<DeliveryStatus | null | undefined>(undefined),
			lastErrorCode: new FormControl<string | null | undefined>(undefined),
			lastErrorMessage: new FormControl<string | null | undefined>(undefined),
			lastAttemptTime: new FormControl<Date | null | undefined>(undefined),
			lastSuccessfulTime: new FormControl<Date | null | undefined>(undefined),
			nextDeliveryTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DeliveryStatus { Success = 'Success', Failure = 'Failure', Not_Applicable = 'Not_Applicable' }


	/** A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic. */
	export interface ConfigStreamDeliveryInfo {
		lastStatus?: DeliveryStatus;
		lastErrorCode?: string;
		lastErrorMessage?: string;
		lastStatusChangeTime?: Date;
	}

	/** A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic. */
	export interface ConfigStreamDeliveryInfoFormProperties {
		lastStatus: FormControl<DeliveryStatus | null | undefined>,
		lastErrorCode: FormControl<string | null | undefined>,
		lastErrorMessage: FormControl<string | null | undefined>,
		lastStatusChangeTime: FormControl<Date | null | undefined>,
	}
	export function CreateConfigStreamDeliveryInfoFormGroup() {
		return new FormGroup<ConfigStreamDeliveryInfoFormProperties>({
			lastStatus: new FormControl<DeliveryStatus | null | undefined>(undefined),
			lastErrorCode: new FormControl<string | null | undefined>(undefined),
			lastErrorMessage: new FormControl<string | null | undefined>(undefined),
			lastStatusChangeTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The input for the <a>DeliveryChannelStatus</a> action. */
	export interface DescribeDeliveryChannelStatusRequest {
		DeliveryChannelNames?: Array<string>;
	}

	/** The input for the <a>DeliveryChannelStatus</a> action. */
	export interface DescribeDeliveryChannelStatusRequestFormProperties {
	}
	export function CreateDescribeDeliveryChannelStatusRequestFormGroup() {
		return new FormGroup<DescribeDeliveryChannelStatusRequestFormProperties>({
		});

	}


	/** The output for the <a>DescribeDeliveryChannels</a> action. */
	export interface DescribeDeliveryChannelsResponse {
		DeliveryChannels?: Array<DeliveryChannel>;
	}

	/** The output for the <a>DescribeDeliveryChannels</a> action. */
	export interface DescribeDeliveryChannelsResponseFormProperties {
	}
	export function CreateDescribeDeliveryChannelsResponseFormGroup() {
		return new FormGroup<DescribeDeliveryChannelsResponseFormProperties>({
		});

	}


	/** The channel through which Config delivers notifications and updated configuration states. */
	export interface DeliveryChannel {
		name?: string;
		s3BucketName?: string;
		s3KeyPrefix?: string;
		s3KmsKeyArn?: string;
		snsTopicARN?: string;
		configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties;
	}

	/** The channel through which Config delivers notifications and updated configuration states. */
	export interface DeliveryChannelFormProperties {
		name: FormControl<string | null | undefined>,
		s3BucketName: FormControl<string | null | undefined>,
		s3KeyPrefix: FormControl<string | null | undefined>,
		s3KmsKeyArn: FormControl<string | null | undefined>,
		snsTopicARN: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryChannelFormGroup() {
		return new FormGroup<DeliveryChannelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			s3BucketName: new FormControl<string | null | undefined>(undefined),
			s3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			s3KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			snsTopicARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides options for how often Config delivers configuration snapshots to the Amazon S3 bucket in your delivery channel.</p> <p>The frequency for a rule that triggers evaluations for your resources when Config delivers the configuration snapshot is set by one of two values, depending on which is less frequent:</p> <ul> <li> <p>The value for the <code>deliveryFrequency</code> parameter within the delivery channel configuration, which sets how often Config delivers configuration snapshots. This value also sets how often Config invokes evaluations for Config rules.</p> </li> <li> <p>The value for the <code>MaximumExecutionFrequency</code> parameter, which sets the maximum frequency with which Config invokes evaluations for the rule. For more information, see <a>ConfigRule</a>.</p> </li> </ul> <p>If the <code>deliveryFrequency</code> value is less frequent than the <code>MaximumExecutionFrequency</code> value for a rule, Config invokes the rule only as often as the <code>deliveryFrequency</code> value.</p> <ol> <li> <p>For example, you want your rule to run evaluations when Config delivers the configuration snapshot.</p> </li> <li> <p>You specify the <code>MaximumExecutionFrequency</code> value for <code>Six_Hours</code>. </p> </li> <li> <p>You then specify the delivery channel <code>deliveryFrequency</code> value for <code>TwentyFour_Hours</code>.</p> </li> <li> <p>Because the value for <code>deliveryFrequency</code> is less frequent than <code>MaximumExecutionFrequency</code>, Config invokes evaluations for the rule every 24 hours. </p> </li> </ol> <p>You should set the <code>MaximumExecutionFrequency</code> value to be at least as frequent as the <code>deliveryFrequency</code> value. You can view the <code>deliveryFrequency</code> value by using the <code>DescribeDeliveryChannnels</code> action.</p> <p>To update the <code>deliveryFrequency</code> with which Config delivers your configuration snapshots, use the <code>PutDeliveryChannel</code> action.</p> */
	export interface ConfigSnapshotDeliveryProperties {
		deliveryFrequency?: MaximumExecutionFrequency;
	}

	/** <p>Provides options for how often Config delivers configuration snapshots to the Amazon S3 bucket in your delivery channel.</p> <p>The frequency for a rule that triggers evaluations for your resources when Config delivers the configuration snapshot is set by one of two values, depending on which is less frequent:</p> <ul> <li> <p>The value for the <code>deliveryFrequency</code> parameter within the delivery channel configuration, which sets how often Config delivers configuration snapshots. This value also sets how often Config invokes evaluations for Config rules.</p> </li> <li> <p>The value for the <code>MaximumExecutionFrequency</code> parameter, which sets the maximum frequency with which Config invokes evaluations for the rule. For more information, see <a>ConfigRule</a>.</p> </li> </ul> <p>If the <code>deliveryFrequency</code> value is less frequent than the <code>MaximumExecutionFrequency</code> value for a rule, Config invokes the rule only as often as the <code>deliveryFrequency</code> value.</p> <ol> <li> <p>For example, you want your rule to run evaluations when Config delivers the configuration snapshot.</p> </li> <li> <p>You specify the <code>MaximumExecutionFrequency</code> value for <code>Six_Hours</code>. </p> </li> <li> <p>You then specify the delivery channel <code>deliveryFrequency</code> value for <code>TwentyFour_Hours</code>.</p> </li> <li> <p>Because the value for <code>deliveryFrequency</code> is less frequent than <code>MaximumExecutionFrequency</code>, Config invokes evaluations for the rule every 24 hours. </p> </li> </ol> <p>You should set the <code>MaximumExecutionFrequency</code> value to be at least as frequent as the <code>deliveryFrequency</code> value. You can view the <code>deliveryFrequency</code> value by using the <code>DescribeDeliveryChannnels</code> action.</p> <p>To update the <code>deliveryFrequency</code> with which Config delivers your configuration snapshots, use the <code>PutDeliveryChannel</code> action.</p> */
	export interface ConfigSnapshotDeliveryPropertiesFormProperties {
		deliveryFrequency: FormControl<MaximumExecutionFrequency | null | undefined>,
	}
	export function CreateConfigSnapshotDeliveryPropertiesFormGroup() {
		return new FormGroup<ConfigSnapshotDeliveryPropertiesFormProperties>({
			deliveryFrequency: new FormControl<MaximumExecutionFrequency | null | undefined>(undefined),
		});

	}


	/** The input for the <a>DescribeDeliveryChannels</a> action. */
	export interface DescribeDeliveryChannelsRequest {
		DeliveryChannelNames?: Array<string>;
	}

	/** The input for the <a>DescribeDeliveryChannels</a> action. */
	export interface DescribeDeliveryChannelsRequestFormProperties {
	}
	export function CreateDescribeDeliveryChannelsRequestFormGroup() {
		return new FormGroup<DescribeDeliveryChannelsRequestFormProperties>({
		});

	}

	export interface DescribeOrganizationConfigRuleStatusesResponse {
		OrganizationConfigRuleStatuses?: Array<OrganizationConfigRuleStatus>;
		NextToken?: string;
	}
	export interface DescribeOrganizationConfigRuleStatusesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationConfigRuleStatusesResponseFormGroup() {
		return new FormGroup<DescribeOrganizationConfigRuleStatusesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns the status for an organization Config rule in an organization. */
	export interface OrganizationConfigRuleStatus {

		/** Required */
		OrganizationConfigRuleName: string;

		/** Required */
		OrganizationRuleStatus: OrganizationRuleStatus;
		ErrorCode?: string;
		ErrorMessage?: string;
		LastUpdateTime?: Date;
	}

	/** Returns the status for an organization Config rule in an organization. */
	export interface OrganizationConfigRuleStatusFormProperties {

		/** Required */
		OrganizationConfigRuleName: FormControl<string | null | undefined>,

		/** Required */
		OrganizationRuleStatus: FormControl<OrganizationRuleStatus | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOrganizationConfigRuleStatusFormGroup() {
		return new FormGroup<OrganizationConfigRuleStatusFormProperties>({
			OrganizationConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OrganizationRuleStatus: new FormControl<OrganizationRuleStatus | null | undefined>(undefined, [Validators.required]),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OrganizationRuleStatus { CREATE_SUCCESSFUL = 'CREATE_SUCCESSFUL', CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', CREATE_FAILED = 'CREATE_FAILED', DELETE_SUCCESSFUL = 'DELETE_SUCCESSFUL', DELETE_FAILED = 'DELETE_FAILED', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', UPDATE_SUCCESSFUL = 'UPDATE_SUCCESSFUL', UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS', UPDATE_FAILED = 'UPDATE_FAILED' }

	export interface DescribeOrganizationConfigRuleStatusesRequest {
		OrganizationConfigRuleNames?: Array<string>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeOrganizationConfigRuleStatusesRequestFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationConfigRuleStatusesRequestFormGroup() {
		return new FormGroup<DescribeOrganizationConfigRuleStatusesRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeOrganizationConfigRulesResponse {
		OrganizationConfigRules?: Array<OrganizationConfigRule>;
		NextToken?: string;
	}
	export interface DescribeOrganizationConfigRulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationConfigRulesResponseFormGroup() {
		return new FormGroup<DescribeOrganizationConfigRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An organization Config rule that has information about Config rules that Config creates in member accounts. */
	export interface OrganizationConfigRule {

		/** Required */
		OrganizationConfigRuleName: string;

		/** Required */
		OrganizationConfigRuleArn: string;
		OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
		OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;
		ExcludedAccounts?: Array<string>;
		LastUpdateTime?: Date;
		OrganizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadataNoPolicy;
	}

	/** An organization Config rule that has information about Config rules that Config creates in member accounts. */
	export interface OrganizationConfigRuleFormProperties {

		/** Required */
		OrganizationConfigRuleName: FormControl<string | null | undefined>,

		/** Required */
		OrganizationConfigRuleArn: FormControl<string | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOrganizationConfigRuleFormGroup() {
		return new FormGroup<OrganizationConfigRuleFormProperties>({
			OrganizationConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OrganizationConfigRuleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  organization managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic. */
	export interface OrganizationManagedRuleMetadata {
		Description?: string;

		/** Required */
		RuleIdentifier: string;
		InputParameters?: string;
		MaximumExecutionFrequency?: MaximumExecutionFrequency;
		ResourceTypesScope?: Array<string>;
		ResourceIdScope?: string;
		TagKeyScope?: string;
		TagValueScope?: string;
	}

	/**  organization managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic. */
	export interface OrganizationManagedRuleMetadataFormProperties {
		Description: FormControl<string | null | undefined>,

		/** Required */
		RuleIdentifier: FormControl<string | null | undefined>,
		InputParameters: FormControl<string | null | undefined>,
		MaximumExecutionFrequency: FormControl<MaximumExecutionFrequency | null | undefined>,
		ResourceIdScope: FormControl<string | null | undefined>,
		TagKeyScope: FormControl<string | null | undefined>,
		TagValueScope: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationManagedRuleMetadataFormGroup() {
		return new FormGroup<OrganizationManagedRuleMetadataFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			RuleIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InputParameters: new FormControl<string | null | undefined>(undefined),
			MaximumExecutionFrequency: new FormControl<MaximumExecutionFrequency | null | undefined>(undefined),
			ResourceIdScope: new FormControl<string | null | undefined>(undefined),
			TagKeyScope: new FormControl<string | null | undefined>(undefined),
			TagValueScope: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  organization custom rule metadata such as resource type, resource ID of Amazon Web Services resource, Lambda function ARN, and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic. */
	export interface OrganizationCustomRuleMetadata {
		Description?: string;

		/** Required */
		LambdaFunctionArn: string;

		/** Required */
		OrganizationConfigRuleTriggerTypes: Array<OrganizationConfigRuleTriggerType>;
		InputParameters?: string;
		MaximumExecutionFrequency?: MaximumExecutionFrequency;
		ResourceTypesScope?: Array<string>;
		ResourceIdScope?: string;
		TagKeyScope?: string;
		TagValueScope?: string;
	}

	/**  organization custom rule metadata such as resource type, resource ID of Amazon Web Services resource, Lambda function ARN, and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic. */
	export interface OrganizationCustomRuleMetadataFormProperties {
		Description: FormControl<string | null | undefined>,

		/** Required */
		LambdaFunctionArn: FormControl<string | null | undefined>,
		InputParameters: FormControl<string | null | undefined>,
		MaximumExecutionFrequency: FormControl<MaximumExecutionFrequency | null | undefined>,
		ResourceIdScope: FormControl<string | null | undefined>,
		TagKeyScope: FormControl<string | null | undefined>,
		TagValueScope: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationCustomRuleMetadataFormGroup() {
		return new FormGroup<OrganizationCustomRuleMetadataFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			LambdaFunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InputParameters: new FormControl<string | null | undefined>(undefined),
			MaximumExecutionFrequency: new FormControl<MaximumExecutionFrequency | null | undefined>(undefined),
			ResourceIdScope: new FormControl<string | null | undefined>(undefined),
			TagKeyScope: new FormControl<string | null | undefined>(undefined),
			TagValueScope: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrganizationConfigRuleTriggerType { ConfigurationItemChangeNotification = 'ConfigurationItemChangeNotification', OversizedConfigurationItemChangeNotification = 'OversizedConfigurationItemChangeNotification', ScheduledNotification = 'ScheduledNotification' }


	/**  metadata for your organization Config Custom Policy rule including the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that trigger Config to evaluate Amazon Web Services resources against a rule. */
	export interface OrganizationCustomPolicyRuleMetadataNoPolicy {
		Description?: string;
		OrganizationConfigRuleTriggerTypes?: Array<OrganizationConfigRuleTriggerTypeNoSN>;
		InputParameters?: string;
		MaximumExecutionFrequency?: MaximumExecutionFrequency;
		ResourceTypesScope?: Array<string>;
		ResourceIdScope?: string;
		TagKeyScope?: string;
		TagValueScope?: string;
		PolicyRuntime?: string;
		DebugLogDeliveryAccounts?: Array<string>;
	}

	/**  metadata for your organization Config Custom Policy rule including the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that trigger Config to evaluate Amazon Web Services resources against a rule. */
	export interface OrganizationCustomPolicyRuleMetadataNoPolicyFormProperties {
		Description: FormControl<string | null | undefined>,
		InputParameters: FormControl<string | null | undefined>,
		MaximumExecutionFrequency: FormControl<MaximumExecutionFrequency | null | undefined>,
		ResourceIdScope: FormControl<string | null | undefined>,
		TagKeyScope: FormControl<string | null | undefined>,
		TagValueScope: FormControl<string | null | undefined>,
		PolicyRuntime: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationCustomPolicyRuleMetadataNoPolicyFormGroup() {
		return new FormGroup<OrganizationCustomPolicyRuleMetadataNoPolicyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			InputParameters: new FormControl<string | null | undefined>(undefined),
			MaximumExecutionFrequency: new FormControl<MaximumExecutionFrequency | null | undefined>(undefined),
			ResourceIdScope: new FormControl<string | null | undefined>(undefined),
			TagKeyScope: new FormControl<string | null | undefined>(undefined),
			TagValueScope: new FormControl<string | null | undefined>(undefined),
			PolicyRuntime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrganizationConfigRuleTriggerTypeNoSN { ConfigurationItemChangeNotification = 'ConfigurationItemChangeNotification', OversizedConfigurationItemChangeNotification = 'OversizedConfigurationItemChangeNotification' }

	export interface DescribeOrganizationConfigRulesRequest {
		OrganizationConfigRuleNames?: Array<string>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeOrganizationConfigRulesRequestFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationConfigRulesRequestFormGroup() {
		return new FormGroup<DescribeOrganizationConfigRulesRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeOrganizationConformancePackStatusesResponse {
		OrganizationConformancePackStatuses?: Array<OrganizationConformancePackStatus>;
		NextToken?: string;
	}
	export interface DescribeOrganizationConformancePackStatusesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationConformancePackStatusesResponseFormGroup() {
		return new FormGroup<DescribeOrganizationConformancePackStatusesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns the status for an organization conformance pack in an organization. */
	export interface OrganizationConformancePackStatus {

		/** Required */
		OrganizationConformancePackName: string;

		/** Required */
		Status: OrganizationRuleStatus;
		ErrorCode?: string;
		ErrorMessage?: string;
		LastUpdateTime?: Date;
	}

	/** Returns the status for an organization conformance pack in an organization. */
	export interface OrganizationConformancePackStatusFormProperties {

		/** Required */
		OrganizationConformancePackName: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<OrganizationRuleStatus | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOrganizationConformancePackStatusFormGroup() {
		return new FormGroup<OrganizationConformancePackStatusFormProperties>({
			OrganizationConformancePackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<OrganizationRuleStatus | null | undefined>(undefined, [Validators.required]),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeOrganizationConformancePackStatusesRequest {
		OrganizationConformancePackNames?: Array<string>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeOrganizationConformancePackStatusesRequestFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationConformancePackStatusesRequestFormGroup() {
		return new FormGroup<DescribeOrganizationConformancePackStatusesRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeOrganizationConformancePacksResponse {
		OrganizationConformancePacks?: Array<OrganizationConformancePack>;
		NextToken?: string;
	}
	export interface DescribeOrganizationConformancePacksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationConformancePacksResponseFormGroup() {
		return new FormGroup<DescribeOrganizationConformancePacksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An organization conformance pack that has information about conformance packs that Config creates in member accounts.  */
	export interface OrganizationConformancePack {

		/** Required */
		OrganizationConformancePackName: string;

		/** Required */
		OrganizationConformancePackArn: string;
		DeliveryS3Bucket?: string;
		DeliveryS3KeyPrefix?: string;
		ConformancePackInputParameters?: Array<ConformancePackInputParameter>;
		ExcludedAccounts?: Array<string>;

		/** Required */
		LastUpdateTime: Date;
	}

	/** An organization conformance pack that has information about conformance packs that Config creates in member accounts.  */
	export interface OrganizationConformancePackFormProperties {

		/** Required */
		OrganizationConformancePackName: FormControl<string | null | undefined>,

		/** Required */
		OrganizationConformancePackArn: FormControl<string | null | undefined>,
		DeliveryS3Bucket: FormControl<string | null | undefined>,
		DeliveryS3KeyPrefix: FormControl<string | null | undefined>,

		/** Required */
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOrganizationConformancePackFormGroup() {
		return new FormGroup<OrganizationConformancePackFormProperties>({
			OrganizationConformancePackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OrganizationConformancePackArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeliveryS3Bucket: new FormControl<string | null | undefined>(undefined),
			DeliveryS3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeOrganizationConformancePacksRequest {
		OrganizationConformancePackNames?: Array<string>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeOrganizationConformancePacksRequestFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationConformancePacksRequestFormGroup() {
		return new FormGroup<DescribeOrganizationConformancePacksRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePendingAggregationRequestsResponse {
		PendingAggregationRequests?: Array<PendingAggregationRequest>;
		NextToken?: string;
	}
	export interface DescribePendingAggregationRequestsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePendingAggregationRequestsResponseFormGroup() {
		return new FormGroup<DescribePendingAggregationRequestsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the account ID and region of an aggregator account that is requesting authorization but is not yet authorized. */
	export interface PendingAggregationRequest {
		RequesterAccountId?: string;
		RequesterAwsRegion?: string;
	}

	/** An object that represents the account ID and region of an aggregator account that is requesting authorization but is not yet authorized. */
	export interface PendingAggregationRequestFormProperties {
		RequesterAccountId: FormControl<string | null | undefined>,
		RequesterAwsRegion: FormControl<string | null | undefined>,
	}
	export function CreatePendingAggregationRequestFormGroup() {
		return new FormGroup<PendingAggregationRequestFormProperties>({
			RequesterAccountId: new FormControl<string | null | undefined>(undefined),
			RequesterAwsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePendingAggregationRequestsRequest {
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribePendingAggregationRequestsRequestFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePendingAggregationRequestsRequestFormGroup() {
		return new FormGroup<DescribePendingAggregationRequestsRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRemediationConfigurationsResponse {
		RemediationConfigurations?: Array<RemediationConfiguration>;
	}
	export interface DescribeRemediationConfigurationsResponseFormProperties {
	}
	export function CreateDescribeRemediationConfigurationsResponseFormGroup() {
		return new FormGroup<DescribeRemediationConfigurationsResponseFormProperties>({
		});

	}


	/** An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action. */
	export interface RemediationConfiguration {

		/** Required */
		ConfigRuleName: string;

		/** Required */
		TargetType: RemediationTargetType;

		/** Required */
		TargetId: string;
		TargetVersion?: string;
		Parameters?: RemediationParameters;
		ResourceType?: string;
		Automatic?: boolean | null;
		ExecutionControls?: ExecutionControls;
		MaximumAutomaticAttempts?: number | null;
		RetryAttemptSeconds?: number | null;
		Arn?: string;
		CreatedByService?: string;
	}

	/** An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action. */
	export interface RemediationConfigurationFormProperties {

		/** Required */
		ConfigRuleName: FormControl<string | null | undefined>,

		/** Required */
		TargetType: FormControl<RemediationTargetType | null | undefined>,

		/** Required */
		TargetId: FormControl<string | null | undefined>,
		TargetVersion: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		Automatic: FormControl<boolean | null | undefined>,
		MaximumAutomaticAttempts: FormControl<number | null | undefined>,
		RetryAttemptSeconds: FormControl<number | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		CreatedByService: FormControl<string | null | undefined>,
	}
	export function CreateRemediationConfigurationFormGroup() {
		return new FormGroup<RemediationConfigurationFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetType: new FormControl<RemediationTargetType | null | undefined>(undefined, [Validators.required]),
			TargetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetVersion: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			Automatic: new FormControl<boolean | null | undefined>(undefined),
			MaximumAutomaticAttempts: new FormControl<number | null | undefined>(undefined),
			RetryAttemptSeconds: new FormControl<number | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedByService: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RemediationTargetType { SSM_DOCUMENT = 'SSM_DOCUMENT' }

	export interface RemediationParameters {
	}
	export interface RemediationParametersFormProperties {
	}
	export function CreateRemediationParametersFormGroup() {
		return new FormGroup<RemediationParametersFormProperties>({
		});

	}


	/** The controls that Config uses for executing remediations. */
	export interface ExecutionControls {
		SsmControls?: SsmControls;
	}

	/** The controls that Config uses for executing remediations. */
	export interface ExecutionControlsFormProperties {
	}
	export function CreateExecutionControlsFormGroup() {
		return new FormGroup<ExecutionControlsFormProperties>({
		});

	}


	/** Amazon Web Services Systems Manager (SSM) specific remediation controls. */
	export interface SsmControls {
		ConcurrentExecutionRatePercentage?: number | null;
		ErrorPercentage?: number | null;
	}

	/** Amazon Web Services Systems Manager (SSM) specific remediation controls. */
	export interface SsmControlsFormProperties {
		ConcurrentExecutionRatePercentage: FormControl<number | null | undefined>,
		ErrorPercentage: FormControl<number | null | undefined>,
	}
	export function CreateSsmControlsFormGroup() {
		return new FormGroup<SsmControlsFormProperties>({
			ConcurrentExecutionRatePercentage: new FormControl<number | null | undefined>(undefined),
			ErrorPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeRemediationConfigurationsRequest {

		/** Required */
		ConfigRuleNames: Array<string>;
	}
	export interface DescribeRemediationConfigurationsRequestFormProperties {
	}
	export function CreateDescribeRemediationConfigurationsRequestFormGroup() {
		return new FormGroup<DescribeRemediationConfigurationsRequestFormProperties>({
		});

	}

	export interface DescribeRemediationExceptionsResponse {
		RemediationExceptions?: Array<RemediationException>;
		NextToken?: string;
	}
	export interface DescribeRemediationExceptionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRemediationExceptionsResponseFormGroup() {
		return new FormGroup<DescribeRemediationExceptionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the details about the remediation exception. The details include the rule name, an explanation of an exception, the time when the exception will be deleted, the resource ID, and resource type.  */
	export interface RemediationException {

		/** Required */
		ConfigRuleName: string;

		/** Required */
		ResourceType: string;

		/** Required */
		ResourceId: string;
		Message?: string;
		ExpirationTime?: Date;
	}

	/** An object that represents the details about the remediation exception. The details include the rule name, an explanation of an exception, the time when the exception will be deleted, the resource ID, and resource type.  */
	export interface RemediationExceptionFormProperties {

		/** Required */
		ConfigRuleName: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		ExpirationTime: FormControl<Date | null | undefined>,
	}
	export function CreateRemediationExceptionFormGroup() {
		return new FormGroup<RemediationExceptionFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined),
			ExpirationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeRemediationExceptionsRequest {

		/** Required */
		ConfigRuleName: string;
		ResourceKeys?: Array<RemediationExceptionResourceKey>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeRemediationExceptionsRequestFormProperties {

		/** Required */
		ConfigRuleName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRemediationExceptionsRequestFormGroup() {
		return new FormGroup<DescribeRemediationExceptionsRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRemediationExecutionStatusResponse {
		RemediationExecutionStatuses?: Array<RemediationExecutionStatus>;
		NextToken?: string;
	}
	export interface DescribeRemediationExecutionStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRemediationExecutionStatusResponseFormGroup() {
		return new FormGroup<DescribeRemediationExecutionStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details of the current status of the invoked remediation action for that resource. */
	export interface RemediationExecutionStatus {

		/** The details that identify a resource within Config, including the resource type and resource ID. */
		ResourceKey?: ResourceKey;
		State?: RemediationExecutionState;
		StepDetails?: Array<RemediationExecutionStep>;
		InvocationTime?: Date;
		LastUpdatedTime?: Date;
	}

	/** Provides details of the current status of the invoked remediation action for that resource. */
	export interface RemediationExecutionStatusFormProperties {
		State: FormControl<RemediationExecutionState | null | undefined>,
		InvocationTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateRemediationExecutionStatusFormGroup() {
		return new FormGroup<RemediationExecutionStatusFormProperties>({
			State: new FormControl<RemediationExecutionState | null | undefined>(undefined),
			InvocationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RemediationExecutionState { QUEUED = 'QUEUED', IN_PROGRESS = 'IN_PROGRESS', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }


	/** Name of the step from the SSM document. */
	export interface RemediationExecutionStep {
		Name?: string;
		State?: RemediationExecutionStepState;
		ErrorMessage?: string;
		StartTime?: Date;
		StopTime?: Date;
	}

	/** Name of the step from the SSM document. */
	export interface RemediationExecutionStepFormProperties {
		Name: FormControl<string | null | undefined>,
		State: FormControl<RemediationExecutionStepState | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		StopTime: FormControl<Date | null | undefined>,
	}
	export function CreateRemediationExecutionStepFormGroup() {
		return new FormGroup<RemediationExecutionStepFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<RemediationExecutionStepState | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			StopTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RemediationExecutionStepState { SUCCEEDED = 'SUCCEEDED', PENDING = 'PENDING', FAILED = 'FAILED' }

	export interface DescribeRemediationExecutionStatusRequest {

		/** Required */
		ConfigRuleName: string;
		ResourceKeys?: Array<ResourceKey>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeRemediationExecutionStatusRequestFormProperties {

		/** Required */
		ConfigRuleName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRemediationExecutionStatusRequestFormGroup() {
		return new FormGroup<DescribeRemediationExecutionStatusRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRetentionConfigurationsResponse {
		RetentionConfigurations?: Array<RetentionConfiguration>;
		NextToken?: string;
	}
	export interface DescribeRetentionConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRetentionConfigurationsResponseFormGroup() {
		return new FormGroup<DescribeRetentionConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in Config. */
	export interface RetentionConfiguration {

		/** Required */
		Name: string;

		/** Required */
		RetentionPeriodInDays: number;
	}

	/** An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in Config. */
	export interface RetentionConfigurationFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RetentionPeriodInDays: FormControl<number | null | undefined>,
	}
	export function CreateRetentionConfigurationFormGroup() {
		return new FormGroup<RetentionConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RetentionPeriodInDays: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeRetentionConfigurationsRequest {
		RetentionConfigurationNames?: Array<string>;
		NextToken?: string;
	}
	export interface DescribeRetentionConfigurationsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRetentionConfigurationsRequestFormGroup() {
		return new FormGroup<DescribeRetentionConfigurationsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAggregateComplianceDetailsByConfigRuleResponse {
		AggregateEvaluationResults?: Array<AggregateEvaluationResult>;
		NextToken?: string;
	}
	export interface GetAggregateComplianceDetailsByConfigRuleResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAggregateComplianceDetailsByConfigRuleResponseFormGroup() {
		return new FormGroup<GetAggregateComplianceDetailsByConfigRuleResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of an Config evaluation for an account ID and region in an aggregator. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.  */
	export interface AggregateEvaluationResult {
		EvaluationResultIdentifier?: EvaluationResultIdentifier;
		ComplianceType?: ComplianceType;
		ResultRecordedTime?: Date;
		ConfigRuleInvokedTime?: Date;
		Annotation?: string;
		AccountId?: string;
		AwsRegion?: string;
	}

	/** The details of an Config evaluation for an account ID and region in an aggregator. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.  */
	export interface AggregateEvaluationResultFormProperties {
		ComplianceType: FormControl<ComplianceType | null | undefined>,
		ResultRecordedTime: FormControl<Date | null | undefined>,
		ConfigRuleInvokedTime: FormControl<Date | null | undefined>,
		Annotation: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateAggregateEvaluationResultFormGroup() {
		return new FormGroup<AggregateEvaluationResultFormProperties>({
			ComplianceType: new FormControl<ComplianceType | null | undefined>(undefined),
			ResultRecordedTime: new FormControl<Date | null | undefined>(undefined),
			ConfigRuleInvokedTime: new FormControl<Date | null | undefined>(undefined),
			Annotation: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Uniquely identifies an evaluation result. */
	export interface EvaluationResultIdentifier {
		EvaluationResultQualifier?: EvaluationResultQualifier;
		OrderingTimestamp?: Date;
		ResourceEvaluationId?: string;
	}

	/** Uniquely identifies an evaluation result. */
	export interface EvaluationResultIdentifierFormProperties {
		OrderingTimestamp: FormControl<Date | null | undefined>,
		ResourceEvaluationId: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationResultIdentifierFormGroup() {
		return new FormGroup<EvaluationResultIdentifierFormProperties>({
			OrderingTimestamp: new FormControl<Date | null | undefined>(undefined),
			ResourceEvaluationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies an Config rule that evaluated an Amazon Web Services resource, and provides the type and ID of the resource that the rule evaluated. */
	export interface EvaluationResultQualifier {
		ConfigRuleName?: string;
		ResourceType?: string;
		ResourceId?: string;
		EvaluationMode?: EvaluationMode;
	}

	/** Identifies an Config rule that evaluated an Amazon Web Services resource, and provides the type and ID of the resource that the rule evaluated. */
	export interface EvaluationResultQualifierFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		EvaluationMode: FormControl<EvaluationMode | null | undefined>,
	}
	export function CreateEvaluationResultQualifierFormGroup() {
		return new FormGroup<EvaluationResultQualifierFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			EvaluationMode: new FormControl<EvaluationMode | null | undefined>(undefined),
		});

	}

	export interface GetAggregateComplianceDetailsByConfigRuleRequest {

		/** Required */
		ConfigurationAggregatorName: string;

		/** Required */
		ConfigRuleName: string;

		/** Required */
		AccountId: string;

		/** Required */
		AwsRegion: string;
		ComplianceType?: ComplianceType;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface GetAggregateComplianceDetailsByConfigRuleRequestFormProperties {

		/** Required */
		ConfigurationAggregatorName: FormControl<string | null | undefined>,

		/** Required */
		ConfigRuleName: FormControl<string | null | undefined>,

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		AwsRegion: FormControl<string | null | undefined>,
		ComplianceType: FormControl<ComplianceType | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAggregateComplianceDetailsByConfigRuleRequestFormGroup() {
		return new FormGroup<GetAggregateComplianceDetailsByConfigRuleRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AwsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComplianceType: new FormControl<ComplianceType | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAggregateConfigRuleComplianceSummaryResponse {
		GroupByKey?: string;
		AggregateComplianceCounts?: Array<AggregateComplianceCount>;
		NextToken?: string;
	}
	export interface GetAggregateConfigRuleComplianceSummaryResponseFormProperties {
		GroupByKey: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAggregateConfigRuleComplianceSummaryResponseFormGroup() {
		return new FormGroup<GetAggregateConfigRuleComplianceSummaryResponseFormProperties>({
			GroupByKey: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator. */
	export interface AggregateComplianceCount {
		GroupName?: string;
		ComplianceSummary?: ComplianceSummary;
	}

	/** Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator. */
	export interface AggregateComplianceCountFormProperties {
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateAggregateComplianceCountFormGroup() {
		return new FormGroup<AggregateComplianceCountFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The number of Config rules or Amazon Web Services resources that are compliant and noncompliant. */
	export interface ComplianceSummary {
		CompliantResourceCount?: ComplianceContributorCount;
		NonCompliantResourceCount?: ComplianceContributorCount;
		ComplianceSummaryTimestamp?: Date;
	}

	/** The number of Config rules or Amazon Web Services resources that are compliant and noncompliant. */
	export interface ComplianceSummaryFormProperties {
		ComplianceSummaryTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateComplianceSummaryFormGroup() {
		return new FormGroup<ComplianceSummaryFormProperties>({
			ComplianceSummaryTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetAggregateConfigRuleComplianceSummaryRequest {

		/** Required */
		ConfigurationAggregatorName: string;
		Filters?: ConfigRuleComplianceSummaryFilters;
		GroupByKey?: ConfigRuleComplianceSummaryGroupKey;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface GetAggregateConfigRuleComplianceSummaryRequestFormProperties {

		/** Required */
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
		GroupByKey: FormControl<ConfigRuleComplianceSummaryGroupKey | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAggregateConfigRuleComplianceSummaryRequestFormGroup() {
		return new FormGroup<GetAggregateConfigRuleComplianceSummaryRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupByKey: new FormControl<ConfigRuleComplianceSummaryGroupKey | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters the results based on the account IDs and regions. */
	export interface ConfigRuleComplianceSummaryFilters {
		AccountId?: string;
		AwsRegion?: string;
	}

	/** Filters the results based on the account IDs and regions. */
	export interface ConfigRuleComplianceSummaryFiltersFormProperties {
		AccountId: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateConfigRuleComplianceSummaryFiltersFormGroup() {
		return new FormGroup<ConfigRuleComplianceSummaryFiltersFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConfigRuleComplianceSummaryGroupKey { ACCOUNT_ID = 'ACCOUNT_ID', AWS_REGION = 'AWS_REGION' }

	export interface GetAggregateConformancePackComplianceSummaryResponse {
		AggregateConformancePackComplianceSummaries?: Array<AggregateConformancePackComplianceSummary>;
		GroupByKey?: string;
		NextToken?: string;
	}
	export interface GetAggregateConformancePackComplianceSummaryResponseFormProperties {
		GroupByKey: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAggregateConformancePackComplianceSummaryResponseFormGroup() {
		return new FormGroup<GetAggregateConformancePackComplianceSummaryResponseFormProperties>({
			GroupByKey: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of compliance based on either account ID or region.  */
	export interface AggregateConformancePackComplianceSummary {
		ComplianceSummary?: AggregateConformancePackComplianceCount;
		GroupName?: string;
	}

	/** Provides a summary of compliance based on either account ID or region.  */
	export interface AggregateConformancePackComplianceSummaryFormProperties {
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateAggregateConformancePackComplianceSummaryFormGroup() {
		return new FormGroup<AggregateConformancePackComplianceSummaryFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The number of conformance packs that are compliant and noncompliant. */
	export interface AggregateConformancePackComplianceCount {
		CompliantConformancePackCount?: number | null;
		NonCompliantConformancePackCount?: number | null;
	}

	/** The number of conformance packs that are compliant and noncompliant. */
	export interface AggregateConformancePackComplianceCountFormProperties {
		CompliantConformancePackCount: FormControl<number | null | undefined>,
		NonCompliantConformancePackCount: FormControl<number | null | undefined>,
	}
	export function CreateAggregateConformancePackComplianceCountFormGroup() {
		return new FormGroup<AggregateConformancePackComplianceCountFormProperties>({
			CompliantConformancePackCount: new FormControl<number | null | undefined>(undefined),
			NonCompliantConformancePackCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAggregateConformancePackComplianceSummaryRequest {

		/** Required */
		ConfigurationAggregatorName: string;
		Filters?: AggregateConformancePackComplianceSummaryFilters;
		GroupByKey?: ConfigRuleComplianceSummaryGroupKey;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface GetAggregateConformancePackComplianceSummaryRequestFormProperties {

		/** Required */
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
		GroupByKey: FormControl<ConfigRuleComplianceSummaryGroupKey | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAggregateConformancePackComplianceSummaryRequestFormGroup() {
		return new FormGroup<GetAggregateConformancePackComplianceSummaryRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupByKey: new FormControl<ConfigRuleComplianceSummaryGroupKey | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters the results based on account ID and region.  */
	export interface AggregateConformancePackComplianceSummaryFilters {
		AccountId?: string;
		AwsRegion?: string;
	}

	/** Filters the results based on account ID and region.  */
	export interface AggregateConformancePackComplianceSummaryFiltersFormProperties {
		AccountId: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateAggregateConformancePackComplianceSummaryFiltersFormGroup() {
		return new FormGroup<AggregateConformancePackComplianceSummaryFiltersFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAggregateDiscoveredResourceCountsResponse {

		/** Required */
		TotalDiscoveredResources: number;
		GroupByKey?: string;
		GroupedResourceCounts?: Array<GroupedResourceCount>;
		NextToken?: string;
	}
	export interface GetAggregateDiscoveredResourceCountsResponseFormProperties {

		/** Required */
		TotalDiscoveredResources: FormControl<number | null | undefined>,
		GroupByKey: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAggregateDiscoveredResourceCountsResponseFormGroup() {
		return new FormGroup<GetAggregateDiscoveredResourceCountsResponseFormProperties>({
			TotalDiscoveredResources: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			GroupByKey: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The count of resources that are grouped by the group name. */
	export interface GroupedResourceCount {

		/** Required */
		GroupName: string;

		/** Required */
		ResourceCount: number;
	}

	/** The count of resources that are grouped by the group name. */
	export interface GroupedResourceCountFormProperties {

		/** Required */
		GroupName: FormControl<string | null | undefined>,

		/** Required */
		ResourceCount: FormControl<number | null | undefined>,
	}
	export function CreateGroupedResourceCountFormGroup() {
		return new FormGroup<GroupedResourceCountFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAggregateDiscoveredResourceCountsRequest {

		/** Required */
		ConfigurationAggregatorName: string;
		Filters?: ResourceCountFilters;
		GroupByKey?: ResourceCountGroupKey;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface GetAggregateDiscoveredResourceCountsRequestFormProperties {

		/** Required */
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
		GroupByKey: FormControl<ResourceCountGroupKey | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAggregateDiscoveredResourceCountsRequestFormGroup() {
		return new FormGroup<GetAggregateDiscoveredResourceCountsRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupByKey: new FormControl<ResourceCountGroupKey | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters the resource count based on account ID, region, and resource type. */
	export interface ResourceCountFilters {
		ResourceType?: ResourceType;
		AccountId?: string;
		Region?: string;
	}

	/** Filters the resource count based on account ID, region, and resource type. */
	export interface ResourceCountFiltersFormProperties {
		ResourceType: FormControl<ResourceType | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
	}
	export function CreateResourceCountFiltersFormGroup() {
		return new FormGroup<ResourceCountFiltersFormProperties>({
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceCountGroupKey { RESOURCE_TYPE = 'RESOURCE_TYPE', ACCOUNT_ID = 'ACCOUNT_ID', AWS_REGION = 'AWS_REGION' }

	export interface GetAggregateResourceConfigResponse {
		ConfigurationItem?: ConfigurationItem;
	}
	export interface GetAggregateResourceConfigResponseFormProperties {
	}
	export function CreateGetAggregateResourceConfigResponseFormGroup() {
		return new FormGroup<GetAggregateResourceConfigResponseFormProperties>({
		});

	}


	/** A list that contains detailed configurations of a specified resource. */
	export interface ConfigurationItem {
		version?: string;
		accountId?: string;
		configurationItemCaptureTime?: Date;
		configurationItemStatus?: ConfigurationItemStatus;
		configurationStateId?: string;
		configurationItemMD5Hash?: string;
		arn?: string;
		resourceType?: ResourceType;
		resourceId?: string;
		resourceName?: string;
		awsRegion?: string;
		availabilityZone?: string;
		resourceCreationTime?: Date;
		tags?: Tags;
		relatedEvents?: Array<string>;
		relationships?: Array<Relationship>;
		configuration?: string;
		supplementaryConfiguration?: SupplementaryConfiguration;
	}

	/** A list that contains detailed configurations of a specified resource. */
	export interface ConfigurationItemFormProperties {
		version: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
		configurationItemCaptureTime: FormControl<Date | null | undefined>,
		configurationItemStatus: FormControl<ConfigurationItemStatus | null | undefined>,
		configurationStateId: FormControl<string | null | undefined>,
		configurationItemMD5Hash: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		resourceType: FormControl<ResourceType | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
		availabilityZone: FormControl<string | null | undefined>,
		resourceCreationTime: FormControl<Date | null | undefined>,
		configuration: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationItemFormGroup() {
		return new FormGroup<ConfigurationItemFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
			configurationItemCaptureTime: new FormControl<Date | null | undefined>(undefined),
			configurationItemStatus: new FormControl<ConfigurationItemStatus | null | undefined>(undefined),
			configurationStateId: new FormControl<string | null | undefined>(undefined),
			configurationItemMD5Hash: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
			availabilityZone: new FormControl<string | null | undefined>(undefined),
			resourceCreationTime: new FormControl<Date | null | undefined>(undefined),
			configuration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}


	/** The relationship of the related resource to the main resource. */
	export interface Relationship {
		resourceType?: ResourceType;
		resourceId?: string;
		resourceName?: string;
		relationshipName?: string;
	}

	/** The relationship of the related resource to the main resource. */
	export interface RelationshipFormProperties {
		resourceType: FormControl<ResourceType | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		relationshipName: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipFormGroup() {
		return new FormGroup<RelationshipFormProperties>({
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			relationshipName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAggregateResourceConfigRequest {

		/** Required */
		ConfigurationAggregatorName: string;

		/** Required */
		ResourceIdentifier: AggregateResourceIdentifier;
	}
	export interface GetAggregateResourceConfigRequestFormProperties {

		/** Required */
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
	}
	export function CreateGetAggregateResourceConfigRequestFormGroup() {
		return new FormGroup<GetAggregateResourceConfigRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OversizedConfigurationItemException {
	}
	export interface OversizedConfigurationItemExceptionFormProperties {
	}
	export function CreateOversizedConfigurationItemExceptionFormGroup() {
		return new FormGroup<OversizedConfigurationItemExceptionFormProperties>({
		});

	}

	export interface ResourceNotDiscoveredException {
	}
	export interface ResourceNotDiscoveredExceptionFormProperties {
	}
	export function CreateResourceNotDiscoveredExceptionFormGroup() {
		return new FormGroup<ResourceNotDiscoveredExceptionFormProperties>({
		});

	}


	/** <p/> */
	export interface GetComplianceDetailsByConfigRuleResponse {
		EvaluationResults?: Array<EvaluationResult>;
		NextToken?: string;
	}

	/** <p/> */
	export interface GetComplianceDetailsByConfigRuleResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetComplianceDetailsByConfigRuleResponseFormGroup() {
		return new FormGroup<GetComplianceDetailsByConfigRuleResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of an Config evaluation. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information. */
	export interface EvaluationResult {
		EvaluationResultIdentifier?: EvaluationResultIdentifier;
		ComplianceType?: ComplianceType;
		ResultRecordedTime?: Date;
		ConfigRuleInvokedTime?: Date;
		Annotation?: string;
		ResultToken?: string;
	}

	/** The details of an Config evaluation. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information. */
	export interface EvaluationResultFormProperties {
		ComplianceType: FormControl<ComplianceType | null | undefined>,
		ResultRecordedTime: FormControl<Date | null | undefined>,
		ConfigRuleInvokedTime: FormControl<Date | null | undefined>,
		Annotation: FormControl<string | null | undefined>,
		ResultToken: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationResultFormGroup() {
		return new FormGroup<EvaluationResultFormProperties>({
			ComplianceType: new FormControl<ComplianceType | null | undefined>(undefined),
			ResultRecordedTime: new FormControl<Date | null | undefined>(undefined),
			ConfigRuleInvokedTime: new FormControl<Date | null | undefined>(undefined),
			Annotation: new FormControl<string | null | undefined>(undefined),
			ResultToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface GetComplianceDetailsByConfigRuleRequest {

		/** Required */
		ConfigRuleName: string;
		ComplianceTypes?: Array<ComplianceType>;
		Limit?: number | null;
		NextToken?: string;
	}

	/** <p/> */
	export interface GetComplianceDetailsByConfigRuleRequestFormProperties {

		/** Required */
		ConfigRuleName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetComplianceDetailsByConfigRuleRequestFormGroup() {
		return new FormGroup<GetComplianceDetailsByConfigRuleRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface GetComplianceDetailsByResourceResponse {
		EvaluationResults?: Array<EvaluationResult>;
		NextToken?: string;
	}

	/** <p/> */
	export interface GetComplianceDetailsByResourceResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetComplianceDetailsByResourceResponseFormGroup() {
		return new FormGroup<GetComplianceDetailsByResourceResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface GetComplianceDetailsByResourceRequest {
		ResourceType?: string;
		ResourceId?: string;
		ComplianceTypes?: Array<ComplianceType>;
		NextToken?: string;
		ResourceEvaluationId?: string;
	}

	/** <p/> */
	export interface GetComplianceDetailsByResourceRequestFormProperties {
		ResourceType: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		ResourceEvaluationId: FormControl<string | null | undefined>,
	}
	export function CreateGetComplianceDetailsByResourceRequestFormGroup() {
		return new FormGroup<GetComplianceDetailsByResourceRequestFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ResourceEvaluationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface GetComplianceSummaryByConfigRuleResponse {
		ComplianceSummary?: ComplianceSummary;
	}

	/** <p/> */
	export interface GetComplianceSummaryByConfigRuleResponseFormProperties {
	}
	export function CreateGetComplianceSummaryByConfigRuleResponseFormGroup() {
		return new FormGroup<GetComplianceSummaryByConfigRuleResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface GetComplianceSummaryByResourceTypeResponse {
		ComplianceSummariesByResourceType?: Array<ComplianceSummaryByResourceType>;
	}

	/** <p/> */
	export interface GetComplianceSummaryByResourceTypeResponseFormProperties {
	}
	export function CreateGetComplianceSummaryByResourceTypeResponseFormGroup() {
		return new FormGroup<GetComplianceSummaryByResourceTypeResponseFormProperties>({
		});

	}


	/** The number of Amazon Web Services resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each. */
	export interface ComplianceSummaryByResourceType {
		ResourceType?: string;
		ComplianceSummary?: ComplianceSummary;
	}

	/** The number of Amazon Web Services resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each. */
	export interface ComplianceSummaryByResourceTypeFormProperties {
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateComplianceSummaryByResourceTypeFormGroup() {
		return new FormGroup<ComplianceSummaryByResourceTypeFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface GetComplianceSummaryByResourceTypeRequest {
		ResourceTypes?: Array<string>;
	}

	/** <p/> */
	export interface GetComplianceSummaryByResourceTypeRequestFormProperties {
	}
	export function CreateGetComplianceSummaryByResourceTypeRequestFormGroup() {
		return new FormGroup<GetComplianceSummaryByResourceTypeRequestFormProperties>({
		});

	}

	export interface GetConformancePackComplianceDetailsResponse {

		/** Required */
		ConformancePackName: string;
		ConformancePackRuleEvaluationResults?: Array<ConformancePackEvaluationResult>;
		NextToken?: string;
	}
	export interface GetConformancePackComplianceDetailsResponseFormProperties {

		/** Required */
		ConformancePackName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetConformancePackComplianceDetailsResponseFormGroup() {
		return new FormGroup<GetConformancePackComplianceDetailsResponseFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of a conformance pack evaluation. Provides Config rule and Amazon Web Services resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information.  */
	export interface ConformancePackEvaluationResult {

		/** Required */
		ComplianceType: ConformancePackComplianceType;

		/**
		 * Uniquely identifies an evaluation result.
		 * Required
		 */
		EvaluationResultIdentifier: EvaluationResultIdentifier;

		/** Required */
		ConfigRuleInvokedTime: Date;

		/** Required */
		ResultRecordedTime: Date;
		Annotation?: string;
	}

	/** The details of a conformance pack evaluation. Provides Config rule and Amazon Web Services resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information.  */
	export interface ConformancePackEvaluationResultFormProperties {

		/** Required */
		ComplianceType: FormControl<ConformancePackComplianceType | null | undefined>,

		/** Required */
		ConfigRuleInvokedTime: FormControl<Date | null | undefined>,

		/** Required */
		ResultRecordedTime: FormControl<Date | null | undefined>,
		Annotation: FormControl<string | null | undefined>,
	}
	export function CreateConformancePackEvaluationResultFormGroup() {
		return new FormGroup<ConformancePackEvaluationResultFormProperties>({
			ComplianceType: new FormControl<ConformancePackComplianceType | null | undefined>(undefined, [Validators.required]),
			ConfigRuleInvokedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ResultRecordedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Annotation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetConformancePackComplianceDetailsRequest {

		/** Required */
		ConformancePackName: string;
		Filters?: ConformancePackEvaluationFilters;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface GetConformancePackComplianceDetailsRequestFormProperties {

		/** Required */
		ConformancePackName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetConformancePackComplianceDetailsRequestFormGroup() {
		return new FormGroup<GetConformancePackComplianceDetailsRequestFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters a conformance pack by Config rule names, compliance types, Amazon Web Services resource types, and resource IDs. */
	export interface ConformancePackEvaluationFilters {
		ConfigRuleNames?: Array<string>;
		ComplianceType?: ConformancePackComplianceType;
		ResourceType?: string;
		ResourceIds?: Array<string>;
	}

	/** Filters a conformance pack by Config rule names, compliance types, Amazon Web Services resource types, and resource IDs. */
	export interface ConformancePackEvaluationFiltersFormProperties {
		ComplianceType: FormControl<ConformancePackComplianceType | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateConformancePackEvaluationFiltersFormGroup() {
		return new FormGroup<ConformancePackEvaluationFiltersFormProperties>({
			ComplianceType: new FormControl<ConformancePackComplianceType | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetConformancePackComplianceSummaryResponse {
		ConformancePackComplianceSummaryList?: Array<ConformancePackComplianceSummary>;
		NextToken?: string;
	}
	export interface GetConformancePackComplianceSummaryResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetConformancePackComplianceSummaryResponseFormGroup() {
		return new FormGroup<GetConformancePackComplianceSummaryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary includes the name and status of the conformance pack. */
	export interface ConformancePackComplianceSummary {

		/** Required */
		ConformancePackName: string;

		/** Required */
		ConformancePackComplianceStatus: ConformancePackComplianceType;
	}

	/** Summary includes the name and status of the conformance pack. */
	export interface ConformancePackComplianceSummaryFormProperties {

		/** Required */
		ConformancePackName: FormControl<string | null | undefined>,

		/** Required */
		ConformancePackComplianceStatus: FormControl<ConformancePackComplianceType | null | undefined>,
	}
	export function CreateConformancePackComplianceSummaryFormGroup() {
		return new FormGroup<ConformancePackComplianceSummaryFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConformancePackComplianceStatus: new FormControl<ConformancePackComplianceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetConformancePackComplianceSummaryRequest {

		/** Required */
		ConformancePackNames: Array<string>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface GetConformancePackComplianceSummaryRequestFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetConformancePackComplianceSummaryRequestFormGroup() {
		return new FormGroup<GetConformancePackComplianceSummaryRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCustomRulePolicyResponse {
		PolicyText?: string;
	}
	export interface GetCustomRulePolicyResponseFormProperties {
		PolicyText: FormControl<string | null | undefined>,
	}
	export function CreateGetCustomRulePolicyResponseFormGroup() {
		return new FormGroup<GetCustomRulePolicyResponseFormProperties>({
			PolicyText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCustomRulePolicyRequest {
		ConfigRuleName?: string;
	}
	export interface GetCustomRulePolicyRequestFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
	}
	export function CreateGetCustomRulePolicyRequestFormGroup() {
		return new FormGroup<GetCustomRulePolicyRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDiscoveredResourceCountsResponse {
		totalDiscoveredResources?: number | null;
		resourceCounts?: Array<ResourceCount>;
		nextToken?: string;
	}
	export interface GetDiscoveredResourceCountsResponseFormProperties {
		totalDiscoveredResources: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDiscoveredResourceCountsResponseFormGroup() {
		return new FormGroup<GetDiscoveredResourceCountsResponseFormProperties>({
			totalDiscoveredResources: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains the resource type and the number of resources. */
	export interface ResourceCount {
		resourceType?: ResourceType;
		count?: number | null;
	}

	/** An object that contains the resource type and the number of resources. */
	export interface ResourceCountFormProperties {
		resourceType: FormControl<ResourceType | null | undefined>,
		count: FormControl<number | null | undefined>,
	}
	export function CreateResourceCountFormGroup() {
		return new FormGroup<ResourceCountFormProperties>({
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetDiscoveredResourceCountsRequest {
		resourceTypes?: Array<string>;
		limit?: number | null;
		nextToken?: string;
	}
	export interface GetDiscoveredResourceCountsRequestFormProperties {
		limit: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDiscoveredResourceCountsRequestFormGroup() {
		return new FormGroup<GetDiscoveredResourceCountsRequestFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOrganizationConfigRuleDetailedStatusResponse {
		OrganizationConfigRuleDetailedStatus?: Array<MemberAccountStatus>;
		NextToken?: string;
	}
	export interface GetOrganizationConfigRuleDetailedStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOrganizationConfigRuleDetailedStatusResponseFormGroup() {
		return new FormGroup<GetOrganizationConfigRuleDetailedStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Organization Config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed. */
	export interface MemberAccountStatus {

		/** Required */
		AccountId: string;

		/** Required */
		ConfigRuleName: string;

		/** Required */
		MemberAccountRuleStatus: OrganizationRuleStatus;
		ErrorCode?: string;
		ErrorMessage?: string;
		LastUpdateTime?: Date;
	}

	/** Organization Config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed. */
	export interface MemberAccountStatusFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		ConfigRuleName: FormControl<string | null | undefined>,

		/** Required */
		MemberAccountRuleStatus: FormControl<OrganizationRuleStatus | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateMemberAccountStatusFormGroup() {
		return new FormGroup<MemberAccountStatusFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberAccountRuleStatus: new FormControl<OrganizationRuleStatus | null | undefined>(undefined, [Validators.required]),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetOrganizationConfigRuleDetailedStatusRequest {

		/** Required */
		OrganizationConfigRuleName: string;
		Filters?: StatusDetailFilters;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface GetOrganizationConfigRuleDetailedStatusRequestFormProperties {

		/** Required */
		OrganizationConfigRuleName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOrganizationConfigRuleDetailedStatusRequestFormGroup() {
		return new FormGroup<GetOrganizationConfigRuleDetailedStatusRequestFormProperties>({
			OrganizationConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status filter object to filter results based on specific member account ID or status type for an organization Config rule.  */
	export interface StatusDetailFilters {
		AccountId?: string;
		MemberAccountRuleStatus?: OrganizationRuleStatus;
	}

	/** Status filter object to filter results based on specific member account ID or status type for an organization Config rule.  */
	export interface StatusDetailFiltersFormProperties {
		AccountId: FormControl<string | null | undefined>,
		MemberAccountRuleStatus: FormControl<OrganizationRuleStatus | null | undefined>,
	}
	export function CreateStatusDetailFiltersFormGroup() {
		return new FormGroup<StatusDetailFiltersFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			MemberAccountRuleStatus: new FormControl<OrganizationRuleStatus | null | undefined>(undefined),
		});

	}

	export interface GetOrganizationConformancePackDetailedStatusResponse {
		OrganizationConformancePackDetailedStatuses?: Array<OrganizationConformancePackDetailedStatus>;
		NextToken?: string;
	}
	export interface GetOrganizationConformancePackDetailedStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOrganizationConformancePackDetailedStatusResponseFormGroup() {
		return new FormGroup<GetOrganizationConformancePackDetailedStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Organization conformance pack creation or deletion status in each member account. This includes the name of the conformance pack, the status, error code and error message when the conformance pack creation or deletion failed.  */
	export interface OrganizationConformancePackDetailedStatus {

		/** Required */
		AccountId: string;

		/** Required */
		ConformancePackName: string;

		/** Required */
		Status: OrganizationRuleStatus;
		ErrorCode?: string;
		ErrorMessage?: string;
		LastUpdateTime?: Date;
	}

	/** Organization conformance pack creation or deletion status in each member account. This includes the name of the conformance pack, the status, error code and error message when the conformance pack creation or deletion failed.  */
	export interface OrganizationConformancePackDetailedStatusFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		ConformancePackName: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<OrganizationRuleStatus | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOrganizationConformancePackDetailedStatusFormGroup() {
		return new FormGroup<OrganizationConformancePackDetailedStatusFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConformancePackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<OrganizationRuleStatus | null | undefined>(undefined, [Validators.required]),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetOrganizationConformancePackDetailedStatusRequest {

		/** Required */
		OrganizationConformancePackName: string;
		Filters?: OrganizationResourceDetailedStatusFilters;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface GetOrganizationConformancePackDetailedStatusRequestFormProperties {

		/** Required */
		OrganizationConformancePackName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOrganizationConformancePackDetailedStatusRequestFormGroup() {
		return new FormGroup<GetOrganizationConformancePackDetailedStatusRequestFormProperties>({
			OrganizationConformancePackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status filter object to filter results based on specific member account ID or status type for an organization conformance pack. */
	export interface OrganizationResourceDetailedStatusFilters {
		AccountId?: string;
		Status?: OrganizationRuleStatus;
	}

	/** Status filter object to filter results based on specific member account ID or status type for an organization conformance pack. */
	export interface OrganizationResourceDetailedStatusFiltersFormProperties {
		AccountId: FormControl<string | null | undefined>,
		Status: FormControl<OrganizationRuleStatus | null | undefined>,
	}
	export function CreateOrganizationResourceDetailedStatusFiltersFormGroup() {
		return new FormGroup<OrganizationResourceDetailedStatusFiltersFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<OrganizationRuleStatus | null | undefined>(undefined),
		});

	}

	export interface GetOrganizationCustomRulePolicyResponse {
		PolicyText?: string;
	}
	export interface GetOrganizationCustomRulePolicyResponseFormProperties {
		PolicyText: FormControl<string | null | undefined>,
	}
	export function CreateGetOrganizationCustomRulePolicyResponseFormGroup() {
		return new FormGroup<GetOrganizationCustomRulePolicyResponseFormProperties>({
			PolicyText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOrganizationCustomRulePolicyRequest {

		/** Required */
		OrganizationConfigRuleName: string;
	}
	export interface GetOrganizationCustomRulePolicyRequestFormProperties {

		/** Required */
		OrganizationConfigRuleName: FormControl<string | null | undefined>,
	}
	export function CreateGetOrganizationCustomRulePolicyRequestFormGroup() {
		return new FormGroup<GetOrganizationCustomRulePolicyRequestFormProperties>({
			OrganizationConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The output for the <a>GetResourceConfigHistory</a> action. */
	export interface GetResourceConfigHistoryResponse {
		configurationItems?: Array<ConfigurationItem>;
		nextToken?: string;
	}

	/** The output for the <a>GetResourceConfigHistory</a> action. */
	export interface GetResourceConfigHistoryResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceConfigHistoryResponseFormGroup() {
		return new FormGroup<GetResourceConfigHistoryResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the <a>GetResourceConfigHistory</a> action. */
	export interface GetResourceConfigHistoryRequest {

		/** Required */
		resourceType: ResourceType;

		/** Required */
		resourceId: string;
		laterTime?: Date;
		earlierTime?: Date;
		chronologicalOrder?: ChronologicalOrder;
		limit?: number | null;
		nextToken?: string;
	}

	/** The input for the <a>GetResourceConfigHistory</a> action. */
	export interface GetResourceConfigHistoryRequestFormProperties {

		/** Required */
		resourceType: FormControl<ResourceType | null | undefined>,

		/** Required */
		resourceId: FormControl<string | null | undefined>,
		laterTime: FormControl<Date | null | undefined>,
		earlierTime: FormControl<Date | null | undefined>,
		chronologicalOrder: FormControl<ChronologicalOrder | null | undefined>,
		limit: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceConfigHistoryRequestFormGroup() {
		return new FormGroup<GetResourceConfigHistoryRequestFormProperties>({
			resourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			laterTime: new FormControl<Date | null | undefined>(undefined),
			earlierTime: new FormControl<Date | null | undefined>(undefined),
			chronologicalOrder: new FormControl<ChronologicalOrder | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChronologicalOrder { Reverse = 'Reverse', Forward = 'Forward' }

	export interface InvalidTimeRangeException {
	}
	export interface InvalidTimeRangeExceptionFormProperties {
	}
	export function CreateInvalidTimeRangeExceptionFormGroup() {
		return new FormGroup<InvalidTimeRangeExceptionFormProperties>({
		});

	}

	export interface GetResourceEvaluationSummaryResponse {
		ResourceEvaluationId?: string;
		EvaluationMode?: EvaluationMode;
		EvaluationStatus?: EvaluationStatus;
		EvaluationStartTimestamp?: Date;
		Compliance?: ComplianceType;
		EvaluationContext?: EvaluationContext;
		ResourceDetails?: ResourceDetails;
	}
	export interface GetResourceEvaluationSummaryResponseFormProperties {
		ResourceEvaluationId: FormControl<string | null | undefined>,
		EvaluationMode: FormControl<EvaluationMode | null | undefined>,
		EvaluationStartTimestamp: FormControl<Date | null | undefined>,
		Compliance: FormControl<ComplianceType | null | undefined>,
	}
	export function CreateGetResourceEvaluationSummaryResponseFormGroup() {
		return new FormGroup<GetResourceEvaluationSummaryResponseFormProperties>({
			ResourceEvaluationId: new FormControl<string | null | undefined>(undefined),
			EvaluationMode: new FormControl<EvaluationMode | null | undefined>(undefined),
			EvaluationStartTimestamp: new FormControl<Date | null | undefined>(undefined),
			Compliance: new FormControl<ComplianceType | null | undefined>(undefined),
		});

	}


	/** Returns status details of an evaluation. */
	export interface EvaluationStatus {

		/** Required */
		Status: ResourceEvaluationStatus;
		FailureReason?: string;
	}

	/** Returns status details of an evaluation. */
	export interface EvaluationStatusFormProperties {

		/** Required */
		Status: FormControl<ResourceEvaluationStatus | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationStatusFormGroup() {
		return new FormGroup<EvaluationStatusFormProperties>({
			Status: new FormControl<ResourceEvaluationStatus | null | undefined>(undefined, [Validators.required]),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceEvaluationStatus { IN_PROGRESS = 'IN_PROGRESS', FAILED = 'FAILED', SUCCEEDED = 'SUCCEEDED' }


	/** Use EvaluationContext to group independently initiated proactive resource evaluations. For example, CFN Stack. If you want to check just a resource definition, you do not need to provide evaluation context. */
	export interface EvaluationContext {
		EvaluationContextIdentifier?: string;
	}

	/** Use EvaluationContext to group independently initiated proactive resource evaluations. For example, CFN Stack. If you want to check just a resource definition, you do not need to provide evaluation context. */
	export interface EvaluationContextFormProperties {
		EvaluationContextIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationContextFormGroup() {
		return new FormGroup<EvaluationContextFormProperties>({
			EvaluationContextIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about the resource being evaluated. */
	export interface ResourceDetails {

		/** Required */
		ResourceId: string;

		/** Required */
		ResourceType: string;

		/** Required */
		ResourceConfiguration: string;
		ResourceConfigurationSchemaType?: ResourceConfigurationSchemaType;
	}

	/** Returns information about the resource being evaluated. */
	export interface ResourceDetailsFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		ResourceConfiguration: FormControl<string | null | undefined>,
		ResourceConfigurationSchemaType: FormControl<ResourceConfigurationSchemaType | null | undefined>,
	}
	export function CreateResourceDetailsFormGroup() {
		return new FormGroup<ResourceDetailsFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceConfigurationSchemaType: new FormControl<ResourceConfigurationSchemaType | null | undefined>(undefined),
		});

	}

	export enum ResourceConfigurationSchemaType { CFN_RESOURCE_SCHEMA = 'CFN_RESOURCE_SCHEMA' }

	export interface GetResourceEvaluationSummaryRequest {

		/** Required */
		ResourceEvaluationId: string;
	}
	export interface GetResourceEvaluationSummaryRequestFormProperties {

		/** Required */
		ResourceEvaluationId: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceEvaluationSummaryRequestFormGroup() {
		return new FormGroup<GetResourceEvaluationSummaryRequestFormProperties>({
			ResourceEvaluationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetStoredQueryResponse {
		StoredQuery?: StoredQuery;
	}
	export interface GetStoredQueryResponseFormProperties {
	}
	export function CreateGetStoredQueryResponseFormGroup() {
		return new FormGroup<GetStoredQueryResponseFormProperties>({
		});

	}


	/** Provides the details of a stored query. */
	export interface StoredQuery {
		QueryId?: string;
		QueryArn?: string;

		/** Required */
		QueryName: string;
		Description?: string;
		Expression?: string;
	}

	/** Provides the details of a stored query. */
	export interface StoredQueryFormProperties {
		QueryId: FormControl<string | null | undefined>,
		QueryArn: FormControl<string | null | undefined>,

		/** Required */
		QueryName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Expression: FormControl<string | null | undefined>,
	}
	export function CreateStoredQueryFormGroup() {
		return new FormGroup<StoredQueryFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined),
			QueryArn: new FormControl<string | null | undefined>(undefined),
			QueryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Expression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetStoredQueryRequest {

		/** Required */
		QueryName: string;
	}
	export interface GetStoredQueryRequestFormProperties {

		/** Required */
		QueryName: FormControl<string | null | undefined>,
	}
	export function CreateGetStoredQueryRequestFormGroup() {
		return new FormGroup<GetStoredQueryRequestFormProperties>({
			QueryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAggregateDiscoveredResourcesResponse {
		ResourceIdentifiers?: Array<AggregateResourceIdentifier>;
		NextToken?: string;
	}
	export interface ListAggregateDiscoveredResourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAggregateDiscoveredResourcesResponseFormGroup() {
		return new FormGroup<ListAggregateDiscoveredResourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAggregateDiscoveredResourcesRequest {

		/** Required */
		ConfigurationAggregatorName: string;

		/** Required */
		ResourceType: ResourceType;
		Filters?: ResourceFilters;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListAggregateDiscoveredResourcesRequestFormProperties {

		/** Required */
		ConfigurationAggregatorName: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<ResourceType | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAggregateDiscoveredResourcesRequestFormGroup() {
		return new FormGroup<ListAggregateDiscoveredResourcesRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters the results by resource account ID, region, resource ID, and resource name. */
	export interface ResourceFilters {
		AccountId?: string;
		ResourceId?: string;
		ResourceName?: string;
		Region?: string;
	}

	/** Filters the results by resource account ID, region, resource ID, and resource name. */
	export interface ResourceFiltersFormProperties {
		AccountId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
	}
	export function CreateResourceFiltersFormGroup() {
		return new FormGroup<ResourceFiltersFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConformancePackComplianceScoresResponse {
		NextToken?: string;

		/** Required */
		ConformancePackComplianceScores: Array<ConformancePackComplianceScore>;
	}
	export interface ListConformancePackComplianceScoresResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConformancePackComplianceScoresResponseFormGroup() {
		return new FormGroup<ListConformancePackComplianceScoresResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack. This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand the level of compliance in your conformance packs. */
	export interface ConformancePackComplianceScore {
		Score?: string;
		ConformancePackName?: string;
		LastUpdatedTime?: Date;
	}

	/** A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack. This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand the level of compliance in your conformance packs. */
	export interface ConformancePackComplianceScoreFormProperties {
		Score: FormControl<string | null | undefined>,
		ConformancePackName: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateConformancePackComplianceScoreFormGroup() {
		return new FormGroup<ConformancePackComplianceScoreFormProperties>({
			Score: new FormControl<string | null | undefined>(undefined),
			ConformancePackName: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListConformancePackComplianceScoresRequest {
		Filters?: ConformancePackComplianceScoresFilters;
		SortOrder?: SortOrder;
		SortBy?: SortBy;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListConformancePackComplianceScoresRequestFormProperties {
		SortOrder: FormControl<SortOrder | null | undefined>,
		SortBy: FormControl<SortBy | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConformancePackComplianceScoresRequestFormGroup() {
		return new FormGroup<ListConformancePackComplianceScoresRequestFormProperties>({
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
			SortBy: new FormControl<SortBy | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of filters to apply to the conformance pack compliance score result set.  */
	export interface ConformancePackComplianceScoresFilters {

		/** Required */
		ConformancePackNames: Array<string>;
	}

	/** A list of filters to apply to the conformance pack compliance score result set.  */
	export interface ConformancePackComplianceScoresFiltersFormProperties {
	}
	export function CreateConformancePackComplianceScoresFiltersFormGroup() {
		return new FormGroup<ConformancePackComplianceScoresFiltersFormProperties>({
		});

	}

	export enum SortOrder { ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }

	export enum SortBy { SCORE = 'SCORE' }


	/** <p/> */
	export interface ListDiscoveredResourcesResponse {
		resourceIdentifiers?: Array<ResourceIdentifier>;
		nextToken?: string;
	}

	/** <p/> */
	export interface ListDiscoveredResourcesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDiscoveredResourcesResponseFormGroup() {
		return new FormGroup<ListDiscoveredResourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details that identify a resource that is discovered by Config, including the resource type, ID, and (if available) the custom resource name. */
	export interface ResourceIdentifier {
		resourceType?: ResourceType;
		resourceId?: string;
		resourceName?: string;
		resourceDeletionTime?: Date;
	}

	/** The details that identify a resource that is discovered by Config, including the resource type, ID, and (if available) the custom resource name. */
	export interface ResourceIdentifierFormProperties {
		resourceType: FormControl<ResourceType | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		resourceDeletionTime: FormControl<Date | null | undefined>,
	}
	export function CreateResourceIdentifierFormGroup() {
		return new FormGroup<ResourceIdentifierFormProperties>({
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceDeletionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ListDiscoveredResourcesRequest {

		/** Required */
		resourceType: ResourceType;
		resourceIds?: Array<string>;
		resourceName?: string;
		limit?: number | null;
		includeDeletedResources?: boolean | null;
		nextToken?: string;
	}

	/** <p/> */
	export interface ListDiscoveredResourcesRequestFormProperties {

		/** Required */
		resourceType: FormControl<ResourceType | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		limit: FormControl<number | null | undefined>,
		includeDeletedResources: FormControl<boolean | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDiscoveredResourcesRequestFormGroup() {
		return new FormGroup<ListDiscoveredResourcesRequestFormProperties>({
			resourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
			resourceName: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			includeDeletedResources: new FormControl<boolean | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourceEvaluationsResponse {
		ResourceEvaluations?: Array<ResourceEvaluation>;
		NextToken?: string;
	}
	export interface ListResourceEvaluationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceEvaluationsResponseFormGroup() {
		return new FormGroup<ListResourceEvaluationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns details of a resource evaluation. */
	export interface ResourceEvaluation {
		ResourceEvaluationId?: string;
		EvaluationMode?: EvaluationMode;
		EvaluationStartTimestamp?: Date;
	}

	/** Returns details of a resource evaluation. */
	export interface ResourceEvaluationFormProperties {
		ResourceEvaluationId: FormControl<string | null | undefined>,
		EvaluationMode: FormControl<EvaluationMode | null | undefined>,
		EvaluationStartTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateResourceEvaluationFormGroup() {
		return new FormGroup<ResourceEvaluationFormProperties>({
			ResourceEvaluationId: new FormControl<string | null | undefined>(undefined),
			EvaluationMode: new FormControl<EvaluationMode | null | undefined>(undefined),
			EvaluationStartTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListResourceEvaluationsRequest {
		Filters?: ResourceEvaluationFilters;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListResourceEvaluationsRequestFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceEvaluationsRequestFormGroup() {
		return new FormGroup<ListResourceEvaluationsRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns details of a resource evaluation based on the selected filter. */
	export interface ResourceEvaluationFilters {
		EvaluationMode?: EvaluationMode;
		TimeWindow?: TimeWindow;
		EvaluationContextIdentifier?: string;
	}

	/** Returns details of a resource evaluation based on the selected filter. */
	export interface ResourceEvaluationFiltersFormProperties {
		EvaluationMode: FormControl<EvaluationMode | null | undefined>,
		EvaluationContextIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateResourceEvaluationFiltersFormGroup() {
		return new FormGroup<ResourceEvaluationFiltersFormProperties>({
			EvaluationMode: new FormControl<EvaluationMode | null | undefined>(undefined),
			EvaluationContextIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters evaluation results based on start and end times. */
	export interface TimeWindow {
		StartTime?: Date;
		EndTime?: Date;
	}

	/** Filters evaluation results based on start and end times. */
	export interface TimeWindowFormProperties {
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateTimeWindowFormGroup() {
		return new FormGroup<TimeWindowFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListStoredQueriesResponse {
		StoredQueryMetadata?: Array<StoredQueryMetadata>;
		NextToken?: string;
	}
	export interface ListStoredQueriesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStoredQueriesResponseFormGroup() {
		return new FormGroup<ListStoredQueriesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns details of a specific query.  */
	export interface StoredQueryMetadata {

		/** Required */
		QueryId: string;

		/** Required */
		QueryArn: string;

		/** Required */
		QueryName: string;
		Description?: string;
	}

	/** Returns details of a specific query.  */
	export interface StoredQueryMetadataFormProperties {

		/** Required */
		QueryId: FormControl<string | null | undefined>,

		/** Required */
		QueryArn: FormControl<string | null | undefined>,

		/** Required */
		QueryName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateStoredQueryMetadataFormGroup() {
		return new FormGroup<StoredQueryMetadataFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStoredQueriesRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListStoredQueriesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListStoredQueriesRequestFormGroup() {
		return new FormGroup<ListStoredQueriesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
	}
	export interface ListTagsForResourceResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The tags for the resource. The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** The tags for the resource. The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutAggregationAuthorizationResponse {
		AggregationAuthorization?: AggregationAuthorization;
	}
	export interface PutAggregationAuthorizationResponseFormProperties {
	}
	export function CreatePutAggregationAuthorizationResponseFormGroup() {
		return new FormGroup<PutAggregationAuthorizationResponseFormProperties>({
		});

	}

	export interface PutAggregationAuthorizationRequest {

		/** Required */
		AuthorizedAccountId: string;

		/** Required */
		AuthorizedAwsRegion: string;
		Tags?: Array<Tag>;
	}
	export interface PutAggregationAuthorizationRequestFormProperties {

		/** Required */
		AuthorizedAccountId: FormControl<string | null | undefined>,

		/** Required */
		AuthorizedAwsRegion: FormControl<string | null | undefined>,
	}
	export function CreatePutAggregationAuthorizationRequestFormGroup() {
		return new FormGroup<PutAggregationAuthorizationRequestFormProperties>({
			AuthorizedAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthorizedAwsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutConfigRuleRequest {

		/** Required */
		ConfigRule: ConfigRule;
		Tags?: Array<Tag>;
	}
	export interface PutConfigRuleRequestFormProperties {
	}
	export function CreatePutConfigRuleRequestFormGroup() {
		return new FormGroup<PutConfigRuleRequestFormProperties>({
		});

	}

	export interface MaxNumberOfConfigRulesExceededException {
	}
	export interface MaxNumberOfConfigRulesExceededExceptionFormProperties {
	}
	export function CreateMaxNumberOfConfigRulesExceededExceptionFormGroup() {
		return new FormGroup<MaxNumberOfConfigRulesExceededExceptionFormProperties>({
		});

	}

	export interface PutConfigurationAggregatorResponse {
		ConfigurationAggregator?: ConfigurationAggregator;
	}
	export interface PutConfigurationAggregatorResponseFormProperties {
	}
	export function CreatePutConfigurationAggregatorResponseFormGroup() {
		return new FormGroup<PutConfigurationAggregatorResponseFormProperties>({
		});

	}

	export interface PutConfigurationAggregatorRequest {

		/** Required */
		ConfigurationAggregatorName: string;
		AccountAggregationSources?: Array<AccountAggregationSource>;
		OrganizationAggregationSource?: OrganizationAggregationSource;
		Tags?: Array<Tag>;
	}
	export interface PutConfigurationAggregatorRequestFormProperties {

		/** Required */
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
	}
	export function CreatePutConfigurationAggregatorRequestFormGroup() {
		return new FormGroup<PutConfigurationAggregatorRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface InvalidRoleException {
	}
	export interface InvalidRoleExceptionFormProperties {
	}
	export function CreateInvalidRoleExceptionFormGroup() {
		return new FormGroup<InvalidRoleExceptionFormProperties>({
		});

	}

	export interface NoAvailableOrganizationException {
	}
	export interface NoAvailableOrganizationExceptionFormProperties {
	}
	export function CreateNoAvailableOrganizationExceptionFormGroup() {
		return new FormGroup<NoAvailableOrganizationExceptionFormProperties>({
		});

	}

	export interface OrganizationAllFeaturesNotEnabledException {
	}
	export interface OrganizationAllFeaturesNotEnabledExceptionFormProperties {
	}
	export function CreateOrganizationAllFeaturesNotEnabledExceptionFormGroup() {
		return new FormGroup<OrganizationAllFeaturesNotEnabledExceptionFormProperties>({
		});

	}


	/** The input for the <a>PutConfigurationRecorder</a> action. */
	export interface PutConfigurationRecorderRequest {

		/** Required */
		ConfigurationRecorder: ConfigurationRecorder;
	}

	/** The input for the <a>PutConfigurationRecorder</a> action. */
	export interface PutConfigurationRecorderRequestFormProperties {
	}
	export function CreatePutConfigurationRecorderRequestFormGroup() {
		return new FormGroup<PutConfigurationRecorderRequestFormProperties>({
		});

	}

	export interface MaxNumberOfConfigurationRecordersExceededException {
	}
	export interface MaxNumberOfConfigurationRecordersExceededExceptionFormProperties {
	}
	export function CreateMaxNumberOfConfigurationRecordersExceededExceptionFormGroup() {
		return new FormGroup<MaxNumberOfConfigurationRecordersExceededExceptionFormProperties>({
		});

	}

	export interface InvalidConfigurationRecorderNameException {
	}
	export interface InvalidConfigurationRecorderNameExceptionFormProperties {
	}
	export function CreateInvalidConfigurationRecorderNameExceptionFormGroup() {
		return new FormGroup<InvalidConfigurationRecorderNameExceptionFormProperties>({
		});

	}

	export interface InvalidRecordingGroupException {
	}
	export interface InvalidRecordingGroupExceptionFormProperties {
	}
	export function CreateInvalidRecordingGroupExceptionFormGroup() {
		return new FormGroup<InvalidRecordingGroupExceptionFormProperties>({
		});

	}

	export interface PutConformancePackResponse {
		ConformancePackArn?: string;
	}
	export interface PutConformancePackResponseFormProperties {
		ConformancePackArn: FormControl<string | null | undefined>,
	}
	export function CreatePutConformancePackResponseFormGroup() {
		return new FormGroup<PutConformancePackResponseFormProperties>({
			ConformancePackArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutConformancePackRequest {

		/** Required */
		ConformancePackName: string;
		TemplateS3Uri?: string;
		TemplateBody?: string;
		DeliveryS3Bucket?: string;
		DeliveryS3KeyPrefix?: string;
		ConformancePackInputParameters?: Array<ConformancePackInputParameter>;
		TemplateSSMDocumentDetails?: TemplateSSMDocumentDetails;
	}
	export interface PutConformancePackRequestFormProperties {

		/** Required */
		ConformancePackName: FormControl<string | null | undefined>,
		TemplateS3Uri: FormControl<string | null | undefined>,
		TemplateBody: FormControl<string | null | undefined>,
		DeliveryS3Bucket: FormControl<string | null | undefined>,
		DeliveryS3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreatePutConformancePackRequestFormGroup() {
		return new FormGroup<PutConformancePackRequestFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateS3Uri: new FormControl<string | null | undefined>(undefined),
			TemplateBody: new FormControl<string | null | undefined>(undefined),
			DeliveryS3Bucket: new FormControl<string | null | undefined>(undefined),
			DeliveryS3KeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConformancePackTemplateValidationException {
	}
	export interface ConformancePackTemplateValidationExceptionFormProperties {
	}
	export function CreateConformancePackTemplateValidationExceptionFormGroup() {
		return new FormGroup<ConformancePackTemplateValidationExceptionFormProperties>({
		});

	}

	export interface MaxNumberOfConformancePacksExceededException {
	}
	export interface MaxNumberOfConformancePacksExceededExceptionFormProperties {
	}
	export function CreateMaxNumberOfConformancePacksExceededExceptionFormGroup() {
		return new FormGroup<MaxNumberOfConformancePacksExceededExceptionFormProperties>({
		});

	}


	/** The input for the <a>PutDeliveryChannel</a> action. */
	export interface PutDeliveryChannelRequest {

		/** Required */
		DeliveryChannel: DeliveryChannel;
	}

	/** The input for the <a>PutDeliveryChannel</a> action. */
	export interface PutDeliveryChannelRequestFormProperties {
	}
	export function CreatePutDeliveryChannelRequestFormGroup() {
		return new FormGroup<PutDeliveryChannelRequestFormProperties>({
		});

	}

	export interface MaxNumberOfDeliveryChannelsExceededException {
	}
	export interface MaxNumberOfDeliveryChannelsExceededExceptionFormProperties {
	}
	export function CreateMaxNumberOfDeliveryChannelsExceededExceptionFormGroup() {
		return new FormGroup<MaxNumberOfDeliveryChannelsExceededExceptionFormProperties>({
		});

	}

	export interface InvalidDeliveryChannelNameException {
	}
	export interface InvalidDeliveryChannelNameExceptionFormProperties {
	}
	export function CreateInvalidDeliveryChannelNameExceptionFormGroup() {
		return new FormGroup<InvalidDeliveryChannelNameExceptionFormProperties>({
		});

	}

	export interface NoSuchBucketException {
	}
	export interface NoSuchBucketExceptionFormProperties {
	}
	export function CreateNoSuchBucketExceptionFormGroup() {
		return new FormGroup<NoSuchBucketExceptionFormProperties>({
		});

	}

	export interface InvalidS3KeyPrefixException {
	}
	export interface InvalidS3KeyPrefixExceptionFormProperties {
	}
	export function CreateInvalidS3KeyPrefixExceptionFormGroup() {
		return new FormGroup<InvalidS3KeyPrefixExceptionFormProperties>({
		});

	}

	export interface InvalidS3KmsKeyArnException {
	}
	export interface InvalidS3KmsKeyArnExceptionFormProperties {
	}
	export function CreateInvalidS3KmsKeyArnExceptionFormGroup() {
		return new FormGroup<InvalidS3KmsKeyArnExceptionFormProperties>({
		});

	}

	export interface InvalidSNSTopicARNException {
	}
	export interface InvalidSNSTopicARNExceptionFormProperties {
	}
	export function CreateInvalidSNSTopicARNExceptionFormGroup() {
		return new FormGroup<InvalidSNSTopicARNExceptionFormProperties>({
		});

	}

	export interface InsufficientDeliveryPolicyException {
	}
	export interface InsufficientDeliveryPolicyExceptionFormProperties {
	}
	export function CreateInsufficientDeliveryPolicyExceptionFormGroup() {
		return new FormGroup<InsufficientDeliveryPolicyExceptionFormProperties>({
		});

	}


	/** <p/> */
	export interface PutEvaluationsResponse {
		FailedEvaluations?: Array<Evaluation>;
	}

	/** <p/> */
	export interface PutEvaluationsResponseFormProperties {
	}
	export function CreatePutEvaluationsResponseFormGroup() {
		return new FormGroup<PutEvaluationsResponseFormProperties>({
		});

	}


	/** Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against. */
	export interface Evaluation {

		/** Required */
		ComplianceResourceType: string;

		/** Required */
		ComplianceResourceId: string;

		/** Required */
		ComplianceType: ComplianceType;
		Annotation?: string;

		/** Required */
		OrderingTimestamp: Date;
	}

	/** Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against. */
	export interface EvaluationFormProperties {

		/** Required */
		ComplianceResourceType: FormControl<string | null | undefined>,

		/** Required */
		ComplianceResourceId: FormControl<string | null | undefined>,

		/** Required */
		ComplianceType: FormControl<ComplianceType | null | undefined>,
		Annotation: FormControl<string | null | undefined>,

		/** Required */
		OrderingTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateEvaluationFormGroup() {
		return new FormGroup<EvaluationFormProperties>({
			ComplianceResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComplianceResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComplianceType: new FormControl<ComplianceType | null | undefined>(undefined, [Validators.required]),
			Annotation: new FormControl<string | null | undefined>(undefined),
			OrderingTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface PutEvaluationsRequest {
		Evaluations?: Array<Evaluation>;

		/** Required */
		ResultToken: string;
		TestMode?: boolean | null;
	}

	/** <p/> */
	export interface PutEvaluationsRequestFormProperties {

		/** Required */
		ResultToken: FormControl<string | null | undefined>,
		TestMode: FormControl<boolean | null | undefined>,
	}
	export function CreatePutEvaluationsRequestFormGroup() {
		return new FormGroup<PutEvaluationsRequestFormProperties>({
			ResultToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TestMode: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface InvalidResultTokenException {
	}
	export interface InvalidResultTokenExceptionFormProperties {
	}
	export function CreateInvalidResultTokenExceptionFormGroup() {
		return new FormGroup<InvalidResultTokenExceptionFormProperties>({
		});

	}

	export interface PutExternalEvaluationResponse {
	}
	export interface PutExternalEvaluationResponseFormProperties {
	}
	export function CreatePutExternalEvaluationResponseFormGroup() {
		return new FormGroup<PutExternalEvaluationResponseFormProperties>({
		});

	}

	export interface PutExternalEvaluationRequest {

		/** Required */
		ConfigRuleName: string;

		/** Required */
		ExternalEvaluation: ExternalEvaluation;
	}
	export interface PutExternalEvaluationRequestFormProperties {

		/** Required */
		ConfigRuleName: FormControl<string | null | undefined>,
	}
	export function CreatePutExternalEvaluationRequestFormGroup() {
		return new FormGroup<PutExternalEvaluationRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against. */
	export interface ExternalEvaluation {

		/** Required */
		ComplianceResourceType: string;

		/** Required */
		ComplianceResourceId: string;

		/** Required */
		ComplianceType: ComplianceType;
		Annotation?: string;

		/** Required */
		OrderingTimestamp: Date;
	}

	/** Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against. */
	export interface ExternalEvaluationFormProperties {

		/** Required */
		ComplianceResourceType: FormControl<string | null | undefined>,

		/** Required */
		ComplianceResourceId: FormControl<string | null | undefined>,

		/** Required */
		ComplianceType: FormControl<ComplianceType | null | undefined>,
		Annotation: FormControl<string | null | undefined>,

		/** Required */
		OrderingTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateExternalEvaluationFormGroup() {
		return new FormGroup<ExternalEvaluationFormProperties>({
			ComplianceResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComplianceResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComplianceType: new FormControl<ComplianceType | null | undefined>(undefined, [Validators.required]),
			Annotation: new FormControl<string | null | undefined>(undefined),
			OrderingTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutOrganizationConfigRuleResponse {
		OrganizationConfigRuleArn?: string;
	}
	export interface PutOrganizationConfigRuleResponseFormProperties {
		OrganizationConfigRuleArn: FormControl<string | null | undefined>,
	}
	export function CreatePutOrganizationConfigRuleResponseFormGroup() {
		return new FormGroup<PutOrganizationConfigRuleResponseFormProperties>({
			OrganizationConfigRuleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutOrganizationConfigRuleRequest {

		/** Required */
		OrganizationConfigRuleName: string;
		OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;
		OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;
		ExcludedAccounts?: Array<string>;
		OrganizationCustomPolicyRuleMetadata?: OrganizationCustomPolicyRuleMetadata;
	}
	export interface PutOrganizationConfigRuleRequestFormProperties {

		/** Required */
		OrganizationConfigRuleName: FormControl<string | null | undefined>,
	}
	export function CreatePutOrganizationConfigRuleRequestFormGroup() {
		return new FormGroup<PutOrganizationConfigRuleRequestFormProperties>({
			OrganizationConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata, such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule. */
	export interface OrganizationCustomPolicyRuleMetadata {
		Description?: string;
		OrganizationConfigRuleTriggerTypes?: Array<OrganizationConfigRuleTriggerTypeNoSN>;
		InputParameters?: string;
		MaximumExecutionFrequency?: MaximumExecutionFrequency;
		ResourceTypesScope?: Array<string>;
		ResourceIdScope?: string;
		TagKeyScope?: string;
		TagValueScope?: string;

		/** Required */
		PolicyRuntime: string;

		/** Required */
		PolicyText: string;
		DebugLogDeliveryAccounts?: Array<string>;
	}

	/** An object that specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata, such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule. */
	export interface OrganizationCustomPolicyRuleMetadataFormProperties {
		Description: FormControl<string | null | undefined>,
		InputParameters: FormControl<string | null | undefined>,
		MaximumExecutionFrequency: FormControl<MaximumExecutionFrequency | null | undefined>,
		ResourceIdScope: FormControl<string | null | undefined>,
		TagKeyScope: FormControl<string | null | undefined>,
		TagValueScope: FormControl<string | null | undefined>,

		/** Required */
		PolicyRuntime: FormControl<string | null | undefined>,

		/** Required */
		PolicyText: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationCustomPolicyRuleMetadataFormGroup() {
		return new FormGroup<OrganizationCustomPolicyRuleMetadataFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			InputParameters: new FormControl<string | null | undefined>(undefined),
			MaximumExecutionFrequency: new FormControl<MaximumExecutionFrequency | null | undefined>(undefined),
			ResourceIdScope: new FormControl<string | null | undefined>(undefined),
			TagKeyScope: new FormControl<string | null | undefined>(undefined),
			TagValueScope: new FormControl<string | null | undefined>(undefined),
			PolicyRuntime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MaxNumberOfOrganizationConfigRulesExceededException {
	}
	export interface MaxNumberOfOrganizationConfigRulesExceededExceptionFormProperties {
	}
	export function CreateMaxNumberOfOrganizationConfigRulesExceededExceptionFormGroup() {
		return new FormGroup<MaxNumberOfOrganizationConfigRulesExceededExceptionFormProperties>({
		});

	}

	export interface PutOrganizationConformancePackResponse {
		OrganizationConformancePackArn?: string;
	}
	export interface PutOrganizationConformancePackResponseFormProperties {
		OrganizationConformancePackArn: FormControl<string | null | undefined>,
	}
	export function CreatePutOrganizationConformancePackResponseFormGroup() {
		return new FormGroup<PutOrganizationConformancePackResponseFormProperties>({
			OrganizationConformancePackArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutOrganizationConformancePackRequest {

		/** Required */
		OrganizationConformancePackName: string;
		TemplateS3Uri?: string;
		TemplateBody?: string;
		DeliveryS3Bucket?: string;
		DeliveryS3KeyPrefix?: string;
		ConformancePackInputParameters?: Array<ConformancePackInputParameter>;
		ExcludedAccounts?: Array<string>;
	}
	export interface PutOrganizationConformancePackRequestFormProperties {

		/** Required */
		OrganizationConformancePackName: FormControl<string | null | undefined>,
		TemplateS3Uri: FormControl<string | null | undefined>,
		TemplateBody: FormControl<string | null | undefined>,
		DeliveryS3Bucket: FormControl<string | null | undefined>,
		DeliveryS3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreatePutOrganizationConformancePackRequestFormGroup() {
		return new FormGroup<PutOrganizationConformancePackRequestFormProperties>({
			OrganizationConformancePackName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateS3Uri: new FormControl<string | null | undefined>(undefined),
			TemplateBody: new FormControl<string | null | undefined>(undefined),
			DeliveryS3Bucket: new FormControl<string | null | undefined>(undefined),
			DeliveryS3KeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MaxNumberOfOrganizationConformancePacksExceededException {
	}
	export interface MaxNumberOfOrganizationConformancePacksExceededExceptionFormProperties {
	}
	export function CreateMaxNumberOfOrganizationConformancePacksExceededExceptionFormGroup() {
		return new FormGroup<MaxNumberOfOrganizationConformancePacksExceededExceptionFormProperties>({
		});

	}

	export interface OrganizationConformancePackTemplateValidationException {
	}
	export interface OrganizationConformancePackTemplateValidationExceptionFormProperties {
	}
	export function CreateOrganizationConformancePackTemplateValidationExceptionFormGroup() {
		return new FormGroup<OrganizationConformancePackTemplateValidationExceptionFormProperties>({
		});

	}

	export interface PutRemediationConfigurationsResponse {
		FailedBatches?: Array<FailedRemediationBatch>;
	}
	export interface PutRemediationConfigurationsResponseFormProperties {
	}
	export function CreatePutRemediationConfigurationsResponseFormGroup() {
		return new FormGroup<PutRemediationConfigurationsResponseFormProperties>({
		});

	}


	/** List of each of the failed remediations with specific reasons. */
	export interface FailedRemediationBatch {
		FailureMessage?: string;
		FailedItems?: Array<RemediationConfiguration>;
	}

	/** List of each of the failed remediations with specific reasons. */
	export interface FailedRemediationBatchFormProperties {
		FailureMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailedRemediationBatchFormGroup() {
		return new FormGroup<FailedRemediationBatchFormProperties>({
			FailureMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutRemediationConfigurationsRequest {

		/** Required */
		RemediationConfigurations: Array<RemediationConfiguration>;
	}
	export interface PutRemediationConfigurationsRequestFormProperties {
	}
	export function CreatePutRemediationConfigurationsRequestFormGroup() {
		return new FormGroup<PutRemediationConfigurationsRequestFormProperties>({
		});

	}

	export interface PutRemediationExceptionsResponse {
		FailedBatches?: Array<FailedRemediationExceptionBatch>;
	}
	export interface PutRemediationExceptionsResponseFormProperties {
	}
	export function CreatePutRemediationExceptionsResponseFormGroup() {
		return new FormGroup<PutRemediationExceptionsResponseFormProperties>({
		});

	}


	/** List of each of the failed remediation exceptions with specific reasons. */
	export interface FailedRemediationExceptionBatch {
		FailureMessage?: string;
		FailedItems?: Array<RemediationException>;
	}

	/** List of each of the failed remediation exceptions with specific reasons. */
	export interface FailedRemediationExceptionBatchFormProperties {
		FailureMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailedRemediationExceptionBatchFormGroup() {
		return new FormGroup<FailedRemediationExceptionBatchFormProperties>({
			FailureMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutRemediationExceptionsRequest {

		/** Required */
		ConfigRuleName: string;

		/** Required */
		ResourceKeys: Array<RemediationExceptionResourceKey>;
		Message?: string;
		ExpirationTime?: Date;
	}
	export interface PutRemediationExceptionsRequestFormProperties {

		/** Required */
		ConfigRuleName: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		ExpirationTime: FormControl<Date | null | undefined>,
	}
	export function CreatePutRemediationExceptionsRequestFormGroup() {
		return new FormGroup<PutRemediationExceptionsRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined),
			ExpirationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PutResourceConfigRequest {

		/** Required */
		ResourceType: string;

		/** Required */
		SchemaVersionId: string;

		/** Required */
		ResourceId: string;
		ResourceName?: string;

		/** Required */
		Configuration: string;
		Tags?: Tags;
	}
	export interface PutResourceConfigRequestFormProperties {

		/** Required */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		SchemaVersionId: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,

		/** Required */
		Configuration: FormControl<string | null | undefined>,
	}
	export function CreatePutResourceConfigRequestFormGroup() {
		return new FormGroup<PutResourceConfigRequestFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SchemaVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceName: new FormControl<string | null | undefined>(undefined),
			Configuration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MaxActiveResourcesExceededException {
	}
	export interface MaxActiveResourcesExceededExceptionFormProperties {
	}
	export function CreateMaxActiveResourcesExceededExceptionFormGroup() {
		return new FormGroup<MaxActiveResourcesExceededExceptionFormProperties>({
		});

	}

	export interface PutRetentionConfigurationResponse {
		RetentionConfiguration?: RetentionConfiguration;
	}
	export interface PutRetentionConfigurationResponseFormProperties {
	}
	export function CreatePutRetentionConfigurationResponseFormGroup() {
		return new FormGroup<PutRetentionConfigurationResponseFormProperties>({
		});

	}

	export interface PutRetentionConfigurationRequest {

		/** Required */
		RetentionPeriodInDays: number;
	}
	export interface PutRetentionConfigurationRequestFormProperties {

		/** Required */
		RetentionPeriodInDays: FormControl<number | null | undefined>,
	}
	export function CreatePutRetentionConfigurationRequestFormGroup() {
		return new FormGroup<PutRetentionConfigurationRequestFormProperties>({
			RetentionPeriodInDays: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MaxNumberOfRetentionConfigurationsExceededException {
	}
	export interface MaxNumberOfRetentionConfigurationsExceededExceptionFormProperties {
	}
	export function CreateMaxNumberOfRetentionConfigurationsExceededExceptionFormGroup() {
		return new FormGroup<MaxNumberOfRetentionConfigurationsExceededExceptionFormProperties>({
		});

	}

	export interface PutStoredQueryResponse {
		QueryArn?: string;
	}
	export interface PutStoredQueryResponseFormProperties {
		QueryArn: FormControl<string | null | undefined>,
	}
	export function CreatePutStoredQueryResponseFormGroup() {
		return new FormGroup<PutStoredQueryResponseFormProperties>({
			QueryArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutStoredQueryRequest {

		/** Required */
		StoredQuery: StoredQuery;
		Tags?: Array<Tag>;
	}
	export interface PutStoredQueryRequestFormProperties {
	}
	export function CreatePutStoredQueryRequestFormGroup() {
		return new FormGroup<PutStoredQueryRequestFormProperties>({
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

	export interface ResourceConcurrentModificationException {
	}
	export interface ResourceConcurrentModificationExceptionFormProperties {
	}
	export function CreateResourceConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ResourceConcurrentModificationExceptionFormProperties>({
		});

	}

	export interface SelectAggregateResourceConfigResponse {
		Results?: Array<string>;

		/** Details about the query. */
		QueryInfo?: QueryInfo;
		NextToken?: string;
	}
	export interface SelectAggregateResourceConfigResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSelectAggregateResourceConfigResponseFormGroup() {
		return new FormGroup<SelectAggregateResourceConfigResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the query. */
	export interface QueryInfo {
		SelectFields?: Array<FieldInfo>;
	}

	/** Details about the query. */
	export interface QueryInfoFormProperties {
	}
	export function CreateQueryInfoFormGroup() {
		return new FormGroup<QueryInfoFormProperties>({
		});

	}


	/** Details about the fields such as name of the field. */
	export interface FieldInfo {
		Name?: string;
	}

	/** Details about the fields such as name of the field. */
	export interface FieldInfoFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFieldInfoFormGroup() {
		return new FormGroup<FieldInfoFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SelectAggregateResourceConfigRequest {

		/** Required */
		Expression: string;

		/** Required */
		ConfigurationAggregatorName: string;
		Limit?: number | null;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface SelectAggregateResourceConfigRequestFormProperties {

		/** Required */
		Expression: FormControl<string | null | undefined>,

		/** Required */
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSelectAggregateResourceConfigRequestFormGroup() {
		return new FormGroup<SelectAggregateResourceConfigRequestFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidExpressionException {
	}
	export interface InvalidExpressionExceptionFormProperties {
	}
	export function CreateInvalidExpressionExceptionFormGroup() {
		return new FormGroup<InvalidExpressionExceptionFormProperties>({
		});

	}

	export interface SelectResourceConfigResponse {
		Results?: Array<string>;
		QueryInfo?: QueryInfo;
		NextToken?: string;
	}
	export interface SelectResourceConfigResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSelectResourceConfigResponseFormGroup() {
		return new FormGroup<SelectResourceConfigResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SelectResourceConfigRequest {

		/** Required */
		Expression: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface SelectResourceConfigRequestFormProperties {

		/** Required */
		Expression: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSelectResourceConfigRequestFormGroup() {
		return new FormGroup<SelectResourceConfigRequestFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output when you start the evaluation for the specified Config rule. */
	export interface StartConfigRulesEvaluationResponse {
	}

	/** The output when you start the evaluation for the specified Config rule. */
	export interface StartConfigRulesEvaluationResponseFormProperties {
	}
	export function CreateStartConfigRulesEvaluationResponseFormGroup() {
		return new FormGroup<StartConfigRulesEvaluationResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface StartConfigRulesEvaluationRequest {
		ConfigRuleNames?: Array<string>;
	}

	/** <p/> */
	export interface StartConfigRulesEvaluationRequestFormProperties {
	}
	export function CreateStartConfigRulesEvaluationRequestFormGroup() {
		return new FormGroup<StartConfigRulesEvaluationRequestFormProperties>({
		});

	}


	/** The input for the <a>StartConfigurationRecorder</a> action. */
	export interface StartConfigurationRecorderRequest {

		/** Required */
		ConfigurationRecorderName: string;
	}

	/** The input for the <a>StartConfigurationRecorder</a> action. */
	export interface StartConfigurationRecorderRequestFormProperties {

		/** Required */
		ConfigurationRecorderName: FormControl<string | null | undefined>,
	}
	export function CreateStartConfigurationRecorderRequestFormGroup() {
		return new FormGroup<StartConfigurationRecorderRequestFormProperties>({
			ConfigurationRecorderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NoAvailableDeliveryChannelException {
	}
	export interface NoAvailableDeliveryChannelExceptionFormProperties {
	}
	export function CreateNoAvailableDeliveryChannelExceptionFormGroup() {
		return new FormGroup<NoAvailableDeliveryChannelExceptionFormProperties>({
		});

	}

	export interface StartRemediationExecutionResponse {
		FailureMessage?: string;
		FailedItems?: Array<ResourceKey>;
	}
	export interface StartRemediationExecutionResponseFormProperties {
		FailureMessage: FormControl<string | null | undefined>,
	}
	export function CreateStartRemediationExecutionResponseFormGroup() {
		return new FormGroup<StartRemediationExecutionResponseFormProperties>({
			FailureMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartRemediationExecutionRequest {

		/** Required */
		ConfigRuleName: string;

		/** Required */
		ResourceKeys: Array<ResourceKey>;
	}
	export interface StartRemediationExecutionRequestFormProperties {

		/** Required */
		ConfigRuleName: FormControl<string | null | undefined>,
	}
	export function CreateStartRemediationExecutionRequestFormGroup() {
		return new FormGroup<StartRemediationExecutionRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartResourceEvaluationResponse {
		ResourceEvaluationId?: string;
	}
	export interface StartResourceEvaluationResponseFormProperties {
		ResourceEvaluationId: FormControl<string | null | undefined>,
	}
	export function CreateStartResourceEvaluationResponseFormGroup() {
		return new FormGroup<StartResourceEvaluationResponseFormProperties>({
			ResourceEvaluationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartResourceEvaluationRequest {

		/** Required */
		ResourceDetails: ResourceDetails;
		EvaluationContext?: EvaluationContext;

		/** Required */
		EvaluationMode: EvaluationMode;
		EvaluationTimeout?: number | null;
		ClientToken?: string;
	}
	export interface StartResourceEvaluationRequestFormProperties {

		/** Required */
		EvaluationMode: FormControl<EvaluationMode | null | undefined>,
		EvaluationTimeout: FormControl<number | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartResourceEvaluationRequestFormGroup() {
		return new FormGroup<StartResourceEvaluationRequestFormProperties>({
			EvaluationMode: new FormControl<EvaluationMode | null | undefined>(undefined, [Validators.required]),
			EvaluationTimeout: new FormControl<number | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IdempotentParameterMismatch {
	}
	export interface IdempotentParameterMismatchFormProperties {
	}
	export function CreateIdempotentParameterMismatchFormGroup() {
		return new FormGroup<IdempotentParameterMismatchFormProperties>({
		});

	}


	/** The input for the <a>StopConfigurationRecorder</a> action. */
	export interface StopConfigurationRecorderRequest {

		/** Required */
		ConfigurationRecorderName: string;
	}

	/** The input for the <a>StopConfigurationRecorder</a> action. */
	export interface StopConfigurationRecorderRequestFormProperties {

		/** Required */
		ConfigurationRecorderName: FormControl<string | null | undefined>,
	}
	export function CreateStopConfigurationRecorderRequestFormGroup() {
		return new FormGroup<StopConfigurationRecorderRequestFormProperties>({
			ConfigurationRecorderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AggregateConformancePackComplianceSummaryGroupKey { ACCOUNT_ID = 'ACCOUNT_ID', AWS_REGION = 'AWS_REGION' }

	export enum MemberAccountRuleStatus { CREATE_SUCCESSFUL = 'CREATE_SUCCESSFUL', CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', CREATE_FAILED = 'CREATE_FAILED', DELETE_SUCCESSFUL = 'DELETE_SUCCESSFUL', DELETE_FAILED = 'DELETE_FAILED', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', UPDATE_SUCCESSFUL = 'UPDATE_SUCCESSFUL', UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS', UPDATE_FAILED = 'UPDATE_FAILED' }

	export enum OrganizationResourceDetailedStatus { CREATE_SUCCESSFUL = 'CREATE_SUCCESSFUL', CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', CREATE_FAILED = 'CREATE_FAILED', DELETE_SUCCESSFUL = 'DELETE_SUCCESSFUL', DELETE_FAILED = 'DELETE_FAILED', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', UPDATE_SUCCESSFUL = 'UPDATE_SUCCESSFUL', UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS', UPDATE_FAILED = 'UPDATE_FAILED' }

	export enum OrganizationResourceStatus { CREATE_SUCCESSFUL = 'CREATE_SUCCESSFUL', CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', CREATE_FAILED = 'CREATE_FAILED', DELETE_SUCCESSFUL = 'DELETE_SUCCESSFUL', DELETE_FAILED = 'DELETE_FAILED', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', UPDATE_SUCCESSFUL = 'UPDATE_SUCCESSFUL', UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS', UPDATE_FAILED = 'UPDATE_FAILED' }


	/** The dynamic value of the resource. */
	export interface ResourceValue {

		/** Required */
		Value: ResourceValueType;
	}

	/** The dynamic value of the resource. */
	export interface ResourceValueFormProperties {

		/** Required */
		Value: FormControl<ResourceValueType | null | undefined>,
	}
	export function CreateResourceValueFormGroup() {
		return new FormGroup<ResourceValueFormProperties>({
			Value: new FormControl<ResourceValueType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceValueType { RESOURCE_ID = 'RESOURCE_ID' }


	/** The static value of the resource. */
	export interface StaticValue {

		/** Required */
		Values: Array<string>;
	}

	/** The static value of the resource. */
	export interface StaticValueFormProperties {
	}
	export function CreateStaticValueFormGroup() {
		return new FormGroup<StaticValueFormProperties>({
		});

	}


	/** The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value. */
	export interface RemediationParameterValue {
		ResourceValue?: ResourceValue;
		StaticValue?: StaticValue;
	}

	/** The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value. */
	export interface RemediationParameterValueFormProperties {
	}
	export function CreateRemediationParameterValueFormGroup() {
		return new FormGroup<RemediationParameterValueFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Returns the current configuration items for resources that are present in your Config aggregator. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty <code>unprocessedResourceIdentifiers</code> list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return tags and relationships.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig
		 * @return {BatchGetAggregateResourceConfigResponse} Success
		 */
		BatchGetAggregateResourceConfig(requestBody: BatchGetAggregateResourceConfigRequest): Observable<BatchGetAggregateResourceConfigResponse> {
			return this.http.post<BatchGetAggregateResourceConfigResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the <code>BaseConfigurationItem</code> for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=StarlingDoveService.BatchGetResourceConfig
		 * @return {BatchGetResourceConfigResponse} Success
		 */
		BatchGetResourceConfig(requestBody: BatchGetResourceConfigRequest): Observable<BatchGetResourceConfigResponse> {
			return this.http.post<BatchGetResourceConfigResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the authorization granted to the specified configuration aggregator account in a specified region.
		 * Post #X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization
		 * @return {void} Success
		 */
		DeleteAggregationAuthorization(requestBody: DeleteAggregationAuthorizationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified Config rule and all of its evaluation results.</p> <p>Config sets the state of a rule to <code>DELETING</code> until the deletion is complete. You cannot update a rule while it is in this state. If you make a <code>PutConfigRule</code> or <code>DeleteConfigRule</code> request for the rule, you will receive a <code>ResourceInUseException</code>.</p> <p>You can check the state of a rule by using the <code>DescribeConfigRules</code> request.</p>
		 * Post #X-Amz-Target=StarlingDoveService.DeleteConfigRule
		 * @return {void} Success
		 */
		DeleteConfigRule(requestBody: DeleteConfigRuleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteConfigRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.
		 * Post #X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator
		 * @return {void} Success
		 */
		DeleteConfigurationAggregator(requestBody: DeleteConfigurationAggregatorRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the configuration recorder.</p> <p>After the configuration recorder is deleted, Config will not record resource configuration changes until you create a new configuration recorder.</p> <p>This action does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the <code>GetResourceConfigHistory</code> action, but you will not be able to access this information in the Config console until you create a new configuration recorder.</p>
		 * Post #X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder
		 * @return {void} Success
		 */
		DeleteConfigurationRecorder(requestBody: DeleteConfigurationRecorderRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified conformance pack and all the Config rules, remediation actions, and all evaluation results within that conformance pack.</p> <p>Config sets the conformance pack to <code>DELETE_IN_PROGRESS</code> until the deletion is complete. You cannot update a conformance pack while it is in this state.</p>
		 * Post #X-Amz-Target=StarlingDoveService.DeleteConformancePack
		 * @return {void} Success
		 */
		DeleteConformancePack(requestBody: DeleteConformancePackRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteConformancePack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the delivery channel.</p> <p>Before you can delete the delivery channel, you must stop the configuration recorder by using the <a>StopConfigurationRecorder</a> action.</p>
		 * Post #X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel
		 * @return {void} Success
		 */
		DeleteDeliveryChannel(requestBody: DeleteDeliveryChannelRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the evaluation results for the specified Config rule. You can specify one Config rule per request. After you delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating your Amazon Web Services resources against the rule.
		 * Post #X-Amz-Target=StarlingDoveService.DeleteEvaluationResults
		 * @return {DeleteEvaluationResultsResponse} Success
		 */
		DeleteEvaluationResults(requestBody: DeleteEvaluationResultsRequest): Observable<DeleteEvaluationResultsResponse> {
			return this.http.post<DeleteEvaluationResultsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified organization Config rule and all of its evaluation results from all member accounts in that organization. </p> <p>Only a management account and a delegated administrator account can delete an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a rule while it is in this state.</p>
		 * Post #X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule
		 * @return {void} Success
		 */
		DeleteOrganizationConfigRule(requestBody: DeleteOrganizationConfigRuleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified organization conformance pack and all of the Config rules and remediation actions from all member accounts in that organization. </p> <p> Only a management account or a delegated administrator account can delete an organization conformance pack. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state. </p>
		 * Post #X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack
		 * @return {void} Success
		 */
		DeleteOrganizationConformancePack(requestBody: DeleteOrganizationConformancePackRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes pending authorization requests for a specified aggregator account in a specified region.
		 * Post #X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest
		 * @return {void} Success
		 */
		DeletePendingAggregationRequest(requestBody: DeletePendingAggregationRequestRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the remediation configuration.
		 * Post #X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration
		 * @return {DeleteRemediationConfigurationResponse} Success
		 */
		DeleteRemediationConfiguration(requestBody: DeleteRemediationConfigurationRequest): Observable<DeleteRemediationConfigurationResponse> {
			return this.http.post<DeleteRemediationConfigurationResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes one or more remediation exceptions mentioned in the resource keys.</p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions
		 * @return {DeleteRemediationExceptionsResponse} Success
		 */
		DeleteRemediationExceptions(requestBody: DeleteRemediationExceptionsRequest): Observable<DeleteRemediationExceptionsResponse> {
			return this.http.post<DeleteRemediationExceptionsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Records the configuration state for a custom resource that has been deleted. This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your Config History.
		 * Post #X-Amz-Target=StarlingDoveService.DeleteResourceConfig
		 * @return {void} Success
		 */
		DeleteResourceConfig(requestBody: DeleteResourceConfigRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteResourceConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the retention configuration.
		 * Post #X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration
		 * @return {void} Success
		 */
		DeleteRetentionConfiguration(requestBody: DeleteRetentionConfigurationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the stored query for a single Amazon Web Services account and a single Amazon Web Services Region.
		 * Post #X-Amz-Target=StarlingDoveService.DeleteStoredQuery
		 * @return {DeleteStoredQueryResponse} Success
		 */
		DeleteStoredQuery(requestBody: DeleteStoredQueryRequest): Observable<DeleteStoredQueryResponse> {
			return this.http.post<DeleteStoredQueryResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteStoredQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, Config sends the following notifications using an Amazon SNS topic that you have specified.</p> <ul> <li> <p>Notification of the start of the delivery.</p> </li> <li> <p>Notification of the completion of the delivery, if the delivery was successfully completed.</p> </li> <li> <p>Notification of delivery failure, if the delivery failed.</p> </li> </ul>
		 * Post #X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot
		 * @return {DeliverConfigSnapshotResponse} Success
		 */
		DeliverConfigSnapshot(requestBody: DeliverConfigSnapshotRequest): Observable<DeliverConfigSnapshotResponse> {
			return this.http.post<DeliverConfigSnapshotResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules. Does not display rules that do not have compliance results. </p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeAggregateComplianceByConfigRulesResponse} Success
		 */
		DescribeAggregateComplianceByConfigRules(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeAggregateComplianceByConfigRulesRequest): Observable<DescribeAggregateComplianceByConfigRulesResponse> {
			return this.http.post<DescribeAggregateComplianceByConfigRulesResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of the conformance packs and their associated compliance status with the count of compliant and noncompliant Config rules within each conformance pack. Also returns the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeAggregateComplianceByConformancePacksResponse} Success
		 */
		DescribeAggregateComplianceByConformancePacks(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeAggregateComplianceByConformancePacksRequest): Observable<DescribeAggregateComplianceByConformancePacksResponse> {
			return this.http.post<DescribeAggregateComplianceByConformancePacksResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of authorizations granted to various aggregator accounts and regions.
		 * Post #X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeAggregationAuthorizationsResponse} Success
		 */
		DescribeAggregationAuthorizations(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeAggregationAuthorizationsRequest): Observable<DescribeAggregationAuthorizationsResponse> {
			return this.http.post<DescribeAggregationAuthorizationsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Indicates whether the specified Config rules are compliant. If a rule is noncompliant, this action returns the number of Amazon Web Services resources that do not comply with the rule.</p> <p>A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply.</p> <p>If Config has no current evaluation results for the rule, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule
		 * @param {string} NextToken Pagination token
		 * @return {DescribeComplianceByConfigRuleResponse} Success
		 */
		DescribeComplianceByConfigRule(NextToken: string | null | undefined, requestBody: DescribeComplianceByConfigRuleRequest): Observable<DescribeComplianceByConfigRuleResponse> {
			return this.http.post<DescribeComplianceByConfigRuleResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Indicates whether the specified Amazon Web Services resources are compliant. If a resource is noncompliant, this action returns the number of Config rules that the resource does not comply with.</p> <p>A resource is compliant if it complies with all the Config rules that evaluate it. It is noncompliant if it does not comply with one or more of these rules.</p> <p>If Config has no current evaluation results for the resource, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions about the rules that evaluate the resource:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role that you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeComplianceByResource
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeComplianceByResourceResponse} Success
		 */
		DescribeComplianceByResource(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeComplianceByResourceRequest): Observable<DescribeComplianceByResourceResponse> {
			return this.http.post<DescribeComplianceByResourceResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns status information for each of your Config managed rules. The status includes information such as the last time Config invoked the rule, the last time Config failed to invoke the rule, and the related error for the last failure.
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeConfigRuleEvaluationStatusResponse} Success
		 */
		DescribeConfigRuleEvaluationStatus(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeConfigRuleEvaluationStatusRequest): Observable<DescribeConfigRuleEvaluationStatusResponse> {
			return this.http.post<DescribeConfigRuleEvaluationStatusResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns details about your Config rules.
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConfigRules
		 * @param {string} NextToken Pagination token
		 * @return {DescribeConfigRulesResponse} Success
		 */
		DescribeConfigRules(NextToken: string | null | undefined, requestBody: DescribeConfigRulesRequest): Observable<DescribeConfigRulesResponse> {
			return this.http.post<DescribeConfigRulesResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConfigRules?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns status information for sources within an aggregator. The status includes information about the last time Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message.
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeConfigurationAggregatorSourcesStatusResponse} Success
		 */
		DescribeConfigurationAggregatorSourcesStatus(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeConfigurationAggregatorSourcesStatusRequest): Observable<DescribeConfigurationAggregatorSourcesStatusResponse> {
			return this.http.post<DescribeConfigurationAggregatorSourcesStatusResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this action returns the details for all the configuration aggregators associated with the account.
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeConfigurationAggregatorsResponse} Success
		 */
		DescribeConfigurationAggregators(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeConfigurationAggregatorsRequest): Observable<DescribeConfigurationAggregatorsResponse> {
			return this.http.post<DescribeConfigurationAggregatorsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the current status of the specified configuration recorder as well as the status of the last recording event for the recorder. If a configuration recorder is not specified, this action returns the status of all configuration recorders associated with the account.</p> <note> <p>&gt;You can specify only one configuration recorder for each Amazon Web Services Region for each account. For a detailed status of recording events over time, add your Config events to Amazon CloudWatch metrics and use CloudWatch metrics.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus
		 * @return {DescribeConfigurationRecorderStatusResponse} Success
		 */
		DescribeConfigurationRecorderStatus(requestBody: DescribeConfigurationRecorderStatusRequest): Observable<DescribeConfigurationRecorderStatusResponse> {
			return this.http.post<DescribeConfigurationRecorderStatusResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the details for the specified configuration recorders. If the configuration recorder is not specified, this action returns the details for all configuration recorders associated with the account.</p> <note> <p>You can specify only one configuration recorder for each Amazon Web Services Region for each account.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders
		 * @return {DescribeConfigurationRecordersResponse} Success
		 */
		DescribeConfigurationRecorders(requestBody: DescribeConfigurationRecordersRequest): Observable<DescribeConfigurationRecordersResponse> {
			return this.http.post<DescribeConfigurationRecordersResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns compliance details for each rule in that conformance pack.</p> <note> <p>You must provide exact rule names.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeConformancePackComplianceResponse} Success
		 */
		DescribeConformancePackCompliance(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeConformancePackComplianceRequest): Observable<DescribeConformancePackComplianceResponse> {
			return this.http.post<DescribeConformancePackComplianceResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides one or more conformance packs deployment status.</p> <note> <p>If there are no conformance packs then you will see an empty result.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeConformancePackStatusResponse} Success
		 */
		DescribeConformancePackStatus(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeConformancePackStatusRequest): Observable<DescribeConformancePackStatusResponse> {
			return this.http.post<DescribeConformancePackStatusResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of one or more conformance packs.
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConformancePacks
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeConformancePacksResponse} Success
		 */
		DescribeConformancePacks(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeConformancePacksRequest): Observable<DescribeConformancePacksResponse> {
			return this.http.post<DescribeConformancePacksResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConformancePacks?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the current status of the specified delivery channel. If a delivery channel is not specified, this action returns the current status of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus
		 * @return {DescribeDeliveryChannelStatusResponse} Success
		 */
		DescribeDeliveryChannelStatus(requestBody: DescribeDeliveryChannelStatusRequest): Observable<DescribeDeliveryChannelStatusResponse> {
			return this.http.post<DescribeDeliveryChannelStatusResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns details about the specified delivery channel. If a delivery channel is not specified, this action returns the details of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels
		 * @return {DescribeDeliveryChannelsResponse} Success
		 */
		DescribeDeliveryChannels(requestBody: DescribeDeliveryChannelsRequest): Observable<DescribeDeliveryChannelsResponse> {
			return this.http.post<DescribeDeliveryChannelsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides organization Config rule deployment status for an organization.</p> <note> <p>The status is not considered successful until organization Config rule is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeOrganizationConfigRuleStatusesResponse} Success
		 */
		DescribeOrganizationConfigRuleStatuses(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeOrganizationConfigRuleStatusesRequest): Observable<DescribeOrganizationConfigRuleStatusesResponse> {
			return this.http.post<DescribeOrganizationConfigRuleStatusesResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of organization Config rules. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response.</p> <p>Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</p> <p> <i>For accounts within an organzation</i> </p> <p>If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The <code>DescribeOrganizationConfigRules</code> and <code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeOrganizationConfigRulesResponse} Success
		 */
		DescribeOrganizationConfigRules(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeOrganizationConfigRulesRequest): Observable<DescribeOrganizationConfigRulesResponse> {
			return this.http.post<DescribeOrganizationConfigRulesResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides organization conformance pack deployment status for an organization. </p> <note> <p>The status is not considered successful until organization conformance pack is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization conformance pack names. They are only applicable, when you request all the organization conformance packs.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeOrganizationConformancePackStatusesResponse} Success
		 */
		DescribeOrganizationConformancePackStatuses(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeOrganizationConformancePackStatusesRequest): Observable<DescribeOrganizationConformancePackStatusesResponse> {
			return this.http.post<DescribeOrganizationConformancePackStatusesResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of organization conformance packs. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable, when you request all the organization conformance packs. </p> <p> <i>For accounts within an organzation</i> </p> <p>If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The <code>DescribeOrganizationConfigRules</code> and <code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeOrganizationConformancePacksResponse} Success
		 */
		DescribeOrganizationConformancePacks(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeOrganizationConformancePacksRequest): Observable<DescribeOrganizationConformancePacksResponse> {
			return this.http.post<DescribeOrganizationConformancePacksResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all pending aggregation requests.
		 * Post #X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribePendingAggregationRequestsResponse} Success
		 */
		DescribePendingAggregationRequests(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribePendingAggregationRequestsRequest): Observable<DescribePendingAggregationRequestsResponse> {
			return this.http.post<DescribePendingAggregationRequestsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the details of one or more remediation configurations.
		 * Post #X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations
		 * @return {DescribeRemediationConfigurationsResponse} Success
		 */
		DescribeRemediationConfigurations(requestBody: DescribeRemediationConfigurationsRequest): Observable<DescribeRemediationConfigurationsResponse> {
			return this.http.post<DescribeRemediationConfigurationsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted. When you specify the limit and the next token, you receive a paginated response. </p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeRemediationExceptionsResponse} Success
		 */
		DescribeRemediationExceptions(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeRemediationExceptionsRequest): Observable<DescribeRemediationExceptionsResponse> {
			return this.http.post<DescribeRemediationExceptionsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed. When you specify the limit and the next token, you receive a paginated response.
		 * Post #X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeRemediationExecutionStatusResponse} Success
		 */
		DescribeRemediationExecutionStatus(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeRemediationExecutionStatusRequest): Observable<DescribeRemediationExecutionStatusResponse> {
			return this.http.post<DescribeRemediationExecutionStatusResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the details of one or more retention configurations. If the retention configuration name is not specified, this action returns the details for all the retention configurations for that account.</p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations
		 * @param {string} NextToken Pagination token
		 * @return {DescribeRetentionConfigurationsResponse} Success
		 */
		DescribeRetentionConfigurations(NextToken: string | null | undefined, requestBody: DescribeRetentionConfigurationsRequest): Observable<DescribeRetentionConfigurationsResponse> {
			return this.http.post<DescribeRetentionConfigurationsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the evaluation results for the specified Config rule for a specific resource in a rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule. </p> <note> <p>The results can return an empty result page. But if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetAggregateComplianceDetailsByConfigRuleResponse} Success
		 */
		GetAggregateComplianceDetailsByConfigRule(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: GetAggregateComplianceDetailsByConfigRuleRequest): Observable<GetAggregateComplianceDetailsByConfigRuleResponse> {
			return this.http.post<GetAggregateComplianceDetailsByConfigRuleResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetAggregateConfigRuleComplianceSummaryResponse} Success
		 */
		GetAggregateConfigRuleComplianceSummary(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: GetAggregateConfigRuleComplianceSummaryRequest): Observable<GetAggregateConfigRuleComplianceSummaryResponse> {
			return this.http.post<GetAggregateConfigRuleComplianceSummaryResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the count of compliant and noncompliant conformance packs across all Amazon Web Services accounts and Amazon Web Services Regions in an aggregator. You can filter based on Amazon Web Services account ID or Amazon Web Services Region.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetAggregateConformancePackComplianceSummaryResponse} Success
		 */
		GetAggregateConformancePackComplianceSummary(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: GetAggregateConformancePackComplianceSummaryRequest): Observable<GetAggregateConformancePackComplianceSummaryResponse> {
			return this.http.post<GetAggregateConformancePackComplianceSummaryResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the resource counts across accounts and regions that are present in your Config aggregator. You can request the resource counts by providing filters and GroupByKey.</p> <p>For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.</p>
		 * Post #X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetAggregateDiscoveredResourceCountsResponse} Success
		 */
		GetAggregateDiscoveredResourceCounts(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: GetAggregateDiscoveredResourceCountsRequest): Observable<GetAggregateDiscoveredResourceCountsResponse> {
			return this.http.post<GetAggregateDiscoveredResourceCountsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns configuration item that is aggregated for your specific resource in a specific source account and region.
		 * Post #X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig
		 * @return {GetAggregateResourceConfigResponse} Success
		 */
		GetAggregateResourceConfig(requestBody: GetAggregateResourceConfigRequest): Observable<GetAggregateResourceConfigResponse> {
			return this.http.post<GetAggregateResourceConfigResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the evaluation results for the specified Config rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.
		 * Post #X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetComplianceDetailsByConfigRuleResponse} Success
		 */
		GetComplianceDetailsByConfigRule(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: GetComplianceDetailsByConfigRuleRequest): Observable<GetComplianceDetailsByConfigRuleResponse> {
			return this.http.post<GetComplianceDetailsByConfigRuleResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the evaluation results for the specified Amazon Web Services resource. The results indicate which Config rules were used to evaluate the resource, when each rule was last invoked, and whether the resource complies with each rule.
		 * Post #X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource
		 * @param {string} NextToken Pagination token
		 * @return {GetComplianceDetailsByResourceResponse} Success
		 */
		GetComplianceDetailsByResource(NextToken: string | null | undefined, requestBody: GetComplianceDetailsByResourceRequest): Observable<GetComplianceDetailsByResourceResponse> {
			return this.http.post<GetComplianceDetailsByResourceResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the number of Config rules that are compliant and noncompliant, up to a maximum of 25 for each.
		 * Post #X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule
		 * @return {GetComplianceSummaryByConfigRuleResponse} Success
		 */
		GetComplianceSummaryByConfigRule(): Observable<GetComplianceSummaryByConfigRuleResponse> {
			return this.http.post<GetComplianceSummaryByConfigRuleResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule', null, {});
		}

		/**
		 * Returns the number of resources that are compliant and the number that are noncompliant. You can specify one or more resource types to get these numbers for each resource type. The maximum number returned is 100.
		 * Post #X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType
		 * @return {GetComplianceSummaryByResourceTypeResponse} Success
		 */
		GetComplianceSummaryByResourceType(requestBody: GetComplianceSummaryByResourceTypeRequest): Observable<GetComplianceSummaryByResourceTypeResponse> {
			return this.http.post<GetComplianceSummaryByResourceTypeResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns compliance details of a conformance pack for all Amazon Web Services resources that are monitered by conformance pack.
		 * Post #X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetConformancePackComplianceDetailsResponse} Success
		 */
		GetConformancePackComplianceDetails(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: GetConformancePackComplianceDetailsRequest): Observable<GetConformancePackComplianceDetailsResponse> {
			return this.http.post<GetConformancePackComplianceDetailsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.
		 * Post #X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetConformancePackComplianceSummaryResponse} Success
		 */
		GetConformancePackComplianceSummary(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: GetConformancePackComplianceSummaryRequest): Observable<GetConformancePackComplianceSummaryResponse> {
			return this.http.post<GetConformancePackComplianceSummaryResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the policy definition containing the logic for your Config Custom Policy rule.
		 * Post #X-Amz-Target=StarlingDoveService.GetCustomRulePolicy
		 * @return {GetCustomRulePolicyResponse} Success
		 */
		GetCustomRulePolicy(requestBody: GetCustomRulePolicyRequest): Observable<GetCustomRulePolicyResponse> {
			return this.http.post<GetCustomRulePolicyResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the resource types, the number of each resource type, and the total number of resources that Config is recording in this region for your Amazon Web Services account. </p> <p class="title"> <b>Example</b> </p> <ol> <li> <p>Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets.</p> </li> <li> <p>You make a call to the <code>GetDiscoveredResourceCounts</code> action and specify that you want all resource types. </p> </li> <li> <p>Config returns the following:</p> <ul> <li> <p>The resource types (EC2 instances, IAM users, and S3 buckets).</p> </li> <li> <p>The number of each resource type (25, 20, and 15).</p> </li> <li> <p>The total number of all resources (60).</p> </li> </ul> </li> </ol> <p>The response is paginated. By default, Config lists 100 <a>ResourceCount</a> objects on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might not immediately receive resource counts in the following situations:</p> <ul> <li> <p>You are a new Config customer.</p> </li> <li> <p>You just enabled resource recording.</p> </li> </ul> <p>It might take a few minutes for Config to record and count your resources. Wait a few minutes and then retry the <a>GetDiscoveredResourceCounts</a> action. </p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetDiscoveredResourceCountsResponse} Success
		 */
		GetDiscoveredResourceCounts(limit: string | null | undefined, nextToken: string | null | undefined, requestBody: GetDiscoveredResourceCountsRequest): Observable<GetDiscoveredResourceCountsResponse> {
			return this.http.post<GetDiscoveredResourceCountsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns detailed status for each member account within an organization for a given organization Config rule.
		 * Post #X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetOrganizationConfigRuleDetailedStatusResponse} Success
		 */
		GetOrganizationConfigRuleDetailedStatus(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: GetOrganizationConfigRuleDetailedStatusRequest): Observable<GetOrganizationConfigRuleDetailedStatusResponse> {
			return this.http.post<GetOrganizationConfigRuleDetailedStatusResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns detailed status for each member account within an organization for a given organization conformance pack.
		 * Post #X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetOrganizationConformancePackDetailedStatusResponse} Success
		 */
		GetOrganizationConformancePackDetailedStatus(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: GetOrganizationConformancePackDetailedStatusRequest): Observable<GetOrganizationConformancePackDetailedStatusResponse> {
			return this.http.post<GetOrganizationConformancePackDetailedStatusResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the policy definition containing the logic for your organization Config Custom Policy rule.
		 * Post #X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy
		 * @return {GetOrganizationCustomRulePolicyResponse} Success
		 */
		GetOrganizationCustomRulePolicy(requestBody: GetOrganizationCustomRulePolicyRequest): Observable<GetOrganizationCustomRulePolicyResponse> {
			return this.http.post<GetOrganizationCustomRulePolicyResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of <code>ConfigurationItems</code> for the specified resource. The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your <code>ConfigurationItems</code> between a minimum of 30 days and a maximum of 7 years (2557 days), Config returns the <code>ConfigurationItems</code> for the specified retention period. </p> <p>The response is paginated. By default, Config returns a limit of 10 configuration items per page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified <code>limit</code>. In such cases, you can make another call, using the <code>nextToken</code>.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.GetResourceConfigHistory
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetResourceConfigHistoryResponse} Success
		 */
		GetResourceConfigHistory(limit: string | null | undefined, nextToken: string | null | undefined, requestBody: GetResourceConfigHistoryRequest): Observable<GetResourceConfigHistoryResponse> {
			return this.http.post<GetResourceConfigHistoryResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a summary of resource evaluation for the specified resource evaluation ID from the proactive rules that were run. The results indicate which evaluation context was used to evaluate the rules, which resource details were evaluated, the evaluation mode that was run, and whether the resource details comply with the configuration of the proactive rules. </p> <note> <p>To see additional information about the evaluation result, such as which rule flagged a resource as NON_COMPLIANT, use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html">GetComplianceDetailsByResource</a> API. For more information, see the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceEvaluationSummary.html#API_GetResourceEvaluationSummary_Examples">Examples</a> section.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary
		 * @return {GetResourceEvaluationSummaryResponse} Success
		 */
		GetResourceEvaluationSummary(requestBody: GetResourceEvaluationSummaryRequest): Observable<GetResourceEvaluationSummaryResponse> {
			return this.http.post<GetResourceEvaluationSummaryResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the details of a specific stored query.
		 * Post #X-Amz-Target=StarlingDoveService.GetStoredQuery
		 * @return {GetStoredQueryResponse} Success
		 */
		GetStoredQuery(requestBody: GetStoredQueryRequest): Observable<GetStoredQueryResponse> {
			return this.http.post<GetStoredQueryResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetStoredQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions. A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region. You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p> <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>
		 * Post #X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAggregateDiscoveredResourcesResponse} Success
		 */
		ListAggregateDiscoveredResources(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAggregateDiscoveredResourcesRequest): Observable<ListAggregateDiscoveredResourcesResponse> {
			return this.http.post<ListAggregateDiscoveredResourcesResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of conformance pack compliance scores. A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack. This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand the level of compliance in your conformance packs.</p> <note> <p>Conformance packs with no evaluation results will have a compliance score of <code>INSUFFICIENT_DATA</code>.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConformancePackComplianceScoresResponse} Success
		 */
		ListConformancePackComplianceScores(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListConformancePackComplianceScoresRequest): Observable<ListConformancePackComplianceScoresResponse> {
			return this.http.post<ListConformancePackComplianceScoresResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Accepts a resource type and returns a list of resource identifiers for the resources of that type. A resource identifier includes the resource type, ID, and (if available) the custom resource name. The results consist of resources that Config has discovered, including those that Config is not currently recording. You can narrow the results to include only resources that have specific resource IDs or a resource name.</p> <note> <p>You can specify either resource IDs or a resource name, but not both, in the same request.</p> </note> <p>The response is paginated. By default, Config lists 100 resource identifiers on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p>
		 * Post #X-Amz-Target=StarlingDoveService.ListDiscoveredResources
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListDiscoveredResourcesResponse} Success
		 */
		ListDiscoveredResources(limit: string | null | undefined, nextToken: string | null | undefined, requestBody: ListDiscoveredResourcesRequest): Observable<ListDiscoveredResourcesResponse> {
			return this.http.post<ListDiscoveredResourcesResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.ListDiscoveredResources?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of proactive resource evaluations.
		 * Post #X-Amz-Target=StarlingDoveService.ListResourceEvaluations
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourceEvaluationsResponse} Success
		 */
		ListResourceEvaluations(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResourceEvaluationsRequest): Observable<ListResourceEvaluationsResponse> {
			return this.http.post<ListResourceEvaluationsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.ListResourceEvaluations?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the stored queries for a single Amazon Web Services account and a single Amazon Web Services Region. The default is 100.
		 * Post #X-Amz-Target=StarlingDoveService.ListStoredQueries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListStoredQueriesResponse} Success
		 */
		ListStoredQueries(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListStoredQueriesRequest): Observable<ListStoredQueriesResponse> {
			return this.http.post<ListStoredQueriesResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.ListStoredQueries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the tags for Config resource.
		 * Post #X-Amz-Target=StarlingDoveService.ListTagsForResource
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.ListTagsForResource?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Authorizes the aggregator account and region to collect data from the source account and region. </p> <note> <p> <code>PutAggregationAuthorization</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutAggregationAuthorization
		 * @return {PutAggregationAuthorizationResponse} Success
		 */
		PutAggregationAuthorization(requestBody: PutAggregationAuthorizationRequest): Observable<PutAggregationAuthorizationResponse> {
			return this.http.post<PutAggregationAuthorizationResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or updates an Config rule to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>. You can use <code>PutConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>SourceIdentifier</code> key.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function that the rule invokes to evaluate your resources. When you use <code>PutConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function. You specify the ARN in the <code>SourceIdentifier</code> key. This key is part of the <code>Source</code> object, which is part of the <code>ConfigRule</code> object. </p> <p>For any new Config rule that you add, specify the <code>ConfigRuleName</code> in the <code>ConfigRule</code> object. Do not specify the <code>ConfigRuleArn</code> or the <code>ConfigRuleId</code>. These values are generated by Config for new rules.</p> <p>If you are updating a rule that you added previously, you can specify the rule by <code>ConfigRuleName</code>, <code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the <code>ConfigRule</code> data type that you use in this request.</p> <p>For more information about developing and using Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Resources with Config Rules</a> in the <i>Config Developer Guide</i>.</p> <note> <p> <code>PutConfigRule</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutConfigRule
		 * @return {void} Success
		 */
		PutConfigRule(requestBody: PutConfigRuleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutConfigRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.</p> <p> <code>accountIds</code> that are passed will be replaced with existing accounts. If you want to add additional accounts into the aggregator, call <code>DescribeConfigurationAggregators</code> to get the previous accounts and then append new ones.</p> <note> <p>Config should be enabled in source accounts and regions you want to aggregate.</p> <p>If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization. If the caller is a management account, Config calls <code>EnableAwsServiceAccess</code> API to enable integration between Config and Organizations. If the caller is a registered delegated administrator, Config calls <code>ListDelegatedAdministrators</code> API to verify whether the caller is a valid delegated administrator.</p> <p>To register a delegated administrator, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/set-up-aggregator-cli.html#register-a-delegated-administrator-cli">Register a Delegated Administrator</a> in the <i>Config developer guide</i>. </p> </note> <note> <p> <code>PutConfigurationAggregator</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutConfigurationAggregator
		 * @return {PutConfigurationAggregatorResponse} Success
		 */
		PutConfigurationAggregator(requestBody: PutConfigurationAggregatorRequest): Observable<PutConfigurationAggregatorResponse> {
			return this.http.post<PutConfigurationAggregatorResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new configuration recorder to record configuration changes for specified resource types.</p> <p>You can also use this action to change the <code>roleARN</code> or the <code>recordingGroup</code> of an existing recorder. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/stop-start-recorder.html"> <b>Managing the Configuration Recorder</b> </a> in the <i>Config Developer Guide</i>.</p> <note> <p>You can specify only one configuration recorder for each Amazon Web Services Region for each account.</p> <p>If the configuration recorder does not have the <code>recordingGroup</code> field specified, the default is to record all supported resource types.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutConfigurationRecorder
		 * @return {void} Success
		 */
		PutConfigurationRecorder(requestBody: PutConfigurationRecorderRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates a conformance pack. A conformance pack is a collection of Config rules that can be easily deployed in an account and a region and across an organization. For information on how many conformance packs you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p>This API creates a service-linked role <code>AWSServiceRoleForConfigConforms</code> in your account. The service-linked role is created only when the role does not exist in your account. </p> <note> <p>You must specify only one of the follow parameters: <code>TemplateS3Uri</code>, <code>TemplateBody</code> or <code>TemplateSSMDocumentDetails</code>.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutConformancePack
		 * @return {PutConformancePackResponse} Success
		 */
		PutConformancePack(requestBody: PutConformancePackRequest): Observable<PutConformancePackResponse> {
			return this.http.post<PutConformancePackResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutConformancePack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic.</p> <p>Before you can create a delivery channel, you must create a configuration recorder.</p> <p>You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.</p> <note> <p>You can have only one delivery channel per region in your account.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutDeliveryChannel
		 * @return {void} Success
		 */
		PutDeliveryChannel(requestBody: PutDeliveryChannelRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutDeliveryChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Used by an Lambda function to deliver evaluation results to Config. This action is required in every Lambda function that is invoked by an Config rule.
		 * Post #X-Amz-Target=StarlingDoveService.PutEvaluations
		 * @return {PutEvaluationsResponse} Success
		 */
		PutEvaluations(requestBody: PutEvaluationsRequest): Observable<PutEvaluationsResponse> {
			return this.http.post<PutEvaluationsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutEvaluations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add or updates the evaluations for process checks. This API checks if the rule is a process check when the name of the Config rule is provided.
		 * Post #X-Amz-Target=StarlingDoveService.PutExternalEvaluation
		 * @return {PutExternalEvaluationResponse} Success
		 */
		PutExternalEvaluation(requestBody: PutExternalEvaluationRequest): Observable<PutExternalEvaluationResponse> {
			return this.http.post<PutExternalEvaluationResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutExternalEvaluation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or updates an Config rule for your entire organization to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many organization Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p> Only a management account and a delegated administrator can create or update an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p> <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. Config verifies the existence of role with <code>GetRole</code> action.</p> <p>To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegated-administrator</code> for <code>config-multiaccountsetup.amazonaws.com</code>. </p> <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>. You can use <code>PutOrganizationConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>RuleIdentifier</code> key.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function in the management account or a delegated administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed account that can be assumed by the Lambda function. When you use <code>PutOrganizationConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>Make sure to specify one of either <code>OrganizationCustomPolicyRuleMetadata</code> for Custom Policy rules, <code>OrganizationCustomRuleMetadata</code> for Custom Lambda rules, or <code>OrganizationManagedRuleMetadata</code> for managed rules.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule
		 * @return {PutOrganizationConfigRuleResponse} Success
		 */
		PutOrganizationConfigRule(requestBody: PutOrganizationConfigRuleRequest): Observable<PutOrganizationConfigRuleResponse> {
			return this.http.post<PutOrganizationConfigRuleResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deploys conformance packs across member accounts in an Amazon Web Services Organization. For information on how many organization conformance packs and how many Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p>Only a management account and a delegated administrator can call this API. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p> <p>This API enables organization service access for <code>config-multiaccountsetup.amazonaws.com</code> through the <code>EnableAWSServiceAccess</code> action and creates a service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegate-admin</code> for <code>config-multiaccountsetup.amazonaws.com</code>.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both. If you provide both Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p> <p>Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated. You cannot update a conformance pack while it is in this state.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack
		 * @return {PutOrganizationConformancePackResponse} Success
		 */
		PutOrganizationConformancePack(requestBody: PutOrganizationConformancePackRequest): Observable<PutOrganizationConformancePackResponse> {
			return this.http.post<PutOrganizationConformancePackResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or updates the remediation configuration with a specific Config rule with the selected target or action. The API creates the <code>RemediationConfiguration</code> object for the Config rule. The Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target. </p> <note> <p>If you make backward incompatible changes to the SSM document, you must call this again to ensure the remediations can run.</p> <p>This API does not support adding remediation configurations for service-linked Config Rules such as Organization Config rules, the rules deployed by conformance packs, and rules deployed by Amazon Web Services Security Hub.</p> </note> <note> <p>For manual remediation configuration, you need to provide a value for <code>automationAssumeRole</code> or use a value in the <code>assumeRole</code>field to remediate your resources. The SSM automation document can use either as long as it maps to a valid parameter.</p> <p>However, for automatic remediation configuration, the only valid <code>assumeRole</code> field value is <code>AutomationAssumeRole</code> and you need to provide a value for <code>AutomationAssumeRole</code> to remediate your resources.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutRemediationConfigurations
		 * @return {PutRemediationConfigurationsResponse} Success
		 */
		PutRemediationConfigurations(requestBody: PutRemediationConfigurationsRequest): Observable<PutRemediationConfigurationsResponse> {
			return this.http.post<PutRemediationConfigurationsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>A remediation exception is when a specified resource is no longer considered for auto-remediation. This API adds a new exception or updates an existing exception for a specified resource with a specified Config rule. </p> <note> <p>Config generates a remediation exception when a problem occurs running a remediation action for a specified resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note> <note> <p>When placing an exception on an Amazon Web Services resource, it is recommended that remediation is set as manual remediation until the given Config rule for the specified resource evaluates the resource as <code>NON_COMPLIANT</code>. Once the resource has been evaluated as <code>NON_COMPLIANT</code>, you can add remediation exceptions and change the remediation type back from Manual to Auto if you want to use auto-remediation. Otherwise, using auto-remediation before a <code>NON_COMPLIANT</code> evaluation result can delete resources before the exception is applied.</p> </note> <note> <p>Placing an exception can only be performed on resources that are <code>NON_COMPLIANT</code>. If you use this API for <code>COMPLIANT</code> resources or resources that are <code>NOT_APPLICABLE</code>, a remediation exception will not be generated. For more information on the conditions that initiate the possible Config evaluation results, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.html#aws-config-rules">Concepts | Config Rules</a> in the <i>Config Developer Guide</i>.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutRemediationExceptions
		 * @return {PutRemediationExceptionsResponse} Success
		 */
		PutRemediationExceptions(requestBody: PutRemediationExceptionsRequest): Observable<PutRemediationExceptionsResponse> {
			return this.http.post<PutRemediationExceptionsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutRemediationExceptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Records the configuration state for the resource provided in the request. The configuration state of a resource is represented in Config as Configuration Items. Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing Config APIs. </p> <note> <p>The custom resource type must be registered with CloudFormation. This API accepts the configuration item registered with CloudFormation.</p> <p>When you call this API, Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource. </p> <p>Write-only schema properites are not recorded as part of the published configuration item.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutResourceConfig
		 * @return {void} Success
		 */
		PutResourceConfig(requestBody: PutResourceConfigRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutResourceConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates and updates the retention configuration with details about retention period (number of days) that Config stores your historical information. The API creates the <code>RetentionConfiguration</code> object and names the object as <b>default</b>. When you have a <code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the default object. </p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutRetentionConfiguration
		 * @return {PutRetentionConfigurationResponse} Success
		 */
		PutRetentionConfiguration(requestBody: PutRetentionConfigurationRequest): Observable<PutRetentionConfigurationResponse> {
			return this.http.post<PutRetentionConfigurationResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Saves a new query or updates an existing saved query. The <code>QueryName</code> must be unique for a single Amazon Web Services account and a single Amazon Web Services Region. You can create upto 300 queries in a single Amazon Web Services account and a single Amazon Web Services Region.</p> <note> <p> <code>PutStoredQuery</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutStoredQuery
		 * @return {PutStoredQueryResponse} Success
		 */
		PutStoredQuery(requestBody: PutStoredQueryRequest): Observable<PutStoredQueryResponse> {
			return this.http.post<PutStoredQueryResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutStoredQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of Amazon Web Services resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the <i>Config Developer Guide</i>.</p> <note> <p>If you run an aggregation query (i.e., using <code>GROUP BY</code> or using aggregate functions such as <code>COUNT</code>; e.g., <code>SELECT resourceId, COUNT(*) WHERE resourceType = 'AWS::IAM::Role' GROUP BY resourceId</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 500.</p> <p>If you run a non-aggregation query (i.e., not using <code>GROUP BY</code> or aggregate function; e.g., <code>SELECT * WHERE resourceType = 'AWS::IAM::Role'</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 25.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SelectAggregateResourceConfigResponse} Success
		 */
		SelectAggregateResourceConfig(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: SelectAggregateResourceConfigRequest): Observable<SelectAggregateResourceConfigResponse> {
			return this.http.post<SelectAggregateResourceConfigResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the <i>Config Developer Guide</i>.</p>
		 * Post #X-Amz-Target=StarlingDoveService.SelectResourceConfig
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SelectResourceConfigResponse} Success
		 */
		SelectResourceConfig(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: SelectResourceConfigRequest): Observable<SelectResourceConfigResponse> {
			return this.http.post<SelectResourceConfigResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.SelectResourceConfig?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Runs an on-demand evaluation for the specified Config rules against the last known configuration state of the resources. Use <code>StartConfigRulesEvaluation</code> when you want to test that a rule you updated is working as expected. <code>StartConfigRulesEvaluation</code> does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources. </p> <p>You can specify up to 25 Config rules per request. </p> <p>An existing <code>StartConfigRulesEvaluation</code> call for the specified rules must complete before you can call the API again. If you chose to have Config stream to an Amazon SNS topic, you will receive a <code>ConfigRuleEvaluationStarted</code> notification when the evaluation starts.</p> <note> <p>You don't need to call the <code>StartConfigRulesEvaluation</code> API to run an evaluation for a new rule. When you create a rule, Config evaluates your resources against the rule automatically. </p> </note> <p>The <code>StartConfigRulesEvaluation</code> API is useful if you want to run on-demand evaluations, such as the following example:</p> <ol> <li> <p>You have a custom rule that evaluates your IAM resources every 24 hours.</p> </li> <li> <p>You update your Lambda function to add additional conditions to your rule.</p> </li> <li> <p>Instead of waiting for the next periodic evaluation, you call the <code>StartConfigRulesEvaluation</code> API.</p> </li> <li> <p>Config invokes your Lambda function and evaluates your IAM resources.</p> </li> <li> <p>Your custom rule will still run periodic evaluations every 24 hours.</p> </li> </ol>
		 * Post #X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation
		 * @return {StartConfigRulesEvaluationResponse} Success
		 */
		StartConfigRulesEvaluation(requestBody: StartConfigRulesEvaluationRequest): Observable<StartConfigRulesEvaluationResponse> {
			return this.http.post<StartConfigRulesEvaluationResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.</p> <p>You must have created at least one delivery channel to successfully start the configuration recorder.</p>
		 * Post #X-Amz-Target=StarlingDoveService.StartConfigurationRecorder
		 * @return {void} Success
		 */
		StartConfigurationRecorder(requestBody: StartConfigurationRecorderRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Runs an on-demand remediation for the specified Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p> <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>
		 * Post #X-Amz-Target=StarlingDoveService.StartRemediationExecution
		 * @return {StartRemediationExecutionResponse} Success
		 */
		StartRemediationExecution(requestBody: StartRemediationExecutionRequest): Observable<StartRemediationExecutionResponse> {
			return this.http.post<StartRemediationExecutionResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.StartRemediationExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Runs an on-demand evaluation for the specified resource to determine whether the resource details will comply with configured Config rules. You can also use it for evaluation purposes. Config recommends using an evaluation context. It runs an execution against the resource details with all of the Config rules in your account that match with the specified proactive mode and resource type.</p> <note> <p>Ensure you have the <code>cloudformation:DescribeType</code> role setup to validate the resource type schema.</p> <p>You can find the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">Resource type schema</a> in "<i>Amazon Web Services public extensions</i>" within the CloudFormation registry or with the following CLI commmand: <code>aws cloudformation describe-type --type-name "AWS::S3::Bucket" --type RESOURCE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-view">Managing extensions through the CloudFormation registry</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the CloudFormation User Guide.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.StartResourceEvaluation
		 * @return {StartResourceEvaluationResponse} Success
		 */
		StartResourceEvaluation(requestBody: StartResourceEvaluationRequest): Observable<StartResourceEvaluationResponse> {
			return this.http.post<StartResourceEvaluationResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.StartResourceEvaluation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.
		 * Post #X-Amz-Target=StarlingDoveService.StopConfigurationRecorder
		 * @return {void} Success
		 */
		StopConfigurationRecorder(requestBody: StopConfigurationRecorderRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. If existing tags are specified, however, then their values will be updated. When a resource is deleted, the tags associated with that resource are deleted as well.
		 * Post #X-Amz-Target=StarlingDoveService.TagResource
		 * @return {void} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes specified tags from a resource.
		 * Post #X-Amz-Target=StarlingDoveService.UntagResource
		 * @return {void} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum BatchGetAggregateResourceConfigX_Amz_Target { 'StarlingDoveService.BatchGetAggregateResourceConfig' = 'StarlingDoveService.BatchGetAggregateResourceConfig' }

	export enum BatchGetResourceConfigX_Amz_Target { 'StarlingDoveService.BatchGetResourceConfig' = 'StarlingDoveService.BatchGetResourceConfig' }

	export enum DeleteAggregationAuthorizationX_Amz_Target { 'StarlingDoveService.DeleteAggregationAuthorization' = 'StarlingDoveService.DeleteAggregationAuthorization' }

	export enum DeleteConfigRuleX_Amz_Target { 'StarlingDoveService.DeleteConfigRule' = 'StarlingDoveService.DeleteConfigRule' }

	export enum DeleteConfigurationAggregatorX_Amz_Target { 'StarlingDoveService.DeleteConfigurationAggregator' = 'StarlingDoveService.DeleteConfigurationAggregator' }

	export enum DeleteConfigurationRecorderX_Amz_Target { 'StarlingDoveService.DeleteConfigurationRecorder' = 'StarlingDoveService.DeleteConfigurationRecorder' }

	export enum DeleteConformancePackX_Amz_Target { 'StarlingDoveService.DeleteConformancePack' = 'StarlingDoveService.DeleteConformancePack' }

	export enum DeleteDeliveryChannelX_Amz_Target { 'StarlingDoveService.DeleteDeliveryChannel' = 'StarlingDoveService.DeleteDeliveryChannel' }

	export enum DeleteEvaluationResultsX_Amz_Target { 'StarlingDoveService.DeleteEvaluationResults' = 'StarlingDoveService.DeleteEvaluationResults' }

	export enum DeleteOrganizationConfigRuleX_Amz_Target { 'StarlingDoveService.DeleteOrganizationConfigRule' = 'StarlingDoveService.DeleteOrganizationConfigRule' }

	export enum DeleteOrganizationConformancePackX_Amz_Target { 'StarlingDoveService.DeleteOrganizationConformancePack' = 'StarlingDoveService.DeleteOrganizationConformancePack' }

	export enum DeletePendingAggregationRequestX_Amz_Target { 'StarlingDoveService.DeletePendingAggregationRequest' = 'StarlingDoveService.DeletePendingAggregationRequest' }

	export enum DeleteRemediationConfigurationX_Amz_Target { 'StarlingDoveService.DeleteRemediationConfiguration' = 'StarlingDoveService.DeleteRemediationConfiguration' }

	export enum DeleteRemediationExceptionsX_Amz_Target { 'StarlingDoveService.DeleteRemediationExceptions' = 'StarlingDoveService.DeleteRemediationExceptions' }

	export enum DeleteResourceConfigX_Amz_Target { 'StarlingDoveService.DeleteResourceConfig' = 'StarlingDoveService.DeleteResourceConfig' }

	export enum DeleteRetentionConfigurationX_Amz_Target { 'StarlingDoveService.DeleteRetentionConfiguration' = 'StarlingDoveService.DeleteRetentionConfiguration' }

	export enum DeleteStoredQueryX_Amz_Target { 'StarlingDoveService.DeleteStoredQuery' = 'StarlingDoveService.DeleteStoredQuery' }

	export enum DeliverConfigSnapshotX_Amz_Target { 'StarlingDoveService.DeliverConfigSnapshot' = 'StarlingDoveService.DeliverConfigSnapshot' }

	export enum DescribeAggregateComplianceByConfigRulesX_Amz_Target { 'StarlingDoveService.DescribeAggregateComplianceByConfigRules' = 'StarlingDoveService.DescribeAggregateComplianceByConfigRules' }

	export enum DescribeAggregateComplianceByConformancePacksX_Amz_Target { 'StarlingDoveService.DescribeAggregateComplianceByConformancePacks' = 'StarlingDoveService.DescribeAggregateComplianceByConformancePacks' }

	export enum DescribeAggregationAuthorizationsX_Amz_Target { 'StarlingDoveService.DescribeAggregationAuthorizations' = 'StarlingDoveService.DescribeAggregationAuthorizations' }

	export enum DescribeComplianceByConfigRuleX_Amz_Target { 'StarlingDoveService.DescribeComplianceByConfigRule' = 'StarlingDoveService.DescribeComplianceByConfigRule' }

	export enum DescribeComplianceByResourceX_Amz_Target { 'StarlingDoveService.DescribeComplianceByResource' = 'StarlingDoveService.DescribeComplianceByResource' }

	export enum DescribeConfigRuleEvaluationStatusX_Amz_Target { 'StarlingDoveService.DescribeConfigRuleEvaluationStatus' = 'StarlingDoveService.DescribeConfigRuleEvaluationStatus' }

	export enum DescribeConfigRulesX_Amz_Target { 'StarlingDoveService.DescribeConfigRules' = 'StarlingDoveService.DescribeConfigRules' }

	export enum DescribeConfigurationAggregatorSourcesStatusX_Amz_Target { 'StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus' = 'StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus' }

	export enum DescribeConfigurationAggregatorsX_Amz_Target { 'StarlingDoveService.DescribeConfigurationAggregators' = 'StarlingDoveService.DescribeConfigurationAggregators' }

	export enum DescribeConfigurationRecorderStatusX_Amz_Target { 'StarlingDoveService.DescribeConfigurationRecorderStatus' = 'StarlingDoveService.DescribeConfigurationRecorderStatus' }

	export enum DescribeConfigurationRecordersX_Amz_Target { 'StarlingDoveService.DescribeConfigurationRecorders' = 'StarlingDoveService.DescribeConfigurationRecorders' }

	export enum DescribeConformancePackComplianceX_Amz_Target { 'StarlingDoveService.DescribeConformancePackCompliance' = 'StarlingDoveService.DescribeConformancePackCompliance' }

	export enum DescribeConformancePackStatusX_Amz_Target { 'StarlingDoveService.DescribeConformancePackStatus' = 'StarlingDoveService.DescribeConformancePackStatus' }

	export enum DescribeConformancePacksX_Amz_Target { 'StarlingDoveService.DescribeConformancePacks' = 'StarlingDoveService.DescribeConformancePacks' }

	export enum DescribeDeliveryChannelStatusX_Amz_Target { 'StarlingDoveService.DescribeDeliveryChannelStatus' = 'StarlingDoveService.DescribeDeliveryChannelStatus' }

	export enum DescribeDeliveryChannelsX_Amz_Target { 'StarlingDoveService.DescribeDeliveryChannels' = 'StarlingDoveService.DescribeDeliveryChannels' }

	export enum DescribeOrganizationConfigRuleStatusesX_Amz_Target { 'StarlingDoveService.DescribeOrganizationConfigRuleStatuses' = 'StarlingDoveService.DescribeOrganizationConfigRuleStatuses' }

	export enum DescribeOrganizationConfigRulesX_Amz_Target { 'StarlingDoveService.DescribeOrganizationConfigRules' = 'StarlingDoveService.DescribeOrganizationConfigRules' }

	export enum DescribeOrganizationConformancePackStatusesX_Amz_Target { 'StarlingDoveService.DescribeOrganizationConformancePackStatuses' = 'StarlingDoveService.DescribeOrganizationConformancePackStatuses' }

	export enum DescribeOrganizationConformancePacksX_Amz_Target { 'StarlingDoveService.DescribeOrganizationConformancePacks' = 'StarlingDoveService.DescribeOrganizationConformancePacks' }

	export enum DescribePendingAggregationRequestsX_Amz_Target { 'StarlingDoveService.DescribePendingAggregationRequests' = 'StarlingDoveService.DescribePendingAggregationRequests' }

	export enum DescribeRemediationConfigurationsX_Amz_Target { 'StarlingDoveService.DescribeRemediationConfigurations' = 'StarlingDoveService.DescribeRemediationConfigurations' }

	export enum DescribeRemediationExceptionsX_Amz_Target { 'StarlingDoveService.DescribeRemediationExceptions' = 'StarlingDoveService.DescribeRemediationExceptions' }

	export enum DescribeRemediationExecutionStatusX_Amz_Target { 'StarlingDoveService.DescribeRemediationExecutionStatus' = 'StarlingDoveService.DescribeRemediationExecutionStatus' }

	export enum DescribeRetentionConfigurationsX_Amz_Target { 'StarlingDoveService.DescribeRetentionConfigurations' = 'StarlingDoveService.DescribeRetentionConfigurations' }

	export enum GetAggregateComplianceDetailsByConfigRuleX_Amz_Target { 'StarlingDoveService.GetAggregateComplianceDetailsByConfigRule' = 'StarlingDoveService.GetAggregateComplianceDetailsByConfigRule' }

	export enum GetAggregateConfigRuleComplianceSummaryX_Amz_Target { 'StarlingDoveService.GetAggregateConfigRuleComplianceSummary' = 'StarlingDoveService.GetAggregateConfigRuleComplianceSummary' }

	export enum GetAggregateConformancePackComplianceSummaryX_Amz_Target { 'StarlingDoveService.GetAggregateConformancePackComplianceSummary' = 'StarlingDoveService.GetAggregateConformancePackComplianceSummary' }

	export enum GetAggregateDiscoveredResourceCountsX_Amz_Target { 'StarlingDoveService.GetAggregateDiscoveredResourceCounts' = 'StarlingDoveService.GetAggregateDiscoveredResourceCounts' }

	export enum GetAggregateResourceConfigX_Amz_Target { 'StarlingDoveService.GetAggregateResourceConfig' = 'StarlingDoveService.GetAggregateResourceConfig' }

	export enum GetComplianceDetailsByConfigRuleX_Amz_Target { 'StarlingDoveService.GetComplianceDetailsByConfigRule' = 'StarlingDoveService.GetComplianceDetailsByConfigRule' }

	export enum GetComplianceDetailsByResourceX_Amz_Target { 'StarlingDoveService.GetComplianceDetailsByResource' = 'StarlingDoveService.GetComplianceDetailsByResource' }

	export enum GetComplianceSummaryByConfigRuleX_Amz_Target { 'StarlingDoveService.GetComplianceSummaryByConfigRule' = 'StarlingDoveService.GetComplianceSummaryByConfigRule' }

	export enum GetComplianceSummaryByResourceTypeX_Amz_Target { 'StarlingDoveService.GetComplianceSummaryByResourceType' = 'StarlingDoveService.GetComplianceSummaryByResourceType' }

	export enum GetConformancePackComplianceDetailsX_Amz_Target { 'StarlingDoveService.GetConformancePackComplianceDetails' = 'StarlingDoveService.GetConformancePackComplianceDetails' }

	export enum GetConformancePackComplianceSummaryX_Amz_Target { 'StarlingDoveService.GetConformancePackComplianceSummary' = 'StarlingDoveService.GetConformancePackComplianceSummary' }

	export enum GetCustomRulePolicyX_Amz_Target { 'StarlingDoveService.GetCustomRulePolicy' = 'StarlingDoveService.GetCustomRulePolicy' }

	export enum GetDiscoveredResourceCountsX_Amz_Target { 'StarlingDoveService.GetDiscoveredResourceCounts' = 'StarlingDoveService.GetDiscoveredResourceCounts' }

	export enum GetOrganizationConfigRuleDetailedStatusX_Amz_Target { 'StarlingDoveService.GetOrganizationConfigRuleDetailedStatus' = 'StarlingDoveService.GetOrganizationConfigRuleDetailedStatus' }

	export enum GetOrganizationConformancePackDetailedStatusX_Amz_Target { 'StarlingDoveService.GetOrganizationConformancePackDetailedStatus' = 'StarlingDoveService.GetOrganizationConformancePackDetailedStatus' }

	export enum GetOrganizationCustomRulePolicyX_Amz_Target { 'StarlingDoveService.GetOrganizationCustomRulePolicy' = 'StarlingDoveService.GetOrganizationCustomRulePolicy' }

	export enum GetResourceConfigHistoryX_Amz_Target { 'StarlingDoveService.GetResourceConfigHistory' = 'StarlingDoveService.GetResourceConfigHistory' }

	export enum GetResourceEvaluationSummaryX_Amz_Target { 'StarlingDoveService.GetResourceEvaluationSummary' = 'StarlingDoveService.GetResourceEvaluationSummary' }

	export enum GetStoredQueryX_Amz_Target { 'StarlingDoveService.GetStoredQuery' = 'StarlingDoveService.GetStoredQuery' }

	export enum ListAggregateDiscoveredResourcesX_Amz_Target { 'StarlingDoveService.ListAggregateDiscoveredResources' = 'StarlingDoveService.ListAggregateDiscoveredResources' }

	export enum ListConformancePackComplianceScoresX_Amz_Target { 'StarlingDoveService.ListConformancePackComplianceScores' = 'StarlingDoveService.ListConformancePackComplianceScores' }

	export enum ListDiscoveredResourcesX_Amz_Target { 'StarlingDoveService.ListDiscoveredResources' = 'StarlingDoveService.ListDiscoveredResources' }

	export enum ListResourceEvaluationsX_Amz_Target { 'StarlingDoveService.ListResourceEvaluations' = 'StarlingDoveService.ListResourceEvaluations' }

	export enum ListStoredQueriesX_Amz_Target { 'StarlingDoveService.ListStoredQueries' = 'StarlingDoveService.ListStoredQueries' }

	export enum ListTagsForResourceX_Amz_Target { 'StarlingDoveService.ListTagsForResource' = 'StarlingDoveService.ListTagsForResource' }

	export enum PutAggregationAuthorizationX_Amz_Target { 'StarlingDoveService.PutAggregationAuthorization' = 'StarlingDoveService.PutAggregationAuthorization' }

	export enum PutConfigRuleX_Amz_Target { 'StarlingDoveService.PutConfigRule' = 'StarlingDoveService.PutConfigRule' }

	export enum PutConfigurationAggregatorX_Amz_Target { 'StarlingDoveService.PutConfigurationAggregator' = 'StarlingDoveService.PutConfigurationAggregator' }

	export enum PutConfigurationRecorderX_Amz_Target { 'StarlingDoveService.PutConfigurationRecorder' = 'StarlingDoveService.PutConfigurationRecorder' }

	export enum PutConformancePackX_Amz_Target { 'StarlingDoveService.PutConformancePack' = 'StarlingDoveService.PutConformancePack' }

	export enum PutDeliveryChannelX_Amz_Target { 'StarlingDoveService.PutDeliveryChannel' = 'StarlingDoveService.PutDeliveryChannel' }

	export enum PutEvaluationsX_Amz_Target { 'StarlingDoveService.PutEvaluations' = 'StarlingDoveService.PutEvaluations' }

	export enum PutExternalEvaluationX_Amz_Target { 'StarlingDoveService.PutExternalEvaluation' = 'StarlingDoveService.PutExternalEvaluation' }

	export enum PutOrganizationConfigRuleX_Amz_Target { 'StarlingDoveService.PutOrganizationConfigRule' = 'StarlingDoveService.PutOrganizationConfigRule' }

	export enum PutOrganizationConformancePackX_Amz_Target { 'StarlingDoveService.PutOrganizationConformancePack' = 'StarlingDoveService.PutOrganizationConformancePack' }

	export enum PutRemediationConfigurationsX_Amz_Target { 'StarlingDoveService.PutRemediationConfigurations' = 'StarlingDoveService.PutRemediationConfigurations' }

	export enum PutRemediationExceptionsX_Amz_Target { 'StarlingDoveService.PutRemediationExceptions' = 'StarlingDoveService.PutRemediationExceptions' }

	export enum PutResourceConfigX_Amz_Target { 'StarlingDoveService.PutResourceConfig' = 'StarlingDoveService.PutResourceConfig' }

	export enum PutRetentionConfigurationX_Amz_Target { 'StarlingDoveService.PutRetentionConfiguration' = 'StarlingDoveService.PutRetentionConfiguration' }

	export enum PutStoredQueryX_Amz_Target { 'StarlingDoveService.PutStoredQuery' = 'StarlingDoveService.PutStoredQuery' }

	export enum SelectAggregateResourceConfigX_Amz_Target { 'StarlingDoveService.SelectAggregateResourceConfig' = 'StarlingDoveService.SelectAggregateResourceConfig' }

	export enum SelectResourceConfigX_Amz_Target { 'StarlingDoveService.SelectResourceConfig' = 'StarlingDoveService.SelectResourceConfig' }

	export enum StartConfigRulesEvaluationX_Amz_Target { 'StarlingDoveService.StartConfigRulesEvaluation' = 'StarlingDoveService.StartConfigRulesEvaluation' }

	export enum StartConfigurationRecorderX_Amz_Target { 'StarlingDoveService.StartConfigurationRecorder' = 'StarlingDoveService.StartConfigurationRecorder' }

	export enum StartRemediationExecutionX_Amz_Target { 'StarlingDoveService.StartRemediationExecution' = 'StarlingDoveService.StartRemediationExecution' }

	export enum StartResourceEvaluationX_Amz_Target { 'StarlingDoveService.StartResourceEvaluation' = 'StarlingDoveService.StartResourceEvaluation' }

	export enum StopConfigurationRecorderX_Amz_Target { 'StarlingDoveService.StopConfigurationRecorder' = 'StarlingDoveService.StopConfigurationRecorder' }

	export enum TagResourceX_Amz_Target { 'StarlingDoveService.TagResource' = 'StarlingDoveService.TagResource' }

	export enum UntagResourceX_Amz_Target { 'StarlingDoveService.UntagResource' = 'StarlingDoveService.UntagResource' }

}

