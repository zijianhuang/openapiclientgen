import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddSourceIdentifierToSubscriptionResult {
		EventSubscription?: EventSubscription;
	}
	export interface AddSourceIdentifierToSubscriptionResultFormProperties {
	}
	export function CreateAddSourceIdentifierToSubscriptionResultFormGroup() {
		return new FormGroup<AddSourceIdentifierToSubscriptionResultFormProperties>({
		});

	}

	export interface EventSubscription {
		CustomerAwsId?: string | null;
		CustSubscriptionId?: string | null;
		SnsTopicArn?: string | null;
		Status?: string | null;
		SubscriptionCreationTime?: string | null;
		SourceType?: string | null;
		SourceIdsList?: Array<string>;
		EventCategoriesList?: Array<string>;
		Enabled?: boolean | null;
	}
	export interface EventSubscriptionFormProperties {
		CustomerAwsId: FormControl<string | null | undefined>,
		CustSubscriptionId: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		SubscriptionCreationTime: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEventSubscriptionFormGroup() {
		return new FormGroup<EventSubscriptionFormProperties>({
			CustomerAwsId: new FormControl<string | null | undefined>(undefined),
			CustSubscriptionId: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			SubscriptionCreationTime: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SubscriptionNotFoundFault {
	}
	export interface SubscriptionNotFoundFaultFormProperties {
	}
	export function CreateSubscriptionNotFoundFaultFormGroup() {
		return new FormGroup<SubscriptionNotFoundFaultFormProperties>({
		});

	}

	export interface SourceNotFoundFault {
	}
	export interface SourceNotFoundFaultFormProperties {
	}
	export function CreateSourceNotFoundFaultFormGroup() {
		return new FormGroup<SourceNotFoundFaultFormProperties>({
		});

	}

	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}
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

	export interface DBInstanceNotFoundFault {
	}
	export interface DBInstanceNotFoundFaultFormProperties {
	}
	export function CreateDBInstanceNotFoundFaultFormGroup() {
		return new FormGroup<DBInstanceNotFoundFaultFormProperties>({
		});

	}

	export interface DBSnapshotNotFoundFault {
	}
	export interface DBSnapshotNotFoundFaultFormProperties {
	}
	export function CreateDBSnapshotNotFoundFaultFormGroup() {
		return new FormGroup<DBSnapshotNotFoundFaultFormProperties>({
		});

	}

	export interface AuthorizeDBSecurityGroupIngressResult {
		DBSecurityGroup?: DBSecurityGroup;
	}
	export interface AuthorizeDBSecurityGroupIngressResultFormProperties {
	}
	export function CreateAuthorizeDBSecurityGroupIngressResultFormGroup() {
		return new FormGroup<AuthorizeDBSecurityGroupIngressResultFormProperties>({
		});

	}

	export interface DBSecurityGroup {
		OwnerId?: string | null;
		DBSecurityGroupName?: string | null;
		DBSecurityGroupDescription?: string | null;
		VpcId?: string | null;
		EC2SecurityGroups?: Array<string>;
		IPRanges?: Array<string>;
	}
	export interface DBSecurityGroupFormProperties {
		OwnerId: FormControl<string | null | undefined>,
		DBSecurityGroupName: FormControl<string | null | undefined>,
		DBSecurityGroupDescription: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateDBSecurityGroupFormGroup() {
		return new FormGroup<DBSecurityGroupFormProperties>({
			OwnerId: new FormControl<string | null | undefined>(undefined),
			DBSecurityGroupName: new FormControl<string | null | undefined>(undefined),
			DBSecurityGroupDescription: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBSecurityGroupNotFoundFault {
	}
	export interface DBSecurityGroupNotFoundFaultFormProperties {
	}
	export function CreateDBSecurityGroupNotFoundFaultFormGroup() {
		return new FormGroup<DBSecurityGroupNotFoundFaultFormProperties>({
		});

	}

	export interface InvalidDBSecurityGroupStateFault {
	}
	export interface InvalidDBSecurityGroupStateFaultFormProperties {
	}
	export function CreateInvalidDBSecurityGroupStateFaultFormGroup() {
		return new FormGroup<InvalidDBSecurityGroupStateFaultFormProperties>({
		});

	}

	export interface AuthorizationAlreadyExistsFault {
	}
	export interface AuthorizationAlreadyExistsFaultFormProperties {
	}
	export function CreateAuthorizationAlreadyExistsFaultFormGroup() {
		return new FormGroup<AuthorizationAlreadyExistsFaultFormProperties>({
		});

	}

	export interface AuthorizationQuotaExceededFault {
	}
	export interface AuthorizationQuotaExceededFaultFormProperties {
	}
	export function CreateAuthorizationQuotaExceededFaultFormGroup() {
		return new FormGroup<AuthorizationQuotaExceededFaultFormProperties>({
		});

	}

	export interface CopyDBSnapshotResult {
		DBSnapshot?: DBSnapshot;
	}
	export interface CopyDBSnapshotResultFormProperties {
	}
	export function CreateCopyDBSnapshotResultFormGroup() {
		return new FormGroup<CopyDBSnapshotResultFormProperties>({
		});

	}

	export interface DBSnapshot {
		DBSnapshotIdentifier?: string | null;
		DBInstanceIdentifier?: string | null;
		SnapshotCreateTime?: Date | null;
		Engine?: string | null;
		AllocatedStorage?: number | null;
		Status?: string | null;
		Port?: number | null;
		AvailabilityZone?: string | null;
		VpcId?: string | null;
		InstanceCreateTime?: Date | null;
		MasterUsername?: string | null;
		EngineVersion?: string | null;
		LicenseModel?: string | null;
		SnapshotType?: string | null;
		Iops?: number | null;
		OptionGroupName?: string | null;
	}
	export interface DBSnapshotFormProperties {
		DBSnapshotIdentifier: FormControl<string | null | undefined>,
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		SnapshotCreateTime: FormControl<Date | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		InstanceCreateTime: FormControl<Date | null | undefined>,
		MasterUsername: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		SnapshotType: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		OptionGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDBSnapshotFormGroup() {
		return new FormGroup<DBSnapshotFormProperties>({
			DBSnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			SnapshotCreateTime: new FormControl<Date | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			InstanceCreateTime: new FormControl<Date | null | undefined>(undefined),
			MasterUsername: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			SnapshotType: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBSnapshotAlreadyExistsFault {
	}
	export interface DBSnapshotAlreadyExistsFaultFormProperties {
	}
	export function CreateDBSnapshotAlreadyExistsFaultFormGroup() {
		return new FormGroup<DBSnapshotAlreadyExistsFaultFormProperties>({
		});

	}

	export interface InvalidDBSnapshotStateFault {
	}
	export interface InvalidDBSnapshotStateFaultFormProperties {
	}
	export function CreateInvalidDBSnapshotStateFaultFormGroup() {
		return new FormGroup<InvalidDBSnapshotStateFaultFormProperties>({
		});

	}

	export interface SnapshotQuotaExceededFault {
	}
	export interface SnapshotQuotaExceededFaultFormProperties {
	}
	export function CreateSnapshotQuotaExceededFaultFormGroup() {
		return new FormGroup<SnapshotQuotaExceededFaultFormProperties>({
		});

	}

	export interface CreateDBInstanceResult {
		DBInstance?: DBInstance;
	}
	export interface CreateDBInstanceResultFormProperties {
	}
	export function CreateCreateDBInstanceResultFormGroup() {
		return new FormGroup<CreateDBInstanceResultFormProperties>({
		});

	}

	export interface DBInstance {
		DBInstanceIdentifier?: string | null;
		DBInstanceClass?: string | null;
		Engine?: string | null;
		DBInstanceStatus?: string | null;
		MasterUsername?: string | null;
		DBName?: string | null;
		Endpoint?: Endpoint;
		AllocatedStorage?: number | null;
		InstanceCreateTime?: Date | null;
		PreferredBackupWindow?: string | null;
		BackupRetentionPeriod?: number | null;
		DBSecurityGroups?: Array<string>;
		VpcSecurityGroups?: Array<string>;
		DBParameterGroups?: Array<string>;
		AvailabilityZone?: string | null;
		DBSubnetGroup?: DBSubnetGroup;
		PreferredMaintenanceWindow?: string | null;
		PendingModifiedValues?: PendingModifiedValues;
		LatestRestorableTime?: Date | null;
		MultiAZ?: boolean | null;
		EngineVersion?: string | null;
		AutoMinorVersionUpgrade?: boolean | null;
		ReadReplicaSourceDBInstanceIdentifier?: string | null;
		ReadReplicaDBInstanceIdentifiers?: Array<string>;
		LicenseModel?: string | null;
		Iops?: number | null;
		OptionGroupMemberships?: Array<string>;
		CharacterSetName?: string | null;
		SecondaryAvailabilityZone?: string | null;
		PubliclyAccessible?: boolean | null;
	}
	export interface DBInstanceFormProperties {
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		DBInstanceStatus: FormControl<string | null | undefined>,
		MasterUsername: FormControl<string | null | undefined>,
		DBName: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		InstanceCreateTime: FormControl<Date | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		LatestRestorableTime: FormControl<Date | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		ReadReplicaSourceDBInstanceIdentifier: FormControl<string | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		CharacterSetName: FormControl<string | null | undefined>,
		SecondaryAvailabilityZone: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
	}
	export function CreateDBInstanceFormGroup() {
		return new FormGroup<DBInstanceFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			DBInstanceStatus: new FormControl<string | null | undefined>(undefined),
			MasterUsername: new FormControl<string | null | undefined>(undefined),
			DBName: new FormControl<string | null | undefined>(undefined),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			InstanceCreateTime: new FormControl<Date | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			LatestRestorableTime: new FormControl<Date | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			ReadReplicaSourceDBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			CharacterSetName: new FormControl<string | null | undefined>(undefined),
			SecondaryAvailabilityZone: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Endpoint {
		Address?: string | null;
		Port?: number | null;
	}
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

	export interface DBSubnetGroup {
		DBSubnetGroupName?: string | null;
		DBSubnetGroupDescription?: string | null;
		VpcId?: string | null;
		SubnetGroupStatus?: string | null;
		Subnets?: Array<string>;
	}
	export interface DBSubnetGroupFormProperties {
		DBSubnetGroupName: FormControl<string | null | undefined>,
		DBSubnetGroupDescription: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		SubnetGroupStatus: FormControl<string | null | undefined>,
	}
	export function CreateDBSubnetGroupFormGroup() {
		return new FormGroup<DBSubnetGroupFormProperties>({
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			DBSubnetGroupDescription: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			SubnetGroupStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PendingModifiedValues {
		DBInstanceClass?: string | null;
		AllocatedStorage?: number | null;
		MasterUserPassword?: string | null;
		Port?: number | null;
		BackupRetentionPeriod?: number | null;
		MultiAZ?: boolean | null;
		EngineVersion?: string | null;
		Iops?: number | null;
		DBInstanceIdentifier?: string | null;
	}
	export interface PendingModifiedValuesFormProperties {
		DBInstanceClass: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		MasterUserPassword: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		DBInstanceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreatePendingModifiedValuesFormGroup() {
		return new FormGroup<PendingModifiedValuesFormProperties>({
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			MasterUserPassword: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBInstanceAlreadyExistsFault {
	}
	export interface DBInstanceAlreadyExistsFaultFormProperties {
	}
	export function CreateDBInstanceAlreadyExistsFaultFormGroup() {
		return new FormGroup<DBInstanceAlreadyExistsFaultFormProperties>({
		});

	}

	export interface InsufficientDBInstanceCapacityFault {
	}
	export interface InsufficientDBInstanceCapacityFaultFormProperties {
	}
	export function CreateInsufficientDBInstanceCapacityFaultFormGroup() {
		return new FormGroup<InsufficientDBInstanceCapacityFaultFormProperties>({
		});

	}

	export interface DBParameterGroupNotFoundFault {
	}
	export interface DBParameterGroupNotFoundFaultFormProperties {
	}
	export function CreateDBParameterGroupNotFoundFaultFormGroup() {
		return new FormGroup<DBParameterGroupNotFoundFaultFormProperties>({
		});

	}

	export interface InstanceQuotaExceededFault {
	}
	export interface InstanceQuotaExceededFaultFormProperties {
	}
	export function CreateInstanceQuotaExceededFaultFormGroup() {
		return new FormGroup<InstanceQuotaExceededFaultFormProperties>({
		});

	}

	export interface StorageQuotaExceededFault {
	}
	export interface StorageQuotaExceededFaultFormProperties {
	}
	export function CreateStorageQuotaExceededFaultFormGroup() {
		return new FormGroup<StorageQuotaExceededFaultFormProperties>({
		});

	}

	export interface DBSubnetGroupNotFoundFault {
	}
	export interface DBSubnetGroupNotFoundFaultFormProperties {
	}
	export function CreateDBSubnetGroupNotFoundFaultFormGroup() {
		return new FormGroup<DBSubnetGroupNotFoundFaultFormProperties>({
		});

	}

	export interface DBSubnetGroupDoesNotCoverEnoughAZs {
	}
	export interface DBSubnetGroupDoesNotCoverEnoughAZsFormProperties {
	}
	export function CreateDBSubnetGroupDoesNotCoverEnoughAZsFormGroup() {
		return new FormGroup<DBSubnetGroupDoesNotCoverEnoughAZsFormProperties>({
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

	export interface InvalidVPCNetworkStateFault {
	}
	export interface InvalidVPCNetworkStateFaultFormProperties {
	}
	export function CreateInvalidVPCNetworkStateFaultFormGroup() {
		return new FormGroup<InvalidVPCNetworkStateFaultFormProperties>({
		});

	}

	export interface ProvisionedIopsNotAvailableInAZFault {
	}
	export interface ProvisionedIopsNotAvailableInAZFaultFormProperties {
	}
	export function CreateProvisionedIopsNotAvailableInAZFaultFormGroup() {
		return new FormGroup<ProvisionedIopsNotAvailableInAZFaultFormProperties>({
		});

	}

	export interface OptionGroupNotFoundFault {
	}
	export interface OptionGroupNotFoundFaultFormProperties {
	}
	export function CreateOptionGroupNotFoundFaultFormGroup() {
		return new FormGroup<OptionGroupNotFoundFaultFormProperties>({
		});

	}

	export interface CreateDBInstanceReadReplicaResult {
		DBInstance?: DBInstance;
	}
	export interface CreateDBInstanceReadReplicaResultFormProperties {
	}
	export function CreateCreateDBInstanceReadReplicaResultFormGroup() {
		return new FormGroup<CreateDBInstanceReadReplicaResultFormProperties>({
		});

	}

	export interface InvalidDBInstanceStateFault {
	}
	export interface InvalidDBInstanceStateFaultFormProperties {
	}
	export function CreateInvalidDBInstanceStateFaultFormGroup() {
		return new FormGroup<InvalidDBInstanceStateFaultFormProperties>({
		});

	}

	export interface CreateDBParameterGroupResult {
		DBParameterGroup?: DBParameterGroup;
	}
	export interface CreateDBParameterGroupResultFormProperties {
	}
	export function CreateCreateDBParameterGroupResultFormGroup() {
		return new FormGroup<CreateDBParameterGroupResultFormProperties>({
		});

	}

	export interface DBParameterGroup {
		DBParameterGroupName?: string | null;
		DBParameterGroupFamily?: string | null;
		Description?: string | null;
	}
	export interface DBParameterGroupFormProperties {
		DBParameterGroupName: FormControl<string | null | undefined>,
		DBParameterGroupFamily: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateDBParameterGroupFormGroup() {
		return new FormGroup<DBParameterGroupFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined),
			DBParameterGroupFamily: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBParameterGroupQuotaExceededFault {
	}
	export interface DBParameterGroupQuotaExceededFaultFormProperties {
	}
	export function CreateDBParameterGroupQuotaExceededFaultFormGroup() {
		return new FormGroup<DBParameterGroupQuotaExceededFaultFormProperties>({
		});

	}

	export interface DBParameterGroupAlreadyExistsFault {
	}
	export interface DBParameterGroupAlreadyExistsFaultFormProperties {
	}
	export function CreateDBParameterGroupAlreadyExistsFaultFormGroup() {
		return new FormGroup<DBParameterGroupAlreadyExistsFaultFormProperties>({
		});

	}

	export interface CreateDBSecurityGroupResult {
		DBSecurityGroup?: DBSecurityGroup;
	}
	export interface CreateDBSecurityGroupResultFormProperties {
	}
	export function CreateCreateDBSecurityGroupResultFormGroup() {
		return new FormGroup<CreateDBSecurityGroupResultFormProperties>({
		});

	}

	export interface DBSecurityGroupAlreadyExistsFault {
	}
	export interface DBSecurityGroupAlreadyExistsFaultFormProperties {
	}
	export function CreateDBSecurityGroupAlreadyExistsFaultFormGroup() {
		return new FormGroup<DBSecurityGroupAlreadyExistsFaultFormProperties>({
		});

	}

	export interface DBSecurityGroupQuotaExceededFault {
	}
	export interface DBSecurityGroupQuotaExceededFaultFormProperties {
	}
	export function CreateDBSecurityGroupQuotaExceededFaultFormGroup() {
		return new FormGroup<DBSecurityGroupQuotaExceededFaultFormProperties>({
		});

	}

	export interface DBSecurityGroupNotSupportedFault {
	}
	export interface DBSecurityGroupNotSupportedFaultFormProperties {
	}
	export function CreateDBSecurityGroupNotSupportedFaultFormGroup() {
		return new FormGroup<DBSecurityGroupNotSupportedFaultFormProperties>({
		});

	}

	export interface CreateDBSnapshotResult {
		DBSnapshot?: DBSnapshot;
	}
	export interface CreateDBSnapshotResultFormProperties {
	}
	export function CreateCreateDBSnapshotResultFormGroup() {
		return new FormGroup<CreateDBSnapshotResultFormProperties>({
		});

	}

	export interface CreateDBSubnetGroupResult {
		DBSubnetGroup?: DBSubnetGroup;
	}
	export interface CreateDBSubnetGroupResultFormProperties {
	}
	export function CreateCreateDBSubnetGroupResultFormGroup() {
		return new FormGroup<CreateDBSubnetGroupResultFormProperties>({
		});

	}

	export interface DBSubnetGroupAlreadyExistsFault {
	}
	export interface DBSubnetGroupAlreadyExistsFaultFormProperties {
	}
	export function CreateDBSubnetGroupAlreadyExistsFaultFormGroup() {
		return new FormGroup<DBSubnetGroupAlreadyExistsFaultFormProperties>({
		});

	}

	export interface DBSubnetGroupQuotaExceededFault {
	}
	export interface DBSubnetGroupQuotaExceededFaultFormProperties {
	}
	export function CreateDBSubnetGroupQuotaExceededFaultFormGroup() {
		return new FormGroup<DBSubnetGroupQuotaExceededFaultFormProperties>({
		});

	}

	export interface DBSubnetQuotaExceededFault {
	}
	export interface DBSubnetQuotaExceededFaultFormProperties {
	}
	export function CreateDBSubnetQuotaExceededFaultFormGroup() {
		return new FormGroup<DBSubnetQuotaExceededFaultFormProperties>({
		});

	}

	export interface CreateEventSubscriptionResult {
		EventSubscription?: EventSubscription;
	}
	export interface CreateEventSubscriptionResultFormProperties {
	}
	export function CreateCreateEventSubscriptionResultFormGroup() {
		return new FormGroup<CreateEventSubscriptionResultFormProperties>({
		});

	}

	export interface EventSubscriptionQuotaExceededFault {
	}
	export interface EventSubscriptionQuotaExceededFaultFormProperties {
	}
	export function CreateEventSubscriptionQuotaExceededFaultFormGroup() {
		return new FormGroup<EventSubscriptionQuotaExceededFaultFormProperties>({
		});

	}

	export interface SubscriptionAlreadyExistFault {
	}
	export interface SubscriptionAlreadyExistFaultFormProperties {
	}
	export function CreateSubscriptionAlreadyExistFaultFormGroup() {
		return new FormGroup<SubscriptionAlreadyExistFaultFormProperties>({
		});

	}

	export interface SNSInvalidTopicFault {
	}
	export interface SNSInvalidTopicFaultFormProperties {
	}
	export function CreateSNSInvalidTopicFaultFormGroup() {
		return new FormGroup<SNSInvalidTopicFaultFormProperties>({
		});

	}

	export interface SNSNoAuthorizationFault {
	}
	export interface SNSNoAuthorizationFaultFormProperties {
	}
	export function CreateSNSNoAuthorizationFaultFormGroup() {
		return new FormGroup<SNSNoAuthorizationFaultFormProperties>({
		});

	}

	export interface SNSTopicArnNotFoundFault {
	}
	export interface SNSTopicArnNotFoundFaultFormProperties {
	}
	export function CreateSNSTopicArnNotFoundFaultFormGroup() {
		return new FormGroup<SNSTopicArnNotFoundFaultFormProperties>({
		});

	}

	export interface SubscriptionCategoryNotFoundFault {
	}
	export interface SubscriptionCategoryNotFoundFaultFormProperties {
	}
	export function CreateSubscriptionCategoryNotFoundFaultFormGroup() {
		return new FormGroup<SubscriptionCategoryNotFoundFaultFormProperties>({
		});

	}

	export interface CreateOptionGroupResult {
		OptionGroup?: OptionGroup;
	}
	export interface CreateOptionGroupResultFormProperties {
	}
	export function CreateCreateOptionGroupResultFormGroup() {
		return new FormGroup<CreateOptionGroupResultFormProperties>({
		});

	}

	export interface OptionGroup {
		OptionGroupName?: string | null;
		OptionGroupDescription?: string | null;
		EngineName?: string | null;
		MajorEngineVersion?: string | null;
		Options?: Array<string>;
		AllowsVpcAndNonVpcInstanceMemberships?: boolean | null;
		VpcId?: string | null;
	}
	export interface OptionGroupFormProperties {
		OptionGroupName: FormControl<string | null | undefined>,
		OptionGroupDescription: FormControl<string | null | undefined>,
		EngineName: FormControl<string | null | undefined>,
		MajorEngineVersion: FormControl<string | null | undefined>,
		AllowsVpcAndNonVpcInstanceMemberships: FormControl<boolean | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateOptionGroupFormGroup() {
		return new FormGroup<OptionGroupFormProperties>({
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
			OptionGroupDescription: new FormControl<string | null | undefined>(undefined),
			EngineName: new FormControl<string | null | undefined>(undefined),
			MajorEngineVersion: new FormControl<string | null | undefined>(undefined),
			AllowsVpcAndNonVpcInstanceMemberships: new FormControl<boolean | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OptionGroupAlreadyExistsFault {
	}
	export interface OptionGroupAlreadyExistsFaultFormProperties {
	}
	export function CreateOptionGroupAlreadyExistsFaultFormGroup() {
		return new FormGroup<OptionGroupAlreadyExistsFaultFormProperties>({
		});

	}

	export interface OptionGroupQuotaExceededFault {
	}
	export interface OptionGroupQuotaExceededFaultFormProperties {
	}
	export function CreateOptionGroupQuotaExceededFaultFormGroup() {
		return new FormGroup<OptionGroupQuotaExceededFaultFormProperties>({
		});

	}

	export interface DeleteDBInstanceResult {
		DBInstance?: DBInstance;
	}
	export interface DeleteDBInstanceResultFormProperties {
	}
	export function CreateDeleteDBInstanceResultFormGroup() {
		return new FormGroup<DeleteDBInstanceResultFormProperties>({
		});

	}

	export interface InvalidDBParameterGroupStateFault {
	}
	export interface InvalidDBParameterGroupStateFaultFormProperties {
	}
	export function CreateInvalidDBParameterGroupStateFaultFormGroup() {
		return new FormGroup<InvalidDBParameterGroupStateFaultFormProperties>({
		});

	}

	export interface DeleteDBSnapshotResult {
		DBSnapshot?: DBSnapshot;
	}
	export interface DeleteDBSnapshotResultFormProperties {
	}
	export function CreateDeleteDBSnapshotResultFormGroup() {
		return new FormGroup<DeleteDBSnapshotResultFormProperties>({
		});

	}

	export interface InvalidDBSubnetGroupStateFault {
	}
	export interface InvalidDBSubnetGroupStateFaultFormProperties {
	}
	export function CreateInvalidDBSubnetGroupStateFaultFormGroup() {
		return new FormGroup<InvalidDBSubnetGroupStateFaultFormProperties>({
		});

	}

	export interface InvalidDBSubnetStateFault {
	}
	export interface InvalidDBSubnetStateFaultFormProperties {
	}
	export function CreateInvalidDBSubnetStateFaultFormGroup() {
		return new FormGroup<InvalidDBSubnetStateFaultFormProperties>({
		});

	}

	export interface DeleteEventSubscriptionResult {
		EventSubscription?: EventSubscription;
	}
	export interface DeleteEventSubscriptionResultFormProperties {
	}
	export function CreateDeleteEventSubscriptionResultFormGroup() {
		return new FormGroup<DeleteEventSubscriptionResultFormProperties>({
		});

	}

	export interface InvalidEventSubscriptionStateFault {
	}
	export interface InvalidEventSubscriptionStateFaultFormProperties {
	}
	export function CreateInvalidEventSubscriptionStateFaultFormGroup() {
		return new FormGroup<InvalidEventSubscriptionStateFaultFormProperties>({
		});

	}

	export interface InvalidOptionGroupStateFault {
	}
	export interface InvalidOptionGroupStateFaultFormProperties {
	}
	export function CreateInvalidOptionGroupStateFaultFormGroup() {
		return new FormGroup<InvalidOptionGroupStateFaultFormProperties>({
		});

	}

	export interface DBEngineVersionMessage {
		Marker?: string | null;
		DBEngineVersions?: Array<string>;
	}
	export interface DBEngineVersionMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBEngineVersionMessageFormGroup() {
		return new FormGroup<DBEngineVersionMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBInstanceMessage {
		Marker?: string | null;
		DBInstances?: Array<string>;
	}
	export interface DBInstanceMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBInstanceMessageFormGroup() {
		return new FormGroup<DBInstanceMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDBLogFilesResponse {
		DescribeDBLogFiles?: Array<string>;
		Marker?: string | null;
	}
	export interface DescribeDBLogFilesResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBLogFilesResponseFormGroup() {
		return new FormGroup<DescribeDBLogFilesResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBParameterGroupsMessage {
		Marker?: string | null;
		DBParameterGroups?: Array<string>;
	}
	export interface DBParameterGroupsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBParameterGroupsMessageFormGroup() {
		return new FormGroup<DBParameterGroupsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBParameterGroupDetails {
		Parameters?: Array<string>;
		Marker?: string | null;
	}
	export interface DBParameterGroupDetailsFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBParameterGroupDetailsFormGroup() {
		return new FormGroup<DBParameterGroupDetailsFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBSecurityGroupMessage {
		Marker?: string | null;
		DBSecurityGroups?: Array<string>;
	}
	export interface DBSecurityGroupMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBSecurityGroupMessageFormGroup() {
		return new FormGroup<DBSecurityGroupMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBSnapshotMessage {
		Marker?: string | null;
		DBSnapshots?: Array<string>;
	}
	export interface DBSnapshotMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBSnapshotMessageFormGroup() {
		return new FormGroup<DBSnapshotMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBSubnetGroupMessage {
		Marker?: string | null;
		DBSubnetGroups?: Array<string>;
	}
	export interface DBSubnetGroupMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDBSubnetGroupMessageFormGroup() {
		return new FormGroup<DBSubnetGroupMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEngineDefaultParametersResult {
		EngineDefaults?: EngineDefaults;
	}
	export interface DescribeEngineDefaultParametersResultFormProperties {
	}
	export function CreateDescribeEngineDefaultParametersResultFormGroup() {
		return new FormGroup<DescribeEngineDefaultParametersResultFormProperties>({
		});

	}

	export interface EngineDefaults {
		DBParameterGroupFamily?: string | null;
		Marker?: string | null;
		Parameters?: Array<string>;
	}
	export interface EngineDefaultsFormProperties {
		DBParameterGroupFamily: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateEngineDefaultsFormGroup() {
		return new FormGroup<EngineDefaultsFormProperties>({
			DBParameterGroupFamily: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventCategoriesMessage {
		EventCategoriesMapList?: Array<string>;
	}
	export interface EventCategoriesMessageFormProperties {
	}
	export function CreateEventCategoriesMessageFormGroup() {
		return new FormGroup<EventCategoriesMessageFormProperties>({
		});

	}

	export interface EventSubscriptionsMessage {
		Marker?: string | null;
		EventSubscriptionsList?: Array<string>;
	}
	export interface EventSubscriptionsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateEventSubscriptionsMessageFormGroup() {
		return new FormGroup<EventSubscriptionsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventsMessage {
		Marker?: string | null;
		Events?: Array<string>;
	}
	export interface EventsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateEventsMessageFormGroup() {
		return new FormGroup<EventsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OptionGroupOptionsMessage {
		OptionGroupOptions?: Array<string>;
		Marker?: string | null;
	}
	export interface OptionGroupOptionsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateOptionGroupOptionsMessageFormGroup() {
		return new FormGroup<OptionGroupOptionsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OptionGroups {
		OptionGroupsList?: Array<string>;
		Marker?: string | null;
	}
	export interface OptionGroupsFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateOptionGroupsFormGroup() {
		return new FormGroup<OptionGroupsFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderableDBInstanceOptionsMessage {
		OrderableDBInstanceOptions?: Array<string>;
		Marker?: string | null;
	}
	export interface OrderableDBInstanceOptionsMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateOrderableDBInstanceOptionsMessageFormGroup() {
		return new FormGroup<OrderableDBInstanceOptionsMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReservedDBInstanceMessage {
		Marker?: string | null;
		ReservedDBInstances?: Array<string>;
	}
	export interface ReservedDBInstanceMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateReservedDBInstanceMessageFormGroup() {
		return new FormGroup<ReservedDBInstanceMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReservedDBInstanceNotFoundFault {
	}
	export interface ReservedDBInstanceNotFoundFaultFormProperties {
	}
	export function CreateReservedDBInstanceNotFoundFaultFormGroup() {
		return new FormGroup<ReservedDBInstanceNotFoundFaultFormProperties>({
		});

	}

	export interface ReservedDBInstancesOfferingMessage {
		Marker?: string | null;
		ReservedDBInstancesOfferings?: Array<string>;
	}
	export interface ReservedDBInstancesOfferingMessageFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateReservedDBInstancesOfferingMessageFormGroup() {
		return new FormGroup<ReservedDBInstancesOfferingMessageFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReservedDBInstancesOfferingNotFoundFault {
	}
	export interface ReservedDBInstancesOfferingNotFoundFaultFormProperties {
	}
	export function CreateReservedDBInstancesOfferingNotFoundFaultFormGroup() {
		return new FormGroup<ReservedDBInstancesOfferingNotFoundFaultFormProperties>({
		});

	}

	export interface DownloadDBLogFilePortionDetails {
		LogFileData?: string | null;
		Marker?: string | null;
		AdditionalDataPending?: boolean | null;
	}
	export interface DownloadDBLogFilePortionDetailsFormProperties {
		LogFileData: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		AdditionalDataPending: FormControl<boolean | null | undefined>,
	}
	export function CreateDownloadDBLogFilePortionDetailsFormGroup() {
		return new FormGroup<DownloadDBLogFilePortionDetailsFormProperties>({
			LogFileData: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			AdditionalDataPending: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DBLogFileNotFoundFault {
	}
	export interface DBLogFileNotFoundFaultFormProperties {
	}
	export function CreateDBLogFileNotFoundFaultFormGroup() {
		return new FormGroup<DBLogFileNotFoundFaultFormProperties>({
		});

	}

	export interface TagListMessage {
		TagList?: Array<string>;
	}
	export interface TagListMessageFormProperties {
	}
	export function CreateTagListMessageFormGroup() {
		return new FormGroup<TagListMessageFormProperties>({
		});

	}

	export interface ModifyDBInstanceResult {
		DBInstance?: DBInstance;
	}
	export interface ModifyDBInstanceResultFormProperties {
	}
	export function CreateModifyDBInstanceResultFormGroup() {
		return new FormGroup<ModifyDBInstanceResultFormProperties>({
		});

	}

	export interface DBUpgradeDependencyFailureFault {
	}
	export interface DBUpgradeDependencyFailureFaultFormProperties {
	}
	export function CreateDBUpgradeDependencyFailureFaultFormGroup() {
		return new FormGroup<DBUpgradeDependencyFailureFaultFormProperties>({
		});

	}

	export interface DBParameterGroupNameMessage {
		DBParameterGroupName?: string | null;
	}
	export interface DBParameterGroupNameMessageFormProperties {
		DBParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDBParameterGroupNameMessageFormGroup() {
		return new FormGroup<DBParameterGroupNameMessageFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Parameter {
		ParameterName?: string | null;
		ParameterValue?: string | null;
		Description?: string | null;
		Source?: string | null;
		ApplyType?: string | null;
		DataType?: string | null;
		AllowedValues?: string | null;
		IsModifiable?: boolean | null;
		MinimumEngineVersion?: string | null;
		ApplyMethod?: ParameterApplyMethod | null;
	}
	export interface ParameterFormProperties {
		ParameterName: FormControl<string | null | undefined>,
		ParameterValue: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		ApplyType: FormControl<string | null | undefined>,
		DataType: FormControl<string | null | undefined>,
		AllowedValues: FormControl<string | null | undefined>,
		IsModifiable: FormControl<boolean | null | undefined>,
		MinimumEngineVersion: FormControl<string | null | undefined>,
		ApplyMethod: FormControl<ParameterApplyMethod | null | undefined>,
	}
	export function CreateParameterFormGroup() {
		return new FormGroup<ParameterFormProperties>({
			ParameterName: new FormControl<string | null | undefined>(undefined),
			ParameterValue: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			ApplyType: new FormControl<string | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined),
			AllowedValues: new FormControl<string | null | undefined>(undefined),
			IsModifiable: new FormControl<boolean | null | undefined>(undefined),
			MinimumEngineVersion: new FormControl<string | null | undefined>(undefined),
			ApplyMethod: new FormControl<ParameterApplyMethod | null | undefined>(undefined),
		});

	}

	export enum ParameterApplyMethod { immediate = 'immediate', 'pending-reboot' = 'pending-reboot' }

	export interface ModifyDBSubnetGroupResult {
		DBSubnetGroup?: DBSubnetGroup;
	}
	export interface ModifyDBSubnetGroupResultFormProperties {
	}
	export function CreateModifyDBSubnetGroupResultFormGroup() {
		return new FormGroup<ModifyDBSubnetGroupResultFormProperties>({
		});

	}

	export interface SubnetAlreadyInUse {
	}
	export interface SubnetAlreadyInUseFormProperties {
	}
	export function CreateSubnetAlreadyInUseFormGroup() {
		return new FormGroup<SubnetAlreadyInUseFormProperties>({
		});

	}

	export interface ModifyEventSubscriptionResult {
		EventSubscription?: EventSubscription;
	}
	export interface ModifyEventSubscriptionResultFormProperties {
	}
	export function CreateModifyEventSubscriptionResultFormGroup() {
		return new FormGroup<ModifyEventSubscriptionResultFormProperties>({
		});

	}

	export interface ModifyOptionGroupResult {
		OptionGroup?: OptionGroup;
	}
	export interface ModifyOptionGroupResultFormProperties {
	}
	export function CreateModifyOptionGroupResultFormGroup() {
		return new FormGroup<ModifyOptionGroupResultFormProperties>({
		});

	}

	export interface OptionConfiguration {

		/** Required */
		OptionName: string;
		Port?: number | null;
		DBSecurityGroupMemberships?: Array<string>;
		VpcSecurityGroupMemberships?: Array<string>;
		OptionSettings?: Array<string>;
	}
	export interface OptionConfigurationFormProperties {

		/** Required */
		OptionName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
	}
	export function CreateOptionConfigurationFormGroup() {
		return new FormGroup<OptionConfigurationFormProperties>({
			OptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Port: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PromoteReadReplicaResult {
		DBInstance?: DBInstance;
	}
	export interface PromoteReadReplicaResultFormProperties {
	}
	export function CreatePromoteReadReplicaResultFormGroup() {
		return new FormGroup<PromoteReadReplicaResultFormProperties>({
		});

	}

	export interface PurchaseReservedDBInstancesOfferingResult {
		ReservedDBInstance?: ReservedDBInstance;
	}
	export interface PurchaseReservedDBInstancesOfferingResultFormProperties {
	}
	export function CreatePurchaseReservedDBInstancesOfferingResultFormGroup() {
		return new FormGroup<PurchaseReservedDBInstancesOfferingResultFormProperties>({
		});

	}

	export interface ReservedDBInstance {
		ReservedDBInstanceId?: string | null;
		ReservedDBInstancesOfferingId?: string | null;
		DBInstanceClass?: string | null;
		StartTime?: Date | null;
		Duration?: number | null;
		FixedPrice?: number | null;
		UsagePrice?: number | null;
		CurrencyCode?: string | null;
		DBInstanceCount?: number | null;
		ProductDescription?: string | null;
		OfferingType?: string | null;
		MultiAZ?: boolean | null;
		State?: string | null;
		RecurringCharges?: Array<string>;
	}
	export interface ReservedDBInstanceFormProperties {
		ReservedDBInstanceId: FormControl<string | null | undefined>,
		ReservedDBInstancesOfferingId: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		UsagePrice: FormControl<number | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		DBInstanceCount: FormControl<number | null | undefined>,
		ProductDescription: FormControl<string | null | undefined>,
		OfferingType: FormControl<string | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		State: FormControl<string | null | undefined>,
	}
	export function CreateReservedDBInstanceFormGroup() {
		return new FormGroup<ReservedDBInstanceFormProperties>({
			ReservedDBInstanceId: new FormControl<string | null | undefined>(undefined),
			ReservedDBInstancesOfferingId: new FormControl<string | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			DBInstanceCount: new FormControl<number | null | undefined>(undefined),
			ProductDescription: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<string | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReservedDBInstanceAlreadyExistsFault {
	}
	export interface ReservedDBInstanceAlreadyExistsFaultFormProperties {
	}
	export function CreateReservedDBInstanceAlreadyExistsFaultFormGroup() {
		return new FormGroup<ReservedDBInstanceAlreadyExistsFaultFormProperties>({
		});

	}

	export interface ReservedDBInstanceQuotaExceededFault {
	}
	export interface ReservedDBInstanceQuotaExceededFaultFormProperties {
	}
	export function CreateReservedDBInstanceQuotaExceededFaultFormGroup() {
		return new FormGroup<ReservedDBInstanceQuotaExceededFaultFormProperties>({
		});

	}

	export interface RebootDBInstanceResult {
		DBInstance?: DBInstance;
	}
	export interface RebootDBInstanceResultFormProperties {
	}
	export function CreateRebootDBInstanceResultFormGroup() {
		return new FormGroup<RebootDBInstanceResultFormProperties>({
		});

	}

	export interface RemoveSourceIdentifierFromSubscriptionResult {
		EventSubscription?: EventSubscription;
	}
	export interface RemoveSourceIdentifierFromSubscriptionResultFormProperties {
	}
	export function CreateRemoveSourceIdentifierFromSubscriptionResultFormGroup() {
		return new FormGroup<RemoveSourceIdentifierFromSubscriptionResultFormProperties>({
		});

	}

	export interface RestoreDBInstanceFromDBSnapshotResult {
		DBInstance?: DBInstance;
	}
	export interface RestoreDBInstanceFromDBSnapshotResultFormProperties {
	}
	export function CreateRestoreDBInstanceFromDBSnapshotResultFormGroup() {
		return new FormGroup<RestoreDBInstanceFromDBSnapshotResultFormProperties>({
		});

	}

	export interface InvalidRestoreFault {
	}
	export interface InvalidRestoreFaultFormProperties {
	}
	export function CreateInvalidRestoreFaultFormGroup() {
		return new FormGroup<InvalidRestoreFaultFormProperties>({
		});

	}

	export interface RestoreDBInstanceToPointInTimeResult {
		DBInstance?: DBInstance;
	}
	export interface RestoreDBInstanceToPointInTimeResultFormProperties {
	}
	export function CreateRestoreDBInstanceToPointInTimeResultFormGroup() {
		return new FormGroup<RestoreDBInstanceToPointInTimeResultFormProperties>({
		});

	}

	export interface PointInTimeRestoreNotEnabledFault {
	}
	export interface PointInTimeRestoreNotEnabledFaultFormProperties {
	}
	export function CreatePointInTimeRestoreNotEnabledFaultFormGroup() {
		return new FormGroup<PointInTimeRestoreNotEnabledFaultFormProperties>({
		});

	}

	export interface RevokeDBSecurityGroupIngressResult {
		DBSecurityGroup?: DBSecurityGroup;
	}
	export interface RevokeDBSecurityGroupIngressResultFormProperties {
	}
	export function CreateRevokeDBSecurityGroupIngressResultFormGroup() {
		return new FormGroup<RevokeDBSecurityGroupIngressResultFormProperties>({
		});

	}

	export interface AuthorizationNotFoundFault {
	}
	export interface AuthorizationNotFoundFaultFormProperties {
	}
	export function CreateAuthorizationNotFoundFaultFormGroup() {
		return new FormGroup<AuthorizationNotFoundFaultFormProperties>({
		});

	}

	export interface AddSourceIdentifierToSubscriptionMessage {

		/** Required */
		SubscriptionName: string;

		/** Required */
		SourceIdentifier: string;
	}
	export interface AddSourceIdentifierToSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,

		/** Required */
		SourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateAddSourceIdentifierToSubscriptionMessageFormGroup() {
		return new FormGroup<AddSourceIdentifierToSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddTagsToResourceMessage {

		/** Required */
		ResourceName: string;

		/** Required */
		Tags: Array<string>;
	}
	export interface AddTagsToResourceMessageFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsToResourceMessageFormGroup() {
		return new FormGroup<AddTagsToResourceMessageFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ApplyMethod { immediate = 'immediate', 'pending-reboot' = 'pending-reboot' }

	export interface AuthorizeDBSecurityGroupIngressMessage {

		/** Required */
		DBSecurityGroupName: string;
		CIDRIP?: string | null;
		EC2SecurityGroupName?: string | null;
		EC2SecurityGroupId?: string | null;
		EC2SecurityGroupOwnerId?: string | null;
	}
	export interface AuthorizeDBSecurityGroupIngressMessageFormProperties {

		/** Required */
		DBSecurityGroupName: FormControl<string | null | undefined>,
		CIDRIP: FormControl<string | null | undefined>,
		EC2SecurityGroupName: FormControl<string | null | undefined>,
		EC2SecurityGroupId: FormControl<string | null | undefined>,
		EC2SecurityGroupOwnerId: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizeDBSecurityGroupIngressMessageFormGroup() {
		return new FormGroup<AuthorizeDBSecurityGroupIngressMessageFormProperties>({
			DBSecurityGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CIDRIP: new FormControl<string | null | undefined>(undefined),
			EC2SecurityGroupName: new FormControl<string | null | undefined>(undefined),
			EC2SecurityGroupId: new FormControl<string | null | undefined>(undefined),
			EC2SecurityGroupOwnerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AvailabilityZone {
		Name?: string | null;
		ProvisionedIopsCapable?: boolean | null;
	}
	export interface AvailabilityZoneFormProperties {
		Name: FormControl<string | null | undefined>,
		ProvisionedIopsCapable: FormControl<boolean | null | undefined>,
	}
	export function CreateAvailabilityZoneFormGroup() {
		return new FormGroup<AvailabilityZoneFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ProvisionedIopsCapable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CharacterSet {
		CharacterSetName?: string | null;
		CharacterSetDescription?: string | null;
	}
	export interface CharacterSetFormProperties {
		CharacterSetName: FormControl<string | null | undefined>,
		CharacterSetDescription: FormControl<string | null | undefined>,
	}
	export function CreateCharacterSetFormGroup() {
		return new FormGroup<CharacterSetFormProperties>({
			CharacterSetName: new FormControl<string | null | undefined>(undefined),
			CharacterSetDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CopyDBSnapshotMessage {

		/** Required */
		SourceDBSnapshotIdentifier: string;

		/** Required */
		TargetDBSnapshotIdentifier: string;
	}
	export interface CopyDBSnapshotMessageFormProperties {

		/** Required */
		SourceDBSnapshotIdentifier: FormControl<string | null | undefined>,

		/** Required */
		TargetDBSnapshotIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCopyDBSnapshotMessageFormGroup() {
		return new FormGroup<CopyDBSnapshotMessageFormProperties>({
			SourceDBSnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetDBSnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDBInstanceMessage {
		DBName?: string | null;

		/** Required */
		DBInstanceIdentifier: string;

		/** Required */
		AllocatedStorage: number;

		/** Required */
		DBInstanceClass: string;

		/** Required */
		Engine: string;

		/** Required */
		MasterUsername: string;

		/** Required */
		MasterUserPassword: string;
		DBSecurityGroups?: Array<string>;
		VpcSecurityGroupIds?: Array<string>;
		AvailabilityZone?: string | null;
		DBSubnetGroupName?: string | null;
		PreferredMaintenanceWindow?: string | null;
		DBParameterGroupName?: string | null;
		BackupRetentionPeriod?: number | null;
		PreferredBackupWindow?: string | null;
		Port?: number | null;
		MultiAZ?: boolean | null;
		EngineVersion?: string | null;
		AutoMinorVersionUpgrade?: boolean | null;
		LicenseModel?: string | null;
		Iops?: number | null;
		OptionGroupName?: string | null;
		CharacterSetName?: string | null;
		PubliclyAccessible?: boolean | null;
	}
	export interface CreateDBInstanceMessageFormProperties {
		DBName: FormControl<string | null | undefined>,

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,

		/** Required */
		AllocatedStorage: FormControl<number | null | undefined>,

		/** Required */
		DBInstanceClass: FormControl<string | null | undefined>,

		/** Required */
		Engine: FormControl<string | null | undefined>,

		/** Required */
		MasterUsername: FormControl<string | null | undefined>,

		/** Required */
		MasterUserPassword: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		DBSubnetGroupName: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		DBParameterGroupName: FormControl<string | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		OptionGroupName: FormControl<string | null | undefined>,
		CharacterSetName: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDBInstanceMessageFormGroup() {
		return new FormGroup<CreateDBInstanceMessageFormProperties>({
			DBName: new FormControl<string | null | undefined>(undefined),
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Engine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MasterUsername: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MasterUserPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined),
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
			CharacterSetName: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDBInstanceReadReplicaMessage {

		/** Required */
		DBInstanceIdentifier: string;

		/** Required */
		SourceDBInstanceIdentifier: string;
		DBInstanceClass?: string | null;
		AvailabilityZone?: string | null;
		Port?: number | null;
		AutoMinorVersionUpgrade?: boolean | null;
		Iops?: number | null;
		OptionGroupName?: string | null;
		PubliclyAccessible?: boolean | null;
	}
	export interface CreateDBInstanceReadReplicaMessageFormProperties {

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,

		/** Required */
		SourceDBInstanceIdentifier: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		OptionGroupName: FormControl<string | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDBInstanceReadReplicaMessageFormGroup() {
		return new FormGroup<CreateDBInstanceReadReplicaMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceDBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDBParameterGroupMessage {

		/** Required */
		DBParameterGroupName: string;

		/** Required */
		DBParameterGroupFamily: string;

		/** Required */
		Description: string;
	}
	export interface CreateDBParameterGroupMessageFormProperties {

		/** Required */
		DBParameterGroupName: FormControl<string | null | undefined>,

		/** Required */
		DBParameterGroupFamily: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateDBParameterGroupMessageFormGroup() {
		return new FormGroup<CreateDBParameterGroupMessageFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBParameterGroupFamily: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDBSecurityGroupMessage {

		/** Required */
		DBSecurityGroupName: string;

		/** Required */
		DBSecurityGroupDescription: string;
	}
	export interface CreateDBSecurityGroupMessageFormProperties {

		/** Required */
		DBSecurityGroupName: FormControl<string | null | undefined>,

		/** Required */
		DBSecurityGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateDBSecurityGroupMessageFormGroup() {
		return new FormGroup<CreateDBSecurityGroupMessageFormProperties>({
			DBSecurityGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBSecurityGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDBSnapshotMessage {

		/** Required */
		DBSnapshotIdentifier: string;

		/** Required */
		DBInstanceIdentifier: string;
	}
	export interface CreateDBSnapshotMessageFormProperties {

		/** Required */
		DBSnapshotIdentifier: FormControl<string | null | undefined>,

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateDBSnapshotMessageFormGroup() {
		return new FormGroup<CreateDBSnapshotMessageFormProperties>({
			DBSnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDBSubnetGroupMessage {

		/** Required */
		DBSubnetGroupName: string;

		/** Required */
		DBSubnetGroupDescription: string;

		/** Required */
		SubnetIds: Array<string>;
	}
	export interface CreateDBSubnetGroupMessageFormProperties {

		/** Required */
		DBSubnetGroupName: FormControl<string | null | undefined>,

		/** Required */
		DBSubnetGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateDBSubnetGroupMessageFormGroup() {
		return new FormGroup<CreateDBSubnetGroupMessageFormProperties>({
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBSubnetGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;

		/** Required */
		SnsTopicArn: string;
		SourceType?: string | null;
		EventCategories?: Array<string>;
		SourceIds?: Array<string>;
		Enabled?: boolean | null;
	}
	export interface CreateEventSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,

		/** Required */
		SnsTopicArn: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateEventSubscriptionMessageFormGroup() {
		return new FormGroup<CreateEventSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceType: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateOptionGroupMessage {

		/** Required */
		OptionGroupName: string;

		/** Required */
		EngineName: string;

		/** Required */
		MajorEngineVersion: string;

		/** Required */
		OptionGroupDescription: string;
	}
	export interface CreateOptionGroupMessageFormProperties {

		/** Required */
		OptionGroupName: FormControl<string | null | undefined>,

		/** Required */
		EngineName: FormControl<string | null | undefined>,

		/** Required */
		MajorEngineVersion: FormControl<string | null | undefined>,

		/** Required */
		OptionGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateOptionGroupMessageFormGroup() {
		return new FormGroup<CreateOptionGroupMessageFormProperties>({
			OptionGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EngineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MajorEngineVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OptionGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DBEngineVersion {
		Engine?: string | null;
		EngineVersion?: string | null;
		DBParameterGroupFamily?: string | null;
		DBEngineDescription?: string | null;
		DBEngineVersionDescription?: string | null;
		DefaultCharacterSet?: CharacterSet;
		SupportedCharacterSets?: Array<string>;
	}
	export interface DBEngineVersionFormProperties {
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		DBParameterGroupFamily: FormControl<string | null | undefined>,
		DBEngineDescription: FormControl<string | null | undefined>,
		DBEngineVersionDescription: FormControl<string | null | undefined>,
	}
	export function CreateDBEngineVersionFormGroup() {
		return new FormGroup<DBEngineVersionFormProperties>({
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			DBParameterGroupFamily: new FormControl<string | null | undefined>(undefined),
			DBEngineDescription: new FormControl<string | null | undefined>(undefined),
			DBEngineVersionDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBParameterGroupStatus {
		DBParameterGroupName?: string | null;
		ParameterApplyStatus?: string | null;
	}
	export interface DBParameterGroupStatusFormProperties {
		DBParameterGroupName: FormControl<string | null | undefined>,
		ParameterApplyStatus: FormControl<string | null | undefined>,
	}
	export function CreateDBParameterGroupStatusFormGroup() {
		return new FormGroup<DBParameterGroupStatusFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined),
			ParameterApplyStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBSecurityGroupMembership {
		DBSecurityGroupName?: string | null;
		Status?: string | null;
	}
	export interface DBSecurityGroupMembershipFormProperties {
		DBSecurityGroupName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateDBSecurityGroupMembershipFormGroup() {
		return new FormGroup<DBSecurityGroupMembershipFormProperties>({
			DBSecurityGroupName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDBInstanceMessage {

		/** Required */
		DBInstanceIdentifier: string;
		SkipFinalSnapshot?: boolean | null;
		FinalDBSnapshotIdentifier?: string | null;
	}
	export interface DeleteDBInstanceMessageFormProperties {

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		SkipFinalSnapshot: FormControl<boolean | null | undefined>,
		FinalDBSnapshotIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBInstanceMessageFormGroup() {
		return new FormGroup<DeleteDBInstanceMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SkipFinalSnapshot: new FormControl<boolean | null | undefined>(undefined),
			FinalDBSnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDBParameterGroupMessage {

		/** Required */
		DBParameterGroupName: string;
	}
	export interface DeleteDBParameterGroupMessageFormProperties {

		/** Required */
		DBParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBParameterGroupMessageFormGroup() {
		return new FormGroup<DeleteDBParameterGroupMessageFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDBSecurityGroupMessage {

		/** Required */
		DBSecurityGroupName: string;
	}
	export interface DeleteDBSecurityGroupMessageFormProperties {

		/** Required */
		DBSecurityGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBSecurityGroupMessageFormGroup() {
		return new FormGroup<DeleteDBSecurityGroupMessageFormProperties>({
			DBSecurityGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDBSnapshotMessage {

		/** Required */
		DBSnapshotIdentifier: string;
	}
	export interface DeleteDBSnapshotMessageFormProperties {

		/** Required */
		DBSnapshotIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBSnapshotMessageFormGroup() {
		return new FormGroup<DeleteDBSnapshotMessageFormProperties>({
			DBSnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDBSubnetGroupMessage {

		/** Required */
		DBSubnetGroupName: string;
	}
	export interface DeleteDBSubnetGroupMessageFormProperties {

		/** Required */
		DBSubnetGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDBSubnetGroupMessageFormGroup() {
		return new FormGroup<DeleteDBSubnetGroupMessageFormProperties>({
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;
	}
	export interface DeleteEventSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventSubscriptionMessageFormGroup() {
		return new FormGroup<DeleteEventSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteOptionGroupMessage {

		/** Required */
		OptionGroupName: string;
	}
	export interface DeleteOptionGroupMessageFormProperties {

		/** Required */
		OptionGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteOptionGroupMessageFormGroup() {
		return new FormGroup<DeleteOptionGroupMessageFormProperties>({
			OptionGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDBEngineVersionsMessage {
		Engine?: string | null;
		EngineVersion?: string | null;
		DBParameterGroupFamily?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
		DefaultOnly?: boolean | null;
		ListSupportedCharacterSets?: boolean | null;
	}
	export interface DescribeDBEngineVersionsMessageFormProperties {
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		DBParameterGroupFamily: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		DefaultOnly: FormControl<boolean | null | undefined>,
		ListSupportedCharacterSets: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeDBEngineVersionsMessageFormGroup() {
		return new FormGroup<DescribeDBEngineVersionsMessageFormProperties>({
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			DBParameterGroupFamily: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			DefaultOnly: new FormControl<boolean | null | undefined>(undefined),
			ListSupportedCharacterSets: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeDBInstancesMessage {
		DBInstanceIdentifier?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeDBInstancesMessageFormProperties {
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBInstancesMessageFormGroup() {
		return new FormGroup<DescribeDBInstancesMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDBLogFilesDetails {
		LogFileName?: string | null;
		LastWritten?: number | null;
		Size?: number | null;
	}
	export interface DescribeDBLogFilesDetailsFormProperties {
		LogFileName: FormControl<string | null | undefined>,
		LastWritten: FormControl<number | null | undefined>,
		Size: FormControl<number | null | undefined>,
	}
	export function CreateDescribeDBLogFilesDetailsFormGroup() {
		return new FormGroup<DescribeDBLogFilesDetailsFormProperties>({
			LogFileName: new FormControl<string | null | undefined>(undefined),
			LastWritten: new FormControl<number | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeDBLogFilesMessage {

		/** Required */
		DBInstanceIdentifier: string;
		FilenameContains?: string | null;
		FileLastWritten?: number | null;
		FileSize?: number | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeDBLogFilesMessageFormProperties {

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		FilenameContains: FormControl<string | null | undefined>,
		FileLastWritten: FormControl<number | null | undefined>,
		FileSize: FormControl<number | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBLogFilesMessageFormGroup() {
		return new FormGroup<DescribeDBLogFilesMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FilenameContains: new FormControl<string | null | undefined>(undefined),
			FileLastWritten: new FormControl<number | null | undefined>(undefined),
			FileSize: new FormControl<number | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDBParameterGroupsMessage {
		DBParameterGroupName?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeDBParameterGroupsMessageFormProperties {
		DBParameterGroupName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBParameterGroupsMessageFormGroup() {
		return new FormGroup<DescribeDBParameterGroupsMessageFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDBParametersMessage {

		/** Required */
		DBParameterGroupName: string;
		Source?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeDBParametersMessageFormProperties {

		/** Required */
		DBParameterGroupName: FormControl<string | null | undefined>,
		Source: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBParametersMessageFormGroup() {
		return new FormGroup<DescribeDBParametersMessageFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Source: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDBSecurityGroupsMessage {
		DBSecurityGroupName?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeDBSecurityGroupsMessageFormProperties {
		DBSecurityGroupName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBSecurityGroupsMessageFormGroup() {
		return new FormGroup<DescribeDBSecurityGroupsMessageFormProperties>({
			DBSecurityGroupName: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDBSnapshotsMessage {
		DBInstanceIdentifier?: string | null;
		DBSnapshotIdentifier?: string | null;
		SnapshotType?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeDBSnapshotsMessageFormProperties {
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		DBSnapshotIdentifier: FormControl<string | null | undefined>,
		SnapshotType: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBSnapshotsMessageFormGroup() {
		return new FormGroup<DescribeDBSnapshotsMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			DBSnapshotIdentifier: new FormControl<string | null | undefined>(undefined),
			SnapshotType: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDBSubnetGroupsMessage {
		DBSubnetGroupName?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeDBSubnetGroupsMessageFormProperties {
		DBSubnetGroupName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDBSubnetGroupsMessageFormGroup() {
		return new FormGroup<DescribeDBSubnetGroupsMessageFormProperties>({
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEngineDefaultParametersMessage {

		/** Required */
		DBParameterGroupFamily: string;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeEngineDefaultParametersMessageFormProperties {

		/** Required */
		DBParameterGroupFamily: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEngineDefaultParametersMessageFormGroup() {
		return new FormGroup<DescribeEngineDefaultParametersMessageFormProperties>({
			DBParameterGroupFamily: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventCategoriesMessage {
		SourceType?: string | null;
	}
	export interface DescribeEventCategoriesMessageFormProperties {
		SourceType: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventCategoriesMessageFormGroup() {
		return new FormGroup<DescribeEventCategoriesMessageFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventSubscriptionsMessage {
		SubscriptionName?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeEventSubscriptionsMessageFormProperties {
		SubscriptionName: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventSubscriptionsMessageFormGroup() {
		return new FormGroup<DescribeEventSubscriptionsMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SourceType { 'db-instance' = 'db-instance', 'db-parameter-group' = 'db-parameter-group', 'db-security-group' = 'db-security-group', 'db-snapshot' = 'db-snapshot' }

	export interface DescribeEventsMessage {
		SourceIdentifier?: string | null;
		SourceType?: SourceType | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		Duration?: number | null;
		EventCategories?: Array<string>;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeEventsMessageFormProperties {
		SourceIdentifier: FormControl<string | null | undefined>,
		SourceType: FormControl<SourceType | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsMessageFormGroup() {
		return new FormGroup<DescribeEventsMessageFormProperties>({
			SourceIdentifier: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<SourceType | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeOptionGroupOptionsMessage {

		/** Required */
		EngineName: string;
		MajorEngineVersion?: string | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeOptionGroupOptionsMessageFormProperties {

		/** Required */
		EngineName: FormControl<string | null | undefined>,
		MajorEngineVersion: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOptionGroupOptionsMessageFormGroup() {
		return new FormGroup<DescribeOptionGroupOptionsMessageFormProperties>({
			EngineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MajorEngineVersion: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeOptionGroupsMessage {
		OptionGroupName?: string | null;
		Marker?: string | null;
		MaxRecords?: number | null;
		EngineName?: string | null;
		MajorEngineVersion?: string | null;
	}
	export interface DescribeOptionGroupsMessageFormProperties {
		OptionGroupName: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		EngineName: FormControl<string | null | undefined>,
		MajorEngineVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOptionGroupsMessageFormGroup() {
		return new FormGroup<DescribeOptionGroupsMessageFormProperties>({
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			EngineName: new FormControl<string | null | undefined>(undefined),
			MajorEngineVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeOrderableDBInstanceOptionsMessage {

		/** Required */
		Engine: string;
		EngineVersion?: string | null;
		DBInstanceClass?: string | null;
		LicenseModel?: string | null;
		Vpc?: boolean | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeOrderableDBInstanceOptionsMessageFormProperties {

		/** Required */
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		Vpc: FormControl<boolean | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrderableDBInstanceOptionsMessageFormGroup() {
		return new FormGroup<DescribeOrderableDBInstanceOptionsMessageFormProperties>({
			Engine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			Vpc: new FormControl<boolean | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeReservedDBInstancesMessage {
		ReservedDBInstanceId?: string | null;
		ReservedDBInstancesOfferingId?: string | null;
		DBInstanceClass?: string | null;
		Duration?: string | null;
		ProductDescription?: string | null;
		OfferingType?: string | null;
		MultiAZ?: boolean | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeReservedDBInstancesMessageFormProperties {
		ReservedDBInstanceId: FormControl<string | null | undefined>,
		ReservedDBInstancesOfferingId: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		Duration: FormControl<string | null | undefined>,
		ProductDescription: FormControl<string | null | undefined>,
		OfferingType: FormControl<string | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReservedDBInstancesMessageFormGroup() {
		return new FormGroup<DescribeReservedDBInstancesMessageFormProperties>({
			ReservedDBInstanceId: new FormControl<string | null | undefined>(undefined),
			ReservedDBInstancesOfferingId: new FormControl<string | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<string | null | undefined>(undefined),
			ProductDescription: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<string | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeReservedDBInstancesOfferingsMessage {
		ReservedDBInstancesOfferingId?: string | null;
		DBInstanceClass?: string | null;
		Duration?: string | null;
		ProductDescription?: string | null;
		OfferingType?: string | null;
		MultiAZ?: boolean | null;
		MaxRecords?: number | null;
		Marker?: string | null;
	}
	export interface DescribeReservedDBInstancesOfferingsMessageFormProperties {
		ReservedDBInstancesOfferingId: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		Duration: FormControl<string | null | undefined>,
		ProductDescription: FormControl<string | null | undefined>,
		OfferingType: FormControl<string | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		MaxRecords: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReservedDBInstancesOfferingsMessageFormGroup() {
		return new FormGroup<DescribeReservedDBInstancesOfferingsMessageFormProperties>({
			ReservedDBInstancesOfferingId: new FormControl<string | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<string | null | undefined>(undefined),
			ProductDescription: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<string | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DownloadDBLogFilePortionMessage {

		/** Required */
		DBInstanceIdentifier: string;

		/** Required */
		LogFileName: string;
		Marker?: string | null;
		NumberOfLines?: number | null;
	}
	export interface DownloadDBLogFilePortionMessageFormProperties {

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,

		/** Required */
		LogFileName: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		NumberOfLines: FormControl<number | null | undefined>,
	}
	export function CreateDownloadDBLogFilePortionMessageFormGroup() {
		return new FormGroup<DownloadDBLogFilePortionMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogFileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Marker: new FormControl<string | null | undefined>(undefined),
			NumberOfLines: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EC2SecurityGroup {
		Status?: string | null;
		EC2SecurityGroupName?: string | null;
		EC2SecurityGroupId?: string | null;
		EC2SecurityGroupOwnerId?: string | null;
	}
	export interface EC2SecurityGroupFormProperties {
		Status: FormControl<string | null | undefined>,
		EC2SecurityGroupName: FormControl<string | null | undefined>,
		EC2SecurityGroupId: FormControl<string | null | undefined>,
		EC2SecurityGroupOwnerId: FormControl<string | null | undefined>,
	}
	export function CreateEC2SecurityGroupFormGroup() {
		return new FormGroup<EC2SecurityGroupFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
			EC2SecurityGroupName: new FormControl<string | null | undefined>(undefined),
			EC2SecurityGroupId: new FormControl<string | null | undefined>(undefined),
			EC2SecurityGroupOwnerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Event {
		SourceIdentifier?: string | null;
		SourceType?: SourceType | null;
		Message?: string | null;
		EventCategories?: Array<string>;
		Date?: Date | null;
	}
	export interface EventFormProperties {
		SourceIdentifier: FormControl<string | null | undefined>,
		SourceType: FormControl<SourceType | null | undefined>,
		Message: FormControl<string | null | undefined>,
		Date: FormControl<Date | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			SourceIdentifier: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<SourceType | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface EventCategoriesMap {
		SourceType?: string | null;
		EventCategories?: Array<string>;
	}
	export interface EventCategoriesMapFormProperties {
		SourceType: FormControl<string | null | undefined>,
	}
	export function CreateEventCategoriesMapFormGroup() {
		return new FormGroup<EventCategoriesMapFormProperties>({
			SourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IPRange {
		Status?: string | null;
		CIDRIP?: string | null;
	}
	export interface IPRangeFormProperties {
		Status: FormControl<string | null | undefined>,
		CIDRIP: FormControl<string | null | undefined>,
	}
	export function CreateIPRangeFormGroup() {
		return new FormGroup<IPRangeFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
			CIDRIP: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceMessage {

		/** Required */
		ResourceName: string;
	}
	export interface ListTagsForResourceMessageFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceMessageFormGroup() {
		return new FormGroup<ListTagsForResourceMessageFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyDBInstanceMessage {

		/** Required */
		DBInstanceIdentifier: string;
		AllocatedStorage?: number | null;
		DBInstanceClass?: string | null;
		DBSecurityGroups?: Array<string>;
		VpcSecurityGroupIds?: Array<string>;
		ApplyImmediately?: boolean | null;
		MasterUserPassword?: string | null;
		DBParameterGroupName?: string | null;
		BackupRetentionPeriod?: number | null;
		PreferredBackupWindow?: string | null;
		PreferredMaintenanceWindow?: string | null;
		MultiAZ?: boolean | null;
		EngineVersion?: string | null;
		AllowMajorVersionUpgrade?: boolean | null;
		AutoMinorVersionUpgrade?: boolean | null;
		Iops?: number | null;
		OptionGroupName?: string | null;
		NewDBInstanceIdentifier?: string | null;
	}
	export interface ModifyDBInstanceMessageFormProperties {

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		AllocatedStorage: FormControl<number | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		ApplyImmediately: FormControl<boolean | null | undefined>,
		MasterUserPassword: FormControl<string | null | undefined>,
		DBParameterGroupName: FormControl<string | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		AllowMajorVersionUpgrade: FormControl<boolean | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		OptionGroupName: FormControl<string | null | undefined>,
		NewDBInstanceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateModifyDBInstanceMessageFormGroup() {
		return new FormGroup<ModifyDBInstanceMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllocatedStorage: new FormControl<number | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			ApplyImmediately: new FormControl<boolean | null | undefined>(undefined),
			MasterUserPassword: new FormControl<string | null | undefined>(undefined),
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined),
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			AllowMajorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
			NewDBInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifyDBParameterGroupMessage {

		/** Required */
		DBParameterGroupName: string;

		/** Required */
		Parameters: Array<string>;
	}
	export interface ModifyDBParameterGroupMessageFormProperties {

		/** Required */
		DBParameterGroupName: FormControl<string | null | undefined>,
	}
	export function CreateModifyDBParameterGroupMessageFormGroup() {
		return new FormGroup<ModifyDBParameterGroupMessageFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyDBSubnetGroupMessage {

		/** Required */
		DBSubnetGroupName: string;
		DBSubnetGroupDescription?: string | null;

		/** Required */
		SubnetIds: Array<string>;
	}
	export interface ModifyDBSubnetGroupMessageFormProperties {

		/** Required */
		DBSubnetGroupName: FormControl<string | null | undefined>,
		DBSubnetGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateModifyDBSubnetGroupMessageFormGroup() {
		return new FormGroup<ModifyDBSubnetGroupMessageFormProperties>({
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBSubnetGroupDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifyEventSubscriptionMessage {

		/** Required */
		SubscriptionName: string;
		SnsTopicArn?: string | null;
		SourceType?: string | null;
		EventCategories?: Array<string>;
		Enabled?: boolean | null;
	}
	export interface ModifyEventSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		SourceType: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateModifyEventSubscriptionMessageFormGroup() {
		return new FormGroup<ModifyEventSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			SourceType: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ModifyOptionGroupMessage {

		/** Required */
		OptionGroupName: string;
		OptionsToInclude?: Array<string>;
		OptionsToRemove?: Array<string>;
		ApplyImmediately?: boolean | null;
	}
	export interface ModifyOptionGroupMessageFormProperties {

		/** Required */
		OptionGroupName: FormControl<string | null | undefined>,
		ApplyImmediately: FormControl<boolean | null | undefined>,
	}
	export function CreateModifyOptionGroupMessageFormGroup() {
		return new FormGroup<ModifyOptionGroupMessageFormProperties>({
			OptionGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplyImmediately: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Option {
		OptionName?: string | null;
		OptionDescription?: string | null;
		Persistent?: boolean | null;
		Port?: number | null;
		OptionSettings?: Array<string>;
		DBSecurityGroupMemberships?: Array<string>;
		VpcSecurityGroupMemberships?: Array<string>;
	}
	export interface OptionFormProperties {
		OptionName: FormControl<string | null | undefined>,
		OptionDescription: FormControl<string | null | undefined>,
		Persistent: FormControl<boolean | null | undefined>,
		Port: FormControl<number | null | undefined>,
	}
	export function CreateOptionFormGroup() {
		return new FormGroup<OptionFormProperties>({
			OptionName: new FormControl<string | null | undefined>(undefined),
			OptionDescription: new FormControl<string | null | undefined>(undefined),
			Persistent: new FormControl<boolean | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OptionGroupMembership {
		OptionGroupName?: string | null;
		Status?: string | null;
	}
	export interface OptionGroupMembershipFormProperties {
		OptionGroupName: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateOptionGroupMembershipFormGroup() {
		return new FormGroup<OptionGroupMembershipFormProperties>({
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OptionGroupOption {
		Name?: string | null;
		Description?: string | null;
		EngineName?: string | null;
		MajorEngineVersion?: string | null;
		MinimumRequiredMinorEngineVersion?: string | null;
		PortRequired?: boolean | null;
		DefaultPort?: number | null;
		OptionsDependedOn?: Array<string>;
		Persistent?: boolean | null;
		OptionGroupOptionSettings?: Array<string>;
	}
	export interface OptionGroupOptionFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EngineName: FormControl<string | null | undefined>,
		MajorEngineVersion: FormControl<string | null | undefined>,
		MinimumRequiredMinorEngineVersion: FormControl<string | null | undefined>,
		PortRequired: FormControl<boolean | null | undefined>,
		DefaultPort: FormControl<number | null | undefined>,
		Persistent: FormControl<boolean | null | undefined>,
	}
	export function CreateOptionGroupOptionFormGroup() {
		return new FormGroup<OptionGroupOptionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EngineName: new FormControl<string | null | undefined>(undefined),
			MajorEngineVersion: new FormControl<string | null | undefined>(undefined),
			MinimumRequiredMinorEngineVersion: new FormControl<string | null | undefined>(undefined),
			PortRequired: new FormControl<boolean | null | undefined>(undefined),
			DefaultPort: new FormControl<number | null | undefined>(undefined),
			Persistent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OptionGroupOptionSetting {
		SettingName?: string | null;
		SettingDescription?: string | null;
		DefaultValue?: string | null;
		ApplyType?: string | null;
		AllowedValues?: string | null;
		IsModifiable?: boolean | null;
	}
	export interface OptionGroupOptionSettingFormProperties {
		SettingName: FormControl<string | null | undefined>,
		SettingDescription: FormControl<string | null | undefined>,
		DefaultValue: FormControl<string | null | undefined>,
		ApplyType: FormControl<string | null | undefined>,
		AllowedValues: FormControl<string | null | undefined>,
		IsModifiable: FormControl<boolean | null | undefined>,
	}
	export function CreateOptionGroupOptionSettingFormGroup() {
		return new FormGroup<OptionGroupOptionSettingFormProperties>({
			SettingName: new FormControl<string | null | undefined>(undefined),
			SettingDescription: new FormControl<string | null | undefined>(undefined),
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			ApplyType: new FormControl<string | null | undefined>(undefined),
			AllowedValues: new FormControl<string | null | undefined>(undefined),
			IsModifiable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OptionSetting {
		Name?: string | null;
		Value?: string | null;
		DefaultValue?: string | null;
		Description?: string | null;
		ApplyType?: string | null;
		DataType?: string | null;
		AllowedValues?: string | null;
		IsModifiable?: boolean | null;
		IsCollection?: boolean | null;
	}
	export interface OptionSettingFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		DefaultValue: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ApplyType: FormControl<string | null | undefined>,
		DataType: FormControl<string | null | undefined>,
		AllowedValues: FormControl<string | null | undefined>,
		IsModifiable: FormControl<boolean | null | undefined>,
		IsCollection: FormControl<boolean | null | undefined>,
	}
	export function CreateOptionSettingFormGroup() {
		return new FormGroup<OptionSettingFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ApplyType: new FormControl<string | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined),
			AllowedValues: new FormControl<string | null | undefined>(undefined),
			IsModifiable: new FormControl<boolean | null | undefined>(undefined),
			IsCollection: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OrderableDBInstanceOption {
		Engine?: string | null;
		EngineVersion?: string | null;
		DBInstanceClass?: string | null;
		LicenseModel?: string | null;
		AvailabilityZones?: Array<string>;
		MultiAZCapable?: boolean | null;
		ReadReplicaCapable?: boolean | null;
		Vpc?: boolean | null;
	}
	export interface OrderableDBInstanceOptionFormProperties {
		Engine: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		MultiAZCapable: FormControl<boolean | null | undefined>,
		ReadReplicaCapable: FormControl<boolean | null | undefined>,
		Vpc: FormControl<boolean | null | undefined>,
	}
	export function CreateOrderableDBInstanceOptionFormGroup() {
		return new FormGroup<OrderableDBInstanceOptionFormProperties>({
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			MultiAZCapable: new FormControl<boolean | null | undefined>(undefined),
			ReadReplicaCapable: new FormControl<boolean | null | undefined>(undefined),
			Vpc: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PromoteReadReplicaMessage {

		/** Required */
		DBInstanceIdentifier: string;
		BackupRetentionPeriod?: number | null;
		PreferredBackupWindow?: string | null;
	}
	export interface PromoteReadReplicaMessageFormProperties {

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		BackupRetentionPeriod: FormControl<number | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
	}
	export function CreatePromoteReadReplicaMessageFormGroup() {
		return new FormGroup<PromoteReadReplicaMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BackupRetentionPeriod: new FormControl<number | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurchaseReservedDBInstancesOfferingMessage {

		/** Required */
		ReservedDBInstancesOfferingId: string;
		ReservedDBInstanceId?: string | null;
		DBInstanceCount?: number | null;
	}
	export interface PurchaseReservedDBInstancesOfferingMessageFormProperties {

		/** Required */
		ReservedDBInstancesOfferingId: FormControl<string | null | undefined>,
		ReservedDBInstanceId: FormControl<string | null | undefined>,
		DBInstanceCount: FormControl<number | null | undefined>,
	}
	export function CreatePurchaseReservedDBInstancesOfferingMessageFormGroup() {
		return new FormGroup<PurchaseReservedDBInstancesOfferingMessageFormProperties>({
			ReservedDBInstancesOfferingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReservedDBInstanceId: new FormControl<string | null | undefined>(undefined),
			DBInstanceCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RebootDBInstanceMessage {

		/** Required */
		DBInstanceIdentifier: string;
		ForceFailover?: boolean | null;
	}
	export interface RebootDBInstanceMessageFormProperties {

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,
		ForceFailover: FormControl<boolean | null | undefined>,
	}
	export function CreateRebootDBInstanceMessageFormGroup() {
		return new FormGroup<RebootDBInstanceMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ForceFailover: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RecurringCharge {
		RecurringChargeAmount?: number | null;
		RecurringChargeFrequency?: string | null;
	}
	export interface RecurringChargeFormProperties {
		RecurringChargeAmount: FormControl<number | null | undefined>,
		RecurringChargeFrequency: FormControl<string | null | undefined>,
	}
	export function CreateRecurringChargeFormGroup() {
		return new FormGroup<RecurringChargeFormProperties>({
			RecurringChargeAmount: new FormControl<number | null | undefined>(undefined),
			RecurringChargeFrequency: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveSourceIdentifierFromSubscriptionMessage {

		/** Required */
		SubscriptionName: string;

		/** Required */
		SourceIdentifier: string;
	}
	export interface RemoveSourceIdentifierFromSubscriptionMessageFormProperties {

		/** Required */
		SubscriptionName: FormControl<string | null | undefined>,

		/** Required */
		SourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateRemoveSourceIdentifierFromSubscriptionMessageFormGroup() {
		return new FormGroup<RemoveSourceIdentifierFromSubscriptionMessageFormProperties>({
			SubscriptionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveTagsFromResourceMessage {

		/** Required */
		ResourceName: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface RemoveTagsFromResourceMessageFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsFromResourceMessageFormGroup() {
		return new FormGroup<RemoveTagsFromResourceMessageFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReservedDBInstancesOffering {
		ReservedDBInstancesOfferingId?: string | null;
		DBInstanceClass?: string | null;
		Duration?: number | null;
		FixedPrice?: number | null;
		UsagePrice?: number | null;
		CurrencyCode?: string | null;
		ProductDescription?: string | null;
		OfferingType?: string | null;
		MultiAZ?: boolean | null;
		RecurringCharges?: Array<string>;
	}
	export interface ReservedDBInstancesOfferingFormProperties {
		ReservedDBInstancesOfferingId: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		FixedPrice: FormControl<number | null | undefined>,
		UsagePrice: FormControl<number | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
		ProductDescription: FormControl<string | null | undefined>,
		OfferingType: FormControl<string | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
	}
	export function CreateReservedDBInstancesOfferingFormGroup() {
		return new FormGroup<ReservedDBInstancesOfferingFormProperties>({
			ReservedDBInstancesOfferingId: new FormControl<string | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			FixedPrice: new FormControl<number | null | undefined>(undefined),
			UsagePrice: new FormControl<number | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
			ProductDescription: new FormControl<string | null | undefined>(undefined),
			OfferingType: new FormControl<string | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ResetDBParameterGroupMessage {

		/** Required */
		DBParameterGroupName: string;
		ResetAllParameters?: boolean | null;
		Parameters?: Array<string>;
	}
	export interface ResetDBParameterGroupMessageFormProperties {

		/** Required */
		DBParameterGroupName: FormControl<string | null | undefined>,
		ResetAllParameters: FormControl<boolean | null | undefined>,
	}
	export function CreateResetDBParameterGroupMessageFormGroup() {
		return new FormGroup<ResetDBParameterGroupMessageFormProperties>({
			DBParameterGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResetAllParameters: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RestoreDBInstanceFromDBSnapshotMessage {

		/** Required */
		DBInstanceIdentifier: string;

		/** Required */
		DBSnapshotIdentifier: string;
		DBInstanceClass?: string | null;
		Port?: number | null;
		AvailabilityZone?: string | null;
		DBSubnetGroupName?: string | null;
		MultiAZ?: boolean | null;
		PubliclyAccessible?: boolean | null;
		AutoMinorVersionUpgrade?: boolean | null;
		LicenseModel?: string | null;
		DBName?: string | null;
		Engine?: string | null;
		Iops?: number | null;
		OptionGroupName?: string | null;
	}
	export interface RestoreDBInstanceFromDBSnapshotMessageFormProperties {

		/** Required */
		DBInstanceIdentifier: FormControl<string | null | undefined>,

		/** Required */
		DBSnapshotIdentifier: FormControl<string | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		DBSubnetGroupName: FormControl<string | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		DBName: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		OptionGroupName: FormControl<string | null | undefined>,
	}
	export function CreateRestoreDBInstanceFromDBSnapshotMessageFormGroup() {
		return new FormGroup<RestoreDBInstanceFromDBSnapshotMessageFormProperties>({
			DBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBSnapshotIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			DBName: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestoreDBInstanceToPointInTimeMessage {

		/** Required */
		SourceDBInstanceIdentifier: string;

		/** Required */
		TargetDBInstanceIdentifier: string;
		RestoreTime?: Date | null;
		UseLatestRestorableTime?: boolean | null;
		DBInstanceClass?: string | null;
		Port?: number | null;
		AvailabilityZone?: string | null;
		DBSubnetGroupName?: string | null;
		MultiAZ?: boolean | null;
		PubliclyAccessible?: boolean | null;
		AutoMinorVersionUpgrade?: boolean | null;
		LicenseModel?: string | null;
		DBName?: string | null;
		Engine?: string | null;
		Iops?: number | null;
		OptionGroupName?: string | null;
	}
	export interface RestoreDBInstanceToPointInTimeMessageFormProperties {

		/** Required */
		SourceDBInstanceIdentifier: FormControl<string | null | undefined>,

		/** Required */
		TargetDBInstanceIdentifier: FormControl<string | null | undefined>,
		RestoreTime: FormControl<Date | null | undefined>,
		UseLatestRestorableTime: FormControl<boolean | null | undefined>,
		DBInstanceClass: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		DBSubnetGroupName: FormControl<string | null | undefined>,
		MultiAZ: FormControl<boolean | null | undefined>,
		PubliclyAccessible: FormControl<boolean | null | undefined>,
		AutoMinorVersionUpgrade: FormControl<boolean | null | undefined>,
		LicenseModel: FormControl<string | null | undefined>,
		DBName: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		OptionGroupName: FormControl<string | null | undefined>,
	}
	export function CreateRestoreDBInstanceToPointInTimeMessageFormGroup() {
		return new FormGroup<RestoreDBInstanceToPointInTimeMessageFormProperties>({
			SourceDBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetDBInstanceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RestoreTime: new FormControl<Date | null | undefined>(undefined),
			UseLatestRestorableTime: new FormControl<boolean | null | undefined>(undefined),
			DBInstanceClass: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			DBSubnetGroupName: new FormControl<string | null | undefined>(undefined),
			MultiAZ: new FormControl<boolean | null | undefined>(undefined),
			PubliclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			AutoMinorVersionUpgrade: new FormControl<boolean | null | undefined>(undefined),
			LicenseModel: new FormControl<string | null | undefined>(undefined),
			DBName: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			OptionGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RevokeDBSecurityGroupIngressMessage {

		/** Required */
		DBSecurityGroupName: string;
		CIDRIP?: string | null;
		EC2SecurityGroupName?: string | null;
		EC2SecurityGroupId?: string | null;
		EC2SecurityGroupOwnerId?: string | null;
	}
	export interface RevokeDBSecurityGroupIngressMessageFormProperties {

		/** Required */
		DBSecurityGroupName: FormControl<string | null | undefined>,
		CIDRIP: FormControl<string | null | undefined>,
		EC2SecurityGroupName: FormControl<string | null | undefined>,
		EC2SecurityGroupId: FormControl<string | null | undefined>,
		EC2SecurityGroupOwnerId: FormControl<string | null | undefined>,
	}
	export function CreateRevokeDBSecurityGroupIngressMessageFormGroup() {
		return new FormGroup<RevokeDBSecurityGroupIngressMessageFormProperties>({
			DBSecurityGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CIDRIP: new FormControl<string | null | undefined>(undefined),
			EC2SecurityGroupName: new FormControl<string | null | undefined>(undefined),
			EC2SecurityGroupId: new FormControl<string | null | undefined>(undefined),
			EC2SecurityGroupOwnerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Subnet {
		SubnetIdentifier?: string | null;
		SubnetAvailabilityZone?: AvailabilityZone;
		SubnetStatus?: string | null;
	}
	export interface SubnetFormProperties {
		SubnetIdentifier: FormControl<string | null | undefined>,
		SubnetStatus: FormControl<string | null | undefined>,
	}
	export function CreateSubnetFormGroup() {
		return new FormGroup<SubnetFormProperties>({
			SubnetIdentifier: new FormControl<string | null | undefined>(undefined),
			SubnetStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VpcSecurityGroupMembership {
		VpcSecurityGroupId?: string | null;
		Status?: string | null;
	}
	export interface VpcSecurityGroupMembershipFormProperties {
		VpcSecurityGroupId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateVpcSecurityGroupMembershipFormGroup() {
		return new FormGroup<VpcSecurityGroupMembershipFormProperties>({
			VpcSecurityGroupId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get #Action=AddSourceIdentifierToSubscription
		 * @return {void} Success
		 */
		GET_AddSourceIdentifierToSubscription(SubscriptionName: string, SourceIdentifier: string, Action: GET_AddSourceIdentifierToSubscriptionAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddSourceIdentifierToSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=AddTagsToResource
		 * @return {void} Success
		 */
		GET_AddTagsToResource(ResourceName: string, Tags: Array<string>, Action: GET_AddTagsToResourceAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AddTagsToResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + Tags.map(z => `Tags=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=AuthorizeDBSecurityGroupIngress
		 * @return {void} Success
		 */
		GET_AuthorizeDBSecurityGroupIngress(DBSecurityGroupName: string, CIDRIP: string | null | undefined, EC2SecurityGroupName: string | null | undefined, EC2SecurityGroupId: string | null | undefined, EC2SecurityGroupOwnerId: string | null | undefined, Action: GET_AuthorizeDBSecurityGroupIngressAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AuthorizeDBSecurityGroupIngress?DBSecurityGroupName=' + (DBSecurityGroupName == null ? '' : encodeURIComponent(DBSecurityGroupName)) + '&CIDRIP=' + (CIDRIP == null ? '' : encodeURIComponent(CIDRIP)) + '&EC2SecurityGroupName=' + (EC2SecurityGroupName == null ? '' : encodeURIComponent(EC2SecurityGroupName)) + '&EC2SecurityGroupId=' + (EC2SecurityGroupId == null ? '' : encodeURIComponent(EC2SecurityGroupId)) + '&EC2SecurityGroupOwnerId=' + (EC2SecurityGroupOwnerId == null ? '' : encodeURIComponent(EC2SecurityGroupOwnerId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=CopyDBSnapshot
		 * @return {void} Success
		 */
		GET_CopyDBSnapshot(SourceDBSnapshotIdentifier: string, TargetDBSnapshotIdentifier: string, Action: GET_CopyDBSnapshotAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CopyDBSnapshot?SourceDBSnapshotIdentifier=' + (SourceDBSnapshotIdentifier == null ? '' : encodeURIComponent(SourceDBSnapshotIdentifier)) + '&TargetDBSnapshotIdentifier=' + (TargetDBSnapshotIdentifier == null ? '' : encodeURIComponent(TargetDBSnapshotIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=CreateDBInstance
		 * @return {void} Success
		 */
		GET_CreateDBInstance(DBName: string | null | undefined, DBInstanceIdentifier: string, AllocatedStorage: number, DBInstanceClass: string, Engine: string, MasterUsername: string, MasterUserPassword: string, DBSecurityGroups: Array<string> | null | undefined, VpcSecurityGroupIds: Array<string> | null | undefined, AvailabilityZone: string | null | undefined, DBSubnetGroupName: string | null | undefined, PreferredMaintenanceWindow: string | null | undefined, DBParameterGroupName: string | null | undefined, BackupRetentionPeriod: number | null | undefined, PreferredBackupWindow: string | null | undefined, Port: number | null | undefined, MultiAZ: boolean | null | undefined, EngineVersion: string | null | undefined, AutoMinorVersionUpgrade: boolean | null | undefined, LicenseModel: string | null | undefined, Iops: number | null | undefined, OptionGroupName: string | null | undefined, CharacterSetName: string | null | undefined, PubliclyAccessible: boolean | null | undefined, Action: GET_CreateDBInstanceAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBInstance?DBName=' + (DBName == null ? '' : encodeURIComponent(DBName)) + '&DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&AllocatedStorage=' + AllocatedStorage + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&MasterUsername=' + (MasterUsername == null ? '' : encodeURIComponent(MasterUsername)) + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&' + DBSecurityGroups?.map(z => `DBSecurityGroups=${encodeURIComponent(z)}`).join('&') + '&' + VpcSecurityGroupIds?.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&AvailabilityZone=' + (AvailabilityZone == null ? '' : encodeURIComponent(AvailabilityZone)) + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&Port=' + Port + '&MultiAZ=' + MultiAZ + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&Iops=' + Iops + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&CharacterSetName=' + (CharacterSetName == null ? '' : encodeURIComponent(CharacterSetName)) + '&PubliclyAccessible=' + PubliclyAccessible + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=CreateDBInstanceReadReplica
		 * @return {void} Success
		 */
		GET_CreateDBInstanceReadReplica(DBInstanceIdentifier: string, SourceDBInstanceIdentifier: string, DBInstanceClass: string | null | undefined, AvailabilityZone: string | null | undefined, Port: number | null | undefined, AutoMinorVersionUpgrade: boolean | null | undefined, Iops: number | null | undefined, OptionGroupName: string | null | undefined, PubliclyAccessible: boolean | null | undefined, Action: GET_CreateDBInstanceReadReplicaAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBInstanceReadReplica?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&SourceDBInstanceIdentifier=' + (SourceDBInstanceIdentifier == null ? '' : encodeURIComponent(SourceDBInstanceIdentifier)) + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&AvailabilityZone=' + (AvailabilityZone == null ? '' : encodeURIComponent(AvailabilityZone)) + '&Port=' + Port + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&Iops=' + Iops + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&PubliclyAccessible=' + PubliclyAccessible + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=CreateDBParameterGroup
		 * @return {void} Success
		 */
		GET_CreateDBParameterGroup(DBParameterGroupName: string, DBParameterGroupFamily: string, Description: string, Action: GET_CreateDBParameterGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBParameterGroup?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&Description=' + (Description == null ? '' : encodeURIComponent(Description)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=CreateDBSecurityGroup
		 * @return {void} Success
		 */
		GET_CreateDBSecurityGroup(DBSecurityGroupName: string, DBSecurityGroupDescription: string, Action: GET_CreateDBSecurityGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBSecurityGroup?DBSecurityGroupName=' + (DBSecurityGroupName == null ? '' : encodeURIComponent(DBSecurityGroupName)) + '&DBSecurityGroupDescription=' + (DBSecurityGroupDescription == null ? '' : encodeURIComponent(DBSecurityGroupDescription)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=CreateDBSnapshot
		 * @return {void} Success
		 */
		GET_CreateDBSnapshot(DBSnapshotIdentifier: string, DBInstanceIdentifier: string, Action: GET_CreateDBSnapshotAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBSnapshot?DBSnapshotIdentifier=' + (DBSnapshotIdentifier == null ? '' : encodeURIComponent(DBSnapshotIdentifier)) + '&DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=CreateDBSubnetGroup
		 * @return {void} Success
		 */
		GET_CreateDBSubnetGroup(DBSubnetGroupName: string, DBSubnetGroupDescription: string, SubnetIds: Array<string>, Action: GET_CreateDBSubnetGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateDBSubnetGroup?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&DBSubnetGroupDescription=' + (DBSubnetGroupDescription == null ? '' : encodeURIComponent(DBSubnetGroupDescription)) + '&' + SubnetIds.map(z => `SubnetIds=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=CreateEventSubscription
		 * @return {void} Success
		 */
		GET_CreateEventSubscription(SubscriptionName: string, SnsTopicArn: string, SourceType: string | null | undefined, EventCategories: Array<string> | null | undefined, SourceIds: Array<string> | null | undefined, Enabled: boolean | null | undefined, Action: GET_CreateEventSubscriptionAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SnsTopicArn=' + (SnsTopicArn == null ? '' : encodeURIComponent(SnsTopicArn)) + '&SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + EventCategories?.map(z => `EventCategories=${encodeURIComponent(z)}`).join('&') + '&' + SourceIds?.map(z => `SourceIds=${encodeURIComponent(z)}`).join('&') + '&Enabled=' + Enabled + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=CreateOptionGroup
		 * @return {void} Success
		 */
		GET_CreateOptionGroup(OptionGroupName: string, EngineName: string, MajorEngineVersion: string, OptionGroupDescription: string, Action: GET_CreateOptionGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateOptionGroup?OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&EngineName=' + (EngineName == null ? '' : encodeURIComponent(EngineName)) + '&MajorEngineVersion=' + (MajorEngineVersion == null ? '' : encodeURIComponent(MajorEngineVersion)) + '&OptionGroupDescription=' + (OptionGroupDescription == null ? '' : encodeURIComponent(OptionGroupDescription)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DeleteDBInstance
		 * @return {void} Success
		 */
		GET_DeleteDBInstance(DBInstanceIdentifier: string, SkipFinalSnapshot: boolean | null | undefined, FinalDBSnapshotIdentifier: string | null | undefined, Action: GET_DeleteDBInstanceAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&SkipFinalSnapshot=' + SkipFinalSnapshot + '&FinalDBSnapshotIdentifier=' + (FinalDBSnapshotIdentifier == null ? '' : encodeURIComponent(FinalDBSnapshotIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DeleteDBParameterGroup
		 * @return {void} Success
		 */
		GET_DeleteDBParameterGroup(DBParameterGroupName: string, Action: GET_DeleteDBParameterGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBParameterGroup?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DeleteDBSecurityGroup
		 * @return {void} Success
		 */
		GET_DeleteDBSecurityGroup(DBSecurityGroupName: string, Action: GET_DeleteDBSecurityGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBSecurityGroup?DBSecurityGroupName=' + (DBSecurityGroupName == null ? '' : encodeURIComponent(DBSecurityGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DeleteDBSnapshot
		 * @return {void} Success
		 */
		GET_DeleteDBSnapshot(DBSnapshotIdentifier: string, Action: GET_DeleteDBSnapshotAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBSnapshot?DBSnapshotIdentifier=' + (DBSnapshotIdentifier == null ? '' : encodeURIComponent(DBSnapshotIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DeleteDBSubnetGroup
		 * @return {void} Success
		 */
		GET_DeleteDBSubnetGroup(DBSubnetGroupName: string, Action: GET_DeleteDBSubnetGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDBSubnetGroup?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DeleteEventSubscription
		 * @return {void} Success
		 */
		GET_DeleteEventSubscription(SubscriptionName: string, Action: GET_DeleteEventSubscriptionAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DeleteOptionGroup
		 * @return {void} Success
		 */
		GET_DeleteOptionGroup(OptionGroupName: string, Action: GET_DeleteOptionGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteOptionGroup?OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeDBEngineVersions
		 * @return {void} Success
		 */
		GET_DescribeDBEngineVersions(Engine: string | null | undefined, EngineVersion: string | null | undefined, DBParameterGroupFamily: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, DefaultOnly: boolean | null | undefined, ListSupportedCharacterSets: boolean | null | undefined, Action: GET_DescribeDBEngineVersionsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBEngineVersions?Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&DefaultOnly=' + DefaultOnly + '&ListSupportedCharacterSets=' + ListSupportedCharacterSets + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeDBInstances
		 * @return {void} Success
		 */
		GET_DescribeDBInstances(DBInstanceIdentifier: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBInstancesAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBInstances?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeDBLogFiles
		 * @return {void} Success
		 */
		GET_DescribeDBLogFiles(DBInstanceIdentifier: string, FilenameContains: string | null | undefined, FileLastWritten: number | null | undefined, FileSize: number | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBLogFilesAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBLogFiles?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&FilenameContains=' + (FilenameContains == null ? '' : encodeURIComponent(FilenameContains)) + '&FileLastWritten=' + FileLastWritten + '&FileSize=' + FileSize + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeDBParameterGroups
		 * @return {void} Success
		 */
		GET_DescribeDBParameterGroups(DBParameterGroupName: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBParameterGroupsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBParameterGroups?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeDBParameters
		 * @return {void} Success
		 */
		GET_DescribeDBParameters(DBParameterGroupName: string, Source: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBParametersAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBParameters?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&Source=' + (Source == null ? '' : encodeURIComponent(Source)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeDBSecurityGroups
		 * @return {void} Success
		 */
		GET_DescribeDBSecurityGroups(DBSecurityGroupName: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBSecurityGroupsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBSecurityGroups?DBSecurityGroupName=' + (DBSecurityGroupName == null ? '' : encodeURIComponent(DBSecurityGroupName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeDBSnapshots
		 * @return {void} Success
		 */
		GET_DescribeDBSnapshots(DBInstanceIdentifier: string | null | undefined, DBSnapshotIdentifier: string | null | undefined, SnapshotType: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBSnapshotsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBSnapshots?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&DBSnapshotIdentifier=' + (DBSnapshotIdentifier == null ? '' : encodeURIComponent(DBSnapshotIdentifier)) + '&SnapshotType=' + (SnapshotType == null ? '' : encodeURIComponent(SnapshotType)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeDBSubnetGroups
		 * @return {void} Success
		 */
		GET_DescribeDBSubnetGroups(DBSubnetGroupName: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeDBSubnetGroupsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeDBSubnetGroups?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeEngineDefaultParameters
		 * @return {void} Success
		 */
		GET_DescribeEngineDefaultParameters(DBParameterGroupFamily: string, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeEngineDefaultParametersAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEngineDefaultParameters?DBParameterGroupFamily=' + (DBParameterGroupFamily == null ? '' : encodeURIComponent(DBParameterGroupFamily)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeEventCategories
		 * @return {void} Success
		 */
		GET_DescribeEventCategories(SourceType: string | null | undefined, Action: GET_DescribeEventCategoriesAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEventCategories?SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeEventSubscriptions
		 * @return {void} Success
		 */
		GET_DescribeEventSubscriptions(SubscriptionName: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeEventSubscriptionsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEventSubscriptions?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeEvents
		 * @return {void} Success
		 */
		GET_DescribeEvents(SourceIdentifier: string | null | undefined, SourceType: SourceType | null | undefined, StartTime: Date | null | undefined, EndTime: Date | null | undefined, Duration: number | null | undefined, EventCategories: Array<string> | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeEventsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeEvents?SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&SourceType=' + SourceType + '&StartTime=' + StartTime?.toISOString() + '&EndTime=' + EndTime?.toISOString() + '&Duration=' + Duration + '&' + EventCategories?.map(z => `EventCategories=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeOptionGroupOptions
		 * @return {void} Success
		 */
		GET_DescribeOptionGroupOptions(EngineName: string, MajorEngineVersion: string | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeOptionGroupOptionsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeOptionGroupOptions?EngineName=' + (EngineName == null ? '' : encodeURIComponent(EngineName)) + '&MajorEngineVersion=' + (MajorEngineVersion == null ? '' : encodeURIComponent(MajorEngineVersion)) + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeOptionGroups
		 * @return {void} Success
		 */
		GET_DescribeOptionGroups(OptionGroupName: string | null | undefined, Marker: string | null | undefined, MaxRecords: number | null | undefined, EngineName: string | null | undefined, MajorEngineVersion: string | null | undefined, Action: GET_DescribeOptionGroupsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeOptionGroups?OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&MaxRecords=' + MaxRecords + '&EngineName=' + (EngineName == null ? '' : encodeURIComponent(EngineName)) + '&MajorEngineVersion=' + (MajorEngineVersion == null ? '' : encodeURIComponent(MajorEngineVersion)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeOrderableDBInstanceOptions
		 * @return {void} Success
		 */
		GET_DescribeOrderableDBInstanceOptions(Engine: string, EngineVersion: string | null | undefined, DBInstanceClass: string | null | undefined, LicenseModel: string | null | undefined, Vpc: boolean | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeOrderableDBInstanceOptionsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeOrderableDBInstanceOptions?Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&Vpc=' + Vpc + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeReservedDBInstances
		 * @return {void} Success
		 */
		GET_DescribeReservedDBInstances(ReservedDBInstanceId: string | null | undefined, ReservedDBInstancesOfferingId: string | null | undefined, DBInstanceClass: string | null | undefined, Duration: string | null | undefined, ProductDescription: string | null | undefined, OfferingType: string | null | undefined, MultiAZ: boolean | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeReservedDBInstancesAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeReservedDBInstances?ReservedDBInstanceId=' + (ReservedDBInstanceId == null ? '' : encodeURIComponent(ReservedDBInstanceId)) + '&ReservedDBInstancesOfferingId=' + (ReservedDBInstancesOfferingId == null ? '' : encodeURIComponent(ReservedDBInstancesOfferingId)) + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&Duration=' + (Duration == null ? '' : encodeURIComponent(Duration)) + '&ProductDescription=' + (ProductDescription == null ? '' : encodeURIComponent(ProductDescription)) + '&OfferingType=' + (OfferingType == null ? '' : encodeURIComponent(OfferingType)) + '&MultiAZ=' + MultiAZ + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DescribeReservedDBInstancesOfferings
		 * @return {void} Success
		 */
		GET_DescribeReservedDBInstancesOfferings(ReservedDBInstancesOfferingId: string | null | undefined, DBInstanceClass: string | null | undefined, Duration: string | null | undefined, ProductDescription: string | null | undefined, OfferingType: string | null | undefined, MultiAZ: boolean | null | undefined, MaxRecords: number | null | undefined, Marker: string | null | undefined, Action: GET_DescribeReservedDBInstancesOfferingsAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeReservedDBInstancesOfferings?ReservedDBInstancesOfferingId=' + (ReservedDBInstancesOfferingId == null ? '' : encodeURIComponent(ReservedDBInstancesOfferingId)) + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&Duration=' + (Duration == null ? '' : encodeURIComponent(Duration)) + '&ProductDescription=' + (ProductDescription == null ? '' : encodeURIComponent(ProductDescription)) + '&OfferingType=' + (OfferingType == null ? '' : encodeURIComponent(OfferingType)) + '&MultiAZ=' + MultiAZ + '&MaxRecords=' + MaxRecords + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=DownloadDBLogFilePortion
		 * @return {void} Success
		 */
		GET_DownloadDBLogFilePortion(DBInstanceIdentifier: string, LogFileName: string, Marker: string | null | undefined, NumberOfLines: number | null | undefined, Action: GET_DownloadDBLogFilePortionAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DownloadDBLogFilePortion?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&LogFileName=' + (LogFileName == null ? '' : encodeURIComponent(LogFileName)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)) + '&NumberOfLines=' + NumberOfLines + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=ListTagsForResource
		 * @return {void} Success
		 */
		GET_ListTagsForResource(ResourceName: string, Action: GET_ListTagsForResourceAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTagsForResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=ModifyDBInstance
		 * @return {void} Success
		 */
		GET_ModifyDBInstance(DBInstanceIdentifier: string, AllocatedStorage: number | null | undefined, DBInstanceClass: string | null | undefined, DBSecurityGroups: Array<string> | null | undefined, VpcSecurityGroupIds: Array<string> | null | undefined, ApplyImmediately: boolean | null | undefined, MasterUserPassword: string | null | undefined, DBParameterGroupName: string | null | undefined, BackupRetentionPeriod: number | null | undefined, PreferredBackupWindow: string | null | undefined, PreferredMaintenanceWindow: string | null | undefined, MultiAZ: boolean | null | undefined, EngineVersion: string | null | undefined, AllowMajorVersionUpgrade: boolean | null | undefined, AutoMinorVersionUpgrade: boolean | null | undefined, Iops: number | null | undefined, OptionGroupName: string | null | undefined, NewDBInstanceIdentifier: string | null | undefined, Action: GET_ModifyDBInstanceAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&AllocatedStorage=' + AllocatedStorage + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&' + DBSecurityGroups?.map(z => `DBSecurityGroups=${encodeURIComponent(z)}`).join('&') + '&' + VpcSecurityGroupIds?.map(z => `VpcSecurityGroupIds=${encodeURIComponent(z)}`).join('&') + '&ApplyImmediately=' + ApplyImmediately + '&MasterUserPassword=' + (MasterUserPassword == null ? '' : encodeURIComponent(MasterUserPassword)) + '&DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&PreferredMaintenanceWindow=' + (PreferredMaintenanceWindow == null ? '' : encodeURIComponent(PreferredMaintenanceWindow)) + '&MultiAZ=' + MultiAZ + '&EngineVersion=' + (EngineVersion == null ? '' : encodeURIComponent(EngineVersion)) + '&AllowMajorVersionUpgrade=' + AllowMajorVersionUpgrade + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&Iops=' + Iops + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&NewDBInstanceIdentifier=' + (NewDBInstanceIdentifier == null ? '' : encodeURIComponent(NewDBInstanceIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=ModifyDBParameterGroup
		 * @return {void} Success
		 */
		GET_ModifyDBParameterGroup(DBParameterGroupName: string, Parameters: Array<string>, Action: GET_ModifyDBParameterGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBParameterGroup?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&' + Parameters.map(z => `Parameters=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=ModifyDBSubnetGroup
		 * @return {void} Success
		 */
		GET_ModifyDBSubnetGroup(DBSubnetGroupName: string, DBSubnetGroupDescription: string | null | undefined, SubnetIds: Array<string>, Action: GET_ModifyDBSubnetGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyDBSubnetGroup?DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&DBSubnetGroupDescription=' + (DBSubnetGroupDescription == null ? '' : encodeURIComponent(DBSubnetGroupDescription)) + '&' + SubnetIds.map(z => `SubnetIds=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=ModifyEventSubscription
		 * @return {void} Success
		 */
		GET_ModifyEventSubscription(SubscriptionName: string, SnsTopicArn: string | null | undefined, SourceType: string | null | undefined, EventCategories: Array<string> | null | undefined, Enabled: boolean | null | undefined, Action: GET_ModifyEventSubscriptionAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyEventSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SnsTopicArn=' + (SnsTopicArn == null ? '' : encodeURIComponent(SnsTopicArn)) + '&SourceType=' + (SourceType == null ? '' : encodeURIComponent(SourceType)) + '&' + EventCategories?.map(z => `EventCategories=${encodeURIComponent(z)}`).join('&') + '&Enabled=' + Enabled + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=ModifyOptionGroup
		 * @return {void} Success
		 */
		GET_ModifyOptionGroup(OptionGroupName: string, OptionsToInclude: Array<string> | null | undefined, OptionsToRemove: Array<string> | null | undefined, ApplyImmediately: boolean | null | undefined, Action: GET_ModifyOptionGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ModifyOptionGroup?OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&' + OptionsToInclude?.map(z => `OptionsToInclude=${encodeURIComponent(z)}`).join('&') + '&' + OptionsToRemove?.map(z => `OptionsToRemove=${encodeURIComponent(z)}`).join('&') + '&ApplyImmediately=' + ApplyImmediately + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=PromoteReadReplica
		 * @return {void} Success
		 */
		GET_PromoteReadReplica(DBInstanceIdentifier: string, BackupRetentionPeriod: number | null | undefined, PreferredBackupWindow: string | null | undefined, Action: GET_PromoteReadReplicaAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PromoteReadReplica?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&BackupRetentionPeriod=' + BackupRetentionPeriod + '&PreferredBackupWindow=' + (PreferredBackupWindow == null ? '' : encodeURIComponent(PreferredBackupWindow)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=PurchaseReservedDBInstancesOffering
		 * @return {void} Success
		 */
		GET_PurchaseReservedDBInstancesOffering(ReservedDBInstancesOfferingId: string, ReservedDBInstanceId: string | null | undefined, DBInstanceCount: number | null | undefined, Action: GET_PurchaseReservedDBInstancesOfferingAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PurchaseReservedDBInstancesOffering?ReservedDBInstancesOfferingId=' + (ReservedDBInstancesOfferingId == null ? '' : encodeURIComponent(ReservedDBInstancesOfferingId)) + '&ReservedDBInstanceId=' + (ReservedDBInstanceId == null ? '' : encodeURIComponent(ReservedDBInstanceId)) + '&DBInstanceCount=' + DBInstanceCount + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=RebootDBInstance
		 * @return {void} Success
		 */
		GET_RebootDBInstance(DBInstanceIdentifier: string, ForceFailover: boolean | null | undefined, Action: GET_RebootDBInstanceAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RebootDBInstance?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&ForceFailover=' + ForceFailover + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=RemoveSourceIdentifierFromSubscription
		 * @return {void} Success
		 */
		GET_RemoveSourceIdentifierFromSubscription(SubscriptionName: string, SourceIdentifier: string, Action: GET_RemoveSourceIdentifierFromSubscriptionAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveSourceIdentifierFromSubscription?SubscriptionName=' + (SubscriptionName == null ? '' : encodeURIComponent(SubscriptionName)) + '&SourceIdentifier=' + (SourceIdentifier == null ? '' : encodeURIComponent(SourceIdentifier)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=RemoveTagsFromResource
		 * @return {void} Success
		 */
		GET_RemoveTagsFromResource(ResourceName: string, TagKeys: Array<string>, Action: GET_RemoveTagsFromResourceAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RemoveTagsFromResource?ResourceName=' + (ResourceName == null ? '' : encodeURIComponent(ResourceName)) + '&' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=ResetDBParameterGroup
		 * @return {void} Success
		 */
		GET_ResetDBParameterGroup(DBParameterGroupName: string, ResetAllParameters: boolean | null | undefined, Parameters: Array<string> | null | undefined, Action: GET_ResetDBParameterGroupAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ResetDBParameterGroup?DBParameterGroupName=' + (DBParameterGroupName == null ? '' : encodeURIComponent(DBParameterGroupName)) + '&ResetAllParameters=' + ResetAllParameters + '&' + Parameters?.map(z => `Parameters=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=RestoreDBInstanceFromDBSnapshot
		 * @return {void} Success
		 */
		GET_RestoreDBInstanceFromDBSnapshot(DBInstanceIdentifier: string, DBSnapshotIdentifier: string, DBInstanceClass: string | null | undefined, Port: number | null | undefined, AvailabilityZone: string | null | undefined, DBSubnetGroupName: string | null | undefined, MultiAZ: boolean | null | undefined, PubliclyAccessible: boolean | null | undefined, AutoMinorVersionUpgrade: boolean | null | undefined, LicenseModel: string | null | undefined, DBName: string | null | undefined, Engine: string | null | undefined, Iops: number | null | undefined, OptionGroupName: string | null | undefined, Action: GET_RestoreDBInstanceFromDBSnapshotAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RestoreDBInstanceFromDBSnapshot?DBInstanceIdentifier=' + (DBInstanceIdentifier == null ? '' : encodeURIComponent(DBInstanceIdentifier)) + '&DBSnapshotIdentifier=' + (DBSnapshotIdentifier == null ? '' : encodeURIComponent(DBSnapshotIdentifier)) + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&Port=' + Port + '&AvailabilityZone=' + (AvailabilityZone == null ? '' : encodeURIComponent(AvailabilityZone)) + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&MultiAZ=' + MultiAZ + '&PubliclyAccessible=' + PubliclyAccessible + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&DBName=' + (DBName == null ? '' : encodeURIComponent(DBName)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&Iops=' + Iops + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=RestoreDBInstanceToPointInTime
		 * @return {void} Success
		 */
		GET_RestoreDBInstanceToPointInTime(SourceDBInstanceIdentifier: string, TargetDBInstanceIdentifier: string, RestoreTime: Date | null | undefined, UseLatestRestorableTime: boolean | null | undefined, DBInstanceClass: string | null | undefined, Port: number | null | undefined, AvailabilityZone: string | null | undefined, DBSubnetGroupName: string | null | undefined, MultiAZ: boolean | null | undefined, PubliclyAccessible: boolean | null | undefined, AutoMinorVersionUpgrade: boolean | null | undefined, LicenseModel: string | null | undefined, DBName: string | null | undefined, Engine: string | null | undefined, Iops: number | null | undefined, OptionGroupName: string | null | undefined, Action: GET_RestoreDBInstanceToPointInTimeAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RestoreDBInstanceToPointInTime?SourceDBInstanceIdentifier=' + (SourceDBInstanceIdentifier == null ? '' : encodeURIComponent(SourceDBInstanceIdentifier)) + '&TargetDBInstanceIdentifier=' + (TargetDBInstanceIdentifier == null ? '' : encodeURIComponent(TargetDBInstanceIdentifier)) + '&RestoreTime=' + RestoreTime?.toISOString() + '&UseLatestRestorableTime=' + UseLatestRestorableTime + '&DBInstanceClass=' + (DBInstanceClass == null ? '' : encodeURIComponent(DBInstanceClass)) + '&Port=' + Port + '&AvailabilityZone=' + (AvailabilityZone == null ? '' : encodeURIComponent(AvailabilityZone)) + '&DBSubnetGroupName=' + (DBSubnetGroupName == null ? '' : encodeURIComponent(DBSubnetGroupName)) + '&MultiAZ=' + MultiAZ + '&PubliclyAccessible=' + PubliclyAccessible + '&AutoMinorVersionUpgrade=' + AutoMinorVersionUpgrade + '&LicenseModel=' + (LicenseModel == null ? '' : encodeURIComponent(LicenseModel)) + '&DBName=' + (DBName == null ? '' : encodeURIComponent(DBName)) + '&Engine=' + (Engine == null ? '' : encodeURIComponent(Engine)) + '&Iops=' + Iops + '&OptionGroupName=' + (OptionGroupName == null ? '' : encodeURIComponent(OptionGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get #Action=RevokeDBSecurityGroupIngress
		 * @return {void} Success
		 */
		GET_RevokeDBSecurityGroupIngress(DBSecurityGroupName: string, CIDRIP: string | null | undefined, EC2SecurityGroupName: string | null | undefined, EC2SecurityGroupId: string | null | undefined, EC2SecurityGroupOwnerId: string | null | undefined, Action: GET_RevokeDBSecurityGroupIngressAction, Version: GET_AddSourceIdentifierToSubscriptionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RevokeDBSecurityGroupIngress?DBSecurityGroupName=' + (DBSecurityGroupName == null ? '' : encodeURIComponent(DBSecurityGroupName)) + '&CIDRIP=' + (CIDRIP == null ? '' : encodeURIComponent(CIDRIP)) + '&EC2SecurityGroupName=' + (EC2SecurityGroupName == null ? '' : encodeURIComponent(EC2SecurityGroupName)) + '&EC2SecurityGroupId=' + (EC2SecurityGroupId == null ? '' : encodeURIComponent(EC2SecurityGroupId)) + '&EC2SecurityGroupOwnerId=' + (EC2SecurityGroupOwnerId == null ? '' : encodeURIComponent(EC2SecurityGroupOwnerId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AddSourceIdentifierToSubscriptionAction { AddSourceIdentifierToSubscription = 'AddSourceIdentifierToSubscription' }

	export enum GET_AddSourceIdentifierToSubscriptionVersion { '2013-02-12' = '2013-02-12' }

	export enum GET_AddTagsToResourceAction { AddTagsToResource = 'AddTagsToResource' }

	export enum GET_AuthorizeDBSecurityGroupIngressAction { AuthorizeDBSecurityGroupIngress = 'AuthorizeDBSecurityGroupIngress' }

	export enum GET_CopyDBSnapshotAction { CopyDBSnapshot = 'CopyDBSnapshot' }

	export enum GET_CreateDBInstanceAction { CreateDBInstance = 'CreateDBInstance' }

	export enum GET_CreateDBInstanceReadReplicaAction { CreateDBInstanceReadReplica = 'CreateDBInstanceReadReplica' }

	export enum GET_CreateDBParameterGroupAction { CreateDBParameterGroup = 'CreateDBParameterGroup' }

	export enum GET_CreateDBSecurityGroupAction { CreateDBSecurityGroup = 'CreateDBSecurityGroup' }

	export enum GET_CreateDBSnapshotAction { CreateDBSnapshot = 'CreateDBSnapshot' }

	export enum GET_CreateDBSubnetGroupAction { CreateDBSubnetGroup = 'CreateDBSubnetGroup' }

	export enum GET_CreateEventSubscriptionAction { CreateEventSubscription = 'CreateEventSubscription' }

	export enum GET_CreateOptionGroupAction { CreateOptionGroup = 'CreateOptionGroup' }

	export enum GET_DeleteDBInstanceAction { DeleteDBInstance = 'DeleteDBInstance' }

	export enum GET_DeleteDBParameterGroupAction { DeleteDBParameterGroup = 'DeleteDBParameterGroup' }

	export enum GET_DeleteDBSecurityGroupAction { DeleteDBSecurityGroup = 'DeleteDBSecurityGroup' }

	export enum GET_DeleteDBSnapshotAction { DeleteDBSnapshot = 'DeleteDBSnapshot' }

	export enum GET_DeleteDBSubnetGroupAction { DeleteDBSubnetGroup = 'DeleteDBSubnetGroup' }

	export enum GET_DeleteEventSubscriptionAction { DeleteEventSubscription = 'DeleteEventSubscription' }

	export enum GET_DeleteOptionGroupAction { DeleteOptionGroup = 'DeleteOptionGroup' }

	export enum GET_DescribeDBEngineVersionsAction { DescribeDBEngineVersions = 'DescribeDBEngineVersions' }

	export enum GET_DescribeDBInstancesAction { DescribeDBInstances = 'DescribeDBInstances' }

	export enum GET_DescribeDBLogFilesAction { DescribeDBLogFiles = 'DescribeDBLogFiles' }

	export enum GET_DescribeDBParameterGroupsAction { DescribeDBParameterGroups = 'DescribeDBParameterGroups' }

	export enum GET_DescribeDBParametersAction { DescribeDBParameters = 'DescribeDBParameters' }

	export enum GET_DescribeDBSecurityGroupsAction { DescribeDBSecurityGroups = 'DescribeDBSecurityGroups' }

	export enum GET_DescribeDBSnapshotsAction { DescribeDBSnapshots = 'DescribeDBSnapshots' }

	export enum GET_DescribeDBSubnetGroupsAction { DescribeDBSubnetGroups = 'DescribeDBSubnetGroups' }

	export enum GET_DescribeEngineDefaultParametersAction { DescribeEngineDefaultParameters = 'DescribeEngineDefaultParameters' }

	export enum GET_DescribeEventCategoriesAction { DescribeEventCategories = 'DescribeEventCategories' }

	export enum GET_DescribeEventSubscriptionsAction { DescribeEventSubscriptions = 'DescribeEventSubscriptions' }

	export enum GET_DescribeEventsAction { DescribeEvents = 'DescribeEvents' }

	export enum GET_DescribeOptionGroupOptionsAction { DescribeOptionGroupOptions = 'DescribeOptionGroupOptions' }

	export enum GET_DescribeOptionGroupsAction { DescribeOptionGroups = 'DescribeOptionGroups' }

	export enum GET_DescribeOrderableDBInstanceOptionsAction { DescribeOrderableDBInstanceOptions = 'DescribeOrderableDBInstanceOptions' }

	export enum GET_DescribeReservedDBInstancesAction { DescribeReservedDBInstances = 'DescribeReservedDBInstances' }

	export enum GET_DescribeReservedDBInstancesOfferingsAction { DescribeReservedDBInstancesOfferings = 'DescribeReservedDBInstancesOfferings' }

	export enum GET_DownloadDBLogFilePortionAction { DownloadDBLogFilePortion = 'DownloadDBLogFilePortion' }

	export enum GET_ListTagsForResourceAction { ListTagsForResource = 'ListTagsForResource' }

	export enum GET_ModifyDBInstanceAction { ModifyDBInstance = 'ModifyDBInstance' }

	export enum GET_ModifyDBParameterGroupAction { ModifyDBParameterGroup = 'ModifyDBParameterGroup' }

	export enum GET_ModifyDBSubnetGroupAction { ModifyDBSubnetGroup = 'ModifyDBSubnetGroup' }

	export enum GET_ModifyEventSubscriptionAction { ModifyEventSubscription = 'ModifyEventSubscription' }

	export enum GET_ModifyOptionGroupAction { ModifyOptionGroup = 'ModifyOptionGroup' }

	export enum GET_PromoteReadReplicaAction { PromoteReadReplica = 'PromoteReadReplica' }

	export enum GET_PurchaseReservedDBInstancesOfferingAction { PurchaseReservedDBInstancesOffering = 'PurchaseReservedDBInstancesOffering' }

	export enum GET_RebootDBInstanceAction { RebootDBInstance = 'RebootDBInstance' }

	export enum GET_RemoveSourceIdentifierFromSubscriptionAction { RemoveSourceIdentifierFromSubscription = 'RemoveSourceIdentifierFromSubscription' }

	export enum GET_RemoveTagsFromResourceAction { RemoveTagsFromResource = 'RemoveTagsFromResource' }

	export enum GET_ResetDBParameterGroupAction { ResetDBParameterGroup = 'ResetDBParameterGroup' }

	export enum GET_RestoreDBInstanceFromDBSnapshotAction { RestoreDBInstanceFromDBSnapshot = 'RestoreDBInstanceFromDBSnapshot' }

	export enum GET_RestoreDBInstanceToPointInTimeAction { RestoreDBInstanceToPointInTime = 'RestoreDBInstanceToPointInTime' }

	export enum GET_RevokeDBSecurityGroupIngressAction { RevokeDBSecurityGroupIngress = 'RevokeDBSecurityGroupIngress' }

}

