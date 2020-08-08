import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateClusterResponse {
		ClusterArn?: string;
		ClusterName?: string;

		/**
		 * <p>The state of a Kafka cluster.</p>
		 */
		State?: CreateClusterResponseState;
	}

	export enum CreateClusterResponseState { ACTIVE = 0, CREATING = 1, UPDATING = 2, DELETING = 3, FAILED = 4 }


	/**
	 *             <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>
	 *          <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>
	 *          
	 */
	export enum BrokerAZDistribution { DEFAULT = 0 }


	/**
	 *             <p>Contains information about storage volumes attached to MSK broker nodes.</p>
	 *          
	 */
	export interface StorageInfo {

		/**
		 * <p>Contains information about the EBS storage volumes attached to Kafka broker nodes.</p>
		 */
		EbsStorageInfo?: EBSStorageInfo;
	}


	/**
	 *             <p>Contains information about the EBS storage volumes attached to Kafka broker nodes.</p>
	 *          
	 */
	export interface EBSStorageInfo {
		VolumeSize?: number;
	}


	/**
	 *             <p>Details for client authentication using TLS.</p>
	 *          
	 */
	export interface Tls {
		CertificateAuthorityArnList?: Array<string>;
	}


	/**
	 *             <p>The data-volume encryption details.</p>
	 *          
	 */
	export interface EncryptionAtRest {
		DataVolumeKMSKeyId: string;
	}


	/**
	 *             <p>The settings for encrypting data in transit.</p>
	 *          
	 */
	export interface EncryptionInTransit {

		/**
		 * <p>Client-broker encryption in transit setting.</p>
		 */
		ClientBroker?: EncryptionInTransitClientBroker;
		InCluster?: boolean;
	}

	export enum EncryptionInTransitClientBroker { TLS = 0, TLS_PLAINTEXT = 1, PLAINTEXT = 2 }


	/**
	 *             <p>Prometheus settings.</p>
	 *          
	 */
	export interface PrometheusInfo {

		/**
		 * <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
		 */
		JmxExporter?: JmxExporterInfo;

		/**
		 * <p>Indicates whether you want to enable or disable the Node Exporter.</p>
		 */
		NodeExporter?: NodeExporterInfo;
	}


	/**
	 *             <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
	 *          
	 */
	export interface JmxExporterInfo {
		EnabledInBroker: boolean;
	}


	/**
	 *             <p>Indicates whether you want to enable or disable the Node Exporter.</p>
	 *          
	 */
	export interface NodeExporterInfo {
		EnabledInBroker: boolean;
	}

	export interface BrokerLogs {
		CloudWatchLogs?: CloudWatchLogs;
		Firehose?: Firehose;
		S3?: S3;
	}

	export interface CloudWatchLogs {
		Enabled: boolean;
		LogGroup?: string;
	}

	export interface Firehose {
		DeliveryStream?: string;
		Enabled: boolean;
	}

	export interface S3 {
		Bucket?: string;
		Enabled: boolean;
		Prefix?: string;
	}

	export interface BadRequestException {
	}

	export interface InternalServerErrorException {
	}

	export interface UnauthorizedException {
	}

	export interface ForbiddenException {
	}

	export interface ServiceUnavailableException {
	}

	export interface TooManyRequestsException {
	}

	export interface ConflictException {
	}

	export interface CreateConfigurationResponse {
		Arn?: string;
		CreationTime?: Date;

		/**
		 * <p>Describes a configuration revision.</p>
		 */
		LatestRevision?: ConfigurationRevision;
		Name?: string;
	}


	/**
	 *             <p>Describes a configuration revision.</p>
	 *          
	 */
	export interface ConfigurationRevision {
		CreationTime: Date;
		Description?: string;
		Revision: number;
	}

	export interface DeleteClusterResponse {
		ClusterArn?: string;

		/**
		 * <p>The state of a Kafka cluster.</p>
		 */
		State?: CreateClusterResponseState;
	}

	export interface NotFoundException {
	}

	export interface DescribeClusterResponse {

		/**
		 * <p>Returns information about a cluster.</p>
		 */
		ClusterInfo?: ClusterInfo;
	}


	/**
	 *             <p>Returns information about a cluster.</p>
	 *          
	 */
	export interface ClusterInfo {
		ActiveOperationArn?: string;

		/**
		 * <p>Describes the setup to be used for Kafka broker nodes in the cluster.</p>
		 */
		BrokerNodeGroupInfo?: BrokerNodeGroupInfo;

		/**
		 * <p>Includes all client authentication information.</p>
		 */
		ClientAuthentication?: ClientAuthentication;
		ClusterArn?: string;
		ClusterName?: string;
		CreationTime?: Date;

		/**
		 * <p>Information about the current software installed on the cluster.</p>
		 */
		CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;
		CurrentVersion?: string;

		/**
		 * <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
		 */
		EncryptionInfo?: EncryptionInfo;

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		EnhancedMonitoring?: ClusterInfoEnhancedMonitoring;

		/**
		 * <p>JMX and Node monitoring for the MSK cluster.</p>
		 */
		OpenMonitoring?: OpenMonitoring;
		LoggingInfo?: LoggingInfo;
		NumberOfBrokerNodes?: number;

		/**
		 * <p>The state of a Kafka cluster.</p>
		 */
		State?: CreateClusterResponseState;
		StateInfo?: StateInfo;
		Tags?: __mapOf__string;
		ZookeeperConnectString?: string;
	}


	/**
	 *             <p>Describes the setup to be used for Kafka broker nodes in the cluster.</p>
	 *          
	 */
	export interface BrokerNodeGroupInfo {

		/**
		 * <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>
		 * <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>
		 */
		BrokerAZDistribution?: BrokerAZDistribution;
		ClientSubnets: Array<string>;
		InstanceType: string;
		SecurityGroups?: Array<string>;

		/**
		 * <p>Contains information about storage volumes attached to MSK broker nodes.</p>
		 */
		StorageInfo?: StorageInfo;
	}


	/**
	 *             <p>Includes all client authentication information.</p>
	 *          
	 */
	export interface ClientAuthentication {

		/**
		 * <p>Details for client authentication using TLS.</p>
		 */
		Tls?: Tls;
	}


	/**
	 *             <p>Information about the current software installed on the cluster.</p>
	 *          
	 */
	export interface BrokerSoftwareInfo {
		ConfigurationArn?: string;
		ConfigurationRevision?: number;
		KafkaVersion?: string;
	}


	/**
	 *             <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
	 *          
	 */
	export interface EncryptionInfo {

		/**
		 * <p>The data-volume encryption details.</p>
		 */
		EncryptionAtRest?: EncryptionAtRest;

		/**
		 * <p>The settings for encrypting data in transit.</p>
		 */
		EncryptionInTransit?: EncryptionInTransit;
	}

	export enum ClusterInfoEnhancedMonitoring { DEFAULT = 0, PER_BROKER = 1, PER_TOPIC_PER_BROKER = 2 }


	/**
	 *             <p>JMX and Node monitoring for the MSK cluster.</p>
	 *          
	 */
	export interface OpenMonitoring {

		/**
		 * <p>Prometheus settings.</p>
		 */
		Prometheus: Prometheus;
	}


	/**
	 *             <p>Prometheus settings.</p>
	 *          
	 */
	export interface Prometheus {

		/**
		 * <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
		 */
		JmxExporter?: JmxExporter;

		/**
		 * <p>Indicates whether you want to enable or disable the Node Exporter.</p>
		 */
		NodeExporter?: NodeExporter;
	}


	/**
	 *             <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
	 *          
	 */
	export interface JmxExporter {
		EnabledInBroker: boolean;
	}


	/**
	 *             <p>Indicates whether you want to enable or disable the Node Exporter.</p>
	 *          
	 */
	export interface NodeExporter {
		EnabledInBroker: boolean;
	}

	export interface LoggingInfo {
		BrokerLogs: BrokerLogs;
	}

	export interface StateInfo {
		Code?: string;
		Message?: string;
	}

	export interface __mapOf__string {
	}

	export interface DescribeClusterOperationResponse {

		/**
		 * <p>Returns information about a cluster operation.</p>
		 */
		ClusterOperationInfo?: ClusterOperationInfo;
	}


	/**
	 *             <p>Returns information about a cluster operation.</p>
	 *          
	 */
	export interface ClusterOperationInfo {
		ClientRequestId?: string;
		ClusterArn?: string;
		CreationTime?: Date;
		EndTime?: Date;

		/**
		 * <p>Returns information about an error state of the cluster.</p>
		 */
		ErrorInfo?: ErrorInfo;
		OperationArn?: string;
		OperationState?: string;
		OperationSteps?: Array<ClusterOperationStep>;
		OperationType?: string;

		/**
		 * <p>Information about cluster attributes that can be updated via update APIs.</p>
		 */
		SourceClusterInfo?: MutableClusterInfo;

		/**
		 * <p>Information about cluster attributes that can be updated via update APIs.</p>
		 */
		TargetClusterInfo?: MutableClusterInfo;
	}


	/**
	 *             <p>Returns information about an error state of the cluster.</p>
	 *          
	 */
	export interface ErrorInfo {
		ErrorCode?: string;
		ErrorString?: string;
	}


	/**
	 *             <p>Step taken during a cluster operation.</p>
	 *          
	 */
	export interface ClusterOperationStep {

		/**
		 * <p>State information about the operation step.</p>
		 */
		StepInfo?: ClusterOperationStepInfo;
		StepName?: string;
	}


	/**
	 *             <p>State information about the operation step.</p>
	 *          
	 */
	export interface ClusterOperationStepInfo {
		StepStatus?: string;
	}


	/**
	 *             <p>Information about cluster attributes that can be updated via update APIs.</p>
	 *          
	 */
	export interface MutableClusterInfo {
		BrokerEBSVolumeInfo?: Array<BrokerEBSVolumeInfo>;

		/**
		 * <p>Specifies the configuration to use for the brokers.</p>
		 */
		ConfigurationInfo?: ConfigurationInfo;
		NumberOfBrokerNodes?: number;

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		EnhancedMonitoring?: ClusterInfoEnhancedMonitoring;

		/**
		 * <p>JMX and Node monitoring for the MSK cluster.</p>
		 */
		OpenMonitoring?: OpenMonitoring;
		KafkaVersion?: string;
		LoggingInfo?: LoggingInfo;
	}


	/**
	 *             <p>Specifies the EBS volume upgrade information. The broker identifier must be set to the keyword ALL. This means the changes apply to all the brokers in the cluster.</p>
	 *          
	 */
	export interface BrokerEBSVolumeInfo {
		KafkaBrokerNodeId: string;
		VolumeSizeGB: number;
	}


	/**
	 *             <p>Specifies the configuration to use for the brokers.</p>
	 *          
	 */
	export interface ConfigurationInfo {
		Arn: string;
		Revision: number;
	}

	export interface DescribeConfigurationResponse {
		Arn?: string;
		CreationTime?: Date;
		Description?: string;
		KafkaVersions?: Array<string>;

		/**
		 * <p>Describes a configuration revision.</p>
		 */
		LatestRevision?: ConfigurationRevision;
		Name?: string;
	}

	export interface DescribeConfigurationRevisionResponse {
		Arn?: string;
		CreationTime?: Date;
		Description?: string;
		Revision?: number;
		ServerProperties?: string;
	}

	export interface GetBootstrapBrokersResponse {
		BootstrapBrokerString?: string;
		BootstrapBrokerStringTls?: string;
	}

	export interface GetCompatibleKafkaVersionsResponse {
		CompatibleKafkaVersions?: Array<CompatibleKafkaVersion>;
	}


	/**
	 *             <p>Contains source Kafka versions and compatible target Kafka versions.</p>
	 *         
	 */
	export interface CompatibleKafkaVersion {
		SourceVersion?: string;
		TargetVersions?: Array<string>;
	}

	export interface ListClusterOperationsResponse {
		ClusterOperationInfoList?: Array<ClusterOperationInfo>;
		NextToken?: string;
	}

	export interface ListClustersResponse {
		ClusterInfoList?: Array<ClusterInfo>;
		NextToken?: string;
	}

	export interface ListConfigurationRevisionsResponse {
		NextToken?: string;
		Revisions?: Array<ConfigurationRevision>;
	}

	export interface ListConfigurationsResponse {
		Configurations?: Array<Configuration>;
		NextToken?: string;
	}


	/**
	 *             <p>Represents an MSK Configuration.</p>
	 *          
	 */
	export interface Configuration {
		Arn: string;
		CreationTime: Date;
		Description: string;
		KafkaVersions: Array<string>;

		/**
		 * <p>Describes a configuration revision.</p>
		 */
		LatestRevision: ConfigurationRevision;
		Name: string;
	}

	export interface ListKafkaVersionsResponse {
		KafkaVersions?: Array<KafkaVersion>;
		NextToken?: string;
	}

	export interface KafkaVersion {
		Version?: string;
		Status?: KafkaVersionStatus;
	}

	export enum KafkaVersionStatus { ACTIVE = 0, DEPRECATED = 1 }

	export interface ListNodesResponse {
		NextToken?: string;
		NodeInfoList?: Array<NodeInfo>;
	}


	/**
	 *             <p>The node information object.</p>
	 *          
	 */
	export interface NodeInfo {
		AddedToClusterTime?: string;

		/**
		 * <p>BrokerNodeInfo</p>
		 */
		BrokerNodeInfo?: BrokerNodeInfo;
		InstanceType?: string;
		NodeARN?: string;

		/**
		 * <p>The broker or Zookeeper node.</p>
		 */
		NodeType?: NodeInfoNodeType;

		/**
		 * <p>Zookeeper node information.</p>
		 */
		ZookeeperNodeInfo?: ZookeeperNodeInfo;
	}


	/**
	 *             <p>BrokerNodeInfo</p>
	 *          
	 */
	export interface BrokerNodeInfo {
		AttachedENIId?: string;
		BrokerId?: number;
		ClientSubnet?: string;
		ClientVpcIpAddress?: string;

		/**
		 * <p>Information about the current software installed on the cluster.</p>
		 */
		CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;
		Endpoints?: Array<string>;
	}

	export enum NodeInfoNodeType { BROKER = 0 }


	/**
	 *             <p>Zookeeper node information.</p>
	 *          
	 */
	export interface ZookeeperNodeInfo {
		AttachedENIId?: string;
		ClientVpcIpAddress?: string;
		Endpoints?: Array<string>;
		ZookeeperId?: number;
		ZookeeperVersion?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: __mapOf__string;
	}

	export interface UpdateBrokerCountResponse {
		ClusterArn?: string;
		ClusterOperationArn?: string;
	}

	export interface UpdateBrokerStorageResponse {
		ClusterArn?: string;
		ClusterOperationArn?: string;
	}

	export interface UpdateClusterConfigurationResponse {
		ClusterArn?: string;
		ClusterOperationArn?: string;
	}

	export interface UpdateClusterKafkaVersionResponse {
		ClusterArn?: string;
		ClusterOperationArn?: string;
	}

	export interface UpdateMonitoringResponse {
		ClusterArn?: string;
		ClusterOperationArn?: string;
	}


	/**
	 *             <p>Client-broker encryption in transit setting.</p>
	 *          
	 */
	export enum ClientBroker { TLS = 0, TLS_PLAINTEXT = 1, PLAINTEXT = 2 }


	/**
	 *             <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
	 *          
	 */
	export enum EnhancedMonitoring { DEFAULT = 0, PER_BROKER = 1, PER_TOPIC_PER_BROKER = 2 }


	/**
	 *             <p>The state of a Kafka cluster.</p>
	 *          
	 */
	export enum ClusterState { ACTIVE = 0, CREATING = 1, UPDATING = 2, DELETING = 3, FAILED = 4 }


	/**
	 *             <p>JMX and Node monitoring for the MSK cluster.</p>
	 *          
	 */
	export interface OpenMonitoringInfo {

		/**
		 * <p>Prometheus settings.</p>
		 */
		Prometheus: PrometheusInfo;
	}

	export interface CreateClusterRequest {

		/**
		 * <p>Describes the setup to be used for Kafka broker nodes in the cluster.</p>
		 */
		BrokerNodeGroupInfo: BrokerNodeGroupInfo;

		/**
		 * <p>Includes all client authentication information.</p>
		 */
		ClientAuthentication?: ClientAuthentication;
		ClusterName: string;

		/**
		 * <p>Specifies the configuration to use for the brokers.</p>
		 */
		ConfigurationInfo?: ConfigurationInfo;

		/**
		 * <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
		 */
		EncryptionInfo?: EncryptionInfo;

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		EnhancedMonitoring?: ClusterInfoEnhancedMonitoring;

		/**
		 * <p>JMX and Node monitoring for the MSK cluster.</p>
		 */
		OpenMonitoring?: OpenMonitoringInfo;
		KafkaVersion: string;
		LoggingInfo?: LoggingInfo;
		NumberOfBrokerNodes: number;
		Tags?: __mapOf__string;
	}

	export interface CreateConfigurationRequest {
		Description?: string;
		KafkaVersions?: Array<string>;
		Name: string;
		ServerProperties: string;
	}

	export interface DeleteClusterRequest {
	}

	export interface DescribeClusterOperationRequest {
	}

	export interface DescribeClusterRequest {
	}

	export interface DescribeConfigurationRequest {
	}

	export interface DescribeConfigurationRevisionRequest {
	}

	export interface GetBootstrapBrokersRequest {
	}

	export interface GetCompatibleKafkaVersionsRequest {
	}

	export interface ListClusterOperationsRequest {
	}

	export interface ListClustersRequest {
	}

	export interface ListConfigurationRevisionsRequest {
	}

	export interface ListConfigurationsRequest {
	}

	export interface ListKafkaVersionsRequest {
	}

	export interface ListNodesRequest {
	}

	export interface ListTagsForResourceRequest {
	}


	/**
	 *             <p>The broker or Zookeeper node.</p>
	 *          
	 */
	export enum NodeType { BROKER = 0 }

	export interface TagResourceRequest {
		Tags: __mapOf__string;
	}

	export interface UntagResourceRequest {
	}

	export interface UpdateBrokerCountRequest {
		CurrentVersion: string;
		TargetNumberOfBrokerNodes: number;
	}

	export interface UpdateBrokerStorageRequest {
		CurrentVersion: string;
		TargetBrokerEBSVolumeInfo: Array<BrokerEBSVolumeInfo>;
	}

	export interface UpdateClusterConfigurationRequest {

		/**
		 * <p>Specifies the configuration to use for the brokers.</p>
		 */
		ConfigurationInfo: ConfigurationInfo;
		CurrentVersion: string;
	}

	export interface UpdateClusterKafkaVersionRequest {

		/**
		 * <p>Specifies the configuration to use for the brokers.</p>
		 */
		ConfigurationInfo?: ConfigurationInfo;
		CurrentVersion: string;
		TargetKafkaVersion: string;
	}


	/** Request body for UpdateMonitoring. */
	export interface UpdateMonitoringRequest {
		CurrentVersion: string;

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		EnhancedMonitoring?: ClusterInfoEnhancedMonitoring;

		/**
		 * <p>JMX and Node monitoring for the MSK cluster.</p>
		 */
		OpenMonitoring?: OpenMonitoringInfo;
		LoggingInfo?: LoggingInfo;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a new MSK cluster.</p>
		 * Post v1/clusters
		 * @return {CreateClusterResponse} Success
		 */
		CreateCluster(requestBody: CreateClusterPostBody): Observable<CreateClusterResponse> {
			return this.http.post<CreateClusterResponse>(this.baseUri + 'v1/clusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of all the MSK clusters in the current Region.</p>
		 * Get v1/clusters
		 * @param {string} clusterNameFilter 
		 *             <p>Specify a prefix of the name of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.</p>
		 *          
		 * @param {number} maxResults 
		 *             <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
		 *          
		 * @param {string} nextToken 
		 *             <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
		 *             To get the next batch, provide this token in your next request.</p>
		 *          
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListClustersResponse} Success
		 */
		ListClusters(clusterNameFilter: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListClustersResponse> {
			return this.http.get<ListClustersResponse>(this.baseUri + 'v1/clusters?clusterNameFilter=' + (clusterNameFilter == null ? '' : encodeURIComponent(clusterNameFilter)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a new MSK configuration.</p>
		 * Post v1/configurations
		 * @return {CreateConfigurationResponse} Success
		 */
		CreateConfiguration(requestBody: CreateConfigurationPostBody): Observable<CreateConfigurationResponse> {
			return this.http.post<CreateConfigurationResponse>(this.baseUri + 'v1/configurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of all the MSK configurations in this Region.</p>
		 * Get v1/configurations
		 * @param {number} maxResults 
		 *             <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
		 *          
		 * @param {string} nextToken 
		 *             <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
		 *             To get the next batch, provide this token in your next request.</p>
		 *          
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConfigurationsResponse} Success
		 */
		ListConfigurations(maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListConfigurationsResponse> {
			return this.http.get<ListConfigurationsResponse>(this.baseUri + 'v1/configurations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Deletes the MSK cluster specified by the Amazon Resource Name (ARN) in the request.</p>
		 * Delete v1/clusters/{clusterArn}
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @param {string} currentVersion 
		 *             <p>The current version of the MSK cluster.</p>
		 *          
		 * @return {DeleteClusterResponse} Success
		 */
		DeleteCluster(clusterArn: string, currentVersion: string): Observable<DeleteClusterResponse> {
			return this.http.delete<DeleteClusterResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '&currentVersion=' + (currentVersion == null ? '' : encodeURIComponent(currentVersion)), {});
		}

		/**
		 * <p>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</p>
		 * Get v1/clusters/{clusterArn}
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @return {DescribeClusterResponse} Success
		 */
		DescribeCluster(clusterArn: string): Observable<DescribeClusterResponse> {
			return this.http.get<DescribeClusterResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)), {});
		}

		/**
		 * <p>Returns a description of the cluster operation specified by the ARN.</p>
		 * Get v1/operations/{clusterOperationArn}
		 * @param {string} clusterOperationArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the MSK cluster operation.</p>
		 *          
		 * @return {DescribeClusterOperationResponse} Success
		 */
		DescribeClusterOperation(clusterOperationArn: string): Observable<DescribeClusterOperationResponse> {
			return this.http.get<DescribeClusterOperationResponse>(this.baseUri + 'v1/operations/' + (clusterOperationArn == null ? '' : encodeURIComponent(clusterOperationArn)), {});
		}

		/**
		 * <p>Returns a description of this MSK configuration.</p>
		 * Get v1/configurations/{arn}
		 * @param {string} arn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
		 *          
		 * @return {DescribeConfigurationResponse} Success
		 */
		DescribeConfiguration(arn: string): Observable<DescribeConfigurationResponse> {
			return this.http.get<DescribeConfigurationResponse>(this.baseUri + 'v1/configurations/' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * <p>Returns a description of this revision of the configuration.</p>
		 * Get v1/configurations/{arn}/revisions/{revision}
		 * @param {string} arn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
		 *          
		 * @param {number} revision 
		 *             <p>A string that uniquely identifies a revision of an MSK configuration.</p>
		 *          
		 * @return {DescribeConfigurationRevisionResponse} Success
		 */
		DescribeConfigurationRevision(arn: string, revision: number): Observable<DescribeConfigurationRevisionResponse> {
			return this.http.get<DescribeConfigurationRevisionResponse>(this.baseUri + 'v1/configurations/' + (arn == null ? '' : encodeURIComponent(arn)) + '/revisions/' + revision, {});
		}

		/**
		 * <p>A list of brokers that a client application can use to bootstrap.</p>
		 * Get v1/clusters/{clusterArn}/bootstrap-brokers
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @return {GetBootstrapBrokersResponse} Success
		 */
		GetBootstrapBrokers(clusterArn: string): Observable<GetBootstrapBrokersResponse> {
			return this.http.get<GetBootstrapBrokersResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/bootstrap-brokers', {});
		}

		/**
		 * <p>Gets the Apache Kafka versions to which you can update the MSK cluster.</p>
		 * Get v1/compatible-kafka-versions
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) of the cluster check.</p>
		 *             
		 * @return {GetCompatibleKafkaVersionsResponse} Success
		 */
		GetCompatibleKafkaVersions(clusterArn: string): Observable<GetCompatibleKafkaVersionsResponse> {
			return this.http.get<GetCompatibleKafkaVersionsResponse>(this.baseUri + 'v1/compatible-kafka-versions?clusterArn=' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)), {});
		}

		/**
		 * <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>
		 * Get v1/clusters/{clusterArn}/operations
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @param {number} maxResults 
		 *             <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
		 *          
		 * @param {string} nextToken 
		 *             <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
		 *             To get the next batch, provide this token in your next request.</p>
		 *          
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListClusterOperationsResponse} Success
		 */
		ListClusterOperations(clusterArn: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListClusterOperationsResponse> {
			return this.http.get<ListClusterOperationsResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/operations&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Returns a list of all the MSK configurations in this Region.</p>
		 * Get v1/configurations/{arn}/revisions
		 * @param {string} arn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
		 *          
		 * @param {number} maxResults 
		 *             <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
		 *          
		 * @param {string} nextToken 
		 *             <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
		 *             To get the next batch, provide this token in your next request.</p>
		 *          
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConfigurationRevisionsResponse} Success
		 */
		ListConfigurationRevisions(arn: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListConfigurationRevisionsResponse> {
			return this.http.get<ListConfigurationRevisionsResponse>(this.baseUri + 'v1/configurations/' + (arn == null ? '' : encodeURIComponent(arn)) + '/revisions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Returns a list of Kafka versions.</p>
		 * Get v1/kafka-versions
		 * @param {number} maxResults 
		 *             <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
		 * @param {string} nextToken 
		 *             <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.</p>
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListKafkaVersionsResponse} Success
		 */
		ListKafkaVersions(maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListKafkaVersionsResponse> {
			return this.http.get<ListKafkaVersionsResponse>(this.baseUri + 'v1/kafka-versions?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Returns a list of the broker nodes in the cluster.</p>
		 * Get v1/clusters/{clusterArn}/nodes
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @param {number} maxResults 
		 *             <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
		 *          
		 * @param {string} nextToken 
		 *             <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. 
		 *             To get the next batch, provide this token in your next request.</p>
		 *          
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNodesResponse} Success
		 */
		ListNodes(clusterArn: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListNodesResponse> {
			return this.http.get<ListNodesResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/nodes&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Returns a list of the tags associated with the specified resource.</p>
		 * Get v1/tags/{resourceArn}
		 * @param {string} resourceArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
		 *          
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Adds tags to the specified MSK resource.</p>
		 * Post v1/tags/{resourceArn}
		 * @param {string} resourceArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
		 *          
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the tags associated with the keys that are provided in the query.</p>
		 * Delete v1/tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
		 *          
		 * @param {Array<string>} tagKeys 
		 *             <p>Tag keys must be unique for a given cluster. In addition, the following restrictions apply:</p>
		 *             <ul>
		 *                <li>
		 *                   <p>Each tag key must be unique. If you add a tag with a key that's already in
		 *                   use, your new tag overwrites the existing key-value pair. </p>
		 *                </li>
		 *                <li>
		 *                   <p>You can't start a tag key with aws: because this prefix is reserved for use
		 *                   by  AWS.  AWS creates tags that begin with this prefix on your behalf, but
		 *                   you can't edit or delete them.</p>
		 *                </li>
		 *                <li>
		 *                   <p>Tag keys must be between 1 and 128 Unicode characters in length.</p>
		 *                </li>
		 *                <li>
		 *                   <p>Tag keys must consist of the following characters: Unicode letters, digits,
		 *                   white space, and the following special characters: _ . / = + -
		 *                      @.</p>
		 *                </li>
		 *             </ul>
		 *          
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the number of broker nodes in the cluster.</p>
		 * Put v1/clusters/{clusterArn}/nodes/count
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @return {UpdateBrokerCountResponse} Success
		 */
		UpdateBrokerCount(clusterArn: string, requestBody: UpdateBrokerCountPutBody): Observable<UpdateBrokerCountResponse> {
			return this.http.put<UpdateBrokerCountResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/nodes/count', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the EBS storage associated with MSK brokers.</p>
		 * Put v1/clusters/{clusterArn}/nodes/storage
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @return {UpdateBrokerStorageResponse} Success
		 */
		UpdateBrokerStorage(clusterArn: string, requestBody: UpdateBrokerStoragePutBody): Observable<UpdateBrokerStorageResponse> {
			return this.http.put<UpdateBrokerStorageResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/nodes/storage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the cluster with the configuration that is specified in the request body.</p>
		 * Put v1/clusters/{clusterArn}/configuration
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @return {UpdateClusterConfigurationResponse} Success
		 */
		UpdateClusterConfiguration(clusterArn: string, requestBody: UpdateClusterConfigurationPutBody): Observable<UpdateClusterConfigurationResponse> {
			return this.http.put<UpdateClusterConfigurationResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the Apache Kafka version for the cluster.</p>
		 * Put v1/clusters/{clusterArn}/version
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
		 *             
		 * @return {UpdateClusterKafkaVersionResponse} Success
		 */
		UpdateClusterKafkaVersion(clusterArn: string, requestBody: UpdateClusterKafkaVersionPutBody): Observable<UpdateClusterKafkaVersionResponse> {
			return this.http.put<UpdateClusterKafkaVersionResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/version', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the monitoring settings for the cluster. You can use this operation to specify which Apache Kafka metrics you want Amazon MSK to send to Amazon CloudWatch. You can also specify settings for open monitoring with Prometheus.</p>
		 * Put v1/clusters/{clusterArn}/monitoring
		 * @param {string} clusterArn 
		 *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
		 *          
		 * @return {UpdateMonitoringResponse} Success
		 */
		UpdateMonitoring(clusterArn: string, requestBody: UpdateMonitoringPutBody): Observable<UpdateMonitoringResponse> {
			return this.http.put<UpdateMonitoringResponse>(this.baseUri + 'v1/clusters/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '/monitoring', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateClusterPostBody {

		/**
		 * <p>Describes the setup to be used for Kafka broker nodes in the cluster.</p>
		 */
		brokerNodeGroupInfo: CreateClusterPostBodyBrokerNodeGroupInfo;

		/**
		 * <p>Includes all client authentication information.</p>
		 */
		clientAuthentication?: CreateClusterPostBodyClientAuthentication;

		/**
		 * <p>The name of the cluster.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		clusterName: string;

		/**
		 * <p>Specifies the configuration to use for the brokers.</p>
		 */
		configurationInfo?: CreateClusterPostBodyConfigurationInfo;

		/**
		 * <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
		 */
		encryptionInfo?: CreateClusterPostBodyEncryptionInfo;

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		enhancedMonitoring?: ClusterInfoEnhancedMonitoring;

		/**
		 * <p>JMX and Node monitoring for the MSK cluster.</p>
		 */
		openMonitoring?: CreateClusterPostBodyOpenMonitoring;

		/**
		 * <p>The version of Apache Kafka.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		kafkaVersion: string;
		loggingInfo?: CreateClusterPostBodyLoggingInfo;

		/**
		 * <p>The number of broker nodes in the cluster.</p>
		 * Minimum: 1
		 * Maximum: 15
		 */
		numberOfBrokerNodes: number;

		/**
		 * <p>Create tags when creating the cluster.</p>
		 */
		tags?: {[id: string]: string };
	}

	export interface CreateClusterPostBodyBrokerNodeGroupInfo {

		/**
		 * <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>
		 * <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>
		 */
		BrokerAZDistribution?: BrokerAZDistribution;
		ClientSubnets?: Array<string>;
		InstanceType?: string;
		SecurityGroups?: Array<string>;

		/**
		 * <p>Contains information about storage volumes attached to MSK broker nodes.</p>
		 */
		StorageInfo?: StorageInfo;
	}

	export interface CreateClusterPostBodyClientAuthentication {

		/**
		 * <p>Details for client authentication using TLS.</p>
		 */
		Tls?: Tls;
	}

	export interface CreateClusterPostBodyConfigurationInfo {
		Arn?: string;
		Revision?: number;
	}

	export interface CreateClusterPostBodyEncryptionInfo {

		/**
		 * <p>The data-volume encryption details.</p>
		 */
		EncryptionAtRest?: EncryptionAtRest;

		/**
		 * <p>The settings for encrypting data in transit.</p>
		 */
		EncryptionInTransit?: EncryptionInTransit;
	}

	export interface CreateClusterPostBodyOpenMonitoring {

		/**
		 * <p>Prometheus settings.</p>
		 */
		Prometheus?: PrometheusInfo;
	}

	export interface CreateClusterPostBodyLoggingInfo {
		BrokerLogs?: BrokerLogs;
	}

	export interface CreateConfigurationPostBody {

		/**
		 * <p>The description of the configuration.</p>
		 */
		description?: string;

		/**
		 * <p>The versions of Apache Kafka with which you can use this MSK configuration.</p>
		 */
		kafkaVersions?: Array<string>;

		/**
		 * <p>The name of the configuration.</p>
		 */
		name: string;

		/**
		 * <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
		 * When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
		 */
		serverProperties: string;
	}

	export interface TagResourcePostBody {

		/**
		 * <p>The key-value pair for the resource tag.</p>
		 */
		tags: {[id: string]: string };
	}

	export interface UpdateBrokerCountPutBody {

		/**
		 * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
		 */
		currentVersion: string;

		/**
		 * <p>The number of broker nodes that you want the cluster to have after this operation completes successfully.</p>
		 * Minimum: 1
		 * Maximum: 15
		 */
		targetNumberOfBrokerNodes: number;
	}

	export interface UpdateBrokerStoragePutBody {

		/**
		 * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
		 */
		currentVersion: string;

		/**
		 * <p>Describes the target volume size and the ID of the broker to apply the update to.</p>
		 */
		targetBrokerEBSVolumeInfo: Array<BrokerEBSVolumeInfo>;
	}

	export interface UpdateClusterConfigurationPutBody {

		/**
		 * <p>Specifies the configuration to use for the brokers.</p>
		 */
		configurationInfo: UpdateClusterConfigurationPutBodyConfigurationInfo;

		/**
		 * <p>The version of the cluster that needs to be updated.</p>
		 */
		currentVersion: string;
	}

	export interface UpdateClusterConfigurationPutBodyConfigurationInfo {
		Arn?: string;
		Revision?: number;
	}

	export interface UpdateClusterKafkaVersionPutBody {

		/**
		 * <p>Specifies the configuration to use for the brokers.</p>
		 */
		configurationInfo?: UpdateClusterKafkaVersionPutBodyConfigurationInfo;

		/**
		 * <p>Current cluster version.</p>
		 */
		currentVersion: string;

		/**
		 * <p>Target Kafka version.</p>
		 */
		targetKafkaVersion: string;
	}

	export interface UpdateClusterKafkaVersionPutBodyConfigurationInfo {
		Arn?: string;
		Revision?: number;
	}

	export interface UpdateMonitoringPutBody {

		/**
		 * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
		 */
		currentVersion: string;

		/**
		 * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
		 */
		enhancedMonitoring?: ClusterInfoEnhancedMonitoring;

		/**
		 * <p>JMX and Node monitoring for the MSK cluster.</p>
		 */
		openMonitoring?: UpdateMonitoringPutBodyOpenMonitoring;
		loggingInfo?: UpdateMonitoringPutBodyLoggingInfo;
	}

	export interface UpdateMonitoringPutBodyOpenMonitoring {

		/**
		 * <p>Prometheus settings.</p>
		 */
		Prometheus?: PrometheusInfo;
	}

	export interface UpdateMonitoringPutBodyLoggingInfo {
		BrokerLogs?: BrokerLogs;
	}

}

