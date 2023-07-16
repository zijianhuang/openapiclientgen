import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateClusterResponse {

		/** Contains all of the attributes of a specific DAX cluster. */
		Cluster?: Cluster;
	}


	/** Contains all of the attributes of a specific DAX cluster. */
	export interface Cluster {
		ClusterName?: string;
		Description?: string;
		ClusterArn?: string;
		TotalNodes?: number;
		ActiveNodes?: number;
		NodeType?: string;
		Status?: string;

		/** Represents the information required for client programs to connect to the configuration endpoint for a DAX cluster, or to an individual node within the cluster. */
		ClusterDiscoveryEndpoint?: Endpoint;
		NodeIdsToRemove?: Array<string>;
		Nodes?: Array<Node>;
		PreferredMaintenanceWindow?: string;

		/** Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS). */
		NotificationConfiguration?: NotificationConfiguration;
		SubnetGroup?: string;
		SecurityGroups?: Array<SecurityGroupMembership>;
		IamRoleArn?: string;

		/** The status of a parameter group. */
		ParameterGroup?: ParameterGroupStatus;

		/** The description of the server-side encryption status on the specified DAX cluster. */
		SSEDescription?: SSEDescription;
	}


	/** Represents the information required for client programs to connect to the configuration endpoint for a DAX cluster, or to an individual node within the cluster. */
	export interface Endpoint {
		Address?: string;
		Port?: number;
	}


	/** Represents an individual node within a DAX cluster. */
	export interface Node {
		NodeId?: string;

		/** Represents the information required for client programs to connect to the configuration endpoint for a DAX cluster, or to an individual node within the cluster. */
		Endpoint?: Endpoint;
		NodeCreateTime?: Date;
		AvailabilityZone?: string;
		NodeStatus?: string;
		ParameterGroupStatus?: string;
	}


	/** Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS). */
	export interface NotificationConfiguration {
		TopicArn?: string;
		TopicStatus?: string;
	}


	/** An individual VPC security group and its status. */
	export interface SecurityGroupMembership {
		SecurityGroupIdentifier?: string;
		Status?: string;
	}


	/** The status of a parameter group. */
	export interface ParameterGroupStatus {
		ParameterGroupName?: string;
		ParameterApplyStatus?: string;
		NodeIdsToReboot?: Array<string>;
	}


	/** The description of the server-side encryption status on the specified DAX cluster. */
	export interface SSEDescription {
		Status?: SSEDescriptionStatus;
	}

	export enum SSEDescriptionStatus { ENABLING = 0, ENABLED = 1, DISABLING = 2, DISABLED = 3 }

	export interface CreateClusterRequest {
		ClusterName: string;
		NodeType: string;
		Description?: string;
		ReplicationFactor: number;
		AvailabilityZones?: Array<string>;
		SubnetGroupName?: string;
		SecurityGroupIds?: Array<string>;
		PreferredMaintenanceWindow?: string;
		NotificationTopicArn?: string;
		IamRoleArn: string;
		ParameterGroupName?: string;
		Tags?: Array<Tag>;

		/** Represents the settings used to enable server-side encryption. */
		SSESpecification?: SSESpecification;
	}


	/** <p>A description of a tag. Every tag is a key-value pair. You can add up to 50 tags to a single DAX cluster.</p> <p>AWS-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code>.</p> <p>You cannot backdate the application of a tag.</p> */
	export interface Tag {
		Key?: string;
		Value?: string;
	}


	/** Represents the settings used to enable server-side encryption. */
	export interface SSESpecification {
		Enabled: boolean;
	}

	export interface ClusterAlreadyExistsFault {
	}

	export interface InvalidClusterStateFault {
	}

	export interface InsufficientClusterCapacityFault {
	}

	export interface SubnetGroupNotFoundFault {
	}

	export interface InvalidParameterGroupStateFault {
	}

	export interface ParameterGroupNotFoundFault {
	}

	export interface ClusterQuotaForCustomerExceededFault {
	}

	export interface NodeQuotaForClusterExceededFault {
	}

	export interface NodeQuotaForCustomerExceededFault {
	}

	export interface InvalidVPCNetworkStateFault {
	}

	export interface TagQuotaPerResourceExceeded {
	}

	export interface ServiceLinkedRoleNotFoundFault {
	}

	export interface InvalidParameterValueException {
	}

	export interface InvalidParameterCombinationException {
	}

	export interface CreateParameterGroupResponse {

		/** A named set of parameters that are applied to all of the nodes in a DAX cluster. */
		ParameterGroup?: ParameterGroup;
	}


	/** A named set of parameters that are applied to all of the nodes in a DAX cluster. */
	export interface ParameterGroup {
		ParameterGroupName?: string;
		Description?: string;
	}

	export interface CreateParameterGroupRequest {
		ParameterGroupName: string;
		Description?: string;
	}

	export interface ParameterGroupQuotaExceededFault {
	}

	export interface ParameterGroupAlreadyExistsFault {
	}

	export interface CreateSubnetGroupResponse {

		/** <p>Represents the output of one of the following actions:</p> <ul> <li> <p> <i>CreateSubnetGroup</i> </p> </li> <li> <p> <i>ModifySubnetGroup</i> </p> </li> </ul> */
		SubnetGroup?: SubnetGroup;
	}


	/** <p>Represents the output of one of the following actions:</p> <ul> <li> <p> <i>CreateSubnetGroup</i> </p> </li> <li> <p> <i>ModifySubnetGroup</i> </p> </li> </ul> */
	export interface SubnetGroup {
		SubnetGroupName?: string;
		Description?: string;
		VpcId?: string;
		Subnets?: Array<Subnet>;
	}


	/** Represents the subnet associated with a DAX cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with DAX. */
	export interface Subnet {
		SubnetIdentifier?: string;
		SubnetAvailabilityZone?: string;
	}

	export interface CreateSubnetGroupRequest {
		SubnetGroupName: string;
		Description?: string;
		SubnetIds: Array<string>;
	}

	export interface SubnetGroupAlreadyExistsFault {
	}

	export interface SubnetGroupQuotaExceededFault {
	}

	export interface SubnetQuotaExceededFault {
	}

	export interface InvalidSubnet {
	}

	export interface DecreaseReplicationFactorResponse {

		/** Contains all of the attributes of a specific DAX cluster. */
		Cluster?: Cluster;
	}

	export interface DecreaseReplicationFactorRequest {
		ClusterName: string;
		NewReplicationFactor: number;
		AvailabilityZones?: Array<string>;
		NodeIdsToRemove?: Array<string>;
	}

	export interface ClusterNotFoundFault {
	}

	export interface NodeNotFoundFault {
	}

	export interface DeleteClusterResponse {

		/** Contains all of the attributes of a specific DAX cluster. */
		Cluster?: Cluster;
	}

	export interface DeleteClusterRequest {
		ClusterName: string;
	}

	export interface DeleteParameterGroupResponse {
		DeletionMessage?: string;
	}

	export interface DeleteParameterGroupRequest {
		ParameterGroupName: string;
	}

	export interface DeleteSubnetGroupResponse {
		DeletionMessage?: string;
	}

	export interface DeleteSubnetGroupRequest {
		SubnetGroupName: string;
	}

	export interface SubnetGroupInUseFault {
	}

	export interface DescribeClustersResponse {
		NextToken?: string;
		Clusters?: Array<Cluster>;
	}

	export interface DescribeClustersRequest {
		ClusterNames?: Array<string>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeDefaultParametersResponse {
		NextToken?: string;
		Parameters?: Array<Parameter>;
	}


	/** Describes an individual setting that controls some aspect of DAX behavior. */
	export interface Parameter {
		ParameterName?: string;
		ParameterType?: ParameterParameterType;
		ParameterValue?: string;
		NodeTypeSpecificValues?: Array<NodeTypeSpecificValue>;
		Description?: string;
		Source?: string;
		DataType?: string;
		AllowedValues?: string;
		IsModifiable?: ParameterIsModifiable;
		ChangeType?: ParameterChangeType;
	}

	export enum ParameterParameterType { DEFAULT = 0, NODE_TYPE_SPECIFIC = 1 }


	/** Represents a parameter value that is applicable to a particular node type. */
	export interface NodeTypeSpecificValue {
		NodeType?: string;
		Value?: string;
	}

	export enum ParameterIsModifiable { TRUE = 0, FALSE = 1, CONDITIONAL = 2 }

	export enum ParameterChangeType { IMMEDIATE = 0, REQUIRES_REBOOT = 1 }

	export interface DescribeDefaultParametersRequest {
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeEventsResponse {
		NextToken?: string;
		Events?: Array<Event>;
	}


	/** Represents a single occurrence of something interesting within the system. Some examples of events are creating a DAX cluster, adding or removing a node, or rebooting a node. */
	export interface Event {
		SourceName?: string;
		SourceType?: EventSourceType;
		Message?: string;
		Date?: Date;
	}

	export enum EventSourceType { CLUSTER = 0, PARAMETER_GROUP = 1, SUBNET_GROUP = 2 }

	export interface DescribeEventsRequest {
		SourceName?: string;
		SourceType?: EventSourceType;
		StartTime?: Date;
		EndTime?: Date;
		Duration?: number;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeParameterGroupsResponse {
		NextToken?: string;
		ParameterGroups?: Array<ParameterGroup>;
	}

	export interface DescribeParameterGroupsRequest {
		ParameterGroupNames?: Array<string>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeParametersResponse {
		NextToken?: string;
		Parameters?: Array<Parameter>;
	}

	export interface DescribeParametersRequest {
		ParameterGroupName: string;
		Source?: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface DescribeSubnetGroupsResponse {
		NextToken?: string;
		SubnetGroups?: Array<SubnetGroup>;
	}

	export interface DescribeSubnetGroupsRequest {
		SubnetGroupNames?: Array<string>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface IncreaseReplicationFactorResponse {

		/** Contains all of the attributes of a specific DAX cluster. */
		Cluster?: Cluster;
	}

	export interface IncreaseReplicationFactorRequest {
		ClusterName: string;
		NewReplicationFactor: number;
		AvailabilityZones?: Array<string>;
	}

	export interface ListTagsResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
	}

	export interface ListTagsRequest {
		ResourceName: string;
		NextToken?: string;
	}

	export interface InvalidARNFault {
	}

	export interface RebootNodeResponse {

		/** Contains all of the attributes of a specific DAX cluster. */
		Cluster?: Cluster;
	}

	export interface RebootNodeRequest {
		ClusterName: string;
		NodeId: string;
	}

	export interface TagResourceResponse {
		Tags?: Array<Tag>;
	}

	export interface TagResourceRequest {
		ResourceName: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceResponse {
		Tags?: Array<Tag>;
	}

	export interface UntagResourceRequest {
		ResourceName: string;
		TagKeys: Array<string>;
	}

	export interface TagNotFoundFault {
	}

	export interface UpdateClusterResponse {

		/** Contains all of the attributes of a specific DAX cluster. */
		Cluster?: Cluster;
	}

	export interface UpdateClusterRequest {
		ClusterName: string;
		Description?: string;
		PreferredMaintenanceWindow?: string;
		NotificationTopicArn?: string;
		NotificationTopicStatus?: string;
		ParameterGroupName?: string;
		SecurityGroupIds?: Array<string>;
	}

	export interface UpdateParameterGroupResponse {

		/** A named set of parameters that are applied to all of the nodes in a DAX cluster. */
		ParameterGroup?: ParameterGroup;
	}

	export interface UpdateParameterGroupRequest {
		ParameterGroupName: string;
		ParameterNameValues: Array<ParameterNameValue>;
	}


	/** An individual DAX parameter. */
	export interface ParameterNameValue {
		ParameterName?: string;
		ParameterValue?: string;
	}

	export interface UpdateSubnetGroupResponse {

		/** <p>Represents the output of one of the following actions:</p> <ul> <li> <p> <i>CreateSubnetGroup</i> </p> </li> <li> <p> <i>ModifySubnetGroup</i> </p> </li> </ul> */
		SubnetGroup?: SubnetGroup;
	}

	export interface UpdateSubnetGroupRequest {
		SubnetGroupName: string;
		Description?: string;
		SubnetIds?: Array<string>;
	}

	export interface SubnetInUse {
	}

	export enum ChangeType { IMMEDIATE = 0, REQUIRES_REBOOT = 1 }

	export enum SourceType { CLUSTER = 0, PARAMETER_GROUP = 1, SUBNET_GROUP = 2 }

	export enum IsModifiable { TRUE = 0, FALSE = 1, CONDITIONAL = 2 }

	export enum ParameterType { DEFAULT = 0, NODE_TYPE_SPECIFIC = 1 }

	export enum SSEStatus { ENABLING = 0, ENABLED = 1, DISABLING = 2, DISABLED = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.
		 * Post #X-Amz-Target=AmazonDAXV3.CreateCluster
		 * @return {CreateClusterResponse} Success
		 */
		CreateCluster(requestBody: CreateClusterRequest): Observable<CreateClusterResponse> {
			return this.http.post<CreateClusterResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.CreateCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.
		 * Post #X-Amz-Target=AmazonDAXV3.CreateParameterGroup
		 * @return {CreateParameterGroupResponse} Success
		 */
		CreateParameterGroup(requestBody: CreateParameterGroupRequest): Observable<CreateParameterGroupResponse> {
			return this.http.post<CreateParameterGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.CreateParameterGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new subnet group.
		 * Post #X-Amz-Target=AmazonDAXV3.CreateSubnetGroup
		 * @return {CreateSubnetGroupResponse} Success
		 */
		CreateSubnetGroup(requestBody: CreateSubnetGroupRequest): Observable<CreateSubnetGroupResponse> {
			return this.http.post<CreateSubnetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes one or more nodes from a DAX cluster.</p> <note> <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p> </note>
		 * Post #X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor
		 * @return {DecreaseReplicationFactorResponse} Success
		 */
		DecreaseReplicationFactor(requestBody: DecreaseReplicationFactorRequest): Observable<DecreaseReplicationFactorResponse> {
			return this.http.post<DecreaseReplicationFactorResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a previously provisioned DAX cluster. <i>DeleteCluster</i> deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.
		 * Post #X-Amz-Target=AmazonDAXV3.DeleteCluster
		 * @return {DeleteClusterResponse} Success
		 */
		DeleteCluster(requestBody: DeleteClusterRequest): Observable<DeleteClusterResponse> {
			return this.http.post<DeleteClusterResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.DeleteCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.
		 * Post #X-Amz-Target=AmazonDAXV3.DeleteParameterGroup
		 * @return {DeleteParameterGroupResponse} Success
		 */
		DeleteParameterGroup(requestBody: DeleteParameterGroupRequest): Observable<DeleteParameterGroupResponse> {
			return this.http.post<DeleteParameterGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a subnet group.</p> <note> <p>You cannot delete a subnet group if it is associated with any DAX clusters.</p> </note>
		 * Post #X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup
		 * @return {DeleteSubnetGroupResponse} Success
		 */
		DeleteSubnetGroup(requestBody: DeleteSubnetGroupRequest): Observable<DeleteSubnetGroupResponse> {
			return this.http.post<DeleteSubnetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied.</p> <p>If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the DELETING state, only cluster level information will be displayed.</p> <p>If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.</p>
		 * Post #X-Amz-Target=AmazonDAXV3.DescribeClusters
		 * @return {DescribeClustersResponse} Success
		 */
		DescribeClusters(requestBody: DescribeClustersRequest): Observable<DescribeClustersResponse> {
			return this.http.post<DescribeClustersResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.DescribeClusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the default system parameter information for the DAX caching software.
		 * Post #X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters
		 * @return {DescribeDefaultParametersResponse} Success
		 */
		DescribeDefaultParameters(requestBody: DescribeDefaultParametersRequest): Observable<DescribeDefaultParametersResponse> {
			return this.http.post<DescribeDefaultParametersResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last 24 hours are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
		 * Post #X-Amz-Target=AmazonDAXV3.DescribeEvents
		 * @return {DescribeEventsResponse} Success
		 */
		DescribeEvents(requestBody: DescribeEventsRequest): Observable<DescribeEventsResponse> {
			return this.http.post<DescribeEventsResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.DescribeEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.
		 * Post #X-Amz-Target=AmazonDAXV3.DescribeParameterGroups
		 * @return {DescribeParameterGroupsResponse} Success
		 */
		DescribeParameterGroups(requestBody: DescribeParameterGroupsRequest): Observable<DescribeParameterGroupsResponse> {
			return this.http.post<DescribeParameterGroupsResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the detailed parameter list for a particular parameter group.
		 * Post #X-Amz-Target=AmazonDAXV3.DescribeParameters
		 * @return {DescribeParametersResponse} Success
		 */
		DescribeParameters(requestBody: DescribeParametersRequest): Observable<DescribeParametersResponse> {
			return this.http.post<DescribeParametersResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.DescribeParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.
		 * Post #X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups
		 * @return {DescribeSubnetGroupsResponse} Success
		 */
		DescribeSubnetGroups(requestBody: DescribeSubnetGroupsRequest): Observable<DescribeSubnetGroupsResponse> {
			return this.http.post<DescribeSubnetGroupsResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds one or more nodes to a DAX cluster.
		 * Post #X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor
		 * @return {IncreaseReplicationFactorResponse} Success
		 */
		IncreaseReplicationFactor(requestBody: IncreaseReplicationFactorRequest): Observable<IncreaseReplicationFactorResponse> {
			return this.http.post<IncreaseReplicationFactorResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to 10 times per second, per account.
		 * Post #X-Amz-Target=AmazonDAXV3.ListTags
		 * @return {ListTagsResponse} Success
		 */
		ListTags(requestBody: ListTagsRequest): Observable<ListTagsResponse> {
			return this.http.post<ListTagsResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.ListTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.</p> <note> <p> <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache. </p> </note>
		 * Post #X-Amz-Target=AmazonDAXV3.RebootNode
		 * @return {RebootNodeResponse} Success
		 */
		RebootNode(requestBody: RebootNodeRequest): Observable<RebootNodeResponse> {
			return this.http.post<RebootNodeResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.RebootNode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a set of tags with a DAX resource. You can call <code>TagResource</code> up to 5 times per second, per account.
		 * Post #X-Amz-Target=AmazonDAXV3.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the association of tags from a DAX resource. You can call <code>UntagResource</code> up to 5 times per second, per account.
		 * Post #X-Amz-Target=AmazonDAXV3.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.
		 * Post #X-Amz-Target=AmazonDAXV3.UpdateCluster
		 * @return {UpdateClusterResponse} Success
		 */
		UpdateCluster(requestBody: UpdateClusterRequest): Observable<UpdateClusterResponse> {
			return this.http.post<UpdateClusterResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.UpdateCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
		 * Post #X-Amz-Target=AmazonDAXV3.UpdateParameterGroup
		 * @return {UpdateParameterGroupResponse} Success
		 */
		UpdateParameterGroup(requestBody: UpdateParameterGroupRequest): Observable<UpdateParameterGroupResponse> {
			return this.http.post<UpdateParameterGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies an existing subnet group.
		 * Post #X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup
		 * @return {UpdateSubnetGroupResponse} Success
		 */
		UpdateSubnetGroup(requestBody: UpdateSubnetGroupRequest): Observable<UpdateSubnetGroupResponse> {
			return this.http.post<UpdateSubnetGroupResponse>(this.baseUri + '#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateClusterX_Amz_Target { AmazonDAXV3_CreateCluster = 0 }

	export enum CreateParameterGroupX_Amz_Target { AmazonDAXV3_CreateParameterGroup = 0 }

	export enum CreateSubnetGroupX_Amz_Target { AmazonDAXV3_CreateSubnetGroup = 0 }

	export enum DecreaseReplicationFactorX_Amz_Target { AmazonDAXV3_DecreaseReplicationFactor = 0 }

	export enum DeleteClusterX_Amz_Target { AmazonDAXV3_DeleteCluster = 0 }

	export enum DeleteParameterGroupX_Amz_Target { AmazonDAXV3_DeleteParameterGroup = 0 }

	export enum DeleteSubnetGroupX_Amz_Target { AmazonDAXV3_DeleteSubnetGroup = 0 }

	export enum DescribeClustersX_Amz_Target { AmazonDAXV3_DescribeClusters = 0 }

	export enum DescribeDefaultParametersX_Amz_Target { AmazonDAXV3_DescribeDefaultParameters = 0 }

	export enum DescribeEventsX_Amz_Target { AmazonDAXV3_DescribeEvents = 0 }

	export enum DescribeParameterGroupsX_Amz_Target { AmazonDAXV3_DescribeParameterGroups = 0 }

	export enum DescribeParametersX_Amz_Target { AmazonDAXV3_DescribeParameters = 0 }

	export enum DescribeSubnetGroupsX_Amz_Target { AmazonDAXV3_DescribeSubnetGroups = 0 }

	export enum IncreaseReplicationFactorX_Amz_Target { AmazonDAXV3_IncreaseReplicationFactor = 0 }

	export enum ListTagsX_Amz_Target { AmazonDAXV3_ListTags = 0 }

	export enum RebootNodeX_Amz_Target { AmazonDAXV3_RebootNode = 0 }

	export enum TagResourceX_Amz_Target { AmazonDAXV3_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { AmazonDAXV3_UntagResource = 0 }

	export enum UpdateClusterX_Amz_Target { AmazonDAXV3_UpdateCluster = 0 }

	export enum UpdateParameterGroupX_Amz_Target { AmazonDAXV3_UpdateParameterGroup = 0 }

	export enum UpdateSubnetGroupX_Amz_Target { AmazonDAXV3_UpdateSubnetGroup = 0 }

}

