import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateClusterResponse {

		/** Contains all of the attributes of a specific DAX cluster. */
		Cluster?: Cluster;
	}
	export interface CreateClusterResponseFormProperties {
	}
	export function CreateCreateClusterResponseFormGroup() {
		return new FormGroup<CreateClusterResponseFormProperties>({
		});

	}


	/** Contains all of the attributes of a specific DAX cluster. */
	export interface Cluster {
		ClusterName?: string | null;
		Description?: string | null;
		ClusterArn?: string | null;
		TotalNodes?: number | null;
		ActiveNodes?: number | null;
		NodeType?: string | null;
		Status?: string | null;

		/** Represents the information required for client programs to connect to the configuration endpoint for a DAX cluster, or to an individual node within the cluster. */
		ClusterDiscoveryEndpoint?: Endpoint;
		NodeIdsToRemove?: Array<string>;
		Nodes?: Array<Node>;
		PreferredMaintenanceWindow?: string | null;

		/** Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS). */
		NotificationConfiguration?: NotificationConfiguration;
		SubnetGroup?: string | null;
		SecurityGroups?: Array<SecurityGroupMembership>;
		IamRoleArn?: string | null;

		/** The status of a parameter group. */
		ParameterGroup?: ParameterGroupStatus;

		/** The description of the server-side encryption status on the specified DAX cluster. */
		SSEDescription?: SSEDescription;
	}

	/** Contains all of the attributes of a specific DAX cluster. */
	export interface ClusterFormProperties {
		ClusterName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClusterArn: FormControl<string | null | undefined>,
		TotalNodes: FormControl<number | null | undefined>,
		ActiveNodes: FormControl<number | null | undefined>,
		NodeType: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		SubnetGroup: FormControl<string | null | undefined>,
		IamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ClusterArn: new FormControl<string | null | undefined>(undefined),
			TotalNodes: new FormControl<number | null | undefined>(undefined),
			ActiveNodes: new FormControl<number | null | undefined>(undefined),
			NodeType: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			SubnetGroup: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the information required for client programs to connect to the configuration endpoint for a DAX cluster, or to an individual node within the cluster. */
	export interface Endpoint {
		Address?: string | null;
		Port?: number | null;
	}

	/** Represents the information required for client programs to connect to the configuration endpoint for a DAX cluster, or to an individual node within the cluster. */
	export interface EndpointFormProperties {
		Address: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents an individual node within a DAX cluster. */
	export interface Node {
		NodeId?: string | null;

		/** Represents the information required for client programs to connect to the configuration endpoint for a DAX cluster, or to an individual node within the cluster. */
		Endpoint?: Endpoint;
		NodeCreateTime?: Date | null;
		AvailabilityZone?: string | null;
		NodeStatus?: string | null;
		ParameterGroupStatus?: string | null;
	}

	/** Represents an individual node within a DAX cluster. */
	export interface NodeFormProperties {
		NodeId: FormControl<string | null | undefined>,
		NodeCreateTime: FormControl<Date | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		NodeStatus: FormControl<string | null | undefined>,
		ParameterGroupStatus: FormControl<string | null | undefined>,
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
			NodeId: new FormControl<string | null | undefined>(undefined),
			NodeCreateTime: new FormControl<Date | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			NodeStatus: new FormControl<string | null | undefined>(undefined),
			ParameterGroupStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS). */
	export interface NotificationConfiguration {
		TopicArn?: string | null;
		TopicStatus?: string | null;
	}

	/** Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS). */
	export interface NotificationConfigurationFormProperties {
		TopicArn: FormControl<string | null | undefined>,
		TopicStatus: FormControl<string | null | undefined>,
	}
	export function CreateNotificationConfigurationFormGroup() {
		return new FormGroup<NotificationConfigurationFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined),
			TopicStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An individual VPC security group and its status. */
	export interface SecurityGroupMembership {
		SecurityGroupIdentifier?: string | null;
		Status?: string | null;
	}

	/** An individual VPC security group and its status. */
	export interface SecurityGroupMembershipFormProperties {
		SecurityGroupIdentifier: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateSecurityGroupMembershipFormGroup() {
		return new FormGroup<SecurityGroupMembershipFormProperties>({
			SecurityGroupIdentifier: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of a parameter group. */
	export interface ParameterGroupStatus {
		ParameterGroupName?: string | null;
		ParameterApplyStatus?: string | null;
		NodeIdsToReboot?: Array<string>;
	}

	/** The status of a parameter group. */
	export interface ParameterGroupStatusFormProperties {
		ParameterGroupName: FormControl<string | null | undefined>,
		ParameterApplyStatus: FormControl<string | null | undefined>,
	}
	export function CreateParameterGroupStatusFormGroup() {
		return new FormGroup<ParameterGroupStatusFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined),
			ParameterApplyStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of the server-side encryption status on the specified DAX cluster. */
	export interface SSEDescription {
		Status?: SSEDescriptionStatus | null;
	}

	/** The description of the server-side encryption status on the specified DAX cluster. */
	export interface SSEDescriptionFormProperties {
		Status: FormControl<SSEDescriptionStatus | null | undefined>,
	}
	export function CreateSSEDescriptionFormGroup() {
		return new FormGroup<SSEDescriptionFormProperties>({
			Status: new FormControl<SSEDescriptionStatus | null | undefined>(undefined),
		});

	}

	export enum SSEDescriptionStatus { ENABLING = 0, ENABLED = 1, DISABLING = 2, DISABLED = 3 }

	export interface CreateClusterRequest {

		/** Required */
		ClusterName: string;

		/** Required */
		NodeType: string;
		Description?: string | null;

		/** Required */
		ReplicationFactor: number;
		AvailabilityZones?: Array<string>;
		SubnetGroupName?: string | null;
		SecurityGroupIds?: Array<string>;
		PreferredMaintenanceWindow?: string | null;
		NotificationTopicArn?: string | null;

		/** Required */
		IamRoleArn: string;
		ParameterGroupName?: string | null;
		Tags?: Array<Tag>;

		/** Represents the settings used to enable server-side encryption. */
		SSESpecification?: SSESpecification;
	}
	export interface CreateClusterRequestFormProperties {

		/** Required */
		ClusterName: FormControl<string | null | undefined>,

		/** Required */
		NodeType: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		ReplicationFactor: FormControl<number | null | undefined>,
		SubnetGroupName: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		NotificationTopicArn: FormControl<string | null | undefined>,

		/** Required */
		IamRoleArn: FormControl<string | null | undefined>,
		ParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterRequestFormGroup() {
		return new FormGroup<CreateClusterRequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NodeType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ReplicationFactor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SubnetGroupName: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			NotificationTopicArn: new FormControl<string | null | undefined>(undefined),
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParameterGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A description of a tag. Every tag is a key-value pair. You can add up to 50 tags to a single DAX cluster.</p> <p>AWS-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code>.</p> <p>You cannot backdate the application of a tag.</p> */
	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}

	/** <p>A description of a tag. Every tag is a key-value pair. You can add up to 50 tags to a single DAX cluster.</p> <p>AWS-assigned tag names and values are automatically assigned the <code>aws:</code> prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix <code>user:</code>.</p> <p>You cannot backdate the application of a tag.</p> */
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


	/** Represents the settings used to enable server-side encryption. */
	export interface SSESpecification {

		/** Required */
		Enabled: boolean;
	}

	/** Represents the settings used to enable server-side encryption. */
	export interface SSESpecificationFormProperties {

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSSESpecificationFormGroup() {
		return new FormGroup<SSESpecificationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClusterAlreadyExistsFault {
	}
	export interface ClusterAlreadyExistsFaultFormProperties {
	}
	export function CreateClusterAlreadyExistsFaultFormGroup() {
		return new FormGroup<ClusterAlreadyExistsFaultFormProperties>({
		});

	}

	export interface InvalidClusterStateFault {
	}
	export interface InvalidClusterStateFaultFormProperties {
	}
	export function CreateInvalidClusterStateFaultFormGroup() {
		return new FormGroup<InvalidClusterStateFaultFormProperties>({
		});

	}

	export interface InsufficientClusterCapacityFault {
	}
	export interface InsufficientClusterCapacityFaultFormProperties {
	}
	export function CreateInsufficientClusterCapacityFaultFormGroup() {
		return new FormGroup<InsufficientClusterCapacityFaultFormProperties>({
		});

	}

	export interface SubnetGroupNotFoundFault {
	}
	export interface SubnetGroupNotFoundFaultFormProperties {
	}
	export function CreateSubnetGroupNotFoundFaultFormGroup() {
		return new FormGroup<SubnetGroupNotFoundFaultFormProperties>({
		});

	}

	export interface InvalidParameterGroupStateFault {
	}
	export interface InvalidParameterGroupStateFaultFormProperties {
	}
	export function CreateInvalidParameterGroupStateFaultFormGroup() {
		return new FormGroup<InvalidParameterGroupStateFaultFormProperties>({
		});

	}

	export interface ParameterGroupNotFoundFault {
	}
	export interface ParameterGroupNotFoundFaultFormProperties {
	}
	export function CreateParameterGroupNotFoundFaultFormGroup() {
		return new FormGroup<ParameterGroupNotFoundFaultFormProperties>({
		});

	}

	export interface ClusterQuotaForCustomerExceededFault {
	}
	export interface ClusterQuotaForCustomerExceededFaultFormProperties {
	}
	export function CreateClusterQuotaForCustomerExceededFaultFormGroup() {
		return new FormGroup<ClusterQuotaForCustomerExceededFaultFormProperties>({
		});

	}

	export interface NodeQuotaForClusterExceededFault {
	}
	export interface NodeQuotaForClusterExceededFaultFormProperties {
	}
	export function CreateNodeQuotaForClusterExceededFaultFormGroup() {
		return new FormGroup<NodeQuotaForClusterExceededFaultFormProperties>({
		});

	}

	export interface NodeQuotaForCustomerExceededFault {
	}
	export interface NodeQuotaForCustomerExceededFaultFormProperties {
	}
	export function CreateNodeQuotaForCustomerExceededFaultFormGroup() {
		return new FormGroup<NodeQuotaForCustomerExceededFaultFormProperties>({
		});

	}

	export interface InvalidVPCNetworkStateFault {
	}
	export interface InvalidVPCNetworkStateFaultFormProperties {
	}
	export function CreateInvalidVPCNetworkStateFaultFormGroup() {
		return new FormGroup<InvalidVPCNetworkStateFaultFormProperties>({
		});

	}

	export interface TagQuotaPerResourceExceeded {
	}
	export interface TagQuotaPerResourceExceededFormProperties {
	}
	export function CreateTagQuotaPerResourceExceededFormGroup() {
		return new FormGroup<TagQuotaPerResourceExceededFormProperties>({
		});

	}

	export interface ServiceLinkedRoleNotFoundFault {
	}
	export interface ServiceLinkedRoleNotFoundFaultFormProperties {
	}
	export function CreateServiceLinkedRoleNotFoundFaultFormGroup() {
		return new FormGroup<ServiceLinkedRoleNotFoundFaultFormProperties>({
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

	export interface InvalidParameterCombinationException {
	}
	export interface InvalidParameterCombinationExceptionFormProperties {
	}
	export function CreateInvalidParameterCombinationExceptionFormGroup() {
		return new FormGroup<InvalidParameterCombinationExceptionFormProperties>({
		});

	}

	export interface CreateParameterGroupResponse {

		/** A named set of parameters that are applied to all of the nodes in a DAX cluster. */
		ParameterGroup?: ParameterGroup;
	}
	export interface CreateParameterGroupResponseFormProperties {
	}
	export function CreateCreateParameterGroupResponseFormGroup() {
		return new FormGroup<CreateParameterGroupResponseFormProperties>({
		});

	}


	/** A named set of parameters that are applied to all of the nodes in a DAX cluster. */
	export interface ParameterGroup {
		ParameterGroupName?: string | null;
		Description?: string | null;
	}

	/** A named set of parameters that are applied to all of the nodes in a DAX cluster. */
	export interface ParameterGroupFormProperties {
		ParameterGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateParameterGroupFormGroup() {
		return new FormGroup<ParameterGroupFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateParameterGroupRequest {

		/** Required */
		ParameterGroupName: string;
		Description?: string | null;
	}
	export interface CreateParameterGroupRequestFormProperties {

		/** Required */
		ParameterGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateParameterGroupRequestFormGroup() {
		return new FormGroup<CreateParameterGroupRequestFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ParameterGroupQuotaExceededFault {
	}
	export interface ParameterGroupQuotaExceededFaultFormProperties {
	}
	export function CreateParameterGroupQuotaExceededFaultFormGroup() {
		return new FormGroup<ParameterGroupQuotaExceededFaultFormProperties>({
		});

	}

	export interface ParameterGroupAlreadyExistsFault {
	}
	export interface ParameterGroupAlreadyExistsFaultFormProperties {
	}
	export function CreateParameterGroupAlreadyExistsFaultFormGroup() {
		return new FormGroup<ParameterGroupAlreadyExistsFaultFormProperties>({
		});

	}

	export interface CreateSubnetGroupResponse {

		/** <p>Represents the output of one of the following actions:</p> <ul> <li> <p> <i>CreateSubnetGroup</i> </p> </li> <li> <p> <i>ModifySubnetGroup</i> </p> </li> </ul> */
		SubnetGroup?: SubnetGroup;
	}
	export interface CreateSubnetGroupResponseFormProperties {
	}
	export function CreateCreateSubnetGroupResponseFormGroup() {
		return new FormGroup<CreateSubnetGroupResponseFormProperties>({
		});

	}


	/** <p>Represents the output of one of the following actions:</p> <ul> <li> <p> <i>CreateSubnetGroup</i> </p> </li> <li> <p> <i>ModifySubnetGroup</i> </p> </li> </ul> */
	export interface SubnetGroup {
		SubnetGroupName?: string | null;
		Description?: string | null;
		VpcId?: string | null;
		Subnets?: Array<Subnet>;
	}

	/** <p>Represents the output of one of the following actions:</p> <ul> <li> <p> <i>CreateSubnetGroup</i> </p> </li> <li> <p> <i>ModifySubnetGroup</i> </p> </li> </ul> */
	export interface SubnetGroupFormProperties {
		SubnetGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateSubnetGroupFormGroup() {
		return new FormGroup<SubnetGroupFormProperties>({
			SubnetGroupName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the subnet associated with a DAX cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with DAX. */
	export interface Subnet {
		SubnetIdentifier?: string | null;
		SubnetAvailabilityZone?: string | null;
	}

	/** Represents the subnet associated with a DAX cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with DAX. */
	export interface SubnetFormProperties {
		SubnetIdentifier: FormControl<string | null | undefined>,
		SubnetAvailabilityZone: FormControl<string | null | undefined>,
	}
	export function CreateSubnetFormGroup() {
		return new FormGroup<SubnetFormProperties>({
			SubnetIdentifier: new FormControl<string | null | undefined>(undefined),
			SubnetAvailabilityZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSubnetGroupRequest {

		/** Required */
		SubnetGroupName: string;
		Description?: string | null;

		/** Required */
		SubnetIds: Array<string>;
	}
	export interface CreateSubnetGroupRequestFormProperties {

		/** Required */
		SubnetGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateSubnetGroupRequestFormGroup() {
		return new FormGroup<CreateSubnetGroupRequestFormProperties>({
			SubnetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubnetGroupAlreadyExistsFault {
	}
	export interface SubnetGroupAlreadyExistsFaultFormProperties {
	}
	export function CreateSubnetGroupAlreadyExistsFaultFormGroup() {
		return new FormGroup<SubnetGroupAlreadyExistsFaultFormProperties>({
		});

	}

	export interface SubnetGroupQuotaExceededFault {
	}
	export interface SubnetGroupQuotaExceededFaultFormProperties {
	}
	export function CreateSubnetGroupQuotaExceededFaultFormGroup() {
		return new FormGroup<SubnetGroupQuotaExceededFaultFormProperties>({
		});

	}

	export interface SubnetQuotaExceededFault {
	}
	export interface SubnetQuotaExceededFaultFormProperties {
	}
	export function CreateSubnetQuotaExceededFaultFormGroup() {
		return new FormGroup<SubnetQuotaExceededFaultFormProperties>({
		});

	}

	export interface InvalidSubnet {
	}
	export interface InvalidSubnetFormProperties {
	}
	export function CreateInvalidSubnetFormGroup() {
		return new FormGroup<InvalidSubnetFormProperties>({
		});

	}

	export interface DecreaseReplicationFactorResponse {

		/** Contains all of the attributes of a specific DAX cluster. */
		Cluster?: Cluster;
	}
	export interface DecreaseReplicationFactorResponseFormProperties {
	}
	export function CreateDecreaseReplicationFactorResponseFormGroup() {
		return new FormGroup<DecreaseReplicationFactorResponseFormProperties>({
		});

	}

	export interface DecreaseReplicationFactorRequest {

		/** Required */
		ClusterName: string;

		/** Required */
		NewReplicationFactor: number;
		AvailabilityZones?: Array<string>;
		NodeIdsToRemove?: Array<string>;
	}
	export interface DecreaseReplicationFactorRequestFormProperties {

		/** Required */
		ClusterName: FormControl<string | null | undefined>,

		/** Required */
		NewReplicationFactor: FormControl<number | null | undefined>,
	}
	export function CreateDecreaseReplicationFactorRequestFormGroup() {
		return new FormGroup<DecreaseReplicationFactorRequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NewReplicationFactor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClusterNotFoundFault {
	}
	export interface ClusterNotFoundFaultFormProperties {
	}
	export function CreateClusterNotFoundFaultFormGroup() {
		return new FormGroup<ClusterNotFoundFaultFormProperties>({
		});

	}

	export interface NodeNotFoundFault {
	}
	export interface NodeNotFoundFaultFormProperties {
	}
	export function CreateNodeNotFoundFaultFormGroup() {
		return new FormGroup<NodeNotFoundFaultFormProperties>({
		});

	}

	export interface DeleteClusterResponse {

		/** Contains all of the attributes of a specific DAX cluster. */
		Cluster?: Cluster;
	}
	export interface DeleteClusterResponseFormProperties {
	}
	export function CreateDeleteClusterResponseFormGroup() {
		return new FormGroup<DeleteClusterResponseFormProperties>({
		});

	}

	export interface DeleteClusterRequest {

		/** Required */
		ClusterName: string;
	}
	export interface DeleteClusterRequestFormProperties {

		/** Required */
		ClusterName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteClusterRequestFormGroup() {
		return new FormGroup<DeleteClusterRequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteParameterGroupResponse {
		DeletionMessage?: string | null;
	}
	export interface DeleteParameterGroupResponseFormProperties {
		DeletionMessage: FormControl<string | null | undefined>,
	}
	export function CreateDeleteParameterGroupResponseFormGroup() {
		return new FormGroup<DeleteParameterGroupResponseFormProperties>({
			DeletionMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteParameterGroupRequest {

		/** Required */
		ParameterGroupName: string;
	}
	export interface DeleteParameterGroupRequestFormProperties {

		/** Required */
		ParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteParameterGroupRequestFormGroup() {
		return new FormGroup<DeleteParameterGroupRequestFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSubnetGroupResponse {
		DeletionMessage?: string | null;
	}
	export interface DeleteSubnetGroupResponseFormProperties {
		DeletionMessage: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSubnetGroupResponseFormGroup() {
		return new FormGroup<DeleteSubnetGroupResponseFormProperties>({
			DeletionMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSubnetGroupRequest {

		/** Required */
		SubnetGroupName: string;
	}
	export interface DeleteSubnetGroupRequestFormProperties {

		/** Required */
		SubnetGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSubnetGroupRequestFormGroup() {
		return new FormGroup<DeleteSubnetGroupRequestFormProperties>({
			SubnetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubnetGroupInUseFault {
	}
	export interface SubnetGroupInUseFaultFormProperties {
	}
	export function CreateSubnetGroupInUseFaultFormGroup() {
		return new FormGroup<SubnetGroupInUseFaultFormProperties>({
		});

	}

	export interface DescribeClustersResponse {
		NextToken?: string | null;
		Clusters?: Array<Cluster>;
	}
	export interface DescribeClustersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClustersResponseFormGroup() {
		return new FormGroup<DescribeClustersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeClustersRequest {
		ClusterNames?: Array<string>;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeClustersRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClustersRequestFormGroup() {
		return new FormGroup<DescribeClustersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDefaultParametersResponse {
		NextToken?: string | null;
		Parameters?: Array<Parameter>;
	}
	export interface DescribeDefaultParametersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDefaultParametersResponseFormGroup() {
		return new FormGroup<DescribeDefaultParametersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an individual setting that controls some aspect of DAX behavior. */
	export interface Parameter {
		ParameterName?: string | null;
		ParameterType?: ParameterParameterType | null;
		ParameterValue?: string | null;
		NodeTypeSpecificValues?: Array<NodeTypeSpecificValue>;
		Description?: string | null;
		Source?: string | null;
		DataType?: string | null;
		AllowedValues?: string | null;
		IsModifiable?: ParameterIsModifiable | null;
		ChangeType?: ParameterChangeType | null;
	}

	/** Describes an individual setting that controls some aspect of DAX behavior. */
	export interface ParameterFormProperties {
		ParameterName: FormControl<string | null | undefined>,
		ParameterType: FormControl<ParameterParameterType | null | undefined>,
		ParameterValue: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		DataType: FormControl<string | null | undefined>,
		AllowedValues: FormControl<string | null | undefined>,
		IsModifiable: FormControl<ParameterIsModifiable | null | undefined>,
		ChangeType: FormControl<ParameterChangeType | null | undefined>,
	}
	export function CreateParameterFormGroup() {
		return new FormGroup<ParameterFormProperties>({
			ParameterName: new FormControl<string | null | undefined>(undefined),
			ParameterType: new FormControl<ParameterParameterType | null | undefined>(undefined),
			ParameterValue: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined),
			AllowedValues: new FormControl<string | null | undefined>(undefined),
			IsModifiable: new FormControl<ParameterIsModifiable | null | undefined>(undefined),
			ChangeType: new FormControl<ParameterChangeType | null | undefined>(undefined),
		});

	}

	export enum ParameterParameterType { DEFAULT = 0, NODE_TYPE_SPECIFIC = 1 }


	/** Represents a parameter value that is applicable to a particular node type. */
	export interface NodeTypeSpecificValue {
		NodeType?: string | null;
		Value?: string | null;
	}

	/** Represents a parameter value that is applicable to a particular node type. */
	export interface NodeTypeSpecificValueFormProperties {
		NodeType: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateNodeTypeSpecificValueFormGroup() {
		return new FormGroup<NodeTypeSpecificValueFormProperties>({
			NodeType: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ParameterIsModifiable { TRUE = 0, FALSE = 1, CONDITIONAL = 2 }

	export enum ParameterChangeType { IMMEDIATE = 0, REQUIRES_REBOOT = 1 }

	export interface DescribeDefaultParametersRequest {
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeDefaultParametersRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDefaultParametersRequestFormGroup() {
		return new FormGroup<DescribeDefaultParametersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventsResponse {
		NextToken?: string | null;
		Events?: Array<Event>;
	}
	export interface DescribeEventsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsResponseFormGroup() {
		return new FormGroup<DescribeEventsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single occurrence of something interesting within the system. Some examples of events are creating a DAX cluster, adding or removing a node, or rebooting a node. */
	export interface Event {
		SourceName?: string | null;
		SourceType?: EventSourceType | null;
		Message?: string | null;
		Date?: Date | null;
	}

	/** Represents a single occurrence of something interesting within the system. Some examples of events are creating a DAX cluster, adding or removing a node, or rebooting a node. */
	export interface EventFormProperties {
		SourceName: FormControl<string | null | undefined>,
		SourceType: FormControl<EventSourceType | null | undefined>,
		Message: FormControl<string | null | undefined>,
		Date: FormControl<Date | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			SourceName: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<EventSourceType | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EventSourceType { CLUSTER = 0, PARAMETER_GROUP = 1, SUBNET_GROUP = 2 }

	export interface DescribeEventsRequest {
		SourceName?: string | null;
		SourceType?: EventSourceType | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		Duration?: number | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeEventsRequestFormProperties {
		SourceName: FormControl<string | null | undefined>,
		SourceType: FormControl<EventSourceType | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsRequestFormGroup() {
		return new FormGroup<DescribeEventsRequestFormProperties>({
			SourceName: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<EventSourceType | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeParameterGroupsResponse {
		NextToken?: string | null;
		ParameterGroups?: Array<ParameterGroup>;
	}
	export interface DescribeParameterGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeParameterGroupsResponseFormGroup() {
		return new FormGroup<DescribeParameterGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeParameterGroupsRequest {
		ParameterGroupNames?: Array<string>;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeParameterGroupsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeParameterGroupsRequestFormGroup() {
		return new FormGroup<DescribeParameterGroupsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeParametersResponse {
		NextToken?: string | null;
		Parameters?: Array<Parameter>;
	}
	export interface DescribeParametersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeParametersResponseFormGroup() {
		return new FormGroup<DescribeParametersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeParametersRequest {

		/** Required */
		ParameterGroupName: string;
		Source?: string | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeParametersRequestFormProperties {

		/** Required */
		ParameterGroupName: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeParametersRequestFormGroup() {
		return new FormGroup<DescribeParametersRequestFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Source: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSubnetGroupsResponse {
		NextToken?: string | null;
		SubnetGroups?: Array<SubnetGroup>;
	}
	export interface DescribeSubnetGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSubnetGroupsResponseFormGroup() {
		return new FormGroup<DescribeSubnetGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSubnetGroupsRequest {
		SubnetGroupNames?: Array<string>;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeSubnetGroupsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSubnetGroupsRequestFormGroup() {
		return new FormGroup<DescribeSubnetGroupsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IncreaseReplicationFactorResponse {

		/** Contains all of the attributes of a specific DAX cluster. */
		Cluster?: Cluster;
	}
	export interface IncreaseReplicationFactorResponseFormProperties {
	}
	export function CreateIncreaseReplicationFactorResponseFormGroup() {
		return new FormGroup<IncreaseReplicationFactorResponseFormProperties>({
		});

	}

	export interface IncreaseReplicationFactorRequest {

		/** Required */
		ClusterName: string;

		/** Required */
		NewReplicationFactor: number;
		AvailabilityZones?: Array<string>;
	}
	export interface IncreaseReplicationFactorRequestFormProperties {

		/** Required */
		ClusterName: FormControl<string | null | undefined>,

		/** Required */
		NewReplicationFactor: FormControl<number | null | undefined>,
	}
	export function CreateIncreaseReplicationFactorRequestFormGroup() {
		return new FormGroup<IncreaseReplicationFactorRequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NewReplicationFactor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsResponse {
		Tags?: Array<Tag>;
		NextToken?: string | null;
	}
	export interface ListTagsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsRequest {

		/** Required */
		ResourceName: string;
		NextToken?: string | null;
	}
	export interface ListTagsRequestFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsRequestFormGroup() {
		return new FormGroup<ListTagsRequestFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidARNFault {
	}
	export interface InvalidARNFaultFormProperties {
	}
	export function CreateInvalidARNFaultFormGroup() {
		return new FormGroup<InvalidARNFaultFormProperties>({
		});

	}

	export interface RebootNodeResponse {

		/** Contains all of the attributes of a specific DAX cluster. */
		Cluster?: Cluster;
	}
	export interface RebootNodeResponseFormProperties {
	}
	export function CreateRebootNodeResponseFormGroup() {
		return new FormGroup<RebootNodeResponseFormProperties>({
		});

	}

	export interface RebootNodeRequest {

		/** Required */
		ClusterName: string;

		/** Required */
		NodeId: string;
	}
	export interface RebootNodeRequestFormProperties {

		/** Required */
		ClusterName: FormControl<string | null | undefined>,

		/** Required */
		NodeId: FormControl<string | null | undefined>,
	}
	export function CreateRebootNodeRequestFormGroup() {
		return new FormGroup<RebootNodeRequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NodeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceName: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceName: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagNotFoundFault {
	}
	export interface TagNotFoundFaultFormProperties {
	}
	export function CreateTagNotFoundFaultFormGroup() {
		return new FormGroup<TagNotFoundFaultFormProperties>({
		});

	}

	export interface UpdateClusterResponse {

		/** Contains all of the attributes of a specific DAX cluster. */
		Cluster?: Cluster;
	}
	export interface UpdateClusterResponseFormProperties {
	}
	export function CreateUpdateClusterResponseFormGroup() {
		return new FormGroup<UpdateClusterResponseFormProperties>({
		});

	}

	export interface UpdateClusterRequest {

		/** Required */
		ClusterName: string;
		Description?: string | null;
		PreferredMaintenanceWindow?: string | null;
		NotificationTopicArn?: string | null;
		NotificationTopicStatus?: string | null;
		ParameterGroupName?: string | null;
		SecurityGroupIds?: Array<string>;
	}
	export interface UpdateClusterRequestFormProperties {

		/** Required */
		ClusterName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		NotificationTopicArn: FormControl<string | null | undefined>,
		NotificationTopicStatus: FormControl<string | null | undefined>,
		ParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterRequestFormGroup() {
		return new FormGroup<UpdateClusterRequestFormProperties>({
			ClusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			NotificationTopicArn: new FormControl<string | null | undefined>(undefined),
			NotificationTopicStatus: new FormControl<string | null | undefined>(undefined),
			ParameterGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateParameterGroupResponse {

		/** A named set of parameters that are applied to all of the nodes in a DAX cluster. */
		ParameterGroup?: ParameterGroup;
	}
	export interface UpdateParameterGroupResponseFormProperties {
	}
	export function CreateUpdateParameterGroupResponseFormGroup() {
		return new FormGroup<UpdateParameterGroupResponseFormProperties>({
		});

	}

	export interface UpdateParameterGroupRequest {

		/** Required */
		ParameterGroupName: string;

		/** Required */
		ParameterNameValues: Array<ParameterNameValue>;
	}
	export interface UpdateParameterGroupRequestFormProperties {

		/** Required */
		ParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateParameterGroupRequestFormGroup() {
		return new FormGroup<UpdateParameterGroupRequestFormProperties>({
			ParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An individual DAX parameter. */
	export interface ParameterNameValue {
		ParameterName?: string | null;
		ParameterValue?: string | null;
	}

	/** An individual DAX parameter. */
	export interface ParameterNameValueFormProperties {
		ParameterName: FormControl<string | null | undefined>,
		ParameterValue: FormControl<string | null | undefined>,
	}
	export function CreateParameterNameValueFormGroup() {
		return new FormGroup<ParameterNameValueFormProperties>({
			ParameterName: new FormControl<string | null | undefined>(undefined),
			ParameterValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSubnetGroupResponse {

		/** <p>Represents the output of one of the following actions:</p> <ul> <li> <p> <i>CreateSubnetGroup</i> </p> </li> <li> <p> <i>ModifySubnetGroup</i> </p> </li> </ul> */
		SubnetGroup?: SubnetGroup;
	}
	export interface UpdateSubnetGroupResponseFormProperties {
	}
	export function CreateUpdateSubnetGroupResponseFormGroup() {
		return new FormGroup<UpdateSubnetGroupResponseFormProperties>({
		});

	}

	export interface UpdateSubnetGroupRequest {

		/** Required */
		SubnetGroupName: string;
		Description?: string | null;
		SubnetIds?: Array<string>;
	}
	export interface UpdateSubnetGroupRequestFormProperties {

		/** Required */
		SubnetGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSubnetGroupRequestFormGroup() {
		return new FormGroup<UpdateSubnetGroupRequestFormProperties>({
			SubnetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubnetInUse {
	}
	export interface SubnetInUseFormProperties {
	}
	export function CreateSubnetInUseFormGroup() {
		return new FormGroup<SubnetInUseFormProperties>({
		});

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

	export enum CreateClusterX_Amz_Target { 'AmazonDAXV3.CreateCluster' = 0 }

	export enum CreateParameterGroupX_Amz_Target { 'AmazonDAXV3.CreateParameterGroup' = 0 }

	export enum CreateSubnetGroupX_Amz_Target { 'AmazonDAXV3.CreateSubnetGroup' = 0 }

	export enum DecreaseReplicationFactorX_Amz_Target { 'AmazonDAXV3.DecreaseReplicationFactor' = 0 }

	export enum DeleteClusterX_Amz_Target { 'AmazonDAXV3.DeleteCluster' = 0 }

	export enum DeleteParameterGroupX_Amz_Target { 'AmazonDAXV3.DeleteParameterGroup' = 0 }

	export enum DeleteSubnetGroupX_Amz_Target { 'AmazonDAXV3.DeleteSubnetGroup' = 0 }

	export enum DescribeClustersX_Amz_Target { 'AmazonDAXV3.DescribeClusters' = 0 }

	export enum DescribeDefaultParametersX_Amz_Target { 'AmazonDAXV3.DescribeDefaultParameters' = 0 }

	export enum DescribeEventsX_Amz_Target { 'AmazonDAXV3.DescribeEvents' = 0 }

	export enum DescribeParameterGroupsX_Amz_Target { 'AmazonDAXV3.DescribeParameterGroups' = 0 }

	export enum DescribeParametersX_Amz_Target { 'AmazonDAXV3.DescribeParameters' = 0 }

	export enum DescribeSubnetGroupsX_Amz_Target { 'AmazonDAXV3.DescribeSubnetGroups' = 0 }

	export enum IncreaseReplicationFactorX_Amz_Target { 'AmazonDAXV3.IncreaseReplicationFactor' = 0 }

	export enum ListTagsX_Amz_Target { 'AmazonDAXV3.ListTags' = 0 }

	export enum RebootNodeX_Amz_Target { 'AmazonDAXV3.RebootNode' = 0 }

	export enum TagResourceX_Amz_Target { 'AmazonDAXV3.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AmazonDAXV3.UntagResource' = 0 }

	export enum UpdateClusterX_Amz_Target { 'AmazonDAXV3.UpdateCluster' = 0 }

	export enum UpdateParameterGroupX_Amz_Target { 'AmazonDAXV3.UpdateParameterGroup' = 0 }

	export enum UpdateSubnetGroupX_Amz_Target { 'AmazonDAXV3.UpdateSubnetGroup' = 0 }

}

