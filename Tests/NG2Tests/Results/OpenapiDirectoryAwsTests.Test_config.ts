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
		version?: string | null;
		accountId?: string | null;
		configurationItemCaptureTime?: Date | null;
		configurationItemStatus?: BaseConfigurationItemConfigurationItemStatus | null;
		configurationStateId?: string | null;
		arn?: string | null;
		resourceType?: BaseConfigurationItemResourceType | null;
		resourceId?: string | null;
		resourceName?: string | null;
		awsRegion?: string | null;
		availabilityZone?: string | null;
		resourceCreationTime?: Date | null;
		configuration?: string | null;
		supplementaryConfiguration?: SupplementaryConfiguration;
	}

	/** The detailed configuration of a specified resource. */
	export interface BaseConfigurationItemFormProperties {
		version: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
		configurationItemCaptureTime: FormControl<Date | null | undefined>,
		configurationItemStatus: FormControl<BaseConfigurationItemConfigurationItemStatus | null | undefined>,
		configurationStateId: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		resourceType: FormControl<BaseConfigurationItemResourceType | null | undefined>,
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
			configurationItemStatus: new FormControl<BaseConfigurationItemConfigurationItemStatus | null | undefined>(undefined),
			configurationStateId: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<BaseConfigurationItemResourceType | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
			availabilityZone: new FormControl<string | null | undefined>(undefined),
			resourceCreationTime: new FormControl<Date | null | undefined>(undefined),
			configuration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BaseConfigurationItemConfigurationItemStatus { OK = 0, ResourceDiscovered = 1, ResourceNotRecorded = 2, ResourceDeleted = 3, ResourceDeletedNotRecorded = 4 }

	export enum BaseConfigurationItemResourceType { AWSEC2CustomerGateway = 0, AWSEC2EIP = 1, AWSEC2Host = 2, AWSEC2Instance = 3, AWSEC2InternetGateway = 4, AWSEC2NetworkAcl = 5, AWSEC2NetworkInterface = 6, AWSEC2RouteTable = 7, AWSEC2SecurityGroup = 8, AWSEC2Subnet = 9, AWSCloudTrailTrail = 10, AWSEC2Volume = 11, AWSEC2VPC = 12, AWSEC2VPNConnection = 13, AWSEC2VPNGateway = 14, AWSEC2RegisteredHAInstance = 15, AWSEC2NatGateway = 16, AWSEC2EgressOnlyInternetGateway = 17, AWSEC2VPCEndpoint = 18, AWSEC2VPCEndpointService = 19, AWSEC2FlowLog = 20, AWSEC2VPCPeeringConnection = 21, AWSElasticsearchDomain = 22, AWSIAMGroup = 23, AWSIAMPolicy = 24, AWSIAMRole = 25, AWSIAMUser = 26, AWSElasticLoadBalancingV2LoadBalancer = 27, AWSACMCertificate = 28, AWSRDSDBInstance = 29, AWSRDSDBSubnetGroup = 30, AWSRDSDBSecurityGroup = 31, AWSRDSDBSnapshot = 32, AWSRDSDBCluster = 33, AWSRDSDBClusterSnapshot = 34, AWSRDSEventSubscription = 35, AWSS3Bucket = 36, AWSS3AccountPublicAccessBlock = 37, AWSRedshiftCluster = 38, AWSRedshiftClusterSnapshot = 39, AWSRedshiftClusterParameterGroup = 40, AWSRedshiftClusterSecurityGroup = 41, AWSRedshiftClusterSubnetGroup = 42, AWSRedshiftEventSubscription = 43, AWSSSMManagedInstanceInventory = 44, AWSCloudWatchAlarm = 45, AWSCloudFormationStack = 46, AWSElasticLoadBalancingLoadBalancer = 47, AWSAutoScalingAutoScalingGroup = 48, AWSAutoScalingLaunchConfiguration = 49, AWSAutoScalingScalingPolicy = 50, AWSAutoScalingScheduledAction = 51, AWSDynamoDBTable = 52, AWSCodeBuildProject = 53, AWSWAFRateBasedRule = 54, AWSWAFRule = 55, AWSWAFRuleGroup = 56, AWSWAFWebACL = 57, AWSWAFRegionalRateBasedRule = 58, AWSWAFRegionalRule = 59, AWSWAFRegionalRuleGroup = 60, AWSWAFRegionalWebACL = 61, AWSCloudFrontDistribution = 62, AWSCloudFrontStreamingDistribution = 63, AWSLambdaFunction = 64, AWSElasticBeanstalkApplication = 65, AWSElasticBeanstalkApplicationVersion = 66, AWSElasticBeanstalkEnvironment = 67, AWSWAFv2WebACL = 68, AWSWAFv2RuleGroup = 69, AWSWAFv2IPSet = 70, AWSWAFv2RegexPatternSet = 71, AWSWAFv2ManagedRuleSet = 72, AWSXRayEncryptionConfig = 73, AWSSSMAssociationCompliance = 74, AWSSSMPatchCompliance = 75, AWSShieldProtection = 76, AWSShieldRegionalProtection = 77, AWSConfigResourceCompliance = 78, AWSApiGatewayStage = 79, AWSApiGatewayRestApi = 80, AWSApiGatewayV2Stage = 81, AWSApiGatewayV2Api = 82, AWSCodePipelinePipeline = 83, AWSServiceCatalogCloudFormationProvisionedProduct = 84, AWSServiceCatalogCloudFormationProduct = 85, AWSServiceCatalogPortfolio = 86, AWSSQSQueue = 87, AWSKMSKey = 88, AWSQLDBLedger = 89 }

	export interface SupplementaryConfiguration {
	}
	export interface SupplementaryConfigurationFormProperties {
	}
	export function CreateSupplementaryConfigurationFormGroup() {
		return new FormGroup<SupplementaryConfigurationFormProperties>({
		});

	}


	/** The details that identify a resource that is collected by AWS Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region. */
	export interface AggregateResourceIdentifier {
		SourceAccountId: string;
		SourceRegion: string;
		ResourceId: string;
		ResourceType: AggregateResourceIdentifierResourceType;
		ResourceName?: string | null;
	}

	/** The details that identify a resource that is collected by AWS Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region. */
	export interface AggregateResourceIdentifierFormProperties {
		SourceAccountId: FormControl<string | null | undefined>,
		SourceRegion: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ResourceType: FormControl<AggregateResourceIdentifierResourceType | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateAggregateResourceIdentifierFormGroup() {
		return new FormGroup<AggregateResourceIdentifierFormProperties>({
			SourceAccountId: new FormControl<string | null | undefined>(undefined),
			SourceRegion: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<AggregateResourceIdentifierResourceType | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AggregateResourceIdentifierResourceType { AWSEC2CustomerGateway = 0, AWSEC2EIP = 1, AWSEC2Host = 2, AWSEC2Instance = 3, AWSEC2InternetGateway = 4, AWSEC2NetworkAcl = 5, AWSEC2NetworkInterface = 6, AWSEC2RouteTable = 7, AWSEC2SecurityGroup = 8, AWSEC2Subnet = 9, AWSCloudTrailTrail = 10, AWSEC2Volume = 11, AWSEC2VPC = 12, AWSEC2VPNConnection = 13, AWSEC2VPNGateway = 14, AWSEC2RegisteredHAInstance = 15, AWSEC2NatGateway = 16, AWSEC2EgressOnlyInternetGateway = 17, AWSEC2VPCEndpoint = 18, AWSEC2VPCEndpointService = 19, AWSEC2FlowLog = 20, AWSEC2VPCPeeringConnection = 21, AWSElasticsearchDomain = 22, AWSIAMGroup = 23, AWSIAMPolicy = 24, AWSIAMRole = 25, AWSIAMUser = 26, AWSElasticLoadBalancingV2LoadBalancer = 27, AWSACMCertificate = 28, AWSRDSDBInstance = 29, AWSRDSDBSubnetGroup = 30, AWSRDSDBSecurityGroup = 31, AWSRDSDBSnapshot = 32, AWSRDSDBCluster = 33, AWSRDSDBClusterSnapshot = 34, AWSRDSEventSubscription = 35, AWSS3Bucket = 36, AWSS3AccountPublicAccessBlock = 37, AWSRedshiftCluster = 38, AWSRedshiftClusterSnapshot = 39, AWSRedshiftClusterParameterGroup = 40, AWSRedshiftClusterSecurityGroup = 41, AWSRedshiftClusterSubnetGroup = 42, AWSRedshiftEventSubscription = 43, AWSSSMManagedInstanceInventory = 44, AWSCloudWatchAlarm = 45, AWSCloudFormationStack = 46, AWSElasticLoadBalancingLoadBalancer = 47, AWSAutoScalingAutoScalingGroup = 48, AWSAutoScalingLaunchConfiguration = 49, AWSAutoScalingScalingPolicy = 50, AWSAutoScalingScheduledAction = 51, AWSDynamoDBTable = 52, AWSCodeBuildProject = 53, AWSWAFRateBasedRule = 54, AWSWAFRule = 55, AWSWAFRuleGroup = 56, AWSWAFWebACL = 57, AWSWAFRegionalRateBasedRule = 58, AWSWAFRegionalRule = 59, AWSWAFRegionalRuleGroup = 60, AWSWAFRegionalWebACL = 61, AWSCloudFrontDistribution = 62, AWSCloudFrontStreamingDistribution = 63, AWSLambdaFunction = 64, AWSElasticBeanstalkApplication = 65, AWSElasticBeanstalkApplicationVersion = 66, AWSElasticBeanstalkEnvironment = 67, AWSWAFv2WebACL = 68, AWSWAFv2RuleGroup = 69, AWSWAFv2IPSet = 70, AWSWAFv2RegexPatternSet = 71, AWSWAFv2ManagedRuleSet = 72, AWSXRayEncryptionConfig = 73, AWSSSMAssociationCompliance = 74, AWSSSMPatchCompliance = 75, AWSShieldProtection = 76, AWSShieldRegionalProtection = 77, AWSConfigResourceCompliance = 78, AWSApiGatewayStage = 79, AWSApiGatewayRestApi = 80, AWSApiGatewayV2Stage = 81, AWSApiGatewayV2Api = 82, AWSCodePipelinePipeline = 83, AWSServiceCatalogCloudFormationProvisionedProduct = 84, AWSServiceCatalogCloudFormationProduct = 85, AWSServiceCatalogPortfolio = 86, AWSSQSQueue = 87, AWSKMSKey = 88, AWSQLDBLedger = 89 }

	export interface BatchGetAggregateResourceConfigRequest {
		ConfigurationAggregatorName: string;
		ResourceIdentifiers: Array<AggregateResourceIdentifier>;
	}
	export interface BatchGetAggregateResourceConfigRequestFormProperties {
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetAggregateResourceConfigRequestFormGroup() {
		return new FormGroup<BatchGetAggregateResourceConfigRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined),
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


	/** The details that identify a resource within AWS Config, including the resource type and resource ID. */
	export interface ResourceKey {
		resourceType: ResourceKeyResourceType;
		resourceId: string;
	}

	/** The details that identify a resource within AWS Config, including the resource type and resource ID. */
	export interface ResourceKeyFormProperties {
		resourceType: FormControl<ResourceKeyResourceType | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateResourceKeyFormGroup() {
		return new FormGroup<ResourceKeyFormProperties>({
			resourceType: new FormControl<ResourceKeyResourceType | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceKeyResourceType { AWSEC2CustomerGateway = 0, AWSEC2EIP = 1, AWSEC2Host = 2, AWSEC2Instance = 3, AWSEC2InternetGateway = 4, AWSEC2NetworkAcl = 5, AWSEC2NetworkInterface = 6, AWSEC2RouteTable = 7, AWSEC2SecurityGroup = 8, AWSEC2Subnet = 9, AWSCloudTrailTrail = 10, AWSEC2Volume = 11, AWSEC2VPC = 12, AWSEC2VPNConnection = 13, AWSEC2VPNGateway = 14, AWSEC2RegisteredHAInstance = 15, AWSEC2NatGateway = 16, AWSEC2EgressOnlyInternetGateway = 17, AWSEC2VPCEndpoint = 18, AWSEC2VPCEndpointService = 19, AWSEC2FlowLog = 20, AWSEC2VPCPeeringConnection = 21, AWSElasticsearchDomain = 22, AWSIAMGroup = 23, AWSIAMPolicy = 24, AWSIAMRole = 25, AWSIAMUser = 26, AWSElasticLoadBalancingV2LoadBalancer = 27, AWSACMCertificate = 28, AWSRDSDBInstance = 29, AWSRDSDBSubnetGroup = 30, AWSRDSDBSecurityGroup = 31, AWSRDSDBSnapshot = 32, AWSRDSDBCluster = 33, AWSRDSDBClusterSnapshot = 34, AWSRDSEventSubscription = 35, AWSS3Bucket = 36, AWSS3AccountPublicAccessBlock = 37, AWSRedshiftCluster = 38, AWSRedshiftClusterSnapshot = 39, AWSRedshiftClusterParameterGroup = 40, AWSRedshiftClusterSecurityGroup = 41, AWSRedshiftClusterSubnetGroup = 42, AWSRedshiftEventSubscription = 43, AWSSSMManagedInstanceInventory = 44, AWSCloudWatchAlarm = 45, AWSCloudFormationStack = 46, AWSElasticLoadBalancingLoadBalancer = 47, AWSAutoScalingAutoScalingGroup = 48, AWSAutoScalingLaunchConfiguration = 49, AWSAutoScalingScalingPolicy = 50, AWSAutoScalingScheduledAction = 51, AWSDynamoDBTable = 52, AWSCodeBuildProject = 53, AWSWAFRateBasedRule = 54, AWSWAFRule = 55, AWSWAFRuleGroup = 56, AWSWAFWebACL = 57, AWSWAFRegionalRateBasedRule = 58, AWSWAFRegionalRule = 59, AWSWAFRegionalRuleGroup = 60, AWSWAFRegionalWebACL = 61, AWSCloudFrontDistribution = 62, AWSCloudFrontStreamingDistribution = 63, AWSLambdaFunction = 64, AWSElasticBeanstalkApplication = 65, AWSElasticBeanstalkApplicationVersion = 66, AWSElasticBeanstalkEnvironment = 67, AWSWAFv2WebACL = 68, AWSWAFv2RuleGroup = 69, AWSWAFv2IPSet = 70, AWSWAFv2RegexPatternSet = 71, AWSWAFv2ManagedRuleSet = 72, AWSXRayEncryptionConfig = 73, AWSSSMAssociationCompliance = 74, AWSSSMPatchCompliance = 75, AWSShieldProtection = 76, AWSShieldRegionalProtection = 77, AWSConfigResourceCompliance = 78, AWSApiGatewayStage = 79, AWSApiGatewayRestApi = 80, AWSApiGatewayV2Stage = 81, AWSApiGatewayV2Api = 82, AWSCodePipelinePipeline = 83, AWSServiceCatalogCloudFormationProvisionedProduct = 84, AWSServiceCatalogCloudFormationProduct = 85, AWSServiceCatalogPortfolio = 86, AWSSQSQueue = 87, AWSKMSKey = 88, AWSQLDBLedger = 89 }

	export interface BatchGetResourceConfigRequest {
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
		AuthorizedAccountId: string;
		AuthorizedAwsRegion: string;
	}
	export interface DeleteAggregationAuthorizationRequestFormProperties {
		AuthorizedAccountId: FormControl<string | null | undefined>,
		AuthorizedAwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAggregationAuthorizationRequestFormGroup() {
		return new FormGroup<DeleteAggregationAuthorizationRequestFormProperties>({
			AuthorizedAccountId: new FormControl<string | null | undefined>(undefined),
			AuthorizedAwsRegion: new FormControl<string | null | undefined>(undefined),
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
		ConfigRuleName: string;
	}

	/** <p/> */
	export interface DeleteConfigRuleRequestFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConfigRuleRequestFormGroup() {
		return new FormGroup<DeleteConfigRuleRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
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
		ConfigurationAggregatorName: string;
	}
	export interface DeleteConfigurationAggregatorRequestFormProperties {
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConfigurationAggregatorRequestFormGroup() {
		return new FormGroup<DeleteConfigurationAggregatorRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request object for the <code>DeleteConfigurationRecorder</code> action. */
	export interface DeleteConfigurationRecorderRequest {
		ConfigurationRecorderName: string;
	}

	/** The request object for the <code>DeleteConfigurationRecorder</code> action. */
	export interface DeleteConfigurationRecorderRequestFormProperties {
		ConfigurationRecorderName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConfigurationRecorderRequestFormGroup() {
		return new FormGroup<DeleteConfigurationRecorderRequestFormProperties>({
			ConfigurationRecorderName: new FormControl<string | null | undefined>(undefined),
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
		ConformancePackName: string;
	}
	export interface DeleteConformancePackRequestFormProperties {
		ConformancePackName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConformancePackRequestFormGroup() {
		return new FormGroup<DeleteConformancePackRequestFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined),
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
		DeliveryChannelName: string;
	}

	/** The input for the <a>DeleteDeliveryChannel</a> action. The action accepts the following data, in JSON format.  */
	export interface DeleteDeliveryChannelRequestFormProperties {
		DeliveryChannelName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDeliveryChannelRequestFormGroup() {
		return new FormGroup<DeleteDeliveryChannelRequestFormProperties>({
			DeliveryChannelName: new FormControl<string | null | undefined>(undefined),
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


	/** The output when you delete the evaluation results for the specified AWS Config rule. */
	export interface DeleteEvaluationResultsResponse {
	}

	/** The output when you delete the evaluation results for the specified AWS Config rule. */
	export interface DeleteEvaluationResultsResponseFormProperties {
	}
	export function CreateDeleteEvaluationResultsResponseFormGroup() {
		return new FormGroup<DeleteEvaluationResultsResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteEvaluationResultsRequest {
		ConfigRuleName: string;
	}

	/** <p/> */
	export interface DeleteEvaluationResultsRequestFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEvaluationResultsRequestFormGroup() {
		return new FormGroup<DeleteEvaluationResultsRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteOrganizationConfigRuleRequest {
		OrganizationConfigRuleName: string;
	}
	export interface DeleteOrganizationConfigRuleRequestFormProperties {
		OrganizationConfigRuleName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteOrganizationConfigRuleRequestFormGroup() {
		return new FormGroup<DeleteOrganizationConfigRuleRequestFormProperties>({
			OrganizationConfigRuleName: new FormControl<string | null | undefined>(undefined),
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
		OrganizationConformancePackName: string;
	}
	export interface DeleteOrganizationConformancePackRequestFormProperties {
		OrganizationConformancePackName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteOrganizationConformancePackRequestFormGroup() {
		return new FormGroup<DeleteOrganizationConformancePackRequestFormProperties>({
			OrganizationConformancePackName: new FormControl<string | null | undefined>(undefined),
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
		RequesterAccountId: string;
		RequesterAwsRegion: string;
	}
	export interface DeletePendingAggregationRequestRequestFormProperties {
		RequesterAccountId: FormControl<string | null | undefined>,
		RequesterAwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateDeletePendingAggregationRequestRequestFormGroup() {
		return new FormGroup<DeletePendingAggregationRequestRequestFormProperties>({
			RequesterAccountId: new FormControl<string | null | undefined>(undefined),
			RequesterAwsRegion: new FormControl<string | null | undefined>(undefined),
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
		ConfigRuleName: string;
		ResourceType?: string | null;
	}
	export interface DeleteRemediationConfigurationRequestFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRemediationConfigurationRequestFormGroup() {
		return new FormGroup<DeleteRemediationConfigurationRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
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
		FailureMessage?: string | null;
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


	/** The details that identify a resource within AWS Config, including the resource type and resource ID.  */
	export interface RemediationExceptionResourceKey {
		ResourceType?: string | null;
		ResourceId?: string | null;
	}

	/** The details that identify a resource within AWS Config, including the resource type and resource ID.  */
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
		ConfigRuleName: string;
		ResourceKeys: Array<RemediationExceptionResourceKey>;
	}
	export interface DeleteRemediationExceptionsRequestFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRemediationExceptionsRequestFormGroup() {
		return new FormGroup<DeleteRemediationExceptionsRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
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
		ResourceType: string;
		ResourceId: string;
	}
	export interface DeleteResourceConfigRequestFormProperties {
		ResourceType: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourceConfigRequestFormGroup() {
		return new FormGroup<DeleteResourceConfigRequestFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
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
		RetentionConfigurationName: string;
	}
	export interface DeleteRetentionConfigurationRequestFormProperties {
		RetentionConfigurationName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRetentionConfigurationRequestFormGroup() {
		return new FormGroup<DeleteRetentionConfigurationRequestFormProperties>({
			RetentionConfigurationName: new FormControl<string | null | undefined>(undefined),
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


	/** The output for the <a>DeliverConfigSnapshot</a> action, in JSON format. */
	export interface DeliverConfigSnapshotResponse {
		configSnapshotId?: string | null;
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
		deliveryChannelName: string;
	}

	/** The input for the <a>DeliverConfigSnapshot</a> action. */
	export interface DeliverConfigSnapshotRequestFormProperties {
		deliveryChannelName: FormControl<string | null | undefined>,
	}
	export function CreateDeliverConfigSnapshotRequestFormGroup() {
		return new FormGroup<DeliverConfigSnapshotRequestFormProperties>({
			deliveryChannelName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAggregateComplianceByConfigRulesResponse {
		AggregateComplianceByConfigRules?: Array<AggregateComplianceByConfigRule>;
		NextToken?: string | null;
	}
	export interface DescribeAggregateComplianceByConfigRulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAggregateComplianceByConfigRulesResponseFormGroup() {
		return new FormGroup<DescribeAggregateComplianceByConfigRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Indicates whether an AWS Config rule is compliant based on account ID, region, compliance, and rule name.</p> <p>A rule is compliant if all of the resources that the rule evaluated comply with it. It is noncompliant if any of these resources do not comply.</p> */
	export interface AggregateComplianceByConfigRule {
		ConfigRuleName?: string | null;

		/** Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance. */
		Compliance?: Compliance;
		AccountId?: string | null;
		AwsRegion?: string | null;
	}

	/** <p>Indicates whether an AWS Config rule is compliant based on account ID, region, compliance, and rule name.</p> <p>A rule is compliant if all of the resources that the rule evaluated comply with it. It is noncompliant if any of these resources do not comply.</p> */
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


	/** Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance. */
	export interface Compliance {
		ComplianceType?: ComplianceComplianceType | null;

		/** The number of AWS resources or AWS Config rules responsible for the current compliance of the item, up to a maximum number. */
		ComplianceContributorCount?: ComplianceContributorCount;
	}

	/** Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance. */
	export interface ComplianceFormProperties {
		ComplianceType: FormControl<ComplianceComplianceType | null | undefined>,
	}
	export function CreateComplianceFormGroup() {
		return new FormGroup<ComplianceFormProperties>({
			ComplianceType: new FormControl<ComplianceComplianceType | null | undefined>(undefined),
		});

	}

	export enum ComplianceComplianceType { COMPLIANT = 0, NON_COMPLIANT = 1, NOT_APPLICABLE = 2, INSUFFICIENT_DATA = 3 }


	/** The number of AWS resources or AWS Config rules responsible for the current compliance of the item, up to a maximum number. */
	export interface ComplianceContributorCount {
		CappedCount?: number | null;
		CapExceeded?: boolean | null;
	}

	/** The number of AWS resources or AWS Config rules responsible for the current compliance of the item, up to a maximum number. */
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
		ConfigurationAggregatorName: string;

		/** Filters the compliance results based on account ID, region, compliance type, and rule name. */
		Filters?: ConfigRuleComplianceFilters;
		Limit?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeAggregateComplianceByConfigRulesRequestFormProperties {
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAggregateComplianceByConfigRulesRequestFormGroup() {
		return new FormGroup<DescribeAggregateComplianceByConfigRulesRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters the compliance results based on account ID, region, compliance type, and rule name. */
	export interface ConfigRuleComplianceFilters {
		ConfigRuleName?: string | null;
		ComplianceType?: ComplianceComplianceType | null;
		AccountId?: string | null;
		AwsRegion?: string | null;
	}

	/** Filters the compliance results based on account ID, region, compliance type, and rule name. */
	export interface ConfigRuleComplianceFiltersFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		ComplianceType: FormControl<ComplianceComplianceType | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateConfigRuleComplianceFiltersFormGroup() {
		return new FormGroup<ConfigRuleComplianceFiltersFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			ComplianceType: new FormControl<ComplianceComplianceType | null | undefined>(undefined),
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

	export interface DescribeAggregationAuthorizationsResponse {
		AggregationAuthorizations?: Array<AggregationAuthorization>;
		NextToken?: string | null;
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
		AggregationAuthorizationArn?: string | null;
		AuthorizedAccountId?: string | null;
		AuthorizedAwsRegion?: string | null;
		CreationTime?: Date | null;
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
		NextToken?: string | null;
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
		NextToken?: string | null;
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


	/** Indicates whether an AWS Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it. A rule is noncompliant if any of these resources do not comply. */
	export interface ComplianceByConfigRule {
		ConfigRuleName?: string | null;

		/** Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance. */
		Compliance?: Compliance;
	}

	/** Indicates whether an AWS Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it. A rule is noncompliant if any of these resources do not comply. */
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
		NextToken?: string | null;
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

	export enum ComplianceType { COMPLIANT = 0, NON_COMPLIANT = 1, NOT_APPLICABLE = 2, INSUFFICIENT_DATA = 3 }


	/** <p/> */
	export interface DescribeComplianceByResourceResponse {
		ComplianceByResources?: Array<ComplianceByResource>;
		NextToken?: string | null;
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


	/** Indicates whether an AWS resource that is evaluated according to one or more AWS Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules. */
	export interface ComplianceByResource {
		ResourceType?: string | null;
		ResourceId?: string | null;

		/** Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance. */
		Compliance?: Compliance;
	}

	/** Indicates whether an AWS resource that is evaluated according to one or more AWS Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules. */
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
		ResourceType?: string | null;
		ResourceId?: string | null;
		ComplianceTypes?: Array<ComplianceType>;
		Limit?: number | null;
		NextToken?: string | null;
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
		NextToken?: string | null;
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


	/** <p>Status information for your AWS managed Config rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about custom AWS Config rules.</p> */
	export interface ConfigRuleEvaluationStatus {
		ConfigRuleName?: string | null;
		ConfigRuleArn?: string | null;
		ConfigRuleId?: string | null;
		LastSuccessfulInvocationTime?: Date | null;
		LastFailedInvocationTime?: Date | null;
		LastSuccessfulEvaluationTime?: Date | null;
		LastFailedEvaluationTime?: Date | null;
		FirstActivatedTime?: Date | null;
		LastDeactivatedTime?: Date | null;
		LastErrorCode?: string | null;
		LastErrorMessage?: string | null;
		FirstEvaluationStarted?: boolean | null;
	}

	/** <p>Status information for your AWS managed Config rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about custom AWS Config rules.</p> */
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
		});

	}


	/** <p/> */
	export interface DescribeConfigRuleEvaluationStatusRequest {
		ConfigRuleNames?: Array<string>;
		NextToken?: string | null;
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
		NextToken?: string | null;
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


	/** <p>An AWS Config rule represents an AWS Lambda function that you create for a custom rule or a predefined function for an AWS managed rule. The function evaluates configuration items to assess whether your AWS resources comply with your desired configurations. This function can run when AWS Config detects a configuration change to an AWS resource and at a periodic frequency that you choose (for example, every 24 hours).</p> <note> <p>You can use the AWS CLI and AWS SDKs if you want to create a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note> <p>For more information about developing and using AWS Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating AWS Resource Configurations with AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p> */
	export interface ConfigRule {
		ConfigRuleName?: string | null;
		ConfigRuleArn?: string | null;
		ConfigRuleId?: string | null;
		Description?: string | null;

		/** Defines which resources trigger an evaluation for an AWS Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration. */
		Scope?: Scope;

		/**
		 * Provides the AWS Config rule owner (AWS or customer), the rule identifier, and the events that trigger the evaluation of your AWS resources.
		 * Required
		 */
		Source: Source;
		InputParameters?: string | null;
		MaximumExecutionFrequency?: SourceDetailMaximumExecutionFrequency | null;
		ConfigRuleState?: ConfigRuleConfigRuleState | null;
		CreatedBy?: string | null;
	}

	/** <p>An AWS Config rule represents an AWS Lambda function that you create for a custom rule or a predefined function for an AWS managed rule. The function evaluates configuration items to assess whether your AWS resources comply with your desired configurations. This function can run when AWS Config detects a configuration change to an AWS resource and at a periodic frequency that you choose (for example, every 24 hours).</p> <note> <p>You can use the AWS CLI and AWS SDKs if you want to create a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note> <p>For more information about developing and using AWS Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating AWS Resource Configurations with AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p> */
	export interface ConfigRuleFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		ConfigRuleArn: FormControl<string | null | undefined>,
		ConfigRuleId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		InputParameters: FormControl<string | null | undefined>,
		MaximumExecutionFrequency: FormControl<SourceDetailMaximumExecutionFrequency | null | undefined>,
		ConfigRuleState: FormControl<ConfigRuleConfigRuleState | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
	}
	export function CreateConfigRuleFormGroup() {
		return new FormGroup<ConfigRuleFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			ConfigRuleArn: new FormControl<string | null | undefined>(undefined),
			ConfigRuleId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			InputParameters: new FormControl<string | null | undefined>(undefined),
			MaximumExecutionFrequency: new FormControl<SourceDetailMaximumExecutionFrequency | null | undefined>(undefined),
			ConfigRuleState: new FormControl<ConfigRuleConfigRuleState | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines which resources trigger an evaluation for an AWS Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration. */
	export interface Scope {
		ComplianceResourceTypes?: Array<string>;
		TagKey?: string | null;
		TagValue?: string | null;
		ComplianceResourceId?: string | null;
	}

	/** Defines which resources trigger an evaluation for an AWS Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration. */
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


	/** Provides the AWS Config rule owner (AWS or customer), the rule identifier, and the events that trigger the evaluation of your AWS resources. */
	export interface Source {
		Owner: SourceOwner;
		SourceIdentifier: string;
		SourceDetails?: Array<SourceDetail>;
	}

	/** Provides the AWS Config rule owner (AWS or customer), the rule identifier, and the events that trigger the evaluation of your AWS resources. */
	export interface SourceFormProperties {
		Owner: FormControl<SourceOwner | null | undefined>,
		SourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			Owner: new FormControl<SourceOwner | null | undefined>(undefined),
			SourceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SourceOwner { CUSTOM_LAMBDA = 0, AWS = 1 }


	/** Provides the source and the message types that trigger AWS Config to evaluate your AWS resources against a rule. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. You can specify the parameter values for <code>SourceDetail</code> only for custom rules.  */
	export interface SourceDetail {
		EventSource?: SourceDetailEventSource | null;
		MessageType?: SourceDetailMessageType | null;
		MaximumExecutionFrequency?: SourceDetailMaximumExecutionFrequency | null;
	}

	/** Provides the source and the message types that trigger AWS Config to evaluate your AWS resources against a rule. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. You can specify the parameter values for <code>SourceDetail</code> only for custom rules.  */
	export interface SourceDetailFormProperties {
		EventSource: FormControl<SourceDetailEventSource | null | undefined>,
		MessageType: FormControl<SourceDetailMessageType | null | undefined>,
		MaximumExecutionFrequency: FormControl<SourceDetailMaximumExecutionFrequency | null | undefined>,
	}
	export function CreateSourceDetailFormGroup() {
		return new FormGroup<SourceDetailFormProperties>({
			EventSource: new FormControl<SourceDetailEventSource | null | undefined>(undefined),
			MessageType: new FormControl<SourceDetailMessageType | null | undefined>(undefined),
			MaximumExecutionFrequency: new FormControl<SourceDetailMaximumExecutionFrequency | null | undefined>(undefined),
		});

	}

	export enum SourceDetailEventSource { aws_config = 0 }

	export enum SourceDetailMessageType { ConfigurationItemChangeNotification = 0, ConfigurationSnapshotDeliveryCompleted = 1, ScheduledNotification = 2, OversizedConfigurationItemChangeNotification = 3 }

	export enum SourceDetailMaximumExecutionFrequency { One_Hour = 0, Three_Hours = 1, Six_Hours = 2, Twelve_Hours = 3, TwentyFour_Hours = 4 }

	export enum ConfigRuleConfigRuleState { ACTIVE = 0, DELETING = 1, DELETING_RESULTS = 2, EVALUATING = 3 }


	/** <p/> */
	export interface DescribeConfigRulesRequest {
		ConfigRuleNames?: Array<string>;
		NextToken?: string | null;
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

	export interface DescribeConfigurationAggregatorSourcesStatusResponse {
		AggregatedSourceStatusList?: Array<AggregatedSourceStatus>;
		NextToken?: string | null;
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
		SourceId?: string | null;
		SourceType?: AggregatedSourceStatusSourceType | null;
		AwsRegion?: string | null;
		LastUpdateStatus?: AggregatedSourceStatusLastUpdateStatus | null;
		LastUpdateTime?: Date | null;
		LastErrorCode?: string | null;
		LastErrorMessage?: string | null;
	}

	/** The current sync status between the source and the aggregator account. */
	export interface AggregatedSourceStatusFormProperties {
		SourceId: FormControl<string | null | undefined>,
		SourceType: FormControl<AggregatedSourceStatusSourceType | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
		LastUpdateStatus: FormControl<AggregatedSourceStatusLastUpdateStatus | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
		LastErrorCode: FormControl<string | null | undefined>,
		LastErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateAggregatedSourceStatusFormGroup() {
		return new FormGroup<AggregatedSourceStatusFormProperties>({
			SourceId: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<AggregatedSourceStatusSourceType | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
			LastUpdateStatus: new FormControl<AggregatedSourceStatusLastUpdateStatus | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			LastErrorCode: new FormControl<string | null | undefined>(undefined),
			LastErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AggregatedSourceStatusSourceType { ACCOUNT = 0, ORGANIZATION = 1 }

	export enum AggregatedSourceStatusLastUpdateStatus { FAILED = 0, SUCCEEDED = 1, OUTDATED = 2 }

	export interface DescribeConfigurationAggregatorSourcesStatusRequest {
		ConfigurationAggregatorName: string;
		UpdateStatus?: Array<AggregatedSourceStatusType>;
		NextToken?: string | null;
		Limit?: number | null;
	}
	export interface DescribeConfigurationAggregatorSourcesStatusRequestFormProperties {
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeConfigurationAggregatorSourcesStatusRequestFormGroup() {
		return new FormGroup<DescribeConfigurationAggregatorSourcesStatusRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AggregatedSourceStatusType { FAILED = 0, SUCCEEDED = 1, OUTDATED = 2 }

	export interface DescribeConfigurationAggregatorsResponse {
		ConfigurationAggregators?: Array<ConfigurationAggregator>;
		NextToken?: string | null;
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
		ConfigurationAggregatorName?: string | null;
		ConfigurationAggregatorArn?: string | null;
		AccountAggregationSources?: Array<AccountAggregationSource>;

		/** This object contains regions to set up the aggregator and an IAM role to retrieve organization details. */
		OrganizationAggregationSource?: OrganizationAggregationSource;
		CreationTime?: Date | null;
		LastUpdatedTime?: Date | null;
	}

	/** The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator.  */
	export interface ConfigurationAggregatorFormProperties {
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
		ConfigurationAggregatorArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateConfigurationAggregatorFormGroup() {
		return new FormGroup<ConfigurationAggregatorFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined),
			ConfigurationAggregatorArn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A collection of accounts and regions. */
	export interface AccountAggregationSource {
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
		RoleArn: string;
		AwsRegions?: Array<string>;
		AllAwsRegions?: boolean | null;
	}

	/** This object contains regions to set up the aggregator and an IAM role to retrieve organization details. */
	export interface OrganizationAggregationSourceFormProperties {
		RoleArn: FormControl<string | null | undefined>,
		AllAwsRegions: FormControl<boolean | null | undefined>,
	}
	export function CreateOrganizationAggregationSourceFormGroup() {
		return new FormGroup<OrganizationAggregationSourceFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined),
			AllAwsRegions: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeConfigurationAggregatorsRequest {
		ConfigurationAggregatorNames?: Array<string>;
		NextToken?: string | null;
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


	/** The current status of the configuration recorder. */
	export interface ConfigurationRecorderStatus {
		name?: string | null;
		lastStartTime?: Date | null;
		lastStopTime?: Date | null;
		recording?: boolean | null;
		lastStatus?: ConfigurationRecorderStatusLastStatus | null;
		lastErrorCode?: string | null;
		lastErrorMessage?: string | null;
		lastStatusChangeTime?: Date | null;
	}

	/** The current status of the configuration recorder. */
	export interface ConfigurationRecorderStatusFormProperties {
		name: FormControl<string | null | undefined>,
		lastStartTime: FormControl<Date | null | undefined>,
		lastStopTime: FormControl<Date | null | undefined>,
		recording: FormControl<boolean | null | undefined>,
		lastStatus: FormControl<ConfigurationRecorderStatusLastStatus | null | undefined>,
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
			lastStatus: new FormControl<ConfigurationRecorderStatusLastStatus | null | undefined>(undefined),
			lastErrorCode: new FormControl<string | null | undefined>(undefined),
			lastErrorMessage: new FormControl<string | null | undefined>(undefined),
			lastStatusChangeTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ConfigurationRecorderStatusLastStatus { Pending = 0, Success = 1, Failure = 2 }


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


	/** An object that represents the recording of configuration changes of an AWS resource. */
	export interface ConfigurationRecorder {
		name?: string | null;
		roleARN?: string | null;

		/** <p>Specifies the types of AWS resource for which AWS Config records configuration changes.</p> <p>In the recording group, you specify whether all supported types or specific types of resources are recorded.</p> <p>By default, AWS Config records configuration changes for all supported types of regional resources that AWS Config discovers in the region in which it is running. Regional resources are tied to a region and can be used only in that region. Examples of regional resources are EC2 instances and EBS volumes.</p> <p>You can also have AWS Config record configuration changes for supported types of global resources (for example, IAM resources). Global resources are not tied to an individual region and can be used in all regions.</p> <important> <p>The configuration details for any global resource are the same in all regions. If you customize AWS Config in multiple regions to record global resources, it will create multiple configuration items each time a global resource changes: one configuration item for each region. These configuration items will contain identical data. To prevent duplicate configuration items, you should consider customizing AWS Config in only one region to record global resources, unless you want the configuration items to be available in multiple regions.</p> </important> <p>If you don't want AWS Config to record all resources, you can specify which types of resources it will record with the <code>resourceTypes</code> parameter.</p> <p>For a list of supported resource types, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Resource Types</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html">Selecting Which Resources AWS Config Records</a>.</p> */
		recordingGroup?: RecordingGroup;
	}

	/** An object that represents the recording of configuration changes of an AWS resource. */
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


	/** <p>Specifies the types of AWS resource for which AWS Config records configuration changes.</p> <p>In the recording group, you specify whether all supported types or specific types of resources are recorded.</p> <p>By default, AWS Config records configuration changes for all supported types of regional resources that AWS Config discovers in the region in which it is running. Regional resources are tied to a region and can be used only in that region. Examples of regional resources are EC2 instances and EBS volumes.</p> <p>You can also have AWS Config record configuration changes for supported types of global resources (for example, IAM resources). Global resources are not tied to an individual region and can be used in all regions.</p> <important> <p>The configuration details for any global resource are the same in all regions. If you customize AWS Config in multiple regions to record global resources, it will create multiple configuration items each time a global resource changes: one configuration item for each region. These configuration items will contain identical data. To prevent duplicate configuration items, you should consider customizing AWS Config in only one region to record global resources, unless you want the configuration items to be available in multiple regions.</p> </important> <p>If you don't want AWS Config to record all resources, you can specify which types of resources it will record with the <code>resourceTypes</code> parameter.</p> <p>For a list of supported resource types, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Resource Types</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html">Selecting Which Resources AWS Config Records</a>.</p> */
	export interface RecordingGroup {
		allSupported?: boolean | null;
		includeGlobalResourceTypes?: boolean | null;
		resourceTypes?: Array<ResourceType>;
	}

	/** <p>Specifies the types of AWS resource for which AWS Config records configuration changes.</p> <p>In the recording group, you specify whether all supported types or specific types of resources are recorded.</p> <p>By default, AWS Config records configuration changes for all supported types of regional resources that AWS Config discovers in the region in which it is running. Regional resources are tied to a region and can be used only in that region. Examples of regional resources are EC2 instances and EBS volumes.</p> <p>You can also have AWS Config record configuration changes for supported types of global resources (for example, IAM resources). Global resources are not tied to an individual region and can be used in all regions.</p> <important> <p>The configuration details for any global resource are the same in all regions. If you customize AWS Config in multiple regions to record global resources, it will create multiple configuration items each time a global resource changes: one configuration item for each region. These configuration items will contain identical data. To prevent duplicate configuration items, you should consider customizing AWS Config in only one region to record global resources, unless you want the configuration items to be available in multiple regions.</p> </important> <p>If you don't want AWS Config to record all resources, you can specify which types of resources it will record with the <code>resourceTypes</code> parameter.</p> <p>For a list of supported resource types, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Resource Types</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html">Selecting Which Resources AWS Config Records</a>.</p> */
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

	export enum ResourceType { AWSEC2CustomerGateway = 0, AWSEC2EIP = 1, AWSEC2Host = 2, AWSEC2Instance = 3, AWSEC2InternetGateway = 4, AWSEC2NetworkAcl = 5, AWSEC2NetworkInterface = 6, AWSEC2RouteTable = 7, AWSEC2SecurityGroup = 8, AWSEC2Subnet = 9, AWSCloudTrailTrail = 10, AWSEC2Volume = 11, AWSEC2VPC = 12, AWSEC2VPNConnection = 13, AWSEC2VPNGateway = 14, AWSEC2RegisteredHAInstance = 15, AWSEC2NatGateway = 16, AWSEC2EgressOnlyInternetGateway = 17, AWSEC2VPCEndpoint = 18, AWSEC2VPCEndpointService = 19, AWSEC2FlowLog = 20, AWSEC2VPCPeeringConnection = 21, AWSElasticsearchDomain = 22, AWSIAMGroup = 23, AWSIAMPolicy = 24, AWSIAMRole = 25, AWSIAMUser = 26, AWSElasticLoadBalancingV2LoadBalancer = 27, AWSACMCertificate = 28, AWSRDSDBInstance = 29, AWSRDSDBSubnetGroup = 30, AWSRDSDBSecurityGroup = 31, AWSRDSDBSnapshot = 32, AWSRDSDBCluster = 33, AWSRDSDBClusterSnapshot = 34, AWSRDSEventSubscription = 35, AWSS3Bucket = 36, AWSS3AccountPublicAccessBlock = 37, AWSRedshiftCluster = 38, AWSRedshiftClusterSnapshot = 39, AWSRedshiftClusterParameterGroup = 40, AWSRedshiftClusterSecurityGroup = 41, AWSRedshiftClusterSubnetGroup = 42, AWSRedshiftEventSubscription = 43, AWSSSMManagedInstanceInventory = 44, AWSCloudWatchAlarm = 45, AWSCloudFormationStack = 46, AWSElasticLoadBalancingLoadBalancer = 47, AWSAutoScalingAutoScalingGroup = 48, AWSAutoScalingLaunchConfiguration = 49, AWSAutoScalingScalingPolicy = 50, AWSAutoScalingScheduledAction = 51, AWSDynamoDBTable = 52, AWSCodeBuildProject = 53, AWSWAFRateBasedRule = 54, AWSWAFRule = 55, AWSWAFRuleGroup = 56, AWSWAFWebACL = 57, AWSWAFRegionalRateBasedRule = 58, AWSWAFRegionalRule = 59, AWSWAFRegionalRuleGroup = 60, AWSWAFRegionalWebACL = 61, AWSCloudFrontDistribution = 62, AWSCloudFrontStreamingDistribution = 63, AWSLambdaFunction = 64, AWSElasticBeanstalkApplication = 65, AWSElasticBeanstalkApplicationVersion = 66, AWSElasticBeanstalkEnvironment = 67, AWSWAFv2WebACL = 68, AWSWAFv2RuleGroup = 69, AWSWAFv2IPSet = 70, AWSWAFv2RegexPatternSet = 71, AWSWAFv2ManagedRuleSet = 72, AWSXRayEncryptionConfig = 73, AWSSSMAssociationCompliance = 74, AWSSSMPatchCompliance = 75, AWSShieldProtection = 76, AWSShieldRegionalProtection = 77, AWSConfigResourceCompliance = 78, AWSApiGatewayStage = 79, AWSApiGatewayRestApi = 80, AWSApiGatewayV2Stage = 81, AWSApiGatewayV2Api = 82, AWSCodePipelinePipeline = 83, AWSServiceCatalogCloudFormationProvisionedProduct = 84, AWSServiceCatalogCloudFormationProduct = 85, AWSServiceCatalogPortfolio = 86, AWSSQSQueue = 87, AWSKMSKey = 88, AWSQLDBLedger = 89 }


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
		ConformancePackName: string;
		ConformancePackRuleComplianceList: Array<ConformancePackRuleCompliance>;
		NextToken?: string | null;
	}
	export interface DescribeConformancePackComplianceResponseFormProperties {
		ConformancePackName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConformancePackComplianceResponseFormGroup() {
		return new FormGroup<DescribeConformancePackComplianceResponseFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Compliance information of one or more AWS Config rules within a conformance pack. You can filter using AWS Config rule names and compliance types. */
	export interface ConformancePackRuleCompliance {
		ConfigRuleName?: string | null;
		ComplianceType?: ConformancePackRuleComplianceComplianceType | null;
	}

	/** Compliance information of one or more AWS Config rules within a conformance pack. You can filter using AWS Config rule names and compliance types. */
	export interface ConformancePackRuleComplianceFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		ComplianceType: FormControl<ConformancePackRuleComplianceComplianceType | null | undefined>,
	}
	export function CreateConformancePackRuleComplianceFormGroup() {
		return new FormGroup<ConformancePackRuleComplianceFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			ComplianceType: new FormControl<ConformancePackRuleComplianceComplianceType | null | undefined>(undefined),
		});

	}

	export enum ConformancePackRuleComplianceComplianceType { COMPLIANT = 0, NON_COMPLIANT = 1 }

	export interface DescribeConformancePackComplianceRequest {
		ConformancePackName: string;

		/** Filters the conformance pack by compliance types and AWS Config rule names. */
		Filters?: ConformancePackComplianceFilters;
		Limit?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeConformancePackComplianceRequestFormProperties {
		ConformancePackName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConformancePackComplianceRequestFormGroup() {
		return new FormGroup<DescribeConformancePackComplianceRequestFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters the conformance pack by compliance types and AWS Config rule names. */
	export interface ConformancePackComplianceFilters {
		ConfigRuleNames?: Array<string>;
		ComplianceType?: ConformancePackRuleComplianceComplianceType | null;
	}

	/** Filters the conformance pack by compliance types and AWS Config rule names. */
	export interface ConformancePackComplianceFiltersFormProperties {
		ComplianceType: FormControl<ConformancePackRuleComplianceComplianceType | null | undefined>,
	}
	export function CreateConformancePackComplianceFiltersFormGroup() {
		return new FormGroup<ConformancePackComplianceFiltersFormProperties>({
			ComplianceType: new FormControl<ConformancePackRuleComplianceComplianceType | null | undefined>(undefined),
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
		NextToken?: string | null;
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
		ConformancePackName: string;
		ConformancePackId: string;
		ConformancePackArn: string;
		ConformancePackState: ConformancePackStatusDetailConformancePackState;
		StackArn: string;
		ConformancePackStatusReason?: string | null;
		LastUpdateRequestedTime: Date;
		LastUpdateCompletedTime?: Date | null;
	}

	/** Status details of a conformance pack. */
	export interface ConformancePackStatusDetailFormProperties {
		ConformancePackName: FormControl<string | null | undefined>,
		ConformancePackId: FormControl<string | null | undefined>,
		ConformancePackArn: FormControl<string | null | undefined>,
		ConformancePackState: FormControl<ConformancePackStatusDetailConformancePackState | null | undefined>,
		StackArn: FormControl<string | null | undefined>,
		ConformancePackStatusReason: FormControl<string | null | undefined>,
		LastUpdateRequestedTime: FormControl<Date | null | undefined>,
		LastUpdateCompletedTime: FormControl<Date | null | undefined>,
	}
	export function CreateConformancePackStatusDetailFormGroup() {
		return new FormGroup<ConformancePackStatusDetailFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined),
			ConformancePackId: new FormControl<string | null | undefined>(undefined),
			ConformancePackArn: new FormControl<string | null | undefined>(undefined),
			ConformancePackState: new FormControl<ConformancePackStatusDetailConformancePackState | null | undefined>(undefined),
			StackArn: new FormControl<string | null | undefined>(undefined),
			ConformancePackStatusReason: new FormControl<string | null | undefined>(undefined),
			LastUpdateRequestedTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdateCompletedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ConformancePackStatusDetailConformancePackState { CREATE_IN_PROGRESS = 0, CREATE_COMPLETE = 1, CREATE_FAILED = 2, DELETE_IN_PROGRESS = 3, DELETE_FAILED = 4 }

	export interface DescribeConformancePackStatusRequest {
		ConformancePackNames?: Array<string>;
		Limit?: number | null;
		NextToken?: string | null;
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
		NextToken?: string | null;
	}
	export interface DescribeConformancePacksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConformancePacksResponseFormGroup() {
		return new FormGroup<DescribeConformancePacksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns details of a conformance pack. A conformance pack is a collection of AWS Config rules and remediation actions that can be easily deployed in an account and a region. */
	export interface ConformancePackDetail {
		ConformancePackName: string;
		ConformancePackArn: string;
		ConformancePackId: string;
		DeliveryS3Bucket: string;
		DeliveryS3KeyPrefix?: string | null;
		ConformancePackInputParameters?: Array<ConformancePackInputParameter>;
		LastUpdateRequestedTime?: Date | null;
		CreatedBy?: string | null;
	}

	/** Returns details of a conformance pack. A conformance pack is a collection of AWS Config rules and remediation actions that can be easily deployed in an account and a region. */
	export interface ConformancePackDetailFormProperties {
		ConformancePackName: FormControl<string | null | undefined>,
		ConformancePackArn: FormControl<string | null | undefined>,
		ConformancePackId: FormControl<string | null | undefined>,
		DeliveryS3Bucket: FormControl<string | null | undefined>,
		DeliveryS3KeyPrefix: FormControl<string | null | undefined>,
		LastUpdateRequestedTime: FormControl<Date | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
	}
	export function CreateConformancePackDetailFormGroup() {
		return new FormGroup<ConformancePackDetailFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined),
			ConformancePackArn: new FormControl<string | null | undefined>(undefined),
			ConformancePackId: new FormControl<string | null | undefined>(undefined),
			DeliveryS3Bucket: new FormControl<string | null | undefined>(undefined),
			DeliveryS3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			LastUpdateRequestedTime: new FormControl<Date | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input parameters in the form of key-value pairs for the conformance pack, both of which you define. Keys can have a maximum character length of 128 characters, and values can have a maximum length of 256 characters. */
	export interface ConformancePackInputParameter {
		ParameterName: string;
		ParameterValue: string;
	}

	/** Input parameters in the form of key-value pairs for the conformance pack, both of which you define. Keys can have a maximum character length of 128 characters, and values can have a maximum length of 256 characters. */
	export interface ConformancePackInputParameterFormProperties {
		ParameterName: FormControl<string | null | undefined>,
		ParameterValue: FormControl<string | null | undefined>,
	}
	export function CreateConformancePackInputParameterFormGroup() {
		return new FormGroup<ConformancePackInputParameterFormProperties>({
			ParameterName: new FormControl<string | null | undefined>(undefined),
			ParameterValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConformancePacksRequest {
		ConformancePackNames?: Array<string>;
		Limit?: number | null;
		NextToken?: string | null;
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
		name?: string | null;

		/** Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic. */
		configSnapshotDeliveryInfo?: ConfigExportDeliveryInfo;

		/** Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic. */
		configHistoryDeliveryInfo?: ConfigExportDeliveryInfo;

		/** A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic. */
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
		lastStatus?: ConfigExportDeliveryInfoLastStatus | null;
		lastErrorCode?: string | null;
		lastErrorMessage?: string | null;
		lastAttemptTime?: Date | null;
		lastSuccessfulTime?: Date | null;
		nextDeliveryTime?: Date | null;
	}

	/** Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic. */
	export interface ConfigExportDeliveryInfoFormProperties {
		lastStatus: FormControl<ConfigExportDeliveryInfoLastStatus | null | undefined>,
		lastErrorCode: FormControl<string | null | undefined>,
		lastErrorMessage: FormControl<string | null | undefined>,
		lastAttemptTime: FormControl<Date | null | undefined>,
		lastSuccessfulTime: FormControl<Date | null | undefined>,
		nextDeliveryTime: FormControl<Date | null | undefined>,
	}
	export function CreateConfigExportDeliveryInfoFormGroup() {
		return new FormGroup<ConfigExportDeliveryInfoFormProperties>({
			lastStatus: new FormControl<ConfigExportDeliveryInfoLastStatus | null | undefined>(undefined),
			lastErrorCode: new FormControl<string | null | undefined>(undefined),
			lastErrorMessage: new FormControl<string | null | undefined>(undefined),
			lastAttemptTime: new FormControl<Date | null | undefined>(undefined),
			lastSuccessfulTime: new FormControl<Date | null | undefined>(undefined),
			nextDeliveryTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ConfigExportDeliveryInfoLastStatus { Success = 0, Failure = 1, Not_Applicable = 2 }


	/** A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic. */
	export interface ConfigStreamDeliveryInfo {
		lastStatus?: ConfigExportDeliveryInfoLastStatus | null;
		lastErrorCode?: string | null;
		lastErrorMessage?: string | null;
		lastStatusChangeTime?: Date | null;
	}

	/** A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic. */
	export interface ConfigStreamDeliveryInfoFormProperties {
		lastStatus: FormControl<ConfigExportDeliveryInfoLastStatus | null | undefined>,
		lastErrorCode: FormControl<string | null | undefined>,
		lastErrorMessage: FormControl<string | null | undefined>,
		lastStatusChangeTime: FormControl<Date | null | undefined>,
	}
	export function CreateConfigStreamDeliveryInfoFormGroup() {
		return new FormGroup<ConfigStreamDeliveryInfoFormProperties>({
			lastStatus: new FormControl<ConfigExportDeliveryInfoLastStatus | null | undefined>(undefined),
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


	/** The channel through which AWS Config delivers notifications and updated configuration states. */
	export interface DeliveryChannel {
		name?: string | null;
		s3BucketName?: string | null;
		s3KeyPrefix?: string | null;
		snsTopicARN?: string | null;

		/** <p>Provides options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket in your delivery channel.</p> <p>The frequency for a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot is set by one of two values, depending on which is less frequent:</p> <ul> <li> <p>The value for the <code>deliveryFrequency</code> parameter within the delivery channel configuration, which sets how often AWS Config delivers configuration snapshots. This value also sets how often AWS Config invokes evaluations for AWS Config rules.</p> </li> <li> <p>The value for the <code>MaximumExecutionFrequency</code> parameter, which sets the maximum frequency with which AWS Config invokes evaluations for the rule. For more information, see <a>ConfigRule</a>.</p> </li> </ul> <p>If the <code>deliveryFrequency</code> value is less frequent than the <code>MaximumExecutionFrequency</code> value for a rule, AWS Config invokes the rule only as often as the <code>deliveryFrequency</code> value.</p> <ol> <li> <p>For example, you want your rule to run evaluations when AWS Config delivers the configuration snapshot.</p> </li> <li> <p>You specify the <code>MaximumExecutionFrequency</code> value for <code>Six_Hours</code>. </p> </li> <li> <p>You then specify the delivery channel <code>deliveryFrequency</code> value for <code>TwentyFour_Hours</code>.</p> </li> <li> <p>Because the value for <code>deliveryFrequency</code> is less frequent than <code>MaximumExecutionFrequency</code>, AWS Config invokes evaluations for the rule every 24 hours. </p> </li> </ol> <p>You should set the <code>MaximumExecutionFrequency</code> value to be at least as frequent as the <code>deliveryFrequency</code> value. You can view the <code>deliveryFrequency</code> value by using the <code>DescribeDeliveryChannnels</code> action.</p> <p>To update the <code>deliveryFrequency</code> with which AWS Config delivers your configuration snapshots, use the <code>PutDeliveryChannel</code> action.</p> */
		configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties;
	}

	/** The channel through which AWS Config delivers notifications and updated configuration states. */
	export interface DeliveryChannelFormProperties {
		name: FormControl<string | null | undefined>,
		s3BucketName: FormControl<string | null | undefined>,
		s3KeyPrefix: FormControl<string | null | undefined>,
		snsTopicARN: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryChannelFormGroup() {
		return new FormGroup<DeliveryChannelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			s3BucketName: new FormControl<string | null | undefined>(undefined),
			s3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			snsTopicARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket in your delivery channel.</p> <p>The frequency for a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot is set by one of two values, depending on which is less frequent:</p> <ul> <li> <p>The value for the <code>deliveryFrequency</code> parameter within the delivery channel configuration, which sets how often AWS Config delivers configuration snapshots. This value also sets how often AWS Config invokes evaluations for AWS Config rules.</p> </li> <li> <p>The value for the <code>MaximumExecutionFrequency</code> parameter, which sets the maximum frequency with which AWS Config invokes evaluations for the rule. For more information, see <a>ConfigRule</a>.</p> </li> </ul> <p>If the <code>deliveryFrequency</code> value is less frequent than the <code>MaximumExecutionFrequency</code> value for a rule, AWS Config invokes the rule only as often as the <code>deliveryFrequency</code> value.</p> <ol> <li> <p>For example, you want your rule to run evaluations when AWS Config delivers the configuration snapshot.</p> </li> <li> <p>You specify the <code>MaximumExecutionFrequency</code> value for <code>Six_Hours</code>. </p> </li> <li> <p>You then specify the delivery channel <code>deliveryFrequency</code> value for <code>TwentyFour_Hours</code>.</p> </li> <li> <p>Because the value for <code>deliveryFrequency</code> is less frequent than <code>MaximumExecutionFrequency</code>, AWS Config invokes evaluations for the rule every 24 hours. </p> </li> </ol> <p>You should set the <code>MaximumExecutionFrequency</code> value to be at least as frequent as the <code>deliveryFrequency</code> value. You can view the <code>deliveryFrequency</code> value by using the <code>DescribeDeliveryChannnels</code> action.</p> <p>To update the <code>deliveryFrequency</code> with which AWS Config delivers your configuration snapshots, use the <code>PutDeliveryChannel</code> action.</p> */
	export interface ConfigSnapshotDeliveryProperties {
		deliveryFrequency?: SourceDetailMaximumExecutionFrequency | null;
	}

	/** <p>Provides options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket in your delivery channel.</p> <p>The frequency for a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot is set by one of two values, depending on which is less frequent:</p> <ul> <li> <p>The value for the <code>deliveryFrequency</code> parameter within the delivery channel configuration, which sets how often AWS Config delivers configuration snapshots. This value also sets how often AWS Config invokes evaluations for AWS Config rules.</p> </li> <li> <p>The value for the <code>MaximumExecutionFrequency</code> parameter, which sets the maximum frequency with which AWS Config invokes evaluations for the rule. For more information, see <a>ConfigRule</a>.</p> </li> </ul> <p>If the <code>deliveryFrequency</code> value is less frequent than the <code>MaximumExecutionFrequency</code> value for a rule, AWS Config invokes the rule only as often as the <code>deliveryFrequency</code> value.</p> <ol> <li> <p>For example, you want your rule to run evaluations when AWS Config delivers the configuration snapshot.</p> </li> <li> <p>You specify the <code>MaximumExecutionFrequency</code> value for <code>Six_Hours</code>. </p> </li> <li> <p>You then specify the delivery channel <code>deliveryFrequency</code> value for <code>TwentyFour_Hours</code>.</p> </li> <li> <p>Because the value for <code>deliveryFrequency</code> is less frequent than <code>MaximumExecutionFrequency</code>, AWS Config invokes evaluations for the rule every 24 hours. </p> </li> </ol> <p>You should set the <code>MaximumExecutionFrequency</code> value to be at least as frequent as the <code>deliveryFrequency</code> value. You can view the <code>deliveryFrequency</code> value by using the <code>DescribeDeliveryChannnels</code> action.</p> <p>To update the <code>deliveryFrequency</code> with which AWS Config delivers your configuration snapshots, use the <code>PutDeliveryChannel</code> action.</p> */
	export interface ConfigSnapshotDeliveryPropertiesFormProperties {
		deliveryFrequency: FormControl<SourceDetailMaximumExecutionFrequency | null | undefined>,
	}
	export function CreateConfigSnapshotDeliveryPropertiesFormGroup() {
		return new FormGroup<ConfigSnapshotDeliveryPropertiesFormProperties>({
			deliveryFrequency: new FormControl<SourceDetailMaximumExecutionFrequency | null | undefined>(undefined),
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
		NextToken?: string | null;
	}
	export interface DescribeOrganizationConfigRuleStatusesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationConfigRuleStatusesResponseFormGroup() {
		return new FormGroup<DescribeOrganizationConfigRuleStatusesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns the status for an organization config rule in an organization. */
	export interface OrganizationConfigRuleStatus {
		OrganizationConfigRuleName: string;
		OrganizationRuleStatus: OrganizationConfigRuleStatusOrganizationRuleStatus;
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
		LastUpdateTime?: Date | null;
	}

	/** Returns the status for an organization config rule in an organization. */
	export interface OrganizationConfigRuleStatusFormProperties {
		OrganizationConfigRuleName: FormControl<string | null | undefined>,
		OrganizationRuleStatus: FormControl<OrganizationConfigRuleStatusOrganizationRuleStatus | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOrganizationConfigRuleStatusFormGroup() {
		return new FormGroup<OrganizationConfigRuleStatusFormProperties>({
			OrganizationConfigRuleName: new FormControl<string | null | undefined>(undefined),
			OrganizationRuleStatus: new FormControl<OrganizationConfigRuleStatusOrganizationRuleStatus | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OrganizationConfigRuleStatusOrganizationRuleStatus { CREATE_SUCCESSFUL = 0, CREATE_IN_PROGRESS = 1, CREATE_FAILED = 2, DELETE_SUCCESSFUL = 3, DELETE_FAILED = 4, DELETE_IN_PROGRESS = 5, UPDATE_SUCCESSFUL = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8 }

	export interface DescribeOrganizationConfigRuleStatusesRequest {
		OrganizationConfigRuleNames?: Array<string>;
		Limit?: number | null;
		NextToken?: string | null;
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
		NextToken?: string | null;
	}
	export interface DescribeOrganizationConfigRulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationConfigRulesResponseFormGroup() {
		return new FormGroup<DescribeOrganizationConfigRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An organization config rule that has information about config rules that AWS Config creates in member accounts. */
	export interface OrganizationConfigRule {
		OrganizationConfigRuleName: string;
		OrganizationConfigRuleArn: string;

		/** An object that specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. */
		OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;

		/** An object that specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lamdba function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. */
		OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;
		ExcludedAccounts?: Array<string>;
		LastUpdateTime?: Date | null;
	}

	/** An organization config rule that has information about config rules that AWS Config creates in member accounts. */
	export interface OrganizationConfigRuleFormProperties {
		OrganizationConfigRuleName: FormControl<string | null | undefined>,
		OrganizationConfigRuleArn: FormControl<string | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOrganizationConfigRuleFormGroup() {
		return new FormGroup<OrganizationConfigRuleFormProperties>({
			OrganizationConfigRuleName: new FormControl<string | null | undefined>(undefined),
			OrganizationConfigRuleArn: new FormControl<string | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An object that specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. */
	export interface OrganizationManagedRuleMetadata {
		Description?: string | null;
		RuleIdentifier: string;
		InputParameters?: string | null;
		MaximumExecutionFrequency?: SourceDetailMaximumExecutionFrequency | null;
		ResourceTypesScope?: Array<string>;
		ResourceIdScope?: string | null;
		TagKeyScope?: string | null;
		TagValueScope?: string | null;
	}

	/** An object that specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. */
	export interface OrganizationManagedRuleMetadataFormProperties {
		Description: FormControl<string | null | undefined>,
		RuleIdentifier: FormControl<string | null | undefined>,
		InputParameters: FormControl<string | null | undefined>,
		MaximumExecutionFrequency: FormControl<SourceDetailMaximumExecutionFrequency | null | undefined>,
		ResourceIdScope: FormControl<string | null | undefined>,
		TagKeyScope: FormControl<string | null | undefined>,
		TagValueScope: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationManagedRuleMetadataFormGroup() {
		return new FormGroup<OrganizationManagedRuleMetadataFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			RuleIdentifier: new FormControl<string | null | undefined>(undefined),
			InputParameters: new FormControl<string | null | undefined>(undefined),
			MaximumExecutionFrequency: new FormControl<SourceDetailMaximumExecutionFrequency | null | undefined>(undefined),
			ResourceIdScope: new FormControl<string | null | undefined>(undefined),
			TagKeyScope: new FormControl<string | null | undefined>(undefined),
			TagValueScope: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lamdba function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. */
	export interface OrganizationCustomRuleMetadata {
		Description?: string | null;
		LambdaFunctionArn: string;
		OrganizationConfigRuleTriggerTypes: Array<OrganizationConfigRuleTriggerType>;
		InputParameters?: string | null;
		MaximumExecutionFrequency?: SourceDetailMaximumExecutionFrequency | null;
		ResourceTypesScope?: Array<string>;
		ResourceIdScope?: string | null;
		TagKeyScope?: string | null;
		TagValueScope?: string | null;
	}

	/** An object that specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lamdba function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. */
	export interface OrganizationCustomRuleMetadataFormProperties {
		Description: FormControl<string | null | undefined>,
		LambdaFunctionArn: FormControl<string | null | undefined>,
		InputParameters: FormControl<string | null | undefined>,
		MaximumExecutionFrequency: FormControl<SourceDetailMaximumExecutionFrequency | null | undefined>,
		ResourceIdScope: FormControl<string | null | undefined>,
		TagKeyScope: FormControl<string | null | undefined>,
		TagValueScope: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationCustomRuleMetadataFormGroup() {
		return new FormGroup<OrganizationCustomRuleMetadataFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			LambdaFunctionArn: new FormControl<string | null | undefined>(undefined),
			InputParameters: new FormControl<string | null | undefined>(undefined),
			MaximumExecutionFrequency: new FormControl<SourceDetailMaximumExecutionFrequency | null | undefined>(undefined),
			ResourceIdScope: new FormControl<string | null | undefined>(undefined),
			TagKeyScope: new FormControl<string | null | undefined>(undefined),
			TagValueScope: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrganizationConfigRuleTriggerType { ConfigurationItemChangeNotification = 0, OversizedConfigurationItemChangeNotification = 1, ScheduledNotification = 2 }

	export interface DescribeOrganizationConfigRulesRequest {
		OrganizationConfigRuleNames?: Array<string>;
		Limit?: number | null;
		NextToken?: string | null;
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
		NextToken?: string | null;
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
		OrganizationConformancePackName: string;
		Status: OrganizationConfigRuleStatusOrganizationRuleStatus;
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
		LastUpdateTime?: Date | null;
	}

	/** Returns the status for an organization conformance pack in an organization. */
	export interface OrganizationConformancePackStatusFormProperties {
		OrganizationConformancePackName: FormControl<string | null | undefined>,
		Status: FormControl<OrganizationConfigRuleStatusOrganizationRuleStatus | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOrganizationConformancePackStatusFormGroup() {
		return new FormGroup<OrganizationConformancePackStatusFormProperties>({
			OrganizationConformancePackName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<OrganizationConfigRuleStatusOrganizationRuleStatus | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeOrganizationConformancePackStatusesRequest {
		OrganizationConformancePackNames?: Array<string>;
		Limit?: number | null;
		NextToken?: string | null;
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
		NextToken?: string | null;
	}
	export interface DescribeOrganizationConformancePacksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationConformancePacksResponseFormGroup() {
		return new FormGroup<DescribeOrganizationConformancePacksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An organization conformance pack that has information about conformance packs that AWS Config creates in member accounts.  */
	export interface OrganizationConformancePack {
		OrganizationConformancePackName: string;
		OrganizationConformancePackArn: string;
		DeliveryS3Bucket: string;
		DeliveryS3KeyPrefix?: string | null;
		ConformancePackInputParameters?: Array<ConformancePackInputParameter>;
		ExcludedAccounts?: Array<string>;
		LastUpdateTime: Date;
	}

	/** An organization conformance pack that has information about conformance packs that AWS Config creates in member accounts.  */
	export interface OrganizationConformancePackFormProperties {
		OrganizationConformancePackName: FormControl<string | null | undefined>,
		OrganizationConformancePackArn: FormControl<string | null | undefined>,
		DeliveryS3Bucket: FormControl<string | null | undefined>,
		DeliveryS3KeyPrefix: FormControl<string | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOrganizationConformancePackFormGroup() {
		return new FormGroup<OrganizationConformancePackFormProperties>({
			OrganizationConformancePackName: new FormControl<string | null | undefined>(undefined),
			OrganizationConformancePackArn: new FormControl<string | null | undefined>(undefined),
			DeliveryS3Bucket: new FormControl<string | null | undefined>(undefined),
			DeliveryS3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeOrganizationConformancePacksRequest {
		OrganizationConformancePackNames?: Array<string>;
		Limit?: number | null;
		NextToken?: string | null;
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
		NextToken?: string | null;
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
		RequesterAccountId?: string | null;
		RequesterAwsRegion?: string | null;
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
		NextToken?: string | null;
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
		ConfigRuleName: string;
		TargetType: RemediationConfigurationTargetType;
		TargetId: string;
		TargetVersion?: string | null;
		Parameters?: RemediationParameters;
		ResourceType?: string | null;
		Automatic?: boolean | null;

		/** The controls that AWS Config uses for executing remediations. */
		ExecutionControls?: ExecutionControls;
		MaximumAutomaticAttempts?: number | null;
		RetryAttemptSeconds?: number | null;
		Arn?: string | null;
		CreatedByService?: string | null;
	}

	/** An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action. */
	export interface RemediationConfigurationFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		TargetType: FormControl<RemediationConfigurationTargetType | null | undefined>,
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
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			TargetType: new FormControl<RemediationConfigurationTargetType | null | undefined>(undefined),
			TargetId: new FormControl<string | null | undefined>(undefined),
			TargetVersion: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			Automatic: new FormControl<boolean | null | undefined>(undefined),
			MaximumAutomaticAttempts: new FormControl<number | null | undefined>(undefined),
			RetryAttemptSeconds: new FormControl<number | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedByService: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RemediationConfigurationTargetType { SSM_DOCUMENT = 0 }

	export interface RemediationParameters {
	}
	export interface RemediationParametersFormProperties {
	}
	export function CreateRemediationParametersFormGroup() {
		return new FormGroup<RemediationParametersFormProperties>({
		});

	}


	/** The controls that AWS Config uses for executing remediations. */
	export interface ExecutionControls {

		/** AWS Systems Manager (SSM) specific remediation controls. */
		SsmControls?: SsmControls;
	}

	/** The controls that AWS Config uses for executing remediations. */
	export interface ExecutionControlsFormProperties {
	}
	export function CreateExecutionControlsFormGroup() {
		return new FormGroup<ExecutionControlsFormProperties>({
		});

	}


	/** AWS Systems Manager (SSM) specific remediation controls. */
	export interface SsmControls {
		ConcurrentExecutionRatePercentage?: number | null;
		ErrorPercentage?: number | null;
	}

	/** AWS Systems Manager (SSM) specific remediation controls. */
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
		NextToken?: string | null;
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
		ConfigRuleName: string;
		ResourceType: string;
		ResourceId: string;
		Message?: string | null;
		ExpirationTime?: Date | null;
	}

	/** An object that represents the details about the remediation exception. The details include the rule name, an explanation of an exception, the time when the exception will be deleted, the resource ID, and resource type.  */
	export interface RemediationExceptionFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		ExpirationTime: FormControl<Date | null | undefined>,
	}
	export function CreateRemediationExceptionFormGroup() {
		return new FormGroup<RemediationExceptionFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			ExpirationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeRemediationExceptionsRequest {
		ConfigRuleName: string;
		ResourceKeys?: Array<RemediationExceptionResourceKey>;
		Limit?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeRemediationExceptionsRequestFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRemediationExceptionsRequestFormGroup() {
		return new FormGroup<DescribeRemediationExceptionsRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRemediationExecutionStatusResponse {
		RemediationExecutionStatuses?: Array<RemediationExecutionStatus>;
		NextToken?: string | null;
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

		/** The details that identify a resource within AWS Config, including the resource type and resource ID. */
		ResourceKey?: ResourceKey;
		State?: RemediationExecutionStatusState | null;
		StepDetails?: Array<RemediationExecutionStep>;
		InvocationTime?: Date | null;
		LastUpdatedTime?: Date | null;
	}

	/** Provides details of the current status of the invoked remediation action for that resource. */
	export interface RemediationExecutionStatusFormProperties {
		State: FormControl<RemediationExecutionStatusState | null | undefined>,
		InvocationTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateRemediationExecutionStatusFormGroup() {
		return new FormGroup<RemediationExecutionStatusFormProperties>({
			State: new FormControl<RemediationExecutionStatusState | null | undefined>(undefined),
			InvocationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RemediationExecutionStatusState { QUEUED = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3 }


	/** Name of the step from the SSM document. */
	export interface RemediationExecutionStep {
		Name?: string | null;
		State?: RemediationExecutionStepState | null;
		ErrorMessage?: string | null;
		StartTime?: Date | null;
		StopTime?: Date | null;
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

	export enum RemediationExecutionStepState { SUCCEEDED = 0, PENDING = 1, FAILED = 2 }

	export interface DescribeRemediationExecutionStatusRequest {
		ConfigRuleName: string;
		ResourceKeys?: Array<ResourceKey>;
		Limit?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeRemediationExecutionStatusRequestFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRemediationExecutionStatusRequestFormGroup() {
		return new FormGroup<DescribeRemediationExecutionStatusRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRetentionConfigurationsResponse {
		RetentionConfigurations?: Array<RetentionConfiguration>;
		NextToken?: string | null;
	}
	export interface DescribeRetentionConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRetentionConfigurationsResponseFormGroup() {
		return new FormGroup<DescribeRetentionConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in AWS Config. */
	export interface RetentionConfiguration {
		Name: string;
		RetentionPeriodInDays: number;
	}

	/** An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in AWS Config. */
	export interface RetentionConfigurationFormProperties {
		Name: FormControl<string | null | undefined>,
		RetentionPeriodInDays: FormControl<number | null | undefined>,
	}
	export function CreateRetentionConfigurationFormGroup() {
		return new FormGroup<RetentionConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			RetentionPeriodInDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeRetentionConfigurationsRequest {
		RetentionConfigurationNames?: Array<string>;
		NextToken?: string | null;
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
		NextToken?: string | null;
	}
	export interface GetAggregateComplianceDetailsByConfigRuleResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAggregateComplianceDetailsByConfigRuleResponseFormGroup() {
		return new FormGroup<GetAggregateComplianceDetailsByConfigRuleResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of an AWS Config evaluation for an account ID and region in an aggregator. Provides the AWS resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.  */
	export interface AggregateEvaluationResult {

		/** Uniquely identifies an evaluation result. */
		EvaluationResultIdentifier?: EvaluationResultIdentifier;
		ComplianceType?: ComplianceComplianceType | null;
		ResultRecordedTime?: Date | null;
		ConfigRuleInvokedTime?: Date | null;
		Annotation?: string | null;
		AccountId?: string | null;
		AwsRegion?: string | null;
	}

	/** The details of an AWS Config evaluation for an account ID and region in an aggregator. Provides the AWS resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.  */
	export interface AggregateEvaluationResultFormProperties {
		ComplianceType: FormControl<ComplianceComplianceType | null | undefined>,
		ResultRecordedTime: FormControl<Date | null | undefined>,
		ConfigRuleInvokedTime: FormControl<Date | null | undefined>,
		Annotation: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateAggregateEvaluationResultFormGroup() {
		return new FormGroup<AggregateEvaluationResultFormProperties>({
			ComplianceType: new FormControl<ComplianceComplianceType | null | undefined>(undefined),
			ResultRecordedTime: new FormControl<Date | null | undefined>(undefined),
			ConfigRuleInvokedTime: new FormControl<Date | null | undefined>(undefined),
			Annotation: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Uniquely identifies an evaluation result. */
	export interface EvaluationResultIdentifier {

		/** Identifies an AWS Config rule that evaluated an AWS resource, and provides the type and ID of the resource that the rule evaluated. */
		EvaluationResultQualifier?: EvaluationResultQualifier;
		OrderingTimestamp?: Date | null;
	}

	/** Uniquely identifies an evaluation result. */
	export interface EvaluationResultIdentifierFormProperties {
		OrderingTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateEvaluationResultIdentifierFormGroup() {
		return new FormGroup<EvaluationResultIdentifierFormProperties>({
			OrderingTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Identifies an AWS Config rule that evaluated an AWS resource, and provides the type and ID of the resource that the rule evaluated. */
	export interface EvaluationResultQualifier {
		ConfigRuleName?: string | null;
		ResourceType?: string | null;
		ResourceId?: string | null;
	}

	/** Identifies an AWS Config rule that evaluated an AWS resource, and provides the type and ID of the resource that the rule evaluated. */
	export interface EvaluationResultQualifierFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationResultQualifierFormGroup() {
		return new FormGroup<EvaluationResultQualifierFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAggregateComplianceDetailsByConfigRuleRequest {
		ConfigurationAggregatorName: string;
		ConfigRuleName: string;
		AccountId: string;
		AwsRegion: string;
		ComplianceType?: ComplianceComplianceType | null;
		Limit?: number | null;
		NextToken?: string | null;
	}
	export interface GetAggregateComplianceDetailsByConfigRuleRequestFormProperties {
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
		ConfigRuleName: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
		ComplianceType: FormControl<ComplianceComplianceType | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAggregateComplianceDetailsByConfigRuleRequestFormGroup() {
		return new FormGroup<GetAggregateComplianceDetailsByConfigRuleRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined),
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
			ComplianceType: new FormControl<ComplianceComplianceType | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAggregateConfigRuleComplianceSummaryResponse {
		GroupByKey?: string | null;
		AggregateComplianceCounts?: Array<AggregateComplianceCount>;
		NextToken?: string | null;
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
		GroupName?: string | null;

		/** The number of AWS Config rules or AWS resources that are compliant and noncompliant. */
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


	/** The number of AWS Config rules or AWS resources that are compliant and noncompliant. */
	export interface ComplianceSummary {

		/** The number of AWS resources or AWS Config rules responsible for the current compliance of the item, up to a maximum number. */
		CompliantResourceCount?: ComplianceContributorCount;

		/** The number of AWS resources or AWS Config rules responsible for the current compliance of the item, up to a maximum number. */
		NonCompliantResourceCount?: ComplianceContributorCount;
		ComplianceSummaryTimestamp?: Date | null;
	}

	/** The number of AWS Config rules or AWS resources that are compliant and noncompliant. */
	export interface ComplianceSummaryFormProperties {
		ComplianceSummaryTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateComplianceSummaryFormGroup() {
		return new FormGroup<ComplianceSummaryFormProperties>({
			ComplianceSummaryTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetAggregateConfigRuleComplianceSummaryRequest {
		ConfigurationAggregatorName: string;

		/** Filters the results based on the account IDs and regions. */
		Filters?: ConfigRuleComplianceSummaryFilters;
		GroupByKey?: GetAggregateConfigRuleComplianceSummaryRequestGroupByKey | null;
		Limit?: number | null;
		NextToken?: string | null;
	}
	export interface GetAggregateConfigRuleComplianceSummaryRequestFormProperties {
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
		GroupByKey: FormControl<GetAggregateConfigRuleComplianceSummaryRequestGroupByKey | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAggregateConfigRuleComplianceSummaryRequestFormGroup() {
		return new FormGroup<GetAggregateConfigRuleComplianceSummaryRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined),
			GroupByKey: new FormControl<GetAggregateConfigRuleComplianceSummaryRequestGroupByKey | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters the results based on the account IDs and regions. */
	export interface ConfigRuleComplianceSummaryFilters {
		AccountId?: string | null;
		AwsRegion?: string | null;
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

	export enum GetAggregateConfigRuleComplianceSummaryRequestGroupByKey { ACCOUNT_ID = 0, AWS_REGION = 1 }

	export interface GetAggregateDiscoveredResourceCountsResponse {
		TotalDiscoveredResources: number;
		GroupByKey?: string | null;
		GroupedResourceCounts?: Array<GroupedResourceCount>;
		NextToken?: string | null;
	}
	export interface GetAggregateDiscoveredResourceCountsResponseFormProperties {
		TotalDiscoveredResources: FormControl<number | null | undefined>,
		GroupByKey: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAggregateDiscoveredResourceCountsResponseFormGroup() {
		return new FormGroup<GetAggregateDiscoveredResourceCountsResponseFormProperties>({
			TotalDiscoveredResources: new FormControl<number | null | undefined>(undefined),
			GroupByKey: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The count of resources that are grouped by the group name. */
	export interface GroupedResourceCount {
		GroupName: string;
		ResourceCount: number;
	}

	/** The count of resources that are grouped by the group name. */
	export interface GroupedResourceCountFormProperties {
		GroupName: FormControl<string | null | undefined>,
		ResourceCount: FormControl<number | null | undefined>,
	}
	export function CreateGroupedResourceCountFormGroup() {
		return new FormGroup<GroupedResourceCountFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			ResourceCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAggregateDiscoveredResourceCountsRequest {
		ConfigurationAggregatorName: string;

		/** Filters the resource count based on account ID, region, and resource type. */
		Filters?: ResourceCountFilters;
		GroupByKey?: GetAggregateDiscoveredResourceCountsRequestGroupByKey | null;
		Limit?: number | null;
		NextToken?: string | null;
	}
	export interface GetAggregateDiscoveredResourceCountsRequestFormProperties {
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
		GroupByKey: FormControl<GetAggregateDiscoveredResourceCountsRequestGroupByKey | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAggregateDiscoveredResourceCountsRequestFormGroup() {
		return new FormGroup<GetAggregateDiscoveredResourceCountsRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined),
			GroupByKey: new FormControl<GetAggregateDiscoveredResourceCountsRequestGroupByKey | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters the resource count based on account ID, region, and resource type. */
	export interface ResourceCountFilters {
		ResourceType?: ResourceCountFiltersResourceType | null;
		AccountId?: string | null;
		Region?: string | null;
	}

	/** Filters the resource count based on account ID, region, and resource type. */
	export interface ResourceCountFiltersFormProperties {
		ResourceType: FormControl<ResourceCountFiltersResourceType | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
	}
	export function CreateResourceCountFiltersFormGroup() {
		return new FormGroup<ResourceCountFiltersFormProperties>({
			ResourceType: new FormControl<ResourceCountFiltersResourceType | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceCountFiltersResourceType { AWSEC2CustomerGateway = 0, AWSEC2EIP = 1, AWSEC2Host = 2, AWSEC2Instance = 3, AWSEC2InternetGateway = 4, AWSEC2NetworkAcl = 5, AWSEC2NetworkInterface = 6, AWSEC2RouteTable = 7, AWSEC2SecurityGroup = 8, AWSEC2Subnet = 9, AWSCloudTrailTrail = 10, AWSEC2Volume = 11, AWSEC2VPC = 12, AWSEC2VPNConnection = 13, AWSEC2VPNGateway = 14, AWSEC2RegisteredHAInstance = 15, AWSEC2NatGateway = 16, AWSEC2EgressOnlyInternetGateway = 17, AWSEC2VPCEndpoint = 18, AWSEC2VPCEndpointService = 19, AWSEC2FlowLog = 20, AWSEC2VPCPeeringConnection = 21, AWSElasticsearchDomain = 22, AWSIAMGroup = 23, AWSIAMPolicy = 24, AWSIAMRole = 25, AWSIAMUser = 26, AWSElasticLoadBalancingV2LoadBalancer = 27, AWSACMCertificate = 28, AWSRDSDBInstance = 29, AWSRDSDBSubnetGroup = 30, AWSRDSDBSecurityGroup = 31, AWSRDSDBSnapshot = 32, AWSRDSDBCluster = 33, AWSRDSDBClusterSnapshot = 34, AWSRDSEventSubscription = 35, AWSS3Bucket = 36, AWSS3AccountPublicAccessBlock = 37, AWSRedshiftCluster = 38, AWSRedshiftClusterSnapshot = 39, AWSRedshiftClusterParameterGroup = 40, AWSRedshiftClusterSecurityGroup = 41, AWSRedshiftClusterSubnetGroup = 42, AWSRedshiftEventSubscription = 43, AWSSSMManagedInstanceInventory = 44, AWSCloudWatchAlarm = 45, AWSCloudFormationStack = 46, AWSElasticLoadBalancingLoadBalancer = 47, AWSAutoScalingAutoScalingGroup = 48, AWSAutoScalingLaunchConfiguration = 49, AWSAutoScalingScalingPolicy = 50, AWSAutoScalingScheduledAction = 51, AWSDynamoDBTable = 52, AWSCodeBuildProject = 53, AWSWAFRateBasedRule = 54, AWSWAFRule = 55, AWSWAFRuleGroup = 56, AWSWAFWebACL = 57, AWSWAFRegionalRateBasedRule = 58, AWSWAFRegionalRule = 59, AWSWAFRegionalRuleGroup = 60, AWSWAFRegionalWebACL = 61, AWSCloudFrontDistribution = 62, AWSCloudFrontStreamingDistribution = 63, AWSLambdaFunction = 64, AWSElasticBeanstalkApplication = 65, AWSElasticBeanstalkApplicationVersion = 66, AWSElasticBeanstalkEnvironment = 67, AWSWAFv2WebACL = 68, AWSWAFv2RuleGroup = 69, AWSWAFv2IPSet = 70, AWSWAFv2RegexPatternSet = 71, AWSWAFv2ManagedRuleSet = 72, AWSXRayEncryptionConfig = 73, AWSSSMAssociationCompliance = 74, AWSSSMPatchCompliance = 75, AWSShieldProtection = 76, AWSShieldRegionalProtection = 77, AWSConfigResourceCompliance = 78, AWSApiGatewayStage = 79, AWSApiGatewayRestApi = 80, AWSApiGatewayV2Stage = 81, AWSApiGatewayV2Api = 82, AWSCodePipelinePipeline = 83, AWSServiceCatalogCloudFormationProvisionedProduct = 84, AWSServiceCatalogCloudFormationProduct = 85, AWSServiceCatalogPortfolio = 86, AWSSQSQueue = 87, AWSKMSKey = 88, AWSQLDBLedger = 89 }

	export enum GetAggregateDiscoveredResourceCountsRequestGroupByKey { RESOURCE_TYPE = 0, ACCOUNT_ID = 1, AWS_REGION = 2 }

	export interface GetAggregateResourceConfigResponse {

		/** A list that contains detailed configurations of a specified resource. */
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
		version?: string | null;
		accountId?: string | null;
		configurationItemCaptureTime?: Date | null;
		configurationItemStatus?: BaseConfigurationItemConfigurationItemStatus | null;
		configurationStateId?: string | null;
		configurationItemMD5Hash?: string | null;
		arn?: string | null;
		resourceType?: ConfigurationItemResourceType | null;
		resourceId?: string | null;
		resourceName?: string | null;
		awsRegion?: string | null;
		availabilityZone?: string | null;
		resourceCreationTime?: Date | null;
		tags?: Tags;
		relatedEvents?: Array<string>;
		relationships?: Array<Relationship>;
		configuration?: string | null;
		supplementaryConfiguration?: SupplementaryConfiguration;
	}

	/** A list that contains detailed configurations of a specified resource. */
	export interface ConfigurationItemFormProperties {
		version: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
		configurationItemCaptureTime: FormControl<Date | null | undefined>,
		configurationItemStatus: FormControl<BaseConfigurationItemConfigurationItemStatus | null | undefined>,
		configurationStateId: FormControl<string | null | undefined>,
		configurationItemMD5Hash: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		resourceType: FormControl<ConfigurationItemResourceType | null | undefined>,
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
			configurationItemStatus: new FormControl<BaseConfigurationItemConfigurationItemStatus | null | undefined>(undefined),
			configurationStateId: new FormControl<string | null | undefined>(undefined),
			configurationItemMD5Hash: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<ConfigurationItemResourceType | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
			availabilityZone: new FormControl<string | null | undefined>(undefined),
			resourceCreationTime: new FormControl<Date | null | undefined>(undefined),
			configuration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConfigurationItemResourceType { AWSEC2CustomerGateway = 0, AWSEC2EIP = 1, AWSEC2Host = 2, AWSEC2Instance = 3, AWSEC2InternetGateway = 4, AWSEC2NetworkAcl = 5, AWSEC2NetworkInterface = 6, AWSEC2RouteTable = 7, AWSEC2SecurityGroup = 8, AWSEC2Subnet = 9, AWSCloudTrailTrail = 10, AWSEC2Volume = 11, AWSEC2VPC = 12, AWSEC2VPNConnection = 13, AWSEC2VPNGateway = 14, AWSEC2RegisteredHAInstance = 15, AWSEC2NatGateway = 16, AWSEC2EgressOnlyInternetGateway = 17, AWSEC2VPCEndpoint = 18, AWSEC2VPCEndpointService = 19, AWSEC2FlowLog = 20, AWSEC2VPCPeeringConnection = 21, AWSElasticsearchDomain = 22, AWSIAMGroup = 23, AWSIAMPolicy = 24, AWSIAMRole = 25, AWSIAMUser = 26, AWSElasticLoadBalancingV2LoadBalancer = 27, AWSACMCertificate = 28, AWSRDSDBInstance = 29, AWSRDSDBSubnetGroup = 30, AWSRDSDBSecurityGroup = 31, AWSRDSDBSnapshot = 32, AWSRDSDBCluster = 33, AWSRDSDBClusterSnapshot = 34, AWSRDSEventSubscription = 35, AWSS3Bucket = 36, AWSS3AccountPublicAccessBlock = 37, AWSRedshiftCluster = 38, AWSRedshiftClusterSnapshot = 39, AWSRedshiftClusterParameterGroup = 40, AWSRedshiftClusterSecurityGroup = 41, AWSRedshiftClusterSubnetGroup = 42, AWSRedshiftEventSubscription = 43, AWSSSMManagedInstanceInventory = 44, AWSCloudWatchAlarm = 45, AWSCloudFormationStack = 46, AWSElasticLoadBalancingLoadBalancer = 47, AWSAutoScalingAutoScalingGroup = 48, AWSAutoScalingLaunchConfiguration = 49, AWSAutoScalingScalingPolicy = 50, AWSAutoScalingScheduledAction = 51, AWSDynamoDBTable = 52, AWSCodeBuildProject = 53, AWSWAFRateBasedRule = 54, AWSWAFRule = 55, AWSWAFRuleGroup = 56, AWSWAFWebACL = 57, AWSWAFRegionalRateBasedRule = 58, AWSWAFRegionalRule = 59, AWSWAFRegionalRuleGroup = 60, AWSWAFRegionalWebACL = 61, AWSCloudFrontDistribution = 62, AWSCloudFrontStreamingDistribution = 63, AWSLambdaFunction = 64, AWSElasticBeanstalkApplication = 65, AWSElasticBeanstalkApplicationVersion = 66, AWSElasticBeanstalkEnvironment = 67, AWSWAFv2WebACL = 68, AWSWAFv2RuleGroup = 69, AWSWAFv2IPSet = 70, AWSWAFv2RegexPatternSet = 71, AWSWAFv2ManagedRuleSet = 72, AWSXRayEncryptionConfig = 73, AWSSSMAssociationCompliance = 74, AWSSSMPatchCompliance = 75, AWSShieldProtection = 76, AWSShieldRegionalProtection = 77, AWSConfigResourceCompliance = 78, AWSApiGatewayStage = 79, AWSApiGatewayRestApi = 80, AWSApiGatewayV2Stage = 81, AWSApiGatewayV2Api = 82, AWSCodePipelinePipeline = 83, AWSServiceCatalogCloudFormationProvisionedProduct = 84, AWSServiceCatalogCloudFormationProduct = 85, AWSServiceCatalogPortfolio = 86, AWSSQSQueue = 87, AWSKMSKey = 88, AWSQLDBLedger = 89 }

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
		resourceType?: RelationshipResourceType | null;
		resourceId?: string | null;
		resourceName?: string | null;
		relationshipName?: string | null;
	}

	/** The relationship of the related resource to the main resource. */
	export interface RelationshipFormProperties {
		resourceType: FormControl<RelationshipResourceType | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		relationshipName: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipFormGroup() {
		return new FormGroup<RelationshipFormProperties>({
			resourceType: new FormControl<RelationshipResourceType | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			relationshipName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RelationshipResourceType { AWSEC2CustomerGateway = 0, AWSEC2EIP = 1, AWSEC2Host = 2, AWSEC2Instance = 3, AWSEC2InternetGateway = 4, AWSEC2NetworkAcl = 5, AWSEC2NetworkInterface = 6, AWSEC2RouteTable = 7, AWSEC2SecurityGroup = 8, AWSEC2Subnet = 9, AWSCloudTrailTrail = 10, AWSEC2Volume = 11, AWSEC2VPC = 12, AWSEC2VPNConnection = 13, AWSEC2VPNGateway = 14, AWSEC2RegisteredHAInstance = 15, AWSEC2NatGateway = 16, AWSEC2EgressOnlyInternetGateway = 17, AWSEC2VPCEndpoint = 18, AWSEC2VPCEndpointService = 19, AWSEC2FlowLog = 20, AWSEC2VPCPeeringConnection = 21, AWSElasticsearchDomain = 22, AWSIAMGroup = 23, AWSIAMPolicy = 24, AWSIAMRole = 25, AWSIAMUser = 26, AWSElasticLoadBalancingV2LoadBalancer = 27, AWSACMCertificate = 28, AWSRDSDBInstance = 29, AWSRDSDBSubnetGroup = 30, AWSRDSDBSecurityGroup = 31, AWSRDSDBSnapshot = 32, AWSRDSDBCluster = 33, AWSRDSDBClusterSnapshot = 34, AWSRDSEventSubscription = 35, AWSS3Bucket = 36, AWSS3AccountPublicAccessBlock = 37, AWSRedshiftCluster = 38, AWSRedshiftClusterSnapshot = 39, AWSRedshiftClusterParameterGroup = 40, AWSRedshiftClusterSecurityGroup = 41, AWSRedshiftClusterSubnetGroup = 42, AWSRedshiftEventSubscription = 43, AWSSSMManagedInstanceInventory = 44, AWSCloudWatchAlarm = 45, AWSCloudFormationStack = 46, AWSElasticLoadBalancingLoadBalancer = 47, AWSAutoScalingAutoScalingGroup = 48, AWSAutoScalingLaunchConfiguration = 49, AWSAutoScalingScalingPolicy = 50, AWSAutoScalingScheduledAction = 51, AWSDynamoDBTable = 52, AWSCodeBuildProject = 53, AWSWAFRateBasedRule = 54, AWSWAFRule = 55, AWSWAFRuleGroup = 56, AWSWAFWebACL = 57, AWSWAFRegionalRateBasedRule = 58, AWSWAFRegionalRule = 59, AWSWAFRegionalRuleGroup = 60, AWSWAFRegionalWebACL = 61, AWSCloudFrontDistribution = 62, AWSCloudFrontStreamingDistribution = 63, AWSLambdaFunction = 64, AWSElasticBeanstalkApplication = 65, AWSElasticBeanstalkApplicationVersion = 66, AWSElasticBeanstalkEnvironment = 67, AWSWAFv2WebACL = 68, AWSWAFv2RuleGroup = 69, AWSWAFv2IPSet = 70, AWSWAFv2RegexPatternSet = 71, AWSWAFv2ManagedRuleSet = 72, AWSXRayEncryptionConfig = 73, AWSSSMAssociationCompliance = 74, AWSSSMPatchCompliance = 75, AWSShieldProtection = 76, AWSShieldRegionalProtection = 77, AWSConfigResourceCompliance = 78, AWSApiGatewayStage = 79, AWSApiGatewayRestApi = 80, AWSApiGatewayV2Stage = 81, AWSApiGatewayV2Api = 82, AWSCodePipelinePipeline = 83, AWSServiceCatalogCloudFormationProvisionedProduct = 84, AWSServiceCatalogCloudFormationProduct = 85, AWSServiceCatalogPortfolio = 86, AWSSQSQueue = 87, AWSKMSKey = 88, AWSQLDBLedger = 89 }

	export interface GetAggregateResourceConfigRequest {
		ConfigurationAggregatorName: string;

		/**
		 * The details that identify a resource that is collected by AWS Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region.
		 * Required
		 */
		ResourceIdentifier: AggregateResourceIdentifier;
	}
	export interface GetAggregateResourceConfigRequestFormProperties {
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
	}
	export function CreateGetAggregateResourceConfigRequestFormGroup() {
		return new FormGroup<GetAggregateResourceConfigRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined),
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
		NextToken?: string | null;
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


	/** The details of an AWS Config evaluation. Provides the AWS resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information. */
	export interface EvaluationResult {

		/** Uniquely identifies an evaluation result. */
		EvaluationResultIdentifier?: EvaluationResultIdentifier;
		ComplianceType?: ComplianceComplianceType | null;
		ResultRecordedTime?: Date | null;
		ConfigRuleInvokedTime?: Date | null;
		Annotation?: string | null;
		ResultToken?: string | null;
	}

	/** The details of an AWS Config evaluation. Provides the AWS resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information. */
	export interface EvaluationResultFormProperties {
		ComplianceType: FormControl<ComplianceComplianceType | null | undefined>,
		ResultRecordedTime: FormControl<Date | null | undefined>,
		ConfigRuleInvokedTime: FormControl<Date | null | undefined>,
		Annotation: FormControl<string | null | undefined>,
		ResultToken: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationResultFormGroup() {
		return new FormGroup<EvaluationResultFormProperties>({
			ComplianceType: new FormControl<ComplianceComplianceType | null | undefined>(undefined),
			ResultRecordedTime: new FormControl<Date | null | undefined>(undefined),
			ConfigRuleInvokedTime: new FormControl<Date | null | undefined>(undefined),
			Annotation: new FormControl<string | null | undefined>(undefined),
			ResultToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface GetComplianceDetailsByConfigRuleRequest {
		ConfigRuleName: string;
		ComplianceTypes?: Array<ComplianceType>;
		Limit?: number | null;
		NextToken?: string | null;
	}

	/** <p/> */
	export interface GetComplianceDetailsByConfigRuleRequestFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetComplianceDetailsByConfigRuleRequestFormGroup() {
		return new FormGroup<GetComplianceDetailsByConfigRuleRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface GetComplianceDetailsByResourceResponse {
		EvaluationResults?: Array<EvaluationResult>;
		NextToken?: string | null;
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
		ResourceType: string;
		ResourceId: string;
		ComplianceTypes?: Array<ComplianceType>;
		NextToken?: string | null;
	}

	/** <p/> */
	export interface GetComplianceDetailsByResourceRequestFormProperties {
		ResourceType: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetComplianceDetailsByResourceRequestFormGroup() {
		return new FormGroup<GetComplianceDetailsByResourceRequestFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface GetComplianceSummaryByConfigRuleResponse {

		/** The number of AWS Config rules or AWS resources that are compliant and noncompliant. */
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


	/** The number of AWS resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each. */
	export interface ComplianceSummaryByResourceType {
		ResourceType?: string | null;

		/** The number of AWS Config rules or AWS resources that are compliant and noncompliant. */
		ComplianceSummary?: ComplianceSummary;
	}

	/** The number of AWS resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each. */
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
		ConformancePackName: string;
		ConformancePackRuleEvaluationResults?: Array<ConformancePackEvaluationResult>;
		NextToken?: string | null;
	}
	export interface GetConformancePackComplianceDetailsResponseFormProperties {
		ConformancePackName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetConformancePackComplianceDetailsResponseFormGroup() {
		return new FormGroup<GetConformancePackComplianceDetailsResponseFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of a conformance pack evaluation. Provides AWS Config rule and AWS resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information.  */
	export interface ConformancePackEvaluationResult {
		ComplianceType: ConformancePackRuleComplianceComplianceType;

		/**
		 * Uniquely identifies an evaluation result.
		 * Required
		 */
		EvaluationResultIdentifier: EvaluationResultIdentifier;
		ConfigRuleInvokedTime: Date;
		ResultRecordedTime: Date;
		Annotation?: string | null;
	}

	/** The details of a conformance pack evaluation. Provides AWS Config rule and AWS resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information.  */
	export interface ConformancePackEvaluationResultFormProperties {
		ComplianceType: FormControl<ConformancePackRuleComplianceComplianceType | null | undefined>,
		ConfigRuleInvokedTime: FormControl<Date | null | undefined>,
		ResultRecordedTime: FormControl<Date | null | undefined>,
		Annotation: FormControl<string | null | undefined>,
	}
	export function CreateConformancePackEvaluationResultFormGroup() {
		return new FormGroup<ConformancePackEvaluationResultFormProperties>({
			ComplianceType: new FormControl<ConformancePackRuleComplianceComplianceType | null | undefined>(undefined),
			ConfigRuleInvokedTime: new FormControl<Date | null | undefined>(undefined),
			ResultRecordedTime: new FormControl<Date | null | undefined>(undefined),
			Annotation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetConformancePackComplianceDetailsRequest {
		ConformancePackName: string;

		/** Filters a conformance pack by AWS Config rule names, compliance types, AWS resource types, and resource IDs. */
		Filters?: ConformancePackEvaluationFilters;
		Limit?: number | null;
		NextToken?: string | null;
	}
	export interface GetConformancePackComplianceDetailsRequestFormProperties {
		ConformancePackName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetConformancePackComplianceDetailsRequestFormGroup() {
		return new FormGroup<GetConformancePackComplianceDetailsRequestFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters a conformance pack by AWS Config rule names, compliance types, AWS resource types, and resource IDs. */
	export interface ConformancePackEvaluationFilters {
		ConfigRuleNames?: Array<string>;
		ComplianceType?: ConformancePackRuleComplianceComplianceType | null;
		ResourceType?: string | null;
		ResourceIds?: Array<string>;
	}

	/** Filters a conformance pack by AWS Config rule names, compliance types, AWS resource types, and resource IDs. */
	export interface ConformancePackEvaluationFiltersFormProperties {
		ComplianceType: FormControl<ConformancePackRuleComplianceComplianceType | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateConformancePackEvaluationFiltersFormGroup() {
		return new FormGroup<ConformancePackEvaluationFiltersFormProperties>({
			ComplianceType: new FormControl<ConformancePackRuleComplianceComplianceType | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetConformancePackComplianceSummaryResponse {
		ConformancePackComplianceSummaryList?: Array<ConformancePackComplianceSummary>;
		NextToken?: string | null;
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
		ConformancePackName: string;
		ConformancePackComplianceStatus: ConformancePackRuleComplianceComplianceType;
	}

	/** Summary includes the name and status of the conformance pack. */
	export interface ConformancePackComplianceSummaryFormProperties {
		ConformancePackName: FormControl<string | null | undefined>,
		ConformancePackComplianceStatus: FormControl<ConformancePackRuleComplianceComplianceType | null | undefined>,
	}
	export function CreateConformancePackComplianceSummaryFormGroup() {
		return new FormGroup<ConformancePackComplianceSummaryFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined),
			ConformancePackComplianceStatus: new FormControl<ConformancePackRuleComplianceComplianceType | null | undefined>(undefined),
		});

	}

	export interface GetConformancePackComplianceSummaryRequest {
		ConformancePackNames: Array<string>;
		Limit?: number | null;
		NextToken?: string | null;
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

	export interface GetDiscoveredResourceCountsResponse {
		totalDiscoveredResources?: number | null;
		resourceCounts?: Array<ResourceCount>;
		nextToken?: string | null;
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
		resourceType?: ResourceCountResourceType | null;
		count?: number | null;
	}

	/** An object that contains the resource type and the number of resources. */
	export interface ResourceCountFormProperties {
		resourceType: FormControl<ResourceCountResourceType | null | undefined>,
		count: FormControl<number | null | undefined>,
	}
	export function CreateResourceCountFormGroup() {
		return new FormGroup<ResourceCountFormProperties>({
			resourceType: new FormControl<ResourceCountResourceType | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ResourceCountResourceType { AWSEC2CustomerGateway = 0, AWSEC2EIP = 1, AWSEC2Host = 2, AWSEC2Instance = 3, AWSEC2InternetGateway = 4, AWSEC2NetworkAcl = 5, AWSEC2NetworkInterface = 6, AWSEC2RouteTable = 7, AWSEC2SecurityGroup = 8, AWSEC2Subnet = 9, AWSCloudTrailTrail = 10, AWSEC2Volume = 11, AWSEC2VPC = 12, AWSEC2VPNConnection = 13, AWSEC2VPNGateway = 14, AWSEC2RegisteredHAInstance = 15, AWSEC2NatGateway = 16, AWSEC2EgressOnlyInternetGateway = 17, AWSEC2VPCEndpoint = 18, AWSEC2VPCEndpointService = 19, AWSEC2FlowLog = 20, AWSEC2VPCPeeringConnection = 21, AWSElasticsearchDomain = 22, AWSIAMGroup = 23, AWSIAMPolicy = 24, AWSIAMRole = 25, AWSIAMUser = 26, AWSElasticLoadBalancingV2LoadBalancer = 27, AWSACMCertificate = 28, AWSRDSDBInstance = 29, AWSRDSDBSubnetGroup = 30, AWSRDSDBSecurityGroup = 31, AWSRDSDBSnapshot = 32, AWSRDSDBCluster = 33, AWSRDSDBClusterSnapshot = 34, AWSRDSEventSubscription = 35, AWSS3Bucket = 36, AWSS3AccountPublicAccessBlock = 37, AWSRedshiftCluster = 38, AWSRedshiftClusterSnapshot = 39, AWSRedshiftClusterParameterGroup = 40, AWSRedshiftClusterSecurityGroup = 41, AWSRedshiftClusterSubnetGroup = 42, AWSRedshiftEventSubscription = 43, AWSSSMManagedInstanceInventory = 44, AWSCloudWatchAlarm = 45, AWSCloudFormationStack = 46, AWSElasticLoadBalancingLoadBalancer = 47, AWSAutoScalingAutoScalingGroup = 48, AWSAutoScalingLaunchConfiguration = 49, AWSAutoScalingScalingPolicy = 50, AWSAutoScalingScheduledAction = 51, AWSDynamoDBTable = 52, AWSCodeBuildProject = 53, AWSWAFRateBasedRule = 54, AWSWAFRule = 55, AWSWAFRuleGroup = 56, AWSWAFWebACL = 57, AWSWAFRegionalRateBasedRule = 58, AWSWAFRegionalRule = 59, AWSWAFRegionalRuleGroup = 60, AWSWAFRegionalWebACL = 61, AWSCloudFrontDistribution = 62, AWSCloudFrontStreamingDistribution = 63, AWSLambdaFunction = 64, AWSElasticBeanstalkApplication = 65, AWSElasticBeanstalkApplicationVersion = 66, AWSElasticBeanstalkEnvironment = 67, AWSWAFv2WebACL = 68, AWSWAFv2RuleGroup = 69, AWSWAFv2IPSet = 70, AWSWAFv2RegexPatternSet = 71, AWSWAFv2ManagedRuleSet = 72, AWSXRayEncryptionConfig = 73, AWSSSMAssociationCompliance = 74, AWSSSMPatchCompliance = 75, AWSShieldProtection = 76, AWSShieldRegionalProtection = 77, AWSConfigResourceCompliance = 78, AWSApiGatewayStage = 79, AWSApiGatewayRestApi = 80, AWSApiGatewayV2Stage = 81, AWSApiGatewayV2Api = 82, AWSCodePipelinePipeline = 83, AWSServiceCatalogCloudFormationProvisionedProduct = 84, AWSServiceCatalogCloudFormationProduct = 85, AWSServiceCatalogPortfolio = 86, AWSSQSQueue = 87, AWSKMSKey = 88, AWSQLDBLedger = 89 }

	export interface GetDiscoveredResourceCountsRequest {
		resourceTypes?: Array<string>;
		limit?: number | null;
		nextToken?: string | null;
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
		NextToken?: string | null;
	}
	export interface GetOrganizationConfigRuleDetailedStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOrganizationConfigRuleDetailedStatusResponseFormGroup() {
		return new FormGroup<GetOrganizationConfigRuleDetailedStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Organization config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed. */
	export interface MemberAccountStatus {
		AccountId: string;
		ConfigRuleName: string;
		MemberAccountRuleStatus: OrganizationConfigRuleStatusOrganizationRuleStatus;
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
		LastUpdateTime?: Date | null;
	}

	/** Organization config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed. */
	export interface MemberAccountStatusFormProperties {
		AccountId: FormControl<string | null | undefined>,
		ConfigRuleName: FormControl<string | null | undefined>,
		MemberAccountRuleStatus: FormControl<OrganizationConfigRuleStatusOrganizationRuleStatus | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateMemberAccountStatusFormGroup() {
		return new FormGroup<MemberAccountStatusFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			MemberAccountRuleStatus: new FormControl<OrganizationConfigRuleStatusOrganizationRuleStatus | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetOrganizationConfigRuleDetailedStatusRequest {
		OrganizationConfigRuleName: string;

		/** Status filter object to filter results based on specific member account ID or status type for an organization config rule. */
		Filters?: StatusDetailFilters;
		Limit?: number | null;
		NextToken?: string | null;
	}
	export interface GetOrganizationConfigRuleDetailedStatusRequestFormProperties {
		OrganizationConfigRuleName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOrganizationConfigRuleDetailedStatusRequestFormGroup() {
		return new FormGroup<GetOrganizationConfigRuleDetailedStatusRequestFormProperties>({
			OrganizationConfigRuleName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status filter object to filter results based on specific member account ID or status type for an organization config rule.  */
	export interface StatusDetailFilters {
		AccountId?: string | null;
		MemberAccountRuleStatus?: OrganizationConfigRuleStatusOrganizationRuleStatus | null;
	}

	/** Status filter object to filter results based on specific member account ID or status type for an organization config rule.  */
	export interface StatusDetailFiltersFormProperties {
		AccountId: FormControl<string | null | undefined>,
		MemberAccountRuleStatus: FormControl<OrganizationConfigRuleStatusOrganizationRuleStatus | null | undefined>,
	}
	export function CreateStatusDetailFiltersFormGroup() {
		return new FormGroup<StatusDetailFiltersFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			MemberAccountRuleStatus: new FormControl<OrganizationConfigRuleStatusOrganizationRuleStatus | null | undefined>(undefined),
		});

	}

	export interface GetOrganizationConformancePackDetailedStatusResponse {
		OrganizationConformancePackDetailedStatuses?: Array<OrganizationConformancePackDetailedStatus>;
		NextToken?: string | null;
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
		AccountId: string;
		ConformancePackName: string;
		Status: OrganizationConfigRuleStatusOrganizationRuleStatus;
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
		LastUpdateTime?: Date | null;
	}

	/** Organization conformance pack creation or deletion status in each member account. This includes the name of the conformance pack, the status, error code and error message when the conformance pack creation or deletion failed.  */
	export interface OrganizationConformancePackDetailedStatusFormProperties {
		AccountId: FormControl<string | null | undefined>,
		ConformancePackName: FormControl<string | null | undefined>,
		Status: FormControl<OrganizationConfigRuleStatusOrganizationRuleStatus | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOrganizationConformancePackDetailedStatusFormGroup() {
		return new FormGroup<OrganizationConformancePackDetailedStatusFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			ConformancePackName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<OrganizationConfigRuleStatusOrganizationRuleStatus | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetOrganizationConformancePackDetailedStatusRequest {
		OrganizationConformancePackName: string;

		/** Status filter object to filter results based on specific member account ID or status type for an organization conformance pack. */
		Filters?: OrganizationResourceDetailedStatusFilters;
		Limit?: number | null;
		NextToken?: string | null;
	}
	export interface GetOrganizationConformancePackDetailedStatusRequestFormProperties {
		OrganizationConformancePackName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOrganizationConformancePackDetailedStatusRequestFormGroup() {
		return new FormGroup<GetOrganizationConformancePackDetailedStatusRequestFormProperties>({
			OrganizationConformancePackName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status filter object to filter results based on specific member account ID or status type for an organization conformance pack. */
	export interface OrganizationResourceDetailedStatusFilters {
		AccountId?: string | null;
		Status?: OrganizationConfigRuleStatusOrganizationRuleStatus | null;
	}

	/** Status filter object to filter results based on specific member account ID or status type for an organization conformance pack. */
	export interface OrganizationResourceDetailedStatusFiltersFormProperties {
		AccountId: FormControl<string | null | undefined>,
		Status: FormControl<OrganizationConfigRuleStatusOrganizationRuleStatus | null | undefined>,
	}
	export function CreateOrganizationResourceDetailedStatusFiltersFormGroup() {
		return new FormGroup<OrganizationResourceDetailedStatusFiltersFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<OrganizationConfigRuleStatusOrganizationRuleStatus | null | undefined>(undefined),
		});

	}


	/** The output for the <a>GetResourceConfigHistory</a> action. */
	export interface GetResourceConfigHistoryResponse {
		configurationItems?: Array<ConfigurationItem>;
		nextToken?: string | null;
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
		resourceType: GetResourceConfigHistoryRequestResourceType;
		resourceId: string;
		laterTime?: Date | null;
		earlierTime?: Date | null;
		chronologicalOrder?: GetResourceConfigHistoryRequestChronologicalOrder | null;
		limit?: number | null;
		nextToken?: string | null;
	}

	/** The input for the <a>GetResourceConfigHistory</a> action. */
	export interface GetResourceConfigHistoryRequestFormProperties {
		resourceType: FormControl<GetResourceConfigHistoryRequestResourceType | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		laterTime: FormControl<Date | null | undefined>,
		earlierTime: FormControl<Date | null | undefined>,
		chronologicalOrder: FormControl<GetResourceConfigHistoryRequestChronologicalOrder | null | undefined>,
		limit: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceConfigHistoryRequestFormGroup() {
		return new FormGroup<GetResourceConfigHistoryRequestFormProperties>({
			resourceType: new FormControl<GetResourceConfigHistoryRequestResourceType | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			laterTime: new FormControl<Date | null | undefined>(undefined),
			earlierTime: new FormControl<Date | null | undefined>(undefined),
			chronologicalOrder: new FormControl<GetResourceConfigHistoryRequestChronologicalOrder | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetResourceConfigHistoryRequestResourceType { AWSEC2CustomerGateway = 0, AWSEC2EIP = 1, AWSEC2Host = 2, AWSEC2Instance = 3, AWSEC2InternetGateway = 4, AWSEC2NetworkAcl = 5, AWSEC2NetworkInterface = 6, AWSEC2RouteTable = 7, AWSEC2SecurityGroup = 8, AWSEC2Subnet = 9, AWSCloudTrailTrail = 10, AWSEC2Volume = 11, AWSEC2VPC = 12, AWSEC2VPNConnection = 13, AWSEC2VPNGateway = 14, AWSEC2RegisteredHAInstance = 15, AWSEC2NatGateway = 16, AWSEC2EgressOnlyInternetGateway = 17, AWSEC2VPCEndpoint = 18, AWSEC2VPCEndpointService = 19, AWSEC2FlowLog = 20, AWSEC2VPCPeeringConnection = 21, AWSElasticsearchDomain = 22, AWSIAMGroup = 23, AWSIAMPolicy = 24, AWSIAMRole = 25, AWSIAMUser = 26, AWSElasticLoadBalancingV2LoadBalancer = 27, AWSACMCertificate = 28, AWSRDSDBInstance = 29, AWSRDSDBSubnetGroup = 30, AWSRDSDBSecurityGroup = 31, AWSRDSDBSnapshot = 32, AWSRDSDBCluster = 33, AWSRDSDBClusterSnapshot = 34, AWSRDSEventSubscription = 35, AWSS3Bucket = 36, AWSS3AccountPublicAccessBlock = 37, AWSRedshiftCluster = 38, AWSRedshiftClusterSnapshot = 39, AWSRedshiftClusterParameterGroup = 40, AWSRedshiftClusterSecurityGroup = 41, AWSRedshiftClusterSubnetGroup = 42, AWSRedshiftEventSubscription = 43, AWSSSMManagedInstanceInventory = 44, AWSCloudWatchAlarm = 45, AWSCloudFormationStack = 46, AWSElasticLoadBalancingLoadBalancer = 47, AWSAutoScalingAutoScalingGroup = 48, AWSAutoScalingLaunchConfiguration = 49, AWSAutoScalingScalingPolicy = 50, AWSAutoScalingScheduledAction = 51, AWSDynamoDBTable = 52, AWSCodeBuildProject = 53, AWSWAFRateBasedRule = 54, AWSWAFRule = 55, AWSWAFRuleGroup = 56, AWSWAFWebACL = 57, AWSWAFRegionalRateBasedRule = 58, AWSWAFRegionalRule = 59, AWSWAFRegionalRuleGroup = 60, AWSWAFRegionalWebACL = 61, AWSCloudFrontDistribution = 62, AWSCloudFrontStreamingDistribution = 63, AWSLambdaFunction = 64, AWSElasticBeanstalkApplication = 65, AWSElasticBeanstalkApplicationVersion = 66, AWSElasticBeanstalkEnvironment = 67, AWSWAFv2WebACL = 68, AWSWAFv2RuleGroup = 69, AWSWAFv2IPSet = 70, AWSWAFv2RegexPatternSet = 71, AWSWAFv2ManagedRuleSet = 72, AWSXRayEncryptionConfig = 73, AWSSSMAssociationCompliance = 74, AWSSSMPatchCompliance = 75, AWSShieldProtection = 76, AWSShieldRegionalProtection = 77, AWSConfigResourceCompliance = 78, AWSApiGatewayStage = 79, AWSApiGatewayRestApi = 80, AWSApiGatewayV2Stage = 81, AWSApiGatewayV2Api = 82, AWSCodePipelinePipeline = 83, AWSServiceCatalogCloudFormationProvisionedProduct = 84, AWSServiceCatalogCloudFormationProduct = 85, AWSServiceCatalogPortfolio = 86, AWSSQSQueue = 87, AWSKMSKey = 88, AWSQLDBLedger = 89 }

	export enum GetResourceConfigHistoryRequestChronologicalOrder { Reverse = 0, Forward = 1 }

	export interface InvalidTimeRangeException {
	}
	export interface InvalidTimeRangeExceptionFormProperties {
	}
	export function CreateInvalidTimeRangeExceptionFormGroup() {
		return new FormGroup<InvalidTimeRangeExceptionFormProperties>({
		});

	}

	export interface ListAggregateDiscoveredResourcesResponse {
		ResourceIdentifiers?: Array<AggregateResourceIdentifier>;
		NextToken?: string | null;
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
		ConfigurationAggregatorName: string;
		ResourceType: ListAggregateDiscoveredResourcesRequestResourceType;

		/** Filters the results by resource account ID, region, resource ID, and resource name. */
		Filters?: ResourceFilters;
		Limit?: number | null;
		NextToken?: string | null;
	}
	export interface ListAggregateDiscoveredResourcesRequestFormProperties {
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
		ResourceType: FormControl<ListAggregateDiscoveredResourcesRequestResourceType | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAggregateDiscoveredResourcesRequestFormGroup() {
		return new FormGroup<ListAggregateDiscoveredResourcesRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ListAggregateDiscoveredResourcesRequestResourceType | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ListAggregateDiscoveredResourcesRequestResourceType { AWSEC2CustomerGateway = 0, AWSEC2EIP = 1, AWSEC2Host = 2, AWSEC2Instance = 3, AWSEC2InternetGateway = 4, AWSEC2NetworkAcl = 5, AWSEC2NetworkInterface = 6, AWSEC2RouteTable = 7, AWSEC2SecurityGroup = 8, AWSEC2Subnet = 9, AWSCloudTrailTrail = 10, AWSEC2Volume = 11, AWSEC2VPC = 12, AWSEC2VPNConnection = 13, AWSEC2VPNGateway = 14, AWSEC2RegisteredHAInstance = 15, AWSEC2NatGateway = 16, AWSEC2EgressOnlyInternetGateway = 17, AWSEC2VPCEndpoint = 18, AWSEC2VPCEndpointService = 19, AWSEC2FlowLog = 20, AWSEC2VPCPeeringConnection = 21, AWSElasticsearchDomain = 22, AWSIAMGroup = 23, AWSIAMPolicy = 24, AWSIAMRole = 25, AWSIAMUser = 26, AWSElasticLoadBalancingV2LoadBalancer = 27, AWSACMCertificate = 28, AWSRDSDBInstance = 29, AWSRDSDBSubnetGroup = 30, AWSRDSDBSecurityGroup = 31, AWSRDSDBSnapshot = 32, AWSRDSDBCluster = 33, AWSRDSDBClusterSnapshot = 34, AWSRDSEventSubscription = 35, AWSS3Bucket = 36, AWSS3AccountPublicAccessBlock = 37, AWSRedshiftCluster = 38, AWSRedshiftClusterSnapshot = 39, AWSRedshiftClusterParameterGroup = 40, AWSRedshiftClusterSecurityGroup = 41, AWSRedshiftClusterSubnetGroup = 42, AWSRedshiftEventSubscription = 43, AWSSSMManagedInstanceInventory = 44, AWSCloudWatchAlarm = 45, AWSCloudFormationStack = 46, AWSElasticLoadBalancingLoadBalancer = 47, AWSAutoScalingAutoScalingGroup = 48, AWSAutoScalingLaunchConfiguration = 49, AWSAutoScalingScalingPolicy = 50, AWSAutoScalingScheduledAction = 51, AWSDynamoDBTable = 52, AWSCodeBuildProject = 53, AWSWAFRateBasedRule = 54, AWSWAFRule = 55, AWSWAFRuleGroup = 56, AWSWAFWebACL = 57, AWSWAFRegionalRateBasedRule = 58, AWSWAFRegionalRule = 59, AWSWAFRegionalRuleGroup = 60, AWSWAFRegionalWebACL = 61, AWSCloudFrontDistribution = 62, AWSCloudFrontStreamingDistribution = 63, AWSLambdaFunction = 64, AWSElasticBeanstalkApplication = 65, AWSElasticBeanstalkApplicationVersion = 66, AWSElasticBeanstalkEnvironment = 67, AWSWAFv2WebACL = 68, AWSWAFv2RuleGroup = 69, AWSWAFv2IPSet = 70, AWSWAFv2RegexPatternSet = 71, AWSWAFv2ManagedRuleSet = 72, AWSXRayEncryptionConfig = 73, AWSSSMAssociationCompliance = 74, AWSSSMPatchCompliance = 75, AWSShieldProtection = 76, AWSShieldRegionalProtection = 77, AWSConfigResourceCompliance = 78, AWSApiGatewayStage = 79, AWSApiGatewayRestApi = 80, AWSApiGatewayV2Stage = 81, AWSApiGatewayV2Api = 82, AWSCodePipelinePipeline = 83, AWSServiceCatalogCloudFormationProvisionedProduct = 84, AWSServiceCatalogCloudFormationProduct = 85, AWSServiceCatalogPortfolio = 86, AWSSQSQueue = 87, AWSKMSKey = 88, AWSQLDBLedger = 89 }


	/** Filters the results by resource account ID, region, resource ID, and resource name. */
	export interface ResourceFilters {
		AccountId?: string | null;
		ResourceId?: string | null;
		ResourceName?: string | null;
		Region?: string | null;
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


	/** <p/> */
	export interface ListDiscoveredResourcesResponse {
		resourceIdentifiers?: Array<ResourceIdentifier>;
		nextToken?: string | null;
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


	/** The details that identify a resource that is discovered by AWS Config, including the resource type, ID, and (if available) the custom resource name. */
	export interface ResourceIdentifier {
		resourceType?: ResourceIdentifierResourceType | null;
		resourceId?: string | null;
		resourceName?: string | null;
		resourceDeletionTime?: Date | null;
	}

	/** The details that identify a resource that is discovered by AWS Config, including the resource type, ID, and (if available) the custom resource name. */
	export interface ResourceIdentifierFormProperties {
		resourceType: FormControl<ResourceIdentifierResourceType | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		resourceDeletionTime: FormControl<Date | null | undefined>,
	}
	export function CreateResourceIdentifierFormGroup() {
		return new FormGroup<ResourceIdentifierFormProperties>({
			resourceType: new FormControl<ResourceIdentifierResourceType | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceDeletionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ResourceIdentifierResourceType { AWSEC2CustomerGateway = 0, AWSEC2EIP = 1, AWSEC2Host = 2, AWSEC2Instance = 3, AWSEC2InternetGateway = 4, AWSEC2NetworkAcl = 5, AWSEC2NetworkInterface = 6, AWSEC2RouteTable = 7, AWSEC2SecurityGroup = 8, AWSEC2Subnet = 9, AWSCloudTrailTrail = 10, AWSEC2Volume = 11, AWSEC2VPC = 12, AWSEC2VPNConnection = 13, AWSEC2VPNGateway = 14, AWSEC2RegisteredHAInstance = 15, AWSEC2NatGateway = 16, AWSEC2EgressOnlyInternetGateway = 17, AWSEC2VPCEndpoint = 18, AWSEC2VPCEndpointService = 19, AWSEC2FlowLog = 20, AWSEC2VPCPeeringConnection = 21, AWSElasticsearchDomain = 22, AWSIAMGroup = 23, AWSIAMPolicy = 24, AWSIAMRole = 25, AWSIAMUser = 26, AWSElasticLoadBalancingV2LoadBalancer = 27, AWSACMCertificate = 28, AWSRDSDBInstance = 29, AWSRDSDBSubnetGroup = 30, AWSRDSDBSecurityGroup = 31, AWSRDSDBSnapshot = 32, AWSRDSDBCluster = 33, AWSRDSDBClusterSnapshot = 34, AWSRDSEventSubscription = 35, AWSS3Bucket = 36, AWSS3AccountPublicAccessBlock = 37, AWSRedshiftCluster = 38, AWSRedshiftClusterSnapshot = 39, AWSRedshiftClusterParameterGroup = 40, AWSRedshiftClusterSecurityGroup = 41, AWSRedshiftClusterSubnetGroup = 42, AWSRedshiftEventSubscription = 43, AWSSSMManagedInstanceInventory = 44, AWSCloudWatchAlarm = 45, AWSCloudFormationStack = 46, AWSElasticLoadBalancingLoadBalancer = 47, AWSAutoScalingAutoScalingGroup = 48, AWSAutoScalingLaunchConfiguration = 49, AWSAutoScalingScalingPolicy = 50, AWSAutoScalingScheduledAction = 51, AWSDynamoDBTable = 52, AWSCodeBuildProject = 53, AWSWAFRateBasedRule = 54, AWSWAFRule = 55, AWSWAFRuleGroup = 56, AWSWAFWebACL = 57, AWSWAFRegionalRateBasedRule = 58, AWSWAFRegionalRule = 59, AWSWAFRegionalRuleGroup = 60, AWSWAFRegionalWebACL = 61, AWSCloudFrontDistribution = 62, AWSCloudFrontStreamingDistribution = 63, AWSLambdaFunction = 64, AWSElasticBeanstalkApplication = 65, AWSElasticBeanstalkApplicationVersion = 66, AWSElasticBeanstalkEnvironment = 67, AWSWAFv2WebACL = 68, AWSWAFv2RuleGroup = 69, AWSWAFv2IPSet = 70, AWSWAFv2RegexPatternSet = 71, AWSWAFv2ManagedRuleSet = 72, AWSXRayEncryptionConfig = 73, AWSSSMAssociationCompliance = 74, AWSSSMPatchCompliance = 75, AWSShieldProtection = 76, AWSShieldRegionalProtection = 77, AWSConfigResourceCompliance = 78, AWSApiGatewayStage = 79, AWSApiGatewayRestApi = 80, AWSApiGatewayV2Stage = 81, AWSApiGatewayV2Api = 82, AWSCodePipelinePipeline = 83, AWSServiceCatalogCloudFormationProvisionedProduct = 84, AWSServiceCatalogCloudFormationProduct = 85, AWSServiceCatalogPortfolio = 86, AWSSQSQueue = 87, AWSKMSKey = 88, AWSQLDBLedger = 89 }


	/** <p/> */
	export interface ListDiscoveredResourcesRequest {
		resourceType: ListDiscoveredResourcesRequestResourceType;
		resourceIds?: Array<string>;
		resourceName?: string | null;
		limit?: number | null;
		includeDeletedResources?: boolean | null;
		nextToken?: string | null;
	}

	/** <p/> */
	export interface ListDiscoveredResourcesRequestFormProperties {
		resourceType: FormControl<ListDiscoveredResourcesRequestResourceType | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		limit: FormControl<number | null | undefined>,
		includeDeletedResources: FormControl<boolean | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDiscoveredResourcesRequestFormGroup() {
		return new FormGroup<ListDiscoveredResourcesRequestFormProperties>({
			resourceType: new FormControl<ListDiscoveredResourcesRequestResourceType | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			includeDeletedResources: new FormControl<boolean | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ListDiscoveredResourcesRequestResourceType { AWSEC2CustomerGateway = 0, AWSEC2EIP = 1, AWSEC2Host = 2, AWSEC2Instance = 3, AWSEC2InternetGateway = 4, AWSEC2NetworkAcl = 5, AWSEC2NetworkInterface = 6, AWSEC2RouteTable = 7, AWSEC2SecurityGroup = 8, AWSEC2Subnet = 9, AWSCloudTrailTrail = 10, AWSEC2Volume = 11, AWSEC2VPC = 12, AWSEC2VPNConnection = 13, AWSEC2VPNGateway = 14, AWSEC2RegisteredHAInstance = 15, AWSEC2NatGateway = 16, AWSEC2EgressOnlyInternetGateway = 17, AWSEC2VPCEndpoint = 18, AWSEC2VPCEndpointService = 19, AWSEC2FlowLog = 20, AWSEC2VPCPeeringConnection = 21, AWSElasticsearchDomain = 22, AWSIAMGroup = 23, AWSIAMPolicy = 24, AWSIAMRole = 25, AWSIAMUser = 26, AWSElasticLoadBalancingV2LoadBalancer = 27, AWSACMCertificate = 28, AWSRDSDBInstance = 29, AWSRDSDBSubnetGroup = 30, AWSRDSDBSecurityGroup = 31, AWSRDSDBSnapshot = 32, AWSRDSDBCluster = 33, AWSRDSDBClusterSnapshot = 34, AWSRDSEventSubscription = 35, AWSS3Bucket = 36, AWSS3AccountPublicAccessBlock = 37, AWSRedshiftCluster = 38, AWSRedshiftClusterSnapshot = 39, AWSRedshiftClusterParameterGroup = 40, AWSRedshiftClusterSecurityGroup = 41, AWSRedshiftClusterSubnetGroup = 42, AWSRedshiftEventSubscription = 43, AWSSSMManagedInstanceInventory = 44, AWSCloudWatchAlarm = 45, AWSCloudFormationStack = 46, AWSElasticLoadBalancingLoadBalancer = 47, AWSAutoScalingAutoScalingGroup = 48, AWSAutoScalingLaunchConfiguration = 49, AWSAutoScalingScalingPolicy = 50, AWSAutoScalingScheduledAction = 51, AWSDynamoDBTable = 52, AWSCodeBuildProject = 53, AWSWAFRateBasedRule = 54, AWSWAFRule = 55, AWSWAFRuleGroup = 56, AWSWAFWebACL = 57, AWSWAFRegionalRateBasedRule = 58, AWSWAFRegionalRule = 59, AWSWAFRegionalRuleGroup = 60, AWSWAFRegionalWebACL = 61, AWSCloudFrontDistribution = 62, AWSCloudFrontStreamingDistribution = 63, AWSLambdaFunction = 64, AWSElasticBeanstalkApplication = 65, AWSElasticBeanstalkApplicationVersion = 66, AWSElasticBeanstalkEnvironment = 67, AWSWAFv2WebACL = 68, AWSWAFv2RuleGroup = 69, AWSWAFv2IPSet = 70, AWSWAFv2RegexPatternSet = 71, AWSWAFv2ManagedRuleSet = 72, AWSXRayEncryptionConfig = 73, AWSSSMAssociationCompliance = 74, AWSSSMPatchCompliance = 75, AWSShieldProtection = 76, AWSShieldRegionalProtection = 77, AWSConfigResourceCompliance = 78, AWSApiGatewayStage = 79, AWSApiGatewayRestApi = 80, AWSApiGatewayV2Stage = 81, AWSApiGatewayV2Api = 82, AWSCodePipelinePipeline = 83, AWSServiceCatalogCloudFormationProvisionedProduct = 84, AWSServiceCatalogCloudFormationProduct = 85, AWSServiceCatalogPortfolio = 86, AWSSQSQueue = 87, AWSKMSKey = 88, AWSQLDBLedger = 89 }

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
		NextToken?: string | null;
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
		Key?: string | null;
		Value?: string | null;
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
		ResourceArn: string;
		Limit?: number | null;
		NextToken?: string | null;
	}
	export interface ListTagsForResourceRequestFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
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

	export interface PutAggregationAuthorizationResponse {

		/** An object that represents the authorizations granted to aggregator accounts and regions. */
		AggregationAuthorization?: AggregationAuthorization;
	}
	export interface PutAggregationAuthorizationResponseFormProperties {
	}
	export function CreatePutAggregationAuthorizationResponseFormGroup() {
		return new FormGroup<PutAggregationAuthorizationResponseFormProperties>({
		});

	}

	export interface PutAggregationAuthorizationRequest {
		AuthorizedAccountId: string;
		AuthorizedAwsRegion: string;
		Tags?: Array<Tag>;
	}
	export interface PutAggregationAuthorizationRequestFormProperties {
		AuthorizedAccountId: FormControl<string | null | undefined>,
		AuthorizedAwsRegion: FormControl<string | null | undefined>,
	}
	export function CreatePutAggregationAuthorizationRequestFormGroup() {
		return new FormGroup<PutAggregationAuthorizationRequestFormProperties>({
			AuthorizedAccountId: new FormControl<string | null | undefined>(undefined),
			AuthorizedAwsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutConfigRuleRequest {

		/**
		 * <p>An AWS Config rule represents an AWS Lambda function that you create for a custom rule or a predefined function for an AWS managed rule. The function evaluates configuration items to assess whether your AWS resources comply with your desired configurations. This function can run when AWS Config detects a configuration change to an AWS resource and at a periodic frequency that you choose (for example, every 24 hours).</p> <note> <p>You can use the AWS CLI and AWS SDKs if you want to create a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note> <p>For more information about developing and using AWS Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating AWS Resource Configurations with AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p>
		 * Required
		 */
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

		/** The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator. */
		ConfigurationAggregator?: ConfigurationAggregator;
	}
	export interface PutConfigurationAggregatorResponseFormProperties {
	}
	export function CreatePutConfigurationAggregatorResponseFormGroup() {
		return new FormGroup<PutConfigurationAggregatorResponseFormProperties>({
		});

	}

	export interface PutConfigurationAggregatorRequest {
		ConfigurationAggregatorName: string;
		AccountAggregationSources?: Array<AccountAggregationSource>;

		/** This object contains regions to set up the aggregator and an IAM role to retrieve organization details. */
		OrganizationAggregationSource?: OrganizationAggregationSource;
		Tags?: Array<Tag>;
	}
	export interface PutConfigurationAggregatorRequestFormProperties {
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
	}
	export function CreatePutConfigurationAggregatorRequestFormGroup() {
		return new FormGroup<PutConfigurationAggregatorRequestFormProperties>({
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * An object that represents the recording of configuration changes of an AWS resource.
		 * Required
		 */
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
		ConformancePackArn?: string | null;
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
		ConformancePackName: string;
		TemplateS3Uri?: string | null;
		TemplateBody?: string | null;
		DeliveryS3Bucket: string;
		DeliveryS3KeyPrefix?: string | null;
		ConformancePackInputParameters?: Array<ConformancePackInputParameter>;
	}
	export interface PutConformancePackRequestFormProperties {
		ConformancePackName: FormControl<string | null | undefined>,
		TemplateS3Uri: FormControl<string | null | undefined>,
		TemplateBody: FormControl<string | null | undefined>,
		DeliveryS3Bucket: FormControl<string | null | undefined>,
		DeliveryS3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreatePutConformancePackRequestFormGroup() {
		return new FormGroup<PutConformancePackRequestFormProperties>({
			ConformancePackName: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * The channel through which AWS Config delivers notifications and updated configuration states.
		 * Required
		 */
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


	/** Identifies an AWS resource and indicates whether it complies with the AWS Config rule that it was evaluated against. */
	export interface Evaluation {
		ComplianceResourceType: string;
		ComplianceResourceId: string;
		ComplianceType: ComplianceComplianceType;
		Annotation?: string | null;
		OrderingTimestamp: Date;
	}

	/** Identifies an AWS resource and indicates whether it complies with the AWS Config rule that it was evaluated against. */
	export interface EvaluationFormProperties {
		ComplianceResourceType: FormControl<string | null | undefined>,
		ComplianceResourceId: FormControl<string | null | undefined>,
		ComplianceType: FormControl<ComplianceComplianceType | null | undefined>,
		Annotation: FormControl<string | null | undefined>,
		OrderingTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateEvaluationFormGroup() {
		return new FormGroup<EvaluationFormProperties>({
			ComplianceResourceType: new FormControl<string | null | undefined>(undefined),
			ComplianceResourceId: new FormControl<string | null | undefined>(undefined),
			ComplianceType: new FormControl<ComplianceComplianceType | null | undefined>(undefined),
			Annotation: new FormControl<string | null | undefined>(undefined),
			OrderingTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface PutEvaluationsRequest {
		Evaluations?: Array<Evaluation>;
		ResultToken: string;
		TestMode?: boolean | null;
	}

	/** <p/> */
	export interface PutEvaluationsRequestFormProperties {
		ResultToken: FormControl<string | null | undefined>,
		TestMode: FormControl<boolean | null | undefined>,
	}
	export function CreatePutEvaluationsRequestFormGroup() {
		return new FormGroup<PutEvaluationsRequestFormProperties>({
			ResultToken: new FormControl<string | null | undefined>(undefined),
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

	export interface PutOrganizationConfigRuleResponse {
		OrganizationConfigRuleArn?: string | null;
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
		OrganizationConfigRuleName: string;

		/** An object that specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. */
		OrganizationManagedRuleMetadata?: OrganizationManagedRuleMetadata;

		/** An object that specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lamdba function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic. */
		OrganizationCustomRuleMetadata?: OrganizationCustomRuleMetadata;
		ExcludedAccounts?: Array<string>;
	}
	export interface PutOrganizationConfigRuleRequestFormProperties {
		OrganizationConfigRuleName: FormControl<string | null | undefined>,
	}
	export function CreatePutOrganizationConfigRuleRequestFormGroup() {
		return new FormGroup<PutOrganizationConfigRuleRequestFormProperties>({
			OrganizationConfigRuleName: new FormControl<string | null | undefined>(undefined),
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
		OrganizationConformancePackArn?: string | null;
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
		OrganizationConformancePackName: string;
		TemplateS3Uri?: string | null;
		TemplateBody?: string | null;
		DeliveryS3Bucket: string;
		DeliveryS3KeyPrefix?: string | null;
		ConformancePackInputParameters?: Array<ConformancePackInputParameter>;
		ExcludedAccounts?: Array<string>;
	}
	export interface PutOrganizationConformancePackRequestFormProperties {
		OrganizationConformancePackName: FormControl<string | null | undefined>,
		TemplateS3Uri: FormControl<string | null | undefined>,
		TemplateBody: FormControl<string | null | undefined>,
		DeliveryS3Bucket: FormControl<string | null | undefined>,
		DeliveryS3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreatePutOrganizationConformancePackRequestFormGroup() {
		return new FormGroup<PutOrganizationConformancePackRequestFormProperties>({
			OrganizationConformancePackName: new FormControl<string | null | undefined>(undefined),
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
		FailureMessage?: string | null;
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
		FailureMessage?: string | null;
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
		ConfigRuleName: string;
		ResourceKeys: Array<RemediationExceptionResourceKey>;
		Message?: string | null;
		ExpirationTime?: Date | null;
	}
	export interface PutRemediationExceptionsRequestFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		ExpirationTime: FormControl<Date | null | undefined>,
	}
	export function CreatePutRemediationExceptionsRequestFormGroup() {
		return new FormGroup<PutRemediationExceptionsRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			ExpirationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PutResourceConfigRequest {
		ResourceType: string;
		SchemaVersionId: string;
		ResourceId: string;
		ResourceName?: string | null;
		Configuration: string;
		Tags?: Tags;
	}
	export interface PutResourceConfigRequestFormProperties {
		ResourceType: FormControl<string | null | undefined>,
		SchemaVersionId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
		Configuration: FormControl<string | null | undefined>,
	}
	export function CreatePutResourceConfigRequestFormGroup() {
		return new FormGroup<PutResourceConfigRequestFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
			SchemaVersionId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
			Configuration: new FormControl<string | null | undefined>(undefined),
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

		/** An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in AWS Config. */
		RetentionConfiguration?: RetentionConfiguration;
	}
	export interface PutRetentionConfigurationResponseFormProperties {
	}
	export function CreatePutRetentionConfigurationResponseFormGroup() {
		return new FormGroup<PutRetentionConfigurationResponseFormProperties>({
		});

	}

	export interface PutRetentionConfigurationRequest {
		RetentionPeriodInDays: number;
	}
	export interface PutRetentionConfigurationRequestFormProperties {
		RetentionPeriodInDays: FormControl<number | null | undefined>,
	}
	export function CreatePutRetentionConfigurationRequestFormGroup() {
		return new FormGroup<PutRetentionConfigurationRequestFormProperties>({
			RetentionPeriodInDays: new FormControl<number | null | undefined>(undefined),
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

	export interface SelectAggregateResourceConfigResponse {
		Results?: Array<string>;

		/** Details about the query. */
		QueryInfo?: QueryInfo;
		NextToken?: string | null;
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
		Name?: string | null;
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
		Expression: string;
		ConfigurationAggregatorName: string;
		Limit?: number | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface SelectAggregateResourceConfigRequestFormProperties {
		Expression: FormControl<string | null | undefined>,
		ConfigurationAggregatorName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSelectAggregateResourceConfigRequestFormGroup() {
		return new FormGroup<SelectAggregateResourceConfigRequestFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined),
			ConfigurationAggregatorName: new FormControl<string | null | undefined>(undefined),
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

		/** Details about the query. */
		QueryInfo?: QueryInfo;
		NextToken?: string | null;
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
		Expression: string;
		Limit?: number | null;
		NextToken?: string | null;
	}
	export interface SelectResourceConfigRequestFormProperties {
		Expression: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSelectResourceConfigRequestFormGroup() {
		return new FormGroup<SelectResourceConfigRequestFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output when you start the evaluation for the specified AWS Config rule. */
	export interface StartConfigRulesEvaluationResponse {
	}

	/** The output when you start the evaluation for the specified AWS Config rule. */
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
		ConfigurationRecorderName: string;
	}

	/** The input for the <a>StartConfigurationRecorder</a> action. */
	export interface StartConfigurationRecorderRequestFormProperties {
		ConfigurationRecorderName: FormControl<string | null | undefined>,
	}
	export function CreateStartConfigurationRecorderRequestFormGroup() {
		return new FormGroup<StartConfigurationRecorderRequestFormProperties>({
			ConfigurationRecorderName: new FormControl<string | null | undefined>(undefined),
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
		FailureMessage?: string | null;
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
		ConfigRuleName: string;
		ResourceKeys: Array<ResourceKey>;
	}
	export interface StartRemediationExecutionRequestFormProperties {
		ConfigRuleName: FormControl<string | null | undefined>,
	}
	export function CreateStartRemediationExecutionRequestFormGroup() {
		return new FormGroup<StartRemediationExecutionRequestFormProperties>({
			ConfigRuleName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the <a>StopConfigurationRecorder</a> action. */
	export interface StopConfigurationRecorderRequest {
		ConfigurationRecorderName: string;
	}

	/** The input for the <a>StopConfigurationRecorder</a> action. */
	export interface StopConfigurationRecorderRequestFormProperties {
		ConfigurationRecorderName: FormControl<string | null | undefined>,
	}
	export function CreateStopConfigurationRecorderRequestFormGroup() {
		return new FormGroup<StopConfigurationRecorderRequestFormProperties>({
			ConfigurationRecorderName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
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

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AggregatedSourceType { ACCOUNT = 0, ORGANIZATION = 1 }

	export enum ConfigurationItemStatus { OK = 0, ResourceDiscovered = 1, ResourceNotRecorded = 2, ResourceDeleted = 3, ResourceDeletedNotRecorded = 4 }

	export enum ChronologicalOrder { Reverse = 0, Forward = 1 }

	export enum DeliveryStatus { Success = 0, Failure = 1, Not_Applicable = 2 }

	export enum MaximumExecutionFrequency { One_Hour = 0, Three_Hours = 1, Six_Hours = 2, Twelve_Hours = 3, TwentyFour_Hours = 4 }

	export enum ConfigRuleState { ACTIVE = 0, DELETING = 1, DELETING_RESULTS = 2, EVALUATING = 3 }

	export enum ConfigRuleComplianceSummaryGroupKey { ACCOUNT_ID = 0, AWS_REGION = 1 }

	export enum RecorderStatus { Pending = 0, Success = 1, Failure = 2 }

	export enum ConformancePackComplianceType { COMPLIANT = 0, NON_COMPLIANT = 1 }

	export enum ConformancePackState { CREATE_IN_PROGRESS = 0, CREATE_COMPLETE = 1, CREATE_FAILED = 2, DELETE_IN_PROGRESS = 3, DELETE_FAILED = 4 }

	export enum EventSource { aws_config = 0 }

	export enum ResourceCountGroupKey { RESOURCE_TYPE = 0, ACCOUNT_ID = 1, AWS_REGION = 2 }

	export enum MemberAccountRuleStatus { CREATE_SUCCESSFUL = 0, CREATE_IN_PROGRESS = 1, CREATE_FAILED = 2, DELETE_SUCCESSFUL = 3, DELETE_FAILED = 4, DELETE_IN_PROGRESS = 5, UPDATE_SUCCESSFUL = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8 }

	export enum MessageType { ConfigurationItemChangeNotification = 0, ConfigurationSnapshotDeliveryCompleted = 1, ScheduledNotification = 2, OversizedConfigurationItemChangeNotification = 3 }

	export enum OrganizationRuleStatus { CREATE_SUCCESSFUL = 0, CREATE_IN_PROGRESS = 1, CREATE_FAILED = 2, DELETE_SUCCESSFUL = 3, DELETE_FAILED = 4, DELETE_IN_PROGRESS = 5, UPDATE_SUCCESSFUL = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8 }

	export enum OrganizationResourceDetailedStatus { CREATE_SUCCESSFUL = 0, CREATE_IN_PROGRESS = 1, CREATE_FAILED = 2, DELETE_SUCCESSFUL = 3, DELETE_FAILED = 4, DELETE_IN_PROGRESS = 5, UPDATE_SUCCESSFUL = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8 }

	export enum OrganizationResourceStatus { CREATE_SUCCESSFUL = 0, CREATE_IN_PROGRESS = 1, CREATE_FAILED = 2, DELETE_SUCCESSFUL = 3, DELETE_FAILED = 4, DELETE_IN_PROGRESS = 5, UPDATE_SUCCESSFUL = 6, UPDATE_IN_PROGRESS = 7, UPDATE_FAILED = 8 }

	export enum Owner { CUSTOM_LAMBDA = 0, AWS = 1 }

	export enum RemediationTargetType { SSM_DOCUMENT = 0 }

	export enum RemediationExecutionState { QUEUED = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3 }


	/** The dynamic value of the resource. */
	export interface ResourceValue {
		Value: ResourceValueValue;
	}

	/** The dynamic value of the resource. */
	export interface ResourceValueFormProperties {
		Value: FormControl<ResourceValueValue | null | undefined>,
	}
	export function CreateResourceValueFormGroup() {
		return new FormGroup<ResourceValueFormProperties>({
			Value: new FormControl<ResourceValueValue | null | undefined>(undefined),
		});

	}

	export enum ResourceValueValue { RESOURCE_ID = 0 }


	/** The static value of the resource. */
	export interface StaticValue {
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

		/** The dynamic value of the resource. */
		ResourceValue?: ResourceValue;

		/** The static value of the resource. */
		StaticValue?: StaticValue;
	}

	/** The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value. */
	export interface RemediationParameterValueFormProperties {
	}
	export function CreateRemediationParameterValueFormGroup() {
		return new FormGroup<RemediationParameterValueFormProperties>({
		});

	}

	export enum ResourceValueType { RESOURCE_ID = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Returns the current configuration items for resources that are present in your AWS Config aggregator. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty <code>unprocessedResourceIdentifiers</code> list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return tags and relationships.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig
		 * @return {BatchGetAggregateResourceConfigResponse} Success
		 */
		BatchGetAggregateResourceConfig(requestBody: BatchGetAggregateResourceConfigRequest): Observable<BatchGetAggregateResourceConfigResponse> {
			return this.http.post<BatchGetAggregateResourceConfigResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the current configuration for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.</p> </li> </ul> </note>
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
		 * <p>Deletes the specified AWS Config rule and all of its evaluation results.</p> <p>AWS Config sets the state of a rule to <code>DELETING</code> until the deletion is complete. You cannot update a rule while it is in this state. If you make a <code>PutConfigRule</code> or <code>DeleteConfigRule</code> request for the rule, you will receive a <code>ResourceInUseException</code>.</p> <p>You can check the state of a rule by using the <code>DescribeConfigRules</code> request.</p>
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
		 * <p>Deletes the configuration recorder.</p> <p>After the configuration recorder is deleted, AWS Config will not record resource configuration changes until you create a new configuration recorder.</p> <p>This action does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the <code>GetResourceConfigHistory</code> action, but you will not be able to access this information in the AWS Config console until you create a new configuration recorder.</p>
		 * Post #X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder
		 * @return {void} Success
		 */
		DeleteConfigurationRecorder(requestBody: DeleteConfigurationRecorderRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified conformance pack and all the AWS Config rules, remediation actions, and all evaluation results within that conformance pack.</p> <p>AWS Config sets the conformance pack to <code>DELETE_IN_PROGRESS</code> until the deletion is complete. You cannot update a conformance pack while it is in this state.</p>
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
		 * Deletes the evaluation results for the specified AWS Config rule. You can specify one AWS Config rule per request. After you delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating your AWS resources against the rule.
		 * Post #X-Amz-Target=StarlingDoveService.DeleteEvaluationResults
		 * @return {DeleteEvaluationResultsResponse} Success
		 */
		DeleteEvaluationResults(requestBody: DeleteEvaluationResultsRequest): Observable<DeleteEvaluationResultsResponse> {
			return this.http.post<DeleteEvaluationResultsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified organization config rule and all of its evaluation results from all member accounts in that organization. Only a master account can delete an organization config rule.</p> <p>AWS Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a rule while it is in this state.</p>
		 * Post #X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule
		 * @return {void} Success
		 */
		DeleteOrganizationConfigRule(requestBody: DeleteOrganizationConfigRuleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified organization conformance pack and all of the config rules and remediation actions from all member accounts in that organization. Only a master account can delete an organization conformance pack.</p> <p>AWS Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state. </p>
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
		 * Deletes one or more remediation exceptions mentioned in the resource keys.
		 * Post #X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions
		 * @return {DeleteRemediationExceptionsResponse} Success
		 */
		DeleteRemediationExceptions(requestBody: DeleteRemediationExceptionsRequest): Observable<DeleteRemediationExceptionsResponse> {
			return this.http.post<DeleteRemediationExceptionsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Records the configuration state for a custom resource that has been deleted. This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your AWS Config History.
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
		 * <p>Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, AWS Config sends the following notifications using an Amazon SNS topic that you have specified.</p> <ul> <li> <p>Notification of the start of the delivery.</p> </li> <li> <p>Notification of the completion of the delivery, if the delivery was successfully completed.</p> </li> <li> <p>Notification of delivery failure, if the delivery failed.</p> </li> </ul>
		 * Post #X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot
		 * @return {DeliverConfigSnapshotResponse} Success
		 */
		DeliverConfigSnapshot(requestBody: DeliverConfigSnapshotRequest): Observable<DeliverConfigSnapshotResponse> {
			return this.http.post<DeliverConfigSnapshotResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules. </p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules
		 * @return {DescribeAggregateComplianceByConfigRulesResponse} Success
		 */
		DescribeAggregateComplianceByConfigRules(requestBody: DescribeAggregateComplianceByConfigRulesRequest): Observable<DescribeAggregateComplianceByConfigRulesResponse> {
			return this.http.post<DescribeAggregateComplianceByConfigRulesResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of authorizations granted to various aggregator accounts and regions.
		 * Post #X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations
		 * @return {DescribeAggregationAuthorizationsResponse} Success
		 */
		DescribeAggregationAuthorizations(requestBody: DescribeAggregationAuthorizationsRequest): Observable<DescribeAggregationAuthorizationsResponse> {
			return this.http.post<DescribeAggregationAuthorizationsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Indicates whether the specified AWS Config rules are compliant. If a rule is noncompliant, this action returns the number of AWS resources that do not comply with the rule.</p> <p>A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply.</p> <p>If AWS Config has no current evaluation results for the rule, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions:</p> <ul> <li> <p>AWS Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's AWS Lambda function is failing to send evaluation results to AWS Config. Verify that the role you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the AWS Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's AWS Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule
		 * @return {DescribeComplianceByConfigRuleResponse} Success
		 */
		DescribeComplianceByConfigRule(requestBody: DescribeComplianceByConfigRuleRequest): Observable<DescribeComplianceByConfigRuleResponse> {
			return this.http.post<DescribeComplianceByConfigRuleResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Indicates whether the specified AWS resources are compliant. If a resource is noncompliant, this action returns the number of AWS Config rules that the resource does not comply with.</p> <p>A resource is compliant if it complies with all the AWS Config rules that evaluate it. It is noncompliant if it does not comply with one or more of these rules.</p> <p>If AWS Config has no current evaluation results for the resource, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions about the rules that evaluate the resource:</p> <ul> <li> <p>AWS Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's AWS Lambda function is failing to send evaluation results to AWS Config. Verify that the role that you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the AWS Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's AWS Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeComplianceByResource
		 * @return {DescribeComplianceByResourceResponse} Success
		 */
		DescribeComplianceByResource(requestBody: DescribeComplianceByResourceRequest): Observable<DescribeComplianceByResourceResponse> {
			return this.http.post<DescribeComplianceByResourceResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns status information for each of your AWS managed Config rules. The status includes information such as the last time AWS Config invoked the rule, the last time AWS Config failed to invoke the rule, and the related error for the last failure.
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus
		 * @return {DescribeConfigRuleEvaluationStatusResponse} Success
		 */
		DescribeConfigRuleEvaluationStatus(requestBody: DescribeConfigRuleEvaluationStatusRequest): Observable<DescribeConfigRuleEvaluationStatusResponse> {
			return this.http.post<DescribeConfigRuleEvaluationStatusResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns details about your AWS Config rules.
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConfigRules
		 * @return {DescribeConfigRulesResponse} Success
		 */
		DescribeConfigRules(requestBody: DescribeConfigRulesRequest): Observable<DescribeConfigRulesResponse> {
			return this.http.post<DescribeConfigRulesResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConfigRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns status information for sources within an aggregator. The status includes information about the last time AWS Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message.
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus
		 * @return {DescribeConfigurationAggregatorSourcesStatusResponse} Success
		 */
		DescribeConfigurationAggregatorSourcesStatus(requestBody: DescribeConfigurationAggregatorSourcesStatusRequest): Observable<DescribeConfigurationAggregatorSourcesStatusResponse> {
			return this.http.post<DescribeConfigurationAggregatorSourcesStatusResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this action returns the details for all the configuration aggregators associated with the account.
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators
		 * @return {DescribeConfigurationAggregatorsResponse} Success
		 */
		DescribeConfigurationAggregators(requestBody: DescribeConfigurationAggregatorsRequest): Observable<DescribeConfigurationAggregatorsResponse> {
			return this.http.post<DescribeConfigurationAggregatorsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the current status of the specified configuration recorder. If a configuration recorder is not specified, this action returns the status of all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus
		 * @return {DescribeConfigurationRecorderStatusResponse} Success
		 */
		DescribeConfigurationRecorderStatus(requestBody: DescribeConfigurationRecorderStatusRequest): Observable<DescribeConfigurationRecorderStatusResponse> {
			return this.http.post<DescribeConfigurationRecorderStatusResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the details for the specified configuration recorders. If the configuration recorder is not specified, this action returns the details for all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders
		 * @return {DescribeConfigurationRecordersResponse} Success
		 */
		DescribeConfigurationRecorders(requestBody: DescribeConfigurationRecordersRequest): Observable<DescribeConfigurationRecordersResponse> {
			return this.http.post<DescribeConfigurationRecordersResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns compliance details for each rule in that conformance pack.</p> <note> <p>You must provide exact rule names.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance
		 * @return {DescribeConformancePackComplianceResponse} Success
		 */
		DescribeConformancePackCompliance(requestBody: DescribeConformancePackComplianceRequest): Observable<DescribeConformancePackComplianceResponse> {
			return this.http.post<DescribeConformancePackComplianceResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides one or more conformance packs deployment status.</p> <note> <p>If there are no conformance packs then you will see an empty result.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus
		 * @return {DescribeConformancePackStatusResponse} Success
		 */
		DescribeConformancePackStatus(requestBody: DescribeConformancePackStatusRequest): Observable<DescribeConformancePackStatusResponse> {
			return this.http.post<DescribeConformancePackStatusResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of one or more conformance packs.
		 * Post #X-Amz-Target=StarlingDoveService.DescribeConformancePacks
		 * @return {DescribeConformancePacksResponse} Success
		 */
		DescribeConformancePacks(requestBody: DescribeConformancePacksRequest): Observable<DescribeConformancePacksResponse> {
			return this.http.post<DescribeConformancePacksResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeConformancePacks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Provides organization config rule deployment status for an organization.</p> <note> <p>The status is not considered successful until organization config rule is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization config rule names. It is only applicable, when you request all the organization config rules.</p> <p>Only a master account can call this API.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses
		 * @return {DescribeOrganizationConfigRuleStatusesResponse} Success
		 */
		DescribeOrganizationConfigRuleStatuses(requestBody: DescribeOrganizationConfigRuleStatusesRequest): Observable<DescribeOrganizationConfigRuleStatusesResponse> {
			return this.http.post<DescribeOrganizationConfigRuleStatusesResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of organization config rules.</p> <note> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization config rule names. It is only applicable, when you request all the organization config rules.</p> <p>Only a master account can call this API.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules
		 * @return {DescribeOrganizationConfigRulesResponse} Success
		 */
		DescribeOrganizationConfigRules(requestBody: DescribeOrganizationConfigRulesRequest): Observable<DescribeOrganizationConfigRulesResponse> {
			return this.http.post<DescribeOrganizationConfigRulesResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides organization conformance pack deployment status for an organization.</p> <note> <p>The status is not considered successful until organization conformance pack is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization conformance pack names. They are only applicable, when you request all the organization conformance packs.</p> <p>Only a master account can call this API.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses
		 * @return {DescribeOrganizationConformancePackStatusesResponse} Success
		 */
		DescribeOrganizationConformancePackStatuses(requestBody: DescribeOrganizationConformancePackStatusesRequest): Observable<DescribeOrganizationConformancePackStatusesResponse> {
			return this.http.post<DescribeOrganizationConformancePackStatusesResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of organization conformance packs.</p> <note> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable, when you request all the organization conformance packs. </p> <p>Only a master account can call this API.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks
		 * @return {DescribeOrganizationConformancePacksResponse} Success
		 */
		DescribeOrganizationConformancePacks(requestBody: DescribeOrganizationConformancePacksRequest): Observable<DescribeOrganizationConformancePacksResponse> {
			return this.http.post<DescribeOrganizationConformancePacksResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all pending aggregation requests.
		 * Post #X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests
		 * @return {DescribePendingAggregationRequestsResponse} Success
		 */
		DescribePendingAggregationRequests(requestBody: DescribePendingAggregationRequestsRequest): Observable<DescribePendingAggregationRequestsResponse> {
			return this.http.post<DescribePendingAggregationRequestsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted. When you specify the limit and the next token, you receive a paginated response. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p> </note>
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
		 * <p>Returns the details of one or more retention configurations. If the retention configuration name is not specified, this action returns the details for all the retention configurations for that account.</p> <note> <p>Currently, AWS Config supports only one retention configuration per region in your account.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations
		 * @return {DescribeRetentionConfigurationsResponse} Success
		 */
		DescribeRetentionConfigurations(requestBody: DescribeRetentionConfigurationsRequest): Observable<DescribeRetentionConfigurationsResponse> {
			return this.http.post<DescribeRetentionConfigurationsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the evaluation results for the specified AWS Config rule for a specific resource in a rule. The results indicate which AWS resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule. </p> <note> <p>The results can return an empty result page. But if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule
		 * @return {GetAggregateComplianceDetailsByConfigRuleResponse} Success
		 */
		GetAggregateComplianceDetailsByConfigRule(requestBody: GetAggregateComplianceDetailsByConfigRuleRequest): Observable<GetAggregateComplianceDetailsByConfigRuleResponse> {
			return this.http.post<GetAggregateComplianceDetailsByConfigRuleResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary
		 * @return {GetAggregateConfigRuleComplianceSummaryResponse} Success
		 */
		GetAggregateConfigRuleComplianceSummary(requestBody: GetAggregateConfigRuleComplianceSummaryRequest): Observable<GetAggregateConfigRuleComplianceSummaryResponse> {
			return this.http.post<GetAggregateConfigRuleComplianceSummaryResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the resource counts across accounts and regions that are present in your AWS Config aggregator. You can request the resource counts by providing filters and GroupByKey.</p> <p>For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.</p>
		 * Post #X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts
		 * @return {GetAggregateDiscoveredResourceCountsResponse} Success
		 */
		GetAggregateDiscoveredResourceCounts(requestBody: GetAggregateDiscoveredResourceCountsRequest): Observable<GetAggregateDiscoveredResourceCountsResponse> {
			return this.http.post<GetAggregateDiscoveredResourceCountsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Returns the evaluation results for the specified AWS Config rule. The results indicate which AWS resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.
		 * Post #X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule
		 * @return {GetComplianceDetailsByConfigRuleResponse} Success
		 */
		GetComplianceDetailsByConfigRule(requestBody: GetComplianceDetailsByConfigRuleRequest): Observable<GetComplianceDetailsByConfigRuleResponse> {
			return this.http.post<GetComplianceDetailsByConfigRuleResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the evaluation results for the specified AWS resource. The results indicate which AWS Config rules were used to evaluate the resource, when each rule was last used, and whether the resource complies with each rule.
		 * Post #X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource
		 * @return {GetComplianceDetailsByResourceResponse} Success
		 */
		GetComplianceDetailsByResource(requestBody: GetComplianceDetailsByResourceRequest): Observable<GetComplianceDetailsByResourceResponse> {
			return this.http.post<GetComplianceDetailsByResourceResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the number of AWS Config rules that are compliant and noncompliant, up to a maximum of 25 for each.
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
		 * Returns compliance details of a conformance pack for all AWS resources that are monitered by conformance pack.
		 * Post #X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails
		 * @return {GetConformancePackComplianceDetailsResponse} Success
		 */
		GetConformancePackComplianceDetails(requestBody: GetConformancePackComplianceDetailsRequest): Observable<GetConformancePackComplianceDetailsResponse> {
			return this.http.post<GetConformancePackComplianceDetailsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.
		 * Post #X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary
		 * @return {GetConformancePackComplianceSummaryResponse} Success
		 */
		GetConformancePackComplianceSummary(requestBody: GetConformancePackComplianceSummaryRequest): Observable<GetConformancePackComplianceSummaryResponse> {
			return this.http.post<GetConformancePackComplianceSummaryResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the resource types, the number of each resource type, and the total number of resources that AWS Config is recording in this region for your AWS account. </p> <p class="title"> <b>Example</b> </p> <ol> <li> <p>AWS Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets.</p> </li> <li> <p>You make a call to the <code>GetDiscoveredResourceCounts</code> action and specify that you want all resource types. </p> </li> <li> <p>AWS Config returns the following:</p> <ul> <li> <p>The resource types (EC2 instances, IAM users, and S3 buckets).</p> </li> <li> <p>The number of each resource type (25, 20, and 15).</p> </li> <li> <p>The total number of all resources (60).</p> </li> </ul> </li> </ol> <p>The response is paginated. By default, AWS Config lists 100 <a>ResourceCount</a> objects on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might not immediately receive resource counts in the following situations:</p> <ul> <li> <p>You are a new AWS Config customer.</p> </li> <li> <p>You just enabled resource recording.</p> </li> </ul> <p>It might take a few minutes for AWS Config to record and count your resources. Wait a few minutes and then retry the <a>GetDiscoveredResourceCounts</a> action. </p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts
		 * @return {GetDiscoveredResourceCountsResponse} Success
		 */
		GetDiscoveredResourceCounts(requestBody: GetDiscoveredResourceCountsRequest): Observable<GetDiscoveredResourceCountsResponse> {
			return this.http.post<GetDiscoveredResourceCountsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns detailed status for each member account within an organization for a given organization config rule.</p> <note> <p>Only a master account can call this API.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus
		 * @return {GetOrganizationConfigRuleDetailedStatusResponse} Success
		 */
		GetOrganizationConfigRuleDetailedStatus(requestBody: GetOrganizationConfigRuleDetailedStatusRequest): Observable<GetOrganizationConfigRuleDetailedStatusResponse> {
			return this.http.post<GetOrganizationConfigRuleDetailedStatusResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns detailed status for each member account within an organization for a given organization conformance pack.</p> <p>Only a master account can call this API.</p>
		 * Post #X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus
		 * @return {GetOrganizationConformancePackDetailedStatusResponse} Success
		 */
		GetOrganizationConformancePackDetailedStatus(requestBody: GetOrganizationConformancePackDetailedStatusRequest): Observable<GetOrganizationConformancePackDetailedStatusResponse> {
			return this.http.post<GetOrganizationConformancePackDetailedStatusResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of configuration items for the specified resource. The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your <code>ConfigurationItems</code> between a minimum of 30 days and a maximum of 7 years (2557 days), AWS Config returns the <code>ConfigurationItems</code> for the specified retention period. </p> <p>The response is paginated. By default, AWS Config returns a limit of 10 configuration items per page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified <code>limit</code>. In such cases, you can make another call, using the <code>nextToken</code>.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.GetResourceConfigHistory
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetResourceConfigHistoryResponse} Success
		 */
		GetResourceConfigHistory(limit: string | null | undefined, nextToken: string | null | undefined, requestBody: GetResourceConfigHistoryRequest): Observable<GetResourceConfigHistoryResponse> {
			return this.http.post<GetResourceConfigHistoryResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions. A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region. You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p> <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>
		 * Post #X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources
		 * @return {ListAggregateDiscoveredResourcesResponse} Success
		 */
		ListAggregateDiscoveredResources(requestBody: ListAggregateDiscoveredResourcesRequest): Observable<ListAggregateDiscoveredResourcesResponse> {
			return this.http.post<ListAggregateDiscoveredResourcesResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Accepts a resource type and returns a list of resource identifiers for the resources of that type. A resource identifier includes the resource type, ID, and (if available) the custom resource name. The results consist of resources that AWS Config has discovered, including those that AWS Config is not currently recording. You can narrow the results to include only resources that have specific resource IDs or a resource name.</p> <note> <p>You can specify either resource IDs or a resource name, but not both, in the same request.</p> </note> <p>The response is paginated. By default, AWS Config lists 100 resource identifiers on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p>
		 * Post #X-Amz-Target=StarlingDoveService.ListDiscoveredResources
		 * @return {ListDiscoveredResourcesResponse} Success
		 */
		ListDiscoveredResources(requestBody: ListDiscoveredResourcesRequest): Observable<ListDiscoveredResourcesResponse> {
			return this.http.post<ListDiscoveredResourcesResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.ListDiscoveredResources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the tags for AWS Config resource.
		 * Post #X-Amz-Target=StarlingDoveService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Authorizes the aggregator account and region to collect data from the source account and region.
		 * Post #X-Amz-Target=StarlingDoveService.PutAggregationAuthorization
		 * @return {PutAggregationAuthorizationResponse} Success
		 */
		PutAggregationAuthorization(requestBody: PutAggregationAuthorizationRequest): Observable<PutAggregationAuthorizationResponse> {
			return this.http.post<PutAggregationAuthorizationResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or updates an AWS Config rule for evaluating whether your AWS resources comply with your desired configurations.</p> <p>You can use this action for custom AWS Config rules and AWS managed Config rules. A custom AWS Config rule is a rule that you develop and maintain. An AWS managed Config rule is a customizable, predefined rule that AWS Config provides.</p> <p>If you are adding a new custom AWS Config rule, you must first create the AWS Lambda function that the rule invokes to evaluate your resources. When you use the <code>PutConfigRule</code> action to add the rule to AWS Config, you must specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function. Specify the ARN for the <code>SourceIdentifier</code> key. This key is part of the <code>Source</code> object, which is part of the <code>ConfigRule</code> object. </p> <p>If you are adding an AWS managed Config rule, specify the rule's identifier for the <code>SourceIdentifier</code> key. To reference AWS managed Config rule identifiers, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">About AWS Managed Config Rules</a>.</p> <p>For any new rule that you add, specify the <code>ConfigRuleName</code> in the <code>ConfigRule</code> object. Do not specify the <code>ConfigRuleArn</code> or the <code>ConfigRuleId</code>. These values are generated by AWS Config for new rules.</p> <p>If you are updating a rule that you added previously, you can specify the rule by <code>ConfigRuleName</code>, <code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the <code>ConfigRule</code> data type that you use in this request.</p> <p>The maximum number of rules that AWS Config supports is 150.</p> <p>For information about requesting a rule limit increase, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_config">AWS Config Limits</a> in the <i>AWS General Reference Guide</i>.</p> <p>For more information about developing and using AWS Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating AWS Resource Configurations with AWS Config</a> in the <i>AWS Config Developer Guide</i>.</p>
		 * Post #X-Amz-Target=StarlingDoveService.PutConfigRule
		 * @return {void} Success
		 */
		PutConfigRule(requestBody: PutConfigRuleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutConfigRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.</p> <note> <p>AWS Config should be enabled in source accounts and regions you want to aggregate.</p> <p>If your source type is an organization, you must be signed in to the master account and all features must be enabled in your organization. AWS Config calls <code>EnableAwsServiceAccess</code> API to enable integration between AWS Config and AWS Organizations. </p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutConfigurationAggregator
		 * @return {PutConfigurationAggregatorResponse} Success
		 */
		PutConfigurationAggregator(requestBody: PutConfigurationAggregatorRequest): Observable<PutConfigurationAggregatorResponse> {
			return this.http.post<PutConfigurationAggregatorResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new configuration recorder to record the selected resource configurations.</p> <p>You can use this action to change the role <code>roleARN</code> or the <code>recordingGroup</code> of an existing recorder. To change the role, call the action on the existing configuration recorder and specify a role.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> <p>If <code>ConfigurationRecorder</code> does not have the <b>recordingGroup</b> parameter specified, the default is to record all supported resource types.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutConfigurationRecorder
		 * @return {void} Success
		 */
		PutConfigurationRecorder(requestBody: PutConfigurationRecorderRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates a conformance pack. A conformance pack is a collection of AWS Config rules that can be easily deployed in an account and a region and across AWS Organization.</p> <p>This API creates a service linked role <code>AWSServiceRoleForConfigConforms</code> in your account. The service linked role is created only when the role does not exist in your account. AWS Config verifies the existence of role with <code>GetRole</code> action.</p> <note> <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both. If you provide both AWS Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p> </note>
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
		 * Used by an AWS Lambda function to deliver evaluation results to AWS Config. This action is required in every AWS Lambda function that is invoked by an AWS Config rule.
		 * Post #X-Amz-Target=StarlingDoveService.PutEvaluations
		 * @return {PutEvaluationsResponse} Success
		 */
		PutEvaluations(requestBody: PutEvaluationsRequest): Observable<PutEvaluationsResponse> {
			return this.http.post<PutEvaluationsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutEvaluations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or updates organization config rule for your entire organization evaluating whether your AWS resources comply with your desired configurations. Only a master account can create or update an organization config rule.</p> <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the master account of your organization. The service linked role is created only when the role does not exist in the master account. AWS Config verifies the existence of role with <code>GetRole</code> action.</p> <p>You can use this action to create both custom AWS Config rules and AWS managed Config rules. If you are adding a new custom AWS Config rule, you must first create AWS Lambda function in the master account that the rule invokes to evaluate your resources. When you use the <code>PutOrganizationConfigRule</code> action to add the rule to AWS Config, you must specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function. If you are adding an AWS managed Config rule, specify the rule's identifier for the <code>RuleIdentifier</code> key.</p> <p>The maximum number of organization config rules that AWS Config supports is 150.</p> <note> <p>Specify either <code>OrganizationCustomRuleMetadata</code> or <code>OrganizationManagedRuleMetadata</code>.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule
		 * @return {PutOrganizationConfigRuleResponse} Success
		 */
		PutOrganizationConfigRule(requestBody: PutOrganizationConfigRuleRequest): Observable<PutOrganizationConfigRuleResponse> {
			return this.http.post<PutOrganizationConfigRuleResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deploys conformance packs across member accounts in an AWS Organization.</p> <p>This API enables organization service access for <code>config-multiaccountsetup.amazonaws.com</code> through the <code>EnableAWSServiceAccess</code> action and creates a service linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the master account of your organization. The service linked role is created only when the role does not exist in the master account. AWS Config verifies the existence of role with GetRole action.</p> <note> <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both. If you provide both AWS Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p> <p>AWS Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the confomance pack is created or updated. You cannot update a conformance pack while it is in this state.</p> <p>You can create 6 conformance packs with 25 AWS Config rules in each pack.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack
		 * @return {PutOrganizationConformancePackResponse} Success
		 */
		PutOrganizationConformancePack(requestBody: PutOrganizationConformancePackRequest): Observable<PutOrganizationConformancePackResponse> {
			return this.http.post<PutOrganizationConformancePackResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds or updates the remediation configuration with a specific AWS Config rule with the selected target or action. The API creates the <code>RemediationConfiguration</code> object for the AWS Config rule. The AWS Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target.
		 * Post #X-Amz-Target=StarlingDoveService.PutRemediationConfigurations
		 * @return {PutRemediationConfigurationsResponse} Success
		 */
		PutRemediationConfigurations(requestBody: PutRemediationConfigurationsRequest): Observable<PutRemediationConfigurationsResponse> {
			return this.http.post<PutRemediationConfigurationsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A remediation exception is when a specific resource is no longer considered for auto-remediation. This API adds a new exception or updates an exisiting exception for a specific resource with a specific AWS Config rule.
		 * Post #X-Amz-Target=StarlingDoveService.PutRemediationExceptions
		 * @return {PutRemediationExceptionsResponse} Success
		 */
		PutRemediationExceptions(requestBody: PutRemediationExceptionsRequest): Observable<PutRemediationExceptionsResponse> {
			return this.http.post<PutRemediationExceptionsResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutRemediationExceptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Records the configuration state for the resource provided in the request. The configuration state of a resource is represented in AWS Config as Configuration Items. Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing AWS Config APIs. </p> <note> <p>The custom resource type must be registered with AWS CloudFormation. This API accepts the configuration item registered with AWS CloudFormation.</p> <p>When you call this API, AWS Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource. </p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutResourceConfig
		 * @return {void} Success
		 */
		PutResourceConfig(requestBody: PutResourceConfigRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutResourceConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates and updates the retention configuration with details about retention period (number of days) that AWS Config stores your historical information. The API creates the <code>RetentionConfiguration</code> object and names the object as <b>default</b>. When you have a <code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the default object. </p> <note> <p>Currently, AWS Config supports only one retention configuration per region in your account.</p> </note>
		 * Post #X-Amz-Target=StarlingDoveService.PutRetentionConfiguration
		 * @return {PutRetentionConfigurationResponse} Success
		 */
		PutRetentionConfiguration(requestBody: PutRetentionConfigurationRequest): Observable<PutRetentionConfigurationResponse> {
			return this.http.post<PutRetentionConfigurationResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of AWS resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the AWS Config Developer Guide.</p>
		 * Post #X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SelectAggregateResourceConfigResponse} Success
		 */
		SelectAggregateResourceConfig(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SelectAggregateResourceConfigRequest): Observable<SelectAggregateResourceConfigResponse> {
			return this.http.post<SelectAggregateResourceConfigResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the AWS Config Developer Guide.</p>
		 * Post #X-Amz-Target=StarlingDoveService.SelectResourceConfig
		 * @return {SelectResourceConfigResponse} Success
		 */
		SelectResourceConfig(requestBody: SelectResourceConfigRequest): Observable<SelectResourceConfigResponse> {
			return this.http.post<SelectResourceConfigResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.SelectResourceConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Runs an on-demand evaluation for the specified AWS Config rules against the last known configuration state of the resources. Use <code>StartConfigRulesEvaluation</code> when you want to test that a rule you updated is working as expected. <code>StartConfigRulesEvaluation</code> does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources. </p> <p>You can specify up to 25 AWS Config rules per request. </p> <p>An existing <code>StartConfigRulesEvaluation</code> call for the specified rules must complete before you can call the API again. If you chose to have AWS Config stream to an Amazon SNS topic, you will receive a <code>ConfigRuleEvaluationStarted</code> notification when the evaluation starts.</p> <note> <p>You don't need to call the <code>StartConfigRulesEvaluation</code> API to run an evaluation for a new rule. When you create a rule, AWS Config evaluates your resources against the rule automatically. </p> </note> <p>The <code>StartConfigRulesEvaluation</code> API is useful if you want to run on-demand evaluations, such as the following example:</p> <ol> <li> <p>You have a custom rule that evaluates your IAM resources every 24 hours.</p> </li> <li> <p>You update your Lambda function to add additional conditions to your rule.</p> </li> <li> <p>Instead of waiting for the next periodic evaluation, you call the <code>StartConfigRulesEvaluation</code> API.</p> </li> <li> <p>AWS Config invokes your Lambda function and evaluates your IAM resources.</p> </li> <li> <p>Your custom rule will still run periodic evaluations every 24 hours.</p> </li> </ol>
		 * Post #X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation
		 * @return {StartConfigRulesEvaluationResponse} Success
		 */
		StartConfigRulesEvaluation(requestBody: StartConfigRulesEvaluationRequest): Observable<StartConfigRulesEvaluationResponse> {
			return this.http.post<StartConfigRulesEvaluationResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts recording configurations of the AWS resources you have selected to record in your AWS account.</p> <p>You must have created at least one delivery channel to successfully start the configuration recorder.</p>
		 * Post #X-Amz-Target=StarlingDoveService.StartConfigurationRecorder
		 * @return {void} Success
		 */
		StartConfigurationRecorder(requestBody: StartConfigurationRecorderRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Runs an on-demand remediation for the specified AWS Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p> <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>
		 * Post #X-Amz-Target=StarlingDoveService.StartRemediationExecution
		 * @return {StartRemediationExecutionResponse} Success
		 */
		StartRemediationExecution(requestBody: StartRemediationExecutionRequest): Observable<StartRemediationExecutionResponse> {
			return this.http.post<StartRemediationExecutionResponse>(this.baseUri + '#X-Amz-Target=StarlingDoveService.StartRemediationExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops recording configurations of the AWS resources you have selected to record in your AWS account.
		 * Post #X-Amz-Target=StarlingDoveService.StopConfigurationRecorder
		 * @return {void} Success
		 */
		StopConfigurationRecorder(requestBody: StopConfigurationRecorderRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
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

	export enum BatchGetAggregateResourceConfigX_Amz_Target { StarlingDoveService_BatchGetAggregateResourceConfig = 0 }

	export enum BatchGetResourceConfigX_Amz_Target { StarlingDoveService_BatchGetResourceConfig = 0 }

	export enum DeleteAggregationAuthorizationX_Amz_Target { StarlingDoveService_DeleteAggregationAuthorization = 0 }

	export enum DeleteConfigRuleX_Amz_Target { StarlingDoveService_DeleteConfigRule = 0 }

	export enum DeleteConfigurationAggregatorX_Amz_Target { StarlingDoveService_DeleteConfigurationAggregator = 0 }

	export enum DeleteConfigurationRecorderX_Amz_Target { StarlingDoveService_DeleteConfigurationRecorder = 0 }

	export enum DeleteConformancePackX_Amz_Target { StarlingDoveService_DeleteConformancePack = 0 }

	export enum DeleteDeliveryChannelX_Amz_Target { StarlingDoveService_DeleteDeliveryChannel = 0 }

	export enum DeleteEvaluationResultsX_Amz_Target { StarlingDoveService_DeleteEvaluationResults = 0 }

	export enum DeleteOrganizationConfigRuleX_Amz_Target { StarlingDoveService_DeleteOrganizationConfigRule = 0 }

	export enum DeleteOrganizationConformancePackX_Amz_Target { StarlingDoveService_DeleteOrganizationConformancePack = 0 }

	export enum DeletePendingAggregationRequestX_Amz_Target { StarlingDoveService_DeletePendingAggregationRequest = 0 }

	export enum DeleteRemediationConfigurationX_Amz_Target { StarlingDoveService_DeleteRemediationConfiguration = 0 }

	export enum DeleteRemediationExceptionsX_Amz_Target { StarlingDoveService_DeleteRemediationExceptions = 0 }

	export enum DeleteResourceConfigX_Amz_Target { StarlingDoveService_DeleteResourceConfig = 0 }

	export enum DeleteRetentionConfigurationX_Amz_Target { StarlingDoveService_DeleteRetentionConfiguration = 0 }

	export enum DeliverConfigSnapshotX_Amz_Target { StarlingDoveService_DeliverConfigSnapshot = 0 }

	export enum DescribeAggregateComplianceByConfigRulesX_Amz_Target { StarlingDoveService_DescribeAggregateComplianceByConfigRules = 0 }

	export enum DescribeAggregationAuthorizationsX_Amz_Target { StarlingDoveService_DescribeAggregationAuthorizations = 0 }

	export enum DescribeComplianceByConfigRuleX_Amz_Target { StarlingDoveService_DescribeComplianceByConfigRule = 0 }

	export enum DescribeComplianceByResourceX_Amz_Target { StarlingDoveService_DescribeComplianceByResource = 0 }

	export enum DescribeConfigRuleEvaluationStatusX_Amz_Target { StarlingDoveService_DescribeConfigRuleEvaluationStatus = 0 }

	export enum DescribeConfigRulesX_Amz_Target { StarlingDoveService_DescribeConfigRules = 0 }

	export enum DescribeConfigurationAggregatorSourcesStatusX_Amz_Target { StarlingDoveService_DescribeConfigurationAggregatorSourcesStatus = 0 }

	export enum DescribeConfigurationAggregatorsX_Amz_Target { StarlingDoveService_DescribeConfigurationAggregators = 0 }

	export enum DescribeConfigurationRecorderStatusX_Amz_Target { StarlingDoveService_DescribeConfigurationRecorderStatus = 0 }

	export enum DescribeConfigurationRecordersX_Amz_Target { StarlingDoveService_DescribeConfigurationRecorders = 0 }

	export enum DescribeConformancePackComplianceX_Amz_Target { StarlingDoveService_DescribeConformancePackCompliance = 0 }

	export enum DescribeConformancePackStatusX_Amz_Target { StarlingDoveService_DescribeConformancePackStatus = 0 }

	export enum DescribeConformancePacksX_Amz_Target { StarlingDoveService_DescribeConformancePacks = 0 }

	export enum DescribeDeliveryChannelStatusX_Amz_Target { StarlingDoveService_DescribeDeliveryChannelStatus = 0 }

	export enum DescribeDeliveryChannelsX_Amz_Target { StarlingDoveService_DescribeDeliveryChannels = 0 }

	export enum DescribeOrganizationConfigRuleStatusesX_Amz_Target { StarlingDoveService_DescribeOrganizationConfigRuleStatuses = 0 }

	export enum DescribeOrganizationConfigRulesX_Amz_Target { StarlingDoveService_DescribeOrganizationConfigRules = 0 }

	export enum DescribeOrganizationConformancePackStatusesX_Amz_Target { StarlingDoveService_DescribeOrganizationConformancePackStatuses = 0 }

	export enum DescribeOrganizationConformancePacksX_Amz_Target { StarlingDoveService_DescribeOrganizationConformancePacks = 0 }

	export enum DescribePendingAggregationRequestsX_Amz_Target { StarlingDoveService_DescribePendingAggregationRequests = 0 }

	export enum DescribeRemediationConfigurationsX_Amz_Target { StarlingDoveService_DescribeRemediationConfigurations = 0 }

	export enum DescribeRemediationExceptionsX_Amz_Target { StarlingDoveService_DescribeRemediationExceptions = 0 }

	export enum DescribeRemediationExecutionStatusX_Amz_Target { StarlingDoveService_DescribeRemediationExecutionStatus = 0 }

	export enum DescribeRetentionConfigurationsX_Amz_Target { StarlingDoveService_DescribeRetentionConfigurations = 0 }

	export enum GetAggregateComplianceDetailsByConfigRuleX_Amz_Target { StarlingDoveService_GetAggregateComplianceDetailsByConfigRule = 0 }

	export enum GetAggregateConfigRuleComplianceSummaryX_Amz_Target { StarlingDoveService_GetAggregateConfigRuleComplianceSummary = 0 }

	export enum GetAggregateDiscoveredResourceCountsX_Amz_Target { StarlingDoveService_GetAggregateDiscoveredResourceCounts = 0 }

	export enum GetAggregateResourceConfigX_Amz_Target { StarlingDoveService_GetAggregateResourceConfig = 0 }

	export enum GetComplianceDetailsByConfigRuleX_Amz_Target { StarlingDoveService_GetComplianceDetailsByConfigRule = 0 }

	export enum GetComplianceDetailsByResourceX_Amz_Target { StarlingDoveService_GetComplianceDetailsByResource = 0 }

	export enum GetComplianceSummaryByConfigRuleX_Amz_Target { StarlingDoveService_GetComplianceSummaryByConfigRule = 0 }

	export enum GetComplianceSummaryByResourceTypeX_Amz_Target { StarlingDoveService_GetComplianceSummaryByResourceType = 0 }

	export enum GetConformancePackComplianceDetailsX_Amz_Target { StarlingDoveService_GetConformancePackComplianceDetails = 0 }

	export enum GetConformancePackComplianceSummaryX_Amz_Target { StarlingDoveService_GetConformancePackComplianceSummary = 0 }

	export enum GetDiscoveredResourceCountsX_Amz_Target { StarlingDoveService_GetDiscoveredResourceCounts = 0 }

	export enum GetOrganizationConfigRuleDetailedStatusX_Amz_Target { StarlingDoveService_GetOrganizationConfigRuleDetailedStatus = 0 }

	export enum GetOrganizationConformancePackDetailedStatusX_Amz_Target { StarlingDoveService_GetOrganizationConformancePackDetailedStatus = 0 }

	export enum GetResourceConfigHistoryX_Amz_Target { StarlingDoveService_GetResourceConfigHistory = 0 }

	export enum ListAggregateDiscoveredResourcesX_Amz_Target { StarlingDoveService_ListAggregateDiscoveredResources = 0 }

	export enum ListDiscoveredResourcesX_Amz_Target { StarlingDoveService_ListDiscoveredResources = 0 }

	export enum ListTagsForResourceX_Amz_Target { StarlingDoveService_ListTagsForResource = 0 }

	export enum PutAggregationAuthorizationX_Amz_Target { StarlingDoveService_PutAggregationAuthorization = 0 }

	export enum PutConfigRuleX_Amz_Target { StarlingDoveService_PutConfigRule = 0 }

	export enum PutConfigurationAggregatorX_Amz_Target { StarlingDoveService_PutConfigurationAggregator = 0 }

	export enum PutConfigurationRecorderX_Amz_Target { StarlingDoveService_PutConfigurationRecorder = 0 }

	export enum PutConformancePackX_Amz_Target { StarlingDoveService_PutConformancePack = 0 }

	export enum PutDeliveryChannelX_Amz_Target { StarlingDoveService_PutDeliveryChannel = 0 }

	export enum PutEvaluationsX_Amz_Target { StarlingDoveService_PutEvaluations = 0 }

	export enum PutOrganizationConfigRuleX_Amz_Target { StarlingDoveService_PutOrganizationConfigRule = 0 }

	export enum PutOrganizationConformancePackX_Amz_Target { StarlingDoveService_PutOrganizationConformancePack = 0 }

	export enum PutRemediationConfigurationsX_Amz_Target { StarlingDoveService_PutRemediationConfigurations = 0 }

	export enum PutRemediationExceptionsX_Amz_Target { StarlingDoveService_PutRemediationExceptions = 0 }

	export enum PutResourceConfigX_Amz_Target { StarlingDoveService_PutResourceConfig = 0 }

	export enum PutRetentionConfigurationX_Amz_Target { StarlingDoveService_PutRetentionConfiguration = 0 }

	export enum SelectAggregateResourceConfigX_Amz_Target { StarlingDoveService_SelectAggregateResourceConfig = 0 }

	export enum SelectResourceConfigX_Amz_Target { StarlingDoveService_SelectResourceConfig = 0 }

	export enum StartConfigRulesEvaluationX_Amz_Target { StarlingDoveService_StartConfigRulesEvaluation = 0 }

	export enum StartConfigurationRecorderX_Amz_Target { StarlingDoveService_StartConfigurationRecorder = 0 }

	export enum StartRemediationExecutionX_Amz_Target { StarlingDoveService_StartRemediationExecution = 0 }

	export enum StopConfigurationRecorderX_Amz_Target { StarlingDoveService_StopConfigurationRecorder = 0 }

	export enum TagResourceX_Amz_Target { StarlingDoveService_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { StarlingDoveService_UntagResource = 0 }

}

