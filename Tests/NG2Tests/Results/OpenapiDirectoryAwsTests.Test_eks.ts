import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateClusterResponse {

		/** An object representing an Amazon EKS cluster. */
		cluster?: Cluster;
	}


	/** An object representing an Amazon EKS cluster. */
	export interface Cluster {
		name?: string;
		arn?: string;
		createdAt?: Date;
		version?: string;
		endpoint?: string;
		roleArn?: string;

		/** An object representing an Amazon EKS cluster VPC configuration response. */
		resourcesVpcConfig?: VpcConfigResponse;

		/** An object representing the logging configuration for resources in your cluster. */
		logging?: Logging;

		/** An object representing an identity provider for authentication credentials. */
		identity?: Identity;
		status?: ClusterStatus;

		/** An object representing the <code>certificate-authority-data</code> for your cluster. */
		certificateAuthority?: Certificate;
		clientRequestToken?: string;
		platformVersion?: string;
		tags?: TagMap;
		encryptionConfig?: Array<EncryptionConfig>;
	}


	/** An object representing an Amazon EKS cluster VPC configuration response. */
	export interface VpcConfigResponse {
		subnetIds?: Array<string>;
		securityGroupIds?: Array<string>;
		clusterSecurityGroupId?: string;
		vpcId?: string;
		endpointPublicAccess?: boolean;
		endpointPrivateAccess?: boolean;
		publicAccessCidrs?: Array<string>;
	}


	/** An object representing the logging configuration for resources in your cluster. */
	export interface Logging {
		clusterLogging?: Array<LogSetup>;
	}


	/** An object representing the enabled or disabled Kubernetes control plane logs for your cluster. */
	export interface LogSetup {
		types?: Array<LogType>;
		enabled?: boolean;
	}

	export enum LogType { api = 0, audit = 1, authenticator = 2, controllerManager = 3, scheduler = 4 }


	/** An object representing an identity provider for authentication credentials. */
	export interface Identity {

		/** An object representing the <a href="https://openid.net/connect/">OpenID Connect</a> identity provider information for the cluster. */
		oidc?: OIDC;
	}


	/** An object representing the <a href="https://openid.net/connect/">OpenID Connect</a> identity provider information for the cluster. */
	export interface OIDC {
		issuer?: string;
	}

	export enum ClusterStatus { CREATING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3, UPDATING = 4 }


	/** An object representing the <code>certificate-authority-data</code> for your cluster. */
	export interface Certificate {
		data?: string;
	}

	export interface TagMap {
	}


	/** The encryption configuration for the cluster. */
	export interface EncryptionConfig {
		resources?: Array<string>;

		/** Identifies the AWS Key Management Service (AWS KMS) customer master key (CMK) used to encrypt the secrets. */
		provider?: Provider;
	}


	/** Identifies the AWS Key Management Service (AWS KMS) customer master key (CMK) used to encrypt the secrets. */
	export interface Provider {
		keyArn?: string;
	}

	export interface ResourceInUseException {
	}

	export interface ResourceLimitExceededException {
	}

	export interface InvalidParameterException {
	}

	export interface ClientException {
	}

	export interface ServerException {
	}

	export interface ServiceUnavailableException {
	}

	export interface UnsupportedAvailabilityZoneException {
	}

	export interface CreateFargateProfileResponse {

		/** An object representing an AWS Fargate profile. */
		fargateProfile?: FargateProfile;
	}


	/** An object representing an AWS Fargate profile. */
	export interface FargateProfile {
		fargateProfileName?: string;
		fargateProfileArn?: string;
		clusterName?: string;
		createdAt?: Date;
		podExecutionRoleArn?: string;
		subnets?: Array<string>;
		selectors?: Array<FargateProfileSelector>;
		status?: FargateProfileStatus;
		tags?: TagMap;
	}


	/** An object representing an AWS Fargate profile selector. */
	export interface FargateProfileSelector {
		namespace?: string;
		labels?: FargateProfileLabel;
	}

	export interface FargateProfileLabel {
	}

	export enum FargateProfileStatus { CREATING = 0, ACTIVE = 1, DELETING = 2, CREATE_FAILED = 3, DELETE_FAILED = 4 }

	export interface InvalidRequestException {
	}

	export interface CreateNodegroupResponse {

		/** An object representing an Amazon EKS managed node group. */
		nodegroup?: Nodegroup;
	}


	/** An object representing an Amazon EKS managed node group. */
	export interface Nodegroup {
		nodegroupName?: string;
		nodegroupArn?: string;
		clusterName?: string;
		version?: string;
		releaseVersion?: string;
		createdAt?: Date;
		modifiedAt?: Date;
		status?: NodegroupStatus;

		/** An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. */
		scalingConfig?: NodegroupScalingConfig;
		instanceTypes?: Array<string>;
		subnets?: Array<string>;

		/** An object representing the remote access configuration for the managed node group. */
		remoteAccess?: RemoteAccessConfig;
		amiType?: NodegroupAmiType;
		nodeRole?: string;
		labels?: LabelsMap;

		/** An object representing the resources associated with the node group, such as Auto Scaling groups and security groups for remote access. */
		resources?: NodegroupResources;
		diskSize?: number;

		/** An object representing the health status of the node group. */
		health?: NodegroupHealth;
		tags?: TagMap;
	}

	export enum NodegroupStatus { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3, CREATE_FAILED = 4, DELETE_FAILED = 5, DEGRADED = 6 }


	/** An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. */
	export interface NodegroupScalingConfig {
		minSize?: number;
		maxSize?: number;
		desiredSize?: number;
	}


	/** An object representing the remote access configuration for the managed node group. */
	export interface RemoteAccessConfig {
		ec2SshKey?: string;
		sourceSecurityGroups?: Array<string>;
	}

	export enum NodegroupAmiType { AL2_x86_64 = 0, AL2_x86_64_GPU = 1 }

	export interface LabelsMap {
	}


	/** An object representing the resources associated with the node group, such as Auto Scaling groups and security groups for remote access. */
	export interface NodegroupResources {
		autoScalingGroups?: Array<AutoScalingGroup>;
		remoteAccessSecurityGroup?: string;
	}


	/** An Auto Scaling group that is associated with an Amazon EKS managed node group. */
	export interface AutoScalingGroup {
		name?: string;
	}


	/** An object representing the health status of the node group. */
	export interface NodegroupHealth {
		issues?: Array<Issue>;
	}


	/** An object representing an issue with an Amazon EKS resource. */
	export interface Issue {
		code?: IssueCode;
		message?: string;
		resourceIds?: Array<string>;
	}

	export enum IssueCode { AutoScalingGroupNotFound = 0, AutoScalingGroupInvalidConfiguration = 1, Ec2SecurityGroupNotFound = 2, Ec2SecurityGroupDeletionFailure = 3, Ec2LaunchTemplateNotFound = 4, Ec2LaunchTemplateVersionMismatch = 5, Ec2SubnetNotFound = 6, Ec2SubnetInvalidConfiguration = 7, IamInstanceProfileNotFound = 8, IamLimitExceeded = 9, IamNodeRoleNotFound = 10, NodeCreationFailure = 11, AsgInstanceLaunchFailures = 12, InstanceLimitExceeded = 13, InsufficientFreeAddresses = 14, AccessDenied = 15, InternalFailure = 16 }

	export interface DeleteClusterResponse {

		/** An object representing an Amazon EKS cluster. */
		cluster?: Cluster;
	}

	export interface ResourceNotFoundException {
	}

	export interface DeleteFargateProfileResponse {

		/** An object representing an AWS Fargate profile. */
		fargateProfile?: FargateProfile;
	}

	export interface DeleteNodegroupResponse {

		/** An object representing an Amazon EKS managed node group. */
		nodegroup?: Nodegroup;
	}

	export interface DescribeClusterResponse {

		/** An object representing an Amazon EKS cluster. */
		cluster?: Cluster;
	}

	export interface DescribeFargateProfileResponse {

		/** An object representing an AWS Fargate profile. */
		fargateProfile?: FargateProfile;
	}

	export interface DescribeNodegroupResponse {

		/** An object representing an Amazon EKS managed node group. */
		nodegroup?: Nodegroup;
	}

	export interface DescribeUpdateResponse {

		/** An object representing an asynchronous update. */
		update?: Update;
	}


	/** An object representing an asynchronous update. */
	export interface Update {
		id?: string;
		status?: UpdateStatus;
		type?: UpdateType;
		params?: Array<UpdateParam>;
		createdAt?: Date;
		errors?: Array<ErrorDetail>;
	}

	export enum UpdateStatus { InProgress = 0, Failed = 1, Cancelled = 2, Successful = 3 }

	export enum UpdateType { VersionUpdate = 0, EndpointAccessUpdate = 1, LoggingUpdate = 2, ConfigUpdate = 3 }


	/** An object representing the details of an update request. */
	export interface UpdateParam {
		type?: UpdateParamType;
		value?: string;
	}

	export enum UpdateParamType { Version = 0, PlatformVersion = 1, EndpointPrivateAccess = 2, EndpointPublicAccess = 3, ClusterLogging = 4, DesiredSize = 5, LabelsToAdd = 6, LabelsToRemove = 7, MaxSize = 8, MinSize = 9, ReleaseVersion = 10, PublicAccessCidrs = 11 }


	/** An object representing an error when an asynchronous operation fails. */
	export interface ErrorDetail {
		errorCode?: ErrorDetailErrorCode;
		errorMessage?: string;
		resourceIds?: Array<string>;
	}

	export enum ErrorDetailErrorCode { SubnetNotFound = 0, SecurityGroupNotFound = 1, EniLimitReached = 2, IpNotAvailable = 3, AccessDenied = 4, OperationNotPermitted = 5, VpcIdNotFound = 6, Unknown = 7, NodeCreationFailure = 8, PodEvictionFailure = 9, InsufficientFreeAddresses = 10 }

	export interface ListClustersResponse {
		clusters?: Array<string>;
		nextToken?: string;
	}

	export interface ListFargateProfilesResponse {
		fargateProfileNames?: Array<string>;
		nextToken?: string;
	}

	export interface ListNodegroupsResponse {
		nodegroups?: Array<string>;
		nextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}

	export interface BadRequestException {
	}

	export interface NotFoundException {
	}

	export interface ListUpdatesResponse {
		updateIds?: Array<string>;
		nextToken?: string;
	}

	export interface TagResourceResponse {
	}

	export interface UntagResourceResponse {
	}

	export interface UpdateClusterConfigResponse {

		/** An object representing an asynchronous update. */
		update?: Update;
	}

	export interface UpdateClusterVersionResponse {

		/** An object representing an asynchronous update. */
		update?: Update;
	}

	export interface UpdateNodegroupConfigResponse {

		/** An object representing an asynchronous update. */
		update?: Update;
	}

	export interface UpdateNodegroupVersionResponse {

		/** An object representing an asynchronous update. */
		update?: Update;
	}

	export enum AMITypes { AL2_x86_64 = 0, AL2_x86_64_GPU = 1 }


	/** An object representing the VPC configuration to use for an Amazon EKS cluster. */
	export interface VpcConfigRequest {
		subnetIds?: Array<string>;
		securityGroupIds?: Array<string>;
		endpointPublicAccess?: boolean;
		endpointPrivateAccess?: boolean;
		publicAccessCidrs?: Array<string>;
	}

	export interface CreateClusterRequest {
		name: string;
		version?: string;
		roleArn: string;

		/**
		 * An object representing the VPC configuration to use for an Amazon EKS cluster.
		 * Required
		 */
		resourcesVpcConfig: VpcConfigRequest;

		/** An object representing the logging configuration for resources in your cluster. */
		logging?: Logging;
		clientRequestToken?: string;
		tags?: TagMap;
		encryptionConfig?: Array<EncryptionConfig>;
	}

	export interface CreateFargateProfileRequest {
		fargateProfileName: string;
		podExecutionRoleArn: string;
		subnets?: Array<string>;
		selectors?: Array<FargateProfileSelector>;
		clientRequestToken?: string;
		tags?: TagMap;
	}

	export interface CreateNodegroupRequest {
		nodegroupName: string;

		/** An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. */
		scalingConfig?: NodegroupScalingConfig;
		diskSize?: number;
		subnets: Array<string>;
		instanceTypes?: Array<string>;
		amiType?: NodegroupAmiType;

		/** An object representing the remote access configuration for the managed node group. */
		remoteAccess?: RemoteAccessConfig;
		nodeRole: string;
		labels?: LabelsMap;
		tags?: TagMap;
		clientRequestToken?: string;
		version?: string;
		releaseVersion?: string;
	}

	export interface DeleteClusterRequest {
	}

	export interface DeleteFargateProfileRequest {
	}

	export interface DeleteNodegroupRequest {
	}

	export interface DescribeClusterRequest {
	}

	export interface DescribeFargateProfileRequest {
	}

	export interface DescribeNodegroupRequest {
	}

	export interface DescribeUpdateRequest {
	}

	export enum ErrorCode { SubnetNotFound = 0, SecurityGroupNotFound = 1, EniLimitReached = 2, IpNotAvailable = 3, AccessDenied = 4, OperationNotPermitted = 5, VpcIdNotFound = 6, Unknown = 7, NodeCreationFailure = 8, PodEvictionFailure = 9, InsufficientFreeAddresses = 10 }

	export enum NodegroupIssueCode { AutoScalingGroupNotFound = 0, AutoScalingGroupInvalidConfiguration = 1, Ec2SecurityGroupNotFound = 2, Ec2SecurityGroupDeletionFailure = 3, Ec2LaunchTemplateNotFound = 4, Ec2LaunchTemplateVersionMismatch = 5, Ec2SubnetNotFound = 6, Ec2SubnetInvalidConfiguration = 7, IamInstanceProfileNotFound = 8, IamLimitExceeded = 9, IamNodeRoleNotFound = 10, NodeCreationFailure = 11, AsgInstanceLaunchFailures = 12, InstanceLimitExceeded = 13, InsufficientFreeAddresses = 14, AccessDenied = 15, InternalFailure = 16 }

	export interface ListClustersRequest {
	}

	export interface ListFargateProfilesRequest {
	}

	export interface ListNodegroupsRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface ListUpdatesRequest {
	}

	export interface TagResourceRequest {
		tags: TagMap;
	}

	export interface UntagResourceRequest {
	}

	export interface UpdateClusterConfigRequest {

		/** An object representing the VPC configuration to use for an Amazon EKS cluster. */
		resourcesVpcConfig?: VpcConfigRequest;

		/** An object representing the logging configuration for resources in your cluster. */
		logging?: Logging;
		clientRequestToken?: string;
	}

	export interface UpdateClusterVersionRequest {
		version: string;
		clientRequestToken?: string;
	}


	/** An object representing a Kubernetes label change for a managed node group. */
	export interface UpdateLabelsPayload {
		addOrUpdateLabels?: LabelsMap;
		removeLabels?: Array<string>;
	}

	export interface UpdateNodegroupConfigRequest {

		/** An object representing a Kubernetes label change for a managed node group. */
		labels?: UpdateLabelsPayload;

		/** An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. */
		scalingConfig?: NodegroupScalingConfig;
		clientRequestToken?: string;
	}

	export interface UpdateNodegroupVersionRequest {
		version?: string;
		releaseVersion?: string;
		force?: boolean;
		clientRequestToken?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an Amazon EKS control plane. </p> <p>The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as <code>etcd</code> and the API server. The control plane runs in an account managed by AWS, and the Kubernetes API is exposed via the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single-tenant and unique and runs on its own set of Amazon EC2 instances.</p> <p>The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the worker nodes (for example, to support <code>kubectl exec</code>, <code>logs</code>, and <code>proxy</code> data flows).</p> <p>Amazon EKS worker nodes run in your AWS account and connect to your cluster's control plane via the Kubernetes API server endpoint and a certificate file that is created for your cluster.</p> <p>You can use the <code>endpointPublicAccess</code> and <code>endpointPrivateAccess</code> parameters to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS Cluster Endpoint Access Control</a> in the <i> <i>Amazon EKS User Guide</i> </i>. </p> <p>You can use the <code>logging</code> parameter to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p> <note> <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> </note> <p>Cluster creation typically takes between 10 and 15 minutes. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch worker nodes into your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managing-auth.html">Managing Cluster Authentication</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html">Launching Amazon EKS Worker Nodes</a> in the <i>Amazon EKS User Guide</i>.</p>
		 * Post clusters
		 * @return {CreateClusterResponse} Success
		 */
		CreateCluster(requestBody: CreateClusterPostBody): Observable<CreateClusterResponse> {
			return this.http.post<CreateClusterResponse>(this.baseUri + 'clusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Amazon EKS clusters in your AWS account in the specified Region.
		 * Get clusters
		 * @param {number} maxResults The maximum number of cluster results returned by <code>ListClusters</code> in paginated output. When you use this parameter, <code>ListClusters</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListClusters</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListClusters</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * @param {string} nextToken <p>The <code>nextToken</code> value returned from a previous paginated <code>ListClusters</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * @return {ListClustersResponse} Success
		 */
		ListClusters(maxResults: number, nextToken: string): Observable<ListClustersResponse> {
			return this.http.get<ListClustersResponse>(this.baseUri + 'clusters?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates an AWS Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate.</p> <p>The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile’s selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate.</p> <p>When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes <a href="https://kubernetes.io/docs/admin/authorization/rbac/">Role Based Access Control</a> (RBAC) for authorization so that the <code>kubelet</code> that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p> <p>Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating.</p> <p>If any Fargate profiles in a cluster are in the <code>DELETING</code> status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html">AWS Fargate Profile</a> in the <i>Amazon EKS User Guide</i>.</p>
		 * Post clusters/{name}/fargate-profiles
		 * @param {string} name The name of the Amazon EKS cluster to apply the Fargate profile to.
		 * @return {CreateFargateProfileResponse} Success
		 */
		CreateFargateProfile(name: string, requestBody: CreateFargateProfilePostBody): Observable<CreateFargateProfileResponse> {
			return this.http.post<CreateFargateProfileResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/fargate-profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the AWS Fargate profiles associated with the specified cluster in your AWS account in the specified Region.
		 * Get clusters/{name}/fargate-profiles
		 * @param {string} name The name of the Amazon EKS cluster that you would like to listFargate profiles in.
		 * @param {number} maxResults The maximum number of Fargate profile results returned by <code>ListFargateProfiles</code> in paginated output. When you use this parameter, <code>ListFargateProfiles</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListFargateProfiles</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListFargateProfiles</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated <code>ListFargateProfiles</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * @return {ListFargateProfilesResponse} Success
		 */
		ListFargateProfiles(name: string, maxResults: number, nextToken: string): Observable<ListFargateProfilesResponse> {
			return this.http.get<ListFargateProfilesResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/fargate-profiles&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a managed worker node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster.</p> <p>An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by AWS for an Amazon EKS cluster. Each node group uses a version of the Amazon EKS-optimized Amazon Linux 2 AMI. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed Node Groups</a> in the <i>Amazon EKS User Guide</i>. </p>
		 * Post clusters/{name}/node-groups
		 * @param {string} name The name of the cluster to create the node group in.
		 * @return {CreateNodegroupResponse} Success
		 */
		CreateNodegroup(name: string, requestBody: CreateNodegroupPostBody): Observable<CreateNodegroupResponse> {
			return this.http.post<CreateNodegroupResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/node-groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Amazon EKS managed node groups associated with the specified cluster in your AWS account in the specified Region. Self-managed node groups are not listed.
		 * Get clusters/{name}/node-groups
		 * @param {string} name The name of the Amazon EKS cluster that you would like to list node groups in.
		 * @param {number} maxResults The maximum number of node group results returned by <code>ListNodegroups</code> in paginated output. When you use this parameter, <code>ListNodegroups</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListNodegroups</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListNodegroups</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated <code>ListNodegroups</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * @return {ListNodegroupsResponse} Success
		 */
		ListNodegroups(name: string, maxResults: number, nextToken: string): Observable<ListNodegroupsResponse> {
			return this.http.get<ListNodegroupsResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/node-groups&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Deletes the Amazon EKS cluster control plane.</p> <p>If you have active services in your cluster that are associated with a load balancer, you must delete those services before deleting the cluster so that the load balancers are deleted properly. Otherwise, you can have orphaned resources in your VPC that prevent you from being able to delete the VPC. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/delete-cluster.html">Deleting a Cluster</a> in the <i>Amazon EKS User Guide</i>.</p> <p>If you have managed node groups or Fargate profiles attached to the cluster, you must delete them first. For more information, see <a>DeleteNodegroup</a> and <a>DeleteFargateProfile</a>.</p>
		 * Delete clusters/{name}
		 * @param {string} name The name of the cluster to delete.
		 * @return {DeleteClusterResponse} Success
		 */
		DeleteCluster(name: string): Observable<DeleteClusterResponse> {
			return this.http.delete<DeleteClusterResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * <p>Returns descriptive information about an Amazon EKS cluster.</p> <p>The API server endpoint and certificate authority data returned by this operation are required for <code>kubelet</code> and <code>kubectl</code> to communicate with your Kubernetes API server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html">Create a kubeconfig for Amazon EKS</a>.</p> <note> <p>The API server endpoint and certificate authority data aren't available until the cluster reaches the <code>ACTIVE</code> state.</p> </note>
		 * Get clusters/{name}
		 * @param {string} name The name of the cluster to describe.
		 * @return {DescribeClusterResponse} Success
		 */
		DescribeCluster(name: string): Observable<DescribeClusterResponse> {
			return this.http.get<DescribeClusterResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * <p>Deletes an AWS Fargate profile.</p> <p>When you delete a Fargate profile, any pods running on Fargate that were created with the profile are deleted. If those pods match another Fargate profile, then they are scheduled on Fargate with that profile. If they no longer match any Fargate profiles, then they are not scheduled on Fargate and they may remain in a pending state.</p> <p>Only one Fargate profile in a cluster can be in the <code>DELETING</code> status at a time. You must wait for a Fargate profile to finish deleting before you can delete any other profiles in that cluster.</p>
		 * Delete clusters/{name}/fargate-profiles/{fargateProfileName}
		 * @param {string} name The name of the Amazon EKS cluster associated with the Fargate profile to delete.
		 * @param {string} fargateProfileName The name of the Fargate profile to delete.
		 * @return {DeleteFargateProfileResponse} Success
		 */
		DeleteFargateProfile(name: string, fargateProfileName: string): Observable<DeleteFargateProfileResponse> {
			return this.http.delete<DeleteFargateProfileResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/fargate-profiles/' + (fargateProfileName == null ? '' : encodeURIComponent(fargateProfileName)), {});
		}

		/**
		 * Returns descriptive information about an AWS Fargate profile.
		 * Get clusters/{name}/fargate-profiles/{fargateProfileName}
		 * @param {string} name The name of the Amazon EKS cluster associated with the Fargate profile.
		 * @param {string} fargateProfileName The name of the Fargate profile to describe.
		 * @return {DescribeFargateProfileResponse} Success
		 */
		DescribeFargateProfile(name: string, fargateProfileName: string): Observable<DescribeFargateProfileResponse> {
			return this.http.get<DescribeFargateProfileResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/fargate-profiles/' + (fargateProfileName == null ? '' : encodeURIComponent(fargateProfileName)), {});
		}

		/**
		 * Deletes an Amazon EKS node group for a cluster.
		 * Delete clusters/{name}/node-groups/{nodegroupName}
		 * @param {string} name The name of the Amazon EKS cluster that is associated with your node group.
		 * @param {string} nodegroupName The name of the node group to delete.
		 * @return {DeleteNodegroupResponse} Success
		 */
		DeleteNodegroup(name: string, nodegroupName: string): Observable<DeleteNodegroupResponse> {
			return this.http.delete<DeleteNodegroupResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/node-groups/' + (nodegroupName == null ? '' : encodeURIComponent(nodegroupName)), {});
		}

		/**
		 * Returns descriptive information about an Amazon EKS node group.
		 * Get clusters/{name}/node-groups/{nodegroupName}
		 * @param {string} name The name of the Amazon EKS cluster associated with the node group.
		 * @param {string} nodegroupName The name of the node group to describe.
		 * @return {DescribeNodegroupResponse} Success
		 */
		DescribeNodegroup(name: string, nodegroupName: string): Observable<DescribeNodegroupResponse> {
			return this.http.get<DescribeNodegroupResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/node-groups/' + (nodegroupName == null ? '' : encodeURIComponent(nodegroupName)), {});
		}

		/**
		 * <p>Returns descriptive information about an update against your Amazon EKS cluster or associated managed node group.</p> <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an update fails, the status is <code>Failed</code>, and an error detail explains the reason for the failure.</p>
		 * Get clusters/{name}/updates/{updateId}
		 * @param {string} name The name of the Amazon EKS cluster associated with the update.
		 * @param {string} updateId The ID of the update to describe.
		 * @param {string} nodegroupName The name of the Amazon EKS node group associated with the update.
		 * @return {DescribeUpdateResponse} Success
		 */
		DescribeUpdate(name: string, updateId: string, nodegroupName: string): Observable<DescribeUpdateResponse> {
			return this.http.get<DescribeUpdateResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/updates/' + (updateId == null ? '' : encodeURIComponent(updateId)) + '&nodegroupName=' + (nodegroupName == null ? '' : encodeURIComponent(nodegroupName)), {});
		}

		/**
		 * List the tags for an Amazon EKS resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well. Tags that you create for Amazon EKS resources do not propagate to any other resources associated with the cluster. For example, if you tag a cluster with this operation, that tag does not automatically propagate to the subnets and worker nodes associated with the cluster.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource to which to add tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the updates associated with an Amazon EKS cluster or managed node group in your AWS account, in the specified Region.
		 * Get clusters/{name}/updates
		 * @param {string} name The name of the Amazon EKS cluster to list updates for.
		 * @param {string} nodegroupName The name of the Amazon EKS managed node group to list updates for.
		 * @param {string} nextToken The <code>nextToken</code> value returned from a previous paginated <code>ListUpdates</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
		 * @param {number} maxResults The maximum number of update results returned by <code>ListUpdates</code> in paginated output. When you use this parameter, <code>ListUpdates</code> returns only <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListUpdates</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListUpdates</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
		 * @return {ListUpdatesResponse} Success
		 */
		ListUpdates(name: string, nodegroupName: string, nextToken: string, maxResults: number): Observable<ListUpdatesResponse> {
			return this.http.get<ListUpdatesResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/updates&nodegroupName=' + (nodegroupName == null ? '' : encodeURIComponent(nodegroupName)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Updates an Amazon EKS cluster to the specified Kubernetes version. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p> <p>If your cluster has managed node groups attached to it, all of your node groups’ Kubernetes versions must match the cluster’s Kubernetes version in order to update the cluster to a new Kubernetes version.</p>
		 * Post clusters/{name}/updates
		 * @param {string} name The name of the Amazon EKS cluster to update.
		 * @return {UpdateClusterVersionResponse} Success
		 */
		UpdateClusterVersion(name: string, requestBody: UpdateClusterVersionPostBody): Observable<UpdateClusterVersionResponse> {
			return this.http.post<UpdateClusterVersionResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/updates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes specified tags from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource from which to delete tags. Currently, the supported resources are Amazon EKS clusters and managed node groups.
		 * @param {Array<string>} tagKeys The keys of the tags to be removed.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * <p>Updates an Amazon EKS cluster configuration. Your cluster continues to function during the update. The response output includes an update ID that you can use to track the status of your cluster update with the <a>DescribeUpdate</a> API operation.</p> <p>You can use this API operation to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p> <note> <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> </note> <p>You can also use this API operation to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS Cluster Endpoint Access Control</a> in the <i> <i>Amazon EKS User Guide</i> </i>. </p> <important> <p>At this time, you can not update the subnets or security group IDs for an existing cluster.</p> </important> <p>Cluster updates are asynchronous, and they should finish within a few minutes. During an update, the cluster status moves to <code>UPDATING</code> (this status transition is eventually consistent). When the update is complete (either <code>Failed</code> or <code>Successful</code>), the cluster status moves to <code>Active</code>.</p>
		 * Post clusters/{name}/update-config
		 * @param {string} name The name of the Amazon EKS cluster to update.
		 * @return {UpdateClusterConfigResponse} Success
		 */
		UpdateClusterConfig(name: string, requestBody: UpdateClusterConfigPostBody): Observable<UpdateClusterConfigResponse> {
			return this.http.post<UpdateClusterConfigResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/update-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the <a>DescribeUpdate</a> API operation. Currently you can update the Kubernetes labels for a node group or the scaling configuration.
		 * Post clusters/{name}/node-groups/{nodegroupName}/update-config
		 * @param {string} name The name of the Amazon EKS cluster that the managed node group resides in.
		 * @param {string} nodegroupName The name of the managed node group to update.
		 * @return {UpdateNodegroupConfigResponse} Success
		 */
		UpdateNodegroupConfig(name: string, nodegroupName: string, requestBody: UpdateNodegroupConfigPostBody): Observable<UpdateNodegroupConfigResponse> {
			return this.http.post<UpdateNodegroupConfigResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/node-groups/' + (nodegroupName == null ? '' : encodeURIComponent(nodegroupName)) + '/update-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the Kubernetes version or AMI version of an Amazon EKS managed node group.</p> <p>You can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS-Optimized Linux AMI Versions</a> in the <i>Amazon EKS User Guide</i>.</p> <p>You cannot roll back a node group to an earlier Kubernetes version or AMI version.</p> <p>When a node in a managed node group is terminated due to a scaling action or update, the pods in that node are drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can <code>force</code> the update if Amazon EKS is unable to drain the nodes as a result of a pod disruption budget issue.</p>
		 * Post clusters/{name}/node-groups/{nodegroupName}/update-version
		 * @param {string} name The name of the Amazon EKS cluster that is associated with the managed node group to update.
		 * @param {string} nodegroupName The name of the managed node group to update.
		 * @return {UpdateNodegroupVersionResponse} Success
		 */
		UpdateNodegroupVersion(name: string, nodegroupName: string, requestBody: UpdateNodegroupVersionPostBody): Observable<UpdateNodegroupVersionResponse> {
			return this.http.post<UpdateNodegroupVersionResponse>(this.baseUri + 'clusters/' + (name == null ? '' : encodeURIComponent(name)) + '/node-groups/' + (nodegroupName == null ? '' : encodeURIComponent(nodegroupName)) + '/update-version', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateClusterPostBody {

		/**
		 * The unique name to give to your cluster.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^[0-9A-Za-z][A-Za-z0-9\-_]*
		 */
		name: string;

		/** The desired Kubernetes version for your cluster. If you don't specify a value here, the latest version available in Amazon EKS is used. */
		version?: string;

		/**
		 * The Amazon Resource Name (ARN) of the IAM role that provides permissions for Amazon EKS to make calls to other AWS API operations on your behalf. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html">Amazon EKS Service IAM Role</a> in the <i> <i>Amazon EKS User Guide</i> </i>.
		 * Required
		 */
		roleArn: string;

		/**
		 * An object representing the VPC configuration to use for an Amazon EKS cluster.
		 * Required
		 */
		resourcesVpcConfig: CreateClusterPostBodyResourcesVpcConfig;

		/** An object representing the logging configuration for resources in your cluster. */
		logging?: CreateClusterPostBodyLogging;

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string;

		/** The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. */
		tags?: {[id: string]: string };

		/**
		 * The encryption configuration for the cluster.
		 * Maximum items: 1
		 */
		encryptionConfig?: Array<EncryptionConfig>;
	}

	export interface CreateClusterPostBodyResourcesVpcConfig {
		subnetIds?: Array<string>;
		securityGroupIds?: Array<string>;
		endpointPublicAccess?: boolean;
		endpointPrivateAccess?: boolean;
		publicAccessCidrs?: Array<string>;
	}

	export interface CreateClusterPostBodyLogging {
		clusterLogging?: Array<LogSetup>;
	}

	export interface CreateFargateProfilePostBody {

		/**
		 * The name of the Fargate profile.
		 * Required
		 */
		fargateProfileName: string;

		/**
		 * The Amazon Resource Name (ARN) of the pod execution role to use for pods that match the selectors in the Fargate profile. The pod execution role allows Fargate infrastructure to register with your cluster as a node, and it provides read access to Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.
		 * Required
		 */
		podExecutionRoleArn: string;

		/** The IDs of subnets to launch your pods into. At this time, pods running on Fargate are not assigned public IP addresses, so only private subnets (with no direct route to an Internet Gateway) are accepted for this parameter. */
		subnets?: Array<string>;

		/** The selectors to match for pods to use this Fargate profile. Each selector must have an associated namespace. Optionally, you can also specify labels for a namespace. You may specify up to five selectors in a Fargate profile. */
		selectors?: Array<FargateProfileSelector>;

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string;

		/** The metadata to apply to the Fargate profile to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Fargate profile tags do not propagate to any other resources associated with the Fargate profile, such as the pods that are scheduled with it. */
		tags?: {[id: string]: string };
	}

	export interface CreateNodegroupPostBody {

		/**
		 * The unique name to give your node group.
		 * Required
		 */
		nodegroupName: string;

		/** An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. */
		scalingConfig?: CreateNodegroupPostBodyScalingConfig;

		/** The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB. */
		diskSize?: number;

		/**
		 * The subnets to use for the Auto Scaling group that is created for your node group. These subnets must have the tag key <code>kubernetes.io/cluster/CLUSTER_NAME</code> with a value of <code>shared</code>, where <code>CLUSTER_NAME</code> is replaced with the name of your cluster.
		 * Required
		 */
		subnets: Array<string>;

		/** The instance type to use for your node group. Currently, you can specify a single instance type for a node group. The default value for this parameter is <code>t3.medium</code>. If you choose a GPU instance type, be sure to specify the <code>AL2_x86_64_GPU</code> with the <code>amiType</code> parameter. */
		instanceTypes?: Array<string>;

		/** The AMI type for your node group. GPU instance types should use the <code>AL2_x86_64_GPU</code> AMI type, which uses the Amazon EKS-optimized Linux AMI with GPU support. Non-GPU instances should use the <code>AL2_x86_64</code> AMI type, which uses the Amazon EKS-optimized Linux AMI. */
		amiType?: NodegroupAmiType;

		/** An object representing the remote access configuration for the managed node group. */
		remoteAccess?: CreateNodegroupPostBodyRemoteAccess;

		/**
		 * The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node <code>kubelet</code> daemon makes calls to AWS APIs on your behalf. Worker nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch worker nodes and register them into a cluster, you must create an IAM role for those worker nodes to use when they are launched. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/worker_node_IAM_role.html">Amazon EKS Worker Node IAM Role</a> in the <i> <i>Amazon EKS User Guide</i> </i>.
		 * Required
		 */
		nodeRole: string;

		/** The Kubernetes labels to be applied to the nodes in the node group when they are created. */
		labels?: {[id: string]: string };

		/** The metadata to apply to the node group to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Node group tags do not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets. */
		tags?: {[id: string]: string };

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string;

		/** The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value. */
		version?: string;

		/** The AMI version of the Amazon EKS-optimized AMI to use with your node group. By default, the latest available AMI version for the node group's current Kubernetes version is used. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS-Optimized Linux AMI Versions</a> in the <i>Amazon EKS User Guide</i>. */
		releaseVersion?: string;
	}

	export interface CreateNodegroupPostBodyScalingConfig {
		minSize?: number;
		maxSize?: number;
		desiredSize?: number;
	}

	export interface CreateNodegroupPostBodyRemoteAccess {
		ec2SshKey?: string;
		sourceSecurityGroups?: Array<string>;
	}

	export interface TagResourcePostBody {

		/**
		 * The tags to add to the resource. A tag is an array of key-value pairs.
		 * Required
		 */
		tags: {[id: string]: string };
	}

	export interface UpdateClusterVersionPostBody {

		/**
		 * The desired Kubernetes version following a successful update.
		 * Required
		 */
		version: string;

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string;
	}

	export interface UpdateClusterConfigPostBody {

		/** An object representing the VPC configuration to use for an Amazon EKS cluster. */
		resourcesVpcConfig?: UpdateClusterConfigPostBodyResourcesVpcConfig;

		/** An object representing the logging configuration for resources in your cluster. */
		logging?: UpdateClusterConfigPostBodyLogging;

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string;
	}

	export interface UpdateClusterConfigPostBodyResourcesVpcConfig {
		subnetIds?: Array<string>;
		securityGroupIds?: Array<string>;
		endpointPublicAccess?: boolean;
		endpointPrivateAccess?: boolean;
		publicAccessCidrs?: Array<string>;
	}

	export interface UpdateClusterConfigPostBodyLogging {
		clusterLogging?: Array<LogSetup>;
	}

	export interface UpdateNodegroupConfigPostBody {

		/** An object representing a Kubernetes label change for a managed node group. */
		labels?: UpdateNodegroupConfigPostBodyLabels;

		/** An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. */
		scalingConfig?: UpdateNodegroupConfigPostBodyScalingConfig;

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string;
	}

	export interface UpdateNodegroupConfigPostBodyLabels {
		addOrUpdateLabels?: LabelsMap;
		removeLabels?: Array<string>;
	}

	export interface UpdateNodegroupConfigPostBodyScalingConfig {
		minSize?: number;
		maxSize?: number;
		desiredSize?: number;
	}

	export interface UpdateNodegroupVersionPostBody {

		/** The Kubernetes version to update to. If no version is specified, then the Kubernetes version of the node group does not change. You can specify the Kubernetes version of the cluster to update the node group to the latest AMI version of the cluster's Kubernetes version. */
		version?: string;

		/** The AMI version of the Amazon EKS-optimized AMI to use for the update. By default, the latest available AMI version for the node group's Kubernetes version is used. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS-Optimized Linux AMI Versions </a> in the <i>Amazon EKS User Guide</i>. */
		releaseVersion?: string;

		/** Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue. If an update fails because pods could not be drained, you can force the update after it fails to terminate the old node whether or not any pods are running on the node. */
		force?: boolean;

		/** Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientRequestToken?: string;
	}

}

