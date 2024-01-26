import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddStorageSystemResponse {

		/** Required */
		StorageSystemArn: string;
	}
	export interface AddStorageSystemResponseFormProperties {

		/** Required */
		StorageSystemArn: FormControl<string | null | undefined>,
	}
	export function CreateAddStorageSystemResponseFormGroup() {
		return new FormGroup<AddStorageSystemResponseFormProperties>({
			StorageSystemArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddStorageSystemRequest {

		/** Required */
		ServerConfiguration: DiscoveryServerConfiguration;

		/** Required */
		SystemType: DiscoverySystemType;

		/** Required */
		AgentArns: Array<string>;
		CloudWatchLogGroupArn?: string;
		Tags?: Array<TagListEntry>;
		Name?: string;

		/** Required */
		ClientToken: string;

		/** Required */
		Credentials: Credentials;
	}
	export interface AddStorageSystemRequestFormProperties {

		/** Required */
		SystemType: FormControl<DiscoverySystemType | null | undefined>,
		CloudWatchLogGroupArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateAddStorageSystemRequestFormGroup() {
		return new FormGroup<AddStorageSystemRequestFormProperties>({
			SystemType: new FormControl<DiscoverySystemType | null | undefined>(undefined, [Validators.required]),
			CloudWatchLogGroupArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The network settings that DataSync Discovery uses to connect with your on-premises storage system's management interface. */
	export interface DiscoveryServerConfiguration {

		/** Required */
		ServerHostname: string;
		ServerPort?: number | null;
	}

	/** The network settings that DataSync Discovery uses to connect with your on-premises storage system's management interface. */
	export interface DiscoveryServerConfigurationFormProperties {

		/** Required */
		ServerHostname: FormControl<string | null | undefined>,
		ServerPort: FormControl<number | null | undefined>,
	}
	export function CreateDiscoveryServerConfigurationFormGroup() {
		return new FormGroup<DiscoveryServerConfigurationFormProperties>({
			ServerHostname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerPort: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DiscoverySystemType { NetAppONTAP = 0 }


	/** A key-value pair representing a single tag that's been applied to an Amazon Web Services resource. */
	export interface TagListEntry {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** A key-value pair representing a single tag that's been applied to an Amazon Web Services resource. */
	export interface TagListEntryFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagListEntryFormGroup() {
		return new FormGroup<TagListEntryFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The credentials that provide DataSync Discovery read access to your on-premises storage system's management interface.</p> <p>DataSync Discovery stores these credentials in <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html">Secrets Manager</a>. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-configure-storage.html">Accessing your on-premises storage system</a>.</p> */
	export interface Credentials {

		/** Required */
		Username: string;

		/** Required */
		Password: string;
	}

	/** <p>The credentials that provide DataSync Discovery read access to your on-premises storage system's management interface.</p> <p>DataSync Discovery stores these credentials in <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html">Secrets Manager</a>. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-configure-storage.html">Accessing your on-premises storage system</a>.</p> */
	export interface CredentialsFormProperties {

		/** Required */
		Username: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateCredentialsFormGroup() {
		return new FormGroup<CredentialsFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface InternalException {
	}
	export interface InternalExceptionFormProperties {
	}
	export function CreateInternalExceptionFormGroup() {
		return new FormGroup<InternalExceptionFormProperties>({
		});

	}

	export interface CancelTaskExecutionResponse {
	}
	export interface CancelTaskExecutionResponseFormProperties {
	}
	export function CreateCancelTaskExecutionResponseFormGroup() {
		return new FormGroup<CancelTaskExecutionResponseFormProperties>({
		});

	}


	/** CancelTaskExecutionRequest */
	export interface CancelTaskExecutionRequest {

		/** Required */
		TaskExecutionArn: string;
	}

	/** CancelTaskExecutionRequest */
	export interface CancelTaskExecutionRequestFormProperties {

		/** Required */
		TaskExecutionArn: FormControl<string | null | undefined>,
	}
	export function CreateCancelTaskExecutionRequestFormGroup() {
		return new FormGroup<CancelTaskExecutionRequestFormProperties>({
			TaskExecutionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** CreateAgentResponse */
	export interface CreateAgentResponse {
		AgentArn?: string;
	}

	/** CreateAgentResponse */
	export interface CreateAgentResponseFormProperties {
		AgentArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAgentResponseFormGroup() {
		return new FormGroup<CreateAgentResponseFormProperties>({
			AgentArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CreateAgentRequest */
	export interface CreateAgentRequest {

		/** Required */
		ActivationKey: string;
		AgentName?: string;
		Tags?: Array<TagListEntry>;
		VpcEndpointId?: string;
		SubnetArns?: Array<string>;
		SecurityGroupArns?: Array<string>;
	}

	/** CreateAgentRequest */
	export interface CreateAgentRequestFormProperties {

		/** Required */
		ActivationKey: FormControl<string | null | undefined>,
		AgentName: FormControl<string | null | undefined>,
		VpcEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAgentRequestFormGroup() {
		return new FormGroup<CreateAgentRequestFormProperties>({
			ActivationKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AgentName: new FormControl<string | null | undefined>(undefined),
			VpcEndpointId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLocationAzureBlobResponse {
		LocationArn?: string;
	}
	export interface CreateLocationAzureBlobResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationAzureBlobResponseFormGroup() {
		return new FormGroup<CreateLocationAzureBlobResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLocationAzureBlobRequest {

		/** Required */
		ContainerUrl: string;

		/** Required */
		AuthenticationType: AzureBlobAuthenticationType;
		SasConfiguration?: AzureBlobSasConfiguration;
		BlobType?: AzureBlobType;
		AccessTier?: AzureAccessTier;
		Subdirectory?: string;

		/** Required */
		AgentArns: Array<string>;
		Tags?: Array<TagListEntry>;
	}
	export interface CreateLocationAzureBlobRequestFormProperties {

		/** Required */
		ContainerUrl: FormControl<string | null | undefined>,

		/** Required */
		AuthenticationType: FormControl<AzureBlobAuthenticationType | null | undefined>,
		BlobType: FormControl<AzureBlobType | null | undefined>,
		AccessTier: FormControl<AzureAccessTier | null | undefined>,
		Subdirectory: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationAzureBlobRequestFormGroup() {
		return new FormGroup<CreateLocationAzureBlobRequestFormProperties>({
			ContainerUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthenticationType: new FormControl<AzureBlobAuthenticationType | null | undefined>(undefined, [Validators.required]),
			BlobType: new FormControl<AzureBlobType | null | undefined>(undefined),
			AccessTier: new FormControl<AzureAccessTier | null | undefined>(undefined),
			Subdirectory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AzureBlobAuthenticationType { SAS = 0 }


	/** <p>The shared access signature (SAS) configuration that allows DataSync to access your Microsoft Azure Blob Storage.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-sas-tokens">SAS tokens</a> for accessing your Azure Blob Storage.</p> */
	export interface AzureBlobSasConfiguration {

		/** Required */
		Token: string;
	}

	/** <p>The shared access signature (SAS) configuration that allows DataSync to access your Microsoft Azure Blob Storage.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-sas-tokens">SAS tokens</a> for accessing your Azure Blob Storage.</p> */
	export interface AzureBlobSasConfigurationFormProperties {

		/** Required */
		Token: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobSasConfigurationFormGroup() {
		return new FormGroup<AzureBlobSasConfigurationFormProperties>({
			Token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AzureBlobType { BLOCK = 0 }

	export enum AzureAccessTier { HOT = 0, COOL = 1, ARCHIVE = 2 }


	/** CreateLocationEfs */
	export interface CreateLocationEfsResponse {
		LocationArn?: string;
	}

	/** CreateLocationEfs */
	export interface CreateLocationEfsResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationEfsResponseFormGroup() {
		return new FormGroup<CreateLocationEfsResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CreateLocationEfsRequest */
	export interface CreateLocationEfsRequest {
		Subdirectory?: string;

		/** Required */
		EfsFilesystemArn: string;

		/** Required */
		Ec2Config: Ec2Config;
		Tags?: Array<TagListEntry>;
		AccessPointArn?: string;
		FileSystemAccessRoleArn?: string;
		InTransitEncryption?: EfsInTransitEncryption;
	}

	/** CreateLocationEfsRequest */
	export interface CreateLocationEfsRequestFormProperties {
		Subdirectory: FormControl<string | null | undefined>,

		/** Required */
		EfsFilesystemArn: FormControl<string | null | undefined>,
		AccessPointArn: FormControl<string | null | undefined>,
		FileSystemAccessRoleArn: FormControl<string | null | undefined>,
		InTransitEncryption: FormControl<EfsInTransitEncryption | null | undefined>,
	}
	export function CreateCreateLocationEfsRequestFormGroup() {
		return new FormGroup<CreateLocationEfsRequestFormProperties>({
			Subdirectory: new FormControl<string | null | undefined>(undefined),
			EfsFilesystemArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccessPointArn: new FormControl<string | null | undefined>(undefined),
			FileSystemAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			InTransitEncryption: new FormControl<EfsInTransitEncryption | null | undefined>(undefined),
		});

	}


	/** The subnet and security groups that DataSync uses to access your Amazon EFS file system. */
	export interface Ec2Config {

		/** Required */
		SubnetArn: string;

		/** Required */
		SecurityGroupArns: Array<string>;
	}

	/** The subnet and security groups that DataSync uses to access your Amazon EFS file system. */
	export interface Ec2ConfigFormProperties {

		/** Required */
		SubnetArn: FormControl<string | null | undefined>,
	}
	export function CreateEc2ConfigFormGroup() {
		return new FormGroup<Ec2ConfigFormProperties>({
			SubnetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EfsInTransitEncryption { NONE = 0, TLS1_2 = 1 }

	export interface CreateLocationFsxLustreResponse {
		LocationArn?: string;
	}
	export interface CreateLocationFsxLustreResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationFsxLustreResponseFormGroup() {
		return new FormGroup<CreateLocationFsxLustreResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLocationFsxLustreRequest {

		/** Required */
		FsxFilesystemArn: string;

		/** Required */
		SecurityGroupArns: Array<string>;
		Subdirectory?: string;
		Tags?: Array<TagListEntry>;
	}
	export interface CreateLocationFsxLustreRequestFormProperties {

		/** Required */
		FsxFilesystemArn: FormControl<string | null | undefined>,
		Subdirectory: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationFsxLustreRequestFormGroup() {
		return new FormGroup<CreateLocationFsxLustreRequestFormProperties>({
			FsxFilesystemArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Subdirectory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLocationFsxOntapResponse {
		LocationArn?: string;
	}
	export interface CreateLocationFsxOntapResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationFsxOntapResponseFormGroup() {
		return new FormGroup<CreateLocationFsxOntapResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLocationFsxOntapRequest {

		/**
		 * Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.
		 * Required
		 */
		Protocol: FsxProtocol;

		/** Required */
		SecurityGroupArns: Array<string>;

		/** Required */
		StorageVirtualMachineArn: string;
		Subdirectory?: string;
		Tags?: Array<TagListEntry>;
	}
	export interface CreateLocationFsxOntapRequestFormProperties {

		/** Required */
		StorageVirtualMachineArn: FormControl<string | null | undefined>,
		Subdirectory: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationFsxOntapRequestFormGroup() {
		return new FormGroup<CreateLocationFsxOntapRequestFormProperties>({
			StorageVirtualMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Subdirectory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system. */
	export interface FsxProtocol {
		NFS?: FsxProtocolNfs;
		SMB?: FsxProtocolSmb;
	}

	/** Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system. */
	export interface FsxProtocolFormProperties {
	}
	export function CreateFsxProtocolFormGroup() {
		return new FormGroup<FsxProtocolFormProperties>({
		});

	}


	/** Specifies the Network File System (NFS) protocol configuration that DataSync uses to access your Amazon FSx for OpenZFS or Amazon FSx for NetApp ONTAP file system. */
	export interface FsxProtocolNfs {

		/** Specifies how DataSync can access a location using the NFS protocol. */
		MountOptions?: NfsMountOptions;
	}

	/** Specifies the Network File System (NFS) protocol configuration that DataSync uses to access your Amazon FSx for OpenZFS or Amazon FSx for NetApp ONTAP file system. */
	export interface FsxProtocolNfsFormProperties {
	}
	export function CreateFsxProtocolNfsFormGroup() {
		return new FormGroup<FsxProtocolNfsFormProperties>({
		});

	}


	/** Specifies how DataSync can access a location using the NFS protocol. */
	export interface NfsMountOptions {
		Version?: NfsVersion;
	}

	/** Specifies how DataSync can access a location using the NFS protocol. */
	export interface NfsMountOptionsFormProperties {
		Version: FormControl<NfsVersion | null | undefined>,
	}
	export function CreateNfsMountOptionsFormGroup() {
		return new FormGroup<NfsMountOptionsFormProperties>({
			Version: new FormControl<NfsVersion | null | undefined>(undefined),
		});

	}

	export enum NfsVersion { AUTOMATIC = 0, NFS3 = 1, NFS4_0 = 2, NFS4_1 = 3 }


	/** Specifies the Server Message Block (SMB) protocol configuration that DataSync uses to access your Amazon FSx for NetApp ONTAP file system. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html#create-ontap-location-access">Accessing FSx for ONTAP file systems</a>. */
	export interface FsxProtocolSmb {
		Domain?: string;

		/** Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server. */
		MountOptions?: SmbMountOptions;

		/** Required */
		Password: string;

		/** Required */
		User: string;
	}

	/** Specifies the Server Message Block (SMB) protocol configuration that DataSync uses to access your Amazon FSx for NetApp ONTAP file system. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html#create-ontap-location-access">Accessing FSx for ONTAP file systems</a>. */
	export interface FsxProtocolSmbFormProperties {
		Domain: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,

		/** Required */
		User: FormControl<string | null | undefined>,
	}
	export function CreateFsxProtocolSmbFormGroup() {
		return new FormGroup<FsxProtocolSmbFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			User: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server. */
	export interface SmbMountOptions {
		Version?: SmbVersion;
	}

	/** Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server. */
	export interface SmbMountOptionsFormProperties {
		Version: FormControl<SmbVersion | null | undefined>,
	}
	export function CreateSmbMountOptionsFormGroup() {
		return new FormGroup<SmbMountOptionsFormProperties>({
			Version: new FormControl<SmbVersion | null | undefined>(undefined),
		});

	}

	export enum SmbVersion { AUTOMATIC = 0, SMB2 = 1, SMB3 = 2, SMB1 = 3, SMB2_0 = 4 }

	export interface CreateLocationFsxOpenZfsResponse {
		LocationArn?: string;
	}
	export interface CreateLocationFsxOpenZfsResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationFsxOpenZfsResponseFormGroup() {
		return new FormGroup<CreateLocationFsxOpenZfsResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLocationFsxOpenZfsRequest {

		/** Required */
		FsxFilesystemArn: string;

		/** Required */
		Protocol: FsxProtocol;

		/** Required */
		SecurityGroupArns: Array<string>;
		Subdirectory?: string;
		Tags?: Array<TagListEntry>;
	}
	export interface CreateLocationFsxOpenZfsRequestFormProperties {

		/** Required */
		FsxFilesystemArn: FormControl<string | null | undefined>,
		Subdirectory: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationFsxOpenZfsRequestFormGroup() {
		return new FormGroup<CreateLocationFsxOpenZfsRequestFormProperties>({
			FsxFilesystemArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Subdirectory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLocationFsxWindowsResponse {
		LocationArn?: string;
	}
	export interface CreateLocationFsxWindowsResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationFsxWindowsResponseFormGroup() {
		return new FormGroup<CreateLocationFsxWindowsResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLocationFsxWindowsRequest {
		Subdirectory?: string;

		/** Required */
		FsxFilesystemArn: string;

		/** Required */
		SecurityGroupArns: Array<string>;
		Tags?: Array<TagListEntry>;

		/** Required */
		User: string;
		Domain?: string;

		/** Required */
		Password: string;
	}
	export interface CreateLocationFsxWindowsRequestFormProperties {
		Subdirectory: FormControl<string | null | undefined>,

		/** Required */
		FsxFilesystemArn: FormControl<string | null | undefined>,

		/** Required */
		User: FormControl<string | null | undefined>,
		Domain: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationFsxWindowsRequestFormGroup() {
		return new FormGroup<CreateLocationFsxWindowsRequestFormProperties>({
			Subdirectory: new FormControl<string | null | undefined>(undefined),
			FsxFilesystemArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			User: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Domain: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLocationHdfsResponse {
		LocationArn?: string;
	}
	export interface CreateLocationHdfsResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationHdfsResponseFormGroup() {
		return new FormGroup<CreateLocationHdfsResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLocationHdfsRequest {
		Subdirectory?: string;

		/** Required */
		NameNodes: Array<HdfsNameNode>;
		BlockSize?: number | null;
		ReplicationFactor?: number | null;
		KmsKeyProviderUri?: string;
		QopConfiguration?: QopConfiguration;

		/** Required */
		AuthenticationType: HdfsAuthenticationType;
		SimpleUser?: string;
		KerberosPrincipal?: string;
		KerberosKeytab?: string;
		KerberosKrb5Conf?: string;

		/** Required */
		AgentArns: Array<string>;
		Tags?: Array<TagListEntry>;
	}
	export interface CreateLocationHdfsRequestFormProperties {
		Subdirectory: FormControl<string | null | undefined>,
		BlockSize: FormControl<number | null | undefined>,
		ReplicationFactor: FormControl<number | null | undefined>,
		KmsKeyProviderUri: FormControl<string | null | undefined>,

		/** Required */
		AuthenticationType: FormControl<HdfsAuthenticationType | null | undefined>,
		SimpleUser: FormControl<string | null | undefined>,
		KerberosPrincipal: FormControl<string | null | undefined>,
		KerberosKeytab: FormControl<string | null | undefined>,
		KerberosKrb5Conf: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationHdfsRequestFormGroup() {
		return new FormGroup<CreateLocationHdfsRequestFormProperties>({
			Subdirectory: new FormControl<string | null | undefined>(undefined),
			BlockSize: new FormControl<number | null | undefined>(undefined),
			ReplicationFactor: new FormControl<number | null | undefined>(undefined),
			KmsKeyProviderUri: new FormControl<string | null | undefined>(undefined),
			AuthenticationType: new FormControl<HdfsAuthenticationType | null | undefined>(undefined, [Validators.required]),
			SimpleUser: new FormControl<string | null | undefined>(undefined),
			KerberosPrincipal: new FormControl<string | null | undefined>(undefined),
			KerberosKeytab: new FormControl<string | null | undefined>(undefined),
			KerberosKrb5Conf: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The NameNode of the Hadoop Distributed File System (HDFS). The NameNode manages the file system's namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes. */
	export interface HdfsNameNode {

		/** Required */
		Hostname: string;

		/** Required */
		Port: number;
	}

	/** The NameNode of the Hadoop Distributed File System (HDFS). The NameNode manages the file system's namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes. */
	export interface HdfsNameNodeFormProperties {

		/** Required */
		Hostname: FormControl<string | null | undefined>,

		/** Required */
		Port: FormControl<number | null | undefined>,
	}
	export function CreateHdfsNameNodeFormGroup() {
		return new FormGroup<HdfsNameNodeFormProperties>({
			Hostname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer privacy settings configured on the Hadoop Distributed File System (HDFS) cluster. */
	export interface QopConfiguration {
		RpcProtection?: HdfsRpcProtection;
		DataTransferProtection?: HdfsRpcProtection;
	}

	/** The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer privacy settings configured on the Hadoop Distributed File System (HDFS) cluster. */
	export interface QopConfigurationFormProperties {
		RpcProtection: FormControl<HdfsRpcProtection | null | undefined>,
		DataTransferProtection: FormControl<HdfsRpcProtection | null | undefined>,
	}
	export function CreateQopConfigurationFormGroup() {
		return new FormGroup<QopConfigurationFormProperties>({
			RpcProtection: new FormControl<HdfsRpcProtection | null | undefined>(undefined),
			DataTransferProtection: new FormControl<HdfsRpcProtection | null | undefined>(undefined),
		});

	}

	export enum HdfsRpcProtection { DISABLED = 0, AUTHENTICATION = 1, INTEGRITY = 2, PRIVACY = 3 }

	export enum HdfsAuthenticationType { SIMPLE = 0, KERBEROS = 1 }


	/** CreateLocationNfsResponse */
	export interface CreateLocationNfsResponse {
		LocationArn?: string;
	}

	/** CreateLocationNfsResponse */
	export interface CreateLocationNfsResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationNfsResponseFormGroup() {
		return new FormGroup<CreateLocationNfsResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CreateLocationNfsRequest */
	export interface CreateLocationNfsRequest {

		/** Required */
		Subdirectory: string;

		/** Required */
		ServerHostname: string;

		/** Required */
		OnPremConfig: OnPremConfig;
		MountOptions?: NfsMountOptions;
		Tags?: Array<TagListEntry>;
	}

	/** CreateLocationNfsRequest */
	export interface CreateLocationNfsRequestFormProperties {

		/** Required */
		Subdirectory: FormControl<string | null | undefined>,

		/** Required */
		ServerHostname: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationNfsRequestFormGroup() {
		return new FormGroup<CreateLocationNfsRequestFormProperties>({
			Subdirectory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerHostname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The DataSync agents that are connecting to a Network File System (NFS) location. */
	export interface OnPremConfig {

		/** Required */
		AgentArns: Array<string>;
	}

	/** The DataSync agents that are connecting to a Network File System (NFS) location. */
	export interface OnPremConfigFormProperties {
	}
	export function CreateOnPremConfigFormGroup() {
		return new FormGroup<OnPremConfigFormProperties>({
		});

	}


	/** CreateLocationObjectStorageResponse */
	export interface CreateLocationObjectStorageResponse {
		LocationArn?: string;
	}

	/** CreateLocationObjectStorageResponse */
	export interface CreateLocationObjectStorageResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationObjectStorageResponseFormGroup() {
		return new FormGroup<CreateLocationObjectStorageResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CreateLocationObjectStorageRequest */
	export interface CreateLocationObjectStorageRequest {

		/** Required */
		ServerHostname: string;
		ServerPort?: number | null;
		ServerProtocol?: ObjectStorageServerProtocol;
		Subdirectory?: string;

		/** Required */
		BucketName: string;
		AccessKey?: string;
		SecretKey?: string;

		/** Required */
		AgentArns: Array<string>;
		Tags?: Array<TagListEntry>;
		ServerCertificate?: string;
	}

	/** CreateLocationObjectStorageRequest */
	export interface CreateLocationObjectStorageRequestFormProperties {

		/** Required */
		ServerHostname: FormControl<string | null | undefined>,
		ServerPort: FormControl<number | null | undefined>,
		ServerProtocol: FormControl<ObjectStorageServerProtocol | null | undefined>,
		Subdirectory: FormControl<string | null | undefined>,

		/** Required */
		BucketName: FormControl<string | null | undefined>,
		AccessKey: FormControl<string | null | undefined>,
		SecretKey: FormControl<string | null | undefined>,
		ServerCertificate: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationObjectStorageRequestFormGroup() {
		return new FormGroup<CreateLocationObjectStorageRequestFormProperties>({
			ServerHostname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerPort: new FormControl<number | null | undefined>(undefined),
			ServerProtocol: new FormControl<ObjectStorageServerProtocol | null | undefined>(undefined),
			Subdirectory: new FormControl<string | null | undefined>(undefined),
			BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccessKey: new FormControl<string | null | undefined>(undefined),
			SecretKey: new FormControl<string | null | undefined>(undefined),
			ServerCertificate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ObjectStorageServerProtocol { HTTPS = 0, HTTP = 1 }


	/** CreateLocationS3Response */
	export interface CreateLocationS3Response {
		LocationArn?: string;
	}

	/** CreateLocationS3Response */
	export interface CreateLocationS3ResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationS3ResponseFormGroup() {
		return new FormGroup<CreateLocationS3ResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CreateLocationS3Request */
	export interface CreateLocationS3Request {
		Subdirectory?: string;

		/** Required */
		S3BucketArn: string;
		S3StorageClass?: S3StorageClass;

		/**
		 * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>DataSync User Guide</i>.</p>
		 * Required
		 */
		S3Config: S3Config;
		AgentArns?: Array<string>;
		Tags?: Array<TagListEntry>;
	}

	/** CreateLocationS3Request */
	export interface CreateLocationS3RequestFormProperties {
		Subdirectory: FormControl<string | null | undefined>,

		/** Required */
		S3BucketArn: FormControl<string | null | undefined>,
		S3StorageClass: FormControl<S3StorageClass | null | undefined>,
	}
	export function CreateCreateLocationS3RequestFormGroup() {
		return new FormGroup<CreateLocationS3RequestFormProperties>({
			Subdirectory: new FormControl<string | null | undefined>(undefined),
			S3BucketArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3StorageClass: new FormControl<S3StorageClass | null | undefined>(undefined),
		});

	}

	export enum S3StorageClass { STANDARD = 0, STANDARD_IA = 1, ONEZONE_IA = 2, INTELLIGENT_TIERING = 3, GLACIER = 4, DEEP_ARCHIVE = 5, OUTPOSTS = 6, GLACIER_INSTANT_RETRIEVAL = 7 }


	/** <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>DataSync User Guide</i>.</p> */
	export interface S3Config {

		/** Required */
		BucketAccessRoleArn: string;
	}

	/** <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>DataSync User Guide</i>.</p> */
	export interface S3ConfigFormProperties {

		/** Required */
		BucketAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateS3ConfigFormGroup() {
		return new FormGroup<S3ConfigFormProperties>({
			BucketAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** CreateLocationSmbResponse */
	export interface CreateLocationSmbResponse {
		LocationArn?: string;
	}

	/** CreateLocationSmbResponse */
	export interface CreateLocationSmbResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationSmbResponseFormGroup() {
		return new FormGroup<CreateLocationSmbResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CreateLocationSmbRequest */
	export interface CreateLocationSmbRequest {

		/** Required */
		Subdirectory: string;

		/** Required */
		ServerHostname: string;

		/** Required */
		User: string;
		Domain?: string;

		/** Required */
		Password: string;

		/** Required */
		AgentArns: Array<string>;
		MountOptions?: SmbMountOptions;
		Tags?: Array<TagListEntry>;
	}

	/** CreateLocationSmbRequest */
	export interface CreateLocationSmbRequestFormProperties {

		/** Required */
		Subdirectory: FormControl<string | null | undefined>,

		/** Required */
		ServerHostname: FormControl<string | null | undefined>,

		/** Required */
		User: FormControl<string | null | undefined>,
		Domain: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationSmbRequestFormGroup() {
		return new FormGroup<CreateLocationSmbRequestFormProperties>({
			Subdirectory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerHostname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			User: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Domain: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** CreateTaskResponse */
	export interface CreateTaskResponse {
		TaskArn?: string;
	}

	/** CreateTaskResponse */
	export interface CreateTaskResponseFormProperties {
		TaskArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateTaskResponseFormGroup() {
		return new FormGroup<CreateTaskResponseFormProperties>({
			TaskArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CreateTaskRequest */
	export interface CreateTaskRequest {

		/** Required */
		SourceLocationArn: string;

		/** Required */
		DestinationLocationArn: string;
		CloudWatchLogGroupArn?: string;
		Name?: string;
		Options?: Options;
		Excludes?: Array<FilterRule>;
		Schedule?: TaskSchedule;
		Tags?: Array<TagListEntry>;
		Includes?: Array<FilterRule>;
	}

	/** CreateTaskRequest */
	export interface CreateTaskRequestFormProperties {

		/** Required */
		SourceLocationArn: FormControl<string | null | undefined>,

		/** Required */
		DestinationLocationArn: FormControl<string | null | undefined>,
		CloudWatchLogGroupArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateTaskRequestFormGroup() {
		return new FormGroup<CreateTaskRequestFormProperties>({
			SourceLocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationLocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CloudWatchLogGroupArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p> */
	export interface Options {
		VerifyMode?: VerifyMode;
		OverwriteMode?: OverwriteMode;
		Atime?: Atime;
		Mtime?: Mtime;
		Uid?: Uid;
		Gid?: Uid;
		PreserveDeletedFiles?: PreserveDeletedFiles;
		PreserveDevices?: Mtime;
		PosixPermissions?: Mtime;
		BytesPerSecond?: number | null;
		TaskQueueing?: TaskQueueing;
		LogLevel?: LogLevel;
		TransferMode?: TransferMode;
		SecurityDescriptorCopyFlags?: SmbSecurityDescriptorCopyFlags;
		ObjectTags?: ObjectTags;
	}

	/** <p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p> */
	export interface OptionsFormProperties {
		VerifyMode: FormControl<VerifyMode | null | undefined>,
		OverwriteMode: FormControl<OverwriteMode | null | undefined>,
		Atime: FormControl<Atime | null | undefined>,
		Mtime: FormControl<Mtime | null | undefined>,
		Uid: FormControl<Uid | null | undefined>,
		Gid: FormControl<Uid | null | undefined>,
		PreserveDeletedFiles: FormControl<PreserveDeletedFiles | null | undefined>,
		PreserveDevices: FormControl<Mtime | null | undefined>,
		PosixPermissions: FormControl<Mtime | null | undefined>,
		BytesPerSecond: FormControl<number | null | undefined>,
		TaskQueueing: FormControl<TaskQueueing | null | undefined>,
		LogLevel: FormControl<LogLevel | null | undefined>,
		TransferMode: FormControl<TransferMode | null | undefined>,
		SecurityDescriptorCopyFlags: FormControl<SmbSecurityDescriptorCopyFlags | null | undefined>,
		ObjectTags: FormControl<ObjectTags | null | undefined>,
	}
	export function CreateOptionsFormGroup() {
		return new FormGroup<OptionsFormProperties>({
			VerifyMode: new FormControl<VerifyMode | null | undefined>(undefined),
			OverwriteMode: new FormControl<OverwriteMode | null | undefined>(undefined),
			Atime: new FormControl<Atime | null | undefined>(undefined),
			Mtime: new FormControl<Mtime | null | undefined>(undefined),
			Uid: new FormControl<Uid | null | undefined>(undefined),
			Gid: new FormControl<Uid | null | undefined>(undefined),
			PreserveDeletedFiles: new FormControl<PreserveDeletedFiles | null | undefined>(undefined),
			PreserveDevices: new FormControl<Mtime | null | undefined>(undefined),
			PosixPermissions: new FormControl<Mtime | null | undefined>(undefined),
			BytesPerSecond: new FormControl<number | null | undefined>(undefined),
			TaskQueueing: new FormControl<TaskQueueing | null | undefined>(undefined),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
			TransferMode: new FormControl<TransferMode | null | undefined>(undefined),
			SecurityDescriptorCopyFlags: new FormControl<SmbSecurityDescriptorCopyFlags | null | undefined>(undefined),
			ObjectTags: new FormControl<ObjectTags | null | undefined>(undefined),
		});

	}

	export enum VerifyMode { POINT_IN_TIME_CONSISTENT = 0, ONLY_FILES_TRANSFERRED = 1, NONE = 2 }

	export enum OverwriteMode { ALWAYS = 0, NEVER = 1 }

	export enum Atime { NONE = 0, BEST_EFFORT = 1 }

	export enum Mtime { NONE = 0, PRESERVE = 1 }

	export enum Uid { NONE = 0, INT_VALUE = 1, NAME = 2, BOTH = 3 }

	export enum PreserveDeletedFiles { PRESERVE = 0, REMOVE = 1 }

	export enum TaskQueueing { ENABLED = 0, DISABLED = 1 }

	export enum LogLevel { OFF = 0, BASIC = 1, TRANSFER = 2 }

	export enum TransferMode { CHANGED = 0, ALL = 1 }

	export enum SmbSecurityDescriptorCopyFlags { NONE = 0, OWNER_DACL = 1, OWNER_DACL_SACL = 2 }

	export enum ObjectTags { PRESERVE = 0, NONE = 1 }


	/** Specifies which files, folders, and objects to include or exclude when transferring files from source to destination. */
	export interface FilterRule {
		FilterType?: FilterType;
		Value?: string;
	}

	/** Specifies which files, folders, and objects to include or exclude when transferring files from source to destination. */
	export interface FilterRuleFormProperties {
		FilterType: FormControl<FilterType | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateFilterRuleFormGroup() {
		return new FormGroup<FilterRuleFormProperties>({
			FilterType: new FormControl<FilterType | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FilterType { SIMPLE_PATTERN = 0 }


	/** Specifies the schedule you want your task to use for repeated executions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>. */
	export interface TaskSchedule {

		/** Required */
		ScheduleExpression: string;
	}

	/** Specifies the schedule you want your task to use for repeated executions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule Expressions for Rules</a>. */
	export interface TaskScheduleFormProperties {

		/** Required */
		ScheduleExpression: FormControl<string | null | undefined>,
	}
	export function CreateTaskScheduleFormGroup() {
		return new FormGroup<TaskScheduleFormProperties>({
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAgentResponse {
	}
	export interface DeleteAgentResponseFormProperties {
	}
	export function CreateDeleteAgentResponseFormGroup() {
		return new FormGroup<DeleteAgentResponseFormProperties>({
		});

	}


	/** DeleteAgentRequest */
	export interface DeleteAgentRequest {

		/** Required */
		AgentArn: string;
	}

	/** DeleteAgentRequest */
	export interface DeleteAgentRequestFormProperties {

		/** Required */
		AgentArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAgentRequestFormGroup() {
		return new FormGroup<DeleteAgentRequestFormProperties>({
			AgentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLocationResponse {
	}
	export interface DeleteLocationResponseFormProperties {
	}
	export function CreateDeleteLocationResponseFormGroup() {
		return new FormGroup<DeleteLocationResponseFormProperties>({
		});

	}


	/** DeleteLocation */
	export interface DeleteLocationRequest {

		/** Required */
		LocationArn: string;
	}

	/** DeleteLocation */
	export interface DeleteLocationRequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLocationRequestFormGroup() {
		return new FormGroup<DeleteLocationRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTaskResponse {
	}
	export interface DeleteTaskResponseFormProperties {
	}
	export function CreateDeleteTaskResponseFormGroup() {
		return new FormGroup<DeleteTaskResponseFormProperties>({
		});

	}


	/** DeleteTask */
	export interface DeleteTaskRequest {

		/** Required */
		TaskArn: string;
	}

	/** DeleteTask */
	export interface DeleteTaskRequestFormProperties {

		/** Required */
		TaskArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTaskRequestFormGroup() {
		return new FormGroup<DeleteTaskRequestFormProperties>({
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** DescribeAgentResponse */
	export interface DescribeAgentResponse {
		AgentArn?: string;
		Name?: string;
		Status?: AgentStatus;
		LastConnectionTime?: Date;
		CreationTime?: Date;
		EndpointType?: EndpointType;
		PrivateLinkConfig?: PrivateLinkConfig;
	}

	/** DescribeAgentResponse */
	export interface DescribeAgentResponseFormProperties {
		AgentArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<AgentStatus | null | undefined>,
		LastConnectionTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		EndpointType: FormControl<EndpointType | null | undefined>,
	}
	export function CreateDescribeAgentResponseFormGroup() {
		return new FormGroup<DescribeAgentResponseFormProperties>({
			AgentArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AgentStatus | null | undefined>(undefined),
			LastConnectionTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			EndpointType: new FormControl<EndpointType | null | undefined>(undefined),
		});

	}

	export enum AgentStatus { ONLINE = 0, OFFLINE = 1 }

	export enum EndpointType { PUBLIC = 0, PRIVATE_LINK = 1, FIPS = 2 }


	/** Specifies how your DataSync agent connects to Amazon Web Services using a virtual private cloud (VPC) service endpoint. An agent that uses a VPC endpoint isn't accessible over the public internet. */
	export interface PrivateLinkConfig {
		VpcEndpointId?: string;
		PrivateLinkEndpoint?: string;
		SubnetArns?: Array<string>;
		SecurityGroupArns?: Array<string>;
	}

	/** Specifies how your DataSync agent connects to Amazon Web Services using a virtual private cloud (VPC) service endpoint. An agent that uses a VPC endpoint isn't accessible over the public internet. */
	export interface PrivateLinkConfigFormProperties {
		VpcEndpointId: FormControl<string | null | undefined>,
		PrivateLinkEndpoint: FormControl<string | null | undefined>,
	}
	export function CreatePrivateLinkConfigFormGroup() {
		return new FormGroup<PrivateLinkConfigFormProperties>({
			VpcEndpointId: new FormControl<string | null | undefined>(undefined),
			PrivateLinkEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DescribeAgent */
	export interface DescribeAgentRequest {

		/** Required */
		AgentArn: string;
	}

	/** DescribeAgent */
	export interface DescribeAgentRequestFormProperties {

		/** Required */
		AgentArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAgentRequestFormGroup() {
		return new FormGroup<DescribeAgentRequestFormProperties>({
			AgentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDiscoveryJobResponse {
		StorageSystemArn?: string;
		DiscoveryJobArn?: string;
		CollectionDurationMinutes?: number | null;
		Status?: DiscoveryJobStatus;
		JobStartTime?: Date;
		JobEndTime?: Date;
	}
	export interface DescribeDiscoveryJobResponseFormProperties {
		StorageSystemArn: FormControl<string | null | undefined>,
		DiscoveryJobArn: FormControl<string | null | undefined>,
		CollectionDurationMinutes: FormControl<number | null | undefined>,
		Status: FormControl<DiscoveryJobStatus | null | undefined>,
		JobStartTime: FormControl<Date | null | undefined>,
		JobEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeDiscoveryJobResponseFormGroup() {
		return new FormGroup<DescribeDiscoveryJobResponseFormProperties>({
			StorageSystemArn: new FormControl<string | null | undefined>(undefined),
			DiscoveryJobArn: new FormControl<string | null | undefined>(undefined),
			CollectionDurationMinutes: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<DiscoveryJobStatus | null | undefined>(undefined),
			JobStartTime: new FormControl<Date | null | undefined>(undefined),
			JobEndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DiscoveryJobStatus { RUNNING = 0, WARNING = 1, TERMINATED = 2, FAILED = 3, STOPPED = 4, COMPLETED = 5, COMPLETED_WITH_ISSUES = 6 }

	export interface DescribeDiscoveryJobRequest {

		/** Required */
		DiscoveryJobArn: string;
	}
	export interface DescribeDiscoveryJobRequestFormProperties {

		/** Required */
		DiscoveryJobArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDiscoveryJobRequestFormGroup() {
		return new FormGroup<DescribeDiscoveryJobRequestFormProperties>({
			DiscoveryJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeLocationAzureBlobResponse {
		LocationArn?: string;
		LocationUri?: string;
		AuthenticationType?: AzureBlobAuthenticationType;
		BlobType?: AzureBlobType;
		AccessTier?: AzureAccessTier;
		AgentArns?: Array<string>;
		CreationTime?: Date;
	}
	export interface DescribeLocationAzureBlobResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
		AuthenticationType: FormControl<AzureBlobAuthenticationType | null | undefined>,
		BlobType: FormControl<AzureBlobType | null | undefined>,
		AccessTier: FormControl<AzureAccessTier | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeLocationAzureBlobResponseFormGroup() {
		return new FormGroup<DescribeLocationAzureBlobResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			AuthenticationType: new FormControl<AzureBlobAuthenticationType | null | undefined>(undefined),
			BlobType: new FormControl<AzureBlobType | null | undefined>(undefined),
			AccessTier: new FormControl<AzureAccessTier | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeLocationAzureBlobRequest {

		/** Required */
		LocationArn: string;
	}
	export interface DescribeLocationAzureBlobRequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationAzureBlobRequestFormGroup() {
		return new FormGroup<DescribeLocationAzureBlobRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** DescribeLocationEfsResponse */
	export interface DescribeLocationEfsResponse {
		LocationArn?: string;
		LocationUri?: string;

		/** The subnet and security groups that DataSync uses to access your Amazon EFS file system. */
		Ec2Config?: Ec2Config;
		CreationTime?: Date;
		AccessPointArn?: string;
		FileSystemAccessRoleArn?: string;
		InTransitEncryption?: EfsInTransitEncryption;
	}

	/** DescribeLocationEfsResponse */
	export interface DescribeLocationEfsResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		AccessPointArn: FormControl<string | null | undefined>,
		FileSystemAccessRoleArn: FormControl<string | null | undefined>,
		InTransitEncryption: FormControl<EfsInTransitEncryption | null | undefined>,
	}
	export function CreateDescribeLocationEfsResponseFormGroup() {
		return new FormGroup<DescribeLocationEfsResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			AccessPointArn: new FormControl<string | null | undefined>(undefined),
			FileSystemAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			InTransitEncryption: new FormControl<EfsInTransitEncryption | null | undefined>(undefined),
		});

	}


	/** DescribeLocationEfsRequest */
	export interface DescribeLocationEfsRequest {

		/** Required */
		LocationArn: string;
	}

	/** DescribeLocationEfsRequest */
	export interface DescribeLocationEfsRequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationEfsRequestFormGroup() {
		return new FormGroup<DescribeLocationEfsRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeLocationFsxLustreResponse {
		LocationArn?: string;
		LocationUri?: string;
		SecurityGroupArns?: Array<string>;
		CreationTime?: Date;
	}
	export interface DescribeLocationFsxLustreResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeLocationFsxLustreResponseFormGroup() {
		return new FormGroup<DescribeLocationFsxLustreResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeLocationFsxLustreRequest {

		/** Required */
		LocationArn: string;
	}
	export interface DescribeLocationFsxLustreRequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationFsxLustreRequestFormGroup() {
		return new FormGroup<DescribeLocationFsxLustreRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeLocationFsxOntapResponse {
		CreationTime?: Date;
		LocationArn?: string;
		LocationUri?: string;

		/** Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system. */
		Protocol?: FsxProtocol;
		SecurityGroupArns?: Array<string>;
		StorageVirtualMachineArn?: string;
		FsxFilesystemArn?: string;
	}
	export interface DescribeLocationFsxOntapResponseFormProperties {
		CreationTime: FormControl<Date | null | undefined>,
		LocationArn: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
		StorageVirtualMachineArn: FormControl<string | null | undefined>,
		FsxFilesystemArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationFsxOntapResponseFormGroup() {
		return new FormGroup<DescribeLocationFsxOntapResponseFormProperties>({
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LocationArn: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			StorageVirtualMachineArn: new FormControl<string | null | undefined>(undefined),
			FsxFilesystemArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLocationFsxOntapRequest {

		/** Required */
		LocationArn: string;
	}
	export interface DescribeLocationFsxOntapRequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationFsxOntapRequestFormGroup() {
		return new FormGroup<DescribeLocationFsxOntapRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeLocationFsxOpenZfsResponse {
		LocationArn?: string;
		LocationUri?: string;
		SecurityGroupArns?: Array<string>;
		Protocol?: FsxProtocol;
		CreationTime?: Date;
	}
	export interface DescribeLocationFsxOpenZfsResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeLocationFsxOpenZfsResponseFormGroup() {
		return new FormGroup<DescribeLocationFsxOpenZfsResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeLocationFsxOpenZfsRequest {

		/** Required */
		LocationArn: string;
	}
	export interface DescribeLocationFsxOpenZfsRequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationFsxOpenZfsRequestFormGroup() {
		return new FormGroup<DescribeLocationFsxOpenZfsRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeLocationFsxWindowsResponse {
		LocationArn?: string;
		LocationUri?: string;
		SecurityGroupArns?: Array<string>;
		CreationTime?: Date;
		User?: string;
		Domain?: string;
	}
	export interface DescribeLocationFsxWindowsResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		User: FormControl<string | null | undefined>,
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationFsxWindowsResponseFormGroup() {
		return new FormGroup<DescribeLocationFsxWindowsResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			User: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLocationFsxWindowsRequest {

		/** Required */
		LocationArn: string;
	}
	export interface DescribeLocationFsxWindowsRequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationFsxWindowsRequestFormGroup() {
		return new FormGroup<DescribeLocationFsxWindowsRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeLocationHdfsResponse {
		LocationArn?: string;
		LocationUri?: string;
		NameNodes?: Array<HdfsNameNode>;
		BlockSize?: number | null;
		ReplicationFactor?: number | null;
		KmsKeyProviderUri?: string;
		QopConfiguration?: QopConfiguration;
		AuthenticationType?: HdfsAuthenticationType;
		SimpleUser?: string;
		KerberosPrincipal?: string;
		AgentArns?: Array<string>;
		CreationTime?: Date;
	}
	export interface DescribeLocationHdfsResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
		BlockSize: FormControl<number | null | undefined>,
		ReplicationFactor: FormControl<number | null | undefined>,
		KmsKeyProviderUri: FormControl<string | null | undefined>,
		AuthenticationType: FormControl<HdfsAuthenticationType | null | undefined>,
		SimpleUser: FormControl<string | null | undefined>,
		KerberosPrincipal: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeLocationHdfsResponseFormGroup() {
		return new FormGroup<DescribeLocationHdfsResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			BlockSize: new FormControl<number | null | undefined>(undefined),
			ReplicationFactor: new FormControl<number | null | undefined>(undefined),
			KmsKeyProviderUri: new FormControl<string | null | undefined>(undefined),
			AuthenticationType: new FormControl<HdfsAuthenticationType | null | undefined>(undefined),
			SimpleUser: new FormControl<string | null | undefined>(undefined),
			KerberosPrincipal: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeLocationHdfsRequest {

		/** Required */
		LocationArn: string;
	}
	export interface DescribeLocationHdfsRequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationHdfsRequestFormGroup() {
		return new FormGroup<DescribeLocationHdfsRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** DescribeLocationNfsResponse */
	export interface DescribeLocationNfsResponse {
		LocationArn?: string;
		LocationUri?: string;

		/** The DataSync agents that are connecting to a Network File System (NFS) location. */
		OnPremConfig?: OnPremConfig;
		MountOptions?: NfsMountOptions;
		CreationTime?: Date;
	}

	/** DescribeLocationNfsResponse */
	export interface DescribeLocationNfsResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeLocationNfsResponseFormGroup() {
		return new FormGroup<DescribeLocationNfsResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** DescribeLocationNfsRequest */
	export interface DescribeLocationNfsRequest {

		/** Required */
		LocationArn: string;
	}

	/** DescribeLocationNfsRequest */
	export interface DescribeLocationNfsRequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationNfsRequestFormGroup() {
		return new FormGroup<DescribeLocationNfsRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** DescribeLocationObjectStorageResponse */
	export interface DescribeLocationObjectStorageResponse {
		LocationArn?: string;
		LocationUri?: string;
		AccessKey?: string;
		ServerPort?: number | null;
		ServerProtocol?: ObjectStorageServerProtocol;
		AgentArns?: Array<string>;
		CreationTime?: Date;
		ServerCertificate?: string;
	}

	/** DescribeLocationObjectStorageResponse */
	export interface DescribeLocationObjectStorageResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
		AccessKey: FormControl<string | null | undefined>,
		ServerPort: FormControl<number | null | undefined>,
		ServerProtocol: FormControl<ObjectStorageServerProtocol | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		ServerCertificate: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationObjectStorageResponseFormGroup() {
		return new FormGroup<DescribeLocationObjectStorageResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			AccessKey: new FormControl<string | null | undefined>(undefined),
			ServerPort: new FormControl<number | null | undefined>(undefined),
			ServerProtocol: new FormControl<ObjectStorageServerProtocol | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			ServerCertificate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DescribeLocationObjectStorageRequest */
	export interface DescribeLocationObjectStorageRequest {

		/** Required */
		LocationArn: string;
	}

	/** DescribeLocationObjectStorageRequest */
	export interface DescribeLocationObjectStorageRequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationObjectStorageRequestFormGroup() {
		return new FormGroup<DescribeLocationObjectStorageRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** DescribeLocationS3Response */
	export interface DescribeLocationS3Response {
		LocationArn?: string;
		LocationUri?: string;
		S3StorageClass?: S3StorageClass;

		/** <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>DataSync User Guide</i>.</p> */
		S3Config?: S3Config;
		AgentArns?: Array<string>;
		CreationTime?: Date;
	}

	/** DescribeLocationS3Response */
	export interface DescribeLocationS3ResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
		S3StorageClass: FormControl<S3StorageClass | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeLocationS3ResponseFormGroup() {
		return new FormGroup<DescribeLocationS3ResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			S3StorageClass: new FormControl<S3StorageClass | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** DescribeLocationS3Request */
	export interface DescribeLocationS3Request {

		/** Required */
		LocationArn: string;
	}

	/** DescribeLocationS3Request */
	export interface DescribeLocationS3RequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationS3RequestFormGroup() {
		return new FormGroup<DescribeLocationS3RequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** DescribeLocationSmbResponse */
	export interface DescribeLocationSmbResponse {
		LocationArn?: string;
		LocationUri?: string;
		AgentArns?: Array<string>;
		User?: string;
		Domain?: string;
		MountOptions?: SmbMountOptions;
		CreationTime?: Date;
	}

	/** DescribeLocationSmbResponse */
	export interface DescribeLocationSmbResponseFormProperties {
		LocationArn: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
		User: FormControl<string | null | undefined>,
		Domain: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeLocationSmbResponseFormGroup() {
		return new FormGroup<DescribeLocationSmbResponseFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
			User: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** DescribeLocationSmbRequest */
	export interface DescribeLocationSmbRequest {

		/** Required */
		LocationArn: string;
	}

	/** DescribeLocationSmbRequest */
	export interface DescribeLocationSmbRequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLocationSmbRequestFormGroup() {
		return new FormGroup<DescribeLocationSmbRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeStorageSystemResponse {
		StorageSystemArn?: string;
		ServerConfiguration?: DiscoveryServerConfiguration;
		SystemType?: DiscoverySystemType;
		AgentArns?: Array<string>;
		Name?: string;
		ErrorMessage?: string;
		ConnectivityStatus?: StorageSystemConnectivityStatus;
		CloudWatchLogGroupArn?: string;
		CreationTime?: Date;
		SecretsManagerArn?: string;
	}
	export interface DescribeStorageSystemResponseFormProperties {
		StorageSystemArn: FormControl<string | null | undefined>,
		SystemType: FormControl<DiscoverySystemType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		ConnectivityStatus: FormControl<StorageSystemConnectivityStatus | null | undefined>,
		CloudWatchLogGroupArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		SecretsManagerArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStorageSystemResponseFormGroup() {
		return new FormGroup<DescribeStorageSystemResponseFormProperties>({
			StorageSystemArn: new FormControl<string | null | undefined>(undefined),
			SystemType: new FormControl<DiscoverySystemType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			ConnectivityStatus: new FormControl<StorageSystemConnectivityStatus | null | undefined>(undefined),
			CloudWatchLogGroupArn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			SecretsManagerArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StorageSystemConnectivityStatus { PASS = 0, FAIL = 1, UNKNOWN = 2 }

	export interface DescribeStorageSystemRequest {

		/** Required */
		StorageSystemArn: string;
	}
	export interface DescribeStorageSystemRequestFormProperties {

		/** Required */
		StorageSystemArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStorageSystemRequestFormGroup() {
		return new FormGroup<DescribeStorageSystemRequestFormProperties>({
			StorageSystemArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeStorageSystemResourceMetricsResponse {
		Metrics?: Array<ResourceMetrics>;
		NextToken?: string;
	}
	export interface DescribeStorageSystemResourceMetricsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStorageSystemResourceMetricsResponseFormGroup() {
		return new FormGroup<DescribeStorageSystemResourceMetricsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information, including performance data and capacity usage, provided by DataSync Discovery about a resource in your on-premises storage system. */
	export interface ResourceMetrics {
		Timestamp?: Date;
		P95Metrics?: P95Metrics;
		Capacity?: Capacity;
		ResourceId?: string;
		ResourceType?: DiscoveryResourceType;
	}

	/** Information, including performance data and capacity usage, provided by DataSync Discovery about a resource in your on-premises storage system. */
	export interface ResourceMetricsFormProperties {
		Timestamp: FormControl<Date | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ResourceType: FormControl<DiscoveryResourceType | null | undefined>,
	}
	export function CreateResourceMetricsFormGroup() {
		return new FormGroup<ResourceMetricsFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<DiscoveryResourceType | null | undefined>(undefined),
		});

	}


	/** The types of performance data that DataSync Discovery collects about an on-premises storage system resource. */
	export interface P95Metrics {
		IOPS?: IOPS;
		Throughput?: Throughput;
		Latency?: Latency;
	}

	/** The types of performance data that DataSync Discovery collects about an on-premises storage system resource. */
	export interface P95MetricsFormProperties {
	}
	export function CreateP95MetricsFormGroup() {
		return new FormGroup<P95MetricsFormProperties>({
		});

	}


	/** The IOPS peaks for an on-premises storage system resource. Each data point represents the 95th percentile peak value during a 1-hour interval. */
	export interface IOPS {
		Read?: number | null;
		Write?: number | null;
		Other?: number | null;
		Total?: number | null;
	}

	/** The IOPS peaks for an on-premises storage system resource. Each data point represents the 95th percentile peak value during a 1-hour interval. */
	export interface IOPSFormProperties {
		Read: FormControl<number | null | undefined>,
		Write: FormControl<number | null | undefined>,
		Other: FormControl<number | null | undefined>,
		Total: FormControl<number | null | undefined>,
	}
	export function CreateIOPSFormGroup() {
		return new FormGroup<IOPSFormProperties>({
			Read: new FormControl<number | null | undefined>(undefined),
			Write: new FormControl<number | null | undefined>(undefined),
			Other: new FormControl<number | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The throughput peaks for an on-premises storage system volume. Each data point represents the 95th percentile peak value during a 1-hour interval. */
	export interface Throughput {
		Read?: number | null;
		Write?: number | null;
		Other?: number | null;
		Total?: number | null;
	}

	/** The throughput peaks for an on-premises storage system volume. Each data point represents the 95th percentile peak value during a 1-hour interval. */
	export interface ThroughputFormProperties {
		Read: FormControl<number | null | undefined>,
		Write: FormControl<number | null | undefined>,
		Other: FormControl<number | null | undefined>,
		Total: FormControl<number | null | undefined>,
	}
	export function CreateThroughputFormGroup() {
		return new FormGroup<ThroughputFormProperties>({
			Read: new FormControl<number | null | undefined>(undefined),
			Write: new FormControl<number | null | undefined>(undefined),
			Other: new FormControl<number | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The latency peaks for an on-premises storage system resource. Each data point represents the 95th percentile peak value during a 1-hour interval. */
	export interface Latency {
		Read?: number | null;
		Write?: number | null;
		Other?: number | null;
	}

	/** The latency peaks for an on-premises storage system resource. Each data point represents the 95th percentile peak value during a 1-hour interval. */
	export interface LatencyFormProperties {
		Read: FormControl<number | null | undefined>,
		Write: FormControl<number | null | undefined>,
		Other: FormControl<number | null | undefined>,
	}
	export function CreateLatencyFormGroup() {
		return new FormGroup<LatencyFormProperties>({
			Read: new FormControl<number | null | undefined>(undefined),
			Write: new FormControl<number | null | undefined>(undefined),
			Other: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The storage capacity of an on-premises storage system resource (for example, a volume). */
	export interface Capacity {
		Used?: number | null;
		Provisioned?: number | null;
		LogicalUsed?: number | null;
		ClusterCloudStorageUsed?: number | null;
	}

	/** The storage capacity of an on-premises storage system resource (for example, a volume). */
	export interface CapacityFormProperties {
		Used: FormControl<number | null | undefined>,
		Provisioned: FormControl<number | null | undefined>,
		LogicalUsed: FormControl<number | null | undefined>,
		ClusterCloudStorageUsed: FormControl<number | null | undefined>,
	}
	export function CreateCapacityFormGroup() {
		return new FormGroup<CapacityFormProperties>({
			Used: new FormControl<number | null | undefined>(undefined),
			Provisioned: new FormControl<number | null | undefined>(undefined),
			LogicalUsed: new FormControl<number | null | undefined>(undefined),
			ClusterCloudStorageUsed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DiscoveryResourceType { SVM = 0, VOLUME = 1, CLUSTER = 2 }

	export interface DescribeStorageSystemResourceMetricsRequest {

		/** Required */
		DiscoveryJobArn: string;

		/** Required */
		ResourceType: DiscoveryResourceType;

		/** Required */
		ResourceId: string;
		StartTime?: Date;
		EndTime?: Date;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeStorageSystemResourceMetricsRequestFormProperties {

		/** Required */
		DiscoveryJobArn: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<DiscoveryResourceType | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStorageSystemResourceMetricsRequestFormGroup() {
		return new FormGroup<DescribeStorageSystemResourceMetricsRequestFormProperties>({
			DiscoveryJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<DiscoveryResourceType | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeStorageSystemResourcesResponse {
		ResourceDetails?: ResourceDetails;
		NextToken?: string;
	}
	export interface DescribeStorageSystemResourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStorageSystemResourcesResponseFormGroup() {
		return new FormGroup<DescribeStorageSystemResourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information provided by DataSync Discovery about the resources in your on-premises storage system. */
	export interface ResourceDetails {
		NetAppONTAPSVMs?: Array<NetAppONTAPSVM>;
		NetAppONTAPVolumes?: Array<NetAppONTAPVolume>;
		NetAppONTAPClusters?: Array<NetAppONTAPCluster>;
	}

	/** Information provided by DataSync Discovery about the resources in your on-premises storage system. */
	export interface ResourceDetailsFormProperties {
	}
	export function CreateResourceDetailsFormGroup() {
		return new FormGroup<ResourceDetailsFormProperties>({
		});

	}


	/** The information that DataSync Discovery collects about a storage virtual machine (SVM) in your on-premises storage system. */
	export interface NetAppONTAPSVM {
		ClusterUuid?: string;
		ResourceId?: string;
		SvmName?: string;
		CifsShareCount?: number | null;
		EnabledProtocols?: Array<string>;
		TotalCapacityUsed?: number | null;
		TotalCapacityProvisioned?: number | null;
		TotalLogicalCapacityUsed?: number | null;
		MaxP95Performance?: MaxP95Performance;
		Recommendations?: Array<Recommendation>;
		NfsExportedVolumes?: number | null;
		RecommendationStatus?: RecommendationStatus;
		TotalSnapshotCapacityUsed?: number | null;
		LunCount?: number | null;
	}

	/** The information that DataSync Discovery collects about a storage virtual machine (SVM) in your on-premises storage system. */
	export interface NetAppONTAPSVMFormProperties {
		ClusterUuid: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		SvmName: FormControl<string | null | undefined>,
		CifsShareCount: FormControl<number | null | undefined>,
		TotalCapacityUsed: FormControl<number | null | undefined>,
		TotalCapacityProvisioned: FormControl<number | null | undefined>,
		TotalLogicalCapacityUsed: FormControl<number | null | undefined>,
		NfsExportedVolumes: FormControl<number | null | undefined>,
		RecommendationStatus: FormControl<RecommendationStatus | null | undefined>,
		TotalSnapshotCapacityUsed: FormControl<number | null | undefined>,
		LunCount: FormControl<number | null | undefined>,
	}
	export function CreateNetAppONTAPSVMFormGroup() {
		return new FormGroup<NetAppONTAPSVMFormProperties>({
			ClusterUuid: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			SvmName: new FormControl<string | null | undefined>(undefined),
			CifsShareCount: new FormControl<number | null | undefined>(undefined),
			TotalCapacityUsed: new FormControl<number | null | undefined>(undefined),
			TotalCapacityProvisioned: new FormControl<number | null | undefined>(undefined),
			TotalLogicalCapacityUsed: new FormControl<number | null | undefined>(undefined),
			NfsExportedVolumes: new FormControl<number | null | undefined>(undefined),
			RecommendationStatus: new FormControl<RecommendationStatus | null | undefined>(undefined),
			TotalSnapshotCapacityUsed: new FormControl<number | null | undefined>(undefined),
			LunCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The performance data that DataSync Discovery collects about an on-premises storage system resource. */
	export interface MaxP95Performance {
		IopsRead?: number | null;
		IopsWrite?: number | null;
		IopsOther?: number | null;
		IopsTotal?: number | null;
		ThroughputRead?: number | null;
		ThroughputWrite?: number | null;
		ThroughputOther?: number | null;
		ThroughputTotal?: number | null;
		LatencyRead?: number | null;
		LatencyWrite?: number | null;
		LatencyOther?: number | null;
	}

	/** The performance data that DataSync Discovery collects about an on-premises storage system resource. */
	export interface MaxP95PerformanceFormProperties {
		IopsRead: FormControl<number | null | undefined>,
		IopsWrite: FormControl<number | null | undefined>,
		IopsOther: FormControl<number | null | undefined>,
		IopsTotal: FormControl<number | null | undefined>,
		ThroughputRead: FormControl<number | null | undefined>,
		ThroughputWrite: FormControl<number | null | undefined>,
		ThroughputOther: FormControl<number | null | undefined>,
		ThroughputTotal: FormControl<number | null | undefined>,
		LatencyRead: FormControl<number | null | undefined>,
		LatencyWrite: FormControl<number | null | undefined>,
		LatencyOther: FormControl<number | null | undefined>,
	}
	export function CreateMaxP95PerformanceFormGroup() {
		return new FormGroup<MaxP95PerformanceFormProperties>({
			IopsRead: new FormControl<number | null | undefined>(undefined),
			IopsWrite: new FormControl<number | null | undefined>(undefined),
			IopsOther: new FormControl<number | null | undefined>(undefined),
			IopsTotal: new FormControl<number | null | undefined>(undefined),
			ThroughputRead: new FormControl<number | null | undefined>(undefined),
			ThroughputWrite: new FormControl<number | null | undefined>(undefined),
			ThroughputOther: new FormControl<number | null | undefined>(undefined),
			ThroughputTotal: new FormControl<number | null | undefined>(undefined),
			LatencyRead: new FormControl<number | null | undefined>(undefined),
			LatencyWrite: new FormControl<number | null | undefined>(undefined),
			LatencyOther: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>The details about an Amazon Web Services storage service that DataSync Discovery recommends for a resource in your on-premises storage system.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">Recommendations provided by DataSync Discovery</a>.</p> */
	export interface Recommendation {
		StorageType?: string;
		StorageConfiguration?: RecommendationsConfigMap;
		EstimatedMonthlyStorageCost?: string;
	}

	/** <p>The details about an Amazon Web Services storage service that DataSync Discovery recommends for a resource in your on-premises storage system.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">Recommendations provided by DataSync Discovery</a>.</p> */
	export interface RecommendationFormProperties {
		StorageType: FormControl<string | null | undefined>,
		EstimatedMonthlyStorageCost: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationFormGroup() {
		return new FormGroup<RecommendationFormProperties>({
			StorageType: new FormControl<string | null | undefined>(undefined),
			EstimatedMonthlyStorageCost: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RecommendationsConfigMap {
	}
	export interface RecommendationsConfigMapFormProperties {
	}
	export function CreateRecommendationsConfigMapFormGroup() {
		return new FormGroup<RecommendationsConfigMapFormProperties>({
		});

	}

	export enum RecommendationStatus { NONE = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3 }


	/** The information that DataSync Discovery collects about a volume in your on-premises storage system. */
	export interface NetAppONTAPVolume {
		VolumeName?: string;
		ResourceId?: string;
		CifsShareCount?: number | null;
		SecurityStyle?: string;
		SvmUuid?: string;
		SvmName?: string;
		CapacityUsed?: number | null;
		CapacityProvisioned?: number | null;
		LogicalCapacityUsed?: number | null;
		NfsExported?: boolean | null;
		SnapshotCapacityUsed?: number | null;
		MaxP95Performance?: MaxP95Performance;
		Recommendations?: Array<Recommendation>;
		RecommendationStatus?: RecommendationStatus;
		LunCount?: number | null;
	}

	/** The information that DataSync Discovery collects about a volume in your on-premises storage system. */
	export interface NetAppONTAPVolumeFormProperties {
		VolumeName: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		CifsShareCount: FormControl<number | null | undefined>,
		SecurityStyle: FormControl<string | null | undefined>,
		SvmUuid: FormControl<string | null | undefined>,
		SvmName: FormControl<string | null | undefined>,
		CapacityUsed: FormControl<number | null | undefined>,
		CapacityProvisioned: FormControl<number | null | undefined>,
		LogicalCapacityUsed: FormControl<number | null | undefined>,
		NfsExported: FormControl<boolean | null | undefined>,
		SnapshotCapacityUsed: FormControl<number | null | undefined>,
		RecommendationStatus: FormControl<RecommendationStatus | null | undefined>,
		LunCount: FormControl<number | null | undefined>,
	}
	export function CreateNetAppONTAPVolumeFormGroup() {
		return new FormGroup<NetAppONTAPVolumeFormProperties>({
			VolumeName: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			CifsShareCount: new FormControl<number | null | undefined>(undefined),
			SecurityStyle: new FormControl<string | null | undefined>(undefined),
			SvmUuid: new FormControl<string | null | undefined>(undefined),
			SvmName: new FormControl<string | null | undefined>(undefined),
			CapacityUsed: new FormControl<number | null | undefined>(undefined),
			CapacityProvisioned: new FormControl<number | null | undefined>(undefined),
			LogicalCapacityUsed: new FormControl<number | null | undefined>(undefined),
			NfsExported: new FormControl<boolean | null | undefined>(undefined),
			SnapshotCapacityUsed: new FormControl<number | null | undefined>(undefined),
			RecommendationStatus: new FormControl<RecommendationStatus | null | undefined>(undefined),
			LunCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The information that DataSync Discovery collects about an on-premises storage system cluster. */
	export interface NetAppONTAPCluster {
		CifsShareCount?: number | null;
		NfsExportedVolumes?: number | null;
		ResourceId?: string;
		ClusterName?: string;
		MaxP95Performance?: MaxP95Performance;
		ClusterBlockStorageSize?: number | null;
		ClusterBlockStorageUsed?: number | null;
		ClusterBlockStorageLogicalUsed?: number | null;
		Recommendations?: Array<Recommendation>;
		RecommendationStatus?: RecommendationStatus;
		LunCount?: number | null;
		ClusterCloudStorageUsed?: number | null;
	}

	/** The information that DataSync Discovery collects about an on-premises storage system cluster. */
	export interface NetAppONTAPClusterFormProperties {
		CifsShareCount: FormControl<number | null | undefined>,
		NfsExportedVolumes: FormControl<number | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ClusterName: FormControl<string | null | undefined>,
		ClusterBlockStorageSize: FormControl<number | null | undefined>,
		ClusterBlockStorageUsed: FormControl<number | null | undefined>,
		ClusterBlockStorageLogicalUsed: FormControl<number | null | undefined>,
		RecommendationStatus: FormControl<RecommendationStatus | null | undefined>,
		LunCount: FormControl<number | null | undefined>,
		ClusterCloudStorageUsed: FormControl<number | null | undefined>,
	}
	export function CreateNetAppONTAPClusterFormGroup() {
		return new FormGroup<NetAppONTAPClusterFormProperties>({
			CifsShareCount: new FormControl<number | null | undefined>(undefined),
			NfsExportedVolumes: new FormControl<number | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ClusterName: new FormControl<string | null | undefined>(undefined),
			ClusterBlockStorageSize: new FormControl<number | null | undefined>(undefined),
			ClusterBlockStorageUsed: new FormControl<number | null | undefined>(undefined),
			ClusterBlockStorageLogicalUsed: new FormControl<number | null | undefined>(undefined),
			RecommendationStatus: new FormControl<RecommendationStatus | null | undefined>(undefined),
			LunCount: new FormControl<number | null | undefined>(undefined),
			ClusterCloudStorageUsed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeStorageSystemResourcesRequest {

		/** Required */
		DiscoveryJobArn: string;

		/** Required */
		ResourceType: DiscoveryResourceType;
		ResourceIds?: Array<string>;
		Filter?: ResourceFilters;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeStorageSystemResourcesRequestFormProperties {

		/** Required */
		DiscoveryJobArn: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<DiscoveryResourceType | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStorageSystemResourcesRequestFormGroup() {
		return new FormGroup<DescribeStorageSystemResourcesRequestFormProperties>({
			DiscoveryJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<DiscoveryResourceType | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceFilters {
	}
	export interface ResourceFiltersFormProperties {
	}
	export function CreateResourceFiltersFormGroup() {
		return new FormGroup<ResourceFiltersFormProperties>({
		});

	}


	/** DescribeTaskResponse */
	export interface DescribeTaskResponse {
		TaskArn?: string;
		Status?: TaskStatus;
		Name?: string;
		CurrentTaskExecutionArn?: string;
		SourceLocationArn?: string;
		DestinationLocationArn?: string;
		CloudWatchLogGroupArn?: string;
		SourceNetworkInterfaceArns?: Array<string>;
		DestinationNetworkInterfaceArns?: Array<string>;
		Options?: Options;
		Excludes?: Array<FilterRule>;
		Schedule?: TaskSchedule;
		ErrorCode?: string;
		ErrorDetail?: string;
		CreationTime?: Date;
		Includes?: Array<FilterRule>;
	}

	/** DescribeTaskResponse */
	export interface DescribeTaskResponseFormProperties {
		TaskArn: FormControl<string | null | undefined>,
		Status: FormControl<TaskStatus | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CurrentTaskExecutionArn: FormControl<string | null | undefined>,
		SourceLocationArn: FormControl<string | null | undefined>,
		DestinationLocationArn: FormControl<string | null | undefined>,
		CloudWatchLogGroupArn: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorDetail: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeTaskResponseFormGroup() {
		return new FormGroup<DescribeTaskResponseFormProperties>({
			TaskArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TaskStatus | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			CurrentTaskExecutionArn: new FormControl<string | null | undefined>(undefined),
			SourceLocationArn: new FormControl<string | null | undefined>(undefined),
			DestinationLocationArn: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogGroupArn: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorDetail: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum TaskStatus { AVAILABLE = 0, CREATING = 1, QUEUED = 2, RUNNING = 3, UNAVAILABLE = 4 }


	/** DescribeTaskRequest */
	export interface DescribeTaskRequest {

		/** Required */
		TaskArn: string;
	}

	/** DescribeTaskRequest */
	export interface DescribeTaskRequestFormProperties {

		/** Required */
		TaskArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTaskRequestFormGroup() {
		return new FormGroup<DescribeTaskRequestFormProperties>({
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** DescribeTaskExecutionResponse */
	export interface DescribeTaskExecutionResponse {
		TaskExecutionArn?: string;
		Status?: TaskExecutionStatus;

		/** <p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p> */
		Options?: Options;
		Excludes?: Array<FilterRule>;
		Includes?: Array<FilterRule>;
		StartTime?: Date;
		EstimatedFilesToTransfer?: number | null;
		EstimatedBytesToTransfer?: number | null;
		FilesTransferred?: number | null;
		BytesWritten?: number | null;
		BytesTransferred?: number | null;
		Result?: TaskExecutionResultDetail;
		BytesCompressed?: number | null;
	}

	/** DescribeTaskExecutionResponse */
	export interface DescribeTaskExecutionResponseFormProperties {
		TaskExecutionArn: FormControl<string | null | undefined>,
		Status: FormControl<TaskExecutionStatus | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EstimatedFilesToTransfer: FormControl<number | null | undefined>,
		EstimatedBytesToTransfer: FormControl<number | null | undefined>,
		FilesTransferred: FormControl<number | null | undefined>,
		BytesWritten: FormControl<number | null | undefined>,
		BytesTransferred: FormControl<number | null | undefined>,
		BytesCompressed: FormControl<number | null | undefined>,
	}
	export function CreateDescribeTaskExecutionResponseFormGroup() {
		return new FormGroup<DescribeTaskExecutionResponseFormProperties>({
			TaskExecutionArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TaskExecutionStatus | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EstimatedFilesToTransfer: new FormControl<number | null | undefined>(undefined),
			EstimatedBytesToTransfer: new FormControl<number | null | undefined>(undefined),
			FilesTransferred: new FormControl<number | null | undefined>(undefined),
			BytesWritten: new FormControl<number | null | undefined>(undefined),
			BytesTransferred: new FormControl<number | null | undefined>(undefined),
			BytesCompressed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TaskExecutionStatus { QUEUED = 0, LAUNCHING = 1, PREPARING = 2, TRANSFERRING = 3, VERIFYING = 4, SUCCESS = 5, ERROR = 6 }


	/** Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered. */
	export interface TaskExecutionResultDetail {
		PrepareDuration?: number | null;
		PrepareStatus?: PhaseStatus;
		TotalDuration?: number | null;
		TransferDuration?: number | null;
		TransferStatus?: PhaseStatus;
		VerifyDuration?: number | null;
		VerifyStatus?: PhaseStatus;
		ErrorCode?: string;
		ErrorDetail?: string;
	}

	/** Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered. */
	export interface TaskExecutionResultDetailFormProperties {
		PrepareDuration: FormControl<number | null | undefined>,
		PrepareStatus: FormControl<PhaseStatus | null | undefined>,
		TotalDuration: FormControl<number | null | undefined>,
		TransferDuration: FormControl<number | null | undefined>,
		TransferStatus: FormControl<PhaseStatus | null | undefined>,
		VerifyDuration: FormControl<number | null | undefined>,
		VerifyStatus: FormControl<PhaseStatus | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorDetail: FormControl<string | null | undefined>,
	}
	export function CreateTaskExecutionResultDetailFormGroup() {
		return new FormGroup<TaskExecutionResultDetailFormProperties>({
			PrepareDuration: new FormControl<number | null | undefined>(undefined),
			PrepareStatus: new FormControl<PhaseStatus | null | undefined>(undefined),
			TotalDuration: new FormControl<number | null | undefined>(undefined),
			TransferDuration: new FormControl<number | null | undefined>(undefined),
			TransferStatus: new FormControl<PhaseStatus | null | undefined>(undefined),
			VerifyDuration: new FormControl<number | null | undefined>(undefined),
			VerifyStatus: new FormControl<PhaseStatus | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorDetail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PhaseStatus { PENDING = 0, SUCCESS = 1, ERROR = 2 }


	/** DescribeTaskExecutionRequest */
	export interface DescribeTaskExecutionRequest {

		/** Required */
		TaskExecutionArn: string;
	}

	/** DescribeTaskExecutionRequest */
	export interface DescribeTaskExecutionRequestFormProperties {

		/** Required */
		TaskExecutionArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTaskExecutionRequestFormGroup() {
		return new FormGroup<DescribeTaskExecutionRequestFormProperties>({
			TaskExecutionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GenerateRecommendationsResponse {
	}
	export interface GenerateRecommendationsResponseFormProperties {
	}
	export function CreateGenerateRecommendationsResponseFormGroup() {
		return new FormGroup<GenerateRecommendationsResponseFormProperties>({
		});

	}

	export interface GenerateRecommendationsRequest {

		/** Required */
		DiscoveryJobArn: string;

		/** Required */
		ResourceIds: Array<string>;

		/** Required */
		ResourceType: DiscoveryResourceType;
	}
	export interface GenerateRecommendationsRequestFormProperties {

		/** Required */
		DiscoveryJobArn: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<DiscoveryResourceType | null | undefined>,
	}
	export function CreateGenerateRecommendationsRequestFormGroup() {
		return new FormGroup<GenerateRecommendationsRequestFormProperties>({
			DiscoveryJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<DiscoveryResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** ListAgentsResponse */
	export interface ListAgentsResponse {
		Agents?: Array<AgentListEntry>;
		NextToken?: string;
	}

	/** ListAgentsResponse */
	export interface ListAgentsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAgentsResponseFormGroup() {
		return new FormGroup<ListAgentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single entry in a list (or array) of DataSync agents when you call the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html">ListAgents</a> operation. */
	export interface AgentListEntry {
		AgentArn?: string;
		Name?: string;
		Status?: AgentStatus;
	}

	/** Represents a single entry in a list (or array) of DataSync agents when you call the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListAgents.html">ListAgents</a> operation. */
	export interface AgentListEntryFormProperties {
		AgentArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<AgentStatus | null | undefined>,
	}
	export function CreateAgentListEntryFormGroup() {
		return new FormGroup<AgentListEntryFormProperties>({
			AgentArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AgentStatus | null | undefined>(undefined),
		});

	}


	/** ListAgentsRequest */
	export interface ListAgentsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** ListAgentsRequest */
	export interface ListAgentsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAgentsRequestFormGroup() {
		return new FormGroup<ListAgentsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDiscoveryJobsResponse {
		DiscoveryJobs?: Array<DiscoveryJobListEntry>;
		NextToken?: string;
	}
	export interface ListDiscoveryJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDiscoveryJobsResponseFormGroup() {
		return new FormGroup<ListDiscoveryJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details about a specific DataSync discovery job. */
	export interface DiscoveryJobListEntry {
		DiscoveryJobArn?: string;
		Status?: DiscoveryJobStatus;
	}

	/** The details about a specific DataSync discovery job. */
	export interface DiscoveryJobListEntryFormProperties {
		DiscoveryJobArn: FormControl<string | null | undefined>,
		Status: FormControl<DiscoveryJobStatus | null | undefined>,
	}
	export function CreateDiscoveryJobListEntryFormGroup() {
		return new FormGroup<DiscoveryJobListEntryFormProperties>({
			DiscoveryJobArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DiscoveryJobStatus | null | undefined>(undefined),
		});

	}

	export interface ListDiscoveryJobsRequest {
		StorageSystemArn?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListDiscoveryJobsRequestFormProperties {
		StorageSystemArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDiscoveryJobsRequestFormGroup() {
		return new FormGroup<ListDiscoveryJobsRequestFormProperties>({
			StorageSystemArn: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListLocationsResponse */
	export interface ListLocationsResponse {
		Locations?: Array<LocationListEntry>;
		NextToken?: string;
	}

	/** ListLocationsResponse */
	export interface ListLocationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single entry in a list of locations. <code>LocationListEntry</code> returns an array that contains a list of locations when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html">ListLocations</a> operation is called. */
	export interface LocationListEntry {
		LocationArn?: string;
		LocationUri?: string;
	}

	/** Represents a single entry in a list of locations. <code>LocationListEntry</code> returns an array that contains a list of locations when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListLocations.html">ListLocations</a> operation is called. */
	export interface LocationListEntryFormProperties {
		LocationArn: FormControl<string | null | undefined>,
		LocationUri: FormControl<string | null | undefined>,
	}
	export function CreateLocationListEntryFormGroup() {
		return new FormGroup<LocationListEntryFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined),
			LocationUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListLocationsRequest */
	export interface ListLocationsRequest {
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<LocationFilter>;
	}

	/** ListLocationsRequest */
	export interface ListLocationsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsRequestFormGroup() {
		return new FormGroup<ListLocationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Narrow down the list of resources returned by <code>ListLocations</code>. For example, to see all your Amazon S3 locations, create a filter using <code>"Name": "LocationType"</code>, <code>"Operator": "Equals"</code>, and <code>"Values": "S3"</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/query-resources.html">filtering resources</a>.</p> */
	export interface LocationFilter {

		/** Required */
		Name: LocationFilterName;

		/** Required */
		Values: Array<string>;

		/** Required */
		Operator: Operator;
	}

	/** <p>Narrow down the list of resources returned by <code>ListLocations</code>. For example, to see all your Amazon S3 locations, create a filter using <code>"Name": "LocationType"</code>, <code>"Operator": "Equals"</code>, and <code>"Values": "S3"</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/query-resources.html">filtering resources</a>.</p> */
	export interface LocationFilterFormProperties {

		/** Required */
		Name: FormControl<LocationFilterName | null | undefined>,

		/** Required */
		Operator: FormControl<Operator | null | undefined>,
	}
	export function CreateLocationFilterFormGroup() {
		return new FormGroup<LocationFilterFormProperties>({
			Name: new FormControl<LocationFilterName | null | undefined>(undefined, [Validators.required]),
			Operator: new FormControl<Operator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LocationFilterName { LocationUri = 0, LocationType = 1, CreationTime = 2 }

	export enum Operator { Equals = 0, NotEquals = 1, In = 2, LessThanOrEqual = 3, LessThan = 4, GreaterThanOrEqual = 5, GreaterThan = 6, Contains = 7, NotContains = 8, BeginsWith = 9 }

	export interface ListStorageSystemsResponse {
		StorageSystems?: Array<StorageSystemListEntry>;
		NextToken?: string;
	}
	export interface ListStorageSystemsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStorageSystemsResponseFormGroup() {
		return new FormGroup<ListStorageSystemsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information that identifies an on-premises storage system that you're using with DataSync Discovery. */
	export interface StorageSystemListEntry {
		StorageSystemArn?: string;
		Name?: string;
	}

	/** Information that identifies an on-premises storage system that you're using with DataSync Discovery. */
	export interface StorageSystemListEntryFormProperties {
		StorageSystemArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStorageSystemListEntryFormGroup() {
		return new FormGroup<StorageSystemListEntryFormProperties>({
			StorageSystemArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStorageSystemsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListStorageSystemsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStorageSystemsRequestFormGroup() {
		return new FormGroup<ListStorageSystemsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListTagsForResourceResponse */
	export interface ListTagsForResourceResponse {
		Tags?: Array<TagListEntry>;
		NextToken?: string;
	}

	/** ListTagsForResourceResponse */
	export interface ListTagsForResourceResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListTagsForResourceRequest */
	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** ListTagsForResourceRequest */
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListTaskExecutionsResponse */
	export interface ListTaskExecutionsResponse {
		TaskExecutions?: Array<TaskExecutionListEntry>;
		NextToken?: string;
	}

	/** ListTaskExecutionsResponse */
	export interface ListTaskExecutionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTaskExecutionsResponseFormGroup() {
		return new FormGroup<ListTaskExecutionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single entry in a list of task executions. <code>TaskExecutionListEntry</code> returns an array that contains a list of specific invocations of a task when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html">ListTaskExecutions</a> operation is called. */
	export interface TaskExecutionListEntry {
		TaskExecutionArn?: string;
		Status?: TaskExecutionStatus;
	}

	/** Represents a single entry in a list of task executions. <code>TaskExecutionListEntry</code> returns an array that contains a list of specific invocations of a task when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html">ListTaskExecutions</a> operation is called. */
	export interface TaskExecutionListEntryFormProperties {
		TaskExecutionArn: FormControl<string | null | undefined>,
		Status: FormControl<TaskExecutionStatus | null | undefined>,
	}
	export function CreateTaskExecutionListEntryFormGroup() {
		return new FormGroup<TaskExecutionListEntryFormProperties>({
			TaskExecutionArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TaskExecutionStatus | null | undefined>(undefined),
		});

	}


	/** ListTaskExecutions */
	export interface ListTaskExecutionsRequest {
		TaskArn?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** ListTaskExecutions */
	export interface ListTaskExecutionsRequestFormProperties {
		TaskArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTaskExecutionsRequestFormGroup() {
		return new FormGroup<ListTaskExecutionsRequestFormProperties>({
			TaskArn: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListTasksResponse */
	export interface ListTasksResponse {
		Tasks?: Array<TaskListEntry>;
		NextToken?: string;
	}

	/** ListTasksResponse */
	export interface ListTasksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTasksResponseFormGroup() {
		return new FormGroup<ListTasksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single entry in a list of tasks. <code>TaskListEntry</code> returns an array that contains a list of tasks when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTasks.html">ListTasks</a> operation is called. A task includes the source and destination file systems to sync and the options to use for the tasks. */
	export interface TaskListEntry {
		TaskArn?: string;
		Status?: TaskStatus;
		Name?: string;
	}

	/** Represents a single entry in a list of tasks. <code>TaskListEntry</code> returns an array that contains a list of tasks when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTasks.html">ListTasks</a> operation is called. A task includes the source and destination file systems to sync and the options to use for the tasks. */
	export interface TaskListEntryFormProperties {
		TaskArn: FormControl<string | null | undefined>,
		Status: FormControl<TaskStatus | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateTaskListEntryFormGroup() {
		return new FormGroup<TaskListEntryFormProperties>({
			TaskArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<TaskStatus | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListTasksRequest */
	export interface ListTasksRequest {
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<TaskFilter>;
	}

	/** ListTasksRequest */
	export interface ListTasksRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTasksRequestFormGroup() {
		return new FormGroup<ListTasksRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>You can use API filters to narrow down the list of resources returned by <code>ListTasks</code>. For example, to retrieve all tasks on a source location, you can use <code>ListTasks</code> with filter name <code>LocationId</code> and <code>Operator Equals</code> with the ARN for the location.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/query-resources.html">filtering DataSync resources</a>.</p> */
	export interface TaskFilter {

		/** Required */
		Name: TaskFilterName;

		/** Required */
		Values: Array<string>;

		/** Required */
		Operator: Operator;
	}

	/** <p>You can use API filters to narrow down the list of resources returned by <code>ListTasks</code>. For example, to retrieve all tasks on a source location, you can use <code>ListTasks</code> with filter name <code>LocationId</code> and <code>Operator Equals</code> with the ARN for the location.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/query-resources.html">filtering DataSync resources</a>.</p> */
	export interface TaskFilterFormProperties {

		/** Required */
		Name: FormControl<TaskFilterName | null | undefined>,

		/** Required */
		Operator: FormControl<Operator | null | undefined>,
	}
	export function CreateTaskFilterFormGroup() {
		return new FormGroup<TaskFilterFormProperties>({
			Name: new FormControl<TaskFilterName | null | undefined>(undefined, [Validators.required]),
			Operator: new FormControl<Operator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TaskFilterName { LocationId = 0, CreationTime = 1 }

	export interface RemoveStorageSystemResponse {
	}
	export interface RemoveStorageSystemResponseFormProperties {
	}
	export function CreateRemoveStorageSystemResponseFormGroup() {
		return new FormGroup<RemoveStorageSystemResponseFormProperties>({
		});

	}

	export interface RemoveStorageSystemRequest {

		/** Required */
		StorageSystemArn: string;
	}
	export interface RemoveStorageSystemRequestFormProperties {

		/** Required */
		StorageSystemArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveStorageSystemRequestFormGroup() {
		return new FormGroup<RemoveStorageSystemRequestFormProperties>({
			StorageSystemArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartDiscoveryJobResponse {
		DiscoveryJobArn?: string;
	}
	export interface StartDiscoveryJobResponseFormProperties {
		DiscoveryJobArn: FormControl<string | null | undefined>,
	}
	export function CreateStartDiscoveryJobResponseFormGroup() {
		return new FormGroup<StartDiscoveryJobResponseFormProperties>({
			DiscoveryJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartDiscoveryJobRequest {

		/** Required */
		StorageSystemArn: string;

		/** Required */
		CollectionDurationMinutes: number;

		/** Required */
		ClientToken: string;
		Tags?: Array<TagListEntry>;
	}
	export interface StartDiscoveryJobRequestFormProperties {

		/** Required */
		StorageSystemArn: FormControl<string | null | undefined>,

		/** Required */
		CollectionDurationMinutes: FormControl<number | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartDiscoveryJobRequestFormGroup() {
		return new FormGroup<StartDiscoveryJobRequestFormProperties>({
			StorageSystemArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CollectionDurationMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** StartTaskExecutionResponse */
	export interface StartTaskExecutionResponse {
		TaskExecutionArn?: string;
	}

	/** StartTaskExecutionResponse */
	export interface StartTaskExecutionResponseFormProperties {
		TaskExecutionArn: FormControl<string | null | undefined>,
	}
	export function CreateStartTaskExecutionResponseFormGroup() {
		return new FormGroup<StartTaskExecutionResponseFormProperties>({
			TaskExecutionArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** StartTaskExecutionRequest */
	export interface StartTaskExecutionRequest {

		/** Required */
		TaskArn: string;

		/** <p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p> */
		OverrideOptions?: Options;
		Includes?: Array<FilterRule>;
		Excludes?: Array<FilterRule>;
		Tags?: Array<TagListEntry>;
	}

	/** StartTaskExecutionRequest */
	export interface StartTaskExecutionRequestFormProperties {

		/** Required */
		TaskArn: FormControl<string | null | undefined>,
	}
	export function CreateStartTaskExecutionRequestFormGroup() {
		return new FormGroup<StartTaskExecutionRequestFormProperties>({
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopDiscoveryJobResponse {
	}
	export interface StopDiscoveryJobResponseFormProperties {
	}
	export function CreateStopDiscoveryJobResponseFormGroup() {
		return new FormGroup<StopDiscoveryJobResponseFormProperties>({
		});

	}

	export interface StopDiscoveryJobRequest {

		/** Required */
		DiscoveryJobArn: string;
	}
	export interface StopDiscoveryJobRequestFormProperties {

		/** Required */
		DiscoveryJobArn: FormControl<string | null | undefined>,
	}
	export function CreateStopDiscoveryJobRequestFormGroup() {
		return new FormGroup<StopDiscoveryJobRequestFormProperties>({
			DiscoveryJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/** TagResourceRequest */
	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<TagListEntry>;
	}

	/** TagResourceRequest */
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


	/** UntagResourceRequest */
	export interface UntagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Keys: Array<string>;
	}

	/** UntagResourceRequest */
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAgentResponse {
	}
	export interface UpdateAgentResponseFormProperties {
	}
	export function CreateUpdateAgentResponseFormGroup() {
		return new FormGroup<UpdateAgentResponseFormProperties>({
		});

	}


	/** UpdateAgentRequest */
	export interface UpdateAgentRequest {

		/** Required */
		AgentArn: string;
		Name?: string;
	}

	/** UpdateAgentRequest */
	export interface UpdateAgentRequestFormProperties {

		/** Required */
		AgentArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAgentRequestFormGroup() {
		return new FormGroup<UpdateAgentRequestFormProperties>({
			AgentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDiscoveryJobResponse {
	}
	export interface UpdateDiscoveryJobResponseFormProperties {
	}
	export function CreateUpdateDiscoveryJobResponseFormGroup() {
		return new FormGroup<UpdateDiscoveryJobResponseFormProperties>({
		});

	}

	export interface UpdateDiscoveryJobRequest {

		/** Required */
		DiscoveryJobArn: string;

		/** Required */
		CollectionDurationMinutes: number;
	}
	export interface UpdateDiscoveryJobRequestFormProperties {

		/** Required */
		DiscoveryJobArn: FormControl<string | null | undefined>,

		/** Required */
		CollectionDurationMinutes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDiscoveryJobRequestFormGroup() {
		return new FormGroup<UpdateDiscoveryJobRequestFormProperties>({
			DiscoveryJobArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CollectionDurationMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateLocationAzureBlobResponse {
	}
	export interface UpdateLocationAzureBlobResponseFormProperties {
	}
	export function CreateUpdateLocationAzureBlobResponseFormGroup() {
		return new FormGroup<UpdateLocationAzureBlobResponseFormProperties>({
		});

	}

	export interface UpdateLocationAzureBlobRequest {

		/** Required */
		LocationArn: string;
		Subdirectory?: string;
		AuthenticationType?: AzureBlobAuthenticationType;
		SasConfiguration?: AzureBlobSasConfiguration;
		BlobType?: AzureBlobType;
		AccessTier?: AzureAccessTier;
		AgentArns?: Array<string>;
	}
	export interface UpdateLocationAzureBlobRequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
		Subdirectory: FormControl<string | null | undefined>,
		AuthenticationType: FormControl<AzureBlobAuthenticationType | null | undefined>,
		BlobType: FormControl<AzureBlobType | null | undefined>,
		AccessTier: FormControl<AzureAccessTier | null | undefined>,
	}
	export function CreateUpdateLocationAzureBlobRequestFormGroup() {
		return new FormGroup<UpdateLocationAzureBlobRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Subdirectory: new FormControl<string | null | undefined>(undefined),
			AuthenticationType: new FormControl<AzureBlobAuthenticationType | null | undefined>(undefined),
			BlobType: new FormControl<AzureBlobType | null | undefined>(undefined),
			AccessTier: new FormControl<AzureAccessTier | null | undefined>(undefined),
		});

	}

	export interface UpdateLocationHdfsResponse {
	}
	export interface UpdateLocationHdfsResponseFormProperties {
	}
	export function CreateUpdateLocationHdfsResponseFormGroup() {
		return new FormGroup<UpdateLocationHdfsResponseFormProperties>({
		});

	}

	export interface UpdateLocationHdfsRequest {

		/** Required */
		LocationArn: string;
		Subdirectory?: string;
		NameNodes?: Array<HdfsNameNode>;
		BlockSize?: number | null;
		ReplicationFactor?: number | null;
		KmsKeyProviderUri?: string;
		QopConfiguration?: QopConfiguration;
		AuthenticationType?: HdfsAuthenticationType;
		SimpleUser?: string;
		KerberosPrincipal?: string;
		KerberosKeytab?: string;
		KerberosKrb5Conf?: string;
		AgentArns?: Array<string>;
	}
	export interface UpdateLocationHdfsRequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
		Subdirectory: FormControl<string | null | undefined>,
		BlockSize: FormControl<number | null | undefined>,
		ReplicationFactor: FormControl<number | null | undefined>,
		KmsKeyProviderUri: FormControl<string | null | undefined>,
		AuthenticationType: FormControl<HdfsAuthenticationType | null | undefined>,
		SimpleUser: FormControl<string | null | undefined>,
		KerberosPrincipal: FormControl<string | null | undefined>,
		KerberosKeytab: FormControl<string | null | undefined>,
		KerberosKrb5Conf: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLocationHdfsRequestFormGroup() {
		return new FormGroup<UpdateLocationHdfsRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Subdirectory: new FormControl<string | null | undefined>(undefined),
			BlockSize: new FormControl<number | null | undefined>(undefined),
			ReplicationFactor: new FormControl<number | null | undefined>(undefined),
			KmsKeyProviderUri: new FormControl<string | null | undefined>(undefined),
			AuthenticationType: new FormControl<HdfsAuthenticationType | null | undefined>(undefined),
			SimpleUser: new FormControl<string | null | undefined>(undefined),
			KerberosPrincipal: new FormControl<string | null | undefined>(undefined),
			KerberosKeytab: new FormControl<string | null | undefined>(undefined),
			KerberosKrb5Conf: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLocationNfsResponse {
	}
	export interface UpdateLocationNfsResponseFormProperties {
	}
	export function CreateUpdateLocationNfsResponseFormGroup() {
		return new FormGroup<UpdateLocationNfsResponseFormProperties>({
		});

	}

	export interface UpdateLocationNfsRequest {

		/** Required */
		LocationArn: string;
		Subdirectory?: string;

		/** The DataSync agents that are connecting to a Network File System (NFS) location. */
		OnPremConfig?: OnPremConfig;

		/** Specifies how DataSync can access a location using the NFS protocol. */
		MountOptions?: NfsMountOptions;
	}
	export interface UpdateLocationNfsRequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
		Subdirectory: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLocationNfsRequestFormGroup() {
		return new FormGroup<UpdateLocationNfsRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Subdirectory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLocationObjectStorageResponse {
	}
	export interface UpdateLocationObjectStorageResponseFormProperties {
	}
	export function CreateUpdateLocationObjectStorageResponseFormGroup() {
		return new FormGroup<UpdateLocationObjectStorageResponseFormProperties>({
		});

	}

	export interface UpdateLocationObjectStorageRequest {

		/** Required */
		LocationArn: string;
		ServerPort?: number | null;
		ServerProtocol?: ObjectStorageServerProtocol;
		Subdirectory?: string;
		AccessKey?: string;
		SecretKey?: string;
		AgentArns?: Array<string>;
		ServerCertificate?: string;
	}
	export interface UpdateLocationObjectStorageRequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
		ServerPort: FormControl<number | null | undefined>,
		ServerProtocol: FormControl<ObjectStorageServerProtocol | null | undefined>,
		Subdirectory: FormControl<string | null | undefined>,
		AccessKey: FormControl<string | null | undefined>,
		SecretKey: FormControl<string | null | undefined>,
		ServerCertificate: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLocationObjectStorageRequestFormGroup() {
		return new FormGroup<UpdateLocationObjectStorageRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerPort: new FormControl<number | null | undefined>(undefined),
			ServerProtocol: new FormControl<ObjectStorageServerProtocol | null | undefined>(undefined),
			Subdirectory: new FormControl<string | null | undefined>(undefined),
			AccessKey: new FormControl<string | null | undefined>(undefined),
			SecretKey: new FormControl<string | null | undefined>(undefined),
			ServerCertificate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLocationSmbResponse {
	}
	export interface UpdateLocationSmbResponseFormProperties {
	}
	export function CreateUpdateLocationSmbResponseFormGroup() {
		return new FormGroup<UpdateLocationSmbResponseFormProperties>({
		});

	}

	export interface UpdateLocationSmbRequest {

		/** Required */
		LocationArn: string;
		Subdirectory?: string;
		User?: string;
		Domain?: string;
		Password?: string;
		AgentArns?: Array<string>;

		/** Specifies the version of the Server Message Block (SMB) protocol that DataSync uses to access an SMB file server. */
		MountOptions?: SmbMountOptions;
	}
	export interface UpdateLocationSmbRequestFormProperties {

		/** Required */
		LocationArn: FormControl<string | null | undefined>,
		Subdirectory: FormControl<string | null | undefined>,
		User: FormControl<string | null | undefined>,
		Domain: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLocationSmbRequestFormGroup() {
		return new FormGroup<UpdateLocationSmbRequestFormProperties>({
			LocationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Subdirectory: new FormControl<string | null | undefined>(undefined),
			User: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStorageSystemResponse {
	}
	export interface UpdateStorageSystemResponseFormProperties {
	}
	export function CreateUpdateStorageSystemResponseFormGroup() {
		return new FormGroup<UpdateStorageSystemResponseFormProperties>({
		});

	}

	export interface UpdateStorageSystemRequest {

		/** Required */
		StorageSystemArn: string;
		ServerConfiguration?: DiscoveryServerConfiguration;
		AgentArns?: Array<string>;
		Name?: string;
		CloudWatchLogGroupArn?: string;
		Credentials?: Credentials;
	}
	export interface UpdateStorageSystemRequestFormProperties {

		/** Required */
		StorageSystemArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CloudWatchLogGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStorageSystemRequestFormGroup() {
		return new FormGroup<UpdateStorageSystemRequestFormProperties>({
			StorageSystemArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTaskResponse {
	}
	export interface UpdateTaskResponseFormProperties {
	}
	export function CreateUpdateTaskResponseFormGroup() {
		return new FormGroup<UpdateTaskResponseFormProperties>({
		});

	}


	/** UpdateTaskResponse */
	export interface UpdateTaskRequest {

		/** Required */
		TaskArn: string;

		/** <p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p> */
		Options?: Options;
		Excludes?: Array<FilterRule>;
		Schedule?: TaskSchedule;
		Name?: string;
		CloudWatchLogGroupArn?: string;
		Includes?: Array<FilterRule>;
	}

	/** UpdateTaskResponse */
	export interface UpdateTaskRequestFormProperties {

		/** Required */
		TaskArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CloudWatchLogGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTaskRequestFormGroup() {
		return new FormGroup<UpdateTaskRequestFormProperties>({
			TaskArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTaskExecutionResponse {
	}
	export interface UpdateTaskExecutionResponseFormProperties {
	}
	export function CreateUpdateTaskExecutionResponseFormGroup() {
		return new FormGroup<UpdateTaskExecutionResponseFormProperties>({
		});

	}

	export interface UpdateTaskExecutionRequest {

		/** Required */
		TaskExecutionArn: string;

		/**
		 * <p>Configures your DataSync task settings. These options include how DataSync handles files, objects, and their associated metadata. You also can specify how DataSync verifies data integrity, set bandwidth limits for your task, among other options.</p> <p>Each task setting has a default value. Unless you need to, you don't have to configure any of these <code>Options</code> before starting your task.</p>
		 * Required
		 */
		Options: Options;
	}
	export interface UpdateTaskExecutionRequestFormProperties {

		/** Required */
		TaskExecutionArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTaskExecutionRequestFormGroup() {
		return new FormGroup<UpdateTaskExecutionRequestFormProperties>({
			TaskExecutionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DiscoveryResourceFilter { SVM = 0 }

	export enum Gid { NONE = 0, INT_VALUE = 1, NAME = 2, BOTH = 3 }

	export enum HdfsDataTransferProtection { DISABLED = 0, AUTHENTICATION = 1, INTEGRITY = 2, PRIVACY = 3 }

	export enum PreserveDevices { NONE = 0, PRESERVE = 1 }

	export enum PosixPermissions { NONE = 0, PRESERVE = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an Amazon Web Services resource for an on-premises storage system that you want DataSync Discovery to collect information about.
		 * Post #X-Amz-Target=FmrsService.AddStorageSystem
		 * @return {AddStorageSystemResponse} Success
		 */
		AddStorageSystem(requestBody: AddStorageSystemRequest): Observable<AddStorageSystemResponse> {
			return this.http.post<AddStorageSystemResponse>(this.baseUri + '#X-Amz-Target=FmrsService.AddStorageSystem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops an DataSync task execution that's in progress. The transfer of some files are abruptly interrupted. File contents that're transferred to the destination might be incomplete or inconsistent with the source files.</p> <p>However, if you start a new task execution using the same task and allow it to finish, file content on the destination will be complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task execution.</p>
		 * Post #X-Amz-Target=FmrsService.CancelTaskExecution
		 * @return {CancelTaskExecutionResponse} Success
		 */
		CancelTaskExecution(requestBody: CancelTaskExecutionRequest): Observable<CancelTaskExecutionResponse> {
			return this.http.post<CancelTaskExecutionResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CancelTaskExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Activates an DataSync agent that you've deployed in your storage environment. The activation process associates the agent with your Amazon Web Services account.</p> <p>If you haven't deployed an agent yet, see the following topics to learn more:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/agent-requirements.html">Agent requirements</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/configure-agent.html">Create an agent</a> </p> </li> </ul> <note> <p>If you're transferring between Amazon Web Services storage services, you don't need a DataSync agent. </p> </note>
		 * Post #X-Amz-Target=FmrsService.CreateAgent
		 * @return {CreateAgentResponse} Success
		 */
		CreateAgent(requestBody: CreateAgentRequest): Observable<CreateAgentResponse> {
			return this.http.post<CreateAgentResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateAgent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an endpoint for a Microsoft Azure Blob Storage container that DataSync can use as a transfer source or destination.</p> <p>Before you begin, make sure you know <a href="https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-access">how DataSync accesses Azure Blob Storage</a> and works with <a href="https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-access-tiers">access tiers</a> and <a href="https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#blob-types">blob types</a>. You also need a <a href="https://docs.aws.amazon.com/datasync/latest/userguide/creating-azure-blob-location.html#azure-blob-creating-agent">DataSync agent</a> that can connect to your container.</p>
		 * Post #X-Amz-Target=FmrsService.CreateLocationAzureBlob
		 * @return {CreateLocationAzureBlobResponse} Success
		 */
		CreateLocationAzureBlob(requestBody: CreateLocationAzureBlobRequest): Observable<CreateLocationAzureBlobResponse> {
			return this.http.post<CreateLocationAzureBlobResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateLocationAzureBlob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an endpoint for an Amazon EFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-efs-location.html">Creating a location for Amazon EFS</a>.
		 * Post #X-Amz-Target=FmrsService.CreateLocationEfs
		 * @return {CreateLocationEfsResponse} Success
		 */
		CreateLocationEfs(requestBody: CreateLocationEfsRequest): Observable<CreateLocationEfsResponse> {
			return this.http.post<CreateLocationEfsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateLocationEfs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an endpoint for an Amazon FSx for Lustre file system.
		 * Post #X-Amz-Target=FmrsService.CreateLocationFsxLustre
		 * @return {CreateLocationFsxLustreResponse} Success
		 */
		CreateLocationFsxLustre(requestBody: CreateLocationFsxLustreRequest): Observable<CreateLocationFsxLustreResponse> {
			return this.http.post<CreateLocationFsxLustreResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateLocationFsxLustre', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an endpoint for an Amazon FSx for NetApp ONTAP file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html">Creating a location for FSx for ONTAP</a>.
		 * Post #X-Amz-Target=FmrsService.CreateLocationFsxOntap
		 * @return {CreateLocationFsxOntapResponse} Success
		 */
		CreateLocationFsxOntap(requestBody: CreateLocationFsxOntapRequest): Observable<CreateLocationFsxOntapResponse> {
			return this.http.post<CreateLocationFsxOntapResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateLocationFsxOntap', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an endpoint for an Amazon FSx for OpenZFS file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-openzfs-location.html">Creating a location for FSx for OpenZFS</a>.</p> <note> <p>Request parameters related to <code>SMB</code> aren't supported with the <code>CreateLocationFsxOpenZfs</code> operation.</p> </note>
		 * Post #X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs
		 * @return {CreateLocationFsxOpenZfsResponse} Success
		 */
		CreateLocationFsxOpenZfs(requestBody: CreateLocationFsxOpenZfsRequest): Observable<CreateLocationFsxOpenZfsResponse> {
			return this.http.post<CreateLocationFsxOpenZfsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an endpoint for an Amazon FSx for Windows File Server file system.
		 * Post #X-Amz-Target=FmrsService.CreateLocationFsxWindows
		 * @return {CreateLocationFsxWindowsResponse} Success
		 */
		CreateLocationFsxWindows(requestBody: CreateLocationFsxWindowsRequest): Observable<CreateLocationFsxWindowsResponse> {
			return this.http.post<CreateLocationFsxWindowsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateLocationFsxWindows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an endpoint for a Hadoop Distributed File System (HDFS).
		 * Post #X-Amz-Target=FmrsService.CreateLocationHdfs
		 * @return {CreateLocationHdfsResponse} Success
		 */
		CreateLocationHdfs(requestBody: CreateLocationHdfsRequest): Observable<CreateLocationHdfsResponse> {
			return this.http.post<CreateLocationHdfsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateLocationHdfs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an endpoint for a Network File System (NFS) file server that DataSync can use for a data transfer.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Configuring transfers to or from an NFS file server</a>.</p> <note> <p>If you're copying data to or from an Snowcone device, you can also use <code>CreateLocationNfs</code> to create your transfer location. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/nfs-on-snowcone.html">Configuring transfers with Snowcone</a>.</p> </note>
		 * Post #X-Amz-Target=FmrsService.CreateLocationNfs
		 * @return {CreateLocationNfsResponse} Success
		 */
		CreateLocationNfs(requestBody: CreateLocationNfsRequest): Observable<CreateLocationNfsResponse> {
			return this.http.post<CreateLocationNfsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateLocationNfs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an endpoint for an object storage system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.
		 * Post #X-Amz-Target=FmrsService.CreateLocationObjectStorage
		 * @return {CreateLocationObjectStorageResponse} Success
		 */
		CreateLocationObjectStorage(requestBody: CreateLocationObjectStorageRequest): Observable<CreateLocationObjectStorageResponse> {
			return this.http.post<CreateLocationObjectStorageResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateLocationObjectStorage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>A <i>location</i> is an endpoint for an Amazon S3 bucket. DataSync can use the location as a source or destination for copying data.</p> <important> <p>Before you create your location, make sure that you read the following sections:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes">Storage class considerations with Amazon S3 locations</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">Evaluating S3 request costs when using DataSync</a> </p> </li> </ul> </important> <p> For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli">Creating an Amazon S3 location</a>.</p>
		 * Post #X-Amz-Target=FmrsService.CreateLocationS3
		 * @return {CreateLocationS3Response} Success
		 */
		CreateLocationS3(requestBody: CreateLocationS3Request): Observable<CreateLocationS3Response> {
			return this.http.post<CreateLocationS3Response>(this.baseUri + '#X-Amz-Target=FmrsService.CreateLocationS3', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an endpoint for a Server Message Block (SMB) file server that DataSync can use for a data transfer.</p> <p>Before you begin, make sure that you understand how DataSync <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">accesses an SMB file server</a>.</p>
		 * Post #X-Amz-Target=FmrsService.CreateLocationSmb
		 * @return {CreateLocationSmbResponse} Success
		 */
		CreateLocationSmb(requestBody: CreateLocationSmbRequest): Observable<CreateLocationSmbResponse> {
			return this.http.post<CreateLocationSmbResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateLocationSmb', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Configures a task, which defines where and how DataSync transfers your data.</p> <p>A task includes a source location, a destination location, and the preferences for how and when you want to transfer your data (such as bandwidth limits, scheduling, among other options).</p> <important> <p>If you're planning to transfer data to or from an Amazon S3 location, review <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before you begin.</p> </important>
		 * Post #X-Amz-Target=FmrsService.CreateTask
		 * @return {CreateTaskResponse} Success
		 */
		CreateTask(requestBody: CreateTaskRequest): Observable<CreateTaskResponse> {
			return this.http.post<CreateTaskResponse>(this.baseUri + '#X-Amz-Target=FmrsService.CreateTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your Amazon Web Services account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.
		 * Post #X-Amz-Target=FmrsService.DeleteAgent
		 * @return {DeleteAgentResponse} Success
		 */
		DeleteAgent(requestBody: DeleteAgentRequest): Observable<DeleteAgentResponse> {
			return this.http.post<DeleteAgentResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DeleteAgent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the configuration of a location used by DataSync.
		 * Post #X-Amz-Target=FmrsService.DeleteLocation
		 * @return {DeleteLocationResponse} Success
		 */
		DeleteLocation(requestBody: DeleteLocationRequest): Observable<DeleteLocationResponse> {
			return this.http.post<DeleteLocationResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DeleteLocation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an DataSync task.
		 * Post #X-Amz-Target=FmrsService.DeleteTask
		 * @return {DeleteTaskResponse} Success
		 */
		DeleteTask(requestBody: DeleteTaskRequest): Observable<DeleteTaskResponse> {
			return this.http.post<DeleteTaskResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DeleteTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata about an DataSync agent, such as its name, endpoint type, and status.
		 * Post #X-Amz-Target=FmrsService.DescribeAgent
		 * @return {DescribeAgentResponse} Success
		 */
		DescribeAgent(requestBody: DescribeAgentRequest): Observable<DescribeAgentResponse> {
			return this.http.post<DescribeAgentResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeAgent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a DataSync discovery job.
		 * Post #X-Amz-Target=FmrsService.DescribeDiscoveryJob
		 * @return {DescribeDiscoveryJobResponse} Success
		 */
		DescribeDiscoveryJob(requestBody: DescribeDiscoveryJobRequest): Observable<DescribeDiscoveryJobResponse> {
			return this.http.post<DescribeDiscoveryJobResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeDiscoveryJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides details about how an DataSync transfer location for Microsoft Azure Blob Storage is configured.
		 * Post #X-Amz-Target=FmrsService.DescribeLocationAzureBlob
		 * @return {DescribeLocationAzureBlobResponse} Success
		 */
		DescribeLocationAzureBlob(requestBody: DescribeLocationAzureBlobRequest): Observable<DescribeLocationAzureBlobResponse> {
			return this.http.post<DescribeLocationAzureBlobResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeLocationAzureBlob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata about your DataSync location for an Amazon EFS file system.
		 * Post #X-Amz-Target=FmrsService.DescribeLocationEfs
		 * @return {DescribeLocationEfsResponse} Success
		 */
		DescribeLocationEfs(requestBody: DescribeLocationEfsRequest): Observable<DescribeLocationEfsResponse> {
			return this.http.post<DescribeLocationEfsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeLocationEfs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides details about how an DataSync location for an Amazon FSx for Lustre file system is configured.
		 * Post #X-Amz-Target=FmrsService.DescribeLocationFsxLustre
		 * @return {DescribeLocationFsxLustreResponse} Success
		 */
		DescribeLocationFsxLustre(requestBody: DescribeLocationFsxLustreRequest): Observable<DescribeLocationFsxLustreResponse> {
			return this.http.post<DescribeLocationFsxLustreResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeLocationFsxLustre', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides details about how an DataSync location for an Amazon FSx for NetApp ONTAP file system is configured.</p> <note> <p>If your location uses SMB, the <code>DescribeLocationFsxOntap</code> operation doesn't actually return a <code>Password</code>.</p> </note>
		 * Post #X-Amz-Target=FmrsService.DescribeLocationFsxOntap
		 * @return {DescribeLocationFsxOntapResponse} Success
		 */
		DescribeLocationFsxOntap(requestBody: DescribeLocationFsxOntapRequest): Observable<DescribeLocationFsxOntapResponse> {
			return this.http.post<DescribeLocationFsxOntapResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeLocationFsxOntap', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides details about how an DataSync location for an Amazon FSx for OpenZFS file system is configured.</p> <note> <p>Response elements related to <code>SMB</code> aren't supported with the <code>DescribeLocationFsxOpenZfs</code> operation.</p> </note>
		 * Post #X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs
		 * @return {DescribeLocationFsxOpenZfsResponse} Success
		 */
		DescribeLocationFsxOpenZfs(requestBody: DescribeLocationFsxOpenZfsRequest): Observable<DescribeLocationFsxOpenZfsResponse> {
			return this.http.post<DescribeLocationFsxOpenZfsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata about an Amazon FSx for Windows File Server location, such as information about its path.
		 * Post #X-Amz-Target=FmrsService.DescribeLocationFsxWindows
		 * @return {DescribeLocationFsxWindowsResponse} Success
		 */
		DescribeLocationFsxWindows(requestBody: DescribeLocationFsxWindowsRequest): Observable<DescribeLocationFsxWindowsResponse> {
			return this.http.post<DescribeLocationFsxWindowsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeLocationFsxWindows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata, such as the authentication information about the Hadoop Distributed File System (HDFS) location.
		 * Post #X-Amz-Target=FmrsService.DescribeLocationHdfs
		 * @return {DescribeLocationHdfsResponse} Success
		 */
		DescribeLocationHdfs(requestBody: DescribeLocationHdfsRequest): Observable<DescribeLocationHdfsResponse> {
			return this.http.post<DescribeLocationHdfsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeLocationHdfs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides details about how an DataSync transfer location for a Network File System (NFS) file server is configured.
		 * Post #X-Amz-Target=FmrsService.DescribeLocationNfs
		 * @return {DescribeLocationNfsResponse} Success
		 */
		DescribeLocationNfs(requestBody: DescribeLocationNfsRequest): Observable<DescribeLocationNfsResponse> {
			return this.http.post<DescribeLocationNfsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeLocationNfs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata about your DataSync location for an object storage system.
		 * Post #X-Amz-Target=FmrsService.DescribeLocationObjectStorage
		 * @return {DescribeLocationObjectStorageResponse} Success
		 */
		DescribeLocationObjectStorage(requestBody: DescribeLocationObjectStorageRequest): Observable<DescribeLocationObjectStorageResponse> {
			return this.http.post<DescribeLocationObjectStorageResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeLocationObjectStorage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata, such as bucket name, about an Amazon S3 bucket location.
		 * Post #X-Amz-Target=FmrsService.DescribeLocationS3
		 * @return {DescribeLocationS3Response} Success
		 */
		DescribeLocationS3(requestBody: DescribeLocationS3Request): Observable<DescribeLocationS3Response> {
			return this.http.post<DescribeLocationS3Response>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeLocationS3', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns metadata, such as the path and user information about an SMB location.
		 * Post #X-Amz-Target=FmrsService.DescribeLocationSmb
		 * @return {DescribeLocationSmbResponse} Success
		 */
		DescribeLocationSmb(requestBody: DescribeLocationSmbRequest): Observable<DescribeLocationSmbResponse> {
			return this.http.post<DescribeLocationSmbResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeLocationSmb', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about an on-premises storage system that you're using with DataSync Discovery.
		 * Post #X-Amz-Target=FmrsService.DescribeStorageSystem
		 * @return {DescribeStorageSystemResponse} Success
		 */
		DescribeStorageSystem(requestBody: DescribeStorageSystemRequest): Observable<DescribeStorageSystemResponse> {
			return this.http.post<DescribeStorageSystemResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeStorageSystem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information, including performance data and capacity usage, which DataSync Discovery collects about a specific resource in your-premises storage system.
		 * Post #X-Amz-Target=FmrsService.DescribeStorageSystemResourceMetrics
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeStorageSystemResourceMetricsResponse} Success
		 */
		DescribeStorageSystemResourceMetrics(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeStorageSystemResourceMetricsRequest): Observable<DescribeStorageSystemResourceMetricsResponse> {
			return this.http.post<DescribeStorageSystemResourceMetricsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeStorageSystemResourceMetrics?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information that DataSync Discovery collects about resources in your on-premises storage system.
		 * Post #X-Amz-Target=FmrsService.DescribeStorageSystemResources
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeStorageSystemResourcesResponse} Success
		 */
		DescribeStorageSystemResources(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeStorageSystemResourcesRequest): Observable<DescribeStorageSystemResourcesResponse> {
			return this.http.post<DescribeStorageSystemResourcesResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeStorageSystemResources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information about an DataSync transfer task.
		 * Post #X-Amz-Target=FmrsService.DescribeTask
		 * @return {DescribeTaskResponse} Success
		 */
		DescribeTask(requestBody: DescribeTaskRequest): Observable<DescribeTaskResponse> {
			return this.http.post<DescribeTaskResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information about an DataSync transfer task that's running.
		 * Post #X-Amz-Target=FmrsService.DescribeTaskExecution
		 * @return {DescribeTaskExecutionResponse} Success
		 */
		DescribeTaskExecution(requestBody: DescribeTaskExecutionRequest): Observable<DescribeTaskExecutionResponse> {
			return this.http.post<DescribeTaskExecutionResponse>(this.baseUri + '#X-Amz-Target=FmrsService.DescribeTaskExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates recommendations about where to migrate your data to in Amazon Web Services. Recommendations are generated based on information that DataSync Discovery collects about your on-premises storage system's resources. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-understand-recommendations.html">Recommendations provided by DataSync Discovery</a>.</p> <p>Once generated, you can view your recommendations by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeStorageSystemResources.html">DescribeStorageSystemResources</a> operation.</p> <note> <p>If your <a href="https://docs.aws.amazon.com/datasync/latest/userguide/discovery-job-statuses.html#discovery-job-statuses-table">discovery job completes successfully</a>, you don't need to use this operation. DataSync Discovery generates the recommendations for you automatically.</p> </note>
		 * Post #X-Amz-Target=FmrsService.GenerateRecommendations
		 * @return {GenerateRecommendationsResponse} Success
		 */
		GenerateRecommendations(requestBody: GenerateRecommendationsRequest): Observable<GenerateRecommendationsResponse> {
			return this.http.post<GenerateRecommendationsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.GenerateRecommendations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request.</p> <p>With pagination, you can reduce the number of agents returned in a response. If you get a truncated list of agents in a response, the response contains a marker that you can specify in your next request to fetch the next page of agents.</p> <p> <code>ListAgents</code> is eventually consistent. This means the result of running the operation might not reflect that you just created or deleted an agent. For example, if you create an agent with <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html">CreateAgent</a> and then immediately run <code>ListAgents</code>, that agent might not show up in the list right away. In situations like this, you can always confirm whether an agent has been created (or deleted) by using <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html">DescribeAgent</a>.</p>
		 * Post #X-Amz-Target=FmrsService.ListAgents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAgentsResponse} Success
		 */
		ListAgents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAgentsRequest): Observable<ListAgentsResponse> {
			return this.http.post<ListAgentsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.ListAgents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides a list of the existing discovery jobs in the Amazon Web Services Region and Amazon Web Services account where you're using DataSync Discovery.
		 * Post #X-Amz-Target=FmrsService.ListDiscoveryJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDiscoveryJobsResponse} Success
		 */
		ListDiscoveryJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDiscoveryJobsRequest): Observable<ListDiscoveryJobsResponse> {
			return this.http.post<ListDiscoveryJobsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.ListDiscoveryJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of source and destination locations.</p> <p>If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.</p>
		 * Post #X-Amz-Target=FmrsService.ListLocations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLocationsResponse} Success
		 */
		ListLocations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLocationsRequest): Observable<ListLocationsResponse> {
			return this.http.post<ListLocationsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.ListLocations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the on-premises storage systems that you're using with DataSync Discovery.
		 * Post #X-Amz-Target=FmrsService.ListStorageSystems
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListStorageSystemsResponse} Success
		 */
		ListStorageSystems(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListStorageSystemsRequest): Observable<ListStorageSystemsResponse> {
			return this.http.post<ListStorageSystemsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.ListStorageSystems?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all the tags associated with an Amazon Web Services resource.
		 * Post #X-Amz-Target=FmrsService.ListTagsForResource
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=FmrsService.ListTagsForResource?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of executed tasks.
		 * Post #X-Amz-Target=FmrsService.ListTaskExecutions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTaskExecutionsResponse} Success
		 */
		ListTaskExecutions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTaskExecutionsRequest): Observable<ListTaskExecutionsResponse> {
			return this.http.post<ListTaskExecutionsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.ListTaskExecutions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the DataSync tasks you created.
		 * Post #X-Amz-Target=FmrsService.ListTasks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTasksResponse} Success
		 */
		ListTasks(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTasksRequest): Observable<ListTasksResponse> {
			return this.http.post<ListTasksResponse>(this.baseUri + '#X-Amz-Target=FmrsService.ListTasks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently removes a storage system resource from DataSync Discovery, including the associated discovery jobs, collected data, and recommendations.
		 * Post #X-Amz-Target=FmrsService.RemoveStorageSystem
		 * @return {RemoveStorageSystemResponse} Success
		 */
		RemoveStorageSystem(requestBody: RemoveStorageSystemRequest): Observable<RemoveStorageSystemResponse> {
			return this.http.post<RemoveStorageSystemResponse>(this.baseUri + '#X-Amz-Target=FmrsService.RemoveStorageSystem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs a DataSync discovery job on your on-premises storage system. If you haven't added the storage system to DataSync Discovery yet, do this first by using the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_AddStorageSystem.html">AddStorageSystem</a> operation.
		 * Post #X-Amz-Target=FmrsService.StartDiscoveryJob
		 * @return {StartDiscoveryJobResponse} Success
		 */
		StartDiscoveryJob(requestBody: StartDiscoveryJobRequest): Observable<StartDiscoveryJobResponse> {
			return this.http.post<StartDiscoveryJobResponse>(this.baseUri + '#X-Amz-Target=FmrsService.StartDiscoveryJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts an DataSync task. For each task, you can only run one task execution at a time.</p> <p>There are several phases to a task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#understand-task-execution-statuses">Task execution statuses</a>.</p> <important> <p>If you're planning to transfer data to or from an Amazon S3 location, review <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#create-s3-location-s3-requests">how DataSync can affect your S3 request charges</a> and the <a href="http://aws.amazon.com/datasync/pricing/">DataSync pricing page</a> before you begin.</p> </important>
		 * Post #X-Amz-Target=FmrsService.StartTaskExecution
		 * @return {StartTaskExecutionResponse} Success
		 */
		StartTaskExecution(requestBody: StartTaskExecutionRequest): Observable<StartTaskExecutionResponse> {
			return this.http.post<StartTaskExecutionResponse>(this.baseUri + '#X-Amz-Target=FmrsService.StartTaskExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a running DataSync discovery job.</p> <p>You can stop a discovery job anytime. A job that's stopped before it's scheduled to end likely will provide you some information about your on-premises storage system resources. To get recommendations for a stopped job, you must use the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_GenerateRecommendations.html">GenerateRecommendations</a> operation.</p>
		 * Post #X-Amz-Target=FmrsService.StopDiscoveryJob
		 * @return {StopDiscoveryJobResponse} Success
		 */
		StopDiscoveryJob(requestBody: StopDiscoveryJobRequest): Observable<StopDiscoveryJobResponse> {
			return this.http.post<StopDiscoveryJobResponse>(this.baseUri + '#X-Amz-Target=FmrsService.StopDiscoveryJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Applies a <i>tag</i> to an Amazon Web Services resource. Tags are key-value pairs that can help you manage, filter, and search for your resources.</p> <p>These include DataSync resources, such as locations, tasks, and task executions.</p>
		 * Post #X-Amz-Target=FmrsService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=FmrsService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from an Amazon Web Services resource.
		 * Post #X-Amz-Target=FmrsService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=FmrsService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the name of an agent.
		 * Post #X-Amz-Target=FmrsService.UpdateAgent
		 * @return {UpdateAgentResponse} Success
		 */
		UpdateAgent(requestBody: UpdateAgentRequest): Observable<UpdateAgentResponse> {
			return this.http.post<UpdateAgentResponse>(this.baseUri + '#X-Amz-Target=FmrsService.UpdateAgent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Edits a DataSync discovery job configuration.
		 * Post #X-Amz-Target=FmrsService.UpdateDiscoveryJob
		 * @return {UpdateDiscoveryJobResponse} Success
		 */
		UpdateDiscoveryJob(requestBody: UpdateDiscoveryJobRequest): Observable<UpdateDiscoveryJobResponse> {
			return this.http.post<UpdateDiscoveryJobResponse>(this.baseUri + '#X-Amz-Target=FmrsService.UpdateDiscoveryJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies some configurations of the Microsoft Azure Blob Storage transfer location that you're using with DataSync.
		 * Post #X-Amz-Target=FmrsService.UpdateLocationAzureBlob
		 * @return {UpdateLocationAzureBlobResponse} Success
		 */
		UpdateLocationAzureBlob(requestBody: UpdateLocationAzureBlobRequest): Observable<UpdateLocationAzureBlobResponse> {
			return this.http.post<UpdateLocationAzureBlobResponse>(this.baseUri + '#X-Amz-Target=FmrsService.UpdateLocationAzureBlob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates some parameters of a previously created location for a Hadoop Distributed File System cluster.
		 * Post #X-Amz-Target=FmrsService.UpdateLocationHdfs
		 * @return {UpdateLocationHdfsResponse} Success
		 */
		UpdateLocationHdfs(requestBody: UpdateLocationHdfsRequest): Observable<UpdateLocationHdfsResponse> {
			return this.http.post<UpdateLocationHdfsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.UpdateLocationHdfs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies some configurations of the Network File System (NFS) transfer location that you're using with DataSync.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Configuring transfers to or from an NFS file server</a>.</p>
		 * Post #X-Amz-Target=FmrsService.UpdateLocationNfs
		 * @return {UpdateLocationNfsResponse} Success
		 */
		UpdateLocationNfs(requestBody: UpdateLocationNfsRequest): Observable<UpdateLocationNfsResponse> {
			return this.http.post<UpdateLocationNfsResponse>(this.baseUri + '#X-Amz-Target=FmrsService.UpdateLocationNfs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates some parameters of an existing object storage location that DataSync accesses for a transfer. For information about creating a self-managed object storage location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.
		 * Post #X-Amz-Target=FmrsService.UpdateLocationObjectStorage
		 * @return {UpdateLocationObjectStorageResponse} Success
		 */
		UpdateLocationObjectStorage(requestBody: UpdateLocationObjectStorageRequest): Observable<UpdateLocationObjectStorageResponse> {
			return this.http.post<UpdateLocationObjectStorageResponse>(this.baseUri + '#X-Amz-Target=FmrsService.UpdateLocationObjectStorage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates some of the parameters of a previously created location for Server Message Block (SMB) file system access. For information about creating an SMB location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating a location for SMB</a>.
		 * Post #X-Amz-Target=FmrsService.UpdateLocationSmb
		 * @return {UpdateLocationSmbResponse} Success
		 */
		UpdateLocationSmb(requestBody: UpdateLocationSmbRequest): Observable<UpdateLocationSmbResponse> {
			return this.http.post<UpdateLocationSmbResponse>(this.baseUri + '#X-Amz-Target=FmrsService.UpdateLocationSmb', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies some configurations of an on-premises storage system resource that you're using with DataSync Discovery.
		 * Post #X-Amz-Target=FmrsService.UpdateStorageSystem
		 * @return {UpdateStorageSystemResponse} Success
		 */
		UpdateStorageSystem(requestBody: UpdateStorageSystemRequest): Observable<UpdateStorageSystemResponse> {
			return this.http.post<UpdateStorageSystemResponse>(this.baseUri + '#X-Amz-Target=FmrsService.UpdateStorageSystem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the metadata associated with a task.
		 * Post #X-Amz-Target=FmrsService.UpdateTask
		 * @return {UpdateTaskResponse} Success
		 */
		UpdateTask(requestBody: UpdateTaskRequest): Observable<UpdateTaskResponse> {
			return this.http.post<UpdateTaskResponse>(this.baseUri + '#X-Amz-Target=FmrsService.UpdateTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies a running DataSync task.</p> <note> <p>Currently, the only <code>Option</code> that you can modify with <code>UpdateTaskExecution</code> is <code> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a> </code>, which throttles bandwidth for a running or queued task.</p> </note>
		 * Post #X-Amz-Target=FmrsService.UpdateTaskExecution
		 * @return {UpdateTaskExecutionResponse} Success
		 */
		UpdateTaskExecution(requestBody: UpdateTaskExecutionRequest): Observable<UpdateTaskExecutionResponse> {
			return this.http.post<UpdateTaskExecutionResponse>(this.baseUri + '#X-Amz-Target=FmrsService.UpdateTaskExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddStorageSystemX_Amz_Target { 'FmrsService.AddStorageSystem' = 0 }

	export enum CancelTaskExecutionX_Amz_Target { 'FmrsService.CancelTaskExecution' = 0 }

	export enum CreateAgentX_Amz_Target { 'FmrsService.CreateAgent' = 0 }

	export enum CreateLocationAzureBlobX_Amz_Target { 'FmrsService.CreateLocationAzureBlob' = 0 }

	export enum CreateLocationEfsX_Amz_Target { 'FmrsService.CreateLocationEfs' = 0 }

	export enum CreateLocationFsxLustreX_Amz_Target { 'FmrsService.CreateLocationFsxLustre' = 0 }

	export enum CreateLocationFsxOntapX_Amz_Target { 'FmrsService.CreateLocationFsxOntap' = 0 }

	export enum CreateLocationFsxOpenZfsX_Amz_Target { 'FmrsService.CreateLocationFsxOpenZfs' = 0 }

	export enum CreateLocationFsxWindowsX_Amz_Target { 'FmrsService.CreateLocationFsxWindows' = 0 }

	export enum CreateLocationHdfsX_Amz_Target { 'FmrsService.CreateLocationHdfs' = 0 }

	export enum CreateLocationNfsX_Amz_Target { 'FmrsService.CreateLocationNfs' = 0 }

	export enum CreateLocationObjectStorageX_Amz_Target { 'FmrsService.CreateLocationObjectStorage' = 0 }

	export enum CreateLocationS3X_Amz_Target { 'FmrsService.CreateLocationS3' = 0 }

	export enum CreateLocationSmbX_Amz_Target { 'FmrsService.CreateLocationSmb' = 0 }

	export enum CreateTaskX_Amz_Target { 'FmrsService.CreateTask' = 0 }

	export enum DeleteAgentX_Amz_Target { 'FmrsService.DeleteAgent' = 0 }

	export enum DeleteLocationX_Amz_Target { 'FmrsService.DeleteLocation' = 0 }

	export enum DeleteTaskX_Amz_Target { 'FmrsService.DeleteTask' = 0 }

	export enum DescribeAgentX_Amz_Target { 'FmrsService.DescribeAgent' = 0 }

	export enum DescribeDiscoveryJobX_Amz_Target { 'FmrsService.DescribeDiscoveryJob' = 0 }

	export enum DescribeLocationAzureBlobX_Amz_Target { 'FmrsService.DescribeLocationAzureBlob' = 0 }

	export enum DescribeLocationEfsX_Amz_Target { 'FmrsService.DescribeLocationEfs' = 0 }

	export enum DescribeLocationFsxLustreX_Amz_Target { 'FmrsService.DescribeLocationFsxLustre' = 0 }

	export enum DescribeLocationFsxOntapX_Amz_Target { 'FmrsService.DescribeLocationFsxOntap' = 0 }

	export enum DescribeLocationFsxOpenZfsX_Amz_Target { 'FmrsService.DescribeLocationFsxOpenZfs' = 0 }

	export enum DescribeLocationFsxWindowsX_Amz_Target { 'FmrsService.DescribeLocationFsxWindows' = 0 }

	export enum DescribeLocationHdfsX_Amz_Target { 'FmrsService.DescribeLocationHdfs' = 0 }

	export enum DescribeLocationNfsX_Amz_Target { 'FmrsService.DescribeLocationNfs' = 0 }

	export enum DescribeLocationObjectStorageX_Amz_Target { 'FmrsService.DescribeLocationObjectStorage' = 0 }

	export enum DescribeLocationS3X_Amz_Target { 'FmrsService.DescribeLocationS3' = 0 }

	export enum DescribeLocationSmbX_Amz_Target { 'FmrsService.DescribeLocationSmb' = 0 }

	export enum DescribeStorageSystemX_Amz_Target { 'FmrsService.DescribeStorageSystem' = 0 }

	export enum DescribeStorageSystemResourceMetricsX_Amz_Target { 'FmrsService.DescribeStorageSystemResourceMetrics' = 0 }

	export enum DescribeStorageSystemResourcesX_Amz_Target { 'FmrsService.DescribeStorageSystemResources' = 0 }

	export enum DescribeTaskX_Amz_Target { 'FmrsService.DescribeTask' = 0 }

	export enum DescribeTaskExecutionX_Amz_Target { 'FmrsService.DescribeTaskExecution' = 0 }

	export enum GenerateRecommendationsX_Amz_Target { 'FmrsService.GenerateRecommendations' = 0 }

	export enum ListAgentsX_Amz_Target { 'FmrsService.ListAgents' = 0 }

	export enum ListDiscoveryJobsX_Amz_Target { 'FmrsService.ListDiscoveryJobs' = 0 }

	export enum ListLocationsX_Amz_Target { 'FmrsService.ListLocations' = 0 }

	export enum ListStorageSystemsX_Amz_Target { 'FmrsService.ListStorageSystems' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'FmrsService.ListTagsForResource' = 0 }

	export enum ListTaskExecutionsX_Amz_Target { 'FmrsService.ListTaskExecutions' = 0 }

	export enum ListTasksX_Amz_Target { 'FmrsService.ListTasks' = 0 }

	export enum RemoveStorageSystemX_Amz_Target { 'FmrsService.RemoveStorageSystem' = 0 }

	export enum StartDiscoveryJobX_Amz_Target { 'FmrsService.StartDiscoveryJob' = 0 }

	export enum StartTaskExecutionX_Amz_Target { 'FmrsService.StartTaskExecution' = 0 }

	export enum StopDiscoveryJobX_Amz_Target { 'FmrsService.StopDiscoveryJob' = 0 }

	export enum TagResourceX_Amz_Target { 'FmrsService.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'FmrsService.UntagResource' = 0 }

	export enum UpdateAgentX_Amz_Target { 'FmrsService.UpdateAgent' = 0 }

	export enum UpdateDiscoveryJobX_Amz_Target { 'FmrsService.UpdateDiscoveryJob' = 0 }

	export enum UpdateLocationAzureBlobX_Amz_Target { 'FmrsService.UpdateLocationAzureBlob' = 0 }

	export enum UpdateLocationHdfsX_Amz_Target { 'FmrsService.UpdateLocationHdfs' = 0 }

	export enum UpdateLocationNfsX_Amz_Target { 'FmrsService.UpdateLocationNfs' = 0 }

	export enum UpdateLocationObjectStorageX_Amz_Target { 'FmrsService.UpdateLocationObjectStorage' = 0 }

	export enum UpdateLocationSmbX_Amz_Target { 'FmrsService.UpdateLocationSmb' = 0 }

	export enum UpdateStorageSystemX_Amz_Target { 'FmrsService.UpdateStorageSystem' = 0 }

	export enum UpdateTaskX_Amz_Target { 'FmrsService.UpdateTask' = 0 }

	export enum UpdateTaskExecutionX_Amz_Target { 'FmrsService.UpdateTaskExecution' = 0 }

}

