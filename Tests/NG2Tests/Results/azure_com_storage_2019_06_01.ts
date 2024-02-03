import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The parameters to list SAS credentials of a storage account. */
	export interface AccountSasParameters {

		/** The key to sign the account SAS token with. */
		keyToSign?: string | null;

		/**
		 * The time at which the shared access signature becomes invalid.
		 * Required
		 */
		signedExpiry: Date;

		/** An IP address or a range of IP addresses from which to accept requests. */
		signedIp?: string | null;

		/**
		 * The signed permissions for the account SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p).
		 * Required
		 */
		signedPermission: AccountSasParametersSignedPermission;

		/** The protocol permitted for a request made with the account SAS. */
		signedProtocol?: AccountSasParametersSignedProtocol | null;

		/**
		 * The signed resource types that are accessible with the account SAS. Service (s): Access to service-level APIs; Container (c): Access to container-level APIs; Object (o): Access to object-level APIs for blobs, queue messages, table entities, and files.
		 * Required
		 */
		signedResourceTypes: AccountSasParametersSignedResourceTypes;

		/**
		 * The signed services accessible with the account SAS. Possible values include: Blob (b), Queue (q), Table (t), File (f).
		 * Required
		 */
		signedServices: AccountSasParametersSignedServices;

		/** The time at which the SAS becomes valid. */
		signedStart?: Date | null;
	}

	/** The parameters to list SAS credentials of a storage account. */
	export interface AccountSasParametersFormProperties {

		/** The key to sign the account SAS token with. */
		keyToSign: FormControl<string | null | undefined>,

		/**
		 * The time at which the shared access signature becomes invalid.
		 * Required
		 */
		signedExpiry: FormControl<Date | null | undefined>,

		/** An IP address or a range of IP addresses from which to accept requests. */
		signedIp: FormControl<string | null | undefined>,

		/**
		 * The signed permissions for the account SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p).
		 * Required
		 */
		signedPermission: FormControl<AccountSasParametersSignedPermission | null | undefined>,

		/** The protocol permitted for a request made with the account SAS. */
		signedProtocol: FormControl<AccountSasParametersSignedProtocol | null | undefined>,

		/**
		 * The signed resource types that are accessible with the account SAS. Service (s): Access to service-level APIs; Container (c): Access to container-level APIs; Object (o): Access to object-level APIs for blobs, queue messages, table entities, and files.
		 * Required
		 */
		signedResourceTypes: FormControl<AccountSasParametersSignedResourceTypes | null | undefined>,

		/**
		 * The signed services accessible with the account SAS. Possible values include: Blob (b), Queue (q), Table (t), File (f).
		 * Required
		 */
		signedServices: FormControl<AccountSasParametersSignedServices | null | undefined>,

		/** The time at which the SAS becomes valid. */
		signedStart: FormControl<Date | null | undefined>,
	}
	export function CreateAccountSasParametersFormGroup() {
		return new FormGroup<AccountSasParametersFormProperties>({
			keyToSign: new FormControl<string | null | undefined>(undefined),
			signedExpiry: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			signedIp: new FormControl<string | null | undefined>(undefined),
			signedPermission: new FormControl<AccountSasParametersSignedPermission | null | undefined>(undefined, [Validators.required]),
			signedProtocol: new FormControl<AccountSasParametersSignedProtocol | null | undefined>(undefined),
			signedResourceTypes: new FormControl<AccountSasParametersSignedResourceTypes | null | undefined>(undefined, [Validators.required]),
			signedServices: new FormControl<AccountSasParametersSignedServices | null | undefined>(undefined, [Validators.required]),
			signedStart: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AccountSasParametersSignedPermission { r = 'r', d = 'd', w = 'w', l = 'l', a = 'a', c = 'c', u = 'u', p = 'p' }

	export enum AccountSasParametersSignedProtocol { 'https,http' = 'https,http', https = 'https' }

	export enum AccountSasParametersSignedResourceTypes { s = 's', c = 'c', o = 'o' }

	export enum AccountSasParametersSignedServices { b = 'b', q = 'q', t = 't', f = 'f' }


	/** Settings properties for Active Directory (AD). */
	export interface ActiveDirectoryProperties {

		/**
		 * Specifies the security identifier (SID) for Azure Storage.
		 * Required
		 */
		azureStorageSid: string;

		/**
		 * Specifies the domain GUID.
		 * Required
		 */
		domainGuid: string;

		/**
		 * Specifies the primary domain that the AD DNS server is authoritative for.
		 * Required
		 */
		domainName: string;

		/**
		 * Specifies the security identifier (SID).
		 * Required
		 */
		domainSid: string;

		/**
		 * Specifies the Active Directory forest to get.
		 * Required
		 */
		forestName: string;

		/**
		 * Specifies the NetBIOS domain name.
		 * Required
		 */
		netBiosDomainName: string;
	}

	/** Settings properties for Active Directory (AD). */
	export interface ActiveDirectoryPropertiesFormProperties {

		/**
		 * Specifies the security identifier (SID) for Azure Storage.
		 * Required
		 */
		azureStorageSid: FormControl<string | null | undefined>,

		/**
		 * Specifies the domain GUID.
		 * Required
		 */
		domainGuid: FormControl<string | null | undefined>,

		/**
		 * Specifies the primary domain that the AD DNS server is authoritative for.
		 * Required
		 */
		domainName: FormControl<string | null | undefined>,

		/**
		 * Specifies the security identifier (SID).
		 * Required
		 */
		domainSid: FormControl<string | null | undefined>,

		/**
		 * Specifies the Active Directory forest to get.
		 * Required
		 */
		forestName: FormControl<string | null | undefined>,

		/**
		 * Specifies the NetBIOS domain name.
		 * Required
		 */
		netBiosDomainName: FormControl<string | null | undefined>,
	}
	export function CreateActiveDirectoryPropertiesFormGroup() {
		return new FormGroup<ActiveDirectoryPropertiesFormProperties>({
			azureStorageSid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domainGuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domainSid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			forestName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			netBiosDomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Settings for Azure Files identity based authentication. */
	export interface AzureFilesIdentityBasedAuthentication {

		/** Settings properties for Active Directory (AD). */
		activeDirectoryProperties?: ActiveDirectoryProperties;

		/**
		 * Indicates the directory service used.
		 * Required
		 */
		directoryServiceOptions: AzureFilesIdentityBasedAuthenticationDirectoryServiceOptions;
	}

	/** Settings for Azure Files identity based authentication. */
	export interface AzureFilesIdentityBasedAuthenticationFormProperties {

		/**
		 * Indicates the directory service used.
		 * Required
		 */
		directoryServiceOptions: FormControl<AzureFilesIdentityBasedAuthenticationDirectoryServiceOptions | null | undefined>,
	}
	export function CreateAzureFilesIdentityBasedAuthenticationFormGroup() {
		return new FormGroup<AzureFilesIdentityBasedAuthenticationFormProperties>({
			directoryServiceOptions: new FormControl<AzureFilesIdentityBasedAuthenticationDirectoryServiceOptions | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AzureFilesIdentityBasedAuthenticationDirectoryServiceOptions { None = 'None', AADDS = 'AADDS', AD = 'AD' }


	/** Blob restore parameters */
	export interface BlobRestoreParameters {

		/**
		 * Blob ranges to restore.
		 * Required
		 */
		blobRanges: Array<BlobRestoreRange>;

		/**
		 * Restore blob to the specified time.
		 * Required
		 */
		timeToRestore: Date;
	}

	/** Blob restore parameters */
	export interface BlobRestoreParametersFormProperties {

		/**
		 * Restore blob to the specified time.
		 * Required
		 */
		timeToRestore: FormControl<Date | null | undefined>,
	}
	export function CreateBlobRestoreParametersFormGroup() {
		return new FormGroup<BlobRestoreParametersFormProperties>({
			timeToRestore: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Blob range */
	export interface BlobRestoreRange {

		/**
		 * Blob end range. Empty means account end.
		 * Required
		 */
		endRange: string;

		/**
		 * Blob start range. Empty means account start.
		 * Required
		 */
		startRange: string;
	}

	/** Blob range */
	export interface BlobRestoreRangeFormProperties {

		/**
		 * Blob end range. Empty means account end.
		 * Required
		 */
		endRange: FormControl<string | null | undefined>,

		/**
		 * Blob start range. Empty means account start.
		 * Required
		 */
		startRange: FormControl<string | null | undefined>,
	}
	export function CreateBlobRestoreRangeFormGroup() {
		return new FormGroup<BlobRestoreRangeFormProperties>({
			endRange: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startRange: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Blob restore status. */
	export interface BlobRestoreStatus {

		/** Failure reason when blob restore is failed. */
		failureReason?: string | null;

		/** Blob restore parameters */
		parameters?: BlobRestoreParameters;

		/** Id for tracking blob restore request. */
		restoreId?: string | null;

		/** The status of blob restore progress. Possible values are: - InProgress: Indicates that blob restore is ongoing. - Complete: Indicates that blob restore has been completed successfully. - Failed: Indicates that blob restore is failed. */
		status?: BlobRestoreStatusStatus | null;
	}

	/** Blob restore status. */
	export interface BlobRestoreStatusFormProperties {

		/** Failure reason when blob restore is failed. */
		failureReason: FormControl<string | null | undefined>,

		/** Id for tracking blob restore request. */
		restoreId: FormControl<string | null | undefined>,

		/** The status of blob restore progress. Possible values are: - InProgress: Indicates that blob restore is ongoing. - Complete: Indicates that blob restore has been completed successfully. - Failed: Indicates that blob restore is failed. */
		status: FormControl<BlobRestoreStatusStatus | null | undefined>,
	}
	export function CreateBlobRestoreStatusFormGroup() {
		return new FormGroup<BlobRestoreStatusFormProperties>({
			failureReason: new FormControl<string | null | undefined>(undefined),
			restoreId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<BlobRestoreStatusStatus | null | undefined>(undefined),
		});

	}

	export enum BlobRestoreStatusStatus { InProgress = 'InProgress', Complete = 'Complete', Failed = 'Failed' }


	/** The CheckNameAvailability operation response. */
	export interface CheckNameAvailabilityResult {

		/** Gets an error message explaining the Reason value in more detail. */
		message?: string | null;

		/** Gets a boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or is invalid and cannot be used. */
		nameAvailable?: boolean | null;

		/** Gets the reason that a storage account name could not be used. The Reason element is only returned if NameAvailable is false. */
		reason?: CheckNameAvailabilityResultReason | null;
	}

	/** The CheckNameAvailability operation response. */
	export interface CheckNameAvailabilityResultFormProperties {

		/** Gets an error message explaining the Reason value in more detail. */
		message: FormControl<string | null | undefined>,

		/** Gets a boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or is invalid and cannot be used. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** Gets the reason that a storage account name could not be used. The Reason element is only returned if NameAvailable is false. */
		reason: FormControl<CheckNameAvailabilityResultReason | null | undefined>,
	}
	export function CreateCheckNameAvailabilityResultFormGroup() {
		return new FormGroup<CheckNameAvailabilityResultFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<CheckNameAvailabilityResultReason | null | undefined>(undefined),
		});

	}

	export enum CheckNameAvailabilityResultReason { AccountNameInvalid = 'AccountNameInvalid', AlreadyExists = 'AlreadyExists' }


	/** The custom domain assigned to this storage account. This can be set via Update. */
	export interface CustomDomain {

		/**
		 * Gets or sets the custom domain name assigned to the storage account. Name is the CNAME source.
		 * Required
		 */
		name: string;

		/** Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates. */
		useSubDomainName?: boolean | null;
	}

	/** The custom domain assigned to this storage account. This can be set via Update. */
	export interface CustomDomainFormProperties {

		/**
		 * Gets or sets the custom domain name assigned to the storage account. Name is the CNAME source.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates. */
		useSubDomainName: FormControl<boolean | null | undefined>,
	}
	export function CreateCustomDomainFormGroup() {
		return new FormGroup<CustomDomainFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useSubDomainName: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Object to define the number of days after creation. */
	export interface DateAfterCreation {

		/**
		 * Value indicating the age in days after creation
		 * Required
		 * Minimum: 0
		 */
		daysAfterCreationGreaterThan: number;
	}

	/** Object to define the number of days after creation. */
	export interface DateAfterCreationFormProperties {

		/**
		 * Value indicating the age in days after creation
		 * Required
		 * Minimum: 0
		 */
		daysAfterCreationGreaterThan: FormControl<number | null | undefined>,
	}
	export function CreateDateAfterCreationFormGroup() {
		return new FormGroup<DateAfterCreationFormProperties>({
			daysAfterCreationGreaterThan: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}


	/** Object to define the number of days after last modification. */
	export interface DateAfterModification {

		/**
		 * Value indicating the age in days after last modification
		 * Required
		 * Minimum: 0
		 */
		daysAfterModificationGreaterThan: number;
	}

	/** Object to define the number of days after last modification. */
	export interface DateAfterModificationFormProperties {

		/**
		 * Value indicating the age in days after last modification
		 * Required
		 * Minimum: 0
		 */
		daysAfterModificationGreaterThan: FormControl<number | null | undefined>,
	}
	export function CreateDateAfterModificationFormGroup() {
		return new FormGroup<DateAfterModificationFormProperties>({
			daysAfterModificationGreaterThan: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}


	/** Dimension of blobs, possibly be blob type or access tier. */
	export interface Dimension {

		/** Display name of dimension. */
		displayName?: string | null;

		/** Display name of dimension. */
		name?: string | null;
	}

	/** Dimension of blobs, possibly be blob type or access tier. */
	export interface DimensionFormProperties {

		/** Display name of dimension. */
		displayName: FormControl<string | null | undefined>,

		/** Display name of dimension. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The encryption settings on the storage account. */
	export interface Encryption {

		/**
		 * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault
		 * Required
		 */
		keySource: EncryptionKeySource;

		/** Properties of key vault. */
		keyvaultproperties?: KeyVaultProperties;

		/** A list of services that support encryption. */
		services?: EncryptionServices;
	}

	/** The encryption settings on the storage account. */
	export interface EncryptionFormProperties {

		/**
		 * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault
		 * Required
		 */
		keySource: FormControl<EncryptionKeySource | null | undefined>,
	}
	export function CreateEncryptionFormGroup() {
		return new FormGroup<EncryptionFormProperties>({
			keySource: new FormControl<EncryptionKeySource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EncryptionKeySource { 'Microsoft.Storage' = 'Microsoft.Storage', 'Microsoft.Keyvault' = 'Microsoft.Keyvault' }


	/** A service that allows server-side encryption to be used. */
	export interface EncryptionService {

		/** A boolean indicating whether or not the service encrypts the data as it is stored. */
		enabled?: boolean | null;

		/** Encryption key type to be used for the encryption service. 'Account' key type implies that an account-scoped encryption key will be used. 'Service' key type implies that a default service key is used. */
		keyType?: EncryptionServiceKeyType | null;

		/** Gets a rough estimate of the date/time when the encryption was last enabled by the user. Only returned when encryption is enabled. There might be some unencrypted blobs which were written after this time, as it is just a rough estimate. */
		lastEnabledTime?: Date | null;
	}

	/** A service that allows server-side encryption to be used. */
	export interface EncryptionServiceFormProperties {

		/** A boolean indicating whether or not the service encrypts the data as it is stored. */
		enabled: FormControl<boolean | null | undefined>,

		/** Encryption key type to be used for the encryption service. 'Account' key type implies that an account-scoped encryption key will be used. 'Service' key type implies that a default service key is used. */
		keyType: FormControl<EncryptionServiceKeyType | null | undefined>,

		/** Gets a rough estimate of the date/time when the encryption was last enabled by the user. Only returned when encryption is enabled. There might be some unencrypted blobs which were written after this time, as it is just a rough estimate. */
		lastEnabledTime: FormControl<Date | null | undefined>,
	}
	export function CreateEncryptionServiceFormGroup() {
		return new FormGroup<EncryptionServiceFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			keyType: new FormControl<EncryptionServiceKeyType | null | undefined>(undefined),
			lastEnabledTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EncryptionServiceKeyType { Service = 'Service', Account = 'Account' }


	/** A list of services that support encryption. */
	export interface EncryptionServices {

		/** A service that allows server-side encryption to be used. */
		blob?: EncryptionService;

		/** A service that allows server-side encryption to be used. */
		file?: EncryptionService;

		/** A service that allows server-side encryption to be used. */
		queue?: EncryptionService;

		/** A service that allows server-side encryption to be used. */
		table?: EncryptionService;
	}

	/** A list of services that support encryption. */
	export interface EncryptionServicesFormProperties {
	}
	export function CreateEncryptionServicesFormGroup() {
		return new FormGroup<EncryptionServicesFormProperties>({
		});

	}


	/** The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object. */
	export interface Endpoints {

		/** Gets the blob endpoint. */
		blob?: string | null;

		/** Gets the dfs endpoint. */
		dfs?: string | null;

		/** Gets the file endpoint. */
		file?: string | null;

		/** The URIs that are used to perform a retrieval of a public blob, file, web or dfs object via a internet routing endpoint. */
		internetEndpoints?: StorageAccountInternetEndpoints;

		/** The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object via a microsoft routing endpoint. */
		microsoftEndpoints?: StorageAccountMicrosoftEndpoints;

		/** Gets the queue endpoint. */
		queue?: string | null;

		/** Gets the table endpoint. */
		table?: string | null;

		/** Gets the web endpoint. */
		web?: string | null;
	}

	/** The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object. */
	export interface EndpointsFormProperties {

		/** Gets the blob endpoint. */
		blob: FormControl<string | null | undefined>,

		/** Gets the dfs endpoint. */
		dfs: FormControl<string | null | undefined>,

		/** Gets the file endpoint. */
		file: FormControl<string | null | undefined>,

		/** Gets the queue endpoint. */
		queue: FormControl<string | null | undefined>,

		/** Gets the table endpoint. */
		table: FormControl<string | null | undefined>,

		/** Gets the web endpoint. */
		web: FormControl<string | null | undefined>,
	}
	export function CreateEndpointsFormGroup() {
		return new FormGroup<EndpointsFormProperties>({
			blob: new FormControl<string | null | undefined>(undefined),
			dfs: new FormControl<string | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
			queue: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			web: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error response from the storage resource provider. */
	export interface ErrorResponse {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;
	}

	/** An error response from the storage resource provider. */
	export interface ErrorResponseFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistics related to replication for storage account's Blob, Table, Queue and File services. It is only available when geo-redundant replication is enabled for the storage account. */
	export interface GeoReplicationStats {

		/** A boolean flag which indicates whether or not account failover is supported for the account. */
		canFailover?: boolean | null;

		/** All primary writes preceding this UTC date/time value are guaranteed to be available for read operations. Primary writes following this point in time may or may not be available for reads. Element may be default value if value of LastSyncTime is not available, this can happen if secondary is offline or we are in bootstrap. */
		lastSyncTime?: Date | null;

		/** The status of the secondary location. Possible values are: - Live: Indicates that the secondary location is active and operational. - Bootstrap: Indicates initial synchronization from the primary location to the secondary location is in progress.This typically occurs when replication is first enabled. - Unavailable: Indicates that the secondary location is temporarily unavailable. */
		status?: GeoReplicationStatsStatus | null;
	}

	/** Statistics related to replication for storage account's Blob, Table, Queue and File services. It is only available when geo-redundant replication is enabled for the storage account. */
	export interface GeoReplicationStatsFormProperties {

		/** A boolean flag which indicates whether or not account failover is supported for the account. */
		canFailover: FormControl<boolean | null | undefined>,

		/** All primary writes preceding this UTC date/time value are guaranteed to be available for read operations. Primary writes following this point in time may or may not be available for reads. Element may be default value if value of LastSyncTime is not available, this can happen if secondary is offline or we are in bootstrap. */
		lastSyncTime: FormControl<Date | null | undefined>,

		/** The status of the secondary location. Possible values are: - Live: Indicates that the secondary location is active and operational. - Bootstrap: Indicates initial synchronization from the primary location to the secondary location is in progress.This typically occurs when replication is first enabled. - Unavailable: Indicates that the secondary location is temporarily unavailable. */
		status: FormControl<GeoReplicationStatsStatus | null | undefined>,
	}
	export function CreateGeoReplicationStatsFormGroup() {
		return new FormGroup<GeoReplicationStatsFormProperties>({
			canFailover: new FormControl<boolean | null | undefined>(undefined),
			lastSyncTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<GeoReplicationStatsStatus | null | undefined>(undefined),
		});

	}

	export enum GeoReplicationStatsStatus { Live = 'Live', Bootstrap = 'Bootstrap', Unavailable = 'Unavailable' }


	/** IP rule with specific IP or IP range in CIDR format. */
	export interface IPRule {

		/** The action of IP ACL rule. */
		action?: IPRuleAction | null;

		/**
		 * Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
		 * Required
		 */
		value: string;
	}

	/** IP rule with specific IP or IP range in CIDR format. */
	export interface IPRuleFormProperties {

		/** The action of IP ACL rule. */
		action: FormControl<IPRuleAction | null | undefined>,

		/**
		 * Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateIPRuleFormGroup() {
		return new FormGroup<IPRuleFormProperties>({
			action: new FormControl<IPRuleAction | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IPRuleAction { Allow = 'Allow' }


	/** Identity for the resource. */
	export interface Identity {

		/** The principal ID of resource identity. */
		principalId?: string | null;

		/** The tenant ID of resource. */
		tenantId?: string | null;

		/**
		 * The identity type.
		 * Required
		 */
		type: IdentityType;
	}

	/** Identity for the resource. */
	export interface IdentityFormProperties {

		/** The principal ID of resource identity. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant ID of resource. */
		tenantId: FormControl<string | null | undefined>,

		/**
		 * The identity type.
		 * Required
		 */
		type: FormControl<IdentityType | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IdentityType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IdentityType { SystemAssigned = 'SystemAssigned' }


	/** Properties of key vault. */
	export interface KeyVaultProperties {

		/** The name of KeyVault key. */
		keyname?: string | null;

		/** The Uri of KeyVault. */
		keyvaulturi?: string | null;

		/** The version of KeyVault key. */
		keyversion?: string | null;
	}

	/** Properties of key vault. */
	export interface KeyVaultPropertiesFormProperties {

		/** The name of KeyVault key. */
		keyname: FormControl<string | null | undefined>,

		/** The Uri of KeyVault. */
		keyvaulturi: FormControl<string | null | undefined>,

		/** The version of KeyVault key. */
		keyversion: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultPropertiesFormGroup() {
		return new FormGroup<KeyVaultPropertiesFormProperties>({
			keyname: new FormControl<string | null | undefined>(undefined),
			keyvaulturi: new FormControl<string | null | undefined>(undefined),
			keyversion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List SAS credentials operation response. */
	export interface ListAccountSasResponse {

		/** List SAS credentials of storage account. */
		accountSasToken?: string | null;
	}

	/** The List SAS credentials operation response. */
	export interface ListAccountSasResponseFormProperties {

		/** List SAS credentials of storage account. */
		accountSasToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountSasResponseFormGroup() {
		return new FormGroup<ListAccountSasResponseFormProperties>({
			accountSasToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The List service SAS credentials operation response. */
	export interface ListServiceSasResponse {

		/** List service SAS credentials of specific resource. */
		serviceSasToken?: string | null;
	}

	/** The List service SAS credentials operation response. */
	export interface ListServiceSasResponseFormProperties {

		/** List service SAS credentials of specific resource. */
		serviceSasToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceSasResponseFormGroup() {
		return new FormGroup<ListServiceSasResponseFormProperties>({
			serviceSasToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManagementPolicy {
	}
	export interface ManagementPolicyFormProperties {
	}
	export function CreateManagementPolicyFormGroup() {
		return new FormGroup<ManagementPolicyFormProperties>({
		});

	}


	/** Actions are applied to the filtered blobs when the execution condition is met. */
	export interface ManagementPolicyAction {

		/** Management policy action for base blob. */
		baseBlob?: ManagementPolicyBaseBlob;

		/** Management policy action for snapshot. */
		snapshot?: ManagementPolicySnapShot;
	}

	/** Actions are applied to the filtered blobs when the execution condition is met. */
	export interface ManagementPolicyActionFormProperties {
	}
	export function CreateManagementPolicyActionFormGroup() {
		return new FormGroup<ManagementPolicyActionFormProperties>({
		});

	}


	/** Management policy action for base blob. */
	export interface ManagementPolicyBaseBlob {

		/** Object to define the number of days after last modification. */
		delete?: DateAfterModification;

		/** Object to define the number of days after last modification. */
		tierToArchive?: DateAfterModification;

		/** Object to define the number of days after last modification. */
		tierToCool?: DateAfterModification;
	}

	/** Management policy action for base blob. */
	export interface ManagementPolicyBaseBlobFormProperties {
	}
	export function CreateManagementPolicyBaseBlobFormGroup() {
		return new FormGroup<ManagementPolicyBaseBlobFormProperties>({
		});

	}


	/** An object that defines the Lifecycle rule. Each definition is made up with a filters set and an actions set. */
	export interface ManagementPolicyDefinition {

		/**
		 * Actions are applied to the filtered blobs when the execution condition is met.
		 * Required
		 */
		actions: ManagementPolicyAction;

		/** Filters limit rule actions to a subset of blobs within the storage account. If multiple filters are defined, a logical AND is performed on all filters. */
		filters?: ManagementPolicyFilter;
	}

	/** An object that defines the Lifecycle rule. Each definition is made up with a filters set and an actions set. */
	export interface ManagementPolicyDefinitionFormProperties {
	}
	export function CreateManagementPolicyDefinitionFormGroup() {
		return new FormGroup<ManagementPolicyDefinitionFormProperties>({
		});

	}


	/** Filters limit rule actions to a subset of blobs within the storage account. If multiple filters are defined, a logical AND is performed on all filters.  */
	export interface ManagementPolicyFilter {

		/**
		 * An array of predefined enum values. Only blockBlob is supported.
		 * Required
		 */
		blobTypes: Array<string>;

		/** An array of strings for prefixes to be match. */
		prefixMatch?: Array<string>;
	}

	/** Filters limit rule actions to a subset of blobs within the storage account. If multiple filters are defined, a logical AND is performed on all filters.  */
	export interface ManagementPolicyFilterFormProperties {
	}
	export function CreateManagementPolicyFilterFormGroup() {
		return new FormGroup<ManagementPolicyFilterFormProperties>({
		});

	}


	/** The Storage Account ManagementPolicy properties. */
	export interface ManagementPolicyProperties {

		/** Returns the date and time the ManagementPolicies was last modified. */
		lastModifiedTime?: Date | null;

		/**
		 * The Storage Account ManagementPolicies Rules. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.
		 * Required
		 */
		policy: ManagementPolicySchema;
	}

	/** The Storage Account ManagementPolicy properties. */
	export interface ManagementPolicyPropertiesFormProperties {

		/** Returns the date and time the ManagementPolicies was last modified. */
		lastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateManagementPolicyPropertiesFormGroup() {
		return new FormGroup<ManagementPolicyPropertiesFormProperties>({
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An object that wraps the Lifecycle rule. Each rule is uniquely defined by name. */
	export interface ManagementPolicyRule {

		/**
		 * An object that defines the Lifecycle rule. Each definition is made up with a filters set and an actions set.
		 * Required
		 */
		definition: ManagementPolicyDefinition;

		/** Rule is enabled if set to true. */
		enabled?: boolean | null;

		/**
		 * A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy.
		 * Required
		 */
		name: string;

		/**
		 * The valid value is Lifecycle
		 * Required
		 */
		type: ManagementPolicyRuleType;
	}

	/** An object that wraps the Lifecycle rule. Each rule is uniquely defined by name. */
	export interface ManagementPolicyRuleFormProperties {

		/** Rule is enabled if set to true. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The valid value is Lifecycle
		 * Required
		 */
		type: FormControl<ManagementPolicyRuleType | null | undefined>,
	}
	export function CreateManagementPolicyRuleFormGroup() {
		return new FormGroup<ManagementPolicyRuleFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ManagementPolicyRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ManagementPolicyRuleType { Lifecycle = 'Lifecycle' }


	/** The Storage Account ManagementPolicies Rules. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts. */
	export interface ManagementPolicySchema {

		/**
		 * The Storage Account ManagementPolicies Rules. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.
		 * Required
		 */
		rules: Array<ManagementPolicyRule>;
	}

	/** The Storage Account ManagementPolicies Rules. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts. */
	export interface ManagementPolicySchemaFormProperties {
	}
	export function CreateManagementPolicySchemaFormGroup() {
		return new FormGroup<ManagementPolicySchemaFormProperties>({
		});

	}


	/** Management policy action for snapshot. */
	export interface ManagementPolicySnapShot {

		/** Object to define the number of days after creation. */
		delete?: DateAfterCreation;
	}

	/** Management policy action for snapshot. */
	export interface ManagementPolicySnapShotFormProperties {
	}
	export function CreateManagementPolicySnapShotFormGroup() {
		return new FormGroup<ManagementPolicySnapShotFormProperties>({
		});

	}


	/** Metric specification of operation. */
	export interface MetricSpecification {

		/** Aggregation type could be Average. */
		aggregationType?: string | null;

		/** The category this metric specification belong to, could be Capacity. */
		category?: string | null;

		/** Dimensions of blobs, including blob type and access tier. */
		dimensions?: Array<Dimension>;

		/** Display description of metric specification. */
		displayDescription?: string | null;

		/** Display name of metric specification. */
		displayName?: string | null;

		/** The property to decide fill gap with zero or not. */
		fillGapWithZero?: boolean | null;

		/** Name of metric specification. */
		name?: string | null;

		/** Account Resource Id. */
		resourceIdDimensionNameOverride?: string | null;

		/** Unit could be Bytes or Count. */
		unit?: string | null;
	}

	/** Metric specification of operation. */
	export interface MetricSpecificationFormProperties {

		/** Aggregation type could be Average. */
		aggregationType: FormControl<string | null | undefined>,

		/** The category this metric specification belong to, could be Capacity. */
		category: FormControl<string | null | undefined>,

		/** Display description of metric specification. */
		displayDescription: FormControl<string | null | undefined>,

		/** Display name of metric specification. */
		displayName: FormControl<string | null | undefined>,

		/** The property to decide fill gap with zero or not. */
		fillGapWithZero: FormControl<boolean | null | undefined>,

		/** Name of metric specification. */
		name: FormControl<string | null | undefined>,

		/** Account Resource Id. */
		resourceIdDimensionNameOverride: FormControl<string | null | undefined>,

		/** Unit could be Bytes or Count. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateMetricSpecificationFormGroup() {
		return new FormGroup<MetricSpecificationFormProperties>({
			aggregationType: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			displayDescription: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			fillGapWithZero: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceIdDimensionNameOverride: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Network rule set */
	export interface NetworkRuleSet {

		/** Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging|Metrics|AzureServices (For example, "Logging, Metrics"), or None to bypass none of those traffics. */
		bypass?: NetworkRuleSetBypass | null;

		/**
		 * Specifies the default action of allow or deny when no other rules match.
		 * Required
		 */
		defaultAction: NetworkRuleSetDefaultAction;

		/** Sets the IP ACL rules */
		ipRules?: Array<IPRule>;

		/** Sets the virtual network rules */
		virtualNetworkRules?: Array<VirtualNetworkRule>;
	}

	/** Network rule set */
	export interface NetworkRuleSetFormProperties {

		/** Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging|Metrics|AzureServices (For example, "Logging, Metrics"), or None to bypass none of those traffics. */
		bypass: FormControl<NetworkRuleSetBypass | null | undefined>,

		/**
		 * Specifies the default action of allow or deny when no other rules match.
		 * Required
		 */
		defaultAction: FormControl<NetworkRuleSetDefaultAction | null | undefined>,
	}
	export function CreateNetworkRuleSetFormGroup() {
		return new FormGroup<NetworkRuleSetFormProperties>({
			bypass: new FormControl<NetworkRuleSetBypass | null | undefined>(undefined),
			defaultAction: new FormControl<NetworkRuleSetDefaultAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NetworkRuleSetBypass { None = 'None', Logging = 'Logging', Metrics = 'Metrics', AzureServices = 'AzureServices' }

	export enum NetworkRuleSetDefaultAction { Allow = 'Allow', Deny = 'Deny' }


	/** Virtual Network rule. */
	export interface VirtualNetworkRule {

		/** The action of virtual network rule. */
		action?: IPRuleAction | null;

		/**
		 * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
		 * Required
		 */
		id: string;

		/** Gets the state of virtual network rule. */
		state?: VirtualNetworkRuleState | null;
	}

	/** Virtual Network rule. */
	export interface VirtualNetworkRuleFormProperties {

		/** The action of virtual network rule. */
		action: FormControl<IPRuleAction | null | undefined>,

		/**
		 * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Gets the state of virtual network rule. */
		state: FormControl<VirtualNetworkRuleState | null | undefined>,
	}
	export function CreateVirtualNetworkRuleFormGroup() {
		return new FormGroup<VirtualNetworkRuleFormProperties>({
			action: new FormControl<IPRuleAction | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<VirtualNetworkRuleState | null | undefined>(undefined),
		});

	}

	export enum VirtualNetworkRuleState { provisioning = 'provisioning', deprovisioning = 'deprovisioning', succeeded = 'succeeded', failed = 'failed', networkSourceDeleted = 'networkSourceDeleted' }


	/** Storage REST API operation definition. */
	export interface Operation {

		/** Display metadata associated with the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;

		/** The origin of operations. */
		origin?: string | null;

		/** Properties of operation, include metric specifications. */
		properties?: OperationProperties;
	}

	/** Storage REST API operation definition. */
	export interface OperationFormProperties {

		/** Display metadata associated with the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,

		/** The origin of operations. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Storage operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** List of Storage operations supported by the Storage resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Storage operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
		});

	}


	/** Properties of operation, include metric specifications. */
	export interface OperationProperties {

		/** One property of operation, include metric specifications. */
		serviceSpecification?: ServiceSpecification;
	}

	/** Properties of operation, include metric specifications. */
	export interface OperationPropertiesFormProperties {
	}
	export function CreateOperationPropertiesFormGroup() {
		return new FormGroup<OperationPropertiesFormProperties>({
		});

	}


	/** The Private Endpoint resource. */
	export interface PrivateEndpoint {

		/** The ARM identifier for Private Endpoint */
		id?: string | null;
	}

	/** The Private Endpoint resource. */
	export interface PrivateEndpointFormProperties {

		/** The ARM identifier for Private Endpoint */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePrivateEndpointFormGroup() {
		return new FormGroup<PrivateEndpointFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PrivateEndpointConnection {
	}
	export interface PrivateEndpointConnectionFormProperties {
	}
	export function CreatePrivateEndpointConnectionFormGroup() {
		return new FormGroup<PrivateEndpointConnectionFormProperties>({
		});

	}


	/** Properties of the PrivateEndpointConnectProperties. */
	export interface PrivateEndpointConnectionProperties {

		/** The Private Endpoint resource. */
		privateEndpoint?: PrivateEndpoint;

		/**
		 * A collection of information about the state of the connection between service consumer and provider.
		 * Required
		 */
		privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;

		/** The current provisioning state. */
		provisioningState?: PrivateEndpointConnectionPropertiesProvisioningState | null;
	}

	/** Properties of the PrivateEndpointConnectProperties. */
	export interface PrivateEndpointConnectionPropertiesFormProperties {

		/** The current provisioning state. */
		provisioningState: FormControl<PrivateEndpointConnectionPropertiesProvisioningState | null | undefined>,
	}
	export function CreatePrivateEndpointConnectionPropertiesFormGroup() {
		return new FormGroup<PrivateEndpointConnectionPropertiesFormProperties>({
			provisioningState: new FormControl<PrivateEndpointConnectionPropertiesProvisioningState | null | undefined>(undefined),
		});

	}

	export enum PrivateEndpointConnectionPropertiesProvisioningState { Succeeded = 'Succeeded', Creating = 'Creating', Deleting = 'Deleting', Failed = 'Failed' }


	/** The current provisioning state. */
	export enum PrivateEndpointConnectionProvisioningState { Succeeded = 'Succeeded', Creating = 'Creating', Deleting = 'Deleting', Failed = 'Failed' }


	/** The private endpoint connection status. */
	export enum PrivateEndpointServiceConnectionStatus { Pending = 'Pending', Approved = 'Approved', Rejected = 'Rejected' }

	export interface PrivateLinkResource {
	}
	export interface PrivateLinkResourceFormProperties {
	}
	export function CreatePrivateLinkResourceFormGroup() {
		return new FormGroup<PrivateLinkResourceFormProperties>({
		});

	}


	/** A list of private link resources */
	export interface PrivateLinkResourceListResult {

		/** Array of private link resources */
		value?: Array<PrivateLinkResource>;
	}

	/** A list of private link resources */
	export interface PrivateLinkResourceListResultFormProperties {
	}
	export function CreatePrivateLinkResourceListResultFormGroup() {
		return new FormGroup<PrivateLinkResourceListResultFormProperties>({
		});

	}


	/** Properties of a private link resource. */
	export interface PrivateLinkResourceProperties {

		/** The private link resource group id. */
		groupId?: string | null;

		/** The private link resource required member names. */
		requiredMembers?: Array<string>;

		/** The private link resource Private link DNS zone name. */
		requiredZoneNames?: Array<string>;
	}

	/** Properties of a private link resource. */
	export interface PrivateLinkResourcePropertiesFormProperties {

		/** The private link resource group id. */
		groupId: FormControl<string | null | undefined>,
	}
	export function CreatePrivateLinkResourcePropertiesFormGroup() {
		return new FormGroup<PrivateLinkResourcePropertiesFormProperties>({
			groupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of information about the state of the connection between service consumer and provider. */
	export interface PrivateLinkServiceConnectionState {

		/** A message indicating if changes on the service provider require any updates on the consumer. */
		actionRequired?: string | null;

		/** The reason for approval/rejection of the connection. */
		description?: string | null;

		/** The private endpoint connection status. */
		status?: PrivateEndpointServiceConnectionStatus | null;
	}

	/** A collection of information about the state of the connection between service consumer and provider. */
	export interface PrivateLinkServiceConnectionStateFormProperties {

		/** A message indicating if changes on the service provider require any updates on the consumer. */
		actionRequired: FormControl<string | null | undefined>,

		/** The reason for approval/rejection of the connection. */
		description: FormControl<string | null | undefined>,

		/** The private endpoint connection status. */
		status: FormControl<PrivateEndpointServiceConnectionStatus | null | undefined>,
	}
	export function CreatePrivateLinkServiceConnectionStateFormGroup() {
		return new FormGroup<PrivateLinkServiceConnectionStateFormProperties>({
			actionRequired: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PrivateEndpointServiceConnectionStatus | null | undefined>(undefined),
		});

	}


	/** The restriction because of which SKU cannot be used. */
	export interface Restriction {

		/** The reason for the restriction. As of now this can be "QuotaId" or "NotAvailableForSubscription". Quota Id is set when the SKU has requiredQuotas parameter as the subscription does not belong to that quota. The "NotAvailableForSubscription" is related to capacity at DC. */
		reasonCode?: RestrictionReasonCode | null;

		/** The type of restrictions. As of now only possible value for this is location. */
		type?: string | null;

		/** The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted. */
		values?: Array<string>;
	}

	/** The restriction because of which SKU cannot be used. */
	export interface RestrictionFormProperties {

		/** The reason for the restriction. As of now this can be "QuotaId" or "NotAvailableForSubscription". Quota Id is set when the SKU has requiredQuotas parameter as the subscription does not belong to that quota. The "NotAvailableForSubscription" is related to capacity at DC. */
		reasonCode: FormControl<RestrictionReasonCode | null | undefined>,

		/** The type of restrictions. As of now only possible value for this is location. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRestrictionFormGroup() {
		return new FormGroup<RestrictionFormProperties>({
			reasonCode: new FormControl<RestrictionReasonCode | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RestrictionReasonCode { QuotaId = 'QuotaId', NotAvailableForSubscription = 'NotAvailableForSubscription' }


	/** Routing preference defines the type of network, either microsoft or internet routing to be used to deliver the user data, the default option is microsoft routing */
	export interface RoutingPreference {

		/** A boolean flag which indicates whether internet routing storage endpoints are to be published */
		publishInternetEndpoints?: boolean | null;

		/** A boolean flag which indicates whether microsoft routing storage endpoints are to be published */
		publishMicrosoftEndpoints?: boolean | null;

		/** Routing Choice defines the kind of network routing opted by the user. */
		routingChoice?: RoutingPreferenceRoutingChoice | null;
	}

	/** Routing preference defines the type of network, either microsoft or internet routing to be used to deliver the user data, the default option is microsoft routing */
	export interface RoutingPreferenceFormProperties {

		/** A boolean flag which indicates whether internet routing storage endpoints are to be published */
		publishInternetEndpoints: FormControl<boolean | null | undefined>,

		/** A boolean flag which indicates whether microsoft routing storage endpoints are to be published */
		publishMicrosoftEndpoints: FormControl<boolean | null | undefined>,

		/** Routing Choice defines the kind of network routing opted by the user. */
		routingChoice: FormControl<RoutingPreferenceRoutingChoice | null | undefined>,
	}
	export function CreateRoutingPreferenceFormGroup() {
		return new FormGroup<RoutingPreferenceFormProperties>({
			publishInternetEndpoints: new FormControl<boolean | null | undefined>(undefined),
			publishMicrosoftEndpoints: new FormControl<boolean | null | undefined>(undefined),
			routingChoice: new FormControl<RoutingPreferenceRoutingChoice | null | undefined>(undefined),
		});

	}

	export enum RoutingPreferenceRoutingChoice { MicrosoftRouting = 'MicrosoftRouting', InternetRouting = 'InternetRouting' }


	/** The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc. */
	export interface SKUCapability {

		/** The name of capability, The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc. */
		name?: string | null;

		/** A string value to indicate states of given capability. Possibly 'true' or 'false'. */
		value?: string | null;
	}

	/** The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc. */
	export interface SKUCapabilityFormProperties {

		/** The name of capability, The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc. */
		name: FormControl<string | null | undefined>,

		/** A string value to indicate states of given capability. Possibly 'true' or 'false'. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSKUCapabilityFormGroup() {
		return new FormGroup<SKUCapabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters to list service SAS credentials of a specific resource. */
	export interface ServiceSasParameters {

		/**
		 * The canonical path to the signed resource.
		 * Required
		 */
		canonicalizedResource: string;

		/** The end of partition key. */
		endPk?: string | null;

		/** The end of row key. */
		endRk?: string | null;

		/** The key to sign the account SAS token with. */
		keyToSign?: string | null;

		/** The response header override for cache control. */
		rscc?: string | null;

		/** The response header override for content disposition. */
		rscd?: string | null;

		/** The response header override for content encoding. */
		rsce?: string | null;

		/** The response header override for content language. */
		rscl?: string | null;

		/** The response header override for content type. */
		rsct?: string | null;

		/** The time at which the shared access signature becomes invalid. */
		signedExpiry?: Date | null;

		/**
		 * A unique value up to 64 characters in length that correlates to an access policy specified for the container, queue, or table.
		 * Max length: 64
		 */
		signedIdentifier?: string | null;

		/** An IP address or a range of IP addresses from which to accept requests. */
		signedIp?: string | null;

		/** The signed permissions for the service SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p). */
		signedPermission?: AccountSasParametersSignedPermission | null;

		/** The protocol permitted for a request made with the account SAS. */
		signedProtocol?: AccountSasParametersSignedProtocol | null;

		/** The signed services accessible with the service SAS. Possible values include: Blob (b), Container (c), File (f), Share (s). */
		signedResource?: ServiceSasParametersSignedResource | null;

		/** The time at which the SAS becomes valid. */
		signedStart?: Date | null;

		/** The start of partition key. */
		startPk?: string | null;

		/** The start of row key. */
		startRk?: string | null;
	}

	/** The parameters to list service SAS credentials of a specific resource. */
	export interface ServiceSasParametersFormProperties {

		/**
		 * The canonical path to the signed resource.
		 * Required
		 */
		canonicalizedResource: FormControl<string | null | undefined>,

		/** The end of partition key. */
		endPk: FormControl<string | null | undefined>,

		/** The end of row key. */
		endRk: FormControl<string | null | undefined>,

		/** The key to sign the account SAS token with. */
		keyToSign: FormControl<string | null | undefined>,

		/** The response header override for cache control. */
		rscc: FormControl<string | null | undefined>,

		/** The response header override for content disposition. */
		rscd: FormControl<string | null | undefined>,

		/** The response header override for content encoding. */
		rsce: FormControl<string | null | undefined>,

		/** The response header override for content language. */
		rscl: FormControl<string | null | undefined>,

		/** The response header override for content type. */
		rsct: FormControl<string | null | undefined>,

		/** The time at which the shared access signature becomes invalid. */
		signedExpiry: FormControl<Date | null | undefined>,

		/**
		 * A unique value up to 64 characters in length that correlates to an access policy specified for the container, queue, or table.
		 * Max length: 64
		 */
		signedIdentifier: FormControl<string | null | undefined>,

		/** An IP address or a range of IP addresses from which to accept requests. */
		signedIp: FormControl<string | null | undefined>,

		/** The signed permissions for the service SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p). */
		signedPermission: FormControl<AccountSasParametersSignedPermission | null | undefined>,

		/** The protocol permitted for a request made with the account SAS. */
		signedProtocol: FormControl<AccountSasParametersSignedProtocol | null | undefined>,

		/** The signed services accessible with the service SAS. Possible values include: Blob (b), Container (c), File (f), Share (s). */
		signedResource: FormControl<ServiceSasParametersSignedResource | null | undefined>,

		/** The time at which the SAS becomes valid. */
		signedStart: FormControl<Date | null | undefined>,

		/** The start of partition key. */
		startPk: FormControl<string | null | undefined>,

		/** The start of row key. */
		startRk: FormControl<string | null | undefined>,
	}
	export function CreateServiceSasParametersFormGroup() {
		return new FormGroup<ServiceSasParametersFormProperties>({
			canonicalizedResource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endPk: new FormControl<string | null | undefined>(undefined),
			endRk: new FormControl<string | null | undefined>(undefined),
			keyToSign: new FormControl<string | null | undefined>(undefined),
			rscc: new FormControl<string | null | undefined>(undefined),
			rscd: new FormControl<string | null | undefined>(undefined),
			rsce: new FormControl<string | null | undefined>(undefined),
			rscl: new FormControl<string | null | undefined>(undefined),
			rsct: new FormControl<string | null | undefined>(undefined),
			signedExpiry: new FormControl<Date | null | undefined>(undefined),
			signedIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			signedIp: new FormControl<string | null | undefined>(undefined),
			signedPermission: new FormControl<AccountSasParametersSignedPermission | null | undefined>(undefined),
			signedProtocol: new FormControl<AccountSasParametersSignedProtocol | null | undefined>(undefined),
			signedResource: new FormControl<ServiceSasParametersSignedResource | null | undefined>(undefined),
			signedStart: new FormControl<Date | null | undefined>(undefined),
			startPk: new FormControl<string | null | undefined>(undefined),
			startRk: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceSasParametersSignedResource { b = 'b', c = 'c', f = 'f', s = 's' }


	/** One property of operation, include metric specifications. */
	export interface ServiceSpecification {

		/** Metric specifications of operation. */
		metricSpecifications?: Array<MetricSpecification>;
	}

	/** One property of operation, include metric specifications. */
	export interface ServiceSpecificationFormProperties {
	}
	export function CreateServiceSpecificationFormGroup() {
		return new FormGroup<ServiceSpecificationFormProperties>({
		});

	}


	/** Storage SKU and its properties */
	export interface SkuInformation {

		/** The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc. */
		capabilities?: Array<SKUCapability>;

		/** Indicates the type of storage account. */
		kind?: SkuInformationKind | null;

		/** The set of locations that the SKU is available. This will be supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). */
		locations?: Array<string>;

		/**
		 * The SKU name. Required for account creation; optional for update. Note that in older versions, SKU name was called accountType.
		 * Required
		 */
		name: SkuInformationName;

		/** The type of the resource, usually it is 'storageAccounts'. */
		resourceType?: string | null;

		/** The restrictions because of which SKU cannot be used. This is empty if there are no restrictions. */
		restrictions?: Array<Restriction>;

		/** The SKU tier. This is based on the SKU name. */
		tier?: SkuInformationTier | null;
	}

	/** Storage SKU and its properties */
	export interface SkuInformationFormProperties {

		/** Indicates the type of storage account. */
		kind: FormControl<SkuInformationKind | null | undefined>,

		/**
		 * The SKU name. Required for account creation; optional for update. Note that in older versions, SKU name was called accountType.
		 * Required
		 */
		name: FormControl<SkuInformationName | null | undefined>,

		/** The type of the resource, usually it is 'storageAccounts'. */
		resourceType: FormControl<string | null | undefined>,

		/** The SKU tier. This is based on the SKU name. */
		tier: FormControl<SkuInformationTier | null | undefined>,
	}
	export function CreateSkuInformationFormGroup() {
		return new FormGroup<SkuInformationFormProperties>({
			kind: new FormControl<SkuInformationKind | null | undefined>(undefined),
			name: new FormControl<SkuInformationName | null | undefined>(undefined, [Validators.required]),
			resourceType: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<SkuInformationTier | null | undefined>(undefined),
		});

	}

	export enum SkuInformationKind { Storage = 'Storage', StorageV2 = 'StorageV2', BlobStorage = 'BlobStorage', FileStorage = 'FileStorage', BlockBlobStorage = 'BlockBlobStorage' }

	export enum SkuInformationName { Standard_LRS = 'Standard_LRS', Standard_GRS = 'Standard_GRS', Standard_RAGRS = 'Standard_RAGRS', Standard_ZRS = 'Standard_ZRS', Premium_LRS = 'Premium_LRS', Premium_ZRS = 'Premium_ZRS', Standard_GZRS = 'Standard_GZRS', Standard_RAGZRS = 'Standard_RAGZRS' }

	export enum SkuInformationTier { Standard = 'Standard', Premium = 'Premium' }

	export interface StorageAccount {
	}
	export interface StorageAccountFormProperties {
	}
	export function CreateStorageAccountFormGroup() {
		return new FormGroup<StorageAccountFormProperties>({
		});

	}


	/** The parameters used to check the availability of the storage account name. */
	export interface StorageAccountCheckNameAvailabilityParameters {

		/**
		 * The storage account name.
		 * Required
		 */
		name: string;

		/**
		 * The type of resource, Microsoft.Storage/storageAccounts
		 * Required
		 */
		type: StorageAccountCheckNameAvailabilityParametersType;
	}

	/** The parameters used to check the availability of the storage account name. */
	export interface StorageAccountCheckNameAvailabilityParametersFormProperties {

		/**
		 * The storage account name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of resource, Microsoft.Storage/storageAccounts
		 * Required
		 */
		type: FormControl<StorageAccountCheckNameAvailabilityParametersType | null | undefined>,
	}
	export function CreateStorageAccountCheckNameAvailabilityParametersFormGroup() {
		return new FormGroup<StorageAccountCheckNameAvailabilityParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<StorageAccountCheckNameAvailabilityParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StorageAccountCheckNameAvailabilityParametersType { 'Microsoft.Storage/storageAccounts' = 'Microsoft.Storage/storageAccounts' }


	/** The parameters used when creating a storage account. */
	export interface StorageAccountCreateParameters {

		/** Identity for the resource. */
		identity?: Identity;

		/**
		 * Required. Indicates the type of storage account.
		 * Required
		 */
		kind: SkuInformationKind;

		/**
		 * Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
		 * Required
		 */
		location: string;

		/** The parameters used to create the storage account. */
		properties?: StorageAccountPropertiesCreateParameters;

		/**
		 * The SKU of the storage account.
		 * Required
		 */
		sku: any;

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters. */
		tags?: {[id: string]: string };
	}

	/** The parameters used when creating a storage account. */
	export interface StorageAccountCreateParametersFormProperties {

		/**
		 * Required. Indicates the type of storage account.
		 * Required
		 */
		kind: FormControl<SkuInformationKind | null | undefined>,

		/**
		 * Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * The SKU of the storage account.
		 * Required
		 */
		sku: FormControl<any | null | undefined>,

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStorageAccountCreateParametersFormGroup() {
		return new FormGroup<StorageAccountCreateParametersFormProperties>({
			kind: new FormControl<SkuInformationKind | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sku: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The URIs that are used to perform a retrieval of a public blob, file, web or dfs object via a internet routing endpoint. */
	export interface StorageAccountInternetEndpoints {

		/** Gets the blob endpoint. */
		blob?: string | null;

		/** Gets the dfs endpoint. */
		dfs?: string | null;

		/** Gets the file endpoint. */
		file?: string | null;

		/** Gets the web endpoint. */
		web?: string | null;
	}

	/** The URIs that are used to perform a retrieval of a public blob, file, web or dfs object via a internet routing endpoint. */
	export interface StorageAccountInternetEndpointsFormProperties {

		/** Gets the blob endpoint. */
		blob: FormControl<string | null | undefined>,

		/** Gets the dfs endpoint. */
		dfs: FormControl<string | null | undefined>,

		/** Gets the file endpoint. */
		file: FormControl<string | null | undefined>,

		/** Gets the web endpoint. */
		web: FormControl<string | null | undefined>,
	}
	export function CreateStorageAccountInternetEndpointsFormGroup() {
		return new FormGroup<StorageAccountInternetEndpointsFormProperties>({
			blob: new FormControl<string | null | undefined>(undefined),
			dfs: new FormControl<string | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
			web: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An access key for the storage account. */
	export interface StorageAccountKey {

		/** Name of the key. */
		keyName?: string | null;

		/** Permissions for the key -- read-only or full permissions. */
		permissions?: StorageAccountKeyPermissions | null;

		/** Base 64-encoded value of the key. */
		value?: string | null;
	}

	/** An access key for the storage account. */
	export interface StorageAccountKeyFormProperties {

		/** Name of the key. */
		keyName: FormControl<string | null | undefined>,

		/** Permissions for the key -- read-only or full permissions. */
		permissions: FormControl<StorageAccountKeyPermissions | null | undefined>,

		/** Base 64-encoded value of the key. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateStorageAccountKeyFormGroup() {
		return new FormGroup<StorageAccountKeyFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined),
			permissions: new FormControl<StorageAccountKeyPermissions | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StorageAccountKeyPermissions { Read = 'Read', Full = 'Full' }


	/** The response from the ListKeys operation. */
	export interface StorageAccountListKeysResult {

		/** Gets the list of storage account keys and their properties for the specified storage account. */
		keys?: Array<StorageAccountKey>;
	}

	/** The response from the ListKeys operation. */
	export interface StorageAccountListKeysResultFormProperties {
	}
	export function CreateStorageAccountListKeysResultFormGroup() {
		return new FormGroup<StorageAccountListKeysResultFormProperties>({
		});

	}


	/** The response from the List Storage Accounts operation. */
	export interface StorageAccountListResult {

		/** Request URL that can be used to query next page of storage accounts. Returned when total number of requested storage accounts exceed maximum page size. */
		nextLink?: string | null;

		/** Gets the list of storage accounts and their properties. */
		value?: Array<StorageAccount>;
	}

	/** The response from the List Storage Accounts operation. */
	export interface StorageAccountListResultFormProperties {

		/** Request URL that can be used to query next page of storage accounts. Returned when total number of requested storage accounts exceed maximum page size. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateStorageAccountListResultFormGroup() {
		return new FormGroup<StorageAccountListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object via a microsoft routing endpoint. */
	export interface StorageAccountMicrosoftEndpoints {

		/** Gets the blob endpoint. */
		blob?: string | null;

		/** Gets the dfs endpoint. */
		dfs?: string | null;

		/** Gets the file endpoint. */
		file?: string | null;

		/** Gets the queue endpoint. */
		queue?: string | null;

		/** Gets the table endpoint. */
		table?: string | null;

		/** Gets the web endpoint. */
		web?: string | null;
	}

	/** The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object via a microsoft routing endpoint. */
	export interface StorageAccountMicrosoftEndpointsFormProperties {

		/** Gets the blob endpoint. */
		blob: FormControl<string | null | undefined>,

		/** Gets the dfs endpoint. */
		dfs: FormControl<string | null | undefined>,

		/** Gets the file endpoint. */
		file: FormControl<string | null | undefined>,

		/** Gets the queue endpoint. */
		queue: FormControl<string | null | undefined>,

		/** Gets the table endpoint. */
		table: FormControl<string | null | undefined>,

		/** Gets the web endpoint. */
		web: FormControl<string | null | undefined>,
	}
	export function CreateStorageAccountMicrosoftEndpointsFormGroup() {
		return new FormGroup<StorageAccountMicrosoftEndpointsFormProperties>({
			blob: new FormControl<string | null | undefined>(undefined),
			dfs: new FormControl<string | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
			queue: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			web: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the storage account. */
	export interface StorageAccountProperties {

		/** Required for storage accounts where kind = BlobStorage. The access tier used for billing. */
		accessTier?: StorageAccountPropertiesAccessTier | null;

		/** Settings for Azure Files identity based authentication. */
		azureFilesIdentityBasedAuthentication?: AzureFilesIdentityBasedAuthentication;

		/** Blob restore status. */
		blobRestoreStatus?: BlobRestoreStatus;

		/** Gets the creation date and time of the storage account in UTC. */
		creationTime?: Date | null;

		/** The custom domain assigned to this storage account. This can be set via Update. */
		customDomain?: CustomDomain;

		/** The encryption settings on the storage account. */
		encryption?: Encryption;

		/** If the failover is in progress, the value will be true, otherwise, it will be null. */
		failoverInProgress?: boolean | null;

		/** Statistics related to replication for storage account's Blob, Table, Queue and File services. It is only available when geo-redundant replication is enabled for the storage account. */
		geoReplicationStats?: GeoReplicationStats;

		/** Account HierarchicalNamespace enabled if sets to true. */
		isHnsEnabled?: boolean | null;

		/** Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled. */
		largeFileSharesState?: StorageAccountPropertiesLargeFileSharesState | null;

		/** Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS. */
		lastGeoFailoverTime?: Date | null;

		/** Network rule set */
		networkAcls?: NetworkRuleSet;

		/** The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object. */
		primaryEndpoints?: Endpoints;

		/** Gets the location of the primary data center for the storage account. */
		primaryLocation?: string | null;

		/** List of private endpoint connection associated with the specified storage account */
		privateEndpointConnections?: Array<PrivateEndpointConnection>;

		/** Gets the status of the storage account at the time the operation was called. */
		provisioningState?: StorageAccountPropertiesProvisioningState | null;

		/** Routing preference defines the type of network, either microsoft or internet routing to be used to deliver the user data, the default option is microsoft routing */
		routingPreference?: RoutingPreference;

		/** The URIs that are used to perform a retrieval of a public blob, queue, table, web or dfs object. */
		secondaryEndpoints?: Endpoints;

		/** Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS. */
		secondaryLocation?: string | null;

		/** Gets the status indicating whether the primary location of the storage account is available or unavailable. */
		statusOfPrimary?: StorageAccountPropertiesStatusOfPrimary | null;

		/** Gets the status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS. */
		statusOfSecondary?: StorageAccountPropertiesStatusOfPrimary | null;

		/** Allows https traffic only to storage service if sets to true. */
		supportsHttpsTrafficOnly?: boolean | null;
	}

	/** Properties of the storage account. */
	export interface StorageAccountPropertiesFormProperties {

		/** Required for storage accounts where kind = BlobStorage. The access tier used for billing. */
		accessTier: FormControl<StorageAccountPropertiesAccessTier | null | undefined>,

		/** Gets the creation date and time of the storage account in UTC. */
		creationTime: FormControl<Date | null | undefined>,

		/** If the failover is in progress, the value will be true, otherwise, it will be null. */
		failoverInProgress: FormControl<boolean | null | undefined>,

		/** Account HierarchicalNamespace enabled if sets to true. */
		isHnsEnabled: FormControl<boolean | null | undefined>,

		/** Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled. */
		largeFileSharesState: FormControl<StorageAccountPropertiesLargeFileSharesState | null | undefined>,

		/** Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS. */
		lastGeoFailoverTime: FormControl<Date | null | undefined>,

		/** Gets the location of the primary data center for the storage account. */
		primaryLocation: FormControl<string | null | undefined>,

		/** Gets the status of the storage account at the time the operation was called. */
		provisioningState: FormControl<StorageAccountPropertiesProvisioningState | null | undefined>,

		/** Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS. */
		secondaryLocation: FormControl<string | null | undefined>,

		/** Gets the status indicating whether the primary location of the storage account is available or unavailable. */
		statusOfPrimary: FormControl<StorageAccountPropertiesStatusOfPrimary | null | undefined>,

		/** Gets the status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS. */
		statusOfSecondary: FormControl<StorageAccountPropertiesStatusOfPrimary | null | undefined>,

		/** Allows https traffic only to storage service if sets to true. */
		supportsHttpsTrafficOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateStorageAccountPropertiesFormGroup() {
		return new FormGroup<StorageAccountPropertiesFormProperties>({
			accessTier: new FormControl<StorageAccountPropertiesAccessTier | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			failoverInProgress: new FormControl<boolean | null | undefined>(undefined),
			isHnsEnabled: new FormControl<boolean | null | undefined>(undefined),
			largeFileSharesState: new FormControl<StorageAccountPropertiesLargeFileSharesState | null | undefined>(undefined),
			lastGeoFailoverTime: new FormControl<Date | null | undefined>(undefined),
			primaryLocation: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<StorageAccountPropertiesProvisioningState | null | undefined>(undefined),
			secondaryLocation: new FormControl<string | null | undefined>(undefined),
			statusOfPrimary: new FormControl<StorageAccountPropertiesStatusOfPrimary | null | undefined>(undefined),
			statusOfSecondary: new FormControl<StorageAccountPropertiesStatusOfPrimary | null | undefined>(undefined),
			supportsHttpsTrafficOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum StorageAccountPropertiesAccessTier { Hot = 'Hot', Cool = 'Cool' }

	export enum StorageAccountPropertiesLargeFileSharesState { Disabled = 'Disabled', Enabled = 'Enabled' }

	export enum StorageAccountPropertiesProvisioningState { Creating = 'Creating', ResolvingDNS = 'ResolvingDNS', Succeeded = 'Succeeded' }

	export enum StorageAccountPropertiesStatusOfPrimary { available = 'available', unavailable = 'unavailable' }


	/** The parameters used to create the storage account. */
	export interface StorageAccountPropertiesCreateParameters {

		/** Required for storage accounts where kind = BlobStorage. The access tier used for billing. */
		accessTier?: StorageAccountPropertiesAccessTier | null;

		/** Settings for Azure Files identity based authentication. */
		azureFilesIdentityBasedAuthentication?: AzureFilesIdentityBasedAuthentication;

		/** The custom domain assigned to this storage account. This can be set via Update. */
		customDomain?: CustomDomain;

		/** The encryption settings on the storage account. */
		encryption?: Encryption;

		/** Account HierarchicalNamespace enabled if sets to true. */
		isHnsEnabled?: boolean | null;

		/** Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled. */
		largeFileSharesState?: StorageAccountPropertiesLargeFileSharesState | null;

		/** Network rule set */
		networkAcls?: NetworkRuleSet;

		/** Routing preference defines the type of network, either microsoft or internet routing to be used to deliver the user data, the default option is microsoft routing */
		routingPreference?: RoutingPreference;

		/** Allows https traffic only to storage service if sets to true. The default value is true since API version 2019-04-01. */
		supportsHttpsTrafficOnly?: boolean | null;
	}

	/** The parameters used to create the storage account. */
	export interface StorageAccountPropertiesCreateParametersFormProperties {

		/** Required for storage accounts where kind = BlobStorage. The access tier used for billing. */
		accessTier: FormControl<StorageAccountPropertiesAccessTier | null | undefined>,

		/** Account HierarchicalNamespace enabled if sets to true. */
		isHnsEnabled: FormControl<boolean | null | undefined>,

		/** Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled. */
		largeFileSharesState: FormControl<StorageAccountPropertiesLargeFileSharesState | null | undefined>,

		/** Allows https traffic only to storage service if sets to true. The default value is true since API version 2019-04-01. */
		supportsHttpsTrafficOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateStorageAccountPropertiesCreateParametersFormGroup() {
		return new FormGroup<StorageAccountPropertiesCreateParametersFormProperties>({
			accessTier: new FormControl<StorageAccountPropertiesAccessTier | null | undefined>(undefined),
			isHnsEnabled: new FormControl<boolean | null | undefined>(undefined),
			largeFileSharesState: new FormControl<StorageAccountPropertiesLargeFileSharesState | null | undefined>(undefined),
			supportsHttpsTrafficOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The parameters used when updating a storage account. */
	export interface StorageAccountPropertiesUpdateParameters {

		/** Required for storage accounts where kind = BlobStorage. The access tier used for billing. */
		accessTier?: StorageAccountPropertiesAccessTier | null;

		/** Settings for Azure Files identity based authentication. */
		azureFilesIdentityBasedAuthentication?: AzureFilesIdentityBasedAuthentication;

		/** The custom domain assigned to this storage account. This can be set via Update. */
		customDomain?: CustomDomain;

		/** The encryption settings on the storage account. */
		encryption?: Encryption;

		/** Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled. */
		largeFileSharesState?: StorageAccountPropertiesLargeFileSharesState | null;

		/** Network rule set */
		networkAcls?: NetworkRuleSet;

		/** Routing preference defines the type of network, either microsoft or internet routing to be used to deliver the user data, the default option is microsoft routing */
		routingPreference?: RoutingPreference;

		/** Allows https traffic only to storage service if sets to true. */
		supportsHttpsTrafficOnly?: boolean | null;
	}

	/** The parameters used when updating a storage account. */
	export interface StorageAccountPropertiesUpdateParametersFormProperties {

		/** Required for storage accounts where kind = BlobStorage. The access tier used for billing. */
		accessTier: FormControl<StorageAccountPropertiesAccessTier | null | undefined>,

		/** Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled. */
		largeFileSharesState: FormControl<StorageAccountPropertiesLargeFileSharesState | null | undefined>,

		/** Allows https traffic only to storage service if sets to true. */
		supportsHttpsTrafficOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateStorageAccountPropertiesUpdateParametersFormGroup() {
		return new FormGroup<StorageAccountPropertiesUpdateParametersFormProperties>({
			accessTier: new FormControl<StorageAccountPropertiesAccessTier | null | undefined>(undefined),
			largeFileSharesState: new FormControl<StorageAccountPropertiesLargeFileSharesState | null | undefined>(undefined),
			supportsHttpsTrafficOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The parameters used to regenerate the storage account key. */
	export interface StorageAccountRegenerateKeyParameters {

		/**
		 * The name of storage keys that want to be regenerated, possible values are key1, key2, kerb1, kerb2.
		 * Required
		 */
		keyName: string;
	}

	/** The parameters used to regenerate the storage account key. */
	export interface StorageAccountRegenerateKeyParametersFormProperties {

		/**
		 * The name of storage keys that want to be regenerated, possible values are key1, key2, kerb1, kerb2.
		 * Required
		 */
		keyName: FormControl<string | null | undefined>,
	}
	export function CreateStorageAccountRegenerateKeyParametersFormGroup() {
		return new FormGroup<StorageAccountRegenerateKeyParametersFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters that can be provided when updating the storage account properties. */
	export interface StorageAccountUpdateParameters {

		/** Identity for the resource. */
		identity?: Identity;

		/** Optional. Indicates the type of storage account. Currently only StorageV2 value supported by server. */
		kind?: SkuInformationKind | null;

		/** The parameters used when updating a storage account. */
		properties?: StorageAccountPropertiesUpdateParameters;

		/** The SKU of the storage account. */
		sku?: any;

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater in length than 128 characters and a value no greater in length than 256 characters. */
		tags?: {[id: string]: string };
	}

	/** The parameters that can be provided when updating the storage account properties. */
	export interface StorageAccountUpdateParametersFormProperties {

		/** Optional. Indicates the type of storage account. Currently only StorageV2 value supported by server. */
		kind: FormControl<SkuInformationKind | null | undefined>,

		/** The SKU of the storage account. */
		sku: FormControl<any | null | undefined>,

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater in length than 128 characters and a value no greater in length than 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStorageAccountUpdateParametersFormGroup() {
		return new FormGroup<StorageAccountUpdateParametersFormProperties>({
			kind: new FormControl<SkuInformationKind | null | undefined>(undefined),
			sku: new FormControl<any | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The response from the List Storage SKUs operation. */
	export interface StorageSkuListResult {

		/** Get the list result of storage SKUs and their properties. */
		value?: Array<SkuInformation>;
	}

	/** The response from the List Storage SKUs operation. */
	export interface StorageSkuListResultFormProperties {
	}
	export function CreateStorageSkuListResultFormGroup() {
		return new FormGroup<StorageSkuListResultFormProperties>({
		});

	}


	/** Describes Storage Resource Usage. */
	export interface Usage {

		/** Gets the current count of the allocated resources in the subscription. */
		currentValue?: number | null;

		/** Gets the maximum count of the resources that can be allocated in the subscription. */
		limit?: number | null;

		/** The usage names that can be used; currently limited to StorageAccount. */
		name?: UsageName;

		/** Gets the unit of measurement. */
		unit?: UsageUnit | null;
	}

	/** Describes Storage Resource Usage. */
	export interface UsageFormProperties {

		/** Gets the current count of the allocated resources in the subscription. */
		currentValue: FormControl<number | null | undefined>,

		/** Gets the maximum count of the resources that can be allocated in the subscription. */
		limit: FormControl<number | null | undefined>,

		/** Gets the unit of measurement. */
		unit: FormControl<UsageUnit | null | undefined>,
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<UsageUnit | null | undefined>(undefined),
		});

	}

	export enum UsageUnit { Count = 'Count', Bytes = 'Bytes', Seconds = 'Seconds', Percent = 'Percent', CountsPerSecond = 'CountsPerSecond', BytesPerSecond = 'BytesPerSecond' }


	/** The response from the List Usages operation. */
	export interface UsageListResult {

		/** Gets or sets the list of Storage Resource Usages. */
		value?: Array<Usage>;
	}

	/** The response from the List Usages operation. */
	export interface UsageListResultFormProperties {
	}
	export function CreateUsageListResultFormGroup() {
		return new FormGroup<UsageListResultFormProperties>({
		});

	}


	/** The usage names that can be used; currently limited to StorageAccount. */
	export interface UsageName {

		/** Gets a localized string describing the resource name. */
		localizedValue?: string | null;

		/** Gets a string describing the resource name. */
		value?: string | null;
	}

	/** The usage names that can be used; currently limited to StorageAccount. */
	export interface UsageNameFormProperties {

		/** Gets a localized string describing the resource name. */
		localizedValue: FormControl<string | null | undefined>,

		/** Gets a string describing the resource name. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUsageNameFormGroup() {
		return new FormGroup<UsageNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Storage Rest API operations.
		 * Get providers/Microsoft.Storage/operations
		 * @param {string} api_version The API version to use for this operation.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Storage/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Checks that the storage account name is valid and is not already in use.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Storage/checkNameAvailability
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {StorageAccountCheckNameAvailabilityParameters} requestBody The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @return {CheckNameAvailabilityResult} OK -- Operation to check the storage account name availability was successful.
		 */
		StorageAccounts_CheckNameAvailability(api_version: string, subscriptionId: string, requestBody: StorageAccountCheckNameAvailabilityParameters): Observable<CheckNameAvailabilityResult> {
			return this.http.post<CheckNameAvailabilityResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Storage/checkNameAvailability?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the current usage count and the limit for the resources of the location under the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Storage/locations/{location}/usages
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} location The location of the Azure Storage resource.
		 * @return {UsageListResult} OK -- current usage count and limit retrieved and returned successfully.
		 */
		Usages_ListByLocation(api_version: string, subscriptionId: string, location: string): Observable<UsageListResult> {
			return this.http.get<UsageListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Storage/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/usages?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the available SKUs supported by Microsoft.Storage for given subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Storage/skus
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {StorageSkuListResult} OK -- List of storage SKUs in the given subscription retrieved and returned successfully.
		 */
		Skus_List(api_version: string, subscriptionId: string): Observable<StorageSkuListResult> {
			return this.http.get<StorageSkuListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Storage/skus?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the storage accounts available under the subscription. Note that storage keys are not returned; use the ListKeys operation for this.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Storage/storageAccounts
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {StorageAccountListResult} OK -- List of storage accounts was retrieved and returned successfully.
		 */
		StorageAccounts_List(api_version: string, subscriptionId: string): Observable<StorageAccountListResult> {
			return this.http.get<StorageAccountListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Storage/storageAccounts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the storage accounts available under the given resource group. Note that storage keys are not returned; use the ListKeys operation for this.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {StorageAccountListResult} OK -- List of storage accounts in the given resource group retrieved and returned successfully.
		 */
		StorageAccounts_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<StorageAccountListResult> {
			return this.http.get<StorageAccountListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the properties for the specified storage account including but not limited to name, SKU name, location, and account status. The ListKeys operation should be used to retrieve storage keys.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {StorageAccounts_GetPropertiesExpand} expand May be used to expand the properties within account's properties. By default, data is not included when fetching properties. Currently we only support geoReplicationStats and blobRestoreStatus.
		 * @return {StorageAccount} OK -- properties retrieved successfully for the storage account.
		 */
		StorageAccounts_GetProperties(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, expand: StorageAccounts_GetPropertiesExpand | null | undefined): Observable<StorageAccount> {
			return this.http.get<StorageAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + expand, {});
		}

		/**
		 * Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {StorageAccountCreateParameters} requestBody The parameters to provide for the created account.
		 * @return {StorageAccount} OK -- returned when the storage account was already created from a previous request with the same properties specified in the request body.
		 */
		StorageAccounts_Create(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, requestBody: StorageAccountCreateParameters): Observable<StorageAccount> {
			return this.http.put<StorageAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a storage account in Microsoft Azure.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} OK -- storage account deleted successfully.
		 */
		StorageAccounts_Delete(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * The update operation can be used to update the SKU, encryption, access tier, or tags for a storage account. It can also be used to map the account to a custom domain. Only one custom domain is supported per storage account; the replacement/change of custom domain is not supported. In order to replace an old custom domain, the old value must be cleared/unregistered before a new value can be set. The update of multiple properties is supported. This call does not change the storage keys for the account. If you want to change the storage account keys, use the regenerate keys operation. The location and name of the storage account cannot be changed after creation.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {StorageAccountUpdateParameters} requestBody The parameters to provide for the updated account.
		 * @return {StorageAccount} OK -- storage account properties updated successfully.
		 */
		StorageAccounts_Update(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, requestBody: StorageAccountUpdateParameters): Observable<StorageAccount> {
			return this.http.patch<StorageAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List SAS credentials of a storage account.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/ListAccountSas
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {AccountSasParameters} requestBody The parameters to provide to list SAS credentials for the storage account.
		 * @return {ListAccountSasResponse} OK -- returned the account SAS created for the storage account requested.
		 */
		StorageAccounts_ListAccountSAS(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, requestBody: AccountSasParameters): Observable<ListAccountSasResponse> {
			return this.http.post<ListAccountSasResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/ListAccountSas&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List service SAS credentials of a specific resource.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/ListServiceSas
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ServiceSasParameters} requestBody The parameters to provide to list service SAS credentials.
		 * @return {ListServiceSasResponse} OK -- returned the service SAS created for the storage service requested.
		 */
		StorageAccounts_ListServiceSAS(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, requestBody: ServiceSasParameters): Observable<ListServiceSasResponse> {
			return this.http.post<ListServiceSasResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/ListServiceSas&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Failover request can be triggered for a storage account in case of availability issues. The failover occurs from the storage account's primary cluster to secondary cluster for RA-GRS accounts. The secondary cluster will become primary after failover.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/failover
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} OK -- Returned when the storage account failover is completed, and the secondary cluster has become primary.
		 */
		StorageAccounts_Failover(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/failover&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the access keys or Kerberos keys (if active directory enabled) for the specified storage account.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/listKeys
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {StorageAccounts_ListKeysExpand} expand Specifies type of the key to be listed. Possible value is kerb.
		 * @return {StorageAccountListKeysResult} OK -- list of keys retrieved and returned successfully.
		 */
		StorageAccounts_ListKeys(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, expand: StorageAccounts_ListKeysExpand | null | undefined): Observable<StorageAccountListKeysResult> {
			return this.http.post<StorageAccountListKeysResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + expand, null, {});
		}

		/**
		 * Gets the managementpolicy associated with the specified storage account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ManagementPolicies_GetManagementPolicyName} managementPolicyName The name of the Storage Account Management Policy. It should always be 'default'
		 * @return {ManagementPolicy} OK -- Get the managementpolicy successfully.
		 */
		ManagementPolicies_Get(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, managementPolicyName: ManagementPolicies_GetManagementPolicyName): Observable<ManagementPolicy> {
			return this.http.get<ManagementPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/managementPolicies/' + managementPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Sets the managementpolicy to the specified storage account.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ManagementPolicies_GetManagementPolicyName} managementPolicyName The name of the Storage Account Management Policy. It should always be 'default'
		 * @param {ManagementPolicy} requestBody The ManagementPolicy set to a storage account.
		 * @return {ManagementPolicy} OK -- Put managementpolicy successfully.
		 */
		ManagementPolicies_CreateOrUpdate(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, managementPolicyName: ManagementPolicies_GetManagementPolicyName, requestBody: ManagementPolicy): Observable<ManagementPolicy> {
			return this.http.put<ManagementPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/managementPolicies/' + managementPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the managementpolicy associated with the specified storage account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ManagementPolicies_GetManagementPolicyName} managementPolicyName The name of the Storage Account Management Policy. It should always be 'default'
		 * @return {void} OK -- Delete the managementpolicy successfully.
		 */
		ManagementPolicies_Delete(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, managementPolicyName: ManagementPolicies_GetManagementPolicyName): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/managementPolicies/' + managementPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified private endpoint connection associated with the storage account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} privateEndpointConnectionName The name of the private endpoint connection associated with the Storage Account
		 * @return {PrivateEndpointConnection} OK -- Get the private endpoint connection properties successfully.
		 */
		PrivateEndpointConnections_Get(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, privateEndpointConnectionName: string): Observable<PrivateEndpointConnection> {
			return this.http.get<PrivateEndpointConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update the state of specified private endpoint connection associated with the storage account.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} privateEndpointConnectionName The name of the private endpoint connection associated with the Storage Account
		 * @param {PrivateEndpointConnection} requestBody The private endpoint connection properties.
		 * @return {PrivateEndpointConnection} OK -- Update the private endpoint connection properties successfully.
		 */
		PrivateEndpointConnections_Put(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, privateEndpointConnectionName: string, requestBody: PrivateEndpointConnection): Observable<PrivateEndpointConnection> {
			return this.http.put<PrivateEndpointConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified private endpoint connection associated with the storage account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} privateEndpointConnectionName The name of the private endpoint connection associated with the Storage Account
		 * @return {void} OK -- Delete the private endpoint connection successfully.
		 */
		PrivateEndpointConnections_Delete(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, privateEndpointConnectionName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the private link resources that need to be created for a storage account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/privateLinkResources
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PrivateLinkResourceListResult} Successfully retrieved private link resources.
		 */
		PrivateLinkResources_ListByStorageAccount(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string): Observable<PrivateLinkResourceListResult> {
			return this.http.get<PrivateLinkResourceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/privateLinkResources&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Regenerates one of the access keys or Kerberos keys for the specified storage account.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/regenerateKey
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {StorageAccountRegenerateKeyParameters} requestBody Specifies name of the key which should be regenerated -- key1, key2, kerb1, kerb2.
		 * @return {StorageAccountListKeysResult} OK -- specified key regenerated successfully.
		 */
		StorageAccounts_RegenerateKey(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, requestBody: StorageAccountRegenerateKeyParameters): Observable<StorageAccountListKeysResult> {
			return this.http.post<StorageAccountListKeysResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/regenerateKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restore blobs in the specified blob ranges
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/restoreBlobRanges
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {BlobRestoreParameters} requestBody The parameters to provide for restore blob ranges.
		 * @return {BlobRestoreStatus} OK -- returned when blob ranges are restored completely with the same properties specified in the request body.
		 */
		StorageAccounts_RestoreBlobRanges(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, requestBody: BlobRestoreParameters): Observable<BlobRestoreStatus> {
			return this.http.post<BlobRestoreStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/restoreBlobRanges&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revoke user delegation keys.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/revokeUserDelegationKeys
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} OK -- revoke user delegation keys succeeded.
		 */
		StorageAccounts_RevokeUserDelegationKeys(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/revokeUserDelegationKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

	export enum StorageAccounts_GetPropertiesExpand { geoReplicationStats = 'geoReplicationStats', blobRestoreStatus = 'blobRestoreStatus' }

	export enum StorageAccounts_ListKeysExpand { kerb = 'kerb' }

	export enum ManagementPolicies_GetManagementPolicyName { default = 'default' }

}

