import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateNodeResponse {
		NodeAssociationStatusToken?: string;
	}
	export interface AssociateNodeResponseFormProperties {
		NodeAssociationStatusToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateNodeResponseFormGroup() {
		return new FormGroup<AssociateNodeResponseFormProperties>({
			NodeAssociationStatusToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateNodeRequest {

		/** Required */
		ServerName: string;

		/** Required */
		NodeName: string;

		/** Required */
		EngineAttributes: Array<EngineAttribute>;
	}
	export interface AssociateNodeRequestFormProperties {

		/** Required */
		ServerName: FormControl<string | null | undefined>,

		/** Required */
		NodeName: FormControl<string | null | undefined>,
	}
	export function CreateAssociateNodeRequestFormGroup() {
		return new FormGroup<AssociateNodeRequestFormProperties>({
			ServerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NodeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A name and value pair that is specific to the engine of the server.  */
	export interface EngineAttribute {
		Name?: string;
		Value?: string;
	}

	/** A name and value pair that is specific to the engine of the server.  */
	export interface EngineAttributeFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateEngineAttributeFormGroup() {
		return new FormGroup<EngineAttributeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidStateException {
	}
	export interface InvalidStateExceptionFormProperties {
	}
	export function CreateInvalidStateExceptionFormGroup() {
		return new FormGroup<InvalidStateExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface CreateBackupResponse {
		Backup?: Backup;
	}
	export interface CreateBackupResponseFormProperties {
	}
	export function CreateCreateBackupResponseFormGroup() {
		return new FormGroup<CreateBackupResponseFormProperties>({
		});

	}


	/** Describes a single backup.  */
	export interface Backup {
		BackupArn?: string;
		BackupId?: string;
		BackupType?: BackupType;
		CreatedAt?: Date;
		Description?: string;
		Engine?: string;
		EngineModel?: string;
		EngineVersion?: string;
		InstanceProfileArn?: string;
		InstanceType?: string;
		KeyPair?: string;
		PreferredBackupWindow?: string;
		PreferredMaintenanceWindow?: string;
		S3DataSize?: number | null;
		S3DataUrl?: string;
		S3LogUrl?: string;
		SecurityGroupIds?: Array<string>;
		ServerName?: string;
		ServiceRoleArn?: string;
		Status?: BackupStatus;
		StatusDescription?: string;
		SubnetIds?: Array<string>;
		ToolsVersion?: string;
		UserArn?: string;
	}

	/** Describes a single backup.  */
	export interface BackupFormProperties {
		BackupArn: FormControl<string | null | undefined>,
		BackupId: FormControl<string | null | undefined>,
		BackupType: FormControl<BackupType | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		EngineModel: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		InstanceProfileArn: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		KeyPair: FormControl<string | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		S3DataSize: FormControl<number | null | undefined>,
		S3DataUrl: FormControl<string | null | undefined>,
		S3LogUrl: FormControl<string | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,
		Status: FormControl<BackupStatus | null | undefined>,
		StatusDescription: FormControl<string | null | undefined>,
		ToolsVersion: FormControl<string | null | undefined>,
		UserArn: FormControl<string | null | undefined>,
	}
	export function CreateBackupFormGroup() {
		return new FormGroup<BackupFormProperties>({
			BackupArn: new FormControl<string | null | undefined>(undefined),
			BackupId: new FormControl<string | null | undefined>(undefined),
			BackupType: new FormControl<BackupType | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineModel: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			InstanceProfileArn: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			KeyPair: new FormControl<string | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			S3DataSize: new FormControl<number | null | undefined>(undefined),
			S3DataUrl: new FormControl<string | null | undefined>(undefined),
			S3LogUrl: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<BackupStatus | null | undefined>(undefined),
			StatusDescription: new FormControl<string | null | undefined>(undefined),
			ToolsVersion: new FormControl<string | null | undefined>(undefined),
			UserArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackupType { AUTOMATED = 0, MANUAL = 1 }

	export enum BackupStatus { IN_PROGRESS = 0, OK = 1, FAILED = 2, DELETING = 3 }

	export interface CreateBackupRequest {

		/** Required */
		ServerName: string;
		Description?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateBackupRequestFormProperties {

		/** Required */
		ServerName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackupRequestFormGroup() {
		return new FormGroup<CreateBackupRequestFormProperties>({
			ServerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A map that contains tag keys and tag values to attach to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server. Leading and trailing white spaces are trimmed from both the key and value. A maximum of 50 user-applied tags is allowed for tag-supported AWS OpsWorks-CM resources. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A map that contains tag keys and tag values to attach to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server. Leading and trailing white spaces are trimmed from both the key and value. A maximum of 50 user-applied tags is allowed for tag-supported AWS OpsWorks-CM resources. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateServerResponse {
		Server?: Server;
	}
	export interface CreateServerResponseFormProperties {
	}
	export function CreateCreateServerResponseFormGroup() {
		return new FormGroup<CreateServerResponseFormProperties>({
		});

	}


	/** Describes a configuration management server.  */
	export interface Server {
		AssociatePublicIpAddress?: boolean | null;
		BackupRetentionCount?: number | null;
		ServerName?: string;
		CreatedAt?: Date;
		CloudFormationStackArn?: string;
		CustomDomain?: string;
		DisableAutomatedBackup?: boolean | null;
		Endpoint?: string;
		Engine?: string;
		EngineModel?: string;
		EngineAttributes?: Array<EngineAttribute>;
		EngineVersion?: string;
		InstanceProfileArn?: string;
		InstanceType?: string;
		KeyPair?: string;
		MaintenanceStatus?: MaintenanceStatus;
		PreferredMaintenanceWindow?: string;
		PreferredBackupWindow?: string;
		SecurityGroupIds?: Array<string>;
		ServiceRoleArn?: string;
		Status?: ServerStatus;
		StatusReason?: string;
		SubnetIds?: Array<string>;
		ServerArn?: string;
	}

	/** Describes a configuration management server.  */
	export interface ServerFormProperties {
		AssociatePublicIpAddress: FormControl<boolean | null | undefined>,
		BackupRetentionCount: FormControl<number | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		CloudFormationStackArn: FormControl<string | null | undefined>,
		CustomDomain: FormControl<string | null | undefined>,
		DisableAutomatedBackup: FormControl<boolean | null | undefined>,
		Endpoint: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		EngineModel: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		InstanceProfileArn: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		KeyPair: FormControl<string | null | undefined>,
		MaintenanceStatus: FormControl<MaintenanceStatus | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,
		Status: FormControl<ServerStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		ServerArn: FormControl<string | null | undefined>,
	}
	export function CreateServerFormGroup() {
		return new FormGroup<ServerFormProperties>({
			AssociatePublicIpAddress: new FormControl<boolean | null | undefined>(undefined),
			BackupRetentionCount: new FormControl<number | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			CloudFormationStackArn: new FormControl<string | null | undefined>(undefined),
			CustomDomain: new FormControl<string | null | undefined>(undefined),
			DisableAutomatedBackup: new FormControl<boolean | null | undefined>(undefined),
			Endpoint: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			EngineModel: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			InstanceProfileArn: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			KeyPair: new FormControl<string | null | undefined>(undefined),
			MaintenanceStatus: new FormControl<MaintenanceStatus | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ServerStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			ServerArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MaintenanceStatus { SUCCESS = 0, FAILED = 1 }

	export enum ServerStatus { BACKING_UP = 0, CONNECTION_LOST = 1, CREATING = 2, DELETING = 3, MODIFYING = 4, FAILED = 5, HEALTHY = 6, RUNNING = 7, RESTORING = 8, SETUP = 9, UNDER_MAINTENANCE = 10, UNHEALTHY = 11, TERMINATED = 12 }

	export interface CreateServerRequest {
		AssociatePublicIpAddress?: boolean | null;
		CustomDomain?: string;
		CustomCertificate?: string;
		CustomPrivateKey?: string;
		DisableAutomatedBackup?: boolean | null;

		/** Required */
		Engine: string;
		EngineModel?: string;
		EngineVersion?: string;
		EngineAttributes?: Array<EngineAttribute>;
		BackupRetentionCount?: number | null;

		/** Required */
		ServerName: string;

		/** Required */
		InstanceProfileArn: string;

		/** Required */
		InstanceType: string;
		KeyPair?: string;
		PreferredMaintenanceWindow?: string;
		PreferredBackupWindow?: string;
		SecurityGroupIds?: Array<string>;

		/** Required */
		ServiceRoleArn: string;
		SubnetIds?: Array<string>;
		Tags?: Array<Tag>;
		BackupId?: string;
	}
	export interface CreateServerRequestFormProperties {
		AssociatePublicIpAddress: FormControl<boolean | null | undefined>,
		CustomDomain: FormControl<string | null | undefined>,
		CustomCertificate: FormControl<string | null | undefined>,
		CustomPrivateKey: FormControl<string | null | undefined>,
		DisableAutomatedBackup: FormControl<boolean | null | undefined>,

		/** Required */
		Engine: FormControl<string | null | undefined>,
		EngineModel: FormControl<string | null | undefined>,
		EngineVersion: FormControl<string | null | undefined>,
		BackupRetentionCount: FormControl<number | null | undefined>,

		/** Required */
		ServerName: FormControl<string | null | undefined>,

		/** Required */
		InstanceProfileArn: FormControl<string | null | undefined>,

		/** Required */
		InstanceType: FormControl<string | null | undefined>,
		KeyPair: FormControl<string | null | undefined>,
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,
		PreferredBackupWindow: FormControl<string | null | undefined>,

		/** Required */
		ServiceRoleArn: FormControl<string | null | undefined>,
		BackupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateServerRequestFormGroup() {
		return new FormGroup<CreateServerRequestFormProperties>({
			AssociatePublicIpAddress: new FormControl<boolean | null | undefined>(undefined),
			CustomDomain: new FormControl<string | null | undefined>(undefined),
			CustomCertificate: new FormControl<string | null | undefined>(undefined),
			CustomPrivateKey: new FormControl<string | null | undefined>(undefined),
			DisableAutomatedBackup: new FormControl<boolean | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EngineModel: new FormControl<string | null | undefined>(undefined),
			EngineVersion: new FormControl<string | null | undefined>(undefined),
			BackupRetentionCount: new FormControl<number | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceProfileArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KeyPair: new FormControl<string | null | undefined>(undefined),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BackupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface DeleteBackupResponse {
	}
	export interface DeleteBackupResponseFormProperties {
	}
	export function CreateDeleteBackupResponseFormGroup() {
		return new FormGroup<DeleteBackupResponseFormProperties>({
		});

	}

	export interface DeleteBackupRequest {

		/** Required */
		BackupId: string;
	}
	export interface DeleteBackupRequestFormProperties {

		/** Required */
		BackupId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackupRequestFormGroup() {
		return new FormGroup<DeleteBackupRequestFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteServerResponse {
	}
	export interface DeleteServerResponseFormProperties {
	}
	export function CreateDeleteServerResponseFormGroup() {
		return new FormGroup<DeleteServerResponseFormProperties>({
		});

	}

	export interface DeleteServerRequest {

		/** Required */
		ServerName: string;
	}
	export interface DeleteServerRequestFormProperties {

		/** Required */
		ServerName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServerRequestFormGroup() {
		return new FormGroup<DeleteServerRequestFormProperties>({
			ServerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAccountAttributesResponse {
		Attributes?: Array<AccountAttribute>;
	}
	export interface DescribeAccountAttributesResponseFormProperties {
	}
	export function CreateDescribeAccountAttributesResponseFormGroup() {
		return new FormGroup<DescribeAccountAttributesResponseFormProperties>({
		});

	}


	/** Stores account attributes.  */
	export interface AccountAttribute {
		Name?: string;
		Maximum?: number | null;
		Used?: number | null;
	}

	/** Stores account attributes.  */
	export interface AccountAttributeFormProperties {
		Name: FormControl<string | null | undefined>,
		Maximum: FormControl<number | null | undefined>,
		Used: FormControl<number | null | undefined>,
	}
	export function CreateAccountAttributeFormGroup() {
		return new FormGroup<AccountAttributeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Maximum: new FormControl<number | null | undefined>(undefined),
			Used: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeAccountAttributesRequest {
	}
	export interface DescribeAccountAttributesRequestFormProperties {
	}
	export function CreateDescribeAccountAttributesRequestFormGroup() {
		return new FormGroup<DescribeAccountAttributesRequestFormProperties>({
		});

	}

	export interface DescribeBackupsResponse {
		Backups?: Array<Backup>;
		NextToken?: string;
	}
	export interface DescribeBackupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBackupsResponseFormGroup() {
		return new FormGroup<DescribeBackupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeBackupsRequest {
		BackupId?: string;
		ServerName?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeBackupsRequestFormProperties {
		BackupId: FormControl<string | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeBackupsRequestFormGroup() {
		return new FormGroup<DescribeBackupsRequestFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
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

	export interface DescribeEventsResponse {
		ServerEvents?: Array<ServerEvent>;
		NextToken?: string;
	}
	export interface DescribeEventsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsResponseFormGroup() {
		return new FormGroup<DescribeEventsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event that is related to the server, such as the start of maintenance or backup.  */
	export interface ServerEvent {
		CreatedAt?: Date;
		ServerName?: string;
		Message?: string;
		LogUrl?: string;
	}

	/** An event that is related to the server, such as the start of maintenance or backup.  */
	export interface ServerEventFormProperties {
		CreatedAt: FormControl<Date | null | undefined>,
		ServerName: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		LogUrl: FormControl<string | null | undefined>,
	}
	export function CreateServerEventFormGroup() {
		return new FormGroup<ServerEventFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			LogUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventsRequest {

		/** Required */
		ServerName: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeEventsRequestFormProperties {

		/** Required */
		ServerName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeEventsRequestFormGroup() {
		return new FormGroup<DescribeEventsRequestFormProperties>({
			ServerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeNodeAssociationStatusResponse {
		NodeAssociationStatus?: NodeAssociationStatus;
		EngineAttributes?: Array<EngineAttribute>;
	}
	export interface DescribeNodeAssociationStatusResponseFormProperties {
		NodeAssociationStatus: FormControl<NodeAssociationStatus | null | undefined>,
	}
	export function CreateDescribeNodeAssociationStatusResponseFormGroup() {
		return new FormGroup<DescribeNodeAssociationStatusResponseFormProperties>({
			NodeAssociationStatus: new FormControl<NodeAssociationStatus | null | undefined>(undefined),
		});

	}


	/** <p>The status of the association or disassociation request. </p> <p class="title"> <b>Possible values:</b> </p> <ul> <li> <p> <code>SUCCESS</code>: The association or disassociation succeeded. </p> </li> <li> <p> <code>FAILED</code>: The association or disassociation failed. </p> </li> <li> <p> <code>IN_PROGRESS</code>: The association or disassociation is still in progress. </p> </li> </ul> */
	export enum NodeAssociationStatus { SUCCESS = 0, FAILED = 1, IN_PROGRESS = 2 }

	export interface DescribeNodeAssociationStatusRequest {

		/** Required */
		NodeAssociationStatusToken: string;

		/** Required */
		ServerName: string;
	}
	export interface DescribeNodeAssociationStatusRequestFormProperties {

		/** Required */
		NodeAssociationStatusToken: FormControl<string | null | undefined>,

		/** Required */
		ServerName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNodeAssociationStatusRequestFormGroup() {
		return new FormGroup<DescribeNodeAssociationStatusRequestFormProperties>({
			NodeAssociationStatusToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeServersResponse {
		Servers?: Array<Server>;
		NextToken?: string;
	}
	export interface DescribeServersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeServersResponseFormGroup() {
		return new FormGroup<DescribeServersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeServersRequest {
		ServerName?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeServersRequestFormProperties {
		ServerName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeServersRequestFormGroup() {
		return new FormGroup<DescribeServersRequestFormProperties>({
			ServerName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DisassociateNodeResponse {
		NodeAssociationStatusToken?: string;
	}
	export interface DisassociateNodeResponseFormProperties {
		NodeAssociationStatusToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateNodeResponseFormGroup() {
		return new FormGroup<DisassociateNodeResponseFormProperties>({
			NodeAssociationStatusToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateNodeRequest {

		/** Required */
		ServerName: string;

		/** Required */
		NodeName: string;
		EngineAttributes?: Array<EngineAttribute>;
	}
	export interface DisassociateNodeRequestFormProperties {

		/** Required */
		ServerName: FormControl<string | null | undefined>,

		/** Required */
		NodeName: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateNodeRequestFormGroup() {
		return new FormGroup<DisassociateNodeRequestFormProperties>({
			ServerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NodeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExportServerEngineAttributeResponse {
		EngineAttribute?: EngineAttribute;
		ServerName?: string;
	}
	export interface ExportServerEngineAttributeResponseFormProperties {
		ServerName: FormControl<string | null | undefined>,
	}
	export function CreateExportServerEngineAttributeResponseFormGroup() {
		return new FormGroup<ExportServerEngineAttributeResponseFormProperties>({
			ServerName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportServerEngineAttributeRequest {

		/** Required */
		ExportAttributeName: string;

		/** Required */
		ServerName: string;
		InputAttributes?: Array<EngineAttribute>;
	}
	export interface ExportServerEngineAttributeRequestFormProperties {

		/** Required */
		ExportAttributeName: FormControl<string | null | undefined>,

		/** Required */
		ServerName: FormControl<string | null | undefined>,
	}
	export function CreateExportServerEngineAttributeRequestFormGroup() {
		return new FormGroup<ExportServerEngineAttributeRequestFormProperties>({
			ExportAttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RestoreServerResponse {

		/** Describes a configuration management server. */
		Server?: Server;
	}
	export interface RestoreServerResponseFormProperties {
	}
	export function CreateRestoreServerResponseFormGroup() {
		return new FormGroup<RestoreServerResponseFormProperties>({
		});

	}

	export interface RestoreServerRequest {

		/** Required */
		BackupId: string;

		/** Required */
		ServerName: string;
		InstanceType?: string;
		KeyPair?: string;
	}
	export interface RestoreServerRequestFormProperties {

		/** Required */
		BackupId: FormControl<string | null | undefined>,

		/** Required */
		ServerName: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		KeyPair: FormControl<string | null | undefined>,
	}
	export function CreateRestoreServerRequestFormGroup() {
		return new FormGroup<RestoreServerRequestFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			KeyPair: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartMaintenanceResponse {
		Server?: Server;
	}
	export interface StartMaintenanceResponseFormProperties {
	}
	export function CreateStartMaintenanceResponseFormGroup() {
		return new FormGroup<StartMaintenanceResponseFormProperties>({
		});

	}

	export interface StartMaintenanceRequest {

		/** Required */
		ServerName: string;
		EngineAttributes?: Array<EngineAttribute>;
	}
	export interface StartMaintenanceRequestFormProperties {

		/** Required */
		ServerName: FormControl<string | null | undefined>,
	}
	export function CreateStartMaintenanceRequestFormGroup() {
		return new FormGroup<StartMaintenanceRequestFormProperties>({
			ServerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
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

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
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

	export interface UpdateServerResponse {
		Server?: Server;
	}
	export interface UpdateServerResponseFormProperties {
	}
	export function CreateUpdateServerResponseFormGroup() {
		return new FormGroup<UpdateServerResponseFormProperties>({
		});

	}

	export interface UpdateServerRequest {
		DisableAutomatedBackup?: boolean | null;
		BackupRetentionCount?: number | null;

		/** Required */
		ServerName: string;

		/**
		 * <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
		 * Max length: 10000
		 */
		PreferredMaintenanceWindow?: string | null;

		/**
		 * <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
		 * Max length: 10000
		 */
		PreferredBackupWindow?: string | null;
	}
	export interface UpdateServerRequestFormProperties {
		DisableAutomatedBackup: FormControl<boolean | null | undefined>,
		BackupRetentionCount: FormControl<number | null | undefined>,

		/** Required */
		ServerName: FormControl<string | null | undefined>,

		/**
		 * <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
		 * Max length: 10000
		 */
		PreferredMaintenanceWindow: FormControl<string | null | undefined>,

		/**
		 * <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
		 * Max length: 10000
		 */
		PreferredBackupWindow: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServerRequestFormGroup() {
		return new FormGroup<UpdateServerRequestFormProperties>({
			DisableAutomatedBackup: new FormControl<boolean | null | undefined>(undefined),
			BackupRetentionCount: new FormControl<number | null | undefined>(undefined),
			ServerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PreferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000), Validators.pattern('^((Mon|Tue|Wed|Thu|Fri|Sat|Sun):)?([0-1][0-9]|2[0-3]):[0-5][0-9]$')]),
			PreferredBackupWindow: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000), Validators.pattern('^((Mon|Tue|Wed|Thu|Fri|Sat|Sun):)?([0-1][0-9]|2[0-3]):[0-5][0-9]$')]),
		});

	}

	export interface UpdateServerEngineAttributesResponse {
		Server?: Server;
	}
	export interface UpdateServerEngineAttributesResponseFormProperties {
	}
	export function CreateUpdateServerEngineAttributesResponseFormGroup() {
		return new FormGroup<UpdateServerEngineAttributesResponseFormProperties>({
		});

	}

	export interface UpdateServerEngineAttributesRequest {

		/** Required */
		ServerName: string;

		/** Required */
		AttributeName: string;
		AttributeValue?: string;
	}
	export interface UpdateServerEngineAttributesRequestFormProperties {

		/** Required */
		ServerName: FormControl<string | null | undefined>,

		/** Required */
		AttributeName: FormControl<string | null | undefined>,
		AttributeValue: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServerEngineAttributesRequestFormGroup() {
		return new FormGroup<UpdateServerEngineAttributesRequestFormProperties>({
			ServerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttributeValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p> Associates a new node with the server. For more information about how to disassociate a node, see <a>DisassociateNode</a>.</p> <p> On a Chef server: This command is an alternative to <code>knife bootstrap</code>.</p> <p> Example (Chef): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>CHEF_ORGANIZATION</i>,Value=default" "Name=<i>CHEF_NODE_PUBLIC_KEY</i>,Value=<i>public-key-pem</i>"</code> </p> <p> On a Puppet server, this command is an alternative to the <code>puppet cert sign</code> command that signs a Puppet node CSR. </p> <p> Example (Puppet): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>PUPPET_NODE_CSR</i>,Value=<i>csr-pem</i>"</code> </p> <p> A node can can only be associated with servers that are in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. The AssociateNode API call can be integrated into Auto Scaling configurations, AWS Cloudformation templates, or the user data of a server's instance. </p>
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode
		 * @return {AssociateNodeResponse} Success
		 */
		AssociateNode(requestBody: AssociateNodeRequest): Observable<AssociateNodeResponse> {
			return this.http.post<AssociateNodeResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Creates an application-level backup of a server. While the server is in the <code>BACKING_UP</code> state, the server cannot be changed, and no additional backup can be created. </p> <p> Backups can be created for servers in <code>RUNNING</code>, <code>HEALTHY</code>, and <code>UNHEALTHY</code> states. By default, you can create a maximum of 50 manual backups. </p> <p> This operation is asynchronous. </p> <p> A <code>LimitExceededException</code> is thrown when the maximum number of manual backups is reached. An <code>InvalidStateException</code> is thrown when the server is not in any of the following states: RUNNING, HEALTHY, or UNHEALTHY. A <code>ResourceNotFoundException</code> is thrown when the server is not found. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p>
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup
		 * @return {CreateBackupResponse} Success
		 */
		CreateBackup(requestBody: CreateBackupRequest): Observable<CreateBackupResponse> {
			return this.http.post<CreateBackupResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Creates and immedately starts a new server. The server is ready to use when it is in the <code>HEALTHY</code> state. By default, you can create a maximum of 10 servers. </p> <p> This operation is asynchronous. </p> <p> A <code>LimitExceededException</code> is thrown when you have created the maximum number of servers (10). A <code>ResourceAlreadyExistsException</code> is thrown when a server with the same name already exists in the account. A <code>ResourceNotFoundException</code> is thrown when you specify a backup ID that is not valid or is for a backup that does not exist. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p> <p> If you do not specify a security group by adding the <code>SecurityGroupIds</code> parameter, AWS OpsWorks creates a new security group. </p> <p> <i>Chef Automate:</i> The default security group opens the Chef server to the world on TCP port 443. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22. </p> <p> <i>Puppet Enterprise:</i> The default security group opens TCP ports 22, 443, 4433, 8140, 8142, 8143, and 8170. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22. </p> <p>By default, your server is accessible from any IP address. We recommend that you update your security group rules to allow access from known IP addresses and address ranges only. To edit security group rules, open Security Groups in the navigation pane of the EC2 management console. </p> <p>To specify your own domain for a server, and provide your own self-signed or CA-signed certificate and private key, specify values for <code>CustomDomain</code>, <code>CustomCertificate</code>, and <code>CustomPrivateKey</code>.</p>
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer
		 * @return {CreateServerResponse} Success
		 */
		CreateServer(requestBody: CreateServerRequest): Observable<CreateServerResponse> {
			return this.http.post<CreateServerResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Deletes a backup. You can delete both manual and automated backups. This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when a backup deletion is already in progress. A <code>ResourceNotFoundException</code> is thrown when the backup does not exist. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p>
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup
		 * @return {DeleteBackupResponse} Success
		 */
		DeleteBackup(requestBody: DeleteBackupRequest): Observable<DeleteBackupResponse> {
			return this.http.post<DeleteBackupResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Deletes the server and the underlying AWS CloudFormation stacks (including the server's EC2 instance). When you run this command, the server state is updated to <code>DELETING</code>. After the server is deleted, it is no longer returned by <code>DescribeServer</code> requests. If the AWS CloudFormation stack cannot be deleted, the server cannot be deleted. </p> <p> This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when a server deletion is already in progress. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p> <p> </p>
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer
		 * @return {DeleteServerResponse} Success
		 */
		DeleteServer(requestBody: DeleteServerRequest): Observable<DeleteServerResponse> {
			return this.http.post<DeleteServerResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Describes your OpsWorks-CM account attributes. </p> <p> This operation is synchronous. </p>
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes
		 * @return {DescribeAccountAttributesResponse} Success
		 */
		DescribeAccountAttributes(requestBody: DescribeAccountAttributesRequest): Observable<DescribeAccountAttributesResponse> {
			return this.http.post<DescribeAccountAttributesResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Describes backups. The results are ordered by time, with newest backups first. If you do not specify a BackupId or ServerName, the command returns all backups. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the backup does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeBackupsResponse} Success
		 */
		DescribeBackups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeBackupsRequest): Observable<DescribeBackupsResponse> {
			return this.http.post<DescribeBackupsResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Describes events for a specified server. Results are ordered by time, with newest events first. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeEventsResponse} Success
		 */
		DescribeEvents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeEventsRequest): Observable<DescribeEventsResponse> {
			return this.http.post<DescribeEventsResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Returns the current status of an existing association or disassociation request. </p> <p> A <code>ResourceNotFoundException</code> is thrown when no recent association or disassociation request with the specified token is found, or when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus
		 * @return {DescribeNodeAssociationStatusResponse} Success
		 */
		DescribeNodeAssociationStatus(requestBody: DescribeNodeAssociationStatusRequest): Observable<DescribeNodeAssociationStatusResponse> {
			return this.http.post<DescribeNodeAssociationStatusResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Lists all configuration management servers that are identified with your account. Only the stored results from Amazon DynamoDB are returned. AWS OpsWorks CM does not query other services. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeServersResponse} Success
		 */
		DescribeServers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeServersRequest): Observable<DescribeServersResponse> {
			return this.http.post<DescribeServersResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Disassociates a node from an AWS OpsWorks CM server, and removes the node from the server's managed nodes. After a node is disassociated, the node key pair is no longer valid for accessing the configuration manager's API. For more information about how to associate a node, see <a>AssociateNode</a>. </p> <p>A node can can only be disassociated from a server that is in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode
		 * @return {DisassociateNodeResponse} Success
		 */
		DisassociateNode(requestBody: DisassociateNodeRequest): Observable<DisassociateNodeResponse> {
			return this.http.post<DisassociateNodeResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Exports a specified server engine attribute as a base64-encoded string. For example, you can export user data that you can use in EC2 to associate nodes with a server. </p> <p> This operation is synchronous. </p> <p> A <code>ValidationException</code> is raised when parameters of the request are not valid. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. An <code>InvalidStateException</code> is thrown when the server is in any of the following states: CREATING, TERMINATED, FAILED or DELETING. </p>
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute
		 * @return {ExportServerEngineAttributeResponse} Success
		 */
		ExportServerEngineAttribute(requestBody: ExportServerEngineAttributeRequest): Observable<ExportServerEngineAttributeResponse> {
			return this.http.post<ExportServerEngineAttributeResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of tags that are applied to the specified AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise servers or backups.
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Restores a backup to a server that is in a <code>CONNECTION_LOST</code>, <code>HEALTHY</code>, <code>RUNNING</code>, <code>UNHEALTHY</code>, or <code>TERMINATED</code> state. When you run RestoreServer, the server's EC2 instance is deleted, and a new EC2 instance is configured. RestoreServer maintains the existing server endpoint, so configuration management of the server's client devices (nodes) should continue to work. </p> <p>Restoring from a backup is performed by creating a new EC2 instance. If restoration is successful, and the server is in a <code>HEALTHY</code> state, AWS OpsWorks CM switches traffic over to the new instance. After restoration is finished, the old EC2 instance is maintained in a <code>Running</code> or <code>Stopped</code> state, but is eventually terminated.</p> <p> This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when the server is not in a valid state. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer
		 * @return {RestoreServerResponse} Success
		 */
		RestoreServer(requestBody: RestoreServerRequest): Observable<RestoreServerResponse> {
			return this.http.post<RestoreServerResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Manually starts server maintenance. This command can be useful if an earlier maintenance attempt failed, and the underlying cause of maintenance failure has been resolved. The server is in an <code>UNDER_MAINTENANCE</code> state while maintenance is in progress. </p> <p> Maintenance can only be started on servers in <code>HEALTHY</code> and <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance
		 * @return {StartMaintenanceResponse} Success
		 */
		StartMaintenance(requestBody: StartMaintenanceRequest): Observable<StartMaintenanceResponse> {
			return this.http.post<StartMaintenanceResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies tags to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server, or to server backups.
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes specified tags from an AWS OpsWorks-CM server or backup.
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Updates settings for a server. </p> <p> This operation is synchronous. </p>
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer
		 * @return {UpdateServerResponse} Success
		 */
		UpdateServer(requestBody: UpdateServerRequest): Observable<UpdateServerResponse> {
			return this.http.post<UpdateServerResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Updates engine-specific attributes on a specified server. The server enters the <code>MODIFYING</code> state when this operation is in progress. Only one update can occur at a time. You can use this command to reset a Chef server's public key (<code>CHEF_PIVOTAL_KEY</code>) or a Puppet server's admin password (<code>PUPPET_ADMIN_PASSWORD</code>). </p> <p> This operation is asynchronous. </p> <p> This operation can only be called for servers in <code>HEALTHY</code> or <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is raised. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
		 * Post #X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes
		 * @return {UpdateServerEngineAttributesResponse} Success
		 */
		UpdateServerEngineAttributes(requestBody: UpdateServerEngineAttributesRequest): Observable<UpdateServerEngineAttributesResponse> {
			return this.http.post<UpdateServerEngineAttributesResponse>(this.baseUri + '#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateNodeX_Amz_Target { 'OpsWorksCM_V2016_11_01.AssociateNode' = 0 }

	export enum CreateBackupX_Amz_Target { 'OpsWorksCM_V2016_11_01.CreateBackup' = 0 }

	export enum CreateServerX_Amz_Target { 'OpsWorksCM_V2016_11_01.CreateServer' = 0 }

	export enum DeleteBackupX_Amz_Target { 'OpsWorksCM_V2016_11_01.DeleteBackup' = 0 }

	export enum DeleteServerX_Amz_Target { 'OpsWorksCM_V2016_11_01.DeleteServer' = 0 }

	export enum DescribeAccountAttributesX_Amz_Target { 'OpsWorksCM_V2016_11_01.DescribeAccountAttributes' = 0 }

	export enum DescribeBackupsX_Amz_Target { 'OpsWorksCM_V2016_11_01.DescribeBackups' = 0 }

	export enum DescribeEventsX_Amz_Target { 'OpsWorksCM_V2016_11_01.DescribeEvents' = 0 }

	export enum DescribeNodeAssociationStatusX_Amz_Target { 'OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus' = 0 }

	export enum DescribeServersX_Amz_Target { 'OpsWorksCM_V2016_11_01.DescribeServers' = 0 }

	export enum DisassociateNodeX_Amz_Target { 'OpsWorksCM_V2016_11_01.DisassociateNode' = 0 }

	export enum ExportServerEngineAttributeX_Amz_Target { 'OpsWorksCM_V2016_11_01.ExportServerEngineAttribute' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'OpsWorksCM_V2016_11_01.ListTagsForResource' = 0 }

	export enum RestoreServerX_Amz_Target { 'OpsWorksCM_V2016_11_01.RestoreServer' = 0 }

	export enum StartMaintenanceX_Amz_Target { 'OpsWorksCM_V2016_11_01.StartMaintenance' = 0 }

	export enum TagResourceX_Amz_Target { 'OpsWorksCM_V2016_11_01.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'OpsWorksCM_V2016_11_01.UntagResource' = 0 }

	export enum UpdateServerX_Amz_Target { 'OpsWorksCM_V2016_11_01.UpdateServer' = 0 }

	export enum UpdateServerEngineAttributesX_Amz_Target { 'OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes' = 0 }

}

